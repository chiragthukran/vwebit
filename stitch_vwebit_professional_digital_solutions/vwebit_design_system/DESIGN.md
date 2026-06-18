---
name: Vwebit Design System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#48566a'
  on-tertiary: '#ffffff'
  tertiary-container: '#606e83'
  on-tertiary-container: '#e9f0ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d5e3fc'
  tertiary-fixed-dim: '#b9c7df'
  on-tertiary-fixed: '#0d1c2e'
  on-tertiary-fixed-variant: '#3a485b'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  max-width: 1280px
---

## Brand & Style

The design system is engineered for a high-end B2B service environment, prioritizing clarity, authority, and professional rigor. The brand personality is "Institutional Modernism"—combining the established reliability of traditional consulting with the speed and precision of contemporary technology partners.

The aesthetic follows a **Refined Minimalism** approach. It avoids all superfluous ornamentation, relying instead on deliberate whitespace, rigorous grid alignment, and a strict typographic hierarchy to communicate value. The goal is to evoke an emotional response of confidence and "quiet competence," ensuring that the client's content and data remain the primary focus. High-contrast elements are used sparingly to direct attention to key conversion points and strategic insights.

## Colors

The palette is rooted in a "Business-First" logic, utilizing a sophisticated Navy and Corporate Blue foundation. 

- **Primary (Corporate Blue):** Used exclusively for primary actions, active states, and critical brand touchpoints.
- **Surface & Background:** A pure white (#FFFFFF) base is used for primary content areas to maximize readability, while a subtle neutral (#F8FAFC) is reserved for section backgrounds to provide soft structural separation.
- **Typography:** Primary text uses Navy (#0F172A) for maximum contrast and legibility. Secondary text uses a balanced Gray (#475569) for metadata and supporting descriptions.
- **Borders:** A consistent, low-contrast Slate (#E2E8F0) defines boundaries without cluttering the visual field.
- **Functional:** Success states use a deep, professional Green (#16A34A). No vibrant neons or purples are permitted within the system.

## Typography

This design system utilizes a dual-font strategy to balance technical precision with readability. **Geist** is employed for headlines and labels to provide a sharp, modern, and slightly technical edge. **Inter** is used for all body copy to ensure maximum legibility across dense professional reports and service descriptions.

Headlines feature a slight negative letter-spacing to appear more cohesive at larger scales. Labels and small identifiers use uppercase styling with increased letter-spacing to create clear distinction from body prose. Always prioritize vertical rhythm by adhering strictly to the defined line heights.

## Layout & Spacing

The layout is governed by a **12-column fixed grid** on desktop, centered within the viewport. To maintain a premium feel, the design system mandates generous internal padding and section margins to prevent information density from feeling overwhelming.

- **Desktop (1024px+):** 12 columns, 24px gutters, 48px minimum side margins.
- **Tablet (768px - 1023px):** 8 columns, 20px gutters, 32px side margins.
- **Mobile (Under 768px):** 4 columns, 16px gutters, 16px side margins.

Spacing follows a 4px baseline, but primary layout shifts occur in increments of 16px (1rem). Use `lg` (2.5rem) spacing for vertical separation between related content blocks and `xl` (4rem) for separation between distinct page sections.

## Elevation & Depth

To maintain a clean and professional aesthetic, this design system rejects heavy shadows and skeuomorphism. Instead, it utilizes **Tonal Layers** and **Low-Contrast Outlines**.

- **Level 0 (Base):** Pure #FFFFFF background.
- **Level 1 (Cards/Containers):** Defined by a 1px solid #E2E8F0 border. On hover, a very soft, high-diffusion shadow may be applied (0px 4px 20px rgba(15, 23, 42, 0.05)).
- **Level 2 (Modals/Dropdowns):** Utilizes a crisp 1px border with a slightly more pronounced ambient shadow to denote interaction priority.

Depth is primarily communicated through the use of the neutral #F8FAFC background behind Level 1 white cards, creating a clear "stacked" hierarchy without visual clutter.

## Shapes

The design system uses a **Rounded** (8px/0.5rem) shape language. This specific radius is chosen to soften the "industrial" feel of the navy-heavy palette while maintaining a structured, architectural silhouette. 

- **Buttons & Inputs:** 8px (0.5rem) corner radius.
- **Cards & Sections:** 16px (1rem) corner radius for larger containers.
- **Tags & Badges:** Fully rounded (pill-shaped) to provide a distinct visual contrast against rectangular UI elements.

## Components

- **Buttons:** Primary buttons use the Corporate Blue background with white text. Secondary buttons use a Navy border with Navy text. Hover states should involve a subtle shift in luminosity (10% darker), never a color change.
- **Input Fields:** Use #FFFFFF backgrounds with a 1px #E2E8F0 border. The focus state must use a 2px Corporate Blue outline with a 2px offset for accessibility.
- **Cards:** White backgrounds, 1px #E2E8F0 border, 16px (1rem) corner radius. Internal padding should be a minimum of 24px (1.5rem).
- **Data Lists:** Rows should be separated by 1px horizontal lines in #E2E8F0. Alternating row colors (Zebra striping) should use #F8FAFC for readability in dense tables.
- **Chips/Badges:** Small, 12px Geist Medium text. Success badges use #16A34A text on a #F0FDF4 (light green) background.
- **Navigation:** Top-tier navigation uses Geist Medium in Navy. Active states are indicated by a 2px Corporate Blue bottom-border, not a background change.