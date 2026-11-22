---
title: Users
description: "List of users known to Nomasx-1 across every connected application — identifier, name, account status, creation date, last login, last usage, last update."
keywords: [Nomasx-1, security, users, accounts, status, last login, last usage, audit, JDE, SAP, NetSuite]
---

# Users

The **Users** screen is the central catalog of every account known to Nomasx-1 across **every connected application** — JD Edwards EnterpriseOne, SAP, NetSuite or any custom ERP plugged in through its own query. One line per `(Application, User)` pair: it is where to look up an account, check whether it is still active, see when it last logged in, and decide whether it should still exist.

The list is fed automatically from each source system at scan time (security tables for the ERP, optional LDAP / Active Directory verification on the side).

---

## At a glance

<svg viewBox="0 0 1320 397" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxusr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxusr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxusr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxusr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="357" rx="14" fill="url(#nxusr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Security - Users</text>
  <rect x="361.7584" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="383.7584" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.security_users_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="100" width="840" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="115.5" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⛉  Advanced filters</text>
  <text x="240" y="146" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">1,248 rows · 9.4 ms</text>
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
  <text x="458" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USER ID</text>
  <text x="517" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USER NAME</text>
  <text x="609" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="654" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CREATION DATE</text>
  <text x="732" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LOGIN DATE</text>
  <text x="802" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LAST USAGE</text>
  <text x="872" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LAST UPDATE</text>
  <rect x="240" y="220" width="840" height="22" fill="#0d1220"/>
  <rect x="245" y="223" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="234.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="234.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ASMITH</text>
  <text x="517" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <circle cx="621" cy="231.0" r="3.2" fill="#4ade80"/>
  <text x="654" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2019-03-14</text>
  <text x="732" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <text x="802" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <text x="872" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <rect x="240" y="243" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <rect x="245" y="246" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="257.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="257.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">BATCH01</text>
  <text x="517" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Batch user</text>
  <circle cx="621" cy="254.0" r="3.2" fill="#4ade80"/>
  <text x="654" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2017-06-02</text>
  <text x="732" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <text x="802" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <text x="872" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <rect x="240" y="266" width="840" height="22" fill="#0d1220"/>
  <rect x="245" y="269" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="280.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="280.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">BMARTIN</text>
  <text x="517" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Bruno Martin</text>
  <circle cx="621" cy="277.0" r="3.2" fill="#4ade80"/>
  <text x="654" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2020-09-02</text>
  <text x="732" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2025-12-04</text>
  <text x="802" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2025-11-30</text>
  <text x="872" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <rect x="240" y="289" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <rect x="245" y="292" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="303.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="303.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="517" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <circle cx="621" cy="300.0" r="3.2" fill="#4ade80"/>
  <text x="654" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2021-01-08</text>
  <text x="732" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-20</text>
  <text x="802" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-19</text>
  <text x="872" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <rect x="240" y="312" width="840" height="22" fill="#0d1220"/>
  <rect x="245" y="315" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="326.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="326.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">LEGACY01</text>
  <text x="517" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Legacy account</text>
  <circle cx="621" cy="323.0" r="3.2" fill="#f87171"/>
  <text x="654" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2014-06-22</text>
  <text x="732" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2023-11-04</text>
  <text x="802" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2022-08-19</text>
  <text x="872" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <text x="240" y="357" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="311.88" y="345" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="321.88" y="358.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="375.88" y="357" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Showing 1–50 of 1,248</text>
  <rect x="992" y="345" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="358.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="345" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="358.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="345" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="358.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="345" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="358.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="254" y="266" width="170" height="78" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="266" y="287" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Display Roles</text>
  <text x="414" y="287" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="266" y="309" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Display Rights</text>
  <text x="414" y="309" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="266" y="331" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Display Details</text>
  <text x="414" y="331" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <rect x="20" y="92" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Advanced filters</text>
  <text x="30" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Application ID</text>
  <line x1="200" y1="109.0" x2="240" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusr-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">⋯ row actions</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">or right-click a row</text>
  <line x1="200" y1="217.0" x2="268" y2="254" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusr-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row menu</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">roles · rights · details</text>
  <line x1="200" y1="317.0" x2="254" y2="325.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusr-arrow)"/>
  <rect x="1120" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grid tools</text>
  <text x="1130" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">views, filters, group, columns</text>
  <line x1="1120" y1="167.0" x2="867.5" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusr-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">CSV · Excel (.xlsx)</text>
  <line x1="1120" y1="227.0" x2="1049.0" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusr-arrow)"/>
  <rect x="1120" y="270" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click a row</text>
  <text x="1130" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the user's properties</text>
  <line x1="1120" y1="287.0" x2="780" y2="280" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusr-arrow)"/>
  <rect x="1120" y="322" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="337" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Status dot</text>
  <text x="1130" y="350" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">green enabled · red disabled</text>
  <line x1="1120" y1="339.0" x2="621" y2="316" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusr-arrow)"/>
