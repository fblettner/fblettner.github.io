---
title: Platform synthesis
description: "Platform synthesis in Nomajde: the JD Edwards EnterpriseOne platform at a glance — six figures, one list of what the server, performance and database analyses flag, the most serious first, then the architecture diagram and one tab per analysis with a way to its full page. Read live, read-only."
keywords: [Nomajde, JD Edwards, JDE E1, platform synthesis, monitoring, Server Manager, architecture, performance, database audit, points to review, instances running, users online, business functions, database size]
---

# Platform synthesis

**Platform synthesis**, right under **Overview** in the Nomajde menu, puts the JD Edwards EnterpriseOne platform on one page: six figures, then **what needs attention** across the three analyses of the Monitoring folder — [Platform analysis](./monitoring/platform-analysis.md), [Performance](./monitoring/performance.md) and [Database audit](./monitoring/database-audit.md) — in one list, the most serious first, and the [architecture](./monitoring/architecture.md) as it is found. It is the page to open first when the question is "how is the platform doing?"; each tab leads to the full page behind it.

Everything is read live, each time the page is opened or **Read again** is clicked, and nothing is kept: the page only reads.

---

## At a glance

<svg viewBox="0 0 1200 388" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nsyn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nsyn-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nsyn-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nsyn-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="344" rx="14" fill="url(#nsyn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Platform synthesis</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The JD Edwards platform at a glance: what needs attention, its architecture, and what each analysis says.</text>
  <rect x="885" y="34" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="922.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Read again</text>
  <line x1="232" y1="74" x2="968" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="86" width="113.33333333333333" height="42" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="105" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">4 / 5</text>
  <text x="250.0" y="120" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSTANCES RUNNING</text>
  <rect x="361.3333333333333" y="86" width="113.33333333333333" height="42" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="371.3333333333333" y="105" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">38</text>
  <text x="371.3333333333333" y="120" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USERS ONLINE</text>
  <rect x="482.66666666666663" y="86" width="113.33333333333333" height="42" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="492.66666666666663" y="105" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">12,480</text>
  <text x="492.66666666666663" y="120" fill="#64748b" fontSize="6.4" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BUSINESS FUNCTION CALLS</text>
  <rect x="604.0" y="86" width="113.33333333333333" height="42" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="614.0" y="105" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">214 GB</text>
  <text x="614.0" y="120" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATABASE SIZE</text>
  <rect x="725.3333333333333" y="86" width="113.33333333333333" height="42" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="735.3333333333333" y="105" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="735.3333333333333" y="120" fill="#64748b" fontSize="5.6" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOT DECLARED IN SERVER MANAGER</text>
  <rect x="846.6666666666666" y="86" width="113.33333333333333" height="42" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="856.6666666666666" y="105" fill="#f87171" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">5</text>
  <text x="856.6666666666666" y="120" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POINTS TO REVIEW</text>
  <rect x="240.0" y="138" width="137.6" height="34" rx="7" fill="rgba(74,158,255,0.10)" stroke="#fb923c" strokeWidth="1.2"/>
  <rect x="248.0" y="146" width="18" height="18" rx="4" fill="#fb923c" fillOpacity="0.18"/>
  <text x="272.0" y="153" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Attention</text>
  <text x="272.0" y="165" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">What the analyses flag…</text>
  <rect x="385.6" y="138" width="137.6" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="393.6" y="146" width="18" height="18" rx="4" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="417.6" y="153" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Architecture</text>
  <text x="417.6" y="165" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">What Server Manager…</text>
  <rect x="531.2" y="138" width="137.6" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="539.2" y="146" width="18" height="18" rx="4" fill="#4ade80" fillOpacity="0.18"/>
  <text x="563.2" y="153" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Servers</text>
  <text x="563.2" y="165" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">Instances, processes…</text>
  <rect x="676.8" y="138" width="137.6" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="684.8" y="146" width="18" height="18" rx="4" fill="#c084fc" fillOpacity="0.18"/>
  <text x="708.8" y="153" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Performance</text>
  <text x="708.8" y="165" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">… · 3 to review</text>
  <rect x="822.4" y="138" width="137.6" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="830.4" y="146" width="18" height="18" rx="4" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="854.4" y="153" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Database</text>
  <text x="854.4" y="165" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">… · 1 to review</text>
  <rect x="240" y="184" width="720" height="164" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="184" width="720" height="24" rx="8" fill="rgba(255,255,255,0.04)"/>
  <text x="252" y="200" fill="#e2e8f0" fontSize="8.2" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">WHAT NEEDS ATTENTION</text>
  <text x="252" y="224" fill="#64748b" fontSize="7.2" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TO ACT ON FIRST</text>
  <circle cx="256" cy="237" r="3.2" fill="#f87171"/>
  <text x="266" y="240" fill="#94a3b8" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PERFORMANCE</text>
  <text x="354" y="240" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Business functions</text>
  <text x="452" y="240" fill="#e2e8f0" fontSize="8.2" fontFamily="system-ui, sans-serif">B4200310 takes 41% of all the time measured — 38 s over 920 call(s), 41 ms each</text>
  <text x="252" y="258" fill="#64748b" fontSize="7.2" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TO REVIEW</text>
  <circle cx="256" cy="271" r="3.2" fill="#fb923c"/>
  <text x="266" y="274" fill="#94a3b8" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SERVERS</text>
  <text x="354" y="274" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Instances</text>
  <text x="452" y="274" fill="#e2e8f0" fontSize="8.2" fontFamily="system-ui, sans-serif">Instance AIS_PD (restserver) is not running: STOPPED.</text>
  <circle cx="256" cy="289" r="3.2" fill="#fb923c"/>
  <text x="266" y="292" fill="#94a3b8" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SERVERS</text>
  <text x="354" y="292" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Enterprise server</text>
  <text x="452" y="292" fill="#e2e8f0" fontSize="8.2" fontFamily="system-ui, sans-serif">2 zombie process(es) on ENT_PD: processes that ended without being cleaned up — …</text>
  <circle cx="256" cy="307" r="3.2" fill="#fb923c"/>
  <text x="266" y="310" fill="#94a3b8" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PERFORMANCE</text>
  <text x="354" y="310" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Caches</text>
  <text x="452" y="310" fill="#e2e8f0" fontSize="8.2" fontFamily="system-ui, sans-serif">JDBj Security Cache on HTML_PD answers 72% of the time (184,210 accesses, 3 items)</text>
  <circle cx="256" cy="325" r="3.2" fill="#fb923c"/>
  <text x="266" y="328" fill="#94a3b8" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DATABASE</text>
  <text x="354" y="328" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">The instance</text>
  <text x="452" y="328" fill="#e2e8f0" fontSize="8.2" fontFamily="system-ui, sans-serif">The database is in NOARCHIVELOG mode: no recovery to a point in time.</text>
  <rect x="1000" y="36" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="51" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Read again</text>
  <text x="1010" y="64" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">every analysis, each on its own</text>
  <line x1="1000" y1="53.0" x2="960" y2="44" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six figures</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">amber or red when to look at</text>
  <line x1="200" y1="107.0" x2="240" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Points to review</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the Attention list, counted</text>
  <line x1="1000" y1="117.0" x2="940" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Five tabs</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the count to review on each</text>
  <line x1="200" y1="167.0" x2="240" y2="155" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The other tabs</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what it says + its full page</text>
  <line x1="1000" y1="177.0" x2="880" y2="152" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Most serious first</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">act on first, then review</text>
  <line x1="200" y1="257.0" x2="252" y2="221" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="20" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Where it comes from</text>
  <text x="30" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the analysis and its area</text>
  <line x1="200" y1="337.0" x2="266" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
  <rect x="1000" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Each fact once</text>
  <text x="1010" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">worded as its own page</text>
  <line x1="1000" y1="307.0" x2="780" y2="294" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsyn-arrow)"/>
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

