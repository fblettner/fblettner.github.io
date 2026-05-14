---
title: Custom Lists
description: "Create operator-defined reference lists (code / FR / EN labels) and assign them to grid columns so dropdowns and filters render automatically. Each list can be edited row by row or synced from an API / SQL connector."
keywords: [NomaUBL, custom lists, reference list, dropdown, picker, filter, grid, list views, refList, sync, api connector, sql connector]
---

# Custom Lists

A **Custom List** is an operator-defined reference list — a `code → labelFr / labelEn` table managed outside the regulated catalogs in [Reference Lists](./reference-lists.md). Its job is to power a grid: assign a custom list to a column in the [List Views](./list-views.md) editor and the column gets a dropdown filter, a multi-select picker in *Advanced Filters*, and a `code — label` cell renderer — all automatically, without any code change.

Each list can be edited row by row, or **synced from a connector** ([API](./api-connectors.md) or [SQL](./sql-connectors.md)) when the source of truth lives in an external system. Same query / endpoint can power several lists by feeding different parameters per list.

---

## At a glance

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="420" rx="14" fill="url(#cl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Custom Lists</text>
  <rect x="608" y="30" width="86" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="651" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">+ New list</text>
  <rect x="700" y="30" width="80" height="22" rx="5" fill="url(#cl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="740" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">💾 Save</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIST</text>
  <rect x="280" y="82" width="220" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="98" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">business-units ▾</text>
  <text x="514" y="98" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">id used by list-views to reference this list</text>

  <text x="240" y="128" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Rows</text>

  <rect x="240" y="142" width="540" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="157" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CODE · LABEL FR · LABEL EN · ⌫</text>

  <rect x="240" y="168" width="540" height="24" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="184" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">PAR</text>
  <rect x="320" y="172" width="200" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="328" y="184" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Paris</text>
  <rect x="528" y="172" width="200" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="536" y="184" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Paris</text>
  <text x="752" y="184" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="194" width="540" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="210" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">LYO</text>
  <rect x="320" y="198" width="200" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="328" y="210" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Lyon</text>
  <rect x="528" y="198" width="200" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="536" y="210" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Lyon</text>
  <text x="752" y="210" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="220" width="540" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="236" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">MRS</text>
  <rect x="320" y="224" width="200" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="328" y="236" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Marseille</text>
  <rect x="528" y="224" width="200" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="536" y="236" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Marseille</text>
  <text x="752" y="236" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="252" width="120" height="24" rx="5" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="300" y="268" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Add row</text>

  <line x1="240" y1="288" x2="780" y2="288" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="310" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Sync source <text fill="#64748b" fontSize="9" fontStyle="italic">(optional)</text></text>

  <text x="240" y="336" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="320" y="326" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="341" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">erp-master · SQL ▾</text>
  <text x="538" y="341" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUERY</text>
  <rect x="586" y="326" width="194" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="596" y="341" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">listBusinessUnits ▾</text>

  <text x="240" y="368" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CODE</text>
  <rect x="290" y="358" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="300" y="373" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">MCU</text>
  <text x="420" y="373" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL FR</text>
  <rect x="480" y="358" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="373" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">DESCRIPTION_FR</text>
  <text x="610" y="373" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL EN</text>
  <rect x="670" y="358" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="680" y="373" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">DESCRIPTION_EN</text>

  <text x="240" y="400" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMS</text>
  <rect x="296" y="390" width="320" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="306" y="405" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">company=00070; activeOnly=Y</text>
  <rect x="626" y="390" width="150" height="22" rx="5" fill="url(#cl-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="701" y="405" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">↻ Sync now</text>

  <rect x="240" y="420" width="540" height="14" rx="3" fill="rgba(74,222,128,0.10)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="248" y="431" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">✓ Synced 47 row(s) from erp-master · listBusinessUnits</text>

  <rect x="20" y="82" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">List id</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">referenced by list-views</text>
  <line x1="220" y1="98" x2="280" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cl-arrow)"/>

  <rect x="20" y="168" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="183" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">code → FR / EN</text>
  <text x="30" y="196" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">picker rows + cell labels</text>
  <line x1="220" y1="184" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cl-arrow)"/>

  <rect x="820" y="252" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="267" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Manual rows</text>
  <text x="830" y="280" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">edit row by row</text>
  <line x1="820" y1="268" x2="780" y2="264" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cl-arrow)"/>

  <rect x="20" y="326" width="200" height="48" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="341" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sync from connector</text>
  <text x="30" y="354" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">API or SQL</text>
  <text x="30" y="366" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">replaces the rows in place</text>
  <line x1="220" y1="342" x2="320" y2="338" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cl-arrow)"/>

  <rect x="820" y="390" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="405" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Same query, many lists</text>
  <text x="830" y="418" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">per-list params</text>
  <line x1="820" y1="406" x2="780" y2="402" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cl-arrow)"/>
</svg>

---

## List selector

The page lists every custom list defined on the platform. Pick one to edit; **+ New list** above the row table creates a new entry seeded with an empty row.

| Field | Description |
|---|---|
| **List** | Dropdown of every custom list (`name`). The name is the identifier that the [List Views](./list-views.md) editor references — picking a list here is editing it, picking the same name in a column spec under *List Views* binds the column to it. |
| **+ New list** | Creates a new list. A *Name* prompt asks for the identifier; that name is what column specs will reference. |
| **Save** | Writes the active list. Switching to another list before saving discards unsaved edits. |

