---
title: JD Edwards
description: "Nomasx-1 JD Edwards settings of each connected application — where the JDE E1 tables are read (schemas and database links), which menus build the security, the user defined objects libraries and the Object Usage Tracking purge."
keywords: [Nomasx-1, settings, JD Edwards, schemas, database link, E1 pages, composite pages, user defined objects, UDO, Object Usage Tracking]
---

# JD Edwards

The **JD Edwards** screen (*Settings - JD Edwards*) holds, for each connected JD Edwards EnterpriseOne application, where the collection reads the JDE tables and what it reads. One line per application. Open it from **Settings → Global → JD Edwards**.

The same fields are on the **JD Edwards** tab of [Applications](./applications.md); this screen shows every application side by side.

---

## At a glance

<svg viewBox="0 0 1320 366" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sjd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sjd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sjd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sjd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="286" rx="14" fill="url(#sjd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings - JD Edwards</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="94" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="233" y="100" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="113.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">(null if blank)</text>
  <text x="233" y="142" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">2 rows · 12 ms</text>
  <rect x="989" y="130" width="98" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="990" y="131" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1013.5" y="143.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="1038" y1="135" x2="1038" y2="145" stroke="#334155" strokeWidth="1"/>
  <text x="1062.5" y="143.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="233" y="158" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="269.0" y="172.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add row</text>
  <rect x="311" y="158" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="352.5" y="172.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Bulk edit</text>
  <rect x="400" y="158" width="128" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="410" y="172.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="534" y="158" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="559.0" y="172.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="596" y="158" width="117" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="172.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Max rows  default</text>
  <rect x="719" y="158" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="749.5" y="172.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Views</text>
  <rect x="786" y="158" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="822.0" y="172.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filters</text>
  <rect x="864" y="158" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="894.5" y="172.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Group</text>
  <rect x="931" y="158" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="967.0" y="172.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Columns</text>
  <rect x="1009" y="158" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1048.0" y="172.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Export ▾</text>
  <rect x="233" y="190" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="349" y="205.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (ID)</text>
  <text x="363" y="205.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="463" y="205.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">JDE SY</text>
  <text x="533" y="205.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">JDE DTA</text>
  <text x="613" y="205.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">JDE CTL</text>
  <text x="693" y="205.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">JDE SVM</text>
  <text x="763" y="205.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">JDE CO</text>
  <text x="833" y="205.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">JDE OL</text>
  <text x="903" y="205.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">F00950</text>
  <rect x="233" y="216" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="349" y="230.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="363" y="230.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="463" y="230.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SY920</text>
  <text x="533" y="230.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="613" y="230.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODCTL</text>
  <text x="693" y="230.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SVM920</text>
  <text x="763" y="230.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PD920</text>
  <text x="833" y="230.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">OL920</text>
  <text x="903" y="230.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SY920</text>
  <rect x="233" y="238" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="349" y="252.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="363" y="252.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-TEST</text>
  <text x="463" y="252.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SY920</text>
  <text x="533" y="252.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">TESTDTA</text>
  <text x="613" y="252.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">TESTCTL</text>
  <text x="693" y="252.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SVM920</text>
  <text x="763" y="252.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PY920</text>
  <text x="833" y="252.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">OL920</text>
  <text x="903" y="252.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SY920</text>
  <text x="233" y="284" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="272" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="285.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="285" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–2 of 2</text>
  <text x="1087" y="285" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="215.0" y="322" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="337" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Schemas</text>
  <text x="225.0" y="350" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">where the JDE tables are read</text>
  <line x1="435.0" y1="322" x2="541" y2="261.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjd-arrow)"/>
  <rect x="665.0" y="322" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="337" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">F00950</text>
  <text x="675.0" y="350" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">schema of the security workbench</text>
  <line x1="885.0" y1="322" x2="911" y2="261.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjd-arrow)"/>
  <rect x="12" y="93" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="108" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application ID</text>
  <text x="22" y="121" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">blank = every application</text>
  <line x1="197" y1="110.0" x2="305" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjd-arrow)"/>
  <rect x="12" y="152" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="167" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add row</text>
  <text x="22" y="180" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">settings for one application</text>
  <line x1="197" y1="169.0" x2="263" y2="169" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjd-arrow)"/>
  <rect x="12" y="232.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="247.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click a row</text>
  <text x="22" y="260.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the edit dialog</text>
  <line x1="197" y1="249.0" x2="515" y2="249.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjd-arrow)"/>
  <rect x="1119" y="163" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="178" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Columns</text>
  <text x="1129" y="191" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">DB links, flags, retention</text>
  <line x1="1119" y1="180.0" x2="967.0" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjd-arrow)"/>
