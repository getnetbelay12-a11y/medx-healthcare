import type { Metadata } from "next";
import AIFutureSection from "@/components/AIFutureSection";
import CTASection from "@/components/CTASection";
import MedxImage from "@/components/MedxImage";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { medxImages } from "@/data/images";
import { pageMetadata } from "@/lib/seo";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = pageMetadata({
  title: "Strategy and Vision",
  description:
    "MedX strategy across near-term supply, diagnostics, and screening support; medium-term digital and supply-chain capacity; and long-term local manufacturing and regional expansion.",
  path: "/strategy",
  image: medxImages.aiRegionalFrame.src,
});

const model = [
  "Pharmaceutical manufacturing",
  "Diagnostics",
  "Medical devices",
  "Cancer care",
  "Supply chain services",
  "Social health insurance support",
  "Research and innovation",
];

const partnerships = [
  "Government agencies",
  "Hospitals",
  "Academic institutions",
  "Research institutions",
  "International stakeholders",
  "Investors",
  "Technology partners",
  "Diagnostic technology companies",
];

const revenue = [
  "Pharmaceutical manufacturing",
  "Medical device supply",
  "Diagnostic services",
  "Insurance programs",
  "Research partnerships",
  "Regional expansion",
];

const directionMilestones = [
  "Stabilize institutional supply and diagnostic access",
  "Build local manufacturing and import-substitution capacity",
  "Scale digital health visibility and operating discipline",
  "Expand partnerships across Ethiopia and African markets",
];

const arborVitaSignals = [
  "Silicon Valley diagnostics partner",
  "Proteomic diagnostics experience",
  "Footprint referenced in 35+ countries",
  "Manufacturing capability referenced in historical materials",
  "Patent-protected diagnostic technology",
  "Grant and investment-backed development history",
];

const evidenceReferences = [
  {
    title: "Feasibility of E6 oncoprotein testing",
    detail:
      "Clinical-specimen study referenced for cervical precancer and cancer detection using OncoE6 technology.",
  },
  {
    title: "Lower-cost molecular screening",
    detail:
      "Evaluation work comparing novel HPV-related screening approaches in rural health settings.",
  },
  {
    title: "Long-term risk prediction",
    detail:
      "Prospective cohort evidence referenced for E6 oncoprotein risk stratification over long-term follow-up.",
  },
  {
    title: "HPV 16/18 E6 performance",
    detail:
      "Evidence referenced for detecting HPV16/18-related high-grade lesions in limited-screening contexts.",
  },
];

