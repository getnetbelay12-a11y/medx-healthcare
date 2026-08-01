import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  HeartPulse,
  Landmark,
  Network,
  PackageCheck,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import MedxImage from "@/components/MedxImage";
import SectionHeader from "@/components/SectionHeader";
import { medxImages } from "@/data/images";
import { getPublishedServices } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "MedX Healthcare Solutions",
  description:
    "MedX supports healthcare access through pharmaceutical supply, medical devices, diagnostics, cervical-screening support, and strategic health-system capacity.",
  path: "/",
  image: "/og.png",
});

const currentServices = getPublishedServices("current");
const serviceActions: Record<string, string> = {
  "pharmaceutical-supply": "Request pharmaceutical supply",
  "medical-devices": "Discuss medical-device needs",
  diagnostics: "Request diagnostic support",
  "cervical-screening": "Discuss a screening program",
};

const platformPath = [
  "Capture institution, facility, destination, and decision-owner context",
  "Clarify product, diagnostic, device, medical consumables, or program requirements",
  "Coordinate sourcing, readiness gaps, documentation, and handoffs",
  "Keep status, risk notes, and follow-up actions visible",
];

const operatingModel = [
  {
    icon: ClipboardList,
    title: "1. Define the request",
    detail:
      "Clarify the institution, product or program need, urgency, destination, documentation requirements, and decision owner.",
    evidence: "Request scope, expected quantities, facility context",
  },
  {
    icon: PackageCheck,
    title: "2. Coordinate supply and program fit",
    detail:
      "Match the need to pharmaceutical supply, devices, diagnostics, screening support, or a combined operating plan.",
    evidence: "Product category, readiness gaps, partner dependencies",
  },
  {
    icon: Network,
    title: "3. Track readiness and follow-through",
    detail:
      "Keep visibility on availability, handoffs, reporting, and next actions so work does not disappear after the first conversation.",
    evidence: "Status view, risk notes, follow-up actions",
  },
];

const evidenceSignals = [
  {
    label: "Institutional need",
    value: "Healthcare access",
    detail:
      "Facilities need clearer pathways for products, diagnostic support, and program follow-through.",
  },
  {
    label: "MedX origin",
    value: "Diagnostics foundation",
    detail:
      "MedX’s history is rooted in diagnostics, cervical-health access, and institutional healthcare relationships.",
  },
  {
    label: "Public-health focus",
    value: "Women’s health",
    detail:
      "Cervical-health support remains part of the broader platform for screening, referral, and supply coordination.",
  },
  {
    label: "Product pathway",
    value: "Quote-first catalog",
    detail:
      "The catalog helps institutions start with a clear quotation or supply request before procurement decisions.",
  },
];

const credibilityRules = [
  {
    label: "Current",
    value: "Supply, diagnostics, devices, and programs",
    status: "Active",
  },
  {
    label: "Historical",
    value: "Diagnostics and cervical-health foundation",
    status: "Context",
  },
  {
    label: "Roadmap",
    value: "Digital visibility and local capacity",
    status: "Planned",
  },
  {
    label: "Requests",
    value: "Institutional quotation and supply review",
    status: "Open",
  },
];

const evidenceStats = [
  { label: "Service focus", value: "Clear" },
  { label: "Request pathway", value: "Defined" },
  { label: "Future roadmap", value: "Separated" },
];

const serviceStandards = [
  {
    title: "Quote-ready information",
    detail:
      "Requests are framed around product category, quantity, delivery context, and urgency before procurement discussions begin.",
  },
  {
    title: "Responsible health communication",
    detail:
      "Public content separates current services, historical context, and future plans without overstating clinical or commercial claims.",
  },
  {
    title: "Institutional follow-through",
    detail:
      "Visitors get a clearer path from need identification to contact, review, coordination, and next action.",
  },
];

const requestChecklist = [
  "Organization, facility, or program name",
  "Product, device, diagnostic, or screening-support need",
  "Estimated quantity, destination, and timeline",
  "Current bottleneck: availability, procurement, training, reporting, or referral",
  "Decision owner and preferred follow-up path",
];

