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

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rgout-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#rgout-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Droits · Utilisateurs / Rôles / OUT</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="250" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE</text>
  <text x="400" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="540" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VERSION</text>
  <text x="660" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RUN</text>
  <text x="730" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">AJT</text>
  <text x="790" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MOD</text>
  <text x="850" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SUP</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="250" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CPTA_FOUR</text>
  <text x="400" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="540" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="660" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="790" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="250" y="181" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">*ALL (observé)</text>
  <text x="400" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P4310</text>
  <text x="540" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="660" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="790" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SVC_BATCH</text>
  <text x="250" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">*ALL (observé)</text>
  <text x="400" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R31410</text>
  <text x="540" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">XJDE0001</text>
  <text x="660" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="790" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>

  <rect x="60" y="232" width="880" height="48" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="72" y="250" fill="#fb923c" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉCLARÉ vs OBSERVÉ</text>
  <text x="72" y="266" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Les lignes *ALL (observé) viennent d'Object Usage Tracking — l'utilisateur a réellement lancé cet objet, qu'une règle déclarée le couvre ou non.</text>
</svg>

---

## Objectif de l'écran

Pour chaque application connectée :

- **Déclaré et observé au même endroit.** Auditer le droit *tel qu'écrit* (lignes déclarées) et le droit *tel qu'exercé* (lignes observées) sans jongler entre deux écrans.
- **Repérer les sur-attributions.** Un utilisateur avec des droits déclarés qu'il n'a jamais exercés est le candidat de révocation le plus net — les écrans *Transactions* et *OUT* fournissent les éléments de preuve.
- **Repérer les sous-attributions.** Un utilisateur apparaissant sur des lignes `*ALL (observé)` pour un objet sans couverture déclarée signale soit une règle héritée que l'analyse a manquée, soit un contournement à investiguer.

:::info[Spécifique JDE]
Cette vue est spécifique à JDE : la moitié *observée* vient de `LICENSE_JDE_OUT`, jointe aux tables d'objets JDE et de composants de licence. Les autres systèmes sources peuvent alimenter la même vue en exposant un journal d'usage équivalent.
:::

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `SER_APPS_ID` — identifiant de l'application. Filtrable. | Application concernée par la ligne. |
| **Utilisateur ID** | `SER_USER_ID` — utilisateur. Filtrable. | Utilisateur effectif. |
| **Rôle ID** | `SER_ROLE_ID` — rôle accordant le droit, ou `*ALL` pour les lignes observées. | Provenance de la ligne. |
| **Objet** | `SER_OBJECT` — objet technique. Filtrable. | Ce que la ligne couvre. |
| **Form** | `SERL_FORM` — code form, ou `*ALL` pour les lignes observées. | Écran spécifique, quand connu. |
| **Version** | `SER_VERSION` — version de traitement. | Variante de configuration. |
| **Run / Ajouter / Modifier / Supprimer** | `SER_RUN`, `SER_ADD`, `SER_CHG`, `SER_DEL` — `Y` / `N`. | Indicateurs d'action. Les lignes observées reportent toujours `Y / Y / Y / Y` (le système source n'aurait pas exécuté l'appel sinon). |
| **Action de rôle** | `SER_ROLE_ACTION_ID` — identifiant d'action, ou `*DEFAULT` pour les lignes observées. | Descripteur d'action côté source. |

---

## Conseils & bonnes pratiques

- **Filtrer sur un seul utilisateur** + regrouper par *Objet* — les lignes en doublon prouvent que le droit est à la fois déclaré et exercé. Une ligne unique (déclarée *ou* observée, pas les deux) est l'écart à investiguer.
- **Trier par *Rôle ID*** avec les lignes `*ALL` en tête — fait remonter les lignes observées-sans-déclaration.
- **Rogner les droits au niveau rôle dont les objets n'apparaissent que sur `*ALL`** — c'est-à-dire jamais déclarés, jamais atteints depuis un menu — ce sont en général des vestiges d'une configuration précédente.
- **Pour les comptes batch / de service**, la majorité des lignes seront *ALL (observé)* puisque ces comptes ont rarement une couverture rôle explicite. Les marquer dans *Paramètres → Propriétés utilisateurs* pour ne pas polluer l'analyse.
