---
title: Tests
description: "Logic → Tests in Liberty Next: non-regression tests of an application's API endpoints — suites and cases, a case drawn as a flow of calls and edited beside it, what each call must answer (works or refused, rows, first-row values), Fill from the answer, Run this case, Run the suite, Record the reference, and the permissions that let a functional team use them."
keywords: [Liberty Next, tests, non-regression, test suite, test case, API endpoint, reference run, compare, fill from the answer, tests:view, tests:run, tests:edit]
---

# Tests

**Tests** checks that what an application calls **still answers the same**: after a change of configuration, an update of the system behind an API, a new version. A test is written without code — a case is a **flow of calls** to the endpoints of an API connector, each with what is expected of its answer — and compared from run to run with a **reference**.

Access: **Liberty Next → Logic → Tests**. The results over time are in [Operate → Test results](../../monitoring/test-results.md).

---

## At a glance

<svg viewBox="0 0 1320 500" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tst-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tst-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tst-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tst-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="456" rx="14" fill="url(#tst-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="12" fontFamily="system-ui, sans-serif">⛉</text>
  <text x="258" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tests</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="72" width="180" height="384" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="82" width="160" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="326.0" y="96.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ New suite</text>
  <text x="248" y="124" fill="#94a3b8" fontSize="7.5" fontWeight="700" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">ORDERS — WHAT MUST KEEP WORKING</text>
  <rect x="244" y="134" width="164" height="22" rx="5" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <circle cx="256" cy="145" r="4.5" fill="none" stroke="#4ade80" strokeWidth="1.4"/>
  <text x="267" y="148.5" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">The order list has its col…</text>
  <circle cx="256" cy="171" r="4.5" fill="none" stroke="#fb923c" strokeWidth="1.4"/>
  <text x="267" y="174.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">An order is created then…</text>
  <circle cx="256" cy="197" r="4.5" fill="none" stroke="#4ade80" strokeWidth="1.4"/>
  <text x="267" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">An unknown id is refused</text>
  <circle cx="256" cy="223" r="4.5" fill="none" stroke="#f87171" strokeWidth="1.4"/>
  <text x="267" y="226.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">The price is computed</text>
  <text x="252" y="252" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">+ New case</text>
  <text x="252" y="274" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">✧ Case from an endpoint</text>
  <rect x="428" y="72" width="41" height="20" rx="5" fill="url(#tst-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="448.5" y="85.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="474" y="72" width="93" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="520.5" y="85.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run this case</text>
  <rect x="572" y="72" width="93" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="618.5" y="85.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run the suite</text>
  <rect x="428" y="97" width="126" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="491.0" y="110.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⚑ Record the reference</text>
  <rect x="566" y="102" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="583" y="111" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">also the cases that write</text>
  <rect x="428" y="122" width="98" height="20" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="477.0" y="135.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete the suite</text>
  <rect x="428" y="150" width="340" height="306" rx="8" fill="#0b1020" stroke="#1f2937" strokeWidth="1"/>
  <rect x="680" y="160" width="78" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="691" y="174" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">−</text>
  <text x="719" y="173.5" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">100%</text>
  <text x="747" y="174" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="446" y="183" width="230" height="26" rx="13.0" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="458" y="199.5" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">✓</text>
  <text x="472" y="199.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">The order list has its columns</text>
  <line x1="436" y1="260" x2="454" y2="260" stroke="#475569" strokeWidth="1"/>
  <circle cx="444" cy="260" r="6" fill="#0d1220" stroke="#475569" strokeWidth="1"/>
  <text x="444" y="263.3" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="454" y="235" width="140" height="50" rx="8" fill="#111827" stroke="#4a9eff" strokeWidth="1.6"/>
  <circle cx="469" cy="248" r="4.5" fill="none" stroke="#4ade80" strokeWidth="1.3"/>
  <text x="479" y="252" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIST_ORDERS</text>
  <text x="464" y="267" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">list</text>
  <text x="464" y="278" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">3 value(s)</text>
  <line x1="594" y1="260" x2="618" y2="260" stroke="#475569" strokeWidth="1"/>
  <circle cx="606" cy="260" r="6" fill="#0d1220" stroke="#475569" strokeWidth="1"/>
  <text x="606" y="263.3" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="618" y="235" width="130" height="50" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <circle cx="633" cy="248" r="4.5" fill="none" stroke="#4ade80" strokeWidth="1.3"/>
  <text x="643" y="252" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GET_ORDER</text>
  <text x="628" y="267" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">first order</text>
  <text x="628" y="278" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">2 value(s)</text>
  <line x1="436" y1="330" x2="454" y2="330" stroke="#475569" strokeWidth="1"/>
  <circle cx="444" cy="330" r="6" fill="#0d1220" stroke="#475569" strokeWidth="1"/>
  <text x="444" y="333.3" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="454" y="317" width="64" height="26" rx="13.0" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="466" y="333.5" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">⚑</text>
  <text x="480" y="333.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">End</text>
  <rect x="780" y="72" width="304" height="384" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="794" y="94" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">The step</text>
  <text x="794" y="114" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NAME</text>
  <text x="935.0" y="114" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ENDPOINT CALLED</text>
  <rect x="794" y="119" width="135.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="804" y="132.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">list</text>
  <rect x="935.0" y="119" width="135.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="945.0" y="132.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">list_orders ▾</text>
  <text x="794" y="158" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PARAMETERS</text>
  <rect x="794" y="163" width="276" height="34" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="802" y="177" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Company</text>
  <rect x="860" y="168" width="70" height="18" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="870" y="180.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">00001</text>
  <text x="1062" y="192" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">As text</text>
  <text x="794" y="222" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What is expected</text>
  <rect x="932" y="209" width="120" height="19" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="992.0" y="222.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">✧ Fill from the answer</text>
  <text x="794" y="246" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">THE CALL</text>
  <rect x="794" y="251" width="110" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="804" y="264.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">must work ▾</text>
  <text x="794.0" y="290" fill="#64748b" fontSize="7" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">ROWS, AT LEAST</text>
  <rect x="794.0" y="295" width="88.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="804.0" y="308.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="888.0" y="290" fill="#64748b" fontSize="7" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">ROWS, EXACTLY</text>
  <rect x="888.0" y="295" width="88.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="898.0" y="308.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="982.0" y="290" fill="#64748b" fontSize="7" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">ROWS, AT MOST</text>
  <rect x="982.0" y="295" width="88.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="992.0" y="308.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="794" y="334" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">THE FIRST ROW HOLDS</text>
  <rect x="794" y="339" width="276" height="34" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="802" y="353" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">STATUS = OPEN</text>
  <text x="802" y="367" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">+ Add a line</text>
  <rect x="794" y="385" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="811" y="394" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Played even after a failure (a cleanup)</text>
  <text x="794" y="416" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▸ Advanced — values kept, paths in the raw answer</text>
  <rect x="794" y="428" width="89" height="19" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="838.5" y="441.0" fill="#f87171" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete the step</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Suites and cases</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each with its last result</text>
  <line x1="200" y1="113.0" x2="250" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What the case checks</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its last result in front</text>
  <line x1="200" y1="237.0" x2="446" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The + on a link</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">inserts an empty step</text>
  <line x1="200" y1="317.0" x2="440" y2="264" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One card per call</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">coloured by its last result</text>
  <line x1="200" y1="397.0" x2="488" y2="286" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="1120" y="58" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="73" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run · Record</text>
  <text x="1130" y="86" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">check, or keep a reference</text>
  <line x1="1120" y1="75.0" x2="612" y2="72" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="1120" y="196" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fill from the answer</text>
  <text x="1130" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">plays the call, proposes</text>
  <line x1="1120" y1="213.0" x2="1070" y2="218" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="1120" y="270" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What is expected</text>
  <text x="1130" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">works or refused, rows, values</text>
  <line x1="1120" y1="287.0" x2="1070" y2="305" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="1120" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A cleanup step</text>
  <text x="1130" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">played even after a failure</text>
  <line x1="1120" y1="397.0" x2="1044" y2="390" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="20" y="440" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="455" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Case from an endpoint</text>
  <text x="30" y="468" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its answer now, nothing saved</text>
  <line x1="200" y1="457.0" x2="250" y2="276" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
