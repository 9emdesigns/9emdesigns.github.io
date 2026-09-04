---
trigger: manual
---

Perform Stage 3 of 3: Angular 18 SSR/Prerender Validation & Multi-Viewport DevTools Audit.

1. Review all generated components (`home`, `about-us`, `what-we-do`, `how-we-work`, `design-concept`, `contact`) to ensure zero direct `window` or `document` DOM references so that Angular 18 prerendering (`ng run project:prerender`) executes cleanly without hydration errors[cite: 4].
2. Verify that all 6 page components enforce `<main>` as root wrapper, 120px header height, `mix-blend-mode: overlay` for `.letter` flex stacks, `background-blend-mode: luminosity` for background image containers, and strict non-scrolling `dvh`/`dvw` viewports with 20px edge padding[cite: 4].
3. Perform layout responsiveness checks for Chrome DevTools and Firefox DevTools viewports (Mobile, Tablet, Desktop, and 4K TV)[cite: 4].
