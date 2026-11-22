---
title: Employés
description: "Effectif des employés d'une application JD Edwards connectée dans Nomasx-1 — personnes internes et externes dans le temps, synthèse par jour de collecte et liste détaillée, pour les licences comptées par employé."
keywords: [Nomasx-1, applications, employés, effectif, métrique de licence, Employee, JD Edwards, paie]
---

# Employés

Le menu **Employés** compte les personnes qu'une application connectée connaît comme employés — la base des licences vendues par employé. Trois entrées : **Tableau de bord** trace l'effectif dans le temps, **Synthèse** le donne par jour de collecte et par groupe, **Détails** liste les personnes derrière chaque chiffre. Accès : **Applications → Employés**.

Chaque collecte prend une photo du jour : l'historique s'enrichit d'exécution en exécution, et une tendance apparaît après quelques collectes.

---

## Vue d'ensemble \{#dashboard\}

Le **Tableau de bord** trace une courbe par groupe — **INTERNAL_COUNT** et **EXTERNAL_COUNT** — avec un point par jour de collecte. **Application** le restreint à une application (ou à **Tous**) ; **Excel** et **PDF** l'exportent, le bouton d'actualisation le relit.

<svg viewBox="0 0 1320 410" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="emd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="emd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="emd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="emd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="366" rx="14" fill="url(#emd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="261" y="50" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Employés</text>
  <text x="261" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Employés JDE — effectifs internes et externes dans le temps, par application.</text>
  <rect x="233" y="84" width="854" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="102" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <rect x="245" y="108" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="255" y="121.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Tous   ⌄</text>
  <rect x="805" y="106" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="830.0" y="120.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="861" y="106" width="38" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="880.0" y="120.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="905" y="106" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="918.0" y="120.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <text x="941" y="121" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Mis à jour à 08:12</text>
  <rect x="233" y="146" width="854" height="220" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="247" y="168" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Employés — internes et externes</text>
  <line x1="285" y1="190.0" x2="1055" y2="190.0" stroke="#1f2937" strokeWidth="0.8"/>
  <text x="277" y="193.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">240</text>
  <line x1="285" y1="225.0" x2="1055" y2="225.0" stroke="#1f2937" strokeWidth="0.8"/>
  <text x="277" y="228.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">180</text>
  <line x1="285" y1="260.0" x2="1055" y2="260.0" stroke="#1f2937" strokeWidth="0.8"/>
  <text x="277" y="263.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">120</text>
  <line x1="285" y1="295.0" x2="1055" y2="295.0" stroke="#1f2937" strokeWidth="0.8"/>
  <text x="277" y="298.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">60</text>
  <line x1="285" y1="330.0" x2="1055" y2="330.0" stroke="#1f2937" strokeWidth="0.8"/>
  <text x="277" y="333.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <path d="M285,206 L478,205 L670,205 L862,203 L1055,201" fill="none" stroke="#4a9eff" strokeWidth="2"/>
  <circle cx="285" cy="206" r="2.5" fill="#4a9eff"/>
  <circle cx="478" cy="205" r="2.5" fill="#4a9eff"/>
  <circle cx="670" cy="205" r="2.5" fill="#4a9eff"/>
  <circle cx="862" cy="203" r="2.5" fill="#4a9eff"/>
  <circle cx="1055" cy="201" r="2.5" fill="#4a9eff"/>
  <path d="M285,308 L478,306 L670,303 L862,304 L1055,300" fill="none" stroke="#4ade80" strokeWidth="2"/>
  <circle cx="285" cy="308" r="2.5" fill="#4ade80"/>
  <circle cx="478" cy="306" r="2.5" fill="#4ade80"/>
  <circle cx="670" cy="303" r="2.5" fill="#4ade80"/>
  <circle cx="862" cy="304" r="2.5" fill="#4ade80"/>
  <circle cx="1055" cy="300" r="2.5" fill="#4ade80"/>
  <text x="285.0" y="344" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-07-01</text>
  <text x="477.5" y="344" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-08-01</text>
  <text x="670.0" y="344" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-09-01</text>
  <text x="862.5" y="344" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-10-01</text>
  <text x="1055.0" y="344" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-11-01</text>
  <rect x="560.0" y="352" width="9" height="9" rx="2" fill="#4ade80"/>
  <text x="573.0" y="360" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">EXTERNAL_COUNT</text>
  <rect x="651.64" y="352" width="9" height="9" rx="2" fill="#4a9eff"/>
  <text x="664.64" y="360" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">INTERNAL_COUNT</text>
  <rect x="12" y="101" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="116" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application</text>
  <text x="22" y="129" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un ou tous les systèmes JDE</text>
  <line x1="197" y1="118.0" x2="245" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emd-arrow)"/>
  <rect x="12" y="185.83333333333331" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="200.83333333333331" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Internes</text>
  <text x="22" y="213.83333333333331" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type de recherche E, paie</text>
  <line x1="197" y1="202.83333333333331" x2="862.5" y2="202.83333333333331" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emd-arrow)"/>
  <rect x="12" y="289.0833333333333" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="304.0833333333333" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Externes</text>
  <text x="22" y="317.0833333333333" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tous les autres types</text>
  <line x1="197" y1="306.0833333333333" x2="477.5" y2="306.0833333333333" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emd-arrow)"/>
  <rect x="1119" y="99" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="114" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Excel · PDF · Actualiser</text>
  <text x="1129" y="127" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">exporter ou relire</text>
  <line x1="1119" y1="116.0" x2="815" y2="116" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emd-arrow)"/>
  <rect x="1119" y="339" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="354" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un point par jour de collecte</text>
  <text x="1129" y="367" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une photo à chaque collecte</text>
  <line x1="1119" y1="356.0" x2="660.0" y2="356" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emd-arrow)"/>
