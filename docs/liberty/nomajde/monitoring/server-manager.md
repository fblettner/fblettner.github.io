---
title: Server Manager
description: "Monitoring → Server Manager in Nomajde: seven screens that read the JD Edwards Server Manager console live — instances, connected users, enterprise servers, server processes, business function calls and errors, web and AIS servers with their Java memory, JDBj caches — with advanced filters, pick-lists, starting, stopping and restarting an instance and clearing a cache from a row, and the catalogue of Server Manager REST services behind them."
keywords: [Nomajde, JD Edwards, Server Manager, monitoring, instances, connected users, enterprise server, kernel, business functions, Java heap, AIS server, web server, JDBj cache, clear cache, start instance, stop instance, restart instance, REST API]
---

# Server Manager

**Monitoring → Server Manager** shows what the JD Edwards Server Manager console knows, in seven Nomajde grids: the instances and their state, who is connected, the load of the enterprise servers and of their processes, the business function calls and errors, the Java memory of the web and AIS servers, the JDBj caches of the HTML servers. A row's menu starts, stops or restarts an instance, or clears a cache. The screens read the console **live** each time they are opened or refreshed; nothing is stored in Nomajde.

For the health of the servers over time — checks every five minutes, availability, alerts — see [JDE Health Check](./jde-servers.md); to watch the instances and restart one that fails, see the *Instances watch* job in [Jobs](../jobs.md).

---

## At a glance

<svg viewBox="0 0 1200 374" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="smg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="smg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="smg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="smg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="22" width="760" height="332" rx="14" fill="url(#smg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">JDBj caches</text>
  <rect x="240" y="62" width="720" height="22" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="77" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">› ⚲ Advanced filters</text>
  <text x="240" y="102" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">8 rows · 320 ms</text>
  <rect x="240" y="110" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="124.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="396" y="110" width="47" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="419.5" y="124.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="900" y="110" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="930.0" y="124.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="840" y="110" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="867.5" y="124.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="770" y="110" width="65" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="802.5" y="124.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Group (1)</text>
  <rect x="710" y="110" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="737.5" y="124.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="660" y="110" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="682.5" y="124.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="240" y="142" width="720" height="182" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="142" width="720" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="266" y="157.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">INSTANCE</text>
  <text x="346" y="157.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">NODE</text>
  <text x="401" y="157.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">CACHE</text>
  <text x="632" y="157.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">ITEMS</text>
  <text x="702" y="157.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">ACCESSES</text>
  <text x="772" y="157.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">HITS</text>
  <text x="842" y="157.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">MISSES</text>
  <text x="942" y="157.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">HIT RATIO</text>
  <rect x="246" y="170" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="180" fill="#94a3b8" fontSize="7" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="266" y="180.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="346" y="180.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="401" y="180.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="632" y="180.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="702" y="180.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="772" y="180.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="842" y="180.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="942" y="180.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <line x1="241" y1="188" x2="959" y2="188" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="192" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="202" fill="#94a3b8" fontSize="7" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="266" y="202.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="346" y="202.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="401" y="202.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JDBj OCM Cache</text>
  <text x="632" y="202.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1485</text>
  <text x="702" y="202.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">129766</text>
  <text x="772" y="202.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">129540</text>
  <text x="842" y="202.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">226</text>
  <text x="942" y="202.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">0.998</text>
  <line x1="241" y1="210" x2="959" y2="210" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="214" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="224" fill="#94a3b8" fontSize="7" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="266" y="224.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="346" y="224.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="401" y="224.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JDBj Service Cache</text>
  <text x="632" y="224.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">192</text>
  <text x="702" y="224.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">15377</text>
  <text x="772" y="224.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">13976</text>
  <text x="842" y="224.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1401</text>
  <text x="942" y="224.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">0.909</text>
  <line x1="241" y1="232" x2="959" y2="232" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="236" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="246" fill="#94a3b8" fontSize="7" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="266" y="246.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="346" y="246.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="401" y="246.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Data Dictionary Alpha Cache</text>
  <text x="632" y="246.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">4</text>
  <text x="702" y="246.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">340</text>
  <text x="772" y="246.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">244</text>
  <text x="842" y="246.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">96</text>
  <text x="942" y="246.5" fill="#fb923c" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">0.718</text>
  <line x1="241" y1="254" x2="959" y2="254" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="258" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="268" fill="#94a3b8" fontSize="7" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="266" y="268.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="346" y="268.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="401" y="268.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Serialized Objects</text>
  <text x="632" y="268.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1697</text>
  <text x="702" y="268.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">10633</text>
  <text x="772" y="268.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">8630</text>
  <text x="842" y="268.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2003</text>
  <text x="942" y="268.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">0.812</text>
  <line x1="241" y1="276" x2="959" y2="276" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="280" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="290" fill="#94a3b8" fontSize="7" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="266" y="290.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="346" y="290.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="401" y="290.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JDBj Security Cache</text>
  <text x="632" y="290.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1256</text>
  <text x="702" y="290.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">16574</text>
  <text x="772" y="290.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">13564</text>
  <text x="842" y="290.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3010</text>
  <text x="942" y="290.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">0.818</text>
  <line x1="241" y1="298" x2="959" y2="298" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="302" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="312" fill="#94a3b8" fontSize="7" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="266" y="312.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="346" y="312.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="401" y="312.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Menu Cache</text>
  <text x="632" y="312.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">0</text>
  <text x="702" y="312.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">519</text>
  <text x="772" y="312.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">322</text>
  <text x="842" y="312.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">197</text>
  <text x="942" y="312.5" fill="#fb923c" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">0.62</text>
  <line x1="241" y1="320" x2="959" y2="320" stroke="#1f2937" strokeWidth="1"/>
  <rect x="241" y="167" width="718" height="21" fill="#111827"/>
  <text x="266" y="181" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">⌄ HTML_PD</text>
  <text x="326" y="181" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">(8)</text>
  <rect x="254" y="216" width="230" height="50" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="266" y="235" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Clear this cache</text>
  <text x="266" y="255" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Clear every cache of this server</text>
  <text x="472" y="235" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">chain</text>
  <text x="472" y="255" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">chain</text>
  <text x="240" y="342" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Rows per page 50 · Showing 1–9 of 9 · 8 rows total</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Advanced filters</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pick-lists: instance, state…</text>
  <line x1="200" y1="77.0" x2="250" y2="73" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
  <rect x="20" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grouped by instance</text>
  <text x="30" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one block per server</text>
  <line x1="200" y1="197.0" x2="266" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
  <rect x="20" y="270" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row menu</text>
  <text x="30" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">clear one cache, or all of them</text>
  <line x1="200" y1="287.0" x2="258" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Group (1)</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on by default; ungroup here</text>
  <line x1="1000" y1="117.0" x2="802.5" y2="121" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Hit ratio</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">low = asked again from the DB</text>
  <line x1="1000" y1="247.0" x2="940" y2="309" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
