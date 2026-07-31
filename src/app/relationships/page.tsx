import Link from "next/link";
import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import MedxImage from "@/components/MedxImage";
import PageHero from "@/components/PageHero";
import RelationshipsCarousel from "@/components/partners/RelationshipsCarousel";
import SectionHeader from "@/components/SectionHeader";
import { medxImages } from "@/data/images";
import { pageMetadata } from "@/lib/seo";
import {
  Building2,
  FlaskConical,
  GraduationCap,
  Handshake,
  Landmark,
  Microscope,
  PackageCheck,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = pageMetadata({
  title: "Relationships",
  description:
    "Explore MedX relationship context, institutional references, historical records, and collaboration pathways.",
  path: "/relationships",
  image: medxImages.historicalMeetingGroup.src,
});

const categories = [
  { title: "Technology", icon: Microscope },
  { title: "Healthcare institutions", icon: Building2 },
  { title: "Government and public health", icon: Landmark },
  { title: "Suppliers", icon: PackageCheck },
  { title: "Diagnostics", icon: FlaskConical },
  { title: "Research institutions", icon: GraduationCap },
  { title: "Investors", icon: TrendingUp },
  { title: "Implementation organizations", icon: Handshake },
];

const historicalRelationshipImages = [
  {
    image: medxImages.historicalMeetingGroup,
    title: "Institutional relationship meeting",
    caption:
      "Historical MedX attachment showing a formal institutional relationship photo.",
  },
  {
    image: medxImages.historicalMeetingDiscussion,
    title: "Government and public-health discussion context",
    caption:
      "Historical MedX attachment showing a formal meeting context with Ethiopian institutional setting.",
  },
  {
    image: medxImages.historicalMeetingRoom,
    title: "Relationship discussion materials",
    caption:
      "Historical MedX attachment showing a meeting room discussion connected to relationship development.",
  },
];

export default function RelationshipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Relationships"
        title="Collaboration pathways for suppliers, institutions, technology, and public health."
        description="MedX keeps relationship information organized with clear context for current records, historical references, and future collaboration opportunities."
        highlights={["Suppliers", "Institutions", "Technology"]}
        image={medxImages.historicalMeetingGroup}
        imageLabel="Relationship context"
        imageCaption="Historical attachments • institutions • implementation"
      />

      <RelationshipsCarousel />

      <section className="bg-white py-14 md:py-16">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Historical attachments"
            title="Relationship materials from the supplied MedX image archive."
            description="These photos are used as historical relationship context from the attachment archive. They do not imply a current endorsement, active contract, or current government approval."
            centered
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {historicalRelationshipImages.map((item) => (
              <article key={item.title} className="card-premium overflow-hidden">
                <MedxImage
                  src={item.image.src}
                  alt={item.image.alt}
                  className="aspect-[4/3]"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="p-5">
                  <h2 className="text-lg font-black leading-tight text-[#071b33]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="medical-pattern py-14 md:py-16">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Relationship categories"
            title="Priority areas for structured healthcare collaboration."
            centered
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(({ title, icon: Icon }) => (
              <Link
                key={title}
                href="/contact"
                className="card-premium p-6 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(8,27,51,0.12)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#10a66e]">
                  <Icon size={23} />
                </div>
                <p className="mt-5 text-lg font-black text-[#071b33]">
                  {title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="container-medx grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="How collaboration works"
            title="Clear scope, practical review, accountable follow-through."
            description="MedX reviews each inquiry by need, geography, product or service category, operating requirements, and institutional value."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Define the healthcare need",
              "Clarify supply or service scope",
              "Review operational requirements",
              "Agree on next-step responsibilities",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-black leading-6 text-[#071b33]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Discuss a MedX relationship or collaboration pathway."
        description="Use the contact form to introduce a supplier, technology, implementation, investment, diagnostics, or public-health collaboration."
        buttonLabel="Submit relationship inquiry"
      />
    </>
  );
}
