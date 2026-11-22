---
title: Dictionary
description: "The dictionary defines each data item once — label, format, rule, default, translations — and every query column that references it inherits that definition. Entries, enums, lookups, sequences and framework enums, shared or per connector, edited from Liberty Next → Data → Dictionary."
keywords: [Liberty Next, dictionary, entries, enums, lookups, sequences, labels, formats, rules, BOOLEAN, ENUM, LOOKUP, SEQUENCE, LOGIN, SYSDATE, PASSWORD, POOL, translations, scan a table]
---

# Dictionary

The **dictionary** defines each data item once: its label, its format, its rule (Boolean, list of values, lookup, sequence…), its default value and its translations. A query column that references an entry inherits that definition, so the same item reads the same way on every screen, chart and dashboard.

It is edited from **Liberty Next → Data → Dictionary**, which holds five kinds of records:

| Tab | Holds |
|---|---|
| **Entries** | The data items: label, format, rule, default, translations. |
| **Enums** | Fixed lists of codes and labels, for the `ENUM` rule. |
| **Lookups** | Queries that turn a code into a label, for the `LOOKUP` rule. |
| **Sequences** | Queries that return the next number, for the `SEQUENCE` rule. |
| **Framework** | Overrides of the lists the builders offer (formats, rules, datasource types…). |

---

## At a glance

