---
title: Vue d'ensemble — Synthèse d'audit
description: "La page d'accueil de Nomasx-1 : le tableau de bord Synthèse d'audit — utilisateurs, rôles, conflits de séparation des tâches et exposition de licences en un coup d'œil, les conflits par rafraîchissement et par processus, les constats qui demandent une décision, le détail par processus et par composant de licence, la fraîcheur des données, l'activité et les utilisateurs les plus en conflit — avec un filtre par application, une période et l'export Excel / PDF."
keywords: [Nomasx-1, vue d'ensemble, synthèse d'audit, tableau de bord, séparation des tâches, SoD, exposition de licences, comptes dormants, comptes privilégiés, fraîcheur des données, export, PDF]
---

# Vue d'ensemble — Synthèse d'audit

**Vue d'ensemble**, première entrée du menu de Nomasx-1, ouvre la **Synthèse d'audit** : sur une seule page, les comptes, les conflits de séparation des tâches et la position de licences de chaque application connectée, ce qui demande une décision, et la fraîcheur des données. C'est la page à ouvrir avant une revue interne, et celle à exporter pour un comité de pilotage.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 790" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxaud-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxaud-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxaud-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxaud-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="750" rx="14" fill="url(#nxaud-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Synthèse d'audit</text>
  <text x="276" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Les comptes, les conflits de séparation des tâches et la situation des licences en un coup d'œil, ce qui demande une décision, et la fraîcheur des données.</text>
  <line x1="220" y1="78" x2="1100" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="90" width="840" height="56" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="107" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PÉRIODE</text>
  <rect x="254" y="113" width="196" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="128.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">▣  23 nov. 2025 – 22 nov. 2026  ▾</text>
  <text x="466" y="107" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <rect x="466" y="113" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="476" y="128.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Tous</text>
  <text x="656" y="128.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="1066" y="129" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Mis à jour à 09:15</text>
  <rect x="944.3199999999999" y="115" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="957.3199999999999" y="129.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <rect x="892.3199999999999" y="115" width="46" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="915.3199999999999" y="129.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⎙ PDF</text>
  <rect x="834.3199999999999" y="115" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="860.3199999999999" y="129.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⎙ Excel</text>
  <rect x="240.0" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Utilisateurs</text>
  <text x="252.0" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Comptes déclarés</text>
  <text x="252.0" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">412</text>
  <text x="252.0" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">380 actifs · 32 désactivés · 41 dormants</text>
  <rect x="452.5" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="464.5" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Rôles</text>
  <text x="464.5" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Rôles définis et leur affectation</text>
  <text x="464.5" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">96</text>
  <text x="464.5" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">81 affectés · 15 orphelins · 3 à plus de 10</text>
  <rect x="665.0" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="677.0" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Séparation des tâches</text>
  <text x="677.0" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Utilisateurs porteurs d'un conflit</text>
  <text x="677.0" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">37</text>
  <text x="677.0" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">1 204 lignes de conflit · 3 à privilèges</text>
  <rect x="877.5" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="889.5" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Exposition licences</text>
  <text x="889.5" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Au-delà de la souscription</text>
  <text x="889.5" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">84 500 €</text>
  <text x="889.5" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">4 composants sur 22 · 18 utilisateurs en trop</text>
  <rect x="240" y="260" width="520" height="176" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="280" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Conflits par rafraîchissement</text>
  <text x="254" y="293" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Les lignes de conflit à chaque rafraîchissement SoD sur la période, par processus métier</text>
  <text x="276" y="311.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">1K</text>
  <line x1="282" y1="308.0" x2="734" y2="308.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="334.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">750</text>
  <line x1="282" y1="331.0" x2="734" y2="331.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="357.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">500</text>
  <line x1="282" y1="354.0" x2="734" y2="354.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="380.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">250</text>
  <line x1="282" y1="377.0" x2="734" y2="377.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="403.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <line x1="282" y1="400.0" x2="734" y2="400.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <rect x="306.9" y="361.4" width="63.3" height="38.6" fill="#2b8cff" fillOpacity="0.85"/>
  <rect x="306.9" y="337.4" width="63.3" height="23.9" fill="#d4a017" fillOpacity="0.85"/>
  <rect x="306.9" y="320.9" width="63.3" height="16.6" fill="#e5484d" fillOpacity="0.85"/>
  <text x="338.5" y="412" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-05-27</text>
  <rect x="419.9" y="365.0" width="63.3" height="35.0" fill="#2b8cff" fillOpacity="0.85"/>
  <rect x="419.9" y="343.0" width="63.3" height="22.1" fill="#d4a017" fillOpacity="0.85"/>
  <rect x="419.9" y="327.3" width="63.3" height="15.6" fill="#e5484d" fillOpacity="0.85"/>
  <text x="451.5" y="412" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-08-28</text>
  <rect x="532.9" y="369.6" width="63.3" height="30.4" fill="#2b8cff" fillOpacity="0.85"/>
  <rect x="532.9" y="351.2" width="63.3" height="18.4" fill="#d4a017" fillOpacity="0.85"/>
  <rect x="532.9" y="338.4" width="63.3" height="12.9" fill="#e5484d" fillOpacity="0.85"/>
  <text x="564.5" y="412" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-10-28</text>
  <rect x="645.9" y="372.4" width="63.3" height="27.6" fill="#2b8cff" fillOpacity="0.85"/>
  <rect x="645.9" y="355.8" width="63.3" height="16.6" fill="#d4a017" fillOpacity="0.85"/>
  <rect x="645.9" y="344.8" width="63.3" height="11.0" fill="#e5484d" fillOpacity="0.85"/>
  <text x="677.5" y="412" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-11-21</text>
  <rect x="390" y="418" width="9" height="9" rx="2" fill="#2b8cff"/>
  <text x="403" y="426" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Procure to pay</text>
  <rect x="481.64" y="418" width="9" height="9" rx="2" fill="#d4a017"/>
  <text x="494.64" y="426" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Order to cash</text>
  <rect x="568.52" y="418" width="9" height="9" rx="2" fill="#e5484d"/>
  <text x="581.52" y="426" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Finance</text>
  <rect x="770" y="260" width="310" height="176" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="784" y="280" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui demande une décision</text>
  <text x="784" y="293" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Les constats du rapport d'évaluation, par gravité</text>
  <circle cx="788" cy="316" r="3.2" fill="#fb923c"/>
  <text x="800" y="319" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Violations SoD actives</text>
  <text x="800" y="330" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">12 règles sur 140 déclenchées</text>
  <text x="1066" y="319" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">37</text>
  <line x1="784" y1="335" x2="1066" y2="335" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="346" r="3.2" fill="#f87171"/>
  <text x="800" y="349" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Rôles auto-conflictuels</text>
  <text x="800" y="360" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">corriger le rôle résout ses détenteurs</text>
  <text x="1066" y="349" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <line x1="784" y1="365" x2="1066" y2="365" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="376" r="3.2" fill="#4ade80"/>
  <text x="800" y="379" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Combinaisons de rôles en conflit</text>
  <text x="800" y="390" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">séparer les tâches ou revoir les affectations</text>
  <text x="1066" y="379" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <line x1="784" y1="395" x2="1066" y2="395" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="406" r="3.2" fill="#f87171"/>
  <text x="800" y="409" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Composants au-delà de la souscription</text>
  <text x="800" y="420" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">acheter, ou retirer des droits</text>
  <text x="1066" y="409" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">84 500 €</text>
  <text x="1066" y="420" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">4</text>
  <rect x="240" y="448" width="273.3333333333333" height="140" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="468" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Par processus</text>
  <text x="254" y="481" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Utilisateurs en conflit par processus</text>
  <circle cx="258" cy="504" r="3.2" fill="#fb923c"/>
  <text x="270" y="507" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Procure to pay</text>
  <text x="499.33333333333326" y="507" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">22 utilisateurs</text>
  <text x="499.33333333333326" y="518" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">612 lignes de conflit</text>
  <line x1="254" y1="521" x2="499.33333333333326" y2="521" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="532" r="3.2" fill="#f87171"/>
  <text x="270" y="535" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Order to cash</text>
  <text x="499.33333333333326" y="535" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">9 utilisateurs</text>
  <text x="499.33333333333326" y="546" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">344 lignes de conflit</text>
  <line x1="254" y1="549" x2="499.33333333333326" y2="549" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="560" r="3.2" fill="#fb923c"/>
  <text x="270" y="563" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Finance</text>
  <text x="499.33333333333326" y="563" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">6 utilisateurs</text>
  <text x="499.33333333333326" y="574" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">248 lignes de conflit</text>
  <rect x="523.3333333333333" y="448" width="273.3333333333333" height="140" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="537.3333333333333" y="468" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Par composant de licence</text>
  <text x="537.3333333333333" y="481" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Utilisateurs avec des droits, face à la souscription</text>
  <text x="537.3333333333333" y="507" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">General Accounting</text>
  <text x="782.6666666666665" y="507" fill="#e2e8f0" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">64</text>
  <rect x="537.3333333333333" y="512" width="245.33333333333331" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
  <rect x="537.3333333333333" y="512" width="245" height="5" rx="2.5" fill="#2b8cff"/>
  <text x="537.3333333333333" y="535" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">Accounts Payable</text>
  <text x="782.6666666666665" y="535" fill="#e2e8f0" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">41</text>
  <rect x="537.3333333333333" y="540" width="245.33333333333331" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
  <rect x="537.3333333333333" y="540" width="157" height="5" rx="2.5" fill="#2b8cff"/>
  <text x="537.3333333333333" y="563" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">Sales Order Management</text>
  <text x="782.6666666666665" y="563" fill="#e2e8f0" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">28</text>
  <rect x="537.3333333333333" y="568" width="245.33333333333331" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
  <rect x="537.3333333333333" y="568" width="108" height="5" rx="2.5" fill="#2b8cff"/>
  <rect x="806.6666666666665" y="448" width="273.3333333333333" height="140" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="820.6666666666665" y="468" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Fraîcheur des données</text>
  <text x="820.6666666666665" y="481" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">La dernière collecte par module</text>
  <circle cx="824.6666666666665" cy="504" r="3.2" fill="#4ade80"/>
  <text x="836.6666666666665" y="507" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">SECURITY</text>
  <rect x="883.1946666666665" y="496" width="60" height="14" rx="7.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="913.1946666666665" y="506.2" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-11-21</text>
  <text x="1065.9999999999998" y="507" fill="#94a3b8" fontSize="7.8" textAnchor="end" fontFamily="system-ui, sans-serif">il y a 1 jour</text>
  <circle cx="824.6666666666665" cy="532" r="3.2" fill="#fb923c"/>
  <text x="836.6666666666665" y="535" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">LICENSE</text>
  <rect x="878.3786666666665" y="524" width="60" height="14" rx="7.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="908.3786666666665" y="534.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-11-17</text>
  <text x="1065.9999999999998" y="535" fill="#94a3b8" fontSize="7.8" textAnchor="end" fontFamily="system-ui, sans-serif">il y a 5 jours</text>
  <circle cx="824.6666666666665" cy="560" r="3.2" fill="#f87171"/>
  <text x="836.6666666666665" y="563" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">AUDIT_TRAIL</text>
  <rect x="897.6426666666665" y="552" width="60" height="14" rx="7.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="927.6426666666665" y="562.2" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-07-04</text>
  <text x="1065.9999999999998" y="563" fill="#94a3b8" fontSize="7.8" textAnchor="end" fontFamily="system-ui, sans-serif">il y a 141 jours</text>
  <rect x="240" y="600" width="520" height="150" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="620" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs transactionnels par mois</text>
  <text x="254" y="633" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Utilisateurs distincts avec des transactions, applications cumulées</text>
  <text x="276" y="649.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">400</text>
  <line x1="282" y1="646.0" x2="734" y2="646.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="667.5" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">300</text>
  <line x1="282" y1="664.5" x2="734" y2="664.5" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="686.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">200</text>
  <line x1="282" y1="683.0" x2="734" y2="683.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="704.5" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">100</text>
  <line x1="282" y1="701.5" x2="734" y2="701.5" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="723.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <line x1="282" y1="720.0" x2="734" y2="720.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <rect x="298.6" y="697.1" width="42.2" height="22.9" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="319.6666666666667" y="732" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-06</text>
  <rect x="373.9" y="695.6" width="42.2" height="24.4" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="395.0" y="732" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-07</text>
  <rect x="449.2" y="698.5" width="42.2" height="21.5" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="470.3333333333333" y="732" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-08</text>
  <rect x="524.6" y="694.8" width="42.2" height="25.2" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="545.6666666666666" y="732" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-09</text>
  <rect x="599.9" y="693.4" width="42.2" height="26.6" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="620.9999999999999" y="732" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-10</text>
  <rect x="675.2" y="694.1" width="42.2" height="25.9" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="696.3333333333333" y="732" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-11</text>
  <rect x="770" y="600" width="310" height="150" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="784" y="620" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs les plus en conflit</text>
  <text x="784" y="633" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Lignes de conflit par utilisateur, privilèges signalés</text>
  <circle cx="788" cy="656" r="3.2" fill="#f87171"/>
  <text x="800" y="659" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">JDOE</text>
  <text x="800" y="670" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">John Doe</text>
  <text x="1066" y="659" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">64 lignes</text>
  <text x="1066" y="670" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">3 processus</text>
  <line x1="784" y1="675" x2="1066" y2="675" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="686" r="3.2" fill="#fb923c"/>
  <text x="800" y="689" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">ASMITH</text>
  <text x="800" y="700" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Anna Smith</text>
  <text x="1066" y="689" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">41 lignes</text>
  <text x="1066" y="700" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">2 processus</text>
  <line x1="784" y1="705" x2="1066" y2="705" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="716" r="3.2" fill="#fb923c"/>
  <text x="800" y="719" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">BMARTIN</text>
  <text x="800" y="730" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Bruno Martin</text>
  <text x="1066" y="719" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">28 lignes</text>
  <text x="1066" y="730" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">2 processus</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">s'applique aux deux graphiques</text>
  <line x1="200" y1="117.0" x2="292" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
  <rect x="20" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Tous = les totaux</text>
  <line x1="200" y1="207.0" x2="476" y2="129" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tendance</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">empilée par processus</text>
  <line x1="200" y1="357.0" x2="300" y2="370" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
  <rect x="20" y="500" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="515" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Par processus</text>
  <text x="30" y="528" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">en rouge : comptes à privilèges</text>
  <line x1="200" y1="517.0" x2="260" y2="533" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
  <rect x="20" y="660" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="675" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Activité mensuelle</text>
  <text x="30" y="688" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateurs avec transactions</text>
  <line x1="200" y1="677.0" x2="300" y2="690" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
  <rect x="1120" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Excel · PDF · ↻</text>
  <text x="1130" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">exportent la page telle quelle</text>
  <line x1="1120" y1="117.0" x2="884.3199999999999" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
  <rect x="1120" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre chiffres</text>
  <text x="1130" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateurs, rôles, SoD, licences</text>
  <line x1="1120" y1="207.0" x2="1050" y2="203" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
  <rect x="1120" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Liste des décisions</text>
  <text x="1130" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par gravité, avec le chiffre</text>
  <line x1="1120" y1="337.0" x2="1060" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
  <rect x="1120" y="480" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="495" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fraîcheur</text>
  <text x="1130" y="508" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vert &lt; 2 jours, rouge &gt; 8</text>
  <line x1="1120" y1="497.0" x2="1059.9999999999998" y2="508" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
  <rect x="1120" y="640" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="655" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs en tête</text>
  <text x="1130" y="668" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le plus de lignes de conflit</text>
  <line x1="1120" y1="657.0" x2="1074" y2="658" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxaud-arrow)"/>
