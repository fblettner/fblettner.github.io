---
title: Oracle
description: "Page Licences → Oracle de Nomasx-1 — chaque composant de la base Oracle d'une application, trouvé en utilisation ou non, face à ce que souscrivent les contrats : utilisé et couvert, utilisé sans ligne, souscrit et non utilisé."
keywords: [Nomasx-1, licences, Oracle, options de base de données, packs de gestion, Diagnostics Pack, Tuning Pack, Partitioning, conformité, souscrit]
---

# Oracle

La page **Oracle** des licences présente, pour la base Oracle d'une application connectée, **chaque composant soumis à licence — l'édition, ses options et ses packs de gestion — trouvé en utilisation ou non, face à ce que souscrivent les contrats**. Quatre chiffres figurent en tête ; la grille liste chaque composant vérifié avec sa lecture : couvert, utilisé sans ligne de contrat, souscrit sans être utilisé.

Le versant technique de la même base — ses options, fonctionnalités, partitions et instances telles que collectées — se trouve dans [Base de données → Oracle](../database/oracle.md) ; les lignes de contrat, dans [Licences souscrites](./subscribed-licences.md).

Accès : **Licences → Oracle**.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 438" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="oral-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="oral-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="oral-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="oral-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="880" height="400" rx="14" fill="url(#oral-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Licences base de données Oracle</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Les composants de la base trouvés en utilisation, face à ce qui est souscrit.</text>
  <rect x="1025" y="36" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Relire</text>
  <rect x="847" y="36" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="857" y="50.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">1 · JDE-PROD ▾</text>
  <text x="831" y="51" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Application</text>
  <line x1="221" y1="78" x2="1099" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="92" width="204.0" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="113" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">16</text>
  <text x="250.0" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPOSANTS VÉRIFIÉS</text>
  <rect x="452.0" y="92" width="204.0" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462.0" y="113" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <text x="462.0" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISÉS</text>
  <rect x="664.0" y="92" width="204.0" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="674.0" y="113" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="674.0" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISÉS, NON SOUSCRITS</text>
  <text x="674.0" y="137" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">à qualifier avant tout chiffrage</text>
  <rect x="876.0" y="92" width="204.0" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="886.0" y="113" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="886.0" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOUSCRITS, NON UTILISÉS</text>
  <rect x="240.0" y="160" width="840.0" height="36" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="248.0" y="168" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="276.0" y="176" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Composants</text>
  <text x="276.0" y="189" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Utilisés et souscrits · 16</text>
  <rect x="240" y="206" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="220.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <rect x="1012" y="206" width="68" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1046.0" y="220.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="948" y="206" width="58" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="977.0" y="220.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="889" y="206" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="915.5" y="220.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="830" y="206" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="856.5" y="220.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="786" y="206" width="38" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="805.0" y="220.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="240" y="236" width="840" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPOSANT</text>
  <text x="425" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CATÉGORIE</text>
  <text x="635" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISÉ</text>
  <text x="695" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOUSCRIT</text>
  <text x="770" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MÉTRIQUE</text>
  <text x="890" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LECTURE</text>
  <rect x="240" y="264" width="840" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="279.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Oracle Enterprise Edition</text>
  <text x="425" y="279.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Oracle Database</text>
  <text x="635" y="279.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">oui</text>
  <text x="695" y="279.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">8</text>
  <text x="770" y="279.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Processor</text>
  <rect x="890" y="268.0" width="98" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="939.0" y="279.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">utilisé, souscrit</text>
  <rect x="240" y="292" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="307.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Partitioning</text>
  <text x="425" y="307.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Oracle Enterprise Edition Options</text>
  <text x="635" y="307.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">oui</text>
  <text x="695" y="307.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="770" y="307.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <rect x="890" y="296.0" width="117" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="948.5" y="307.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">utilisé, NON souscrit</text>
  <rect x="240" y="320" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="335.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Diagnostics Pack</text>
  <text x="425" y="335.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Database Enterprise Management</text>
  <text x="635" y="335.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">oui</text>
  <text x="695" y="335.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">8</text>
  <text x="770" y="335.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Processor</text>
  <rect x="890" y="324.0" width="98" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="939.0" y="335.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">utilisé, souscrit</text>
  <rect x="240" y="348" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="363.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Tuning Pack</text>
  <text x="425" y="363.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Database Enterprise Management</text>
  <text x="635" y="363.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">non</text>
  <text x="695" y="363.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">8</text>
  <text x="770" y="363.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Processor</text>
  <rect x="890" y="352.0" width="117" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="948.5" y="363.2" fill="#c084fc" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">souscrit, non utilisé</text>
  <rect x="240" y="376" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="391.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Advanced Compression</text>
  <text x="425" y="391.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Oracle Enterprise Edition Options</text>
  <text x="635" y="391.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">non</text>
  <text x="695" y="391.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="770" y="391.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="890" y="391.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <rect x="20" y="92" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chiffres en tête</text>
  <text x="30" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vérifiés, utilisés, les deux écarts</text>
  <line x1="205" y1="109.0" x2="240" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oral-arrow)"/>
  <rect x="20" y="300" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne par composant</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisé : trouvé par la collecte</text>
  <line x1="205" y1="317.0" x2="240" y2="318" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oral-arrow)"/>
  <rect x="1115" y="36" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="51" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application</text>
  <text x="1125" y="64" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque base Oracle collectée</text>
  <line x1="1115" y1="53.0" x2="932" y2="58" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oral-arrow)"/>
  <rect x="1115" y="110" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisés, non souscrits</text>
  <text x="1125" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à qualifier d'abord</text>
  <line x1="1115" y1="127.0" x2="846.0" y2="117" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oral-arrow)"/>
  <rect x="1115" y="290" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lecture</text>
  <text x="1125" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">couvert · non souscrit · inutilisé</text>
  <line x1="1115" y1="307.0" x2="1040" y2="270" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#oral-arrow)"/>
