---
title: Dictionary
description: "The dictionary pins labels, formats and BOOLEAN / ENUM / LOOKUP rules on a column once. Every query that returns that column inherits them — typed grid, localized labels, dropdowns wired automatically."
keywords: [Liberty Next, dictionary, entries, enums, lookups, label, format, rule, BOOLEAN, ENUM, LOOKUP, i18n, EN, FR]
---

# Dictionary

The dictionary is the **shared catalog of per-column metadata**. One file (`config/dictionary.toml`) defines:

- **Entries** — per-column metadata: label, format, rule, per-language label translations.
- **Enums** — named enumerations with translatable labels.
- **Lookups** — references to a query that resolves a `code → label`.

A query's `columns` hint references an entry; the SQL connector resolves the label / format / rule at result time in the request's language. The React grid then renders the localized label, ✓ / ✗ for booleans, the enum label, or — via `services/lookups.useLookupBatch` — the lookup label after a one-shot per-session fetch.

---

## At a glance

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="280" height="380" rx="14" fill="url(#dc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">📄 dictionary.toml</text>

  <rect x="56" y="84" width="248" height="80" rx="8" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="68" y="104" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">[entries.USER_STATUS]</text>
  <text x="68" y="120" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">label = "Status"</text>
  <text x="68" y="134" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">format = "string"</text>
  <text x="68" y="150" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">rules = "ENUM"</text>

  <rect x="56" y="172" width="248" height="110" rx="8" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.35)" strokeWidth="1"/>
  <text x="68" y="192" fill="#c084fc" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">[enums.USER_STATUS]</text>
  <text x="68" y="208" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">values = [</text>
  <text x="80" y="224" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">{`{ value = "Y", label = "Active",`}</text>
  <text x="92" y="238" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">{`  l = { fr = "Actif" } },`}</text>
  <text x="80" y="252" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">{`{ value = "N", label = "Inactive",`}</text>
  <text x="92" y="266" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">{`  l = { fr = "Inactif" } },`}</text>
  <text x="68" y="278" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">]</text>

  <rect x="56" y="290" width="248" height="120" rx="8" fill="rgba(50,215,75,0.06)" stroke="rgba(50,215,75,0.30)" strokeWidth="1"/>
  <text x="68" y="310" fill="#4ade80" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">[lookups.CITY]</text>
  <text x="68" y="326" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">connector = "myapp"</text>
  <text x="68" y="340" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">query = "cities_get"</text>
  <text x="68" y="354" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">value = "ID"</text>
  <text x="68" y="368" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">label = "NAME"</text>
  <text x="68" y="382" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">group = "REGION"</text>

  <line x1="320" y1="220" x2="420" y2="220" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#dc-arrow)"/>

  <rect x="420" y="40" width="280" height="380" rx="14" fill="url(#dc-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="440" y="68" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚙ resolve_rule()</text>

  <rect x="436" y="84" width="248" height="60" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="104" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">BOOLEAN</text>
  <text x="448" y="120" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">{`{ kind: "boolean", true_value: "Y" }`}</text>
  <text x="448" y="136" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">cell renders ✓ / ✗</text>

  <rect x="436" y="152" width="248" height="60" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="172" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">ENUM</text>
  <text x="448" y="188" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">{`{ kind: "enum", values: [...] }`}</text>
  <text x="448" y="204" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">cell renders the localized label</text>

  <rect x="436" y="220" width="248" height="80" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="448" y="240" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">LOOKUP</text>
  <text x="448" y="256" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">{`{ kind: "lookup", connector,`}</text>
  <text x="448" y="270" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">{` query, value, label }`}</text>
  <text x="448" y="286" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">grid pre-fetches once per session</text>

  <rect x="436" y="308" width="248" height="100" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="448" y="328" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">form-layer rules</text>
  <text x="448" y="344" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">SEQUENCE</text>
  <text x="448" y="358" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">SYSDATE / CURRENT_DATE</text>
  <text x="448" y="372" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">LOGIN · PASSWORD</text>
  <text x="448" y="392" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">applied by the form, not the grid</text>

  <line x1="700" y1="220" x2="800" y2="220" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#dc-arrow)"/>

  <rect x="800" y="40" width="160" height="380" rx="14" fill="url(#dc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="820" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">REACT</text>

  <rect x="816" y="84" width="128" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="824" y="102" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Grid cell</text>
  <text x="824" y="118" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">code — label</text>

  <rect x="816" y="142" width="128" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="824" y="160" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Column filter</text>
  <text x="824" y="176" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">multi-select</text>

  <rect x="816" y="200" width="128" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="824" y="218" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Form widget</text>
  <text x="824" y="234" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">SearchSelect</text>

  <rect x="816" y="258" width="128" height="50" rx="8" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="824" y="276" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">i18n</text>
  <text x="824" y="292" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">X-Liberty-Lang</text>

  <text x="824" y="332" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">Every request</text>
  <text x="824" y="348" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">carries the active</text>
  <text x="824" y="364" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">i18n language —</text>
  <text x="824" y="380" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">labels come back</text>
  <text x="824" y="396" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">already localized.</text>
