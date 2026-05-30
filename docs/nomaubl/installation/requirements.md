---
title: Requirements
description: "What the host needs before installing NomaUBL — JDK 17, an Oracle or PostgreSQL database, OS support matrix, ports, file-system permissions and the optional reverse-proxy / TLS layer."
keywords: [NomaUBL, requirements, prerequisites, JDK 17, Oracle, PostgreSQL, Linux, Windows, ports, reverse proxy, nginx, JD Edwards]
---

# Requirements

What needs to be in place on the host **before** you run `-install`. Verify each line against your target server; missing pieces are the most common cause of a botched first install.

---

## Java runtime

| Need | Notes |
|---|---|
| **JDK 17** (LTS) | Required minimum. The JAR is compiled against Java 17 — older JDKs refuse to load it. Newer LTS releases (21) work too. |
| **`java -version`** prints `17` (or higher). | Quick sanity check. |
| **`JAVA_HOME`** set | Useful but not mandatory. The `nomaubl.sh` wrapper calls `java` from the `PATH`; pin the version via `update-alternatives` (Linux) or a symlink. |

Recommended distributions: **Eclipse Temurin**, **Amazon Corretto**, **Oracle JDK**. Any OpenJDK 17 build works.

```bash
# Ubuntu / Debian
sudo apt install openjdk-17-jre-headless

# Rocky / RHEL
sudo dnf install java-17-openjdk-headless

# macOS (dev)
brew install --cask temurin@17

# Verify
java -version
# openjdk version "17.0.x" ...
```

---

## Database

NomaUBL persists every invoice's lifecycle in its own set of tables. **Oracle** and **PostgreSQL** are both supported — pick the one your operations team already runs. The default table names follow the JDE convention (`F564230` … `F564262`) but every table and column is configurable from the [NomaUBL Database](../configuration/database-connectors/nomaubl.md) screen, so the same schema works equally well outside a JDE context.

The supported deployment shapes:

| Shape | When |
|---|---|
| **Same database instance as the source ERP** | When the existing DB has spare capacity. NomaUBL gets its own schema; the source schemas stay untouched. Typical for JDE installs. |
| **Dedicated instance for NomaUBL** | Clean separation. The NomaUBL tables live in their own database; NomaUBL reaches the source ERP through additional connectors. |
| **One DB instance, several environments** | One Oracle or PostgreSQL instance can host several NomaUBL environments — each in its own schema or with a per-env prefix. |

### Supported versions

| Engine | Versions |
|---|---|
| **Oracle** | 19c, 21c, 23ai (tested). 12c R2 is the minimum. |
| **PostgreSQL** | Modern supported releases (13+). |

### Schema privileges

The NomaUBL schema user needs the standard DDL + DML rights — the actual grant statements differ between Oracle and PostgreSQL, but the intent is the same:

| Capability | Why |
|---|---|
| **Create tables, indexes, sequences** (Oracle: `CREATE TABLE`, `CREATE INDEX`, `CREATE SEQUENCE`; PostgreSQL: `CREATE` on the target schema). | The schema is built on first install + extended on every upgrade. |
| **Create views**. | A handful of helper views back the dashboard widgets. |
| **Generous tablespace / disk quota** (Oracle: `UNLIMITED TABLESPACE`; PostgreSQL: enough room on the target tablespace). | Invoice lifecycle data + UBL payloads grow steadily. |
| **Connect / login**. | Obvious. |
| **Read access to JD Edwards F* tables** *(JDE installs only)*. | Only when extracting from BIP Print Queue or archive — needed by `-extract` and the related `fetch-*` modes. Grant `SELECT` on `F9563110`, `F95630`, `F95631`, `F564111`, etc., as appropriate for the source flow. |

For SAP / NetSuite / custom ERP installs, the database privileges depend on the read connector you wire up (SQL queries, REST endpoints) — see [Configuration → SQL Connectors](../configuration/sql-connectors.md).

### Reachability check

Confirm the database is reachable from the NomaUBL host **before** running `-install`. Use whatever client your DBA prefers:

```bash
# Oracle (SQL*Plus)
sqlplus nomaubl/<password>@//db.corp.local:1521/ORCL <<<"SELECT 'OK' FROM dual;"

# PostgreSQL (psql)
psql "postgresql://nomaubl:<password>@db.corp.local:5432/nomaubl" -c "SELECT 'OK';"
```

If the connect fails here, NomaUBL won't help — fix the network / listener / `pg_hba.conf` issue first. The JDBC URL itself is entered later in the [NomaUBL Database](../configuration/database-connectors/nomaubl.md) Settings screen, not in a config file.

---

## Operating system

| OS | Status |
|---|---|
| **Linux** — Ubuntu / Debian / Rocky / RHEL | Primary target. Production deployments run on Linux. |
| **Windows Server** | Supported. Service registration via `sc.exe` or a wrapper like NSSM in place of systemd. |
| **macOS** | Dev only — fine for evaluation, not production. |
| **Solaris / AIX** | Not tested. Should work given Oracle JDK availability; not officially supported. |

