---
title: JD Edwards
description: "Page Licences → JD Edwards de Nomasx-1 — les utilisateurs qu'une licence compte et, par module, qui est autorisé, qui l'a utilisé et qui a écrit des transactions, avec accès aux objets autorisés et aux transactions d'un module ou d'un utilisateur."
keywords: [Nomasx-1, licences, JD Edwards, licence JDE, utilisateurs activés, utilisateurs comptés, modules, objets autorisés, transactions, Object Usage Tracking]
---

# JD Edwards

La page **JD Edwards** présente, pour une application JD Edwards EnterpriseOne, **les utilisateurs qu'une licence compte** et, **par module, qui est autorisé, qui l'a utilisé et qui a écrit des transactions**. Les chiffres figurent en tête ; chaque liste qui les détaille occupe un onglet, avec sa propre grille. Chaque module et chaque utilisateur ouvre les deux écrans de détail — objets autorisés et transactions — déjà filtrés.

C'est l'endroit où vérifier d'où vient le décompte des licences avant de lire la position dans **Revues → Licences**, et où le comparer à ce que portent les contrats dans [Licences souscrites](./subscribed-licences.md).

Accès : **Licences → JD Edwards**.

:::info[Spécifique à JDE]
La page liste les applications de type JD Edwards. *Ont utilisé* provient d'Object Usage Tracking et *Ont écrit des transactions* des colonnes utilisateur et date de mise à jour des tables JD Edwards. Pour une autre source, les mêmes questions se traitent par une [requête personnalisée](../settings/global/custom-queries.md).
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1320 410" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jdel-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jdel-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jdel-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jdel-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="880" height="372" rx="14" fill="url(#jdel-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs et modules JD Edwards</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Les utilisateurs qu'une licence compte, et ce à quoi sert chaque module.</text>
  <rect x="1025" y="36" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Relire</text>
  <rect x="847" y="36" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="857" y="50.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">1 · JDE-PROD ▾</text>
  <text x="831" y="51" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Application</text>
  <line x1="221" y1="78" x2="1099" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="92" width="133.33333333333334" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="113" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">120</text>
  <text x="250.0" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEURS ACTIVÉS</text>
  <rect x="381.33333333333337" y="92" width="133.33333333333334" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="391.33333333333337" y="113" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">112</text>
  <text x="391.33333333333337" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPTÉS POUR</text>
  <text x="391.33333333333337" y="137" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LES LICENCES</text>
  <text x="391.33333333333337" y="147" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">techniques 5 · liés 3 exclus</text>
  <rect x="522.6666666666667" y="92" width="133.33333333333334" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="532.6666666666667" y="113" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">98</text>
  <text x="532.6666666666667" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTÉS (90 JOURS)</text>
  <rect x="664.0" y="92" width="133.33333333333334" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="674.0" y="113" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">4</text>
  <text x="674.0" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JAMAIS CONNECTÉS</text>
  <rect x="805.3333333333334" y="92" width="133.33333333333334" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="815.3333333333334" y="113" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">76</text>
  <text x="815.3333333333334" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AVEC TRANSACTIONS</text>
  <text x="815.3333333333334" y="137" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">(90 JOURS)</text>
  <rect x="946.6666666666667" y="92" width="133.33333333333334" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="956.6666666666667" y="113" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="956.6666666666667" y="127" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TRANSACTIONS, PAS</text>
  <text x="956.6666666666667" y="137" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UN UTILISATEUR</text>
  <rect x="240.0" y="160" width="274.6666666666667" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248.0" y="168" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="276.0" y="176" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs</text>
  <text x="276.0" y="189" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Les utilisateurs activés · 120</text>
  <rect x="522.6666666666667" y="160" width="274.6666666666667" height="36" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="530.6666666666667" y="168" width="20" height="20" rx="5" fill="#4ade80" fillOpacity="0.18"/>
  <text x="558.6666666666667" y="176" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Modules</text>
  <text x="558.6666666666667" y="189" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Autorisés, utilisés, écrits · 14</text>
  <rect x="805.3333333333334" y="160" width="274.6666666666667" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="813.3333333333334" y="168" width="20" height="20" rx="5" fill="#fb923c" fillOpacity="0.18"/>
  <text x="841.3333333333334" y="176" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Non déclarés</text>
  <text x="841.3333333333334" y="189" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Ont écrit des transactions… · 2</text>
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
  <text x="250" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODULE</text>
  <text x="430" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CATÉGORIE</text>
  <text x="610" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AUTORISÉS</text>
  <text x="680" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ONT UTILISÉ</text>
  <text x="755" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ONT ÉCRIT DES TRANSACTIONS</text>
  <text x="917" y="251.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉTAIL</text>
  <rect x="240" y="264" width="840" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="279.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Financials</text>
  <text x="430" y="279.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Financial Management</text>
  <text x="610" y="279.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">64</text>
  <text x="680" y="279.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">58</text>
  <text x="755" y="279.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">51</text>
  <text x="917" y="279.5" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">objets autorisés · transactions</text>
  <rect x="240" y="292" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="307.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Sales Order Management</text>
  <text x="430" y="307.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Customer Relationship Management</text>
  <text x="610" y="307.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">42</text>
  <text x="680" y="307.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">37</text>
  <text x="755" y="307.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">33</text>
  <text x="917" y="307.5" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">objets autorisés · transactions</text>
  <rect x="240" y="320" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="335.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Inventory Management</text>
  <text x="430" y="335.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Manufacturing and Supply…</text>
  <text x="610" y="335.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">39</text>
  <text x="680" y="335.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">30</text>
  <text x="755" y="335.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">22</text>
  <text x="917" y="335.5" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">objets autorisés · transactions</text>
  <rect x="240" y="348" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="363.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Procurement and Subcontract…</text>
  <text x="430" y="363.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Manufacturing and Supply…</text>
  <text x="610" y="363.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">27</text>
  <text x="680" y="363.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">19</text>
  <text x="755" y="363.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">15</text>
  <text x="917" y="363.5" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">objets autorisés · transactions</text>
  <rect x="20" y="92" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chiffres en tête</text>
  <text x="30" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">qui une licence compte</text>
  <line x1="205" y1="109.0" x2="240" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jdel-arrow)"/>
  <rect x="20" y="168" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="183" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un onglet par liste</text>
  <text x="30" y="196" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateurs · modules · non déclarés</text>
  <line x1="205" y1="185.0" x2="240" y2="182" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jdel-arrow)"/>
  <rect x="20" y="270" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Par module</text>
  <text x="30" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">autorisés, utilisés, écrits</text>
  <line x1="205" y1="287.0" x2="240" y2="290" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jdel-arrow)"/>
  <rect x="1115" y="36" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="51" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application</text>
  <text x="1125" y="64" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque application JD Edwards</text>
  <line x1="1115" y1="53.0" x2="932" y2="58" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jdel-arrow)"/>
  <rect x="1115" y="100" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Transactions, pas un utilisateur</text>
  <text x="1125" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ont écrit, sans compte</text>
  <line x1="1115" y1="117.0" x2="1080" y2="117" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jdel-arrow)"/>
  <rect x="1115" y="290" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1125" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Détail</text>
  <text x="1125" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les deux écrans de détail, filtrés</text>
  <line x1="1115" y1="307.0" x2="1060" y2="270" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jdel-arrow)"/>
