---
title: Monitoring — overview
description: "Where to look when running NomaUBL in production — the in-app Tech Dashboard, the Processing Log, the service log file, the build-info / license endpoints. Plus the patterns to wire external monitoring."
keywords: [NomaUBL, monitoring, tech dashboard, processing log, build-info, license, log file, external monitoring]
---

# Monitoring — overview

Visibility into a running NomaUBL install splits across four surfaces — three in the web UI, one on the host. This page is the map: which surface answers which operational question, when to look where, what's missing and where to wire external monitoring.

| Surface | What it answers | Where |
|---|---|---|
| **Tech Dashboard** | Live KPIs — invoices processed today, in flight, failed; per-PA submission state; scheduler activity. | *Application → Tech Dashboard* (existing page). |
| **Processing Log** | Per-document trace — every step of every invoice, with the timing, the XSD/Schematron result, the PA call. | *Management → Processing Log* (existing page). |
| **Service log file** | The JVM's stderr / stdout — startup, configuration loading, scheduler ticks, database errors. | `<APP_HOME>/nomaubl-<env>.log` on the host. |
| **HTTP endpoints** | Machine-readable build info + license state. | `/api/build-info` and `/api/license` on the running service. |

The two web UI surfaces are the **operator's** view; the log file + endpoints are the **infrastructure's** view (load balancers, external monitoring, CI smoke tests).

---

## When to look where

| Situation | Surface |
|---|---|
| "Did today's batch run successfully?" | **Tech Dashboard** — invoices processed today panel. |
| "What's the status of invoice #12345?" | **Processing Log** — search by document number. |
| "Why is invoice #12345 stuck?" | **Processing Log** — drill into the step trace. |
| "Why isn't the scheduler firing?" | **Service log file** — look for `scheduler tick` lines. |
| "Did the JVM crash?" | **Service log file** + `./nomaubl.sh status` (Linux / macOS) or `nomaubl.cmd status` (Windows). |
| "Is the database reachable?" | **Service log file** — look for `Connected to db-nomaubl` on start. |
| "Is the PA reachable?" | **Service log file** — look for `pa-default API call` lines. |
| "Is the license still valid?" | `curl /api/license` — returns `valid` / `expired` / `restricted`. |
| "What version is running?" | `curl /api/build-info` — returns version + build timestamp. |
| "Did a process restart happen overnight?" | `./nomaubl.sh status` / `nomaubl.cmd status` shows current PID; the log file shows the startup banner. |

The first two go through the UI; everything below goes through the CLI or a `curl`. The next page ([Service and logs](./service-and-logs.md)) walks the CLI side in detail.

---

## Permissions

Visibility:

| Surface | Permission |
|---|---|
| Tech Dashboard | Available to every signed-in user — but the KPIs themselves respect each user's data filter (e.g. per-company scope). |
| Processing Log | Restricted to roles with the `processing-log` permission (typically operators + admins). |
| Service log file / endpoints | Available to anyone with SSH / RDP / HTTP access to the host. **Restrict via the firewall and the reverse proxy** — `/api/build-info` and `/api/license` are unauthenticated. |

The two unauthenticated HTTP endpoints don't leak secrets (no passwords, no tokens, only build metadata + license summary), but they do leak the **version** of NomaUBL you run. For public-facing installs, gate them behind the reverse proxy or your VPN if that matters.

---

