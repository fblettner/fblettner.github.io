---
title: Dictionary
description: "The dictionary defines each data item once — label, format, rule, default, translations — and every query column that references it inherits that definition. Entries, enums, lookups, sequences and framework enums, shared or per connector, edited from Settings → Dictionary."
keywords: [Liberty Next, dictionary, entries, enums, lookups, sequences, labels, formats, rules, BOOLEAN, ENUM, LOOKUP, SEQUENCE, LOGIN, SYSDATE, PASSWORD, translations, scan a table]
---

# Dictionary

The **dictionary** defines each data item once: its label, its format, its rule (Boolean, list of values, lookup, sequence…), its default value and its translations. A query column that references an entry inherits that definition, so the same item reads the same way on every screen, chart and dashboard.

It is edited from **Settings → Dictionary**, which holds five kinds of records:

| Tab | Holds |
|---|---|
| **Entries** | The data items: label, format, rule, default, translations. |
| **Enums** | Fixed lists of codes and labels, for the `ENUM` rule. |
| **Lookups** | Queries that turn a code into a label, for the `LOOKUP` rule. |
| **Sequences** | Queries that return the next number, for the `SEQUENCE` rule. |
| **Framework** | Overrides of the lists the builders offer (formats, rules, datasource types…). |

---

## At a glance

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dic-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dic-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dic-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dic-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="410" rx="14" fill="url(#dic-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="45" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Scope:</text>
  <rect x="286" y="32" width="48" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="310.0" y="44.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Shared</text>
  <rect x="340" y="32" width="43" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="361.5" y="44.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sales</text>
  <rect x="391" y="29" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="403.0" y="43.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="650" y="29" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="694.5" y="43.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Scan a table</text>
  <rect x="745" y="29" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="772.5" y="43.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Export</text>
  <rect x="806" y="29" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="836.5" y="43.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Discard</text>
  <rect x="873" y="29" width="44" height="22" rx="5" fill="url(#dic-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="895.0" y="43.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="240" y="64" width="326" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="65" width="61" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="271.5" y="79.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Entries</text>
  <line x1="303" y1="69" x2="303" y2="83" stroke="#334155" strokeWidth="1"/>
  <text x="329.0" y="79.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Enums</text>
  <line x1="355" y1="69" x2="355" y2="83" stroke="#334155" strokeWidth="1"/>
  <text x="386.5" y="79.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Lookups</text>
  <line x1="418" y1="69" x2="418" y2="83" stroke="#334155" strokeWidth="1"/>
  <text x="455.0" y="79.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Sequences</text>
  <line x1="492" y1="69" x2="492" y2="83" stroke="#334155" strokeWidth="1"/>
  <text x="529.0" y="79.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Framework</text>
  <rect x="870" y="64" width="90" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="915.0" y="78.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add entry</text>
  <line x1="240" y1="98" x2="960" y2="98" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="108" width="220" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="116" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="130.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">filter 4…</text>
  <rect x="246" y="144" width="208" height="40" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="256" y="158" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">CUSTOMER_STATUS</text>
  <text x="256" y="174" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Customer status</text>
  <text x="256" y="202" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">DUE_DATE</text>
  <text x="256" y="218" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Due date</text>
  <text x="256" y="246" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">INVOICE_AMOUNT</text>
  <text x="256" y="262" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Invoice amount</text>
  <text x="256" y="290" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">IS_ACTIVE</text>
  <text x="256" y="306" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Active</text>
  <rect x="388" y="278" width="58" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="417.0" y="290.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">override</text>
  <text x="476" y="122" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">CUSTOMER_STATUS</text>
  <rect x="736" y="108" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="777.5" y="122.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Find usages</text>
  <rect x="825" y="108" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="852.5" y="122.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Rename</text>
  <rect x="886" y="108" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="911.0" y="122.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Clone</text>
  <rect x="476" y="138" width="268" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="507.5" y="153.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <rect x="540" y="139" width="44" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="562.0" y="153.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Rule</text>
  <line x1="585" y1="143" x2="585" y2="157" stroke="#334155" strokeWidth="1"/>
  <text x="630.5" y="153.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Translations</text>
  <line x1="676" y1="143" x2="676" y2="157" stroke="#334155" strokeWidth="1"/>
  <text x="710.0" y="153.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Advanced</text>
  <text x="476" y="193" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Rules</text>
  <rect x="596" y="178" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="192.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">LOOKUP ▾</text>
  <text x="476" y="225" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Rules values</text>
  <rect x="596" y="210" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="224.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">CUSTOMER_STATUSES ▾</text>
  <text x="476" y="257" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">False value</text>
  <rect x="596" y="242" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="256.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"> </text>
  <text x="476" y="289" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Default</text>
  <rect x="596" y="274" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="288.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">A</text>
  <text x="476" y="321" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Justify</text>
  <rect x="596" y="306" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="320.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">— ▾</text>
  <text x="476" y="353" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Size</text>
  <rect x="596" y="338" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="352.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"> </text>
  <text x="476" y="385" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Lookup params</text>
  <rect x="596" y="370" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="384.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">TYPE = CUSTOMER</text>
  <rect x="10" y="30" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Scope</text>
  <text x="20" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shared, or one per connector</text>
  <line x1="210" y1="47.0" x2="290" y2="38" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="10" y="120" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Five tabs</text>
  <text x="20" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">entries, enums, lookups…</text>
  <line x1="210" y1="137.0" x2="240" y2="76" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="10" y="250" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Entry keys</text>
  <text x="20" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">label shown underneath</text>
  <line x1="210" y1="267.0" x2="250" y2="250" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Toolbar</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">scan a table, export, save</text>
  <line x1="1000" y1="47.0" x2="944" y2="38" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="1000" y="150" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rule tab</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rule, its value, default</text>
  <line x1="1000" y1="167.0" x2="740" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="1000" y="330" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lookup params</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">values for the query's :params</text>
  <line x1="1000" y1="347.0" x2="928" y2="381" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
