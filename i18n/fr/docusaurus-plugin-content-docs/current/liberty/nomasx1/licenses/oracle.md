---
title: Oracle
description: "Liste, par base de données, des options de licence Oracle avec un indicateur requis / non requis — l'inventaire à comparer avec les licences réellement souscrites."
keywords: [Nomasx-1, licences, Oracle, licences requises, conformité, Diagnostic Pack, Tuning Pack, Enterprise Edition Options]
---

# Oracle

L'écran **Oracle** côté licence liste, pour chaque base de données Oracle connectée, chaque composant de licence Oracle vérifié par les scripts de collecte Nomasx-1, avec un indicateur vert / rouge qui dit si le composant est **requis** sur l'instance — c'est-à-dire si l'usage collecté correspond à ce qu'Oracle considère comme une fonctionnalité licenciable.

L'objectif de l'écran est d'identifier les licences dont la base a *besoin*, pour pouvoir les comparer à celles réellement souscrites dans *Licences acquises* et combler l'écart d'un côté ou de l'autre — abandonner une licence que personne n'utilise, ou souscrire une licence utilisée sans couverture.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="loracle-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="320" rx="14" fill="url(#loracle-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Licences · Oracle</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CATÉGORIE</text>
  <text x="360" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPOSANT</text>
  <text x="700" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">REQUIS</text>
  <text x="820" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP.</text>

  <rect x="60" y="132" width="880" height="22" rx="4" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="147" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database Enterprise Management</text>
  <text x="360" y="147" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Diagnostics Pack</text>
  <circle cx="720" cy="143" r="5" fill="#22c55e"/>
  <text x="820" y="147" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="156" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="171" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database Enterprise Management</text>
  <text x="360" y="171" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Tuning Pack</text>
  <circle cx="720" cy="167" r="5" fill="#22c55e"/>
  <text x="820" y="171" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="180" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="195" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database</text>
  <text x="360" y="195" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition</text>
  <circle cx="720" cy="191" r="5" fill="#22c55e"/>
  <text x="820" y="195" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="204" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="360" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Active Data Guard</text>
  <circle cx="720" cy="215" r="5" fill="#ef4444"/>
  <text x="820" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="228" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="243" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="360" y="243" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Advanced Compression</text>
  <circle cx="720" cy="239" r="5" fill="#22c55e"/>
  <text x="820" y="243" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="252" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="267" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="360" y="267" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database Vault</text>
  <circle cx="720" cy="263" r="5" fill="#ef4444"/>
  <text x="820" y="267" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="276" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="291" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="360" y="291" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Partitioning</text>
  <circle cx="720" cy="287" r="5" fill="#22c55e"/>
  <text x="820" y="291" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="300" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="315" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="360" y="315" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Real Application Clusters</text>
  <circle cx="720" cy="311" r="5" fill="#ef4444"/>
  <text x="820" y="315" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="328" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="343" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Others Products</text>
  <text x="360" y="343" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Audit Vault and Database Firewall</text>
  <circle cx="720" cy="339" r="5" fill="#ef4444"/>
  <text x="820" y="343" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>
</svg>

---

## Objectif de l'écran

Pour chaque base Oracle :

- **Ce qui demande une licence, et ce qui n'en demande pas.** Chaque ligne est un composant de licence Oracle connu. Une pastille verte dans *Requis* signale un usage détecté par les scripts de collecte sur l'instance — une licence est nécessaire. Une pastille rouge signale un composant installé mais non utilisé, ou non installé du tout — aucune licence à déclarer.
- **Couvrir le catalogue complet.** La liste embarque Enterprise Edition, les packs Database Enterprise Management (Diagnostics, Tuning), les options Enterprise Edition (Active Data Guard, Partitioning, Advanced Compression, Database In-Memory, RAC…) et les autres produits Oracle (Audit Vault, Spatial…). Rien n'est écarté silencieusement.
- **Une source unique pour la conformité.** Les mêmes données alimentent la discussion de renouvellement avec Oracle et la réconciliation procurement — pas de tableur parallèle à entretenir.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Catégorie** | `CPT_CATEGORY` — famille de licence. | La famille du catalogue Oracle à laquelle le composant appartient (Database, Enterprise Edition Options, Database Enterprise Management, Other Products…). |
| **Composant** | `CPT_COMPONENT` — nom du composant. | L'option de licence elle-même — *Enterprise Edition*, *Partitioning*, *Diagnostics Pack*, *Advanced Security*… |
| **Requis** | `ORAL_USED` — `Y` / `N`. Affiché en pastille verte / rouge. | Vert : usage détecté, la licence est nécessaire sur cette base. Rouge : aucun usage détecté, pas de licence à déclarer. |
| **Application** | `APPS_NAME` — nom de l'application. | L'application qui s'appuie sur la base. |

---

## Conseils & bonnes pratiques

- **Trier sur *Requis* décroissant** pour faire remonter les lignes vertes en haut — la liste des composants à souscrire.
- **Grouper par *Catégorie*** dans le contrôle Group pour lire les composants requis par famille du catalogue Oracle — la structure du price book Oracle.
- **Filtrer sur `Composant` contenant « Pack »** pour cibler les packs d'administration (Diagnostics, Tuning) — les lignes les plus lourdes d'une facture Oracle typique.
- **Recouper avec *Licences acquises*** pour vérifier que chaque composant vert est couvert par un CSI actif. Une pastille verte sans souscription est l'écart à combler.