</svg>

---

## La barre \{#bar\}

| Contrôle | Effet |
|---|---|
| **Période** | S'ouvre sur *12 derniers mois*. Elle s'applique aux deux graphiques temporels : les conflits par rafraîchissement et les utilisateurs actifs par mois. |
| **Application** | **Tous** affiche les totaux de l'ensemble des applications ; en choisir une restreint chaque widget à celle-ci. |
| **Excel**, **PDF** | Exportent la page telle qu'elle se présente — application choisie et période. Le PDF est une synthèse : une page de garde avec la période et le filtre, les quatre chiffres en cartes, les graphiques dessinés, les listes en tableaux. |
| **↻** | Recharge chaque widget ; *Mis à jour à* donne l'heure des données. |

---

## Les quatre chiffres \{#figures\}

| Carte | Chiffre | Ligne de détail |
|---|---|---|
| **Utilisateurs** — comptes déclarés | Les comptes collectés. | Actifs · désactivés · **dormants** : actifs sans connexion depuis 90 jours. |
| **Rôles** — rôles définis et leur affectation | Les rôles définis. | Attribués · **orphelins** (attribués à personne) · utilisateurs titulaires de plus de 10 rôles, avec le maximum. |
| **Séparation des tâches** — utilisateurs porteurs d'un conflit | Les utilisateurs porteurs d'au moins un conflit. | Lignes de conflit · utilisateurs privilégiés en conflit · processus métier concernés. |
| **Exposition licences** — composants déployés au-delà de la souscription | La valeur des utilisateurs en surnombre par rapport aux quantités souscrites : prix catalogue plus trois ans de support par utilisateur en trop. | Composants en dépassement sur l'ensemble des composants · utilisateurs en surnombre. |

