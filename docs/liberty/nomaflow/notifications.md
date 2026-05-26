---
title: Notifications
description: "Route Nomaflow job events — success, failure, long-run — to Slack, email or generic webhooks. Configure channels once at framework level; jobs pick recipients."
keywords: [Nomaflow, notifications, Slack, email, webhook, on failure, long run, alerts, Liberty Framework]
---

# Notifications

A failing job that nobody knows about is a worse problem than a failing job. Nomaflow's notification layer routes job events — failures, long-running detections, optional successes — to **Slack**, **email** or **generic webhooks**.

The setup is layered:

1. **Transports** (Slack workspace, SMTP server, webhook URLs) are configured **once at framework level** — they're a property of the install, not the job.
2. **Job alerts blocks** decide *which events* to emit and *who* to address.
3. **Routing** picks a transport for each (job tag, recipient) pair.

This page covers the wiring end-to-end.

---

## Transports — framework-level setup

Open *Settings → Notifications*. The page lists every configured channel.

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="nt-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="280" rx="14" fill="url(#nt-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · Notifications</text>
  <text x="40" y="66" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Outbound channels for job events.</text>
  <line x1="20" y1="82" x2="980" y2="82" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="100" width="300" height="180" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="124" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SLACK</text>
  <text x="56" y="148" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Webhook URL · 🔒 encrypted</text>
  <rect x="56" y="158" width="260" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="66" y="173" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">https://hooks.slack.com/services/T0…/B0…/x…</text>
  <text x="56" y="200" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Default channel</text>
  <rect x="56" y="210" width="140" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="66" y="225" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">#nomaflow-alerts</text>
  <rect x="56" y="244" width="80" height="22" rx="4" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.40)"/>
  <text x="96" y="259" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Test ping</text>

  <rect x="350" y="100" width="300" height="180" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="366" y="124" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EMAIL</text>
  <text x="366" y="148" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">SMTP host · port · 🔒 password</text>
  <rect x="366" y="158" width="260" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="376" y="173" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">smtp.corp.local · 587 · …</text>
  <text x="366" y="200" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Default from</text>
  <rect x="366" y="210" width="180" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="376" y="225" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">nomaflow@corp.local</text>
  <rect x="366" y="244" width="80" height="22" rx="4" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.40)"/>
  <text x="406" y="259" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Test mail</text>

  <rect x="660" y="100" width="300" height="180" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="676" y="124" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WEBHOOK</text>
  <text x="676" y="148" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">URL · headers · 🔒 secret</text>
  <rect x="676" y="158" width="260" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="686" y="173" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">https://opsgenie.corp.local/webhook</text>
  <text x="676" y="200" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Auth header</text>
  <rect x="676" y="210" width="180" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="686" y="225" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Authorization: …</text>
  <rect x="676" y="244" width="80" height="22" rx="4" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.40)"/>
  <text x="716" y="259" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Test POST</text>
</svg>

Each transport carries:

| Field | Notes |
|---|---|
| **URL / host** | Slack webhook URL · SMTP host:port · generic webhook URL. |
| **Credentials** | 🔒 encrypted at rest (Slack URL counts as a secret; SMTP password; webhook bearer / signing secret). |
| **Default recipient** | The channel / address / endpoint used when a job's alerts block doesn't specify recipients. |
| **Test button** | Sends a one-line "test from Nomaflow" message — confirms the wiring works **before** a real failure puts it to the test. |

### Slack

The default mapping: Slack receives a one-line message styled with the job's state colour (red for failure, yellow for long-run, green for success).

| Setting | Required | Notes |
|---|---|---|
| **Webhook URL** | Yes | Get this from *Slack admin → Apps → Incoming Webhooks*. One webhook can fan-out to multiple channels through Slack's own routing. |
| **Default channel** | No | Overrides the channel baked into the webhook. Use `#nomaflow-alerts` if you have one. |
| **Username** | No | The bot name. Defaults to "Nomaflow". |
| **Icon emoji** | No | Defaults to `:gear:`. |

