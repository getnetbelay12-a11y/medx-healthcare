import { NextRequest, NextResponse } from "next/server";
import { createRequestId, escapeHtml, validateContactPayload } from "@/lib/contact-service";
import { publicEnv, serverEnv } from "@/lib/env";

export const runtime = "nodejs";

type ContactPayload = {
  fullName: string;
  organization: string;
  email: string;
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
}

async function sendInquiryEmail(payload: ContactPayload, requestId: string) {
  if (!serverEnv.resendApiKey || !serverEnv.contactToEmail || !serverEnv.resendFromEmail) {
    return {
      ok: false,
      message: `Online inquiry delivery is not configured yet. Please email ${publicEnv.companyEmail} or call ${publicEnv.companyPhone}.`,
    };
  }

  const htmlRows = contactRows(payload, requestId)
    .map(
      ([label, value]) =>
        `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`,
    )
    .join("");
  const html = `<h1>MedX inquiry ${escapeHtml(requestId)}</h1><table cellpadding="8" cellspacing="0">${htmlRows}</table>`;

  const notification = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${serverEnv.resendApiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: serverEnv.resendFromEmail,
      to: [serverEnv.contactToEmail],
      reply_to: payload.email,
      subject: `MedX inquiry: ${requestId}`,
      html,
    }),
  });

  if (!notification.ok) {
    return {
      ok: false,
      message: `Email delivery failed. Please email ${publicEnv.companyEmail} or call ${publicEnv.companyPhone}.`,
    };
  }

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

  return { ok: true, message: "Inquiry submitted." };
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

  const delivery = await sendInquiryEmail(validation.data, requestId);
  if (!delivery.ok) {
    return json({ ok: false, requestId, message: delivery.message }, 503);
  }

  return json({ ok: true, requestId, timestamp: new Date().toISOString() });
}

export function GET() {
  return json({ ok: false, message: "Method not allowed." }, 405);
}
