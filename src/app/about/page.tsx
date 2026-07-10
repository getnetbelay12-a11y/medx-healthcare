import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import MedxImage from "@/components/MedxImage";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { medxImages } from "@/data/images";
import {
  Handshake,
  Lightbulb,
  Scale,
  ShieldCheck,
  Target,
  Warehouse,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About MedX",
  description:
    "Learn about MedX Healthcare Solutions, a Bahir Dar-based healthcare corporation founded to address diagnostics, pharmaceuticals, medical devices, cancer screening, and public health gaps in Ethiopia.",
};

const values = [
  { title: "Public Health Impact", icon: Target },
  { title: "Innovation", icon: Lightbulb },
  { title: "Reliability", icon: ShieldCheck },
  { title: "Local Capacity", icon: Warehouse },
  { title: "Partnership", icon: Handshake },
  { title: "Accountability", icon: Scale },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MedX"
        title="About MedX"
        description="An integrated healthcare corporation founded to address critical public health gaps in Ethiopia."
        image={medxImages.bahirDar}
      />

      <section className="bg-white py-20">
        <div className="container-medx grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Company Background"
            title="Founded to close screening, supply, and healthcare access gaps."
            description="MedX Healthcare Solutions was founded in March 2017 as a joint venture between Amhara Regional State and Arbor Vita Corporation from the United States."
          />
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              The company was established with initial capital of 16.5 million
              ETB and is based in Bahir Dar, Ethiopia.
            </p>
            <p>
              MedX was originally formed to address cervical cancer screening
              needs and has expanded toward diagnostics, pharmaceuticals,
              medical devices, cancer care, supply chain solutions, research,
              innovation, digital health, and local manufacturing.
            </p>
          </div>
        </div>
      </section>

      <section className="medical-pattern py-20">
        <div className="container-medx grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="card-premium p-8 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#10a66e]">
              Governance History
            </p>
            <h2 className="mt-4 text-3xl font-black text-[#071b33] md:text-4xl">
              Public health roots with evolving corporate governance.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              MedX was initially administered under Goshe Meda Pipe and Plastic
              Manufacturing Industry, with support from the Amhara Regional
              Health Bureau and Amhara Public Health Institute. Administration
              was later transferred to Nigat Corporate, which became the
              majority shareholder in April 2019.
            </p>
          </div>
          {/* About governance image: /public/images/medx/medx-hospital-partnership.jpg */}
          <MedxImage
            src={medxImages.hospitalPartnership.src}
            alt={medxImages.hospitalPartnership.alt}
            className="aspect-[16/10] rounded-[2rem] shadow-[0_24px_70px_rgba(8,27,51,0.12)]"
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-medx grid gap-6 lg:grid-cols-2">
          <div className="card-premium p-8 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#10a66e]">
              Mission
            </p>
            <h2 className="mt-4 text-3xl font-black text-[#071b33]">
              Strengthen healthcare access through integrated execution.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              MedX’s mission is to expand reliable access to diagnostics,
              pharmaceuticals, medical devices, cancer screening, cancer care,
              and public health solutions through innovation, partnerships, and
              local capacity building.
            </p>
          </div>
          <div className="card-premium p-8 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#10a66e]">
              Vision
            </p>
            <h2 className="mt-4 text-3xl font-black text-[#071b33]">
              A trusted healthcare solutions corporation for Ethiopia and Africa.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              MedX aims to become a dependable platform for healthcare products,
              diagnostics, digital systems, research, manufacturing, and cancer
              care expansion across Ethiopia and African markets.
            </p>
          </div>
        </div>
      </section>

      <section className="medical-pattern py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Values"
            title="Operating principles for a serious healthcare corporation."
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map(({ title, icon: Icon }) => (
              <div key={title} className="card-premium p-7">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-[#10a66e]">
                  <Icon />
                </div>
                <h3 className="text-xl font-black text-[#071b33]">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