export default function StrategyPage() {
  return (
    <>
      <PageHero
        eyebrow="Strategy and Vision"
        title="A phased healthcare platform strategy for Ethiopia and regional scale."
        description="MedX’s strategy connects immediate supply and diagnostic needs with digital visibility, local capacity, manufacturing readiness, and regional healthcare access."
        highlights={["Near-term execution", "Digital visibility", "Regional scale"]}
        image={medxImages.aiRegionalFrame}
        imageLabel="Strategic roadmap"
        imageCaption="Supply • data • regional access"
      />

      <section className="bg-white py-20">
        <div className="container-medx grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="15-Year Strategic Direction"
              title="A long-term platform for urgent and future healthcare needs."
              description="MedX’s strategy addresses immediate supply and diagnostic gaps while building future capacity in cancer care, local production, digital systems, research, and regional growth."
            />
            <MedxImage
              src={medxImages.supplyChain.src}
              alt={medxImages.supplyChain.alt}
              className="mt-8 aspect-[16/9] rounded-[1.5rem] shadow-[0_20px_55px_rgba(8,27,51,0.1)]"
            />
            <p className="mt-3 text-xs font-bold text-slate-500">
              Conceptual healthcare supply-chain image.
            </p>
          </div>
          <div className="executive-card p-7 md:p-9">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#10a66e]">
              Strategic roadmap
            </p>
            <div className="mt-7 grid gap-4">
              {directionMilestones.map((item, index) => (
                <div
                  key={item}
                  className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:grid-cols-[auto_1fr]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#071b33] text-sm font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p className="text-lg font-black text-[#071b33]">{item}</p>
                    <p className="mt-2 flex items-center gap-2 text-sm font-bold text-slate-600">
                      <CheckCircle2 className="text-[#10a66e]" size={17} />
                      Built for phased execution, investment readiness, and public-health impact.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="medical-pattern py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Integrated Healthcare Model"
            title="Vertical and horizontal integration across the healthcare value chain."
            centered
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {model.map((item) => (
              <div key={item} className="card-premium p-6 font-black text-[#071b33]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-medx grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Technology Partnership Foundation"
            title="A historical diagnostics platform linked to Arbor Vita’s global experience."
            description="The 2020 investor presentation positions Arbor Vita Corporation as MedX’s U.S. diagnostics technology partner, bringing proteomic diagnostics experience, intellectual property, and global implementation exposure at that time."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {arborVitaSignals.map((item) => (
              <div
                key={item}
                className="executive-card p-5 text-sm font-black text-[#071b33]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Evidence and Partnership References"
            title="Diagnostics strategy backed by clinical evidence and institutional collaboration."
            description="The 2020 investor presentation references published OncoE6-related studies and institutional collaboration around cervical-screening technology."
            centered
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {evidenceReferences.map((item) => (
              <div key={item.title} className="executive-card p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#10a66e]">
                  Evidence
                </p>
                <h3 className="mt-4 text-lg font-black text-[#071b33]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-medx grid gap-6 lg:grid-cols-2">
          <div className="card-premium p-8 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#10a66e]">
              Local Manufacturing
            </p>
            <h2 className="mt-4 text-3xl font-black text-[#071b33]">
              Import substitution and market reliability.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              MedX aims to reduce dependency on imported health products by
              developing local production and improving availability in critical
              healthcare categories. Early investor materials referenced a
              commitment to manufacture 10 million cervical screening tests over
              five years, demonstrating the scale of the original diagnostics
              ambition.
            </p>
          </div>
          <div className="card-premium p-8 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#10a66e]">
              Digital Transformation
            </p>
            <h2 className="mt-4 text-3xl font-black text-[#071b33]">
              Better data, faster decisions, stronger transparency.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Smart technologies, automation, data accuracy, real-time
              decision-making, transparency, and service quality are core to the
              operating model.
            </p>
          </div>
        </div>
      </section>

      <AIFutureSection />

      <section className="medical-pattern py-20">
        <div className="container-medx grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Research and innovation image: /public/images/medx/medx-research-innovation.jpg */}
          <MedxImage
            src={medxImages.research.src}
            alt={medxImages.research.alt}
            className="aspect-[16/10] rounded-[2rem] shadow-[0_24px_70px_rgba(8,27,51,0.12)]"
          />
          <SectionHeader
            eyebrow="Research and Evidence-Based Innovation"
            title="Translate scientific findings into practical healthcare solutions."
            description="MedX can connect research institutions, healthcare programs, and operational delivery to turn evidence into usable products, services, and public health systems."
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-medx grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Strategic Partnerships"
              title="Partnerships built for institutional scale."
              description="MedX’s partnership model can align public priorities, facility needs, research capacity, investment, and technology."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {partnerships.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Financial Sustainability"
              title="Diversified revenue protects long-term execution."
              description="The strategy requires revenue sources that support reinvestment, operating resilience, and regional competitiveness."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {revenue.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#061a31] py-20 text-white">
        <div className="container-medx grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-300">
              Africa Expansion
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Serve Ethiopia, East Africa, and broader African markets.
            </h2>
            <p className="mt-6 leading-8 text-slate-300">
              MedX’s long-term goal is to build a healthcare solutions platform
              that starts with Ethiopian priorities and expands into regional
              markets where diagnostics, supply reliability, and local capacity
              are strategic needs.
            </p>
          </div>
          {/* Africa expansion image: /public/images/medx/medx-africa-health-map.jpg */}
          <MedxImage
            src={medxImages.africaMap.src}
            alt={medxImages.africaMap.alt}
            className="aspect-[16/10] rounded-[2rem] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.26)]"
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
