import { NextRequest, NextResponse } from "next/server";
import { createRequestId, escapeHtml, validateContactPayload } from "@/lib/contact-service";
import { publicEnv, serverEnv } from "@/lib/env";

export const runtime = "nodejs";

type ContactPayload = {
  fullName: string;
  organization: string;
  email?: string;
  phone?: string;
  country: string;
  cityRegion: string;
  inquiryType: string;
  productService: string;
  estimatedQuantity?: string;
  urgency: string;
  preferredTimeline: string;
  message: string;
  turnstileToken?: string;
};

type QuickChatPayload = {
  quickChat?: boolean;
  fullName?: string;
  organization?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  privacyConsent?: boolean;
  startedAt?: number;
};

const submissions = new Map<string, number[]>();

function json(body: unknown, status = 200) {
  return NextResponse.json(body, { status });
}

function clientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function rateLimit(ip: string) {
  const now = Date.now();
  const recent = (submissions.get(ip) || []).filter((time) => now - time < 10 * 60 * 1000);
  if (recent.length >= 5) {
    submissions.set(ip, recent);
    return false;
  }
  recent.push(now);
  submissions.set(ip, recent);
  return true;
}

async function verifyTurnstile(token: string | undefined, request: NextRequest) {
  if (!serverEnv.turnstileSecretKey) return true;
  if (!token) return false;

  const form = new FormData();
  form.append("secret", serverEnv.turnstileSecretKey);
  form.append("response", token);
  form.append("remoteip", clientIp(request));

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  });
  const result = (await response.json().catch(() => ({}))) as { success?: boolean };
  return Boolean(result.success);
}

function contactRows(payload: ContactPayload, requestId: string) {
  return [
    ["Reference", requestId],
    ["Name", payload.fullName],
    ["Organization", payload.organization],
    ["Email", payload.email || "Not provided"],
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
}

async function sendInquiryEmail(payload: ContactPayload, requestId: string) {
  if (!serverEnv.resendApiKey || !serverEnv.contactToEmail || !serverEnv.resendFromEmail) {
    return {
      ok: false,
      message:
        publicEnv.companyEmail || publicEnv.companyPhone
          ? `Online inquiry delivery is not configured yet. Please use the contact details listed on this page. Reference ID: ${requestId}.`
          : `Online inquiry delivery is not configured yet. Please try again later. Reference ID: ${requestId}.`,
    };
  }

  const htmlRows = contactRows(payload, requestId)
    .map(
      ([label, value]) =>
        `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`,
    )
    .join("");
  const html = `<h1>MedX inquiry ${escapeHtml(requestId)}</h1><table cellpadding="8" cellspacing="0">${htmlRows}</table>`;

  const notificationBody: Record<string, unknown> = {
    from: serverEnv.resendFromEmail,
    to: [serverEnv.contactToEmail],
    subject: `MedX inquiry: ${requestId}`,
    html,
  };

  if (payload.email) {
    notificationBody.reply_to = payload.email;
  }

  const notification = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${serverEnv.resendApiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(notificationBody),
  });

  if (!notification.ok) {
    return {
      ok: false,
      message:
        publicEnv.companyEmail || publicEnv.companyPhone
          ? `Email delivery failed. Please use the contact details listed on this page. Reference ID: ${requestId}.`
          : `Email delivery failed. Please try again later. Reference ID: ${requestId}.`,
    };
  }

  if (payload.email) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${serverEnv.resendApiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: serverEnv.resendFromEmail,
        to: [payload.email],
        subject: `MedX inquiry received: ${requestId}`,
        html: `<p>Thank you for contacting MedX Healthcare Solutions.</p><p>Your inquiry reference is <strong>${escapeHtml(requestId)}</strong>.</p>`,
      }),
    });
  }

  return { ok: true, message: "Inquiry submitted." };
}

function leadNotificationText(payload: ContactPayload, requestId: string) {
  const location = [payload.cityRegion, payload.country]
    .filter((value) => value && value !== "Not specified")
    .join(", ");
  const quantity = payload.estimatedQuantity?.trim() || "Not provided";

  return [
    "*New MedX website request*",
    `Reference: ${requestId}`,
    "",
    `Service: ${payload.productService}`,
    `Inquiry type: ${payload.inquiryType}`,
    `Urgency: ${payload.urgency}`,
    `Timeline: ${payload.preferredTimeline}`,
    `Estimated quantity: ${quantity}`,
    "",
    "*Contact*",
    `Name: ${payload.fullName}`,
    `Organization: ${payload.organization}`,
    `Email: ${payload.email || "Not provided"}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Location: ${location || "Not provided"}`,
    "",
    "*Message*",
    payload.message,
  ].join("\n");
}

function normalizeE164Phone(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("+")) return `+${trimmed.replace(/\D/g, "")}`;

  const digits = trimmed.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  return digits ? `+${digits}` : "";
}

function whatsappAddress(value: string) {
  if (value.startsWith("whatsapp:")) return value;
  const phone = normalizeE164Phone(value);
  return phone ? `whatsapp:${phone}` : "";
}

async function sendTwilioMessage({
  from,
  to,
  body,
}: {
  from: string;
  to: string;
  body: string;
}) {
  if (!serverEnv.twilioAccountSid || !serverEnv.twilioAuthToken || !from || !to) {
    return false;
  }

  const credentials = Buffer.from(
    `${serverEnv.twilioAccountSid}:${serverEnv.twilioAuthToken}`,
  ).toString("base64");
  const form = new URLSearchParams({ From: from, To: to, Body: body });

  try {
    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${serverEnv.twilioAccountSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          authorization: `Basic ${credentials}`,
          "content-type": "application/x-www-form-urlencoded",
        },
        body: form,
        cache: "no-store",
      },
    );

    return response.ok;
  } catch {
    return false;
  }
}

