export type RelationshipStatus = "current" | "historical" | "unconfirmed";

export type Relationship = {
  id: string;
  organization: string;
  relationshipType: string;
  publicDescription: string;
  logo?: string;
  logoAlt?: string;
  website?: string;
  sourceYear?: number;
  status: RelationshipStatus;
  isPublished: boolean;
  displayOrder: number;
};

export const relationshipStatusLabels: Record<RelationshipStatus, string> = {
  current: "Current relationship",
  historical: "2020 reference",
  unconfirmed: "Status being updated",
};

export const relationships: Relationship[] = [
  {
    id: "arbor-vita-corporation",
    organization: "Arbor Vita Corporation",
    relationshipType: "Diagnostics technology and investor context",
    publicDescription:
      "Referenced in MedX’s 2020 investor materials as a diagnostics technology partner and investor.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 10,
  },
  {
    id: "tiret-corporate",
    organization: "TIRET Corporate",
    relationshipType: "Investor and joint-venture context",
    publicDescription:
      "Referenced in MedX’s 2020 investor materials as an Ethiopian investor and joint-venture participant.",
    logo: "/images/medx/partners/tiret-corporate.png",
    logoAlt: "TIRET Corporate historical logo reference.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 20,
  },
  {
    id: "black-lion-hospital",
    organization: "Black Lion Hospital, Addis Ababa",
    relationshipType: "Healthcare-institution context",
    publicDescription:
      "Referenced in MedX’s 2020 investor materials in connection with the company’s healthcare ecosystem.",
    logo: "/images/medx/partners/black-lion-hospital.png",
    logoAlt: "Black Lion Hospital historical logo reference.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 30,
  },
  {
    id: "harvard-university",
    organization: "Harvard University",
    relationshipType: "Research and institutional context",
    publicDescription:
      "Referenced in MedX’s 2020 investor materials within the broader research and institutional ecosystem around the diagnostics platform.",
    logo: "/images/medx/partners/harvard-university.png",
    logoAlt: "Harvard University historical logo reference.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 40,
  },
  {
    id: "albert-einstein-college-of-medicine",
    organization: "Albert Einstein College of Medicine",
    relationshipType: "Research and medical education context",
    publicDescription:
      "Referenced in MedX’s 2020 investor materials as part of the broader medical research and institutional ecosystem.",
    logo: "/images/medx/partners/albert-einstein-college-of-medicine.png",
    logoAlt: "Albert Einstein College of Medicine historical logo reference.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 50,
  },
  {
    id: "bill-and-melinda-gates-foundation",
    organization: "Bill & Melinda Gates Foundation",
    relationshipType: "Global-health ecosystem context",
    publicDescription:
      "Referenced in MedX’s 2020 investor materials within a broader global-health organization context.",
    logo: "/images/medx/partners/bill-and-melinda-gates-foundation.png",
    logoAlt: "Bill and Melinda Gates Foundation historical logo reference.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 60,
  },
  {
    id: "who-iarc",
    organization: "World Health Organization / IARC",
    relationshipType: "Public-health and cancer-research context",
    publicDescription:
      "Referenced in MedX’s 2020 investor materials within a public-health and cancer-research ecosystem context.",
    logo: "/images/medx/partners/who-iarc.png",
    logoAlt: "WHO and IARC historical logo reference.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 70,
  },
  {
    id: "national-cancer-institute",
    organization: "National Cancer Institute",
    relationshipType: "Cancer-research context",
    publicDescription:
      "Referenced in MedX’s 2020 investor materials as part of a broader cancer-research organization context.",
    logo: "/images/medx/partners/national-cancer-institute.png",
    logoAlt: "National Cancer Institute historical logo reference.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 80,
  },
  {
    id: "charite-dkfz",
    organization: "Charite / DKFZ",
    relationshipType: "Clinical and research context",
    publicDescription:
      "Referenced in MedX’s 2020 investor materials within the broader clinical and research ecosystem.",
    logo: "/images/medx/partners/charite-dkfz.png",
    logoAlt: "Charite and DKFZ historical logo reference.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 90,
  },
  {
    id: "duke-university",
    organization: "Duke University",
    relationshipType: "Research and institutional context",
    publicDescription:
      "Referenced in MedX’s 2020 investor materials within the broader research and institutional ecosystem.",
    logo: "/images/medx/partners/duke-university.png",
    logoAlt: "Duke University historical logo reference.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 100,
  },
  {
    id: "hospital-de-cancer-de-barretos",
    organization: "Hospital de Cancer de Barretos",
    relationshipType: "Cancer-care institution context",
    publicDescription:
      "Referenced in MedX’s 2020 investor materials within the broader cancer-care and research ecosystem.",
    logo: "/images/medx/partners/hospital-de-cancer-de-barretos.png",
    logoAlt: "Hospital de Cancer de Barretos historical logo reference.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 110,
  },
  {
    id: "path",
    organization: "PATH",
    relationshipType: "Global-health implementation context",
    publicDescription:
      "Referenced in MedX’s 2020 investor materials within the broader global-health implementation ecosystem.",
    logo: "/images/medx/partners/path.png",
    logoAlt: "PATH historical logo reference.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 120,
  },
  {
    id: "cancer-institute-hospital-chinese-academy",
    organization: "Cancer Institute and Hospital, Chinese Academy of Medical Sciences",
    relationshipType: "Cancer-research institution context",
    publicDescription:
      "Referenced in MedX’s 2020 investor materials within the broader cancer-research ecosystem.",
    logo: "/images/medx/partners/cancer-institute-hospital-chinese-academy.png",
    logoAlt:
      "Cancer Institute and Hospital, Chinese Academy of Medical Sciences historical logo reference.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 130,
  },
];

export const currentRelationships = relationships.filter(
  (relationship) => relationship.status === "current",
);

export const historicalRelationships = relationships.filter(
  (relationship) => relationship.status === "historical",
);

export function getPublishedRelationships() {
  return relationships
    .filter((relationship) => relationship.isPublished)
    .sort((first, second) => first.displayOrder - second.displayOrder);
}

export function getCurrentPublishedRelationships() {
  return getPublishedRelationships().filter(
    (relationship) => relationship.status === "current",
  );
}

export function getHistoricalRelationships() {
  return historicalRelationships;
}

export function getPublishedHistoricalRelationships() {
  return getPublishedRelationships().filter(
    (relationship) => relationship.status === "historical",
  );
}

export function shouldShowHistoricalRelationships() {
  return true;
}