</svg>

---

## Scopes \{#scopes\}

The **Scope** chips at the top choose which part of the dictionary is shown:

- **Shared** — the entries every connector can use.
- **One scope per connector** — entries, enums, lookups and sequences that only that connector's queries see. The **+** button adds a scope for an existing connector.

A query of the `sales` connector looks for an entry in the `sales` scope first, then in the shared scope. Two applications can therefore define the same key (`STATUS`) differently without clashing. The **Framework** tab is shared only.

---

## How a column uses an entry \{#column-reference\}

A column of a query picks up the entry whose key matches its name (`CUSTOMER_STATUS`), or the entry named in its `dd` field when the names differ (an empty `dd` opts out). A label or format set on the column itself takes precedence over the entry's. See [Connectors → Schema discovery and column hints](./connectors.md#schema-discovery-and-column-hints).

On a screen, a column can also switch off the rule it inherits by setting the rule `DISABLED` — see [Rules](#rules).

---

## Entries \{#entries\}

The left-hand list shows each entry's key with its label underneath, and a filter field. Entry keys are written in upper case. The form on the right is split into tabs:

| Tab | Field | Effect |
|---|---|---|
| General | **Label** | The default label, used when no translation matches the user's language. |
| General | **Format** | How the value is displayed and entered — see [Formats](#formats). |
| Rule | **Rules** | The rule applied to the item — see [Rules](#rules). |
| Rule | **Rules values** | The rule's argument: the true value for `BOOLEAN`, the enum for `ENUM`, the lookup for `LOOKUP`, the sequence for `SEQUENCE`. The list changes with the rule. |
| Rule | **False value** | `BOOLEAN` only: the value written when the box is unticked. Blank infers it from the true value (`Y` → `N`, `1` → `0`, `true` → `false`); any other true value writes NULL. |
| Rule | **Default** | The initial value when a new row is added. |
| Rule | **Justify** | For fixed-width character columns: `right_blank` (right-aligned, padded with spaces) or `right_zero` (right-aligned, padded with zeros). Applied to the written values and to the keys of the WHERE clause. Blank = left-aligned. |
| Rule | **Size** | The stored width of the item, used with **Justify** when the physical column is wider. |
| Rule | **Lookup params** | Fixed values for the `:params` of the lookup's query (e.g. `TYPE = CUSTOMER`). The keys offered are the parameters the lookup declares. |
| Translations | one line per language | The label in that language. |
| Advanced | **Override** | Marks the entry as a local customisation: an upgrade package does not overwrite it. |

The record bar offers **Find usages**, **Rename**, **Clone** and **Delete**. Renaming an entry, a lookup or a sequence updates its references in the other configuration files (screens, connectors, dictionary) and reloads; it asks to save pending changes first.

### Formats \{#formats\}

| Format | Displayed as |
|---|---|
| `text`, `textarea` | Text, on one line or several. |
| `number`, `integer`, `decimal`, `currency` | A number. |
| `date`, `datetime`, `timestamp` | A date, with or without time. |
| `jdedate`, `jdetime` | A JD Edwards date (CYYDDD) or time (HHMMSS), shown as a regular date or time. |
| `boolean` | A tick or a cross. |
| `password` | A masked value. |
| `email`, `url`, `color` | Text, shown as entered. |

The **Framework** tab can add values to this list.

### Rules \{#rules\}

| Rule | Effect |
|---|---|
| `BOOLEAN` | The value shows as a tick or a cross, and the form shows a check box. **Rules values** gives the true value (`Y`, `1`, `01`, `true`, `T`); **False value** the other one. |
| `ENUM` | The code shows with its label from the enum named in **Rules values**; the form offers the enum's values. |
| `LOOKUP` | The code shows with its label from the lookup named in **Rules values**; the form offers the lookup's rows in a searchable list. |
| `SEQUENCE` | On insert, the server fills the column with the next number of the sequence named in **Rules values**, inside the same transaction. |
| `LOGIN` | On every insert or update, the server writes the signed-in user's name, in upper case, whatever the form sent. The form shows it already filled when a row is added. |
| `SYSDATE` | On insert or update, the server writes the current date and time (server local time) when no value was sent. The form shows today's date when a row is added. |
| `PASSWORD` | On write, the server encrypts the value with the master key (`ENC:…`) so that it can be decrypted when used — for connection passwords stored in a table. A blank password on update leaves the stored value unchanged. Pair it with the `password` format to mask the field. |
| `DEFAULT` | On insert or update, the **Default** value is written when the column comes empty. |
| `DISABLED` | Set on a screen column: cancels the rule inherited from the entry for that screen (for example an import screen whose rows already carry their dates). |

The server-side rules (`SEQUENCE`, `LOGIN`, `SYSDATE`, `PASSWORD`, `DEFAULT`) apply to every write through the query — form, grid editing, API — not only to the form. A writable query can also stamp values explicitly with tokens such as `{{LOGIN}}` or `{{SYSDATE}}` — see [Parameter binding](./build/queries/parameter-binding.md).

### Audit columns \{#form-layer-defaults\}

A rule applies to every write whose query binds the column:

| Column | Rule | Condition |
|---|---|---|
| `UPDATED_BY` | `LOGIN` | — |
| `UPDATED_AT` | `SYSDATE` | The column must come empty: keep it out of the dialog. |
| `CREATED_BY`, `CREATED_AT` | `LOGIN`, `SYSDATE` | Only if the update query does not write them — otherwise each update would replace them. |
| `ID` | `SEQUENCE` | When the database does not number the rows itself. |

The `{{LOGIN}}` / `{{SYSTIMESTAMP}}` tokens written in the insert and update queries are the simplest way to stamp these columns — see [Audit trail](./cookbook/audit-trail.md).

---|---|
| `CREATED_BY`, `UPDATED_BY` | `LOGIN` |
| `CREATED_AT`, `UPDATED_AT` | `SYSDATE` |
| `ID` | `SEQUENCE` (when the database does not number the rows itself) |

These columns need not appear in the form: the server fills them on every write, and the browser cannot change the user name.

---

## Enums \{#enums\}

An enum is a fixed list of codes, for values known in advance (`L` / `M` / `H` for a priority).

| Field | Effect |
|---|---|
| **Label** | The name of the list. |
| **Values** | One line per code: **Value** (the stored code), **Label** (the text shown), and **Translations** of the label. |
| **Override** | As for entries. |

An entry uses it with **Rules** = `ENUM` and **Rules values** = the enum's id.

---

## Lookups \{#lookups\}

A lookup is a query whose rows turn a code into a label — for values held in a table (statuses, countries, users).

| Field | Effect |
|---|---|
| **Description** | What the lookup returns. |
| **Connector** | The connector of the query. Blank uses the connector of the column that references it. |
| **Query** | The query returning the codes and labels. Buttons next to it edit the query, clone it, create one, or **generate** it from a table. |
| **Value** | The result column holding the code. |
| **Label** | The result column shown instead of the code. |
| **Union sources** | Further queries, possibly on other connectors or databases, whose rows are added to the list. Each must return the same columns as the main query. |
| **Key columns** | Columns that make the code unique when the same code has different labels (a code per company, for instance): the grid matches them against the row's columns of the same name. |
| **Return params** | Columns that a screen column can copy into other fields of the form when a row is picked. |
| **Display fields** | Extra columns shown next to the code and label in the list, to tell similar rows apart. |
| **Filter fields** | Display fields that get filter chips at the top of the list. |
| **Override** | As for entries. |

The lookup's query declares its own `:params`; their values come from the entry's **Lookup params**, or from the screen column. Cascading lists are built on the screen — see [Sequences and lookups](./build/queries/sequences-and-lookups.md).

---

## Sequences \{#sequences\}

A sequence is a query that returns the next number, typically `SELECT COALESCE(MAX(id), 0) + 1 FROM invoices`.

| Field | Effect |
|---|---|
| **Description** | What the sequence numbers. |
| **Connector** | The connector of the query. Blank uses the connector that fires it. |
| **Query** | The query returning the next number. Its `:params` take their values from the row being inserted. |
| **Dd id** | Fires the sequence for every column whose entry has this key, even without the `SEQUENCE` rule. Blank limits it to the entries pointing at it. |
| **Params** | The parameters the query expects — for information. |
| **Override** | As for entries. |

The sequence only fires on insert, inside the insert's transaction.

---

## Framework \{#framework\}

The builders' drop-down lists (formats, rules, datasource types, HTTP methods, column alignments…) come from lists shipped with the framework. **Override framework enum** copies one of them here to change it: the copy replaces the shipped list. Removing the override brings back the shipped values.

---

## Scan a table \{#scan-a-table\}

**Scan a table** creates entries from a real table instead of typing them one by one. The *Generate dictionary items* dialog asks for:

- **Connector** — the connector to read;
- **Store under (app)** — the scope the entries go to (the connector's by default);
- **Table to scan**;
- **JD Edwards connector** — strips the 2-character table prefix to reach the shared data item, and reads the JD Edwards data dictionary.

**Scan** lists one row per column. Columns that already have an entry are greyed out and marked *(exists)*; they are never overwritten. Missing ones are ticked. Each row can be adjusted before it is added:

| Column | Content |
|---|---|
| **Label** | Filled from the JD Edwards data dictionary on a JD Edwards connector; blank otherwise. |
| **Format** | Inferred from the column's SQL type. |
| **Rule** / **Rule value** | An optional rule and its argument. |
| **Lookup params** | Values for a lookup's parameters (`TYPE=CUSTOMER`). |
| **Default** | A default value. |
| **Source** | Where the proposal comes from. |

**Add N item(s)** writes the ticked entries into the chosen scope and reloads the configuration. The [Screen Creation Assistant](./build/screen-assistant.md) runs the same scan in its *Dictionary* step.

---

## Export \{#export\}

**Export** downloads `dictionary_entries.xlsx`: one row per entry, every scope included, with its scope, key, label, format, rule, rule value, false value and default — handy to compare with the data dictionary of the source application.

---

## Saving

**Save** checks every entry, enum, lookup and sequence, writes the file and reloads the configuration: screens show the new labels on their next refresh. **Discard** drops the unsaved changes. Settings is open to superusers only.

Translated labels follow the user's language; how it is chosen is described in [Translations](./apps/i18n.md).

---

## What's next

- [Connectors](./connectors.md) — the queries whose columns use the dictionary.
- [Sequences and lookups](./build/queries/sequences-and-lookups.md) — build the queries behind them.
- [Screens → Columns](./build/screens/columns.md) — per-screen settings on top of the entry.
- [Form conditions](./form-conditions.md) — show, require or lock a field depending on other values.
