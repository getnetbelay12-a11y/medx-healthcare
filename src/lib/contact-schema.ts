import { z } from "zod";

export const inquiryTypes = [
  "Product and supply request",
  "Medical-device request",
  "Diagnostic inquiry",
  "Cervical-screening program",
  "Facility or public-health program",
  "Partnership inquiry",
  "Investment inquiry",
  "Supplier registration",
  "General inquiry",
] as const;

export const urgencyOptions = ["Routine", "Time-sensitive", "Urgent"] as const;

export const timelineOptions = [
  "Immediately",
  "Within 30 days",
  "1-3 months",
  "3+ months",
  "Exploratory",
] as const;

const optionalPhone = z
  .string()
  .trim()
  .max(40)
  .optional()
  .transform((value) => value || "")
  .refine((value) => !value || /^[+\d\s().-]{7,40}$/.test(value), {
    message: "Enter a valid phone number.",
  });

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required.").max(120),
  organization: z.string().trim().min(2, "Organization is required.").max(160),
  email: z.string().trim().email("Enter a valid email address.").max(160),
  phone: optionalPhone,
  country: z.string().trim().min(2, "Country is required.").max(80),
  cityRegion: z.string().trim().min(2, "City or region is required.").max(100),
  inquiryType: z.enum(inquiryTypes, {
    message: "Select an inquiry type.",
  }),
  productService: z
    .string()
    .trim()
    .min(2, "Product or service requested is required.")
    .max(200),
  estimatedQuantity: z.string().trim().max(80).optional().default(""),
  urgency: z.enum(urgencyOptions, { message: "Select urgency." }),
  preferredTimeline: z.enum(timelineOptions, {
    message: "Select a preferred timeline.",
  }),
  message: z.string().trim().min(20, "Message must be at least 20 characters.").max(2000),
  privacyConsent: z.boolean().refine((value) => value === true, {
    message: "Privacy consent is required.",
  }),
  website: z.string().max(0).optional().default(""),
  startedAt: z.coerce.number().int().positive(),
  turnstileToken: z.string().optional().default(""),
});

export type ContactFormValues = z.input<typeof contactSchema>;

export function hasTooManyLinks(value: string) {
  const matches = value.match(/https?:\/\/|www\./gi);
  return (matches?.length || 0) > 2;
}
