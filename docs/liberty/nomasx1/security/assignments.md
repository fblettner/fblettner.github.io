---
title: Assignments
description: "Active role assignments — which user holds which role, on which application, with effective and expiration dates."
keywords: [Nomasx-1, security, assignments, role assignments, user-role, effective date, expiration]
---

# Assignments

The **Assignments** screen lists every active link between a user and a role, on every connected application. One line per `(Application, User, Role)` triplet. It is the table everyone goes back to in order to answer the single most common audit question: *"who holds what?"*

The query only returns assignments for users whose `USR_STATUS = '01'` — i.e. active accounts. Inactive accounts may still hold rows in the underlying table, but they are excluded from this view to keep the audit trail focused.

---

## At a glance

<svg viewBox="0 0 1320 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxasg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxasg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxasg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxasg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="380" rx="14" fill="url(#nxasg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security - Assignments</text>
  <rect x="403.87840000000006" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="425.87840000000006" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.security_assignments_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="100" width="840" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="116" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾  ⛉  Advanced filters</text>
  <text x="252" y="136" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="252" y="142" width="170" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="155.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="412" y="155.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="434" y="136" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER ID</text>
  <rect x="434" y="142" width="170" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="444" y="155.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="594" y="155.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="616" y="136" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE ID</text>
  <rect x="616" y="142" width="170" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="626" y="155.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="776" y="155.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="240" y="192" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">1,804 rows · 7.9 ms</text>
  <rect x="982" y="180" width="114" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="983" y="181" width="55" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1010.5" y="193.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Table</text>
  <line x1="1039" y1="185" x2="1039" y2="195" stroke="#334155" strokeWidth="1"/>
  <text x="1067.5" y="193.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Chart</text>
  <rect x="240" y="208" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="222.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="418" y="208" width="64" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="450.0" y="222.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="673" y="208" width="107" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="683" y="222.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Max rows  default</text>
  <rect x="786" y="208" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="809.5" y="222.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="839" y="208" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="867.5" y="222.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="902" y="208" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.5" y="222.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="955" y="208" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="983.5" y="222.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="1018" y="208" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1049.0" y="222.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="240" y="240" width="840" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="255.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID (ID)</text>
  <text x="357" y="255.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="440" y="255.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USER ID (ID)</text>
  <text x="514" y="255.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USER ID</text>
  <text x="595" y="255.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ROLE ID (ID)</text>
  <text x="669" y="255.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ROLE ID</text>
  <text x="755" y="255.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">EFFECTIVE DATE</text>
  <text x="838" y="255.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">EXPIRATION DATE</text>
  <rect x="240" y="266" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="280.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ASMITH</text>
  <text x="514" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <text x="595" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP_MGR</text>
  <text x="669" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP Manager</text>
  <text x="755" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2024-02-01</text>
  <text x="838" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <rect x="240" y="289" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="341" y="303.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">BMARTIN</text>
  <text x="514" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Bruno Martin</text>
  <text x="595" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AR_MGR</text>
  <text x="669" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AR Manager</text>
  <text x="755" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2023-05-15</text>
  <text x="838" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-12-31</text>
  <rect x="240" y="312" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="326.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="514" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="595" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP_CLERK</text>
  <text x="669" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP Clerk</text>
  <text x="755" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2025-09-01</text>
  <text x="838" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <rect x="240" y="335" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="341" y="349.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="514" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="595" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">GL_ACCT</text>
  <text x="669" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">GL Accountant</text>
  <text x="755" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2025-09-01</text>
  <text x="838" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-03-31</text>
  <text x="240" y="380" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="311.88" y="368" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="321.88" y="381.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="375.88" y="380" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Showing 1–50 of 1,804</text>
  <rect x="992" y="368" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="381.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="368" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="381.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="368" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="381.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="368" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="381.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Advanced filters</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application, user, role</text>
  <line x1="200" y1="127.0" x2="252" y2="152" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxasg-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Who holds what</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one line per user × role</text>
  <line x1="200" y1="307.0" x2="250" y2="288" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxasg-arrow)"/>
  <rect x="1120" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grid tools</text>
  <text x="1130" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sort, group, export</text>
  <line x1="1120" y1="217.0" x2="925.5" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxasg-arrow)"/>
  <rect x="1120" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Validity</text>
  <text x="1130" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">effective · expiration (empty = none)</text>
  <line x1="1120" y1="337.0" x2="980" y2="288" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxasg-arrow)"/>
</svg>

---

## Goal of the view

For every active role assignment on **any connected application**:

- **Who holds what?** This is the canonical table for the access review — one line per active user × granted role.
- **Since when?** The effective date drives the *new access this quarter* question. Filter the column on the review period to list every new grant.
- **For how long?** Time-bounded assignments (contractor accounts, project-based access, temporary delegations) carry an expiration date. Sort it ascending to spot what is about to expire.

The screen is the second stop after *Users* in every quarterly access review.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `RLU_APPS_ID` — application identifier from the source system. Filterable. | Which application the assignment applies to. |
| **User ID** | `RLU_USER_ID` — linked to the user catalog (`USR_APPS_ID, USR_ID`). Filterable, filtered down by the selected application. | The user holding the role. |
| **Role ID** | `RLU_ROLE_ID` — linked to the role catalog (`ROL_APPS_ID, ROL_ID`). Filterable, filtered down by the selected application. | The role granted to the user. |
| **Effective Date** | `RLU_DT_EFFECTIVE` — date. | When the assignment took effect in the source system. |
| **Expiration Date** | `RLU_DT_EXPIRATION` — date, may be empty. | When the assignment is scheduled to expire. Empty means permanent. |

Hidden columns kept on the row: `RLU_DT_REFRESH`, `RLU_UKID`.

**Advanced filters**, open above the grid, filters on the **Application ID**, the **User ID** and the **Role ID**; the user and role lists follow the application picked. The search box filters the rows loaded; **Views**, **Filters**, **Group**, **Columns** and **Export** (CSV or Excel) work as on every grid. The grid has no row menu.

:::info[JDE-specific]
On JD Edwards EnterpriseOne, `*ALL` is the **default sign-on role**: when a user signs on with `*ALL`, the security of every role assigned to them is combined and applied together. Assigning a role to a user therefore *includes* it in that user's `*ALL` bundle. The alternative is to sign on under a single specific role, applying only that role's security.
:::

---

## Tips & best practices

- **Filter *Effective Date* on the current quarter** to list every new assignment granted in that window — the baseline for the *new access* section of the audit report.
- **Sort *Expiration Date* ascending** to bring time-bounded assignments to the top. Compare with HR to confirm departures and project ends.
- **Filter *User ID* on a single user** to obtain that user's full role wallet — the same data appears richer on the *Users Audit* screen.
- **Filter *Role ID* on a single role** to count its holders. Combined with the *Roles* screen sequence, this is what tells you whether a role can be retired safely.
