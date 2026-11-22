---
title: Conflits — Utilisateurs
description: "Utilisateurs distincts en conflit sur une application connectée — la liste des comptes à remédier."
keywords: [Nomasx-1, applications, conflits, séparation des tâches, SoD, utilisateurs, liste de remédiation]
---

# Conflits — Utilisateurs

L'écran **Conflits — Utilisateurs** est la liste distincte des utilisateurs présentant au moins un conflit SoD sur une application connectée. Une ligne par couple `(Application, Utilisateur)`. Chaque ligne porte le statut du compte, sa date de création et sa dernière connexion — exactement ce qu'il faut pour décider *comment* remédier.

Si *Synthèse* indique combien de conflits il y a et *Détails* leur apparence, cet écran indique *à qui* ils appartiennent.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 364" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cfu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cfu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cfu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cfu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="284" rx="14" fill="url(#cfu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">SoD - Utilisateurs</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">22 lignes · 12 ms</text>
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
  <text x="437" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID (…</text>
  <text x="537" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID</text>
  <text x="717" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">STATUT</text>
  <text x="777" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE DE CRÉATION</text>
  <text x="887" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE DE CONNEXION</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="537" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">John Doe</text>
  <circle cx="739.0" cy="181.0" r="3.2" fill="#4ade80"/>
  <text x="777" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2021-03-02</text>
  <text x="887" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ASMITH</text>
  <text x="537" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <circle cx="739.0" cy="203.0" r="3.2" fill="#4ade80"/>
  <text x="777" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2019-09-14</text>
  <text x="887" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-20</text>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">BWILSON</text>
  <text x="537" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Bob Wilson</text>
  <circle cx="739.0" cy="225.0" r="3.2" fill="#4ade80"/>
  <text x="777" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2023-01-09</text>
  <text x="887" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-10-02</text>
  <rect x="233" y="236" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="250.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">OLDUSER</text>
  <text x="537" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Former Clerk</text>
  <circle cx="739.0" cy="247.0" r="3.2" fill="#f87171"/>
  <text x="777" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2015-06-01</text>
  <text x="887" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2024-02-11</text>
  <text x="233" y="282" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="270" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="283.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="283" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–22 sur 22</text>
  <text x="1087" y="283" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="320" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateur</text>
  <text x="225.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">au moins un conflit SoD</text>
  <line x1="360.0" y1="320" x2="545" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfu-arrow)"/>
  <rect x="515.0" y="320" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Statut</text>
  <text x="525.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vert actif · rouge désactivé</text>
  <line x1="660.0" y1="320" x2="725" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfu-arrow)"/>
  <rect x="815.0" y="320" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Date de connexion</text>
  <text x="825.0" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dernière connexion</text>
  <line x1="960.0" y1="320" x2="895" y2="259.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfu-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rechercher</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un utilisateur en conflit</text>
  <line x1="197" y1="123.0" x2="273" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfu-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la liste vers Excel</text>
  <line x1="1119" y1="134.0" x2="1042.5" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfu-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque utilisateur en conflit sur une application connectée :

- **Identifier les détenteurs.** Une ligne par utilisateur — plus facile à dispatcher entre propriétaires métiers que la lecture ligne par ligne des *Détails*.
- **Lire le contexte de l'action.** Statut + Création + Dernière connexion indiquent si la remédiation la plus simple est une désactivation (comptes inactifs) ou un nettoyage de rôles (comptes actifs en conflit).
- **Repérer les conflits-zombies.** Un utilisateur *Inactif* qui apparaît encore ici prouve que le conflit sous-jacent est structurel — même après le départ de l'utilisateur, son portefeuille de rôles produit toujours un risque SoD théorique. Resserrer le dessin des rôles plutôt que de s'appuyer sur la désactivation.

:::info[Spécifique à JDE]
Les conflits se calculent sur les droits effectifs, qui comprennent les chemins d'accès des pages composites et des pages E1 pour les applications cochées **E1 Composite** / **E1 Pages** dans [Applications](../../settings/global/applications.md) — ce qu'ouvrent leurs tuiles, les formulaires de leurs volets, les applications et les états que cite une page E1. Activer ou désactiver un indicateur modifie les conflits à la collecte suivante.
:::

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `CFD_APPS_ID` — identifiant de l'application. | Application à laquelle le conflit appartient. |
| **Utilisateur ID** | `CFD_USER_ID` — utilisateur en conflit. | Détenteur du conflit. |
| **Statut** | `USR_STATUS` — `01` signifie *Actif*. | État côté source — détermine la remédiation. |
| **Date de création** | `USR_DT_CREATION` — date. | Date de création du compte. |
| **Date de connexion** | `USR_DT_LOGIN` — date. | Dernière authentification. Un compte actif depuis longtemps dormant et en conflit est la cible la plus simple à fermer. |

---

## Conseils & bonnes pratiques

- **Trier sur *Date de connexion* décroissante** — les utilisateurs qui se connectent activement portent le risque opérationnel le plus élevé. Les traiter en premier.
- **Filtrer sur le statut *Inactif*** pour retrouver les conflits sur des comptes déjà désactivés. Ils sont faciles à fermer mais signalent que le dessin des rôles autorise encore la combinaison.
- **Combiner avec *Conflits — Détails* sur le même filtre utilisateur** pour lire l'histoire complète d'un conflit avant de contacter la personne.
- **Cliquer sur une ligne** ouvre l'écran *Audit Utilisateurs* pour cet utilisateur — vue complète rôles + activité au même endroit.
