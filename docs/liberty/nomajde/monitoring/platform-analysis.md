---
title: Platform analysis
description: "Monitoring → Platform analysis in Nomajde: the JD Edwards EnterpriseOne servers as Server Manager measures them now — six figures, what the figures say, the instances, the web and AIS nodes, the enterprise server processes, the business functions — and an instance's INI settings, read or compared with another's."
keywords: [Nomajde, JD Edwards, JDE E1, platform analysis, Server Manager, instances, enterprise server, kernel, zombie, Java heap, web server, AIS server, business functions, INI, jde.ini, compare INI]
---

# Platform analysis

**Monitoring → Platform analysis** reads what Server Manager measures now and reads it as an analysis: the figures, then **what the figures say** — the points to review first —, then the details by subject in four tabs. The figures are those of the console at the moment the page is read.

The page opens at once on the reading the server keeps — the last one, made by the [platform reading job](../jobs.md#platform-reading) or by anyone's last **Read again** — and the header says when it was made (*Read at 14:02*, with the day when it is older than today): an old figure is never taken for the present. **Read again** reads live, however long it takes, and replaces the kept reading for everybody. With no reading kept yet, the first opening reads live. The Monitoring pages — Platform synthesis, Architecture, Platform analysis, Performance and Database audit — share their readings: what one page has read, the others draw at once, and what one page reads again is fresh in the others.

---

## At a glance

<svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nplat-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nplat-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nplat-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nplat-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="416" rx="14" fill="url(#nplat-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Platform analysis</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The JD Edwards servers as Server Manager measures them now, and what the figures point at.</text>
  <rect x="885" y="34" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="922.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Read again</text>
  <text x="875" y="48.5" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Read at 14:02</text>
  <line x1="232" y1="74" x2="968" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="84" width="174.0" height="34" rx="7" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="248.0" y="92" width="18" height="18" rx="4" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="272.0" y="99" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Overview</text>
  <text x="272.0" y="111" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">The figures, what they say, the instances</text>
  <rect x="422.0" y="84" width="174.0" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="430.0" y="92" width="18" height="18" rx="4" fill="#4ade80" fillOpacity="0.18"/>
  <text x="454.0" y="99" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Servers</text>
  <text x="454.0" y="111" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">Web and AIS nodes, processes</text>
  <rect x="604.0" y="84" width="174.0" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="612.0" y="92" width="18" height="18" rx="4" fill="#c084fc" fillOpacity="0.18"/>
  <text x="636.0" y="99" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Business functions</text>
  <text x="636.0" y="111" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">Calls, times, timeouts and errors</text>
  <rect x="786.0" y="84" width="174.0" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="794.0" y="92" width="18" height="18" rx="4" fill="#fb923c" fillOpacity="0.18"/>
  <text x="818.0" y="99" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">INI settings</text>
  <text x="818.0" y="111" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">An instance's INI, read or compared</text>
  <rect x="240.0" y="128" width="113.33333333333333" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="147" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">4 / 4</text>
  <text x="250.0" y="160" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSTANCES RUNNING</text>
  <rect x="361.3333333333333" y="128" width="113.33333333333333" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="371.3333333333333" y="147" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">36</text>
  <text x="371.3333333333333" y="160" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERVER PROCESSES</text>
  <rect x="482.66666666666663" y="128" width="113.33333333333333" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="492.66666666666663" y="147" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="492.66666666666663" y="160" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ZOMBIE PROCESSES</text>
  <rect x="604.0" y="128" width="113.33333333333333" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="614.0" y="147" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">18</text>
  <text x="614.0" y="160" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SESSIONS</text>
  <rect x="725.3333333333333" y="128" width="113.33333333333333" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="735.3333333333333" y="147" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">12,480</text>
  <text x="735.3333333333333" y="160" fill="#64748b" fontSize="6.4" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BUSINESS FUNCTION CALLS</text>
  <rect x="846.6666666666666" y="128" width="113.33333333333333" height="40" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="856.6666666666666" y="147" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="856.6666666666666" y="160" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OF THEM IN ERROR</text>
  <rect x="240" y="180" width="720" height="112" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="196" fill="#e2e8f0" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">WHAT THE FIGURES SAY</text>
  <line x1="241" y1="204" x2="959" y2="204" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="219" r="3.5" fill="#fb923c"/>
  <text x="266" y="222" fill="#64748b" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ENTERPRISE SERVER</text>
  <text x="392" y="222" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">2 zombie process(es) on ENT_PD: … to review with the enterprise server's logs.</text>
  <circle cx="256" cy="238" r="3.5" fill="#4a9eff"/>
  <text x="266" y="241" fill="#64748b" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">BUSINESS FUNCTIONS</text>
  <text x="392" y="241" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">B4200310 takes 41 ms on average over 920 calls — the others' median is 3 ms.</text>
  <circle cx="256" cy="257" r="3.5" fill="#4ade80"/>
  <text x="266" y="260" fill="#64748b" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">INSTANCES</text>
  <text x="392" y="260" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">The 4 instances are running.</text>
  <circle cx="256" cy="276" r="3.5" fill="#4ade80"/>
  <text x="266" y="279" fill="#64748b" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">WEB AND AIS</text>
  <text x="392" y="279" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">The 2 web / AIS node(s) have room in their Java heap.</text>
  <rect x="240" y="304" width="720" height="116" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="320" fill="#e2e8f0" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">INSTANCES</text>
  <rect x="250" y="330" width="700" height="84" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="330" width="700" height="20" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="343.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">INSTANCE</text>
  <text x="480" y="343.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">TYPE</text>
  <text x="680" y="343.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">STATE</text>
  <text x="830" y="343.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">VERSION</text>
  <text x="260" y="363.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">ENT_PD</text>
  <text x="480" y="363.5" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">entserver</text>
  <text x="680" y="363.5" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">RUNNING</text>
  <text x="830" y="363.5" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">9.2.x</text>
  <line x1="251" y1="370" x2="949" y2="370" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="383.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">HTML_PD</text>
  <text x="480" y="383.5" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">webserver</text>
  <text x="680" y="383.5" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">RUNNING</text>
  <text x="830" y="383.5" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">9.2.x</text>
  <line x1="251" y1="390" x2="949" y2="390" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="403.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AIS_PD</text>
  <text x="480" y="403.5" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">restserver</text>
  <text x="680" y="403.5" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">RUNNING</text>
  <text x="830" y="403.5" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">9.2.x</text>
  <line x1="251" y1="410" x2="949" y2="410" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four tabs</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a tab says what is to review</text>
  <line x1="200" y1="97.0" x2="244" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nplat-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six figures</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">live from Server Manager</text>
  <line x1="200" y1="157.0" x2="240" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nplat-arrow)"/>
  <rect x="20" y="232" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What the figures say</text>
  <text x="30" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">amber to review, green nothing</text>
  <line x1="200" y1="249.0" x2="254" y2="219" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nplat-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">INI settings</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read one, or compare two</text>
  <line x1="1000" y1="117.0" x2="920" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nplat-arrow)"/>
  <rect x="1000" y="36" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="51" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Read again</text>
  <text x="1010" y="64" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">live, for everybody</text>
  <line x1="1000" y1="53.0" x2="960" y2="44" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nplat-arrow)"/>
  <rect x="1000" y="350" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Instances</text>
  <text x="1010" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one not running shows amber</text>
  <line x1="1000" y1="367.0" x2="700" y2="380" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nplat-arrow)"/>
