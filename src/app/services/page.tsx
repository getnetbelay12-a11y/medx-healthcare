import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import MedxImage from "@/components/MedxImage";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { medxImages } from "@/data/images";
import { getPublishedServices } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Services",
  description:
    "MedX service areas across pharmaceutical supply, medical devices, diagnostics, cervical-screening support, and strategic health-system capabilities.",
  path: "/services",
  image: medxImages.aiSupplyFrame.src,
});

const currentServices = getPublishedServices("current");
const roadmapServices = getPublishedServices().filter(
  (service) => service.status !== "current",
);

const statusLabels = {
  "in-development": "In development",
  "strategic-roadmap": "Strategic roadmap",
  historical: "Historical foundation",
  current: "Current service",
} as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Products, diagnostics, and program support for healthcare institutions."
        description="MedX organizes pharmaceutical supply, medical devices, diagnostics, and cervical-screening support into practical service lanes built for institutional healthcare needs."
        highlights={["Supply requests", "Diagnostic support", "Screening programs"]}
        image={medxImages.aiSupplyFrame}
        imageLabel="Service platform"
        imageCaption="Products • diagnostics • facility readiness"
      />

      <section className="bg-white py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Current services"
            title="Institutional healthcare support across core supply and diagnostic needs."
            description="MedX’s current public service areas focus on practical facility requirements: medicines, devices, diagnostic support, and cervical-screening program capacity."
            centered
          />
          <div className="mt-12 grid gap-8">
            {currentServices.map((service, index) => (
              <article
                key={service.id}
                className={`grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <MedxImage
                    src={service.image.src}
                    alt={service.alt}
                    className="aspect-[16/10] rounded-[1.5rem] shadow-[0_20px_60px_rgba(8,27,51,0.1)]"
                  />
                  {service.image.caption && (
                    <p className="mt-3 text-xs font-bold text-slate-500">
                      {service.image.caption}
                    </p>
                  )}
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#10a66e]">
                    Current capability
                  </p>
                  <h2 className="mt-3 text-3xl font-black text-[#071b33] md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    {service.summary}
                  </p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold text-slate-700"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Strategic capabilities and roadmap"
            title="A roadmap for stronger health-system capacity."
            description="These capabilities support MedX’s longer-term direction across supply-chain visibility, digital systems, manufacturing readiness, cancer-care planning, and regional growth."
            centered
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {roadmapServices.map((service) => (
              <article key={service.id} className="executive-card p-7">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#10a66e]">
                  {statusLabels[service.status]}
                </p>
                <h3 className="mt-4 text-2xl font-black text-[#071b33]">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {service.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-white px-3 py-2 text-xs font-black text-slate-600 ring-1 ring-slate-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
