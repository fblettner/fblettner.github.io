---
title: CLI Reference
description: "All NomaUBL command-line interface modes and their arguments"
---

## CLI Reference

NomaUBL is invoked as an executable JAR with a mode flag as the first argument.

```bash
java -jar nomaubl.jar <mode> [arguments...]
```

### Modes overview

| Mode | Purpose |
| --- | --- |
| `-config` | Start the web interface (embedded HTTP server) |
| `-run` | Process invoices (PDF and/or UBL) |
| `-import` | Poll the PA for pending invoice status updates |
| `-password` | Encode a password for storage in the config |
| `-updUser` | Update the JDE user on submitted jobs |

---

### `-config` — Start the web interface

```bash
java -jar nomaubl.jar -config <configFile>
```

Starts the embedded HTTP server and serves the React web interface. The server listens on the configured port (default `8080`).

| Argument | Description |
| --- | --- |
| `<configFile>` | Path to the main configuration file (e.g. `config.properties`) |

**Example:**

```bash
java -jar nomaubl.jar -config /opt/nomaubl/config.properties
```

Then open `http://localhost:8080` in your browser.

---

### `-run` — Process invoices

```bash
java -jar nomaubl.jar -run <configFile> <template> <xmlFile> <processingType> <jobNumber>
```

Processes one or more JDE XML spool files using the specified document template and processing mode.

| Argument | Description |
| --- | --- |
| `<configFile>` | Path to the main configuration file |
| `<template>` | Document template name (e.g. `vrc_pro`) |
| `<xmlFile>` | Path to the JDE XML input file |
| `<processingType>` | One of: `SINGLE`, `BURST`, `UBL`, `BOTH`, `UBL_VALIDATE` |
| `<jobNumber>` | JDE job number (used for DB tracking and log correlation) |

**Examples:**

```bash
# Generate UBL and send to PA
java -jar nomaubl.jar -run config.properties vrc_pro /data/input/output.xml UBL 1001

# Generate PDF + UBL and send to PA
java -jar nomaubl.jar -run config.properties vrc_pro /data/input/output.xml BOTH 1001

# Validate UBL without sending
java -jar nomaubl.jar -run config.properties vrc_pro /data/input/output.xml UBL_VALIDATE 1001

# Generate PDF only (single document)
java -jar nomaubl.jar -run config.properties vrc_pro /data/input/output.xml SINGLE 1001

# Generate PDFs in batch
java -jar nomaubl.jar -run config.properties vrc_pro /data/input/output.xml BURST 1001
```

**Processing flow for `UBL` / `BOTH`:**

```
Read XML → XSLT Transform → UBL 2.1 XML
       → XSD Validation
       → EN16931 Schematron
       → CIUS-FR Schematron
       → PPF Directory Check (non-blocking)
       → POST to PA /api/v1/sale/invoices/import
       → Store UUID + status in F564230
       → Write lifecycle to F564235
```

**Parallelism:** BURST, UBL, and BOTH modes use an `ExecutorService` with `numProc` threads (configured in the `global` template) to process multiple invoice documents in parallel.

---

### `-import` — Poll PA for status updates

```bash
java -jar nomaubl.jar -import <configFile>
```

Queries all invoices in status `9906` (Pending — awaiting PA confirmation) and calls the PA import status endpoint for each one.

| Argument | Description |
| --- | --- |
| `<configFile>` | Path to the main configuration file |

**What it does:**

1. Queries `F564231` for all invoices with status `9906`
2. For each, calls `GET {paApiImportEndpoint}/{uuid}` using the UUID stored in `F564230.FEUKIDSZ`
3. Updates the invoice based on the PA response:

| PA response status | Action |
| --- | --- |
| `success` | Updates `FEUKIDSZ` with `invoiceUuid`, sets status `10` (Deposited) |
| `pending` | No change (will be re-checked on next `-import` run) |
| `failed` | Sets status `9907`, records error messages in F564235 |
| other | Sets status `9904` (Error Sent), records in F564235 |

**Example (run as a cron job every 15 minutes):**

```bash
*/15 * * * * java -jar /opt/nomaubl/nomaubl.jar -import /opt/nomaubl/config.properties
```

---

### `-password` — Encode a password

```bash
java -jar nomaubl.jar -password <plainTextPassword>
```

Encodes a password in Base64 for storage as `DBPassword` in the `global` template.

| Argument | Description |
| --- | --- |
| `<password>` | The Oracle database password |

**Example:**

```bash
java -jar nomaubl.jar -password MySecretPass123
# Output: TXlTZWNyZXRQYXNzMTIz
```

Copy the output into `DBPassword` in your `global` configuration template.

:::info
This command is only for encoding the Oracle DB password (`DBPassword` in the `global` template).
:::

---

### `-updUser` — Update JDE user

```bash
java -jar nomaubl.jar -updUser <configFile> <jobNumber> <xmlFile>
```

Updates the JDE user field on previously submitted invoice jobs. Used when the original submission was made under a system user and needs to be attributed to the actual JDE user.

| Argument | Description |
| --- | --- |
| `<configFile>` | Path to the main configuration file |
| `<jobNumber>` | JDE job number to update |
| `<xmlFile>` | Path to the XML file containing user information |

---

### Exit codes

| Code | Meaning |
| --- | --- |
| `0` | Success |
| `1` | Processing error (see log output for details) |
| `2` | Configuration error |
| `3` | Database connection error |
