# Alex Morrow – Graphics & Motion Design Portfolio

A single-page portfolio website for a graphics and motion graphics designer.

## Tech Stack

- **Runtime:** Node.js 22 (v22.22.0)
- **Package Manager:** pnpm 10.20.0
- **Framework:** Vue 3 (v3.4.21)
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS v3.4.3 (with PostCSS + Autoprefixer)
- **Animation:** GSAP 3 with ScrollTrigger
- **Utilities:** @vueuse/core
- **Fonts:** Syne (headings), Inter (body) via Google Fonts

## Project Structure

```
src/
  App.vue                      - Root component
  main.js                      - Entry point
  style.css                    - Tailwind directives (@tailwind base/components/utilities) + minimal keyframe CSS
  components/
    NavBar.vue                 - Fixed nav with mobile menu (Tailwind)
    HeroSection.vue            - Hero with GSAP animations, rotating rings, marquee (Tailwind)
    AboutSection.vue           - About with skill bars and awards (Tailwind)
    WorkSection.vue            - Filterable portfolio grid (Tailwind)
    ServicesSection.vue        - Services grid with CTA (Tailwind)
    ContactSection.vue         - Contact form with budget selector (Tailwind)
    FooterSection.vue          - Footer with nav links (Tailwind)
tailwind.config.js             - Custom colors, fonts, animations, keyframes
postcss.config.js              - PostCSS with Tailwind + Autoprefixer
```

## Tailwind Custom Tokens

| Token | Value |
|---|---|
| `bg-bg` | `#080808` |
| `bg-bg-2` | `#101010` |
| `bg-bg-card` | `#141414` |
| `text-accent` / `bg-accent` | `#c8f542` |
| `text-heading` | `#f0f0f0` |
| `border-border` | `#1e1e1e` |
| `font-syne` | Syne sans-serif |
| `font-inter` | Inter sans-serif |

## Design

- Dark theme with lime-green (`#c8f542`) accent
- All components styled entirely with Tailwind utility classes
- GSAP ScrollTrigger animations on scroll
- Responsive for mobile, tablet, desktop

## Running the App

```
pnpm dev
```

Runs on `http://0.0.0.0:5000` — configured in `vite.config.js`.
