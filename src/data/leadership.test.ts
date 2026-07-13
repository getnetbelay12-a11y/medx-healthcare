import { describe, expect, it } from "vitest";
import {
  currentLeadership,
  getCurrentPublishedLeadership,
  getHistoricalLeadership,
  getPublishedLeadership,
  historicalLeadership,
  leadershipStatusLabels,
} from "@/data/leadership";

describe("leadership data", () => {
  it("keeps current leadership separate from historical records", () => {
    expect(getCurrentPublishedLeadership()).toEqual([]);
  });

  it("publishes the 2020 board references for the leadership carousel", () => {
    expect(getHistoricalLeadership()).toHaveLength(8);
    expect(getPublishedLeadership()).toHaveLength(8);
  });

  it("separates current leadership from historical references", () => {
    expect(currentLeadership).toEqual([]);
    expect(historicalLeadership.every((member) => member.sourceYear === 2020)).toBe(
      true,
    );
    expect(historicalLeadership.every((member) => member.status === "historical")).toBe(
      true,
    );
  });

  it("stores director status labels centrally", () => {
    expect(leadershipStatusLabels.current).toBe("Current");
    expect(leadershipStatusLabels.historical).toBe("Historical 2020 reference");
  });
});
