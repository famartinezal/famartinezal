# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This repo is a GitHub profile repo for **Fredy Martínez** (famartinezal). It contains:

- `README.md` — GitHub profile page (rendered on github.com/famartinezal)
- `portfolio/` — Personal portfolio site built with Astro + Tailwind CSS

---

## Portfolio project (`portfolio/`)

### Commands

```bash
cd portfolio

npm install        # install dependencies (requires Node 18+)
npm run dev        # dev server → http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

There are no tests or linters configured yet.

### Deployment

The portfolio deploys automatically to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.

Before deploying, update `astro.config.mjs`:
```js
site: 'https://famartinezal.github.io',
base: '/portfolio',   // or '/' if using a custom domain
```

GitHub Pages must be configured to use **GitHub Actions** as the source (repo Settings → Pages).

### Architecture

All site content lives in a single file: **`src/data/portfolio.ts`** — exports `personal`, `projects`, `skills`, and `experience`. Editing this file is the only thing needed to update the site content.

**Data flow:**
```
src/data/portfolio.ts
  └── imported by each component
        └── assembled in src/pages/index.astro
              └── wrapped by src/layouts/Layout.astro
```

**Layout.astro** handles: Google Fonts loading (`Inter` + `JetBrains Mono`), SEO meta tags, the ambient background mesh, noise texture overlay, and the global `IntersectionObserver` scroll-reveal system (`[data-reveal]` attributes trigger CSS class `revealed`).

**Scroll reveal convention:** add `data-reveal` to any element to animate it in on scroll. Stagger children with `data-reveal-delay="1"` through `"6"` (each adds 0.1s delay).

### Design tokens (tailwind.config.mjs)

| Token | Value | Usage |
|---|---|---|
| `surface` → `surface-4` | `#0d0d0f` → `#26262f` | Background layers |
| `accent` | `#7c3aed` | Buttons, highlights |
| `accent-light` | `#a78bfa` | Text on dark, icons |
| `subtle` | `#9ca3af` | Body text |
| `muted` | `#6b7280` | De-emphasized text |
| `border` | `rgba(255,255,255,0.07)` | Card/input borders |

Global CSS utilities defined in `Layout.astro` `<style is:global>`: `.text-gradient`, `.text-gradient-subtle`, `.glow-accent`, `.glow-accent-strong`.
