---
title: Calculated fields
description: "Calculated fields in the Liberty Next Data Explorer: the editor (name, label, expression, field and function pickers, Test), the expression language — arithmetic, comparisons, conditions, in, is empty, date, text and number functions — and how the result type makes a measure or a dimension."
keywords: [Liberty Next, Data Explorer, calculated field, expression, formula, measure, dimension, year, days, round, coalesce]
---

# Calculated fields

A calculated field computes a value from the other fields: a margin, a weighted amount, a year, a delay in days, a category. It is written in a small expression language that the server checks and translates for the database — never free SQL. It belongs to the analysis and is saved with it.

---

## At a glance

<svg viewBox="0 0 1200 350" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="330" rx="14" fill="url(#exc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">New calculated field</text>
  <rect x="800" y="28" width="76" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="838.0" y="42.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="884" y="28" width="80" height="22" rx="5" fill="url(#exc-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="924.0" y="42.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <line x1="240" y1="60" x2="960" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="80" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Name</text>
  <rect x="240" y="86" width="340" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">weighted</text>
  <text x="600" y="80" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Label</text>
  <rect x="600" y="86" width="340" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Weighted amount</text>
  <text x="240" y="130" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Insert a field</text>
  <rect x="240" y="136" width="340" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="150.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Field… ▾</text>
  <text x="600" y="130" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Insert a function</text>
  <rect x="600" y="136" width="340" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="150.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Function… ▾</text>
  <text x="240" y="180" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Expression</text>
  <rect x="240" y="186" width="720" height="64" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="206" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">STAGE = 'Negotiation' ? AMOUNT · 0.6 : AMOUNT · 0.3</text>
  <text x="240" y="268" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Arithmetic (+ − × /), comparisons, and / or / not, cond ? a : b, x in (…), x is empty.</text>
  <rect x="240" y="284" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="275.0" y="298.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⚗ Test</text>
  <text x="322" y="299" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">A num → a measure. Sample:</text>
  <rect x="461" y="288" width="41" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="481.5" y="300.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">72000</text>
  <rect x="506" y="288" width="41" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="526.5" y="300.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">13500</text>
  <rect x="551" y="288" width="37" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="569.5" y="300.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">8100</text>
  <rect x="592" y="288" width="41" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="612.5" y="300.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">36000</text>
  <rect x="10" y="86" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="101" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Name</text>
  <text x="20" y="114" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">used as calc.&lt;name&gt;</text>
  <line x1="210" y1="103.0" x2="240" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exc-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Expression</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">never free SQL</text>
  <line x1="210" y1="217.0" x2="240" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exc-arrow)"/>
  <rect x="1000" y="136" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="151" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pickers</text>
  <text x="1010" y="164" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">insert at the cursor</text>
  <line x1="1000" y1="153.0" x2="960" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exc-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save after a test</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the type decides</text>
  <line x1="1000" y1="47.0" x2="960" y2="39" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exc-arrow)"/>
  <rect x="1000" y="280" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Test</text>
  <text x="1010" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type and eight values</text>
  <line x1="1000" y1="297.0" x2="920" y2="297" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exc-arrow)"/>
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
