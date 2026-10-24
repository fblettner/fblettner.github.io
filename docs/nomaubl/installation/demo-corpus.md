---
title: Demo Corpus
description: "Fill a NomaUBL demonstration instance with fictitious but realistic data — issued invoices and credit notes from UBL files, JDE-like spools and text PDFs, supplier invoices, lifecycles, e-reporting envelopes and notifications — through the real pipelines, from Settings › Global or the command line, and reset it in one step."
keywords: [NomaUBL, demo, demonstration, sample data, corpus, fictitious invoices, demo instance, -demo, reset, training, test, JD Edwards, SAP, NetSuite, custom ERP]
---

# Demo Corpus

The **demo corpus** fills a demonstration instance with fictitious but realistic data, so every page of NomaUBL can be shown or tested without a customer file: issued invoices and credit notes of every kind, supplier invoices, lifecycles with platform statuses, e-reporting envelopes and notifications. Everything goes through the **real pipelines** — UBL generation, validation, archive, processing log — but nothing is sent to a platform. The same seed gives the same corpus, and a reset removes everything the demo created.

:::warning[Demonstration instances only]
The corpus can only be created on an instance marked **Demo instance = Y**. Never set it on a customer instance.
:::

---

## At a glance

<svg viewBox="0 0 1200 394" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="334" rx="14" fill="url(#dm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · Global · Directories</text>
  <text x="240" y="80" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Demo instance</text>
  <rect x="420" y="66" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="80.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Y ▾</text>
  <rect x="240" y="100" width="720" height="170" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="254" y="122" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DEMO CORPUS</text>
  <text x="254" y="140" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Fills this instance with fictitious invoices through the real pipelines. Save the settings first; needs Update DB = Y.</text>
  <text x="254" y="169" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Invoices</text>
  <rect x="324" y="154" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="334" y="168.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">300</text>
  <text x="604" y="169" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Months</text>
  <rect x="674" y="154" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="684" y="168.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">6</text>
  <text x="832" y="169" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Period ending with the…</text>
  <text x="254" y="203" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Seed</text>
  <rect x="324" y="188" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="334" y="202.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">2026</text>
  <text x="482" y="203" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Same seed, same corpus.</text>
  <text x="604" y="203" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Sources</text>
  <rect x="674" y="188" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="684" y="202.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">ubl,jde,pdf,recv</text>
  <text x="832" y="203" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Any of ubl, jde, pdf, …</text>
  <rect x="254" y="230" width="134" height="26" rx="5" fill="url(#dm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="321.0" y="246.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Fill the demo corpus</text>
  <rect x="396" y="230" width="139" height="26" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="465.5" y="246.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Reset the demo corpus</text>
  <rect x="240" y="292" width="170" height="46" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="325.0" y="312.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">demo_ubl</text>
  <text x="325.0" y="327.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL files</text>
  <rect x="420" y="292" width="170" height="46" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="505.0" y="312.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">demo_jde</text>
  <text x="505.0" y="327.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">JDE-like spools</text>
  <rect x="600" y="292" width="170" height="46" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="685.0" y="312.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">demo_pdf</text>
  <text x="685.0" y="327.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">text PDFs</text>
  <rect x="780" y="292" width="170" height="46" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="865.0" y="312.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">demo_received</text>
  <text x="865.0" y="327.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">supplier invoices</text>
  <rect x="20" y="62" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="77" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Demo instance</text>
  <text x="30" y="90" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">required Y — never on a customer</text>
  <line x1="200" y1="79.0" x2="420" y2="77" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dm-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Same seed, same corpus</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">reproducible demonstrations</text>
  <line x1="200" y1="167.0" x2="324" y2="199" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dm-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Background jobs</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fill or reset with a progress window</text>
  <line x1="200" y1="247.0" x2="254" y2="243" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dm-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sources</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">UBL, spool, PDF, received</text>
  <line x1="1000" y1="167.0" x2="824" y2="199" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dm-arrow)"/>
  <rect x="1000" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four demo documents</text>
  <text x="1010" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">through the real pipelines</text>
  <line x1="1000" y1="307.0" x2="960" y2="315" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dm-arrow)"/>
</svg>

---

## Prerequisites

