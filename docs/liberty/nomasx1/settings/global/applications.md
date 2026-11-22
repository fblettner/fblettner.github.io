---
title: Applications
description: "Nomasx-1 registry of every connected application — identifier, type, the pool it is reached through, and its JD Edwards, LDAP, activity log, audit trail and technical-account settings."
keywords: [Nomasx-1, settings, applications, registry, pool, connection, LDAP directory, technical accounts, source system]
---

# Applications

The **Applications** screen is the central registry of every application Nomasx-1 connects to — JD Edwards EnterpriseOne, a directory, a database or any other connected application. One line per application. Each row holds the identifier displayed across the rest of the product, the type of the source system and the **pool** it is reached through; its tabs carry the JD Edwards, LDAP, activity log, audit trail and technical-account settings of the application.

It is the first screen to populate when bringing a new source system in. Open it from **Settings → Global → Applications**.

---

## At a glance

<svg viewBox="0 0 1200 310" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sapg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sapg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sapg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sapg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="274" rx="14" fill="url(#sapg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings - Applications</text>
  <rect x="415.44000000000005" y="37" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="437.44000000000005" y="48.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="65" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.settings_applications_get</text>
  <line x1="220" y1="78" x2="980" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="92" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="276.0" y="106.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add row</text>
  <rect x="320" y="92" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="356.0" y="106.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Bulk edit</text>
  <rect x="400" y="92" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="410" y="106.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="558" y="92" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="583.0" y="106.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Run</text>
  <rect x="894" y="92" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="927.0" y="106.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="825" y="92" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="855.5" y="106.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="240" y="128" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <text x="360" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION NAME</text>
  <text x="520" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION TYPE</text>
  <text x="670" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATABASE TYPE</text>
  <text x="800" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POOL</text>
  <rect x="240" y="160" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="360" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">JDE-PROD</text>
  <text x="520" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">JD Edwards</text>
  <text x="670" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Oracle</text>
  <text x="800" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">jdedwards</text>
  <rect x="240" y="190" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2</text>
  <text x="360" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">AD-CORP</text>
  <text x="520" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">LDAP</text>
  <text x="670" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">LDAP</text>
  <text x="800" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">ad_directory</text>
  <rect x="240" y="220" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="236.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="360" y="236.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">PAYROLL</text>
  <text x="520" y="236.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Custom Application</text>
  <text x="670" y="236.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Postgres</text>
  <text x="800" y="236.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">payroll</text>
  <rect x="240" y="250" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="266.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">4</text>
  <text x="360" y="266.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">JDE-TEST</text>
  <text x="520" y="266.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">JD Edwards</text>
  <text x="670" y="266.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Oracle</text>
  <text x="800" y="266.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <rect x="20" y="85" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="100" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add row</text>
  <text x="30" y="113" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">declares an application</text>
  <line x1="200" y1="102.0" x2="240" y2="103" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapg-arrow)"/>
  <rect x="20" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application ID</text>
  <text x="30" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">referenced by every screen</text>
  <line x1="200" y1="197.0" x2="260" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapg-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application Type</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">JDE, LDAP, Database, Custom…</text>
  <line x1="200" y1="247.0" x2="542" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapg-arrow)"/>
  <rect x="1000" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Columns</text>
  <text x="1010" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the JDE and LDAP settings</text>
  <line x1="1000" y1="57.0" x2="857" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapg-arrow)"/>
  <rect x="1000" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pool</text>
  <text x="1010" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the connection: a pool</text>
  <line x1="1000" y1="187.0" x2="900" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapg-arrow)"/>
  <rect x="1000" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">No pool</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the collection job's own</text>
  <line x1="1000" y1="267.0" x2="845" y2="270" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapg-arrow)"/>
</svg>

---

## Goal of the view

Maintain the registry that every other screen references:

- **Declare each source system.** One row per application — ID, name, type (`JDE`, `DATABASE`, `LDAP`, `WEBLOGIC`, `CUSTOM`) and database technology (`ORACLE`, `MSSQL`, `DB2`, `POSTGRES`…).
- **Name its connection.** The *Pool* says where the collection reads the application: a database pool, or a directory pool for an LDAP application. The address, the account and the password belong to the pool, set once under **Liberty Next → Administer → Pools**.
- **Establish the application ID** that flows through every other screen — the link between user, role, conflict, licence and audit data.

---

## Columns

The default view shows *Application ID*, *Application Name*, *Application Type*, *Database type* and *Pool*. A column picked from a list shows twice: its code (*Application Type (ID)*) and its label (*Application Type*). **Columns** shows the others.

