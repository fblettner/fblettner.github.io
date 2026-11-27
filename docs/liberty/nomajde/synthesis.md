---
title: Platform synthesis
description: "Platform synthesis in Nomajde: the JD Edwards EnterpriseOne platform at a glance — six figures, one list of what the server, performance and database analyses flag, the most serious first, the architecture diagram, one tab per analysis, the platform's capacity and how its figures move, what could be improved in the architecture, and the Platform synthesis PDF. Read-only."
keywords: [Nomajde, JD Edwards, JDE E1, platform synthesis, monitoring, Server Manager, architecture, performance, database audit, points to review, instances running, users online, business functions, database size, capacity, batch jobs, platform snapshot, improvements, sizing, PDF report]
---

# Platform synthesis

**Platform synthesis**, right under **Overview** in the Nomajde menu, puts the JD Edwards EnterpriseOne platform on one page: six figures, then **what needs attention** across the three analyses of the Monitoring folder — [Platform analysis](./monitoring/platform-analysis.md), [Performance](./monitoring/performance.md) and [Database audit](./monitoring/database-audit.md) — in one list, the most serious first, and the [architecture](./monitoring/architecture.md) as it is found. It is the page to open first when the question is "how is the platform doing?"; each tab leads to the full page behind it. Two more tabs look further: **Capacity** — the size of the platform and how its figures move — and **Improvements** — what could be improved in the architecture. **Get the report (PDF)** writes it all as a document to share.

