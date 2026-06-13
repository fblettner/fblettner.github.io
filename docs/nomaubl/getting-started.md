---
title: NomaUBL — The unified e-invoicing platform
description: "NomaUBL bridges any ERP to the French e-invoicing reform — UBL generation, pre-submission validation, Plateforme-Agréée routing, lifecycle tracking and operations on a single platform. Source-agnostic, PA-agnostic, ready for the 2026 RFE."
keywords: [NomaUBL, e-invoicing, e-reporting, Réforme de la Facturation Électronique, RFE, UBL, Plateforme Agréée, Plateforme de Dématérialisation Partenaire, PDP, JD Edwards, SAP, NetSuite, custom ERP, Schematron, EN 16931, extended-ctc-fr, B2B, B2G, B2C, getting started]
hide_table_of_contents: false
---

import Link from '@docusaurus/Link';

# NomaUBL

<div style={{padding: '36px 32px', borderRadius: '18px', margin: '8px 0 36px', background: 'linear-gradient(135deg, rgba(74,158,255,0.18) 0%, rgba(109,40,217,0.18) 100%)', border: '1px solid rgba(74,158,255,0.35)', position: 'relative', overflow: 'hidden'}}>
  <div style={{display: 'inline-block', padding: '4px 12px', borderRadius: '999px', background: 'rgba(74,158,255,0.2)', border: '1px solid rgba(74,158,255,0.4)', color: '#4a9eff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '14px'}}>French e-invoicing reform · 2026 wave</div>
  <h2 style={{fontSize: '34px', lineHeight: '1.15', fontWeight: 800, margin: '0 0 14px', letterSpacing: '-0.02em'}}>Bridge any ERP to the<br/><span style={{background: 'linear-gradient(135deg, #4a9eff, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>French e-invoicing reform.</span></h2>
  <p style={{fontSize: '16px', lineHeight: '1.6', maxWidth: '740px', margin: '0 0 24px', opacity: 0.92}}>NomaUBL is the unified platform that sits between your accounting system and the Plateforme Agréée. It generates compliant UBL from <b>any ERP</b>, pre-validates every invoice against XSD, Schematron and the French CTC extension, transmits to <b>any approved platform</b>, and tracks every invoice through its full lifecycle — submission, dispute, payment, cancellation.</p>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px'}}>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-1px', marginRight: '6px', opacity: 0.8}}><path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v9"/></svg>JD Edwards · SAP · NetSuite · Custom ERP</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-1px', marginRight: '6px', opacity: 0.8}}><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5 5.5-6"/></svg>EN 16931 + extended-ctc-fr</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-1px', marginRight: '6px', opacity: 0.8}}><path d="M9 2v6M15 2v6"/><path d="M7 8h10v2a5 5 0 0 1-10 0z"/><path d="M12 15v7"/></svg>Pluggable Plateforme Agréée</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-1px', marginRight: '6px', opacity: 0.8}}><path d="M14.6 6.6a3.6 3.6 0 0 0-4.8 4.8L4 17.2V20h2.8l5.8-5.8a3.6 3.6 0 0 0 4.8-4.8l-2.4 2.4-2-2z"/></svg>Self-service operations</span>
  </div>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
    <Link to="/nomaubl/configuration" style={{padding: '11px 22px', borderRadius: '8px', background: 'linear-gradient(135deg, #4a9eff, #2b8cff)', color: '#fff', fontSize: '13px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 16px rgba(74,158,255,0.3)'}}>Configure your environment →</Link>
    <Link to="/nomaubl/application" style={{padding: '11px 22px', borderRadius: '8px', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.18)', fontSize: '13px', fontWeight: 600, textDecoration: 'none'}}>Tour the application</Link>
  </div>
</div>

---

## The challenge — and why a PA alone is not enough

The French *Réforme de la Facturation Électronique* (RFE) makes structured e-invoicing **mandatory** for all B2B transactions. Companies must:

- **Generate** structured UBL invoices that comply with EN 16931 + the French CTC extension.
- **Transmit** them to their customer's Plateforme Agréée — the new state-supervised invoice rail.
- **Declare** B2C, intra-EU and out-of-scope transactions for VAT through the e-reporting flow.
- **Track** every invoice's lifecycle until it is paid, disputed, refused or cancelled.

A Plateforme Agréée handles the **transmission rail** — but not the upstream pipeline. The accounting team is still left to **produce a compliant UBL document from a non-compliant ERP output**, **detect rejections before submission**, **route by document type**, and **operate** disputes, retries, payment notifications and audit trails.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(255,69,58,0.3)', background: 'rgba(255,69,58,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#f87171', fontWeight: 700, marginBottom: '8px'}}>Without pre-validation</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Rejection cycles — and you still pay for them</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>A Plateforme Agréée bills per invoice <i>transmitted</i> — accepted <b>or</b> rejected. Every Schematron error caught downstream means a rejected invoice, a manual fix, a re-submission, a delay in cash collection — and a transmission charge. Pre-validation eliminates the round-trip and its cost.</div>
  </div>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(255,159,10,0.3)', background: 'rgba(255,159,10,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#fb923c', fontWeight: 700, marginBottom: '8px'}}>Without an operations layer</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Lifecycle blind spots</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>Refusals, disputes and recovery codes require finance-team action. The PA records them — your operations don't see them.</div>
  </div>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(0,122,255,0.3)', background: 'rgba(0,122,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#60a5fa', fontWeight: 700, marginBottom: '8px'}}>Without source flexibility</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Vendor lock-in</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>An ERP-specific add-on ties you to one vendor. A custom build ties you to one team. Both fail when the regulation evolves.</div>
  </div>
</div>

---

## What NomaUBL is

NomaUBL is a **single-tenant, on-premise platform** that owns the entire pipeline between your accounting system and the Plateforme Agréée. It is the layer where invoices are **generated, validated, sent, tracked and recovered** — independent of which ERP produced them and which PA accepts them.

<div style={{margin: '32px 0', padding: '24px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(165deg, rgba(74,158,255,0.04), rgba(109,40,217,0.025))', display: 'grid', gridTemplateColumns: 'minmax(160px, 1fr) minmax(220px, 1.35fr) minmax(170px, 1fr)', gap: '22px', alignItems: 'center'}}>

  <div>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800, opacity: 0.65, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px'}}>
      <span style={{display: 'inline-flex', verticalAlign: '-2px', marginRight: '2px'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"/><path d="M12 3v11"/><path d="M8 10l4 4 4-4"/></svg></span> Source systems
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#4a9eff'}}>JD Edwards</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>BIP · archive · FTP</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(50,215,75,0.35)', background: 'rgba(50,215,75,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#4ade80'}}>SAP</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>IDoc · spool · file</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(255,159,10,0.35)', background: 'rgba(255,159,10,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#fb923c'}}>NetSuite</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>SuiteScript · file</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(192,132,252,0.35)', background: 'rgba(192,132,252,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#c084fc'}}>Custom ERP</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>file · API · DB</div>
      </div>
    </div>
  </div>

  <div style={{position: 'relative', padding: '26px 22px', borderRadius: '18px', border: '1px solid rgba(74,158,255,0.5)', background: 'linear-gradient(160deg, rgba(74,158,255,0.22), rgba(109,40,217,0.18))', boxShadow: '0 12px 40px rgba(74,158,255,0.18), inset 0 1px 0 rgba(255,255,255,0.08)', textAlign: 'center'}}>
    <div style={{position: 'absolute', left: '-14px', top: '50%', transform: 'translateY(-50%)', fontSize: '22px', color: '#4a9eff', fontWeight: 800, lineHeight: 1, textShadow: '0 0 8px rgba(74,158,255,0.5)'}}>→</div>
    <div style={{position: 'absolute', right: '-14px', top: '50%', transform: 'translateY(-50%)', fontSize: '22px', color: '#4a9eff', fontWeight: 800, lineHeight: 1, textShadow: '0 0 8px rgba(74,158,255,0.5)'}}>→</div>
    <div style={{marginBottom: '6px', lineHeight: 1}}><svg width="30" height="30" viewBox="0 0 24 24" fill="#9db8ff" stroke="none"><path d="M12 3l1.6 5a3 3 0 0 0 1.9 1.9L20.5 11l-5 1.6a3 3 0 0 0-1.9 1.9L12 19.5l-1.6-5a3 3 0 0 0-1.9-1.9L3.5 11l5-1.6A3 3 0 0 0 10.4 7.5z"/></svg></div>
    <div style={{fontSize: '22px', fontWeight: 800, marginBottom: '2px', letterSpacing: '-0.01em', background: 'linear-gradient(135deg, #4a9eff, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>NomaUBL</div>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.72, marginBottom: '16px', fontWeight: 600}}>The unified e-invoicing layer</div>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '11px'}}>
      <div style={{padding: '8px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{marginBottom: '4px', lineHeight: 1}}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h4"/></svg></div>
        <div style={{fontSize: '10px', fontWeight: 700}}>Generate UBL</div>
      </div>
      <div style={{padding: '8px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{marginBottom: '4px', lineHeight: 1}}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5 5.5-6"/></svg></div>
        <div style={{fontSize: '10px', fontWeight: 700}}>Pre-validate</div>
      </div>
      <div style={{padding: '8px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{marginBottom: '4px', lineHeight: 1}}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16"/><rect x="6" y="11" width="3" height="7" rx="0.5"/><rect x="11" y="6" width="3" height="12" rx="0.5"/><rect x="16" y="9" width="3" height="9" rx="0.5"/></svg></div>
        <div style={{fontSize: '10px', fontWeight: 700}}>Track lifecycle</div>
      </div>
      <div style={{padding: '8px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{marginBottom: '4px', lineHeight: 1}}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.6 6.6a3.6 3.6 0 0 0-4.8 4.8L4 17.2V20h2.8l5.8-5.8a3.6 3.6 0 0 0 4.8-4.8l-2.4 2.4-2-2z"/></svg></div>
        <div style={{fontSize: '10px', fontWeight: 700}}>Operate</div>
      </div>
    </div>
  </div>

  <div>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800, opacity: 0.65, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px'}}>
      <span style={{display: 'inline-flex', verticalAlign: '-2px', marginRight: '2px'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M8.5 8.5a5 5 0 0 0 0 7"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M6 6a9 9 0 0 0 0 12"/><path d="M18 6a9 9 0 0 1 0 12"/></svg></span> Plateforme Agréée
    </div>
    <div style={{padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(192,132,252,0.45)', background: 'rgba(192,132,252,0.07)', marginBottom: '14px', boxShadow: '0 2px 10px rgba(192,132,252,0.06)'}}>
      <div style={{fontSize: '13px', fontWeight: 800, color: '#c084fc', marginBottom: '3px'}}>PA / PDP</div>
      <div style={{fontSize: '10px', opacity: 0.78, lineHeight: '1.45'}}>Configurable backend — any approved PA</div>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <div style={{padding: '10px 12px', borderRadius: '8px', background: 'rgba(74,158,255,0.05)', border: '1px solid rgba(74,158,255,0.3)', position: 'relative'}}>
        <div style={{fontSize: '9px', textTransform: 'uppercase', color: '#4a9eff', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '4px'}}>→ E-invoicing</div>
        <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
          <span style={{display: 'inline-flex', verticalAlign: '-3px'}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="3" width="12" height="18" rx="1"/><path d="M9.5 7h1M13.5 7h1M9.5 11h1M13.5 11h1M9.5 15h1M13.5 15h1"/></svg></span>
          <div style={{fontSize: '12px', fontWeight: 700}}>Buyer</div>
        </div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>via the buyer's PA</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', background: 'rgba(255,159,10,0.04)', border: '1px dashed rgba(255,159,10,0.45)', position: 'relative'}}>
        <div style={{fontSize: '9px', textTransform: 'uppercase', color: '#fb923c', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '4px'}}>⇢ E-reporting</div>
        <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
          <span style={{display: 'inline-flex', verticalAlign: '-3px'}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10l8-5 8 5"/><path d="M4 10h16"/><path d="M6 10v8M10 10v8M14 10v8M18 10v8"/><path d="M3 21h18"/></svg></span>
          <div style={{fontSize: '12px', fontWeight: 700}}>Tax authority</div>
        </div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>via the PA</div>
      </div>
    </div>
  </div>

</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '12px', margin: '20px 0 8px'}}>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.05)'}}>
    <div style={{marginBottom: '8px', lineHeight: 1}}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2v6M15 2v6"/><path d="M7 8h10v2a5 5 0 0 1-10 0z"/><path d="M12 15v7"/></svg></div>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}>PA-agnostic</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Switch your Plateforme Agréée without rebuilding your e-invoicing stack — the connector is configuration, not code.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.05)'}}>
    <div style={{marginBottom: '8px', lineHeight: 1}}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v9"/></svg></div>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}>ERP-agnostic</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>JDE today, SAP tomorrow, a divestiture next year — a new template plugs in without touching the rest.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.05)'}}>
    <div style={{marginBottom: '8px', lineHeight: 1}}><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="6.5" width="16" height="11" rx="2" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/><rect x="5" y="7.5" width="4.6" height="9" fill="#4a9eff"/><rect x="9.7" y="7.5" width="4.6" height="9" fill="#e5e7eb"/><rect x="14.4" y="7.5" width="4.6" height="9" fill="#f87171"/></svg></div>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}>French CTC ready</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>EN 16931 + <code>extended-ctc-fr</code> profile, BAR routing, e-reporting tracks, and the Cadre de facturation embedded.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.05)'}}>
    <div style={{marginBottom: '8px', lineHeight: 1}}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11l8-7 8 7"/><path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9"/><path d="M10 20v-6h4v6"/></svg></div>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}>On-premise</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Single-tenant deployment. UBL files, history and credentials remain inside your perimeter — and survive a PA outage.</div>
  </div>
</div>

---

## The full pipeline, on one platform

A single NomaUBL deployment covers every step from the raw ERP output to a tracked, paid invoice:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(155px, 1fr))', gap: '10px', margin: '28px 0 12px'}}>

  <div style={{padding: '20px 14px 18px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.14), rgba(74,158,255,0.02))', textAlign: 'center', position: 'relative', boxShadow: '0 2px 10px rgba(74,158,255,0.06)'}}>
    <div style={{position: 'absolute', top: '8px', left: '12px', fontSize: '10px', fontWeight: 800, color: '#4a9eff', letterSpacing: '0.1em'}}>01</div>
    <div style={{marginBottom: '10px', lineHeight: 1}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"/><path d="M12 3v11"/><path d="M8 10l4 4 4-4"/></svg></div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '4px', color: '#4a9eff'}}>Extract</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>archive · FTP/SFTP · BIP</div>
  </div>

  <div style={{padding: '20px 14px 18px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.14), rgba(74,158,255,0.02))', textAlign: 'center', position: 'relative', boxShadow: '0 2px 10px rgba(74,158,255,0.06)'}}>
    <div style={{position: 'absolute', top: '8px', left: '12px', fontSize: '10px', fontWeight: 800, color: '#4a9eff', letterSpacing: '0.1em'}}>02</div>
    <div style={{marginBottom: '10px', lineHeight: 1}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11a9 9 0 0 1 15-5l3 3"/><path d="M21 13a9 9 0 0 1-15 5l-3-3"/><path d="M21 3v6h-6"/><path d="M3 21v-6h6"/></svg></div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '4px', color: '#4a9eff'}}>Transform</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>XSLT · BIP RTF→XSL · burst</div>
  </div>

  <div style={{padding: '20px 14px 18px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.14), rgba(74,158,255,0.02))', textAlign: 'center', position: 'relative', boxShadow: '0 2px 10px rgba(74,158,255,0.06)'}}>
    <div style={{position: 'absolute', top: '8px', left: '12px', fontSize: '10px', fontWeight: 800, color: '#4a9eff', letterSpacing: '0.1em'}}>03</div>
    <div style={{marginBottom: '10px', lineHeight: 1}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h4"/></svg></div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '4px', color: '#4a9eff'}}>Generate UBL</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>EN 16931 + CTC-FR</div>
  </div>

  <div style={{padding: '20px 14px 18px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.14), rgba(74,158,255,0.02))', textAlign: 'center', position: 'relative', boxShadow: '0 2px 10px rgba(74,158,255,0.06)'}}>
    <div style={{position: 'absolute', top: '8px', left: '12px', fontSize: '10px', fontWeight: 800, color: '#4a9eff', letterSpacing: '0.1em'}}>04</div>
    <div style={{marginBottom: '10px', lineHeight: 1}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5 5.5-6"/></svg></div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '4px', color: '#4a9eff'}}>Validate</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>XSD · Schematron · rules</div>
  </div>

  <div style={{padding: '20px 14px 18px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.14), rgba(74,158,255,0.02))', textAlign: 'center', position: 'relative', boxShadow: '0 2px 10px rgba(74,158,255,0.06)'}}>
    <div style={{position: 'absolute', top: '8px', left: '12px', fontSize: '10px', fontWeight: 800, color: '#4a9eff', letterSpacing: '0.1em'}}>05</div>
    <div style={{marginBottom: '10px', lineHeight: 1}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"/><path d="M12 14V3"/><path d="M8 7l4-4 4 4"/></svg></div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '4px', color: '#4a9eff'}}>Submit</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>any Plateforme Agréée</div>
  </div>

  <div style={{padding: '20px 14px 18px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.14), rgba(74,158,255,0.02))', textAlign: 'center', position: 'relative', boxShadow: '0 2px 10px rgba(74,158,255,0.06)'}}>
    <div style={{position: 'absolute', top: '8px', left: '12px', fontSize: '10px', fontWeight: 800, color: '#4a9eff', letterSpacing: '0.1em'}}>06</div>
    <div style={{marginBottom: '10px', lineHeight: 1}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16"/><rect x="6" y="11" width="3" height="7" rx="0.5"/><rect x="11" y="6" width="3" height="12" rx="0.5"/><rect x="16" y="9" width="3" height="9" rx="0.5"/></svg></div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '4px', color: '#4a9eff'}}>Track</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>lifecycle · disputes · payments</div>
  </div>

  <div style={{padding: '20px 14px 18px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.14), rgba(74,158,255,0.02))', textAlign: 'center', position: 'relative', boxShadow: '0 2px 10px rgba(74,158,255,0.06)'}}>
    <div style={{position: 'absolute', top: '8px', left: '12px', fontSize: '10px', fontWeight: 800, color: '#4a9eff', letterSpacing: '0.1em'}}>07</div>
    <div style={{marginBottom: '10px', lineHeight: 1}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.6 6.6a3.6 3.6 0 0 0-4.8 4.8L4 17.2V20h2.8l5.8-5.8a3.6 3.6 0 0 0 4.8-4.8l-2.4 2.4-2-2z"/></svg></div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '4px', color: '#4a9eff'}}>Operate</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>set status · resend · email · credit note</div>
  </div>

</div>

| Step | What NomaUBL does |
|---|---|
| **Extract** | Pulls source documents from JDE BIP Print Queue, JDE archive directories, FTP/SFTP servers or local file system. Polls automatically or on demand. |
| **Transform** | Applies XSLT pre-processing, converts BI Publisher RTF templates to XSL, and bursts multi-document spools by configurable burst keys. |
| **Generate UBL** | Produces structured UBL 2.1 documents using template-aware defaults: parties, scheme IDs, BAR routing, business-process types, allowance/charge categories, French legal mentions. |
| **Validate** | Runs XSD + Schematron + the French CTC extension before any document leaves your perimeter. Surfaces every error, warning and recovery hint inline. |
| **Submit** | Sends to the configured Plateforme Agréée through a pluggable connector. The PA backend is configuration — swap it without code changes. |
| **Track** | Polls the PA for status updates and persists the full lifecycle: submitted, received, paid, disputed, refused, rejected — with reasons, expected actions, and timestamps. |
| **Operate** | Surfaces the right action at the right step: resend, email PDF to customer, mark payment received, issue credit note, set status, cancel accounting — driven by configurable API connectors. |

---

## One platform, every source system

NomaUBL is built around a **template model**: each source produces XML, NomaUBL maps it through templates, and every other module operates on the resulting UBL — regardless of which ERP fed it. Adding a new source is a configuration task, not a re-architecture.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.4)', background: 'linear-gradient(160deg, rgba(74,158,255,0.08), transparent)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <div style={{width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(74,158,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 800, color: '#4a9eff'}}>J</div>
      <div style={{fontWeight: 700, fontSize: '15px'}}>JD Edwards</div>
    </div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>Native integration with the JDE BIP Print Queue (<code>F9563110</code> / <code>F95630</code> / <code>F95631</code>), the archive directory and FTP/SFTP downloads.</div>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '6px'}}>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(74,158,255,0.12)', fontSize: '10px', fontWeight: 600, color: '#4a9eff'}}>BIP extract</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(74,158,255,0.12)', fontSize: '10px', fontWeight: 600, color: '#4a9eff'}}>Archive</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(74,158,255,0.12)', fontSize: '10px', fontWeight: 600, color: '#4a9eff'}}>FTP/SFTP</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(74,158,255,0.12)', fontSize: '10px', fontWeight: 600, color: '#4a9eff'}}>RTF templates</span>
    </div>
  </div>
  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(50,215,75,0.4)', background: 'linear-gradient(160deg, rgba(50,215,75,0.08), transparent)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <div style={{width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(50,215,75,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 800, color: '#4ade80'}}>S</div>
      <div style={{fontWeight: 700, fontSize: '15px'}}>SAP</div>
    </div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>IDoc, spool or file-based extracts feed NomaUBL through the directory or FTP channels. Templates map SAP fields to UBL semantics.</div>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '6px'}}>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(50,215,75,0.12)', fontSize: '10px', fontWeight: 600, color: '#4ade80'}}>Directory</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(50,215,75,0.12)', fontSize: '10px', fontWeight: 600, color: '#4ade80'}}>FTP/SFTP</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(50,215,75,0.12)', fontSize: '10px', fontWeight: 600, color: '#4ade80'}}>Bukrs mapping</span>
    </div>
  </div>
  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,159,10,0.4)', background: 'linear-gradient(160deg, rgba(255,159,10,0.08), transparent)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <div style={{width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,159,10,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 800, color: '#fb923c'}}>N</div>
      <div style={{fontWeight: 700, fontSize: '15px'}}>NetSuite</div>
    </div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>SuiteScript exports drop XML into the watched directory; templates handle subsidiary, tax-code and currency mapping.</div>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '6px'}}>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,159,10,0.12)', fontSize: '10px', fontWeight: 600, color: '#fb923c'}}>Directory</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,159,10,0.12)', fontSize: '10px', fontWeight: 600, color: '#fb923c'}}>FTP/SFTP</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,159,10,0.12)', fontSize: '10px', fontWeight: 600, color: '#fb923c'}}>Subsidiary mapping</span>
    </div>
  </div>
  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(192,132,252,0.4)', background: 'linear-gradient(160deg, rgba(192,132,252,0.08), transparent)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <div style={{width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(192,132,252,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 800, color: '#c084fc'}}>C</div>
      <div style={{fontWeight: 700, fontSize: '15px'}}>Custom ERP</div>
    </div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>Any system that produces XML, posts JSON to the API or writes a CSV to a watched directory becomes a source by adding one template.</div>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '6px'}}>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(192,132,252,0.14)', fontSize: '10px', fontWeight: 600, color: '#c084fc'}}>HTTP API</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(192,132,252,0.14)', fontSize: '10px', fontWeight: 600, color: '#c084fc'}}>Directory</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(192,132,252,0.14)', fontSize: '10px', fontWeight: 600, color: '#c084fc'}}>FTP/SFTP</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(192,132,252,0.14)', fontSize: '10px', fontWeight: 600, color: '#c084fc'}}>UBL passthrough</span>
    </div>
  </div>
</div>

---

## Six pillars, one product

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', margin: '24px 0'}}>

  <div style={{padding: '22px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(160deg, rgba(74,158,255,0.06), rgba(74,158,255,0.01))'}}>
    <div style={{marginBottom: '12px', lineHeight: 1}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"/><path d="M12 3v11"/><path d="M8 10l4 4 4-4"/></svg></div>
    <div style={{fontSize: '15px', fontWeight: 700, marginBottom: '6px', color: '#4a9eff'}}>Extract from anywhere</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>Connect to any ERP through a directory watcher, an FTP/SFTP poller, the JDE BIP Print Queue, or a JSON HTTP endpoint. Schedule batches, run on demand, or stream invoice-by-invoice.</div>
    <div style={{fontSize: '11px', opacity: 0.7}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-1px', marginRight: '5px', opacity: 0.7}}><path d="M7 17L16 8"/><path d="M9 7h8v8"/></svg><Link to="/nomaubl/extract">Extract module</Link> · <Link to="/nomaubl/sync/fetch-input">Fetch Input</Link></div>
  </div>

  <div style={{padding: '22px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(160deg, rgba(50,215,75,0.06), rgba(50,215,75,0.01))'}}>
    <div style={{marginBottom: '12px', lineHeight: 1}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h4"/></svg></div>
    <div style={{fontSize: '15px', fontWeight: 700, marginBottom: '6px', color: '#4ade80'}}>Generate compliant UBL</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>Templates map source fields to UBL 2.1, fill in the French CTC extension, apply scheme IDs, BAR routing, business-process codes, allowances and the Cadre de facturation. AUTO mode resolves the right path per document type.</div>
    <div style={{fontSize: '11px', opacity: 0.7}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-1px', marginRight: '5px', opacity: 0.7}}><path d="M7 17L16 8"/><path d="M9 7h8v8"/></svg><Link to="/nomaubl/processing/document">Process Document</Link> · <Link to="/nomaubl/ubl-tools/ubl-defaults/overview">UBL Defaults</Link></div>
  </div>

  <div style={{padding: '22px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(160deg, rgba(192,132,252,0.06), rgba(192,132,252,0.01))'}}>
    <div style={{marginBottom: '12px', lineHeight: 1}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5 5.5-6"/></svg></div>
    <div style={{fontSize: '15px', fontWeight: 700, marginBottom: '6px', color: '#c084fc'}}>Pre-validate, before the PA</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>XSD + Schematron + the French CTC profile run inside NomaUBL. Every error, warning and recovery hint is surfaced inline — the PA never sees a knowingly broken document, and rejection cycles stop costing you days.</div>
    <div style={{fontSize: '11px', opacity: 0.7}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-1px', marginRight: '5px', opacity: 0.7}}><path d="M7 17L16 8"/><path d="M9 7h8v8"/></svg><Link to="/nomaubl/ubl-tools/validate">Validate</Link> · <Link to="/nomaubl/processing/document">Process Document</Link></div>
  </div>

  <div style={{padding: '22px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(160deg, rgba(255,159,10,0.06), rgba(255,159,10,0.01))'}}>
    <div style={{marginBottom: '12px', lineHeight: 1}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"/><path d="M12 14V3"/><path d="M8 7l4-4 4 4"/></svg></div>
    <div style={{fontSize: '15px', fontWeight: 700, marginBottom: '6px', color: '#fb923c'}}>Submit & track on any PA</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>The PA backend is a configuration. Submit, retrieve lifecycle statuses, persist disputes, refusals, payment notifications. Switch your Plateforme Agréée without rebuilding the rest of your stack.</div>
    <div style={{fontSize: '11px', opacity: 0.7}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-1px', marginRight: '5px', opacity: 0.7}}><path d="M7 17L16 8"/><path d="M9 7h8v8"/></svg><Link to="/nomaubl/sync/import">Import</Link> · <Link to="/nomaubl/sync/retrieve-statuses">Retrieve Statuses</Link></div>
  </div>

  <div style={{padding: '22px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(160deg, rgba(255,69,58,0.06), rgba(255,69,58,0.01))'}}>
    <div style={{marginBottom: '12px', lineHeight: 1}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.6 6.6a3.6 3.6 0 0 0-4.8 4.8L4 17.2V20h2.8l5.8-5.8a3.6 3.6 0 0 0 4.8-4.8l-2.4 2.4-2-2z"/></svg></div>
    <div style={{fontSize: '15px', fontWeight: 700, marginBottom: '6px', color: '#f87171'}}>Operate the lifecycle</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>Resend, set status, email PDF, mark payment received, issue a credit note, cancel accounting — the right action surfaces at the right step. Every event is logged, append-only, audit-ready.</div>
    <div style={{fontSize: '11px', opacity: 0.7}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-1px', marginRight: '5px', opacity: 0.7}}><path d="M7 17L16 8"/><path d="M9 7h8v8"/></svg><Link to="/nomaubl/application/invoices">E-Invoicing</Link> · <Link to="/nomaubl/application/integration-errors">Integration Errors</Link></div>
  </div>

  <div style={{padding: '22px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(160deg, rgba(0,122,255,0.06), rgba(0,122,255,0.01))'}}>
    <div style={{marginBottom: '12px', lineHeight: 1}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M18.8 5.2l-2.1 2.1M7.3 16.7l-2.1 2.1"/></svg></div>
    <div style={{fontSize: '15px', fontWeight: 700, marginBottom: '6px', color: '#60a5fa'}}>Govern with self-service config</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>Reference lists, document types, suppliers, BAR routing, payment codes, VAT categories, currency mappings — all maintained from the UI. Finance owns the rules, IT owns the platform.</div>
    <div style={{fontSize: '11px', opacity: 0.7}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-1px', marginRight: '5px', opacity: 0.7}}><path d="M7 17L16 8"/><path d="M9 7h8v8"/></svg><Link to="/nomaubl/configuration">Configuration</Link> · <Link to="/nomaubl/management/file-versions">File Versions</Link></div>
  </div>

</div>

---

## NomaUBL vs the alternatives

A Plateforme Agréée is required by the regulation — but it is not the whole solution. The choices below show why NomaUBL is the natural complement.

<div style={{margin: '24px 0', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.12)', overflow: 'hidden'}}>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: 'rgba(255,255,255,0.03)', padding: '14px 18px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
    <div>Capability</div>
    <div style={{textAlign: 'center', opacity: 0.75}}>PA only</div>
    <div style={{textAlign: 'center', opacity: 0.75}}>Custom build</div>
    <div style={{textAlign: 'center', color: '#4a9eff'}}>NomaUBL</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '13px', alignItems: 'center'}}>
    <div>UBL generation from any ERP</div>
    <div style={{textAlign: 'center', color: '#f87171', fontWeight: 700}}>—</div>
    <div style={{textAlign: 'center', color: '#fb923c', fontWeight: 700}}>1 ERP at a time</div>
    <div style={{textAlign: 'center', color: '#4ade80', fontWeight: 700}}>✓ JDE · SAP · NS · custom</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '13px', alignItems: 'center'}}>
    <div>Pre-submission validation (XSD + Schematron + CTC-FR)</div>
    <div style={{textAlign: 'center', color: '#f87171', fontWeight: 700}}>—</div>
    <div style={{textAlign: 'center', color: '#fb923c', fontWeight: 700}}>Custom rules</div>
    <div style={{textAlign: 'center', color: '#4ade80', fontWeight: 700}}>✓ Built-in, updated</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '13px', alignItems: 'center'}}>
    <div>Lifecycle tracking + recovery actions</div>
    <div style={{textAlign: 'center', color: '#fb923c', fontWeight: 700}}>Read-only</div>
    <div style={{textAlign: 'center', color: '#fb923c', fontWeight: 700}}>To build</div>
    <div style={{textAlign: 'center', color: '#4ade80', fontWeight: 700}}>✓ Operations UI</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '13px', alignItems: 'center'}}>
    <div>BAR routing &amp; e-reporting tracks</div>
    <div style={{textAlign: 'center', color: '#f87171', fontWeight: 700}}>Per-PA</div>
    <div style={{textAlign: 'center', color: '#fb923c', fontWeight: 700}}>To build</div>
    <div style={{textAlign: 'center', color: '#4ade80', fontWeight: 700}}>✓ Configuration</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '13px', alignItems: 'center'}}>
    <div>Self-service ops (suppliers, BAR, defaults)</div>
    <div style={{textAlign: 'center', color: '#f87171', fontWeight: 700}}>—</div>
    <div style={{textAlign: 'center', color: '#fb923c', fontWeight: 700}}>IT-owned</div>
    <div style={{textAlign: 'center', color: '#4ade80', fontWeight: 700}}>✓ Finance-owned</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '13px', alignItems: 'center'}}>
    <div>PA-portability (switch without rebuild)</div>
    <div style={{textAlign: 'center', color: '#f87171', fontWeight: 700}}>Vendor-locked</div>
    <div style={{textAlign: 'center', color: '#f87171', fontWeight: 700}}>Re-write</div>
    <div style={{textAlign: 'center', color: '#4ade80', fontWeight: 700}}>✓ Connector swap</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '13px', alignItems: 'center'}}>
    <div>Time to first compliant invoice</div>
    <div style={{textAlign: 'center', color: '#fb923c', fontWeight: 700}}>+ pipeline</div>
    <div style={{textAlign: 'center', color: '#f87171', fontWeight: 700}}>6–12 months</div>
    <div style={{textAlign: 'center', color: '#4ade80', fontWeight: 700}}>✓ Days–weeks</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 18px', fontSize: '13px', alignItems: 'center'}}>
    <div>Audit trail (append-only lifecycle)</div>
    <div style={{textAlign: 'center', color: '#fb923c', fontWeight: 700}}>PA-side</div>
    <div style={{textAlign: 'center', color: '#fb923c', fontWeight: 700}}>To build</div>
    <div style={{textAlign: 'center', color: '#4ade80', fontWeight: 700}}>✓ Local + signed</div>
  </div>
</div>

The right pairing is **NomaUBL + a Plateforme Agréée** — not one or the other. NomaUBL takes care of everything *upstream* of the PA and *around* the PA; the PA handles the regulated transmission rail. Together, they cover the regulation end to end.

---

## A day in the life

Different teams hit the platform for different reasons. NomaUBL is built so each persona has a clear, narrow surface.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '16px', margin: '24px 0'}}>

  <div style={{padding: '22px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.08), rgba(74,158,255,0.01))', boxShadow: '0 4px 16px rgba(74,158,255,0.05)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', paddingBottom: '14px', borderBottom: '1px solid rgba(74,158,255,0.2)'}}>
      <div style={{lineHeight: 1}}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg></div>
      <div>
        <div style={{fontSize: '15px', fontWeight: 700, color: '#4a9eff'}}>Finance & Accounting</div>
        <div style={{fontSize: '11px', opacity: 0.65, marginTop: '2px'}}>Day-to-day invoice operations</div>
      </div>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <div style={{padding: '11px 13px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 600, marginBottom: '3px'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-2px', marginRight: '6px', opacity: 0.85}}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/></svg>Send invoices</div>
        <div style={{fontSize: '11px', opacity: 0.7, fontStyle: 'italic'}}>Edit UBL · Resend · Email PDF</div>
      </div>
      <div style={{padding: '11px 13px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 600, marginBottom: '3px'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-2px', marginRight: '6px', opacity: 0.85}}><path d="M12 4v17"/><path d="M7 21h10"/><path d="M5 7l7-2 7 2"/><path d="M5 7l-2.5 5.5a3 3 0 0 0 5 0z"/><path d="M19 7l-2.5 5.5a3 3 0 0 0 5 0z"/></svg>Handle disputes</div>
        <div style={{fontSize: '11px', opacity: 0.7, fontStyle: 'italic'}}>207 → credit note · 213 → re-issue</div>
      </div>
      <div style={{padding: '11px 13px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 600, marginBottom: '3px'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-2px', marginRight: '6px', opacity: 0.85}}><circle cx="12" cy="12" r="9"/><path d="M15.5 9.3a4 4 0 1 0 0 5.4"/><path d="M7.5 11h6M7.5 13h6"/></svg>Mark payments</div>
        <div style={{fontSize: '11px', opacity: 0.7, fontStyle: 'italic'}}>Status 205 · API connectors</div>
      </div>
    </div>
  </div>

  <div style={{padding: '22px', borderRadius: '14px', border: '1px solid rgba(50,215,75,0.35)', background: 'linear-gradient(165deg, rgba(50,215,75,0.08), rgba(50,215,75,0.01))', boxShadow: '0 4px 16px rgba(50,215,75,0.05)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', paddingBottom: '14px', borderBottom: '1px solid rgba(50,215,75,0.2)'}}>
      <div style={{lineHeight: 1}}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.6 6.6a3.6 3.6 0 0 0-4.8 4.8L4 17.2V20h2.8l5.8-5.8a3.6 3.6 0 0 0 4.8-4.8l-2.4 2.4-2-2z"/></svg></div>
      <div>
        <div style={{fontSize: '15px', fontWeight: 700, color: '#4ade80'}}>IT & Integration</div>
        <div style={{fontSize: '11px', opacity: 0.65, marginTop: '2px'}}>Reliable batch + observability</div>
      </div>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <div style={{padding: '11px 13px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 600, marginBottom: '3px'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-2px', marginRight: '6px', opacity: 0.85}}><path d="M13 2L4 14h7l-2 8 9-12h-7z"/></svg>Run scheduled batches</div>
        <div style={{fontSize: '11px', opacity: 0.7, fontStyle: 'italic'}}>fetch-all · cron · -serve scheduler</div>
      </div>
      <div style={{padding: '11px 13px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 600, marginBottom: '3px'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-2px', marginRight: '6px', opacity: 0.85}}><path d="M12 3l9.5 16.5a1 1 0 0 1-.9 1.5H3.4a1 1 0 0 1-.9-1.5z"/><path d="M12 9v5"/><path d="M12 17.4h.01"/></svg>Watch errors</div>
        <div style={{fontSize: '11px', opacity: 0.7, fontStyle: 'italic'}}>Integration Errors · logs</div>
      </div>
      <div style={{padding: '11px 13px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 600, marginBottom: '3px'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-2px', marginRight: '6px', opacity: 0.85}}><path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v9"/></svg>Promote configurations</div>
        <div style={{fontSize: '11px', opacity: 0.7, fontStyle: 'italic'}}>File Versions · package · import</div>
      </div>
    </div>
  </div>

  <div style={{padding: '22px', borderRadius: '14px', border: '1px solid rgba(192,132,252,0.35)', background: 'linear-gradient(165deg, rgba(192,132,252,0.08), rgba(192,132,252,0.01))', boxShadow: '0 4px 16px rgba(192,132,252,0.05)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', paddingBottom: '14px', borderBottom: '1px solid rgba(192,132,252,0.2)'}}>
      <div style={{lineHeight: 1}}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10l8-5 8 5"/><path d="M4 10h16"/><path d="M6 10v8M10 10v8M14 10v8M18 10v8"/><path d="M3 21h18"/></svg></div>
      <div>
        <div style={{fontSize: '15px', fontWeight: 700, color: '#c084fc'}}>Compliance & Audit</div>
        <div style={{fontSize: '11px', opacity: 0.65, marginTop: '2px'}}>Append-only audit trail</div>
      </div>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <div style={{padding: '11px 13px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 600, marginBottom: '3px'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-2px', marginRight: '6px', opacity: 0.85}}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/></svg>Inspect lifecycle</div>
        <div style={{fontSize: '11px', opacity: 0.7, fontStyle: 'italic'}}>History tab · append-only</div>
      </div>
      <div style={{padding: '11px 13px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 600, marginBottom: '3px'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-2px', marginRight: '6px', opacity: 0.85}}><circle cx="12" cy="12" r="9"/><path d="M15.6 8.4l-2 5.2-5.2 2 2-5.2z"/></svg>Trace any invoice</div>
        <div style={{fontSize: '11px', opacity: 0.7, fontStyle: 'italic'}}>UBL Reference · status codes</div>
      </div>
      <div style={{padding: '11px 13px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 600, marginBottom: '3px'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-2px', marginRight: '6px', opacity: 0.85}}><path d="M4 4h6a2 2 0 0 1 2 2v14a2.5 2.5 0 0 0-2.5-2H4z"/><path d="M20 4h-6a2 2 0 0 0-2 2v14a2.5 2.5 0 0 1 2.5-2H20z"/></svg>Govern reference data</div>
        <div style={{fontSize: '11px', opacity: 0.7, fontStyle: 'italic'}}>Statuses · reason codes · BAR rules</div>
      </div>
    </div>
  </div>

</div>

| Persona | Primary surface | Outcome |
|---|---|---|
| **Finance & Accounting** | *Application* tab — Dashboard, E-Invoicing, E-Reporting | Daily invoice ops without leaving NomaUBL: send, dispute, recover, follow up. |
| **IT & Integration** | *Sync*, *Processing*, *Management* tabs — and the CLI | Reliable batch operations, observable errors, deployable configurations. |
| **Compliance & Audit** | *References* tab + *History* on every invoice | A complete, signed audit trail of every state and decision — local, queryable, append-only. |

---

## Why teams choose NomaUBL

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{padding: '20px', borderRadius: '14px', background: 'linear-gradient(160deg, rgba(74,158,255,0.1), rgba(74,158,255,0.02))', border: '1px solid rgba(74,158,255,0.3)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4a9eff', fontWeight: 700, marginBottom: '8px'}}>Faster to compliant</div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '6px'}}>Days to weeks, not quarters</div>
    <div style={{fontSize: '12px', opacity: 0.82, lineHeight: '1.55'}}>Templates, defaults, BAR routing and validation rules ship out of the box. A new ERP is one template away — not a six-month project.</div>
  </div>
  <div style={{padding: '20px', borderRadius: '14px', background: 'linear-gradient(160deg, rgba(50,215,75,0.1), rgba(50,215,75,0.02))', border: '1px solid rgba(50,215,75,0.3)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4ade80', fontWeight: 700, marginBottom: '8px'}}>Fewer rejections</div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '6px'}}>Errors caught before the PA</div>
    <div style={{fontSize: '12px', opacity: 0.82, lineHeight: '1.55'}}>Pre-submission validation eliminates the round-trip: invoices either go through cleanly, or fail loud and fixable before any external system sees them.</div>
  </div>
  <div style={{padding: '20px', borderRadius: '14px', background: 'linear-gradient(160deg, rgba(192,132,252,0.1), rgba(192,132,252,0.02))', border: '1px solid rgba(192,132,252,0.3)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#c084fc', fontWeight: 700, marginBottom: '8px'}}>Lower TCO</div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '6px'}}>One platform, every entity</div>
    <div style={{fontSize: '12px', opacity: 0.82, lineHeight: '1.55'}}>One licence covers JDE + SAP + NetSuite + custom — no per-ERP module, no separate skill set, no parallel pipelines to maintain.</div>
  </div>
  <div style={{padding: '20px', borderRadius: '14px', background: 'linear-gradient(160deg, rgba(255,159,10,0.1), rgba(255,159,10,0.02))', border: '1px solid rgba(255,159,10,0.3)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#fb923c', fontWeight: 700, marginBottom: '8px'}}>Lock-in-free</div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '6px'}}>Your PA, your call</div>
    <div style={{fontSize: '12px', opacity: 0.82, lineHeight: '1.55'}}>The Plateforme Agréée connector is configuration, not code. Renegotiate, switch, multi-source — your e-invoicing stack moves with you.</div>
  </div>
