---
title: Server Manager
description: "Monitoring → Server Manager in Nomajde: six screens that read the JD Edwards Server Manager console live — instances, connected users, enterprise servers, server processes, business function calls and errors, web and AIS servers with their Java memory — with advanced filters and pick-lists, and the catalogue of Server Manager REST services behind them."
keywords: [Nomajde, JD Edwards, Server Manager, monitoring, instances, connected users, enterprise server, kernel, business functions, Java heap, AIS server, web server, REST API]
---

# Server Manager

**Monitoring → Server Manager** shows what the JD Edwards Server Manager console knows, in six Nomajde grids: the instances and their state, who is connected, the load of the enterprise servers and of their processes, the business function calls and errors, the Java memory of the web and AIS servers. The screens read the console **live** each time they are opened or refreshed; nothing is stored in Nomajde.

For the health of the servers over time — checks every five minutes, availability, alerts — see [JDE Health Check](./jde-servers.md).

---

## At a glance

<svg viewBox="0 0 1200 382" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="smg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="smg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="smg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="smg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="342" rx="14" fill="url(#smg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="36" width="150" height="310" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="246" y="56" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">MONITORING</text>
  <text x="248" y="78" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">JDE Health Check</text>
  <text x="248" y="98" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Server Manager</text>
  <text x="258" y="121.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Instances</text>
  <rect x="244" y="132" width="134" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="258" y="145.5" fill="#4a9eff" fontSize="8.6" fontFamily="system-ui, sans-serif">Connected users</text>
  <text x="258" y="169.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Enterprise servers</text>
  <text x="258" y="193.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Server processes</text>
  <text x="258" y="217.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Business functions</text>
  <text x="258" y="241.5" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Web and AIS servers</text>
  <text x="400" y="56" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Connected users</text>
  <text x="400" y="78" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SHOW</text>
  <rect x="400" y="84" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="410" y="98.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Sessions ▾</text>
  <rect x="560" y="84" width="102" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="611.0" y="98.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Advanced filters</text>
  <rect x="670" y="86" width="103" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="721.5" y="98.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Instance = JAS_PD</text>
  <rect x="884" y="84" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="917.5" y="98.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Refresh</text>
  <rect x="400" y="118" width="564" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="134.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="482" y="134.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SESSION</text>
  <text x="574" y="134.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSTANCE</text>
  <text x="642" y="134.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENVIRONMENT</text>
  <text x="730" y="134.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE</text>
  <text x="786" y="134.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OPEN APPLICATIONS</text>
  <text x="916" y="134.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IDLE (S)</text>
  <rect x="400" y="148" width="564" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="163.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">JSMITH</text>
  <rect x="482" y="152.0" width="70" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="517.0" y="163.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Web session</text>
  <text x="574" y="163.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JAS_PD</text>
  <text x="642" y="163.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JPD920</text>
  <text x="730" y="163.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">·ALL</text>
  <text x="786" y="163.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">P01012, P4210</text>
  <text x="916" y="163.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">12</text>
  <rect x="400" y="176" width="564" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="191.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">MDUPONT</text>
  <rect x="482" y="180.0" width="70" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="517.0" y="191.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Web session</text>
  <text x="574" y="191.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JAS_PD</text>
  <text x="642" y="191.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JPD920</text>
  <text x="730" y="191.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">AP_CLERK</text>
  <text x="786" y="191.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="916" y="191.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">340</text>
  <rect x="400" y="204" width="564" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="219.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">AMARTIN</text>
  <rect x="482" y="208.0" width="70" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="517.0" y="219.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Web session</text>
  <text x="574" y="219.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JAS_PD</text>
  <text x="642" y="219.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JPY920</text>
  <text x="730" y="219.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">·ALL</text>
  <text x="786" y="219.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">P03B11</text>
  <text x="916" y="219.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">58</text>
  <rect x="400" y="232" width="564" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="247.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">SVC_AIS</text>
  <rect x="482" y="236.0" width="70" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="517.0" y="247.2" fill="#c084fc" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">AIS session</text>
  <text x="574" y="247.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AIS_PD</text>
  <text x="642" y="247.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JPD920</text>
  <text x="730" y="247.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">·ALL</text>
  <text x="786" y="247.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">—</text>
  <text x="916" y="247.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">3</text>
  <text x="400" y="276" fill="#94a3b8" fontSize="8.8" fontFamily="system-ui, sans-serif">Read live from the Server Manager console — nothing is stored.</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six live screens</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one grid for the whole platform</text>
  <line x1="200" y1="107.0" x2="244" y2="142" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Every running instance</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read together</text>
  <line x1="200" y1="267.0" x2="400" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
  <rect x="1000" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Show</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sessions, or also processes</text>
  <line x1="1000" y1="47.0" x2="550" y2="84" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Advanced filters</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pick-lists listed live</text>
  <line x1="1000" y1="117.0" x2="772" y2="95" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Kind of session</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">web, AIS, server process</text>
  <line x1="1000" y1="217.0" x2="550" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
