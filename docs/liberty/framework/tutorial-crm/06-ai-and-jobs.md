---
title: Step 6 — AI assistant and scheduled jobs
description: "Wire the AI assistant so it can answer natural-language questions over the CRM data, and add a nightly Nomaflow job that flags deals with no activity in 14 days. Demonstrates AI tool generation, permission scoping for the assistant and the Nomaflow job model."
keywords: [Liberty Framework, tutorial, CRM, AI, assistant, Nomaflow, scheduled job, tool use]
---

# Step 6 — AI assistant and scheduled jobs

Two final layers complete the CRM:

- **AI assistant** — natural-language access to the CRM data, scoped to what the calling user can see.
- **A scheduled job** — runs every night, finds deals with no activity in 14 days, sends a summary to Slack.

By the end of this step the CRM is feature-complete. Estimated time: **15 minutes**.

---

## Set up the AI assistant

The framework's [AI assistant](../ai-assistant.md) is an Anthropic Claude model with **tool use** enabled. Every connector query the calling user can run becomes a tool the assistant can pick. You ask a question; the model runs the right queries; it answers.

### Configure the provider

Set `ANTHROPIC_API_KEY` in your environment (get one from https://console.anthropic.com → API keys), then restart the framework. Open **Settings → Framework → AI** to confirm the field reads "Provider: Anthropic / API key: ✓ configured".

Default model is `claude-sonnet-4-6`. Leave it.

### Confirm the connectors are exposed

We set *Expose to AI assistant* on the `customers` and `deals` connectors when we created them in Steps 2 and 3 (it defaulted to *on*). To confirm, open **Settings → Connectors → customers** — the toggle should be **on**.

Open the same view for `deals` and `activities`. Make sure they're all on.

Then open **GET /ai/tools** in a new tab (or `liberty-admin ai-tools` on the CLI). You should see a list:

```
customers__list           — Returns every customer with their status, industry and primary contact.
deals__list               — Sales deals — pipeline stage, amount, expected close.
deals__pipeline_total     — …
deals__by_stage           — …
activities__list          — …
```

Only **read** queries appear by default. Write queries are excluded unless the connector entry explicitly opts in (and the caller carries the `ai:write` permission).

### Grant `ai:chat` to the role

Open **Settings → Roles → crm-sales** and **+ Add permission**: `ai:chat`. Save.

Same for `crm-admin`. Leave `crm-viewer` without it for now.

### Try it

Sign out, sign in as `sales-alice`. The 💬 **Chat** icon appears in the header. Click it.

Try a few questions:

> *"How many deals are in the pipeline right now?"*

The assistant picks the right tool (`deals__pipeline_total`), runs it, reads the result and answers:

> *"There are €173,500 in open pipeline value across 3 deals (excluding won/lost)."*

The tool call is visible inline — expand it to see the parameters and the rows returned.

> *"Which customers have no deals in the last 30 days?"*

The assistant chains `customers__list` and `deals__list`, joins the results in its reasoning, and answers with the right customers — possibly suggesting a follow-up.

> *"Delete the Globex deal."*

Refused. The assistant doesn't have access to write queries — `deals__delete` isn't in its tool list because the connector didn't opt in.

### What the assistant can and can't do

| Action | Allowed? |
|---|---|
| Read any query the caller can run. | ✓ |
| Combine multiple queries to answer a complex question. | ✓ |
| Render the answer in the user's language (uses the `session.lang`). | ✓ |
| Run a write query. | Only when the connector + role both opt in (`expose_to_ai` + `ai:write` permission). |
| Access data the caller doesn't have permission for. | ✗ — the tool list is per-caller, the permission gates apply. |

The framework's row-level access patterns (`WHERE owner = :session_user`) propagate to the assistant automatically: if the human user only sees their own customers, so does the AI on their behalf.

---

## Add the stale-deal job

A common pipeline-hygiene practice: flag deals that haven't moved in two weeks. The framework's [Jobs / Nomaflow](../jobs/overview.md) engine runs scheduled work in-process; we'll add a job that fires nightly.

### Add the detection query

Open **Settings → Connectors → deals → + Add query**:

| Field | Value |
|---|---|
| **Name** | `stale-deals` |
| **Operation** | Read |
| **SQL** | The query below |

```sql
SELECT d.id, d.name, c.name AS customer_name, d.stage, d.amount,
       MAX(a.happened_at) AS last_activity
FROM   deals d
JOIN   customers c ON c.id = d.customer_id
LEFT JOIN activities a ON a.deal_id = d.id
WHERE  d.stage NOT IN ('won', 'lost')
GROUP BY d.id, d.name, c.name, d.stage, d.amount
HAVING MAX(a.happened_at) IS NULL
    OR MAX(a.happened_at) < (CURRENT_DATE - INTERVAL '14 days');
```

Test — you should see the deals with no recent activity (likely all of them given the seed data).

### Build the job

**Settings → Jobs → + New job**:

| Field | Value |
|---|---|
| **Name** | `crm-flag-stale-deals` |
| **App** | `crm` |
| **Description** | `Find deals with no activity in 14+ days; summary to Slack.` |
| **Schedule** | `0 8 * * 1-5` *(08:00 on weekdays)* |
| **Timezone** | `Europe/Paris` |
| **Enabled** | ✓ |
| **Single instance** | ✓ |
| **Timeout** | 60 seconds |

### Add three steps

#### Step 1 — fetch stale deals

| Field | Value |
|---|---|
| **Name** | `fetch-stale` |
| **Type** | `SQL Query` |
| **Connector / Query** | `deals` / `stale-deals` |
| **Result alias** | `stale` |

The first step's result is referenced by the next step as `${steps.fetch-stale.rows}`.

#### Step 2 — guard against empty result

| Field | Value |
|---|---|
| **Name** | `check-empty` |
| **Type** | `Python` |
| **Callable** | `crm.alerts:format_stale_message` |
| **Kwargs** | `rows = ${steps.fetch-stale.rows}` |
| **Condition** | `${steps.fetch-stale.row_count} > 0` |

When there are no stale deals, the *Condition* is false and the step is skipped — the job ends `succeeded` without sending a Slack message.

We'll need a tiny Python module. Create `liberty-apps/plugins/crm/__init__.py` and `liberty-apps/plugins/crm/alerts.py`:

```python
# liberty-apps/plugins/crm/alerts.py
def format_stale_message(*, rows, **ctx):
    """Format the list of stale deals as a Slack-friendly message."""
    lines = ["🟡 *Deals with no activity for 14+ days*", ""]
    for r in rows:
        last = r.get("last_activity") or "never"
        lines.append(f"• *{r['name']}* — {r['customer_name']} · €{r['amount']:,.0f} · last activity: {last}")
    return {"text": "\n".join(lines), "rows_affected": len(rows)}
```

#### Step 3 — post to Slack

| Field | Value |
|---|---|
| **Name** | `slack-notify` |
| **Type** | `HTTP` |
| **Variant** | `Raw URL` |
| **Method** | `POST` |
| **URL** | `https://hooks.slack.com/services/T0/B0/XXXXX` *(your webhook)* |
| **Body** | `{ "text": "${steps.check-empty.text}" }` |
| **Condition** | `${steps.fetch-stale.row_count} > 0` |

### Notifications on failure

In the *Notifications* section of the job, set:

| Field | Value |
|---|---|
| **On failure** | `slack:#ops-alerts` |

So if the job itself errors (database down, Slack 500), the ops channel is notified — not lost to the run log.

### Save and trigger manually

**Save & reload**. Click the **▶ Run now** button at the top of the job builder to test without waiting for 08:00. The run history opens; the three steps appear in order; you watch the log tail stream.

---

## Verify

| Check | How |
|---|---|
| **AI assistant works for `sales-alice`** | Sign in as Alice, open `/chat`, ask "how many deals are in the pipeline?". Get a numeric answer with the tool call visible. |
| **`crm-viewer` doesn't see the assistant** | Sign in as Bob, the 💬 icon is hidden. |
| **The stale-deal job runs successfully** | *Settings → Jobs → crm-flag-stale-deals* → run history shows the manual fire with status `succeeded`. |
| **The Slack channel got the message** | (Or the run log shows the formatted message in the `check-empty` step's output.) |
| **The job will fire tomorrow at 08:00** | The job's *Next 5 fires* preview shows the upcoming runs. |

---

## What you have now

A complete CRM application built end-to-end on the Liberty Framework:

- **Three screens** — Customers, Deals, Activities (sub-grid).
- **One dashboard** — Pipeline overview with four KPIs, a chart and a recent-activity feed.
- **Three roles** — viewer, sales, admin — with OIDC sign-in mapped from the IdP's groups claim.
- **An AI assistant** that answers natural-language questions over the data, scoped per role.
- **A scheduled job** that flags stale deals and posts to Slack every weekday morning.

Total time across the six steps: about **90 minutes** for a first-timer, ~30 for someone who's done it before. Lines of code written: **the SQL queries**, **one short Python file** (`alerts.py`), and a slim 🔒 client secret in the environment. The rest is configuration.

---

## Where to go from here

| You want to… | Read |
|---|---|
| **Apply the same pattern to SAP / NetSuite / another ERP** | Same recipe, point the pool at the ERP database. For JD Edwards specifically, the packaged [Nomajde](https://docs.nomana-it.fr/nomajde/) app already ships every screen. |
| **Deploy this CRM to production** | [Deployment → Running in production](../deployment/running-production.md). |
| **Look up a specific recipe** | [Cookbook](../cookbook/crud-existing-table.md). |
| **Understand a concept more deeply** | The [Concepts](../connectors.md) pages have a "What / Why / When" intro now. |
| **See other use cases** | [What you can build](../what-you-can-build.md). |
