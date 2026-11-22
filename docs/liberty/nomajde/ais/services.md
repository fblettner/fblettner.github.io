---
title: JD Edwards services (AIS)
description: "The catalogue of JD Edwards AIS services shipped with Nomajde: named, documented services to read JD Edwards (tables and views, objects, orchestrations, report versions, processing options, data dictionary) and to act on it (run an orchestration, a business function, a report; start or stop a scheduled job), each with its own permission, usable from a screen, a job, a test or the AI assistant."
keywords: [Nomajde, JD Edwards, AIS, Application Interface Services, orchestration, business function, BSFN, report, UBE, data service, form service, REST, permissions]
---

# JD Edwards services (AIS)

Nomajde reaches JD Edwards through its **AIS server**, with Oracle's documented REST services. It ships a **catalogue** of these services, ready to use: each one has a name, a description, named parameters that say what they expect with an example — and its own permission. They are the building blocks of everything Nomajde does with a live JD Edwards: [screens on a JDE form](./create-from.md), [non-regression tests](../tests.md), jobs, and the requests made to the AI assistant.

---

## At a glance

<svg viewBox="0 0 1200 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ais-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ais-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ais-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ais-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="340" rx="14" fill="url(#ais-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">The AIS catalogue</text>
  <rect x="240" y="70" width="130" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="305.0" y="96.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">A screen</text>
  <line x1="370" y1="92" x2="416" y2="100" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#ais-flow)"/>
  <rect x="240" y="138" width="130" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="305.0" y="164.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">A job</text>
  <line x1="370" y1="160" x2="416" y2="150" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#ais-flow)"/>
  <rect x="240" y="206" width="130" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="305.0" y="232.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">A test</text>
  <line x1="370" y1="228" x2="416" y2="200" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#ais-flow)"/>
  <rect x="240" y="274" width="130" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="305.0" y="300.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">The AI assistant</text>
  <line x1="370" y1="296" x2="416" y2="250" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#ais-flow)"/>
  <rect x="418" y="62" width="360" height="280" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="432" y="82" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">READ</text>
  <rect x="430" y="90" width="336" height="18" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="102.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Query a table or a view</text>
  <rect x="708" y="91" width="50" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="733.0" y="102.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POST</text>
  <rect x="430" y="112" width="336" height="18" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="124.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Find a JDE object</text>
  <rect x="708" y="113" width="50" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="733.0" y="124.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">GET</text>
  <rect x="430" y="134" width="336" height="18" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="146.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">A report's options and selection</text>
  <rect x="708" y="135" width="50" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="733.0" y="146.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POST</text>
  <rect x="430" y="156" width="336" height="18" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="168.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">A business function's parameters</text>
  <rect x="708" y="157" width="50" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="733.0" y="168.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POST</text>
  <rect x="430" y="178" width="336" height="18" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="190.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">One orchestration</text>
  <rect x="708" y="179" width="50" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="733.0" y="190.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">GET</text>
  <rect x="430" y="200" width="336" height="18" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="212.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">A data item's labels</text>
  <rect x="708" y="201" width="50" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="733.0" y="212.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POST</text>
  <text x="432" y="240" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CHANGE JD EDWARDS</text>
  <rect x="430" y="248" width="336" height="18" rx="4" fill="rgba(255,159,10,0.05)" stroke="rgba(255,159,10,0.35)" strokeWidth="1"/>
  <text x="438" y="260.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Run an orchestration</text>
  <rect x="644" y="249" width="122" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="705.0" y="260.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">changes data</text>
  <rect x="430" y="270" width="336" height="18" rx="4" fill="rgba(255,159,10,0.05)" stroke="rgba(255,159,10,0.35)" strokeWidth="1"/>
  <text x="438" y="282.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Run a business function</text>
  <rect x="644" y="271" width="122" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="705.0" y="282.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">changes data</text>
  <rect x="430" y="292" width="336" height="18" rx="4" fill="rgba(255,159,10,0.05)" stroke="rgba(255,159,10,0.35)" strokeWidth="1"/>
  <text x="438" y="304.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Submit a report</text>
  <rect x="644" y="293" width="122" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="705.0" y="304.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">changes data</text>
  <line x1="778" y1="200" x2="828" y2="200" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#ais-flow)"/>
  <rect x="830" y="150" width="130" height="100" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="895.0" y="197.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">AIS server</text>
  <text x="895.0" y="212.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">JD Edwards</text>
  <text x="830" y="268" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">under the connector's</text>
  <text x="830" y="281" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE account</text>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Used everywhere</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">without a line of code</text>
  <line x1="200" y1="127.0" x2="240" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ais-arrow)"/>
  <rect x="20" y="280" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A card to approve</text>
  <text x="30" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">before a change of JDE</text>
  <line x1="200" y1="297.0" x2="240" y2="296" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ais-arrow)"/>
  <rect x="1000" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Named parameters</text>
  <text x="1010" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with help and an example</text>
  <line x1="1000" y1="97.0" x2="766" y2="99" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ais-arrow)"/>
  <rect x="1000" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One permission each</text>
  <text x="1010" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">api:ais_connection:&lt;service&gt;</text>
  <line x1="1000" y1="187.0" x2="766" y2="143" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ais-arrow)"/>
  <rect x="1000" y="280" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Marked apart</text>
  <text x="1010" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">granted sparingly</text>
  <line x1="1000" y1="297.0" x2="766" y2="279" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ais-arrow)"/>