</svg>

---

## Entries

Per-column metadata. Each entry pins:

| Field | Description |
|---|---|
| `label` | Default English label. |
| `l` | Per-language labels (`{ fr = "...", de = "..." }`). |
| `format` | UI-interpreted format: `date`, `datetime`, `amount`, `percent`, `string`, `number`, `boolean`, …. |
| `rules` | Display rule — `BOOLEAN` / `ENUM` / `LOOKUP` (or one of the form-layer rules — see below). |
| `rules_values` / `default` | Optional rule-specific configuration (e.g. boolean `true_value`, default value on form `add`). |

```toml
[entries.USER_STATUS]
label   = "Status"
format  = "string"
rules   = "ENUM"

[entries.USER_STATUS.l]
fr = "Statut"
de = "Status"
```

An entry may sit at the top level (shared across every connector) or under `[connectors.<conn>.entries.<key>]` (specific to one connector — useful when the same column name carries a different meaning in different sources). Resolution checks the per-connector entry first, then falls back to the shared top-level one.

A column hint `dd = "USER_STATUS"` lifts the entry onto the query column. `dd = ""` opts out — the column is left untranslated. A `label` on the column itself overrides the dictionary's.

---

## Enums

A static `code → label` table with translations.

```toml
[enums.USER_STATUS]
label = "User status"
values = [
  { value = "Y", label = "Active",   l = { fr = "Actif" } },
  { value = "N", label = "Inactive", l = { fr = "Inactif" } },
]
```

Resolved at result time. The cell renders the active language's label; the per-column filter offers the multi-select picker over the same values; the form widget is a `SearchSelect`.

---

## Lookups

A reference to a query whose `value` / `label` columns resolve the cell.

```toml
[lookups.CITY]
description = "Cities"
connector   = "myapp"            # falls back to the calling connector when omitted
query       = "cities_get"
value       = "ID"
label       = "NAME"
group       = "REGION"           # optional secondary grouping
```

A column with `rules = "LOOKUP"` pointing at a lookup id is resolved by:

- the grid: one shared `useLookupBatch` fetch per session — cell renders `code — label`;
- the form widget: a `SearchSelect` with `useLookupTables`, narrowed at call time by `lookup_param_binds` if any.

---

## Display rules vs form-layer rules

| Rule | Owner | Effect |
|---|---|---|
| `BOOLEAN` | Display | Cell renders ✓ / ✗. `rules_values.true_value` declares which raw value counts as true (default `"Y"`). |
| `ENUM` | Display | Cell renders the localized label. Column filter and form widget pull the value list from `[enums.<id>]`. |
| `LOOKUP` | Display | Cell renders `code — label` from `[lookups.<id>]`. Form widget narrows by `lookup_param_binds`. |
| `SEQUENCE` | Form | Pulls the next sequence value on `add`. |
| `SYSDATE` / `CURRENT_DATE` | Form | Seeds today on `add`. |
| `LOGIN` | Form | Seeds the caller's username on `add`. |
| `PASSWORD` | Form | Marks the input as a password and triggers crypto handling on save. |

Display rules ship on `Column.rule` so the grid can render without a second round-trip. Form-layer rules are applied by `ScreenDialog` when the modal form opens — they wait for [Screens](./screens.md).

---

## i18n

Every API request carries `X-Liberty-Lang` (the current `react-i18next` language). The SQL connector resolves the label and the rule in that language; the React grid renders labels already localized. A missing translation falls back to the `label` (English).

The dictionary itself declares its default language:

```toml
default_language = "en"
```

---

## Tips & best practices

- **Define entries shared across connectors at the top level.** A `USER_STATUS` that means the same thing everywhere belongs under `[entries.USER_STATUS]` once. Reach for the per-connector override only when the meaning differs.
- **Keep `label` short.** It is what the grid header shows. Long titles belong in `description` on the query, which surfaces as the TableView's panel title.
- **`rules = "ENUM"` should not be a `LOOKUP` in disguise.** When the value list is small and known at config time, use `ENUM`. When the list comes from a table that changes at runtime, use `LOOKUP`. The cell renders the same — the input editor changes (static vs. live).
- **A column with no `dd` still works.** The grid renders the raw cursor type. Use `dd` when there is a real reason: a localized label, a boolean / enum / lookup rule, a non-default format.
