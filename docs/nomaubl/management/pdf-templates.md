---
title: PDF Templates
description: "First-class library of reusable PDF layouts. Each template is a pdf-template resource referenced by document templates by name. Edit once, propagate everywhere; mix preset sections (header, parties, line table…) with the new XPath-driven block primitives (text, field, repeat, table, if) and use the visual canvas editor to compose them."
keywords: [NomaUBL, PDF templates, pdf-template, layout, defaultPdfTemplate, built-in, block section, field, repeat, table, XPath, visual canvas editor, JD Edwards, SAP, NetSuite, custom ERP]
---

# PDF Templates

The **PDF Templates** screen is the library of **reusable PDF layouts** that NomaUBL applies when rendering an invoice. Every layout is a `pdf-template` resource saved in `config-pdf.json`; document templates pick a layout by **name** via their `pdfTemplate` property — so a single layout can be shared across many documents.

The page covers four operations:

- **manage** the catalogue (Add / Import / Copy / Remove);
- **edit** a layout — section list, per-section toggles for preset sections, free-form composition for `block` sections;
- **mark a default** for documents that don't pick an explicit layout;
- **preview** the result against a sample invoice without leaving the page.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP — since the input it consumes is the generated UBL 2.1, not the source XML.

:::info[New in 2026.05.1]
PDF templates were previously edited inline on the Documents page (the *PDF Template* tab) and lived in the document template's properties. They are now first-class shareable resources with their own page. The Documents tab still exists, but it now picks a layout *by name* from this page's catalogue rather than holding the JSON inline.
:::

---

## Opening the page

- Sidebar → **Management → PDF Templates**.
- The page lists every layout in the catalogue. The sidebar entry **`built-in`** is the bundled factory layout — read-only, always present as a safety fallback.
- The current default layout — i.e. what a document with no explicit `pdfTemplate` resolves to — is marked with a yellow ★ in the sidebar.

---

## At a glance

