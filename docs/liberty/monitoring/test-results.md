---
title: Test results
description: "Operate → Test results in Liberty Next: how the non-regression tests went — cases passed, failed, changed and not run, the last runs of each suite as bars with who ran them and the time taken, each case with its last results as a strip — and the way back to the Tests page."
keywords: [Liberty Next, test results, non-regression, test suite, passed, failed, changed, runs, monitoring, operate]
---

# Test results

**Test results** answers one question at a glance: **do the tests pass?** It shows the totals of every suite, the history of the runs and, case by case, what the last run found.

Access: **Liberty Next → Operate → Test results**, for the holders of `tests:view`. The tests themselves are written and played in [Logic → Tests](../framework/build/tests.md).

---

## At a glance

<svg viewBox="0 0 1200 378" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tre-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tre-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tre-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tre-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="338" rx="14" fill="url(#tre-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Test results</text>
  <rect x="240" y="62" width="114" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="80" fill="#64748b" fontSize="7.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CASES</text>
  <text x="250" y="104" fill="#e2e8f0" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">14</text>
  <rect x="361" y="62" width="114" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="371" y="80" fill="#64748b" fontSize="7.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PASSED</text>
  <text x="371" y="104" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">11</text>
  <rect x="482" y="62" width="114" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="492" y="80" fill="#64748b" fontSize="7.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FAILED</text>
  <text x="492" y="104" fill="#f87171" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <rect x="603" y="62" width="114" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="613" y="80" fill="#64748b" fontSize="7.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHANGED</text>
  <text x="613" y="104" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <rect x="724" y="62" width="114" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="734" y="80" fill="#64748b" fontSize="7.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOT RUN</text>
  <text x="734" y="104" fill="#94a3b8" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <rect x="845" y="62" width="114" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="855" y="80" fill="#64748b" fontSize="7.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LAST RUN</text>
  <text x="855" y="104" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">2 h ago</text>
  <rect x="240" y="130" width="720" height="212" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="152" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Orders — nightly checks</text>
  <text x="254" y="168" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">orders · erp_api · 2 h ago · admin · 14 s</text>
  <rect x="830" y="142" width="87" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="873.5" y="156.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Open in Tests</text>
  <rect x="550" y="149.6" width="11" height="26.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="550" y="149.6" width="11" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="550" y="149.6" width="11" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="550" y="145.2" width="11" height="4.4" fill="#475569" fillOpacity="0.85"/>
  <rect x="566" y="149.6" width="11" height="26.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="566" y="149.6" width="11" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="566" y="149.6" width="11" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="566" y="145.2" width="11" height="4.4" fill="#475569" fillOpacity="0.85"/>
  <rect x="582" y="147.4" width="11" height="28.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="582" y="147.4" width="11" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="582" y="147.4" width="11" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="582" y="145.2" width="11" height="2.2" fill="#475569" fillOpacity="0.85"/>
  <rect x="598" y="149.6" width="11" height="26.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="598" y="147.4" width="11" height="2.2" fill="#f87171" fillOpacity="0.85"/>
  <rect x="598" y="147.4" width="11" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="598" y="145.2" width="11" height="2.2" fill="#475569" fillOpacity="0.85"/>
  <rect x="614" y="147.4" width="11" height="28.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="614" y="147.4" width="11" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="614" y="147.4" width="11" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="614" y="145.2" width="11" height="2.2" fill="#475569" fillOpacity="0.85"/>
  <rect x="630" y="149.6" width="11" height="26.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="630" y="149.6" width="11" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="630" y="147.4" width="11" height="2.2" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="630" y="145.2" width="11" height="2.2" fill="#475569" fillOpacity="0.85"/>
  <rect x="646" y="151.8" width="11" height="24.2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="646" y="149.6" width="11" height="2.2" fill="#f87171" fillOpacity="0.85"/>
  <rect x="646" y="147.4" width="11" height="2.2" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="646" y="145.2" width="11" height="2.2" fill="#475569" fillOpacity="0.85"/>
  <rect x="250" y="190" width="700" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="205.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <text x="284" y="205.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CASE</text>
  <text x="470" y="205.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LAST RESULTS</text>
  <text x="582" y="205.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LAST RUN</text>
  <text x="698" y="205.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DURATION</text>
  <text x="756" y="205.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT THE LAST RUN FOUND</text>
  <rect x="250" y="218" width="700" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="233.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">●</text>
  <text x="284" y="233.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">The order list has its columns</text>
  <text x="470" y="233.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="582" y="233.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">2 h ago</text>
  <text x="698" y="233.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">0.8 s</text>
  <text x="756" y="233.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <rect x="250" y="246" width="700" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="261.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">●</text>
  <text x="284" y="261.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">An order is created then cancelled</text>
  <text x="470" y="261.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="582" y="261.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">2 h ago</text>
  <text x="698" y="261.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">3.1 s</text>
  <text x="756" y="261.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">TOTAL: 120.00 → 118.50</text>
  <rect x="250" y="274" width="700" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="289.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">●</text>
  <text x="284" y="289.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">The price is computed</text>
  <text x="470" y="289.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="582" y="289.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">2 h ago</text>
  <text x="698" y="289.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">1.2 s</text>
  <text x="756" y="289.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">first row: PRICE ≠ 42.00</text>
  <rect x="250" y="302" width="700" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="317.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">●</text>
  <text x="284" y="317.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">An unknown id is refused</text>
  <text x="470" y="317.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="582" y="317.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">never</text>
  <text x="698" y="317.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">—</text>
  <text x="756" y="317.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <rect x="256" y="222" width="16" height="16" fill="#0f172a"/>
  <circle cx="266" cy="230" r="4.5" fill="#4ade80"/>
  <rect x="470" y="225" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="482" y="225" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="494" y="225" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="506" y="225" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="518" y="225" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="530" y="225" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="542" y="225" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="256" y="250" width="16" height="16" fill="#0f172a"/>
  <circle cx="266" cy="258" r="4.5" fill="#fb923c"/>
  <rect x="470" y="253" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="482" y="253" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="494" y="253" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="506" y="253" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="518" y="253" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="530" y="253" width="9" height="10" rx="2" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="542" y="253" width="9" height="10" rx="2" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="256" y="278" width="16" height="16" fill="#0f172a"/>
  <circle cx="266" cy="286" r="4.5" fill="#f87171"/>
  <rect x="470" y="281" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="482" y="281" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="494" y="281" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="506" y="281" width="9" height="10" rx="2" fill="#f87171" fillOpacity="0.85"/>
  <rect x="518" y="281" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="530" y="281" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="542" y="281" width="9" height="10" rx="2" fill="#f87171" fillOpacity="0.85"/>
  <rect x="256" y="306" width="16" height="16" fill="#0f172a"/>
  <circle cx="266" cy="314" r="4.5" fill="#475569"/>
  <rect x="20" y="62" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="77" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The totals</text>
  <text x="30" y="90" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">every suite together</text>
  <line x1="200" y1="79.0" x2="240" y2="88" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tre-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One line per case</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">it opens in Tests</text>
  <line x1="200" y1="217.0" x2="250" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tre-arrow)"/>
  <rect x="1000" y="62" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="77" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Runs as bars</text>
  <text x="1010" y="90" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the latest on the right</text>
  <line x1="1000" y1="79.0" x2="660" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tre-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Open in Tests</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the suite, edited there</text>
  <line x1="1000" y1="167.0" x2="917" y2="153" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tre-arrow)"/>
  <rect x="1000" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What was found</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">failed check or difference</text>
  <line x1="1000" y1="267.0" x2="940" y2="258" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tre-arrow)"/>
