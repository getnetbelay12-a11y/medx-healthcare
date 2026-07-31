import { describe, expect, it } from "vitest";
import { getPublishedServices } from "@/data/services";

describe("services data", () => {
  it("separates current services from roadmap services", () => {
    const current = getPublishedServices("current");
    const all = getPublishedServices();

    expect(current).toHaveLength(4);
    expect(all.length).toBeGreaterThan(current.length);
    expect(current.every((service) => service.status === "current")).toBe(true);
  });

  it("includes verified facility supply categories without storefront pricing", () => {
    const allCopy = getPublishedServices()
      .map((service) => `${service.summary} ${service.features.join(" ")}`)
      .join("\n");

    expect(allCopy).toContain("Laboratory equipment");
    expect(allCopy).toContain("Medical consumables");
    expect(allCopy).not.toContain("450 ETB");
    expect(allCopy).not.toContain("supply@medxdiagnostic.com.et");
    expect(allCopy).not.toContain("+251 11 123 4567");
  });
});
