import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Relationships",
  description:
    "Review MedX Healthcare Solutions relationship areas, collaboration context, and institutional engagement materials.",
  path: "/relationships",
});

export default function PartnersRedirect() {
  permanentRedirect("/relationships");
}