<svg viewBox="0 0 1320 520" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dic-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dic-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dic-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dic-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="10" width="880" height="492" rx="14" fill="url(#dic-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Dictionary</text>
  <rect x="717" y="32" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="761.5" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Scan a table</text>
  <rect x="812" y="32" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="839.5" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Export</text>
  <rect x="873" y="32" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="903.5" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Discard</text>
  <rect x="940" y="32" width="44" height="22" rx="5" fill="url(#dic-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="962.0" y="46.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="990" y="32" width="94" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1037.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Reload config</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="238" y="96" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Connector:</text>
  <rect x="298" y="82" width="50" height="22" rx="11" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="323.0" y="97" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Shared</text>
  <rect x="354" y="82" width="35" height="22" rx="11" fill="rgba(74,158,255,0.15)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="371.5" y="97" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="395" y="82" width="45" height="22" rx="11" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="417.5" y="97" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">sales</text>
  <rect x="446" y="82" width="77" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="484.5" y="96.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add scope</text>
  <rect x="238" y="116" width="87" height="24" rx="5" fill="rgba(74,158,255,0.15)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="281.5" y="132" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Entries  128</text>
  <text x="362.0" y="132" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Enums  4</text>
  <text x="437.5" y="132" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Lookups  6</text>
  <text x="523.5" y="132" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Sequences  2</text>
  <text x="614.5" y="132" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Framework  0</text>
  <rect x="999" y="117" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1040.5" y="131.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add entry</text>
  <line x1="238" y1="148" x2="1082" y2="148" stroke="#1f2937" strokeWidth="1"/>
  <rect x="238" y="158" width="250" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="166" width="234" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="180.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕  filter 128…</text>
  <rect x="246" y="196" width="234" height="40" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="212" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <text x="256" y="226" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Customer number</text>
  <rect x="428" y="208" width="40" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="448.0" y="219.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">number</text>
  <rect x="246" y="242" width="234" height="40" rx="6" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="256" y="258" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">CUSTOMER_STATUS</text>
  <text x="256" y="272" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Customer status</text>
  <rect x="428" y="254" width="40" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="448.0" y="265.2" fill="#c084fc" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">LOOKUP</text>
  <rect x="246" y="288" width="234" height="40" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="304" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">DUE_DATE</text>
  <text x="256" y="318" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Due date</text>
  <rect x="437" y="300" width="31" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="452.5" y="311.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">date</text>
  <rect x="246" y="334" width="234" height="40" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="350" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">IS_ACTIVE</text>
  <text x="256" y="364" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Active</text>
  <rect x="423" y="346" width="45" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="445.5" y="357.2" fill="#c084fc" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">BOOLEAN</text>
  <rect x="374" y="346" width="45" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="396.5" y="357.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">boolean</text>
  <rect x="246" y="380" width="234" height="40" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="396" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">UPDATED_BY</text>
  <text x="256" y="410" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Updated by</text>
  <rect x="432" y="392" width="36" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="450.0" y="403.2" fill="#c084fc" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">LOGIN</text>
  <rect x="246" y="426" width="234" height="40" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="442" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">UPDATED_AT</text>
  <text x="256" y="456" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Updated at</text>
  <rect x="423" y="438" width="45" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="445.5" y="449.2" fill="#c084fc" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SYSDATE</text>
  <rect x="388" y="438" width="31" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="403.5" y="449.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">date</text>
  <rect x="500" y="158" width="582" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="512" y="180" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Customer status</text>
  <text x="614" y="180" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">crm · CUSTOMER_STATUS</text>
  <rect x="512" y="190" width="92" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="558.0" y="204.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Find usages  3</text>
  <rect x="609" y="190" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="635.0" y="204.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Rename</text>
  <rect x="666" y="190" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="689.5" y="204.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Clone</text>
  <rect x="718" y="190" width="52" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="744.0" y="204.5" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <text x="542.5" y="238" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <rect x="577" y="222" width="45" height="24" rx="5" fill="rgba(74,158,255,0.15)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="599.5" y="238" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Rule</text>
  <text x="662.0" y="238" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Advanced</text>
  <text x="737.0" y="238" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Translations</text>
  <line x1="512" y1="252" x2="1070" y2="252" stroke="#1f2937" strokeWidth="1"/>
  <text x="512" y="270" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KIND OF FIELD</text>
  <rect x="512" y="276" width="558" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="521" y="290.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">LOOKUP</text>
  <text x="566" y="290.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">A list read from a table</text>
  <text x="1056.0" y="290.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="512" y="310" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">What the field is: free text, a list, a yes / no box, a number given automatically… <tspan fill="#4a9eff">more</tspan></text>
  <text x="512" y="330" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIST FROM A TABLE</text>
  <rect x="512" y="336" width="558" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="521" y="350.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">CUSTOMER_STATUSES</text>
  <text x="1056.0" y="350.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="512" y="378" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DEFAULT VALUE</text>
  <rect x="512" y="384" width="273" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="521" y="398.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">A</text>
  <text x="797.0" y="378" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SENSITIVE DATA</text>
  <rect x="797" y="389" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="814" y="398" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="512" y="436" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIST PARAMETERS</text>
  <rect x="512" y="442" width="558" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="521" y="456.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">TYPE = CUSTOMER</text>
  <rect x="20" y="66" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Scopes</text>
  <text x="30" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shared, or one per connector</text>
  <line x1="200" y1="83.0" x2="238" y2="93" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="20" y="114" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="129" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Five tabs</text>
  <text x="30" y="142" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with their counts</text>
  <line x1="200" y1="131.0" x2="238" y2="128" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="20" y="162" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="177" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filter</text>
  <text x="30" y="190" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">name, label, format or rule</text>
  <line x1="200" y1="179.0" x2="246" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">An entry's line</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its format and its rule</text>
  <line x1="200" y1="253.0" x2="246" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="1120" y="34" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="49" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Page buttons</text>
  <text x="1130" y="62" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">scan, export, save</text>
  <line x1="1120" y1="51.0" x2="1084" y2="43" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="1120" y="180" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Record bar</text>
  <text x="1130" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">usages, rename, clone, delete</text>
  <line x1="1120" y1="197.0" x2="1070" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="1120" y="250" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rule tab</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">kind of field, its list, default…</text>
  <line x1="1120" y1="267.0" x2="622" y2="234" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="1120" y="430" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="445" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">List parameters</text>
  <text x="1130" y="458" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">values for the list's :params</text>
  <line x1="1120" y1="447.0" x2="1070" y2="453" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
</svg>

---

## The list \{#list\}

Each kind has its tab — **Entries**, **Enums**, **Lookups**, **Sequences**, **Framework** — with the number of records of the scope. A record's line says what it is without opening it: an entry shows its format and its rule (the rule's target in the tooltip), an enum its number of values, a lookup or a sequence the other connector it reads from. The filter finds a record by its name, its label or one of those: type `lookup` to see every entry ruled by a lookup. On the picked record, **Find usages** says in how many places it is used. **Scan a table**, **Export**, **Discard** and **Save** are in the page header.

