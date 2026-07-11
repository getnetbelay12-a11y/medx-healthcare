import Link from "next/link";
import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { medxImages } from "@/data/images";
import {
  getCurrentPublishedRelationships,
  getHistoricalRelationships,
  shouldShowHistoricalRelationships,
} from "@/data/relationships";
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
    "MedX collaboration model, verified public relationships, historical relationship context, and partnership inquiry options.",
  path: "/partners",
  image: medxImages.hospitalPartnership.src,
});

const currentRelationships = getCurrentPublishedRelationships();
const historicalRelationships = shouldShowHistoricalRelationships()
  ? getHistoricalRelationships()
  : [];

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

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Partners"
        description="Collaboration pathways for healthcare institutions, public-health programs, suppliers, diagnostics organizations, investors, and technology partners."
        image={medxImages.hospitalPartnership}
      />

      <section className="bg-white py-20">
        <div className="container-medx grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Collaboration model"
            title="MedX is built for disciplined healthcare collaboration."
            description="The partnership model focuses on verified needs, clear responsibilities, compliant product availability, reliable supply, and measurable public-health value."
          />
          <div className="executive-card p-8 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#10a66e]">
              Partnership principles
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Verified relationship status",
                "Approved public descriptions",
                "No unapproved logo use",
                "Clear regulatory and commercial scope",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-black text-[#071b33]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Current verified relationships"
            title="Only approved current relationships are shown as current partners."
            centered
          />
          {currentRelationships.length > 0 ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {currentRelationships.map((relationship) => (
                <article key={relationship.id} className="card-premium p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071b33] text-sm font-black text-white">
                    {initials(relationship.displayName)}
                  </div>
                  <h3 className="mt-5 text-xl font-black text-[#071b33]">
                    {relationship.displayName}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {relationship.publicDescription}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-10 max-w-3xl rounded-[1.5rem] border border-slate-200 bg-white p-8 text-center shadow-[0_18px_50px_rgba(8,27,51,0.06)]">
              <p className="text-lg font-black text-[#071b33]">
                Current public partner records are pending confirmation.
              </p>
              <p className="mt-3 leading-7 text-slate-600">
                MedX works within a healthcare and technology ecosystem, but
                current partner names and logos should appear here only after
                verification and public-use approval.
              </p>
            </div>
          )}
        </div>
      </section>

      {historicalRelationships.length > 0 && (
        <section className="bg-white py-20">
          <div className="container-medx">
            <SectionHeader
              eyebrow="Historical relationship context"
              title="Historical relationships referenced in MedX's 2020 investor materials"
              description="These references are historical and do not imply current endorsement, active partnership, current approval, or logo-use permission."
              centered
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {historicalRelationships.map((relationship) => (
                <article key={relationship.id} className="executive-card p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-sm font-black text-[#071b33]">
                    {initials(relationship.displayName)}
                  </div>
                  <p className="mt-5 text-[10px] font-black uppercase tracking-[0.2em] text-[#10a66e]">
                    {relationship.relationshipType.replaceAll("-", " ")} ·{" "}
                    {relationship.sourceYear}
                  </p>
                  <h3 className="mt-3 text-xl font-black text-[#071b33]">
                    {relationship.displayName}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {relationship.publicDescription}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="medical-pattern py-20">
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
