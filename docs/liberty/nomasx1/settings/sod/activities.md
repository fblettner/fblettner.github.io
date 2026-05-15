---
title: SoD — Activities
description: "Named activities within each business process — the atomic units the segregation-of-duties matrix combines."
keywords: [Nomasx-1, settings, SoD, activities, atomic actions, business process]
---

# SoD — Activities

The **Activities** screen lists the named activities within each business process. One line per `(Application, Process, Activity)`. An activity is the *atomic unit* of the SoD analysis — for example *Create vendor*, *Approve payment*, *Post journal entry*.

The *Matrix* combines pairs of activities to express incompatibilities. The *Objects* screen attaches each activity to the source-system programs that back it.

---

## At a glance

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="soda-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#soda-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Settings · SoD · Activities</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="180" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROCESS</text>
  <text x="320" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACTIVITY ID</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACTIVITY NAME</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="180" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="320" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND-CR</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Create vendor</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="180" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="320" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PAY-APV</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Approve payment</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="180" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">O2C</text>
  <text x="320" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CUST-CR</text>
  <text x="500" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Create customer</text>
</svg>

---

## Goal of the view

- **Define the atomic actions** the SoD model reasons about.
- **Stable identifiers across audit cycles** — *Activity ID* feeds the matrix and the conflict reports.
- **One row per granular action.** Keep the activities tight: *Create vendor* and *Modify vendor* are different activities, not one combined entry.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `ACT_APPS_ID` — application. | The application the activity applies to. |
| **Process ID** | `ACT_PROCESS_ID` — links to *Process*. | The business process the activity belongs to. |
| **Activity ID** | `ACT_ID` — short identifier. | Reference used by *Matrix*, *Objects* and the *Conflicts* views. |
| **Activity Name** | `ACT_NAME` — friendly label. | Human-readable name. |

---

## Tips & best practices

- **Name from the business angle.** Use verbs (*Create*, *Modify*, *Approve*, *Post*) — easier to discuss with the business owners than technical names.
- **Keep activity names stable.** Renaming breaks the comparison between SoD reports across cycles.
- **Group activity definitions per process.** Activities that span two processes typically point to a misclassification of either the activity or the process.
