---
title: Server Log
description: "The Server Log page shows the end of the NomaUBL server log file, newest lines first, with severity and module filters, a text search and auto-refresh — no shell access needed."
keywords: [NomaUBL, server log, log file, tail, troubleshooting, severity, module, stack trace, serverLogFile, JD Edwards, SAP, NetSuite, custom ERP]
---

# Server Log

The **Server log** page shows the **end of the server log file**, newest lines first, so an administrator can follow what the server does — a batch, a Peppol lookup, a failed transformation — without opening a shell on the host. Open it under **Management → Server log**; access is granted per role, like the other Management pages (see [Roles](../configuration/security/roles.md)).

---

## At a glance

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginBottom: '10px'}}>
    <span style={{opacity: 0.7}}>Tail</span><span style={{padding: '4px 8px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '5px'}}>512 KB ▾</span>
    <span style={{opacity: 0.7}}>Severity</span><span>☑ ERROR</span><span>☑ WARN</span><span>☑ INFO</span><span>☐ DEBUG</span><span>☐ Unstructured</span>
    <span style={{opacity: 0.7}}>Module</span><span style={{padding: '4px 8px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '5px'}}>All modules ▾</span>
    <span style={{padding: '4px 8px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '5px', opacity: 0.6, minWidth: '120px'}}>Search…</span>
    <span>☐ Auto-refresh</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)'}}>↻ Refresh</span>
  </div>
  <div style={{opacity: 0.6, marginBottom: '8px'}}>File: /opt/nomaubl/logs/nomaubl-prod.log · 48.2 MB · 3 line(s) shown of 2 914 in the last 512 KB</div>
  <div style={{fontFamily: 'monospace', fontSize: '11px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px'}}>
    <div style={{display: 'grid', gridTemplateColumns: '140px 60px 80px 1fr', gap: '8px', padding: '4px 8px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}><span style={{opacity: 0.6}}>2026-10-22 06:12:04</span><span style={{color: '#94a3b8', fontWeight: 700}}>INFO</span><span style={{opacity: 0.8}}>PROCESS</span><span style={{color: '#94a3b8'}}>batch invoices — 412 file(s), 4 thread(s)</span></div>
    <div style={{display: 'grid', gridTemplateColumns: '140px 60px 80px 1fr', gap: '8px', padding: '4px 8px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}><span style={{opacity: 0.6}}>2026-10-22 06:12:31</span><span style={{color: '#fb923c', fontWeight: 700}}>WARN</span><span style={{opacity: 0.8}}>PEPPOL</span><span style={{color: '#fb923c'}}>0225:803206317 — SMP certificate unreadable (smp.example.com)</span></div>
    <div style={{display: 'grid', gridTemplateColumns: '140px 60px 80px 1fr', gap: '8px', padding: '4px 8px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}><span style={{opacity: 0.6}}>2026-10-22 06:13:02</span><span style={{color: '#f87171', fontWeight: 700}}>ERROR</span><span style={{opacity: 0.8}}>UBL</span><span style={{color: '#f87171'}}>R42565_ZJDE0001_1353306 — XSLT failed: XTDE0640</span></div>
    <div style={{display: 'grid', gridTemplateColumns: '140px 60px 80px 1fr', gap: '8px', padding: '4px 8px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}><span style={{opacity: 0.6}}></span><span style={{color: '#64748b', fontWeight: 700}}></span><span style={{opacity: 0.8}}></span><span style={{color: '#64748b'}}>    at net.sf.saxon.…  (3 lines)</span></div>
  </div>
</div>

---

## Controls

| Control | Effect |
|---|---|
| **Tail** | How much of the end of the file is read: `128 KB`, `512 KB` *(default)*, `2 MB` or `8 MB`. When the file is larger, the status line says so — raise the tail to read further back. |
| **Severity** | Checkboxes `ERROR`, `WARN`, `INFO` *(the three ticked by default)*, `DEBUG` and **Unstructured** — the lines that do not follow the `** LEVEL ** MODULE ** … : message` form. |
| **Module** | List built from the modules seen in the lines read (`PROCESS`, `UBL`, `PEPPOL`…); **All modules** by default. |
| **Search…** | Case-insensitive text filter. |
| **Auto-refresh** | Reloads the tail every 5 seconds. |
| **Refresh** | Reloads the tail now. |

Stack traces stay **attached to the line that threw them**, so filtering on `ERROR` keeps the whole trace. The status line shows the file read, its size and how many lines are shown out of those scanned.

---

## Which file is read

The page finds the file on its own: the launcher's `nomaubl-<env>.log`, or — on Linux — the file the server's output is redirected to. When the server runs under another launcher, set its path in **Server log file** in the [global settings](../configuration/system/global.md); left blank, the automatic detection applies. If no file can be found, the page says so and points to that setting.

---

## Tips & best practices

- **Start from `ERROR` and `WARN`.** Untick `INFO` to keep only what needs a look, then widen with the module list.
- **Follow a run with auto-refresh.** Launch a batch or a scan, tick *Auto-refresh* and watch the lines come in.
- **Raise the tail for an older event.** The default 512 KB covers recent activity; switch to 2 MB or 8 MB to go further back.
