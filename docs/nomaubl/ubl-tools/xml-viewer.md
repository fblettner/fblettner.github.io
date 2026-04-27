---
title: XML Viewer
description: "Open any XML file — local or server-side — in a Monaco editor with syntax highlighting, pretty-print, line numbers and save-to-server. The lightweight companion to the validator and the XSL Editor."
keywords: [NomaUBL, XML, viewer, editor, Monaco, format, pretty-print, JD Edwards, SAP, NetSuite, custom ERP, UBL, source spool, BIP]
---

# XML Viewer

The **XML Viewer** opens any `.xml` file — either picked from the local computer or from a path on the NomaUBL server — in a full **Monaco editor** with XML syntax highlighting, line numbers, minimap and pretty-print. The buffer can be edited inline and written back to a server-side path.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. It is a generic editor for any XML the platform handles: UBL documents, raw source spools, BIP data XMLs, validation reports, configuration extracts.

The viewer does no validation, no transformation and no submission — it is a deliberately lightweight tool, complementary to the more specialised screens:

- For **transforming** a source XML into UBL: *UBL Tools → XSL Editor*.
- For **validating** a UBL or source XML: *UBL Tools → Validate*.
- For **inspecting an archived invoice** by document key: *Extract → Extract Archive*.

---

## Toolbar

| Element | Description |
|---|---|
| **Load from computer** | Opens the operating-system file picker. Reads the selected `.xml` file in the browser, pretty-prints it and loads it into the editor. The server path field is pre-filled with the local filename so a subsequent **Save to server** writes the file under that name. |
| **Load from server** | Opens a server-side file browser. The selected file is read via the API and loaded into the editor; the server path field is set to the absolute path so **Save to server** writes the file back in place. |
| **Server path** | Editable absolute path used by **Save to server**. Pre-filled by the two load actions; can be edited freely before saving — convenient for a *Save As* effect. |
| **Format** | Pretty-prints the current buffer (re-indent, line breaks). Active once a file is loaded. |
| **Save to server** | Writes the current buffer to **Server path** via the API. Active once a file is loaded and the path is filled. |

---

## Editor area

When a file is loaded, the editor takes the rest of the page. It uses the same Monaco engine and theme as the *XSL Editor*:

- XML syntax highlighting and bracket matching
- Line numbers, minimap, dark theme
- `tabSize: 2`, `wordWrap: 'off'`, format-on-paste enabled

When no file is loaded, an **empty state** placeholder is shown instead — clicking it triggers the local file picker (same effect as **Load from computer**).

---

## Status messages

Inline feedback at the top of the editor area auto-refreshes after each action:

- `Loaded: <name>` (info, blue) when a file is loaded.
- `Saved to: <path>` (success, green) on a successful save.
- The error message returned by the API on a load or save failure (red).

---

## Tips & best practices

- **Use Format after pasting.** Format-on-paste handles inline edits, but for an XML that arrived collapsed on one line, the **Format** button restores readability.
- **Edit the Server path field before saving** to write the file to a different location — a built-in *Save As*.
- **The viewer never overwrites silently except on Save.** Loading a different file replaces the buffer with no on-disk change; only **Save to server** persists.
- **For repeatable transformations, prefer the XSL Editor.** Hand-editing XML produces a one-off result; the XSL Editor lets the same mapping run on every future invoice.
- **For validation, prefer the Validate screen.** The viewer never runs XSD or Schematron — it just shows the raw XML.
