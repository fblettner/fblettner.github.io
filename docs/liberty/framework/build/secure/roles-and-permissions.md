---
title: Roles and permissions
description: "Liberty Next roles: what a role grants, edited on the application's own menu tree (inherit / allow / deny per folder or entry, sidebar preview), the rules beyond the menus, and the data scope that restricts which rows a role sees — by company, by any dictionary item, from a user attribute."
keywords: [Liberty Next, roles, permissions, Settings Access, menu tree, allow, deny, data scope, row-level security, dd_prefix, user attributes, "#USER", auth.toml]
---

# Roles and permissions

A role answers two questions: **what** its holders may open (menus, queries, dashboards, the assistant) and **which rows** they see. Users receive roles; a user with several roles gets the sum of them.

Roles are edited in **Liberty Next → Administer → Access → Roles**. The role list is on the left; the selected role opens in a panel with two tabs: **Access** and **Data scope**.

:::info[JD Edwards roles]
This page is about the roles of Liberty Next itself. JD Edwards EnterpriseOne roles and their security are managed in Nomajde.
:::

---

## At a glance

<svg viewBox="0 0 1200 510" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rol-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rol-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rol-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rol-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="10" width="790" height="490" rx="14" fill="url(#rol-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="230" y="20" width="230" height="470" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="242" y="32" width="78" height="22" rx="5" fill="url(#rol-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="281.0" y="46.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add role</text>
  <rect x="240" y="70" width="210" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="88" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">admin</text>
  <text x="250" y="103" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Administrators</text>
  <text x="250" y="118" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">3 rule(s)</text>
  <rect x="370" y="78" width="73" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="406.5" y="90.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Full access</text>
  <rect x="240" y="136" width="210" height="56" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="250" y="154" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">subsidiary</text>
  <text x="250" y="169" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">One company only</text>
  <text x="250" y="184" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">12 rule(s)</text>
  <rect x="240" y="202" width="210" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="220" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">reader</text>
  <text x="250" y="235" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Read-only users</text>
  <text x="250" y="250" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">5 rule(s)</text>
  <rect x="470" y="20" width="520" height="470" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="484" y="42" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">🛡 [roles.subsidiary]</text>
  <text x="976" y="42" fill="#fb923c" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">unsaved changes</text>
  <rect x="484" y="54" width="181" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="485" y="55" width="66" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="518.0" y="69.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🔑 Access</text>
  <line x1="552" y1="59" x2="552" y2="73" stroke="#334155" strokeWidth="1"/>
  <text x="608.5" y="69.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗄 Data scope · 1</text>
  <text x="484" y="102" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Role name</text>
  <rect x="484" y="108" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="494" y="122.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">subsidiary</text>
  <text x="650" y="102" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="650" y="108" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="660" y="122.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">One company only</text>
  <text x="484" y="150" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BASELINE</text>
  <rect x="484" y="156" width="159" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="485" y="157" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="521.0" y="171.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">No access</text>
  <line x1="558" y1="161" x2="558" y2="175" stroke="#334155" strokeWidth="1"/>
  <text x="600.5" y="171.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Full access</text>
  <text x="660" y="172" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">nothing, plus what you allow below</text>
  <text x="484" y="204" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MENUS</text>
  <text x="484" y="222" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">sales · 4 of 6 shown</text>
  <rect x="484" y="232" width="492" height="24" rx="4" fill="rgba(50,215,75,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <text x="494" y="248" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">▾ Sales</text>
  <rect x="908" y="235" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="918" y="248" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <rect x="930" y="235" width="20" height="18" rx="4" fill="rgba(50,215,75,0.18)" stroke="#334155" strokeWidth="1"/>
  <text x="940" y="248" fill="#4ade80" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="952" y="235" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="962" y="248" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="484" y="260" width="492" height="24" rx="4" fill="rgba(50,215,75,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <text x="510" y="276" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">Orders</text>
  <text x="640" y="276" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">sql:sales:orders_get</text>
  <text x="810" y="276" fill="#94a3b8" fontSize="8.5" fontStyle="italic" fontFamily="system-ui, sans-serif">inherits: allowed</text>
  <text x="890" y="276" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">👁</text>
  <rect x="908" y="263" width="20" height="18" rx="4" fill="rgba(148,163,184,0.18)" stroke="#334155" strokeWidth="1"/>
  <text x="918" y="276" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <rect x="930" y="263" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="940" y="276" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="952" y="263" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="962" y="276" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="484" y="288" width="492" height="24" rx="4" fill="rgba(50,215,75,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <text x="510" y="304" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">Invoices</text>
  <text x="640" y="304" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">sql:sales:invoices_get</text>
  <text x="810" y="304" fill="#94a3b8" fontSize="8.5" fontStyle="italic" fontFamily="system-ui, sans-serif">inherits: allowed</text>
  <text x="890" y="304" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">👁</text>
  <rect x="908" y="291" width="20" height="18" rx="4" fill="rgba(148,163,184,0.18)" stroke="#334155" strokeWidth="1"/>
  <text x="918" y="304" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <rect x="930" y="291" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="940" y="304" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="952" y="291" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="962" y="304" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="484" y="316" width="492" height="24" rx="4" fill="rgba(248,113,113,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <text x="510" y="332" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">▾ Settings</text>
  <rect x="908" y="319" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="918" y="332" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <rect x="930" y="319" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="940" y="332" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="952" y="319" width="20" height="18" rx="4" fill="rgba(248,113,113,0.18)" stroke="#334155" strokeWidth="1"/>
  <text x="962" y="332" fill="#f87171" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="484" y="344" width="492" height="24" rx="4" fill="rgba(248,113,113,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <text x="526" y="360" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">Price lists</text>
  <text x="640" y="360" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">sql:sales:prices_get</text>
  <text x="810" y="360" fill="#94a3b8" fontSize="8.5" fontStyle="italic" fontFamily="system-ui, sans-serif">inherits: denied</text>
  <text x="890" y="360" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘👁</text>
  <rect x="908" y="347" width="20" height="18" rx="4" fill="rgba(148,163,184,0.18)" stroke="#334155" strokeWidth="1"/>
  <text x="918" y="360" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <rect x="930" y="347" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="940" y="360" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="952" y="347" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="962" y="360" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <text x="484" y="388" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BEYOND THE MENUS</text>
  <rect x="484" y="396" width="98" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="533.0" y="408.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ AI assistant ×</text>
  <rect x="600" y="396" width="159" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="679.5" y="408.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Dashboard sales_overview ×</text>
  <rect x="484" y="422" width="98" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="485" y="423" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="510.0" y="437.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Allow</text>
  <line x1="536" y1="427" x2="536" y2="441" stroke="#334155" strokeWidth="1"/>
  <text x="559.0" y="437.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Deny</text>
  <rect x="600" y="422" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="436.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Query ▾</text>
  <rect x="720" y="422" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="730" y="436.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Pick…</text>
  <rect x="900" y="422" width="38" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="919.0" y="436.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Add</text>
  <rect x="850" y="456" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="877.5" y="470.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="916" y="456" width="44" height="22" rx="5" fill="url(#rol-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="938.0" y="470.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="10" y="60" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Roles</text>
  <text x="20" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Full access tag, rule count</text>
  <line x1="210" y1="77.0" x2="240" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rol-arrow)"/>
  <rect x="10" y="160" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Baseline</text>
  <text x="20" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">start from nothing or everything</text>
  <line x1="210" y1="177.0" x2="484" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rol-arrow)"/>
  <rect x="10" y="260" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A folder cascades</text>
  <text x="20" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its children inherit allow/deny</text>
  <line x1="210" y1="277.0" x2="494" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rol-arrow)"/>
  <rect x="1020" y="130" width="170" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1030" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two tabs</text>
  <text x="1030" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">menus · rows (data scope)</text>
  <line x1="1020" y1="147.0" x2="770" y2="66" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rol-arrow)"/>
  <rect x="1020" y="250" width="170" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1030" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Eye</text>
  <text x="1030" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shown in the sidebar or not</text>
  <line x1="1020" y1="267.0" x2="896" y2="272" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rol-arrow)"/>
  <rect x="1020" y="320" width="170" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1030" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Inherit · Allow · Deny</text>
  <text x="1030" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one control per node</text>
  <line x1="1020" y1="337.0" x2="952" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rol-arrow)"/>
  <rect x="1020" y="420" width="170" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1030" y="435" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Beyond the menus</text>
  <text x="1030" y="448" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">query, endpoint, dashboard, AI</text>
  <line x1="1020" y1="437.0" x2="720" y2="432" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rol-arrow)"/>
