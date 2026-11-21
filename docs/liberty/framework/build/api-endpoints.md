---
title: API endpoints
description: "The endpoints of an API connector in Liberty Next: the editor drawn as four stages (what it is, inputs, the call, the answer), parameters that say what they expect, Create from… and Refresh from the server, endpoints that change data, error and warning fields, rows a screen can read, endpoints served by a function or by a service, groups, permissions and the safety of the values."
keywords: [Liberty Next, API connector, endpoint, REST, parameters, Create from, generator, changes data, error fields, rows, served by a function, served by an action, permissions, api_run]
---

# API endpoints

An **endpoint** is one named call of an API connector: *submit this report*, *read these customers*, *create an order*. Once declared it is used everywhere without a line of code — as the source of a [screen](./screens/api-screens.md), in a screen action, a [service](./services.md), a job step, a [test](./tests.md), by the AI assistant, or by an outside caller — and each endpoint has **its own permission**.

Access: **Liberty Next → Data → Connectors**, an API connector, tab **Endpoints**.

---

## At a glance

<svg viewBox="0 0 1200 386" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="epe-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="epe-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="epe-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="epe-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="346" rx="14" fill="url(#epe-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Endpoints</text>
  <rect x="240" y="60" width="100" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="290.0" y="74.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add endpoint</text>
  <rect x="346" y="60" width="89" height="22" rx="5" fill="url(#epe-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="390.5" y="74.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Create from…</text>
  <rect x="441" y="60" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="499.5" y="74.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Check 4 generated</text>
  <rect x="780" y="60" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="790" y="74.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Search…</text>
  <rect x="240" y="96" width="720" height="30" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="102" width="38" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="269.0" y="114.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POST</text>
  <text x="298" y="115" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">order_create</text>
  <text x="390" y="115" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">· Create an order</text>
  <rect x="540" y="102" width="78" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="579.0" y="114.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">changes data</text>
  <rect x="240" y="140" width="164" height="46" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="322.0" y="160.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">What it is</text>
  <text x="322.0" y="175.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Create an order</text>
  <line x1="404" y1="163" x2="420" y2="163" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#epe-flow)"/>
  <rect x="422" y="140" width="164" height="46" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="504.0" y="160.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Inputs</text>
  <text x="504.0" y="175.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">3 parameter(s)</text>
  <line x1="586" y1="163" x2="602" y2="163" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#epe-flow)"/>
  <rect x="604" y="140" width="164" height="46" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="686.0" y="160.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">The call</text>
  <text x="686.0" y="175.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">POST /orders</text>
  <line x1="768" y1="163" x2="784" y2="163" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#epe-flow)"/>
  <rect x="786" y="140" width="164" height="46" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="868.0" y="160.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">The answer</text>
  <text x="868.0" y="175.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">rows at data.lines</text>
  <rect x="240" y="202" width="720" height="150" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="222" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">INPUTS</text>
  <rect x="250" y="232" width="280" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="246.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">CUSTOMER</text>
  <text x="340" y="246.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Customer</text>
  <text x="410" y="246.5" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <rect x="452" y="235" width="53" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="478.5" y="246.2" fill="#c084fc" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Required</text>
  <rect x="250" y="258" width="280" height="22" rx="5" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="260" y="272.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">CURRENCY</text>
  <text x="340" y="272.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Currency</text>
  <text x="410" y="272.5" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">= EUR</text>
  <rect x="250" y="284" width="280" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="298.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">LINES</text>
  <text x="340" y="298.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lines</text>
  <text x="410" y="298.5" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">= []</text>
  <rect x="452" y="287" width="53" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="478.5" y="298.2" fill="#c084fc" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Required</text>
  <text x="550" y="242" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXAMPLE</text>
  <rect x="550" y="248" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="560" y="262.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">USD</text>
  <text x="686" y="242" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ALLOWED VALUES</text>
  <rect x="686" y="248" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="696" y="262.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">EUR, USD, GBP</text>
  <text x="550" y="292" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HELP — WHAT TO PUT IN IT</text>
  <rect x="550" y="298" width="296" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="560" y="312.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The currency of the order (ISO code).</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Alphabetical, searchable</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">groups fold under a heading</text>
  <line x1="200" y1="77.0" x2="240" y2="111" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four stages</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each card says what it holds</text>
  <line x1="200" y1="167.0" x2="240" y2="163" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="20" y="270" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A parameter is a line</text>
  <text x="30" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opened to edit it</text>
  <line x1="200" y1="287.0" x2="250" y2="269" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="1000" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Create from…</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">written from the server</text>
  <line x1="1000" y1="47.0" x2="425" y2="60" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="1000" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Changes data</text>
  <text x="1010" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the assistant asks first</text>
  <line x1="1000" y1="113.0" x2="618" y2="111" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="1000" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A closed list</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a dropdown, checked on call</text>
  <line x1="1000" y1="267.0" x2="846" y2="259" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
