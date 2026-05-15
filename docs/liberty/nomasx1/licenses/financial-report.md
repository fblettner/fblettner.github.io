---
title: Financial Report
description: "Financial impact of the non-compliant rows — additional licence cost and three years of support per application × component."
keywords: [Nomasx-1, licenses, financial report, compliance, cost, audit risk, additional fees]
---

# Financial Report

The **Financial Report** screen converts the non-compliant rows of *Usage Report* into euros. One line per `(Application, Component)` where compliance is negative. The list price and the unit support fee from *Settings → Pricing* are multiplied by the magnitude of the gap to produce the additional cost — licence plus 3 years of support.

It is the chart to slide into the steering committee deck before signing the renewal.

---

## At a glance

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="lfin-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#lfin-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Licenses · Financial Report</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPONENT</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">GAP</text>
  <text x="450" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UNIT PRICE</text>
  <text x="560" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LICENCE</text>
  <text x="660" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SUPPORT</text>
  <text x="760" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">3-Y SUPPORT</text>
  <text x="880" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TOTAL</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Prod</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>
  <text x="380" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">-8</text>
  <text x="450" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 500</text>
  <text x="560" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 000</text>
  <text x="660" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">330</text>
  <text x="760" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">7 920</text>
  <text x="880" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">19 920</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Prod</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Human Resources</text>
  <text x="380" y="181" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">-2</text>
  <text x="450" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 200</text>
  <text x="560" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2 400</text>
  <text x="660" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">264</text>
  <text x="760" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 584</text>
  <text x="880" y="181" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">3 984</text>

  <rect x="60" y="196" width="880" height="32" rx="8" fill="rgba(248,113,113,0.10)" stroke="rgba(248,113,113,0.30)" strokeWidth="1"/>
  <text x="72" y="216" fill="#f87171" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOTAL EXPOSURE</text>
  <text x="72" y="230" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">23 904 € across 2 non-compliant rows · licence + 3 years of support</text>
</svg>

---

## Goal of the view

For each non-compliant `(Application, Component)`:

- **Quantify the exposure.** The compliance gap from *Usage Report* turns into euros, computed against the price book maintained in *Settings → Pricing*.
- **Two components in the total.** The additional **licence** purchase (compliance × unit price) and the corresponding **support** over 3 years (compliance × unit support × 3). The 3-year horizon matches the standard Oracle support commitment.
- **Decision input.** Knowing the cost of compliance lets you compare *resubscription* against *remediation* (revoke users, reorganise roles).

Only rows in over-consumption appear here — compliant rows have no financial impact and are filtered out before the screen loads.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `APPS_ID` — application identifier. | The connected application. |
| **Component** | `CPT_ID` — licence component. | The licence bucket. |
| **Compliance** | `COMPLIANCE` — signed delta from *Usage Report*. Negative on this screen. | The gap to close. |
| **Unit price** | `PRC_PRICE` — rounded unit list price. | List price of the component, from *Settings → Pricing*. |
| **Total licence price** | `TOTAL_PRICE` — `COMPLIANCE × PRC_PRICE`. | Cost of buying the missing licences. |
| **Unit support** | `PRC_SUPPORT` — rounded annual unit support. | Annual unit support fee. |
| **Total support (3 years)** | `TOTAL_SUPPORT` — `COMPLIANCE × PRC_SUPPORT × 3`. | Support cost for the standard 3-year horizon. |
| **Total compliance cost** | `TOTAL_COMPLIANCE` — sum of `TOTAL_PRICE` + `TOTAL_SUPPORT`. | The cost of getting the row back to compliance. |

---

## Tips & best practices

- **Compare *Total compliance cost* to the cost of remediation.** Closing 8 user accounts costs less than 19 920 €; closing the gap by re-subscription is a backup only if remediation is impossible.
- **Bring the chart to the next steering committee** — the line items make the financial impact of access cleanup explicit, which usually unblocks resources.
- **The unit prices come from *Settings → Pricing*** — keep them aligned with the current Oracle price book or the figures shift away from reality.
- **A high *Compliance* magnitude on a low-unit-price component** can still produce a meaningful total — sort by *Total compliance cost* to read the chart from the biggest item.
