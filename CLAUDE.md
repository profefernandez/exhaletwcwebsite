# Exhale TWC - Therapy Practice Website

## Project Overview
Professional therapy website for Exhale TWC, specializing in individual and online therapy. Built with React 19 + TypeScript + Vite + Tailwind CSS 4.

## Tech Stack
- **Framework:** React 19.2.4 + TypeScript 5.9.3
- **Build:** Vite 8.0.1 with @vitejs/plugin-react
- **Styling:** Tailwind CSS 4.2.2 (via Vite plugin, no tailwind.config file)
- **Routing:** React Router DOM 7.13.2
- **Backend:** Directus CMS (via Axios, configured in src/services/api.ts)
- **Sanitization:** DOMPurify 3.3.3
- **SEO:** React Helmet Async 3.0.0

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check

## Color Tokens (defined in src/index.css)
- Primary: `#953fcf` (--color-purple-primary)
- Secondary: `#8b54d7` (--color-purple-secondary)
- Light: `#edd2ff` (--color-purple-light)
- Mid: `#787ee7` (--color-purple-mid)
- Blue accent: `#6dd2ff` (--color-blue-light)

## Design Guidelines
- Use the `exhale-ui-design` skill for all UI work
- Mobile-first responsive design
- WCAG AA accessibility minimum
- Professional, calming, trustworthy aesthetic
- HIPAA-aware (no client data exposure)

## Key Patterns
- Pages use React Helmet for SEO metadata
- Contact form uses useContactForm hook with DOMPurify sanitization
- Form submission currently simulated (backend not connected yet)
- All inputs sanitized on change via sanitizeText()
- Button component: 3 variants (primary/secondary/outline), 3 sizes (sm/md/lg)
- Card component: white bg, rounded-2xl, shadow-md with hover effect
