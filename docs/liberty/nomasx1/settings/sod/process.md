---
title: SoD — Process
description: "Catalog of business processes that group the activities monitored by the segregation-of-duties matrix."
keywords: [Nomasx-1, settings, SoD, segregation of duties, process catalog, P2P, O2C]
---

# SoD — Process

The **Process** screen is the catalog of business processes used by every other SoD setting. One line per `(Application, Process)`. Each row carries a numeric identifier and a friendly name — for example `P2P` (*Procure to Pay*), `O2C` (*Order to Cash*), `R2R` (*Record to Report*).

It is the top of the SoD hierarchy: *Activities* attach to a process, *Risks* are defined inside a process, the *Matrix* groups risk-bearing activity pairs by process.

---

## At a glance

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodp-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sodp-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Settings · SoD · Process</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="200" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROCESS ID</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROCESS NAME</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="200" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Procure to Pay</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="200" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">O2C</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Order to Cash</text>
</svg>

---

## Goal of the view

- **Declare the processes** that will host the SoD activities and risks.
- **Use stable identifiers** — *Process ID* is referenced by the *Activities*, *Risks*, *Matrix* and *Objects* tables. Renumbering breaks references.
- **One process per major business area** — keep the catalog short so it stays readable. Most companies live with five to eight.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `PROCESS_APPS_ID` — application. | Application the catalog applies to. |
| **Process ID** | `PROCESS_ID` — short identifier. | Reference used by every dependent SoD setting. |
| **Process Name** | `PROCESS_NAME` — friendly label. | Human-readable name. |

Audit columns (`PROCESS_AUDIT_USER`, `PROCESS_AUDIT_DATE`) are kept on the row.

---

## Edit dialog

Click **Add** to declare a new process, or double-click a row to edit. The dialog is a single form.

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodp-dlg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sodp-dlg)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit SoD process</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Application</text>
  <rect x="60" y="116" width="280" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production ▾</text>

  <text x="360" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Process ID</text>
  <rect x="360" y="116" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="372" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>

  <text x="560" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Name</text>
  <rect x="560" y="116" width="360" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="572" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Procure to Pay</text>

  <rect x="780" y="156" width="60" height="28" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810" y="174" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Cancel</text>
  <rect x="848" y="156" width="60" height="28" rx="5" fill="rgba(74,158,255,0.20)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="878" y="174" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">Save</text>
</svg>

| Field | What to enter |
|---|---|
| **Application** | Drop-down of declared applications. The process belongs to this application. |
| **Process ID** | Short identifier (e.g. `P2P`, `O2C`, `R2R`). Referenced by *Activities*, *Risks*, *Matrix* and *Objects*. |
| **Name** | Friendly label for the process. Surfaces on every SoD report. |

---

## Tips & best practices

- **Per-application catalog.** If two applications carry the same SoD perimeter, declare the process in each — Nomasx-1 does not share rows across applications.
- **Match the auditor's vocabulary.** Use the labels (`P2P`, `O2C`, `R2R`, `HR`, `IT`) the audit team already uses in their walkthroughs.
- **Keep the list stable across audit cycles** — comparing the SoD figures quarter over quarter only works if the process IDs don't change.
