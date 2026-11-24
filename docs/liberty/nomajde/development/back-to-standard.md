---
title: Back to standard
description: "Development → Back to standard in Nomajde: the standard JD Edwards EnterpriseOne objects a path code holds as changed, and the copies made of standard objects, compared record by record with Oracle's own in the pristine path code — which can go back to standard as they are, which differ and by what, which differ and are never run — with the OMW project that holds each one and the retrofit days saved at each upgrade."
keywords: [Nomajde, JD Edwards, JDE E1, back to standard, retrofit, upgrade, pristine, PS920, path code, Object Librarian, OMW project, specifications, event rules, custom objects, copies, compare]
---

# Back to standard

**Development → Back to standard** answers a question every JD Edwards EnterpriseOne customer meets before an upgrade: of all the standard objects changed over the years, **which changes still matter?** Each changed object, and each copy of a standard object, costs retrofit days at every upgrade. The page lists them, compares each one with Oracle's own object in the pristine path code (`PS920`, Oracle's objects as delivered) or in another path code, and sorts them: **those that can go back to standard as they are**, **those that differ, and by what**, and **those that differ but that nobody runs**. JD Edwards is only read.

---

## At a glance

<svg viewBox="0 0 1320 558" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="bts-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="bts-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="bts-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="bts-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="518" rx="14" fill="url(#bts-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Back to standard</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">PD920 compared with PS920 on 2026-11-20 — The standard objects that were changed, and the copies…</text>
  <rect x="906" y="34" width="91" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="951.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Compare again</text>
  <rect x="1005" y="34" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Read again</text>
  <line x1="232" y1="74" x2="1088" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="86" width="204.0" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="106" fill="#4ade80" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">12</text>
  <text x="250.0" y="120" fill="#94a3b8" fontSize="6.6" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">IDENTICAL TO THE STANDARD</text>
  <text x="250.0" y="132" fill="#64748b" fontSize="6.6" fontFamily="system-ui, sans-serif">6 day(s) of retrofit saved at each upgrade</text>
  <rect x="452.0" y="86" width="204.0" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462.0" y="106" fill="#fb923c" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">4</text>
  <text x="462.0" y="120" fill="#94a3b8" fontSize="6.6" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">DIFFER AND NOBODY RUNS THEM</text>
  <text x="462.0" y="132" fill="#64748b" fontSize="6.6" fontFamily="system-ui, sans-serif">12 day(s) of retrofit saved at each upgrade</text>
  <rect x="664.0" y="86" width="204.0" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="674.0" y="106" fill="#4a9eff" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">31</text>
  <text x="674.0" y="120" fill="#94a3b8" fontSize="6.6" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">DIFFER</text>
  <rect x="876.0" y="86" width="204.0" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="886.0" y="106" fill="#c084fc" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="886.0" y="120" fill="#94a3b8" fontSize="6.6" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">NOT IN THE PATH CODE COMPARED WITH</text>
  <rect x="240.0" y="150" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="254.0" cy="170" r="6" fill="#4ade80" fillOpacity="0.35"/>
  <text x="266.0" y="167" fill="#e2e8f0" fontSize="8.2" fontWeight="700" fontFamily="system-ui, sans-serif">Can go back as they are · 12</text>
  <text x="266.0" y="180" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">Only the "changed" flag is left</text>
  <rect x="409.6" y="150" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="423.6" cy="170" r="6" fill="#fb923c" fillOpacity="0.35"/>
  <text x="435.6" y="167" fill="#e2e8f0" fontSize="8.2" fontWeight="700" fontFamily="system-ui, sans-serif">Changed, never run · 4</text>
  <text x="435.6" y="180" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">A change that serves nobody</text>
  <rect x="579.2" y="150" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="593.2" cy="170" r="6" fill="#4a9eff" fillOpacity="0.35"/>
  <text x="605.2" y="167" fill="#e2e8f0" fontSize="8.2" fontWeight="700" fontFamily="system-ui, sans-serif">Differ · 31</text>
  <text x="605.2" y="180" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">What was changed, record by record</text>
  <rect x="748.8" y="150" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="762.8" cy="170" r="6" fill="#c084fc" fillOpacity="0.35"/>
  <text x="774.8" y="167" fill="#e2e8f0" fontSize="8.2" fontWeight="700" fontFamily="system-ui, sans-serif">Not in the standard · 2</text>
  <text x="774.8" y="180" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">Nothing to compare with</text>
  <rect x="918.4" y="150" width="161.6" height="40" rx="8" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1.2"/>
  <circle cx="932.4" cy="170" r="6" fill="#4a9eff" fillOpacity="0.35"/>
  <text x="944.4" y="167" fill="#e2e8f0" fontSize="8.2" fontWeight="700" fontFamily="system-ui, sans-serif">All · 49</text>
  <text x="944.4" y="180" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">Every object compared</text>
  <rect x="240" y="202" width="840" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="324" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COPY OF</text>
  <text x="386" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT IS</text>
  <text x="526" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="570" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPARED WITH THE STANDARD</text>
  <text x="738" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHERE IT DIFFERS</text>
  <text x="878" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OMW PROJECT</text>
  <text x="988" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LAST RUN</text>
  <rect x="240" y="234" width="840" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="324" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="386" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sales Order Entry</text>
  <text x="526" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">APPL</text>
  <rect x="570" y="239.0" width="103" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="621.5" y="250.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Differs · +2 −0 ~1</text>
  <text x="738" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Event rules (3)</text>
  <text x="878" y="250.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">PRJ0042 — Pricing</text>
  <text x="988" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-19</text>
  <rect x="264" y="264" width="816" height="150" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="276" y="282" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">2 added · 0 removed · 1 changed · 1,204 the same — read in PD920 and PS920 · Held by PRJ0042 — Pricing</text>
  <rect x="276" y="292" width="792" height="112" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="286" y="308" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Event rules</text>
  <text x="353.44" y="308" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">2 added · 0 removed · 1 changed · 412 the same</text>
  <line x1="276" y1="316" x2="1068" y2="316" stroke="#1f2937" strokeWidth="1"/>
  <text x="286" y="330" fill="#64748b" fontSize="7.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CHANGED (1)</text>
  <text x="286" y="343" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">in W4210A · form id 1 · control 12 · event 13</text>
  <rect x="286" y="349" width="772" height="48" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="294" y="360.0" fill="#64748b" fontSize="7.6" fontFamily="ui-monospace, monospace">@@ -3,3 +3,3 @@</text>
  <text x="294" y="370.5" fill="#94a3b8" fontSize="7.6" fontFamily="ui-monospace, monospace">  If BC Order Type is equal to "SO"</text>
  <rect x="287" y="373.0" width="770" height="10.5" fill="rgba(255,69,58,0.14)"/>
  <text x="294" y="381.0" fill="#f87171" fontSize="7.6" fontFamily="ui-monospace, monospace">-    B4200310 Get Price</text>
  <rect x="287" y="383.5" width="770" height="10.5" fill="rgba(50,215,75,0.14)"/>
  <text x="294" y="391.5" fill="#4ade80" fontSize="7.6" fontFamily="ui-monospace, monospace">+    B5500310 Get Customer Price</text>
  <rect x="240" y="422" width="840" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="324" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="386" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Invoice Print</text>
  <text x="526" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">UBE</text>
  <rect x="570" y="427.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="600.0" y="438.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Identical</text>
  <text x="738" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="878" y="438.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">PRJ0017 — Invoices</text>
  <text x="988" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-20</text>
  <rect x="240" y="452" width="840" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P550101</text>
  <text x="324" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0101</text>
  <text x="386" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Address Book Revisions</text>
  <text x="526" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">APPL</text>
  <rect x="570" y="457.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="600.0" y="468.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Identical</text>
  <text x="738" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="878" y="468.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">PRJ0031 — AB</text>
  <text x="988" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-18</text>
  <rect x="240" y="482" width="840" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="498.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">F4211</text>
  <text x="324" y="498.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="386" y="498.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sales Order Detail File</text>
  <text x="526" y="498.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">TBLE</text>
  <rect x="570" y="487.0" width="103" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="621.5" y="498.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Differs · +1 −0 ~0</text>
  <text x="738" y="498.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Table columns (1)</text>
  <text x="878" y="498.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">PRJ0042 — Pricing</text>
  <text x="988" y="498.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="240" y="524" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Not compared: the C source of a business function, the data dictionary, processing option texts, a report's versions.</text>
  <rect x="20" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Compare again</text>
  <text x="30" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens the comparison job</text>
  <line x1="200" y1="47.0" x2="906" y2="45" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Can go back as they are</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">with the retrofit days saved</text>
  <line x1="200" y1="113.0" x2="240" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Five views</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each with its count</text>
  <line x1="200" y1="177.0" x2="240" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A row opened</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">compared now, record by record</text>
  <line x1="200" y1="253.0" x2="250" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
  <rect x="20" y="392" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="407" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lines that differ</text>
  <text x="30" y="420" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">removed in red, added in green</text>
  <line x1="200" y1="409.0" x2="276" y2="398" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
  <rect x="1120" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Not in the standard</text>
  <text x="1130" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nothing to compare with</text>
  <line x1="1120" y1="113.0" x2="1080" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The view chosen</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the list below follows it</text>
  <line x1="1120" y1="177.0" x2="1080" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
  <rect x="1120" y="246" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="261" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Verdict and counts</text>
  <text x="1130" y="274" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">+ added · − removed · ~ changed</text>
  <line x1="1120" y1="263.0" x2="674" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
  <rect x="1120" y="434" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="449" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">OMW project</text>
  <text x="1130" y="462" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">why it was changed, when it says it</text>
  <line x1="1120" y1="451.0" x2="978" y2="451" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
  <rect x="20" y="470" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="485" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Copy of</text>
  <text x="30" y="498" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">compared with its original</text>
  <line x1="200" y1="487.0" x2="324" y2="478" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
