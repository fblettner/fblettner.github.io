---
title: Notes de version
description: "Notes de version NomaUBL — chaque changement visible pour l'utilisateur livré dans la plateforme, version par version, dans l'ordre antéchronologique. Reflète la page Notes de version disponible dans l'application."
keywords: [NomaUBL, notes de version, changelog, version, e-reporting, journal de traitement, dashboard, AFNOR XP Z12-014, Schematron, RFE, Réforme de la Facturation Électronique]
---

# Notes de version

Tout changement visible pour l'utilisateur de NomaUBL — interface, API REST, ligne de commande, comportement — est consigné ici. La version la plus récente apparaît en haut. Cette page reflète la carte **À propos de cette version** et l'écran *Notes de version* dédié disponible dans l'application.

<div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '14px 18px', margin: '24px 0', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', alignItems: 'center'}}>
  <span style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, opacity: 0.65, marginRight: '6px'}}>Versions</span>
  <a href="#v2026-08-26-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(74,158,255,0.45)', background: 'rgba(74,158,255,0.08)', color: '#4a9eff', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none'}}>2026.08.26.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-08-26</span></a>
  <a href="#v2026-08-25-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.08.25.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-08-25</span></a>
  <a href="#v2026-08-19-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.08.19.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-08-19</span></a>
  <a href="#v2026-08-18-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.08.18.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-08-18</span></a>
  <a href="#v2026-07-24-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.07.24.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-07-24</span></a>
  <a href="#v2026-07-20-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.07.20.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-07-20</span></a>
  <a href="#v2026-07-17-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.07.17.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-07-17</span></a>
  <a href="#v2026-07-16-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.07.16.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-07-16</span></a>
  <a href="#v2026-07-15-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.07.15.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-07-15</span></a>
  <a href="#v2026-07-13-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.07.13.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-07-13</span></a>
  <a href="#v2026-07-12-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.07.12.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-07-12</span></a>
  <a href="#v2026-07-11-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.07.11.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-07-11</span></a>
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
  <a href="#v2026-07-05-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(74,158,255,0.45)', background: 'rgba(74,158,255,0.08)', color: '#4a9eff', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none'}}>2026.07.05.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-07-05</span></a>
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
  <a href="#v1-0-0" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>1.0.0 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· Version initiale</span></a>
</div>

---

## 2026.08.26.1 — 2026-08-26 \{#v2026-08-26-1\}

### Nouveautés

- **Le résumé quotidien peut lister toutes les factures archivées, pas seulement les erreurs.** Chaque résumé quotidien dispose désormais d'une option **Rapport** : *Erreurs d'intégration* (le résumé existant, les factures ayant des erreurs de validation dans la fenêtre) ou *Toutes les factures archivées* (chaque facture créée dans la fenêtre). Le rapport documents joint les colonnes e-documents — numéro et type de document, société, activité, sous-type, envoi PA, client, montant, dates, fichier source, UUID PA, statut et motif — et peut être restreint avec les mêmes filtres de colonne (par ex. sous-type ou activité). Le filtre de gravité ne s'applique qu'au rapport d'erreurs.

## 2026.08.25.1 — 2026-08-25 \{#v2026-08-25-1\}

### Nouveautés

- **Connecteurs API SOAP / XML.** Un point de terminaison de connecteur API peut désormais envoyer un corps de requête XML (SOAP) : choisissez le type de contenu `text/xml` ou `application/soap+xml`, collez l'enveloppe comme corps avec des `{{variables}}`, et l'en-tête Content-Type est renseigné automatiquement. Les valeurs insérées dans le corps sont échappées en XML : un `&` ou un `<` dans un champ (par ex. une raison sociale) ne peut plus casser l'enveloppe. Les réponses sont lues via les correspondances `xml` / XPath existantes, si bien qu'un service SOAP s'appelle depuis les actions de notification et les connecteurs comme n'importe quelle API REST.

### Améliorations

- **Les listes de factures et de documents sont bien plus rapides sur les grandes tables.** Filtrer une archive volumineuse (des millions de lignes) ne provoque plus de balayage complet : un filtre sur un numéro de document entièrement numérique interroge désormais la clé primaire, les colonnes de code/clé (type de document, société, clé alpha) utilisent leurs index, et la recherche texte porte par défaut sur le début de la valeur — saisir explicitement `%…%` effectue toujours une recherche sur toute la chaîne à la demande.
- **Le débogage des connecteurs affiche davantage.** Lorsque le débogage d'un connecteur est activé, la ligne de requête indique désormais les en-têtes envoyés (valeurs sensibles masquées), et les corps de requête/réponse sont journalisés en entier (limités par un `debugBodyLimit` optionnel) — de quoi voir une enveloppe ou une erreur SOAP complète.

### Corrections

- **Les actions de notification n'envoient plus le remplissage de la base aux API et aux emails.** Les valeurs lues dans des colonnes de largeur fixe étaient transmises aux actions API (et affichées dans les emails) avec un remplissage d'espaces en fin, que certains services rejetaient. Elles sont désormais nettoyées avant usage ; l'espacement interne est préservé.
- **Une action de notification en échec indique désormais la raison.** Lorsqu'une action API échoue, l'email de notification, l'entrée du portail et le résultat du test de la règle incluent maintenant le code HTTP et le corps de la réponse (par ex. l'erreur SOAP), au lieu de signaler seulement l'échec.

## 2026.08.19.1 — 2026-08-19 \{#v2026-08-19-1\}

### Améliorations

- **Le motif de rejet et l'action attendue sont désormais disponibles comme colonnes de liste.** Le motif de rejet de la PA (code et libellé), l'action attendue (code et libellé) et la note de statut peuvent maintenant être ajoutés aux vues liste des factures et des e-documents et filtrés, au même titre que les colonnes existantes.

### Corrections

- **Le PDF lisible n'affiche plus de livraison dans l'en-tête lorsqu'il n'y en a pas.** Lorsqu'une facture ne porte des informations de livraison que sur ses lignes (et aucune au niveau de l'en-tête), le PDF lisible affichait la livraison de la première ligne dans le bloc livraison de l'en-tête. Ce bloc n'apparaît désormais que si une livraison est réellement définie au niveau de l'en-tête ; la livraison au niveau ligne n'est pas affectée.
- **Le retraitement d'une facture archivée n'échoue plus sur une esperluette isolée.** Une source stockée dans l'archive contenant un `&` non échappé (par ex. une raison sociale comme *Research & Industry*) échouait au parsing lors du retraitement. L'entrée est désormais réparée en amont — avant tout pré-transform d'entrée et avant le parsing : la facture se traite même lorsqu'un pré-transform est configuré, et son archive est réécrite proprement. Les sources bien formées ne sont pas modifiées.
- **Les avoirs de facture d'acompte (503) et les avoirs auto-facturés affacturés (502) sont désormais émis en tant qu'avoirs.** Les codes de type de facture `502` et `503` produisaient une facture UBL au lieu d'un avoir, car la liste des codes d'avoir ne les reconnaissait pas. Les deux génèrent désormais correctement un avoir. La liste des codes a par ailleurs été déplacée dans le socle, de sorte que les ajouts futurs atteignent chaque modèle lors de la mise à niveau, sans édition manuelle des valeurs par défaut de chaque modèle. *(Nécessite le redéploiement du socle XSL.)*

## 2026.08.18.1 — 2026-08-18 \{#v2026-08-18-1\}

### Nouveautés

- **Numéro d'ordre de vente (BT-14) et sa date sur la référence de bon de commande.** La référence de commande peut désormais porter aussi le numéro d'ordre de vente et une date, tous deux définis dans l'éditeur XSL à côté de la référence de bon de commande. *(Nécessite le redéploiement du socle XSL.)*
- **Identifiant standard de l'article sur les lignes (BT-157).** Une ligne de facture peut désormais porter un identifiant standard d'article tel qu'un GTIN, dont le schéma est choisi dans la liste ISO 6523 (par ex. `0160` pour le GTIN). La valeur provient de la source, le schéma d'une liste déroulante — le tout se configure dans l'éditeur XSL. *(Nécessite le redéploiement du socle XSL.)*
- **Réordonner les règles de type de facture et de profil par glisser-déposer.** Dans l'éditeur des valeurs UBL par défaut, les règles qui déterminent le type de facture (380, 381…) ou le profil peuvent maintenant être réordonnées en les faisant glisser, sans avoir à les supprimer et les recréer ni à modifier le JSON. L'ordre compte — la première règle valide l'emporte.

### Corrections

- **Les adresses multilignes impriment chaque ligne sur sa propre rangée.** Les lignes d'adresse au-delà de la première sont désormais séparées par des sauts de ligne : le PDF lisible affiche chacune sur sa propre rangée au lieu de les accoler sur une seule ligne. *(Nécessite le redéploiement du socle XSL.)*
- **Le filtrage multi-valeur fonctionne pour toute colonne adossée à une liste.** Sélectionner plusieurs valeurs dans un filtre basé sur une liste (code activité, et toute colonne dotée d'une liste de référence ou personnalisée) les prend désormais toutes en compte, au lieu de ne rien renvoyer. Auparavant, seul le filtre de statut gérait les sélections multiples.

- **Les factures à montant nul sont désormais valides.** Une facture dont toutes les lignes sont à zéro émet maintenant la ventilation de TVA obligatoire et conserve ses lignes en lignes de détail : elle passe les règles de ventilation de TVA (BR-CO-18, BR-FREXT-S-01) au lieu d'être rejetée. Les lignes imbriquées sous un groupe de livraison sont désormais correctement prises en compte par les totaux et la logique TVA. *(Nécessite le redéploiement du socle XSL.)*
- **Les pièces jointes PDF intégrées sont placées correctement en présence d'une référence de projet ou de contrat.** Une pièce jointe injectée (copie lisible, RIB…) se place désormais à la bonne position dans la séquence UBL — avant la référence de projet et le vendeur — au lieu d'après, corrigeant un rejet d'ordre de schéma (`cvc-complex-type.2.4.a`) observé lorsque les références acheteur, commande et projet étaient toutes renseignées.
- **Les notes de ligne conservent leurs sauts de ligne.** Une note multiligne rattachée à une ligne de facture conserve désormais ses sauts de ligne jusqu'à l'UBL au lieu d'être réduite à une seule ligne. *(Nécessite le redéploiement du socle XSL.)*
- **Le PDF lisible n'affiche plus le marqueur interne sur une note de ligne.** Une note de ligne portant un marqueur interne `#CODE#` (par ex. `#ZZZ#`) n'affiche plus que son texte sur le PDF, comme le faisaient déjà les notes au niveau du document.

## 2026.07.24.1 — 2026-07-24 \{#v2026-07-24-1\}

### Améliorations

- **Le webhook entrant de statut PA est désormais documenté dans la référence de l'API.** L'endpoint que la plateforme appelle pour pousser les mises à jour de statut (`/api/webhook/{connector}/{event}`) — son URL, ses en-têtes de signature, le format de charge utile attendu et la correspondance des statuts — figure maintenant dans la référence de l'API (redoc), et peut donc être configuré côté plateforme sans lire le code source.

### Corrections

- **PDF-vers-XML JDE : le texte multiligne d'une pièce jointe de ligne est conservé dans un seul champ.** Lors de la conversion d'un PDF d'état JDE, un texte d'objet média joint imprimé sur plusieurs lignes est désormais émis comme un champ unique dont les lignes sont réunies par des sauts de ligne — conformément à la sortie XML native de JDE — au lieu d'un élément par ligne, dont la transformation en aval ne lisait que la première.
- **Les factures B2C ne portent plus le numéro de TVA ni l'identifiant d'immatriculation de l'acheteur.** Sur une facture B2C (particulier), le schéma de TVA de l'acheteur (BT-48) et son identifiant d'immatriculation légale (BT-47) sont désormais omis, même lorsque les données source les fournissent encore — un particulier n'en possède aucun, et les émettre rendait la facture invalide. Le nom de l'acheteur est conservé. Les factures B2B, B2G et B2B international sont inchangées, et les identifiants du vendeur ne sont jamais concernés. *(Nécessite le redéploiement du socle XSL.)*

## 2026.07.20.1 — 2026-07-20 \{#v2026-07-20-1\}

### Corrections

- **L'attachement d'un PDF à une facture UBL fonctionne désormais.** Pour un modèle de source UBL avec *Pièce jointe = attach*, le PDF est maintenant recherché sous le nom du fichier UBL d'entrée (`<nom>.pdf` déposé à côté de `<nom>.xml`) plutôt que sous un identifiant interne — il est donc réellement intégré. Une fois intégré, le PDF est supprimé du dossier d'entrée, comme le fichier UBL qui l'accompagnait.
- **Les relèves planifiées de dossier n'inondent plus le journal.** Un fichier qui échoue en boucle (par exemple un fichier dont l'identifiant ne peut être analysé et qui reste dans le dossier) était inscrit intégralement dans le journal — sous forme de données brutes — à chaque relève. Le planificateur n'écrit désormais qu'une seule ligne concise par exécution.

## 2026.07.17.1 — 2026-07-17 \{#v2026-07-17-1\}

### Nouveautés

- **Se connecter à une plateforme qui s'authentifie par jeton de rafraîchissement OAuth2.** Le connecteur d'API prend désormais en charge le flux OAuth2 `refresh_token`, avec un champ *Jeton de rafraîchissement* dédié et masqué : le jeton n'est jamais inscrit dans le corps de la requête — pour des plateformes (comme Yooz Rising) qui délivrent un jeton hors ligne longue durée. Un nouveau bouton *Tester l'authentification* dans l'éditeur de connecteur récupère un jeton et indique le succès ou l'erreur exacte, ce qui permet de vérifier les identifiants avant d'envoyer une facture.
- **Relever le statut d'import en masse pour les plateformes sans consultation par facture.** Le contrôle du statut d'import peut désormais fonctionner en mode *recherche* : au lieu d'interroger les factures une à une, il demande à la plateforme tous les flux modifiés depuis le dernier contrôle (en mémorisant cette date d'une exécution à l'autre) et met à jour les factures en attente correspondantes grâce à leur identifiant de transaction stocké. Ce mode s'adresse aux plateformes — comme Yooz Rising — qui n'offrent pas de consultation de statut par facture. Il se règle dans *Paramètres → e-invoicing → Relève des statuts* ; le mode par défaut reste la consultation par facture, sans impact sur les plateformes déjà en service.

### Améliorations

- **Transmettre le type de transaction de la facture aux plateformes qui l'exigent.** Lorsqu'une plateforme attend le type de transaction à la soumission (par ex. le `processingRule` de Yooz Rising), il est désormais déduit automatiquement de la facture — B2B, B2G, B2C ou B2B international — et transmis, aussi bien à l'envoi initial qu'au renvoi.
- **Les en-têtes de connecteur peuvent porter le code société.** Un en-tête de requête peut désormais référencer la société de la facture (`{{kco}}`) — pour les plateformes qui cadrent leurs requêtes par organisation, comme l'`Organization-Id` de Yooz Rising.
- **Les factures UBL sont lues dans le dossier d'entrée propre à leur modèle.** Un modèle de document de source UBL balaie désormais `<entrée>/<modèle>` — la même convention par modèle que pour le XML — au lieu d'un unique dossier partagé `<entrée>/ubl`. Plusieurs modèles UBL peuvent ainsi être planifiés sur des dossiers différents. *(Installations existantes : déplacez les fichiers UBL du dossier partagé vers le dossier du modèle.)*

### Corrections

- **Une relève UBL planifiée ne retraite plus le même fichier.** Après le passage au dossier d'entrée par modèle ci-dessus, un fichier UBL restait dans son dossier d'entrée une fois traité : chaque relève planifiée le reprenait donc — une boucle sans fin. Un fichier UBL traité avec succès est désormais supprimé de son dossier d'entrée, comme le sont déjà les entrées XML générées. Les fichiers en échec, ainsi que les exécutions en validation seule, sont conservés.

## 2026.07.16.1 — 2026-07-16 \{#v2026-07-16-1\}

### Améliorations

- **Les factures UBL existantes sont désormais validées et routées selon leur type de document.** Lors du traitement direct d'un fichier UBL (au lieu de le générer depuis un flux), le type de transaction — B2B, B2G, B2C ou B2B international — est désormais lu dans la note de routage propre à chaque facture pour décider si la validation Schematron s'applique et si la facture est envoyée à la plateforme. Ce comportement s'aligne sur celui du flux de génération : un lot mêlant par exemple des factures B2G et B2C est traité correctement, fichier par fichier. Auparavant, la décision était figée par modèle (le type de document par défaut). Les fichiers UBL sans note de routage reprennent le type de document par défaut, comme auparavant.

### Corrections

- **La relève des jobs BIP suit désormais un point d'avancement par hôte JDE.** Les numéros de job JDE (RJJOBNBR) sont uniques par hôte d'exécution, et non globalement : un repère unique ignorait silencieusement les jobs des hôtes aux numéros plus bas dès qu'un hôte au numéro plus élevé le faisait avancer. La relève conserve maintenant un repère par hôte et ne balaie que les hôtes configurés. Ils se paramètrent dans *Paramètres → Global → Traitement par lot* : ajoutez chaque hôte avec son numéro de départ, ou cliquez sur *Récupérer le dernier n° de job par hôte* pour les initialiser tous en un clic depuis le maximum actuel ; ils s'incrémentent ensuite automatiquement. *(Installations existantes : ajoutez vos hôtes une fois — un hôte non listé n'est pas balayé.)*

## 2026.07.15.1 — 2026-07-15 \{#v2026-07-15-1\}

### Nouveautés

- **Adresse électronique de l'acheteur (BT-49) configurable par type de transaction.** Le schéma et la valeur de l'adresse électronique de l'acheteur peuvent désormais être définis indépendamment de ceux du vendeur (BT-34) et varier selon le type de transaction — B2B, B2G, B2C et B2B international. Pour chaque type, vous choisissez le schéma et l'origine de la valeur : une balise source (réutilisant un champ déjà mappé par le modèle, par exemple l'e-mail de contact de l'acheteur) avec une constante de repli utilisée lorsque cette balise est vide. Les factures B2C et internationales — dépourvues d'adresse électronique basée sur le SIRET — peuvent ainsi porter une adresse e-mail (schéma EM), tandis que les factures B2B/B2G nationales conservent leur routage habituel. La configuration se fait dans *Valeurs par défaut UBL → Identifiants de schéma* ; les types non listés conservent le schéma par défaut et la valeur d'adresse actuelle. La liste de référence *Identifiants de schéma* gagne également une entrée E-mail (EM). *(Nécessite le redéploiement du socle XSL.)*

## 2026.07.13.1 — 2026-07-13 \{#v2026-07-13-1\}

### Nouveautés

- **Les factures d'auto-facturation empruntent leurs propres points d'accès.** Une facture d'auto-facturation (type 261, 389, 471, 473, 500, 501 ou 502) est désormais transmise via le canal « achats » de la plateforme plutôt que le canal « ventes ». Sur le connecteur, une variante `-selfbilled` d'un point d'accès (envoi, statut d'import) est employée automatiquement pour ces documents, avec repli sur le point d'accès standard lorsqu'elle n'est pas définie. La relève du cycle de vie peut interroger plusieurs points d'accès de statut, indiqués sous forme de liste séparée par des virgules dans le champ *Lifecycle endpoints* de l'e-invoicing, afin de collecter à la fois les factures d'auto-facturation et les factures standard. La connexion à la plateforme — URL et identifiants — reste identique : seuls les points d'accès diffèrent.
- **Un même statut peut être reconnu à partir de plusieurs codes source.** Dans une liste de statuts, un statut peut désormais porter plusieurs codes de statut plateforme dans son champ *PA Code(s)*, séparés par des virgules. Une seule liste sert ainsi des factures dont les statuts proviennent de sources différentes — par exemple votre plateforme principale et Chorus Pro — sans dupliquer la liste. Plusieurs codes source peuvent pointer vers le même statut interne.

### Améliorations

- **L'éditeur de connecteur affiche les points d'accès attendus.** L'éditeur de connecteur d'API liste désormais les points d'accès connus de la plateforme (envoi, statut d'import, statuts de facture, leurs variantes d'auto-facturation, vérification d'annuaire…), avec un repère pour ceux déjà configurés et un ajout en un clic pour ceux manquants ; un point d'accès requis ne passe donc plus inaperçu.

### Corrections

- **Mise à jour du Schematron CTC français fournie par l'AFNOR.** Corrige la règle de cohérence du total des charges (*BR-FREXT-CO-12*), qui testait par erreur le total des remises au lieu du total des charges, et accepte désormais les codes de schéma d'identifiant `BY` et `SE` (*BR-FREXT-CL-10*). Fournie par l'AFNOR suite à notre ticket.
- **Les traitements BIP planifiés ne risquent plus de traiter deux fois les mêmes travaux.** Le numéro du dernier travail BIP relevé est désormais enregistré au *début* du lot, avant l'extraction et le traitement, et non plus à la fin. Un traitement planifié qui démarre alors qu'un lot précédent est encore en cours voit le marqueur à jour et ne reprend rien : les mêmes spools ne sont plus extraits, générés ni renvoyés deux fois à la plateforme. Un travail qui échoue après l'avancement du marqueur n'est pas rejoué automatiquement ; son spool est conservé et peut être renvoyé.

## 2026.07.12.1 — 2026-07-12 \{#v2026-07-12-1\}

### Nouveautés

- **Identifiants supplémentaires pour l'acheteur et le vendeur, avec schéma.** Un modèle de document peut désormais mapper jusqu'à quatre identifiants additionnels pour l'acheteur (BT-46) et pour le vendeur (BT-29), en plus des habituels SIREN/SIRET/GLN — par exemple un numéro de compte client attribué par l'ERP du fournisseur. Chaque identifiant associe un champ du flux source et un code de schéma choisi dans la liste de référence *Scheme IDs*. Ils se paramètrent dans les nouveaux panneaux *Identifiants acheteur* / *Identifiants vendeur* de l'éditeur XSL, et le PDF lisible affiche chacun d'eux libellé d'après son schéma (repris de la liste *Scheme IDs*). *(Nécessite le redéploiement du socle XSL et la mise à niveau des modèles de document.)*

### Améliorations

- **Le PDF lisible affiche désormais les libellés, pas les codes.** Sur le PDF généré, les champs codifiés n'affichent plus que leur libellé lisible — type de facture, profil, mode de paiement, catégories de note, références de document et identifiants d'article ne portent plus le code brut (par ex. *Paiement : Virement* au lieu de *Paiement : 30 — Virement*, et une note affiche *Informations de paiement —* au lieu de *[PMD] Informations de paiement —*). Les codes restent présents dans l'UBL pour le traitement automatisé.
- **La relève des statuts récupère l'action, le motif de rejet et la note.** Lors de la récupération des événements de cycle de vie auprès de la plateforme, le code action, le code motif de rejet et la note de statut présents dans le détail de l'événement sont désormais enregistrés dans des colonnes dédiées — les libellés du motif et de l'action étant repris des listes de référence *Rejection reason codes* / *Action codes*. Les champs à lire se paramètrent par plateforme sur le point d'accès *invoice-statuses* du connecteur : une plateforme au format différent se mappe sans modification de code.

### Corrections

- **La relève des statuts ne revérifie plus les mêmes événements à chaque passage.** L'horodatage « dernière relève » est désormais écrit à l'heure locale de la plateforme. Une plateforme qui compare le filtre de relève à ses horodatages locaux recevait sinon une valeur en retard de plusieurs heures à chaque appel, et renvoyait donc encore et encore la même fenêtre.
- **Une ligne portant un taux de TVA mais sans montant ne fausse plus les totaux de TVA.** Une ligne de facture qui porte un taux de TVA sans montant net (rien de facturé, ni remise) est désormais marquée comme ligne d'*information* et exclue du contrôle de cohérence du récapitulatif de TVA. Auparavant, une ligne au taux normal avec un montant à zéro et sans récapitulatif de TVA correspondant était rejetée (*BR-FREXT-S-01*). *(Nécessite le redéploiement du socle XSL et la mise à niveau des modèles de document.)*
- **Une exonération de TVA à la ligne ne déborde plus sur les autres lignes.** Lorsque les motifs d'exonération sont mappés à la ligne et qu'une ligne était exonérée (par ex. *Non soumis à la TVA*, catégorie O) tandis qu'une autre était au taux normal, la ligne au taux normal héritait à tort du code motif d'exonération de la première ligne. Cette incohérence faisait échouer le contrôle de cohérence du récapitulatif de TVA et déclenchait l'avertissement *BR-FREXT-S-08rev*. Chaque ligne n'utilise désormais que son propre motif d'exonération ; à défaut, elle reprend celui correspondant à sa catégorie de TVA (aucun au taux normal), de sorte qu'une facture mixte se valide. Une ligne qui mappe réellement son propre motif le conserve. *(Nécessite le redéploiement du socle XSL et la mise à niveau des modèles de document.)*

## 2026.07.11.1 — 2026-07-11 \{#v2026-07-11-1\}

### Nouveautés

- **E-Documents — consulter tous les documents archivés.** Une nouvelle page *E-Documents* liste l'ensemble des documents de l'archive, et pas seulement ceux devenus des factures : un flux qui a échoué tôt, ou un type de document qui ne produit jamais de facture, reste ainsi consultable. Les colonnes par défaut reprennent les champs de l'archive (numéro de document, type, société, activité, sous-type, indicateur d'envoi à la PA, client, montant, date document, date d'archivage, fichier source, UUID PA), avec des filtres sur l'activité, le client, le fichier source et la période habituelle. Un clic sur un document ouvre une visionneuse affichant le **flux source archivé** et, lorsque le document est devenu une facture, l'**UBL généré** — chacun présenté mis en forme et téléchargeable (nommé d'après le document). Les colonnes et les filtres se configurent depuis *Paramètres → Vues de liste → E-Documents*, et un point d'accès REST dédié (`/api/list-documents`, documenté dans la référence d'API intégrée) expose la même archive aux applications externes. La page suit les mêmes règles d'accès par société / rôle que la liste des factures ; accordez-la à un rôle depuis *Paramètres → Rôles*.

## 2026.07.09.1 — 2026-07-09 \{#v2026-07-09-1\}

### Nouveautés

