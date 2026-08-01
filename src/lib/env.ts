const fallbackSiteUrl =
  process.env.NODE_ENV === "production"
    ? "https://medx.shegahomes.com"
    : "http://localhost:3000";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || fallbackSiteUrl;

export const publicEnv = {
  siteUrl,
  companyEmail: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "",
  companyPhone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "",
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "+1 720 278 1729",
  companyLocation:
    process.env.NEXT_PUBLIC_COMPANY_LOCATION || "Bahir Dar, Amhara, Ethiopia",
  officeHours: process.env.NEXT_PUBLIC_OFFICE_HOURS || "",
  turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "",
};

export const serverEnv = {
  contactToEmail: process.env.CONTACT_TO_EMAIL || "",
  resendApiKey: process.env.RESEND_API_KEY || "",
  resendFromEmail: process.env.RESEND_FROM_EMAIL || "",
  quickChatFallbackEndpoint:
    process.env.QUICK_CHAT_FALLBACK_ENDPOINT ||
    "https://www.kelelitsolution.com/api/contact",
  quickChatNotifyPhone: process.env.QUICK_CHAT_NOTIFY_PHONE || "+17202781729",
  whatsappNotifyPhone:
    process.env.WHATSAPP_NOTIFY_PHONE ||
    process.env.QUICK_CHAT_NOTIFY_PHONE ||
    "+17202781729",
  quickChatNotifyEmail:
    process.env.QUICK_CHAT_NOTIFY_EMAIL || "info@kelelitsolution.com",
  twilioAccountSid: process.env.TWILIO_ACCOUNT_SID || "",
  twilioAuthToken: process.env.TWILIO_AUTH_TOKEN || "",
  twilioFromPhone: process.env.TWILIO_FROM_PHONE || "",
  twilioWhatsappFrom: process.env.TWILIO_WHATSAPP_FROM || "",
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
