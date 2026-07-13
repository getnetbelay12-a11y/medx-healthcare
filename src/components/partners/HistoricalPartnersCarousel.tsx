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

function canShowRelationshipLogo(relationship: Relationship) {
  return Boolean(
    relationship.logo &&
      relationship.isApprovedForPublicUse &&
      relationship.isPublished,
  );
}

function getDisplayRelationships(relationships: Relationship[]) {
  const prioritized = [...relationships].sort((first, second) => {
    return Number(canShowRelationshipLogo(second)) - Number(canShowRelationshipLogo(first));
  });

  return prioritized.filter((relationship, index, list) => {
    return list.findIndex((item) => item.displayName === relationship.displayName) === index;
  });
}

function PartnerCard({ relationship }: { relationship: Relationship }) {
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

function PartnerLogoTile({ relationship }: { relationship: Relationship }) {
  const canShowLogo = canShowRelationshipLogo(relationship);

  return (
    <div className="partner-motion-logo-tile" data-logo-id={relationship.id}>
      {canShowLogo ? (
        <Image
          src={relationship.logo || ""}
          alt=""
          width={180}
          height={90}
          loading="lazy"
          className="max-h-14 w-auto max-w-full object-contain"
        />
      ) : (
        <span>{relationship.displayName}</span>
      )}
    </div>
  );
}

export default function HistoricalPartnersCarousel() {
  const relationships = getDisplayRelationships(getPublishedHistoricalRelationships());
  const motionRelationships = [...relationships, ...relationships];

  if (relationships.length === 0) {
    return null;
  }

  return (
    <div className="historical-partners-panel">
      <ContinuousCarousel
        ariaLabel="Historical partner and institution references"
        direction="left"
        speed="fast"
        itemGap={22}
        pauseOnHover
        pauseOnFocus
        showControls={false}
      >
        {relationships.map((relationship) => (
          <PartnerCard key={relationship.id} relationship={relationship} />
        ))}
      </ContinuousCarousel>

      <div
        className="partner-logo-motion-rail"
        aria-label="Moving historical logo reference rail"
      >
        <div className="partner-logo-motion-track" aria-hidden="true">
          {motionRelationships.map((relationship, index) => (
            <PartnerLogoTile
              key={`${relationship.id}-${index}`}
              relationship={relationship}
            />
          ))}
        </div>
      </div>

      <div className="historical-notice">
        Historical slide-derived organization references. Confirm current status
        and public logo permission before presenting any organization as a current
        partner.
      </div>
    </div>
  );
}
