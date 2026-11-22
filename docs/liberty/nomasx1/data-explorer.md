---
title: Data Explorer
description: "Free analysis of the Nomasx-1 data in the Data Explorer: three models — Security, Segregation of duties, Licence compliance — each with its ready-made shared analyses and dashboard."
keywords: [Nomasx-1, Data Explorer, analysis, pivot, security, users, roles, segregation of duties, SoD, conflicts, licence compliance, financial exposure, dashboard]
---

# Data Explorer

The **Data Explorer** lets compliance and licence teams analyse the Nomasx-1 data on their own, without a new screen: rows, measures, filters and a period picked from a list of fields, shown as a table, a pivot, a chart or a KPI, then saved, shared, gathered into a dashboard and exported to Excel or PDF. It reads the data collected from **every connected application**, under the same rights as the screens.

How the explorer works — fields, shelves, views, drill, calculated fields — is described in the [Liberty Next documentation](../framework/explorer/analysis.md). This page lists what Nomasx-1 ships.

---

## At a glance

<svg viewBox="0 0 1320 458" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxexp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxexp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxexp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxexp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="418" rx="14" fill="url(#nxexp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">◎</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Data Explorer</text>
  <text x="276" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Security — The users of each application, their status and last login…</text>
  <rect x="830" y="38" width="250" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="840" y="53.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">nomasx1 · Security</text>
  <text x="1070" y="53.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="783" y="39" width="37" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="801.5" y="53.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="730" y="39" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="753.5" y="53.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="682" y="39" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="703.0" y="53.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <line x1="220" y1="78" x2="1100" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="92" width="183" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="93" width="87" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="284.5" y="107.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Analyses (11)</text>
  <line x1="329" y1="97" x2="329" y2="111" stroke="#334155" strokeWidth="1"/>
  <text x="376.0" y="107.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Dashboards (1)</text>
  <rect x="433" y="92" width="250" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="443" y="107.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Saved analyses…</text>
  <text x="673" y="107.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="693" y="93" width="82" height="22" rx="5" fill="url(#nxexp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="734.0" y="107.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">☰ Definition</text>
  <rect x="240" y="128" width="200" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="136" width="184" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="149.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">⌕ Search fields…</text>
  <text x="252" y="174" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ User</text>
  <rect x="400" y="165" width="33" height="13" rx="6.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="416.5" y="174.7" fill="#94a3b8" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="266" y="192" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">Application ID</text>
  <text x="432" y="192" fill="#64748b" fontSize="7" textAnchor="end" fontFamily="ui-monospace, monospace">USR_APPS_ID</text>
  <text x="266" y="209" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">User ID</text>
  <text x="432" y="209" fill="#64748b" fontSize="7" textAnchor="end" fontFamily="ui-monospace, monospace">USR_ID</text>
  <text x="266" y="226" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">User Name</text>
  <text x="432" y="226" fill="#64748b" fontSize="7" textAnchor="end" fontFamily="ui-monospace, monospace">USR_NAME</text>
  <text x="266" y="243" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">Status</text>
  <text x="432" y="243" fill="#64748b" fontSize="7" textAnchor="end" fontFamily="ui-monospace, monospace">USR_STATUS</text>
  <text x="266" y="260" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">Login Date</text>
  <text x="432" y="260" fill="#64748b" fontSize="7" textAnchor="end" fontFamily="ui-monospace, monospace">USR_DT_LOGIN</text>
  <text x="266" y="277" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">Last Usage</text>
  <text x="432" y="277" fill="#64748b" fontSize="7" textAnchor="end" fontFamily="ui-monospace, monospace">LAST_USAGE</text>
  <text x="252" y="304" fill="#e2e8f0" fontSize="8.6" fontWeight="700" fontFamily="system-ui, sans-serif">› Profile</text>
  <rect x="400" y="295" width="33" height="13" rx="6.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="416.5" y="304.7" fill="#94a3b8" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="252" y="323" fill="#e2e8f0" fontSize="8.6" fontWeight="700" fontFamily="system-ui, sans-serif">› Application</text>
  <rect x="400" y="314" width="33" height="13" rx="6.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="416.5" y="323.7" fill="#94a3b8" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="252" y="342" fill="#e2e8f0" fontSize="8.6" fontWeight="700" fontFamily="system-ui, sans-serif">› Role assignment</text>
  <rect x="400" y="333" width="33" height="13" rx="6.5" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="416.5" y="342.7" fill="#fb923c" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..n</text>
  <text x="252" y="361" fill="#e2e8f0" fontSize="8.6" fontWeight="700" fontFamily="system-ui, sans-serif">› Role</text>
  <rect x="400" y="352" width="33" height="13" rx="6.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="416.5" y="361.7" fill="#94a3b8" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="252" y="380" fill="#e2e8f0" fontSize="8.6" fontWeight="700" fontFamily="system-ui, sans-serif">› Directory (LDAP)</text>
  <rect x="400" y="371" width="33" height="13" rx="6.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="416.5" y="380.7" fill="#94a3b8" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="252" y="416" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">+ New calculated field</text>
  <rect x="450" y="128" width="630" height="28" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="145.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VIEW</text>
  <rect x="540" y="132" width="120" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="550" y="145.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">user  User</text>
  <text x="650" y="145.5" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="670" y="132" width="168" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="671" y="133" width="26" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="684.0" y="145.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <line x1="698" y1="137" x2="698" y2="147" stroke="#334155" strokeWidth="1"/>
  <text x="712.0" y="145.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <line x1="726" y1="137" x2="726" y2="147" stroke="#334155" strokeWidth="1"/>
  <text x="740.0" y="145.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥</text>
  <line x1="754" y1="137" x2="754" y2="147" stroke="#334155" strokeWidth="1"/>
  <text x="768.0" y="145.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">∿</text>
  <line x1="782" y1="137" x2="782" y2="147" stroke="#334155" strokeWidth="1"/>
  <text x="796.0" y="145.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">◔</text>
  <line x1="810" y1="137" x2="810" y2="147" stroke="#334155" strokeWidth="1"/>
  <text x="824.0" y="145.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">◠</text>
  <text x="950" y="145.5" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Top</text>
  <rect x="972" y="132" width="46" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="982" y="145.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">1000</text>
  <rect x="1024" y="132" width="48" height="20" rx="5" fill="url(#nxexp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1048.0" y="145.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="450" y="162" width="630" height="28" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="179.5" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PERIOD</text>
  <rect x="540" y="166" width="170" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="550" y="179.5" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">user.USR_DT_LOGIN  Login Date</text>
  <text x="700" y="179.5" fill="#94a3b8" fontSize="8.3" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="718" y="166" width="100" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="728" y="179.5" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">▣ All dates</text>
  <text x="808" y="179.5" fill="#94a3b8" fontSize="8.3" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="450" y="196" width="630" height="28" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="213.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ROWS</text>
  <text x="540" y="213.5" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Click or drop a field to group by it.</text>
  <rect x="450" y="230" width="630" height="28" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="247.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MEASURES</text>
  <text x="540" y="247.5" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Click or drop a measure; “+” counts the rows.</text>
  <rect x="450" y="264" width="630" height="28" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="281.5" fill="#fb923c" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FILTERS</text>
  <text x="540" y="281.5" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Use the funnel on a field, or drop one here.</text>
  <rect x="450" y="298" width="630" height="130" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="316" fill="#cbd5e1" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">TABLE</text>
  <rect x="460" y="326" width="610" height="92" rx="6" fill="none" stroke="#334155" strokeDasharray="4 4"/>
  <text x="765.0" y="376" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Add a field from the pane on the left to start.</text>
  <rect x="433" y="120" width="300" height="144" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="445" y="136" fill="#4a9eff" fontSize="8.6" fontFamily="system-ui, sans-serif">New analysis</text>
  <text x="445" y="156" fill="#e2e8f0" fontSize="8.4" fontFamily="ui-monospace, monospace">users_count</text>
  <text x="510.288" y="156" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">security · Users</text>
  <text x="445" y="176" fill="#e2e8f0" fontSize="8.4" fontFamily="ui-monospace, monospace">users_by_status</text>
  <text x="531.12" y="176" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">security · Users by status</text>
  <text x="445" y="196" fill="#e2e8f0" fontSize="8.4" fontFamily="ui-monospace, monospace">users_by_application</text>
  <text x="557.16" y="196" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">security · Users by application</text>
  <text x="445" y="216" fill="#e2e8f0" fontSize="8.4" fontFamily="ui-monospace, monospace">logins_by_month</text>
  <text x="531.12" y="216" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">security · Last logins by month</text>
  <text x="445" y="236" fill="#e2e8f0" fontSize="8.4" fontFamily="ui-monospace, monospace">technical_generic</text>
  <text x="541.5360000000001" y="236" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">security · Technical and generic…</text>
  <text x="445" y="256" fill="#e2e8f0" fontSize="8.4" fontFamily="ui-monospace, monospace">users_per_role</text>
  <text x="525.912" y="256" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">security · Users per role</text>
  <rect x="1120" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Model picker</text>
  <text x="1130" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nomasx1 · Security, SoD, Licences</text>
  <line x1="1120" y1="47.0" x2="1030" y2="62" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxexp-arrow)"/>
  <rect x="20" y="92" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Analyses · Dashboards</text>
  <text x="30" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the shipped ones of the model</text>
  <line x1="200" y1="109.0" x2="240" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxexp-arrow)"/>
  <rect x="1120" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Saved analyses</text>
  <text x="1130" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pick one to open it</text>
  <line x1="1120" y1="147.0" x2="733" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxexp-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fields of the model</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">user, profile, roles, directory</text>
  <line x1="200" y1="267.0" x2="240" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxexp-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Shelves</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">view, period, rows, measures, filters</text>
  <line x1="1120" y1="317.0" x2="1070" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxexp-arrow)"/>
  <rect x="1120" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Result</text>
  <text x="1130" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">table, pivot, chart or KPI</text>
  <line x1="1120" y1="417.0" x2="1070" y2="368" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxexp-arrow)"/>