<svg viewBox="0 0 1000 580" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pdftpl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pdftpl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pdftpl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <linearGradient id="pdftpl-g-purple" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c084fc" stopOpacity="0.28"/><stop offset="100%" stopColor="#a855f7" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="240" y="20" width="540" height="540" rx="14" fill="url(#pdftpl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="262" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">PDF Templates</text>
  <rect x="430" y="30" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/><text x="452" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">+ Add</text>
  <rect x="478" y="30" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/><text x="506" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">↑ Import</text>
  <rect x="538" y="30" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/><text x="562" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">⎘ Copy</text>
  <rect x="590" y="30" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/><text x="620" y="45" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">🗑 Remove</text>
  <rect x="654" y="30" width="116" height="22" rx="5" fill="url(#pdftpl-g-blue)" stroke="#4a9eff" strokeWidth="1"/><text x="712" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">★ Set as default</text>

  <line x1="240" y1="68" x2="780" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="262" y="84" width="180" height="450" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="270" y="92" width="164" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/><text x="278" y="107" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Search…</text>
  <line x1="262" y1="124" x2="442" y2="124" stroke="#1f2937" strokeWidth="1"/>

  <rect x="262" y="124" width="180" height="42" fill="rgba(255,255,255,0.04)"/>
  <text x="276" y="142" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">built-in</text>
  <text x="276" y="156" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Factory default · read-only</text>
  <rect x="402" y="142" width="32" height="14" rx="7" fill="rgba(255,255,255,0.08)"/><text x="418" y="152" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace" textAnchor="middle">factory</text>

  <line x1="262" y1="166" x2="442" y2="166" stroke="#1f2937" strokeWidth="1"/>
  <text x="276" y="184" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">invoice-fr</text>
  <text x="276" y="198" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Standard FR layout</text>
  <text x="416" y="190" fill="#facc15" fontSize="14" fontFamily="system-ui, sans-serif">★</text>
  <line x1="262" y1="208" x2="442" y2="208" stroke="#1f2937" strokeWidth="1"/>

  <text x="276" y="226" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">credit-note</text>
  <text x="276" y="240" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Credit note variant</text>
  <line x1="262" y1="250" x2="442" y2="250" stroke="#1f2937" strokeWidth="1"/>

  <text x="276" y="268" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">recipient-receipt</text>
  <text x="276" y="282" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Compact receipt</text>

  <rect x="462" y="84" width="298" height="450" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="470" y="92" width="282" height="34" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="480" y="113" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">invoice-fr</text>
  <text x="566" y="113" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">Standard FR layout</text>
  <rect x="700" y="100" width="44" height="20" rx="5" fill="url(#pdftpl-g-blue)"/><text x="722" y="113" fill="#fff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Save</text>

  <text x="478" y="148" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">SECTIONS</text>
  <rect x="500" y="138" width="62" height="18" rx="9" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1" strokeDasharray="2 2"/>
  <text x="531" y="150" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">+ header</text>
  <rect x="568" y="138" width="62" height="18" rx="9" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1" strokeDasharray="2 2"/>
  <text x="599" y="150" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">+ lineTable</text>
  <rect x="636" y="138" width="46" height="18" rx="9" fill="url(#pdftpl-g-purple)" stroke="#c084fc" strokeWidth="1" strokeDasharray="2 2"/>
  <text x="659" y="150" fill="#c084fc" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">+ block</text>

  <rect x="478" y="170" width="266" height="34" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="488" y="190" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">⋮⋮</text>
  <text x="510" y="190" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Header</text>
  <text x="572" y="190" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Supplier · invoice metadata</text>
  <text x="730" y="190" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="end">▾</text>

  <rect x="478" y="210" width="266" height="34" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="488" y="230" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">⋮⋮</text>
  <text x="510" y="230" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Parties</text>
  <text x="572" y="230" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Customer + Delivery boxes</text>

  <rect x="478" y="250" width="266" height="120" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="488" y="270" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">⋮⋮</text>
  <text x="510" y="270" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Line Table</text>
  <text x="572" y="270" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Main 7-column table</text>
  <text x="730" y="270" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="end">▴</text>
  <text x="490" y="294" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">METAS</text>
  <text x="490" y="310" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">☑ Invoice number</text>
  <text x="490" y="324" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">☑ Issue date</text>
  <text x="490" y="338" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">☐ Buyer reference</text>
  <text x="610" y="294" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">SUPPLIERS</text>
  <text x="610" y="310" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">☑ SIREN</text>
  <text x="610" y="324" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">☑ Legal form</text>
  <text x="610" y="338" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">☐ Phone</text>

  <rect x="478" y="380" width="266" height="34" rx="6" fill="rgba(192,132,252,0.06)" stroke="#c084fc" strokeWidth="1"/>
  <text x="488" y="400" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">⋮⋮</text>
  <text x="510" y="400" fill="#c084fc" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Block · payment-terms</text>
  <text x="660" y="400" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">XPath-driven</text>
  <text x="730" y="400" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="end">▾</text>

  <rect x="478" y="420" width="266" height="34" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="488" y="440" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">⋮⋮</text>
  <text x="510" y="440" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">VAT Breakdown</text>

  <rect x="478" y="490" width="266" height="34" rx="6" fill="url(#pdftpl-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="611" y="510" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">👁 Preview</text>

  <rect x="20" y="36" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="52" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Toolbar</text>
  <text x="30" y="65" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">manage + set default</text>
  <line x1="220" y1="50" x2="240" y2="50" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdftpl-arrow)"/>

  <rect x="20" y="138" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="154" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Catalogue</text>
  <text x="30" y="167" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">★ marks the default · factory is read-only</text>
  <line x1="220" y1="156" x2="262" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdftpl-arrow)"/>

  <rect x="800" y="138" width="180" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="154" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Section picker</text>
  <text x="810" y="167" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">presets + block (XPath)</text>
  <line x1="800" y1="156" x2="690" y2="148" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdftpl-arrow)"/>

  <rect x="800" y="290" width="180" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="306" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Per-section drawer</text>
  <text x="810" y="319" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">grouped toggles or canvas</text>
  <line x1="800" y1="308" x2="744" y2="308" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdftpl-arrow)"/>

  <rect x="20" y="380" width="200" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="396" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Block section</text>
  <text x="30" y="409" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">free-form XPath layout</text>
  <line x1="220" y1="398" x2="478" y2="398" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdftpl-arrow)"/>

  <rect x="800" y="490" width="180" height="36" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="506" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Live preview</text>
  <text x="810" y="519" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">renders against sample UBL</text>
  <line x1="800" y1="508" x2="744" y2="508" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdftpl-arrow)"/>
</svg>

The page splits into a left **catalogue** of saved layouts and a right **editor** for the selected layout. The editor is identical to the *PDF Template* tab on a document template — same section list, same per-section drawer, same live preview — except the result is saved to the catalogue under a name, not to a single document.

---

## How a layout is resolved

When NomaUBL renders a PDF for an invoice, it walks a three-step chain to choose the layout:

1. The **document template** of that invoice (read from `F564231.UHTMPL`) carries a `pdfTemplate` property — if set, that name is used.
2. Otherwise, the `defaultPdfTemplate` property on the **`global`** template is used — set from this page via the **Set as default** button.
3. Otherwise, the bundled **`built-in`** layout is used — always present, never deletable.

