---
title: Droits — Utilisateurs
description: "Droits objet accordés directement à un utilisateur — ce que chaque utilisateur peut lancer, ajouter, modifier ou supprimer dans le système source."
keywords: [Nomasx-1, applications, droits, droits sécurité, droits utilisateur, security workbench]
---

# Droits — Utilisateurs

L'écran **Droits — Utilisateurs** liste tous les droits objet accordés **directement à un utilisateur** sur une application connectée. Une ligne par triplet `(Application, Utilisateur, Objet)`. Seules les lignes `SER_RUN = 'Y'` sont remontées — les droits qui autorisent effectivement l'utilisateur à *lancer* quelque chose.

C'est la base de la pyramide de sécurité : même quand une règle au niveau du rôle interdit l'accès, une ligne explicite au niveau utilisateur peut la surcharger. Les auditeurs ouvrent cet écran pour repérer les exceptions.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rgu-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#rgu-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Droits · Utilisateurs</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="430" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FORM</text>
  <text x="540" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VERSION</text>
  <text x="660" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RUN</text>
  <text x="730" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">AJT</text>
  <text x="790" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MOD</text>
  <text x="850" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SUP</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="280" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="430" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="540" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="660" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="790" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="280" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0413M</text>
  <text x="430" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0413A</text>
  <text x="540" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="660" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="790" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SVC_BATCH</text>
  <text x="280" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R31410</text>
  <text x="430" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="540" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">XJDE0001</text>
  <text x="660" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="213" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="790" y="213" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="850" y="213" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>

  <text x="60" y="252" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 sur 8 712 droits utilisateur directs</text>
</svg>

---

## Objectif de l'écran

Pour chaque droit accordé au niveau utilisateur sur une application connectée :

- **À quoi l'utilisateur a-t-il accès ?** Objet, form, version — exactement ce que le système source utilise pour identifier un programme appelable.
- **Que peut-il en faire ?** Run, Ajouter, Modifier, Supprimer — les quatre indicateurs d'action. Run = ouvrir l'écran ; Ajouter / Modifier / Supprimer contrôlent les opérations au niveau ligne.
- **Le droit est-il justifié ?** Une ligne au niveau utilisateur est par définition une exception — elle contourne le modèle de sécurité piloté par les rôles. Chaque ligne ici mérite une justification ou une décision de nettoyage.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `SER_APPS_ID` — identifiant de l'application. Filtrable. | Application concernée par le droit. |
| **Utilisateur ID** | `SER_USER_ID` — utilisateur détenteur du droit. Filtrable, restreint à l'application. | Utilisateur à qui le droit est accordé directement. |
| **Objet** | `SER_OBJECT` — objet technique visé par le droit. Filtrable, restreint à l'application. | Ce que l'utilisateur peut appeler. |
| **Form** | `SERL_FORM` — code form au sein de l'objet. | Écran spécifique au sein de l'objet. |
| **Version** | `SER_VERSION` — version de traitement. | Variante de configuration. |
| **Run** | `SER_RUN` — `Y` / `N`. | Indique si l'utilisateur peut ouvrir l'écran. Seules les lignes `Y` apparaissent. |
| **Action de rôle** | `SER_ROLE_ACTION_ID` — identifiant d'action. | Descripteur d'action côté source. |
| **Ajouter / Modifier / Supprimer** | `SER_ADD`, `SER_CHG`, `SER_DEL` — `Y` / `N`. | Indicateurs d'action au niveau ligne dans le form. |

---

## Conseils & bonnes pratiques

- **Les droits utilisateur directs sont des exceptions** — leur volume doit rester faible. Comparer à *Droits — Rôles* pour voir ce qui est normalement accordé via le modèle des rôles.
- **Filtrer sur *Utilisateur ID*** pour obtenir le portefeuille complet des droits directs d'un utilisateur — utile lors de l'analyse d'un conflit SoD que la matrice par rôle n'avait pas anticipé.
- **Signaler les lignes où les quatre indicateurs sont à `Y`** — la création / lecture / modification / suppression complète sur un objet sensible est l'attribution individuelle la plus lourde, et la première à challenger.
- **Recouper avec *Transactions*** pour vérifier si l'utilisateur a effectivement exercé le droit. Une attribution à fort privilège jamais utilisée est souvent la plus simple à révoquer.
