import type { Metadata } from "next";
import { company } from "@/data/company";
import { siteUrl } from "@/lib/env";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function absoluteUrl(path = "") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized === "/" ? "" : normalized}`;
}

export function pageMetadata({
  title,
  description,
  path = "/",
  image = "/images/medx/medx-hero-healthcare-africa.jpg",
}: SeoInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: company.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bahir Dar",
      addressRegion: "Amhara",
      addressCountry: "ET",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url: siteUrl,
  };
}