### CPU / memory

| Footprint | Notes |
|---|---|
| **2 vCPU** | Comfortable for one environment processing a few thousand invoices a day. |
| **4 GB RAM** | The JVM defaults are tuned for this. Tune `-Xmx` higher for very large batches. |
| **Disk: 10 GB** | The JAR (~200 MB) + per-env state (template/, ubl/, logs/, snapshots/). Grows with retained UBL files. |

Multiply by the number of environments per host — three environments (`demo`, `uat`, `prod`) on the same server means three JVM processes.

---

## Ports

| Port | Purpose | Direction |
|---|---|---|
| **8090** *(or whatever you set per environment)* | NomaUBL web UI + REST API. | Inbound from operators (and from your reverse proxy if any). |
| **1521** *(Oracle)* or **5432** *(PostgreSQL)* | JDBC. | Outbound from NomaUBL to the database. |
| **443** | PA submission (HTTPS). | Outbound from NomaUBL to the Plateforme Agréée. |
| **21 / 22** | FTP / SFTP source channels. | Outbound from NomaUBL when using the `ftp` source. |

For multi-environment installs, allocate consecutive ports: `8090` for `demo`, `8091` for `uat`, `8092` for `prod` — same `nomaubl.sh start <env> <port>` shape.

---

## File-system layout

NomaUBL expects a **single writable directory** that contains both the JAR and one subdirectory per environment.

```
/opt/nomaubl/              ← owned by the service user, writable
├── nomaubl.jar
├── nomaubl.sh
├── fonts/                 ← shared across environments (created by -install)
├── images/                ← shared across environments (created by -install)
├── demo/                  ← one environment
│   ├── config/
│   ├── input/   process/   ubl/   single/   subtmpl/
│   ├── template/  xslt/   .versions/
│   └── ...
├── uat/                   ← another environment
└── prod/                  ← production environment
```

| Concern | What to set |
|---|---|
| **Owner** | A dedicated `nomaubl` user (or whatever ops convention you have). NEVER run as `root`. |
| **Mode** | `750` on the root; sensitive files (the master-key file, the saved config) get `640`. |
| **Backup** | The `prod/` directory is backup-critical — it holds the per-env config, retained UBL files, snapshots and the upgrade history. Back it up alongside the database. |

---

## Optional reverse proxy

For a production-facing deployment you'll usually front NomaUBL with a reverse proxy:

| Reverse proxy | Why |
|---|---|
| **nginx** | The classic choice for Linux. TLS termination, friendly hostname (`nomaubl.example.com`), HTTP→HTTPS redirect, request logging. |
| **Traefik** | When you already run Traefik on the host for other services. |
| **Apache httpd** | If your ops team already operates Apache. |
| **A cloud load balancer** (AWS ALB, GCP LB, Azure AG) | When deployment is in a managed cloud environment. |

A minimal nginx config snippet for one environment:

```nginx
# /etc/nginx/sites-available/nomaubl.conf
server {
    listen 443 ssl http2;
    server_name nomaubl.example.com;

    ssl_certificate     /etc/letsencrypt/live/nomaubl.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/nomaubl.example.com/privkey.pem;

    # Increase upload size for large UBL batches
    client_max_body_size 64M;

    location / {
        proxy_pass http://127.0.0.1:8090;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 300s;
    }
}

server {
    listen 80;
    server_name nomaubl.example.com;
    return 301 https://$server_name$request_uri;
}
```

Without a reverse proxy, NomaUBL serves HTTP only on the configured port — fine for an intranet install, not for a public-facing deployment.

---

## What NomaUBL does NOT require

Worth calling out so you don't over-prepare:

| Not needed | Why |
|---|---|
| Docker / Kubernetes. | The JAR runs as a plain Java process. Containerise yourself if your ops standard says so; nothing in NomaUBL depends on it. |
| Maven / Gradle on the host. | The JAR ships pre-built. Build tools are only needed if you compile from source. |
| Node.js. | The web UI is bundled inside the JAR (a pre-built React app). |
| A separate web server (Tomcat, WildFly). | NomaUBL embeds its own HTTP server (`com.sun.net.httpserver`). |
| Internet access from the host. | NomaUBL only needs network access to: the database, the Plateforme Agréée endpoints, your source ERP (when extracting). |

---

## Pre-install checklist

Before `-install`:

- [ ] `java -version` → 17 (or higher LTS).
- [ ] The chosen database (Oracle or PostgreSQL) is reachable from the host with a working test query.
- [ ] The target directory (e.g. `/opt/nomaubl/`) exists and is owned by the service user.
- [ ] The chosen HTTP port is free.
- [ ] (Optional) The reverse-proxy + TLS cert are in place.
- [ ] (Optional) The systemd unit is drafted (so the install is the only manual step).

When every box is ticked, move on to [Install and layout](./install-and-layout.md).

---

## What's next

- [Install and layout](./install-and-layout.md) — run `-install`, understand the directory layout.
- [Overview](./overview.md) — the install steps at a glance.
