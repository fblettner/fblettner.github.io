---
title: Settings Overview
description: "How the NomaUBL Settings page is organised — a navigation by intent (Platform, Security, E-invoicing, E-reporting, Jobs & inbound, Views & UI, API, SQL and FTP connectors, Reference data), a search over every field label, hint and key, Advanced folds for rarely used settings, and the header actions."
keywords: [NomaUBL, settings, configuration, navigation, search, platform, security, e-invoicing, e-reporting, jobs, connectors, reference data, advanced, JD Edwards, SAP, NetSuite, custom ERP]
---

# Settings Overview

The **Settings** page holds the configuration of the instance: platform, security, e-invoicing, e-reporting, jobs, connectors and reference data. Open it from **Settings**, at the bottom of the side menu; it is shown to users whose role grants the settings.

Documents, PDF templates, actions, notification rules and watched folders are not on this page: they have their own pages in the **Management** group of the menu (see [Documents](../management/documents.md) and [PDF templates](../management/pdf-templates.md)). The jobs themselves — polls, batch jobs, digest, auto-retry, lifecycle checks — are run and edited from [Scheduled jobs](../sync/scheduled-jobs/overview.md).

---

## At a glance

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '13px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '12px'}}>
    <div><div style={{fontWeight: 700, fontSize: '15px'}}>Settings</div><div style={{opacity: 0.7}}>Platform, security, e-invoicing, e-reporting, jobs, connectors and reference data of this instance.</div></div>
    <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'flex-start'}}>
      <span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>+ Add API</span>
      <span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>+ Add SQL</span>
      <span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>+ Add List</span>
      <span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>Copy</span>
      <span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(239,68,68,0.5)', color: '#ef4444'}}>Remove</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: 'minmax(200px, 260px) 1fr', gap: '12px'}}>
    <div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '8px', padding: '8px', lineHeight: 1.7}}>
      <div style={{padding: '4px 8px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.7, marginBottom: '8px'}}>retention</div>
      <div style={{fontWeight: 700, opacity: 0.7}}>JOBS & INBOUND · 1 ▾</div>
      <div style={{padding: '4px 8px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)'}}>
        <b>Job defaults</b><br/>
        <span style={{opacity: 0.7, fontSize: '12px'}}>Quiet window, bulk send throttle, BIP watermarks…</span><br/>
        <span style={{color: '#4a9eff', fontSize: '11px'}}>↳ Processing log (days) (Retention) · Step timings (days) (Retention) · Job runs (days) (Retention)</span>
      </div>
      <div style={{fontWeight: 700, opacity: 0.4, marginTop: '6px'}}>PLATFORM ›</div>
      <div style={{fontWeight: 700, opacity: 0.4}}>E-INVOICING ›</div>
    </div>
    <div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '8px', padding: '8px'}}>
      <div style={{display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap'}}>
        <b>Job defaults</b><span style={{opacity: 0.6, fontSize: '11px'}}>global</span>
        <span style={{flex: 1, minWidth: '120px', padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.6}}>Description (optional)</span>
        <span style={{padding: '3px 10px', borderRadius: '6px', background: '#4a9eff', color: '#fff'}}>Save</span>
      </div>
      <div style={{marginTop: '10px', opacity: 0.7}}>Quiet window · Bulk Send · Retention · BIP print queue</div>
    </div>
  </div>
</div>

---

## Navigation by intent

The navigation on the left groups the entries by **what you want to set**, not by storage. Every area starts collapsed and shows its entry count; an area opens on click, and opens by itself when another page links to one of its entries.

| Area | Entries |
|---|---|
| **Platform** | The [global settings](./system/global.md) tabs — *Directories & environment*, *Processing*, *Server log*, *PDF rendering*, *Email*, *AI assistant*, *License* — then the databases: [NomaUBL database](./database-connectors/nomaubl.md), [JD Edwards database](./database-connectors/jdedwards.md) and any other database connector. |
| **Security** | *Authentication* (global tab), [Single sign-on (OIDC)](./system/oidc.md), [Users](./security/users.md) and [Roles](./security/roles.md). |
| **E-invoicing** | [E-invoicing](./system/einvoicing.md), [Document types](./system/document-types.md), [Status catalogue](./system/statuses.md), [Directory lookup](./system/edirectory.md). |
| **E-reporting** | [E-reporting](./system/ereporting.md) and the *E-reporting status catalogue*. |
| **Jobs & inbound** | *Job defaults* (global tab), [JDE print queue (BIP)](./system/fetch-invoices.md), [Integrity checks](./system/integrity-reports.md). |
| **Views & UI** | [List views](./list-views.md). |
| **API connectors** | One entry per [API connector](./api-connectors.md), with the `api` badge. |
| **SQL connectors** | One entry per [SQL connector](./sql-connectors.md), with the `sql` badge. |
| **FTP connectors** | *JD Edwards file transfer* and the other [FTP connectors](./ftp-connectors.md), with the `ftp` badge. |
| **Reference data** | The [reference lists](./reference-lists.md) (`list` badge) and the [custom lists](./custom-lists.md) (`custom` badge). |

Each entry shows a label and a one-line description; the system templates keep their technical name, shown in small type next to the editor title (for example *Job defaults* · `global`). A global entry opens **only its tab** of the global editor.

---

## Search

The box above the navigation — *Search a setting, a field, a template…* — matches the labels and descriptions of the entries, the template names, and **every field label, hint and key** of the editors. Areas with a match open, and under each entry a line says which fields matched, with their group (up to three):

> ↳ Processing log (days) (Retention) · Step timings (days) (Retention) · Job runs (days) (Retention)

Searching `retention`, `smtp` or `maxThreads` therefore lands on the right tab without knowing which template holds the setting.

---

## Advanced folds

Settings rarely changed are folded under an **Advanced** line, closed by default — for example the Ghostscript command of the *Processing* tab, or the TLS and corporate-proxy settings of the *AI assistant* tab (*Advanced — TLS / corporate proxy*). Open the fold to edit them; their values are kept whether the fold is open or not.

---

## Header and editor actions

| Action | Effect |
|---|---|
| **Add API** · **Add SQL** · **Add List** | Create an API connector, a SQL connector or a custom list. |
| **Add OIDC** · **Add integrity reports** | Shown while the instance has no single sign-on or integrity-check template; creates it. |
| **Copy** | Duplicate the selected template under a new name. Not available on the system templates. |
| **Remove** | Delete the selected template. Not available on the system templates. |
| **Description (optional)** | Free description of the template, shown under its entry. |
| **Save** | Save the template being edited. The status bar at the bottom of the editor reports the result. |

Every save is recorded in [File versions](../management/file-versions.md), and the connectors, lists and settings templates — except the global settings and single sign-on — can be carried to another environment with [Promotion](../management/promotion.md).

---

## Tips & best practices

- **Search before browsing.** The field index finds a setting from any word of its label or hint.
- **Leave the Advanced folds closed** unless the default no longer fits — they hold settings that rarely need changing.
- **Name custom connectors and lists clearly.** Their name is the label of their entry in the navigation.
