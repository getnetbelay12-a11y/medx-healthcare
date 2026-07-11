# Deployment

## Environment Variables

Copy `.env.example` and configure production values:

- `NEXT_PUBLIC_SITE_URL`: final public URL.
- `NEXT_PUBLIC_COMPANY_EMAIL`: approved public email, if available.
- `NEXT_PUBLIC_COMPANY_PHONE`: approved public phone, if available.
- `NEXT_PUBLIC_COMPANY_LOCATION`: approved public location.
- `NEXT_PUBLIC_OFFICE_HOURS`: approved office hours.
- `NEXT_PUBLIC_SHOW_HISTORICAL_BOARD`: enable only for controlled historical-board review.
- `NEXT_PUBLIC_SHOW_HISTORICAL_RELATIONSHIPS`: enable only for controlled historical-relationship review.
- `CONTACT_TO_EMAIL`: inbox receiving website inquiries.
- `RESEND_API_KEY`: Resend API key.
- `RESEND_FROM_EMAIL`: verified Resend sender.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`: optional Cloudflare Turnstile keys.
- `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`: optional persistence settings.

## Resend Setup

1. Verify the sending domain in Resend.
2. Set `RESEND_FROM_EMAIL` to an address on the verified domain.
3. Set `CONTACT_TO_EMAIL` to the approved MedX receiving inbox.
4. Submit a test inquiry and confirm the internal notification and submitter confirmation.

## Domain And DNS

1. Point the production domain to the hosting provider.
2. Configure HTTPS.
3. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain.
4. Confirm canonical tags, sitemap URLs, and Open Graph URLs use the final domain.

## Turnstile

1. Create a Cloudflare Turnstile site.
2. Add the production domain.
3. Configure the public and secret keys.
4. Test a valid form submission and a failed challenge.

## Optional Supabase

1. Create an inquiries table with request ID, submission status, created timestamp, and sanitized inquiry fields.
2. Add retention and access controls.
3. Configure server-only service role credentials.
4. Never expose the service role key in browser code.

## Commands

```bash
npm install
npm run lint
npm run typecheck
npm run test:run
npm run build
```

## Vercel Deployment

1. Import the repository into Vercel.
2. Set the build command to `npm run build`.
3. Set environment variables for preview and production.
4. Use preview deployments for content review.
5. Set robots to block preview indexing by leaving `VERCEL_ENV` as preview.
6. Promote only reviewed builds to production.

## Post-Launch Checks

- Open every primary route on desktop, tablet, and mobile.
- Confirm `/partners` shows only verified current relationships unless historical display is intentionally enabled.
- Submit invalid and valid contact-form test payloads.
- Confirm `/api/health` returns status, version, environment, and timestamp.
- Confirm no unapproved phone or email is displayed.
- Confirm sitemap, robots, metadata, and social preview data.

## Rollback

Use the hosting provider deployment history to restore the previous successful deployment. Keep environment variables unchanged unless the rollback depends on older configuration.