</svg>

---

## Synthèse \{#summary\}

**Synthèse** (*License - JDE Employees*) donne, pour chaque application et chaque jour de collecte, le nombre de personnes distinctes de chaque groupe.

<svg viewBox="0 0 1320 364" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ems-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ems-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ems-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ems-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="284" rx="14" fill="url(#ems-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">License - JDE Employees</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">10 lignes · 12 ms</text>
  <rect x="959" y="84" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="85" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="89" x2="1018" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="112" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="389" y="112" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="428.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="569" y="112" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="697" y="112" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="724.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="758" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="836" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="872.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="914" y="112" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="112" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="144" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="359" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="373" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="459" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE DE COLLECTE</text>
  <text x="599" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">GROUPE EMPLOYÉS</text>
  <text x="845" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace"># EMPLOYÉS</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="173" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="184.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-01</text>
  <text x="599" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">External</text>
  <text x="845" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">52</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="195" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="206.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-01</text>
  <text x="599" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Internal</text>
  <text x="845" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">221</text>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="217" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="228.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-10-01</text>
  <text x="599" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">External</text>
  <text x="845" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">44</text>
  <rect x="233" y="236" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="239" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="250.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="250.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-10-01</text>
  <text x="599" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Internal</text>
  <text x="845" y="250.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">218</text>
  <text x="233" y="282" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="270" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="283.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="283" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–10 sur 10</text>
  <text x="1087" y="283" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="256" y="191.0" width="180" height="32" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="260" y="197.0" width="172" height="20" rx="4" fill="rgba(74,158,255,0.10)"/>
  <text x="268" y="211.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Employees</text>
  <text x="426" y="211.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <rect x="215.0" y="320" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Date de collecte</text>
  <text x="225.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une photo par jour</text>
  <line x1="360.0" y1="320" x2="467" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ems-arrow)"/>
  <rect x="515.0" y="320" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Groupe Employés</text>
  <text x="525.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Internal · External</text>
  <line x1="660.0" y1="320" x2="607" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ems-arrow)"/>
  <rect x="815.0" y="320" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif"># Employés</text>
  <text x="825.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">numéros d'adresse distincts</text>
  <line x1="960.0" y1="320" x2="837" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ems-arrow)"/>
  <rect x="12" y="164.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="179.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions de la ligne (···)</text>
  <text x="22" y="192.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ou clic droit sur la ligne</text>
  <line x1="197" y1="181.0" x2="248" y2="181.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ems-arrow)"/>
  <rect x="12" y="206.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="221.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Display Employees</text>
  <text x="22" y="234.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les personnes derrière le total</text>
  <line x1="197" y1="223.0" x2="276" y2="223.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ems-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vers Excel</text>
  <line x1="1119" y1="134.0" x2="1042.5" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ems-arrow)"/>
</svg>

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `LEMP_APPS_ID` — identifiant de l'application. | Application connectée. |
| **Date de collecte** | `LEMP_DT_EXTRACT` — jour de la collecte. | Jour de la photo. |
| **Groupe Employés** | `Internal` / `External`. | *Internal* : type de recherche `E`. *External* : tout autre type de recherche. |
| **# Employés** | Numéros d'adresse distincts. | Effectif du groupe ce jour-là. |

Le bouton **···** d'une ligne (ou un clic droit) propose **Display Employees** : les *Détails* de cette application, filtrés sur le jour et le groupe. **Retour**, au-dessus des détails, ramène à la synthèse.

---

## Détails \{#details\}

**Détails** (*License - JDE Employees - Details*) liste les personnes, une ligne par numéro d'adresse et par jour de collecte.

