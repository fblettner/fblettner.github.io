---
title: Conflits — Avérés
description: "Conflits SoD confirmés par les traces du journal d'activité — l'utilisateur détient les droits ET les a effectivement exercés des deux côtés."
keywords: [Nomasx-1, applications, conflits, séparation des tâches, SoD, avérés, journal d'activité, preuve]
---

# Conflits — Avérés

L'écran **Conflits — Avérés** ne conserve que les lignes SoD pour lesquelles le journal d'activité prouve que l'utilisateur a **effectivement exercé** les deux activités incompatibles. La vue intersecte le jeu de *Détails* avec `SECURITY_ACTIVITY_LOG` via la table de cross-référence qui rattache chaque objet SoD aux tables source qu'il touche.

Une ligne ici n'est plus un conflit théorique — c'est un fait, avec des traces base de données des deux côtés.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 404" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cfp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cfp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cfp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cfp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="324" rx="14" fill="url(#cfp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">SoD - Avérés</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="74" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">⌄  ⏷  Filtres avancés</text>
  <text x="245" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="245" y="128" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="255" y="141.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="385" y="141" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="407" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESS ID</text>
  <rect x="407" y="128" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="417" y="141.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="547" y="141" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="569" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RISQUE ID</text>
  <rect x="569" y="128" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="141.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="709" y="141" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>

  <text x="233" y="180" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">12 lignes · 12 ms</text>
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
  <text x="243" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATIO…</text>
  <text x="313" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PROCESS …</text>
  <text x="375" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RISQUE ID</text>
  <text x="437" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEU…</text>
  <text x="507" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ACTIVITÉ 1</text>
  <text x="603" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PROGRAMME 1</text>
  <text x="673" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RÔLE 1</text>
  <text x="747" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ACTIVITÉ 2</text>
  <text x="843" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OBJET 2</text>
  <text x="913" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RÔLE 2</text>
  <rect x="233" y="254" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="313" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2P01</text>
  <text x="375" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2PR01</text>
  <text x="437" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="507" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Create supplier</text>
  <text x="603" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P04012</text>
  <text x="673" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AP_CLERK</text>
  <text x="747" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Pay supplier</text>
  <text x="843" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P0413M</text>
  <text x="913" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AP_CLERK</text>
  <rect x="233" y="276" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="313" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2P01</text>
  <text x="375" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P2PR01</text>
  <text x="437" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ASMITH</text>
  <text x="507" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Create supplier</text>
  <text x="603" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P04012</text>
  <text x="673" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PURCH_MGR</text>
  <text x="747" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Pay supplier</text>
  <text x="843" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P0413M</text>
  <text x="913" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AP_SUPER</text>
  <text x="233" y="322" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="310" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="323.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="323" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–12 sur 12</text>
  <text x="1087" y="323" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="360" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Activité 1 · Programme 1</text>
  <text x="225.0" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">réellement exécuté</text>
  <line x1="435.0" y1="360" x2="515" y2="299.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfp-arrow)"/>
  <rect x="665.0" y="360" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Activité 2 · Objet 2</text>
  <text x="675.0" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">réellement exécuté aussi</text>
  <line x1="885.0" y1="360" x2="755" y2="299.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfp-arrow)"/>
  <rect x="12" y="107" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="122" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres d'abord</text>
  <text x="22" y="135" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application, processus, risque</text>
  <line x1="197" y1="124.0" x2="233" y2="124" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfp-arrow)"/>
  <rect x="12" y="190" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécuter</text>
  <text x="22" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">grille vide avant exécution</text>
  <line x1="197" y1="207.0" x2="409" y2="207" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfp-arrow)"/>
  <rect x="1119" y="270.0" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="285.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Avéré : les deux côtés utilisés</text>
  <text x="1129" y="298.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">d'après l'activité collectée</text>
  <line x1="1119" y1="287.0" x2="515" y2="287.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfp-arrow)"/>
</svg>

---

## Objectif de l'écran

La liste des conflits avérés répond à une question : **quels conflits ne sont pas que théoriques ?**

- **Priorité d'audit.** Les conflits avérés passent en tête de chaque plan de remédiation — comportement documenté, pas capacité hypothétique.
- **Nettoyage piloté par la preuve.** Chaque ligne dispose d'une preuve au niveau base, des deux côtés, via la table de cross-référence — utile quand un utilisateur conteste le constat.
- **Liste plus courte, échange plus pointu.** Quelques dizaines de lignes avérées sont plus simples à discuter avec le métier que les quelques centaines de lignes théoriques de *Détails*.

:::info[Spécifique à JDE]
Les conflits se calculent sur les droits effectifs, qui comprennent les chemins d'accès des pages composites et des pages E1 pour les applications cochées **E1 Composite** / **E1 Pages** dans [Applications](../../settings/global/applications.md) — ce qu'ouvrent leurs tuiles, les formulaires de leurs volets, les applications et les états que cite une page E1. Activer ou désactiver un indicateur modifie les conflits à la collecte suivante.
:::

---

## Colonnes

Structure identique à *Conflits — Détails* (le jeu de données est un sous-ensemble strict). Se référer à cette page pour la documentation colonne par colonne. La seule différence est le filtre — les lignes avérées sont restreintes aux utilisateurs disposant de traces dans le journal d'activité **des deux côtés** du conflit, jointes via `SECURITY_XREF` et `SECURITY_ACTIVITY_LOG`.

---

## Conseils & bonnes pratiques

- **Démarrer chaque revue SoD trimestrielle ici.** Les lignes avérées sont celles à remédier absolument avant publication.
- **Recouper avec les *Transactions*** pour retrouver l'horodatage et le compte de transactions derrière chaque entrée.
- **Un utilisateur présent à la fois sur *Détails* et *Avérés* pour le même risque est le cas le plus urgent** — il a le droit et il l'a exercé. Documenter le contrôle compensatoire ou révoquer.
- **Un utilisateur sur *Détails* mais pas sur *Avérés*** est un *risque latent* — capacité sans usage. Mérite tout de même un nettoyage, en priorité inférieure.