- **Enrichir le flux XML depuis un connecteur SQL ou API avant transformation.** Un nouvel onglet *Enrichissement* sur un modèle de document permet de récupérer les données absentes du flux source — via une requête SQL ou un point d'accès REST — et de les injecter dans le flux *avant* sa transformation : les valeurs récupérées se mappent alors dans l'éditeur XSL comme n'importe quel champ du flux et sont archivées avec la source. Chaque règle choisit une *portée* par XPath (le document entier, ou un groupe répété comme chaque ligne de facture), envoie des champs de cette portée comme paramètres de la requête / du point d'accès, et réécrit les colonnes/champs renvoyés sous forme de nouveaux éléments — directement dans le nœud de portée, dans un nouveau groupe, ou dans un groupe existant. Une règle peut ajouter un ensemble de champs à plat ou un groupe répété (un enfant par ligne renvoyée) ; les règles s'exécutent dans l'ordre, une règle ultérieure peut donc réutiliser ce qu'une précédente a ajouté, et les recherches identiques sont mises en cache (un seul appel par clé distincte). Les données enrichies sont stockées avec la source archivée (F564230) : un retraitement ne rappelle donc pas le connecteur. Rien ne s'exécute tant qu'aucune règle n'est configurée — les modèles existants ne sont pas affectés. Un bouton *Test à blanc* permet d'essayer les règles sur un flux d'exemple chargé : il appelle les vrais connecteurs et affiche le XML enrichi, un résumé et les éventuels avertissements sans rien modifier, et le résultat peut être téléchargé (nommé d'après l'exemple, par ex. `26000001CG00005_enrich.xml`) pour construire le mappage XSL dans la foulée.

### Corrections

- **Le récapitulatif de TVA du document est agrégé par catégorie, taux et exonération.** Lorsque plusieurs lignes de récapitulatif TVA de la source aboutissaient à la même catégorie de TVA cible — par exemple deux codes de taxe source associés tous les deux à *Taux standard* — la facture émettait deux `cac:TaxSubtotal` pour la même catégorie et le même taux, ce qui est invalide (EN 16931 BR-S-08) et rejeté par la plateforme. Le récapitulatif de TVA est désormais regroupé par la combinaison résolue catégorie (BT-118), taux (BT-119) et code / motif d'exonération (BT-121 / BT-120) : un récapitulatif par combinaison. Les montants imposable et de taxe sont **additionnés depuis la source** (et non recalculés) : une véritable incohérence comptable apparaît donc toujours comme une erreur de validation au lieu d'être corrigée silencieusement.

## 2026.07.08.1 — 2026-07-08 \{#v2026-07-08-1\}

### Nouveautés

- **Appellation commerciale de l'acheteur (BT-45).** L'appellation commerciale de l'acheteur peut désormais être mappée depuis un champ source (nouveau mappage *Appellation commerciale de l'acheteur* dans l'éditeur XSL) et est émise en `cac:PartyName/cbc:Name` sur la partie acheteur, à la bonne position dans le schéma — comme l'appellation commerciale du vendeur (BT-28). Émise uniquement lorsqu'une valeur est mappée.
- **Les totaux du document gagnent les charges, le montant payé et l'arrondi (BT-108 / BT-113 / BT-114).** Le bloc des totaux peut désormais porter la somme des charges au niveau document (`cbc:ChargeTotalAmount`), le montant déjà payé (`cbc:PrepaidAmount`) et un montant d'arrondi (`cbc:PayableRoundingAmount`), chacun mappable depuis un champ source dans l'éditeur XSL (trois nouveaux mappages *Somme des charges*, *Montant déjà payé* et *Montant d'arrondi*) et émis à la bonne position dans le schéma. Lorsqu'un montant payé ou un arrondi est présent, le montant à payer (BT-115) est désormais calculé comme **total avec TVA − payé + arrondi** au lieu du seul total avec TVA ; sans aucun des deux, le montant à payer est inchangé.

- **Le suivi de statut fonctionne désormais avec les plateformes qui répondent en XML.** Un point d'accès de connecteur API dispose d'un paramètre *Type de réponse* : *JSON* (par défaut, inchangé) ou *XML*. En mode XML, le *Champ de réponse* et les *Correspondances de réponse* sont interprétés comme des expressions XPath : une plateforme qui renvoie un `ApplicationResponse` UBL — dont le statut se trouve dans `//cac:DocumentResponse/cac:Response/cbc:ResponseCode` — peut être interrogée comme n'importe quelle plateforme JSON. Les préfixes courants `cac` / `cbc` / `ext` sont reconnus ; utilisez `//*[local-name()='X']` pour les autres. Un champ *Table de statuts* associé au point d'accès traduit le vocabulaire propre à la plateforme (par exemple `send_error`, `sent`, `processing`) vers les états internes *acceptée / en attente / rejetée*, de sorte que la facture reçoit le bon statut au lieu d'être considérée acceptée par défaut lorsque le code renvoyé n'est pas reconnu. Les plateformes JSON ne sont pas affectées — laissez les deux champs à leur valeur par défaut.

### Corrections

- **L'identifiant de règle des erreurs de validation n'est plus tronqué.** La colonne d'identifiant de règle du journal des erreurs de validation (`F564236.UVY56RULE`) faisait 20 caractères, mais les identifiants de règles introduits avec le jeu de règles CTC français actuel (par exemple `BR-FR-CPRO-…`, `EXT-FR-FE-…`) peuvent être plus longs et étaient coupés. Élargie à 30 caractères, dans le schéma de base et via une migration de mise à niveau (Oracle + PostgreSQL).
- **Les nouveaux mappages apparaissent désormais dans l'éditeur XSL.** Les sections Acheteur, Vendeur, Livraison, TVA et Lignes de l'éditeur n'affichaient qu'une liste fixe de champs : un mappage ajouté au catalogue et au modèle (par exemple l'appellation commerciale de l'acheteur BT-45, ou les totaux charges / payé / arrondi) était silencieusement ignoré dans le panneau — invisible même après une mise à niveau l'ayant ajouté au modèle. Chacune de ces sections affiche maintenant aussi tout champ mappé restant de son groupe : un nouveau mappage apparaît toujours.
- **Le téléversement d'un fichier UBL pour validation directe arrive désormais là où le validateur le cherche.** En mode *UBL (valider directement)*, le sélecteur de modèle est masqué, mais le téléversement utilisait quand même le dernier modèle sélectionné : le fichier était écrit dans `input/<ce-modèle>/` (ou `input/` en l'absence de modèle) alors que la validation le relit depuis `input/ubl/` — d'où « fichier introuvable ». Le téléversement vise maintenant toujours le répertoire d'entrée `ubl/` dans ce mode.
- **PDF → XML avec manifeste : les identifiants d'objet JDE réutilisés retrouvent le bon nom de colonne.** JDE réutilise un identifiant d'objet (le suffixe `_ID<n>`) pour des champs sans rapport — par exemple `_ID25` désigne à la fois un libellé d'en-tête, un indicateur de ligne et le total de la commande. Le convertisseur associait les noms du manifeste par identifiant seul et dans l'ordre du document : le total numérique (`261.63`) et un libellé texte (`Invoice`) se retrouvaient dans la même balise `Total_Order_ID25`. Les noms du manifeste sont désormais associés par identifiant **et type de donnée** (numérique / date / texte) : le `Total_Order` numérique se lie à la valeur du total, une date se lie au champ date, et un libellé texte partageant l'identifiant reprend son alias dictionnaire de données — exactement comme sans manifeste. Les champs multilignes conservent un nom unique. En dernier recours, si un nom de manifeste devait encore produire deux valeurs différentes sous la même balise dans une section, la seconde reprend son alias dictionnaire de données : la sortie ne contient jamais de balise en collision.
- **`ubl-defaults.xsl` ne gonfle plus de façon incontrôlée lors de l'enregistrement des mentions légales.** À chaque enregistrement de la section des mentions légales, le conteneur de notes était réindenté en réajoutant sa propre indentation au lieu de la remplacer : l'indentation *doublait* à chaque enregistrement. Après une vingtaine d'enregistrements, le fichier atteignait plusieurs dizaines de mégaoctets (presque uniquement des espaces) et pouvait accumuler des modèles de note en double. Les notes sont désormais réécrites sur place avec une indentation bornée et les doublons sont supprimés : le fichier reste léger, et un fichier déjà gonflé revient à sa taille normale au prochain enregistrement.
- **Les champs société réapparaissent dans l'éditeur Valeurs UBL par défaut.** Après la récente évolution permettant à une facture sans code société d'hériter de *tous* les champs vendeur (SIREN, SIRET, TVA, adresse…) de la société par défaut — et non plus seulement de son nom — l'éditeur ne parvenait plus à lire ces champs et les affichait vides (seul le nom de la société restait visible). L'éditeur lit et écrit désormais cette forme : chaque champ société est affiché et enregistré correctement. Les configurations utilisant encore l'ancienne forme restent lues et sont migrées vers la forme avec repli au prochain enregistrement.

## 2026.07.05.1 — 2026-07-05 \{#v2026-07-05-1\}

### Nouveautés

- **Les factures d'auto-facturation affectent correctement les parties.** Pour les types d'auto-facturation (389, 261, 471, 473, 500, 501, 502), l'entreprise qui exploite NomaUBL est l'*acheteur* et non le vendeur. Vous mappez désormais les parties comme pour une facture normale (votre société en fournisseur) ; lorsque le type est auto-facturé, les deux parties sont inversées à l'émission : votre société se retrouve côté acheteur — avec SIREN/TVA/SIRET/adresse électronique complets issus du référentiel société — et l'autre partie côté vendeur, le bénéficiaire du paiement étant le vendeur. Auparavant, le vendeur héritait de l'adresse et de l'identité de votre société pour chaque champ non mappé, et l'acheteur restait sans TVA/SIREN. Les modèles déjà déployés récupèrent le changement en relançant la mise à niveau.
- **Joindre le PDF généré comme pièce jointe classique (PJA), et non plus seulement comme LISIBLE.** Le paramètre Pièce jointe gagne un mode *generate* qui produit le PDF de la facture avec le concepteur de modèle PDF et le joint comme PJA (`cac:AdditionalDocumentReference`) au lieu de la copie lisible LISIBLE. À utiliser lorsque le PDF conçu n'est pas un lisible conforme aux règles françaises : désactivez le LISIBLE et joignez plutôt le PDF en PJA. Le LISIBLE, `create` (RTF/BIPublisher) et `attach` (PDF existant du répertoire d'entrée) restent inchangés.
- **Références aux factures antérieures, étendues.** Une facture peut référencer plusieurs factures antérieures (BG-3, 0..n) via un nouveau mappage *Factures antérieures — répété* dans l'éditeur XSL (un `cac:BillingReference` par occurrence, avec une date d'émission facultative), et une ligne de facture peut porter sa propre référence à une facture antérieure (EXT-FR-FE-136) — le tout au bon endroit dans le schéma.
- **Motif d'exonération de TVA mappable depuis le spool (BT-121 / BT-120), aux niveaux document et ligne.** Le code et le libellé du motif d'exonération peuvent maintenant être mappés depuis un champ source — pour chaque ventilation de TVA et chaque ligne — au lieu d'une seule valeur par défaut par catégorie, ce qu'exigent les factures exonérées / en autoliquidation / à l'export / intracommunautaires. Une nouvelle correspondance *Code source → code VATEX* dans les valeurs par défaut UBL normalise aussi un code source brut vers un code VATEX autorisé (les codes non reconnus sont conservés, un code vide retombe sur la valeur par défaut de la catégorie).
- **Code de catégorie de TVA en ligne (BT-151) mappable depuis le spool**, résolu via le même mappage de catégorie que le BT-118 au niveau document (auparavant seul le taux BT-152 était réglable par ligne). Une ligne sans TVA propre hérite de la TVA du document (ligne → document → valeur par défaut).
- **Le PDF lisible reprend désormais toutes les données de la facture.** Conformément à la règle imposant que le lisible contienne l'intégralité des données de la facture structurée, le PDF affiche à présent de nombreux champs jusqu'ici absents : références à la facture antérieure (BT-25/BT-26), période de facturation (BT-73/BT-74), date d'exigibilité de la TVA (BT-7), référence de projet (BT-11), facture antérieure en ligne (EXT-FR-FE-136) et motif d'exonération en ligne (EXT-FR-FE-178/179), date de livraison effective (BT-72), informations de paiement complémentaires (BT-83/BT-85/BT-89), acompte (BT-113) et arrondi (BT-114), TVA en devise étrangère (BT-6/BT-111), et adresses électroniques et identifiants des parties (BT-28/BT-29/BT-32/BT-34/BT-46/BT-49). Chaque donnée est activable dans le modèle PDF.

### Mises à jour

- **Règles de contrôle France CTC portées en V1.4.0 du FNFE (XP Z12-012, 30 juin 2026).** Les schematrons UBL Flux 2 et EXTENDED-CTC-FR, ainsi que les listes de codes EN 16931, sont alignés sur la publication du 30 juin 2026 ; elle corrige notamment le chemin XPath de la facture antérieure en ligne (EXT-FR-FE-136) et ajoute `RECAPITULATIF_COTRAITANCE` aux pièces jointes admises. Les règles standard deviennent obligatoires à l'émission à compter du 1er septembre 2026.
- **L'avertissement `UBL-CR-001` (« une facture UBL ne devrait pas contenir d'extensions ») n'est plus remonté** — il se déclenchait sur les champs `ext:UBLExtensions` que NomaUBL émet volontairement. Filtré à la collecte des résultats ; le schematron standard reste intact, une mise à jour ne le réintroduira donc pas.
- **Les déclarations d'e-reporting portent désormais le taux de TVA et le motif d'exonération.** Chaque ventilation de TVA du fichier d'e-reporting généré comporte à présent le taux de TVA (TT-57), le motif d'exonération (TT-58) et son code (TT-59), regroupés sous la catégorie de TVA ; ils étaient auparavant absents.
- **Les listes déroulantes de recherche s'adaptent à leur contenu.** Les listes (motifs d'exonération de TVA, types de note, types de document et tous les autres sélecteurs de recherche) s'élargissent pour afficher l'option la plus longue au lieu d'être tronquées à la largeur du champ, dans la limite du bord de l'écran.
- **Liste des types de référence de document complétée (UNTDID 1153 / BT-128-1).** Le sélecteur de code de référence de document propose désormais l'intégralité des codes UNTDID 1153 (818 codes), avec libellés français et anglais, au lieu d'un sous-ensemble restreint. Les installations existantes récupèrent les nouveaux codes via la mise à niveau de la configuration.

### Corrections

