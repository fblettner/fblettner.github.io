---
title: Notifications
description: "Liberty Next notifications: rules that react to a screen write, a Nomaflow job event (failure, success, cancel, missed schedule, long run) or a screen action, and deliver to the in-app bell, by e-mail or through a connector query or endpoint. SMTP account, recipients, placeholders, job alerts."
keywords: [Liberty Next, Nomaflow, notifications, alerts, bell, inbox, e-mail, SMTP, notifications.toml, job failure, missed schedule, long run, send_notification, webhook]
---

# Notifications

A notification tells someone that something happened: a period was closed, a nightly job failed, a schedule was missed. **Rules** decide when; **channels** decide how — the bell in the application, an e-mail, or a call to a connector.

---

## At a glance

<svg viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ntf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ntf-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ntf-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ntf-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="10" width="780" height="520" rx="14" fill="url(#ntf-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="230" y="20" width="210" height="500" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="242" y="32" width="78" height="22" rx="5" fill="url(#ntf-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="281.0" y="46.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add rule</text>
  <rect x="240" y="70" width="190" height="52" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="250" y="88" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">period_closed</text>
  <text x="250" y="102" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">screen · insert, update</text>
  <text x="250" y="115" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">portal email</text>
  <rect x="240" y="132" width="190" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="150" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">job_failed</text>
  <text x="250" y="164" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">job</text>
  <text x="250" y="177" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">email</text>
  <rect x="240" y="194" width="190" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="212" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">ask_review</text>
  <text x="250" y="226" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">fired by a screen action</text>
  <text x="250" y="239" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">portal</text>
  <rect x="450" y="20" width="540" height="500" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="464" y="42" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">[notifications.period_closed]</text>
  <text x="464" y="66" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Rule id</text>
  <rect x="464" y="72" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="86.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">period_closed</text>
  <text x="630" y="66" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Label</text>
  <rect x="630" y="72" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="640" y="86.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Period closed</text>
  <rect x="830" y="78" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M832.5,83.5 L834.8,85.8 L838.8,81" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="847" y="87" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Enabled</text>
  <text x="464" y="118" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TRIGGER</text>
  <rect x="464" y="124" width="295" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="465" y="125" width="100" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="515.0" y="139.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">A screen event</text>
  <line x1="566" y1="129" x2="566" y2="143" stroke="#334155" strokeWidth="1"/>
  <text x="608.5" y="139.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">A job event</text>
  <line x1="651" y1="129" x2="651" y2="143" stroke="#334155" strokeWidth="1"/>
  <text x="705.0" y="139.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">A screen action</text>
  <text x="464" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">App</text>
  <rect x="464" y="172" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="186.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">sales ▾</text>
  <text x="600" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Screen</text>
  <rect x="600" y="172" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="186.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">period_status ▾</text>
  <text x="770" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Events</text>
  <rect x="770" y="177" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="787" y="186" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">insert</text>
  <rect x="830" y="177" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M832.5,182.5 L834.8,184.8 L838.8,180" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="847" y="186" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">update</text>
  <rect x="895" y="177" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="912" y="186" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">delete</text>
  <text x="464" y="214" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Only when the written row has (AND)</text>
  <rect x="464" y="220" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="234.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">STATUS</text>
  <rect x="594" y="220" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="604" y="234.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">closed</text>
  <text x="464" y="262" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DELIVERY</text>
  <rect x="464" y="273" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M466.5,278.5 L468.8,280.8 L472.8,276" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="481" y="282" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">portal</text>
  <rect x="530" y="273" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M532.5,278.5 L534.8,280.8 L538.8,276" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="547" y="282" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">email</text>
  <rect x="590" y="273" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="607" y="282" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">action</text>
  <text x="464" y="304" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Recipients</text>
  <rect x="464" y="310" width="103" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="515.5" y="322.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">role: controllers</text>
  <rect x="580" y="310" width="73" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="616.5" y="322.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">user: alice</text>
  <rect x="664" y="310" width="149" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="738.5" y="322.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">email: finance@example.com</text>
  <text x="464" y="350" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MESSAGE</text>
  <text x="464" y="368" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Subject</text>
  <rect x="464" y="374" width="500" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="388.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Period &#123;PERIOD&#125; closed by &#123;USER&#125;</text>
  <text x="464" y="412" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Body</text>
  <rect x="464" y="418" width="500" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="432.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Company &#123;COMPANY&#125;: the period is now read-only.</text>
  <text x="464" y="456" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Link (a route the notification opens)</text>
  <rect x="464" y="462" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="476.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">/screen/sales/period_status</text>
  <rect x="750" y="488" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="791.5" y="502.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Send a test</text>
  <rect x="850" y="488" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="877.5" y="502.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="916" y="488" width="44" height="22" rx="5" fill="url(#ntf-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="938.0" y="502.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="10" y="60" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rules</text>
  <text x="20" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">trigger · channels</text>
  <line x1="210" y1="77.0" x2="240" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ntf-arrow)"/>
  <rect x="10" y="160" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three triggers</text>
  <text x="20" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">screen write, job, action</text>
  <line x1="210" y1="177.0" x2="464" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ntf-arrow)"/>
  <rect x="10" y="240" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row condition</text>
  <text x="20" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">field = value, ANDed</text>
  <line x1="210" y1="257.0" x2="464" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ntf-arrow)"/>
  <rect x="1010" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1020" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Channels</text>
  <text x="1020" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">bell, e-mail, query/endpoint</text>
  <line x1="1010" y1="277.0" x2="640" y2="278" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ntf-arrow)"/>
  <rect x="1010" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1020" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recipients</text>
  <text x="1020" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">user:, role:, email:</text>
  <line x1="1010" y1="347.0" x2="850" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ntf-arrow)"/>
  <rect x="1010" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1020" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Placeholders</text>
  <text x="1020" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#123;COLUMN&#125;, &#123;USER&#125;, &#123;JOB&#125;…</text>
  <line x1="1010" y1="417.0" x2="964" y2="386" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ntf-arrow)"/>
  <rect x="520" y="556" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="530" y="571" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Send a test</text>
  <text x="530" y="584" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sample values, unsaved form</text>
  <line x1="750" y1="573.0" x2="780" y2="512" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ntf-arrow)"/>
