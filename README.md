# SeaFlint Landing Page

Marketing landing page for **SeaFlint** — a machine-learning platform that reads a vessel's
sensor data to pinpoint the optimal hull-cleaning window, cutting fuel use and emissions.

Built with [Next.js](https://nextjs.org/) (App Router), TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server                 |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

## Project structure

```
app/
  layout.tsx        Root layout: fonts, metadata, global styles
  page.tsx          Composes the page sections
  globals.css       Tailwind entry + custom styles
components/
  Header.tsx            Sticky nav, scroll behavior, mobile menu (client)
  Hero.tsx              Hero section
  TrustedBy.tsx         Partner logos
  Features.tsx          Feature grid
  About.tsx             About section
  DashboardCarousel.tsx Auto-playing preview carousel (client)
  Team.tsx              Team grid
  Research.tsx          Research paper card
  RegisterModal.tsx     "Request Access" modal (client)
  RegisterContext.tsx   Context to open/close the modal
  RevealObserver.tsx    Scroll-reveal animations (client)
  Footer.tsx            Footer
public/assets/        Images and favicon
tailwind.config.ts    Design tokens (colors, spacing, type scale)
```

## Notes

- The design system (colors, spacing, typography) lives in `tailwind.config.ts`.
- The "Request Access" form opens the visitor's mail client with a pre-filled message to
  `seaflint@soton.ac.uk`.
