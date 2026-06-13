---
title: Droits — Rôles
description: "Droits objet accordés au niveau du rôle — la colonne vertébrale du modèle de sécurité."
keywords: [Nomasx-1, applications, droits, droits rôle, security workbench, accès par rôle]
---

# Droits — Rôles

L'écran **Droits — Rôles** liste tous les droits objet accordés **au niveau du rôle** sur une application connectée. La requête filtre sur `SER_USER_ID = '*ROLE'` — le marqueur que le système source utilise pour distinguer une règle au niveau rôle d'une règle au niveau utilisateur. Une ligne par triplet `(Application, Rôle, Objet)`, restreinte aux droits `SER_RUN = 'Y'`.

C'est le *cœur* du modèle d'accès par rôles : ce que le rôle accorde à l'ensemble de ses détenteurs. Tout le reste (surcharges utilisateur, visibilité menu, droits dérivés de l'OUT) se superpose à cette couche.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rgr-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#rgr-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Droits · Rôles</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="430" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FORM</text>
  <text x="540" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VERSION</text>
  <text x="660" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RUN</text>
  <text x="730" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">AJT</text>
  <text x="790" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MOD</text>
  <text x="850" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SUP</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CPTA_FOUR</text>
  <text x="280" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="430" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="540" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="660" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="790" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CPTA_FOUR</text>
  <text x="280" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0413M</text>
  <text x="430" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0413A</text>
  <text x="540" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="660" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="790" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APPROVER</text>
  <text x="280" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P43081</text>
  <text x="430" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W43081A</text>
  <text x="540" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="660" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="213" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="790" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="213" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>

  <text x="60" y="252" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 sur 26 410 droits au niveau rôle</text>
</svg>

---

## Objectif de l'écran

Pour chaque droit accordé au niveau rôle sur une application connectée :

- **Que le rôle accorde-t-il ?** Objet, form, version — le périmètre du droit.
- **Quelles actions sont autorisées ?** Run, Ajouter, Modifier, Supprimer — les quatre indicateurs d'action. Un rôle qui accorde *Modifier* et *Supprimer* sur un objet financier est la pièce maîtresse de l'analyse de séparation des tâches.
- **La définition du rôle est-elle toujours alignée avec l'intention métier ?** Comparer les droits effectifs ici au rôle documenté est le moyen le plus fiable de détecter une *dérive de rôle* — des droits accumulés au fil du temps dont plus personne ne se souvient de la raison.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `SER_APPS_ID` — identifiant de l'application. Filtrable. | Application concernée par le droit. |
| **Rôle ID** | `SER_ROLE_ID` — rôle accordant le droit. Filtrable, restreint à l'application. | Rôle auquel la règle appartient. |
| **Objet** | `SER_OBJECT` — objet technique visé par le droit. Filtrable, restreint à l'application. | Ce que le rôle débloque. |
| **Form** | `SERL_FORM` — code form au sein de l'objet. | Écran spécifique au sein de l'objet. |
| **Version** | `SER_VERSION` — version de traitement. | Variante de configuration. |
| **Run** | `SER_RUN` — `Y` / `N`. | Indique si le rôle peut ouvrir l'écran. Seules les lignes `Y` apparaissent. |
| **Action de rôle** | `SER_ROLE_ACTION_ID` — identifiant d'action. | Descripteur d'action côté source. |
| **Ajouter / Modifier / Supprimer** | `SER_ADD`, `SER_CHG`, `SER_DEL` — `Y` / `N`. | Indicateurs d'action au niveau ligne. |

---

## Conseils & bonnes pratiques

- **Filtrer sur *Rôle ID* + trier sur *Objet*** pour obtenir l'inventaire complet de ce qu'un rôle autorise — livrable à discuter avec le propriétaire du rôle lors de la revue.
- **Repérer les droits trop larges** — les droits sur un objet de haut niveau avec les quatre indicateurs à `Y` sont les attributions les plus généreuses. Confirmer que le rôle en a vraiment besoin.
- **Un rôle avec très peu de droits** mérite aussi un œil — il peut être redondant avec un autre et candidat au retrait (voir *Rôles non utilisés*).
- **Combiner avec *Rôles / Menus*** pour vérifier que le rôle accorde à la fois le *droit* et la *navigation* permettant d'atteindre l'objet.
