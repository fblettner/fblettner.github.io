---
title: Packages
description: "Ship configuration from one Liberty install to another with the Package page: pick screens, menu items, dashboards, Explorer models, jobs, notification rules, shared actions or assistant material as seeds, the dependency walker pulls in everything they reach, and the package exports as a ZIP — or is promoted straight to another instance. On the target, the import is previewed entity by entity, with a field diff, before it is applied."
keywords: [Liberty Framework, package, export, import, preview, promotion, target instance, deploy, ZIP, dependency closure, seeds, merge, overwrite, replace all, override, encrypted secrets, build-package, import-package]
---

# Packages

The **Package** page (*Liberty Next → Deploy → Package*) is Liberty's built-in deployment mechanism: an operator on the **source** install picks a few screens / menu items / dashboards as *seeds*, the framework walks every reference they reach (queries, connectors, dictionary entries, charts), and the result ships as a ZIP. On the **target** install, the same screen accepts a ZIP, previews what it would change, and applies it to the live config — followed by an automatic reload. With a target instance declared, the package can also be **promoted** straight to it, without handling the ZIP.

The page offers three views, picked from cards at the top: **Build package**, **Import package** and **Promotion**. It is reserved to superusers.

This is the standard *staging → production* path. It's also the right tool for cross-customer reuse: build a "starter" package of curated screens, hand it to a fresh install, apply with `replace_all`, done.

---

## At a glance

