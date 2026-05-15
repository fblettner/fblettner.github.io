---
title: Nomajde — The JD Edwards companion application
description: "Nomajde sits next to JD Edwards EnterpriseOne and turns the day-to-day work — master data, security, reporting, monitoring — into one set of grids with inline edits. SQL and AIS API combined, no fat-client navigation, no manual exports."
keywords: [Nomajde, JD Edwards, JDE, EnterpriseOne, security workbench, user management, role management, UDC, BIP, monitoring, AIS, JDE companion]
hide_table_of_contents: false
---

import Link from '@docusaurus/Link';

# Nomajde

<div style={{padding: '36px 32px', borderRadius: '18px', margin: '8px 0 36px', background: 'linear-gradient(135deg, rgba(74,158,255,0.18) 0%, rgba(251,146,60,0.14) 100%)', border: '1px solid rgba(74,158,255,0.35)', position: 'relative', overflow: 'hidden'}}>
  <div style={{display: 'inline-block', padding: '4px 12px', borderRadius: '999px', background: 'rgba(74,158,255,0.2)', border: '1px solid rgba(74,158,255,0.4)', color: '#4a9eff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '14px'}}>JD Edwards EnterpriseOne · Companion application</div>
  <h2 style={{fontSize: '34px', lineHeight: '1.15', fontWeight: 800, margin: '0 0 14px', letterSpacing: '-0.02em'}}>JD Edwards work,<br/><span style={{background: 'linear-gradient(135deg, #4a9eff, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>on one searchable grid.</span></h2>
  <p style={{fontSize: '16px', lineHeight: '1.6', maxWidth: '780px', margin: '0 0 24px', opacity: 0.92}}>Nomajde is the day-to-day companion for JD Edwards EnterpriseOne. It collapses what JDE typically spreads across many forms — user master, role description, security workbench, environments, UDC tables, transactions, BIP scheduling — into a smaller set of grids with inline editing. Every write goes straight to JDE through a combination of <b>SQL inserts on the security tables</b> and <b>AIS REST calls</b> for the operations that need them (password reset, security record provisioning). No nightly extract, no staged copy.</p>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px'}}>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(74,158,255,0.16)', border: '1px solid rgba(74,158,255,0.45)', fontSize: '12px', fontWeight: 700, color: '#4a9eff'}}>Live JDE data · SQL + AIS API</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(251,146,60,0.14)', border: '1px solid rgba(251,146,60,0.42)', fontSize: '12px', fontWeight: 700, color: '#fb923c'}}>Grid editing · bulk Excel upload</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}>UDC · Address Book · Items · GL</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}>P00950 · P95921 · P0093 · P0092</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}>On-premise · single-tenant</span>
  </div>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
    <Link to="/liberty/nomajde/security-maintenance/user-management" style={{padding: '11px 22px', borderRadius: '8px', background: 'linear-gradient(135deg, #4a9eff, #2b8cff)', color: '#fff', fontSize: '13px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 16px rgba(74,158,255,0.3)'}}>Open Security Maintenance →</Link>
    <Link to="/liberty/nomajde/master-data/udc-types" style={{padding: '11px 22px', borderRadius: '8px', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.18)', fontSize: '13px', fontWeight: 600, textDecoration: 'none'}}>Explore Master Data</Link>
  </div>
</div>

---

## The problem Nomajde solves

JD Edwards is a depth product. Most day-to-day tasks — add a user, attach a role, update a UDC value, schedule a BIP report — require navigating between five or six forms, sometimes across the fat client and the web client. Operators get the job done; they spend twice the time they should.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(248,113,113,0.3)', background: 'rgba(248,113,113,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#f87171', fontWeight: 700, marginBottom: '8px'}}>Form ping-pong</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Five forms to onboard one user</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>Create the user in P0092, set the password in the security workbench, attach the roles in P95921, pick the environments in P0093, copy the security from a reference user — each form on its own, with its own data check.</div>
  </div>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(251,146,60,0.3)', background: 'rgba(251,146,60,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#fb923c', fontWeight: 700, marginBottom: '8px'}}>Bulk edits hurt</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>No way to edit 200 UDC values at once</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>JDE forms are one-row-at-a-time editors. When the SI delivers a new module with 200 UDC values, the operator types them in by hand — or hacks together a SQL script and hopes nothing breaks.</div>
  </div>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(34,197,94,0.3)', background: 'rgba(34,197,94,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#22c55e', fontWeight: 700, marginBottom: '8px'}}>Reporting is its own world</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>BIP runs leave no trail</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>Scheduling a BIP report goes through the JDE scheduler, the output lives wherever the printer queue dropped it, and the audit of "who ran what, when" is left to the operator's memory.</div>
  </div>
</div>

Nomajde replaces the form ping-pong with one screen per topic, the one-row-at-a-time editor with grid editing and Excel upload, and the unwritten audit trail with a logged history of every run and every change.

---

## What Nomajde is

A web application that sits next to JD Edwards and reads its data live — through SQL on the JDE security and master tables, and through the JDE AIS REST API for the operations that need a JDE workflow behind them (password reset, user provisioning, processing-option overrides). Every screen writes back to JDE — no staging copy, no replay.

<div style={{margin: '32px 0', padding: '24px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(165deg, rgba(74,158,255,0.04), rgba(251,146,60,0.025))', display: 'grid', gridTemplateColumns: 'minmax(170px, 1fr) minmax(220px, 1.35fr) minmax(180px, 1fr)', gap: '22px', alignItems: 'center'}}>

  <div>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800, opacity: 0.65, marginBottom: '12px'}}>Behind the screens</div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#4a9eff'}}>SQL — security & master tables</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>F0092 · F00926 · F95921 · F0093 · F00950 · F0004 · F0005</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(251,146,60,0.35)', background: 'rgba(251,146,60,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#fb923c'}}>AIS REST API</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>token · provisioning · password reset</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(34,197,94,0.35)', background: 'rgba(34,197,94,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#22c55e'}}>BIP scheduler</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>schedule · archive · resend</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(192,132,252,0.35)', background: 'rgba(192,132,252,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#c084fc'}}>JDE Object Librarian</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>menus · objects · versions</div>
      </div>
    </div>
  </div>

  <div style={{position: 'relative', padding: '26px 22px', borderRadius: '18px', border: '1px solid rgba(74,158,255,0.5)', background: 'linear-gradient(160deg, rgba(74,158,255,0.22), rgba(251,146,60,0.18))', boxShadow: '0 12px 40px rgba(74,158,255,0.18), inset 0 1px 0 rgba(255,255,255,0.08)', textAlign: 'center'}}>
    <div style={{position: 'absolute', left: '-14px', top: '50%', transform: 'translateY(-50%)', fontSize: '22px', color: '#4a9eff', fontWeight: 800, lineHeight: 1, textShadow: '0 0 8px rgba(74,158,255,0.5)'}}>→</div>
    <div style={{position: 'absolute', right: '-14px', top: '50%', transform: 'translateY(-50%)', fontSize: '22px', color: '#4a9eff', fontWeight: 800, lineHeight: 1, textShadow: '0 0 8px rgba(74,158,255,0.5)'}}>→</div>
    <div style={{fontSize: '22px', fontWeight: 800, marginBottom: '4px', letterSpacing: '-0.01em', background: 'linear-gradient(135deg, #4a9eff, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Nomajde</div>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.72, marginBottom: '16px', fontWeight: 600}}>The JD Edwards companion</div>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '11px'}}>
      <div style={{padding: '10px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '11px', fontWeight: 700}}>Master Data</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>UDC · Address Book</div>
      </div>
      <div style={{padding: '10px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '11px', fontWeight: 700}}>Security</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>users · roles · workbench</div>
      </div>
      <div style={{padding: '10px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '11px', fontWeight: 700}}>Transactions</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>AP · AR · GL</div>
      </div>
      <div style={{padding: '10px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '11px', fontWeight: 700}}>Reporting</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>BIP · archive</div>
      </div>
    </div>
  </div>

  <div>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800, opacity: 0.65, marginBottom: '12px'}}>Day-to-day work</div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(34,197,94,0.45)', background: 'rgba(34,197,94,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#22c55e'}}>Grid edits</div>
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>inline edit · bulk update</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(74,158,255,0.45)', background: 'rgba(74,158,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#4a9eff'}}>Excel upload</div>
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>SI bundles · roll-outs</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(192,132,252,0.45)', background: 'rgba(192,132,252,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#c084fc'}}>Drill-down grids</div>
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>filter by every column</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(251,146,60,0.45)', background: 'rgba(251,146,60,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#fb923c'}}>Audit trail</div>
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>who changed what, when</div>
      </div>
    </div>
  </div>

</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '12px', margin: '20px 0 8px'}}>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.05)'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#4a9eff'}}>Direct to JDE</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Every write hits the JDE tables and AIS API the same way the fat client would — the change is visible on the next JDE refresh.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(34,197,94,0.35)', background: 'rgba(34,197,94,0.05)'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#22c55e'}}>Bulk-friendly</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Excel upload on every writable screen — UDCs, security workbench, role relationships, environments. Onboard a roll-out in minutes.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(192,132,252,0.35)', background: 'rgba(192,132,252,0.05)'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#c084fc'}}>Audit-traced</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Every change carries the Nomajde user, the timestamp and the screen it came from — JDE sees it, and so does the Audit Trail.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(251,146,60,0.35)', background: 'rgba(251,146,60,0.05)'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#fb923c'}}>On-premise</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Single-tenant deployment, next to the JDE servers. No SaaS upload. The credentials and the master data never leave the perimeter.</div>
  </div>
</div>

---

## The four pillars

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', margin: '24px 0'}}>

  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.10), rgba(74,158,255,0.02))'}}>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4a9eff', fontWeight: 800, marginBottom: '8px'}}>01 · Master Data</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>UDC, Address Book, GL — bulk-editable</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>UDC types and UDC codes — one grid per topic, with Excel upload for roll-out loads.</li>
      <li>Address Book, customers, suppliers, items, GL accounts — same shape, same grid editing.</li>
      <li>The required-field checks JDE runs at row save are enforced here too — no half-written record reaches JDE.</li>
    </ul>
  </div>

  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(251,146,60,0.35)', background: 'linear-gradient(165deg, rgba(251,146,60,0.10), rgba(251,146,60,0.02))'}}>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fb923c', fontWeight: 800, marginBottom: '8px'}}>02 · Security Maintenance</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>User Management · Role Management · Workbench</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>Add and edit JDE users — SQL writes the user master and the display preferences, AIS REST provisions the security record and the password.</li>
      <li>Reset password — one click; the call goes to the JDE AIS endpoint and the new password is active immediately.</li>
      <li>Import Security and Merge Roles — copy or merge the full security setup (application, action, row, column, processing-option, tab, exit, image, UDO, menu-filtering) from a source user / role to a target, in a guided workflow.</li>
      <li>Security Workbench — every JDE security type on one grid, with type-aware dialog and Excel upload for SI-delivered bundles.</li>
    </ul>
  </div>

  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(34,197,94,0.35)', background: 'linear-gradient(165deg, rgba(34,197,94,0.10), rgba(34,197,94,0.02))'}}>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#22c55e', fontWeight: 800, marginBottom: '8px'}}>03 · Transactions & Reporting</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>AP, AR, GL — and the BIP archive</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>AP, AR, GL grids — filter on any column (company, supplier, document, amount, date), drill into the details.</li>
      <li>Schedule BIP reports from a single form — pick the program, the version, the data selection, the run time.</li>
      <li>The generated output (PDF or XML) is archived next to the run. Download, e-mail, resend in one click.</li>
      <li>Every BIP run is logged — who scheduled it, when it ran, what was produced.</li>
    </ul>
  </div>

  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(192,132,252,0.35)', background: 'linear-gradient(165deg, rgba(192,132,252,0.10), rgba(192,132,252,0.02))'}}>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c084fc', fontWeight: 800, marginBottom: '8px'}}>04 · Monitoring</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>JDE in production, live</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>Live counters of AP / AR / GL transactions, drill-through to the underlying screen.</li>
      <li>The JDE job-control queue as a grid — status, owner, runtime, output.</li>
      <li>Performance indicators: database latency, AIS response time, transaction throughput.</li>
    </ul>
  </div>

