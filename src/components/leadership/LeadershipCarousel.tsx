import Image from "next/image";
import AutoCarousel from "@/components/motion/AutoCarousel";
import SectionHeader from "@/components/SectionHeader";
import {
  getPublishedLeadership,
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

export function LeadershipCard({ member }: { member: LeadershipMember }) {
  return (
    <article className="leadership-card" data-leadership-id={member.id}>
      <div className="flex justify-center">
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
      </div>

      <div className="mt-5 text-center">
        <h3 className="text-lg font-black leading-tight text-[#071b33]">
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
          description="A clean view of MedX leadership and governance profiles for public review."
          centered
        />

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
