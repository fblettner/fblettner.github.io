---
title: Service supervision
description: "Run NomaUBL as a long-lived service on Linux/macOS or Windows — nomaubl.sh or nomaubl.cmd for start/stop/status, a systemd unit (Linux) or NSSM Windows service (Windows) for auto-restart on boot, and an optional nginx reverse proxy in front for TLS and a friendly hostname."
keywords: [NomaUBL, service, systemd, nomaubl.sh, nomaubl.cmd, Windows service, NSSM, auto-start, nginx, reverse proxy, TLS, hostname]
---

# Service supervision

NomaUBL runs as a long-lived Java process per environment. The **wrapper** — `nomaubl.sh` on Linux / macOS, `nomaubl.cmd` on Windows — covers manual start / stop / status; a small **systemd unit** (Linux) or **Windows service** (Windows) wraps that for auto-start on boot and supervision; an optional **nginx / Traefik** layer adds TLS and a friendly hostname.

This page walks each layer — start with the wrapper, decide whether you want OS-level supervision, decide whether you want a reverse proxy.

---

## Layer 1 — the wrapper manually

After [configuring](./configure.md), start the service. Both wrappers expose the same subcommands; the only difference is the host shell.

```bash title="Linux / macOS"
cd /opt/nomaubl
./nomaubl.sh start demo
# Starting NomaUBL [demo] (port=8090)...
# NomaUBL [demo] started (PID 12345)
#   URL: http://localhost:8090/
#   Log: /opt/nomaubl/nomaubl-demo.log
```

```cmd title="Windows"
cd C:\nomaubl
nomaubl.cmd start demo
REM Starting NomaUBL [demo] (port=8090)...
REM NomaUBL [demo] started (PID 12345)
REM   URL: http://localhost:8090/
REM   Log: C:\nomaubl\nomaubl-demo.log
```

The wrapper:

1. Resolves the config from `<script_dir>/demo/config/config.json`.
2. Spawns the JAR in the background — `nohup … java … &` on Linux/macOS, `start /B javaw …` on Windows (the `javaw` console-less launcher survives closing the cmd window).
3. Writes the PID to `nomaubl-demo.pid` next to the JAR.
4. Redirects stdout and stderr to `nomaubl-demo.log`.

Verify:

```bash title="Linux / macOS"
./nomaubl.sh status
# NomaUBL [demo] is running (PID 12345)

curl http://localhost:8090/api/build-info
# {"version":"2026.05.26","buildDate":"2026-05-26T14:33:00Z", ...}
```

```cmd title="Windows"
nomaubl.cmd status
REM NomaUBL [demo] is running (PID 12345)

curl http://localhost:8090/api/build-info
```

The full set of lifecycle commands (same on both wrappers, replace `./nomaubl.sh` with `nomaubl.cmd` on Windows):

| Command | Effect |
|---|---|
| **`<wrapper> start <env> [port]`** | Spawn the JAR in the background. Default port `8090`. Refuses to start if the PID file points to a live process. |
| **`<wrapper> stop <env>`** | Stop the process — `SIGTERM` + 10 s grace + `SIGKILL` on Linux; `taskkill /F /T /PID …` on Windows. Cleans up the PID file. |
| **`<wrapper> restart <env> [port]`** | `stop` then `start`. |
| **`<wrapper> status [env]`** | With an env name, reports running / not running for that one. Without, lists every `nomaubl-*.pid` and prints state per env. Prunes stale PID files. |
| **`<wrapper> log <env>`** | Tail the log file — `tail -f` on Linux, `Get-Content -Wait` (via PowerShell) on Windows. |
| **`<wrapper> upgrade <env> [newJar]`** | One-command upgrade. See [Upgrade](./upgrade.md). |

For the day-to-day operational pattern, the wrapper is enough. The OS-level supervision layer below adds **automatic** start at boot and restart on crash.

### JVM tuning — `JAVA_OPTS` *(2026.06.02)* \{#java-opts\}

Both wrappers expose a **`JAVA_OPTS`** variable near the top of the file. Anything in it is forwarded to every `java -jar` invocation — `start`, `process`, `upgrade`, `fetch-*`, `extract`, `install`. Edit the file once; every subsequent wrapper call picks it up.

```bash title="nomaubl.sh — top of file"
# JVM flags forwarded to every java invocation. Default: empty.
JAVA_OPTS=""
```

```cmd title="nomaubl.cmd — top of file"
:: JVM flags forwarded to every java invocation. Default: empty.
set "JAVA_OPTS="
```

