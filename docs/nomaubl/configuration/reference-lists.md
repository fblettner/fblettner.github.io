---
title: Reference Lists
description: "Catalogue of the standard French e-invoicing reference lists embedded in NomaUBL: ISO/UN/CEN code lists, Factur-X / EN 16931 business term values, and PA-side action and rejection codes."
keywords: [NomaUBL, reference lists, French e-invoicing, EN 16931, Factur-X, UNTDID, ISO 4217, ISO 3166, UN/ECE, BT-3, BT-23, BT-29, BT-118, VATEX, scheme IDs, JD Edwards, SAP, NetSuite]
---

# Reference Lists

The **Reference Lists** section gathers the **standard code lists** required by the French e-invoicing reform and by the underlying European semantic model (EN 16931 / Factur-X). Each list is a controlled vocabulary — country codes, currency codes, invoice types, VAT categories, etc. — that NomaUBL uses to validate UBL documents and populate dropdowns in the UI.

Most of these lists come from international standards (ISO, UN/CEFACT, CEN); a couple are PA-side codes specific to the French infrastructure (action codes, rejection reason codes). NomaUBL ships with a curated default content for each list; the editors let you customise labels (notably the bilingual FR/EN translations) and add codes specific to your activity.

This page applies to documents from any source system — JD Edwards, SAP, NetSuite, custom ERP — once the source is mapped to UBL.

---

## At a glance

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="420" rx="14" fill="url(#rl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Reference Lists</text>
  <rect x="710" y="30" width="70" height="22" rx="5" fill="url(#rl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="745" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">💾 Save</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="180" height="336" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="104" fill="#94a3b8" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LISTS · 12 standard</text>

  <rect x="248" y="118" width="164" height="22" rx="4" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="258" y="133" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">currency-codes</text>
  <text x="248" y="156" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">country-codes</text>
  <text x="248" y="174" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">invoice-types</text>
  <text x="248" y="192" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">vat-categories</text>
  <text x="248" y="210" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">vat-exemption</text>
  <text x="248" y="228" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">unit-of-measure</text>
  <text x="248" y="246" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">payment-means</text>
  <text x="248" y="264" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">allowance-charge</text>
  <text x="248" y="282" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">scheme-ids</text>
  <text x="248" y="300" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">tax-scheme</text>
  <text x="248" y="318" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">action-codes</text>
  <text x="248" y="336" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">rejection-reasons</text>

  <rect x="432" y="84" width="348" height="336" rx="8" fill="rgba(74,158,255,0.04)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="444" y="104" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">currency-codes</text>
  <text x="586" y="104" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">ISO 4217 · BT-5, BT-6, BT-19</text>

  <rect x="444" y="118" width="320" height="26" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="135" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CODE  ·  LABEL FR  ·  LABEL EN</text>

  <rect x="444" y="148" width="320" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="165" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">EUR  ·  Euro  ·  Euro</text>
  <text x="744" y="165" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>

  <rect x="444" y="178" width="320" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="195" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">USD  ·  Dollar US  ·  US Dollar</text>
  <text x="744" y="195" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>

  <rect x="444" y="208" width="320" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="225" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">GBP  ·  Livre sterling  ·  Pound sterling</text>
  <text x="744" y="225" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>

  <rect x="444" y="238" width="320" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="255" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CHF  ·  Franc suisse  ·  Swiss franc</text>
  <text x="744" y="255" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>

  <rect x="444" y="268" width="320" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="285" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JPY  ·  Yen  ·  Yen</text>
  <text x="744" y="285" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>

  <rect x="444" y="298" width="320" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="315" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CAD  ·  Dollar canadien  ·  Canadian dollar</text>
  <text x="744" y="315" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>

  <text x="454" y="348" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">…</text>

  <rect x="444" y="368" width="120" height="26" rx="5" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="504" y="385" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Add row</text>
  <text x="580" y="385" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">curated defaults shipped; custom rows allowed</text>

  <rect x="20" y="118" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="133" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">12 standard lists</text>
  <text x="30" y="146" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ISO · UN/CEFACT · CEN · PA-side</text>
  <line x1="220" y1="134" x2="248" y2="129" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rl-arrow)"/>

  <rect x="820" y="118" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="133" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three-column table</text>
  <text x="830" y="146" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Code · Label FR · Label EN</text>
  <line x1="820" y1="134" x2="764" y2="131" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rl-arrow)"/>

  <rect x="820" y="368" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="383" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add row</text>
  <text x="830" y="396" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">extend with site-specific codes</text>
  <line x1="820" y1="384" x2="564" y2="384" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rl-arrow)"/>