The page only reads. It opens at once on the readings the server keeps — the last ones, made by the [platform reading job](./jobs.md#platform-reading) or by anyone's last **Read again** — and the header says when the oldest of them was made (*Read at 14:02*, with the day when it is older than today): an old figure is never taken for the present. **Read again** reads everything live, however long it takes, and replaces the kept readings for everybody. With no reading kept yet, the first opening reads live. The Monitoring pages — Platform synthesis, Architecture, Platform analysis, Performance and Database audit — share their readings: what one page has read, the others draw at once, and what one page reads again is fresh in the others. The history of the figures is what the *Platform snapshot* job keeps.

---

## At a glance

<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nsyn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nsyn-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nsyn-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nsyn-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="760" height="374" rx="14" fill="url(#nsyn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Platform synthesis</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The JD Edwards platform at a glance: what needs attention, its architecture, and what each analysis says.</text>
  <rect x="885" y="34" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="922.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Read again</text>
  <text x="739" y="48.5" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Read at 14:02</text>
  <rect x="749" y="34" width="128" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="813.0" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Get the report (PDF)</text>
  <rect x="240.0" y="78" width="113.33333333333333" height="46" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="98" fill="#4ade80" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">5 / 5</text>
  <text x="250.0" y="116" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">INSTANCES RUNNING</text>
  <rect x="361.3333333333333" y="78" width="113.33333333333333" height="46" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="371.3333333333333" y="98" fill="#c084fc" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">38</text>
  <text x="371.3333333333333" y="116" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">USERS ONLINE</text>
  <rect x="482.66666666666663" y="78" width="113.33333333333333" height="46" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="492.66666666666663" y="98" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">12,480</text>
  <text x="492.66666666666663" y="107" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">BUSINESS FUNCTION</text>
  <text x="492.66666666666663" y="117" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">CALLS</text>
  <rect x="604.0" y="78" width="113.33333333333333" height="46" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="614.0" y="98" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">214 GB</text>
  <text x="614.0" y="116" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">DATABASE SIZE</text>
  <rect x="725.3333333333333" y="78" width="113.33333333333333" height="46" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="735.3333333333333" y="98" fill="#fb923c" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="735.3333333333333" y="116" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">NOT DECLARED IN SM</text>
  <rect x="846.6666666666666" y="78" width="113.33333333333333" height="46" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="856.6666666666666" y="98" fill="#f87171" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">6</text>
  <text x="856.6666666666666" y="116" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">POINTS TO REVIEW</text>
  <rect x="240.0" y="132" width="174.0" height="36" rx="8" fill="rgba(255,159,10,0.08)" stroke="#fb923c" strokeWidth="1"/>
  <rect x="248.0" y="140" width="18" height="18" rx="5" fill="#fb923c" fillOpacity="0.2"/>
  <text x="272.0" y="148" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Attention</text>
  <text x="272.0" y="160" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">What the analyses flag…</text>
  <rect x="422.0" y="132" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="430.0" y="140" width="18" height="18" rx="5" fill="#4a9eff" fillOpacity="0.2"/>
  <text x="454.0" y="148" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Architecture</text>
  <text x="454.0" y="160" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">What Server Manager declares…</text>
  <rect x="604.0" y="132" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="612.0" y="140" width="18" height="18" rx="5" fill="#4ade80" fillOpacity="0.2"/>
  <text x="636.0" y="148" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Servers</text>
  <text x="636.0" y="160" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Instances, processes… · 2 to review</text>
  <rect x="786.0" y="132" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="794.0" y="140" width="18" height="18" rx="5" fill="#c084fc" fillOpacity="0.2"/>
  <text x="818.0" y="148" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Performance</text>
  <text x="818.0" y="160" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Where the time goes · 3 to review</text>
  <rect x="240.0" y="174" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="248.0" y="182" width="18" height="18" rx="5" fill="#4a9eff" fillOpacity="0.2"/>
  <text x="272.0" y="190" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Database</text>
  <text x="272.0" y="202" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Size, space, activity · 1 to review</text>
  <rect x="422.0" y="174" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="430.0" y="182" width="18" height="18" rx="5" fill="#4ade80" fillOpacity="0.2"/>
  <text x="454.0" y="190" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Capacity</text>
  <text x="454.0" y="202" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">The size of the platform…</text>
  <rect x="604.0" y="174" width="174.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="612.0" y="182" width="18" height="18" rx="5" fill="#fb923c" fillOpacity="0.2"/>
  <text x="636.0" y="190" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Improvements</text>
  <text x="636.0" y="202" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">… · 3 to plan</text>
  <rect x="240" y="222" width="720" height="160" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="240" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">WHAT NEEDS ATTENTION</text>
  <line x1="240" y1="248" x2="960" y2="248" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="266" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TO ACT ON FIRST</text>
  <circle cx="256" cy="283" r="3.5" fill="#f87171"/>
  <text x="266" y="286" fill="#94a3b8" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PERFORMANCE</text>
  <text x="356" y="286" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Business functions</text>
  <text x="476" y="286" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">B4200310 takes 41% of all the time measured — 38 s over 920 call(s)</text>
  <text x="252" y="306" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TO REVIEW</text>
  <circle cx="256" cy="323" r="3.5" fill="#fb923c"/>
  <text x="266" y="326" fill="#94a3b8" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERVERS</text>
  <text x="356" y="326" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Instances</text>
  <text x="476" y="326" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Instance AIS_PD (restserver) is not running: STOPPED.</text>
  <circle cx="256" cy="343" r="3.5" fill="#fb923c"/>
  <text x="266" y="346" fill="#94a3b8" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERVERS</text>
  <text x="356" y="346" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Enterprise server</text>
  <text x="476" y="346" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">2 zombie process(es) on ENT_PD</text>
  <circle cx="256" cy="363" r="3.5" fill="#fb923c"/>
  <text x="266" y="366" fill="#94a3b8" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATABASE</text>
  <text x="356" y="366" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">The instance</text>
  <text x="476" y="366" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">The database is in NOARCHIVELOG mode: no recovery to a point in time.</text>
  <rect x="20" y="78" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="93" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six figures</text>
  <text x="30" y="106" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">amber or red when to look at</text>
  <line x1="200" y1="95.0" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Seven tabs</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the count to review on each</text>
  <line x1="200" y1="157.0" x2="240" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="20" y="262" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Most serious first</text>
  <text x="30" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">act on first, then review</text>
  <line x1="200" y1="279.0" x2="252" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Where it comes from</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the analysis and its area</text>
  <line x1="200" y1="347.0" x2="266" y2="326" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Get the report</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the synthesis as a PDF</text>
  <line x1="1000" y1="77.0" x2="922.5" y2="57" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="1000" y="176" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="191" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Capacity · Improvements</text>
  <text x="1010" y="204" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">size, trends, proposals</text>
  <line x1="1000" y1="193.0" x2="778.0" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Each fact once</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">worded as its own page</text>
  <line x1="1000" y1="317.0" x2="860" y2="303" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
</svg>

---

## The figures \{#figures\}

| Figure | What it counts |
|---|---|
| **Instances running** | The Server Manager instances running, out of all those it declares — amber when one is not running. |
| **Users online** | The users signed in to the web and AIS servers. |
| **Business function calls** | The calls the web servers have made to the enterprise servers since they started. |
| **Database size** | The size of the JD Edwards database, in GB. |
| **Not declared in Server Manager** | What the database side shows and Server Manager does not declare — a database server, a machine running kernels, another client of the database (see [Architecture](./monitoring/architecture.md#undeclared)). Amber when there is one. |
| **Points to review** | The lines of the **Attention** tab — red when one is to act on first, amber when there are only points to review, green when there is nothing. |

---

## The tabs \{#tabs\}

The page opens on the last tab chosen. Each tab names, in its description, how many points it has to review.

| Tab | Content |
|---|---|
| **Attention** | What the three analyses flag, in one list: **To act on first**, then **To review**. Each line names the analysis it comes from (*Servers*, *Performance*, *Database*), its area and the fact, worded as its own page words it. A fact flagged by two analyses on the same instance — zombie processes, for example — is given once. |
| **Architecture** | The [architecture diagram](./monitoring/architecture.md): the tiers, the hosts, the instances, the database and the lines drawn on evidence. A click on a card opens the full Architecture page. |
| **Servers** | What the [Platform analysis](./monitoring/platform-analysis.md) says: instances, processes, business functions, web and AIS nodes. |
| **Performance** | What the [Performance](./monitoring/performance.md) advice says: where the time goes. |
| **Database** | What the [Database audit](./monitoring/database-audit.md) says: size, space, activity. |
| **Capacity** | The size of the platform, and how its figures move — see [Capacity](#capacity). |
| **Improvements** | What could be improved in the architecture, each proposal with what it rests on and what to do — see [Improvements](#improvements). The tab's description counts the proposals *to plan*. |

The **Servers**, **Performance** and **Database** tabs list every line of their analysis — those to review and those that are fine — and **Open the full page** leads to the page with the figures, the details and the grids.

Every analysis is read on its own: one that fails or is slow does not hide the others. An analysis that did not answer is said in a warning (*Not read — Performance: …*) and the rest of the page is shown.

---

## Capacity \{#capacity\}

The **Capacity** tab says how large the platform is, how loaded it is, and how its figures moved. It reads in four blocks.

### The size of the platform

Read now: the **processors** of the database server with its cores, its **memory** and its load, the **database size**, and the batch volume — **batch jobs a day** on average over the days with jobs, **the busiest day**, **batch jobs in error** and **batch jobs waiting now**. The database server's figures are read from an Oracle, SQL Server or Db2 database (Db2 for i included), each from its own dictionary.

**Batch jobs per day** draws the jobs of the last 30 days, one bar per day, with the queues they went through. The batch figures come from JD Edwards' own job table (F986110, in the server map), which keeps its history: nothing has to be collected first. On SQL Server, the table is looked for in the databases the pool names. When the JD Edwards database is reached through a database link, the table is read through the link the pool names under the key `SVM` in its **Database links** (see [Connectors → Schema and DB-link tokens](../framework/connectors.md#schema-and-db-link-tokens)); when the pool names no `SVM` library, the table is looked for in the remote database's dictionary.

### The servers and their size

Every machine of the platform with what it carries (database, enterprise server, web server, AIS server…) and its processors, physical cores, memory and disk, as held by [Server sizes](./monitoring/server-sizes.md). Each figure is marked *stated*, *measured by the database* or *standard configuration*, and the heading counts how many machines rest on each. **State the sizes** opens Server sizes.

### The JD Edwards servers, in use now

As Server Manager measures them: the enterprise server's **processor** and **memory** in use, its **kernels running**, and the **Java heap** of the web and AIS instances against the maximum it may reach. Server Manager says what a server uses, not how large the machine is. **Open the full page** leads to [Platform analysis](./monitoring/platform-analysis.md).

### How the figures move

One small chart per figure kept by the snapshots — users online, sessions, business function response, timeouts, requests waiting, enterprise server processor and memory, kernels, Java heap, cache hits; the database's sessions, load, cache hits, blocked sessions and size; batch jobs of the day, in error and waiting, zombie processes, instances running — with its **lowest** and **highest** value. The heading says how many snapshots are kept and over which period.

The snapshots are written by the **Platform snapshot** job (hourly as shipped, off until it is turned on): one row per figure in the Nomajde database, kept 400 days by default. Without a snapshot the block says so; a trend needs at least two. **Open the job** opens it (see [Jobs](./jobs.md)).

---

## Improvements \{#improvements\}

The analyses flag what is wrong now. The **Improvements** tab reads the same material one level up — how the platform is built and how it is loaded — and words what a consultant would propose, drawn from the architecture, the figures read now and those the snapshots kept.

<svg viewBox="0 0 1200 452" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nsynimp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nsynimp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nsynimp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nsynimp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="760" height="424" rx="14" fill="url(#nsynimp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="34" width="720" height="262" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="52" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">WHAT COULD BE IMPROVED</text>
  <text x="410.144" y="52" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">drawn from the architecture, the figures read now and those the snapshots kept</text>
  <line x1="240" y1="60" x2="960" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="78" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TO PLAN · 2</text>
  <rect x="252" y="86" width="696" height="50" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="86" width="3" height="50" fill="#fb923c"/>
  <text x="264" y="100" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">The database shares its machine</text>
  <text x="264" y="113" fill="#64748b" fontSize="6.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT RESTS ON</text>
  <text x="264" y="126" fill="#cbd5e1" fontSize="7.8" fontFamily="system-ui, sans-serif">JDEDB01 carries the enterprise server and the database.</text>
  <text x="600" y="113" fill="#64748b" fontSize="6.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT TO DO</text>
  <text x="600" y="124" fill="#cbd5e1" fontSize="7.8" fontFamily="system-ui, sans-serif">Give the database its own server: it no longer competes</text>
  <text x="600" y="133" fill="#cbd5e1" fontSize="7.8" fontFamily="system-ui, sans-serif">for processor and memory with the JD Edwards kernels.</text>
  <rect x="252" y="142" width="696" height="50" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="142" width="3" height="50" fill="#fb923c"/>
  <text x="264" y="156" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">One web instance serves every user</text>
  <text x="264" y="169" fill="#64748b" fontSize="6.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT RESTS ON</text>
  <text x="264" y="182" fill="#cbd5e1" fontSize="7.8" fontFamily="system-ui, sans-serif">HTML_PD is the only web instance — 38 user(s) online.</text>
  <text x="600" y="169" fill="#64748b" fontSize="6.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT TO DO</text>
  <text x="600" y="180" fill="#cbd5e1" fontSize="7.8" fontFamily="system-ui, sans-serif">A second web instance behind a load balancer: the users</text>
  <text x="600" y="189" fill="#cbd5e1" fontSize="7.8" fontFamily="system-ui, sans-serif">keep working when one stops.</text>
  <text x="252" y="208" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TO KNOW BEFORE A SIZING · 1</text>
  <rect x="252" y="216" width="696" height="50" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="216" width="3" height="50" fill="#4a9eff"/>
  <text x="264" y="230" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">1 server(s) have no stated size</text>
  <text x="264" y="243" fill="#64748b" fontSize="6.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT RESTS ON</text>
  <text x="264" y="256" fill="#cbd5e1" fontSize="7.8" fontFamily="system-ui, sans-serif">JDEWEB01: processors and memory from the standard configuration.</text>
  <text x="600" y="243" fill="#64748b" fontSize="6.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT TO DO</text>
  <text x="600" y="254" fill="#cbd5e1" fontSize="7.8" fontFamily="system-ui, sans-serif">State them in Monitoring → Server sizes: a target platform</text>
  <text x="600" y="263" fill="#cbd5e1" fontSize="7.8" fontFamily="system-ui, sans-serif">is sized from what each server is today.</text>
  <rect x="240" y="306" width="720" height="122" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="324" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">WHAT WAS CHECKED</text>
  <line x1="240" y1="332" x2="960" y2="332" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="255.0" cy="347" r="3" fill="#4ade80"/>
  <text x="263.0" y="350" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Java heap of the web and AIS instances — nothing to propose</text>
  <circle cx="487.0" cy="347" r="3" fill="#4ade80"/>
  <text x="495.0" y="350" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Processor of the enterprise servers — nothing to propose</text>
  <circle cx="719.0" cy="347" r="3" fill="#4ade80"/>
  <text x="727.0" y="350" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Load of the database server — nothing to propose</text>
  <circle cx="255.0" cy="364" r="3" fill="#4ade80"/>
  <text x="263.0" y="367" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Batch jobs waiting — nothing to propose</text>
  <circle cx="487.0" cy="364" r="3" fill="#4ade80"/>
  <text x="495.0" y="367" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Machines against Oracle's minimum — nothing to propose</text>
  <circle cx="719.0" cy="364" r="3" fill="#4ade80"/>
  <text x="727.0" y="367" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Everything on one machine — nothing to propose</text>
  <circle cx="255.0" cy="381" r="3" fill="#fb923c"/>
  <text x="263.0" y="384" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">The database on its own machine — a proposal</text>
  <circle cx="487.0" cy="381" r="3" fill="#4ade80"/>
  <text x="495.0" y="384" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Web and enterprise servers apart — nothing to propose</text>
  <circle cx="719.0" cy="381" r="3" fill="#4ade80"/>
  <text x="727.0" y="384" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">More than one enterprise server — nothing to propose</text>
  <circle cx="255.0" cy="398" r="3" fill="#fb923c"/>
  <text x="263.0" y="401" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">More than one web instance — a proposal</text>
  <circle cx="487.0" cy="398" r="3" fill="#4ade80"/>
  <text x="495.0" y="401" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">More than one AIS instance — nothing to propose</text>
  <circle cx="719.0" cy="398" r="3" fill="#4ade80"/>
  <text x="727.0" y="401" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Servers Server Manager does not know — nothing to propose</text>
  <circle cx="255.0" cy="415" r="3" fill="#475569"/>
  <text x="263.0" y="418" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Growth of the database — not checked</text>
  <circle cx="487.0" cy="415" r="3" fill="#4ade80"/>
  <text x="495.0" y="418" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">History of the figures — nothing to propose</text>
  <circle cx="719.0" cy="415" r="3" fill="#fb923c"/>
  <text x="727.0" y="418" fill="#cbd5e1" fontSize="6.9" fontFamily="system-ui, sans-serif">Size of the servers — a proposal</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three ranks</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">at its limit · to plan · to know</text>
  <line x1="200" y1="87.0" x2="252" y2="74" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsynimp-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What it rests on</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the figures, to check</text>
  <line x1="200" y1="157.0" x2="264" y2="120" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsynimp-arrow)"/>
  <rect x="20" y="326" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="341" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fifteen checks</text>
  <text x="30" y="354" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each with its outcome</text>
  <line x1="200" y1="343.0" x2="250" y2="347" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsynimp-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What to do</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">worded as a consultant would</text>
  <line x1="1000" y1="117.0" x2="600" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsynimp-arrow)"/>
  <rect x="20" y="398" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="413" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Not checked</text>
  <text x="30" y="426" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">too little was read: said</text>
  <line x1="200" y1="415.0" x2="250" y2="415" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsynimp-arrow)"/>
</svg>

Each proposal gives **What it rests on** — the figures, to check — and **What to do**. They come in three groups, the most pressing first:

| Group | What it holds |
|---|---|
| **Measured at its limit** | A Java heap near its maximum, an enterprise server's processor above 80 %, a database server whose load exceeds its processors — at the peak the snapshots kept, else as read now. |
| **To plan** | Everything on one machine, the database or the web tier sharing a machine, a single enterprise server for the users and the batch jobs, a single web instance, batch jobs that queue, a machine below Oracle's published minimum for what it carries, machines that act as enterprise servers and that Server Manager does not know. |
| **To know before a sizing** | No history of the figures yet (the peaks are not known), servers whose size is neither stated nor measured, a database that grows (with the yearly figure at the rate observed). |

### What was checked \{#checked\}

The block lists the fifteen checks with their outcome — **a proposal**, **nothing to propose**, or **not checked — not enough was read**: an absent proposal is never a silent one.

| Checks |
|---|
| Java heap of the web and AIS instances · Processor of the enterprise servers · Load of the database server · Batch jobs waiting · Machines against Oracle's minimum |
| Everything on one machine · The database on its own machine · Web and enterprise servers apart · More than one enterprise server · More than one web instance |
| More than one AIS instance · Servers Server Manager does not know · Growth of the database · History of the figures · Size of the servers |

---

## Get the report \{#report\}

**Get the report (PDF)**, at the top of the page, writes the Platform synthesis as a document for a reader who was not in front of the page, in the page's language: what needs attention, the architecture on a landscape page with each server's size and where each figure comes from, the capacity (the size of the platform, the batch jobs per day, how the figures moved) and what could be improved. The database sections take the words of the database read (*Data files*, *Transaction logs*, *Disk pools*, *Journals*…). A source that did not answer is named in the document.

The same document is on the **Reports** page (*JD Edwards platform synthesis*), with the language, the customer name written on the cover and **With the OCI estimate**: the [OCI target](./monitoring/oci-target.md) and its estimate are then added as a chapter, with their own choices (currency, licence, edition, high availability, recovery site, non-production platforms). The *Platform synthesis report* job sends it by mail every month (see [Jobs](./jobs.md)).

---

## Access \{#access\}

The page shows to the roles that hold its menu entry. It reads with the functions of the four Monitoring pages — `plugin:nomajde.architecture:*`, `plugin:nomajde.platform:*`, `plugin:nomajde.performance:*` and `plugin:nomajde.dbaudit:*` — and, for Capacity and Improvements, `plugin:nomajde.capacity:*`, `plugin:nomajde.sizing:*` and `plugin:nomajde.proposals:*`: a role that lacks one sees that tab not read. The PDF needs the right to run the application's reports. The predefined roles **Platform operator** and **Administrator** hold them all (see [Predefined roles](./overview.md#roles)).

It reads Server Manager through the `jde_server_manager` pool (see [Server Manager](./monitoring/server-manager.md#connection)) and the JD Edwards database.

---

## Tips & best practices \{#tips\}

- Start with **Attention**: a red line is where users wait now; the amber ones are tuning.
- After a restart of the servers the counters start from zero: read the page again once the platform has worked for a while.
- To prepare a meeting or an audit, **Get the report** gives the whole synthesis as a PDF; the **Architecture** tab gives the picture and the Architecture page saves it as SVG.
- Turn on the *Platform snapshot* job early: **Capacity** and **Improvements** read peaks only once a week or more of snapshots is kept.
- State the server sizes before reading **Improvements**: a machine on the standard configuration is a proposal *to know before a sizing*, not a fact.
- The assistant knows what the page shows — the figures and the points to act on first: ask it *JD Edwards is slow: where should I look first?* (see [AI assistant](./ai-assistant.md)).

---

## Related

- [Architecture](./monitoring/architecture.md) · [Platform analysis](./monitoring/platform-analysis.md) · [Performance](./monitoring/performance.md) · [Database audit](./monitoring/database-audit.md).
- [Server sizes](./monitoring/server-sizes.md) and [OCI target](./monitoring/oci-target.md) — the sizes Capacity reads, and the platform proposed on Oracle Cloud Infrastructure.
- [Prepare for upgrade](./upgrade/analysis.md) — the other page under Platform synthesis.
- [Overview](./home.md) — the way in.
