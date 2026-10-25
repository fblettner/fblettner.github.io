# Page conventions

## Structure of a page

```
---
title: …
description: "One sentence naming the product and what the page covers (read by search engines and llms.txt)."
keywords: [NomaUBL, …, JD Edwards, SAP, NetSuite, custom ERP]
---

# Title

Opening paragraph: what it is, who it is for, where it is (« Accès : … » / "Open it from …").

---

## At a glance            (FR: ## Vue d'ensemble)

<svg …>  annotated mockup (house style)

---

## Sections… (tables for fields: | Field | Default | Description |)

---

## Access                 (FR: ## Accès) — page grant on Roles, features needed

---

## Tips & best practices  (FR: ## Conseils & bonnes pratiques)
```

- Explicit anchors are written `## Title \{#anchor\}` (escaped braces). Keep the same anchor id in EN and FR so cross-links work in both.
- Admonition titles: `:::info[Title]` (brackets), never `:::info Title`.
- Links are relative `.md` links (`../management/promotion.md#targets`); absolute `/nomaubl/...` only in JSX.
- Current state only: never `*(2026.05.x)*`, "since version", "New in", "used to", "no longer", "previously". History belongs in the release notes.
- No customer data, ever (template ids, activity codes, company names, SIREN, hosts, e-mails from attached reports). Generic examples: `invoices`, `credit_notes`, `00001`, ACME, Beta SARL, Stores / Central (Magasins / Centrale), `R42565`, `R03B505`.
- Never document NomaUBL `config.json` fields — the Settings UI pages are the reference; never warn that credentials are stored in clear text.

## SVG mockups (house style)

Reference: `docs/nomaubl/application/invoices.md`. Dark gradient card (#1e293b → #0f172a), controls drawn as rects (inputs `#0a0e1a`, primary blue gradient, danger red), status pills, tables with an uppercase header row, **dashed callout boxes on both sides with arrows** pointing at what they explain.

Build them with `scripts/svgkit.py` (see `scripts/example_page.py`):
- `Svg(prefix, width, height)` — prefix unique per page (marker ids), width 1200 for a 760-wide card at x=220 with callouts at x=20 and x=1000; widen (1320 / card 880) when a toolbar does not fit.
- `button`, `chip`, `check`, `segmented`, `table`, `panel`, `box`, `arrow`, `callout(x, y, w, title, subtitle, target_x, target_y)`, `card_behind(x, y, w, h)` (call last, size known), then set `s.H` and `s.render()`.
- One function per page returning the SVG for `lang` in ("en", "fr"), labels from the app's EN / FR i18n.
- Insert with a marker: write `{/* svg:name */}` in the page, then replace the marker with the SVG string.
- Always `preview.shot(svg, "/abs/path.png", 1250, 500)` and look at the PNG: fix overlapping texts, arrows landing on the wrong element, text overflowing a box, a card taller than its content.

SVG/MDX pitfalls: never `*foo*` inside `<text>` (markdown turns it into `<em>`); `{` / `}` must be `&#123;` / `&#125;` (svgkit's `esc` does it); `&` → `&amp;`.

## MDX pitfalls in prose

- A bare `<` or `{` in a table cell or paragraph breaks the build: wrap operators in code spans (`` `<` ``, `` `{{content}}` ``).
- A `<div>` following text inside the same paragraph produces "No p element in scope" warnings: wrap each text line of a JSX block in its own `<div>`.

## Sidebar, moves and translations

- `sidebars.ts` mirrors the app menu. A category with a landing page: `{type: 'category', label: 'Reports', link: {type: 'doc', id: '…/overview'}, items: […]}`.
- Moving pages: `scripts/movedoc.py old new` (one call per page, never a zsh `for` loop over quoted pairs). It adds the redirect; then grep absolute links in `src/` and JSX.
- FR sidebar labels and category descriptions live in `i18n/fr/docusaurus-plugin-content-docs/current.json`. To get new keys: `npx docusaurus write-translations --locale fr`, then **immediately `git checkout i18n/fr/code.json`** (otherwise English theme strings override Docusaurus's French), then fill the new keys' `message` in current.json. Keep FR category names aligned with the app (Gestion, Diagnostic, Tâches planifiées, Rapports…).
- Home page texts go through `translate()` in `src/pages/index.tsx` with FR entries in `i18n/fr/code.json` (add keys by hand, never via write-translations).

## Generated files (never edit by hand)

- `static/llms.txt`, `llms.fr.txt`, `llms-full*.txt` — `scripts/gen-llms.mjs` (sections, header) runs on `prebuild`.
- Release-notes version bar — `scripts/gen-release-toc.mjs` between `{/* versions:start */}` and `{/* versions:end */}`, runs on `prebuild`.
- `static/openapi/nomaubl.json` — `.claude/skills/refresh-docs/scripts/openapi_nomaubl.sh`.
