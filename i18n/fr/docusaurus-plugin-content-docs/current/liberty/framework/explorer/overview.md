---
title: Explorateur de données
description: "L'explorateur de données de Liberty Next : l'analyse libre des données d'une application sans écrire de SQL — volet des champs, lignes, mesures et filtres, période, vues tableau, croisé, graphiques et KPI, lignes de détail et descente, champs calculés, analyses enregistrées, tableaux de bord et export Excel / PDF, sur un modèle défini dans Paramètres → Explorateur."
keywords: [Liberty Next, explorateur de données, analyse, tableau croisé, reporting, BI libre-service, mesures, dimensions, descente, magasin de données]
---

# Explorateur de données

L'explorateur de données permet aux utilisateurs d'analyser seuls les données d'une application : choix des champs, regroupements, filtres, période, puis lecture du résultat en tableau, en tableau croisé, en graphique ou en cartes KPI — sans écrire de requête. Il s'applique à toute application connectée dont les données passent par un connecteur SQL.

Un opérateur décrit d'abord les données une fois pour toutes, sous la forme d'un **modèle**, dans **Paramètres → Explorateur**. Les utilisateurs ouvrent ensuite l'explorateur depuis la **boussole** de l'en-tête, visible dès qu'au moins un modèle leur est accessible.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 560" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exo-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exo-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exo-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="530" rx="14" fill="url(#exo-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Explorateur de données</text>
  <text x="240" y="60" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Pipeline CRM — affaires, clients, activités</text>
  <rect x="780" y="28" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="790" y="42.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">CRM pipeline · crm · pipeline ▾</text>
  <line x1="240" y1="72" x2="960" y2="72" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="82" width="217" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="83" width="85" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="283.5" y="97.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Analyses (2)</text>
  <line x1="327" y1="87" x2="327" y2="101" stroke="#334155" strokeWidth="1"/>
  <text x="392.0" y="97.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableaux de bord (1)</text>
  <rect x="467" y="83" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="477" y="97.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Affaires gagnées par pays ▾</text>
  <rect x="655" y="83" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="695.0" y="97.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="741" y="83" width="107" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.5" y="97.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer sous</text>
  <rect x="854" y="83" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="878.0" y="97.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="908" y="83" width="37" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="926.5" y="97.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="240" y="118" width="168" height="410" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="136" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">⌕  Rechercher un champ…</text>
  <line x1="240" y1="144" x2="408" y2="144" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="162" fill="#4a9eff" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾  Affaires</text>
  <rect x="366" y="150" width="35" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="383.5" y="162.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="266" y="182" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">Étape</text>
  <text x="266" y="200" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Responsable</text>
  <text x="266" y="218" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Date de clôture</text>
  <text x="266" y="236" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Nom</text>
  <text x="266" y="256" fill="#64748b" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">Σ Mesures</text>
  <text x="266" y="274" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">Σ  Montant</text>
  <text x="250" y="298" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Clients</text>
  <rect x="366" y="286" width="35" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="383.5" y="298.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="250" y="322" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Activités</text>
  <rect x="366" y="310" width="35" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="383.5" y="322.2" fill="#fb923c" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">1..n</text>
  <line x1="240" y1="342" x2="408" y2="342" stroke="#334155" strokeDasharray="4 3" strokeWidth="1"/>
  <text x="250" y="360" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">+ Nouveau champ calculé</text>
  <rect x="420" y="118" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="132.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Affaires ▾</text>
  <rect x="518" y="117" width="168" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="531.0" y="132.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <rect x="545" y="118" width="24" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="557.0" y="132.5" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⊞</text>
  <text x="583.0" y="132.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▮</text>
  <text x="609.0" y="132.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">∿</text>
  <text x="635.0" y="132.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◔</text>
  <text x="667.0" y="132.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">KPI</text>
  <rect x="692" y="117" width="55" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="719.5" y="132.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Détail</text>
  <text x="757" y="133" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Top</text>
  <rect x="779" y="118" width="40" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="789" y="132.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">100</text>
  <rect x="890" y="118" width="70" height="22" rx="5" fill="url(#exo-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="925.0" y="132.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Exécuter</text>
  <text x="420" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Mesure</text>
  <rect x="472" y="152" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="482" y="166.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Somme Montant ▾</text>
  <text x="604" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="656" y="152" width="96" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="666" y="166.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Automatique ▾</text>
  <text x="764" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Part</text>
  <rect x="794" y="151" width="180" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="820.0" y="165.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Aucune</text>
  <line x1="846" y1="156" x2="846" y2="168" stroke="#334155" strokeWidth="1"/>
  <text x="879.0" y="165.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">du parent</text>
  <rect x="913" y="152" width="60" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="943.0" y="165.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">du total</text>
  <text x="420" y="200" fill="#64748b" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▣ Période</text>
  <rect x="490" y="186" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="200.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Date de clôture ▾</text>
  <rect x="618" y="186" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="628" y="200.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Cette année ▾</text>
  <rect x="420" y="220" width="540" height="28" rx="6" fill="none" stroke="#334155" strokeDasharray="4 3" strokeWidth="1"/>
  <text x="430" y="238" fill="#64748b" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Lignes</text>
  <rect x="474" y="225" width="38" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="493.0" y="237.2" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Pays</text>
  <rect x="518" y="225" width="43" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="539.5" y="237.2" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Étape</text>
  <rect x="420" y="254" width="540" height="28" rx="6" fill="none" stroke="#334155" strokeDasharray="4 3" strokeWidth="1"/>
  <text x="430" y="272" fill="#64748b" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Mesures</text>
  <rect x="479" y="259" width="98" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="528.0" y="271.2" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Somme ▾  Montant</text>
  <text x="587" y="272" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">+</text>
  <rect x="420" y="288" width="540" height="28" rx="6" fill="none" stroke="#334155" strokeDasharray="4 3" strokeWidth="1"/>
  <text x="430" y="306" fill="#64748b" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="479" y="293" width="123" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="540.5" y="305.2" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Secteur  =  Industrie</text>
  <rect x="420" y="330" width="540" height="198" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="432" y="350" fill="#64748b" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">PAYS › ÉTAPE</text>
  <text x="948" y="350" fill="#64748b" fontSize="8.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">TOTAL</text>
  <line x1="420" y1="358" x2="960" y2="358" stroke="#1f2937" strokeWidth="1"/>
  <rect x="421" y="363" width="538" height="22" fill="rgba(255,255,255,0.03)"/>
  <text x="432" y="378" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾  France</text>
  <text x="908" y="378" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">165 000</text>
  <text x="948" y="378" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">86 %</text>
  <text x="452" y="402" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Négociation</text>
  <text x="908" y="402" fill="#e2e8f0" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">120 000</text>
  <text x="948" y="402" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">63 %</text>
  <text x="452" y="426" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Proposition</text>
  <text x="908" y="426" fill="#e2e8f0" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">45 000</text>
  <text x="948" y="426" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">23 %</text>
  <rect x="421" y="435" width="538" height="22" fill="rgba(255,255,255,0.03)"/>
  <text x="432" y="450" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾  Belgique</text>
  <text x="908" y="450" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">27 000</text>
  <text x="948" y="450" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">14 %</text>
  <text x="452" y="474" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Qualifiée</text>
  <text x="908" y="474" fill="#e2e8f0" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">27 000</text>
  <text x="948" y="474" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">14 %</text>
  <line x1="420" y1="490" x2="960" y2="490" stroke="#334155" strokeWidth="2"/>
  <text x="432" y="506" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Total</text>
  <text x="908" y="506" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">192 000</text>
  <text x="948" y="506" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">100 %</text>
  <rect x="10" y="74" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Analyses, tableaux de bord</text>
  <text x="20" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">enregistrés, partagés, exportés</text>
  <line x1="210" y1="91.0" x2="240" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="10" y="170" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Volet des champs</text>
  <text x="20" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">clic, entonnoir ou glisser</text>
  <line x1="210" y1="187.0" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="10" y="400" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Champs calculés</text>
  <text x="20" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">typés, testés par le serveur</text>
  <line x1="210" y1="417.0" x2="250" y2="356" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modèle</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un par magasin de données</text>
  <line x1="1000" y1="47.0" x2="960" y2="39" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1000" y="94" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="109" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vues</text>
  <text x="1010" y="122" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tableau, croisé, graphiques, KPI, détail</text>
  <line x1="1000" y1="111.0" x2="620" y2="117" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1000" y="196" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période</text>
  <text x="1010" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur tout champ date</text>
  <line x1="1000" y1="213.0" x2="728" y2="197" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1000" y="262" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étagères</text>
  <text x="1010" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lignes, mesures, filtres</text>
  <line x1="1000" y1="279.0" x2="960" y2="268" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
  <rect x="1000" y="420" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="435" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un clic descend</text>
  <text x="1010" y="448" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">aux lignes derrière un chiffre</text>
  <line x1="1000" y1="437.0" x2="908" y2="402" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exo-arrow)"/>
