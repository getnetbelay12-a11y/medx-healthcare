import Link from "next/link";
import type { Metadata } from "next";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Globe2,
  Network,
  PackageCheck,
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
  "Identify healthcare access gaps",
  "Source products and diagnostic support",
  "Coordinate facility delivery",
  "Track visibility and program readiness",
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

const aiSignals = [
  {
    label: "Diagnostics",
    value: "Readiness rising",
    detail: "Lab consumables, referral flow, and screening follow-up aligned.",
    level: "78%",
  },
  {
    label: "Medicine supply",
    value: "Watch list",
    detail: "Two high-priority categories need earlier sourcing review.",
    level: "62%",
  },
  {
    label: "Device access",
    value: "Coordinating",
    detail: "Facility requirements and product documentation under review.",
    level: "71%",
  },
];

const intelligenceQueue = [
  {
    label: "Institutional request",
    value: "Diagnostic and consumable bundle",
    status: "Scope",
  },
  {
    label: "Risk signal",
    value: "Procurement lead time pressure",
    status: "Review",
  },
  {
    label: "Action owner",
    value: "Supply and program coordination",
    status: "Assign",
  },
  {
    label: "Reporting need",
    value: "Weekly readiness summary",
    status: "Prepare",
  },
];

const intelligenceStats = [
  { label: "Request intake", value: "Structured" },
  { label: "Supply signal", value: "Prioritized" },
  { label: "Follow-up", value: "Tracked" },
];

const requestChecklist = [
  "Organization, facility, or program name",
  "Product, device, diagnostic, or screening-support need",
  "Estimated quantity, destination, and timeline",
  "Current bottleneck: availability, procurement, training, reporting, or referral",
  "Decision owner and preferred follow-up path",
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
            description="MedX is strongest when the story is not just what it can provide, but how it moves healthcare needs from identification to delivery, visibility, and program readiness."
            centered
          />

          <div className="medx-access-stage mt-10">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">
                MedX access platform
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight text-white md:text-5xl">
                Diagnostics, products, relationships, and data moving together.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                The work is practical: understand the need, secure the right
                product or program support, coordinate delivery, and build the
                visibility required to scale responsibly.
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
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="container-medx grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="AI-assisted operations preview"
              title="A smarter command layer for healthcare access work."
              description="MedX should not present AI as decoration. The practical opportunity is an operating cockpit that turns requests, supply signals, diagnostic readiness, and program follow-up into visible next actions."
            />
            <div className="mt-7 grid gap-3">
              {intelligenceStats.map((item) => (
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

          <div className="medx-ai-console">
            <div className="medx-console-topline">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
                  MedX operating intelligence
                </p>
                <p className="mt-2 text-2xl font-black text-white">
                  Access command cockpit
                </p>
              </div>
              <span>AI-ready roadmap</span>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Activity, label: "Demand pressure", value: "Forecast" },
                { icon: Network, label: "Facility actions", value: "Coordinate" },
                { icon: Globe2, label: "Regional scale", value: "Plan" },
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
                  <p className="text-sm font-black text-white">Operating queue</p>
                  <span>Live model</span>
                </div>
                <div className="mt-4 grid gap-3">
                  {intelligenceQueue.map((item) => (
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
                {aiSignals.map((signal) => (
                  <div key={signal.label} className="medx-ai-signal">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <p>{signal.label}</p>
                        <span>{signal.value}</span>
                      </div>
                      <strong>{signal.detail}</strong>
                      <div className="medx-signal-bar" aria-hidden="true">
                        <i style={{ width: signal.level }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="medx-console-chart mt-5" aria-label="Readiness trend visualization">
              <span style={{ height: "46%" }} />
              <span style={{ height: "62%" }} />
              <span style={{ height: "54%" }} />
              <span style={{ height: "78%" }} />
              <span style={{ height: "68%" }} />
              <span style={{ height: "88%" }} />
              <span style={{ height: "72%" }} />
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
              description="MedX’s original platform was rooted in diagnostics and cervical-screening access. That origin still matters because women’s health programs need tools, supply, training coordination, and dependable follow-through."
            />

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {["Screening access", "Program supply", "Care continuity"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 text-sm font-black"
                  >
                    {item}
                  </div>
                ),
              )}
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
