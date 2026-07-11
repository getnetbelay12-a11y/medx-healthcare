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
    "Support reliable access to healthcare products, diagnostics, medical devices, cervical-screening programs, and data-informed healthcare operations.",
  vision:
    "Develop a trusted healthcare solutions platform for Ethiopia and selected African markets through disciplined supply, diagnostics, partnerships, and local capacity building.",
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
} as const;

export type Company = typeof company;
