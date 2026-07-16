import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Microscope,
  Network,
  PackageCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { medxImages } from "@/data/images";

const heroFacts = [
  { label: "01", value: "Diagnostics and screening access" },
  { label: "02", value: "Pharmaceuticals and medical devices" },
  { label: "03", value: "Digital visibility and supply discipline" },
];

const heroFrames = [
  {
    ...medxImages.aiPlatformHero,
    className: "medx-hero-frame-operations",
    label: "Operations intelligence",
  },
  {
    ...medxImages.aiDiagnosticsFrame,
    className: "medx-hero-frame-diagnostics",
    label: "Diagnostics readiness",
  },
  {
    ...medxImages.aiSupplyFrame,
    className: "medx-hero-frame-supply",
    label: "Supply coordination",
  },
];

export default function HeroSection() {
  return (
    <section className="medx-lab-hero relative overflow-hidden text-white">
      <div className="medx-hero-slideshow" aria-hidden="true">
        {heroFrames.map((frame, index) => (
          <Image
            key={frame.src}
            src={frame.src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={`medx-hero-frame ${frame.className} object-cover object-center`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,19,36,0.96)_0%,rgba(4,19,36,0.82)_34%,rgba(4,19,36,0.32)_68%,rgba(4,19,36,0.12)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,19,36,0.44)_0%,rgba(4,19,36,0.12)_48%,rgba(4,19,36,0.88)_100%)]" />
      <div className="medx-hero-motion" aria-hidden="true">
        <div className="medx-motion-panel medx-motion-panel-lab" />
        <div className="medx-motion-panel medx-motion-panel-supply" />
        <div className="medx-motion-panel medx-motion-panel-map" />
        <div className="medx-scan-line" />
      </div>

      <div className="container-medx relative flex min-h-[calc(92svh-76px)] flex-col justify-center py-14 md:py-16">
        <div className="max-w-4xl">
          <p className="inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/[0.1] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-200 backdrop-blur-md">
            MedX Healthcare Solutions
          </p>

          <h1 className="mt-6 max-w-5xl text-[2.8rem] font-black leading-[0.96] tracking-normal sm:text-6xl xl:text-[5.7rem]">
            Find it. Supply it. Scale healthcare access.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100 md:text-xl">
            A healthcare platform for diagnostics, pharmaceutical supply,
            medical devices, cervical-health support, and AI-assisted operating
            visibility across institutional programs.
          </p>

          <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            <div className="medx-hero-proof">
              <Microscope className="text-emerald-300" size={22} />
              <p className="mt-3 text-sm font-black leading-6">
                Diagnostics-first program support.
              </p>
            </div>
            <div className="medx-hero-proof">
              <PackageCheck className="text-emerald-300" size={22} />
              <p className="mt-3 text-sm font-black leading-6">
                Product supply with operating discipline.
              </p>
            </div>
            <div className="medx-hero-proof">
              <ShieldCheck className="text-emerald-300" size={22} />
              <p className="mt-3 text-sm font-black leading-6">
                Credibility-first public health posture.
              </p>
            </div>
          </div>

          <div className="medx-ai-ticker mt-5" aria-label="AI operating signals">
            <Sparkles size={16} />
            <span>AI-assisted forecasting</span>
            <span>Supply risk signals</span>
            <span>Program readiness view</span>
          </div>

          <div className="medx-frame-indicator mt-4" aria-hidden="true">
            {heroFrames.map((frame, index) => (
              <span key={frame.label}>
                <i style={{ animationDelay: `${index * 2}s` }} />
                {frame.label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="btn-primary">
              Explore solutions
              <ArrowRight size={17} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Request products or relationship
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <div
          aria-label="At a glance"
          className="mt-10 grid max-w-5xl gap-3 text-sm font-bold text-slate-100 md:grid-cols-3"
        >
          <div className="medx-hero-rail md:col-span-2">
            {heroFacts.map((fact) => (
              <div
                key={fact.label}
                className="border-white/10 px-4 py-3 md:border-l first:md:border-l-0"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-200">
                  {fact.label}
                </p>
                <p className="mt-1 leading-6 text-white">{fact.value}</p>
              </div>
            ))}
          </div>
          <div className="medx-hero-signal">
            <Network className="text-emerald-300" size={22} />
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-300">
              AI-assisted visibility
            </p>
            <p className="mt-2 text-sm leading-6 text-white">
              Forecasting, coordination, and reporting layer in development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
