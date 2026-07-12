import Image from "next/image";
import ContinuousCarousel from "@/components/motion/ContinuousCarousel";
import {
  getPublishedHistoricalRelationships,
  type Relationship,
  type RelationshipType,
} from "@/data/relationships";

const relationshipLabels: Record<RelationshipType, string> = {
  "historical-investor": "Historical investor reference",
  "historical-joint-venture": "Historical joint-venture reference",
  "historical-technology-partner": "Historical technology reference",
  "historical-health-institution": "Historical institution reference",
  "historical-government-reference": "Historical public-health reference",
  "current-partner": "Current partner",
  "current-client": "Current client",
  "current-supplier": "Current supplier",
};

function initialsFor(name: string) {
  return name
    .replace(/[/&]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function PartnerCard({ relationship }: { relationship: Relationship }) {
  const canShowLogo =
    relationship.logo &&
    relationship.isApprovedForPublicUse &&
    relationship.isPublished;

  return (
    <article className="partner-reference-card" data-partner-id={relationship.id}>
      <div className="partner-reference-mark" aria-hidden="true">
        {canShowLogo ? (
          <Image
            src={relationship.logo || ""}
            alt=""
            width={180}
            height={90}
            loading="lazy"
            className="max-h-16 w-auto object-contain"
          />
        ) : (
          initialsFor(relationship.displayName)
        )}
      </div>
      <div>
        <h3 className="text-base font-black leading-tight text-[#071b33]">
          {relationship.displayName}
        </h3>
        <p className="mt-2 text-sm font-bold leading-5 text-[#10a66e]">
          {relationshipLabels[relationship.relationshipType]}
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Source reference: {relationship.sourceYear || "Historical"}
        </p>
      </div>
    </article>
  );
}

export default function HistoricalPartnersCarousel() {
  const relationships = getPublishedHistoricalRelationships();

  if (relationships.length === 0) {
    return null;
  }

  return (
    <div className="historical-partners-panel">
      <ContinuousCarousel
        ariaLabel="Historical partner and institution references"
        direction="left"
        speed="slow"
        itemGap={18}
        pauseOnHover
        pauseOnFocus
        showControls
      >
        {relationships.map((relationship) => (
          <PartnerCard key={relationship.id} relationship={relationship} />
        ))}
      </ContinuousCarousel>

      <div className="historical-notice">
        Historical slide-derived organization references. Confirm current
        relationship status and public logo permission before presenting these
        organizations as current partners.
      </div>
    </div>
  );
}