</svg>

---

## Suites, cases, steps \{#model\}

| | |
|---|---|
| **Suite** | Names an API connector and holds cases. **New suite** asks for its name. |
| **Case** | One thing checked — *The customer list still has its columns*. **New case**, under the suite, or **Case from an endpoint** to start from what an endpoint answers — see [below](#from-endpoint). |
| **Step** | One call to an endpoint of the case's connector — the suite's by default —, with what is expected. |

The left column lists the suites — **New suite** at the top — and under each its cases, each with the icon of its last result, then **New case** and **Case from an endpoint**. The middle holds the buttons of the suite (**Save**, **Run this case**, **Run the suite**, **Record the reference**, **also the cases that write**, **Delete the suite**) above the picked case, drawn as a flow: at the start, what the case checks with its last result; one card per step — its endpoint, its name, a summary of what it expects, **coloured by its last result** —; **End**. The flow has its zoom and continues on the next row when it is long. The right panel edits what is picked: the case, or a step.

### The suite and the case \{#case\}

The panel opens on **The suite** — the settings shared by its cases — above **The case**:

| Field | Meaning |
|---|---|
| **Name of the suite** | The name shown at the head of its cases in the list and in the results. Blank: the file's name. |
| **Connector of the suite** | The API connector whose endpoints the steps call. |
| **Id** | The case's identifier in its suite. |
| **Connector of this case** | Another API connector for this case's steps; *the suite's* by default. |
| **What it checks** | The sentence shown in the lists and the results. |
| **This case changes data: played only when a run allows it** | Tick it when a step writes. |
| **Last runs** | The last eight runs of the case — result, date and time; a recorded run is tagged *reference*. |

**Delete the case** is under the list.

### A case from an endpoint \{#from-endpoint\}

**Case from an endpoint**, under the cases of a suite, asks *Which endpoint?* among the endpoints of the suite's connector and prepares a first case for it: one step calling it with the example values of its variables — its example, else its default, else the first of its choices —, expecting what it answers now: at least one row when it returns rows, otherwise the first values its answer holds. The case takes the endpoint's label as what it checks. *Case prepared from what the endpoint answers now: complete what it must check, then save.*

- **An endpoint that changes data is not called**: its case comes marked as writing (*This case changes data*), with the call only — say what it must answer, and add a step that puts things back.
- A call that fails with the example values gives the case all the same, with the reason: fill the step's parameters, then try it.
- **Nothing is saved until the suite is saved**: the case is added to the suite being edited; **Save** keeps it.

The link is offered to who may change and run the tests, once the connector has endpoints.

### A step \{#step\}

The **+** on a link inserts an empty step at that place — *no endpoint yet* until one is picked; a click on a card opens it. **Delete the step** is at the bottom of its panel.

| Field | Meaning |
|---|---|
| **Name** | Unique in the case: the results and the reference are kept by step. |
| **Endpoint called** | Picked in the connector's list. |
| **Parameters** | The endpoint's own form: one labelled field per parameter, its help under it, a dropdown when it has a list of values or names a [dictionary lookup](./queries/parameter-binding.md#param-lookup) — a value kept by an earlier step (`{{name}}`) can still be typed there. |
| **The call** | *must work* or *must be refused* — with **The refusal says** to check the message. |
| **Rows, at least** / **exactly** / **at most** | The number of rows, counted where the endpoint says its rows are. |
| **The first row holds** | Values of the first row, by the endpoint's column names. |
| **Played even after a failure (a cleanup)** | The step runs even when an earlier one failed: how a case that writes removes what it created. |

**Fill from the answer** plays the call now and proposes what to expect — the number of rows and the first row's values: keep the lines that must stay true, delete the others. An endpoint that changes data is not played from there: save the step and run the case.

**Advanced — values kept, paths in the raw answer** holds what the fields above do not cover: a value **kept for the next steps** (used there as `{{name}}` in a parameter), a value of the raw answer that equals or holds a text, paths that must hold something or nothing, a warning, and the paths **compared with the reference run**. It is needed for an endpoint that does not say where its rows are.

---

## Run and compare \{#run\}

| Button | Does |
|---|---|
| **Run this case** | Plays the picked case. |
| **Run the suite** | Plays every case, one after the other. |
| **Record the reference** | Plays the suite and keeps, for the cases that passed, what their steps keep: the reference the next runs are compared with. |
| **also the cases that write** | Allows the cases marked as changing data on this run. |

A run saves the unsaved changes first, then says how it went: *N passed · N failed · N changed · N skipped*. The icons of the cases and the colours of the cards follow at once.

| Result | Colour | Meaning |
|---|---|---|
| **Passed** | Green | Every check holds, and nothing differs from the reference. |
| **Failed** | Red | A check does not hold, the call failed, or a value expected from an earlier step was never kept. |
| **Changed** | Orange | The checks hold, but something kept differs from the reference — gone, new, another count, another value. |
| **Skipped** | Grey | The case writes and the run did not allow it, an earlier step failed, or the case has no step. |

A case takes the worst result of its steps. The twenty last runs of each case are kept.

---

## Where the tests are kept \{#files\}

A suite is a file of the configuration (`tests/<suite>.toml`): it is packaged, versioned and delivered with the application, and each save keeps the former version in **Deploy → History**. The runs and the reference are kept beside it and stay on the instance: a reference recorded on the test environment is not the production's.

---

## From a job, from a menu \{#use\}

- A job's run form can offer the list of suites, so that an application ships a job that plays a suite on a schedule and fails when a case fails.
- An application's menu can carry the two pages — **Tests** and **Test results** — for its own users: see [Item types](./menus/item-types.md).

---

## Access \{#access\}

The tests have their own permissions, in a role's *Beyond the menus* rules, type **Tests** — each includes the one before, and a superuser holds them all:

| Permission | Label in the role editor | Allows |
|---|---|---|
| `tests:view` | **See the test suites and their results** | Read the suites, the cases and the results. |
| `tests:run` | **Play the tests (and see them)** | Run a case or a suite, record the reference, fill from the answer. |
| `tests:edit` | **Write the tests: suites, cases, steps (and play them)** | Create, change and delete suites, cases and steps. |

A functional team can therefore own its tests without being administrators. The page only shows the buttons the user may use: without `tests:edit`, no **Save**, no new or delete buttons, and a line says *You may play these tests, not change them*; without `tests:run` either, no **Run** nor **Record** nor **Fill from the answer** — *You may read these tests, not play or change them*.

---

## Tips & best practices \{#tips\}

- One case, one thing checked: a failure then names what broke.
- Expect a **refusal** where one is due — an unknown identifier, a missing required value: a system that starts accepting anything is a regression too.
- Record the reference just before a change, run the suite just after.
- Keep the cases that write apart, each ending with its cleanup step.

---

## Related

- [Test results](../../monitoring/test-results.md) · [API endpoints](./api-endpoints.md) · [Services](./services.md)
- [Roles and permissions](./secure/roles-and-permissions.md)
