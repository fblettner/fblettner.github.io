---
title: Lifecycle Checks
description: "Schedule the NomaUBL lifecycle integrity check (backfill PA statuses the poll missed) and the ordering check (re-sequence events recorded out of order) to run daily without an operator — the same repairs as the Retrieve Statuses page buttons, plus the matching CLI modes for cron."
keywords: [NomaUBL, lifecycle checks, integrity check, ordering check, status backfill, scheduler, cron, status-integrity, status-order-check, JD Edwards, SAP, NetSuite, custom ERP]
---

# Lifecycle Checks

The **Lifecycle Checks** page schedules the two lifecycle maintenance checks so they run **daily without an operator** — the same operations offered as buttons on the [Retrieve Statuses](../sync/retrieve-statuses.md#integrity-checks) page:

- the **integrity check** — backfills the status events the Plateforme Agréée delivered but the regular poll missed;
- the **ordering check** — re-sequences lifecycle events recorded out of order.

Both repairs are **idempotent** and chronologically ordered: re-running a check over an already-clean lifecycle changes nothing, so a scheduled overlap is safe.

---

## At a glance

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="lc-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="30" y="24" width="940" height="252" rx="14" fill="url(#lc-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="50" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Lifecycle checks</text>
  <rect x="820" y="36" width="130" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="885" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">＋ Add</text>
  <line x1="30" y1="70" x2="970" y2="70" stroke="#1f2937" strokeWidth="1"/>

  <rect x="50" y="88" width="900" height="80" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="66" y="110" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Nightly reconciliation</text>
  <text x="66" y="130" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Every day · 02:00 · integrity (last 1 day) + ordering · repair</text>
  <rect x="66" y="140" width="64" height="18" rx="9" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="98" y="153" fill="#22c55e" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">ENABLED</text>

  <rect x="50" y="180" width="900" height="76" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="66" y="202" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Morning audit</text>
  <text x="66" y="222" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Every day · 07:30 · integrity (last 7 days) · report only</text>
  <rect x="66" y="232" width="64" height="18" rx="9" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="98" y="245" fill="#22c55e" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">ENABLED</text>
</svg>

---

## How the page is used

Each row is one **scheduled check** — several can coexist (for example a nightly repair plus a wider weekly audit in *report only* mode). **Add** creates one; the per-row card opens the editor.

The scheduler runs in serve mode; changes take effect on the next scheduled run.

---

## Check fields

| Field | Description |
|---|---|
| **Description** | Free text shown in the list (e.g. *Nightly reconciliation*). |
| **Enabled** | When off, the check stays in the list but is skipped at run time. |
| **Hour** / **Minute** | Time of day the check runs, in the server timezone. |
| **Integrity check (missing statuses)** | When ticked, fetches every PA event of the window and backfills the ones missing from the lifecycle. |
| **Compare PA events from the last N days** | The integrity window (default: `1`). The check re-fetches every PA event of the window; re-checking already-recorded events is a no-op, so a generous overlap is safe. |
| **Ordering check (events out of order)** | When ticked, re-sequences lifecycle events recorded out of order — internal platform stages recorded after a standard status, and standard statuses in the wrong numeric order. |
| **Repair automatically** | When ticked, the run applies the repairs; left off, it only **reports** what it would change, leaving the lifecycle untouched. |

:::info[Report first, repair once confident]
Start a new schedule in **report only** mode and read a few runs on [Retrieve Statuses](../sync/retrieve-statuses.md#integrity-checks) before enabling **Repair automatically** — the manual page shows exactly which events each mode would backfill or re-sequence.
:::

---

## Command line

The same two checks run from the CLI for a cron outside the web server:

```bash
# Integrity check — backfill missing PA statuses
java -jar nomaubl.jar -status-integrity <configFile> [--lookback N] [--since YYYY-MM-DD] [--apply] [--notify]

# Ordering check — re-sequence out-of-order events
java -jar nomaubl.jar -status-order-check <configFile> [--apply]
```

| Flag | Effect |
|---|---|
| **`--lookback <N>`** | Integrity window in days (mutually exclusive with `--since`). |
| **`--since <YYYY-MM-DD>`** | Integrity window start date. |
| **`--apply`** | Apply the repairs; omit to report only. |
| **`--notify`** | Fire the notification rules on backfilled transitions (integrity only). |

---

## Tips & best practices

- **One nightly repair, one wider audit.** A `1`-day repair every night keeps the lifecycle current; a weekly `7`-day *report only* run catches anything the nightly window missed without changing data on its own.
- **The repairs are the Retrieve Statuses buttons.** Nothing here does more than the manual [integrity and ordering checks](../sync/retrieve-statuses.md#integrity-checks) — the page only puts them on a timer.
- **Leave `--notify` off for wide catch-up runs.** Backfilling a large window with notifications on can flood recipients with historical transitions; enable it only on the tight nightly window.
