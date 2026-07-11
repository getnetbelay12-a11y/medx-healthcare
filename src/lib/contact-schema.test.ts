import { describe, expect, it } from "vitest";
import { contactSchema, hasTooManyLinks } from "@/lib/contact-schema";
import { createRequestId, escapeHtml, validateSubmissionTiming } from "@/lib/contact-service";

const validPayload = {
  fullName: "Getnet Belay",
  organization: "Hospital Partner",
  email: "inquiry@medx.test",
  phone: "+251 911 111 111",
  country: "Ethiopia",
  cityRegion: "Bahir Dar",
  inquiryType: "Diagnostic inquiry",
  productService: "Laboratory diagnostic supplies",
  estimatedQuantity: "100",
  urgency: "Routine",
  preferredTimeline: "1-3 months",
  message: "We would like to discuss laboratory diagnostic supply requirements.",
  privacyConsent: true,
  website: "",
  startedAt: Date.now() - 5000,
};

describe("contact schema", () => {
  it("accepts valid contact payloads", () => {
    expect(contactSchema.safeParse(validPayload).success).toBe(true);
  });

  it("rejects invalid email values", () => {
    expect(contactSchema.safeParse({ ...validPayload, email: "bad" }).success).toBe(false);
  });

  it("detects too many links", () => {
    expect(hasTooManyLinks("https://a.test https://b.test www.c.test")).toBe(true);
  });

  it("escapes html", () => {
    expect(escapeHtml('<script>alert("x")</script>')).toContain("&lt;script&gt;");
  });

  it("validates submission timing", () => {
    expect(validateSubmissionTiming(Date.now() - 3000)).toBe(true);
    expect(validateSubmissionTiming(Date.now() - 300)).toBe(false);
  });

  it("creates request ids", () => {
    expect(createRequestId()).toMatch(/^MEDX-\d{14}-[A-Z0-9-]+$/);
  });
});
