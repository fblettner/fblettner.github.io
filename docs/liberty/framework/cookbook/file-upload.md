---
title: File upload
description: "Recipe — let users attach files to a row (contracts, invoices, photos) and serve them back from the same row. Two patterns: store the file in the database, or store a reference and offload to object storage."
keywords: [Liberty Framework, cookbook, file upload, attachment, blob, S3, MinIO, screens]
---

# File upload

## The problem

A row has an associated file — a PDF contract on the customer, a scanned receipt on the expense, a photo on the maintenance order. Operators need to upload it, see it, replace it, download it.

## The pattern

Two storage models, pick one:

| Model | Pro | Con |
|---|---|---|
| **A. Blob in the database** | Single backup, no extra infra, ACID with the row. | Database bloats; not for large files (>10 MB). |
| **B. Reference in the database, file in object storage** (S3, MinIO, Azure Blob, Google Cloud Storage) | Scales. Cheap. Easy to swap. | Two systems to back up. Two systems that can drift. |

A is fine up to maybe a few GB of total files; past that, B.

## Pattern A — blob in the database

### Schema

Add a `BYTEA` (PostgreSQL) / `BLOB` (Oracle, SQLite) column to the table:

```sql
ALTER TABLE customers
  ADD COLUMN contract_pdf      BYTEA,
  ADD COLUMN contract_filename VARCHAR(255),
  ADD COLUMN contract_mime     VARCHAR(64);
```

The metadata columns (filename, MIME type) help when serving the file back.

### Dictionary entry

| Field | Value |
|---|---|
| **Name** | `file_attachment` |
| **Type** | `bytea` *(or `blob`)* |
| **Rule** | `—` |
| **Widget override** | `FileUpload` |

Then on the customers connector's `list` query, add a column hint for `contract_pdf` pointing at `file_attachment`.

### Screen

The dialog renders the field as a **drag-and-drop upload zone**:

- If empty, a "Drop file here or click to browse" zone.
- If populated, a "📎 contract.pdf (412 KB) — Replace / Download / Remove" row.

Save uploads the file as part of the dialog's payload (multipart/form-data); the framework writes the BYTEA on `update`.

### Limits

The framework caps a single upload at the value of `[app] max_upload_size_mb` (default 25 MB). Past that, switch to Pattern B.

## Pattern B — object storage with a reference column

### Schema

Just the references:

```sql
ALTER TABLE customers
  ADD COLUMN contract_s3_key VARCHAR(255),
  ADD COLUMN contract_filename VARCHAR(255);
```

### Object-storage configuration

**Settings → Framework → Storage** (sub-form):

| Field | Value |
|---|---|
| **Provider** | `S3` / `Azure Blob` / `GCS` / `Local filesystem` (development only) |
| **Endpoint** | The bucket endpoint (S3-compatible URL). |
| **Bucket** | The bucket name. |
| **Credentials** | 🔒 access key + secret. |

### Dictionary widget

| Field | Value |
|---|---|
| **Name** | `s3_attachment` |
| **Widget override** | `S3Upload` |
| **Reference column** | `contract_s3_key` |
| **Filename column** | `contract_filename` |

The widget handles:

- The upload (streams directly to S3, doesn't go through the framework — bandwidth-friendly).
- The pre-signed URL on download (the framework never proxies the file).
- The "remove" action that deletes the S3 object + nulls the reference column.

### Permissions

Two permission codes are automatically generated:

| Code | Granted to |
|---|---|
| `storage:read:<bucket>` | Issue a download pre-signed URL. |
| `storage:write:<bucket>` | Issue an upload pre-signed URL. |

Grant them on the relevant roles.

## Multi-file attachments

Both patterns work for one-file-per-row. For multi-file (a customer can have N contracts), follow the [CRM tutorial → Step 3](../tutorial-crm/03-deals.md) sub-grid pattern — make `attachments` a child table joined by `customer_id`, with one row per file.

## Variations

| You want… | Do this |
|---|---|
| **Only PDF / image / etc** | Set the `accept` field on the dictionary widget — `application/pdf`, `image/*`. |
| **Virus scanning before save** | Add a Nomaflow `python` step on the upload event that calls your AV scanner. Reject on hit. |
| **Multi-file drag-and-drop** | Use the sub-grid pattern above; the framework's widget handles bulk upload to the same target. |
| **A thumbnail preview** | Add a `&lt;connector&gt;.thumbnail` query that returns a base64 preview; render it in the grid via a `Image` rule. |

## What's next

- [Concepts → Screens](../build/screens/overview.md) for the dialog field model.
- [Settings UI → Framework](../configuration/app-toml.md) for the *Storage* sub-form.
- [Cookbook → CRUD over an existing table](./crud-existing-table.md) — the surrounding screen pattern.