</svg>

---

## The screens \{#screens\}

Every screen loads when opened and only reads; the row actions below are the only changes made from them. Each one asks the console for its instances, then reads every **running** instance of the right kind together: one grid covers the whole platform. An instance that is stopped, or that the console refuses to answer for, keeps a row whose **Note** column says why — `not running (STOPPED)` for example.

| Menu entry | What it lists | Main columns |
|---|---|---|
| **Instances** (*JDE instances*) | Every instance the console manages. | Instance, Type, State, Tools release, Host, JDE home. |
| **Connected users** | The web and AIS sessions — and, on request, the enterprise server processes each user is connected to. | User, Session, Instance, Environment, Role, From, Open applications, Signed in at, Idle (seconds), Last active, Process. |
| **Enterprise servers** | One row per enterprise server. | Instance, Host, Up for, Network jobs, Kernel jobs, Zombie processes, Security kernel users, Call object users, CPU, Memory. |
| **Server processes** | Each kernel and network listener of the enterprise servers. | Process, Process id, Instance, Kind, Process state (*Running* or *Zombie*, from the console's own status of the process), Users, Connected, Outstanding requests, Messages received, Memory, CPU, Threads, Database connections, Open transactions, Started, Last message. |
| **Business functions** | The business function calls seen by each web server. | Business function, Calls, Average (ms), Longest (ms), Timeouts, Application errors, System errors, Total (ms), Shortest (ms), Instance, Enterprise server. |
| **Web and AIS servers** | Each web and AIS node. | Instance, Node, Type, Up for, Online users, Sign-in, Java heap used (MB), Java heap maximum (MB), Java heap used (percent). |
| **JDBj caches** | Each JDBj cache of the HTML servers. | Instance, Node, Cache, Items, Accesses, Hits, Misses, Hit ratio. |

Figures are numbers: they sort, total and export as such. **JDBj caches**, **Server processes** and **Business functions** hold many lines per server: they open **grouped by instance**, so that several web or enterprise servers read apart — **Group** in the toolbar ungroups them.

### Connected users \{#users\}

The **Show** dropdown above the grid chooses between **Sessions** — the web and AIS sessions, the default — and **Sessions and server processes**, which adds the enterprise server processes each user is connected to. The grid is empty when nobody is signed in.

---

## Starting, stopping and restarting an instance \{#start-stop\}

The **Instances** screen (*JDE instances*) has three row actions in each row's menu (**···**). Each one asks for a confirmation first, then reads the list again.

<svg viewBox="0 0 1200 268" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nsmi-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nsmi-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nsmi-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nsmi-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="760" height="236" rx="14" fill="url(#nsmi-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">JDE instances</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Every instance Server Manager manages, with its type and state — read live.</text>
  <rect x="240" y="80" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <text x="284" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSTANCE</text>
  <text x="394" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="490" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATE</text>
  <text x="582" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOOLS RELEASE</text>
  <text x="682" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HOST</text>
  <text x="794" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE HOME</text>
  <rect x="240" y="112" width="720" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="127.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">···</text>
  <text x="284" y="127.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ENT_PD</text>
  <text x="394" y="127.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">entserver</text>
  <rect x="490" y="116.0" width="51" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="515.5" y="127.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">RUNNING</text>
  <text x="582" y="127.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">9.2.26.2</text>
  <text x="682" y="127.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDEENT01</text>
  <text x="794" y="127.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">/u01/jde_home/SCFHA</text>
  <rect x="240" y="140" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="155.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">···</text>
  <text x="284" y="155.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">HTML_PD</text>
  <text x="394" y="155.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">webserver</text>
  <rect x="490" y="144.0" width="51" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="515.5" y="155.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">RUNNING</text>
  <text x="582" y="155.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">9.2.26.2</text>
  <text x="682" y="155.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDEWEB01</text>
  <text x="794" y="155.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">/u01/jde_home/SCFHA</text>
  <rect x="240" y="168" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="183.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">···</text>
  <text x="284" y="183.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AIS_PD</text>
  <text x="394" y="183.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">restserver</text>
  <rect x="490" y="172.0" width="51" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="515.5" y="183.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">STOPPED</text>
  <text x="582" y="183.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">9.2.26.2</text>
  <text x="682" y="183.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDEWEB01</text>
  <text x="794" y="183.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">/u01/jde_home/SCFHA</text>
  <rect x="266" y="158" width="210" height="78" rx="7" fill="#0f172a" stroke="#334155" strokeWidth="1"/>
  <text x="280" y="177" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Start this instance</text>
  <text x="280" y="201" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Stop this instance</text>
  <rect x="270" y="210" width="202" height="22" rx="5" fill="rgba(74,158,255,0.14)"/>
  <text x="280" y="225" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">Restart this instance</text>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row menu (···)</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on each instance</text>
  <line x1="200" y1="137.0" x2="254" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsmi-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Start · Stop</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sent to Server Manager as is</text>
  <line x1="200" y1="217.0" x2="266" y2="188" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsmi-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Restart</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">stop, wait, start, wait</text>
  <line x1="1000" y1="167.0" x2="476" y2="221" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsmi-arrow)"/>
  <rect x="1000" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">State</text>
  <text x="1010" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">refreshed after the action</text>
  <line x1="1000" y1="97.0" x2="520" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsmi-arrow)"/>
