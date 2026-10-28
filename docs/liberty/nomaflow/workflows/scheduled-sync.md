---
title: Scheduled sync
description: "Recipe — copy tables every night from an operational database to a reporting database with sql_copy, refresh the aggregates with sql_query, and be warned when it fails or does not run."
keywords: [Nomaflow, recipe, scheduled sync, sql_copy, overwrite, sql_query, nightly ETL, notifications, Liberty Next]
---

# Scheduled sync

Every night, copy the `orders` and `customers` tables of the operational database into the reporting database, then refresh the aggregates the dashboards read.

---

## What you need \{#needs\}

- Two SQL connectors: `ops-db` (source, read-only account) and `reporting` (target).
- On `reporting`, a write query `daily_totals_refresh` that rebuilds the aggregates (`REFRESH MATERIALIZED VIEW …`, or `DELETE` + `INSERT … SELECT …`).

---

## The job \{#job\}

**+ New job**: id `nightly-reporting-sync`, tag `etl`, **Schedule (cron)** `0 2 * * *`, **Timezone** `Europe/Paris`. Then three steps:

| # | Type | Settings |
|---|---|---|
| 1 | `sql_copy` | Source `ops-db` · `public` · `orders`; target `reporting` · `staging` · `orders`; mode `overwrite`. |
| 2 | `sql_copy` | Same for `customers`. |
| 3 | `sql_query` | Connector `reporting`, query `daily_totals_refresh`. |

`overwrite` writes into `<table>__new` and swaps it with the target in one transaction: the dashboards never see a half-filled table, and a failed copy leaves yesterday's data in place.

:::warning[Type coercion]
`sql_copy` applies the JD Edwards conversion rules by default (`type_coercion = "jde"`, `decimal_mode = "truncate"`). Between two ordinary databases, set `type_coercion = "none"` in `jobs.toml` so that values are copied as they are.
:::

```toml title="jobs.toml"
[[jobs]]
id = "nightly-reporting-sync"
schedule = "0 2 * * *"
timezone = "Europe/Paris"
tags = ["etl"]

[jobs.retry]
attempts = 3
backoff = "exponential"
base_seconds = 60

[[jobs.steps]]
type = "sql_copy"
name = "copy-orders"
source = { connector = "ops-db", schema = "public", table = "orders" }
target = { connector = "reporting", schema = "staging", table = "orders" }
mode = "overwrite"
type_coercion = "none"

[[jobs.steps]]
type = "sql_copy"
name = "copy-customers"
source = { connector = "ops-db", schema = "public", table = "customers" }
target = { connector = "reporting", schema = "staging", table = "customers" }
mode = "overwrite"
type_coercion = "none"

[[jobs.steps]]
type = "sql_query"
name = "refresh-totals"
connector = "reporting"
query = "daily_totals_refresh"
```

---

## Be warned \{#notify\}

In **Liberty Next → Build → Notifications**, a rule on *A job event*: job `nightly-reporting-sync`, events `failure` and `missed`, channel `email`, recipient `role:ops`, subject `{JOB}: {STATE}`, body `{ERROR}`. See [Notifications](../notifications.md).

---

## Check it \{#check\}

**▶ Run now**, then open the run: each step shows its rows; `DEBUG` in **Run with parameters** shows the queries. Once it is right, leave the schedule on.