## At a glance

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="mov-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#mov-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">NomaUBL monitoring — four surfaces</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="80" width="220" height="120" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)"/>
  <text x="150" y="106" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TECH DASHBOARD</text>
  <text x="150" y="130" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Live KPIs</text>
  <text x="150" y="146" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Today's batch state</text>
  <text x="150" y="162" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Per-PA submission</text>
  <text x="150" y="184" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Application → Tech Dashboard</text>

  <rect x="272" y="80" width="220" height="120" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)"/>
  <text x="382" y="106" fill="#c084fc" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSING LOG</text>
  <text x="382" y="130" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Per-document trace</text>
  <text x="382" y="146" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Step timing, XSD result</text>
  <text x="382" y="162" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">PA call breakdown</text>
  <text x="382" y="184" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Management → Processing Log</text>

  <rect x="504" y="80" width="220" height="120" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <text x="614" y="106" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERVICE LOG FILE</text>
  <text x="614" y="130" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">nomaubl-&lt;env&gt;.log</text>
  <text x="614" y="146" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Startup, scheduler ticks</text>
  <text x="614" y="162" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">JDBC / PA / FTP errors</text>
  <text x="614" y="184" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">nomaubl.sh / nomaubl.cmd log env</text>

  <rect x="736" y="80" width="224" height="120" rx="10" fill="rgba(251,146,60,0.08)" stroke="rgba(251,146,60,0.40)"/>
  <text x="848" y="106" fill="#fb923c" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HTTP ENDPOINTS</text>
  <text x="848" y="130" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">/api/build-info</text>
  <text x="848" y="146" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">/api/license</text>
  <text x="848" y="162" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Machine-readable status</text>
  <text x="848" y="184" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">External monitoring · LB probes</text>

  <rect x="40" y="220" width="920" height="60" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="242" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AUDIENCE</text>
  <text x="58" y="262" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Web UI surfaces (left two) → operators and accountants — daily ops.</text>
  <text x="58" y="276" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Host surfaces (right two) → ops / SRE — incident response, smoke tests, automated alerting.</text>

  <rect x="40" y="298" width="920" height="50" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="320" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT'S NOT EXPOSED OUT OF THE BOX</text>
  <text x="58" y="338" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Prometheus /metrics · OpenTelemetry traces · per-request latency histograms — wire externally (see below).</text>
</svg>

---

## What NomaUBL does NOT expose

Knowing the gaps prevents misplaced searches:

| Missing | Where to get it instead |
|---|---|
| **Prometheus `/metrics`** | Not built in. Scrape the host with `node_exporter`; mine the log file for application-level counters; or build a small JMX exporter on top of the JVM. |
| **OpenTelemetry traces** | Not built in. The processing pipeline emits structured per-step logs — pipe those into a log-based tracing system if you need waterfall views. |
| **Per-request latency histograms** | The Tech Dashboard surfaces aggregates; for percentiles + request-by-request, wire an APM in front of the reverse proxy. |
| **Heap / GC stats** | Standard JVM JMX — connect VisualVM or JConsole over JMX, or expose JMX via a JMX-to-Prometheus exporter. |
| **Live database connection-pool metrics** | NomaUBL uses a simple per-call connection model, not a pooled one. Connection count is a function of in-flight requests — observable through Oracle's `V$SESSION` or PostgreSQL's `pg_stat_activity`. |

Most external-monitoring needs reduce to: **scrape the host with the standard tools, mine the log file, wire an APM upstream**. The framework itself stays focused on the in-app surfaces.

---

## Day-zero monitoring setup

A minimal "production-ready" monitoring posture for a single host install:

1. **Auto-start via systemd** with `Restart=on-failure` — see [Service and systemd](../installation/service-and-systemd.md).
2. **Log rotation** with logrotate (`copytruncate`) — same page.
3. **Liveness probe** from your load balancer / uptime monitor hitting `/api/build-info` every 30 seconds.
4. **License alert** — a small script that hits `/api/license` daily and pages if `valid: false`.
5. **Log forwarding** — pipe `nomaubl-<env>.log` to your central log store (Loki, ELK, Datadog Logs). The framework writes plain stderr/stdout — every line-based log shipper picks it up.
6. **Database monitoring** — the engine's own tooling (Oracle: `V$SESSION`, AWR; PostgreSQL: `pg_stat_activity`, `pg_stat_statements`; or whatever dashboards your DBA already runs).

Items 3, 4 and 5 are the cheap wins that catch 80% of production incidents.

---

## What you actually do — quick map

| Goal | Read |
|---|---|
| Walk the Tech Dashboard cards. | [Application → Tech Dashboard](../application/tech-dashboard.md). |
| Investigate a stuck or failed invoice. | [Management → Processing Log](../management/processing-log.md). |
| Use the wrapper's `status` + log tailing for incidents (Linux or Windows). | [Service and logs](./service-and-logs.md). |
| Wire external monitoring (LB probes, alerting, log forwarding). | [Service and logs](./service-and-logs.md). |

---

## What's next

- [Service and logs](./service-and-logs.md) — the CLI + endpoints layer in detail.
- [Application → Tech Dashboard](../application/tech-dashboard.md) — the in-app live view.
- [Management → Processing Log](../management/processing-log.md) — per-document trace.
