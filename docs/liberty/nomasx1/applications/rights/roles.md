---
title: Rights — Roles
description: "Object-level rights granted at the role level — the backbone of the security model."
keywords: [Nomasx-1, applications, rights, role rights, security workbench, role-based access]
---

# Rights — Roles

The **Rights — Roles** screen lists every object-level right granted **at the role level** on a connected application. The query filters on `SER_USER_ID = '*ROLE'` — the marker the source system uses to indicate a role-level rule rather than a user-level one. One line per `(Application, Role, Object)` triplet, restricted to rights where `SER_RUN = 'Y'`.

This is the *core* of the role-based access model: what a role grants to all of its holders. Everything else (user-level overrides, menu visibility, OUT-derived rights) builds on top.

---

## At a glance

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rgr-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#rgr-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Rights · Roles</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLE</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="430" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FORM</text>
  <text x="540" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VERSION</text>
  <text x="660" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RUN</text>
  <text x="730" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ADD</text>
  <text x="790" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CHG</text>
  <text x="850" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DEL</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ACCT_AP</text>
  <text x="280" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="430" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="540" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="660" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="790" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ACCT_AP</text>
  <text x="280" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0413M</text>
  <text x="430" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0413A</text>
  <text x="540" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="660" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="790" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APPROVER</text>
  <text x="280" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P43081</text>
  <text x="430" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W43081A</text>
  <text x="540" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="660" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="213" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="790" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="213" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>

  <text x="60" y="252" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 of 26 410 role-level rights</text>
</svg>

---

## Goal of the view

For each role-level right granted on a connected application:

- **What does the role grant?** Object, form, version — the right's scope.
- **Which actions are allowed?** Run, Add, Change, Delete — the four action flags. A role granting *Change* and *Delete* on a financial object is the centerpiece of a segregation-of-duties analysis.
- **Is the role definition still in line with the business intent?** Comparing the actual rights here with the role's documented purpose is the most reliable way to detect *role drift* — rights accumulated over time that nobody now remembers why.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `SER_APPS_ID` — application identifier. Filterable. | Which application the right applies to. |
| **Role ID** | `SER_ROLE_ID` — role granting the right. Filterable, scoped to the application. | The role the rule belongs to. |
| **Object** | `SER_OBJECT` — technical object the right applies to. Filterable, scoped to the application. | What the role unlocks. |
| **Form** | `SERL_FORM` — form code within the object. | Specific form within the object. |
| **Version** | `SER_VERSION` — processing version. | Configuration variant. |
| **Run** | `SER_RUN` — `Y` / `N`. | Whether the role can open the screen. Only `Y` rows surface. |
| **Role Action ID** | `SER_ROLE_ACTION_ID` — action identifier. | Source-system action descriptor. |
| **Add / Change / Delete** | `SER_ADD`, `SER_CHG`, `SER_DEL` — `Y` / `N`. | Row-level action flags. |

---

## Tips & best practices

- **Filter by *Role ID* + sort by *Object*** to obtain the full inventory of what a role can do — the deliverable to discuss with the role owner during the access review.
- **Hunt the broad rights** — rights on a high-level object with all four flags set to `Y` are the most generous grants. Confirm the role really needs that level.
- **A role with very few rights** is also worth a look — it may be redundant with another role and a candidate for retirement (see *Roles not used*).
- **Combine with *Roles / Menus*** to verify the role grants both the *right* and the *navigation* to reach the object.
