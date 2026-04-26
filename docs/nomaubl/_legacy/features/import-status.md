---
title: Import Status Polling
description: "How NomaUBL polls the Platform Agréée for pending invoice status updates"
---

## Import Status Polling

After submitting invoices to the Platform Agréée, NomaUBL tracks the PA's internal processing asynchronously. The `-import` command (and the **Retrieve Statuses** web page) poll the PA to retrieve the final import decision and subsequent lifecycle events.

### Overview

When an invoice is submitted:

1. The PA returns a **transaction UUID** immediately (`status: pending`)
2. The PA processes the invoice asynchronously (typically within seconds to minutes)
3. NomaUBL polls `GET {paApiImportEndpoint}/{uuid}` to retrieve the final result
4. Once the PA returns `status: success`, the invoice is marked **Deposited** (code `10`)

### Running the import poller

**From the CLI:**

```bash
java -jar nomaubl.jar -import config.properties
```

**From the web interface:** open **Retrieve Statuses** and click the **Retrieve** button.

**Automated (recommended):** schedule as a cron job:

```bash
*/15 * * * * java -jar /opt/nomaubl/nomaubl.jar -import /opt/nomaubl/config.properties
```

### What the poller does

`ImportStatusHandler` executes the following steps:

1. Queries `F564231` for all invoices with status code `9906` (Pending)
2. For each invoice, reads the PA transaction UUID from `F564230.FEUKIDSZ`
3. Calls `PAImportStatusClient` to GET the current status from the PA
4. Updates the Oracle tables based on the response:

```java
// Simplified logic
ImportStatusResult result = paImportStatusClient.getStatus(uuid);

switch (result.status()) {
    case "success":
        // Update FEUKIDSZ with invoiceUuid
        // Set F564231 status → 10 (Deposited)
        InvoiceStatusCatalog.deposited().apply(dbHandler);
        break;

    case "pending":
        // No change — will be re-checked next run
        break;

    case "failed":
        // Set F564231 status → 9907
        // Store error messages in F564235
        InvoiceStatusCatalog.failedImport(errorsString).apply(dbHandler);
        break;

    default:
        // Set F564231 status → 9904 (Error Sent)
        InvoiceStatusCatalog.errorSent().apply(dbHandler);
        break;
}
```

### PA response format

```json
// Success
{
  "uuid": "5edf1234-abcd-...",
  "status": "success",
  "errors": [],
  "invoiceUuid": "4edf5678-wxyz-..."
}

// Still pending
{
  "uuid": "5edf1234-abcd-...",
  "status": "pending",
  "errors": [],
  "invoiceUuid": null
}

// Failed
{
  "uuid": "5edf1234-abcd-...",
  "status": "failed",
  "errors": [
    "Duplicate Invoice: invoice INV-2025-001 already registered",
    "Invalid SIREN: 123456789"
  ],
  "invoiceUuid": null
}
```

### UUID fields in F564230

| Field | Content | Set when |
| --- | --- | --- |
| `FEUKIDSZ` (first write) | PA transaction UUID from `POST /import` | Invoice submitted (status 9903) |
| `FEUKIDSZ` (update) | PA invoice UUID from `GET /import/{uuid}` | PA returns `success` (status 10) |

On a `success` response, `FEUKIDSZ` is overwritten with `invoiceUuid` (the PA's definitive identifier for the accepted invoice). This is the UUID to use for subsequent status queries (PA lifecycle events).

### Subsequent PA lifecycle events

After the invoice reaches status `10` (Deposited), the PA sends further lifecycle updates as the invoice moves through the buyer's workflow:

| Code | Status | Meaning |
| --- | --- | --- |
| `43` | Received | Buyer's PA received the invoice |
| `45` | Under Processing | Buyer is processing the invoice |
| `47` | Payment Processed | Payment has been transmitted |
| `1` | Approved | Buyer approved the invoice |
| `8` | Rejected | Buyer rejected the invoice |
| `46` | Disputed | Invoice is in dispute |
| `50` | Refused | Definitively refused |

These updates are polled from `InvoiceStatusesClient` and stored in `F564231` (current status) and `F564235` (lifecycle history).

### Monitoring pending invoices

Use the **Invoice List** page in the web interface, filtered by status `9906` (Pending), to see all invoices awaiting PA confirmation. If an invoice has been pending for more than a few hours, check:

- PA API connectivity (try the **E-Directory** lookup as a connectivity test)
- Whether the PA UUID in `FEUKIDSZ` is valid
- PA platform status for outages
