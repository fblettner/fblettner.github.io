---
title: Allowances / Charges
description: "UBL Defaults — Allowances / Charges tab. Sets the fallback reason text and reason code per direction (BR-42 for allowances, BR-43 for charges); the ChargeIndicator picks the pair at emit time."
keywords: [NomaUBL, UBL, defaults, allowances, charges, BR-42, BR-43, reason, reason code, ChargeIndicator]
---

# Allowances / Charges

The **Allowances / Charges** tab holds the fallback **reason text** and **reason code** that fill in `BR-42` (allowances) and `BR-43` (charges) when the per-invoice / per-line template returns empty for that field. `ChargeIndicator` picks the direction at emit time, so one configuration covers both cases.

The override mechanism is described in the [Overview](./overview.md).

---

## Fallback reasons

Two paired inputs — one pair for allowances (money off), one for charges (money on).

| Field | Direction | Effect |
|---|---|---|
| **Allowance reason** | Allowance (`ChargeIndicator = false`) | Free text emitted as the allowance reason when the mapped template value is empty (BR-42). |
| **Allowance reason code** | Allowance | The corresponding reason code (UNCL 5189). |
| **Charge reason** | Charge (`ChargeIndicator = true`) | Free text emitted as the charge reason when the mapped template value is empty (BR-43). |
| **Charge reason code** | Charge | The corresponding reason code (UNCL 7161). |

The framework picks the pair by looking at the emitted `ChargeIndicator` — `true` selects the charge pair, `false` selects the allowance pair. The template stays free of a branching mapping.

---

## When each fallback applies

Both **document-level** and **line-level** allowances / charges look here for a fallback:

```
per-line or per-invoice reason path
    │
    ├─ resolves to a value? ────► that value is emitted
    │
    └─ empty?               ────► ChargeIndicator picks the fallback pair below
```

For the line-level case, this pairs with the *Line Allowances / Charges* section on the [XSL editor](../xsl-editor.md) — including the derived-percentage and group-less line modes documented there.

---

## Tips & best practices

- **Fill both pairs even if only one direction is used.** The `ChargeIndicator` picks whichever pair matches; leaving one direction empty means the fallback silently disappears on that direction and the line stays without a reason.
- **Match the reason code to the reason text.** A schematron rule checks that the code belongs to the right code list — pick from UNCL 5189 for allowances and UNCL 7161 for charges.
- **A per-document override is rarely necessary.** The defaults cover the common case where a partner expects the same wording across every allowance and charge; reserve document overrides for a template that genuinely uses different wording.
