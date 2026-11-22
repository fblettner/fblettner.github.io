---
title: Conflits — Rôles
description: "Paires de rôles distinctes produisant un conflit SoD — les couples de rôles à redessiner."
keywords: [Nomasx-1, applications, conflits, séparation des tâches, SoD, rôles, paire de rôles, dessin des rôles]
---

# Conflits — Rôles

L'écran **Conflits — Rôles** liste les **paires de rôles** distinctes produisant un conflit SoD sur une application connectée. Une ligne par triplet `(Application, Rôle 1, Rôle 2)`, dérivé du jeu de *Détails*.

Là où *Conflits — Utilisateurs* pilote la remédiation à court terme (révoquer ou désactiver), *Conflits — Rôles* pilote la **correction structurelle** : redessiner la paire de rôles de manière à ce que la combinaison ne puisse plus survenir.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 342" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cfr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cfr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cfr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cfr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="262" rx="14" fill="url(#cfr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">SOD - Roles</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">18 lignes · 12 ms</text>
  <rect x="959" y="84" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="85" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="89" x2="1018" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="112" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="389" y="112" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="428.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="569" y="112" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="697" y="112" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="724.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="758" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="836" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="872.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="914" y="112" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="112" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="144" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="337" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="351" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="437" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RÔLE 1 (ID)</text>
  <text x="537" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RÔLE 1</text>
  <text x="737" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RÔLE 2 (ID)</text>
  <text x="837" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RÔLE 2</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AP_CLERK</text>
  <text x="537" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Accounts payable clerk</text>
  <text x="737" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AP_SUPER</text>
  <text x="837" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Accounts payable supervisor</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PURCH_MGR</text>
  <text x="537" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Purchasing manager</text>
  <text x="737" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AP_SUPER</text>
  <text x="837" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Accounts payable supervisor</text>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AR_CLERK</text>
  <text x="537" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Accounts receivable clerk</text>
  <text x="737" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AR_CLERK</text>
  <text x="837" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Accounts receivable clerk</text>
  <text x="233" y="260" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="248" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="261.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="261" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–18 sur 18</text>
  <text x="1087" y="261" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="298" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôle 1</text>
  <text x="225.0" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">apporte un côté du risque</text>
  <line x1="435.0" y1="298" x2="545" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfr-arrow)"/>
  <rect x="665.0" y="298" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="313" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôle 2</text>
  <text x="675.0" y="326" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">apporte l'autre côté</text>
  <line x1="885.0" y1="298" x2="845" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfr-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rechercher</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un rôle impliqué</text>
  <line x1="197" y1="123.0" x2="273" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfr-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les paires vers Excel</text>
  <line x1="1119" y1="134.0" x2="1042.5" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfr-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque application connectée :

- **Repérer les rôles structurellement incompatibles.** Une paire qui figure ici signifie que *tout* utilisateur portant les deux rôles sera en conflit. Resserrer le dessin une seule fois ferme le problème pour tous les détenteurs actuels et futurs.
- **Prioriser le redesign.** Les paires qui produisent de nombreuses lignes *Détails* sont les corrections à plus fort impact. Les classer à partir des compteurs de la *Synthèse* ou des *Détails*.
- **Planifier la communication.** La paire de rôles est l'unité d'échange avec l'administrateur sécurité et les propriétaires de rôles — bien plus actionnable qu'un débat utilisateur par utilisateur.

La requête se contente d'extraire les tuples `(CFD_APPS_ID, CFD_ROLE1_ID, CFD_ROLE2_ID)` distincts depuis `SOD_CONFLICT_DETAILS`, triés par *Rôle 1*.

:::info[Spécifique à JDE]
Les conflits se calculent sur les droits effectifs, qui comprennent les chemins d'accès des pages composites et des pages E1 pour les applications cochées **E1 Composite** / **E1 Pages** dans [Applications](../../settings/global/applications.md) — ce qu'ouvrent leurs tuiles, les formulaires de leurs volets, les applications et les états que cite une page E1. Activer ou désactiver un indicateur modifie les conflits à la collecte suivante.
:::

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `CFD_APPS_ID` — identifiant de l'application. | Application connectée. |
| **Rôle 1** | `CFD_ROLE1_ID` — rôle accordant l'Activité 1. Liste déroulante vers le catalogue des rôles. | Première moitié de la paire incompatible. |
| **Rôle 2** | `CFD_ROLE2_ID` — rôle accordant l'Activité 2. Liste déroulante vers le catalogue des rôles. | Seconde moitié de la paire incompatible. |

---

## Conseils & bonnes pratiques

- **Comparer chaque paire avec *Combinaison de rôles*** — si la même paire apparaît dans une combinaison à fort effectif, le conflit est largement distribué et mérite une correction structurelle.
- **La paire est symétrique.** `(A, B)` et `(B, A)` portent la même discussion. Les traiter comme une seule décision.
- **Trois corrections structurelles courantes** : scinder un rôle en deux, restreindre la portée d'un rôle, ou sortir un objet d'un rôle et passer par une attribution explicite au niveau utilisateur (avec justification documentée).
- **Relancer la collecte SoD** après la refonte — les compteurs *théoriques* et *avérés* doivent tous deux baisser. Une baisse uniquement sur *Détails* mais pas sur *Avérés* pointe des contrôles compensatoires éventuellement encore nécessaires.
