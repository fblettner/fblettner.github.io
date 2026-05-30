---
title: Running in production
description: "Run the Liberty Framework in production: bare-metal systemd unit, container image with Podman / Docker, Kubernetes Deployment + Service. PostgreSQL pool, reverse proxy with nginx, TLS, log routing, the LIBERTY_APPS_DIR mount and the scheduler-on-one-replica pattern."
keywords: [Liberty Framework, production, systemd, Docker, Podman, Kubernetes, nginx, TLS, PostgreSQL, LIBERTY_APPS_DIR, multi-replica, scheduler]
---

# Running in production

The framework is a single Python process serving a React SPA on one port — production deployment is correspondingly simple. This page covers the three common shapes (bare-metal systemd, container, Kubernetes), the reverse-proxy + TLS layer, the database, log routing, and the multi-replica pattern.

---

## At a glance

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>PROCESS</div>
    <div style={{fontSize: '12px'}}>One <code>uvicorn</code> per replica. Async runtime — one process saturates a modest server.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>STORAGE</div>
    <div style={{fontSize: '12px'}}>PostgreSQL for auth + jobs + locks. <code>liberty-apps</code> on a shared mount or git-pulled at start.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>FRONT</div>
    <div style={{fontSize: '12px'}}>nginx / Traefik for TLS + websocket. Health probe on <code>/api/healthz</code>.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>SCALE</div>
    <div style={{fontSize: '12px'}}>Multi-replica supported; scheduler pinned to one. Session is JWT, no sticky needed.</div>
  </div>
</div>

---

## Shape 1 — Bare-metal systemd

The simplest shape for a single-host install. Two services: the framework process, and an optional `liberty-apps` git-pull timer to refresh configuration.

### Filesystem layout

```text
/opt/liberty-next/                ← framework binary (git clone of liberty-next)
  └── .venv/                      ← Python virtualenv
/opt/liberty-apps/                ← configuration repo (git clone of liberty-apps)
  └── config/                     ← read via LIBERTY_APPS_DIR
/etc/liberty/secrets.env          ← env file, mode 0600, owned by liberty
/etc/systemd/system/liberty-next.service
```

### systemd unit

```ini
[Unit]
Description=Liberty Framework
After=network.target postgresql.service
Requires=postgresql.service

[Service]
Type=exec
User=liberty
Group=liberty
WorkingDirectory=/opt/liberty-next

Environment=HOST=127.0.0.1
Environment=PORT=8000
Environment=LIBERTY_APPS_DIR=/opt/liberty-apps/config

EnvironmentFile=/etc/liberty/secrets.env

ExecStart=/opt/liberty-next/.venv/bin/uvicorn liberty.main:app \
          --host ${HOST} --port ${PORT} \
          --workers 1 --log-config /etc/liberty/log-config.yaml

Restart=on-failure
RestartSec=5
LimitNOFILE=65536

# Sandbox
ProtectSystem=strict
ProtectHome=true
PrivateTmp=true
NoNewPrivileges=true
ReadWritePaths=/opt/liberty-apps /var/log/liberty

[Install]
WantedBy=multi-user.target
```

`/etc/liberty/secrets.env` (mode `0600`):

```env
LIBERTY_DB_URL=postgresql+asyncpg://liberty:****@db.internal/liberty
LIBERTY_JWT_SECRET=...
LIBERTY_MASTER_KEY=...
LIBERTY_LICENSE_KEY=...
ANTHROPIC_API_KEY=...
LIBERTY_OIDC_CLIENT_SECRET=...
```

`enable --now liberty-next` and the framework boots on every host start.

### Use `--workers 1`, not more

The framework is asyncio-based and uses Socket.IO for live updates. Multiple uvicorn workers behind a single port would each maintain their own in-memory state (record locks, job scheduler, AI conversation tracking) without coordination. Scale by **adding replicas** (Shape 3) instead.

---

## Shape 2 — Container (Podman / Docker)

The framework ships no official image; build one from the repo. A minimal `Containerfile`:

