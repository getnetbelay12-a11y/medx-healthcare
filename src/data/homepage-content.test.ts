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
    expect(homepageSource).toContain("View historical governance references.");
  });

  it("caps the homepage historical relationship preview", () => {
    expect(homepageSource).toContain("limit={6}");
    expect(homepageSource).toContain("compactNotice");
  });

  it("removes repeated founding and capital statistic blocks from the homepage", () => {
    expect(homepageSource).not.toContain("stats.map");
    expect(heroSource).not.toContain("Historical capital");
    expect(heroSource).not.toContain("16.5M ETB");
  });

  it("removes internal review wording from homepage copy", () => {
    const combined = `${homepageSource}\n${heroSource}`;
    expect(combined).not.toContain("Verified company context");
    expect(combined).not.toContain("public copy is intentionally conservative");
    expect(combined).not.toContain("not a mixed list of future ambitions");
    expect(combined).not.toContain("should be confirmed before publishing");
  });
});
