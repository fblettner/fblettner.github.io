---
title: Extract BIP
description: "Extract a BIP (BI Publisher) job's payload from the JD Edwards Print Queue — input XML (F95630) or rendered output (F95631) or both — to a directory on the NomaUBL server."
keywords: [NomaUBL, BIP, BI Publisher, JD Edwards, JDE, extract, F9563110, F95630, F95631, Print Queue, RJJOBNBR, XDJOBNBR, XML, PDF]
---

# Extract BIP

The **Extract BIP** screen extracts the payload of a single **BI Publisher (BIP) Print Queue** job from a JD Edwards database to a directory on the NomaUBL server. The payload comes from the three BIP tables configured in *Database Connectors → JD Edwards*:

- `F9563110` — Report Definition Job Control (the job index, keyed by `RJJOBNBR`).
- `F95630` — XMLP Data Output Repository (the **input XML** BLOBs).
- `F95631` — XMLP Output Repository (the **rendered output** BLOBs — typically PDF).

:::info[Page spécifique à JD Edwards]
This page is part of the **JDE-specific** components of NomaUBL. Other Extract pages are source-agnostic; this one only applies when the source is JD Edwards and the BIP Print Queue is the extraction channel.
:::

The screen is split into two sections: **Parameters** and **Output**.

---

## Parameters

| Field | Description |
|---|---|
| **Template** | Document template (e.g. `vrc_pro`, `isc_facture`). Used only to resolve the `%TEMPLATE%` placeholder of the default output directory inherited from `global.dirInput`. |
| **Job Number** | JDE BIP job number (`RJJOBNBR` in `F9563110` / `XDJOBNBR` in `F95630`). Required. |
| **Language** | Optional BIP language code filter (e.g. `FR`). When set, only the outputs matching this language are extracted. |
| **Extract Mode** | What to extract from the job — `Extract Input (XML)`, `Extract Output`, or `Extract Both`. See below. |

### Extract modes

| Mode | Source table | Content |
|---|---|---|
| **Extract Input (XML)** | `F95630` | The data XML fed to BI Publisher to render the report. Useful for re-running the BIP job locally or for transforming the data via a custom XSL. |
| **Extract Output** | `F95631` | The rendered output BLOBs — typically PDF, but XLS / HTML / RTF / ETEXT are also supported by BIP and extracted as-is. |
| **Extract Both** | `F95630` + `F95631` | Both halves at once. |

---

## Output

| Field | Description |
|---|---|
| **Output Directory** | Local path on the NomaUBL server where the extracted files will be written. Pre-filled from `global.dirInput` with `%TEMPLATE%` substituted; editable directly or via the **folder** button which opens a server-side directory browser. |
| **Extract** | Triggers the extraction. The button activates once both the job number and the output directory are filled. |

The file naming convention is driven by the JDE report metadata — typically `<report>_<version>_<job>.<ext>` (e.g. `R42565_XJDE0001_123456.xml`). When *Extract Both* is selected, the `.xml` and the rendered output share the same base name, so they sit next to each other in the output directory.

---

## Result

After the extraction completes, the **Result** section displays:

- A green **Extraction successful** message — or the error returned by the API on failure.
- The detail message returned by the server (typically the absolute paths of the files written).

---

## Tips & best practices

- **The connection settings come from *Database Connectors → JD Edwards*.** The schema and the three table names (`F95630` / `F95631` / `F9563110`) are configured there; no override is possible on this screen.
- **Use *Extract Input (XML)* when iterating on an XSL template.** The BIP data XML is exactly what the rendering engine consumes — feeding it into a local BIP or NomaUBL pipeline reproduces the report deterministically.
- **Use *Extract Output* when the rendered PDF is the deliverable.** This is the typical path for archival or e-mail distribution flows that consume the PDF directly.
- **The Language filter only narrows the output side.** When *Extract Mode* is set to *Extract Input (XML)*, the language has no effect — the data XML is language-agnostic.
- **For batch extraction across many jobs**, use *Sync → Fetch Input* with the BIP source, which discovers new jobs and applies the same extraction modes per template.
- **Keep the output directory dedicated.** Files are written under their JDE-derived names; an existing file with the same name is overwritten without warning.
