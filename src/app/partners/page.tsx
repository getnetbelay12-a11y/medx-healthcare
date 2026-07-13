import Link from "next/link";
import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
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
  title: "Partners",
  description:
    "Learn about MedX relationship context, historical institutional references, and partnership opportunities.",
  path: "/partners",
  image: medxImages.hospitalPartnership.src,
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

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Partnerships that strengthen healthcare delivery"
        description="MedX works through technical, institutional, supply, public-health, research, and implementation relationships."
        image={medxImages.hospitalPartnership}
      />

      <RelationshipsCarousel />

      <section className="medical-pattern py-14 md:py-16">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Partnership categories"
            title="Where MedX can evaluate structured collaboration."
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
            eyebrow="How partnerships work"
            title="Structured collaboration with clear scope and accountable follow-through."
            description="MedX reviews each inquiry by need, geography, product or service category, operating requirements, and the public-health or institutional value it can support."
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
        title="Discuss a MedX partnership pathway."
        description="Use the contact form to introduce a supplier, technology, implementation, investment, diagnostics, or public-health collaboration."
        buttonLabel="Submit partnership inquiry"
      />
    </>
  );
}
