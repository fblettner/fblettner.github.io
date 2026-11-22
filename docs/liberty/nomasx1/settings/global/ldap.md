---
title: LDAP
description: "Nomasx-1 LDAP settings of each connected application — the Active Directory context, filter and exclusions read by the LDAP collection that feeds Security → LDAP."
keywords: [Nomasx-1, settings, LDAP, Active Directory, base DN, LDAP filter, exclusions]
---

# LDAP

The **LDAP** screen holds, for each connected application, which part of the LDAP / Active Directory directory the LDAP collection reads — the accounts compared with the application's users on the *Security → LDAP* screens. One line per application. Open it from **Settings → Global → LDAP**.

The same fields are on the **LDAP** tab of [Applications](./applications.md); this screen shows every application side by side. The directory server, the account and the password are not set here: they belong to the **directory pool** the application names on its *Application* tab — see [LDAP tab](./applications.md#tab-ldap). A blank **LDAP Context** means the base of that pool.

---

## At a glance

<svg viewBox="0 0 1320 298" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sld-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sld-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sld-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sld-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="218" rx="14" fill="url(#sld-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">LDAP</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">1 rows · 12 ms</text>
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
  <text x="463" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LDAP CONTEXT</text>
  <text x="683" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LDAP FILTER</text>
  <text x="863" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LDAP EXCLUDE</text>
  <text x="973" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">USER (AUDIT)</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="349" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="363" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="463" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">OU=Users,DC=acme,DC=local</text>
  <text x="683" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">(objectClass=user)</text>
  <text x="863" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">svc_·</text>
  <text x="973" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">jdoe</text>
  <text x="233" y="216" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="204" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="217.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="217" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–1 of 1</text>
  <text x="1087" y="217" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="215.0" y="254" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="269" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">LDAP Context</text>
  <text x="225.0" y="282" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">where the search starts</text>
  <line x1="360.0" y1="254" x2="471" y2="193.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sld-arrow)"/>
  <rect x="515.0" y="254" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="269" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">LDAP Filter</text>
  <text x="525.0" y="282" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">entries read</text>
  <line x1="660.0" y1="254" x2="691" y2="193.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sld-arrow)"/>
  <rect x="815.0" y="254" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="269" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">LDAP Exclude</text>
  <text x="825.0" y="282" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">entries left out</text>
  <line x1="960.0" y1="254" x2="871" y2="193.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sld-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add row</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">scope of one application</text>
  <line x1="197" y1="123.0" x2="263" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sld-arrow)"/>
  <rect x="12" y="164.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="179.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click a row</text>
  <text x="22" y="192.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the edit dialog</text>
  <line x1="197" y1="181.0" x2="515" y2="181.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sld-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to Excel</text>
  <line x1="1119" y1="134.0" x2="1048.0" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sld-arrow)"/>
</svg>

---

## Edit dialog \{#edit-dialog\}

Click **Add row** to give an application its LDAP scope, or click a row to open it. The dialog is a single form with **Cancel** and **Save** — plus **Delete** and **Duplicate** on an existing row.

<svg viewBox="0 0 1320 368" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sldd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sldd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sldd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sldd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="318" rx="14" fill="url(#sldd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="235" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">New · LDAP</text>
  <rect x="1061" y="36" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1073.0" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <line x1="215" y1="68" x2="1105" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="235.0" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="235.0" y="98" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="112.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">1  JDE-PROD</text>
  <text x="1075.0" y="113" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="235.0" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LDAP CONTEXT</text>
  <rect x="235.0" y="144" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="158.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">OU=Users,DC=acme,DC=local</text>
  <text x="235.0" y="184" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LDAP FILTER</text>
  <rect x="235.0" y="190" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="204.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">(&amp;(objectClass=user)(!(userAccountControl:1.2.840.113556.1.4.803:=2)))</text>
  <text x="235.0" y="230" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LDAP EXCLUDE</text>
  <rect x="235.0" y="236" width="850.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="250.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">svc_·</text>
  <line x1="215" y1="284" x2="1105" y2="284" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1028" y="298" width="57" height="24" rx="5" fill="url(#sldd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1056.5" y="313.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▣ Save</text>
  <rect x="952" y="298" width="68" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.0" y="313.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="859" y="298" width="85" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="901.5" y="313.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Duplicate</text>
  <rect x="12" y="92" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application ID</text>
  <text x="22" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the application concerned</text>
  <line x1="197" y1="109.0" x2="233.0" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sldd-arrow)"/>
  <rect x="12" y="138" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="153" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">LDAP Context</text>
  <text x="22" y="166" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">base DN</text>
  <line x1="197" y1="155.0" x2="233.0" y2="155" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sldd-arrow)"/>
  <rect x="1119" y="184" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="199" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">LDAP Filter</text>
  <text x="1129" y="212" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">standard LDAP syntax</text>
  <line x1="1119" y1="201.0" x2="1087.0" y2="201" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sldd-arrow)"/>
  <rect x="1119" y="230" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">LDAP Exclude</text>
  <text x="1129" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">accounts to leave out</text>
  <line x1="1119" y1="247.0" x2="1087.0" y2="247" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sldd-arrow)"/>
  <rect x="1119" y="305" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="320" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="1129" y="333" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read at the next LDAP collection</text>
  <line x1="1119" y1="322.0" x2="1056.5" y2="322" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sldd-arrow)"/>
</svg>

| Field | What to enter |
|---|---|
| **Application ID** | The application. Read-only once saved. |
| **LDAP Context** | Base DN the search starts from (for example `OU=Users,DC=acme,DC=local`). |
| **LDAP Filter** | Standard LDAP filter restricting the entries read (for example `(objectClass=user)`). |
| **LDAP Exclude** | Entries to leave out of the collection. |

The grid also shows **User (Audit)** and **Date (Audit)**: who changed the row last, and when.

---

## Tips & best practices

- **Start narrow.** A context on the users' organisational unit and a filter on user objects keep the collection fast and the comparison readable.
- **Leave service accounts out** with **LDAP Exclude** when they have no counterpart in the application.
- **Group the directory's departments** on [Department](../security/department.md): the grouping drives the LDAP Excel export.