</div>

---

## A sample of what you see

The Security Workbench grid — every JDE security entry on one row, with the action flags side by side and the dialog adapting to the security type.

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '20px 0', display: 'block'}}>
  <defs>
    <linearGradient id="nje-glance-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#nje-glance-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomajde · Security Maintenance · Security Workbench</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CATEGORY</text>
  <text x="180" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="240" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER / ROLE</text>
  <text x="430" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="560" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DATA ITEM</text>
  <text x="700" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RUN</text>
  <text x="750" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VIEW</text>
  <text x="800" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ADD</text>
  <text x="850" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CHG</text>
  <text x="900" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DEL</text>

  <rect x="60" y="128" width="880" height="22" rx="4" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="143" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">OBJECTS</text>
  <text x="180" y="143" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1</text>
  <text x="240" y="143" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN_BOOKKEEPER</text>
  <text x="430" y="143" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="560" y="143" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <circle cx="708" cy="139" r="4" fill="#22c55e"/>
  <circle cx="758" cy="139" r="4" fill="#22c55e"/>
  <circle cx="808" cy="139" r="4" fill="#22c55e"/>
  <circle cx="858" cy="139" r="4" fill="#22c55e"/>
  <circle cx="908" cy="139" r="4" fill="#ef4444"/>

  <rect x="60" y="152" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="167" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">OBJECTS</text>
  <text x="180" y="167" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2</text>
  <text x="240" y="167" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN_BOOKKEEPER</text>
  <text x="430" y="167" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="560" y="167" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VLDGJ</text>
  <text x="708" y="167" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <circle cx="758" cy="163" r="4" fill="#ef4444"/>
  <text x="808" y="167" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="176" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ALIAS</text>
  <text x="180" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">4</text>
  <text x="240" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PROC_BUYER</text>
  <text x="430" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P4310</text>
  <text x="560" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RPER</text>
  <text x="708" y="191" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="758" y="191" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <circle cx="808" cy="187" r="4" fill="#22c55e"/>

  <rect x="60" y="200" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">OTHERS</text>
  <text x="180" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">A</text>
  <text x="240" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PROC_BUYER</text>
  <text x="430" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P4310</text>
  <text x="560" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PORLSE</text>

  <rect x="60" y="232" width="880" height="22" rx="4" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="72" y="247" fill="#4a9eff" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EVERY JDE SECURITY TYPE — APPLICATION, ACTION, ROW, COLUMN, PROCESSING OPTION, TAB, EXIT, UDO — IN ONE GRID</text>
