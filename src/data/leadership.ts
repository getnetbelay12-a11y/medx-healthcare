export type LeadershipMember = {
  id: string;
  name: string;
  credentials?: string;
  historicalRole?: string;
  currentRole?: string;
  organization?: string;
  shortBio?: string;
  image?: string;
  sourceYear?: number;
  isVerifiedCurrent: boolean;
  isApprovedForPublicUse: boolean;
  isPublished: boolean;
};

export const leadershipMembers: LeadershipMember[] = [
  {
    id: "peter-lu",
    name: "Dr. Peter S. Lu",
    credentials: "M.D.",
    historicalRole: "Referenced in MedX's 2020 investor materials",
    sourceYear: 2020,
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: false,
  },
  {
    id: "ahmed-abtew",
    name: "Ahmed Abtew",
    credentials: "M.S. Economics",
    historicalRole: "Referenced in MedX's 2020 investor materials",
    sourceYear: 2020,
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: false,
  },
  {
    id: "hicham-jorio",
    name: "Hicham Jorio",
    historicalRole: "Referenced in MedX's 2020 investor materials",
    sourceYear: 2020,
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: false,
  },
  {
    id: "amlaku-asres",
    name: "Dr. Amlaku Asres",
    credentials: "Ph.D.",
    historicalRole: "Referenced in MedX's 2020 investor materials",
    sourceYear: 2020,
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: false,
  },
  {
    id: "loko-abraham",
    name: "Dr. Loko Abraham",
    credentials: "M.D.",
    historicalRole: "Referenced in MedX's 2020 investor materials",
    sourceYear: 2020,
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: false,
  },
  {
    id: "yamral-ayele",
    name: "Yamral Ayele",
    historicalRole: "Referenced in MedX's 2020 investor materials",
    sourceYear: 2020,
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: false,
  },
  {
    id: "yohannes-challa",
    name: "Dr. Yohannes Challa",
    credentials: "M.D.",
    historicalRole: "Referenced in MedX's 2020 investor materials",
    sourceYear: 2020,
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: false,
  },
  {
    id: "abebaw-gebeyehu",
    name: "Dr. Abebaw Gebeyehu",
    credentials: "Ph.D.",
    historicalRole: "Referenced in MedX's 2020 investor materials",
    sourceYear: 2020,
    isVerifiedCurrent: false,
    isApprovedForPublicUse: false,
    isPublished: false,
  },
];

export const leadershipProfiles = leadershipMembers;

export function getCurrentPublishedLeadership() {
  return leadershipMembers.filter(
    (member) =>
      member.isVerifiedCurrent &&
      member.isApprovedForPublicUse &&
      member.isPublished,
  );
}

export function getHistoricalLeadership() {
  return leadershipMembers.filter((member) => member.sourceYear === 2020);
}

export function shouldShowHistoricalBoard() {
  return process.env.NEXT_PUBLIC_SHOW_HISTORICAL_BOARD === "true";
}
