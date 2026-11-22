---
title: Notifications
description: "Liberty Next notifications: rules that react to a screen write, a Nomaflow job event (failure, success, cancel, missed schedule, long run, late) or a screen action, and deliver to the in-app bell, by e-mail or through a connector query or endpoint. SMTP account, recipients, placeholders, job alerts."
keywords: [Liberty Next, Nomaflow, notifications, alerts, bell, inbox, e-mail, SMTP, notifications.toml, job failure, missed schedule, long run, send_notification, webhook]
---

# Notifications

A notification tells someone that something happened: a period was closed, a nightly job failed, a schedule was missed. **Rules** decide when; **channels** decide how — the bell in the application, an e-mail, or a call to a connector.

---

## At a glance

<svg viewBox="0 0 1320 620" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfnt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfnt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfnt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfnt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="580" rx="14" fill="url(#nfnt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">◔</text>
  <text x="260" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Notifications</text>
  <rect x="981" y="32" width="99" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1030.5" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Reload config</text>
  <rect x="899" y="32" width="74" height="24" rx="5" fill="url(#nfnt-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="936.0" y="47.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add rule</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="80" width="230" height="500" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="90" width="214" height="44" rx="7" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="260" y="107" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">◔</text>
  <text x="274" y="107" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">job_failed</text>
  <text x="274" y="123" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">job ∗ · failure, missed</text>
  <rect x="419" y="96" width="35" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="426" y="107.5" fill="#4a9eff" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">email</text>
  <rect x="248" y="142" width="214" height="44" rx="7" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="159" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">◔</text>
  <text x="274" y="159" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">period_closed</text>
  <text x="274" y="175" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">sales.period_status · update · when</text>
  <rect x="419" y="148" width="35" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="426" y="159.5" fill="#4a9eff" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">email</text>
  <rect x="377" y="148" width="39" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="384" y="159.5" fill="#4a9eff" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">portal</text>
  <rect x="248" y="194" width="214" height="44" rx="7" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="211" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">◔</text>
  <text x="274" y="211" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">ask_review</text>
  <text x="274" y="227" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">fired by a screen action</text>
  <rect x="415" y="200" width="39" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="422" y="211.5" fill="#4a9eff" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">portal</text>
  <rect x="482" y="80" width="598" height="500" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="496" y="101" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">◔</text>
  <text x="512" y="101" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">[notifications.job_failed]</text>
  <line x1="482" y1="112" x2="1080" y2="112" stroke="#1f2937" strokeWidth="1"/>
  <text x="496" y="128" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RULE ID</text>
  <rect x="496" y="133" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="147.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">job_failed</text>
  <text x="686" y="128" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LABEL</text>
  <rect x="686" y="133" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="696" y="147.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">A job failed or was missed</text>
  <rect x="900" y="139" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M902.5,144.5 L904.8,146.8 L908.8,142" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="917" y="148" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Enabled</text>
  <text x="496" y="178" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Trigger</text>
  <rect x="496" y="184" width="261" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="541.0" y="198.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">A screen event</text>
  <rect x="587" y="185" width="74" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="624.0" y="198.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">A job event</text>
  <line x1="662" y1="189" x2="662" y2="201" stroke="#334155" strokeWidth="1"/>
  <text x="709.5" y="198.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">A screen action</text>
  <text x="496" y="224" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">JOBS (EMPTY = EVERY JOB)</text>
  <rect x="496" y="229" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="243.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Add a job…</text>
  <text x="710" y="224" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">EVENTS</text>
  <rect x="710" y="235" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M712.5,240.5 L714.8,242.8 L718.8,238" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="727" y="244" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">failure</text>
  <rect x="772.32" y="235" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="789.32" y="244" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">succeeded</text>
  <rect x="844.1600000000001" y="235" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="861.1600000000001" y="244" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">canceled</text>
  <rect x="710" y="253" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M712.5,258.5 L714.8,260.8 L718.8,256" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="727" y="262" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">missed</text>
  <rect x="767.56" y="253" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="784.56" y="262" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">long_run</text>
  <rect x="834.64" y="253" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="851.64" y="262" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">late</text>
  <text x="496" y="288" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LONG RUN THRESHOLD (MINUTES)</text>
  <rect x="496" y="293" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="307.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="496" y="338" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Delivery</text>
  <rect x="496" y="347" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="513" y="356" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">portal</text>
  <rect x="557.24" y="347" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M559.74,352.5 L562.04,354.8 L566.04,350" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="574.24" y="356" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">email</text>
  <rect x="613.44" y="347" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="630.44" y="356" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">action</text>
  <text x="496" y="380" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RECIPIENTS</text>
  <rect x="496" y="388" width="61" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="503" y="399.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">role:ops ✕</text>
  <rect x="565" y="385" width="133" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="566" y="386" width="41" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="586.5" y="398.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">role</text>
  <line x1="608" y1="390" x2="608" y2="400" stroke="#334155" strokeWidth="1"/>
  <text x="629.5" y="398.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">user</text>
  <line x1="651" y1="390" x2="651" y2="400" stroke="#334155" strokeWidth="1"/>
  <text x="674.5" y="398.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">email</text>
  <rect x="706" y="385" width="360" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="716" y="398.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">Pick or type…</text>
  <text x="496" y="426" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Message</text>
  <text x="496" y="442" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SUBJECT</text>
  <rect x="496" y="447" width="538" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="461.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;JOB&#125;: &#123;STATE&#125;</text>
  <rect x="1040" y="447" width="24" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1052.0" y="461" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123; &#125;</text>
  <text x="496" y="486" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">BODY</text>
  <rect x="496" y="491" width="538" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="505.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;ERROR&#125;</text>
  <rect x="1040" y="491" width="24" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1052.0" y="505" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123; &#125;</text>
  <text x="496" y="530" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LINK (A ROUTE THE NOTIFICATION OPENS)</text>
  <rect x="496" y="535" width="538" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="549.5" fill="#475569" fontSize="9.5" fontFamily="ui-monospace, monospace">/nomaflow/runs</text>
  <line x1="482" y1="566" x2="1080" y2="566" stroke="#1f2937" strokeWidth="1"/>
  <rect x="496" y="572" width="60" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="526.0" y="585.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Delete</text>
  <rect x="562" y="572" width="83" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="603.5" y="585.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">➤ Send a test</text>
  <rect x="1022" y="572" width="44" height="20" rx="5" fill="url(#nfnt-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1044.0" y="585.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="962" y="572" width="54" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="989.0" y="585.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rules</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">trigger · channels</text>
  <line x1="200" y1="107.0" x2="248" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfnt-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three triggers</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">screen write, job, screen action</text>
  <line x1="200" y1="267.0" x2="496" y2="195" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfnt-arrow)"/>
  <rect x="20" y="584" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="599" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Send a test</text>
  <text x="30" y="612" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sample values, unsaved form</text>
  <line x1="200" y1="601.0" x2="603.5" y2="593" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfnt-arrow)"/>
  <rect x="1120" y="72" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="87" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Add rule</text>
  <text x="1130" y="100" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">in the page header</text>
  <line x1="1120" y1="89.0" x2="961" y2="57" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfnt-arrow)"/>
  <rect x="1120" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Job events</text>
  <text x="1130" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">failure, missed, long_run, late…</text>
  <line x1="1120" y1="247.0" x2="1066" y2="250" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfnt-arrow)"/>
  <rect x="1120" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recipients</text>
  <text x="1130" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">role, user or e-mail, then pick</text>
  <line x1="1120" y1="377.0" x2="1066" y2="395" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfnt-arrow)"/>
  <rect x="1120" y="450" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="465" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Placeholders</text>
  <text x="1130" y="478" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#123;JOB&#125;, &#123;STATE&#125;, &#123;ERROR&#125;…</text>
  <line x1="1120" y1="467.0" x2="1066" y2="458" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfnt-arrow)"/>
