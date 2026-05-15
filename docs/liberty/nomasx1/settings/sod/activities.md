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

## Edit dialog

Click **Add** to declare an activity, or double-click a row to edit. The dialog is a single form.

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="soda-dlg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#soda-dlg)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit SoD activity</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Application</text>
  <rect x="60" y="116" width="220" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Prod ▾</text>

  <text x="300" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Process</text>
  <rect x="300" y="116" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="312" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P ▾</text>

  <text x="500" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Activity ID</text>
  <rect x="500" y="116" width="160" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="512" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND-CR</text>

  <text x="680" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Name</text>
  <rect x="680" y="116" width="240" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="692" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Create vendor</text>

  <rect x="780" y="156" width="60" height="28" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810" y="174" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Cancel</text>
  <rect x="848" y="156" width="60" height="28" rx="5" fill="rgba(74,158,255,0.20)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="878" y="174" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">Save</text>
</svg>

| Field | What to enter |
|---|---|
| **Application** | Drop-down of declared applications. |
| **Process** | Drop-down filtered to the processes of the chosen application. |
| **Activity ID** | Short identifier (e.g. `VEND-CR`, `PAY-APV`). Referenced by *Matrix* and *Objects*. |
| **Name** | Friendly label. Surfaces on the *Details* and *Proven* conflict screens. |

---

## Tips & best practices

- **Name from the business angle.** Use verbs (*Create*, *Modify*, *Approve*, *Post*) — easier to discuss with the business owners than technical names.
- **Keep activity names stable.** Renaming breaks the comparison between SoD reports across cycles.
- **Group activity definitions per process.** Activities that span two processes typically point to a misclassification of either the activity or the process.
