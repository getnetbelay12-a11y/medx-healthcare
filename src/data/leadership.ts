export type LeadershipMember = {
  id: string;
  name: string;
  credentials?: string;
  historicalRole?: string;
  currentRole?: string;
  organization?: string;
  shortBio?: string;
  image?: string;
  portrait?: string;
  alt?: string;
  objectPosition?: string;
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
    image: "/images/medx/board/peter-lu.jpg",
    sourceYear: 2020,
    isVerifiedCurrent: false,
    isApprovedForPublicUse: true,
    isPublished: true,
  },
  {
    id: "ahmed-abtew",
    name: "Ahmed Abtew",
    credentials: "M.S. Economics",
    historicalRole: "Referenced in MedX's 2020 investor materials",
    image: "/images/medx/board/ahmed-abtew.jpg",
    sourceYear: 2020,
    isVerifiedCurrent: false,
    isApprovedForPublicUse: true,
    isPublished: true,
  },
  {
    id: "hicham-jorio",
    name: "Hicham Jorio",
    historicalRole: "Referenced in MedX's 2020 investor materials",
    image: "/images/medx/board/hicham-jorio.jpg",
    sourceYear: 2020,
    isVerifiedCurrent: false,
    isApprovedForPublicUse: true,
    isPublished: true,
  },
  {
    id: "amlaku-asres",
    name: "Dr. Amlaku Asres",
    credentials: "Ph.D.",
    historicalRole: "Referenced in MedX's 2020 investor materials",
    image: "/images/medx/board/amlaku-asres.jpg",
    sourceYear: 2020,
    isVerifiedCurrent: false,
    isApprovedForPublicUse: true,
    isPublished: true,
  },
  {
    id: "loko-abraham",
    name: "Dr. Loko Abraham",
    credentials: "M.D.",
    historicalRole: "Referenced in MedX's 2020 investor materials",
    image: "/images/medx/board/loko-abraham.jpg",
    sourceYear: 2020,
    isVerifiedCurrent: false,
    isApprovedForPublicUse: true,
    isPublished: true,
  },
  {
    id: "yamral-ayele",
    name: "Yamral Ayele",
    historicalRole: "Referenced in MedX's 2020 investor materials",
    image: "/images/medx/board/yamral-ayele.jpg",
    sourceYear: 2020,
    isVerifiedCurrent: false,
    isApprovedForPublicUse: true,
    isPublished: true,
  },
  {
    id: "yohannes-challa",
    name: "Dr. Yohannes Challa",
    credentials: "M.D.",
    historicalRole: "Referenced in MedX's 2020 investor materials",
    image: "/images/medx/board/yohannes-challa.jpg",
    sourceYear: 2020,
    isVerifiedCurrent: false,
    isApprovedForPublicUse: true,
    isPublished: true,
  },
  {
    id: "abebaw-gebeyehu",
    name: "Dr. Abebaw Gebeyehu",
    credentials: "Ph.D.",
    historicalRole: "Referenced in MedX's 2020 investor materials",
    image: "/images/medx/board/abebaw-gebeyehu.jpg",
    sourceYear: 2020,
    isVerifiedCurrent: false,
    isApprovedForPublicUse: true,
    isPublished: true,
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

export function getPublishedHistoricalLeadership() {
  return getHistoricalLeadership().filter((member) => member.isPublished);
}

export function shouldShowHistoricalBoard() {
  return process.env.NEXT_PUBLIC_SHOW_HISTORICAL_BOARD === "true";
}
