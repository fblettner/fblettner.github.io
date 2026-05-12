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

## At a glance

<svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ftp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ftp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ftp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="360" rx="14" fill="url(#ftp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">FTP Connector — JD Edwards PrintQueue</text>
  <rect x="710" y="30" width="70" height="22" rx="5" fill="url(#ftp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="745" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">💾 Save</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">SFTP Server</text>

  <text x="240" y="118" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HOST</text>
  <rect x="320" y="108" width="320" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="125" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">sftp.enterprise.example.com</text>
  <text x="660" y="125" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PORT</text>
  <rect x="704" y="108" width="80" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="714" y="125" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">22</text>

  <text x="240" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USER</text>
  <rect x="320" y="148" width="220" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="165" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">nomaubl-svc</text>

  <text x="240" y="198" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PASSWORD</text>
  <rect x="320" y="188" width="220" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="205" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">••••••••••••</text>

  <text x="240" y="238" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DIRECTORY</text>
  <rect x="320" y="228" width="460" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="245" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">/u01/jde/PrintQueue/</text>

  <line x1="240" y1="278" x2="780" y2="278" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="296" width="540" height="62" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="252" y="316" fill="#fb923c" fontSize="11" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">⚠ JD EDWARDS-SPECIFIC PAGE</text>
  <text x="252" y="334" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Used only when spools come from a JDE PrintQueue directory.</text>
  <text x="252" y="350" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Other Configuration pages stay source-agnostic — SAP, NetSuite, custom ERP.</text>

  <rect x="20" y="108" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="123" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">SFTP host + port</text>
  <text x="30" y="136" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">JDE Enterprise Server, default 22</text>
  <line x1="200" y1="124" x2="320" y2="124" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ftp-arrow)"/>

  <rect x="20" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Service account</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">least-privilege user · password</text>
  <line x1="200" y1="206" x2="320" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ftp-arrow)"/>

  <rect x="20" y="228" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="243" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PrintQueue directory</text>
  <text x="30" y="256" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">absolute path on the JDE server</text>
  <line x1="200" y1="244" x2="320" y2="240" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ftp-arrow)"/>

  <rect x="820" y="306" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="321" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">JDE-only</text>
  <text x="830" y="334" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">other ERPs use API connectors</text>
  <line x1="820" y1="322" x2="780" y2="322" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ftp-arrow)"/>
</svg>

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
