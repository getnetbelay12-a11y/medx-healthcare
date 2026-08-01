import { describe, expect, it } from "vitest";
import { isValidPublicEmail, normalizePhoneHref, publicEnv } from "@/lib/env";

describe("environment helpers", () => {
  it("hides invalid public email values", () => {
    expect(isValidPublicEmail("")).toBe(false);
    expect(isValidPublicEmail("not-an-email")).toBe(false);
    expect(isValidPublicEmail("info@medx.test")).toBe(true);
  });

  it("normalizes phone links", () => {
    expect(normalizePhoneHref("+251 900 000 000")).toBe("tel:+251900000000");
    expect(normalizePhoneHref("")).toBe("");
  });

  it("uses the approved WhatsApp number by default", () => {
    expect(publicEnv.whatsappPhone).toBe("+1 720 271 729");
  });
});
