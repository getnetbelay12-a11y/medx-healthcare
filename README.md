# MedX Healthcare Solutions Website

Professional corporate website for MedX Healthcare Solutions, a Bahir Dar-based healthcare company with historical roots in diagnostics, in-vitro diagnostic distribution, and cervical-screening access. The public copy distinguishes current service areas from strategic roadmap items and historical investor-material references.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- Lucide React icons
- Next.js Image component
- React Hook Form
- Zod
- Vitest

## Project Structure

- `src/app/` - App Router pages and metadata
- `src/components/` - Reusable UI components
- `src/data/` - Shared site content and image paths
- `src/lib/` - SEO, environment, contact validation, and contact helpers
- `docs/` - Production audit, deployment notes, and confirmation checklist
- `public/images/medx/` - MedX website image assets
- `AI_IMAGE_PROMPTS.md` - Premium AI image-generation prompts for final image production

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The current build exports static assets to `dist/` and then prepares the Sites worker bundle for `/api/health` and `/api/contact`.

## Verify

```bash
npm run lint
npm run typecheck
npm run test:run
npm run build
```

Or run all checks:

```bash
npm run verify
```

## Deploy to Vercel

1. Push this project to a Git repository.
2. In Vercel, create a new project and select the repository.
3. Configure the environment variables from `.env.example`.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

## Image Assets

The site references images from `/public/images/medx/`:

- `medx-hero-healthcare-africa.jpg`
- `medx-diagnostics-lab.jpg`
- `medx-pharmaceutical-supply.jpg`
- `medx-medical-devices.jpg`
- `medx-cervical-cancer-screening.jpg`
- `medx-cancer-care-center.jpg`
- `medx-digital-health-dashboard.jpg`
- `medx-supply-chain-network.jpg`
- `medx-research-innovation.jpg`
- `medx-bahir-dar-healthcare.jpg`
- `medx-africa-health-map.jpg`
- `medx-hospital-partnership.jpg`

Current files are AI-generated conceptual corporate healthcare photography. Do not describe them as verified MedX facilities, personnel, partners, or equipment unless approved by the company.

## Routes

- `/`
- `/about`
- `/services`
- `/public-health`
- `/strategy`
- `/partners`
- `/contact`
- `/privacy`
- `/terms`
- `/accessibility`
- `/thank-you`

Historical board and historical relationship cards are hidden by default. Use `NEXT_PUBLIC_SHOW_HISTORICAL_BOARD=true` or `NEXT_PUBLIC_SHOW_HISTORICAL_RELATIONSHIPS=true` only for controlled review.

## Contact Form

The contact form validates on the frontend and server layer. In the current static export/Sites deployment flow, the generated worker handles:

- `GET /api/health`
- `POST /api/contact`

Email delivery requires `CONTACT_TO_EMAIL`, `RESEND_API_KEY`, and `RESEND_FROM_EMAIL`. If those values are missing, the endpoint fails safely and does not pretend the inquiry was sent. Optional Turnstile and Supabase variables are listed in `.env.example`.
