---
title: Services
description: "Logic → Services in Liberty Next: a service is a sequence of steps — queries, endpoint calls, plugin functions, conditions, loops — drawn as a flow and edited beside it; Run tries it with inputs and shows the answer and the steps that ran, Expose turns it into an API endpoint that a screen, a job, the assistant or an outside caller uses like any other."
keywords: [Liberty Next, services, shared actions, flow designer, low-code, steps, condition, loop, run, expose, API endpoint, composed service, orchestration]
---

# Services

A **service** composes several steps into one call: read a row, check it, call an endpoint, branch on the answer, write, answer. It is built by drawing — no code — and used two ways: a screen calls it from a button, or it is **exposed as an API endpoint** that a job, the assistant or an outside system calls like any other.

Access: **Liberty Next → Logic → Services**, for superusers. A service is the shared action a screen calls with `call_action`; see [Actions and lifecycle](./screens/actions-and-lifecycle.md) for the actions of a screen.

---

## At a glance

<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="svc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="svc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="svc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="svc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="366" rx="14" fill="url(#svc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Services</text>
  <rect x="240" y="60" width="720" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="81" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">check_credit</text>
  <text x="350" y="81" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">4 step(s) · 2 input(s)</text>
  <text x="470" y="81" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">POST /api/http/studio/check_credit</text>
  <rect x="780" y="66" width="38" height="22" rx="5" fill="url(#svc-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="799.0" y="80.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Run</text>
  <rect x="824" y="66" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="851.5" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Expose</text>
  <rect x="240" y="108" width="520" height="262" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="118" width="88" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="253" y="119" width="42" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="274.0" y="132.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Flow</text>
  <line x1="296" y1="123" x2="296" y2="135" stroke="#334155" strokeWidth="1"/>
  <text x="318.0" y="132.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">List</text>
  <rect x="660" y="118" width="88" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="704.0" y="132.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">−  100%  +</text>
  <rect x="252" y="216" width="60" height="24" rx="12.0" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="282.0" y="231.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Start</text>
  <line x1="312" y1="228" x2="342" y2="228" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#svc-flow)"/>
  <circle cx="326" cy="228" r="7" fill="#0f172a" stroke="#4a9eff" strokeWidth="1"/>
  <text x="326" y="231.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="344" y="202" width="96" height="52" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="354" y="217" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">QUERY</text>
  <text x="354" y="232" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">customer</text>
  <text x="354" y="245" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">customers_get</text>
  <line x1="440" y1="228" x2="460" y2="228" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#svc-flow)"/>
  <rect x="462" y="202" width="100" height="52" rx="8" fill="rgba(255,255,255,0.03)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="472" y="217" fill="#4a9eff" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CONDITION</text>
  <text x="472" y="232" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">over limit?</text>
  <text x="472" y="245" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">amount &gt; limit</text>
  <line x1="562" y1="218" x2="586" y2="178" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#svc-flow)"/>
  <line x1="562" y1="238" x2="586" y2="288" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#svc-flow)"/>
  <text x="558" y="192" fill="#fb923c" fontSize="8" fontFamily="system-ui, sans-serif">True</text>
  <text x="558" y="272" fill="#4ade80" fontSize="8" fontFamily="system-ui, sans-serif">False</text>
  <rect x="588" y="152" width="96" height="52" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="598" y="167" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MESSAGE</text>
  <text x="598" y="182" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">refuse</text>
  <text x="598" y="195" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">limit reached</text>
  <rect x="588" y="262" width="96" height="52" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="598" y="277" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ENDPOINT</text>
  <text x="598" y="292" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">reserve</text>
  <text x="598" y="305" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">erp.reserve_credit</text>
  <line x1="684" y1="178" x2="698" y2="222" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#svc-flow)"/>
  <line x1="684" y1="288" x2="698" y2="234" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#svc-flow)"/>
  <rect x="688" y="216" width="64" height="24" rx="12.0" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="720.0" y="231.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Answer</text>
  <rect x="772" y="108" width="188" height="262" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="784" y="128" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">THE STEP</text>
  <text x="784" y="152" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUERY</text>
  <rect x="784" y="158" width="164" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="794" y="172.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">crm.customers_get ▾</text>
  <text x="784" y="202" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INPUTS</text>
  <rect x="784" y="208" width="164" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="794" y="222.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">ID = INPUT.customer</text>
  <text x="784" y="258" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Next steps read it as</text>
  <text x="784" y="274" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">customer.first_row.LIMIT</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One line per service</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">steps, inputs, endpoints served</text>
  <line x1="200" y1="77.0" x2="240" y2="77" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svc-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The + on a link</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">adds a step at that place</text>
  <line x1="200" y1="307.0" x2="324" y2="236" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svc-arrow)"/>
  <rect x="20" y="345" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="360" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A condition forks</text>
  <text x="30" y="373" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">True and False lanes</text>
  <line x1="200" y1="362.0" x2="510" y2="254" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svc-arrow)"/>
  <rect x="1000" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">answer + steps that ran</text>
  <line x1="1000" y1="47.0" x2="798" y2="66" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svc-arrow)"/>
  <rect x="1000" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Expose</text>
  <text x="1010" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">becomes an API endpoint</text>
  <line x1="1000" y1="97.0" x2="879" y2="77" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svc-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The picked step</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">edited beside the flow</text>
  <line x1="1000" y1="217.0" x2="960" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svc-arrow)"/>