```dockerfile
FROM python:3.12-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    git curl tini && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY liberty-next/ .
RUN python -m venv /opt/venv && \
    /opt/venv/bin/pip install -e ".[dev]" && \
    /opt/venv/bin/pip install uvicorn[standard]

# Build the React frontend
RUN apt-get update && apt-get install -y nodejs npm && \
    cd frontend && npm ci && npm run build

ENV PATH="/opt/venv/bin:$PATH"
EXPOSE 8000
ENTRYPOINT ["tini", "--"]
CMD ["uvicorn", "liberty.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Build and run:

```bash
podman build -t liberty-next:0.42.0 -f Containerfile .

podman run -d --name liberty \
  -p 8000:8000 \
  -v /opt/liberty-apps:/apps:ro,Z \
  --env-file /etc/liberty/secrets.env \
  -e LIBERTY_APPS_DIR=/apps/config \
  liberty-next:0.42.0
```

| Mount / variable | Purpose |
|---|---|
| `-v /opt/liberty-apps:/apps:ro,Z` | Mount the configuration repo read-only into the container. Updates happen on the host (`git pull`); the framework picks them up on `POST /admin/reload`. |
| `--env-file /etc/liberty/secrets.env` | Same file as the systemd unit. Don't bake secrets into the image. |
| `-e LIBERTY_APPS_DIR=/apps/config` | Inside-container path to the mounted config. |

For Docker, replace `podman run` with `docker run` — the flags are identical.

---

## Shape 3 — Kubernetes

A typical multi-replica deployment in Kubernetes:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: liberty-next
spec:
  replicas: 3
  selector:
    matchLabels: { app: liberty-next }
  template:
    metadata:
      labels: { app: liberty-next }
    spec:
      containers:
        - name: liberty
          image: registry.example.com/liberty-next:0.42.0
          ports:
            - containerPort: 8000
              name: http
          envFrom:
            - secretRef: { name: liberty-secrets }
          env:
            - name: LIBERTY_APPS_DIR
              value: /apps/config
            - name: LIBERTY_LOG_JSON
              value: "1"
            - name: LIBERTY_JOBS_SCHEDULER_ENABLED
              valueFrom:
                fieldRef: { fieldPath: metadata.labels['scheduler'] }
          volumeMounts:
            - name: apps
              mountPath: /apps
              readOnly: true
          readinessProbe:
            httpGet: { path: /api/healthz, port: http }
            initialDelaySeconds: 5
            periodSeconds: 5
          livenessProbe:
            httpGet: { path: /api/healthz, port: http }
            initialDelaySeconds: 30
            periodSeconds: 30
      volumes:
        - name: apps
          persistentVolumeClaim: { claimName: liberty-apps }

---
apiVersion: v1
kind: Service
metadata:
  name: liberty-next
spec:
  selector: { app: liberty-next }
  ports:
    - port: 8000
      targetPort: http
```

### Multi-replica considerations

| Concern | Mitigation |
|---|---|
| **Scheduler must run on one replica.** | Set `LIBERTY_JOBS_SCHEDULER_ENABLED=true` on exactly one pod (via a label + downward API) and `false` on the others. The advisory lock prevents double-firing if a deployment glitch leaves the variable on two pods. |
| **Socket.IO needs sticky routing or a Redis adapter.** | The framework today assumes single-instance Socket.IO state. Either keep the SPA loaded against one replica via session affinity in the Service, or run Socket.IO with a Redis adapter (out of the box not yet — track the roadmap). |
| **`liberty-apps` configuration must be identical across pods.** | Mount the same ReadWriteMany PVC, or git-pull from the same commit on all replicas at startup. |
| **JWT secret must match across pods.** | Same `LIBERTY_JWT_SECRET` — otherwise a token minted on pod A is rejected by pod B. |

---

## Reverse proxy (nginx)

The framework should sit behind a reverse proxy for TLS termination, gzip, and websocket upgrade. A typical nginx block:

