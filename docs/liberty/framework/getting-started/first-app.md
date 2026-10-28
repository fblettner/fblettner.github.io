---
title: First app walkthrough
description: "Build a working Liberty Next app end to end: a pool, a SQL connector with its queries generated from a table, a screen with a grid and an edit dialog, and a menu entry — all from Settings, applied without a restart."
keywords: [Liberty Framework, first app, walkthrough, pool, connector, screen, menu, hot-reload, Liberty Next pages, dictionary, low-code]
---

# First app walkthrough

This page goes from an empty install to a working app — a sidebar entry that opens a grid on a table, with an edit dialog. Everything is done from **Settings** (superuser), nothing is edited by hand.

Four elements, in order — **pool → connector → screen → menu** — each saved and applied at once.

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
  <text x="380" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">named SQL queries</text>

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

The example uses the `default` pool and a small `tasks` table.

---

## Step 1 — The pool \{#pool\}

Open **Liberty Next → Administer → Pools**. The installation created the `default` pool: on a Docker install it points at the bundled PostgreSQL database, on a Python install without PostgreSQL at a local SQLite file. It is enough for this walkthrough. To work on another database, add a pool with its URL — see [Connectors](../connectors.md#pools).

Create the example table with any SQL client connected to that database:

```sql
CREATE TABLE tasks (
  id        INTEGER PRIMARY KEY,
  title     VARCHAR(200) NOT NULL,
  status    VARCHAR(10)  NOT NULL DEFAULT 'open',
  due_date  DATE
);
INSERT INTO tasks (id, title, status, due_date) VALUES
  (1, 'Draft sprint plan',      'open', '2026-06-10'),
  (2, 'Review pull request 42', 'done', '2026-06-05'),
  (3, 'Customer follow-up',     'open', '2026-06-12');
```

---

## Step 2 — The connector and its queries \{#connector\}

1. **Liberty Next → Build → Connectors → ＋ Connector**: name `tasks`, type **SQL**, pool `default`. Save.
2. With `tasks` selected, choose **Tables** in the mode bar, then **＋ Add queries → Generate from DB**.
3. In the CRUD wizard, pick the `tasks` table, keep every column, tick **key** on `ID`, and keep the four statements (SELECT, UPDATE, INSERT, DELETE).
4. Save. The connector now holds `tasks_get`, `tasks_put`, `tasks_post` and `tasks_delete`:

```sql
SELECT ID, TITLE, STATUS, DUE_DATE FROM tasks
UPDATE tasks SET TITLE = :TITLE, STATUS = :STATUS, DUE_DATE = :DUE_DATE WHERE ID = :ID_ORIGINAL
```

The columns are read from the database when the query runs; nothing else needs declaring. See [Create from a database table](../build/queries/create-from-database.md).

---

## Step 3 — The screen \{#screen\}

1. **Liberty Next → Build → Screens → ＋ Add scope**, pick `tasks`: the `tasks` chip appears.
2. **＋ Add screen**, id `tasks`. Click the new card to open the screen editor.
3. **General** tab: label `Tasks`; check **Editable** for in-grid editing.
4. **Queries** tab: read `tasks_get`, update `tasks_put`, insert `tasks_post`, delete `tasks_delete`.
5. **Dialog** tab: drag the columns onto the form.
6. **Save**.

The grid columns come from the read query; their labels and formats from the [dictionary](../dictionary.md) when entries exist (its **Scan a table** button proposes them). The [Screen Creation Assistant](../build/screen-assistant.md) does steps 2 and 3 in one pass for a table.

---

## Step 4 — The menu entry \{#menu\}

1. **Liberty Next → Build → Menus → + Add scope**, pick `tasks`: the empty tree of the app appears.
2. **＋ Item**, then in the inspector: label `Tasks`, type `screen`, target `tasks_get` (the screen built on it), icon `table`.
3. Save.

Since `tasks` now has a menu, it is an app: it appears in the app picker, and its sidebar shows **Tasks**. A click opens the grid: a row opens the edit dialog, **＋ Add** an empty one. See [Build the tree](../build/menus/build-the-tree.md) and [Make a connector an app](../build/menus/make-connector-an-app.md).

---

## What you have now

- **A pool** — the database connection.
- **A connector** — the four queries on the table.
- **A screen** — the grid and the dialog on these queries.
- **A menu** — the entry that opens the screen, which makes the connector an app.

Every save was applied without a restart. The pool and the connector are stored in `connectors.toml`, the screen in `screens.toml`, the menu in `menus.toml`.

---

## What's next

- [Project layout](./project-layout.md) — where these files live.
- [Dictionary](../dictionary.md) — labels, lists of values and formats.
- [Roles & permissions](../build/secure/roles-and-permissions.md) — who may open the new screen.
- [CRM tutorial](../tutorial-crm/01-setup.md) — a complete app with several screens, a dashboard and jobs.
