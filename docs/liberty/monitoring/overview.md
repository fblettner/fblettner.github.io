---
title: Monitoring — overview
description: "How to watch a running Liberty Next server: the Monitoring page for superusers (sessions, record locks, database pools, runtime, live log), the health endpoints for probes, and the command-line status and doctor."
keywords: [Liberty Next, monitoring, technical dashboard, connected users, record locks, pools, log tail, health, ready, info]
---

# Monitoring — overview

| Surface | Shows | For |
|---|---|---|
| **The Monitoring page** | What happens now: connected users, record locks, database pools, runtime, the live log. | Superusers, from **Liberty Next → Operate → Monitoring**. See [The Monitoring page](./dashboard.md). |
| **Server log** and **Retention** | Every line the server wrote, searchable; what the server keeps and how much it takes. | Superusers, the other two tabs of the Monitoring page. See [Server log](./server-log.md) and [Retention](./retention.md). |
| **Health endpoints** | `/health` (the process is up), `/ready` (the framework database answers), `/info` (version and counts). | Load balancers, container healthchecks, external probes. See [Health endpoints](./health-endpoints.md). |
| **`./liberty status` / `doctor`** | Versions, health, pending migrations, configuration problems. | Administrators on the server. See [Operations](../installation/operations.md). |

---

## What to look at \{#when\}

| Situation | First check |
|---|---|
| Users find the application slow | **Database pools**: connections all *In use*, or *Overflow* above 0. |
| An error on a screen | The [server log](./server-log.md) searched for the request id the user's message gives. |
| The disk fills up | [Retention](./retention.md): the size of each store, then **Preview** and **Run now**. |
| A record cannot be saved | **Record locks**: someone else may have it open. |
| The server seems stuck | `/ready`, then `./liberty status`. |
| A scheduled job did not run | The Nomaflow [run history](../nomaflow/runs/history.md) — a **MISSED** run records it. |

---

## What it does not show \{#limits\}

The Monitoring page is a live view kept in the server's memory: a restart empties it. For history — response times, database load, container resources — use the tools made for it (an APM, the database's own statistics, `docker stats`). The server's log goes to standard output: `log_format = "json"` in `[app]` makes it easy to collect, and each line carries the request id.
