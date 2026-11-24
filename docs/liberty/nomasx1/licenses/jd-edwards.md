---
title: JD Edwards
description: "Nomasx-1 Licences → JD Edwards page — the users a licence counts and, per module, who is allowed, who used it and who wrote transactions, with a drill to the objects allowed and the transactions of a module or a user."
keywords: [Nomasx-1, licences, JD Edwards, JDE licence, enabled users, counted users, modules, objects allowed, transactions, Object Usage Tracking]
---

# JD Edwards

The **JD Edwards** page shows, for one JD Edwards EnterpriseOne application, **the users a licence counts** and, **per module, who is allowed, who used it and who wrote transactions**. The figures sit on top; each list behind them is a tab with its own grid. Each module and each user opens the two detail screens — objects allowed and transactions — already filtered.

It is the place to see where the licence headcount comes from before reading the position on **Reviews → Licences**, and to compare it with what the contracts hold on [Subscribed licences](./subscribed-licences.md).

Open it from **Licences → JD Edwards**.

:::info[JDE-specific]
The page lists the applications of type JD Edwards. *Used* comes from Object Usage Tracking and *Wrote transactions* from the user and last-update columns of the JD Edwards tables. For another source, the same questions are answered through a [custom query](../settings/global/custom-queries.md).
:::

---

## At a glance

<svg viewBox="0 0 1320 410" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jdel-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jdel-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jdel-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jdel-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="880" height="372" rx="14" fill="url(#jdel-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">JD Edwards users and modules</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">The users a licence counts, and what each module is used for.</text>
  <rect x="1002" y="36" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1041.0" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Read again</text>
  <rect x="824" y="36" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="834" y="50.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">1 · JDE-PROD ▾</text>
  <text x="808" y="51" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Application</text>
  <line x1="221" y1="78" x2="1099" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="92" width="133.33333333333334" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="113" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">120</text>
  <text x="250.0" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENABLED USERS</text>
  <rect x="381.33333333333337" y="92" width="133.33333333333334" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="391.33333333333337" y="113" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">112</text>
  <text x="391.33333333333337" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COUNTED FOR LICENCES</text>
  <text x="391.33333333333337" y="137" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">technical 5 · linked 3 left out</text>
  <rect x="522.6666666666667" y="92" width="133.33333333333334" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="532.6666666666667" y="113" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">98</text>
  <text x="532.6666666666667" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SIGNED IN (90 DAYS)</text>
  <rect x="664.0" y="92" width="133.33333333333334" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="674.0" y="113" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">4</text>
  <text x="674.0" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NEVER SIGNED IN</text>
  <rect x="805.3333333333334" y="92" width="133.33333333333334" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="815.3333333333334" y="113" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">76</text>
  <text x="815.3333333333334" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WITH TRANSACTIONS</text>
  <text x="815.3333333333334" y="137" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">(90 DAYS)</text>
  <rect x="946.6666666666667" y="92" width="133.33333333333334" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="956.6666666666667" y="113" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="956.6666666666667" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TRANSACTIONS, NOT A USER</text>
  <rect x="240.0" y="160" width="274.6666666666667" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248.0" y="168" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="276.0" y="176" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Users</text>
  <text x="276.0" y="189" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">The enabled users · 120</text>
  <rect x="522.6666666666667" y="160" width="274.6666666666667" height="36" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="530.6666666666667" y="168" width="20" height="20" rx="5" fill="#4ade80" fillOpacity="0.18"/>
  <text x="558.6666666666667" y="176" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Modules</text>
  <text x="558.6666666666667" y="189" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Allowed, used, written · 14</text>
  <rect x="805.3333333333334" y="160" width="274.6666666666667" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="813.3333333333334" y="168" width="20" height="20" rx="5" fill="#fb923c" fillOpacity="0.18"/>
  <text x="841.3333333333334" y="176" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Not declared</text>
  <text x="841.3333333333334" y="189" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Wrote transactions, are no user · 2</text>
  <rect x="240" y="206" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="220.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="1022" y="206" width="58" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1051.0" y="220.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="963" y="206" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="989.5" y="220.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="914" y="206" width="43" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="935.5" y="220.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="855" y="206" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="881.5" y="220.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="806" y="206" width="43" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="827.5" y="220.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="240" y="236" width="840" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODULE</text>
  <text x="430" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CATEGORY</text>
  <text x="610" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ALLOWED</text>
  <text x="680" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USED</text>
  <text x="755" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WROTE TRANSACTIONS</text>
  <text x="917" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DETAIL</text>
  <rect x="240" y="264" width="840" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="279.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Financials</text>
  <text x="430" y="279.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Financial Management</text>
  <text x="610" y="279.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">64</text>
  <text x="680" y="279.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">58</text>
  <text x="755" y="279.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">51</text>
  <text x="917" y="279.5" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">objects allowed · transactions</text>
  <rect x="240" y="292" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="307.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Sales Order Management</text>
  <text x="430" y="307.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Customer Relationship Management</text>
  <text x="610" y="307.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">42</text>
  <text x="680" y="307.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">37</text>
  <text x="755" y="307.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">33</text>
  <text x="917" y="307.5" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">objects allowed · transactions</text>
  <rect x="240" y="320" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="335.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Inventory Management</text>
  <text x="430" y="335.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Manufacturing and Supply…</text>
  <text x="610" y="335.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">39</text>
  <text x="680" y="335.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">30</text>
  <text x="755" y="335.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">22</text>
  <text x="917" y="335.5" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">objects allowed · transactions</text>
  <rect x="240" y="348" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="363.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Procurement and Subcontract…</text>
  <text x="430" y="363.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Manufacturing and Supply…</text>
  <text x="610" y="363.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">27</text>
  <text x="680" y="363.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">19</text>
  <text x="755" y="363.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">15</text>
  <text x="917" y="363.5" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">objects allowed · transactions</text>
  <rect x="20" y="92" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Figures on top</text>
  <text x="30" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">who a licence counts</text>
  <line x1="205" y1="109.0" x2="240" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jdel-arrow)"/>
  <rect x="20" y="168" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="183" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One tab per list</text>
  <text x="30" y="196" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">users · modules · not declared</text>
  <line x1="205" y1="185.0" x2="240" y2="182" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jdel-arrow)"/>
  <rect x="20" y="270" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Per module</text>
  <text x="30" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">allowed, used, wrote</text>
  <line x1="205" y1="287.0" x2="240" y2="290" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jdel-arrow)"/>
  <rect x="1115" y="36" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="51" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application</text>
  <text x="1125" y="64" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each JD Edwards application</text>
  <line x1="1115" y1="53.0" x2="909" y2="58" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jdel-arrow)"/>
  <rect x="1115" y="100" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Transactions, not a user</text>
  <text x="1125" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">wrote, hold no account</text>
  <line x1="1115" y1="117.0" x2="1080" y2="117" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jdel-arrow)"/>
  <rect x="1115" y="290" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Detail</text>
  <text x="1125" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the two detail screens, filtered</text>
  <line x1="1115" y1="307.0" x2="1060" y2="270" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jdel-arrow)"/>
