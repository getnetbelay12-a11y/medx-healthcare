export type RelationshipType =
  | "historical-investor"
  | "historical-joint-venture"
  | "historical-technology-partner"
  | "historical-health-institution"
  | "historical-government-reference"
  | "current-partner"
  | "current-client"
  | "current-supplier";

export type Relationship = {
  id: string;
  organization: string;
  displayName: string;
  relationshipType: RelationshipType;
  sourceYear?: number;
  sourceDescription: string;
  publicDescription: string;
  logo?: string;
  website?: string;
  isVerifiedCurrent: boolean;
  isApprovedForPublicUse: boolean;
  isPublished: boolean;
};

export const relationships: Relationship[] = [
  {
    id: "arbor-vita-investor",
    organization: "Arbor Vita Corporation",
    displayName: "Arbor Vita Corporation",
    relationshipType: "historical-investor",
    sourceYear: 2020,
    sourceDescription:
      "Historical investor materials from 2020 describe Arbor Vita Corporation as an investor in MedX Diagnostic PLC.",
    publicDescription:
      "Historical investor materials from 2020 reference Arbor Vita Corporation in MedX's original investor context.",
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: false,
  },
  {
    id: "arbor-vita-technology",
    organization: "Arbor Vita Corporation",
    displayName: "Arbor Vita Corporation",
    relationshipType: "historical-technology-partner",
    sourceYear: 2020,
    sourceDescription:
      "Historical investor materials from 2020 describe Arbor Vita Corporation as MedX's diagnostics technology partner.",
    publicDescription:
      "Historical investor materials from 2020 reference Arbor Vita Corporation as part of MedX's original diagnostics technology platform.",
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: false,
  },
  {
    id: "tiret-investor",
    organization: "TIRET Corporate",
    displayName: "TIRET Corporate",
    relationshipType: "historical-investor",
    sourceYear: 2020,
    sourceDescription:
      "Historical investor materials from 2020 describe TIRET Corporate as an Ethiopian investor in MedX Diagnostic PLC.",
    publicDescription:
      "Historical investor materials from 2020 reference TIRET Corporate in MedX's original investor context.",
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: false,
  },
  {
    id: "tiret-joint-venture",
    organization: "TIRET Corporate",
    displayName: "TIRET Corporate",
    relationshipType: "historical-joint-venture",
    sourceYear: 2020,
    sourceDescription:
      "Historical investor materials from 2020 describe TIRET Corporate as a joint-venture party.",
    publicDescription:
      "Historical investor materials from 2020 reference TIRET Corporate as part of MedX's original joint-venture structure.",
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: false,
  },
  {
    id: "black-lion-hospital",
    organization: "Black Lion Hospital, Addis Ababa",
    displayName: "Black Lion Hospital",
    relationshipType: "historical-health-institution",
    sourceYear: 2020,
    sourceDescription:
      "Historical investor materials from 2020 include Black Lion Hospital, Addis Ababa, on a partner-reference slide.",
    publicDescription:
      "Historical investor materials from 2020 reference Black Lion Hospital in Addis Ababa. Current relationship status requires confirmation.",
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: false,
  },
];

export function getCurrentPublishedRelationships() {
  return relationships.filter(
    (relationship) =>
      relationship.isVerifiedCurrent &&
      relationship.isApprovedForPublicUse &&
      relationship.isPublished,
  );
}

export function getHistoricalRelationships() {
  return relationships.filter(
    (relationship) =>
      relationship.relationshipType.startsWith("historical-") &&
      relationship.sourceYear,
  );
}

export function shouldShowHistoricalRelationships() {
  return process.env.NEXT_PUBLIC_SHOW_HISTORICAL_RELATIONSHIPS === "true";
}
