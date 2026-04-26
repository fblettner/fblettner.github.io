---
title: UBL Generation
description: "How NomaUBL transforms JDE XML into UBL 2.1 e-invoices using XSLT"
---

## UBL Generation

NomaUBL transforms JDE XML spool output into **UBL 2.1 Invoice** documents using XSLT stylesheets. Each document template references its own stylesheet, allowing different JDE document types to produce correctly structured UBL invoices.

### Transformation pipeline

```
JDE XML spool file
        │
        ▼  (optional pre-transform if transformYN=Y)
  Pre-transform XSLT
        │
        ▼
  Document template XSLT
        │
        ▼
  UBL 2.1 Invoice XML
```

**Pre-transform** (`transformYN=Y` in `global`): an optional first-pass XSLT that normalises or enriches the raw JDE XML before the document-specific transform runs. Useful when multiple templates share common JDE output structures.

**Document transform**: the main XSLT defined in the `transform` property of the document template. This stylesheet maps JDE fields to UBL 2.1 elements.

### UBL 2.1 output structure

The generated XML must conform to the UBL 2.1 Invoice namespace:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"
         xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
         xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2">

  <cbc:UBLVersionID>2.1</cbc:UBLVersionID>
  <cbc:CustomizationID>urn:cen.eu:en16931:2017#compliant#urn:fnfe-association.fr:factur-x.eu:1p0:basic</cbc:CustomizationID>
  <cbc:ProfileID>urn:fdc:peppol.eu:2017:poacc:billing:01:1.0</cbc:ProfileID>
  <cbc:ID>INV-2025-001</cbc:ID>
  <cbc:IssueDate>2025-01-15</cbc:IssueDate>
  <cbc:InvoiceTypeCode>380</cbc:InvoiceTypeCode>
  <cbc:DocumentCurrencyCode>EUR</cbc:DocumentCurrencyCode>

  <!-- Supplier -->
  <cac:AccountingSupplierParty>...</cac:AccountingSupplierParty>

  <!-- Customer -->
  <cac:AccountingCustomerParty>...</cac:AccountingCustomerParty>

  <!-- Tax totals -->
  <cac:TaxTotal>...</cac:TaxTotal>

  <!-- Monetary totals -->
  <cac:LegalMonetaryTotal>...</cac:LegalMonetaryTotal>

  <!-- Invoice lines -->
  <cac:InvoiceLine>...</cac:InvoiceLine>

</Invoice>
```

### Key mapping points from JDE XML

| UBL Element | JDE Source | Notes |
| --- | --- | --- |
| `cbc:ID` | Document number (`DOC`) | Must be unique per supplier |
| `cbc:IssueDate` | JDE invoice date (Julian) | Converted: `yyyyDDD - 1900000` → `yyyy-MM-dd` |
| `cbc:InvoiceTypeCode` | Document type (`DCT`) | Mapped to UNTDID 1001 code (380=invoice, 381=credit note) |
| `cbc:DocumentCurrencyCode` | Currency code | Must be ISO 4217 (e.g. `EUR`) |
| Supplier SIRET | JDE company setup | Required for PPF directory lookup |
| Customer SIRET | JDE address book | Required for PPF directory lookup |
| VAT breakdown | JDE tax lines | Grouped by VAT category (S, E, Z, AE…) |
| Line amounts | JDE order/invoice lines | Net amount per line (excl. VAT) |

### JDE date conversion

JDE uses **Julian dates** stored as integers. The conversion to ISO dates is:

```java
// JDE Julian: YYYYDDD (days since start of year, 1900000 offset)
int julian = Integer.parseInt(jdeDate);  // e.g. 125015
int adjusted = julian - 1900000;         // e.g. 125015 - 1900000 = -1774985 → wrong
// Correct: 1900000 is the offset for year 1900
// e.g. 2025015 → year=2025, day=015 → January 15, 2025
```

In XSLT, use an extension or a helper template to perform this conversion before outputting `cbc:IssueDate`.

### Negative amounts (credit notes)

For credit notes (`InvoiceTypeCode=381`), line amounts and totals must be **positive** in UBL 2.1 even though JDE stores them as negative. Handle this in the XSLT:

```xsl
<cbc:LineExtensionAmount currencyID="EUR">
  <xsl:value-of select="format-number(abs(number(JDE_AMOUNT)), '0.00')"/>
</cbc:LineExtensionAmount>
```

### Discounts

Line-level discounts are expressed as `cac:AllowanceCharge` elements with `ChargeIndicator=false`:

```xml
<cac:AllowanceCharge>
  <cbc:ChargeIndicator>false</cbc:ChargeIndicator>
  <cbc:AllowanceChargeReasonCode>95</cbc:AllowanceChargeReasonCode>
  <cbc:Amount currencyID="EUR">10.00</cbc:Amount>
</cac:AllowanceCharge>
```

### Variable substitution in paths

Template property values support two substitution variables:

| Variable | Replaced with | Config property |
| --- | --- | --- |
| `%APP_HOME%` | Application root path | `global.appHome` |
| `%PROCESS_HOME%` | Processing root path | `global.processHome` |
| `%TEMPLATE%` | Document template name | — |
| `%FILE_NAME%` | Input XML file name (no extension) | — |

These are applied by `replaceConstValue()` before any file path is used.

### Dev mode for XSLT iteration

Enable `devMode=Y` in the document template and set `devXSL` to an alternate stylesheet path. In dev mode:

- The alternate XSLT is used instead of the production one
- Extra debug output is logged
- Validation errors are printed in detail

This allows rapid XSLT iteration without modifying the production stylesheet.
