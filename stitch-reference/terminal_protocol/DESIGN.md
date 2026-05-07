---
name: Terminal Protocol
colors:
  surface: '#0c160a'
  surface-dim: '#0c160a'
  surface-bright: '#313c2e'
  surface-container-lowest: '#071106'
  surface-container-low: '#141e12'
  surface-container: '#182216'
  surface-container-high: '#222d20'
  surface-container-highest: '#2d382a'
  on-surface: '#dae6d2'
  on-surface-variant: '#b9ccb2'
  inverse-surface: '#dae6d2'
  inverse-on-surface: '#283326'
  outline: '#84967e'
  outline-variant: '#3b4b37'
  surface-tint: '#00e639'
  primary: '#ebffe2'
  on-primary: '#003907'
  primary-container: '#00ff41'
  on-primary-container: '#007117'
  inverse-primary: '#006e16'
  secondary: '#bdf4ff'
  on-secondary: '#00363d'
  secondary-container: '#00e3fd'
  on-secondary-container: '#00616d'
  tertiary: '#fff8f4'
  on-tertiary: '#442b10'
  tertiary-container: '#ffd5ae'
  on-tertiary-container: '#7a5b3c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#72ff70'
  primary-fixed-dim: '#00e639'
  on-primary-fixed: '#002203'
  on-primary-fixed-variant: '#00530e'
  secondary-fixed: '#9cf0ff'
  secondary-fixed-dim: '#00daf3'
  on-secondary-fixed: '#001f24'
  on-secondary-fixed-variant: '#004f58'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#e7bf99'
  on-tertiary-fixed: '#2c1701'
  on-tertiary-fixed-variant: '#5d4124'
  background: '#0c160a'
  on-background: '#dae6d2'
  surface-variant: '#2d382a'
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-mono:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  code-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 16px
  container-max: 1280px
---

## Brand & Style

This design system is built upon a **High-Contrast Digital Brutalism** aesthetic, specifically tailored for cybersecurity professionals. It evokes the raw, unadorned efficiency of a root-level terminal interface while maintaining high-fidelity polish. 

The brand personality is technical, authoritative, and impenetrable. It utilizes a "Code-as-UI" philosophy where every element serves a functional purpose, stripping away decorative gradients or soft shadows in favor of structural integrity and data density. The interface should feel less like a website and more like a secure operating system dashboard, instilling a sense of precision and low-level control in the user.

## Colors

The palette is strictly limited to a "Pure Dark" environment to ensure maximum focus and energy efficiency on OLED displays. 

- **Primary (Matrix Green):** Used for successful operations, terminal prompts, and primary action calls.
- **Secondary (Cyber Blue):** Used for informational highlights, hyperlinks, and secondary data visualizations.
- **Base:** The background is absolute black (#000000), while nested containers use a deep charcoal (#0D0D0D) to create subtle structural differentiation without losing the void-like aesthetic.
- **Status:** Standardized semantic colors (Red for 'Critical/Alert', Amber for 'Warning') should be used sparingly and always in high-saturation variants to pop against the dark canvas.

## Typography

The design system utilizes **Space Grotesk** (selected for its technical, monospaced-adjacent geometric qualities) across all hierarchies. This ensures total consistency in character width and vertical alignment, echoing the grid-based nature of a terminal.

- **Headlines:** Should be treated as "Block Headers," often accompanied by a line-number prefix or a timestamp (e.g., `01 // PROJECT_NAME`).
- **Body:** Optimized for readability in long-form technical write-ups.
- **Interactive Labels:** Always uppercase with increased letter spacing to differentiate clickable actions from static data.
- **Emphasis:** Never use italics. Use color shifts (Primary Green) or bold weights to indicate importance.

## Layout & Spacing

This design system follows a **Fixed-Grid Terminal Model**. All layouts are governed by a 4px baseline grid, ensuring that every 1px border and line of text aligns perfectly to the pixel grid, preventing "anti-aliased" blur.

- **Grid:** A 12-column system with 16px gutters. 
- **Containers:** Content is housed in "Cells" defined by 1px solid borders. These cells should stack vertically or sit side-by-side like a tiling window manager (e.g., i3 or tmux).
- **Padding:** Internal container padding should be generous (24px - 32px) to allow the technical data to breathe against the heavy borders.

## Elevation & Depth

Depth is conveyed through **Z-index Layering and Border Intensity** rather than shadows or blurs.

1. **Floor (Level 0):** Pure #000000 background.
2. **Plinth (Level 1):** Surfaced containers with #0D0D0D fill and #1A1A1A 1px borders.
3. **Active (Level 2):** Elements being hovered or interacted with gain a Primary Green (#00FF41) border.

To simulate depth, use "Scanline" overlays (low-opacity horizontal patterns) on background layers or "Glitch" offsets on active headers. Shadows are strictly prohibited to maintain the flat, high-fidelity CLI aesthetic.

## Shapes

The shape language is **Strictly Orthogonal**. 

Every element—including buttons, input fields, and cards—must have a 0px border radius. This reinforces the "Brutalist" and "Technical" nature of the system. Visual interest is generated through the intersection of lines and the use of "Clipped Corners" (45-degree angled notches) for specific UI accents like status tags or window controls, rather than rounding.

## Components

- **Buttons:** Rectangular with 1px borders. Default state is a ghost button (White/Green border). Hover state fills the background with Primary Green and flips text to Black (#000000).
- **Terminal Prompts:** All input fields must be preceded by a non-editable prompt string (e.g., `user@portfolio:~$`). The cursor should be a blinking solid block (`█`).
- **Cards (Code Blocks):** Cards feature a top header bar containing a "filename" and "window controls" (miniature squares). The main body uses the Surface color (#0D0D0D).
- **Navbar:** A horizontal strip at the very top or bottom, integrated into the frame. Links are separated by pipe characters (`|`) or slashes (`/`).
- **Data Tables:** Use 1px borders for all cells. Header rows should have a Primary Green background with black text.
- **Chips/Badges:** Simple boxed text with a [ ] bracket aesthetic, e.g., `[ STATUS: ACTIVE ]`.
- **Progress Bars:** Represented by stepped blocks (e.g., `[██████░░░░]`) rather than smooth fills.