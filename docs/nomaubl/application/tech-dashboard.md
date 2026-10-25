---
title: IT dashboard
description: "The NomaUBL IT dashboard (Tech Dashboard): a health strip (application, database, disk, memory, scheduler, configuration), the four action cards (send failed, waiting for review, to reprocess, to reprocess in full), processing over the last 14 days (volume, errors, retries, time per document), what is running right now, recent errors, and folded technical details (system, filesystem, JVM, configuration check, database tables, links)."
keywords: [NomaUBL, IT dashboard, tech dashboard, health, JVM, heap, database ping, disk, scheduler, configuration check, send failed, resend, reprocess, documents processed per day, error rate, retry rate, processing time, running processes, live process events, active sessions, recent errors, JD Edwards, SAP, NetSuite, custom ERP]
---

# IT dashboard

The **IT dashboard** (*Tech Dashboard* in the application) is the IT team's view of NomaUBL. It reads top-down like a checklist: **is everything up?** (a health strip), **what is there to do?** (four action cards with their bulk action), **how did processing go over the last 14 days?**, **what is running right now?**, and the **recent errors**. The detailed technical cards — system, filesystem, JVM, configuration check, database tables — are folded at the bottom and open from the health strip. It complements the [Operations](./dashboard.md) dashboard, which follows the invoices rather than the server.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. The cards read host-level metrics and the NomaUBL processing log.

---

## Opening the page

- Menu → **Navigation → Tech Dashboard**, after Operations.
- The page title and description stay in English in both languages, as do most card titles.

---

## At a glance

