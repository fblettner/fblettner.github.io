---
title: Explorateur de données
description: "L'explorateur de données de Liberty Next : l'analyse libre des données d'une application sans écrire de SQL — volet des champs, lignes, mesures et filtres, période, vues tableau, croisé, graphiques et KPI, lignes de détail et descente, champs calculés, analyses enregistrées, tableaux de bord et export Excel / PDF, sur un modèle défini dans Liberty Next → Analyse → Explorateur."
keywords: [Liberty Next, explorateur de données, analyse, tableau croisé, reporting, BI libre-service, mesures, dimensions, descente, magasin de données]
---

# Explorateur de données

L'explorateur de données permet aux utilisateurs d'analyser seuls les données d'une application : choix des champs, regroupements, filtres, période, puis lecture du résultat en tableau, en tableau croisé, en graphique ou en cartes KPI — sans écrire de requête. Il s'applique à toute application connectée dont les données passent par un connecteur SQL, ou par les points d'accès d'un connecteur API.

Un opérateur décrit d'abord les données une fois pour toutes, sous la forme d'un **modèle**, dans **Liberty Next → Analyse → Explorateur**. Les utilisateurs ouvrent ensuite l'explorateur depuis la **boussole** de l'en-tête, visible dès qu'au moins un modèle leur est accessible, ou depuis une entrée de menu qui l'ouvre sur un modèle, une analyse enregistrée ou un tableau de bord.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 570" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exo-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exo-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exo-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="530" rx="14" fill="url(#exo-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="14" fontFamily="system-ui, sans-serif">◎</text>
  <text x="260" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Explorateur de données</text>
  <text x="260" y="60" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Pipeline CRM — affaires, clients, activités</text>
  <rect x="930" y="31" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="940" y="45.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">crm · Pipeline CRM     ▾</text>
  <rect x="892" y="31" width="30" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="907.0" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="848" y="31" width="39" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="867.5" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="747" y="31" width="96" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="795.0" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Ajouter à un menu</text>
  <rect x="684" y="31" width="58" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="713.0" y="45.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="587" y="31" width="92" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="633.0" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer sous</text>
  <rect x="514" y="31" width="68" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="548.0" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <line x1="221" y1="72" x2="1099" y2="72" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="84" width="228" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="85" width="92" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="287.0" y="99.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚗ Analyses (3)</text>
  <line x1="334" y1="89" x2="334" y2="103" stroke="#334155" strokeWidth="1"/>
  <text x="401.0" y="99.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Tableaux de bord (1)</text>
  <rect x="476" y="84" width="270" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="99.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">won_by_country  sales · Affaires gagnées par pays   ▾</text>
  <rect x="754" y="84" width="86" height="24" rx="5" fill="url(#exo-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="797.0" y="99.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">☷ Définition</text>
  <rect x="240" y="118" width="200" height="400" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="126" width="184" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="140.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">⌕ Rechercher un champ…</text>
  <text x="250" y="166" fill="#4a9eff" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Affaires</text>
  <rect x="400" y="156" width="34" height="14" rx="7.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="417.0" y="166.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="260" y="186" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">#</text>
  <text x="272" y="186" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Montant</text>
  <text x="430" y="186" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="ui-monospace, monospace">AMOUNT</text>
  <text x="260" y="204" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">T</text>
  <text x="272" y="204" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">Étape</text>
  <text x="430" y="204" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="ui-monospace, monospace">STAGE</text>
  <text x="260" y="222" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">▤</text>
  <text x="272" y="222" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Date de clôture</text>
  <text x="430" y="222" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="ui-monospace, monospace">CLOSE_DATE</text>
  <text x="260" y="240" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">T</text>
  <text x="272" y="240" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">Pays</text>
  <text x="430" y="240" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="ui-monospace, monospace">COUNTRY</text>
  <text x="260" y="258" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">T</text>
  <text x="272" y="258" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Responsable</text>
  <text x="430" y="258" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="ui-monospace, monospace">OWNER</text>
  <text x="250" y="284" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">› Clients</text>
  <rect x="400" y="274" width="34" height="14" rx="7.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="417.0" y="284.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="250" y="306" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">› Activités</text>
  <rect x="400" y="296" width="34" height="14" rx="7.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="417.0" y="306.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..n</text>
  <line x1="248" y1="346" x2="432" y2="346" stroke="#334155" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="252" y="364" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">+ Nouveau champ calculé</text>
  <rect x="452" y="118" width="628" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="127.0" width="20" height="20" rx="6" fill="#4a9eff" fillOpacity="0.15" stroke="#4a9eff" strokeWidth="1"/>
  <text x="472" y="140.5" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="490" y="140.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VUE</text>
  <rect x="582" y="126" width="112" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="592" y="140.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">deals  Affaires     ▾</text>
  <rect x="702" y="126" width="132" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="713" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <rect x="725" y="127" width="20" height="20" rx="4" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="735" y="141" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⊞</text>
  <text x="757" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▥</text>
  <text x="779" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">∿</text>
  <text x="801" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◔</text>
  <text x="823" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◠</text>
  <rect x="840" y="126" width="58" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="869.0" y="140.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">☰ Détail</text>
  <text x="904" y="141" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Top</text>
  <rect x="926" y="126" width="44" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="936" y="140.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">100</text>
  <rect x="1008" y="126" width="64" height="22" rx="5" fill="url(#exo-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1040.0" y="140.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="452" y="164" width="628" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="173.0" width="20" height="20" rx="6" fill="#4a9eff" fillOpacity="0.15" stroke="#4a9eff" strokeWidth="1"/>
  <text x="472" y="186.5" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">≡</text>
  <text x="490" y="186.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OPTIONS</text>
  <text x="582" y="187" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Mesure</text>
  <rect x="618.56" y="172" width="104" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="628.56" y="186.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Somme Montant  ▾</text>
  <text x="730.56" y="187" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="776.64" y="172" width="84" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="786.64" y="186.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Automatique ▾</text>
  <text x="868.64" y="187" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Part</text>
  <rect x="895.68" y="172" width="173" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="920.68" y="186.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Aucune</text>
  <line x1="945.68" y1="177" x2="945.68" y2="189" stroke="#334155" strokeWidth="1"/>
  <text x="977.68" y="186.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">du parent</text>
  <rect x="1010.68" y="173" width="57" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1039.1799999999998" y="186.5" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">du total</text>
  <rect x="452" y="210" width="628" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="219.0" width="20" height="20" rx="6" fill="#c084fc" fillOpacity="0.15" stroke="#c084fc" strokeWidth="1"/>
  <text x="472" y="232.5" fill="#c084fc" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="490" y="232.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PÉRIODE</text>
  <rect x="582" y="218" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="592" y="232.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">deals.CLOSE_DATE  Date de clôture  ▾</text>
  <rect x="780" y="218" width="96" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="828.0" y="232.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▤ Cette année  ▾</text>
  <rect x="452" y="256" width="628" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="265.0" width="20" height="20" rx="6" fill="#4a9eff" fillOpacity="0.15" stroke="#4a9eff" strokeWidth="1"/>
  <text x="472" y="278.5" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">≣</text>
  <text x="490" y="278.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LIGNES</text>
  <rect x="582" y="266" width="46" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="605.0" y="278.2" fill="#4a9eff" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Pays ✕</text>
  <rect x="634" y="266" width="51" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="659.5" y="278.2" fill="#4a9eff" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Étape ✕</text>
  <rect x="452" y="302" width="628" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="311.0" width="20" height="20" rx="6" fill="#4ade80" fillOpacity="0.15" stroke="#4ade80" strokeWidth="1"/>
  <text x="472" y="324.5" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Σ</text>
  <text x="490" y="324.5" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MESURES</text>
  <rect x="582" y="312" width="89" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="626.5" y="324.2" fill="#4ade80" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Somme Montant ✕</text>
  <circle cx="686" cy="321" r="8" fill="none" stroke="#475569" strokeDasharray="2 2"/>
  <text x="686" y="324.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="452" y="348" width="628" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="357.0" width="20" height="20" rx="6" fill="#fb923c" fillOpacity="0.15" stroke="#fb923c" strokeWidth="1"/>
  <text x="472" y="370.5" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷</text>
  <text x="490" y="370.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FILTRES</text>
  <rect x="582" y="358" width="132" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="648.0" y="370.2" fill="#fb923c" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Secteur = Distribution ✕</text>
  <rect x="452" y="396" width="628" height="140" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="466" y="416" fill="#e2e8f0" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CROISÉ</text>
  <text x="516.56" y="416" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">4 groupe(s) sur 120 ligne(s)</text>
  <rect x="1048" y="404" width="24" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1060.0" y="416.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">&lt;/&gt;</text>
  <line x1="453" y1="428" x2="1079" y2="428" stroke="#1f2937" strokeWidth="1"/>
  <text x="468" y="446" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ France</text>
  <text x="1020" y="446" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="ui-monospace, monospace">165 000</text>
  <text x="1066" y="446" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">86 %</text>
  <text x="486" y="466" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Négociation</text>
  <text x="1020" y="466" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">120 000</text>
  <text x="1066" y="466" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">63 %</text>
  <text x="486" y="486" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Proposition</text>
  <text x="1020" y="486" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">45 000</text>
  <text x="1066" y="486" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">23 %</text>
  <text x="468" y="506" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Belgique</text>
  <text x="1020" y="506" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="ui-monospace, monospace">27 000</text>
  <text x="1066" y="506" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">14 %</text>
  <rect x="20" y="84" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Analyses, tableaux de bord</text>
  <text x="30" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">enregistrés, partagés, exportés</text>
  <line x1="200" y1="101.0" x2="240" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="20" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Volet des champs</text>
  <text x="30" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">clic, entonnoir ou glisser</text>
  <line x1="200" y1="197.0" x2="272" y2="204" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="20" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Champs calculés</text>
  <text x="30" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">typés, testés par le serveur</text>
  <line x1="200" y1="377.0" x2="252" y2="360" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1140" y="30" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer, exporter</text>
  <text x="1150" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dans l'en-tête de la page</text>
  <line x1="1140" y1="47.0" x2="907.0" y2="31" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1140" y="84" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Définition</text>
  <text x="1150" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">masque champs et étagères</text>
  <line x1="1140" y1="101.0" x2="840" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1140" y="140" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vues</text>
  <text x="1150" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tableau, croisé, graphiques, KPI</text>
  <line x1="1140" y1="157.0" x2="768" y2="148" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1140" y="240" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période</text>
  <text x="1150" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur un champ date de l'entité</text>
  <line x1="1140" y1="257.0" x2="876" y2="229" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1140" y="330" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étagères</text>
  <text x="1150" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lignes, mesures, filtres</text>
  <line x1="1140" y1="347.0" x2="732" y2="367" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1140" y="470" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="485" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un clic descend</text>
  <text x="1150" y="498" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">aux lignes derrière un chiffre</text>
  <line x1="1140" y1="487.0" x2="1020" y2="462" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
</svg>

---

## Les éléments \{#pieces\}

| Élément | Rôle | Page |
|---|---|---|
| **Modèle** | Un magasin de données d'une application : une entité centrale (le **pivot**, par exemple les affaires ou les lignes de facture) et les entités qui l'entourent (clients, activités…), chacune lue par une requête ou une table d'un connecteur SQL (ou par un point d'accès d'un connecteur API) et reliée aux autres par des relations. Une application peut compter plusieurs modèles. | [Construire un modèle](./model.md) |
| **Analyse** | Ce que l'utilisateur compose sur la page : lignes, mesures, filtres, période, vue. | [Analyser les données](./analysis.md) |
| **Champ calculé** | Un champ calculé à partir des autres (`AMOUNT * 0.6`, `year(CLOSE_DATE)`), typé et contrôlé par le serveur. | [Champs calculés](./calculated-fields.md) |
| **Analyse enregistrée, tableau de bord** | Une analyse conservée sous un nom, privée ou partagée ; un tableau de bord est une grille d'analyses enregistrées. Les deux s'exportent en Excel et en PDF. | [Analyses enregistrées et tableaux de bord](./saved-and-dashboards.md) |

---

## Qui voit quoi \{#access\}

- Un modèle est proposé aux titulaires d'un rôle qui l'accorde : dans **Liberty Next → Administrer → Accès → Rôles**, bloc **Au-delà des menus**, type **Explorateur de données**, puis un modèle ou tous les modèles d'une application. Les superutilisateurs voient tous les modèles. Voir [Rôles et permissions](../build/secure/roles-and-permissions.md#access).
- Le **périmètre de données** du rôle s'applique à chaque requête de l'explorateur : un utilisateur limité aux lignes d'une société dans les écrans retrouve exactement ces lignes dans l'explorateur, totaux compris. Voir [Périmètre de données](../build/secure/roles-and-permissions.md#data-scope).
- Une entrée de menu peut ouvrir l'explorateur sur un modèle précis (`/explorer/<app>/<model>`) : chaque dossier fonctionnel d'une application mène ainsi à ses propres données, et le sélecteur de modèle permet toujours d'en changer. Voir [Types d'entrées de menu](../build/menus/item-types.md#explorer).
- Une analyse ou un tableau de bord partagé peut devenir une entrée de menu à part entière : un superutilisateur utilise **Ajouter à un menu**, et un clic sur l'entrée ouvre l'explorateur dessus, résultat compris. Voir [Ajouter à un menu](./saved-and-dashboards.md#menu).
- Seul un superutilisateur modifie **Liberty Next → Analyse → Explorateur** ; lui seul voit aussi le SQL d'une analyse et les avertissements du modèle (colonne disparue, mesure non numérique).

---

## Ce que l'explorateur n'est pas \{#limits\}

- **Un éditeur SQL.** L'utilisateur ne saisit jamais de SQL : l'explorateur construit une seule instruction à partir du modèle, identique sur Oracle, PostgreSQL et SQLite. Un champ calculé s'écrit dans un petit langage d'expressions, compilé par le serveur.
- **Sans limite.** Un agrégat lit au plus 50 000 lignes regroupées (au-delà, une mention signale des chiffres partiels) et affiche les N premiers groupes (**Top**, jusqu'à 10 000). La vue détail se parcourt page par page ; un export contient au plus 3 000 lignes par section.
- **Un remplaçant des tableaux de bord.** Les [tableaux de bord](../dashboards.md) sont conçus par un opérateur sur des requêtes choisies ; l'explorateur laisse les utilisateurs construire leurs propres vues sur un modèle.

---

## Pour aller plus loin

- [Construire un modèle](./model.md) — Liberty Next → Analyse → Explorateur, de zéro ou depuis un préréglage de l'assistant de création d'écran.
- [Analyser les données](./analysis.md) — la page, étape par étape.