</svg>

---

## L'en-tête \{#header\}

| Contrôle | Rôle |
|---|---|
| **Application** | L'application dont la base Oracle est lue, sous la forme `id · nom`. Seules les applications pour lesquelles une base Oracle a été collectée sont proposées. La page rouvre la dernière consultée. |
| **Relire** | Relit l'application. |

---

## Les chiffres \{#figures\}

| Chiffre | Ce qu'il compte |
|---|---|
| **Composants vérifiés** | Tous les composants Oracle que la collecte a vérifiés sur la base. |
| **Utilisés** | Les composants trouvés en utilisation. |
| **Utilisés, non souscrits** | Trouvés en utilisation sans ligne de contrat pour l'application. En orange, avec le rappel *à qualifier avant tout chiffrage : une option peut être active sans servir à l'application*. |
| **Souscrits, non utilisés** | Une ligne de contrat existe et le composant n'a pas été trouvé en utilisation. |

---

## Composants \{#tab-components\}

Une ligne par composant, les composants utilisés en premier.

| Colonne | Contenu |
|---|---|
| **Composant** | L'élément soumis à licence : *Oracle Enterprise Edition*, *Partitioning*, *Diagnostics Pack*, *Tuning Pack*, *Advanced Compression*… |
| **Catégorie** | Sa famille dans la liste de prix : Oracle Database, Oracle Enterprise Edition Options, Database Enterprise Management, Oracle Others Products. |
| **Utilisé** | *oui* quand la collecte l'a trouvé en utilisation sur la base. |
| **Souscrit** | La quantité cumulée sur les contrats qui couvrent l'application. |
| **Métrique** | La métrique de ces lignes (Processor, Named User Plus…). |
| **Lecture** | *utilisé, souscrit* · *utilisé, NON souscrit* · *souscrit, non utilisé* — vide quand le composant n'est ni utilisé ni souscrit. |

*Utilisé* reflète le résultat de la collecte des licences : elle interroge la base elle-même, avec une requête de détection par composant, à chaque exécution de **Tâches → Collecter les licences**.

---

## Conseils & bonnes pratiques

- **Qualifier chaque ligne *utilisé, NON souscrit*** dans [Base de données → Oracle](../database/oracle.md) : l'onglet *Fonctionnalités* donne la date de dernière utilisation, l'onglet *Partitions* indique si un segment partitionné appartient à un schéma d'éditeur ou au métier.
- **Un pack utilisé sans ligne** correspond souvent à une console d'administration ouverte une fois : vérifier les dates avant de le compter.
- **Les lignes *souscrit, non utilisé*** sont les premières à discuter au renouvellement.
- **Les chiffres sont une hypothèse à discuter avec Oracle**, jamais une position certifiée.
