---
title: Service and logs
description: "Operate NomaUBL from the host — wrapper status (nomaubl.sh on Linux/macOS, nomaubl.cmd on Windows), the log file for live diagnostics, /api/build-info and /api/license for machine-readable checks. Patterns for external alerting and log forwarding."
keywords: [NomaUBL, service status, log file, build-info, license, scheduler, external monitoring, alerting, log forwarding, nomaubl.sh, nomaubl.cmd, Windows]
---

# Service and logs

The host-side monitoring surface — what an ops engineer / SRE looks at when the web UI isn't enough or when wiring external monitoring. Covers the wrapper's `status` (works the same on Linux / macOS via `nomaubl.sh` and on Windows via `nomaubl.cmd`), the log file's structure, the two HTTP endpoints meant for probes and the patterns to push alerts when something goes wrong.

---

## `status` — the quick health check

```bash title="Linux / macOS"
./nomaubl.sh status
# NomaUBL [demo] is running (PID 12345)
# NomaUBL [uat]  is running (PID 12346)
# NomaUBL [prod] is running (PID 12347)
```

```cmd title="Windows"
nomaubl.cmd status
REM   [demo]  running  (PID 12345)
REM   [uat]   running  (PID 12346)
REM   [prod]  running  (PID 12347)
```

Without arguments, the wrapper lists every `nomaubl-*.pid` file next to the JAR and prints the live state of each. With an environment name, it reports just that one:

```bash title="Linux / macOS"
./nomaubl.sh status prod
# NomaUBL [prod] is running (PID 12347)
```

```cmd title="Windows"
nomaubl.cmd status prod
REM NomaUBL [prod] is running (PID 12347)
```

The wrapper also **prunes stale PID files** — entries for processes that are no longer alive are removed. So a single `status` call cleans up after itself.

Exit codes:

| Code | Meaning |
|---|---|
| `0` | Every named env is running. |
| `1` | At least one env is down. |
| `2` | The named env's PID file doesn't exist *(Linux / macOS)*. |

Useful in scripts and systemd `ExecStartPre`:

```bash title="Linux / macOS"
./nomaubl.sh status prod >/dev/null || { echo "prod is down"; exit 1; }
```

```cmd title="Windows"
nomaubl.cmd status prod >NUL || ( echo prod is down & exit /b 1 )
```

---

## The log file — `nomaubl-<env>.log`

Each environment writes its stderr + stdout to a single log file next to the JAR:

```text title="Linux / macOS"
/opt/nomaubl/
├── nomaubl.jar
├── nomaubl.sh
├── nomaubl-demo.log
├── nomaubl-uat.log
└── nomaubl-prod.log
```

```text title="Windows"
C:\nomaubl\
├── nomaubl-fat.jar
├── nomaubl.cmd
├── nomaubl-demo.log
├── nomaubl-uat.log
└── nomaubl-prod.log
```

Tail it:

```bash title="Linux / macOS"
./nomaubl.sh log demo
# or directly
tail -f /opt/nomaubl/nomaubl-demo.log
```

```cmd title="Windows"
nomaubl.cmd log demo
REM uses PowerShell Get-Content -Wait under the hood
```

### Lines you'll see often

| Line shape | What it means |
|---|---|
| `[INFO] Loaded config: /opt/nomaubl/demo/config/config.json` | Service started, config parsed. |
| `[INFO] Master key file: /opt/nomaubl/demo/.nomaubl-master.key` | The master-key file was found and loaded. |
| `[INFO] Connected to db-nomaubl as nomaubl` | JDBC works. |
| `[INFO] Schema bootstrap: 23 tables created` | First start on an empty schema — F564* tables landed. |
| `[INFO] HTTP server listening on :8090` | Web UI is up. |
| `[INFO] Scheduler started — fetchImportInterval=15min fetchStatusInterval=15min fetchAllInterval=0` | Background scheduler intervals at startup. |
| `[INFO] scheduler tick · fetch-import · 0 invoices to import` | Routine scheduler tick. |
| `[INFO] pa-default API call · import · status 200 · 1.2 s` | One successful PA submission. |
| `[WARN] pa-default API call · import · status 429 · retrying in 30s` | PA rate-limit; will retry. |
| `[ERROR] Connection refused — jdbc:oracle:thin:...` (or `jdbc:postgresql://...`) | Database unreachable — diagnose at the network / DB side. |

The format is line-based, level-prefixed. Easy to grep, easy to ship.

### Common diagnostic flows

