---
title: Nomasx-1 — The compliance and licence-optimisation platform
description: "Nomasx-1 unifies enterprise security, Object Usage Tracking, Oracle and JD Edwards licence compliance and Segregation of Duties into one platform — source-agnostic, audit-ready, on-premise."
keywords: [Nomasx-1, nomasx1, enterprise security, compliance, segregation of duties, SoD, JD Edwards, JDE, Oracle, licence optimisation, Object Usage Tracking, LDAP, audit, CSI]
hide_table_of_contents: false
---

import Link from '@docusaurus/Link';

# Nomasx-1

**Nomasx-1** is a security, licence-compliance and segregation-of-duties platform published by Nomana-IT and built with Liberty Next. For any connected application, it brings user and role security, usage tracking, Oracle and JD Edwards licence compliance and segregation-of-duties analysis together in one on-premise application, with a ready-made connector for JD Edwards EnterpriseOne on Oracle.

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
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>every grid · every dashboard</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(251,146,60,0.45)', background: 'rgba(251,146,60,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#fb923c'}}>Audit reports</div>
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>PDF · monthly by e-mail</div>
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
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Every grid and every dashboard exports to Excel, the two audit reports render in PDF, and every collection is dated under Last Refresh.</div>
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
      <li>Role assignments with effective and expiration dates — the expired ones are counted in the Security review.</li>
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
      <li>Licensing review — who is counted on which line of the contracts, what is missing and what it could cost (an assumption at list prices).</li>
    </ul>
  </div>

  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(248,113,113,0.35)', background: 'linear-gradient(165deg, rgba(248,113,113,0.10), rgba(248,113,113,0.02))'}}>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f87171', fontWeight: 800, marginBottom: '8px'}}>04 · Segregation of Duties</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>Where are the conflicts — and which ones were exercised?</div>
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

**Licenses → Oracle**: the Oracle components each database requires, grouped by application, with a green / red indicator straight from the collection scripts — the screen a licence manager opens before every renewal.

<svg viewBox="0 0 1320 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxsor-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxsor-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxsor-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxsor-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="380" rx="14" fill="url(#nxsor-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">License - Required (ORACLE)</text>
  <rect x="454.1416" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="476.1416" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.license_oracle_required_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="100" width="840" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="115.5" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⛉  Advanced filters</text>
  <text x="240" y="146" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">16 rows · 11.3 ms</text>
  <rect x="982" y="134" width="114" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="983" y="135" width="55" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1010.5" y="147.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Table</text>
  <line x1="1039" y1="139" x2="1039" y2="149" stroke="#334155" strokeWidth="1"/>
  <text x="1067.5" y="147.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Chart</text>
  <rect x="240" y="162" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="176.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="418" y="162" width="64" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="450.0" y="176.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="653" y="162" width="107" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="663" y="176.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Max rows  default</text>
  <rect x="766" y="162" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="789.5" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="819" y="162" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="847.5" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="882" y="162" width="67" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="915.5" y="176.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Group (1)</text>
  <rect x="955" y="162" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="983.5" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="1018" y="162" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1049.0" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="240" y="194" width="840" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION NAME</text>
  <text x="343" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CATEGORY</text>
  <text x="539" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPONENT</text>
  <text x="691" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">REQUIRED LICENSE</text>
  <rect x="240" y="220" width="840" height="22" fill="rgba(255,255,255,0.03)"/>
  <text x="252" y="234.5" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">▾ 1 - ERP-PROD  (16)</text>
  <rect x="240" y="243" width="840" height="22" fill="#0d1220"/>
  <text x="250" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="343" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Database Enterprise Management</text>
  <text x="539" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Diagnostics Pack</text>
  <circle cx="703" cy="254.0" r="3.2" fill="#f87171"/>
  <rect x="240" y="266" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="250" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="343" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Database Enterprise Management</text>
  <text x="539" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Tuning Pack</text>
  <circle cx="703" cy="277.0" r="3.2" fill="#f87171"/>
  <rect x="240" y="289" width="840" height="22" fill="#0d1220"/>
  <text x="250" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="343" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Oracle Database</text>
  <text x="539" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition</text>
  <circle cx="703" cy="300.0" r="3.2" fill="#4ade80"/>
  <rect x="240" y="312" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="250" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="343" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="539" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Partitioning</text>
  <circle cx="703" cy="323.0" r="3.2" fill="#4ade80"/>
  <rect x="240" y="335" width="840" height="22" fill="#0d1220"/>
  <text x="250" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="343" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="539" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Real Application Clusters</text>
  <circle cx="703" cy="346.0" r="3.2" fill="#f87171"/>
  <text x="240" y="380" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="311.88" y="368" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="321.88" y="381.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="375.88" y="380" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Showing 1–17 of 17 · 16 rows total</text>
  <rect x="992" y="368" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="381.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="368" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="381.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="368" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="381.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="368" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="381.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grouped by application</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one block per database</text>
  <line x1="200" y1="247.0" x2="260" y2="251" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsor-arrow)"/>
  <rect x="1120" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Group (1)</text>
  <text x="1130" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the grouping the screen opens with</text>
  <line x1="1120" y1="167.0" x2="915.5" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsor-arrow)"/>
  <rect x="1120" y="280" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Required licence</text>
  <text x="1130" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">green = used on the database</text>
  <line x1="1120" y1="297.0" x2="709" y2="289" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsor-arrow)"/>