The most common use is pinning the **master encryption key** at a fixed path outside the user profile — the same path on every host so the encrypted config values stay readable regardless of which service account runs the JVM:

```bash
JAVA_OPTS="-Dnomaubl.master.key.file=/etc/nomaubl/master.key"
```

Other common cases:

| Flag | Use |
|---|---|
| `-Xmx8g` | Raise the JVM heap above the default for large batches. |
| `-Djava.io.tmpdir=/var/tmp/nomaubl` | Steer the temp directory off `/tmp` when memory pressure mounts. |
| `-Dfile.encoding=UTF-8` | Force UTF-8 on platforms where the JVM default is something else. |

Full reference + integration with systemd / NSSM: [Command Line → `JAVA_OPTS`](../management/command-line.md).

---

## Layer 2 — systemd unit (Linux)

On Linux, the standard pattern is one systemd unit per environment. The wrapper handles the start/stop; systemd handles the supervision.

### Service file

Create `/etc/systemd/system/nomaubl@.service` (template unit — `@` becomes the env name):

```ini
[Unit]
Description=NomaUBL — environment %i
After=network-online.target
Wants=network-online.target
# Wait for the database if it runs on the same host:
# After=oracle-listener.service   # or postgresql.service

[Service]
Type=forking
User=nomaubl
Group=nomaubl
WorkingDirectory=/opt/nomaubl
PIDFile=/opt/nomaubl/nomaubl-%i.pid

# Start / stop via the wrapper
ExecStart=/opt/nomaubl/nomaubl.sh start %i
ExecStop=/opt/nomaubl/nomaubl.sh stop %i

# Restart on failure (not on clean exit)
Restart=on-failure
RestartSec=10

# Bigger limits for batch processing
LimitNOFILE=65536

# JVM flags — picked up by the wrapper via JAVA_OPTS and forwarded to every
# java invocation (start, process, upgrade, fetch-*, …). The most common
# use is pinning the master encryption key at a fixed path. See
# "JVM tuning — JAVA_OPTS" above for the full list.
Environment="JAVA_OPTS=-Dnomaubl.master.key.file=/etc/nomaubl/master.key"

# Read the master key from a protected env file if you prefer env-var to file
EnvironmentFile=-/etc/nomaubl/master.env

[Install]
WantedBy=multi-user.target
```

| Detail | Why |
|---|---|
| **`Type=forking`** | The wrapper spawns the JAR in the background and exits. systemd tracks the JAR's PID via `PIDFile`. |
| **`User=nomaubl`** | Run as the dedicated service user — never root. |
| **`PIDFile`** | Lets systemd track the right process across restarts. Matches the wrapper's naming convention (`nomaubl-<env>.pid`). |
| **`Restart=on-failure`** | If the JVM exits with a non-zero status, systemd restarts after `RestartSec=10`. Clean exits (e.g. `nomaubl.sh stop`) don't trigger a restart. |
| **`EnvironmentFile=-/etc/nomaubl/master.env`** | Optional. Source `NOMAUBL_MASTER_KEY` from a protected env file (`0600`, owned by `nomaubl`) instead of a key file on disk. The `-` prefix makes the file optional. |

### Enable + start

```bash
sudo systemctl daemon-reload
sudo systemctl enable nomaubl@demo.service
sudo systemctl enable nomaubl@uat.service
sudo systemctl enable nomaubl@prod.service

sudo systemctl start nomaubl@demo
sudo systemctl status nomaubl@demo
```

The template-unit pattern means one service file covers every environment. Add an env, `systemctl enable nomaubl@<env>` and you're done.

### Read the log

