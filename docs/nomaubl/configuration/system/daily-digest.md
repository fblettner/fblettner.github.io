---
title: Daily Digest
description: "Settings → Daily Digest schedules a recurring email of the day's integration errors, with the full event list attached as an Excel file. Multiple digests can be configured per recipient subset, each with its own send time, lookback window, severity filter and per-column routing — different teams receive different cuts of the same data."
keywords: [NomaUBL, daily digest, integration errors, email, Excel attachment, recurring, scheduler, lookback window, severity filter, per-column routing, company, activity, business unit, JD Edwards, SAP, NetSuite, custom ERP]
---

# Daily Digest

The **Daily Digest** screen schedules a recurring email that bundles every integration error of the day and attaches the full event list as an Excel file. The body of the email summarises the period and the row counts; the attachment carries the exact data the [Integration Errors](../../application/integration-errors.md) page's *Detailed* tab exports — same columns, same shape.

The point is operational: instead of asking a team to open the SPA every morning to check for failed invoices, the digest pushes the day's errors to their inbox at a fixed time. Several digests can coexist so different teams receive different cuts of the same data — the accounting team for company `ACME`, the operations team for activity `VRAC`, the development team for everything with severity `FATAL`.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. The errors come from the validation pipeline and are stored in `F564236`, so the source format is transparent here.

:::info[Added in 2026.06.02]
The page is brand new. It replaces the ad-hoc *Export* workflow on the Integration Errors page for scheduled recipients — operators who don't open the SPA daily but need the data anyway. The export workflow is still available for one-off triage.
:::

---

## Opening the editor

- Sidebar → **Configuration → System → Daily Digest**.
- Or directly from the [Integration Errors](../../application/integration-errors.md) page → toolbar → *Send to digest…* when the operator wants to wire a recurring email for the current filter set.

---

## At a glance

<svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="590" rx="14" fill="url(#dd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Daily Digest</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="80" height="28" rx="6" fill="url(#dd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="280" y="102" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">＋ Add</text>

  <rect x="328" y="84" width="120" height="28" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="388" y="102" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">Severity ▾</text>

  <rect x="456" y="84" width="140" height="28" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="464" y="102" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">☑ Enabled only</text>

  <rect x="704" y="84" width="78" height="28" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="743" y="102" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">↻ Refresh</text>

  <rect x="240" y="128" width="540" height="120" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="148" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Accounting · ACME</text>
  <text x="252" y="164" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">accounting@acme.example · ops-acme@acme.example</text>
  <text x="252" y="184" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Every day · 07:00 Europe/Paris · last 1 day · severity = ERROR / FATAL</text>
  <text x="252" y="200" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Filters: KCO = 00070 · Activity = ISC</text>
  <rect x="252" y="214" width="56" height="20" rx="10" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="280" y="228" fill="#22c55e" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">ENABLED</text>
  <rect x="314" y="214" width="78" height="20" rx="10" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="353" y="228" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">last sent 06/02</text>
  <rect x="708" y="214" width="60" height="22" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="738" y="229" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Edit</text>

  <rect x="240" y="262" width="540" height="120" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="282" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Operations · VRAC</text>
  <text x="252" y="298" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">operations@example.com</text>
  <text x="252" y="318" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Every day · 06:30 Europe/Paris · last 2 days · severity = all</text>
  <text x="252" y="334" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Filters: Activity = VRAC</text>
  <rect x="252" y="348" width="56" height="20" rx="10" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="280" y="362" fill="#22c55e" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">ENABLED</text>

  <rect x="240" y="396" width="540" height="120" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="416" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Dev — FATAL only</text>
  <text x="252" y="432" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">dev-oncall@example.com</text>
  <text x="252" y="452" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Every day · 08:00 Europe/Paris · last 1 day · severity = FATAL</text>
  <text x="252" y="468" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Filters: (none — every company)</text>
  <rect x="252" y="482" width="64" height="20" rx="10" fill="rgba(255,255,255,0.04)" stroke="#475569" strokeWidth="1"/>
  <text x="284" y="496" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">DISABLED</text>

  <text x="240" y="552" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Send timeline</text>
  <line x1="240" y1="558" x2="788" y2="558" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="576" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">06:30  Operations · VRAC          → operations@example.com         · 12 events · 4 invoices</text>
  <text x="240" y="592" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">07:00  Accounting · ACME          → accounting@acme + ops-acme    · 7 events · 3 invoices</text>

  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add digest</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">One per recipient subset</text>
  <line x1="200" y1="92" x2="240" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dd-arrow)"/>

  <rect x="820" y="128" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Schedule</text>
  <text x="830" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cron + timezone</text>
  <line x1="820" y1="144" x2="788" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dd-arrow)"/>

  <rect x="820" y="226" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="241" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Equality filters</text>
  <text x="830" y="254" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">KCO, Activity, Source, Rule, …</text>
  <line x1="820" y1="240" x2="788" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dd-arrow)"/>

  <rect x="20" y="396" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="411" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enable / disable</text>
  <text x="30" y="424" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Pause without deleting</text>
  <line x1="200" y1="412" x2="240" y2="492" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dd-arrow)"/>

  <rect x="20" y="552" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="567" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Send timeline</text>
  <text x="30" y="580" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Today's plan + row counts</text>
  <line x1="200" y1="568" x2="240" y2="578" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dd-arrow)"/>
