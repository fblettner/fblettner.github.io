---
title: Rights — Users
description: "Object-level rights granted directly to a user — what each user can run, change, add or delete in the source system."
keywords: [Nomasx-1, applications, rights, security rights, user rights, security workbench]
---

# Rights — Users

The **Rights — Users** screen lists every object-level right granted **directly to a user** on a connected application. One line per `(Application, User, Object)` triplet. Only `SER_RUN = 'Y'` rows are returned — the rights that actually let the user *run* something.

This is the bottom of the security pyramid: even when a role-level rule forbids access, an explicit user-level row can override it. Auditors look at this screen for exceptions.

---

## At a glance

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rgu-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#rgu-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Rights · Users</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="430" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FORM</text>
  <text x="540" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VERSION</text>
  <text x="660" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RUN</text>
  <text x="730" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ADD</text>
  <text x="790" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CHG</text>
  <text x="850" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DEL</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="280" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="430" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="540" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="660" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="790" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="280" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0413M</text>
  <text x="430" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0413A</text>
  <text x="540" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="660" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="790" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SVC_BATCH</text>
  <text x="280" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R31410</text>
  <text x="430" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="540" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">XJDE0001</text>
  <text x="660" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="213" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="790" y="213" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="850" y="213" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>

  <text x="60" y="252" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 of 8 712 direct user-level rights</text>
</svg>

---

## Goal of the view

For each user-level right granted on a connected application:

- **What does the user have access to?** Object, form, version — exactly what the source system uses to identify a callable program.
- **What can they do with it?** Run, Add, Change, Delete — the four action flags. Run means *open the screen*; Add/Change/Delete control row-level operations.
- **Is the right justified?** A direct user-level row is by definition an exception — it bypasses the role-driven security model. Every row here deserves a justification or a cleanup decision.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `SER_APPS_ID` — application identifier. Filterable. | Which application the right applies to. |
| **User ID** | `SER_USER_ID` — user holding the right. Filterable, scoped to the application. | The user the right is granted to directly. |
| **Object** | `SER_OBJECT` — technical object the right applies to. Filterable, scoped to the application. | What the user can call. |
| **Form** | `SERL_FORM` — form code within the object. | Specific form within the object. |
| **Version** | `SER_VERSION` — processing version. | Configuration variant. |
| **Run** | `SER_RUN` — `Y` / `N`. | Whether the user can open the screen at all. Only `Y` rows surface. |
| **Role Action ID** | `SER_ROLE_ACTION_ID` — action identifier. | Source-system action descriptor. |
| **Add / Change / Delete** | `SER_ADD`, `SER_CHG`, `SER_DEL` — `Y` / `N`. | Row-level action flags within the form. |

---

## Tips & best practices

- **Direct user-level rights are exceptions** — the volume here should stay small. Compare against *Rights — Roles* to see what is normally granted via the role model.
- **Filter by *User ID*** to obtain the full direct-grants wallet of a single user — useful when investigating an SoD conflict that the role-level matrix did not predict.
- **Flag rows with all four flags set to `Y`** — full create/read/update/delete on a sensitive object is the heaviest individual grant and the first thing to challenge.
- **Cross-reference with the *Activity log*** to see whether the user actually exercised the right. A high-privilege grant that was never used is often the easiest to revoke.
