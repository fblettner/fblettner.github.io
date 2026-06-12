---
title: PDF Templates
description: "First-class library of reusable PDF layouts. Each template is a pdf-template resource referenced by document templates by name. Edit once, propagate everywhere via a full-screen visual builder — palette of sections on the left, live preview in the centre, inspector with options + custom-block tree editor on the right."
keywords: [NomaUBL, PDF templates, pdf-template, layout, defaultPdfTemplate, built-in, visual builder, block section, field, repeat, table, XPath, JD Edwards, SAP, NetSuite, custom ERP]
---

# PDF Templates

The **PDF Templates** screen is the library of **reusable PDF layouts** that NomaUBL applies when rendering an invoice. Every layout is a `pdf-template` resource saved in `config-pdf.json`; document templates pick a layout by **name** via their `pdfTemplate` property — so a single layout can be shared across many documents.

The page covers four operations:

- **manage** the catalogue (Add / Import / Copy / Remove);
- **edit** a layout via the **visual builder** — a full-screen editor with the section catalogue on the left, a live preview in the centre and an inspector on the right;
- **mark a default** for documents that don't pick an explicit layout;
- **load a real invoice XML** into the builder so the preview and the XPath autocomplete switch to your data.

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

The page splits into a left **catalogue** of saved layouts and a right summary panel for the selected layout. Editing a layout opens the **visual builder** — a full-screen, three-pane editor documented under [Visual builder](#visual-builder) below — and the layout is saved to the catalogue under a name.

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
| **Open visual builder** | Opens the selected layout in the full-screen [visual builder](#visual-builder) — palette on the left, live preview in the centre, inspector on the right. The primary editing surface. |
| **Add** | Opens a modal asking for a name and a description. Creates an empty `pdf-template` resource — start by adding sections in the builder. |
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

## Visual builder \{#visual-builder\}

The **Open visual builder** button opens the layout in a full-screen editor with three panes side-by-side — the canonical way to edit a `pdf-template`. The old single-page flow (section list + per-section drawers, click a Preview button to open a modal) is gone; the builder unifies everything in one screen with the preview always visible.

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="pdfvb-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pdfvb-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.30"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
    <linearGradient id="pdfvb-purple" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c084fc" stopOpacity="0.28"/><stop offset="100%" stopColor="#a855f7" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="20" y="20" width="960" height="440" rx="14" fill="url(#pdfvb-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Visual builder — invoice-fr</text>
  <rect x="540" y="30" width="120" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="600" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">↑ Load XML sample</text>
  <rect x="668" y="30" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="696" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">Discard</text>
  <rect x="730" y="30" width="60" height="22" rx="5" fill="url(#pdfvb-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="760" y="45" fill="#fff" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">Save</text>
  <rect x="798" y="30" width="180" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="888" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">✕ Close (unsaved-changes guard)</text>

  <line x1="20" y1="68" x2="980" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="36" y="84" width="220" height="360" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="48" y="106" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">PALETTE</text>
  <rect x="48" y="118" width="196" height="22" rx="5" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1" strokeDasharray="2 2"/>
  <text x="58" y="133" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">+ Header</text>
  <rect x="48" y="146" width="196" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#334155" strokeWidth="1" strokeDasharray="2 2"/>
  <text x="58" y="161" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">+ Parties (Customer + Delivery)</text>
  <rect x="48" y="174" width="196" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#334155" strokeWidth="1" strokeDasharray="2 2"/>
  <text x="58" y="189" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">+ Line Table</text>
  <rect x="48" y="202" width="196" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#334155" strokeWidth="1" strokeDasharray="2 2"/>
  <text x="58" y="217" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">+ Payment</text>
  <rect x="48" y="230" width="196" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#334155" strokeWidth="1" strokeDasharray="2 2"/>
  <text x="58" y="245" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">+ Notes</text>
  <rect x="48" y="258" width="196" height="22" rx="5" fill="url(#pdfvb-purple)" stroke="#c084fc" strokeWidth="1" strokeDasharray="2 2"/>
  <text x="58" y="273" fill="#c084fc" fontSize="10" fontFamily="ui-monospace, monospace">+ Custom block (XPath)</text>

  <line x1="48" y1="292" x2="244" y2="292" stroke="#1f2937" strokeWidth="1"/>
  <text x="48" y="312" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">SECTIONS IN THIS TEMPLATE</text>
  <rect x="48" y="320" width="196" height="22" rx="5" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="58" y="335" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">⋮⋮ Header</text>
  <rect x="48" y="346" width="196" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="58" y="361" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">⋮⋮ Parties</text>
  <rect x="48" y="372" width="196" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="58" y="387" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">⋮⋮ Line Table</text>
  <rect x="48" y="398" width="196" height="22" rx="5" fill="rgba(192,132,252,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="58" y="413" fill="#c084fc" fontSize="10" fontFamily="ui-monospace, monospace">⋮⋮ Block · payment-terms</text>
  <rect x="48" y="424" width="196" height="14" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="58" y="434" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">⋮⋮ VAT Breakdown</text>

  <rect x="270" y="84" width="430" height="360" rx="8" fill="#ffffff" fillOpacity="0.95" stroke="#1f2937" strokeWidth="1"/>
  <text x="290" y="106" fill="#1e293b" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">LIVE PREVIEW · invoice-sample.xml</text>
  <line x1="270" y1="116" x2="700" y2="116" stroke="#cbd5e1" strokeWidth="1"/>
  <text x="290" y="138" fill="#1e293b" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">ACME Industries SA · Invoice FA-2026-001234</text>
  <text x="290" y="156" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Issue date · 24/05/2026   Due date · 23/06/2026</text>
  <rect x="290" y="172" width="200" height="50" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
  <text x="298" y="188" fill="#1e293b" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Customer</text>
  <text x="298" y="202" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">Globex Logistics</text>
  <text x="298" y="214" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">12 rue de Rivoli, 75001 Paris</text>
  <rect x="498" y="172" width="190" height="50" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
  <text x="506" y="188" fill="#1e293b" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Delivery</text>
  <text x="506" y="202" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">Globex Warehouse · Bonn DE</text>

  <rect x="290" y="234" width="398" height="20" rx="2" fill="#e2e8f0"/>
  <text x="298" y="248" fill="#1e293b" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">#  Description     Qty  Unit  Unit price  Amount  VAT</text>
  <line x1="290" y1="254" x2="688" y2="254" stroke="#cbd5e1" strokeWidth="1"/>
  <text x="298" y="270" fill="#475569" fontSize="9" fontFamily="ui-monospace, monospace">1  Cargo crates    20   pc    50,00 €    1 000,00 €  200,00</text>
  <text x="298" y="286" fill="#475569" fontSize="9" fontFamily="ui-monospace, monospace">2  Express ship   1    job   250,00 €     250,00 €   50,00</text>

  <rect x="490" y="306" width="198" height="64" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
  <text x="498" y="322" fill="#1e293b" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Totals</text>
  <text x="498" y="338" fill="#475569" fontSize="9" fontFamily="ui-monospace, monospace">Total HT    1 250,00 €</text>
  <text x="498" y="352" fill="#475569" fontSize="9" fontFamily="ui-monospace, monospace">VAT 20%       250,00 €</text>
  <text x="498" y="366" fill="#1e293b" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">Total TTC   1 500,00 €</text>

  <text x="290" y="400" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif" fontStyle="italic">page 1 / 1 · re-renders on every change</text>

  <rect x="716" y="84" width="248" height="360" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="728" y="106" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">INSPECTOR — HEADER</text>
  <line x1="728" y1="114" x2="952" y2="114" stroke="#1f2937" strokeWidth="1"/>
  <text x="728" y="134" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">SUPPLIER</text>
  <text x="728" y="152" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☑ Address</text>
  <text x="728" y="168" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☑ SIREN</text>
  <text x="728" y="184" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☑ VAT number</text>
  <text x="728" y="200" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☐ Phone</text>
  <text x="728" y="216" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☐ Email</text>

  <line x1="728" y1="232" x2="952" y2="232" stroke="#1f2937" strokeWidth="1"/>
  <text x="728" y="252" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">INVOICE METADATA</text>
  <text x="728" y="270" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☑ Invoice number</text>
  <text x="728" y="286" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☑ Issue date</text>
  <text x="728" y="302" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☑ Due date</text>
  <text x="728" y="318" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☐ Buyer reference</text>
  <text x="728" y="334" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">☐ Contract reference</text>

  <line x1="728" y1="354" x2="952" y2="354" stroke="#1f2937" strokeWidth="1"/>
  <text x="728" y="376" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">Custom block selected → the block</text>
  <text x="728" y="390" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">tree editor takes over this pane</text>
  <text x="728" y="404" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">with XPath autocomplete + style.</text>
</svg>

The three panes:

| Pane | What it carries |
|---|---|
| **Left — palette + section list** | Top half: the catalogue of available sections (Header, Parties, Line Table, Payment, Notes, Custom block, …). Click to add to the template. Bottom half: the ordered list of sections in this template. Click to select; drag the `⋮⋮` handle to reorder. |
| **Centre — live preview** | Renders the current template against a bundled sample invoice (or the operator's loaded XML) and **re-renders on every change** — toggling a checkbox, adding a section, editing a custom-block node all reflect in the preview in milliseconds. Clicking any block in the preview selects it; the inspector on the right jumps to the matching options. |
| **Right — inspector** | Shows the selected section's options grouped by category (Supplier, Invoice metadata, Columns, …). For a *Custom block*, the full **block tree editor** — text, field, row / column, repeat, conditional — opens directly in this pane with XPath autocomplete and per-node font / colour / alignment. |

### Loading a real invoice

The **↑ Load XML sample** button at the top of the builder accepts a real UBL invoice (drag-and-drop or file picker). Once loaded:

- The live preview switches to your data immediately.
- The XPath autocomplete inside the custom-block editor uses your XML — the dropdown suggestions match the elements your invoice actually carries.

The sample is per-session, not persisted with the template. Reopening the builder reverts to the bundled sample.

### Save and discard

The top-right **Save** button persists the template directly from the builder. **Close** (the `✕` button) shows a *Discard / Cancel* confirmation when there are unsaved changes — closing without confirming is not possible. The *Discard* path drops every edit since the last save; *Cancel* keeps you in the builder.

---

## Two kinds of sections

A layout is a list of sections. Two flavours can be mixed in the same template.

### Preset sections — the curated layout building blocks

Nine reorderable preset sections cover the canonical shape of an invoice PDF: **Header**, **Parties**, **Agent**, **Line Table**, **Document Allowances**, **VAT Breakdown**, **Totals**, **Payment**, **Notes**. Each one is backed by a Java class that knows how to render the matching part of an EN 16931 invoice; the user controls visibility via per-section toggles in the inline drawer.

The drawer groups toggles by **`Category · Name`** prefix and arranges them in side-by-side columns that mirror the PDF layout itself — *Header* reads as **METAS** | **SUPPLIERS**, *Line Table* as **Group headers** | **Columns** | **Sub-details** — instead of one long flat list. Toggles use the rounded-blue `Checkbox` component for visual consistency in dark mode.

The full list of toggles per preset section:

- **Header** — eight `META · …` toggles (invoice number, issue date, due date, contract / order / buyer references, invoice type, profile ID) plus six `Supplier · …` toggles (address, SIREN, legal form, VAT, phone, email).
- **Parties** — Customer and Delivery boxes, with separate toggles for SIREN, VAT, address, location ID and a *Show Delivery box* master switch (when off, the layout renders a single-column Customer block). The Delivery box shows the delivery party name (falling back to `ID: …` when only the location ID is set), the full street, postal code + city and country code — matching the Customer box.
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
| `note` | A **Note (by code)** block — pick a code from the `note-types` reference list; the renderer finds the `cbc:Note` carrying the matching `#CODE#` marker and prints its body in place. Lets you turn off the global Notes section and drop each note exactly where it belongs (header, between parties, near the totals, in a column). |

Several blocks can live in the same template — e.g. one for a French legal mention block, one for a structured payment-terms table, one for a watermark image. Each block carries a user-friendly `name` shown next to the section row in the editor, so a layout with three blocks reads as `Block · payment-terms`, `Block · legal-mentions`, `Block · watermark`.

#### XPath conventions inside a block

- The **picker** preserves the `cbc:` / `cac:` namespace prefixes — required by the namespace-aware backend; a manually-typed XPath without a prefix simply will not match.
- Picks are emitted as **`/*/<full-path>`** so they're independent of the document root (the same path applies to `Invoice` and `CreditNote`).
- Inside an iterating ancestor (a `repeat` or a `table` with an `xpath`), the picker further strips the iterator's path so child cells start with **relative** XPaths (`cbc:TaxAmount` instead of `/*/cac:TaxTotal/cac:TaxSubtotal/cbc:TaxAmount`). This keeps row templates portable when the iterator changes.

---

## Custom-block tree editor

When a *Custom block* section is selected inside the [visual builder](#visual-builder), the right pane switches from "checkbox toggles" to a full **tree editor**. It hosts everything the block needs in one place:

| Region of the inspector pane | Purpose |
|---|---|
| **Tree** | Indented view of every node in the block, with kind tags (`text`, `field`, `repeat`, `table`, …). Click a node to select it; the live preview in the centre highlights the matching region. |
| **Node toolbar** | Add child / wrap / unwrap / delete / move up / move down — operations applied to the currently selected node. The same operations are available via keyboard shortcuts. |
| **Attributes form** | Per-kind attribute form (XPath, label, format, alignment, gap, …) plus a **Style** sub-panel covering font, weight, size, colour, alignment and padding. |
| **JSON escape hatch** | A raw-JSON view of the current node — read-only by default, *Edit JSON* toggles in-place editing for advanced cases the form doesn't cover. |

A small but important detail at the top of the attributes form: a **Kind** select that **morphs** the selected node in place — turn a `column` into a `repeat` without deleting and re-adding it, the compatible attributes (children, style) are carried over by the `transmuteKind` helper. The same trick handles the common case of promoting a static layout block to an iterating one once the data shape is understood. The block-kind dropdown is sorted alphabetically.

The centre preview re-renders every keystroke — the iframe stays mounted and updates in place, so the operator sees the result without flicker as they edit XPaths or toggle styles. The **↑ Load XML sample** button at the top of the builder feeds a single sample to the XPath autocomplete of every block in the template.

---

## Template settings — builder toolbar

The builder toolbar carries a few settings applied to the whole layout:

| Setting | What it does |
|---|---|
| **Accent** | The accent colour for the section titles (CUSTOMER / DELIVERY), the highlighted total, the line-table header underline and the row-highlight background. Enter a 6-digit hex with or without `#`; the soft row-highlight tint is derived automatically. Empty keeps the default blue. |
| **Date** | The date pattern applied across the PDF — issue, due, period and per-line delivery dates. Choices: `yyyy-MM-dd` (default), `dd/MM/yyyy`, `dd-MM-yyyy`, `MM/dd/yyyy`, `dd MMM yyyy`, `dd MMMM yyyy`. |
| **Show logo** | Draws the company logo at the top of the supplier block on page 1. The file comes from *Logo path* in [Settings → Global → Processing → PDF](../configuration/system/global.md), where a *Logo offset X (pt)* also shifts it horizontally. PNG, JPG and GIF are supported. |

---

## Section slots

Beyond the preset toggles, three preset sections expose **named slots**, each holding a full custom-block tree (text, field, row, column, table, repeat, if, note, …) edited in place with the same block builder. A slot drops a block exactly where you'd otherwise have no anchor, without inserting a standalone *Block* section between two built-ins:

| Section | Slots |
|---|---|
| **Header** | *Left footer* (under the supplier block) and *Right footer* (under Profile ID) — e.g. a TVA intra-UE line under the supplier address, or a payment-terms caption under Profile ID. |
| **Parties** | *Customer footer* and *Delivery footer*, embedded inside each party box (sharing its cell width and font). |
| **Totals box** | *Before totals* (above the totals table) and *After totals* (below). |

Slots, like the top-level `block` section, show in the inspector as a compact summary card with an **Edit** pill: clicking it hands the whole inspector pane to the block builder, with a *← Back · Section · Slot* bar on top; selecting another section exits automatically.

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
- **Iterate inside the visual builder.** Toggling a section, then watching the centre preview re-render is the fastest way to converge on a layout — the live preview is always visible, no modal to open.
- **Load a real XML once per session.** The **↑ Load XML sample** button at the top of the builder feeds the picker for every block — load it once and every XPath autocompletion uses your data.
- **Don't delete `built-in`.** The button stays disabled on it for that reason — it is the safety fallback at the end of the resolution chain.
