---
title: Conflicts — Users
description: "Distinct users in conflict on a connected application — the headline list of accounts to remediate."
keywords: [Nomasx-1, applications, conflicts, segregation of duties, SoD, users, remediation list]
---

# Conflicts — Users

The **Conflicts — Users** screen is the distinct list of users with at least one SoD conflict on a connected application. One line per `(Application, User)` pair. Each row carries the account's status, creation date and last login — exactly what is needed to decide *how* to remediate.

If *Summary* shows how many conflicts you have and *Details* shows what they look like, this screen is *who* the conflicts belong to.

---

## At a glance

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodu-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#sodu-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Conflicts · Users</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER ID</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUS</text>
  <text x="540" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CREATED</text>
  <text x="780" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LAST LOGIN</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <rect x="380" y="136" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="405" y="148" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="540" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2019-03-14</text>
  <text x="780" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MSMITH</text>
  <rect x="380" y="168" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="405" y="180" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="540" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2020-09-02</text>
  <text x="780" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-13</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">LEGACY01</text>
  <rect x="380" y="200" width="60" height="16" rx="3" fill="rgba(248,113,113,0.18)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="410" y="212" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Inactive</text>
  <text x="540" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2014-06-22</text>
  <text x="780" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2022-08-19</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21</text>
  <text x="160" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PKHAN</text>
  <rect x="380" y="232" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="405" y="244" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="540" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2022-01-15</text>
  <text x="780" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-12</text>
</svg>

---

## Goal of the view

For each user in conflict on a connected application:

- **Identify the holders.** A single line per user — easier to dispatch the remediation actions across business owners than reading the per-row *Details*.
- **Read context for the action.** Status + Creation + Last Login tell whether the easiest remediation is a deactivation (Inactive accounts) or a role cleanup (Active accounts with conflicts).
- **Spot zombie conflicts.** An *Inactive* user still appearing here proves the underlying conflict is structural — even after the user is gone, their role wallet still produces theoretical SoD risk. Tighten the role design rather than rely on the deactivation.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `CFD_APPS_ID` — application identifier. | The application the conflict belongs to. |
| **User ID** | `CFD_USER_ID` — user in conflict. | The conflict holder. |
| **Status** | `USR_STATUS` — `01` means *Active*. | Source-system status — drives the remediation choice. |
| **Creation Date** | `USR_DT_CREATION` — date. | When the account was created. |
| **Login Date** | `USR_DT_LOGIN` — date. | Last authentication. A long-dormant active user with conflicts is the lowest-hanging fruit. |

---

## Tips & best practices

- **Sort by *Last Login* descending** — the users actively connecting carry the most operational risk. Deal with them first.
- **Filter on *Inactive* status** to find conflicts on already-disabled accounts. They are easy to close but a sign that the role design still allows the combination.
- **Combine with *Conflicts — Details* via the same user filter** to read the conflict story of a single person before contacting them.
- **Click a row** to open the *Users Audit* screen for that user — the full role + activity picture in one place.
