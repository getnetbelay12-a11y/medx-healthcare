import Link from "next/link";
import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import HistoricalRelationshipsCarousel from "@/components/partners/HistoricalRelationshipsCarousel";
import SectionHeader from "@/components/SectionHeader";
import { medxImages } from "@/data/images";
import { getCurrentPublishedRelationships } from "@/data/relationships";
import { publicEnv } from "@/lib/env";
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
    "Learn about MedX’s verified current relationships, historical collaboration context, and partnership opportunities.",
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
  const currentRelationships = getCurrentPublishedRelationships();

  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Partnerships that strengthen healthcare delivery"
        description="MedX works through technical, institutional, supply, public-health, research, and implementation relationships."
        image={medxImages.hospitalPartnership}
      />

      <section className="bg-white py-14 md:py-16">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Verified relationships"
            title="Current verified relationships"
            description="Verified current relationships are published only after organizational confirmation and approval for public use."
            centered
          />

          {currentRelationships.length > 0 ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {currentRelationships.map((relationship) => (
                <article key={relationship.id} className="card-premium p-6">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#10a66e]">
                    Verified current relationship
                  </p>
                  <h2 className="mt-3 text-xl font-black text-[#071b33]">
                    {relationship.displayName}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {relationship.publicDescription}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center text-sm font-bold leading-7 text-slate-600">
              Verified current relationships will be published after
              organizational confirmation.
            </p>
          )}
        </div>
      </section>

      {publicEnv.showHistoricalRelationships && (
        <section className="relative overflow-hidden bg-white py-14 md:py-16">
          <div className="ai-motion-field" aria-hidden="true">
            <span className="ai-motion-node ai-motion-node-a" />
            <span className="ai-motion-node ai-motion-node-b" />
            <span className="ai-motion-node ai-motion-node-c" />
          </div>
          <div className="container-medx relative">
            <SectionHeader
              eyebrow="Historical relationship context"
              title="Historical relationships referenced in MedX materials"
              description="These organizations are referenced in historical MedX materials. Their inclusion does not confirm a current partnership, endorsement, or active commercial relationship."
              centered
            />
            <HistoricalRelationshipsCarousel />
          </div>
        </section>
      )}

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

      <CTASection
        title="Discuss a MedX partnership pathway."
        description="Use the contact form to introduce a supplier, technology, implementation, investment, diagnostics, or public-health collaboration."
        buttonLabel="Submit partnership inquiry"
      />
    </>
  );
}
