---
title: AI assistant
description: "What the AI assistant knows in Nomajde: eight read-only tools on the JD Edwards EnterpriseOne cross reference, the upgrade analysis, the platform's performance, who may run an object, the orchestrations and the setup of a version, three playbooks, the Upgrade and Platform starter questions, and the Cross Reference, Prepare for upgrade and Performance pages telling it what is on screen — always under the pages' own permissions."
keywords: [Nomajde, AI assistant, JD Edwards, JDE E1, cross reference, where used, upgrade, retrofit, performance, security, object access, orchestrations, versions, processing options, data selection, playbooks, starter questions, MCP, Claude Desktop, Claude Code]
---

# AI assistant

The assistant of Liberty Next — the **Assistant** button at the top right — knows Nomajde: it answers questions on the JD Edwards EnterpriseOne objects, on the upgrade under way, on what slows the platform down, on who may run an application or a report, on the orchestrations and on how a version is set up, with the same data as the pages, and follows Nomajde's procedures step by step. The same tools are offered to an MCP client (Claude Desktop, Claude Code…) connected to the installation.

How the assistant works — the drawer, the conversations, the cards to approve — is described in the [Liberty Next documentation](../framework/ai-assistant.md). This page lists what Nomajde adds.

---

## At a glance

<svg viewBox="0 0 1200 332" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njai-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njai-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njai-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njai-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="380" y="20" width="440" height="292" rx="14" fill="url(#njai-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="400" y="48" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Assistant</text>
  <text x="400" y="64" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">Page: Cross Reference · P4210 · W4210A</text>
  <text x="800" y="64" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">×</text>
  <line x1="392" y1="74" x2="808" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="400" y="88" width="145" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="472.5" y="101.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Where is this object used?</text>
  <rect x="400" y="114" width="207" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="503.5" y="127.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Who uses it, and when was it last used?</text>
  <rect x="400" y="140" width="217" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="508.5" y="153.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Which user defined objects are around it?</text>
  <rect x="400" y="166" width="293" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="546.5" y="179.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Is it in the upgrade analysis, and what does it wait for?</text>
  <rect x="400" y="200" width="400" height="62" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="410" y="208" width="93" height="15" rx="7.5" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="456.5" y="218.7" fill="#c084fc" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">nomajde_where_used</text>
  <text x="410" y="238" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">P4210 is carried by 14 applications and 6 reports; 3 objects</text>
  <text x="410" y="252" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">name it in their event rules — the first 20 are listed.</text>
  <rect x="400" y="274" width="400" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="410" y="289.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Ask a question…</text>
  <rect x="140" y="50" width="210" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="150" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The page tells it</text>
  <text x="150" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">object, form, tab on screen</text>
  <line x1="350" y1="67.0" x2="400" y2="62" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njai-arrow)"/>
  <rect x="140" y="120" width="210" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="150" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Starters of the page</text>
  <text x="150" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Cross Reference, Upgrade, Performance</text>
  <line x1="350" y1="137.0" x2="400" y2="124" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njai-arrow)"/>
  <rect x="850" y="210" width="210" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="860" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Eight read-only tools</text>
  <text x="860" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">under the pages' own permissions</text>
  <line x1="850" y1="227.0" x2="520" y2="216" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njai-arrow)"/>
  <rect x="140" y="230" width="210" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="150" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cut to what it can read</text>
  <text x="150" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">totals always count everything</text>
  <line x1="350" y1="247.0" x2="410" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njai-arrow)"/>
  <rect x="850" y="50" width="210" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="860" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Stop sending the page</text>
  <text x="860" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">× on the context line</text>
  <line x1="850" y1="67.0" x2="796" y2="62" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njai-arrow)"/>
</svg>

---

## What you can ask \{#tools\}

Eight tools, **all read-only**: they read JD Edwards and the analyses, never change anything.

