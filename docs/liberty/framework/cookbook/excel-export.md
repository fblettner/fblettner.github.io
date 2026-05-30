---
title: Excel export
description: "Recipe — every screen ships with an Excel export by default. Customise the column list, add a server-side aggregation export, or schedule a daily Excel sent to email."
keywords: [Liberty Framework, cookbook, Excel, export, XLSX, screen, scheduled report]
---

# Excel export

## The problem

Operators want an XLSX of the current filtered view (or a fixed aggregate) — for offline analysis, for compliance, for handing to someone who doesn't have access to the system.

## The pattern

The framework gives you **three levels** of Excel export, in increasing order of effort:

| Level | What you do | What ships |
|---|---|---|
| **1. Free** | Nothing. | Every screen has an *⬇ Export* button that downloads the current filtered view as `<screen>.xlsx`. |
| **2. Customised** | Pick which columns appear in the export. | Same button, but with the columns you want — including columns *hidden by default* in the grid. |
| **3. Scheduled / templated** | Add a Nomaflow job + an HTTP step that calls the export endpoint and mails the result. | A nightly email with the XLSX attached. |

## Level 1 — the default export

It's already there. Open any screen, click **⬇ Export** in the toolbar, the XLSX downloads.

The export respects:

- Every active filter (the file has the same rows as the on-screen grid).
- The current sort order.
- The visible columns *and* the column hidden but available in the catalog with the *Include in export* toggle on.
- The user's locale (date formats, number separators, language of labels).

Nothing to configure unless level 2 applies.

## Level 2 — customise the column list

By default the export contains every visible grid column. To override:

1. Open **Settings → Screens → &lt;your screen&gt; → Grid tab**.
2. For each column, the editor has a **Visible** toggle and an **Include in export** toggle. They're independent.
3. Set *Include in export* on for the columns that should land in the XLSX even if they're hidden from the grid (typical case: `id`, `created_by`, `updated_at`).

Save & reload. The next *⬇ Export* click reflects the new column set.

## Level 3 — a scheduled Excel report

For a recurring report — e.g. "every Monday at 08:00 send the previous week's sales as an XLSX to the management team" — combine a Nomaflow job + an HTTP step.

### Build the job

**Settings → Jobs → + New job**:

| Field | Value |
|---|---|
| **Name** | `weekly-sales-export` |
| **Schedule** | `0 8 * * 1` *(Mondays at 08:00)* |
| **Timezone** | `Europe/Paris` |

### Step 1 — render the XLSX

Type: `HTTP`. Variant: `Connector endpoint`.

| Field | Value |
|---|---|
| **Connector** | `liberty-self` *(the framework's own REST surface)* |
| **Endpoint** | `screens.export` |
| **Parameters** | `app = crm`, `screen_id = deals`, `from_date = ${week.monday}`, `to_date = ${week.sunday}` |

The endpoint returns an XLSX as `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`. The step records it as a binary blob.

### Step 2 — email the XLSX

Type: `HTTP`. Variant: `Raw URL`.

| Field | Value |
|---|---|
| **Method** | `POST` |
| **URL** | Your SMTP-relay HTTP wrapper, or use the Settings → Framework → Notifications → SMTP setup |
| **Body** | `{ "to": "ops@example.com", "subject": "Weekly sales", "attachment": "${previous_step.body}" }` |

### Save and test

Click **▶ Run now** in the job builder to verify without waiting for Monday. The run history shows the two steps, the attached blob, the email-server response.

## Variations

| You want… | Do this |
|---|---|
| **An aggregated export, not a row-by-row dump** | Write a SQL view (`vw_weekly_sales`) that does the aggregation, build a connector + screen on top of the view, set the screen's *Editable* off, export the view's rows. |
| **A PDF instead of XLSX** | Screens don't natively export PDF; the framework's [print stylesheet](../configuration/settings-ui.md) handles printable HTML. For a real PDF, the `crm-pipeline-overview` dashboard has a *⬇ Export PDF* button by default. |
| **A CSV instead of XLSX** | The endpoint accepts `?format=csv` — same job, different parameter. |
| **The receiver to download from a link instead of attachment** | Step 1 stays the same. Step 2 becomes a step that uploads the blob to S3 / Azure / Google Drive and emails the link. Custom Python step. |

## What's next

- [Jobs — Nomaflow → Overview](../../nomaflow/overview.md) for the scheduling model.
- [REST API reference → screens export](../rest-api.md) for the endpoint contract.
- [Cookbook → Scheduled report email](./scheduled-report-email.md) for the recurring-job variant.
