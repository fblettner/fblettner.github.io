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

<svg viewBox="0 0 1320 398" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ouu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ouu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ouu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ouu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="318" rx="14" fill="url(#ouu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">License - Object Usage Tracking - Users</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⏷  Advanced filters</text>
  <text x="233" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">82 rows · 12 ms</text>
  <rect x="989" y="118" width="98" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="990" y="119" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1013.5" y="131.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="1038" y1="123" x2="1038" y2="133" stroke="#334155" strokeWidth="1"/>
  <text x="1062.5" y="131.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="233" y="146" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="389" y="146" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="414.0" y="160.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="596" y="146" width="117" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Max rows  default</text>
  <rect x="719" y="146" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="749.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Views</text>
  <rect x="786" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="822.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filters</text>
  <rect x="864" y="146" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="894.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Group</text>
  <rect x="931" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="967.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Columns</text>
  <rect x="1009" y="146" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1048.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Export ▾</text>
  <rect x="233" y="178" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="337" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="351" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="437" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USER ID (ID)</text>
  <text x="529" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USER ID</text>
  <text x="639" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="689" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CREATION DATE</text>
  <text x="781" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LOGIN DATE</text>
  <text x="873" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TECHNICAL (Y…</text>
  <text x="953" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">GENERIC (Y/N)</text>
  <text x="1033" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LINKED USER ID</text>
  <rect x="233" y="204" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="529" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">John Doe</text>
  <circle cx="656.0" cy="215.0" r="3.2" fill="#4ade80"/>
  <text x="689" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2021-03-02</text>
  <text x="781" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <circle cx="905.0" cy="215.0" r="3.2" fill="#f87171"/>
  <circle cx="985.0" cy="215.0" r="3.2" fill="#f87171"/>
  <text x="1033" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="226" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ASMITH</text>
  <text x="529" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <circle cx="656.0" cy="237.0" r="3.2" fill="#4ade80"/>
  <text x="689" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2019-09-14</text>
  <text x="781" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-20</text>
  <circle cx="905.0" cy="237.0" r="3.2" fill="#f87171"/>
  <circle cx="985.0" cy="237.0" r="3.2" fill="#f87171"/>
  <text x="1033" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="248" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">BATCHUSR</text>
  <text x="529" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Batch account</text>
  <circle cx="656.0" cy="259.0" r="3.2" fill="#4ade80"/>
  <text x="689" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2018-01-05</text>
  <text x="781" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <circle cx="905.0" cy="259.0" r="3.2" fill="#4ade80"/>
  <circle cx="985.0" cy="259.0" r="3.2" fill="#f87171"/>
  <text x="1033" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="270" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDOE2</text>
  <text x="529" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">John Doe</text>
  <circle cx="656.0" cy="281.0" r="3.2" fill="#4ade80"/>
  <text x="689" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2024-04-12</text>
  <text x="781" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-09-30</text>
  <circle cx="905.0" cy="281.0" r="3.2" fill="#f87171"/>
  <circle cx="985.0" cy="281.0" r="3.2" fill="#f87171"/>
  <text x="1033" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="233" y="316" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="304" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="317.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="317" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–50 of 82</text>
  <text x="1087" y="317" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="354" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="369" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">User</text>
  <text x="225.0" y="382" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">seen in object usage tracking</text>
  <line x1="360.0" y1="354" x2="537" y2="293.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouu-arrow)"/>
  <rect x="515.0" y="354" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="369" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Technical · Generic</text>
  <text x="525.0" y="382" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from Users properties</text>
  <line x1="660.0" y1="354" x2="881" y2="293.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouu-arrow)"/>
  <rect x="815.0" y="354" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="369" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Linked User ID</text>
  <text x="825.0" y="382" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">second account of a person</text>
  <line x1="960.0" y1="354" x2="1041" y2="293.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouu-arrow)"/>
  <rect x="12" y="79" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="94" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Advanced filters</text>
  <text x="22" y="107" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application, component</text>
  <line x1="197" y1="96.0" x2="233" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouu-arrow)"/>
  <rect x="1119" y="151" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="166" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1129" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to Excel</text>
  <line x1="1119" y1="168.0" x2="1048.0" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouu-arrow)"/>
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
| **Component ID** | `CPT_ID` — licence component. Filterable, hidden by default. | Narrows the list to the users of one component (Advanced filters). |
| **User ID** | `LOUT_USER` — user identifier. Lookup against the user catalog. | Who used the component. |
| **Status** | `USR_STATUS` — `01` means *Active*. | Account state in the source system. |
| **Creation Date** | `USR_DT_CREATION` — date (string-formatted). | When the account was created. |
| **Login Date** | `USR_DT_LOGIN` — date (string-formatted). | Last authentication. |
| **Technical (Y/N)** | `USRP_TECHNICAL` — `Y` / `N`. | Account flagged as technical / batch — usually excluded from headcount-based licence calculations. |
| **Generic (Y/N)** | `USRP_GENERIC` — `Y` / `N`. | Account flagged as a shared / generic login — used by multiple people, not headcount. |
| **Linked User ID** | `USRP_ID_LINKED` — text. | If the account is declared as a duplicate, the primary login it points to. |

---

## Tips & best practices

- **Filter on `Technical = N` and `Generic = N`** to get the *real human* usage — the figure to discuss with the business when sizing the licence.
- **Inactive users with recent usage** should not exist — if the row shows up, the activity happened before deactivation but the screen still surfaces the last touch. Confirm the deactivation date is post the last-usage date.
- **A row with a *Linked User*** means the licence allocation should follow the primary account, not the linked one. Filter it out before counting.
- **Combine with *OUT — Objects*** to see which specific programs of the component each user invoked.
