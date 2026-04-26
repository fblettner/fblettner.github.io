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

## How each list is edited

Every reference list is presented as a simple **table** with the same three columns. The interaction model is identical across all twelve lists; the difference is only in the codes themselves and the regulatory reference behind each.

| Column | Description |
|---|---|
| **Code** | The standard code, exactly as defined by the reference standard (e.g. `EUR`, `380`, `S`, `0088`). |
| **Label FR** | French label displayed when the active locale is French. |
| **Label EN** | English label displayed when the active locale is English. |

Use the **+ Add** button at the bottom of the table to add a custom row, and the **×** button on a row to remove one. Rows are sorted by code.

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
