import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import MedxImage from "@/components/MedxImage";
import PageHero from "@/components/PageHero";
import { medxImages } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Services",
  description:
    "MedX service areas across pharmaceutical supply, medical devices, diagnostics, cervical-screening support, and strategic health-system capabilities.",
  path: "/services",
  image: medxImages.diagnostics.src,
});

const serviceSections = [
  {
    title: "Pharmaceutical Supply and Distribution",
    image: medxImages.pharmaceuticalSupply,
    body: "MedX supports reliable access to essential medicines and healthcare products through structured supply and distribution capabilities.",
    bullets: ["Essential medicine access", "Institutional supply support", "Inventory and distribution discipline"],
  },
  {
    title: "Medical Devices and Equipment",
    image: medxImages.medicalDevices,
    body: "MedX helps facilities access medical devices, equipment, and support materials needed for safe and consistent care delivery.",
    bullets: ["Device sourcing", "Equipment distribution", "Facility readiness support"],
  },
  {
    title: "Diagnostic Solutions",
    image: medxImages.diagnostics,
    body: "MedX strengthens diagnostic capacity through laboratory solutions, in-vitro diagnostic distribution, testing support, and screening workflows for better clinical decisions.",
    bullets: ["In-vitro diagnostics", "Laboratory systems", "Early detection support"],
  },
  {
    title: "Cervical Cancer Screening",
    image: medxImages.cervicalScreening,
    body: "MedX’s historical screening platform centers on practical cervical-screening access, program education, and referral coordination.",
    bullets: ["Program support", "Screening education", "Referral pathway support"],
  },
  {
    title: "Cancer Care Expansion",
    image: medxImages.cancerCare,
    body: "MedX’s long-term roadmap includes future cancer-care infrastructure that can expand prevention, detection, referral, and specialty-care capacity.",
    bullets: ["Strategic roadmap", "Specialty center planning", "Cancer program partnerships"],
  },
  {
    title: "Healthcare Supply Chain Solutions",
    image: medxImages.supplyChain,
    body: "MedX addresses forecasting, procurement, distribution, and data visibility challenges that affect product availability.",
    bullets: ["Forecasting support", "Logistics visibility", "Stockout reduction"],
  },
  {
    title: "Research and Innovation",
    image: medxImages.research,
    body: "MedX can connect research, evidence, and applied innovation to practical healthcare solutions for Ethiopia and regional markets.",
    bullets: ["In development", "Innovation translation", "Local capacity building"],
  },
  {
    title: "Digital Health Systems",
    image: medxImages.digitalHealth,
    body: "MedX’s digital roadmap supports transparency, data accuracy, automation, and better decision-making across healthcare operations.",
    bullets: ["Strategic roadmap", "Data accuracy", "Operational visibility"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Our Services"
        description="Integrated healthcare solutions across pharmaceuticals, diagnostics, medical devices, cancer screening, and digital health systems."
        image={medxImages.diagnostics}
      />

      <section className="bg-white py-20">
        <div className="container-medx grid gap-10">
          {serviceSections.map((service, index) => (
            <article
              key={service.title}
              className={`card-premium grid gap-8 overflow-hidden p-5 lg:grid-cols-2 lg:items-center ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* Service image: /public/images/medx/[filename listed in src/data/images.ts] */}
              <MedxImage
                src={service.image.src}
                alt={service.image.alt}
                className="aspect-[16/10] rounded-[1.4rem]"
              />
              <div className="p-3 md:p-6">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#10a66e]">
                  Service 0{index + 1}
                </p>
                <h2 className="mt-3 text-3xl font-black text-[#071b33] md:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-5 leading-8 text-slate-600">{service.body}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-2xl bg-slate-50 p-4 text-sm font-bold text-slate-700"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