<svg viewBox="0 0 1320 510" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pkgb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pkgb-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pkgb-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="pkgb-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="470" rx="14" fill="url(#pkgb-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Package</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236.0" y="74" width="276.0" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="245.0" y="84" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <circle cx="255.0" cy="94" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="272.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Build package</text>
  <text x="272.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Pick screens and their dependencies, download a zip</text>
  <rect x="522.0" y="74" width="276.0" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="531.0" y="84" width="20" height="20" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <circle cx="541.0" cy="94" r="4" fill="none" stroke="#c084fc" strokeWidth="1.4"/>
  <text x="558.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Import package</text>
  <text x="558.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Apply a package zip to this instance</text>
  <rect x="808.0" y="74" width="276.0" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="817.0" y="84" width="20" height="20" rx="5" fill="#fb923c" fillOpacity="0.18"/>
  <circle cx="827.0" cy="94" r="4" fill="none" stroke="#fb923c" strokeWidth="1.4"/>
  <text x="844.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Promotion</text>
  <text x="844.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Target instances and the promotions applied</text>
  <rect x="999" y="126" width="85" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1041.5" y="141.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">➚ Promote to…</text>
  <rect x="883" y="126" width="110" height="24" rx="5" fill="url(#pkgb-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="938.0" y="141.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Download ZIP (6)</text>
  <rect x="812" y="126" width="65" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="844.5" y="141.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Clear (1)</text>
  <rect x="236" y="126" width="564" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="141.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Filter seeds</text>
  <text x="250" y="182" fill="#e2e8f0" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SEEDS</text>
  <text x="287.5" y="182" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">· 1 selected</text>
  <text x="640.0" y="182" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">select all</text>
  <line x1="236" y1="192" x2="654.0" y2="192" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="212" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SCREENS · 1/24</text>
  <text x="640.0" y="212" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">select all</text>
  <text x="250" y="230" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">CRM</text>
  <rect x="258" y="244" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="275" y="253" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="278" y="253" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">contacts</text>
  <text x="335.12" y="253" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">— Contacts</text>
  <rect x="246" y="262" width="398.0" height="22" rx="5" fill="rgba(255,255,255,0.05)"/>
  <rect x="258" y="268" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M260.5,273.5 L262.8,275.8 L266.8,271" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="275" y="277" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="278" y="277" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">customers</text>
  <text x="341.01" y="277" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">— Customers</text>
  <rect x="258" y="292" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="275" y="301" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="278" y="301" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">orders</text>
  <text x="323.34" y="301" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">— Orders</text>
  <rect x="258" y="316" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="275" y="325" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="278" y="325" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">products</text>
  <text x="335.12" y="325" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">— Products</text>
  <text x="250" y="344" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">MENU ITEMS · 0/18</text>
  <text x="250" y="366" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">DASHBOARDS · 0/3</text>
  <text x="250" y="388" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">NOMAFLOW JOBS · 0/6</text>
  <text x="250" y="410" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SHARED ACTIONS · 0/4</text>
  <text x="680.0" y="182" fill="#e2e8f0" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DEPENDENCIES</text>
  <text x="761.6" y="182" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">· 6/8 will be packaged</text>
  <line x1="666.0" y1="192" x2="1084.0" y2="192" stroke="#1f2937" strokeWidth="1"/>
  <text x="680.0" y="212" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SCREENS · 1/1</text>
  <text x="1070.0" y="212" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">deselect all</text>
  <rect x="688.0" y="225" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M690.5,230.5 L692.8,232.8 L696.8,228" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="705.0" y="234" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">crm.customers</text>
  <text x="680.0" y="252" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">CONNECTORS · 0/1</text>
  <text x="1070.0" y="252" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">select all</text>
  <rect x="688.0" y="265" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="705.0" y="274" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">crm</text>
  <text x="680.0" y="292" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">POOLS · 0/1</text>
  <text x="1070.0" y="292" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">select all</text>
  <rect x="688.0" y="305" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="705.0" y="314" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">crm</text>
  <text x="680.0" y="332" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">QUERIES · 3/3</text>
  <text x="1070.0" y="332" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">deselect all</text>
  <rect x="688.0" y="345" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M690.5,350.5 L692.8,352.8 L696.8,348" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="705.0" y="354" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">crm.customers_get</text>
  <rect x="688.0" y="365" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M690.5,370.5 L692.8,372.8 L696.8,368" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="705.0" y="374" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">crm.customers_put</text>
  <rect x="688.0" y="385" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M690.5,390.5 L692.8,392.8 L696.8,388" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="705.0" y="394" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">crm.lookup_country</text>
  <text x="680.0" y="412" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">DICTIONARY ENTRIES · 2/2</text>
  <text x="1070.0" y="412" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">deselect all</text>
  <rect x="688.0" y="425" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M690.5,430.5 L692.8,432.8 L696.8,428" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="705.0" y="434" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">crm.CUSTOMER_ID</text>
  <rect x="688.0" y="445" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M690.5,450.5 L692.8,452.8 L696.8,448" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="705.0" y="454" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">crm.COUNTRY</text>
  <rect x="236" y="162" width="418.0" height="314" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="666.0" y="162" width="418.0" height="314" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three views</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">build, import, promotion</text>
  <line x1="200" y1="77.0" x2="236" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pkgb-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filter, then select all</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">only the matching seeds</text>
  <line x1="200" y1="167.0" x2="236" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pkgb-arrow)"/>
  <rect x="20" y="270" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tick a seed</text>
  <text x="30" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">screen, menu item, dashboard…</text>
  <line x1="200" y1="287.0" x2="252" y2="273" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pkgb-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Other kinds of seeds</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">models, jobs, rules, actions, AI</text>
  <line x1="200" y1="417.0" x2="250" y2="366" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pkgb-arrow)"/>
  <rect x="1120" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">ZIP or promotion</text>
  <text x="1130" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">count of what is ticked</text>
  <line x1="1120" y1="57.0" x2="943" y2="126" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pkgb-arrow)"/>
  <rect x="1120" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The closure</text>
  <text x="1130" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">every dependency reached</text>
  <line x1="1120" y1="217.0" x2="1084.0" y2="208" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pkgb-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Unticked by default</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">connectors and pools</text>
  <line x1="1120" y1="317.0" x2="1084.0" y2="270" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pkgb-arrow)"/>
</svg>

---

## When to use which