<svg viewBox="0 0 1320 376" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="emp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="emp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="emp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="emp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="296" rx="14" fill="url(#emp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">License - JDE Employees - Details</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⏷  Filtres avancés</text>
  <text x="233" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">273 lignes · 12 ms</text>
  <rect x="959" y="118" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="119" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="131.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="123" x2="1018" y2="133" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="131.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="146" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="389" y="146" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="428.0" y="160.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="569" y="146" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="697" y="146" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="724.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="758" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="836" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="872.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="914" y="146" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="146" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="178" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="337" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="351" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="437" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE DE COLLE…</text>
  <text x="581" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">EMPLOYÉ ID</text>
  <text x="595" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">NOM EMPLOYÉ</text>
  <text x="705" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TYPE EMPLOYÉ</text>
  <text x="781" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TYPE</text>
  <text x="867" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SOCIÉTÉ</text>
  <text x="927" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE DE DÉBUT</text>
  <text x="1007" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE DE DERNIÈ…</text>
  <rect x="233" y="204" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-01</text>
  <text x="581" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">4021</text>
  <text x="595" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Doe, John</text>
  <text x="705" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">E</text>
  <text x="781" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Employees</text>
  <text x="867" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00001</text>
  <text x="927" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2019-03-04</text>
  <text x="1007" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="226" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-01</text>
  <text x="581" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">4388</text>
  <text x="595" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Smith, Anna</text>
  <text x="705" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">E</text>
  <text x="781" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Employees</text>
  <text x="867" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00001</text>
  <text x="927" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2021-09-01</text>
  <text x="1007" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="248" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-01</text>
  <text x="581" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">7710</text>
  <text x="595" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Wilson, Bob</text>
  <text x="705" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">V</text>
  <text x="781" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Suppliers</text>
  <text x="867" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00200</text>
  <text x="927" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-10-20</text>
  <text x="1007" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-10-31</text>
  <text x="233" y="294" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="282" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="295.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="295" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–50 sur 273</text>
  <text x="1087" y="295" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="332" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="347" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Employé</text>
  <text x="225.0" y="360" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">numéro d'adresse et nom</text>
  <line x1="360.0" y1="332" x2="573" y2="271.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emp-arrow)"/>
  <rect x="515.0" y="332" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="347" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type Employé · Type</text>
  <text x="525.0" y="360" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">type de recherche et libellé</text>
  <line x1="660.0" y1="332" x2="713" y2="271.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emp-arrow)"/>
  <rect x="815.0" y="332" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="347" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Début · Dernière activité</text>
  <text x="825.0" y="360" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">issues des tables de paie</text>
  <line x1="960.0" y1="332" x2="1015" y2="271.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emp-arrow)"/>
  <rect x="12" y="79" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="94" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres avancés</text>
  <text x="22" y="107" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application, date, groupe</text>
  <line x1="197" y1="96.0" x2="233" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emp-arrow)"/>
  <rect x="1119" y="151" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="166" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grouper</text>
  <text x="1129" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ex. par société ou type</text>
  <line x1="1119" y1="168.0" x2="872.0" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#emp-arrow)"/>
</svg>

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `LEMP_APPS_ID` — identifiant de l'application. Filtrable. | Application connectée. |
| **Date de collecte** | `LEMP_DT_EXTRACT` — jour. Filtrable. | Jour de la photo. |
| **Employé ID** | `LEMP_ID` — numéro d'adresse. | La personne. |
| **Nom Employé** | `LEMP_NAME` — nom dans le carnet d'adresses. | Identité. |
| **Type Employé** | `LEMP_TYPE` — code du type de recherche. | `E` pour un employé, un autre code sinon. |
| **Type** | `LEMP_TYPE_DESC` — libellé du type de recherche. | Signification du code. |
| **Société** | `LEMP_COMPANY` — société de rattachement. | Société de la personne. |
| **Date de début** | `LEMP_DT_START` — première date connue. | Embauche ou première saisie de temps. |
| **Date de dernière activité** | `LEMP_DT_WORK` — dernière date travaillée. | Dernière saisie de temps. |
| **Groupe Employés** | `Internal` / `External`. Filtrable. | Groupe dans lequel la personne est comptée. |

:::info[Spécifique à JDE]
Les personnes sont lues dans les tables de paie de JD Edwards EnterpriseOne — le fichier des employés (F060116) pour les employés, les tables de saisie des temps (F06116, F06116Z1) pour les autres — jointes au carnet d'adresses (F0101) pour le nom et le type de recherche, dont le libellé vient du code défini par l'utilisateur 01/ST. Une personne présente dans plusieurs tables n'est comptée qu'une fois par jour. L'étape s'exécute avec la collecte des licences (*Tâches → Collecter les licences*).
:::

---

## Conseils & bonnes pratiques

- **Comparer le dernier point au contrat.** Le chiffre qui compte est l'effectif à la date de décompte des licences ; le tableau de bord montre s'il est stable ou en hausse.
- **Examiner le groupe *External*.** Les personnes payées par saisie des temps sans fiche employé (prestataires, intérimaires) y figurent : vérifier avec les RH si le contrat les compte.
- **Exporter les détails** du jour retenu pour le décompte des licences et conserver le fichier avec les pièces de conformité.