</svg>

---

## Les éléments \{#pieces\}

| Élément | Rôle | Page |
|---|---|---|
| **Modèle** | Un magasin de données d'une application : une entité centrale (le **pivot**, par exemple les affaires ou les lignes de facture) et les entités qui l'entourent (clients, activités…), chacune lue par une requête d'un connecteur et reliée aux autres par des relations. Une application peut compter plusieurs modèles. | [Construire un modèle](./model.md) |
| **Analyse** | Ce que l'utilisateur compose sur la page : lignes, mesures, filtres, période, vue. | [Analyser les données](./analysis.md) |
| **Champ calculé** | Un champ calculé à partir des autres (`AMOUNT * 0.6`, `year(CLOSE_DATE)`), typé et contrôlé par le serveur. | [Champs calculés](./calculated-fields.md) |
| **Analyse enregistrée, tableau de bord** | Une analyse conservée sous un nom, privée ou partagée ; un tableau de bord est une grille d'analyses enregistrées. Les deux s'exportent en Excel et en PDF. | [Analyses enregistrées et tableaux de bord](./saved-and-dashboards.md) |

---

## Qui voit quoi \{#access\}

- Un modèle est proposé aux titulaires d'un rôle qui l'accorde : dans **Paramètres → Access → Roles**, bloc **Beyond the menus**, type **Data Explorer**, puis un modèle ou tous les modèles d'une application. Les superutilisateurs voient tous les modèles. Voir [Rôles et permissions](../build/secure/roles-and-permissions.md#access).
- Le **périmètre de données** du rôle s'applique à chaque requête de l'explorateur : un utilisateur limité aux lignes d'une société dans les écrans retrouve exactement ces lignes dans l'explorateur, totaux compris. Voir [Périmètre de données](../build/secure/roles-and-permissions.md#data-scope).
- Une entrée de menu peut ouvrir l'explorateur sur un modèle précis (`/explorer/<app>/<model>`) : chaque dossier fonctionnel d'une application mène ainsi à ses propres données, et le sélecteur de modèle permet toujours d'en changer. Voir [Types d'entrées de menu](../build/menus/item-types.md#explorer).
- Seul un superutilisateur modifie **Paramètres → Explorateur** ; lui seul voit aussi le SQL d'une analyse et les avertissements du modèle (colonne disparue, mesure non numérique).

---

## Ce que l'explorateur n'est pas \{#limits\}

- **Un éditeur SQL.** L'utilisateur ne saisit jamais de SQL : l'explorateur construit une seule instruction à partir du modèle, identique sur Oracle, PostgreSQL et SQLite. Un champ calculé s'écrit dans un petit langage d'expressions, compilé par le serveur.
- **Sans limite.** Un agrégat lit au plus 50 000 lignes regroupées (au-delà, une mention signale des chiffres partiels) et affiche les N premiers groupes (**Top**, jusqu'à 10 000). La vue détail se parcourt page par page ; un export contient au plus 3 000 lignes par section.
- **Un remplaçant des tableaux de bord.** Les [tableaux de bord](../dashboards.md) sont conçus par un opérateur sur des requêtes choisies ; l'explorateur laisse les utilisateurs construire leurs propres vues sur un modèle.

---

## Pour aller plus loin

- [Construire un modèle](./model.md) — Paramètres → Explorateur, de zéro ou depuis un préréglage de l'assistant de création d'écran.
- [Analyser les données](./analysis.md) — la page, étape par étape.
