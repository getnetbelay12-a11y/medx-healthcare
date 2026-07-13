# MedX Production Audit

## Issues Found And Fixed

- Replaced preview-domain and hardcoded canonical URLs with `NEXT_PUBLIC_SITE_URL`.
- Added missing production routes: `/public-health`, `/partners`, `/privacy`, `/terms`, `/accessibility`, `/thank-you`, custom not-found, global error, loading, robots, sitemap, and manifest.
- Removed fake public contact details. Email and phone now render only when valid environment values are configured.
- Reworked contact form with React Hook Form, Zod validation, honeypot, timing check, optional Turnstile token support, request IDs, and safe failure when email configuration is missing.
- Added deployed Sites worker handlers for `GET /api/health` and `POST /api/contact`.
- Centralized company, leadership, relationship, media, services, SEO, environment, and contact validation data.
- Reframed historical investor-presentation facts as historical context, not current 2026 claims.
- Removed outdated public-health statistics from public copy until current authoritative sources are confirmed.
- Updated image alt text so AI-generated visuals are described as conceptual rather than verified MedX facilities or staff.
- Historical board and historical relationship records default to hidden unless controlled review flags are enabled.
- Added Vitest schema tests and a `verify` script.

## Remaining Company Confirmations

- Legal company name and current registration details.
- Current shareholders and governance structure.
- Current board and executive team.
- Official headquarters address, phone, public email, and privacy contact.
- Facility status, manufacturing status, certifications, regulatory approvals, product availability, and service regions.
- Current Arbor Vita, OncoE6, TIRET, Nigat, government, hospital, and research relationships.
- Approved partner logos, real facility photos, team photos, and public claims.

## Required Environment Variables

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_COMPANY_EMAIL`
- `NEXT_PUBLIC_COMPANY_PHONE`
- `NEXT_PUBLIC_COMPANY_LOCATION`
- `NEXT_PUBLIC_OFFICE_HOURS`
- `src/data/leadership.ts`
- `src/data/relationships.ts`
- `CONTACT_TO_EMAIL`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

## Deployment Checklist

- Configure production `NEXT_PUBLIC_SITE_URL`.
- Configure verified Resend sender and `CONTACT_TO_EMAIL` before expecting form submissions to succeed.
- Configure Turnstile keys when bot protection is required.
- Add optional Supabase credentials only after an inquiry table and retention policy are approved.
- Run `npm install`, `npm run lint`, `npm run typecheck`, `npm run test:run`, and `npm run build`.
- Verify `/`, `/about`, `/services`, `/public-health`, `/strategy`, `/partners`, `/contact`, `/privacy`, `/terms`, `/accessibility`, `/thank-you`, `/api/health`, and `/api/contact`.