</svg>

---

## L'en-tête \{#header\}

| Contrôle | Rôle |
|---|---|
| **Application** | L'application JD Edwards lue, sous la forme `id · nom`. La page rouvre la dernière application et le dernier onglet consultés. |
| **Relire** | Relit l'application (*lecture…* pendant la lecture). |

L'assistant reçoit les chiffres de l'application affichée : utilisateurs activés, comptés et connectés récemment.

---

## Les chiffres \{#figures\}

| Chiffre | Ce qu'il compte |
|---|---|
| **Utilisateurs activés** | Les utilisateurs activés dans la sécurité de l'application. |
| **Comptés pour les licences** | Les utilisateurs activés qu'une licence compte : les comptes techniques et les comptes liés à un autre utilisateur sont exclus — la ligne du dessous en donne le nombre (*techniques · liés … exclus*). Les deux indicateurs se règlent dans [Propriétés utilisateurs](../settings/security/users-properties.md). |
| **Connectés (N jours)** | Utilisateurs comptés connectés pendant la période de l'application (*Connecté depuis moins de (jours) = utilisateur* dans [Applications](../settings/global/applications.md), 90 jours si le champ est vide). |
| **Jamais connectés** | Utilisateurs comptés sans date de connexion. En orange dès qu'il y en a un. |
| **Avec transactions (90 jours)** | Utilisateurs comptés ayant écrit une transaction au cours des 90 derniers jours. |
| **Transactions, pas un utilisateur** | Comptes ayant écrit des transactions au cours des 90 derniers jours sans être utilisateurs de l'application. En orange dès qu'il y en a un. |