</svg>

The User Management grid, with the editable user record, the attached roles and environments, and the workflow that combines a SQL write with an AIS API call.

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '20px 0', display: 'block'}}>
  <defs>
    <linearGradient id="nje-um-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#nje-um-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomajde · Security Maintenance · User Management — Add user</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="108" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">User</text>
  <rect x="60" y="114" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="131" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">NEWUSER.J</text>

  <text x="260" y="108" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Alpha name</text>
  <rect x="260" y="114" width="380" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="131" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Dupont, Julien — Finance</text>

  <text x="660" y="108" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Language</text>
  <rect x="660" y="114" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="672" y="131" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F ▾</text>

  <text x="800" y="108" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Country</text>
  <rect x="800" y="114" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="812" y="131" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FR ▾</text>

  <rect x="60" y="158" width="880" height="56" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="76" y="178" fill="#4a9eff" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ON SAVE — DUAL SQL + AIS WORKFLOW</text>
  <text x="76" y="195" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">1. SQL insert into the JDE user master   2. SQL insert into the JDE display preferences</text>
  <text x="76" y="208" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">3. AIS REST — get token   4. AIS REST — provision the security record   5. AIS REST — set password</text>

  <rect x="60" y="226" width="200" height="40" rx="8" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="160" y="244" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <text x="160" y="258" fill="#22c55e" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Writes everything in one go</text>

  <rect x="280" y="226" width="200" height="40" rx="8" fill="rgba(251,146,60,0.10)" stroke="rgba(251,146,60,0.40)" strokeWidth="1"/>
  <text x="380" y="244" fill="#fb923c" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Reset Password</text>
  <text x="380" y="258" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Single AIS call · active immediately</text>

  <rect x="500" y="226" width="200" height="40" rx="8" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="600" y="244" fill="#c084fc" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Upload Excel</text>
  <text x="600" y="258" fill="#c084fc" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Onboard a batch of users</text>
