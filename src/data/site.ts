import {
  Activity,
  Building2,
  FlaskConical,
  HeartPulse,
  LineChart,
  PackageCheck,
  Pill,
  ShieldCheck,
  Stethoscope,
  Truck,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Public Health", href: "/public-health" },
  { label: "Strategy", href: "/strategy" },
  { label: "Relationships", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { label: "Founded", value: "2017" },
  { label: "Initial Capital", value: "16.5M ETB" },
  { label: "Regional Focus", value: "Amhara & Ethiopia" },
  { label: "Long-Term Plan", value: "15 Years" },
  { label: "Market Context", value: "Ethiopia" },
];

export const services = [
  {
    title: "Pharmaceutical Supply",
    description:
      "Reliable supply and distribution of essential medicines for public and private health facilities.",
    icon: Pill,
  },
  {
    title: "Medical Devices",
    description:
      "Procurement and distribution of medical devices, equipment, and clinical support materials.",
    icon: Stethoscope,
  },
  {
    title: "Diagnostic Solutions",
    description:
      "Advanced diagnostic tools and laboratory solutions to improve early detection and patient care.",
    icon: FlaskConical,
  },
  {
    title: "Cervical Cancer Screening",
    description:
      "Cervical-screening program support, education, and referral pathway coordination.",
    icon: HeartPulse,
  },
  {
    title: "Supply Chain Systems",
    description:
      "Stronger healthcare supply chain visibility, forecasting, inventory control, and delivery reliability.",
    icon: Truck,
  },
  {
    title: "Digital Health",
    description:
      "Data-driven platforms, dashboards, and automation for stronger healthcare operations.",
    icon: LineChart,
  },
];

export const strategyPillars = [
  {
    title: "Integrated Healthcare Platform",
    description:
      "Unifying diagnostics, pharmaceuticals, medical devices, cancer care, and insurance-linked services.",
    icon: Building2,
  },
  {
    title: "Local Manufacturing",
    description:
      "Reducing import dependency through pharmaceutical and diagnostic manufacturing capacity.",
    icon: PackageCheck,
  },
  {
    title: "Public Health Impact",
    description:
      "Targeting high-burden needs including cervical cancer, medicine shortages, and diagnostic access.",
    icon: Activity,
  },
  {
    title: "Trust and Resilience",
    description:
      "Building reliable systems through partnerships, governance, research, and financial sustainability.",
    icon: ShieldCheck,
  },
];