</svg>

---

## The list \{#list\}

The endpoints are listed in alphabetical order, with a search box once there are more than five (name, label, path, method, description, group). Endpoints that share a **group** sit under its heading, which folds and shows their number.

Each card starts with a pill — the HTTP method, **FN** for an endpoint [served by a function](#function), **ACT** for one [served by a service](#service) — then the name, the label, and the tag **changes data** where it applies.

| Button | Does |
|---|---|
| **Add endpoint** | Asks for a name and opens a blank endpoint. |
| **Create from…** | Writes an endpoint from what the server describes — see [below](#create-from). Shown when the connector has generators. |
| **Check N generated** | Asks the server again for each generated endpoint and lists those that no longer match. |

The **Test** tab runs any endpoint against the connector as it is on the page, without saving: its parameters as fields, then the result.

---

## The four stages \{#stages\}

An endpoint is drawn as four cards — **What it is → Inputs → The call → The answer** — each saying what it holds; the fields of the picked stage are beside it.

### What it is \{#what\}

| Field | Meaning |
|---|---|
| **Name**, **Label**, **Description** | The identifier used by actions and permissions, the short label of the lists, one sentence of description. |
| **Changes data** | Tick it when the call submits, creates or runs something — see [Endpoints that change data](#writable). |
| **Group** | The heading the endpoint is listed under. Display only. |
| **Created from** | For a generated endpoint, what it was created from, with **Refresh from the server**. |

### Inputs \{#inputs\}

Each **parameter** is a line — its name, its label, its default, *Required* — opened to edit it.

| Field | Meaning |
|---|---|
| **Name**, **Label** | The `{{NAME}}` used in the path, the headers or the body, and the label of its field. |
| **Default value** | Taken when the caller leaves the parameter out or blank. |
| **Example**, **Help — what to put in it** | Shown under the field wherever the endpoint is filled, and given to the AI assistant. |
| **Allowed values** | A closed list: the field becomes a dropdown, another value is refused before anything is sent, and the letter case is corrected. |
| **Required** | A call without it is refused before anything is sent. |

### The call \{#call\}

**Method** and **URL path**, **Extra headers**, **Content-Type**, **Body** (with **Format JSON**) and **Query params**. **Leave out a query parameter whose value is blank** sends only the query parameters that have a value, for a server that reads an empty one as a filter on nothing.

Instead of an HTTP call, the endpoint can be **Served by a function** or **Served by an action** — see below.

### The answer \{#answer\}

| Field | Meaning |
|---|---|
| **Rows** | Where the list of records is in the answer. With it, a screen can read the endpoint as it reads a query. |
| **Columns** | Column name = key of a record (`AN8=z_AN8_19`): the columns, in order, named so that the dictionary recognises them. |
| **Column titles** | Where the answer gives each key its title — the label of a column neither the screen nor the dictionary names. |
| **Row limit parameter** | The parameter that carries the maximum number of rows: a screen fills it from its own *Max rows*. |
| **"More rows" flag** | Where the server says there is more than it returned: the screen then says the result is truncated. |
| **Error fields** | Where the server puts its errors when it answers 200 all the same: something there makes the call a failure, with that content as its error. |
| **Warning fields** | Where the server puts its warnings: reported with the answer, the call stands. |
| **Response field**, **Response mappings** | The part of the answer returned, and logical names mapped to paths of the answer. |

A path may end with a filter on the items of a list — `result.errors[errorLevel=1]` — for a server that puts its errors and its warnings in the same list.

---

## Create from… \{#create-from\}

A generic endpoint — *run any report*, with JSON for whatever depends on the report — is hard to fill. When the application behind the connector provides **generators**, **Create from…** writes a dedicated endpoint instead:

1. **Find** the object on the server.
2. **Answer** a few questions — which columns, which options.
3. **Create the endpoint**: one named parameter per input, with its label, its help and its default. It is added unsaved and opened for review.

A generator can also build several endpoints at once, or a **whole screen**: the dialog then asks for the application, the screen identifier, its title and whether to add it to the menu, and creates the endpoints and the screen in one validated pass — nothing is written when anything is invalid. An endpoint that already exists is kept as it is and used by the new screen, unless **Replace the N endpoint(s) that already exist** is ticked.

A generated endpoint remembers what it was created from. **Refresh from the server** builds it again and shows what changes before applying it: the address, the body and the parameters follow the server; the name, the label, the description and what was written on a parameter that stays are kept.

The generators of the JD Edwards AIS connector are described in [Nomajde — Create from…](../../nomajde/ais/create-from.md).

---

## Endpoints that change data \{#writable\}

An endpoint marked **Changes data** is treated apart:

- a screen can name it as its insert, update or delete — see [A screen on an API endpoint](./screens/api-screens.md#save);
- the **AI assistant** does not call it like a read: it needs the *API tool* and the *Write tools* switched on in **Administer → App → AI Assistant**, a user allowed to change data through the assistant, and it proposes a **card** in the chat — nothing is sent until the user applies it. Over MCP, *Allow changes over MCP* is needed as well;
- the call is recorded in the [AI usage](../../monitoring/ai-usage.md) like the other changes made through the assistant.

An endpoint that is not marked is treated as a read: **mark every endpoint that writes**.

---

## Served by a function \{#function\}

One HTTP call cannot do everything: changing a record a server only offers through a form means finding it, checking that exactly one was found, then acting. **Served by a function** names a function of an application's plugin that answers instead of the HTTP call. Its arguments are the endpoint's parameters; its answer is treated like a response — rows, error and warning fields, mappings, *Changes data*. For a screen, an action, a job or the assistant, it is an endpoint like any other.

## Served by a service \{#service\}

**Served by an action** names a [service](./services.md): its steps — queries, other endpoints, functions, conditions, loops — run on the server and answer as one endpoint. The endpoint's parameters are the service's inputs; what the service returns is the answer. It runs with the endpoint's permission: who may call the endpoint runs its steps. **Expose**, on the Services page, creates such an endpoint in one click.

---

## Permissions and safety \{#security\}

Each endpoint has its permission, `api:<connector>:<endpoint>`: a role can be allowed one report or one orchestration, not all of them. The permission holds because a value can never redirect a call:

- in the **path**, a value cannot climb out of the endpoint's path nor give another address;
- in a **JSON body**, a value placed inside a string stays inside that string;
- in a **form body**, a value cannot add a pair;
- a **file** sent by a call made on behalf of a user stays inside the folder the endpoint names.

A call that would break one of these rules is refused before anything is sent.

---

## What the caller sees on a failure \{#errors\}

- A server that cannot be reached is named with its address: *cannot connect to https://host:8999 — check the connector's base URL*.
- An HTTP error carries the server's own words when the error fields find them.
- A list that is not where the endpoint says is an error naming what the answer holds, not an empty screen.

---

## Tips & best practices \{#tips\}

- Write the **help** and the **example** of every parameter: they serve the people who fill the form and the assistant alike.
- Prefer several specific endpoints to one generic endpoint with JSON: each gets its permission and its form.
- Declare the **error fields** of any server that answers 200 with its errors inside; otherwise a refused save looks like a success.
- Group the endpoints of one application or one subject under a heading.
- Cover the endpoints the business depends on with [tests](./tests.md).

---

## Related

- [Connectors](../connectors.md) — the connector itself: address, authentication, environments.
- [A screen on an API endpoint](./screens/api-screens.md) · [Services](./services.md) · [Tests](./tests.md)
- [REST API](../../references/rest-api.md)
