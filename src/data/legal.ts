import { company } from "@/data/company";
import { isValidPublicEmail, publicEnv } from "@/lib/env";

export const legalConfig = {
  termsEffectiveDate: process.env.NEXT_PUBLIC_TERMS_EFFECTIVE_DATE || "To be confirmed",
  termsLastUpdated: process.env.NEXT_PUBLIC_TERMS_LAST_UPDATED || "To be confirmed",
  termsVersion: process.env.NEXT_PUBLIC_TERMS_VERSION || "1.0",
  legalCompanyName: process.env.NEXT_PUBLIC_LEGAL_COMPANY_NAME || company.legalName,
  legalContactEmail: isValidPublicEmail(publicEnv.companyEmail) ? publicEnv.companyEmail : "",
  governingLaw: process.env.NEXT_PUBLIC_GOVERNING_LAW || "",
  venue: process.env.NEXT_PUBLIC_LEGAL_VENUE || "",
  jurisdictionConfirmed: process.env.NEXT_PUBLIC_JURISDICTION_CONFIRMED === "true",
} as const;

export const governingLawText = legalConfig.jurisdictionConfirmed
  ? `These Terms are governed by ${legalConfig.governingLaw}. ${
      legalConfig.venue ? `The applicable venue is ${legalConfig.venue}.` : ""
    }`.trim()
  : "These Terms are subject to the applicable laws governing MedX and the relevant transaction.";

export const legalFieldsRequiringConfirmation = [
  "Legal entity name",
  "Terms effective date",
  "Terms last updated date",
  "Governing law",
  "Venue",
  "Public legal contact email",
] as const;

export const termsSections = [
  "Acceptance of Terms",
  "Informational Purpose",
  "No Medical Advice or Emergency Services",
  "Eligibility and Authority",
  "Acceptable Use",
  "Inquiry Submissions",
  "Product and Service Availability",
  "Quotations, Orders, and Commercial Agreements",
  "AI-Assisted Tools",
  "Intellectual Property",
  "Historical Materials and Relationships",
  "Third-Party Services and Links",
  "Privacy",
  "Website Availability",
  "Disclaimers",
  "Limitation of Liability",
  "Indemnification",
  "Suspension and Termination",
  "Changes to Terms",
  "Governing Law",
  "Severability and Entire Agreement",
  "Contact",
] as const;
