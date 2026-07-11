import { describe, expect, it } from "vitest";
import {
  createRequestId,
  escapeHtml,
  validateContactPayload,
  validateSubmissionTiming,
} from "@/lib/contact-service";

const validPayload = {
  fullName: "Aster Bekele",
  organization: "Regional Health Program",
  email: "aster@medx.test",
  phone: "+251 900 000 000",
  country: "Ethiopia",
  cityRegion: "Bahir Dar",
  inquiryType: "Product and supply request",
  productService: "Diagnostic supplies",
  estimatedQuantity: "100",
  urgency: "Routine",
  preferredTimeline: "1-3 months",
  message: "We would like to discuss institutional supply requirements.",
  privacyConsent: true,
  website: "",
  startedAt: Date.now() - 5000,
  turnstileToken: "",
};

describe("contact service", () => {
  it("escapes user supplied HTML", () => {
    expect(escapeHtml('<script>alert("x")</script>')).toBe(
      "&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;",
    );
  });

  it("creates MedX request IDs", () => {
    expect(createRequestId(new Date("2026-07-11T12:00:00Z"))).toMatch(
      /^MEDX-20260711120000-[A-Z0-9-]+$/,
    );
  });

  it("rejects submissions that are too fast", () => {
    expect(validateSubmissionTiming(Date.now() - 100)).toBe(false);
  });

  it("accepts valid contact payloads", () => {
    const result = validateContactPayload(validPayload);
    expect(result.success).toBe(true);
  });

  it("rejects messages with excessive links", () => {
    const result = validateContactPayload({
      ...validPayload,
      message: "See https://a.test https://b.test https://c.test for details.",
    });
    expect(result.success).toBe(false);
  });
});