</svg>

---

## Digest fields

Each digest is one row in the catalogue. The edit pane has four sections.

### 1. Identification

| Field | Required | What |
|---|---|---|
| **Name** | yes | Free text. Shown in the catalogue list and at the top of the email body. Example: *Accounting · ACME*. |
| **Recipients** | yes | One or more email addresses, comma- or semicolon-separated. Every address gets the same email — there's no per-address customisation here; create another digest if recipients should see different cuts. |
| **Enabled** | yes (default: `on`) | When `off`, the digest is kept in the catalogue but skipped at send time. Useful for pausing a digest during a maintenance window without losing the configuration. |

### 2. Schedule

| Field | Required | What |
|---|---|---|
| **Send time** | yes (default: `07:00`) | Time of day the digest runs. Hours / minutes; seconds are ignored. |
| **Timezone** | yes (default: server timezone) | A IANA timezone (e.g. `Europe/Paris`). Each digest runs in its own timezone so a multi-region install can send one digest at 07:00 Paris and another at 07:00 New York. |
| **Lookback window** | yes (default: `yesterday and today` = 1 day) | How far back the digest reaches when collecting events. Values: `today` (current day), `1 day` (yesterday + today — the default), `7 days`, `30 days`, or a custom `N days`. The window is rolling and ends at send time. |

### 3. Severity filter

A small chip group identical to the [Integration Errors](../../application/integration-errors.md) toolbar:

| Severity | When to use |
|---|---|
| `All` | The team wants every error. |
| `FATAL` | Critical pipeline aborts only — typically the dev / oncall channel. |
| `ERROR` | The standard production set — Schematron failures, PA rejections. |
| `WARNING` | Lower-severity issues that don't block submission (deprecated tax codes, optional fields missing). |
| `INFO` | Verbose — typically used for diagnostic digests during incident response. |

Pick **one** severity (or `All`). A multi-severity digest is two separate digest rows in the catalogue.

### 4. Per-column equality filters

The digest carries a list of `(column, value)` pairs that narrow the event set. The supported columns are the same equality-filterable columns the [Integration Errors](../../application/integration-errors.md) page exposes through *List Views*:

| Column | Example value | Common use |
|---|---|---|
| **Company** (`KCO`) | `00070` | One digest per company on a multi-company install. |
| **Activity code** | `ISC`, `VRAC`, `BIP` | One digest per business activity. |
| **Source** | `EN16931`, `CIUSFR`, `FREXTIC`, `CPRO`, `XSD`, `UBL`, `INTEG` | Send the UBL-validation set to the template team, the integration set to the ops team. |
| **Rule** | `BR-CL-23`, `UBL_CREATION` | Watch a specific failing rule. |
| **Business unit** | `MU-LYO`, `MU-PAR` | Per-BU routing. |

Filters combine with **AND**. Empty filters = all rows. Adding two values to the same column requires two digests.

---

## What the email looks like

The body summarises the period, the row counts and a top-5 of failing rules:

```text title="Daily digest email body"
Subject: NomaUBL daily digest — Accounting · ACME — 7 errors, 3 invoices

Period:        last 1 day (2026-06-01 07:00 → 2026-06-02 07:00 Europe/Paris)
Filters:       company = 00070, activity = ISC, severity = ERROR / FATAL
Events:        7
Invoices:      3

Top failing rules
  BR-CL-23    Currency code must follow ISO 4217.                         5
  BR-FR-12    SIRET BT-46 must be present on a French B2B invoice.        1
  PA_SEND     PA submission rejected at HTTP level (timeout / 4xx / 5xx). 1

The full event list is attached (errors-2026-06-02.xlsx).
```

