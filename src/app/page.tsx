import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Microscope,
  Network,
  ShieldCheck,
} from "lucide-react";
import AIFutureSection from "@/components/AIFutureSection";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import MedxImage from "@/components/MedxImage";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { medxImages } from "@/data/images";
import { stats } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import {
  Activity,
  FlaskConical,
  HeartPulse,
  LineChart,
  Pill,
  Stethoscope,
} from "lucide-react";

export const metadata: Metadata = pageMetadata({
  title: "MedX Healthcare Solutions",
  description:
    "MedX supports healthcare access through pharmaceutical supply, medical devices, diagnostics, cervical-screening support, and strategic health-system capacity.",
  path: "/",
  image: medxImages.hero.src,
});

const homepageServices = [
  {
    title: "Pharmaceuticals",
    description:
      "Reliable supply and distribution of essential medicines and healthcare products.",
    icon: Pill,
  },
  {
    title: "Medical Devices",
    description:
      "Medical equipment and device access for hospitals, clinics, and health programs.",
    icon: Stethoscope,
  },
  {
    title: "Diagnostics",
    description:
      "Laboratory and diagnostic solutions that improve early detection and treatment decisions.",
    icon: FlaskConical,
  },
  {
    title: "Cervical Cancer Screening",
    description:
      "Screening support, education, and future care pathways for women’s health.",
    icon: HeartPulse,
  },
  {
    title: "Cancer Care Expansion",
    description:
      "Long-term development of specialty cancer care infrastructure and referral capacity.",
    icon: Activity,
  },
  {
    title: "Digital Health Systems",
    description:
      "Data, dashboards, automation, and transparency for better healthcare operations.",
    icon: LineChart,
  },
];

const challenges = [
  "Medicine shortages and procurement delays",
  "Fragmented supply chains and weak forecasting",
  "Limited screening access and referral capacity",
  "Local manufacturing and import substitution gap",
];

const visionItems = [
  "Integrated healthcare system",
  "Import substitution and local production",
  "Digital transformation and data visibility",
  "Research, partnerships, and African expansion",
];

const operatingPriorities = [
  {
    title: "Reliable access",
    description: "Structured supply, diagnostics, and device pathways for institutions.",
    icon: ShieldCheck,
  },
  {
    title: "Local capacity",
    description: "Import substitution, manufacturing readiness, and skilled execution.",
    icon: Factory,
  },
  {
    title: "System visibility",
    description: "Data, forecasting, dashboards, and transparent service delivery.",
    icon: Network,
  },
];

const diagnosticFoundation = [
  {
    label: "Facility foundation",
    value: "~6,000 sq ft",
    detail: "Facility scale referenced in 2020 investor materials.",
  },
  {
    label: "Cervical screening",
    value: "Program roots",
    detail: "Historical focus on cervical-screening access.",
  },
  {
    label: "Market context",
    value: "Ethiopia",
    detail: "National opportunity requiring current field confirmation.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <ScrollReveal>
        <section className="section-band py-12">
          <div className="container-medx grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((stat) => (
              <div key={stat.label} className="metric-tile p-6 pl-8">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#10a66e]">
                  {stat.label}
                </p>
                <p className="mt-3 text-2xl font-black text-[#071b33]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-white py-24">
          <div className="container-medx grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Diagnostic Manufacturing Foundation"
                title="Built on a cervical-cancer screening platform with local manufacturing ambition."
                description="MedX’s investor materials position the company as a Bahir Dar diagnostic manufacturer and distributor created to support cervical-cancer screening and broader African diagnostic needs."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {diagnosticFoundation.map((item) => (
                  <div key={item.label} className="metric-tile p-6 pl-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#10a66e]">
                      {item.label}
                    </p>
                    <p className="mt-3 text-2xl font-black text-[#071b33]">
                      {item.value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="executive-card p-8 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-[#10a66e]">
                <Microscope size={27} />
              </div>
              <h3 className="mt-6 text-3xl font-black text-[#071b33]">
                From screening access to integrated diagnostics.
              </h3>
              <p className="mt-5 leading-8 text-slate-600">
                The original MedX platform focused on manufacturing and
                distributing in-vitro diagnostic devices, including cervical
                cancer screening technology, with a longer-term path toward a
                broader diagnostics portfolio for Ethiopia and Africa.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-white py-24">
          <div className="container-medx grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            {/* About preview image: /public/images/medx/medx-bahir-dar-healthcare.jpg */}
            <MedxImage
              src={medxImages.bahirDar.src}
              alt={medxImages.bahirDar.alt}
              className="aspect-[16/10] rounded-[2rem] shadow-[0_24px_70px_rgba(8,27,51,0.12)]"
            />
            <div>
              <SectionHeader
                eyebrow="About MedX"
                title="A healthcare corporation built from Bahir Dar for national relevance."
                description="Created in 2017, MedX has historical roots in a joint venture involving Arbor Vita Corporation and an Ethiopian endowment organization, with 16.5 million ETB referenced in investor materials."
              />
              <p className="mt-6 leading-8 text-slate-600">
                MedX was created to address cervical cancer screening gaps and
                has expanded its mission toward diagnostics, pharmaceutical
                supply, medical devices, cancer care, digital systems, research,
                and local healthcare manufacturing.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {operatingPriorities.map(({ title, description, icon: Icon }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <Icon className="text-[#10a66e]" size={24} />
                    <p className="mt-4 text-sm font-black text-[#071b33]">
                      {title}
                    </p>
                    <p className="mt-2 text-xs leading-6 text-slate-600">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary mt-7">
                Learn About MedX
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-band py-24">
          <div className="container-medx">
            <SectionHeader
              eyebrow="Services Overview"
              title="Integrated capabilities for government, hospitals, investors, and partners."
              description="MedX combines product access, clinical infrastructure, public health delivery, and digital operating systems."
              centered
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {homepageServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-white py-24">
          <div className="container-medx grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Public Health Challenge"
                title="Healthcare access depends on stronger supply, screening, and local capacity."
                description="Ethiopia’s health system faces medicine shortages, fragmented supply chains, limited screening access, and a manufacturing gap that weakens reliability."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {challenges.map((item) => (
                  <div
                    key={item}
                    className="executive-card flex gap-3 p-4 font-bold text-[#071b33]"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-[#10a66e]"
                      size={18}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {/* Public health challenge image: /public/images/medx/medx-supply-chain-network.jpg */}
            <MedxImage
              src={medxImages.supplyChain.src}
              alt={medxImages.supplyChain.alt}
              className="aspect-[16/10] rounded-[2rem] shadow-[0_24px_70px_rgba(8,27,51,0.12)]"
            />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="corporate-shell py-24 text-white">
          <div className="container-medx grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            {/* Strategic vision image: /public/images/medx/medx-digital-health-dashboard.jpg */}
            <MedxImage
              src={medxImages.digitalHealth.src}
              alt={medxImages.digitalHealth.alt}
              className="aspect-[16/10] rounded-[2rem] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.26)]"
            />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-300">
                Strategic Vision
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                A 15-year platform for self-reliant healthcare solutions.
              </h2>
              <p className="mt-6 leading-8 text-slate-300">
                MedX’s strategy connects local production, supply chain
                strengthening, diagnostic capacity, cancer care, digital
                transformation, research, partnerships, and regional expansion.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {visionItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 font-bold text-slate-100"
                  >
                    <ClipboardCheck className="mb-4 text-emerald-300" size={21} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <AIFutureSection />
      </ScrollReveal>

      <CTASection
        title="Partner with MedX to strengthen healthcare access."
        buttonLabel="Contact MedX"
      />
    </>
  );
}
