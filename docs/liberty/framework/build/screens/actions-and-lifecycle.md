---
title: Actions and lifecycle
description: "The Actions tab — dialog hooks (on_load / on_save / on_cancel), toolbar buttons, row hooks (on_insert / on_update / on_delete / on_duplicate), the row menu, the action types with their param_binds, prompts, chains, translations and services."
keywords: [Liberty Next, actions, on_load, on_save, on_cancel, on_insert, on_update, on_delete, on_duplicate, run_query, call_api, call_plugin, call_action, navigate, chain, param_binds, prompt_fields]
---

# Actions and lifecycle

A screen with a grid and a dialog covers the standard read and write flow. **Actions** and **lifecycle hooks** add everything else: run a query from a button, open another view from a row, call an API or a plugin after a save, refresh the grid after a delete.

They are set on the **Actions** stage of the [Screen Designer](./overview.md#designer), in its two sections **Actions** and **Row menu**, with the same action shapes everywhere. **Actions** lists the hooks and toolbar buttons as folded groups, each with its count; a group opens on its actions, one per line (id, type, label, number of steps), with **Add action** below. **Row menu** lists the entries of the row's context menu the same way.

---

## Where actions fire \{#groups\}

<svg viewBox="0 0 1320 632" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="acl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="acl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="acl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="acl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="596" rx="14" fill="url(#acl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Screen Designer ·</text>
  <text x="349.1008" y="46" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">[screens.crm.customers]</text>
  <rect x="1017" y="32" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1049.0" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="987" y="32" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="999.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤡</text>
  <line x1="220" y1="64" x2="1100" y2="64" stroke="#1f2937" strokeWidth="1"/>
  <rect x="238.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="246.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="266.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT IS</text>
  <text x="246.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Customers</text>
  <line x1="367.0" y1="106.0" x2="380.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#acl-flow)"/>
  <rect x="381.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="389.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="409.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATA</text>
  <text x="389.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="389.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 save query(ies)</text>
  <line x1="510.0" y1="106.0" x2="523.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#acl-flow)"/>
  <rect x="524.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="532.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="552.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRID</text>
  <text x="532.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">6 column(s)</text>
  <text x="532.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 filter(s) · 1 view(s)</text>
  <line x1="653.0" y1="106.0" x2="666.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#acl-flow)"/>
  <rect x="667.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="675.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="695.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RECORD FORM</text>
  <text x="675.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">2 tab(s)</text>
  <text x="675.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">8 field(s)</text>
  <line x1="796.0" y1="106.0" x2="809.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#acl-flow)"/>
  <rect x="810.0" y="78" width="129.0" height="56" rx="8" fill="rgba(168,85,247,0.12)" stroke="#c084fc" strokeWidth="1.2"/>
  <rect x="818.0" y="86" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="838.0" y="97" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="818.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">1 toolbar action(s)</text>
  <text x="818.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">2 in the row menu · 1 on s…</text>
  <line x1="939.0" y1="106.0" x2="952.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#acl-flow)"/>
  <rect x="953.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="961.0" y="86" width="14" height="14" rx="3" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="981.0" y="97" fill="#fb923c" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTPUT</text>
  <text x="961.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">the grid's own export</text>
  <rect x="238" y="146" width="123" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="239" y="147" width="57" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="267.5" y="160.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Actions</text>
  <line x1="297" y1="151" x2="297" y2="163" stroke="#334155" strokeWidth="1"/>
  <text x="329.0" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Row menu</text>
  <text x="238" y="192" fill="#64748b" fontSize="8.2" fontFamily="system-ui, sans-serif">Dialog hooks — fire while the form is open (on_load / on_save / on_cancel)</text>
  <rect x="238" y="200" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="216.3" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="216.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">On load (action chain)</text>
  <text x="1070" y="216.3" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <rect x="238" y="231" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="247.3" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="247.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">On save (action chain)</text>
  <text x="1070" y="247.3" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <rect x="238" y="262" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="278.3" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="278.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">On cancel (action chain)</text>
  <text x="1070" y="278.3" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <text x="238" y="309" fill="#64748b" fontSize="8.2" fontFamily="system-ui, sans-serif">Toolbar — buttons above the table (run independently, no row context)</text>
  <rect x="238" y="317" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="333.3" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▾</text>
  <text x="264" y="333.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Screen actions</text>
  <text x="1070" y="333.3" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <rect x="250" y="346" width="820" height="34" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="367" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">▤</text>
  <text x="278" y="361" fill="#e2e8f0" fontSize="8.8" fontFamily="ui-monospace, monospace">export_selection</text>
  <text x="373.296" y="361" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">run_query · Export selection</text>
  <text x="278" y="374" fill="#64748b" fontSize="7.6" fontFamily="system-ui, sans-serif">1 step</text>
  <text x="1060" y="367" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <rect x="250" y="386" width="79" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="289.5" y="400.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add action</text>
  <text x="238" y="432" fill="#64748b" fontSize="8.2" fontFamily="system-ui, sans-serif">Row hooks — fire after a row is inserted / updated / deleted</text>
  <rect x="238" y="440" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="456.3" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="456.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">On insert (row hook)</text>
  <text x="1070" y="456.3" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <rect x="238" y="471" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="487.3" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="487.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">On update (row hook)</text>
  <text x="1070" y="487.3" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <rect x="238" y="502" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="518.3" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="518.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">On delete (row hook)</text>
  <text x="1070" y="518.3" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <rect x="238" y="533" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="549.3" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="549.3" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">On duplicate (row hook)</text>
  <text x="1070" y="549.3" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <line x1="220" y1="574" x2="1100" y2="574" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1027" y="584" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1054.5" y="598.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="954" y="584" width="65" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.5" y="598.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two sections</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Actions · Row menu</text>
  <line x1="200" y1="157.0" x2="238" y2="157" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="20" y="227" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="242" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dialog hooks</text>
  <text x="30" y="255" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">load · save · cancel</text>
  <line x1="200" y1="244.0" x2="238" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="20" y="313" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="328" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Toolbar buttons</text>
  <text x="30" y="341" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no row context</text>
  <line x1="200" y1="330.0" x2="238" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="20" y="467" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="482" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row hooks</text>
  <text x="30" y="495" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">after a write, grid or dialog</text>
  <line x1="200" y1="484.0" x2="238" y2="484" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="1120" y="227" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="242" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Count per list</text>
  <text x="1130" y="255" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a click opens the list</text>
  <line x1="1120" y1="244.0" x2="1074" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="1120" y="346" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="361" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One action per line</text>
  <text x="1130" y="374" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">id · type · label; › to edit</text>
  <line x1="1120" y1="363.0" x2="1064" y2="363" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="1120" y="529" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="544" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">On duplicate</text>
  <text x="1130" y="557" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">instead of on insert</text>
  <line x1="1120" y1="546.0" x2="1074" y2="546" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
</svg>

| Group | Lists | When they fire | `source` reads from |
|---|---|---|---|
| **Dialog hooks** | `on_load` | Once the dialog has loaded the row (edit) or seeded the defaults (add). | The form. |
| | `on_save` | After the dialog's main insert or update succeeds. | The form at save time. |
| | `on_cancel` | When the dialog is closed without saving, before it closes; an error keeps it open. | The form. |
| **Toolbar** | `actions` | Each entry is a button above the grid. | No row context; prompt values under `INPUT.<name>`. |
| **Row hooks** | `on_insert`, `on_update`, `on_delete` | After the write succeeds — from the dialog or from grid editing. | The new row, or the deleted row. |
| | `on_duplicate` | When a row duplicated with the dialog's **Duplicate** is saved, instead of `on_insert`. | The new row, and the source row under `SOURCE_<column>`. |
| **Row menu** *(own section)* | `row_menu` | Each entry is a menu item on a row: right-click, or the ⋯ handle at the start of the row. | The clicked row. |

Hooks run their list in order and stop at the first error, unless an action has **stop_on_error** off. A toolbar or row-menu entry runs as one action: to run several steps from one button, use a `chain`.

For a left click on a row, use the **row-click** settings of the *What it is* stage (`row_click_screen` with `row_click_binds`, or `row_click_route`).

---

## Action types \{#types\}

Every action has an **id** (unique in its list, also its key in a chain's context), a **label** (button caption), its label in the other languages ([Translations](#translations)) and **stop_on_error**.

| Type | What it does | Main fields |
|---|---|---|
| **`run_query`** | Runs a query of a connector, read or write. | `connector`, `query`, `param_binds`, `bind_result` |
| **`call_api`** | Calls an endpoint of an API connector. | `connector`, `endpoint`, `param_binds`, `bind_result` |
| **`call_plugin`** | Calls a server-side Python function (`module:function`), the same entry points Nomaflow runs as steps. | `callable`, `param_binds`, `bind_result` |
| **`call_action`** | Runs a [service](#shared) by its id. | `ref`, `param_binds` |
| **`navigate`** | Opens another view: a screen (`screen`) or a query (`to`), with `param_binds` passed as its parameters. | `connector`, `screen` or `to`, `param_binds` |
| **`open_url`** | Opens an external address — another application on the row's record. | `url`, `new_tab` |
| **`set_field`** | Writes a value into a form field. | `target`, `value` or `source` |
| **`confirm`** | Asks for confirmation; **Cancel** stops the chain. The message is filled like an `open_url` template (`{COLUMN}`, `{INPUT.x}`, built-ins), not encoded: `Reset the password of {INPUT.user} on #POOL#?`. | `message`, `confirm_label`, `cancel_label` |
| **`notify`** | Shows a message, filled the same way. | `message`, `tone` (`info` / `ok` / `warn` / `error`) |
| **`send_notification`** | Fires a notification rule of type *action* (e-mail, portal…). | `rule`, `param_binds` |
| **`refresh`** | Reloads the grid. | — |

`bind_result` keeps the rows (or the response) of the step in the chain's context, so that a later step reads them with `source = "<id>.first_row.<COLUMN>"`.

### Open an external address \{#open-url\}

An **`open_url`** action opens another application on the record at hand — the JD Edwards form of an address book entry, a ticket in a help desk. It can sit in a row menu, on the toolbar, in a dialog tab, behind a drill column or in a chain, and can ask for values first.

- **`url`** is a template: `{COLUMN}` takes the value of a column of the row, a field of the form, a value asked for, or a step of the chain — `{step.first_row.X}` —, encoded for an address; `#LOGIN_USER#` and the other built-ins are filled too. `https://helpdesk.example.com/tickets?customer={CUSTOMER_ID}`.
- An address that differs from one install to the next is written `#URL.NAME#` at the start: `#URL.JDE_WEB#/ShortcutLauncher?OID=P01012_W01012A&…`. Each install sets the address once, in [App → External addresses](../settings-app.md#external-urls); without it, the action opens nothing.
- **`new_tab`**: on by default; off, the address replaces the page.

Only `http://`, `https://` addresses and paths of this server are opened; anything else is refused when the configuration loads, and checked again on the filled address. A row menu whose only action is an `open_url` fires it from the row handle.

### The row handle and drill-downs \{#drill\}

A screen with row-menu actions shows a small handle at the start of every row, so the actions stay in reach on a wide table:

- with several actions, the handle (**⋯**, *Row actions*) opens the same menu as the right-click;
- with a single `navigate` action, the handle (a return arrow) fires it at once — its tooltip is the action's label.

**Link cells.** A column's **drill** setting (Liberty Next → Screens → Screens, stage *Grid*, column, tab *Display*) names a `navigate` action of the row menu: the value shows as a link that fires it for the row — the customer code opens the customer, with no menu to open. A screen whose row menu holds a single `navigate` action does it by itself on its first key column. A wrong action name is refused when the configuration loads.

**Where the target opens.** By default, a `navigate` action opens its target in a new tab. With **Drill-downs open inside the current tab** in [Liberty Next → Administer → App](../settings-app.md#display), it opens as a panel inside the current tab, over the grid: a breadcrumb names each level, **Back** returns to the one before, and the grid behind keeps its rows and filters. A drill from the panel nests the same way. An action decides for itself with `inline = true` (panel) or `inline = false` (new tab), set in `screens.toml`.

### Composite types

| Type | What it does |
|---|---|
| **`chain`** | A list of steps run in order, sharing one context. |
| **`if`** | Runs `then_steps` or `else_steps` depending on a condition: a `source`, an operator (`equals`, `not_equals`, `has_rows`, `no_rows`, `truthy`, `falsy`, `greater_than`, `less_than`) and a `value`. |
| **`loop`** | Runs `steps` once per item of a list taken from the context (typically the rows of an earlier step). |
| **`return`** | Copies values of the context back into the form's fields — at the end of a chain, to show computed values. |

**Wrap in chain** puts an existing action inside a `chain`, to add steps around it.

---

## Values passed to an action \{#binds\}

`run_query`, `call_api`, `call_plugin`, `call_action`, `navigate` and `send_notification` take a list of `param_binds`: for each parameter of the target, a fixed **value**, or a **source** read at call time — a column of the row, a form field, `INPUT.<name>`, `<step>.first_row.<COLUMN>`, or a built-in such as `#LOGIN_USER#` / `#SYSDATE#` — with an optional **default**. See [Parameter binding](../queries/parameter-binding.md).

### Prompt before running \{#prompt\}

`run_query`, `call_api`, `call_plugin`, `call_action`, `navigate` and `chain` can open a small form **before** they run:

| Field | Role |
|---|---|
| **prompt_fields** | The inputs to ask for — each with its name, label, dictionary entry, default, required / hidden / read-only flags and conditions. |
| **prompt_title** (and its translations) | The window's title; defaults to the action's label. |
| **prompt_cols** | Number of columns of the form (2 by default). |

The values entered are available as `INPUT.<name>` to the action and to every later step of the same chain. **Cancel** stops the chain without an error.

### The label in other languages \{#translations\}

The action's editor has three tabs under its target: **General** (id, label, stop on error), **Translations** and **Prompt**. **Translations** gives the label in each other language — a language picked in the list (`fr Français`), then its text; **+ add** for another. The label read by the user follows his language wherever the action shows: a row-menu entry, a toolbar or tab button, a step of a chain. A language with no line shows the label as written.

<svg viewBox="0 0 1200 483" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="aclt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="aclt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="aclt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="aclt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="445" rx="14" fill="url(#aclt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Row context menu</text>
  <rect x="936" y="32" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="948.0" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <line x1="220" y1="64" x2="980" y2="64" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="86" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">Row context menu</text>
  <text x="337.28" y="86" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">›  Show orders</text>
  <line x1="240" y1="94" x2="960" y2="94" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="112" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TYPE</text>
  <rect x="240" y="117" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="131.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="249" y="131.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">navigate</text>
  <text x="948" y="131.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="240" y="156" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TARGET TYPE</text>
  <rect x="240" y="161" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="175.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="249" y="175.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Screen</text>
  <text x="948" y="175.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="240" y="200" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SCREEN</text>
  <rect x="240" y="205" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="219.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="249" y="219.3" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">orders</text>
  <text x="285.992" y="219.3" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Orders</text>
  <text x="948" y="219.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="240" y="240" width="57" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="268.5" y="254.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <rect x="303" y="240" width="82" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="344.0" y="254.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Translations</text>
  <rect x="391" y="240" width="52" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="417.0" y="254.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Prompt</text>
  <line x1="240" y1="270" x2="960" y2="270" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="290" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TRANSLATIONS</text>
  <rect x="240" y="295" width="259" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="309.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="249" y="309.3" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">fr</text>
  <text x="264.664" y="309.3" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Français</text>
  <text x="487" y="309.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="505" y="295" width="427" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="515" y="309.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Afficher les commandes</text>
  <rect x="938" y="295" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="949.0" y="309.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="324" width="40" height="17" rx="4" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="3 2"/>
  <text x="249" y="336" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">+ add</text>
  <text x="240" y="353" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">The label per language (a row-menu entry, a button).</text>
  <text x="240" y="379" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Param binds</text>
  <rect x="240" y="389" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="403.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <rect x="448" y="389" width="76" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="467.0" y="403.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">val</text>
  <rect x="487" y="390" width="36" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="505.0" y="403.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">src</text>
  <rect x="530" y="389" width="430" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="540" y="403.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <line x1="220" y1="423" x2="980" y2="423" stroke="#1f2937" strokeWidth="1"/>
  <rect x="906" y="433" width="54" height="22" rx="5" fill="url(#aclt-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="933.0" y="447.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Close</text>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The action itself</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type and target</text>
  <line x1="200" y1="127.0" x2="240" y2="128" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aclt-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Translations tab</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">beside General and Prompt</text>
  <line x1="200" y1="253.0" x2="307" y2="251" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aclt-arrow)"/>
  <rect x="20" y="292" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="307" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Language</text>
  <text x="30" y="320" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one line per language</text>
  <line x1="200" y1="309.0" x2="240" y2="306" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aclt-arrow)"/>
  <rect x="1000" y="292" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="307" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The label in that language</text>
  <text x="1010" y="320" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">row menu, button, chain step</text>
  <line x1="1000" y1="309.0" x2="800" y2="306" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aclt-arrow)"/>
  <rect x="1000" y="375" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="390" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Below: param binds</text>
  <text x="1010" y="403" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">as on the General tab</text>
  <line x1="1000" y1="392.0" x2="920" y2="400" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aclt-arrow)"/>
</svg>

---

## Services \{#shared\}

An action used by several screens is defined once as a **service**, in **Liberty Next → Logic → Services**: an id, a label, a description, declared inputs and its steps (the same action types), drawn as a flow in the service designer — see [Services](../services.md).

A screen runs it with `call_action`: `ref` names the service (the field reads *Shared action*), and its `param_binds` fill the service's `INPUT.<param>` values.

---

## Examples

### Recompute, then reload the grid

```toml
[[screens.crm.customers.actions]]
type  = "chain"
id    = "recompute"
label = "Recompute balances"
steps = [
  { type = "run_query", id = "compute", connector = "crm", query = "compute_balances" },
  { type = "refresh",   id = "reload" },
  { type = "notify",    id = "done", message = "Balances recomputed.", tone = "ok" },
]
```

### Confirm before deleting

```toml
[[screens.crm.customers.row_menu]]
type  = "chain"
id    = "delete_customer"
label = "Delete customer"
steps = [
  { type = "confirm", id = "ask", message = "Delete this customer and its deals?", confirm_label = "Delete" },
  { type = "run_query", id = "delete", connector = "crm", query = "customers_delete",
    param_binds = [{ param = "CUSTOMER_ID", source = "CUSTOMER_ID" }] },
  { type = "refresh", id = "reload" },
]
```

**Cancel** on the confirmation stops the chain: nothing is deleted.

### Open the deals of a customer

```toml
[[screens.crm.customers.row_menu]]
type        = "navigate"
id          = "view_deals"
label       = "View deals"
connector   = "crm"
screen      = "deals"
param_binds = [{ param = "CUSTOMER_ID", source = "CUSTOMER_ID" }]
```

The **deals** screen opens with its filters seeded from the binds.

### Stamp audit columns

For `CREATED_BY` / `CREATED_AT` columns, no hook is needed: the dictionary rules `LOGIN` and `SYSDATE`, or the `{{LOGIN}}` / `{{SYSTIMESTAMP}}` tokens in the insert query, fill them on the server — see [Dictionary → Rules](../../dictionary.md#rules). To log every write in a history table, set `audit_table` on the *What it is* stage.

---

## Saving

The Actions and Row menu sections edit the screen's lists; the Screen Designer's **Save** writes them with the rest of the screen and reloads the configuration — the next click runs the new version.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Two toolbar entries meant to run one after the other. | They are two separate buttons. | Put the steps in one `chain`. |
| A toolbar action reading `source = "CUSTOMER_ID"`. | The toolbar has no row: the value is empty. | Move the action to the row menu, or ask for the value with a prompt (`INPUT.CUSTOMER_ID`). |
| `confirm` placed after the delete. | The question comes once the row is gone. | `confirm` first in the chain. |
| A step reads `<id>.first_row.X` from a step without `bind_result`. | The value is empty. | Turn on `bind_result` on the step that produces the rows. |
| `value = "#LOGIN_USER#"`. | The text is written as it is. | Use `source`. |

---

## What's next

- [Nested tabs](./nested-tabs.md) — embed another screen's form or grid in a dialog tab.
- [Parameter binding](../queries/parameter-binding.md) — `param_binds`, built-ins and tokens.
- [Notifications](../../../nomaflow/notifications.md) — the rules a `send_notification` fires.
