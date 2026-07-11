export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

export const publicEnv = {
  siteUrl,
  companyEmail: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "",
  companyPhone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "",
  companyLocation:
    process.env.NEXT_PUBLIC_COMPANY_LOCATION || "Bahir Dar, Amhara, Ethiopia",
  officeHours: process.env.NEXT_PUBLIC_OFFICE_HOURS || "",
  showHistoricalBoard: process.env.NEXT_PUBLIC_SHOW_HISTORICAL_BOARD === "true",
  showHistoricalRelationships:
    process.env.NEXT_PUBLIC_SHOW_HISTORICAL_RELATIONSHIPS === "true",
  turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "",
};

export const serverEnv = {
  contactToEmail: process.env.CONTACT_TO_EMAIL || "",
  resendApiKey: process.env.RESEND_API_KEY || "",
  resendFromEmail: process.env.RESEND_FROM_EMAIL || "",
  turnstileSecretKey: process.env.TURNSTILE_SECRET_KEY || "",
  supabaseUrl: process.env.SUPABASE_URL || "",
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || "",
};

export function isProductionLike() {
  return process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production";
}

export function isValidPublicEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function normalizePhoneHref(value: string) {
  const cleaned = value.replace(/[^\d+]/g, "");
  return cleaned ? `tel:${cleaned}` : "";
}
