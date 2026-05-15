---
title: OUT — Users / Roles
description: "Object Usage Tracking with the user's status, type and link — the per-user view of which licence components they actually consume."
keywords: [Nomasx-1, applications, Object Usage Tracking, OUT, users, technical users, generic users, linked users]
---

# OUT — Users / Roles

The **OUT — Users / Roles** screen pivots the OUT data by user. One line per `(Application, Component, User)` triplet. Each row brings the user's status (active / inactive), the technical and generic flags, the linked-user reference and the creation / last-login dates — everything needed to interpret the usage in the context of *who* the user is.

A row with high usage on a sensitive component carries a different weight depending on whether the user is a real person, a technical batch account or a generic shared login.

---

## At a glance

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="outur-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#outur-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · OUT · Users / Roles</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="260" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUS</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CREATED</text>
  <text x="490" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LAST LOGIN</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TECHNICAL</text>
  <text x="710" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">GENERIC</text>
  <text x="810" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LINKED USER</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <rect x="260" y="136" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="285" y="148" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2019-03-14</text>
  <text x="490" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="710" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="810" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SVC_BATCH</text>
  <rect x="260" y="168" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="285" y="180" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2017-04-02</text>
  <text x="490" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
  <text x="600" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Y</text>
  <text x="710" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="810" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SHARED01</text>
  <rect x="260" y="200" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="285" y="212" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <text x="380" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2015-09-01</text>
  <text x="490" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-13</text>
  <text x="600" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="710" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Y</text>
  <text x="810" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">J.DOE</text>
  <rect x="260" y="232" width="60" height="16" rx="3" fill="rgba(248,113,113,0.18)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="290" y="244" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Inactive</text>
  <text x="380" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2014-02-10</text>
  <text x="490" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2019-03-13</text>
  <text x="600" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="710" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="810" y="245" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Sorted by LOUT_USER · 14 technical, 3 generic, 1 linked to a primary account</text>
</svg>

---

## Goal of the view

For each user that has invoked at least one object of a licence component:

- **Sort the noise from the signal.** Technical and generic users are tagged so they can be excluded from the audit if needed.
- **Read activity in identity context.** *Created* + *Last login* + *Status* give the full account-hygiene context next to the usage.
- **Spot consolidated identities.** *Linked User* signals an account already declared as a duplicate of another login. Counting it twice in licence reporting would over-count the user.

:::info[JDE-specific]
Tagging of technical / generic / linked users is held in `SECURITY_USERS_PROP`. The flag values are maintained on the *Settings → Users properties* screen. Other source systems can use the same tagging mechanism via a corresponding query.
:::

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `LOUT_APPS_ID` — application identifier. Filterable. | The connected application. |
| **Component** | `CPT_ID` — licence component. Filterable, hidden by default. | Used by the drill-down from *OUT — Components*. |
| **User ID** | `LOUT_USER` — user identifier. Lookup against the user catalog. | Who used the component. |
| **Status** | `USR_STATUS` — `01` means *Active*. | Account state in the source system. |
| **Creation Date** | `USR_DT_CREATION` — date (string-formatted). | When the account was created. |
| **Login Date** | `USR_DT_LOGIN` — date (string-formatted). | Last authentication. |
| **Technical** | `USRP_TECHNICAL` — `Y` / `N`. | Account flagged as technical / batch — usually excluded from headcount-based licence calculations. |
| **Generic** | `USRP_GENERIC` — `Y` / `N`. | Account flagged as a shared / generic login — used by multiple people, not headcount. |
| **Linked User** | `USRP_ID_LINKED` — text. | If the account is declared as a duplicate, the primary login it points to. |

---

## Tips & best practices

- **Filter on `Technical = N` and `Generic = N`** to get the *real human* usage — the figure to discuss with the business when sizing the licence.
- **Inactive users with recent usage** should not exist — if the row shows up, the activity happened before deactivation but the screen still surfaces the last touch. Confirm the deactivation date is post the last-usage date.
- **A row with a *Linked User*** means the licence allocation should follow the primary account, not the linked one. Filter it out before counting.
- **Combine with *OUT — Objects*** to see which specific programs of the component each user invoked.
