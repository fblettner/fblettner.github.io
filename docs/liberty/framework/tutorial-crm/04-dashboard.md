---
title: Step 4 — Sales pipeline dashboard
description: "Layer a dashboard on top of the existing Deals data: four KPIs, a stacked bar chart by stage, a 'recent activities' table, all sharing a period filter and drilling down to the Deals screen. Demonstrates dashboards, charts and the shared filter bar."
keywords: [Liberty Framework, tutorial, CRM, dashboard, KPI, chart, drill-down, shared filter bar]
---

# Step 4 — Sales pipeline dashboard

Two screens cover the operational view. Now we layer a **dashboard** on top — the bird's-eye view that managers want when they open the CRM in the morning. Four KPIs, one chart, one "recent activities" table, all sharing a period filter that propagates to every panel.

By the end of this step the CRM has a `Pipeline overview` page that visualises the same data three ways. Estimated time: **15 minutes**.

---

## What we're doing and why

A screen answers "show me the rows"; a dashboard answers "**summarise** the rows". Both feed off the same data — the connector queries we already have, plus a couple of aggregation queries we'll add.

The framework's [dashboards](../dashboards.md) are a 12-column responsive grid; the [charts](../charts.md) wrap a SQL query into a visualisation. A **shared filter bar** at the top of the dashboard pushes one value (a period, a region, a stage) into every panel that declares the same parameter. Drill-down opens the corresponding screen pre-filtered.

We'll build:

| Panel | Type | Source |
|---|---|---|
| **Total pipeline value** | Stat | Sum of `amount` from open deals. |
| **Deals won this period** | Stat | Count of `stage='won'` deals closing in the period. |
| **Average deal size** | Stat | Average of `amount` over the period. |
| **Win rate** | Stat | Won / (won + lost) over the period. |
| **Pipeline by stage** | Bar chart | `GROUP BY stage` over the period. |
| **Recent activities** | Table | Last 10 rows from `activities`. |

---

## Add the aggregation queries

Open **Settings → Connectors → deals → + Add query** and add four read queries.

### `pipeline-total`

```sql
SELECT COALESCE(SUM(amount), 0) AS total
FROM   deals
WHERE  stage NOT IN ('won', 'lost')
  AND  (:close_from IS NULL OR close_date >= :close_from)
  AND  (:close_to   IS NULL OR close_date <= :close_to);
```

Parameters: `close_from` (date), `close_to` (date), neither required.

### `deals-won`

```sql
SELECT COUNT(*) AS count
FROM   deals
WHERE  stage = 'won'
  AND  (:close_from IS NULL OR close_date >= :close_from)
  AND  (:close_to   IS NULL OR close_date <= :close_to);
```

### `avg-deal-size`

```sql
SELECT COALESCE(AVG(amount), 0) AS avg
FROM   deals
WHERE  stage = 'won'
  AND  (:close_from IS NULL OR close_date >= :close_from)
  AND  (:close_to   IS NULL OR close_date <= :close_to);
```

### `win-rate`

```sql
SELECT CASE
         WHEN COUNT(*) = 0 THEN 0
         ELSE 100.0 * SUM(CASE WHEN stage = 'won' THEN 1 ELSE 0 END) / COUNT(*)
       END AS pct
FROM   deals
WHERE  stage IN ('won', 'lost')
  AND  (:close_from IS NULL OR close_date >= :close_from)
  AND  (:close_to   IS NULL OR close_date <= :close_to);
```

### `by-stage`

```sql
SELECT stage, COUNT(*) AS count, SUM(amount) AS total
FROM   deals
WHERE  (:close_from IS NULL OR close_date >= :close_from)
  AND  (:close_to   IS NULL OR close_date <= :close_to)
GROUP BY stage
ORDER BY stage;
```

Test each — they should all return numbers given the seed data. **Save & reload**.

---

## Define a chart for "Pipeline by stage"

The framework's **chart** is a reusable definition layered between a SQL query and a dashboard panel. Open **Settings → Charts → + New chart**:

| Field | Value |
|---|---|
| **Id** | `crm-pipeline-by-stage` |
| **Title** | `Pipeline by stage` |
| **Type** | `Bar` |
| **Connector** | `deals` |
| **Query** | `by-stage` |
| **X axis** | `stage` (label `Stage`) — set the lookup to `stages` so the chart shows the friendly labels with their colours. |
| **Series** | One series: field `count`, label `Deals`, colour from the stage's colour column. |
| **Group by** *(optional)* | Leave empty. |

Click **▶ Preview**. A small bar chart appears with one bar per stage (the 4 seed rows produce 4 bars).

**Save**.

---

## Build the dashboard

**Settings → Dashboards → + New dashboard**:

| Field | Value |
|---|---|
| **Id** | `crm-pipeline-overview` |
| **Title** | `Pipeline overview` |
| **App** | `crm` |
| **Description** | `Sales pipeline KPIs and stage distribution.` |

### Shared filter bar

At the top of the editor, add two filter inputs that every panel will inherit:

| Name | Type | Default | Label |
|---|---|---|---|
| `close_from` | date | `${month.first}` | From |
| `close_to` | date | `${month.last}` | To |

The tokens `${month.first}` and `${month.last}` resolve to the first / last day of the current month on the server — re-evaluated on every call, so the dashboard "tracks the calendar".

### Panels

Drag from the palette onto the 12-column layout:

#### Row 1 — four stat panels (3 columns each)

