import { describe, expect, it } from "vitest";
import {
  getCurrentPublishedLeadership,
  getHistoricalLeadership,
} from "@/data/leadership";

describe("leadership data", () => {
  it("does not publish unverified historical board references by default", () => {
    expect(getCurrentPublishedLeadership()).toEqual([]);
  });

  it("keeps 2020 board references available for controlled review", () => {
    expect(getHistoricalLeadership()).toHaveLength(8);
  });
});
