# Montana Landscaping

**Texas-Built Landscapes. Veteran-Led Precision.**

A modern, high-performance landing page for Montana Landscaping — built with Next.js, Tailwind CSS, and Framer Motion. Designed for speed, mobile responsiveness, and seamless Vercel deployment.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0050?logo=framer)
![Node](https://img.shields.io/badge/Node-20+-339933?logo=node.js)

---

## Features

- **Splash Screen** — Full-screen animated logo intro with Framer Motion (fade-in + scale + gold glow). Plays once per page refresh.
- **Hero Section** — Bold headline, subheadline, and dual CTAs over a charcoal-to-black gradient.
- **Services Grid** — 6 responsive service cards with scroll-triggered staggered animations.
- **Authority Section** — Full-width background image with dark overlay, parallax-like effect on desktop, and CTA.
- **Performance** — `next/image` everywhere, no layout shift, mobile responsive.
- **Tailwind v4** — CSS-based theme with brand colors (`brandRed`, `brandGold`, `brandCharcoal`, `brandBlack`, `brandLight`).

## Tech Stack

| Technology | Purpose |
| --- | --- |
| [Next.js 16](https://nextjs.org) (App Router) | Framework & SSR/SSG |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first styling |
| [Framer Motion 12](https://www.framer.com/motion/) | Animations |
| [TypeScript](https://www.typescriptlang.org) | Type safety |

## Project Structure

```
src/app/
├── globals.css                 # Tailwind theme & global styles
├── layout.tsx                  # Root layout with metadata & fonts
├── page.tsx                    # Home page with splash state control
└── components/
    ├── SplashScreen.tsx        # Full-screen animated logo intro
    ├── Hero.tsx                # Headline, subheadline, CTAs
    ├── Services.tsx            # 6-card responsive service grid
    └── AuthoritySection.tsx    # Background image section with overlay
public/
├── logo.png                    # Main brand logo (splash screen)
└── logo2.png                   # Company work showcase (authority section)
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Deploy on Vercel

This project is optimized for one-click deployment on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFeeTheDeveloper%2Fmontana_landscaping-site)

Or connect your GitHub repo directly in the [Vercel Dashboard](https://vercel.com/new) — no additional configuration required.

### Environment

- **Framework Preset:** Next.js (auto-detected)
- **Build Command:** `next build`
- **Output Directory:** `.next`
- **Node.js Version:** 20.x

## Brand Colors

| Token | Hex | Usage |
| --- | --- | --- |
| `brand-red` | `#B11226` | Accents, CTA buttons |
| `brand-gold` | `#CFA23D` | Primary highlights, buttons |
| `brand-charcoal` | `#1C1C1C` | Backgrounds, cards |
| `brand-black` | `#000000` | Page background |
| `brand-light` | `#F5F5F5` | Text, light elements |

## License

Private — Montana Landscaping. All rights reserved.
