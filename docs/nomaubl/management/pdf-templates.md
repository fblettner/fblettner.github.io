---
title: PDF Templates
description: "First-class library of reusable PDF layouts. Each template is a pdf-template resource referenced by documents by name. Edit once, propagate everywhere via a full-screen visual builder — palette of sections on the left, live preview in the centre, inspector with options + custom-block tree editor on the right."
keywords: [NomaUBL, PDF templates, pdf-template, layout, defaultPdfTemplate, built-in, built-in-modern, classic style, modern style, visual builder, block section, field, repeat, table, XPath, JD Edwards, SAP, NetSuite, custom ERP]
---

# PDF Templates

The **PDF Templates** screen is the library of **reusable PDF layouts** that NomaUBL applies when rendering an invoice. Every layout is a `pdf-template` resource saved in `config-pdf.json`; documents pick a layout by **name** via their `pdfTemplate` property — so a single layout can be shared across many documents.

The page covers four operations:

- **manage** the catalogue (Add / Import / Copy / Remove);
- **edit** a layout via the **visual builder** — a full-screen editor with the section catalogue on the left, a live preview in the centre and an inspector on the right;
- **mark a default** for documents that don't pick an explicit layout;
- **load a real invoice XML** into the builder so the preview and the XPath autocomplete switch to your data.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP — since the input it consumes is the generated UBL 2.1, not the source XML.

---

## Opening the page

