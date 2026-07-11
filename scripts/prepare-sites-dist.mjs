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

async function sendResendEmail(env, payload, id) {
  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.RESEND_FROM_EMAIL) {
    return {
      ok: false,
      message:
        "Contact email delivery is not configured. Required server variables: CONTACT_TO_EMAIL, RESEND_API_KEY, RESEND_FROM_EMAIL.",
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
    return { ok: false, message: "Email delivery failed. Please try again later." };
  }

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

  return { ok: true };
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
  const validationError = validateContact(body);
  if (validationError) return json({ ok: false, message: validationError, requestId: id }, 400);
  if (!(await verifyTurnstile(body.turnstileToken, request, env))) {
    return json({ ok: false, message: "Human verification failed.", requestId: id }, 400);
  }
  const emailResult = await sendResendEmail(env, body, id);
  if (!emailResult.ok) {
    return json({ ok: false, message: emailResult.message, requestId: id }, 503);
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
      return withSecurityHeaders(response);
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
          return withSecurityHeaders(response);
        }
      }
    }

    return withSecurityHeaders(response);
  },
};
`,
);
