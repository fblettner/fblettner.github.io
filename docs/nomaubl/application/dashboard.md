---
title: Dashboard
description: "The NomaUBL home page — at-a-glance counters of invoices grouped by status over a chosen date range, integration-error count and quick-action shortcuts."
keywords: [NomaUBL, dashboard, invoices, statistics, status counters, integration errors, quick actions, date range, JD Edwards, SAP, NetSuite, custom ERP]
---

# Dashboard

The **Dashboard** is the NomaUBL home page. It opens by default after login and gives an at-a-glance view of the platform: invoice counters by status, integration-error count, and quick-action shortcuts to the most-used pages.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. The numbers come from the local NomaUBL database, so they reflect what NomaUBL has processed and persisted, not directly what the source system or the Plateforme Agréée holds.

---

## Invoice overview

### Date range filter

A date range filter sits above the counter grid. It restricts the *Invoice overview* counters to invoices whose **last update** falls within the selected window. The filter offers presets:

| Preset | Window |
|---|---|
| **Today** | Today only. |
| **Yesterday** *(default)* | The previous full day. |
| **Last 7 days** | The last seven full days, ending yesterday. |
| **This month** | The current month from day 1 to today. |
| **Last month** | The previous full month. |
| **Custom range** | Pick the **From** and **To** dates manually. |

The filter only affects the invoice counters; the integration-error count is always the full unmatched-errors total.

### Counter cards

Each card carries:

- The **status label** (e.g. *Approved*, *Rejected*, *Pending*) — text from the *statuses* reference list.
- The **count** of invoices in that status for the chosen window.
- A **coloured border** that hints at the status family.
- A **Total** card always sits first, summing every status in the window.

Visual preview of a typical row:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '12px', margin: '20px 0'}}>
<div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(74,158,255,0.45)', background: 'rgba(74,158,255,0.08)'}}><div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.8, marginBottom: '6px'}}>Total</div><div style={{fontSize: '28px', fontWeight: 700}}>1,247</div></div>
<div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.08)'}}><div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.8, marginBottom: '6px'}}>Approved</div><div style={{fontSize: '28px', fontWeight: 700}}>982</div></div>
<div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.08)'}}><div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.8, marginBottom: '6px'}}>Pending</div><div style={{fontSize: '28px', fontWeight: 700}}>184</div></div>
<div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,159,10,0.55)', background: 'rgba(255,159,10,0.08)'}}><div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.8, marginBottom: '6px'}}>Disputed</div><div style={{fontSize: '28px', fontWeight: 700}}>52</div></div>
<div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,69,58,0.55)', background: 'rgba(255,69,58,0.08)'}}><div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.8, marginBottom: '6px'}}>Rejected</div><div style={{fontSize: '28px', fontWeight: 700}}>29</div></div>
</div>

#### Border colour legend

| Colour | Family | Examples |
|---|---|---|
| <span style={{display: 'inline-block', width: '14px', height: '14px', verticalAlign: 'middle', borderRadius: '3px', border: '1px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.18)'}}></span> **Green** | Approved / Deposited / Validated | `200` Submitted, `201` Acknowledged, `206` Partially approved |
| <span style={{display: 'inline-block', width: '14px', height: '14px', verticalAlign: 'middle', borderRadius: '3px', border: '1px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.18)'}}></span> **Blue** | Pending / In-progress | `9906` Pending PA import, `203` Under processing |
| <span style={{display: 'inline-block', width: '14px', height: '14px', verticalAlign: 'middle', borderRadius: '3px', border: '1px solid rgba(255,159,10,0.55)', background: 'rgba(255,159,10,0.18)'}}></span> **Orange** | Warning / Partial / E-mail | `207` Disputed, `208` Suspended |
| <span style={{display: 'inline-block', width: '14px', height: '14px', verticalAlign: 'middle', borderRadius: '3px', border: '1px solid rgba(255,69,58,0.55)', background: 'rgba(255,69,58,0.18)'}}></span> **Red** | Error / Rejected / Refused | `210` Refused, `213` Rejected, `9907` PA rejected |
| <span style={{display: 'inline-block', width: '14px', height: '14px', verticalAlign: 'middle', borderRadius: '3px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(120,120,120,0.12)'}}></span> Default | Other statuses | Anything not matched by the rules above |

### Click-through

Clicking a counter card navigates to *Application → E-Invoicing* with the corresponding filter pre-applied:

```mermaid
flowchart LR
    Card["📊 Counter card<br/><i>Approved · 982</i>"] -->|"click"| Nav["🔗 Application → E-Invoicing"]
    Nav --> Filter["✅ Date range<br/>+ Status = Approved"]
    Filter --> Result["📋 Filtered list<br/><i>982 matching rows</i>"]

    classDef hl fill:#4a9eff,stroke:#2b8cff,color:#fff,font-weight:600;
    class Card,Result hl
```

| Card clicked | Filter applied on E-Invoicing |
|---|---|
| **Total** | Date range only (no status filter). |
| Any **status** card | Date range + that specific status code. |

Click-through is enabled only on full-licence installations; on restricted licences, the cards display the numbers but do not navigate.

---

## Integration errors

A single counter card titled **Unmatched validation errors** sits below the invoice grid. It counts every entry in the validation table (`F564236`) that has no matching row in the invoice header table (`F564231`) — these are typically transformation errors that prevented the invoice header from ever being created.

The number is global (no date filter) and the border is always red. Clicking the card jumps to *Application → Integration Errors*. A non-zero count is highlighted with a red value to signal that something needs attention.

---

## Quick actions

Three shortcut buttons sit at the bottom of the page.

| Button | Behaviour |
|---|---|
| **Create invoice** | Opens the *new invoice* modal directly on the dashboard — same modal as on the E-Invoicing page. After saving, the user is redirected to *Application → E-Invoicing*. |
| **Status Reference** | Navigates to *References → Status Reference* — the catalogue of every lifecycle status code. |
| **Reason Codes** | Navigates to *References → Reason Codes* — the catalogue of every refusal / rejection / irregularity reason code. |

The *Create invoice* button is disabled on restricted licences; the two reference shortcuts work on every licence.

---

## Tips & best practices

- **Set the date range to match operational needs.** *Yesterday* is a sensible default for a morning monitoring routine; *This month* fits a finance overview. *Custom range* covers month-end reconciliation or specific incident windows.
- **A red border on a status card is a quick health indicator.** Statuses on the error side of the lifecycle pile up the most when an integration breaks; the border colour makes the spike visible without reading the labels.
- **Watch the integration-error counter.** A non-zero value means at least one invoice never made it past validation — investigate via *Application → Integration Errors* before the next batch run.
- **Click-through saves a navigation step.** The same view in *Application → E-Invoicing* with manual filter application takes 3–4 clicks; the dashboard cards land there in one.
- **Bookmark the dashboard.** It is the natural daily landing page; bookmarks survive session expiry, so the next sign-in lands on the same view.
