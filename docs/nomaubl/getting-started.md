---
title: Getting Started with NomaUBL
description: "NomaUBL is a Java integration that transforms JDE XML output into UBL 2.1 e-invoices and submits them to a French certified e-invoicing platform (Platform Agréée)"
---

## NomaUBL

**NomaUBL** is a **Java 17** integration layer between **Oracle JD Edwards** and the French **e-invoicing ecosystem**. It automates the full invoice lifecycle: from JDE XML output to validated UBL 2.1 e-invoices, submission to a Platform Agréée (PA), and lifecycle tracking in Oracle tables.

### What it does

- **Transforms** JDE XML output into **UBL 2.1 e-invoices** via XSLT stylesheets
- **Validates** invoices against XSD schemas and Schematron rules (EN16931 + CIUS-FR)
- **Submits** invoices to a certified French e-invoicing platform (Platform Agréée)
- **Tracks** the full invoice lifecycle in Oracle tables (F564230–F564236)
- **Polls** the PA for status updates and reconciles them back to JDE
- Provides a **React web interface** served by an embedded HTTP server
- Provides a **CLI** for batch processing and automation

### Architecture overview

```
JDE (XML spool output)
        │
        ▼
  ScheduleUBL (CLI entry point)
        │
        ├─ XSLT Transform ──► UBL 2.1 XML
        │
        ├─ UBL Validation ──► XSD + EN16931 + CIUS-FR Schematron
        │
        ├─ PPF Directory Check ──► DirectoryApiClient (non-blocking)
        │
        ├─ PA Submission ──► PlatformApiClient (REST, Java 11 HttpClient)
        │
        └─ Oracle DB Update ──► F564230, F564231, F564235, F564236
```

### Key components

| Component | Description |
| --- | --- |
| `ScheduleUBL` | CLI entry point — orchestrates all processing modes |
| `CustomUBL` | Core per-invoice processor (`Callable<Integer>`) |
| `UBLValidator` | XSD + Schematron validation (EN16931, CIUS-FR) |
| `PlatformApiClient` | REST client for the Platform Agréée |
| `DirectoryApiClient` | PPF directory lookup (non-blocking) |
| `TokenManager` | JWT bearer token with 55-min cache + auto-refresh |
| `ImportStatusHandler` | Polls PA for pending invoice status updates |
| `UBLDatabaseHandler` | All Oracle DB writes (F564230–F564236) |
| Web interface | React + TypeScript, served by embedded `WebServer` |

### Quick start

**1. Build the application**

```bash
bash build.sh
```

**2. Verify the build**

```bash
java -jar nomaubl.jar -help
```

**3. Open the web interface**

```bash
java -jar nomaubl.jar -config config.properties
```

Then open your browser at `http://localhost:8080`.

**4. Process invoices from CLI**

```bash
java -jar nomaubl.jar -run config.properties my_template output.xml UBL 1001
```

!!! note "Configuration required"
    Before running, you must configure the `config.properties` file with your Oracle database connection and Platform Agréée credentials. See the [Configuration](configuration/global.md) section.