| Question | Linux / macOS | Windows |
|---|---|---|
| Did the last scheduler tick run? | `grep "scheduler tick" nomaubl-prod.log \| tail -10` | `Select-String -Path nomaubl-prod.log -Pattern "scheduler tick" \| Select-Object -Last 10` |
| Have there been PA failures recently? | `grep "pa-default" nomaubl-prod.log \| grep -v "status 200"` | `Select-String -Path nomaubl-prod.log -Pattern "pa-default" \| Where-Object { $_ -notmatch "status 200" }` |
| What was the last error? | `grep "\[ERROR\]" nomaubl-prod.log \| tail -1` | `Select-String -Path nomaubl-prod.log -Pattern "\[ERROR\]" \| Select-Object -Last 1` |
| Did the service start cleanly today? | `grep -A 5 "HTTP server listening" nomaubl-prod.log \| tail -10` | `Select-String -Path nomaubl-prod.log -Pattern "HTTP server listening" -Context 0,5 \| Select-Object -Last 10` |

### Verbose mode

Some CLI modes accept `--verbose` to emit per-document lines (one log line per invoice). On heavy nightly batches this is **off by default** to keep the log readable; turn on per-run for investigation.

---

## HTTP endpoints — `/api/build-info` and `/api/license`

The two unauthenticated endpoints meant for machine probes:

### `/api/build-info`

```bash
curl http://localhost:8090/api/build-info
```

```json
{
  "version": "2026.05.26",
  "buildDate": "2026-05-26T14:33:00Z",
  "buildHash": "a8c4d1f2…"
}
```

| Field | What it tells you |
|---|---|
| `version` | Release tag (matches the JAR filename / release notes). |
| `buildDate` | When the JAR was built. |
| `buildHash` | Git short SHA — useful when correlating with a specific deployment. |

Useful for:

- **Post-deploy smoke test** — assert the version matches what you deployed.
- **Liveness probe** — non-200 = service down.
- **Multi-instance audit** — confirm every environment runs the expected version.

### `/api/license`

```bash
curl http://localhost:8090/api/license
```

Sample responses:

```json
{ "mode": "full", "customer": "ACME Corp", "expiresAt": "2026-12-31" }
```

```json
{ "mode": "restricted", "reason": "License expired on 2026-04-30" }
```

```json
{ "mode": "restricted", "reason": "No license configured" }
```

| Field | What it tells you |
|---|---|
| `mode` | `full` (everything works) or `restricted` (limited functionality without a license). |
| `customer` | Subject of the license (only when `mode = full`). |
| `expiresAt` | License expiry date. |
| `reason` | Why the license isn't loaded (only when `mode = restricted`). |

Useful for:

- **Daily license check** — alert when `mode` flips to `restricted` (somebody's license expired or wasn't installed).
- **Pre-deploy validation** — confirm the new env has its license before going live.

### What these endpoints are NOT

| Misconception | Reality |
|---|---|
| `/api/build-info` is a health check. | It returns build metadata, not health state. The HTTP status code (200) is your liveness signal. |
| `/api/license` is rate-limited. | No — poll as often as your probe cadence requires. Each call hits an in-memory cache, not the database. |
| They expose secrets. | No — the build hash + customer name + expiry date are not secrets. No passwords, no tokens. |
| They respect permissions. | No — unauthenticated. Restrict at the reverse proxy if your install is public-facing. |

---

## Scheduler — confirm it's ticking

The background scheduler runs **inside** the `-serve` process. There's no separate scheduler daemon and no separate UI to confirm it's alive — the log file is the source of truth.

```bash
grep "scheduler tick" /opt/nomaubl/nomaubl-prod.log | tail -10
```

If the last tick was more than `fetchImportInterval + fetchStatusInterval + fetchAllInterval` minutes ago, the scheduler is **probably stuck**. The fixes:

| Symptom | Cause | Fix |
|---|---|---|
| No `scheduler tick` lines at all. | All three intervals set to `0`. | Set non-zero intervals in `global` template's `fetchImportInterval` etc. |
| Ticks fire but never advance invoices. | The PA template (`pa-default`) is unreachable — each call times out. | Test from the host: `curl https://<pa-base-url>/api/login_check`. |
| Ticks fire occasionally then stop for hours. | The JVM hit an OOM and the scheduler thread died without restarting the JVM. | Check the log for `OutOfMemoryError`; bump `-Xmx`; consider `Restart=on-failure` in systemd (covered in [Service and systemd](../installation/service-and-systemd.md)). |

### Force a tick from the CLI

When investigating, run the sweep manually:

```bash
./nomaubl.sh fetch-status prod
# → runs one synchronous -fetch-status pass; output goes to stdout
```

Both `fetch-import` and `fetch-status` are safe to run on demand — they're idempotent against the PA.

---

## External monitoring patterns

NomaUBL doesn't export Prometheus metrics or OpenTelemetry traces. The three patterns that cover most real installs:

### Pattern A — Log-based alerting

The single highest-leverage monitoring. Pipe the log file to your central log store (Loki / ELK / Splunk / Datadog Logs / Cloudwatch), then build alerts on log patterns:

