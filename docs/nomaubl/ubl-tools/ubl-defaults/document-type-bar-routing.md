---
title: Document Type (BAR Routing)
description: "UBL Defaults — Document Type tab. BAR routing classification (B2B / B2G / B2BINT / B2C / OUTOFSCOPE / ARCHIVEONLY / DOCUMENT) used to dispatch the document inside the Plateforme Agréée."
keywords: [NomaUBL, UBL, defaults, BAR, routing, B2B, B2G, B2BINT, B2C, OUTOFSCOPE, ARCHIVEONLY, DOCUMENT, mapping]
---

# Document Type (BAR Routing)

The **Document Type** tab configures the **BAR routing** classification — a NomaUBL-internal flag that tells the Plateforme Agréée which downstream pipeline the document belongs to. The value derives from a fixed enumeration:

| Value | Meaning |
|---|---|
| `B2B` | Standard business-to-business invoice. Routed through the e-invoicing flow. |
| `B2G` | Business-to-government invoice (public buyer, Chorus Pro pipeline). |
| `B2BINT` | International B2B — partner is outside France / EU. |
| `B2C` | Business-to-consumer. Routed through the e-reporting flow only — no PA delivery. |
| `OUTOFSCOPE` | Document outside the e-invoicing reform scope (e.g. internal billing). |
| `ARCHIVEONLY` | Stored in the archive, not transmitted. |
| `DOCUMENT` | Generic document (non-invoice) routed for reference. |

The override mechanism is described in the [Overview](./overview.md). Default and mapping are independently controlled by the override toggle.

---

## Default document type

| Field | Description |
|---|---|
| **Default** | BAR value used when the source value is missing or has no mapping row. Picked from the fixed enumeration above. The vast majority of installations default to `B2B`. |

The default selector remains visible at the top of the tab in both modes.

---

## Source → BAR mapping

A two-column editor lists each known source classification alongside the BAR value it should resolve to.

| Column | Description |
|---|---|
| **Source code** | Free-form text — the code that appears in the upstream XML (e.g. a JDE customer category, a SAP partner role, a custom routing flag). |
| **BAR value** | One of the seven fixed values above. |

The mapping is the only mechanism for splitting a B2B / B2G / B2C stream emitted by the same template — there is no conditional rule editor on this tab.

### How the mapping resolves

```
source XML routing code
    │
    ├─ has a mapping row? ────► BAR value from the row
    │
    └─ no mapping row?    ────► Default BAR value
```

If the source code is empty or absent, the default is used directly.

---

## Tips & best practices

- **BAR and the [Cadre de facturation](./business-process-type.md) (BT-23) are orthogonal — keep them in sync without conflating them.** BAR carries the *channel* (B2B / B2G / B2C); BT-23 carries the *invoice nature* (goods / services / mixed) and lifecycle stage. A `B2G` document still needs a Cadre code (`B1` / `S1` / `M1`, or `S3` for subcontracting); a `B1` Cadre still needs a BAR (typically `B2B`).
- **`B2C` does not transmit to the PA.** It is registered in the e-reporting flow only. Use it for invoices to private individuals — never for B2B partners not yet subject to the reform.
- **Use `ARCHIVEONLY` for legitimate carve-outs only.** Archiving without transmitting bypasses the regulatory channel. Reserve it for internal documents, test runs or one-off corrections.
- **A spool that mixes B2B and B2C** can resolve via this mapping when the source XML carries a clear classifier. If it does not, *Document Types → runtime args* is the right place to override per-document-type — see the [Document Types page](../../configuration/system/document-types.md).
