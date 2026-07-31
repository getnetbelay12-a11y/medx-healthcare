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

const heroFacts = [
  { label: "Origin", value: "Diagnostics and cervical screening" },
  { label: "Base", value: "Bahir Dar, Amhara, Ethiopia" },
  { label: "Focus", value: "Institutional healthcare access" },
];

export default function HeroSection() {
  return (
    <section className="medx-lab-hero relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,19,36,0.98)_0%,rgba(4,19,36,0.92)_44%,rgba(4,19,36,0.66)_100%)]" />

      <div className="container-medx relative grid min-h-[calc(88svh-76px)] gap-10 py-14 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-4xl">
          <p className="inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/[0.1] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-200 backdrop-blur-md">
            MedX Healthcare Solutions
          </p>

          <h1 className="mt-6 max-w-5xl text-[2.5rem] font-black leading-[0.98] tracking-normal sm:text-5xl xl:text-[5.2rem]">
            Diagnostics-rooted healthcare access for Ethiopia.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100 md:text-xl">
            MedX supports healthcare institutions with pharmaceutical supply,
            medical devices, diagnostic solutions, and cervical-health program
            support, grounded in its Bahir Dar diagnostics history.
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
                Conservative public-health communication.
              </p>
            </div>
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

        <div className="medx-hero-visual">
          <div className="medx-hero-document">
            <div className="medx-document-brand">
              <Image
                src="/images/medx/MedxLogo1.png"
                alt="MedX Healthcare Solutions"
                width={280}
                height={224}
                priority
              />
              <div>
                <p>MedX Diagnostic, PLC</p>
                <span>Bahir Dar, Amhara, Ethiopia</span>
              </div>
            </div>

            <div className="medx-document-lines" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>

            <div className="medx-document-grid">
              <div>
                <span>Created</span>
                <strong>2017</strong>
              </div>
              <div>
                <span>Historical origin</span>
                <strong>Diagnostics and IVD distribution</strong>
              </div>
              <div>
                <span>Current site focus</span>
                <strong>Healthcare supply, diagnostics, screening support</strong>
              </div>
            </div>
          </div>
          <div className="medx-hero-source-note">
            <div>
              <ClipboardCheck size={20} />
              <p>Source-grounded profile</p>
            </div>
            <span>
              Built from MedX presentation materials, website-source emails,
              and public OncoE6 research context. Claims stay conservative until
              current company details are confirmed.
            </span>
          </div>
        </div>

        <div aria-label="At a glance" className="grid gap-3 text-sm font-bold text-slate-100 lg:col-span-2 lg:grid-cols-[1fr_18rem]">
          <div className="medx-hero-rail">
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
            <Building2 className="text-emerald-300" size={22} />
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-300">
              Current public posture
            </p>
            <p className="mt-2 text-sm leading-6 text-white">
              Present current services clearly and label historical or roadmap
              items without overclaiming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
