---
title: Applications
description: "Registry of every connected application — identifier, type, database, host and credentials Nomasx-1 uses to reach the source system."
keywords: [Nomasx-1, settings, applications, registry, connection, JDBC, source system]
---

# Applications

The **Applications** screen is the central registry of every application Nomasx-1 connects to. One line per application. Each row holds the identifier displayed across the rest of the product, the type of the source system, the database backend and the connection details (host, port, user, password).

It is the first screen to populate when bringing a new source system in, and the last one to touch once everything else works. Open it from **Settings → Global → Applications**.

---

## At a glance

<svg viewBox="0 0 1320 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sap-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sap-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sap-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sap-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="240" rx="14" fill="url(#sap-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings - Applications</text>
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
  <text x="329" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="343" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION NAME</text>
  <text x="473" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPPLICATION TYPE (I…</text>
  <text x="593" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPPLICATION TYPE</text>
  <text x="703" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATABASE (ID)</text>
  <text x="813" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATABASE</text>
  <text x="903" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">HOST</text>
  <text x="1013" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATABASE</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="329" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="343" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="473" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE</text>
  <text x="593" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards</text>
  <text x="703" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ORACLE</text>
  <text x="813" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Oracle</text>
  <text x="903" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">dbhost01</text>
  <text x="1013" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDEPRD</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="329" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="343" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-TEST</text>
  <text x="473" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE</text>
  <text x="593" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards</text>
  <text x="703" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ORACLE</text>
  <text x="813" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Oracle</text>
  <text x="903" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">dbhost02</text>
  <text x="1013" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDETST</text>
  <text x="233" y="238" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="226" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="239.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="239" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–2 of 2</text>
  <text x="1087" y="239" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="215.0" y="276" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="291" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application Name</text>
  <text x="225.0" y="304" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shown everywhere in Nomasx-1</text>
  <line x1="360.0" y1="276" x2="351" y2="215.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
  <rect x="515.0" y="276" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="291" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type</text>
  <text x="525.0" y="304" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">kind of source system</text>
  <line x1="660.0" y1="276" x2="601" y2="215.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
  <rect x="815.0" y="276" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="291" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Host · Database</text>
  <text x="825.0" y="304" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">where Nomasx-1 reads</text>
  <line x1="960.0" y1="276" x2="911" y2="215.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add row</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">declare an application</text>
  <line x1="197" y1="123.0" x2="263" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
  <rect x="12" y="186.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="201.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click a row</text>
  <text x="22" y="214.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens its eight tabs</text>
  <line x1="197" y1="203.0" x2="515" y2="203.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Views</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">default view: six columns</text>
  <line x1="1119" y1="134.0" x2="749.5" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
</svg>

---

## Goal of the view

Maintain the registry that every other screen references:

- **Declare each source system.** One row per application — ID, name, type (`JDE`, `DATABASE`, `LDAP`, `WEBLOGIC`, `CUSTOM`), database technology (`ORACLE`, `MSSQL`, `DB2`, `POSTGRES`…), host.
- **Carry the connection details.** Host, port, database, user, password, DB-link and direct-connection flags, plus the JD Edwards and LDAP settings. The collection jobs read them.
- **Establish the application ID** that flows through every other screen — the connection between user, role, conflict, licence and audit data.

---

## Columns

The default view shows *Application ID*, *Application Name*, *Appplication Type*, *Database* (the technology), *Host* and *Database* (the name). **Columns** shows the others.

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `APPS_ID` — numeric identifier. | The application identifier referenced everywhere else in the product. |
| **Application Name** | `APPS_NAME` — friendly name. | Human-readable label. |
| **Appplication Type** | `APPS_TYPE` — `JDE` (JD Edwards), `DATABASE`, `LDAP`, `WEBLOGIC` or `CUSTOM` (Custom Application). | Kind of source system — drives the collection steps that apply. |
| **Database** | `APPS_DBTYPE` — `ORACLE`, `MSSQL`, `DB2`, `POSTGRES`, `MYSQL`, `MARIADB`, `LDAP`, `GENERIC`. | Database technology. |
| **Host** | `APPS_HOST` — server. | Hostname / IP. |
| **Database** | `APPS_DATABASE` — service name / SID. | Database name. |
| **User / Password** | `APPS_USER`, `APPS_PASSWORD` — credentials. | Account Nomasx-1 reads the source with. |
| **Port**, **DB-Link**, **Direct connection**, **Country Code** | `APPS_PORT`, `APPS_DBLINK`, `APPS_DIRECTDB`, `APPS_CTRY_ID`. Hidden. | Connection details and country tag. |
| **Pool** | `APPS_JDBC`. Hidden. | Connector pool the collection jobs use for this application, so one JD Edwards connector can serve several environments. Blank: the job's own source connector. |

The JD Edwards and LDAP settings of each application are columns of the same grid as well (*JDE SY*, *JDE DTA*… *LDAP Context*…): they are described with the dialog's tabs below.

---

## Edit dialog

Click **Add row** to declare a new application, or click a row to open it. The dialog, **Edit · Settings - Applications**, opens on the **Application** tab and carries eight tabs. **Task Views**, **Activity Log**, **Audit Trail** and **Audit Columns** only appear on an application that is already saved. The footer carries **Delete**, **Duplicate**, **Cancel** and **Save**.

<svg viewBox="0 0 1320 542" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sad-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sad-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sad-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sad-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="492" rx="14" fill="url(#sad-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="235" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Edit · Settings - Applications</text>
  <rect x="1061" y="36" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1073.0" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <line x1="215" y1="68" x2="1105" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="275.0" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Application</text>
  <text x="355.5" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Connexion</text>
  <text x="433.5" y="92" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">JD Edwards</text>
  <line x1="396" y1="101" x2="471" y2="101" stroke="#4a9eff" strokeWidth="2"/>
  <text x="514.5" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Task Views</text>
  <text x="579.5" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">LDAP</text>
  <text x="649.5" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Activity Log</text>
  <text x="738.0" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Audit Trail</text>
  <text x="829.5" y="92" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Audit Columns</text>
  <line x1="235" y1="102" x2="1085" y2="102" stroke="#1f2937" strokeWidth="1"/>
  <text x="235.0" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE DTA</text>
  <rect x="235.0" y="134" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="148.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">PRODDTA</text>
  <text x="451.0" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_DTA_DBLINK</text>
  <rect x="451.0" y="134" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="148.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE CTL</text>
  <rect x="667.0" y="134" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="148.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">PRODCTL</text>
  <text x="883.0" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_CTL_DBLINK</text>
  <rect x="883.0" y="134" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="148.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="235.0" y="174" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE SY</text>
  <rect x="235.0" y="180" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="194.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SY920</text>
  <text x="451.0" y="174" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_SY_DBLINK</text>
  <rect x="451.0" y="180" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="194.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="174" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE SVM</text>
  <rect x="667.0" y="180" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="194.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SVM920</text>
  <text x="883.0" y="174" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_SVM_DBLINK</text>
  <rect x="883.0" y="180" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="194.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="235.0" y="220" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE CO</text>
  <rect x="235.0" y="226" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="240.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">PD920</text>
  <text x="451.0" y="220" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_CO_DBLINK</text>
  <rect x="451.0" y="226" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="240.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="220" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE OL</text>
  <rect x="667.0" y="226" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="240.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">OL920</text>
  <text x="883.0" y="220" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_UDO_OL_DBLINK</text>
  <rect x="883.0" y="226" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="240.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="235.0" y="266" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">F00950</text>
  <rect x="235.0" y="272" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="286.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SY920</text>
  <text x="451.0" y="266" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_F00950_DBLINK</text>
  <rect x="451.0" y="272" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="286.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="266" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_UDO_SEC</text>
  <rect x="667.0" y="272" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="286.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SY920</text>
  <text x="883.0" y="266" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_UDO_SEC_DBLINK</text>
  <rect x="883.0" y="272" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="286.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="235.0" y="312" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_UDO_OL</text>
  <rect x="235.0" y="318" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="332.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">OL920</text>
  <text x="451.0" y="312" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_OL_DBLINK</text>
  <rect x="451.0" y="318" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="332.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="312" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THICK LOB READ (Y/N)</text>
  <rect x="667.0" y="321" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="684.0" y="330" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="235.0" y="358" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STANDARD MENU (Y/N)</text>
  <rect x="235.0" y="367" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M237.5,372.5 L239.8,374.8 L243.8,370" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="252.0" y="376" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">enabled</text>
  <text x="451.0" y="358" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">E1 PAGES (Y/N)</text>
  <rect x="451.0" y="367" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M453.5,372.5 L455.8,374.8 L459.8,370" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="468.0" y="376" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">enabled</text>
  <text x="667.0" y="358" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">E1 COMPOSITE (Y/N)</text>
  <rect x="667.0" y="367" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M669.5,372.5 L671.8,374.8 L675.8,370" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="684.0" y="376" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">enabled</text>
  <text x="235.0" y="404" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PURGE OUT (Y/N)</text>
  <rect x="235.0" y="413" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M237.5,418.5 L239.8,420.8 L243.8,416" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="252.0" y="422" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">enabled</text>
  <text x="451.0" y="404" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUT RETENTION DAYS</text>
  <rect x="451.0" y="410" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="424.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">90</text>
  <line x1="215" y1="458" x2="1105" y2="458" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1028" y="472" width="57" height="24" rx="5" fill="url(#sad-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1056.5" y="487.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▣ Save</text>
  <rect x="952" y="472" width="68" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.0" y="487.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="859" y="472" width="85" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="901.5" y="487.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Duplicate</text>
  <rect x="794" y="472" width="57" height="24" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="822.5" y="487.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="12" y="67" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="82" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Eight tabs</text>
  <text x="22" y="95" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">four only on an existing row</text>
  <line x1="197" y1="84.0" x2="485" y2="84" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sad-arrow)"/>
  <rect x="12" y="128" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Schemas</text>
  <text x="22" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">data, control, system, server map…</text>
  <line x1="197" y1="145.0" x2="233.0" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sad-arrow)"/>
  <rect x="12" y="312" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="327" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">UDO libraries</text>
  <text x="22" y="340" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">security and object librarian</text>
  <line x1="197" y1="329.0" x2="233.0" y2="329" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sad-arrow)"/>
  <rect x="12" y="358" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="373" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Menus to read</text>
  <text x="22" y="386" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">standard, E1 pages, composite</text>
  <line x1="197" y1="375.0" x2="233.0" y2="375" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sad-arrow)"/>
  <rect x="1119" y="128" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">…_DBLINK</text>
  <text x="1129" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">database link per schema</text>
  <line x1="1119" y1="145.0" x2="1087.0" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sad-arrow)"/>
  <rect x="1119" y="312" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="327" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Thick LOB read</text>
  <text x="1129" y="340" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">JDE reached through a DB link</text>
  <line x1="1119" y1="329.0" x2="871.0" y2="329" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sad-arrow)"/>
  <rect x="1119" y="404" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="419" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Purge OUT · retention</text>
  <text x="1129" y="432" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">days of usage kept</text>
  <line x1="1119" y1="421.0" x2="655.0" y2="421" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sad-arrow)"/>
  <rect x="1119" y="479" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="494" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="1129" y="507" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Delete · Duplicate · Cancel</text>
  <line x1="1119" y1="496.0" x2="1056.5" y2="496" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sad-arrow)"/>
