---
title: Scheduled report email
description: "Recipe — every weekday at 08:00, run a SQL aggregate, render it as XLSX, email it to a recipient list. The framework's Nomaflow job + http step + Excel export endpoint do the work."
keywords: [Liberty Framework, cookbook, scheduled, report, email, Nomaflow, XLSX, daily, weekly]
---

# Scheduled report email

## The problem

Management wants a "yesterday's numbers" report at 08:00 every weekday in their inbox. Or "weekly pipeline summary" on Mondays. Without writing a custom cron + email script.

## The pattern

A Nomaflow job with three steps:

1. **Render the report** as an XLSX (via the framework's screen-export endpoint, or a Python helper).
2. **Attach + send the email** via your SMTP relay or a transactional service.
3. **Log the send** for audit (optional).

The framework handles the scheduling, the retry on failure, the run history, the alerting.

## The recipe

### Step 1 — make sure the data is queryable

You need a connector query that produces the rows you want to report. If you already have a screen that shows the right data, you're done — its read query is what you'll export.

For the example we'll reuse the CRM tutorial's `deals.list` query.

### Step 2 — configure the SMTP relay

**Settings → Framework → Notifications → SMTP**:

| Field | Value |
|---|---|
| **Host** | `smtp.example.com` |
| **Port** | `587` |
| **Username** | `liberty@example.com` |
| **Password** | 🔒 *(encrypted)* |
| **TLS** | `STARTTLS` |
| **From address** | `Liberty <liberty@example.com>` |

Send a test email from the form to verify.

### Step 3 — build the job

**Settings → Jobs → + New job**:

| Field | Value |
|---|---|
| **Name** | `crm-daily-pipeline-report` |
| **App** | `crm` |
| **Description** | `Daily 08:00 weekday: pipeline export to management.` |
| **Schedule** | `0 8 * * 1-5` |
| **Timezone** | `Europe/Paris` |
| **Single instance** | ✓ |
| **Timeout** | 120 seconds |

### Step 4 — the three steps

#### Step 1 — render the XLSX

| Field | Value |
|---|---|
| **Name** | `render` |
| **Type** | `HTTP` |
| **Variant** | `Connector endpoint` |
| **Connector** | `liberty-self` |
| **Endpoint** | `screens.export` |
| **Parameters** | `app = crm`, `screen_id = deals`, `format = xlsx`, `from_date = ${yesterday}`, `to_date = ${yesterday}` |
| **Result alias** | `xlsx` |

The `liberty-self` connector is built into the framework — it exposes the framework's own REST surface to job steps.

#### Step 2 — send the email

| Field | Value |
|---|---|
| **Name** | `email` |
| **Type** | `HTTP` |
| **Variant** | `Raw URL` |
| **Method** | `POST` |
| **URL** | The framework's SMTP-bridge endpoint: `http://127.0.0.1:8000/api/notifications/email` *(authenticated with the system user's JWT — the framework handles this for system-triggered jobs)*. |
| **Headers** | `Content-Type: application/json` |
| **Body** | `{ "to": ["management@example.com"], "subject": "Pipeline daily — ${yesterday}", "body": "Find attached the pipeline as of ${yesterday}.", "attachments": [{ "name": "pipeline-${yesterday}.xlsx", "content": "${steps.render.body}", "encoding": "base64" }] }` |

#### Step 3 — log the send (optional)

| Field | Value |
|---|---|
| **Name** | `log-send` |
| **Type** | `SQL Query` |
| **Connector / Query** | `audit` / `log-event:write` |
| **Parameters** | `event = "pipeline-report-sent"`, `payload = ${steps.email.body}` |

A small `audit` table that records every system-triggered email — useful when someone says "I didn't get the report".

### Step 5 — notifications on failure

In the job's *Notifications* block:

| Field | Value |
|---|---|
| **On failure** | `slack:#ops-alerts` |
| **On skipped** | *(leave empty)* |

If the job fails (database down, SMTP rejects the email), the ops channel pings.

### Step 6 — test and ship

Click **▶ Run now** in the job builder. The run-detail page opens with the three steps; on success the email lands in the recipients' inbox and the audit table gets a row.

The job's *Next 5 fires* preview confirms it'll fire tomorrow at 08:00.

## Variations

| You want… | Do this |
|---|---|
| **A PDF instead of XLSX** | Replace `format = xlsx` with `format = pdf` on Step 1. Works for dashboards; screens render their print stylesheet to PDF. |
| **A weekly report (Mondays only)** | Change the cron to `0 8 * * 1`. |
| **Multiple recipients with different views** | Loop in a Python step instead of one HTTP step — pass a list of `(recipient, screen_id, filters)` tuples. |
| **An inline HTML body instead of attachment** | The framework's `screens.export` endpoint supports `format = html` — embed the response directly in the email body. |
| **Slack instead of email** | Replace Step 2 with an HTTP POST to the Slack webhook, with the file uploaded via `files.upload` instead of attached. |

## What's next

- [Jobs — Nomaflow → Overview](../jobs/overview.md) for the scheduling model.
- [Cookbook → Excel export](./excel-export.md) for the export endpoint.
- [CRM tutorial → Step 6](../tutorial-crm/06-ai-and-jobs.md) for a similar nightly-job pattern (stale deals).
