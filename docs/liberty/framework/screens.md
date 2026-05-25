---
title: Screens
description: "A screen is the framework's main business-object surface — a filterable grid backed by a connector, an inline edit dialog with tabs and fields, optional row actions and audit columns. Built end-to-end from Settings → Screens with a visual layout designer."
keywords: [Liberty Framework, screen, grid, dialog, tab, field, business object, audit, actions, row menu, settings]
---

# Screens

A **screen** is the framework's main business-object surface: a filterable, sortable **grid** of rows backed by a connector query, with an inline **edit dialog** that opens on row click. Everything the operator sees — the grid columns, the filter toolbar, the dialog tabs, the form fields, the row actions, the toolbar buttons — is defined in **Settings → Screens** through the visual screen builder.

The screen is where most users spend most of their time; the builder is correspondingly comprehensive.

---

## At a glance

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sc-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="sc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="40" width="920" height="300" rx="14" fill="url(#sc-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">A screen at runtime</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="520" height="220" rx="10" fill="rgba(0,0,0,0.20)" stroke="#1f2937" strokeWidth="1"/>
  <text x="76" y="124" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRID</text>
  <rect x="76" y="136" width="488" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="86" y="154" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📅 Yesterday   Doc   Dct   Customer   Status ▾   ↻ Refresh   + Add</text>
  <rect x="76" y="172" width="488" height="22" rx="4" fill="rgba(255,255,255,0.03)"/>
  <text x="86" y="187" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DOC · DCT · KCO · CUSTOMER · TOTAL · STATUS</text>
  <rect x="76" y="200" width="488" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="86" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12345 · RI · 00070 · Acme SA · 1 500,00 ·</text>
  <rect x="510" y="204" width="50" height="14" rx="7" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)"/>
  <text x="535" y="215" fill="#4ade80" fontSize="9" textAnchor="middle" fontWeight="700">Approved</text>
  <rect x="76" y="228" width="488" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="86" y="243" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12346 · RI · 00070 · Globex · 1 020,00 ·</text>
  <rect x="510" y="232" width="50" height="14" rx="7" fill="rgba(0,122,255,0.10)" stroke="rgba(0,122,255,0.40)"/>
  <text x="535" y="243" fill="#60a5fa" fontSize="9" textAnchor="middle" fontWeight="700">Pending</text>
  <text x="86" y="278" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">Click a row → edit dialog</text>

  <rect x="600" y="100" width="340" height="220" rx="10" fill="rgba(74,158,255,0.04)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="616" y="124" fill="#4a9eff" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EDIT DIALOG</text>
  <rect x="616" y="136" width="308" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="626" y="154" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Summary · Parties · Lines · VAT · History</text>
  <text x="626" y="184" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Invoice 12345</text>
  <text x="626" y="204" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Document number  ·  12345</text>
  <text x="626" y="220" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Customer  ·  Acme SA</text>
  <text x="626" y="236" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Status     ·  Approved</text>
  <rect x="616" y="276" width="80" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="656" y="294" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="708" y="276" width="80" height="26" rx="6" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="748" y="294" fill="#fff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
</svg>

---

## Settings → Screens

The catalogue lists every screen on the install — one row per screen, grouped by app.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Settings → Screens</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>App ▾</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>+ New screen</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 1.2fr 70px 60px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div>Id</div><div>Title</div><div>Connector / query</div><div>Edit</div><div></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 1.2fr 70px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>billing/invoices</div><div>Invoices</div><div style={{fontFamily: 'ui-monospace, monospace', fontSize: '11px', opacity: 0.85}}>billing · invoices-list</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(50,215,75,0.10)', border: '1px solid rgba(50,215,75,0.40)', color: '#4ade80', fontSize: '10px', fontWeight: 600}}>writable</span></div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 1.2fr 70px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>billing/credit_notes</div><div>Credit notes</div><div style={{fontFamily: 'ui-monospace, monospace', fontSize: '11px', opacity: 0.85}}>billing · credit-notes-list</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(50,215,75,0.10)', border: '1px solid rgba(50,215,75,0.40)', color: '#4ade80', fontSize: '10px', fontWeight: 600}}>writable</span></div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 1.2fr 70px 60px', padding: '10px 14px', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>crm/customers</div><div>Customers</div><div style={{fontFamily: 'ui-monospace, monospace', fontSize: '11px', opacity: 0.85}}>crm · customers-list</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.20)', fontSize: '10px', fontWeight: 600, opacity: 0.7}}>read-only</span></div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
  </div>
</div>

Click *+ New screen* or any row to open the screen builder.

---

## The screen builder

The builder is a multi-tab editor — **General**, **Read connector**, **Grid**, **Dialog**, **Actions**, **Permissions**. Each tab covers one facet of the screen.

### General tab

