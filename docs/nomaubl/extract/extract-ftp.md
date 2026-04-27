---
title: Extract FTP
description: "Browse a remote SFTP server and download a file to a local directory on the NomaUBL server — uses the SFTP credentials configured in FTP Connectors."
keywords: [NomaUBL, SFTP, FTP, extract, browse, download, JD Edwards, SAP, NetSuite, custom ERP, server-side download, file browser, dirInput]
---

# Extract FTP

The **Extract FTP** screen browses a remote SFTP server and downloads a selected file to a directory on the local NomaUBL server. The connection credentials are read from *FTP Connectors → SFTP Server*; this page only handles browsing and download.

The page works regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP — as long as the source files are reachable on an SFTP server.

---

## FTP Browser

The screen is a single section combining a server-side file browser, the local output directory and the download button.

### Path bar

The bar at the top of the file list shows the current SFTP path. On the initial load the path is empty (root of the `Directory` configured in *FTP Connectors*). The `..` button navigates one level up.

### File list

One row per entry. Folders are styled in the accent colour with a folder icon — clicking a folder opens its contents. Files use the XML icon and display their size in B / KB / MB — clicking a file selects it. An empty directory shows a `No files found` placeholder row.

### Form

| Field | Description |
|---|---|
| **Selected** | Read-only preview of the SFTP path of the currently selected file. Shown once a file is selected. |
| **Output Directory** | Local path on the NomaUBL server where the file will be written. Pre-filled from `global.dirInput` with all placeholders (`%APP_HOME%`, `%ENV%`, `%PROCESS_HOME%`) resolved and `%TEMPLATE%` removed. Editable. |
| **Download** | Triggers the SFTP fetch. The button activates once a file is selected and the output directory is filled. |

---

## Result

After the download, the **Result** section displays the success or error message returned by the API. The section appears once a download has been attempted.

---

## Tips & best practices

- **The starting directory is the `Directory` defined in *FTP Connectors → SFTP Server*.** Navigation above that root is allowed; the directories accessible above it depend on the SFTP user's home configuration on the server.
- **The output directory accepts any absolute path** — the resolved default value can be edited manually before download.
- **The page downloads one file at a time.** For batch downloads, use *Sync → Fetch Input*, which iterates the SFTP directory according to the configured rules.
- **The file keeps its remote name** on the local side — there is no rename option here. Rename it locally afterwards if a different name is needed.