</svg>

---

## Where to find it \{#menu\}

**Data Explorer**, in the Nomasx-1 menu right after the three dashboards, opens the explorer on the *nomasx1 · Security* model. The model picker, top right, lists every model the user may open, grouped by application: the three Nomasx-1 ones are *nomasx1 · Security*, *nomasx1 · Segregation of duties* and *nomasx1 · Licence compliance*. It switches from one model to another at any time; the analyses and dashboards follow the model.

**Analyses** and **Dashboards** give the number of analyses and dashboards of the model; the **Saved analyses…** list opens one of them, each shown with its name and its label. **Definition** shows the shelves — view, period, rows, measures, filters — and the field pane on the left lists the fields of the model, entity by entity.

---

## Security \{#security\}

The users of each application, their status and last login, their role assignments, their profile (company, business unit, country, category codes) and their directory entry (department, title, manager), with the application and the roles around them.

**Analyses**: *Users* (with the technical and generic accounts), *Users by status*, *Users by application*, *Users by company*, *Users by country*, *Users by department*, *Technical and generic accounts*, *Last logins by month* — the older the month, the more dormant the accounts —, *Accounts created by month*, *Users with the most roles*, *Users per role*.

**Dashboard** *Security overview*: users by status, application, company and department; the last logins; the roles with the most users.

