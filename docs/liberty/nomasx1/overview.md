---
title: Nomasx-1 — The compliance and licence-optimisation platform
description: "Nomasx-1 unifies enterprise security, Object Usage Tracking, Oracle and JD Edwards licence compliance and Segregation of Duties into one platform — source-agnostic, audit-ready, on-premise."
keywords: [Nomasx-1, nomasx1, enterprise security, compliance, segregation of duties, SoD, JD Edwards, JDE, Oracle, licence optimisation, Object Usage Tracking, LDAP, audit, CSI]
hide_table_of_contents: false
---

import Link from '@docusaurus/Link';

# Nomasx-1

<div style={{padding: '36px 32px', borderRadius: '18px', margin: '8px 0 36px', background: 'linear-gradient(135deg, rgba(74,158,255,0.18) 0%, rgba(34,197,94,0.14) 100%)', border: '1px solid rgba(74,158,255,0.35)', position: 'relative', overflow: 'hidden'}}>
  <div style={{display: 'inline-block', padding: '4px 12px', borderRadius: '999px', background: 'rgba(74,158,255,0.2)', border: '1px solid rgba(74,158,255,0.4)', color: '#4a9eff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '14px'}}>Enterprise security · Licence compliance · Segregation of Duties</div>
  <h2 style={{fontSize: '34px', lineHeight: '1.15', fontWeight: 800, margin: '0 0 14px', letterSpacing: '-0.02em'}}>One platform for everything an<br/><span style={{background: 'linear-gradient(135deg, #4a9eff, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>auditor or licence manager asks for.</span></h2>
  <p style={{fontSize: '16px', lineHeight: '1.6', maxWidth: '780px', margin: '0 0 24px', opacity: 0.92}}>Built first for <b>JD Edwards EnterpriseOne on Oracle</b> — a dedicated connector reads the JDE security workbench, the user / role / environment tables, the Object Usage Tracking history and the underlying Oracle instance in one pass. The architecture has since opened to other ERPs and databases, but a JDE customer plugs in and is immediately operational, with no manual export and no BIP job to run beforehand.</p>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px'}}>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(74,158,255,0.16)', border: '1px solid rgba(74,158,255,0.45)', fontSize: '12px', fontWeight: 700, color: '#4a9eff'}}>JD Edwards EnterpriseOne — flagship support</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(34,197,94,0.14)', border: '1px solid rgba(34,197,94,0.42)', fontSize: '12px', fontWeight: 700, color: '#22c55e'}}>Oracle Database — dedicated audit scripts</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}>SAP · NetSuite · custom ERP</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}>MSSQL · HANA · PostgreSQL</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}>LDAP · Active Directory · On-premise</span>
  </div>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
    <Link to="/liberty/nomasx1/security/users" style={{padding: '11px 22px', borderRadius: '8px', background: 'linear-gradient(135deg, #4a9eff, #2b8cff)', color: '#fff', fontSize: '13px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 16px rgba(74,158,255,0.3)'}}>Tour the Security section →</Link>
    <Link to="/liberty/nomasx1/licenses/oracle" style={{padding: '11px 22px', borderRadius: '8px', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.18)', fontSize: '13px', fontWeight: 600, textDecoration: 'none'}}>See the licence reports</Link>
  </div>
</div>

<div style={{margin: '0 0 36px', padding: '22px 24px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(135deg, rgba(74,158,255,0.10), rgba(34,197,94,0.06))'}}>
  <div style={{display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap', marginBottom: '12px'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4a9eff', fontWeight: 800}}>Flagship combination</div>
    <div style={{fontSize: '18px', fontWeight: 700}}>JD Edwards EnterpriseOne · Oracle Database</div>
  </div>
  <p style={{fontSize: '13px', lineHeight: '1.6', margin: '0 0 14px', opacity: 0.88}}>The Nomasx-1 <b>JD Edwards connector</b> is the original engine of the product and is included out of the box. It logs into the JDE security tables (users, roles, environments, security workbench, menus), pulls the Object Usage Tracking history from JDE Object Librarian and reads the Oracle DBA views on the underlying database — all from a single configured datasource. The JDE-on-Oracle customer goes from install to a first audit-ready picture in hours, not weeks.</p>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px'}}>
    <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(74,158,255,0.30)', background: 'rgba(74,158,255,0.05)'}}>
      <div style={{fontSize: '11px', fontWeight: 700, color: '#4a9eff', marginBottom: '3px'}}>Security tables</div>
      <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>Users, roles, role relationships, environments, security workbench — read live.</div>
    </div>
    <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(251,146,60,0.30)', background: 'rgba(251,146,60,0.05)'}}>
      <div style={{fontSize: '11px', fontWeight: 700, color: '#fb923c', marginBottom: '3px'}}>Object Usage Tracking</div>
      <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>Per-component user counts and last-use dates straight from the OUT history.</div>
    </div>
    <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(34,197,94,0.30)', background: 'rgba(34,197,94,0.05)'}}>
      <div style={{fontSize: '11px', fontWeight: 700, color: '#22c55e', marginBottom: '3px'}}>Oracle audit scripts</div>
      <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>Detect the Oracle options, packs and features actually used on each instance — required-licence inventory in one click.</div>
    </div>
    <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(192,132,252,0.30)', background: 'rgba(192,132,252,0.05)'}}>
      <div style={{fontSize: '11px', fontWeight: 700, color: '#c084fc', marginBottom: '3px'}}>No source-side change</div>
      <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>No BIP job to schedule, no JDE audit to turn on, no extra account to provision beyond a read-only datasource.</div>
    </div>
  </div>
</div>

---

## The problem Nomasx-1 solves

The teams who need to answer compliance questions never look at the same screen. Security data sits in the ERP security workbench, licence data in spreadsheets the procurement team maintains by hand, SoD findings in an Excel matrix that has not been refreshed in months, and database options in DBA views nobody outside IT can read.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(248,113,113,0.3)', background: 'rgba(248,113,113,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#f87171', fontWeight: 700, marginBottom: '8px'}}>Without a unified view</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Dormant accounts keep their rights</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>A user who left a year ago still holds the AP-approval role. A SoD conflict opened in March is still open in October. Nobody catches it until the next audit.</div>
  </div>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(251,146,60,0.3)', background: 'rgba(251,146,60,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#fb923c', fontWeight: 700, marginBottom: '8px'}}>Without usage evidence</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Licence cost grows on autopilot</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>The renewal arrives. No-one can tell which JDE modules are actually used or which Oracle options run on the database. The safest answer is to renew everything — at full price.</div>
  </div>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(34,197,94,0.3)', background: 'rgba(34,197,94,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#22c55e', fontWeight: 700, marginBottom: '8px'}}>Without continuous SoD</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>SoX findings show up too late</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>The SoD matrix is in an Excel file on someone's laptop. The check is done once a year, two weeks before the auditor arrives. Every finding becomes an urgent remediation.</div>
  </div>
</div>

Nomasx-1 replaces the spreadsheets, the manual exports and the once-a-year scramble with a continuous picture maintained by the product itself.

---

## What Nomasx-1 is

A single platform that pulls every relevant source — ERP, database, directory — and turns it into a small set of grids, dashboards and reports the compliance team uses every day.

<div style={{margin: '32px 0', padding: '24px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(165deg, rgba(74,158,255,0.04), rgba(34,197,94,0.025))', display: 'grid', gridTemplateColumns: 'minmax(170px, 1fr) minmax(220px, 1.35fr) minmax(180px, 1fr)', gap: '22px', alignItems: 'center'}}>

  <div>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800, opacity: 0.65, marginBottom: '12px'}}>Sources connected</div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#4a9eff'}}>ERP security workbench</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>JDE · SAP · NetSuite · custom</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(34,197,94,0.35)', background: 'rgba(34,197,94,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#22c55e'}}>Database catalogue</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>Oracle · MSSQL · HANA · PG</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(192,132,252,0.35)', background: 'rgba(192,132,252,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#c084fc'}}>Directory</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>LDAP · Active Directory</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(251,146,60,0.35)', background: 'rgba(251,146,60,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#fb923c'}}>Object Usage Tracking</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>per-component activity</div>
      </div>
    </div>
  </div>

  <div style={{position: 'relative', padding: '26px 22px', borderRadius: '18px', border: '1px solid rgba(74,158,255,0.5)', background: 'linear-gradient(160deg, rgba(74,158,255,0.22), rgba(34,197,94,0.18))', boxShadow: '0 12px 40px rgba(74,158,255,0.18), inset 0 1px 0 rgba(255,255,255,0.08)', textAlign: 'center'}}>
    <div style={{position: 'absolute', left: '-14px', top: '50%', transform: 'translateY(-50%)', fontSize: '22px', color: '#4a9eff', fontWeight: 800, lineHeight: 1, textShadow: '0 0 8px rgba(74,158,255,0.5)'}}>→</div>
    <div style={{position: 'absolute', right: '-14px', top: '50%', transform: 'translateY(-50%)', fontSize: '22px', color: '#4a9eff', fontWeight: 800, lineHeight: 1, textShadow: '0 0 8px rgba(74,158,255,0.5)'}}>→</div>
    <div style={{fontSize: '22px', fontWeight: 800, marginBottom: '4px', letterSpacing: '-0.01em', background: 'linear-gradient(135deg, #4a9eff, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Nomasx-1</div>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.72, marginBottom: '16px', fontWeight: 600}}>The compliance & licence platform</div>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '11px'}}>
      <div style={{padding: '10px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '11px', fontWeight: 700}}>Inventory</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>users · roles · rights</div>
      </div>
      <div style={{padding: '10px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '11px', fontWeight: 700}}>Track usage</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>OUT · activity log</div>
      </div>
      <div style={{padding: '10px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '11px', fontWeight: 700}}>Analyse SoD</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>matrix · conflicts</div>
      </div>
      <div style={{padding: '10px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '11px', fontWeight: 700}}>Optimise cost</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>licences · packs</div>
      </div>
    </div>
  </div>

  <div>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800, opacity: 0.65, marginBottom: '12px'}}>Outputs</div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(34,197,94,0.45)', background: 'rgba(34,197,94,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#22c55e'}}>Compliance dashboards</div>
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>SoD posture · expirations</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(74,158,255,0.45)', background: 'rgba(74,158,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#4a9eff'}}>Licence reports</div>
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>usage · subscribed · gap</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(192,132,252,0.45)', background: 'rgba(192,132,252,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#c084fc'}}>Excel exports</div>
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>per department · per app</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(251,146,60,0.45)', background: 'rgba(251,146,60,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#fb923c'}}>Sign-off trail</div>
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>exceptions · approvals</div>
      </div>
    </div>
  </div>

</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '12px', margin: '20px 0 8px'}}>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.05)'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#4a9eff'}}>Source-agnostic</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>JDE today, SAP tomorrow, a divested entity on NetSuite — a new connector plugs in without touching the rest of the product.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(34,197,94,0.35)', background: 'rgba(34,197,94,0.05)'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#22c55e'}}>Continuous</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Scans run on a schedule. The dashboard the auditor opens at 9 am is the picture from the last scan, not last quarter's spreadsheet.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(192,132,252,0.35)', background: 'rgba(192,132,252,0.05)'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#c084fc'}}>Audit-ready</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Every grid exports to Excel, every exception leaves a sign-off trail, every change to the SoD matrix is logged.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(251,146,60,0.35)', background: 'rgba(251,146,60,0.05)'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#fb923c'}}>On-premise</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Single-tenant deployment. Security data, licence figures and SoD findings stay inside your perimeter — no SaaS upload.</div>
  </div>
</div>

---

## The four pillars

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', margin: '24px 0'}}>

  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.10), rgba(74,158,255,0.02))'}}>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4a9eff', fontWeight: 800, marginBottom: '8px'}}>01 · Security & identity</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>Who has access, and is it still needed?</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>Master list of users with creation, last login, last activity and ERP attributes.</li>
      <li>Role assignments with effective and expiration dates — expired-but-still-active surfaces in red.</li>
      <li>LDAP / AD cross-check — every ERP account is matched against the directory.</li>
      <li>Duplicate users, dormant accounts, accounts without any role — flagged automatically.</li>
    </ul>
  </div>

  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(251,146,60,0.35)', background: 'linear-gradient(165deg, rgba(251,146,60,0.10), rgba(251,146,60,0.02))'}}>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fb923c', fontWeight: 800, marginBottom: '8px'}}>02 · Object Usage Tracking</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>What is actually used — by whom, how often?</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>Records every object call on the connected applications and aggregates by licence component.</li>
      <li>Distinguishes the dormant access (granted but never used) from the active access.</li>
      <li>Per-component user counts and last-use dates — the evidence behind the licence figures.</li>
      <li>Captured passively — no need to turn the ERP's own audit on, no operational impact.</li>
    </ul>
  </div>

  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(34,197,94,0.35)', background: 'linear-gradient(165deg, rgba(34,197,94,0.10), rgba(34,197,94,0.02))'}}>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#22c55e', fontWeight: 800, marginBottom: '8px'}}>03 · Licence compliance</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>What is paid, what is needed, what is the gap?</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>Customer Support Identifiers and the licences attached to each — the contractual side.</li>
      <li>Per-database list of required Oracle options based on what the collection scripts found on the instance.</li>
      <li>JDE per-app cohorts — enabled users, transactional users, dormant accounts, orphan transactions.</li>
      <li>Usage Report and Financial Report — required vs subscribed and the monetary gap.</li>
    </ul>
  </div>

  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(248,113,113,0.35)', background: 'linear-gradient(165deg, rgba(248,113,113,0.10), rgba(248,113,113,0.02))'}}>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f87171', fontWeight: 800, marginBottom: '8px'}}>04 · Segregation of Duties</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>Where are the conflicts — and who cleared them?</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>Editable SoD matrix — predefined ERP risks plus your own additions.</li>
      <li>Process / activity / risk model — conflicts described in business language, not raw role pairs.</li>
      <li>Conflicts ranked per user, per role, per object — the order in which to remediate.</li>
      <li>Proven conflicts split out from theoretical ones — only the user actions that actually happened.</li>
    </ul>
  </div>

