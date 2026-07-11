import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import MedxImage from "@/components/MedxImage";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { company } from "@/data/company";
import { medxImages } from "@/data/images";
import {
  getCurrentPublishedLeadership,
  getHistoricalLeadership,
  shouldShowHistoricalBoard,
} from "@/data/leadership";
import {
  getCurrentPublishedRelationships,
  getHistoricalRelationships,
  shouldShowHistoricalRelationships,
} from "@/data/relationships";
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

const currentLeadership = getCurrentPublishedLeadership();
const historicalLeadership = shouldShowHistoricalBoard()
  ? getHistoricalLeadership()
  : [];
const currentRelationships = getCurrentPublishedRelationships();
const historicalRelationships = shouldShowHistoricalRelationships()
  ? getHistoricalRelationships()
  : [];

function initials(name: string) {
  return name
    .replace(/^Dr\.\s+/, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

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
            description="Historical investor materials from 2020 describe MedX Diagnostic PLC as created in 2017 and based in Bahir Dar, Amhara, Ethiopia."
          />
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              The company was established with historical initial capital of{" "}
              {company.historicalInitialCapital} and historical materials place
              its operations in {company.location}.
            </p>
            <p>
              MedX&apos;s original platform focused on diagnostics, in-vitro
              diagnostic distribution, and cervical-screening access. Broader
              manufacturing, cancer-care, digital, research, and regional
              expansion items are treated as strategic direction unless
              separately confirmed.
            </p>
          </div>
        </div>
      </section>

      <section className="section-band py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Diagnostic Platform Origin"
            title="MedX began with a manufacturing and screening mandate."
            description="Investor materials describe MedX as a diagnostic company focused on medical-device manufacturing, in-vitro diagnostic distribution, and cervical-cancer screening access."
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
              Public health roots with governance details requiring confirmation.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Historical materials reference public-health and corporate
              governance context around MedX&apos;s formation. Current ownership,
              board, executive leadership, and public institutional
              relationships should be confirmed before being presented as
              current facts.
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
            title="Current leadership is shown only after company approval."
            description="MedX leadership records are controlled from a central data file. Historical board references are hidden unless explicitly enabled for review."
            centered
          />
          {currentLeadership.length > 0 ? (
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {currentLeadership.map((profile) => (
                <article key={profile.id} className="card-premium p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071b33] text-lg font-black text-white">
                    {initials(profile.name)}
                  </div>
                  <h3 className="mt-5 text-lg font-black text-[#071b33]">
                    {profile.name}
                  </h3>
                  {profile.currentRole && (
                    <p className="mt-2 text-sm font-bold text-[#10a66e]">
                      {profile.currentRole}
                    </p>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-10 max-w-3xl rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 text-center">
              <p className="text-lg font-black text-[#071b33]">
                Current public leadership profiles are pending confirmation.
              </p>
            </div>
          )}

          {historicalLeadership.length > 0 && (
            <div className="mt-12 border-t border-slate-200 pt-10">
              <h3 className="text-2xl font-black text-[#071b33]">
                Leadership referenced in MedX&apos;s 2020 investor materials
              </h3>
              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                These references are historical and do not describe the
                confirmed current board or executive team.
              </p>
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {historicalLeadership.map((profile) => (
                  <article key={profile.id} className="card-premium p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-lg font-black text-[#071b33]">
                      {initials(profile.name)}
                    </div>
                    <h4 className="mt-5 text-lg font-black text-[#071b33]">
                      {profile.name}
                    </h4>
                    {profile.credentials && (
                      <p className="mt-1 text-sm font-bold text-[#10a66e]">
                        {profile.credentials}
                      </p>
                    )}
                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {profile.historicalRole}. Source year:{" "}
                      {profile.sourceYear}.
                    </p>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section-band py-20">
        <div className="container-medx">
          <SectionHeader
            eyebrow="Relationship Context"
            title="Relationships are published only when verification and approval allow."
            centered
          />
          {currentRelationships.length > 0 ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {currentRelationships.map((relationship) => (
                <article key={relationship.id} className="executive-card p-7">
                  <h3 className="text-2xl font-black text-[#071b33]">
                    {relationship.displayName}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {relationship.publicDescription}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-10 max-w-3xl rounded-[1.5rem] border border-slate-200 bg-white p-8 text-center">
              <p className="text-lg font-black text-[#071b33]">
                Current public relationship records are pending confirmation.
              </p>
            </div>
          )}

          {historicalRelationships.length > 0 && (
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {historicalRelationships.map((relationship) => (
                <article key={relationship.id} className="executive-card p-7">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#10a66e]">
                    Historical reference · {relationship.sourceYear}
                  </p>
                  <h3 className="mt-4 text-2xl font-black text-[#071b33]">
                    {relationship.displayName}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {relationship.publicDescription}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
