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

<svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tst-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tst-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tst-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tst-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="384" rx="14" fill="url(#tst-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tests</text>
  <rect x="240" y="60" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="262.0" y="74.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="290" y="60" width="94" height="22" rx="5" fill="url(#tst-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="337.0" y="74.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Run this case</text>
  <rect x="390" y="60" width="94" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="437.0" y="74.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Run the suite</text>
  <rect x="490" y="60" width="134" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="557.0" y="74.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Record the reference</text>
  <rect x="636" y="66" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="653" y="75" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">also the cases that write</text>
  <rect x="240" y="96" width="168" height="290" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="106" width="148" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="324.0" y="120.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ New suite</text>
  <text x="252" y="148" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">orders</text>
  <circle cx="258" cy="173" r="4" fill="#4ade80"/>
  <text x="268" y="176.5" fill="#cbd5e1" fontSize="8.2" fontFamily="ui-monospace, monospace">list-has-columns</text>
  <rect x="246" y="188" width="156" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <circle cx="258" cy="199" r="4" fill="#fb923c"/>
  <text x="268" y="202.5" fill="#cbd5e1" fontSize="8.2" fontFamily="ui-monospace, monospace">create-then-cancel</text>
  <circle cx="258" cy="225" r="4" fill="#4ade80"/>
  <text x="268" y="228.5" fill="#cbd5e1" fontSize="8.2" fontFamily="ui-monospace, monospace">unknown-id-refused</text>
  <circle cx="258" cy="251" r="4" fill="#f87171"/>
  <text x="268" y="254.5" fill="#cbd5e1" fontSize="8.2" fontFamily="ui-monospace, monospace">price-is-computed</text>
  <text x="258" y="282" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">+ New case</text>
  <rect x="420" y="96" width="330" height="290" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="432" y="154" width="150" height="24" rx="12.0" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="507.0" y="169.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">create-then-cancel</text>
  <line x1="507" y1="178" x2="507" y2="200" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#tst-flow)"/>
  <rect x="432" y="202" width="150" height="52" rx="8" fill="rgba(255,255,255,0.03)" stroke="#4ade80" strokeWidth="1.2"/>
  <text x="442" y="217" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ORDER_CREATE</text>
  <text x="442" y="232" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">create</text>
  <text x="442" y="245" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">works · 1 row(s)</text>
  <line x1="507" y1="254" x2="507" y2="276" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#tst-flow)"/>
  <circle cx="507" cy="264" r="7" fill="#0f172a" stroke="#4a9eff" strokeWidth="1"/>
  <text x="507" y="267.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="432" y="278" width="150" height="52" rx="8" fill="rgba(255,255,255,0.03)" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="442" y="293" fill="#fb923c" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ORDER_CANCEL</text>
  <text x="442" y="308" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">cleanup</text>
  <text x="442" y="321" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">works</text>
  <line x1="507" y1="330" x2="507" y2="352" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#tst-flow)"/>
  <rect x="477" y="354" width="60" height="24" rx="12.0" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="507.0" y="369.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">End</text>
  <text x="600" y="226" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">passed</text>
  <text x="600" y="302" fill="#fb923c" fontSize="8.5" fontFamily="system-ui, sans-serif">changed: differs</text>
  <text x="600" y="315" fill="#fb923c" fontSize="8.5" fontFamily="system-ui, sans-serif">from the reference</text>
  <rect x="762" y="96" width="198" height="290" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="774" y="116" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">THE STEP</text>
  <text x="774" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENDPOINT CALLED</text>
  <rect x="774" y="144" width="174" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="784" y="158.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">order_create ▾</text>
  <text x="774" y="186" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMETERS</text>
  <rect x="774" y="192" width="174" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="784" y="206.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">CUSTOMER   1001</text>
  <text x="774" y="234" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IS EXPECTED</text>
  <rect x="774" y="240" width="174" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="861.0" y="254.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Fill from the answer</text>
  <text x="774" y="282" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The call</text>
  <text x="948" y="282" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">must work</text>
  <text x="774" y="300" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows, at least</text>
  <text x="948" y="300" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <text x="774" y="318" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The first row holds</text>
  <text x="774" y="334" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">STATUS = OPEN</text>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Suites and cases</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with their last result</text>
  <line x1="200" y1="237.0" x2="240" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A case is a flow</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one card per call</text>
  <line x1="200" y1="157.0" x2="432" y2="162" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The + adds a step</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">at that place</text>
  <line x1="200" y1="317.0" x2="500" y2="264" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="1000" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Record the reference</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">before the change</text>
  <line x1="1000" y1="47.0" x2="614" y2="60" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="1000" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fill from the answer</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">proposes what to expect</text>
  <line x1="1000" y1="257.0" x2="948" y2="251" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
</svg>

---

## Suites, cases, steps \{#model\}

| | |
|---|---|
| **Suite** | Names an API connector and holds cases. **New suite** asks for its name. |
| **Case** | One thing checked — *The customer list still has its columns*. **New case**, under the suite. |
| **Step** | One call to an endpoint of the suite's connector, with what is expected. |

The left column lists the suites and their cases, each with the icon of its last result. The middle draws the picked case: a start, one card per step — its endpoint, its name, a summary of what it expects, **coloured by its last result** — and an end. The right panel edits what is picked.

### The case \{#case\}

| Field | Meaning |
|---|---|
| **Id** | The case's identifier in its suite. |
| **What it checks** | The sentence shown in the lists and the results. |
| **This case changes data: played only when a run allows it** | Tick it when a step writes. |
| **Last runs** | The last eight runs of the case; a recorded run is tagged *reference*. |

### A step \{#step\}

The **+** on a link adds a step at that place; a click on a card opens it.

| Field | Meaning |
|---|---|
| **Name** | Unique in the case: the results and the reference are kept by step. |
| **Endpoint called** | Picked in the connector's list. |
| **Parameters** | The endpoint's own form: one labelled field per parameter, its help under it, a dropdown when it has a list of values. |
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

A run saves the unsaved changes first, then says how it went: *N passed · N failed · N changed · N skipped*.

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

A functional team can therefore own its tests without being administrators.

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
