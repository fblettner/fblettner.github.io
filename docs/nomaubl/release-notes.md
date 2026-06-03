---
title: Release Notes
description: "NomaUBL release notes — every user-visible change shipped in the platform, version by version, in reverse chronological order. Mirrors the in-app Release Notes page."
keywords: [NomaUBL, release notes, changelog, version, e-reporting, processing log, dashboard, AFNOR XP Z12-014, Schematron, RFE, Réforme de la Facturation Électronique]
---

# Release Notes

Every user-visible change to NomaUBL — UI, REST API, CLI, behaviour — is consigned here. The most recent release sits at the top. This page mirrors the **About this release** card and the dedicated *Release Notes* screen surfaced inside the application.

<div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '14px 18px', margin: '24px 0', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', alignItems: 'center'}}>
  <span style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, opacity: 0.65, marginRight: '6px'}}>Versions</span>
  <a href="#v2026-06-02" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(74,158,255,0.45)', background: 'rgba(74,158,255,0.08)', color: '#4a9eff', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none'}}>2026.06.02 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-02</span></a>
  <a href="#v2026-05-26" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.26 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-26</span></a>
  <a href="#v2026-05-24" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.24 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-20</span></a>
  <a href="#v2026-05-23" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.23 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-20</span></a>
  <a href="#v2026-05-22" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.22 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-19</span></a>
  <a href="#v2026-05-21" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.21 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-19</span></a>
  <a href="#v2026-05-20" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.20 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-19</span></a>
  <a href="#v2026-05-19" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.19 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-19</span></a>
  <a href="#v2026-05-18" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.18 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-18</span></a>
  <a href="#v2026-05-17" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.17 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-18</span></a>
  <a href="#v2026-05-16" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.16 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-14</span></a>
  <a href="#v2026-05-15" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.15 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-14</span></a>
  <a href="#v2026-05-14" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.14 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-14</span></a>
  <a href="#v2026-05-13" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.13 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-14</span></a>
  <a href="#v2026-05-12" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.12 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-14</span></a>
  <a href="#v2026-05-11" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.11 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-13</span></a>
  <a href="#v2026-05-10" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.10 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-13</span></a>
  <a href="#v2026-05-9" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.9 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-12</span></a>
  <a href="#v2026-05-8" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.8 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-09</span></a>
  <a href="#v2026-05-7" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.7 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-09</span></a>
  <a href="#v2026-05-6" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.6 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-09</span></a>
  <a href="#v2026-05-5" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.5 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-08</span></a>
  <a href="#v2026-05-4" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.4 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-07</span></a>
  <a href="#v2026-05-3" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.3 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-06</span></a>
  <a href="#v2026-05-2" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.2 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-06</span></a>
  <a href="#v2026-05-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-05</span></a>
  <a href="#v2026-05-0" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.0 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-05</span></a>
  <a href="#v2026-04-10" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.10 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-04</span></a>
  <a href="#v2026-04-9" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.9 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-30</span></a>
  <a href="#v2026-04-8" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.8 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-7" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.7 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-6" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.6 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-5" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.5 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-4" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.4 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-3" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.3 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-2" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.2 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-0" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.0 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v1-0-0" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>1.0.0 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· Initial release</span></a>
</div>

---

## 2026.06.02 — 2026-06-02 \{#v2026-06-02\}

A new **Daily error digest** that emails every integration error of the day to whoever needs it — with the full event list as an Excel attachment — plus a long-asked **Detailed view** on the Integration Errors page that groups every error per invoice and exports the lot in one click. The customer-upgrade tool gains a manual baseline override for installs that were hand-patched ahead of schedule, and the Windows / Linux launchers now expose a JVM-options hook for the master key location.

### New features