| Situation | Use |
|---|---|
| Promote screens / dashboards from staging to production. | Build on staging, apply on prod with `overwrite`. |
| Ship a curated set of screens to a brand-new install. | Build, apply with `replace_all`. |
| Add a few new screens to an existing customer install without touching their edits. | Build, apply with `merge`. |
| Ship a fresh release of a vendor-maintained app where the customer has local edits on a few screens. | Build, apply with `overwrite` — entities flagged `override = true` on the target are preserved automatically. |
| Promote screens to production in one step, without the ZIP. | **Promote to…** on Build — see [Promotion](#promotion). |
| Promote one Nomaflow job between environments. | Pick it as a seed under *nomaflow jobs*, or use the **Export** icon on the job's line of the Jobs page. |
| Deliver a full licensed bundle (Nomasx-1 + Nomajde plugins + config). | Not this. Use the **`liberty-apps`** wheel installer — see [Installation → Deploy prebuilt apps](../../installation/deploy-prebuilt-apps.md). |

The Package screen ships **declarative config** — TOML files. It does not ship Python code, Java JARs, plugin packages or database content. For those, the wheel installer is the canonical channel.

---

## The Build view

The left panel lists every **seed candidate** on the install — screens, menu items, dashboards. The right panel shows the **dependency closure** of whatever is ticked on the left.

### Picking seeds

The left panel groups the candidates by kind, each group with its count of ticked items (`SCREENS · 1/24`):

| Section | Drawn from |
|---|---|
| **Screens** | Every screen the install knows — grouped by app. |
| **Menu items** | Every menu item, by app. |
| **Dashboards** | Every dashboard, by scope. |
| **Explorer models** | The Data Explorer models, with their shipped analyses and dashboards. |
| **nomaflow jobs** | The jobs of `jobs.toml`. |
| **Notification rules** | The rules of Liberty Next → Logic → Notifications. |
| **Shared actions** | The actions reused by several screens. |
| **Assistant (starters, playbooks)** | What an application ships for the AI assistant — one entry per application. |

**Filter seeds**, above the panels, filters the visible list by name / label / scope. The per-section *select all* respects the filter — narrow first (e.g. type `audit`), then tick *select all* to grab only the matching screens.

The seed picker is **bulk-friendly**: hold the filter at a customer name, tick *select all* and you've staged a per-customer slice. No need to click each screen one by one.

### What the dependency walker does

The moment you tick any seed — the **Download ZIP (n)** and **Promote to…** buttons then count what is ticked —, the right panel kicks off the walker (`POST /admin/find-dependencies` on the backend). For every seed, the walker resolves:

| Kind | What's pulled |
|---|---|
| **`screen`** | The screen's main query, all referenced sub-queries (from screen actions, nested tabs, conditional fields), every dictionary entry that backs a column, every lookup the dialog uses, every sequence and enum, the connector each query belongs to (and its pool). |
| **`menu_item`** | The screen, query, endpoint, dashboard or job the menu item targets, then the closure of *that*. |
| **`dashboard`** | Every chart on the dashboard, every query each chart reads from, the connectors. A dashboard named `<app>.<id>` is looked up in that app. |
| **`notification_rule`** | The screen or the jobs its trigger names. |

The closure is **recursive but bounded** (default depth = 50). Cycles are detected and short-circuited.

### The default-excluded kinds

The Dependencies panel pre-ticks every dep **except** three kinds:

| Kind | Why default-excluded |
|---|---|
| **Connectors** | The target install almost always already has its own connector with the right pool / credentials. Shipping the source's connector would clobber the target's secrets. |
| **Pools** | Same — pools carry DB credentials. The target's pool is the one you want. |
| **API endpoints** | Same — endpoints carry auth headers / Bearer tokens specific to the source install's wiring. An endpoint a screen reads its rows from, or saves through, is the screen's data: it is ticked like the screen's queries, and an endpoint served by a shared action brings that action with it. |

This makes the typical "promote screens between envs" workflow safe out of the box: nothing that carries secrets ships unless you opt in. Tick the *Connectors* group manually only when the target genuinely has none — typically a brand-new install or a per-customer staging spin-up.

The frontend remembers your per-dep ticks; the *select all* / *deselect all* toggles at the group level make it cheap to flip every connector on or off at once.

### Building the ZIP

Click **Download ZIP** and the framework runs `POST /admin/build-package`, returning a ZIP with up to six TOMLs:

| File | When present |
|---|---|
| `connectors.toml` | When at least one connector / pool / query / API endpoint is included. Connector definitions are **trimmed** — only the queries / endpoints in the closure are kept, the rest are dropped. |
| `dictionary.toml` | When the closure pulls in any dictionary entry, lookup, sequence or enum. Per-connector dictionary blocks are nested under `[connectors.<name>]`. |
| `screens.toml` | When at least one screen is in the closure. Grouped by app under `[screens.<app>]`. |
| `menus.toml` | When at least one menu item is in the closure. Grouped by app under `[menus.<app>.items]`. |
| `charts.toml` | When at least one chart is in the closure. |
| `dashboards.toml` | When at least one dashboard is in the closure. |

Plus one always-present file:

| File | What it carries |
|---|---|
| **`MANIFEST.md`** | Human-readable summary — what's in the ZIP, the seeds, per-kind counts, the env vars `${VAR}` the package references (and that the operator must set on the target), the missing references (closure couldn't resolve — usually a typo or a stale rename on the source), and the operator-facing instructions. |

