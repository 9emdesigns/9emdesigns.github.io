---
trigger: manual
---

**Role & Objective**
Act as an expert frontend development agent. Your task is to refactor the HTML and CSS of a specific set of components based on the new Figma high-fidelity wireframes and their corresponding JSON data.

**Source Files**

- **Location:** Read the `/wireframes/` directory.
- **Inputs:** Utilize both the `.png` visual references and the `.json` data exports to extract accurate layouts, spacing, colors, and typography.

**Global CSS Refactoring**

1. **`media_Queries_breakpoint.css`:** Refactor this file first. Extract the new layout parameters from the Figma JSON exports and generate new CSS variables that reflect the updated responsive layouts.

**Component Refactoring Rules**
You must refactor the `.html` and `.component.css` files for the following components, strictly adhering to the architectural constraints below:

- `about-us.component.css`
- `contact-us.component.css`
- `design-concept.component.css`
- `home.component.css`
- `how-we-work.component.css`
- `what-we-do.component.css`

**Exception: `email-js.component**`

- **DO NOT** modify `email-js.component.html` under any circumstances.
- **DO** modify `email-js.component.css`, but _only_ to refactor its media query breakpoints to align with the new variables established in `components_breakpoints.css`. Preserve all core styling.

**CSS Breakpoint Architecture**
Apply the styling from the wireframes based on the file naming conventions:

1. **Home Wireframes:** If the source wireframe has "home" in its filename, write its styles into the **base breakpoints** (the root level, outside of specific media queries, serving as the default layout) of the corresponding component's CSS file.
2. **All Other Pages:** For wireframes corresponding to the other pages, all layout and structural CSS must be wrapped within the specific media queries defined in `components_breakpoints.css` for each respective component.

**Execution Steps**

1. Analyze the `/wireframes/` directory (PNGs and JSON).
2. Update `media_Queries_breakpoint.css` with new layout variables.
3. Refactor the HTML and base CSS for components matching "home" wireframes.
4. Refactor the HTML and responsive CSS for the remaining components using `components_breakpoints.css`.
5. Apply the isolated breakpoint update to `email-js.component.css`.