</svg>

### Tab 1 — Application

| Field | What to enter |
|---|---|
| **Application ID** | Numeric identifier. Stays stable across the product — do not renumber it once the application is in use. |
| **Application Name** | Friendly label shown on every screen and export. |
| **Appplication Type** | Kind of source system, picked from a list (`JDE` — JD Edwards…). Drives which collection steps apply. |
| **Database** | Database technology, picked from a list (`ORACLE` — Oracle…). |

### Tab 2 — Connexion

Where the source database is and the account Nomasx-1 reads it with.

| Field | What to enter |
|---|---|
| **Host** | Hostname or IP of the database server. |
| **User** | Account Nomasx-1 reads the source with. |
| **Password** | Its password. On an existing application the field shows *leave blank to keep the current value*. |

The port, the database name, the DB-link and direct-connection flags are hidden columns of the grid (**Columns** shows them).

### Tab 3 — JD Edwards

:::info[JDE-specific]
The schemas that locate the JD Edwards EnterpriseOne tables, each with its database link, then what the collection reads. The same settings are on their own screen, [JD Edwards](./jd-edwards.md).
:::

| Field | What to enter |
|---|---|
| **JDE DTA**, **JDE CTL**, **JDE SY**, **JDE SVM**, **JDE CO**, **JDE OL** | Schemas of the business data, control, system, server map, central objects and object librarian tables. |
| **F00950** | Schema of the security workbench table. |
| **JDE_UDO_SEC** | Schema of the user defined objects' security table (F00950W): its rows are added to the security collected. Blank: skipped. |
| **JDE_UDO_OL** | Schema of the user defined objects' librarian (F9860W, F9861W), read for the composite pages, the E1 pages and the inventory of user defined objects. Blank: those steps do nothing and say so. |
| **…_DBLINK** | Next to each schema: the database link to reach it, blank when the JDE tables are local. |
| **Thick LOB read (Y/N)** | Tick when the JDE tables are reached through a database link: the menus and the cross reference specifications (LOB columns) are then read by a short-lived thick-mode process. Leave cleared for a local install. |
| **Standard Menu (Y/N)**, **E1 Pages (Y/N)**, **E1 Composite (Y/N)** | Which menus the security build reads: the standard JDE menus, the E1 pages and the composite pages. A composite page gives what its tiles open, the forms shown in its panes and the task of a task tile — for a landing page, every task under its menu; an E1 page gives the applications and reports its code calls or names. |
| **Purge OUT (Y/N)** | Tick to let Nomasx-1 purge old Object Usage Tracking rows. |
| **OUT Retention Days** | Days of usage history kept by the purge. |

