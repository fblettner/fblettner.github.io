---
title: Non-regression tests
description: "The Tests folder of Nomajde: non-regression tests for JD Edwards played through the AIS server — cases drawn as a flow of calls (a form, a data query, a business function), what each call must answer, a reference run recorded before a change and compared after an ESU, a tools release or an upgrade; results, the job that plays a suite and its Excel report."
keywords: [Nomajde, JD Edwards, non-regression tests, AIS, test suite, test case, reference run, ESU, tools release, upgrade, smoke test, form service, data service]
---

# Non-regression tests

The **Tests** folder checks that JD Edwards **still behaves the same** after a change — an ESU, a tools release, an upgrade, a package build. A test calls JD Edwards the way an integration does, through the AIS server: it opens a form, reads a table, runs a business function, and compares the answer with what is expected and with a **reference run** recorded before the change.

Nothing is installed in JD Edwards, and no script is written: a case is built by picking calls in a list and letting JD Edwards' own answer fill in what to expect.

---

## At a glance

<svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="384" rx="14" fill="url(#jt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tests</text>
  <rect x="240" y="60" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="262.0" y="74.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="290" y="60" width="94" height="22" rx="5" fill="url(#jt-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
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
  <text x="252" y="148" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">smoke</text>
  <circle cx="258" cy="173" r="4" fill="#4ade80"/>
  <text x="268" y="176.5" fill="#cbd5e1" fontSize="8.2" fontFamily="ui-monospace, monospace">ais-is-up</text>
  <circle cx="258" cy="199" r="4" fill="#4ade80"/>
  <text x="268" y="202.5" fill="#cbd5e1" fontSize="8.2" fontFamily="ui-monospace, monospace">udc-types-of-system-00</text>
  <rect x="246" y="214" width="156" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <circle cx="258" cy="225" r="4" fill="#fb923c"/>
  <text x="268" y="228.5" fill="#cbd5e1" fontSize="8.2" fontFamily="ui-monospace, monospace">address-book-form</text>
  <circle cx="258" cy="251" r="4" fill="#4ade80"/>
  <text x="268" y="254.5" fill="#cbd5e1" fontSize="8.2" fontFamily="ui-monospace, monospace">unknown-table-is-refused</text>
  <text x="258" y="282" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">+ New case</text>
  <rect x="420" y="96" width="330" height="290" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="432" y="154" width="150" height="24" rx="12.0" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="507.0" y="169.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">address-book-form</text>
  <line x1="507" y1="178" x2="507" y2="200" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#jt-flow)"/>
  <rect x="432" y="202" width="150" height="52" rx="8" fill="rgba(255,255,255,0.03)" stroke="#4ade80" strokeWidth="1.2"/>
  <text x="442" y="217" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DATA_QUERY</text>
  <text x="442" y="232" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">read</text>
  <text x="442" y="245" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">≥ 1 row(s) · SY = 00</text>
  <line x1="507" y1="254" x2="507" y2="276" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#jt-flow)"/>
  <circle cx="507" cy="264" r="7" fill="#0f172a" stroke="#4a9eff" strokeWidth="1"/>
  <text x="507" y="267.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="432" y="278" width="150" height="52" rx="8" fill="rgba(255,255,255,0.03)" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="442" y="293" fill="#fb923c" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FORM_P01012_W01012B</text>
  <text x="442" y="308" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">describe</text>
  <text x="442" y="321" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">works · 12 value(s) kept</text>
  <line x1="507" y1="330" x2="507" y2="352" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#jt-flow)"/>
  <rect x="477" y="354" width="60" height="24" rx="12.0" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="507.0" y="369.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">End</text>
  <text x="600" y="226" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">passed</text>
  <text x="600" y="302" fill="#fb923c" fontSize="8.5" fontFamily="system-ui, sans-serif">changed: differs</text>
  <text x="600" y="315" fill="#fb923c" fontSize="8.5" fontFamily="system-ui, sans-serif">from the reference</text>
  <rect x="762" y="96" width="198" height="290" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="774" y="116" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">THE STEP</text>
  <text x="774" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENDPOINT CALLED</text>
  <rect x="774" y="144" width="174" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="784" y="158.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">data_query ▾</text>
  <text x="774" y="186" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMETERS</text>
  <rect x="774" y="192" width="174" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="784" y="206.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">TABLE   F0004</text>
  <text x="774" y="234" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IS EXPECTED</text>
  <rect x="774" y="240" width="174" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="861.0" y="254.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Fill from the answer</text>
  <text x="774" y="282" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The call</text>
  <text x="948" y="282" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">must work</text>
  <text x="774" y="300" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows, at least</text>
  <text x="948" y="300" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <text x="774" y="318" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The first row holds</text>
  <text x="774" y="334" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SY = 00</text>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Suites and cases</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with their last result</text>
  <line x1="200" y1="237.0" x2="240" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jt-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A case is a flow</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one card per call</text>
  <line x1="200" y1="157.0" x2="432" y2="162" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jt-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The + adds a step</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">at that place</text>
  <line x1="200" y1="317.0" x2="500" y2="264" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jt-arrow)"/>
  <rect x="1000" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Record the reference</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">before the change</text>
  <line x1="1000" y1="47.0" x2="614" y2="60" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jt-arrow)"/>
  <rect x="1000" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fill from the answer</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">proposes what to expect</text>
  <line x1="1000" y1="257.0" x2="948" y2="251" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jt-arrow)"/>
</svg>

---

## The three entries \{#entries\}

