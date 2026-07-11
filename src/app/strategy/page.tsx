import type { Metadata } from "next";
import AIFutureSection from "@/components/AIFutureSection";
import CTASection from "@/components/CTASection";
import MedxImage from "@/components/MedxImage";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { medxImages } from "@/data/images";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Strategy and Vision",
  description:
    "MedX's 15-year strategy for integrated, self-reliant, innovation-driven healthcare solutions across Ethiopia and Africa.",
};

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

export default function StrategyPage() {
  return (
    <>
      <PageHero
        eyebrow="Strategy and Vision"
        title="Strategy and Vision"
        description="A 15-year corporate strategy for integrated, self-reliant, and innovation-driven healthcare solutions."
        image={medxImages.digitalHealth}
      />

      <section className="bg-white py-20">
        <div className="container-medx grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeader
            eyebrow="15-Year Strategic Direction"
            title="A long-term platform for urgent and future healthcare needs."
            description="MedX’s strategy is designed to address immediate supply and diagnostic gaps while building future capacity in cancer care, local production, digital systems, research, and regional growth."
          />
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
              healthcare categories.
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
              title="No serious healthcare platform scales alone."
              description="MedX’s partnership model should align public priorities, facility needs, research capacity, investment, and technology."
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
