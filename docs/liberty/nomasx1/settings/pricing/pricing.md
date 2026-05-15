---
title: Pricing
description: "Unit list price and support fee per component × metric — the price book the financial report uses to compute the cost of non-compliance."
keywords: [Nomasx-1, settings, pricing, list price, support fee, financial report, price book]
---

# Pricing

The **Pricing** screen is the price book Nomasx-1 uses for the financial impact computation. One line per `(Component, Metric)`. Each row carries the unit list price, the minimum quantity Oracle imposes on the metric, and the annual support fee.

It is the table the *Financial Report* multiplies by the compliance gap to produce the euros next to a non-compliant component.

---

## At a glance

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="spprc-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#spprc-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Settings · Pricing · Pricing</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRICE LIST</text>
  <text x="220" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPONENT</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">METRIC</text>
  <text x="660" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRICE</text>
  <text x="760" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MINIMUM</text>
  <text x="860" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SUPPORT</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Foundation</text>
  <text x="220" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Application User</text>
  <text x="660" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 200</text>
  <text x="760" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">10</text>
  <text x="860" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">264</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database Tech</text>
  <text x="220" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database EE</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Named User Plus</text>
  <text x="660" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">950</text>
  <text x="760" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">25</text>
  <text x="860" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">209</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database Tech</text>
  <text x="220" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database EE</text>
  <text x="500" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Processor</text>
  <text x="660" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">47 500</text>
  <text x="760" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1</text>
  <text x="860" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">10 450</text>
</svg>

---

## Goal of the view

- **Price book input.** Per (Component × Metric), the unit list price and unit support fee.
- **Used by *Financial Report*.** Multiply the compliance gap by these values to produce the euros that show up next to a non-compliant row.
- **Audit traceability.** Changes to a row should be approved and audit-stamped.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **ID** | `PRC_ID` — internal identifier. | Numeric key of the row. |
| **Price list** | `CPT_LISTS` — Oracle catalog. | The catalog the row belongs to. |
| **Category** | `CPT_CATEGORY` — Applications / Database / … | Component category. |
| **Component** | `CPT_COMPONENT` — component name. | The component being priced. |
| **Metric** | `MET_DESCRIPTION` — metric. | The unit the price applies to. |
| **Price** | `PRC_PRICE` — list price. | Unit price, in the contract currency. |
| **Minimum** | `PRC_MINIMUM` — minimum quantity. | Oracle's minimum order for the metric (e.g. NUP minimum per processor). |
| **Support** | `PRC_SUPPORT` — annual support fee. | Per-unit support cost — multiplied by 3 in the *Financial Report*. |

---

## Edit dialog

Double-click a row to edit the price book entry.

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="spprc-dlg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#spprc-dlg)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit pricing row</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Component</text>
  <rect x="60" y="116" width="300" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database EE ▾</text>

  <text x="380" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Metric</text>
  <rect x="380" y="116" width="200" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="392" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Named User Plus ▾</text>

  <text x="60" y="170" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Price</text>
  <rect x="60" y="176" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">950</text>

  <text x="260" y="170" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Minimum</text>
  <rect x="260" y="176" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">25</text>

  <text x="440" y="170" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Support</text>
  <rect x="440" y="176" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="452" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">209</text>
</svg>

| Field | What to enter |
|---|---|
| **Component** | Drop-down of Nomasx-1 components. |
| **Metric** | Drop-down of metrics declared on *Pricing → Metrics*. |
| **Price** | Unit list price in the contract currency. |
| **Minimum** | Minimum quantity Oracle imposes for this metric (e.g. 25 NUP per processor on Database EE). |
| **Support** | Annual unit support fee. Multiplied by 3 in the *Financial Report*. |

---

## Tips & best practices

- **Update the price book at renewal time** — Oracle ships a new technical price list every year. Keeping the numbers current is what makes the financial impact view trustworthy.
- **Remember the *Minimum*** — Oracle imposes a minimum (e.g. 25 NUP per processor on Database EE). A negative compliance below the minimum forces the purchase up to the minimum, not just the missing quantity.
- **Cross-reference with *Subscribed Licenses*** to detect prices being applied to a metric the contract does not use.
