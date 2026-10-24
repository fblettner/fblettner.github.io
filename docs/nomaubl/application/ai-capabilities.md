---
title: AI Capabilities
description: "The NomaUBL AI assistant — a chat panel that knows the page and the invoice you are on, answers from the NomaUBL documentation, from the generated documentation of the instance and from its data (invoice dossier, period figures, backlog, lifecycle, validation errors, server log, integrity checks, e-directory), follows diagnostic playbooks, proposes follow-ups, and only reads."
keywords: [NomaUBL, AI assistant, Claude, tool use, context, suggestions, follow-ups, playbooks, search_docs, invoice_dossier, period_figures, instance_docs, server_log, lifecycle_history, validation_errors, Sonnet, Opus, Haiku, JD Edwards, SAP, NetSuite, custom ERP]
---

# AI Capabilities

The **AI Assistant** is a chat panel embedded in NomaUBL. It answers three kinds of questions:

- *How does the product work?* — from the NomaUBL documentation, indexed by the server, with the title and the link of the page it used.
- *How is this instance set up?* — from the [implementation report](./implementation-report.md) generated from the configuration of the instance: documents, mappings, rules, jobs, roles.
- *What is the state of my data?* — from the database, in **read-only** mode: one invoice in full, the figures of a period, the backlog, the errors, the server log, the integrity checks.

The assistant knows **the page you are on and the invoice you have open**, so *"why is this invoice refused?"* needs no number typed by hand. Replies stream as the model writes them; every tool call appears as a pill with the filters used; each reply ends with **follow-up buttons**. The assistant works in French or English and follows the language of the question.

---

## Opening the assistant

- Click **✦ AI Assistant** at the right end of the top bar. The panel opens as a drawer beside the page; it stays usable while an invoice window is open.
- Press **Enter** to send, **Shift+Enter** for a new line, **■** to stop a reply in progress.
- **The conversation is kept** when the panel is closed or the page reloaded (the last 40 messages, in the browser). **+ New chat** starts a fresh one.
- **Opening another invoice starts a new conversation**: the previous exchange was about another invoice and would mislead the model.

---

## At a glance

<svg viewBox="0 0 1000 430" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ai-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ai-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ai-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="300" y="20" width="400" height="390" rx="14" fill="url(#ai-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="318" y="48" fill="#c084fc" fontSize="13" fontFamily="system-ui, sans-serif">✦</text>
  <text x="336" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">AI Assistant</text>
  <rect x="522" y="32" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="532" y="46.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Default ▾</text>
  <rect x="618" y="32" width="28" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="632.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="652" y="32" width="28" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="666.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <line x1="300" y1="66" x2="700" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="318" y="84" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Context:</text>
  <text x="372" y="84" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">invoices</text>
  <rect x="430" y="72" width="123" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="491.5" y="84.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🧾 F2026-1203 · 210  ×</text>
  <line x1="300" y1="98" x2="700" y2="98" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="112" width="220" height="26" rx="10" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="572.0" y="129" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Why is this invoice in this status?</text>
  <rect x="318" y="148" width="184" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="410.0" y="160.2" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">🧭 load_playbook · refused-invoice</text>
  <rect x="318" y="172" width="184" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="410.0" y="184.2" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">🧾 invoice_dossier · 1203 RI 00001</text>
  <rect x="318" y="198" width="364" height="104" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="330" y="220" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">Invoice F2026-1203 was refused by the buyer</text>
  <text x="330" y="236" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">(status 210) on 2026-10-22, reason PU_ERR —</text>
  <text x="330" y="252" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">incorrect unit prices.</text>
  <text x="330" y="274" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Next step: issue an internal credit note,</text>
  <text x="330" y="292" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">then a corrected invoice.   📋 Copy</text>
  <rect x="318" y="314" width="113" height="22" rx="11.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="374.5" y="328.2" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Show its lifecycle</text>
  <rect x="437" y="314" width="156" height="22" rx="11.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="515.0" y="328.2" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Other refusals this month?</text>
  <line x1="300" y1="350" x2="700" y2="350" stroke="#1f2937" strokeWidth="1"/>
  <rect x="318" y="362" width="324" height="28" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="328" y="379.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Ask about this invoice, a setting, an error…</text>
  <rect x="648" y="362" width="34" height="28" rx="5" fill="url(#ai-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="665.0" y="379.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">➤</text>
  <rect x="20" y="70" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Context bar</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">page + open invoice · × to drop it</text>
  <line x1="240" y1="87.0" x2="430" y2="81" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ai-arrow)"/>
  <rect x="20" y="150" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tool pills</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each call with its filters</text>
  <line x1="240" y1="167.0" x2="318" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ai-arrow)"/>
  <rect x="20" y="314" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="329" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Follow-ups</text>
  <text x="30" y="342" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">proposed by the reply · one click</text>
  <line x1="240" y1="331.0" x2="318" y2="325" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ai-arrow)"/>
  <rect x="760" y="22" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="37" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">New chat</text>
  <text x="770" y="50" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the thread is kept otherwise</text>
  <line x1="760" y1="39.0" x2="632" y2="56" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ai-arrow)"/>
  <rect x="760" y="100" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Model picker</text>
  <text x="770" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Default · Sonnet · Opus · Fable · Haiku</text>
  <line x1="760" y1="117.0" x2="567" y2="56" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ai-arrow)"/>
  <rect x="760" y="220" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sourced, read-only reply</text>
  <text x="770" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">docs · instance · data</text>
  <line x1="760" y1="237.0" x2="682" y2="240" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ai-arrow)"/>
  <rect x="760" y="360" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enter to send</text>
  <text x="770" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">■ stops a reply in progress</text>
  <line x1="760" y1="377.0" x2="682" y2="376" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ai-arrow)"/>