const cervicalContext = [
  { value: "36.9M", label: "women age 15+ at risk in Ethiopia" },
  { value: "7,445", label: "estimated new cases per year" },
  { value: "5,338", label: "estimated deaths per year" },
  { value: "#2", label: "most frequent cancer among women" },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="medx-product-band py-14 md:py-18">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Healthcare products and services"
            title="One access platform. Four execution lanes."
            description="MedX is strongest when the story is not just what it can provide, but how it moves healthcare needs from identification to supply coordination, diagnostic support, and program readiness."
            centered
          />

          <div className="medx-access-stage mt-10">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">
                MedX access platform
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight text-white md:text-5xl">
                Diagnostics, products, consumables, and relationships moving together.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                The work is practical: understand the need, secure the right
                medicine, device, laboratory equipment, medical consumable, or
                program support, then coordinate follow-through with the discipline
                required for institutional healthcare.
              </p>
            </div>

            <div className="grid gap-3">
              {platformPath.map((item, index) => (
                <div key={item} className="medx-path-step">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {currentServices.map((service, index) => (
              <article key={service.id} className="medx-product-card">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-4xl font-black leading-none text-emerald-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#10a66e]">
                    <PackageCheck size={23} />
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-black leading-tight text-[#071b33]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.summary}
                </p>
                <div className="medx-feature-list mt-5">
                  {service.features.map((feature) => (
                    <span key={feature}>
                      <CheckCircle2 size={14} />
                      {feature}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0a7c5b] transition hover:text-[#071b33] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                >
                  {serviceActions[service.id]}
                  <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>

          <div className="medx-operating-model mt-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#10a66e]">
                Operating detail
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#071b33] md:text-4xl">
                What happens after an institution asks for support.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                A professional healthcare request needs a clear operating path
                from intake to sourcing, coordination, visibility, and
                follow-through.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {operatingModel.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="medx-operating-card">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-[#10a66e]">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-5 text-xl font-black text-[#071b33]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.detail}
                    </p>
                    <p className="mt-4 rounded-xl bg-slate-50 px-4 py-3 text-xs font-black leading-6 text-slate-600">
                      {item.evidence}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="medx-service-standards mt-8">
            {serviceStandards.map((standard) => (
              <article key={standard.title}>
                <CheckCircle2 size={20} />
                <div>
                  <h3>{standard.title}</h3>
                  <p>{standard.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="container-medx grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Operating clarity"
              title="A serious healthcare partner starts with disciplined communication."
              description="MedX presents current services, historical context, and future plans clearly so institutions can understand what to request, how to engage, and what happens next."
            />
            <div className="mt-7 grid gap-3">
              {evidenceStats.map((item) => (
                <div key={item.label} className="medx-intel-proof">
                  <CheckCircle2 size={18} />
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
            <Link href="/strategy" className="btn-primary mt-8">
              Review strategy
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="medx-evidence-panel">
            <div className="medx-console-topline">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
                  Credibility discipline
                </p>
                <p className="mt-2 text-2xl font-black text-white">
                  Clear information for institutional decisions
                </p>
              </div>
              <span>Ready for review</span>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                { icon: SearchCheck, label: "Request path", value: "Clear" },
                { icon: Landmark, label: "Institutional context", value: "Focused" },
                { icon: ShieldCheck, label: "Claims", value: "Disciplined" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="medx-dashboard-metric">
                    <Icon className="text-emerald-300" size={22} />
                    <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-2 text-2xl font-black text-white">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_1fr]">
              <div className="medx-console-queue">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-black text-white">Public-copy rule</p>
                  <span>Operating standard</span>
                </div>
                <div className="mt-4 grid gap-3">
                  {credibilityRules.map((item) => (
                    <div key={item.label} className="medx-queue-row">
                      <div>
                        <p>{item.label}</p>
                        <strong>{item.value}</strong>
                      </div>
                      <span>{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                {evidenceSignals.map((signal) => (
                  <div key={signal.label} className="medx-source-signal">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <p>{signal.label}</p>
                        <span>{signal.value}</span>
                      </div>
                      <strong>{signal.detail}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="medx-women-health py-14 text-white md:py-18">
        <div className="container-medx grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
              No woman left behind
            </p>
            <SectionHeader
              eyebrow="Cervical-health origin"
              title="A focused origin in cervical screening and cancer-care access."
              description="MedX’s original platform was rooted in diagnostics and cervical-screening access. Ethiopia-specific burden data makes the need clear: women’s health programs need tools, supply, training coordination, and dependable follow-through."
            />

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {cervicalContext.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] p-4"
                >
                  <p className="flex items-center gap-2 text-3xl font-black">
                    <HeartPulse size={22} className="text-emerald-200" />
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-slate-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Source: ICO/IARC HPV Information Centre, Ethiopia Fact Sheet 2023.
            </p>

            <div className="mt-7">
              <Link href="/public-health" className="btn-outline">
                See public-health focus
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <div>
            <MedxImage
              src={medxImages.cervicalScreening.src}
              alt={medxImages.cervicalScreening.alt}
              className="image-frame aspect-[16/10] rounded-[1.35rem]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="container-medx">
          <div className="medx-request-brief">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">
                Before contacting MedX
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">
                A sharper request gets a sharper response.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                MedX can move faster when the request is framed around the
                facility, product or program need, timeline, and operational
                constraint. This is especially important for institutional
                supply, diagnostic readiness, and screening-program support.
              </p>
            </div>

            <div className="medx-request-list">
              {requestChecklist.map((item) => (
                <div key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Request products, services, or a relationship discussion."
        description="Choose the path that matches your institution’s need."
        buttonLabel="Request products or services"
        secondaryButtonLabel="Discuss a relationship"
        variant="simple"
      />
    </>
  );
}