The attachment is the same Excel file the *Detailed* tab of [Integration Errors](../../application/integration-errors.md) exports — every event of every invoice in scope, with columns matching the table.

When the period has **zero errors**, the digest is sent anyway with a short *no errors in this period* body (no attachment). Operators have asked for the positive signal — knowing the digest ran without failures is itself information.

---

## How it runs

The scheduler is a daemon inside NomaUBL that wakes up every minute and checks the catalogue for digests whose **next send time** has just elapsed. The query is fast (the catalogue is small) and stateless — the digest's last-sent timestamp lives on the row itself.

| State | What |
|---|---|
| `Enabled = on` | The next firing of `<send_time>` in `<timezone>` collects events, builds the Excel and sends. The row's *last sent* badge updates. |
| `Enabled = off` | The catalogue row is skipped at every tick. |
| SMTP failure | The send is retried on the next tick (one minute later) for up to 5 attempts; after that the failure is logged in the [Processing Log](../../management/processing-log.md) with the SMTP error, and the digest is marked *failed* for the day. Manual re-send via the *Send now* button at any time. |

The digest runtime reads SMTP configuration from the platform-wide [System → Global](./global.md) `smtp` section — the same SMTP that drives [Notification Rules](../../management/notification-rules.md) and the per-invoice notifications. Make sure the credentials work there before wiring a daily digest.

### Send-now button

Each row in the catalogue has a *Send now* button that fires the digest immediately, regardless of the scheduled time. The window, the filters and the severity from the row are used as-is. Useful for:

- Verifying a digest after creating or editing it.
- Pushing a one-off after an incident — the same data, sent now instead of waiting for the next tick.

The *Send now* run also updates the *last sent* badge, so the scheduled run that day still goes out if the schedule hasn't fired yet.

---

## Tips & best practices

- **One digest per team, not per recipient.** A single digest with three CC addresses costs less to maintain than three digests with one address each — the cuts are typically aligned by team, not by individual.
- **Keep the lookback window short.** The default `1 day` is usually right. A `7 days` window means re-reading the same errors every morning, which dilutes the signal.
- **Use the *Enabled* toggle for maintenance windows.** Pausing a digest during a planned outage prevents a flood of expected errors from reaching the recipients. Re-enable when the window closes.
- **Send-now is the smoke test.** After creating or editing a digest, click *Send now*. The email lands in seconds and confirms the configuration before the next scheduled tick.
- **Severity routing keeps the on-call clean.** A FATAL-only digest to the on-call channel + an ERROR digest to the production team is the typical setup — the on-call doesn't drown in Schematron noise.

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| The digest's row in the catalogue shows *failed*. | SMTP rejection (auth, relay refused, recipient bounce). | Open the [Processing Log](../../management/processing-log.md), filter by `daily-digest`, read the SMTP error. Fix the [Global → SMTP](./global.md) credentials, then *Send now*. |
| The email arrived but the attachment is empty. | The filter set has no matching events in the lookback window. | Loosen one filter (e.g. drop the activity code) or extend the window to `7 days`; *Send now* to re-check. |
| The attachment contains errors older than the lookback window. | The lookback window selects **invoices** that have at least one error in the window, then exports **every** error of those invoices — the same behaviour as the [Detailed view](../../application/integration-errors.md#detailed-view). This is intentional. | If you need strict-window export, do it from the *By event* tab manually. |
| Two recipients get the same digest twice. | Two digest rows in the catalogue have overlapping recipient lists. | Audit the catalogue; merge or de-dup. |
| The digest fires at the wrong hour. | Timezone is set to the wrong zone. | Open the digest, set the correct IANA timezone (`Europe/Paris`, `Africa/Casablanca`, …) and save. |
| The form lost the values after Save. *(2026.05.x)* | Fixed in 2026.06.02. | Upgrade to the current build — the form now refreshes from the freshly-saved record. |

---

## What's next

- [Integration Errors](../../application/integration-errors.md) — the SPA page the digest summarises; same data, interactive triage.
- [Notification Rules](../../management/notification-rules.md) — per-event email notifications (one email per matching invoice); useful when latency matters more than the daily roll-up.
- [System → Global → SMTP](./global.md) — the outbound SMTP configuration the digest reads from.
- [Processing Log](../../management/processing-log.md) — diagnostics for failed digest sends.