<svg viewBox="0 0 1200 570" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tdb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tdb-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tdb-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tdb-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="530" rx="14" fill="url(#tdb-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tech Dashboard</text>
  <rect x="876" y="34" width="84" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="918.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Refresh</text>
  <text x="240" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IS EVERYTHING UP?</text>
  <rect x="240.0" y="88" width="111.66666666666667" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="252.0" cy="102" r="3.5" fill="#4ade80"/>
  <text x="260.0" y="105" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="250.0" y="122" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">2026.10.25.1</text>
  <text x="250.0" y="134" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">up for 3 d</text>
  <rect x="361.6666666666667" y="88" width="111.66666666666667" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="373.6666666666667" cy="102" r="3.5" fill="#4ade80"/>
  <text x="381.6666666666667" y="105" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Database</text>
  <text x="371.6666666666667" y="122" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">4 ms</text>
  <rect x="483.33333333333337" y="88" width="111.66666666666667" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="495.33333333333337" cy="102" r="3.5" fill="#4ade80"/>
  <text x="503.33333333333337" y="105" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Disk</text>
  <text x="493.33333333333337" y="122" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">38 % free</text>
  <rect x="605.0" y="88" width="111.66666666666667" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="617.0" cy="102" r="3.5" fill="#4ade80"/>
  <text x="625.0" y="105" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Memory</text>
  <text x="615.0" y="122" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">41 %</text>
  <text x="615.0" y="134" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">heap</text>
  <rect x="726.6666666666667" y="88" width="111.66666666666667" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="738.6666666666667" cy="102" r="3.5" fill="#4ade80"/>
  <text x="746.6666666666667" y="105" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Scheduler</text>
  <text x="736.6666666666667" y="122" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Running</text>
  <text x="736.6666666666667" y="134" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">next run 14:05</text>
  <rect x="848.3333333333334" y="88" width="111.66666666666667" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="860.3333333333334" cy="102" r="3.5" fill="#fb923c"/>
  <text x="868.3333333333334" y="105" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Configuration</text>
  <text x="858.3333333333334" y="122" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">1 issue</text>
  <text x="240" y="162" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TO DO</text>
  <rect x="240.0" y="170" width="172.5" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="190" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Send failed (9904)</text>
  <text x="252.0" y="204" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">PA delivery failures</text>
  <text x="400.5" y="218" fill="#f87171" fontSize="14" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">3</text>
  <rect x="422.5" y="170" width="172.5" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="434.5" y="190" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Waiting for review</text>
  <text x="434.5" y="204" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Held before sending (flag W)</text>
  <text x="583.0" y="218" fill="#fb923c" fontSize="14" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">6</text>
  <rect x="605.0" y="170" width="172.5" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="190" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">To reprocess</text>
  <text x="617.0" y="204" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Not transmitted</text>
  <text x="765.5" y="218" fill="#fb923c" fontSize="14" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <rect x="787.5" y="170" width="172.5" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="799.5" y="190" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">To reprocess in full</text>
  <text x="799.5" y="204" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Validation failed</text>
  <text x="948.0" y="218" fill="#f87171" fontSize="14" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <text x="240" y="248" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSING · LAST 14 DAYS</text>
  <rect x="240" y="256" width="720" height="128" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="254" y="266" width="52" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="280.0" y="279.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Volume</text>
  <rect x="312" y="266" width="52" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="338.0" y="279.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Errors</text>
  <rect x="370" y="266" width="57" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="398.5" y="279.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Retries</text>
  <rect x="433" y="266" width="107" height="20" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="486.5" y="279.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Time per document</text>
  <text x="254" y="302" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Documents processed per day</text>
  <rect x="262.9" y="332.5" width="31.6" height="37.5" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="262.9" y="331.8" width="31.6" height="0.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="312.3" y="323.1" width="31.6" height="46.9" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="312.3" y="322.0" width="31.6" height="1.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="361.8" y="332.1" width="31.6" height="37.9" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="361.8" y="331.5" width="31.6" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="411.2" y="331.1" width="31.6" height="38.9" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="411.2" y="330.3" width="31.6" height="0.8" fill="#f87171" fillOpacity="0.85"/>
  <rect x="460.6" y="338.5" width="31.6" height="31.5" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="460.6" y="338.4" width="31.6" height="0.2" fill="#f87171" fillOpacity="0.85"/>
  <rect x="510.0" y="324.4" width="31.6" height="45.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="510.0" y="323.6" width="31.6" height="0.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="559.5" y="331.9" width="31.6" height="38.1" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="559.5" y="331.0" width="31.6" height="0.9" fill="#f87171" fillOpacity="0.85"/>
  <rect x="608.9" y="328.7" width="31.6" height="41.3" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="608.9" y="327.6" width="31.6" height="1.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="658.3" y="338.6" width="31.6" height="31.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="658.3" y="338.5" width="31.6" height="0.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="707.8" y="332.6" width="31.6" height="37.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="707.8" y="332.2" width="31.6" height="0.4" fill="#f87171" fillOpacity="0.85"/>
  <rect x="757.2" y="339.6" width="31.6" height="30.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="757.2" y="339.5" width="31.6" height="0.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="806.6" y="330.5" width="31.6" height="39.5" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="806.6" y="329.4" width="31.6" height="1.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="856.0" y="326.9" width="31.6" height="43.1" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="856.0" y="326.0" width="31.6" height="0.9" fill="#f87171" fillOpacity="0.85"/>
  <rect x="905.5" y="342.0" width="31.6" height="28.0" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="905.5" y="341.2" width="31.6" height="0.8" fill="#f87171" fillOpacity="0.85"/>
  <rect x="760" y="294" width="9" height="9" rx="2" fill="#4ade80"/>
  <text x="773" y="302" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Processed</text>
  <rect x="827.84" y="294" width="9" height="9" rx="2" fill="#f87171"/>
  <text x="840.84" y="302" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">In technical error</text>
  <text x="240" y="406" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RIGHT NOW</text>
  <rect x="240.0" y="414" width="172.5" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="436" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Running processes</text>
  <rect x="422.5" y="414" width="172.5" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="434.5" y="436" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Live process events</text>
  <rect x="605.0" y="414" width="172.5" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="436" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Scheduler</text>
  <rect x="787.5" y="414" width="172.5" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="799.5" y="436" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Active sessions</text>
  <rect x="240" y="464" width="720" height="28" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="482" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Recent errors</text>
  <rect x="240" y="502" width="720" height="28" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="520" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">▸ Technical details — system, filesystem, JVM, configuration check, database tables, links</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Health strip</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a tile opens its detail</text>
  <line x1="200" y1="113.0" x2="240" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tdb-arrow)"/>
  <rect x="20" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">To do</text>
  <text x="30" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">four queues for IT</text>
  <line x1="200" y1="197.0" x2="240" y2="198" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tdb-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">14-day tabs</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a day opens its invoices</text>
  <line x1="200" y1="317.0" x2="254" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tdb-arrow)"/>
  <rect x="20" y="458" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="473" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recent errors</text>
  <text x="30" y="486" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">live tail of the log</text>
  <line x1="200" y1="475.0" x2="240" y2="478" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tdb-arrow)"/>
  <rect x="1000" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Scheduler tile</text>
  <text x="1010" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">scrolls to its card</text>
  <line x1="1000" y1="113.0" x2="782.5000000000001" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tdb-arrow)"/>
  <rect x="1000" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Each card</text>
  <text x="1010" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the invoices, actions</text>
  <line x1="1000" y1="197.0" x2="960" y2="198" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tdb-arrow)"/>
  <rect x="1000" y="410" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="425" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Right now</text>
  <text x="1010" y="438" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">processes, events, sessions</text>
  <line x1="1000" y1="427.0" x2="960" y2="432" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tdb-arrow)"/>
  <rect x="1000" y="496" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="511" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Technical details</text>
  <text x="1010" y="524" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">folded by default</text>
  <line x1="1000" y1="513.0" x2="960" y2="516" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tdb-arrow)"/>
