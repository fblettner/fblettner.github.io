---
title: Fetch Invoices
description: "Configure which JD Edwards BI Publisher (BIP) jobs NomaUBL retrieves for batch processing, and which document template to use for each."
keywords: [NomaUBL, fetch invoices, BIP, BI Publisher, JD Edwards, JDE, batch processing, scheduler, document template, report filter]
---

# Fetch Invoices

The **Fetch Invoices** editor controls which **JD Edwards BI Publisher (BIP)** jobs NomaUBL pulls in for processing. It is used by the batch import and the background scheduler to decide *which BIP outputs are eligible* and *how each one should be parsed*.

:::info[JD Edwards–specific page]
This page is one of the **JDE-specific** parts of NomaUBL — it talks to a JD Edwards BIP server. The other configuration pages are source-agnostic.
:::

---

## BIP Report Filters

A list of the BIP reports NomaUBL is allowed to pick up. Each row is a filter: NomaUBL only enqueues BIP jobs whose **Report** name (and optionally **Version**) matches one of the rows. If the table is **empty**, NomaUBL fetches **all jobs** — handy for testing, almost never what you want in production.

### Per-row fields

| Column | Description |
|---|---|
| **Report** | Name of the BIP report (e.g. `R42565`). |
| **Version** | Specific report version to allow (e.g. `FBL00001`). Disabled when **All Versions** is checked. |
| **All Versions** | When ticked, every version of the report is accepted and the **Version** field is cleared / disabled. |
| **Template** | The NomaUBL **document template** used to **produce the PDF attachment** when generating the UBL from this BIP output. **Required** when the document type produces a UBL with a PDF attachment (the dropdown lists templates of type `document` defined in your environment — see *Configuration → Documents*). |

Use the **+ Add Report** button to append a row, and the **×** button on a row to remove it.

### How it's used

- **Batch processing** — when you run the import manually, only jobs whose Report (and Version, unless All Versions is set) match a row are queued.
- **Scheduler** — when serve mode is enabled, the same filter applies on each polling tick.
- **Template** — once a job matches, NomaUBL uses the configured **document template** to produce the PDF that gets attached to the UBL during generation. The template provides the RTF / XSL chain defined in *Configuration → Documents*. It is **required** whenever the document type produces a UBL with a PDF attachment.

---

## Tips & best practices

- **Always configure at least one filter in production.** Leaving the list empty pulls in every BIP job from the connected JDE environment, which is usually too broad.
- **Use All Versions sparingly.** It's useful when you have many ad-hoc versions of the same report; otherwise, prefer pinning a specific Version per row so you know exactly what's being processed.
- **One row per (Report, Version, Template) tuple.** If the same report needs different templates for different versions, add multiple rows.
- **Don't forget to assign a Template.** A row without a template can still match jobs, but the UBL generation will fail to produce a PDF attachment when one is expected.