</svg>

---

## The application map

The sidebar splits the day-to-day work into five sections.

| Section | What it covers |
|---|---|
| **Dashboard** | Daily activity summary — open transactions, running jobs, recent users, latest alerts. |
| **Master Data** | UDC types and UDC codes, Address Book, customers, suppliers, items, GL accounts. Every grid supports filter, sort, inline edit and Excel upload. |
| **Security Maintenance** | User Management, Role Management, Role Relationships, Environments, Security Workbench. The full JDE security catalogue, condensed into five screens with grid editing and a guided Import / Merge workflow. |
| **Transactions** | AP, AR, GL grids with filters and drill-through to the underlying detail. |
| **Reporting** | Schedule BIP jobs from one form, archive of past runs, distribution by e-mail. |
| **Monitoring** | Live transaction counters, the JDE job-control queue as a grid, performance indicators (DB latency, AIS response time, throughput). |
| **Settings** | Environment definitions, AIS endpoint, e-mail server, archive retention. |

---

## Who uses it

| Role | What they typically open Nomajde for |
|---|---|
| **JDE security administrator** | The five Security Maintenance screens — add a user, attach a role, run Import Security on a clone, walk through the security workbench grid. |
| **AP / AR operator** | The transaction grid — open invoices across companies and environments on one page, with bulk filters and drill-through. |
| **Master-data steward** | Address Book, customer and supplier maintenance with required-field checks; UDC types and codes for the catalogue work. |
| **Reporting analyst** | One form to schedule BIP, the archive of past runs, e-mail distribution. |
| **Ops engineer** | The Monitoring section — live counters, job queue, performance indicators. |

---

## Roles inside Nomajde

The application ships four roles.

| Role | What it grants |
|---|---|
| **Viewer** | Read every screen, run reports, no edits. |
| **Operator** | Everything a Viewer does, plus AP / AR / master-data edits and scheduling reports. |
| **Security** | Everything an Operator does, plus the Security Maintenance section (User, Role, Role Relationships, Environments, Security Workbench). |
| **Administrator** | Everything above, plus environment configuration, AIS endpoint, archive retention. |

A typical deployment keeps **Operator** separate from **Security** — the person processing transactions is not the same one managing access rights.
