---
title: Conditional fields
description: "Make a dialog field appear, become required, lock itself or take a forced value only when another field has a given value — set on the column from the screen editor's inspector, with worked examples."
keywords: [Liberty Next, conditional fields, visible_when, required_when, disabled_when, default_when, disable_on_edit, editable_when, screen editor, dialog]
---

# Conditional fields

A static dialog asks the same questions every time. A conditional dialog adapts to what the user has already chosen: show **IBAN** only for a bank transfer, mark **Cancellation reason** as required only for a cancelled order, lock the **Invoice number** once the invoice exists.

The settings and their exact behaviour are listed on [Form conditions](../../form-conditions.md). This page shows how to set them up.

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
| `required_when` matches while `visible_when` does not. | The field is required but hidden. | Keep the two conditions in line. |
| A value with different spelling. | The condition never matches: values are compared exactly (only the surrounding spaces are ignored). | Copy the stored codes, not their labels. |
| A threshold (`AMOUNT > 1000`). | Conditions only test equality. | Return a flag from the read query (`HIGH_VALUE = 'Y'`) and test that flag. |

---

## What's next

- [Form conditions](../../form-conditions.md) — the full list of settings and where each one is checked.
- [Columns](./columns.md) — the other column settings.
- [Actions and lifecycle](./actions-and-lifecycle.md) — run actions when the form loads, saves or is cancelled.