| Column | What it tells you |
|---|---|
| **Application ID** | The application identifier referenced everywhere else in the product. |
| **Application Name** | Human-readable label. |
| **Application Type** | Kind of source system: `JDE` (JD Edwards), `DATABASE`, `LDAP`, `WEBLOGIC` or `CUSTOM` (Custom Application). Drives the collection steps that apply. |
| **Database type** | Database technology: `ORACLE`, `MSSQL`, `DB2`, `POSTGRES`, `MYSQL`, `MARIADB`, `LDAP`, `GENERIC`. |
| **Pool** | The pool the collection reads this application through, so one installation can reach several environments. Blank: the collection job's own pool. |
| **Host**, **Port**, **Database name**, **User**, **DB-Link**, **Direct connection**, **Country Code** | Hidden. Connection details kept on the row; they are not on the form. Only an LDAP application without a pool still reads its host, port, user and password from them (see [LDAP](#tab-ldap)). |

The JD Edwards and LDAP settings of each application are columns of the same grid as well (*JDE SY*, *JDE DTA*… *LDAP Context*…): they are described with the dialog's tabs below.

---

## Edit dialog

Click **Add row** to declare a new application, or click a row to open it. The dialog, **Edit · Settings - Applications**, opens on the **Application** tab and carries eight tabs. **Task Views**, **Activity Log**, **Audit Trail**, **Audit Columns** and **Technical accounts** only appear on an application that is already saved. The footer carries **Delete**, **Duplicate**, **Cancel** and **Save**.

<svg viewBox="0 0 1200 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sapd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sapd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sapd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sapd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="230" y="20" width="740" height="436" rx="14" fill="url(#sapd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="250" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit · Settings - Applications</text>
  <line x1="230" y1="60" x2="970" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="284.644" y="82" fill="#e2e8f0" fontSize="9.3" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Application</text>
  <line x1="248" y1="90" x2="321.288" y2="90" stroke="#4a9eff" strokeWidth="2"/>
  <text x="359.32800000000003" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">JD Edwards</text>
  <text x="431.4080000000001" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Task Views</text>
  <text x="487.8640000000001" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">LDAP</text>
  <text x="549.5280000000001" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Activity Log</text>
  <text x="629.4200000000001" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Audit Trail</text>
  <text x="711.916" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Audit Columns</text>
  <text x="812.64" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Technical accounts</text>
  <line x1="250" y1="91" x2="950" y2="91" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="112" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="250" y="118" width="700" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="133.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">1</text>
  <text x="250" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION NAME</text>
  <rect x="250" y="164" width="700" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="179.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">AD-CORP</text>
  <text x="250" y="204" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION TYPE</text>
  <rect x="250" y="210" width="700" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="225.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">LDAP   LDAP</text>
  <text x="938" y="226" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▾</text>
  <text x="250" y="250" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATABASE TYPE</text>
  <rect x="250" y="256" width="700" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="271.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">LDAP   LDAP</text>
  <text x="938" y="272" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▾</text>
  <text x="250" y="296" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POOL</text>
  <rect x="250" y="302" width="700" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="317.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">ad_directory</text>
  <text x="938" y="318" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="250" y="328" width="260" height="74" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="331" width="256" height="21" rx="4" fill="rgba(74,158,255,0.18)"/>
  <text x="262" y="346" fill="#4a9eff" fontSize="9.5" fontFamily="ui-monospace, monospace">ad_directory</text>
  <text x="262" y="369" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">jdedwards</text>
  <text x="262" y="392" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">payroll</text>
  <line x1="230" y1="408" x2="970" y2="408" stroke="#1f2937" strokeWidth="1"/>
  <rect x="906" y="420" width="44" height="22" rx="5" fill="url(#sapd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="928.0" y="434.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="843" y="420" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="870.5" y="434.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="763" y="420" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="799.0" y="434.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Duplicate</text>
  <rect x="700" y="420" width="55" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="727.5" y="434.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="20" y="66" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tabs</text>
  <text x="30" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the grids appear once saved</text>
  <line x1="210" y1="83.0" x2="246" y2="80" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapd-arrow)"/>
  <rect x="20" y="196" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application Type</text>
  <text x="30" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">LDAP: a directory</text>
  <line x1="210" y1="213.0" x2="250" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapd-arrow)"/>
  <rect x="20" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pool</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dropdown of the pools</text>
  <line x1="210" y1="317.0" x2="250" y2="315" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapd-arrow)"/>
  <rect x="990" y="24" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1000" y="39" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Technical accounts</text>
  <text x="1000" y="52" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">naming rules, licence audit</text>
  <line x1="990" y1="41.0" x2="865.5120000000001" y2="72" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapd-arrow)"/>
  <rect x="990" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1000" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Directory pool</text>
  <text x="1000" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">kind LDAP directory</text>
  <line x1="990" y1="317.0" x2="510" y2="343" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapd-arrow)"/>
  <rect x="990" y="414" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1000" y="429" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="1000" y="442" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Delete / Duplicate on a saved row</text>
  <line x1="990" y1="431.0" x2="950" y2="431" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapd-arrow)"/>