- Sidebar → **Management → PDF Templates**.
- The page lists every layout in the catalogue. The entries **`built-in`** and **`built-in-modern`** are the two bundled factory layouts — the same sections drawn in the [classic and the modern style](#style), read-only and always present; `built-in` is the safety fallback.
- The current default layout — i.e. what a document with no explicit `pdfTemplate` resolves to — is marked with a yellow ★ in the list.

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

1. The **document** of that invoice (read from `F564231.UHTMPL`) carries a `pdfTemplate` property — if set, that name is used.
2. Otherwise, the `defaultPdfTemplate` property on the **`global`** template is used — set from this page via the **Set as default** button.
3. Otherwise, the bundled **`built-in`** layout is used — always present, never deletable.

The third step is the safety net. A new installation sets `defaultPdfTemplate` to **`built-in-modern`**, so its PDFs come out in the modern style before any layout is created.

---

## Toolbar actions

The toolbar at the top of the page covers the catalogue lifecycle plus the default override.

| Action | Effect |
|---|---|
| **Open visual builder** | Opens the selected layout in the full-screen [visual builder](#visual-builder) — palette on the left, live preview in the centre, inspector on the right. The primary editing surface. |
| **Add** | Opens a modal asking for a name and a description. Creates an empty `pdf-template` resource — start by adding sections in the builder. |
| **Import** | Loads a JSON file produced by another instance (or the *Export* action). Updates the matching template if the name already exists, otherwise creates it. The reserved names `built-in` and `built-in-modern` are rejected. |
| **Copy** | Duplicates the selected layout under a new name. The fastest way to derive a variant from `built-in`, `built-in-modern` or from an existing customer-specific template. |
| **Remove** | Deletes the selected layout after a confirmation. Disabled on the two factory layouts. |
| **Set as default** | Writes the selected layout's name into `global.defaultPdfTemplate`. Documents without an explicit `pdfTemplate` then resolve to this layout. |
| **Reset to factory** | Clears `global.defaultPdfTemplate`, restoring the chain to `built-in`. |

---

## The catalogue

The list on the left shows every saved layout plus the two bundled factory layouts, each as a card with its name and description.

- **`built-in`** and **`built-in-modern`** — pinned to the top, read-only, marked with a `factory` badge; their description reads *Bundled default PDF template* and *Bundled modern PDF template*. Selecting it opens the editor in a banner-tagged read-only mode. *Copy* is the only way to derive an editable layout from it.
- **★ marker** — the layout currently used as the default for documents with no explicit `pdfTemplate`. Exactly one layout carries the star at any time.
- **Description** — free-text label persisted on the resource. Surfaced both on its card in the list and in the *PDF Template* selector on a document.

---

## Style — classic or modern \{#style\}

A layout is drawn in one of two styles, chosen with the **Style** switch (*Classic* / *Modern*) of the [builder toolbar](#template-settings). The style changes the drawing only: the sections, their options, the labels, the accent colour, the logo and the number and date formats stay the same, so a template switches back and forth without losing anything. Existing templates keep the classic layout; the factory layout **`built-in-modern`** is the modern counterpart of `built-in`, with dates as `dd/MM/yyyy`.

<svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs><marker id="pdfmod-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker></defs>
  <rect x="300" y="20" width="400" height="580" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
  <rect x="318" y="40" width="64" height="26" rx="4" fill="#e2e8f0" stroke="none" strokeWidth="1"/>
  <text x="350" y="57" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">LOGO</text>
  <text x="682" y="48" fill="#0f766e" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="end">INVOICE</text>
  <text x="682" y="70" fill="#0f172a" fontSize="17" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="end">FA-2026-001234</text>
  <rect x="318" y="84" width="364" height="40" rx="5" fill="#0f766e" stroke="none" strokeWidth="1"/>
  <text x="328" y="99" fill="#ccfbf1" fontSize="7" fontFamily="system-ui, sans-serif">Issue Date</text>
  <text x="328" y="115" fill="#ffffff" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">24/05/2026</text>
  <text x="419" y="99" fill="#ccfbf1" fontSize="7" fontFamily="system-ui, sans-serif">Due Date</text>
  <text x="419" y="115" fill="#ffffff" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">23/06/2026</text>
  <text x="510" y="99" fill="#ccfbf1" fontSize="7" fontFamily="system-ui, sans-serif">Period</text>
  <text x="510" y="115" fill="#ffffff" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">05/2026</text>
  <text x="601" y="99" fill="#ccfbf1" fontSize="7" fontFamily="system-ui, sans-serif">Amount Payable</text>
  <text x="601" y="115" fill="#ffffff" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">1 500,00 €</text>
  <rect x="318" y="136" width="178" height="82" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
  <text x="328" y="151" fill="#0f766e" fontSize="7" fontFamily="system-ui, sans-serif" fontWeight="700">SELLER</text>
  <text x="328" y="166" fill="#0f172a" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">ACME Industries SA</text>
  <text x="328" y="179" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">12 rue de Rivoli, 75001 Paris</text>
  <text x="328" y="195" fill="#475569" fontSize="7.5" fontFamily="ui-monospace, monospace">SIREN  123 456 789</text>
  <text x="328" y="207" fill="#475569" fontSize="7.5" fontFamily="ui-monospace, monospace">VAT number  FR12 123456789</text>
  <rect x="504" y="136" width="178" height="82" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
  <text x="514" y="151" fill="#0f766e" fontSize="7" fontFamily="system-ui, sans-serif" fontWeight="700">CUSTOMER</text>
  <text x="514" y="166" fill="#0f172a" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">Beta SARL</text>
  <text x="514" y="179" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">12 rue de Rivoli, 75001 Paris</text>
  <text x="514" y="195" fill="#475569" fontSize="7.5" fontFamily="ui-monospace, monospace">SIREN  987 654 321</text>
  <text x="514" y="207" fill="#475569" fontSize="7.5" fontFamily="ui-monospace, monospace">VAT number  FR98 987654321</text>
  <text x="318" y="234" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Order 4500012 · Buyer Ref. ACH-77</text>
  <rect x="318" y="244" width="364" height="18" rx="3" fill="#f1f5f9" stroke="none" strokeWidth="1"/>
  <text x="326" y="256" fill="#334155" fontSize="7.5" fontFamily="system-ui, sans-serif" fontWeight="700">Description</text>
  <text x="520" y="256" fill="#334155" fontSize="7.5" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="end">Qty</text>
  <text x="580" y="256" fill="#334155" fontSize="7.5" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="end">Unit price</text>
  <text x="632" y="256" fill="#334155" fontSize="7.5" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="end">Amount</text>
  <text x="676" y="256" fill="#334155" fontSize="7.5" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="end">Tax</text>
  <text x="326" y="278" fill="#0f172a" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="600">Cargo crates</text>
  <text x="520" y="278" fill="#334155" fontSize="8.5" fontFamily="system-ui, sans-serif" textAnchor="end">20</text>
  <text x="580" y="278" fill="#334155" fontSize="8.5" fontFamily="system-ui, sans-serif" textAnchor="end">50,00</text>
  <text x="632" y="278" fill="#334155" fontSize="8.5" fontFamily="system-ui, sans-serif" textAnchor="end">950,00</text>
  <text x="676" y="278" fill="#334155" fontSize="8.5" fontFamily="system-ui, sans-serif" textAnchor="end">20 %</text>
  <text x="326" y="292" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">Item code CR-20 · Origin France · Customer line no. 10</text>
  <rect x="326" y="298" width="70" height="13" rx="6" fill="#ccfbf1" stroke="none" strokeWidth="1"/>
  <text x="361" y="308" fill="#0f766e" fontSize="7" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">Discount −5 %</text>
  <line x1="318" y1="318" x2="682" y2="318" stroke="#e2e8f0" strokeWidth="1"/>
  <text x="326" y="334" fill="#0f172a" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="600">Express shipping</text>
  <text x="520" y="334" fill="#334155" fontSize="8.5" fontFamily="system-ui, sans-serif" textAnchor="end">1</text>
  <text x="580" y="334" fill="#334155" fontSize="8.5" fontFamily="system-ui, sans-serif" textAnchor="end">300,00</text>
  <text x="632" y="334" fill="#334155" fontSize="8.5" fontFamily="system-ui, sans-serif" textAnchor="end">300,00</text>
  <text x="676" y="334" fill="#334155" fontSize="8.5" fontFamily="system-ui, sans-serif" textAnchor="end">20 %</text>
  <text x="326" y="348" fill="#64748b" fontSize="7.2" fontFamily="system-ui, sans-serif">Period 01/05/2026 – 31/05/2026</text>
  <line x1="318" y1="358" x2="682" y2="358" stroke="#e2e8f0" strokeWidth="1"/>
  <rect x="318" y="372" width="190" height="46" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
  <text x="328" y="386" fill="#0f766e" fontSize="7" fontFamily="system-ui, sans-serif" fontWeight="700">VAT breakdown</text>
  <text x="328" y="400" fill="#475569" fontSize="7.5" fontFamily="ui-monospace, monospace">S · 20 %   1 250,00   250,00</text>
  <rect x="318" y="424" width="190" height="46" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
  <text x="328" y="438" fill="#0f766e" fontSize="7" fontFamily="system-ui, sans-serif" fontWeight="700">PAYMENT</text>
  <text x="328" y="452" fill="#475569" fontSize="7.5" fontFamily="system-ui, sans-serif">Means  Credit transfer</text>
  <text x="328" y="464" fill="#475569" fontSize="7" fontFamily="ui-monospace, monospace">IBAN  FR76 3000 1007 9412 3456 7890 185</text>
  <rect x="520" y="372" width="162" height="98" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
  <text x="530" y="390" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">Total HT</text>
  <text x="672" y="390" fill="#334155" fontSize="8" fontFamily="system-ui, sans-serif" textAnchor="end">1 250,00</text>
  <text x="530" y="405" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">Total Tax</text>
  <text x="672" y="405" fill="#334155" fontSize="8" fontFamily="system-ui, sans-serif" textAnchor="end">250,00</text>
  <text x="530" y="420" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">Total TTC</text>
  <text x="672" y="420" fill="#334155" fontSize="8" fontFamily="system-ui, sans-serif" textAnchor="end">1 500,00</text>
  <rect x="526" y="440" width="150" height="22" rx="4" fill="#0f766e" stroke="none" strokeWidth="1"/>
  <text x="534" y="455" fill="#ffffff" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="700">Amount Payable</text>
  <text x="670" y="455" fill="#ffffff" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="end">1 500,00 €</text>
  <rect x="318" y="482" width="364" height="30" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
  <text x="328" y="501" fill="#475569" fontSize="7.2" fontFamily="system-ui, sans-serif">Payment terms: 30 days net. Late payment penalty: 3 × the legal interest rate.</text>
  <line x1="318" y1="570" x2="682" y2="570" stroke="#e2e8f0" strokeWidth="1"/>
  <text x="318" y="584" fill="#94a3b8" fontSize="6.5" fontFamily="system-ui, sans-serif">ACME Industries SA  ·  SA  ·  SIREN 123456789  ·  VAT number FR12 123456789</text>
  <text x="682" y="584" fill="#94a3b8" fontSize="6.5" fontFamily="system-ui, sans-serif" textAnchor="end">FA-2026-001234  ·  Page 1 / 1</text>
  <rect x="20" y="36" width="220" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="52" fill="currentColor" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Header</text>
  <text x="30" y="66" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">seller logo · document number</text>
  <line x1="240" y1="55" x2="316" y2="53" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdfmod-arrow)"/>
  <rect x="20" y="86" width="220" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="102" fill="currentColor" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Key facts strip</text>
  <text x="30" y="116" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dates, period, amount to pay</text>
  <line x1="240" y1="105" x2="316" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdfmod-arrow)"/>
  <rect x="20" y="158" width="220" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="174" fill="currentColor" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Seller and buyer cards</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">identifiers aligned</text>
  <line x1="240" y1="177" x2="316" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdfmod-arrow)"/>
  <rect x="20" y="478" width="220" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="494" fill="currentColor" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Notes</text>
  <text x="30" y="508" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">full width</text>
  <line x1="240" y1="497" x2="316" y2="497" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdfmod-arrow)"/>
  <rect x="760" y="262" width="220" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="278" fill="currentColor" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Lines kept whole</text>
  <text x="770" y="292" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">never split across pages</text>
  <line x1="760" y1="281" x2="684" y2="290" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdfmod-arrow)"/>
  <rect x="760" y="312" width="220" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="328" fill="currentColor" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Details under the item</text>
  <text x="770" y="342" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">full width · allowances as tags</text>
  <line x1="760" y1="331" x2="600" y2="306" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdfmod-arrow)"/>
  <rect x="760" y="400" width="220" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="416" fill="currentColor" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">VAT and payment</text>
  <text x="770" y="430" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">beside the totals card</text>
  <line x1="760" y1="419" x2="684" y2="420" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdfmod-arrow)"/>
  <rect x="760" y="558" width="220" height="38" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="574" fill="currentColor" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Page footer</text>
  <text x="770" y="588" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">legal line · page n / N</text>
  <line x1="760" y1="577" x2="684" y2="578" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pdfmod-arrow)"/>
