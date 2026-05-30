---
title: Health endpoints
description: "The framework's two machine-readable status endpoints — /health for liveness and /info for runtime introspection. Use them in load-balancer probes, container orchestrators and external monitoring."
keywords: [Liberty Framework, health, healthz, info, liveness probe, readiness probe, load balancer, Kubernetes, Prometheus]
---

# Health endpoints

The Monitoring page covers the human-readable runtime view. For automated probes — load balancers, Kubernetes, Docker healthchecks, external monitoring — Liberty exposes two HTTP endpoints with no authentication.

| Endpoint | Purpose | Returns |
|---|---|---|
| **`GET /health`** | Liveness probe — the process is running. | `{ "status": "ok", "version": "<version>" }` |
| **`GET /info`** | Runtime introspection — what config is loaded. | A larger JSON object with connectors, pools, dictionary entries, screens, menus, charts, dashboards, auth backend, AI status, license mode. |

Both are **unauthenticated** — they're meant to be polled by infrastructure, not by users. The `/info` payload doesn't expose secrets (no passwords, no tokens, no JWT signing key) — only structural counts and configuration flags.

---

## `/health` — liveness

The simplest endpoint. Returns 200 + a JSON body when the process is up and serving requests.

```bash
curl http://localhost:8000/health
```

```json
{ "status": "ok", "version": "2026.06.1" }
```

| Field | What it carries |
|---|---|
| `status` | Always `"ok"` when the endpoint responds. The HTTP status code (200) is the real signal — if the process is down, you get a connection error / 5xx, not `"status": "down"`. |
| `version` | The framework's version string (matches `pip show liberty-next` or the Docker image tag). |

### Use it for

| Probe | Configuration |
|---|---|
| **Docker healthcheck** | `HEALTHCHECK CMD curl -fsS http://localhost:8000/health \|\| exit 1` |
| **Kubernetes liveness probe** | `livenessProbe: { httpGet: { path: /health, port: 8000 } }` |
| **AWS ALB / GCP LB / nginx** | Point the health check at `/health`. Default expected status: 200. |
| **External monitoring (UptimeRobot, Datadog Synthetic)** | Same — hit `/health`, alert on non-200. |

### Probe cadence

| Where | Recommended interval |
|---|---|
| Docker / Kubernetes liveness | Every 10-30 seconds. Too frequent burns CPU; too sparse delays recovery. |
| Cloud load balancer | Every 10 seconds typically. |
| External monitoring | Every 30-60 seconds. |

The endpoint is cheap (no DB call) — high-frequency polling is fine, just unnecessary.

---

## `/info` — runtime introspection

A larger payload with everything the framework knows about its own configuration. Useful for dashboards, smoke tests, audits.

```bash
curl http://localhost:8000/info | jq
```

Sample response:

```json
{
  "name": "Liberty",
  "version": "2026.06.1",
  "connectors_loaded": 4,
  "connectors": ["default", "crm", "reporting", "jdedwards"],
  "pools": ["default", "crm_pool", "reporting_pool", "jde_pool"],
  "dictionary": {
    "entries": 412,
    "default_language": "en"
  },
  "menus": {
    "apps": ["crm", "reporting"]
  },
  "screens": {
    "apps": ["crm", "reporting"],
    "total": 47
  },
  "charts": {"total": 12},
  "dashboards": {"total": 5},
  "auth": {
    "backend": "db",
    "pool": "default",
    "oidc_enabled": true
  },
  "ai": {
    "enabled": true,
    "available": true,
    "model": "claude-opus-4-7"
  },
  "crypto": {"configured": true},
  "license": {"mode": "full"},
  "frontend": "/app/frontend/dist"
}
```

### What each field means

| Field | What it tells you |
|---|---|
| `name`, `version` | Framework identity. |
| `connectors_loaded`, `connectors` | Count and list of loaded connectors. Drop → either a config error or a licensed connector skipped (see `license.mode`). |
| `pools` | The SQL pools the framework manages. |
| `dictionary.entries` | Total dictionary entries (shared + per-connector). Sanity-check a fresh install: should match what you committed. |
| `dictionary.default_language` | What language the dictionary falls back to when a request has no language preference. |
| `menus.apps` | Apps that have a menu attached (= visible in the app switcher when `show_in_switcher` is on). |
| `screens.apps`, `screens.total` | Per-app coverage and total screen count. |
| `charts.total`, `dashboards.total` | Counts. |
| `auth.backend` | `"toml"` or `"db"`. |
| `auth.pool` | (`db` backend only) The pool name the auth store uses. |
| `auth.toml` | (`toml` backend only) Path to the auth file on disk. |
| `auth.oidc_enabled` | Whether OIDC sign-in is wired. |
| `ai.enabled` / `ai.available` / `ai.model` | Whether the AI assistant is enabled, whether the configured provider responds, the model id. |
| `crypto.configured` | Whether the master key is set (true = `ENC:` values can be decrypted). |
| `license.mode` | `"full"` (licensed connectors loaded) or `"restricted"` (no license — only the open framework runs). |
| `frontend` | Path to the React build directory. |

### Use it for

| Pattern | Example |
|---|---|
| **Post-deploy smoke test** | Pull `/info` after a deploy; assert the version matches what you deployed, the `connectors_loaded` count matches what your apps repo defines, and `crypto.configured = true`. |
| **License monitoring** | Alert when `license.mode` flips to `"restricted"` — somebody's license expired or wasn't installed. |
| **AI availability dashboard** | Track `ai.available` — if it goes false unexpectedly, the upstream LLM is unreachable. |
| **Configuration drift detection** | Snapshot `/info` daily; diff against the previous snapshot to catch unexpected changes. |