</svg>

| Row action | What happens |
|---|---|
| **Start this instance** | Sent to Server Manager as it is. Server Manager starts the instance; refresh the list to follow its state. |
| **Stop this instance** | Sent to Server Manager as it is. Its users are disconnected and what they were doing is lost. |
| **Restart this instance** | Liberty stops the instance, waits until Server Manager says it is stopped, starts it and waits until it runs — a few minutes. An instance that does not stop is **not** started again; an instance that does not come back says so. In both cases the message gives the state it was left in, to look at in Server Manager. An instance found stopped is simply started. |

Everything goes through Server Manager's REST API: nothing is installed on the JD Edwards servers.

The **Instances watch** job asks every enterprise, HTML and AIS server for its state and for the console's own health checks, keeps what is wrong and alerts; it can also restart an instance whose checks fail, within guards. It is described in [Jobs](../jobs.md).

---

## Clearing a cache \{#actions\}

Three screens clear a cache from a row's menu (**···**). Each action asks for a confirmation first, and has its own permission.

| Screen | Row action | Clears |
|---|---|---|
| **Web and AIS servers** | **Clear data caches** | On an HTML server, its form extension, personalized form and search group caches; on an AIS server, its orchestration, form and data service and read data caches. |
| **Web and AIS servers** | **Clear JDBj caches** | Every JDBj cache of an HTML server — data dictionary, menus, security, serialized objects… On an AIS server's line, the action says it belongs to an HTML server. |
| **Enterprise servers** | **Clear a table's cache…** | Asks for the table and the environment (a name, or `ALL`); the answer says how many processes were cleared. |
| **JDBj caches** | **Clear this cache**, **Clear every cache of this server** | The cache of the row, or every JDBj cache of its server. The list is read again afterwards. |

