---
title: JDE Health Check
description: "Monitoring → JDE Health Check in Nomajde: every health check of the JD Edwards enterprise, web and REST servers seen by Server Manager — state, health, failed checks, action taken — over a period, the history of a server, the overview figures and the job that collects them."
keywords: [Nomajde, JD Edwards, monitoring, Server Manager, health check, enterprise server, web server, AIS, availability, nomajde-jde-health]
---

# JDE Health Check

**Monitoring → JDE Health Check** lists the health checks of the JD Edwards servers, newest first: one row per instance and per check, with its state in Server Manager, the health result, the checks that failed and the action taken. The checks come from the [`nomajde-jde-health`](#job) job, which queries Server Manager every five minutes once enabled.

---

## At a glance

<svg viewBox="0 0 1200 412" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jhc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jhc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jhc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jhc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="372" rx="14" fill="url(#jhc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Every health check of the JDE servers, newest first.</text>
  <rect x="240" y="60" width="720" height="22" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="75" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">› Advanced filters (1)</text>
  <rect x="874" y="63" width="80" height="16" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="914.0" y="74.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Clear filters</text>
  <rect x="240" y="92" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="106.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="396" y="92" width="47" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="419.5" y="106.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="900" y="92" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="930.0" y="106.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="840" y="92" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="867.5" y="106.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="790" y="92" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="812.5" y="106.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="730" y="92" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="757.5" y="106.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="680" y="92" width="45" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="702.5" y="106.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="240" y="124" width="720" height="116" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="124" width="720" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="139.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">HOST</text>
  <text x="340" y="139.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">INSTANCE</text>
  <text x="420" y="139.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">SERVER TYPE</text>
  <text x="510" y="139.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">STATE</text>
  <text x="590" y="139.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">HEALTH</text>
  <text x="660" y="139.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">FAILED CHECKS</text>
  <text x="810" y="139.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">ACTION</text>
  <text x="880" y="139.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">CHECKED AT</text>
  <text x="250" y="162.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jde-ent01</text>
  <text x="340" y="162.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">ENT_PD</text>
  <text x="420" y="162.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">entserver</text>
  <text x="510" y="162.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">RUNNING</text>
  <text x="590" y="162.5" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">passed</text>
  <text x="660" y="162.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="810" y="162.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="880" y="162.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10:35</text>
  <line x1="241" y1="170" x2="959" y2="170" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="184.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jde-web01</text>
  <text x="340" y="184.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">HTML_PD</text>
  <text x="420" y="184.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">webserver</text>
  <text x="510" y="184.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">RUNNING</text>
  <text x="590" y="184.5" fill="#f87171" fontSize="8.5" fontFamily="ui-monospace, monospace">failed</text>
  <text x="660" y="184.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Login, Port Test</text>
  <text x="810" y="184.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">stopped</text>
  <text x="880" y="184.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10:35</text>
  <line x1="241" y1="192" x2="959" y2="192" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jde-ais01</text>
  <text x="340" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AIS_PD</text>
  <text x="420" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">restserver</text>
  <text x="510" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">STOPPED</text>
  <text x="590" y="206.5" fill="#fb923c" fontSize="8.5" fontFamily="ui-monospace, monospace">down</text>
  <text x="660" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="810" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="880" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10:35</text>
  <line x1="241" y1="214" x2="959" y2="214" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="228.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jde-ent01</text>
  <text x="340" y="228.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">ENT_PD</text>
  <text x="420" y="228.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">entserver</text>
  <text x="510" y="228.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">RUNNING</text>
  <text x="590" y="228.5" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">passed</text>
  <text x="660" y="228.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="810" y="228.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="880" y="228.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10:30</text>
  <line x1="241" y1="236" x2="959" y2="236" stroke="#1f2937" strokeWidth="1"/>
  <text x="242" y="258" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ON THE NOMAJDE OVERVIEW</text>
  <rect x="240" y="266" width="200" height="112" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="284" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE servers healthy</text>
  <text x="252" y="320" fill="#e2e8f0" fontSize="24" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="252" y="340" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">of 3 · 22/11/2026 10:35</text>
  <rect x="450" y="266" width="510" height="112" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="284" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">JDE servers</text>
  <rect x="460" y="293" width="3" height="20" fill="#f87171"/>
  <text x="470" y="304" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">HTML_PD</text>
  <rect x="513.3199999999999" y="294" width="43" height="13" rx="6.5" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="534.8199999999999" y="303.7" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Failed</text>
  <text x="600" y="304" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">webserver · jde-web01 · Login, Port Test · stopped</text>
  <text x="948" y="304" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">82 %</text>
  <rect x="460" y="317" width="3" height="20" fill="#f87171"/>
  <text x="470" y="328" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">AIS_PD</text>
  <rect x="508.56" y="318" width="34" height="13" rx="6.5" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="525.56" y="327.7" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Down</text>
  <text x="600" y="328" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">restserver · jde-ais01 · STOPPED</text>
  <text x="948" y="328" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">64 %</text>
  <rect x="460" y="341" width="3" height="20" fill="#4ade80"/>
  <text x="470" y="352" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">ENT_PD</text>
  <rect x="508.56" y="342" width="26" height="13" rx="6.5" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="521.56" y="351.7" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">OK</text>
  <text x="600" y="352" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">entserver · jde-ent01</text>
  <text x="948" y="352" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">100 %</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Advanced filters</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the last 7 days by default</text>
  <line x1="200" y1="77.0" x2="250" y2="71" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jhc-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Every check</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">newest first, read-only</text>
  <line x1="200" y1="167.0" x2="242" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jhc-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Healthy instances</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">out of the monitored ones</text>
  <line x1="200" y1="317.0" x2="252" y2="316" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jhc-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Open a row</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its history in the dialog</text>
  <line x1="1000" y1="167.0" x2="958" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jhc-arrow)"/>
  <rect x="1000" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Red first</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">amber after 30 min, Late</text>
  <line x1="1000" y1="257.0" x2="461" y2="294" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jhc-arrow)"/>
  <rect x="1000" y="370" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="385" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Availability</text>
  <text x="1010" y="398" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">passed checks over 24 h</text>
  <line x1="1000" y1="387.0" x2="946" y2="352" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jhc-arrow)"/>
