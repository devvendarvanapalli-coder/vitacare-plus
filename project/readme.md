# VitaCare Plus — Design System

A design system for **VitaCare Plus**, a premium mobile healthcare app for **chronic disease management** in India. The product helps patients track vitals (glucose, HbA1c, weight, blood pressure), manage medications, book video & in-clinic appointments, hold teleconsultations, subscribe to membership tiers, and trigger emergency SOS — with companion dashboards for doctors and admins.

This repo packages the brand's **visual foundations** (color, type, spacing, motion), **reusable React components**, a **product UI kit**, and **usage guidance** so design agents can produce on-brand VitaCare Plus screens, prototypes and marketing assets.

## Source material

Built by reading the product's own source. Explore these to go deeper:

- **vitacare-app** (Flutter client) — https://github.com/devvendarvanapalli-coder/vitacare-app · branch `claude/eloquent-newton-Tl78C`, source under `lib/`. Theme source of truth: `lib/core/theme/{app_colors,app_text_styles,app_theme}.dart`; primitives under `lib/core/widgets/`; screens under `lib/features/`.
- **vitacare-backend** (Node/Express + Prisma) — https://github.com/devvendarvanapalli-coder/vitacare-backend · branch `claude/eloquent-newton-Tl78C`. Modules reveal the product surface area: `auth`, `diabetes` (flagship), `anemia`, `arthritis`, `hairLoss`, `orthopaedics`, `appointments`, `teleconsultation` (Agora), `payments` (Razorpay), `prescriptions`, `complications`, `sos`.

> The Flutter app loads **Inter** via the `google_fonts` package and uses **Material Icons** — there are no font/icon binaries in the repo. This system loads Inter from Google Fonts and substitutes **Material Symbols Rounded** for icons (see Iconography). Swap in self-hosted binaries to fully decouple from the CDN.

---

## Product context

VitaCare Plus is built around **chronic-care modules**. The flagship is **Diabetes** (glucose/HbA1c logging, complication-risk tracking, trend charts); siblings cover **Vitamin D, Arthritis, Anemia, Orthopaedics, Hair Loss, Women's Health** and **Reports**. Cross-cutting features:

- **Dashboard** — greeting header, health-overview metric strip, active alerts, upcoming appointment, today's medications, module grid.
- **Appointments & Teleconsultation** — video (Agora) or in-clinic, booked from a bottom sheet.
- **Membership** — Silver ₹499 / **Gold ₹999** (most popular) / Platinum ₹1999 per month, billed via Razorpay, inclusive of 18% GST.
- **Emergency SOS** — one-tap call to **108** (India emergency services), GPS share, family alerts, emergency medication & blood-group card.

Three roles exist: **patient** (primary), **doctor**, **admin**.

---

## Content fundamentals

How VitaCare Plus writes:

- **Voice — warm, reassuring, second person.** Speaks to "you/your": "Sign in to continue *your* health journey", "*Your* plan is active", "Press & Hold for Emergency". Encouraging, never alarmist — even the SOS screen reads "Help is on the way."
- **Casing — Title Case for titles & buttons**, sentence case for body and helper text. UPPERCASE only for short tracked labels and tier names ("GOLD MEMBER", "MOST POPULAR", "SOS ACTIVE").
- **Clinical but plain.** Uses real medical units and terms (HbA1c, mg/dL, mmHg, "fasting", "Metformin 500mg") without dumbing down, but pairs them with friendly framing ("from last month", "1 before breakfast").
- **Indian context throughout.** ₹ pricing, `+91` phone prefix, **108** emergency number, 18% GST, Razorpay checkout, Indian doctor names (Dr. Priya Sharma, Dr. Rajesh Gupta).
- **Concise & scannable.** Short section headers ("Health Overview", "Today's Medications", "Active Alerts") each paired with a quiet text action ("See All", "Manage", "View all"). Greetings adapt to time of day ("Good Morning/Afternoon/Evening").
- **No emoji.** Meaning is carried by Material icons + color, never emoji. Status is words + color ("Confirmed", "Pending", "Taken").
- **Numbers lead.** Metric cards put the big number first with a small unit and a percentage delta vs. last period.

---

## Visual foundations

