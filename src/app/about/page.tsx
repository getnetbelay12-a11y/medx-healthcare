import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import HistoricalBoardCarousel from "@/components/leadership/HistoricalBoardCarousel";
import MedxImage from "@/components/MedxImage";
import PageHero from "@/components/PageHero";
import HistoricalPartnersCarousel from "@/components/partners/HistoricalPartnersCarousel";
import SectionHeader from "@/components/SectionHeader";
import { company } from "@/data/company";
import { medxImages } from "@/data/images";
import { pageMetadata } from "@/lib/seo";
import {
  Building2,
  Handshake,
  Lightbulb,
  Microscope,
  Scale,
  ShieldCheck,
  Target,
  Warehouse,
} from "lucide-react";

export const metadata: Metadata = pageMetadata({
  title: "About MedX",
  description:
    "Learn about MedX Healthcare Solutions, its Bahir Dar operating context, historical origin, mission, governance, and public-health focus.",
  path: "/about",
  image: medxImages.bahirDar.src,
});

const values = [
  { title: "Public Health Impact", icon: Target },
  { title: "Innovation", icon: Lightbulb },
  { title: "Reliability", icon: ShieldCheck },
  { title: "Local Capacity", icon: Warehouse },
  { title: "Partnership", icon: Handshake },
  { title: "Accountability", icon: Scale },
];

const platformFacts = [
  {
    title: "Bahir Dar operating base",
    description:
      "Presentation materials identify MedX’s diagnostic manufacturing activity in a newly established and fully furnished facility in Bahir Dar.",
    icon: Building2,
  },
  {
    title: "Diagnostics origin",
    description:
      "The platform was built around manufacturing medical devices and distributing in-vitro diagnostic technologies.",
    icon: Microscope,
  },
  {
    title: "Global technology partner",
    description:
      "Arbor Vita Corporation brought proteomic diagnostics expertise, patent-protected technology, and international diagnostic experience.",
    icon: Handshake,
  },
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
            description="MedX was established in 2017 in Bahir Dar, Amhara, Ethiopia, with historical roots in diagnostic manufacturing, in-vitro diagnostic distribution, and cervical-screening access."
          />
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              The company was established with historical initial capital of{" "}
              {company.historicalInitialCapital} and historical materials place
              its operations in {company.location}.
            </p>
            <p>
              MedX&apos;s original platform focused on diagnostics, in-vitro
              diagnostic distribution, and cervical-screening access. The company
              is now positioned as a broader healthcare solutions platform serving
              supply, diagnostics, medical devices, public-health programs, and
              future local capacity.
            </p>
          </div>
        </div>
      </section>

      <section className="section-band py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Diagnostic Platform Origin"
            title="A diagnostic origin with a broader healthcare platform direction."
            description="Investor materials describe an early platform focused on medical-device manufacturing, in-vitro diagnostic distribution, and cervical-cancer screening access."
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {platformFacts.map(({ title, description, icon: Icon }) => (
              <div key={title} className="executive-card p-7">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-[#10a66e]">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-black text-[#071b33]">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </div>
            ))}
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
              Public health roots with public-private execution experience.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Historical materials reference public-health and corporate
              governance context around MedX&apos;s formation, including Ethiopian
              institutional participation and a U.S. diagnostics technology
              connection through Arbor Vita Corporation.
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
              {company.mission}
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
              {company.vision}
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

      <section className="bg-white py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Leadership and Governance"
            title="Board references from MedX’s 2020 investor materials."
            description="The following portraits and names are historical references from the 2020 deck and are not presented as the confirmed current MedX board."
            centered
          />
          <div className="mt-12">
            <HistoricalBoardCarousel />
          </div>
        </div>
      </section>

      <section className="section-band py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Relationship Context"
            title="Institutions referenced in MedX’s historical ecosystem."
            description="These references come from historical MedX materials and are shown as context, not as confirmed current endorsements."
            centered
          />
          <HistoricalPartnersCarousel />
        </div>
      </section>

      <CTASection />
    </>
  );
}