```nginx
upstream liberty {
    server 127.0.0.1:8000;
}

server {
    listen 443 ssl http2;
    server_name liberty.example.com;

    ssl_certificate     /etc/letsencrypt/live/liberty.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/liberty.example.com/privkey.pem;

    # SPA + REST + admin all on the same port
    location / {
        proxy_pass http://liberty;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;

        # Websocket / Socket.IO
        proxy_http_version 1.1;
        proxy_set_header Upgrade           $http_upgrade;
        proxy_set_header Connection        "upgrade";
        proxy_read_timeout 60s;
    }

    # Long-running Server-Sent Events for AI chat
    location /ai/chat {
        proxy_pass http://liberty;
        proxy_buffering off;
        proxy_read_timeout 300s;
        proxy_set_header X-Forwarded-Proto https;
    }
}

server {
    listen 80;
    server_name liberty.example.com;
    return 301 https://$server_name$request_uri;
}
```

Set `[app] trusted_proxies = ["127.0.0.1"]` in `app.toml` so the framework reads `X-Forwarded-*` headers correctly.

For Traefik, the equivalent labels handle the same job — the websocket upgrade is automatic, the SSE buffering needs to be turned off explicitly.

---

## Database

PostgreSQL is the recommended target for production. Schema creation is a one-time `./start.sh init-db`; subsequent upgrades pick up new columns automatically.

| Setting | Recommendation |
|---|---|
| `max_connections` | At least `replicas × pool_size + 20`. With 3 replicas and `pool_size = 10`, that's 50. |
| `idle_in_transaction_session_timeout` | `300s` — catches stalled connections (the framework retries cleanly). |
| `statement_timeout` | `300s` is a sane default; raise for known-long ETL queries (configure per role). |
| Backup | Standard PG backup. The `auth.toml` (when `backend = "toml"`) is per-host — back up `/opt/liberty-next/config/` too. |

A managed service (RDS, Cloud SQL, Aiven) works identically — the framework speaks pgwire through `asyncpg`.

---

## Log routing

For aggregation into Loki / Splunk / Datadog, switch the framework to JSON logging:

```bash
export LIBERTY_LOG_JSON=1
export LIBERTY_LOG_LEVEL=INFO
```

The output is one JSON object per line on stdout — every container runtime can ingest it without an agent. The framework's loggers include:

| Logger | Purpose |
|---|---|
| `liberty.connector.<name>` | One line per query / endpoint call, with timing and row count. |
| `liberty.auth` | Sign-in success / failure, token refresh, revoke. |
| `liberty.jobs.<job_name>` | Job triggers, step transitions, retries. |
| `liberty.licensing` | License verification on startup + on reload. |
| `liberty.crypto` | Master key loaded / rotated. |
| `uvicorn.access` | HTTP access log. |

A typical alerting rule: `liberty.jobs.*` at level `ERROR` → page the on-call.

---

## Tips & best practices

- **Pin the scheduler.** A multi-replica deployment without an explicit `scheduler_enabled` label is a foot-gun even with the advisory lock.
- **Don't run the SPA dev server in production.** `./start.sh frontend` (Vite on 5173) is a development tool; production serves the built `frontend/dist/` directly through FastAPI.
- **Mount `liberty-apps` read-only.** Settings UI edits write to it through the framework process; mounting writable from elsewhere defeats audit and risks split-brain across replicas.
- **Set up `/api/healthz` as the probe.** It's intentionally lightweight (no DB call). For a deeper probe, `GET /api/license` exercises the auth path and the license verification.
- **Capture logs to disk before forwarding.** A flaky log forwarder shouldn't lose framework events — write to stdout, let the container runtime tee to disk, then forward.
- **Stage configuration changes.** `liberty-admin verify-config` and `liberty-connectors test` are quick CI gates against the `liberty-apps` repo.

---

## What's next

- [Upgrading](./upgrading.md) — moving across framework versions.
- [Configuration → Environment variables](../configuration/environment-variables.md) — the full env contract referenced by every shape here.
- [Authentication → License key](../build/secure/license-key.md) — `LIBERTY_LICENSE_KEY` in the production env.
- [Jobs → Overview](../../nomaflow/overview.md) — scheduler topology, advisory lock.
