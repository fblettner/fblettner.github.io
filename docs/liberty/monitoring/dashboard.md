---
title: The Monitoring page
description: "Card-by-card walkthrough of the Monitoring page — KPI strip, Pools, Connected users, Held locks and the live Log tail. What each column means and when to act on it."
keywords: [Liberty Framework, monitoring, technical dashboard, pools, connections, sessions, row locks, log tail, log filter]
---

# The Monitoring page

The Monitoring page is a single scrollable view with five cards. This page walks each one — what every column means, what numbers are healthy, when to act.

Reach the page from the **📊 Monitoring** entry in the left sidebar (visible to superusers + roles granted `monitoring:view`).

---

## At a glance

<svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="md-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="360" rx="14" fill="url(#md-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">📊 Monitoring</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="220" height="64" rx="8" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)"/>
  <text x="56" y="98" fill="#94a3b8" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UPTIME</text>
  <text x="56" y="124" fill="#e2e8f0" fontSize="20" fontFamily="ui-monospace, monospace">14d 03h</text>

  <rect x="270" y="78" width="220" height="64" rx="8" fill="rgba(34,197,94,0.06)" stroke="rgba(34,197,94,0.30)"/>
  <text x="286" y="98" fill="#94a3b8" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTED USERS</text>
  <text x="286" y="124" fill="#e2e8f0" fontSize="20" fontFamily="ui-monospace, monospace">12</text>

  <rect x="500" y="78" width="220" height="64" rx="8" fill="rgba(192,132,252,0.06)" stroke="rgba(192,132,252,0.30)"/>
  <text x="516" y="98" fill="#94a3b8" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HELD LOCKS</text>
  <text x="516" y="124" fill="#e2e8f0" fontSize="20" fontFamily="ui-monospace, monospace">3</text>

  <rect x="730" y="78" width="230" height="64" rx="8" fill="rgba(251,146,60,0.06)" stroke="rgba(251,146,60,0.30)"/>
  <text x="746" y="98" fill="#94a3b8" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POOL CONNECTIONS</text>
  <text x="746" y="124" fill="#e2e8f0" fontSize="20" fontFamily="ui-monospace, monospace">7 / 20</text>

  <rect x="40" y="160" width="450" height="100" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="182" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POOLS</text>
  <text x="56" y="204" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">default · postgresql · 5/20 · 15 idle · 0 overflow</text>
  <text x="56" y="222" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">reporting · postgresql · 2/10 · 8 idle · 0 overflow</text>
  <text x="56" y="240" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">jdedwards · oracle · 0/5 · not opened (lazy)</text>

  <rect x="500" y="160" width="460" height="100" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="516" y="182" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTED USERS</text>
  <text x="516" y="204" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">alice · sid=a8c4d1f2…  · client=b7e3…</text>
  <text x="516" y="222" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">bob · super · sid=c0f3a2b7…  · client=—</text>
  <text x="516" y="240" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">carol · sid=e2a7c5d9…  · client=8a1f…</text>

  <rect x="40" y="278" width="450" height="92" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="300" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HELD LOCKS</text>
  <text x="56" y="322" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">bob · crm.customers · CUSTOMER_ID=14 · 2 min ago</text>
  <text x="56" y="340" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">alice · crm.deals · DEAL_ID=88 · 5 min ago</text>
  <text x="56" y="358" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">carol · crm.activities · ACTIVITY_ID=341 · 12 sec ago</text>

  <rect x="500" y="278" width="460" height="92" rx="8" fill="rgba(0,0,0,0.40)" stroke="#1f2937"/>
  <text x="516" y="300" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LOGS (live)</text>
  <text x="516" y="320" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">14:02:01.083  INFO  liberty.connectors · default pool: 5/20</text>
  <text x="516" y="334" fill="#fde68a" fontSize="9" fontFamily="ui-monospace, monospace">14:02:11.408  WARN  liberty.jobs · run_a8c4 retried (1/3)</text>
  <text x="516" y="348" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">14:02:12.812  INFO  liberty.web.screens · user alice opened crm.customers</text>
  <text x="516" y="362" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">14:02:13.045  INFO  liberty.connectors · query customers_get · 42 rows</text>
</svg>

---

## KPI strip

Four numbers at the top. Each is a quick read on a single dimension:

| KPI | What it counts | When to worry |
|---|---|---|
| **Uptime** | How long the framework process has been running. | If it resets unexpectedly, the framework crashed and restarted (or systemd / Docker re-pulled it). Check the logs around the restart timestamp. |
| **Connected users** | Sessions currently signed in (have a fresh access token). | Normal install: low single digits. A jump (a hundred at once) might mean a load test or a script with a leaked token. |
| **Held locks** | Row-level locks the framework holds — one per opened edit dialog. | If a lock is held for hours and the user has left, the dialog is stale. Either the user reopens and saves/closes, or you can release manually (see [Held locks](#held-locks)). |
| **Pool connections** | Total in-use connections across every pool. | Should stay well below the sum of pool sizes. If you regularly hit the limit, raise pool sizes or investigate slow queries. |

The KPIs refresh every few seconds via the framework's Socket.IO channel — no page reload needed.

---

## Pools

One row per SQL pool the framework knows about. Pool config comes from *Settings → Pools*; this card is the **live view** of each.

| Column | Notes |
|---|---|
| **Pool** | The pool's name (the key under `[pools.*]` in the connectors file). |
| **Dialect** | `postgresql`, `oracle`, `mysql`, `mssql`, `sqlite`, `db2` — what SQLAlchemy reports for this engine. |
| **In use** | Connections currently checked out of the pool by a running query. |
| **Idle** | Connections that are open but free to serve the next query. |
| **Overflow** | `n/max` — extra connections beyond pool size, opened temporarily when in-use hits the limit. A persistent non-zero overflow means the pool is under-sized. |

A pool shown as `not opened` (lazy) hasn't been used yet — the engine isn't materialised until the first query hits it. That's normal and saves resources; it doesn't mean misconfiguration.

### What to do on a saturated pool

| Symptom | Action |
|---|---|
| `in use` = pool size, `overflow` growing. | Either bump the pool size (*Settings → Pools → \<pool> → Pool size*), or investigate slow queries — a stuck query holds a connection. |
| Many idle connections. | Pool is over-sized; you can shrink it to save DB-side memory. Not urgent. |
| `not opened` on a pool that should be active. | The connector hasn't been used yet. Open a screen / dashboard that uses it; the pool materialises. |

---

## Connected users

One row per currently-signed-in user.

| Column | Notes |
|---|---|
| **User** | The username. Superusers get a `super` chip. |
| **Session** | The Socket.IO session id (first 8 characters, the rest hidden — abbreviated for legibility). |
| **Client** | The client id from the JWT (also abbreviated). Identifies the browser tab — one user may have multiple sessions across tabs. |

The card is the live answer to "who's currently in?" — the framework's user store has timestamps for last sign-in, but this card shows **right now**.

### When to investigate

| Pattern | What it usually means |
|---|---|
| Same user with many sessions. | The user has many browser tabs open. Usually harmless. |
| A user signed in days ago, still listed. | Their access token is still valid (the default TTL is 1 hour for the access token, 14 days for the refresh) — they renewed silently. Disabling the user in *Settings → Access* takes effect on their next refresh. |
| The list is empty. | Nobody is signed in. (Or there's a problem — verify by signing in yourself.) |

---

## Held locks

One row per row-level lock the framework is holding. A lock is **soft** — it doesn't block the database; it blocks the *UI*. When user A opens row 14 for edit, user B sees the row marked locked and can't open the same edit dialog. The lock is released on dialog close (save or cancel) or after a TTL.

| Column | Notes |
|---|---|
| **User** | Who holds the lock. |
| **Record** | `<app>.<screen> · <key>=<value>` — which row, on which screen of which app. |
| **Since** | How long the lock has been held. Format: `12 sec ago`, `3 min ago`. |

### Released automatically

A lock is released by:

- The user clicking *Save* or *Cancel* on the dialog.
- The user closing the browser tab (the framework detects the lost Socket.IO connection).
- The lock TTL expiring (default 1 hour) — the framework drops orphaned locks.

### Manual release

For genuinely stuck locks (the user is gone, the lock TTL hasn't fired):

```bash
liberty-admin lock release --app crm --screen customers --key CUSTOMER_ID=14
```

This drops the lock immediately. The next user can open the dialog. Use sparingly — releasing a lock while the original user is mid-edit silently overwrites their work.

---

## Logs (live)

The bottom card streams the framework's last few hundred log lines from the in-memory ring buffer.

| Element | What it does |
|---|---|
| **Time** | Server-side timestamp (`HH:MM:SS.mmm`). |
| **Level** | `INFO` / `WARNING` / `ERROR` / `CRITICAL` — colour-coded (green / yellow / red / dark red). |
| **Name** | The Python logger name (`liberty.connectors`, `liberty.jobs`, `nomaflow.python`, your plugin's logger). |
| **Message** | The log message. |

### Controls

| Control | Effect |
|---|---|
| **Pause** | Stops auto-scroll. Stream continues; you can scroll back without the view jumping. *Resume* re-engages auto-scroll. |
| **Level filter** (All / Info / Warn / Err) | Hide lines below the chosen level. *Err* shows only `ERROR` + `CRITICAL`. |
| **Text filter** | Substring match on logger name + message. Case-insensitive. |
| **Clear filter** | Resets both filters. |
| **Trash icon** | Empties the **client-side** buffer (the server buffer is untouched — refresh and lines re-arrive). |

The stream is **client-side bounded** at ~1000 lines. Older lines fall off as new ones arrive. For historical logs beyond what the buffer holds, look at the framework's log file on disk (`/var/log/liberty/app.log` by default, or wherever your logging config points).

### Permissions

The log viewer is **superuser-only** — the framework returns a `Log viewer requires superuser access` banner if a non-superuser opens the page. Logs frequently contain internal details (SQL fragments, function arguments, user emails) that aren't safe for general operator viewing.

---

## Refresh interval

The page refreshes its data via Socket.IO at these cadences:

| Card | Refresh trigger |
|---|---|
| KPIs, Pools, Connected users, Held locks | Every ~5 seconds on a server tick, **and** immediately on user sign-in / sign-out / dialog open / dialog close events. |
| Logs | Push-based — every log line emitted by the framework streams to the page in real time (subject to the 1000-line client buffer). |

No manual reload button — the page is meant to stay open in an operations tab.

---

## What this page is NOT

- Not a **historical** view. A process restart wipes Locks, Connected users and the Log buffer. For long-term retention, route logs to an external system + use the framework's audit tables.
- Not a **per-query performance** view. For slow-query investigation, enable Postgres' `pg_stat_statements` or wire an APM.
- Not a **resource usage** view. Container CPU / RAM live in `docker stats` / Portainer / Kubernetes; OS-level metrics live in your monitoring agent.

The Monitoring page answers *"what's the framework doing right now?"*. For *"what did it do yesterday?"* you need the layers below.

---

## What's next

- [Overview](./overview.md) — when to look at Monitoring vs external systems.
- [Health endpoints](./health-endpoints.md) — the machine-readable side.
