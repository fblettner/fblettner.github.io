---
title: Statuses
description: "Define the invoice lifecycle statuses NomaUBL recognises: regulatory code, internal Tag, bilingual labels, the event name expected by the Plateforme Agréée and which statuses to poll back from the PA."
keywords: [NomaUBL, statuses, invoice lifecycle, e-invoicing, e-reporting, Plateforme Agréée, status code, InvoiceStatusCatalog, polling, JD Edwards, SAP, NetSuite]
---

# Statuses

The **Statuses** editor defines the **lifecycle statuses** an invoice can take in NomaUBL. These statuses are driven by the French e-invoicing regulation (e.g. `200` = *Déposée*, `205` = *Paiement reçu*, `9906` = *En cours de traitement*…) and are the same codes referenced in the **E-Invoicing → Actions** tab and in the **invoice detail modal**.

Each row binds a regulatory code to:

- the **internal Tag** used in NomaUBL's Java codebase (`InvoiceStatusCatalog` constant),
- the **bilingual labels** displayed in the UI,
- the **PA Code** (event name expected by the Plateforme Agréée when calling its API),
- a **Collect** flag controlling whether the status is polled back from the PA.

This page applies to documents from any source system — JD Edwards, SAP, NetSuite, custom ERP — once the source is mapped to UBL.

---

## Per-row fields

| Column | Example | Description |
|---|---|---|
| **Code** | `200` | Regulatory status code stored in the database (`tableHeader`). It is the canonical identifier of the status across NomaUBL. |
| **Tag** | `STATUS_DEPOSITED` | Internal name used by NomaUBL's Java code (constant in `InvoiceStatusCatalog`). Used by application logic to reference the status without depending on the numeric Code. |
| **Label FR** | `Déposée` | Human-readable French label shown in the UI when the locale is French. |
| **Label EN** | `Deposited` | Human-readable English label shown in the UI when the locale is English. |
| **PA Code** | `fr_e_invoicing_200` | Event name sent to the Plateforme Agréée API — placed in the `names[]` payload of status calls. Must match what the PA expects exactly. |
| **Collect** | checkbox | When ticked, NomaUBL **polls this status from the PA API** (during the lifecycle-status retrieval cycle configured under *E-Invoicing → PA Connection → Status Retrieval*). Untick to ignore a status during polling. |

Use the **+ Add status** button to add a row and the **×** button to remove one.

---

## How the fields are wired together

- The **Code** is the source of truth in the database.
- The **Tag** is what application code consumes; updating it requires keeping the corresponding `InvoiceStatusCatalog` Java constant in sync.
- **Label FR / Label EN** drive the UI text — adding a new locale would mean extending the schema, not just adding text here.
- The **PA Code** is the contract with the Plateforme Agréée. If the PA renames an event, only update the `paCode` here — application code keeps using the stable Tag.
- **Collect** decides which statuses arrive in NomaUBL via the polling loop. Statuses that are only set locally (e.g. internal validation results) usually have Collect off.

---

## Tips & best practices

- **Keep Codes aligned with the regulation.** They are the lingua franca between NomaUBL, the PA, and any downstream tooling — do not invent custom Codes.
- **Treat Tags as a stable internal contract.** If you must rename a Tag, also update the matching `InvoiceStatusCatalog` constant in the Java codebase to avoid runtime lookups failing.
- **Match PA Codes exactly to your PA's catalog.** A typo in `fr_e_invoicing_xxx` produces silent integration failures (the PA rejects unknown event names).
- **Tick Collect only on statuses the PA actually emits.** Polling for unsupported statuses wastes API calls and can pollute logs with empty results.
- **Bilingual labels are not optional.** Both Label FR and Label EN should be filled — the UI falls back to the Code when the active locale's label is empty, which is unhelpful.