The MANIFEST is the first thing to open on the target before applying — it tells you what to expect and what's still on you to wire (env vars, secrets, master key).

### What's NOT in the package

Worth knowing so you don't try to ship through this channel:

| Not included | Where it lives instead |
|---|---|
| Liberty Next → Administer → App | Per install — application settings, licence, sign-in. Never bundled. |
| `auth.toml` / DB-stored users | Per-install — carries Argon2 password hashes. Never bundled. |
| Python plugins | Shipped with the [liberty-apps wheel](../../installation/deploy-prebuilt-apps.md) or the plugin's own release channel. |
| Database content | Use a DB dump (or a [bundled preload job](../../nomaflow/bundled-jobs.md)). |

---

## The Import view

Pick the **Import package** card. The view offers three strategies — **Merge**, **Overwrite (recommended for upgrades)**, **Replace all** — and a file picker.

### The three strategies

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="pkg-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#pkg-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Import strategies — what happens per entity in the package</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="84" width="290" height="240" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <text x="185" y="112" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MERGE</text>
  <text x="185" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Add only what's new.</text>
  <text x="185" y="150" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Existing entities are preserved.</text>
  <line x1="60" y1="170" x2="310" y2="170" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1"/>
  <text x="185" y="194" fill="#22c55e" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">added</text>
  <text x="185" y="212" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">entities not on the target</text>
  <text x="185" y="240" fill="#94a3b8" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">skipped</text>
  <text x="185" y="258" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">already present (kept as-is)</text>
  <text x="185" y="296" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Use when adding new things</text>
  <text x="185" y="310" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">without touching customer edits</text>

  <rect x="350" y="84" width="290" height="240" rx="10" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="495" y="112" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OVERWRITE — RECOMMENDED</text>
  <text x="495" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Package is the new truth.</text>
  <text x="495" y="150" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Target's other entities untouched.</text>
  <line x1="370" y1="170" x2="620" y2="170" stroke="#4a9eff" strokeOpacity="0.3" strokeWidth="1"/>
  <text x="495" y="194" fill="#22c55e" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">added</text>
  <text x="495" y="212" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">new entities land</text>
  <text x="495" y="232" fill="#4a9eff" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">replaced</text>
  <text x="495" y="250" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">existing entities get the package version</text>
  <text x="495" y="270" fill="#c084fc" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">preserved (override = true)</text>
  <text x="495" y="288" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">customer fork — left alone</text>
  <text x="495" y="316" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Default upgrade path</text>

  <rect x="660" y="84" width="290" height="240" rx="10" fill="rgba(251,146,60,0.10)" stroke="rgba(251,146,60,0.40)"/>
  <text x="805" y="112" fill="#fb923c" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REPLACE ALL</text>
  <text x="805" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Each TOML in the ZIP replaces</text>
  <text x="805" y="150" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">the WHOLE target file.</text>
  <line x1="680" y1="170" x2="930" y2="170" stroke="#fb923c" strokeOpacity="0.3" strokeWidth="1"/>
  <text x="805" y="194" fill="#4a9eff" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">all entities in package</text>
  <text x="805" y="212" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">landed on target</text>
  <text x="805" y="232" fill="#fb923c" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">DROPPED on target</text>
  <text x="805" y="250" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">every entity NOT in the package</text>
  <text x="805" y="280" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Brutal — only for deploy-from-scratch.</text>
  <text x="805" y="294" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Files the package does NOT touch</text>
  <text x="805" y="308" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">are left alone.</text>

  <rect x="40" y="332" width="920" height="20" rx="4" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="500" y="346" fill="#94a3b8" fontSize="10" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Strategy applies INDEPENDENTLY to each TOML in the ZIP. A package that only carries screens.toml only touches the target's screens.toml.</text>
</svg>

The three columns map one-to-one to the radio cards in the UI:

| Strategy | Per-entity behaviour | Use when |
|---|---|---|
| **`merge`** | NEW entities land. EXISTING entities on the target are **kept as-is**. | Adding new things without disturbing customer edits. The package adds; it never overwrites. |
| **`overwrite`** | NEW entities land. EXISTING entities are **replaced** by the package version — EXCEPT when the target entity is flagged `override = true` (then preserved, reported separately). | The standard upgrade path. The package becomes the new truth for the entities it carries. Entities elsewhere on the target (those not in the package) are untouched. |
| **`replace_all`** | For every TOML in the ZIP, the **whole target file** is replaced by the package's version. EVERY entity not in the package is dropped from that file. Files the package doesn't touch are untouched. | Deploy-from-scratch / vendor reset / a curated baseline. |

