import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Microscope,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import HeroImageRotator from "@/components/HeroImageRotator";

const heroFacts = [
  { label: "Origin", value: "Diagnostics and cervical screening" },
  { label: "Base", value: "Bahir Dar, Amhara, Ethiopia" },
  { label: "Focus", value: "Institutional healthcare access" },
];

const heroSignals = [
  "Pharmaceutical supply",
  "Medical devices",
  "Diagnostics and lab support",
  "Cervical-health programs",
];

export default function HeroSection() {
  return (
    <section className="medx-home-hero medx-home-hero-full relative overflow-hidden text-white">
      <div className="medx-hero-full-motion">
        <HeroImageRotator />
      </div>
      <div className="medx-home-hero-bg" aria-hidden="true" />

      <div className="container-medx relative grid min-h-[calc(100svh-76px)] gap-10 py-14 md:py-16 lg:items-center">
        <div className="medx-hero-copy min-w-0 max-w-[calc(100vw-4rem)] sm:max-w-5xl">
          <p className="inline-flex rounded-full border border-white/25 bg-white/12 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-100 shadow-sm backdrop-blur-md">
            MedX Healthcare Solutions
          </p>

          <h1 className="mt-6 max-w-5xl text-[2.45rem] font-black leading-[1.03] tracking-normal text-white sm:text-5xl xl:text-[4.85rem]">
            Healthcare supply, diagnostics, and program support for Ethiopian institutions.
          </h1>

          <p className="mt-6 max-w-[calc(100vw-4rem)] text-base leading-8 text-slate-100 sm:max-w-2xl md:text-xl">
            MedX Healthcare Solutions helps facilities and public-health teams
            turn product, diagnostic, equipment, and screening-program needs into
            clear requests that can be reviewed and coordinated responsibly.
          </p>

          <div className="mt-7 flex max-w-[calc(100vw-4rem)] flex-col gap-3 sm:max-w-none sm:flex-row">
            <Link href="/products" className="btn-primary w-full sm:w-auto">
              View product catalog
              <ArrowRight size={17} />
            </Link>
            <Link href="/contact" className="btn-outline medx-light-outline w-full sm:w-auto">
              Request quotation
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="medx-hero-scope mt-6" aria-label="Current MedX service scope">
            {heroSignals.map((signal) => (
              <span key={signal}>
                <CheckCircle2 size={15} />
                {signal}
              </span>
            ))}
          </div>

          <div className="mt-7 grid max-w-[calc(100vw-4rem)] gap-3 sm:max-w-3xl sm:grid-cols-3">
            <div className="medx-hero-proof">
              <Microscope className="text-emerald-300" size={22} />
              <p className="mt-3 text-sm font-black leading-6">
                Diagnostics and laboratory support.
              </p>
            </div>
            <div className="medx-hero-proof">
              <PackageCheck className="text-emerald-300" size={22} />
              <p className="mt-3 text-sm font-black leading-6">
                Catalog-led supply requests.
              </p>
            </div>
            <div className="medx-hero-proof">
              <ShieldCheck className="text-emerald-300" size={22} />
              <p className="mt-3 text-sm font-black leading-6">
                Clear institutional follow-up.
              </p>
            </div>
          </div>
        </div>

        <div aria-label="At a glance" className="grid gap-2.5 text-sm font-bold text-slate-100 lg:grid-cols-[1fr_16rem]">
          <div className="medx-hero-rail">
            {heroFacts.map((fact, index) => (
              <div
                key={fact.label}
                className="medx-hero-fact"
              >
                <span className="medx-hero-fact-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="medx-hero-fact-label text-emerald-200">
                    {fact.label}
                  </p>
                  <p className="medx-hero-fact-value text-white">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="medx-hero-signal">
            <Building2 className="text-emerald-300" size={22} />
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
              Professional public profile
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              Current services, historical context, and Phase 2 commerce plans
              are separated clearly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