| Tool | What it answers | For example |
|---|---|---|
| **Find an object** (`nomajde_find_object`) | An object by its id, the start of one or words of its title, across every kind — applications (also by a form), reports, tables, views, data items, functions, data structures, user defined objects; or how many objects of one kind there are. | *Which application is "address book revision"?* |
| **Describe an object** (`nomajde_object`) | One object: an application's forms, one form's fields, columns and buttons, who uses it and when it last ran, the user defined objects on it, its line in the upgrade analysis; a report's sections; a table's columns and indexes; a view's tables, columns and joins; a function, a data structure, a user defined object. | *Which fields are on the form W01012B?* |
| **Where it is used** (`nomajde_where_used`) | For a data item, a table, a view, a function, an application or a report: the applications and reports that carry it, the views and structures that hold it, the objects whose event rules name it, the user defined objects around it — for every object or the customer's own only. | *What would a change to the table F0101 touch?* |
| **Upgrade status** (`nomajde_upgrade_status`) | The figures of the retrofit, its breakdowns and its waves; one object's line; or the objects of a status, a person, a type or a wave. | *Which objects can be started now?* |
| **Performance advice** (`nomajde_performance_advice`) | What slows the platform down now, the heaviest first, each line with what it means and what to do. | *JD Edwards is slow: where should I look first?* |
| **Object access** (`nomajde_object_access`) | Who may run an application or a report, and what a user or a role is given — see [below](#object-access). | *Who can run P4210?* · *Can JSMITH change it?* |
| **Orchestrations** (`nomajde_orchestrations`) | The orchestrations JD Edwards exposes, found by words of their name, description or category (with how many there are in all), or one described: what it does, its version, the inputs it takes and what it gives back. | *Is there an orchestration that creates a sales order?* |
| **Version setup** (`nomajde_version_options`) | How a version is set up: for a report, its data selection and sequence in words, its processing options per tab as *title = value* and its printer; for an application, its processing option values. Blank options are counted, not listed. | *What are the processing options of P4210 ZJDE0001?* |

The pages answer with thousands of rows; an answer of the assistant is cut to what a model can read. The **totals always count everything**, and a list says how many lines it left out — the full list stays on the page, where it can be exported.

### Who may run an object \{#object-access\}

**Object access** reads the security live from JD Edwards — the security workbench, the roles each user holds today (their effective and expiration dates are read) and the roles' sequence — and answers three questions:

- **an object**: how many users are allowed and how many denied, the first names, the rule that decides for each, and every rule written on the object;
- **a user or a role**: its own rules — what is given, what is forbidden — and, for a user, the roles held;
- **both**: run, add, change and delete for that user or role, and the rule that decides.

The decision follows JD Edwards' order: the user's own rules first, then the roles from the highest sequence, then `*PUBLIC` — the most precise rule winning at each level. It reads rules, it never changes them.

### Orchestrations and versions, cut to the answer \{#ais-tools\}

**Orchestrations** and **Version setup** read JD Edwards live through its AIS server. They answer in a few thousand characters where the raw AIS answer runs to tens of thousands: the full list of orchestrations is about 185,000 characters on a standard system, while an answer of the assistant is cut at 60,000. The other AIS reads — a business function's parameters, the scheduler, a count — answer in a few hundred characters and stay with the general call.

---

## The procedures it follows \{#playbooks\}

Next to the procedures Nomajde already ships (create a user, secure an application, load UDC values, prepare an upgrade, test JD Edwards after a change…), three go with the tools:

| Playbook | What the assistant does |
|---|---|
| **See what a change would touch** | Names the object exactly, asks where it is used, reads the answer in order — applications and reports, views and structures, event rules —, then the user defined objects around it, and says the limits of the cross reference. |
| **Review the user defined objects** | Counts them by type, lists those on an application, describes one and what carries it, and points to the upgrade's *User defined objects* tab for those to test again. |
| **JD Edwards is slow: where to look** | Reads the performance advice, takes the lines in order, describes the callers of a slow business function, and says what the figures do not tell (no history, no AWR / ASH). |

The procedure *Prepare an upgrade* names the upgrade tool, so the assistant reads the status of the retrofit instead of describing the screens.

---

## Starter questions \{#starters\}

On an empty conversation in Nomajde, the questions are grouped by subject — *Users and roles*, *Security*, *Master data*, *Development*, *Analysis*, and **Upgrade** (*Where does the retrofit stand?*, *Which objects to retrofit are assigned to nobody?*, *How do I prepare an upgrade analysis?*) and **Platform** (*JD Edwards is slow: where should I look first?*).

Three pages have questions of their own, which take the place of the application's:

| Page | Questions |
|---|---|
| [Cross Reference](./cross-reference.md) | *Where is this object used?* · *Who uses it, and when was it last used?* · *Which user defined objects are around it?* · *Is it in the upgrade analysis, and what does it wait for?* |
| [Prepare for upgrade](./upgrade/analysis.md) | *Where does the retrofit stand?* · *Which objects can be started now?* · *Which objects to retrofit are assigned to nobody?* · *What does the object I opened wait for, and who waits for it?* |
| [Performance](./monitoring/performance.md) | *What should I look at first, and why?* · *Which objects call the slowest business function?* · *What do these figures not tell me?* |

---

## What the page tells it \{#context\}

The **Cross Reference**, **Prepare for upgrade** and **Performance** pages tell the assistant what is on screen, so that *this object* or *this line* needs no explanation:

- **Cross Reference** — the object open, its kind, the form and the tab shown;
- **Prepare for upgrade** — the path code analysed, the tab, the filter and the object open;
- **Performance** — the advice shown, the heaviest first.

[Platform synthesis](./synthesis.md) and [Architecture](./monitoring/architecture.md) do the same with their figures. The line under the assistant's header shows what is sent; its **×** stops it for as long as the user stays on the page.

---

## Who can use it \{#access\}

A tool is offered to whoever may open the page it stands on: the three cross-reference tools need the Cross Reference page's permissions (`plugin:nomajde.xref:*`), the upgrade tool those of Prepare for upgrade (`plugin:nomajde.upgrade_view:*`), the performance tool those of Performance (`plugin:nomajde.performance:*`). **Object access** goes to the **Security administrator** and the **Administrator**; **Orchestrations** and **Version setup** to the **Developer** and the **Administrator** — the two AIS tools also need the AIS connection of Nomajde. Nothing more to grant: a role that opens the pages has the tools, and the assistant itself needs `ai:chat` — every [predefined role](./overview.md#roles) of Nomajde holds it.

---

## Related

- [AI assistant](../framework/ai-assistant.md) — how the assistant works in Liberty Next.
- [Cross Reference](./cross-reference.md) · [Prepare for upgrade](./upgrade/analysis.md) · [Performance](./monitoring/performance.md).