| Field | Effect |
|---|---|
| **Id** | Screen identifier of the form `app/name` (e.g. `billing/invoices`). Surfaces in the URL (`/screens/billing/invoices`), the permission code (`screen:billing:invoices`) and the menu picker. |
| **Title** | Shown at the top of the page and on the menu entry that opens it. Localised through the dictionary. |
| **App** | Dropdown of apps registered on the install. Pre-filled from the *Id* prefix. |
| **Description** | Free text — appears on the catalogue list and in the AI assistant tool description when the screen is exposed. |
| **Key columns** | Multi-select of columns from the read query that uniquely identify a row. Used by the edit dialog to know which row to update / delete. |
| **Default page size** | Rows per page on the grid. Default 50. |
| **Editable** | When *on*, the *Add* / *Edit* / *Delete* actions appear in the toolbar and the row click opens an editable dialog. When *off*, the dialog opens in read-only mode. |

### Read connector tab

| Field | Effect |
|---|---|
| **Connector** | Dropdown of SQL connectors. The chosen connector exposes its read queries. |
| **Query** | Dropdown of named read queries on the picked connector. |
| **Parameters** | Sub-form filled in by the screen's toolbar — see [Parameter binding](./query-params-binding.md). |
| **Default sort** | Optional. A column + direction applied on first load. |
| **Catalog columns** | Read-only — list of every column the framework discovered from the *Test* run of the query. Used by the *Grid* tab's picker. |

The **▶ Preview** button at the top of the tab runs the query against the live pool and shows the first 50 rows.

### Grid tab

This is the visual layout designer. The discovered columns appear in a left palette; the operator drags them into the grid layout on the right.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1fr', gap: '14px'}}>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Catalog</div>
      <div style={{fontSize: '11px', lineHeight: '1.9'}}>
        <div style={{opacity: 0.55, fontStyle: 'italic'}}>Drag to grid →</div>
        <div style={{fontFamily: 'ui-monospace, monospace'}}>doc</div>
        <div style={{fontFamily: 'ui-monospace, monospace'}}>dct</div>
        <div style={{fontFamily: 'ui-monospace, monospace'}}>kco</div>
        <div style={{fontFamily: 'ui-monospace, monospace'}}>customer</div>
        <div style={{fontFamily: 'ui-monospace, monospace'}}>total_ht</div>
        <div style={{fontFamily: 'ui-monospace, monospace'}}>total_ttc</div>
        <div style={{fontFamily: 'ui-monospace, monospace'}}>currency</div>
        <div style={{fontFamily: 'ui-monospace, monospace'}}>status</div>
        <div style={{fontFamily: 'ui-monospace, monospace', opacity: 0.5}}>review</div>
      </div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Grid layout</div>
      <div style={{display: 'grid', gridTemplateColumns: '60px 50px 70px 1.2fr 90px 90px 60px 90px', padding: '6px 8px', textTransform: 'uppercase', letterSpacing: '0.04em', opacity: 0.7, fontSize: '10px', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.08)'}}>
        <div>Doc</div><div>Dct</div><div>Kco</div><div>Customer</div><div>Total HT</div><div>Total TTC</div><div>Cur.</div><div>Status</div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '60px 50px 70px 1.2fr 90px 90px 60px 90px', padding: '6px 8px', fontSize: '11px', alignItems: 'center'}}>
        <div>12345</div><div>RI</div><div>00070</div><div>Acme Industries SA</div><div style={{textAlign: 'right'}}>1 250,00</div><div style={{textAlign: 'right'}}>1 500,00</div><div>EUR</div><div><span style={{padding: '2px 8px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(50,215,75,0.40)', background: 'rgba(50,215,75,0.10)', color: '#4ade80'}}>Approved</span></div>
      </div>
      <div style={{marginTop: '8px', display: 'flex', gap: '8px', fontSize: '11px'}}>
        <span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.40)', color: '#4a9eff', fontWeight: 700}}>+ Add column</span>
        <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)'}}>Configure pagination</span>
      </div>
    </div>
  </div>
</div>

| Per-column control | Effect |
|---|---|
| **Drag handle** | Re-orders columns. |
| **Width** | Drag the column edge to resize; the size is saved. |
| **Header label** | Defaults to the dictionary label of the column. Overridable per screen. |
| **Format override** | Optional per-screen format that wins over the dictionary's default. |
| **Sortable / Filterable** | Toggles. When *Filterable* is on, the column gets a per-column filter input in the toolbar. |
| **Visible by default** | When *off*, the column exists in the *Add column* picker (the operator can show it on demand) but isn't shown out of the box. |

The toolbar of the screen (above the grid at runtime) is composed automatically from the visible filterable columns, plus the *Refresh* and *Add* / *Export* buttons.

### Dialog tab

