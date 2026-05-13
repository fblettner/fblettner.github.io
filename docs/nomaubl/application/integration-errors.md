---
title: Integration Errors
description: "Failure-analysis tool over the validation table — by-rule cards ranking the top failing rules and a by-event flat table for row-level investigation. Each rule code is decorated with the human description extracted from the bundled Schematron files. Filter by category (UBL / Integration), severity, document key; the Unmatched only checkbox keeps the original orphan-error view one click away."
keywords: [NomaUBL, integration errors, validation, F564236, by-rule, by-event, ValidationRuleCatalog, Schematron, XSD, UVSRCL, FATAL, ERROR, WARNING, INFO, JD Edwards, SAP, NetSuite, custom ERP]
---

# Integration Errors

The **Integration Errors** screen is the **failure-analysis tool** over the validation table (`F564236`). It surfaces every entry recorded by the validation pipeline — from XSD / Schematron rule failures to lifecycle-level integration errors (PDF, PA, DB, …) — and presents them through two complementary views:

- **by-rule** — ranked cards grouped by `(rule, source)`, each card showing how many invoices the rule has touched plus per-severity chips. The fastest way to spot *which rule is biting hardest right now*.
- **by-event** — flat table of every individual error event, with severity, source, rule, message, document triplet and the invoice's current status. The right place to investigate one specific row.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. The errors come from the validation pipeline, which itself works on the generated UBL, so the source format is transparent here.

:::info[Refreshed in 2026.05.4]
Previously the page was the orphan-error view only — a flat table of `F564236` rows that had no matching invoice header. It is now a proper failure-analysis tool: by-rule + by-event toggle, a category filter (UBL vs Integration / lifecycle), human descriptions extracted from the bundled Schematron files, and an `Unmatched only` checkbox that keeps the orphan-error behaviour one click away. Default view is *all errors* — orphans are no longer the main filter.
:::

---

## Opening the page

- Sidebar → **Application → Integration Errors**.
- From the [Dashboard](./dashboard.md): the **Top failing rules** widget's *View all* link opens this page on the **by-rule** tab; clicking a specific rule lands on the **by-event** tab with that rule pre-applied as a filter chip.

---

## At a glance

