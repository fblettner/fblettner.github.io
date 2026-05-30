---
title: Monitoring — overview
description: "Liberty's built-in Monitoring page surfaces what's happening right now — connected users, held row locks, per-pool SQLAlchemy stats, runtime info and the live log tail. Plus the framework's health endpoints for external monitoring."
keywords: [Liberty Framework, monitoring, technical dashboard, connected users, held locks, pool stats, log tail, healthz, runtime]
---

# Monitoring — overview

Two surfaces give you visibility into what a running Liberty install is doing:

| Surface | What it shows | Audience |
|---|---|---|
| **The Monitoring page** | Live runtime view — KPI strip, per-pool stats, connected users, held locks, log tail. Reached from the sidebar (icon `📊 Monitoring`). | Operators on duty. |
| **The health endpoints** | Machine-readable status — `/health`, `/health`. Used by load balancers, Kubernetes probes, external monitoring (Prometheus, Datadog…). | Automation. |

This page is the map of both. The dashboard cards get their own deep page; the health endpoints get theirs.

---

## The Monitoring page

Click **Monitoring** in the left sidebar. The page is a single scrollable view with five sections, each in its own card:

| Card | What it carries |
|---|---|
| **KPI strip** | Quick numbers: uptime, connected users count, active locks count, total pool connections. |
| **Pools** | One row per pool — pool size, in-use connections, overflow, queue depth. Helps spot a saturated pool. |
| **Connected users** | One row per signed-in user — username, since when, last activity. |
| **Held locks** | Row-level locks the framework is currently holding (when a dialog opens a row for edit, a soft lock prevents two operators from clobbering each other). |
| **Logs** | The framework's last few hundred log lines — colour-coded by level, filterable by level + text. |

The full walkthrough of each card lives on [Dashboard](./dashboard.md).

---

## Permissions to see the page

Visibility:

| Role | Effect |
|---|---|
| **Superuser** | Full access — sees every section. |
| `monitoring:view` (granular permission) | Same — full access. |
| Anyone else | The Monitoring entry doesn't appear in the sidebar. The page returns 403 if reached directly by URL. |

Grant the `monitoring:view` permission to operations roles that need to keep an eye on the running install without granting them every other admin power.

---

## When to look at Monitoring

| Situation | What to check first |
|---|---|
| Users complaining about slowness. | **Pools** card — is any pool saturated (queue depth > 0)? |
| Mystery error in a screen. | **Logs** card — filter by `ERROR` and scroll back. |
| "Did Bob delete that row by mistake?" | **Connected users** card — confirm Bob was signed in at that time. **Locks** card — see if Bob was the one holding the row's lock. |
| Framework feels stuck. | **KPI strip** — uptime should be reasonable. **Pools** — connections shouldn't all be in-use. |

For deeper investigation (per-screen response times, per-query slow logs), wire an external monitoring system — see [Health endpoints](./health-endpoints.md).

---

## When to wire external monitoring

The built-in Monitoring page is **in-memory** — a process restart wipes the locks card, the connected users list and the log tail. It's a *live operations view*, not a historical record.

For historical metrics + alerting, you want an external system. Liberty exposes the building blocks:

- **`/health`** — liveness probe (the process is up).
- **`/health`** — readiness probe (the framework finished booting + the database is reachable).
- Process logs to `stdout` — pick them up with Loki / Fluentd / Datadog Agent.
- The framework's `LIBERTY_LOG_LEVEL` env var — set to `DEBUG` for verbose tracing during incidents.

Setup and external-monitoring patterns are covered on [Health endpoints](./health-endpoints.md).

---

## What the page does NOT show

Knowing the limits prevents frustrated searches:

| You won't find | Where to look instead |
|---|---|
| Per-screen / per-query response time histograms. | An APM (Datadog APM, New Relic, OpenTelemetry collector) — wire it via the standard FastAPI middleware pattern. |
| Database server metrics (Postgres CPU, query plans). | Postgres' own monitoring (`pg_stat_statements`, pgbadger) or your DB platform's tooling. |
| Container resource usage (RAM, CPU). | Docker (`docker stats`), Portainer's container view, or Kubernetes' kubelet metrics. |
| Historical login records. | The framework's audit log (when configured per screen via `audit_table`) — see [Build → Screens → General](../framework/build/screens/create-from-query.md). |
| The Nomaflow run history. | The [Nomaflow → Runs](../nomaflow/runs/history.md) page — separate from Monitoring. |

The Monitoring page is a **process-introspection** view. Application-level history (who ran what when, which run succeeded) lives in dedicated audit and Nomaflow surfaces.

---

## What you actually do — quick map

| Goal | Read |
|---|---|
| Read the Monitoring page card by card. | [Dashboard](./dashboard.md). |
| Wire `/health` to your load balancer. | [Health endpoints](./health-endpoints.md). |
| Set up external metric collection. | [Health endpoints → External monitoring](./health-endpoints.md#external-monitoring). |

---

## What's next

- [Dashboard](./dashboard.md) — every card on the Monitoring page.
- [Health endpoints](./health-endpoints.md) — the `/health` / `/health` contract.
