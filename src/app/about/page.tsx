import type { Metadata } from "next";
import {
  CheckCircle2,
  CircleDot,
  Handshake,
  Lightbulb,
  Scale,
  ShieldCheck,
  Target,
  Warehouse,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import CurrentLeadershipSection from "@/components/leadership/CurrentLeadershipSection";
import HistoricalBoardCarousel from "@/components/leadership/HistoricalBoardCarousel";
import MedxImage from "@/components/MedxImage";
import HistoricalRelationshipsCarousel from "@/components/partners/HistoricalRelationshipsCarousel";
import SectionHeader from "@/components/SectionHeader";
import { company } from "@/data/company";
import { medxImages } from "@/data/images";
import { getCurrentPublishedRelationships } from "@/data/relationships";
import { getPublishedServices } from "@/data/services";
import { publicEnv } from "@/lib/env";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About MedX",
  description:
    "A concise overview of MedX Healthcare Solutions, its Bahir Dar base, diagnostics and screening origin, current healthcare focus, governance context, and relationship status.",
  path: "/about",
  image: medxImages.hospitalPartnership.src,
});

const missionVision = [
  {
    label: "Mission",
    title: company.mission,
  },
  {
    label: "Vision",
    title: company.vision,
  },
];

const values = [
  {
    ...company.aboutValues[0],
    icon: Target,
  },
  {
    ...company.aboutValues[1],
    icon: Lightbulb,
  },
  {
    ...company.aboutValues[2],
    icon: ShieldCheck,
  },
  {
    ...company.aboutValues[3],
    icon: Warehouse,
  },
  {
    ...company.aboutValues[4],
    icon: Handshake,
  },
  {
    ...company.aboutValues[5],
    icon: Scale,
  },
];

const currentRelationships = getCurrentPublishedRelationships();
const currentServiceAreas = getPublishedServices("current").filter(
  (service) => service.isVerified,
);

