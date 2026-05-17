# Signal Force — Early Access Marketing Site

The local prototype for the Signal Force marketing and early-access site. Built as a polished, customer-facing brand surface for the Signal Force platform — an AI-powered GovCon growth intelligence service.

> Signal Force turns federal market noise into actionable growth intelligence so GovCon teams can see what is next, move first, and win more.

---

## Run it locally

Requirements: Node 18+ and npm.

```bash
npm install
npm run dev
```

Vite will open `http://localhost:5173/` automatically. The site is a single-page React application with client-side routing — refreshing on any deep route works.

Other scripts:

| Command | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server with hot module reload |
| `npm run build` | Type-check then produce a production build in `dist/` |
| `npm run preview` | Serve the production build locally on port 4173 |
| `npm run typecheck` | Run TypeScript across the project without emitting |

---

## What is in the site

A small multi-page site with a long, content-rich homepage and four supporting pages.

| Route | Purpose |
|---|---|
| `/` | Homepage — hero, anti-positioning, four intelligence layers, five capability products, SIGINT cycle, use cases, why-now, founder preview, early access CTA |
| `/capabilities` | Each of the five productized intelligence offerings in depth + report-type matrix |
| `/methodology` | The SIGINT-for-GovCon methodology: four-layer model, seven-step cycle, Question Engine, voice tenets |
| `/founder` | Sean Giehl — founder narrative, credentials, portrait, career signal blocks |
| `/access` | Early access request form (non-functional prototype — submissions are captured client-side only) |

---

## Files that matter most

```
src/
├── App.tsx                       Router + page transitions
├── main.tsx                      React entry point
├── index.css                     Tailwind layers + component utilities (.panel, .input, .tag, etc.)
├── lib/
│   ├── content.ts                Single source of truth for all on-site copy
│   └── utils.ts                  cn(), date formatters
├── components/
│   ├── Backdrop.tsx              Fixed graphite gradient + dot grid + radial glow
│   ├── Spotlight.tsx             Cursor-aware spotlight (desktop only)
│   ├── Nav.tsx                   Sticky nav + mobile sheet menu
│   ├── Footer.tsx                Transmission-style footer
│   ├── Logo.tsx                  Signal Force mark + wordmark (SVG)
│   ├── Section.tsx               Eyebrow / code / title section primitive
│   ├── Reveal.tsx                Scroll-triggered reveal (Framer Motion + viewport)
│   └── PageHeader.tsx            Hero header reused across interior pages
├── sections/                     Home-page sections (Hero, IntelLayers, Capabilities, etc.)
└── pages/                        One file per route
```

All on-site copy lives in `src/lib/content.ts`. Edit there to change product names, messaging, taglines, the founder narrative, or the capability bullets — the components read from that file.

---

## Assets used

| Asset | Source | Where it lands |
|---|---|---|
| Founder portrait | `images/founder_pic.png` | Copied to `public/assets/founder.png`, used on Founder page + Home founder preview |
| Brand color & typography direction | `images/Concept_Logos .png` | Interpreted into the Tailwind palette + Orbitron/Inter/JetBrains Mono stack |
| Logo mark | Custom SVG in `src/components/Logo.tsx` | Hand-drawn S / lightning bolt mark in the brand cobalt blue |
| Favicon | `public/favicon.svg` | Tab icon, derived from the Logo mark |
| Founder narrative | `Phrasing/Content_to_use.rtf` | Verbatim on `/founder` and excerpted on home |
| Product methodology | `signal_force_foundation.md`, `BUILD_SUMMARY_2026-05-16.md` | Interpreted into capability copy, four-layer model, seven-step cycle, voice tenets |

The original source files in the project root (`signal_force_foundation.md`, `BUILD_SUMMARY_2026-05-16.md`, `voice_and_style.md`, `start_here.md`, `Phrasing/`, `images/`) are preserved unchanged.

---

## Design system

A short orientation for anyone editing the styles.

**Color** — defined in `tailwind.config.js`:
- `ink-{700,750,800,850,900,950}` — graphite background ladder (never pitch black)
- `bone-{50,100,200,300,400,500}` — text contrast ladder
- `signal-{400,500,600,700}` — cobalt accent (from the logo concept) for highlights, links, callouts
- `amber-500` — restrained accent for "intelligence priority" tags
- `warn-500` — alert red, used sparingly

**Type**:
- `font-display` — Orbitron for headlines and wordmark
- `font-sans` — Inter for body
- `font-mono` — JetBrains Mono for codes, tags, transmission metadata

**Motion**:
- Framer Motion `Reveal` for scroll-triggered fades
- Slow CSS animations for the radar sweep, ticker, ping pulse, console caret
- A `useReducedMotion` hook respects the OS preference and silences the more expensive motion

**Components**:
- `.panel` — the workhorse surface (bordered, faint gradient, blurred background)
- `.btn-primary` / `.btn-ghost` — two-button system
- `.tag` / `.tag-signal` — operator-style metadata chips
- `.eyebrow` / `.label` — mono uppercase chips for section headers and field labels
- `.scanlines` — a subtle CRT scanline overlay on the console panels

---

## What to review first

Open `http://localhost:5173/` and look at:

1. **The hero** — radar sweep, rotating verb, signal console on the right, transmission ticker at the bottom. This sets the brand temperature for the whole site.
2. **The four-layer interactive panel** — hover or click the layer buttons on the left, watch the right panel + synthesis diagram update. This is the closest the prototype gets to showing the product's analytical method.
3. **The capabilities grid** — five report-driven product cards. Click into `/capabilities` for the depth read and the report-type matrix.
4. **`/methodology`** — the long-form read on SIGINT for GovCon. Question Engine panel and voice tenets are the most operator-grade pieces of copy on the site.
5. **`/founder`** — verify the portrait composition, credential strip, MOS-2651 callout, and the pull-quote treatment of "Signal Force was built from that experience."
6. **`/access`** — submit the form, confirm the transmission confirmation animation lands well.

---

## What would make this production-ready

The site is shippable as-is for an early-access launch, but the following would harden it:

- **Form backend.** Wire `/access` to a real intake (Formspree, Resend, a Cloudflare Worker that posts to Slack, etc.) and add reCAPTCHA or hCaptcha.
- **Image optimization.** The founder portrait is ~1.9 MB. Convert to WebP/AVIF in multiple sizes and serve via `<picture>`.
- **Open Graph image.** Generate a proper 1200×630 OG card; the current setup has meta tags but no image asset.
- **Analytics + consent.** Add Plausible or Fathom (privacy-respecting) and a minimal cookie banner if needed.
- **Sitemap + robots.** Add `public/robots.txt` and a sitemap once deployed to a domain.
- **A11y audit.** Run axe / Lighthouse and tighten focus styles on the interactive layer buttons and the rotating word.
- **Content rotation.** The hero ticker and rotating word are good once; consider a content calendar so the front door changes meaningfully every quarter.
- **Sample brief deliverable.** The /access page promises a sample brief — keep a polished PDF ready to send.
- **Hosting.** Deploy to Vercel, Cloudflare Pages, or Netlify. SPA fallback rule needed (e.g., Vercel does this automatically; Cloudflare needs a `_redirects` file with `/* /index.html 200`).
- **Legal.** Footer link to a privacy / terms page once the form goes live.

---

## A note on voice

This site is written to the Signal Force voice rule from `voice_and_style.md`:

> Write like an experienced GovCon operator briefing a BD director who has to make a decision Monday morning.

Direct. Analytical. Operator-credible. SIGINT-disciplined. Restrained. If a section starts to read like a SaaS landing page, rewrite it.