<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ie2-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ie2-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ie2-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="570" rx="14" fill="url(#ie2-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Integration Errors</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="160" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <rect x="240" y="84" width="80" height="28" rx="6" fill="url(#ie2-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="280" y="102" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">By rule</text>
  <text x="360" y="102" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">By event</text>

  <rect x="416" y="84" width="146" height="28" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="424" y="102" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">All sources ▾</text>

  <rect x="568" y="84" width="120" height="28" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="576" y="102" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">☐ Unmatched only</text>

  <rect x="700" y="84" width="80" height="28" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="740" y="102" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">↻ Refresh</text>

  <rect x="240" y="124" width="48" height="22" rx="11" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="139" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">All</text>
  <rect x="294" y="124" width="60" height="22" rx="11" fill="#3d0a0a" stroke="#7f1d1d" strokeWidth="1.5"/>
  <text x="324" y="139" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">FATAL</text>
  <rect x="360" y="124" width="64" height="22" rx="11" fill="rgba(248,113,113,0.10)" stroke="#f87171" strokeWidth="1"/>
  <text x="392" y="139" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">ERROR</text>
  <rect x="430" y="124" width="80" height="22" rx="11" fill="rgba(251,146,60,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="470" y="139" fill="#fb923c" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">WARNING</text>
  <rect x="516" y="124" width="56" height="22" rx="11" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="544" y="139" fill="#60a5fa" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">INFO</text>

  <rect x="240" y="160" width="266" height="138" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="180" fill="#cbd5e1" fontSize="13" fontFamily="ui-monospace, monospace" fontWeight="700">BR-CL-23</text>
  <text x="252" y="194" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">EN16931</text>
  <text x="490" y="180" fill="#e2e8f0" fontSize="20" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="end">52</text>
  <text x="252" y="218" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">CurrencyCode must use the ISO 4217</text>
  <text x="252" y="232" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">three-character code list.</text>
  <rect x="252" y="254" width="62" height="22" rx="11" fill="rgba(248,113,113,0.10)" stroke="#f87171" strokeWidth="1"/>
  <text x="283" y="269" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">ERROR · 50</text>
  <rect x="320" y="254" width="80" height="22" rx="11" fill="rgba(251,146,60,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="360" y="269" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">WARNING · 2</text>

  <rect x="522" y="160" width="266" height="138" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="534" y="180" fill="#cbd5e1" fontSize="13" fontFamily="ui-monospace, monospace" fontWeight="700">BR-FR-12</text>
  <text x="534" y="194" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">CIUSFR</text>
  <text x="772" y="180" fill="#e2e8f0" fontSize="20" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="end">38</text>
  <text x="534" y="218" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SIRET BT-46 must be present on a</text>
  <text x="534" y="232" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">French B2B invoice.</text>
  <rect x="534" y="254" width="62" height="22" rx="11" fill="rgba(248,113,113,0.10)" stroke="#f87171" strokeWidth="1"/>
  <text x="565" y="269" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">ERROR · 38</text>

  <rect x="240" y="316" width="266" height="138" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="336" fill="#cbd5e1" fontSize="13" fontFamily="ui-monospace, monospace" fontWeight="700">PA_SEND</text>
  <text x="252" y="350" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">INTEG</text>
  <text x="490" y="336" fill="#e2e8f0" fontSize="20" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="end">14</text>
  <text x="252" y="374" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">PA submission rejected at HTTP</text>
  <text x="252" y="388" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">level (timeout / 4xx / 5xx).</text>
  <rect x="252" y="410" width="62" height="22" rx="11" fill="rgba(248,113,113,0.10)" stroke="#f87171" strokeWidth="1"/>
  <text x="283" y="425" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">ERROR · 14</text>

  <rect x="522" y="316" width="266" height="138" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="534" y="336" fill="#cbd5e1" fontSize="13" fontFamily="ui-monospace, monospace" fontWeight="700">UBL_CREATION</text>
  <text x="534" y="350" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">INTEG</text>
  <text x="772" y="336" fill="#e2e8f0" fontSize="20" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="end">9</text>
  <text x="534" y="374" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">XSL transform did not produce</text>
  <text x="534" y="388" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">a parseable UBL document.</text>
  <rect x="534" y="410" width="62" height="22" rx="11" fill="#3d0a0a" stroke="#7f1d1d" strokeWidth="1.5"/>
  <text x="565" y="425" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">FATAL · 9</text>

  <text x="240" y="490" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">By-event view (preview)</text>
  <line x1="240" y1="498" x2="788" y2="498" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="514" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">SEV  · DOC   · DCT · KCO   · SEQN · SOURCE   · RULE       · MESSAGE</text>
  <line x1="240" y1="520" x2="788" y2="520" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="536" fill="#f87171" fontSize="9" fontFamily="ui-monospace, monospace">ERROR · 12345 · RI  · 00070 · 7    · CIUSFR   · BR-FR-12   · SIRET missing</text>
  <text x="240" y="550" fill="#f87171" fontSize="9" fontFamily="ui-monospace, monospace">ERROR · 12345 · RI  · 00070 · 12   · EN16931  · BR-CL-23   · CurrencyCode invalid</text>
  <text x="240" y="564" fill="#f87171" fontSize="9" fontFamily="ui-monospace, monospace">FATAL · 12399 · RI  · 00070 · 1    · INTEG    · UBL_CREATION · XSL transform threw</text>
  <text x="240" y="578" fill="#fb923c" fontSize="9" fontFamily="ui-monospace, monospace">WARNING · 12345 · RI · 00070 · 18   · CIUSFR   · BR-FR-09 · BT-49 missing on cred…</text>

  <rect x="20" y="84" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">View toggle</text>
  <text x="30" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">By rule / By event</text>
  <line x1="200" y1="100" x2="240" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ie2-arrow)"/>

  <rect x="820" y="84" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Category filter</text>
  <text x="830" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">UBL vs Integration</text>
  <line x1="820" y1="100" x2="688" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ie2-arrow)"/>

  <rect x="20" y="138" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="153" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Severity chips</text>
  <text x="30" y="166" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">FATAL / ERROR / WARN / INFO</text>
  <line x1="200" y1="154" x2="240" y2="135" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ie2-arrow)"/>

  <rect x="20" y="218" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="233" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rule card</text>
  <text x="30" y="246" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">code · source · count · severity</text>
  <line x1="200" y1="234" x2="240" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ie2-arrow)"/>

  <rect x="820" y="200" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rule description</text>
  <text x="830" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">extracted from .sch files</text>
  <line x1="820" y1="216" x2="788" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ie2-arrow)"/>

  <rect x="820" y="320" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lifecycle codes</text>
  <text x="830" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">PA_SEND, UBL_CREATION, …</text>
  <line x1="820" y1="336" x2="788" y2="336" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ie2-arrow)"/>

  <rect x="20" y="528" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="543" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Click → invoice modal</text>
  <text x="30" y="556" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens on the History tab</text>
  <line x1="200" y1="544" x2="240" y2="544" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ie2-arrow)"/>
