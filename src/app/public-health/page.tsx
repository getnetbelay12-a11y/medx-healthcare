import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import MedxImage from "@/components/MedxImage";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { medxImages } from "@/data/images";
import { pageMetadata } from "@/lib/seo";
import {
  Building2,
  ClipboardCheck,
  FileText,
  FlaskConical,
  Hospital,
  Pill,
  ShieldCheck,
  Store,
  Users,
  Warehouse,
} from "lucide-react";

export const metadata: Metadata = pageMetadata({
  title: "Public Health Focus",
  description:
    "MedX focuses on healthcare access, medicine availability, diagnostic capacity, screening access, supply-chain strengthening, and local capacity.",
  path: "/public-health",
  image: medxImages.cervicalScreening.src,
});

const shortages = [
  "Inaccurate forecasting",
  "Fragmented supply chains",
  "Procurement delays",
  "Budget constraints",
  "Inflation",
  "Weak data systems",
  "Limited skilled personnel",
  "Hospital debts",
  "Limited local manufacturing",
];

const response = [
  "Diagnostics",
  "Pharmaceutical supply",
  "Medical devices",
  "Cancer screening",
  "Supply chain strengthening",
  "Local manufacturing",
  "Digital health systems",
];

const cervicalPriorities = [
  "Screening access",
  "Early detection pathways",
  "Referral readiness",
  "Future cancer-care capacity",
];

const ethiopiaBurdenStats = [
  {
    value: "36.9M",
    label: "women age 15+ at risk",
    source: "ICO/IARC HPV Information Centre, Ethiopia Fact Sheet 2023",
  },
  {
    value: "7,445",
    label: "estimated new cervical cancer cases per year",
    source: "ICO/IARC HPV Information Centre, Ethiopia Fact Sheet 2023",
  },
  {
    value: "5,338",
    label: "estimated cervical cancer deaths per year",
    source: "ICO/IARC HPV Information Centre, Ethiopia Fact Sheet 2023",
  },
  {
    value: "#2",
    label: "most frequent cancer among women in Ethiopia",
    source: "ICO/IARC HPV Information Centre, Ethiopia Fact Sheet 2023",
  },
];

const screeningWorkflow = [
  "Community or facility screening need",
  "Sample collection and patient education",
  "HPV or OncoE6-supported diagnostic workflow",
  "Result reporting and referral coordination",
  "Follow-up, training, and program visibility",
];

const evidenceReferences = [
  {
    title: "Ethiopia cervical cancer guideline",
    detail:
      "Supports alignment with national cervical cancer prevention and control priorities for 2025-2029.",
    icon: FileText,
  },
  {
    title: "ICO/IARC Ethiopia HPV report",
    detail:
      "Provides Ethiopia-specific burden statistics for cervical cancer, HPV-related disease, screening, and vaccination context.",
    icon: Users,
  },
  {
    title: "PAHO HPV screening manual",
    detail:
      "Useful for program design topics such as health-worker training, sample handling, laboratory operations, and result communication.",
    icon: ClipboardCheck,
  },
  {
    title: "Published OncoE6 research",
    detail:
      "Provides peer-reviewed background on HPV E6 oncoprotein detection, triage, self-sampling, and low-resource screening studies.",
    icon: ShieldCheck,
  },
];

const amharaNetwork = [
  { label: "Hospitals", icon: Hospital },
  { label: "Health centers", icon: Building2 },
  { label: "Health posts", icon: Store },
  { label: "Diagnostic centers", icon: FlaskConical },
  { label: "Pharmaceutical wholesalers", icon: Warehouse },
  { label: "Drug shops", icon: Pill },
];