---

## Rows

The row table is the canonical content of the list. One row per entry, three columns.

| Column | Description |
|---|---|
| **Code** | The stored value — what the column cell holds in the grid (e.g. `PAR`, `MCU0070`, `01`). |
| **Label FR** | French label rendered next to the code in the picker and in the cell (`code — label`). Required. |
| **Label EN** | English label rendered when the active locale starts with English. Optional — when empty, the FR label is reused. |
| **⌫** | Removes the row. |

**+ Add row** at the bottom appends a new empty row. Rows are sorted alphabetically by code in dropdowns and pickers; the editor preserves the order in which rows were added so the operator can reorder them by hand.

---

## Sync source

A custom list can be backed by an external system instead of being edited by hand. The *Sync source (optional)* group sits below the row table. Pick an [API connector](./api-connectors.md) or a [SQL connector](./sql-connectors.md), pick an endpoint / query, then map the response fields to the list's three columns.

| Field | Description |
|---|---|
| **Connector** | Dropdown of every `api-connector` and `sql-connector` template defined on the platform. Picking one limits the next field to that connector's targets. |
| **Endpoint / Query** | Dropdown of the connector's endpoints (API) or queries (SQL). Disabled until a connector is picked. |
| **Code field** | Column name (SQL) or JSON key (API) the sync reads as each row's `code`. Required. |
| **Label FR field** | Column / key for the French label. Required. |
| **Label EN field** | Column / key for the English label. Optional. |
| **List path** *(API only)* | Dotted path to the array inside the JSON body. Supports `data.items` and `items[0]` segments. Empty when the body is already a JSON array. |
| **Parameters** | Per-list key / value pairs sent to the connector as fixed values (no placeholder substitution). The same query can power several lists by saving different values per list; defaults from the endpoint definition apply when a field is left blank. |
| **Sync now** | Calls the connector, walks the response, builds the row set, and replaces the rows in place. A translated banner reports `Synced N row(s) from connector · endpoint` on success, or the underlying error on failure. |

The sync config lives on the same list template under `sync.connector`, `sync.endpoint`, `sync.codeField`, `sync.labelFrField`, `sync.labelEnField`, `sync.listPath` and `sync.params`. List consumers (cell renderer, *Advanced Filters* dropdown, per-column filter row) never see those keys as entries — they are filtered out of `parseRefOptions`.

A *Sync now* does not auto-save; it only rebuilds the row table. Click **Save** to persist the synced rows.

---

## Using a custom list in a grid

A custom list is wired to a grid through the [List Views](./list-views.md) editor. On the column row, set the `refList` field to the list's `name`:

```json
{
  "name": "logBusinessUnit",
  "label": "Business unit",
  "labelFr": "Unité d'activité",
  "type": "string",
  "refList": "business-units",
  "width": 150,
  "visible": true,
  "filter": true
}
```

Effects on the grid:

- **Cell renderer** — instead of the raw code, each cell shows `code — label` (FR or EN depending on the locale). Empty values stay blank.
- **Per-column filter row** — the text input is replaced by a searchable dropdown populated from the list's rows. Each entry is `code — label`.
- **Advanced Filters multi-select picker** — the list seeds the multi-select picker. Picking several entries issues an `IN (?,?,?)` clause on the server.

No code change is needed — adding a row to the list, syncing it from a connector, or renaming a label refreshes the grid on the next render.

---

## REST endpoints

The list editor and the grid consumers share the same back-end:

| Method | Path | Purpose |
|---|---|---|
| `GET` | `/api/ref-lists` | Returns every defined list with its rows. The grid loads this once per session and caches the result; the editor invalidates the cache on save. |
| `GET` | `/api/ref-lists/{name}` | Returns one list with its rows + the sync config when present. |
| `PUT` | `/api/ref-lists/{name}` | Writes the list. Body: `{ name, rows: [...], sync: {...} or null }`. |
| `POST` | `/api/ref-lists/{name}/sync` | Triggers the sync. Returns the rebuilt row set on success, the underlying connector error on failure. |

---

## Tips & best practices

- **Pick a stable name.** The list's name is what column specs reference under `refList`. Renaming a list later breaks every column spec that points to it — better to delete and recreate under the new name once the column specs have been updated.
- **Keep the FR label populated.** The cell renderer falls back to the FR label when the active locale is FR; an empty FR label surfaces the raw code in the grid, which is rarely what an operator wants.
- **One connector query, many lists.** When several lists share the same back-end query (e.g. *active business units for company 00070* vs. *active business units for company 00080*), save the query once on a SQL or API connector and feed different *Parameters* per list. The endpoint defaults fill in the rest.
- **Sync replaces, it does not merge.** A *Sync now* removes every existing row before inserting the new ones. Manual edits made between two syncs are lost — when manual overrides matter, keep the list either manual or fully synced, not both.
- **Hidden columns can still be filtered.** A column bound to a custom list can be marked `visible: false` in the spec and still surface in *Advanced Filters* — useful for technical fields like `logBusinessUnit` that operators want to filter on but not display.
