---
title: Step 4 — Sales pipeline dashboard
description: "Add a pipeline dashboard to the CRM: aggregate queries, KPIs compared with the previous period, a saved bar chart of the pipeline by stage, a table of recent activities, and the menu entry that opens it."
keywords: [Liberty Next, tutorial, CRM, dashboard, KPI, chart, period, PERIOD_FROM, compare previous period, widgets]
---

# Step 4 — Sales pipeline dashboard

A dashboard puts the pipeline on one page: open amount, won amount over the period, number of open deals, the pipeline by stage and the latest activities.

---

## At a glance

<svg viewBox="0 0 1200 390" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tu4-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tu4-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tu4-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tu4-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="360" rx="14" fill="url(#tu4-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Sales pipeline</text>
  <rect x="480" y="30" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="44.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">This month ▾</text>
  <rect x="930" y="30" width="28" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="944.0" y="44.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="235" height="74" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="92" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OPEN PIPELINE</text>
  <text x="252" y="118" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">173 500</text>
  <rect x="485" y="74" width="235" height="74" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="497" y="92" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WON</text>
  <text x="497" y="118" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">18 000</text>
  <text x="708" y="118" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">▲ +12 %</text>
  <rect x="730" y="74" width="235" height="74" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="742" y="92" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OPEN DEALS</text>
  <text x="742" y="118" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <rect x="240" y="160" width="480" height="200" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="180" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pipeline by stage</text>
  <rect x="295.2" y="319.4" width="89.6" height="12.6" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="295.2" y="319.4" width="89.6" height="0.0" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="340.0" y="343" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Qualified</text>
  <rect x="435.2" y="281.6" width="89.6" height="50.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="435.2" y="281.6" width="89.6" height="0.0" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="480.0" y="343" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Proposal</text>
  <rect x="575.2" y="206.0" width="89.6" height="126.0" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="575.2" y="206.0" width="89.6" height="0.0" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="620.0" y="343" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Negotiation</text>
  <rect x="732" y="160" width="228" height="200" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="744" y="180" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Latest activities</text>
  <text x="744" y="206" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="948" y="206" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Call</text>
  <text x="744" y="230" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="948" y="230" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Meeting</text>
  <text x="744" y="254" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <text x="948" y="254" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">E-mail</text>
  <rect x="10" y="58" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="73" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period</text>
  <text x="20" y="86" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">PERIOD_FROM / PERIOD_TO</text>
  <line x1="210" y1="75.0" x2="482" y2="53" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu4-arrow)"/>
  <rect x="10" y="120" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">KPI</text>
  <text x="20" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sum, count, compare</text>
  <line x1="210" y1="137.0" x2="240" y2="120" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu4-arrow)"/>
  <rect x="10" y="260" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Saved chart</text>
  <text x="20" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pipeline_by_stage</text>
  <line x1="210" y1="277.0" x2="240" y2="260" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu4-arrow)"/>
  <rect x="1000" y="100" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Previous period</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">change shown under the figure</text>
  <line x1="1000" y1="117.0" x2="710" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu4-arrow)"/>
  <rect x="1000" y="250" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Table widget</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">10 latest rows</text>
  <line x1="1000" y1="267.0" x2="960" y2="250" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu4-arrow)"/>
</svg>

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
