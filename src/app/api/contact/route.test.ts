import { NextRequest } from "next/server";
import { afterEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/contact/route";

function request(body: unknown) {
  return new NextRequest("https://medx.test/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
}

const validContactPayload = {
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

describe("contact API route", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("requires privacy consent for quick-chat submissions", async () => {
    const response = await POST(
      request({
        quickChat: true,
        service: "Diagnostic and laboratory solutions",
        message: "Please contact us about diagnostic supply needs.",
      }),
    );
    const body = (await response.json()) as { message?: string };

    expect(response.status).toBe(400);
    expect(body.message).toBe("Privacy consent is required.");
  });

  it("does not emit fake contact details when email delivery is unconfigured", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(null, { status: 503 })),
    );

    const response = await POST(request(validContactPayload));
    const body = (await response.json()) as { message?: string; requestId?: string };

    expect(response.status).toBe(503);
    expect(body.requestId).toMatch(/^MEDX-/);
    expect(body.message).toContain("Reference ID:");
    expect(body.message).not.toContain("undefined");
    expect(body.message).not.toContain("+251 11 123 4567");
    expect(body.message).not.toContain("supply@medxdiagnostic.com.et");
  });

  it("routes full contact submissions through the lead notification fallback", async () => {
    const fetchMock = vi.fn(async () => new Response(null, { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    const response = await POST(request(validContactPayload));
    const body = (await response.json()) as { ok?: boolean; requestId?: string };
    const fetchCalls = fetchMock.mock.calls as unknown as [string, RequestInit][];
    const fallbackRequest = JSON.parse(String(fetchCalls[0]?.[1]?.body)) as {
      details?: string;
      phone?: string;
    };

    expect(response.status).toBe(200);
    expect(body.ok).toBe(true);
    expect(fallbackRequest.phone).toBe("+17202781729");
    expect(fallbackRequest.details).toContain("Notify WhatsApp: +17202781729");
    expect(fallbackRequest.details).toContain("MedX website inquiry");
  });
});