### Use it NOT for

- **Performance metrics** — `/info` is a config snapshot, not a metrics endpoint. For latency / throughput, wire an APM.
- **Per-user state** — no user data in the payload by design.

---

## Wire to Kubernetes

A minimal pod spec with both probes:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: liberty
spec:
  replicas: 1
  selector:
    matchLabels: { app: liberty }
  template:
    metadata:
      labels: { app: liberty }
    spec:
      containers:
        - name: liberty
          image: ghcr.io/fblettner/liberty-next:2026.06.1
          ports:
            - containerPort: 8000
          env:
            - { name: LIBERTY_APPS_DIR,    value: /apps/config }
            - { name: LIBERTY_MASTER_KEY,  valueFrom: { secretKeyRef: { name: liberty-secrets, key: master-key } } }
            - { name: LIBERTY_JWT_SECRET,  valueFrom: { secretKeyRef: { name: liberty-secrets, key: jwt-secret } } }
            - { name: DATABASE_URL,        valueFrom: { secretKeyRef: { name: liberty-secrets, key: database-url } } }
          volumeMounts:
            - { name: apps, mountPath: /apps, readOnly: true }
          # Liveness — restart the pod if /health fails for too long
          livenessProbe:
            httpGet:    { path: /health, port: 8000 }
            initialDelaySeconds: 30   # give the framework time to bootstrap
            periodSeconds: 15
            timeoutSeconds: 3
            failureThreshold: 3
          # Readiness — keep the pod out of the service until it's healthy
          readinessProbe:
            httpGet:    { path: /health, port: 8000 }
            initialDelaySeconds: 10
            periodSeconds: 5
            timeoutSeconds: 2
            failureThreshold: 2
      volumes:
        - name: apps
          persistentVolumeClaim: { claimName: liberty-apps-pvc }
```

Liberty has one `/health` endpoint serving both liveness + readiness — the framework either runs (and serves requests) or it doesn't. If you need a stricter readiness check (e.g. "every pool is connected, every config loaded"), parse `/info` and gate on `connectors_loaded > 0` + `crypto.configured = true`.

---

## External monitoring \{#external-monitoring\}

For full metrics, Liberty itself doesn't expose a Prometheus `/metrics` endpoint out of the box. The integration patterns:

### Pattern A — Process-level metrics via a sidecar

Run a sidecar that scrapes process / container metrics (CPU, RAM, network) — `node_exporter` for bare metal, `cAdvisor` for Docker, `kubelet` for Kubernetes. The Liberty process appears as one container; you get its resource usage without the framework needing to expose anything.

### Pattern B — Log-based metrics

Liberty's structured logs cover most application-level signals — request paths, latencies (when DEBUG is enabled), job run outcomes, connector errors. Route logs to Loki / ELK / Datadog Logs and build alerts on log patterns:

```
ERROR · liberty.jobs · run_a8c4d failed         → page on-call
WARN · liberty.connectors · pool default overflow → capacity alert
```

This is the path most installs end up on — leverage what's already in the logs rather than add a metrics endpoint.

### Pattern C — Custom Prometheus exporter

For installs that need true Prometheus scraping, expose a small `/metrics` endpoint via a Python plugin or sidecar that polls `/info` and re-emits the relevant counts (connectors loaded, pool size, license mode) as Prometheus gauges. ~30 lines of code; not shipped by the framework today.

### Pattern D — APM (Datadog APM, New Relic, OpenTelemetry)

For per-request latency histograms and per-query timing, the standard FastAPI integration:

```bash
pip install datadog-api-client  # or opentelemetry-instrumentation-fastapi
```

Then wire the middleware in `app.toml` via a plugin hook. Liberty doesn't ship a built-in APM integration — the FastAPI ecosystem covers it.

---

## What `/health` and `/info` are NOT

| Misconception | Reality |
|---|---|
| `/health` does a deep check (DB reachable, AI available). | No — it returns 200 as soon as the process is up. For deeper checks, parse `/info` or write a custom probe endpoint. |
| `/info` exposes secrets. | No — by design no password, no token, no signing key. Inspect the source if you doubt; the field list above is exhaustive. |
| `/health` is rate-limited. | No — poll as often as your probe cadence requires. |
| The endpoints respect permissions. | No — they're unauthenticated, accessible by any client that can reach the framework's HTTP port. Use a firewall / reverse proxy to restrict if needed (e.g. only the LB and your monitoring should reach the port). |

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Probe interval shorter than the boot time. | Pod restarts in a loop — the orchestrator kills it before bootstrap finishes. | Set `initialDelaySeconds` to at least 30 seconds. |
| Public-facing framework with `/info` reachable. | Anyone on the internet can read your config inventory. | Restrict at the reverse proxy (return 403 on `/info`) if it's not intentionally public. |
| Probe expects a specific body shape. | Liberty's response shape changes between versions — alerts on body content break on upgrade. | Rely on the HTTP status code only for liveness. |
| Confusing `license.mode = "restricted"` for an error. | The framework still works fully — just the licensed connectors are skipped. | Treat `"restricted"` as informational; only alert when you expected `"full"`. |

---

## What's next

- [Overview](./overview.md) — when to use the Monitoring page vs external monitoring.
- [Dashboard](./dashboard.md) — the human-readable view.
- [Installation → Production](../installation/production.md) — wire the probes in your production setup.