</svg>

---

## The four tabs \{#tabs\}

Each tab says, beside its description, how many of its points are to review.

| Tab | Content |
|---|---|
| **Overview** | Six figures — **instances running**, **server processes**, **zombie processes**, **sessions**, **business function calls**, **of them in error** —, **What the figures say** and the list of **Instances** (instance, type, state, version). |
| **Servers** | The **Web and AIS** nodes — up for, users online, Java heap used against its maximum, with a bar — and the enterprise server **Processes**: waiting requests, open transactions, database connections, threads, memory, users; the busiest first. |
| **Business functions** | Calls, average and longest time, timeouts, system and application errors; the ones in error or the slowest first. |
| **INI settings** | An instance's INI, read or compared with another's. |

---

## What the figures say \{#findings\}

Each line names its area and is marked amber (to review), blue (to know) or green (nothing to flag):

- an instance that is not running;
- zombie processes on an enterprise server — to review with its logs;
- a kernel with requests waiting, or many transactions open;
- a business function that times out, fails, or is far slower than the others' median;
- a Java heap above 80 % of its maximum, a web server restarted a moment ago.

An area with nothing to flag says so: *The 4 instances are running.*

---

## INI settings \{#ini\}

Pick **An instance**, optionally another under **Compared with**, then **Read its INI**. Alone, the INI is listed by section and setting; compared, only the settings that differ are listed, with the value of each instance. **Find a section or a setting…** narrows the list as you type. Server Manager takes a few seconds to answer an INI; the result stays in place when you switch tabs.

---

## Access \{#access\}

The page shows to the roles that hold its menu entry and the permissions `plugin:nomajde.platform:*`. It reads Server Manager through the `jde_server_manager` connector for the user: the permissions of the [Server Manager services](./server-manager.md#catalogue) do not apply here.

---

## Tips & best practices \{#tips\}

- Read the **Overview** tab after a deployment or a restart: an amber line is where to start.
- Compare the INI of two enterprise servers that should be identical: a difference is often the cause of a behaviour seen on one server only.
- The server log files are not read — the console only lists the signed-in user's own logs.

---

## Related

- [Performance](./performance.md) — the advice drawn from the same figures and the database.
- [Server Manager](./server-manager.md) — the same figures as grids, with filters and exports.
- [JDE Health Check](./jde-servers.md) — the checks kept over time.
