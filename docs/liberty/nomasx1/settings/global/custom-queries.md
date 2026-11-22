---
title: Custom Queries
description: "User-defined SQL fragments overriding the default Nomasx-1 queries on a per-application basis."
keywords: [Nomasx-1, settings, custom queries, override, SQL, JDBC, per-application]
---

# Custom Queries

The **Custom Queries** screen lets each application override the SQL Nomasx-1 runs by default. One line per `(Application, Method)` pair — *SQL Method* is the security collection step the query replaces — `SECURITY_USERS` (Users), `SECURITY_ROLES` (Roles), `SECURITY_ASSIGNMENTS` (Assignments), `SECURITY_MENUS` (Menus) or `SECURITY_RIGHTS` (Rights) — and *Query* carries the replacement SQL. Optional dedicated JDBC / user / password let the override target a different schema than the application's main one.

This is the extension point. When a source system stores its security tables differently from the canonical Nomasx-1 expectation, override the method here rather than touching the product.

---

## At a glance

<svg viewBox="0 0 1320 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="csq-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="csq-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="csq-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="csq-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="240" rx="14" fill="url(#csq-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings - User defined query</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">2 rows · 12 ms</text>
  <rect x="989" y="84" width="98" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="990" y="85" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1013.5" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="1038" y1="89" x2="1038" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="1062.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="233" y="112" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="269.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add row</text>
  <rect x="311" y="112" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="352.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Bulk edit</text>
  <rect x="400" y="112" width="128" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="410" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="534" y="112" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="559.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="596" y="112" width="117" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Max rows  default</text>
  <rect x="719" y="112" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="749.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Views</text>
  <rect x="786" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="822.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filters</text>
  <rect x="864" y="112" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="894.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Group</text>
  <rect x="931" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="967.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Columns</text>
  <rect x="1009" y="112" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1048.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Export ▾</text>
  <rect x="233" y="144" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="349" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (ID)</text>
  <text x="363" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="483" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SQL METHOD (ID)</text>
  <text x="653" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SQL METHOD</text>
  <text x="813" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USER (AUDIT)</text>
  <text x="913" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE (AUDIT)</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="349" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="363" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="483" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SECURITY_USERS</text>
  <text x="653" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Users</text>
  <text x="813" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">jdoe</text>
  <text x="913" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-02</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="349" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="363" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="483" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SECURITY_ROLES</text>
  <text x="653" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Roles</text>
  <text x="813" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">jdoe</text>
  <text x="913" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-10-15</text>
  <text x="233" y="238" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="226" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="239.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="239" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–2 of 2</text>
  <text x="1087" y="239" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="215.0" y="276" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="291" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">SQL Method</text>
  <text x="225.0" y="304" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the query replaced</text>
  <line x1="435.0" y1="276" x2="661" y2="215.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csq-arrow)"/>
  <rect x="665.0" y="276" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="291" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">User · Date (Audit)</text>
  <text x="675.0" y="304" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">last change</text>
  <line x1="885.0" y1="276" x2="921" y2="215.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csq-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add row</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">override one security query</text>
  <line x1="197" y1="123.0" x2="263" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csq-arrow)"/>
  <rect x="12" y="186.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="201.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click a row</text>
  <text x="22" y="214.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Properties · Database · Query</text>
  <line x1="197" y1="203.0" x2="515" y2="203.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csq-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to Excel</text>
  <line x1="1119" y1="134.0" x2="1048.0" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#csq-arrow)"/>
</svg>

---

## Goal of the view

- **Override per application.** A row replaces the default query Nomasx-1 would run for the named method on the named application.
- **Add a separate connection if needed.** When the override SQL targets a different schema or different credentials, the dedicated *JDBC / User / Password* columns carry them; otherwise the override runs against the application's main connection.
- **Trace the change.** *User (Audit)* and *Date (Audit)* record who introduced the override and when — useful when a collection starts behaving differently.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `SQL_APPS_ID` — application identifier. Joined to *Applications* for the friendly name. | Which application the override applies to. |
| **SQL Method** | `SQL_METHOD` — one of the five security methods. | The query slot being overridden. |
| **Query** | `SQL_BLOB` — text. Hidden by default. | The replacement SQL. |
| **JDBC / User / Password** | `SQL_JDBC`, `SQL_USER`, `SQL_PASSWORD` — optional. Hidden. | Dedicated connection used by the override. |
| **User (Audit) / Date (Audit)** | `SQL_AUDIT_USER`, `SQL_AUDIT_DATE` — who / when. | Change traceability. |