</svg>

A **Refresh** button in the page header reloads every card.

---

## Health strip

The **Is everything up?** strip gives six tiles, each with a green, orange or red dot. A click on a tile scrolls to its detail and, except for *Scheduler*, opens the folded [technical details](#technical-details):

| Tile | Shows | Opens |
|---|---|---|
| **Application** | The release and `up for …`. | System Health |
| **Database** | The ping in ms, or *Unreachable*. | System Health |
| **Disk** | `… % free` on the fullest disk. | Filesystem |
| **Memory** | Heap use in %. | JVM · threads + GC |
| **Scheduler** | *Running*, `… paused` or `… job(s) failed`, and the next run. | The Scheduler card in *Right now* |
| **Configuration** | *No issue* or `… issue(s)`. | Configuration check |

---

## To do

Four cards count the invoices waiting for an IT action, each with a button that handles them all at once through the [shared progress window](#shared-progress-window). The manual one-click retry of *Send failed* and the scheduled overnight sweep of the [Auto-Retry](../sync/scheduled-jobs/auto-retry.md) page call the same replay path.

### Send failed (9904) \{#send-failed\}

A single big-number card showing how many invoices are currently in *Send failed* (status `9904`). When the count is non-zero, a **Resend all N** button below the number replays every matching invoice to the [Plateforme Agréée](../configuration/system/einvoicing.md). Clicking it opens the [shared progress window](#shared-progress-window) — live counters, a *Cancel* button and a *Run in background* button that hides the window while the work keeps going server-side. The resend is throttled at **100 ms per call** so the PA stays inside its rate budget.

| Element | Behaviour |
|---|---|
| Count | Live total — refreshed by the page's *Refresh* button and at every dashboard mount. Coloured red when non-zero. |
| **Resend all N** button | Disabled when the count is zero. Click to replay every status-`9904` invoice; opens the progress window. |
| Progress window | Live counters (*processed* / *succeeded* / *failed*), a *Cancel* button and a *Run in background* button — same component as every long-running operation on the platform. |
| Throttle | 100 ms between calls — fixed in code; not operator-tunable here. The [Auto-Retry](../sync/scheduled-jobs/auto-retry.md) schedule exposes its own throttle for the scheduled equivalent. |

Use the manual button for a one-shot replay during business hours (a brief PA outage that cleared, a small batch you want resent now). For unattended overnight retries, schedule a row on the [Auto-Retry](../sync/scheduled-jobs/auto-retry.md) page — same code path, no operator action required.

### Waiting for review \{#waiting-for-review\}

A big-number card that counts the invoices **held before sending** — the ones whose document type carries the `W` (*Waiting*) send flag on the [Document Types](../configuration/system/document-types.md) page. These invoices were generated and validated but deliberately not transmitted, so a user can check them first. When the count is non-zero, a **Send all N** button releases every held invoice to the [Plateforme Agréée](../configuration/system/einvoicing.md) in one action, through the same [progress window](#shared-progress-window) as *Send Failed*. It mirrors the *Send Failed* card — same big number, same one-click bulk action — but for the review queue rather than the failure queue.

### To reprocess \{#to-reprocess\}

A big-number card that counts the invoices **eligible for reprocessing** — those the platform **deposited but did not transmit** (status 200, reason `NON_TRANSMISE`), on a template with **Allow reprocess** enabled. When the count is non-zero, a **Reprocess all N** button **reprints** every eligible invoice from its archived source — readable PDF / XML and UBL file regenerated, no database change, no new validation — through the same [progress window](#shared-progress-window). Reprocessing keeps each invoice's status, records a *Retraitement* history entry and never re-sends to the platform — see [Documents → Allow reprocess](../management/documents.md) for the per-template switch and [Invoices](invoices.md#reprocess) for the same action on selected rows.

### To reprocess in full \{#to-reprocess-full\}

The counterpart of the previous card for **validation-failed** invoices (`9905`) on a template with **Allow full reprocess** enabled. Once the data was corrected at the source, a **Reprocess all N** button reprocesses every eligible invoice **in full** from its archived source: the enrichment is queried again, the UBL regenerated, validated and sent to the PA when the template and document type say so. The status history is kept and a reprocess marker opens a new cycle, so the statuses that follow are recorded as new.

Both cards run **one batch per template**, in the background with its live log: the sources are staged in a working folder, the **Max threads** setting of the global settings bounds the parallelism, and an invoice is never processed twice.

---

## Processing · last 14 days

One card with four tabs: **Volume**, **Errors**, **Retries**, **Time per document**.

### Volume

**Documents processed per day** over the last 14 days, as stacked bars: *Processed* and *In technical error*; the subtitle gives the totals. **Click a bar** to open [E-Invoicing](./invoices.md) on that day, by archive date — a quick path from "today's column is short" to "show me what was processed".

### Errors

The **Error rate · 14d** card: a 14-day sparkline of error events recorded in `F564237` (level `ERROR` or `FATAL`). Hovering a point reveals the day and count; the subtitle shows the daily average plus today's running count.

### Retries

The **Retry rate · 14d** card: a single big number, ratio of *runs that succeeded only after one or more retries* over total runs in the trailing 14 days. The subtitle gives the absolute counts and the delta against the previous 14-day window (green when down, orange when up).

### Time per document

The **Template processing time · 14d** card: average end-to-end processing time per template, in seconds, over the last 14 days. The card pulls flat `START` / `END` events from `F564237` and pairs them in Java keyed on `(FEWDS1|FEUPMJ)` — the prior implementation used a self-join SQL with ambiguous `FETMPL` and incorrect `e.FEUPMT - s.FEUPMT` math, which is now fixed.

#### Per-step breakdown when `debugProfile` is on

When the [`debugProfile`](../configuration/system/global.md) toggle on the `global` template is set to `Y`, every processing run writes one row per pipeline stage to `F564237` — **header parsing**, **lines parsing**, **validation**, **UBL emit**, **PA send**. The Template processing time card surfaces them as a stacked breakdown under the per-template totals, so a slow stage is visible at a glance without digging into the runtime log.

The Live process events tail below also tags the rows with the step name so a slow batch can be triaged in real time. Leave `debugProfile` at `N` in production; flip it to `Y` for the duration of a batch run when triaging a slow pipeline — the extra rows inflate `F564237` quickly under load.

---

## Right now

What is running on the server at this moment: the running processes, the live process events, the scheduler and the active sessions.

### Running processes \{#running-processes\}

The processing JVMs alive on the host, polled every 5 s: those started by this server, with the last line each printed, and the **detached** ones left by a previous instance, a cron or a manual run (*output not captured*). Each row shows the mode (`-process`, `-watch-folders`, `-import`), the arguments, the elapsed time and a **Stop** button, which terminates that JVM and its own child processes only — invoices in progress stay in their current state and input files are left in place. Stopping requires the *integration-run* grant. Nothing is stopped when the server restarts, so a batch can run through an upgrade.

### Live process events

A live feed of jobs starting and finishing in real time — most of them launched by the background scheduler. Polls `F564237` every **5 seconds** with an incremental `since=` cursor; each row carries a coloured **method badge**:

| Badge | Meaning |
|---|---|
| **START** *(green)* | A job has just started — `fetch-all`, `retrieve-statuses`, an inbound process, etc. |
| **END** *(blue)* | The matching `END` event for a previously-started job, with the elapsed time when available. |
| **ERROR** *(red)* | An inline error emitted while the job ran — `ERROR`, `FATAL`, `FAILED` keywords promote any row to this kind, even when its method was `START` or `END`. |
| **INFO** *(muted)* | Anything else the runtime logger wrote during the job. |

Each row shows the badge, the **template** + **mode** + **source file** when present, the message, and the timestamp. A **pulsing green dot** appears next to the title when an event has been observed in the last 30 seconds (a job is running right now); it switches to grey when the feed has been idle longer.

The feed is **deduplicated on `FEUKID`** so the same row never appears twice across polls, even when the clock jitters. A **Pause / Resume** button on the right of the title freezes polling — useful when reading a long line without it scrolling away.

The scrollable list is capped at the latest 100 events; older rows fall off the bottom as new ones come in. For deeper investigation use the [Processing Log](diagnostics/processing-log.md) page, which keeps the full history with grouped-job views.

### Scheduler

Lists every active scheduler job:

- **Built-ins** — `retrieve-statuses`, `notif-purge`, `clean-archive`, etc. — driven by `BackgroundScheduler` polling intervals.
- **Per-template `fetch-all`** — one row per template that has a scheduled extract / sync.
- **Per-row Auto-Retry sweeps** — one row per saved entry on the [Auto-Retry](../sync/scheduled-jobs/auto-retry.md) page, with the scheduled hour and the matched status list as the cadence.
- **Daily lifecycle checks** — one row per scheduled entry on the [Lifecycle checks](../sync/scheduled-jobs/lifecycle-checks.md) page, next to the digests and auto-retries, with its time and last run.

Each row shows the job name, the cadence, and a status pill (green active, blue scheduled-soon, orange paused). The card subtitle reports the active count; the **Open Scheduled jobs** button opens [Scheduled jobs](../sync/scheduled-jobs/overview.md), where every job is run, paused and edited.

The **PA import poll** and **PA status retrieve** jobs carry a **pause / resume** button — effective on the next tick and deliberately runtime-only, so a server restart always resumes and a pause can't be forgotten. The [daily quiet window](../configuration/system/global.md) (`fetchQuietFrom` / `fetchQuietTo`) is shown here too, highlighted while active — during it both pollers skip their runs automatically.

### Active sessions / Active clients · 15m

Two modes:

- **Auth enabled** — title reads *Active sessions*. Lists every session present in `F564252` whose `SSETDTIM` is within the last hour.
- **Auth disabled** — title reads *Active clients · 15m*. Lists every IP touched by `WebServer.handle()` in the last 15 minutes, sourced from the new in-memory `ActivityTracker` (no `F564252` rows exist when auth is off).

Either way, each row shows IP / user, the last-seen timestamp, and the running hit count.

---

## Recent errors

The **Recent errors** card lists the last 8 events from `F564237` filtered on `level IN ('ERROR', 'FATAL')`. Each row shows the level badge, the lifecycle code and triplet, the message, and a relative timestamp (*2m ago*, *1h ago*). Clicking a row tied to an invoice opens the *Integration Errors* view of [Diagnostics](./diagnostics/overview.md) narrowed to that invoice; a processing row opens the *Processing Log* view. **Open Integration Errors →** opens the view unfiltered.

---

## Technical details \{#technical-details\}

A folded section — *system, filesystem, JVM, configuration check, database tables, links* — that opens by itself when a tile of the health strip is clicked.

### System Health

JVM, database and host metrics. The most-watched values are colour-coded:

| Stat | Source | Tone rules |
|---|---|---|
| **Java** | `Runtime.version()` | neutral. |
| **Heap** | `MemoryMXBean.getHeapMemoryUsage()` | green &lt; 60 %, orange &lt; 85 %, red ≥ 85 %. |
| **Uptime** | `RuntimeMXBean.getUptime()` | neutral, formatted as `Xd Yh` / `Xh Ym`. |
| **CPU cores** | `Runtime.availableProcessors()` | neutral. |
| **Database** | `dialect.ping()` | green &lt; 100 ms, orange &lt; 500 ms, red beyond or on error. |
| **Schema** | `db-nomaubl` config | neutral. |
| **OS** | `os.name` + `os.arch` | neutral. |
| **PA mode** | `paUseMock` flag | green when *Live*, orange when *Mock*. |

The card subtitle on the right shows the **build version + build date** baked into `nomaubl-version.properties`.

### Quick links

Static shortcut list — the IT operator's most-used pages, opened directly: **Processing Log** and **Integration Errors** (both views of [Diagnostics](./diagnostics/overview.md)), **Notifications**, **Process Document**, **File Versions** and **Settings**.

### Filesystem

For each configured path (`appHome`, `processHome`, `dirInput`, `singleOutput`, `burstOutput`, `dirArchive`, `dirError`):

- **Free / total** disk space on the underlying volume.
- **File count** of a recursive walk through the path, **capped at 5000 files** to keep the call cheap.

Path values that contain runtime placeholders (`%TEMPLATE%`, `%FILE_NAME%`) are truncated at the first placeholder, and the report runs against the deepest **existing-by-shape** directory above it. `dirOutput` is excluded because it is always covered by `processHome`.

### JVM · threads + GC

Companion card to System Health for deeper JVM diagnostics:

- **Threads** — current count + peak.
- **Daemon threads** — running daemons.
- **GC** — collector name + total time spent in GC.
- **Loaded classes** — class-loader counter, useful for spotting metaspace leaks.

### Configuration check

Validates the *connector-style* configuration the application uses today. Issues are listed by area with severity (red error, orange warning, blue info). The check runs against:

| Area | Validates |
|---|---|
| **PA connector** | `baseUrl`; `authType`; credentials per auth type — `OAUTH2` (clientId/secret/token endpoint), `BASIC` (username/password), `BEARER` (token); presence of an endpoint named `import` (warns when `import-status` is missing). |
| **e-Directory** | `baseUrl` and `directory-check` endpoint when `checkDirectory=Y`. |
| **e-Reporting** | `issuerSiren`, `frequency`, `flux` when `sendToPA=Y`. |
| **Statuses** | Every PA status code received but not mapped in the [status catalogue](../configuration/system/statuses.md): the warning gives the number of events skipped since the server started and an example invoice. Add the code to the catalogue to record these events. |

The validation assets (XSD / Schematron) are bundled in the JAR.

A clean check renders as `✔ 0 issues` in green; otherwise the card lists the issues in order of severity.

### Database tables

Per-table row count for every NomaUBL table — invoices (`F564231`), lifecycle (`F564235`), validation (`F564236`), runtime log (`F564237`), notifications (`F564253`), e-Reporting (`F564260`–`F564262`), auth (`F564250`–`F564252`, `F564254`). Useful for spotting unexpected growth (e.g. a notifications table that should be ~hundreds of rows but holds millions).

---

## Shared progress window \{#shared-progress-window\}

Every long-running operation in the platform — Resend All from this page, the [Auto-Retry](../sync/scheduled-jobs/auto-retry.md) sweep, the *Detailed view* export on [Integration Errors](diagnostics/integration-errors.md), the upcoming bulk re-imports — opens the **same modal**. One component, one set of habits.

The window stays open by default while the operation runs; closing it is a deliberate action.

| Element | What it does |
|---|---|
| **Progress bar** | Visual counter of processed-vs-total. Updates every ~250 ms as the server pushes increments. |
| **Live counters** | Three numbers: *Processed* (total touched so far), *Succeeded*, *Failed*. Each is clickable when non-zero and opens a small drawer with the per-invoice triplets, so a failure on invoice `12345 / RI / 00070` is one click away from its log entry. |
| **Cancel** | Stops the operation cleanly between two invoices. Already-processed invoices keep their new state; the rest are left untouched. The button is replaced by *Cancelled* (greyed) once the signal lands. |
| **Run in background** | Hides the modal without stopping the operation. The work continues server-side; a small persistent banner at the top of the page surfaces the count + a *Show progress* link. Click the link to reopen the modal at any time. |
| **Done** | Replaces *Cancel* / *Run in background* when the operation finishes. A summary line shows total / succeeded / failed and the elapsed time. |

Multiple operations can run side by side — each gets its own banner when sent to the background. Closing the browser tab does **not** cancel the work; the server-side run keeps going. Reopening the page surfaces the banner again until the run completes.
---

## How widgets refresh

The Refresh button (or page mount) calls four endpoints in parallel:

| Endpoint | Feeds |
|---|---|
| `GET /api/system` | System Health, JVM extras, Filesystem |
| `GET /api/dashboard/tech` | Volume, Errors, Retries, Time per document, Active sessions, Database tables, Recent errors |
| `GET /api/dashboard/log-tail` | Live process events (incremental, polled every 5 s with `since=`) |
| `GET /api/dashboard/config-check` | Configuration check |

The Scheduler card reads `GET /api/scheduler/status`. Each call fails independently — a misconfigured database returns *Not configured* on the data card without breaking System Health or the live tail.

---

## Tips & best practices

- **Watch Heap, Database ping and Filesystem free space.** The three early-warning signals — heap drift before an OOM, database latency before a stall, archive volume before disk fills.
- **Live process events beats `tail -f`.** It shows scheduler jobs starting and ending in real time, errors stand out in red, and the feed survives an SSH disconnect. Keep it open during a release window or a batch import — most regressions surface here within seconds, and the green pulsing dot tells you whether anything is actually running right now.
- **Configuration check should always read green.** A non-zero issue count after a deploy is the fastest path to "what changed". Run it on every environment after every config edit.
- **Recent errors over Database tables.** When triaging an incident the recent-errors feed is denser per pixel; the table stats card is for trend-watching across days.
- **Empty Active clients does not mean nobody is using the app.** With auth enabled, sessions older than an hour drop off the list — the database lifecycle still records them. The card shows *who is on right now*, not *who was on this morning*.
- **Processing-time spikes pair with volume dips.** When you see a tall bar in the Volume tab followed by a slow template the next day, expect the queue to back up — the IT team can pre-empt by adjusting the scheduler cadence.