</svg>

---

## Goal of the view

For each user known to **any connected application**, answer four questions in one glance:

- **Does the account still need to exist?** A user with no login in the last few months on an active application is the first one to question.
- **Is the account active or disabled?** Status `Active` / `Inactive` reflects the source-system state — `Inactive` accounts may still hold roles that need to be reviewed.
- **When was the account created?** Helps to align with HR onboarding and identify accounts created outside the standard process.
- **What is the difference between login and usage?** *Last login* is the last authentication; *Last usage* is the last actual transaction recorded by the source system. An account that logs in but never uses anything is a red flag.

The screen is the entry point for the **account-hygiene** review that auditors expect every quarter, regardless of the underlying ERP.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `USR_APPS_ID` — Application identifier from the source system (numeric reference). | Which application the row applies to. Several rows for the same user means the user exists on several applications. |
| **User ID** | `USR_ID` — User identifier (technical login). Linked to the user lookup catalog. | The user's technical login as known to the source system. |
| **User Name** | `USR_NAME` — Display name. | Human-readable name of the user. |
| **Status** | Account state in the source system. | Green dot on an enabled account, red dot on a disabled one. |
| **Creation Date** | `USR_DT_CREATION` — date. | When the account was created in the source system. |
| **Login Date** | `USR_DT_LOGIN` — date. | Last authentication captured by the source system. |
| **Last Usage** | `LAST_USAGE` — date computed by the connector. | Last time the user actually used something — distinct from a simple login. |
| **Last Update** | `USR_DT_UPDATE` — date. | Date of the last refresh on the source row. |

:::info[JDE-specific]
On JD Edwards EnterpriseOne, the *Last Usage* date is taken from the **Object Usage Tracking** history that Nomasx-1 collects. On other source systems (SAP, NetSuite, custom ERPs) the same column is fed by the equivalent usage history of the source — the screen is identical, only the underlying source changes.
:::

The row also carries the technical, generic and linked flags. They are not shown here but feed the *Users properties* dialog and the *Duplicate users* screen.

**Advanced filters**, above the grid, narrows the list to one **Application ID**. The search box filters the rows loaded, and **Views**, **Filters**, **Group**, **Columns** and **Export** (CSV or Excel) work as on every grid; **Chart** draws the rows instead of listing them.

---

## Row click and context menu \{#context-menu\}

