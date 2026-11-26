---
title: Allowances / Charges
description: "NomaUBL UBL Defaults — Allowances / Charges tab: default reason code picked from the UNTDID 5189 (allowances) and 7161 (charges) lists, default reason text, and mapping of source codes to UBL codes, for document and line allowances and charges, and rules carrying source lines (freight, fees) as document-level charges or allowances."
keywords: [NomaUBL, UBL, defaults, allowances, charges, reason code, UNTDID 5189, UNTDID 7161, BT-97, BT-98, BT-104, BT-105, ChargeIndicator, JD Edwards, SAP, NetSuite, custom ERP]
---

# Allowances / Charges

The **Allowances / Charges** tab sets how NomaUBL fills the **reason code** and the **reason text** of the allowances and charges, at document level (BG-20 / BG-21) and at line level (BG-27 / BG-28): source codes converted to the UNTDID 5189 / 7161 codes, a default code when the source has none, and the label of the list when the source gives no text. It works the same whatever the source system — JD Edwards, SAP, NetSuite or a custom ERP.

The override mechanism (shared defaults, or an override for one document) is described in the [Overview](./overview.md).

---

## Two blocks

| Block | Direction | Code / text |
|---|---|---|
| **Allowance (ChargeIndicator = false)** | Money off | BT-98 / BT-140 (code), BT-97 / BT-139 (text) |
| **Charge (ChargeIndicator = true)** | Money on | BT-105 / BT-145 (code), BT-104 / BT-144 (text) |

Each block has the same fields:

| Field | Description |
|---|---|
| **Reason code** | Default code, picked from the list — allowance reasons (UNTDID 5189) or charge reasons (UNTDID 7161), shown with their label. Used when the source gives no code. Picking a code fills **Reason text** with its label, unless a text was already typed. |
| **Reason text** | Default text, used with the default code (or when there is no code at all). |
| **Source code mapping** | Table **External code** → **UBL code**: converts a code of the source system into a code of the list. A source code absent from the table goes through unchanged. |

The two lists are delivered with NomaUBL in French and English (*list-allowance-reasons*, *list-charge-reasons*) and appear in the *Custom data* area of the Settings.

---

## How the code and the text are chosen \{#how-the-code-and-the-text-are-chosen\}

For each allowance or charge, at document level or line level:

| | Rule |
|---|---|
| **Code** | No code in the source → the default code. Otherwise the source code, converted by the mapping when it is listed there. |
| **Text** | 1. The source text. 2. Otherwise the default text, when the code is the default code or there is no code. 3. Otherwise the label of the code in the list (French label). |

