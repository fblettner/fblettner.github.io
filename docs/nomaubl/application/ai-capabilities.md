---
title: AI Capabilities
description: "Embedded AI assistant for NomaUBL — answers questions about how the product works using the public documentation, and answers questions about your own data (invoices, statuses, validation errors, e-reporting runs) through a small set of read-only tools. Streams replies, surfaces every tool call, supports French and English."
keywords: [NomaUBL, AI assistant, Claude, agentic, tool use, list_invoices, list_ereports, explain_status_code, validation_errors, web_fetch, JD Edwards, SAP, NetSuite, custom ERP]
---

# AI Capabilities

The **AI Assistant** is a chat panel embedded in NomaUBL. Two questions it answers well:

- *How does the product work?* — it consults the public documentation at `docs.nomana-it.fr` and replies with a sourced summary.
- *What is the state of my data?* — it queries the NomaUBL database in **read-only** mode and replies with the matching rows: invoices, statuses, validation errors, e-reporting runs.

Replies stream live as the model writes them; every tool call appears inline as a small pill so the actions taken on the user's behalf remain visible. The assistant works in French or English — it follows the language of the question.

---

## Opening the assistant

- Click the **✦ AI Assistant** entry in the navbar (top-right, purple gradient pill). The panel slides in as a side drawer that shrinks the workspace.
- Pick a model from the picker at the top of the panel. **Default** is the right choice for everyday questions; heavier models (Sonnet, Opus) give longer reasoning at a higher API cost.
- Press **Enter** to send a question, **Shift+Enter** for a newline, **■** to abort an in-flight reply.
- Closing the panel resets the conversation — the assistant has no memory across sessions.

---

## At a glance

<svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="aichat-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="aichat-g-panel" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0f172a" stopOpacity="0.92"/><stop offset="100%" stopColor="#0a0e1a" stopOpacity="0.92"/></linearGradient>
    <linearGradient id="aichat-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <linearGradient id="aichat-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="aichat-g-cta" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#6d28d9"/><stop offset="100%" stopColor="#4a9eff"/></linearGradient>
  </defs>

  <rect x="240" y="20" width="540" height="580" rx="16" fill="url(#aichat-g-panel)" stroke="#1f2937" strokeWidth="1.4"/>

  <line x1="240" y1="68" x2="780" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="48" fill="#c084fc" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">✦</text>
  <text x="284" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">AI Assistant</text>
  <rect x="640" y="32" width="86" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="650" y="47" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Default ▾</text>
  <rect x="734" y="32" width="28" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="48" fill="#64748b" fontSize="13" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>

  <rect x="430" y="84" width="330" height="36" rx="10" fill="url(#aichat-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="446" y="106" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">what is the issue for invoice 10000 / RI / 00001?</text>

  <rect x="262" y="134" width="226" height="22" rx="5" fill="#0d1220" stroke="#334155" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="270" y="149" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">🔍</text>
  <text x="284" y="149" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">validation_errors</text>
  <text x="382" y="149" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">· doc=10000 dct=RI kco=00001</text>

  <rect x="262" y="170" width="406" height="170" rx="10" fill="url(#aichat-g-card)" stroke="#334155" strokeWidth="1"/>
  <text x="278" y="192" fill="#cbd5e1" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">Looking up validation errors for this invoice…</text>
  <line x1="278" y1="202" x2="652" y2="202" stroke="#1f2937" strokeWidth="1"/>
  <text x="278" y="222" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Invoice 10000 / RI / 00001 fails an XSD check.</text>
  <text x="278" y="244" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Issue</text>
  <text x="312" y="244" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">UBL 2.1 element ordering — AdditionalDocumentReference</text>
  <text x="278" y="258" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">         is placed before ProjectReference / Signature.</text>
  <text x="278" y="282" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Likely cause</text>
  <text x="346" y="282" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">XSL transform emits the element out of order.</text>
  <text x="278" y="306" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recommendations</text>
  <text x="278" y="320" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">• check the JDE → UBL transform</text>
  <text x="278" y="332" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">• validate against the UBL 2.1 sequence</text>

  <rect x="262" y="354" width="78" height="20" rx="5" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="270" y="368" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📋 Copy</text>

  <rect x="430" y="396" width="76" height="32" rx="9" fill="url(#aichat-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="468" y="416" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" textAnchor="middle">yes</text>

  <rect x="262" y="442" width="160" height="22" rx="5" fill="#0d1220" stroke="#334155" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="270" y="457" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">🔍</text>
  <text x="284" y="457" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">list_invoices</text>
  <text x="354" y="457" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">· kco=00001</text>

  <rect x="262" y="476" width="406" height="62" rx="10" fill="url(#aichat-g-card)" stroke="#334155" strokeWidth="1"/>
  <text x="278" y="496" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Status of invoice 10000 / RI / 00001 — </text>
  <text x="278" y="510" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">customer · 2025-02-01 · B2C · 140.70 € · </text>
  <text x="465" y="510" fill="#f87171" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">9905 — Validation failed</text>
  <text x="278" y="528" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">Blocked since 2025-02-01 by the XSD issue above.</text>

  <line x1="240" y1="558" x2="780" y2="558" stroke="#1f2937" strokeWidth="1"/>
  <rect x="262" y="568" width="440" height="26" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="585" fill="#475569" fontSize="11" fontFamily="system-ui, sans-serif">Ask AI anything…</text>
  <rect x="710" y="568" width="38" height="26" rx="6" fill="url(#aichat-g-cta)"/>
  <text x="729" y="585" fill="#fff" fontSize="13" textAnchor="middle" fontFamily="system-ui, sans-serif">➤</text>

  <rect x="20" y="32" width="180" height="40" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="50" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Title bar</text>
  <text x="30" y="65" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">model picker · close</text>
  <line x1="200" y1="52" x2="240" y2="52" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aichat-arrow)"/>

  <rect x="20" y="134" width="200" height="40" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="152" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Tool call indicator</text>
  <text x="30" y="167" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">name + actual filters used</text>
  <line x1="220" y1="155" x2="262" y2="155" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aichat-arrow)"/>

  <rect x="20" y="240" width="200" height="40" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="258" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Streaming reply</text>
  <text x="30" y="273" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Markdown · headings · tables</text>
  <line x1="220" y1="260" x2="262" y2="260" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aichat-arrow)"/>

  <rect x="20" y="354" width="200" height="40" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="372" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Copy reply</text>
  <text x="30" y="387" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">paste into ticket / email</text>
  <line x1="220" y1="370" x2="262" y2="370" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aichat-arrow)"/>

  <rect x="800" y="84" width="180" height="40" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="102" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">User question</text>
  <text x="810" y="117" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">free text · FR or EN</text>
  <line x1="800" y1="105" x2="760" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aichat-arrow)"/>

  <rect x="800" y="396" width="180" height="40" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="414" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Follow-up turn</text>
  <text x="810" y="429" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">multi-step diagnosis</text>
  <line x1="800" y1="416" x2="510" y2="416" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aichat-arrow)"/>

  <rect x="800" y="558" width="180" height="40" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="810" y="576" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Input area</text>
  <text x="810" y="591" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Enter to send · ■ to abort</text>
  <line x1="800" y1="580" x2="750" y2="580" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aichat-arrow)"/>
</svg>

Every action the assistant takes on the user's behalf appears as a 🔍 (data lookup) or 📖 (documentation lookup) pill, with the actual filters used printed alongside. There are no hidden steps.

---

## What the assistant can answer

The assistant is wired to two information sources, both read-only.

### About the product

It can fetch any page from the public documentation site (`docs.nomana-it.fr`) and ground its reply in that material. Useful when:

- a user is unsure how a feature behaves (*"What does Replace = Skip do on Processing → XML?"*);
- a colleague asks for a definition (*"Explain flux 10.1 vs 10.3"*);
- the answer needs a quick recap of the official lifecycle (*"How does an invoice move from 9900 to 10?"*).

