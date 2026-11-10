---
title: Allowances / Charges
description: "NomaUBL UBL Defaults — Allowances / Charges tab: default reason code picked from the UNTDID 5189 (allowances) and 7161 (charges) lists, default reason text, and mapping of source codes to UBL codes, for document and line allowances and charges."
keywords: [NomaUBL, UBL, defaults, allowances, charges, reason code, UNTDID 5189, UNTDID 7161, BT-97, BT-98, BT-104, BT-105, ChargeIndicator, JD Edwards, SAP, NetSuite, custom ERP]
---

# Allowances / Charges

The **Allowances / Charges** tab sets how NomaUBL fills the **reason code** and the **reason text** of the allowances and charges, at document level (BG-20 / BG-21) and at line level (BG-27 / BG-28): source codes converted to the UNTDID 5189 / 7161 codes, a default code when the source has none, and the label of the list when the source gives no text. It works the same whatever the source system — JD Edwards, SAP, NetSuite or a custom ERP.

The override mechanism (shared defaults, or an override for one document) is described in the [Overview](./overview.md).

---

## Two blocks

| Block | Direction | Code / text |
|---|---|---|
| **Allowance (ChargeIndicator = false)** | Money off | BT-98 / BT-140 (code), BT-97 / BT-139 (text) |
| **Charge (ChargeIndicator = true)** | Money on | BT-105 / BT-145 (code), BT-104 / BT-144 (text) |

Each block has the same fields:

| Field | Description |
|---|---|
| **Reason code** | Default code, picked from the list — allowance reasons (UNTDID 5189) or charge reasons (UNTDID 7161), shown with their label. Used when the source gives no code. Picking a code fills **Reason text** with its label, unless a text was already typed. |
| **Reason text** | Default text, used with the default code (or when there is no code at all). |
| **Source code mapping** | Table **External code** → **UBL code**: converts a code of the source system into a code of the list. A source code absent from the table goes through unchanged. |

The two lists are delivered with NomaUBL in French and English (*list-allowance-reasons*, *list-charge-reasons*) and appear in the *Custom data* area of the Settings.

---

## How the code and the text are chosen

For each allowance or charge, at document level or line level:

| | Rule |
|---|---|
| **Code** | No code in the source → the default code. Otherwise the source code, converted by the mapping when it is listed there. |
| **Text** | 1. The source text. 2. Otherwise the default text, when the code is the default code or there is no code. 3. Otherwise the label of the code in the list (French label). |

The direction comes from the *Charge indicator* of the mapping: the charge block applies to charges, the allowance block to allowances. The mapping of the allowances and charges themselves — document-level section *Document Allowances/Charges* and line-level section *Line Allowances/Charges* — is described on the [XSL editor](../xsl-editor.md#variable-mapping) page.

---

## Tips & best practices

- **Map the source codes rather than the texts.** A source system usually carries its own discount or fee codes: one mapping line per code gives a valid UNTDID code and, through the list, a readable reason.
- **Set a default code for each direction in use.** Without a code or a text, an allowance or charge fails the EN 16931 rules on reasons.
- **Keep the default text consistent with the default code.** The text is used with that code only; for any other code the label of the list applies.
- **A per-document override is rarely necessary.** Reserve it for a document whose source uses its own codes.
