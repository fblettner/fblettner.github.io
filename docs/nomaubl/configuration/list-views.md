---
title: List Views
description: "Edit the per-view column spec (labels, format, alignment, width, filter allow-list) for every NomaUBL list page — Invoices, Integration Errors, Processing Log, E-Reporting — and add new columns from the view's column catalog without writing code."
keywords: [NomaUBL, list views, spec, column catalog, DataTableV2, invoices, integration errors, processing log, e-reporting, listviewspec, advanced filters]
---

# List Views

The **List Views** editor is the configuration page for the four spec-driven list pages: [Invoices](../application/invoices.md), [Integration Errors](../application/integration-errors.md), [E-Reporting](../application/ereporting.md) and [Processing Log](../management/processing-log.md). One JSON spec per view drives the column shape on each page — labels, type, format, alignment, width, default sort and the filter-row allow-list — and is editable here without touching code.

A second concept lives next to the spec: the **column catalog**. Each view ships a catalog of every column the underlying tables can produce — the catalog is the source of truth for what is addressable, the spec picks a subset and presents it. The `+ Add column` picker is just a filtered view of the catalog.

---

## At a glance

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="lv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="lv-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="lv-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="420" rx="14" fill="url(#lv-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">List Views</text>
  <rect x="704" y="30" width="76" height="22" rx="5" fill="url(#lv-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="742" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">💾 Save</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="80" width="120" height="22" rx="11" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1.5"/>
  <text x="300" y="95" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Invoices</text>
  <rect x="368" y="80" width="160" height="22" rx="11" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="448" y="95" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Integration Errors</text>
  <rect x="536" y="80" width="120" height="22" rx="11" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="596" y="95" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">E-Reporting</text>
  <rect x="664" y="80" width="116" height="22" rx="11" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="722" y="95" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Processing Log</text>

  <rect x="240" y="116" width="540" height="48" rx="8" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="252" y="134" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">view.invoices</text>
  <rect x="360" y="124" width="80" height="14" rx="3" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="400" y="134" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">override</text>
  <text x="252" y="153" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Source: db-nomaubl property · falls back to bundled default if unset</text>

  <rect x="240" y="174" width="540" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="189" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">⠿ · NAME · LABEL EN · LABEL FR · TYPE · FORMAT · WIDTH · VISIBLE · FILTER · ⌫</text>

  <rect x="240" y="200" width="540" height="28" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="218" fill="#64748b" fontSize="12" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="218" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">statusCode</text>
  <rect x="356" y="206" width="120" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="362" y="218" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Status</text>
  <rect x="480" y="206" width="100" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="218" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Statut</text>
  <text x="592" y="218" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">string</text>
  <text x="630" y="218" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">badge</text>
  <text x="668" y="218" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">90</text>
  <rect x="696" y="206" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="703" y="217" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <rect x="720" y="206" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="727" y="217" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="754" y="218" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="232" width="540" height="28" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="250" fill="#64748b" fontSize="12" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="250" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">customerName</text>
  <rect x="356" y="238" width="120" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="362" y="250" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Customer</text>
  <rect x="480" y="238" width="100" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="250" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Client</text>
  <text x="592" y="250" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">string</text>
  <text x="630" y="250" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">—</text>
  <text x="668" y="250" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">180</text>
  <rect x="696" y="238" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="703" y="249" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <rect x="720" y="238" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="727" y="249" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="754" y="250" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="264" width="540" height="28" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="282" fill="#64748b" fontSize="12" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="282" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">grossAmount</text>
  <rect x="356" y="270" width="120" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="362" y="282" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Total TTC</text>
  <rect x="480" y="270" width="100" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="282" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Total TTC</text>
  <text x="592" y="282" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">number</text>
  <text x="630" y="282" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">amount</text>
  <text x="668" y="282" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">120</text>
  <rect x="696" y="270" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="703" y="281" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <rect x="720" y="270" width="14" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="754" y="282" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="296" width="540" height="28" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="314" fill="#64748b" fontSize="12" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="314" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">logPaUuid</text>
  <rect x="356" y="302" width="120" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="362" y="314" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">PA UUID</text>
  <rect x="480" y="302" width="100" height="16" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="314" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">UUID PA</text>
  <text x="592" y="314" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">string</text>
  <text x="630" y="314" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">—</text>
  <text x="668" y="314" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">200</text>
  <rect x="696" y="302" width="14" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <rect x="720" y="302" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="727" y="313" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="754" y="314" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="340" width="160" height="26" rx="13" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="320" y="357" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Add column</text>

  <rect x="240" y="378" width="540" height="48" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="396" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pick from column catalog</text>
  <text x="252" y="412" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">logSourceFile · logActivityCode · logBusinessUnit · logDueDate · logUser · logJobn …</text>

  <rect x="20" y="80" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One card per view</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">collapsible, switchable</text>
  <line x1="220" y1="96" x2="240" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lv-arrow)"/>

  <rect x="820" y="116" width="160" height="48" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="131" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">override / default</text>
  <text x="830" y="144" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">badge follows the spec</text>
  <text x="830" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">storage state</text>
  <line x1="820" y1="140" x2="780" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lv-arrow)"/>

  <rect x="20" y="200" width="200" height="48" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Drag handle ⠿</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">reorders columns</text>
  <text x="30" y="240" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">in the grid</text>
  <line x1="220" y1="224" x2="240" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lv-arrow)"/>

  <rect x="20" y="340" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">+ Add column</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">filtered catalog picker</text>
  <line x1="220" y1="356" x2="240" y2="353" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lv-arrow)"/>
