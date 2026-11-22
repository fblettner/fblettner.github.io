---
title: Roles
description: "Catalog of all roles defined in each connected application — application, role identifier, role name, sequence."
keywords: [Nomasx-1, security, roles, JDE roles, SAP roles, role catalog]
---

# Roles

The **Roles** screen lists every role defined in the security tables of each connected application. One line per `(Application, Role)` pair: it is the authoritative inventory of the role names users are allowed to be assigned to.

A role is the *permission container* the source system exposes — `*ROLE` on JD Edwards EnterpriseOne, *PFCG profiles* on SAP, *permission sets* on NetSuite. Nomasx-1 reads the catalog as-is from the source.

---

## At a glance

<svg viewBox="0 0 1320 397" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxrol-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxrol-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxrol-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxrol-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="357" rx="14" fill="url(#nxrol-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security - Roles</text>
  <rect x="361.7584" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="383.7584" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.security_roles_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="100" width="840" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="115.5" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⛉  Advanced filters</text>
  <text x="240" y="146" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">96 rows · 6.1 ms</text>
  <rect x="982" y="134" width="114" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="983" y="135" width="55" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1010.5" y="147.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Table</text>
  <line x1="1039" y1="139" x2="1039" y2="149" stroke="#334155" strokeWidth="1"/>
  <text x="1067.5" y="147.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Chart</text>
  <rect x="240" y="162" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="176.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="418" y="162" width="64" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="450.0" y="176.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="673" y="162" width="107" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="683" y="176.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Max rows  default</text>
  <rect x="786" y="162" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="809.5" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="839" y="162" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="867.5" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="902" y="162" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.5" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="955" y="162" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="983.5" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="1018" y="162" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1049.0" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="240" y="194" width="840" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="268" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID (ID)</text>
  <text x="375" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="458" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ROLE ID (ID)</text>
  <text x="532" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ROLE ID</text>
  <text x="657" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ROLE NAME</text>
  <text x="842" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SEQUENCE</text>
  <rect x="240" y="220" width="840" height="22" fill="#0d1220"/>
  <rect x="245" y="223" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="234.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="234.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP_CLERK</text>
  <text x="532" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP Clerk</text>
  <text x="657" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Accounts Payable – Clerk</text>
  <text x="880" y="234.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">10</text>
  <rect x="240" y="243" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <rect x="245" y="246" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="257.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="257.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP_MGR</text>
  <text x="532" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP Manager</text>
  <text x="657" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Accounts Payable – Manager</text>
  <text x="880" y="257.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">20</text>
  <rect x="240" y="266" width="840" height="22" fill="#0d1220"/>
  <rect x="245" y="269" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="280.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="280.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AR_MGR</text>
  <text x="532" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AR Manager</text>
  <text x="657" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Accounts Receivable – Manager</text>
  <text x="880" y="280.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">30</text>
  <rect x="240" y="289" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <rect x="245" y="292" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="303.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="303.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">GL_ACCT</text>
  <text x="532" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">GL Accountant</text>
  <text x="657" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">General Accounting – Accountant</text>
  <text x="880" y="303.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">40</text>
  <rect x="240" y="312" width="840" height="22" fill="#0d1220"/>
  <rect x="245" y="315" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="326.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="326.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">SYSADMIN</text>
  <text x="532" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">System Administrator</text>
  <text x="657" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">System Administrator</text>
  <text x="880" y="326.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">90</text>
  <text x="240" y="357" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="311.88" y="345" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="321.88" y="358.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="375.88" y="357" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Showing 1–50 of 96</text>
  <rect x="992" y="345" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="358.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="345" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="358.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="345" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="358.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="345" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="358.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="254" y="242" width="170" height="56" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="266" y="263" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Display Users</text>
  <text x="414" y="263" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="266" y="285" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Display Rights</text>
  <text x="414" y="285" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <rect x="20" y="92" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Advanced filters</text>
  <text x="30" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Application ID</text>
  <line x1="200" y1="109.0" x2="240" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrol-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">⋯ row actions</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">or right-click a row</text>
  <line x1="200" y1="247.0" x2="268" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrol-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row menu</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">holders · rights of the role</text>
  <line x1="200" y1="317.0" x2="254" y2="280.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrol-arrow)"/>
  <rect x="1120" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Role ID / name</text>
  <text x="1130" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">as defined in the source</text>
  <line x1="1120" y1="217.0" x2="620" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrol-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sequence</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">order of the role</text>
  <line x1="1120" y1="317.0" x2="876" y2="266" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrol-arrow)"/>
</svg>

---

## Goal of the view

For each role known to **any connected application**, answer three questions in one glance:

- **Which roles exist?** The role catalog drives every other security view — assignments, conflicts, segregation-of-duties matrices.
- **What does the role represent?** The role name is the human-readable label visible to administrators. It should be self-explanatory and follow the company naming convention.
- **In what order is the role evaluated?** The sequence drives the precedence at login when the source system lets a user inherit configuration from several roles. Lower number = earlier evaluation = stronger precedence (JDE convention).

The screen is the entry point when an auditor asks *"give me the list of roles in scope"* or when a new SoD matrix is being built.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `ROL_APPS_ID` — application identifier from the source system (numeric reference). | Which application the role belongs to. |
| **Role ID** | `ROL_ID` — role identifier (technical name). | The role's technical name as known to the source system. |
| **Role Name** | `ROL_NAME` — descriptive name. | Human-readable label. |
| **Sequence** | `ROL_SEQ` — numeric. | Evaluation order at login. Lower runs first; used by the source system to resolve precedence between several roles held by the same user. |

Hidden columns kept on the row: `ROL_DT_REFRESH`, `ROL_UKID` (used by downstream screens and reconciliation).

**Advanced filters**, above the grid, narrows the list to one **Application ID**. The search box filters the rows loaded; **Views**, **Filters**, **Group**, **Columns** and **Export** (CSV or Excel) work as on every grid.

:::info[JDE-specific]
On JD Edwards EnterpriseOne, `*ALL` is the **default sign-on role** — when a user signs on with `*ALL`, the security of every role assigned to them is combined and applied at once. The alternative is to sign on under a single specific role, applying only that role's security. Whether or not `*ALL` appears as a literal row on the *Roles* catalog depends on the installation: most do not need explicit `*ALL`-level overrides.
:::

---

## Context menu

The **⋯** button at the start of a row, or a right-click on the row, opens the row menu.

| Action | Where it lands |
|---|---|
| **Display Users** | *Assignments* filtered on the selected `(Application, Role)` pair — every user holding the role. |
| **Display Rights** | *Rights — Roles* filtered on the selected role — the object-level permissions the role grants. |

---

## Tips & best practices

- **Compare the catalog with the *Roles not used* screen** to spot roles that exist but were never assigned. These are typically the leftover of past reorganisations.
- **Look for near-duplicate role names** (e.g. `ACCT_AP` vs `ACCT_AP_OLD`). A role rename in the source system creates a new row — the old one usually stays around until a manual cleanup.
- **Use the *Sequence* column** to identify the role with the lowest sequence that a user holds — this is the role driving most of the runtime behavior on JDE.
- **⋯ → Display Users** opens the *Assignments* screen filtered on that role — the fastest way to count holders before deciding to delete it.