- **La résolution automatique du type de document lit désormais le mappage des valeurs par défaut UBL.** En mode AUTO, le mappage *source → type de document* (par ex. `C` → `B2C`) défini une seule fois dans les valeurs par défaut UBL était ignoré : le résolveur n'analysait que le XSL propre à chaque modèle de document, et non le `ubl-defaults.xsl` partagé qu'il importe ; le code source brut était donc transmis sans traduction et le comportement par type de document (Schematron activé/désactivé, envoi à la PA, mode de traitement) retombait sur la ligne par défaut. Il suit désormais la chaîne `xsl:import` et lit le mappage là où `resolve-document-type` est défini, de sorte que le type de document est résolu correctement, sans duplication par modèle.
- **La référence à la facture précédente ne casse plus le schéma.** `cac:OrderReference` précède désormais `cac:BillingReference` (`InvoicePeriod → OrderReference → BillingReference`) ; auparavant, lorsqu'une référence de commande (BT-13) et une référence à la facture précédente (BT-25/BT-26) étaient toutes deux présentes, leur ordre était inversé et le schéma UBL le rejetait (`cvc-complex-type.2.4.a`). Les modèles déployés reçoivent le correctif en relançant la montée de version.
- **La modification d'une facture dans l'éditeur manuel ne supprime plus les données qu'il n'affiche pas.** Tout élément UBL sans champ dédié dans l'éditeur — réf. à la facture antérieure (BT-25/BT-26), réf. en ligne (EXT-FR-FE-136), devise de comptabilisation de la TVA (BT-6), date d'exigibilité (BT-7), arrondi (BT-114) ou mandat/RUM (BT-89) — est désormais conservé à l'enregistrement au lieu d'être perdu, réinséré à la bonne position dans le schéma.
- **Éditeur manuel : le motif d'exonération de TVA est conservé et réglable par ligne.** Une ventilation de TVA ne portant que le libellé du motif d'exonération (BT-120) sans code (par ex. un jeton de routage multi-vendeur) était perdue à l'ouverture de la facture dans l'éditeur manuel — le champ apparaissait vide. Il est désormais relu et conservé à l'enregistrement. L'éditeur de ligne dispose aussi d'un champ d'exonération de TVA (code + motif, EXT-FR-FE-179/178) : l'exonération se règle par ligne, et non plus seulement par ventilation.
- **Les factures créées manuellement / sans modèle sont désormais gérées complètement.** L'éditeur de paramètres e-invoicing dispose d'une section *Valeurs par défaut (factures manuelles / sans modèle)* — activité (FEAA10, obligatoire pour la ligne F564230), type, LISIBLE oui/non, modèle PDF (intégré ou personnalisé) et langue — appliquée lorsqu'une facture n'a pas de modèle de document. Auparavant, l'activité obligatoire n'avait pas de source sur le chemin manuel (l'enregistrement échouait) et aucun PDF lisible n'était produit.
- **Motif d'exonération de TVA : le code et le libellé complet sont désormais enregistrés tous les deux.** Les tables de journal ne disposaient que d'une seule colonne courte : une facture exonérée / en autoliquidation (par ex. multi-vendeur) au libellé long échouait avec *value too long*. Les lignes de facture et la ventilation de TVA conservent à présent le **code** d'exonération (BT-121 / EXT-FR-FE-179 en ligne) et son **libellé** (BT-120 / EXT-FR-FE-178 en ligne) dans deux colonnes distinctes, disponibles pour le PDF lisible comme pour la déclaration d'e-reporting. Le récapitulatif de TVA et les lignes du détail de facture affichent désormais le code et son libellé complet sur une seconde ligne.
- **Les emplacements (placeholders) se résolvent désormais au téléversement et au traitement d'un fichier.** Deux problèmes : un téléversement UBL construisait le chemin côté navigateur en laissant `%APP_HOME%` / `%ENV%` littéraux ; et le chemin de sortie du LISIBLE / des pièces jointes développait `%PROCESS_HOME%` *après* `%APP_HOME%` / `%ENV%` (ceux imbriqués dans `%PROCESS_HOME%` revenaient donc non résolus) et ne développait jamais `%FILE_NAME%`. Les deux écrivaient dans des dossiers `%APP_HOME%/…` erronés. Les téléversements passent désormais par le serveur, et le résolveur de chemin de sortie développe correctement `%PROCESS_HOME%` (avec ses `%APP_HOME%` / `%ENV%` imbriqués), `%TEMPLATE%` et `%FILE_NAME%`.

## 2026.07.03.1 — 2026-07-03 \{#v2026-07-03-1\}

Joindre à la facture UBL une pièce déjà encodée en base64 dans le spool source.

### Nouveautés

- **Joindre une pièce déjà présente dans le spool.** Un document encodé en base64 dans le spool source peut maintenant être joint à la facture UBL en le mappant dans l'éditeur XSL. Une nouvelle section *Pièces jointes intégrées* relie le champ base64, un nom de fichier (texte fixe ou espace réservé `{Champ}` / `{Groupe/Champ}`, par ex. `{DocNumber}.pdf`), le type MIME et un code choisi dans la liste de référence de la plateforme (PJA, RIB, BON_LIVRAISON…) à une `cac:AdditionalDocumentReference` / `EmbeddedDocumentBinaryObject` (BT-125) — jusqu'à quatre par facture. La pièce se place au bon endroit dans le schéma et coexiste avec les pièces jointes déjà gérées (fichiers sur disque, PDF lisible généré). Jusqu'ici, une pièce jointe ne pouvait venir que d'un fichier sur disque ou du PDF généré, jamais d'un champ base64 déjà présent dans le spool.

---

## 2026.07.02.1 — 2026-07-02 \{#v2026-07-02-1\}

Valeurs constantes dans les mappages, et lot de corrections sur le scan / l'extraction BIP.

### Améliorations

- **Valeurs constantes dans les mappages.** Une valeur mappée encadrée par des accents graves — par exemple `` `EDI` `` — est écrite telle quelle au lieu d'être lue dans la source. Valable pour les champs d'extension, les notes et les attributs d'article ; utile pour les valeurs fixes propres à une plateforme.

### Corrections

- **Jobs BIP dans les deux statuts de fin.** Le scan et l'extraction retiennent maintenant les statuts `D` et `FD` (auparavant `D` seul).
- **Filtre de langue BIP corrigé.** Le filtre s'appuyait sur une colonne qui n'existe que dans la table de sortie PDF ; appliqué à la requête du XML d'entrée, il faisait échouer l'extraction. Il ne porte désormais que sur la requête de sortie, là où la colonne existe.
- **Scan BIP planifié : l'ancienneté est respectée.** Un scan lancé depuis l'interface web applique désormais le paramètre global `bipLookbackDays`, comme le faisait déjà la ligne de commande.
- **Fenêtre de date de soumission BIP.** Le filtre s'appuie enfin sur la bonne colonne, sur une fenêtre allant jusqu'au jour même inclus : les jobs soumis aujourd'hui ne sont plus écartés, et ceux hors fenêtre (dont le numéro peut être plus élevé) sont exclus.
- **Post-génération BIP.** Le numéro de job était mal isolé dans le nom de fichier, ce qui provoquait une erreur de format et empêchait le nettoyage côté JDE ; c'est corrigé.

---

## 2026.06.26.1 — 2026-06-26 \{#v2026-06-26-1\}

Les champs d'extension personnalisés à plusieurs valeurs passent la validation.

### Corrections

- **Champs d'extension personnalisés à plusieurs valeurs.** `ext:ExtensionContent` n'acceptant qu'un seul élément enfant, chaque champ est maintenant émis dans son propre bloc `ext:UBLExtension` / `ext:ExtensionContent` — sous forme d'élément simple sans préfixe ni `xmlns`, dans l'espace de noms du document, comme l'attendent les plateformes agréées.

---

## 2026.06.25.4 — 2026-06-25 \{#v2026-06-25-4\}

Le rapport de montée de version signale les modèles à corriger à la main, et Versions de fichiers sait comparer un fichier conservé à sa version upstream.

### Améliorations

- **La montée de version signale les modèles à corriger à la main.** Quand un modèle personnalisé (par ex. un `ubl:supplier-party` dérivé dans `ubl-defaults.xsl`) est conservé pendant une montée de version mais que le framework y a depuis ajouté un paramètre qu'il ne déclare pas, le rapport de montée de version le liste désormais sous *Correction manuelle requise* avec le `<xsl:param>` exact à ajouter — au lieu de compiler puis d'échouer à la génération de facture avec une erreur `XTSE0680` obscure.
- **Comparer un fichier avec sa version upstream.** Dans Versions de fichiers, un fichier conservé par la montée de version affiche désormais une ligne *upstream* — la version livrée, enregistrée en `<name>.upstream`. Comparez votre fichier actif avec elle pour voir précisément ce que la nouvelle version du framework a changé, et le fusionner à la main.

---

## 2026.06.25.3 — 2026-06-25 \{#v2026-06-25-3\}

Champs d'extension personnalisés (`ext:UBLExtensions`) — issue de secours pour des données sans équivalent EN 16931.

### Nouveautés

- **Champs d'extension personnalisés (UBLExtensions).** Une nouvelle section *Champs d'extension* dans l'éditeur XSL mappe jusqu'à huit valeurs source vers un bloc `ext:UBLExtensions` sur la facture — pour des données attendues par un partenaire mais sans équivalent standard EN 16931 (mode d'acheminement, adresse de copie de livraison, identifiants partenaires…). Chaque champ porte un nom d'élément, une valeur (chemin source ou modèle `{template}`) et les mêmes conditions d'émission facultatives que les attributs d'article. Le bloc est écrit en tête de facture, comme l'exige le schéma UBL, et n'est produit que si au moins un champ est renseigné. Vide par défaut : les factures existantes restent inchangées. Les données placées ici sortent du modèle EN 16931 — privilégier le champ standard lorsqu'il existe (référence comptable BT-19, référence acheteur BT-10) et vérifier que la plateforme destinataire lit bien l'extension.

---

## 2026.06.25.2 — 2026-06-25 \{#v2026-06-25-2\}

Suppression des zéros inutiles dans le PDF, réglable par modèle.

### Nouveautés

- **Interrupteur *Zéros inutiles* sur le modèle PDF.** Un nouvel interrupteur *Zéros inutiles* dans le concepteur de modèle PDF retire les décimales à zéro des montants, prix unitaires et quantités : un montant entier s'affiche `23` au lieu de `23,00`, et un prix unitaire `23,0000` devient `23`. Désactivé par défaut — l'affichage reste à deux décimales pour les montants et quatre pour les prix. Réglé par modèle, il s'applique au tableau des lignes, au bloc des totaux et aux PDF lisible et à l'écran.

---

## 2026.06.25.1 — 2026-06-25 \{#v2026-06-25-1\}

Pays d'origine et code article vendeur dans le détail facture et le PDF, plus une montée de version plus fluide.

### Nouveautés

- **Pays d'origine en ligne de facture (BT-159).** L'éditeur de facture propose un champ pays d'origine par ligne, à côté du code de classification. Le code ISO part dans l'UBL ; le détail de la facture et tous les PDF — aperçu, traitement par lot et notification — affichent le nom complet du pays, résolu depuis la liste des pays partagée. Un interrupteur dans la mise en page des lignes du PDF en pilote l'affichage.
- **Version du schéma de classification en ligne (BT-158-2).** Une ligne peut désormais porter la version de son schéma de classification, à côté de l'identifiant de liste ; elle apparaît entre crochets après le listID partout où la classification est affichée.
- **Code article du vendeur dans le PDF (BT-155).** Le code article du vendeur s'imprime dans le détail de ligne, entre la référence acheteur et l'identifiant standard, avec son propre interrupteur d'affichage.

### Améliorations

- **SIREN acheteur reconstitué depuis le numéro de TVA.** Quand une fiche client ne porte pas de SIREN mais comporte un numéro de TVA français, le SIREN en est déduit pour que l'identifiant légal et l'adresse électronique de l'acheteur restent renseignés.
- **Pays d'origine résolu depuis la liste de référence partagée.** La valeur source du pays est désormais résolue via la liste canonique des pays au moment de la production de la facture, au lieu d'une copie de la liste figée dans chaque déploiement. Corriger un libellé dans la liste s'applique partout, sans nouvelle sauvegarde.
- **Adresses plus nettes dans le PDF.** Les adresses du vendeur, du client, de l'agent et de la livraison sont construites ligne à ligne : une partie dont l'adresse commence sur la deuxième ligne de voie n'imprime plus de ligne vide en tête. L'adresse de livraison affiche aussi son complément de voie.
- **Montées de version plus fluides.** Avant d'importer les nouvelles fonctions, la montée de version aligne l'en-tête de feuille de style de chaque déploiement sur la version de langage et les espaces de noms livrés ; les modèles qui s'appuient sur de nouvelles fonctionnalités du framework compilent alors sans retouche manuelle.

### Corrections

- **Plus de blocs d'adresse vides en ligne de facture.** Une ligne qui ne porte qu'une date de livraison n'émet plus d'élément de lieu ou de pays vide, et les adresses de ligne ne retombent plus sur un pays par défaut qui n'a pas lieu d'être.
- **L'en-tête de livraison ne se répète plus.** Dans le PDF, une ligne sans groupe de livraison n'efface plus le fil d'Ariane, évitant que la ligne suivante qui en porte un ré-imprime l'en-tête de livraison.
- **Notes sur plusieurs lignes recomposées en un seul paragraphe.** Une note répartie sur plusieurs lignes source peut être rassemblée en un paragraphe unique au lieu de produire une note par ligne.

---

## 2026.06.23.1 — 2026-06-23 \{#v2026-06-23-1\}

Pays d'origine et classification produit en ligne, motifs de remise et de frais par défaut, remise de ligne dérivée d'un pourcentage seul.

### Nouveautés

- **Pays d'origine et classification produit en ligne (BT-158 / BT-159).** Deux nouveaux champs dans la section *Lignes* de l'éditeur XSL pointent vers le chemin source par ligne. Un onglet *Pays & classification* dans Valeurs par défaut UBL indique le format côté source — code ISO, libellé français ou libellé anglais — et le moteur résout la valeur via la liste canonique des pays au moment de la sauvegarde. Pas de table de correspondance parallèle : si un libellé est erroné, on le corrige une fois dans la liste. Code de classification, listID et version par défaut prennent le relais quand le chemin par ligne renvoie vide.
- **Motifs de remise et de frais par défaut (BR-42 / BR-43).** Nouvel onglet *Remises / charges* dans Valeurs par défaut UBL : on saisit un libellé et un code motif appliqués quand le chemin du modèle client renvoie vide. `ChargeIndicator` choisit la paire — remise ou frais — donc une seule configuration couvre les deux cas.
- **Remise de ligne dérivée d'un pourcentage seul.** Quand la source ne porte que le pourcentage, le moteur déduit le montant et la base à partir du net de la ligne. Les combinaisons mixtes fonctionnent aussi : pourcentage + base déduit le montant, pourcentage + montant déduit la base. Le signe en suffixe JDE (`25.00-`) est normalisé automatiquement.
- **Mode remise de ligne sans groupe.** Quand les champs de remise se trouvent directement sur la ligne, sans élément parent, on pointe le TAG *Item AC* sur `.` (ou on le laisse vide) et le moteur itère la ligne elle-même.
- **Identifiant article vendeur enfin émis (BT-155).** Le TAG était déclaré mais n'arrivait pas dans la sortie. Le moteur le rend désormais entre le libellé article et le pays d'origine, conformément à la séquence UBL 2.1.

### Améliorations

- **La montée de version propage les nouveaux symboles du framework dans les modèles déployés.** Deux nouvelles passes durant la migration ferment le trou qui imposait de modifier chaque modèle client à la main après chaque version. Premier passage : les nouvelles variables, fonctions et templates de la référence livrée sont ajoutées au fichier de valeurs par défaut du déploiement, sans toucher aux valeurs saisies par l'opérateur. Second passage : pour chaque modèle par document, les doublons hérités de ces mêmes noms sont retirés du bloc d'override, laissant la version importée gagner la précédence XSL. Il suffit désormais de relancer la migration pour réparer les modèles qui ne compilaient plus depuis que le corps du framework s'est mis à appeler de nouveaux symboles ou de nouveaux paramètres de template.
- **Pied de page TVA encapsulé par taux.** Le convertisseur PDF→XML ouvre désormais un wrapper neuf pour chaque pied de page de taux, ce qui permet à une facture multi-taux de produire un bloc par taux plutôt qu'une suite plate de champs. Les factures à taux unique conservent un seul bloc.

### Corrections

- **Plus de ligne perdue après un saut de page (PDF→XML).** JDE n'émet le préambule de livraison qu'une fois par bloc BL ; les pages de continuation enchaînent les lignes sans nouveau préambule. Le wrapper de livraison est désormais reconduit d'une page à l'autre et n'est relâché que par les totaux ou le pied de page TVA, donc les lignes de continuation restent dans le bon parent.
- **Montants PDF à séparateurs ambigus (`1.682.28`).** Quand le même caractère sert de séparateur de milliers et de décimal — ou après la conversion française virgule → point qui transforme `1,682.28` en `1.682.28` — la chaîne se réduit désormais à `1682.28`. Le dernier `.` est conservé comme décimal, les précédents sautent.
- **Règle Schematron locale `BR-NOMAUBL-01` retirée.** La condition « avoir → facture antérieure référencée » est désormais imposée par `BR-FR-CO-05` dans le pack Flux2 v1.3.1 du 2026-04-30. Le doublon local disparaît ; le fichier reste en place comme structure d'accueil pour de futures règles maison.

---

## 2026.06.22.5 — 2026-06-22 \{#v2026-06-22-5\}

Authentification unique (SSO) via OIDC — l'IdP vérifie l'identité, NomaUBL garde la main sur les rôles, les permissions et les filtres de lignes.

### Nouveautés

- **Authentification unique (SSO) via OIDC.** Le champ *Auth Mode* du modèle Global bascule l'écran de connexion entre `internal`, `oidc` (SSO seul) et `both` (bouton SSO au-dessus du formulaire local). La configuration du fournisseur d'identité tient dans un nouveau modèle système *oidc* (URL de l'émetteur, identifiants client, URI de retour, scopes, correspondance des claims, création automatique des comptes avec un rôle par défaut) — créé automatiquement à l'installation et à la montée de version, ou en un clic via le bouton **+ Add OIDC** dans l'en-tête du gestionnaire de configuration. Les utilisateurs sont identifiés sur leur adresse e-mail : une liste de domaines autorisés cantonne la connexion à un ou plusieurs tenants, et un contrôle du claim `hd` Google Workspace empêche un Gmail personnel d'usurper une adresse Workspace. Pour les comptes créés automatiquement, un identifiant court est dérivé de la partie locale de l'adresse (convention JDE, 10 caractères). Quand un utilisateur est connecté via OIDC, son profil passe en lecture seule (onglet *Sécurité* masqué, champs d'identité non modifiables) — le mot de passe se gère côté fournisseur d'identité. Rôles, permissions et filtres de lignes restent pilotés depuis NomaUBL : le fournisseur ne fait que vérifier l'identité.

---

## 2026.06.21.5 — 2026-06-21 \{#v2026-06-21-5\}

### Corrections

- **Graphique du volume quotidien lisible sur toutes les périodes.** Les barres sont maintenant bornées entre 3 et 36 px : les périodes de 7 jours n'affichent plus d'énormes pavés, les longues périodes plus de traits inutiles. Les étiquettes de dates passent en HTML et restent nettes, sans se transformer en tirets illisibles quand le SVG est étiré.

---

## 2026.06.21.4 — 2026-06-21 \{#v2026-06-21-4\}

### Corrections

- **Les rôles en lecture seule peuvent à nouveau consulter les factures.** Le détail de facture utilise le point d'accès XML UBL pour afficher les onglets *Parties* / *Lignes* / *Récap TVA* / *Notes* ; le protéger par `invoice.download` masquait tous les onglets pour un rôle dépourvu de cette action. Le point d'accès est maintenant accessible en lecture (toujours protégé par le filtre de lignes et la visibilité) — seul le bouton explicite **Télécharger UBL** reste verrouillé par `invoice.download`.

---

## 2026.06.21.3 — 2026-06-21 \{#v2026-06-21-3\}

### Nouveautés

- **Nouvelle permission d'action `invoice.create`.** L'action rapide **Nouvelle facture** du tableau de bord est maintenant protégée par sa propre autorisation — un rôle sans `invoice.create` ne voit plus le bouton, et le point d'accès serveur refuse l'appel.

### Corrections

- **La table de réinitialisation de mot de passe apparaît dans *Paramètres → db-nomaubl*.** La section *Auth* a un nouveau champ *Auth · Password resets* (par défaut `F564255`) pour que la validation du schéma cesse de la signaler comme table manquante. Voir [Tables de base de données](./references/database-tables.md).

---

## 2026.06.21.2 — 2026-06-21 \{#v2026-06-21-2\}

### Nouveautés

- **Visibilité des cartes du Tableau de bord par rôle.** Chaque widget du tableau de bord est maintenant une permission individuelle. *Paramètres → Rôles → Accès* propose une liste **Cartes du tableau de bord** sous *Pages autorisées* — liste vide : toutes les cartes s'affichent (comportement actuel), liste non vide : liste blanche stricte. Les cartes masquées sont ignorées côté serveur ; leurs requêtes ne s'exécutent pas et leurs données ne sortent pas.
- **Volume quotidien — barres empilées par statut.** Le tracé en ligne unique est remplacé par des barres empilées par jour, décomposées en *Approuvées* / *En cours* / *Erreurs IT* / *Erreurs Métier*. Survoler un jour affiche une info-bulle avec le détail par statut.

### Corrections

- **La carte *PA round-trip* du tableau de bord ne crashe plus pour les rôles avec un filtre de lignes sur une colonne d'en-tête** (par exemple le nom client). La requête uniquement basée sur la table cycle de vie filtre maintenant les lignes éligibles via un `EXISTS` sur la table d'en-tête au lieu d'injecter la clause de filtre dans une requête qui n'en connaissait pas les colonnes.

---

## 2026.06.21.1 — 2026-06-21 \{#v2026-06-21-1\}

### Nouveautés

- **Réinitialisation du mot de passe en libre service.** Un lien *Mot de passe oublié ?* sur l'écran de connexion ouvre une fenêtre qui demande le nom d'utilisateur et l'e-mail ; s'ils correspondent à un compte actif, l'utilisateur reçoit un lien à usage unique valide 60 minutes qui mène à une page où choisir un nouveau mot de passe. Nécessite la configuration SMTP dans le modèle `global`.

---

## 2026.06.21 — 2026-06-21 \{#v2026-06-21\}

Refonte des rôles : filtres de lignes, permissions d'action granulaires, éditeur en 4 onglets, page *API Reference* indépendante. Côté connecteur PA : endpoints de réception livrés par défaut. Côté UBL : adresse électronique fournisseur (BT-34) configurable et bascule Schematron par type de document.

### Nouveautés

- **Filtres de lignes par rôle.** Un rôle peut être limité à un sous-ensemble de factures (et de lignes du journal de traitement, des erreurs d'intégration et de l'e-reporting) en choisissant une colonne et une ou plusieurs valeurs dans *Paramètres → Rôles → Périmètre données*. Cas d'usage typique : un rôle client externe qui ne voit que les factures émises pour sa propre clé alpha (UHALKY). Le filtre s'applique aux vues liste, au tableau de bord, à chaque point d'accès ligne à ligne (cycle de vie, lignes, téléchargement XML, rendu PDF, push de statut, suppression, renvoi, e-mail) ainsi qu'au flux PDF généré. Une ligne masquée renvoie la même réponse « non trouvé » que la donnée réellement absente, pour ne pas révéler l'existence d'une facture interdite. Plusieurs filtres sur la même colonne se combinent en OU, sur des colonnes différentes en ET — en parallèle des sociétés autorisées.
- **Permissions d'action granulaires.** L'ancien indicateur tout-ou-rien *lecture seule* est remplacé par une liste blanche par action dans *Paramètres → Rôles → Actions*. Les actions Factures, E-Reporting et Intégration sont regroupées par vue ; chaque bouton s'autorise ou se bloque indépendamment — modifier, supprimer, renvoyer, pousser un statut (avec sous-permissions séparées pour les onglets *PA* et *Base de données* du modal *Statut*), valider l'UBL, télécharger l'UBL, actions prédéfinies, actions personnalisées, e-mail PDF, génération / renvoi de lots e-reporting, et déclenchement des jobs d'intégration (*Fetch Received* / *Import Statuses* / *Retrieve Statuses*). Les rôles existants conservent leur comportement : sans liste blanche, tout reste autorisé ; activer le mode liste blanche pré-coche toutes les actions pour que rien ne change tant que l'opérateur n'en décoche pas explicitement.
- **Éditeur de rôles réorganisé en onglets thématiques.** L'unique panneau *Permissions* est découpé en **Accès** (pages + fonctionnalités), **Actions** (la nouvelle liste blanche), **Périmètre données** (sociétés + filtres de lignes) et **Membres**. Le nom et la description du rôle restent visibles au-dessus de la barre d'onglets ; *Enregistrer* / *Annuler* s'affichent sur chaque onglet d'édition.
- **API Reference est une page à part entière.** Le lien de la barre latérale vers `/api/docs` n'est plus rattaché à la permission de la *Référence des statuts* — un rôle peut donc obtenir l'accès à l'application sans voir le catalogue brut des points d'accès, utile pour un utilisateur externe à qui l'on remet une connexion qui ne doit pas exposer l'API. Les nouveaux rôles admin reçoivent automatiquement la page `apireference` ; les admins existants la reçoivent à la prochaine initialisation.
- **`fetch-received-list` et `fetch-received` livrés dans le connecteur par défaut `pa-default`.** Les nouvelles installations du connecteur fourni proposent les deux points d'entrée pour la réception aux côtés des six points sortants existants, avec des schémas d'URL standards (`/api/v1/sale/received-invoices?since={{since}}` et `/api/v1/sale/received-invoices/{{uuid}}`). Les chemins réels dépendent de chaque PA — l'opérateur confirme l'URL une fois et le résolveur trouve les points d'entrée par leur nom. **Les installations existantes** ne sont pas migrées automatiquement : `ConfigMerger` ignore les api-connectors propriétaires du client en bloc afin de préserver les modifications d'URL et d'authentification ; il faut ajouter les deux lignes manuellement via le bouton **+ Ajouter un endpoint** (en reprenant les noms et schémas d'URL ci-dessus).
- **Adresse électronique du fournisseur (BT-34) configurable.** Certains clients utilisent un identifiant de routage Peppol / facturation électronique différent du SIREN. Le panneau *Sociétés fournisseuses* dans *Valeurs par défaut UBL* a maintenant un champ BT-34 par société, et l'éditeur XSL expose une variable `TAG_SUPPLIER_ENDPOINT` pour une surcharge par document. Ordre de résolution à l'émission : variable du document → adresse configurée dans les *Valeurs par défaut UBL* → SIREN. Les installations sans configuration gardent le comportement actuel (le SIREN est émis comme adresse électronique).
- **Bascule Schematron par type de document.** L'éditeur *Types de documents* a maintenant une case *Schematron* à côté de *Send to PA* / *Keep UBL* / *Keep PDF*. Quand elle est décochée pour un code, le contrôle Schematron EN 16931 / CTC-FR est ignoré pour les factures résolues à ce type et aucune ligne n'arrive dans `F564236`. Par défaut, la validation est activée pour `B2B` et `B2G` (champ d'application CTC-FR) et désactivée pour `B2BINT`, `B2C`, `OUTOFSCOPE`, `ARCHIVEONLY`, `DOCUMENT` (hors champ — les règles françaises génèrent des faux positifs sur les transactions B2C ou les acheteurs étrangers). Les clients peuvent basculer la case par code selon leurs besoins. Les lignes *document-types* à 7 champs existantes prennent la valeur par défaut par code, ce qui évite une migration manuelle après mise à jour.
- **Le pipeline UBL lit *document-types* pour `sendToPA` et `validate`.** Les factures déposées au format UBL (interface *Traiter le document*, flux de réception, `fetch-received`) résolvent maintenant leur code de type via la propriété `processingType.default` du modèle de document, recherchent la ligne correspondante dans *document-types* et utilisent la valeur pour piloter à la fois le filtre Schematron et la valeur `sendToPA` par défaut. Les surcharges explicites de l'appelant (interface / CLI `sendToPA=Y/N`) restent prioritaires. Une ligne INFO par appel indique la ligne utilisée, à la manière de `AUTO_RESOLVE` dans le pipeline XML.

### Corrections

- **Le bouton *Tout décocher* de l'onglet *Actions* décoche enfin toutes les cases.** Le double sens d'une liste d'actions vide (héritage *tout autorisé* vs intention explicite *rien autorisé*) faisait qu'un clic remettait le rôle en mode tout-autorisé et re-cochait silencieusement toutes les cases. Le mode liste blanche est maintenant piloté par un interrupteur dédié, ce qui garantit que l'état affiché correspond toujours à ce qui sera enregistré.

---

## 2026.06.17 — 2026-06-17 \{#v2026-06-17\}

PDF de notification au bon modèle, deux correctifs de précision, et une vraie pagination serveur sur le journal de traitement.

### Corrections

- **Les PDF de notification utilisent maintenant le modèle de document configuré.** Les PDF joints aux notifications sortantes et aux e-mails étaient rendus avec la mise en page par défaut fournie, quel que soit le `pdfTemplate` configuré par modèle de document (`vrc_pro`, `cdn_facture`, …). Le dispatcher de notifications résout maintenant le modèle enregistré sur la facture et l'applique au PDF joint, comme le fait déjà l'interface *Traiter le document*. Les installations sans modèle par document conservent le rendu actuel.
- **Les remises de ligne avec un point en tête ne déclenchent plus BR-DEC-24.** Les champs JDE livrés sous la forme `.4700` (sans partie entière) étaient émis dans le montant de la remise de ligne (BT-136) sous la forme `0.4700` — quatre décimales, fatal sous la règle Schematron française BR-DEC-24 (« 2 décimales au maximum »). La fonction de normalisation des montants applique maintenant le plafond de 2 décimales aux valeurs commençant par un point : `.4700` devient `0.47`. Même correction appliquée à la fonction prix (6 décimales) pour cohérence.
- **La vue groupée du journal de traitement affiche chaque job de la fenêtre chargée.** Les traitements longs (un `START` → des milliers d'événements intermédiaires → un `END`) étaient affichés comme une seule ligne `? → END` quand le `START` sortait de la tranche serveur. Trois plafonnements s'additionnaient : le serveur limitait silencieusement à 500 événements, le client n'en demandait que 5 000 même si plus étaient disponibles, et le regroupement côté client générait une ligne orpheline par événement intermédiaire en l'absence de `START`. Les trois sont corrigés — plafond serveur porté à 200 000, requête groupée client portée à 100 000, et les événements intermédiaires sans `START` sont maintenant regroupés en une seule ligne par job qui contient toutes les étapes.

### Nouveautés

- **Pagination côté serveur sur la vue à plat du journal de traitement.** La vue à plat (non groupée) pagine maintenant côté backend au lieu de se limiter à la tranche chargée. Les opérateurs avec un historique long peuvent parcourir tous les événements sans relancer les filtres. La vue groupée garde son chargement en une fenêtre unique (plafonné à 100 000 événements), car les jobs sont reconstitués côté client.
- **Pied de pagination sur la vue groupée du journal de traitement.** La liste des jobs groupés a maintenant un pied de page collant avec un sélecteur de taille de page (25 / 50 / 100 / 200), des boutons première / précédente / suivante / dernière et un indicateur de position. La taille de page est conservée entre rechargements.

### Améliorations

- **Les listes de modèles de document sont triées par ordre alphabétique.** Partout où une liste de modèles de document apparaît dans l'interface — barre latérale de l'éditeur de documents, sélecteur utilisé par *Traiter le document* / *Validation UBL* / *Extraire depuis BIP*, sélecteur de surcharge par société de l'éditeur global, lignes de l'éditeur *Récupérer les documents*, fenêtre de l'éditeur XSL pour les échantillons de connecteurs — l'ordre est maintenant alphabétique. Auparavant ils suivaient l'ordre d'enregistrement dans le fichier de configuration, qui devenait illisible au fil des ajouts.
- **Diagnostic de configuration pour le mode `AUTO`.** Le traitement en mode `AUTO` écrit maintenant deux lignes de log INFO par document traité, qui indiquent le code de type de traitement résolu, la table de mapping utilisée et le mode effectif retenu (`UBL` / `BURST` / `SINGLE` / `BOTH`). Permet de diagnostiquer les cas « AUTO a lancé le mauvais mode » en une ou deux lectures du journal de traitement, au lieu de deviner ce que la configuration du client a produit.

---

## 2026.06.16 — 2026-06-16 \{#v2026-06-16\}

Message d'erreur clair quand un sous-modèle RTF BI Publisher manque, et générateur de manifest pour l'adaptateur PDF → XML.

### Corrections

- **Message d'erreur clair quand un sous-modèle RTF BI Publisher manque.** La génération PDF affichait un simple `ERROR RUN PDF java.util.EmptyStackException` quand le parseur RTF de XDO rencontrait un `IMPORT` non résolvable — typiquement un sous-modèle (`sb_*_header.rtf`, `_footer.rtf`, `_detailslivre.rtf`, `_lettre_sub.rtf`, …) absent de l'environnement client, ou un séparateur de chemin spécifique à l'OS. Le code attrape maintenant la `RuntimeException` sous-jacente et ajoute une ligne d'indice qui demande à l'opérateur de vérifier les chemins `IMPORT` du RTF principal et que chaque sous-modèle référencé existe sur l'hôte. S'applique au mode `SINGLE` comme au chemin de traitement standard.
- **L'adaptateur PDF → XML regroupe maintenant les factures d'un PDF batch.** Quand un seul PDF JDE contient N factures (impression batch), le convertisseur regroupait tout dans une seule enveloppe `<On_Payment_Terms_S3>`. Il ferme maintenant l'enveloppe courante et en ouvre une nouvelle quand le flux d'en-tête `SI=3` reprend après une section de récap TVA (`SI=7`) ; chaque facture du batch a son propre bloc XML adressable. Les totaux courants par page `SI=5` ne déclenchent plus de bornage, ce qui corrige la fragmentation des factures multi-pages. Vérifié sur un PDF de 13 920 pages qui portait 2 132 factures : une enveloppe par facture, lignes et totaux contenus.

### Nouveautés

- **Génération de manifest pour l'adaptateur PDF → XML.** Nouveau mode CLI `-pdfManifest <input.pdf> <output.manifest.xml>` (aussi `nomaubl.sh pdf-manifest` / `nomaubl.cmd pdf-manifest`) qui analyse le PDF et produit un manifest XML à la forme JDE, pour le cas où le client n'a pas d'échantillon XML JDE natif de la même version de programme R à fournir à `-pdf2xml`. Les noms d'éléments inférés utilisent le texte des étiquettes RC imprimées quand disponible, et l'alias DD OWObject en repli ; le client édite le fichier pour donner des noms parlants, puis le réutilise comme 3ᵉ argument de `-pdf2xml`. L'élément racine est dérivé du nom de fichier PDF (convention JDE de spool) et les champs texte multi-lignes gardent un seul nom d'élément sur toutes leurs lignes via un cache persistant.

---

## 2026.07.05.1 — 2026-07-05 \{#v2026-07-05-1\}

### Nouveautés

- **Joindre le PDF généré comme pièce jointe classique (PJA), et non plus seulement comme LISIBLE.** Le paramètre Pièce jointe gagne un mode *generate* qui produit le PDF de la facture avec le concepteur de modèle PDF et le joint comme PJA (`cac:AdditionalDocumentReference`) au lieu de la copie lisible LISIBLE. À utiliser lorsque le PDF conçu n'est pas un lisible conforme aux règles françaises : désactivez le LISIBLE et joignez plutôt le PDF en PJA. Le LISIBLE, `create` (RTF/BIPublisher) et `attach` (PDF existant du répertoire d'entrée) restent inchangés.
- **Références aux factures antérieures, étendues.** Une facture peut référencer plusieurs factures antérieures (BG-3, 0..n) via un nouveau mappage *Factures antérieures — répété* dans l'éditeur XSL (un `cac:BillingReference` par occurrence, avec une date d'émission facultative), et une ligne de facture peut porter sa propre référence à une facture antérieure (EXT-FR-FE-136) — le tout au bon endroit dans le schéma.
- **Motif d'exonération de TVA mappable depuis le spool (BT-121 / BT-120), aux niveaux document et ligne.** Le code et le libellé du motif d'exonération peuvent maintenant être mappés depuis un champ source — pour chaque ventilation de TVA et chaque ligne — au lieu d'une seule valeur par défaut par catégorie, ce qu'exigent les factures exonérées / en autoliquidation / à l'export / intracommunautaires. Une nouvelle correspondance *Code source → code VATEX* dans les valeurs par défaut UBL normalise aussi un code source brut vers un code VATEX autorisé (les codes non reconnus sont conservés, un code vide retombe sur la valeur par défaut de la catégorie).
- **Code de catégorie de TVA en ligne (BT-151) mappable depuis le spool**, résolu via le même mappage de catégorie que le BT-118 au niveau document (auparavant seul le taux BT-152 était réglable par ligne). Une ligne sans TVA propre hérite de la TVA du document (ligne → document → valeur par défaut).
- **Le PDF lisible reprend désormais toutes les données de la facture.** Conformément à la règle imposant que le lisible contienne l'intégralité des données de la facture structurée, le PDF affiche à présent de nombreux champs jusqu'ici absents : références à la facture antérieure (BT-25/BT-26), période de facturation (BT-73/BT-74), date d'exigibilité de la TVA (BT-7), référence de projet (BT-11), facture antérieure en ligne (EXT-FR-FE-136) et motif d'exonération en ligne (EXT-FR-FE-178/179), date de livraison effective (BT-72), informations de paiement complémentaires (BT-83/BT-85/BT-89), acompte (BT-113) et arrondi (BT-114), TVA en devise étrangère (BT-6/BT-111), et adresses électroniques et identifiants des parties (BT-28/BT-29/BT-32/BT-34/BT-46/BT-49). Chaque donnée est activable dans le modèle PDF.

### Mises à jour

- **Règles de contrôle France CTC portées en V1.4.0 du FNFE (XP Z12-012, 30 juin 2026).** Les schematrons UBL Flux 2 et EXTENDED-CTC-FR, ainsi que les listes de codes EN 16931, sont alignés sur la publication du 30 juin 2026 ; elle corrige notamment le chemin XPath de la facture antérieure en ligne (EXT-FR-FE-136) et ajoute `RECAPITULATIF_COTRAITANCE` aux pièces jointes admises. Les règles standard deviennent obligatoires à l'émission à compter du 1er septembre 2026.
- **L'avertissement `UBL-CR-001` (« une facture UBL ne devrait pas contenir d'extensions ») n'est plus remonté** — il se déclenchait sur les champs `ext:UBLExtensions` que NomaUBL émet volontairement. Filtré à la collecte des résultats ; le schematron standard reste intact, une mise à jour ne le réintroduira donc pas.
- **Les déclarations d'e-reporting portent désormais le taux de TVA et le motif d'exonération.** Chaque ventilation de TVA du fichier d'e-reporting généré comporte à présent le taux de TVA (TT-57), le motif d'exonération (TT-58) et son code (TT-59), regroupés sous la catégorie de TVA ; ils étaient auparavant absents.
- **Les listes déroulantes de recherche s'adaptent à leur contenu.** Les listes (motifs d'exonération de TVA, types de note, types de document et tous les autres sélecteurs de recherche) s'élargissent pour afficher l'option la plus longue au lieu d'être tronquées à la largeur du champ, dans la limite du bord de l'écran.
- **Liste des types de référence de document complétée (UNTDID 1153 / BT-128-1).** Le sélecteur de code de référence de document propose désormais l'intégralité des codes UNTDID 1153 (818 codes), avec libellés français et anglais, au lieu d'un sous-ensemble restreint. Les installations existantes récupèrent les nouveaux codes via la mise à niveau de la configuration.

