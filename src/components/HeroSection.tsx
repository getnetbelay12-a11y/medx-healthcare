import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import MedxImage from "@/components/MedxImage";
import { medxImages } from "@/data/images";

const trustSignals = ["Diagnostics", "Pharmaceuticals", "Cancer Care"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#061a31] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(16,166,110,0.22),transparent_30%),radial-gradient(circle_at_10%_88%,rgba(34,211,238,0.12),transparent_28%)]" />

      <div className="container-medx relative grid items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
        <div>
          <p className="inline-flex rounded-full border border-emerald-300/25 bg-emerald-300/[0.08] px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-emerald-200">
            Integrated healthcare platform
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.035em] sm:text-6xl xl:text-7xl">
            Advancing Access to Diagnostics, Pharmaceuticals, and Cancer Care
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            MedX is building an integrated healthcare platform to strengthen
            diagnostics, pharmaceutical supply, medical devices, cancer
            screening, and healthcare innovation across Ethiopia and Africa.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="btn-primary">
              Explore Our Services
              <ArrowRight size={17} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Partner With MedX
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-8 grid gap-3 text-sm font-bold text-slate-200 sm:grid-cols-3">
            {trustSignals.map((item) => (
              <p key={item} className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-300" size={18} />
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Homepage hero image: /public/images/medx/medx-hero-healthcare-africa.jpg */}
        <div className="relative">
          <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full border border-emerald-300/25" />
          <MedxImage
            src={medxImages.hero.src}
            alt={medxImages.hero.alt}
            priority
            className="aspect-[16/11] rounded-[2rem] border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.32)]"
            imageClassName="object-center"
            sizes="(min-width: 1024px) 48vw, 100vw"
          />
          <div className="absolute bottom-5 left-5 max-w-[85%] rounded-2xl border border-white/15 bg-[#061a31]/90 p-4 shadow-2xl backdrop-blur">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d7a84f]">
              Platform focus
            </p>
            <p className="mt-1 text-sm font-black text-white">
              Supply reliability • Screening • Innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