</svg>

The **Application ID** field above the grid narrows it to one application; blank, it shows them all.

---

## Edit dialog \{#edit-dialog\}

Click **Add row** to give an application its JD Edwards settings, or click a row to open them. The dialog, **Edit · JD Edwards Settings**, is one form in four columns, with **Delete**, **Duplicate**, **Cancel** and **Save**.

<svg viewBox="0 0 1320 552" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sjdd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sjdd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sjdd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sjdd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="502" rx="14" fill="url(#sjdd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="235" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Edit · JD Edwards Settings</text>
  <rect x="1061" y="36" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1073.0" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <line x1="215" y1="68" x2="1105" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="235.0" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="235.0" y="98" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="112.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">1  JDE-PROD</text>
  <text x="427.0" y="113" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="235.0" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE DTA</text>
  <rect x="235.0" y="144" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="158.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">PRODDTA</text>
  <text x="451.0" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_DTA_DBLINK</text>
  <rect x="451.0" y="144" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="158.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE CTL</text>
  <rect x="667.0" y="144" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="158.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">PRODCTL</text>
  <text x="883.0" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_CTL_DBLINK</text>
  <rect x="883.0" y="144" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="158.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="235.0" y="184" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE SY</text>
  <rect x="235.0" y="190" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="204.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SY920</text>
  <text x="451.0" y="184" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_SY_DBLINK</text>
  <rect x="451.0" y="190" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="204.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="184" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE SVM</text>
  <rect x="667.0" y="190" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="204.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SVM920</text>
  <text x="883.0" y="184" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_SVM_DBLINK</text>
  <rect x="883.0" y="190" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="204.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="235.0" y="230" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE CO</text>
  <rect x="235.0" y="236" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="250.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">PD920</text>
  <text x="451.0" y="230" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_CO_DBLINK</text>
  <rect x="451.0" y="236" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="250.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="230" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE OL</text>
  <rect x="667.0" y="236" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="250.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">OL920</text>
  <text x="883.0" y="230" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_OL_DBLINK</text>
  <rect x="883.0" y="236" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="250.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="235.0" y="276" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">F00950</text>
  <rect x="235.0" y="282" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="296.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SY920</text>
  <text x="451.0" y="276" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_F00950_DBLINK</text>
  <rect x="451.0" y="282" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="296.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="276" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_UDO_SEC</text>
  <rect x="667.0" y="282" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="296.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SY920</text>
  <text x="883.0" y="276" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_UDO_SEC_DBLINK</text>
  <rect x="883.0" y="282" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="893.0" y="296.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="235.0" y="322" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_UDO_OL</text>
  <rect x="235.0" y="328" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="342.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">OL920</text>
  <text x="451.0" y="322" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE_UDO_OL_DBLINK</text>
  <rect x="451.0" y="328" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="342.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="667.0" y="322" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THICK LOB READ (Y/N)</text>
  <rect x="667.0" y="331" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="684.0" y="340" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="235.0" y="368" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STANDARD MENU (Y/N)</text>
  <rect x="235.0" y="377" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M237.5,382.5 L239.8,384.8 L243.8,380" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="252.0" y="386" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">enabled</text>
  <text x="451.0" y="368" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">E1 PAGES (Y/N)</text>
  <rect x="451.0" y="377" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M453.5,382.5 L455.8,384.8 L459.8,380" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="468.0" y="386" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">enabled</text>
  <text x="667.0" y="368" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">E1 COMPOSITE (Y/N)</text>
  <rect x="667.0" y="377" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M669.5,382.5 L671.8,384.8 L675.8,380" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="684.0" y="386" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">enabled</text>
  <text x="235.0" y="414" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PURGE OUT (Y/N)</text>
  <rect x="235.0" y="423" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M237.5,428.5 L239.8,430.8 L243.8,426" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="252.0" y="432" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">enabled</text>
  <text x="451.0" y="414" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUT RETENTION DAYS</text>
  <rect x="451.0" y="420" width="202.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="461.0" y="434.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">90</text>
  <line x1="215" y1="468" x2="1105" y2="468" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1028" y="482" width="57" height="24" rx="5" fill="url(#sjdd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1056.5" y="497.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▣ Save</text>
  <rect x="952" y="482" width="68" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.0" y="497.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="859" y="482" width="85" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="901.5" y="497.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Duplicate</text>
  <rect x="794" y="482" width="57" height="24" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="822.5" y="497.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="12" y="92" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application ID</text>
  <text x="22" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read-only once saved</text>
  <line x1="197" y1="109.0" x2="233.0" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjdd-arrow)"/>
  <rect x="12" y="138" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="153" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Schemas</text>
  <text x="22" y="166" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">data, control, system, server map…</text>
  <line x1="197" y1="155.0" x2="233.0" y2="155" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjdd-arrow)"/>
  <rect x="12" y="322" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="337" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">UDO libraries</text>
  <text x="22" y="350" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">needed for the user defined objects</text>
  <line x1="197" y1="339.0" x2="233.0" y2="339" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjdd-arrow)"/>
  <rect x="12" y="368" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="383" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Menus to read</text>
  <text x="22" y="396" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">standard, E1 pages, composite</text>
  <line x1="197" y1="385.0" x2="233.0" y2="385" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjdd-arrow)"/>
  <rect x="1119" y="138" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="153" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">…_DBLINK</text>
  <text x="1129" y="166" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">database link per schema</text>
  <line x1="1119" y1="155.0" x2="1087.0" y2="155" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjdd-arrow)"/>
  <rect x="1119" y="322" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="337" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Thick LOB read</text>
  <text x="1129" y="350" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">JDE reached through a DB link</text>
  <line x1="1119" y1="339.0" x2="871.0" y2="339" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjdd-arrow)"/>
  <rect x="1119" y="414" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="429" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Purge OUT · retention</text>
  <text x="1129" y="442" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">days of usage kept</text>
  <line x1="1119" y1="431.0" x2="655.0" y2="431" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjdd-arrow)"/>
  <rect x="1119" y="489" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="504" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="1129" y="517" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">taken at the next collection</text>
  <line x1="1119" y1="506.0" x2="1056.5" y2="506" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sjdd-arrow)"/>