- **Color.** Cool, clinical, trustworthy. **Primary blue `#2563EB`** (blue-600) with a `#1D4ED8` gradient end and `#EFF6FF` tint surface; **secondary teal `#0D9488`**. Neutrals are a **slate ramp** (`#0F172A` text → `#F8FAFC` background). Semantic: success `#059669`, warning/gold `#D97706`, error/SOS `#DC2626`. Each tracked vital owns a fixed accent (glucose blue, HbA1c teal, weight purple `#7C3AED`, BP orange `#EA580C`, heart-rate red). A full **dark theme** mirrors every alias under `[data-theme="dark"]` on a near-black navy (`#050D1A`) with navy cards (`#0F1E35`).
- **Type.** A single typeface — **Inter** — across six weights (400–900). Large sizes carry tight negative tracking (display 32/800/`-0.5`, headline 24/700/`-0.3`, metric 28/800/`-1`); body is 14/400 at a generous **1.6 line-height**; labels are 11/600 UPPERCASE with `+0.8` tracking. Numbers render tabular.
- **Spacing.** Strict **4px grid** (4/8/12/16/20/24/32/40). **20px** is the default screen gutter; cards pad 16; sheets and dialogs pad 20–24.
- **Corners.** Chips 8 · icon tiles 10 · **buttons & inputs 12** · **cards 16** · sheets/logo/plan cards 20 · badges fully pill (999).
- **Elevation.** Soft, low shadows — cards use `0 2px 12px rgba(0,0,0,.06)`; popovers `0 4px 20px /.08`; the bottom nav floats with an upward `0 -4px 20px /.08`. Gradient elements glow in their own hue (primary button = blue 35%, SOS = red 40%, gold = amber 30%). Dark theme drops shadows in favor of a 1px translucent-blue border.
- **Cards.** Rounded 16px white surfaces with a soft shadow and no border in light mode; in dark mode, no shadow + a hairline translucent-blue border. Hero cards swap the fill for a diagonal **135° gradient**, white text, and a colored glow.
- **Backgrounds.** Mostly flat (`#F8FAFC`). The only ambient treatment is on auth screens: a slow-drifting **radial gradient** plus large, soft, low-opacity decorative circles (no photography, no patterns, no noise). No full-bleed imagery in-product.
- **Gradients.** Always diagonal top-left → bottom-right (135°). Reserved for: primary/secondary/danger buttons, hero cards, the membership tier headers (silver/gold/platinum), avatars and the logo mark.
- **Iconography.** Material, rounded — outlined at rest, filled when active. See Iconography below.
- **Motion.** Quick and physical. **Press states shrink** (buttons → 0.97 over 100ms, cards → 0.98 over 150ms); color/size changes animate at 200ms ease. Signature moments: the SOS button emits **staggered pulsing rings**; the auth logo enters with an **elastic-out** scale; lists use shimmer skeletons while loading. No infinite decorative loops on content.
- **Hover/press.** Touch-first: the primary feedback is the press-shrink + the gradient glow. Selected chips/cards gain a 10% tint fill and a colored 1.5px border.
- **Transparency.** Used as **color tints** — backgrounds are a 10–12% alpha of a semantic/accent color behind a solid-color label or icon (badges, alert icon tiles, status pills, action cards). Sparing use of blur.

---

## Iconography

- The app uses Flutter's built-in **Material Icons** in the **rounded** style (`Icons.home_rounded`, `Icons.water_drop_outlined`, `Icons.favorite_rounded`, …), generally **outlined at rest** and **filled for the active/selected** state (e.g. bottom-nav items swap outlined→filled on selection).
- No custom icon font, SVG sprite, or PNG icons ship in the repo, and **no emoji or unicode glyphs** are used as icons anywhere.
- **Substitution (flagged):** this system renders the **Material Symbols Rounded** set as the closest 1:1 match (same names, same rounded geometry), delivered as **inline SVG via Iconify** so icons rasterize reliably everywhere (live app, Design System thumbnails, PDF/PNG/PPTX export). Load it once per page:
  ```html
  <script src="https://code.iconify.design/3/3.1.1/iconify.min.js"></script>
  ```
  Then drop placeholders that Iconify auto-replaces with inline SVG: `<span class="iconify" data-icon="material-symbols:home-rounded"></span>`. Use `…-rounded` for filled (active) and `…-outline-rounded` for outlined (rest). Sizing/color follow `font-size`/`color`. Common glyphs: `home, grid-view, calendar-today, person, water-drop, favorite, monitor-weight, bloodtype, videocam, medication, workspace-premium, notifications, description, local-hospital, trending-up, warning, sos`. The bundled `<Button>` builds these ids from its `leadingIcon`/`trailingIcon` prop, so consuming pages only need the Iconify script.
