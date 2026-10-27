---
title: Upgrade and rollback
description: "Upgrade Liberty Next with one command: ./liberty upgrade (Docker) or liberty-ops upgrade (Python) checks the install, takes a backup, installs the new release and the apps, applies the schema migrations and records a report; rollback undoes it. Swarm upgrades and versioning."
keywords: [Liberty Next, upgrade, rollback, liberty upgrade, liberty rollback, liberty-ops upgrade, migrations, liberty-admin migrate, upgrade report, Settings History Upgrades, LIBERTY_IMAGE_TAG, LIBERTY_AUTO_MIGRATE]
---

# Upgrade and rollback

An upgrade is one command. It never starts without a fresh backup, keeps what is needed to come back, and leaves a report you can read in the application.

---

## At a glance

<svg viewBox="0 0 1200 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="upg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="upg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="upg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="upg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="10" y="14" width="1180" height="140" rx="14" fill="url(#upg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="30" y="44" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">./liberty upgrade — what one command does</text>
  <rect x="30" y="70" width="172" height="64" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="116.0" y="99.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1 · Check</text>
  <text x="116.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">doctor (advisory)</text>
  <line x1="202" y1="102" x2="224" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#upg-flow)"/>
  <rect x="224" y="70" width="172" height="64" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="310.0" y="99.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2 · Keep image</text>
  <text x="310.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">rollback-&lt;stamp&gt;</text>
  <line x1="396" y1="102" x2="418" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#upg-flow)"/>
  <rect x="418" y="70" width="172" height="64" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="504.0" y="99.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3 · Backup</text>
  <text x="504.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">stops here if it fails</text>
  <line x1="590" y1="102" x2="612" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#upg-flow)"/>
  <rect x="612" y="70" width="172" height="64" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="698.0" y="99.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">4 · Pull + recreate</text>
  <text x="698.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">same overlays as installed</text>
  <line x1="784" y1="102" x2="806" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#upg-flow)"/>
  <rect x="806" y="70" width="172" height="64" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="892.0" y="99.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">5 · Migrations</text>
  <text x="892.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">apps wheel + schemas</text>
  <line x1="978" y1="102" x2="1000" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#upg-flow)"/>
  <rect x="1000" y="70" width="172" height="64" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="1086.0" y="99.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">6 · Report</text>
  <text x="1086.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">then status</text>
  <rect x="300" y="185" width="330" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="310" y="200" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Something went wrong?</text>
  <text x="310" y="213" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">./liberty rollback: previous image + this backup</text>
  <line x1="300" y1="202.0" x2="480" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upg-arrow)"/>
  <rect x="790" y="185" width="330" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="800" y="200" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Settings → History → Upgrades</text>
  <text x="800" y="213" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">versions before / after, every step, migrations</text>
  <line x1="790" y1="202.0" x2="1080" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upg-arrow)"/>
</svg>

---

## Docker \{#docker\}

```bash
cd liberty-next/release
git pull                                  # the scripts of the new release
./liberty upgrade                         # to the latest release
./liberty upgrade --tag 7.0.58            # or to a given release (kept in .env)
```

What the command does, in order:

