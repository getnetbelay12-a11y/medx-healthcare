import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const homepageSource = readFileSync(
  join(process.cwd(), "src/app/page.tsx"),
  "utf8",
);
const heroSource = readFileSync(
  join(process.cwd(), "src/components/HeroSection.tsx"),
  "utf8",
);

describe("homepage public copy contract", () => {
  it("does not render the historical board carousel on the homepage", () => {
    expect(homepageSource).not.toContain("HistoricalBoardCarousel");
  });

  it("keeps the homepage to the approved section set", () => {
    expect(homepageSource).toContain("<HeroSection />");
    expect(homepageSource).toContain('eyebrow="Current services"');
    expect(homepageSource).toContain('eyebrow="Cervical-health origin"');
    expect(homepageSource).toContain('eyebrow="Digital operations preview"');
    expect(homepageSource).toContain("Strategy preview");
    expect(homepageSource).toContain("<CTASection");

    expect(homepageSource).not.toContain("Company context");
    expect(homepageSource).not.toContain("Historical relationship preview");
    expect(homepageSource).not.toContain("HistoricalRelationshipsCarousel");
    expect(homepageSource).not.toContain("Platform priorities");
  });

  it("removes repeated founding and capital statistic blocks from the homepage", () => {
    const combined = `${homepageSource}\n${heroSource}`;
    expect(homepageSource).not.toContain("stats.map");
    expect((combined.match(/2017/g) || [])).toHaveLength(1);
    expect(heroSource).not.toContain("Historical capital");
    expect(combined).not.toContain("16.5M ETB");
    expect(combined).not.toContain("16.5 million ETB");
    expect(combined).not.toContain("Market context");
    expect(combined).not.toContain("Public-private scale");
    expect(combined).not.toContain("Trust focus");
    expect(combined).not.toContain("Corporate healthcare platform");
  });

  it("removes internal review wording from homepage copy", () => {
    const combined = `${homepageSource}\n${heroSource}`;
    expect(combined).not.toContain("Verified company context");
    expect(combined).not.toContain("public copy is intentionally conservative");
    expect(combined).not.toContain("not a mixed list of future ambitions");
    expect(combined).not.toContain("should be confirmed before publishing");
    expect(combined).not.toContain("The homepage now focuses on");
    expect(combined).not.toContain("The strategy page separates");
    expect(combined).not.toContain("are presented as roadmap capabilities");
  });

  it("adds service CTAs and roadmap labels", () => {
    expect(homepageSource).toContain("Request pharmaceutical supply");
    expect(homepageSource).toContain("Discuss medical-device needs");
    expect(homepageSource).toContain("Request diagnostic support");
    expect(homepageSource).toContain("Discuss a screening program");
    expect(homepageSource).toContain("In development");
    expect(homepageSource).toContain("Near term");
    expect(homepageSource).toContain("Medium term");
    expect(homepageSource).toContain("Long term");
  });

  it("keeps one compact hero facts row", () => {
    expect(heroSource).toContain('aria-label="At a glance"');
    expect(heroSource).toContain("Founded");
    expect(heroSource).toContain("Base");
    expect(heroSource).toContain("Original focus");
    expect(heroSource).toContain("Direction");
    expect(heroSource).toContain("Bahir Dar");
    expect(heroSource).toContain("Healthcare access and local capacity");
  });
});