### The `override = true` escape hatch

A customer install sometimes needs to fork a vendor entity — patch one screen's columns, swap a query — and keep that fork across vendor upgrades. Add `override = true` to the entity's TOML block:

```toml title="screens.toml on the customer install"
[screens.crm.customers]
label = "Customers (customer fork)"
override = true   # vendor `overwrite` imports will skip this entity
query = "customers_v2_custom"
# ... rest of the customer's edit
```

On the next `overwrite` import, the framework sees the flag and leaves the entity alone. The import report shows it under *preserved overrides* so the operator sees exactly which entities survived the vendor push.

Two limits worth knowing:

- `merge` already skips existing entities — the flag is redundant there.
- `replace_all` drops the entire file — overrides are NOT preserved. Use it knowingly.

### Preview, then apply \{#preview\}

As soon as a ZIP is picked — and again when the strategy changes — the page previews the import; nothing is written until **Apply**.

| Part | Content |
|---|---|
| State chips | The count per state: **New**, **Changed**, **Identical**, **Kept (override)**, **Skipped**, **Removed**, **Errors** — with *From &lt;install&gt; · &lt;version&gt;*, the package's origin. |
| Warnings | A package from a newer Liberty Next — settings this instance does not know may be rejected: upgrade it first; encrypted values this instance cannot decrypt — another master key: set them again after the import. |
| Entities | One card per file. What changes comes first; **Show identical** adds the rest. A changed entity opens on its fields: **Here now** and **After the import**. |
| **Apply N change(s)** | Writes the changes, reloads, then shows the same plan as the result with *Applied + reloaded*. When the instance already holds every entity as the package has it, there is nothing to apply. |

What travels is merged with care:

- a **connector**'s queries, tables, sequences, lookups and endpoints are imported one by one: importing a package never removes the target's other queries;
- a **job** that already exists on the target keeps its schedule, enabled flag, timezone, presets, alerts, retry, log level and timeout; a new job arrives disabled;
- the package is built from the files as written: unset values and `${VAR}` references travel as they are.

If the reload fails after a successful apply, the file changes are kept on disk; run **Reload config**, at the top of the Liberty Next pages, once the underlying issue is fixed.

---

## Promotion — straight to another instance \{#promotion\}

A **target instance** is another Liberty Next install — production, a customer's staging — reached over its API.

