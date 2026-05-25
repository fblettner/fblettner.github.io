---
title: Charts
description: "A chart wraps a connector query into a Recharts-rendered visualisation. Defined in Settings → Charts, picked from the builder by type (line, bar, column, pie, donut, area, scatter), with the axis fields, series, colours, legend and refresh interval set in the same form."
keywords: [Liberty Framework, charts, Recharts, line, bar, column, area, pie, donut, scatter, dashboards, time series, group by, settings]
---

# Charts

A **chart** wraps a connector's named query into a visualisation. Defined in **Settings → Charts**, picked by type — line, bar, column, area, pie, donut, scatter — and reused as a panel in any number of dashboards.

This page covers the Charts builder, every field on the editor and the type-specific options each chart type unlocks.

---

## At a glance

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>SOURCE</div>
    <div style={{fontSize: '12px'}}>One SQL connector + a named read query. Schema discovered at runtime.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>SHAPE</div>
    <div style={{fontSize: '12px'}}>One X-axis column, one or many series. Group-by pivots one column into N parallel series.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>RENDERED IN</div>
    <div style={{fontSize: '12px'}}>Dashboard panels and any screen that includes a chart widget.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>REFRESH</div>
    <div style={{fontSize: '12px'}}>Manual <strong>↻ Refresh</strong> button on the panel; optional refresh interval in the editor.</div>
  </div>
</div>

---

## Editing a chart

