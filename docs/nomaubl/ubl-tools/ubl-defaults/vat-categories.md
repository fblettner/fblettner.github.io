---
title: VAT Categories
description: "UBL Defaults — VAT tab. Default VAT category, zero rate, source → UBL category mapping (BT-118 / BT-151) and category → VATEX exemption-code mapping (BT-121)."
keywords: [NomaUBL, UBL, defaults, BT-118, BT-121, BT-151, VAT, TVA, S, Z, E, K, G, AE, O, VATEX, exemption, category]
---

# VAT Categories

The **VAT** tab configures the VAT classification carried in every line and in the document-level VAT subtotals — `BT-118` (line VAT category) / `BT-151` (item VAT category) and `BT-121` (VAT exemption reason code). It exposes a default VAT category, a zero-rate code, a category mapping and an exemption mapping.

The override mechanism is described in the [Overview](./overview.md). All four sections of this tab are governed by a single override toggle — toggling it pulls the entire group into the document file, and removing it deletes the entire override block.

---

## Default VAT category

| Field | Description |
|---|---|
| **Default category** | UBL VAT category code emitted when the source code has no mapping row. Free-form text — typically a single letter (`S` standard, `Z` zero-rated, `E` exempt, `K` intra-community, `G` export, `AE` reverse charge, `O` not subject to VAT). |
| **Zero rate** | UBL VAT category code used when the line's VAT amount is zero. Useful to distinguish a genuinely zero-rated line (`Z`) from an exempt one (`E`) when the source XML only carries the percentage. |

---

## VAT category code mapping

A two-column editor maps the source's VAT category codes to the UBL VAT codes defined by the *vat-categories* reference list.

| Column | Description |
|---|---|
| **Source code** | Free-form text — the code that appears in the upstream XML (e.g. a JDE category, a SAP tax code, a custom alphanumeric value). |
| **VAT category code** | UBL value picked from the *vat-categories* reference list (`S`, `Z`, `E`, `K`, `G`, `AE`, `O`). |

### How the category mapping resolves

```
source XML VAT code
    │
    ├─ has a mapping row? ────► UBL category from the row
    │
    └─ no mapping row?    ────► Default category
```

The zero-rate setting takes precedence when the line's computed VAT amount is zero — it overrides the mapping for that case.

---

## VATEX exemption-code mapping

The second mapping table covers **BT-121** — the VAT exemption reason code (`VATEX-EU-79-C`, `VATEX-EU-IC`, `VATEX-FR-FRANCHISE`, etc.). Each row associates a UBL category (the *source* column here is the VAT category, not a free-form code) with the `VATEX-*` code that explains the exemption in the UBL output.

| Column | Description |
|---|---|
| **VAT category code** | UBL category that requires a VATEX code (typically `E`, `K`, `G`, `AE`, `O` — `S` and `Z` are filtered out because standard and zero-rated categories never carry an exemption reason). |
| **VATEX code** | The exemption code from the *vatex-codes* reference list. |

When NomaUBL emits a category needing an exemption reason, it looks up the corresponding `VATEX-*` code from this mapping. Without a row for a non-standard category, the receiving Plateforme Agréée typically rejects the document with a Schematron rule failure.

---

## Tips & best practices

- **Cover every non-standard category at least once.** `S` (standard) and `Z` (zero rate) are exempt from the VATEX requirement. Every other category (`E`, `K`, `G`, `AE`, `O`) must have a VATEX row, otherwise BR-FR / BR-CO Schematron rules reject the document.
- **`AE` is the right code for reverse-charge invoicing.** Pair it with `VATEX-EU-AE` in the VATEX mapping. The line's tax amount and VAT rate must be zero; the buyer accounts for the VAT.
- **`K` (intra-community) is for cross-border B2B inside the EU.** Pair it with `VATEX-EU-IC`. The seller VAT identifier (BT-31) and buyer VAT identifier (BT-48) must both be present in the UBL output.
- **`VATEX-FR-FRANCHISE` is for the French micro-entrepreneur exemption (article 293B CGI).** Use it on the `E` (exempt) category for invoices below the franchise threshold; the standard mention "TVA non applicable, art. 293 B du CGI" should also appear in *French Legal Notes*.
- **Use the zero-rate setting only when the source cannot distinguish.** When the upstream XML reliably emits the right category, leave the zero-rate field blank — relying on it is a fallback, not a primary mechanism.
- **Add codes to the reference lists, not here.** Missing target codes go into the *vat-categories* or *vatex-codes* reference lists; the dropdowns pick them up on next reload.
