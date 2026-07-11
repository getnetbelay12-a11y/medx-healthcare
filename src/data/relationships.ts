export type Relationship = {
  organization: string;
  relationshipType: string;
  sourceYear: number;
  isVerifiedCurrent: boolean;
  isPublic: boolean;
  publicDescription: string;
};

export const relationships: Relationship[] = [
  {
    organization: "Arbor Vita Corporation",
    relationshipType: "Historical diagnostics technology partner",
    sourceYear: 2020,
    isVerifiedCurrent: false,
    isPublic: true,
    publicDescription:
      "Historical investor materials describe Arbor Vita Corporation as a U.S. diagnostics technology partner in MedX’s original platform.",
  },
  {
    organization: "TIRET Corporate",
    relationshipType: "Historical Ethiopian endowment organization reference",
    sourceYear: 2020,
    isVerifiedCurrent: false,
    isPublic: true,
    publicDescription:
      "Historical investor materials reference TIRET Corporate in MedX’s original ownership context.",
  },
  {
    organization: "Black Lion Hospital",
    relationshipType: "Historical partner reference",
    sourceYear: 2020,
    isVerifiedCurrent: false,
    isPublic: false,
    publicDescription:
      "Historical presentation materials referenced Black Lion Hospital; current relationship status requires confirmation.",
  },
];
