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
    expect(homepageSource).toContain('eyebrow="Healthcare products and services"');
    expect(homepageSource).toContain("One access platform. Four execution lanes.");
    expect(homepageSource).toContain("Operating detail");
    expect(homepageSource).toContain('eyebrow="Cervical-health origin"');
    expect(homepageSource).toContain('eyebrow="AI-assisted operations preview"');
    expect(homepageSource).toContain('eyebrow="Governance and relationships"');
    expect(homepageSource).toContain("Before contacting MedX");
    expect(homepageSource).toContain("<CTASection");

    expect(homepageSource).not.toContain("Company context");
    expect(homepageSource).not.toContain("Historical relationship preview");
    expect(homepageSource).not.toContain("HistoricalRelationshipsCarousel");
    expect(homepageSource).not.toContain("Platform priorities");
    expect(homepageSource).not.toContain("LeadershipCarousel");
    expect(homepageSource).not.toContain("RelationshipsCarousel");
  });

  it("removes repeated founding and capital statistic blocks from the homepage hero", () => {
    const combined = `${homepageSource}\n${heroSource}`;
    expect(homepageSource).not.toContain("stats.map");
    expect(combined).not.toContain("Founded");
    expect(combined).not.toContain("Bahir Dar");
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

  it("adds service CTAs and AI operating roadmap labels", () => {
    expect(homepageSource).toContain("Request pharmaceutical supply");
    expect(homepageSource).toContain("Discuss medical-device needs");
    expect(homepageSource).toContain("Request diagnostic support");
    expect(homepageSource).toContain("Discuss a screening program");
    expect(homepageSource).toContain("AI-ready roadmap");
    expect(homepageSource).toContain("Access command cockpit");
    expect(homepageSource).toContain("Demand pressure");
    expect(homepageSource).toContain("Medicine supply");
    expect(homepageSource).toContain("Device access");
  });

  it("keeps one compact hero facts row", () => {
    expect(heroSource).toContain('aria-label="At a glance"');
    expect(heroSource).toContain("Diagnostics and screening access");
    expect(heroSource).toContain("Pharmaceuticals and medical devices");
    expect(heroSource).toContain("Digital visibility and supply discipline");
    expect(heroSource).toContain("AI-assisted visibility");
  });

  it("uses relationship framing instead of a broad partners tab on the homepage", () => {
    const combined = `${homepageSource}\n${heroSource}`;
    expect(homepageSource).toContain("Relationship context");
    expect(homepageSource).toContain("View relationships");
    expect(homepageSource).toContain("relationship discussion");
    expect(combined).not.toContain("Partners and Relationship Context");
  });
});
