# NDE HealthTech Solutions — Website

Corporate website for NDE HealthTech Solutions LLC, a healthcare IT, cloud engineering, and cybersecurity consulting firm based in Venus, TX (DFW Metroplex).

## Stack

- **Framework**: React 18 + TypeScript
- **Build**: Vite
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Routing**: wouter
- **Deployment**: Vercel (GitHub auto-deploy)

## Local Development

```bash
pnpm install
pnpm dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend API key for contact form email delivery |
| `CONTACT_TO_EMAIL` | Destination email for consultation requests, usually contracts@ndehealthtech.com |
| `RESEND_FROM_EMAIL` | Verified sender address for Resend. Use onboarding@resend.dev only for testing. |
| `VITE_ANALYTICS_ENDPOINT` | Umami analytics instance URL |
| `VITE_ANALYTICS_WEBSITE_ID` | Umami website ID |

## Deployment

Push to `main` branch → Vercel auto-deploys. Set environment variables in the Vercel dashboard under **Settings → Environment Variables**.

## Project Structure

```
client/
├── index.html              # SEO meta tags, structured data, font loading
├── public/
│   ├── assets/             # Logo, SVG illustrations, PDF capability statement
│   ├── team/               # Team headshot photos
│   ├── robots.txt          # Search engine crawl rules
│   └── sitemap.xml         # XML sitemap (update URLs if domain changes)
└── src/
    ├── App.tsx             # Router — maps paths to page components
    ├── hooks/
    │   ├── useSEO.ts       # Per-page title/meta/canonical updates
    │   └── useMobile.tsx   # Responsive breakpoint detection
    └── pages/
        └── RedesignMockups.tsx  # All page layouts (home, services, etc.)
```

## Business Details

- **CAGE Code**: 209X4
- **UEI**: G7YUFGEZBHP4
- **SAM.gov**: Active registration
- **Location**: Venus, Texas (DFW Metroplex)
- **Email**: contracts@ndehealthtech.com
- **LinkedIn**: https://www.linkedin.com/company/123453939/
