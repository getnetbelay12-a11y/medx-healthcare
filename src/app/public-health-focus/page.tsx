import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import MedxImage from "@/components/MedxImage";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { medxImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Public Health Focus",
  description:
    "MedX addresses healthcare access, medicine supply, diagnostics, cervical cancer screening, and cancer-care challenges in Ethiopia.",
};

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

export default function PublicHealthFocusPage() {
  return (
    <>
      <PageHero
        eyebrow="Public Health Focus"
        title="Public Health Focus"
        description="Addressing critical healthcare access, supply chain, diagnostics, and cancer-care challenges in Ethiopia."
        image={medxImages.africaMap}
      />

      <section className="bg-white py-20">
        <div className="container-medx grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeader
            eyebrow="Ethiopia’s Healthcare Demand"
            title="A large and growing health system needs scalable execution."
            description="Rapid population growth, broad administrative coverage, and expanding healthcare needs create demand for stronger product access, diagnostics, screening, and care infrastructure."
          />
          {/* Healthcare demand image: /public/images/medx/medx-africa-health-map.jpg */}
          <MedxImage
            src={medxImages.africaMap.src}
            alt={medxImages.africaMap.alt}
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
              description="Cervical cancer remains a major public health concern. MedX can support preventive screening, diagnostic pathways, referral readiness, and future cancer care infrastructure without fear-based messaging."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="MedX Response"
            title="A serious response connects products, services, data, and local capacity."
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
