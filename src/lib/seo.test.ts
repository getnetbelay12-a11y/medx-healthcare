import { describe, expect, it } from "vitest";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

describe("seo helpers", () => {
  it("creates absolute URLs from configured site URL", () => {
    expect(absoluteUrl("/partners")).toContain("/partners");
  });

  it("creates canonical page metadata", () => {
    const metadata = pageMetadata({
      title: "Partners",
      description: "MedX partner metadata test.",
      path: "/partners",
    });
    expect(metadata.alternates?.canonical).toBeTruthy();
    expect(metadata.openGraph?.title).toBe("Partners");
  });
});
