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

<svg viewBox="0 0 1320 442" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="lor-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="lor-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="lor-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="lor-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="362" rx="14" fill="url(#lor-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">License - Required (ORACLE)</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⏷  Filtres avancés</text>
  <text x="233" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">17 lignes · 12 ms</text>
  <rect x="959" y="118" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="119" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="131.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="123" x2="1018" y2="133" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="131.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="146" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="389" y="146" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="428.0" y="160.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="547" y="146" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="557" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="675" y="146" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="702.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="736" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="772.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="814" y="146" width="94" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="861.0" y="160.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper (1)</text>
  <rect x="914" y="146" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="146" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="178" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="243" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">NOM DE L'APPLICATION</text>
  <text x="423" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CATÉGORIE</text>
  <text x="673" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPOSANT</text>
  <text x="923" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LICENCE REQUISE</text>
  <rect x="233" y="204" width="854" height="22" fill="rgba(74,158,255,0.05)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="218.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">⌄ 1 - JDE-PROD (17)</text>
  <rect x="233" y="226" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="423" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Database Enterprise Management</text>
  <text x="673" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Diagnostics Pack</text>
  <circle cx="975.0" cy="237.0" r="3.2" fill="#f87171"/>
  <rect x="233" y="248" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="423" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Database Enterprise Management</text>
  <text x="673" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Tuning Pack</text>
  <circle cx="975.0" cy="259.0" r="3.2" fill="#f87171"/>
  <rect x="233" y="270" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="423" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Oracle Database</text>
  <text x="673" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition</text>
  <circle cx="975.0" cy="281.0" r="3.2" fill="#4ade80"/>
  <rect x="233" y="292" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="423" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="673" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Partitioning</text>
  <circle cx="975.0" cy="303.0" r="3.2" fill="#4ade80"/>
  <rect x="233" y="314" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="328.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="423" y="328.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="673" y="328.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Advanced Compression</text>
  <circle cx="975.0" cy="325.0" r="3.2" fill="#f87171"/>
  <text x="233" y="360" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="348" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="361.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="361" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–17 sur 17</text>
  <text x="1087" y="361" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="215.0" y="398" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="413" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Catégorie</text>
  <text x="225.0" y="426" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">base, options, packs</text>
  <line x1="360.0" y1="398" x2="431" y2="337.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lor-arrow)"/>
  <rect x="515.0" y="398" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="413" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Composant</text>
  <text x="525.0" y="426" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">édition, option ou pack</text>
  <line x1="660.0" y1="398" x2="681" y2="337.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lor-arrow)"/>
  <rect x="815.0" y="398" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="413" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Licence requise</text>
  <text x="825.0" y="426" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vert : utilisé, licence requise</text>
  <line x1="960.0" y1="398" x2="931" y2="337.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lor-arrow)"/>
  <rect x="12" y="198.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="213.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Groupé par application</text>
  <text x="22" y="226.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un bloc par base</text>
  <line x1="197" y1="215.0" x2="247" y2="215.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lor-arrow)"/>
  <rect x="1119" y="151" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="166" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grouper (1)</text>
  <text x="1129" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dégrouper ici</text>
  <line x1="1119" y1="168.0" x2="861.0" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lor-arrow)"/>
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
| **Licence requise** | `ORAL_USED` — `Y` / `N`. Affiché en pastille verte / rouge. | Vert : usage détecté, la licence est nécessaire sur cette base. Rouge : aucun usage détecté, pas de licence à déclarer. |
| **Nom de l'application** | `APPS_NAME` — nom de l'application. | L'application qui s'appuie sur la base. |

---

## Conseils & bonnes pratiques

- **Trier sur *Requis* décroissant** pour faire remonter les lignes vertes en haut — la liste des composants à souscrire.
- **Grouper par *Catégorie*** dans le contrôle Group pour lire les composants requis par famille du catalogue Oracle — la structure du price book Oracle.
- **Filtrer sur `Composant` contenant « Pack »** pour cibler les packs d'administration (Diagnostics, Tuning) — les lignes les plus lourdes d'une facture Oracle typique.
- **Recouper avec *Licences acquises*** pour vérifier que chaque composant vert est couvert par un CSI actif. Une pastille verte sans souscription est l'écart à combler.
