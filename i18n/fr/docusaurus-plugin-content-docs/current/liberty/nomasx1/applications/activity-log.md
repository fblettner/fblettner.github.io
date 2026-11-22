---
title: Transactions
description: "Journal d'activité au niveau base — chaque transaction enregistrée par utilisateur sur les tables de l'application connectée."
keywords: [Nomasx-1, applications, transactions, journal d'activité, piste d'audit, journal base de données]
---

# Transactions

L'écran **Transactions** liste toutes les transactions enregistrées sur une application connectée, captées au niveau base de données. Une ligne par `(Application, Utilisateur, Table, Date de transaction)` — la preuve brute utilisée par la vue *Conflits — Avérés* et les statistiques d'*Object Usage Tracking*.

C'est le *registre des faits* de Nomasx-1 — le jeu de données qui transforme un conflit théorique en constat documenté.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 426" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="acl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="acl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="acl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="acl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="346" rx="14" fill="url(#acl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Activity Log</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="74" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">⌄  ⏷  Filtres avancés</text>
  <text x="245" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="245" y="128" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="255" y="141.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="385" y="141" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="407" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR ID</text>
  <rect x="407" y="128" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="417" y="141.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="547" y="141" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="569" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <rect x="569" y="128" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="141.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="709" y="141" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>

  <text x="233" y="180" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">5870 lignes · 12 ms</text>
  <rect x="959" y="168" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="169" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="181.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="173" x2="1018" y2="183" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="181.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="196" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="210.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="389" y="196" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="428.0" y="210.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="569" y="196" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="210.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="697" y="196" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="724.5" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="758" y="196" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.0" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="836" y="196" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="872.0" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="914" y="196" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="196" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="228" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="337" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="351" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="437" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID…</text>
  <text x="529" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID</text>
  <text x="639" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SCHÉMA</text>
  <text x="719" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TABLE</text>
  <text x="799" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE DE TRANSACTION</text>
  <text x="985" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">NOMBRE D'ENREG…</text>
  <text x="999" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OBJET</text>
  <rect x="233" y="254" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="268.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="529" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="639" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="719" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0411</text>
  <text x="799" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <text x="985" y="268.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">42</text>
  <text x="999" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P0411</text>
  <rect x="233" y="276" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="290.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ASMITH</text>
  <text x="529" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <text x="639" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="719" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F03B13</text>
  <text x="799" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <text x="985" y="290.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">17</text>
  <text x="999" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P03B102</text>
  <rect x="233" y="298" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="312.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">BWILSON</text>
  <text x="529" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Bob Wilson</text>
  <text x="639" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="719" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F4211</text>
  <text x="799" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-17</text>
  <text x="985" y="312.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">96</text>
  <text x="999" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="233" y="344" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="332" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="345.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="345" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–50 sur 5870</text>
  <text x="1087" y="345" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="382" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="397" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Schéma · Table</text>
  <text x="225.0" y="410" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la table modifiée</text>
  <line x1="360.0" y1="382" x2="727" y2="321.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="515.0" y="382" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="397" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Date de transaction</text>
  <text x="525.0" y="410" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne par jour</text>
  <line x1="660.0" y1="382" x2="807" y2="321.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="815.0" y="382" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="397" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nombre d'enregistrement</text>
  <text x="825.0" y="410" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lignes écrites ce jour-là</text>
  <line x1="960.0" y1="382" x2="977" y2="321.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="12" y="107" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="122" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres d'abord</text>
  <text x="22" y="135" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application, utilisateur, table</text>
  <line x1="197" y1="124.0" x2="233" y2="124" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="12" y="190" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécuter</text>
  <text x="22" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">grille vide avant exécution</text>
  <line x1="197" y1="207.0" x2="409" y2="207" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
  <rect x="1119" y="201" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="216" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grouper</text>
  <text x="1129" y="229" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par utilisateur, table ou jour</text>
  <line x1="1119" y1="218.0" x2="872.0" y2="218" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#acl-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque application connectée :

- **Qu'a fait chaque utilisateur ?** *Schéma + Table + Date + Nombre* indique combien de lignes de quelle table un utilisateur a touchées à un instant donné.
- **Recouper avec les droits théoriques.** Combiné à la matrice des *Droits*, un journal vide pour un utilisateur aux droits étendus est l'argument de révocation le plus solide.
- **Alimenter l'analyse SoD avérée.** L'écran *Conflits — Avérés* intersecte ce jeu de données avec les détails SoD — si un utilisateur n'apparaît pas ici pour les tables concernées, le conflit reste théorique.

Le journal s'appuie sur des triggers / un audit au niveau base sur les tables du système source — en dehors de toute permission applicative. Il capte ce que *la base* a enregistré, pas ce que l'application *pense* avoir fait.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `ACL_APPS_ID` — identifiant de l'application. Filtrable. | Application connectée. |
| **Utilisateur ID** | `ACL_USER_ID` — identifiant utilisateur, nettoyé. Filtrable, restreint à l'application. | Auteur de la transaction. |
| **Schéma** | `ACL_SCHEMA` — schéma de base. | Localisation de la donnée — utile quand plusieurs environnements partagent la même instance Nomasx-1. |
| **Table** | `ACL_TABLE_NAME` — table de base. Filtrable. | Objet écrit. |
| **Date de transaction** | `ACL_DT_TRANSACTION` — horodatage. | Moment de l'activité. |
| **Nombre d'enregistrement** | `ACL_COUNT` — nombre de lignes touchées. | Volume — distingue une mise à jour ponctuelle d'une opération de masse. |
| **Objet** | `ACL_OBJECT_ID` — programme source. | Programme à l'origine de l'écriture — relie la ligne à la matrice des droits. |

---

## Conseils & bonnes pratiques

- **Filtrer sur un seul *Utilisateur ID*** + trier sur *Date transaction* décroissante — la chronologie d'activité de l'utilisateur. Moyen rapide de savoir si un compte aux droits sensibles est dormant ou actif.
- **Filtrer sur *Table*** pour investiguer un jeu de données précis — *qui a touché F0411 ce trimestre ?* se répond en un filtre.
- **Combiner avec *OUT — Composants*** — *Transactions* est la photographie base, *OUT* est la photographie applicative. Les deux doivent raconter une histoire cohérente ; un écart important pointe des écritures directes en base qui contournent l'application.
- **Surveiller *Nombre*** — une mise à jour unitaire est normale, une opération de masse mérite un contrôle de justification.
