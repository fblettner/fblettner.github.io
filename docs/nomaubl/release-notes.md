---
title: Release Notes
description: "NomaUBL release notes — every user-visible change shipped in the platform, version by version, in reverse chronological order. Mirrors the in-app Release Notes page."
keywords: [NomaUBL, release notes, changelog, version, e-reporting, processing log, dashboard, AFNOR XP Z12-014, Schematron, RFE, Réforme de la Facturation Électronique]
---

# Release Notes

Every user-visible change to NomaUBL — UI, REST API, CLI, behaviour — is consigned here. The most recent release sits at the top. This page mirrors the **About this release** card and the dedicated *Release Notes* screen surfaced inside the application.

<div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '14px 18px', margin: '24px 0', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', alignItems: 'center'}}>
  <span style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, opacity: 0.65, marginRight: '6px'}}>Versions</span>
  <a href="#v2026-07-05" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(74,158,255,0.45)', background: 'rgba(74,158,255,0.08)', color: '#4a9eff', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none'}}>2026.07.05 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-07-05</span></a>
  <a href="#v2026-07-03" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.07.03 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-07-03</span></a>
  <a href="#v2026-07-02" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.07.02 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-07-02</span></a>
  <a href="#v2026-06-26" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.26 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-26</span></a>
  <a href="#v2026-06-25" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.25 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-25</span></a>
  <a href="#v2026-06-23" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.23 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-23</span></a>
  <a href="#v2026-06-22" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.22 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-22</span></a>
  <a href="#v2026-06-21-5" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.21.5 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-21</span></a>
  <a href="#v2026-06-21-4" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.21.4 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-21</span></a>
  <a href="#v2026-06-21-3" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.21.3 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-21</span></a>
  <a href="#v2026-06-21-2" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.21.2 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-21</span></a>
  <a href="#v2026-06-21-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.21.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-21</span></a>
  <a href="#v2026-06-21" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.21 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-21</span></a>
  <a href="#v2026-06-17" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.17 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-17</span></a>
  <a href="#v2026-06-16" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.16 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-16</span></a>
  <a href="#v2026-07-11-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(74,158,255,0.45)', background: 'rgba(74,158,255,0.08)', color: '#4a9eff', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none'}}>2026.07.11.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-07-11</span></a>
  <a href="#v2026-07-09-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.07.09.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-07-09</span></a>
  <a href="#v2026-07-08-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.07.08.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-07-08</span></a>
  <a href="#v2026-07-05-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.07.05.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-07-05</span></a>
  <a href="#v2026-07-03-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.07.03.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-07-03</span></a>
  <a href="#v2026-07-02-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.07.02.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-07-02</span></a>
  <a href="#v2026-06-26-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.26.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-26</span></a>
  <a href="#v2026-06-25-4" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.25.4 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-25</span></a>
  <a href="#v2026-06-25-3" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.25.3 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-25</span></a>
  <a href="#v2026-06-25-2" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.25.2 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-25</span></a>
  <a href="#v2026-06-25-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.25.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-25</span></a>
  <a href="#v2026-06-23-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.23.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-23</span></a>
  <a href="#v2026-06-22-5" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.22.5 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-22</span></a>
  <a href="#v2026-06-21-5" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.21.5 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-21</span></a>
  <a href="#v2026-06-21-4" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.21.4 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-21</span></a>
  <a href="#v2026-06-21-3" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.21.3 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-21</span></a>
  <a href="#v2026-06-21-2" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.21.2 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-21</span></a>
  <a href="#v2026-06-21-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.21.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-21</span></a>
  <a href="#v2026-06-21" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.21 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-21</span></a>
  <a href="#v2026-06-17" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.17 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-17</span></a>
  <a href="#v2026-06-16" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.16 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-16</span></a>
  <a href="#v2026-06-15" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.15 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-15</span></a>
  <a href="#v2026-06-14" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.14 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-14</span></a>
  <a href="#v2026-06-13" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.13 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-13</span></a>
  <a href="#v2026-06-12" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.12 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-12</span></a>
  <a href="#v2026-06-10" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.10 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-10</span></a>
  <a href="#v2026-06-03" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.03 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-03</span></a>
  <a href="#v2026-06-02" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.06.02 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-06-02</span></a>
  <a href="#v2026-05-26" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.26 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-26</span></a>
  <a href="#v2026-05-24" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.24 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-20</span></a>
  <a href="#v2026-05-23" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.23 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-20</span></a>
  <a href="#v2026-05-22" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.22 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-19</span></a>
  <a href="#v2026-05-21" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.21 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-19</span></a>
  <a href="#v2026-05-20" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.20 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-19</span></a>
  <a href="#v2026-05-19" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.19 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-19</span></a>
  <a href="#v2026-05-18" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.18 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-18</span></a>
  <a href="#v2026-05-17" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.17 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-18</span></a>
  <a href="#v2026-05-16" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.16 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-14</span></a>
  <a href="#v2026-05-15" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.15 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-14</span></a>
  <a href="#v2026-05-14" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.14 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-14</span></a>
  <a href="#v2026-05-13" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.13 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-14</span></a>
  <a href="#v2026-05-12" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.12 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-14</span></a>
  <a href="#v2026-05-11" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.11 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-13</span></a>
  <a href="#v2026-05-10" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.10 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-13</span></a>
  <a href="#v2026-05-9" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.9 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-12</span></a>
  <a href="#v2026-05-8" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.8 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-09</span></a>
  <a href="#v2026-05-7" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.7 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-09</span></a>
  <a href="#v2026-05-6" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.6 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-09</span></a>
  <a href="#v2026-05-5" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.5 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-08</span></a>
  <a href="#v2026-05-4" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.4 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-07</span></a>
  <a href="#v2026-05-3" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.3 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-06</span></a>
  <a href="#v2026-05-2" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.2 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-06</span></a>
  <a href="#v2026-05-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-05</span></a>
  <a href="#v2026-05-0" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.0 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-05</span></a>
  <a href="#v2026-04-10" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.10 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-04</span></a>
  <a href="#v2026-04-9" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.9 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-30</span></a>
  <a href="#v2026-04-8" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.8 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-7" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.7 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-6" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.6 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-5" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.5 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-4" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.4 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-3" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.3 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-2" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.2 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-0" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.0 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v1-0-0" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>1.0.0 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· Initial release</span></a>
</div>

---

## 2026.07.05 — 2026-07-05 \{#v2026-07-05\}

Multiple preceding invoices per document and per line — plus the French CTC schematron pack refreshed to FNFE V1.4.0.

### New features

- **Multiple preceding-invoice references (BG-3, 0..n).** An invoice can now reference several prior invoices, not just one. A new *Preceding Invoices — repeating* mapping in the XSL editor iterates a repeating source group and emits one `cac:BillingReference` per occurrence (each with an optional issue date), alongside the existing single BT-25/BT-26 reference.
- **Line-level preceding-invoice reference (EXT-FR-FE-136).** An invoice line can now carry its own reference to a prior invoice — useful for line-level credits. A new per-line mapping emits `cac:BillingReference / cac:InvoiceDocumentReference / cbc:ID` (with an optional issue date) inside the line, in the correct schema position.

### Updates

- **French CTC validation rules refreshed to FNFE V1.4.0 (XP Z12-012, 30 June 2026).** The Flux 2 and EXTENDED-CTC-FR UBL schematrons, plus the EN 16931 code lists, are aligned with the 30 June 2026 publication. Among other changes, it corrects the XPath for the line-level preceding-invoice reference (EXT-FR-FE-136) and adds `RECAPITULATIF_COTRAITANCE` to the accepted attachment types. The standard rules become mandatory on issuance from 1 September 2026.
- **The `UBL-CR-001` warning ("a UBL invoice should not include extensions") is no longer surfaced.** It fired on the `ext:UBLExtensions` custom fields NomaUBL emits by design. It's now filtered out when validation results are collected — the standard schematron is left untouched, so a future update won't reintroduce the warning.

### Fixes

- **Preceding-invoice reference no longer breaks the schema.** When a purchase-order reference (BT-13) and a preceding-invoice reference (BT-25/BT-26) were both present, they were emitted in the wrong order and the UBL schema refused the document. `cac:OrderReference` now correctly precedes `cac:BillingReference`. Deployed templates pick up the fix by re-running the upgrade.

---

## 2026.07.03 — 2026-07-03 \{#v2026-07-03\}

Embed an attachment already carried as base64 in the source spool, straight into the UBL invoice.

### New features

- **Embed a spool attachment in the invoice.** A document already carried as base64 in the source spool can now be attached to the UBL invoice by mapping it in the XSL editor. A new *Embedded Attachments* section maps the base64 field, a filename (literal or a `{Field}` / `{Group/Field}` placeholder, e.g. `{DocNumber}.pdf`), the MIME type and a qualifier picked from the platform's reference list (PJA, RIB, BON_LIVRAISON…) into a `cac:AdditionalDocumentReference` / `EmbeddedDocumentBinaryObject` (BT-125) — up to four per invoice. It lands in the correct schema position and sits alongside the existing attachments (external files, generated readable PDF), all kept together. Until now attachments could only come from files on disk or the generated PDF, not from a base64 field inside the spool.

---

## 2026.07.02 — 2026-07-02 \{#v2026-07-02\}

Constant values in field mappings, plus a batch of BIP scan / extract fixes.

### Improvements

- **Constant values in field mappings.** A mapped value wrapped in backticks — for example `` `EDI` `` — is emitted as a fixed constant instead of being read from the source. It works on custom extension fields, notes and item properties, and is handy for platform-specific values that never change.

### Fixes

- **BIP jobs in both completed states are collected.** The scan and extract queries now match job status `D` and `FD` (previously only `D`).
- **BIP language filter fixed.** The filter used a column that only exists on the PDF output table, so applying it to the input-XML query broke the extraction; it now sits on the output query, where the column lives.
- **Scheduled BIP scan honours the lookback floor.** A scan launched from the web UI now applies the `bipLookbackDays` Global setting, like the command-line scan already did.
- **BIP submit-date window fixed.** The floor now filters the real submit-date column as a window up to today, so jobs submitted today are included and out-of-window jobs (whose numbers can be higher) are excluded.
- **BIP post-generation no longer errors on the job key.** The job number was mis-read from the file base name, so the JDE cleanup step failed with a number-format error; it now runs.

---

## 2026.06.26 — 2026-06-26 \{#v2026-06-26\}

Custom extension fields validate cleanly with more than one field configured.

### Fixes

- **Custom extension fields with several fields configured.** UBL's `ext:ExtensionContent` admits a single child element, so each configured field is now emitted in its own `ext:UBLExtension` / `ext:ExtensionContent` block — as a plain unprefixed element in the document's own namespace (no `xmlns`), the shape accepted by certified platforms.

---

## 2026.06.25 — 2026-06-25 \{#v2026-06-25\}

Custom Extension Fields for data outside EN 16931, the per-line country of origin (BT-159), seller item code (BT-155) and classification version (BT-158-2), a *Trim zeros* switch on the PDF template, and two upgrade-side improvements (a manual-fix report and a compare-to-upstream diff on File Versions).

### New features

- **Custom extension fields (UBLExtensions).** A new *Custom Extension Fields* section in the XSL editor maps up to eight source values into a UBL `ext:UBLExtensions` block on the invoice — for data a trading partner needs that has no standard EN 16931 home (routing method, delivery-copy address, partner identifiers…). Each field carries an element name, a source path or `{template}` value and the same optional emit conditions as item properties. The block is written as the first element of the invoice, as the UBL schema requires, and is produced only when at least one field resolves. Empty by default, so existing invoices are unchanged. Data placed here sits outside the EN 16931 model — prefer the standard field when one exists (BT-19 accounting reference, BT-10 buyer reference) and confirm with the receiving platform that it reads the extension.
- **Trim zeros switch on the PDF template.** A new *Trim zeros* switch in the PDF template builder drops trailing zero decimals from amounts, unit prices and quantities — a whole amount prints as `23` instead of `23.00`, and a `23.0000` unit price prints as `23`. Off by default, which keeps the fixed two-decimal amount and four-decimal price display. Set per template, it applies to the line table, the totals box and both the readable and on-screen PDFs.
- **Country of origin on invoice lines (BT-159).** The invoice editor carries a country-of-origin field per line, next to the classification code. The ISO code is written to the UBL, while the invoice detail view and every PDF — preview, batch and notification — show the country's full name resolved from the shared countries list. A toggle in the PDF line layout controls whether it prints.
- **Classification scheme version on lines (BT-158-2).** A line can now record the version of its classification scheme alongside the list identifier; it appears in brackets after the list ID wherever the classification is shown.
- **Seller's item code in the PDF (BT-155).** The seller's article code now prints in the per-line detail, between the buyer reference and the standard identifier, with its own show / hide toggle.

### Improvements

- **Upgrade flags templates that need a manual fix.** When a customised template (for example a forked `ubl:supplier-party` in `ubl-defaults.xsl`) is preserved during an upgrade but the framework has since added a parameter it doesn't declare, the upgrade report now lists it under *Manual fix required* with the exact `<xsl:param>` to add — instead of compiling fine and then failing at invoice generation with a cryptic `XTSE0680` error.
- **Compare a file with its upstream version.** In File Versions, a file preserved by the upgrade now carries an *upstream* row — the shipped version saved as `<name>.upstream`. Compare your live file against it to see precisely what the new framework version changed, and merge it by hand.
- **Buyer SIREN recovered from the VAT number.** When a customer record carries no SIREN but does carry a French VAT identifier, the SIREN is derived from it so the buyer's legal identifier and electronic address are still populated.
- **Country of origin resolved from the shared reference list.** The source country value is now resolved against the canonical countries list when the invoice is produced, instead of a copy of the list baked into each deployment. Correcting a label in the list takes effect everywhere with no re-save.
- **Cleaner addresses in the PDF.** Seller, customer, agent and delivery addresses are built line by line, so a party whose address starts on the second street line no longer prints a leading blank line. The delivery address also shows its additional street line.
- **Smoother framework upgrades.** Before importing new functions, the upgrade aligns each deployment's stylesheet header with the shipped language version and namespaces, so templates that rely on newly added framework features compile without manual edits.

### Fixes

- **No more empty address blocks on invoice lines.** A line that only carries a delivery date no longer emits an empty location or country element, and line addresses no longer fall back to a default country that doesn't belong there.
- **Delivery heading no longer repeats.** In the PDF, a line with no delivery group no longer clears the breadcrumb and makes the next line that does carry one re-print the delivery heading.
- **Multi-row notes rebuilt into a single paragraph.** A note split across several source rows can be collected back into one paragraph instead of producing a separate note per row.

---

## 2026.06.23 — 2026-06-23 \{#v2026-06-23\}

Country of origin and commodity classification on invoice lines, allowance / charge reason defaults, and line allowances derived from a percentage alone.

### New features

- **Country of origin and commodity classification on invoice lines (BT-158 / BT-159).** Two new fields in the *Invoice Lines* section of the XSL editor map the per-line source path. A *Country & Classification* tab in UBL Defaults sets the source format — ISO code, French description or English description — and the framework resolves the value against the canonical countries list at save time. No parallel mapping table to maintain: if a label is wrong, edit it once in the country list. Classification code, scheme listID and version defaults fall back when the per-line path is empty.
- **Allowance and charge reason defaults (BR-42 / BR-43).** New *Allowances / Charges* tab in UBL Defaults sets a fallback reason text and reason code per direction. `ChargeIndicator` picks the pair, so a single configuration covers both allowance and charge cases.
- **Line allowance derived from a percentage alone.** When the source carries only the percentage, the framework derives both amount and base from the line net amount. Mixed combinations are also covered: percentage + base derives the amount, percentage + amount derives the base. JDE's trailing-sign convention (`25.00-`) is normalised automatically.
- **Group-less line allowance mode.** When the allowance fields sit directly on the invoice line with no wrapper element, point the *Item AC* TAG at `.` (or leave it empty) and the framework iterates the line itself.
- **Seller's item identification emitted (BT-155).** The TAG was declared but never reached the output. The framework now emits `cac:SellersItemIdentification / cbc:ID` between item name and country of origin, per the UBL 2.1 sequence.

### Improvements

- **Upgrade propagates new framework symbols into deployed templates.** Two new passes during upgrade close the migration gap that used to require hand-editing every customer template after every release. First, the deployment's defaults file gets any new variables, functions or templates the shipped reference adds — operator-configured values stay untouched. Second, each customer per-document template has legacy duplicates of those same names stripped from its override block, so the imported (current) version wins under XSL precedence. Re-running the upgrade now fixes templates that previously failed to compile because the framework body started calling new symbols or new template parameters.
- **Multi-VAT footer wrapped per rate.** The PDF-to-XML converter now opens a fresh wrapper section for each VAT-rate footer, so an invoice with multiple rates produces one block per rate instead of a flat run of fields. Single-rate invoices still produce one block.

### Fixes

- **Invoice lines no longer dropped after page breaks (PDF-to-XML).** JDE emits the delivery preamble once per BL block; continuation pages stream more line rows without a fresh preamble. The delivery wrapper is now carried across page breaks and only released by the totals or VAT footer, so continuation rows stay in the right parent.
- **PDF amounts with ambiguous separators (`1.682.28`).** When the same character serves as both thousands and decimal separator — or after the French comma-to-dot pass turns `1,682.28` into `1.682.28` — the value now collapses to `1682.28`. The last `.` is treated as the decimal, anything earlier is dropped.
- **Local Schematron rule `BR-NOMAUBL-01` retired.** The credit-note preceding-invoice condition is now enforced by `BR-FR-CO-05` in the 2026-04-30 Flux2 v1.3.1 pack, so the local duplicate is gone. The file stays in place as scaffolding for future house rules.

