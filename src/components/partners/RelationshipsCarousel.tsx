"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import AutoCarousel from "@/components/motion/AutoCarousel";
import SectionHeader from "@/components/SectionHeader";
import {
  getPublishedRelationships,
  relationshipStatusLabels,
  type Relationship,
  type RelationshipStatus,
} from "@/data/relationships";

type RelationshipFilter = "all" | RelationshipStatus;

const filterLabels: Record<RelationshipFilter, string> = {
  all: "All",
  current: "Current",
  historical: "Historical",
  unconfirmed: "Status being updated",
};

function initialsFor(name: string) {
  return name
    .split(/[\s/&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function statusClass(status: RelationshipStatus) {
  if (status === "current") {
    return "bg-emerald-50 text-[#087a53] ring-emerald-100";
  }

  if (status === "unconfirmed") {
    return "bg-amber-50 text-amber-800 ring-amber-100";
  }

  return "bg-slate-100 text-[#071b33] ring-slate-200";
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

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full px-3 py-1 text-[11px] font-black ring-1 ${statusClass(
            relationship.status,
          )}`}
        >
          {relationshipStatusLabels[relationship.status]}
        </span>
        {relationship.sourceYear && (
          <span className="rounded-full bg-white px-3 py-1 text-[11px] font-black text-slate-500 ring-1 ring-slate-200">
            {relationship.sourceYear}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-black leading-tight text-[#071b33]">
        {relationship.organization}
      </h3>
      <p className="mt-3 text-sm font-black leading-6 text-[#0a7c5b]">
        {relationship.relationshipType}
      </p>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        {relationship.publicDescription}
      </p>
    </article>
  );
}

export default function RelationshipsCarousel() {
  const [filter, setFilter] = useState<RelationshipFilter>("all");
  const relationships = useMemo(() => getPublishedRelationships(), []);
  const filteredRelationships = relationships.filter((relationship) => {
    return filter === "all" || relationship.status === filter;
  });

  if (relationships.length === 0) {
    return null;
  }

  return (
    <section id="relationships" className="section-band py-14 md:py-16">
      <div className="container-medx">
        <SectionHeader
          eyebrow="Relationship context"
          title="Partners and Relationship Context"
          description="MedX’s healthcare ecosystem includes current relationships and organizations referenced in the company’s historical materials."
          centered
        />

        <div
          className="mx-auto mt-7 flex max-w-xl flex-wrap justify-center gap-2"
          aria-label="Relationship filters"
        >
          {(Object.keys(filterLabels) as RelationshipFilter[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`min-h-11 rounded-full px-4 text-sm font-black transition focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 ${
                filter === item
                  ? "bg-[#071b33] text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-emerald-200 hover:bg-emerald-50"
              }`}
              aria-pressed={filter === item}
            >
              {filterLabels[item]}
            </button>
          ))}
        </div>

        <div className="mt-9">
          <AutoCarousel
            ariaLabel="Partners and relationship context carousel"
            direction="right"
            duration={58}
            itemGap={18}
            className="relationships-carousel"
            showControls={false}
          >
            {filteredRelationships.map((relationship) => (
              <RelationshipCard
                key={relationship.id}
                relationship={relationship}
              />
            ))}
          </AutoCarousel>
        </div>
      </div>
    </section>
  );
}
