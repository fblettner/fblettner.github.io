---
title: Step 6 — AI assistant and a daily job
description: "Finish the CRM: the AI assistant answers questions over the CRM's queries within each user's rights, and a Nomaflow job flags stalled deals every morning and notifies the sales team."
keywords: [Liberty Next, tutorial, CRM, AI assistant, ai:chat, allowed connectors, Nomaflow, job, schedule, notifications]
---

# Step 6 — AI assistant and a daily job

Two additions: the **AI assistant**, so that users ask questions in plain language, and a **Nomaflow job** that flags the deals left without news and tells the sales team.

---

## At a glance

<svg viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tu6-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tu6-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tu6-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tu6-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="330" rx="14" fill="url(#tu6-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="30" width="360" height="300" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="254" y="54" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">AI Assistant</text>
  <rect x="360" y="66" width="226" height="30" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="370" y="85" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Which deals are in negotiation?</text>
  <rect x="254" y="106" width="144" height="18" rx="9.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="326.0" y="118.2" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sql_query · crm.deals_get</text>
  <rect x="254" y="132" width="330" height="70" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="266" y="154" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1 deal: Logistics platform —</text>
  <text x="266" y="172" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL, 120 000.</text>
  <rect x="620" y="30" width="340" height="130" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="634" y="52" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">crm-stalled-deals</text>
  <rect x="634" y="62" width="73" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="670.5" y="74.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">0 8 ∗ ∗ 0-4</text>
  <rect x="720" y="62" width="63" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="751.5" y="74.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="944" y="52" fill="#4ade80" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">● on</text>
  <rect x="634" y="100" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="662.5" y="114.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Run now</text>
  <rect x="620" y="180" width="340" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="634" y="202" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">🔔 Notifications</text>
  <rect x="634" y="214" width="312" height="40" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="644" y="238" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2 deals without news for 14 days</text>
  <rect x="10" y="100" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Read queries only</text>
  <text x="20" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with the user's scope</text>
  <line x1="210" y1="117.0" x2="254" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu6-arrow)"/>
  <rect x="1000" y="40" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Daily job</text>
  <text x="1010" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">08:00, Monday to Friday</text>
  <line x1="1000" y1="57.0" x2="960" y2="60" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu6-arrow)"/>
  <rect x="1000" y="220" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Notification rule</text>
  <text x="1010" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on succeeded, &#123;ROWS&#125;</text>
  <line x1="1000" y1="237.0" x2="960" y2="234" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu6-arrow)"/>
</svg>

---

## The AI assistant

### Settings

**Liberty Next → Administer → App → AI Assistant**: **Enabled**, the **Anthropic API key**, the **Model**, and **Allowed connectors** `crm`. Save. See [AI assistant](../ai-assistant.md).

### Access

In the `crm-sales` role, **Beyond the menus**: **Allow** — *AI assistant*. Save. Bob now has an **Assistant** button at the top right.

### Descriptions

The assistant chooses among the queries from their label and description. On the CRM's read queries (Advanced tab of the query editor), write two sentences — what the rows are, which questions they answer:

| Query | Description |
|---|---|
| `customers_get` | `Customers with industry, country, status and e-mail. For questions about the customer base.` |
| `deals_get` | `Deals with customer, stage, amount and expected close date. For pipeline questions.` |
| `pipeline_by_stage_get` | `Open amount per pipeline stage. For pipeline breakdown questions.` |

### Try it

As Bob: *Which deals are in negotiation?* — *What is the open amount per stage?* — *Which customers have no deal?*

The assistant runs read queries only, with Bob's rights and data scope: it sees the French customers only, and it never changes data. See [Expose data to the AI assistant](../cookbook/expose-to-ai.md).

---

## A daily job — stalled deals

A deal without any update for 14 days is flagged, and the sales team gets a notification.

### The query

Add a `stalled` column to deals, then a writable query `flag_stalled_deals`:

```sql
ALTER TABLE deals ADD stalled VARCHAR(1) DEFAULT 'N';
```

```sql
UPDATE deals SET STALLED = 'Y'
WHERE STAGE NOT IN ('WON', 'LOST')
  AND COALESCE(UPDATED_AT, CURRENT_TIMESTAMP - INTERVAL '30' DAY) < CURRENT_TIMESTAMP - INTERVAL '14' DAY
  AND STALLED = 'N'
```

Add `STALLED = 'N'` to `deals_put` so that any change to a deal clears the flag.

### The job

**Nomaflow → Jobs → + New job**:

| Field | Value |
|---|---|
| Id | `crm-stalled-deals` |
| Description | `Flags deals without news for 14 days.` |
| Schedule | `0 8 * * 0-4` — 08:00, Monday to Friday (day 0 is Monday) |
| Timezone | `Europe/Paris` |
| Step | **Add step: `sql_query`**, name `flag-stalled`, connector `crm`, query `flag_stalled_deals`. |
| Alerts | **Send alerts**, **On failure**, recipients `user:<your user>`. |

Save, then **Run with parameters** to run it once: the run detail shows the rows updated. See [Create a job](../../nomaflow/jobs/create.md).

### The notification

**Liberty Next → Build → Notifications**, a rule:

| Field | Value |
|---|---|
| Trigger | A job event — job `crm-stalled-deals`, event `succeeded`. |
| Channels | `portal` |
| Recipients | `role:crm-sales` |
| Subject | `{ROWS} deals without news for 14 days` |

The sales team finds it in the bell every morning. A `STALLED` filter on the Deals screen lists them. See [Notifications](../../nomaflow/notifications.md).

---

## What you have now

A complete CRM built from Settings:

- **Screens** — Customers, Deals, and the Activities of each deal.
- **A dashboard** — the pipeline with KPIs, a chart and the latest activities.
- **Roles** — read-only and sales, with a data scope by country, and company sign-in.
- **An AI assistant** over the CRM's queries, within each user's rights.
- **A daily job** that flags stalled deals, with a notification.

The only code written is SQL.

---

## Where to go from here

| You want to… | Read |
|---|---|
| Apply the pattern to another database or ERP | [What you can build](../what-you-can-build.md) |
| Put the CRM in production | [Production](../../installation/production.md) |
| Move it to another environment | [Packages](../build/packages.md) |
| Find a specific recipe | [Cookbook](../cookbook/crud-existing-table.md) |
