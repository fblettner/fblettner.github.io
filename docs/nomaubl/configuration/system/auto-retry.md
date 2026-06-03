---
title: Auto-Retry
description: "Settings → Auto-Retry schedules a daily sweep that replays every invoice in a chosen technical-error status (default 9904 at 3 a.m.) back to the Plateforme Agréée. Multi-status picker, optional lookback window, per-row throttle, shared with the Send Failed card on the Tech Dashboard. The overnight pickup for batches stuck on the PA side."
keywords: [NomaUBL, auto-retry, nightly retry, send failed, status 9904, 9905, 9907, Plateforme Agréée, PA replay, scheduled sweep, throttle, lookback, JD Edwards, SAP, NetSuite, custom ERP]
---

# Auto-Retry

The **Auto-Retry** screen schedules a recurring sweep that replays every invoice in a chosen technical-error status back to the Plateforme Agréée (PA). The default row sweeps status `9904` (*Send failed*) every night at 3 a.m. — the overnight batch's safety net so that anything stuck on the PA side at the close of business is picked up before operations resume in the morning.

Multiple rows can coexist: one per (hour, status list) combination. The same code path drives the manual *Resend all N* button on the [Tech Dashboard's Send Failed card](../../application/tech-dashboard.md#send-failed-row-2-span-4-20260603), so the manual replay and the scheduled replay produce identical results — one is fired by hand, the other by cron.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. The replay reads `F564231` to pick invoices in scope and calls the configured PA api-connector for each one; the source format is transparent.

:::info[Added in 2026.06.03]
The page is brand new. It pairs with the new **Send Failed** card on the Tech Dashboard — the dashboard does the immediate one-click replay, Auto-Retry does the unattended overnight pickup. The two use the same replay engine and respect the same per-call throttle (default 100 ms).
:::

---

## Opening the editor

- Sidebar → **Configuration → System → Auto-Retry**.
- Or from the [Tech Dashboard](../../application/tech-dashboard.md) → *Send Failed* card → *Schedule recurring…* link (shortcut from the manual button to the catalogue).

---

## At a glance

<svg viewBox="0 0 1000 560" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ar-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ar-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ar-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="530" rx="14" fill="url(#ar-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Auto-Retry</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="80" height="28" rx="6" fill="url(#ar-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="280" y="102" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">＋ Add</text>

  <rect x="328" y="84" width="160" height="28" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="408" y="102" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">Status (multi) ▾</text>

  <rect x="496" y="84" width="140" height="28" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="504" y="102" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">☑ Enabled only</text>

  <rect x="704" y="84" width="78" height="28" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="743" y="102" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">↻ Refresh</text>

  <rect x="240" y="128" width="540" height="120" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="148" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Overnight send-failed sweep</text>
  <text x="252" y="164" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Replays every invoice in technical-error status to the PA</text>
  <text x="252" y="184" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Every day · 03:00 Europe/Paris · throttle = 100 ms</text>
  <text x="252" y="200" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Statuses: 9904 (Send failed) · Lookback: 7 days</text>
  <rect x="252" y="214" width="56" height="20" rx="10" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="280" y="228" fill="#22c55e" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">ENABLED</text>
  <rect x="314" y="214" width="120" height="20" rx="10" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="374" y="228" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">last run 06/03 · 12 retried</text>
  <rect x="708" y="214" width="60" height="22" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="738" y="229" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Edit</text>

  <rect x="240" y="262" width="540" height="120" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="282" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Mid-day tech-error catch-up</text>
  <text x="252" y="298" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Hourly retry on every technical-error bucket</text>
  <text x="252" y="318" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Every hour · 50-minute offset · throttle = 250 ms</text>
  <text x="252" y="334" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Statuses: 9904, 9905, 9907 · Lookback: 24 hours</text>
  <rect x="252" y="348" width="56" height="20" rx="10" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="280" y="362" fill="#22c55e" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">ENABLED</text>

  <rect x="240" y="396" width="540" height="120" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="416" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">PA-outage drain (manual trigger)</text>
  <text x="252" y="432" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Throttled drain — re-enable after a PA incident</text>
  <text x="252" y="452" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Disabled by default · throttle = 50 ms</text>
  <text x="252" y="468" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Statuses: 9904, 9905, 9907, 213 · Lookback: 0 (no filter)</text>
  <rect x="252" y="482" width="64" height="20" rx="10" fill="rgba(255,255,255,0.04)" stroke="#475569" strokeWidth="1"/>
  <text x="284" y="496" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">DISABLED</text>

  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add sweep</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">One row per schedule</text>
  <line x1="200" y1="92" x2="240" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>

  <rect x="820" y="128" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cron-style schedule</text>
  <text x="830" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Hour + minute + timezone</text>
  <line x1="820" y1="144" x2="788" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>

  <rect x="820" y="240" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Multi-status picker</text>
  <text x="830" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Tagged Error – tech only</text>
  <line x1="820" y1="254" x2="788" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>

  <rect x="20" y="396" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="411" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enable / disable</text>
  <text x="30" y="424" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Pause without deleting</text>
  <line x1="200" y1="412" x2="240" y2="492" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
</svg>

---

## Sweep fields

Each row is one entry in the catalogue. The edit pane has four sections.

### 1. Identification

| Field | Required | What |
|---|---|---|
| **Name** | yes | Free text. Shown in the catalogue list and on the Tech Dashboard's Scheduler card. Example: *Overnight send-failed sweep*. |
| **Description** | no | One-line caption to help colleagues understand what the sweep is for. |
| **Enabled** | yes (default: `on`) | When `off`, the row stays in the catalogue but the scheduler skips it. Useful for pausing during a maintenance window or a deliberate PA outage. |

### 2. Schedule

| Field | Required | What |
|---|---|---|
| **Hour** | yes (default: `03`) | Hour of day in 24-h format. The sweep fires at that hour exactly. |
| **Minute** | no (default: `00`) | Minute of the hour. Use this to spread several sweeps across an hour so they don't all start at the same second. |
| **Timezone** | yes (default: server timezone) | IANA timezone (e.g. `Europe/Paris`). Each sweep runs in its own timezone so a multi-region install can stagger sweeps per region. |
| **Cadence** | yes (default: `daily`) | `daily`, `hourly`, or `every N hours`. Hourly + a 50-minute offset gives a sweep at `00:50`, `01:50`, … — a busy install benefits from the higher cadence; the default daily 03:00 is enough for most. |

### 3. Status filter

The multi-select picker lists only statuses tagged **Error – tech** in the [Status catalogue](./statuses.md):

| Code | Label | When it applies |
|---|---|---|
| `9904` | *Send failed* | PA submission rejected at HTTP level (timeout, 4xx, 5xx). The default sweep target. |
| `9905` | *Mock send failed* | Same as 9904 but in mock mode. Typically only seen during testing. |
| `9907` | *Status retrieval failed* | PA submission landed but the lifecycle poll keeps erroring. |
| `213` | *PA technical rejection* | The PA side reported a technical reject after acceptance. |

Pick one or several. A single row can sweep every tech-error bucket at once — useful in a single nightly catch-up that covers everything.

Business-error statuses (`206`, `207`, `208`, …) are deliberately **not selectable** here — they need operator action upstream, not a blind replay. The picker enforces that constraint.

### 4. Replay options

| Field | Default | What |
|---|---|---|
| **Lookback window** | `0` *(no time filter)* | When set, restricts the sweep to invoices whose status was last updated within the window (in hours or days). `7 days` is the typical *catch up on the last week* setting; `0` means *every invoice in the matching status, regardless of age*. |
| **Throttle** | `100` ms | Delay between two PA calls. Matches the manual *Resend all* button on the dashboard. Raise it (250 ms, 500 ms) for installs where the PA rate-limits aggressively; lower it (50 ms) for a one-off drain after a PA outage. |
| **Max invoices per run** | unlimited | Cap the sweep at N invoices to bound the run time on big batches. The sweep picks the oldest matching invoices first and stops at N; the rest are picked up on the next scheduled run. |

---

## What happens at the scheduled hour

The scheduler is a daemon inside NomaUBL that wakes up every minute and checks every enabled row for *next-fire* time. The query is cheap; the catalogue is small.

| Step | What |
|---|---|
| **1. Select invoices** | `SELECT * FROM F564231 WHERE current_status IN (<status_list>)`, with optional `last_update >= NOW() - <lookback>` and `LIMIT <max>` when set. Oldest first. |
| **2. Replay each one** | For every invoice, call the PA api-connector's `submit` task — same code path as the original *Send* action. The lifecycle row is updated with the new status. |
| **3. Throttle** | Wait `<throttle>` ms between two calls. |
| **4. Honour Cancel** | The sweep checks for a cancel signal between two invoices — operators can cancel from the dashboard's Scheduler card without waiting for the run to finish. |
| **5. Log the run** | Write a row to `F564237` with the sweep name, the start / end timestamp, the count processed / succeeded / failed. Visible on the Tech Dashboard's *Live process events* widget. |

The run progress is also visible in the [shared progress window](../../application/tech-dashboard.md#shared-progress-window) — same component as the manual *Resend all* button. Click any active sweep on the Scheduler card to open it.

If the scheduler is offline (server stopped, JVM crash) when a row was due to fire, the run is **skipped silently** — there is no missed-run replay. The next scheduled hour fires normally. To pick up missed work, run the manual *Resend all* on the dashboard or trigger the row from the catalogue with *Run now*.

### Run-now button

Each row in the catalogue has a *Run now* button that fires the sweep immediately, using the row's current configuration. Useful for:

- Verifying a new sweep before letting it run on its schedule.
- Recovering a missed run after a server restart.
- One-off catch-up after a PA outage — flip a disabled *PA-outage drain* row on, *Run now*, flip it off when done.

The *Run now* run honours the same throttle, same lookback, same status list as a scheduled run. It does **not** advance the scheduled-run cadence — the next scheduled time still fires.

---

## Tips & best practices

- **Keep the default 03:00 sweep alone.** It covers the most common case (overnight batches stuck on the PA). Adding a row only makes sense when you need a different cadence or a different status set.
- **Spread sweeps with a minute offset.** Two sweeps both firing at `:00` compete for connection pool slots. Stagger them at `:00`, `:15`, `:30` to flatten the load.
- **Raise the throttle when the PA rate-limits.** A `429 Too Many Requests` after a few minutes of sweeping is a hint to bump the throttle to 250 ms or 500 ms. Match the throttle to the PA's documented per-second budget.
- **Disable rather than delete during a known outage.** A row marked *DISABLED* is intentional and visible; a deleted row is invisible and easy to forget when the outage ends.
- **Don't replay business errors.** The picker blocks it. If an invoice is in `207` (*Disputed by recipient*), no amount of replay fixes it — only operator action upstream does.
- **Use the dashboard for one-shots, Auto-Retry for habits.** The two paths share code; what differs is who fires them. A one-off drain after an incident is a click; the daily safety net is a row.

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Scheduled row doesn't fire. | Row is *DISABLED*. | Open the row, toggle *Enabled* on, save. |
| Row fires but processes zero invoices. | The status list and the lookback window combine to zero matches. | Inspect the [E-Invoicing](../../application/invoices.md) page with the same status filter; either widen the lookback or relax the status list. |
| Sweep finishes but the count is far below the [Send Failed card's](../../application/tech-dashboard.md#send-failed-row-2-span-4-20260603) number. | The dashboard counts every `9904` regardless of age; a row with a 7-day lookback ignores anything older. | Either drop the lookback (`0` = no filter) or schedule a second row with a wider lookback for old back-stock. |
| `429 Too Many Requests` errors in the run log. | PA rate-limit hit. | Raise the throttle (e.g. 100 ms → 250 ms) on the row and re-run. |
| Two rows both fired at `03:00` and one stalled the other. | No minute offset — they hit the connection pool simultaneously. | Stagger the rows (`:00`, `:15`, `:30`). |
| *Run now* button is greyed out. | The sweep is already running (a scheduled or earlier *Run now*). | Open the dashboard's Scheduler card → click the active row → use the modal's *Cancel* if needed, or wait. |
| Last-run badge stays *never* on a new row. | The row's hour is in the future — it hasn't fired yet — and no *Run now* has been clicked. | Click *Run now* to verify the configuration; the next scheduled run lands as expected. |

---

## What's next

- [Tech Dashboard → Send Failed](../../application/tech-dashboard.md#send-failed-row-2-span-4-20260603) — the one-click manual replay; same code path, fired by hand.
- [Shared progress window](../../application/tech-dashboard.md#shared-progress-window) — the modal every long-running operation opens.
- [E-Invoicing](./einvoicing.md) → the PA api-connector that the replay calls; tune timeouts and retry counts there.
- [Statuses](./statuses.md) — the catalogue of status codes, including the *Error – tech* tag that filters the multi-status picker on this page.
- [Daily Digest](./daily-digest.md) — schedule a daily email summarising the integration errors; useful pairing with Auto-Retry so the on-call team sees what the sweep couldn't fix.
