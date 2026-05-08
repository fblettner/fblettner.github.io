---
title: Tableau de bord
description: "Page d'accueil de NomaUBL — grille à 12 colonnes avec quatre cartes KPI hero (Total / En cours / Rejetée — IT / Rejetée — Business), funnel pipeline, graphique de volume, activité récente, factures bloquées, règles en échec, répartition par société, couverture e-reporting et aller-retour PA — pilotés par un seul filtre de plage de dates. Le suivi du planificateur a migré vers le Tableau de bord IT en 2026.05.6."
keywords: [NomaUBL, tableau de bord, KPI, cartes hero, funnel pipeline, graphique de volume, activité récente, factures bloquées, règles en échec, couverture e-reporting, aller-retour, plage de dates, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Tableau de bord

Le **tableau de bord** est la page d'accueil de NomaUBL. Il s'ouvre par défaut après la connexion et présente l'état opérationnel de la plateforme sur une **grille à 12 colonnes** : quatre cartes KPI hero en tête, puis une série de widgets groupés deux par deux qui couvrent le volume d'ingestion, le pipeline du dispatcher, l'activité récente, les factures bloquées, les règles de validation en échec, la répartition par société, la couverture e-reporting et les durées d'aller-retour PA.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. Toutes les valeurs proviennent de la base NomaUBL locale. Le tableau de bord reflète donc ce que NomaUBL a traité et enregistré, et non directement ce que conserve le système source ou la Plateforme Agréée.

:::info[Réalignement en 2026.05.6]
La rangée du bas passe de `6 + 6` sur deux rangées à une seule rangée `4 + 4 + 4` — Par société, Couverture e-Reporting et Aller-retour PA partagent maintenant une rangée équilibrée plutôt que de laisser une demi-cellule vide. Le widget Santé du planificateur a migré vers le nouveau [Tableau de bord IT](./tech-dashboard.md), où il côtoie les widgets JVM, base et système de fichiers de l'équipe technique. La grille passe également en `align-items: stretch` pour que les panneaux d'une même rangée alignent leur bord bas.
:::

:::info[Refonte en 2026.05.4]
Le tableau de bord a été reconstruit en grille à 12 colonnes en 2026.05.4. L'ancienne disposition empilée de cartes-compteurs par statut a été remplacée par quatre KPI hero (Total / En cours / Rejetée — IT / Rejetée — Business) et huit widgets appariés. Les cartes hero appliquent désormais un filtre multi-statuts au clic. *En cours* ouvre donc bien la liste des factures en cours, au lieu de retomber sur la liste complète.
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1000 670" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dash-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dash-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dash-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
    <linearGradient id="dash-g-green" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4ade80" stopOpacity="0.28"/><stop offset="100%" stopColor="#22c55e" stopOpacity="0.10"/></linearGradient>
    <linearGradient id="dash-g-red" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f87171" stopOpacity="0.32"/><stop offset="100%" stopColor="#dc2626" stopOpacity="0.10"/></linearGradient>
    <linearGradient id="dash-g-orange" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fb923c" stopOpacity="0.32"/><stop offset="100%" stopColor="#ea580c" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="640" rx="14" fill="url(#dash-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tableau de bord</text>
  <rect x="640" y="30" width="146" height="22" rx="5" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="650" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">📅 Hier ▾</text>

  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="132" height="58" rx="8" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="102" fill="#94a3b8" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TOTAL FACTURES</text>
  <text x="252" y="124" fill="#e2e8f0" fontSize="20" fontWeight="700" fontFamily="ui-monospace, monospace">1 247</text>
  <polyline points="312,134 322,128 332,132 342,124 352,126 362,118 366,120" stroke="#94a3b8" strokeWidth="1.2" fill="none" opacity="0.6"/>

  <rect x="380" y="84" width="132" height="58" rx="8" fill="url(#dash-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="392" y="102" fill="#4a9eff" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">EN COURS</text>
  <text x="392" y="124" fill="#e2e8f0" fontSize="20" fontWeight="700" fontFamily="ui-monospace, monospace">184</text>
  <polyline points="452,134 462,130 472,132 482,126 492,128 502,122 506,124" stroke="#4a9eff" strokeWidth="1.2" fill="none" opacity="0.7"/>

  <rect x="520" y="84" width="132" height="58" rx="8" fill="url(#dash-g-red)" stroke="#f87171" strokeWidth="1.2"/>
  <text x="532" y="102" fill="#f87171" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REJETÉE — IT</text>
  <text x="532" y="124" fill="#f87171" fontSize="20" fontWeight="700" fontFamily="ui-monospace, monospace">12</text>

  <rect x="660" y="84" width="132" height="58" rx="8" fill="url(#dash-g-orange)" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="672" y="102" fill="#fb923c" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REJETÉE — BUSINESS</text>
  <text x="672" y="124" fill="#fb923c" fontSize="20" fontWeight="700" fontFamily="ui-monospace, monospace">5</text>

  <rect x="240" y="158" width="552" height="86" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="178" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Funnel pipeline</text>
  <rect x="254" y="190" width="100" height="40" rx="6" fill="rgba(74,222,128,0.18)" stroke="#4ade80" strokeWidth="1"/>
  <text x="304" y="206" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle">VALIDÉE</text>
  <text x="304" y="222" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="middle">1 102</text>
  <text x="362" y="214" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">→</text>
  <rect x="378" y="190" width="92" height="40" rx="6" fill="rgba(74,158,255,0.16)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="424" y="206" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle">ENVOYÉE PA</text>
  <text x="424" y="222" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="middle">1 080</text>
  <text x="482" y="214" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">→</text>
  <rect x="498" y="190" width="84" height="40" rx="6" fill="rgba(74,158,255,0.16)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="540" y="206" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle">ATTENTE</text>
  <text x="540" y="222" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="middle">184</text>
  <text x="594" y="214" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">→</text>
  <rect x="610" y="190" width="76" height="40" rx="6" fill="rgba(74,222,128,0.18)" stroke="#4ade80" strokeWidth="1"/>
  <text x="648" y="206" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle">DÉPOSÉE</text>
  <text x="648" y="222" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="middle">896</text>
  <rect x="700" y="190" width="84" height="40" rx="6" fill="rgba(248,113,113,0.16)" stroke="#f87171" strokeWidth="1"/>
  <text x="742" y="206" fill="#f87171" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle">REJETÉE</text>
  <text x="742" y="222" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="middle">17</text>

  <rect x="240" y="260" width="552" height="84" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="278" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Volume quotidien — 30 jours</text>
  <polyline points="252,330 282,322 312,316 342,300 372,294 402,288 432,302 462,290 492,278 522,284 552,272 582,266 612,278 642,260 672,266 702,256 732,272 762,260 792,266"
    stroke="#4a9eff" strokeWidth="1.5" fill="none"/>
  <polyline points="252,330 282,322 312,316 342,300 372,294 402,288 432,302 462,290 492,278 522,284 552,272 582,266 612,278 642,260 672,266 702,256 732,272 762,260 792,266 792,338 252,338"
    fill="rgba(74,158,255,0.10)" stroke="none"/>

  <rect x="240" y="360" width="270" height="160" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="378" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Activité récente</text>
  <text x="254" y="396" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12345 RI 00070 · Déposée</text>
  <text x="490" y="396" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">2 min</text>
  <line x1="254" y1="403" x2="496" y2="403" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="416" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12300 RI 00001 · Envoyée PA</text>
  <text x="490" y="416" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">14:32</text>
  <line x1="254" y1="423" x2="496" y2="423" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="436" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12299 RI 00001 · Attente</text>
  <text x="490" y="436" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">Hier</text>
  <line x1="254" y1="443" x2="496" y2="443" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="456" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12298 RI 00001 · Validée</text>
  <text x="490" y="456" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">Hier</text>

  <rect x="522" y="360" width="270" height="76" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="536" y="378" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Factures bloquées &gt; 7 j</text>
  <text x="536" y="395" fill="#fb923c" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">9</text>
  <text x="552" y="395" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">statut inchangé depuis &gt; 7 jours</text>
  <text x="536" y="416" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12099 RI 00070 · Attente · 11 j</text>
  <text x="536" y="429" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12087 RI 00001 · Validée · 9 j</text>

  <rect x="522" y="444" width="270" height="76" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="536" y="462" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Règles en échec</text>
  <rect x="710" y="452" width="76" height="20" rx="4" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="466" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="middle">TOUT · UBL · INTEG</text>
  <text x="540" y="486" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">①</text>
  <text x="556" y="486" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">BR-CL-23</text>
  <text x="780" y="486" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="end">52</text>
  <text x="556" y="498" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">CurrencyCode doit utiliser ISO 4217</text>
  <text x="540" y="514" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">②</text>
  <text x="556" y="514" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">BR-FR-12</text>
  <text x="780" y="514" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace" textAnchor="end">38</text>

  <rect x="240" y="536" width="178" height="100" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="554" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Par société</text>
  <rect x="254" y="566" width="148" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="0.6"/>
  <rect x="254" y="566" width="112" height="14" rx="3" fill="rgba(74,222,128,0.5)"/>
  <rect x="366" y="566" width="26" height="14" rx="3" fill="rgba(74,158,255,0.5)"/>
  <rect x="392" y="566" width="10" height="14" rx="3" fill="rgba(248,113,113,0.5)"/>
  <text x="254" y="592" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">00070 · 132 ok / 22 att. / 6 err.</text>
  <rect x="254" y="600" width="148" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="0.6"/>
  <rect x="254" y="600" width="98" height="14" rx="3" fill="rgba(74,222,128,0.5)"/>
  <rect x="352" y="600" width="32" height="14" rx="3" fill="rgba(74,158,255,0.5)"/>
  <rect x="384" y="600" width="10" height="14" rx="3" fill="rgba(248,113,113,0.5)"/>
  <text x="254" y="626" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">00001 · 86 ok / 14 att. / 4 err.</text>

  <rect x="426" y="536" width="180" height="100" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="440" y="554" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Couverture e-Reporting</text>
  <text x="440" y="578" fill="#4ade80" fontSize="14" fontWeight="700" fontFamily="ui-monospace, monospace">98 %</text>
  <text x="478" y="578" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">B2C ce mois-ci</text>
  <text x="440" y="600" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Flux 10.1 · 28 / 28 déposés</text>
  <text x="440" y="614" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Flux 10.3 · 4 / 4 déposés</text>
  <text x="440" y="628" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">toujours le mois en cours</text>

  <rect x="614" y="536" width="178" height="100" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="628" y="554" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Aller-retour PA</text>
  <text x="628" y="578" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Envoi → Dépôt · moy. 3,2 h</text>
  <text x="628" y="594" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Envoi → Rejet · moy. 1,4 h</text>
  <text x="628" y="614" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">selon la plage de dates</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cartes KPI hero</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">clic → liste filtrée</text>
  <line x1="200" y1="115" x2="240" y2="113" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dash-arrow)"/>

  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Funnel pipeline</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">clic sur étape → multi-statuts</text>
  <line x1="200" y1="216" x2="240" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dash-arrow)"/>

  <rect x="20" y="288" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="303" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Volume sur 30 jours</text>
  <text x="30" y="316" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sparkline d'ingestion</text>
  <line x1="200" y1="304" x2="240" y2="298" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dash-arrow)"/>

  <rect x="820" y="380" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Factures bloquées</text>
  <text x="830" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">inchangées &gt; 7 j</text>
  <line x1="820" y1="396" x2="794" y2="392" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dash-arrow)"/>

  <rect x="820" y="460" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="475" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Règles en échec</text>
  <text x="830" y="488" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">bascule TOUT / UBL / INTEG</text>
  <line x1="820" y1="476" x2="794" y2="472" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dash-arrow)"/>

  <rect x="20" y="560" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="575" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Empilage par société</text>
  <text x="30" y="588" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">OK / attente / erreur</text>
  <line x1="200" y1="576" x2="240" y2="572" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dash-arrow)"/>

  <rect x="20" y="610" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="625" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois widgets · 4+4+4</text>
  <text x="30" y="638" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">étirés pour aligner les bas</text>
  <line x1="200" y1="626" x2="240" y2="616" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dash-arrow)"/>

  <rect x="820" y="556" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="571" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Couverture e-Reporting</text>
  <text x="830" y="584" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">% B2C / B2BINT déclarés</text>
  <line x1="820" y1="572" x2="606" y2="572" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dash-arrow)"/>

  <rect x="820" y="610" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="625" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Aller-retour PA</text>
  <text x="830" y="638" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">moy. envoi → dépôt / rejet</text>
  <line x1="820" y1="626" x2="794" y2="612" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dash-arrow)"/>