</svg>

---

## How each list is edited

Every reference list is presented as a simple **table** with the same three columns. The interaction model is identical across all twelve lists; the difference is only in the codes themselves and the regulatory reference behind each.

| Column | Description |
|---|---|
| **Code** | The standard code, exactly as defined by the reference standard (e.g. `EUR`, `380`, `S`, `0088`). |
| **Label FR** | French label displayed when the active locale is French. |
| **Label EN** | English label displayed when the active locale is English. |

Use the **+ Add** button at the bottom of the table to add a custom row, and the **×** button on a row to remove one. Rows are sorted by code.

:::info[Custom (non-standard) lists]
The twelve lists below are the regulated catalogs shipped with NomaUBL. Operator-defined lists — used to drive grid dropdowns and filters from outside data — live on a separate page: [Custom Lists](./custom-lists.md). Those can also be synced from an API or SQL connector instead of being edited row by row.
:::

---

## Standard lists shipped with NomaUBL

The twelve reference lists below are built into NomaUBL and aligned with the regulation. They cover everything the French e-invoicing pipeline needs to validate UBL documents end-to-end.

| List | Standard / business term | Purpose |
|---|---|---|
| **Country Codes** | ISO 3166-1 alpha-2 | Two-letter country codes used for buyer / seller / delivery addresses. |
| **Currency Codes** | ISO 4217 — `BT-5` / `BT-6` | Document currency and accounting currency on invoices. |
| **Invoice Type Codes** | UNTDID 1001 — `BT-3` | Type of invoice document (e.g. commercial invoice, credit note, corrected invoice). |
| **Note Type Codes** | UNTDID 4451 — `BT-22` | Qualifier of free-text notes attached to the invoice. |
| **Payment Means Codes** | UNTDID 4461 — `BT-81` | How the invoice is to be paid (transfer, direct debit, card, …). |
| **Profile IDs** | `BT-23` (*Cadre de facturation*) | Business process / invoicing framework identifier. |
| **Scheme IDs** | `BT-29` / `BT-30` / `BT-34` / `BT-49` / `BT-71` | Identifier scheme references (electronic addressing schemes, party identifier schemes). |
| **Unit of Measure Codes** | UN/ECE Recommendation 20 — `BT-130` | Quantity unit codes for invoice lines (piece, kilogram, hour, …). |
| **VAT Category Codes** | EN 16931 — `BT-118` / `BT-151` | VAT category at document and line level (standard rate, reduced rate, exempt, reverse charge, …). |
| **VATEX Exemption Reason Codes** | VATEX — `BT-121` | Codified VAT exemption reasons referenced when a line is exempt. |
| **Expected Action Codes** | `Y56ACTN` (*Action attendue*) | Action codes expected by the Plateforme Agréée (PA-side catalog). |
| **Rejection Reason Codes** | `Y56RSRC` (*Motif de rejet*) | Reasons returned by the PA when an invoice is rejected. |

---

## Tips & best practices

- **Stick to the standard codes.** Adding a custom code outside its referential breaks validation downstream — the PA, the receiver's PA and the PPF directory all expect the standard values.
- **Customise labels, not codes.** Translating a label to better fit your business vocabulary is safe; renaming the underlying code is not.
- **Bilingual labels are not optional.** Always fill both Label FR and Label EN — the UI falls back to the raw code when the active locale's label is empty.
- **Keep VATEX consistent with your VAT categories.** VATEX codes are only meaningful when paired with an exempting VAT category — using one without the other produces invalid invoices.
- **Action / Rejection codes are PA-defined.** If your PA renames or adds codes in its catalog, mirror the change here so the UI and the API payloads stay aligned.
