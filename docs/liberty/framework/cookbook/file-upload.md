---
title: Files and attachments
description: "Recipe — what Liberty Next offers for files: screens have no attachment field, but a row can carry the address of a document stored elsewhere, a file's rows can be imported into a screen, and a Nomaflow job can load a file chosen at run time."
keywords: [Liberty Next, cookbook, files, attachments, url, link, import, file_load, upload]
---

# Files and attachments

## The problem

A row goes with a file — the signed contract of a customer, the scan of a receipt — or a file holds rows to load into a table.

## What exists

Screens have **no attachment field**: a dialog cannot store a file in a row nor serve it back. Three mechanisms cover the usual needs:

| Need | Mechanism |
|---|---|
| Reach the document of a row | An **address column**: the row stores the document's address in the document store already in place (file share, SharePoint, object storage). |
| Load the rows of an Excel / CSV file into a table, through a screen | The screen's **Import** — see [Bulk import](./bulk-import.md). |
| Load a file into a table, by job | A Nomaflow **`file_load`** step: the file is picked in the **Run with parameters** window, read from a server path, or taken from a watched folder — see [Steps → File load](../../nomaflow/steps.md#file-load). |

## Address of a document

### 1. A column for the address

```sql
ALTER TABLE contracts ADD document_url VARCHAR(500);
```

### 2. Show it

Give the `DOCUMENT_URL` dictionary entry a label and the **url** format (Settings → Dictionary → Entries). The grid and the dialog show the address as text, to copy into the browser — they do not turn it into a clickable link.

### 3. Fill it

Users paste the address in the dialog, or a job fills it — for example a `python` step that files the documents of a folder in the store and writes their addresses into the table (see [Plugins](../apps/plugins.md)).

Access to the document itself is governed by the document store, not by Liberty Next.

## What's next

- [Bulk import](./bulk-import.md) — load a file's rows through a screen.
- [Steps → File load](../../nomaflow/steps.md#file-load) — load a file by job.
- [Dictionary → Formats](../dictionary.md#formats) — the display formats.