</svg>

---

## The six screens \{#screens\}

Every screen is read-only and loads when opened. Each one asks the console for its instances, then reads every **running** instance of the right kind together: one grid covers the whole platform. An instance that is stopped, or that the console refuses to answer for, keeps a row whose **Note** column says why — `not running (STOPPED)` for example.

| Menu entry | What it lists | Main columns |
|---|---|---|
| **Instances** | Every instance the console manages. | Instance, Type, State, Tools release, Host, JDE home. |
| **Connected users** | The web and AIS sessions — and, on request, the enterprise server processes each user is connected to. | User, Session, Instance, Environment, Role, From, Open applications, Signed in at, Idle (seconds), Last active, Process. |
| **Enterprise servers** | One row per enterprise server. | Instance, Host, Up for, Network jobs, Kernel jobs, Zombie processes, Security kernel users, Call object users, CPU, Memory. |
| **Server processes** | Each kernel and network listener of the enterprise servers. | Process, Process id, Instance, Kind, Users, Connected, Outstanding requests, Messages received, Memory, CPU, Threads, Database connections, Open transactions, Started, Last message. |
| **Business functions** | The business function calls seen by each web server. | Business function, Calls, Average (ms), Longest (ms), Timeouts, Application errors, System errors, Total (ms), Shortest (ms), Instance, Enterprise server. |
| **Web and AIS servers** | Each web and AIS node. | Instance, Node, Type, Up for, Online users, Sign-in, Java heap used (MB), Java heap maximum (MB), Java heap used (percent). |

Figures are numbers: they sort, total and export as such.

### Connected users \{#users\}

The **Show** dropdown above the grid chooses between **Sessions** — the web and AIS sessions, the default — and **Sessions and server processes**, which adds the enterprise server processes each user is connected to. The grid is empty when nobody is signed in.

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

The screens use the `jde_server_manager` connector, the one the [health check](./jde-servers.md#job) already uses. In **Liberty Next → Data → Connectors**, open it and set the address of the console and the password of its account (`jde_admin` by default). The account's rights in Server Manager decide what it may read.

---

## The catalogue of Server Manager services \{#catalogue\}

Beyond the six screens, the connector carries a catalogue of the Server Manager REST services, written from Oracle's guide: each endpoint has its parameters explained, and its own permission, so that a role can be given one service and not the others. They can be called from the connector's **Test** tab, a screen action, a job step or the [AI assistant](../../framework/ai-assistant.md).

| Heading | Content |
|---|---|
| **Monitoring** | Instances, homes and agents, path codes, WebLogic domains and servers, components and their versions, INI configuration, log files. |
| **Runtime Metrics** | Enterprise server activity and processes, business function statistics, Java memory, JDBj connections and caches, connected users, user sessions. |
| **Manage and Update Operations** | Start or stop an instance, every instance or a WebLogic server, refresh the environments, clear the data caches. |
| **Server Group**, **User Log Configuration**, others | Server groups, saved configurations, the log level of a user. |

Nine services **change the platform** — start and stop an instance, start and stop every instance, start and stop a WebLogic server, refresh the environments, change a log level, clear the data caches. They are marked as such: the AI assistant never calls one without showing a card to approve first, and only for a user allowed to change data through it.

Provisioning (create, register or delete an instance), passwords, TLS, users and groups, save and restore, and the updates of the agents and of the console are left out of the catalogue on purpose.

---

## Access \{#access\}

Each screen shows to the roles that hold its menu entry. A raw service of the catalogue needs the permission `api:jde_server_manager:<service>` (rule type **API endpoint** in a role's *Beyond the menus* rules): grant the reading ones widely, the nine that change the platform to the platform team only.

---

## Tips & best practices \{#tips\}

- Start with **Instances**: an instance that is not `RUNNING` explains an empty line in the other screens.
- In **Server processes**, sort on **Outstanding requests** or **CPU** to find the kernel that holds a queue.
- In **Business functions**, sort on **System errors** or **Timeouts** after a deployment: a function that fails on one web server only points at that server.
- **Web and AIS servers** — a heap used close to its maximum over several refreshes is the signal to look at before the users call.

---

## Related

- [JDE Health Check](./jde-servers.md) — the checks kept over time and their alerts.
- [JD Edwards services (AIS)](../ais/services.md) — the same approach for the AIS server.
- [Overview — the home page](../home.md).
