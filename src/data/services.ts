import type { MediaAsset } from "@/data/media";
import { getApprovedMedia } from "@/data/media";

export type ServiceStatus =
  | "current"
  | "in-development"
  | "strategic-roadmap"
  | "historical";

export type MedxService = {
  id: string;
  title: string;
  summary: string;
  status: ServiceStatus;
  features: string[];
  image: MediaAsset;
  alt: string;
  isVerified: boolean;
  isPublished: boolean;
};

function image(id: string) {
  const asset = getApprovedMedia(id);
  if (!asset) {
    throw new Error(`Approved media asset missing: ${id}`);
  }
  return asset;
}

export const services: MedxService[] = [
  {
    id: "pharmaceutical-supply",
    title: "Pharmaceutical supply and distribution",
    summary:
      "Structured support for essential medicines, healthcare products, and institutional supply needs.",
    status: "current",
    features: ["Essential medicine access", "Institutional supply", "Inventory discipline"],
    image: image("pharmaceutical-supply"),
    alt: image("pharmaceutical-supply").alt,
    isVerified: true,
    isPublished: true,
  },
  {
    id: "medical-devices",
    title: "Medical devices and equipment",
    summary:
      "Medical equipment, clinical devices, and support materials for health facilities and programs.",
    status: "current",
    features: ["Device sourcing", "Equipment distribution", "Facility readiness"],
    image: image("medical-devices"),
    alt: image("medical-devices").alt,
    isVerified: true,
    isPublished: true,
  },
  {
    id: "diagnostics",
    title: "Diagnostic and laboratory solutions",
    summary:
      "Laboratory tools, in-vitro diagnostic support, and workflows for earlier detection and better decisions.",
    status: "current",
    features: ["In-vitro diagnostics", "Laboratory systems", "Testing support"],
    image: image("diagnostics-lab"),
    alt: image("diagnostics-lab").alt,
    isVerified: true,
    isPublished: true,
  },
  {
    id: "cervical-screening",
    title: "Cervical-screening program support",
    summary:
      "Program education, implementation support, and referral coordination rooted in MedX's historical cervical-health platform.",
    status: "current",
    features: ["Program support", "Screening education", "Referral pathways"],
    image: image("cervical-screening"),
    alt: image("cervical-screening").alt,
    isVerified: true,
    isPublished: true,
  },
  {
    id: "supply-chain-visibility",
    title: "Supply-chain visibility",
    summary:
      "Forecasting, procurement visibility, and operational reporting to strengthen availability.",
    status: "in-development",
    features: ["Forecasting", "Procurement visibility", "Stock risk monitoring"],
    image: image("supply-chain-network"),
    alt: image("supply-chain-network").alt,
    isVerified: false,
    isPublished: true,
  },
  {
    id: "digital-health",
    title: "Digital health systems",
    summary:
      "Data visibility, dashboards, and automation for more transparent healthcare operations.",
    status: "strategic-roadmap",
    features: ["Dashboards", "Data accuracy", "Operational visibility"],
    image: image("digital-health-dashboard"),
    alt: image("digital-health-dashboard").alt,
    isVerified: false,
    isPublished: true,
  },
  {
    id: "research-innovation",
    title: "Research and innovation",
    summary:
      "Partnership-ready applied research and innovation translation for practical healthcare solutions.",
    status: "strategic-roadmap",
    features: ["Applied research", "Evidence translation", "Local capacity"],
    image: image("hospital-partnership"),
    alt: image("hospital-partnership").alt,
    isVerified: false,
    isPublished: true,
  },
  {
    id: "manufacturing-readiness",
    title: "Manufacturing readiness",
    summary:
      "Longer-term capability building for local production and import-substitution resilience.",
    status: "strategic-roadmap",
    features: ["Local capacity", "Import substitution", "Quality systems"],
    image: image("diagnostics-lab"),
    alt: image("diagnostics-lab").alt,
    isVerified: false,
    isPublished: true,
  },
  {
    id: "cancer-care-roadmap",
    title: "Cancer-care roadmap",
    summary:
      "Long-term planning for broader cancer-care infrastructure and referral capacity.",
    status: "strategic-roadmap",
    features: ["Referral capacity", "Specialty planning", "Partnership model"],
    image: image("cervical-screening"),
    alt: image("cervical-screening").alt,
    isVerified: false,
    isPublished: true,
  },
  {
    id: "regional-expansion",
    title: "Regional expansion",
    summary:
      "Strategic direction toward selected East African and broader African healthcare markets.",
    status: "strategic-roadmap",
    features: ["Market readiness", "Regional partnerships", "Scalable systems"],
    image: image("public-health-map"),
    alt: image("public-health-map").alt,
    isVerified: false,
    isPublished: true,
  },
];

export function getPublishedServices(status?: ServiceStatus) {
  return services.filter(
    (service) => service.isPublished && (!status || service.status === status),
  );
}
