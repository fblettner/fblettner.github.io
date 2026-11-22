---
title: Droits — Utilisateurs / Rôles / OUT
description: "Droits effectifs : union de la matrice des droits déclarés et des objets effectivement invoqués par les utilisateurs, captés par Object Usage Tracking."
keywords: [Nomasx-1, applications, droits, OUT, Object Usage Tracking, droits observés, droits déclarés]
---

# Droits — Utilisateurs / Rôles / OUT

L'écran **Droits — Utilisateurs / Rôles / OUT** renvoie l'**union** de deux ensembles :

- **Droits déclarés** — toutes les lignes `SER_RUN = 'Y'` de la table des droits (les règles que le système source applique à l'exécution).
- **Activité observée** — chaque couple distinct `(utilisateur, objet)` capté par Object Usage Tracking, marqué avec le rôle synthétique `*ALL`, l'action `*DEFAULT` et les indicateurs Y / Y / Y / Y.

Le résultat est le *security workbench vu à travers l'usage* : ce que les utilisateurs ont le droit de faire **plus** ce qu'ils ont effectivement fait, côte à côte.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 426" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rou-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rou-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rou-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rou-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="346" rx="14" fill="url(#rou-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Droits / OUT - Utilisateurs par rôles</text>
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
  <text x="569" y="122" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJET</text>
  <rect x="569" y="128" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="141.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="709" y="141" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>

  <text x="233" y="180" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">860 lignes · 12 ms</text>
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
  <text x="243" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="329" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID</text>
  <text x="415" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ROLE ID</text>
  <text x="501" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OBJET (ID)</text>
  <text x="575" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ECRAN</text>
  <text x="645" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">VERSION</text>
  <text x="717" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">EXÉCUT…</text>
  <text x="767" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">A</text>
  <text x="793" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">M</text>
  <text x="819" y="243.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">S</text>
  <rect x="233" y="254" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="329" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="415" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AP_CLERK</text>
  <text x="501" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="575" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="645" y="268.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <circle cx="734.0" cy="265.0" r="3.2" fill="#4ade80"/>
  <circle cx="772.0" cy="265.0" r="3.2" fill="#4ade80"/>
  <circle cx="798.0" cy="265.0" r="3.2" fill="#4ade80"/>
  <circle cx="824.0" cy="265.0" r="3.2" fill="#f87171"/>
  <rect x="233" y="276" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="329" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ASMITH</text>
  <text x="415" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AR_MGR</text>
  <text x="501" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P03B102</text>
  <text x="575" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">W03B102E</text>
  <text x="645" y="290.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <circle cx="734.0" cy="287.0" r="3.2" fill="#4ade80"/>
  <circle cx="772.0" cy="287.0" r="3.2" fill="#4ade80"/>
  <circle cx="798.0" cy="287.0" r="3.2" fill="#4ade80"/>
  <circle cx="824.0" cy="287.0" r="3.2" fill="#f87171"/>
  <rect x="233" y="298" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="329" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">BWILSON</text>
  <text x="415" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">OM_CLERK</text>
  <text x="501" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="575" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">W4210E</text>
  <text x="645" y="312.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <circle cx="734.0" cy="309.0" r="3.2" fill="#4ade80"/>
  <circle cx="772.0" cy="309.0" r="3.2" fill="#4ade80"/>
  <circle cx="798.0" cy="309.0" r="3.2" fill="#4ade80"/>
  <circle cx="824.0" cy="309.0" r="3.2" fill="#f87171"/>
  <text x="233" y="344" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="332" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="345.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="345" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–50 sur 860</text>
  <text x="1087" y="345" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="382" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="397" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Objet · Ecran · Version</text>
  <text x="225.0" y="410" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce que couvre le droit</text>
  <line x1="435.0" y1="382" x2="509" y2="321.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rou-arrow)"/>
  <rect x="665.0" y="382" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="397" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécuter · A · M · S</text>
  <text x="675.0" y="410" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">exécuter, ajouter, modifier, supprimer</text>
  <line x1="885.0" y1="382" x2="725" y2="321.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rou-arrow)"/>
  <rect x="12" y="107" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="122" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres d'abord</text>
  <text x="22" y="135" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">choisir, puis Exécuter</text>
  <line x1="197" y1="124.0" x2="233" y2="124" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rou-arrow)"/>
  <rect x="12" y="190" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécuter</text>
  <text x="22" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">grille vide avant exécution</text>
  <line x1="197" y1="207.0" x2="409" y2="207" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rou-arrow)"/>
  <rect x="1119" y="201" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="216" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1129" y="229" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le résultat vers Excel</text>
  <line x1="1119" y1="218.0" x2="1042.5" y2="218" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rou-arrow)"/>
  <rect x="1119" y="270.0" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="285.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Accordé ET utilisé</text>
  <text x="1129" y="298.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">objets vus dans l'OUT</text>
  <line x1="1119" y1="287.0" x2="515" y2="287.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rou-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque application connectée :

