---
title: Report templates
description: "Liberty Next → Insight → Report templates: reports written by the operators without code — a query of a connector, parameters asked at run time and a Jinja markdown template — tested in the editor on real rows, then run from the Reports page as PDF or markdown."
keywords: [Liberty Next, report templates, custom report, Jinja, markdown, PDF, Reports page, parameters, connector query, reports.toml]
---

# Report templates

A **report template** is a report written by an operator without code: a query of a connector provides the rows, parameters are asked when the report runs, and a Jinja markdown template turns the rows into the document. Once saved, the report appears on the **Reports** page (`/reports`) beside the reports the applications ship, and downloads as PDF or markdown.

Open it from **Liberty Next → Insight → Report templates** (superusers).

---

## At a glance

<svg viewBox="0 0 1200 572" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rpt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rpt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rpt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rpt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="538" rx="14" fill="url(#rpt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">New custom report</text>
  <line x1="221" y1="62" x2="979" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SLUG (URL SEGMENT)</text>
  <rect x="240" y="86" width="354" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">orders-summary</text>
  <text x="606" y="80" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TITLE</text>
  <rect x="606" y="86" width="354" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Orders summary</text>
  <text x="240" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATA CONNECTOR</text>
  <rect x="240" y="130" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="144.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">sales        ▾</text>
  <text x="606" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAMED QUERY</text>
  <rect x="606" y="130" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616" y="144.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">orders_by_status_get  ▾</text>
  <text x="240" y="168" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="240" y="174" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="188.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Open and closed orders, per status</text>
  <text x="240" y="212" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMETERS</text>
  <rect x="240" y="218" width="720" height="62" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="226" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="240.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">company</text>
  <rect x="396" y="226" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="406" y="240.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Company</text>
  <rect x="582" y="226" width="100" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="592" y="240.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">string        ▾</text>
  <rect x="692" y="232" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M694.5,237.5 L696.8,239.8 L700.8,235" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="709" y="241" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">required</text>
  <rect x="759.32" y="227" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="770.32" y="240.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="250" y="254" width="97" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="298.5" y="267.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add parameter</text>
  <text x="240" y="298" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JINJA MARKDOWN TEMPLATE</text>
  <text x="240" y="318" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Insert example:</text>
  <rect x="319.4" y="306" width="74" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="356.4" y="319.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Bullet list</text>
  <rect x="398.4" y="306" width="88" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="442.4" y="319.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Markdown table</text>
  <rect x="491.4" y="306" width="98" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="540.4" y="319.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouped sections</text>
  <rect x="594.4" y="306" width="93" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="640.9" y="319.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Summary + table</text>
  <rect x="695.4" y="306" width="121" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="755.9" y="319.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✦ Scaffold from query</text>
  <rect x="240" y="334" width="355.0" height="128" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="350" fill="#475569" fontSize="8" fontFamily="ui-monospace, monospace">1</text>
  <text x="266" y="350" fill="#4a9eff" fontSize="8.5" fontFamily="ui-monospace, monospace">## Summary</text>
  <text x="250" y="365" fill="#475569" fontSize="8" fontFamily="ui-monospace, monospace">2</text>
  <text x="266" y="365" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="250" y="380" fill="#475569" fontSize="8" fontFamily="ui-monospace, monospace">3</text>
  <text x="266" y="380" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">- Total rows: &#123;&#123; ctx.data.rows | length &#125;&#125;</text>
  <text x="250" y="395" fill="#475569" fontSize="8" fontFamily="ui-monospace, monospace">4</text>
  <text x="266" y="395" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="250" y="410" fill="#475569" fontSize="8" fontFamily="ui-monospace, monospace">5</text>
  <text x="266" y="410" fill="#fb923c" fontSize="8.5" fontFamily="ui-monospace, monospace">&#123;% for row in ctx.data.rows %&#125;</text>
  <text x="250" y="425" fill="#475569" fontSize="8" fontFamily="ui-monospace, monospace">6</text>
  <text x="266" y="425" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">- &#123;&#123; row.STATUS &#125;&#125; : &#123;&#123; row.N &#125;&#125;</text>
  <text x="250" y="440" fill="#475569" fontSize="8" fontFamily="ui-monospace, monospace">7</text>
  <text x="266" y="440" fill="#fb923c" fontSize="8.5" fontFamily="ui-monospace, monospace">&#123;% endfor %&#125;</text>
  <rect x="605.0" y="334" width="355.0" height="128" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="615.0" y="342" width="107" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="668.5" y="353.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Rendered 3 of 3 rows</text>
  <text x="946.0" y="354" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">✕</text>
  <text x="617.0" y="380" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Summary</text>
  <text x="619.0" y="400" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">• Total rows: 3</text>
  <text x="619.0" y="415" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">• Open : 98</text>
  <text x="619.0" y="430" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">• Closed : 3314</text>
  <text x="619.0" y="445" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">• Cancelled : 12</text>
  <text x="240" y="474" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEST PARAMETERS</text>
  <text x="240" y="496" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">company</text>
  <rect x="300" y="482" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="310" y="496.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">00001</text>
  <rect x="432" y="482" width="87" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="475.5" y="496.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Test render</text>
  <line x1="221" y1="514" x2="979" y2="514" stroke="#1f2937" strokeWidth="1"/>
  <rect x="896" y="524" width="64" height="22" rx="5" fill="url(#rpt-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="928.0" y="538.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="826" y="524" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="857.0" y="538.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Slug</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the report's address</text>
  <line x1="200" y1="97.0" x2="240" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpt-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Data</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a query of a connector</text>
  <line x1="200" y1="157.0" x2="240" y2="141" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpt-arrow)"/>
  <rect x="20" y="228" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="243" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Parameters</text>
  <text x="30" y="256" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">asked when the report runs</text>
  <line x1="200" y1="245.0" x2="250" y2="237" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpt-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Jinja markdown</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ctx.data.rows, ctx.params</text>
  <line x1="200" y1="397.0" x2="250" y2="384" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpt-arrow)"/>
  <rect x="1000" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Starters</text>
  <text x="1010" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">examples, or a table of the columns</text>
  <line x1="1000" y1="307.0" x2="812.4" y2="306" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpt-arrow)"/>
  <rect x="1000" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Preview</text>
  <text x="1010" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the template rendered on real rows</text>
  <line x1="1000" y1="397.0" x2="960.0" y2="394" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpt-arrow)"/>
  <rect x="1000" y="470" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="485" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Test render</text>
  <text x="1010" y="498" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">200 rows at most, nothing saved</text>
  <line x1="1000" y1="487.0" x2="519.52" y2="493" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpt-arrow)"/>
