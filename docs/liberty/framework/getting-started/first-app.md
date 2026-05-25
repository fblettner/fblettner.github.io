---
title: First app walkthrough
description: "Build a working Liberty app end-to-end in under five minutes: declare a database pool, define a SQL connector, expose a screen with a grid + edit modal and wire it into the sidebar menu — all from the Settings UI, all reloaded live."
keywords: [Liberty Framework, first app, walkthrough, pool, connector, screen, menu, hot-reload, Settings UI, dictionary, low-code]
---

# First app walkthrough

This page walks you from an empty install to a working app — a sidebar entry that opens a grid backed by a SQL query, with an edit dialog. Everything is done from the in-app **Settings** UI; nothing is hand-edited in TOML. The whole sequence takes **under five minutes** once the framework is installed.

You'll touch four configuration types in order — **pool → connector → screen → menu** — each saved live and reloaded by the framework in the same browser tab.

---

## At a glance

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fa-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <linearGradient id="fa-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="140" rx="14" fill="url(#fa-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">From empty install to a usable sidebar entry — four steps</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="160" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · POOL</text>
  <text x="160" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">database connection</text>

  <rect x="280" y="100" width="200" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="380" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · CONNECTOR</text>
  <text x="380" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">named SQL query</text>

  <rect x="500" y="100" width="200" height="60" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="600" y="124" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · SCREEN</text>
  <text x="600" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">grid + edit dialog</text>

  <rect x="720" y="100" width="220" height="60" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="830" y="124" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · MENU</text>
  <text x="830" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">sidebar entry</text>

  <line x1="260" y1="130" x2="280" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fa-arrow)"/>
  <line x1="480" y1="130" x2="500" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fa-arrow)"/>
  <line x1="700" y1="130" x2="720" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fa-arrow)"/>
</svg>

The example uses the built-in SQLite pool (`default`) and a tiny `tasks` table — no external database needed.

---

## Step 1 — Make sure the `default` pool exists

Open **Settings → Pools**. On a fresh install the `default` pool already points at the local SQLite file (`liberty.db`). It's enough for this walkthrough — no changes required.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', fontWeight: 700}}>Pools</div>
  <div style={{display: 'grid', gridTemplateColumns: '120px 1fr 120px 80px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontWeight: 600}}>default</div>
    <div style={{fontFamily: 'ui-monospace, monospace', opacity: 0.85}}>sqlite+aiosqlite:///liberty.db</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.1)', color: '#4ade80'}}>connected</span></div>
    <div style={{textAlign: 'right'}}>✏️</div>
  </div>
</div>

For a real install, switch to a PostgreSQL or Oracle URL — every connection-string format and option is documented under [Configuration → Environment variables](../configuration/environment-variables.md#liberty_db_url).

Then create the example table once via the SQLite shell:

```sql
CREATE TABLE tasks (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  title       TEXT    NOT NULL,
  status      TEXT    NOT NULL DEFAULT 'open',
  due_date    DATE,
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO tasks(title, status, due_date) VALUES
  ('Draft sprint plan',      'open',   '2026-06-10'),
  ('Review pull request 42', 'done',   '2026-06-05'),
  ('Customer follow-up',     'open',   '2026-06-12');
```

---

## Step 2 — Define a SQL connector

A connector is a **named query against a pool**. Open **Settings → Connectors → ➕ New connector** and fill in:

| Field | Value |
|---|---|
| **Name** | `tasks` |
| **Pool** | `default` |
| **Type** | `sql` |
| **Read query** | `SELECT id, title, status, due_date FROM tasks ORDER BY due_date` |
| **Write — insert** | `INSERT INTO tasks(title, status, due_date) VALUES (:title, :status, :due_date)` |
| **Write — update** | `UPDATE tasks SET title = :title, status = :status, due_date = :due_date WHERE id = :id` |
| **Write — delete** | `DELETE FROM tasks WHERE id = :id` |

The schema of the read query is **discovered at runtime** — the framework asks the database "what columns does this return?" the first time the connector is used. No need to declare it ahead of time.

Click **Save**. The connector appears on the catalog page (open `/` in another tab to see it). [Connectors](../connectors.md) covers every option and the HTTP / API connector types.

---

## Step 3 — Build a screen on top of the connector

A screen wraps a connector into a **grid + edit dialog**. Open **Settings → Screens → ➕ New screen**:

| Field | Value |
|---|---|
| **App** | `tutorial` |
| **Screen id** | `tasks` |
| **Title** | `Tasks` |
| **Connector** | `tasks` |
| **Key columns** | `id` |
| **Editable** | ✓ (turns on the Add / Edit / Delete actions) |

The grid columns and the edit dialog auto-derive from the read query's columns. To add localized labels, validation rules or boolean badges, the [Dictionary](../dictionary.md) page is the next stop.

Click **Save**, then open the URL `http://127.0.0.1:8000/screens/tutorial/tasks` — the grid is already live.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Tasks</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontWeight: 600}}>↻ Refresh</span>
      <span style={{padding: '5px 12px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>+ Add</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '60px 2fr 100px 110px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div>ID</div><div>Title</div><div>Status</div><div>Due date</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '60px 2fr 100px 110px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>1</div><div>Draft sprint plan</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.1)', color: '#60a5fa'}}>open</span></div>
    <div>10/06/2026</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '60px 2fr 100px 110px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>2</div><div>Review pull request 42</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.1)', color: '#4ade80'}}>done</span></div>
    <div>05/06/2026</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '60px 2fr 100px 110px', padding: '10px 14px', alignItems: 'center'}}>
    <div>3</div><div>Customer follow-up</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.1)', color: '#60a5fa'}}>open</span></div>
    <div>12/06/2026</div>
  </div>
</div>

Click any row — the edit dialog opens with the four fields, **Save** triggers the update query, **Delete** triggers the delete query, **+ Add** opens an empty form bound to the insert query.

[Screens](../screens.md) covers tabs, per-field conditions, cross-connector reads/writes and the full set of dialog options.

---

## Step 4 — Wire it into the sidebar menu

Open **Settings → Menus → ➕ New leaf** (or extend an existing tree):

| Field | Value |
|---|---|
| **Parent** | *Top-level* |
| **Label** | `Tasks` |
| **Type** | `query` |
| **Connector** | `tasks` |
| **Screen** | `tutorial/tasks` |
| **Icon** | `list-todo` *(any [Lucide icon](https://lucide.dev/icons))* |

Save. The sidebar refreshes automatically — the **Tasks** entry appears with the icon and opens the screen on click. The framework's hot-reload pipeline pushed the new menu tree without a restart; the same is true for every Settings edit. See [Hot-reload](../configuration/hot-reload.md) for the exact mechanics.

---

## What you have now

A working app with:

- **A pool** that owns the database connection.
- **A connector** holding the read + write queries.
- **A screen** that turns the connector into a grid + edit dialog.
- **A menu entry** that exposes the screen in the sidebar.

Four TOML blocks behind the scenes — the four files were updated in place under `liberty-apps/config/`, no restart needed. Look at them with `git diff` to see how a typical edit lands.

---

## What's next

- [Project layout](./project-layout.md) — the file map of `liberty-apps`.
- [Concepts → Connectors](../connectors.md) — HTTP, API, parameterised queries, schema hints.
- [Concepts → Dictionary](../dictionary.md) — labels, enums, lookups, format rules.
- [Authentication → Roles & permissions](../auth/roles-permissions.md) — restrict the new screen to a specific role.
- [Settings UI](../configuration/settings-ui.md) — every builder in detail.
