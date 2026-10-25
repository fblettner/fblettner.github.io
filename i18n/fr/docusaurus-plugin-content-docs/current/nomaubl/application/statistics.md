---
title: Statistiques
description: "Le tableau de bord Statistiques de NomaUBL : où en sont les factures de la période en cinq étapes, comment elles ont circulé, depuis combien de temps attendent celles encore ouvertes, les statuts et motifs les plus fréquents, la répartition par type d'opération et par code activité, et un tableau détaillé par activité, statut et motif, le tout comparé à la période précédente, avec exports Excel et PDF."
keywords: [NomaUBL, statistiques, statistiques des statuts, étapes, évolution, temps d'attente, motifs, tableau croisé, code activité, type d'opération, période précédente, export Excel, export PDF, ventes, achats, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Statistiques

Le tableau de bord **Statistiques** répond à trois questions sur les factures de la période : **où en sont-elles**, **comment ont-elles circulé**, et **depuis combien de temps attendent celles encore ouvertes**. Chaque chiffre est comparé à la période précédente, et chaque barre ou ligne ouvre les factures correspondantes. Le tableau de bord contient aussi le tableau détaillé par code activité, statut et motif. Il lit la base NomaUBL, quel que soit le système source (JD Edwards, SAP, NetSuite ou un ERP personnalisé).

Accès : **Statistiques**, dans le groupe Navigation, après le [tableau de bord IT](./tech-dashboard.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1320 580" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="stat-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="stat-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="stat-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="stat-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="540" rx="14" fill="url(#stat-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Statistiques</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Où en sont les factures, comment elles ont circulé et depuis quand attendent les ouvertes.</text>
  <rect x="240" y="82" width="114" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="83" width="55" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="268.5" y="97.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Ventes</text>
  <line x1="297" y1="87" x2="297" y2="101" stroke="#334155" strokeWidth="1"/>
  <text x="325.5" y="97.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Achats</text>
  <rect x="364" y="83" width="223" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="374" y="97.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📅 1 – 31 oct. 2026 · Date document ▾</text>
  <rect x="599" y="89" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M601.5,94.5 L603.8,96.8 L607.8,92" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="616" y="98" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Exclure les erreurs traitées</text>
  <rect x="976" y="83" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1002.0" y="97.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="1036" y="83" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1058.0" y="97.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="240.0" y="122" width="202.5" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="140" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FACTURES ÉMISES</text>
  <text x="252.0" y="166" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">2 361</text>
  <text x="430.5" y="166" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">+3,1 %</text>
  <text x="252.0" y="182" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">1 312 400 € HT</text>
  <rect x="452.5" y="122" width="202.5" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="464.5" y="140" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARVENUES À LA PLATEFORME</text>
  <text x="464.5" y="166" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">94,8 %</text>
  <text x="643.0" y="166" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">+1,2 pts</text>
  <text x="464.5" y="182" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">2 102 terminées · 136 sur la plateforme</text>
  <rect x="665.0" y="122" width="202.5" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="677.0" y="140" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">À TRAITER</text>
  <text x="677.0" y="166" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">27</text>
  <text x="855.5" y="166" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">−12 %</text>
  <text x="677.0" y="182" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">8 à corriger · 19 en attente de décision</text>
  <rect x="877.5" y="122" width="202.5" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="889.5" y="140" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OUVERTES DEPUIS PLUS DE 7 JOURS</text>
  <text x="889.5" y="166" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">11</text>
  <text x="889.5" y="182" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sur 259 factures encore ouvertes</text>
  <rect x="240" y="208" width="840" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="228" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Où en sont les factures</text>
  <text x="403.24" y="228" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">2 361 factures sur la période, par étape</text>
  <rect x="254.0" y="238" width="4.0" height="10" fill="#f87171" fillOpacity="0.85"/>
  <rect x="258.0" y="238" width="6.5" height="10" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="264.5" y="238" width="33.0" height="10" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="297.6" y="238" width="46.8" height="10" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="344.3" y="238" width="722.9" height="10" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="254.0" y="258" width="156.0" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="262.0" y="266" width="8" height="8" rx="2" fill="#f87171"/>
  <text x="274.0" y="274" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">À corriger</text>
  <text x="262.0" y="286" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">8 · 0,3 %</text>
  <rect x="418.0" y="258" width="156.0" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="426.0" y="266" width="8" height="8" rx="2" fill="#fb923c"/>
  <text x="438.0" y="274" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Décision à prendre</text>
  <text x="426.0" y="286" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">19 · 0,8 %</text>
  <rect x="582.0" y="258" width="156.0" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="590.0" y="266" width="8" height="8" rx="2" fill="#4a9eff"/>
  <text x="602.0" y="274" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">En traitement</text>
  <text x="590.0" y="286" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">96 · 4,1 %</text>
  <rect x="746.0" y="258" width="156.0" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="754.0" y="266" width="8" height="8" rx="2" fill="#c084fc"/>
  <text x="766.0" y="274" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sur la plateforme</text>
  <text x="754.0" y="286" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">136 · 5,8 %</text>
  <rect x="910.0" y="258" width="156.0" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="918.0" y="266" width="8" height="8" rx="2" fill="#4ade80"/>
  <text x="930.0" y="274" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Terminées</text>
  <text x="918.0" y="286" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">2 102 · 89,0 %</text>
  <rect x="240" y="314" width="420" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="334" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Factures par étape sur la période</text>
  <text x="254" y="347" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Par semaine</text>
  <rect x="268.0" y="449.8" width="49.9" height="0.2" fill="#f87171" fillOpacity="0.85"/>
  <rect x="268.0" y="449.4" width="49.9" height="0.5" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="268.0" y="446.3" width="49.9" height="3.1" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="268.0" y="442.5" width="49.9" height="3.8" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="268.0" y="378.2" width="49.9" height="64.3" fill="#4ade80" fillOpacity="0.85"/>
  <text x="293.0" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">S40</text>
  <rect x="346.0" y="449.7" width="49.9" height="0.3" fill="#f87171" fillOpacity="0.85"/>
  <rect x="346.0" y="449.1" width="49.9" height="0.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="346.0" y="446.3" width="49.9" height="2.8" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="346.0" y="441.7" width="49.9" height="4.6" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="346.0" y="371.4" width="49.9" height="70.4" fill="#4ade80" fillOpacity="0.85"/>
  <text x="371.0" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">S41</text>
  <rect x="424.0" y="449.8" width="49.9" height="0.2" fill="#f87171" fillOpacity="0.85"/>
  <rect x="424.0" y="449.1" width="49.9" height="0.8" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="424.0" y="445.7" width="49.9" height="3.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="424.0" y="441.4" width="49.9" height="4.3" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="424.0" y="368.0" width="49.9" height="73.4" fill="#4ade80" fillOpacity="0.85"/>
  <text x="449.0" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">S42</text>
  <rect x="502.0" y="449.5" width="49.9" height="0.5" fill="#f87171" fillOpacity="0.85"/>
  <rect x="502.0" y="448.9" width="49.9" height="0.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="502.0" y="445.7" width="49.9" height="3.2" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="502.0" y="441.0" width="49.9" height="4.7" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="502.0" y="372.1" width="49.9" height="68.8" fill="#4ade80" fillOpacity="0.85"/>
  <text x="527.0" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">S43</text>
  <rect x="580.0" y="449.8" width="49.9" height="0.2" fill="#f87171" fillOpacity="0.85"/>
  <rect x="580.0" y="449.4" width="49.9" height="0.5" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="580.0" y="447.1" width="49.9" height="2.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="580.0" y="443.7" width="49.9" height="3.4" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="580.0" y="399.1" width="49.9" height="44.7" fill="#4ade80" fillOpacity="0.85"/>
  <text x="605.0" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">S44</text>
  <rect x="670" y="314" width="410" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="684" y="334" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Factures ouvertes par temps d'attente</text>
  <text x="684" y="347" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Jours depuis le dernier changement de statut</text>
  <rect x="697.8" y="448.8" width="48.9" height="1.2" fill="#f87171" fillOpacity="0.85"/>
  <rect x="697.8" y="446.4" width="48.9" height="2.4" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="697.8" y="416.2" width="48.9" height="30.1" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="697.8" y="368.0" width="48.9" height="48.2" fill="#c084fc" fillOpacity="0.85"/>
  <text x="722.2" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">≤ 1 j</text>
  <rect x="774.2" y="448.2" width="48.9" height="1.8" fill="#f87171" fillOpacity="0.85"/>
  <rect x="774.2" y="445.2" width="48.9" height="3.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="774.2" y="427.1" width="48.9" height="18.1" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="774.2" y="403.0" width="48.9" height="24.1" fill="#c084fc" fillOpacity="0.85"/>
  <text x="798.6" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">2 à 3 j</text>
  <rect x="850.6" y="449.4" width="48.9" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="850.6" y="447.0" width="48.9" height="2.4" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="850.6" y="441.0" width="48.9" height="6.0" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="850.6" y="434.9" width="48.9" height="6.0" fill="#c084fc" fillOpacity="0.85"/>
  <text x="875.0" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">4 à 7 j</text>
  <rect x="927.0" y="449.4" width="48.9" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="927.0" y="447.0" width="48.9" height="2.4" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="927.0" y="444.6" width="48.9" height="2.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="927.0" y="443.4" width="48.9" height="1.2" fill="#c084fc" fillOpacity="0.85"/>
  <text x="951.4000000000001" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">8 à 30 j</text>
  <rect x="1003.4" y="449.4" width="48.9" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="1003.4" y="448.2" width="48.9" height="1.2" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="1003.4" y="447.0" width="48.9" height="1.2" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="1003.4" y="444.6" width="48.9" height="2.4" fill="#c084fc" fillOpacity="0.85"/>
  <text x="1027.8" y="461" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">&gt; 30 j</text>
  <rect x="240" y="478" width="840" height="62" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="498" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Détail par code activité, statut et motif</text>
  <text x="254" y="522" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GROUPER PAR</text>
  <rect x="331.44" y="510" width="83" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="372.94" y="522.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Code activité</text>
  <rect x="420.44" y="510" width="48" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="444.44" y="522.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Statut</text>
  <rect x="474.44" y="510" width="68" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="508.44" y="522.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Code motif</text>
  <text x="562.44" y="522" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MESURE</text>
  <rect x="612.6800000000001" y="509" width="188" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="613.6800000000001" y="510" width="112" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="669.6800000000001" y="522.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Nombre de factures</text>
  <line x1="726.6800000000001" y1="514" x2="726.6800000000001" y2="524" stroke="#334155" strokeWidth="1"/>
  <text x="763.6800000000001" y="522.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Montant HT</text>
  <rect x="1016" y="508" width="50" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1041.0" y="521.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre indicateurs</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec l'écart à la préc.</text>
  <line x1="200" y1="157.0" x2="240" y2="157" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stat-arrow)"/>
  <rect x="20" y="248" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="263" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cinq étapes</text>
  <text x="30" y="276" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un bouton ouvre les factures</text>
  <line x1="200" y1="265.0" x2="254" y2="274" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stat-arrow)"/>
  <rect x="20" y="374" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="389" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Évolution</text>
  <text x="30" y="402" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par jour, semaine ou mois</text>
  <line x1="200" y1="391.0" x2="254" y2="404" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stat-arrow)"/>
  <rect x="20" y="492" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="507" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tableau détaillé</text>
  <text x="30" y="520" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">niveaux et mesure au choix</text>
  <line x1="200" y1="509.0" x2="254" y2="518" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stat-arrow)"/>
  <rect x="1120" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Excel et PDF</text>
  <text x="1130" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">toute la page</text>
  <line x1="1120" y1="97.0" x2="1030" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stat-arrow)"/>
  <rect x="1120" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ouvertes depuis plus de 7 j</text>
  <text x="1130" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pas de comparaison</text>
  <line x1="1120" y1="157.0" x2="1070" y2="162" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stat-arrow)"/>
  <rect x="1120" y="374" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="389" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Temps d'attente</text>
  <text x="1130" y="402" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">factures ouvertes seulement</text>
  <line x1="1120" y1="391.0" x2="970" y2="414" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stat-arrow)"/>
  <rect x="1120" y="492" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="507" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export du tableau</text>
  <text x="1130" y="520" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tel qu'affiché + les lignes</text>
  <line x1="1120" y1="509.0" x2="1066" y2="518" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#stat-arrow)"/>