</div>

---

## A sample of what you see

The licence compliance picture, one row per database × component, with a green / red indicator straight from the collection scripts — the dashboard a licence manager opens before every renewal.

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '20px 0', display: 'block'}}>
  <defs>
    <linearGradient id="nx1-glance-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#nx1-glance-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Licences · Oracle</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CATEGORY</text>
  <text x="360" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPONENT</text>
  <text x="700" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">REQUIRED</text>
  <text x="820" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>

  <rect x="60" y="128" width="880" height="22" rx="4" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="143" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database Enterprise Management</text>
  <text x="360" y="143" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Diagnostics Pack</text>
  <circle cx="720" cy="139" r="5" fill="#22c55e"/>
  <text x="820" y="143" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="152" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="167" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database</text>
  <text x="360" y="167" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition</text>
  <circle cx="720" cy="163" r="5" fill="#22c55e"/>
  <text x="820" y="167" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="176" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="360" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Active Data Guard</text>
  <circle cx="720" cy="187" r="5" fill="#ef4444"/>
  <text x="820" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="200" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="360" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Partitioning</text>
  <circle cx="720" cy="211" r="5" fill="#22c55e"/>
  <text x="820" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="224" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="239" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="360" y="239" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Real Application Clusters</text>
  <circle cx="720" cy="235" r="5" fill="#ef4444"/>
  <text x="820" y="239" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>