</svg>

---

## What is compared \{#scope\}

The comparison takes, for one path code (`PD920` for instance):

- **the standard objects it holds as changed** — those the Object Librarian flags as changed in that path code;
- **the copies of standard objects** — an object the customer added that kept the application id of a standard object of the same type. A copy is compared with **its original**: a copy that adds nothing can be replaced by the standard object, and a copy has to be retrofitted like a changed object when Oracle changes its original.

Each object is compared with the same object — or, for a copy, with its original — in the path code named as reference: usually the pristine one, or any other path code.

### Record by record \{#records\}

The comparison reads the **specifications** of the object in the two path codes and matches them record by record: each record is identified inside the object by a few values (a form and a control, an index and its rank, a section…). Two records with the same identification are the same when their values and their specification are the same. What is compared:

| Object | Records compared |
|---|---|
| Table | Its columns, its indexes and the columns of each index. |
| Business view | Its specification. |
| Data structure | Its specification, named mappings included. |
| Business function | Its functions and their specifications. |
| Application | The application, its forms, the controls of each form, the texts of the forms, the event rules. |
| Report | Its sections and objects, its texts, the event rules — those of the report itself (its versions hold overrides only). |
| Named event rules | Their specification. |

**Not compared, and said so on each object**: the C source of a business function (its functions and their data structures are compared, not its code), the data dictionary, the processing option texts, a report's versions.

