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

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="uwr-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#uwr-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Security · Users without roles</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="140" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="340" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUS</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CREATED</text>
  <text x="740" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LAST LOGIN</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SVC_BATCH</text>
  <rect x="340" y="136" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="365" y="148" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2017-04-02</text>
  <text x="740" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">NEW_HIRE_05</text>
  <rect x="340" y="168" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="365" y="180" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-02</text>
  <text x="740" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21</text>
  <text x="140" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FORMER_USR</text>
  <rect x="340" y="200" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="365" y="212" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="500" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2018-06-22</text>
  <text x="740" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2024-09-04</text>

  <rect x="60" y="248" width="880" height="40" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="72" y="266" fill="#fb923c" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT TO DO</text>
  <text x="72" y="282" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Either grant the user the missing role(s), or deactivate the account in the source system if it has no purpose.</text>
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

The two filter inputs above the grid (**Application ID** and **User ID**) accept the standard *contains* / *equals* / *not equals* / *starts with* / *ends with* operators.

---

## Tips & best practices

- **A new account < 1 month old with no login** is almost certainly a fresh onboarding waiting for role assignment — coordinate with the security administrator to grant the roles or notify HR.
- **An old account with a recent login** is the most concerning row: someone is still authenticating into an application where they cannot do anything official. Investigate before deactivating — they may be inheriting roles through a wildcard mechanism.
- **An old account with no login in the last six months** is the cleanest deactivation decision.
- **Click on a row** to open the *Users Audit* screen, which shows the historical role wallet — useful to understand what the user *used to* have before revocation.
