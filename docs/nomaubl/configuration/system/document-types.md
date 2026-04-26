---
title: Document Types
description: "Configure the seven NomaUBL document type codes that anchor the French e-invoicing / e-reporting reform: per-type description, default selection, send-to-PA policy, output mode and file-retention flags."
keywords: [NomaUBL, document types, B2B, B2G, B2C, B2BINT, OUTOFSCOPE, ARCHIVEONLY, e-invoicing, e-reporting, Chorus Pro, réforme facture électronique, JD Edwards, SAP, NetSuite]
---

# Document Types

The **Document Types** editor pins down the seven document-type codes used throughout NomaUBL to drive the **French e-invoicing / e-reporting reform**.

## How the page is used

When NomaUBL processes an input spool, it normally applies the **runtime arguments** passed to the job (`Send to PA`, `Mode`, `Keep UBL`, etc.). This page lets you **override those runtime defaults per document type code** that NomaUBL detects inside the spool.

This matters because **a single spool can mix several document types**. A typical example: a spool contains one **B2B** invoice and one **B2C** invoice. Without per-type overrides, both would inherit the same runtime args; with this page you can — for example — force the B2B invoice to be sent to the PA while keeping the B2C invoice local for e-reporting only.

The seven codes themselves are fixed by the regulation; you cannot add or rename them. What you can configure here is the **policy applied to each code** when it appears in a spool.

This page applies to documents from any source system — JD Edwards, SAP, NetSuite, custom ERP — once the source is mapped to UBL.

---

## The seven document type codes

| Code | Regulatory meaning |
|---|---|
| **B2B** | Subject to **e-invoicing**. |
| **B2G** | Subject to **e-invoicing — public sector** (Chorus Pro). |
| **B2BINT** | Subject to **e-reporting** of international B2B sales. |
| **B2C** | Subject to **e-reporting — B2C sales**. |
| **OUTOFSCOPE** | Out of scope of the French e-invoicing reform. |
| **ARCHIVEONLY** | Internal credit note (cancellation REJECTED/REFUSED) — no flux 1, no transmission (regulatory rule **BR-FR-20**). |
| **DOCUMENT** | Non-invoicing document. |

---

## Per-row settings

Each of the seven codes is one row in the editor. The **Code** column is read-only (the codes are fixed by the regulation); every other column is editable and acts as an **override of the corresponding runtime argument** for documents carrying this code.

| Column | Values | Description |
|---|---|---|
| **Code** | fixed | One of the seven regulatory codes above. Read-only. Hover the code to see the regulatory hint. |
| **Description** | text | Free-text label shown in document templates and UI. Defaults to the regulatory description above. |
| **Default** | checkbox | When ticked, this code is **pre-selected** in newly created document templates. **Only one row can be the default at a time** — ticking another row automatically un-ticks the previous one. |
| **Send to PA** | `Y` / `N` / `F` | Per-type override of the runtime *send to Plateforme Agréée* argument: `Y` = send; `N` = do not send; `F` = **force send** even when the runtime argument says skip. Default: `Y` for B2B, `N` for every other code. |
| **GS** | checkbox | When ticked, runs **Ghostscript** post-processing on the produced PDF for this type (e.g. compression / linearisation), regardless of the runtime argument. Off by default. |
| **Mode** | *(default)* / `UBL` / `BURST` | Per-type override of the runtime *Mode* argument: empty = **no override** (the runtime mode is kept); `UBL` = force UBL-only output for this type; `BURST` = force bursted output for this type. |
| **UBL** | checkbox | When ticked, keeps the generated **UBL file** in the bursting output directory after processing for this type. Default: `Y` (kept). |
| **PDF** | checkbox | When ticked, keeps the generated **PDF file** in the bursting output directory after processing for this type. Default: `N` (not kept). |

---

## Tips & best practices

- **Think of every column except Code/Description/Default as an override of a runtime argument.** Leave a value empty / unchecked when no override is needed and let the runtime argument win.
- **Set one Default code that matches your dominant flow.** Most setups make `B2B` the default — ticking it pre-selects B2B in every new document template, saving repeated clicks.
- **Use `F` (Force send) sparingly.** It overrides the runtime *Send to PA* argument and can cause invoices to be transmitted in environments where you intended to stay offline.
- **`ARCHIVEONLY` must never reach the PA.** It exists for internally-cancelled credit notes (rule BR-FR-20); leave Send to PA at `N`.
- **`OUTOFSCOPE` is for documents the reform does not apply to.** Keep them in NomaUBL for traceability but do not send them to a PA.
- **Keep PDF off by default** unless downstream tooling consumes the bursted PDF — keeping it inflates the bursting directory and slows down housekeeping.
- **Run Ghostscript only when needed.** Enabling GS adds a post-processing step on every document of the type and can be a significant overhead on large spools.
