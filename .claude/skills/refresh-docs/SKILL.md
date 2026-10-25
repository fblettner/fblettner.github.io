---
name: refresh-docs
description: Refresh the documentation site (docs.nomana-it.fr) after new features or fixes in a Nomana-IT product — NomaUBL, Liberty Next / Nomaflow, Nomasx-1, Nomajde. Use whenever the user asks to update, refresh, sync or « mettre à jour » the docs of a product ("update NomaUBL", "mets à jour la doc Liberty", "nouvelles fonctionnalités dans nomaubl", "sync the release notes"). Finds what is new from the product's RELEASE.md and git history, reads the code, writes or updates the EN and FR pages with annotated SVG mockups, regenerates the generated files, builds, commits and reports in French.
---

# Refresh the documentation of a product

The user should only have to say *« mets à jour la doc NomaUBL »*. Everything below is the standing procedure; do not ask them to restate it. Ask only when something is genuinely ambiguous (a behaviour the code does not settle, a product whose sources are not listed).

Site repo: `/Users/franckblettner/Documents/Tools/GithubProjects/fblettner.github.io` (Docusaurus 3, EN in `docs/`, FR in `i18n/fr/docusaurus-plugin-content-docs/current/`).

Read first:
- [references/products.md](references/products.md) — per product: source repo, release file, doc folders, product-specific rules.
- [references/fr-style.md](references/fr-style.md) — the French writing rules (mandatory for every FR line).
- [references/page-conventions.md](references/page-conventions.md) — page structure, SVG mockups, MDX pitfalls, sidebar / translations.

Scripts in `scripts/` (call them with absolute paths; the session scratchpad is wiped between sessions, these are not):

| Script | Use |
|---|---|
| `sync_release_nomaubl.py` | NomaUBL release notes EN+FR from `RELEASE.md` / `RELEASE.fr.md` (customer names sanitised). |
| `openapi_nomaubl.sh` | Regenerate `static/openapi/nomaubl.json` from the jar, sanitised; prints lost / new paths. |
| `movedoc.py old_id new_id` | Move a page EN+FR with links, sidebar and redirect. One call per page. |
| `svgkit.py`, `example_page.py` | Build the dark-card SVG mockups with dashed callouts (house style). |
| `preview.py` | Render an SVG to PNG with headless Chrome to check it before inserting. |
| `check_docs.py` | Final checks: version tags, banned French, customer names. |

## Procedure

1. **Find what is new.**
   - Read the product's release file (see products.md) and compare with what the docs already cover: for NomaUBL, the versions and the bullets missing from `docs/nomaubl/release-notes.md` (run `sync_release_nomaubl.py` and read its output plus `git diff` of the release notes); for the other products, the release entries dated after the last docs commit touching that product (`git log -1 --format=%cd -- docs/liberty/<product>`).
   - Read `git log` of the source repo for the same period, and the plans in its `docs/plans/` when they exist — they explain the intent and the phases.
   - The user may add context (reports attached, a feature name, "the explorer replaces the query tool"); fold it in. Attached customer documents are examples only: never copy their data.

2. **Read the code before writing any fact.** Labels (EN from the component, FR from `fr.json`), defaults, options, behaviour, permissions, API routes, CLI switches (`displayHelp`), storage paths. Never invent a field or a label; when the code is unclear, ask. For broad surveys, delegate reading to Explore agents with a precise list of what to quote — but write the pages yourself, and write the French yourself.

3. **Plan the pages** (say it in one short message, then go on without waiting unless a choice is really the user's):
   - new page for a new screen or concept, update of the existing pages it touches (settings tables, roles, promotion kinds, list views, command line, digests, cross-links);
   - current state only — no version tags, no "since", no "used to / no longer" (see page-conventions.md);
   - mirror the app's menu in the sidebar (categories, order, labels); a page that moves goes through `movedoc.py` so its old URL redirects.

4. **Write EN then FR** for every page, with an annotated SVG for "At a glance" / « Vue d'ensemble » on any new page (and when a screen changed a lot). Preview each SVG (`preview.py`) and fix overlaps and misplaced arrows before inserting it. Generic data only: `invoices` / `credit_notes`, companies `00001`, customers ACME / Beta SARL…, activities Stores / Central (Magasins / Centrale).

5. **Regenerate.**
   - NomaUBL API: `scripts/openapi_nomaubl.sh` (no path may be lost; customer names must be "none").
   - `npm run build` from the site root — `prebuild` regenerates `static/llms*.txt` (gen-llms.mjs) and the release-notes version bar (gen-release-toc.mjs). The build must end with no broken link and no broken anchor (the `/liberty/getting-started/` HTML-minifier warning is known and harmless).
   - If a sidebar category was added or renamed, translate its label (and description) in `i18n/fr/docusaurus-plugin-content-docs/current.json` — see page-conventions.md for the safe way.

6. **Check.** `python3 scripts/check_docs.py` — fix every finding in pages you wrote; report pre-existing findings elsewhere instead of silently changing them. Then re-read the FR diff once with fr-style.md in mind (the script only catches the listed words).

7. **Commit and push** to `main` — unless the user said not to commit yet.
   - Stage explicitly (`docs i18n static sidebars.ts …`); never `.DS_Store` (it is tracked on purpose and must stay out of commits).
   - Message: `docs(<product>): sync <version> — <main features> (EN+FR)` with a short body, ending with the attribution trailer from the system reminder.

8. **Report in French**, short: what was added (new pages, updated pages), generated files, checks passed, and a list **« Points à vérifier côté application »** — discrepancies found while reading the code (hint text contradicting the code, labels left in English, a feature the docs had to describe differently, missing wrapper commands, anything that looked like a bug). The user relies on this list to fix the app.

## Things that went wrong before (do not repeat)

- Editing generated files by hand (llms, version pills): change the generator instead.
- `sed` with BSD syntax that silently rewrote every `---` line: prefer Python for multi-line edits and check `git diff --stat` after any bulk edit.
- `npx docusaurus write-translations` adds English theme strings to `i18n/fr/code.json`, which then override Docusaurus's built-in French: always `git checkout i18n/fr/code.json` after running it.
- A bare `<` (or `{`) in a Markdown table breaks the MDX build: put operators in code spans.
- Mockups in plain HTML `<div>` / `<table>`: the house style is the SVG card with callouts.
- Claiming a feature carries something (e.g. promotion carrying a file) without checking the code that lists it.