---

## Segregation of duties \{#sod\}

Every conflict found by the [SoD matrix](./settings/sod/matrix.md): the user, the two activities, the two roles that grant them, the process and the risk — and the summary of each refresh, for the trend.

**Analyses**: *Users in conflict*, *Users in conflict by process*, *Users in conflict by risk level*, *Conflicts by risk*, *Privileged conflicts*, *Users with the most conflicts*, *Role pairs in conflict*, *Activity pairs in conflict*, *Users in conflict by company*, *Conflicts per refresh*, *Conflicts per refresh and process* — one column per process.

**Dashboard** *SoD overview*: users in conflict by process, risk level and company; the role pairs; the trend across refreshes.

---

## Licence compliance \{#licenses\}

The transactions of each user per table and day, the chain object → system code → licence component, the usage against the subscribed quantities, the financial exposure, and the employees per extraction date.

**Analyses**: *Financial exposure*, *Financial exposure by component* (price, support and total), *Usage vs subscribed by component*, *Compliance gap by component* — negative means more users than subscribed —, *Transactions by month*, *Transacting users by component* and *by company* — pick the period to apply a 90-day rule —, *Most used tables*, *Employees per extraction*.

**Dashboard** *Licence overview*: the financial exposure, the usage against the subscription per component, the transaction trend and the transacting users.

:::info[JDE-specific]
The transactions and the object → system code → licence component chain come from the JD Edwards EnterpriseOne usage collection. For another source, the *Licence compliance* model holds what that source's collection provides.
:::

---

## Shipped analyses \{#bundled\}

The analyses and dashboards above are **shared**: every user who may open the model sees them. They are updated with new versions of Nomasx-1, until someone saves changes to one — the local version is then kept. To adapt one without touching it, open it and use **Save as**.

---

## Who sees what \{#access\}

- A model is offered to the holders of a role that grants it (**Data Explorer** in the role's *Beyond the menus* rules) — see [Roles & permissions](../framework/build/secure/roles-and-permissions.md#access).
- The row-level scope of the user's roles applies inside every analysis: a user limited to one application or company sees only its rows, totals included.

---

## Related

- [Overview — Audit synthesis](./audit-synthesis.md) — the synthesis page.
- [Saved analyses and dashboards](../framework/explorer/saved-and-dashboards.md) — saving, sharing, exporting.