| Step | Detail |
|---|---|
| 1. Check | Runs `doctor`. Problems are reported but do not stop the upgrade — an upgrade is often what fixes them. |
| 2. Keep the image | The image now running is tagged locally `rollback-<date>` so that it can be started again. |
| 3. Backup | `backup` of every volume and of the apps folder, kept `--keep` days (30 by default). **If the backup fails, the upgrade stops and nothing is changed.** |
| 4. Pull and recreate | The new image is pulled and the containers recreated with the recorded compose files — HTTPS and the licensed apps stay in place. |
| 5. Apps and migrations | With `--apps <wheel>`, the new apps bundle is installed (with its [merge plan](./deploy-prebuilt-apps.md#merge)); then the pending schema migrations are applied. |
| 6. Report | The report is recorded and `status` is printed. |

Downtime is the time the container takes to restart, usually well under a minute.

### Upgrading the licensed apps \{#apps\}

```bash
./liberty upgrade --apps ./liberty_apps-7.0.58-py3-none-any.whl
```

Framework and apps are upgraded in one run. To refresh the apps alone, without a new framework image: `./liberty apps <wheel>`.

---

## Python install \{#python\}

```bash
liberty-ops upgrade                                       # framework to the latest release
liberty-ops upgrade --version 7.0.58                      # a given release
liberty-ops upgrade --apps ./liberty_apps-7.0.58-py3-none-any.whl
```

Same sequence: `doctor` → backup (the only step that can stop the upgrade) → `pipx upgrade` (or the pinned version) → the apps wheel → `liberty-admin migrate` → service restart and wait for `/ready` → report → `status`. `--no-restart` leaves the restart to you; `--backup-dest` chooses where the backup goes.

Run it as the service user with its environment loaded, as for every `liberty-ops` command.

---

## The upgrade report \{#report\}

Each `upgrade` and each `rollback` records a report: versions before and after, image tag, compose files, backup folder, `doctor` findings, the result of every step and the migrations applied. It is stored with the configuration (`.versions/upgrades/`), and on Docker a copy is also written in the backup folder.

Open it in **Settings → History → Upgrades**. Each entry shows its component:

| Entry | Recorded by |
|---|---|
| **Stack** | `./liberty upgrade`, `./liberty rollback`, `liberty-ops upgrade` — the report described above. |
| **Framework**, **Apps** | A change of version noticed when the server starts — shown with the release notes of the new version. |
| **`<app>` schema** | `liberty-admin migrate` — the migrations applied to an application database. |
| `framework-schema` | Columns the server added to its own tables when a new release needed them. |

---

## Schema migrations \{#migrations\}

The framework creates and completes its own tables when it starts. The licensed apps' databases change through **migrations** shipped in the apps wheel:

- `./liberty upgrade` and `liberty-ops upgrade` apply them;
- `./liberty status`, `./liberty doctor` and the server log at start-up say when some are pending;
- `./liberty migrate --dry-run` lists them, `./liberty migrate` applies them;
- with `LIBERTY_AUTO_MIGRATE=1` in `.env`, the server applies them itself at start-up.

Every run is recorded in **Settings → History → Upgrades**. For a database whose recorded version is ahead of its real tables, `liberty-admin migrate --app nomasx1 --stamp <revision>` sets the version without running anything, then applies what remains — see [CLI](../references/cli.md#migrate).

---

## Rollback \{#rollback\}

```bash
./liberty rollback            # asks for confirmation
./liberty rollback --yes
```

The command starts again the image kept before the last upgrade and restores the backup taken just before it. **Everything written since that backup is lost** — hence the confirmation. The report of the upgrade is kept, and the rollback gets its own.

On a Python install, `liberty-ops rollback` reinstalls the previous framework version and restores the backup taken before the upgrade. pipx keeps no copy of the previous apps wheel: pass it with `--apps <previous wheel>` to downgrade the apps too.

To go back further than the last upgrade: `./liberty restore <backup folder>` and `./liberty upgrade --tag <release>`.

---

## Docker Swarm \{#swarm\}

`./liberty` does not drive a swarm. Take a backup with `./backup.sh`, then:

```bash
docker service update --image ghcr.io/fblettner/liberty-next:7.0.58 liberty_liberty-next
docker exec -u liberty $(docker ps -qf name=liberty_liberty-next) liberty-admin migrate
docker service rollback liberty_liberty-next      # if something is wrong
```

Or set `LIBERTY_IMAGE_TAG` in `.env` and run `./deploy-swarm.sh` again.

---

## Versions \{#versions\}

| Change | What to expect |
|---|---|
| Patch (`7.0.57` → `7.0.58`) | Fixes and features; the configuration stays compatible; database changes only add tables or columns. |
| A larger step | The release notes say what to check before and after. |

Read the release notes before upgrading: **Settings → Release notes** shows those of the running version.

---

## Tips \{#tips\}

- Pin the release in production (`--tag`) and upgrade on purpose, a test server first.
- Run `./liberty doctor` before the upgrade: a problem reported there is easier to fix before than after.
- After the upgrade, sign in, open a screen of each application and run a Nomaflow job by hand.
- Keep the backup of the upgrade until the next one has run.