---

## Edit dialog

Click **Add row** to declare a new override, or click a row to open it. The dialog has three tabs: **Properties**, **Database** and **Query**.

<svg viewBox="0 0 1320 404" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cqd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cqd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cqd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cqd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="354" rx="14" fill="url(#cqd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="235" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">New · Settings - User defined query</text>
  <rect x="1061" y="36" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1073.0" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <line x1="215" y1="68" x2="1105" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="272.5" y="92" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Properties</text>
  <line x1="235" y1="101" x2="310" y2="101" stroke="#4a9eff" strokeWidth="2"/>
  <text x="348.0" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Database</text>
  <text x="410.0" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Query</text>
  <line x1="235" y1="102" x2="1085" y2="102" stroke="#1f2937" strokeWidth="1"/>
  <text x="235.0" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="235.0" y="134" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="148.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Pick…</text>
  <text x="1075.0" y="149" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="235.0" y="174" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SQL METHOD</text>
  <rect x="235.0" y="180" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="194.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Pick…</text>
  <text x="1075.0" y="195" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="235.0" y="220" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER (AUDIT)</text>
  <rect x="235.0" y="226" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="240.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">jdoe</text>
  <text x="235.0" y="266" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE (AUDIT)</text>
  <rect x="235.0" y="272" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="286.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">2026-11-22</text>
  <line x1="215" y1="320" x2="1105" y2="320" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1028" y="334" width="57" height="24" rx="5" fill="url(#cqd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1056.5" y="349.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▣ Save</text>
  <rect x="952" y="334" width="68" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.0" y="349.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="859" y="334" width="85" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="901.5" y="349.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Duplicate</text>
  <rect x="12" y="67" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="82" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three tabs</text>
  <text x="22" y="95" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Database: user, password, JDBC</text>
  <line x1="197" y1="84.0" x2="355" y2="84" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cqd-arrow)"/>
  <rect x="12" y="128" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application ID</text>
  <text x="22" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the application concerned</text>
  <line x1="197" y1="145.0" x2="233.0" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cqd-arrow)"/>
  <rect x="12" y="174" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="189" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">SQL Method</text>
  <text x="22" y="202" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">which collection query</text>
  <line x1="197" y1="191.0" x2="233.0" y2="191" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cqd-arrow)"/>
  <rect x="1119" y="220" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">User · Date (Audit)</text>
  <text x="1129" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">filled in by the app</text>
  <line x1="1119" y1="237.0" x2="1087.0" y2="237" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cqd-arrow)"/>
  <rect x="1119" y="341" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="356" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="1129" y="369" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the Query tab holds the SQL</text>
  <line x1="1119" y1="358.0" x2="1056.5" y2="358" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cqd-arrow)"/>
</svg>

### Tab 1 — Properties

The pair that identifies the override, with who changed it last.

| Field | What to enter |
|---|---|
| **Application ID** | One of the declared applications. The override applies to this one only. |
| **SQL Method** | The method replaced: `SECURITY_USERS` (Users), `SECURITY_ROLES` (Roles), `SECURITY_ASSIGNMENTS` (Assignments), `SECURITY_MENUS` (Menus) or `SECURITY_RIGHTS` (Rights). |
| **User (Audit)** / **Date (Audit)** | Filled in by Nomasx-1 on save. |

### Tab 2 — Database

Optional dedicated connection. Leave the three fields empty to run the override against the application's main connection.

| Field | What to enter |
|---|---|
| **User** | Read-only account used to run the override SQL. |
| **Password** | Password for the account. |
| **JDBC** | JDBC URL when the override targets a different schema than the application's main one. |

### Tab 3 — Query

The replacement SQL itself. Required.

| Field | What to enter |
|---|---|
| **Query** | Multi-line text. Paste the SQL to run instead of the default for the method picked on the *Properties* tab. |

---

## Tips & best practices

- **Test the SQL outside Nomasx-1 first** — a syntactically broken override surfaces as an empty grid on the consuming screen.
- **Keep override scopes tight.** Override one method at a time rather than rewriting an entire branch — easier to maintain and to roll back.
- **Document the *why* in the change description** during code review or in a ticket — six months later, the override has to be readable by a different administrator.
- **Remove the row when no longer needed** so Nomasx-1 falls back to the default behaviour for that method.