</svg>

---

## What users see \{#inbox\}

- **The bell** in the header shows the number of unread notifications, updated live. Its menu lists the latest six; **Mark all read** and **View all** are at the bottom. Clicking a notification marks it read and opens its link.
- **The Notifications page** (from **View all**) lists them with **All** / **Unread** tabs and **Mark all read**.

Each user sees only their own notifications.

---

## The e-mail account \{#smtp\}

E-mail goes through the SMTP server set in **Settings → App → Notifications (email)**:

| Field | Default | Notes |
|---|---|---|
| Notifications enabled | on | Off: no rule fires. |
| SMTP host, Port | —, `587` | Without a host, only the bell works. |
| Encryption | STARTTLS | *STARTTLS (usually port 587)*, *SSL / implicit TLS (usually port 465)* or *None*. Changing it sets the usual port. |
| Timeout (s) | `20` | |
| User, Password | — | The password is encrypted with the install's master key. |
| From address | the user | Falls back to the user name when empty. |

| Keep read notifications (days, 0 = forever) | `90` | Read notifications older than that are purged, at startup and every six hours. Unread ones are kept. |

E-mails are plain text: the subject, then the body, then the rule's link.

---

## Rules \{#rules\}

Rules are edited in **Settings → Notifications** and saved in `notifications.toml` — a change applies without a restart. **Send a test** sends the rule being edited, even unsaved, with sample values to its recipients.

### Triggers

| Trigger | Fires when | Settings |
|---|---|---|
| **A screen event** | A row is inserted, updated or deleted through a screen. | App, Screen, Events (`insert` / `update` / `delete`), and optionally **Only when the written row has**: field = value conditions, all required (`STATUS = closed`). |
| **A job event** | A Nomaflow run ends. | Jobs (empty = every job) and Events: `failure`, `succeeded`, `canceled`, `missed` (a schedule that did not run — see [Schedules](./jobs/schedules.md#missed)), `long_run` with a threshold in minutes. |
| **A screen action** | A screen action of type `send_notification` runs (a button or a step of an action chain). | Nothing more: the screen action names the rule and passes the row's values. |

`long_run` is checked when the run ends: it reports a run that lasted at least the threshold, not a run still in progress.

### Channels

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

In the editor, pick users and roles from the list or type an address. An entry without a prefix is sent to as an address when it contains `@`; any other is ignored and logged.

### Placeholders

Subject, body and link take `{NAME}` placeholders, written in any case:

| Trigger | Placeholders |
|---|---|
| Screen event | Every column of the written row, plus `USER`, `APP`, `SCREEN`, `EVENT`. |
| Job event | `JOB`, `RUN_ID`, `STATE`, `ERROR`, `DURATION_MINUTES`, `ROWS`, and `EXPECTED_AT` for a missed schedule. |
| Screen action | The values passed by the action, plus `USER`. |

An unknown placeholder is left as written.

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

A job can also send a message itself, as one of its steps, with the files it produced attached — a scheduled digest. See [Steps → Notify](./steps.md#notify).

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