L'exposition s'appuie sur les [licences souscrites](./licenses/subscribed.md) et le [catalogue de prix](./settings/pricing/pricing.md) : un composant sans prix compte pour zéro.

---

## Ce qui demande une décision \{#decisions\}

Les constats du [rapport d'évaluation Sécurité & SoD](./reports/security-sox.md), un par ligne, avec une pastille de couleur — rouge pour agir, orange pour examiner, bleu pour information, vert quand rien n'est relevé — et le nombre ou le montant à droite :

| Constat | Action attendue |
|---|---|
| **Violations SoD actives** — ou *Aucune violation SoD*, ou *Aucune matrice SoD définie* | Les règles de la matrice déclenchées sur l'ensemble des règles, et les associations privilégiées. Rouge dès qu'un utilisateur privilégié est concerné. Sans matrice, la définir dans [Paramètres → SoD](./settings/sod/matrix.md). |
| **Rôles auto-conflictuels** | Un rôle accorde à lui seul les deux côtés d'une paire incompatible : corriger le rôle règle le cas de tous ses titulaires. |
| **Combinaisons de rôles en conflit** | Des paires de rôles qui ne contreviennent à la séparation des tâches que détenues ensemble : séparer les fonctions ou revoir les attributions. |
| **Composants au-delà de la souscription** | Plus d'utilisateurs disposant de droits que de licences : acheter, ou retirer des droits. Le montant est l'exposition ; rouge à partir de 250 000, orange à partir de 25 000. |
| **Comptes à privilèges** | Accès de super-utilisateur : vérifier que chacun a un titulaire, une justification et une revue trimestrielle. |
| **Comptes actifs dormants** | Aucune connexion depuis 90 jours, dont les comptes jamais utilisés : désactiver ou recertifier. |
| **Comptes génériques / partagés** | Les actions ne peuvent pas être imputées à une personne : les remplacer par des comptes nominatifs. |
| **Droits sur \*PUBLIC** | Des objets ouverts par défaut à tous les utilisateurs : vérifier qu'aucun ne correspond à une transaction sensible. |
| **Comptes actifs sans rôle** | Un provisionnement incomplet, ou des comptes à désactiver. |
| **Droits attribués directement à l'utilisateur** | Des droits accordés à un utilisateur plutôt qu'à un rôle, hors du contrôle d'accès par rôle. |
| **Utilisateurs à plus de 10 rôles** | Une accumulation de rôles : ajuster, puis relancer la détection. |
| **Rôles orphelins** | Des rôles attribués à personne : les supprimer ou les réaffecter. |

---

## Tendance et détail \{#detail\}

| Widget | Contenu |
|---|---|
| **Conflits par rafraîchissement** | Les lignes de conflit à chaque rafraîchissement SoD de la période, empilées par processus métier — la tendance de la remédiation. |
| **Par processus** | Les utilisateurs en conflit par processus métier, avec le nombre de lignes de conflit ; en rouge quand des utilisateurs privilégiés en font partie. |
| **Par composant de licence** | Les utilisateurs disposant de droits par composant, face à la quantité souscrite. Les comptes techniques et liés sont exclus ; un utilisateur actif s'est connecté au cours des 90 derniers jours. |
| **Fraîcheur des données** | La dernière collecte par module, avec son ancienneté : vert sous 2 jours, orange sous 8, rouge au-delà. Une ligne rouge signale des chiffres anciens. |
| **Utilisateurs transactionnels par mois** | Les utilisateurs distincts ayant des transactions chaque mois, toutes applications confondues. |
| **Utilisateurs les plus en conflit** | Les utilisateurs porteurs du plus grand nombre de lignes de conflit, avec le nombre de processus ; les comptes privilégiés sont signalés. |

Le détail derrière chaque widget se trouve dans les écrans : [Conflits](./applications/conflicts/summary.md), [Utilisateurs](./security/users.md), [Rôles](./security/roles.md), [Rapport d'utilisation](./licenses/usage-report.md), [Rapport financier](./licenses/financial-report.md).

---

## Qui la voit \{#access\}

Chaque widget ne s'affiche que si l'utilisateur peut lancer sa requête : sans accès aux données de séparation des tâches, la page s'affiche sans ces widgets. Le périmètre de données des rôles de l'utilisateur s'applique à chaque chiffre et à l'export.

---

## Voir aussi

- [Explorateur de données](./data-explorer.md) — pour aller au-delà de la synthèse, selon n'importe quel champ.
- [Évaluation Sécurité & SoD](./reports/security-sox.md) — le rapport complet derrière la liste des décisions.