- **Daily error digest by email.** A new [Configuration → System → Daily Digest](./configuration/system/daily-digest.md) page lets you schedule a daily message that bundles every integration error over a sliding window (default: yesterday and today) and attaches an Excel file with the full event list — the same data the Detailed view exports. Multiple digests are supported: configure one per recipient subset, with its own send time, lookback window, and severity filter.
- **Per-column routing on the digest.** Each digest carries a list of equality filters (Company, Activity code, Source, Rule, Business unit, …) so different teams can receive different cuts of the same data. For example, one digest for activity = ISC sent to one address and another for VRAC to another.
- **Detailed view on Integration Errors.** A third tab next to *By event* and *By rule*. One row per invoice by default — the invoice's most recent event — with a chevron and a `+N` pill showing how many other events are hidden. Expand to reveal all the events for that invoice; collapse to keep the page tidy. Invoices are sorted by their most recent event so the freshest issue floats to the top, with all of that invoice's earlier events listed beneath it. See [Integration Errors → Detailed view](./application/integration-errors.md#detailed-view).
- **Period filter expands to whole invoices in the Detailed view.** When a filter like *Last 30 days* selects an invoice, the Detailed view brings back *all* of that invoice's events — including older ones outside the period — so the timeline for each invoice is complete in one place.
- **Export to Excel carries every row, even collapsed ones.** Clicking *Export* in the Detailed view drops a file that contains every event for every invoice in scope, regardless of which groups are expanded on screen.
- **Manual baseline for the customer-upgrade tool.** A new [`--from-version`](./management/command-line.md#upgrade) option on `nomaubl.sh upgrade` and `nomaubl.cmd upgrade` tells the tool exactly which release the customer is currently at, instead of guessing. Useful when an install was hand-patched ahead of the default baseline — only the migrations strictly newer than the supplied release will run.
- **JVM options hook in the launchers.** A `JAVA_OPTS` variable at the top of `nomaubl.sh` and `nomaubl.cmd` is forwarded to every Java invocation (start, process, upgrade, fetch-…). The most common use is pinning the master encryption key at a fixed path outside the user profile, e.g. `JAVA_OPTS="-Dnomaubl.master.key.file=/etc/nomaubl/master.key"`. See [Command Line → JAVA_OPTS](./management/command-line.md).

### Improvements

- **Word-wrap on the long Schematron message column.** The message column in the Detailed view now wraps so the full text is visible in the row, no truncation.
- **Wider Current status column reveals the full label.** Resizing the column on the Integration Errors page now shows more of the status message instead of capping the text at the previous fixed width.
- **Integration errors now group naturally by invoice.** Even in the *By event* tab, the order is invoice-first when relevant so the eye doesn't have to chase events of the same invoice across pages.

### Bug fixes

- **Saved digest settings are correctly displayed after save.** The form used to fall back to defaults after Save; values now refresh from the freshly-saved record.

---

## 2026.05.26 — 2026-05-26 \{#v2026-05-26\}

A real visual builder for the invoice PDF — palette on the left, live preview in the centre, inspector on the right — with the block tree editor integrated in place. Plus a round of fixes for Oracle and Windows installs.

### Improvements

- **Live preview is always visible while editing a template.** The old flow — open a modal, type document references, click Preview, wait — is gone. The preview now reflects every toggle and every block edit as you make them.

### New features

- **Visual builder for PDF templates.** A new **Open visual builder** button on the PDF Templates page opens a full-screen editor with three panes:
  - **Left** — the catalogue of available sections (Header, Customer + Delivery, Invoice line table, Payment, Notes, custom block, …) and the ordered list of sections in this template. Click to add, click to select, drag to reorder.
  - **Centre** — a live preview that re-renders against a bundled sample invoice (or your own loaded XML) on every change. Click any block in the preview and the inspector jumps to it.
  - **Right** — an inspector showing the selected block's options grouped by category (Supplier, Invoice block, Columns, …). For a custom block, the full tree editor — text, field, row / column, repeat, conditional — opens in the inspector with XPath autocomplete and font / colour / alignment per node.
- **Load a sample XML from inside the builder.** Drop a real invoice in from the top of the builder — both the live preview and the XPath picker switch to your data immediately, no need to leave the builder.
- **Save inside the builder, with an unsaved-changes warning.** Save persists from the builder; closing with unsaved changes shows a Discard / Cancel prompt so no work is lost by accident.

### Bug fixes

- **Login on Oracle now works.** Authentication on Oracle was silently rejecting every login — including the default `admin / admin` — because the username comparison didn't account for how Oracle stores the value. Login, password changes, role assignments and the user-self password change all work now.
- **Windows paths in the settings.** Saving a Windows path (e.g. `c:\nomaubl`) in the settings used to corrupt the value on save. Paths now round-trip cleanly.
- **`nomaubl.cmd start` returns to the prompt; the server stays alive when the console closes.** Stopping the server now terminates it cleanly without the previous 10-second wait.
- **Buyer address in the UBL XML emitted in the right order.** The buyer's postal address was placed after the VAT identifier, which strict schema validators reject. Order fixed.

---

## 2026.05.24 — 2026-05-20 \{#v2026-05-24\}

Period filtering now lets you pick which date the Invoices page looks at, and drill-down from the VAT declaration always lands on the right set of invoices.

### Improvements

- **VAT declaration period filters on the invoice's issue date.** The page now uses the date printed on the invoice itself, so the period is stable even if the data is rebuilt later.
- **Drill-down from VAT to Invoices now reconciles.** Clicking an amount on the VAT page opens Invoices with the same date basis pre-selected, so the count you see matches the count you came from.

### New features

- **Date basis toggle on the Invoices page.** A new selector next to the date range lets you choose what the period filter compares against:
  - **Update date** *(default)* — the last time the invoice was modified in NomaUBL. Matches the historical behaviour.
  - **Issue date** — the date printed on the invoice. Use this to align with the VAT declaration page.

  The toggle is remembered for the current session.

---

## 2026.05.23 — 2026-05-20 \{#v2026-05-23\}

The VAT declaration page is now built to handle very large volumes — it opens just as fast on a month with 200 000 invoices as on one with 2 000.

### Improvements

- **Much faster VAT declaration page.** Opening the page no longer re-processes every invoice from scratch on each load. Whatever the size of the period — a small month or a busy quarter — the page opens in a couple of seconds.
- **Clearer message when data is missing.** If the database doesn't yet hold the VAT details for the selected period, the page now shows the exact command line to run, with the dates already filled in, instead of displaying an empty matrix.

### New features

- **Choose what gets saved on each invoice.** The NomaUBL database settings now offer two independent switches: one for invoice line subtotals, one for VAT details. The VAT details switch is what the VAT declaration page needs to stay fast. Turn it on, and future invoices land with everything in place.
- **Rebuild VAT details for past periods.** A new command fills in the VAT details for an existing date window from the UBL document already kept for each invoice — useful right after turning the switch on, or any time a clean rebuild is needed:

  ```
  ./nomaubl.sh backfill-vat <env> <fromDate> <toDate>
  ```

  Safe to re-run on the same period without creating duplicates.

### How to upgrade an existing install

1. In **Settings → Connectors → db-nomaubl → Tables**, turn **Store VAT details** on. Save.
2. For each historical period you want to see on the VAT page, run the rebuild command once:

   ```
   ./nomaubl.sh backfill-vat prod 2026-04-01 2026-04-30
   ```
3. Reopen the VAT declaration page — everything is there.

### Compatibility

Existing installations keep their current behaviour after the upgrade. The new switches default to whatever was previously configured. No file edits required.

---

## 2026.05.22 — 2026-05-19 \{#v2026-05-22\}

Compare any two versions of a file side-by-side, directly in the browser — the same kind of view VS Code shows, useful when reviewing what a template or configuration file picked up over time.

### New features

- **Compare mode** on the File Versions page. Turn it on for any text file (XSL, XML, JSON, SQL, properties, …) and pick two versions in the history — the current file included — to open a full-screen comparison: older on the left, newer on the right, with the lines that changed highlighted, syntax colouring by file type, and synchronised scrolling.
- **One-click "compare with previous version".** A small icon on every row of the history lets you compare a single version against the one just before it in a single click — the common case when you only want to see what that snapshot introduced.

### How to use

Open the **File Versions** page, pick a text file in the tree, then either click the compare icon on a row to confront it with the previous version, or turn on **Compare** in the toolbar and pick two rows yourself. Close the comparison with **Escape** or the **Close** button to return to the history.

---

## 2026.05.21 — 2026-05-19 \{#v2026-05-21\}

CA3-style VAT declaration page. Aggregates every invoice for a period into the standard French VAT-form rows — sales / purchases × domestic / intra-EU / outside-EU × VAT rate × invoice type — with collapsible drill-down all the way down to the individual invoices behind each figure.

### What's new

- **VAT declaration** page (new sidebar entry, after E-Directory). Pick a month or a quarter, optionally filter by company. The page opens as a tight CA3 matrix; click a rate row to break it down by invoice type (B2B / B2C / B2BINT / B2G / unclassified), then click a type row to see the individual invoices behind it (document number, type, company, taxable base, VAT). Any amount also remains clickable to jump straight to the Invoices list pre-filtered to the same set.
- **Excel export.** One click produces a workbook with two sheets: a Summary mirroring the on-screen matrix with subtotals per country group and direction, and a Details sheet listing every invoice's contribution. Numeric cells are real numbers so totals and pivots work in Excel.
- **PDF export — CA3 form layout.** The PDF is now styled like the official Cerfa 3310-CA3: section A (operations realised — lines 01, 03, 04, 06, 7B), section B (TVA brute per rate with lines 08, 9B, 09, 10, 14 and total 16; TVA déductible with line 20 and total 23), and a Solde block with line 28 (TVA à payer) or 32 (crédit). One-page printable synthesis you can hand to accounting.
- **Counterparty country on every invoice.** New column captured at insert from the UBL XML — buyer country on sales, supplier country on purchases. Drives the intra-EU / outside-EU classification on the VAT page. The Invoices list also accepts a country filter (passed automatically by the VAT drill-down).
- **Period filter on booking date.** The VAT page reads the same date column as the Invoices list, so an invoice posted in May for an April issue date is declared in May — matching the standard rule for late-booked invoices, and keeping drill-down counts consistent with what you see on the Invoices page.

### How to use

Default opens on the previous full month — what you'd file. Switch the period selector to *Quarter* if you declare quarterly. The matrix opens collapsed; click the chevrons to expand. When a bucket holds more than 200 invoices the inline view caps there — use the Excel export to get the full list.

### Note on existing data

Invoices created before this release have no country on file and show up as *Domestic* by default until they're re-processed. Any new invoice from now on lands with the right country.

---

## 2026.05.20 — 2026-05-19 \{#v2026-05-20\}

One command to move any installation forward to the current release. No more manual schema ALTERs, no risk of losing customer config or XSL customisations between versions.

### What's new

- **`./nomaubl.sh upgrade <env>`** — one command that stops the service, snapshots the env (config + template + ubl + jar — last 5 kept), brings the database schema forward, merges in any new reference data, refreshes the framework XSL and validation rules, rewrites each per-document XSL to pick up new TAG entries and framework updates, writes a full report, and restarts the service.
- **Customer mappings always preserved.** When a per-document XSL is rewritten, the `TAG_*` values you set and the `NOMAUBL_OVERRIDES_START`…`END` block at the bottom of the file are kept verbatim. New TAGs from the latest reference template are added with their default so you can fill them in. TAGs removed from the reference are kept on your side, flagged with a comment so they don't go unnoticed.
- **Customer config always preserved.** New system resources and new reference-list entries (status codes, document-types, etc.) are added; anything already on your side stays as you set it.
- **Settings → Upgrade History.** New page listing every install, upgrade and migration that ran on this environment, with the full report on the right when you click a row.

### How to upgrade

Drop the new `nomaubl.jar` in place, then:

```
./nomaubl.sh upgrade prod
```

Done. The report is saved under `${appHome}/upgrade-reports/`.

### What this release ships under the hood

Every installation currently running NomaUBL is at **2026.05.16** — the upgrade tool recognises this automatically the first time it runs and applies the schema deltas that landed in 2026.05.17, 2026.05.18 and 2026.05.19 (new `UHDRIN` direction column, e-Reporting envelope-table column rename) in one pass.

### Better diagnostics when something goes wrong

- The upgrade report header now shows the resolved env directory and the JDBC URL, so wrong-host or wrong-path mistakes are visible at a glance.
- Failures unwrap the full cause chain — a vague "connection attempt failed" now tells you whether it's `NoRouteToHost`, `Connection refused`, an authentication issue, etc.
- Startup logs the path of the master key file used to decrypt sensitive config values. When the license page reports "restricted" because the key file changed, the error now points directly at the master key resolution instead of saying "Invalid license key format".

---

## 2026.05.19 — 2026-05-19 \{#v2026-05-19\}

E-Reporting (Flux 10) rewritten against the DGFiP spec: one envelope per (company, period, direction) instead of one file per sub-flux, and direction is now persisted on every invoice so it can never drift if a template is re-classified later.

### What's new

- **Direction persisted on every invoice** — new `UHDRIN` column on F564231 (`'1'` = received from supplier, `'2'` = issued by operator). Set once at insert from the source document template, then frozen. Changing a template's *Direction* in Settings afterwards no longer re-classifies historical rows, the Invoices list filter, notification rules, or e-Reporting envelopes. The list filter and detail-modal gating now read this flag directly.
- **E-Reporting Flux 10 — one envelope, both sub-blocks**. 10.1 (B2B-international detailed) and 10.3 (B2C aggregated) now live as parallel children of the same `<TransactionsReport>` per DGFiP rule G6.29 — instead of two separate files. At most two XML files per (company, period): one outbound (Issuer `RoleCode=SE`) and one inbound (Issuer `RoleCode=BY`).
- **Credit-note sign in 10.3 aggregates** — credit notes (UNTDID 1001 codes `261, 381, 396, 502, 503` per G1.01) now subtract from the period aggregate instead of adding to it. G1.14 explicitly allows negative amounts on TT-82 / TT-83 / TT-87 / TT-88, so a period dominated by credits comes through with the correct net figure.
- **E-Reporting tables renamed for consistency**: `RGY56BAR` → `RGDRIN`, `RHY56BAR` → `RHDRIN`, `RIY56BAR` → `RIDRIN` (with matching indexes). All three e-Reporting tables now use the same `DRIN` naming as F564231.

### Migration note

E-Reporting only goes live in September 2026, so no production deployments are running it yet — the schema is changed without a back-compat shim. Drop and re-create the three e-Reporting tables (F564260 / F564261 / F564262) before the next run. Existing F564231 rows pick up `UHDRIN = '2'` (outbound) via the column default.

---

## 2026.05.18 — 2026-05-18 \{#v2026-05-18\}

Direction-aware notifications and custom actions — operators can wire separate dispatch flows for the invoices they emit and the ones they receive without mixing them. Plus a fix for the Invoices list direction filter.

### What's new

- **Notification rules gain a Direction trigger**: *Any (default)*, *Issued only (sales)* or *Received only (purchases)*. Rules with a direction set never fire for invoices of the opposite direction, so the same status code (e.g. *Disputed*) can call one API for sales rejections and a different API for purchase rejections without any conditional logic in the rule body.
- **Custom invoice actions** (the operator-defined buttons in the invoice detail modal) gain the same Direction field. Empty = visible on both sides (legacy default). When set, the button is hidden on invoices of the other direction, so an emit-side *Sync to CRM* and a receive-side *Mark as paid* can live on the same template and the modal only surfaces what makes sense for the current invoice.

### Fixes

- Invoices list — the *Direction* filter chip now applies even when the stored list view spec is older than this release. The filter is resolved against the document-template direction map at query time, independent of what's in the stored spec.

---

## 2026.05.17 — 2026-05-18 \{#v2026-05-17\}

Supplier-received invoices land alongside the customer-issued ones — same Invoices list, same status workflow, same detail modal.

### What's new

- **Pull received invoices from the PA**: new CLI mode `-fetch-received`, new REST endpoint `POST /api/fetch-received/run`, and a "PA inbound (supplier invoices)" mode on the Fetch Input page. The handler walks two new api-connector tasks (`fetch-received-list`, `fetch-received`), deduplicates by PA UUID, and feeds each downloaded UBL into the existing UBL processing path. Can also run on a schedule — new `fetchReceivedInterval` global property (minutes between sweeps, 0 = disabled).
- **Document templates gain a Direction property** — *Issued* (default, back-compat) or *Received*. Drives a new filter chip on the Invoices list (All / Issued / Received), and gates the emit-only action buttons (Resend to PA, Send completed, Credit note, etc.) which are hidden on received-direction invoices.
- **Document number lookup connector**: a received UBL's `cbc:ID` is the *supplier's* invoice number, not ours. A new "Document number lookup" group on the document template (visible when source = UBL) lets you wire a SQL query or REST endpoint that returns our internal `(doc, dct, kco)` from supplier-side fields (`{ublNumber}`, `{supplierName}`, `{supplierVat}`, etc.). When configured, it replaces the regex-on-cbc:ID path; otherwise the legacy `idPattern` continues to work unchanged.
- **Counterparty name** stored in the row (used by list / search) is now read from `AccountingSupplierParty` for received-direction rows, so the column shows the supplier instead of the operator's own name.
- New bundled `received-ubl` document template — pre-wired with `source=UBL`, `direction=R`, `dctDefault=RI`. Edit the lookup connector in Settings → Document Templates and you're good.

### No schema change

- F564231 is unchanged. Direction is resolved at read time from the template name already stored on the row (`UHTMPL`), so existing rows keep working without any migration.

---

## 2026.05.16 — 2026-05-14 \{#v2026-05-16\}

Generate UBL invoices directly from a SQL query or a REST API — no JDE spool needed. Debug profiling is now ON everywhere by default. Plus a long-standing display bug in the processing log is fixed.

### Invoices from a SQL or REST source

- Document templates have a new **Connector** source (in addition to XML and UBL). Pick a SQL or API connector for the header, optionally another for the line items, and the existing XSLT pipeline takes over to produce the UBL.
- Two modes: **single-call** (one query/endpoint returns header + the nested line array) or **two-call** (header first, then lines — line parameters can reuse header values).
- In the XSL Editor, a new **Load connector sample** button fetches a real sample so you can map XPaths against actual data, just like with an XML spool.
- The Process Document page replaces the file picker with a parameter form when the template uses a connector. From the CLI, pass `--param key=value` (repeatable) instead of a file path.

### Debug timings enabled by default

- Per-step timings (parse, validation, DB insert, send to PA…) are now logged by default in every run, in both the UI and the CLI. The overhead is negligible and these timings are the fastest way to diagnose a slow run.
- Use the new `--no-debug` flag (or untick the toggle in the UI) to skip them on heavy nightly batches.

### Bug fix

- **Processing Log**: when several steps of a single job shared the same second, the page was splitting them into multiple rows tagged PARTIAL. Events now stay grouped under their original job.

---

## 2026.05.15 — 2026-05-14 \{#v2026-05-15\}

Wire downstream systems without writing code: invoices get custom action buttons, and reference lists can refresh themselves from a SQL query or REST API.

### New: custom action buttons on invoices

- Add your own buttons in the invoice detail panel (next to the built-in seller actions). Each button can trigger a chain of connector calls — perfect for updating a customer file, pushing to a downstream ERP, posting to a webhook, etc.
- Configured in Settings → Actions, with the same editor used for the built-in actions: connector, endpoint, parameters, optional "stop on failure".

### Reference lists: sync from a connector

- A custom list (Settings → Reference Lists) can now be refreshed from a SQL query or REST API. Pick the connector, the endpoint, map which field is the code and which are the labels — click **Sync now** and the list rebuilds itself.
- Parameters are saved per list, so the same query can feed several lists with different inputs.

### Improvements

- All action parameters now support a `{}` picker that lists every available variable (invoice columns, response fields from previous calls). Both `{field}` and `{{field}}` syntaxes work.
- SQL connector parameters: typing `'01'` (with quotes) used to silently return 0 rows. The quotes are now stripped automatically.

### Bug fixes

- **Custom list editor**: the saved endpoint was sometimes missing from the dropdown when re-opening the editor. Fixed.

---

## 2026.05.14 — 2026-05-14 \{#v2026-05-14\}

Notification rules and actions can now use **any invoice column** as a variable — not just the original ten. A new `{}` picker makes them easy to discover and insert.

### What's new

- The notification editor's Subject, Body and action parameters all get a `{}` button. Click it to browse a searchable list of every available variable (10 standard notification fields + every column from the Invoices view: customer name, contract reference, total, currency, business unit, PA UUID…).
- Pick a variable and it's inserted at the cursor — no more typing placeholder names by hand or guessing what's available.
- Same picker is reused in custom actions, so any column that drives a notification can also drive a downstream API call.

---

## 2026.05.13 — 2026-05-14 \{#v2026-05-13\}

Multi-select filters on reference-list columns (statuses, e-Reporting statuses, custom lists, etc.), with one-click reset. Picking three statuses in Advanced Filters → Run now actually returns the union.

### What's new

- Reference-list filters (column filter row and Advanced Filters panel) let you pick **any number of values** instead of just one.
- A **✕** button next to the filter clears all picks in one click.
- The server now narrows results properly with `IN (...)` so picking three statuses returns rows matching any of them (used to silently fall back to the first).

### Improvements

- Picking the **between** operator on a date / number / text column filter now widens the column automatically so both operand inputs fit side by side. Going back to a single-value operator restores the original width.

---

## 2026.05.12 — 2026-05-14 \{#v2026-05-12\}

List views (Invoices, Integration Errors, Processing Log, E-Reporting) are much snappier. Each Run loads up to 5000 rows once, then filter / sort / pagination happen instantly in the browser — no more delay when typing in a column filter or flipping pages.

### What's new

- Filters and pagination on the four main lists are now instant. The page only goes back to the server when you change the date range, apply Advanced Filters, or change sort.
- When more than 5000 rows match, the toolbar shows **X / Y rows** next to Run and tells you to narrow the filters. The cap is configurable per view in Settings → List Views.
- Column filters on reference-list columns get a searchable dropdown populated from the loaded reference list (codes + labels), instead of a plain text input. Numeric codes and Oracle-padded values now match correctly.

---

## 2026.05.11 — 2026-05-13 \{#v2026-05-11\}

UI consistency. Every dropdown across the application now uses the same searchable picker — same look, same keyboard navigation, and an inline search box for long lists (countries, currencies, payment means, VAT categories, statuses, etc.).

### Improvements

- Filters, settings editors, modals, the XSL Editor, the UBL Defaults tabs — all dropdowns now look and behave the same way. Type to filter, navigate with the keyboard, close with Escape.
- Pagination size selectors use the same component for consistency.

### Bug fix

- **Status dropdowns**: the picker was showing the internal tag (e.g. `IN_PROGRESS`) instead of the French/English label. Fixed — status pickers now show the human label.

---

## 2026.05.10 — 2026-05-13 \{#v2026-05-10\}

Big release on customisation: the four main list pages (Invoices, Integration Errors, Processing Log, E-Reporting) can now be tailored to your needs — pick which columns to show, their labels, their formats, their filters — without writing code.

### What's new

- New **Settings → List Views** editor: one card per list page with drag-and-drop column reorder, English + French labels, format (date, datetime, amount, percent), alignment, width, visibility and filter toggles.
- Click **+ Add column** to pick from a catalog of every column the page can show. For the Invoices page, that now includes 16 additional fields from the invoice archive: source file, business unit, JDE user/job, due date, PA UUID, etc.
- New **Advanced Filters** panel on each page: pick a column, pick an operator (contains, equals, between, empty…), and click Run. Operators are fully translated.

### Bug fixes

- **Dashboard drill-throughs**: clicking "Recent errors" on the Tech Dashboard, or a status card on the Business Dashboard, was sometimes landing on the target page without the filter applied. Fixed — the filter is now always passed through, with a visible chip showing what's active and a ✕ to clear it in one click.
- **Invoice modal**: editing a non-French invoice was silently resetting its `CustomizationID` to the default EN16931 value. The original value is now preserved.
- **Status filter overflow**: the Invoices status filter chip list used to overflow when many codes were active. Caps at 5 inline chips now, with a "+N more" dropdown for the rest.

---

## 2026.05.9 — 2026-05-12 \{#v2026-05-9\}

Major release on the validation pipeline and on receiving status updates from the PA. Plus a cleaner Integration Errors page and several quality-of-life improvements.

### What's new

- **Inbound webhooks**: PAs can now push status updates to NomaUBL in real time instead of waiting for the next poll. Each api-connector template gets a new **Webhooks** tab: enter a shared secret, paste the resulting URL into the PA's webhook settings, and status changes apply automatically. HMAC signature checked, duplicate events deduplicated.
- **NomaUBL house rules**: a new Schematron pack catches errors that the PA would reject anyway — starting with credit-note codes (261/381/396/502/503) that require a reference to the original invoice. Failures now appear locally in Integration Errors before the round-trip.
- **Integration Errors page**: the unreadable Message column is gone. Click a row to open a clean detail view that separates the French explanation from the technical debug context. The previous detail modal worked only for matched invoices; unmatched / orphan errors now have their own modal too.
- **Per-document date format**: new dropdown in the document template's Document tab to pick the date format used in the source XML (`yyyy-MM-dd`, `dd/MM/yyyy`, etc.). Used to be hardcoded to ISO, which silently failed on documents with European date formats.

### Improvements

- The Schematron validation pipeline is faster on cold start: rules are precompiled at build time instead of at JVM startup.
- API connectors now support `multipart/form-data` endpoints (some PAs require it for the import call) and OAuth2 token requests can carry custom headers.
- The Directory check (PPF) now runs at validation time, not just at send time, so an unknown counterparty surfaces in Integration Errors before the document is even queued.
- New **Debug profile** toggle in global settings logs per-step timings (parse, validation, UBL emit, PA send) to F564237 — useful for diagnosing slow batches.
- The Invoice list shows a review flag column for rows marked for retrospective review.
- Integration Errors gets a Date column so you can see the time context without opening a row.

### Bug fixes

- **Validation profile**: the BR-FR-Flux 2 rule pack was being skipped on Extended-CTC-FR invoices. It now runs on every profile, as required by AFNOR XP Z12-012.
- **Status messages**: PA error messages with accented French characters (`é` showed as `é`) and embedded newlines now display correctly in the invoice lifecycle.

---

## 2026.05.8 — 2026-05-09 \{#v2026-05-8\}

PA configuration is now consistent across **e-invoicing**, **e-directory** and **e-reporting** — each one points at a reusable API connector instead of carrying its own credentials and endpoints. E-Reporting can submit over SFTP as well as REST, and the three system templates have a consistent tabbed layout.

### What's new

- **E-Reporting decoupled from E-Invoicing**: it now has its own connector, its own endpoint, and its own send mode — so reporting can target a different platform than invoice submission. Reports can be sent over SFTP as well as REST.
- **OAuth2 token requests** can now use form-encoded bodies (`grant_type=client_credentials`) and carry custom headers (for PAs that require a tenant ID on the auth call itself).
- **System template editors** (E-Invoicing, E-Directory, E-Reporting) reorganised into consistent multi-tab layouts. The Send Mode toggle moved to the SFTP tab where it belongs.

### Removals

- The **PA mock mode** (and its dedicated tab) is gone. Use an API connector pointing at a Postman mock or local stub for offline testing.
- The **Background Scheduling** group on the E-Invoicing tab was silently writing to the wrong template — removed, with a pointer to the right place (`global` → Scheduling).

---

## 2026.05.7 — 2026-05-09 \{#v2026-05-7\}

Major release on connectors and notifications. SQL connectors join API connectors as a first-class building block, and both can now power multi-step action chains from notification rules and from the invoice detail modal.

### What's new

- **SQL connectors**: a new template type lets you define named SQL queries with parameters, the same way API connectors define HTTP endpoints. Statements are restricted (no DROP / TRUNCATE / ALTER) and write statements require an explicit "writable" flag per query.
- **Multi-step actions**: action bindings (the buttons in the invoice modal) and notification rules can now chain several connector calls. Each call can reuse outputs from previous ones via `{call.N.fieldName}` placeholders. Mark a call **Stop on failure** to halt the chain.
- **Notification rule editor** reorganised into 6 tabs (General, Trigger, Channels, Email, Actions, Test) — much easier to navigate.
- **Notification audit trail**: each notification shows what actions fired as colour-coded chips (OK / FAIL / STOP / SKIP). The bell preview summarises in one line ("2 action(s) ran" or "1 of 2 failed").

### Bug fixes

- **Notification actions never fired**. Multiple causes, all fixed: the dispatcher was blocked when no email recipient was set, and a hung SMTP connection close was silently suppressing every action.
- **Stale entries in editors**: deleting a call/endpoint/query and saving used to leave ghost data that came back on next load. Saves now fully replace the template's contents.
- **"Add mapping" button** on API connectors didn't work — clicking it instantly removed the row again. Fixed.

### Other

- Configuration check rewritten against the current connector schema (was still validating property names that haven't existed for months).
- Live process events on the Tech Dashboard now read from the runtime processing log instead of validation errors, and stay bounded to today.
- Filesystem widget groups paths by partition so the same disk usage bar doesn't repeat for every directory on the same mount.

---

## 2026.05.6 — 2026-05-09 \{#v2026-05-6\}

New **Tech Dashboard** for the IT team — separate from the business dashboard, with everything you need to monitor the platform at a glance: JVM health, database connectivity, disk usage, throughput, errors, scheduler, etc.

### What's new

- New **Documentation → Tech Dashboard** page with 14 widgets: System Health, DB ping, build info, Filesystem (free/total per partition), Throughput, Error Trend, Retry Rate, Template processing time, Active Sessions, Live Log Tail, Configuration Check, Database Tables, Recent Errors, Scheduler.
- **Active sessions** card now works even when authentication is disabled — falls back to an in-memory per-IP tracker so the IT team can see who is using the app.

### Improvements

- Business Dashboard rebalanced for a cleaner visual layout — panels in the same row now line up at the same height.
- Configuration check rewritten — it was showing 8 false errors on perfectly valid configurations because it validated property names that haven't existed for months.

---

## 2026.05.5 — 2026-05-08 \{#v2026-05-5\}

Internal architecture pass to make NomaUBL more flexible on customer installations: column names and table names are now fully configurable, role permissions become row-based (easier to extend), and several long-standing Oracle quirks are fixed.

### What's new

- **Status-code groups**: statuses can be grouped (inflight, terminal, error, etc.) and stages (created, sent, pending, approved, rejected). Dashboard widgets now read from this single source instead of hardcoded code lists, so adding a new PA status code is a one-line change in configuration.
- **Role permissions** rewritten as one-row-per-grant instead of comma-separated lists. The Roles editor in Settings is redesigned with per-feature checkboxes, friendlier company management, and a searchable list of allowed pages.
- All column and table names are now configurable per customer install via the **db-nomaubl-columns** and **db-nomaubl** templates — no more silent drift if a customer renames a JDE column.

### Bug fixes

- **Notification bell empty on Oracle**: on JDE installs where status / kco / etc. are stored as fixed-width CHAR columns, Oracle's blank-padding rules silently broke equality matches with JDBC string binds. Notifications and many other queries weren't returning rows. Fixed across the whole backend (47 sites).
- **Database initialisation**: SQL comments containing semicolons were being cut in half by the statement splitter, producing "Unterminated string literal" errors on first init.
- **Processing Log row ordering**: two events from the same job sharing the same second sometimes flipped order between refreshes. Now uses an explicit row-ID tiebreaker so the order is stable.

### Other

- The Invoice detail modal's Validation Errors panel now lays each error on two lines (header on top, message below) so long rule text stops competing for horizontal space.

---

## 2026.05.4 — 2026-05-07 \{#v2026-05-4\}

Dashboard rebuilt with a clearer layout, and the Integration Errors page becomes a proper failure-analysis tool — rule codes now come with a human description, extracted from the Schematron files themselves.

### What's new

- **Dashboard**: 12-column widget grid replaces the previous stacked layout. Hero cards (Total / In flight / Rejected — IT / Rejected — Business), pipeline funnel, volume chart, recent activity, top failing rules, per-company breakdown, e-Reporting coverage and round-trip health all line up cleanly.
- Hero cards click through to a properly filtered Invoices list (previously the filter was being dropped).
- **Top failing rules** widget gets a category toggle (All / UBL / Integration) and ranked rows instead of proportional bars — counts of 160 vs 10 are now visually distinguishable.
- **Integration Errors page**: new view toggle between **by event** (flat table) and **by rule** (cards grouped by rule, with invoice count and per-severity chips). Category filter to separate UBL validation errors from lifecycle / integration errors.
- **Rule descriptions everywhere**: rule codes like `BR-CL-23` or `BR-FR-23` now show their human description as a tooltip and as a secondary line, both on the dashboard and on Integration Errors.
- **Light mode** is now the default for first-time visitors. Anyone who explicitly selected dark mode keeps it.

### Bug fixes

- **Dashboard panels empty on Oracle**: two queries used `column <> ''` to guard against empty rows, but on Oracle empty strings are stored as NULL and `NULL <> ''` is treated as false — the WHERE clause collapsed and both queries returned zero rows. Fixed.

---

## 2026.05.3 — 2026-05-06 \{#v2026-05-3\}

Notifications: invoice status changes can now reach users through a portal inbox, by email (with the rendered invoice PDF attached by default), and through API calls — all governed by rules you define in the UI.

### What's new

- **Notifications page** (under Management) — portal inbox with an All / Unread filter, mark-all-read, per-row dismiss, colour-coded status badges. Click a row to open the linked invoice.
- **Bell icon** in the top bar with an unread badge and a quick dropdown of the last 6 notifications. Polls every 30 seconds.
- **Notification Rules editor**: define a rule by status code, choose the channels (portal, email, API call), the recipient, the email template, and an optional API action. Includes a Test panel that actually fires the rule against a real invoice.
- **Email channel**: the invoice PDF is attached by default. Subject and body have sensible defaults if you leave them blank. Recipients can be a portal user, a portal role, or a list of email addresses (or any combination).
- **Auth-disabled installs**: notifications work without authentication — portal rows are sent to a "broadcast" inbox visible to everyone.
- **Retention**: notifications older than `notificationsRetentionDays` in global settings (default 90 days) are cleaned up daily.

---

## 2026.05.2 — 2026-05-06 \{#v2026-05-2\}

French B2B PA submission: qualified PDF attachments (LISIBLE + business documents) plus several round-trip integrity fixes.

### What's new

- **LISIBLE attachment**: new Y/N flag on document templates. When ON, a human-readable PDF is rendered from the UBL itself and embedded back as a "LISIBLE" attachment. Independent of the existing Attachment dropdown — both can be active on the same invoice.
- **Additional attachments**: list of qualified business documents (`RIB`, `BON_LIVRAISON`, `BON_COMMANDE`, `PJA`, `BORDEREAU_SUIVI`, `DOCUMENT_ANNEXE`, etc.) to embed alongside the invoice. Editable from the Document tab; paths support placeholders like `%APP_HOME%`, `%DOC%`, `%DCT%`, `%KCO%`. Missing files are logged and skipped — they never break the surrounding processing.
- **TAG_CUSTOMER_SIRET** (BT-46): new XSL variable for the buyer's SIRET, next to the existing buyer SIREN.

### Bug fixes

- **PA-acceptable XML output**: the UBL XML declaration must match `<?xml version="1.0" encoding="UTF-8" standalone="no"?>` exactly — the previous code was emitting variations the PA rejected. Fixed.
- **Line amount display** in the invoice modal: amounts that included a line allowance were being recomputed and shown wrong (e.g. a 45 × 12,75 line with a 489,15 allowance was displayed as 84,60 instead of 573,75 — the PDF was correct, only the modal was off). The amount is now read directly from the UBL.
- **Config file corruption**: a re-indent pass was unwrapping any string starting with `{` as nested JSON — including template placeholders like `{content}` or `{statusAt}` — leaving `config.json` unparseable on next reload. Fixed.

---

## 2026.05.1 — 2026-05-05 \{#v2026-05-1\}

PDF templates become reusable shareable resources with a full visual editor — design once, reuse across many documents.

### What's new

- New **PDF Templates** page (under Management) to create, copy, import, export and edit layouts independently of any specific document. Many documents can share the same PDF template — edit once, propagate everywhere.
- New **Block** section type for fully custom layouts driven by XPath: text, fields with formatting (date / currency / number / percent), images, rows / columns, conditional rendering, repeating blocks, and tables that iterate over invoice lines or other collections.
- New **visual canvas editor** for Block sections: tree view, toolbar to add elements, inspector for properties. Load a sample XML once and the XPath picker autocompletes paths from real data.
- **Live preview** opens in a large modal at the top of the form — no more scroll up and down to iterate on a layout.

### Bug fixes

- **Tables disappearing from PDFs**: a table with `children` listed before its `xpath` property was losing its iterator, returning 0 rows. Fixed.
- **Editor freeze** on rapid edits: the canvas editor was re-rendering on every keystroke and stealing focus. Fixed.

---

## 2026.05.0 — 2026-05-05 \{#v2026-05-0\}

Big release that unifies document processing: XML and UBL inputs go through the same single entry point, with the document template itself deciding which pipeline to run.

### What's new

- **One Process Document page** replaces the previous Process XML + Process UBL pages. The page adapts its controls based on the template's source (XML spool, or already-formed UBL invoice).
- **Source property** on every document template (XML or UBL). For UBL inputs, the (doc, dct, kco) primary key is extracted from the invoice's `cbc:ID` via a regex. A built-in **Suggest + Test** helper in the Document tab lets you paste a real ID and have the regex filled in automatically.
- **One CLI command**: `-process` replaces `-xml` and `-ubl`. The CLI infers the pipeline from the template's source.
- New **Documents page** under Management (separate from Settings) for managing document templates: add, copy, import, export, remove, description.
- **PDF generator rewritten**: the monolithic generator is split into composable sections (Header, Parties, Line Table, VAT, Totals, Payment, Notes…). Each section can be reordered or configured per document template via the PDF Template editor.
- **Per-document PDF templates**: each invoice's PDF is rendered from the template assigned to its document. New `F564231.UHTMPL` column tracks which template was used so the PDF preview always uses the right layout.

### Improvements

- Filename-based key extraction (`DOC_DCT_KCO_ubl.xml`) is no longer required. UBL filenames can be anything.
- All `/api/invoices/...` routes now use `(doc, dct, kco)` directly in the URL — faster, cleaner, and PostgreSQL-friendly.
- The `/invoice/view` PDF preview route accepts either the UBL invoice number (`?id=...`) or the composite key (`?doc=&dct=&kco=`).

---

## 2026.04.10 — 2026-05-04 \{#v2026-04-10\}

### Improvements

- **E-Invoicing settings**: it is now possible to configure a hybrid setup where invoices are sent over SFTP but import polling, status retrieval and seller actions still go through the API. Previously the API section was hidden as soon as Send Mode was set to FTP.

### Bug fixes

- **BT-46 (Buyer SIRET)** in XSL: two issues prevented the buyer SIRET from being emitted correctly. Fixed — `TAG_CUSTOMER_SIRET` is now available in the XSL Editor catalog and renders correctly in the UBL output.

---

## 2026.04.9 — 2026-04-30 \{#v2026-04-9\}

### What's new

- **Download UBL** button on the invoice detail modal's History tab, next to Validate UBL. Saves the raw UBL XML as `{doc}-{dct}-{kco}.xml`.
- **AI Assistant auto-greeting**: opening the chat panel for the first time on a session sends a localised greeting so the assistant introduces itself and lists its main capabilities without you having to type a prompt.

### Bug fixes

- **Settings editors showing stale data**: switching between two reference lists could open the editor with rows from the previous list. Fixed.

---

## 2026.04.8 — 2026-04-29 \{#v2026-04-8\}

### AI Assistant improvements

- The assistant can now answer questions like **"why was invoice X rejected"** or **"what did the PA say"** — it has access to the invoice lifecycle history (the same data shown in the History tab).
- The assistant now knows your **status code catalogue** (including any customisations), so it stops guessing codes from words like "litige" and uses the exact code.
- The chat textarea is re-focused automatically once a response finishes streaming — follow-up questions no longer require clicking back into the input.

---

## 2026.04.7 — 2026-04-29 \{#v2026-04-7\}

### Bug fix

- **AI Assistant — documentation lookup**: the assistant could consistently fail to read the online documentation (`url_not_allowed` errors). Fixed — the assistant now correctly fetches pages from `docs.nomana-it.fr` to answer product questions.
- **AI Assistant chat**: tool invocations and their results are now shown as inline pills in the chat, so any failure is visible instead of silently swallowed.

---

## 2026.04.6 — 2026-04-29 \{#v2026-04-6\}

### Improvements

- **AI Assistant — documentation lookup**: the assistant now picks the right documentation page instead of guessing or giving up. It reads the sitemap of `docs.nomana-it.fr` on startup so it knows which pages actually exist.
- Two new optional global settings in **Settings → System → Global → AI** to point the assistant at a custom documentation site or restrict the scope.

---

## 2026.04.5 — 2026-04-29 \{#v2026-04-5\}

### Bug fix

- **AI Assistant — documentation access**: on installations upgraded from before 2026.04.4, the assistant was answering that it had no access to documentation because the new setting was missing. It now defaults to `docs.nomana-it.fr` so no manual edit is needed.

---

## 2026.04.4 — 2026-04-29 \{#v2026-04-4\}

### What's new

- **AI Assistant — tool use**: the assistant can now call tools mid-conversation to answer your question instead of guessing from prior knowledge. It can look up the documentation, list invoices, explain a status code, fetch validation errors for an invoice, and list e-Reporting reports.
- New AI settings (**Settings → System → Global → AI**): customise the system prompt, restrict documentation lookup to specific domains, and toggle the data tools on or off.
- Assistant replies are now rendered as Markdown — headings, bold, lists, tables, fenced code blocks and links all render correctly instead of showing raw `###` / `**` etc.

---

## 2026.04.3 — 2026-04-29 \{#v2026-04-3\}

E-Reporting brought into full compliance with the official FNFE-MPE Flux 10 specification, plus several fixes around the e-Reporting data model and the settings editors.

### E-Reporting — Flux 10 specification compliance

- The XML emitted for Flux 10.1 / 10.3 now matches the official FNFE-MPE specification element by element (correct tags, correct date formats, EUR currency on every tax amount, restricted set of category codes).
- **B2C transactions** are now correctly aggregated as required by the spec (rule G6.28) — never emitted as individual invoice blocks. B2BINT keeps the per-invoice emission.
- New optional declarant / sender / issuer / business-process fields on the **e-Reporting** template, with a dedicated editor (sections Sender, Issuer, Business Process).
- **Dedicated e-Reporting status codes** (9950–9957) instead of reusing the invoice status codes. Editable in **Settings → System → ereporting-statuses**.
- **B2C reports could be empty**: the report was reading VAT subtotals from a table that was not always populated, producing an empty `<Transactions>` block. Now reads primarily from the UBL XML with the old behaviour as fallback.

### Bug fixes

- **Settings — list editors losing focus when typing**: across the 15 reference-list editors (Statuses, Countries, Action Codes, Currency Codes, etc.) the cursor was being kicked out of the input on every keystroke, and freshly added rows could never be filled in. Fixed.
- **Statuses editor** was silently dropping the `type` and `description` template fields on save, corrupting the statuses template. Fixed.
- **Dashboard / About card**: the EXTENDED-CTC-FR schematron is now listed alongside the others, and the displayed version numbers no longer fall back to the embedded EN 16931 source version.

---

## 2026.04.2 — 2026-04-29 \{#v2026-04-2\}

### Bug fix

- **Re-validating an invoice failed**: clicking *Validate UBL* on an existing invoice from the History tab (and the standalone validate path) was failing with a schema error. Fixed.

---

## 2026.04.1 — 2026-04-29 \{#v2026-04-1\}

### What's new

- **EXTENDED-CTC-FR validation profile** added to the validator. The active Schematron profile is now chosen automatically from the invoice's `CustomizationID` (BT-24) — EN 16931 + CIUS-FR for standard invoices, EXTENDED-CTC-FR for Extended profile.
- **Customization IDs** are now a dedicated reference list in **Settings**, seeded with the standard French URNs (EN 16931, FNFE Basic / Extended CTC, Factur-X levels, Peppol BIS Billing 3). The UBL Defaults editor offers them as a dropdown.
- **Processing Log** now covers UBL processing (was XML-only) — every UBL run shows up in the log just like XML runs.

### Improvements

- **Replace mode** now also purges lifecycle history and validation errors when reprocessing, so re-runs no longer mix stale entries with the new run.

### Bug fixes

- **UBL upload directory**: uploading a UBL file used to land in a wrong path (`<input>/_ubl/`) and validation then failed with "No such file or directory". Both fixed — uploads go to `<input>/ubl/` and validation resolves the path correctly.

---

## 2026.04.0 — 2026-04-29 \{#v2026-04-0\}

Major release: e-Reporting (Flux 10.1 / 10.3) becomes a first-class feature, alongside a new Processing Log and a new Release Notes page.

### What's new

- **E-Reporting**: new top-level page to generate, list and inspect Flux 10.1 (B2C) and 10.3 (B2BINT) reports. Includes a generate dialog with period picker, a detail modal with the included invoices and CSV / Excel export, and a "Download XML" action.
- **CLI**: new `-ereporting` mode with date range, company and flux filters.
- **Background scheduling**: new `ereportingInterval` job to automatically generate reports on a schedule.
- **Processing Log**: new page under Management to inspect every processing run, with a grouped view (one row per START → END job with status badge, duration, and expandable step list) and a flat view. Filters by mode, template, period (default last 7 days) and file name.
- **Release Notes page** (under Documentation) that renders this file in the UI, in English or French depending on the active language, with a table of contents.
- **Dashboard**: new "About this release" card showing release number, build date, and bundled Schematron versions.

### Other

- **Initialize Database** now creates the three new e-Reporting tables (F564240 / F564241 / F564242) alongside the existing ones. The table names are configurable in **Settings → db-nomaubl**.
- The **Roles** editor exposes the two new pages (Processing Log, Release Notes) so existing roles can be granted access.

---

## 1.0.0 — Initial release \{#v1-0-0\}

NomaUBL is a Java 17 + React e-invoicing platform that turns JD Edwards output into standards-compliant **UBL 2.1** documents, validates them, submits them to a French **Platform Agréée (PA)**, and tracks the full invoice lifecycle.

### Core pipeline (JDE → UBL → PA)

- **JDE XML extraction** from the BIP Print Queue (`F95630`/`F95631`/`F9563110`), JDE Archive, SFTP and the local filesystem; routed by document-type templates (`invoices`, `credit_notes`, …).
- **XSLT 2.0 transformation** via Saxon-HE — generates UBL 2.1 invoices and credit notes, with a configurable XSL framework (`ubl-common.xsl` + `ubl-template.xsl`).
- **Validation**: XSD (UBL 2.1) + Schematron — **EN 16931**, **BR-FR Flux 2** (CIUS-FR / FNFE-MPE) and **BR-FR CPRO** (Chorus Pro for B2G), with severities (`fatal`, `error`, `warning`, `info`).
- **PA submission** over HTTP (Java 11 `HttpClient`), with OAuth2 bearer-token caching and auto-refresh on 401, plus an SFTP fallback channel.
- **Per-company PA overrides** via `e-invoicing-{kco}` system templates — independent credentials, endpoints and tokens per issuing company.
- **PPF directory pre-flight** (non-blocking) via the `e-directory` template — looks the customer up before sending and surfaces a warning when the recipient is unreachable.
- **PDF generation** via Oracle BI Publisher (`oracle.xdo`) with optional Ghostscript post-processing and an iText-based embed of the PDF as `cac:AdditionalDocumentReference` in the UBL.
- **Mock PA** (`paUseMock=Y`) with success / failure / token-expiry behaviours for end-to-end tests without a live platform.

### Document, status and lifecycle storage

Oracle / PostgreSQL schema (configurable in `db-nomaubl`):

| Table | Purpose |
|---|---|
| `F564230` | Source archive — original JDE XML, processing flags |
| `F564231` | UBL header — EN 16931 BT-* fields, generated UBL XML, current status |
| `F564233` | UBL invoice lines |
| `F564234` | UBL VAT summary per category / rate |
| `F564235` | Lifecycle events (history) |
| `F564236` | XSD / Schematron validation errors |
| `F564237` | Runtime processing log (one row per START/END/error event) |
| `F564250`/`F564251`/`F564252` | Users / Roles / Sessions |

- **Dialect-aware DDL** via `DatabaseDialect` — Oracle (`BLOB`, `NUMBER`, `VARCHAR2`) and PostgreSQL (`BYTEA`, `INTEGER`, `VARCHAR`).
- **Initialize Database** action in Settings creates the full schema and bootstraps default `admin` / `viewer` roles.
- **JDE Julian dates** stored as integers (`CYYDDD - 1900000`) and converted on the fly for the UI.

### Invoice status catalog

- 30+ status codes covering the full **AFNOR XP Z12-014 V1.3** lifecycle: `STATUS_CREATED → STATUS_VALIDATED → STATUS_SENT_TO_PA → STATUS_PENDING → STATUS_DEPOSITED → …` plus dispute, factoring and routing-error states.
- Internal workflow codes (`9900`–`9907`) and PA-mapped UNTDID 1373 codes (`1`, `8`, `10`, `37`, `43`, `45`–`51`).
- All codes / labels / PA mappings are **data-driven** from the `statuses` system template — editable in Settings.
- `StatusTransition.apply()` updates `F564231` and inserts an `F564235` lifecycle event in one call.

### CLI

Long-running and one-shot modes — all driven from a single `config.json`:

| Mode | Purpose |
|---|---|
| `-config` | Open the Swing GUI (FlatLaf dark) |
| `-xml` | Process JDE XML files: SINGLE / BURST / UBL / AUTO |
| `-ubl` | Validate + load existing UBL files into the DB |
| `-fetch-single`, `-fetch-all` | Pull from BIP / archive / directory + process |
| `-fetch-import` | Poll PA for status of pending invoices (9906) |
| `-fetch-status` | Retrieve PA lifecycle events and update DB |
| `-extract` | Extract input/output files from a JDE BIP job |
| `-serve` | Embedded HTTP server + background scheduler |
| `-install` | Bootstrap an environment directory tree |
| `-password` | Encode a password for storage |
| `-updUser` | Update JDE user on submitted jobs |

### Web UI (React 19 + Vite)

- **Dashboard** with status counters, integration-error tile, quick actions and license / build info.
- **Invoices** — paged + filterable list, detail modal (Summary, Parties, Lines, VAT, Notes, History, PDF tabs), in-place create / edit / copy / resend, set-status (PA or DB-only), email with PDF attachment.
- **Integration Errors** — every validation row in `F564236` that has no matching invoice (broken submissions).
- **Extract & Process** — single and batch fetchers from BIP, FTP, archive or local files.
- **Process UBL** — load and validate existing UBL XML.
- **Validate** — XSD + Schematron tester for ad-hoc UBL files.
- **XSL Editor** — Monaco-based editor with XML browser, template-aware variable picker and per-template framework installer.
- **XML Viewer** — Monaco-based viewer / formatter with local + server load and save.
- **UBL Defaults** — per-company defaults (currency, payment means, tax categories, etc.).
- **Status Reference** — full AFNOR XP Z12-014 V1.3 reference.
- **Reason Codes** — full AFNOR XP Z12-012 Annexe A reference.
- **UBL Reference** — BT-* glossary.
- **File Versions** — SQLite-backed version history for editable XSL / XSD / Schematron / RTF / config files, with upload / restore / download.

### Settings (configuration manager)

- Live-edit `config.json` from the browser. System templates: `global`, `e-invoicing`, `e-directory`, `statuses`, `db-nomaubl`, `db-jde`, `ftp-jde`, `fetch-invoices`.
- Code lists: `invoice-types`, `vat-categories`, `vatex-codes`, `payment-means`, `scheme-ids`, `unit-codes`, `countries`, `note-types`, `currency-codes`, `rejection-reason-codes`, `action-codes`, `document-reference-codes`, `profile-ids`.
- Document-type templates: per-document RTF / XSL / burst-key / routing / processing-type bindings.
- API connector templates with placeholder substitution (`{{username}}`, `{{token}}`, `{{content}}`, …) and pluggable auth (`NONE`, `BASIC`, `BEARER`, `API_KEY`, `OAUTH2`).
- Per-company `e-invoicing-{kco}` overrides.

### Authentication & RBAC

- Built-in user / role / session tables (`F564250–F564252`).
- **PBKDF2-HMAC-SHA256** password hashes, force-password-change on first login, per-role page allow-list and per-role company filter.
- Toggleable via `authEnabled` in `global` (off → no login).
- Default `admin` (full) and `viewer` (read-only subset) roles bootstrapped on Initialize Database.

### Background scheduler

Driven from `global.fetch*Interval` (minutes — 0 disables):

- `fetchImportInterval` — periodic PA import-status polling.
- `fetchStatusInterval` — periodic PA lifecycle retrieval.
- `fetchAll.N.{interval,label,params}` — multiple batch document-processing jobs.

### Embedded HTTP API

A minimal REST + static file server (`com.sun.net.httpserver`) hosts the React bundle at `/` and exposes `/api/*` for invoices, templates, fetch / extract, validation, file system, license, packaging, authentication, and OpenAPI documentation at `/api/docs`.

### Email & i18n

- SMTP send (TLS / SSL) with per-invoice PDF attachment.
- Full English / French translations across the UI.

### Licensing

- RS256-signed JWT licenses verified at runtime against a bundled PEM public key — `full` (all features) or `restricted` (read-only views) modes.