---

## 2026.06.22 — 2026-06-22 \{#v2026-06-22\}

Single sign-on (SSO) via OIDC — the IdP verifies identity, NomaUBL keeps the call on roles, permissions and row filters.

### New features

- **Single sign-on via OIDC.** The *Auth Mode* field on the Global template switches the login screen between `internal`, `oidc` (SSO only) and `both` (SSO button above the local form). The IdP configuration lives in a new *oidc* system template (issuer URL, client ID/secret, redirect URI, scopes, claim mapping, auto-provisioning with a default role) — created automatically on fresh installs and upgrades, or in one click from the **+ Add OIDC** button in the Configuration Manager header. Sign-in is keyed by email: an *Allowed email domains* allow-list restricts SSO to one or more tenants, and a *Require Google Workspace domain* field enforces the `hd` claim so a personal Gmail can't slip in with the same address. Auto-provisioned accounts get a short JDE-style username derived from the email's local-part. Sessions minted through OIDC lock down the Profile modal — the *Security* tab and identity fields are read-only since password rotation happens at the IdP. Roles, grants and row-filters stay managed in NomaUBL — the IdP only verifies identity.

---

## 2026.06.21 — 2026-06-21 \{#v2026-06-21\}

Role overhaul day: row filters, granular action permissions, a 4-tab editor, self-service password reset and dashboard cards as individual permissions. On the PA connector side: inbound endpoints shipped by default. On the UBL side: configurable supplier electronic address (BT-34) and a per-document-type Schematron toggle. Daily invoice volume becomes stacked bars by status.

### New features

