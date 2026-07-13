import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MedxImage from "@/components/MedxImage";
import { medxImages } from "@/data/images";

const heroFacts = [
  "Diagnostics access",
  "Pharmaceutical supply",
  "Medical devices",
  "Cervical-health support",
];

export default function HeroSection() {
  return (
    <section className="corporate-shell relative overflow-hidden text-white">
      <div className="container-medx relative grid min-h-[calc(100vh-76px)] items-center gap-10 py-14 md:py-16 lg:grid-cols-[0.95fr_1.05fr]">
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
          <p className="mt-3 text-xs font-bold text-slate-300 lg:hidden">
            Conceptual healthcare collaboration image.
          </p>

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

          <div
            aria-label="At a glance"
            className="mt-8 grid gap-3 text-sm font-bold text-slate-200 sm:grid-cols-2 lg:grid-cols-4"
          >
            {heroFacts.map((fact) => (
              <p key={fact} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3">
                {fact}
              </p>
            ))}
          </div>
        </div>

        {/* Homepage hero image: /public/images/medx/medx-hero-healthcare-africa.jpg */}
        <div className="relative hidden lg:block">
          <MedxImage
            src={medxImages.hero.src}
            alt={medxImages.hero.alt}
            priority
            className="image-frame aspect-[16/11] rounded-[2rem]"
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
