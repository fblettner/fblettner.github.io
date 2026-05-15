---
title: Users
description: "List of users known to Nomasx-1 for each application — identifier, name, account status, creation date, last login, last usage, last update."
keywords: [Nomasx-1, security, users, JDE, status, last login, last usage, audit]
---

# Users

The **Users** screen is the central catalog of every account known to Nomasx-1 for each connected application. One line per `(Application, User)` pair: it is where to look up an account, check whether it is still active, see when it last logged in, and decide whether it should still exist.

The list is fed automatically from the source systems (JDE security tables, optional LDAP / Active Directory verification) at each scan.

---

## At a glance

<svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="usr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="usr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="920" height="340" rx="14" fill="url(#usr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">🛡 Nomasx-1 · Security · Users</text>
  <rect x="860" y="50" width="80" height="22" rx="5" fill="url(#usr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="900" y="65" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">↻ Refresh</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="70" y="115" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Application ID</text>
  <rect x="188" y="100" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="198" y="115" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">User ID</text>

  <rect x="60" y="132" width="880" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="147" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APPLICATION · USER · NAME · STATUS · CREATION · LAST LOGIN · LAST USAGE · LAST UPDATE</text>

  <rect x="60" y="158" width="880" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="173" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 · APMGR · Accounts Payable Manager ·</text>
  <rect x="386" y="161" width="40" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="406" y="171" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="436" y="173" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2019-03-14 · 2026-05-14 · 2026-05-13 · 2026-05-14</text>

  <rect x="60" y="184" width="880" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="199" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 · ARMGR · Accounts Receivable Manager ·</text>
  <rect x="394" y="187" width="40" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="414" y="197" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="444" y="199" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2020-09-02 · 2026-05-13 · 2026-05-12 · 2026-05-14</text>

  <rect x="60" y="210" width="880" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="225" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 · LEGACY01 · Legacy account ·</text>
  <rect x="328" y="213" width="56" height="14" rx="3" fill="rgba(248,113,113,0.18)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="356" y="223" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Inactive</text>
  <text x="394" y="225" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2014-06-22 · 2023-11-04 · 2022-08-19 · 2025-12-01</text>

  <rect x="60" y="236" width="880" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="251" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 · BENEMGR · HR Benefits Manager ·</text>
  <rect x="356" y="239" width="40" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="376" y="249" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="406" y="251" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2021-01-08 · 2026-05-14 · 2026-05-14 · 2026-05-14</text>

  <line x1="60" y1="280" x2="940" y2="280" stroke="#1f2937" strokeWidth="1"/>
  <text x="60" y="302" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 of 1 248</text>
  <text x="940" y="302" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="end">Page 1 ▾ · 50 ▾ · ‹ ›</text>

  <rect x="60" y="324" width="880" height="44" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="72" y="344" fill="#fb923c" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">💡 KEY POINTS</text>
  <text x="72" y="360" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Spot dormant accounts (last login &gt; 6 months), recent additions, accounts with no activity. Each row links to the User Audit screen for a full per-user history.</text>
</svg>

---

## Goal of the view

For each user known to a connected application, answer four questions in one glance:

- **Does the account still need to exist?** A user with no login in the last few months on an active application is the first one to question.
- **Is the account active or disabled?** Status `Active` / `Inactive` reflects the source-system state — `Inactive` accounts may still hold roles that need to be reviewed.
- **When was the account created?** Helps to align with HR onboarding and identify accounts created outside the standard process.
- **What is the difference between login and usage?** *Last login* is the last authentication ; *Last usage* is the last actual transaction recorded by the JDE Object Usage Tracking. An account that logs in but never uses anything is a red flag.

The screen is the entry point for the **account-hygiene** review that auditors expect every quarter.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `USR_APPS_ID` — Application identifier from the source system (numeric reference). | Which application the row applies to. Several rows for the same user means the user exists on several applications. |
| **User ID** | `USR_ID` — User identifier (technical login). Linked to the user lookup catalog. | The user's technical login. Usually the JDE user ID. |
| **User Name** | `USR_NAME` — Display name (usually the JDE alpha name). | Human-readable name of the user. |
| **Status** | `USR_STATUS` — Boolean rule, `01` means *Active*. | Account state in the source system. Green chip *Active* when the value is `01`, red chip *Inactive* otherwise. |
| **Creation Date** | `USR_DT_CREATION` — date format. | When the account was created in the source system. |
| **Login Date** | `USR_DT_LOGIN` — date format. | Last authentication (`F0092` style timestamp). |
| **Last Usage** | `LAST_USAGE` — date format, computed from the JDE Object Usage Tracking (`LICENSE_JDE_OUT`). | Last time the user actually used something — distinct from a simple login. |
| **Last Update** | `USR_DT_UPDATE` — date format. | Date of the last refresh on the source row. |

Hidden columns kept on the row for downstream screens: `USRP_TECHNICAL`, `USRP_GENERIC`, `USRP_ID_LINKED`, `USR_REGISTRATION`, `USR_DT_REFRESH`, `USR_UKID`. They surface on the *User Audit* and *Duplicate Users* screens.

The two filter inputs above the grid (**Application ID** and **User ID**) accept *contains* / *equals* / *not equals* / *starts with* / *ends with* operators — the standard server-side filter shape used across Nomasx-1.

---

## Tips & best practices

- **Sort by *Last Login* ascending** to bring dormant accounts to the top of the list. Combine with the *Inactive* status filter to short-list the candidates for removal.
- **Compare *Last Login* with *Last Usage*.** An account that logs in regularly but has not used a single transaction in months is either a technical account that should be tagged as such, or a real user whose access is no longer needed.
- **The *Creation Date* drives onboarding reconciliation.** Filter the last quarter and compare with the HR onboarding sheet — every new hire must appear, and every appearance must match a hire.
- **A user across several applications is normal, several users with the same alpha name is not.** When the latter happens, jump to the *Duplicate users* screen which highlights it explicitly.
- **Click the row** to open the *Users Audit* screen scoped to that user — full role history, country, business unit, last usage by module.