| Log pattern | Alert |
|---|---|
| `\[ERROR\]` | Page on-call for any ERROR; throttle to N per hour. |
| `\[WARN\] pa-default .* status 5..` | PA-side failures; page if persistent over 5 minutes. |
| `OutOfMemoryError` | Page immediately. |
| No `scheduler tick` lines for > 30 min | Scheduler is dead. |
| `Connection refused.*jdbc:(oracle\|postgresql)` | Database unreachable. |

```yaml
# Example logrotate + filebeat config snippet
- type: log
  paths:
    - /opt/nomaubl/nomaubl-*.log
  fields:
    service: nomaubl
    env: prod
```

### Pattern B — Endpoint polling

A small cron script that hits both endpoints and pages on failure:

```bash
#!/usr/bin/env bash
# /usr/local/bin/nomaubl-probe.sh
set -e
for env in demo uat prod; do
  port=$(case "$env" in demo) echo 8090;; uat) echo 8091;; prod) echo 8092;; esac)
  # Liveness
  curl -fsS http://localhost:$port/api/build-info > /dev/null \
    || { echo "[$env] DOWN" | mail -s "NomaUBL $env down" ops@example.com; exit 1; }
  # License
  mode=$(curl -fsS http://localhost:$port/api/license | jq -r '.mode')
  if [ "$mode" != "full" ]; then
    echo "[$env] License mode=$mode" | mail -s "NomaUBL $env license alert" ops@example.com
  fi
done
```

Schedule via systemd timer / cron (Linux / macOS) or Windows Task Scheduler — `*/5 * * * *` (or a `/SC MINUTE /MO 5` task) is a reasonable cadence.

### Pattern C — Host + JVM metrics

For deeper observability:

| Tool | What it captures |
|---|---|
| **`node_exporter`** | Host CPU, memory, disk, network — every running NomaUBL process counts as one Java process. |
| **`process_exporter`** | Per-process CPU / RSS — track each `nomaubl-<env>` separately. |
| **JMX exporter** (Prometheus JVM exporter as a Java agent) | JVM-internal metrics — heap, GC, thread count. Add `-javaagent:/opt/jmx_prometheus_javaagent.jar=9404:config.yml` to the JAR command. |
| **DB exporter** (Oracle exporter, `postgres_exporter`, …) | DB-side metrics — active sessions, top SQL, tablespace usage. |

These four together give 95% of the observability a production install needs. Wire them into the same Prometheus / Grafana stack you already operate.

---

## Log forwarding — keep history off-host

The wrapper writes everything to `nomaubl-<env>.log` next to the JAR. For long-term retention + searchability:

| Setup | What |
|---|---|
| **Filebeat → Logstash / Loki / Cloudwatch** | The standard pattern. One line per JSON record — Filebeat reads, ships, you query in Kibana / Grafana / Cloudwatch Logs Insights. |
| **Vector** | Lighter-weight alternative. |
| **Custom — `journalctl` if running under systemd** | systemd captures stderr / stdout into the journal; `journalctl -u nomaubl@prod` searches it. |
| **`logger` for one-off pipes** | `tail -f nomaubl-prod.log | logger -t nomaubl-prod` sends everything to syslog. |

Logrotate (`copytruncate`, see [Service and systemd](../installation/service-and-systemd.md)) ensures the file doesn't grow unbounded. A typical retention: 8 weeks rotated locally + indefinite retention in the central log store.

---

## Common ops pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Watching the Tech Dashboard but ignoring the log file. | A scheduler hang shows up in logs hours before the dashboard reflects "no new invoices today". | Wire log-based alerting (Pattern A above). |
| Polling `/api/build-info` every second. | Pointless load + noise in access logs. | 30 s is more than enough. |
| Treating `/api/license` `restricted` mode as a hard failure. | Service still serves licensed features in restricted mode for grace period configurations; alarms wake people up unnecessarily. | Read the `reason` field; alert on `expired` / `revoked`; tolerate `restricted` only when expected. |
| Ignoring `OutOfMemoryError` in the log. | The JVM continues serving but the scheduler thread died — no batch is fired. | Set `Restart=on-failure` in systemd; bump `-Xmx`. |
| Logrotate without `copytruncate`. | The JVM keeps writing to the deleted inode — the new log file stays empty. | `copytruncate` in the logrotate config. |
| No PID file → systemd reports the service as dead while the JVM is actually running. | systemd kills the JVM on the next restart. | Always go through `nomaubl.sh start` (writes the PID file) or set `PIDFile=...` in the systemd unit. |

---

## What's next

- [Overview](./overview.md) — when to look at the Tech Dashboard vs the log.
- [Application → Tech Dashboard](../application/tech-dashboard.md) — the in-app live view.
- [Management → Processing Log](../management/processing-log.md) — per-document trace.
- [Installation → Service and systemd](../installation/service-and-systemd.md) — supervision + log rotation setup.