</svg>

### Tab 1 — Application

| Field | What to enter |
|---|---|
| **Application ID** | Numeric identifier, entered when the application is created and read-only on a saved application. It stays stable across the product. |
| **Application Name** | Friendly label shown on every screen and export. |
| **Application Type** | Kind of source system, picked from a list (`JDE` — JD Edwards…). Drives which collection steps apply. |
| **Database type** | Database technology, picked from a list (`ORACLE` — Oracle…). |
| **Pool** | The application's connection, picked from the pools of the installation. A database pool for a JD Edwards or database application; a directory pool (type *LDAP directory*) for an LDAP application. Blank: the collection job's own pool. |

The pool is the only connection setting of the application: its address, its account and its password are set on the pool, under **Liberty Next → Administer → Pools** — see [Pools](../../../framework/connectors.md#pools). The [reports](../../reports/audit-licences.md) also read from it the system they name (the server and the service name of an Oracle pool, the base of a directory) and print the pool.

### Tab 2 — JD Edwards

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

The tab is saved with the application, **Thick LOB read** included — also on an application created without JD Edwards settings: filling the tab later and saving the application creates them.

### Tab 3 — Task Views

Grid of the JDE task views (the roots of the menu tree, such as *EnterpriseOne Menus*): **Task ID**, **Task Name** and **Collect Security (Y/N)**. Only the task views ticked here are walked by the security build — the rights of the *Menus* and *Rights* screens start from them. **Add row** declares another task view; on a saved line, *Task ID* is read-only.

### Tab 4 — LDAP \{#tab-ldap\}

LDAP / Active Directory scope of the application, read by the LDAP collection.

| Field | What to enter |
|---|---|
| **LDAP Context** | Base DN the search starts from (for example `OU=Users,DC=acme,DC=local`). Blank: the base of the directory pool. |
| **LDAP Filter** | LDAP search filter restricting the entries read. |
| **LDAP Exclude** | Entries to leave out. |

The directory itself — its server, the account and the password the collection binds with — is the application's **Pool** (tab *Application*): a pool of type *LDAP directory*, created under **Liberty Next → Administer → Pools** (`ldap://`, or `ldaps://` for an encrypted connection; see [An LDAP directory](../../../framework/connectors.md#pool-ldap)). When **LDAP Context** is blank, the collection starts from the pool's base DN. An LDAP application that names no pool keeps reading the host, port, user and password stored on its row; naming a pool takes over.

Like the JD Edwards tab, the LDAP tab of an application created without it is saved when it is filled later. The same settings are on their own screen, [LDAP](./ldap.md).

### Tab 5 — Activity Log

Grid of the rules that decide **what the activity collection watches** to feed *Applications → Activity log*. One row per rule; **Add row** widens the scope, deleting a row narrows it.

| Column | What to enter |
|---|---|
| **ACL Type** | What the rule targets: `ROLE`, `SCHEMA`, `TABLE` or `USER`. |
| **ACL Application Type** | Where the name is read: `DATABASE` or `JDEDWARDS`. |
| **Name** | Name of the role, schema, table or user. |
| **ACL Rule** | `INCLUDE`, `EXCLUDE` or `AUDIT`. |

*ACL Type*, *ACL Application Type* and *Name* identify the rule: read-only on a saved line, where only *ACL Rule* changes.

### Tab 6 — Audit Trail

Grid holding **the connection Nomasx-1 uses to read the Oracle archive logs** of the application — one row — read by the collection that feeds *Database → Audit Trail* and *Audit Lookup*.

| Column | What to enter |
|---|---|
| **User ID** / **Password** | Database account allowed to read the archive log views. |
| **Host** / **Port** / **Database** | Where that database is (`1521` on a standard Oracle install). |
| **Last SCN** | *System Change Number* the next extraction resumes from. |
| **Last Timestamp** | Time of the last extraction. |

The line belongs to the application: its *Application ID* is read-only once saved.

### Tab 7 — Audit Columns

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

### Tab 8 — Technical accounts \{#technical-accounts\}

How this application names its technical accounts — batch users, integration and service accounts, the accounts held by IT — so that the [licence audit](../../reports/audit-licences.md) sets them apart from the people. One rule per line; **Add row** adds one.

<svg viewBox="0 0 1200 362" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sapt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sapt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sapt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sapt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="230" y="20" width="740" height="326" rx="14" fill="url(#sapt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="250" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit · Settings - Applications</text>
  <line x1="230" y1="60" x2="970" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="284.644" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Application</text>
  <text x="359.32800000000003" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">JD Edwards</text>
  <text x="431.4080000000001" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Task Views</text>
  <text x="487.8640000000001" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">LDAP</text>
  <text x="549.5280000000001" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Activity Log</text>
  <text x="629.4200000000001" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Audit Trail</text>
  <text x="711.916" y="82" fill="#94a3b8" fontSize="9.3" textAnchor="middle" fontFamily="system-ui, sans-serif">Audit Columns</text>
  <text x="812.64" y="82" fill="#e2e8f0" fontSize="9.3" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Technical accounts</text>
  <line x1="757.768" y1="90" x2="867.5120000000001" y2="90" stroke="#4a9eff" strokeWidth="2"/>
  <line x1="250" y1="91" x2="950" y2="91" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="104" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="286.0" y="118.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add row</text>
  <rect x="330" y="104" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="366.0" y="118.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Bulk edit</text>
  <rect x="410" y="104" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="420" y="118.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="250" y="140" width="700" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="157.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPARED WITH</text>
  <text x="520" y="157.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RULE (&#42; = ANY TEXT)</text>
  <rect x="250" y="172" width="700" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="188.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Account name</text>
  <text x="520" y="188.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BATCH&#42;</text>
  <rect x="250" y="202" width="700" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="218.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Account name</text>
  <text x="520" y="218.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">&#42;INTERFACE&#42;</text>
  <rect x="250" y="232" width="700" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="248.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">User id</text>
  <text x="520" y="248.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">JDE</text>
  <rect x="250" y="262" width="700" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="278.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">User id</text>
  <text x="520" y="278.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">SVC_&#42;</text>
  <line x1="230" y1="298" x2="970" y2="298" stroke="#1f2937" strokeWidth="1"/>
  <rect x="906" y="310" width="44" height="22" rx="5" fill="url(#sapt-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="928.0" y="324.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="843" y="310" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="870.5" y="324.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="763" y="310" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="799.0" y="324.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Duplicate</text>
  <rect x="700" y="310" width="55" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="727.5" y="324.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="20" y="100" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add row</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one rule per line</text>
  <line x1="210" y1="117.0" x2="250" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapt-arrow)"/>
  <rect x="20" y="190" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Compared with</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">account name or user id</text>
  <line x1="210" y1="207.0" x2="270" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapt-arrow)"/>
  <rect x="990" y="160" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1000" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rule</text>
  <text x="1000" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#42; = any text, case ignored</text>
  <line x1="990" y1="177.0" x2="560" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapt-arrow)"/>
  <rect x="990" y="250" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1000" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Licence audit</text>
  <text x="1000" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rules read without user flags</text>
  <line x1="990" y1="267.0" x2="950" y2="290" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapt-arrow)"/>
