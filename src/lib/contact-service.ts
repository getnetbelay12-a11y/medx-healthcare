import { contactSchema, hasTooManyLinks } from "@/lib/contact-schema";

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function createRequestId(now = new Date()) {
  const stamp = now.toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
  const random =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID().slice(0, 8)
      : Math.random().toString(36).slice(2, 10);
  return `MEDX-${stamp}-${random.toUpperCase()}`;
}

export function validateSubmissionTiming(startedAt: number, now = Date.now()) {
  const elapsed = now - startedAt;
  return elapsed >= 2500 && elapsed <= 1000 * 60 * 60 * 4;
}

export function validateContactPayload(payload: unknown) {
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return parsed;
  }

  if (!validateSubmissionTiming(parsed.data.startedAt)) {
    return {
      success: false as const,
      error: {
        flatten: () => ({
          formErrors: ["Submission timing failed. Please try again."],
          fieldErrors: {},
        }),
      },
    };
  }

  if (hasTooManyLinks(parsed.data.message)) {
    return {
      success: false as const,
      error: {
        flatten: () => ({
          formErrors: ["Please limit links in the message."],
          fieldErrors: { message: ["Please limit links in the message."] },
        }),
      },
    };
  }

  return parsed;
}
