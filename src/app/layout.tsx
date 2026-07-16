import SiteHeader from "@/components/SiteHeader";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { medxImages } from "@/data/images";
import { siteUrl } from "@/lib/env";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MedX Healthcare Solutions",
    template: "%s | MedX Healthcare Solutions",
  },
  description:
    "Healthcare solutions for pharmaceutical supply, medical devices, diagnostics, cervical-screening support, and strategic health-system capacity in Ethiopia.",
  keywords: [
    "MedX Healthcare Solutions",
    "Ethiopia healthcare",
    "pharmaceutical supply",
    "diagnostics",
    "medical devices",
    "cervical cancer screening",
    "digital health",
    "healthcare forecasting",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "MedX Healthcare Solutions",
    description:
      "Healthcare solutions for supply, diagnostics, medical devices, cervical-screening support, and health-system capacity in Ethiopia.",
    type: "website",
    url: siteUrl,
    siteName: "MedX Healthcare Solutions",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: medxImages.aiPlatformHero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MedX Healthcare Solutions",
    description:
      "Healthcare solutions for supply, diagnostics, medical devices, cervical-screening support, and health-system capacity in Ethiopia.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd()),
          }}
        />
        <SiteHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