</svg>

---

## The list \{#list\}

The page shows the file the templates are saved in and how many there are, then one card per template: its title, its id (`custom:<slug>`) and the query it reads (`<connector>.<query>`), with **Edit** and **Delete** — a deletion is confirmed first. **New template** and **Reload config** are in the page header.

A save validates every template, writes them and refreshes the list of reports at once: no restart is needed.

---

## The editor \{#editor\}

**New template**, or **Edit** on a card, opens the window *New custom report* / *Edit custom report*.

| Field | Use |
|---|---|
| **Slug (URL segment)** | The report's id, part of its address: lowercase letters, digits, `-` and `_`. Unique among the templates. |
| **Title** | The headline on the Reports page and on the PDF cover. |
| **Data connector**, **Named query** | Where the rows come from: a query of a connector. Both are required. |
| **Description** | Shown under the title on the Reports page. |
| **Parameters** | One line per input the report needs at run time: a name, a label, a type (`string`, `int`, `float`, `bool`) and **required**. **Add parameter** adds one. The query receives the parameters by their name. |
| **Jinja markdown template** | The body of the report, in markdown with Jinja tags. |
| **Produced as** | **PDF** and / or **Text (Markdown)** — the formats the report is offered in; one at least stays ticked. |
| **PDF settings of this report** | What this report's PDF does differently from the installation's [PDF branding](./build/settings-app.md#branding) — see [below](#pdf). |

Closing the window with changes not saved asks first: *This report holds changes that are not saved. Close it and lose them?*

### A parameter's value, help and choices \{#params\}

Under its name, label, type and **required**, each parameter has a second line:

| Field | Use |
|---|---|
| **Default value** | The value the field starts with; *none* by default. |
| **Help** | The sentence shown under the field when the report is run — *The year the report covers*. |
| **Choices** | *none: a plain field*, or a dropdown whose choices come from: *A fixed list* — **The list**, one line per choice: the value, then `=` and what is shown (`EN = English`); *The connectors* of the installation; *The schemas of a database* — **Read from** a connector, or *the connector picked in "…"* another parameter; *The rows of a query* — **Read from**, **Query**, **Column of the value**, **Column shown**. |

Incomplete choices stop the save and name the parameter: *Parameter "company": pick the query its choices are read from.* Only what the kind of choices uses is saved.

### PDF settings \{#pdf\}

**PDF settings of this report** is a list of **setting** / value lines; the setting is picked among: **Title**, **Subtitle**, **Client**, **Author**, **Date**, **Version**, **Marked confidential (true / false)**, **Line above the title**, **Name on the cover**, **Reference on the cover**, **Header, left**, **Header, right**, **Footer, left**, **Main colour**, **Light colour**. A setting left out keeps the installation's branding. The list is shown while **PDF** is ticked.

### Writing the template \{#template\}

The template reads a context, `ctx`:

| Name | Content |
|---|---|
| `ctx.data.rows` | The rows of the query, each a set of columns: `{{ row.STATUS }}`. |
| `ctx.data.columns` | The query's columns, with their name and label. |
| `ctx.params` | The values the user entered for the parameters. |

The standard Jinja filters are available (`length`, `join`, `sort`, `selectattr`…). The template runs in a closed environment: nothing outside this context is reachable. The editor completes the column names of the query as you type.

Above the editor, **Insert example** offers four starters — **Bullet list**, **Markdown table**, **Grouped sections**, **Summary + table** — each replacing the body after a confirmation. **Scaffold from query** writes a markdown table of every column the query returns; it waits for a connector and a query.

### Test render \{#test\}

Under the editor, **Test parameters** takes a value per parameter, and **Test render** runs the query with them and renders the template beside the editor — on 200 rows at most, nothing saved. The head of the preview says how many rows were rendered (*Rendered 3 of 3 rows*) or that the render failed, with the reason. When the query returns more rows, the preview says so; the real report holds every row.

---

## Running a report \{#run\}

The **Reports** page lists the reports the user may run, operator-written ones included. **Run** opens a form with the parameters and the format (PDF or markdown); **Run & download** produces the file. The PDF follows the install's branding — [Liberty Next → Administer → App → PDF branding](./build/settings-app.md#branding).

---

## Access \{#access\}

- Writing templates: superusers, in Liberty Next → Insight → Report templates.
- Running them: a role that holds `reports:custom:*:run` sees every operator-written report on the Reports page — entered as a pattern in the role editor, see [Roles and permissions](./build/secure/roles-and-permissions.md).
- The query runs under the user's data scope, as everywhere else.

---

## Tips & best practices \{#tips\}

- Write one query per report, returning exactly the columns the template prints; let the query do the sorting and the totals.
- Start from **Scaffold from query** or an example, then **Test render** with realistic parameters before saving.
- Give every required input a parameter rather than a constant in the query: the same template then serves every company or period.
