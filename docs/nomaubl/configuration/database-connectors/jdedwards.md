---
title: JD Edwards
description: "Configure the access to the JD Edwards database NomaUBL reads from when extracting BIP outputs: JDBC URL, credentials, schema, BIP table names and post-extraction record handling."
keywords: [NomaUBL, JD Edwards, JDE, database, JDBC, Oracle, BIP, BI Publisher, F95630, F95631, F9563110, BLOB, extraction, XDJOBNBR, RJJOBNBR]
---

# JD Edwards

This screen configures the access to the **JD Edwards database** NomaUBL reads from when extracting **BIP (BI Publisher) outputs** — both the XML data BLOBs and the rendered PDFs. It defines the JDBC connection, credentials, target schema, and the three JDE BIP tables NomaUBL traverses to recover a job's payload.

:::info[JD Edwards-specific page]
This is one of the **JDE-specific** parts of NomaUBL. Other Configuration pages are source-agnostic (JDE, SAP, NetSuite, custom ERP); this one only applies when the source is JD Edwards.
:::

The editor has **two tabs**:

1. **Connection** — JDBC URL, credentials, post-extraction record handling.
2. **Tables** — schema and the three JDE BIP tables.

---

## Tab 1 — Connection

### Connection

| Field | Description |
|---|---|
| **JDBC URL** | Oracle JDBC connection string for the JDE database (e.g. `jdbc:oracle:thin:@dbserver:1521/jde92t`). Format: `jdbc:oracle:thin:@host:port/service_name`. |

### Credentials

| Field | Description |
|---|---|
| **DB User** | JDE database account name with `SELECT` (and `DELETE` / `UPDATE` if Remove RD is set accordingly) on the BIP tables. |
| **DB Password** | Password for the DB account. |

### BIP Extraction

What NomaUBL does with the BIP **report-definition record** after a successful extraction.

| Field | Values | Description |
|---|---|---|
| **Remove RD** | `NO` / `REMOVE` / `UPDATE` | `NO` = leave the record untouched; `REMOVE` = delete the record from `F9563110`; `UPDATE` = write the rendered PDF back into the BLOB column (PDF only). |

Pick `NO` while validating an integration, switch to `REMOVE` once you trust the pipeline (keeps the queue clean), and use `UPDATE` only when downstream JDE consumers expect to find the rendered PDF in the BLOB.

---

## Tab 2 — Tables

### Schema

| Field | Description |
|---|---|
| **Schema SY** | JDE *System* schema where the three BIP tables live (e.g. `SY920`). All table names below are resolved within this schema. |

### Table Names

NomaUBL only needs read access to three JDE BIP tables to recover a job's full output. Defaults follow the JDE naming convention.

| Field | Default | Role |
|---|---|---|
| **F95630 – XMLP Data Output Repository** | `F95630` | Holds the **XML BLOBs** (`xdrpdubblb`). Acts as the join key for PDF retrieval. Job key column: `XDJOBNBR`. |
| **F95631 – XMLP Output Repository** | `F95631` | Holds the **PDF BLOBs** (`xorpdxpblb`). Joined to `F95630` on the output-GUID columns. |
| **F9563110 – Report Definition Job Control** | `F9563110` | Tracks the BIP report job request. Deleted by NomaUBL when **Remove RD = `REMOVE`**. Job key column: `RJJOBNBR`. |

The traversal is straightforward: NomaUBL identifies the candidate jobs in `F9563110`, picks the matching XML BLOB in `F95630`, and joins to `F95631` on the output GUID to fetch the PDF.

---

## Tips & best practices

- **Keep the BIP user separate from a regular JDE business account.** A dedicated DB account makes audit and revocation easier.
- **Grant the smallest set of privileges that matches the chosen Remove RD.** `SELECT` only is enough for `NO`; add `DELETE` for `REMOVE`; add `UPDATE` for `UPDATE`.
- **Validate the JDBC URL with a SQL client before saving.** Connection-string typos are the most common reason the connector fails to authenticate.
- **Override the table names only if your JDE deployment renamed them.** Stock JDE always uses `F95630` / `F95631` / `F9563110`; any deviation reflects a custom JDE setup.
- **Use `Remove RD = REMOVE` in production.** Leaving processed jobs in `F9563110` indefinitely bloats the queue and slows down subsequent BIP scans.
