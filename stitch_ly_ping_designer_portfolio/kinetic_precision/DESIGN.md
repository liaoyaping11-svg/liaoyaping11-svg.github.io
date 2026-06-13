---
name: Kinetic Precision
colors:
  surface: '#1f0f0f'
  surface-dim: '#1f0f0f'
  surface-bright: '#483434'
  surface-container-lowest: '#190a0a'
  surface-container-low: '#281717'
  surface-container: '#2c1b1b'
  surface-container-high: '#382525'
  surface-container-highest: '#43302f'
  on-surface: '#fbdbda'
  on-surface-variant: '#e5bdbb'
  inverse-surface: '#fbdbda'
  inverse-on-surface: '#3f2c2b'
  outline: '#ac8887'
  outline-variant: '#5c403f'
  surface-tint: '#ffb3b1'
  primary: '#ffb3b1'
  on-primary: '#680011'
  primary-container: '#c8102e'
  on-primary-container: '#ffdad8'
  inverse-primary: '#bf0229'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#82d1ed'
  on-tertiary: '#003543'
  tertiary-container: '#006e87'
  on-tertiary-container: '#b6ebff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001c'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#b6ebff'
  tertiary-fixed-dim: '#82d1ed'
  on-tertiary-fixed: '#001f28'
  on-tertiary-fixed-variant: '#004e60'
  background: '#1f0f0f'
  on-background: '#fbdbda'
  surface-variant: '#43302f'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 120px
    fontWeight: '700'
    lineHeight: 110px
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Inter
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '300'
    lineHeight: 24px
    letterSpacing: 0em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 24px
  stack-xl: 128px
  stack-lg: 64px
  stack-md: 32px
  stack-sm: 16px
---

## Brand & Style
This design system embodies the principles of **Swiss Minimalism** (International Typographic Style), tailored for a high-end designer portfolio. The brand personality is disciplined, intellectual, and authoritative. It prioritizes clarity, structural integrity, and the removal of the decorative in favor of the functional.

The target audience consists of design executives, creative directors, and high-growth technology companies who value rigor over trends. The UI evokes a sense of timeless sophistication through high-contrast visuals, a strict 12-column grid, and a monochromatic foundation punctuated by a single, aggressive accent. The aesthetic is raw and geometric, utilizing matte surfaces and sharp edges to convey precision.

## Colors
The palette is deeply atmospheric and strictly controlled to ensure content hierarchy is absolute.

- **Background (#0D0D0D):** A near-black void that provides the ultimate stage for high-contrast typography.
- **Surface (#141414):** Used for subtle container differentiation where structural depth is required without using shadows.
- **Primary Accent (#C8102E):** A classic crimson red used sparingly for calls to action, active states, and critical emphasis.
- **Typography:** Primary text uses a high-visibility off-white, while secondary text is suppressed to a neutral grey to maintain a clear reading order.
- **Dividers (#2A2A2A):** Hairline strokes that define the grid without creating visual noise.

## Typography
The typographic system relies on **Inter**, utilizing its grotesque characteristics to provide a neutral yet powerful voice. 

- **Display & Headlines:** Use heavy weights (Bold/Semi-Bold) with tight letter spacing to create a dense, "block-like" visual impact. This mimics the Swiss style of treatinq type as a graphic element.
- **Body:** Set in Light (300) weight to provide a stark contrast against headlines. This improves readability by increasing the "air" within the paragraph blocks.
- **Labels:** Always uppercase with increased tracking for technical metadata and navigational elements.
- **Scale:** On mobile, display sizes must be aggressively reduced to maintain the 12-column alignment logic without overflowing the viewport.

## Layout & Spacing
The layout is governed by a **strict 12-column fixed grid** on desktop and a 4-column grid on mobile. 

- **Grid Logic:** All elements must align to the vertical grid lines. No "floating" elements. 
- **Rhythm:** An 8px base unit controls all padding and margins. Vertical rhythm is just as important as horizontal alignment; sections are separated by massive "stack-xl" gaps to create a sense of scale and focus.
- **White Space:** Space is treated as a structural element, not just a gap. Generous margins (64px+) prevent the dense typography from feeling cluttered.
- **Breakpoints:**
  - Desktop: 1440px+ (12 columns)
  - Tablet: 768px - 1024px (8 columns)
  - Mobile: < 767px (4 columns, margins reduced to 24px)

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layering** and **Hairline Outlines** rather than shadows. 

- **Flat Hierarchy:** Elements do not "float" above the surface; they are recessed or flush. 
- **Dividers:** Use 1px solid lines (#2A2A2A) to separate grid sections. 
- **Z-Index:** Content is organized in two planes: the Background (#0D0D0D) and the Surface (#141414). Interactions like hover states may toggle between these two tones, but never introduce a third dimension. 
- **Matte Texture:** Surfaces should feel non-reflective. Avoid all blurs, gradients, or glass effects.

## Shapes
The shape language is **strictly geometric and sharp**. 

- **Zero Radius:** All corners are 0px. This applies to buttons, input fields, cards, and image containers. 
- **Square Aspect Ratios:** Where possible, use 1:1 or 4:3 ratios for containers to reinforce the grid-based construction.
- **Geometric Placeholders:** In place of photography or avatars, use solid color blocks (#141414) or stroked rectangles (#2A2A2A) to maintain the abstract, professional tone.

## Components
Consistent execution of these components is vital to maintaining the Swiss aesthetic.

- **Buttons:** Large, rectangular blocks with no rounding. Primary buttons use the Crimson Red (#C8102E) with white text. Secondary buttons are outlined (#2A2A2A). Use `label-sm` typography for button text.
- **Cards:** Defined by 1px borders. Content inside cards should follow the internal 8px spacing grid. No shadows or hover-lifts; use a color shift (Surface to Border color) for hover states.
- **Input Fields:** Bottom-border only or a full 1px box. Labels are placed above the field in `label-sm`. The cursor and active border should use the Primary Accent color.
- **Chips/Tags:** Small rectangular boxes with hairline borders. No padding on the top/bottom beyond what is necessary for the text height.
- **Lists:** Separated by horizontal hairlines spanning the full width of the container. Use monospaced-style numbering (e.g., 01, 02) for a technical feel.
- **Project Grid:** Large-scale typographic headers for each project, where the title is the primary visual, spanning at least 6 columns.