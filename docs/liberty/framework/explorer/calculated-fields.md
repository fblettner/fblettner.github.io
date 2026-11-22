---
title: Calculated fields
description: "Calculated fields in the Liberty Next Data Explorer: the editor (name, label, expression, field and function pickers, Test), the expression language — arithmetic, comparisons, conditions, in, is empty, date, text and number functions — and how the result type makes a measure or a dimension."
keywords: [Liberty Next, Data Explorer, calculated field, expression, formula, measure, dimension, year, days, round, coalesce]
---

# Calculated fields

A calculated field computes a value from the other fields: a margin, a weighted amount, a year, a delay in days, a category. It is written in a small expression language that the server checks and translates for the database — never free SQL. It belongs to the analysis and is saved with it.

---

## At a glance

<svg viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cf-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cf-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cf-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="326" rx="14" fill="url(#cf-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">New calculated field</text>
  <rect x="916" y="32" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="927.0" y="45.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <rect x="942" y="32" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="45.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <line x1="221" y1="62" x2="979" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAME</text>
  <rect x="240" y="86" width="354" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">weighted</text>
  <text x="606" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL</text>
  <rect x="606" y="86" width="354" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Weighted amount</text>
  <text x="240" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSERT A FIELD</text>
  <rect x="240" y="130" width="354" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="144.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Field…                                                  ▾</text>
  <text x="606" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSERT A FUNCTION</text>
  <rect x="606" y="130" width="354" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616" y="144.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Function…                                             ▾</text>
  <text x="240" y="168" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXPRESSION</text>
  <rect x="240" y="174" width="720" height="60" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="194" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">STAGE = 'Negotiation' ? AMOUNT × 0.6 : AMOUNT × 0.3</text>
  <text x="240" y="252" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Arithmetic (+ − × /), comparisons, and / or / not, cond ? a : b, x in (…), x is empty. A number becomes a measure…</text>
  <rect x="240" y="264" width="62" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="271.0" y="279.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⚗ Test</text>
  <text x="314" y="280" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">A number → a measure. Sample:</text>
  <rect x="468.16" y="268" width="41" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="488.66" y="280.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">72000</text>
  <rect x="514.1600000000001" y="268" width="41" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="534.6600000000001" y="280.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">13500</text>
  <rect x="560.1600000000001" y="268" width="37" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="578.6600000000001" y="280.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">8100</text>
  <rect x="602.1600000000001" y="268" width="41" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="622.6600000000001" y="280.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">36000</text>
  <line x1="221" y1="302" x2="979" y2="302" stroke="#1f2937" strokeWidth="1"/>
  <rect x="896" y="312" width="64" height="22" rx="5" fill="url(#cf-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="928.0" y="326.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="826" y="312" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="857.0" y="326.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Name</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a letter, then letters, digits, _</text>
  <line x1="200" y1="97.0" x2="240" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cf-arrow)"/>
  <rect x="20" y="186" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="201" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Expression</text>
  <text x="30" y="214" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">never free SQL</text>
  <line x1="200" y1="203.0" x2="240" y2="204" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cf-arrow)"/>
  <rect x="20" y="262" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Test</text>
  <text x="30" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type and eight sample values</text>
  <line x1="200" y1="279.0" x2="240" y2="276" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cf-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pickers</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">insert at the cursor</text>
  <line x1="1000" y1="137.0" x2="960" y2="141" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cf-arrow)"/>
  <rect x="1000" y="296" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="311" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save after a test</text>
  <text x="1010" y="324" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the type decides the role</text>
  <line x1="1000" y1="313.0" x2="896" y2="323" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cf-arrow)"/>
</svg>

---

## The editor \{#editor\}

**New calculated field**, at the bottom of the fields pane, opens the editor; the pencil of a calculated field edits it, the bin deletes it (it also leaves the shelves).

| Field | Use |
|---|---|
| **Name** | A letter, then letters, digits or `_`; unique in the analysis. |
| **Label** | The name shown in the pane and the results. |
| **Insert a field**, **Insert a function** | Insert at the cursor; a function is inserted with its arguments selected. |
| **Expression** | The formula. |
| **Test** | Compiles the expression on the server and shows its type and eight sample values. |

**Save** is enabled once the test passes. The result type decides the field's role: a **number** becomes a measure, anything else a dimension. The field then appears in a *calc* group of the pane, and can be used in the rows, the measures and the filters like any other.

---

## The language \{#language\}

A field is written by its name for the analysed entity (`AMOUNT`), or `entity.NAME` for another one (`customers.COUNTRY`). Text values go between single quotes.

| Element | Forms |
|---|---|
| Arithmetic | `+` `-` `*` `/` and brackets. A division by zero gives an empty value. |
| Comparison | `=` `!=` `<>` `<` `<=` `>` `>=` |
| Logic | `and`, `or`, `not` |
| Condition | `condition ? value_if_true : value_if_false` |
| List | `x in ('FR', 'BE')` |
| Empty | `x is empty`, `x is not empty` |
| Dates | `year(d)`, `month(d)`, `day(d)`, `days(from, to)` — the days between two dates |
| Numbers | `round(x, n)`, `abs(x)` |
| Text | `upper(s)`, `lower(s)`, `length(s)`, `concat(a, b, …)` |
| Any | `coalesce(a, b, …)` — the first non-empty value |

A yes/no result shows as `Y` / `N`. A JD Edwards EnterpriseOne Julian date is converted to a real date before a date function applies.

---

## Examples \{#examples\}

| Need | Expression | Role |
|---|---|---|
| Weighted pipeline | `STAGE = 'Negotiation' ? AMOUNT * 0.6 : AMOUNT * 0.3` | measure |
| Unit price | `AMOUNT / QTY` | measure |
| Closing year | `year(CLOSE_DATE)` | measure — a number; to group by it, prefer the *Year* grouping of the date on **Rows** |
| Days to close | `days(CREATED_ON, CLOSE_DATE)` | measure |
| Size band | `AMOUNT >= 100000 ? 'large' : 'standard'` | dimension |
| Domestic or not | `customers.COUNTRY = 'FR'` | dimension (`Y` / `N`) |

---

## Things to know

| Situation | What happens |
|---|---|
| A type mismatch (`AMOUNT + 'x'`). | The test fails and gives the position of the error. |
| An unknown field. | The test fails and names it. |
| The two branches of `? :` have different types. | The test fails: both must be numbers, or both text, or both dates. |
| An expression over 2,000 characters. | Refused. |

## What's next

- [Analyse data](./analysis.md) — the shelves and views.
- [Saved analyses and dashboards](./saved-and-dashboards.md) — a saved analysis keeps its calculated fields.
