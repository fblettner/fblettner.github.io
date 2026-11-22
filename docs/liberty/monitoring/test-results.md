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

<svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="trs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="trs-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="trs-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="trs-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="390" rx="14" fill="url(#trs-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="12" fontFamily="system-ui, sans-serif">⛉</text>
  <text x="258" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Test results</text>
  <line x1="220" y1="60" x2="980" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="72" width="113.33333333333333" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="89" fill="#94a3b8" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CASES</text>
  <text x="250.0" y="113" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">14</text>
  <rect x="361.3333333333333" y="72" width="113.33333333333333" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="371.3333333333333" y="89" fill="#94a3b8" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PASSED</text>
  <text x="371.3333333333333" y="113" fill="#4ade80" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">11</text>
  <rect x="482.66666666666663" y="72" width="113.33333333333333" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="492.66666666666663" y="89" fill="#94a3b8" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FAILED</text>
  <text x="492.66666666666663" y="113" fill="#f87171" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <rect x="604.0" y="72" width="113.33333333333333" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="614.0" y="89" fill="#94a3b8" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHANGED</text>
  <text x="614.0" y="113" fill="#fb923c" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <rect x="725.3333333333333" y="72" width="113.33333333333333" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="735.3333333333333" y="89" fill="#94a3b8" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOT RUN</text>
  <text x="735.3333333333333" y="113" fill="#e2e8f0" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <rect x="846.6666666666666" y="72" width="113.33333333333333" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="856.6666666666666" y="89" fill="#94a3b8" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LAST RUN</text>
  <text x="856.6666666666666" y="110" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Nov 22, 2026, 6:12 AM</text>
  <rect x="240" y="136" width="720" height="260" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="160" fill="#4a9eff" fontSize="11" fontFamily="system-ui, sans-serif">⚗</text>
  <text x="270" y="160" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Orders — nightly checks</text>
  <text x="425.68" y="160" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">orders · erp_api</text>
  <rect x="853" y="147" width="93" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="899.5" y="160.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Open in Tests →</text>
  <text x="843" y="160" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">Nov 22, 2026, 6:12 AM · jdoe · 14 s</text>
  <rect x="256" y="183" width="12" height="35" rx="1.5" fill="#32d74b" fillOpacity="0.9"/>
  <rect x="272" y="176" width="12" height="42" rx="1.5" fill="#32d74b" fillOpacity="0.9"/>
  <rect x="288" y="183" width="12" height="35" rx="1.5" fill="#32d74b" fillOpacity="0.9"/>
  <rect x="288" y="176" width="12" height="7" rx="1.5" fill="#ff453a" fillOpacity="0.9"/>
  <rect x="304" y="176" width="12" height="42" rx="1.5" fill="#32d74b" fillOpacity="0.9"/>
  <rect x="320" y="183" width="12" height="35" rx="1.5" fill="#32d74b" fillOpacity="0.9"/>
  <rect x="320" y="176" width="12" height="7" rx="1.5" fill="#ff9f0a" fillOpacity="0.9"/>
  <rect x="336" y="190" width="12" height="28" rx="1.5" fill="#32d74b" fillOpacity="0.9"/>
  <rect x="336" y="183" width="12" height="7" rx="1.5" fill="#ff453a" fillOpacity="0.9"/>
  <rect x="336" y="176" width="12" height="7" rx="1.5" fill="#ff9f0a" fillOpacity="0.9"/>
  <rect x="352" y="183" width="12" height="35" rx="1.5" fill="#32d74b" fillOpacity="0.9"/>
  <rect x="352" y="176" width="12" height="7" rx="1.5" fill="#ff453a" fillOpacity="0.9"/>
  <text x="254" y="236" fill="#94a3b8" fontSize="7" fontWeight="700" letterSpacing="0.02em" fontFamily="system-ui, sans-serif"></text>
  <text x="278" y="236" fill="#94a3b8" fontSize="7" fontWeight="700" letterSpacing="0.02em" fontFamily="system-ui, sans-serif">CASE</text>
  <text x="492" y="236" fill="#94a3b8" fontSize="7" fontWeight="700" letterSpacing="0.02em" fontFamily="system-ui, sans-serif">LAST RESULTS</text>
  <text x="596" y="236" fill="#94a3b8" fontSize="7" fontWeight="700" letterSpacing="0.02em" fontFamily="system-ui, sans-serif">LAST RUN</text>
  <text x="708" y="236" fill="#94a3b8" fontSize="7" fontWeight="700" letterSpacing="0.02em" fontFamily="system-ui, sans-serif">DURATION</text>
  <text x="756" y="236" fill="#94a3b8" fontSize="7" fontWeight="700" letterSpacing="0.02em" fontFamily="system-ui, sans-serif">WHAT THE LAST RUN FOUND</text>
  <line x1="254" y1="244" x2="946" y2="244" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="261" cy="259" r="4.5" fill="none" stroke="#4ade80" strokeWidth="1.4"/>
  <text x="278" y="262" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">The order list has its columns</text>
  <rect x="492" y="254" width="8" height="8" rx="1.5" fill="#32d74b"/>
  <rect x="502" y="254" width="8" height="8" rx="1.5" fill="#32d74b"/>
  <rect x="512" y="254" width="8" height="8" rx="1.5" fill="#32d74b"/>
  <rect x="522" y="254" width="8" height="8" rx="1.5" fill="#32d74b"/>
  <rect x="532" y="254" width="8" height="8" rx="1.5" fill="#32d74b"/>
  <rect x="542" y="254" width="8" height="8" rx="1.5" fill="#32d74b"/>
  <rect x="552" y="254" width="8" height="8" rx="1.5" fill="#32d74b"/>
  <text x="596" y="262" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Nov 22, 2026, 6:12 AM</text>
  <text x="708" y="262" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">0.8 s</text>
  <text x="756" y="262" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace"></text>
  <line x1="254" y1="272" x2="946" y2="272" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="261" cy="289" r="4.5" fill="none" stroke="#fb923c" strokeWidth="1.4"/>
  <text x="278" y="292" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">An order is created then cancelled</text>
  <rect x="492" y="284" width="8" height="8" rx="1.5" fill="#32d74b"/>
  <rect x="502" y="284" width="8" height="8" rx="1.5" fill="#32d74b"/>
  <rect x="512" y="284" width="8" height="8" rx="1.5" fill="#32d74b"/>
  <rect x="522" y="284" width="8" height="8" rx="1.5" fill="#32d74b"/>
  <rect x="532" y="284" width="8" height="8" rx="1.5" fill="#32d74b"/>
  <rect x="542" y="284" width="8" height="8" rx="1.5" fill="#ff9f0a"/>
  <rect x="552" y="284" width="8" height="8" rx="1.5" fill="#ff9f0a"/>
  <text x="596" y="292" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Nov 22, 2026, 6:12 AM</text>
  <text x="708" y="292" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3.1 s</text>
  <text x="756" y="292" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">TOTAL: 120.00 → 118.50</text>
  <line x1="254" y1="302" x2="946" y2="302" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="261" cy="319" r="4.5" fill="none" stroke="#f87171" strokeWidth="1.4"/>
  <text x="278" y="322" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">The price is computed</text>
  <rect x="492" y="314" width="8" height="8" rx="1.5" fill="#32d74b"/>
  <rect x="502" y="314" width="8" height="8" rx="1.5" fill="#32d74b"/>
  <rect x="512" y="314" width="8" height="8" rx="1.5" fill="#32d74b"/>
  <rect x="522" y="314" width="8" height="8" rx="1.5" fill="#ff453a"/>
  <rect x="532" y="314" width="8" height="8" rx="1.5" fill="#32d74b"/>
  <rect x="542" y="314" width="8" height="8" rx="1.5" fill="#32d74b"/>
  <rect x="552" y="314" width="8" height="8" rx="1.5" fill="#ff453a"/>
  <text x="596" y="322" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Nov 22, 2026, 6:12 AM</text>
  <text x="708" y="322" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1.2 s</text>
  <text x="756" y="322" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">PRICE ≠ 42.00</text>
  <line x1="254" y1="332" x2="946" y2="332" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="261" cy="349" r="4.5" fill="none" stroke="#94a3b8" strokeWidth="1.4"/>
  <text x="278" y="352" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">An unknown id is refused</text>
  <text x="596" y="352" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">never</text>
  <text x="708" y="352" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="756" y="352" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace"></text>
  <line x1="254" y1="362" x2="946" y2="362" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The totals</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">every suite together</text>
  <line x1="200" y1="97.0" x2="240" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#trs-arrow)"/>
  <rect x="20" y="186" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="201" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Runs as bars</text>
  <text x="30" y="214" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the latest on the right</text>
  <line x1="200" y1="203.0" x2="256" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#trs-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One line per case</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">it opens in Tests</text>
  <line x1="200" y1="317.0" x2="280" y2="293" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#trs-arrow)"/>
  <rect x="1000" y="132" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Open in Tests</text>
  <text x="1010" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the suite, edited there</text>
  <line x1="1000" y1="149.0" x2="946" y2="157" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#trs-arrow)"/>
  <rect x="1000" y="196" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Last run of the suite</text>
  <text x="1010" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">when · who · how long</text>
  <line x1="1000" y1="213.0" x2="750" y2="165" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#trs-arrow)"/>
  <rect x="1000" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What was found</text>
  <text x="1010" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">failed check or difference</text>
  <line x1="1000" y1="307.0" x2="900" y2="301" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#trs-arrow)"/>
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
