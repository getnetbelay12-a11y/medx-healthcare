export type LeadershipStatus = "current" | "historical" | "unconfirmed";

export type LeadershipMember = {
  id: string;
  name: string;
  credentials?: string;
  role: string;
  organization?: string;
  shortBio?: string;
  portrait?: string;
  portraitAlt?: string;
  objectPosition?: string;
  sourceYear?: number;
  status: LeadershipStatus;
  isPublished: boolean;
  displayOrder: number;
};

export const leadershipStatusLabels: Record<LeadershipStatus, string> = {
  current: "Leadership",
  historical: "Leadership",
  unconfirmed: "Leadership",
};

export const leadershipMembers: LeadershipMember[] = [
  {
    id: "peter-lu",
    name: "Dr. Peter S. Lu",
    credentials: "M.D.",
    role: "Healthcare diagnostics and technology leadership",
    organization: "Arbor Vita Corporation",
    shortBio:
      "Healthcare diagnostics and technology leadership profile.",
    portrait: "/images/medx/board/peter-lu.jpg",
    portraitAlt: "Dr. Peter S. Lu, historical 2020 board reference.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 10,
  },
  {
    id: "ahmed-abtew",
    name: "Ahmed Abtew",
    credentials: "M.S. Economics",
    role: "Public-sector, banking, and industrial leadership",
    shortBio:
      "Senior public, banking, industrial, and institutional leadership profile.",
    portrait: "/images/medx/board/ahmed-abtew.jpg",
    portraitAlt: "Ahmed Abtew, historical 2020 board reference.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 20,
  },
  {
    id: "hicham-jorio",
    name: "Hicham Jorio",
    role: "Bioventures and healthcare investment leadership",
    organization: "Spire Bioventures / Arbor Vita Corporation",
    shortBio:
      "Bioventures and healthcare investment leadership profile.",
    portrait: "/images/medx/board/hicham-jorio.jpg",
    portraitAlt: "Hicham Jorio, historical 2020 board reference.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 30,
  },
  {
    id: "amlaku-asres",
    name: "Dr. Amlaku Asres",
    credentials: "Ph.D.",
    role: "Executive and institutional leadership",
    shortBio:
      "Executive and institutional leadership profile.",
    portrait: "/images/medx/board/amlaku-asres.jpg",
    portraitAlt: "Dr. Amlaku Asres, historical 2020 board reference.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 40,
  },
  {
    id: "loko-abraham",
    name: "Dr. Loko Abraham",
    credentials: "M.D.",
    role: "Pediatrician; Director General of the Pharmacy Supply Agency",
    organization: "Pharmacy Supply Agency",
    shortBio:
      "Pediatric and national pharmacy-supply leadership profile.",
    portrait: "/images/medx/board/loko-abraham.jpg",
    portraitAlt: "Dr. Loko Abraham, historical 2020 board reference.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 50,
  },
  {
    id: "yamral-ayele",
    name: "Yamral Ayele",
    role: "Healthcare technology and implementation advisory",
    organization: "Arbor Vita Corporation",
    shortBio:
      "Healthcare technology and implementation advisory profile.",
    portrait: "/images/medx/board/yamral-ayele.jpg",
    portraitAlt: "Yamral Ayele, historical 2020 board reference.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 60,
  },
  {
    id: "yohannes-challa",
    name: "Dr. Yohannes Challa",
    credentials: "M.D.",
    role: "Surgeon; Addis Ababa Regional Health Bureau Head",
    organization: "Addis Ababa Regional Health Bureau",
    shortBio:
      "Surgical and regional health bureau leadership profile.",
    portrait: "/images/medx/board/yohannes-challa.jpg",
    portraitAlt: "Dr. Yohannes Challa, historical 2020 board reference.",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 70,
  },
  {
    id: "abebaw-gebeyehu",
    name: "Dr. Abebaw Gebeyehu",
    credentials: "Ph.D.",
    role: "Public Health Specialist; Senior Public Health Consultant",
    shortBio:
      "Public-health specialist and senior consulting leadership profile.",
    portrait: "/images/medx/board/abebaw-gebeyehu.jpg",
    portraitAlt: "Dr. Abebaw Gebeyehu, historical 2020 board reference.",
    objectPosition: "center 38%",
    sourceYear: 2020,
    status: "historical",
    isPublished: true,
    displayOrder: 80,
  },
];

export const currentLeadership = leadershipMembers.filter(
  (member) => member.status === "current",
);

export const historicalLeadership = leadershipMembers.filter(
  (member) => member.status === "historical",
);

export const leadershipProfiles = leadershipMembers;

export function getPublishedLeadership() {
  return leadershipMembers
    .filter((member) => member.isPublished)
    .sort((first, second) => first.displayOrder - second.displayOrder);
}

export function getCurrentPublishedLeadership() {
  return getPublishedLeadership().filter((member) => member.status === "current");
}

export function getHistoricalLeadership() {
  return historicalLeadership;
}

export function getPublishedHistoricalLeadership() {
  return getPublishedLeadership().filter((member) => member.status === "historical");
}

export function shouldShowHistoricalBoard() {
  return true;
}
