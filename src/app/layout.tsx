import SiteHeader from "@/components/SiteHeader";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://medx-healthcare-solutions.getnetgc.chatgpt.site"),
  title: {
    default: "MedX Healthcare Solutions",
    template: "%s | MedX Healthcare Solutions",
  },
  description:
    "Integrated healthcare solutions for diagnostics, pharmaceuticals, medical devices, cancer screening, digital health, and AI-enabled healthcare operations across Ethiopia and Africa.",
  keywords: [
    "MedX Healthcare Solutions",
    "Ethiopia healthcare",
    "pharmaceutical supply",
    "diagnostics",
    "medical devices",
    "cervical cancer screening",
    "digital health",
    "AI healthcare",
    "healthcare forecasting",
    "Bahir Dar",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "MedX Healthcare Solutions",
    description:
      "Integrated healthcare solutions for diagnostics, pharmaceuticals, medical devices, cancer screening, digital health, and AI-enabled healthcare operations across Ethiopia and Africa.",
    type: "website",
    images: ["/images/medx/medx-hero-healthcare-africa.jpg"],
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
        <SiteHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
