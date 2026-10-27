---
title: Health endpoints
description: "Liberty Next health endpoints: /health (liveness), /ready (readiness — the framework database answers) and /info (version and counts, more details when signed in), with examples for Docker, Kubernetes and external probes."
keywords: [Liberty Next, health, ready, info, liveness, readiness, healthcheck, Kubernetes, load balancer, monitoring]
---

# Health endpoints

Three endpoints, none of which needs a token.

| Endpoint | Answers | Use it for |
|---|---|---|
| `GET /health` | `200 {"status": "ok", "version": "7.0.58"}` as soon as the process runs. | Liveness: restart the process if it does not answer. |
| `GET /ready` | `200 {"status": "ok", "version": …, "pool": "default"}` when the framework database answers a `SELECT 1` within 5 seconds; `503 {"status": "unavailable", …, "error": "…"}` otherwise. | Readiness: send traffic only when it is `200`. |
| `GET /info` | Version and counts (connectors, pools, screens, dashboards…), feature flags (SSO, assistant, licence mode). | A quick look, support. |

---

## /ready \{#ready\}

The server starts even when its database is unreachable — so that a pool can be fixed from **Settings** — but `/ready` answers `503` until the database is back. An install without a `default` pool answers `200` with `"pool": null`.

The Docker layouts use it as the container healthcheck: a stack whose database is down shows **unhealthy** in `docker ps` and in `./liberty status`.

```yaml title="Kubernetes"
livenessProbe:
  httpGet: { path: /health, port: 8000 }
  periodSeconds: 30
readinessProbe:
  httpGet: { path: /ready, port: 8000 }
  periodSeconds: 10
  failureThreshold: 3
```

---

## /info \{#info\}

Anonymous callers get the counts and flags only. A signed-in caller also gets the names of the connectors and pools, the location of the user store and the assistant's model.

```json title="GET /info (anonymous, excerpt)"
{
  "name": "Liberty Next",
  "version": "7.0.58",
  "connectors_loaded": 12,
  "pools_loaded": 4,
  "screens": { "apps": ["nomasx1", "nomajde"], "total": 107 },
  "auth": { "backend": "toml", "oidc_enabled": true },
  "ai": { "enabled": true, "available": true },
  "license": { "mode": "full" }
}
```

---

## External monitoring \{#external-monitoring\}

- Probe `/ready` every minute from the monitoring tool and alert after a few failures in a row.
- Collect the server log from standard output; `log_format = "json"` in `[app]` writes one JSON object per line, each with the request id.
- For jobs, prefer a notification rule on `failure` and `missed` — see [Notifications](../nomaflow/notifications.md).