Clicking a row opens the **Edit · Security - Users properties** dialog of that account — see [below](#edit-dialog). The **⋯** button at the start of each row, or a right-click on the row, opens the row menu with three shortcuts filtered on the selected user.

| Action | Where it lands |
|---|---|
| **Display Roles** | *Assignments* filtered on the selected `(Application, User)` pair. |
| **Display Rights** | *Rights — Users* filtered on the selected user. |
| **Display Details** | *Users details* — the master attributes carried by the source system for the user: name and address book reference, country, company, business unit, language, email and category codes. On JDE applications the values come from the Address Book and the user preferences. |

---

## Edit dialog \{#edit-dialog\}

The dialog edits the flags of the account clicked — the same record as [Settings → Users properties](../settings/security/users-properties.md).

<svg viewBox="0 0 1320 410" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxusrd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxusrd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxusrd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxusrd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="320" y="30" width="680" height="360" rx="12" fill="url(#nxusrd-g-card)" stroke="#334155" strokeWidth="1.4"/>
  <text x="340" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit · Security - Users properties</text>
  <line x1="320" y1="72" x2="1000" y2="72" stroke="#1f2937" strokeWidth="1"/>
  <text x="340" y="94" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="340" y="100" width="640" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="115.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">1  ERP-PROD</text>
  <text x="970" y="115.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="340" y="140" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER ID</text>
  <rect x="340" y="146" width="640" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="161.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">JDOE</text>
  <text x="970" y="161.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="340" y="188" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PRIVILEGED (Y/N)</text>
  <rect x="340" y="199" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="357" y="208" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="670.0" y="188" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TECHNICAL (Y/N)</text>
  <rect x="670.0" y="199" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="687.0" y="208" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="340" y="230" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GENERIC (Y/N)</text>
  <rect x="340" y="241" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="357" y="250" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="670.0" y="230" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GENERIC COUNT</text>
  <rect x="670.0" y="236" width="310.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="680.0" y="250.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="340" y="272" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IS LINKED (Y/N)</text>
  <rect x="340" y="283" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M342.5,288.5 L344.8,290.8 L348.8,286" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="357" y="292" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">enabled</text>
  <text x="670.0" y="272" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LINKED USER ID</text>
  <rect x="670.0" y="278" width="310.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="680.0" y="292.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">JDOE2</text>
  <text x="340" y="314" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IS RENAMED (Y/N)</text>
  <rect x="340" y="325" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="357" y="334" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="670.0" y="314" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PREVIOUS USER ID</text>
  <rect x="670.0" y="320" width="310.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="680.0" y="334.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <line x1="320" y1="350" x2="1000" y2="350" stroke="#1f2937" strokeWidth="1"/>
  <rect x="938" y="358" width="42" height="22" rx="5" fill="url(#nxusrd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="959.0" y="372.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="868" y="358" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="899.0" y="372.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="783" y="358" width="77" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="821.5" y="372.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Duplicate</text>
  <rect x="723" y="358" width="52" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="749.0" y="372.5" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="80" y="90" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="90" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The account</text>
  <text x="90" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application and user of the row</text>
  <line x1="280" y1="107.0" x2="340" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusrd-arrow)"/>
  <rect x="80" y="190" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="90" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Account flags</text>
  <text x="90" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">privileged, technical, generic</text>
  <line x1="280" y1="207.0" x2="340" y2="205" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusrd-arrow)"/>
  <rect x="80" y="280" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="90" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Linked / renamed</text>
  <text x="90" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">same person, another login</text>
  <line x1="280" y1="297.0" x2="340" y2="288" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusrd-arrow)"/>
  <rect x="1060" y="270" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1070" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Linked user ID</text>
  <text x="1070" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the other account of the person</text>
  <line x1="1060" y1="287.0" x2="970" y2="289" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusrd-arrow)"/>
  <rect x="1060" y="340" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1070" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="1070" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">writes the properties</text>
  <line x1="1060" y1="357.0" x2="960" y2="369" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxusrd-arrow)"/>
</svg>

| Field | What it says |
|---|---|
| **Application ID**, **User ID** | The account of the row. |
| **Privileged (Y/N)** | The account carries super-user access: it is counted among the privileged accounts of the [Security review](../security-review.md) and of the reports. |
| **Technical (Y/N)** | A batch or service account, left out of the headcount of the licence figures. |
| **Generic (Y/N)**, **Generic count** | A login shared by several people, and how many people are behind it. |
| **Is linked (Y/N)**, **Linked user ID** | The account belongs to the same person as another login — the duplicate pair is then declared. |
| **Is renamed (Y/N)**, **Previous user ID** | The account replaces a previous login of the same person. |

**Save** writes the flags, **Cancel** closes without saving. **Duplicate** and **Delete** act on the properties record, not on the account of the source system.

---

## Tips & best practices

- **Sort by *Last Login* ascending** to bring dormant accounts to the top of the list. Combine with the *Inactive* status filter to short-list the candidates for removal.
- **Compare *Last Login* with *Last Usage*.** An account that logs in regularly but has not used a single transaction in months is either a technical account that should be tagged as such, or a real user whose access is no longer needed.
- **The *Creation Date* drives onboarding reconciliation.** Filter the last quarter and compare with the HR onboarding sheet — every new hire must appear, and every appearance must match a hire.
- **A user across several applications is normal, several users with the same alpha name is not.** When the latter happens, jump to the *Duplicate users* screen which highlights it explicitly.
- **Click the row** to open the *Users properties* dialog — where the technical, generic and privileged flags are maintained. **⋯ → Display Details** shows the source-system master attributes (country, company, business unit, …).