</svg>

The rule cards are sized via CSS `auto-fill` instead of `auto-fit`, so a short last row no longer stretches a single card to the full row width.

---

## Toolbar

The same toolbar drives both views.

| Control | Behaviour |
|---|---|
| **View toggle** | *By rule* (default after a deep-link from the dashboard) or *By event*. Other filters carry across — switching tabs keeps the search, severity and category filters intact. |
| **Search** | Substring match against `DOC`, `DCT`, `KCO` and the message text. Server-side, debounced. |
| **Category** | *All sources* (default), *UBL validation* (Schematron / XSD rules — `UVSRCL IN ('EN16931', 'CIUSFR', 'FREXTIC', 'CPRO', 'XSD', 'UBL')`), *Integration / lifecycle* (everything else — runtime errors emitted by the dispatcher: PDF, PA, DB, …). |
| **Severity chips** | *All* / *FATAL* / *ERROR* / *WARNING* / *INFO*. One severity at a time; clicking the active chip resets to *All*. |
| **`Unmatched only`** *(by-event only)* | Restores the orphan-only behaviour of the previous version — keeps just the rows that have no joined invoice header. Off by default; one click away when needed. |
| **Refresh** | Re-runs the current query. |

### Advanced Filters *(2026.05.10)*

A collapsible **Advanced Filters** panel below the toolbar exposes one row per filterable column from the active [List Views](../configuration/list-views.md) spec (`view.integration-errors`) — with per-column operator pickers (`contains`, `equals`, `≠`, `<`, `≤`, `>`, `≥`, `between`, `empty`, `not empty`). Edits stay in draft until **Run** commits them.

The Tech Dashboard's *Recent errors* drill-through also surfaces here: when the dashboard passes `{ doc, dct, kco }`, a chip shows the active drill-through filter and offers a one-click `×` clear. Useful when the panel is collapsed and the filter would otherwise stay invisible.

---

## By-rule view

Each card groups every error event sharing the same `(rule, source)` pair and shows:

| Element | Source | Meaning |
|---|---|---|
| **Rule code** *(top left)* | `UVY56RULE` | The rule identifier — e.g. `BR-CL-23`, `BR-FR-12`, `UBL_CREATION`. |
| **Source** *(below the code)* | `UVSRCL` | The validation engine — `EN16931`, `CIUSFR`, `FREXTIC`, `CPRO`, `XSD`, `UBL`, or one of the integration buckets (`INTEG`, `PROCESS`, `XSL`, `PDF`, `PA`, `DB`, …). |
| **Description** *(secondary line)* | `ValidationRuleCatalog` | Human description, in the user's UI language when available. |
| **Count** *(top right)* | aggregated `COUNT(DISTINCT doc, dct, kco)` | Number of invoices touched by this rule in the active filters. |
| **Severity chips** *(bottom)* | aggregated `(level, count)` | Per-severity breakdown — `FATAL · n`, `ERROR · n`, `WARNING · n`, `INFO · n`. |

