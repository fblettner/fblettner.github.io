---
title: Oracle
description: "Page Base de données → Oracle de Nomasx-1 — la base Oracle d'une application connectée telle que collectée : ses chiffres (taille, processeurs, utilisateurs, options actives, fonctionnalités utilisées, segments partitionnés), puis ses options, fonctionnalités, partitions et instances."
keywords: [Nomasx-1, base de données, Oracle, options, utilisation des fonctionnalités, partitionnement, instances, processeurs, Named User Plus, Data Guard, packs de gestion]
---

# Oracle

La page **Oracle** de la base de données présente la base Oracle d'une application connectée **telle qu'elle a été collectée** : ses chiffres en tête — ce qu'elle est, sa taille, ses processeurs, ses utilisateurs, le nombre d'options actives, de fonctionnalités utilisées et de segments partitionnés — puis un onglet par liste : **options**, **fonctionnalités**, **partitions** et **instances**.

C'est l'inventaire technique sur lequel s'appuie [Licences → Oracle](../licenses/oracle.md) : quand un composant y apparaît *utilisé*, cette page indique quelle option est active, quelle fonctionnalité a servi et quand, et à qui appartiennent les segments partitionnés.

Accès : **Base de données → Oracle**.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 426" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="orad-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="orad-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="orad-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="orad-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="880" height="388" rx="14" fill="url(#orad-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Base de données Oracle</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Ce qu'est la base, les options qu'elle a actives, les fonctionnalités qu'elle utilise.</text>
  <rect x="1025" y="36" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Relire</text>
  <rect x="847" y="36" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="857" y="50.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">1 · JDE-PROD ▾</text>
  <text x="831" y="51" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Application</text>
  <line x1="221" y1="78" x2="1099" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="92" width="113.14285714285714" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="113" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">JDEPRD</text>
  <text x="250.0" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BASE</text>
  <text x="250.0" y="137" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">JDEDB01</text>
  <rect x="361.1428571428571" y="92" width="113.14285714285714" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="371.1428571428571" y="113" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">850</text>
  <text x="371.1428571428571" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TAILLE (GO)</text>
  <rect x="482.2857142857143" y="92" width="113.14285714285714" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="492.2857142857143" y="113" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">16</text>
  <text x="492.2857142857143" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSEURS</text>
  <rect x="603.4285714285714" y="92" width="113.14285714285714" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="613.4285714285714" y="113" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">118 / 164</text>
  <text x="613.4285714285714" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEURS (ACTIFS</text>
  <text x="613.4285714285714" y="137" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">/ TOUS)</text>
  <rect x="724.5714285714286" y="92" width="113.14285714285714" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="734.5714285714286" y="113" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="734.5714285714286" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OPTIONS ACTIVES</text>
  <rect x="845.7142857142857" y="92" width="113.14285714285714" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="855.7142857142857" y="113" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="855.7142857142857" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FONCTIONNALITÉS</text>
  <text x="855.7142857142857" y="137" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISÉES</text>
  <rect x="966.8571428571429" y="92" width="113.14285714285714" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="976.8571428571429" y="113" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">42</text>
  <text x="976.8571428571429" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEGMENTS</text>
  <text x="976.8571428571429" y="137" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARTITIONNÉS</text>
  <text x="240" y="166" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Oracle Database 19c Enterprise Edition 19.0.0.0.0 · collectée le 2026-11-20 · packs de gestion : DIAGNOSTIC+TUNING · Data Guard : non</text>
  <rect x="240.0" y="176" width="204.0" height="36" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="248.0" y="184" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="276.0" y="192" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Options</text>
  <text x="276.0" y="205" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Ce que la base a d'installé · 7</text>
  <rect x="452.0" y="176" width="204.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="460.0" y="184" width="20" height="20" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <text x="488.0" y="192" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Fonctionnalités</text>
  <text x="488.0" y="205" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Ce qui a servi, et quand · 9</text>
  <rect x="664.0" y="176" width="204.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="672.0" y="184" width="20" height="20" rx="5" fill="#fb923c" fillOpacity="0.18"/>
  <text x="700.0" y="192" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Partitions</text>
  <text x="700.0" y="205" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Les segments partitionnés · 42</text>
  <rect x="876.0" y="176" width="204.0" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="884.0" y="184" width="20" height="20" rx="5" fill="#4ade80" fillOpacity="0.18"/>
  <text x="912.0" y="192" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Instances</text>
  <text x="912.0" y="205" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Les bases collectées · 1</text>
  <rect x="240" y="222" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="236.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <rect x="1012" y="222" width="68" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1046.0" y="236.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="948" y="222" width="58" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="977.0" y="236.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="889" y="222" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="915.5" y="236.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="830" y="222" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="856.5" y="236.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="786" y="222" width="38" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="805.0" y="236.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="240" y="252" width="840" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="267.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OPTION</text>
  <text x="550" y="267.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVE</text>
  <text x="750" y="267.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LICENCE CONCERNÉE</text>
  <rect x="240" y="280" width="840" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="295.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Partitioning</text>
  <text x="550" y="295.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">oui</text>
  <text x="750" y="295.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Partitioning</text>
  <rect x="240" y="308" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="323.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Real Application Clusters</text>
  <text x="550" y="323.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">non</text>
  <text x="750" y="323.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Real Application Clusters</text>
  <rect x="240" y="336" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="351.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Oracle Label Security</text>
  <text x="550" y="351.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">non</text>
  <text x="750" y="351.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Label Security</text>
  <rect x="240" y="364" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="379.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Spatial</text>
  <text x="550" y="379.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">non</text>
  <text x="750" y="379.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Oracle Enterprise Edition</text>
  <rect x="20" y="92" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les chiffres de la base</text>
  <text x="30" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">taille, processeurs, utilisateurs…</text>
  <line x1="205" y1="109.0" x2="240" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#orad-arrow)"/>
  <rect x="20" y="170" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qu'elle est</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">produit, date de collecte, packs</text>
  <line x1="205" y1="187.0" x2="240" y2="162" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#orad-arrow)"/>
  <rect x="20" y="300" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Option → licence</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le composant que chacune demande</text>
  <line x1="205" y1="317.0" x2="240" y2="305" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#orad-arrow)"/>
  <rect x="1115" y="36" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="51" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application</text>
  <text x="1125" y="64" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque base Oracle collectée</text>
  <line x1="1115" y1="53.0" x2="932" y2="58" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#orad-arrow)"/>
  <rect x="1115" y="210" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre onglets</text>
  <text x="1125" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une grille par liste</text>
  <line x1="1115" y1="227.0" x2="1070" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#orad-arrow)"/>
</svg>

---

## L'en-tête \{#header\}

| Contrôle | Rôle |
|---|---|
| **Application** | L'application dont la base Oracle est affichée, sous la forme `id · nom`. Seules les applications pour lesquelles une base Oracle a été collectée sont proposées. La page rouvre la dernière application et le dernier onglet consultés. |
| **Relire** | Relit l'application. |

L'assistant reçoit le nom de la base, sa taille, le nombre d'options actives et de fonctionnalités utilisées.

---

## Les chiffres \{#figures\}

| Chiffre | Contenu |
|---|---|
| **Base** | Le nom de la base, avec son hôte en dessous. |
| **Taille (Go)** | La taille collectée. |
| **Processeurs** | Le nombre de CPU collecté. |
| **Utilisateurs (actifs / tous)** | Les comptes actifs de la base face à l'ensemble de ses comptes. |
| **Options actives** | Le nombre d'options actives. En orange dès qu'il y en a une. |
| **Fonctionnalités utilisées** | Le nombre de fonctionnalités utilisées au moins une fois. |
| **Segments partitionnés** | Le nombre de tables et d'index partitionnés. En orange dès que l'un d'eux appartient à un propriétaire qui n'est pas marqué technique. |

La ligne sous les chiffres indique le produit et sa version, la date de collecte, les packs de gestion autorisés sur la base et la présence de Data Guard.

---

## Les onglets \{#tabs\}

Chaque carte d'onglet indique le nombre de lignes de sa liste. La grille offre les outils habituels : recherche, tri, filtres, regroupement, colonnes et export.

### Options \{#tab-options\}

Ce que la base a d'installé : *Option*, *Active* (*oui* / *non*), *Licence concernée* — le composant de licence qu'exige l'option, tel que défini dans [Paramètres → Licences → Oracle → Options](../settings/oracle/options.md). Les options actives apparaissent en premier.

### Fonctionnalités \{#tab-features\}

Ce qui a servi, et quand : *Fonctionnalité*, *Utilisations détectées*, *Première utilisation*, *Dernière utilisation*, *Licence concernée* (d'après [Paramètres → Licences → Oracle → Fonctionnalités](../settings/oracle/features.md)). Les deux dates distinguent une fonctionnalité utilisée une seule fois il y a longtemps d'une fonctionnalité encore utilisée aujourd'hui.

### Partitions \{#tab-partitions\}

Les segments qui utilisent le partitionnement : *Propriétaire*, *Propriétaire technique* (*oui* quand le propriétaire est marqué technique dans [Propriétés utilisateurs](../settings/security/users-properties.md)), *Type*, *Segment*, *Créé*, *Dernier changement*. Un segment détenu par un schéma d'éditeur se distingue ainsi d'un segment créé par le métier.

### Instances \{#tab-instances\}

Les bases collectées pour l'application, une ligne chacune : *Base*, *Hôte*, *Produit*, *Version*, *Instances* (plusieurs avec Real Application Clusters), *Processeurs*, *Utilisateurs actifs*, *Utilisateurs*, *Packs*, *Data Guard*, *Taille (Go)*, *Collectée*.

---

## Conseils & bonnes pratiques

- **Partir de *Licences → Oracle*.** Un composant *utilisé, NON souscrit* s'y explique ici : l'option active, la fonctionnalité et sa dernière date, le segment partitionné et son propriétaire.
- **Une fonctionnalité utilisée une fois, il y a des années,** n'a pas la même portée qu'une fonctionnalité utilisée la semaine dernière : lire *Dernière utilisation* avant tout chiffrage.
- **Les segments partitionnés de propriétaires techniques** accompagnent en général un produit d'éditeur ; ceux de propriétaires métier ont été créés sur site.
- **Le rapport entre comptes actifs et comptes totaux** révèle les comptes dormants de la base elle-même, distincts de ceux de l'application.
