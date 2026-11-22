---
title: Users properties
description: "Per-user flags — technical, generic, linked, privileged — that drive licence calculations and audit filtering."
keywords: [Nomasx-1, settings, users properties, technical accounts, generic accounts, linked accounts, privileged]
---

# Users properties

The **Users properties** screen carries the per-user flags Nomasx-1 uses to interpret usage data. One line per `(Application, User)`. Each row is the place to mark an account as *technical*, *generic*, *linked* to another login, *privileged*, or attached to a previous account.

These flags are read by *OUT — Users / Roles*, the *Licenses* reports and several account-hygiene views — they let the analysis distinguish a real human from a batch service account or a shared login.

---

## At a glance

<svg viewBox="0 0 1320 398" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="usp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="usp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="usp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="usp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="318" rx="14" fill="url(#usp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings - Users properties</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⏷  Advanced filters</text>
  <text x="233" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">44 rows · 12 ms</text>
  <rect x="989" y="118" width="98" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="990" y="119" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1013.5" y="131.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="1038" y1="123" x2="1038" y2="133" stroke="#334155" strokeWidth="1"/>
  <text x="1062.5" y="131.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="233" y="146" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="269.0" y="160.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add row</text>
  <rect x="311" y="146" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="352.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Bulk edit</text>
  <rect x="400" y="146" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="433.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇪ Import</text>
  <rect x="472" y="146" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="482" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="628" y="146" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="653.0" y="160.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
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
  <text x="527" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USER ID</text>
  <text x="637" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PRIVILEGED…</text>
  <text x="707" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TECHNICAL …</text>
  <text x="777" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">GENERIC (Y…</text>
  <text x="847" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">IS LINKE…</text>
  <text x="907" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LINKED USER ID</text>
  <rect x="233" y="204" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE</text>
  <text x="527" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards admin</text>
  <circle cx="664.0" cy="215.0" r="3.2" fill="#4ade80"/>
  <circle cx="734.0" cy="215.0" r="3.2" fill="#4ade80"/>
  <circle cx="804.0" cy="215.0" r="3.2" fill="#f87171"/>
  <circle cx="869.0" cy="215.0" r="3.2" fill="#f87171"/>
  <text x="907" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="226" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">BATCHUSR</text>
  <text x="527" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Batch account</text>
  <circle cx="664.0" cy="237.0" r="3.2" fill="#f87171"/>
  <circle cx="734.0" cy="237.0" r="3.2" fill="#4ade80"/>
  <circle cx="804.0" cy="237.0" r="3.2" fill="#f87171"/>
  <circle cx="869.0" cy="237.0" r="3.2" fill="#f87171"/>
  <text x="907" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="248" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDOE2</text>
  <text x="527" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">John Doe</text>
  <circle cx="664.0" cy="259.0" r="3.2" fill="#f87171"/>
  <circle cx="734.0" cy="259.0" r="3.2" fill="#f87171"/>
  <circle cx="804.0" cy="259.0" r="3.2" fill="#f87171"/>
  <circle cx="869.0" cy="259.0" r="3.2" fill="#4ade80"/>
  <text x="907" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDOE</text>
  <rect x="233" y="270" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">APCLERKS</text>
  <text x="527" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AP shared</text>
  <circle cx="664.0" cy="281.0" r="3.2" fill="#f87171"/>
  <circle cx="734.0" cy="281.0" r="3.2" fill="#f87171"/>
  <circle cx="804.0" cy="281.0" r="3.2" fill="#4ade80"/>
  <circle cx="869.0" cy="281.0" r="3.2" fill="#f87171"/>
  <text x="907" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="233" y="316" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="304" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="317.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="317" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–44 of 44</text>
  <text x="1087" y="317" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="215.0" y="354" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="369" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Privileged · Technical · Generic</text>
  <text x="225.0" y="382" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">flags read by the reports</text>
  <line x1="435.0" y1="354" x2="645" y2="293.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usp-arrow)"/>
  <rect x="665.0" y="354" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="369" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Linked User ID</text>
  <text x="675.0" y="382" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the person's main account</text>
  <line x1="885.0" y1="354" x2="915" y2="293.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usp-arrow)"/>
  <rect x="12" y="140" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add row · Bulk edit · Import</text>
  <text x="22" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one account, many, or a file</text>
  <line x1="197" y1="157.0" x2="263" y2="157" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usp-arrow)"/>
  <rect x="12" y="220.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="235.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click a row</text>
  <text x="22" y="248.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the edit dialog</text>
  <line x1="197" y1="237.0" x2="515" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usp-arrow)"/>
  <rect x="1119" y="151" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="166" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filters</text>
  <text x="1129" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">e.g. Technical = Y</text>
  <line x1="1119" y1="168.0" x2="822.0" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usp-arrow)"/>
</svg>

---

## Goal of the view

Tag each user account so downstream views can filter intelligently:

- **Technical accounts** — batch / service users. Excluded from headcount-based licence calculations.
- **Generic accounts** — shared logins. *Generic count* lets you state how many real people are behind it.
- **Privileged accounts** — flagged for special audit attention.
- **Linked / Previous accounts** — duplicate or successor relationships. *Linked User* and *Previous User* hold the reference to the primary login.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `USRP_APPS_ID` — application. | The application. |
| **User ID** | `USRP_ID` — user identifier. | The account being tagged. |
| **Technical (Y/N)** | `USRP_TECHNICAL` — `Y` / `N`. | Marks the account as a service / batch user. |
| **Generic (Y/N)** | `USRP_GENERIC` — `Y` / `N`. | Marks the account as shared by several people. |
| **Generic count** | `USRP_GENERIC_COUNT` — number. | How many real people share the generic account. |
| **Privileged (Y/N)** | `USRP_PRIVILEGED` — `Y` / `N`. | Marks the account as carrying elevated privileges. |
| **Is Linked (Y/N)** | `USRP_IS_LINKED` — `Y` / `N`. | Whether the account is declared as duplicate of another. |
| **Linked User ID** | `USRP_ID_LINKED` — login. | If linked, the primary login it points to. |
| **Is renamed (Y/N)** | `USRP_IS_PREVIOUS` — `Y` / `N`. | Whether the account is the successor of a previously used login. |
| **Previous User ID** | `USRP_ID_PREVIOUS` — login. | If marked, the previous login. |

---

## Edit dialog

Click **Add row** to flag an account, or click a row to open it; **Bulk edit** changes several rows in the grid and **Import** loads them from Excel. The form has two columns, each flag paired with its detail.

<svg viewBox="0 0 1320 414" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="usd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="usd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="usd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="usd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="364" rx="14" fill="url(#usd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="235" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Edit · Settings - Users properties</text>
  <rect x="1061" y="36" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1073.0" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <line x1="215" y1="68" x2="1105" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="235.0" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="235.0" y="98" width="418.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="112.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">1  JDE-PROD</text>
  <text x="643.0" y="113" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="667.0" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER ID</text>
  <rect x="667.0" y="98" width="418.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="112.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">JDOE2  John Doe</text>
  <text x="1075.0" y="113" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="235.0" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PRIVILEGED (Y/N)</text>
  <rect x="235.0" y="147" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="252.0" y="156" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="667.0" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TECHNICAL (Y/N)</text>
  <rect x="667.0" y="147" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="684.0" y="156" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="235.0" y="184" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GENERIC (Y/N)</text>
  <rect x="235.0" y="193" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="252.0" y="202" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="667.0" y="184" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GENERIC COUNT</text>
  <rect x="667.0" y="190" width="418.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="204.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="235.0" y="230" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IS LINKED (Y/N)</text>
  <rect x="235.0" y="239" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M237.5,244.5 L239.8,246.8 L243.8,242" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="252.0" y="248" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">enabled</text>
  <text x="667.0" y="230" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LINKED USER ID</text>
  <rect x="667.0" y="236" width="418.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="250.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">JDOE</text>
  <text x="235.0" y="276" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IS RENAMED (Y/N)</text>
  <rect x="235.0" y="285" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="252.0" y="294" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="667.0" y="276" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PREVIOUS USER ID</text>
  <rect x="667.0" y="282" width="418.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="296.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <line x1="215" y1="330" x2="1105" y2="330" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1028" y="344" width="57" height="24" rx="5" fill="url(#usd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1056.5" y="359.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▣ Save</text>
  <rect x="952" y="344" width="68" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.0" y="359.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="859" y="344" width="85" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="901.5" y="359.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Duplicate</text>
  <rect x="794" y="344" width="57" height="24" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="822.5" y="359.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="12" y="92" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application · User</text>
  <text x="22" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the account flagged</text>
  <line x1="197" y1="109.0" x2="233.0" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usd-arrow)"/>
  <rect x="12" y="138" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="153" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Privileged · Technical</text>
  <text x="22" y="166" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">switch the flags on</text>
  <line x1="197" y1="155.0" x2="233.0" y2="155" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usd-arrow)"/>
  <rect x="12" y="230" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Is Linked + Linked User ID</text>
  <text x="22" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">second account of one person</text>
  <line x1="197" y1="247.0" x2="233.0" y2="247" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usd-arrow)"/>
  <rect x="1119" y="276" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="291" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Is renamed + Previous User ID</text>
  <text x="1129" y="304" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">keeps the history together</text>
  <line x1="1119" y1="293.0" x2="1087.0" y2="293" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usd-arrow)"/>
  <rect x="1119" y="351" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="366" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="1129" y="379" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read at the next report</text>
  <line x1="1119" y1="368.0" x2="1056.5" y2="368" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usd-arrow)"/>
</svg>

| Field | What to enter |
|---|---|
| **Application ID** | The application. |
| **User ID** | Picked from the application's users. |
| **Privileged (Y/N)** | Tick when the account carries elevated privileges. |
| **Technical (Y/N)** | Tick when the account is a service / batch user. |
| **Generic (Y/N)** | Tick when the account is a shared login. |
| **Generic count** | With *Generic*: number of real people behind the login. |
| **Is Linked (Y/N)** | Tick when the account is a duplicate of another login. |
| **Linked User ID** | With *Is Linked*: the primary login the account belongs to. |
| **Is renamed (Y/N)** | Tick when the account is the successor of a previous login. |
| **Previous User ID** | With *Is renamed*: the previous login. |

---

## Tips & best practices

- **Tag technical and generic accounts early.** Every untagged technical user pollutes the licence headcount.
- **Use *Linked* for duplicate pairs the *Duplicate users* screen surfaced as known-good.** Declared once, removed from the audit noise.
- **Privileged should be sparing.** Setting `Privileged = Y` is a deliberate audit signal — limit it to accounts that truly carry elevated rights.
