---
title: Droits — Utilisateurs / Menus
description: "Droits joints à l'arborescence des menus — ce que chaque utilisateur peut atteindre, avec le chemin de menu qui mène à chaque objet."
keywords: [Nomasx-1, applications, droits, droits utilisateur-menu, navigation, visibilité menu]
---

# Droits — Utilisateurs / Menus

L'écran **Droits — Utilisateurs / Menus** joint la matrice des droits effectifs à l'arborescence des menus. Une ligne par quadruplet `(Application, Utilisateur, Rôle, Objet)`, avec le fil d'Ariane du menu (racine, niveaux 1 à 3) porté sur chaque ligne.

C'est la réponse à *« comment l'utilisateur accède-t-il concrètement à cet objet ? »*. Un droit existe en théorie dès que `SER_RUN = 'Y'`, mais l'utilisateur ne peut l'exercer que si un chemin de menu y mène — ou s'il connaît le nom du form et l'appelle directement.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rgum-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#rgum-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Droits · Utilisateurs / Menus</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="170" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RACINE</text>
  <text x="260" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NIVEAU 1</text>
  <text x="430" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NIVEAU 2</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="720" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FORM</text>
  <text x="830" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="170" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">G0911</text>
  <text x="260" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Comptes Fournisseurs</text>
  <text x="430" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Traitement quotidien</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="720" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="830" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CPTA_FOUR</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="170" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">G0911</text>
  <text x="260" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Comptes Fournisseurs</text>
  <text x="430" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Paramétrage</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0401</text>
  <text x="720" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0401A</text>
  <text x="830" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CPTA_FOUR</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="170" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">G43</text>
  <text x="260" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Achats</text>
  <text x="430" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Approbation</text>
  <text x="600" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P43081</text>
  <text x="720" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W43081A</text>
  <text x="830" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APPROVER</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="170" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">— (sans menu)</text>
  <text x="260" y="245" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">Droit accordé sans chemin de menu</text>
  <text x="600" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P03B11</text>
  <text x="720" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W03B11A</text>
  <text x="830" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">— (direct)</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Utilisateur APMGR · 4 chemins · 1 droit sans navigation</text>
</svg>

---

## Objectif de l'écran

Pour chaque droit effectif détenu par un utilisateur, faire apparaître le chemin de menu qui y mène :

- **Droits atteignables.** La plupart des lignes associent un droit à un fil d'Ariane menu — l'utilisateur a à la fois la permission et la navigation.
- **Droits masqués.** Un droit dont le chemin menu est vide signifie que l'utilisateur peut techniquement lancer l'objet, mais qu'aucune entrée de menu n'y mène. Soit l'accès passe par un appel direct (URL ou nom de form), soit c'est un reliquat d'une réorganisation de la navigation.
- **Revue par domaine.** Filtrer sur *Niveau 1* concentre la revue des droits sur un domaine fonctionnel — plus simple à discuter avec son responsable.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `SER_APPS_ID` — identifiant de l'application. Filtrable. | Application concernée par le droit. |
| **Utilisateur ID** | `SER_USER_ID` — utilisateur détenteur du droit. Filtrable, restreint à l'application. | Détenteur effectif du droit. |
| **Rôle ID** | `SER_ROLE_ID` — rôle accordant le droit. Filtrable par la source. | Rôle d'où le droit est hérité. |
| **Objet** | `SER_OBJECT` — objet technique. Filtrable, restreint à l'application. | Ce que le droit débloque. |
| **Form** | `SERL_FORM` — code form au sein de l'objet. | Écran spécifique. |
| **Version** | `SER_VERSION` — version de traitement. | Variante de configuration. |
| **Run / Ajouter / Modifier / Supprimer** | `SER_RUN`, `SER_ADD`, `SER_CHG`, `SER_DEL` — `Y` / `N`. | Indicateurs d'action. |
| **Racine / Menu ID / Niveau 1 — 3** | `MENU_ROOT`, `MENU_ID`, `MENU_LEVEL1`, `MENU_LEVEL2`, `MENU_LEVEL3` — texte. | Fil d'Ariane menu. Vide quand aucun chemin de menu ne mène au droit. |

---

## Conseils & bonnes pratiques

- **Filtrer sur un *Utilisateur ID*** puis trier sur *Niveau 1* — revue claire de ce que l'utilisateur peut faire, par domaine métier.
- **Les lignes à *Racine* vide** sont des droits techniquement exerçables sans chemin de menu. Les signaler lors du nettoyage d'accès — la révocation est en général plus simple que la réintroduction d'une navigation.
- **Filtrer sur un *Menu ID*** pour lister chaque utilisateur qui peut atteindre une feuille donnée. Un nombre élevé sur un menu sensible est la ligne à challenger en priorité.
- **Comparer avec *Rôles / Menus*** pour confirmer que le rôle accorde bien la navigation (et pas uniquement le droit).