</svg>

---

## The Access tab \{#access\}

### Baseline

| Choice | Meaning |
|---|---|
| **No access** | Nothing, plus what you allow below. |
| **Full access** | Everything, minus what you deny below. The role card shows a **Full access** tag. |

### The menu tree

The **Menus** block shows the sidebar of every application, one block per application (`sales · 4 of 6 shown`). Each folder and each entry has a three-state control:

| Control | Effect |
|---|---|
| **Inherit** (–) | The node takes the state of its folder, or the baseline. The row says *inherits: allowed* / *denied* / *no access*. |
| **Allow** (✓) | The node and everything under it are granted. |
| **Deny** (⊘) | The node and everything under it are refused, even if another rule would grant them. |

A folder cascades to its children; a child can override it. An entry shows, in grey, what it runs (`sql:sales:orders_get`, a dashboard…): allowing the entry grants both the menu entry and what it runs. The **eye** on each entry previews the result: green, the entry appears in the holder's sidebar; crossed out, it does not.

Two typical roles:

- *Everything except the Security folder*: **Full access**, then **Deny** on the Security folder.
- *Only the Reports folder*: **No access**, then **Allow** on the Reports folder.

### Beyond the menus

Some rights are not tied to a menu entry. The **Beyond the menus** block adds them as green (allow) or red (deny) chips: pick **Allow** or **Deny**, the type, the item, then **Add**.