The dialog is the modal that opens on row click. It supports multiple **tabs** — *Summary*, *Lines*, *VAT*, *Notes*, *History*, *PDF* are common — each with its own set of fields.

The dialog editor exposes:

| Section | Effect |
|---|---|
| **Tabs** | Sortable list. Each tab has a *Label* + *Visible when* expression — see [Form conditions](./form-conditions.md). |
| **Fields** | Per-tab list of fields. Each field has a *Column* (dropdown of read-query columns + write-query columns), a *Widget* (auto from the dictionary type, overridable), and the four condition slots (*Visible when*, *Required when*, *Disabled when*, *Default*). |
| **Sub-grids** | A tab can host a **child grid** instead of fields — useful for "Lines" of an invoice. The sub-grid points at its own read connector and write actions. |

The *Preview* button at the top opens the dialog populated with the first row of the read query — quick way to verify the layout.

### Actions tab

Buttons that appear on the dialog's footer or on individual rows.

| Action type | Effect |
|---|---|
| **Save / Cancel** | Always present on writable screens. The framework wires them automatically. |
| **Custom button** | Calls a connector write query with the row's key + dialog payload. Appears on the dialog footer. |
| **Row action** | Same idea but on each grid row — handy for one-off operations (e.g. *Resend to PA*). |
| **Bulk action** | Visible when the operator multi-selects rows in the grid. Calls the connector once per selected row. |

Each custom action exposes:

- *Label* + *Icon* + *Variant* (primary / secondary / destructive).
- *Connector* + *Write query*.
- *Confirmation* — optional dialog before the action runs.
- *Visible when* expression — same syntax as the field conditions.

### Permissions tab

Read-only summary of the permission codes this screen generates: `screen:<app>:<id>` plus the underlying `sql:<connector>:<query>` of the read query and every write action.

---

## Audit columns

A common pattern: track who created / last updated each row. The recommended path:

1. In the read query, return `created_by`, `created_at`, `updated_by`, `updated_at`.
2. In the dictionary, mark those columns *Rule = LOOKUP* against the users table (so the chips show display names, not raw user ids).
3. On the write query for *Insert*, set the *Form-layer defaults* on those columns to `LOGIN` + `SYSDATE`.
4. On the write query for *Update*, set defaults on `updated_by` + `updated_at`.
5. Hide the audit columns from the dialog (or render them read-only) so users can't tamper with them.

The framework runs `LOGIN` and `SYSDATE` **on the server** at save time — see [Dictionary → form-layer defaults](./dictionary.md#form-layer-defaults).

---

## Locking

The framework supports **record locking** to prevent two operators editing the same row simultaneously. When *Editable* is on, the dialog acquires a lock on the row's key when it opens; another operator opening the same row sees a banner ("locked by Alice since 09:42") and the dialog opens in read-only mode.

Locks expire on dialog close, on session timeout, or after the *Lock TTL* configured on the screen. The *Technical* tab of Settings surfaces every active lock — handy when a stale lock blocks an edit.

---

## Permissions

The screen itself is gated by `screen:<app>:<id>`. The underlying read query inherits `sql:<connector>:<query>` and every write action inherits `sql:<connector>:<query>:write`. A user without the read permission gets a 403 on direct navigation; a user with read but not write sees the screen in read-only mode (Save / Add / Delete buttons hidden).

The Screens builder tab is gated by `settings:screens`.

---

## Tips & best practices

- **Start with the read connector.** Define the query, run *Test* to discover the schema, **then** wire the screen. Iterating in this order is much faster than retrofitting columns.
- **Use the dictionary aggressively.** A column with a good dictionary entry needs almost no per-screen overrides; a column without one needs labelling, formatting and widget tweaks on every screen that uses it.
- **Keep the dialog focused.** Three to five tabs per dialog covers most cases. A dialog with twelve tabs is a sign the entity is too big — consider splitting into multiple screens.
- **Make audit columns read-only on every screen.** Combined with `LOGIN` / `SYSDATE` form-layer defaults, you get a tamper-proof audit trail.
- **Use *Bulk action* for repetitive operations.** A *Resend to PA* button that processes a multi-selection saves minutes per day for power users.

---

## Under the hood

Screen definitions are stored in `liberty-apps/config/screens.toml`. Operators **do not edit this file by hand** in normal operation; the screen builder is the canonical interface. The *Raw TOML* tab is the escape hatch for the rare case where the builder doesn't cover a field.

---

## What's next

- [Connectors](./connectors.md) — the read + write queries the screen consumes.
- [Dictionary](./dictionary.md) — column metadata that shapes the grid + dialog.
- [Form conditions](./form-conditions.md) — Visible when / Required when / Disabled when on each field.
- [Parameter binding](./query-params-binding.md) — how the toolbar inputs flow into the query.
- [Menus](./menus.md) — wire the screen into the sidebar.
