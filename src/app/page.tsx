import Link from "next/link";
import type { Metadata } from "next";
import {
  Activity,
  ArrowRight,
  DatabaseZap,
  Globe2,
  HeartPulse,
  Microscope,
  Network,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import LeadershipCarousel from "@/components/leadership/LeadershipCarousel";
import MedxImage from "@/components/MedxImage";
import RelationshipsCarousel from "@/components/partners/RelationshipsCarousel";
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

const benefitTiles = [
  {
    number: "01",
    title: "Diagnostics-first platform",
    text: "Programs are organized around testing readiness, cervical-health origin, and fast institutional coordination.",
  },
  {
    number: "02",
    title: "Supply reliability",
    text: "Pharmaceuticals, consumables, and medical-device requests are treated as operational systems, not one-off transactions.",
  },
  {
    number: "03",
    title: "Public-health fit",
    text: "MedX is built for facilities, institutions, and programs that need practical execution in constrained environments.",
  },
  {
    number: "04",
    title: "Capacity roadmap",
    text: "Digital visibility, forecasting, research collaboration, and local capability are part of the long-term platform direction.",
  },
];

const platformPath = [
  "Identify healthcare access gaps",
  "Source products and diagnostic support",
  "Coordinate facility delivery",
  "Track visibility and program readiness",
];

const technologyCards = [
  {
    icon: Microscope,
    title: "Diagnostics and screening",
    text: "Support for diagnostic readiness, cervical-health screening programs, and lab-facing service coordination.",
  },
  {
    icon: PackageCheck,
    title: "Products and supply",
    text: "Pharmaceutical supply, devices, and health-product sourcing for institutional healthcare needs.",
  },
  {
    icon: DatabaseZap,
    title: "Digital operations",
    text: "Workflows for supply visibility, forecasting, reporting, and program coordination as the platform matures.",
  },
];

const aiSignals = [
  { label: "Demand risk", value: "Forecast" },
  { label: "Stock visibility", value: "Track" },
  { label: "Program readiness", value: "Coordinate" },
  { label: "Leadership reporting", value: "Report" },
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
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="container-medx grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <MedxImage
              src={medxImages.diagnostics.src}
              alt={medxImages.diagnostics.alt}
              className="aspect-[16/10] rounded-[1.35rem] shadow-[0_24px_70px_rgba(8,27,51,0.12)]"
            />
          </div>

          <div>
            <SectionHeader
              eyebrow="Diagnostic readiness"
              title="Built for the point where tests, products, and public-health programs meet."
              description="MedX leads with the operational platform that helps diagnostic and healthcare access programs reach facilities and communities."
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {benefitTiles.map((item) => (
                <article key={item.number} className="medx-benefit-card">
                  <p className="text-3xl font-black text-[#10a66e]">
                    {item.number}
                  </p>
                  <h3 className="mt-3 text-base font-black text-[#071b33]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
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

      <section className="section-band py-14 md:py-18">
        <div className="container-medx">
          <SectionHeader
            eyebrow="What makes MedX useful"
            title="From products to platform."
            description="The stronger story is not just what MedX supplies. It is how MedX connects products, diagnostics, relationships, and operating discipline into a system."
            centered
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {technologyCards.map((card) => {
              const Icon = card.icon;

              return (
                <article key={card.title} className="medx-tech-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#071b33] text-emerald-300">
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-6 text-2xl font-black text-[#071b33]">
                    {card.title}
                  </h3>
                  <p className="mt-4 leading-8 text-slate-600">{card.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="container-medx grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="AI-assisted operations preview"
              title="Visibility is the difference between effort and execution."
              description="MedX’s next operating layer should help leaders forecast demand, see supply risk, coordinate programs, and report clearly without waiting for fragmented spreadsheets to catch up."
            />
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
                  Access readiness view
                </p>
              </div>
              <span>In development</span>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Activity, label: "Program demand", value: "Forecast" },
                { icon: Network, label: "Facility network", value: "Coordinate" },
                { icon: Globe2, label: "Regional capacity", value: "Expand" },
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

            <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="medx-console-chart" aria-hidden="true">
                <span style={{ height: "46%" }} />
                <span style={{ height: "62%" }} />
                <span style={{ height: "54%" }} />
                <span style={{ height: "78%" }} />
                <span style={{ height: "68%" }} />
                <span style={{ height: "88%" }} />
                <span style={{ height: "72%" }} />
              </div>
              <div className="grid gap-3">
                {aiSignals.map((signal) => (
                  <div key={signal.label} className="medx-ai-signal">
                    <p>{signal.label}</p>
                    <span>{signal.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadershipCarousel />

      <RelationshipsCarousel />

      <section className="bg-white py-14 md:py-18">
        <div className="container-medx">
          <div className="grid gap-5 md:grid-cols-2">
            <Link href="/about#leadership" className="medx-link-panel group">
              <ShieldCheck className="text-[#10a66e]" size={24} />
              <p className="mt-5 text-xs font-black uppercase tracking-[0.22em] text-[#10a66e]">
                Governance
              </p>
              <h2 className="mt-3 text-2xl font-black text-[#071b33]">
                Review leadership and governance
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Open the full governance context, including historical board
                references.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0a7c5b]">
                Open leadership
                <ArrowRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              </span>
            </Link>

            <Link href="/partners" className="medx-link-panel group">
              <HeartPulse className="text-[#10a66e]" size={24} />
              <p className="mt-5 text-xs font-black uppercase tracking-[0.22em] text-[#10a66e]">
                Relationships
              </p>
              <h2 className="mt-3 text-2xl font-black text-[#071b33]">
                Explore partners and relationship context
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                View current and historical relationship context in one place.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0a7c5b]">
                Open partners
                <ArrowRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Request products, services, or a partnership discussion."
        description="Choose the path that matches your institution’s need."
        buttonLabel="Request products or services"
        secondaryButtonLabel="Discuss a partnership"
        variant="simple"
      />
    </>
  );
}