- **Brand mark:** the logo is a **heart + ECG-pulse** glyph inside a primary-gradient rounded square (`assets/logo-mark.svg`), with a horizontal lockup in `assets/logo-lockup.svg`.

---

## What's in here (index)

| Path | What |
|---|---|
| `styles.css` | **Entry point** — link this; it `@import`s every token + font file. |
| `tokens/fonts.css` | Inter webfont (Google Fonts). |
| `tokens/colors.css` | Color primitives, semantic aliases, gradients, dark theme. |
| `tokens/typography.css` | Font family, sizes, weights, line-heights, tracking. |
| `tokens/spacing.css` | Spacing scale, radii, shadows, motion. |
| `assets/` | `logo-mark.svg`, `logo-lockup.svg`. |
| `guidelines/cards/` | Foundation specimen cards (Colors, Type, Spacing, Brand) + Dark Theme. |
| `components/core/` | React primitives: **Button, Card, Badge, Avatar, Chip, Input, BottomSheet, BottomNav**. |
| `components/health/` | Health-specific cards: **MetricCard, MedicationCard**. |
| `ui_kits/patient-app/` | Patient mobile UI kit (login → dashboard → appointments → membership → SOS). |
| `ui_kits/doctor-app/` | Doctor mobile UI kit (schedule → patients → consultation → prescription). |
| `ui_kits/admin-app/` | Admin web dashboard (overview KPIs + charts, user/doctor tables). |
| `starting-points/` | Standalone HTML starting points for key screens. |
| `SKILL.md` | Agent Skill manifest for use in Claude Code. |

### Components
**Core (`components/core/`)**
- **Button** — `primary` / `secondary` / `danger` (gradient) · `outlined` / `ghost`; sizes sm/md/lg; loading, disabled, leading/trailing icons.
- **Card** — plain surface or gradient hero (`primary`/`teal`/`gold`/`sos`); optional press.
- **Badge** — tinted status pill (info/success/warning/critical/gold).
- **Avatar** — gradient squircle/circle with initials or photo.
- **Chip** — selectable filter pill (primary/secondary accent).
- **Input** — labeled text field; focus/error states; leading/trailing icon slots; sizes sm/md/lg.
- **BottomSheet** — modal overlay from bottom; drag handle, title, close; animated in/out.
- **BottomNav** — mobile tab bar; active = filled icon + primary label; optional notification dot.

**Health (`components/health/`)**
- **MetricCard** — vital metric tile: icon tile, big number, unit, optional ±% delta badge. Fixed accent colors per vital.
- **MedicationCard** — medication row: icon tile, drug name + dosage, Taken/Pending status pill.

### UI kits
- **patient-app** — the patient-facing mobile experience inside a phone frame: animated login, dashboard, appointments with booking sheet, membership plans, and the SOS screen.
- **doctor-app** — the doctor-facing mobile experience: daily schedule, patient list with search/filter, consultation detail with vitals + notes + Rx history, prescription writing with medication autocomplete.
- **admin-app** — web dashboard (sidebar layout): KPI strip, weekly appointments bar chart, subscription breakdown, recent appointments table; Users screen with Patients/Doctors tabs, search, status filter.

### Starting points
Standalone HTML files (`starting-points/`) that can be used directly or as scaffolds:
- `patient-dashboard.html` — patient home with full dashboard inside an iOS frame.
- `appointment-booking.html` — appointments list + booking sheet.
- `doctor-consultation.html` — consultation detail → prescription flow.
- `admin-dashboard.html` — full admin web dashboard.

---

## Using this system

Link the single entry point and use the token variables:

```html
<link rel="stylesheet" href="styles.css">
```
```css
.button { background: var(--grad-primary); border-radius: var(--r-lg); box-shadow: var(--shadow-primary); }
```

Components are bundled to `window.VitaCarePlusDesignSystem_da9342` — load `_ds_bundle.js` (auto-generated) after React, then `const { Button, Card } = window.VitaCarePlusDesignSystem_da9342`.
