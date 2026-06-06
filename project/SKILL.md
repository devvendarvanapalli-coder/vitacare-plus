---
name: vitacare-plus-design
description: Use this skill to generate well-branded interfaces and assets for VitaCare Plus, a premium chronic-disease-management healthcare app (India), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, icon system, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill first — it is the full design guide (product context, content fundamentals, visual foundations, iconography) and a manifest of everything available.

Then explore the other files:
- `styles.css` — the single CSS entry point; `@import` it (or copy `tokens/*.css`) to get every color, type, spacing, radius, shadow and motion token as CSS custom properties.
- `tokens/` — token sources (`colors.css`, `typography.css`, `spacing.css`, `fonts.css`).
- `components/core/` — reusable React primitives (Button, Card, Badge, Avatar, Chip) with `.d.ts` props and `.prompt.md` usage notes.
- `ui_kits/patient-app/` — a self-contained, clickable recreation of the patient mobile app (login → dashboard → appointments → membership → SOS). Read `vc-ui.jsx` for token-accurate primitive implementations and the `screen-*.jsx` files for real layouts and product copy.
- `guidelines/cards/` — foundation specimen cards (colors, type, spacing, brand).
- `assets/` — `logo-mark.svg`, `logo-lockup.svg`.

Icons: Material Symbols Rounded, delivered as inline SVG via Iconify — load `https://code.iconify.design/3/3.1.1/iconify.min.js` and use `<span class="iconify" data-icon="material-symbols:NAME-rounded">` (or `-outline-rounded` for rest states). Font: Inter (Google Fonts).

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files for the user to view — the `ui_kits/patient-app` JSX is the best reference for layout, spacing and copy. If working on production code, copy assets and apply the rules here to design as an expert in this brand.

If the user invokes this skill without other guidance, ask them what they want to build or design, ask a few clarifying questions, then act as an expert designer who outputs HTML artifacts _or_ production code depending on the need.