In **Settings → Charts → ➕ New chart**, the editor opens with the *Type* picker at the top. Picking a type expands the form to the fields that type needs.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Settings → Charts → invoices-by-month</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Preview</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>Save</span>
    </div>
  </div>
  <div style={{padding: '14px 16px', display: 'grid', gridTemplateColumns: '180px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
    <div style={{opacity: 0.75}}>Type</div><div><span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.4)', color: '#4a9eff', fontSize: '11px', fontWeight: 600}}>Bar ▾</span></div>
    <div style={{opacity: 0.75}}>Title</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Invoices issued per month</span></div>
    <div style={{opacity: 0.75}}>Connector</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>billing ▾</span></div>
    <div style={{opacity: 0.75}}>Query</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>monthly-invoice-counts ▾</span></div>
    <div style={{opacity: 0.75, alignSelf: 'start', paddingTop: '4px'}}>X axis</div>
    <div>
      <div style={{display: 'grid', gridTemplateColumns: '110px 1fr 100px', gap: '6px', alignItems: 'center'}}>
        <div style={{opacity: 0.6, fontSize: '10px'}}>Field</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>month ▾</span></div><div></div>
        <div style={{opacity: 0.6, fontSize: '10px'}}>Label</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Month</span></div><div></div>
        <div style={{opacity: 0.6, fontSize: '10px'}}>Format</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>yyyy-MM</span></div><div></div>
      </div>
    </div>
    <div style={{opacity: 0.75, alignSelf: 'start', paddingTop: '4px'}}>Series</div>
    <div>
      <div style={{display: 'grid', gridTemplateColumns: '110px 1fr 80px 40px', gap: '6px', alignItems: 'center'}}>
        <div style={{opacity: 0.6, fontSize: '10px'}}>Field</div><div style={{fontSize: '10px', opacity: 0.6}}>Label</div><div style={{fontSize: '10px', opacity: 0.6}}>Colour</div><div></div>
        <div><span style={{padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>count</span></div><div><span style={{padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Invoices</span></div><div><span style={{padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(74,158,255,0.40)', background: 'rgba(74,158,255,0.10)', color: '#4a9eff', fontSize: '11px', fontWeight: 700}}>#4a9eff</span></div><div style={{opacity: 0.55}}>✕</div>
      </div>
      <div style={{marginTop: '6px'}}><span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.4)', color: '#4a9eff', fontSize: '11px', fontWeight: 600}}>+ Add series</span></div>
    </div>
  </div>
</div>

### Common fields

| Field | Effect |
|---|---|
| **Type** | The chart type — see [Types](#types) below. Changing the type adapts the rest of the form. |
| **Title** / **Subtitle** | Shown above the chart. Subtitle is optional. |
| **Connector** / **Query** | The data source. Dropdowns of the connectors and their named read queries. |
| **Parameters** | Table of fixed values for the query parameters — same shape as elsewhere. Supports the `${week.monday}` / `${month.last}` tokens documented in [Parameter binding](./query-params-binding.md). |
| **Height** | CSS height of the rendered chart. Default `320px`. |
| **Legend** | Toggle + position (`bottom` / `right` / `top`). Default *on, bottom*. |
| **Tooltip** | Toggle. Default *on*. |
| **Grid** | Toggle. Default *on*. |
| **Refresh interval** | Seconds between auto-refresh ticks. `0` (default) = manual only. |

### X axis

| Field | Effect |
|---|---|
| **Field** | Dropdown of the columns the query returns. |
| **Label** | Shown under the chart. |
| **Format** | Date / number format applied to tick labels. Dates use `date-fns` syntax (`yyyy-MM`, `dd/MM`); numbers use `Intl.NumberFormat` notation. |
| **Tick interval** | `preserveStartEnd` (default) / `auto` / an integer "keep one tick out of N". |

### Series

Series are a sortable list. Each row exposes:

| Field | Effect |
|---|---|
| **Field** | Column returned by the query. |
| **Label** | Legend / tooltip label. |
| **Colour** | Hex / CSS colour. The framework picks a palette when empty. |
| **Format** | Number format applied to tooltip and dot labels. |
| **Axis** | `left` (default) / `right`. Use *right* for two-scale charts (e.g. count + amount). |
| **Dot** *(line / area only)* | Toggle. Hide dots for a cleaner sparkline. |

---

## Types \{#types\}

| Type | Shape | Typical query |
|---|---|---|
| **Line** | One line per series, X axis horizontal. | Time series — `x = date`, series = numeric. |
| **Area** | Same as line, area below filled. *Stacked* toggle available. | Cumulative or composition over time. |
| **Bar** | Vertical bars per X tick. *Stacked* / *Horizontal* toggles available. | Counts per period, top-N rankings. |
| **Column** | Alias of bar — exists for the convention "column = vertical, bar = horizontal". |
| **Pie** / **Donut** | One slice per row; X-field labels each slice, series sizes them. | Share of a total over a small category set. |
| **Scatter** | Two numeric axes; one dot per row. Optional *Size field* makes a bubble chart. | Correlation between two measures. |

Each type-specific toggle / field appears in the editor only when the type is selected.

### Type-specific options

| Type | Extra fields |
|---|---|
| **Line / Area** | **Smooth** (monotone-cubic interpolation), **Stacked** *(area only)*, **Null handling** (`Connect` / `Gap`). |
| **Bar / Column** | **Stacked**, **Bar size**, **Horizontal**. |
| **Pie / Donut** | **Inner radius** *(donut only)*, **Outer radius**, **Label position** (`outside` / `inside` / `none`), **Palette**. |
| **Scatter** | **Size field**, **Size range** (`[min_px, max_px]`). |

---

## Group by

The **Group by** field (in the editor's *Series* section) turns one source column into **N parallel series** without listing each series by hand. Useful when the set of values isn't known ahead of time — invoice statuses, sales reps, …

| Field | Effect |
|---|---|
| **Group-by field** | Column whose distinct values become the series. |
| **Y field** | Column the framework sums / takes the first value of per group. |
| **Palette** | Array of colours used for the generated series, in order of first appearance. Falls back to the default palette when empty. |

When *Group by* is set, the per-series list above collapses to a single Y field and a colour palette — the framework pivots the rows itself.

---

## Preview

The *Preview* button (top of the editor) renders the chart inline with the current settings. The preview hits the live database (or whatever pool the connector points at) and shows the latest data — useful to confirm a colour change before saving.

---

## Reusing a chart

A saved chart is referenced by its id from any dashboard. **Define once, reference everywhere** — change the data source on the chart and every dashboard panel reflects it.

In the [dashboard builder](./dashboards.md), adding a chart panel is a *Chart* dropdown of every chart on the install + a *Position* drag-and-drop on the grid.

---

## Permissions

A chart inherits the permission of its underlying query — a caller who can't run `sql:billing:monthly-invoice-counts` doesn't see the chart in a dashboard. The framework prunes the panel silently rather than rendering a 403 placeholder, so dashboards stay informative.

---

## Under the hood

Chart definitions live in `charts.toml`. Operators **do not edit this file by hand**; the Charts builder is the canonical interface. Advanced operators can reach for the *Raw TOML* tab as an escape hatch.

---

## What's next

- [Dashboards](./dashboards.md) — how a chart lands on a dashboard panel.
- [Parameter binding](./query-params-binding.md) — fixed values, tokens, cascades.
- [Concepts → Connectors](./connectors.md) — the connector that backs the chart's data.
