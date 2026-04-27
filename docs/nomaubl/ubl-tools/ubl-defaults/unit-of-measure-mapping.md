---
title: Unit of Measure Mapping
description: "UBL Defaults — Units tab. Default unit code (BT-130) and source → UN/ECE Recommendation 20 unit code mapping."
keywords: [NomaUBL, UBL, defaults, BT-129, BT-130, unit, unit of measure, UN/ECE, Recommendation 20, C62, KGM, MTR, LTR, HUR, mapping]
---

# Unit of Measure Mapping

The **Units** tab configures `BT-130` — the UBL **InvoicedQuantity/@unitCode** — using a default plus a source-to-UBL code mapping. Each row maps an upstream unit code (whatever the source emits — `EA`, `PCS`, `KG`, `H`…) to its UN/ECE Recommendation 20 equivalent.

The override mechanism is described in the [Overview](./overview.md). Default and mapping are independently controlled by the override toggle.

---

## Default unit code

| Field | Description |
|---|---|
| **Default** | Unit code emitted when the source value is missing or has no mapping row. Picked from the *unit-codes* reference list. Standard fallback: `C62` (one — used when the source carries no unit information). |

The default selector remains visible at the top of the tab in both modes.

---

## Source → UBL mapping

A two-column editor lists each known source code alongside the UN/ECE code it should be translated to.

| Column | Description |
|---|---|
| **Source code** | Free-form text — the code that appears in the upstream XML (e.g. `EA`, `PCS`, `KG`, `H`, `M`). |
| **UBL code** | UN/ECE Recommendation 20 code (picked from the *unit-codes* reference list). |

### Common UN/ECE Recommendation 20 codes

| Code | Unit |
|---|---|
| `C62` | One (each, piece) |
| `EA` | Each |
| `H87` | Piece |
| `HUR` | Hour |
| `KGM` | Kilogram |
| `MTR` | Metre |
| `LTR` | Litre |
| `MTQ` | Cubic metre |
| `KMT` | Kilometre |
| `MIN` | Minute |
| `DAY` | Day |
| `MON` | Month |

Add the codes the upstream system actually produces — there is no benefit to listing every possible UN/ECE value.

### How the mapping resolves

```
source XML unit code
    │
    ├─ has a mapping row? ────► UBL code from the row
    │
    └─ no mapping row?    ────► Default unit code
```

If the source code is empty or absent, the default is used directly.

---

## Tips & best practices

- **Map the unit codes actually emitted by the source.** A B2B invoice typically uses 5 to 10 unit codes (each, piece, hour, kg, m, l, day, month). Adding more rows than the source produces does no harm but is unnecessary.
- **`C62` is the only safe default for "no unit".** When the source omits a unit, the receiving Plateforme Agréée still expects a value. `C62` (one) is the canonical fallback that does not constrain the downstream consumer.
- **Service-only invoices favour `HUR` / `DAY` / `MON` over `EA`.** The unit code carries semantic information that downstream systems use for purchase-order matching — pick the unit that reflects what is actually billed.
- **Override per template only when the unit dictionary differs.** A goods-only template and a service-only template may legitimately ship different mappings; an ad-hoc invoice should reuse the defaults.
