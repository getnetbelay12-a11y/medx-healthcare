import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  MapPinned,
  ShieldCheck,
} from "lucide-react";
import MedxImage from "@/components/MedxImage";
import { medxImages } from "@/data/images";

const trustSignals = [
  "Diagnostics and laboratories",
  "Pharmaceutical supply",
  "Cancer screening platform",
];

export default function HeroSection() {
  return (
    <section className="corporate-shell relative overflow-hidden text-white">
      <div className="absolute inset-x-0 top-0 z-10 hidden border-b border-white/10 bg-[#041324]/50 backdrop-blur md:block">
        <div className="container-medx flex flex-wrap items-center justify-between gap-3 py-3 text-[11px] font-black uppercase tracking-[0.16em] text-slate-300">
          <span>MedX Healthcare Solutions</span>
          <span className="text-emerald-300">
            Bahir Dar • Ethiopia • Africa-ready platform
          </span>
        </div>
      </div>

      <div className="container-medx relative grid min-h-[calc(100vh-76px)] items-center gap-12 pb-14 pt-14 md:pt-24 lg:grid-cols-[0.96fr_1.04fr] lg:pb-20 lg:pt-28">
        <div>
          <p className="inline-flex rounded-full border border-emerald-300/25 bg-emerald-300/[0.09] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-200">
            Corporate healthcare platform
          </p>

          <h1 className="mt-6 max-w-5xl text-[2.55rem] font-black leading-[1.03] tracking-normal sm:text-6xl xl:text-7xl">
            Advancing Access to Diagnostics, Pharmaceuticals, and Cancer Care
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            MedX is building an integrated healthcare platform to strengthen
            diagnostics, pharmaceutical supply, medical devices, cancer
            screening, and healthcare innovation across Ethiopia and Africa.
          </p>

          <MedxImage
            src={medxImages.hero.src}
            alt={medxImages.hero.alt}
            priority
            className="image-frame mt-7 aspect-[16/10] rounded-[1.6rem] lg:hidden"
            imageClassName="object-center"
            sizes="100vw"
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="btn-primary">
              Explore Services
              <ArrowRight size={17} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Partner With MedX
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-8 hidden gap-3 text-sm font-bold text-slate-200 lg:grid lg:grid-cols-3">
            {trustSignals.map((item) => (
              <p
                key={item}
                className="trust-strip flex min-h-14 items-center gap-2 rounded-2xl px-4"
              >
                <CheckCircle2
                  className="shrink-0 text-emerald-300"
                  size={18}
                />
                {item}
              </p>
            ))}
          </div>

        </div>

        {/* Homepage hero image: /public/images/medx/medx-hero-healthcare-africa.jpg */}
        <div className="relative hidden lg:block">
          <div className="absolute -left-5 top-8 z-10 hidden rounded-2xl border border-white/15 bg-[#061a31]/88 p-4 shadow-2xl backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                <ShieldCheck size={21} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Trust focus
                </p>
                <p className="mt-1 text-sm font-black">Public-private scale</p>
              </div>
            </div>
          </div>

          <MedxImage
            src={medxImages.hero.src}
            alt={medxImages.hero.alt}
            priority
            className="image-frame aspect-[16/12] rounded-[2rem]"
            imageClassName="object-center"
            sizes="(min-width: 1024px) 48vw, 100vw"
          />

          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-[#061a31]/92 p-5 shadow-2xl backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <MapPinned className="shrink-0 text-[#d7a84f]" size={20} />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                    Base
                  </p>
                  <p className="text-sm font-black">Bahir Dar, Ethiopia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Factory className="shrink-0 text-emerald-300" size={20} />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                    Direction
                  </p>
                  <p className="text-sm font-black">Supply + local capacity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
