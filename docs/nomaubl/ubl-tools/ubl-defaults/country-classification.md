---
title: Country & Classification
description: "UBL Defaults — Country & Classification tab. Sets the source-side format for the line country of origin (BT-159) and the fallback classification code, scheme listID and version (BT-158)."
keywords: [NomaUBL, UBL, defaults, BT-158, BT-159, country of origin, commodity classification, scheme, listID, ISO 3166, per-line]
---

# Country & Classification

The **Country & Classification** tab configures the line-level **country of origin** (`BT-159`) and **commodity classification** (`BT-158`). It tells the framework how the source XML expresses the country of a line, and it holds the fallback classification metadata (code, scheme listID, version) used when the per-line path is empty.

The override mechanism is described in the [Overview](./overview.md). Country format and classification fallbacks are independently controlled by the override toggle.

---

## Country of origin (BT-159)

The **Country format** dropdown declares how the source XML expresses the country of origin on each invoice line — the framework then resolves that raw source value against the canonical [countries reference list](../../configuration/reference-lists.md) at save time and writes the ISO 3166-1 alpha-2 code into the UBL invoice.

| Field | Description |
|---|---|
| **Country format** | The shape of the source value on each line — `ISO code` (the source already carries `FR`, `DE`, …), `French description` (`France`, `Allemagne`, …) or `English description` (`France`, `Germany`, …). |

Because the resolution runs against the shared list, no parallel mapping table has to be maintained here — if a label is wrong, correct it once in the countries reference list and every deployment picks it up.

The per-line source path itself is mapped in the [XSL editor](../xsl-editor.md) *Invoice Lines* section, alongside the classification code path.

---

## Classification fallbacks (BT-158)

Three fallback fields kick in when a line's per-line classification path returns empty. They keep the classification group well-formed even on lines where the source doesn't carry the metadata.

| Field | Description |
|---|---|
| **Default classification code** | The commodity classification code emitted on lines where the per-line path is empty. Free text — must belong to the scheme identified below. |
| **Scheme listID** | The identifier of the classification scheme (e.g. `HS`, `UNSPSC`, `CN`, …). Appears as `listID="…"` on the UBL element. |
| **Version** | The version of the scheme, when the platform requires it. Appears in brackets after the listID wherever the classification is shown (invoice detail, PDF). |

When the per-line path resolves to a value, the line's own code takes precedence and the fallback stays out of the way.

---

## How resolution runs at save time

```
source XML line
    │
    ├─ Country path resolves? ─► parse using Country format ─► ISO 3166 from the countries list
    │
    └─ Country path empty?    ─► no country emitted on the line

source XML line
    │
    ├─ Classification path resolves? ─► emit line code with the line's listID + version
    │
    └─ Classification path empty?    ─► emit the Default code + Scheme listID + Version defined here
```

Both resolutions happen at save time, so a corrected country label or a fixed listID takes effect on the very next invoice — no re-map, no template re-save.

---

## Tips & best practices

- **Pick the format that matches the source spool once.** Every line reads it the same way; a per-line format switch belongs in a per-document override, not here.
- **Populate the countries reference list first.** A misspelled label there gives the same missed match on every line — correcting the reference list is a single-point fix.
- **The classification fallback is a safety net, not a default classification for the invoice.** If most lines carry the code, keep it empty here — a wrong fallback pollutes every line that doesn't map.
- **The `Version` field is optional.** Leave it empty for schemes that don't version (`HS`, `CN`); set it for `UNSPSC` when the receiving platform pins a version.
