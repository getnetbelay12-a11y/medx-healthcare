import Image from "next/image";
import AutoCarousel from "@/components/motion/AutoCarousel";
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
  "historical-research-reference": "Historical research reference",
  "current-partner": "Current partner",
  "current-client": "Current client",
  "current-supplier": "Current supplier",
};

function canShowRelationshipLogo(relationship: Relationship) {
  return Boolean(
    relationship.logo &&
      relationship.isApprovedForPublicUse &&
      relationship.isPublished,
  );
}

export function PartnerCard({ relationship }: { relationship: Relationship }) {
  const canShowLogo = canShowRelationshipLogo(relationship);

  return (
    <article className="partner-reference-card" data-partner-id={relationship.id}>
      <div className={canShowLogo ? "partner-reference-logo" : "partner-reference-mark"} aria-hidden="true">
        {canShowLogo ? (
          <Image
            src={relationship.logo || ""}
            alt=""
            width={240}
            height={120}
            loading="lazy"
            className="max-h-20 w-auto max-w-full object-contain"
          />
        ) : (
          <span className="partner-reference-wordmark">
            {relationship.displayName}
          </span>
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

type HistoricalRelationshipsCarouselProps = {
  limit?: number;
  compactNotice?: boolean;
  showControls?: boolean;
};

export function getDisplayRelationships(relationships: Relationship[], limit?: number) {
  const prioritized = [...relationships].sort((first, second) => {
    return Number(canShowRelationshipLogo(second)) - Number(canShowRelationshipLogo(first));
  });

  const unique = prioritized.filter((relationship, index, list) => {
    return list.findIndex((item) => item.displayName === relationship.displayName) === index;
  });

  return typeof limit === "number" ? unique.slice(0, limit) : unique;
}

export default function HistoricalRelationshipsCarousel({
  limit,
  compactNotice = false,
  showControls = true,
}: HistoricalRelationshipsCarouselProps = {}) {
  const relationships = getDisplayRelationships(
    getPublishedHistoricalRelationships(),
    limit,
  );

  if (relationships.length === 0) {
    return null;
  }

  return (
    <div className="historical-partners-panel">
      <AutoCarousel
        ariaLabel="Historical partner and institution references"
        direction="right"
        duration={62}
        itemGap={22}
        pauseOnHover
        pauseOnFocus
        showControls={showControls}
      >
        {relationships.map((relationship) => (
          <PartnerCard key={relationship.id} relationship={relationship} />
        ))}
      </AutoCarousel>

      <div className="historical-notice">
        {compactNotice
          ? "Historical organization references from earlier MedX materials."
          : "These organizations are referenced in historical MedX materials. Their inclusion does not confirm a current partnership, endorsement, or active commercial relationship."}
      </div>
    </div>
  );
}