</svg>

| Column | What to enter |
|---|---|
| **Compared with** | What the rule is compared with: **Account name** (the account's name) or **User id**. |
| **Rule (\* = any text)** | The name or the id to match. `*` stands for any text (`BATCH*`, `*INTERFACE*`, `SVC_*`); any other character is read as written. Upper and lower case are not told apart. |

The report takes the *Technical* flag of [Users properties](../security/users-properties.md) first. While the application has no user property at all, it applies these rules. **With no flag and no rule, no account is counted as technical**: enter the rules once for each application, or set the flags.

---

## Tips & best practices

- **Application IDs should be stable.** Once an application is referenced across roles, conflicts, licences and audit trail, renumbering the ID breaks the history.
- **Pick a meaningful name.** The application name surfaces on every export and report — short, recognisable labels make the deliverables easier to read.
- **One pool per environment.** Credentials are changed on the pool, once, for every application and job that uses it. A connection failing on credentials is the most common reason collections go stale.
- **For an LDAP application, create a directory pool** and pick it here: the pool also allows `ldaps://` for an encrypted connection.
- **Enter the technical-account rules before the first licence audit** — otherwise the batch and service accounts are counted with the people until the user properties are set.
- **For non-JDE sources** (`DATABASE`, `LDAP`, `WEBLOGIC`, `CUSTOM`), check the *Application Type* — the collection steps branch on it. The security of such an application is collected through its own queries: see [Custom Queries](./custom-queries.md).
