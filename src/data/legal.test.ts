import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { governingLawText, legalConfig, termsSections } from "@/data/legal";
import { metadata } from "@/app/terms/page";

const termsPageSource = readFileSync(
  join(process.cwd(), "src/app/terms/page.tsx"),
  "utf8",
);

describe("terms page legal content", () => {
  it("defines all major Terms sections", () => {
    expect(termsSections).toHaveLength(22);
    for (const section of termsSections) {
      expect(termsPageSource).toContain(`title="${section}"`);
    }
  });

  it("links to the Privacy Policy", () => {
    expect(termsPageSource).toContain('href="/privacy"');
  });

  it("does not include placeholder contact information", () => {
    expect(termsPageSource).not.toContain("+251 XXX XXX XXX");
    expect(termsPageSource).not.toContain("info@medxhealthcare.com");
  });

  it("removes marketing hero labels from the Terms page", () => {
    expect(termsPageSource).not.toContain("Institutional scale");
    expect(termsPageSource).not.toContain("Public-health focus");
    expect(termsPageSource).not.toContain("Partner ready");
    expect(termsPageSource).not.toContain("MedX platform");
    expect(termsPageSource).not.toContain("Healthcare access • supply • innovation");
  });

  it("includes required AI, medical, and historical-reference disclaimers", () => {
    expect(termsPageSource).toContain("AI output may be");
    expect(termsPageSource).toContain("does not provide medical diagnosis");
    expect(termsPageSource).toContain("Historical names, boards, partners");
  });

  it("renders configured effective date and keeps one H1 source element", () => {
    expect(legalConfig.termsEffectiveDate).toBeTruthy();
    expect((termsPageSource.match(/<h1/g) || [])).toHaveLength(1);
  });

  it("uses responsive legal-page layout classes", () => {
    expect(termsPageSource).toContain("lg:grid-cols");
    expect(termsPageSource).toContain("max-w-4xl");
  });

  it("sets production metadata for the Terms page", () => {
    expect(metadata.title).toBe("Terms of Use | MedX Healthcare Solutions");
    expect(metadata.description).toBe(
      "Review the terms governing use of the MedX Healthcare Solutions website, inquiry forms, AI-assisted tools, and public-facing services.",
    );
    expect(metadata.alternates?.canonical).toBeTruthy();
  });

  it("uses governing-law fallback when jurisdiction is unconfirmed", () => {
    expect(legalConfig.jurisdictionConfirmed).toBe(false);
    expect(governingLawText).toBe(
      "These Terms are subject to the applicable laws governing MedX and the relevant transaction.",
    );
  });
});