</svg>


In the modern style:

- **Header** — the logo and the document kind and number at the top; the seller's name and address are printed in the seller card below, not repeated here. With no *Parties* section, the header prints them itself, with the seller's identifiers.
- **Key facts strip** — issue date, due date, period and amount to pay, on the accent colour.
- **Seller and buyer cards** — side by side, identifiers aligned (SIREN, VAT number, electronic address, tax ID), contact and email; the other references (order, buyer reference…) follow under the cards.
- **Lines** — a line is never split across two pages; its details (item code, origin, customer line, period…) run under the item across the full width, and line allowances and charges show as tags.
- **VAT and payment** — a *VAT breakdown* placed just before *Totals* and a *Payment* placed just after it are drawn on the left of a totals card that ends with the amount payable; placed elsewhere, each is drawn on its own.
- **Notes** — on the full width.
- **Page footer** — on every page: the seller's legal line (name, legal form, SIREN, VAT number) on the left, the document number and *Page n / N* on the right.

The free-form [`block`](#block-sections--xpath-driven-free-form-composition) sections keep the same drawing in both styles. With a pale accent colour, the text printed on it switches to dark so it stays readable. Every word the modern style adds is one of the template's [labels](#labels).

---

## Visual builder \{#visual-builder\}

The **Open visual builder** button opens the layout in a full-screen editor with three panes side-by-side — the canonical way to edit a `pdf-template`. The builder unifies everything in one screen with the preview always visible.

:::info[The readable PDF shows labels, not codes]
Coded fields render only their human label — invoice type, profile, payment method, note categories, document references and item identifiers no longer carry the raw code (*Payment: Bank transfer*, not *Payment: 30 — Bank transfer*; a note reads *Payment information —*, not *[PMD] Payment information —*). The codes stay in the UBL for machine processing.
:::

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

#### Toggles of each preset section

The full list of toggles per preset section:

- **Header** — nine `META · …` toggles (invoice number, issue date, due date, contract / despatch advice (BT-16) / order / buyer references, invoice type, profile ID) plus six `Supplier · …` toggles (address, SIREN, legal form, VAT, phone, email).
- **Parties** — Customer and Delivery boxes, with separate toggles for SIREN, VAT, address, location ID and a *Show Delivery box* master switch (when off, the layout renders a single-column Customer block). The Delivery box shows the delivery party name (falling back to `ID: …` when only the location ID is set), the full street, postal code + city and country code — matching the Customer box; its identifier is labelled after its scheme (SIRET, GLN…), *ID* when the scheme is unknown. The Customer box also prints the buyer contact — *Contact name*, *Phone*, *Email*, each with its own option, on by default — when the invoice carries it; on a self-billed invoice, this is where the issuing company's contact appears.
- **Line Table** — group-header toggles (*Delivery group*, *Page break per delivery*, *Document Reference group* and *Group by order* — a third band below the delivery and document-reference bands, carrying the buyer's and the seller's order numbers on one line: *Customer Order Reference: … Order number: …*), two per-line options, on by default — *Order line number* prints the customer line number (*Customer line no.*) under each line, *Customer Order Reference* prints the customer order reference with the sales order under each line when *Group by order* is off (the order band carries it otherwise; a template saved before this option counts it as on), column toggles (`Line #`, `Description`, `Quantity`, `Unit`, `Unit Price`, `Net unit price`, `Amount`, `Tax`) — the *Unit price* column (BT-146) shows the price base quantity when it differs from 1 (`40,49 / 100`); the **Net unit price** column (line amount ÷ quantity, i.e. the price once line allowances and charges are folded in) is **off by default**, so the item price alone stays the standard layout. Sub-rows span the real column count, so hiding or adding columns never misaligns them. The line table also carries ten sub-detail toggles for line metadata (BT-127, BT-134/135, **line despatch advice** (EXT-FR-FE-BG-07), **BT-155 — Seller's item code**, BT-156, BT-157, BT-158, **BT-159 — Country of origin** *(prints the country's full name resolved from the shared countries list — not the ISO code)*, allowances / charges, additional item properties). The order band follows the same reset rules as the others: a new delivery re-prints both inner breadcrumbs, a new document reference re-prints the order band.
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