</svg>

La grille passe en colonne unique sous environ 900 px. Les cartes hero gardent leur largeur minimale de 220 px sur tout écran : les quatre KPI restent alignés sur une même bande horizontale.

---

## Filtre de plage de dates

Un seul filtre figure tout en haut de la page. Il restreint chaque widget qui dépend d'une fenêtre de temps — compteurs hero, funnel pipeline, activité récente, règles en échec, répartition par société.

| Préréglage | Fenêtre |
|---|---|
| **Aujourd'hui** | Aujourd'hui uniquement. |
| **Hier** *(défaut)* | La journée précédente entière. |
| **7 derniers jours** | Les sept derniers jours pleins, fin la veille. |
| **Ce mois-ci** | Le mois courant, du 1ᵉʳ à aujourd'hui. |
| **Mois dernier** | Le mois plein précédent. |
| **Plage personnalisée** | Saisie manuelle des dates **De** et **À**. |

Certains widgets ignorent volontairement le filtre — *Factures bloquées* (toujours les 90 derniers jours) et *Couverture e-Reporting* (toujours le mois en cours). Chacun affiche sa propre fenêtre, la différence est donc explicite.

---

## Cartes KPI hero

Quatre cartes résument l'état opérationnel en un coup d'œil. Chacune comporte un libellé, le compteur, une sparkline du volume quotidien sur 7 jours, et une légende d'une ligne qui précise les statuts couverts. Sur les installations en licence complète, un clic ouvre la page [E-Invoicing](./invoices.md) avec le bon filtre déjà appliqué.

