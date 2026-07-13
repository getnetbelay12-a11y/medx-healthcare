import Image from "next/image";
import ContinuousCarousel from "@/components/motion/ContinuousCarousel";
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

function BoardCard({ member }: { member: LeadershipMember }) {
  const portrait = member.portrait || member.image;
  const canShowPortrait =
    portrait && member.isApprovedForPublicUse && member.isPublished;

  return (
    <article className="board-reference-card" data-board-id={member.id}>
      <div className="board-reference-portrait">
        {canShowPortrait ? (
          <Image
            src={portrait}
            alt={member.alt || `${member.name}, historical 2020 board reference`}
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
      {member.historicalRole && (
        <p className="mt-4 text-center text-sm leading-6 text-slate-600">
          {member.historicalRole}
        </p>
      )}
      <p className="mt-3 text-center text-sm font-bold text-slate-500">
        Historical 2020 reference
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
    <ContinuousCarousel
      ariaLabel="Historical board of directors references"
      direction="right"
      speed="medium"
      itemGap={18}
      pauseOnHover={false}
      pauseOnFocus={false}
      pauseWhenOffscreen={false}
      showControls={false}
      className="board-reference-carousel"
    >
      {members.map((member) => (
        <BoardCard key={member.id} member={member} />
      ))}
    </ContinuousCarousel>
  );
}