</svg>

---

## View selector

A pill bar at the top of the page switches between the four views currently driven by a spec:

| View | Page driven |
|---|---|
| **Invoices** | [Invoices](../application/invoices.md) — `view.invoices`. |
| **Integration Errors** | [Integration Errors](../application/integration-errors.md) — `view.integration-errors`. |
| **E-Reporting** | [E-Reporting](../application/ereporting.md) — `view.ereporting`. |
| **Processing Log** | [Processing Log](../management/processing-log.md) — `view.processing-log`. |

Only one view at a time is loaded into the editor. Switching views does not lose unsaved changes on the previous view as long as the page stays open; **Save** writes the active card only.

A small badge next to the view name tells the operator whether the active spec comes from the bundled JAR default (`default`) or from an entry stored on `db-nomaubl` (`override`):

- **default** — no `view.<name>` property exists on `db-nomaubl`. The bundled JSON in `config/list-views/view.<name>.json` is what the page renders. Saving from the editor writes a property and switches the badge to `override`.
- **override** — a property has been stored. The editor reads the stored value, the page reads the stored value, the bundled default is ignored.

---

## Column rows

Each card carries a table of the columns currently in the spec. One row per column.

| Column | Description |
|---|---|
| **⠿ (drag handle)** | Drag to reorder. The order in the editor is the order the column appears in the grid. |
| **Name** | The spec column name — must match a column in the view's catalog. Read-only on existing rows (the name is the join key with the catalog); editable only when adding via the picker. |
| **Label EN / Label FR** | The labels shown in the grid header. `Label FR` is used when the active locale starts with `fr`, otherwise `Label EN`. Both fields are free-form. |
| **Type** | `string` / `number` / `date` / `datetime`. Drives sorting and cell alignment defaults. |
| **Format** | Optional renderer: `date` / `datetime` / `amount` / `percent` / `badge`. Applied on top of the type. |
| **Width** | Pixel width passed to the table's `<colgroup>`. Columns without a width share the leftover horizontal space. |
| **Visible** | Master toggle. Off = the column is in the spec but hidden in the grid (still queryable). |
| **Filter** | Allow-list for the [Advanced Filters](#advanced-filters-panel) panel. Off = no filter chip is offered for this column. |
| **⌫ (remove)** | Drops the column from the spec. The catalog entry is untouched — re-adding it later seeds the same shape. |

The default sort lives on the spec but is set elsewhere (today, by editing the bundled JSON or the stored property directly; a UI toggle is planned for a future release). Each view ships a sensible default.

---

## + Add column

The button below the row list opens the **catalog picker** — a searchable list of every catalog entry the current spec does not already contain. Each entry shows:

| Field | What it carries |
|---|---|
| **Name** | The catalog column name — same value the spec stores. |
| **Label** | The default English label suggested by the catalog. The French label is derived from the catalog's `labelFr` if present; both labels can be edited after the column lands in the spec. |
| **Type** | `STRING` / `NUMBER` / `DATE` / `JDE_DATE` / `JDE_DATETIME`. Drives the spec row's default `type`. JDE-specific dates carry a built-in decoder (Julian or composite UPMJ+UPMT). |

Picking an entry inserts a new row at the end of the table seeded with the catalog defaults. Click **Save** to commit; the column appears in the page on its next render.

The catalog itself is server-side and is not editable from the UI. Adding a truly new column (one the back-end does not know how to project) requires a code change on the Java handler.

---

## Defaults row \{#defaults-row\}

Above the column rows, each view card carries a *Defaults* row with the per-view settings that apply outside the column shape.

| Field | Description |
|---|---|
| **Page size** | Initial page size for the in-grid TanStack paginator. Persists as `spec.defaultPageSize`. Default: `50`. |
| **Max rows** *(2026.05.12)* | Hard cap on the slice loaded by a single Run. The four spec-driven views now operate in **hybrid client-side mode**: each Run loads one capped slice from the server and TanStack paginates / sorts / filters within that slice — no roundtrip while typing in the per-column filter row. Persists as `spec.maxRows`. Default: `5000`. |

When the slice cap is hit during a Run, the page toolbar shows a translated `X / Y rows` notice next to the Run button — a hint that the operator should narrow the date range or the *Advanced Filters* to get the most relevant slice. The notice is informational; the page keeps working.

---

## Advanced Filters panel \{#advanced-filters-panel\}

The spec's `filter: true` allow-list seeds a second UI on the destination page: the **Advanced Filters** panel — a collapsible panel keyed by spec column name with per-column operator pickers (`contains`, `equals`, `≠`, `<`, `≤`, `>`, `≥`, `between`, `empty`, `not empty`). The panel emits a draft state; an explicit **Run** button commits it as `appliedFilters` so typing does not spam the back-end.

The list of operators offered per column depends on the catalog entry's filter behaviour:

| Catalog `filterKind` | Operators offered |
|---|---|
| `exact` | `equals`, `≠`, `empty`, `not empty`. |
| `LIKE` | `contains`, `equals`, `≠`, `empty`, `not empty`. |
| `inList` | `equals` (multi-pick — the catalog splits comma-separated buckets into an `IN (?,?,?,?,?)` clause). |
| `between` | `<`, `≤`, `>`, `≥`, `between`. Applies to numeric and date columns. |

Marking a column **Filter** = off in the spec keeps it visible in the grid but removes its chip from the panel; useful for read-only fields the operator does not need to query.

### refList columns — multi-select picker *(2026.05.13)*

A column can be bound to a reference list — either a regulated one from [Reference Lists](./reference-lists.md) (statuses, currencies, country codes, …) or an operator-defined one from [Custom Lists](./custom-lists.md). Setting `refList: <list-name>` on the column spec is all that is needed: cell renderer, per-column filter dropdown and *Advanced Filters* multi-select picker switch on automatically.

When the catalog or the spec declares a column as a reference list (`refList: …`) — the *statuses* picker on Invoices, the *eReporting statuses* on E-Reporting, any custom list — the Advanced Filters panel and the per-column filter row both render a **multi-select picker** instead of a single dropdown. Each row in the picker is a toggle (`code — label`), the trigger shows `N selected` past the inline cap, and a `✕` button on the right resets the selection in one click without opening the popover.

The multi-select selection is encoded as comma-joined in `OpFilter.a` (e.g. `200,210,9907`); on the server side, the catalog's `filterInList` flag splits it into an `IN (?,?,?,?,?)` clause, so picking three statuses really does return the union — not a `LIKE` over the joined string.

The `between` operator on a date / number / text column widens the column to fit both operand inputs (`BETWEEN_COL_WIDTH = 340px`) so the two fields render side by side rather than truncating. Switching back to a single-operand operator snaps the column to its spec width on the next render.

---

## Schema reference

The spec file looks like this (excerpt):

```json
{
  "name": "view.invoices",
  "defaultSort": [{"column": "creationDate", "direction": "desc"}],
  "columns": [
    {
      "name": "statusCode",
      "label": "Status",
      "labelFr": "Statut",
      "type": "string",
      "format": "badge",
      "align": "left",
      "width": 90,
      "visible": true,
      "filter": true
    },
    {
      "name": "customerName",
      "label": "Customer",
      "labelFr": "Client",
      "type": "string",
      "width": 180,
      "visible": true,
      "filter": true
    }
  ]
}
```

The `name` joins with the catalog entry that has a matching key; everything else on the row is presentation. Saving from the editor writes the same shape under `db-nomaubl.view.<name>`. Resetting the property — easiest done via `Configuration → System → Global` while it carries the JSON properties — falls the page back to the bundled default and switches the badge to `default`.

---

## Tips & best practices

- **Start with the bundled default.** Each view ships a curated default; modify only when an operator-specific need surfaces. The `override` badge is the operator's signal that the spec drifted from the shipped configuration.
- **Use the catalog before requesting code changes.** When a column the operator wants is already in the catalog (e.g. `logBusinessUnit`, `logDueDate`), `+ Add column` solves it in a few clicks. Reach for a code change only when the column is not in the catalog.
- **Keep the filter allow-list small.** Marking every column `filter: true` clutters the Advanced Filters panel — limit the allow-list to the columns operators actually query.
- **Set widths on the columns that benefit from them.** Status badges, dates, codes have natural widths; long strings should be left without a width so they take whatever room is left. `width` is also the column's CSS `min-width` — a too-large value cramps the rest of the grid.
- **Hidden ≠ removed.** Setting `Visible = off` keeps the column queryable by the Advanced Filters panel. Use it for technical fields the operator filters on but does not need to read.