</svg>

| Element | Role |
|---|---|
| **Model picker** | *Default* uses the model set by the administrator; the list offers Sonnet 5.5, Opus 5.5, Fable 5.1 and Haiku 4.5. The choice is remembered in the browser. |
| **+ New chat** | Clears the conversation. |
| **Context bar** | The page you are on and, when an invoice window is open, a chip with the invoice number and status. **×** on the chip leaves the invoice out of the current chat. |
| **Tool pills** | Each tool called, with the filters it received. |
| **📋 Copy** | Copies the reply as Markdown, without the follow-up line. |
| **Suggestions** | Above the input: the follow-ups proposed by the last reply, or, at the start of a chat, three questions suited to the page. |

---

## Context and suggestions

With every question the panel sends the **current page**, its **navigation filter** and the **open invoice** (document, type, company, number, status, customer). The assistant assumes the question is about them unless told otherwise.

At the start of a chat, the suggestions depend on the page:

| Where you are | Suggestions |
|---|---|
| An invoice window is open | *Why is this invoice in this status?* · *Summarise its lifecycle* · *What should I fix to resubmit it?* |
| IT dashboard, Server log, Processing log | *Any errors in the server log today?* · *Is the instance healthy?* · *Which invoices failed this week and why?* |
| Dashboard, E-Invoicing | *Give me this month's invoice summary* · *Which invoices await an action and what to do?* · *Which invoices failed this week and why?* |
| Reports, E-Reporting | *Give me this month's invoice summary* · *Which invoices await an action and what to do?* · *Which documents are sent to the platform?* |
| Settings, Roles, Users, Developer, Documents, Notification rules, Actions, Scheduled jobs | *Which documents are sent to the platform?* · *Which notification rules are active?* · *What changed in the last release?* |
| Any other page | *Give me this month's invoice summary* · *What to do with an invoice refused by the customer?* · *Which documents are sent to the platform?* |

Every reply ends with **one to three follow-ups** — the natural answer to a question the assistant asked, the next check, or a deeper question. They replace the suggestions; one click sends them.

---

## What the assistant uses

### Documentation

| Tool | Pill | Use |
|---|---|---|
| **`search_docs`** | 📚 | Searches the NomaUBL documentation, indexed by the server from the site's full-text export (`llms-full.txt`); returns the best pages with title, URL and passage. Called first for any product question. |
| **`read_doc_page`** | 📖 | Reads one page found by `search_docs`, in windows of 12,000 characters for long pages. |
| **`list_doc_pages`** | 📑 | The table of contents of the documentation, when the search finds nothing relevant. |
| **`instance_docs`** | 🔍 | The [implementation report](./implementation-report.md) of this instance: table of contents, one section, or a search across sections. Called first for any question about how *this* instance is configured. |

The assistant quotes the page it used and gives its link. It never invents a setting, a status code or a URL: when the documentation does not cover a point, it says so.

### Data of the instance

| Tool | Pill | What it returns |
|---|---|---|
| **`invoice_dossier`** | 🧾 | Everything about one invoice in one call: header (status, customer, amounts, dates, PA identifier), lines, VAT breakdown, validation errors and the full lifecycle with the PA reasons. |
| **`list_invoices`** | 🧾 | Up to 50 invoices filtered on status, company, transaction type (B2B / B2BINT / B2C / B2G / OUTOFSCOPE), customer, invoice number (BT-1) and issue dates. |
| **`lifecycle_history`** | 🕘 | Every status event of an invoice, with the PA rejection reason, expected action and status note. |
| **`validation_errors`** | ⚠️ | The validation errors of an invoice (level, source, rule, message), as in [Integration errors](./diagnostics/integration-errors.md). |
| **`period_figures`** | 🔍 | The summary of a period from the [audit report](./audit-report.md): indicators with the previous period and the variation, the breakdown of processed invoices, the findings, and the backlog across all periods (by status, company and age). Default: the current month to date. |
| **`dashboard_overview`** | 📊 | The counters of the [Dashboard](./dashboard.md) for a date range. |
| **`tech_dashboard`** | 🩺 | The health of the instance, as on the [IT dashboard](./tech-dashboard.md): JVM, scheduled jobs and their last runs, send failures, waiting invoices, configuration issues, table sizes. |
| **`server_log`** | 📜 | The end of the [server log](./diagnostics/server-log.md), newest first, filtered on level, module and text. |
| **`integrity_checks`** | 🔎 | The configured [integrity checks](../configuration/system/integrity-reports.md) and, for one check, its result on a date range. |
| **`list_ereports`** | 🔍 | Up to 50 e-reporting runs filtered on flow (10.1 / 10.3), company and status. |
| **`explain_status_code`** | 🏷️ | The tag and the FR / EN labels of an invoice or e-reporting status code. |
| **`reason_codes`** | 📋 | The PA rejection reasons and expected actions with their labels. |
| **`edirectory_lookup`** | 🏢 | A company in the [e-directory](./edirectory.md) by SIREN, SIRET or name: legal data and routing lines. |
| **`template_settings`** | ⚙️ | The settings of one template, secrets masked. Requires the *Settings access* feature. |

