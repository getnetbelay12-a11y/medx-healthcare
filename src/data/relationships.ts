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
  alt?: string;
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
    isPublished: true,
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
    isPublished: true,
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
    logo: "/images/medx/partners/tiret-corporate.png",
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: true,
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
    logo: "/images/medx/partners/black-lion-hospital.png",
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: true,
  },
  {
    id: "harvard-university",
    organization: "Harvard University",
    displayName: "Harvard University",
    relationshipType: "historical-health-institution",
    sourceYear: 2020,
    sourceDescription:
      "Historical investor materials from 2020 include Harvard on an organization-reference slide.",
    publicDescription:
      "Historical investor materials from 2020 reference Harvard in the broader research and institutional ecosystem around the original diagnostic platform. Current relationship status requires confirmation.",
    logo: "/images/medx/partners/harvard-university.png",
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: true,
  },
  {
    id: "albert-einstein-college-of-medicine",
    organization: "Albert Einstein College of Medicine",
    displayName: "Albert Einstein College of Medicine",
    relationshipType: "historical-health-institution",
    sourceYear: 2020,
    sourceDescription:
      "Historical investor materials from 2020 include Albert Einstein College of Medicine on an organization-reference slide.",
    publicDescription:
      "Historical investor materials from 2020 reference Albert Einstein College of Medicine in the broader research and institutional ecosystem. Current relationship status requires confirmation.",
    logo: "/images/medx/partners/albert-einstein-college-of-medicine.png",
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: true,
  },
  {
    id: "bill-and-melinda-gates-foundation",
    organization: "Bill & Melinda Gates Foundation",
    displayName: "Bill & Melinda Gates Foundation",
    relationshipType: "historical-technology-partner",
    sourceYear: 2020,
    sourceDescription:
      "Historical investor materials from 2020 include the Bill & Melinda Gates Foundation on an organization-reference slide.",
    publicDescription:
      "Historical investor materials from 2020 reference the Bill & Melinda Gates Foundation in the broader global-health ecosystem. Current relationship status requires confirmation.",
    logo: "/images/medx/partners/bill-and-melinda-gates-foundation.png",
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: true,
  },
  {
    id: "who-iarc",
    organization: "World Health Organization / International Agency for Research on Cancer",
    displayName: "WHO / IARC",
    relationshipType: "historical-government-reference",
    sourceYear: 2020,
    sourceDescription:
      "Historical investor materials from 2020 include WHO/IARC on an organization-reference slide.",
    publicDescription:
      "Historical investor materials from 2020 reference WHO/IARC in the broader public-health and cancer-research ecosystem. Current relationship status requires confirmation.",
    logo: "/images/medx/partners/who-iarc.png",
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: true,
  },
  {
    id: "national-cancer-institute",
    organization: "National Cancer Institute",
    displayName: "National Cancer Institute",
    relationshipType: "historical-government-reference",
    sourceYear: 2020,
    sourceDescription:
      "Historical investor materials from 2020 include the National Cancer Institute on an organization-reference slide.",
    publicDescription:
      "Historical investor materials from 2020 reference the National Cancer Institute in the broader cancer-research ecosystem. Current relationship status requires confirmation.",
    logo: "/images/medx/partners/national-cancer-institute.png",
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: true,
  },
  {
    id: "charite-dkfz",
    organization: "Charite Universitaetsmedizin Berlin / DKFZ",
    displayName: "Charite / DKFZ",
    relationshipType: "historical-health-institution",
    sourceYear: 2020,
    sourceDescription:
      "Historical investor materials from 2020 include Charite and DKFZ on an organization-reference slide.",
    publicDescription:
      "Historical investor materials from 2020 reference Charite and DKFZ in the broader research and clinical ecosystem. Current relationship status requires confirmation.",
    logo: "/images/medx/partners/charite-dkfz.png",
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: true,
  },
  {
    id: "duke-university",
    organization: "Duke University",
    displayName: "Duke University",
    relationshipType: "historical-health-institution",
    sourceYear: 2020,
    sourceDescription:
      "Historical investor materials from 2020 include Duke University on an organization-reference slide.",
    publicDescription:
      "Historical investor materials from 2020 reference Duke University in the broader research and institutional ecosystem. Current relationship status requires confirmation.",
    logo: "/images/medx/partners/duke-university.png",
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: true,
  },
  {
    id: "hospital-de-cancer-de-barretos",
    organization: "Hospital de Cancer de Barretos",
    displayName: "Hospital de Cancer de Barretos",
    relationshipType: "historical-health-institution",
    sourceYear: 2020,
    sourceDescription:
      "Historical investor materials from 2020 include Hospital de Cancer de Barretos on an organization-reference slide.",
    publicDescription:
      "Historical investor materials from 2020 reference Hospital de Cancer de Barretos in the broader cancer-care and research ecosystem. Current relationship status requires confirmation.",
    logo: "/images/medx/partners/hospital-de-cancer-de-barretos.png",
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: true,
  },
  {
    id: "path",
    organization: "PATH",
    displayName: "PATH",
    relationshipType: "historical-technology-partner",
    sourceYear: 2020,
    sourceDescription:
      "Historical investor materials from 2020 include PATH on an organization-reference slide.",
    publicDescription:
      "Historical investor materials from 2020 reference PATH in the broader global-health implementation ecosystem. Current relationship status requires confirmation.",
    logo: "/images/medx/partners/path.png",
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: true,
  },
  {
    id: "cancer-institute-hospital-chinese-academy",
    organization: "Cancer Institute and Hospital, Chinese Academy of Medical Sciences",
    displayName: "Cancer Institute and Hospital, Chinese Academy of Medical Sciences",
    relationshipType: "historical-health-institution",
    sourceYear: 2020,
    sourceDescription:
      "Historical investor materials from 2020 include the Cancer Institute and Hospital, Chinese Academy of Medical Sciences on an organization-reference slide.",
    publicDescription:
      "Historical investor materials from 2020 reference the Cancer Institute and Hospital, Chinese Academy of Medical Sciences in the broader cancer-research ecosystem. Current relationship status requires confirmation.",
    logo: "/images/medx/partners/cancer-institute-hospital-chinese-academy.png",
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: true,
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

export function getPublishedHistoricalRelationships() {
  return getHistoricalRelationships().filter((relationship) => relationship.isPublished);
}

export function shouldShowHistoricalRelationships() {
  return process.env.NEXT_PUBLIC_SHOW_HISTORICAL_RELATIONSHIPS === "true";
}
