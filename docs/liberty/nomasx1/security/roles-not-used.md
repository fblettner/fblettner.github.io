---
title: Roles not used
description: "Roles defined in the source system but not assigned to any user — the candidates for cleanup."
keywords: [Nomasx-1, security, unused roles, dormant roles, role cleanup, audit]
---

# Roles not used

The **Roles not used** screen lists every role that exists in the source system but has no row in the assignments table. One line per `(Application, Role)` pair. These roles are the cleanup backlog: they widen the catalog without contributing to any active access.

Eliminating unused roles is what keeps the security model readable, and it shrinks the attack surface: a role that nobody holds today can be assigned to a service account tomorrow without anyone noticing.

---

## At a glance

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rnu-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#rnu-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Security · Roles not used</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLE ID</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ACCT_AP_OLD</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">LEGACY_FIN</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21 — SAP Production</text>
  <text x="500" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Z_TEMP_2023</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21 — SAP Production</text>
  <text x="500" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Z_TRAINING</text>

  <text x="60" y="276" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">17 unused roles across 2 applications</text>
</svg>

---

## Goal of the view

For each role known to **any connected application**, surface those with **zero** active assignment:

- **What should be retired?** Roles with zero holders are the obvious cleanup target. The data is precomputed via a `LEFT JOIN` against `SECURITY_ASSIGNMENTS` filtered on `NULL` — no double counting, no false positives.
- **What was the role originally meant for?** Use the *Roles* screen to recall the original purpose before deleting — a role with no current holder may simply be a *break-glass* role kept ready for an incident.
- **Is the same role repeated under several names?** Listing unused roles often reveals naming drift (e.g. `ACCT_AP_OLD` next to the live `ACCT_AP`).

The screen is one of the deliverables auditors expect at every quarterly access review.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `APPS_ID` — application identifier from the source system. Joined to `SETTINGS_APPLICATIONS` to also show the application name. | Which application the unused role belongs to. |
| **Role ID** | `ROL_ID` — role identifier (technical name). Filtered down by the chosen application. | The role that has zero assignment. |

The two filter inputs above the grid (**Application ID** and **Role ID**) accept the standard *contains* / *equals* / *not equals* / *starts with* / *ends with* operators. The *Role ID* lookup is scoped to the application chosen above.

---

## Tips & best practices

- **Sort by *Application ID*** to review one source at a time — the cleanup decision is usually owned by the security administrator of that application.
- **Cross-reference with the *Roles* screen** to read the original description before deleting — some unused roles are intentional reserves.
- **Confirm with the source system** before removing: the row will disappear from the *Roles* catalog on the next scan, but the underlying role definition must be deleted in the source itself.
- **Re-run the screen after the next scan** to confirm the cleanup landed — the row should drop out automatically.
