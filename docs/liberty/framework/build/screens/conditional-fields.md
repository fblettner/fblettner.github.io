---
title: Conditional fields
description: "Make a dialog field appear, be required or be locked only when another field has a specific value — visible_when / required_when / disabled_when on ColumnHint and ScreenField."
keywords: [Liberty Framework, conditional fields, visible_when, required_when, disabled_when, FieldCondition, form logic]
---

# Conditional fields

A static dialog asks the user the same questions every time. A conditional dialog asks the right ones depending on what the user has already typed — show **Bank details** only when **Payment method** is `bank_transfer`, require **Reason** only when **Status** is `cancelled`, lock **Account number** in edit mode but allow editing in add mode.

Three flags on a column (or per-dialog override on a field) handle this:

| Flag | What it gates |
|---|---|
| **`visible_when`** | Whether the field shows at all. Hidden fields don't bind values at save. |
| **`required_when`** | Whether a value is mandatory. |
| **`disabled_when`** | Whether the field is read-only. |

Each is a list of `FieldCondition` predicates — **AND** semantics, so every predicate must match for the rule to fire.

---

## The FieldCondition shape

```toml
{ field = "STATUS", value = "CANCELLED" }
# or with a list — any matching value triggers the rule
{ field = "PAYMENT_METHOD", value = ["bank_transfer", "sepa"] }
```

| Property | What it does |
|---|---|
| **`field`** | The other dialog field whose live value gates this rule. Referenced by its column name (case-insensitive). |
| **`value`** | The expected value, or a list of values (any one matches). |

Multiple conditions in the list = AND. To OR conditions, declare two separate fields with the same conditional rule (or use a single condition with a list of values).

---

## Where to set them

Two layers carry the same flags:

| Layer | When |
|---|---|
| **Column hint** *(Columns tab)* | The rule applies to **every** dialog that surfaces this column. The right default — most fields behave the same across dialogs. |
| **Per-dialog field** *(Inspector → Conditional rules)* | The rule applies only to **this** specific dialog. Use when one dialog needs different behaviour from the column-wide default. |

The runtime evaluates the per-field override first; if blank, it falls back to the column-hint setting.

---

## The Inspector's Conditional rules section

When a field is selected in the [Dialog builder](./dialog-builder.md)'s canvas, the Inspector's *Conditional rules* section lets you add predicates for any of the three flags.

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="cf-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#cf-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Inspector · IBAN · Conditional rules</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="88" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">visible_when (AND)</text>
  <rect x="40" y="100" width="920" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="120" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Field</text>
  <rect x="120" y="110" width="220" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="130" y="125" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">PAYMENT_METHOD ▾</text>
  <text x="360" y="120" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Value</text>
  <rect x="420" y="110" width="280" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="430" y="125" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">bank_transfer, sepa</text>
  <rect x="720" y="110" width="22" height="22" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="731" y="125" fill="#ef4444" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="56" y="148" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">＋ Add condition</text>

  <text x="40" y="178" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">required_when (AND)</text>
  <rect x="40" y="190" width="920" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="210" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Field</text>
  <rect x="120" y="200" width="220" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="130" y="215" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">PAYMENT_METHOD ▾</text>
  <text x="360" y="210" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Value</text>
  <rect x="420" y="200" width="280" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="430" y="215" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">bank_transfer</text>
  <text x="56" y="238" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">＋ Add condition</text>

  <text x="40" y="268" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">disabled_when (AND)</text>
  <rect x="40" y="280" width="920" height="56" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="300" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Field</text>
  <rect x="120" y="290" width="220" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="130" y="305" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">STATUS ▾</text>
  <text x="360" y="300" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Value</text>
  <rect x="420" y="290" width="280" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="430" y="305" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">LOCKED, ARCHIVED</text>
  <text x="56" y="328" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">＋ Add condition</text>
</svg>

| Section | What it does |
|---|---|
| **visible_when** | Show the field only when every predicate matches. Empty = fall back to the static `hidden` flag. |
| **required_when** | Require the field only when every predicate matches. Empty = `required` decides. |
| **disabled_when** | Lock the field only when every predicate matches. Empty = `disabled` decides. |

The runtime re-evaluates the rules on every form change — type in `PAYMENT_METHOD`, the dependent fields appear / disappear / lock without a round-trip.

---

## Worked examples

### Show fields conditionally

A *Payment* dialog with these columns:

- `PAYMENT_METHOD` — ENUM dropdown (`cash`, `bank_transfer`, `sepa`, `card`).
- `IBAN`, `BIC` — only relevant for `bank_transfer` / `sepa`.
- `CARD_LAST4` — only relevant for `card`.

The rules:

| Column | `visible_when` |
|---|---|
| `IBAN` | `field=PAYMENT_METHOD, value=[bank_transfer, sepa]` |
| `BIC` | `field=PAYMENT_METHOD, value=[bank_transfer, sepa]` |
| `CARD_LAST4` | `field=PAYMENT_METHOD, value=card` |

The user picks `cash` — `IBAN` / `BIC` / `CARD_LAST4` all disappear. Switches to `bank_transfer` — `IBAN` and `BIC` appear, `CARD_LAST4` stays hidden.

### Require a reason on cancel

A *Subscription* dialog where `CANCELLATION_REASON` should only be required when `STATUS = CANCELLED`:

| Column | `required_when` |
|---|---|
| `CANCELLATION_REASON` | `field=STATUS, value=CANCELLED` |

The field is always visible (no `visible_when`), always editable (no `disabled_when`), but the *Save* button refuses to submit until the field has a value **if** `STATUS` is `CANCELLED`. For any other status, an empty `CANCELLATION_REASON` saves fine.

### Lock fields in edit mode for certain rows

A *Customer* dialog where the `TAX_ID` should be editable only when the row is being created (not edited):

| Column | `disabled_when` |
|---|---|
| `TAX_ID` | (rule based on some marker that distinguishes add from edit — typically a row-level flag like `IS_FROZEN`) |

When the row's `IS_FROZEN = Y`, the `TAX_ID` field is read-only. Otherwise editable. The form is the same; the behaviour adapts to the row.

For a strict "lock when editing, allow when adding" without a row marker, use the per-tab `hide_on_add` / `hide_on_edit` flags or the per-field column-hint `disabled` (which locks everywhere).

### Multi-condition AND

A *Invoice* dialog where `EARLY_PAYMENT_DISCOUNT` should be required only when **both** `STATUS = OPEN` AND `AMOUNT_DUE > 1000`:

The first condition is straightforward (`STATUS = OPEN`). The second isn't — `FieldCondition` checks equality, not comparison. For numeric thresholds use a normalised flag column (e.g. `HIGH_VALUE = Y` computed in the read query) and condition on it.

Sometimes the cleanest move is a **dictionary rule** with a default value that the user can override — let the form compute the discount and treat the field as informational rather than gating its save.

---

## Visible vs hidden — what happens at save

A field hidden by `visible_when` is **excluded from the save payload**. The dialog Save sends only the values of currently-visible fields. The hidden field's database column either:

- Keeps its existing value (UPDATE — the missing field is omitted from the SET clause).
- Defaults to NULL or its DB default (INSERT — the missing field is omitted from the INSERT column list).

This is the **intent** of conditional visibility — a field that isn't relevant to the user's choice shouldn't accidentally overwrite the database with stale or default data.

For genuinely hidden-but-required fields (e.g. a `:LOGIN_USER` bound at save time), use [parameter binding](../queries/parameter-binding.md) on the `_post` / `_put` query, not a dialog field.

---

## Validation order

When the user clicks *Save*, the dialog checks fields in this order:

1. **Visible fields with `required = true`** (or `required_when` matching) must have a value.
2. Each field's dictionary rule fires (BOOLEAN, ENUM, LOOKUP, format).
3. The Save dispatch fires the action chain.

A failing required check shows an inline error on the field, blocks the save, doesn't fire the action chain.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| `visible_when` references a field not on any dialog tab. | The dependent field never appears (the source field's value is undefined, no condition matches). | Add the source field to the dialog, or change the condition. |
| `visible_when` on a `key` field. | The user adds a row with no key — the INSERT fails. | Key fields should never be conditionally hidden. Lock them, don't hide. |
| `required_when` matches but `visible_when` doesn't. | The field is required AND hidden — the user can't fill it but the save refuses. | Sync the two conditions, or drop the `required_when`. |
| Value list with a typo. | The rule never matches. | Verify the enum values match exactly (case-sensitive). |
| Condition references the field itself. | Infinite loop guard kicks in; the rule is ignored. | Conditions reference **other** fields, never self. |

---

## What's next

- [Actions and lifecycle](./actions-and-lifecycle.md) — fire actions when the form loads, saves or is cancelled.
- [Dialog builder](./dialog-builder.md) — the Visual Builder where you set these rules per field.
- [Columns](./columns.md) — set the same rules at the column level for screen-wide defaults.