### Email

Standard SMTP. The framework sends a small HTML message with a link back to the Run detail page.

| Setting | Required | Notes |
|---|---|---|
| **Host** | Yes | SMTP server hostname. |
| **Port** | Yes | 587 for STARTTLS, 465 for TLS. |
| **Username / Password** | If the server requires auth. | Password is 🔒 encrypted. |
| **Default from** | Yes | Address the mail comes from. |
| **TLS mode** | Defaults to STARTTLS. | Pick TLS for legacy servers that need it. |

### Generic webhook

For OpsGenie, PagerDuty, Mattermost, your own dispatcher — anything that accepts a JSON POST.

| Setting | Required | Notes |
|---|---|---|
| **URL** | Yes | The endpoint. |
| **Headers** | No | Auth headers, content-type override. Header values can be 🔒 encrypted. |
| **Body template** | No | Override the default body shape. Variables: `${job_id}`, `${run_id}`, `${state}`, `${error}`, `${started_at}`. |

The default body shape:

```json
{
  "job_id": "reporting-nightly-sync",
  "run_id": "run_a8c4d",
  "state": "FAILED",
  "triggered_by": "cron",
  "started_at": "2026-05-26T02:00:00Z",
  "finished_at": "2026-05-26T02:14:22Z",
  "error": "OperationalError: …",
  "url": "https://liberty.corp.local/nomaflow/runs/run_a8c4d/"
}
```

The `url` is the link operators click to reach the Run detail page directly.

---

## Job alerts block

Inside the Job editor's **Alerts** section:

| Field | Default | Notes |
|---|---|---|
| **`on_failure`** | `true` (when the block exists) | Emit on a `FAILED` run. The most common setting — leave it on. |
| **`on_long_run_minutes`** | none | Emit a warning if the run is still `RUNNING` after N minutes. The run keeps going — this is a heads-up, not an abort. |
| **`recipients`** | `[]` | Channel-specific identifiers. Empty = use the transport's default recipient. |

### Recipients per transport

The `recipients` field is **type-aware** — same string can map to several transports.

| Transport | Recipient format | Example |
|---|---|---|
| Slack | `#channel` or `@user` | `["#data-oncall", "@alice"]` |
| Email | RFC 5322 address | `["data-team@corp.local"]` |
| Webhook | Endpoint id (registered at framework level) | `["opsgenie-data"]` |

When a job is fired and an alert is due, the framework iterates over the recipient list. Each recipient matches one transport (by format / by registration); each matched transport gets the alert.

### When `recipients` is empty

The transport's default recipient is used (`#nomaflow-alerts` for Slack, the SMTP default-from for mail, the webhook's primary URL). This is the right default for most installs — *one* job-level place sets policy, transports decide.

### Per-transport routing by tag

Some installs want different teams to receive different jobs. The framework's notification routing supports tag rules:

| Job tag | Routes to | Configured in |
|---|---|---|
| `team-data` | Slack `#data-team` | *Settings → Notifications → Routing rules*. |
| `team-security` | Email `security@corp.local` | Same. |
| `team-platform` | PagerDuty webhook | Same. |

A job tagged `team-data, etl` flows through both the `team-data` rule and any tag-less default. The rule engine de-duplicates so a single recipient doesn't get the same message twice.

---

## What events emit what