The direction comes from the *Charge indicator* of the mapping: the charge block applies to charges, the allowance block to allowances. The mapping of the allowances and charges themselves — document-level section *Document Allowances/Charges* and line-level section *Line Allowances/Charges* — is described on the [XSL editor](../xsl-editor.md#variable-mapping) page.

---

## Lines carried as a document charge or allowance \{#lines-as-document-charges\}

Some source lines are not invoice lines for the standard: a freight line, a handling fee, a discount printed as a line. The rules of the section **Lines carried as a document charge or allowance** name them; a matching line leaves the invoice lines and becomes a document-level charge (BG-21) or allowance (BG-20).

<svg viewBox="0 0 1200 346" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="lac-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="lac-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="lac-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="lac-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="312" rx="14" fill="url(#lac-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Lines carried as a document charge or allowance</text>
  <line x1="240" y1="58" x2="960" y2="58" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="80" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rules</text>
  <text x="280.0" y="80" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">— A matching line leaves the invoice lines and is added up per reason code and VAT rate. First match wins.</text>
  <rect x="240" y="94" width="720" height="88" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="114" fill="#94a3b8" fontSize="12" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="113" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Logic</text>
  <rect x="312" y="101" width="54" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="322" y="115.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">AND ▾</text>
  <text x="380" y="113" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Result</text>
  <rect x="428" y="101" width="84" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="438" y="115.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Charge ▾</text>
  <rect x="520" y="101" width="210" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="530" y="115.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">FC  Frais de transport ▾</text>
  <rect x="926" y="101" width="24" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="938.0" y="115.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="254" y="130" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="144.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">ItemType</text>
  <rect x="412" y="130" width="100" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="422" y="144.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">= valeur ▾</text>
  <rect x="520" y="130" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="530" y="144.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">FRT</text>
  <rect x="608" y="130" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="619.0" y="144.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="254" y="156" width="97" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="302.5" y="169.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add condition</text>
  <rect x="240" y="192" width="720" height="88" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="212" fill="#94a3b8" fontSize="12" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="270" y="211" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Logic</text>
  <rect x="312" y="199" width="54" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="322" y="213.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">AND ▾</text>
  <text x="380" y="211" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Result</text>
  <rect x="428" y="199" width="84" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="438" y="213.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Allowance ▾</text>
  <rect x="520" y="199" width="210" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="530" y="213.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Reason code from a field of the line ▾</text>
  <rect x="738" y="199" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="213.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">ReasonCode</text>
  <rect x="926" y="199" width="24" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="938.0" y="213.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="254" y="228" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="242.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">LineType</text>
  <rect x="412" y="228" width="100" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="422" y="242.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">= valeur ▾</text>
  <rect x="520" y="228" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="530" y="242.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">DISC</text>
  <rect x="608" y="228" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="619.0" y="242.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="254" y="254" width="97" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="302.5" y="267.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add condition</text>
  <rect x="240" y="292" width="111" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="295.5" y="306.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add rule group</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">First match wins</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">drag the grip to reorder</text>
  <line x1="200" y1="113.0" x2="252" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lac-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Conditions on the line</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">field, operator, value</text>
  <line x1="200" y1="167.0" x2="254" y2="141" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lac-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Field of the line</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">element of the source line</text>
  <line x1="200" y1="267.0" x2="254" y2="239" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lac-arrow)"/>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Charge or allowance</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">document level, BG-21 / BG-20</text>
  <line x1="1000" y1="77.0" x2="512" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lac-arrow)"/>
  <rect x="1000" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Reason code</text>
  <text x="1010" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from the list, a field, or default</text>
  <line x1="1000" y1="147.0" x2="730" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lac-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Code read from the line</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">converted by the source mapping</text>
  <line x1="1000" y1="247.0" x2="828" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lac-arrow)"/>
</svg>

### Rules

Each rule has a **Logic** (AND / OR between its conditions), its conditions and a **Result**:

| Part | Description |
|---|---|
| **Condition** | A field of the line — the name of an element of the source line, found in the line or below it —, an operator and a value. The operators are `> 0`, `< 0`, `≥ 0`, `≤ 0`, `= valeur`, `≠ valeur`, `non vide`, `vide`, `contient`, `ne contient pas`. **Add condition** adds one. |
| **Result — kind** | **Charge** or **Allowance**. |
| **Result — reason code** | A code of the list (charge reasons UNTDID 7161, allowance reasons UNTDID 5189), **Reason code from a field of the line** followed by the name of that field, or **Default reason code** — the default code of the block above. |

Rules are read from top to bottom and the first match wins: the grip ⠿ reorders them, **Add rule group** adds one, the bin removes one. With no rule, every source line stays an invoice line.

### What the invoice receives

- The matching lines leave the invoice lines.
- Their amounts are added up per kind, reason code, VAT category and VAT rate — the line's rate, or the document's when the line has none. Each group gives one document-level charge or allowance, with the absolute amount; a group that adds up to zero gives nothing.
- A code read from a field goes through the **Source code mapping** of its block, like any source code; the reason text follows the rules of [How the code and the text are chosen](#how-the-code-and-the-text-are-chosen).
- The totals follow: sum of the lines (BT-106), allowances (BT-107), charges (BT-108) and the totals computed from them.
- The source file and the readable PDF are unchanged.

The rules set in the shared defaults apply to every document; a document can override them with the rest of the tab.

---

## Tips & best practices

- **Map the source codes rather than the texts.** A source system usually carries its own discount or fee codes: one mapping line per code gives a valid UNTDID code and, through the list, a readable reason.
- **Set a default code for each direction in use.** Without a code or a text, an allowance or charge fails the EN 16931 rules on reasons.
- **Keep the default text consistent with the default code.** The text is used with that code only; for any other code the label of the list applies.
- **Carry freight and fee lines with a rule** rather than altering the source: the source and the PDF keep the line, the UBL carries a document charge with the right reason code.
- **A per-document override is rarely necessary.** Reserve it for a document whose source uses its own codes.
