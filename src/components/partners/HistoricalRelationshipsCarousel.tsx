import RelationshipsCarousel, {
  RelationshipCard,
} from "@/components/partners/RelationshipsCarousel";
import {
  getPublishedHistoricalRelationships,
  type Relationship,
} from "@/data/relationships";

export { RelationshipCard as PartnerCard };

type HistoricalRelationshipsCarouselProps = {
  limit?: number;
  compactNotice?: boolean;
  showControls?: boolean;
};

export function getDisplayRelationships(
  relationships: Relationship[],
  limit?: number,
) {
  const sorted = [...relationships].sort(
    (first, second) => first.displayOrder - second.displayOrder,
  );

  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}

export default function HistoricalRelationshipsCarousel({
  limit,
}: HistoricalRelationshipsCarouselProps = {}) {
  const relationships = getDisplayRelationships(
    getPublishedHistoricalRelationships(),
    limit,
  );

  if (relationships.length === 0) {
    return null;
  }

  return <RelationshipsCarousel />;
}
