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
});