</svg>

---

## The catalogue \{#catalogue\}

The services are the endpoints of the `ais_connection` connector, in **Liberty Next → Data → Connectors**.

### Read \{#read\}

| Service | Returns | Parameters |
|---|---|---|
| **AIS server configuration** | The AIS release and its default environment. | — |
| **Find a JDE object** | The applications, tables, views, business functions and reports whose name or description holds a text. | `FILTER`, `TYPES` |
| **Query a table or a view** | Rows of a table or a business view, or their count. | `TABLE`, `TYPE`, `KIND`, `COLUMNS`, `MAX`, `MATCH`, `CONDITIONS` |
| **A data item's labels** | The title and description of a data dictionary item. | `ITEM`, `SYSTEM` |
| **An application's processing options** | The processing option values of an interactive application version. | `APPLICATION`, `VERSION` |
| **A report's options and selection** | The selection, the sequence and the options of a report version. | `REPORT`, `VERSION` |
| **A report job's status** | The state of a submitted report. | `JOB`, `SERVER` |
| **A business function's parameters** | Business functions and their parameters. | `NAME`, `OBJECT` or `TEMPLATE` |
| **Orchestrations**, **One orchestration** | The orchestrations AIS offers; for one, its description, its version, its inputs and outputs. | `NAME` |
| **Notifications**, **Scheduled jobs** | The notifications, the AIS scheduler and its jobs. | — |

### Change JD Edwards \{#write\}

| Service | Does | Parameters |
|---|---|---|
| **Run an orchestration** | Runs an orchestration with its inputs, whatever its version. | `NAME`, `VERSION`, `INPUTS` |
| **Run a business function** | Runs a business function. | `NAME`, `PARAMS`, `OUTPUTS` |
| **Submit a report** | Submits a report version as it is saved. | `REPORT`, `VERSION` |
| **Start a scheduled job**, **Stop a scheduled job** | Starts or stops the schedule of an orchestration or a notification. | `NAME` |

These five are marked as **changing data**. Three parameters depend on the object and are written as JSON, with their example: the conditions of a query, the values of a business function, the inputs of an orchestration. To avoid the JSON, make an endpoint of its own for one report, one table, one function or one orchestration with [Create from…](./create-from.md): each input then becomes a labelled field.

---

## Several forms in one session \{#flow\}