Cards are sorted by descending count; clicking one switches to the **by-event** view with that rule pre-applied as a filter chip.

### Where the descriptions come from

In 2026.05.4 the page started decorating rule codes with the **human description** of each rule, so a code like `BR-CL-23` no longer needs to be cross-referenced against an external Schematron file.

A new `ValidationRuleCatalog` parses the bundled `.sch` files at first call and extracts a `{rule id → description}` map by matching `[<id>]<separator><description>` lines inside each `<assert>` block. The separator is permissive (`-` or `:`, optional surrounding whitespace) and covers the three formats in the four bundled schematrons:

| Schematron | Format | Example |
|---|---|---|
| EN 16931 | `[<id>]-<description>` *(no spaces)* | `[BR-CL-23]-Currency code must follow ISO 4217.` |
| FREXT-IC | `[<id>] - <description>` *(spaces)* | `[BR-FREXT-IC-08] - SIRET must be present on B2B.` |
| CIUS-FR | `[<id>] : <description>` *(colon, plus FNFE-MPE convention)* | `[BR-FR-23/BT-49] : Document is missing the order reference.` |

The catalogue also seeds **twelve lifecycle / integration rule codes** with French descriptions: `UBL_CREATION`, `DB_INSERT`, `DB_UPDATE`, `PA_SEND`, `PA_TIMEOUT`, `PDF_RENDER`, `XSL_TRANSFORM`, `EMAIL_SEND`, `NOTIFY_DISPATCH`, `STATUS_TRANSITION`, `EXTRACT_BIP`, `EXTRACT_FTP` — these are the codes emitted by `ErrorCatalog` when a runtime step fails.

The merged catalogue is exposed on `GET /api/integration-errors/catalog`; the frontend caches it once per page load via the `useRuleCatalog` hook.

:::warning[Known gap]
The `BR-FR-CPRO` schematron's 34 asserts have no `id` attribute, so the validator records empty rule codes for them — the corresponding events appear in the by-event view with an empty *Rule* column and are absent from the by-rule cards. The schematron itself works; only the rule labels are missing.
:::

---

## By-event view

