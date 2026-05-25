---
title: Form conditions
description: "Show, hide, require or disable a field based on the live values of the other fields in the same dialog. The Screens builder exposes three condition slots per field — Visible when, Required when, Disabled when — with an expression editor that suggests field names and previews the evaluation."
keywords: [Liberty Framework, form conditions, visible when, required when, disabled when, conditional fields, screens, dialog, settings]
---

# Form conditions

A screen's edit dialog is a flat list of fields. Some fields only make sense when others have a specific value — a *Custom SLA* that only appears on the *Enterprise* plan, a *Manager email* that's only required above a 20% discount. The framework lets you express this directly in the **Screens builder**, on each field, through three slots:

| Slot | Effect |
|---|---|
| **Visible when** | The field is rendered only when the expression is true. When false, the field is removed from the dialog **and** dropped from the save payload. |
| **Required when** | The field gets the *required* asterisk and save is blocked until the value is provided. |
| **Disabled when** | The field is rendered but greyed out and read-only. Its current value still goes on the save payload. |

The three slots are independent — a field can be visible-and-required, visible-and-disabled, or all three.

---

## At a glance

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{padding: '6px 0 10px', fontWeight: 700}}>Subscription — edit dialog</div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1fr', gap: '10px', alignItems: 'center', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{opacity: 0.7, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em'}}>Plan</div>
    <div><span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.45)', color: '#4a9eff', fontSize: '11px', fontWeight: 600}}>Enterprise ▾</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1fr', gap: '10px', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{opacity: 0.7, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em'}}>Seats <span style={{color: '#f87171'}}>*</span></div>
    <div><span style={{padding: '4px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>250</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1fr', gap: '10px', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{opacity: 0.7, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em'}}>Custom SLA <span style={{fontSize: '10px', opacity: 0.55, fontStyle: 'italic'}}>(visible: plan = enterprise)</span></div>
    <div><span style={{padding: '4px 12px', borderRadius: '6px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', fontSize: '11px'}}>Gold — 99.95%</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1fr', gap: '10px', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{opacity: 0.7, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em'}}>Discount %  <span style={{fontSize: '10px', opacity: 0.55, fontStyle: 'italic'}}>(disabled: seats &lt; 100)</span></div>
    <div><span style={{padding: '4px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', opacity: 0.45}}>15</span></div>
  </div>
  <div style={{padding: '12px 0 0', display: 'flex', justifyContent: 'flex-end', gap: '6px'}}>
    <span style={{padding: '5px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Cancel</span>
    <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>Save</span>
  </div>
</div>

*Custom SLA* appears only on the Enterprise plan; *Discount %* is visible on every plan but locked when *Seats* drops below 100.

---

## Editing a condition

In **Settings → Screens**, open the screen and click the field on the *Fields* tab. The field editor on the right exposes the three condition slots, each with an **expression editor**:

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{padding: '8px 0 10px', fontWeight: 700}}>Field editor — Custom SLA</div>
  <div style={{display: 'grid', gridTemplateColumns: '140px 1fr', rowGap: '10px', columnGap: '12px', alignItems: 'center'}}>
    <div style={{opacity: 0.75}}>Name</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>custom_sla</span></div>
    <div style={{opacity: 0.75}}>Label</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Custom SLA</span></div>
    <div style={{opacity: 0.75}}>Type</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>string ▾</span></div>
    <div style={{opacity: 0.75}}>Visible when</div><div><span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.08)', border: '1px solid rgba(74,158,255,0.40)', fontSize: '11px', fontFamily: 'ui-monospace, monospace', color: '#60a5fa'}}>plan == 'enterprise'</span></div>
    <div style={{opacity: 0.75}}>Required when</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', opacity: 0.55, fontStyle: 'italic'}}>— always required when visible —</span></div>
    <div style={{opacity: 0.75}}>Disabled when</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', opacity: 0.55, fontStyle: 'italic'}}>—</span></div>
  </div>
</div>

Each expression slot:

- Suggests **field names** of the same screen via auto-complete.
- Validates the syntax live — a typo (`plan = 'enterprise'` instead of `==`) shows a red underline before save.
- Refuses cycles at save time (field A visible-when depends on B, B depends on A).

The *Test* button at the top of the field editor opens a small preview pane (see [Testing conditions](#testing) below).

---

## Expression syntax

The expression language is small and safe — comparable to a SQL `WHERE` clause but evaluated client-side.

| Construct | Example |
|---|---|
| **Field reference** | `plan`, `seats`, `discount_pct`. Refers to the current value of the field with that *Name* in the same dialog. |
| **Literals** | `'enterprise'`, `5`, `true`, `false`, `null`. |
| **Comparisons** | `==`, `!=`, `<`, `<=`, `>`, `>=`. |
| **Logical** | `&&`, `\|\|`, `!`. Parentheses for grouping. |
| **Membership** | `plan in ['team', 'enterprise']`. |
| **Null check** | `discount_pct == null` / `discount_pct != null`. |
| **String predicates** | `name.startsWith('FR-')`, `name.endsWith('.pdf')`, `name.includes('test')`. |
| **Length** | `tags.length > 0` (for *Multiple* fields). |
| **Session context** | `session.user`, `session.lang`, `session.roles` — the same triple available to queries (see [Parameter binding → Session context](./query-params-binding.md#session-context)). `session.roles` is an array — `'admin' in session.roles`. |

The language has **no function calls beyond the listed predicates** and no arithmetic operators other than comparison. The intent is "boolean expression over form state", not a scripting language.

---

## Evaluation order

Conditions are re-evaluated **on every field change** in the dialog. The framework runs the three slots for every field in parallel; the result is read after every reference resolves. What this means:

- **The order in which fields are listed doesn't matter.** A *Visible when* on field A can reference field B that itself depends on field C — the resolver runs the full pass once per change.
- **Cycles are refused at save** — the builder names the cycle and points at the offending fields.
- **Disabled fields keep their value**, even if a *Visible when* later hides them. Toggling visibility off then on doesn't reset the value.
- **Hidden fields drop their value on save.** The payload sent to the connector contains only the visible fields. This matters when a connector's INSERT/UPDATE expects `NULL` for an absent field rather than the previously-typed value.

---

## Interaction with Default

| Scenario | Behaviour |
|---|---|
| Field has *Default*, becomes visible | The default is applied the first time the field becomes visible *if* it has no value yet. Re-hiding and re-showing keeps whatever the user typed in between. |
| Field has *Default*, becomes hidden | The value is not cleared in memory; it is dropped from the save payload because the field is no longer rendered. |
| Field has no *Default*, becomes visible | The field renders empty. |
| Field has *Default* `${session.user}`, becomes visible | The session value is substituted at evaluation time (same syntax as query defaults). |

Server-side defaults (`SEQUENCE`, `SYSDATE`, `LOGIN`, `PASSWORD` — see [Dictionary](./dictionary.md)) are applied on save and **don't interact** with conditions.

---

## Server-side enforcement

Conditions are evaluated **on the client** for live UX and **re-evaluated on the server** on save to defend against tampering. The save endpoint:

1. Receives the field payload.
2. Runs every condition again with the values from the payload.
3. Refuses the save when a required-and-visible field is missing or when a disabled field is being changed (its value in the payload differs from the value last sent to the client).

So conditions are **business rules**, not just UX hints. A user opening the network tab and changing the payload directly hits the same validation as the form.

---

## Testing conditions \{#testing}

The field editor's **Test** button opens a small preview pane: the dialog populated with fixture values from the connector's `_test_row` (or empty when none is configured); flipping the dependent fields shows the live condition behaviour.

For non-trivial logic, the screen builder also exposes a **Test cases** tab. Each test case is a `{ inputs, expected }` pair the *Run tests* button replays:

| Test case | Inputs | Expected |
|---|---|---|
| **starter-plan** | `plan = starter`, `seats = 5` | `custom_sla = hidden`, `discount_pct = disabled`, `manager_email = hidden` |
| **enterprise-with-discount** | `plan = enterprise`, `seats = 250`, `discount_pct = 25` | `custom_sla = visible`, `discount_pct = enabled`, `manager_email = visible+required` |

The test runner shows a green checkmark per pass, a red diff per fail. Test cases aren't used at runtime — they document the form's logic and survive refactors better than visual checks.

---

## Permissions

`session.roles` is the row-level switch. A field that only superusers should edit becomes:

```text
Disabled when:  'admin' not in session.roles
```

The server-side enforcement makes this safe — a regular user editing the network payload still hits the same condition.

---

## Under the hood

Conditions are stored as expression strings on each field of the screen entry. Operators **do not edit the underlying TOML by hand**; the field editor is the canonical interface and validates every expression before save.

---

## What's next

- [Concepts → Screens](./screens.md) — where the field editor lives, and the other field properties.
- [Concepts → Dictionary](./dictionary.md) — shared validation rules that combine with these conditions.
- [Parameter binding](./query-params-binding.md) — how the dialog values flow into the connector on save.