</svg>

| Field | What to enter |
|---|---|
| **Application ID** | The application. Read-only once saved. |
| **JDE DTA** | Schema of the business data tables (F0101, F4211…). |
| **JDE CTL** | Schema of the control tables (F0005…). |
| **JDE SY** | Schema of the system tables (security F00950, users F0092…). |
| **JDE SVM** | Schema of the server map tables. |
| **JDE CO** | Schema of the central objects — the specifications read by the cross reference. |
| **JDE OL** | Schema of the Object Librarian (F9860, F9861) — the objects catalogue and the menus. |
| **F00950** | Schema of the security workbench table, when it is not the system one. |
| **JDE_UDO_SEC** | Schema of the user defined objects' security table (F00950W): its lines are collected as the [UDO security](../../applications/rights/udo-security.md), and the view lines of the composite and E1 pages feed the rights. Blank: skipped. |
| **JDE_UDO_OL** | Schema of the user defined objects' librarian (F9860W, F9861W), read for the composite pages, the E1 pages and the inventory of user defined objects. Blank: those steps do nothing and say so. |
| **…_DBLINK** | Next to each schema: the database link that reaches it. Blank when the JDE tables are in the database Nomasx-1 connects to. |
| **Thick LOB read (Y/N)** | Tick when the JDE tables are reached through a database link: the menus and the specifications (LOB columns) are then read by a short-lived thick-mode process. |
| **Standard Menu (Y/N)** | Read the standard JDE menus for the security build. |
| **E1 Pages (Y/N)** | Read the E1 pages: the applications and reports their code calls or names become access paths. |
| **E1 Composite (Y/N)** | Read the composite pages: what their tiles open, the forms in their panes, the task of a task tile — for a landing page, every task under its menu. |
| **Purge OUT (Y/N)** | Purge old Object Usage Tracking rows in JDE once Nomasx-1 has collected them. |
| **OUT Retention Days** | Days of usage history the purge keeps in JDE. |

:::info[JDE-specific]
The menus read decide the access paths behind *Menus*, *Rights*, the segregation of duties and the licence figures: switching **E1 Pages** or **E1 Composite** on or off changes them at the next security collection. The inventory of user defined objects (queries, grid formats, watchlists, form extensions, composite pages, orchestrations…) and the cross reference built from the central objects are read by Nomajde's screens, from what Nomasx-1 collects with these settings.
:::

---

## Tips & best practices

- **Ask the JDE administrator** for the schema names and the database links — they come from the JDE installation (path code, data sources).
- **Check the library first** on the [UDO libraries](./udo-libraries.md) screen: it lists every library that holds F00950W, F9860W and F9861W, and marks the one with the 9.2 layout to put in **JDE_UDO_SEC** and **JDE_UDO_OL**.
- **Fill JDE_UDO_OL** on any Tools 9.2 installation: much of what a customer changes is a user defined object, and composite pages give access paths the standard menus do not.
- **Tick Thick LOB read only with a database link**; a local install reads the LOB columns directly.
- **Keep the OUT retention longer than the collection interval**, so no usage row is purged before Nomasx-1 has read it.
