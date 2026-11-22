---
title: Conditional fields
description: "Make a dialog field appear, become required, lock itself or take a forced value only when another field has a given value — set on the column in the Liberty Next Screen Designer, with worked examples."
keywords: [Liberty Next, conditional fields, visible_when, required_when, disabled_when, default_when, disable_on_edit, editable_when, screen editor, dialog]
---

# Conditional fields

A static dialog asks the same questions every time. A conditional dialog adapts to what the user has already chosen: show **IBAN** only for a bank transfer, mark **Cancellation reason** as required only for a cancelled order, lock the **Invoice number** once the invoice exists.

The settings and their exact behaviour are listed on [Form conditions](../../form-conditions.md). This page shows how to set them up.

---

## At a glance

<svg viewBox="0 0 1320 500" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cnd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cnd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cnd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cnd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="464" rx="14" fill="url(#cnd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Screen Designer ·</text>
  <text x="349.1008" y="46" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">[screens.crm.customers]</text>
  <rect x="1017" y="32" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1049.0" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="987" y="32" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="999.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤡</text>
  <text x="977" y="47" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">unsaved changes</text>
  <line x1="220" y1="64" x2="1100" y2="64" stroke="#1f2937" strokeWidth="1"/>
  <rect x="238.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="246.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="266.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT IS</text>
  <text x="246.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Customers</text>
  <line x1="367.0" y1="106.0" x2="380.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cnd-flow)"/>
  <rect x="381.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="389.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="409.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATA</text>
  <text x="389.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="389.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 save query(ies)</text>
  <line x1="510.0" y1="106.0" x2="523.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cnd-flow)"/>
  <rect x="524.0" y="78" width="129.0" height="56" rx="8" fill="rgba(50,215,75,0.10)" stroke="#4ade80" strokeWidth="1.2"/>
  <rect x="532.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="552.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRID</text>
  <text x="532.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">6 column(s)</text>
  <text x="532.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 filter(s) · 1 view(s)</text>
  <line x1="653.0" y1="106.0" x2="666.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cnd-flow)"/>
  <rect x="667.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="675.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="695.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RECORD FORM</text>
  <text x="675.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">2 tab(s)</text>
  <text x="675.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">8 field(s)</text>
  <line x1="796.0" y1="106.0" x2="809.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cnd-flow)"/>
  <rect x="810.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="818.0" y="86" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="838.0" y="97" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="818.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">1 toolbar action(s)</text>
  <text x="818.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">2 in the row menu · 1 on s…</text>
  <line x1="939.0" y1="106.0" x2="952.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#cnd-flow)"/>
  <rect x="953.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="961.0" y="86" width="14" height="14" rx="3" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="981.0" y="97" fill="#fb923c" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUTPUT</text>
  <text x="961.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">the grid's own export</text>
  <rect x="238" y="146" width="167" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="239" y="147" width="57" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="267.5" y="160.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <line x1="297" y1="151" x2="297" y2="163" stroke="#334155" strokeWidth="1"/>
  <text x="321.5" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <line x1="346" y1="151" x2="346" y2="163" stroke="#334155" strokeWidth="1"/>
  <text x="375.5" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Summary</text>
  <rect x="238" y="180" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="200" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="194" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="260" y="206" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Status</text>
  <text x="526" y="200" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="218" width="300" height="32" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="247" y="238" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="232" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">CANCELLATION_REASON</text>
  <text x="260" y="244" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Cancellation reason</text>
  <text x="526" y="238" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="256" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="276" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="270" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">PAYMENT_METHOD</text>
  <text x="260" y="282" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Payment method</text>
  <text x="526" y="276" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="294" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="314" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="308" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">IBAN</text>
  <text x="260" y="320" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">IBAN</text>
  <text x="526" y="314" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="238" y="332" width="300" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="247" y="352" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="260" y="346" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">INVOICE_NUMBER</text>
  <text x="260" y="358" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Invoice number</text>
  <text x="526" y="352" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="554" y="180" width="528" height="250" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="564" y="190" width="508" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="570" y="193" width="122" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="631.0" y="207.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="ui-monospace, monospace">← CANCELLATION_REASON</text>
  <text x="702.764" y="207" fill="#94a3b8" fontSize="8.2" fontFamily="ui-monospace, monospace">≋ CANCELLATION_REASON  ›</text>
  <text x="830.78" y="207" fill="#e2e8f0" fontSize="8.4" fontWeight="700" fontFamily="ui-monospace, monospace">Required When: (new)</text>
  <text x="566" y="236" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FIELD ∗</text>
  <rect x="566" y="241" width="504" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="575" y="255.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="1058" y="255.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="566" y="275" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">The filter column whose value gates this column's visibility.</text>
  <text x="566" y="296" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">VALUE ∗</text>
  <rect x="566" y="302" width="504" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="575" y="316.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">CANCELLED</text>
  <text x="1060" y="316.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="566" y="330" width="46" height="18" rx="4" fill="transparent" stroke="#475569" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="589" y="342.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">+ add</text>
  <text x="566" y="362" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">The allowed value, or list of allowed values.</text>
  <text x="566" y="380" fill="#94a3b8" fontSize="8" fontStyle="italic" fontFamily="system-ui, sans-serif">from the Edit tab of the column:</text>
  <text x="591.0" y="400.3" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <text x="645.0" y="400.3" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Display</text>
  <text x="697.0" y="400.3" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Filter</text>
  <text x="744.5" y="400.3" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Rules</text>
  <rect x="769" y="388" width="37" height="18" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="787.5" y="400.3" fill="#4a9eff" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Edit</text>
  <text x="837.0" y="400.3" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Defaults</text>
  <text x="566" y="422" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REQUIRED</text>
  <text x="619.4272" y="422" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">☐ disabled</text>
  <text x="716" y="422" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REQUIRED WHEN</text>
  <text x="797.8192" y="422" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">+ add</text>
  <text x="866" y="422" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DISABLED WHEN</text>
  <text x="947.8192" y="422" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">+ add</text>
  <line x1="220" y1="442" x2="1100" y2="442" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1027" y="452" width="55" height="22" rx="5" fill="url(#cnd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1054.5" y="466.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="954" y="452" width="65" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="986.5" y="466.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Cancel</text>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pick the column</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the field of the record form</text>
  <line x1="200" y1="227.0" x2="238" y2="234" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
  <rect x="20" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Edit tab ▸ Required when</text>
  <text x="30" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">+ add opens a new condition</text>
  <line x1="200" y1="337.0" x2="566" y2="419" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
  <rect x="1120" y="182" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="197" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Back to the column</text>
  <text x="1130" y="210" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the breadcrumb names the setting</text>
  <line x1="1120" y1="199.0" x2="1062" y2="203" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
  <rect x="1120" y="232" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The deciding field</text>
  <text x="1130" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">picked from the screen's columns</text>
  <line x1="1120" y1="249.0" x2="1070" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
  <rect x="1120" y="298" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One or several values</text>
  <text x="1130" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">any of them matches</text>
  <line x1="1120" y1="315.0" x2="1052" y2="313" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
  <rect x="1120" y="396" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="411" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Several conditions</text>
  <text x="1130" y="424" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">all must hold (AND)</text>
  <line x1="1120" y1="413.0" x2="1070" y2="419" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnd-arrow)"/>
</svg>

---

## Where to set them

A dialog field displays a screen column, and the column carries every behaviour — the same settings drive the dialog and the grid. In the Screen Designer:

1. On the **Record form** stage, click the field in the [Dialog builder](./dialog-builder.md) — or, on the **Grid** stage, pick the column in **Columns**.
2. The column's settings show, split into tabs (**Column configuration** in the Inspector): the conditions sit in **Filter** (`visible_when`), **Edit** (`required_when`, `disabled_when`, `disable_on_add`, `disable_on_edit`), **Defaults** (`default_when`, `write_when`) and **Rules** (`rules_when`).
3. Under the setting, **+ add** opens a new condition in the same panel — its breadcrumb reads *Required When: (new)*, for example: pick the **Field** among the screen's columns and give the **Value**, or several values (**+ add** under Value). The breadcrumb leads back to the column.

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

On the screen's **What it is** stage:

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