The matching pill on these answers is 📖 `web_fetch · <url>`.

### About the data

Four read-only tools cover the day-to-day operational questions:

| Tool | What it returns | Typical question |
|---|---|---|
| **`list_invoices`** | Up to 50 invoices from F564231 with filters: status code, company, BAR routing (B2B / B2BINT / B2C / B2G / OUTOFSCOPE), customer name (substring), issue-date range. | *"Show pending invoices for company 00070 in EUR"*, *"Failed sends since last Monday"* |
| **`explain_status_code`** | The tag name and the FR / EN labels for a status code. Looks up both the invoice catalog (1, 8, 10, 37, 9900–9907 …) and the e-reporting catalog (9950–9957). | *"What does 9906 mean?"*, *"Status 9954?"* |
| **`validation_errors`** | Up to 100 validation errors from F564236 for a `DOC + DCT + KCO` triplet (level, source, rule, message — same columns as the [Integration Errors](./integration-errors.md) page). | *"What is the issue for invoice 10000 / RI / 00001?"* |
| **`list_ereports`** | Up to 50 e-reporting runs from F564240 with filters: flux (10.1 / 10.3), company, status code (9950–9957). | *"Last ten 10.3 reports for company 00070"*, *"Pending e-reporting runs"* |

The assistant decides on its own when to call a tool — there is no manual trigger. A safety cap stops the agentic loop after **5 tool iterations per turn**, so a runaway sequence cannot drain the API budget.

---

## Conversation examples

The transcripts below come from a real session. The user asks in French; the assistant answers in French. The same panel works identically in English.

### Example 1 — Diagnosing one invoice

> **User**
> *quel est le problème pour la facture 10000 / RI / 00001*
>
> 🔍 **`validation_errors`** · `doc=10000 dct=RI kco=00001`
>
> **AI Assistant**
> *Je vais chercher les erreurs de validation pour cette facture.*
>
> La facture 10000 / RI / 00001 a une erreur de validation XSD :
>
> **Problème :** Structure UBL 2.1 invalide. L'élément `AdditionalDocumentReference` est trouvé à une position non autorisée.
>
> **Cause probable :** L'ordre des éléments dans le document UBL ne respecte pas le schéma. `AdditionalDocumentReference` devrait apparaître après `ProjectReference`, `Signature` ou `AccountingSupplierParty`.
>
> **Recommandations :**
> - Vérifier la transformation JD Edwards → UBL générée par NomaUBL.
> - S'assurer que les éléments UBL sont ordonnés conformément à la norme UBL 2.1.
> - Contrôler les données source dans JD Edwards (type de document, références additionnelles).
>
> *Souhaitez-vous que je consulte le statut global de cette facture ?* &nbsp;📋
>
> ---
>
> **User**
> *oui*
>
> 🔍 **`list_invoices`** · `kco=00001`
>
> **AI Assistant**
>
> Statut de la facture 10000 / RI / 00001 :
>
> | Attribut | Valeur |
> |---|---|
> | Client | LE CLIENT |
> | Date d'émission | 2025-02-01 |
> | Type de document | B2C |
> | Montant HT | 130,00 € |
> | TVA | 10,70 € |
> | Montant TTC | 140,70 € |
> | Statut | 🔴 9905 — Échec de validation |
>
> **Récapitulatif :** la facture est bloquée en validation depuis le 1er février 2025 à cause de l'erreur XSD ci-dessus (élément `AdditionalDocumentReference` mal positionné).
>
> *Besoin d'aide pour corriger cette facture ?* &nbsp;📋

A single triplet (`DOC + DCT + KCO`) is enough to start a diagnosis. The assistant chains its own follow-ups — first the validation table, then the invoice header — and offers the next reasonable step.

### Example 2 — Counting validation failures across the fleet