### A copy under its original's names \{#copies\}

A copy carries names of its own: `P550101` for `P0101`, its forms `W550101A` for `W0101A`, a table's own column prefix. Before a copy is compared with its original, these names are put back to the original's — in the identifications, the values and the specifications —, so that **a name alone is never a difference**. The opened row says so: *A copy of P0101, compared with it under the original's names.*

---

## The page \{#page\}

The heading names the path code, the path code it was compared with and the date of the comparison. When several path codes were compared, a list next to the buttons switches from one to the other.

| Button | Does |
|---|---|
| **Compare a path code** / **Compare again** | Opens the [comparison job](#job), with the path code and the reference already filled in. **Compare a path code** before the first comparison, **Compare again** after. Shows only to those who may run the job. |
| **Read again** | Reads the list again — after a comparison, for instance. |

Before the first comparison, the page says so: the comparison reads every standard object the path code holds as changed and compares it with the path code named, read-only, in a few minutes.

### The figures \{#figures\}

| Figure | Counts |
|---|---|
| **identical to the standard** | The objects every record of which is the same as the standard's: *can go back as they are* — or, when the [upgrade analysis](../upgrade/analysis.md) exists for the path code, the days of retrofit they save at each upgrade. |
| **differ and nobody runs them** | The applications and reports that differ and that no user ran, with the days they save. A dash, with *the usage is not known for this path code*, when the upgrade analysis has no usage for it. |
| **differ** | The objects with at least one record added, removed or changed. |
| **not in the path code compared with** | The objects the reference path code holds no specification of: nothing to compare them with. |

### The five views \{#views\}

Five cards above the list choose what it shows, each with its count. The view chosen is kept for the next visit.

| View | Shows |
|---|---|
| **Can go back as they are** | The objects identical to the standard: only the "changed" flag is left. |
| **Changed, never run** | The applications and reports that differ and that no user ran — a change that serves nobody. Empty when the usage is not known. |
| **Differ** | What was changed, record by record. |
| **Not in the standard** | The objects with nothing to compare with — absent from the reference path code, or without a specification in either. |
| **All** | Every object compared. |

### The list \{#list\}

| Column | Content |
|---|---|
| **Object** | The object's name. |
| **Copy of** | For a copy, its original. |
| **What it is** | The object's description. |
| **Type** | Its type (`APPL`, `UBE`, `TBLE`, `BSFN`…). |
| **Compared with the standard** | **Identical**, **Differs** with its counts (`+` added, `−` removed, `~` changed), **Not in the standard** or **No specification**. |
| **Where it differs** | The kinds of records that differ, with their number: *Form controls (5), Event rules (2)*. |
| **OMW project** | The OMW projects that hold the object, with their description — why it was changed, when the project says it. A user's default project is left out when the object sits in another one. |
| **Last run**, **Users** | Its last use and its users, from the upgrade analysis. |
| **Retrofit days** | The days of retrofit the upgrade analysis gives it, when it is to retrofit. |

The list has the usual search, filters, grouping and columns, and exports to Excel.

---

## What differs, and by what \{#detail\}

Opening a row compares the object **now**, in the two path codes, and shows what was found:

- the verdict in one line: how many records were **added**, **removed** and **changed**, how many are the same, the schemas read and the OMW project that holds it;
- for an identical object, that the standard object can be taken back — or, for a copy, that it adds nothing to its original and that the standard object can be used in its place;
- one block per kind of record that differs — **Table columns**, **Indexes**, **Index columns**, **Business view**, **Data structure**, **Named mappings**, **Functions**, **Application**, **Forms**, **Form controls**, **Form texts**, **Report sections and objects**, **Report texts**, **Event rules**, **Named event rules** — with:
  - **Added by you**: the records only the path code examined holds;
  - **Removed by you — in the standard only**: the records only the reference holds;
  - **Changed**: each record identified in words (*form W4210A · control 12 · event 13*), its values as *standard → yours*, and, when its specification differs, **the lines that differ** — removed in red, added in green.

A long list is cut and the rest counted (*… and 12 more*); a long difference stops after 120 lines (*… and 40 more line(s)*).

---

## The comparison job \{#job\}

The job **Compare with the standard** (`nomajde-standard-compare`, menu **Jobs**) makes the comparison of one path code and keeps the verdict of every object; what the page lists is what the last run kept. Comparing a path code again replaces what it held. It takes a few minutes — 350 objects in under a minute on a demonstration system.

| Parameter | Default | Meaning |
|---|---|---|
| **Path code to examine** | `PD920` | The path code whose changed objects and copies are compared. |
| **Path code to compare with** | `PS920` | The reference: `PS920` for Oracle's objects as delivered, or another path code. |

The job is read-only on JD Edwards: it reads the specifications of the two path codes, runs no Oracle batch and adds nothing to JD Edwards. A path code cannot be compared with itself. It has no schedule: run it before an upgrade, or after a clean-up, to see where things stand.

Opening a row does not need the job again: the comparison of that object is made on the spot.

### A JD Edwards behind a database link \{#dblink\}

When Liberty reaches the JD Edwards libraries through a database link, the job and the page follow the JD Edwards pool: each table is read with its library from the pool's **Schemas** and that library's link from its **Database links**, under the same key — `OL` for the Object Librarian, `SY` for the OMW tables, `CO` for the central objects of both path codes. A library with no link is read locally. The specifications are stored as BLOBs, which the usual driver cannot read through a link: behind a `CO` link they are read by the thick Oracle driver, by itself — nothing to set. See [Schema and DB-link tokens](../../framework/connectors.md#schema-and-db-link-tokens).

---

## Access \{#access\}

The page is in the **Development** folder of the Nomajde menu. The predefined roles **Developer** and **Administrator** hold it, and may run the comparison job (see [Predefined roles](../overview.md#roles)). The buttons that open the job show only to those who may run it. The connection used to read JD Edwards needs read access to the Object Librarian, the central objects of the two path codes and the OMW tables.

---

## Tips & best practices \{#tips\}

- Start with **Can go back as they are**: each line is an object to take back from the standard at no cost, and the retrofit days it saves at every upgrade.
- Run the [upgrade analysis](../upgrade/analysis.md) of the same path code first: the last use, the users and the retrofit days come from it, and so does the **Changed, never run** view.
- Read the **OMW project** before deciding: its description often says why the object was changed, and who to ask.
- The reference need not be the pristine path code: the job accepts any path code to compare with.
- A difference made only of a copy's own names is not shown: what remains after the names are put back is a real change.

---

## Related

- [Prepare for upgrade](../upgrade/analysis.md) — what a release makes you retrofit, and how the original of a copy is found.
- [Object Management Workbench](../master-data/delivered-screens.md#omw) — the OMW projects, their objects and their log.
- [Cross Reference](../cross-reference.md) — where an object is used before taking it back.
- [Jobs](../jobs.md#standard-compare) — the comparison job in the Jobs folder.
