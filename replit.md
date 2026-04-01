# Alex Morrow – Graphics & Motion Design Portfolio

A single-page portfolio website for a graphics and motion graphics designer.

## Tech Stack

- **Runtime:** Node.js 22 (v22.22.0)
- **Package Manager:** pnpm 10.20.0
- **Framework:** Vue 3 (v3.4.21)
- **Build Tool:** Vite 5
- **Animation:** GSAP 3 with ScrollTrigger
- **Utilities:** @vueuse/core
- **Fonts:** Syne (headings), Inter (body) via Google Fonts

## Project Structure

```
src/
  App.vue                      - Root component
  main.js                      - Entry point
  style.css                    - Global CSS variables and base styles
  components/
    NavBar.vue                 - Fixed nav with mobile menu
    HeroSection.vue            - Hero with GSAP animations, rotating rings, marquee
    AboutSection.vue           - About with skill bars and awards
    WorkSection.vue            - Filterable portfolio grid
    ServicesSection.vue        - Services grid with CTA
    ContactSection.vue         - Contact form with budget selector
    FooterSection.vue          - Footer with nav links
```

## Design

- Dark theme (`#080808` background, `#c8f542` accent)
- Syne font for display headings, Inter for body
- GSAP ScrollTrigger animations throughout
- Responsive for mobile, tablet, desktop

## Running the App

```
pnpm dev
```

Runs on `http://0.0.0.0:5000` — configured in `vite.config.js`.

## Workflow Command

```
pnpm dev
```

Port: 5000, Host: 0.0.0.0, allowedHosts: true (for Replit proxy).