The third step is the safety net: a freshly installed environment renders sensible PDFs even before any layout is created.

---

## Toolbar actions

The toolbar at the top of the page covers the catalogue lifecycle plus the default override.

| Action | Effect |
|---|---|
| **Add** | Opens a modal asking for a name and a description. Creates an empty `pdf-template` resource — start by adding sections in the editor. |
| **Import** | Loads a JSON file produced by another instance (or the *Export* action). Updates the matching template if the name already exists, otherwise creates it. The reserved name `built-in` is rejected. |
| **Copy** | Duplicates the selected layout under a new name. The fastest way to derive a variant from `built-in` or from an existing customer-specific template. |
| **Remove** | Deletes the selected layout after a confirmation. Disabled on `built-in`. |
| **Set as default** | Writes the selected layout's name into `global.defaultPdfTemplate`. Documents without an explicit `pdfTemplate` then resolve to this layout. |
| **Reset to factory** | Clears `global.defaultPdfTemplate`, restoring the chain to `built-in`. |

---

## The catalogue

The sidebar list contains every saved layout plus the bundled `built-in`.

- **`built-in`** — pinned to the top, read-only, marked with a `factory` badge. Selecting it opens the editor in a banner-tagged read-only mode. *Copy* is the only way to derive an editable layout from it.
- **★ marker** — the layout currently used as the default for documents with no explicit `pdfTemplate`. Exactly one layout carries the star at any time.
- **Description** — free-text label persisted on the resource. Surfaced both in the sidebar and in the *PDF Template* selector on a document template.

---

## Two kinds of sections

A layout is a list of sections. Two flavours can be mixed in the same template.

### Preset sections — the curated layout building blocks

Nine reorderable preset sections cover the canonical shape of an invoice PDF: **Header**, **Parties**, **Agent**, **Line Table**, **Document Allowances**, **VAT Breakdown**, **Totals**, **Payment**, **Notes**. Each one is backed by a Java class that knows how to render the matching part of an EN 16931 invoice; the user controls visibility via per-section toggles in the inline drawer.

The drawer groups toggles by **`Category · Name`** prefix and arranges them in side-by-side columns that mirror the PDF layout itself — *Header* reads as **METAS** | **SUPPLIERS**, *Line Table* as **Group headers** | **Columns** | **Sub-details** — instead of one long flat list. Toggles use the rounded-blue `Checkbox` component for visual consistency in dark mode.

The full list of toggles per preset section:

- **Header** — eight `META · …` toggles (invoice number, issue date, due date, contract / order / buyer references, invoice type, profile ID) plus six `Supplier · …` toggles (address, SIREN, legal form, VAT, phone, email).
- **Parties** — Customer and Delivery boxes, with separate toggles for SIREN, VAT, address, location ID and a *Show Delivery box* master switch (when off, the layout renders a single-column Customer block).
- **Line Table** — three group-header toggles (*Delivery group*, *Page break per delivery*, *Document Reference group*), seven column toggles (`Line #`, `Description`, `Quantity`, `Unit`, `Unit Price`, `Amount`, `Tax`) and seven sub-detail toggles for line metadata (BT-127, BT-134/135, BT-156, BT-157, BT-158, allowances / charges, additional item properties).
- **Document Allowances** — column toggles for type, reason, amount, tax.
- **VAT Breakdown** — column toggles for category, rate, taxable, tax amount (an exemption column auto-appears when present).
- **Totals** — seven row toggles covering the full totals stack (Total HT, Allowances, Charges, Tax Exclusive, Total Tax, Total TTC, Amount Payable).
- **Payment** — payment means / IBAN / BIC / payment-terms note toggles.
- **Notes** — single toggle to expand `[PMD]` / `[PMT]` tag prefixes against the *note-types* catalogue.

### Block sections — XPath-driven free-form composition

The new **`block`** section is an XPath-driven primitive that composes any layout the preset sections don't cover. A single block holds a tree of typed nodes:

| Kind | Use |
|---|---|
| `text` | Literal string. |
| `field` | Renders an XPath value, with an optional inline label and a format selector — `date`, `currency`, `number`, `percent`. |
| `image` | Embed an image (logo, watermark, signature). |
| `spacer` / `hr` | Vertical breathing room or a horizontal rule. |
| `row` / `column` | Container with `align` (`start` / `center` / `end`) and `gap` controls. `align: end` and `align: center` shrink the row to ~50 % so a *label + value* pair stays grouped instead of stretching across the page. |
| `repeat` | XPath returning a NodeList; the block's `child` is rendered once per match. |
| `if` | XPath returning a boolean; the block's `child` is rendered when true, hidden otherwise. |
| `table` | A `rows × cols` grid with optional cell borders and a styled header row. Setting `xpath` makes it iterate (one row per match), with the children acting as the per-row cell template. |