</svg>

A second example: a Segregation-of-Duties summary by user, with the conflicts ranked by risk and the proven ones marked.

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '20px 0', display: 'block'}}>
  <defs>
    <linearGradient id="nx1-sod-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#nx1-sod-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Conflicts · Summary by User</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="220" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROCESS</text>
  <text x="430" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RISK</text>
  <text x="700" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SEVERITY</text>
  <text x="830" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROVEN</text>

  <rect x="60" y="128" width="880" height="22" rx="4" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="143" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DUPONT.J</text>
  <text x="220" y="143" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Procure-to-Pay</text>
  <text x="430" y="143" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Create supplier & post payment</text>
  <rect x="700" y="132" width="60" height="14" rx="3" fill="rgba(248,113,113,0.18)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="730" y="143" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">High</text>
  <circle cx="855" cy="139" r="5" fill="#f87171"/>

  <rect x="60" y="152" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="167" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MARTIN.S</text>
  <text x="220" y="167" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Order-to-Cash</text>
  <text x="430" y="167" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Issue invoice & receive payment</text>
  <rect x="700" y="156" width="60" height="14" rx="3" fill="rgba(251,146,60,0.18)" stroke="rgba(251,146,60,0.40)" strokeWidth="1"/>
  <text x="730" y="167" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Medium</text>
  <circle cx="855" cy="163" r="5" fill="#64748b"/>

  <rect x="60" y="176" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">GARCIA.L</text>
  <text x="220" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Record-to-Report</text>
  <text x="430" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Post journal & approve close</text>
  <rect x="700" y="180" width="60" height="14" rx="3" fill="rgba(248,113,113,0.18)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="730" y="191" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">High</text>
  <circle cx="855" cy="187" r="5" fill="#f87171"/>