- **Déclaré et observé au même endroit.** Auditer le droit *tel qu'écrit* (lignes déclarées) et le droit *tel qu'exercé* (lignes observées) sans jongler entre deux écrans.
- **Repérer les sur-attributions.** Un utilisateur avec des droits déclarés qu'il n'a jamais exercés est le candidat de révocation le plus net — les écrans *Transactions* et *OUT* fournissent les éléments de preuve.
- **Repérer les sous-attributions.** Un utilisateur apparaissant sur des lignes `*ALL (observé)` pour un objet sans couverture déclarée signale soit une règle héritée que l'analyse a manquée, soit un contournement à investiguer.

:::info[Spécifique à JDE]
Cette vue est spécifique à JDE : la moitié *observée* vient de `LICENSE_JDE_OUT`, jointe aux tables d'objets JDE et de composants de licence. Les autres systèmes sources peuvent alimenter la même vue à partir d'un journal d'usage équivalent.

Les chemins d'accès comprennent ceux des pages composites et des pages E1, pour les applications cochées **E1 Composite** / **E1 Pages** dans [Applications](../../settings/global/applications.md) : une page composite donne l'application ou l'état qu'ouvrent ses tuiles, les formulaires affichés dans ses volets et, pour une page d'accueil, toutes les tâches placées sous son menu ; une page E1 donne les applications et les états que cite son contenu. Activer ou désactiver un indicateur modifie ces lignes à la collecte suivante.
:::

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `SER_APPS_ID` — identifiant de l'application. Filtrable. | Application concernée par la ligne. |
| **Utilisateur ID** | `SER_USER_ID` — utilisateur. Filtrable. | Utilisateur effectif. |
| **Role ID** | `SER_ROLE_ID` — rôle accordant le droit, ou `*ALL` pour les lignes observées. | Provenance de la ligne. |
| **Objet** | `SER_OBJECT` — objet technique. Filtrable. | Ce que la ligne couvre. |
| **Ecran** | `SERL_FORM` — code form, ou `*ALL` pour les lignes observées. | Écran spécifique, quand connu. |
| **Version** | `SER_VERSION` — version de traitement. | Variante de configuration. |
| **Run / Ajouter / Modifier / Supprimer** | `SER_RUN`, `SER_ADD`, `SER_CHG`, `SER_DEL` — `Y` / `N`. | Indicateurs d'action. Les lignes observées reportent toujours `Y / Y / Y / Y` (le système source n'aurait pas exécuté l'appel sinon). |
| **Role Action ID** | `SER_ROLE_ACTION_ID` — identifiant d'action, ou `*DEFAULT` pour les lignes observées. | Descripteur d'action côté source. |

---

## Conseils & bonnes pratiques

- **Filtrer sur un seul utilisateur** + regrouper par *Objet* — les lignes en doublon prouvent que le droit est à la fois déclaré et exercé. Une ligne unique (déclarée *ou* observée, pas les deux) est l'écart à investiguer.
- **Trier par *Rôle ID*** avec les lignes `*ALL` en tête — fait remonter les lignes observées-sans-déclaration.
- **Rogner les droits au niveau rôle dont les objets n'apparaissent que sur `*ALL`** — c'est-à-dire jamais déclarés, jamais atteints depuis un menu — ce sont en général des vestiges d'une configuration précédente.
- **Pour les comptes batch / de service**, la majorité des lignes seront *ALL (observé)* puisque ces comptes ont rarement une couverture rôle explicite. Les marquer dans *Paramètres → Propriétés utilisateurs* pour ne pas polluer l'analyse.
