import Link from "next/link";
import { ArrowRight, Microscope, ShieldCheck } from "lucide-react";
import MedxImage from "@/components/MedxImage";
import { medxImages } from "@/data/images";

const heroFacts = [
  { label: "Diagnostics", value: "Testing readiness and program support" },
  { label: "Access", value: "Supply, devices, and clinical operations" },
  { label: "Women's health", value: "Cervical-screening origin" },
  { label: "Platform", value: "Digital visibility and local capacity" },
];

export default function HeroSection() {
  return (
    <section className="medx-lab-hero relative overflow-hidden text-white">
      <div className="container-medx relative grid min-h-[calc(100vh-76px)] items-center gap-10 py-12 md:py-16 lg:grid-cols-[0.94fr_1.06fr]">
        <div>
          <p className="inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/[0.1] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-200">
            Diagnostics, supply, and healthcare access
          </p>

          <h1 className="mt-6 max-w-5xl text-[2.75rem] font-black leading-[0.98] tracking-normal sm:text-6xl xl:text-[5.4rem]">
            Life-saving healthcare infrastructure for Ethiopia and beyond.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            MedX brings diagnostic access, pharmaceutical supply, medical
            devices, cervical-health support, and digital operating discipline
            into one healthcare platform.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="trust-strip rounded-2xl p-4">
              <Microscope className="text-emerald-300" size={22} />
              <p className="mt-3 text-sm font-black leading-6">
                Built around diagnostics and early cancer-screening access.
              </p>
            </div>
            <div className="trust-strip rounded-2xl p-4">
              <ShieldCheck className="text-emerald-300" size={22} />
              <p className="mt-3 text-sm font-black leading-6">
                Focused on institutional reliability, not marketing claims.
              </p>
            </div>
          </div>

          <MedxImage
            src={medxImages.hero.src}
            alt={medxImages.hero.alt}
            priority
            className="image-frame mt-7 aspect-[16/10] rounded-[1.35rem] lg:hidden"
            imageClassName="object-center"
            sizes="100vw"
          />
          <p className="mt-3 text-xs font-bold text-slate-300 lg:hidden">
            Conceptual healthcare collaboration image.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="btn-primary">
              Explore products
              <ArrowRight size={17} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Request a discussion
              <ArrowRight size={17} />
            </Link>
          </div>

          <div
            aria-label="At a glance"
            className="mt-8 grid gap-3 text-sm font-bold text-slate-200 sm:grid-cols-2 lg:grid-cols-4"
          >
            {heroFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-white/10 bg-white/[0.065] px-4 py-3"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-200">
                  {fact.label}
                </p>
                <p className="mt-1 leading-6 text-white">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Homepage hero image: /public/images/medx/medx-hero-healthcare-africa.jpg */}
        <div className="relative hidden lg:block">
          <div className="absolute -left-6 top-8 z-10 rounded-2xl border border-white/15 bg-white/95 p-5 text-[#071b33] shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0a7c5b]">
              Platform focus
            </p>
            <p className="mt-2 max-w-52 text-2xl font-black leading-tight">
              Diagnostics to local capacity.
            </p>
          </div>
          <MedxImage
            src={medxImages.hero.src}
            alt={medxImages.hero.alt}
            priority
            className="image-frame aspect-[15/12] rounded-[1.6rem]"
            imageClassName="object-center"
            sizes="(min-width: 1024px) 48vw, 100vw"
          />
          <p className="mt-3 text-xs font-bold text-slate-300">
            Conceptual healthcare collaboration image.
          </p>
        </div>
      </div>
    </section>
  );
}
