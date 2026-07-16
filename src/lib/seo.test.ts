import { describe, expect, it } from "vitest";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

describe("seo helpers", () => {
  it("creates absolute URLs from configured site URL", () => {
    expect(absoluteUrl("/relationships")).toContain("/relationships");
  });

  it("creates canonical page metadata", () => {
    const metadata = pageMetadata({
      title: "Relationships",
      description: "MedX relationship metadata test.",
      path: "/relationships",
    });
    expect(metadata.alternates?.canonical).toBeTruthy();
    expect(metadata.openGraph?.title).toBe("Relationships");
  });
});