| Type | Grants |
|---|---|
| Connector (all queries) | Every query of a connector. |
| Query | One query — for a screen reached from a button or a link rather than from the menu. |
| API endpoint | One endpoint of an API connector. |
| Dashboard | One dashboard. |
| Data Explorer | One explorer model, or every model of an app — see [Data Explorer](../../explorer/overview.md#access). |
| nomaflow | **Follow the jobs** (`nomaflow:view`) — the Jobs, Schedule and Job Runs pages, the runs and their logs; **Create and edit jobs** (`nomaflow:edit`) — create, change, pause and resume jobs; it runs SQL and Python without row scope. See [Nomaflow administration](../../../nomaflow/administration.md#permissions). |
| Job | One Nomaflow job, or **Every job** (`job:*`): its menu item and its page — files, parameters, run, cancel, logs of every run. See [Run a job from an application's menu](../../../nomaflow/jobs/run-from-menu.md#access). |
| AI assistant | The assistant. |
| Pattern (expert) | A permission written by hand, such as `sql:sales:report_*`. |

**Save** writes the role; **Cancel** drops the changes. The role name cannot be changed after creation.

---

## Data scope — which rows \{#data-scope\}

The **Data scope** tab restricts the rows a role sees, on every screen, export, dashboard, report and assistant answer that reads a SQL connector. A role without any rule sees every row.

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="scp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="scp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="scp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="scp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="10" width="770" height="424" rx="14" fill="url(#scp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="244" y="42" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">🛡 [roles.subsidiary]</text>
  <rect x="244" y="54" width="181" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="278.0" y="69.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🔑 Access</text>
  <rect x="313" y="55" width="111" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="368.5" y="69.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🗄 Data scope · 2</text>
  <rect x="244" y="92" width="730" height="30" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="112" fill="#e2e8f0" fontSize="10.5" fontFamily="system-ui, sans-serif">Company (CO) = user.company</text>
  <rect x="790" y="98" width="88" height="18" rx="9.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="834.0" y="110.2" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">deny if absent</text>
  <rect x="890" y="98" width="63" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="921.5" y="110.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">jdedwards</text>
  <rect x="244" y="128" width="730" height="30" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="148" fill="#e2e8f0" fontSize="10.5" fontFamily="system-ui, sans-serif">and   SY not in 00</text>
  <text x="960" y="148" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="244" y="170" width="730" height="250" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="258" y="192" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">New rule</text>
  <rect x="258" y="202" width="193" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="259" y="203" width="106" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="312.0" y="217.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Dictionary item</text>
  <line x1="366" y1="207" x2="366" y2="221" stroke="#334155" strokeWidth="1"/>
  <text x="408.5" y="217.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Column name</text>
  <text x="258" y="246" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Dictionary item</text>
  <rect x="258" y="252" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="268" y="266.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">CO — Company ▾</text>
  <text x="500" y="246" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Connector</text>
  <rect x="500" y="252" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="510" y="266.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Any connector ▾</text>
  <rect x="258" y="290" width="255" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="259" y="291" width="89" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="303.5" y="305.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Fixed values</text>
  <line x1="349" y1="295" x2="349" y2="309" stroke="#334155" strokeWidth="1"/>
  <text x="431.0" y="305.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">From the user's attribute</text>
  <rect x="560" y="296" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="577" y="305" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Exclude these values instead</text>
  <text x="258" y="334" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Values</text>
  <rect x="258" y="340" width="113" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="314.5" y="352.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">00001 · Head office</text>
  <rect x="390" y="340" width="88" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="434.0" y="352.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">00050 · Stores</text>
  <rect x="510" y="338" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="520" y="352.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Pick or type a value…</text>
  <text x="258" y="386" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">A query without this item:</text>
  <rect x="430" y="372" width="216" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="431" y="373" width="106" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="484.0" y="387.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">is unrestricted</text>
  <line x1="538" y1="377" x2="538" y2="391" stroke="#334155" strokeWidth="1"/>
  <text x="592.0" y="387.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">returns nothing</text>
  <rect x="900" y="386" width="38" height="22" rx="5" fill="url(#scp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="919.0" y="400.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Add</text>
  <rect x="10" y="90" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One line per rule</text>
  <text x="20" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rules of a role are ANDed</text>
  <line x1="210" y1="107.0" x2="256" y2="108" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scp-arrow)"/>
  <rect x="10" y="240" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Item or column</text>
  <text x="20" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dd reaches every column</text>
  <line x1="210" y1="257.0" x2="258" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scp-arrow)"/>
  <rect x="10" y="330" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Values or attribute</text>
  <text x="20" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">#USER.company# per user</text>
  <line x1="210" y1="347.0" x2="258" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scp-arrow)"/>
  <rect x="1010" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1020" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Absent item</text>
  <text x="1020" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ignore (open) or deny (nothing)</text>
  <line x1="1010" y1="397.0" x2="692" y2="384" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scp-arrow)"/>
  <rect x="1010" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1020" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tags</text>
  <text x="1020" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">deny mode · connector</text>
  <line x1="1010" y1="117.0" x2="890" y2="108" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scp-arrow)"/>