A flat table, one row per validation event. The default sort is by document key ascending (so the same invoice's rows stay grouped) and pagination defaults to 50 rows per page.

Since 2026.05.10 the table renders through **DataTableV2** in spec-driven mode: the column shape comes from the `view.integration-errors` spec on `db-nomaubl` and the bundled default ships every column listed below. Adding columns from the catalog or trimming the filter allow-list is done from the [List Views](../configuration/list-views.md) editor.

| Column | Source | Description |
|---|---|---|
| **Severity** | `UVY56LEVEL` | Coloured badge — *FATAL* / *ERROR* / *WARNING* / *INFO*. |
| **Date** *(2026.05.9)* | `UVUPMJ` + `UVUPMT` | Date and time the event was recorded. Same time context as the Tech Dashboard's recent-errors card, so triage no longer requires opening a row first. |
| **Doc** | `UVDOC` | Document number from the source data. |
| **Dct** | `UVDCT` | Document type. |
| **Kco** | `UVKCO` | Company code. |
| **Seq** | `UVSEQN` | Sequence number — the order in which validation rules fired during the failed run. |
| **Source** | `UVSRCL` | Validation engine — `EN16931`, `CIUSFR`, `FREXTIC`, `CPRO`, `XSD`, `UBL`, or an integration bucket. |
| **Rule** | `UVY56RULE` | Rule identifier. The cell shows the code + the description below it (and as a tooltip on hover). |
| **Invoice now** | `F564231` lookup | The invoice's *current* status, joined live so you see whether the failure has been re-processed. Empty when no invoice header exists (orphan error). |
| **Customer** | `F564231.UHALPH` | Customer name when the invoice exists. Helpful when triaging by counterparty. |

:::info[Message column dropped — 2026.05.9]
The Message column was removed in 2026.05.9. Schematron / XPath messages were too long for a grid cell (the column was eating ~720 px and still cut off context), so the full message now lives in a **detail modal** opened by clicking the row. The modal also splits the CTC-FR debug context (`Num Fact: …, Code: S, rate: 20, …`) from the French explanation — the explanation becomes the main line, the debug fields render as a small monospace grid underneath.
:::

### Clicking a row

The row click is **always actionable** since 2026.05.9 — both matched and orphan rows open a modal:

- **Matched rows** (where the invoice exists in `F564231`) open the full [E-Invoicing](./invoices.md) detail modal on the **History tab** — same modal the inbox row click on [Notifications](./notifications.md) uses. The lifecycle, the validation errors and the PA payload sit one tab away.
- **Unmatched / orphan rows** open the new **`ErrorDetailModal`** — a focused view sized to a single validation event with no surrounding invoice. It shows: the level badge, the rule identifier + description (resolved through `useRuleCatalog`), the source, the date, the `doc / dct / kco` triplet (with a *no matching invoice in F564231* hint), the customer when known, and the full message rendered through the same `splitValidationMessage` helper as the matched-row modal.

### `Unmatched only`

A small checkbox in the toolbar — `Unmatched only` — restores the previous version's behaviour: only the rows that have no joined invoice header. These are *orphan* errors, typically transformation failures that prevented the invoice from ever being persisted (the XSL produced something the UBL validator could not parse, or a `FATAL` aborted the pipeline before the database insert).

The default view shows *every* error, matched or not. Switching the checkbox on is one click; nothing else is needed.

---

## How to investigate

The page is read-only — the actual fix happens upstream (source data, template, XSL, connector) and a re-run clears the row. A typical investigation:

1. **Open the by-rule view first.** Look at the top three cards — one rule with hundreds of hits is the obvious starting point.
2. **Scope the category.** *UBL validation* surfaces only Schematron / XSD events; *Integration / lifecycle* surfaces only the runtime errors the dispatcher emits. Mixing them only helps when you are looking for a specific document.
3. **Click the rule** to switch to *By event* with the filter chip pre-applied. The list now shows every invoice that hit the rule.
4. **Click a row** to open the invoice's *History* tab. The validation errors, the lifecycle and the PA payload all sit there.
5. **Read the message + the rule description.** The description gives the *what*; the message gives the *where* (which field, which line). For Schematron rules, cross-reference with the [Reason Codes](../references/reason-codes.mdx) page when needed.
6. **Open the source XML in *UBL Tools → XML Viewer*** for the `(doc, dct, kco)` triplet — the file lives in `dirInput/<template>/`. Reading the source confirms whether the failure is data-side (missing field) or template-side (XSL bug).
7. **Re-run the pipeline once the source is fixed.** Use [Process Document](../processing/document.md) on the corrected file. Once the invoice is successfully persisted, *Invoice now* shifts on this page from empty to the new status, and the row stops being orphan.

---

## Tips & best practices

- **Start with by-rule.** A single rule with hundreds of hits points to one upstream change (a renamed field, a stale tax code, a regenerated counterparty list). Fixing the rule typically clears most rows on this page in one re-run.
- **Use the category filter to triage.** *UBL validation* failures are usually template / XSL bugs; *Integration / lifecycle* errors are usually environment / connector issues (PA outage, SMTP timeout, DB lock). Knowing which side you are on cuts the investigation time in half.
- **Watch FATAL first.** A non-zero FATAL means the pipeline aborted — the invoice was never persisted at all and only the orphan row exists. ERROR rows mean the invoice may have made it partway and the regular *E-Invoicing* page also carries something for them.
- **`Unmatched only` is the legacy view.** The previous version of this page only ever showed orphans. Toggle the checkbox on to restore that behaviour for compatibility — the by-rule view, the category filter and the rule descriptions all keep working.
- **Errors auto-disappear after a successful re-import.** Once the invoice header is created or updated, the row's *Invoice now* column reflects the new status. Orphan rows (no header at all) similarly stop being orphan once a successful run lands. The underlying entry stays in `F564236` for audit, but it leaves the *unmatched* set.
- **Deep-links from the dashboard save a step.** The *Top failing rules* widget on the [Dashboard](./dashboard.md) lands here pre-filtered — a one-click drill from "this rule is biting" to "show me the events".