export default function PublicHealthFocusPage() {
  return (
    <>
      <PageHero
        eyebrow="Public Health Focus"
        title="Healthcare access work built around supply, diagnostics, and screening."
        description="MedX focuses on practical public-health execution: medicine availability, diagnostic capacity, screening access, supply-chain strengthening, and local capability."
        highlights={["Medicine availability", "Screening access", "Local capacity"]}
        image={medxImages.cervicalScreening}
        imageLabel="Public-health readiness"
        imageCaption="Screening • referral • follow-up"
      />

      <section className="bg-white py-20">
        <div className="container-medx grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeader
            eyebrow="Ethiopia’s Healthcare Demand"
            title="A large and growing health system needs scalable execution."
            description="Rapid population growth, broad administrative coverage, and expanding healthcare needs create demand for stronger product access, diagnostics, screening, and care infrastructure."
          />
          {/* Healthcare demand image: /public/images/medx/medx-bahir-dar-healthcare.jpg */}
          <MedxImage
            src={medxImages.bahirDar.src}
            alt={medxImages.bahirDar.alt}
            className="aspect-[16/10] rounded-[2rem] shadow-[0_24px_70px_rgba(8,27,51,0.12)]"
          />
        </div>
      </section>

      <section className="medical-pattern py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Amhara Region Health System"
            title="A broad service network requires dependable support systems."
            description="The regional health system includes hospitals, health centers, health posts, private clinics, laboratories, diagnostic centers, pharmaceutical wholesalers, and drug shops."
            centered
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amharaNetwork.map(({ label, icon: Icon }) => (
              <div key={label} className="executive-card flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-[#10a66e]">
                  <Icon size={22} />
                </div>
                <p className="font-black text-[#071b33]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-medx grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Medicine and Supply Shortages"
              title="Availability problems are system problems."
              description="Shortages are driven by forecasting gaps, procurement delays, budget pressure, inflation, weak data systems, personnel constraints, hospital debts, and limited local manufacturing."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {shortages.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-bold text-[#071b33]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          {/* Supply chain image: /public/images/medx/medx-supply-chain-network.jpg */}
          <MedxImage
            src={medxImages.supplyChain.src}
            alt={medxImages.supplyChain.alt}
            className="aspect-[16/10] rounded-[2rem] shadow-[0_24px_70px_rgba(8,27,51,0.12)]"
          />
        </div>
      </section>

      <section className="medical-pattern py-20">
        <div className="container-medx grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Cervical cancer screening image: /public/images/medx/medx-cervical-cancer-screening.jpg */}
          <MedxImage
            src={medxImages.cervicalScreening.src}
            alt={medxImages.cervicalScreening.alt}
            className="aspect-[16/10] rounded-[2rem] shadow-[0_24px_70px_rgba(8,27,51,0.12)]"
          />
          <div>
            <SectionHeader
              eyebrow="Cervical Cancer Burden"
              title="Screening access and early detection need expansion."
              description="Cervical cancer remains a major public health concern in Ethiopia. MedX can support preventive screening, diagnostic pathways, referral readiness, and future cancer care infrastructure without fear-based messaging."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {cervicalPriorities.map((item) => (
                <div key={item} className="metric-tile p-5 pl-7">
                  <p className="text-sm font-black text-[#071b33]">{item}</p>
                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    Program area requiring current field data, partner
                    confirmation, and implementation planning.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Ethiopia-Specific Context"
            title="The screening case is stronger when it starts with local burden."
            description="The attached ICO/IARC Ethiopia materials provide credible public-health context. These statistics should be used as sourced background, not as MedX-owned clinical results."
            centered
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ethiopiaBurdenStats.map((stat) => (
              <article key={stat.label} className="metric-tile p-6 pl-8">
                <p className="text-4xl font-black tracking-tight text-[#071b33]">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-black leading-6 text-slate-700">
                  {stat.label}
                </p>
                <p className="mt-4 text-xs leading-5 text-slate-500">{stat.source}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="medical-pattern py-20">
        <div className="container-medx grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Screening Program Model"
              title="A public-health program needs workflow, not only a test."
              description="The strongest website message is that MedX can help connect education, sample collection, diagnostic workflows, referral readiness, and follow-up visibility."
            />
          </div>

          <div className="grid gap-4">
            {screeningWorkflow.map((step, index) => (
              <article key={step} className="executive-card flex gap-5 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-sm font-black text-[#10a66e]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-black text-[#071b33]">{step}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Use this as the plain-English explanation of how screening support
                    moves from demand to action.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Evidence Base"
            title="Reference materials that can improve the site."
            description="These materials should support short summaries, sourced statistics, and professional program language. They should not be copied directly into the website."
            centered
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {evidenceReferences.map(({ title, detail, icon: Icon }) => (
              <article key={title} className="card-premium p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#10a66e]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-black leading-tight text-[#071b33]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="MedX Response"
            title="Products, services, data, and local capacity working together."
            description="MedX’s response connects supply reliability with diagnostics, screening, devices, digital visibility, and future manufacturing readiness."
            centered
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {response.map((item) => (
              <div key={item} className="card-premium p-6 font-black text-[#071b33]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
