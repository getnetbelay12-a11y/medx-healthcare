import type { MetadataRoute } from "next";
import { isProductionLike, siteUrl } from "@/lib/env";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const allowIndexing = isProductionLike();

  return {
    rules: {
      userAgent: "*",
      allow: allowIndexing ? "/" : undefined,
      disallow: allowIndexing ? undefined : "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
