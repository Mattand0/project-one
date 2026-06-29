# Meridian Motors

A single-page React site for a fictional high-end classic car dealership.
Dark, cinematic, editorial — deep blacks, gold accents, serif type. The core
mechanic is a parallax scroll journey that reveals five intimate car details
before the full collection appears.

## Tech stack

- **React** (Vite)
- **Tailwind CSS** — design tokens (`canvas`, `surface`, `gold`, `cream`, `dim`)
- **Framer Motion** — scroll-driven parallax + entrance animations
- **react-intersection-observer** — scroll-triggered animations

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run preview  # preview the production build
```

## Structure

```
src/
├── components/
│   ├── Nav.jsx              # fixed bar, blurs on scroll
│   ├── Hero.jsx             # full-viewport hero + rotating decorative wheel
│   ├── ParallaxSection.jsx  # reusable per-detail parallax section
│   ├── Inventory.jsx        # car card grid
│   ├── CarCard.jsx
│   └── CTA.jsx
├── data/
│   └── cars.js              # static inventory data
├── App.jsx                  # composes the page + section data
├── main.jsx
└── index.css                # global styles + scroll-indicator keyframe
```

## Notes

- Images use [picsum.photos](https://picsum.photos) placeholder URLs — no assets
  to download; they render directly in the browser.
- Parallax is driven by Framer Motion's `useScroll` + `useTransform`. The image
  is scaled to `1.15` so its drift never exposes the pane edges.
- On screens ≤ 768px the parallax sections stack (image on top, fixed height)
  and the y-transform is effectively neutralized by the stacked layout.
- Single page, no routing, no backend.
