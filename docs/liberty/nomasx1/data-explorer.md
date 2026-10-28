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

<svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxe-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxe-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxe-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxe-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="392" rx="14" fill="url(#nxe-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="30" width="190" height="360" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="50" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOMASX-1</text>
  <text x="254" y="74" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Overview</text>
  <text x="254" y="100" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Data Explorer</text>
  <text x="254" y="126" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Reports</text>
  <text x="254" y="152" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Last Refresh</text>
  <text x="254" y="178" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">▸ Security</text>
  <text x="254" y="204" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">▸ Applications</text>
  <text x="254" y="230" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">▸ Database</text>
  <text x="254" y="256" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">▸ Licenses</text>
  <text x="254" y="282" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">▸ Settings</text>
  <text x="254" y="308" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">▸ Jobs</text>
  <text x="450" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Data Explorer</text>
  <rect x="750" y="34" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="760" y="48.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Segregation of duties · nomasx1 · sod ▾</text>
  <rect x="450" y="64" width="191" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="451" y="65" width="91" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="496.5" y="79.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Analyses (11)</text>
  <line x1="543" y1="69" x2="543" y2="83" stroke="#334155" strokeWidth="1"/>
  <text x="592.0" y="79.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Dashboards (1)</text>
  <rect x="450" y="100" width="530" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ANALYSIS</text>
  <text x="860" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AUDIENCE</text>
  <rect x="450" y="132" width="530" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="147.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Users in conflict</text>
  <rect x="860" y="136.0" width="46" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="883.0" y="147.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">shared</text>
  <rect x="450" y="160" width="530" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="175.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Users in conflict by process</text>
  <rect x="860" y="164.0" width="46" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="883.0" y="175.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">shared</text>
  <rect x="450" y="188" width="530" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="203.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Role pairs in conflict</text>
  <rect x="860" y="192.0" width="46" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="883.0" y="203.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">shared</text>
  <rect x="450" y="216" width="530" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="231.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Conflicts per refresh</text>
  <rect x="860" y="220.0" width="46" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="883.0" y="231.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">shared</text>
  <rect x="450" y="244" width="530" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="259.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Privileged conflicts</text>
  <rect x="860" y="248.0" width="46" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="883.0" y="259.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">shared</text>
  <rect x="450" y="290" width="530" height="98" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="308" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Models of the application</text>
  <text x="462" y="328" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">• Security</text>
  <text x="620" y="328" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">users, assignments, roles, profile, directory</text>
  <text x="462" y="348" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">• Segregation of duties</text>
  <text x="620" y="348" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">conflicts, activities, roles, risks, trend</text>
  <text x="462" y="368" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">• Licence compliance</text>
  <text x="620" y="368" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">transactions, components, usage, exposure</text>
  <rect x="10" y="84" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One entry</text>
  <text x="20" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">under Overview, every model</text>
  <line x1="210" y1="101.0" x2="252" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxe-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Model picker</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">switch at any time</text>
  <line x1="1000" y1="47.0" x2="980" y2="45" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxe-arrow)"/>
  <rect x="1000" y="130" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bundled analyses</text>
  <text x="1010" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shared, ready to open</text>
  <line x1="1000" y1="147.0" x2="980" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxe-arrow)"/>
  <rect x="1000" y="320" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three models</text>
  <text x="1010" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one per domain</text>
  <line x1="1000" y1="337.0" x2="980" y2="340" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxe-arrow)"/>
</svg>

---

## Where to find it \{#menu\}

**Data Explorer**, right under **Overview** in the Nomasx-1 menu, opens the explorer with the three Nomasx-1 models in its picker. The picker switches from one model to another at any time; the analyses and dashboards follow the model.

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