The assistant also receives the live **status catalogue**, so *"en litige"*, *"refused"* or *"awaiting deposit"* map to the right code.

The data tools follow the rights of the signed-in user: the company visibility of the role applies to the invoices, figures and backlog the assistant reads.

### Playbooks

For a diagnosis, the assistant first loads the matching **playbook** (🧭 `load_playbook`), then follows its steps. The built-in playbooks are:

| Playbook | Diagnosis |
|---|---|
| `refused-invoice` | An invoice awaiting an action (213, 9905, 9907, 9904, 207, 208, 210, 221, 206): what was refused, what to correct, how to resubmit — or, for a refusal, the internal credit note to issue. |
| `backlog` | What still awaits an action, for one company or all: to fix and resend, answer to the buyer expected, pending at the platform, deposited but not transmitted. |
| `missing-invoice` | An invoice or a JDE print job that did not reach NomaUBL: which step failed and what to run. |
| `ereporting-error` | A failed e-reporting run (9956 to 9959): the offending data and the correction. |
| `status-not-updated` | An invoice that keeps an old status although the platform moved on. |

The administrator can add playbooks or replace a built-in one under the same name, from the *Custom playbooks* field of the [global settings](../configuration/system/global.md) (*AI* tab).

At most **10 tool calls** are chained for one question. When a tool fails, the assistant gives the tool, the input and the error.

---

## Conversation examples

### Diagnosing the open invoice

> **User** — *(invoice F2026-1203 open)* Why is this invoice in this status?
>
> 🧭 `load_playbook · refused-invoice` &nbsp; 🧾 `invoice_dossier · 1203 RI 00001`
>
> **AI Assistant** — Invoice **F2026-1203** was **refused by the buyer** (status 210) on 2026-10-22 with the reason `PU_ERR` — incorrect unit prices. A refusal requires an internal credit note: cancel the invoice with a credit note, then issue a corrected invoice.
>
> *Follow-ups:* `Show its lifecycle` · `Other refusals this month?`

### Summary of the month

> **User** — Give me this month's invoice summary
>
> 🔍 `period_figures · 2026-10-01 → 2026-10-24`
>
> **AI Assistant** — 1,240 invoices processed (+6 % on September), 1,180 deposited — deposit rate 95 %. 38 await an action: 22 to fix and resend, 16 awaiting an answer to the buyer. First-pass validation: 97 %.
>
> | Awaiting | Count | Oldest |
> |---|---|---|
> | 9905 — Validation failed | 14 | 6 days |
> | 213 — Rejected | 8 | 3 days |
> | 210 — Refused | 16 | 9 days |
>
> *Follow-ups:* `Detail the 9905 errors` · `Which companies are behind?`

### How the product works

> **User** — How do watched folders work?
>
> 📚 `search_docs · watched folders` &nbsp; 📖 `read_doc_page · …/management/watched-folders`
>
> **AI Assistant** — A watched folder is scanned on a schedule; each new file is processed with the document it is bound to… *(Source: Watched Folders — link)*

---

## What the assistant cannot do

- **Change anything.** It only reads. Asked to resend, reprocess or change a setting, it says where in the application to do it.
- **Go beyond your rights.** The data tools apply the company visibility of your role, and the settings require the *Settings access* feature.
- **Read files.** The chat is text-only; a short XML pasted in the question is read, a file cannot be attached.

The administrator sets the API key, the default model, the documentation source, the custom playbooks, the system prompt and the tools from the *AI* tab of the [global settings](../configuration/system/global.md).

---

## Tips & best practices

- **Open the invoice, then ask.** The context chip gives the assistant the invoice; there is nothing to type. Use **×** on the chip to ask a general question without leaving the window.
- **Ask for a period summary in plain words.** *"This month"*, *"last quarter"*, *"our deposit rate"* — the assistant reads the figures of the audit report.
- **Click the follow-ups.** They carry on the diagnosis with the right next check.
- **Start a new chat for a new subject.** A long thread on another topic weighs on the answers.
- **Pick a heavier model for a long diagnosis**, the default for everyday questions.
- **Treat the panel as an external service.** Questions and tool results are sent to the model provider; avoid pasting personal data that the screens do not already show.
- **For exhaustive lists, use the dedicated pages.** The assistant characterises a problem; the [E-Invoicing](./invoices.md) list, [Diagnostics](./diagnostics/overview.md) and [Reports](./reports.md) give the full picture.
