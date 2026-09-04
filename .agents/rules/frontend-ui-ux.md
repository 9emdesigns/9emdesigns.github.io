---
trigger: manual
---

Perform a total rewrite of our website's HTML and CSS components, leave all angular architecture and directives as is. based on the attached Figma wireframe png exports Make sure that these images are in the background of the parent div: nhlakancubeportraits-person-4096071-1,veroll-sterling-g3he6o_e1ts-unsplash-1,jd-mason-sz9q4b9z4u4-unsplash-1.

Follow these strict constraints:
1 Breakpoint Mapping: Reference our open media query CSS file for the exact pixel widths. Map the layout file sequences as follows:
◦ code all png with the name “Home” into the base breakpoint
◦ iPhone 13 mini - \*.png -> Mobile breakpoint
◦ iPad Pro 11* - *.png -> Tablet breakpoint
◦ MacBook Pro 14\_ - _.png and Desktop - 1 - linux_.png -> Standard Desktop breakpoint
◦ TV - \*.png -> 4K Smart TV ultra-wide breakpoint (scale layouts, adjust max-widths, and scale typography to keep readability high on large displays).

2 JSON Mapping: map the JSON files with the breakpoints for the structure and layout as follows:

- iphone-13-mini -\*.json
- ipad-pro-11 -\*.json
- macbook-pro 14\_ -\*.json
- tv -\*.json

2a Layout & Blending: Re-code the structural elements using CSS Grid and Flexbox to transition cleanly across all viewports. Correct overlapping text blocks using explicit CSS mix-blend-mode and background-blend-mode and absolute/relative stacking positioning to match the visual artifacts exactly. Ensure the layout execution leans toward an artistic design direction rather than defaulting to a purely rigid, system-first approach.

3 Architecture: Re-write the code into clean, scalable semantic HTML5 elements ready for Angular 18 component integration, use <main> as parent conainer in all components. Keep structural layout properties separated by responsive breakpoints.

4 code the html and css with breakpoints in the navigation header component the height must be 120px, make sure the font size and line height match the breakpoints use the wireframe png as guide to the header navigation.

5 the letters 9emdesign on some wireframe are h1 in a container div and flex box with flex direction column.and additionally the letters all have a class letter so that they can be used a blend mode of “overlay”.

6 the images are in a background of a div, with a background color, and a background blend mode of “luminosity”.

7 the texts must be positioned exactly as in the wireframes png.

8 make sure that all pages work with the prerender feature of angular, and test the function so that the pages display correct in chrome Devtools and Firefox Devtools.

9 use global dvh and dvw, so that the content does not scroll horizontally or vertically. the must be a 20px gap to the left,bottom and right between the content and the edge of the viewport, again following the wireframe png's.

10 replace all image placeholders with images found in public/images project folder

Begin by generating the core structure, then write the cascading overrides for all breakpoints, finishing with the 4K TV layer.