### Corrections

- **La référence à la facture précédente ne casse plus le schéma.** `cac:OrderReference` précède désormais `cac:BillingReference` (`InvoicePeriod → OrderReference → BillingReference`) ; auparavant, lorsqu'une référence de commande (BT-13) et une référence à la facture précédente (BT-25/BT-26) étaient toutes deux présentes, leur ordre était inversé et le schéma UBL le rejetait (`cvc-complex-type.2.4.a`). Les modèles déployés reçoivent le correctif en relançant la montée de version.
- **La modification d'une facture dans l'éditeur manuel ne supprime plus les données qu'il n'affiche pas.** Tout élément UBL sans champ dédié dans l'éditeur — réf. à la facture antérieure (BT-25/BT-26), réf. en ligne (EXT-FR-FE-136), devise de comptabilisation de la TVA (BT-6), date d'exigibilité (BT-7), arrondi (BT-114) ou mandat/RUM (BT-89) — est désormais conservé à l'enregistrement au lieu d'être perdu, réinséré à la bonne position dans le schéma.
- **Éditeur manuel : le motif d'exonération de TVA est conservé et réglable par ligne.** Une ventilation de TVA ne portant que le libellé du motif d'exonération (BT-120) sans code (par ex. un jeton de routage multi-vendeur) était perdue à l'ouverture de la facture dans l'éditeur manuel — le champ apparaissait vide. Il est désormais relu et conservé à l'enregistrement. L'éditeur de ligne dispose aussi d'un champ d'exonération de TVA (code + motif, EXT-FR-FE-179/178) : l'exonération se règle par ligne, et non plus seulement par ventilation.
- **Les factures créées manuellement / sans modèle sont désormais gérées complètement.** L'éditeur de paramètres e-invoicing dispose d'une section *Valeurs par défaut (factures manuelles / sans modèle)* — activité (FEAA10, obligatoire pour la ligne F564230), type, LISIBLE oui/non, modèle PDF (intégré ou personnalisé) et langue — appliquée lorsqu'une facture n'a pas de modèle de document. Auparavant, l'activité obligatoire n'avait pas de source sur le chemin manuel (l'enregistrement échouait) et aucun PDF lisible n'était produit.
- **Motif d'exonération de TVA : le code et le libellé complet sont désormais enregistrés tous les deux.** Les tables de journal ne disposaient que d'une seule colonne courte : une facture exonérée / en autoliquidation (par ex. multi-vendeur) au libellé long échouait avec *value too long*. Les lignes de facture et la ventilation de TVA conservent à présent le **code** d'exonération (BT-121 / EXT-FR-FE-179 en ligne) et son **libellé** (BT-120 / EXT-FR-FE-178 en ligne) dans deux colonnes distinctes, disponibles pour le PDF lisible comme pour la déclaration d'e-reporting. Le récapitulatif de TVA et les lignes du détail de facture affichent désormais le code et son libellé complet sur une seconde ligne.
- **Les emplacements (placeholders) se résolvent désormais au téléversement et au traitement d'un fichier.** Deux problèmes : un téléversement UBL construisait le chemin côté navigateur en laissant `%APP_HOME%` / `%ENV%` littéraux ; et le chemin de sortie du LISIBLE / des pièces jointes développait `%PROCESS_HOME%` *après* `%APP_HOME%` / `%ENV%` (ceux imbriqués dans `%PROCESS_HOME%` revenaient donc non résolus) et ne développait jamais `%FILE_NAME%`. Les deux écrivaient dans des dossiers `%APP_HOME%/…` erronés. Les téléversements passent désormais par le serveur, et le résolveur de chemin de sortie développe correctement `%PROCESS_HOME%` (avec ses `%APP_HOME%` / `%ENV%` imbriqués), `%TEMPLATE%` et `%FILE_NAME%`.

## 2026.07.03.1 — 2026-07-03 \{#v2026-07-03-1\}

### Nouvelles fonctionnalités

- **Joindre une pièce déjà présente dans le spool.** Un document encodé en base64 dans le spool source peut maintenant être joint à la facture UBL en le mappant dans l'éditeur XSL. Une nouvelle section *Pièces jointes intégrées* relie le champ base64, un nom de fichier (texte fixe ou espace réservé `{Champ}` / `{Groupe/Champ}`, par ex. `{DocNumber}.pdf`), le type MIME et un code choisi dans la liste de référence de la plateforme (PJA, RIB, BON_LIVRAISON…) à une `cac:AdditionalDocumentReference` / `EmbeddedDocumentBinaryObject` (BT-125) — jusqu'à quatre par facture. La pièce se place au bon endroit dans le schéma et cohabite avec les pièces jointes déjà gérées (fichiers sur disque, PDF lisible généré), le tout regroupé. Jusqu'ici, on ne pouvait joindre qu'un fichier présent sur le disque ou le PDF lisible, jamais une pièce déjà encodée dans le spool.

## 2026.07.02.1 — 2026-07-02 \{#v2026-07-02-1\}

### Améliorations

- **Valeurs constantes.** Dans l'éditeur XSL, une valeur entourée d'accents graves — par ex. `` `EDI` `` — est écrite telle quelle au lieu d'être lue dans la source. Valable pour les champs d'extension, les notes et les attributs d'article ; utile pour les valeurs fixes propres à une plateforme.

### Corrections

- **Jobs BIP : les deux statuts de fin sont pris en compte.** La recherche des jobs et l'extraction retiennent maintenant les statuts `D` et `FD` (auparavant `D` seul).
- **Filtre de langue BIP.** La colonne `XOOMRLANG` n'existe que dans la table de sortie PDF ; appliqué à tort à la requête du XML d'entrée, le filtre faisait échouer l'extraction. Il ne porte désormais que sur la requête de sortie.
- **Recherche BIP planifiée : l'ancienneté est respectée.** Une recherche lancée depuis l'interface web tient maintenant compte du paramètre global `bipLookbackDays` (jours d'ancienneté), comme le faisait déjà la ligne de commande.
- **Fenêtre de date de soumission BIP.** Le filtre s'appuie enfin sur la bonne colonne de date, sur une fenêtre allant jusqu'au jour même inclus : les jobs soumis aujourd'hui ne sont plus écartés, et ceux hors fenêtre (dont le numéro peut être plus élevé) sont exclus.
- **Post-génération BIP.** Le numéro de job était mal isolé dans le nom du fichier, ce qui provoquait une erreur de format et empêchait le nettoyage côté JDE ; c'est corrigé.

## 2026.06.26.1 — 2026-06-26 \{#v2026-06-26-1\}

### Corrections

- **Champs d'extension personnalisés à plusieurs valeurs.** `ext:ExtensionContent` n'acceptant qu'un seul élément enfant, chaque champ est maintenant émis dans son propre bloc `ext:UBLExtension`/`ext:ExtensionContent`, sous forme d'élément simple — sans préfixe ni `xmlns`, dans l'espace de noms du document — comme l'attendent les plateformes agréées.

## 2026.06.25.4 — 2026-06-25 \{#v2026-06-25-4\}

### Améliorations

- **La montée de version signale les modèles à corriger à la main.** Lorsqu'un modèle personnalisé (par ex. un `ubl:supplier-party` dérivé dans `ubl-defaults.xsl`) est conservé pendant une montée de version mais que le framework y a depuis ajouté un paramètre qu'il ne déclare pas, le rapport de montée de version le liste désormais sous « Correction manuelle requise » avec le `<xsl:param>` exact à ajouter — au lieu de compiler puis d'échouer à la génération de facture avec une erreur `XTSE0680` obscure.
- **Comparer un fichier avec sa version upstream.** Dans Versions de fichiers, un fichier conservé par la montée de version affiche désormais une ligne *upstream* — la version livrée, enregistrée en `<name>.upstream`. Comparez votre fichier actif avec elle pour voir précisément ce que la nouvelle version du framework a changé et le fusionner à la main.

## 2026.06.25.3 — 2026-06-25 \{#v2026-06-25-3\}

### Nouvelles fonctionnalités

- **Champs d'extension personnalisés (UBLExtensions).** Une nouvelle section *Champs d'extension* dans l'éditeur XSL mappe jusqu'à huit valeurs source vers un bloc `ext:UBLExtensions` sur la facture — pour des données attendues par un partenaire mais sans équivalent standard EN 16931 (mode d'acheminement, adresse de copie de livraison, identifiants partenaires…). Chaque champ porte un nom d'élément, une valeur (chemin source ou modèle `{template}`) et les mêmes conditions d'émission facultatives que les attributs d'article. Le bloc est écrit en tête de facture, comme l'exige le schéma UBL, et n'est produit que si au moins un champ est renseigné. Vide par défaut : les factures existantes restent inchangées. Les données placées ici sont hors du modèle EN 16931 — privilégiez le champ standard lorsqu'il existe (référence comptable BT-19, référence acheteur BT-10) et vérifiez que la plateforme destinataire lit bien l'extension.

## 2026.06.25.2 — 2026-06-25 \{#v2026-06-25-2\}

### Nouvelles fonctionnalités

- **Suppression des zéros inutiles dans le PDF.** Une nouvelle option dans le concepteur de modèle PDF retire les décimales à zéro des montants, prix unitaires et quantités : un montant entier s'affiche `23` au lieu de `23,00`, et un prix unitaire `23,0000` devient `23`. Désactivée par défaut — l'affichage reste à deux décimales pour les montants et quatre pour les prix. Réglée par modèle, elle s'applique au tableau des lignes, au bloc des totaux et aux PDF lisible et à l'écran.

## 2026.06.25.1 — 2026-06-25 \{#v2026-06-25-1\}

### Nouvelles fonctionnalités

- **Pays d'origine en ligne de facture (BT-159).** L'éditeur de facture propose un champ pays d'origine par ligne, à côté du code de classification. Le code ISO part dans l'UBL ; le détail de la facture et tous les PDF — aperçu, traitement par lot et notification — affichent le nom complet du pays, résolu depuis la liste des pays partagée. Un interrupteur dans la mise en page des lignes du PDF en pilote l'affichage.
- **Version du schéma de classification en ligne (BT-158-2).** Une ligne peut désormais porter la version de son schéma de classification, à côté de l'identifiant de liste ; elle apparaît entre crochets après le listID partout où la classification est affichée.
- **Code article du vendeur dans le PDF (BT-155).** Le code article du vendeur s'imprime dans le détail de ligne, entre la référence acheteur et l'identifiant standard, avec son propre interrupteur d'affichage.

### Améliorations

- **SIREN acheteur reconstitué depuis le numéro de TVA.** Lorsqu'une fiche client ne porte pas de SIREN mais comporte un numéro de TVA français, le SIREN en est déduit pour que l'identifiant légal et l'adresse électronique de l'acheteur restent renseignés.
- **Pays d'origine résolu depuis la liste de référence partagée.** La valeur source du pays est désormais résolue via la liste canonique des pays au moment de la production de la facture, au lieu d'une copie de la liste figée dans chaque déploiement. Corriger un libellé dans la liste s'applique partout, sans nouvelle sauvegarde.
- **Adresses plus nettes dans le PDF.** Les adresses du vendeur, du client, de l'agent et de la livraison sont construites ligne à ligne : une partie dont l'adresse commence sur la deuxième ligne de voie n'imprime plus de ligne vide en tête. L'adresse de livraison affiche aussi son complément de voie.
- **Montées de version plus fluides.** Avant d'importer les nouvelles fonctions, la montée de version aligne l'en-tête de feuille de style de chaque déploiement sur la version de langage et les espaces de noms livrés ; les modèles qui s'appuient sur de nouvelles fonctionnalités du framework compilent alors sans retouche manuelle.

### Corrections

- **Plus de blocs d'adresse vides en ligne de facture.** Une ligne qui ne porte qu'une date de livraison n'émet plus d'élément de lieu ou de pays vide, et les adresses de ligne ne retombent plus sur un pays par défaut qui n'a pas lieu d'être.
- **L'en-tête de livraison ne se répète plus.** Dans le PDF, une ligne sans groupe de livraison n'efface plus le fil d'Ariane, évitant que la ligne suivante qui en porte un réimprime l'en-tête de livraison.
- **Notes sur plusieurs lignes recomposées en un seul paragraphe.** Une note répartie sur plusieurs lignes source peut être rassemblée en un paragraphe unique au lieu de produire une note par ligne.

## 2026.06.23.1 — 2026-06-23 \{#v2026-06-23-1\}

### Nouvelles fonctionnalités

- **Pays d'origine et classification produit en ligne de facture (BT-158 / BT-159).** Deux nouveaux champs dans la section *Lignes* de l'éditeur XSL pointent vers le chemin source par ligne. Un onglet *Pays & classification* dans Valeurs par défaut UBL indique le format côté source — code ISO, libellé français ou libellé anglais — et le moteur résout la valeur via la liste canonique des pays au moment de la sauvegarde. Pas de table de correspondance parallèle : si un libellé est erroné, on le corrige une fois dans la liste. Code de classification, listID et version par défaut prennent le relais lorsque le chemin par ligne renvoie vide.
- **Motifs de remise et de frais par défaut (BR-42 / BR-43).** Nouvel onglet *Remises / charges* dans Valeurs par défaut UBL : on saisit un libellé et un code motif appliqués lorsque le chemin du modèle client renvoie vide. L'indicateur ChargeIndicator choisit la paire — remise ou frais — donc une seule configuration couvre les deux cas.
- **Dérivation d'une remise de ligne à partir d'un pourcentage seul.** Lorsque la source ne porte que le pourcentage, le moteur déduit le montant et la base à partir du net de la ligne. Les combinaisons mixtes fonctionnent aussi : pourcentage + base déduit le montant, pourcentage + montant déduit la base. Le signe en suffixe JDE (`25.00-`) est normalisé automatiquement.
- **Mode remise de ligne sans groupe.** Quand les champs de remise se trouvent directement sur la ligne, sans élément parent, on pointe le TAG *Item AC* sur `.` (ou on le laisse vide) et le moteur itère la ligne elle-même.
- **Identifiant article vendeur enfin émis (BT-155).** Le TAG était déclaré mais n'arrivait pas dans la sortie. Le moteur le rend désormais entre le libellé article et le pays d'origine, conformément à la séquence UBL 2.1.

### Améliorations

- **La montée de version propage les nouveaux symboles du framework dans les modèles déployés.** Deux nouvelles passes durant la migration ferment le trou qui imposait jusqu'ici de modifier chaque modèle client à la main après chaque release. Premier passage : les nouvelles variables, fonctions et templates de la référence livrée sont ajoutées au fichier de valeurs par défaut du déploiement, sans toucher aux valeurs saisies par l'opérateur. Second passage : pour chaque modèle par document, les doublons hérités de ces mêmes noms sont retirés du bloc d'override, laissant la version importée gagner la précédence XSL. Il suffit désormais de relancer la migration pour réparer les modèles qui ne compilaient plus depuis que le corps du framework s'est mis à appeler de nouveaux symboles ou de nouveaux paramètres de template.
- **Pied de page TVA encapsulé par taux.** Le convertisseur PDF→XML ouvre désormais un wrapper neuf pour chaque pied de page de taux, ce qui permet à une facture multi-taux de produire un bloc par taux plutôt qu'une suite plate de champs. Les factures à taux unique conservent un seul bloc.

### Corrections

- **Plus de ligne perdue après un saut de page (PDF→XML).** JDE n'émet le préambule de livraison qu'une fois par bloc BL ; les pages de continuation enchaînent les lignes sans nouveau préambule. Le convertisseur relâchait le wrapper de livraison à chaque flush d'en-tête de page, et les lignes de continuation tombaient sur un parent à plat que le XSL UBL ignorait. Le wrapper est désormais reconduit d'une page à l'autre et n'est relâché que par les totaux ou le pied de page TVA.
- **Montants PDF avec séparateurs ambigus (`1.682.28`).** Lorsque le même caractère sert de séparateur de milliers et de décimal — ou après la conversion française virgule → point qui transforme `1,682.28` en `1.682.28` — la chaîne se réduit désormais à `1682.28`. Le dernier `.` est conservé comme décimal, les précédents sautent.
- **Règle Schematron locale BR-NOMAUBL-01 retirée.** La condition « avoir → facture antérieure référencée » est désormais imposée par `BR-FR-CO-05` dans le pack Flux2 v1.3.1 du 2026-04-30. Le doublon local disparaît ; le fichier reste en place comme structure d'accueil pour de futures règles maison.

## 2026.06.22.5 — 2026-06-22 \{#v2026-06-22-5\}

### Nouvelles fonctionnalités

- **Authentification unique (SSO) via OIDC.** Le champ *Auth Mode*
  du modèle Global bascule l'écran de connexion entre `internal`,
  `oidc` (SSO seul) et `both` (bouton SSO au-dessus du formulaire).
  La configuration du fournisseur d'identité tient dans un nouveau
  modèle système *oidc* (URL de l'émetteur, identifiants client,
  URI de retour, scopes, correspondance des claims, création
  automatique des comptes avec un rôle par défaut) — créé
  automatiquement à l'installation et à la montée de version, ou
  en un clic via le bouton *+ Add OIDC* en haut du gestionnaire
  de configuration. Les utilisateurs sont identifiés sur leur
  adresse e-mail : une liste de domaines autorisés cantonne la
  connexion à un ou plusieurs tenants, et un contrôle du claim
  `hd` Google Workspace empêche un Gmail personnel d'usurper une
  adresse Workspace. Pour les comptes créés automatiquement, un
  identifiant court est dérivé de la partie locale de l'adresse
  (convention JDE 10 caractères). Lorsqu'un utilisateur est
  connecté via OIDC, son profil passe en lecture seule (onglet
  Sécurité masqué, champs non modifiables) — le mot de passe se
  gère côté fournisseur d'identité. Rôles, permissions et filtres
  de lignes restent pilotés depuis NomaUBL : le fournisseur ne
  fait que vérifier l'identité.

## 2026.06.21.5 — 2026-06-21 \{#v2026-06-21-5\}

### Corrections

- **Graphique du volume quotidien lisible sur toutes les périodes.**
  Les barres sont désormais bornées entre 3 et 36 px : les périodes
  de 7 jours n'affichent plus d'énormes pavés, les longues périodes
  plus de traits inutiles ; les étiquettes de dates passent en HTML
  et restent nettes, sans se transformer en tirets illisibles
  lorsque le SVG est étiré.

## 2026.06.21.4 — 2026-06-21 \{#v2026-06-21-4\}

### Corrections

- **Les rôles en lecture seule peuvent à nouveau consulter les
  factures.** Le détail de facture utilise le point d'accès XML UBL
  pour afficher les onglets Parties / Lignes / Récap TVA / Notes ;
  le protéger par `invoice.download` masquait tous les onglets pour
  un rôle dépourvu de cette action. Le point d'accès est désormais
  accessible en lecture (toujours protégé par le filtre de lignes
  et la visibilité), seul le bouton explicite *Télécharger UBL*
  reste verrouillé par `invoice.download`.

## 2026.06.21.3 — 2026-06-21 \{#v2026-06-21-3\}

### Nouvelles fonctionnalités

- **Nouvelle permission d'action `invoice.create`.** L'action
  rapide *Nouvelle facture* du tableau de bord est désormais
  protégée par sa propre autorisation — un rôle sans
  `invoice.create` ne voit plus le bouton et le point d'accès
  serveur refuse l'appel.

### Corrections

- **La table de réinitialisation de mot de passe apparaît
  désormais dans Paramètres → db-nomaubl.** La section Auth a un
  nouveau champ *Auth · Password resets* (par défaut `F564255`)
  pour que la validation de schéma cesse de la signaler comme
  table manquante.

## 2026.06.21.2 — 2026-06-21 \{#v2026-06-21-2\}

### Nouvelles fonctionnalités

- **Visibilité des cartes du Tableau de bord par rôle.** Chaque
  widget du tableau de bord est désormais une permission individuelle.
  Paramètres → Rôles → Accès propose une liste *Cartes du tableau de
  bord* sous Pages autorisées — liste vide : toutes les cartes
  s'affichent (comportement actuel), liste non vide : liste blanche
  stricte. Les cartes masquées sont ignorées côté serveur ; leurs
  requêtes ne s'exécutent pas et leurs données ne sortent pas.

- **Volume quotidien — barres empilées par statut.** Le tracé en
  ligne unique est remplacé par des barres empilées par jour,
  décomposées en Approuvées / En cours / Erreurs IT / Erreurs
  Métier. Survoler un jour affiche une info-bulle avec le détail
  par statut.

### Corrections

- **La carte « PA round-trip » du tableau de bord ne crashe plus
  pour les rôles avec un filtre de lignes sur une colonne
  d'en-tête** (par exemple le nom client). La requête uniquement
  basée sur la table cycle de vie filtre désormais les lignes
  éligibles via un `EXISTS` sur la table d'en-tête au lieu
  d'injecter la clause de filtre dans une requête qui n'en
  connaissait pas les colonnes.

## 2026.06.21.1 — 2026-06-21 \{#v2026-06-21-1\}

### Nouvelles fonctionnalités

- **Réinitialisation du mot de passe en libre service.** Un lien
  *Mot de passe oublié ?* sur l'écran de connexion ouvre une fenêtre
  demandant le nom d'utilisateur et l'e-mail ; s'ils correspondent à
  un compte actif, l'utilisateur reçoit un lien à usage unique
  valide 60 minutes qui mène à une nouvelle page où choisir un
  nouveau mot de passe. Nécessite la configuration SMTP dans le
  modèle `global`.

## 2026.06.21 — 2026-06-21 \{#v2026-06-21\}

### Nouvelles fonctionnalités

- **Filtres de lignes par rôle.** Un rôle peut désormais être limité
  à un sous-ensemble de factures (ainsi que de lignes du journal de
  traitement, des erreurs d'intégration et de l'e-reporting) en
  choisissant une colonne et une ou plusieurs valeurs dans
  **Paramètres → Rôles → Périmètre données**. Cas d'usage typique :
  un rôle client externe qui ne doit voir que les factures émises
  pour sa propre clé alpha (UHALKY). Le filtre s'applique aux vues
  liste, au tableau de bord, à chaque point d'accès ligne à ligne
  (cycle de vie, lignes, téléchargement XML, rendu PDF, push de
  statut, suppression, renvoi, e-mail) ainsi qu'au flux PDF généré.
  Une ligne masquée renvoie la même réponse "non trouvé" que la
  donnée réellement absente, pour ne pas révéler l'existence d'une
  facture interdite. Plusieurs filtres sur la même colonne se
  combinent en OU, sur des colonnes différentes en ET — en parallèle
  des sociétés autorisées.

- **Permissions d'action granulaires.** L'ancien indicateur tout-
  ou-rien "lecture seule" est remplacé par une liste blanche par
  action dans **Paramètres → Rôles → Actions**. Les actions
  Factures, E-Reporting et Intégration sont regroupées par vue ;
  chaque bouton s'autorise ou se bloque indépendamment — modifier,
  supprimer, renvoyer, pousser un statut (avec sous-permissions
  séparées pour les onglets PA et Base de données du modal Statut),
  valider l'UBL, télécharger l'UBL, actions prédéfinies, actions
  personnalisées, e-mail PDF, génération / renvoi de lots
  e-reporting, et déclenchement des jobs Intégration (réception PA,
  import des statuts, récupération des statuts). Les rôles
  existants conservent leur comportement : sans liste blanche, tout
  reste autorisé ; activer le mode liste blanche pré-coche toutes
  les actions pour que rien ne change tant que l'opérateur n'en
  décoche pas explicitement.

- **Éditeur de rôles réorganisé en onglets thématiques.** L'unique
  panneau Permissions est désormais découpé en **Accès** (pages +
  fonctionnalités), **Actions** (la nouvelle liste blanche),
  **Périmètre données** (sociétés + filtres de lignes) et
  **Membres**. Le nom et la description du rôle restent visibles
  au-dessus de la barre d'onglets, et les boutons Enregistrer /
  Annuler s'affichent sur chaque onglet d'édition.

- **API Reference est désormais une page à part entière.** Le lien
  de la barre latérale vers `/api/docs` n'est plus rattaché à la
  permission de la Référence des statuts : un rôle peut donc obtenir
  l'accès à l'application sans voir le catalogue brut des points
  d'accès — utile pour un utilisateur externe à qui l'on remet une
  connexion qui ne doit pas exposer l'API. Les nouveaux rôles admin
  reçoivent automatiquement la page `apireference` ; les admins
  existants la reçoivent à la prochaine initialisation.

### Corrections

- **Le bouton "Tout décocher" de l'onglet Actions décoche enfin
  toutes les cases.** Le double sens d'une liste d'actions vide
  (héritage "tout autorisé" vs intention explicite "rien autorisé")
  faisait que cliquer le bouton remettait le rôle en mode tout-
  autorisé et re-cochait silencieusement toutes les cases. Le mode
  liste blanche est désormais piloté par un interrupteur dédié, ce
  qui garantit que l'état affiché correspond toujours à ce qui sera
  enregistré.

### Nouvelles fonctionnalités

- **`fetch-received-list` et `fetch-received` livrés dans le
  connecteur par défaut `pa-default`.** Les nouvelles
  installations du connecteur fourni exposent désormais les
  deux points d'entrée pour la réception aux côtés des six
  points sortants existants, avec des schémas d'URL
  raisonnables
  (`/api/v1/sale/received-invoices?since={{since}}` et
  `/api/v1/sale/received-invoices/{{uuid}}`). Les chemins
  réels dépendent de chaque PA — l'opérateur confirme l'URL
  une fois et le résolveur trouve les points d'entrée par leur
  nom. **Les installations existantes** ne sont pas migrées
  automatiquement : `ConfigMerger` ignore les api-connectors
  appartenant au client en bloc afin de préserver les
  modifications d'URL / d'authentification, ce qui oblige les
  opérateurs à ajouter les deux lignes manuellement via le
  bouton "+ Ajouter un endpoint" (en reprenant les noms + les
  schémas d'URL ci-dessus).

- **Adresse électronique du fournisseur (BT-34) configurable.**
  Certains clients utilisent un identifiant de routage Peppol /
  facturation électronique différent du SIREN. Le panneau
  "Sociétés fournisseuses" dans "Valeurs par défaut UBL" dispose
  désormais d'un champ BT-34 par société, et l'éditeur XSL
  expose une variable `TAG_SUPPLIER_ENDPOINT` pour une
  surcharge par document. L'ordre de résolution à l'émission
  est : variable du document → adresse configurée dans les
  Valeurs par défaut UBL → SIREN. Les installations qui ne
  configurent rien conservent le comportement actuel (le SIREN
  est émis comme adresse électronique).

- **Bascule Schematron par type de document.** L'éditeur "Types
  de documents" comporte désormais une case Schematron à côté
  de "Envoyer à la PA" / "Conserver UBL" / "Conserver PDF".
  Quand elle est décochée pour un code, le contrôle Schematron
  EN 16931 / CTC-FR est ignoré pour les factures résolues à ce
  type et aucune ligne n'est insérée dans `F564236`. Par défaut
  la validation est activée pour `B2B` et `B2G` (champ
  d'application CTC-FR) et désactivée pour `B2BINT`, `B2C`,
  `OUTOFSCOPE`, `ARCHIVEONLY`, `DOCUMENT` (hors champ — les
  règles françaises génèrent des faux positifs sur les
  transactions B2C ou les acheteurs étrangers). Les clients
  peuvent basculer la case par code selon leurs besoins. Les
  lignes "document-types" à 7 champs existantes prennent la
  valeur par défaut par code, ce qui évite une migration
  manuelle après mise à jour.

- **Le pipeline UBL lit `document-types` pour sendToPA et
  validate.** Les factures déposées au format UBL (interface
  "Traiter le document", flux de réception, fetch-received)
  résolvent désormais leur code de type via la propriété
  `processingType.default` du modèle de document, recherchent
  la ligne correspondante dans `document-types` et utilisent la
  valeur pour piloter à la fois le filtre Schematron et la
  valeur sendToPA par défaut. Les surcharges explicites de
  l'appelant (interface / CLI `sendToPA=Y/N`) restent
  prioritaires. Une ligne INFO par appel indique la ligne
  utilisée, à la manière de `AUTO_RESOLVE` dans le pipeline XML.

## 2026.06.17 — 2026-06-17 \{#v2026-06-17\}

### Corrections

- **Les PDF de notification utilisent désormais le modèle de
  document configuré.** Les PDF joints aux notifications sortantes
  et aux courriels étaient rendus avec la mise en page par défaut
  fournie, quel que soit le `pdfTemplate` configuré par modèle de
  document (`vrc_pro`, `cdn_facture`, …). Le dispatcheur de
  notifications résout maintenant le modèle enregistré sur la
  facture et l'applique au PDF joint, comme le fait déjà
  l'interface "Traiter le document". Les installations sans
  modèle par document conservent le rendu actuel.

- **Les remises de ligne avec un point en tête ne déclenchent
  plus BR-DEC-24.** Les champs JDE livrés sous la forme `.4700`
  (sans partie entière) étaient émis dans le montant de la
  remise de ligne (BT-136) sous la forme `0.4700` — quatre
  décimales, fatal selon la règle Schematron française BR-DEC-24
  ("2 décimales au maximum"). La fonction de normalisation des
  montants applique désormais le plafond de 2 décimales aussi
  aux valeurs commençant par un point : `.4700` devient `0.47`.
  Même correction appliquée à la fonction prix (6 décimales)
  pour cohérence.

- **Le journal de traitement groupé affiche chaque travail
  présent dans la fenêtre chargée.** Les traitements longs (un
  START → des milliers d'événements intermédiaires → un END)
  étaient affichés sous la forme d'une seule ligne "? → END"
  lorsque le START sortait de la tranche serveur. Trois
  plafonnements s'additionnaient : le serveur limitait
  silencieusement à 500 événements, le client n'en demandait
  que 5 000 même si plus étaient disponibles, et le regroupement
  côté client générait une ligne orpheline par événement
  intermédiaire en l'absence de START. Les trois sont corrigés —
  plafond serveur porté à 200 000, requête groupée client
  portée à 100 000, et les événements intermédiaires sans START
  sont désormais agrégés en une seule ligne par travail
  contenant toutes les étapes.

### Nouvelles fonctionnalités

- **Pagination côté serveur sur la vue à plat du journal de
  traitement.** La vue à plat (non groupée) pagine désormais
  contre le backend au lieu de se limiter à la tranche chargée.
  Les opérateurs ayant un historique long peuvent parcourir
  l'ensemble des événements sans relancer les filtres. La vue
  groupée conserve son chargement en une fenêtre unique
  (plafonnée à 100 000 événements) car les travaux sont
  reconstitués côté client.

- **Pied de pagination sur la vue groupée du journal de
  traitement.** La liste des travaux groupés dispose désormais
  d'un pied de page collant avec sélection de la taille de page
  (25 / 50 / 100 / 200), boutons première / précédente /
  suivante / dernière et indicateur de position. La taille de
  page est conservée entre rechargements.

### Améliorations

- **Les listes de modèles de document sont triées par ordre
  alphabétique.** Partout où une liste de modèles de document
  apparaît dans l'interface — la barre latérale de l'éditeur de
  documents, le sélecteur de modèles utilisé par "Traiter le
  document" / "Validation UBL" / "Extraire depuis BIP", le
  sélecteur de surcharge par société de l'éditeur global, les
  lignes de l'éditeur "Récupérer les documents", et la fenêtre
  de l'éditeur XSL pour les échantillons de connecteurs — liste
  désormais les modèles par ordre alphabétique. Auparavant ils
  suivaient l'ordre d'enregistrement dans le fichier de
  configuration, devenu illisible au fil des ajouts.

- **Diagnostic de configuration pour le mode AUTO.** Le
  traitement en mode AUTO écrit désormais deux lignes de log
  INFO par document traité, indiquant le code de type de
  traitement résolu, la table de mapping utilisée et le mode
  effectif retenu (UBL / BURST / SINGLE / BOTH). Permet de
  diagnostiquer les cas "AUTO a lancé le mauvais mode" en une
  ou deux lectures du journal de traitement, au lieu de
  deviner ce que la configuration du client a produit.

## 2026.06.16 — 2026-06-16 \{#v2026-06-16\}

### Corrections

- **Message d'erreur clair quand un sous-modèle RTF BI Publisher
  manque.** La génération PDF affichait un simple
  `ERROR RUN PDF java.util.EmptyStackException` quand le parseur
  RTF de XDO rencontrait un IMPORT non résolvable — typiquement
  un sous-modèle (`sb_*_header.rtf`, `_footer.rtf`,
  `_detailslivre.rtf`, `_lettre_sub.rtf`, …) absent de
  l'environnement client, ou un séparateur de chemin spécifique
  à l'OS. Le code attrape désormais la RuntimeException
  sous-jacente et ajoute une ligne d'indice demandant à
  l'opérateur de vérifier les chemins IMPORT du RTF principal
  et que chaque sous-modèle référencé existe sur l'hôte.
  S'applique au mode SINGLE et au chemin de traitement standard.

### Nouveautés

- **Génération de manifest pour l'adaptateur PDF → XML.** Nouveau
  mode CLI `-pdfManifest <input.pdf> <output.manifest.xml>`
  (aussi `nomaubl.sh pdf-manifest` / `nomaubl.cmd pdf-manifest`)
  analyse le PDF et produit un manifest XML à la forme JDE, pour
  le cas où le client ne dispose pas d'un échantillon XML JDE
  natif de la même version de programme R à fournir à `-pdf2xml`.
  Les noms d'éléments inférés utilisent le texte des étiquettes
  RC imprimées quand disponible, avec retour à l'alias DD
  OWObject sinon ; le client édite le fichier pour donner des
  noms parlants, puis le réutilise comme 3ème argument de
  `-pdf2xml`. L'élément racine est dérivé du nom de fichier PDF
  (convention JDE de spool) et les champs texte multi-lignes
  conservent un seul nom d'élément sur toutes leurs lignes via
  un cache persistant.

### Corrections

- **L'adaptateur PDF → XML regroupe désormais les factures d'un
  PDF batch.** Quand un seul PDF JDE contient N factures
  (impression batch), le convertisseur regroupait tout dans une
  seule enveloppe `<On_Payment_Terms_S3>`. Il ferme désormais
  l'enveloppe courante et en ouvre une nouvelle quand le flux
  d'en-tête SI=3 reprend après une section de récap TVA (SI=7) ;
  chaque facture du batch a son propre bloc XML adressable. Les
  totaux courants par page SI=5 ne déclenchent plus de bornage,
  ce qui corrige la fragmentation des factures multi-pages.
  Vérifié sur un PDF de 13 920 pages portant 2 132 factures :
  une enveloppe par facture, lignes et totaux contenus.

---

## 2026.06.15 — 2026-06-15 \{#v2026-06-15\}

Une référence des champs UBL complète, et un moyen d'alimenter le pipeline avec la sortie PDF de JD Edwards.

### Nouveautés

- **Référence des champs UBL complétée.** La référence de champs de l'[éditeur XSL](./ubl-tools/xsl-editor.md) a gagné 37 entrées, couvrant chaque groupe (BG) et terme (BT) que le Schematron étendu (BR-FR / CTC-FR 1.3.1) contrôle et que l'éditeur sait mapper — BG-3 à BG-32 et les termes qu'ils encadrent : référence et date de facture précédente (BT-25/26), devise de comptabilisation TVA et son total (BT-6 / BT-111), date du fait générateur (BT-7), identifiant fiscal hors TVA du vendeur (BT-32), subdivisions territoriales acheteur et livraison (BT-54 / BT-79), contact acheteur (BT-56), lieu de livraison (BT-71), numéro de carte tronqué (BT-87), code unité de la quantité facturée (BT-130), assiette et code de motif des charges de ligne (BT-142/145), ligne 3 de l'adresse de livraison (BT-165), et d'autres. La référence correspond désormais exactement à ce que l'éditeur peut produire et à ce que le validateur peut contrôler.
- **Adaptateur PDF JD Edwards → XML.** Un nouveau mode CLI — `nomaubl.sh pdf2xml <input.pdf> <output.xml> [<manifest.xml>]` — extrait un PDF de rapport JD Edwards EnterpriseOne dans la même forme XML que JDE produit nativement quand la sortie XML est activée. Un site peut donc garder JDE en mode sortie PDF et alimenter sans changement le pipeline XML → XSL → UBL existant. Il faut le drapeau INI JDE qui désactive la compression du flux PDFlib pour que les métadonnées OWObject survivent ; un manifest optionnel (un échantillon XML JDE natif de la même version de rapport) rend la sortie strictement identique à celle de JDE. Voir [Ligne de commande](./management/command-line.md#pdf2xml).

---

## 2026.06.14 — 2026-06-14 \{#v2026-06-14\}

Regroupement par commande client sur les lignes, un axe parent dans les chemins XSL, et un réglage *Debug* pour câbler les nouvelles plateformes.

### Nouveautés — lignes de facture

- **Regroupement par commande client sur les lignes (BT-132).** Les lignes portent désormais un troisième bandeau de regroupement, sous la livraison et la référence de document, indiquant l'ID de commande client référencée. Il apparaît dans l'aperçu de facture et le PDF par défaut, et se configure par modèle depuis le [constructeur PDF](./management/pdf-templates.md) (*Group by customer order*). Les règles de réinitialisation suivent les autres bandeaux : un changement de livraison ré-imprime les deux fils internes, un changement de référence de document ré-imprime le bandeau commande client.
- **Commande client dans l'éditeur de ligne.** Le constructeur de [ligne de facture](./application/invoices.md) propose un bouton rapide *Commande client* à côté de *Note* et *Doc Ref*, avec un champ texte unique sous le bloc *References* de la ligne.
- **Champ commande client dans l'éditeur XSL.** L'[éditeur XSL](./ubl-tools/xsl-editor.md) affiche le nouveau slot BT-132 à côté de BT-131 dans les champs de ligne, pour le pointer vers le chemin source sans toucher au modèle.

### Correspondance XSL

- **Axe parent (`..`) dans les chemins TAG.** Le résolveur de chemin du framework comprend désormais `..` comme segment : un champ par-ligne placé en voisin de l'élément ligne se cible via `../FIELD` (ou `../../FIELD/Sub`). Cela débloque les XML sources où les lignes sont regroupées sous un parent qui porte aussi les références de ligne ; les chemins sans `..` ne changent pas. Voir [Éditeur XSL](./ubl-tools/xsl-editor.md).

### Connecteurs API

- **Réglage Debug sur les connecteurs API.** Un nouveau choix *Debug* (`Y` / `N`) dans l'onglet *Connexion* du [connecteur API](./configuration/api-connectors.md) fait écrire chaque appel sur une ligne — URL, code HTTP et aperçu du corps — dans le journal du service. À activer pendant le câblage d'une nouvelle plateforme pour vérifier la substitution d'URL, les paramètres de requête et la forme de la réponse sans demander une version spéciale ; à remettre sur `N` une fois le connecteur stable. Il remplace les traces ponctuelles ajoutées dans *import-status* et *invoice-statuses* et couvre tous les endpoints de manière uniforme.

### Correctifs

- **Position de la Note sur les lignes.** `cbc:Note` (BT-127) est désormais émis avant `cbc:InvoicedQuantity`, conformément à la séquence de ligne UBL 2.1. Le bug était dormant tant qu'aucun slot de note de ligne n'était rempli, mais faisait planter la validation dès qu'un l'était — corrigé pour tout le monde.

---

## 2026.06.13 — 2026-06-13 \{#v2026-06-13\}

Parité complète pour le pipeline source UBL — il écrit la ligne de suivi, embarque le PDF lisible et les pièces jointes, et renvoie via les plateformes multipart — plus une configuration Esker documentée.

### Nouveautés

- **Le pipeline source UBL écrit F564230.** Le traitement direct UBL insère désormais la même ligne `tableLog` que le pipeline XML, avec les valeurs lues par XPath UBL (BT-47 SIREN acheteur → FEALKY, BT-115 PayableAmount → FEAEXP, BT-2 IssueDate → FEIVD, BT-9 DueDate → FEARDU). Auparavant la ligne était omise, donc l'update `updatePATransactionId` de l'envoi PA ne touchait aucune ligne, FEUKIDSZ restait vide et fetch-import n'avait rien à interroger. Le mode replace se comporte comme le pipeline XML — la ligne existante est mise à jour, pas dupliquée ; le mode sans replace saute la facture avec l'avertissement *déjà traitée* habituel.
- **Champs Activité / Type sur les modèles UBL.** L'éditeur source XML extrait `activite` / `typePiece` par XPath ; l'éditeur [Documents](./management/documents.md) les expose désormais comme champs texte **Activité** et **Type**, dans un nouveau groupe *Identification du document* en haut de la branche UBL. Les deux sont obligatoires — ils alimentent l'insertion F564230 ci-dessus.
- **Le renvoi PA fonctionne avec les endpoints multipart.** Un template de corps multipart a besoin d'un fichier réel sur disque. L'envoi initial transmet déjà le chemin d'entrée ; le renvoi ne fournissait que `{{content}}` (base64 du blob en base), ce qui cassait les plateformes multipart. Le renvoi écrit maintenant le blob dans un fichier temporaire et expose `{{filePath}}` et `{{docName}}` (sanitisé comme `<doc>_<dct>_<kco>`), de sorte que la même configuration de [connecteur](./configuration/api-connectors.md) sert à l'envoi initial et au renvoi. Le nettoyage est automatique.
- **Esker (et similaires) via un connecteur API.** Une configuration `pa-default` fonctionnelle pour Esker est désormais documentée : un premier endpoint poste les octets UBL en JSON (base64), un second — mappé sur le slot *import-status*, puisque fetch-import l'appelle — déclenche le traitement effectif avec l'id de fichier renvoyé par le premier. Le corps de jeton OAuth2 `client_credentials` est construit automatiquement quand le type de contenu du jeton est form-urlencoded et qu'aucun corps explicite n'est défini. Voir [Connecteurs API](./configuration/api-connectors.md).
- **Pipeline source UBL : LISIBLE et pièces jointes PDF externes.** Le flux XML→UBL honore depuis longtemps les propriétés `lisible`, `attachment` et `additionalAttachments` d'un modèle ; le flux source UBL (`Source = UBL`) les ignorait. Parité rétablie : après validation et avant l'insert en base, les PDF configurés sont embarqués dans le fichier UBL, qui est re-parsé pour que le blob stocké corresponde à ce qui est envoyé à la PA — `attachment=attach` embarque un PDF voisin depuis `dirInput` sous `cbc:ID="PJA"` ; `lisible=Y` rend le PDF lisible directement depuis l'UBL parsé et l'embarque sous `cbc:ID="LISIBLE"` (DocumentTypeCode 916) ; `additionalAttachments` boucle sur le tableau JSON exactement comme le flux XML. `attachment=create` reste non supporté ici — il dépend de BI Publisher rendant le PDF depuis un XML source, que les modèles source UBL n'ont pas ; utilisez `attach` ou `lisible=Y`. Voir [Documents](./management/documents.md).

### Correctifs

- **Arbre de décision import-status corrigé.** Le client import-status distingue désormais *l'appel HTTP a échoué* (réseau, HTTP 4xx/5xx, parse) de *HTTP 2xx sans champ `status` dans la réponse* — le premier compte en erreur, le second flue la branche optimiste de succès, de sorte que les plateformes qui ne parlent pas le vocabulaire `success/pending/failed` (Esker, IOPOLE, …) sont remontées correctement. Avant ce correctif un HTTP 400 comptait silencieusement en succès dans le récapitulatif ; les compteurs reflètent maintenant ce qui s'est réellement passé. Voir [Import](./sync/import.md).

---

## 2026.06.12 — 2026-06-12 \{#v2026-06-12\}

Une grosse mise à jour du constructeur PDF : un logo de société, une couleur d'accent et un format de date par modèle, l'adresse de livraison complète, un bloc *Note (par code)*, et des slots de blocs personnalisés dans les sections En-tête, Parties et Boîte des totaux. Plus une référence de ligne de bon de commande BT-132, des prix unitaires conservés à 6 décimales de bout en bout, et une mise à niveau qui préserve désormais un `ubl-defaults.xsl` modifié par le client.

### Nouveautés — Constructeur PDF

- **Logo sur les factures PDF.** Un nouveau bouton *Afficher le logo* dans le [constructeur de modèle PDF](./management/pdf-templates.md), associé à un champ *Chemin du logo* dans [Paramètres → Global → Traitement → PDF](./configuration/system/global.md). Quand il est activé, l'image est dessinée en haut du bloc fournisseur de la page 1, et la colonne numéro de facture / dates garde sa place. Le chemin accepte les jetons habituels (`%APP_HOME%`, `%ENV%`, `%KCO%`, `{{kco}}`, …) pour qu'une société pointe vers son propre logo ; un réglage *Décalage X du logo (pt)* décale l'image horizontalement pour absorber une marge interne au fichier source. PNG, JPG et GIF sont pris en charge.
- **Couleur d'accent par modèle.** Un nouveau sélecteur *Accent* dans la barre du constructeur remplace le bleu par défaut sur les titres de section (CLIENT / LIVRAISON), le total mis en évidence, le soulignement de l'en-tête du tableau de lignes et le fond des lignes surlignées. Saisissez un hexa à 6 chiffres avec ou sans `#` ; la teinte de fond est dérivée automatiquement. Vide = bleu par défaut.
- **Format de date par modèle.** Un nouveau menu *Date* dans la barre du constructeur — `yyyy-MM-dd` (défaut), `dd/MM/yyyy`, `dd-MM-yyyy`, `MM/dd/yyyy`, `dd MMM yyyy`, `dd MMMM yyyy`. Il s'applique aux dates d'émission, d'échéance, de période et de livraison par ligne.
- **Adresse de livraison complète dans le PDF.** Le bloc LIVRAISON affiche maintenant le nom du destinataire (repli sur `ID: …` si seul l'identifiant de site est renseigné), la rue complète, le code postal + ville et le pays — comme le bloc client.
- **Bloc Note (par code).** Un nouveau choix *Note (par code)* dans le sélecteur de bloc personnalisé. L'inspecteur propose une liste déroulante alimentée par la liste de référence `note-types` ; le rendu repère le `cbc:Note` qui porte le marqueur `#CODE#` correspondant et affiche son corps sur place — désactivez la section Notes globale et posez chaque note exactement où elle doit aller.
- **Slots personnalisés dans la section En-tête.** L'en-tête propose deux slots — *Pied gauche* (sous le bloc fournisseur) et *Pied droit* (sous Profile ID) — chacun acceptant un arbre de blocs complet édité sur place, pour une ligne TVA intra-UE ou une mention de conditions de paiement sans intercaler une section Bloc autonome.
- **Édition en zoom des arbres de blocs.** Les champs de type bloc (la section `block` racine et les nouveaux slots de l'en-tête) s'affichent en carte récapitulative compacte avec une pastille *Éditer* ; un clic confie tout l'inspecteur au constructeur de blocs, avec une barre *← Retour · Section · Slot*, et changer de section sort automatiquement. La liste du type de bloc est triée par ordre alphabétique.
- **Slots personnalisés dans Parties et Boîte des totaux.** Le même mécanisme s'étend au reste du canvas — Parties reçoit *Pied client* + *Pied livraison* (dans chaque encart), la Boîte des totaux reçoit *Avant totaux* + *Après totaux*.

### Couverture UBL

- **BT-132 — référence de ligne de bon de commande.** Un nouveau slot `TAG_LINE_ORDER_LINE_REF` au niveau ligne. Quand il est renseigné, le socle émet `cac:InvoiceLine/cac:OrderLineReference/cbc:LineID` (groupe EXT-FR-FE-BG-09), placé entre InvoicePeriod et DocumentReference selon la séquence UBL 2.1. Choisissez le chemin source dans l'[Éditeur XSL](./ubl-tools/xsl-editor.md) sous *Références de ligne*.

### Mappage XSL

- **Opérateur de concaténation dans les chemins TAG.** Tout select `TAG_*` peut maintenant assembler plusieurs tags source avec l'opérateur ` + ` — `'FirstName + LastName'` joint avec un espace, `'First + ", " + Last'` choisit le séparateur ; les chaînes entre guillemets sont rendues telles quelles. Fini l'étape de pré-traitement XSL quand un champ UBL agrège plusieurs colonnes source.
- **Liste de valeurs conditionnelle (`cond_value`).** Le paramètre `cond_value` de `ubl:emit-item-prop` / `ubl:emit-note` accepte désormais une liste séparée par des virgules — `'KWH,M3,LTR'` correspond quand la source vaut l'un des trois (espaces supprimés).

### Correctifs (précision)

- **Prix unitaires conservés à 6 décimales.** Le PriceAmount (BT-146), la remise de ligne (BT-147) et le prix brut (BT-148) étaient tronqués à 2 décimales partout — dans le UBL, le PDF et la [modale Détail facture](./application/invoices.md) — même quand la source en portait 6. La norme EN 16931 autorise une précision supérieure sur les enfants de `cac:Price` que sur les totaux monétaires ; NomaUBL conserve donc jusqu'à 6 décimales sur ces trois champs de bout en bout, et les totaux monétaires (BT-106/109/112/115) restent à 2. Le champ Prix unitaire des modales Création/Édition accepte aussi la précision fine (`step=any`).

### Détails

- En-têtes du tableau de lignes en français : *Prix unitaire HT* et *Montant HT* (au lieu de *Prix unitaire* / *Montant*).
- **Plus de marqueur `**INVALID_TAX_RATE**` dans le UBL.** Le template du socle `ubl:tax-subtotal` n'écrit plus de marqueur texte dans `cbc:Percent` quand le taux de taxe de ligne est manquant ou invalide — l'élément est omis et Schematron remonte l'erreur. Les XSL par document qui passaient un marqueur explicite sont nettoyés automatiquement à la prochaine mise à niveau.

### Correctifs

- **La mise à niveau préserve un `ubl-defaults.xsl` modifié par le client.** L'outil de rafraîchissement des actifs remplaçait chaque fichier XSL du socle, ce qui écrasait en silence les personnalisations dans `ubl-defaults.xsl` (SIREN / TVA / adresse du vendeur par code société, mappings de catégorie TVA, codes de paiement, format de date). Le fichier passe en « refresh souple » : une installation neuve reçoit les valeurs livrées, une mise à niveau garde le fichier du client, et quand la version livrée diffère, elle est écrite à côté sous `ubl-defaults.xsl.upstream` pour relecture manuelle. Le rapport de mise à niveau liste chaque fichier conservé dans une nouvelle section *Actifs préservés* ; le miroir `${env}/ubl/` bénéficie de la même protection. Voir [Mise à niveau](./installation/upgrade.md).
- **Les XSL du socle aussi rafraîchis dans `${env}/ubl/`.** Les fichiers XSL du socle (`ubl-common.xsl`, `ubl-defaults.xsl`, `ubl-template.xsl`) sont maintenant rafraîchis aussi dans le répertoire `ubl/` de l'environnement, et plus seulement dans `xsl/`. Sans ce correctif, après une mise à niveau, les XSL par document importaient une version périmée du socle, d'où des erreurs XSLT du type *« Parameter subentity is not declared in the called template »* après le passage en 2026.06.10. Si l'erreur apparaît, copiez les trois fichiers de `${env}/xsl/` vers `${env}/ubl/` puis relancez le traitement — ou installez 2026.06.12 et rejouez la mise à niveau.

---

## 2026.06.10 — 2026-06-10 \{#v2026-06-10\}

Des opérateurs de filtre appliqués côté serveur, deux bases de plus pour le connecteur SQL, un sélecteur de jetons pour les chemins de pièces jointes, ainsi que quelques correctifs UBL et de robustesse.

### Nouveautés

- **Microsoft SQL Server dans le connecteur SQL.** Une nouvelle valeur dans le choix du type de base. Déposez le pilote `mssql-jdbc` dans `lib/` et renseignez l'URL JDBC. Voir [Connecteurs SQL](./configuration/sql-connectors.md).
- **Connecteur JDBC personnalisé.** Un autre choix dans la même liste : indiquez le nom de la classe du pilote (DB2, MariaDB, Snowflake, …) pour vous connecter à n'importe quelle base, sans attendre une nouvelle version de NomaUBL. Voir [Connecteurs SQL](./configuration/sql-connectors.md).
- **Fenêtre BIP (jours).** Un nouveau champ dans [Paramètres → Global → Traitement par lot](./configuration/system/global.md), repris aussi sur la page [Récupération entrée](./sync/fetch-input.md). Il restreint l'analyse BIP aux jobs modifiés sur les N derniers jours (`0` = pas de limite) ; l'analyse lancée à la main, le lot planifié et la commande `nomaubl -fetch-all` en tiennent compte.
- **Sélecteur de jetons sur les Pièces jointes complémentaires.** Un bouton `{ }` apparaît à côté du champ chemin : un clic ouvre une liste filtrable et insère le jeton choisi à l'endroit du curseur — aussi bien les jetons du catalogue facture (`{{fedoc}}`, `{{kco}}`, …) que les constantes de chemin `%APP_HOME%`, `%ENV%`, `%PROCESS_HOME%`. Voir [Documents → Pièces jointes complémentaires](./management/documents.md).

### Améliorations

- **Les opérateurs du filtre avancé passent côté serveur.** *Différent de*, *inférieur à / supérieur à*, *est vide*, *non vide* et l'*égal* explicite sont maintenant traduits en clause WHERE par le serveur, sur Factures, Erreurs d'intégration, Journal de traitement et e-Reporting. Voir [Vues de liste → Filtres avancés](./configuration/list-views.md#panneau-filtres-avances).
- **Filtre par numéro UBL sur la page Factures.** La colonne existait déjà mais n'était pas déclarée filtrable ; `?ublNumber=…` et la ligne du panneau Filtres avancés restreignent maintenant la liste. Voir [Factures](./application/invoices.md).
- **BT-54 / BT-79 — région de l'acheteur et de la livraison dans l'UBL.** NomaUBL ajoute `cbc:CountrySubentity` aux adresses quand le XSL du document renseigne les nouvelles variables `TAG_CUSTOMER_REGION` et `TAG_DELIVERY_REGION`. Voir [Valeurs par défaut de l'en-tête UBL](./ubl-tools/ubl-defaults/ubl-header-defaults.md).
- **Les messages de statut longs ne bloquent plus Oracle.** Au-delà de 1024 caractères, le message est tronqué à la largeur de la colonne avant l'insertion — fini les `ORA-12899` sur les longs messages Schematron ou PA.

### Corrections

- **Un onglet de navigateur resté ouvert ne provoque plus d'erreur après un déploiement.** Les chemins d'assets devenus absents renvoient un vrai 404 au lieu de renvoyer `index.html` en `text/html` ; il suffit de rafraîchir la page.

---

## 2026.06.03 — 2026-06-03 \{#v2026-06-03\}

Un **renvoi en masse** très attendu pour les factures bloquées en *Échec d'envoi* — une seule carte sur le Tableau de bord technique affiche le nombre concerné et un bouton les renvoie toutes à la PA d'un seul clic. Une nouvelle page **Reprise auto** dans Paramètres planifie ce même renvoi chaque nuit, pour qu'un lot tombé pendant la nuit soit repris automatiquement le lendemain matin.

### Nouveautés

- **Carte Échec d'envoi sur le Tableau de bord technique.** Une nouvelle carte affiche le nombre de factures actuellement en *Échec d'envoi* (statut 9904) et propose un bouton **Tout renvoyer** d'un seul clic. La fenêtre de progression montre les compteurs en direct (traitées / réussies / échecs) ; vous pouvez la fermer et laisser l'opération continuer en arrière-plan, ou l'arrêter proprement entre deux factures. Le renvoi est cadencé à 100 ms par appel pour ménager la PA. Voir [Tableau de bord technique → Échec d'envoi](./application/tech-dashboard.md#send-failed).
- **Reprise nocturne automatique dans Paramètres.** Une nouvelle page [Configuration → Système → Reprise auto](./configuration/system/auto-retry.md) permet de programmer une passe quotidienne qui renvoie toutes les factures dans un statut choisi — par défaut 3 h du matin, statut 9904. Utile pour le lot de nuit : tout ce qui est bloqué côté PA est repris avant le matin suivant. Plusieurs planifications coexistent, chacune avec sa propre heure, sa liste de statuts, une fenêtre d'analyse optionnelle et son cadencement.
- **Sélecteur multi-statuts pour la reprise.** Choisissez un ou plusieurs statuts dans une liste limitée aux codes étiquetés *Erreur – technique* (9904, 9905, 9907, …). Une seule planification peut couvrir d'un coup tous les seaux d'erreurs techniques.
- **Fenêtre de progression pour les tâches en arrière-plan.** Les opérations longues partagent désormais une fenêtre commune — une barre, des compteurs en direct, un bouton *Annuler* et un bouton *Continuer en arrière-plan* qui masque la fenêtre sans arrêter la tâche. Voir [Tableau de bord technique → Fenêtre de progression partagée](./application/tech-dashboard.md#shared-progress-window).

---

## 2026.06.02 — 2026-06-02 \{#v2026-06-02\}

Un nouveau **rapport quotidien des erreurs** envoyé par courriel à qui de droit — avec la liste complète des évènements jointe en Excel — ainsi qu'une **vue Détaillée** très attendue sur la page Intégration / erreurs qui regroupe toutes les erreurs par facture et permet d'exporter le tout d'un clic. L'outil de mise à jour côté client gagne un réglage manuel pour les installations patchées en avance, et les scripts de lancement Windows / Linux offrent désormais un point d'extension pour les options JVM (emplacement de la clé maîtresse, mémoire, …).

### Nouveautés

- **Rapport quotidien des erreurs par courriel.** Une nouvelle page [Configuration → Système → Rapport quotidien](./configuration/system/daily-digest.md) permet de programmer un envoi quotidien qui regroupe toutes les erreurs d'intégration sur une fenêtre glissante (par défaut : hier et aujourd'hui) avec, en pièce jointe, un fichier Excel contenant la liste complète des évènements — les mêmes données que l'export de la vue Détaillée. Plusieurs rapports peuvent coexister : un par sous-ensemble de destinataires, avec son propre horaire d'envoi, sa fenêtre d'analyse et son filtre de sévérité.
- **Routage par colonne sur le rapport.** Chaque rapport porte une liste de filtres d'égalité (Société, Code activité, Source, Règle, Centre, …) pour que chaque équipe reçoive son périmètre. Par exemple, un rapport pour activité = ISC envoyé à une adresse, un autre pour VRAC envoyé à une autre adresse.
- **Vue Détaillée sur Intégration / erreurs.** Un troisième onglet à côté de *Par évènement* et *Par règle*. Une ligne par facture par défaut — l'évènement le plus récent de cette facture — avec un chevron et une pastille `+N` qui indique combien d'autres évènements sont masqués. On déplie pour voir tous les évènements de la facture, on replie pour garder la page lisible. Les factures sont triées par évènement le plus récent : la facture la plus chaude remonte en haut, avec tous ses évènements précédents regroupés en dessous. Voir [Intégration / erreurs → Vue détaillée](./application/integration-errors.md#detailed-view).
- **Le filtre de période s'élargit à la facture en vue Détaillée.** Quand un filtre comme *30 derniers jours* sélectionne une facture, la vue Détaillée fait remonter *tous* les évènements de cette facture — y compris les plus anciens hors période — pour que la chronologie soit complète au même endroit.
- **L'export Excel reprend toutes les lignes, même celles repliées.** En cliquant sur *Exporter* en vue Détaillée, le fichier contient tous les évènements de toutes les factures du périmètre, indépendamment de ce qui est replié à l'écran.
- **Réglage manuel pour la mise à jour client.** Une nouvelle option [`--from-version`](./management/command-line.md#upgrade) sur `nomaubl.sh upgrade` et `nomaubl.cmd upgrade` indique exactement la version actuelle du client à l'outil au lieu de la deviner. Utile quand l'installation a été patchée à la main en avance — seules les migrations strictement postérieures à la version indiquée seront appliquées.
- **Point d'extension JVM dans les lanceurs.** Une variable `JAVA_OPTS` en haut de `nomaubl.sh` et `nomaubl.cmd` est reprise par chaque appel Java (démarrage, traitement, mise à jour, récupération, …). Cas d'usage le plus courant : pointer la clé maîtresse de chiffrement vers un emplacement fixe hors du profil utilisateur, par exemple `JAVA_OPTS="-Dnomaubl.master.key.file=/etc/nomaubl/master.key"`. Voir [Command Line → JAVA_OPTS](./management/command-line.md).

### Améliorations

- **Le message Schematron long est entièrement visible.** En vue Détaillée, la colonne *Message* se renvoie à la ligne et le texte complet s'affiche sans troncature.
- **La colonne *Statut actuel* utilise toute la largeur disponible.** Sur la page Intégration / erreurs, élargir la colonne révèle davantage du libellé du statut au lieu d'être bloqué à la largeur figée précédente.
- **Les erreurs se regroupent naturellement par facture.** Même sur l'onglet *Par évènement*, l'ordre privilégie la facture quand c'est pertinent pour que l'œil n'ait plus à chasser les évènements d'une même facture entre les pages.

### Corrections

- **Les valeurs sauvegardées du rapport quotidien s'affichent correctement après enregistrement.** Le formulaire repassait aux valeurs par défaut après Enregistrer ; il reflète à nouveau l'état réellement enregistré.

---

## 2026.05.26 — 2026-05-26 \{#v2026-05-26\}

Un vrai éditeur visuel pour le PDF de facture — palette à gauche, aperçu en direct au centre, inspecteur à droite — avec l'éditeur de blocs intégré au même endroit. Ajout également d'une série de corrections pour les installations Oracle et Windows.

### Améliorations

- **L'aperçu en direct est toujours visible pendant la modification d'un modèle.** L'ancien flux — ouvrir une fenêtre, saisir des références de document, cliquer sur Aperçu, attendre — disparaît. L'aperçu reflète désormais chaque option cochée et chaque modification de bloc au fil de l'eau.

### Nouveautés

- **Éditeur visuel pour les modèles PDF.** Un nouveau bouton **Ouvrir l'éditeur visuel** sur la page Modèles PDF ouvre un éditeur plein écran en trois volets :
  - **À gauche** — le catalogue des sections disponibles (En-tête, Client + Livraison, Tableau des lignes, Règlement, Notes, bloc personnalisé, …) et la liste ordonnée des sections du modèle. Un clic pour ajouter, un clic pour sélectionner, un glisser-déposer pour réordonner.
  - **Au centre** — un aperçu en direct qui se regénère à partir d'une facture d'exemple intégrée (ou de votre propre XML chargé) à chaque modification. Un clic sur un bloc dans l'aperçu et l'inspecteur saute dessus.
  - **À droite** — un inspecteur qui présente les options du bloc sélectionné, regroupées par catégorie (Fournisseur, Bloc facture, Colonnes, …). Pour un bloc personnalisé, l'éditeur arborescent complet — texte, champ, ligne / colonne, répétition, condition — s'ouvre directement dans l'inspecteur, avec auto-complétion XPath et choix de la police / couleur / alignement par nœud.
- **Chargement d'un XML d'exemple depuis l'éditeur.** Déposez une vraie facture depuis le haut de l'éditeur — l'aperçu et le sélecteur XPath basculent immédiatement sur vos données, sans avoir à quitter l'éditeur.
- **Enregistrement dans l'éditeur, avec avertissement de modifications non sauvegardées.** Le bouton *Enregistrer* enregistre directement depuis l'éditeur ; fermer avec des modifications en cours affiche un message *Abandonner / Annuler*, rien n'est perdu par accident.

### Corrections

- **La connexion sur Oracle fonctionne à nouveau.** L'authentification sur Oracle refusait silencieusement toutes les connexions — y compris `admin / admin` par défaut — à cause de la façon dont Oracle stocke le nom d'utilisateur. Connexion, changement de mot de passe, attribution de rôles et changement de mot de passe par l'utilisateur fonctionnent désormais correctement.
- **Chemins Windows dans les paramètres.** L'enregistrement d'un chemin Windows (par exemple `c:\nomaubl`) dans les paramètres corrompait la valeur à la sauvegarde. Les chemins sont désormais conservés à l'identique.
- **`nomaubl.cmd start` rend la main et le serveur reste actif à la fermeture de la console.** L'arrêt du serveur le coupe maintenant proprement, sans la pause de 10 secondes précédente.
- **Adresse de l'acheteur dans le XML UBL dans le bon ordre.** L'adresse postale de l'acheteur était placée après l'identifiant TVA, ce que les validateurs de schéma stricts refusent. L'ordre est corrigé.

---

## 2026.05.24 — 2026-05-20 \{#v2026-05-24\}

Le filtre de période permet désormais de choisir sur quelle date la page Factures s'applique, et la descente depuis la Déclaration de TVA tombe à chaque fois sur le bon ensemble de factures.

### Améliorations

- **La déclaration de TVA filtre sur la date d'émission de la facture.** La page utilise désormais la date imprimée sur la facture elle-même : la période reste stable même si les données sont reconstruites plus tard.
- **Descente cohérente de la page TVA vers les Factures.** Un clic sur un montant de la page TVA ouvre la page Factures avec la même base de date pré-sélectionnée — le nombre affiché correspond à celui d'où l'on vient.

### Nouveautés

- **Sélecteur de base de date sur la page Factures.** Un nouveau sélecteur, à côté du filtre de période, permet de choisir sur quelle date la période s'applique :
  - **Date de mise à jour** *(par défaut)* — dernière modification de la facture dans NomaUBL. Comportement historique.
  - **Date d'émission** — celle imprimée sur la facture. À utiliser pour s'aligner avec la page Déclaration de TVA.

  Le choix est conservé pendant la session en cours.

---

## 2026.05.23 — 2026-05-20 \{#v2026-05-23\}

La page de Déclaration de TVA est désormais conçue pour gérer de très gros volumes — elle s'ouvre aussi rapidement sur un mois de 200 000 factures que sur un mois de 2 000.

### Améliorations

- **Page Déclaration de TVA nettement plus rapide.** L'ouverture de la page ne retraite plus chaque facture à chaque chargement. Quel que soit le volume de la période — un petit mois ou un trimestre chargé — la page s'ouvre en quelques secondes.
- **Message plus clair quand les données manquent.** Si la base ne contient pas encore les détails TVA de la période sélectionnée, la page affiche désormais la commande exacte à exécuter, avec les dates déjà pré-remplies, au lieu de présenter une matrice vide.

### Nouveautés

- **Choix de ce qui est enregistré pour chaque facture.** Les paramètres de la base de données NomaUBL proposent maintenant deux switchs indépendants : un pour les sous-totaux par ligne, l'autre pour les détails TVA. C'est ce dernier qu'il faut activer pour que la page Déclaration de TVA reste rapide. Une fois activé, les nouvelles factures s'enregistrent avec tout ce qu'il faut.
- **Reconstruction des détails TVA pour une période passée.** Une nouvelle commande remplit les détails TVA d'une période existante à partir du document UBL déjà conservé pour chaque facture — utile juste après avoir activé le switch, ou à chaque fois qu'une reconstruction propre est nécessaire :

  ```
  ./nomaubl.sh backfill-vat <env> <dateDebut> <dateFin>
  ```

  La commande peut être relancée sur la même période sans créer de doublons.

### Mise à jour d'une installation existante

1. Dans **Paramètres → Connecteurs → db-nomaubl → Tables**, activez **Enregistrer les détails TVA**. Enregistrez.
2. Pour chaque période passée que vous souhaitez voir dans la page TVA, exécutez la commande de reconstruction une fois :

   ```
   ./nomaubl.sh backfill-vat prod 2026-04-01 2026-04-30
   ```
3. Rouvrez la page Déclaration de TVA — tout est là.

### Compatibilité

Les installations existantes conservent leur comportement après la mise à jour. Les nouveaux switchs prennent par défaut la valeur correspondant à l'ancienne configuration. Aucune modification manuelle n'est requise.

---

## 2026.05.22 — 2026-05-19 \{#v2026-05-22\}

Comparez deux versions d'un même fichier côte à côte, directement dans le navigateur — la même vue que celle de VS Code, utile pour revoir l'évolution d'un modèle ou d'un fichier de configuration au fil du temps.

### Nouveautés

- **Mode Comparer** sur la page Versions des fichiers. Activez-le pour n'importe quel fichier texte (XSL, XML, JSON, SQL, properties, …) et choisissez deux versions dans l'historique — le fichier courant inclus — pour ouvrir une comparaison en plein écran : la plus ancienne à gauche, la plus récente à droite, avec les lignes modifiées en surbrillance, la coloration syntaxique selon le type de fichier et le défilement synchronisé.
- **Comparaison en un clic avec la version précédente.** Une petite icône, sur chaque ligne de l'historique, permet de comparer une version donnée à celle qui la précède immédiatement, en un seul clic — le cas le plus courant quand vous voulez juste voir ce qu'a apporté une version.

### Comment l'utiliser

Ouvrez la page **Versions des fichiers**, sélectionnez un fichier texte dans l'arborescence, puis cliquez sur l'icône d'une ligne pour la comparer à la version précédente, ou activez **Comparer** dans la barre d'outils et choisissez deux lignes vous-même. Fermez la comparaison avec **Échap** ou le bouton **Fermer** pour revenir à l'historique.

---

## 2026.05.21 — 2026-05-19 \{#v2026-05-21\}

Page de déclaration de TVA façon CA3. Agrège chaque facture d'une période sur les lignes du formulaire CA3 — ventes / achats × France / intra-UE / hors UE × taux de TVA × type de facture — avec un dépliement par paliers jusqu'aux factures individuelles derrière chaque montant.

### Nouveautés

- Nouvelle page **Déclaration de TVA** (dans la sidebar, après E-Directory). Choisissez un mois ou un trimestre, filtrez optionnellement par société. La page s'ouvre comme une matrice CA3 compacte ; cliquez sur une ligne de taux pour la décomposer par type de facture (B2B / B2C / B2BINT / B2G / non classé), puis sur une ligne de type pour voir les factures individuelles qui la composent (numéro, type, société, base imposable, TVA). Chaque montant reste cliquable pour ouvrir directement la liste Factures pré-filtrée sur le même ensemble.
- **Export Excel.** Un seul clic produit un classeur à deux feuilles : Synthèse reprenant la matrice à l'écran avec sous-totaux par zone et par sens, et Détails listant la contribution de chaque facture. Les cellules de montant sont des nombres réels — totaux et tableaux croisés fonctionnent dans Excel.
- **Export PDF — mise en page CA3.** Le PDF reprend l'allure du formulaire officiel Cerfa 3310-CA3 : section A (opérations réalisées — lignes 01, 03, 04, 06, 7B), section B (TVA brute par taux avec lignes 08, 9B, 09, 10, 14 et total 16 ; TVA déductible avec ligne 20 et total 23), et un bloc Solde avec la ligne 28 (TVA à payer) ou 32 (crédit). Synthèse imprimable d'une page, prête à être transmise à la comptabilité.
- **Pays de la contrepartie sur chaque facture.** Nouvelle colonne capturée à l'insertion depuis le XML UBL — pays de l'acheteur pour les ventes, du fournisseur pour les achats. Pilote la classification intra-UE / hors UE sur la page TVA. La liste Factures accepte également un filtre par pays (passé automatiquement par le drill-down depuis la déclaration de TVA).
- **Filtre de période sur la date de comptabilisation.** La page TVA utilise la même colonne de date que la liste Factures — une facture saisie en mai pour une date d'émission d'avril est déclarée en mai, conformément à la règle classique pour les factures saisies tardivement, et les compteurs lors du drill-down restent cohérents avec ce qu'affiche la page Factures.

### Comment l'utiliser

La page s'ouvre par défaut sur le mois complet précédent — celui que vous déclarez. Basculez le sélecteur de période sur *Trimestre* pour une déclaration trimestrielle. La matrice s'ouvre repliée ; cliquez sur les chevrons pour développer. Si un groupe contient plus de 200 factures, la vue en ligne est tronquée à 200 — utilisez l'export Excel pour récupérer la liste complète.

### Note sur les données existantes

Les factures créées avant cette version n'ont pas de pays renseigné et apparaissent par défaut en *France* jusqu'à leur retraitement. Toute nouvelle facture est désormais enregistrée avec le bon pays.

---

## 2026.05.20 — 2026-05-19 \{#v2026-05-20\}

Une seule commande pour faire passer n'importe quelle installation à la dernière version. Plus d'ALTER manuel sur la base, plus de risque de perdre la configuration ou les personnalisations XSL entre les versions.

### Nouveautés

- **`./nomaubl.sh upgrade <env>`** — une commande qui arrête le service, sauvegarde l'environnement (config + template + ubl + jar — les 5 derniers conservés), met à jour le schéma de la base, fusionne les nouvelles données de référence, rafraîchit les XSL framework et règles de validation, réécrit chaque XSL par-document pour intégrer les nouveaux TAGs et les mises à jour framework, écrit un rapport complet, puis redémarre le service.
- **Mappings client toujours préservés.** Quand un XSL par-document est réécrit, les valeurs `TAG_*` que vous avez fixées et le bloc `NOMAUBL_OVERRIDES_START`…`END` à la fin du fichier sont conservés à l'identique. Les nouveaux TAGs du dernier template de référence sont ajoutés avec leur valeur par défaut pour que vous les remplissiez. Les TAGs retirés du template de référence sont conservés côté client, marqués d'un commentaire pour qu'ils ne passent pas inaperçus.
- **Configuration client toujours préservée.** Les nouvelles ressources système et entrées de listes de référence (codes statut, document-types, etc.) sont ajoutées ; tout ce qui existe déjà côté client reste tel que vous l'avez fixé.
- **Paramètres → Historique des mises à jour.** Nouvelle page listant chaque installation, mise à jour et migration appliquées sur cet environnement, avec le rapport complet à droite quand vous cliquez une ligne.

### Comment mettre à jour

Remplacer `nomaubl.jar` en place, puis :

```
./nomaubl.sh upgrade prod
```

C'est tout. Le rapport est enregistré sous `${appHome}/upgrade-reports/`.

### Ce que cette version embarque sous le capot

Toutes les installations actuellement en production sont en **2026.05.16** — l'outil de mise à jour le détecte automatiquement à la première exécution et applique les évolutions de schéma de 2026.05.17, 2026.05.18 et 2026.05.19 (nouvelle colonne `UHDRIN` de direction, renommage des colonnes des tables enveloppe e-Reporting) en une passe.

### Meilleurs diagnostics en cas d'erreur

- L'en-tête du rapport de mise à jour affiche désormais le répertoire d'environnement résolu et l'URL JDBC, donc une mauvaise machine ou un mauvais chemin saute aux yeux.
- Les échecs déroulent toute la chaîne de causes — un vague « connection attempt failed » indique maintenant si c'est `NoRouteToHost`, `Connection refused`, un problème d'authentification, etc.
- Le démarrage trace le chemin du fichier de clé maître utilisé pour déchiffrer les propriétés sensibles de la configuration. Quand la page de licence repasse en mode « restreint » parce que la clé a changé, l'erreur pointe désormais directement vers la résolution de la clé maître au lieu d'afficher « Invalid license key format ».

---

## 2026.05.19 — 2026-05-19 \{#v2026-05-19\}

E-Reporting (Flux 10) ré-écrit contre la spécification DGFiP : une enveloppe par (société, période, direction) au lieu d'un fichier par sous-flux, et la direction est désormais stockée sur chaque facture pour qu'elle ne puisse plus dériver si un modèle est re-classé plus tard.

### Nouveautés

- **Direction enregistrée sur chaque facture** — nouvelle colonne `UHDRIN` sur F564231 (`'1'` = reçue d'un fournisseur, `'2'` = émise par l'opérateur). Fixée à l'insertion depuis le modèle de document source puis figée. Changer la *Direction* d'un modèle dans Settings ne re-classe plus les lignes historiques, le filtre de la liste Factures, les règles de notification, ni les enveloppes e-Reporting. Le filtre et le verrouillage des actions de la modale de détail lisent maintenant directement ce drapeau.
- **E-Reporting Flux 10 — une enveloppe, les deux sous-blocs**. 10.1 (B2B international détaillé) et 10.3 (B2C agrégé) cohabitent désormais comme enfants parallèles du même `<TransactionsReport>` conformément à la règle G6.29 — au lieu de deux fichiers séparés. Au plus deux fichiers XML par (société, période) : un sortant (Issuer `RoleCode=SE`) et un entrant (Issuer `RoleCode=BY`).
- **Signe des avoirs dans les agrégats 10.3** — les avoirs (codes UNTDID 1001 `261, 381, 396, 502, 503` selon G1.01) viennent désormais en soustraction de l'agrégat de période au lieu d'y être ajoutés. G1.14 autorise explicitement les montants négatifs sur TT-82 / TT-83 / TT-87 / TT-88, donc une période dominée par les avoirs ressort avec le bon net.
- **Tables e-Reporting renommées pour cohérence** : `RGY56BAR` → `RGDRIN`, `RHY56BAR` → `RHDRIN`, `RIY56BAR` → `RIDRIN` (avec index alignés). Les trois tables e-Reporting partagent désormais la même nomenclature `DRIN` que F564231.

### Note de migration

L'e-Reporting n'entre en vigueur qu'en septembre 2026, aucune installation en production ne l'utilise encore — le schéma est modifié sans transition de compatibilité. Supprimer et recréer les trois tables e-Reporting (F564260 / F564261 / F564262) avant le prochain run. Les lignes F564231 existantes héritent de `UHDRIN = '2'` (sortant) via la valeur par défaut de la colonne.

---

## 2026.05.18 — 2026-05-18 \{#v2026-05-18\}

Notifications et actions personnalisées orientées direction — les opérateurs peuvent câbler des flux distincts pour les factures émises et reçues sans les mélanger. Plus une correction pour le filtre Direction de la liste Factures.

### Nouveautés

- **Les règles de notification gagnent un déclencheur Direction** : *Toutes (par défaut)*, *Émises uniquement (ventes)* ou *Reçues uniquement (achats)*. Une règle avec une direction ne se déclenche jamais pour les factures de la direction opposée — le même code statut (par exemple *En litige*) peut donc appeler une API pour les rejets de ventes et une autre pour les rejets d'achats sans aucune logique conditionnelle dans la règle.
- **Les actions personnalisées sur les factures** (les boutons configurés par l'opérateur dans la modale de détail) gagnent le même champ Direction. Vide = visible des deux côtés (valeur par défaut héritée). Une fois fixée, le bouton est masqué pour les factures de l'autre direction — un *Sync CRM* côté émission et un *Marquer payée* côté réception peuvent ainsi coexister sur le même modèle, la modale n'affichant que ce qui a du sens pour la facture courante.

### Corrections

- Liste Factures — le chip *Direction* applique désormais le filtre même quand la vue stockée est antérieure à cette version. Le filtre est résolu à partir de la carte direction → modèle de document au moment de la requête, indépendamment du contenu de la vue stockée.

---

## 2026.05.17 — 2026-05-18 \{#v2026-05-17\}

Les factures reçues des fournisseurs sont gérées dans NomaUBL — même liste Factures, même cycle de vie, même modale de détail.

### Nouveautés

- **Récupérer les factures reçues depuis la PA** : nouvelle commande CLI `-fetch-received`, nouveau point d'entrée REST `POST /api/fetch-received/run`, et un mode « PA entrante (factures fournisseur) » sur la page Fetch Input. Le handler appelle deux nouvelles tâches du connecteur API (`fetch-received-list`, `fetch-received`), déduplique par UUID PA et fait passer chaque UBL téléchargée par le pipeline UBL existant. Peut aussi tourner sur planificateur — nouvelle propriété globale `fetchReceivedInterval` (minutes entre passes, 0 = désactivé).
- **Les modèles de document ont une nouvelle propriété Direction** — *Émise* (défaut, rétro-compatibilité) ou *Reçue*. Pilote un nouveau filtre sur la liste Factures (Toutes / Émises / Reçues) et masque les actions réservées aux émetteurs (Renvoyer à la PA, Marquer envoyée, Avoir, etc.) sur les factures reçues.
- **Connecteur de recherche du numéro de document** : le `cbc:ID` d'une facture UBL reçue est le numéro du fournisseur, pas le nôtre. Un nouveau groupe « Recherche du numéro de document » sur le modèle (visible quand source = UBL) permet de câbler une requête SQL ou un endpoint REST qui retourne notre `(doc, dct, kco)` interne à partir des champs fournisseur (`{ublNumber}`, `{supplierName}`, `{supplierVat}`, etc.). Quand il est configuré, il remplace la regex sur cbc:ID ; sinon le chemin `idPattern` existant fonctionne toujours.
- **Le nom de la contrepartie** stocké sur la ligne (utilisé par la liste / recherche) est désormais lu depuis `AccountingSupplierParty` pour les lignes en direction Reçue, donc la colonne affiche le fournisseur au lieu de notre propre nom.
- Nouveau modèle de document `received-ubl` livré pré-câblé avec `source=UBL`, `direction=R`, `dctDefault=RI`. Configurer le connecteur de recherche dans Paramètres → Modèles de document et c'est prêt.

### Aucun changement de schéma

- F564231 n'est pas modifiée. La direction est résolue à la lecture à partir du nom de modèle déjà stocké sur la ligne (`UHTMPL`), donc les lignes existantes continuent de fonctionner sans aucune migration.

---

## 2026.05.16 — 2026-05-14 \{#v2026-05-16\}

Génération de factures UBL directement depuis une requête SQL ou une API REST — sans passer par un spool JDE. Le profilage de performance est désormais activé par défaut. Plus une correction d'un vieux bug d'affichage dans le journal de traitement.

### Factures depuis une source SQL ou REST

- Les modèles de document ont une nouvelle source **Connecteur** (en plus de XML et UBL). Choisissez un connecteur SQL ou API pour l'en-tête, éventuellement un autre pour les lignes, et le pipeline XSLT existant prend le relais pour produire l'UBL.
- Deux modes : **un appel** (une requête / endpoint renvoie l'en-tête avec le tableau de lignes imbriqué) ou **deux appels** (en-tête d'abord, puis lignes — les paramètres des lignes peuvent réutiliser les valeurs de l'en-tête).
- Dans l'Éditeur XSL, un nouveau bouton **Charger un échantillon connecteur** récupère un vrai exemple pour mapper les XPath sur des données réelles, exactement comme avec un spool XML.
- La page Traiter un document remplace le sélecteur de fichier par un formulaire de paramètres quand le modèle utilise un connecteur. En ligne de commande, utilisez `--param clé=valeur` (répétable) à la place du chemin de fichier.

### Timings de debug activés par défaut

- Les durées par étape (parse, validation, insertion en base, envoi à la PA…) sont désormais journalisées par défaut à chaque exécution, dans l'interface comme en ligne de commande. La surcharge est négligeable et c'est le moyen le plus rapide de diagnostiquer une exécution lente.
- Utilisez le nouveau drapeau `--no-debug` (ou décochez la case dans l'interface) pour les ignorer sur les batchs de nuit volumineux.

### Correction

- **Journal de traitement** : quand plusieurs étapes d'un même job partageaient la même seconde, elles étaient éclatées sur plusieurs lignes étiquetées PARTIAL. Les événements restent maintenant regroupés sous leur job d'origine.

---

## 2026.05.15 — 2026-05-14 \{#v2026-05-15\}

Connecter des systèmes externes sans écrire de code : les factures ont des boutons d'action personnalisables, et les listes de référence peuvent se rafraîchir depuis une requête SQL ou une API REST.

### Nouveau : boutons d'action personnalisés sur les factures

- Ajoutez vos propres boutons dans le panneau de détail d'une facture (à côté des actions vendeur existantes). Chaque bouton peut déclencher une chaîne d'appels vers un connecteur — idéal pour mettre à jour une fiche client, pousser vers un ERP aval, appeler un webhook…
- Configurés dans Paramètres → Actions, avec le même éditeur que les actions intégrées : connecteur, endpoint, paramètres, option « arrêter en cas d'échec ».

### Listes de référence : synchronisation depuis un connecteur

- Une liste personnalisée (Paramètres → Listes de référence) peut maintenant être rafraîchie depuis une requête SQL ou une API REST. Choisissez le connecteur, l'endpoint, indiquez quel champ est le code et quels champs sont les libellés — cliquez sur **Synchroniser maintenant** et la liste se reconstruit toute seule.
- Les paramètres sont sauvegardés par liste, donc la même requête peut alimenter plusieurs listes avec des entrées différentes.

### Améliorations

- Tous les paramètres d'action acceptent maintenant un sélecteur `{}` qui liste toutes les variables disponibles (colonnes de la facture, champs de réponse des appels précédents). Les deux syntaxes `{champ}` et `{{champ}}` fonctionnent.
- Paramètres SQL : taper `'01'` (avec les guillemets) renvoyait silencieusement 0 ligne. Les guillemets sont maintenant retirés automatiquement.

### Corrections

- **Éditeur de liste personnalisée** : l'endpoint sauvegardé manquait parfois dans le menu déroulant à la réouverture de l'éditeur. Corrigé.

---

## 2026.05.14 — 2026-05-14 \{#v2026-05-14\}

Les règles de notification et les actions peuvent désormais utiliser **n'importe quelle colonne** de la facture comme variable — plus seulement les dix d'origine. Un nouveau sélecteur `{}` les rend faciles à parcourir et à insérer.

### Nouveautés

- L'éditeur de notification (Sujet, Corps, paramètres d'action) a maintenant un bouton `{}`. Cliquez dessus pour parcourir une liste recherchable de toutes les variables disponibles (10 champs standards de notification + toutes les colonnes de la vue Factures : nom du client, référence du contrat, total, devise, business unit, UUID PA…).
- Choisissez une variable, elle s'insère au curseur — fini la saisie manuelle de noms de variables ou les devinettes sur ce qui est disponible.
- Le même sélecteur est réutilisé dans les actions personnalisées, donc toute colonne qui alimente une notification peut aussi alimenter un appel d'API vers un système aval.

---

## 2026.05.13 — 2026-05-14 \{#v2026-05-13\}

Filtres multi-sélection sur les colonnes de listes de référence (statuts, statuts e-Reporting, listes personnalisées, etc.), avec réinitialisation en un clic. Choisir trois statuts dans Filtres avancés → Exécuter renvoie maintenant vraiment l'union.

### Nouveautés

- Les filtres de listes de référence (ligne de filtre par colonne et panneau Filtres avancés) acceptent **n'importe quel nombre de valeurs** au lieu d'une seule.
- Un bouton **✕** à côté du filtre efface tous les choix en un clic.
- Le serveur filtre maintenant correctement avec `IN (...)` : choisir trois statuts renvoie les lignes correspondant à l'un d'eux (avant, seul le premier était pris en compte).

### Améliorations

- Choisir l'opérateur **between** sur un filtre de colonne date / nombre / texte élargit automatiquement la colonne pour que les deux champs opérandes tiennent côte à côte. Repasser à un opérateur simple restore la largeur d'origine.

---

## 2026.05.12 — 2026-05-14 \{#v2026-05-12\}

Les pages de liste (Factures, Erreurs d'intégration, Journal de traitement, E-Reporting) sont beaucoup plus réactives. Chaque Exécution charge jusqu'à 5000 lignes en une fois, puis les filtres / tri / pagination se font instantanément dans le navigateur — plus de délai quand on tape dans un filtre de colonne ou qu'on change de page.

### Nouveautés

- Les filtres et la pagination sur les quatre listes principales sont désormais instantanés. La page ne retourne au serveur que si vous changez la plage de dates, appliquez des Filtres avancés ou changez le tri.
- Quand plus de 5000 lignes correspondent, la barre d'outils affiche **X / Y lignes** à côté du bouton Exécuter et vous demande d'affiner les filtres. Le plafond est configurable par vue dans Paramètres → Vues de liste.
- Les filtres de colonnes sur les colonnes de listes de référence proposent maintenant une liste déroulante recherchable avec les codes et libellés, au lieu d'un champ texte. Les codes numériques et les valeurs paddées par Oracle sont correctement reconnus.

---

## 2026.05.11 — 2026-05-13 \{#v2026-05-11\}

Cohérence d'interface. Toutes les listes déroulantes de l'application utilisent maintenant le même sélecteur recherchable — même apparence, même navigation au clavier, et un champ de recherche intégré pour les longues listes (pays, devises, modes de paiement, catégories TVA, statuts…).

### Améliorations

- Filtres, éditeurs de paramètres, modales, Éditeur XSL, onglets UBL Defaults — toutes les listes déroulantes ont la même apparence et le même comportement. Tapez pour filtrer, naviguez au clavier, fermez avec Échap.
- Les sélecteurs de taille de page utilisent le même composant pour la cohérence.

### Correction

- **Listes déroulantes de statuts** : la liste affichait l'étiquette interne (par ex. `IN_PROGRESS`) au lieu du libellé français / anglais. Corrigé — les sélecteurs de statut affichent maintenant le libellé lisible.

---

## 2026.05.10 — 2026-05-13 \{#v2026-05-10\}

Version importante sur la personnalisation : les quatre pages de liste principales (Factures, Erreurs d'intégration, Journal de traitement, E-Reporting) peuvent désormais être adaptées à vos besoins — choisir les colonnes affichées, leurs libellés, leurs formats, leurs filtres — sans écrire de code.

### Nouveautés

- Nouvel éditeur **Paramètres → Vues de liste** : une carte par page de liste avec réorganisation drag-and-drop des colonnes, libellés français et anglais, format (date, datetime, montant, pourcentage), alignement, largeur, visibilité et filtres.
- Cliquez sur **+ Ajouter une colonne** pour choisir parmi un catalogue de toutes les colonnes que la page peut afficher. Pour la page Factures, cela inclut maintenant 16 champs supplémentaires issus de l'archive facture : fichier source, business unit, utilisateur / job JDE, date d'échéance, UUID PA, etc.
- Nouveau panneau **Filtres avancés** sur chaque page : choisissez une colonne, un opérateur (contient, égal, between, vide…), puis cliquez sur Exécuter. Les opérateurs sont entièrement traduits.

### Corrections

- **Drill-through depuis le tableau de bord** : cliquer sur « Erreurs récentes » dans le Tech Dashboard, ou sur une carte de statut dans le Business Dashboard, ne transmettait pas toujours le filtre à la page cible. Corrigé — le filtre est désormais toujours appliqué, avec une pastille visible montrant ce qui est actif et un ✕ pour l'effacer en un clic.
- **Modale facture** : modifier une facture non française réinitialisait silencieusement son `CustomizationID` à la valeur EN16931 par défaut. La valeur d'origine est maintenant préservée.
- **Débordement des filtres de statut** : la liste de pastilles du filtre statut sur Factures débordait quand beaucoup de codes étaient actifs. Limite à 5 pastilles en ligne maintenant, le reste se replie dans un menu « +N de plus ».

---

## 2026.05.9 — 2026-05-12 \{#v2026-05-9\}

Version majeure sur le pipeline de validation et sur la réception des mises à jour de statut depuis la PA. Plus une page Erreurs d'intégration plus lisible et plusieurs améliorations de confort.

### Nouveautés

- **Webhooks entrants** : les PA peuvent désormais pousser les mises à jour de statut vers NomaUBL en temps réel au lieu d'attendre la prochaine interrogation. Chaque modèle api-connecteur a un nouvel onglet **Webhooks** : entrez un secret partagé, collez l'URL obtenue dans les paramètres webhook de la PA, et les changements de statut s'appliquent automatiquement. Signature HMAC vérifiée, événements doublons dédupliqués.
- **Règles maison NomaUBL** : un nouveau pack Schematron attrape les erreurs que la PA rejetterait de toute façon — à commencer par les codes d'avoir (261/381/396/502/503) qui exigent une référence à la facture d'origine. Les échecs apparaissent localement dans Erreurs d'intégration avant l'aller-retour.
- **Page Erreurs d'intégration** : la colonne Message illisible disparaît. Cliquez sur une ligne pour ouvrir une vue détail propre qui sépare l'explication française du contexte technique de debug. L'ancienne modale détail ne fonctionnait que pour les factures appariées ; les erreurs orphelines ont maintenant leur propre vue.
- **Format de date par document** : nouvelle liste déroulante dans l'onglet Document du modèle pour choisir le format de date utilisé dans le XML source (`yyyy-MM-dd`, `dd/MM/yyyy`, etc.). Avant codé en dur en ISO, ce qui échouait silencieusement sur les documents avec un format de date européen.

### Améliorations

- Le pipeline de validation Schematron est plus rapide au démarrage : les règles sont précompilées au build au lieu d'être compilées au lancement de la JVM.
- Les connecteurs API supportent maintenant les endpoints `multipart/form-data` (certaines PA en ont besoin pour l'import), et les requêtes de jeton OAuth2 peuvent porter des en-têtes personnalisés.
- La vérification annuaire (PPF) tourne désormais au moment de la validation, pas seulement à l'envoi, pour qu'un partenaire inconnu apparaisse dans Erreurs d'intégration avant la mise en file.
- Nouvelle bascule **Debug profile** dans les paramètres globaux qui log les chronométrages par étape (parse, validation, émission UBL, envoi PA) dans F564237 — utile pour diagnostiquer les batchs lents.
- La liste Factures montre une colonne de revue pour les lignes marquées pour revue rétrospective.
- Erreurs d'intégration gagne une colonne Date pour voir le contexte temporel sans ouvrir une ligne.

### Corrections

- **Profil de validation** : le pack BR-FR-Flux 2 était sauté sur les factures Extended-CTC-FR. Il s'exécute désormais sur tous les profils, comme exigé par l'AFNOR XP Z12-012.
- **Messages de statut** : les messages d'erreur PA contenant des caractères français accentués (`é` apparaissait comme `é`) et des sauts de ligne s'affichent maintenant correctement dans le cycle de vie de la facture.

---

## 2026.05.8 — 2026-05-09 \{#v2026-05-8\}

La configuration PA est désormais cohérente entre **e-invoicing**, **e-directory** et **e-reporting** — chacun pointe vers un connecteur API réutilisable au lieu de porter ses propres identifiants et endpoints. L'E-Reporting peut envoyer par SFTP en plus de REST, et les trois modèles système ont une mise en page à onglets cohérente.

### Nouveautés

- **E-Reporting découplé de E-Invoicing** : il a maintenant son propre connecteur, son propre endpoint et son propre mode d'envoi — la déclaration peut donc cibler une plateforme différente de celle de la soumission de factures. Les rapports peuvent être envoyés en SFTP en plus de REST.
- **Requêtes de jeton OAuth2** acceptent maintenant des corps form-urlencoded (`grant_type=client_credentials`) et des en-têtes personnalisés (pour les PA qui exigent un identifiant de locataire dans l'appel d'authentification lui-même).
- **Éditeurs des modèles système** (E-Invoicing, E-Directory, E-Reporting) réorganisés en mise en page à onglets cohérente. Le toggle Send Mode a déménagé dans l'onglet SFTP, où il est à sa place.

### Suppressions

- Le **mode mock PA** (et son onglet dédié) disparaît. Pour des tests hors-ligne, utilisez un connecteur API pointant vers un mock Postman ou un stub local.
- Le groupe **Background Scheduling** dans l'onglet E-Invoicing écrivait silencieusement dans le mauvais modèle — supprimé, avec un pointeur vers le bon endroit (`global` → Scheduling).

---

## 2026.05.7 — 2026-05-09 \{#v2026-05-7\}

Version majeure sur les connecteurs et les notifications. Les connecteurs SQL rejoignent les connecteurs API comme brique de base, et les deux peuvent maintenant alimenter des chaînes d'actions multi-étapes depuis les règles de notification et depuis la modale de détail facture.

### Nouveautés

- **Connecteurs SQL** : un nouveau type de modèle permet de définir des requêtes SQL nommées avec paramètres, de la même façon que les connecteurs API définissent des endpoints HTTP. Les instructions sont restreintes (pas de DROP / TRUNCATE / ALTER) et les instructions en écriture exigent un drapeau « writable » explicite par requête.
- **Actions multi-étapes** : les liaisons d'actions (boutons dans la modale facture) et les règles de notification peuvent maintenant enchaîner plusieurs appels de connecteur. Chaque appel peut réutiliser les sorties des précédents via les placeholders `{call.N.fieldName}`. Marquez un appel **Arrêt sur échec** pour interrompre la chaîne.
- **Éditeur de règles de notification** réorganisé en 6 onglets (Général, Déclencheur, Canaux, Email, Actions, Test) — bien plus facile à parcourir.
- **Trace d'actions dans les notifications** : chaque notification affiche quelles actions se sont exécutées sous forme de pastilles colorées (OK / FAIL / STOP / SKIP). L'aperçu de la cloche résume en une ligne (« 2 actions exécutées » ou « 1 en échec sur 2 »).

### Corrections

- **Les actions ne partaient jamais depuis les notifications**. Plusieurs causes, toutes corrigées : le dispatcher était bloqué quand aucun destinataire email n'était défini, et une fermeture de connexion SMTP suspendue supprimait silencieusement chaque action.
- **Entrées fantômes dans les éditeurs** : supprimer un appel / endpoint / requête et sauvegarder laissait des données fantômes qui revenaient au prochain chargement. Les sauvegardes remplacent désormais entièrement le contenu du modèle.
- Le bouton **« Ajouter mapping »** sur les connecteurs API ne fonctionnait pas — cliquer dessus supprimait immédiatement la ligne. Corrigé.

### Autres

- Vérification de configuration réécrite contre le schéma actuel des connecteurs (elle validait encore des noms de propriétés qui n'existaient plus depuis des mois).
- Le flux d'événements live du Tech Dashboard lit maintenant depuis le journal d'exécution au lieu des erreurs de validation, et reste borné à la journée.
- Le widget Système de fichiers regroupe les chemins par partition pour que la même barre d'utilisation disque ne se répète plus pour chaque répertoire sur le même montage.

---

## 2026.05.6 — 2026-05-09 \{#v2026-05-6\}

Nouveau **Tableau de bord technique** pour l'équipe IT — distinct du tableau de bord métier, avec tout le nécessaire pour surveiller la plateforme d'un coup d'œil : santé JVM, connectivité base, espace disque, débit, erreurs, planificateur, etc.

### Nouveautés

- Nouvelle page **Documentation → Tableau de bord technique** avec 14 widgets : Santé système, ping BD, infos de build, Système de fichiers (libre / total par partition), Débit, Tendance erreurs, Taux de retry, Temps de traitement par modèle, Sessions actives, Journal en direct, Vérification de configuration, Tables BD, Erreurs récentes, Planificateur.
- La carte **Sessions actives** fonctionne désormais même quand l'authentification est désactivée — elle bascule sur un compteur d'IP en mémoire pour que l'équipe IT voie qui utilise l'application.

### Améliorations

- Le tableau de bord métier est réaligné visuellement — les panneaux d'une même rangée s'alignent maintenant à la même hauteur.
- Vérification de configuration réécrite — elle remontait 8 fausses erreurs sur des configurations parfaitement valides parce qu'elle validait des noms de propriétés qui n'existent plus depuis des mois.

---

## 2026.05.5 — 2026-05-08 \{#v2026-05-5\}

Passe d'architecture interne pour rendre NomaUBL plus souple sur les installations clients : noms de colonnes et de tables désormais entièrement configurables, droits par rôle réorganisés en lignes (plus faciles à étendre), et plusieurs problèmes Oracle de longue date corrigés.

### Nouveautés

- **Groupes de codes de statut** : les statuts peuvent être groupés (inflight, terminal, erreur, etc.) et par étapes (créée, envoyée, en attente, approuvée, rejetée). Les widgets du tableau de bord lisent maintenant depuis cette source unique au lieu de listes de codes en dur — ajouter un nouveau code de statut PA est une seule ligne dans la configuration.
- **Droits par rôle** refondus en une ligne par droit au lieu de listes séparées par des virgules. L'éditeur Rôles dans Paramètres est redessiné avec des cases par fonctionnalité, une gestion des sociétés plus conviviale, et une liste recherchable des pages autorisées.
- Tous les noms de colonnes et de tables sont maintenant configurables par installation client via les modèles **db-nomaubl-columns** et **db-nomaubl** — fini la dérive silencieuse si un client renomme une colonne JDE.

### Corrections

- **Cloche de notifications vide sur Oracle** : sur les installations JDE où statut / kco / etc. sont stockés en colonnes CHAR à largeur fixe, les règles de remplissage par espaces d'Oracle cassaient silencieusement les comparaisons d'égalité avec les binds JDBC string. Les notifications et beaucoup d'autres requêtes ne renvoyaient pas de lignes. Corrigé sur l'ensemble du backend (47 endroits).
- **Initialisation de la base** : les commentaires SQL contenant des points-virgules étaient coupés en deux par le séparateur d'instructions, produisant des erreurs « Unterminated string literal » au premier init.
- **Ordre des lignes du Journal de traitement** : deux événements d'un même job partageant la même seconde s'inversaient parfois entre deux rafraîchissements. Utilise désormais un départage explicite par ID de ligne, donc l'ordre est stable.

### Autre

- Le panneau Erreurs de validation de la modale facture affiche maintenant chaque erreur sur deux lignes (en-tête en haut, message en dessous) pour que le texte long des règles ne se batte plus pour l'espace horizontal.

---

## 2026.05.4 — 2026-05-07 \{#v2026-05-4\}

Tableau de bord refondu pour une mise en page plus claire, et la page Erreurs d'intégration devient un véritable outil d'analyse — les codes de règles s'accompagnent maintenant d'une description lisible, extraite des fichiers Schematron eux-mêmes.

### Nouveautés

- **Tableau de bord** : grille de widgets 12 colonnes en remplacement de la disposition empilée précédente. Cartes hero (Total / En vol / Rejetée — IT / Rejetée — Business), funnel pipeline, graphique de volume, activité récente, règles les plus en échec, répartition par société, couverture e-Reporting et santé aller-retour s'alignent proprement.
- Les cartes hero ouvrent maintenant une liste Factures correctement filtrée (avant le filtre était perdu).
- Le widget **Règles les plus en échec** a une bascule de catégorie (Tout / UBL / Intégration) et des lignes classées au lieu de barres proportionnelles — des comptes de 160 vs 10 sont maintenant visuellement distinguables.
- **Page Erreurs d'intégration** : nouvelle bascule de vue entre **par événement** (table à plat) et **par règle** (cartes groupées par règle, avec nombre de factures et pastilles par sévérité). Filtre catégorie pour séparer les erreurs de validation UBL des erreurs de cycle de vie / intégration.
- **Descriptions de règles partout** : les codes de règles comme `BR-CL-23` ou `BR-FR-23` montrent maintenant leur description humaine en tooltip et en ligne secondaire, tant sur le tableau de bord que dans Erreurs d'intégration.
- Le **mode clair** est désormais le mode par défaut pour une première visite. Quiconque avait explicitement choisi le mode sombre le conserve.

### Corrections

- **Panneaux du tableau de bord vides sur Oracle** : deux requêtes utilisaient `colonne <> ''` pour filtrer les lignes vides, mais sur Oracle les chaînes vides sont stockées comme NULL et `NULL <> ''` est traité comme faux — la clause WHERE s'effondrait et les deux requêtes renvoyaient zéro ligne. Corrigé.

---

## 2026.05.3 — 2026-05-06 \{#v2026-05-3\}

Notifications : les changements de statut d'une facture peuvent maintenant atteindre les utilisateurs via une boîte de réception dans le portail, par e-mail (avec le PDF de la facture joint par défaut) et via des appels d'API — le tout piloté par des règles que vous définissez dans l'interface.

### Nouveautés

- **Page Notifications** (dans Gestion) — boîte de réception portail avec filtre Toutes / Non lues, action « tout marquer comme lu », suppression par ligne, badges de statut colorés. Cliquez sur une ligne pour ouvrir la facture liée.
- **Icône cloche** dans la barre du haut avec un compteur de non-lus et une liste rapide des 6 dernières notifications. Sondage toutes les 30 secondes.
- **Éditeur de règles de notification** : définissez une règle par code de statut, choisissez les canaux (portail, email, appel API), le destinataire, le modèle d'email et une action API optionnelle. Inclut un panneau de Test qui exécute réellement la règle sur une vraie facture.
- **Canal e-mail** : le PDF de la facture est joint par défaut. Sujet et corps ont des valeurs par défaut sensées si vous les laissez vides. Les destinataires peuvent être un utilisateur du portail, un rôle, ou une liste d'adresses email (ou n'importe quelle combinaison).
- **Installations sans authentification** : les notifications fonctionnent même sans authentification — les lignes portail sont envoyées dans une boîte « diffusion » visible par tous.
- **Rétention** : les notifications plus anciennes que `notificationsRetentionDays` dans les paramètres globaux (90 jours par défaut) sont purgées quotidiennement.

---

## 2026.05.2 — 2026-05-06 \{#v2026-05-2\}

Soumission B2B française à la PA : pièces jointes PDF qualifiées (LISIBLE + documents métier) plus plusieurs corrections d'intégrité sur l'aller-retour.

### Nouveautés

- **Pièce jointe LISIBLE** : nouveau drapeau Y/N sur les modèles de document. Quand ON, un PDF humainement lisible est généré depuis l'UBL lui-même et réinjecté en tant que pièce jointe « LISIBLE ». Indépendant du sélecteur Attachment existant — les deux peuvent être actifs sur la même facture.
- **Pièces jointes additionnelles** : liste de documents métier qualifiés (`RIB`, `BON_LIVRAISON`, `BON_COMMANDE`, `PJA`, `BORDEREAU_SUIVI`, `DOCUMENT_ANNEXE`, etc.) à embarquer avec la facture. Éditable dans l'onglet Document ; les chemins acceptent des placeholders comme `%APP_HOME%`, `%DOC%`, `%DCT%`, `%KCO%`. Les fichiers manquants sont journalisés et ignorés — ils ne font jamais échouer le traitement.
- **TAG_CUSTOMER_SIRET** (BT-46) : nouvelle variable XSL pour le SIRET de l'acheteur, à côté du SIREN acheteur existant.

### Corrections

- **Sortie XML acceptable par la PA** : la déclaration XML de l'UBL doit correspondre exactement à `<?xml version="1.0" encoding="UTF-8" standalone="no"?>` — le code précédent émettait des variantes que la PA rejetait. Corrigé.
- **Affichage du montant ligne** dans la modale facture : les montants comportant une remise de ligne étaient recalculés et affichés faux (par ex. une ligne 45 × 12,75 avec une remise de 489,15 s'affichait 84,60 au lieu de 573,75 — le PDF était correct, seule la modale était fausse). Le montant est désormais lu directement dans l'UBL.
- **Corruption du fichier de configuration** : une passe de ré-indentation désérialisait toute chaîne commençant par `{` comme du JSON imbriqué — y compris des placeholders comme `{content}` ou `{statusAt}` — laissant `config.json` impossible à recharger. Corrigé.

---

## 2026.05.1 — 2026-05-05 \{#v2026-05-1\}

Les modèles PDF deviennent des ressources réutilisables et partageables, avec un éditeur visuel complet — concevez une fois, réutilisez sur plusieurs documents.

### Nouveautés

- Nouvelle page **Modèles PDF** (dans Gestion) pour créer, copier, importer, exporter et éditer les mises en page indépendamment de tout document. Plusieurs documents peuvent partager le même modèle PDF — éditez une fois, propagez partout.
- Nouveau type de section **Block** pour des mises en page entièrement personnalisées pilotées par XPath : texte, champs avec formatage (date / devise / nombre / pourcentage), images, lignes / colonnes, rendu conditionnel, blocs répétés, et tableaux qui itèrent sur les lignes de facture ou d'autres collections.
- Nouveau **éditeur visuel sur canvas** pour les sections Block : vue arborescente, barre d'outils pour ajouter des éléments, inspecteur de propriétés. Chargez un XML d'exemple une fois et le sélecteur XPath autocomplète les chemins depuis des données réelles.
- L'**aperçu en direct** s'ouvre dans une grande modale en haut du formulaire — fini les allers-retours scroll-up / scroll-down pour itérer sur une mise en page.

### Corrections

- **Tableaux qui disparaissent des PDF** : un tableau dont `children` était listé avant son `xpath` perdait son itérateur et retournait 0 ligne. Corrigé.
- **Blocage de l'éditeur** sur édition rapide : l'éditeur sur canvas se rafraîchissait à chaque frappe et volait le focus. Corrigé.

---

## 2026.05.0 — 2026-05-05 \{#v2026-05-0\}

Version importante qui unifie le traitement des documents : les entrées XML et UBL passent par le même point d'entrée unique, c'est le modèle de document lui-même qui décide quel pipeline exécuter.

### Nouveautés

- **Une seule page Traiter un document** remplace les anciennes pages Process XML et Process UBL. La page adapte ses contrôles selon la source du modèle (spool XML, ou facture UBL déjà formée).
- **Propriété Source** sur chaque modèle de document (XML ou UBL). Pour les entrées UBL, la clé primaire (doc, dct, kco) est extraite du `cbc:ID` de la facture via une expression régulière. Un assistant intégré **Suggérer + Tester** dans l'onglet Document permet de coller un vrai ID et de générer la regex automatiquement.
- **Une seule commande CLI** : `-process` remplace `-xml` et `-ubl`. La CLI déduit le pipeline depuis la source du modèle.
- Nouvelle **page Documents** sous Gestion (séparée de Paramètres) pour gérer les modèles de document : ajouter, copier, importer, exporter, supprimer, description.
- **Générateur PDF réécrit** : le générateur monolithique est découpé en sections composables (En-tête, Parties, Tableau de lignes, TVA, Totaux, Paiement, Notes…). Chaque section peut être réordonnée ou configurée par modèle de document via l'éditeur de modèles PDF.
- **Modèles PDF par document** : le PDF de chaque facture est rendu depuis le modèle attribué à son document. Une nouvelle colonne `F564231.UHTMPL` trace quel modèle a été utilisé pour que l'aperçu PDF utilise toujours la bonne mise en page.

### Améliorations

- L'extraction des clés par nom de fichier (`DOC_DCT_KCO_ubl.xml`) n'est plus obligatoire. Les noms de fichiers UBL peuvent être n'importe quoi.
- Toutes les routes `/api/invoices/...` utilisent maintenant `(doc, dct, kco)` directement dans l'URL — plus rapide, plus propre et compatible PostgreSQL.
- L'aperçu PDF `/invoice/view` accepte soit le numéro de facture UBL (`?id=...`) soit la clé composée (`?doc=&dct=&kco=`).

---

## 2026.04.10 — 2026-05-04 \{#v2026-04-10\}

### Améliorations

- **Paramètres e-Invoicing** : il est désormais possible de configurer un mode hybride où les factures partent en SFTP mais où l'interrogation des statuts, la récupération du cycle de vie et les actions vendeur passent par l'API. Avant, la section API était masquée dès que le mode d'envoi passait à FTP.

### Corrections

- **BT-46 (SIRET acheteur)** en XSL : deux problèmes empêchaient l'émission correcte du SIRET acheteur. Corrigé — `TAG_CUSTOMER_SIRET` est désormais disponible dans le catalogue de l'Éditeur XSL et est correctement émis dans l'UBL.

---

## 2026.04.9 — 2026-04-30 \{#v2026-04-9\}

### Nouveautés

- Bouton **Télécharger UBL** dans l'onglet Historique de la modale de détail facture, à côté de Valider UBL. Sauvegarde le XML UBL brut sous le nom `{doc}-{dct}-{kco}.xml`.
- **Accueil automatique de l'assistant IA** : ouvrir le panneau chat pour la première fois d'une session envoie un message d'accueil localisé, l'assistant se présente et liste ses capacités principales sans qu'il faille saisir un prompt.

### Corrections

- **Éditeurs des paramètres affichant des données périmées** : passer d'une liste de référence à une autre pouvait ouvrir l'éditeur avec les lignes de la liste précédente. Corrigé.

---

## 2026.04.8 — 2026-04-29 \{#v2026-04-8\}

### Améliorations de l'assistant IA

- L'assistant peut désormais répondre à des questions comme **« pourquoi la facture X a-t-elle été rejetée »** ou **« qu'a dit la PA »** — il a accès à l'historique de cycle de vie de la facture (les mêmes données affichées dans l'onglet Historique).
- L'assistant connaît maintenant votre **catalogue de codes de statut** (y compris vos personnalisations) — il ne devine plus les codes à partir de mots comme « litige » et utilise le bon code.
- La zone de saisie du chat reprend automatiquement le focus dès qu'une réponse termine de streamer — fini le clic dans l'input avant chaque question de suivi.

---

## 2026.04.7 — 2026-04-29 \{#v2026-04-7\}

### Corrections

- **Assistant IA — accès documentation** : l'assistant échouait systématiquement à lire la documentation en ligne (erreurs `url_not_allowed`). Corrigé — l'assistant interroge correctement `docs.nomana-it.fr` pour répondre aux questions produit.
- **Chat de l'assistant IA** : les appels d'outils et leurs résultats sont désormais affichés sous forme de pastilles visibles dans le chat, donc tout échec est visible au lieu d'être silencieusement absorbé.

---

## 2026.04.6 — 2026-04-29 \{#v2026-04-6\}

### Améliorations

- **Assistant IA — recherche dans la documentation** : l'assistant choisit maintenant la bonne page de documentation au lieu de deviner ou d'abandonner. Il lit le sitemap de `docs.nomana-it.fr` au démarrage pour connaître les pages qui existent réellement.
- Deux nouveaux paramètres optionnels dans **Paramètres → Système → Global → IA** pour pointer l'assistant vers un site de documentation personnalisé ou en restreindre la portée.

---

## 2026.04.5 — 2026-04-29 \{#v2026-04-5\}

### Correction

- **Assistant IA — accès à la documentation** : sur les installations mises à jour depuis une version antérieure à 2026.04.4, l'assistant répondait qu'il n'avait pas accès à la documentation car le nouveau paramètre était manquant. Il utilise désormais `docs.nomana-it.fr` par défaut, sans intervention manuelle.

---

## 2026.04.4 — 2026-04-29 \{#v2026-04-4\}

### Nouveautés

- **Assistant IA — utilisation d'outils** : l'assistant peut désormais appeler des outils en cours de conversation pour répondre à votre question au lieu de deviner à partir de ses connaissances. Il peut consulter la documentation, lister des factures, expliquer un code de statut, récupérer les erreurs de validation d'une facture, et lister des rapports e-Reporting.
- Nouveaux paramètres IA (**Paramètres → Système → Global → IA**) : personnaliser le prompt système, restreindre la consultation de documentation à certains domaines, activer ou désactiver les outils de données.
- Les réponses de l'assistant sont désormais rendues en Markdown — titres, gras, listes, tableaux, blocs de code et liens s'affichent correctement au lieu de `###` / `**` bruts.

---

## 2026.04.3 — 2026-04-29 \{#v2026-04-3\}

E-Reporting passe en conformité totale avec la spécification officielle FNFE-MPE Flux 10, et plusieurs corrections autour du modèle de données e-Reporting et des éditeurs de paramètres.

### E-Reporting — conformité à la spécification Flux 10

- Le XML émis pour les Flux 10.1 / 10.3 respecte désormais la spécification officielle FNFE-MPE à l'élément près (balises et formats de dates corrects, EUR forcé sur chaque montant de taxe, jeu restreint de codes de catégorie).
- Les **transactions B2C** sont maintenant correctement agrégées comme exigé par la spec (règle G6.28) — plus jamais émises comme blocs de facture individuels. Le B2BINT conserve l'émission par facture.
- Nouveaux champs optionnels Déclarant / Émetteur / Destinataire / Processus métier sur le modèle **e-Reporting**, avec un éditeur dédié (sections Sender, Issuer, Business Process).
- **Codes de statut dédiés à l'e-Reporting** (9950–9957) au lieu de réutiliser les codes de statut des factures. Éditables dans **Paramètres → Système → ereporting-statuses**.
- **Les rapports B2C pouvaient être vides** : le rapport lisait les sous-totaux de TVA depuis une table qui n'était pas toujours alimentée, produisant un bloc `<Transactions>` vide. Lit maintenant prioritairement depuis le XML UBL, avec l'ancienne méthode en repli.

### Corrections

- **Éditeurs de listes — perte de focus à la saisie** : sur les 15 éditeurs de listes de référence (Statuts, Pays, Codes Action, Codes Devise, etc.) le curseur était éjecté du champ à chaque frappe, et les nouvelles lignes ne pouvaient jamais être remplies. Corrigé.
- L'éditeur **Statuts** perdait silencieusement les champs `type` et `description` du modèle à la sauvegarde, corrompant le modèle des statuts. Corrigé.
- **Tableau de bord / Carte À propos** : le Schematron EXTENDED-CTC-FR figure désormais à côté des autres, et les numéros de version affichés ne retombent plus sur la version source EN 16931 embarquée.

---

## 2026.04.2 — 2026-04-29 \{#v2026-04-2\}

### Correction

- **Re-validation d'une facture en échec** : cliquer sur *Valider UBL* sur une facture existante depuis l'onglet Historique (et le chemin de validation autonome) échouait avec une erreur de schéma. Corrigé.

---

## 2026.04.1 — 2026-04-29 \{#v2026-04-1\}

### Nouveautés

- **Profil de validation EXTENDED-CTC-FR** ajouté au validateur. Le profil Schematron actif est désormais choisi automatiquement selon le `CustomizationID` (BT-24) de la facture — EN 16931 + CIUS-FR pour les factures standard, EXTENDED-CTC-FR pour le profil Extended.
- Les **Customization IDs** sont désormais une liste de référence dédiée dans **Paramètres**, pré-remplie avec les URN standards français (EN 16931, FNFE Basic / Extended CTC, niveaux Factur-X, Peppol BIS Billing 3). L'éditeur UBL Defaults les propose dans une liste déroulante.
- Le **Journal de traitement** couvre désormais le traitement UBL (avant XML uniquement) — chaque exécution UBL apparaît dans le journal comme une exécution XML.

### Améliorations

- Le **mode Replace** purge désormais aussi l'historique de cycle de vie et les erreurs de validation au retraitement, donc les rejeux ne mélangent plus d'entrées périmées avec la nouvelle exécution.

### Corrections

- **Répertoire d'upload UBL** : un fichier UBL uploadé atterrissait dans un mauvais chemin (`<input>/_ubl/`) et la validation échouait ensuite avec « No such file or directory ». Les deux sont corrigés — les uploads vont dans `<input>/ubl/` et la validation résout correctement le chemin.

---

## 2026.04.0 — 2026-04-29 \{#v2026-04-0\}

Version majeure : l'e-Reporting (Flux 10.1 / 10.3) devient une fonctionnalité de premier plan, accompagnée d'un nouveau Journal de traitement et d'une nouvelle page Notes de version.

### Nouveautés

- **E-Reporting** : nouvelle page de premier niveau pour générer, lister et inspecter les rapports Flux 10.1 (B2C) et 10.3 (B2BINT). Inclut une fenêtre de génération avec sélecteur de période, une modale de détail avec les factures incluses et un export CSV / Excel, plus une action « Télécharger XML ».
- **Ligne de commande** : nouveau mode `-ereporting` avec filtres par plage de dates, société et flux.
- **Planificateur d'arrière-plan** : nouvelle tâche `ereportingInterval` pour générer automatiquement les rapports selon un calendrier.
- **Journal de traitement** : nouvelle page sous Gestion pour inspecter chaque exécution, avec une vue groupée (une ligne par job START → END avec badge de statut, durée et liste d'étapes dépliable) et une vue à plat. Filtres par mode, modèle, période (par défaut 7 derniers jours) et nom de fichier.
- **Page Notes de version** (sous Documentation) qui affiche ce fichier dans l'interface, en français ou en anglais selon la langue active, avec un sommaire.
- **Tableau de bord** : nouvelle carte « À propos de cette version » indiquant le numéro de version, la date de build et les versions des Schematron embarqués.

### Autre

- **Initialiser la base de données** crée maintenant les trois nouvelles tables e-Reporting (F564240 / F564241 / F564242) en plus des tables existantes. Les noms de tables sont configurables dans **Paramètres → db-nomaubl**.
- L'éditeur **Rôles** propose les deux nouvelles pages (Journal de traitement, Notes de version) pour pouvoir y donner accès aux rôles existants.

---

## 1.0.0 — Version initiale \{#v1-0-0\}

NomaUBL est une plateforme e-invoicing Java 17 + React qui transforme les sorties JD Edwards en documents **UBL 2.1** conformes, les valide, les soumet à une **Plateforme Agréée (PA)** française et trace l'intégralité du cycle de vie des factures.

### Pipeline principal (JDE → UBL → PA)

- **Extraction du XML JDE** depuis la file d'attente BIP (`F95630`/`F95631`/`F9563110`), l'archive JDE, en SFTP ou depuis le système de fichiers local ; routage par template de type de document (`invoices`, `credit_notes`, …).
- **Transformation XSLT 2.0** via Saxon-HE — produit des factures et avoirs UBL 2.1 à partir d'un framework XSL configurable (`ubl-common.xsl` + `ubl-template.xsl`).
- **Validation** : XSD (UBL 2.1) + Schematron — **EN 16931**, **BR-FR Flux 2** (CIUS-FR / FNFE-MPE) et **BR-FR CPRO** (Chorus Pro pour le B2G), avec gestion des sévérités (`fatal`, `error`, `warning`, `info`).
- **Soumission PA** en HTTP (Java 11 `HttpClient`), token OAuth2 mis en cache et auto-rafraîchi sur 401, plus un canal SFTP de secours.
- **Surcharges PA par société** via les templates `e-invoicing-{kco}` — credentials, endpoints et tokens indépendants par société émettrice.
- **Pré-vérification annuaire PPF** (non bloquante) via le template `e-directory` — recherche le client avant envoi et signale en avertissement les destinataires injoignables.
- **Génération PDF** via Oracle BI Publisher (`oracle.xdo`) avec post-traitement Ghostscript optionnel, et embarquement iText du PDF en `cac:AdditionalDocumentReference` dans l'UBL.
- **PA factice** (`paUseMock=Y`) avec scénarios succès / échec / token expiré pour les tests bout-en-bout sans plateforme réelle.

### Stockage des documents, statuts et cycle de vie

Schéma Oracle / PostgreSQL (configurable dans `db-nomaubl`) :

| Table | Rôle |
|---|---|
| `F564230` | Archive source — XML JDE original, drapeaux de traitement |
| `F564231` | Entête UBL — champs BT-* EN 16931, XML UBL généré, statut courant |
| `F564233` | Lignes UBL |
| `F564234` | Synthèse TVA par catégorie / taux |
| `F564235` | Événements de cycle de vie (historique) |
| `F564236` | Erreurs de validation XSD / Schematron |
| `F564237` | Journal de traitement runtime (un événement START / END / erreur par ligne) |
| `F564250`/`F564251`/`F564252` | Utilisateurs / Rôles / Sessions |

- **DDL adaptée au dialecte** via `DatabaseDialect` — Oracle (`BLOB`, `NUMBER`, `VARCHAR2`) et PostgreSQL (`BYTEA`, `INTEGER`, `VARCHAR`).
- L'action **Initialize Database** dans Settings crée tout le schéma et provisionne les rôles `admin` / `viewer` par défaut.
- **Dates JDE Julian** stockées en entiers (`CYYDDD - 1900000`) et converties à la volée pour l'IHM.

### Catalogue de statuts factures

- 30+ codes couvrant le cycle de vie complet **AFNOR XP Z12-014 V1.3** : `STATUS_CREATED → STATUS_VALIDATED → STATUS_SENT_TO_PA → STATUS_PENDING → STATUS_DEPOSITED → …` plus les états litige, factoring et erreurs de routage.
- Codes workflow internes (`9900`–`9907`) et codes UNTDID 1373 mappés à la PA (`1`, `8`, `10`, `37`, `43`, `45`–`51`).
- Tous les codes / libellés / mappings PA sont **pilotés par les données** depuis le template système `statuses` — éditables dans Settings.
- `StatusTransition.apply()` met à jour `F564231` et insère un événement `F564235` en un seul appel.

### CLI

Modes interactifs et batch — tous pilotés par un unique `config.json` :

| Mode | Rôle |
|---|---|
| `-config` | Ouvre l'IHM Swing (FlatLaf dark) |
| `-xml` | Traite des fichiers XML JDE : SINGLE / BURST / UBL / AUTO |
| `-ubl` | Valide + charge en base des fichiers UBL existants |
| `-fetch-single`, `-fetch-all` | Récupère depuis BIP / archive / répertoire + traitement |
| `-fetch-import` | Interroge la PA sur le statut des factures en attente (9906) |
| `-fetch-status` | Récupère les événements de cycle de vie depuis la PA et met à jour la base |
| `-extract` | Extrait les fichiers d'entrée/sortie d'un job BIP JDE |
| `-serve` | Serveur HTTP embarqué + ordonnanceur d'arrière-plan |
| `-install` | Provisionne l'arborescence d'un environnement |
| `-password` | Encode un mot de passe pour stockage |
| `-updUser` | Met à jour l'utilisateur JDE sur les jobs soumis |

### IHM Web (React 19 + Vite)

- **Dashboard** avec compteurs de statuts, tuile d'erreurs d'intégration, actions rapides et infos licence / version.
- **Factures** — liste paginée + filtrable, modale de détail (Résumé, Parties, Lignes, TVA, Notes, Historique, PDF), création / édition / copie / renvoi en place, set-statut (PA ou DB seul), envoi e-mail avec PDF en pièce jointe.
- **Erreurs d'intégration** — toutes les lignes de validation `F564236` sans facture associée (soumissions cassées).
- **Extract & Process** — récupération unitaire et batch depuis BIP, FTP, archive ou fichiers locaux.
- **Process UBL** — chargement et validation d'UBL XML existants.
- **Validate** — testeur XSD + Schematron pour des fichiers UBL ad hoc.
- **XSL Editor** — éditeur Monaco avec navigateur XML, sélecteur de variables conscient du template et installeur de framework par template.
- **XML Viewer** — visualiseur / formatteur Monaco avec chargement local + serveur et sauvegarde.
- **UBL Defaults** — valeurs par défaut par société (devise, moyens de paiement, catégories TVA, etc.).
- **Référentiel des statuts** — référence complète AFNOR XP Z12-014 V1.3.
- **Codes motifs** — référence complète AFNOR XP Z12-012 Annexe A.
- **Référentiel UBL** — glossaire BT-*.
- **Versions fichiers** — historique des versions adossé à SQLite pour les fichiers XSL / XSD / Schematron / RTF / config éditables, avec upload / restauration / téléchargement.

### Settings (gestionnaire de configuration)

- Édition à chaud de `config.json` depuis le navigateur. Templates système : `global`, `e-invoicing`, `e-directory`, `statuses`, `db-nomaubl`, `db-jde`, `ftp-jde`, `fetch-invoices`.
- Listes de codes : `invoice-types`, `vat-categories`, `vatex-codes`, `payment-means`, `scheme-ids`, `unit-codes`, `countries`, `note-types`, `currency-codes`, `rejection-reason-codes`, `action-codes`, `document-reference-codes`, `profile-ids`.
- Templates de type de document : par document RTF / XSL / clé de burst / routage / type de traitement.
- Templates de connecteurs API avec substitution de placeholders (`{{username}}`, `{{token}}`, `{{content}}`, …) et authentification enfichable (`NONE`, `BASIC`, `BEARER`, `API_KEY`, `OAUTH2`).
- Surcharges par société `e-invoicing-{kco}`.

### Authentification & RBAC

- Tables intégrées utilisateur / rôle / session (`F564250–F564252`).
- Hashs **PBKDF2-HMAC-SHA256**, changement de mot de passe forcé à la première connexion, liste blanche de pages par rôle et filtre par société par rôle.
- Activable via `authEnabled` dans `global` (off → pas de login).
- Rôles `admin` (complet) et `viewer` (lecture seule restreinte) provisionnés par défaut au **Initialize Database**.

### Ordonnanceur d'arrière-plan

Piloté depuis `global.fetch*Interval` (minutes — 0 désactive) :

- `fetchImportInterval` — polling périodique du statut import PA.
- `fetchStatusInterval` — récupération périodique du cycle de vie PA.
- `fetchAll.N.{interval,label,params}` — plusieurs jobs batch de traitement de documents.

### API HTTP embarquée

Un serveur REST + statique minimal (`com.sun.net.httpserver`) sert le bundle React sur `/` et sert `/api/*` pour les factures, templates, fetch / extract, validation, système de fichiers, licence, packaging, authentification, et la documentation OpenAPI sur `/api/docs`.

### E-mail & i18n

- Envoi SMTP (TLS / SSL) avec PDF en pièce jointe par facture.
- Traductions français / anglais complètes dans toute l'IHM.

### Licence

- Licences JWT signées RS256 vérifiées au runtime via une clé publique PEM embarquée — modes `full` (toutes fonctionnalités) ou `restricted` (vues lecture seule).
