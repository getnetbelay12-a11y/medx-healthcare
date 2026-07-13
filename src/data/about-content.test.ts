import { describe, expect, it } from "vitest";
import { company } from "@/data/company";
import { getCurrentPublishedRelationships } from "@/data/relationships";
import { getPublishedServices } from "@/data/services";

describe("about page content contract", () => {
  it("keeps the public About page concise and factual", () => {
    expect(company.aboutHighlights).toEqual([
      "Founded in 2017",
      "Based in Bahir Dar",
      "Originated in diagnostics and cervical screening",
    ]);
    expect(company.aboutGlance).toHaveLength(4);
  });

  it("labels historical timeline entries separately from current direction", () => {
    const historicalEntries = company.aboutTimeline.filter((item) =>
      item.label.toLowerCase().includes("historical"),
    );

    expect(historicalEntries).toHaveLength(3);
    expect(company.aboutTimeline.some((item) => item.period === "Current direction")).toBe(
      true,
    );
  });

  it("renders only verified current services for the current-service section", () => {
    const currentServices = getPublishedServices("current").filter(
      (service) => service.isVerified,
    );

    expect(currentServices.map((service) => service.title)).toEqual([
      "Pharmaceutical supply and distribution",
      "Medical devices and equipment",
      "Diagnostic and laboratory solutions",
      "Cervical-screening program support",
    ]);
  });

  it("keeps mission, vision, and values distinct", () => {
    expect(company.mission).not.toEqual(company.vision);
    expect(company.aboutValues).toHaveLength(6);
    expect(company.aboutValues.every((value) => value.description.length > 0)).toBe(
      true,
    );
  });

  it("does not publish unverified relationships as current relationships", () => {
    expect(getCurrentPublishedRelationships()).toEqual([]);
  });
});
