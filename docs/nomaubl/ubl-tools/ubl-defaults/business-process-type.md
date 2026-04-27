---
title: Business Process Type
description: "UBL Defaults — Business Process Type tab. French Cadre de facturation (BT-23) — invoice nature (goods / services / mixed) and lifecycle stage (deposit / already paid / final / subcontracting / multi-vendor / e-reporting)."
keywords: [NomaUBL, UBL, defaults, BT-23, profile ID, profileID, cadre de facturation, B1, S1, M1, B2, S2, M2, B4, S4, M4, S3, S5, S6, B7, S7, B8, S8, M8, goods, services, mixed]
---

# Business Process Type

The **Business Process Type** tab configures `BT-23` — the UBL **ProfileID**, known as the **Cadre de facturation** in the French e-invoicing reform. The value identifies two things at once:

- The **nature of the invoice** — goods (`B`), services (`S`) or mixed goods + services (`M`).
- The **lifecycle stage or special case** — standard deposit, already-paid invoice, final invoice after a deposit, subcontracting, multi-vendor, e-reporting.

Together with the [BAR routing](./document-type-bar-routing.md) (which carries the *channel* — B2B, B2G, B2C…), BT-23 carries the *content nature* — they are orthogonal classifications and the receiving Plateforme Agréée uses both to decide how the document is processed.

The override mechanism is described in the [Overview](./overview.md). The rule editor is identical in semantics to [Invoice Type](./invoice-type.md) — same operator set, same top-to-bottom evaluation order.

---

## Default profile ID

| Field | Description |
|---|---|
| **Default** | The Cadre de facturation code used when no rule matches. Picked from the *profile-ids* reference list. The most common B2B default is `B1` (goods invoice deposit) or `S1` (service invoice deposit). |

---

## Cadre de facturation codes

The naming convention is `<letter><digit>`:

- **Letter** — `B` (goods / *bien*), `S` (services / *prestation*), `M` (mixed / both).
- **Digit** — lifecycle stage or special case.

| Code | Meaning |
|---|---|
| **B1** | Goods invoice deposit (standard goods invoice). |
| **S1** | Service invoice deposit (standard service invoice). |
| **M1** | Mixed invoice deposit — non-accessory goods and services. |
| **B2** | Already-paid goods invoice. |
| **S2** | Already-paid service invoice. |
| **M2** | Already-paid mixed invoice. |
| **S3** | Subcontracting payment request with direct payment — **B2G only**. |
| **B4** | Final goods invoice after a deposit payment. |
| **S4** | Final service invoice after a deposit payment. |
| **M4** | Final mixed invoice after a deposit payment. |
| **S5** | Subcontractor service invoice deposit. |
| **S6** | Co-contractor service invoice deposit. |
| **B7** | Goods invoice with e-reporting — VAT already collected. |
| **S7** | Service invoice with e-reporting — VAT already collected. |
| **B8** | Multi-vendor goods invoice. |
| **S8** | Multi-vendor service invoice. |
| **M8** | Multi-vendor mixed invoice — not exclusively `Sx` or `Bx`. |

The full list lives in the *profile-ids* reference list (*Configuration → Reference Lists*).

---

## Rule-based selection

The rule editor is the same as on the [Invoice Type](./invoice-type.md) tab — `AND` / `OR` combinator, the same ten operators (`gt0`, `lt0`, `ge0`, `le0`, `eq`, `ne`, `not-empty`, `empty`, `contains`, `not-contains`), top-to-bottom evaluation. The result selector lists the *profile-ids* values.

Rules typically combine the source's product / line classification with lifecycle flags to land on the correct Cadre code.

### Common rule patterns

| Source signal | Combined with | Resulting Cadre |
|---|---|---|
| Lines mark every item as a service | (no other condition) | `S1` (or `S4` for a final invoice after deposit, `S2` if already paid…) |
| Lines mix goods and services | (no other condition) | `M1` |
| All lines are goods | (no other condition) | `B1` |
| Document carries an "already-paid" flag | + goods / services nature | `B2` / `S2` / `M2` |
| Document is a final-after-deposit | + goods / services nature | `B4` / `S4` / `M4` |
| Subcontracting flag set | (services only, B2G context) | `S3` (or `S5` for a regular subcontractor invoice) |
| Multi-vendor flag set | + goods / services / mixed nature | `B8` / `S8` / `M8` |

The exact source signals are deployment-specific — they come from the upstream ERP's classification of the line items, payment status, and contract role.

---

## Tips & best practices

- **The default covers the simplest case.** A B2B installation that only emits standard goods or service invoices can keep `B1` or `S1` as the default and skip the rule editor entirely. Rules are needed only when several Cadre codes are produced from the same template.
- **Determine the nature (B / S / M) from the line items, not the document.** The most reliable rule chain looks at line-level classification (typical pattern: `TAG_LINE_GOODS_OR_SERVICES contains "S"` for service lines) and aggregates to the document level.
- **Final invoices after deposit are not the same as already-paid invoices.** `B4` / `S4` / `M4` (final after deposit) reference an earlier `B1` / `S1` / `M1` invoice; `B2` / `S2` / `M2` (already paid) document a payment that happened outside the e-invoicing flow. Mixing them up is a frequent rejection cause.
- **`S3` is reserved for B2G subcontracting.** It triggers a specific public-procurement workflow at Chorus Pro. Never use it on a B2B document — pair it with the BAR routing set to `B2G`.
- **`B7` / `S7` are e-reporting-only flows.** They cover B2C and other out-of-scope sales where the seller still has to declare turnover for VAT collection. The BAR routing should typically be `B2C`.
- **The BAR routing and the Cadre de facturation are orthogonal.** A `B1` (goods invoice deposit) can be routed `B2B`, `B2G`, or `B2BINT` — they answer different questions. Keep both rule sets clean and distinct.
- **Add codes to the reference list, not here.** Custom Cadre codes (very rare) should be added to the *profile-ids* reference list — both the default selector and the rule result selector pick them up automatically.
