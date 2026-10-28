---
title: Installation — overview
description: "How to install Liberty Next: pick Docker (light or full layout) or a Python install, run one command, sign in, add the licence and the licensed apps, switch on HTTPS. Every step afterwards — status, backup, upgrade, rollback — goes through the same command."
keywords: [Liberty Next, installation, Docker, Docker Compose, pipx, liberty command, liberty-ops, light layout, full layout, Swarm, licence, Nomasx-1, Nomajde]
---

# Installation — overview

Liberty Next is one server — a web application, its API and its job scheduler in a single process — plus a database and a folder of configuration files. Installing it means choosing where that server runs; everything after that is done with **one command**: `./liberty` on a Docker host, `liberty-ops` on a Python install.

---

## At a glance

<svg viewBox="0 0 1200 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jrn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jrn-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jrn-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jrn-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="10" y="14" width="1180" height="140" rx="14" fill="url(#jrn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="30" y="70" width="172" height="64" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="116.0" y="99.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1 · Install</text>
  <text x="116.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">./liberty install full</text>
  <line x1="202" y1="102" x2="224" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#jrn-flow)"/>
  <rect x="224" y="70" width="172" height="64" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="310.0" y="99.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2 · Sign in</text>
  <text x="310.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">admin + printed password</text>
  <line x1="396" y1="102" x2="418" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#jrn-flow)"/>
  <rect x="418" y="70" width="172" height="64" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="504.0" y="99.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3 · Licence &amp; apps</text>
  <text x="504.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">./liberty apps &lt;wheel&gt;</text>
  <line x1="590" y1="102" x2="612" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#jrn-flow)"/>
  <rect x="612" y="70" width="172" height="64" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="698.0" y="99.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">4 · HTTPS</text>
  <text x="698.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">./liberty ssl letsencrypt …</text>
  <line x1="784" y1="102" x2="806" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#jrn-flow)"/>
  <rect x="806" y="70" width="172" height="64" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="892.0" y="99.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">5 · Operate</text>
  <text x="892.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">status · doctor · backup</text>
  <line x1="978" y1="102" x2="1000" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#jrn-flow)"/>
  <rect x="1000" y="70" width="172" height="64" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="1086.0" y="99.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">6 · Upgrade</text>
  <text x="1086.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">./liberty upgrade</text>
  <text x="30" y="44" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">A Docker install from start to finish — every step is one command run from release/</text>
  <rect x="230" y="185" width="250" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="240" y="200" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Administer → App → License</text>
  <text x="240" y="213" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">paste the key once signed in</text>
  <line x1="230" y1="202.0" x2="450" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrn-arrow)"/>
  <rect x="780" y="185" width="300" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="790" y="200" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Optional on a test server</text>
  <text x="790" y="213" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">HTTPS needs the full layout</text>
  <line x1="780" y1="202.0" x2="690" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrn-arrow)"/>
</svg>

---

## Which installation? \{#choose\}

| You want… | Install | Page |
|---|---|---|
| A production or test server for several users | **Docker — full layout**: Liberty Next, PostgreSQL, Traefik (HTTPS), pgAdmin, Portainer on one host | [Docker](./docker.md#full) |
| A quick trial or a demo on a laptop | **Docker — light layout**: one container, SQLite | [Docker](./docker.md#light) |
| A host where Docker is not allowed | **Python install** with pipx, run by systemd, PostgreSQL of your own | [Python server](./python-server.md) |
| Several nodes in a Docker Swarm | **Swarm**: the full layout adapted to `docker stack deploy` | [Docker](./docker.md#swarm) |

The licensed applications (Nomasx-1, Nomajde) and the bundled Nomaflow jobs need PostgreSQL: choose the full layout or a Python install with your own PostgreSQL.

---

## Install in three commands \{#quickstart\}

On a Linux host with Docker and the Compose plugin:

```bash
git clone https://github.com/fblettner/liberty-next.git
cd liberty-next/release
./liberty install full          # or: ./liberty install light
```

The command generates the secrets, starts the stack, waits until it answers and prints the sign-in details. Open `http://<host>/` (port `8000` on the light layout), sign in as **`admin`** with the printed password, and the server is ready.

Then, in this order and only if you need them:

1. **Licence** — *Liberty Next → Administer → App → License*: paste the key you were delivered.
2. **Licensed apps** — `./liberty apps liberty_apps-<version>-py3-none-any.whl` ([Licensed apps](./deploy-prebuilt-apps.md)).
3. **HTTPS** — `./liberty ssl letsencrypt --domain liberty.example.com --email ops@example.com` ([HTTPS and Traefik](./traefik.md)).

---

## The one command \{#one-command\}

Every operation on a Docker install goes through `release/liberty`, run from the `release/` folder:

| Command | Use it to |
|---|---|
| `./liberty install [light\|full]` | Install (once). |
| `./liberty status` | See versions, health, pending migrations, last upgrade. |
| `./liberty doctor` | List what is wrong and how to fix it. |
| `./liberty apps <wheel>` | Add or refresh the licensed apps. |
| `./liberty ssl letsencrypt\|provided\|off` | Switch HTTPS on, change mode or switch it off. |
| `./liberty backup` / `restore <dir>` | Save and restore everything the install holds. |
| `./liberty upgrade` / `rollback` | Upgrade with a backup first; undo the last upgrade. |

A Python install has the same verbs in `liberty-ops`. The full reference is on [Operations](./operations.md).

:::warning[Never run `docker compose -f …` by hand]
The install records which compose files it uses (layout, HTTPS, licensed apps) in `release/.env`. A `docker compose -f docker-compose.full.yml up -d` names only the first file: the container comes back without the licensed apps and without HTTPS, and the install looks empty. Use `./liberty start`, `./liberty upgrade`… which always reuse the recorded files.
:::

---

## Read in order \{#read-in-order\}

1. [Architecture](./architecture.md) — what runs where, which data lives in which volume.
2. [Docker](./docker.md) or [Python server](./python-server.md) — the installation itself.
3. [Licensed apps](./deploy-prebuilt-apps.md) — the licence, the apps bundle, the application databases.
4. [HTTPS and Traefik](./traefik.md) — certificates and the reverse proxy.
5. [Operations](./operations.md) — status, doctor, backups, logs, troubleshooting.
6. [Upgrade and rollback](./upgrading.md) — moving to a new release.
7. [Production checklist](./production.md) — what to check before users arrive.
