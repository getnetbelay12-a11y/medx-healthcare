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
    expect(homepageSource).toContain('eyebrow="Evidence-led communication"');
    expect(homepageSource).toContain("Before contacting MedX");
    expect(homepageSource).toContain("<CTASection");

    expect(homepageSource).not.toContain("Company context");
    expect(homepageSource).not.toContain("Historical relationship preview");
    expect(homepageSource).not.toContain("HistoricalRelationshipsCarousel");
    expect(homepageSource).not.toContain("Platform priorities");
    expect(homepageSource).not.toContain("LeadershipCarousel");
    expect(homepageSource).not.toContain("RelationshipsCarousel");
    expect(homepageSource).not.toContain('eyebrow="Governance and relationships"');
    expect(homepageSource).not.toContain('eyebrow="What makes MedX useful"');
    expect(homepageSource).not.toContain('eyebrow="Diagnostic readiness"');
  });

  it("removes repeated founding and capital statistic blocks from the homepage hero", () => {
    const combined = `${homepageSource}\n${heroSource}`;
    expect(homepageSource).not.toContain("stats.map");
    expect(combined).not.toContain("Founded");
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

  it("adds service CTAs and source-discipline labels", () => {
    expect(homepageSource).toContain("Request pharmaceutical supply");
    expect(homepageSource).toContain("Discuss medical-device needs");
    expect(homepageSource).toContain("Request diagnostic support");
    expect(homepageSource).toContain("Discuss a screening program");
    expect(homepageSource).toContain("Credibility first");
    expect(homepageSource).toContain("What the public site can safely say");
    expect(homepageSource).toContain("Email materials");
    expect(homepageSource).toContain("Historical deck");
    expect(homepageSource).toContain("Public research");
    expect(homepageSource).not.toContain("AI-ready roadmap");
    expect(homepageSource).not.toContain("Access command cockpit");
    expect(homepageSource).not.toContain("Demand pressure");
  });

  it("keeps one compact hero facts row", () => {
    expect(heroSource).toContain('aria-label="At a glance"');
    expect(heroSource).toContain("Diagnostics and cervical screening");
    expect(heroSource).toContain("Bahir Dar, Amhara, Ethiopia");
    expect(heroSource).toContain("Institutional healthcare access");
    expect(heroSource).toContain("Source-grounded profile");
    expect(heroSource).toContain("Current public posture");
    expect(heroSource).not.toContain("AI-assisted visibility");
    expect(heroSource).not.toContain("Live access intelligence");
    expect(heroSource).not.toContain("62%");
    expect(heroSource).not.toContain("78%");
  });

  it("keeps relationship detail off the homepage", () => {
    const combined = `${homepageSource}\n${heroSource}`;
    expect(homepageSource).toContain("relationship discussion");
    expect(homepageSource).not.toContain("Relationship context");
    expect(homepageSource).not.toContain("View relationships");
    expect(homepageSource).not.toContain('href="/partners"');
    expect(homepageSource).not.toContain('href="/relationships"');
    expect(combined).not.toContain("Partners and Relationship Context");
  });
});
