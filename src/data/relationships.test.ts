import { describe, expect, it } from "vitest";
import {
  currentRelationships,
  getCurrentPublishedRelationships,
  getHistoricalRelationships,
  getPublishedRelationships,
  historicalRelationships,
  relationshipStatusLabels,
  relationships,
} from "@/data/relationships";

describe("relationships data", () => {
  it("keeps current relationships separate from historical records", () => {
    expect(getCurrentPublishedRelationships()).toEqual([]);
  });

  it("keeps required 2020 historical records in central data", () => {
    const names = getHistoricalRelationships().map(
      (relationship) => relationship.organization,
    );
    expect(names).toContain("Arbor Vita Corporation");
    expect(names).toContain("Black Lion Hospital, Addis Ababa");
    expect(getPublishedRelationships().length).toBeGreaterThanOrEqual(3);
    expect(getPublishedRelationships().map((item) => item.organization)).not.toContain(
      "TIRET Corporate",
    );
  });

  it("separates current relationships from historical references", () => {
    expect(currentRelationships).toEqual([]);
    expect(
      historicalRelationships.every((relationship) =>
        relationship.status === "historical",
      ),
    ).toBe(true);
  });

  it("stores relationship status labels centrally", () => {
    expect(relationshipStatusLabels.current).toBe("Partner context");
    expect(relationshipStatusLabels.historical).toBe("Partner context");
    expect(relationshipStatusLabels.unconfirmed).toBe("Partner context");
  });

  it("keeps relationship display order editable", () => {
    const orders = relationships.map((relationship) => relationship.displayOrder);
    expect(new Set(orders).size).toBe(orders.length);
  });
});
