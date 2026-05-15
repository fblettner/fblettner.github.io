---
title: Droits — Utilisateurs / Rôles
description: "Droits objet pivotés par (utilisateur, rôle) — ce que chaque utilisateur peut lancer, directement ou via chaque rôle qu'il détient."
keywords: [Nomasx-1, applications, droits, droits utilisateur-rôle, droits effectifs, security workbench]
---

# Droits — Utilisateurs / Rôles

L'écran **Droits — Utilisateurs / Rôles** pivote la matrice des droits par **utilisateur et rôle**. Une ligne par quadruplet `(Application, Utilisateur, Rôle, Objet)`. La requête remonte *toutes* les lignes `SER_RUN = 'Y'` — droits directs au niveau utilisateur et droits hérités au niveau rôle, résolus utilisateur par utilisateur.

C'est la vue des *droits effectifs* : ce que chaque utilisateur porte réellement, ventilé par provenance.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rgur-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#rgur-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Droits · Utilisateurs / Rôles</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="250" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE</text>
  <text x="400" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="540" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FORM</text>
  <text x="660" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RUN</text>
  <text x="730" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">AJT</text>
  <text x="790" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MOD</text>
  <text x="850" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SUP</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="250" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CPTA_FOUR</text>
  <text x="400" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="540" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="660" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="790" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="250" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APPROVER</text>
  <text x="400" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P43081</text>
  <text x="540" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W43081A</text>
  <text x="660" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="181" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="790" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="181" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">N</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="250" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">— (direct)</text>
  <text x="400" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P03B11</text>
  <text x="540" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W03B11A</text>
  <text x="660" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="730" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="790" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="850" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>

  <text x="60" y="252" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 sur 41 287 droits effectifs · APMGR détient 3 droits via 2 rôles + 1 direct</text>
</svg>

---

## Objectif de l'écran

Le pivot rend trois questions immédiates :

- **Que cet utilisateur peut-il vraiment faire ?** Filtrer sur un seul *Utilisateur ID* pour obtenir le portefeuille effectif complet — droits directs et droits hérités confondus. La colonne *Rôle* indique *par quel rôle* chaque ligne s'éclaire.
- **Via quel rôle ?** Quand le même droit apparaît sous plusieurs rôles, ces rôles sont partiellement redondants — candidats à la consolidation.
- **L'utilisateur détient-il un droit en dehors de tout rôle ?** Une ligne sans *Rôle ID* est un droit direct au niveau utilisateur — voir *Droits — Utilisateurs* pour l'écran dédié.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `SER_APPS_ID` — identifiant de l'application. Filtrable. | Application concernée par le droit. |
| **Utilisateur ID** | `SER_USER_ID` — utilisateur détenteur du droit. Filtrable, restreint à l'application. | Détenteur effectif du droit. |
| **Rôle ID** | `SER_ROLE_ID` — rôle accordant le droit. Filtrable par la source. | Rôle d'où le droit est hérité. Vide (ou `*ROLE`) côté source = attribution directe au niveau utilisateur. |
| **Objet** | `SER_OBJECT` — objet technique. Filtrable, restreint à l'application. | Ce que le droit débloque. |
| **Form** | `SERL_FORM` — code form au sein de l'objet. | Écran spécifique. |
| **Version** | `SER_VERSION` — version de traitement. | Variante de configuration. |
| **Run / Ajouter / Modifier / Supprimer** | `SER_RUN`, `SER_ADD`, `SER_CHG`, `SER_DEL` — `Y` / `N`. | Indicateurs d'action. Seules les lignes `Run = Y` apparaissent. |
| **Action de rôle** | `SER_ROLE_ACTION_ID` — identifiant d'action. | Descripteur d'action côté source. |

---

## Conseils & bonnes pratiques

- **Filtrer sur un seul *Utilisateur ID*** pour obtenir le portefeuille effectif complet — la réponse que la plupart des auditeurs attendent.
- **Regrouper par *Objet* sur un filtre utilisateur** pour repérer un objet qui ressort via plusieurs rôles. Chaque doublon suggère que l'appartenance à certains rôles peut être resserrée.
- **Un utilisateur dont les droits viennent d'un seul rôle + quelques droits directs** est la configuration la plus propre — l'inverse (beaucoup de droits directs, peu de rôles) est la plus lourde à auditer.
- **Combiner avec l'écran *Conflits → Détails*** pour confirmer la paire de rôles qui génère un conflit SoD donné.
