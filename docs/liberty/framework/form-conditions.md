---
title: Form conditions
description: "Every conditional setting of a screen column — show, require, lock, force a default, change the rule or skip the write depending on another field's value — and the screen's row-level editable_when rule. One condition shape: a field and a value, ANDed."
keywords: [Liberty Next, form conditions, visible_when, required_when, disabled_when, default_when, rules_when, write_when, editable_when, disable_on_add, disable_on_edit, screens, dialog]
---

# Form conditions

A screen column can react to the value of another field of the same row: appear only for one kind of record, become required, lock itself, take a forced value, change its list of values, or not be written at all. The screen itself can make whole rows read-only. All these settings use the same condition shape.

For a step-by-step use in the Screen Designer, see [Screens → Conditional fields](./build/screens/conditional-fields.md).

---

## At a glance

<svg viewBox="0 0 1320 350" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fcd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="fcd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="fcd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="fcd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="306" rx="14" fill="url(#fcd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Edit · Invoices</text>
  <rect x="1054" y="32" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="238.0" y="86" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">STATUS</text>
  <rect x="238.0" y="94" width="416.0" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="248.0" y="112" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">Cancelled</text>
  <text x="640.0" y="112" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="666.0" y="86" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CANCELLATION REASON ∗</text>
  <rect x="666.0" y="94" width="416.0" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="676.0" y="112" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">Duplicate order</text>
  <text x="238.0" y="148" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PAYMENT METHOD</text>
  <rect x="238.0" y="156" width="416.0" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="248.0" y="174" fill="#e2e8f0" fontSize="9.2" fontFamily="system-ui, sans-serif">Transfer</text>
  <text x="640.0" y="174" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="666.0" y="148" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">IBAN</text>
  <rect x="666.0" y="156" width="416.0" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="676.0" y="174" fill="#e2e8f0" fontSize="9.2" fontFamily="ui-monospace, monospace">FR76 0000 0000 0000 0000 0000 000</text>
  <text x="238.0" y="210" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CREDIT LIMIT</text>
  <rect x="238.0" y="218" width="416.0" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="248.0" y="236" fill="#64748b" fontSize="9.2" fontFamily="ui-monospace, monospace">0</text>
  <text x="666.0" y="210" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">INVOICE NUMBER</text>
  <rect x="666.0" y="218" width="416.0" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="676.0" y="236" fill="#64748b" fontSize="9.2" fontFamily="ui-monospace, monospace">00001-1042</text>
  <line x1="220" y1="274" x2="1100" y2="274" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1040" y="286" width="42" height="24" rx="5" fill="url(#fcd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1061.0" y="301.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="972" y="286" width="62" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1003.0" y="301.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="889" y="286" width="77" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="927.5" y="301.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Duplicate</text>
  <rect x="831" y="286" width="52" height="24" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="857.0" y="301.5" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <rect x="20" y="89" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="104" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">STATUS decides</text>
  <text x="30" y="117" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read by required_ and default_when</text>
  <line x1="200" y1="106.0" x2="238.0" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fcd-arrow)"/>
  <rect x="20" y="151" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="166" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PAYMENT_METHOD decides</text>
  <text x="30" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read by the IBAN's visible_when</text>
  <line x1="200" y1="168.0" x2="238.0" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fcd-arrow)"/>
  <rect x="20" y="213" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="228" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">default_when</text>
  <text x="30" y="241" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">STATUS = CANCELLED → 0, locked</text>
  <line x1="200" y1="230.0" x2="238.0" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fcd-arrow)"/>
  <rect x="1120" y="26" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">editable_when</text>
  <text x="1130" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on the screen: whole row read-only</text>
  <line x1="1120" y1="43.0" x2="980" y2="48" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fcd-arrow)"/>
  <rect x="1120" y="89" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="104" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">required_when</text>
  <text x="1130" y="117" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">STATUS = CANCELLED → required ∗</text>
  <line x1="1120" y1="106.0" x2="1082" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fcd-arrow)"/>
  <rect x="1120" y="151" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="166" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">visible_when</text>
  <text x="1130" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">IBAN only for a transfer</text>
  <line x1="1120" y1="168.0" x2="1082" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fcd-arrow)"/>
  <rect x="1120" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">disable_on_edit</text>
  <text x="1130" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">key locked once created</text>
  <line x1="1120" y1="237.0" x2="1082" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fcd-arrow)"/>
</svg>

---

## The condition \{#condition\}

A condition names a **field** of the same row and the **value** it must have — or a list of values, any of which matches:

```toml
{ field = "STATUS", value = "CANCELLED" }
{ field = "PAYMENT_METHOD", value = ["TRANSFER", "DIRECT_DEBIT"] }
```

A setting holds a list of conditions: **all of them** must match (AND). Values are compared as text, without their leading and trailing spaces, so a code padded with spaces still matches. Field names are matched regardless of case.

In the Screen Designer, each setting is a list in the column's settings: **+ add** opens a condition, with the **Field** picked from the screen's columns and one or several **Value** entries.

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

Set on the **What it is** stage of the Screen Designer, `editable_when` says when an **existing** row may be changed or deleted:

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

- [Screens → Conditional fields](./build/screens/conditional-fields.md) — set them up in the Screen Designer, with examples.
- [Screens → Columns](./build/screens/columns.md) — every other column setting.
- [Dictionary](./dictionary.md) — the rules a column inherits.
