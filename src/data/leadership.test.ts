import { describe, expect, it } from "vitest";
import {
  currentLeadership,
  getCurrentPublishedLeadership,
  getHistoricalLeadership,
  historicalLeadership,
} from "@/data/leadership";

describe("leadership data", () => {
  it("does not publish unverified historical board references by default", () => {
    expect(getCurrentPublishedLeadership()).toEqual([]);
  });

  it("keeps 2020 board references available for controlled review", () => {
    expect(getHistoricalLeadership()).toHaveLength(8);
  });

  it("separates current leadership from historical references", () => {
    expect(currentLeadership).toEqual([]);
    expect(historicalLeadership.every((member) => member.sourceYear === 2020)).toBe(
      true,
    );
  });
});
