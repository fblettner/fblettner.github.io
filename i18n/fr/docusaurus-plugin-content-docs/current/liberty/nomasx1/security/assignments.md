---
title: Affectations
description: "Affectations de rôles actives — quel utilisateur détient quel rôle, sur quelle application, avec les dates d'effet et d'expiration."
keywords: [Nomasx-1, sécurité, affectations, affectations de rôles, utilisateur-rôle, date effective, expiration]
---

# Affectations

L'écran **Affectations** liste l'ensemble des liens actifs entre un utilisateur et un rôle, sur chaque application connectée. Une ligne par triplet `(Application, Utilisateur, Rôle)`. C'est la table sur laquelle tout le monde revient pour répondre à la question d'audit la plus courante : *« qui détient quoi ? »*

La requête ne renvoie que les affectations des utilisateurs dont `USR_STATUS = '01'` — autrement dit les comptes actifs. Les comptes inactifs peuvent encore détenir des lignes dans la table sous-jacente, mais sont exclus de la vue pour garder la piste d'audit lisible.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="asg-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#asg-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Sécurité · Affectations</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="140" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="320" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE</text>
  <text x="580" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">EFFECTIF</text>
  <text x="780" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">EXPIRATION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="320" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CPTA_FOUR</text>
  <text x="580" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2019-03-14</text>
  <text x="780" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="320" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">*APPROVER</text>
  <text x="580" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2019-03-14</text>
  <text x="780" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="320" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRESTATAIRE</text>
  <text x="580" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2024-01-15</text>
  <text x="780" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">2026-06-30</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21</text>
  <text x="140" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">BENEMGR</text>
  <text x="320" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RH_AVANTAGES</text>
  <text x="580" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2021-01-08</text>
  <text x="780" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 sur 4 312 · 3 expirent ce trimestre</text>
</svg>

---

## Objectif de l'écran

Pour chaque affectation de rôle active sur **une application connectée** :

- **Qui détient quoi ?** C'est la table de référence pour la revue des accès — une ligne par couple utilisateur actif × rôle accordé.
- **Depuis quand ?** La date effective répond à la question *« nouveaux accès du trimestre »*. Filtrer la colonne sur la période de revue pour lister chaque nouvelle attribution.
- **Pour combien de temps ?** Les affectations bornées dans le temps (comptes prestataires, accès projet, délégations temporaires) portent une date d'expiration. Trier la colonne par ordre croissant fait remonter ce qui est sur le point d'expirer.

L'écran est le second arrêt après *Utilisateurs* dans chaque revue trimestrielle des accès.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `RLU_APPS_ID` — identifiant numérique de l'application source. Filtrable. | Application concernée par l'affectation. |
| **Utilisateur ID** | `RLU_USER_ID` — lié au catalogue des utilisateurs (`USR_APPS_ID, USR_ID`). Filtrable, restreint par l'application choisie. | Utilisateur détenteur du rôle. |
| **Rôle ID** | `RLU_ROLE_ID` — lié au catalogue des rôles (`ROL_APPS_ID, ROL_ID`). Filtrable, restreint par l'application choisie. | Rôle accordé à l'utilisateur. |
| **Date effective** | `RLU_DT_EFFECTIVE` — date. | Date d'entrée en vigueur de l'affectation dans la source. |
| **Date expiration** | `RLU_DT_EXPIRATION` — date, peut être vide. | Date à laquelle l'affectation est planifiée pour expirer. Vide = permanente. |

Colonnes masquées portées par la ligne : `RLU_DT_REFRESH`, `RLU_UKID`.

Les trois filtres au-dessus de la grille (**Application ID**, **Utilisateur ID**, **Rôle ID**) acceptent les opérateurs standards *contains* / *equals* / *notEquals* / *startsWith* / *endsWith* ; les listes déroulantes *Utilisateur ID* et *Rôle ID* sont restreintes à l'application choisie au-dessus.

:::info[Spécifique JDE]
Sur JD Edwards EnterpriseOne, `*ALL` est le **rôle de connexion par défaut** : quand un utilisateur se connecte avec `*ALL`, la sécurité de tous les rôles qui lui sont affectés est combinée et appliquée simultanément. Affecter un rôle à un utilisateur revient donc à *l'inclure* dans le `*ALL` de cet utilisateur. L'alternative consiste à se connecter sous un seul rôle précis, n'appliquant alors que la sécurité de ce rôle.
:::

---

## Conseils & bonnes pratiques

- **Filtrer la *Date effective* sur le trimestre en cours** pour lister chaque nouvelle affectation accordée sur cette fenêtre — base de la rubrique *nouveaux accès* du rapport d'audit.
- **Trier la *Date expiration* par ordre croissant** pour faire remonter les affectations bornées. Confronter avec la liste RH pour confirmer les départs et les fins de projet.
- **Filtrer l'*Utilisateur ID* sur un seul utilisateur** pour obtenir l'inventaire complet de ses rôles — la même information est plus riche sur l'écran *Audit Utilisateurs*.
- **Filtrer le *Rôle ID* sur un seul rôle** pour compter ses détenteurs. Combiné à la séquence vue sur l'écran *Rôles*, c'est ce qui permet de juger si un rôle peut être retiré sans risque.