| Menu entry | Use |
|---|---|
| **Tests → Results** | How the last runs went: cases passed, failed, changed or never played, the last runs of each suite as bars, each case with its last results. |
| **Tests → Cases** | The suites and their cases, drawn and edited as flows of calls. |
| **Tests → Run the tests** | The job that plays a suite — on demand here, or on a schedule. |

**Results** and **Cases** are the test pages of Liberty Next, described in full in [Tests](../framework/build/tests.md); this page covers what is specific to JD Edwards.

---

## A case, step by step \{#case\}

A **suite** holds **cases**; a case is a sequence of **steps**; a step is one call to JD Edwards with what is expected of its answer.

1. In **Tests → Cases**, pick the suite and choose **New case**. Say what it checks, and tick *This case changes data* when one of its steps writes in JD Edwards.
2. The **+** on the flow adds a step. Pick the **Endpoint called** in the list of the AIS connector: one of the [catalogue's services](./ais/services.md) — a table read, a business function — or an endpoint made with [Create from…](./ais/create-from.md) for a form, a report or an orchestration.
3. Fill the **Parameters**: one labelled field per parameter of the endpoint, with its help.
4. **Fill from the answer** plays the call now and proposes what to expect — the number of rows and the values of the first row, by JD Edwards alias (`AN8`, `ALPH`). Keep the lines that must stay true, delete the others.
5. **Save**, then **Run this case**.

What a step can expect:

| Expectation | Meaning |
|---|---|
| **The call** *must work* / *must be refused* | A refusal is a valid expectation: a table that does not exist, a value the form rejects. **The refusal says** checks the message. |
| **Rows, at least / exactly / at most** | The number of rows returned. |
| **The first row holds** | Values of the first row, by column name. |
| **A warning says** | A warning of JD Edwards (*Duplicate Address Book record*) reported with the answer. |

A value read at one step — an address number just created — can be kept and given to the next steps. A step marked *Played even after a failure (a cleanup)* always runs: this is how a case that writes removes what it created.

---

## Reference and comparison \{#reference\}

Expectations say what must be true. The **reference** catches what nobody thought of writing down: the columns of a form, the labels of a grid, the values of a set-up table.

1. **Before the change**, record the reference: **Record the reference** on the Cases page, or the job with *record*. Each step keeps the parts of its answer it was asked to keep.
2. **After the change**, run the suite again. Each case ends as:

| Result | Meaning |
|---|---|
| **Passed** | Every expectation holds and nothing differs from the reference. |
| **Changed** | The expectations hold, but a kept value differs from the reference — a column gone, a new one, another value. The difference is listed value by value. |
| **Failed** | An expectation is not met, or the call failed. |
| **Skipped** | The case writes on JD Edwards and the run did not allow it. |

A *Changed* is not always a defect — an update may legitimately add a column — but it is always something to read. Record the reference again once the change is accepted.

---

## The job \{#job\}

**Tests → Run the tests** plays a suite outside the page — on demand, or on a schedule after each package deployment.

| Parameter | Default | Meaning |
|---|---|---|
| **Suite** | `smoke` | The suite to play, among the suites of the AIS connector. |
| **Compare with the reference, or record it** | compare | *compare* checks the cases and reports what differs; *record* keeps the run as the new reference. |
| **Only these cases** | blank | Case identifiers separated by commas; blank plays them all. |
| **Cases that write on JDE** | no | *yes* also plays the cases marked as changing data. |

The run **fails** when a case fails or has changed, which triggers the job's alerts. Its files hold an Excel report, one line per step: case, label, case status, step, endpoint, step status, duration and what was found. The results also appear in **Tests → Results**.

---

## The suite shipped \{#smoke\}

Nomajde ships a first suite, **smoke** — *JDE — what must keep working* — made of reading cases any JD Edwards answers:

| Case | Checks |
|---|---|
| `ais-is-up` | AIS answers and says what it runs. |
| `udc-types-of-system-00` | The UDC types of system 00 are read from `F0004`. |
| `address-book-form` | The Address Book search form opens and still has its columns. |
| `unknown-table-is-refused` | A table that does not exist is refused, not answered empty. |

Use it to check the connection, then add the cases that matter to the business: the forms the users live in, the business functions the interfaces call, the set-up tables an update must not touch.

---

## Access \{#access\}

| To | A role needs |
|---|---|
| See the suites and the results | **See the test suites and their results** |
| Play a case or a suite | **Play the tests (and see them)** |
| Write suites, cases and steps | **Write the tests: suites, cases, steps (and play them)** |
| Run the job from the menu | The job's permission |

The three test permissions are in a role's *Beyond the menus* rules, type **Tests**: a functional team can write and play the tests without being administrators. Every call runs under the JD Edwards account of the AIS connector: JD Edwards security applies to that account.

---

## Tips & best practices \{#tips\}

- Record the reference on the environment that will be changed, **just before** the change.
- Prefer many small reading cases to a few long ones: a failure then names what broke.
- Keep the writing cases apart, each with its cleanup step, and play them on a test environment.
- Schedule the job after the nightly package deployment: a regression is known in the morning, with the difference listed.
- The AI assistant knows the procedure: ask it to *check that JDE still behaves the same after a change*.

---

## Related

- [Tests](../framework/build/tests.md) — the Cases page in full; [Test results](../monitoring/test-results.md).
- [JD Edwards services (AIS)](./ais/services.md) and [Create from…](./ais/create-from.md) — the calls a step can make.
- [Upgrade analysis](./upgrade/analysis.md) — what to retrofit before the tests are played.
