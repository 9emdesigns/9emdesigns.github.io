---
trigger: manual
---

Perform Stage 1 of 3: Core Architecture, Global CSS Tokens, Header Navigation, and Home Page Layout.

Strictly adhere to the following workspace constraints:

1. Global & Viewport Rules: Use `dvh` and `dvw` globally so the canvas does not scroll horizontally or vertically. Enforce a 20px gap to the left, bottom, and right between content and viewport edges, matching the wireframe PNGs. Set `<main>` as the root parent container[cite: 4].
2. Header Navigation: Height must be strictly 120px[cite: 4]. Match font sizes, line heights, and layout across all breakpoints using `@file:breakpoints.css` and the wireframe PNGs as visual targets[cite: 4].
3. Blend Modes & Typography:
   - "9emdesign": Render as an `<h1>` inside a `<div>` container with `display: flex; flex-direction: column;`[cite: 4]. Wrap each individual letter in a `<span class="letter">` with `mix-blend-mode: overlay`[cite: 4].
   - Images: Render in background `<div>` elements with background colors, using `background-blend-mode: luminosity`[cite: 4]. Replace image placeholders with assets from `public/images/`[cite: 4].
4. Breakpoint & JSON Mapping: Cross-reference both `.png` wireframes and `.json` structural files[cite: 4]:
   - Base / Default -> `home` png[cite: 4]
   - Mobile (`iphone-13-mini-*.json` / `iPhone 13 mini - *.png`)[cite: 4]
   - Tablet (`ipad-pro-11-*.json` / `iPad Pro 11_ - *.png`)[cite: 4]
   - Standard Desktop (`macbook-pro-14_ - *.json` / `MacBook Pro 14_ - *.png` & `Desktop - 1 - linux_*.png`)[cite: 4]
   - 4K Smart TV (`tv-*.json` / `TV - *.png`) -> Scale layouts, typography, and max-widths[cite: 4].

Generate:

- Global `styles.css` (tokens, resets, root `<main>` layout, `dvh`/`dvw` constraints, and media query structure)[cite: 4].
- `header.component.html` and `header.component.css`[cite: 4].
- `home.component.html` and `home.component.css` (covering Base, Mobile, Tablet, Desktop, and 4K TV tiers)[cite: 4].
