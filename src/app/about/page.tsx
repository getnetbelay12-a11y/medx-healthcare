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
import LeadershipCarousel from "@/components/leadership/LeadershipCarousel";
import MedxImage from "@/components/MedxImage";
import SectionHeader from "@/components/SectionHeader";
import { company } from "@/data/company";
import { medxImages } from "@/data/images";
import { getPublishedServices } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About MedX",
  description:
    "A concise overview of MedX Healthcare Solutions, its Bahir Dar base, diagnostics and screening origin, current healthcare focus, governance context, and relationship status.",
  path: "/about",
  image: medxImages.aiPlatformHero.src,
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

const currentServiceAreas = getPublishedServices("current").filter(
  (service) => service.isVerified,
);

const aboutMetrics = [
  { label: "Founded", value: company.founded },
  { label: "Base", value: "Bahir Dar" },
  { label: "Original focus", value: "Diagnostics and screening" },
  { label: "Current focus", value: "Supply, diagnostics, devices, programs" },
];

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
              A healthcare access company built for disciplined execution.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
              MedX connects healthcare supply, diagnostics, cervical-screening
              support, and local capacity building into one practical operating
              platform for institutions and public-health programs.
            </p>
            <div className="mt-8 grid gap-3 text-sm font-bold text-slate-200 sm:grid-cols-2">
              {aboutMetrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-200">
                    {item.label}
                  </p>
                  <p className="mt-1 leading-6 text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <MedxImage
              src={medxImages.aiPlatformHero.src}
              alt={medxImages.aiPlatformHero.alt}
              priority
              className="image-frame aspect-[16/9] rounded-[1.5rem] md:rounded-[2rem]"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
            <p className="mt-3 text-xs font-bold text-slate-300">
              Conceptual MedX healthcare operations image
            </p>
          </div>
        </div>
      </section>

      <section id="governance" className="section-band scroll-mt-28 py-14 md:py-16">
        <div className="container-medx grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeader
            eyebrow="Origin and evolution"
            title="From diagnostic and screening roots to broader healthcare access work."
            description={`${company.description} Historical materials reference initial capital of ${company.historicalInitialCapital}.`}
          />
          <div className="space-y-4">
            {company.aboutTimeline.slice(0, 4).map((item) => (
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
          </div>
          <MedxImage
            src={medxImages.aiDiagnosticsFrame.src}
            alt={medxImages.aiDiagnosticsFrame.alt}
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
            title="Governance history with source context."
            description="MedX’s governance and ownership structure has evolved since formation. The references below preserve historical context while current records can be updated in one central data file."
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

      <LeadershipCarousel />

      <CTASection />
    </>
  );
}