| Panel | Type | Connector / Query | Value | Format |
|---|---|---|---|---|
| **Total pipeline value** | Stat | `deals` / `pipeline-total` | `total` | `1 234,56 €` |
| **Deals won** | Stat | `deals` / `deals-won` | `count` | `1 234` |
| **Average deal size** | Stat | `deals` / `avg-deal-size` | `avg` | `1 234,56 €` |
| **Win rate** | Stat | `deals` / `win-rate` | `pct` | `12.3 %` |

Each stat panel's parameter overrides inherit from the shared filter bar — the framework wires `close_from` and `close_to` automatically.

#### Row 2 — Pipeline by stage (8 columns) + Recent activities (4 columns)

| Panel | Type | Source | Settings |
|---|---|---|---|
| **Pipeline by stage** | Chart | The `crm-pipeline-by-stage` chart we built. | Drill-down screen: `crm/deals` *(clicking a bar opens the Deals screen pre-filtered to that stage)*. |
| **Recent activities** | Table | Connector `activities`, query a new `recent` query that returns last 10 rows ordered by `happened_at DESC`. | Click action: open `crm/deals` filtered to the activity's `deal_id`. |

For the *Recent activities* table, you'll need to add an `activities.recent` query:

```sql
SELECT a.kind, a.notes, a.happened_at, d.name AS deal_name, c.name AS customer_name
FROM   activities a
JOIN   deals d     ON d.id = a.deal_id
JOIN   customers c ON c.id = d.customer_id
ORDER BY a.happened_at DESC
LIMIT 10;
```

### Save and add to the menu

**Save** the dashboard.

Then **Settings → Menus → crm** → **+ Add leaf** at the top of the tree (so it's the first entry users see):

| Field | Value |
|---|---|
| **Label** | `Pipeline overview` |
| **Type** | `Dashboard` |
| **Dashboard** | `crm-pipeline-overview` |
| **Icon** | `bar-chart-3` |

**Save & reload**.

---

## See it work

Click **Pipeline overview** in the sidebar. You should see:

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '12px'}}>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>From: 01/05/2026</span>
    <span style={{marginLeft: '6px', padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>To: 31/05/2026</span>
    <span style={{marginLeft: '6px', padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>↻ Refresh</span>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '14px'}}>
    <div style={{padding: '12px', borderRadius: '8px', background: 'rgba(74,158,255,0.06)', border: '1px solid rgba(74,158,255,0.30)'}}>
      <div style={{fontSize: '10px', opacity: 0.7, marginBottom: '2px'}}>Total pipeline</div>
      <div style={{fontSize: '20px', fontWeight: 700, color: '#4a9eff'}}>173 500,00 €</div>
    </div>
    <div style={{padding: '12px', borderRadius: '8px', background: 'rgba(74,158,255,0.06)', border: '1px solid rgba(74,158,255,0.30)'}}>
      <div style={{fontSize: '10px', opacity: 0.7, marginBottom: '2px'}}>Deals won</div>
      <div style={{fontSize: '20px', fontWeight: 700, color: '#4a9eff'}}>1</div>
    </div>
    <div style={{padding: '12px', borderRadius: '8px', background: 'rgba(74,158,255,0.06)', border: '1px solid rgba(74,158,255,0.30)'}}>
      <div style={{fontSize: '10px', opacity: 0.7, marginBottom: '2px'}}>Avg deal size</div>
      <div style={{fontSize: '20px', fontWeight: 700, color: '#4a9eff'}}>18 000,00 €</div>
    </div>
    <div style={{padding: '12px', borderRadius: '8px', background: 'rgba(74,158,255,0.06)', border: '1px solid rgba(74,158,255,0.30)'}}>
      <div style={{fontSize: '10px', opacity: 0.7, marginBottom: '2px'}}>Win rate</div>
      <div style={{fontSize: '20px', fontWeight: 700, color: '#4ade80'}}>100.0 %</div>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px'}}>
    <div style={{padding: '12px', borderRadius: '8px', background: 'rgba(192,132,252,0.06)', border: '1px solid rgba(192,132,252,0.30)', minHeight: '120px'}}>
      <div style={{fontSize: '10px', opacity: 0.7, marginBottom: '8px'}}>Pipeline by stage</div>
      <div style={{fontSize: '10px', fontStyle: 'italic', opacity: 0.6}}>(bar chart — 4 bars, one per stage)</div>
    </div>
    <div style={{padding: '12px', borderRadius: '8px', background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.30)'}}>
      <div style={{fontSize: '10px', opacity: 0.7, marginBottom: '8px'}}>Recent activities</div>
      <div style={{fontSize: '11px', lineHeight: '1.8'}}>📅 meeting · Globex Logistics<br/><span style={{opacity: 0.6, fontSize: '10px'}}>3 days ago</span></div>
    </div>
  </div>
</div>

Try it:

- **Click a bar** → the Deals screen opens pre-filtered to that stage.
- **Click a row in Recent activities** → the corresponding deal's dialog opens.
- **Change the From / To dates** → every panel re-renders.

---

## What you have now

The CRM has three navigable entries — overview, customers, deals — covering the full "look at the data / look at the rows" loop.

Two things are still missing:

- Everything is admin-only. Real applications need **roles** and ideally **OIDC sign-in**. Step 5.
- The framework's **AI assistant** can already answer questions over the deals data (because *Expose to AI* defaulted to on); we'll verify and polish. The CRM also benefits from a **nightly job** that flags stale deals. Step 6.

→ **[Step 5 — Roles and SSO](./05-auth.md)** — split users into roles, wire OIDC.