---

## Filters \{#filters\}

Nothing is typed above the grids: the columns are in the **advanced filters**, with the same operators as any Nomajde grid. Where the values are known the filter is a pick-list:

| Filter | Values |
|---|---|
| **State** | `RUNNING`, `STOPPED`, `UNKNOWN`. |
| **Session** (Connected users) | `Web session`, `AIS session`, `Enterprise server process`. |
| **Kind** (Server processes) | `Kernel Process`, `Network Listener`. |
| **Instance** | The instances of the console, listed live with their type. |

A filter applies to the rows the console returned: it narrows what is shown, not what is asked from the console.

---

## The Server Manager connection \{#connection\}

The screens use the `jde_server_manager` connector, the one the [health check](./jde-servers.md#job) already uses. The connector holds no address and no account: it names the **`jde_server_manager` pool**, where the console is set once. In **Liberty Next → Administer → Pools**, open that pool (kind *HTTP server (an API)*) and set the address of the console's REST service with its account (`jde_admin` by default), its password and whether the TLS certificate is checked. The account's rights in Server Manager decide what it may read.

At installation the pool can be filled from the server's environment instead: `JDE_SM_URL` (the address with its account) and `JDE_SM_VERIFY_SSL` (`true` by default). See [Pools](../../framework/connectors.md#pools).

---

## The catalogue of Server Manager services \{#catalogue\}

Beyond the screens, the connector carries a catalogue of the Server Manager REST services, written from Oracle's guide: each endpoint has its parameters explained, and its own permission, so that a role can be given one service and not the others. They can be called from the connector's **Test** tab, a screen action, a job step or the [AI assistant](../../framework/ai-assistant.md).

| Heading | Content |
|---|---|
| **Monitoring** | Instances, homes and agents, path codes, WebLogic domains and servers, components and their versions, INI configuration, log files. |
| **Runtime Metrics** | Enterprise server activity and processes, business function statistics, Java memory, JDBj connections and caches, connected users, user sessions. |
| **Manage and Update Operations** | Start or stop an instance, every instance or a WebLogic server, refresh the environments, clear the data caches. |
| **Server Group**, **User Log Configuration**, others | Server groups, saved configurations, the log level of a user. |

The services that **change the platform** — start and stop an instance, start and stop every instance, start and stop a WebLogic server, refresh the environments, change a log level, clear the data caches, the JDBj caches or a table's cache — are marked as such: the AI assistant never calls one without showing a card to approve first, and only for a user allowed to change data through it.

Provisioning (create, register or delete an instance), passwords, TLS, users and groups, save and restore, and the updates of the agents and of the console are left out of the catalogue on purpose.

---

## Access \{#access\}

Each screen shows to the roles that hold its menu entry. **Start this instance** and **Stop this instance** call the services `sm_startinstance` and `stopinstance` and need their API endpoint permission; **Restart this instance** runs with `plugin:nomajde.instances:*`, which the predefined roles **Platform operator** and **Administrator** hold. A raw service of the catalogue needs the permission `api:jde_server_manager:<service>` (rule type **API endpoint** in a role's *Beyond the menus* rules): grant the reading ones widely, those that change the platform — the cache clearing of the row menus included — to the platform team only.

---

## Tips & best practices \{#tips\}

- Start with **Instances**: an instance that is not `RUNNING` explains an empty line in the other screens.
- Prefer **Restart this instance** to a stop followed by a start: it waits for the stop to be over, where a start sent too early does nothing.
- In **Server processes**, sort on **Outstanding requests** or **CPU** to find the kernel that holds a queue; sort on **Process state** to bring together the *Zombie* processes — those that ended without being cleaned up.
- In **Business functions**, sort on **System errors** or **Timeouts** after a deployment: a function that fails on one web server only points at that server.
- **Web and AIS servers** — a heap used close to its maximum over several refreshes is the signal to look at before the users call.
- **JDBj caches** — a low **Hit ratio** just after a restart is normal; one that stays low points at a cache too small for what is used. Clear a cache after changing what it holds in JD Edwards (security, menus, data dictionary) rather than restarting the server.

---

## Related

- [JDE Health Check](./jde-servers.md) — the checks kept over time and their alerts.
- [Performance](./performance.md) and [Platform analysis](./platform-analysis.md) — the same console read as advice and as an analysis.
- [JD Edwards services (AIS)](../ais/services.md) — the same approach for the AIS server.
- [Overview — the way in](../home.md).
