---
title: Custom Queries
description: "Nomasx-1 custom queries — an application's own query for the Users, Roles, Assignments, Menus or Rights collection, run on its own pool instead of the built-in one; the way to collect the security of an application that is not JD Edwards."
keywords: [Nomasx-1, settings, custom queries, collection, users, roles, assignments, menus, rights, pool, non-JDE application, segregation of duties]
---

# Custom Queries

The **Custom Queries** screen holds an application's own query for a security collection: *Users*, *Roles*, *Assignments*, *Menus* or *Rights*. When an application has a query for a collection, the collection runs it **instead of the built-in one**, on the pool the row names — or on the application's pool when it names none. One line per *(application, collection)* pair. Open it from **Settings → Global → Custom Queries**.

It is also **what lets an application that is not JD Edwards be collected**: the built-in queries read the JD Edwards EnterpriseOne security tables; any other connected application — a database, a custom application — gives its users, roles and rights through its own queries. An application that is not JD Edwards and has no query of its own for a collection is refused by that collection, which names it in the run's log.

---

## At a glance

<svg viewBox="0 0 1320 310" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="scqg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="scqg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="scqg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="scqg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="274" rx="14" fill="url(#scqg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings - Custom queries</text>
  <rect x="430.0" y="37" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="452.0" y="48.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="65" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.settings_customsql_get</text>
  <line x1="220" y1="78" x2="1100" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="92" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="276.0" y="106.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add row</text>
  <rect x="320" y="92" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="356.0" y="106.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Bulk edit</text>
  <rect x="400" y="92" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="410" y="106.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="558" y="92" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="583.0" y="106.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Run</text>
  <rect x="1014" y="92" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1047.0" y="106.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="945" y="92" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="975.5" y="106.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="240" y="128" width="840" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID (ID)</text>
  <text x="380" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <text x="490" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLLECTION</text>
  <text x="590" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POOL (BLANK = THE APPLICATION'S)</text>
  <text x="840" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER (AUDIT)</text>
  <text x="960" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE (AUDIT)</text>
  <rect x="240" y="160" width="840" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2</text>
  <text x="380" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">PAYROLL</text>
  <text x="490" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Users</text>
  <text x="590" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">payroll</text>
  <text x="840" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">admin</text>
  <text x="960" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-10-14</text>
  <rect x="240" y="190" width="840" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2</text>
  <text x="380" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">PAYROLL</text>
  <text x="490" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Roles</text>
  <text x="590" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">payroll</text>
  <text x="840" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">admin</text>
  <text x="960" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-10-14</text>
  <rect x="240" y="220" width="840" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="236.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2</text>
  <text x="380" y="236.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">PAYROLL</text>
  <text x="490" y="236.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Assignments</text>
  <text x="590" y="236.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="840" y="236.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">admin</text>
  <text x="960" y="236.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-10-14</text>
  <rect x="240" y="250" width="840" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="266.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="380" y="266.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">CRM</text>
  <text x="490" y="266.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Rights</text>
  <text x="590" y="266.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">crm_dwh</text>
  <text x="840" y="266.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">admin</text>
  <text x="960" y="266.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-10-15</text>
  <rect x="20" y="85" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="100" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add row</text>
  <text x="30" y="113" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one query per collection</text>
  <line x1="200" y1="102.0" x2="240" y2="103" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqg-arrow)"/>
  <rect x="20" y="175" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="190" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application</text>
  <text x="30" y="203" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its ID, then its name</text>
  <line x1="200" y1="192.0" x2="260" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqg-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Collection</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Users, Roles, Assignments…</text>
  <line x1="200" y1="267.0" x2="500" y2="240" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqg-arrow)"/>
  <rect x="1120" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Columns</text>
  <text x="1130" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">codes, query</text>
  <line x1="1120" y1="57.0" x2="977" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqg-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pool</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">blank: the application's</text>
  <line x1="1120" y1="137.0" x2="660" y2="188" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqg-arrow)"/>
  <rect x="1120" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Audit</text>
  <text x="1130" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">who changed it, when</text>
  <line x1="1120" y1="257.0" x2="920" y2="240" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqg-arrow)"/>
</svg>

---

## What a query replaces \{#collections\}

| Collection | What the query fills | How |
|---|---|---|
| **Users**, **Roles**, **Assignments** | The users, the roles and the user–role assignments of the application. | The query takes the place of the built-in one in the same collection: the rows it returns are loaded as a new snapshot, the previous one kept in the history. |
| **Menus**, **Rights** | The menus and the effective rights of the application — the final tables the *Applications* screens read. | The built-in collection builds them in several steps from JD Edwards staging tables. A query fills the final table directly: the application's rows are replaced by what it returns, and the built-in steps add nothing for that application. |

What follows from these tables runs on the application whoever filled them: **segregation of duties** reads its rights and its users, so the conflicts, the [Segregation of duties](../../sod-dashboard.md) dashboard and the security report cover it as well.

:::info[JDE-specific]
The licence collections — employees, transactions, Object Usage Tracking — read JD Edwards EnterpriseOne only; a custom query does not replace them.
:::

---

## Writing the query \{#query\}

The query must **return the columns of the target table**, aliased with their names (`USR_ID`, `USR_NAME`… for *Users*) — the easiest way to get them right is to start from what the built-in collection loads. Before it runs, Nomasx-1 fills in:

| In the text | Replaced by |
|---|---|
| `{apps_id}` | The application ID. |
| `{jde_sy}`, `{jde_dta}`, `{jde_ctl}`… and their `{jde_sy_dblink}`… | For a JD Edwards application: the schemas and database links of its [JD Edwards](./applications.md) tab. |
| `:ukid` | Bound to the snapshot number of the collection — write it where the target table expects its `…_UKID` column. Left out, nothing is bound. |

Any other brace is left as written — a JSON literal or a regular expression in the query is not touched. A trailing `;` is ignored.

---

## Columns

| Column | What it tells you |
|---|---|
| **Application ID** | The application the query is for. It shows twice: its ID (*Application ID (ID)*) and its name. |
| **Collection** | The collection the query replaces: *Users*, *Roles*, *Assignments*, *Menus* or *Rights*. It shows twice: its code (*Collection (ID)*: `SECURITY_USERS`…) and its label. |
| **Pool (blank = the application's)** | The pool the query runs on. Blank: the application's pool, set on [Applications](./applications.md). |
| **User (Audit)** / **Date (Audit)** | Who saved the query last, and when. |

**Columns** also shows the query and the pool's code.

---

## Edit dialog

Click **Add row** to declare a query, or click a row to open it. The dialog — **New · Settings - Custom queries**, or **Edit · Settings - Custom queries** on a saved row — has three tabs: **Properties**, **Pool** and **Query**. The footer carries **Cancel** and **Save** — plus **Delete** and **Duplicate** on a saved row.

<svg viewBox="0 0 1200 322" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="scqd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="scqd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="scqd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="scqd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="230" y="20" width="740" height="288" rx="14" fill="url(#scqd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="250" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">New · Settings - Custom queries</text>
  <line x1="230" y1="60" x2="970" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="282.6" y="82" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Properties</text>
  <text x="339.84" y="82" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Pool</text>
  <text x="383.78000000000003" y="82" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Query</text>
  <line x1="362.48" y1="90" x2="405.08000000000004" y2="90" stroke="#4a9eff" strokeWidth="2"/>
  <line x1="250" y1="91" x2="950" y2="91" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="112" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUERY</text>
  <rect x="250" y="118" width="700" height="132" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="136" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">SELECT &#123;apps_id&#125; AS USR_APPS_ID,</text>
  <text x="308" y="152" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">u.login AS USR_ID,</text>
  <text x="308" y="168" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">u.full_name AS USR_NAME,</text>
  <text x="308" y="184" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">u.status AS USR_STATUS,</text>
  <text x="308" y="200" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">…</text>
  <text x="308" y="216" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">:ukid AS USR_UKID</text>
  <text x="262" y="232" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">FROM app_users u</text>
  <line x1="230" y1="262" x2="970" y2="262" stroke="#1f2937" strokeWidth="1"/>
  <rect x="906" y="272" width="44" height="22" rx="5" fill="url(#scqd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="928.0" y="286.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="843" y="272" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="870.5" y="286.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="20" y="24" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="39" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Properties</text>
  <text x="30" y="52" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application + collection</text>
  <line x1="210" y1="41.0" x2="282.6" y2="70" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqd-arrow)"/>
  <rect x="20" y="130" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">&#123;apps_id&#125;</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">filled with the application ID</text>
  <line x1="210" y1="147.0" x2="260" y2="133" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqd-arrow)"/>
  <rect x="20" y="210" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">:ukid</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">snapshot number, Users/Roles…</text>
  <line x1="210" y1="227.0" x2="306" y2="216" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqd-arrow)"/>
  <rect x="990" y="24" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1000" y="39" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pool</text>
  <text x="1000" y="52" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">blank = the application's</text>
  <line x1="990" y1="41.0" x2="339.84" y2="70" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqd-arrow)"/>
  <rect x="990" y="150" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1000" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Target table's columns</text>
  <text x="1000" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">aliased as the target expects</text>
  <line x1="990" y1="167.0" x2="530" y2="152" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqd-arrow)"/>
  <rect x="990" y="266" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1000" y="281" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="1000" y="294" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read at the next collection</text>
  <line x1="990" y1="283.0" x2="950" y2="283" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqd-arrow)"/>
</svg>

### Tab 1 — Properties

| Field | What to enter |
|---|---|
| **Application ID** | One of the declared applications. The query applies to this one only. |
| **Collection** | The collection replaced: *Users*, *Roles*, *Assignments*, *Menus* or *Rights*. |
| **User (Audit)** / **Date (Audit)** | Filled in by Nomasx-1 on save; read-only. |

*Application ID* and *Collection* name the line: they are entered when the line is created and read-only on a saved line — its pool and its query change, and the change is saved. To move a query to another application or collection, duplicate the line (**Duplicate**) and delete the old one.

### Tab 2 — Pool

| Field | What to enter |
|---|---|
| **Pool (blank = the application's)** | A dropdown of the installation's pools. Pick one when the query reads another database than the application's — a data warehouse, a copy of the security tables; leave blank otherwise. The pool holds the account the query runs with. |

### Tab 3 — Query

| Field | What to enter |
|---|---|
| **Query** | The `SELECT` to run instead of the built-in query of the collection picked on *Properties*. A blank query is ignored: the built-in one runs. |

---

## Tips & best practices

- **Run the query on its pool first** with the application ID filled in — the columns, their names and their types must match the target table.
- **One collection at a time.** Start with *Users*, check the [Users](../../security/users.md) screen after a collection, then add *Roles* and *Assignments*.
- **Mind *Menus* and *Rights*.** Their query fills the final table: the rows it returns are what the rights, the conflicts and the reports see for that application.
- **Delete the row to go back to the built-in query** — or empty the query.