---

## Scopes \{#scopes\}

The **Connector:** chips at the top choose which part of the dictionary is shown:

- **Shared** — the entries every connector can use.
- **One scope per connector** — entries, enums, lookups and sequences that only that connector's queries see. **＋ Add scope** adds a scope for an existing connector.

A query of the `sales` connector looks for an entry in the `sales` scope first, then in the shared scope. Two applications can therefore define the same key (`STATUS`) differently without clashing. The **Framework** tab is shared only.

---

## How a column uses an entry \{#column-reference\}

A column of a query picks up the entry whose key matches its name (`CUSTOMER_STATUS`), or the entry named in its `dd` field when the names differ (an empty `dd` opts out). A label or format set on the column itself takes precedence over the entry's. See [Connectors → Schema discovery and column hints](./connectors.md#schema-discovery-and-column-hints).

On a screen, a column can also switch off the kind of field it inherits with *Free text, whatever the dictionary says* — see [Kinds of field](#rules).

---

## Entries \{#entries\}

The left-hand list shows each entry's key with its label underneath, and a filter field. Entry keys are written in upper case. The picked entry opens on the right under its label, followed by its scope and its key (*Customer status* `crm · CUSTOMER_STATUS`), its form split into tabs. Each field has one short sentence of help under it; **more** opens the longer explanation.

| Tab | Field | Effect |
|---|---|---|
| General | **Label** | The default label, used when no translation matches the user's language. |
| General | **Format** | How the value is displayed and entered — see [Formats](#formats). |
| General | **Decimals** | For `jdenumber`, the implied decimal places of the stored integer; for the other numeric formats, the places shown (0 to 9). |
| Rule | **Kind of field** | What the field is, in plain words — see [Kinds of field](#rules). |
| Rule | the kind's own field | Shown only for a kind that needs one, under the name of what it is for that kind: **Value that means yes**, **List of values**, **List from a table**, **Numbering rule**, **Only the databases of**. The list changes with the kind. |
| Rule | **Value for no** | *A yes / no box* only: the value written when the box is unticked. Blank infers it from the value that means yes (`Y` → `N`, `1` → `0`, `true` → `false`); any other value writes NULL. |
| Rule | **Default value** | The initial value when a new row is added. |
| Rule | **Sensitive data** | Marks the item as sensitive data — see [Sensitive data](#sensitive). |
| Rule | **List parameters** | *A list read from a table* only: fixed values for the `:params` of the list's query (e.g. `TYPE = CUSTOMER`). The keys offered are the parameters the list declares. |
| Advanced | **Align when saving** | For fixed-width character columns: right-aligned and padded with spaces, or with zeros. Applied to the written values and to the keys of the WHERE clause. Blank = left-aligned. |
| Advanced | **Stored width** | The stored width of the item, used with **Align when saving** when the physical column is wider. |
| Advanced | **Keep on upgrade** | Marks the entry as a local customisation: an upgrade package does not overwrite it. |
| Translations | one line per language | The label in that language. |

The record bar offers **Find usages**, **Rename**, **Clone** and **Delete**. Renaming an entry, a lookup or a sequence updates its references in the other configuration files (screens, connectors, dictionary) and reloads; it asks to save pending changes first.

### Formats \{#formats\}

| Format | Displayed as |
|---|---|
| `text`, `textarea` | Text, on one line or several. |
| `number`, `integer`, `decimal`, `currency` | A number. |
| `date`, `datetime`, `timestamp` | A date, with or without time. The form, the bulk edit and the filters offer the application's date picker: a field where the date can be typed (an impossible day goes back to the previous value) and a month calendar with *Today* and *Clear*, whose title opens a month and year chooser. A `datetime` or `timestamp` field adds a time field (`hh:mm` or `hh:mm:ss`). A value carrying its time zone (a PostgreSQL `timestamptz`) shows in the browser's local time; a value without a zone (Oracle `DATE`, JD Edwards dates) shows as stored. |
| `jdedate`, `jdetime` | A JD Edwards date (CYYDDD) or time (HHMMSS), shown as a regular date or time. |
| `jdenumber` | A JD Edwards amount stored without its decimal point: with **Decimals** = 2, the stored `12345` reads and is entered as `123.45`, and is written back as `12345`. Filters are typed in real units; the Data Explorer totals and detail rows are scaled the same way. The [scan](#scan-a-table) of a JD Edwards table fills the decimals from the data dictionary. |
| `boolean` | A tick or a cross. |
| `password` | A masked value. |
| `url` | A link opening in a new tab; the form's field gets a button that opens it. Only `http(s)` addresses become links (`www.…` gets `https://`). |
| `email` | A `mailto:` link; the form's field gets a button that opens it. Only a value shaped like an address becomes a link. |
| `color` | The code with a colour swatch beside it; in the form, the swatch opens the system colour picker. Hex codes and `rgb()` only. |

For `url`, `email` and `color`, any other value stays plain text, and sorting, filtering and export keep the raw value.

The **Framework** tab can add values to this list.

### Kinds of field \{#rules\}

**Kind of field** is one choice in plain words; the code stays shown beside it. No kind picked: a field typed freely.

| Kind of field | Code | Effect |
|---|---|---|
| *A yes / no box* | `BOOLEAN` | The value shows as a tick or a cross, and the form shows a check box. **Value that means yes** gives the true value (`Y`, `1`, `01`, `true`, `T`); **Value for no** the other one. |
| *A fixed list of values* | `ENUM` | The code shows with its label from the enum named in **List of values**; the form offers the enum's values. |
| *A list read from a table* | `LOOKUP` | The code shows with its label from the lookup named in **List from a table**; the form offers the lookup's rows in a searchable list. On a screen column, **New list from a table…** makes the lookup in one step — see [Columns](./build/screens/columns.md#list-from-table). |
| *A number given automatically* | `SEQUENCE` | On insert, the server fills the column with the next number of the sequence named in **Numbering rule**, inside the same transaction. |
| *The signed-in user* | `LOGIN` | On every insert or update, the server writes the signed-in user's name, in upper case, whatever the form sent. The form shows it already filled when a row is added. |
| *Today's date* | `SYSDATE` | On insert or update, the server writes the current date and time (server local time) when no value was sent. The form shows today's date when a row is added. |
| *A password (hidden, stored encrypted)* | `PASSWORD` | On write, the server encrypts the value with the master key (`ENC:…`) so that it can be decrypted when used — for connection passwords stored in a table. A blank password on update leaves the stored value unchanged. Pair it with the `password` format to mask the field. |
| *A database of this installation* | `POOL` | The field names a pool of the installation: wherever a list of values is drawn — grid, record form, filter —, it is a dropdown of the pools, so a setting that names a pool is picked, not typed. **Only the databases of** blank offers every pool; a SQL connector there offers only the pools it may run on — its own first, then its other environments. See [Pools](./connectors.md#pools). |
| *Free text; left empty, it takes its default value* | `DEFAULT` | On insert or update, the **Default value** is written when the column comes empty. |
| *Free text, whatever the dictionary says* | `DISABLED` | Set on a screen column: cancels the kind inherited from the entry for that screen (for example an import screen whose rows already carry their dates). |

The kinds applied by the server (`SEQUENCE`, `LOGIN`, `SYSDATE`, `PASSWORD`, `DEFAULT`) apply to every write through the query — form, grid editing, API — not only to the form. A writable query can also stamp values explicitly with tokens such as `{{LOGIN}}` or `{{SYSDATE}}` — see [Parameter binding](./build/queries/parameter-binding.md).

### Sensitive data \{#sensitive\}

**Sensitive data**, in the *Rule* tab of an entry, says the item holds sensitive data — a person's name, an e-mail address, a bank identifier. Where the installation hides sensitive data from the AI assistant, every column carrying the item is left out of what the assistant is given, in the drawer and through MCP. It changes nothing in the screens. A screen column has the same flag, for a column without an item. See [Sensitive data](./ai-data-sent.md#sensitive).

### Audit columns \{#form-layer-defaults\}

A rule applies to every write whose query binds the column:

| Column | Rule | Condition |
|---|---|---|
| `UPDATED_BY` | `LOGIN` | — |
| `UPDATED_AT` | `SYSDATE` | The column must come empty: keep it out of the dialog. |
| `CREATED_BY`, `CREATED_AT` | `LOGIN`, `SYSDATE` | Only if the update query does not write them — otherwise each update would replace them. |
| `ID` | `SEQUENCE` | When the database does not number the rows itself. |

The `{{LOGIN}}` / `{{SYSTIMESTAMP}}` tokens written in the insert and update queries are the simplest way to stamp these columns — see [Audit trail](./cookbook/audit-trail.md).

These columns need not appear in the form: the server fills them on every write, and the browser cannot change the user name.

---

## Enums \{#enums\}

An enum is a fixed list of codes, for values known in advance (`L` / `M` / `H` for a priority).

| Field | Effect |
|---|---|
| **Label** | The name of the list. |
| **Values** | One line per code: **Code** (the stored code), **Label** (the text shown in its place), and **Translations** of the label. |
| **Keep on upgrade** | As for entries. |

An entry uses it with **Kind of field** = *A fixed list of values* and **List of values** = the enum.

---

## Lookups \{#lookups\}

A lookup is a query whose rows turn a code into a label — for values held in a table (statuses, countries, users).

| Field | Effect |
|---|---|
| **Description** | What the lookup returns. |
| **Application** | The application whose query feeds the list. Blank uses the one of the column that references it. |
| **Query** | The query returning the codes and labels. Buttons next to it edit the query, clone it, create one, or **generate** it from a table. |
| **Code column** | The result column holding the code. |
| **Label column** | The result column shown instead of the code. |
| **More sources** | Further queries, possibly on other connectors or databases, whose rows are added to the list. Each must return the same columns as the main query. |
| **Key columns** | Columns that make the code unique when the same code has different labels (a code per company, for instance): the grid matches them against the row's columns of the same name. |
| **Columns handed back** | Columns that a screen column can copy into other fields of the form when a row is picked. |
| **Extra columns shown** | Extra columns shown next to the code and label in the list, to tell similar rows apart. |
| **Columns to filter on** | Extra columns that get filter chips at the top of the list. |
| **Keep on upgrade** | As for entries. |

The lookup's query declares its own `:params`; their values come from the entry's **List parameters**, or from the screen column. Cascading lists are built on the screen — see [Sequences and lookups](./build/queries/sequences-and-lookups.md).

---

## Sequences \{#sequences\}

A sequence is a query that returns the next number, typically `SELECT COALESCE(MAX(id), 0) + 1 FROM invoices`.

| Field | Effect |
|---|---|
| **Description** | What the sequence numbers. |
| **Application** | The application whose query gives the number. Blank uses the one that fires it. |
| **Query** | The query returning the next number. Its `:params` take their values from the row being inserted. |
| **Dictionary item** | Fires the sequence for every column carrying this item, even without the kind *A number given automatically*. Blank limits it to the entries pointing at it. |
| **Parameters** | The parameters the query expects — for information. |
| **Keep on upgrade** | As for entries. |

The sequence only fires on insert, inside the insert's transaction.

---

## Framework \{#framework\}

The builders' drop-down lists (formats, kinds of field, datasource types, HTTP methods, column alignments…) come from lists shipped with the framework. **Override framework enum** copies one of them here to change it: the copy replaces the shipped list. Removing the override brings back the shipped values.

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

**Save** checks every entry, enum, lookup and sequence, writes the file and reloads the configuration: screens show the new labels on their next refresh. A refused save writes nothing and lists what to correct, each line with **Open** to go to the entry, enum, lookup or sequence in question — see [Saving](./configuration/settings-ui.md#save). **Discard** drops the unsaved changes. Settings is open to superusers only.

Translated labels follow the user's language; how it is chosen is described in [Translations](./apps/i18n.md).

---

## What's next

- [Connectors](./connectors.md) — the queries whose columns use the dictionary.
- [Sequences and lookups](./build/queries/sequences-and-lookups.md) — build the queries behind them.
- [Screens → Columns](./build/screens/columns.md) — per-screen settings on top of the entry.
- [Form conditions](./form-conditions.md) — show, require or lock a field depending on other values.