</svg>

---

## En-tête

L'en-tête est le même que celui de la [Synthèse](./billing-overview.md#header) : **Ventes / Achats**, le [sélecteur de période](../configuration/default-periods.md#period-picker) (base *Date document* par défaut, ou *Date d'activité* et *Date d'archivage*), **Exclure les erreurs traitées** (activé par défaut) l'indication *Comparé au …* et **↻** pour recharger. La période précédente suit la [même règle](./billing-overview.md#previous-period). Deux boutons exportent toute la page :

| Bouton | Contenu |
|---|---|
| **Excel** | Une feuille par bloc : *Étapes*, *Statuts*, *Évolution*, *Temps d'attente*, *Types d'opération*, *Activités*, *Motifs*, *Tableau croisé*, et une feuille *Data* avec les factures sous-jacentes. |
| **PDF** | Chiffres clés, étapes, évolution, temps d'attente, statuts, types, activités, tableau détaillé et motifs. |

---

## Chiffres clés

| Chiffre | Valeur | Écart |
|---|---|---|
| **Factures émises** *(Achats : Factures reçues)* | Nombre de factures, avec le montant HT en dessous. | en % |
| **Parvenues à la plateforme** *(Achats : Intégrées)* | Part des factures *Sur la plateforme* ou *Terminées*. | en points |
| **À traiter** | *À corriger* + *Décision à prendre*, en rouge dès qu'il y en a. | en %, une baisse est favorable |
| **Ouvertes depuis plus de 7 jours** | Factures non terminées dont le dernier changement de statut date de plus de 7 jours, rapportées aux factures ouvertes. | — |

---

## Étapes \{#stages\}

Chaque statut appartient à l'une des **cinq étapes**, les mêmes que celles du filtre [statut par étape](./invoices.md#status-by-stage) d'E-Invoicing :

| Étape | Statuts |
|---|---|
| **À corriger** | Erreurs techniques : 213 Rejetée, 9904 Échec d'envoi à la PA, 9905 Échec de validation, 9907 Échec d'import par la PA, 9909 Échec d'export par la PA. |
| **Décision à prendre** | Erreurs métier : 206, 207, 208, 210, 221, 501, 600. |
| **En traitement** | Créées, envoyées ou en attente dans NomaUBL : 9900, 9901, 9902, 9903, 9906, 9912. |
| **Sur la plateforme** | En cours de transmission par la plateforme : 201, 202, 203, 204, 214, 224, 225, 226, 227, 9911, 9913. |
| **Terminées** | Statuts finaux ou approuvés : 200, 205, 209, 211, 212, 220, 228, 9908, 9914. |

Une étape **Autres** n'apparaît que si un statut hors de ces groupes a des factures. Les groupes viennent du [modèle des statuts](../configuration/system/statuses.md).

Le bloc **Où en sont les factures** présente une bande des cinq étapes, puis un bouton par étape avec son nombre, sa part et l'écart à la période précédente. Un bouton ouvre [E-Invoicing](./invoices.md) sur les statuts de l'étape.

---

## Évolution et temps d'attente

| Bloc | Contenu |
|---|---|
| **Factures par étape sur la période** | Barres empilées par étape, **par jour** jusqu'à 35 jours, **par semaine** jusqu'à 120 jours, **par mois** au-delà. Avec *Tout*, les douze derniers mois. Une barre ouvre les factures de l'intervalle et de l'étape. |
| **Factures ouvertes par temps d'attente** | Les factures non terminées, selon le nombre de jours depuis leur dernier changement de statut : `≤ 1 jour`, `2 à 3 jours`, `4 à 7 jours`, `8 à 30 jours`, `> 30 jours`, empilées par les quatre étapes ouvertes. |

---

## Statuts, motifs et répartitions

| Bloc | Contenu |
|---|---|
| **Statuts** | Une ligne par statut : libellé, code, barre, nombre, part sur la période et écart. Une ligne ouvre les factures dans ce statut. |
| **Motifs les plus fréquents** | Les huit motifs les plus souvent renseignés sur les factures de la période, chacun avec son statut principal. |
| **Par type d'opération** / **Par code activité** | Une barre empilée par étape pour chaque type d'opération et pour les huit principaux codes activité. |

---

## Détail par code activité, statut et motif \{#detail-table\}

Un tableau croisé prêt à l'emploi : lignes par **code activité → statut → code motif**, une colonne par **type d'opération** (`B2B`, `B2BINT`, `B2C`, `B2G`). Chaque valeur porte sa part dans le niveau supérieur — un motif rapporté à son statut, un statut à son activité, une activité à l'ensemble.

| Contrôle | Effet |
|---|---|
| **Grouper par** | *Code activité*, *Statut*, *Code motif*, dans n'importe quelle combinaison ; au moins un niveau reste actif. Le dépliage, les parts et l'export suivent le regroupement. |
| **Mesure** | *Nombre de factures* (par défaut) ou *Montant HT* (BT-109). Quelques factures peuvent porter l'essentiel des montants. |
| **Excel** | Ce tableau tel qu'affiché, avec les lignes qui le composent (`statistiques-count.xlsx` ou `statistiques-amount.xlsx`). |

Les lignes se déplient et se replient avec des sous-totaux à chaque niveau ; un statut qui n'a qu'un motif tient sur une seule ligne.

---

## Accès

Accorder la page **Statistiques** dans le groupe Navigation de la page [Rôles](../configuration/security/roles.md) ; le serveur et l'outil `status_statistics` de l'assistant IA contrôlent le même droit. Les chiffres suivent les sociétés et les [filtres de lignes](../configuration/security/roles.md#filtres-de-lignes) du rôle de l'utilisateur connecté.

---

## Conseils & bonnes pratiques

- **Surveiller *Ouvertes depuis plus de 7 jours*.** C'est le stock qui ne bouge plus ; le bloc des temps d'attente indique à quelle étape il est bloqué.
- **Comparer ce qui est comparable.** *Ce mois-ci* est comparé au mois précédent entier, *Cette année* aux mêmes dates un an plus tôt : choisir la période en conséquence avant de lire les écarts.
- **Passer le tableau détaillé en *Montant HT*** avant une réunion avec la comptabilité : le classement des activités change souvent.
- **Construire un rapport récurrent dans l'[Explorateur](./explorer.md)** quand une ventilation manque sur la page ; l'analyse fournie *Statistiques des statuts* est un bon point de départ.
- **L'envoyer par e-mail.** Un [rapport quotidien](../sync/scheduled-jobs/daily-digest.md#business-dashboards) peut envoyer la page en PDF ou en Excel, sur le mois écoulé ou le mois en cours, telle que la voit un rôle donné.
