---
title: Processing Types
description: "Reference for the five processing types available in NomaUBL: SINGLE, BURST, UBL, BOTH, UBL_VALIDATE"
---

## Processing Types

The processing type is the third argument to the `-run` CLI command and controls what NomaUBL produces for each job.

```bash
java -jar nomaubl.jar -run <config> <template> <file> <ProcessingType> <jobNum>
```

### Summary

| Type | PDF | UBL XML | Validated | Sent to PA | DB Written |
| --- | --- | --- | --- | --- | --- |
| `SINGLE` | Yes (1 doc) | No | No | No | No |
| `BURST` | Yes (multi) | No | No | No | No |
| `UBL` | No | Yes | Yes | Yes (if configured) | Yes |
| `BOTH` | Yes | Yes | Yes | Yes (if configured) | Yes |
| `UBL_VALIDATE` | No | Yes | Yes | No | Yes (errors only) |

---

### SINGLE

Generates a PDF for a **single document** from the JDE XML input.

- Uses Oracle XDO (`FOProcessor`) to render the RTF template as a PDF
- One output PDF file per invocation
- No UBL generation, no PA submission, no DB write
- Uses `singleOutput` directory from the `global` template

**When to use:** reprinting a single invoice, generating a PDF on demand.

```bash
java -jar nomaubl.jar -run config.properties vrc_pro output.xml SINGLE 1001
```

---

### BURST

Generates PDFs for **multiple documents** from a single JDE XML input file that contains multiple invoice records.

- The `burstKey` property in the template defines the XPath to split the XML into individual records
- One PDF per record
- Parallel processing using `numProc` threads
- No UBL generation, no PA submission, no DB write
- Uses `burstOutput` directory from the `global` template

**When to use:** end-of-period batch invoice printing.

```bash
java -jar nomaubl.jar -run config.properties vrc_pro batch.xml BURST 1001
```

---

### UBL

Generates UBL 2.1 XML, validates it, and submits to the Platform Agréée.

- No PDF generation
- Full XSLT transformation → XSD validation → Schematron validation → PPF directory check → PA submission
- DB writes: F564230, F564231, F564235, F564236
- Parallel processing using `numProc` threads
- Controlled by `sendToPA` and `paMode` settings

**When to use:** standard e-invoicing workflow when PDF is generated separately by JDE.

```bash
java -jar nomaubl.jar -run config.properties vrc_pro output.xml UBL 1001
```

---

### BOTH

Generates both a PDF and a UBL 2.1 XML, validates the UBL, and submits to the PA.

- Combines the full SINGLE/BURST PDF generation with the full UBL pipeline
- DB writes: F564230, F564231, F564235, F564236
- Parallel processing using `numProc` threads

**When to use:** when NomaUBL is responsible for both PDF archiving and e-invoicing.

```bash
java -jar nomaubl.jar -run config.properties vrc_pro output.xml BOTH 1001
```

---

### UBL_VALIDATE

Generates UBL 2.1 XML and validates it, but **never sends to the PA**.

- Full XSLT transformation and three-layer validation
- DB writes: only validation errors (F564236) if any
- Useful for testing XSLT stylesheets and checking rule compliance
- Does not change invoice status in F564231

**When to use:**
- Iterating on a new XSLT stylesheet
- Regression testing after a CIUS-FR rule update
- Validating a backlog of invoices before enabling live PA submission

```bash
java -jar nomaubl.jar -run config.properties vrc_pro output.xml UBL_VALIDATE 1001
```

!!! tip "Safe for production"
    `UBL_VALIDATE` mode is safe to run against production data — it reads JDE XML and writes only validation errors to F564236, but never modifies F564230 or F564231, and never contacts the PA.

---

### Checking type capabilities programmatically

The `ProcessingType` enum exposes helper methods:

```java
ProcessingType type = ProcessingType.fromString("UBL");

type.involvesUBL()   // true  — UBL, BOTH, UBL_VALIDATE
type.involvesPDF()   // false — SINGLE, BURST, BOTH
type.isBatch()       // true  — all except SINGLE
type.shouldSendToPA() // true — UBL, BOTH only (not UBL_VALIDATE)
```
