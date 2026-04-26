---
title: Prerequisites
description: "System requirements and dependencies for NomaUBL"
---

## Prerequisites

### Java

NomaUBL requires **Java 17** or higher.

```bash
java -version
# java version "17.x.x" ...
```

### Oracle database

NomaUBL stores invoice lifecycle data in Oracle tables and reads configuration from an Oracle schema. The following are required:

- **Oracle JDBC driver** — `ojdbc8.jar` or compatible (must be on the classpath)
- Oracle database accessible via JDBC thin driver (`jdbc:oracle:thin:@host:port:SID`)

### XML input source

NomaUBL processes any XML file as input — it is not tied to a specific ERP. The XSLT stylesheet defined in each document template is responsible for transforming the source XML into a valid UBL 2.1 document. Common sources include:

- JD Edwards UBE XML spool output
- Any other ERP or system that produces structured XML

### Optional: Oracle XDO / BI Publisher

Required only if PDF generation is needed (`SINGLE`, `BURST`, or `BOTH` processing modes). Not required for pure UBL processing (`UBL`, `UBL_VALIDATE`).

### Platform Agréée (PA)

To submit e-invoices, you need access to a **certified French e-invoicing platform** (Plateforme Agréée) that exposes the following REST endpoints:

| Endpoint | Method | Purpose |
| --- | --- | --- |
| `{paApiLoginEndpoint}` | `POST` | JWT authentication |
| `{paApiImportEndpoint}` | `POST` | Submit UBL invoice |
| `{paApiImportEndpoint}/{uuid}` | `GET` | Poll import status |
| `{paApiDirectoryEndpoint}` | `GET` | PPF directory lookup |

:::tip[Mock mode]
NomaUBL includes a built-in **mock PA** for testing without a real platform. Set `paUseMock=true` and `paMockBehavior` in the `e-invoicing` template. See [PA Integration](../features/pa-integration.md) for details.
:::

### Validation assets

UBL validation requires Schematron rule files. These are bundled inside the JAR at:

```
validation/xsd/main/UBL-Invoice-2.1.xsd
validation/schematron/EN16931-UBL-validation-preprocessed.sch
validation/schematron/BR-FR-Flux2-Schematron-UBL.sch
```

No additional download is required if using the pre-built JAR.

### XSLT stylesheet

Each document template references an XSLT stylesheet that transforms your source XML into a UBL 2.1 invoice. These stylesheets must be provided and configured per template (via the `transform` property in the document template).

### Optional: Ghostscript

PDF post-processing (merging, compression) requires **Ghostscript** installed on the server. Configure the path via the `cmdGS` property in the `global` template. If Ghostscript is not used, set `runGS=N`.

### Build tools

To build from source:

```bash
bash --version   # bash 3.2+
java -version    # Java 17+
node --version   # Node.js 18+ (for React frontend)
npm --version    # npm 9+
```