systemd captures stderr and stdout (the wrapper's redirect to the log file still works). Three ways to read:

| Source | Command |
|---|---|
| The wrapper's log file (the canonical source). | `tail -f /opt/nomaubl/nomaubl-demo.log` or `./nomaubl.sh log demo`. |
| systemd journal (mirrors what was on stderr at fork time). | `journalctl -u nomaubl@demo -f` |
| Both — useful when investigating a crash. | Open both in side-by-side panes. |

The wrapper's log file is **append-only** — rotation isn't automatic. Set up logrotate:

```
# /etc/logrotate.d/nomaubl
/opt/nomaubl/nomaubl-*.log {
    weekly
    rotate 8
    compress
    delaycompress
    missingok
    notifempty
    copytruncate
}
```

`copytruncate` is needed because the JVM holds the log file open — a true rotate would lose the inode reference.

---

## Layer 2 alt — Windows auto-start

On Windows, `nomaubl.cmd start` spawns the server through `javaw` (the console-less Java launcher), so the JVM keeps running after the cmd window closes. That covers *manual* start; for *auto-start at boot* and *restart on crash*, you have two patterns — pick whichever your ops team prefers.

### Pattern A — Windows Task Scheduler firing the wrapper

The simplest option: register a Scheduled Task that runs `nomaubl.cmd start <env>` at boot. No third-party tool needed.

```cmd
schtasks /Create /TN "NomaUBL-demo" ^
  /TR "C:\nomaubl\nomaubl.cmd start demo" ^
  /SC ONSTART ^
  /RU "nomaubl" ^
  /RP * ^
  /RL HIGHEST
```

| Flag | Purpose |
|---|---|
| **`/SC ONSTART`** | Fire at boot. |
| **`/RU nomaubl /RP *`** | Run under the dedicated `nomaubl` service account; the password is prompted (use `/RP <password>` for unattended setup). |
| **`/RL HIGHEST`** | Required for the task to start before user logon. |

What this pattern gives you: auto-start at boot, full visibility through Task Scheduler. What it doesn't: **restart on crash**. If the JVM exits unexpectedly, the task does nothing. For that, use Pattern B.

### Pattern B — Register the JAR as a Windows service via NSSM

[NSSM](https://nssm.cc) (the Non-Sucking Service Manager) wraps an arbitrary executable as a Windows service with restart-on-crash semantics:

```cmd
nssm install NomaUBL-demo "C:\Program Files\Java\jdk-17\bin\java.exe" ^
  -jar "C:\nomaubl\nomaubl-fat.jar" ^
  -serve "C:\nomaubl\demo\config\config.json" 8090
nssm set NomaUBL-demo AppDirectory     "C:\nomaubl"
nssm set NomaUBL-demo AppStdout        "C:\nomaubl\nomaubl-demo.log"
nssm set NomaUBL-demo AppStderr        "C:\nomaubl\nomaubl-demo.log"
nssm set NomaUBL-demo Start            SERVICE_AUTO_START
nssm set NomaUBL-demo AppExit Default  Restart
nssm set NomaUBL-demo ObjectName       ".\nomaubl" "<password>"

nssm start NomaUBL-demo
```

| Setting | Why |
|---|---|
| **`AppExit Default Restart`** | NSSM restarts the process on non-zero exit. |
| **`ObjectName`** | Run as the dedicated service account, not LocalSystem. |
| **`AppDirectory`** | The wrapper's PID file lives here — keep it consistent so `nomaubl.cmd status` can still read it. |

The wrapper's `nomaubl.cmd status` / `log` / `stop` commands still work from a console — NSSM and the wrapper share the same PID file convention. `nomaubl.cmd stop` will kill the JVM; NSSM will then restart it (if `AppExit Default Restart` is set). For a **clean** stop, prefer `net stop NomaUBL-demo`.

For multiple environments, register one service per env: `NomaUBL-demo`, `NomaUBL-uat`, `NomaUBL-prod`. The `Start` field can be `SERVICE_AUTO_START` for prod and `SERVICE_DEMAND_START` for the others if you don't want every env to start at boot.

### Read the log on Windows

| Source | Command |
|---|---|
| The wrapper's log file (the canonical source). | `nomaubl.cmd log demo` or `Get-Content -Wait C:\nomaubl\nomaubl-demo.log`. |
| NSSM stderr capture (if NSSM is configured). | Same file when `AppStderr` points there. |
| Windows Event Log (NSSM service start/stop events). | Event Viewer → Windows Logs → Application, filter on source `NomaUBL-demo`. |

Log rotation isn't built in. Either rotate manually (`logrotate` via WSL / Cygwin, a Scheduled Task that renames the file), or use NSSM's built-in rotation:

```cmd
nssm set NomaUBL-demo AppRotateFiles 1
nssm set NomaUBL-demo AppRotateOnline 1
nssm set NomaUBL-demo AppRotateBytes 104857600    REM 100 MB
```

---

## Layer 3 — Reverse proxy (optional)

For a production-facing deployment, front NomaUBL with a reverse proxy. The benefits:

| Benefit | What it gives you |
|---|---|
| **TLS termination** | NomaUBL stays on HTTP (port 8090) behind the proxy; the proxy serves HTTPS on 443. |
| **Friendly hostname** | `nomaubl.example.com` instead of `host:8090`. |
| **Source IP restriction** | Allow-list operators by IP without changing NomaUBL config. |
| **Per-path routing** | Run several environments behind the same host — `/demo/`, `/uat/`, `/prod/`. |
| **Request logging** | nginx / Traefik write standard access logs; centralise easily. |

### nginx — one environment behind a hostname

```nginx
# /etc/nginx/sites-available/nomaubl.conf
server {
    listen 443 ssl http2;
    server_name nomaubl.example.com;

    ssl_certificate     /etc/letsencrypt/live/nomaubl.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/nomaubl.example.com/privkey.pem;
    # Generated by Let's Encrypt / certbot

    client_max_body_size 64M;
    proxy_read_timeout   300s;
    proxy_send_timeout   300s;

    location / {
        proxy_pass http://127.0.0.1:8090;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name nomaubl.example.com;
    return 301 https://$server_name$request_uri;
}
```

| Setting | Why |
|---|---|
| **`client_max_body_size 64M`** | UBL invoice payloads + uploads of large XML spools need this. The default 1M is far too small. |
| **`proxy_read_timeout 300s`** | Long-running batch operations (large `-fetch-all` runs, big UBL transformations) need a long read timeout. |
| **`X-Forwarded-*` headers** | NomaUBL reads these for the audit trail — it logs the real client IP instead of the proxy's loopback. |

Get the cert from Let's Encrypt:

```bash
sudo certbot --nginx -d nomaubl.example.com --email ops@example.com --agree-tos
```

### Multiple environments behind one hostname

For installs that want `https://nomaubl.example.com/uat/` and `https://nomaubl.example.com/prod/` (one host, several paths):

```nginx
server {
    listen 443 ssl http2;
    server_name nomaubl.example.com;
    # ... TLS as above ...

    location /demo/ {
        rewrite ^/demo/(.*)$ /$1 break;
        proxy_pass http://127.0.0.1:8090;
        # ... proxy_set_header as above ...
    }
    location /uat/ {
        rewrite ^/uat/(.*)$ /$1 break;
        proxy_pass http://127.0.0.1:8091;
    }
    location /prod/ {
        rewrite ^/prod/(.*)$ /$1 break;
        proxy_pass http://127.0.0.1:8092;
    }
}
```

For TLS-per-env (each env on its own hostname), duplicate the `server {}` block per env — that pattern is cleaner.

### Traefik / Caddy / Apache

The same proxy + TLS + per-path patterns work with any reverse proxy — pick what your ops team already runs. The proxy specifics are out of scope for this page; the requirements from NomaUBL's side are: HTTP-only backend on the configured port, `X-Forwarded-*` headers passed through, generous timeouts and body size.

---

## Common service pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| systemd unit runs as `root`. | The JAR's writes (logs, snapshots) end up owned by root; the next manual `nomaubl.sh start` fails. | `User=nomaubl` in the unit; chown the existing files. |
| `PIDFile` path doesn't match the wrapper's. | systemd reports `Active: inactive (dead)` even though the JVM runs. | The wrapper writes `nomaubl-<env>.pid` next to the JAR. Set `PIDFile=/opt/nomaubl/nomaubl-%i.pid`. |
| `Type=simple` instead of `Type=forking`. | systemd kills the JVM immediately because it sees the wrapper exit. | The wrapper backgrounds the JVM via `nohup` + `&`, so `Type=forking` is correct. |
| Multiple env units with overlapping ports. | The second start fails — the port is taken. | Allocate consecutive ports per env. |
| Log file growing unbounded. | Disk fills up after weeks of operation. | Set up logrotate with `copytruncate`. |
| Reverse proxy `client_max_body_size 1M` (the default). | Large UBL uploads return `413 Request Entity Too Large`. | Bump to `64M` (or higher for your batches). |
| `X-Forwarded-Proto` not sent by the proxy. | The web UI emits HTTP links behind an HTTPS reverse proxy. | Add `proxy_set_header X-Forwarded-Proto $scheme;`. |

---

## When NOT to bother with systemd / reverse proxy

| Scenario | Skip |
|---|---|
| Dev shell on a laptop. | Both. Manual `nomaubl.sh start demo` is fine. |
| Intranet-only install with one env. | Reverse proxy. Manual systemd unit is still useful for auto-start. |
| Fronted by a cloud load balancer (AWS ALB, GCP LB). | Reverse proxy. The cloud LB does the TLS + hostname job. systemd still recommended for supervision. |

For everything else (multi-environment, production-facing), both layers earn their keep.

---

## What's next

- [Upgrade](./upgrade.md) — when a new release ships, drop the new JAR and run `<wrapper> upgrade <env>`.
- [Monitoring → Overview](../monitoring/overview.md) — what to watch once it's running.
- [Management → Command Line](../management/command-line.md) — every CLI mode in detail.
