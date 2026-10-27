---
title: Conditional fields
description: "Make a dialog field appear, become required, lock itself or take a forced value only when another field has a given value — set on the column from the screen editor's inspector, with worked examples."
keywords: [Liberty Next, conditional fields, visible_when, required_when, disabled_when, default_when, disable_on_edit, editable_when, screen editor, dialog]
---

# Conditional fields

A static dialog asks the same questions every time. A conditional dialog adapts to what the user has already chosen: show **IBAN** only for a bank transfer, mark **Cancellation reason** as required only for a cancelled order, lock the **Invoice number** once the invoice exists.

The settings and their exact behaviour are listed on [Form conditions](../../form-conditions.md). This page shows how to set them up.

---

## At a glance

<svg viewBox="0 0 1200 370" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cfd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cfd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cfd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cfd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="340" rx="14" fill="url(#cfd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Screen editor · Dialog</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="400" height="270" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="94" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tab: Details</text>
  <rect x="252" y="108" width="376" height="42" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="126" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="264" y="141" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">list</text>
  <rect x="252" y="160" width="376" height="42" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="264" y="178" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">CANCELLATION_REASON</text>
  <text x="264" y="193" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">conditional · required</text>
  <rect x="252" y="212" width="376" height="42" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="230" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">PAYMENT_METHOD</text>
  <text x="264" y="245" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">list</text>
  <rect x="252" y="264" width="376" height="42" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="282" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">IBAN</text>
  <text x="264" y="297" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">conditional · visible</text>
  <text x="656" y="94" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">CANCELLATION_REASON</text>
  <text x="656" y="112" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Column configuration</text>
  <rect x="656" y="120" width="270" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="685.5" y="135.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Display</text>
  <line x1="715" y1="125" x2="715" y2="139" stroke="#334155" strokeWidth="1"/>
  <text x="742.0" y="135.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filter</text>
  <line x1="769" y1="125" x2="769" y2="139" stroke="#334155" strokeWidth="1"/>
  <text x="793.5" y="135.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Rules</text>
  <rect x="819" y="121" width="42" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="840.0" y="135.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Edit</text>
  <line x1="862" y1="125" x2="862" y2="139" stroke="#334155" strokeWidth="1"/>
  <text x="894.0" y="135.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Defaults</text>
  <rect x="656" y="157" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="673" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">required</text>
  <text x="656" y="190" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">required_when</text>
  <rect x="656" y="198" width="300" height="30" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="666" y="217" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="756" y="217" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">=</text>
  <text x="776" y="217" fill="#4ade80" fontSize="9.5" fontFamily="ui-monospace, monospace">CANCELLED</text>
  <rect x="656" y="236" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="681.0" y="250.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add</text>
  <text x="656" y="284" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">disabled_when · disable_on_add · disable_on_edit</text>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pick the field</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">it is the screen column</text>
  <line x1="210" y1="167.0" x2="252" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfd-arrow)"/>
  <rect x="1000" y="110" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Edit tab</text>
  <text x="1010" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">required / read-only rules</text>
  <line x1="1000" y1="127.0" x2="960" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfd-arrow)"/>
  <rect x="1000" y="200" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A condition</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">field = value, ANDed</text>
  <line x1="1000" y1="217.0" x2="960" y2="213" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfd-arrow)"/>
</svg>

---

## Where to set them

A dialog field displays a screen column, and the column carries every behaviour — the same settings drive the dialog and the grid. In the screen editor:

1. Open the dialog in the [Dialog builder](./dialog-builder.md) and click the field — or select the column in the **Columns** tab.
2. The inspector shows **Column configuration**, split into tabs: the conditions sit in **Filter** (`visible_when`), **Edit** (`required_when`, `disabled_when`, `disable_on_add`, `disable_on_edit`), **Defaults** (`default_when`, `write_when`) and **Rules** (`rules_when`).
3. Add one line per condition: the **field** (picked from the screen's columns) and the **value**, or several values.

All the lines of one setting must match together (AND). For an OR on the same field, list the values in one condition.

---

## Worked examples

### Show fields for one choice

A *Payment* dialog where `PAYMENT_METHOD` is a list (`CASH`, `TRANSFER`, `DIRECT_DEBIT`, `CARD`):

| Column | `visible_when` |
|---|---|
| `IBAN` | `PAYMENT_METHOD` = `TRANSFER`, `DIRECT_DEBIT` |
| `BIC` | `PAYMENT_METHOD` = `TRANSFER`, `DIRECT_DEBIT` |
| `CARD_LAST4` | `PAYMENT_METHOD` = `CARD` |

With `CASH`, none of the three fields shows. With `TRANSFER`, `IBAN` and `BIC` appear.

### Mark a reason as required on cancellation

| Column | `required_when` |
|---|---|
| `CANCELLATION_REASON` | `STATUS` = `CANCELLED` |

The field always shows; it gets the required asterisk as soon as the status is `CANCELLED`.

### Lock a key once the row exists

| Column | Setting |
|---|---|
| `INVOICE_NUMBER` | `disable_on_edit` ticked |

The number is typed when the invoice is added, then read-only — in the dialog and in grid editing. `disable_on_add` does the reverse, for a value assigned on creation.

### Force a value for one kind of row

| Column | `default_when` |
|---|---|
| `CREDIT_LIMIT` | `STATUS` = `CANCELLED` → default `0`, lock on |

As soon as the status becomes `CANCELLED`, the limit switches to `0` and locks. With **lock** off, `0` is only proposed and the user can change it.

### Make closed periods read-only

On the screen's **General** tab:

| Setting | Value |
|---|---|
| `editable_when` | `PERIOD_STATUS` = `OPEN`, `VALIDATED` |

A row of a closed period opens in view-only mode, and the server refuses changes to it.

---

## Things to know

| Situation | What happens | What to do |
|---|---|---|
| The deciding field is not on the dialog. | Its value is unknown to the form: the condition never matches, and the dependent field stays hidden. | Add the deciding field to the dialog, hidden or not. |
| `visible_when` on a key column. | A user adding a row may not see the key. | Lock a key (`disable_on_edit`); do not hide it. |
| `required_when` matches while `visible_when` does not. | A hidden field is never demanded: **Save** goes through with it empty. | Keep the two conditions in line. |
| A value with different spelling. | The condition never matches: values are compared exactly (only the surrounding spaces are ignored). | Copy the stored codes, not their labels. |
| A threshold (`AMOUNT > 1000`). | Conditions only test equality. | Return a flag from the read query (`HIGH_VALUE = 'Y'`) and test that flag. |

---

## What's next

- [Form conditions](../../form-conditions.md) — the full list of settings and where each one is checked.
- [Columns](./columns.md) — the other column settings.
- [Actions and lifecycle](./actions-and-lifecycle.md) — run actions when the form loads, saves or is cancelled.
