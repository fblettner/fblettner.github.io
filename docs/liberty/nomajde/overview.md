---
title: Nomajde — The JD Edwards companion application
description: "Nomajde sits next to JD Edwards EnterpriseOne and turns the day-to-day work — master data, security, cross reference, upgrade, monitoring — into one set of grids and pages. SQL and AIS API combined, no fat-client navigation, no manual exports."
keywords: [Nomajde, JD Edwards, JDE, EnterpriseOne, security workbench, user management, role management, UDC, cross reference, upgrade, Server Manager, performance, monitoring, AIS, JDE companion]
hide_table_of_contents: false
---

import Link from '@docusaurus/Link';

# Nomajde

**Nomajde** is a companion application for JD Edwards EnterpriseOne, published by Nomana-IT and built with Liberty Next. It gathers the day-to-day administration of JD Edwards — users, roles, security workbench, environments, UDC tables, master data and BI Publisher scheduling — into a few searchable grids with inline editing, and writes every change straight to JD Edwards through SQL and the AIS REST API.

<div style={{padding: '36px 32px', borderRadius: '18px', margin: '8px 0 36px', background: 'linear-gradient(135deg, rgba(74,158,255,0.18) 0%, rgba(251,146,60,0.14) 100%)', border: '1px solid rgba(74,158,255,0.35)', position: 'relative', overflow: 'hidden'}}>
  <div style={{display: 'inline-block', padding: '4px 12px', borderRadius: '999px', background: 'rgba(74,158,255,0.2)', border: '1px solid rgba(74,158,255,0.4)', color: '#4a9eff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '14px'}}>JD Edwards EnterpriseOne · Companion application</div>
  <h2 style={{fontSize: '34px', lineHeight: '1.15', fontWeight: 800, margin: '0 0 14px', letterSpacing: '-0.02em'}}>JD Edwards work,<br/><span style={{background: 'linear-gradient(135deg, #4a9eff, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>on one searchable grid.</span></h2>
  <p style={{fontSize: '16px', lineHeight: '1.6', maxWidth: '780px', margin: '0 0 24px', opacity: 0.92}}>Nomajde is the day-to-day companion for JD Edwards EnterpriseOne. It collapses what JDE typically spreads across many forms — user master, role description, security workbench, environments, UDC tables, the cross reference, the servers, an upgrade — into a smaller set of grids and pages. Every write goes straight to JDE through a combination of <b>SQL inserts on the security tables</b> and <b>AIS REST calls</b> for the operations that need them (password reset, security record provisioning). No nightly extract, no staged copy.</p>
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

JD Edwards is a depth product. Most day-to-day tasks — add a user, attach a role, find where a table is used, check a server — require navigating between five or six forms, sometimes across the fat client and the web client. Operators get the job done; they spend twice the time they should.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(248,113,113,0.3)', background: 'rgba(248,113,113,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#f87171', fontWeight: 700, marginBottom: '8px'}}>Form ping-pong</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Five forms to onboard one user</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>Create the user in P0092, set the password in the security workbench, attach the roles in P95921, pick the environments in P0093, copy the security from a reference user — each form on its own, with its own data check.</div>
  </div>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(251,146,60,0.3)', background: 'rgba(251,146,60,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#fb923c', fontWeight: 700, marginBottom: '8px'}}>Bulk edits hurt</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>No way to add 200 security records at once</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>JDE forms are one-row-at-a-time editors. When a roll-out brings 200 security records or role relationships, the operator types them in by hand — or hacks together a SQL script and hopes nothing breaks.</div>
  </div>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(34,197,94,0.3)', background: 'rgba(34,197,94,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#22c55e', fontWeight: 700, marginBottom: '8px'}}>Upgrades are guesswork</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>What does a release touch?</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>Which customised objects an ESU or a release changes, what uses them, who still runs them: the answer usually lives in a workbook rebuilt by hand at every upgrade.</div>
  </div>
</div>

Nomajde replaces the form ping-pong with one screen per topic, the one-row-at-a-time editor with grid editing and Excel upload, and the hand-made workbook with an upgrade analysis built from JD Edwards itself.

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
        <div style={{fontSize: '12px', fontWeight: 700, color: '#22c55e'}}>Server Manager</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>instances · metrics · caches</div>
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
        <div style={{fontSize: '11px', fontWeight: 700}}>Monitoring</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>servers · performance</div>
      </div>
      <div style={{padding: '10px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '11px', fontWeight: 700}}>Upgrade</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>retrofit · cross reference</div>
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
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Excel upload on the writable security screens — users, roles, role relationships, environments, security workbench, UDO security. Onboard a roll-out in minutes.</div>
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
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>UDC, Address Book, ready-made modules</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>UDC types and UDC codes — every type and value on one searchable grid, with filters and Excel export.</li>
      <li>Address Book, customers and suppliers — read-only grids with their related tabs and <i>Open in JDE</i>.</li>
      <li>Companies and accounts, items, setup tables, OMW projects — 21 read-only screens delivered ready to use, read from the JDE tables.</li>
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
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#22c55e', fontWeight: 800, marginBottom: '8px'}}>03 · Development & Upgrade</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>What uses what, and what a release costs</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>Cross Reference — what an application, a report, a table or a UDO holds, and where it is used, with its last use.</li>
      <li>Upgrade analysis — the objects to retrofit for a release, their complexity, the days, the order of the work, the UDOs to test again.</li>
      <li>Non-regression tests played through AIS — a reference recorded before a change, compared after it.</li>
      <li>Create from… — endpoints and whole screens built from a JD Edwards application, saved through JDE's own forms.</li>
    </ul>
  </div>

  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(192,132,252,0.35)', background: 'linear-gradient(165deg, rgba(192,132,252,0.10), rgba(192,132,252,0.02))'}}>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c084fc', fontWeight: 800, marginBottom: '8px'}}>04 · Monitoring</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>JDE in production, live</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>The enterprise, web and AIS servers checked through Server Manager every five minutes — state, health, failed checks.</li>
      <li>Availability over 24 hours per instance on the overview, the instances in trouble first.</li>
      <li>A failed check sends the job's alerts; a failed instance can be stopped automatically.</li>
      <li>Platform synthesis and Architecture — the platform at a glance, drawn from what is found; Server Manager live, Performance advice, Platform analysis and Database audit — what slows the platform down, and what to look at first.</li>
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

The menu follows the work, from the way in to the maintenance jobs.

| Section | What it covers |
|---|---|
| **Overview** | [The way in](./home.md): one group of links per thing a person comes to do, and the jobs with their last run. |
| **Platform synthesis** | [The platform at a glance](./synthesis.md): six figures, what the server, performance and database analyses flag in one list, the architecture, one tab per analysis. |
| **Prepare for upgrade** | [One page for the whole upgrade analysis](./upgrade/analysis.md): what has to be retrofitted for a release, how complex, for how many days, in which order and how far the work is — from Oracle's object list and the customer's own objects, with the user defined objects to test again. |
| **Data Explorer** | [Free analysis](./data-explorer.md) of the security, development and upgrade data, and of eighteen models on the JD Edwards modules. |
| **Cross Reference** | [What is in a JD Edwards object and where it is used](./cross-reference.md): applications, reports, data items, views, tables, data structures, business functions, UDOs. |
| **JD Edwards data** | **Master Data** — [UDC Types](./master-data/udc-types.md) and [UDC Code](./master-data/udc-codes.md), the [Address Book](./master-data/address-book.md) with customers and suppliers, [Companies and accounts, Items](./master-data/delivered-screens.md) — and [**Setup**](./master-data/delivered-screens.md#setup): payment terms, currencies and rates, tax areas, AAIs, next numbers, order activity rules, line types, document types, branch / plant constants. Read-only grids, delivered ready to use. |
| **Security Maintenance** | User Management, User Preferences, Role Management, Role Relationships, Environments, Security Workbench, UDO Security. The JD Edwards security catalogue condensed into a few screens with grid editing. |
| **Development** | Object Librarian, Data Dictionary and the [Object Management Workbench](./master-data/delivered-screens.md#omw) (projects, project objects, log), read-only; [Back to standard](./development/back-to-standard.md): the changed standard objects and the copies compared with Oracle's — which can go back as they are, which differ and by what. |
| **Monitoring** | In the menu's order: [JDE Health Check](./monitoring/jde-servers.md): the health checks of the JD Edwards servers over a period, and the history of each one. [Server Manager](./monitoring/server-manager.md): seven screens read live from the console — instances (started, stopped or restarted from a row), connected users, enterprise servers, processes, business functions, web and AIS servers, JDBj caches. [Architecture](./monitoring/architecture.md): the platform drawn from what is found. [Platform analysis](./monitoring/platform-analysis.md), [Performance](./monitoring/performance.md) and [Database audit](./monitoring/database-audit.md): the platform read live as analyses and advice. [Server sizes](./monitoring/server-sizes.md): the size of each machine, as you state it. [OCI target](./monitoring/oci-target.md): the platform proposed on Oracle Cloud Infrastructure and its estimated cost. |
| **Jobs** | [Re-merge the security, refresh the data dictionary, check the JDE servers](./jobs.md), keep the platform's figures, watch the instances, mail the platform synthesis and the weekly upgrade report, compare a path code with the standard — with a live log. |
| **Tests** | [Non-regression tests](./tests.md) played through AIS: record a reference before a change, compare after it. |
| **JD Edwards services (AIS)** | The [catalogue of AIS services](./ais/services.md) and [Create from…](./ais/create-from.md): an endpoint or a whole screen from a JD Edwards application, form, table, report, business function or orchestration. |

The [AI assistant](./ai-assistant.md) knows the cross reference, the upgrade and the platform's performance, with the same data as the pages.

---

## Who uses it

| Role | What they typically open Nomajde for |
|---|---|
| **JDE security administrator** | The Security Maintenance screens — add a user, attach a role, run Import Security on a clone, walk through the security workbench grid. |
| **JDE developer** | [Cross Reference](./cross-reference.md) — what a change reaches before making it: the applications, reports and UDOs that use a table, a view or a function. |
| **Master-data steward** | Address Book, customers and suppliers, companies and accounts, items; UDC types and codes; the setup tables. |
| **Upgrade project lead** | [Prepare for upgrade](./upgrade/analysis.md) — the objects to retrofit, the days by type and by assignee, the follow-up of the work. |
| **Functional tester** | [Non-regression tests](./tests.md) — the cases that must keep working, played before and after an ESU or a tools release. |
| **Integration developer** | [Create from…](./ais/create-from.md) — a Liberty screen on a JD Edwards form, without writing a call. |
| **Ops engineer** | [Platform synthesis](./synthesis.md) and [Architecture](./monitoring/architecture.md) first; [JDE Health Check](./monitoring/jde-servers.md) and [Server Manager](./monitoring/server-manager.md) for the health of every server; [Performance](./monitoring/performance.md) for what slows the platform down. |

---

## Predefined roles \{#roles\}

Nomajde ships five roles ready to add, in **Liberty Next → Administer → Access → Roles → Add a predefined role…**:

| Role | What it covers |
|---|---|
| **Master data steward** | The **Master Data** folder in read and change — the UDC, the Address Book, Companies and accounts, Items, and what later versions add to that folder; the **Setup** in read. |
| **Security administrator** | JD Edwards users, roles, environments and the security workbench — the **Security Maintenance** folder — in read and change, with the two jobs that rebuild the merged security (*Re-merge security*). |
| **Developer** | In read: the **Development** folder (Object Librarian, Data Dictionary, Object Management Workbench, [Back to standard](./development/back-to-standard.md)), [Cross Reference](./cross-reference.md), [Prepare for upgrade](./upgrade/analysis.md) and the [Data Explorer](./data-explorer.md); runs the [weekly upgrade report](./jobs.md#report-upgrade) and the [comparison with the standard](./jobs.md#standard-compare). |
| **Platform operator** | In read: [Platform synthesis](./synthesis.md), the **Monitoring** folder — servers, Server Manager, architecture, performance, platform and database analysis — and the **Tests**; runs the health check, the test suite, the [platform snapshot](./jobs.md#platform-snapshot), the [instances watch](./jobs.md#instances-watch) and the [platform report](./jobs.md#report-platform). |
| **Administrator** | Everything in the application: read and change, its jobs and its pages included. |

Each of them opens the [Overview](./home.md) and the [AI assistant](./ai-assistant.md). A person may hold several: the rights add up — a security administrator who is also a developer sees both. A role names menu folders, not screens: it follows its folders when a later version adds screens to them.

Beyond these roles, access is granted by the roles of the platform as for any application: a role holds the menu entries it opens, the pages, the jobs it may run and the JD Edwards services it may call — each AIS or Server Manager endpoint has its own permission. A typical deployment keeps the people who maintain master data apart from those who manage access rights, and grants the services that change JD Edwards or the platform to few.
