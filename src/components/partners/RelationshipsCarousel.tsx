"use client";

import Image from "next/image";
import { useMemo } from "react";
import AutoCarousel from "@/components/motion/AutoCarousel";
import SectionHeader from "@/components/SectionHeader";
import {
  getPublishedRelationships,
  type Relationship,
} from "@/data/relationships";

function initialsFor(name: string) {
  return name
    .split(/[\s/&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function RelationshipCard({ relationship }: { relationship: Relationship }) {
  return (
    <article className="relationship-card" data-relationship-id={relationship.id}>
      <div className="relationship-logo-wrap">
        {relationship.logo ? (
          <Image
            src={relationship.logo}
            alt={relationship.logoAlt || `${relationship.organization} logo.`}
            width={220}
            height={104}
            loading="lazy"
            className="max-h-20 w-auto max-w-full object-contain"
          />
        ) : (
          <span aria-hidden="true" className="relationship-initials">
            {initialsFor(relationship.organization)}
          </span>
        )}
      </div>

      <h3 className="mt-5 text-center text-lg font-black leading-tight text-[#071b33]">
        {relationship.organization}
      </h3>
    </article>
  );
}

export default function RelationshipsCarousel() {
  const relationships = useMemo(() => getPublishedRelationships(), []);

  if (relationships.length === 0) {
    return null;
  }

  return (
    <section id="relationships" className="section-band py-14 md:py-16">
      <div className="container-medx">
        <SectionHeader
          eyebrow="Relationship context"
          title="Relationships and Historical Context"
          description="A moving view of organizations referenced in MedX materials and partner context. Each item should be treated as relationship context unless MedX separately confirms a current formal partnership."
          centered
        />

        <div className="mt-10">
          <AutoCarousel
            ariaLabel="Relationships and historical context carousel"
            direction="right"
            duration={58}
            itemGap={18}
            className="relationships-carousel"
            showControls={false}
          >
            {relationships.map((relationship) => (
              <RelationshipCard
                key={relationship.id}
                relationship={relationship}
              />
            ))}
          </AutoCarousel>
        </div>

        <p className="mx-auto mt-6 max-w-4xl rounded-2xl border border-amber-200/80 bg-amber-50/80 px-5 py-4 text-center text-sm font-bold leading-7 text-amber-950">
          Partner names and logos should be published only when MedX has the
          right to show them publicly. Source references provide context and
          should not be read as a current endorsement unless separately
          confirmed.
        </p>
      </div>
    </section>
  );
}
