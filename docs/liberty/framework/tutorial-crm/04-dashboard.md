---
title: Step 4 — Sales pipeline dashboard
description: "Add a pipeline dashboard to the CRM: aggregate queries, KPIs compared with the previous period, a saved bar chart of the pipeline by stage, a table of recent activities, and the menu entry that opens it."
keywords: [Liberty Next, tutorial, CRM, dashboard, KPI, chart, period, PERIOD_FROM, compare previous period, widgets]
---

# Step 4 — Sales pipeline dashboard

A dashboard puts the pipeline on one page: open amount, won amount over the period, number of open deals, the pipeline by stage and the latest activities.

---

## The queries

In **Settings → Connectors → crm → Queries**, **＋ Add query** for each:

```sql
-- open_deals_get — deals still in progress
SELECT ID, AMOUNT FROM deals WHERE STAGE NOT IN ('WON', 'LOST')

-- won_deals_get — deals won over the dashboard's period
SELECT ID, AMOUNT, CLOSE_DATE FROM deals
WHERE STAGE = 'WON' AND CLOSE_DATE BETWEEN :PERIOD_FROM AND :PERIOD_TO

-- pipeline_by_stage_get — amount per stage
SELECT s.LABEL AS STAGE, s.ORD, SUM(d.AMOUNT) AS AMOUNT
FROM deals d JOIN deal_stages s ON s.CODE = d.STAGE
WHERE d.STAGE NOT IN ('WON', 'LOST')
GROUP BY s.LABEL, s.ORD ORDER BY s.ORD

-- recent_activities_get — the latest activities
SELECT a.HAPPENED_AT, c.NAME AS CUSTOMER, d.NAME AS DEAL, a.KIND, a.RECORDED_BY
FROM activities a JOIN deals d ON d.ID = a.DEAL_ID JOIN customers c ON c.ID = d.CUSTOMER_ID
ORDER BY a.HAPPENED_AT DESC
```

`:PERIOD_FROM` and `:PERIOD_TO` receive the period chosen on the dashboard.

---

## The chart

**Settings → Charts**, scope `crm`, **Add chart**:

| Tab | Setting |
|---|---|
| General | Id `pipeline_by_stage`, label `Pipeline by stage`, query `pipeline_by_stage_get`. |
| Chart | **Bar**, X axis `STAGE`, one series `AMOUNT`, aggregate **Sum**. |

See [Charts](../charts.md).

---

## The dashboard

**Settings → Dashboards**, app `crm`, add a dashboard `pipeline`, title `Sales pipeline`:

- **Period**: **Add a period**, opens on *This month*, date column `CLOSE_DATE`.
- **Widgets** (**Add widget**), in this order:

| Widget | Settings | Width |
|---|---|---|
| KPI *Open pipeline* | Query `open_deals_get`, column `AMOUNT`, aggregation `sum`. | 4 |
| KPI *Won* | Query `won_deals_get`, column `AMOUNT`, aggregation `sum`, **Compare with the previous period**. | 4 |
| KPI *Open deals* | Query `open_deals_get`, column `ID`, aggregation `count`. | 4 |
| Chart | The saved chart `pipeline_by_stage`. | 8, height 2 |
| Table *Latest activities* | Query `recent_activities_get`, row limit 10. | 4, height 2 |

Save. See [Dashboards](../dashboards.md).

---

## The menu entry

**Settings → Menus**, app `crm`, at the top of the tree: **＋ Item**, label `Pipeline`, type `dashboard`, target `crm.pipeline`, icon `barchart`. Move it above the *Sales* folder and set it as the connector's **home** (Settings → Connectors → crm) so that the app opens on it.

---

## See it work

Open **Pipeline**:

- the three KPIs; *Won* shows its change against the previous period;
- the bars of the pipeline by stage;
- the latest activities, including the one recorded in Step 3.

Change the period to *This year*: the *Won* KPI follows. **↻** reloads every widget.

---

## What you have now

A dashboard that answers "where is the pipeline?" without opening a screen, on the same queries and permissions as the rest of the app.

→ **[Step 5 — Roles and sign-in](./05-auth.md)**: who sees what.
