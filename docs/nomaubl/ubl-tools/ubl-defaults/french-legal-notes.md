---
title: French Legal Notes
description: "UBL Defaults — Notes tab. Document-level legal notes (BT-22) carrying mandatory French wording — payment delay, recovery fee, general terms — with note-type prefix."
keywords: [NomaUBL, UBL, defaults, BT-22, notes, French, mention légale, payment delay, recovery fee, general terms, note types, prefix]
---

# French Legal Notes

The **Notes** tab manages the document-level legal notes (`BT-22`) that NomaUBL adds to every generated UBL document. Each note is composed of a **type prefix** (UNTDID 4451 / a NomaUBL extension code) followed by free-form text. The Plateforme Agréée and downstream consumers use the prefix to dispatch the note to the right field of their own systems.

The override mechanism is described in the [Overview](./overview.md). The complete list of notes is governed by a single override toggle.

---

## Notes editor

Each note is a card with two fields:

| Field | Description |
|---|---|
| **Type** | Note type code picked from the *note-types* reference list — populates the `BT-22` prefix (e.g. `#PMD#` for payment delay, `#PMT#` for payment terms, `#REG#` for the general regulatory note, `#ABL#` for billing reference, `#AAI#` for additional invoice information). |
| **Text** | Free-form note body. May span several lines. The full UBL note is rendered as `#TYPE#<text>`. |

The trash icon removes the note; the **Add** button at the bottom appends an empty note.

### Standard note types (note-types reference list)

| Prefix | Common use |
|---|---|
| `REG` | Generic regulatory mention (e.g. *« TVA non applicable, art. 293 B du CGI »* for the franchise exemption). |
| `ABL` | Billing reference / period reference. |
| `AAI` | Additional invoice information. |
| `PMD` | Payment delay / penalty mention. |
| `PMT` | Payment terms description. |
| `AAB` | Additional billing reference. |
| `TXD` | Tax notice (additional VAT-related disclosures). |

The full prefix list lives in the *note-types* reference list (*Configuration → Reference Lists*). Add a new entry there to expose new prefixes in the dropdown.

---

## Mandatory French notes (typical setup)

| Type | Required text | When |
|---|---|---|
| `PMD` | *Tout retard de paiement entraînera des pénalités calculées au taux légal en vigueur, conformément à l'article L. 441-10 du Code de commerce.* | Every B2B French invoice. |
| `PMD` | *Indemnité forfaitaire pour frais de recouvrement de 40 € (article D. 441-5 du Code de commerce).* | Every B2B French invoice. |
| `REG` | *TVA non applicable, art. 293 B du CGI* | Micro-entrepreneur invoices below the franchise threshold (paired with VAT category `E` and `VATEX-FR-FRANCHISE`). |
| `PMT` | Cash-discount (escompte) wording when applicable. | Invoices offering an early-payment discount. |

These notes are **statutory** under the French Commercial and Tax codes — they must appear on the printed and electronic invoice. NomaUBL emits them verbatim into the BT-22 field.

---

## Tips & best practices

- **Treat the defaults as the regulatory baseline.** The two `PMD` notes (payment penalty + recovery fee) are statutory for every B2B French invoice. Configure them once in the defaults file; document overrides should only deviate when the wording differs (e.g. a customer contractual clause).
- **Keep the wording verbatim.** The Code de commerce wording is referenced in audit and litigation. Paraphrasing it weakens the legal value of the invoice. Copy from the official text.
- **`REG` is the right type for the franchise exemption mention.** Pair it with a VAT setup (category `E`, VATEX `VATEX-FR-FRANCHISE`) on the [VAT Categories](./vat-categories.md) tab. Without the textual mention, BR-FR rules reject the invoice.
- **Override per template only when the wording legitimately differs.** A template that emits invoices to a foreign-buyer subsidiary may need an English translation; a template that emits domestic invoices should use the defaults.
- **Reference list governs the dropdown.** Custom prefixes must be added to *note-types* in *Configuration → Reference Lists*; the dropdown picks them up on next reload.
