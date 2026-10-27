---
title: Scheduled report email
description: "Recipe — a report e-mailed on a schedule: a Nomaflow job that computes the figures, a notification rule on the job's success that e-mails them, and the dashboard or screen where readers find the detail. What to do when an attached file is required."
keywords: [Liberty Next, cookbook, scheduled report, email, Nomaflow, notifications, SMTP, job, dashboard]
---

# Scheduled report email

## The problem

Management wants yesterday's figures by e-mail at 08:00 on weekdays, without a separate script.

## The pattern

| Part | Mechanism |
|---|---|
| Compute the figures | A Nomaflow job on a schedule, with a `sql_query` step that writes them into a report table. |
| Send them | A notification rule on the job's **succeeded** event, channel `email`, to a role or addresses. |
| Show the detail | A dashboard or a screen on the report table. |

## The recipe

### 1. The e-mail account

**Settings → App → Notifications**: SMTP server, port, security, account and sender address. **Send a test** checks it. See [Notifications → The e-mail account](../../nomaflow/notifications.md#smtp).

### 2. The report table and its query

```sql
CREATE TABLE daily_pipeline (
  report_date DATE,
  stage       VARCHAR(30),
  deals       INTEGER,
  amount      DECIMAL(14,2)
);
```

A writable query `compute_daily_pipeline` on the CRM connector:

```sql
INSERT INTO daily_pipeline (report_date, stage, deals, amount)
SELECT CURRENT_DATE - 1, stage, COUNT(*), SUM(amount)
FROM deals
WHERE updated_at >= CURRENT_DATE - 1 AND updated_at < CURRENT_DATE
GROUP BY stage
```

### 3. The job

In Nomaflow, a job `crm-daily-pipeline` with:

- a schedule `0 8 * * 0-4` — 08:00 Monday to Friday (in Liberty Next's cron, day 0 is Monday; see [Schedules → Cron](../../nomaflow/jobs/schedules.md#cron));
- a `sql_query` step running `compute_daily_pipeline`.

**Run now** checks it at once. See [Create a job](../../nomaflow/jobs/create.md).

### 4. The e-mail

**Settings → Notifications**, a new rule:

| Field | Value |
|---|---|
| Trigger | **A job event**, job `crm-daily-pipeline`, event `succeeded`. |
| Channels | `email` (and `portal` for the bell). |
| Recipients | `role:management`, or `email:management@example.com`. |
| Subject | `Pipeline of the day — {ROWS} lines computed` |
| Body | `The daily pipeline is ready. Open the CRM dashboard for the detail.` |

The placeholders of a job event are `JOB`, `RUN_ID`, `STATE`, `ERROR`, `DURATION_MINUTES` and `ROWS`. **Send a test** sends the rule with sample values. See [Notifications → Rules](../../nomaflow/notifications.md#rules).

### 5. The detail

A dashboard widget or a screen on `daily_pipeline` (for example a bar chart by stage, filtered on the last `report_date`), reachable from the menu. See [Dashboards](../dashboards.md).

### 6. When it fails

The job's own alerts e-mail the operators on failure — see [Notifications → A job's own alerts](../../nomaflow/notifications.md#job-alerts).

## When a file must be attached

Notifications send a subject and a body, without attachments. For a file attached to the e-mail, two ways:

- readers download it themselves: the screen's **Export** menu, or its configured workbooks — see [Excel export](./excel-export.md);
- a `python` step of the job builds the file and sends it with the company's mail library — custom code, see [Plugins](../apps/plugins.md).

## Variations

| Need | How |
|---|---|
| **Weekly, on Mondays** | Cron `0 8 * * 0`. |
| **A message in Teams or another tool** | A notification rule with the `action` channel, calling an API connector endpoint (a webhook). |
| **A warning only when something is wrong** | A step that fails when a check is not met, and a rule on the `failure` event. |

## What's next

- [Notifications](../../nomaflow/notifications.md) — rules, channels, recipients, placeholders.
- [Schedules](../../nomaflow/jobs/schedules.md) — cron and presets.
- [Dashboards](../dashboards.md) — show the figures.