</svg>

A second example: **Applications → Conflicts → Summary**, the segregation-of-duties conflicts per process and risk, with the row menu that leads to the users, roles, objects and details behind each one.

<svg viewBox="0 0 1320 374" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxsso-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxsso-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxsso-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxsso-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="334" rx="14" fill="url(#nxsso-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">SOD - Summary</text>
  <rect x="348.5608" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="370.5608" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.sod_summary_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="100" width="840" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="115.5" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⛉  Advanced filters</text>
  <text x="240" y="146" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">36 rows · 7.4 ms</text>
  <rect x="982" y="134" width="114" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="983" y="135" width="55" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1010.5" y="147.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Table</text>
  <line x1="1039" y1="139" x2="1039" y2="149" stroke="#334155" strokeWidth="1"/>
  <text x="1067.5" y="147.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Chart</text>
  <rect x="240" y="162" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="176.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="418" y="162" width="64" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="450.0" y="176.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="673" y="162" width="107" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="683" y="176.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Max rows  default</text>
  <rect x="786" y="162" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="809.5" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Views</text>
  <rect x="839" y="162" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="867.5" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filters</text>
  <rect x="902" y="162" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.5" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Group</text>
  <rect x="955" y="162" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="983.5" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Columns</text>
  <rect x="1018" y="162" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1049.0" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Export ▾</text>
  <rect x="240" y="194" width="840" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="268" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID (ID)</text>
  <text x="375" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="458" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PROCESS ID (ID)</text>
  <text x="546" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PROCESS ID</text>
  <text x="638" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RISK ID (ID)</text>
  <text x="712" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RISK ID</text>
  <rect x="240" y="220" width="840" height="22" fill="#0d1220"/>
  <rect x="245" y="223" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="234.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="234.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="546" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Procure to pay</text>
  <text x="638" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">P2P01</text>
  <text x="712" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Create a supplier and pay it</text>
  <rect x="240" y="243" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <rect x="245" y="246" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="257.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="257.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="546" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Procure to pay</text>
  <text x="638" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">P2P04</text>
  <text x="712" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Receive goods and approve the invoice</text>
  <rect x="240" y="266" width="840" height="22" fill="#0d1220"/>
  <rect x="245" y="269" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="280.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="280.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">O2C</text>
  <text x="546" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Order to cash</text>
  <text x="638" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">O2C02</text>
  <text x="712" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Change prices and invoice</text>
  <rect x="240" y="289" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <rect x="245" y="292" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="303.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="303.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FIN</text>
  <text x="546" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Finance</text>
  <text x="638" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FIN03</text>
  <text x="712" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Post and approve journal entries</text>
  <text x="240" y="334" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="311.88" y="322" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="321.88" y="335.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="375.88" y="334" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Showing 1–36 of 36</text>
  <rect x="992" y="322" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="335.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="322" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="335.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="322" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="335.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="322" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="335.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="254" y="242" width="170" height="100" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="266" y="263" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Display Users</text>
  <text x="414" y="263" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="266" y="285" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Display Roles</text>
  <text x="414" y="285" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="266" y="307" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Display Objects</text>
  <text x="414" y="307" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="266" y="329" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Display Details</text>
  <text x="414" y="329" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Process × risk</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from the SoD matrix</text>
  <line x1="200" y1="167.0" x2="556" y2="228" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsso-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Drill down</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">users, roles, objects, details</text>
  <line x1="200" y1="317.0" x2="254" y2="292.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsso-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Risk</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the incompatible pair, in words</text>
  <line x1="1120" y1="267.0" x2="980" y2="242" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsso-arrow)"/>
</svg>

---

## The application map

