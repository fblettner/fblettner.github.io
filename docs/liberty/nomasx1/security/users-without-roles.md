---
title: Users without roles
description: "Active users with no role assignment on a connected application — the orphan accounts to investigate."
keywords: [Nomasx-1, security, users without roles, orphan accounts, dormant accounts, audit]
---

# Users without roles

The **Users without roles** screen lists every active user account that holds **no** role on a connected application. One line per `(Application, User)` pair. These accounts can log in to the application but cannot do anything once inside — or, more concerning, may be inheriting permissions through an implicit / wildcard mechanism that needs auditing.

The screen filters on `USR_STATUS = '01'` so only active accounts surface. Inactive accounts without roles are simply dormant and visible on the *Users* screen.

---

## At a glance

<svg viewBox="0 0 1320 317" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxuwr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxuwr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxuwr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxuwr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="277" rx="14" fill="url(#nxuwr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security - Users without roles</text>
  <rect x="454.42240000000004" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="476.42240000000004" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.security_users_without_roles_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="112" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">3 rows · 5.0 ms</text>
  <rect x="982" y="100" width="114" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="983" y="101" width="55" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1010.5" y="113.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Table</text>
  <line x1="1039" y1="105" x2="1039" y2="115" stroke="#334155" strokeWidth="1"/>
  <text x="1067.5" y="113.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Chart</text>
  <rect x="240" y="128" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="142.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="418" y="128" width="64" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="450.0" y="142.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="673" y="128" width="107" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="683" y="142.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Max rows  default</text>
  <rect x="786" y="128" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="809.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="839" y="128" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="867.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="902" y="128" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="955" y="128" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="983.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="1018" y="128" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1049.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="240" y="160" width="840" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID (ID)</text>
  <text x="357" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="440" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USER ID (ID)</text>
  <text x="514" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USER ID</text>
  <text x="611" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="656" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CREATION DATE</text>
  <text x="734" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LOGIN DATE</text>
  <rect x="240" y="186" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="200.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">NEWHIRE1</text>
  <text x="514" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">New Hire</text>
  <circle cx="623" cy="197.0" r="3.2" fill="#4ade80"/>
  <text x="656" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-12</text>
  <text x="734" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <rect x="240" y="209" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="341" y="223.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">OLDUSER</text>
  <text x="514" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Old User</text>
  <circle cx="623" cy="220.0" r="3.2" fill="#4ade80"/>
  <text x="656" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2016-04-03</text>
  <text x="734" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-10-30</text>
  <rect x="240" y="232" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="246.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">TEMP07</text>
  <text x="514" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Temp contractor</text>
  <circle cx="623" cy="243.0" r="3.2" fill="#4ade80"/>
  <text x="656" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2022-01-17</text>
  <text x="734" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2023-06-02</text>
  <text x="240" y="277" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="311.88" y="265" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="321.88" y="278.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="375.88" y="277" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Showing 1–3 of 3</text>
  <rect x="992" y="265" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="278.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="265" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="278.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="265" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="278.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="265" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="278.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enabled, no role</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one line per application × user</text>
  <line x1="200" y1="217.0" x2="250" y2="208" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxuwr-arrow)"/>
  <rect x="1120" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Creation vs login</text>
  <text x="1130" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">new account or leftover?</text>
  <line x1="1120" y1="217.0" x2="980" y2="208" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxuwr-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">CSV · Excel (.xlsx)</text>
  <line x1="1120" y1="137.0" x2="1049.0" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxuwr-arrow)"/>
</svg>

---

## Goal of the view

For each **active** account known to a connected application but without a single role attached:

- **Why does the account exist?** Either a fresh onboarding awaiting role assignment, or a former user whose roles were revoked but whose account was not deactivated. Both are normal — neither should stay in this state for long.
- **Is the account still in use?** *Last login* tells whether anyone is still actively trying to log in despite having no roles. A long-dormant account in this state is the easiest deactivation decision.
- **Should the account be deactivated or granted roles?** The choice between the two is the action the screen exists to drive.

The screen is a recurring deliverable of the quarterly access review and a leading indicator of leaver-process gaps.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `APPS_ID` — application identifier from the source system. | Which application the orphan account belongs to. |
| **User ID** | `USR_ID` — user identifier (technical login). Lookup linked to the user catalog, scoped to the application above. | The orphan login. |
| **Status** | `USR_STATUS` — boolean rule, `01` means *Active*. Hardcoded by the underlying query, so every row shows *Active*. | Confirmation that the row really is an active account. |
| **Creation Date** | `USR_DT_CREATION` — date. | When the account was created — distinguishes new-hire accounts from forgotten leftover accounts. |
| **Login Date** | `USR_DT_LOGIN` — date. | Last authentication. Combine with *Creation Date* to interpret the row. |

The screen has no advanced filter: it opens on the full list. The search box filters the rows loaded; **Views**, **Filters**, **Group**, **Columns** and **Export** (CSV or Excel) work as on every grid.

---

## Tips & best practices

- **A new account < 1 month old with no login** is almost certainly a fresh onboarding waiting for role assignment — coordinate with the security administrator to grant the roles or notify HR.
- **An old account with a recent login** is the most concerning row: someone is still authenticating into an application where they cannot do anything official. Investigate before deactivating — they may be inheriting roles through a wildcard mechanism.
- **An old account with no login in the last six months** is the cleanest deactivation decision.
- **Look the user up in *Users Audit*** — the modules the account used and when — to understand what it was for before deciding between granting roles and disabling it.
