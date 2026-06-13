# Vitalis — Premium Medication Landing

## Context

Vitalis is a premium medication sales company. Its market positioning emphasizes scientific rigor, pharmaceutical-grade quality, and trustworthy wellness. The brand voice is calm, authoritative, and modern. The audience expects a high-end experience comparable to luxury skincare or boutique health brands.

This repository hosts a purely presentational marketing landing page. There is no backend, no auth, no e-commerce surface here — only a static, polished front door.

## Stack

- Vite (build tool)
- React 18 + TypeScript (strict mode, no `any`)
- TailwindCSS (utility-first, custom design tokens)
- Mobile-first responsive design
- Semantic HTML + a11y baseline (ARIA where needed, contrast AA+, keyboard reachable)

## Language Policy

- Source code, identifiers, comments, commit messages, docs: English.
- User-facing UI copy: Spanish (Mexico).

## Design System (corporate palette)

Premium pharmaceutical aesthetic — deep emerald conveys vitality and health, sage softens, champagne gold signals premium tier, cream neutrals carry whitespace, charcoal provides accessible text contrast.

| Token                       | Hex       | Role                        |
| --------------------------- | --------- | --------------------------- |
| `primary` (vitalis-emerald) | `#0F6B47` | Brand, CTAs                 |
| `primary-deep`              | `#0A4D33` | Hover, depth                |
| `secondary` (sage)          | `#B5D5C4` | Backgrounds, illustrations  |
| `accent` (champagne)        | `#C9A961` | Premium accents, highlights |
| `surface-cream`             | `#FAF7F2` | Page background             |
| `surface-bone`              | `#F1ECE3` | Section alternates          |
| `ink`                       | `#1A2421` | Headings, body              |
| `ink-muted`                 | `#4A5853` | Secondary text              |

## Component Architecture (SOLID, Single Responsibility per file)

```
src/
  components/
    layout/      (Header, Footer)
    sections/    (Hero, ValueProps, Products, Science, Testimonials, CTA)
    ui/          (Button, Container, Badge, IconLeaf, IconShield, IconMolecule)
  data/          (static content arrays in Spanish)
  styles/        (globals.css)
  App.tsx        (composition only)
  main.tsx
```

Each component:

- One file, one responsibility.
- Props typed explicitly, no implicit `any`.
- Pure presentational — no side effects, no state beyond local UI.

## Execution Plan

1. **Bootstrap** Vite + React + TS (strict).
2. **Install** Tailwind v4 via `@tailwindcss/vite` + PostCSS.
3. **Tokenize** palette + typography + spacing in `tailwind.config.ts`.
4. **Compose** semantic page: `<header>`, `<main>` with `<section>` per concern, `<footer>`.
5. **Polish** with subtle CSS transitions (hover lift, fade-in on scroll via CSS-only `@starting-style`-style techniques), generous whitespace, large editorial typography.
6. **Verify** `tsc --noEmit`, `eslint`, `vite build`.
7. **Version** init git, push to GitHub via `gh`.
8. **Deploy** `vercel --prod` to production.

## Definition of Done

- `tsc --noEmit` clean.
- `vite build` succeeds.
- Lighthouse-friendly markup (semantic, single `<h1>`, alt text, focus states).
- Deployed Vercel URL accessible.
