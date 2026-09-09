# NATD — Najd Academy of Technology & Design — Site Spec

Fictional Saudi higher-education institution. `www.natd.gov.sa`. This spec drives the implementation in this repo.

## 1. Brand System

| Token | Value | Usage |
|---|---|---|
| `--color-maroon` | `#47131D` | Primary brand color: header bg, primary buttons, active states, footer |
| `--color-sand` | `#AB937F` | Accent: secondary buttons, borders, highlights, icons |
| `--color-canvas` | `#F2F4F3` | Page background, card surfaces |
| `--color-ink` | `#161313` | Primary text |
| Typeface | `Inter` (Google Fonts, `wght` 400–800) | All UI text (Latin). Arabic uses `IBM Plex Sans Arabic` as the RTL companion since Inter has no Arabic glyphs. |

Supporting tones (derived, not primary tokens): `--color-maroon-tint` (maroon @ 8% on canvas for section backgrounds), `--color-ink-muted` (ink @ 65% for secondary text), `--color-line` (ink @ 10% for hairlines).

Radii: 12px (cards), 999px (pills/buttons). Shadows: soft, low-opacity maroon-tinted (`0 20px 40px -20px rgba(71,19,29,0.35)`), used sparingly on elevated cards.

## 2. Headline & Voice

Primary headline: **"Learn. Design. Build."** — used as the hero headline (EN) and its Arabic equivalent **"تعلّم. صمّم. ابنِ."** as the hero headline (AR). Voice: confident, precise, institutional but not stiff — Vision 2030-aligned ("Knowledge Economy", "Human Capability Development").

## 3. Languages & Direction

- English (LTR) and Arabic (RTL), toggle in navbar (`EN` / `عربي`).
- `<html dir>` and `lang` flip on toggle; layout mirrors via CSS logical properties (`margin-inline-start`, `text-align: start`, flex `flex-row` reversed by `dir`), not manual `[dir=rtl]` overrides where avoidable.
- Persisted in `localStorage`.
- All copy lives in `src/i18n/en.ts` / `src/i18n/ar.ts` dictionaries — no hardcoded strings in components.

## 4. Site Map (multi-page, React Router)

1. **Home** (`/`) — Hero, stats strip, program highlights (4-col grid), "Why NATD" pillars (Vision2030-aligned), campus life teaser, CTA band.
2. **Programs** (`/programs`) — Filterable grid of academic programs (College of Engineering & Robotics, College of Design & Digital Arts, College of Computing & AI, College of Architecture & Urban Design), 3/4-col adaptive grid of `ProgramCard`.
3. **Admissions** (`/admissions`) — Timeline/steps, requirements, key dates, CTA to apply, FAQ accordion.
4. **Campus Life** (`/campus-life`) — Gallery-style media grid (masonry-like), student life pillars (labs, majlis-style collaboration spaces, prayer facilities, maker spaces).
5. **About** (`/about`) — Mission, Vision 2030 alignment section, leadership grid, timeline/milestones.
6. **Contact** (`/contact`) — Contact form (client-side only, no backend), map placeholder, campus info, social links.

Shared: `Navbar` (drawer on mobile), `Footer`, `LanguageToggle`, `ScrollProgress` (optional subtle top bar).

## 5. Responsive Rules

- Mobile-first breakpoints (Tailwind defaults): base (<640px) 1-col; `sm`/`md` (≥640–1024px) 2-col; `lg` (≥1024px) 3-col; `xl` (≥1280px) 4-col where content supports it (program grid, campus gallery).
- Navbar: inline links ≥1024px; below that, hamburger opens a right-side (left-side in RTL) sliding drawer with glass background, focus-trapped, closes on route change/Esc.
- Typography scales with `clamp()` (e.g. hero `clamp(2.25rem, 5vw + 1rem, 4.5rem)`), not fixed breakpoint overrides.

## 6. Motion & Interactivity

- **Entrance transitions**: sections/cards animate `opacity 0→1` + `translateY(24px→0)` on scroll into view (IntersectionObserver-driven, respects `prefers-reduced-motion`).
- **3D tilt**: `ProgramCard`/media cards tilt on pointer move using `perspective` + `rotateX/rotateY` transforms, capped to a small angle (≤8deg), reset on pointer leave.
- **Glassmorphism**: navbar-on-scroll, drawer panel, and stat/FAQ cards use `backdrop-filter: blur(16px)` + translucent surface + hairline border.

## 7. Cultural Authenticity Requirement

Every visual slot's placeholder prompt text must explicitly depict authentic Saudi representation — professional Saudi men and women in modern attire (including thobe, shemagh/ghutra, abaya with modern styling) actively engaged with advanced technology (AR/VR headsets, stylus-driven design tablets, robotics arms, CNC/fabrication tools, AI dashboards). No generic stock-photo framing; specify setting, subject, wardrobe, tech, and mood in every prompt.

## 8. AI Media Container Component

`<MediaPlaceholder>` renders a structured block (not an `<img>`):
- Fixed aspect ratio (`16/9`, `4/3`, `1/1`, `3/4` as needed) via CSS `aspect-ratio`.
- Diagonal-hatch or gradient placeholder background in brand tones.
- Small pill labeling the intended aspect ratio and shot type (e.g. "16:9 · Editorial").
- Overlaid prompt text block (the actual Midjourney/DALL-E prompt), monospace, legible on hover/focus or always-visible depending on density.
- `data-replace-with-real-image="true"` and a `promptId` so a future pass can script-swap in real assets without touching layout.

## 9. Component Inventory

`Navbar`, `MobileDrawer`, `LanguageToggle`, `Footer`, `Hero`, `SectionHeading`, `StatStrip`, `ProgramCard`, `ProgramGrid`, `PillarCard`, `MediaPlaceholder`, `Timeline`, `FAQAccordion`, `LeadershipCard`, `CTASection`, `ContactForm`, `Reveal` (entrance-animation wrapper).

## 10. Tech Stack

Vite + React + TypeScript, React Router v6, Tailwind CSS v4 (tokens wired as CSS variables + Tailwind theme extension), Framer Motion for entrance/tilt where it simplifies code, custom lightweight i18n context (no heavy i18next dependency needed at this scope).