The **Servers**, **Performance** and **Database** tabs list every line of their analysis — those to review and those that are fine — and **Open the full page** leads to the page with the figures, the details and the grids.

Every analysis is read on its own: one that fails or is slow does not hide the others. An analysis that did not answer is said in a warning (*Not read — Performance: …*) and the rest of the page is shown.

---

## Access \{#access\}

The page shows to the roles that hold its menu entry. It reads with the functions of the four Monitoring pages — `plugin:nomajde.architecture:*`, `plugin:nomajde.platform:*`, `plugin:nomajde.performance:*` and `plugin:nomajde.dbaudit:*`: a role that lacks one sees that tab not read. The predefined roles **Platform operator** and **Administrator** hold them all (see [Predefined roles](./overview.md#roles)).

It reads Server Manager through the `jde_server_manager` pool (see [Server Manager](./monitoring/server-manager.md#connection)) and the JD Edwards database.

---

## Tips & best practices \{#tips\}

- Start with **Attention**: a red line is where users wait now; the amber ones are tuning.
- After a restart of the servers the counters start from zero: read the page again once the platform has worked for a while.
- To prepare a meeting or an audit, the **Architecture** tab gives the picture and the Architecture page saves it as SVG.
- The assistant knows what the page shows — the figures and the points to act on first: ask it *JD Edwards is slow: where should I look first?* (see [AI assistant](./ai-assistant.md)).

---

## Related

- [Architecture](./monitoring/architecture.md) · [Platform analysis](./monitoring/platform-analysis.md) · [Performance](./monitoring/performance.md) · [Database audit](./monitoring/database-audit.md).
- [Prepare for upgrade](./upgrade/analysis.md) — the other page under Platform synthesis.
- [Overview](./home.md) — the way in.
