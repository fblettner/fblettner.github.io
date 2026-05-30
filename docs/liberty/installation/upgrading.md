---
title: Upgrading
description: "How to move a Liberty install from one framework version to the next: stop the service, pull the new code, refresh Python deps, build the frontend, apply database migrations, smoke-test then restart. Compatibility expectations between liberty-next and liberty-apps."
keywords: [Liberty Framework, upgrading, version, migration, database schema, pip install, build, smoke test, rollback, compatibility]
---

# Upgrading

A framework upgrade swaps the `liberty-next` checkout for a newer tag and re-runs the bootstrap. The configuration in `liberty-apps` is left untouched — the contract is that **the framework adapts to the apps repo, not the other way around**. New fields land with defaults; deprecated fields keep working through one minor version with a warning in the logs.

This page covers the upgrade procedure, the compatibility contract, the smoke-test checklist and the rollback path.

---

## At a glance

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="upg-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="upg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#upg-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Upgrade sequence — same for every shape (systemd, container, k8s)</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="160" height="60" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="140" y="124" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · STOP</text>
  <text x="140" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">drain in-flight jobs</text>

  <rect x="240" y="100" width="160" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="320" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · PULL CODE</text>
  <text x="320" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">git fetch + checkout tag</text>

  <rect x="420" y="100" width="160" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="500" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · DEPS + BUILD</text>
  <text x="500" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">pip + npm</text>

  <rect x="600" y="100" width="160" height="60" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="680" y="124" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · MIGRATE</text>
  <text x="680" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">DB schema deltas</text>

  <rect x="780" y="100" width="160" height="60" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="860" y="124" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">5 · START + SMOKE</text>
  <text x="860" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">verify-config + login</text>

  <line x1="220" y1="130" x2="240" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>
  <line x1="400" y1="130" x2="420" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>
  <line x1="580" y1="130" x2="600" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>
  <line x1="760" y1="130" x2="780" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>

  <text x="500" y="200" fill="#94a3b8" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">A clean upgrade on a single-host install takes ~3 minutes.</text>
</svg>

---

## Versioning contract

The framework follows **semver-ish**:

| Bump | Compatibility |
|---|---|
| **Patch** (`0.42.0` → `0.42.1`) | Bug fixes only. No config change. No database migration. |
| **Minor** (`0.42.x` → `0.43.0`) | New features. Backward-compatible config. May include additive database migrations (new tables / columns). Deprecated fields log a warning but keep working. |
| **Major** (`0.x` → `1.0`) | Possible breaking changes. The release notes call them out individually; a migration guide is published alongside. |

The `liberty-apps` repo is **version-tagged independently**. Most installs lock both — `liberty-next@0.42.1` + `liberty-apps@2026.05.20` — and upgrade them on their own cadence.

| Compatibility direction | Guarantee |
|---|---|
| **New framework, old apps config** | Always works. Deprecated config keys are tolerated through the next minor; the log warns. |
| **Old framework, new apps config** | Not guaranteed. A new field added to a TOML model fails Pydantic validation on an old framework. |

The takeaway: **upgrade the framework first**, then update the apps config.

---

## Upgrade procedure — systemd

```bash
# 1 — stop the service (drain in-flight jobs by waiting for the scheduler)
sudo systemctl stop liberty-next

# 2 — pull the new code
cd /opt/liberty-next
sudo -u liberty git fetch --tags
sudo -u liberty git checkout v0.43.0

# 3 — refresh Python deps + rebuild the frontend
sudo -u liberty .venv/bin/pip install -e ".[dev]"
sudo -u liberty bash -c "cd frontend && npm ci && npm run build"

# 4 — apply database migrations
sudo -u liberty .venv/bin/liberty-admin migrate-db

# 5 — verify and start
sudo -u liberty .venv/bin/liberty-admin verify-config
sudo systemctl start liberty-next
sudo systemctl status liberty-next
curl -s http://127.0.0.1:8000/api/health
```

`migrate-db` is idempotent — running it twice does nothing the second time. The command prints one line per applied delta:

```text
applied: 0042_add_ly2_ai_conversations.sql
applied: 0043_add_lock_metadata_columns.sql
2 migrations applied, schema is now at version 0043
```

The check at the end (`curl /api/health`) is the green light to consider the upgrade done; the smoke test below covers the deeper sanity checks.

---

## Upgrade procedure — container

```bash
# Build the new image
podman build -t liberty-next:0.43.0 -f Containerfile .

# Migrate the DB in a one-off container (the live one is still serving)
podman run --rm \
  --env-file /etc/liberty/secrets.env \
  -e LIBERTY_APPS_DIR=/apps/config \
  -v /opt/liberty-apps:/apps:ro,Z \
  liberty-next:0.43.0 \
  liberty-admin migrate-db

# Swap the live container
podman stop liberty
podman rm liberty
podman run -d --name liberty \
  -p 8000:8000 \
  -v /opt/liberty-apps:/apps:ro,Z \
  --env-file /etc/liberty/secrets.env \
  -e LIBERTY_APPS_DIR=/apps/config \
  liberty-next:0.43.0
```

For zero-downtime, run two containers behind a proxy and drain in turn — covered under [running in production](./production.md).

---

## Upgrade procedure — Kubernetes

The standard `kubectl set image` flow:

```bash
# 1 — apply the migration as a one-shot Job
kubectl apply -f manifests/migrate-job-0.43.0.yaml
kubectl wait --for=condition=complete --timeout=300s job/liberty-migrate-0.43.0

# 2 — rolling update of the Deployment
kubectl set image deployment/liberty-next liberty=registry.example.com/liberty-next:0.43.0
kubectl rollout status deployment/liberty-next
```

The migration Job runs `liberty-admin migrate-db` and exits — the Deployment's rolling update starts only after it's done. Pods are replaced one at a time; readiness probes on `/api/health` make sure each new pod is up before the next old one is terminated.

For the scheduler pin (see [running in production](./production.md#multi-replica-considerations)), make sure the scheduler-enabled replica's old pod is terminated before the new one's scheduler starts — usually by labelling the pod with `scheduler=true` and rolling that single replica last.

---

## Smoke test checklist

Run after every upgrade — five minutes well spent before declaring done.

| Check | How | What to confirm |
|---|---|---|
| **Health** | `curl http://${HOST}:${PORT}/api/health` | `{"ok": true, "version": "<new>"}` — version matches the tag. |
| **Auth** | Sign in as the admin user. | Local sign-in still works. |
| **OIDC** *(if enabled)* | Sign in via SSO. | Round-trip to the IdP and back works. |
| **Settings UI loads** | Open `/settings`. | Every tab renders, no Pydantic validation errors in the log. |
| **Connectors connected** | *Settings → Pools* shows each pool as *connected*. | DB connectivity intact. |
| **Sample read** | Open one screen of a critical app. | Grid populates without 500s. |
| **Sample write** | Edit and save one row on a non-prod-impacting screen. | Save round-trip succeeds. |
| **Job catalog** | *Settings → Jobs* lists every job. | No "failed to load" entries. |
| **Last cron run** | The most recent run of a scheduled job is `succeeded`. | Scheduler picked up after the restart. |
| **License** | *Settings → License* shows *accepted* with the right customer name. | License JWT verified by the new framework. |
| **AI assistant** *(if enabled)* | Open `/chat`, send a trivial prompt. | API key resolves, model responds. |

A failed check should hold the rollout and trigger the rollback procedure.

---

## Rollback

A framework rollback is the inverse of the upgrade — checkout the previous tag, reinstall the deps, restart. The wrinkle is the database: applied migrations are not auto-rolled-back. Two options:

| Option | When to use |
|---|---|
| **Downgrade the framework + leave the schema forward** | When the new schema is additive only (new columns / tables). The old framework ignores the extras and keeps working. This is the common case. |
| **Downgrade the framework + rollback the migration** | When a migration changed behaviour or dropped something. Each migration ships a `--rollback` sibling — `liberty-admin migrate-db rollback 0043` reverses it. |

The release notes call out non-additive migrations explicitly.

```bash
# Quick rollback — additive schema case
sudo systemctl stop liberty-next
cd /opt/liberty-next
sudo -u liberty git checkout v0.42.1     # previous tag
sudo -u liberty .venv/bin/pip install -e ".[dev]"
sudo -u liberty bash -c "cd frontend && npm ci && npm run build"
sudo systemctl start liberty-next
```

For container / Kubernetes installs, `podman run` or `kubectl set image` with the previous tag does the same. A pinned previous-version image kept in the registry makes rollback a one-line command.

---

## Customer customisations & upgrades

When the install runs vendor-packaged apps (NomaUBL, NomaSX-1, NomaJDE…) the apps repo carries vendor TOML next to your own customisations. The recommended layout to survive vendor upgrades:

```text
liberty-apps/config/
├── connectors.toml            ← vendor-managed, replaced on app upgrade
├── connectors-customer.toml   ← your additions / overrides — never touched by upgrades
├── screens.toml               ← vendor-managed
├── screens-customer.toml      ← your overrides
├── ...
```

The framework loads `<name>.toml` first, then merges every `<name>-*.toml` on top. Your overrides take precedence on key collision; vendor base configuration provides everything else.

A vendor app upgrade then becomes:

1. Re-import the vendor's exported app zip via *Settings → Apps → Import*.
2. The framework replaces the vendor files; your `*-customer.toml` are untouched.
3. Run the smoke test — the customisation should still apply.

---

## Tips & best practices

- **Stage the upgrade.** Run the new framework against a copy of production for one day; the cost of dragging a known-bad rollout is much higher than the cost of one extra restart.
- **Watch the logs after restart.** A `WARN` line about a deprecated field is the heads-up that the next minor will break — fix it now, not later.
- **Read the release notes.** Most upgrades are silent; the few that aren't are called out. Two minutes of reading saves an hour of debugging.
- **Backup before `migrate-db`.** Even an additive migration carries some risk; a `pg_dump` before the schema change is a five-second insurance.
- **Don't skip multiple minors at once if you can avoid it.** Going `0.40 → 0.43` may carry a deprecated field that disappeared at `0.42`; going version by version makes the warnings tractable.
- **Rolling-update one replica at a time.** Even with stateless replicas, two simultaneous restarts mean a brief window with no Socket.IO endpoint — break the live dashboard for users.

---

## What's next

- [Running in production](./production.md) — the deployment shape upgrades land into.
- [Configuration → Hot-reload](../framework/configuration/hot-reload.md) — what reloads and what requires a restart (relevant when changing `app.toml` mid-upgrade).
- [Apps & Plugins → Apps](../framework/apps/overview.md) — packaging customisations to survive vendor upgrades.
