---
title: Document Templates
description: "How to create and configure document templates for each JDE invoice type"
---

## Document Templates

Document templates define how a specific type of JDE document (e.g. a customer invoice, a pro-forma) is processed. Unlike the three reserved system templates (`global`, `e-invoicing`, `e-directory`), document templates can be freely created and deleted.

### Template storage

Document templates are stored in the **`-documents`** sibling config file (e.g. `config-documents.properties`). If this file does not exist, templates fall back to the main config file.

Each template is identified by a unique **name** (e.g. `vrc_pro`, `isc_facture`). The name is passed as the `<tpl>` argument to the `-run` CLI command.

### Key properties

| Property | Description | Example |
| --- | --- | --- |
| `transform` | Path to the XSLT stylesheet that transforms JDE XML → UBL 2.1 XML | `%APP_HOME%/xsl/vrc_pro.xsl` |
| `rtfTemplate` | Path to the RTF template for PDF generation | `%APP_HOME%/templates/vrc_pro.rtf` |
| `burstKey` | XPath expression to split a multi-document XML file into individual invoices | `/Batch/Invoice` |
| `dirInput` | Override for the input directory (falls back to `global.dirInput`) | `%PROCESS_HOME%/vrc/input` |
| `dirOutput` | Override for the output directory | `%PROCESS_HOME%/vrc/output` |
| `sendToPA` | `Y` / `N` — override the `e-invoicing` setting for this template | `Y` |
| `devMode` | `Y` to enable extra XSLT debug output for this template | `N` |
| `devXSL` | Alternate XSLT stylesheet for development/testing | — |
| `attachment` | Path pattern for PDF attachments to include with the UBL submission | — |

### Creating a document template

**Step 1 — Add the template entry** to `config-documents.properties`:

```json
{
  "resources": [
    {
      "name": "my_invoice",
      "type": "document",
      "properties": {
        "transform": "%APP_HOME%/xsl/my_invoice.xsl",
        "rtfTemplate": "%APP_HOME%/templates/my_invoice.rtf",
        "burstKey": "/Batch/Invoice",
        "dirInput": "%PROCESS_HOME%/my_invoice/input",
        "dirOutput": "%PROCESS_HOME%/my_invoice/output",
        "sendToPA": "Y"
      }
    }
  ]
}
```

**Step 2 — Create the XSLT stylesheet** that maps JDE XML fields to UBL 2.1 elements. The stylesheet must output a valid `Invoice` document conforming to UBL 2.1 (`urn:oasis:names:specification:ubl:schema:xsd:Invoice-2`).

**Step 3 — Test with UBL_VALIDATE mode** before going live:

```bash
java -jar nomaubl.jar -run config.properties my_invoice test.xml UBL_VALIDATE 1001
```

This validates the generated UBL without sending it to the PA.

### Template name conventions

It is recommended to use lowercase names with underscores, reflecting the JDE UBE report or document type:

```
vrc_pro        → VRC customer invoice (pro-forma)
isc_facture    → ISC supplier invoice
poa_credit     → Purchase order credit note
```

### Processing type per template

The `-run` command accepts a processing type that determines what the template produces:

| Processing Type | PDF | UBL | Sent to PA |
| --- | --- | --- | --- |
| `SINGLE` | Yes | No | No |
| `BURST` | Yes (multi) | No | No |
| `UBL` | No | Yes | Yes (if configured) |
| `BOTH` | Yes | Yes | Yes (if configured) |
| `UBL_VALIDATE` | No | Yes | No |

See [Processing Types](../reference/processing-types.md) for full details.
