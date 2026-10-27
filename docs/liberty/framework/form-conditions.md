---
title: Form conditions
description: "Every conditional setting of a screen column — show, require, lock, force a default, change the rule or skip the write depending on another field's value — and the screen's row-level editable_when rule. One condition shape: a field and a value, ANDed."
keywords: [Liberty Next, form conditions, visible_when, required_when, disabled_when, default_when, rules_when, write_when, editable_when, disable_on_add, disable_on_edit, screens, dialog]
---

# Form conditions

A screen column can react to the value of another field of the same row: appear only for one kind of record, become required, lock itself, take a forced value, change its list of values, or not be written at all. The screen itself can make whole rows read-only. All these settings use the same condition shape.

For a step-by-step use in the screen editor, see [Screens → Conditional fields](./build/screens/conditional-fields.md).

---

## At a glance

<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cnd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cnd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cnd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cnd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="260" y="14" width="680" height="360" rx="14" fill="url(#cnd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="280" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit · Invoice 00001-1042</text>
  <line x1="280" y1="62" x2="920" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="280" y="95" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Status</text>
  <rect x="480" y="80" width="420" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="94.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Cancelled ▾</text>
  <text x="280" y="137" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Cancellation reason ∗</text>
  <rect x="480" y="122" width="420" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="136.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Duplicate order</text>
  <text x="280" y="179" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Payment method</text>
  <rect x="480" y="164" width="420" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="178.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Transfer ▾</text>
  <text x="280" y="221" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">IBAN</text>
  <rect x="480" y="206" width="420" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="220.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">FR76 0000 0000 0000 0000 0000 000</text>
  <text x="280" y="263" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">Credit limit</text>
  <rect x="480" y="248" width="420" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="262.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">0</text>
  <text x="890" y="263" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">🔒</text>
  <text x="280" y="305" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">Invoice number</text>
  <rect x="480" y="290" width="420" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="304.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">00001-1042</text>
  <text x="890" y="305" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">🔒</text>
  <rect x="750" y="340" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="785.0" y="354.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="830" y="340" width="80" height="22" rx="5" fill="url(#cnd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="870.0" y="354.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="10" y="100" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">required_when</text>
  <text x="20" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">STATUS = CANCELLED → required</text>
  <line x1="240" y1="117.0" x2="280" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
  <rect x="10" y="200" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">visible_when</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shown when PAYMENT_METHOD = TRANSFER</text>
  <line x1="240" y1="217.0" x2="280" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
  <rect x="10" y="300" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">disable_on_edit</text>
  <text x="20" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">key locked once created</text>
  <line x1="240" y1="317.0" x2="280" y2="304" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
  <rect x="970" y="220" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="980" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">default_when</text>
  <text x="980" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">STATUS = CANCELLED → 0, locked</text>
  <line x1="970" y1="237.0" x2="920" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
  <rect x="970" y="80" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="980" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">editable_when</text>
  <text x="980" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on the screen: whole row read-only</text>
  <line x1="970" y1="97.0" x2="920" y2="46" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
</svg>

---

## The condition \{#condition\}

A condition names a **field** of the same row and the **value** it must have — or a list of values, any of which matches:

```toml
{ field = "STATUS", value = "CANCELLED" }
{ field = "PAYMENT_METHOD", value = ["TRANSFER", "DIRECT_DEBIT"] }
```

A setting holds a list of conditions: **all of them** must match (AND). Values are compared as text, without their leading and trailing spaces, so a code padded with spaces still matches. Field names are matched regardless of case.

In the screen editor, each setting is a list on the column's inspector: one line per condition, with the field picked from the screen's columns.

---

## Settings on a column \{#column-settings\}

| Setting | Inspector tab | Effect |
|---|---|---|
| `visible_when` | Filter | **Dialog**: the field shows only while the conditions match the form's values. **Grid**: the column hides when a filter of the screen is set to a value outside the condition; with that filter empty, the column stays. |
| `required` / `required_when` | Edit | The field is marked required (asterisk), always or only while the conditions match. |
| `disabled` / `disabled_when` | Edit | The field is read-only, always or only while the conditions match. |
| `disable_on_add` | Edit | Read-only when a row is added, editable afterwards — for a value assigned on creation. |
| `disable_on_edit` | Edit | Read-only once the row exists — for a key that must not change. Applies to the dialog and to grid editing. |
| `default` | Defaults | The value proposed when a row is added. |
| `default_when` | Defaults | While its condition matches, the column takes the given **default** and is locked. With **lock** off, the value is only proposed and stays editable. With several rules, the first that matches wins. Re-applied when the deciding field changes, in the dialog and the grid. |
| `rules_when` | Rules | While its condition matches, the column uses another rule — another lookup, enum or Boolean, with its own lookup parameters and returned values — or none (plain input). The first match wins; otherwise the column's own rule applies. |
| `write_when` | Defaults | The column is written only while the conditions match. Otherwise the server writes a neutral value (blank or 0) and the dictionary default or rule is not applied — for a field that means nothing for this kind of row. |

A static setting and its conditional version combine simply: when the `_when` list is empty, the static flag decides; when it is filled, the conditions decide.

---

## Setting on the screen — `editable_when` \{#editable-when\}

Set in the **General** tab of the screen editor, `editable_when` says when an **existing** row may be changed or deleted:

```toml
editable_when = [{ field = "PERIOD_STATUS", value = ["OPEN", "VALIDATED"] }]
```

A row that does not match is read-only: plain cells in the grid, a view-only dialog without **Save** or **Delete**. The server refuses a change to such a row as well. Adding rows is not affected.

---

## What happens on save \{#save\}

- **Hidden fields** — on an update, a field hidden by `visible_when` is not sent: the column keeps its stored value. On an insert, a hidden field is sent only when it holds a value.
- **Locked fields** — their value is sent as it is.
- **Where it is checked** — `visible_when`, `required_when`, `disabled_when`, `default_when` and `rules_when` act in the browser, as the user types. `editable_when` and `write_when` are applied by the server too, whatever the client sends.

---

## Action prompts \{#prompts\}

The fields of an action's prompt dialog accept `visible_when`, `required_when` and `disabled_when` with the same shape, evaluated against the prompt's own fields. See [Actions and lifecycle](./build/screens/actions-and-lifecycle.md).

---

## What's next

- [Screens → Conditional fields](./build/screens/conditional-fields.md) — set them up in the screen editor, with examples.
- [Screens → Columns](./build/screens/columns.md) — every other column setting.
- [Dictionary](./dictionary.md) — the rules a column inherits.
