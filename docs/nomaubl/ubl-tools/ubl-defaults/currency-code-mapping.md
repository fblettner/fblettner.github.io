---
title: Currency Code Mapping
description: "UBL Defaults — Currency tab. Default currency (BT-5) and source → ISO 4217 currency code mapping."
keywords: [NomaUBL, UBL, defaults, BT-5, currency, ISO 4217, EUR, USD, GBP, CHF, mapping, DocumentCurrencyCode]
---

# Currency Code Mapping

The **Currency** tab configures `BT-5` — the UBL **DocumentCurrencyCode** — using a default plus a source-to-UBL code mapping. Each row maps an upstream currency code to its ISO 4217 equivalent.

The override mechanism is described in the [Overview](./overview.md). Default and mapping are independently controlled by the override toggle.

---

## Default currency

| Field | Description |
|---|---|
| **Default** | Currency code emitted when the source value is missing or has no mapping row. Picked from the *currency-codes* reference list (ISO 4217). Standard French default: `EUR`. |

The default selector remains visible at the top of the tab in both modes.

---

## Source → UBL mapping

A two-column editor lists each known source currency alongside the ISO 4217 code it should be translated to.

| Column | Description |
|---|---|
| **Source code** | Free-form text — the code that appears in the upstream XML (e.g. `EU` from a JDE BIP report, `EURO`, `€`). |
| **UBL code** | ISO 4217 three-letter code (picked from the *currency-codes* reference list). |

### How the mapping resolves

```
source XML currency code
    │
    ├─ has a mapping row? ────► ISO 4217 code from the row
    │
    └─ no mapping row?    ────► Default currency
```

If the source code is empty or absent, the default is used directly.

---

## Tips & best practices

- **Only multi-currency installations need entries here.** A single-currency deployment can leave the mapping empty and rely on the default — every line resolves to that value.
- **Most upstream systems already emit ISO 4217.** The mapping is most useful for legacy systems where currency is encoded as a 2-letter or system-specific code (`EU` instead of `EUR`, `US` instead of `USD`, etc.).
- **The default currency should match the seller's billing currency.** A French seller defaults to `EUR`; switching the default for a single foreign-currency invoice is rarely the right pattern — prefer to ensure the source XML carries the explicit currency.
- **Add codes to the reference list, not here.** Missing target codes go into the *currency-codes* reference list; the dropdown picks them up on next reload.
