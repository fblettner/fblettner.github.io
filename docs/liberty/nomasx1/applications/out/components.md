---
title: OUT — Components
description: "Object Usage Tracking summary by licence component — how many users used each component and when it was last touched."
keywords: [Nomasx-1, applications, Object Usage Tracking, OUT, components, licence usage, JDE]
---

# OUT — Components

The **OUT — Components** screen is the top of the Object Usage Tracking pyramid. One line per `(Application, Component)`. Each row aggregates how many distinct users invoked any object of the component and when the most recent such call happened.

It is the headline view for licence reporting and the entry point to drill down into details.

---

## At a glance

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="outc-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#outc-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · OUT · Components</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="260" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPONENT</text>
  <text x="640" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USERS</text>
  <text x="780" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LAST USAGE</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="260" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>
  <text x="640" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">142</text>
  <text x="780" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="260" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>
  <text x="640" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">87</text>
  <text x="780" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="260" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Manufacturing</text>
  <text x="640" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">11</text>
  <text x="780" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-04-22</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="260" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Human Resources</text>
  <text x="640" y="245" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">2</text>
  <text x="780" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2025-11-08</text>
</svg>

---

## Goal of the view

For each licence component on a connected application:

- **How many people use it?** *Users count* is the headline number for licence right-sizing.
- **Is it still in use?** *Last usage* tells whether the component is alive. A component last touched many months ago can probably be retired or its licence reduced.
- **Which components dominate the activity?** Sorting by user count immediately surfaces the *core* components — typically Financials and Distribution.

:::info[JDE-specific]
The component dimension comes from the JDE System Code → Licence Component mapping (`SETTINGS_JDE_SY → SETTINGS_LIC_COMPONENTS`). For other source systems, the same view can be produced by mapping the equivalent module / area code to a licence component.
:::

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `LOUT_APPS_ID` — application identifier. | The connected application. |
| **Component** | `CPT_ID` — licence component identifier. Numeric. | The billable bucket. |
| **Users count** | `USERS_COUNT` — distinct user count. | Headline number for licence reporting. |
| **Last usage** | `LAST_USAGE` — max of the per-call timestamps. | Most recent activity on the component. |

---

## Tips & best practices

- **Sort by *Users count* descending** for licence right-sizing — the components carrying real volume sit at the top.
- **Watch *Last usage*** — a component below the threshold of recent activity is a candidate for licence renegotiation. Bring the row to the next vendor conversation.
- **Click the row** to drill into *OUT — Details* filtered on the component — list of users and last-used dates.
- **Cross-reference with *Licenses → JD Edwards*** to translate the headline counts into contractual entitlements.
