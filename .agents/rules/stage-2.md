---
trigger: manual
---

Perform Stage 2 of 3: Layout Generation for About Us, What We Do, How We Work, Design Concept, and Contact Pages.

Using the global CSS system, `<main>` root container rules, and blend-mode patterns established in Stage 1:

1. Map JSON and PNG files for each page directory (`aboutus`, `whatwedo`, `howwework`, `designconcept`, `contact`) across all 4 breakpoint tiers (`iphone-13-mini`, `ipad-pro-11`, `macbook-pro-14`, and `tv`)[cite: 4].
2. Maintain strict 20px viewport edge gaps (left, bottom, right) and lock layout bounds using `dvh`/`dvw` units to prevent scrolling[cite: 4].
3. Apply `mix-blend-mode: overlay` on `.letter` text containers and `background-blend-mode: luminosity` on image background `div` containers referencing assets from `public/images/`[cite: 4].
4. Write clean, semantic HTML5 ready for Angular 18 standalone component integration, leaving all directives and architecture intact[cite: 4].

Generate the HTML and CSS components for:

1. `about-us.component`
2. `what-we-do.component`
3. `how-we-work.component`
4. `design-concept.component`
5. `contact-us.component`