The menu opens on the overview and the **Reviews** — what is read to judge the situation —, the Data Explorer and the reports, then the working sections and the settings.

| Section | What it covers |
|---|---|
| **Overview** | The [Audit synthesis](./audit-synthesis.md) — users, roles, SoD conflicts and licence exposure at a glance, what needs a decision, data freshness; exported to Excel or PDF. |
| **Reviews** | Five readings of the situation: [Security](./security-review.md) — the access review, twelve checks and the accounts to review first; [Segregation of duties](./sod-review.md) — the conflicts allowed and those the users exercised, with their evidence; [Licences](./licensing-review.md) — the licensing review; [What to fix](./security-analysis.md) — nineteen checks, each finding with what to do; [Segregation of duties: trend](./sod-dashboard.md) — the conflicts refresh after refresh. |
| **Data Explorer** | [Free analysis](./data-explorer.md) of the security, segregation-of-duties and licence data, with ready-made analyses and dashboards. |
| **Reports** | The [licence audit](./reports/audit-licences.md) and the [Security & SoD assessment](./reports/security-sox.md), run for one application and downloaded as PDF or Markdown. |
| **Last Refresh** | The last collection of each module per application, grouped by module; a click on a line opens the run that produced it. |
| **Security** | Users, roles, role assignments, role matrix (combinations), duplicate users, users without roles, LDAP / AD reconciliation. |
| **Applications** | Per connected application: menus, rights (per user, per role, combined, with the [row security](./applications/rights/row-security.md) and the [UDO security](./applications/rights/udo-security.md)), Object Usage Tracking (components, objects, details), Conflicts (summary, details, exercised, by user, by role), Activity Log. |
| **Database** | Oracle properties (edition, packs, options, partitions), Audit Trail (Oracle archive log changes), Audit Lookup (row-level before / after). |
| **Licences** | CSI contracts, JD Edwards licence picture, Oracle licence requirements, Subscribed licences; the Licensing review under Reviews. |
| **Jobs** | [Collect the security and SoD data or the licences, produce the two audit reports](./jobs.md), for one or several applications, with a live log. |
| **Settings** | Source-system definitions (applications, JDE schemas and [UDO libraries](./settings/global/udo-libraries.md), Oracle catalogues), LDAP department mapping, SoD configuration (processes, activities, risks, objects, matrix), pricing catalogue, security and AD flags. |

---

## Who uses it

| Role | What they typically open Nomasx-1 for |
|---|---|
| **Internal auditor** | The quarterly SoD review — open conflicts, the ones the users exercised and their evidence, trend over time. |
| **Security officer** | Day-to-day "who has access to X" — the user-and-role catalogue, with dormant accounts and expired assignments flagged. |
| **JDE security administrator** | Cross-environment user-and-role catalogue, easier than the JDE security workbench, with bulk edits in Nomajde when changes are needed. |
| **Licence manager** | Required-vs-subscribed reconciliation, Object Usage Tracking evidence, financial-gap report before each renewal. |
| **CISO / Risk** | The compliance dashboard — SoD posture, account hygiene KPIs, licence exposure. |
| **DBA** | The Oracle picture — options, features, partitions — without writing a single query. |

---

## Roles inside Nomasx-1 \{#roles\}

Nomasx-1 ships four predefined roles:

| Role | For |
|---|---|
| **Auditor** (`nomasx1_auditor`) | Reads everything and runs the two audit reports. Changes no setting. The monthly reports are mailed to it. |
| **Security officer** (`nomasx1_security_officer`) | Security and segregation of duties in read and change, with their settings, the security collection and its report. The rest in read. |
| **Licence manager** (`nomasx1_licence_manager`) | Licences and database in read and change, with the licence settings, the licence collection and its report. The rest in read. |
| **Administrator** (`nomasx1_admin`) | Everything in the application: read and change, the settings and the jobs of its menu included. |

Each role names menu folders, so it follows them when a version adds screens to a folder. A person may hold several — a security officer who is also the licence manager: the rights add up.

Add them one at a time under **Liberty Next → Administer → Access → Roles → Add a predefined role…** (see [Predefined roles](../framework/build/secure/roles-and-permissions.md#predefined)), or all four at once with the [`nomasx1-roles`](../nomaflow/bundled-jobs.md#nomasx1-roles) job, which also gives the administrator every `nomasx1-*` job. Run again, the job puts the shipped rights back on a role changed in Access; users are not touched.

A typical deployment keeps the auditors apart from the administrators: the person who configures the analysis is not the one who reviews its findings. See [Jobs](./jobs.md#access).
