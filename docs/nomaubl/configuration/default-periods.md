---
title: Period picker and default periods
description: "The NomaUBL period picker shared by the dashboards and lists — ten presets, a two-month calendar, the date basis of each page, the Exclude reviewed errors switch — and the Default periods settings that choose the period each page opens on, for every view or view by view."
keywords: [NomaUBL, period picker, date range, default period, This month, Yesterday, date basis, document date, activity date, archive date, exclude reviewed errors, settings, views, JD Edwards, SAP, NetSuite, custom ERP]
---

# Period picker and default periods

The dashboards and lists of NomaUBL share one **period picker**: the same presets, the same calendar and, where the page offers it, the choice of the **date** the period is read against. The period each page opens on is set once for the instance under **Settings → Views & UI → Default periods** — for every view, then view by view when a team needs another one.

---

## Period picker \{#period-picker\}

<svg viewBox="0 0 1200 374" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="per-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="per-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="per-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="per-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="334" rx="14" fill="url(#per-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">Period picker</text>
  <rect x="240" y="56" width="218" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="349.0" y="70.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📅 1 – 31 Oct 2026 · Document date ▾</text>
  <rect x="240" y="88" width="720" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="113" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Today</text>
  <text x="260" y="133" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Yesterday</text>
  <text x="260" y="153" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Last 7 days</text>
  <text x="260" y="173" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Last 30 days</text>
  <rect x="250" y="180" width="140" height="18" rx="4" fill="rgba(74,158,255,0.18)"/>
  <text x="260" y="193" fill="#4a9eff" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">This month</text>
  <text x="260" y="213" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Last month</text>
  <text x="260" y="233" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">This quarter</text>
  <text x="260" y="253" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">This year</text>
  <text x="260" y="273" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Last 12 months</text>
  <text x="260" y="293" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">All</text>
  <text x="535" y="110" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">September 2026</text>
  <text x="430" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">M</text>
  <text x="462" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">T</text>
  <text x="494" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">W</text>
  <text x="526" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">T</text>
  <text x="558" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">F</text>
  <text x="590" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">S</text>
  <text x="622" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">S</text>
  <text x="462" y="150" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <text x="494" y="150" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <text x="526" y="150" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">3</text>
  <text x="558" y="150" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">4</text>
  <text x="590" y="150" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">5</text>
  <text x="622" y="150" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">6</text>
  <text x="430" y="172" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">7</text>
  <text x="462" y="172" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">8</text>
  <text x="494" y="172" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">9</text>
  <text x="526" y="172" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">10</text>
  <text x="558" y="172" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">11</text>
  <text x="590" y="172" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">12</text>
  <text x="622" y="172" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">13</text>
  <text x="430" y="194" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">14</text>
  <text x="462" y="194" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">15</text>
  <text x="494" y="194" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">16</text>
  <text x="526" y="194" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">17</text>
  <text x="558" y="194" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">18</text>
  <text x="590" y="194" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">19</text>
  <text x="622" y="194" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">20</text>
  <text x="430" y="216" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">21</text>
  <text x="462" y="216" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">22</text>
  <text x="494" y="216" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">23</text>
  <text x="526" y="216" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">24</text>
  <text x="558" y="216" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">25</text>
  <text x="590" y="216" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">26</text>
  <text x="622" y="216" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">27</text>
  <text x="430" y="238" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">28</text>
  <text x="462" y="238" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">29</text>
  <text x="494" y="238" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">30</text>
  <text x="805" y="110" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">October 2026</text>
  <text x="700" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">M</text>
  <text x="732" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">T</text>
  <text x="764" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">W</text>
  <text x="796" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">T</text>
  <text x="828" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">F</text>
  <text x="860" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">S</text>
  <text x="892" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">S</text>
  <circle cx="796" cy="147" r="9" fill="#4a9eff"/>
  <text x="796" y="150" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="814" y="138" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="828" y="150" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <rect x="846" y="138" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="860" y="150" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">3</text>
  <rect x="878" y="138" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="892" y="150" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">4</text>
  <rect x="686" y="160" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="700" y="172" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">5</text>
  <rect x="718" y="160" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="732" y="172" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">6</text>
  <rect x="750" y="160" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="764" y="172" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">7</text>
  <rect x="782" y="160" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="796" y="172" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">8</text>
  <rect x="814" y="160" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="828" y="172" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">9</text>
  <rect x="846" y="160" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="860" y="172" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">10</text>
  <rect x="878" y="160" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="892" y="172" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">11</text>
  <rect x="686" y="182" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="700" y="194" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">12</text>
  <rect x="718" y="182" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="732" y="194" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">13</text>
  <rect x="750" y="182" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="764" y="194" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">14</text>
  <rect x="782" y="182" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="796" y="194" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">15</text>
  <rect x="814" y="182" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="828" y="194" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">16</text>
  <rect x="846" y="182" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="860" y="194" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">17</text>
  <rect x="878" y="182" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="892" y="194" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">18</text>
  <rect x="686" y="204" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="700" y="216" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">19</text>
  <rect x="718" y="204" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="732" y="216" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">20</text>
  <rect x="750" y="204" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="764" y="216" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">21</text>
  <rect x="782" y="204" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="796" y="216" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">22</text>
  <rect x="814" y="204" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="828" y="216" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">23</text>
  <rect x="846" y="204" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="860" y="216" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">24</text>
  <rect x="878" y="204" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="892" y="216" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">25</text>
  <rect x="686" y="226" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="700" y="238" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">26</text>
  <rect x="718" y="226" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="732" y="238" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">27</text>
  <rect x="750" y="226" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="764" y="238" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">28</text>
  <rect x="782" y="226" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="796" y="238" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">29</text>
  <rect x="814" y="226" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="828" y="238" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">30</text>
  <circle cx="860" cy="235" r="9" fill="#4a9eff"/>
  <text x="860" y="238" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">31</text>
  <line x1="410" y1="294" x2="950" y2="294" stroke="#1f2937" strokeWidth="1"/>
  <text x="420" y="314" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE</text>
  <rect x="460" y="300" width="262" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="461" y="301" width="87" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="504.5" y="314.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Document date</text>
  <line x1="549" y1="305" x2="549" y2="317" stroke="#334155" strokeWidth="1"/>
  <text x="593.5" y="314.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Activity date</text>
  <line x1="638" y1="305" x2="638" y2="317" stroke="#334155" strokeWidth="1"/>
  <text x="680.0" y="314.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Archive date</text>
  <rect x="790" y="300" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="817.5" y="314.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="853" y="300" width="50" height="22" rx="5" fill="url(#per-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="878.0" y="314.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Apply</text>
  <rect x="20" y="52" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="67" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The range itself</text>
  <text x="30" y="80" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">and the date basis</text>
  <line x1="200" y1="69.0" x2="240" y2="67" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#per-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Presets</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">This month by default</text>
  <line x1="200" y1="177.0" x2="250" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#per-arrow)"/>
  <rect x="20" y="292" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="307" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Date basis</text>
  <text x="30" y="320" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">depends on the page</text>
  <line x1="200" y1="309.0" x2="460" y2="311" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#per-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two months</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">click a start, then an end</text>
  <line x1="1000" y1="137.0" x2="920" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#per-arrow)"/>
  <rect x="1000" y="292" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="307" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Apply</text>
  <text x="1010" y="320" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a custom range: Custom</text>
  <line x1="1000" y1="309.0" x2="930" y2="311" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#per-arrow)"/>
</svg>

The button shows the range itself (for example *1 – 31 Oct 2026*) and the date basis. It opens a panel with:

| Part | Content |
|---|---|
| **Presets** | *Today*, *Yesterday*, *Last 7 days*, *Last 30 days*, *This month*, *Last month*, *This quarter*, *This year*, *Last 12 months*, *All*. |
| **Calendar** | The previous and the current month, weeks starting on Monday. A click on a start date, then on an end date, selects a free range, shown as *Custom*. |
| **Date** | The date basis, in the footer, on the pages that offer it (see below). |
| **Apply** / **Cancel** | Apply the range, or close the panel without changing anything. |

:::info[Yesterday]
*Yesterday* runs from yesterday to today, so that the night batches that cross midnight are counted in full.
:::

### Date basis per page \{#date-basis\}

| Page | Choices | Default |
|---|---|---|
| [Billing overview](../application/billing-overview.md), [Statistics](../application/statistics.md) | Document date · Activity date · Archive date | Document date |
| [Operations](../application/dashboard.md) | Activity date · Document date · Archive date | Activity date |
| [E-Invoicing](../application/invoices.md#date-basis) | Update date · Issue date · Archive date | Update date |
| [E-Documents](../application/edocuments.md) | Archive date · Document date | Archive date |

*Document date* (or *Issue date*) is the date printed on the invoice; *Activity date* the last change in NomaUBL; *Archive date* the date the document was processed.

### Exclude reviewed errors \{#exclude-reviewed\}

Next to the picker, the **Exclude reviewed errors** switch hides the invoices already reviewed by customer service that still sit in an error status; reviewed invoices in other statuses stay counted. It is on by default on the Billing overview and Statistics, off on Operations and E-Invoicing (E-Invoicing takes the value of the dashboard it is opened from). The [Explorer](../application/explorer.md) offers the same switch in every analysis.

---

## Default periods \{#default-periods\}

<svg viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pds-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pds-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="pds-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="320" rx="14" fill="url(#pds-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Settings › Views &amp; UI › Default periods</text>
  <text x="240" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Default periods</text>
  <text x="240" y="86" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The period a page opens on until the user picks another one. Analyses and dashboards of the Explorer keep their own period.</text>
  <text x="240" y="112" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EVERY VIEW</text>
  <rect x="420" y="100" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="114.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">This month ▾</text>
  <line x1="240" y1="128" x2="960" y2="128" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="148" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Per view</text>
  <text x="240" y="175" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Billing overview</text>
  <rect x="390" y="160" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="174.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Same as every view ▾</text>
  <text x="610" y="175" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Operations dashboard</text>
  <rect x="760" y="160" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="770" y="174.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Yesterday (and today) ▾</text>
  <text x="240" y="209" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Statistics</text>
  <rect x="390" y="194" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="208.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Same as every view ▾</text>
  <text x="610" y="209" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Invoices</text>
  <rect x="760" y="194" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="770" y="208.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Last 7 days ▾</text>
  <text x="240" y="243" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">E-Documents</text>
  <rect x="390" y="228" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="242.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Same as every view ▾</text>
  <text x="610" y="243" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Diagnostics</text>
  <rect x="760" y="228" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="770" y="242.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Last 30 days ▾</text>
  <text x="240" y="277" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Integration errors</text>
  <rect x="390" y="262" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="276.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Same as every view ▾</text>
  <text x="610" y="277" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Processing log</text>
  <rect x="760" y="262" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="770" y="276.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Yesterday (and today) ▾</text>
  <text x="240" y="311" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Reports › Integrity</text>
  <rect x="390" y="296" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="310.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Last 30 days ▾</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Every view</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">This month when left as is</text>
  <line x1="200" y1="113.0" x2="420" y2="111" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Override per view</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nine views</text>
  <line x1="200" y1="227.0" x2="390" y2="211" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
  <rect x="1000" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Explorer apart</text>
  <text x="1010" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">analyses keep their period</text>
  <line x1="1000" y1="113.0" x2="920" y2="86" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
  <rect x="1000" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">User choice wins</text>
  <text x="1010" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">over the default</text>
  <line x1="1000" y1="227.0" x2="940" y2="211" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
</svg>

Open it from **Settings → Views & UI → Default periods**. Like most Settings editors, it is in English only.

| Field | Default | Description |
|---|---|---|
| **Every view** | This month | The period every page opens on. |
| **Per view** | Same as every view | One field per view, to open that page on another period. |

The views that can be set, in the order of the editor: *Billing overview*, *Operations dashboard*, *Statistics*, *Invoices*, *E-Documents*, *Diagnostics*, *Integration errors*, *Processing log*, *Reports › Integrity*. The choices are the presets of the picker; *Yesterday (and today)* is the *Yesterday* preset and *All dates* the *All* preset.

The default only sets the **opening** period: a period the user picks on a page still wins, and pages that remember their filters (Billing overview, Statistics) reopen on the last one used. The analyses and dashboards of the [Explorer](../application/explorer.md) keep their own period.

The values are saved in the [Global](./system/global.md) settings (tab *Periods*) and served to the pages by `GET /api/ui/period-defaults`.

---

## Tips & best practices

- **Match the opening period to how the team works.** *Yesterday* for an operations team checking the night batches, *Last month* for a finance review of the closed month.
- **Keep the same date basis when comparing two pages.** A count by *Document date* and a count by *Archive date* never match exactly.
- **Use *All* sparingly on large instances.** Every dashboard block then reads the whole history.
