---
title: Invoice Type
description: "UBL Defaults — Invoice Type tab. Default UBL invoice type code (BT-3) and rule-based selection driven by source XML conditions."
keywords: [NomaUBL, UBL, defaults, BT-3, invoice type, type code, 380, 381, 384, 389, rules, AND, OR, conditions]
---

# Invoice Type

The **Invoice Type** tab configures `BT-3` — the UBL **InvoiceTypeCode** — using a default plus an ordered list of conditional rules. The first rule whose conditions all match wins; if no rule matches, the default is used.

The override mechanism is described in the [Overview](./overview.md).

---

## Default invoice type

| Field | Description |
|---|---|
| **Default** | The invoice type code used when no rule matches. Picked from the *invoice-types* reference list (see *Configuration → Reference Lists*). The most common B2B default is `380` (commercial invoice). |

### UNTDID 1001 codes used by the French e-invoicing reform

| Code | Meaning |
|---|---|
| **380** | Commercial invoice. |
| **381** | Credit note. |
| **384** | Corrected invoice. |
| **386** | Prepayment invoice (deposit / acompte). |
| **389** | Self-billed invoice (*auto-facture*). |
| **261** | Self-billed credit note. |
| **262** | Consolidated credit note (*remise globale*). |
| **393** | Factored invoice. |
| **396** | Factored credit note. |
| **471** | Self-billed corrected invoice. |
| **472** | Factored corrected invoice. |
| **473** | Self-billed factored corrected invoice. |
| **500** | Self-billed prepayment invoice. |
| **501** | Self-billed factored invoice. |
| **502** | Self-billed factored credit note. |
| **503** | Credit note for prepayment invoice. |

---

## Rule-based selection

Below the default, a rule editor lets the type code switch dynamically based on conditions evaluated against the source data — typically the `TAG_*` variables already mapped in the *XSL Editor*.

Each **rule** has:

- A **logic** combinator — `AND` (all conditions must match) or `OR` (any condition matches).
- A **result** — the invoice type code to emit when the rule fires (picked from the same *invoice-types* list).
- One or more **conditions**, each composed of:
  - A **field** — a `TAG_*` variable name (e.g. `TAG_TOTAL_HT`).
  - An **operator** — see the table below.
  - A **value** — required for `eq` / `ne` / `contains` / `not-contains`; ignored otherwise.

### Operators

| Operator | Meaning | Value used? |
|---|---|---|
| `> 0` (`gt0`) | Numeric: greater than zero | no |
| `< 0` (`lt0`) | Numeric: less than zero | no |
| `≥ 0` (`ge0`) | Numeric: greater than or equal to zero | no |
| `≤ 0` (`le0`) | Numeric: less than or equal to zero | no |
| `= valeur` (`eq`) | String / numeric equality | yes |
| `≠ valeur` (`ne`) | String / numeric inequality | yes |
| `non vide` (`not-empty`) | Field is present and non-empty | no |
| `vide` (`empty`) | Field is missing or empty | no |
| `contient` (`contains`) | Field contains the value | yes |
| `ne contient pas` (`not-contains`) | Field does not contain the value | yes |

### Evaluation order

Rules are evaluated **top to bottom**. The first rule whose combinator-evaluated conditions match wins. The default is used only when no rule matches. Reorder rules by deleting and re-adding to put the most specific cases first — the editor does not currently expose drag handles.

---

## Tips & best practices

- **Common pattern: split invoices and credit notes by total sign.** A single rule `TAG_TOTAL_HT < 0 → 381` paired with default `380` is enough for most B2B billing — negative totals become credit notes.
- **Use `eq` against the source-system document type when available.** If the source XML carries `TAG_DOCUMENT_TYPE` = `RI` for invoices and `RM` for credit notes, two `eq`-based rules give an unambiguous mapping that does not rely on numeric heuristics.
- **Rules read source values, not UBL output.** The `TAG_*` variables refer to the variables defined in the active XSLT (see *XSL Editor*). Use names that exist there; names that do not are silently treated as empty.
- **Add codes to the reference list, not here.** If `380` / `381` / `384` / `389` are not enough (e.g. a customised type code), add the code to the *invoice-types* reference list — both the default selector and the rule result selector pick it up automatically.
