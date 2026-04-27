---
title: Extract Archive
description: "Extract an archived invoice document from the NomaUBL database back to disk — original source XML (F564230) or generated UBL 2.1 (F564231) — by document key (FEDOC / FEDCT / FEKCO)."
keywords: [NomaUBL, extract, archive, invoice, XML, UBL, F564230, F564231, FEDOC, FEDCT, FEKCO, JD Edwards, SAP, NetSuite, source XML, generated UBL]
---

# Extract Archive

The **Extract Archive** screen reads an archived invoice from the NomaUBL database and writes the document file back to a directory on disk. Two flavours are supported:

- **Source XML** — the original ingestion payload captured at the time the invoice entered NomaUBL, stored in table `F564230`.
- **Generated UBL 2.1** — the EN 16931 UBL document that NomaUBL produced from the source, stored in table `F564231`.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP — because the archive layer is part of NomaUBL itself. The document keys (`FEDOC` / `FEDCT` / `FEKCO`) keep their JDE-flavoured names by historical convention; functionally, they are generic identifiers that index any archived document.

---

## Database Query Parameters

A single form drives the extraction.

| Field | Description |
|---|---|
| **Template** | Document template (e.g. `invoices`, `credit_notes`). Used only to resolve the `%TEMPLATE%` placeholder of the default output directory inherited from `global.dirInput`. |
| **Source** | `XML — JDE Source (F564230)` extracts the original source XML stored at ingestion. `UBL — Generated UBL 2.1 (F564231)` extracts the UBL document NomaUBL produced from it. |
| **FEDOC** | Document number — primary key of the archived document. |
| **FEDCT** | Document type (e.g. `RI`, `RN`). |
| **FEKCO** | Company code (e.g. `00070`). |
| **Output Directory** | Absolute server-side path where the file will be written. Pre-filled from `global.dirInput` with `%TEMPLATE%` substituted; editable directly or via the **folder** button which opens a server-side directory browser. |
| **Output File** | Read-only preview of the resulting file path (see naming convention below). |

Click **Extract XML** to run the extraction. The button stays disabled until all three keys (`FEDOC`, `FEDCT`, `FEKCO`) and the output directory are filled.

---

## Output file naming

The file name is built deterministically from the document keys and the selected source:

| Source | Output file |
|---|---|
| `XML` (source) | `<FEDOC>_<FEDCT>_<FEKCO>.xml` |
| `UBL` (generated) | `<FEDOC>_<FEDCT>_<FEKCO>_ubl.xml` |

The `_ubl` suffix lets both flavours coexist in the same directory without overwriting each other.

---

## Result

After the extraction completes, the **Extraction Result** section displays:

- A green **Extraction successful** message — or the error returned by the API on failure.
- The detail message returned by the server (typically the absolute path of the file written).

---

## Tips & best practices

- **Use Source = UBL to recover the document NomaUBL emitted** — useful for a side-by-side comparison with PA-side feedback, or to re-validate an already-archived UBL without re-generating it.
- **Use Source = XML to inspect the original ingestion payload** without going back to the upstream system.
- **The Template only drives the default output path.** When the manual path already points to the right directory, leave Template empty.
- **An existing file with the same name is overwritten silently.** When extracting in batch from a script that calls the API, name the output directory accordingly.
- **The folder browser respects `%APP_HOME%` and `%PROCESS_HOME%` placeholders.** Pasting a path that uses one of those in the field above is supported; the API resolves them server-side before writing.
