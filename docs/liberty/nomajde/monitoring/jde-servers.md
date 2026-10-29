---
title: JDE Servers
description: "Monitoring → JDE Servers in Nomajde: the latest health check of every JD Edwards enterprise, web and REST server seen by Server Manager — state, health, failed checks, action taken — its history, the overview figures and the job that collects them."
keywords: [Nomajde, JD Edwards, monitoring, Server Manager, health check, enterprise server, web server, AIS, availability, nomajde-jde-health]
---

# JDE Servers

**Monitoring → JDE Servers** shows the JD Edwards servers as the last health check saw them: one row per instance, its state in Server Manager, the health result, the checks that failed and the action taken. The checks come from the [`nomajde-jde-health`](#job) job, which queries Server Manager every five minutes once enabled.

---

## At a glance

<svg viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jds-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jds-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jds-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="476" rx="14" fill="url(#jds-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">JDE Servers</text>
  <rect x="870" y="31" width="58" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="899.0" y="42.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">read-only</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Host</text>
  <rect x="240" y="70" width="122" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="83.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="370" y="66" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Instance</text>
  <rect x="370" y="70" width="122" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="83.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="500" y="66" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Server type</text>
  <rect x="500" y="70" width="122" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="510" y="83.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="630" y="66" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Health</text>
  <rect x="630" y="70" width="112" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="640" y="83.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="104" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HOST</text>
  <text x="340" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSTANCE</text>
  <text x="440" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="520" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATE</text>
  <text x="600" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HEALTH</text>
  <text x="680" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FAILED CHECKS</text>
  <text x="820" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTION</text>
  <text x="890" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHECKED AT</text>
  <rect x="240" y="132" width="720" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="147.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">jde-ent01</text>
  <text x="340" y="147.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">ent_prod</text>
  <text x="440" y="147.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">entserver</text>
  <text x="520" y="147.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">RUNNING</text>
  <text x="600" y="147.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">passed</text>
  <text x="680" y="147.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="820" y="147.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="890" y="147.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">10:35</text>
  <rect x="240" y="160" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">jde-web01</text>
  <text x="340" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">web_prod1</text>
  <text x="440" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">webserver</text>
  <text x="520" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">RUNNING</text>
  <text x="600" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">failed</text>
  <text x="680" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Login, Port Test</text>
  <text x="820" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">stopped</text>
  <text x="890" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">10:35</text>
  <rect x="240" y="188" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="203.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">jde-web01</text>
  <text x="340" y="203.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">ais_prod</text>
  <text x="440" y="203.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">restserver</text>
  <text x="520" y="203.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">STOPPED</text>
  <text x="600" y="203.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">down</text>
  <text x="680" y="203.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="820" y="203.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="890" y="203.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">10:35</text>
  <rect x="240" y="222" width="720" height="250" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="242" fill="#94a3b8" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Nomajde overview</text>
  <rect x="254" y="254" width="180" height="100" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="268" y="276" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">JDE servers</text>
  <text x="268" y="310" fill="#e2e8f0" fontSize="26" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="268" y="330" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">of 3 healthy</text>
  <text x="268" y="343" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">· 2026-10-29 10:35</text>
  <rect x="448" y="254" width="498" height="204" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="276" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">JDE servers</text>
  <rect x="462" y="288" width="470" height="46" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="288" width="3" height="46" rx="1.5" fill="#f87171"/>
  <text x="474" y="306" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">web_prod1</text>
  <text x="474" y="322" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">webserver · jde-web01 · Login, Port Test · stopped</text>
  <rect x="531.88" y="295" width="43" height="15" rx="7.5" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="553.38" y="305.7" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Failed</text>
  <text x="918" y="308" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">82 %</text>
  <text x="918" y="323" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">288 checks in 24 h</text>
  <rect x="462" y="342" width="470" height="46" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="342" width="3" height="46" rx="1.5" fill="#f87171"/>
  <text x="474" y="360" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">ais_prod</text>
  <text x="474" y="376" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">restserver · jde-web01 · STOPPED</text>
  <rect x="526.56" y="349" width="34" height="15" rx="7.5" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="543.56" y="359.7" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Down</text>
  <text x="918" y="362" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">64 %</text>
  <text x="918" y="377" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">288 checks in 24 h</text>
  <rect x="462" y="396" width="470" height="46" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="396" width="3" height="46" rx="1.5" fill="#4ade80"/>
  <text x="474" y="414" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">ent_prod</text>
  <text x="474" y="430" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">entserver · jde-ent01</text>
  <rect x="526.56" y="403" width="26" height="15" rx="7.5" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="539.56" y="413.7" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">OK</text>
  <text x="918" y="416" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">100 %</text>
  <text x="918" y="431" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">288 checks in 24 h</text>
  <rect x="10" y="60" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filters</text>
  <text x="20" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">host, instance, type, health</text>
  <line x1="210" y1="77.0" x2="240" y2="80" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jds-arrow)"/>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Latest check</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one row per instance, 24 h</text>
  <line x1="210" y1="167.0" x2="240" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jds-arrow)"/>
  <rect x="10" y="290" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Healthy instances</text>
  <text x="20" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">out of the monitored ones</text>
  <line x1="210" y1="307.0" x2="254" y2="304" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jds-arrow)"/>
  <rect x="1000" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Open a row</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its history in the dialog</text>
  <line x1="1000" y1="137.0" x2="960" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jds-arrow)"/>
  <rect x="1000" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Red first</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">amber after 30 min</text>
  <line x1="1000" y1="317.0" x2="946" y2="310" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jds-arrow)"/>
  <rect x="1000" y="400" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Availability</text>
  <text x="1010" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">passed checks over 24 h</text>
  <line x1="1000" y1="417.0" x2="916" y2="418" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jds-arrow)"/>
</svg>

---

## The grid \{#grid\}

The grid is read-only and lists the latest check of each instance checked in the last 24 hours.

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

The **Host**, **Instance**, **Server type** and **Health** columns can be filtered.

## The history of an instance \{#history\}

Opening a row shows the instance in a dialog. The **General** tab repeats the fields of the grid; the **History** tab lists every check kept for the instance, most recent first: time, state, health, failed checks, enterprise server, action, detail.

---

## On the overview \{#overview\}

The Nomajde [home page](../home.md) carries two **JDE servers** tiles, based on the last check of each instance over 24 hours:

- the number of healthy instances out of the instances monitored, with the time of the last check;
- the list of instances: the server type and host, the failed checks and the action taken, a status pill — **OK**, **Failed**, **Down**, **Error** —, the availability over 24 hours (the share of passed checks) and the number of checks. Instances in trouble come first; an instance whose last check is older than 30 minutes is shown in amber, tagged **Late**.

---

## The collection job \{#job\}

The `nomajde-jde-health` job checks the servers through the Server Manager REST API. It ships **disabled**, scheduled every five minutes (Europe/Paris).

1. In **Liberty Next → Build → Connectors**, open the `jde_server_manager` connector and set the Server Manager address and the password of the `jde_admin` account.
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

- [Jobs](../jobs.md) — the Nomajde jobs, including *Check the JDE servers*.
- [Notifications](../../nomaflow/notifications.md) — to be alerted when the check fails.
- [Overview — the home page](../home.md).