</svg>

---

## The header \{#header\}

| Control | What it does |
|---|---|
| **Application** | The JD Edwards application read, as `id · name`. The page reopens on the last application and the last tab. |
| **Read again** | Reads the application again (*reading…* while it runs). |

The assistant is given the enabled, counted and recently signed-in figures of the application shown.

---

## The figures \{#figures\}

| Figure | What it counts |
|---|---|
| **Enabled users** | The users enabled in the application's security. |
| **Counted for licences** | The enabled users a licence counts: technical accounts and accounts linked to another user are left out — the line below gives how many of each (*technical · linked … left out*). Both flags are set on [Users properties](../settings/security/users-properties.md). |
| **Signed in (N days)** | Counted users who signed in within the application's period (*Signed in within (days) = a user* on [Applications](../settings/global/applications.md), 90 days when empty). |
| **Never signed in** | Counted users with no sign-in date. Orange when there is one. |
| **With transactions (90 days)** | Counted users who wrote a transaction in the last 90 days. |
| **Transactions, not a user** | Accounts that wrote transactions in the last 90 days and are no user of the application. Orange when there is one. |

---

## The tabs \{#tabs\}

Each tab card gives the number of lines of its list. The grid has the usual search, sort, filters, grouping, columns and export.

### Users \{#tab-users\}

The enabled users of the application.

| Column | What it shows |
|---|---|
| **User**, **Name** | The account and its name. |
| **Roles** | How many roles the user holds. |
| **Last sign-in**, **Last transaction**, **Created** | The dates known for the user. |
| **Technical**, **Generic**, **Linked to** | The flags of [Users properties](../settings/security/users-properties.md); *Linked to* names the user the account is linked to. |
| **Detail** | **objects allowed** and **transactions**: the two detail screens, filtered on the application and the user. |

### Modules \{#tab-modules\}

One line per licence module, the most allowed first. A program or a table belongs to a module through its system code ([System code](../settings/jde/system-code.md) and [Reclassification](../settings/jde/reclassification.md)).

| Column | What it counts |
|---|---|
| **Module**, **Category** | The licence component and its family (the *JD Edwards EnterpriseOne* prefix left out). |
| **Allowed** | Enabled users whose security lets them run a program of the module. |
| **Used** | Users who ran a program of the module, as Object Usage Tracking recorded it. |
| **Wrote transactions** | Users who wrote in a table of the module in the last 90 days. |
| **Detail** | **objects allowed** and **transactions**: the two detail screens, filtered on the application and the module. |

### Not declared \{#tab-not-declared\}

Accounts that wrote transactions in the last 90 days and are no user of the application: *User*, *Last transaction*, *Tables* (how many tables it wrote in).

---

## The detail screens \{#details\}

The two screens are also in the menu, under the page: **Licences → JD Edwards - objects allowed** and **Licences → JD Edwards - transactions**. Opened from the menu, they wait for a filter; opened from a line of the page, they arrive filtered.

| Screen | Columns |
|---|---|
| **JD Edwards - objects allowed** | *Application ID*, *Component ID*, *User ID*, *Technical (Y/N)*, *Is Linked (Y/N)*, *Object* — every object the user's security allows, per module. |
| **JD Edwards - transactions** | *Application ID*, *Component ID*, *User ID*, *Object* (the table written), *Last transaction*. |

Both are read-only.

---

## Tips & best practices

- **Read *Counted for licences*, not *Enabled users*.** The gap is the technical and linked accounts; flag them on [Users properties](../settings/security/users-properties.md) so that no licence is counted for them.
- **Allowed far above Used** on a module is security wider than the work: a candidate for a role review rather than for more licences.
- **Clear *Not declared* first.** An account that writes without being a user is either a deleted user whose jobs still run, or a technical account to declare.
- **Never signed in** users are the first accounts to disable before a count.
