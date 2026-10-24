---
title: Diagnostics
description: "The NomaUBL Diagnostics page gathers errors and logs in four views of one page — Integration errors, Processing log, Failures and Server log — each granted separately per role, with dashboard links landing on the right view."
keywords: [NomaUBL, diagnostics, integration errors, processing log, failures, server log, errors, logs, troubleshooting, roles, JD Edwards, SAP, NetSuite, custom ERP]
---

# Diagnostics

**Diagnostics** is the single page for everything that went wrong and everything the server wrote down. It hosts four views, picked from a switcher at the top of the page:

| View | What it answers | Page |
|---|---|---|
| **Integration errors** | Which validation rules fail, on which invoices — by rule (the default) or by event. | [Integration errors](./integration-errors.md) |
| **Processing log** | What each processing run did, file by file, step by step. | [Processing log](./processing-log.md) |
| **Failures** | Every failure in one list — validation, PA rejection, send and import, processing, job — unresolved by default. | [Failures](./failures.md) |
| **Server log** | The tail of the server log file, with severity and module filters. | [Server log](./server-log.md) |

Open it from the sidebar — **Diagnostics**, in the Navigation group.

---

## At a glance

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '13px'}}>
  <div style={{fontWeight: 700, fontSize: '15px'}}>Diagnostics</div>
  <div style={{opacity: 0.7, margin: '4px 0 12px'}}>Integration errors by rule or by event, every failure in one list, the processing log and the server log — four views of one page.</div>
  <div style={{display: 'inline-flex', border: '1px solid rgba(148,163,184,0.3)', borderRadius: '8px', overflow: 'hidden'}}>
    <span style={{padding: '6px 14px', background: 'rgba(74,158,255,0.12)', color: '#4a9eff', fontWeight: 600}}>Integration errors</span>
    <span style={{padding: '6px 14px', borderLeft: '1px solid rgba(148,163,184,0.3)'}}>Processing log</span>
    <span style={{padding: '6px 14px', borderLeft: '1px solid rgba(148,163,184,0.3)'}}>Failures</span>
    <span style={{padding: '6px 14px', borderLeft: '1px solid rgba(148,163,184,0.3)'}}>Server log</span>
  </div>
  <div style={{marginTop: '12px', padding: '10px', border: '1px dashed rgba(148,163,184,0.3)', borderRadius: '8px', opacity: 0.7}}>Period: Yesterday ▾ · the selected view below — its own filters, grid and export</div>
</div>

- **One grant per view.** Each view keeps the page grant it had before it joined Diagnostics: *Integration errors*, *Processing log*, *Server log*, plus *Failures* for the new view. A role sees only the views it is granted, and the sidebar shows Diagnostics as soon as one of them is granted. See [Roles](../../configuration/security/roles.md).
- **Links land on the right view.** The cards of the [Dashboard](../dashboard.md) and the [Tech dashboard](../tech-dashboard.md) open Diagnostics on the matching view, with the same filters.
- **Yesterday by default.** Every dated view starts on yesterday's activity; change the period from its bar.
- **Integration errors opens by rule.** The by-rule grid is the first read of a morning; switch to the event list from the view itself.

---

## Tips & best practices

- **Start from Failures** when the question is "what needs fixing": it gathers the four kinds of failure and hides those already resolved.
- **Drill into Integration errors** when one validation rule dominates: the by-rule grid groups the invoices by rule and source.
- **Use the Processing log for a file**, the **Server log for the server** — a failed run shows in the first, an exception or a connection problem in the second.