</svg>

---

## What users see \{#inbox\}

- **The bell** in the header shows the number of unread notifications, updated live. Its menu lists the latest six; **Mark all read** and **View all** are at the bottom. Clicking a notification marks it read and opens its link.
- **The Notifications page** (from **View all**) lists them with **All** / **Unread** tabs and **Mark all read**.

Each user sees only their own notifications.

---

## The e-mail account \{#smtp\}

E-mail goes through the SMTP server set in **Liberty Next → Administer → App → Notifications (email)**:

| Field | Default | Notes |
|---|---|---|
| Notifications enabled | on | Off: no rule fires. |
| SMTP host, Port | —, `587` | Without a host, only the bell works. |
| Encryption | STARTTLS | *STARTTLS (usually port 587)*, *SSL / implicit TLS (usually port 465)* or *None (plain connection)*. Changing it sets the usual port. |
| Timeout (s) | `20` | |
| User, Password | — | The password is encrypted with the install's master key. |
| From address | the user | Falls back to the user name when empty. |
| Keep read notifications (days, 0 = forever) | `90` | Read notifications older than that are purged, at startup and every six hours. Unread ones are kept. |

E-mails are plain text: the subject, then the body, then the rule's link.

---

## Rules \{#rules\}

Rules are edited in **Liberty Next → Logic → Notifications** and saved in `notifications.toml` — a change applies without a restart. **Send a test** sends the rule being edited, even unsaved, with sample values to its recipients.

The rules are listed on the left, each with its trigger and its channels; **Add rule** is in the page header. With no rule yet, the page reads *No rule yet: “Add rule”, at the top, creates the first one.*

