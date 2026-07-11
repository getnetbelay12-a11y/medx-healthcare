import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  ClipboardCheck,
  DatabaseZap,
  History,
  PackageCheck,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import MedxImage from "@/components/MedxImage";
import SectionHeader from "@/components/SectionHeader";
import { medxImages } from "@/data/images";
import { getHistoricalLeadership } from "@/data/leadership";
import { getHistoricalRelationships } from "@/data/relationships";
import { getPublishedServices } from "@/data/services";
import { stats } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "MedX Healthcare Solutions",
  description:
    "MedX supports healthcare access through pharmaceutical supply, medical devices, diagnostics, cervical-screening support, and strategic health-system capacity.",
  path: "/",
  image: medxImages.hero.src,
});

const currentServices = getPublishedServices("current");
const historicalRelationships = getHistoricalRelationships().filter(
  (relationship) => relationship.logo,
);
const historicalBoard = getHistoricalLeadership().filter((member) => member.image);

const historicalFoundation = [
  "Created in 2017 according to historical investor materials",
  "Original platform focused on diagnostics and cervical-screening access",
  "Bahir Dar operating context referenced in 2020 materials",
];

const strategicPreview = [
  "Near-term supply, diagnostics, and screening support",
  "Medium-term data visibility and supply-chain discipline",
  "Long-term local capacity and regional healthcare platform direction",
];

function repeated<T>(items: T[]) {
  return [...items, ...items];
}

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="section-band py-10">
        <div className="container-medx grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="metric-tile p-5 pl-7">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#10a66e]">
                {stat.label}
              </p>
              <p className="mt-3 text-xl font-black text-[#071b33]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-medx grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Verified company context"
              title="A Bahir Dar healthcare platform with diagnostic and screening roots."
              description="MedX public copy is intentionally conservative: current service areas are separated from roadmap capabilities, and historical investor-material facts are labeled as historical."
            />
            <div className="mt-7 grid gap-3">
              {historicalFoundation.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold text-slate-700"
                >
                  <History className="mt-0.5 shrink-0 text-[#10a66e]" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <MedxImage
              src={medxImages.bahirDar.src}
              alt={medxImages.bahirDar.alt}
              className="aspect-[16/10] rounded-[1.5rem] shadow-[0_24px_70px_rgba(8,27,51,0.12)]"
            />
            <p className="mt-3 text-xs font-bold text-slate-500">
              Conceptual Bahir Dar healthcare context image.
            </p>
          </div>
        </div>
      </section>

      <section className="medical-pattern py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Current services"
            title="Four current service areas, not a mixed list of future ambitions."
            description="Strategic roadmap items are handled separately on the Services and Strategy pages."
            centered
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {currentServices.map((service) => (
              <article key={service.id} className="card-premium p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#10a66e]">
                  <PackageCheck size={23} />
                </div>
                <h3 className="mt-5 text-xl font-black text-[#071b33]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.summary}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-primary">
              Explore Services
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-medx grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <MedxImage
              src={medxImages.cervicalScreening.src}
              alt={medxImages.cervicalScreening.alt}
              className="aspect-[16/10] rounded-[1.5rem] shadow-[0_24px_70px_rgba(8,27,51,0.12)]"
            />
            <p className="mt-3 text-xs font-bold text-slate-500">
              Conceptual cervical-health education image.
            </p>
          </div>
          <SectionHeader
            eyebrow="Cervical-health origin"
            title="A historical flagship focus in cervical-screening access."
            description="MedX's original platform was connected to cervical-screening access and in-vitro diagnostics. Current product rights, approvals, and program status should be confirmed before publishing specific operating claims."
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20">
        <div className="ai-motion-field" aria-hidden="true">
          <span className="ai-motion-node ai-motion-node-a" />
          <span className="ai-motion-node ai-motion-node-b" />
          <span className="ai-motion-node ai-motion-node-c" />
        </div>
        <div className="container-medx relative">
          <SectionHeader
            eyebrow="Historical ecosystem"
            title="Partners and institutions referenced in MedX's 2020 materials."
            description="These logos are presented as historical source references from the 2020 MedX materials. They do not imply current endorsement, active partnership, or logo-use approval."
            centered
          />

          <div className="partner-logo-stage mt-12">
            <div className="partner-logo-marquee">
              {repeated(historicalRelationships).map((relationship, index) => (
                <div
                  key={`${relationship.id}-${index}`}
                  className="partner-logo-tile"
                >
                  {relationship.logo && (
                    <Image
                      src={relationship.logo}
                      alt={`${relationship.displayName} historical reference logo`}
                      width={280}
                      height={130}
                      className="h-16 w-auto object-contain md:h-20"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-amber-200 bg-amber-50 p-5 text-center text-sm font-bold leading-7 text-amber-950">
            Historical slide-derived logo references. Confirm current
            relationship status and public logo permission before presenting
            these organizations as current partners.
          </div>
        </div>
      </section>

      <section className="section-band py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Historical board"
            title="Board of Directors referenced in MedX's 2020 investor materials."
            description="The portraits and names below are historical references from the 2020 deck. They are not presented as the confirmed current MedX board."
            centered
          />

          <div className="board-motion-stage mt-12">
            <div className="board-motion-track">
              {repeated(historicalBoard).map((member, index) => (
                <article key={`${member.id}-${index}`} className="board-motion-card">
                  {member.image && (
                    <Image
                      src={member.image}
                      alt={`${member.name}, historical 2020 board reference`}
                      width={180}
                      height={180}
                      className="mx-auto h-28 w-28 rounded-full object-cover ring-4 ring-white shadow-lg"
                    />
                  )}
                  <h3 className="mt-4 text-center text-base font-black text-[#071b33]">
                    {member.name}
                  </h3>
                  {member.credentials && (
                    <p className="mt-1 text-center text-xs font-bold text-[#10a66e]">
                      {member.credentials}
                    </p>
                  )}
                  <p className="mt-3 text-center text-xs leading-5 text-slate-600">
                    Historical 2020 reference
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-medx grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Digital operations preview"
              title="Better visibility for supply, diagnostics, and public-health coordination."
              description="Digital health and advanced analytics are presented as roadmap capabilities that depend on disciplined data, governance, and implementation readiness."
            />
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <DatabaseZap className="mt-1 shrink-0 text-[#10a66e]" size={22} />
              <p className="text-sm font-bold leading-7 text-slate-700">
                MedX can use operational dashboards and forecasting workflows to
                support transparent decisions once data systems are confirmed.
              </p>
            </div>
          </div>
          <div>
            <MedxImage
              src={medxImages.digitalHealth.src}
              alt={medxImages.digitalHealth.alt}
              className="aspect-[16/10] rounded-[1.5rem] shadow-[0_24px_70px_rgba(8,27,51,0.12)]"
            />
            <p className="mt-3 text-xs font-bold text-slate-500">
              Conceptual digital operations image.
            </p>
          </div>
        </div>
      </section>

      <section className="corporate-shell py-20 text-white">
        <div className="container-medx grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-300">
              Strategy preview
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              A phased healthcare platform strategy.
            </h2>
            <p className="mt-6 leading-8 text-slate-300">
              The strategy page separates near-term, medium-term, and long-term
              priorities so public readers can distinguish current execution
              from future ambition.
            </p>
            <Link href="/strategy" className="btn-primary mt-8">
              Review Strategy
              <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid gap-4">
            {strategicPreview.map((item) => (
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
      </section>

      <CTASection
        title="Partner with MedX to strengthen healthcare access."
        buttonLabel="Contact MedX"
      />
    </>
  );
}
