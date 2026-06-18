# Kurumbuka Leadership Solutions — Website Redesign

## Project Overview
Full UI redesign of kurumbuka.org, preserving all original content and calls-to-action while delivering a modern, professional look. All original image assets are loaded directly from the existing Squarespace CDN URLs.

---

## Brand Colors (Strictly Maintained)
| Token        | Hex       | Usage                        |
|-------------|-----------|------------------------------|
| Navy         | `#0e2240` | Primary background, headings  |
| Navy Deep    | `#071529` | Footer, nav on scroll         |
| Orange       | `#e07b28` | Primary CTA, accent, links    |
| Red          | `#c8253b` | Secondary accent              |
| Teal         | `#2db5a0` | Tertiary accent               |
| White        | `#ffffff` | Text on dark, backgrounds     |
| Off-White    | `#f5f3ef` | Section backgrounds           |

---

## Directory Structure

```
kurumbuka/
│
├── index.html            ← Homepage (hero slideshow, stats, programs, Rafiki)
├── about.html            ← About page (why, impact model, map, team, history)
├── ali.html              ← Abundant Leadership Institute program page
├── trek.html             ← Trek program page
├── get-involved.html     ← Get Involved page (supporters, partners, careers)
├── rafiki.html           ← Rafiki Coalition / Give Monthly page
│
├── css/
│   ├── global.css        ← Brand tokens, typography, nav, footer, shared components
│   ├── home.css          ← Homepage: hero slideshow, programs grid, sections
│   ├── about.css         ← About: reasons, impact model, testimonial, team
│   ├── programs.css      ← Shared: ALI + Trek program layouts, team grid, outcomes
│   ├── get-involved.css  ← Get Involved: hero, gi-section layout, gi-ways
│   └── rafiki.css        ← Rafiki: hero, quotes, impact steps, perks
│
└── js/
    └── main.js           ← Sticky nav, mobile menu, scroll reveals, counter animation, slideshow
```

---

## Pages Included

| Page            | File              | Source URL                           |
|----------------|-------------------|--------------------------------------|
| Homepage        | `index.html`      | kurumbuka.org/                       |
| About           | `about.html`      | kurumbuka.org/about                  |
| ALI             | `ali.html`        | kurumbuka.org/ali                    |
| Trek            | `trek.html`       | kurumbuka.org/trek                   |
| Get Involved    | `get-involved.html` | kurumbuka.org/get-involved         |
| Rafiki Coalition| `rafiki.html`     | kurumbuka.org/rafiki                 |

---

## Design Philosophy
- **Typefaces:** Playfair Display (headings/display) + DM Sans (body) + DM Mono (labels/eyebrows)
- **Layout:** Generous whitespace, asymmetric grids, full-width imagery with overlay gradients
- **Motion:** Intersection Observer reveal animations, counter animations, hero slideshow with Ken Burns effect
- **Navigation:** Fixed transparent nav that gains background on scroll; dropdown for Programs; full-screen mobile drawer
- **Footer:** Multi-column layout with brand intro, five link columns, and copyright

---

## External Links Preserved
All original CTAs remain unchanged:
- `https://app.smarterselect.com/programs/108536` — ALI Apply
- `https://smr.to/p106283` — Trek Apply
- `https://kurumbuka.kindful.com` — Donate
- `https://kurumbuka.kindful.com/?campaign=1083324` — Join Rafiki
- `https://kurumbuka.pathwright.com/auth/sign-in/` — Student Portal

---

## How to Use
1. Download all files maintaining the folder structure above
2. Open `index.html` in any modern browser — no build step needed
3. All images load from the existing Squarespace CDN (internet connection required)
4. To host: upload the entire `kurumbuka/` folder to any static hosting (Netlify, Vercel, GitHub Pages, etc.)

---

## Fonts (Google Fonts CDN)
Loaded via `@import` in `global.css` — requires internet connection:
- Playfair Display (700, 900, italic)
- DM Sans (300, 400, 500, 600)
- DM Mono (400, 500)
