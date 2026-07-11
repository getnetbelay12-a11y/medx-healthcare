import { describe, expect, it } from "vitest";
import {
  getCurrentPublishedRelationships,
  getHistoricalRelationships,
  relationships,
} from "@/data/relationships";

describe("relationships data", () => {
  it("does not publish historical relationships as current partners by default", () => {
    expect(getCurrentPublishedRelationships()).toEqual([]);
  });

  it("keeps required 2020 historical records in central data", () => {
    const names = getHistoricalRelationships().map(
      (relationship) => relationship.displayName,
    );
    expect(names).toContain("Arbor Vita Corporation");
    expect(names).toContain("TIRET Corporate");
    expect(names).toContain("Black Lion Hospital");
  });

  it("requires public approval flags before a relationship can be current", () => {
    expect(
      relationships.every(
        (relationship) =>
          !relationship.isVerifiedCurrent ||
          (relationship.isApprovedForPublicUse && relationship.isPublished),
      ),
    ).toBe(true);
  });
});
