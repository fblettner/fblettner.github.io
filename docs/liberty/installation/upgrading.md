---
title: Upgrading
description: "Upgrade a Liberty install — backup, pull the new image, up -d. Image tag pinning, Swarm rolling updates, rollback."
keywords: [Liberty Framework, upgrade, version, pull, image tag, LIBERTY_IMAGE_TAG, rollback, backup.sh, docker compose pull, docker service update, deploy-swarm.sh, pipx upgrade, smoke test]
---

# Upgrading

A Liberty upgrade is a tag swap. Every layout — Light / Full Compose, Docker Swarm, pipx — boils down to the same three moves: **snapshot the volumes, fetch the new image (or wheel), let the stack reconcile**. Schema migrations ride inside the new image; the entrypoint applies them on boot. No manual `migrate-db`, no source checkout, no rebuild.

This page covers the versioning contract, the upgrade procedure per layout, the post-upgrade smoke test and the rollback path.

---

## At a glance

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="upg-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="upg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#upg-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Upgrade sequence — same shape for every layout</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="60" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="160" y="124" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · BACKUP</text>
  <text x="160" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">./backup.sh — 5 s insurance</text>

  <rect x="290" y="100" width="200" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="390" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · PIN + PULL</text>
  <text x="390" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">LIBERTY_IMAGE_TAG + pull</text>

  <rect x="520" y="100" width="200" height="60" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="620" y="124" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · UP -d</text>
  <text x="620" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">entrypoint runs init-db</text>

  <rect x="750" y="100" width="200" height="60" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="850" y="124" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · SMOKE TEST</text>
  <text x="850" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">/info + sign-in + pools</text>

  <line x1="260" y1="130" x2="290" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>
  <line x1="490" y1="130" x2="520" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>
  <line x1="720" y1="130" x2="750" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>

  <text x="500" y="200" fill="#94a3b8" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">A clean Compose upgrade is ~30 s of downtime. Swarm rolling = zero downtime when replicas &gt; 1.</text>
</svg>

---

## Versioning contract

Liberty follows **semver-ish**:

| Bump | What to expect |
|---|---|
| **Patch** (`0.42.0` → `0.42.1`) | Bug fixes only. No config change. No database migration. |
| **Minor** (`0.42.x` → `0.43.0`) | New features. Backward-compatible config. Additive database migrations only — new framework tables / columns; existing rows are left alone. |
| **Major** (`0.x` → `1.0`) | Possible breaking changes. Called out individually in the release notes; a migration guide is published alongside. |

The release notes for every version live alongside the image tag — read them before bumping a minor or a major.

---

## How database migrations work

The container entrypoint (and the pipx systemd unit, if you wired one) runs `liberty-admin init-db` on **every boot**. The command is:

- **Idempotent.** Running it twice does nothing the second time.
- **Additive.** It creates new framework tables a newer release brings, adds missing columns, and leaves existing rows alone.
- **Bundled.** Schema deltas ship inside the image / wheel — there is no separate `migrate-db` step to run, no SQL file to apply, no migration job to schedule.

Pull a newer image, restart the stack — the schema follows.

:::info[No manual migration step]
The historical `liberty-admin migrate-db` command is gone. Everything it used to do is now part of the `init-db` that runs at startup.
:::

---

## Pin the image tag in production

The shipped compose files default to `:latest` so a fresh install lands on the newest release. Production should pin a specific tag in `.env` so an unexpected `pull` doesn't roll the stack forward to a new minor without warning:

```bash title=".env"
LIBERTY_IMAGE_TAG=0.2.0
```

Roll forward by bumping the value and re-running `pull && up -d`. Roll back by setting the previous tag and doing the same.

| Tag in `.env` | Behaviour |
|---|---|
| `latest` | Each `pull` may move to the newest published image — convenient for staging, risky for prod. |
| `0.2.0` (pinned) | `pull` is a no-op once the local cache has the tag. Upgrades happen only when you edit `.env`. |

---

## Always backup first

`backup.sh` tar-snapshots every Liberty named volume into a timestamped directory. It takes seconds and is the difference between a botched upgrade and a botched upgrade you can undo.

```bash
cd /opt/liberty-next/release
./backup.sh                              # → ./backups/YYYY-MM-DD_HHMMSS/
./backup.sh /mnt/nas/liberty             # to an off-host location
./backup.sh --layout full                # only the full layout's volumes
```

