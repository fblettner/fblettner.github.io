---
title: UBL Validation
description: "Three-level UBL validation in NomaUBL: XSD, EN16931 Schematron, and CIUS-FR Schematron"
---

## UBL Validation

NomaUBL validates every generated UBL 2.1 invoice through three successive layers before it is sent to the Platform Agréée.

### Validation layers

```
Generated UBL 2.1 XML
        │
        ▼  Layer 1
   XSD Validation
   UBL-Invoice-2.1.xsd
        │
        ▼  Layer 2
   EN16931 Schematron
   EN16931-UBL-validation-preprocessed.sch
        │
        ▼  Layer 3
   CIUS-FR Schematron
   BR-FR-Flux2-Schematron-UBL.sch
        │
        ▼
   ValidationResult
   (list of errors/warnings)
```

### Layer 1 — XSD validation

Validates the structural conformance of the UBL XML against the official UBL 2.1 Invoice schema.

**Schema:** `UBL-Invoice-2.1.xsd`

This checks:

- All required elements are present
- Element types are correct (dates, amounts, codes)
- Namespace declarations are correct

A failure at this level means the XML is structurally invalid and cannot be processed further.

### Layer 2 — EN16931 Schematron

Validates compliance with the **European e-invoicing standard EN16931**.

**Rules file:** `EN16931-UBL-validation-preprocessed.sch`

Key rule categories:

| Rule prefix | Area |
| --- | --- |
| `BR-` | Business rules (mandatory content) |
| `BR-CO-` | Consistency rules (cross-field checks) |
| `BR-CL-` | Code list rules (valid code values) |
| `BR-AE-` | VAT reverse charge rules |
| `BR-E-` | VAT exempt rules |
| `BR-Z-` | Zero-rated VAT rules |
| `BR-S-` | Standard VAT rules |
| `BR-IC-` | Intra-community supply rules |

### Layer 3 — CIUS-FR Schematron

Validates compliance with **CIUS-FR**, the French national adaptation of EN16931.

**Rules file:** `BR-FR-Flux2-Schematron-UBL.sch`

These rules add French-specific constraints:

| Rule | Requirement |
| --- | --- |
| `BR-FR-01` | Supplier SIRET must be present |
| `BR-FR-02` | Customer SIRET must be present (for B2B) |
| `BR-FR-03` | SIREN format validation (14 digits for SIRET) |
| `BR-FR-04` | French VAT number format |
| `BR-FR-05` | Payment means must include IBAN for credit transfer |

### Validation result

The `ValidationResult` object contains a list of `ValidationError` entries:

| Field | Description |
| --- | --- |
| `level` | `FATAL`, `ERROR`, or `WARNING` |
| `ruleId` | Schematron rule ID (e.g. `BR-01`, `BR-FR-02`) |
| `location` | XPath expression pointing to the failing element |
| `message` | Human-readable error description |
| `source` | `XSD`, `EN16931`, or `CIUS-FR` |

### Status codes from validation

| Result | Status | Description |
| --- | --- | --- |
| No errors, no warnings | `9901` | Validation réussie |
| Warnings only (no errors) | `9902` | Validation avec avertissements |
| Any `ERROR` or `FATAL` | `9905` | Echec de validation |

### Error storage

All validation errors are stored in **F564236**:

| Column | Content |
| --- | --- |
| `UVDOC` | JDE document number |
| `UVDCT` | JDE document type |
| `UVKCO` | JDE company |
| `UVY56LEVEL` | Error level (`FATAL`, `ERROR`, `WARNING`) |
| `UVSRCL` | Source schematron (`EN16931`, `CIUS-FR`) or `XSD` |
| `UVY56RULE` | Rule ID (e.g. `BR-FR-01`) |
| `UVK74MSG1` | Error message text |

### Bundled vs external validation assets

By default, validation assets are **bundled inside the JAR** and loaded from the classpath:

```
validation/xsd/main/UBL-Invoice-2.1.xsd
validation/schematron/EN16931-UBL-validation-preprocessed.sch
validation/schematron/BR-FR-Flux2-Schematron-UBL.sch
```

You can override with external files by setting the paths in the `e-invoicing` template:

```json
"ublXsdPath": "/opt/nomaubl/validation/xsd/main/UBL-Invoice-2.1.xsd",
"ublSchematronPath": "/opt/nomaubl/validation/schematron/EN16931-UBL-validation-preprocessed.sch",
"ciusFrSchematronPath": "/opt/nomaubl/validation/schematron/BR-FR-Flux2-Schematron-UBL.sch"
```

This is useful when you need to update the Schematron rules independently of the JAR (e.g. after a CIUS-FR update).

### Schematron compilation

Schematron `.sch` files are compiled into XSLT at **startup** using the Saxon `TransformerFactoryImpl` via the ISO Schematron pipeline. This compilation is cached in memory for the lifetime of the JVM process — there is no per-invoice compilation overhead.

### Standalone validation

You can validate a UBL file without the full JDE pipeline using `UBL_VALIDATE` processing type:

```bash
java -jar nomaubl.jar -run config.properties my_template invoice.xml UBL_VALIDATE 0
```

Or directly via the **UBL Validation** page in the web interface.
