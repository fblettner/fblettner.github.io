---
title: Auto-Retry
description: "NomaUBL Scheduled jobs → Auto-retry resends to the Plateforme Agréée, once a day, every invoice in the chosen technical-error statuses (9904 by default at 3 a.m.), with an issue-date window, a wait between calls and parallel workers; each invoice goes through the resend rules."
keywords: [NomaUBL, auto-retry, nightly retry, send failed, status 9904, 9907, Plateforme Agréée, PA resend, scheduled job, throttle, parallel workers, JD Edwards, SAP, NetSuite, custom ERP]
---

# Auto-Retry

:::info[Where to find it]
This form opens from the [Scheduled jobs](./overview.md) page: click a job of kind *Auto-retry* to edit it, or **New job → Auto-retry** to create one. **Save & apply** reloads the schedules at once — no server restart.
:::

An **Auto-retry** job resends to the Plateforme Agréée (PA), once a day, every invoice currently in the chosen statuses. The usual job resends the *Send failed* (`9904`) invoices at 3 a.m., so that what failed during the day — a platform outage, a timeout — is sent again before the morning.

Several jobs can coexist, each with its own time and its own statuses. The job uses the same resend as the **Resend all N** button of the [IT dashboard's Send failed card](../../application/tech-dashboard.md#send-failed), and each invoice goes through the [resend rules](../../application/invoices.md#resend-reprocess-rules). The job works the same whatever the source system — JD Edwards, SAP, NetSuite or a custom ERP: it resends the UBL stored for each invoice.

---

## At a glance

<svg viewBox="0 0 1200 492" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ar-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ar-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ar-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ar-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="422" rx="14" fill="url(#ar-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Auto-retry · retry-send-failed</text>
  <text x="240" y="78" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">GENERAL</text>
  <text x="240" y="100" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="240" y="106" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="120.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Overnight resend of send failures</text>
  <rect x="240" y="139" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M242.5,144.5 L244.8,146.8 L248.8,142" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="257" y="148" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Enabled</text>
  <text x="240" y="170" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SCHEDULE</text>
  <text x="240" y="192" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HOUR</text>
  <rect x="240" y="198" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="212.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">3</text>
  <text x="380" y="192" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MINUTE</text>
  <rect x="380" y="198" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="212.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">0</text>
  <text x="240" y="238" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TARGET</text>
  <text x="240" y="260" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUSES TO RETRY</text>
  <rect x="240" y="268" width="118" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="299.0" y="280.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">9904 · Send failed ×</text>
  <rect x="366" y="268" width="144" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="438.0" y="280.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">9907 · PA import failed ×</text>
  <rect x="240" y="292" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="306.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">— add status —</text>
  <text x="600" y="260" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ONLY RETRY INVOICES FROM THE LAST N DAYS</text>
  <rect x="600" y="266" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="280.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">0</text>
  <text x="600" y="302" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">0 = no date narrowing</text>
  <text x="240" y="330" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">THROTTLE</text>
  <text x="240" y="352" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WAIT BETWEEN PA CALLS (MS)</text>
  <rect x="240" y="358" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="372.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">100</text>
  <text x="600" y="352" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARALLEL WORKERS</text>
  <rect x="600" y="358" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="372.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">4</text>
  <line x1="240" y1="398" x2="960" y2="398" stroke="#1f2937" strokeWidth="1"/>
  <rect x="790" y="410" width="170" height="22" rx="5" fill="url(#ar-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="875.0" y="424.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save &amp; apply</text>
  <rect x="20" y="118" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="133" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enabled</text>
  <text x="30" y="146" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">off = kept, never fired</text>
  <line x1="200" y1="135.0" x2="240" y2="148" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="20" y="199" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="214" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Daily time</text>
  <text x="30" y="227" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">server time, once a day</text>
  <line x1="200" y1="216.0" x2="240" y2="209" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="20" y="287" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="302" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Error – tech codes</text>
  <text x="30" y="315" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">9904 by default · OR between codes</text>
  <line x1="200" y1="304.0" x2="240" y2="277" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="1000" y="237" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="252" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Issue date</text>
  <text x="1010" y="265" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">last N days · 0 = all</text>
  <line x1="1000" y1="254.0" x2="720" y2="277" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="1000" y="339" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="354" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Parallel workers</text>
  <text x="1010" y="367" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">1 to 8 · the wait applies to each</text>
  <line x1="1000" y1="356.0" x2="720" y2="369" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="1000" y="428" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="443" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save &amp; apply</text>
  <text x="1010" y="456" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">reloads schedules, no restart</text>
  <line x1="1000" y1="445.0" x2="960" y2="421" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
</svg>

---

## Fields

### General

| Field | Default | Description |
|---|---|---|
| **Name** | — | Given when the job is created (**New job**); it identifies the job on the Scheduled jobs page. |
| **Description** | empty | Free text: what the job covers. |
| **Enabled** | on | Off, the job is kept but never fired on schedule. |

### Schedule

| Field | Default | Description |
|---|---|---|
| **Hour** | `3` | Hour of the daily run (0–23), server time. |
| **Minute** | `0` | Minute of the run (0–59). Shifting the minute keeps two jobs from starting together. |

### Target

| Field | Default | Description |
|---|---|---|
| **Statuses to retry** | `9904` | One or more codes, picked among the statuses of the *Error – tech* group of the [Status catalogue](../../configuration/system/statuses.md). Several codes combine with OR. With no status picked, nothing runs. |
| **Only retry invoices from the last N days** | `0` | Keeps only the invoices whose **issue date** falls in the last N days. `0` keeps every invoice in the chosen statuses. |

The picker offers every code of the *Error – tech* group, but a resend accepts only the internal `99xx` statuses other than `9911` and `9913` (see the [resend rules](../../application/invoices.md#resend-reprocess-rules)):

| Code | Label | Resent? |
|---|---|---|
| `9904` | *Send failed* | Yes — the usual target. |
| `9907` | *PA import failed* | Yes. |
| `9909` | *PA export failed* | Yes. |
| `9905` | *Validation failed* | Yes, but the stored UBL is sent as it is: correct the data first and prefer a [full reprocess](../../application/invoices.md#reprocess), which validates it again. |
| `213` | *Rejected* | No — a platform status, refused by the resend and counted as failed. A `213` for an addressing reason (`ADR_ERR`, `REJ_ADR`, `DEST_INC`) is reopened by [Fix buyer](../../application/invoices.md#fix-buyer), which revalidates it and can resend it. |

### Throttle

| Field | Default | Description |
|---|---|---|
| **Wait between PA calls (ms)** | `100` | Pause between two sends. Raise it when the platform limits the request rate; `0` sends without pause. |
| **Parallel workers** | `4` | Number of sends run at the same time (1 to 8). The wait applies to each worker, so the rate towards the platform is about *workers ÷ wait*. `1` sends one invoice after the other. |

The connector's own [request limits](../../configuration/api-connectors.md) apply on top of these settings.

---

## What happens at the scheduled time

1. The job selects the invoices whose status is one of the chosen codes, narrowed to the last N days of issue date when set — up to 100,000 invoices per run.
2. Each invoice is resent with the [resend rules](../../application/invoices.md#resend-reprocess-rules): document type *Do not send*, missing UBL or platform status → failed, without a call to the platform.
3. The run ends with a summary `ok=… fail=… of …`, shown in the *Result* column of the Scheduled jobs page and in its run history.

**Run now** on the Scheduled jobs page fires the job at once with its current settings; the next scheduled run is unchanged. A run missed while the server was stopped is not caught up: the next one fires at its usual time.

---

## Tips & best practices

- **One job for 9904 is enough in most cases.** Add a job only for another time or another set of statuses.
- **Leave `213` and `9905` out.** A `213` is always refused by the resend (an addressing reject goes through Fix buyer); a `9905` needs a correction and a full reprocess rather than a resend.
- **Shift the minutes.** Two jobs at the same minute compete for the database connections and the platform.
- **Raise the wait on `429`.** A *Too Many Requests* answer from the platform means the rate is too high: raise the wait or lower the workers.
- **Disable rather than delete** during a known platform outage: the job stays visible and is easy to turn back on.