</div>

---

## Get started in four steps

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', position: 'relative'}}>
    <div style={{position: 'absolute', top: '14px', right: '14px', fontSize: '32px', fontWeight: 800, opacity: 0.12}}>1</div>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4a9eff', fontWeight: 700, marginBottom: '8px'}}>Install</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Lay out an environment</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55', marginBottom: '10px'}}>Run <code>java -jar nomaubl.jar -install /opt/nomaubl/demo</code> to provision the directory tree, embedded XSL framework and starter config.</div>
    <Link to="/nomaubl/management/command-line" style={{fontSize: '11px', color: '#4a9eff', fontWeight: 600, textDecoration: 'none'}}>→ Command Line</Link>
  </div>
  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', position: 'relative'}}>
    <div style={{position: 'absolute', top: '14px', right: '14px', fontSize: '32px', fontWeight: 800, opacity: 0.12}}>2</div>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4a9eff', fontWeight: 700, marginBottom: '8px'}}>Configure</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Connect your data</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55', marginBottom: '10px'}}>Edit <code>config.json</code> to point at your DB, ERP source, Plateforme Agréée and SMTP server. Initialize the database from the UI.</div>
    <Link to="/nomaubl/configuration" style={{fontSize: '11px', color: '#4a9eff', fontWeight: 600, textDecoration: 'none'}}>→ Configuration</Link>
  </div>
  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', position: 'relative'}}>
    <div style={{position: 'absolute', top: '14px', right: '14px', fontSize: '32px', fontWeight: 800, opacity: 0.12}}>3</div>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4a9eff', fontWeight: 700, marginBottom: '8px'}}>Map</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Set defaults &amp; routing</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55', marginBottom: '10px'}}>Suppliers, scheme IDs, BAR routing, payment codes, VAT categories, document types — once configured, every UBL is generated correctly without per-invoice fixes.</div>
    <Link to="/nomaubl/ubl-tools/ubl-defaults/overview" style={{fontSize: '11px', color: '#4a9eff', fontWeight: 600, textDecoration: 'none'}}>→ UBL Defaults</Link>
  </div>
  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', position: 'relative'}}>
    <div style={{position: 'absolute', top: '14px', right: '14px', fontSize: '32px', fontWeight: 800, opacity: 0.12}}>4</div>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4a9eff', fontWeight: 700, marginBottom: '8px'}}>Run</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Process &amp; track</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55', marginBottom: '10px'}}>Start <code>nomaubl.sh start &lt;env&gt;</code>, drop a sample invoice into <code>input/</code>, watch it flow through extract → UBL → validate → submit → track in real time.</div>
    <Link to="/nomaubl/application/dashboard" style={{fontSize: '11px', color: '#4a9eff', fontWeight: 600, textDecoration: 'none'}}>→ Application</Link>
  </div>