| Setting | Where | Value |
|---|---|---|
| **Demo instance** | [Settings › Global › Directories](../configuration/system/global.md) | `Y` |
| **Update DB** | Settings › Global › Processing | `Y` — the spool and PDF pipelines and the processing log must write to the database. |

The environment's stylesheets must be installed (they are, after a standard [install](./install-and-layout.md)).

---

## What the corpus contains

| Document | Source | Content |
|---|---|---|
| `demo_ubl` | UBL files | Issued invoices and credit notes covering the invoice types (380, 381, 384, 389, 261, 262), EN 16931 and the French extended profile, the transaction types (B2B, B2G, B2C, B2BINT, out of scope), every VAT category, document and line allowances and charges, prepayments, payees, tax representatives, deliveries, payment means, attachments and references. Configured with the UBL to CII [post-transform](../ubl-tools/post-transform.md). |
| `demo_jde` | JDE-like XML spools | Several invoices per file, through the XML pipeline; the mapping, generated from the shipped framework template, shows nested paths, a constant, a summed VAT total, a field found anywhere in the block and a line break. |
| `demo_pdf` | Text PDFs | Read back by the PDF-to-XML conversion: two address blocks, labelled rows, one table and regex fields for the document key. |
| `demo_received` | UBL supplier invoices | Received invoices from six fictitious French suppliers, driven through the buyer path: made available, under processing, approved, disputed, refused, paid. |

Around them:

- **Companies and customers** — five issuing companies and thirty buyers, fictitious, with valid identifiers (SIREN, VAT number, IBAN).
- **Lifecycles** — the invoices meant for the platform are driven through realistic dated paths: sent, pending, deposited, not transmitted, refused, rejected, disputed, suspended, approved, paid, with send and import failures and resends; some are marked reviewed. Nothing reaches a real platform.
- **Errors** — every invoice passes the French rule packs except a few deliberately invalid ones, to show the validation errors.
- **E-reporting** — envelopes for every completed month, generated by the real e-reporting handler, then driven to deposited, import failed or rejected.
- **Notifications** — a portal-only notification rule for refusals, rejections and failures.

---

## From the settings \{#from-the-settings\}

When *Demo instance* is `Y`, the **Directories** tab of the [global settings](../configuration/system/global.md) shows a **Demo corpus** block:

| Field | Default | Description |
|---|---|---|
| **Invoices** | `300` | Number of invoices generated. |
| **Months** | `6` | Period covered, ending with the current month. |
| **Seed** | `2026` | Same seed, same corpus. |
| **Sources** | `ubl,jde,pdf,recv` | Any of `ubl`, `jde`, `pdf`, `recv` (received invoices). |

**Fill the demo corpus** and **Reset the demo corpus** run as background jobs with the usual progress window. The reset asks for confirmation and removes every invoice, envelope, notification row, file and document the demo created on the instance. Save the settings before filling.

---

## From the command line

```bash
java -jar nomaubl.jar -demo /opt/nomaubl/demo/config/config.json [--seed N] [--invoices 300] [--companies 5] [--customers 30] [--from yyyy-MM] [--months 6] [--sources ubl,jde,pdf,recv] [--out <dir>] [--reset] [--no-process] [--no-lifecycle]
```

| Flag | Effect |
|---|---|
| **`--seed`**, **`--invoices`**, **`--months`**, **`--sources`** | As in the settings block. |
| **`--companies`** / **`--customers`** | Number of issuing companies (5) and buyers (30). |
| **`--from <yyyy-MM>`** | First month of the period, in place of *Months* back from today. |
| **`--out <dir>`** | Folder for the generated files. |
| **`--no-process`** | Generate the files without processing them. |
| **`--no-lifecycle`** | Process the invoices without driving their lifecycle. |
| **`--reset`** | Remove everything the demo created. |

See [Command line](../management/command-line.md#demo).

---

## Tips & best practices

- **Keep a dedicated demo environment** next to test and production, installed like the others; set *Demo instance* only there.
- **Fix the seed** for a training session or a recorded demonstration: the same invoices come back after a reset.
- **Reset before refilling.** A fill adds to what is there; a reset gives a clean base.
- **Use the corpus to try a setting** — a rule set, a post-transform, a notification rule — on hundreds of varied invoices before touching a customer instance.