:::tip
Object Usage Tracking writes several thousand rows a day. Once Nomasx-1 has aggregated them, the purge keeps the JDE table small — tick **Purge OUT** and pick a retention that fits the audit needs. The usage Nomasx-1 has already collected is kept on its side.
:::

The schema values come from the JDE installation — the JDE administrator is the right person to ask.

### Tab 4 — Task Views

Grid of the JDE task views (the roots of the menu tree, such as *EnterpriseOne Menus*): **Task ID**, **Task Name** and **Collect Security (Y/N)**. Only the task views ticked here are walked by the security build — the rights of the *Menus* and *Rights* screens start from them. **Add row** declares another task view.

### Tab 5 — LDAP

LDAP / Active Directory scope of the application, read by the LDAP collection.

| Field | What to enter |
|---|---|
| **LDAP Context** | Base DN the search starts from (for example `OU=Users,DC=acme,DC=local`). |
| **LDAP Filter** | LDAP search filter restricting the entries read. |
| **LDAP Exclude** | Entries to leave out. |

The same settings are on their own screen, [LDAP](./ldap.md).

### Tab 6 — Activity Log

Grid of the rules that decide **what the activity collection watches** to feed *Applications → Activity log*. One row per rule; **Add row** widens the scope, deleting a row narrows it.

