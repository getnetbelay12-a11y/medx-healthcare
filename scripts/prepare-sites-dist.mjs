import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";

await mkdir("dist/server", { recursive: true });
await mkdir("dist/.openai", { recursive: true });
await rm("dist/dev", { recursive: true, force: true });
await rm("dist/client", { recursive: true, force: true });
await mkdir("dist/client", { recursive: true });
await cp(".openai/hosting.json", "dist/.openai/hosting.json");

const serverOnlyEntries = new Set([".openai", "client", "dev", "server"]);

for (const entry of await readdir("dist")) {
  if (serverOnlyEntries.has(entry)) {
    continue;
  }

  await cp(`dist/${entry}`, `dist/client/${entry}`, { recursive: true });
}

await writeFile(
  "dist/server/index.js",
  `const APP_VERSION = "0.1.0";
const rateLimitStore = new Map();

function json(data, status = 200) {
  return withSecurityHeaders(
    new Response(JSON.stringify(data), {
      status,
      headers: { "content-type": "application/json; charset=utf-8" },
    }),
  );
}

function withSecurityHeaders(response) {
  const headers = new Headers(response.headers);
  headers.set("x-content-type-options", "nosniff");
  headers.set("referrer-policy", "strict-origin-when-cross-origin");
  headers.set("permissions-policy", "camera=(), microphone=(), geolocation=()");
  headers.set("x-frame-options", "DENY");
  headers.set(
    "content-security-policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src https://challenges.cloudflare.com; connect-src 'self'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'",
  );
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

async function finalizeAssetResponse(response, url) {
  const headers = new Headers(response.headers);
  const contentType = headers.get("content-type") || "";
  const likelyHtml =
    !url.pathname.includes(".") ||
    url.pathname.endsWith("/") ||
    url.pathname.endsWith(".html");

  if (contentType.includes("text/html") || likelyHtml) {
    const html = await response.text();
    return withSecurityHeaders(
      new Response(html.replaceAll("http://localhost:3000", url.origin), {
        status: response.status,
        statusText: response.statusText,
        headers,
      }),
    );
  }

  return withSecurityHeaders(response);
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function requestId() {
  const stamp = new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
  const random = crypto.randomUUID().slice(0, 8).toUpperCase();
  return \`MEDX-\${stamp}-\${random}\`;
}

function clientIp(request) {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

function rateLimit(key) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const max = 5;
  const current = rateLimitStore.get(key) || [];
  const recent = current.filter((time) => now - time < windowMs);
  recent.push(now);
  rateLimitStore.set(key, recent);
  return recent.length <= max;
}

function validateEmail(value) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
}

function tooManyLinks(value) {
  return ((String(value).match(/https?:\\/\\/|www\\./gi) || []).length > 2);
}

function validateContact(body) {
  const required = [
    "fullName",
    "organization",
    "email",
    "country",
    "cityRegion",
    "inquiryType",
    "productService",
    "urgency",
    "preferredTimeline",
    "message",
  ];
  for (const key of required) {
    if (!String(body[key] || "").trim()) return \`\${key} is required.\`;
  }
  if (!validateEmail(String(body.email))) return "A valid email is required.";
  if (String(body.message).length < 20 || String(body.message).length > 2000) {
    return "Message must be between 20 and 2000 characters.";
  }
  if (String(body.fullName).length > 120 || String(body.organization).length > 160) {
    return "Submitted fields exceed allowed length.";
  }
  if (body.website) return "Submission rejected.";
  if (!body.privacyConsent) return "Privacy consent is required.";
  if (tooManyLinks(body.message)) return "Please limit links in the message.";
  const elapsed = Date.now() - Number(body.startedAt || 0);
  if (!Number.isFinite(elapsed) || elapsed < 2500 || elapsed > 1000 * 60 * 60 * 4) {
    return "Submission timing failed. Please try again.";
  }
  return "";
}

function validateQuickChat(body) {
  const message = String(body.message || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();

  if (!message) return "Message is required.";
  if (!body.privacyConsent) return "Privacy consent is required.";
  if (!email && !phone) return "Enter an email address or phone number.";
  if (email && !validateEmail(email)) return "Enter a valid email address.";
  if (phone && !/^[+\\d\\s().-]{7,40}$/.test(phone)) return "Enter a valid phone number.";
  if (tooManyLinks(message)) return "Please limit links in the message.";
  return "";
}

function normalizeQuickChat(body) {
  const fullName = String(body.fullName || "").trim();
  const organization = String(body.organization || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const service = String(body.service || "").trim();

  return {
    fullName: fullName || "Website visitor",
    organization: organization || "Not provided",
    email: email || undefined,
    phone,
    country: "Not specified",
    cityRegion: "Not specified",
    inquiryType: service.includes("Partnership")
      ? "Partnership inquiry"
      : service.includes("Pharmaceutical")
        ? "Pharmaceutical request"
        : service.includes("Medical devices")
          ? "Medical-device request"
          : service.includes("Diagnostic")
            ? "Diagnostic inquiry"
            : service.includes("Cervical")
              ? "Cervical-screening program"
              : service.includes("Public-health")
                ? "Public-health program"
                : "Product and supply request",
    productService: service || "Quick chat request",
    estimatedQuantity: "",
    urgency: "Routine",
    preferredTimeline: "Exploratory",
    message: String(body.message || "").trim(),
    turnstileToken: "",
  };
}

async function verifyTurnstile(token, request, env) {
  if (!env.TURNSTILE_SECRET_KEY) return true;
  if (!token) return false;
  const form = new FormData();
  form.append("secret", env.TURNSTILE_SECRET_KEY);
  form.append("response", token);
  form.append("remoteip", clientIp(request));
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  });
  const result = await response.json().catch(() => ({}));
  return Boolean(result.success);
}

function deliveryFailureMessage(env, id, prefix) {
  if (env.NEXT_PUBLIC_COMPANY_EMAIL || env.NEXT_PUBLIC_COMPANY_PHONE) {
    return \`\${prefix}. Please use the contact details listed on this page. Reference ID: \${id}.\`;
  }

  return \`\${prefix}. Please try again later. Reference ID: \${id}.\`;
}

async function sendResendEmail(env, payload, id) {
  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.RESEND_FROM_EMAIL) {
    return {
      ok: false,
      message: deliveryFailureMessage(env, id, "Online inquiry delivery is not configured yet"),
    };
  }

  const rows = [
    ["Reference", id],
    ["Name", payload.fullName],
    ["Organization", payload.organization],
    ["Email", payload.email],
    ["Phone", payload.phone || "Not provided"],
    ["Country", payload.country],
    ["City/Region", payload.cityRegion],
    ["Inquiry type", payload.inquiryType],
    ["Product/service", payload.productService],
    ["Estimated quantity", payload.estimatedQuantity || "Not provided"],
    ["Urgency", payload.urgency],
    ["Preferred timeline", payload.preferredTimeline],
    ["Message", payload.message],
  ];
  const htmlRows = rows
    .map(([label, value]) => \`<tr><th align="left">\${escapeHtml(label)}</th><td>\${escapeHtml(value)}</td></tr>\`)
    .join("");
  const html = \`<h1>MedX inquiry \${escapeHtml(id)}</h1><table cellpadding="8" cellspacing="0">\${htmlRows}</table>\`;

  const notification = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: \`Bearer \${env.RESEND_API_KEY}\`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: env.RESEND_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: payload.email,
      subject: \`MedX inquiry: \${id}\`,
      html,
    }),
  });

  if (!notification.ok) {
    return { ok: false, message: deliveryFailureMessage(env, id, "Email delivery failed") };
  }

  if (payload.email) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: \`Bearer \${env.RESEND_API_KEY}\`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: env.RESEND_FROM_EMAIL,
        to: [payload.email],
        subject: \`MedX inquiry received: \${id}\`,
        html: \`<p>Thank you for contacting MedX Healthcare Solutions.</p><p>Your inquiry reference is <strong>\${escapeHtml(id)}</strong>.</p>\`,
      }),
    });
  }

  return { ok: true };
}

function leadNotificationText(payload, id) {
  const location = [payload.cityRegion, payload.country]
    .filter((value) => value && value !== "Not specified")
    .join(", ");
  const quantity = payload.estimatedQuantity?.trim() || "Not provided";

  return [
    "*New MedX website request*",
    \`Reference: \${id}\`,
    "",
    \`Service: \${payload.productService}\`,
    \`Inquiry type: \${payload.inquiryType}\`,
    \`Urgency: \${payload.urgency}\`,
    \`Timeline: \${payload.preferredTimeline}\`,
    \`Estimated quantity: \${quantity}\`,
    "",
    "*Contact*",
    \`Name: \${payload.fullName}\`,
    \`Organization: \${payload.organization}\`,
    \`Email: \${payload.email || "Not provided"}\`,
    \`Phone: \${payload.phone || "Not provided"}\`,
    \`Location: \${location || "Not provided"}\`,
    "",
    "*Message*",
    payload.message,
  ].join("\\n");
}

function normalizeE164Phone(value = "") {
  const trimmed = String(value).trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("+")) return \`+\${trimmed.replace(/\\D/g, "")}\`;
  const digits = trimmed.replace(/\\D/g, "");
  if (digits.length === 10) return \`+1\${digits}\`;
  return digits ? \`+\${digits}\` : "";
}

function whatsappAddress(value = "") {
  if (String(value).startsWith("whatsapp:")) return String(value);
  const phone = normalizeE164Phone(value);
  return phone ? \`whatsapp:\${phone}\` : "";
}

async function sendTwilioMessage(env, { from, to, body }) {
  if (!env.TWILIO_ACCOUNT_SID || !env.TWILIO_AUTH_TOKEN || !from || !to) {
    return false;
  }

  const credentials = btoa(\`\${env.TWILIO_ACCOUNT_SID}:\${env.TWILIO_AUTH_TOKEN}\`);
  const form = new URLSearchParams({ From: from, To: to, Body: body });

  try {
    const response = await fetch(
      \`https://api.twilio.com/2010-04-01/Accounts/\${env.TWILIO_ACCOUNT_SID}/Messages.json\`,
      {
        method: "POST",
        headers: {
          authorization: \`Basic \${credentials}\`,
          "content-type": "application/x-www-form-urlencoded",
        },
        body: form,
      },
    );

    if (!response.ok) {
      const result = await response.json().catch(() => ({}));
      console.error("Twilio lead notification failed.", {
        status: response.status,
        code: result.code,
        message: result.message,
      });
      return false;
    }

    return true;
  } catch {
    console.error("Twilio lead notification failed before receiving a response.");
    return false;
  }
}

async function sendLeadWhatsApp(env, payload, id) {
  return sendTwilioMessage(env, {
    from: whatsappAddress(env.TWILIO_WHATSAPP_FROM || ""),
    to: whatsappAddress(env.WHATSAPP_NOTIFY_PHONE || env.QUICK_CHAT_NOTIFY_PHONE || "+17202781729"),
    body: leadNotificationText(payload, id).slice(0, 1500),
  });
}

async function sendLeadSms(env, payload, id) {
  return sendTwilioMessage(env, {
    from: env.TWILIO_FROM_PHONE || "",
    to: normalizeE164Phone(env.QUICK_CHAT_NOTIFY_PHONE || "+17202781729"),
    body: leadNotificationText(payload, id).slice(0, 1500),
  });
}

async function forwardLead(env, payload, id) {
  if (!env.QUICK_CHAT_FALLBACK_ENDPOINT) {
    return {
      ok: false,
      message: deliveryFailureMessage(env, id, "The message could not be delivered right now"),
    };
  }

  const details = [
    leadNotificationText(payload, id),
    "",
    \`Notify WhatsApp: \${env.WHATSAPP_NOTIFY_PHONE || env.QUICK_CHAT_NOTIFY_PHONE || "+17202781729"}\`,
    \`Notify phone: \${env.QUICK_CHAT_NOTIFY_PHONE || "+17202781729"}\`,
    \`Notify email: \${env.QUICK_CHAT_NOTIFY_EMAIL || "Not configured"}\`,
  ].join("\\n");

  try {
    const response = await fetch(env.QUICK_CHAT_FALLBACK_ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: payload.fullName || "MedX website visitor",
        business: payload.organization || "MedX quick chat",
        email: payload.email || env.QUICK_CHAT_NOTIFY_EMAIL || "",
        phone: env.WHATSAPP_NOTIFY_PHONE || env.QUICK_CHAT_NOTIFY_PHONE || "+17202781729",
        service: \`MedX: \${payload.productService}\`,
        details,
      }),
    });

    if (!response.ok) {
      return {
        ok: false,
        message: deliveryFailureMessage(env, id, "The message could not be delivered right now"),
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      message: deliveryFailureMessage(env, id, "The message could not be delivered right now"),
    };
  }
}

async function sendLeadNotification(env, payload, id) {
  if (await sendLeadWhatsApp(env, payload, id)) return { ok: true };
  if (await sendLeadSms(env, payload, id)) return { ok: true };
  return forwardLead(env, payload, id);
}

async function handleContact(request, env) {
  const id = requestId();
  if (request.method !== "POST") return json({ ok: false, message: "Method not allowed", requestId: id }, 405);
  if (!rateLimit(clientIp(request))) {
    return json({ ok: false, message: "Too many submissions. Please try again later.", requestId: id }, 429);
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: "Invalid request body.", requestId: id }, 400);
  }

  if (body && body.quickChat === true) {
    const validationError = validateQuickChat(body);
    if (validationError) return json({ ok: false, message: validationError, requestId: id }, 400);

    const payload = normalizeQuickChat(body);
    const leadDelivery = await sendLeadNotification(env, payload, id);
    const delivery =
      leadDelivery.ok || !(env.RESEND_API_KEY && env.CONTACT_TO_EMAIL && env.RESEND_FROM_EMAIL)
        ? leadDelivery
        : await sendResendEmail(env, payload, id);

    if (!delivery.ok) {
      return json({ ok: false, message: delivery.message, requestId: id }, 503);
    }

    return json({ ok: true, requestId: id, timestamp: new Date().toISOString() });
  }

  const validationError = validateContact(body);
  if (validationError) return json({ ok: false, message: validationError, requestId: id }, 400);
  if (!(await verifyTurnstile(body.turnstileToken, request, env))) {
    return json({ ok: false, message: "Human verification failed.", requestId: id }, 400);
  }
  const leadDelivery = await sendLeadNotification(env, body, id);
  const emailDelivery =
    env.RESEND_API_KEY && env.CONTACT_TO_EMAIL && env.RESEND_FROM_EMAIL
      ? await sendResendEmail(env, body, id)
      : null;
  const delivery = leadDelivery.ok ? leadDelivery : emailDelivery || leadDelivery;
  if (!delivery.ok) {
    return json({ ok: false, message: delivery.message, requestId: id }, 503);
  }
  return json({ ok: true, requestId: id, timestamp: new Date().toISOString() });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/health") {
      return json({
        status: "ok",
        appVersion: APP_VERSION,
        buildEnvironment: env.VERCEL_ENV || "sites",
        timestamp: new Date().toISOString(),
      });
    }
    if (url.pathname === "/api/contact") {
      return handleContact(request, env);
    }

    let response = await env.ASSETS.fetch(request);

    if (response.status !== 404) {
      return finalizeAssetResponse(response, url);
    }

    if (!url.pathname.includes(".")) {
      const normalizedPath = url.pathname.replace(/\\/$/, "");
      const fallbackPaths =
        url.pathname === "/"
          ? ["/index.html"]
          : [\`\${normalizedPath}/index.html\`, \`\${normalizedPath}.html\`];

      for (const fallbackPath of fallbackPaths) {
        const fallbackUrl = new URL(fallbackPath, url);
        response = await env.ASSETS.fetch(new Request(fallbackUrl, request));

        if (response.status !== 404) {
          return finalizeAssetResponse(response, url);
        }
      }
    }

    return finalizeAssetResponse(response, url);
  },
};
`,
);