| Event | Triggered by | Default level |
|---|---|---|
| **Run failed** | `on_failure = true` (default). | High — pages people. |
| **Run long-running** | `on_long_run_minutes = N` set, run still in flight past N. | Medium — warning. |
| **Run succeeded** | Set `on_success = true` (off by default — most installs don't want it). | Low. |
| **Job re-enabled / disabled** | Operator toggled the catalogue card. | Low — informational, off by default. |
| **Run cancelled by user** | Operator clicked ✕ Cancel. | Low — visible in the run history; alert is opt-in. |

`on_success` is intentionally off by default. A job that runs hourly successfully ten thousand times a year shouldn't generate ten thousand "OK!" messages. Turn it on for **high-value jobs** where success itself is news ("the monthly report was delivered").

---

## Anatomy of a failure alert

When a run fails:

1. The runner writes the `FAILED` state to the run row.
2. The notifications layer reads the job's alerts block.
3. For each matched recipient, it builds a transport-specific message:

| Transport | Message |
|---|---|
| **Slack** | One-line red message: ❌ *reporting-nightly-sync run failed at step copy-orders · OperationalError: connection refused* with a "View run" link. |
| **Email** | Subject: `[Nomaflow] FAILED reporting-nightly-sync`. Body: same one-liner plus the full traceback as a code block, plus a link. |
| **Webhook** | JSON POST as described above. |

4. The HTTP / SMTP call is **fire-and-forget**. If the upstream is unreachable, the notification fails — but the run's failure is already recorded. Nomaflow doesn't retry notification delivery (a flaky notification path shouldn't fail a job).

The framework log records every notification attempt with its outcome — search there if a recipient reports "I didn't get the page".

---

## Sending success alerts conditionally

A common pattern: alert on success **only** for jobs where success itself matters. Two ways to do it:

| Pattern | How |
|---|---|
| **Per-job flag**. | Set `on_success = true` in the job's alerts block. Fires on every successful run. |
| **In-step push**. | Add an HTTP step at the end of the job that POSTs to the webhook. Fires only when the preceding steps succeed (because steps run in order). Gives you full control over the message body. |

The second pattern is what the [Scheduled DB sync recipe](./workflows/scheduled-sync.md#step-4--add-the-success-notification) uses — the success notification is just another step.

---

## Quiet hours

Some installs don't want pages at 03:00 for *low-priority* jobs. Two approaches:

| Pattern | Behaviour |
|---|---|
| **Tag-based routing**. | A `low-priority` tag routes to email (no page); a `high-priority` tag routes to PagerDuty (pages). The setting is per job. |
| **Recipient-side rules**. | The recipient channel (PagerDuty's own service policies, Slack's notification preferences) handles quiet hours. Nomaflow always sends; the receiver mutes. |

The second approach scales better — Nomaflow has one notification policy (alert on every failure), the receivers decide what to do with it. Adding a "quiet hours" mode to Nomaflow itself would multiply the moving parts.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Webhook URL stored in plain text in `jobs.toml`. | URL leaks into version control. | Always store at framework level (🔒 encrypted), reference by transport name. |
| Test button green, real alert never lands. | Network blocks production-time traffic that the test allowed. | Check firewall rules; the test uses the same transport but at config save time. |
| `on_success = true` on every job. | Channel is full of green ticks; failures get lost in the noise. | Turn off `on_success` except where it matters. |
| `on_long_run_minutes = 1` on an ETL that always takes 5. | Spurious warnings every night. | Tune to the job's normal runtime + headroom. |
| Multiple recipients on the same channel. | Same message delivered twice. | The de-dup engine should catch this; if not, narrow the recipients list. |

---

## Inspecting notification history

The framework log records every notification dispatch with its outcome (`SENT`, `FAILED_TRANSPORT`, `FAILED_DELIVERY`). Search the log for `notification` to find delivery issues.

For a long-term audit (six months back: who got paged for what?), some installs add a small **notification audit table** populated by a Python helper. The framework doesn't ship this by default — most teams find the framework log sufficient.

---

## What's next

- [Administration](./administration.md) — restart behaviour and multi-replica notifications.
- [Recipe — Scheduled DB sync](./workflows/scheduled-sync.md) — uses the failure alert path end-to-end.
- [Custom Python steps](./custom-python.md) — push notifications from within a step.
