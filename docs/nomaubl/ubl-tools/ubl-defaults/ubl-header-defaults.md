---
title: UBL Header Defaults
description: "UBL Defaults — Header tab. UBL version, customization ID (BT-24), default country (BT-40 / BT-55) and per-template date input format."
keywords: [NomaUBL, UBL, defaults, header, BT-24, BT-40, BT-55, BT-54, BT-79, CountrySubentity, region, customizationID, ublVersion, country, date format, EN 16931, extended-ctc-fr]
---

# UBL Header Defaults

The **Header** tab configures the document-level identifiers carried at the top of every generated UBL document. See the [Overview](./overview.md) for how the override mechanism applies.

---

## Header fields

| Field | UBL | Description |
|---|---|---|
| **UBL Version** | `cbc:UBLVersionID` | UBL specification version applied. Standard value: `2.1`. |
| **Customization ID** | BT-24 | The conformance profile string. For French e-invoicing: `urn:cen.eu:en16931:2017#conformant#urn.cpro.gouv.fr:1p0:extended-ctc-fr`. |
| **Default Country** | BT-40 / BT-55 | Country code applied to seller (`BT-40`) and buyer (`BT-55`) postal addresses when the source data does not provide one. Picked from the *countries* reference list. |

These three fields are subject to the override mechanism in document mode — they appear under the override banner.

---

## Buyer & delivery region (`cbc:CountrySubentity`)

The country **subdivision** — the buyer region (BT-54) and the deliver-to region (BT-79) — is not a default set on this tab. The framework emits `cbc:CountrySubentity` on the buyer and delivery addresses **when the document XSL maps the `TAG_CUSTOMER_REGION` and `TAG_DELIVERY_REGION` variables** from the source data. Map them in the document's UBL XSL (see [XSL Editor](../xsl-editor.md)); leave them unset and no `cbc:CountrySubentity` is written — the region is omitted rather than guessed.

---

## Date Input Format

A separate **Date Input Format** sub-section sits below the header fields. It controls how NomaUBL interprets dates coming from the source XML (BT-2 issue date, BT-9 due date, line period dates, etc.) before normalising them to ISO 8601 (`yyyy-MM-dd`) for the UBL output.

| Format | Example | Notes |
|---|---|---|
| `dd/MM/yyyy` | `31/12/2024` | French / European common format. |
| `MM/dd/yyyy` | `12/31/2024` | US format. |
| `dd-MM-yyyy` | `31-12-2024` | European with hyphens. |
| `yyyy-MM-dd` | `2024-12-31` | ISO 8601 — **no conversion**, the source value is passed through as-is. |
| `yyyyMMdd` | `20241231` | Compact, common in JDE BIP outputs. |

Pick the format that matches the source XML. If sources mix formats, use *Document Types → runtime args* to override per document type rather than juggling at this level.

---

## Tips & best practices

- **Customization ID drives Schematron selection.** Switching it from EN 16931 to `extended-ctc-fr` (and back) selects a different rule set in *UBL Tools → Validate*. Keep it aligned with what the receiving Plateforme Agréée expects.
- **The default country fills only what the source omits.** When the source XML carries a country code, the source value wins regardless of this default.
- **Date Input Format is per-file, not per-template override.** Set it once on the defaults file to match the upstream system's date convention.
- **Use `yyyy-MM-dd` when the source already emits ISO dates.** Selecting it skips the conversion step entirely and is the most robust choice.
