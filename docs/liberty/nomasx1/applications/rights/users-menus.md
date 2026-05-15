---
title: Rights — Users / Menus
description: "Rights joined to the menu tree — what each user can reach, with the menu path leading to each object."
keywords: [Nomasx-1, applications, rights, user-menu rights, navigation, menu visibility]
---

# Rights — Users / Menus

The **Rights — Users / Menus** screen joins the effective rights matrix to the menu tree. One line per `(Application, User, Role, Object)` quadruplet, with the menu breadcrumb (root, level 1 — 3) carried on each row.

This is the answer to *"how does the user actually get to that object?"*. A right exists in theory once `SER_RUN = 'Y'`, but the user can only exercise it if a menu path leads there — or if they know the form name and call it directly.

---

## At a glance

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rgum-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#rgum-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Rights · Users / Menus</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="170" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROOT</text>
  <text x="260" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LEVEL 1</text>
  <text x="430" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LEVEL 2</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="720" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FORM</text>
  <text x="830" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLE</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="170" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">G0911</text>
  <text x="260" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Accounts Payable</text>
  <text x="430" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Daily Processing</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="720" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="830" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ACCT_AP</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="170" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">G0911</text>
  <text x="260" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Accounts Payable</text>
  <text x="430" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Setup</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0401</text>
  <text x="720" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0401A</text>
  <text x="830" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ACCT_AP</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="170" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">G43</text>
  <text x="260" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Procurement</text>
  <text x="430" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Approval</text>
  <text x="600" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P43081</text>
  <text x="720" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W43081A</text>
  <text x="830" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APPROVER</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="170" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">— (no menu)</text>
  <text x="260" y="245" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">Right granted but no menu path</text>
  <text x="600" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P03B11</text>
  <text x="720" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W03B11A</text>
  <text x="830" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">— (direct)</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">User APMGR · 4 paths · 1 right with no navigation</text>
</svg>

---

## Goal of the view

For each effective right held by a user, surface the menu path that leads to it:

- **Reachable rights.** Most rows pair a right with a menu breadcrumb — the user has both the permission and the navigation.
- **Hidden rights.** A right with an empty menu path means the user can technically run the object but no menu entry reaches it. Either the access is exercised through a direct URL / form name, or it is the leftover of a navigation reorganisation.
- **Walkthrough by area.** Filtering on *Level 1* narrows the rights review to one business area — easier to discuss with the area owner.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `SER_APPS_ID` — application identifier. Filterable. | Which application the right applies to. |
| **User ID** | `SER_USER_ID` — user holding the right. Filterable, scoped to the application. | The right's effective holder. |
| **Role ID** | `SER_ROLE_ID` — role granting the right. Filterable by source. | The role the right came from. |
| **Object** | `SER_OBJECT` — technical object. Filterable, scoped to the application. | What the right unlocks. |
| **Form** | `SERL_FORM` — form code within the object. | Specific form. |
| **Version** | `SER_VERSION` — processing version. | Configuration variant. |
| **Run / Add / Change / Delete** | `SER_RUN`, `SER_ADD`, `SER_CHG`, `SER_DEL` — `Y` / `N`. | Action flags. |
| **Root / Menu ID / Level 1 — 3** | `MENU_ROOT`, `MENU_ID`, `MENU_LEVEL1`, `MENU_LEVEL2`, `MENU_LEVEL3` — text. | Menu breadcrumb. Empty when no menu path reaches the right. |

---

## Tips & best practices

- **Filter on a *User ID*** then sort by *Level 1* — a clean walkthrough of what the user can do, by business area.
- **Rows with an empty *Root*** are rights the user can technically exercise but cannot reach through a menu. Flag them when discussing access cleanup — the easiest is usually to revoke the right rather than reinstate a navigation.
- **Filter on a *Menu ID*** to see every user that can reach a given menu leaf. A high count on a sensitive menu is the row to challenge first.
- **Compare with *Roles / Menus*** to confirm the role grants the menu navigation (not just the right).