</svg>

---

## The totals \{#totals\}

Six tiles: **Cases**, **Passed**, **Failed**, **Changed**, **Not run** — never played, or skipped on the last run — and **Last run**.

The [Overview](../framework/studio.md#overview) page repeats them as a pill — *Tests: N passed · N failed · N changed* —, red when a case failed, orange when one changed, green otherwise.

---

## A suite \{#suite\}

Each suite has its block: its label, its name and its connector, then *when · who · how long* for the last run.

- **The bars** — one per run, the latest on the right, up to twenty: green for the cases passed, red for failed, orange for changed, grey for skipped.
- **The cases** — one line each:

| Column | Content |
|---|---|
| **Case** | What the case checks. |
| **Last results** | A strip of coloured squares, one per run. |
| **Last run** | When it last ran — *never* for a case not played yet. |
| **Duration** | The time the last run took. |
| **What the last run found** | The check that failed, or what differs from the reference. |

**Open in Tests** opens the suite in the Tests page; a line opens its case there.

---

## Reading a result \{#read\}

| Result | What to do |
|---|---|
| **Failed** | Open the case: the step in red says which check does not hold. |
| **Changed** | Read the difference. A wanted change: record the reference again. An unwanted one: a regression. |
| **Not run** | A case that writes is skipped unless the run allows it; a case without step is skipped too. |

---

## Related

- [Tests](../framework/build/tests.md) — writing and playing the cases.
- [The Monitoring page](./dashboard.md) — the live view of the instance.