Several blocks can live in the same template — e.g. one for a French legal mention block, one for a structured payment-terms table, one for a watermark image. Each block carries a user-friendly `name` shown next to the section row in the editor, so a layout with three blocks reads as `Block · payment-terms`, `Block · legal-mentions`, `Block · watermark`.

#### XPath conventions inside a block

- The **picker** preserves the `cbc:` / `cac:` namespace prefixes — required by the namespace-aware backend; a manually-typed XPath without a prefix simply will not match.
- Picks are emitted as **`/*/<full-path>`** so they're independent of the document root (the same path applies to `Invoice` and `CreditNote`).
- Inside an iterating ancestor (a `repeat` or a `table` with an `xpath`), the picker further strips the iterator's path so child cells start with **relative** XPaths (`cbc:TaxAmount` instead of `/*/cac:TaxTotal/cac:TaxSubtotal/cbc:TaxAmount`). This keeps row templates portable when the iterator changes.

---

## Visual canvas editor

A `block` section opens in the **`BlockCanvasEditor`** rather than a flat JSON textarea. The editor is split into three stacked panes plus a JSON escape hatch.

| Pane | Purpose |
|---|---|
| **Tree** | Indented view of every node in the block, with kind tags (`text`, `field`, `repeat`, `table`, …). Click a node to select it; the selection drives both the toolbar and the inspector. |
| **Toolbar** | Add child / wrap / unwrap / delete / move up / move down — operations applied to the currently selected node. The same operations are available via keyboard shortcuts. |
| **Inspector** | Per-kind attribute form (XPath, label, format, alignment, gap, …) plus a **Style** sub-panel covering font, weight, size, colour, alignment and padding. |

A small but important detail at the top of the inspector: a **Kind** select that **morphs** the selected node in place — turn a `column` into a `repeat` without deleting and re-adding it, the compatible attributes (children, style) are carried over by the `transmuteKind` helper. The same trick handles the common case of promoting a static layout block to an iterating one once the data shape is understood.

The **Live preview** button at the top of the form opens a 960 × 85vh modal that renders the current configuration against a sample invoice — clicking *Save* on the editor while the preview is open updates the iframe in place. The *Load XML sample* control sits one level up, on the template-level header, so a single sample feeds the XPath autocompletion of every block in the template.

---

## REST API

The page reads and writes via the standard template endpoints — same routes used by every other resource type.

| Method + path | Purpose |
|---|---|
| `GET /api/templates` | Lists all templates; the page filters by `type = pdf-template`. |
| `GET /api/templates/{name}` | Loads one layout (the JSON sits in the `template` property). |
| `POST /api/templates` | Creates a new layout (Add). |
| `POST /api/templates/{from}/copy/{to}` | Duplicates (Copy). |
| `PUT /api/templates/{name}` | Saves edits. |
| `DELETE /api/templates/{name}` | Removes a layout. The reserved `built-in` is rejected. |
| `POST /api/pdf-templates/preview` | Renders an arbitrary `pdfTemplate` JSON against a sample invoice — used by the live preview iframe. |
| `PUT /api/templates/global` (with `defaultPdfTemplate`) | Behind *Set as default* / *Reset to factory*. |

---

## Tips & best practices

- **Start from `built-in` via Copy.** The factory layout is a solid baseline — derive variants by copying and tuning the toggles instead of starting from an empty template.
- **One layout, many documents.** For each invoice variant (standard, credit note, recipient receipt …) prefer one shared layout over per-document inline JSON. The benefit is a single edit point when the legal mentions or the column set changes.
- **Set a default early.** Mark a layout as default before connecting customer-specific document templates — every new document then resolves to it implicitly, and the explicit `pdfTemplate` property on a doc template stays reserved for genuine variants.
- **Use `block` for what presets don't cover.** Custom legal mentions, country-specific footers, structured signature blocks, watermarks — all best modelled as a `block` rather than asked of an existing preset.
- **Iterate inside the live preview modal.** Toggling a section, then watching the iframe re-render in the modal is the fastest way to converge on a layout without leaving the editor.
- **Reuse the XML sample.** A single *Load XML sample* on the template header feeds the picker for every block — load it once per editing session and every XPath autocompletion just works.
- **Don't delete `built-in`.** The button stays disabled on it for that reason — it is the safety fallback at the end of the resolution chain.