One call of a form is enough to read it, or to fill it and press a button. It is not enough when the next action depends on what the form answered. For that case Nomajde offers two job steps and screen actions that keep the forms open in **one JD Edwards session** — and always close the forms and the session, an error included:

| Step | Does |
|---|---|
| **A flow over several forms** (`j_ais_form_flow`) | A list of steps — the form to open, the fields and filters to fill, the row to select, rows to add or to change, the buttons to press — each with what it expects: a number of rows, the form on top, no error. A step that is not met stops the flow before the next one acts. Several rows added in one step are one transaction: a document and its lines. |
| **One row of a grid** (`j_ais_grid_row`) | Adds, changes or deletes one row of a form's grid, looked for first: nothing is done unless exactly one row is found — none, for an add. |

The endpoints [Create from…](./create-from.md#guarantees) builds for a change or a delete through a form work the same way.

---

## Where a service is used \{#use\}

| From | How |
|---|---|
| **The connector's Test tab** | Fill the parameters and run it: the quickest way to try a service. |
| **A screen** | As an action in the toolbar or the row menu — submit a report for the selected row — or as the source of the screen's rows. |
| **A job** | As a step: nightly export, a report submitted and waited for, an orchestration run. See [Jobs](../jobs.md#ais). |
| **A test** | As a step of a [non-regression case](../tests.md). |
| **The AI assistant** | It reads with the reading services; for one that changes JD Edwards it shows a card to approve first. |

---

## The AIS connection \{#connection\}

The `ais_connection` connector holds no address and no account: it names the **`jde_ais` pool**, where the AIS server is set once, like the JD Edwards database. In **Liberty Next → Administer → Pools**, open the `jde_ais` pool (kind *HTTP server (an API)*) and set the AIS REST address with its JD Edwards account — `https://JDE@host:port/jderest/v2` —, its password and whether the TLS certificate is checked. When the calls are made as the signed-in user ([each call as the signed-in user](../../framework/connectors.md#api-user-jwt)), the signing key is a field of the same pool.

At installation the pool can be filled from the server's environment instead: `JDE_AIS_URL` (the address with its account) and `JDE_AIS_VERIFY_SSL` (`true` by default). See [Pools](../../framework/connectors.md#pools).

---

## What JD Edwards sees \{#account\}

Every call runs under the **JD Edwards account of the `jde_ais` pool**: JD Edwards security applies to that account, the audit records it, and texts come back in its language. Give it the rights the integrations need, no more.

What JD Edwards refuses is reported in its own words. A business function's error fails the call with its message; a warning — *Duplicate Address Book record exists* — is reported with the answer and the call stands.

---

## Access \{#access\}

Each service has its permission, `api:ais_connection:<service>`, granted in a role's *Beyond the menus* rules. A role can therefore read tables without being able to submit a report, or run one orchestration and no other.

- Grant the reading services to the teams that build screens and tests.
- Grant the five services that change JD Edwards sparingly — or better, grant the specific endpoints made with **Create from…**.
- The connector also holds a generic service, **AIS service (generic, used by nomajde.ais)**, kept for Nomajde's own code: it reaches every AIS service, so it is granted to no role.

For the AI assistant, a service that changes JD Edwards also requires the user to be allowed to change data through the assistant, and is never called without an approved card.

---

## Tips & best practices \{#tips\}

- Try a service in the **Test** tab before putting it in a job or a screen.
- **Query a table or a view** with `KIND` = `COUNT` answers a volume question without reading the rows.
- Use a dedicated JD Edwards account for the `jde_ais` pool, so that the audit separates what Nomajde did from what a person did.
- When the same JSON is typed twice, it is time for **Create from…**.

---

## Related

- [Create from… — endpoints and screens from JD Edwards](./create-from.md).
- [API endpoints](../../framework/build/api-endpoints.md) — the endpoint editor of Liberty Next.
- [Server Manager](../monitoring/server-manager.md) — the same approach for the Server Manager console.
