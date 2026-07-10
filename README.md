# MedX Healthcare Solutions Website

Professional corporate website for MedX Healthcare Solutions, a Bahir Dar-based healthcare corporation focused on diagnostics, pharmaceutical supply, medical devices, cervical cancer screening, cancer care expansion, supply chain solutions, digital health, research, innovation, and local healthcare manufacturing.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- Lucide React icons
- Next.js Image optimization

## Project Structure

- `src/app/` - App Router pages and metadata
- `src/components/` - Reusable UI components
- `src/data/` - Shared site content and image paths
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

## Lint

```bash
npm run lint
```

## Deploy to Vercel

1. Push this project to a Git repository.
2. In Vercel, create a new project and select the repository.
3. Use the default Next.js framework settings.
4. Build command: `npm run build`
5. Output directory: `.next`
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

Current files are clean generated fallback assets so the website does not ship with broken image paths. Replace them with final AI-generated corporate healthcare photography before public launch.

## Contact Form

The contact form performs frontend validation and shows a success message after submission. It does not send email yet. Connect a backend API route, CRM, or form service before production use.
