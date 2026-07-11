export type LeadershipProfile = {
  name: string;
  credentials?: string;
  historicalRole?: string;
  currentRole?: string;
  shortBio?: string;
  image?: string;
  sourceYear: number;
  isVerified: boolean;
  isPublished: boolean;
};

export const leadershipProfiles: LeadershipProfile[] = [
  {
    name: "Dr. Peter S. Lu",
    credentials: "M.D.",
    historicalRole: "Referenced in 2020 investor materials",
    sourceYear: 2020,
    isVerified: false,
    isPublished: true,
  },
  {
    name: "Ahmed Abtew",
    credentials: "M.S. Economics",
    historicalRole: "Referenced in 2020 investor materials",
    sourceYear: 2020,
    isVerified: false,
    isPublished: true,
  },
  {
    name: "Hicham Jorio",
    historicalRole: "Referenced in 2020 investor materials",
    sourceYear: 2020,
    isVerified: false,
    isPublished: true,
  },
  {
    name: "Dr. Amlaku Asres",
    credentials: "Ph.D.",
    historicalRole: "Referenced in 2020 investor materials",
    sourceYear: 2020,
    isVerified: false,
    isPublished: true,
  },
  {
    name: "Dr. Loko Abraham",
    credentials: "M.D.",
    historicalRole: "Referenced in 2020 investor materials",
    sourceYear: 2020,
    isVerified: false,
    isPublished: true,
  },
  {
    name: "Yamral Ayele",
    historicalRole: "Referenced in 2020 investor materials",
    sourceYear: 2020,
    isVerified: false,
    isPublished: true,
  },
  {
    name: "Dr. Yohannes Challa",
    credentials: "M.D.",
    historicalRole: "Referenced in 2020 investor materials",
    sourceYear: 2020,
    isVerified: false,
    isPublished: true,
  },
  {
    name: "Dr. Abebaw Gebeyehu",
    credentials: "Ph.D.",
    historicalRole: "Referenced in 2020 investor materials",
    sourceYear: 2020,
    isVerified: false,
    isPublished: true,
  },
];

export function shouldShowHistoricalBoard() {
  return process.env.NEXT_PUBLIC_SHOW_HISTORICAL_BOARD === "true";
}