</svg>

---

## The list \{#list\}

Each line gives the service, its number of steps and inputs, and the endpoints it already serves (`POST /api/http/<connector>/<endpoint>`). **New service** adds one. On a line: **Run**, **Expose**, **Find usages**, **Find dependencies**, **Rename**, **Clone**, **Delete**. A click opens its designer.

---

## The flow \{#flow\}

The designer opens on the **Flow** view; **List** gives the steps as a list.

The flow reads left to right: **Start**, which shows the inputs; one card per step; **Answer**, which shows what the service returns. A **condition** forks into its **True** and **False** lanes; a **loop** or a **group** frames its own steps. The layout follows the structure of the service: nothing is placed by hand. A long flow continues on the next row, and the zoom (− / % / +) is kept on the device.

- **A click on a card** edits that step in the side panel: its target, its input mapping.
- **The + on a link** adds a step at that place.
- **With nothing picked**, the panel edits *The service*: **Label**, **Description**, **Inputs** (**Add input**).

| Step | Does |
|---|---|
| **Query** | Runs a query of a connector. |
| **Endpoint** | Calls an API endpoint. When the endpoint says where its rows are, the next steps read them by column name: `<step>.first_row.<COLUMN>`, `<step>.rows`. |
| **Function** | Calls a function of an application's plugin. |
| **Service** | Calls another service. |
| **Condition** | Forks on a test. |
| **For each** | Repeats its steps for each row. |
| **Message**, **Notification** | Tells the user, or sends a notification. |
| **Answer** | Says what the service returns. |

A step reads the service's inputs as `INPUT.<name>` and the result of an earlier step by that step's name.

---

## Run \{#run\}

**Run** tries the service as it is saved: one field per input (its default as a placeholder), then the result — *Done in N ms*, the **Answer** it would give as an endpoint, and the **Steps that ran**.

:::warning[The steps really run]
A step that writes, writes. Run a service that changes data on a test environment, or with inputs made for it.
:::

---

## Expose as an endpoint \{#expose\}

**Expose** creates an API endpoint served by the service. A screen, an action, a job, the assistant or an outside caller then calls it like any endpoint.

| Field | Meaning |
|---|---|
| **On the connector** | An API connector of the installation, or the Studio's own — `studio`, created on first use. |
| **Endpoint name** | The service's identifier by default. |
| **It changes data** | Tick it when a step writes: the assistant then asks before calling it. |

The service's inputs become the endpoint's parameters. The dialog answers with the address and the permission: *Exposed: POST … — permission `api:<connector>:<endpoint>`*.

**The service runs with the endpoint's permission**: who may call the endpoint runs all its steps, which are not checked again one by one — a composed service is granted as a whole. The caller's row-level data scope still applies to every query. What the service returns is the answer; its messages come with it; a step that fails is the endpoint's error.

---

## Where a service is used \{#usage\}

**Find usages** lists the screens that call the service and the endpoints it serves; renaming it follows them. In the [Studio](../studio.md), a selected service lights the screens that call it. A service is carried in a [package](./packages.md) with the screens and endpoints that need it.

---

## Tips & best practices \{#tips\}

- Give each step a name that says what it holds (`customer`, `open_orders`): the next steps read it by that name.
- Put the checks first and the writes last: a condition that stops early leaves nothing half done.
- Expose a service when the same sequence is needed by a screen **and** by a job or an outside system: one definition, one permission.
- Cover an exposed service with a [test](./tests.md) case.

---

## Related

- [Overview and Studio](../studio.md) · [API endpoints](./api-endpoints.md) · [Tests](./tests.md)
- [Actions and lifecycle](./screens/actions-and-lifecycle.md) — the actions of a screen.