> **User**
> *combien de factures au total ne sont pas valides ?*
>
> 🔍 **`list_invoices`** · `status=9905`
>
> **AI Assistant**
>
> **Résultat :** 50 factures en échec de validation (statut 9905).
>
> Les résultats affichent le maximum de **50 entrées**. Le nombre total exact peut être supérieur.
>
> **Répartition observée :**
> - Majorité : société 00002 (49 factures).
> - Minorité : société 00001 (1 facture) et autres.
> - Types de documents : surtout des `RI` (factures), 1 `RM` (facture d'avoir).
> - Période : principalement mars-avril 2026.
>
> **Recommandations :**
> - Vérifier si toutes ces factures sont touchées par le même problème XSD.
> - Examiner en priorité les données source de la société 00002.
> - Lancer un audit sur la transformation JD Edwards → UBL.
>
> *Voulez-vous que je vous montre les erreurs détaillées d'une autre facture pour confirmer si c'est le même problème ?* &nbsp;📋

The 50-row hard cap on `list_invoices` is part of the safety design — for an exhaustive count, the [E-Invoicing](./invoices.md) page is the right tool. The assistant is good at *characterising* a problem (which company, which document type, which period), then handing back to the dedicated screen for the full list.

### Example 3 — Confirming the pattern

> **User**
> *oui*
>
> 🔍 **`validation_errors`** · `doc=10001 dct=RI kco=00002`
>
> **AI Assistant**
>
> Intéressant — la facture 10001 / RI / 00002 n'a aucune erreur enregistrée en F564236.
>
> Cela signifie que :
> - soit l'erreur a été corrigée après une relance,
> - soit le statut 9905 vient d'une autre source (par exemple un rejet de la Plateforme Agréée),
> - soit la table d'erreurs n'a pas conservé la trace.
>
> *Pouvez-vous me préciser le statut courant de la facture 10001 / RI / 00002 ? Je peux le vérifier.* &nbsp;📋

When a tool returns nothing, the assistant says so plainly and proposes the next step rather than guessing. *"Aucune erreur enregistrée"* on a 9905 invoice is itself a useful diagnostic.

---

## Reading the responses

- **Tool pills** show the *actual* filters applied (`status=9906 dateFrom=2026-01-01 …`). If a result looks off, the pill usually tells you why.
- **Markdown rendering** turns headings, bullet lists, code spans and tables into the visual elements visible in the panel — no plain-text dumps.
- **Streaming** means the bubble fills in as the model writes; clicking **■** stops it cleanly without ending the conversation.
- **📋 Copy** at the bottom of an assistant reply copies the raw Markdown to the clipboard — handy to paste into a ticket or an email.

---

## What the assistant cannot do

- **Write data.** No tool can modify the database. Configuration edits, validation re-runs and status changes stay out of scope.
- **Browse the open web.** Documentation lookup is restricted to the allow-list configured by the administrator (the default is `docs.nomana-it.fr`).
- **See files.** The chat is text-only. Pasting a UBL XML inline works (within the model context window), file uploads do not.
- **Persist conversations.** Closing the panel or refreshing the page resets the thread. The same question on a fresh panel starts fresh.
- **Reach across customers.** Read-only tools target the database the current user is authenticated against — same scope as the rest of the application.

The administrator can disable the data tools entirely (the assistant then relies solely on documentation lookup), restrict the documentation domains, override the model defaults, or change the system prompt — all from the *global* template.

---

## Tips & best practices

- **Start with the question, not the tool.** *"Show pending invoices for company 00070 in EUR"* is enough — there is no need to ask the assistant to call `list_invoices` explicitly.
- **Be specific with identifiers.** For validation questions, include the full triplet (`DOC + DCT + KCO`); without it the assistant has to guess or call `list_invoices` first.
- **Read the tool pills.** They are the audit trail of the conversation.
- **Treat the panel as an external API.** Anything sent is forwarded to the model provider — no API keys, no full credit-card numbers, no PII beyond what the public documentation already contains.
- **For deep audits, fall back to the dedicated pages.** The assistant is optimised for quick lookups and explanations. For repeat workflows, the [Dashboard](./dashboard.md), [E-Invoicing](./invoices.md), [E-Reporting](./ereporting.md) and [Integration Errors](./integration-errors.md) pages remain the source of truth.