</div>

---

## Where to go next

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', margin: '24px 0'}}>
  <Link to="/nomaubl/application" style={{display: 'block', padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', textDecoration: 'none', color: 'inherit'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-2px', marginRight: '6px', opacity: 0.85}}><path d="M4 20h16"/><rect x="6" y="11" width="3" height="7" rx="0.5"/><rect x="11" y="6" width="3" height="12" rx="0.5"/><rect x="16" y="9" width="3" height="9" rx="0.5"/></svg>Application →</div>
    <div style={{fontSize: '11px', opacity: 0.7}}>Dashboard, E-Invoicing, E-Reporting, E-Directory, Integration Errors.</div>
  </Link>
  <Link to="/nomaubl/processing/document" style={{display: 'block', padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', textDecoration: 'none', color: 'inherit'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-2px', marginRight: '6px', opacity: 0.85}}><path d="M3 11a9 9 0 0 1 15-5l3 3"/><path d="M21 13a9 9 0 0 1-15 5l-3-3"/><path d="M21 3v6h-6"/><path d="M3 21v-6h6"/></svg>Processing →</div>
    <div style={{fontSize: '11px', opacity: 0.7}}>Process Document, Extract and Process, Process API.</div>
  </Link>
  <Link to="/nomaubl/ubl-tools/validate" style={{display: 'block', padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', textDecoration: 'none', color: 'inherit'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-2px', marginRight: '6px', opacity: 0.85}}><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5 5.5-6"/></svg>UBL Tools →</div>
    <div style={{fontSize: '11px', opacity: 0.7}}>Validate, XML Viewer, XSL Editor, the full UBL Defaults set.</div>
  </Link>
  <Link to="/nomaubl/configuration" style={{display: 'block', padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', textDecoration: 'none', color: 'inherit'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-2px', marginRight: '6px', opacity: 0.85}}><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M18.8 5.2l-2.1 2.1M7.3 16.7l-2.1 2.1"/></svg>Configuration →</div>
    <div style={{fontSize: '11px', opacity: 0.7}}>Documents, system parameters, connectors, security and reference lists.</div>
  </Link>
  <Link to="/nomaubl/management/command-line" style={{display: 'block', padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', textDecoration: 'none', color: 'inherit'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-2px', marginRight: '6px', opacity: 0.85}}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3"/><path d="M13 15h4"/></svg>Command Line →</div>
    <div style={{fontSize: '11px', opacity: 0.7}}>Service control, batch jobs and the full JAR mode reference.</div>
  </Link>
  <Link to="/nomaubl/references/status-reference" style={{display: 'block', padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', textDecoration: 'none', color: 'inherit'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: '-2px', marginRight: '6px', opacity: 0.85}}><path d="M4 4h6a2 2 0 0 1 2 2v14a2.5 2.5 0 0 0-2.5-2H4z"/><path d="M20 4h-6a2 2 0 0 0-2 2v14a2.5 2.5 0 0 1 2.5-2H20z"/></svg>References →</div>
    <div style={{fontSize: '11px', opacity: 0.7}}>Status codes, reason codes, UBL semantics, HTTP API.</div>
  </Link>
</div>
