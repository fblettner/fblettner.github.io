---
title: Payment Code Mapping
description: "UBL Defaults — Payment tab. Default payment means code (BT-81) and source → UBL code mapping based on UNCL 4461."
keywords: [NomaUBL, UBL, defaults, BT-81, payment, payment means, UNCL 4461, 30, 49, 58, mapping, SEPA, virement]
---

# Payment Code Mapping

The **Payment** tab configures `BT-81` — the UBL **PaymentMeansCode** — using a default plus a source-to-UBL code mapping. Each row of the mapping reads `<source code> → <UBL code>` and is applied to the value extracted from the source XML.

The override mechanism is described in the [Overview](./overview.md). The default and the mapping are independently controlled by the override toggle: when override is disabled, both fall back to `ubl-defaults.xsl`.

---

## Default payment code

| Field | Description |
|---|---|
| **Default** | Payment means code emitted when the source value is missing or has no mapping row. Picked from the *payment-means* reference list (UNCL 4461). The most common B2B default is `30` (credit transfer) or `58` (SEPA credit transfer). |

The default selector remains visible at the top of the tab in both modes (defaults and document override).

### UNCL 4461 codes used by the French e-invoicing reform

| Code | Meaning |
|---|---|
| **10** | Cash. |
| **20** | Cheque. |
| **30** | Credit transfer. |
| **42** | Bank credit transfer (payment to bank account). |
| **48** | Payment by card. |
| **49** | Direct debit. |
| **57** | Standing agreement (*convention permanente*). |
| **58** | SEPA credit transfer. |
| **59** | SEPA direct debit. |
| **97** | Clearing between partners (*compensation entre partenaires*). |
| **ZZZ** | Mutually defined (any payment method agreed bilaterally with no UNCL code). |

`30` and `58` are interchangeable in many B2B flows — `30` is the generic credit transfer, `58` is the SEPA-specific variant. Pick whichever the receiving Plateforme Agréée expects; for French B2B, `30` is the safer generic default.

---

## Source → UBL mapping

A two-column editor lists each known source code alongside the UBL code it should be translated to.

| Column | Description |
|---|---|
| **Source code** | Free-form text — the code that appears in the upstream XML (e.g. `VIR`, `PRE`, `CHQ`). |
| **UBL code** | UBL UNCL 4461 code (picked from the *payment-means* reference list — `30`, `58`, `49`, `42`, `2`, etc.). |

Use the **Add** button at the bottom to add a row, the trash icon to remove one. There is no implicit ordering — the lookup is by source code value, so each source code should appear at most once.

### How the mapping resolves

```
source XML payment code
    │
    ├─ has a mapping row? ────► UBL code from the row
    │
    └─ no mapping row?    ────► Default payment code
```

If the source code is empty or absent, the default is used directly without going through the mapping.

---

## Tips & best practices

- **Cover the source's full payment-code dictionary.** Every value the upstream system can emit should have a mapping row — falling back to the default for unknown codes hides data quality issues that surface only on the receiving side.
- **`30` (credit transfer) is the safe French default.** It is universally accepted by the Plateforme Agréée and matches the most common B2B payment flow. Reserve `58` (SEPA) for templates where SEPA-specific routing is part of the agreement.
- **Add codes to the reference list, not here.** If a UBL code does not appear in the dropdown, add it to the *payment-means* reference list — the dropdown picks it up on next reload.
- **Override per template only when payment patterns differ.** A document type that always uses direct debit (e.g. recurring billing) is a legitimate use case for a per-template override; ad-hoc one-off payments are not.