### Triggers

| Trigger | Fires when | Settings |
|---|---|---|
| **A screen event** | A row is inserted, updated or deleted through a screen. | App, Screen, Events (`insert` / `update` / `delete`), and optionally **Only when the written row has**: field = value conditions, all required (`STATUS = closed`). |
| **A job event** | A Nomaflow run ends. | Jobs — several picked in one list, empty = every job — and Events: `failure`, `succeeded`, `canceled`, `missed` (a schedule that did not run — see [Schedules](./jobs/schedules.md#missed)), `long_run` with a threshold in minutes, `late` (no successful run by the job's **Must have succeeded by** deadline). |
| **A screen action** | A screen action of type `send_notification` runs (a button or a step of an action chain), or the **Notification** step of a [service](../framework/build/services.md#notification). | Nothing more: the action or the step names the rule and passes the row's values, plus the values its message needs. |

`long_run` is checked when the run ends: it reports a run that lasted at least the threshold, not a run still in progress.

### Channels

In the editor, the channels are ticked by their names: **In the application** (`portal`), **Email** (`email`), **A query or an endpoint** (`action`).

| Channel | Delivers |
|---|---|
| `portal` | A notification in the bell of each recipient user. |
| `email` | An e-mail to each recipient that has an address. |
| `action` | Runs a query (SQL connector) or calls an endpoint (API connector) with the message's values — to post to Teams or a webhook, or to write a log table. Its parameters are the event's values plus `SUBJECT`, `BODY` and `RULE`. |

A channel that fails is logged and does not stop the others. Sending runs in the background: a save or a job never waits for the mail server.

### Recipients

| Form | Means |
|---|---|
| `user:alice` | That user. |
| `role:controllers` | Every active user holding the role. |
| `email:finance@example.com` | An address — e-mail only. |

In the editor, choose **A role**, **A user** or **An email address** beside the field, then pick the role or the user from the list, or type an address; each recipient becomes a chip, removed with its ✕. An entry without a prefix is sent to as an address when it contains `@`; any other is ignored and logged.

### Placeholders

Subject, body and link take `{NAME}` placeholders, written in any case:

| Trigger | Placeholders |
|---|---|
| Screen event | Every column of the written row, plus `USER`, `APP`, `SCREEN`, `EVENT`. |
| Job event | `JOB`, `RUN_ID`, `STATE`, `ERROR`, `DURATION_MINUTES`, `ROWS`, and `EXPECTED_AT` for a missed schedule or a deadline. |
| Screen action | The values passed by the action, plus `USER`. |

An unknown placeholder is left as written. In the editor, the **{ }** button beside the subject, the body and the link lists the placeholders of the trigger and inserts the one picked where the cursor is; the same button sits beside the subject and the body of a [`notify` step](./steps.md#notify).

### In TOML

```toml title="notifications.toml"
[notifications.period_closed]
label = "Period closed"
trigger = { kind = "screen", app = "sales", screen = "period_status", events = ["update"], when = [{ field = "STATUS", value = "closed" }] }
channels = ["portal", "email"]
recipients = ["role:controllers", "email:finance@example.com"]
subject = "Period {PERIOD} closed by {USER}"
body = "Company {COMPANY}: the period is now read-only."
link = "/screen/sales/period_status"

[notifications.job_failed]
trigger = { kind = "job", events = ["failure", "missed"] }
channels = ["email"]
recipients = ["role:ops"]
subject = "{JOB}: {STATE}"
body = "{ERROR}"
```

---

## From a job step \{#notify-step\}

A job can also send a message itself, as one of its steps, with the files it produced attached — a scheduled digest. Its recipients take the same forms, plus `user:{USER}`: the person who started the run, left out when a schedule started it. See [Steps → Notify](./steps.md#notify).

---

## A job's own alerts \{#job-alerts\}

A job can also warn on failure without a rule, from the **Alerts** block of the job editor:

```toml title="jobs.toml"
[jobs.alerts]
on_failure = true
recipients = ["role:ops", "user:alice"]
```

On failure, each recipient gets a notification *Job &lt;id&gt; failed* with the error, in the bell and by e-mail. With **Warn if a run exceeds (minutes)** (`on_long_run_minutes`), a run that lasts at least that long also sends *Job &lt;id&gt; ran N min (threshold T)*, whether it failed or not. Write recipients as `user:`, `role:` or `email:` — an entry without a prefix is taken as an e-mail address.

---

## Tips \{#tips\}

- Start with one rule: `failure` and `missed` on every job, to the operations role.
- Prefer roles to named users: the rule follows team changes.
- Use **Send a test** after changing the SMTP account.
- Keep the bell for what needs action; send the rest by e-mail to a shared box.
