import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ClipboardCheck,
  DatabaseZap,
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
  image: medxImages.hero.src,
});

const currentServices = getPublishedServices("current");
const serviceActions: Record<string, string> = {
  "pharmaceutical-supply": "Request pharmaceutical supply",
  "medical-devices": "Discuss medical-device needs",
  diagnostics: "Request diagnostic support",
  "cervical-screening": "Discuss a screening program",
};

const strategicPreview = [
  {
    label: "Near term",
    text: "Supply, devices, diagnostics, and screening support",
  },
  {
    label: "Medium term",
    text: "Data visibility, supply-chain discipline, and research collaboration",
  },
  {
    label: "Long term",
    text: "Local capacity, manufacturing readiness, and regional expansion",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="medical-pattern py-12 md:py-14">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Current services"
            title="Current service areas."
            description="MedX supports institutional requests across four current service lines."
            centered
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {currentServices.map((service) => (
              <article key={service.id} className="card-premium p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#10a66e]">
                  <PackageCheck size={23} />
                </div>
                <h3 className="mt-5 text-xl font-black text-[#071b33]">
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

      <section className="bg-white py-12 md:py-14">
        <div className="container-medx grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <MedxImage
              src={medxImages.cervicalScreening.src}
              alt={medxImages.cervicalScreening.alt}
              className="aspect-[16/10] rounded-[1.5rem] shadow-[0_24px_70px_rgba(8,27,51,0.12)]"
            />
            <p className="mt-3 text-xs font-bold text-slate-500">
              Conceptual cervical-health education image.
            </p>
          </div>
          <SectionHeader
            eyebrow="Cervical-health origin"
            title="A focused origin in diagnostics and cervical screening."
            description="MedX’s original platform was rooted in diagnostics and cervical-screening access, creating a foundation for public-health program support."
          />
        </div>
      </section>

      <section className="section-band py-12 md:py-14">
        <div className="container-medx grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#0a7c5b]">
              In development
            </p>
            <SectionHeader
              eyebrow="Digital operations preview"
              title="Digital workflows for stronger healthcare operations."
              description="MedX is developing tools for supply visibility, forecasting, reporting, and program coordination."
            />
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
              <DatabaseZap className="mt-1 shrink-0 text-[#10a66e]" size={22} />
              <p className="text-sm font-bold leading-7 text-slate-700">
                MedX focuses on reliable healthcare supply, diagnostic readiness,
                screening support, and disciplined digital operations.
              </p>
            </div>
          </div>
          <div>
            <MedxImage
              src={medxImages.digitalHealth.src}
              alt={medxImages.digitalHealth.alt}
              className="aspect-[16/10] rounded-[1.5rem] shadow-[0_24px_70px_rgba(8,27,51,0.12)]"
            />
            <p className="mt-3 text-xs font-bold text-slate-500">
              Conceptual digital operations image.
            </p>
          </div>
        </div>
      </section>

      <section className="corporate-shell py-12 text-white md:py-14">
        <div className="container-medx grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-300">
              Strategy preview
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              A phased healthcare platform strategy.
            </h2>
            <p className="mt-6 leading-8 text-slate-300">
              MedX follows a phased strategy from immediate healthcare access
              needs to stronger local capacity.
            </p>
            <Link href="/strategy" className="btn-primary mt-8">
              Review Strategy
              <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid gap-4">
            {strategicPreview.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 font-bold text-slate-100"
              >
                <ClipboardCheck className="mb-4 text-emerald-300" size={21} />
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
                  {item.label}
                </p>
                <p className="mt-3 leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Request products, services, or partnership discussion."
        description="Choose the path that matches your organization’s need."
        buttonLabel="Request products or services"
        secondaryButtonLabel="Discuss a partnership"
        variant="simple"
      />
    </>
  );
}
