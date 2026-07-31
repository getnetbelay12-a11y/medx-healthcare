import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
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

export default function HeroSection() {
  return (
    <section className="medx-home-hero relative overflow-hidden text-[#071b33]">
      <div className="medx-home-hero-bg" aria-hidden="true" />

      <div className="container-medx relative grid min-h-[calc(86svh-76px)] gap-10 py-14 md:py-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="min-w-0 max-w-[calc(100vw-4rem)] sm:max-w-4xl">
          <p className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#0a7c5b] shadow-sm">
            MedX Healthcare Solutions
          </p>

          <h1 className="mt-6 max-w-5xl text-[2.45rem] font-black leading-[1.03] tracking-normal sm:text-5xl xl:text-[4.65rem]">
            Healthcare diagnostics and supply access for Ethiopian institutions.
          </h1>

          <p className="mt-6 max-w-[calc(100vw-4rem)] text-base leading-8 text-slate-600 sm:max-w-2xl md:text-xl">
            MedX supports healthcare institutions with pharmaceutical supply,
            medical devices, laboratory equipment, diagnostic solutions, medical
            consumables, and cervical-health program support, grounded in its
            Bahir Dar diagnostics history.
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

        <div className="medx-hero-showcase">
          <div className="medx-hero-image-stage">
            <HeroImageRotator />
            <div className="medx-hero-image-caption">
              <span>MedX operating focus</span>
              <strong>Diagnostics • supply • public-health support</strong>
            </div>
          </div>

          <div className="medx-home-proof-panel">
            <div>
              <Image
                src="/images/medx/MedxLogo1.png"
                alt="MedX Healthcare Solutions"
                width={140}
                height={112}
                priority
              />
              <div>
                <p>MedX Diagnostic, PLC</p>
                <span>Bahir Dar, Amhara, Ethiopia</span>
              </div>
            </div>
            <ul>
              <li>
                <ClipboardCheck size={17} />
                Quote-first intake for serious supply needs
              </li>
              <li>
                <ClipboardCheck size={17} />
                Product catalog and Phase 2 commerce roadmap
              </li>
            </ul>
          </div>
        </div>

        <div aria-label="At a glance" className="grid gap-3 text-sm font-bold text-slate-700 lg:col-span-2 lg:grid-cols-[1fr_18rem]">
          <div className="medx-hero-rail">
            {heroFacts.map((fact) => (
              <div
                key={fact.label}
                className="border-slate-200 px-4 py-3 md:border-l first:md:border-l-0"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#0a7c5b]">
                  {fact.label}
                </p>
                <p className="mt-1 leading-6 text-[#071b33]">{fact.value}</p>
              </div>
            ))}
          </div>
          <div className="medx-hero-signal">
            <Building2 className="text-emerald-300" size={22} />
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0a7c5b]">
              Professional public profile
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Current services, historical context, and Phase 2 commerce plans
              are separated clearly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
