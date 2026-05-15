---
title: Conflicts — Summary
description: "Headline view of segregation-of-duties conflicts — number of users in conflict, broken down by business process and risk."
keywords: [Nomasx-1, applications, conflicts, segregation of duties, SoD, summary, risk]
---

# Conflicts — Summary

The **Conflicts — Summary** screen is the *headline view* of segregation-of-duties conflicts on a connected application. One line per `(Application, Process, Risk)` triplet. Each row carries the count of users that hold the incompatible role combinations defined by the SoD matrix.

It is the screen you open at the start of a quarterly review and the one you screenshot for the steering committee.

---

## At a glance

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sods-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#sods-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Conflicts · Summary</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROCESS</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RISK</text>
  <text x="760" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USERS</text>
  <text x="860" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">REFRESH</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P — Procure to Pay</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Create vendor + Approve payment</text>
  <text x="760" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">14</text>
  <text x="860" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P — Procure to Pay</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Modify PO + Approve receipt</text>
  <text x="760" y="181" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">7</text>
  <text x="860" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">O2C — Order to Cash</text>
  <text x="380" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Create customer + Post adjustment</text>
  <text x="760" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">3</text>
  <text x="860" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-13</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">HR — Hire to Retire</text>
  <text x="380" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Change pay rate + Approve payroll</text>
  <text x="760" y="245" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">1</text>
  <text x="860" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
</svg>

---

## Goal of the view

For each connected application:

- **Where do the SoD risks land in the business?** The breakdown by *Process* (P2P, O2C, R2R, HR…) maps the conflict map to a chart everyone understands.
- **How many users are exposed per risk?** The *Users* column is the headline number. Tracking its evolution quarter over quarter is the simplest SoD KPI.
- **When was the data last computed?** *Refresh date* tells whether the analysis is current. A stale refresh date undermines the value of the rest of the chart.

The dataset is summarised — only rows with `CFS_COUNT > 0` surface, sorted by *Application → Process → Risk*. The *Details* screen is the drill-down.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `CFS_APPS_ID` — application identifier. | The connected application. |
| **Process ID** | `CFS_PROCESS_ID` — business process. Looked up against the *SoD Process* catalog. | The functional process the risk belongs to (P2P, O2C, R2R, HR…). |
| **Risk ID** | `CFS_RISK_ID` — incompatibility rule. Looked up against the *SoD Risks* catalog. | The named risk being measured. |
| **Users count** | `CFS_COUNT` — number of users holding the incompatible combination. | How many people are in conflict on this row. The headline number. |
| **Refresh date** | `CFS_REFRESH` — date the row was computed. | Freshness of the analysis. |

---

## Tips & best practices

- **Sort by *Users count* descending** to land on the highest-impact risk first. That is the row you discuss at the steering committee.
- **Group by *Process*** to see which business area carries the most SoD weight — often the data point a CFO or COO asks for.
- **Watch *Refresh date*** — a row that hasn't refreshed in weeks usually means the SoD job did not run. Trigger a re-scan.
- **Click into the *Details* screen** for the line-by-line backing data of a given row.