export default function AboutPage() {
  return (
    <>
      <section className="corporate-shell relative overflow-hidden text-white">
        <div className="premium-divider absolute inset-x-0 bottom-0" />
        <div className="container-medx grid gap-10 py-14 md:py-18 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-20">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-emerald-300/25 bg-emerald-300/[0.08] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-200">
              About MedX
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.03] tracking-normal sm:text-5xl md:text-6xl">
              Building stronger healthcare access from Bahir Dar.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
              MedX connects healthcare supply, diagnostics, cervical-screening
              support, and long-term local capacity building for institutions and
              public-health programs.
            </p>
            <div className="mt-8 grid gap-3 text-sm font-bold text-slate-200 sm:grid-cols-3">
              {company.aboutHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3"
                  >
                    {item}
                  </div>
              ))}
            </div>
          </div>

          <div>
            <MedxImage
              src={medxImages.hospitalPartnership.src}
              alt={medxImages.hospitalPartnership.alt}
              priority
              className="image-frame aspect-[16/9] rounded-[1.5rem] md:rounded-[2rem]"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
            <p className="mt-3 text-xs font-bold text-slate-300">
              Conceptual healthcare operations image
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="container-medx">
          <SectionHeader
            eyebrow="MedX at a glance"
            title="A healthcare company with diagnostic roots and practical access priorities."
            description={company.description}
          />
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {company.aboutGlance.map((item) => (
              <div key={item.label} className="border-l-4 border-[#10a66e] bg-slate-50 p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#10a66e]">
                  {item.label}
                </p>
                <p className="mt-3 text-base font-black leading-7 text-[#071b33]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-bold leading-7 text-amber-900">
            Historical capital reference: {company.historicalInitialCapital}.
            Source: {company.historicalSourceLabel}.
          </p>
        </div>
      </section>

      <section id="governance" className="section-band scroll-mt-28 py-14 md:py-16">
        <div className="container-medx grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeader
            eyebrow="Origin and evolution"
            title="From diagnostic and screening roots to broader healthcare access work."
            description="MedX’s public history is presented with clear source context so visitors can distinguish formation history from current operating priorities."
          />
          <div className="space-y-4">
            {company.aboutTimeline.map((item) => (
              <article
                key={`${item.period}-${item.title}`}
                className="grid gap-4 border-l border-slate-200 bg-white p-5 shadow-[0_10px_28px_rgba(8,27,51,0.05)] md:grid-cols-[9rem_1fr]"
              >
                <div>
                  <p className="text-sm font-black text-[#071b33]">{item.period}</p>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#10a66e]">
                    {item.label}
                  </p>
                </div>
                <p className="text-base font-bold leading-7 text-slate-700">
                  {item.title}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="container-medx grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="What MedX does today"
              title="Focused healthcare support for institutions and public-health programs."
              description="MedX focuses on practical service areas that support health facilities, public-health programs, and institutional healthcare delivery."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {currentServiceAreas.map((service) => (
                <div key={service.id} className="flex gap-3 rounded-2xl border border-slate-200 p-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#10a66e]" size={20} />
                  <p className="text-sm font-black leading-6 text-[#071b33]">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-bold leading-7 text-amber-900">
              Service availability is subject to confirmation based on product,
              location, regulatory requirements, and implementation capacity.
            </p>
          </div>
          <MedxImage
            src={medxImages.diagnostics.src}
            alt={medxImages.diagnostics.alt}
            className="aspect-[16/10] rounded-[1.5rem] shadow-[0_18px_44px_rgba(8,27,51,0.1)]"
          />
        </div>
      </section>

      <section className="medical-pattern py-14 md:py-16">
        <div className="container-medx grid gap-5 lg:grid-cols-2">
          {missionVision.map((item) => (
            <article key={item.label} className="bg-white p-7 shadow-[0_12px_34px_rgba(8,27,51,0.06)]">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#10a66e]">
                {item.label}
              </p>
              <h2 className="mt-4 text-2xl font-black leading-tight text-[#071b33] md:text-3xl">
                {item.title}
              </h2>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Operating values"
            title="Principles for disciplined healthcare execution."
            centered
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {values.map(({ title, description, icon: Icon }) => (
              <article key={title} className="border border-slate-200 p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-[#10a66e]">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-black text-[#071b33]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band py-14 md:py-16">
        <div className="container-medx grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeader
            eyebrow="Governance overview"
            title="Governance information is published through official MedX confirmation."
            description="MedX’s governance and ownership structure has evolved since its formation. Current legal, shareholder, board, and executive information is published only after organizational confirmation."
          />
          <details className="group bg-white p-6 shadow-[0_12px_34px_rgba(8,27,51,0.06)]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-black text-[#071b33] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-emerald-300">
              View historical governance context
              <CircleDot className="shrink-0 text-[#10a66e] transition-transform group-open:rotate-90" size={22} />
            </summary>
            <div className="mt-5 space-y-3 border-t border-slate-200 pt-5">
              {company.historicalGovernanceContext.map((item) => (
                <p key={item} className="text-sm font-bold leading-7 text-slate-600">
                  {item}
                </p>
              ))}
            </div>
          </details>
        </div>
      </section>

      <CurrentLeadershipSection />

      {publicEnv.showHistoricalBoard && (
        <section className="bg-white py-14 md:py-16">
          <div className="container-medx">
            <details className="group">
              <summary className="cursor-pointer list-none rounded-2xl border border-slate-200 bg-slate-50 p-5 text-lg font-black text-[#071b33] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-emerald-300">
                Historical governance references from MedX&apos;s 2020 investor materials
              </summary>
              <div className="mt-8">
                <p className="mb-5 text-sm font-bold leading-7 text-slate-600">
                  These records are historical references and do not confirm
                  current MedX board membership or current titles.
                </p>
                <HistoricalBoardCarousel />
              </div>
            </details>
          </div>
        </section>
      )}

      <section className="bg-white py-14 md:py-16">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Relationships"
            title="Current verified relationships"
            description="Current relationships are published only after organizational confirmation and approval for public use."
            centered
          />
          {currentRelationships.length > 0 ? (
            <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {currentRelationships.map((relationship) => (
                <article key={relationship.id} className="border border-slate-200 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#10a66e]">
                    Verified current relationship
                  </p>
                  <h3 className="mt-3 text-lg font-black text-[#071b33]">
                    {relationship.displayName}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {relationship.publicDescription}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center text-sm font-bold leading-7 text-slate-600">
              Verified current relationships will be published after organizational
              confirmation.
            </p>
          )}
        </div>
      </section>

      {publicEnv.showHistoricalRelationships && (
        <section className="section-band py-14 md:py-16">
          <div className="container-medx">
            <details className="group">
              <summary className="cursor-pointer list-none rounded-2xl border border-slate-200 bg-white p-5 text-lg font-black text-[#071b33] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-emerald-300">
                Historical relationships referenced in 2020 materials
              </summary>
              <div className="mt-8">
                <p className="mb-5 text-sm font-bold leading-7 text-slate-600">
                  These organization references are historical context only and do
                  not imply current endorsement or active partnership.
                </p>
                <HistoricalRelationshipsCarousel />
              </div>
            </details>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