Full details on the backup format, the restore commands and a weekly cron entry: [Docker → Backups](./docker.md#backups).

---

## Upgrade procedure — Light / Full (Compose)

Identical for both layouts; only the compose filename differs.

```bash
cd /opt/liberty-next/release

./backup.sh                                          # 1 — snapshot
docker compose -f docker-compose.full.yml pull       # 2 — fetch the new image (use light.yml for Light)
docker compose -f docker-compose.full.yml up -d      # 3 — recreate containers; entrypoint runs init-db

# 4 — smoke test
curl -s http://127.0.0.1:8000/info
```

What `up -d` does: Compose sees the image digest changed, recreates the `liberty-next` container in place, mounts the same named volumes, restarts it. The new entrypoint runs `liberty-admin init-db`, then starts serving. Total downtime: ~30 s on a warm host.

Other services in the stack (Postgres, pgAdmin, Portainer, Traefik) are not recreated unless their own image tag moved — `pull` is per-service and `up -d` only recreates the ones whose spec changed.

---

## Upgrade procedure — Docker Swarm

Two ways. Pick one.

### Option A — rolling update on the liberty-next service only

```bash
./backup.sh
docker service update --image ghcr.io/fblettner/liberty-next:0.2.0 liberty_liberty-next
```

Swarm rolls the service per its `update_config` (`order: start-first`, `parallelism: 1`). The new task is started, health-checks, then the old task is stopped:

| `liberty-next` replicas | Downtime |
|---|---|
| `> 1` | **Zero.** Swarm starts a new task, waits for it to be healthy, then drains the old one. |
| `1` (default) | A brief window (~10 s) while the new task warms up — `start-first` minimises but cannot eliminate it. |

The other services in the stack (`pg`, `pgadmin`, `portainer`, `traefik`) are untouched.

### Option B — bump `.env` + re-run the deploy script

```bash
./backup.sh
# edit .env: LIBERTY_IMAGE_TAG=0.2.0
./deploy-swarm.sh
```

`docker stack deploy` reconciles the full spec — every service whose image or env changed is rolled. Re-running `./deploy-swarm.sh` IS the update mechanism in Swarm; it's the same script you used to install.

Use Option B when you bump multiple service tags at once or when you've changed any other service's env.

### Rollback in Swarm

Swarm keeps the previous spec of every service:

```bash
docker service rollback liberty_liberty-next
```

The rollback reverses the last `service update` (or the last `stack deploy`'s effect on that service). If the new image applied a schema delta and you've been writing to it, restore from the `backup.sh` snapshot **before** rolling back — see [Rollback](#rollback) below.

---

## Upgrade procedure — pipx

```bash
./backup.sh                              # if you keep a backup script alongside (recommended)
pipx upgrade liberty-next
sudo systemctl restart liberty-next      # if running under systemd
```

`pipx upgrade` swaps the wheel in the isolated venv. The restarted service runs `liberty-admin init-db` on boot — same idempotent schema sync as the container path.

For the systemd unit definition, the `EnvironmentFile`, and the post-install verification: [Python server → Run under systemd](./python-server.md).

---

## Smoke test checklist

Five minutes, every upgrade.

| Check | How | What to confirm |
|---|---|---|
| **Version bump** | `curl http://<host>/info` | `"version"` matches the tag you just pulled. |
| **Sign-in** | Sign in as `admin`. | Local auth still works. |
| **Screen loads** | Open at least one app screen. | Grid populates, no 500s. |
| **Pools connected** | *Settings → Pools* | Every pool shows as *connected*. |
| **Scheduler caught up** | *Settings → Jobs* — pick a scheduled job. | Its last run is `succeeded` (or pending — not `failed`). |
| **License accepted** *(when `LIBERTY_LICENSE_KEY` is set)* | *Settings → License* | Shows *accepted* with the right customer name. |

A failed check should hold the rollout and trigger the rollback procedure.

---

## Rollback

The same simplicity applies in reverse: point back at the previous tag, restart. The wrinkle is the database — additive schema deltas are not auto-rolled-back. In practice:

| New schema is… | What to do |
|---|---|
| **Additive only** (new tables / columns — the common case) | Roll the image back. The old framework ignores the extra columns and keeps working. No DB restore needed. |
| **Non-additive** (column rename, constraint added, value migrated) | Restore the volume from the `backup.sh` snapshot **before** rolling the image back. The release notes call out every non-additive migration. |

### Light / Full (Compose)

```bash
# edit .env: LIBERTY_IMAGE_TAG=0.1.0    (the previous tag)
docker compose -f docker-compose.full.yml pull
docker compose -f docker-compose.full.yml up -d
```

If the schema moved forward and you need to roll back the data too, restore the relevant volume from `./backups/<timestamp>/` first — see [Docker → Backups](./docker.md#backups) for the per-volume restore command.

### Swarm

```bash
docker service rollback liberty_liberty-next
```

Same caveat: if the schema diverged, restore the `pg-data` volume (after `./deploy-swarm.sh --rm`) before rolling back the service, then re-deploy.

### pipx

```bash
pipx install liberty-next==0.1.0 --force
sudo systemctl restart liberty-next
```

---

## Tips

- **Stage the upgrade.** Run the new tag against a copy of production for a day before rolling to prod. The cost of dragging a known-bad rollout is much higher than the cost of one extra restart.
- **Read the release notes.** Most upgrades are silent — `pull && up -d` and the smoke test passes. The few that aren't are called out explicitly. Two minutes of reading saves an hour of debugging.
- **Don't skip multiple minors at once if you can avoid it.** Going `0.40 → 0.43` may chain deprecations that disappeared along the way. Going version by version keeps the warnings tractable.
- **Pin in production.** `:latest` is fine for staging; production should pin `LIBERTY_IMAGE_TAG` so a routine `pull` cannot surprise you with a new minor.
- **Watch the logs after restart.** A `WARN` line about a deprecated field is the heads-up that the next minor will break — fix it now, not later.

---

## What's next

- [Docker → Backups](./docker.md#backups) — the snapshot format, restore commands and weekly cron entry referenced above.
- [Python server](./python-server.md) — the pipx install + systemd recipe the upgrade lands on.
- [Production](./production.md) — hardening, OIDC, scheduler pin — the deployment shape upgrades land into.
