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

### Oracle JD Edwards

NomaUBL is designed to run in a JDE environment. The following are required:

- **Oracle JDBC driver** — `ojdbc8.jar` or compatible (must be on the classpath)
- **Oracle XDO / BI Publisher libraries** — for RTF→PDF generation
- Oracle database accessible via JDBC thin driver (`jdbc:oracle:thin:@host:port:SID`)
- JDE XML spool output files produced by UBE jobs

### Platform Agréée (PA)

To submit e-invoices, you need access to a **certified French e-invoicing platform** (Plateforme Agréée) that exposes the following REST endpoints:

| Endpoint | Method | Purpose |
| --- | --- | --- |
| `{paApiLoginEndpoint}` | `POST` | JWT authentication |
| `{paApiImportEndpoint}` | `POST` | Submit UBL invoice |
| `{paApiImportEndpoint}/{uuid}` | `GET` | Poll import status |
| `{paApiDirectoryEndpoint}` | `GET` | PPF directory lookup |

!!! tip "Mock mode"
    NomaUBL includes a built-in **mock PA** for testing without a real platform. Set `paUseMock=true` and `paMockBehavior` in the `e-invoicing` template. See [PA Integration](../features/pa-integration.md) for details.

### Validation assets

UBL validation requires Schematron rule files. These are bundled inside the JAR at:

```
validation/xsd/main/UBL-Invoice-2.1.xsd
validation/schematron/EN16931-UBL-validation-preprocessed.sch
validation/schematron/BR-FR-Flux2-Schematron-UBL.sch
```

No additional download is required if using the pre-built JAR.

### XSLT stylesheet

Each document template references an XSLT stylesheet that transforms JDE XML into UBL 2.1 XML. These stylesheets must be provided and configured per template (via the `transform` property in the document template).

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
