# Stitch Prompt — Personal Portfolio Website Prototype

## Project Overview

Design a **high-end personal product designer portfolio website** prototype for LY Ping, a senior UX/UI product designer with 6+ years of experience. The website should convey professionalism, minimalism, and sophistication.

---

## Design Style

**Swiss Minimalism** — strict grid system, strong typographic hierarchy, generous white space, and sharp geometric structure.

- **Aesthetic**: Dark luxury with matte texture — deep black + crimson red accent, ultra-clean layout
- **Typography**: Bold grotesque sans-serif for headings (Helvetica Neue / Inter), light weight for body copy
- **Grid**: 12-column strict grid, generous margins (80–120px horizontal padding)
- **Color palette**:
  - Background: `#0D0D0D` (near black)
  - Surface: `#141414`
  - Primary accent: `#C8102E` (crimson red)
  - Text primary: `#F5F5F5`
  - Text secondary: `#888888`
  - Border/divider: `#2A2A2A`
- **Tone**: Matte, business high-end, no gradients unless subtle — think Dieter Rams meets digital portfolio
- **No images or avatars** — use geometric placeholder blocks or solid color rectangles with initials only if needed

---

## Site Structure

### Global — Navigation Bar (Fixed Top Right)

- Position: **Fixed**, top-right corner
- Logo: Large bold letter **"LYP"** — uppercase, 28–32px, white, leftmost of nav
- Nav links (right-aligned): `Home` · `About` · `Works`
- Style: Transparent background with a 1px bottom border `#2A2A2A` that activates on scroll; text spacing generous
- No hamburger menu — horizontal links only
- Hover state: underline animation slides in from left

---

## Pages

### 1. Home Page (`/`)

**Layout: Full-viewport hero, two-column**

#### Left Column — Personal Info Card

Vertical stack, aligned left, generous line height:

```
LY Ping
─────────────────────────
Education    ·  [School Name] · Bachelor's Degree
Experience   ·  6+ Years of Industry Experience
Location     ·  Shenzhen, China
Email        ·  617266805@qq.com
Phone        ·  +86 136 1291 6897
```

- Label text: 11px uppercase, letter-spacing 0.15em, color `#888`
- Value text: 16px, color `#F5F5F5`
- Thin horizontal rule `1px` in `#2A2A2A` separating each row

#### Center / Right — Role & Value Proposition

Large typographic block:

```
Senior Product
Experience Designer

Seeking · Product Design / UX Design Roles
```

- "Senior Product Experience Designer" = 56–72px, bold, white, tight letter-spacing -2px
- Below: a single red `2px` horizontal line (accent divider, ~80px wide)
- Then: role seeking line in 13px uppercase tracking
- Bottom of section: a brief one-liner tagline in 14px secondary color

---

### 2. About Page (`/about`)

**Layout: Two-column, 60/40 split**

#### Left — Bio Text Block

Section label: `ABOUT` — 10px uppercase, red, letter-spacing 0.3em

Heading: `Product Designer · 8 Years`  
(32px bold white)

Body paragraph (14px, line-height 1.8, secondary text color):

> 8 years of internet industry experience. Independently delivered 0→1 product designs across Web, Mobile App, and Mini Program platforms. Led design upgrades for 3 SaaS products with extensive B2B and B2C experience. Capable of navigating complex business logic and rapidly translating core business objectives into interaction and visual solutions.

#### Right — Contact / Social Links

Section label: `CONNECT` — same style as above

List of social links, each on its own line with a right-arrow `→` prefix:

```
→  Zcool       zcool.com/u/1367812
→  Dribbble     dribbble.com/liaoyaping11
→  Behance      behance.net/617266805105f
→  UI China     ui.cn
```

- Link style: 14px, white on hover, underline slide-in animation
- Vertical spacing: 20px between items

---

### 3. Works / Projects Page (`/works`)

**Layout: Asymmetric editorial grid**

Section label: `SELECTED WORKS` — 10px uppercase red

#### Project Card 1 — Smart Expense Reporting Terminal

Full-width card with left-side metadata and right-side description:

```
01                    Smart Expense Reporting Terminal
──────────────────────────────────────────────────────────────
Type  ·  SaaS · Hardware · Enterprise B2B
Year  ·  2022–2023

A one-stop self-service expense reporting kiosk for enterprise
employees — supports receipt capture, OCR scanning, verification
and archiving. Available 24/7, solving receipt submission pain
points during business travel, reducing manual review workload
and shortening reimbursement cycles.
```

- Number `01` in 72px, light weight, red color, top-left
- Project title: 24px bold white
- 1px full-width divider below title
- Meta labels: uppercase 11px, secondary color
- Description body: 14px, secondary color, max-width 600px
- Bottom-right corner: `View Case →` in 12px red, uppercase

#### Project Cards 2 & 3 — Placeholder Cards

Same layout structure, with:
- Number: `02`, `03`
- Title: `Project Two`, `Project Three`
- Description: `Case study coming soon.` in secondary color
- Visual treatment identical to Card 1

---

## Interactive Effects (Annotate in Prototype)

Add annotation callouts for the following interaction notes:

1. **Page Transitions**: Fade in / Fade out between routes (300ms ease)
2. **Scroll Effects**:
   - Navbar background transitions from transparent → `rgba(13,13,13,0.95)` on scroll past 60px
   - Content sections animate in from bottom with `translateY(24px)` + `opacity 0→1` as they enter viewport
3. **Loading Screen** (Full-page, appears before Home):
   - Deep black background
   - Center: `LYP` monogram — circular rotation animation, skeleton shimmer effect
   - Minimal, matte, high-end — no bright colors
   - Exits with fade-out after ~1.5s
4. **Hover States**:
   - Nav links: left-to-right underline slide
   - Project cards: subtle `translateY(-4px)` lift + border color shifts to red
   - Social links: slide-right reveal

---

## Layout Specifications

| Property | Value |
|---|---|
| Max content width | 1200px |
| Horizontal padding | 80px (desktop), 24px (mobile) |
| Section spacing | 120px top/bottom |
| Base font size | 16px |
| Line height (body) | 1.75 |
| Border radius | 0px (strictly squared) |
| Border style | 1px solid `#2A2A2A` |

---

## Prototype Screens to Generate

Please generate the following **5 screens** as a high-fidelity wireframe prototype:

1. **Loading Screen** — Full-screen preloader with monogram animation placeholder
2. **Home Page** — Desktop, full viewport
3. **About Page** — Desktop, full viewport
4. **Works / Projects Page** — Desktop, full viewport
5. **Home Page — Mobile** — 390px wide, showing responsive stacked layout

---

## Additional Notes

- **No stock photos, no avatars, no illustrations** — use solid color blocks or typographic placeholders only
- All text content should use the actual copy provided above (not Lorem Ipsum)
- Maintain consistent 8px spacing grid throughout
- The overall feel: **a senior designer who lets the work speak** — restrained, precise, typographically confident