---

## Les onglets \{#tabs\}

Chaque carte d'onglet indique le nombre de lignes de sa liste. La grille offre les outils habituels : recherche, tri, filtres, regroupement, colonnes et export.

### Utilisateurs \{#tab-users\}

Les utilisateurs activés de l'application.

| Colonne | Contenu |
|---|---|
| **Utilisateur**, **Nom** | Le compte et son nom. |
| **Rôles** | Le nombre de rôles détenus. |
| **Dernière connexion**, **Dernière transaction**, **Créé** | Les dates connues pour l'utilisateur. |
| **Technique**, **Générique**, **Lié à** | Les indicateurs de [Propriétés utilisateurs](../settings/security/users-properties.md) ; *Lié à* nomme l'utilisateur auquel le compte est rattaché. |
| **Détail** | **objets autorisés** et **transactions** : les deux écrans de détail, filtrés sur l'application et l'utilisateur. |

### Modules \{#tab-modules\}

Une ligne par module de licence, les plus autorisés en premier. Un programme ou une table appartient à un module par son code système ([Code système](../settings/jde/system-code.md) et [Reclassification](../settings/jde/reclassification.md)).

| Colonne | Ce qu'elle compte |
|---|---|
| **Module**, **Catégorie** | Le composant de licence et sa famille (sans le préfixe *JD Edwards EnterpriseOne*). |
| **Autorisés** | Utilisateurs activés dont la sécurité permet d'exécuter un programme du module. |
| **Ont utilisé** | Utilisateurs ayant exécuté un programme du module, d'après Object Usage Tracking. |
| **Ont écrit des transactions** | Utilisateurs ayant écrit dans une table du module au cours des 90 derniers jours. |
| **Détail** | **objets autorisés** et **transactions** : les deux écrans de détail, filtrés sur l'application et le module. |

### Non déclarés \{#tab-not-declared\}

Comptes ayant écrit des transactions au cours des 90 derniers jours sans être utilisateurs de l'application : *Utilisateur*, *Dernière transaction*, *Tables* (nombre de tables modifiées).

---

## Les écrans de détail \{#details\}

Les deux écrans figurent aussi dans le menu, sous la page : **Licences → JD Edwards - objets autorisés** et **Licences → JD Edwards - transactions**. Ouverts depuis le menu, ils attendent un filtre ; ouverts depuis une ligne de la page, ils arrivent déjà filtrés.

| Écran | Colonnes |
|---|---|
| **JD Edwards - objets autorisés** | *ID application*, *Composant ID*, *Utilisateur ID*, *Technique (Y/N)*, *Lié (Y/N)*, *Objet* — chaque objet que la sécurité de l'utilisateur autorise, par module. |
| **JD Edwards - transactions** | *ID application*, *Composant ID*, *Utilisateur ID*, *Objet* (la table écrite), *Dernière transaction*. |

Les deux écrans sont en lecture seule.

---

## Conseils & bonnes pratiques

- **Lire *Comptés pour les licences*, pas *Utilisateurs activés*.** L'écart correspond aux comptes techniques et liés ; les signaler dans [Propriétés utilisateurs](../settings/security/users-properties.md) pour qu'aucune licence ne soit comptée pour eux.
- **Un module où *Autorisés* dépasse largement *Ont utilisé*** traduit une sécurité plus large que le travail réel : c'est un sujet de revue des rôles plutôt qu'un besoin de licences supplémentaires.
- **Traiter *Non déclarés* en priorité.** Un compte qui écrit sans être utilisateur est soit un utilisateur supprimé dont les traitements continuent, soit un compte technique à déclarer.
- **Les utilisateurs jamais connectés** sont les premiers comptes à désactiver avant un décompte.