**Package → Promotion** lists the targets: **Name**, **Label**, **URL** (the target's root address, with its sub-path), **Account** and **Password** of a local superuser there — the password stored encrypted —, **Check the TLS certificate**, **Timeout (s)**. **Test** signs in on the target: *Signed in on prod · 7.0.64*. **Save targets** keeps them.

**Promote to…**, beside **Download ZIP** on Build, sends the selection to a target:

1. pick the **Target**, the **Strategy** and an optional **Comment**;
2. the target previews the import at once — the same plan as above, computed on the target: *Preview on prod — nothing is written until you apply*;
3. **Apply on prod** applies it there.

Connectors, pools and API endpoints stay the target's unless ticked: a connector's queries still travel, merged into the target's connector. The same **Promote to…** on *Liberty Next → Deploy → Changes* sends an approved [change package](../../nomaflow/change-packages.md#promote).

The **History** of the Promotion view lists the promotions applied from this instance — when, by whom, to which target, what, and the outcome; a row opens on the target's report.

---

## Secrets and environment variables

The package is **plaintext TOML**. Two patterns let the source's secrets travel without leaking the secret material:

| Pattern | What happens at build / apply |
|---|---|
| **Encrypted secrets** — `password = "ENC:base64=="` | The ciphertext lands verbatim in the package. The **target must have the same master key** (`LIBERTY_MASTER_KEY`) as the source — otherwise decryption fails on first use. |
| **Env var references** — `password = "${DB_PASSWORD}"` | The literal string `${DB_PASSWORD}` is in the package. The operator must set the env var **on the target** before reloading. `MANIFEST.md` lists every `${VAR}` the package references. |

Pick one pattern per install — mixing both inside a single config gets confusing. Encrypted secrets travel best across containerised deployments; env vars travel best across orchestrators (Kubernetes Secrets, Docker `--env-file`, systemd `EnvironmentFile`).

### What you should NOT ship

| Don't | Why |
|---|---|
| Move `auth.toml` between installs via the Package screen. | The screen ignores `auth.toml`. Move users via the dedicated *Users* admin (or invite them per install). |
| Expect a package to carry Liberty Next → Administer → App. | It does not — application settings, licence and sign-in stay on each install. |
| Ship a package with `replace_all` to a customer who has local edits without a heads-up. | The customer's screens / queries / dictionary entries are dropped. There is no automatic undo — keep a backup of the target's config tree first. |

---

## Inspect-without-export

The Build tab's right panel is also a **standalone dependency inspector**. Tick a single screen, look at the closure — that's exactly what the screen would carry into a package, and exactly what would break if you renamed / deleted the screen. No need to click *Download ZIP* — the inspection is the value.

Liberty also exposes a dedicated **Find dependencies** modal from any screen / menu item / dashboard list (the icon next to the rename button). Same backend (`POST /admin/find-dependencies`), simpler shape — just the closure tree for the one entity you opened it on.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Forgot to set a `${VAR}` listed in MANIFEST.md before reloading the target. | A connector / query fails at first use with a missing-substitution error. | Read MANIFEST.md before applying. Set the env vars in the target's environment file / systemd unit / Docker env. |
| Source and target carry different `master_key`s. | Encrypted `ENC:...` values fail to decrypt; the affected connector errors at first use. | Sync the master key (or rotate the encrypted values on the target — see [Build → Secure → Encrypted secrets](./secure/encrypted-secrets.md)). |
| Used `replace_all` to apply a small slice — wiped customer-specific screens. | Customer screens missing from the target after import. | Restore the previous TOML from your backup. Re-apply with `overwrite` next time. |
| Bundled `connectors.toml` (default-excluded) without checking pool names match the target. | Target's pools change unexpectedly; pre-existing queries error at next reload. | Leave connectors / pools default-excluded unless the target is brand-new. Or rename pools on the source before bundling. |
| Built from a source with unresolved references (broken rename / deleted query). | MANIFEST.md lists items under *Missing references*. | Fix on the source (rename / delete / restore) and rebuild. The target won't get the broken references — but it also won't get the screens / queries that referenced them. |
| A warning says the package holds values this instance cannot decrypt. | The source and the target use different master keys. | Set those values again on the target after the import, or share the master key. |
| Import landed but `Applied + reloaded` is missing — a *reload failed* warning showed. | Disk has the new config; in-memory state is stale. | Reload manually via **Reload config**, at the top of the Liberty Next pages, once the underlying issue is fixed (often a syntax error in an unrelated TOML the reload caught). |

---

## Programmatic access

The two endpoints behind the UI are usable headless — useful for CI / scripted promotion:

```bash title="Build a package"
curl -X POST \
  -H "Authorization: Bearer <superuser-token>" \
  -H "Content-Type: application/json" \
  -d '{"seeds":[{"kind":"screen","name":"customers","scope":"crm"}]}' \
  https://<source>/admin/build-package \
  --output liberty-package.zip
```

```bash title="Apply a package"
curl -X POST \
  -H "Authorization: Bearer <superuser-token>" \
  -F "package=@liberty-package.zip" \
  "https://<target>/admin/import-package?strategy=overwrite"
```

`build-package` accepts an optional `include` array to filter the closure (same shape as the UI's per-dep checkbox state). `import-package` accepts `strategy` as a query param (`merge` | `overwrite` | `replace_all`) and `dry_run=true` for the preview. Both endpoints require superuser auth. `POST /admin/promotion/push` sends a package or an approved change package to a declared target.

---

## What's next

- [Deploy prebuilt apps](../../installation/deploy-prebuilt-apps.md) — when the package channel isn't enough (full bundle = config + Python plugins), use the `liberty-apps` wheel installer.
- [Nomaflow → Bundled jobs](../../nomaflow/bundled-jobs.md) — the ready-made jobs that ship with `liberty-apps`, including the `nomasx1-import-reference` job that loads a curated reference bundle.
- [Encrypted secrets](./secure/encrypted-secrets.md) — what `ENC:` values are, how to rotate them when promoting across installs with different master keys.