| Column | What to enter |
|---|---|
| **ACL Type** | What the rule targets: `ROLE`, `SCHEMA`, `TABLE` or `USER`. |
| **ACL Application Type** | Where the name is read: `DATABASE` or `JDEDWARDS`. |
| **Name** | Name of the role, schema, table or user. |
| **ACL Rule** | `INCLUDE`, `EXCLUDE` or `AUDIT`. |

### Tab 7 — Audit Trail

Grid holding **the connection Nomasx-1 uses to read the Oracle archive logs** of the application — one row — read by the collection that feeds *Database → Audit Trail* and *Audit Lookup*.

| Column | What to enter |
|---|---|
| **User ID** / **Password** | Database account allowed to read the archive log views. |
| **Host** / **Port** / **Database** | Where that database is (`1521` on a standard Oracle install). |
| **Last SCN** | *System Change Number* the next extraction resumes from. |
| **Last Timestamp** | Time of the last extraction. |

### Tab 8 — Audit Columns

Grid that sets **how much of each audited table is indexed** into the values table `AUDIT_TRAIL_VALUES` for this application. One row per rule:

| Column | What to enter |
|---|---|
| **Table** | Table name (for example `F0911`). |
| **Column (or *SQL* for journal-only)** | Column to index, or `*SQL*` for the journal-only mode. |

| Rule set on a table | Effect |
|---|---|
| **One or more named columns** | Only the listed columns are indexed. The others stay visible in the on-demand diff of *Audit Trail*, but cannot be searched in the values table. |
| **A single `*SQL*` row** | Journal only — the full DML statement stays in `AUDIT_TRAIL_QUERY`, nothing lands in `AUDIT_TRAIL_VALUES`. Use it on the widest tables where per-column search is not needed. |
| **No row for the table** | Default — every column is indexed. |

The tab keeps the values table's volume in check on wide tables. The full DML statement is always kept in `AUDIT_TRAIL_QUERY` — nothing is lost, whatever the rule set. Pair it with the *Rebuild values* job of the [Audit Trail](../../database/audit-trail.md) screen when you widen the rule set: re-parsing `AUDIT_TRAIL_QUERY` back-fills the newly listed columns for the historical rows.

---

## Tips & best practices

- **Application IDs should be stable.** Once an application is referenced across roles, conflicts, licences and audit trail, renumbering the ID breaks the history.
- **Pick a meaningful name.** The application name surfaces on every export — short, recognisable labels make the deliverables easier to read.
- **Keep the credentials current.** A connection failing on credentials is the most common reason collections go stale.
- **For non-JDE sources** (`DATABASE`, `LDAP`, `WEBLOGIC`, `CUSTOM`), check the *Appplication Type* — the collection steps branch on it.