## Template settings — builder toolbar \{#template-settings\}

The builder toolbar carries a few settings applied to the whole layout:

| Setting | What it does |
|---|---|
| **Style** | *Classic* or *Modern* — how the sections are drawn; see [Style](#style). A template that never chose keeps *Classic*. |
| **Accent** | The accent colour for the section titles (CUSTOMER / DELIVERY), the highlighted total, the line-table header underline and the row-highlight background. Enter a 6-digit hex with or without `#`; the soft row-highlight tint is derived automatically. Empty keeps the default blue. |
| **Date** | The date pattern applied across the PDF — issue, due, period and per-line delivery dates. Choices: `yyyy-MM-dd` (default), `dd/MM/yyyy`, `dd-MM-yyyy`, `MM/dd/yyyy`, `dd MMM yyyy`, `dd MMMM yyyy`. |
| **Show logo** | Draws the company logo at the top of the supplier block on page 1. The file comes from *Logo path* in [Settings → Global → Processing → PDF](../configuration/system/global.md), where a *Logo offset X (pt)* also shifts it horizontally and *Logo width / height (pt)* set the box it is scaled to (ratio kept; blank = 200 × 80 points at most). The builder preview uses the same size as the produced PDF. PNG, JPG and GIF are supported. |
| **Trim zeros** | Drops trailing zero decimals from amounts, unit prices and quantities — a whole amount prints as `23` instead of `23.00`, and a `23.0000` unit price prints as `23`. Off by default, which keeps the fixed two-decimal amount and four-decimal price display. The setting is per template and applies to the line table, the totals box, and both the readable and on-screen PDFs. |
| **Decimals** — *amount* / *price* / *qty* | Decimals printed per kind of number, each `auto` or `0`–`6`. *Amount* covers line amounts, allowances, VAT rows and totals; *price* covers the item price, the net unit price and the price discount; *qty* covers invoiced quantities. `auto` keeps the standard display (amounts 2 decimals, prices and quantities as in the UBL), so existing templates render unchanged. A fixed count is rounded half away from zero, as AFNOR requires; *Trim zeros* still applies on top. |

### Labels \{#labels\}

Every text the PDF generator prints — 75 labels across the document header, parties, lines table, line details, VAT summary, totals, payment and page footer, including the words only the modern style prints (seller, contact, email, payment rows, VAT breakdown, page…) — can be overridden **per PDF template and per language**. Open **Labels** in the *Template* group of the builder:

- each row shows the label key with an **FR** and an **EN** field; the default wording shows as placeholder, and a blank field keeps it;
- a **Search…** box and an **Overridden only (N)** filter help find a label; overridden keys are highlighted;
- **×** resets a row to the default, and **Copy labels from…** loads the overrides of another PDF template;
- the live preview reflects the overrides as you type.

A customer asking for *N° de facture* instead of *N° facture UBL* gets it on their template only; other templates keep the default wording. The full catalogue, with each key's default EN / FR text, is available from `GET /api/pdf-templates/labels`.

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
| `DELETE /api/templates/{name}` | Removes a layout. The reserved `built-in` and `built-in-modern` are rejected. |
| `POST /api/pdf-templates/preview` | Renders an arbitrary `pdfTemplate` JSON against a sample invoice — used by the live preview iframe. |
| `PUT /api/templates/global` (with `defaultPdfTemplate`) | Behind *Set as default* / *Reset to factory*. |

---

## Tips & best practices

- **Start from a factory layout via Copy.** `built-in` (classic) and `built-in-modern` are solid baselines — derive variants by copying and tuning the toggles instead of starting from an empty template.
- **One layout, many documents.** For each invoice variant (standard, credit note, recipient receipt …) prefer one shared layout over per-document inline JSON. The benefit is a single edit point when the legal mentions or the column set changes.
- **Set a default early.** Mark a layout as default before connecting customer-specific documents — every new document then resolves to it implicitly, and the explicit `pdfTemplate` property on a doc template stays reserved for genuine variants.
- **Use `block` for what presets don't cover.** Custom legal mentions, country-specific footers, structured signature blocks, watermarks — all best modelled as a `block` rather than asked of an existing preset.
- **Iterate inside the visual builder.** Toggling a section, then watching the centre preview re-render is the fastest way to converge on a layout — the live preview is always visible, no modal to open.
- **Load a real XML once per session.** The **↑ Load XML sample** button at the top of the builder feeds the picker for every block — load it once and every XPath autocompletion uses your data.
- **Don't delete the factory layouts.** The button stays disabled on them for that reason — `built-in` is the safety fallback at the end of the resolution chain.