- **Role-level row filters.** A role can be restricted to a specific subset of invoices (and processing-log / integration-error / e-reporting rows) by picking a column and one or more values in *Settings → Roles → Data scope*. The typical use case is an external-customer role that only sees invoices issued to its own alpha key (UHALKY). The row filter applies to the list views, the dashboard, every per-row endpoint (lifecycle, lines, XML download, PDF render, status push, delete, resend, email), and the generated PDF byte stream. Forbidden rows return the same "not found" shape the UI shows for genuinely missing data, so the response can't be used to probe for invoices a role shouldn't know exist. Multiple filters on the same column combine as OR; filters on different columns combine as AND, side-by-side with the existing Companies grant.
- **Granular action permissions.** The old all-or-nothing read-only flag is replaced by a per-action whitelist under *Settings → Roles → Actions*. Invoice, E-Reporting and Integration ops are grouped by view; each button can be allowed or blocked independently — edit, delete, resend, push status (with separate PA and DB sub-permissions for the *Set Status* modal's two tabs), validate UBL, download UBL, preset actions, custom actions, email PDF, generate / resend e-reporting batches, and trigger batch integration jobs (*Fetch Received* / *Import Statuses* / *Retrieve Statuses*). Existing roles keep their behaviour: a role with no whitelist set continues to allow every action, and turning the whitelist on pre-populates with everything so nothing changes until the operator explicitly removes a check.
- **Roles editor reorganised into purpose-built tabs.** The single *Permissions* panel now splits into **Access** (pages + features), **Actions** (the new whitelist), **Data scope** (companies + row filters) and **Members**. The role name and description sit above the tab bar so they stay visible from any tab — *Save* / *Cancel* render on every editing tab.
- **New `invoice.create` action permission.** The **New invoice** quick action on the dashboard is gated by its own action grant — a role without `invoice.create` no longer sees the button and the underlying endpoint refuses the call.
- **Role-based dashboard card visibility.** Each dashboard widget is now an individual permission. *Settings → Roles → Access* has a **Dashboard cards** checklist below *Allowed Pages* — empty list shows every card (existing behaviour), populated list is a strict whitelist. Hidden cards are skipped server-side, so their SQL never runs and their data never reaches the wire.
- **Self-service password reset.** A *Forgot password?* link on the login screen opens a dialog asking for both username and email; if they match an active account, the user gets a one-shot link valid 60 minutes that lands on a new page to choose a new password. Requires SMTP configured in the `global` template.
- **API Reference is its own page grant.** The sidebar link to `/api/docs` no longer piggy-backs on the *Status Reference* grant, so a role can be given browser access to the app without exposing the raw API contract — useful when handing an external user a log-in that should not see the endpoint catalog. Fresh admin roles get the new `apireference` page automatically; existing admins pick it up on the next init.
- **Daily invoice volume — stacked bars by status.** The single line chart is replaced by a per-day stacked bar split into *Approved* / *In flight* / *Errors-IT* / *Errors-Business*. Hover any day for a per-bucket count tooltip.
- **`fetch-received-list` and `fetch-received` shipped in the default `pa-default` api-connector.** Fresh installs of the bundled connector now expose the two inbound endpoints alongside the existing six outbound ones, with sensible URL skeletons (`/api/v1/sale/received-invoices?since={{since}}` and `/api/v1/sale/received-invoices/{{uuid}}`). The actual paths still depend on each PA — the operator confirms the URL once and the resolver finds the endpoints by name immediately. **Existing installs** are not auto-migrated: `ConfigMerger` skips customer-owned api-connectors as a whole to preserve URL / auth edits, so operators upgrading need to add the two endpoint rows manually via the **+ Add endpoint** button (copy the names + URL skeletons above).
- **Seller electronic address (BT-34) is now configurable.** Some customers route their invoices on a Peppol / e-invoicing identifier that is not their SIREN. The *Supplier Companies* panel in *UBL Defaults* gained a dedicated BT-34 field per company, and the XSL editor gained a `TAG_SUPPLIER_ENDPOINT` override for per-document mapping. Resolution order at emission time is: per-document TAG → *UBL Defaults* supplier endpoint → SIREN. Installs that don't set anything keep the current behaviour (SIREN is emitted as endpoint).
- **Per-document-type Schematron toggle.** The *Document Types* editor gained a Schematron checkbox alongside *Send to PA* / *Keep UBL* / *Keep PDF*. When off for a code, the EN 16931 / CTC-FR Schematron pass is skipped for invoices resolving to that type and no rows land in `F564236`. Shipped defaults enable validation for `B2B` and `B2G` (CTC-FR scope) and disable it for `B2BINT`, `B2C`, `OUTOFSCOPE`, `ARCHIVEONLY`, `DOCUMENT` (out of scope — French rules misfire on consumer transactions and foreign buyers). Customers can flip the flag per code as needed. Existing 7-field document-types rows fall back to the same per-code default so upgrades pick sensible values without manual migration.
- **UBL-source pipeline reads `document-types` for `sendToPA` + `validate`.** Invoices uploaded as UBL (*Process Document* UI, receive flow, `fetch-received`) now resolve their doc-type code from the doc-template's `processingType.default`, look it up in `document-types`, and let the row drive both the Schematron gate and the `sendToPA` fallback. Explicit caller overrides (UI / CLI `sendToPA=Y/N`) still win. One INFO line per call shows which row drove the decision, mirroring `AUTO_RESOLVE` in the XML pipeline.

### Fixes

- **"Uncheck all" in the role *Actions* tab now actually unchecks every action.** Previously the dual meaning of an empty action list (legacy "all allowed" vs. explicit "none allowed") meant clicking the button reverted the role to all-allowed and silently re-checked everything. The whitelist mode is now a dedicated toggle so the visible checkbox state always matches what gets saved.
- **View-only roles can read invoices again.** The detail modal uses the UBL XML endpoint to render *Parties* / *Invoice Lines* / *VAT Recap* / *Notes*; gating it by `invoice.download` was hiding every tab from any role that didn't have the download action. The endpoint is now read-open (still row-filter and visibility gated) — only the explicit **Download UBL** button stays gated by `invoice.download`.
- **Password-reset table now appears in *Settings → db-nomaubl*.** The *Auth* section gains an *Auth · Password resets* field (default `F564255`) so the Validate schema check stops reporting it as a missing table. See [Database Tables](./references/database-tables.md).
- **Dashboard *PA round-trip* card no longer crashes for roles with a row-filter on a header column** (for example customer name). The card's lifecycle-only SQL now gates eligible rows through an `EXISTS` against the header table instead of splicing the row-filter clause into a query that didn't know about it.
- **Daily invoice volume chart legible at every period.** Bars are now clamped between 3 and 36 px so 7-day periods stop rendering giant slabs and long periods stop rendering slivers. Date labels are HTML, so they stay sharp at any period instead of squishing into illegible dashes when the SVG is stretched.

---

## 2026.06.17 — 2026-06-17 \{#v2026-06-17\}

Notification PDFs use the configured template, two precision fixes, and proper server-side pagination on the processing log.

### Fixes

- **Notification PDFs now use the configured document template.** PDFs attached to outbound notifications and email notifications were always rendered with the bundled default layout, regardless of the per-document `pdfTemplate` configured on the doc-template (`vrc_pro`, `cdn_facture`, …). The notification dispatcher now resolves the template stored on the invoice and applies it to the attached PDF, matching how the *Process Document* UI renders it. Installs that never set a per-document template keep the existing rendering.
- **Line allowance amounts with a leading-dot input no longer fail BR-DEC-24.** JDE fields delivered as `.4700` (no integer part) were emitted into the UBL line allowance amount (BT-136) as `0.4700` — four decimals, fatal under the French e-invoicing Schematron rule BR-DEC-24 ("at most 2 decimals"). The amount normalisation function now applies the 2-decimal cap to leading-dot values: `.4700` becomes `0.47`. Same fix in the 6-decimal price helper for consistency.
- **Processing Log grouped view shows every job in the loaded window.** Long-running batches (one `START` → thousands of intermediate events → one `END`) were rendering as a single `? → END` row when the `START` fell off the server slice. Three things were stacked against this view: the server silently capped responses at 500 events, the client sent only 5,000 even when more were available, and the grouper emitted one orphan row per intermediate event when no matching `START` was on the page. All three are fixed — server cap raised to 200,000, grouped-mode client request raised to 100,000, and dangling intermediates now collapse into a single per-job row carrying every step.

### New features

- **Server-side pagination on the Processing Log flat view.** The flat (non-grouped) Processing Log now paginates against the backend instead of capping at the loaded slice. Operators with long histories can walk through every event without re-running filters. Grouped view keeps its single-window load (capped at 100,000 events) because jobs are stitched together client-side.
- **Pagination footer on the grouped Processing Log.** The grouped jobs list gained a sticky footer with page size selector (25 / 50 / 100 / 200), first / previous / next / last controls and current-position indicator. Page size persists across reloads.

### Improvements

- **Document-template lists are now sorted alphabetically.** Every place a list of document templates appears in the UI — the *Documents* editor sidebar, the template picker dropdown used by *Process Document* / *UBL Validation* / *Extract from BIP*, the *Global* editor's per-company override picker, the *Fetch Documents* editor's report rows, and the XSL editor's connector sample modal — now lists the templates in alphabetical order. Previously they followed the order they were saved in the config file, which became unscannable as templates were added.
- **Configuration diagnostics for `AUTO` mode.** Processing in `AUTO` mode now writes two INFO log lines per processed document showing the resolved processing type code, the mapping table used, and the resulting effective mode (`UBL` / `BURST` / `SINGLE` / `BOTH`). Makes it possible to diagnose "AUTO ran the wrong mode" cases from the Processing Log in one or two reads instead of guessing at what the customer's configuration produced.

---

## 2026.06.16 — 2026-06-16 \{#v2026-06-16\}

Actionable error when a BI Publisher RTF subtemplate is missing, and a starter manifest generator for the PDF → XML adapter.

### Fixes

- **Actionable error when a BI Publisher RTF subtemplate is missing.** The PDF generation path used to log a raw `ERROR RUN PDF java.util.EmptyStackException` when XDO's RTF parser hit an unresolvable `IMPORT` — almost always a subtemplate file (`sb_*_header.rtf`, `_footer.rtf`, `_detailslivre.rtf`, `_lettre_sub.rtf`, …) missing from the customer's environment, or an OS-specific path-separator mismatch. The PDF path now catches the underlying runtime exception and prepends a one-line hint telling the operator to verify `IMPORT` paths in the main RTF and confirm every referenced subtemplate exists on the host. Applies to both the `SINGLE`-mode shortcut and the standard processing path.
- **PDF → XML adapter now groups invoices in batch PDFs.** When a single JDE PDF carries N invoices (batch printing), the converter previously collapsed everything into one `<On_Payment_Terms_S3>` wrapper. It now closes the current wrapper and opens a new one when the next `SI=3` page-header stream appears after a tax-summary section (`SI=7`), so each invoice in the batch is its own addressable XML block. `SI=5` per-page running totals no longer trigger a boundary, fixing the multi-page-invoice split. Verified on a 13,920-page PDF carrying 2,132 invoices: one wrapper per invoice, line items and totals all contained.

### New features

- **Starter manifest generator for the PDF → XML adapter.** New CLI mode `-pdfManifest <input.pdf> <output.manifest.xml>` (also `nomaubl.sh pdf-manifest` / `nomaubl.cmd pdf-manifest`) analyses the PDF and emits a JDE-shape manifest XML, for the case where the customer has no native JDE XML sample of the same R-program to feed `-pdf2xml`. Inferred element names use the printed RC label text where available and the OWObject DD alias as fallback; the customer edits the file to give meaningful names, then reuses it as the 3rd argument of `-pdf2xml`. The root element is derived from the PDF filename (typical JDE spool convention) and multi-line text fields keep a single element name across all their lines via a sticky cache.

---

## 2026.07.11.1 — 2026-07-11 \{#v2026-07-11-1\}

### New features

- **E-Documents — browse every archived document.** A new *E-Documents* page lists all documents captured in the archive, not only those that became invoices — so a spool that failed early, or a document type that never produces an invoice, is still visible. The default columns are the archive fields (document number, type, company, activity, sub-type, send-to-PA flag, customer, amount, document date, archive date, source file, PA UUID), with filters on activity, customer, source file and the usual period range. Clicking a document opens a viewer with its **archived source spool** and, when the document became an invoice, the **generated UBL** — each shown formatted and downloadable (named after the document). Columns and filters are configurable from *Settings → List Views → E-Documents*, and a matching REST endpoint (`/api/list-documents`, documented in the built-in API reference) exposes the same archive to external applications. The page follows the same company / role access rules as the invoice list; grant it to a role from *Settings → Roles*.

## 2026.07.09.1 — 2026-07-09 \{#v2026-07-09-1\}

### New features

- **Enrich the XML spool from a SQL or API connector before transformation.** A new *Enrichment* tab on a document template lets you fetch data that's missing from the source spool — from a SQL query or a REST endpoint — and inject it into the spool *before* it is transformed, so the fetched values can be mapped in the XSL editor like any other spool field and are archived with the source. Each rule picks a *scope* by XPath (the whole document, or a repeating group such as each invoice line), sends fields from that scope as query/endpoint parameters, and writes the returned columns/fields back as new elements — directly into the scope node, into a new group, or into an existing group. A rule can add a single flat set of fields or a repeating group (one child per returned row); rules run in order, so a later rule can use what an earlier one added, and identical lookups are cached so the connector is called once per distinct key. The enriched data is stored with the archived source (F564230), so a reprocess doesn't call the connector again. Nothing runs unless a rule is configured — existing templates are unaffected. A *Dry run* button lets you try the rules against a loaded sample spool — it calls the real connectors and shows the enriched XML, a summary and any warnings without changing anything, and the result can be downloaded (named after the sample, e.g. `26000001CG00005_enrich.xml`) to build the XSL mapping straight away.

### Fixes

- **Document VAT breakdown is aggregated per category, rate and exemption.** When several source VAT recap lines resolved to the same target VAT category — e.g. two source tax codes both mapping to *Standard rated* — the invoice emitted two `cac:TaxSubtotal` for the same category and rate, which is invalid (EN 16931 BR-S-08) and rejected by the platform. The VAT breakdown is now grouped by the resolved combination of category (BT-118), rate (BT-119) and exemption code / reason (BT-121 / BT-120): one breakdown per combination. The taxable and tax amounts are **summed from the source** (not recomputed), so a genuine accounting inconsistency still surfaces as a validation error rather than being silently corrected.

## 2026.07.08.1 — 2026-07-08 \{#v2026-07-08-1\}

### New features

- **Buyer trading name (BT-45).** The buyer's commercial / trading name can now be mapped from a source field (new *Buyer trading name* mapping in the XSL editor) and is emitted as `cac:PartyName/cbc:Name` on the customer party, in the correct schema position — mirroring the seller trading name (BT-28). Emitted only when a value is mapped.
- **Document totals gain charges, prepaid and rounding (BT-108 / BT-113 / BT-114).** The invoice totals block can now carry the sum of document-level charges (`cbc:ChargeTotalAmount`), the amount already paid (`cbc:PrepaidAmount`) and a rounding amount (`cbc:PayableRoundingAmount`), each mappable from a source field in the XSL editor (three new *Sum of charges*, *Amount already paid* and *Rounding amount* mappings) and emitted in the correct schema position. When a prepaid or rounding amount is present, the amount due (BT-115) is now computed as **total with VAT − prepaid + rounding** instead of simply the total with VAT; with neither mapped, the payable amount is unchanged.

- **Import-status polling now works with platforms that answer in XML.** An API connector endpoint gains a *Response type* setting: *JSON* (the default, unchanged) or *XML*. In XML mode the *Response field* and *Response mappings* are read as XPath expressions, so a platform that returns a UBL `ApplicationResponse` — with the status in `//cac:DocumentResponse/cac:Response/cbc:ResponseCode` — can be polled for status like any JSON platform. The common `cac` / `cbc` / `ext` prefixes are recognised; use `//*[local-name()='X']` for anything else. A companion *Status map* field on the endpoint translates the platform's own status words (e.g. `send_error`, `sent`, `processing`) to the internal *accepted / pending / rejected* outcomes, so the invoice is marked correctly instead of being optimistically treated as accepted when the returned status isn't understood. JSON platforms are untouched — leave both fields at their defaults.

### Fixes

- **Validation-error rule identifier no longer truncated.** The rule-id column on the validation-errors log (`F564236.UVY56RULE`) was 20 characters, but rule identifiers introduced with the current French CTC rule set (e.g. `BR-FR-CPRO-…`, `EXT-FR-FE-…`) can be longer and were cut off. Widened to 30 characters, in the baseline schema and via an upgrade migration (Oracle + PostgreSQL).
- **Newly added mappings now show in the XSL editor.** The editor's Buyer, Seller, Delivery, VAT and Lines sections rendered only a fixed list of fields, so a mapping added to the catalogue and to the template (e.g. the buyer trading name BT-45, or the charges / prepaid / rounding totals) was silently dropped from the panel — invisible even after an upgrade added it to the template. Each of those sections now also renders any remaining mapped field for its group, so a new mapping always appears.
- **Uploading a UBL file for direct validation now lands where the validator looks.** In *UBL (validate directly)* mode the template picker is hidden, but the upload still used the last-selected template, so the file was written to `input/<that-template>/` (or `input/` when none) while validation reads it back from `input/ubl/` — "No such file or directory". The upload now always targets the `ubl/` input directory in this mode.
- **PDF → XML with a manifest: reused JDE object IDs now resolve to the right column name.** JDE reuses an object id (the `_ID<n>` suffix) across unrelated fields — e.g. `_ID25` is a page-header label, a per-line flag *and* the order total. The converter matched manifest names by id alone and in document order, so the numeric total (`261.63`) and a text label (`Invoice`) both landed in the same `Total_Order_ID25` tag. Manifest names are now matched by id **and data type** (numeric / date / text): the numeric `Total_Order` binds to the numeric total value, a date binds to the date field, and a text label that merely shares the id falls back to its data-dictionary alias — exactly as without a manifest. Genuine multi-line fields still keep a single name. As a final safety net, if a manifest name would still produce two different values under the same tag in one section, the second falls back to its data-dictionary alias, so the output never carries a colliding tag.
- **`ubl-defaults.xsl` no longer grows without bound when legal notes are saved.** Each save of the legal-notes section re-indented the notes container by re-adding its own leading whitespace instead of replacing it — so the indentation *doubled* every save. After ~20 saves the file reached tens of megabytes (almost entirely whitespace) and could accumulate duplicate note templates. The notes are now rewritten in place with a clamped indent and duplicate templates are collapsed, so the file stays small — and an already-bloated file heals back to its normal size on the next save.
- **Company fields show again in the UBL Defaults editor.** After the recent change that lets an invoice with no company code inherit *all* seller fields (SIREN, SIRET, VAT, address…) from the default company — not only its name — the editor could no longer read those fields and displayed them blank (only the company name still appeared). The editor now reads and writes this form, so every company field is shown and saved correctly. Configurations still using the previous form are read too, and are migrated to the fallback form on the next save.

## 2026.07.05.1 — 2026-07-05 \{#v2026-07-05-1\}

### New features

- **Self-billed invoices assign the parties correctly.** For self-billed document types (389, 261, 471, 473, 500, 501, 502) the company running NomaUBL is the *buyer*, not the seller. You now map the parties as for a normal invoice (your company as supplier); when the type is self-billed the two parties are swapped at emit, so your company lands in the buyer role — complete with SIREN/VAT/SIRET/electronic address from the company registry — and the other party in the seller role, with the payment beneficiary set to the seller. Previously the seller inherited your company's address and identity for any un-mapped field, and the buyer was left without VAT/SIREN. Deployed templates pick up the change by re-running the upgrade.
- **Attach the generated PDF as a regular attachment (PJA), not only as a LISIBLE.** The Attachment setting gains a *generate* mode that renders the invoice PDF with the pdf-template designer and attaches it as a PJA (`cac:AdditionalDocumentReference`) instead of the readable LISIBLE copy. Use it when the designed PDF isn't a compliant French readable invoice: turn LISIBLE off and attach the PDF as a PJA instead. LISIBLE, `create` (RTF/BIPublisher) and `attach` (existing PDF from the input directory) are unchanged.
- **Preceding-invoice references, extended.** An invoice can reference several prior invoices (BG-3, 0..n) via a new *Preceding Invoices — repeating* mapping in the XSL editor (one `cac:BillingReference` per occurrence, with an optional issue date), and an invoice line can carry its own preceding-invoice reference (EXT-FR-FE-136) — both in the correct schema position.
- **VAT exemption reason mappable from the spool (BT-121 / BT-120), at document and line level.** The exemption reason code and text can now be mapped from a source field — per VAT breakdown and per line — instead of only a fixed per-category default, as required for exempt / reverse-charge / export / intra-EU invoices. A new *Source → VATEX exemption code* mapping in UBL Defaults also normalises a raw spool code to an allowed VATEX code (unmapped codes pass through, a blank falls back to the per-category default).
- **Line VAT category code (BT-151) mappable from the spool**, resolved through the same category mapping as the document BT-118 (previously only the line VAT rate BT-152 was settable). A line with no VAT of its own inherits the document VAT (line → document → default).
- **Readable PDF (LISIBLE) now carries all of the invoice's data.** Per the French rule that the readable copy must contain everything in the structured invoice, the PDF now renders many previously-missing fields — preceding-invoice reference(s) (BT-25/BT-26), invoice period (BT-73/BT-74), VAT point date (BT-7), project reference (BT-11), line preceding-invoice reference (EXT-FR-FE-136) and line VAT exemption reason (EXT-FR-FE-178/179), actual delivery date (BT-72), extra payment details (BT-83/BT-85/BT-89), prepaid (BT-113) and rounding (BT-114), foreign-currency VAT (BT-6/BT-111), and party electronic addresses and identifiers (BT-28/BT-29/BT-32/BT-34/BT-46/BT-49). Each is toggleable in the PDF template.

### Updates

- **French CTC validation rules updated to FNFE V1.4.0 (XP Z12-012, 30 June 2026).** The Flux 2 and EXTENDED-CTC-FR UBL schematrons and the EN 16931 code lists are refreshed to the 30 June 2026 publication; among other things it corrects the XPath for the line preceding-invoice reference (EXT-FR-FE-136) and adds `RECAPITULATIF_COTRAITANCE` to the accepted attachment types. The standard rules become mandatory on issuance from 1 September 2026.
- **The `UBL-CR-001` warning ("a UBL invoice should not include extensions") is no longer reported** — it fired on the `ext:UBLExtensions` custom fields NomaUBL emits by design. Filtered when validation results are collected; the standard schematron is left untouched, so an update won't reintroduce it.
- **E-reporting declarations now carry the VAT rate and exemption details.** Each VAT breakdown in the generated e-reporting file now includes the VAT rate (TT-57), the exemption reason (TT-58) and the exemption reason code (TT-59), grouped under the VAT category — they were previously missing.
- **Searchable dropdowns size to their content.** Dropdown lists (VAT exemption reasons, note types, document types and every other searchable picker) now widen to fit the longest option instead of being clipped to the field's width, capped to the screen edge so they never run off-screen.
- **Document reference type list completed (UNTDID 1153 / BT-128-1).** The document-reference code picker now offers the full UNTDID 1153 code list (818 codes) with French and English labels, instead of a small curated subset. Existing deployments pick up the new codes through the config upgrade.

### Fixes

- **AUTO document-type resolution now reads the mapping from UBL Defaults.** In AUTO mode the *source → document-type* mapping (e.g. `C` → `B2C`) set once in UBL Defaults was ignored: the resolver only scanned each document template's own XSL, not the shared `ubl-defaults.xsl` it imports, so the raw spool code passed through untranslated and the per-document-type behaviour (Schematron on/off, send-to-PA, processing mode) fell back to the default row. It now follows the `xsl:import` chain and reads the mapping wherever `resolve-document-type` is defined, so the document type resolves correctly with no per-template duplication.
- **Preceding-invoice reference no longer breaks the schema.** `cac:OrderReference` now correctly precedes `cac:BillingReference` (`InvoicePeriod → OrderReference → BillingReference`); previously, when both a purchase-order reference (BT-13) and a preceding-invoice reference (BT-25/BT-26) were present they were emitted in the wrong order and the UBL schema rejected it (`cvc-complex-type.2.4.a`). Deployed templates pick up the fix by re-running the upgrade.
- **Editing an invoice in the manual editor no longer drops data it can't display.** Any UBL element the editor has no field for — e.g. the preceding-invoice reference (BT-25/BT-26), line preceding-invoice reference (EXT-FR-FE-136), VAT accounting currency (BT-6), VAT point date (BT-7), rounding (BT-114) or payment mandate/RUM (BT-89) — is now preserved on save instead of being lost, re-inserted at the correct schema position.
- **Manual editor: VAT exemption reason is kept, and can be set per line.** A VAT breakdown carrying only an exemption reason text (BT-120) with no code (e.g. a multi-vendor routing token) was dropped when the invoice was opened in the manual editor — the field showed empty. It's now read back and preserved on save. The line editor also gained a VAT exemption field (code + reason, EXT-FR-FE-179/178), so exemption can be set per line, not only per VAT breakdown.
- **Manually-created / template-less invoices are now fully handled.** The e-invoicing settings editor gained a *Manual / template-less invoice defaults* section — activity (FEAA10, mandatory for the F564230 log row), type, LISIBLE on/off, PDF template (built-in or any custom one) and locale — applied when an invoice has no document template. Previously the mandatory activité had no source on the manual path so saving failed, and no readable PDF (LISIBLE) was produced.
- **VAT exemption reason: both the code and the full label are now stored.** The invoice-log tables kept a single, short exemption column, so an exempt / reverse-charge invoice (e.g. multi-vendor) whose reason text was long failed the write with *value too long*. The invoice lines and VAT summary now keep the exemption **code** (BT-121 / line EXT-FR-FE-179) and its **reason text** (BT-120 / line EXT-FR-FE-178) in two separate columns, so both are available for the readable PDF and the e-reporting declaration. The invoice detail's VAT summary and invoice lines now show the code with its full reason on a second line.
- **Path placeholders now resolve when uploading and processing a file.** Two issues: a UBL upload built the destination path in the browser and left `%APP_HOME%` / `%ENV%` literal; and the LISIBLE / attachment output path expanded `%PROCESS_HOME%` *after* `%APP_HOME%` / `%ENV%` (so the ones nested inside `%PROCESS_HOME%` came back unresolved) and never expanded `%FILE_NAME%`. Both wrote files to bogus `%APP_HOME%/…` folders. Uploads now go through the server endpoint, and the output-path resolver expands `%PROCESS_HOME%` (with its nested `%APP_HOME%` / `%ENV%`), `%TEMPLATE%` and `%FILE_NAME%` correctly.

## 2026.07.03.1 — 2026-07-03 \{#v2026-07-03-1\}

### New features

- **Embed a spool attachment in the invoice.** A document already carried as base64 in the source spool can now be attached to the UBL invoice by mapping it in the XSL editor. A new *Embedded Attachments* section maps the base64 field, a filename (literal or a `{Field}` / `{Group/Field}` placeholder, e.g. `{DocNumber}.pdf`), the MIME type, and a qualifier chosen from the platform's reference list (PJA, RIB, BON_LIVRAISON…) into a `cac:AdditionalDocumentReference` / `EmbeddedDocumentBinaryObject` (BT-125) — up to four per invoice. It lands in the correct schema position and sits alongside the existing attachments (external files, generated readable PDF), all kept together. Until now attachments could only come from files on disk or the generated PDF, not from a base64 field inside the spool.

## 2026.07.02.1 — 2026-07-02 \{#v2026-07-02-1\}

### Improvements

- **Constant values in field mappings.** A mapped value wrapped in backticks — e.g. `` `EDI` `` — is emitted as a fixed constant instead of being read from the source. It works for custom extension fields, notes and item properties, and is handy for platform-specific values that never change.

### Fixes

- **BIP jobs in both completed states are collected.** The scan and extract queries now match job status `D` and `FD` (previously `D` only).
- **BIP language filter corrected.** It was applied to the input-XML query using a column that only exists on the PDF output table, which broke input extraction; the filter now sits on the output query, where that column lives.
- **Scheduled BIP scan honours the lookback floor.** A web-triggered scan now applies the `bipLookbackDays` Global setting, like the command-line scan already did.
- **BIP submit-date window fixed.** The date floor now filters the real submit-date column as a window up to today, so jobs submitted today are included and out-of-window jobs (whose numbers can be higher) are excluded.
- **BIP post-generation no longer errors on the job key.** The job number was mis-read from the file base name, so the JDE cleanup step failed with a number-format error; it now runs.

## 2026.06.26.1 — 2026-06-26 \{#v2026-06-26-1\}

### Fixes

- **Custom extension fields validate with more than one field.** UBL's `ext:ExtensionContent` admits a single child element, so each configured field is emitted in its own `ext:UBLExtension`/`ext:ExtensionContent` block — as a plain unprefixed element in the document's own namespace (no `xmlns`), the structure certified platforms accept.

## 2026.06.25.4 — 2026-06-25 \{#v2026-06-25-4\}

### Improvements

- **Upgrade flags templates that need a manual fix.** When a customer-customized template (e.g. a forked `ubl:supplier-party` in `ubl-defaults.xsl`) is preserved during an upgrade but the framework has since added a parameter it doesn't declare, the upgrade report now lists it under "Manual fix required" with the exact `<xsl:param>` to add — instead of compiling fine and then failing at invoice generation with a cryptic `XTSE0680` error.
- **Compare a file with its upstream version.** In File Versions, a file the upgrade preserved now shows an *upstream* row — the shipped version saved as `<name>.upstream`. Compare your live file against it to see exactly what the new framework version changed and merge it by hand.

## 2026.06.25.3 — 2026-06-25 \{#v2026-06-25-3\}

### New features

- **Custom extension fields (UBLExtensions).** A new *Custom Extension Fields* section in the XSL editor maps up to eight source values into a UBL `ext:UBLExtensions` block on the invoice — for data a trading partner needs that has no standard EN 16931 home (routing method, delivery copy address, partner identifiers…). Each field has an element name, a source path or `{template}` value, and the same optional emit conditions as item properties. The block is written as the first element of the invoice, as the UBL schema requires, and is produced only when at least one field resolves. Empty by default, so existing invoices are unchanged. Data placed here sits outside the EN 16931 model — prefer the standard field when one exists (BT-19 accounting reference, BT-10 buyer reference), and confirm with the receiving platform that it reads the extension.

## 2026.06.25.2 — 2026-06-25 \{#v2026-06-25-2\}

### New features

- **Trim trailing zeros in the PDF.** A new *Trim zeros* switch in the PDF template builder drops trailing zero decimals from amounts, unit prices and quantities — a whole amount prints as `23` instead of `23.00`, and a `23.0000` unit price as `23`. Off by default, which keeps the fixed two-decimal amount and four-decimal price display. Set per template, it applies to the line table, the totals box and both the readable and on-screen PDFs.

## 2026.06.25.1 — 2026-06-25 \{#v2026-06-25-1\}

### New features

- **Country of origin on invoice lines (BT-159).** The invoice editor carries a country-of-origin field per line, next to the classification code. The ISO code is written to the UBL, while the invoice detail view and every PDF — preview, batch and notification — show the country's full name resolved from the shared countries list. A toggle in the PDF line layout controls whether it prints.
- **Classification scheme version on lines (BT-158-2).** A line can now record the version of its classification scheme alongside the list identifier; it appears in brackets after the list ID wherever the classification is shown.
- **Seller's item code in the PDF (BT-155).** The seller's article code now prints in the per-line detail, between the buyer reference and the standard identifier, with its own show/hide toggle.

### Improvements

- **Buyer SIREN recovered from the VAT number.** When a customer record carries no SIREN but does carry a French VAT identifier, the SIREN is derived from it so the buyer's legal identifier and electronic address are still populated.
- **Country of origin resolved from the shared reference list.** The source country value is now resolved against the canonical countries list when the invoice is produced, instead of a copy of the list being baked into each deployment. Correcting a label in the list takes effect everywhere with no re-save.
- **Cleaner addresses in the PDF.** Seller, customer, agent and delivery addresses are built line by line, so a party whose address starts on the second street line no longer prints a leading blank line. The delivery address also shows its additional street line.
- **Smoother framework upgrades.** Before importing new functions, the upgrade aligns each deployment's stylesheet header with the shipped language version and namespaces, so templates that rely on newly added framework features compile without manual edits.

### Fixes

- **No more empty address blocks on invoice lines.** A line that only carries a delivery date no longer emits an empty location or country element, and line addresses no longer fall back to a default country that doesn't belong there.
- **Delivery heading no longer repeats.** In the PDF, a line with no delivery group no longer clears the breadcrumb and makes the next line that does carry one re-print the delivery heading.
- **Multi-row notes rebuilt into a single paragraph.** A note split across several source rows can be collected back into one paragraph instead of producing a separate note per row.

## 2026.06.23.1 — 2026-06-23 \{#v2026-06-23-1\}

### New features

- **Country of origin and commodity classification on invoice lines (BT-158 / BT-159).** Two new fields in the Invoice Lines section of the XSL editor map the per-line source path. A *Country & Classification* tab in UBL Defaults sets the source format — ISO code, French description or English description — and the framework resolves the value against the canonical countries list at save time. No parallel mapping table to maintain: if a label is wrong, edit it once in the country list. Classification code, scheme listID and version defaults fall back when the per-line path is empty.
- **Allowance and charge reason defaults (BR-42 / BR-43).** New *Allowances / Charges* tab in UBL Defaults sets a fallback reason text and reason code per direction. ChargeIndicator picks the pair, so a single configuration covers both allowance and charge cases.
- **Line allowance derived from a percentage alone.** When the source carries only the percentage, the framework derives both amount and base from the line net amount. Mixed combinations are also covered: percentage + base derives the amount, percentage + amount derives the base. JDE's trailing-sign convention (`25.00-`) is normalised automatically.
- **Group-less line allowance mode.** When the allowance fields sit directly on the invoice line with no wrapper element, point the AC item TAG at `.` (or leave it empty) and the framework iterates the line itself.
- **Seller's item identification emitted (BT-155).** The TAG was declared but never reached the output. The framework now emits `cac:SellersItemIdentification/cbc:ID` between item name and country of origin, per the UBL 2.1 sequence.

### Improvements

- **Upgrade propagates new framework symbols into deployed templates.** Two new passes during upgrade close the migration gap that used to require hand-editing every customer template after every release. First, the deployment's defaults file gets any new variables, functions or templates the shipped reference adds — operator-configured values stay untouched. Second, each customer per-document template has legacy duplicates of those same names stripped from its override block so the imported (current) version wins under XSL precedence. Re-running the upgrade now fixes templates that previously failed to compile because the framework body started calling new symbols or new template parameters.
- **Multi-VAT footer wrapped per rate.** The PDF-to-XML converter now opens a fresh wrapper section for each VAT-rate footer, so an invoice with multiple rates produces one block per rate instead of a flat run of fields. Single-rate invoices still produce one block.

### Fixes

- **Invoice lines no longer dropped after page breaks (PDF-to-XML).** JDE emits the delivery preamble once per BL block; continuation pages stream more line rows without a fresh preamble. The converter used to release the delivery wrapper on every page-header flush, so continuation rows fell onto a flat parent the UBL XSL skipped. The wrapper is now carried across page breaks and only released by the totals or VAT footer.
- **PDF amounts with ambiguous separators (`1.682.28`).** When the same character serves as both thousands and decimal separator — or after the French comma-to-dot pass turns `1,682.28` into `1.682.28` — the value now collapses to `1682.28`. The last `.` is treated as the decimal, anything earlier is dropped.
- **Local Schematron rule BR-NOMAUBL-01 retired.** The credit-note preceding-invoice condition is now enforced by `BR-FR-CO-05` in the 2026-04-30 Flux2 v1.3.1 pack, so the local duplicate is gone. The file stays in place as scaffolding for future house rules.

## 2026.06.22.5 — 2026-06-22 \{#v2026-06-22-5\}

### New features

- **Single sign-on via OIDC.** *Auth Mode* on the Global template
  switches the login screen between `internal`, `oidc` (SSO only)
  and `both` (SSO button above the local form). The new *oidc*
  system template holds the IdP settings (issuer URL, client
  ID/secret, redirect URI, scopes, claim mapping, auto-provisioning
  with a default role) and is created automatically on fresh
  installs and upgrades — or in one click from the *+ Add OIDC*
  button in the Configuration Manager header. Sign-in is keyed by
  email: an *Allowed email domains* allow-list restricts SSO to one
  or more tenants, and a *Require Google Workspace domain* field
  enforces the `hd` claim so a personal Gmail can't slip in with
  the same address. Auto-provisioned accounts get a short JDE-style
  username derived from the email's local-part. Sessions minted
  through OIDC lock down the Profile modal — *Security* tab and
  identity fields are read-only since password rotation happens at
  the IdP. Roles, grants and row-filters stay managed in NomaUBL —
  the IdP only verifies identity.

## 2026.06.21.5 — 2026-06-21 \{#v2026-06-21-5\}

### Fixes

- **Daily invoice volume chart legible at every period.** Bars are
  now clamped between 3 and 36 px so 7-day periods stop rendering
  giant slabs and long periods stop rendering slivers; date labels
  are HTML, so they stay sharp at any period instead of squishing
  into illegible dashes when the SVG is stretched.

## 2026.06.21.4 — 2026-06-21 \{#v2026-06-21-4\}

### Fixes

- **View-only roles can read invoices again.** The detail modal
  uses the UBL XML endpoint to render Parties / Invoice Lines /
  TVA Recap / Notes; gating it by `invoice.download` was hiding
  every tab from any role that didn't have the download action.
  The endpoint is now read-open (still row-filter + visibility
  gated) and only the explicit *Download UBL* button stays gated
  by `invoice.download`.

## 2026.06.21.3 — 2026-06-21 \{#v2026-06-21-3\}

### New features

- **New `invoice.create` action permission.** The *New invoice*
  quick action on the dashboard is now gated by its own action
  grant — a role without `invoice.create` no longer sees the button
  and the underlying endpoint refuses the call.

### Fixes

- **Password-reset table now appears in Settings → db-nomaubl.**
  The Auth section gains an *Auth · Password resets* field
  (default `F564255`) so the Validate schema check stops reporting
  it as a missing table.

## 2026.06.21.2 — 2026-06-21 \{#v2026-06-21-2\}

### New features

- **Role-based dashboard card visibility.** Each dashboard widget
  is now an individual permission. Settings → Roles → Access has a
  *Dashboard cards* checklist below Allowed Pages — empty list shows
  every card (existing behaviour), populated list is a strict
  whitelist. Hidden cards are skipped server-side, so their SQL
  never runs and their data never reaches the wire.

- **Daily invoice volume — stacked bars by status.** The single
  line chart is replaced by a per-day stacked bar split into
  Approved / In flight / Errors-IT / Errors-Business. Hover any
  day for a per-bucket count tooltip.

### Fixes

- **Dashboard PA round-trip card no longer crashes for roles with
  a row-filter on a header column** (e.g. customer name). The
  card's lifecycle-only SQL now gates eligible rows through an
  `EXISTS` against the header table instead of splicing the
  row-filter clause into a query that didn't know about it.

## 2026.06.21.1 — 2026-06-21 \{#v2026-06-21-1\}

### New features

- **Self-service password reset.** *Forgot password?* link on the
  login screen opens a dialog asking for both username and email; if
  they match an active account, the user gets a one-shot link valid
  60 minutes that lands on a new page to choose a new password.
  Requires SMTP configured in the `global` template.

## 2026.06.21 — 2026-06-21 \{#v2026-06-21\}

### New features

- **Role-level row filters.** A role can now be restricted to a
  specific subset of invoices (and processing-log / integration-error
  / e-reporting rows) by picking a column and one or more values
  in **Settings → Roles → Data scope**. The typical use case is an
  external-customer role that should only see invoices issued to its
  own alpha key (UHALKY) — the row filter applies to the list views,
  the dashboard, every per-row endpoint (lifecycle, lines, XML
  download, PDF render, status push, delete, resend, email), and
  the generated PDF byte stream. Forbidden rows return the same
  "not found" shape the UI shows for genuinely missing data, so
  the response can't be used to probe for invoices a role shouldn't
  know exist. Multiple filters on the same column combine as OR;
  filters on different columns combine as AND, side-by-side with
  the existing Companies grant.

- **Granular action permissions.** The old all-or-nothing read-only
  flag is replaced by a per-action whitelist under **Settings →
  Roles → Actions**. Invoices, E-Reporting and Integration ops are
  grouped by view; each button can be allowed or blocked
  independently — edit, delete, resend, push status (with separate
  PA and DB sub-permissions for the Set Status modal's two tabs),
  validate UBL, download UBL, preset actions, custom actions, email
  PDF, generate / resend e-reporting batches, and trigger batch
  integration jobs (Fetch Received / Import Statuses / Retrieve
  Statuses). Existing roles keep their behaviour: a role with no
  whitelist set continues to allow every action, and turning the
  whitelist on pre-populates with everything so nothing changes
  until the operator explicitly removes a check.

- **Roles editor reorganised into purpose-built tabs.** The single
  Permissions panel now splits into **Access** (pages + features),
  **Actions** (the new whitelist), **Data scope** (companies + row
  filters) and **Members**. The role name and description sit above
  the tab bar so they stay visible from any tab, and Save / Cancel
  render on every editing tab.

- **API Reference is its own page grant.** The sidebar link to
  `/api/docs` no longer piggy-backs on the Status Reference grant,
  so a role can be given browser access to the app without exposing
  the raw API contract — useful when handing an external user a
  log-in that should not see the endpoint catalog. Fresh admin
  roles get the new `apireference` page automatically; existing
  admins pick it up on the next init.

### Fixes

- **"Uncheck all" in the role Actions tab now actually unchecks
  every action.** Previously the dual meaning of an empty action
  list (legacy "all allowed" vs. explicit "none allowed") meant
  clicking the button reverted the role to all-allowed and silently
  re-checked everything. The whitelist mode is now a dedicated
  toggle so the visible checkbox state always matches what gets
  saved.

### New features

- **`fetch-received-list` and `fetch-received` shipped in the
  default `pa-default` api-connector.** Fresh installs of the
  bundled connector now expose the two inbound endpoints
  alongside the existing six outbound ones, with sensible URL
  skeletons (`/api/v1/sale/received-invoices?since={{since}}`
  and `/api/v1/sale/received-invoices/{{uuid}}`). The actual
  paths still depend on each PA — the operator confirms the
  URL once and the resolver finds the endpoints by name
  immediately. **Existing installs** are not auto-migrated:
  `ConfigMerger` skips customer-owned api-connectors as a whole
  to preserve URL / auth edits, so operators upgrading need to
  add the two endpoint rows manually via the Endpoints "+ Add
  endpoint" button (copy the names + URL skeletons above).

- **Seller electronic address (BT-34) is now configurable.** Some
  customers route their invoices on a Peppol / e-invoicing
  identifier that is not their SIREN. The Supplier Companies
  panel in UBL Defaults gained a dedicated BT-34 field per
  company, and the XSL editor gained a `TAG_SUPPLIER_ENDPOINT`
  override for per-document mapping. Resolution order at
  emission time is: per-document TAG → UBL Defaults supplier
  endpoint → SIREN. Installs that don't set anything keep the
  current behaviour (SIREN is emitted as endpoint).

- **Per-document-type Schematron toggle.** The Document Types
  editor gained a Schematron checkbox alongside Send to PA /
  Keep UBL / Keep PDF. When off for a code, the EN 16931 /
  CTC-FR Schematron pass is skipped for invoices resolving to
  that type and no rows land in `F564236`. Shipped defaults
  enable validation for `B2B` and `B2G` (CTC-FR scope) and
  disable it for `B2BINT`, `B2C`, `OUTOFSCOPE`, `ARCHIVEONLY`,
  `DOCUMENT` (out of scope — French rules misfire on consumer
  transactions and foreign buyers). Customers can flip the flag
  per code as needed. Existing 7-field document-types rows fall
  back to the same per-code default so upgrades pick sensible
  values without manual migration.

- **UBL-source pipeline reads `document-types` for sendToPA +
  validate.** Invoices uploaded as UBL (Process Document UI,
  receive flow, fetch-received) now resolve their doc-type code
  from the doc-template's `processingType.default`, look it up
  in `document-types`, and let the row drive both the
  Schematron gate and the sendToPA fallback. Explicit caller
  overrides (UI / CLI `sendToPA=Y/N`) still win. One INFO line
  per call shows which row drove the decision, mirroring
  `AUTO_RESOLVE` in the XML pipeline.

## 2026.06.17 — 2026-06-17 \{#v2026-06-17\}

### Fixes

- **Notification PDFs now use the configured document template.**
  PDFs attached to outbound notifications and email
  notifications were always rendered with the bundled default
  layout, regardless of the per-document `pdfTemplate` configured
  on the doc-template (`vrc_pro`, `cdn_facture`, …). The
  notification dispatcher now resolves the template stored on the
  invoice and applies it to the attached PDF, matching how the
  Process Document UI renders it. Installs that never set a
  per-document template keep the existing rendering.

- **Line allowance amounts with a leading-dot input no longer
  fail BR-DEC-24.** JDE fields delivered as `.4700` (no integer
  part) were emitted into the UBL line allowance amount (BT-136)
  as `0.4700` — four decimals, fatal under the French e-invoicing
  Schematron rule BR-DEC-24 ("at most 2 decimals"). The amount
  normalisation function now applies the 2-decimal cap to
  leading-dot values: `.4700` becomes `0.47`. Same fix in the
  6-decimal price helper for consistency.

- **Processing Log grouped view shows every job in the loaded
  window.** Long-running batches (one START → thousands of
  intermediate events → one END) were rendering as a single
  "? → END" row when the START fell off the server slice. Three
  things were stacked against this view: the server silently
  capped responses at 500 events, the client sent only 5,000 even
  when more were available, and the grouper emitted one orphan
  row per intermediate event when no matching START was on the
  page. All three are fixed — server cap raised to 200,000,
  grouped-mode client request raised to 100,000, and dangling
  intermediates now collapse into a single per-job row carrying
  every step.

### New features

- **Server-side pagination on the Processing Log flat view.** The
  flat (non-grouped) Processing Log now paginates against the
  backend instead of capping at the loaded slice. Operators with
  long histories can walk through every event without re-running
  filters. Grouped view keeps its single-window load (capped at
  100,000 events) because jobs are stitched together client-side.

- **Pagination footer on the grouped Processing Log.** The
  grouped jobs list gained a sticky footer with page size
  selector (25 / 50 / 100 / 200), first / previous / next / last
  controls and current-position indicator. Page size persists
  across reloads.

### Improvements

- **Document-template lists are now sorted alphabetically.** Every
  place a list of document templates appears in the UI — the
  Documents editor sidebar, the template picker dropdown used by
  Process Document / UBL Validation / Extract from BIP, the
  Global editor's per-company override picker, the Fetch
  Documents editor's report rows, and the XSL editor's connector
  sample modal — now lists the templates in alphabetical order.
  Previously they followed the order they were saved in the
  config file, which became unscannable as templates were added.

- **Configuration diagnostics for AUTO mode.** Processing in AUTO
  mode now writes two INFO log lines per processed document
  showing the resolved processing type code, the mapping table
  used, and the resulting effective mode (UBL / BURST / SINGLE /
  BOTH). Makes it possible to diagnose "AUTO ran the wrong mode"
  cases from the Processing Log in one or two reads instead of
  guessing at what the customer's configuration produced.

## 2026.06.16 — 2026-06-16 \{#v2026-06-16\}

### Fixes

- **Actionable error when a BI Publisher RTF subtemplate is
  missing.** The PDF generation path used to log a raw
  `ERROR RUN PDF java.util.EmptyStackException` when XDO's RTF
  parser hit an unresolvable IMPORT — almost always a
  subtemplate file (`sb_*_header.rtf`, `_footer.rtf`,
  `_detailslivre.rtf`, `_lettre_sub.rtf`, …) missing from the
  customer's environment, or an OS-specific path-separator
  mismatch. The PDF path now catches the underlying runtime
  exception and prepends a one-line hint telling the operator
  to verify IMPORT paths in the main RTF and confirm every
  referenced subtemplate exists on the host. Applies to both
  the SINGLE-mode shortcut and the standard processing path.

### New features

- **Starter manifest generator for the PDF → XML adapter.** New
  CLI mode `-pdfManifest <input.pdf> <output.manifest.xml>` (also
  `nomaubl.sh pdf-manifest` / `nomaubl.cmd pdf-manifest`)
  analyses the PDF and emits a JDE-shape manifest XML, for the
  case where the customer has no native JDE XML sample of the
  same R-program to feed `-pdf2xml`. Inferred element names use
  the printed RC label text where available and the OWObject DD
  alias as fallback; the customer edits the file to give
  meaningful names, then reuses it as the 3rd argument of
  `-pdf2xml`. The root element is derived from the PDF filename
  (typical JDE spool convention) and multi-line text fields keep
  a single element name across all their lines via a sticky
  cache.

### Fixes

- **PDF → XML adapter now groups invoices in batch PDFs.** When a
  single JDE PDF carries N invoices (batch printing), the
  converter previously collapsed everything into one
  `<On_Payment_Terms_S3>` wrapper. It now closes the current
  wrapper and opens a new one when the next SI=3 page-header
  stream appears after a tax-summary section (SI=7), so each
  invoice in the batch is its own addressable XML block. SI=5
  per-page running totals no longer trigger a boundary, fixing
  the multi-page-invoice split. Verified on a 13,920-page PDF
  carrying 2,132 invoices: one wrapper per invoice, line items
  and totals all contained.

---

## 2026.06.15 — 2026-06-15 \{#v2026-06-15\}

A complete UBL field reference, and a way to feed JD Edwards PDF output into the pipeline.

### New features

- **UBL field reference completed.** The [XSL editor](./ubl-tools/xsl-editor.md) field reference gained 37 entries, covering every Business Group and Business Term that the extended Schematron (BR-FR / CTC-FR 1.3.1) checks and the editor can map — BG-3 through BG-32 and the Business Terms they wrap: preceding invoice reference + date (BT-25/26), VAT accounting currency and its total (BT-6 / BT-111), tax point date (BT-7), seller tax registration (BT-32), buyer and deliver-to country subdivisions (BT-54 / BT-79), buyer contact (BT-56), deliver-to location (BT-71), card primary account number (BT-87), invoiced-quantity unit code (BT-130), line charge base amount + reason code (BT-142/145), deliver-to address line 3 (BT-165), and more. The reference now matches exactly what the editor can produce and the validator can check.
- **JD Edwards PDF → XML adapter.** A new CLI mode — `nomaubl.sh pdf2xml <input.pdf> <output.xml> [<manifest.xml>]` — extracts a JD Edwards EnterpriseOne report PDF into the same XML shape JDE emits natively when XML output is enabled, so a site can keep JDE in PDF-output mode and still feed the existing XML → XSL → UBL pipeline unchanged. It needs the JDE INI flag that disables PDFlib stream compression so the OWObject metadata survives; an optional manifest (a JDE-native XML sample of the same report version) makes the output byte-identical to JDE's. See [Command Line](./management/command-line.md#pdf2xml).

---

## 2026.06.14 — 2026-06-14 \{#v2026-06-14\}

Customer-order grouping on invoice lines, a parent-axis in XSL paths, and a *Debug* setting for wiring new platforms.

### New features — invoice lines

- **Customer order grouping on lines (BT-132).** Lines now carry a third grouping band, below delivery and document reference, showing the referenced customer-order ID. It appears in the invoice preview and the default PDF template, and is configurable per template from the [PDF builder](./management/pdf-templates.md) (*Group by customer order*). The reset rules match the existing bands: a new delivery re-prints both inner breadcrumbs, a new document reference re-prints the customer-order band.
- **Customer order in the line editor.** The [invoice line](./application/invoices.md) builder now offers a *Customer order* quick-add next to *Note* and *Doc Ref*, with a single free-text input under the line *References* block.
- **Customer order field in the XSL editor.** The [XSL editor](./ubl-tools/xsl-editor.md) shows the new BT-132 mapping slot next to BT-131 in the line fields, so you can point it at the source path without hand-editing the template.

### XSL mapping

- **Parent-axis (`..`) in TAG paths.** The framework path resolver now understands `..` as a path segment, so a per-line field that sits as a sibling of the line element is reachable with `../FIELD` (or `../../FIELD/Sub`). This unblocks source XML that groups line items under a parent element alongside line-level references; paths without `..` are unaffected. See [XSL Editor](./ubl-tools/xsl-editor.md).

### API connectors

- **Debug setting on API connectors.** A new *Debug* choice (`Y` / `N`) on the [API connector](./configuration/api-connectors.md) *Connection* tab makes every API call print a single-line request + response trace — URL, HTTP status and a body preview — to the service log. Use it while wiring a new platform to check URL substitution, query parameters and the response shape without asking for a custom build; set it back to `N` once the connector is stable. It replaces the previous ad-hoc traces in *import-status* and *invoice-statuses*, covering every endpoint uniformly.

### Bug fixes

- **Line note position.** `cbc:Note` (BT-127) is now emitted before `cbc:InvoicedQuantity` to match the UBL 2.1 line sequence. It was dormant until a line note slot was filled, but tripped schema validation as soon as one was — now fixed for everyone.

---

## 2026.06.13 — 2026-06-13 \{#v2026-06-13\}

Full parity for the UBL-source pipeline — it now writes the tracking row, embeds the readable PDF and attachments, and resends through multipart platforms — plus a worked Esker configuration.

### New features

- **UBL-source pipeline writes F564230.** Direct UBL processing now inserts the same `tableLog` row the XML pipeline produces, with values read by UBL XPath (BT-47 buyer SIREN → FEALKY, BT-115 PayableAmount → FEAEXP, BT-2 IssueDate → FEIVD, BT-9 DueDate → FEARDU). Previously the row was skipped, so the PA send's `updatePATransactionId` update touched zero rows, FEUKIDSZ stayed empty and fetch-import had nothing to poll. Replace mode behaves like the XML path — the existing row is updated, not duplicated; non-replace mode skips with the usual *already processed* warning.
- **Activity / Type on UBL document templates.** The XML-source editor extracts `activite` / `typePiece` by XPath; the [Documents](./management/documents.md) editor now exposes **Activity** and **Type** as plain text inputs under a new *Document Identification* group at the top of the UBL branch. Both are mandatory — they feed the F564230 insert above.
- **PA resend reuses multipart endpoints.** A multipart body template needs a real file on disk. The initial send already hands over the input path; the resend used to provide only `{{content}}` (base64 from the database blob), which broke multipart platforms. The resend now writes the blob to a temporary file and exposes `{{filePath}}` and `{{docName}}` (sanitised as `<doc>_<dct>_<kco>`), so the same [connector](./configuration/api-connectors.md) configuration works for the initial send and the resend. Cleanup is automatic.
- **Esker (and similar) via an API connector.** A working `pa-default` setup for Esker is now documented: a first endpoint posts the UBL bytes as JSON (base64), a second endpoint — mapped to the *import-status* slot, since fetch-import calls it — triggers the actual processing with the file id returned by the first. The OAuth2 `client_credentials` token body is built automatically when the token content type is form-urlencoded and no explicit body is set. See [API Connectors](./configuration/api-connectors.md).
- **UBL-source pipeline supports LISIBLE + external PDF attachments.** The XML→UBL flow has always honoured a template's `lisible`, `attachment` and `additionalAttachments`; the UBL-source flow (`Source = UBL`) used to skip them. Parity now: after validation and before the database insert, the configured PDFs are embedded into the UBL file, which is re-parsed so the stored blob matches what is sent to the PA — `attachment=attach` embeds a sibling PDF from `dirInput` under `cbc:ID="PJA"`; `lisible=Y` renders the readable PDF straight from the parsed UBL and embeds it under `cbc:ID="LISIBLE"` (DocumentTypeCode 916); `additionalAttachments` loops the JSON array exactly like the XML flow. `attachment=create` stays unsupported here — it depends on BI Publisher rendering from a source XML, which UBL-source templates do not have; use `attach` or `lisible=Y`. See [Documents](./management/documents.md).

### Fixes

- **Import-status decision tree corrected.** The import-status client now tells *the HTTP call itself failed* (network error, HTTP 4xx/5xx, parse error) apart from *HTTP 2xx with no `status` field in the response* — the first counts as an error, the second flows the optimistic success branch, so platforms that don't speak the `success/pending/failed` vocabulary (Esker, IOPOLE, …) report correctly. Before this fix an HTTP 400 silently counted as a success in the run summary; the counts now match what actually happened. See [Import](./sync/import.md).

---

## 2026.06.12 — 2026-06-12 \{#v2026-06-12\}

A large PDF-builder release: a company logo, a per-template accent colour and date format, the full delivery address, a *Note (by code)* block, and custom block slots inside the Header, Parties and Totals sections. Plus a BT-132 purchase-order line reference, unit prices kept to 6 decimals end-to-end, and an upgrade that now preserves a customer-edited `ubl-defaults.xsl`.

### New features — PDF builder

- **Logo on PDF invoices.** A new *Show logo* toggle in the [PDF template builder](./management/pdf-templates.md), paired with a *Logo path* field in [Settings → Global → Processing → PDF](./configuration/system/global.md). When it's on, the image is drawn at the top of the supplier block on page 1, and the invoice-number / dates column keeps its place. The path accepts the usual tokens (`%APP_HOME%`, `%ENV%`, `%KCO%`, `{{kco}}`, …) so each company can point to its own logo; a *Logo offset X (pt)* setting shifts it horizontally to absorb whitespace baked into the source image. PNG, JPG and GIF are supported.
- **Accent colour per template.** A new *Accent* picker in the builder toolbar replaces the default blue on the section titles (CUSTOMER / DELIVERY), the highlighted total, the line-table header underline and the row-highlight background. Enter a 6-digit hex with or without `#`; the row-highlight tint is derived automatically. Empty keeps the default blue.
- **Date format per template.** A new *Date* dropdown in the builder toolbar — `yyyy-MM-dd` (default), `dd/MM/yyyy`, `dd-MM-yyyy`, `MM/dd/yyyy`, `dd MMM yyyy`, `dd MMMM yyyy`. It applies to the issue, due, period and per-line delivery dates.
- **Full delivery address in the PDF.** The DELIVERY box now shows the delivery party name (falling back to `ID: …` when only the location ID is set), the full street, postal code + city and country code — matching the customer box.
- **Note (by code) block.** A new *Note (by code)* choice in the custom-block picker. The inspector offers a dropdown sourced from the `note-types` reference list; the renderer finds the `cbc:Note` carrying the matching `#CODE#` marker and prints its body in place — so you can disable the global Notes section and drop each note exactly where it belongs.
- **Custom slots in the Header section.** The Header exposes two named slots — *Left footer* (under the supplier block) and *Right footer* (under Profile ID) — each accepting a full block tree edited in place, for a TVA intra-UE line or a payment-terms caption without inserting a standalone Block section.
- **Drilldown editing for block trees.** Block-typed fields (the top-level `block` section and the new Header slots) now show as a compact summary card with an *Edit* pill; clicking it hands the whole inspector to the block builder with a *← Back · Section · Slot* bar, and selecting another section exits automatically. The block-kind dropdown is now sorted alphabetically.
- **Custom slots in the Parties and Totals box sections.** The same slot pattern reaches the rest of the canvas — Parties gets *Customer footer* + *Delivery footer* (inside each party box), and the Totals box gets *Before totals* + *After totals*.

### UBL coverage

- **BT-132 — referenced purchase-order line.** A new `TAG_LINE_ORDER_LINE_REF` slot at the line level. When set, the framework emits `cac:InvoiceLine/cac:OrderLineReference/cbc:LineID` (group EXT-FR-FE-BG-09), placed between InvoicePeriod and DocumentReference per the UBL 2.1 sequence. Pick the source path in the [XSL Editor](./ubl-tools/xsl-editor.md) under *Line document references*.

### XSL mapping

- **Concat operator in TAG paths.** Any `TAG_*` select can now glue several source tags with a ` + ` operator — `'FirstName + LastName'` joins with a single space, `'First + ", " + Last'` sets a custom joiner; quoted literals are emitted as-is. No more XSL preprocessing step when a UBL field combines several source columns.
- **Conditional value list (`cond_value`).** The `cond_value` slot in `ubl:emit-item-prop` / `ubl:emit-note` now accepts a comma-separated whitelist — `'KWH,M3,LTR'` matches when the source value is any of the three (whitespace trimmed).

### Precision fixes

- **Unit prices kept to 6 decimals.** PriceAmount (BT-146), the line price discount (BT-147) and the gross price (BT-148) were silently truncated to 2 decimals everywhere — in the UBL, the PDF and the [Invoice Detail modal](./application/invoices.md) — even when the source carried 6. EN 16931 allows higher precision on `cac:Price` children than on monetary totals, so NomaUBL now keeps up to 6 decimals on those three fields end-to-end; monetary totals (BT-106/109/112/115) stay at 2. The Create / Edit Invoice unit-price input accepts fine precision too (`step=any`).

### Polish

- French line-table headers are now *Prix unitaire HT* and *Montant HT* (was *Prix unitaire* / *Montant*).
- **No more `**INVALID_TAX_RATE**` marker in the UBL.** The `ubl:tax-subtotal` framework template no longer writes a text marker into `cbc:Percent` when the line tax rate is missing or invalid — the element is omitted and Schematron flags it instead. Per-document XSLs that passed an explicit marker are cleaned up automatically on the next upgrade.

### Bug fixes

- **Upgrade preserves a customer-edited `ubl-defaults.xsl`.** The asset refresher used to overwrite every framework XSL, silently wiping any customisations in `ubl-defaults.xsl` (seller SIREN / VAT / address per company code, VAT category mappings, payment-code lookups, date format). It is now soft-refreshed: a fresh install gets the bundled defaults, an upgrade keeps the customer's file, and when the shipped version differs it is written alongside as `ubl-defaults.xsl.upstream` for manual review. The upgrade report lists every kept file under a new *Assets preserved* section; the `${env}/ubl/` mirror gets the same protection. See [Upgrade](./installation/upgrade.md).
- **Framework XSL also refreshed in `${env}/ubl/`.** The framework XSL files (`ubl-common.xsl`, `ubl-defaults.xsl`, `ubl-template.xsl`) are now refreshed in the per-environment `ubl/` directory too, not only in `xsl/`. Without this, an upgrade left per-document XSLs importing a stale framework copy, raising XSLT errors such as *"Parameter subentity is not declared in the called template"* after upgrading to 2026.06.10. If you already hit it, copy the three files from `${env}/xsl/` to `${env}/ubl/` and re-run the processing — or apply 2026.06.12 and re-run the upgrade.

---

## 2026.06.10 — 2026-06-10 \{#v2026-06-10\}

Filter operators that reach the database, two more SQL connector dialects, a token picker on attachment paths, and a few UBL and robustness fixes.

### New features

- **Microsoft SQL Server in the SQL connector.** A new entry in the connector *type* dropdown. Drop the `mssql-jdbc` jar in `lib/` and fill in the JDBC URL. See [SQL Connectors](./configuration/sql-connectors.md).
- **Custom JDBC connector.** A new *Custom JDBC* choice in the same dropdown — enter any driver class name (DB2, MariaDB, Snowflake, …); no new NomaUBL release is needed to add another database. See [SQL Connectors](./configuration/sql-connectors.md).
- **BIP lookback (days).** A new field in [Settings → Global → Batch Processing](./configuration/system/global.md) and on the [Fetch Input](./sync/fetch-input.md) page. It limits the BIP scan to jobs updated in the last N days (`0` = no floor) and is honoured by the manual scan, the scheduled batch and the `nomaubl -fetch-all` command.
- **Token picker on the Additional Attachments path.** A new `{ }` button next to the path field opens a searchable list and inserts the token at the cursor — the invoice catalogue tokens (`{{fedoc}}`, `{{kco}}`, …) and the path constants `%APP_HOME%`, `%ENV%`, `%PROCESS_HOME%`. See [Documents → Additional Attachments](./management/documents.md).

### Improvements

- **Advanced filter operators reach SQL.** *Not equals*, *less than / greater than*, *is empty*, *is not empty* and explicit *equals* now reach the server and produce the right WHERE clause on Invoices, Integration errors, Processing log and e-Reporting. See [List Views → Advanced Filters](./configuration/list-views.md#advanced-filters-panel).
- **Filter by UBL invoice number on the Invoices page.** The column was exposed but not flagged filterable; `?ublNumber=…` and the Advanced Filter row both narrow the list now. See [Invoices](./application/invoices.md).
- **BT-54 / BT-79 — buyer and delivery region in the UBL.** The framework emits `cbc:CountrySubentity` when the document XSL maps the new `TAG_CUSTOMER_REGION` and `TAG_DELIVERY_REGION` variables. See [UBL Header Defaults](./ubl-tools/ubl-defaults/ubl-header-defaults.md).
- **Long status messages no longer fail on Oracle.** Messages beyond 1024 characters are clamped to the column width before insert — no more `ORA-12899` on long Schematron or PA errors.

### Bug fixes

- **A stale browser tab no longer breaks after a deploy.** Missing asset paths now return a proper 404 instead of `index.html` served as `text/html`; a refresh recovers the page.

---

## 2026.06.03 — 2026-06-03 \{#v2026-06-03\}

A long-asked **bulk resend** for invoices stuck in *Send failed* — one card on the Tech Dashboard shows the count and a single button replays them all to the PA. A new **Nightly auto-retry** page in Settings schedules that same replay every night, so a batch that fails overnight is picked up automatically the next morning.

### New features

- **Send Failed card on the Tech Dashboard.** A new card shows the number of invoices currently in *Send failed* (status 9904) and exposes a one-click **Resend all N** action. Clicking it opens a progress window with live counters (processed / succeeded / failed); you can close that window and let the run finish in the background, or cancel it cleanly between two invoices. The resend is throttled at 100 ms per call so the PA stays happy. See [Tech Dashboard → Send Failed](./application/tech-dashboard.md#send-failed-row-2-span-4-20260603).
- **Nightly auto-retry in Settings.** A new [Configuration → System → Auto-Retry](./configuration/system/auto-retry.md) page lets you schedule a daily sweep of every invoice in a chosen status — by default 3 a.m., status 9904. Useful for the batch that runs overnight: anything stuck on the PA side is retried before the next morning. Multiple schedules are supported, each with its own hour, status list, optional lookback window and throttle.
- **Multi-status picker on auto-retry.** Pick one or several statuses from a dropdown limited to codes tagged *Error – tech* (9904, 9905, 9907, …). One schedule can sweep every tech-error bucket at once.
- **Background-job progress window.** Long-running operations now share a common progress UI — a bar, live counters, a *Cancel* button, and a *Run in background* button that hides the window while the work keeps going server-side. See [Tech Dashboard → Shared progress window](./application/tech-dashboard.md#shared-progress-window).

---

## 2026.06.02 — 2026-06-02 \{#v2026-06-02\}

A new **Daily error digest** that emails every integration error of the day to whoever needs it — with the full event list as an Excel attachment — plus a long-asked **Detailed view** on the Integration Errors page that groups every error per invoice and exports the lot in one click. The customer-upgrade tool gains a manual baseline override for installs that were hand-patched ahead of schedule, and the Windows / Linux launchers now expose a JVM-options hook for the master key location.

### New features

- **Daily error digest by email.** A new [Configuration → System → Daily Digest](./configuration/system/daily-digest.md) page lets you schedule a daily message that bundles every integration error over a sliding window (default: yesterday and today) and attaches an Excel file with the full event list — the same data the Detailed view exports. Multiple digests are supported: configure one per recipient subset, with its own send time, lookback window, and severity filter.
- **Per-column routing on the digest.** Each digest carries a list of equality filters (Company, Activity code, Source, Rule, Business unit, …) so different teams can receive different cuts of the same data. For example, one digest for activity = ISC sent to one address and another for VRAC to another.
- **Detailed view on Integration Errors.** A third tab next to *By event* and *By rule*. One row per invoice by default — the invoice's most recent event — with a chevron and a `+N` pill showing how many other events are hidden. Expand to reveal all the events for that invoice; collapse to keep the page tidy. Invoices are sorted by their most recent event so the freshest issue floats to the top, with all of that invoice's earlier events listed beneath it. See [Integration Errors → Detailed view](./application/integration-errors.md#detailed-view).
- **Period filter expands to whole invoices in the Detailed view.** When a filter like *Last 30 days* selects an invoice, the Detailed view brings back *all* of that invoice's events — including older ones outside the period — so the timeline for each invoice is complete in one place.
- **Export to Excel carries every row, even collapsed ones.** Clicking *Export* in the Detailed view drops a file that contains every event for every invoice in scope, regardless of which groups are expanded on screen.
- **Manual baseline for the customer-upgrade tool.** A new [`--from-version`](./management/command-line.md#upgrade) option on `nomaubl.sh upgrade` and `nomaubl.cmd upgrade` tells the tool exactly which release the customer is currently at, instead of guessing. Useful when an install was hand-patched ahead of the default baseline — only the migrations strictly newer than the supplied release will run.
- **JVM options hook in the launchers.** A `JAVA_OPTS` variable at the top of `nomaubl.sh` and `nomaubl.cmd` is forwarded to every Java invocation (start, process, upgrade, fetch-…). The most common use is pinning the master encryption key at a fixed path outside the user profile, e.g. `JAVA_OPTS="-Dnomaubl.master.key.file=/etc/nomaubl/master.key"`. See [Command Line → JAVA_OPTS](./management/command-line.md).

### Improvements

- **Word-wrap on the long Schematron message column.** The message column in the Detailed view now wraps so the full text is visible in the row, no truncation.
- **Wider Current status column reveals the full label.** Resizing the column on the Integration Errors page now shows more of the status message instead of capping the text at the previous fixed width.
- **Integration errors now group naturally by invoice.** Even in the *By event* tab, the order is invoice-first when relevant so the eye doesn't have to chase events of the same invoice across pages.

### Bug fixes

- **Saved digest settings are correctly displayed after save.** The form used to fall back to defaults after Save; values now refresh from the freshly-saved record.

---

## 2026.05.26 — 2026-05-26 \{#v2026-05-26\}

A real visual builder for the invoice PDF — palette on the left, live preview in the centre, inspector on the right — with the block tree editor integrated in place. Plus a round of fixes for Oracle and Windows installs.

### Improvements

- **Live preview is always visible while editing a template.** The old flow — open a modal, type document references, click Preview, wait — is gone. The preview now reflects every toggle and every block edit as you make them.

### New features

- **Visual builder for PDF templates.** A new **Open visual builder** button on the PDF Templates page opens a full-screen editor with three panes:
  - **Left** — the catalogue of available sections (Header, Customer + Delivery, Invoice line table, Payment, Notes, custom block, …) and the ordered list of sections in this template. Click to add, click to select, drag to reorder.
  - **Centre** — a live preview that re-renders against a bundled sample invoice (or your own loaded XML) on every change. Click any block in the preview and the inspector jumps to it.
  - **Right** — an inspector showing the selected block's options grouped by category (Supplier, Invoice block, Columns, …). For a custom block, the full tree editor — text, field, row / column, repeat, conditional — opens in the inspector with XPath autocomplete and font / colour / alignment per node.
- **Load a sample XML from inside the builder.** Drop a real invoice in from the top of the builder — both the live preview and the XPath picker switch to your data immediately, no need to leave the builder.
- **Save inside the builder, with an unsaved-changes warning.** Save persists from the builder; closing with unsaved changes shows a Discard / Cancel prompt so no work is lost by accident.

### Bug fixes

- **Login on Oracle now works.** Authentication on Oracle was silently rejecting every login — including the default `admin / admin` — because the username comparison didn't account for how Oracle stores the value. Login, password changes, role assignments and the user-self password change all work now.
- **Windows paths in the settings.** Saving a Windows path (e.g. `c:\nomaubl`) in the settings used to corrupt the value on save. Paths now round-trip cleanly.
- **`nomaubl.cmd start` returns to the prompt; the server stays alive when the console closes.** Stopping the server now terminates it cleanly without the previous 10-second wait.
- **Buyer address in the UBL XML emitted in the right order.** The buyer's postal address was placed after the VAT identifier, which strict schema validators reject. Order fixed.

---

## 2026.05.24 — 2026-05-20 \{#v2026-05-24\}

Period filtering now lets you pick which date the Invoices page looks at, and drill-down from the VAT declaration always lands on the right set of invoices.

### Improvements

- **VAT declaration period filters on the invoice's issue date.** The page now uses the date printed on the invoice itself, so the period is stable even if the data is rebuilt later.
- **Drill-down from VAT to Invoices now reconciles.** Clicking an amount on the VAT page opens Invoices with the same date basis pre-selected, so the count you see matches the count you came from.

### New features

- **Date basis toggle on the Invoices page.** A new selector next to the date range lets you choose what the period filter compares against:
  - **Update date** *(default)* — the last time the invoice was modified in NomaUBL. Matches the historical behaviour.
  - **Issue date** — the date printed on the invoice. Use this to align with the VAT declaration page.

  The toggle is remembered for the current session.

---

## 2026.05.23 — 2026-05-20 \{#v2026-05-23\}

The VAT declaration page is now built to handle very large volumes — it opens just as fast on a month with 200 000 invoices as on one with 2 000.

### Improvements

- **Much faster VAT declaration page.** Opening the page no longer re-processes every invoice from scratch on each load. Whatever the size of the period — a small month or a busy quarter — the page opens in a couple of seconds.
- **Clearer message when data is missing.** If the database doesn't yet hold the VAT details for the selected period, the page now shows the exact command line to run, with the dates already filled in, instead of displaying an empty matrix.

### New features

- **Choose what gets saved on each invoice.** The NomaUBL database settings now offer two independent switches: one for invoice line subtotals, one for VAT details. The VAT details switch is what the VAT declaration page needs to stay fast. Turn it on, and future invoices land with everything in place.
- **Rebuild VAT details for past periods.** A new command fills in the VAT details for an existing date window from the UBL document already kept for each invoice — useful right after turning the switch on, or any time a clean rebuild is needed:

  ```
  ./nomaubl.sh backfill-vat <env> <fromDate> <toDate>
  ```

  Safe to re-run on the same period without creating duplicates.

### How to upgrade an existing install

1. In **Settings → Connectors → db-nomaubl → Tables**, turn **Store VAT details** on. Save.
2. For each historical period you want to see on the VAT page, run the rebuild command once:

   ```
   ./nomaubl.sh backfill-vat prod 2026-04-01 2026-04-30
   ```
3. Reopen the VAT declaration page — everything is there.

### Compatibility

Existing installations keep their current behaviour after the upgrade. The new switches default to whatever was previously configured. No file edits required.

---

## 2026.05.22 — 2026-05-19 \{#v2026-05-22\}

Compare any two versions of a file side-by-side, directly in the browser — the same kind of view VS Code shows, useful when reviewing what a template or configuration file picked up over time.

### New features

- **Compare mode** on the File Versions page. Turn it on for any text file (XSL, XML, JSON, SQL, properties, …) and pick two versions in the history — the current file included — to open a full-screen comparison: older on the left, newer on the right, with the lines that changed highlighted, syntax colouring by file type, and synchronised scrolling.
- **One-click "compare with previous version".** A small icon on every row of the history lets you compare a single version against the one just before it in a single click — the common case when you only want to see what that snapshot introduced.

### How to use

Open the **File Versions** page, pick a text file in the tree, then either click the compare icon on a row to confront it with the previous version, or turn on **Compare** in the toolbar and pick two rows yourself. Close the comparison with **Escape** or the **Close** button to return to the history.

---

## 2026.05.21 — 2026-05-19 \{#v2026-05-21\}

CA3-style VAT declaration page. Aggregates every invoice for a period into the standard French VAT-form rows — sales / purchases × domestic / intra-EU / outside-EU × VAT rate × invoice type — with collapsible drill-down all the way down to the individual invoices behind each figure.

### What's new

- **VAT declaration** page (new sidebar entry, after E-Directory). Pick a month or a quarter, optionally filter by company. The page opens as a tight CA3 matrix; click a rate row to break it down by invoice type (B2B / B2C / B2BINT / B2G / unclassified), then click a type row to see the individual invoices behind it (document number, type, company, taxable base, VAT). Any amount also remains clickable to jump straight to the Invoices list pre-filtered to the same set.
- **Excel export.** One click produces a workbook with two sheets: a Summary mirroring the on-screen matrix with subtotals per country group and direction, and a Details sheet listing every invoice's contribution. Numeric cells are real numbers so totals and pivots work in Excel.
- **PDF export — CA3 form layout.** The PDF is now styled like the official Cerfa 3310-CA3: section A (operations realised — lines 01, 03, 04, 06, 7B), section B (TVA brute per rate with lines 08, 9B, 09, 10, 14 and total 16; TVA déductible with line 20 and total 23), and a Solde block with line 28 (TVA à payer) or 32 (crédit). One-page printable synthesis you can hand to accounting.
- **Counterparty country on every invoice.** New column captured at insert from the UBL XML — buyer country on sales, supplier country on purchases. Drives the intra-EU / outside-EU classification on the VAT page. The Invoices list also accepts a country filter (passed automatically by the VAT drill-down).
- **Period filter on booking date.** The VAT page reads the same date column as the Invoices list, so an invoice posted in May for an April issue date is declared in May — matching the standard rule for late-booked invoices, and keeping drill-down counts consistent with what you see on the Invoices page.

### How to use

Default opens on the previous full month — what you'd file. Switch the period selector to *Quarter* if you declare quarterly. The matrix opens collapsed; click the chevrons to expand. When a bucket holds more than 200 invoices the inline view caps there — use the Excel export to get the full list.

### Note on existing data

Invoices created before this release have no country on file and show up as *Domestic* by default until they're re-processed. Any new invoice from now on lands with the right country.

---

## 2026.05.20 — 2026-05-19 \{#v2026-05-20\}

One command to move any installation forward to the current release. No more manual schema ALTERs, no risk of losing customer config or XSL customisations between versions.

### What's new

- **`./nomaubl.sh upgrade <env>`** — one command that stops the service, snapshots the env (config + template + ubl + jar — last 5 kept), brings the database schema forward, merges in any new reference data, refreshes the framework XSL and validation rules, rewrites each per-document XSL to pick up new TAG entries and framework updates, writes a full report, and restarts the service.
- **Customer mappings always preserved.** When a per-document XSL is rewritten, the `TAG_*` values you set and the `NOMAUBL_OVERRIDES_START`…`END` block at the bottom of the file are kept verbatim. New TAGs from the latest reference template are added with their default so you can fill them in. TAGs removed from the reference are kept on your side, flagged with a comment so they don't go unnoticed.
- **Customer config always preserved.** New system resources and new reference-list entries (status codes, document-types, etc.) are added; anything already on your side stays as you set it.
- **Settings → Upgrade History.** New page listing every install, upgrade and migration that ran on this environment, with the full report on the right when you click a row.

### How to upgrade

Drop the new `nomaubl.jar` in place, then:

```
./nomaubl.sh upgrade prod
```

Done. The report is saved under `${appHome}/upgrade-reports/`.

### What this release ships under the hood

Every installation currently running NomaUBL is at **2026.05.16** — the upgrade tool recognises this automatically the first time it runs and applies the schema deltas that landed in 2026.05.17, 2026.05.18 and 2026.05.19 (new `UHDRIN` direction column, e-Reporting envelope-table column rename) in one pass.

### Better diagnostics when something goes wrong

- The upgrade report header now shows the resolved env directory and the JDBC URL, so wrong-host or wrong-path mistakes are visible at a glance.
- Failures unwrap the full cause chain — a vague "connection attempt failed" now tells you whether it's `NoRouteToHost`, `Connection refused`, an authentication issue, etc.
- Startup logs the path of the master key file used to decrypt sensitive config values. When the license page reports "restricted" because the key file changed, the error now points directly at the master key resolution instead of saying "Invalid license key format".

---

## 2026.05.19 — 2026-05-19 \{#v2026-05-19\}

E-Reporting (Flux 10) rewritten against the DGFiP spec: one envelope per (company, period, direction) instead of one file per sub-flux, and direction is now persisted on every invoice so it can never drift if a template is re-classified later.

### What's new

- **Direction persisted on every invoice** — new `UHDRIN` column on F564231 (`'1'` = received from supplier, `'2'` = issued by operator). Set once at insert from the source document template, then frozen. Changing a template's *Direction* in Settings afterwards no longer re-classifies historical rows, the Invoices list filter, notification rules, or e-Reporting envelopes. The list filter and detail-modal gating now read this flag directly.
- **E-Reporting Flux 10 — one envelope, both sub-blocks**. 10.1 (B2B-international detailed) and 10.3 (B2C aggregated) now live as parallel children of the same `<TransactionsReport>` per DGFiP rule G6.29 — instead of two separate files. At most two XML files per (company, period): one outbound (Issuer `RoleCode=SE`) and one inbound (Issuer `RoleCode=BY`).
- **Credit-note sign in 10.3 aggregates** — credit notes (UNTDID 1001 codes `261, 381, 396, 502, 503` per G1.01) now subtract from the period aggregate instead of adding to it. G1.14 explicitly allows negative amounts on TT-82 / TT-83 / TT-87 / TT-88, so a period dominated by credits comes through with the correct net figure.
- **E-Reporting tables renamed for consistency**: `RGY56BAR` → `RGDRIN`, `RHY56BAR` → `RHDRIN`, `RIY56BAR` → `RIDRIN` (with matching indexes). All three e-Reporting tables now use the same `DRIN` naming as F564231.

### Migration note

E-Reporting only goes live in September 2026, so no production deployments are running it yet — the schema is changed without a back-compat shim. Drop and re-create the three e-Reporting tables (F564260 / F564261 / F564262) before the next run. Existing F564231 rows pick up `UHDRIN = '2'` (outbound) via the column default.

---

## 2026.05.18 — 2026-05-18 \{#v2026-05-18\}

Direction-aware notifications and custom actions — operators can wire separate dispatch flows for the invoices they emit and the ones they receive without mixing them. Plus a fix for the Invoices list direction filter.

### What's new

- **Notification rules gain a Direction trigger**: *Any (default)*, *Issued only (sales)* or *Received only (purchases)*. Rules with a direction set never fire for invoices of the opposite direction, so the same status code (e.g. *Disputed*) can call one API for sales rejections and a different API for purchase rejections without any conditional logic in the rule body.
- **Custom invoice actions** (the operator-defined buttons in the invoice detail modal) gain the same Direction field. Empty = visible on both sides (legacy default). When set, the button is hidden on invoices of the other direction, so an emit-side *Sync to CRM* and a receive-side *Mark as paid* can live on the same template and the modal only surfaces what makes sense for the current invoice.

### Fixes

- Invoices list — the *Direction* filter chip now applies even when the stored list view spec is older than this release. The filter is resolved against the document-template direction map at query time, independent of what's in the stored spec.

---

## 2026.05.17 — 2026-05-18 \{#v2026-05-17\}

Supplier-received invoices land alongside the customer-issued ones — same Invoices list, same status workflow, same detail modal.

### What's new

- **Pull received invoices from the PA**: new CLI mode `-fetch-received`, new REST endpoint `POST /api/fetch-received/run`, and a "PA inbound (supplier invoices)" mode on the Fetch Input page. The handler walks two new api-connector tasks (`fetch-received-list`, `fetch-received`), deduplicates by PA UUID, and feeds each downloaded UBL into the existing UBL processing path. Can also run on a schedule — new `fetchReceivedInterval` global property (minutes between sweeps, 0 = disabled).
- **Document templates gain a Direction property** — *Issued* (default, back-compat) or *Received*. Drives a new filter chip on the Invoices list (All / Issued / Received), and gates the emit-only action buttons (Resend to PA, Send completed, Credit note, etc.) which are hidden on received-direction invoices.
- **Document number lookup connector**: a received UBL's `cbc:ID` is the *supplier's* invoice number, not ours. A new "Document number lookup" group on the document template (visible when source = UBL) lets you wire a SQL query or REST endpoint that returns our internal `(doc, dct, kco)` from supplier-side fields (`{ublNumber}`, `{supplierName}`, `{supplierVat}`, etc.). When configured, it replaces the regex-on-cbc:ID path; otherwise the legacy `idPattern` continues to work unchanged.
- **Counterparty name** stored in the row (used by list / search) is now read from `AccountingSupplierParty` for received-direction rows, so the column shows the supplier instead of the operator's own name.
- New bundled `received-ubl` document template — pre-wired with `source=UBL`, `direction=R`, `dctDefault=RI`. Edit the lookup connector in Settings → Document Templates and you're good.

### No schema change

- F564231 is unchanged. Direction is resolved at read time from the template name already stored on the row (`UHTMPL`), so existing rows keep working without any migration.

---

## 2026.05.16 — 2026-05-14 \{#v2026-05-16\}

Generate UBL invoices directly from a SQL query or a REST API — no JDE spool needed. Debug profiling is now ON everywhere by default. Plus a long-standing display bug in the processing log is fixed.

### Invoices from a SQL or REST source

- Document templates have a new **Connector** source (in addition to XML and UBL). Pick a SQL or API connector for the header, optionally another for the line items, and the existing XSLT pipeline takes over to produce the UBL.
- Two modes: **single-call** (one query/endpoint returns header + the nested line array) or **two-call** (header first, then lines — line parameters can reuse header values).
- In the XSL Editor, a new **Load connector sample** button fetches a real sample so you can map XPaths against actual data, just like with an XML spool.
- The Process Document page replaces the file picker with a parameter form when the template uses a connector. From the CLI, pass `--param key=value` (repeatable) instead of a file path.

### Debug timings enabled by default

- Per-step timings (parse, validation, DB insert, send to PA…) are now logged by default in every run, in both the UI and the CLI. The overhead is negligible and these timings are the fastest way to diagnose a slow run.
- Use the new `--no-debug` flag (or untick the toggle in the UI) to skip them on heavy nightly batches.

### Bug fix

- **Processing Log**: when several steps of a single job shared the same second, the page was splitting them into multiple rows tagged PARTIAL. Events now stay grouped under their original job.

---

## 2026.05.15 — 2026-05-14 \{#v2026-05-15\}

Wire downstream systems without writing code: invoices get custom action buttons, and reference lists can refresh themselves from a SQL query or REST API.

### New: custom action buttons on invoices

- Add your own buttons in the invoice detail panel (next to the built-in seller actions). Each button can trigger a chain of connector calls — perfect for updating a customer file, pushing to a downstream ERP, posting to a webhook, etc.
- Configured in Settings → Actions, with the same editor used for the built-in actions: connector, endpoint, parameters, optional "stop on failure".

### Reference lists: sync from a connector

- A custom list (Settings → Reference Lists) can now be refreshed from a SQL query or REST API. Pick the connector, the endpoint, map which field is the code and which are the labels — click **Sync now** and the list rebuilds itself.
- Parameters are saved per list, so the same query can feed several lists with different inputs.

### Improvements

- All action parameters now support a `{}` picker that lists every available variable (invoice columns, response fields from previous calls). Both `{field}` and `{{field}}` syntaxes work.
- SQL connector parameters: typing `'01'` (with quotes) used to silently return 0 rows. The quotes are now stripped automatically.

### Bug fixes

- **Custom list editor**: the saved endpoint was sometimes missing from the dropdown when re-opening the editor. Fixed.

---

## 2026.05.14 — 2026-05-14 \{#v2026-05-14\}

Notification rules and actions can now use **any invoice column** as a variable — not just the original ten. A new `{}` picker makes them easy to discover and insert.

### What's new

- The notification editor's Subject, Body and action parameters all get a `{}` button. Click it to browse a searchable list of every available variable (10 standard notification fields + every column from the Invoices view: customer name, contract reference, total, currency, business unit, PA UUID…).
- Pick a variable and it's inserted at the cursor — no more typing placeholder names by hand or guessing what's available.
- Same picker is reused in custom actions, so any column that drives a notification can also drive a downstream API call.

---

## 2026.05.13 — 2026-05-14 \{#v2026-05-13\}

Multi-select filters on reference-list columns (statuses, e-Reporting statuses, custom lists, etc.), with one-click reset. Picking three statuses in Advanced Filters → Run now actually returns the union.

### What's new

- Reference-list filters (column filter row and Advanced Filters panel) let you pick **any number of values** instead of just one.
- A **✕** button next to the filter clears all picks in one click.
- The server now narrows results properly with `IN (...)` so picking three statuses returns rows matching any of them (used to silently fall back to the first).

### Improvements

- Picking the **between** operator on a date / number / text column filter now widens the column automatically so both operand inputs fit side by side. Going back to a single-value operator restores the original width.

---

## 2026.05.12 — 2026-05-14 \{#v2026-05-12\}

List views (Invoices, Integration Errors, Processing Log, E-Reporting) are much snappier. Each Run loads up to 5000 rows once, then filter / sort / pagination happen instantly in the browser — no more delay when typing in a column filter or flipping pages.

### What's new

- Filters and pagination on the four main lists are now instant. The page only goes back to the server when you change the date range, apply Advanced Filters, or change sort.
- When more than 5000 rows match, the toolbar shows **X / Y rows** next to Run and tells you to narrow the filters. The cap is configurable per view in Settings → List Views.
- Column filters on reference-list columns get a searchable dropdown populated from the loaded reference list (codes + labels), instead of a plain text input. Numeric codes and Oracle-padded values now match correctly.

---

## 2026.05.11 — 2026-05-13 \{#v2026-05-11\}

UI consistency. Every dropdown across the application now uses the same searchable picker — same look, same keyboard navigation, and an inline search box for long lists (countries, currencies, payment means, VAT categories, statuses, etc.).

### Improvements

- Filters, settings editors, modals, the XSL Editor, the UBL Defaults tabs — all dropdowns now look and behave the same way. Type to filter, navigate with the keyboard, close with Escape.
- Pagination size selectors use the same component for consistency.

### Bug fix

- **Status dropdowns**: the picker was showing the internal tag (e.g. `IN_PROGRESS`) instead of the French/English label. Fixed — status pickers now show the human label.

---

## 2026.05.10 — 2026-05-13 \{#v2026-05-10\}

Big release on customisation: the four main list pages (Invoices, Integration Errors, Processing Log, E-Reporting) can now be tailored to your needs — pick which columns to show, their labels, their formats, their filters — without writing code.

### What's new

- New **Settings → List Views** editor: one card per list page with drag-and-drop column reorder, English + French labels, format (date, datetime, amount, percent), alignment, width, visibility and filter toggles.
- Click **+ Add column** to pick from a catalog of every column the page can show. For the Invoices page, that now includes 16 additional fields from the invoice archive: source file, business unit, JDE user/job, due date, PA UUID, etc.
- New **Advanced Filters** panel on each page: pick a column, pick an operator (contains, equals, between, empty…), and click Run. Operators are fully translated.

### Bug fixes

- **Dashboard drill-throughs**: clicking "Recent errors" on the Tech Dashboard, or a status card on the Business Dashboard, was sometimes landing on the target page without the filter applied. Fixed — the filter is now always passed through, with a visible chip showing what's active and a ✕ to clear it in one click.
- **Invoice modal**: editing a non-French invoice was silently resetting its `CustomizationID` to the default EN16931 value. The original value is now preserved.
- **Status filter overflow**: the Invoices status filter chip list used to overflow when many codes were active. Caps at 5 inline chips now, with a "+N more" dropdown for the rest.

---

## 2026.05.9 — 2026-05-12 \{#v2026-05-9\}

Major release on the validation pipeline and on receiving status updates from the PA. Plus a cleaner Integration Errors page and several quality-of-life improvements.

### What's new

- **Inbound webhooks**: PAs can now push status updates to NomaUBL in real time instead of waiting for the next poll. Each api-connector template gets a new **Webhooks** tab: enter a shared secret, paste the resulting URL into the PA's webhook settings, and status changes apply automatically. HMAC signature checked, duplicate events deduplicated.
- **NomaUBL house rules**: a new Schematron pack catches errors that the PA would reject anyway — starting with credit-note codes (261/381/396/502/503) that require a reference to the original invoice. Failures now appear locally in Integration Errors before the round-trip.
- **Integration Errors page**: the unreadable Message column is gone. Click a row to open a clean detail view that separates the French explanation from the technical debug context. The previous detail modal worked only for matched invoices; unmatched / orphan errors now have their own modal too.
- **Per-document date format**: new dropdown in the document template's Document tab to pick the date format used in the source XML (`yyyy-MM-dd`, `dd/MM/yyyy`, etc.). Used to be hardcoded to ISO, which silently failed on documents with European date formats.

### Improvements

- The Schematron validation pipeline is faster on cold start: rules are precompiled at build time instead of at JVM startup.
- API connectors now support `multipart/form-data` endpoints (some PAs require it for the import call) and OAuth2 token requests can carry custom headers.
- The Directory check (PPF) now runs at validation time, not just at send time, so an unknown counterparty surfaces in Integration Errors before the document is even queued.
- New **Debug profile** toggle in global settings logs per-step timings (parse, validation, UBL emit, PA send) to F564237 — useful for diagnosing slow batches.
- The Invoice list shows a review flag column for rows marked for retrospective review.
- Integration Errors gets a Date column so you can see the time context without opening a row.

### Bug fixes

- **Validation profile**: the BR-FR-Flux 2 rule pack was being skipped on Extended-CTC-FR invoices. It now runs on every profile, as required by AFNOR XP Z12-012.
- **Status messages**: PA error messages with accented French characters (`é` showed as `é`) and embedded newlines now display correctly in the invoice lifecycle.

---

## 2026.05.8 — 2026-05-09 \{#v2026-05-8\}

PA configuration is now consistent across **e-invoicing**, **e-directory** and **e-reporting** — each one points at a reusable API connector instead of carrying its own credentials and endpoints. E-Reporting can submit over SFTP as well as REST, and the three system templates have a consistent tabbed layout.

### What's new

- **E-Reporting decoupled from E-Invoicing**: it now has its own connector, its own endpoint, and its own send mode — so reporting can target a different platform than invoice submission. Reports can be sent over SFTP as well as REST.
- **OAuth2 token requests** can now use form-encoded bodies (`grant_type=client_credentials`) and carry custom headers (for PAs that require a tenant ID on the auth call itself).
- **System template editors** (E-Invoicing, E-Directory, E-Reporting) reorganised into consistent multi-tab layouts. The Send Mode toggle moved to the SFTP tab where it belongs.

### Removals

- The **PA mock mode** (and its dedicated tab) is gone. Use an API connector pointing at a Postman mock or local stub for offline testing.
- The **Background Scheduling** group on the E-Invoicing tab was silently writing to the wrong template — removed, with a pointer to the right place (`global` → Scheduling).

---

## 2026.05.7 — 2026-05-09 \{#v2026-05-7\}

Major release on connectors and notifications. SQL connectors join API connectors as a first-class building block, and both can now power multi-step action chains from notification rules and from the invoice detail modal.

### What's new

- **SQL connectors**: a new template type lets you define named SQL queries with parameters, the same way API connectors define HTTP endpoints. Statements are restricted (no DROP / TRUNCATE / ALTER) and write statements require an explicit "writable" flag per query.
- **Multi-step actions**: action bindings (the buttons in the invoice modal) and notification rules can now chain several connector calls. Each call can reuse outputs from previous ones via `{call.N.fieldName}` placeholders. Mark a call **Stop on failure** to halt the chain.
- **Notification rule editor** reorganised into 6 tabs (General, Trigger, Channels, Email, Actions, Test) — much easier to navigate.
- **Notification audit trail**: each notification shows what actions fired as colour-coded chips (OK / FAIL / STOP / SKIP). The bell preview summarises in one line ("2 action(s) ran" or "1 of 2 failed").

### Bug fixes

- **Notification actions never fired**. Multiple causes, all fixed: the dispatcher was blocked when no email recipient was set, and a hung SMTP connection close was silently suppressing every action.
- **Stale entries in editors**: deleting a call/endpoint/query and saving used to leave ghost data that came back on next load. Saves now fully replace the template's contents.
- **"Add mapping" button** on API connectors didn't work — clicking it instantly removed the row again. Fixed.

### Other

- Configuration check rewritten against the current connector schema (was still validating property names that haven't existed for months).
- Live process events on the Tech Dashboard now read from the runtime processing log instead of validation errors, and stay bounded to today.
- Filesystem widget groups paths by partition so the same disk usage bar doesn't repeat for every directory on the same mount.

---

## 2026.05.6 — 2026-05-09 \{#v2026-05-6\}

New **Tech Dashboard** for the IT team — separate from the business dashboard, with everything you need to monitor the platform at a glance: JVM health, database connectivity, disk usage, throughput, errors, scheduler, etc.

### What's new

- New **Documentation → Tech Dashboard** page with 14 widgets: System Health, DB ping, build info, Filesystem (free/total per partition), Throughput, Error Trend, Retry Rate, Template processing time, Active Sessions, Live Log Tail, Configuration Check, Database Tables, Recent Errors, Scheduler.
- **Active sessions** card now works even when authentication is disabled — falls back to an in-memory per-IP tracker so the IT team can see who is using the app.

### Improvements

- Business Dashboard rebalanced for a cleaner visual layout — panels in the same row now line up at the same height.
- Configuration check rewritten — it was showing 8 false errors on perfectly valid configurations because it validated property names that haven't existed for months.

---

## 2026.05.5 — 2026-05-08 \{#v2026-05-5\}

Internal architecture pass to make NomaUBL more flexible on customer installations: column names and table names are now fully configurable, role permissions become row-based (easier to extend), and several long-standing Oracle quirks are fixed.

### What's new

- **Status-code groups**: statuses can be grouped (inflight, terminal, error, etc.) and stages (created, sent, pending, approved, rejected). Dashboard widgets now read from this single source instead of hardcoded code lists, so adding a new PA status code is a one-line change in configuration.
- **Role permissions** rewritten as one-row-per-grant instead of comma-separated lists. The Roles editor in Settings is redesigned with per-feature checkboxes, friendlier company management, and a searchable list of allowed pages.
- All column and table names are now configurable per customer install via the **db-nomaubl-columns** and **db-nomaubl** templates — no more silent drift if a customer renames a JDE column.

### Bug fixes

- **Notification bell empty on Oracle**: on JDE installs where status / kco / etc. are stored as fixed-width CHAR columns, Oracle's blank-padding rules silently broke equality matches with JDBC string binds. Notifications and many other queries weren't returning rows. Fixed across the whole backend (47 sites).
- **Database initialisation**: SQL comments containing semicolons were being cut in half by the statement splitter, producing "Unterminated string literal" errors on first init.
- **Processing Log row ordering**: two events from the same job sharing the same second sometimes flipped order between refreshes. Now uses an explicit row-ID tiebreaker so the order is stable.

### Other

- The Invoice detail modal's Validation Errors panel now lays each error on two lines (header on top, message below) so long rule text stops competing for horizontal space.

---

## 2026.05.4 — 2026-05-07 \{#v2026-05-4\}

Dashboard rebuilt with a clearer layout, and the Integration Errors page becomes a proper failure-analysis tool — rule codes now come with a human description, extracted from the Schematron files themselves.

### What's new

- **Dashboard**: 12-column widget grid replaces the previous stacked layout. Hero cards (Total / In flight / Rejected — IT / Rejected — Business), pipeline funnel, volume chart, recent activity, top failing rules, per-company breakdown, e-Reporting coverage and round-trip health all line up cleanly.
- Hero cards click through to a properly filtered Invoices list (previously the filter was being dropped).
- **Top failing rules** widget gets a category toggle (All / UBL / Integration) and ranked rows instead of proportional bars — counts of 160 vs 10 are now visually distinguishable.
- **Integration Errors page**: new view toggle between **by event** (flat table) and **by rule** (cards grouped by rule, with invoice count and per-severity chips). Category filter to separate UBL validation errors from lifecycle / integration errors.
- **Rule descriptions everywhere**: rule codes like `BR-CL-23` or `BR-FR-23` now show their human description as a tooltip and as a secondary line, both on the dashboard and on Integration Errors.
- **Light mode** is now the default for first-time visitors. Anyone who explicitly selected dark mode keeps it.

### Bug fixes

- **Dashboard panels empty on Oracle**: two queries used `column <> ''` to guard against empty rows, but on Oracle empty strings are stored as NULL and `NULL <> ''` is treated as false — the WHERE clause collapsed and both queries returned zero rows. Fixed.

---

## 2026.05.3 — 2026-05-06 \{#v2026-05-3\}

Notifications: invoice status changes can now reach users through a portal inbox, by email (with the rendered invoice PDF attached by default), and through API calls — all governed by rules you define in the UI.

### What's new

- **Notifications page** (under Management) — portal inbox with an All / Unread filter, mark-all-read, per-row dismiss, colour-coded status badges. Click a row to open the linked invoice.
- **Bell icon** in the top bar with an unread badge and a quick dropdown of the last 6 notifications. Polls every 30 seconds.
- **Notification Rules editor**: define a rule by status code, choose the channels (portal, email, API call), the recipient, the email template, and an optional API action. Includes a Test panel that actually fires the rule against a real invoice.
- **Email channel**: the invoice PDF is attached by default. Subject and body have sensible defaults if you leave them blank. Recipients can be a portal user, a portal role, or a list of email addresses (or any combination).
- **Auth-disabled installs**: notifications work without authentication — portal rows are sent to a "broadcast" inbox visible to everyone.
- **Retention**: notifications older than `notificationsRetentionDays` in global settings (default 90 days) are cleaned up daily.

---

## 2026.05.2 — 2026-05-06 \{#v2026-05-2\}

French B2B PA submission: qualified PDF attachments (LISIBLE + business documents) plus several round-trip integrity fixes.

### What's new

- **LISIBLE attachment**: new Y/N flag on document templates. When ON, a human-readable PDF is rendered from the UBL itself and embedded back as a "LISIBLE" attachment. Independent of the existing Attachment dropdown — both can be active on the same invoice.
- **Additional attachments**: list of qualified business documents (`RIB`, `BON_LIVRAISON`, `BON_COMMANDE`, `PJA`, `BORDEREAU_SUIVI`, `DOCUMENT_ANNEXE`, etc.) to embed alongside the invoice. Editable from the Document tab; paths support placeholders like `%APP_HOME%`, `%DOC%`, `%DCT%`, `%KCO%`. Missing files are logged and skipped — they never break the surrounding processing.
- **TAG_CUSTOMER_SIRET** (BT-46): new XSL variable for the buyer's SIRET, next to the existing buyer SIREN.

### Bug fixes

- **PA-acceptable XML output**: the UBL XML declaration must match `<?xml version="1.0" encoding="UTF-8" standalone="no"?>` exactly — the previous code was emitting variations the PA rejected. Fixed.
- **Line amount display** in the invoice modal: amounts that included a line allowance were being recomputed and shown wrong (e.g. a 45 × 12,75 line with a 489,15 allowance was displayed as 84,60 instead of 573,75 — the PDF was correct, only the modal was off). The amount is now read directly from the UBL.
- **Config file corruption**: a re-indent pass was unwrapping any string starting with `{` as nested JSON — including template placeholders like `{content}` or `{statusAt}` — leaving `config.json` unparseable on next reload. Fixed.

---

## 2026.05.1 — 2026-05-05 \{#v2026-05-1\}

PDF templates become reusable shareable resources with a full visual editor — design once, reuse across many documents.

### What's new

- New **PDF Templates** page (under Management) to create, copy, import, export and edit layouts independently of any specific document. Many documents can share the same PDF template — edit once, propagate everywhere.
- New **Block** section type for fully custom layouts driven by XPath: text, fields with formatting (date / currency / number / percent), images, rows / columns, conditional rendering, repeating blocks, and tables that iterate over invoice lines or other collections.
- New **visual canvas editor** for Block sections: tree view, toolbar to add elements, inspector for properties. Load a sample XML once and the XPath picker autocompletes paths from real data.
- **Live preview** opens in a large modal at the top of the form — no more scroll up and down to iterate on a layout.

### Bug fixes

- **Tables disappearing from PDFs**: a table with `children` listed before its `xpath` property was losing its iterator, returning 0 rows. Fixed.
- **Editor freeze** on rapid edits: the canvas editor was re-rendering on every keystroke and stealing focus. Fixed.

---

## 2026.05.0 — 2026-05-05 \{#v2026-05-0\}

Big release that unifies document processing: XML and UBL inputs go through the same single entry point, with the document template itself deciding which pipeline to run.

### What's new

- **One Process Document page** replaces the previous Process XML + Process UBL pages. The page adapts its controls based on the template's source (XML spool, or already-formed UBL invoice).
- **Source property** on every document template (XML or UBL). For UBL inputs, the (doc, dct, kco) primary key is extracted from the invoice's `cbc:ID` via a regex. A built-in **Suggest + Test** helper in the Document tab lets you paste a real ID and have the regex filled in automatically.
- **One CLI command**: `-process` replaces `-xml` and `-ubl`. The CLI infers the pipeline from the template's source.
- New **Documents page** under Management (separate from Settings) for managing document templates: add, copy, import, export, remove, description.
- **PDF generator rewritten**: the monolithic generator is split into composable sections (Header, Parties, Line Table, VAT, Totals, Payment, Notes…). Each section can be reordered or configured per document template via the PDF Template editor.
- **Per-document PDF templates**: each invoice's PDF is rendered from the template assigned to its document. New `F564231.UHTMPL` column tracks which template was used so the PDF preview always uses the right layout.

### Improvements

- Filename-based key extraction (`DOC_DCT_KCO_ubl.xml`) is no longer required. UBL filenames can be anything.
- All `/api/invoices/...` routes now use `(doc, dct, kco)` directly in the URL — faster, cleaner, and PostgreSQL-friendly.
- The `/invoice/view` PDF preview route accepts either the UBL invoice number (`?id=...`) or the composite key (`?doc=&dct=&kco=`).

---

## 2026.04.10 — 2026-05-04 \{#v2026-04-10\}

### Improvements

- **E-Invoicing settings**: it is now possible to configure a hybrid setup where invoices are sent over SFTP but import polling, status retrieval and seller actions still go through the API. Previously the API section was hidden as soon as Send Mode was set to FTP.

### Bug fixes

- **BT-46 (Buyer SIRET)** in XSL: two issues prevented the buyer SIRET from being emitted correctly. Fixed — `TAG_CUSTOMER_SIRET` is now available in the XSL Editor catalog and renders correctly in the UBL output.

---

## 2026.04.9 — 2026-04-30 \{#v2026-04-9\}

### What's new

- **Download UBL** button on the invoice detail modal's History tab, next to Validate UBL. Saves the raw UBL XML as `{doc}-{dct}-{kco}.xml`.
- **AI Assistant auto-greeting**: opening the chat panel for the first time on a session sends a localised greeting so the assistant introduces itself and lists its main capabilities without you having to type a prompt.

### Bug fixes

- **Settings editors showing stale data**: switching between two reference lists could open the editor with rows from the previous list. Fixed.

---

## 2026.04.8 — 2026-04-29 \{#v2026-04-8\}

### AI Assistant improvements

- The assistant can now answer questions like **"why was invoice X rejected"** or **"what did the PA say"** — it has access to the invoice lifecycle history (the same data shown in the History tab).
- The assistant now knows your **status code catalogue** (including any customisations), so it stops guessing codes from words like "litige" and uses the exact code.
- The chat textarea is re-focused automatically once a response finishes streaming — follow-up questions no longer require clicking back into the input.

---

## 2026.04.7 — 2026-04-29 \{#v2026-04-7\}

### Bug fix

- **AI Assistant — documentation lookup**: the assistant could consistently fail to read the online documentation (`url_not_allowed` errors). Fixed — the assistant now correctly fetches pages from `docs.nomana-it.fr` to answer product questions.
- **AI Assistant chat**: tool invocations and their results are now shown as inline pills in the chat, so any failure is visible instead of silently swallowed.

---

## 2026.04.6 — 2026-04-29 \{#v2026-04-6\}

### Improvements

- **AI Assistant — documentation lookup**: the assistant now picks the right documentation page instead of guessing or giving up. It reads the sitemap of `docs.nomana-it.fr` on startup so it knows which pages actually exist.
- Two new optional global settings in **Settings → System → Global → AI** to point the assistant at a custom documentation site or restrict the scope.

---

## 2026.04.5 — 2026-04-29 \{#v2026-04-5\}

### Bug fix

- **AI Assistant — documentation access**: on installations upgraded from before 2026.04.4, the assistant was answering that it had no access to documentation because the new setting was missing. It now defaults to `docs.nomana-it.fr` so no manual edit is needed.

---

## 2026.04.4 — 2026-04-29 \{#v2026-04-4\}

### What's new

- **AI Assistant — tool use**: the assistant can now call tools mid-conversation to answer your question instead of guessing from prior knowledge. It can look up the documentation, list invoices, explain a status code, fetch validation errors for an invoice, and list e-Reporting reports.
- New AI settings (**Settings → System → Global → AI**): customise the system prompt, restrict documentation lookup to specific domains, and toggle the data tools on or off.
- Assistant replies are now rendered as Markdown — headings, bold, lists, tables, fenced code blocks and links all render correctly instead of showing raw `###` / `**` etc.

---

## 2026.04.3 — 2026-04-29 \{#v2026-04-3\}

E-Reporting brought into full compliance with the official FNFE-MPE Flux 10 specification, plus several fixes around the e-Reporting data model and the settings editors.

### E-Reporting — Flux 10 specification compliance

- The XML emitted for Flux 10.1 / 10.3 now matches the official FNFE-MPE specification element by element (correct tags, correct date formats, EUR currency on every tax amount, restricted set of category codes).
- **B2C transactions** are now correctly aggregated as required by the spec (rule G6.28) — never emitted as individual invoice blocks. B2BINT keeps the per-invoice emission.
- New optional declarant / sender / issuer / business-process fields on the **e-Reporting** template, with a dedicated editor (sections Sender, Issuer, Business Process).
- **Dedicated e-Reporting status codes** (9950–9957) instead of reusing the invoice status codes. Editable in **Settings → System → ereporting-statuses**.
- **B2C reports could be empty**: the report was reading VAT subtotals from a table that was not always populated, producing an empty `<Transactions>` block. Now reads primarily from the UBL XML with the old behaviour as fallback.

### Bug fixes

- **Settings — list editors losing focus when typing**: across the 15 reference-list editors (Statuses, Countries, Action Codes, Currency Codes, etc.) the cursor was being kicked out of the input on every keystroke, and freshly added rows could never be filled in. Fixed.
- **Statuses editor** was silently dropping the `type` and `description` template fields on save, corrupting the statuses template. Fixed.
- **Dashboard / About card**: the EXTENDED-CTC-FR schematron is now listed alongside the others, and the displayed version numbers no longer fall back to the embedded EN 16931 source version.

---

## 2026.04.2 — 2026-04-29 \{#v2026-04-2\}

### Bug fix

- **Re-validating an invoice failed**: clicking *Validate UBL* on an existing invoice from the History tab (and the standalone validate path) was failing with a schema error. Fixed.

---

## 2026.04.1 — 2026-04-29 \{#v2026-04-1\}

### What's new

- **EXTENDED-CTC-FR validation profile** added to the validator. The active Schematron profile is now chosen automatically from the invoice's `CustomizationID` (BT-24) — EN 16931 + CIUS-FR for standard invoices, EXTENDED-CTC-FR for Extended profile.
- **Customization IDs** are now a dedicated reference list in **Settings**, seeded with the standard French URNs (EN 16931, FNFE Basic / Extended CTC, Factur-X levels, Peppol BIS Billing 3). The UBL Defaults editor offers them as a dropdown.
- **Processing Log** now covers UBL processing (was XML-only) — every UBL run shows up in the log just like XML runs.

### Improvements

- **Replace mode** now also purges lifecycle history and validation errors when reprocessing, so re-runs no longer mix stale entries with the new run.

### Bug fixes

- **UBL upload directory**: uploading a UBL file used to land in a wrong path (`<input>/_ubl/`) and validation then failed with "No such file or directory". Both fixed — uploads go to `<input>/ubl/` and validation resolves the path correctly.

---

## 2026.04.0 — 2026-04-29 \{#v2026-04-0\}

Major release: e-Reporting (Flux 10.1 / 10.3) becomes a first-class feature, alongside a new Processing Log and a new Release Notes page.

### What's new

- **E-Reporting**: new top-level page to generate, list and inspect Flux 10.1 (B2C) and 10.3 (B2BINT) reports. Includes a generate dialog with period picker, a detail modal with the included invoices and CSV / Excel export, and a "Download XML" action.
- **CLI**: new `-ereporting` mode with date range, company and flux filters.
- **Background scheduling**: new `ereportingInterval` job to automatically generate reports on a schedule.
- **Processing Log**: new page under Management to inspect every processing run, with a grouped view (one row per START → END job with status badge, duration, and expandable step list) and a flat view. Filters by mode, template, period (default last 7 days) and file name.
- **Release Notes page** (under Documentation) that renders this file in the UI, in English or French depending on the active language, with a table of contents.
- **Dashboard**: new "About this release" card showing release number, build date, and bundled Schematron versions.

### Other

- **Initialize Database** now creates the three new e-Reporting tables (F564240 / F564241 / F564242) alongside the existing ones. The table names are configurable in **Settings → db-nomaubl**.
- The **Roles** editor exposes the two new pages (Processing Log, Release Notes) so existing roles can be granted access.

---

## 1.0.0 — Initial release \{#v1-0-0\}

NomaUBL is a Java 17 + React e-invoicing platform that turns JD Edwards output into standards-compliant **UBL 2.1** documents, validates them, submits them to a French **Platform Agréée (PA)**, and tracks the full invoice lifecycle.

### Core pipeline (JDE → UBL → PA)

- **JDE XML extraction** from the BIP Print Queue (`F95630`/`F95631`/`F9563110`), JDE Archive, SFTP and the local filesystem; routed by document-type templates (`invoices`, `credit_notes`, …).
- **XSLT 2.0 transformation** via Saxon-HE — generates UBL 2.1 invoices and credit notes, with a configurable XSL framework (`ubl-common.xsl` + `ubl-template.xsl`).
- **Validation**: XSD (UBL 2.1) + Schematron — **EN 16931**, **BR-FR Flux 2** (CIUS-FR / FNFE-MPE) and **BR-FR CPRO** (Chorus Pro for B2G), with severities (`fatal`, `error`, `warning`, `info`).
- **PA submission** over HTTP (Java 11 `HttpClient`), with OAuth2 bearer-token caching and auto-refresh on 401, plus an SFTP fallback channel.
- **Per-company PA overrides** via `e-invoicing-{kco}` system templates — independent credentials, endpoints and tokens per issuing company.
- **PPF directory pre-flight** (non-blocking) via the `e-directory` template — looks the customer up before sending and surfaces a warning when the recipient is unreachable.
- **PDF generation** via Oracle BI Publisher (`oracle.xdo`) with optional Ghostscript post-processing and an iText-based embed of the PDF as `cac:AdditionalDocumentReference` in the UBL.
- **Mock PA** (`paUseMock=Y`) with success / failure / token-expiry behaviours for end-to-end tests without a live platform.

### Document, status and lifecycle storage

Oracle / PostgreSQL schema (configurable in `db-nomaubl`):

| Table | Purpose |
|---|---|
| `F564230` | Source archive — original JDE XML, processing flags |
| `F564231` | UBL header — EN 16931 BT-* fields, generated UBL XML, current status |
| `F564233` | UBL invoice lines |
| `F564234` | UBL VAT summary per category / rate |
| `F564235` | Lifecycle events (history) |
| `F564236` | XSD / Schematron validation errors |
| `F564237` | Runtime processing log (one row per START/END/error event) |
| `F564250`/`F564251`/`F564252` | Users / Roles / Sessions |

- **Dialect-aware DDL** via `DatabaseDialect` — Oracle (`BLOB`, `NUMBER`, `VARCHAR2`) and PostgreSQL (`BYTEA`, `INTEGER`, `VARCHAR`).
- **Initialize Database** action in Settings creates the full schema and bootstraps default `admin` / `viewer` roles.
- **JDE Julian dates** stored as integers (`CYYDDD - 1900000`) and converted on the fly for the UI.

### Invoice status catalog

- 30+ status codes covering the full **AFNOR XP Z12-014 V1.3** lifecycle: `STATUS_CREATED → STATUS_VALIDATED → STATUS_SENT_TO_PA → STATUS_PENDING → STATUS_DEPOSITED → …` plus dispute, factoring and routing-error states.
- Internal workflow codes (`9900`–`9907`) and PA-mapped UNTDID 1373 codes (`1`, `8`, `10`, `37`, `43`, `45`–`51`).
- All codes / labels / PA mappings are **data-driven** from the `statuses` system template — editable in Settings.
- `StatusTransition.apply()` updates `F564231` and inserts an `F564235` lifecycle event in one call.

### CLI

Long-running and one-shot modes — all driven from a single `config.json`:

| Mode | Purpose |
|---|---|
| `-config` | Open the Swing GUI (FlatLaf dark) |
| `-xml` | Process JDE XML files: SINGLE / BURST / UBL / AUTO |
| `-ubl` | Validate + load existing UBL files into the DB |
| `-fetch-single`, `-fetch-all` | Pull from BIP / archive / directory + process |
| `-fetch-import` | Poll PA for status of pending invoices (9906) |
| `-fetch-status` | Retrieve PA lifecycle events and update DB |
| `-extract` | Extract input/output files from a JDE BIP job |
| `-serve` | Embedded HTTP server + background scheduler |
| `-install` | Bootstrap an environment directory tree |
| `-password` | Encode a password for storage |
| `-updUser` | Update JDE user on submitted jobs |

### Web UI (React 19 + Vite)

- **Dashboard** with status counters, integration-error tile, quick actions and license / build info.
- **Invoices** — paged + filterable list, detail modal (Summary, Parties, Lines, VAT, Notes, History, PDF tabs), in-place create / edit / copy / resend, set-status (PA or DB-only), email with PDF attachment.
- **Integration Errors** — every validation row in `F564236` that has no matching invoice (broken submissions).
- **Extract & Process** — single and batch fetchers from BIP, FTP, archive or local files.
- **Process UBL** — load and validate existing UBL XML.
- **Validate** — XSD + Schematron tester for ad-hoc UBL files.
- **XSL Editor** — Monaco-based editor with XML browser, template-aware variable picker and per-template framework installer.
- **XML Viewer** — Monaco-based viewer / formatter with local + server load and save.
- **UBL Defaults** — per-company defaults (currency, payment means, tax categories, etc.).
- **Status Reference** — full AFNOR XP Z12-014 V1.3 reference.
- **Reason Codes** — full AFNOR XP Z12-012 Annexe A reference.
- **UBL Reference** — BT-* glossary.
- **File Versions** — SQLite-backed version history for editable XSL / XSD / Schematron / RTF / config files, with upload / restore / download.

### Settings (configuration manager)

- Live-edit `config.json` from the browser. System templates: `global`, `e-invoicing`, `e-directory`, `statuses`, `db-nomaubl`, `db-jde`, `ftp-jde`, `fetch-invoices`.
- Code lists: `invoice-types`, `vat-categories`, `vatex-codes`, `payment-means`, `scheme-ids`, `unit-codes`, `countries`, `note-types`, `currency-codes`, `rejection-reason-codes`, `action-codes`, `document-reference-codes`, `profile-ids`.
- Document-type templates: per-document RTF / XSL / burst-key / routing / processing-type bindings.
- API connector templates with placeholder substitution (`{{username}}`, `{{token}}`, `{{content}}`, …) and pluggable auth (`NONE`, `BASIC`, `BEARER`, `API_KEY`, `OAUTH2`).
- Per-company `e-invoicing-{kco}` overrides.

### Authentication & RBAC

- Built-in user / role / session tables (`F564250–F564252`).
- **PBKDF2-HMAC-SHA256** password hashes, force-password-change on first login, per-role page allow-list and per-role company filter.
- Toggleable via `authEnabled` in `global` (off → no login).
- Default `admin` (full) and `viewer` (read-only subset) roles bootstrapped on Initialize Database.

### Background scheduler

Driven from `global.fetch*Interval` (minutes — 0 disables):

- `fetchImportInterval` — periodic PA import-status polling.
- `fetchStatusInterval` — periodic PA lifecycle retrieval.
- `fetchAll.N.{interval,label,params}` — multiple batch document-processing jobs.

### Embedded HTTP API

A minimal REST + static file server (`com.sun.net.httpserver`) hosts the React bundle at `/` and exposes `/api/*` for invoices, templates, fetch / extract, validation, file system, license, packaging, authentication, and OpenAPI documentation at `/api/docs`.

### Email & i18n

- SMTP send (TLS / SSL) with per-invoice PDF attachment.
- Full English / French translations across the UI.

### Licensing

- RS256-signed JWT licenses verified at runtime against a bundled PEM public key — `full` (all features) or `restricted` (read-only views) modes.
