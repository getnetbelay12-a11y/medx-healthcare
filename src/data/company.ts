export const company = {
  name: "MedX Healthcare Solutions",
  legalName: "MedX Healthcare Solutions",
  shortName: "MedX",
  founded: "2017",
  historicalInitialCapital: "16.5 million ETB",
  location: "Bahir Dar, Amhara, Ethiopia",
  historicalSourceLabel: "2020 investor presentation",
  description:
    "MedX Healthcare Solutions is a Bahir Dar-based healthcare company with historical roots in diagnostic manufacturing, in-vitro diagnostic distribution, and cervical-cancer screening access.",
  mission:
    "Improve healthcare access through dependable supply, diagnostics, screening support, and disciplined implementation.",
  vision:
    "Build a trusted Ethiopian healthcare platform with stronger local capacity and regional relevance.",
  disclaimer:
    "This website provides organizational and service information and does not provide medical advice, diagnosis, or emergency services.",
  verifiedCurrentFacts: [
    "MedX was created in 2017.",
    "Historical materials place MedX operations in Bahir Dar, Amhara, Ethiopia.",
    "Historical materials reference initial capital of 16.5 million ETB.",
  ],
  historicalFacts: [
    "Historical materials describe a joint venture involving Arbor Vita Corporation and an Ethiopian endowment organization.",
    "Historical materials reference TIRET Corporate.",
    "Original activity included manufacturing and distribution of in-vitro diagnostic devices.",
    "The 2020 presentation described an approximately 6,000-square-foot furnished manufacturing facility.",
    "The original flagship focus was the OncoE6 cervical screening test.",
  ],
  currentServices: [
    "Pharmaceutical supply and distribution",
    "Medical devices and equipment",
    "Diagnostic and laboratory solutions",
    "Cervical-cancer screening support",
  ],
  strategicCapabilities: [
    "Supply-chain systems",
    "Digital health and data visibility",
    "Research and innovation partnerships",
    "Manufacturing readiness",
    "Broader cancer-care infrastructure",
    "Regional healthcare platform expansion",
  ],
  aboutHighlights: [
    "Founded in 2017",
    "Based in Bahir Dar",
    "Originated in diagnostics and cervical screening",
  ],
  aboutGlance: [
    { label: "Founded", value: "2017" },
    { label: "Location", value: "Bahir Dar, Amhara, Ethiopia" },
    { label: "Original focus", value: "Diagnostics and cervical screening" },
    {
      label: "Current direction",
      value:
        "Healthcare supply, diagnostics, screening support, and implementation discipline",
    },
  ],
  aboutTimeline: [
    {
      period: "2017",
      title: "Company formation and original diagnostics focus",
      label: "Historical formation reference",
    },
    {
      period: "2017-2020",
      title: "Cervical-screening and in-vitro diagnostic foundation",
      label: "Historical platform reference",
    },
    {
      period: "2019",
      title: "Governance transition referenced in investor materials",
      label: "Historical governance reference",
    },
    {
      period: "Current direction",
      title:
        "Healthcare supply, devices, diagnostics, screening support, public-health programs, and digital operations",
      label: "Current public direction",
    },
    {
      period: "Long-term direction",
      title:
        "Local capacity, manufacturing readiness, cancer-care development, and regional expansion",
      label: "Future direction subject to execution capacity",
    },
  ],
  aboutValues: [
    {
      title: "Public Health Impact",
      description: "Prioritize solutions that improve access and strengthen care delivery.",
    },
    {
      title: "Innovation",
      description: "Apply practical technology to real healthcare challenges.",
    },
    {
      title: "Reliability",
      description: "Deliver with consistency, transparency, and accountability.",
    },
    {
      title: "Local Capacity",
      description: "Build skills, systems, and long-term Ethiopian capability.",
    },
    {
      title: "Partnership",
      description: "Work through trusted institutional and technical collaboration.",
    },
    {
      title: "Accountability",
      description: "Measure progress and take responsibility for outcomes.",
    },
  ],
  historicalGovernanceContext: [
    "Goshe Meda Pipe and Plastic Manufacturing Industry is referenced in historical administration context.",
    "Amhara Regional Health Bureau and Amhara Public Health Institute are referenced in historical support context.",
    "Nigat Corporate is referenced in historical governance transition materials.",
    "TIRET Corporate is referenced in historical investor and joint-venture materials.",
    "Arbor Vita Corporation is referenced in historical investor and technology context.",
  ],
} as const;

export type Company = typeof company;
