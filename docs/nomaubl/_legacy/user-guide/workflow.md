---
title: Invoice Processing Workflow
description: "End-to-end workflow for processing JDE invoices through NomaUBL to the Platform Agréée"
---

## Invoice Processing Workflow

This page describes the complete lifecycle of an invoice from JDE XML output to PA confirmation, including the Oracle database states at each step.

### Full lifecycle diagram

```
JDE UBE job produces XML spool file
              │
              ▼
      ScheduleUBL -run
              │
        ┌─────┴─────────────────────────┐
        │         XSLT Transform         │
        │  JDE XML → UBL 2.1 Invoice     │
        └─────┬─────────────────────────┘
              │
              ▼  Status: 9900 (Created)
        ┌─────┴─────────────────────────┐
        │        UBL Validation          │
        │  XSD + EN16931 + CIUS-FR       │
        └─────┬─────────────────────────┘
              │
       ┌──────┴──────────┐
  Errors?              No errors
       │                  │
       ▼                  ▼
  Status: 9905    Status: 9901 (Validated)
  (Error)         or 9902 (Validated w/ warnings)
                          │
              ┌───────────┴───────────┐
         sendToPA=N               sendToPA=Y
              │                       │
              ▼               ┌───────┴─────────────┐
         (stop here)          │   PPF Directory      │
                              │   Check (non-blocking)│
                              └───────┬─────────────┘
                                      │
                              ┌───────┴──────────────┐
                              │  POST to PA           │
                              │  /api/v1/sale/invoices│
                              │  /import              │
                              └───────┬──────────────┘
                                      │
                             ┌────────┴──────────┐
                         Success               HTTP error
                             │                    │
                             ▼                    ▼
                    Status: 9903          Status: 9904
                    (Sent to PA)          (Error Sent)
                             │
                    UUID stored in F564230
                             │
                             ▼
                    Status: 9906 (Pending)
                             │
                    ┌────────┘  (next -import run)
                    │
              GET /api/v1/sale/invoices/import/{uuid}
                    │
           ┌────────┼─────────────┐
        success   pending       failed
           │         │             │
           ▼         ▼             ▼
    Status: 10    (unchanged)  Status: 9907
    (Deposited)              (Failed Import)
           │
    Subsequent PA updates:
    43 → 45 → 47 → 1 (Approved)
    or 8 (Rejected) / 50 (Refused)
```

### Status transitions in the Oracle tables

At each step, the following tables are updated:

| Step | F564230 | F564231 | F564235 |
| --- | --- | --- | --- |
| Invoice created | UBL XML written to `FETXFT` | Status `9900` inserted | Lifecycle `9900` inserted |
| Validation OK | — | Status `9901` or `9902` | Lifecycle inserted |
| Validation failed | — | Status `9905` | Lifecycle + errors in F564236 |
| Sent to PA | PA UUID stored in `FEUKIDSZ` | Status `9903` | Lifecycle inserted |
| Error sending | — | Status `9904` | Lifecycle inserted |
| Pending PA | — | Status `9906` | — |
| PA success | `invoiceUuid` updated in `FEUKIDSZ` | Status `10` | Lifecycle inserted |
| PA failed | — | Status `9907` + error msg | Lifecycle + errors inserted |

### Setting up a production processing flow

**Step 1 — JDE job triggers processing**

Configure your JDE UBE to call NomaUBL after generating the XML spool:

```bash
java -jar /opt/nomaubl/nomaubl.jar \
  -run /opt/nomaubl/config.properties \
  vrc_pro \
  /path/to/jde/output.xml \
  UBL \
  ${JDE_JOB_NUMBER}
```

**Step 2 — Automate status polling**

Schedule the `-import` command to run regularly to update pending invoices:

```bash
# crontab entry — every 15 minutes
*/15 * * * * java -jar /opt/nomaubl/nomaubl.jar -import /opt/nomaubl/config.properties >> /var/log/nomaubl-import.log 2>&1
```

**Step 3 — Monitor via web interface**

Open `http://your-server:8080` to monitor invoice statuses, check for errors, and manage the configuration.

### Handling errors

#### Validation errors (status 9905)

If validation fails, errors are stored in `F564236`. Possible causes:

- Missing mandatory UBL fields (check your XSLT stylesheet)
- Invalid VAT category code (check `config-lists.properties`)
- Non-conformant amounts or rounding
- Missing SIRET/SIREN in the invoice

Fix the XSLT stylesheet and re-process. Use `UBL_VALIDATE` mode to iterate quickly without sending to the PA.

#### Send errors (status 9904)

If the PA returns an HTTP error:

- Check PA API credentials in `e-invoicing` template
- Verify the PA API URL and endpoints are correct
- Check network connectivity from the NomaUBL server to the PA
- Use mock mode (`paUseMock=true`) to isolate whether the issue is in the UBL or the API call

#### Failed import (status 9907)

The PA accepted the file but rejected the invoice after processing:

- Check the error messages stored in `F564235`
- Common reasons: duplicate invoice number, invalid SIREN, invalid amounts
- Correct the source data in JDE and re-submit (new job number)

### Re-processing an invoice

NomaUBL supports **override mode**: if an invoice with the same document number/type/company already exists in the database, it will be overwritten (existing errors and lifecycle events are cleared before re-processing). This is controlled by the `replaceMode` flag in `UBLDatabaseHandler`.
