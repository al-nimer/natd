# NATD — Najd Academy of Technology & Design

Responsive marketing website for the fictional Najd Academy of Technology & Design (`www.natd.gov.sa`), a Saudi higher-education institution balancing Vision 2030 standards with modern UI/UX.

See [`site-spec.md`](./site-spec.md) for the full design/content spec this build follows.

## Stack

- Vite + React + TypeScript
- React Router (multi-page: Home, Programs, Admissions, Campus Life, About, Contact)
- Tailwind CSS v4 (brand tokens wired via `@theme` in `src/index.css`)
- Framer Motion (scroll entrance transitions, 3D tilt cards)
- Custom lightweight i18n context for bilingual English / Arabic (RTL) content — see `src/i18n`

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # typecheck + production build
npm run lint     # oxlint
```

## Notes

- All imagery uses structured `MediaPlaceholder` blocks (`data-replace-with-real-image="true"`) showing the intended aspect ratio and the Midjourney/DALL-E prompt to generate later — see `src/lib/mediaPrompts.ts`.
- Language/direction toggle persists to `localStorage` and flips `<html dir>` for full RTL mirroring.
