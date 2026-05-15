---
title: Rights — Roles / Menus
description: "Role-level rights joined to the menu tree — what each role grants in terms of navigation, by licence component."
keywords: [Nomasx-1, applications, rights, role-menu rights, navigation, licence component]
---

# Rights — Roles / Menus

The **Rights — Roles / Menus** screen joins the role-level rights matrix to the menu tree, with the licence component carried on each row. One line per `(Application, Role, Object)` triplet, restricted to rules where `SER_USER_ID = '*ROLE'` and `SER_RUN = 'Y'`. The menu breadcrumb (root + up to 9 levels) tells how a holder of the role would reach the object from the menu.

It is the cleanest view to discuss with a role owner: *"here is everything your role grants, organised the way users actually browse it"*.

---

## At a glance

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rgrm-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#rgrm-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Rights · Roles / Menus</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROLE</text>
  <text x="200" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROOT</text>
  <text x="290" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LEVEL 1</text>
  <text x="460" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LEVEL 2</text>
  <text x="620" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="740" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FORM</text>
  <text x="850" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPONENT</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ACCT_AP</text>
  <text x="200" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">G0911</text>
  <text x="290" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Accounts Payable</text>
  <text x="460" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Daily Processing</text>
  <text x="620" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="740" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="850" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ACCT_AP</text>
  <text x="200" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">G0911</text>
  <text x="290" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Accounts Payable</text>
  <text x="460" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Setup</text>
  <text x="620" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0401</text>
  <text x="740" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0401A</text>
  <text x="850" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APPROVER</text>
  <text x="200" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">G43</text>
  <text x="290" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Procurement</text>
  <text x="460" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Approval</text>
  <text x="620" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P43081</text>
  <text x="740" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W43081A</text>
  <text x="850" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ACCT_AP</text>
  <text x="200" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">— (no menu)</text>
  <text x="290" y="245" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">Right granted but no menu path</text>
  <text x="620" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P03B11</text>
  <text x="740" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W03B11A</text>
  <text x="850" y="245" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">ACCT_AP role · 87 entries · 2 with no navigation</text>
</svg>

---

## Goal of the view

For each role on a connected application:

- **The full inventory of what the role grants.** Object, form, version + the menu path. Hand it to the role owner during the access review.
- **Per-component breakdown.** The *Component* column lets you measure how much of which licence the role consumes — useful before approving a new role.
- **Hidden grants.** Rows with no menu path point to rights with no navigation — the easiest target for cleanup since users cannot reach them through the standard UI.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `SER_APPS_ID` — application identifier. Filterable. | Which application the right applies to. |
| **Role ID** | `SER_ROLE_ID` — role granting the right. Filterable, scoped to the application. | The role the rule belongs to. |
| **Component** | `CPT_ID` — licence component. Filterable. | The licence bucket the right falls under. |
| **Object** | `SER_OBJECT` — technical object. Filterable, scoped to the application. | What the role unlocks. |
| **Form** | `SERL_FORM` — form code within the object. | Specific form. |
| **Version** | `SER_VERSION` — processing version. | Configuration variant. |
| **Run / Add / Change / Delete** | `SER_RUN`, `SER_ADD`, `SER_CHG`, `SER_DEL` — `Y` / `N`. | Action flags. |
| **Root / Menu ID / Level 1 — 9** | `MENU_ROOT`, `MENU_ID`, `MENU_LEVEL1` … `MENU_LEVEL9` — text. | Menu breadcrumb. Empty when no menu path reaches the right. |
| **Sequence** | `MENU_SEQ_UKID` — internal stable sequence. | Used to keep menu rows in a deterministic order. |

---

## Tips & best practices

- **Filter by *Role ID* + sort by *Level 1*** to produce the per-role deliverable used in the access review.
- **Filter by *Component*** to extract every right a role brings under a specific licence — the data you need before renegotiating component volumes.
- **Rows with empty *Root*** are rights the role grants but no menu navigates to. They are typically the leftover of a removed menu entry that nobody trimmed in the security rights.
- **Cross-reference with *Roles not used*** — a role with very few menu paths is a candidate for retirement.
