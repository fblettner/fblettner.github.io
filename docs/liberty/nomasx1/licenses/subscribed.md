---
title: Subscribed Licenses
description: "Subscribed licences inventory — quantities of each component covered by each CSI contract, grouped by metric and price list."
keywords: [Nomasx-1, licenses, subscribed licences, entitlement, components, CSI, contract metrics]
---

# Subscribed Licenses

The **Subscribed Licenses** screen aggregates the quantities purchased on each Oracle CSI by **price list × component × metric**. One line per `(CSI, Price list, Component, Metric)`. Each row is the contractual entitlement Nomasx-1 compares to the actual usage.

It is the *what we are entitled to* half of the licence equation. The *Usage report* shows what we are using; *Financial report* shows the cost of the gap.

---

## At a glance

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="lsub-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#lsub-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Licenses · Subscribed</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CSI</text>
  <text x="200" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRICE LIST</text>
  <text x="370" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPONENT</text>
  <text x="640" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">METRIC</text>
  <text x="830" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">QUANTITY</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12345678</text>
  <text x="200" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Foundation</text>
  <text x="370" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>
  <text x="640" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Application User</text>
  <text x="830" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">200</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12345678</text>
  <text x="200" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Foundation</text>
  <text x="370" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>
  <text x="640" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Application User</text>
  <text x="830" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">120</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12345910</text>
  <text x="200" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database Tech</text>
  <text x="370" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle EE</text>
  <text x="640" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Named User Plus</text>
  <text x="830" y="213" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">250</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12345910</text>
  <text x="200" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database Tech</text>
  <text x="370" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Advanced Compression</text>
  <text x="640" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Processor</text>
  <text x="830" y="245" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">8</text>
</svg>

---

## Goal of the view

For each CSI, summarise *what we bought*:

- **One line per (Component, Metric).** Quantities are summed at the contractual granularity — duplicates that may exist on a CSI are collapsed into a single subscribed quantity per component and metric.
- **Price-list view.** The *Price list* dimension lets you reconcile each line with the corresponding Oracle price book.
- **Metric mapping.** *Application User*, *Named User Plus*, *Processor*, *Employee*… The metric drives how *Usage report* compares the entitlement to the actual usage.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **CSI ID** | `LCC_CSI_ID` — contract identifier. Linked to the *CSI* screen. | The contract the entitlement belongs to. |
| **Price list** | `CPT_LISTS` — price list label. | Oracle price book — the contractual catalog the component is sold under. |
| **Component** | `CPT_COMPONENT` — friendly component name. | The licensable item (Financials, Oracle EE, Advanced Compression…). |
| **Metric** | `LCC_MET_ID` — licensing metric. | How the component is counted (Application User, NUP, Processor, Employee…). |
| **Quantity** | `LCC_QUANTITY` — summed quantity. | Contractual entitlement on this row. |

---

## Tips & best practices

- **Cross-reference against *Usage report*** to see whether each row is consumed at or below the entitlement.
- **Quantities below the headline usage are the rows that show up as non-compliant in *Financial report*** — the gap is what you need to close before the next audit.
- **A row with a quantity of 0** means the component is tracked but never licensed — typically a free or grant-based product. Confirm with the procurement contract.
- **Multiple price lists for the same component** signal a CSI consolidation or a mid-term reordering — keep the alignment with procurement.