async function sendLeadWhatsApp(payload: ContactPayload, requestId: string) {
  const text = leadNotificationText(payload, requestId).slice(0, 1500);
  return sendTwilioMessage({
    from: whatsappAddress(serverEnv.twilioWhatsappFrom),
    to: whatsappAddress(serverEnv.whatsappNotifyPhone),
    body: text,
  });
}

async function sendLeadSms(payload: ContactPayload, requestId: string) {
  if (!serverEnv.twilioFromPhone || !serverEnv.quickChatNotifyPhone) {
    return false;
  }

  const text = leadNotificationText(payload, requestId).slice(0, 1500);
  return sendTwilioMessage({
    from: serverEnv.twilioFromPhone,
    to: normalizeE164Phone(serverEnv.quickChatNotifyPhone),
    body: text,
  });
}

async function forwardLeadToKelel(payload: ContactPayload, requestId: string) {
  const failureMessage =
    publicEnv.companyEmail || publicEnv.companyPhone
      ? `The message could not be delivered right now. Please use the contact details listed on this page. Reference ID: ${requestId}.`
      : `The message could not be delivered right now. Please try again. Reference ID: ${requestId}.`;

  const details = [
    leadNotificationText(payload, requestId),
    "",
    `Notify WhatsApp: ${serverEnv.whatsappNotifyPhone}`,
    `Notify phone: ${serverEnv.quickChatNotifyPhone}`,
    `Notify email: ${serverEnv.quickChatNotifyEmail}`,
  ].join("\n");

  try {
    const response = await fetch(serverEnv.quickChatFallbackEndpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: payload.fullName || "MedX website visitor",
        business: payload.organization || "MedX quick chat",
        email: payload.email || serverEnv.quickChatNotifyEmail,
        phone: serverEnv.whatsappNotifyPhone || serverEnv.quickChatNotifyPhone,
        service: `MedX: ${payload.productService}`,
        details,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        ok: false,
        message: failureMessage,
      };
    }

    return { ok: true, message: "Inquiry submitted." };
  } catch {
    return {
      ok: false,
      message: failureMessage,
    };
  }
}

async function sendLeadNotification(payload: ContactPayload, requestId: string) {
  if (await sendLeadWhatsApp(payload, requestId)) {
    return { ok: true, message: "Inquiry submitted." };
  }

  if (await sendLeadSms(payload, requestId)) {
    return { ok: true, message: "Inquiry submitted." };
  }

  return forwardLeadToKelel(payload, requestId);
}

function normalizeQuickChatPayload(body: QuickChatPayload) {
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const organization = typeof body.organization === "string" ? body.organization.trim() : "";
  const service = typeof body.service === "string" ? body.service.trim() : "";

  if (!message) {
    return { ok: false as const, message: "Message is required." };
  }

  if (body.privacyConsent !== true) {
    return { ok: false as const, message: "Privacy consent is required." };
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false as const, message: "Enter a valid email address." };
  }

  if (phone && !/^[+\d\s().-]{7,40}$/.test(phone)) {
    return { ok: false as const, message: "Enter a valid phone number." };
  }

  if ((message.match(/https?:\/\/|www\./gi)?.length || 0) > 2) {
    return { ok: false as const, message: "Please limit links in the message." };
  }

  return {
    ok: true as const,
    payload: {
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
      message,
      turnstileToken: "",
    } satisfies ContactPayload,
  };
}

export async function POST(request: NextRequest) {
  const requestId = createRequestId();

  if (!rateLimit(clientIp(request))) {
    return json(
      {
        ok: false,
        requestId,
        message: "Too many submissions. Please try again later.",
      },
      429,
    );
  }

  const body = (await request.json().catch(() => null)) as unknown;

  if (body && typeof body === "object" && (body as QuickChatPayload).quickChat === true) {
    const quickChat = normalizeQuickChatPayload(body as QuickChatPayload);

    if (!quickChat.ok) {
      return json({ ok: false, requestId, message: quickChat.message }, 400);
    }

    const leadDelivery = await sendLeadNotification(quickChat.payload, requestId);
    const delivery =
      leadDelivery.ok ||
      !(serverEnv.resendApiKey && serverEnv.contactToEmail && serverEnv.resendFromEmail)
        ? leadDelivery
        : await sendInquiryEmail(quickChat.payload, requestId);
    if (!delivery.ok) {
      return json({ ok: false, requestId, message: delivery.message }, 503);
    }

    return json({ ok: true, requestId, timestamp: new Date().toISOString() });
  }

  const validation = validateContactPayload(body);

  if (!validation.success) {
    return json(
      {
        ok: false,
        requestId,
        message: validation.error.flatten().formErrors[0] || "Please correct the form.",
      },
      400,
    );
  }

  if (!(await verifyTurnstile(validation.data.turnstileToken, request))) {
    return json(
      {
        ok: false,
        requestId,
        message: "Human verification failed.",
      },
      400,
    );
  }

  const leadDelivery = await sendLeadNotification(validation.data, requestId);
  const emailDelivery =
    serverEnv.resendApiKey && serverEnv.contactToEmail && serverEnv.resendFromEmail
      ? await sendInquiryEmail(validation.data, requestId)
      : null;

  const delivery = leadDelivery.ok ? leadDelivery : emailDelivery || leadDelivery;
  if (!delivery.ok) {
    return json({ ok: false, requestId, message: delivery.message }, 503);
  }

  return json({ ok: true, requestId, timestamp: new Date().toISOString() });
}

export function GET() {
  return json({ ok: false, message: "Method not allowed." }, 405);
}