</svg>

---

## The application map

The sidebar splits the day-to-day work into five sections plus the configuration area.

| Section | What it covers |
|---|---|
| **Overview** | The dashboard — open conflicts, expiring assignments, licence gap, last refresh status. |
| **Security** | Users, roles, role assignments, role matrix (combinations), duplicate users, users without roles, LDAP / AD reconciliation. |
| **Applications** | Per connected application: menus, rights (per user, per role, combined), Object Usage Tracking (components, objects, details), Conflicts (summary, by user, by role, by object), Activity Log. |
| **Database** | Oracle properties (edition, packs, options, partitions), Audit Trail (Oracle archive log changes), Audit Lookup (row-level before / after). |
| **Licences** | CSI contracts, JD Edwards licence picture, Oracle licence requirements, Subscribed Licenses, Usage Report, Financial Report. |
| **Settings** | Source-system definitions (applications, JDE schemas, Oracle catalogues), LDAP department mapping, SoD configuration (processes, activities, risks, objects, matrix), pricing catalogue, security and AD flags. |

---

## Who uses it

| Role | What they typically open Nomasx-1 for |
|---|---|
| **Internal auditor** | The quarterly SoD review — open conflicts, exception sign-offs, trend over time. |
| **Security officer** | Day-to-day "who has access to X" — the user-and-role catalogue, with dormant accounts and expired assignments flagged. |
| **JDE security administrator** | Cross-environment user-and-role catalogue, easier than the JDE security workbench, with bulk edits in Nomajde when changes are needed. |
| **Licence manager** | Required-vs-subscribed reconciliation, Object Usage Tracking evidence, financial-gap report before each renewal. |
| **CISO / Risk** | The compliance dashboard — SoD posture, account hygiene KPIs, licence exposure. |
| **DBA** | The Oracle picture — options, features, partitions — without writing a single query. |

---

## Roles inside Nomasx-1

The application ships four roles. They control what each user sees and what they can change.

| Role | What it grants |
|---|---|
| **Viewer** | Read every screen, run reports, no edits. |
| **Editor** | Everything a Viewer does, plus update the SoD matrices, schedule scans, manage notification rules. |
| **Auditor** | Everything a Viewer does, plus sign off exceptions. The only role that can close a flagged conflict. |
| **Administrator** | Everything above, plus manage the source-system configuration (ERP datasources, Oracle accounts, LDAP / AD mapping). |

A typical deployment keeps **Auditor** separate from **Administrator** — the same principle Nomasx-1 itself enforces: the person who configures the analysis should not be the one who signs off its findings.