| Carte | Comptabilise | Statuts couverts | Clic d'accès |
|---|---|---|---|
| **Total factures** | Toutes les factures de la plage de dates | l'ensemble des statuts | E-Invoicing avec la plage de dates uniquement |
| **En cours** | Pipeline du dispatcher + transit PA | `9900` `9901` `9902` `9903` `9906` (en cours côté interne) et `201` `202` `203` `204` `214` `224`–`227` (en transit côté PA) | E-Invoicing avec `status=9900,9901,9902,9903,9906,201,202,…` |
| **Rejetée — IT** | Échecs techniques, périmètre IT / dev | `9904` `9905` `9907` (échecs internes) et `213` (rejet technique PA) | E-Invoicing avec `status=9904,9905,9907,213` |
| **Rejetée — Business** | Échecs côté service client | `206` `207` `208` `210` `221` `501` `600` (litiges commerciaux, refus, suspensions, routage, recouvrement, distribution e-mail) | E-Invoicing avec le multi-statut correspondant |

Les cartes **En cours** / **Rejetée — IT** / **Rejetée — Business** perdaient auparavant le filtre de statut au clic. Le paramètre `/api/invoices?status=` n'acceptait qu'une seule valeur ; une liste était rejetée et la page retombait sur la liste complète. Les cartes hero passent désormais une liste séparée par virgules (`/api/invoices?status=A,B,C`) que le backend transforme en clause `IN (…)` multi-statuts. Le clic ouvre alors le bon sous-ensemble.

