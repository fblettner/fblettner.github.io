---
title: Developer Reference
description: "The NomaUBL Developer page — tables and columns, configuration keys, flows, impact analysis and the API of the instance — generated at build time from the database DDL, the configuration classes, the settings editors, the Java sources and the OpenAPI document."
keywords: [NomaUBL, developer, data dictionary, tables, columns, configuration keys, flows, impact analysis, API reference, OpenAPI, Redoc, call sites, DDL, F564230, F564231, F564235, F564237, JD Edwards, SAP, NetSuite, custom ERP]
---

# Developer Reference

The **Developer** page answers the questions of whoever maintains, extends or audits NomaUBL: *what is in this table, who writes this column, where is this setting edited and who reads it, which flows a status goes through, what this API returns*. Everything on the page is **generated when the application is built**, from the database DDL, the table and column configuration, the settings editors, the Java sources and the OpenAPI document — it always matches the release that runs.

Open it from **Documentation → Developer**.

---

## At a glance

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '13px'}}>
  <div style={{fontWeight: 700, fontSize: '15px'}}>Developer reference</div>
  <div style={{opacity: 0.7, margin: '4px 0 12px'}}>Tables and columns, configuration keys, flows, impact and the API — generated at build time from the DDL, the configuration classes, the settings editors, the Java sources and the OpenAPI document.</div>
  <div style={{display: 'inline-flex', border: '1px solid rgba(148,163,184,0.3)', borderRadius: '8px', overflow: 'hidden'}}>
    <span style={{padding: '6px 14px', background: 'rgba(74,158,255,0.12)', color: '#4a9eff', fontWeight: 600}}>Tables</span>
    <span style={{padding: '6px 14px', borderLeft: '1px solid rgba(148,163,184,0.3)'}}>Configuration</span>
    <span style={{padding: '6px 14px', borderLeft: '1px solid rgba(148,163,184,0.3)'}}>Flows</span>
    <span style={{padding: '6px 14px', borderLeft: '1px solid rgba(148,163,184,0.3)'}}>Impact</span>
    <span style={{padding: '6px 14px', borderLeft: '1px solid rgba(148,163,184,0.3)'}}>API</span>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '220px 1fr', gap: '12px', marginTop: '12px'}}>
    <div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '8px', padding: '8px', lineHeight: 1.8}}>
      <div style={{opacity: 0.6}}>Search table, column, comment…</div>
      <div><b>Invoice lifecycle</b></div>
      <div><span style={{color: '#4a9eff'}}>F564230 · Log / Archive</span><br/>F564231 · UBL Invoice Header<br/>F564235 · Lifecycle<br/>F564236 · Validation</div>
      <div><b>E-reporting</b> · <b>Notifications</b> · <b>Security</b></div>
    </div>
    <div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '8px', padding: '8px'}}>
      <div><b>F564230</b> — Purpose · Primary key · Accessor · Configuration key · Renamed to · Indexes · Written by · Read by</div>
      <div style={{opacity: 0.6, margin: '6px 0'}}>Column · Override · Type · Description · BT · Accessor · Screens · Flows · Writes · Reads</div>
      <div>FEDOC · — · NUMBER · Document number · — · logDoc · E-Documents · Processing · 3 · 41</div>
    </div>
  </div>
</div>

---

## Tables

The data dictionary of the sixteen NomaUBL tables, grouped by flow — *Invoice lifecycle*, *E-reporting*, *Notifications*, *Security* — with a search over table names, columns, comments and BT codes.

- **The table card** gives the purpose and notes from the DDL, the primary key and indexes, the accessor and its configuration key, the name currently configured in the [NomaUBL database settings](../configuration/database-connectors/nomaubl.md) when the table is renamed (*Renamed to*), and the flows that write and read it. The invoice tables carry a clickable strip of the lifecycle across tables, from the archive to the processing log.
- **The columns grid** — column, override, type, description (inline and `COMMENT ON` of the DDL), BT code, accessor, configuration key, screens that show it, flows, write and read counts, nullable, default. A row opens the code references, writes first, grouped by flow: processing, import poll, status poll, received invoices, e-reporting, inbound, jobs, notifications, authentication, API, screens, database, command line. The grid is the shared data table; its view is listed in the [List views](../configuration/list-views.md) editor.

The complete reference of the tables is also published in [Database tables](./database-tables.md).

---

## Configuration

Every configuration key, with **where it is edited** and **who reads it**. The templates are listed on the left, grouped like the [Settings navigation](../configuration/settings-overview.md) — Global settings, Documents, PDF templates, API and SQL connectors, E-invoicing, E-reporting, Jobs & inbound… — with their key count and their gaps. The grid shows the keys of the selected template:

| Column | Description |
|---|---|
| **Key** | The configuration key. |
| **Label** | The field label in the settings editor. |
| **Edited in** | Template, tab and group of the editor field. |
| **Read by** | The flows whose code reads the key. |
| **Call sites** | Number of Java reads. A row opens the editor field and the code. |
| **State** | *editable, read* · *editable, never read* · *read, not editable*. |
| **Templates** | Templates that carry the key. |
| **Hint** | The help text of the field. |

Two check boxes isolate the gaps, one at a time: **Read but not editable** (a key the code reads that no screen offers) and **Editable but never read** (a field that has no effect). Keys built at run time — `fetchAll.N.*`, `folder.N.*`, `filter.*` — are not literal in the code and show as editable only.

---

## Flows

One short page per flow: **process a file**, **import poll**, **status poll**, **e-reporting**, **watched folders**, **reprocess**. Each gives the trigger, the command-line switch, the log module, the tables touched, the statuses written, the settings read and the steps in order. Pick a flow on the left to read it.

---

## Impact

What a change reaches. The picker goes in steps:

1. the **kind** — *Column*, *Configuration key* or *Status*;
2. the **table** or the **template**;
3. the **item**, in a wide list that shows the label first.

The result lists the **flows**, the **screens**, the **API endpoints** and the **command-line switches** the item reaches, the editor field that exposes it, then the code. Endpoints come from a scan of the server routes down to their handler class; status codes and labels come from the [status catalogue](../configuration/system/statuses.md) of the instance.

---

## API

The API of the instance, read the way the other views are read:

- **tag groups and tags** on the left with their operation counts — Invoices & documents, Processing, Platforms, Operations, Administration, Developer;
- **one row per operation** in the shared data table: method, path, summary, tag, group, access (*public*, *any signed-in user*, or the action a role must grant);
- **a window per operation** with the description, the parameters and request and response samples built from the schemas, references resolved.

**Getting started** opens the introduction of the document (session and token, rights, responses, invoice key, dates, paging, background runs). **Open the public reference (Redoc)** opens the same document in Redoc, which also serves readers outside the application — see the [API reference](/nomaubl/api-reference/) of this site.

---

## Access

Grant **Developer** in the Documentation group on the [Roles](../configuration/security/roles.md) page. The page reads the files generated at build time and, for the *Renamed to* field, the table names of the current settings; it runs no query on the invoice tables.

---

## Tips & best practices

- **Check Impact before renaming a column or retiring a setting.** The flows and endpoints listed are what to retest.
- **Review the gaps of the Configuration view after an upgrade.** A key *editable, never read* is a field to clean up; a key *read, not editable* is a setting only reachable by editing the file.
- **Send the Flows pages to a new team member** before the code: they describe each chain in a page.
