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

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rol-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#rol-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Sécurité · Rôles</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE ID</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NOM DU RÔLE</text>
  <text x="820" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SÉQ</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">*APPROVER</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Approbateur générique</text>
  <text x="820" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">10</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CPTA_FOUR</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Comptabilité — Fournisseurs</text>
  <text x="820" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">20</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CPTA_CLI</text>
  <text x="380" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Comptabilité — Clients</text>
  <text x="820" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">20</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRJMGR</text>
  <text x="380" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Chef de projet</text>
  <text x="820" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">30</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 sur 218</text>
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

Le filtre **Application ID** au-dessus de la grille accepte les opérateurs standards *contains* / *equals* / *notEquals* / *startsWith* / *endsWith*.

:::info[Spécifique JDE]
Sur JD Edwards EnterpriseOne, `*ALL` est le **rôle de connexion par défaut** — quand un utilisateur se connecte avec `*ALL`, la sécurité de tous les rôles qui lui sont affectés est combinée et appliquée simultanément. L'alternative consiste à se connecter sous un seul rôle précis, ce qui n'applique que la sécurité de ce rôle. La présence ou non d'une ligne `*ALL` dans le catalogue *Rôles* dépend de l'installation : la plupart n'ont pas besoin de surcharges explicites au niveau `*ALL`.
:::

---

## Menu contextuel

Clic droit sur une ligne pour ouvrir le menu.

| Action | Vers où |
|---|---|
| **Afficher les utilisateurs** | *Affectations* filtré sur le couple `(Application, Rôle)` sélectionné — tous les utilisateurs détenteurs du rôle. |
| **Afficher les droits** | *Droits — Rôles* filtré sur le rôle sélectionné — les permissions au niveau objet accordées par le rôle. |

---

## Conseils & bonnes pratiques

- **Confronter le catalogue à l'écran *Rôles non utilisés*** pour repérer les rôles existants mais jamais affectés. Ce sont en général les vestiges de réorganisations passées.
- **Repérer les noms de rôles quasi identiques** (par exemple `CPTA_FOUR` et `CPTA_FOUR_OLD`). Un renommage de rôle dans la source crée une nouvelle ligne — l'ancienne reste en général tant qu'un nettoyage manuel n'a pas eu lieu.
- **Utiliser la colonne *Séquence*** pour identifier, parmi les rôles détenus par un utilisateur, celui qui a la séquence la plus basse — c'est le rôle qui pilote l'essentiel du comportement à l'exécution côté JDE.
- **Cliquer sur un rôle** ouvre l'écran *Affectations* filtré sur ce rôle — le moyen le plus rapide de compter ses détenteurs avant de décider de le supprimer.