</svg>

---

## The grid \{#grid\}

The grid is read-only and lists every check kept, newest first. It opens on the checks of the last 7 days: the period on **Checked at**, in the advanced filters, widens or narrows that window (*All dates* shows every check kept, see `keep_days` in [Parameters](#parameters)).

| Column | Content |
|---|---|
| **Host** | The Server Manager agent host of the instance. |
| **Instance** | The instance name in Server Manager. |
| **Server type** | `entserver` (enterprise server), `webserver` (HTML server) or `restserver` (AIS server). |
| **State** | The state reported by Server Manager, e.g. `RUNNING`. |
| **Health** | `passed`, `failed` (a check did not pass, or its enterprise server is not healthy), `down` (the instance is not running) or `error` (Server Manager could not be queried for it, or the instance is unknown to Server Manager). |
| **Failed checks** | The Server Manager checks that did not pass, among the ones monitored (see [Parameters](#parameters)). |
| **Enterprise server** | For an instance declared in a group, the enterprise server it depends on. |
| **Action** | `stopped` when the check stopped the instance, `stop failed` when the stop was refused. |
| **Detail** | The error message, or the reason of a failure inherited from the enterprise server. |
| **Checked at** | The time of the check. |

The **Host**, **Instance**, **Server type** and **Health** columns can be filtered too. With a check every five minutes, an instance adds 288 rows a day: to follow a single server, filter on its instance or open its history.

## The history of an instance \{#history\}

Opening a row shows the instance in a dialog. The **General** tab repeats the fields of the grid; the **History** tab lists every check kept for that instance, most recent first: time, state, health, failed checks, enterprise server, action, detail.

---

## On the overview \{#overview\}

The Nomajde [Overview](../home.md) leads here from its *The platform* group, and shows the last run of the `nomajde-jde-health` job among its jobs. For the state of the instances at this moment, see [Platform synthesis](../synthesis.md).

---

## The collection job \{#job\}

The `nomajde-jde-health` job checks the servers through the Server Manager REST API. It ships **disabled**, scheduled every five minutes (Europe/Paris).

1. In **Liberty Next → Administer → Pools**, open the `jde_server_manager` pool and set the Server Manager address with its account (`jde_admin`) and its password — see [the Server Manager connection](./server-manager.md#connection).
2. In **Nomaflow → Jobs**, adjust the parameters of `nomajde-jde-health` if needed, then enable it.
3. **Jobs → Check the JDE servers** in the Nomajde menu runs the check at once, without waiting for the schedule.

Each run asks Server Manager for the list of instances and runs its health check on each running instance. The run **fails** — and triggers the job's alerts — when an instance did not pass; the rows are written beforehand, so the grid shows the failure.

### Parameters \{#parameters\}

| Parameter | Default | Meaning |
|---|---|---|
| `checks` | `UBE, BSFN, Port Test, Login, Interactive App, OVR` | The Server Manager checks that count; the others are ignored. Blank: every check counts. |
| `groups` | blank | The instances that depend on an enterprise server, as JSON: `{"<host>-<enterprise server>": ["<host>-<instance>", …]}`. When the enterprise server is down or not healthy, its instances are marked failed without being checked. When set, only the instances named here are monitored. |
| `auto_stop` | `false` | `true` stops a running instance that failed, and the running instances of a failed enterprise server. |
| `keep_days` | `30` | The number of days of checks kept; older rows are removed at each run. |

Details of the job: [`nomajde-jde-health`](../../nomaflow/bundled-jobs.md#nomajde-jde-health).

---

## Related

- [Server Manager](./server-manager.md) — the live screens: instances, connected users, processes, Java memory.
- [Jobs](../jobs.md) — the Nomajde jobs, including *Check the JDE servers*.
- [Notifications](../../nomaflow/notifications.md) — to be alerted when the check fails.
- [Overview — the way in](../home.md).
