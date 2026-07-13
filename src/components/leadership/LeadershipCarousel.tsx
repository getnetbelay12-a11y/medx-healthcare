import Image from "next/image";
import AutoCarousel from "@/components/motion/AutoCarousel";
import SectionHeader from "@/components/SectionHeader";
import {
  getPublishedLeadership,
  leadershipStatusLabels,
  type LeadershipMember,
} from "@/data/leadership";

function initialsFor(name: string) {
  return name
    .replace(/\bDr\.\s*/gi, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function statusClass(status: LeadershipMember["status"]) {
  if (status === "current") {
    return "bg-emerald-50 text-[#087a53] ring-emerald-100";
  }

  if (status === "unconfirmed") {
    return "bg-amber-50 text-amber-800 ring-amber-100";
  }

  return "bg-slate-100 text-[#071b33] ring-slate-200";
}

export function LeadershipCard({ member }: { member: LeadershipMember }) {
  return (
    <article className="leadership-card" data-leadership-id={member.id}>
      <div className="flex items-start justify-between gap-3">
        <div className="leadership-portrait">
          {member.portrait ? (
            <Image
              src={member.portrait}
              alt={member.portraitAlt || `${member.name} profile photograph.`}
              width={128}
              height={128}
              loading="lazy"
              className="h-full w-full object-cover"
              style={{ objectPosition: member.objectPosition || "center" }}
            />
          ) : (
            <span aria-hidden="true">{initialsFor(member.name)}</span>
          )}
        </div>
        <span
          className={`rounded-full px-3 py-1 text-[11px] font-black ring-1 ${statusClass(
            member.status,
          )}`}
        >
          {leadershipStatusLabels[member.status]}
        </span>
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-black leading-tight text-[#071b33]">
          {member.name}
        </h3>
        {member.credentials && (
          <p className="mt-1 text-sm font-black text-[#10a66e]">
            {member.credentials}
          </p>
        )}
        <p className="mt-4 text-sm font-black leading-6 text-slate-800">
          {member.role}
        </p>
        {member.organization && (
          <p className="mt-2 text-sm font-bold leading-6 text-slate-500">
            {member.organization}
          </p>
        )}
        {member.shortBio && (
          <p className="mt-4 text-sm leading-7 text-slate-600">
            {member.shortBio}
          </p>
        )}
        {member.sourceYear && (
          <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-slate-500">
            Source year: {member.sourceYear}
          </p>
        )}
      </div>
    </article>
  );
}

export default function LeadershipCarousel() {
  const members = getPublishedLeadership();

  if (members.length === 0) {
    return null;
  }

  return (
    <section id="leadership" className="bg-white py-14 md:py-16">
      <div className="container-medx">
        <SectionHeader
          eyebrow="Leadership and governance"
          title="Leadership and Governance"
          description="A moving view of governance references from MedX’s investor materials, including diagnostics, public health, healthcare delivery, investment, and institutional leadership experience."
          centered
        />
        <p className="mx-auto mt-5 max-w-3xl text-center text-sm font-bold leading-7 text-slate-600">
          Roles marked Historical are source references from MedX’s 2020
          investor materials.
        </p>

        <div className="mt-9">
          <AutoCarousel
            ariaLabel="Leadership and governance carousel"
            direction="left"
            duration={64}
            itemGap={18}
            className="leadership-carousel"
            showControls={false}
          >
            {members.map((member) => (
              <LeadershipCard key={member.id} member={member} />
            ))}
          </AutoCarousel>
        </div>
      </div>
    </section>
  );
}