Une bordure rouge et une valeur rouge sur **Rejetée — IT** signalent un compteur strictement positif. Même traitement en orange sur **Rejetée — Business**.

---

## La grille de widgets

Sous la rangée hero, une grille à 12 colonnes accueille huit widgets, groupés deux par deux pour équilibrer la densité de contenu.

### Funnel pipeline *(12 colonnes)*

Cinq étapes horizontales — *Validée / Envoyée PA / Attente / Déposée / Rejetée* — accompagnées de leur compteur. Cliquer sur une étape ouvre E-Invoicing pré-filtré sur le jeu de statuts correspondant. Le funnel se lit de gauche à droite : ce qui stagne en *Attente* alimente le widget *Factures bloquées* en dessous ; ce qui arrive en *Rejetée* renvoie vers la page [Erreurs d'intégration](./integration-errors.md).

### Volume quotidien *(12 colonnes)*

Graphique d'aire sur 30 jours du volume d'ingestion quotidien. Même série que les sparklines des cartes hero, mais affichée pleine largeur pour repérer d'un coup d'œil un creux sur une seule journée.

### Activité récente *(6 colonnes)* + Bloquées + Règles en échec *(6 colonnes)*

Cette rangée était auparavant en 8/4, avec une colonne droite visiblement plus étroite que la gauche. Elle est rééquilibrée en 6/6 depuis 2026.05.4, pour que les rangées suivantes s'alignent sur les mêmes limites de colonnes.

| Widget | Contenu |
|---|---|
| **Activité récente** | Les dernières factures touchées dans la plage de dates, avec leur triplet canonique (`doc · dct · kco`), le libellé de statut et un horodatage relatif. Cliquer sur une ligne ouvre la liste [E-Invoicing](./invoices.md) filtrée sur ce statut. |
| **Factures bloquées** | Jusqu'à 50 lignes dont le statut n'a pas évolué depuis 7 jours. Chaque ligne affiche le triplet, le statut courant et le nombre de jours depuis la dernière mise à jour. |
| **Règles en échec** | Top 10 des règles de validation en échec sur la plage de dates. Chaque ligne affiche un badge de rang, le code de règle, sa description en deuxième ligne et le compteur. Un sélecteur en en-tête restreint la liste à **TOUT** / **UBL** (Schematron / XSD) / **INTEG** (cycle de vie / erreurs d'exécution). Le lien *Voir tout* ouvre la page [Erreurs d'intégration](./integration-errors.md) sur l'onglet **par règle** ; un clic sur une règle précise ouvre l'onglet **par évènement** avec ce code déjà appliqué comme chip de filtre. |

Les barres proportionnelles de la version précédente rendaient des compteurs de *160* et *10* presque identiques visuellement. Les nouvelles lignes ordonnées donnent à chaque règle le même poids visuel, avec le compteur aligné à droite.

### Par société *(4 colonnes)* + Couverture e-Reporting *(4 colonnes)* + Aller-retour PA *(4 colonnes)*

Les trois widgets courts partagent une seule rangée équilibrée depuis 2026.05.6 — l'ancienne disposition `6 + 6` sur deux rangées laissait une demi-cellule vide après la migration de la Santé du planificateur vers le [Tableau de bord IT](./tech-dashboard.md).

| Widget | Contenu |
|---|---|
| **Par société** | Une barre horizontale empilée par `KCO` (`UHKCO` issu de `F564231`), répartie en *OK* (vert) / *Attente* (bleu) / *Erreur* (rouge), avec le compteur et le code société en libellé. Utile quand un pic se concentre sur une seule société. |
| **Couverture e-Reporting** | Un pourcentage et trois lignes qui résument l'état des dépôts e-reporting du mois en cours : *Flux 10.1* (détail B2BINT) et *Flux 10.3* (B2C / OUTOFSCOPE agrégé) — *déposés* / *générés*. Le clic sur le widget ouvre la page [E-Reporting](./ereporting.md). |
| **Aller-retour PA** | Durée moyenne *Envoi → Dépôt* et *Envoi → Rejet* sur la plage de dates, calculée à partir de la table de cycle de vie. Un pic sur l'une de ces moyennes révèle un ralentissement côté PA qu'on ne voit pas dans les seuls compteurs quotidiens. |

La grille utilise `align-items: stretch` et chaque carte grandit avec `flex: 1` à l'intérieur de son span de colonnes — les trois cartes de cette rangée alignent leur bord bas, même quand l'une porte plus de contenu que les autres.

:::tip[La santé du planificateur a migré]
Le widget Santé du planificateur n'est plus sur cette page. Il se trouve sur le [Tableau de bord IT](./tech-dashboard.md), aux côtés des widgets JVM, base, système de fichiers et journal d'erreurs en direct. L'équipe IT obtient une page dédiée à ses préoccupations opérationnelles ; le public métier ne voit ici que les indicateurs sur lesquels il agit.
:::

---

## Actions rapides + À propos

Sous la grille, trois boutons raccourcis sont disponibles :

| Bouton | Effet |
|---|---|
| **Créer une facture** | Ouvre la modale *nouvelle facture* directement depuis le tableau de bord. Après enregistrement, redirige vers la page [E-Invoicing](./invoices.md). |
| **Référence des statuts** | Ouvre *Références → Référence des statuts* — le catalogue de tous les codes de statut du cycle de vie. |
| **Codes motifs** | Ouvre *Références → Codes motifs* — le catalogue de tous les codes de refus, rejet ou irrégularité. |

La carte *À propos de cette version* figure tout en bas. Elle indique le numéro de version, la date de build, la version du profil AFNOR et les versions des Schematrons embarqués par module (EN 16931, BR-FR Flux 2, BR-FR CPRO, EXTENDED-CTC-FR).

---

## Conseils & bonnes pratiques

- **Lire d'abord la rangée hero.** Les quatre KPI répondent en un coup d'œil à la question *« y a-t-il quelque chose de cassé en ce moment ? »*. Une bordure rouge non vide sur *Rejetée — IT* est prioritaire sur le reste de la page.
- **Utiliser les préréglages de date.** *Hier* convient à un tour de surveillance matinal ; *Ce mois-ci* à une vue financière ; *Plage personnalisée* couvre une réconciliation de fin de mois ou une fenêtre d'incident précise.
- **Recouper le funnel et les compteurs hero.** *En cours* doit correspondre aux étapes *Envoyée PA* + *Attente* du funnel. Un écart révèle en général un statut pas encore mappé d'un côté ou de l'autre.
- **Les *Règles en échec* dictent le travail.** Une seule règle avec des centaines d'occurrences indique souvent un changement amont unique (un champ renommé, un code TVA obsolète) — corriger la règle calme en général la majorité des erreurs d'intégration.
- **Le tableau de bord sert à repérer des tendances, pas à examiner une ligne.** Pour le détail d'une facture, ouvrir la modale de la page [E-Invoicing](./invoices.md) ; pour une analyse au niveau règle, passer par la page [Erreurs d'intégration](./integration-errors.md).
- **Mettre la page en favori.** C'est la page d'accueil quotidienne naturelle. Les favoris persistent après l'expiration de session ; la prochaine connexion ouvre donc la même vue.
