---
title: Rôles
description: "Catalogue de tous les rôles définis dans chaque application connectée — application, identifiant du rôle, nom du rôle, séquence."
keywords: [Nomasx-1, sécurité, rôles, rôles JDE, rôles SAP, catalogue de rôles]
---

# Rôles

L'écran **Rôles** liste l'ensemble des rôles définis dans les tables de sécurité de chaque application connectée. Une ligne par couple `(Application, Rôle)` : c'est l'inventaire de référence des noms de rôles auxquels un utilisateur peut être rattaché.

Un rôle est le *conteneur de permissions* exposé par le système source — `*ROLE` côté JD Edwards EnterpriseOne, *profils PFCG* côté SAP, *permission sets* côté NetSuite. Nomasx-1 reprend le catalogue tel quel depuis la source.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 397" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxrol-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxrol-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxrol-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxrol-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="357" rx="14" fill="url(#nxrol-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Sécurité - Rôles</text>
  <rect x="361.76" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="383.76" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.security_roles_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="100" width="840" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="115.5" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⛉  Filtres avancés</text>
  <text x="240" y="146" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">96 lignes · 6,1 ms</text>
  <rect x="952" y="134" width="142" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="953" y="135" width="64" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="985.0" y="147.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Tableau</text>
  <line x1="1018" y1="139" x2="1018" y2="149" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="147.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Graphique</text>
  <rect x="240" y="162" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="176.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="418" y="162" width="80" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="458.0" y="176.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="648" y="162" width="112" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="658" y="176.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="766" y="162" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="787.0" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="814" y="162" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="842.5" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="877" y="162" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.5" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="940" y="162" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="971.0" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="1008" y="162" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1044.0" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="240" y="194" width="840" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="268" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID (ID)</text>
  <text x="375" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="458" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ROLE ID (ID)</text>
  <text x="532" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ROLE ID</text>
  <text x="657" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">NOM DU RÔLE</text>
  <text x="842" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SÉQUENCE</text>
  <rect x="240" y="220" width="840" height="22" fill="#0d1220"/>
  <rect x="245" y="223" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="234.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="234.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP_CLERK</text>
  <text x="532" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP Clerk</text>
  <text x="657" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Accounts Payable – Clerk</text>
  <text x="880" y="234.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">10</text>
  <rect x="240" y="243" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <rect x="245" y="246" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="257.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="257.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP_MGR</text>
  <text x="532" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP Manager</text>
  <text x="657" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Accounts Payable – Manager</text>
  <text x="880" y="257.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">20</text>
  <rect x="240" y="266" width="840" height="22" fill="#0d1220"/>
  <rect x="245" y="269" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="280.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="280.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AR_MGR</text>
  <text x="532" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AR Manager</text>
  <text x="657" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Accounts Receivable – Manager</text>
  <text x="880" y="280.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">30</text>
  <rect x="240" y="289" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <rect x="245" y="292" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="303.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="303.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">GL_ACCT</text>
  <text x="532" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">GL Accountant</text>
  <text x="657" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">General Accounting – Accountant</text>
  <text x="880" y="303.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">40</text>
  <rect x="240" y="312" width="840" height="22" fill="#0d1220"/>
  <rect x="245" y="315" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="326.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="326.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">SYSADMIN</text>
  <text x="532" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">System Administrator</text>
  <text x="657" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">System Administrator</text>
  <text x="880" y="326.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">90</text>
  <text x="240" y="357" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="321.4" y="345" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="331.4" y="358.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="385.4" y="357" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Affichage 1–50 sur 96</text>
  <rect x="992" y="345" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="358.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="345" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="358.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="345" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="358.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="345" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="358.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="254" y="242" width="170" height="56" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="266" y="263" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Display Users</text>
  <text x="414" y="263" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="266" y="285" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Display Rights</text>
  <text x="414" y="285" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <rect x="20" y="92" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres avancés</text>
  <text x="30" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Application ID</text>
  <line x1="200" y1="109.0" x2="240" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrol-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">⋯ actions de ligne</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ou clic droit sur la ligne</text>
  <line x1="200" y1="247.0" x2="268" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrol-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Menu de ligne</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">titulaires · droits du rôle</text>
  <line x1="200" y1="317.0" x2="254" y2="280.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrol-arrow)"/>
  <rect x="1120" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôle / nom</text>
  <text x="1130" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tels que définis à la source</text>
  <line x1="1120" y1="217.0" x2="620" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrol-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Séquence</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ordre du rôle</text>
  <line x1="1120" y1="317.0" x2="876" y2="266" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrol-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque rôle connu d'**une application connectée**, répondre en un coup d'œil à trois questions :

- **Quels rôles existent ?** Le catalogue des rôles alimente toutes les autres vues — affectations, conflits, matrices de séparation des tâches.
- **À quoi correspond chaque rôle ?** Le nom du rôle est le libellé lisible exposé aux administrateurs. Il doit parler de lui-même et suivre la convention de nommage de l'entreprise.
- **Dans quel ordre le rôle est-il évalué ?** La séquence détermine la priorité à la connexion quand le système source permet à un utilisateur d'hériter de la configuration de plusieurs rôles. Plus le numéro est bas, plus le rôle est évalué tôt — donc prioritaire (convention JDE).

L'écran est le point d'entrée quand un auditeur demande *« la liste des rôles dans le périmètre »* ou quand une nouvelle matrice SoD doit être construite.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `ROL_APPS_ID` — identifiant numérique de l'application source. | Application à laquelle appartient le rôle. |
| **Rôle ID** | `ROL_ID` — identifiant technique du rôle. | Nom technique du rôle tel que connu du système source. |
| **Nom du rôle** | `ROL_NAME` — libellé descriptif. | Étiquette lisible. |
| **Séquence** | `ROL_SEQ` — numérique. | Ordre d'évaluation à la connexion. La valeur la plus basse passe en premier ; sert au système source à arbitrer la priorité entre plusieurs rôles détenus par un même utilisateur. |

Colonnes masquées portées par la ligne : `ROL_DT_REFRESH`, `ROL_UKID` (utilisées par les écrans en aval et lors du rapprochement).

**Filtres avancés**, au-dessus de la grille, restreint la liste à une **Application ID**. La zone de recherche filtre les lignes chargées ; **Vues**, **Filtres**, **Grouper**, **Colonnes** et **Exporter** (CSV ou Excel) fonctionnent comme sur toutes les grilles.

:::info[Spécifique à JDE]
Sur JD Edwards EnterpriseOne, `*ALL` est le **rôle de connexion par défaut** — quand un utilisateur se connecte avec `*ALL`, la sécurité de tous les rôles qui lui sont affectés est combinée et appliquée simultanément. L'alternative consiste à se connecter sous un seul rôle précis, ce qui n'applique que la sécurité de ce rôle. La présence ou non d'une ligne `*ALL` dans le catalogue *Rôles* dépend de l'installation : la plupart n'ont pas besoin de surcharges explicites au niveau `*ALL`.
:::

---

## Menu contextuel

Le bouton **⋯** en début de ligne, ou un clic droit sur la ligne, ouvre le menu de ligne.

| Action | Vers où |
|---|---|
| **Display Users** | *Affectations* filtré sur le couple `(Application, Rôle)` sélectionné — tous les utilisateurs détenteurs du rôle. |
| **Display Rights** | *Droits — Rôles* filtré sur le rôle sélectionné — les permissions au niveau objet accordées par le rôle. |

---

## Conseils & bonnes pratiques

- **Confronter le catalogue à l'écran *Rôles non utilisés*** pour repérer les rôles existants mais jamais affectés. Ce sont en général les vestiges de réorganisations passées.
- **Repérer les noms de rôles quasi identiques** (par exemple `CPTA_FOUR` et `CPTA_FOUR_OLD`). Un renommage de rôle dans la source crée une nouvelle ligne — l'ancienne reste en général tant qu'un nettoyage manuel n'a pas eu lieu.
- **Utiliser la colonne *Séquence*** pour identifier, parmi les rôles détenus par un utilisateur, celui qui a la séquence la plus basse — c'est le rôle qui pilote l'essentiel du comportement à l'exécution côté JDE.
- **⋯ → Display Users** ouvre l'écran *Affectations* filtré sur ce rôle — le moyen le plus rapide de compter ses détenteurs avant de décider de le supprimer.
