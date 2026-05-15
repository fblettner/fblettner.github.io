---
title: Rights — Users / Roles
description: "Object-level rights pivoted by (user, role) — what each user can run, both directly and through every role they hold."
keywords: [Nomasx-1, applications, rights, user-role rights, effective rights, security workbench]
---

# Rights — Users / Roles

The **Rights — Users / Roles** screen pivots the rights matrix by **user and role**. One line per `(Application, User, Role, Object)` quadruplet. It returns *every* `SER_RUN = 'Y'` row — both the direct user-level rights and the inherited role-level rights resolved on a per-user basis.

This is the *effective rights* view: what each user actually carries, broken down by where the right comes from.

---

## At a glance

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rgur-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#rgur-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Rights · Users / Roles</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="250" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLE</text>
  <text x="400" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="540" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FORM</text>
  <text x="660" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RUN</text>
  <text x="730" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ADD</text>
  <text x="790" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CHG</text>
  <text x="850" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DEL</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="250" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ACCT_AP</text>
  <text x="400" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="540" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="660" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="790" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="250" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APPROVER</text>
  <text x="400" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P43081</text>
  <text x="540" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W43081A</text>
  <text x="660" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="181" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="790" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="181" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="250" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">— (direct)</text>
  <text x="400" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P03B11</text>
  <text x="540" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W03B11A</text>
  <text x="660" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="790" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>

  <text x="60" y="252" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 of 41 287 effective rights · user APMGR holds 3 rights via 2 roles + 1 direct</text>
</svg>

---

## Goal of the view

The pivot makes three questions immediate:

- **What can this user actually do?** Filter on a single *User ID* to obtain the full effective wallet — direct grants and inherited grants together. The roles column tells you *which role* lit up each row.
- **Through which role?** When the same right surfaces under several roles, those roles are partial duplicates — candidates for consolidation.
- **Is the user holding a right outside any role?** A row with an empty *Role ID* is a direct user-level grant — see *Rights — Users* for the dedicated screen.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `SER_APPS_ID` — application identifier. Filterable. | Which application the right applies to. |
| **User ID** | `SER_USER_ID` — user holding the right. Filterable, scoped to the application. | The effective holder of the right. |
| **Role ID** | `SER_ROLE_ID` — role granting the right. Filterable by source. | The role the right was inherited from. Empty (or `*ROLE`) on the source side means *direct user-level grant*. |
| **Object** | `SER_OBJECT` — technical object. Filterable, scoped to the application. | What the right unlocks. |
| **Form** | `SERL_FORM` — form code within the object. | Specific form. |
| **Version** | `SER_VERSION` — processing version. | Configuration variant. |
| **Run / Add / Change / Delete** | `SER_RUN`, `SER_ADD`, `SER_CHG`, `SER_DEL` — `Y` / `N`. | Action flags. Only `Run = Y` rows surface. |
| **Role Action ID** | `SER_ROLE_ACTION_ID` — action identifier. | Source-system action descriptor. |

---

## Tips & best practices

- **Filter on a single *User ID*** to get the user's full effective wallet — the answer most auditors actually need.
- **Group by *Object* on a user filter** to spot when the same object surfaces through multiple roles. Each duplicate is a hint that role membership could be trimmed.
- **A user with rights coming through a single role + few direct grants** is the cleanest setup — the inverse (many direct grants, few or no roles) is the heaviest to audit.
- **Combine with the *Conflicts → Details* screen** to confirm the role pair that generates a given SoD conflict.