</svg>

### A rule

| Field | Choice |
|---|---|
| **Dictionary item** or **Column name** | What to restrict. A dictionary item (`CO — Company`) reaches every column that carries it, in every query; a column name restricts that column only. |
| **Connector** | *Any connector*, or one connector — the rule then says nothing about the others. |
| **Fixed values** or **From the user's attribute** | The allowed values, picked from the item's list when it has one; or a user attribute (`company`), so that one role serves every company — each user carries their own value (see [Users](./users.md#attributes)). |
| **Exclude these values instead** | Turns the list into exclusions: `SY not in 00`. Empty values stay visible. |
| **A query without this item** | *is unrestricted*: a query that has no such column is not limited by this rule. *returns nothing*: such a query returns no row for this role (tag **deny if absent**). |

Each rule appears as one line: `Company (CO) in 00001, 00050`, `SY not in 00`, `Company (CO) = user.company`. Clicking a line loads it in the form; the bin removes it. Rules are saved with the role.

### How rules combine

- Within a role, rules add up: *company in 00001* **and** *SY not in 00*.
- Across a user's roles, the most open role wins: a user holding *subsidiary* and *group* sees what *group* sees.
- A role without rules removes every restriction for its holders.
- Superusers are never restricted.

### Where it applies

- **Reads**: every query of a SQL connector is filtered on the server, whatever calls it — screens, exports, dashboards, reports, the assistant.
- **Writes**: creating, changing or deleting a row outside the scope is refused (*403*).
- Not filtered: API connectors and Nomaflow jobs, which run without a user.

### Finding the column of an item

A query column carries a dictionary item when the screen says so, when it has the item's name, or — on a connector with a **Dd Prefix** (JD Edwards: `2`) — when its name without the table prefix is the item: `ABCO`, `MCCO` and `SDCO` all carry `CO`. A join of two tables restricts both columns. On a pool that trims fixed-length text (JD Edwards), values are compared trimmed.

### When a change takes effect

The scope is computed at sign-in and travels with the session. A change of role or of user attribute applies when the session is renewed — within the hour, or at once after signing out and in. The **Profile** window shows a user their attributes and their data scope in words.

### Without the editor

The same rules can be set with `liberty-admin set-scope` and `set-attributes` ([CLI](../../../references/cli.md#liberty-admin)), or in `auth.toml`:

```toml title="auth.toml"
[roles.subsidiary]
permissions = ["menu:sales:*", "sql:sales:*"]
scope = [
  { dd = "CO", source = "#USER.company#", mode = "deny" },
  { dd = "SY", values = ["00"], exclude = true },
]
```

---

## How permissions are checked \{#resolution\}

Every permission is a colon-separated string — `menu:sales:orders`, `sql:sales:orders_get`, `dashboard:sales_overview`, `ai:chat` — and the editor writes them for you. For a request, Liberty Next takes all the permissions of all the user's roles, then:

1. a superuser is always allowed;
2. a matching **deny** refuses — a deny in one role wins over an allow in another;
3. a matching **allow** grants;
4. otherwise, refused.

`*` matches one segment, or everything when it ends the string (`sql:sales:*`).

---

## Common pitfalls \{#pitfalls\}

| Situation | Explanation |
|---|---|
| A user still sees a menu after its role changed | The session carries the rights: sign out and in, or wait for the renewal (within the hour). |
| A deny meant for one role blocks another | Denies apply across all the user's roles. Prefer *No access* plus allows for narrow roles. |
| A query of the role returns nothing | A rule in *returns nothing* mode, and the query has no column carrying the item. Use *is unrestricted* or add the column. |
| A user with an attribute rule sees nothing | The user has no value for the attribute — see [Users](./users.md#attributes). |
| Roles cannot be deleted from the editor | Remove the role from its users; an unused role grants nothing. |
