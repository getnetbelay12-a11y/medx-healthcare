export type MediaAsset = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category:
    | "hero"
    | "diagnostics"
    | "pharmaceuticals"
    | "medical-devices"
    | "cervical-health"
    | "supply-chain"
    | "public-health"
    | "leadership"
    | "strategy"
    | "contact";
  isConceptual: boolean;
  isApproved: boolean;
  credit?: string;
};

export const mediaAssets: MediaAsset[] = [
  {
    id: "hero-healthcare-africa",
    src: "/images/medx/medx-hero-healthcare-africa.jpg",
    alt: "Conceptual image of African healthcare professionals collaborating in a modern healthcare setting.",
    caption: "Conceptual healthcare collaboration image.",
    category: "hero",
    isConceptual: true,
    isApproved: true,
  },
  {
    id: "diagnostics-lab",
    src: "/images/medx/medx-diagnostics-lab.jpg",
    alt: "Conceptual diagnostics laboratory with medical laboratory staff and clinical testing equipment.",
    caption: "Conceptual diagnostics laboratory image.",
    category: "diagnostics",
    isConceptual: true,
    isApproved: true,
  },
  {
    id: "pharmaceutical-supply",
    src: "/images/medx/medx-pharmaceutical-supply.jpg",
    alt: "Conceptual pharmaceutical warehouse with supply and pharmacy team members.",
    caption: "Conceptual pharmaceutical supply image.",
    category: "pharmaceuticals",
    isConceptual: true,
    isApproved: true,
  },
  {
    id: "medical-devices",
    src: "/images/medx/medx-medical-devices.jpg",
    alt: "Conceptual medical-device technicians preparing equipment for healthcare facility support.",
    caption: "Conceptual medical-device operations image.",
    category: "medical-devices",
    isConceptual: true,
    isApproved: true,
  },
  {
    id: "cervical-screening",
    src: "/images/medx/medx-cervical-cancer-screening.jpg",
    alt: "Conceptual respectful cervical-screening education with healthcare workers and women in a non-sensitive setting.",
    caption: "Conceptual cervical-health education image.",
    category: "cervical-health",
    isConceptual: true,
    isApproved: true,
  },
  {
    id: "supply-chain-network",
    src: "/images/medx/medx-supply-chain-network.jpg",
    alt: "Conceptual healthcare supply-chain network with warehouse and fulfillment teams.",
    caption: "Conceptual healthcare supply-chain image.",
    category: "supply-chain",
    isConceptual: true,
    isApproved: true,
  },
  {
    id: "public-health-map",
    src: "/images/medx/medx-africa-health-map.jpg",
    alt: "Conceptual Ethiopia and Africa healthcare access map with public-health planning context.",
    caption: "Conceptual public-health planning image.",
    category: "public-health",
    isConceptual: true,
    isApproved: true,
  },
  {
    id: "digital-health-dashboard",
    src: "/images/medx/medx-digital-health-dashboard.jpg",
    alt: "Conceptual healthcare administrators reviewing operational dashboards and data.",
    caption: "Conceptual digital operations image.",
    category: "strategy",
    isConceptual: true,
    isApproved: true,
  },
  {
    id: "hospital-partnership",
    src: "/images/medx/medx-hospital-partnership.jpg",
    alt: "Conceptual doctors, nurses, and administrators in a healthcare partnership meeting.",
    caption: "Conceptual healthcare partnership image.",
    category: "leadership",
    isConceptual: true,
    isApproved: true,
  },
  {
    id: "bahir-dar-context",
    src: "/images/medx/medx-bahir-dar-healthcare.jpg",
    alt: "Conceptual Bahir Dar healthcare environment with professionals in a modern healthcare context.",
    caption: "Conceptual Bahir Dar healthcare context image.",
    category: "contact",
    isConceptual: true,
    isApproved: true,
  },
];

export function getApprovedMedia(id: string) {
  return mediaAssets.find((asset) => asset.id === id && asset.isApproved);
}
