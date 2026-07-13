import Image from "next/image";
import AutoCarousel from "@/components/motion/AutoCarousel";
import {
  getPublishedHistoricalLeadership,
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

export function BoardCard({ member }: { member: LeadershipMember }) {
  const portrait = member.portrait;
  const canShowPortrait = portrait && member.isPublished;

  return (
    <article className="board-reference-card" data-board-id={member.id}>
      <div className="board-reference-portrait">
        {canShowPortrait ? (
          <Image
            src={portrait}
            alt={
              member.portraitAlt ||
              `${member.name}, historical 2020 board reference`
            }
            width={150}
            height={150}
            loading="lazy"
            className="h-full w-full rounded-full object-cover"
            style={{ objectPosition: member.objectPosition || "center" }}
          />
        ) : (
          <span aria-hidden="true">{initialsFor(member.name)}</span>
        )}
      </div>
      <h3 className="mt-5 text-center text-lg font-black leading-tight text-[#071b33]">
        {member.name}
      </h3>
      {member.credentials && (
        <p className="mt-2 text-center text-sm font-black text-[#10a66e]">
          {member.credentials}
        </p>
      )}
      {member.role && (
        <p className="mt-4 text-center text-sm leading-6 text-slate-600">
          {member.role}
        </p>
      )}
      <p className="mt-3 text-center text-sm font-bold text-slate-500">
        {member.sourceYear ? `Historical ${member.sourceYear} reference` : "Historical reference"}
      </p>
    </article>
  );
}

export default function HistoricalBoardCarousel() {
  const members = getPublishedHistoricalLeadership();

  if (members.length === 0) {
    return null;
  }

  return (
    <AutoCarousel
      ariaLabel="Historical board of directors references"
      direction="left"
      duration={56}
      itemGap={18}
      pauseOnHover
      pauseOnFocus
      showControls
      className="board-reference-carousel"
    >
      {members.map((member) => (
        <BoardCard key={member.id} member={member} />
      ))}
    </AutoCarousel>
  );
}
