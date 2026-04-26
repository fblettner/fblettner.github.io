---
title: FTP Connectors
description: "Configure SFTP access to the JD Edwards Enterprise Server so NomaUBL can pull spool files directly from the JDE PrintQueue."
keywords: [NomaUBL, FTP, SFTP, JD Edwards, JDE, Enterprise Server, PrintQueue, spool, extraction]
---

# FTP Connectors

This screen configures the **SFTP access to the JD Edwards Enterprise Server** so NomaUBL can pull **spool files directly from the JDE PrintQueue**. It is the file-system path used as an alternative — or complement — to the BIP database extraction defined in *Database Connectors → JD Edwards*.

:::info[JD Edwards-specific page]
This is one of the **JDE-specific** parts of NomaUBL. Other Configuration pages are source-agnostic (JDE, SAP, NetSuite, custom ERP); this one only applies when the source is JD Edwards and the spools must be retrieved from the Enterprise Server's PrintQueue directory.
:::

---

## SFTP Server

| Field | Description |
|---|---|
| **Host** | Hostname or IP of the JDE Enterprise Server reachable via SFTP (e.g. `sftp.example.com`). |
| **Port** | SFTP port. Default `22`. |
| **User** | SFTP account name with read access to the PrintQueue directory. |
| **Password** | Password for the SFTP account. |
| **Directory** | Absolute path of the PrintQueue directory on the Enterprise Server (e.g. `/u01/jde/PrintQueue/`). NomaUBL lists this directory to discover candidate spools to retrieve. |

---

## Tips & best practices

- **Use a dedicated SFTP account scoped to the PrintQueue.** A least-privilege account makes audit and revocation easier and limits the blast radius if credentials leak.
- **Validate the SFTP connection from a standalone client** (e.g. `sftp user@host`) before saving, especially for the **Directory** path — a typo there silently produces "no spools found".
- **Pair this connector with the BIP database connector when both retrieval modes are used.** FTP fetches the spool file; the BIP connector retrieves the rendered output BLOBs. The two are independent and can coexist.
- **Make sure the Enterprise Server keeps the PrintQueue files long enough** for NomaUBL's polling interval to pick them up — JDE housekeeping jobs can purge spools faster than NomaUBL scans.
