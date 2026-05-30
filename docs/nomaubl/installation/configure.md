---
title: Configure
description: "After the install, every connector, scheduler interval and operational setting is configured from the Settings UI — not by hand-editing config files. Start the service, sign in, then walk through the Configuration section."
keywords: [NomaUBL, configure, post-install, Settings UI, database connectors, API connectors, FTP connectors, system parameters]
---

# Configure

NomaUBL's post-install configuration is **all done from the Settings UI**. Every database connection, API endpoint, FTP server, scheduler interval and global parameter has its own builder screen — there's no need to edit `config.json` by hand for any of it.

The flow is:

1. The `install` step ([Install and layout](./install-and-layout.md)) writes a starter `config.json` with empty connector slots.
2. You start the service via the wrapper — `./nomaubl.sh start <env>` on Linux / macOS, `nomaubl.cmd start <env>` on Windows. See [Service supervision](./service-and-systemd.md). The service boots even with empty credentials; the web UI shows a Settings panel ready to fill.
3. You sign in (default `admin` user is created on first start), open Settings, and configure each connector in its dedicated screen.

This page is the **transition map** from install to the existing Configuration section. Every link below goes to a screen you'll walk through to get the service operational.

---

## What gets configured from where

| Concern | Configuration page | What you set |
|---|---|---|
| **NomaUBL's own database** (the F564* tables — invoices, lifecycle, auth, notifications). | [Configuration → Database Connectors → NomaUBL](../configuration/database-connectors/nomaubl.md) | JDBC URL, credentials, schema, table catalogue, one-click *Initialize* to bootstrap the schema. Supports Oracle and PostgreSQL. |
| **JD Edwards source database** (BIP / archive reads — JDE installs only). | [Configuration → Database Connectors → JD Edwards](../configuration/database-connectors/jdedwards.md) | JDBC URL, credentials, BIP table names. Skip for non-JDE installs. |
| **Plateforme Agréée** (REST API) + any other API the install talks to. | [Configuration → API Connectors](../configuration/api-connectors.md) | Base URL, auth (OAuth2 / Bearer / Basic / API key), endpoints catalogue with built-in test runner. |
| **FTP / SFTP source** (when extracting spool files over FTP). | [Configuration → FTP Connectors](../configuration/ftp-connectors.md) | Host, port, credentials, base directory. |
| **Custom SQL reads** (non-JDE source ERPs — SAP, NetSuite, custom). | [Configuration → SQL Connectors](../configuration/sql-connectors.md) | Per-query SQL with bind parameters. |
| **System parameters** — application home, batch directories, SMTP, AI assistant, license, scheduler intervals. | [Configuration → System → Global](../configuration/system/global.md) | Six tabs: Directories, Processing, SMTP, AI, License & auth, Scheduler. |
| **E-invoicing settings** (PA template choice, validation, send mode). | [Configuration → System → E-invoicing](../configuration/system/einvoicing.md) | Per-environment defaults. |
| **E-reporting settings**. | [Configuration → System → E-reporting](../configuration/system/ereporting.md) | Same shape. |
| **E-directory** (PPF + INSEE search). | [Configuration → System → E-directory](../configuration/system/edirectory.md) | Endpoint / credentials. |
| **Fetch-invoices scheduler** (BIP report filters that drive `-fetch-all bip` runs). | [Configuration → System → Fetch invoices](../configuration/system/fetch-invoices.md) | Per-report filters. |
| **Document types** and **statuses**. | [Configuration → System → Document types](../configuration/system/document-types.md) / [Statuses](../configuration/system/statuses.md) | Catalogue editors. |
| **Reference lists, custom lists, list views**. | [Configuration → Reference lists](../configuration/reference-lists.md) and the sibling pages. | Per-list editors. |
| **Users and roles**. | [Configuration → Security → Users](../configuration/security/users.md) / [Roles](../configuration/security/roles.md) | Identity + authorization. |

---

## The pragmatic order

When standing up a fresh environment, work the screens in this order:

1. **[Database Connectors → NomaUBL](../configuration/database-connectors/nomaubl.md)** — first thing to wire. The *Initialize* tab creates every NomaUBL table and provisions the default `admin` user; without that the rest can't work.
2. **[Database Connectors → JD Edwards](../configuration/database-connectors/jdedwards.md)** — if your source is JDE; otherwise skip.
3. **[API Connectors](../configuration/api-connectors.md)** — wire your Plateforme Agréée. Use the built-in test runner to confirm authentication works before continuing.
4. **[System → Global](../configuration/system/global.md)** — SMTP for outbound notifications, optional AI key, scheduler intervals.
5. **[System → E-invoicing](../configuration/system/einvoicing.md)** + **[E-reporting](../configuration/system/ereporting.md)** — choose the PA template + defaults.
6. **[Security → Users](../configuration/security/users.md)** — replace the default `admin` with proper named accounts.

Everything else can wait until you have a real document flowing through.

---

## What's stored on disk

`config.json`, `xdo.cfg`, `config-documents.json` and `config-lists.json` live in `<envDir>/config/` — they're the **storage** behind the Settings UI. Every save on a UI screen writes back to one of these files; in practice you never open them in a text editor.

The two cases where direct file access is justified:

| Case | What |
|---|---|
| Promoting a fully-configured environment to a new server. | Copy the whole `<envDir>/config/` directory + the `.nomaubl-master.key` file. The next install on the target machine reuses the existing config (the installer skips them when they exist). |
| Restoring from backup. | Same — the four config files + the master key are the canonical state. Save them with the database backup. |

For **encrypted secret values** (`ENC:<…>` blobs in the saved config), the master key file at `<envDir>/.nomaubl-master.key` is what decrypts them. **Back it up alongside the configuration** — losing it means re-entering every credential by hand.

---

## When something doesn't work

Each configuration screen carries its own *Test connection* (or *Test endpoint*, *Validate schema*, depending on the connector). Use them — they're more reliable than reading the log to diagnose a JDBC URL typo or a missing OAuth scope.

For deeper diagnostics — *the service won't start*, *the scheduler doesn't tick*, *the database returns Connection refused* — see [Monitoring → Service and logs](../monitoring/service-and-logs.md) and [Management → Command Line](../management/command-line.md).

---

## What's next

- [Service and systemd](./service-and-systemd.md) — get the service running on boot.
- [Configuration → Database Connectors → NomaUBL](../configuration/database-connectors/nomaubl.md) — the first thing to wire.
- [Monitoring → Overview](../monitoring/overview.md) — what to watch once it's running.
