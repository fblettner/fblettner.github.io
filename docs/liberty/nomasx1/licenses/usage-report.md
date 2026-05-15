---
title: Usage Report
description: "Per-application × per-component compliance — observed user counts versus subscribed quantity, with the compliance delta."
keywords: [Nomasx-1, licenses, usage report, compliance, JDE, component, audit deliverable]
---

# Usage Report

The **Usage Report** screen is the compliance comparison: for each `(Application, Component)`, it shows the observed user counts side-by-side with the subscribed quantity, and computes the **compliance delta**. Positive means within entitlement, negative means over-consumption.

It is the chart you take to the licensing audit — and the one that drives the *Financial Report*.

---

## At a glance

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="luse-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#luse-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Licenses · Usage Report</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPONENT</text>
  <text x="450" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USERS</text>
  <text x="560" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACTIVE USERS</text>
  <text x="720" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SUBSCRIBED</text>
  <text x="850" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPLIANCE</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Prod</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>
  <text x="450" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">182</text>
  <text x="560" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">182</text>
  <text x="720" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">200</text>
  <text x="850" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">+18</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Prod</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>
  <text x="450" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">128</text>
  <text x="560" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">128</text>
  <text x="720" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">120</text>
  <text x="850" y="181" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">-8</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Prod</text>
  <text x="160" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Manufacturing</text>
  <text x="450" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">14</text>
  <text x="560" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">11</text>
  <text x="720" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">50</text>
  <text x="850" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">+39</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Prod</text>
  <text x="160" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Human Resources</text>
  <text x="450" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2</text>
  <text x="560" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2</text>
  <text x="720" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">0</text>
  <text x="850" y="245" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">-2</text>
</svg>

---

## Goal of the view

For each `(Application, Component)`:

- **Where do we stand?** *Compliance = Subscribed − Users used* (or active users when known). A positive value means *under-used* — possible down-sizing opportunity. A negative value means *over-used* — a real compliance gap.
- **A factual audit conversation.** *Users count* and *Active users count* are what Object Usage Tracking actually observed; *Subscribed* is the contractual quantity declared in the CSI contracts attached to the application. Both numbers come from the same product — no spreadsheet to reconcile.
- **Spot the costly gaps fast.** Sort *Compliance* ascending — every negative row is a topic for the renewal discussion.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `APPS_ID` — application identifier. | The connected application. |
| **Component** | `CPT_ID` — licence component. | The licence bucket. |
| **Users count** | `USERS_COUNT` — distinct users observed on the component. | Total observed cohort. |
| **Active users count** | `ACTIVE_USERS_COUNT` — count restricted to currently active users. | Tighter cohort used in the compliance formula when available. |
| **Subscribed** | `SUBSCRIBED` — entitlement aggregated from the CSI contracts attached to the application. | Contractual quantity for the application × component. |
| **Compliance** | `COMPLIANCE` — signed delta. | Positive = within entitlement, negative = over-consumption. |

The formula: `COMPLIANCE = SUBSCRIBED − (ACTIVE_USERS_COUNT or USERS_COUNT when no active count is available)`.

---

## Tips & best practices

- **Negative *Compliance* rows are the audit fail list.** Each one has to be either subscribed up or remediated by user / right cleanup.
- **A positive compliance with high *Users count*** is a candidate for *down-sizing* at the next renewal — bring it to procurement.
- **Components with subscription = 0 but users > 0** indicate a component used without contractual coverage. Either the procurement record is incomplete or the component is being used outside the contract scope.
- **Combine with *OUT — Components*** to dig into who is on the component when the compliance is negative.
