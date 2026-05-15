---
title: Droits — Rôles / Menus
description: "Droits au niveau rôle joints à l'arborescence des menus — ce que chaque rôle accorde en termes de navigation, par composant de licence."
keywords: [Nomasx-1, applications, droits, droits rôle-menu, navigation, composant de licence]
---

# Droits — Rôles / Menus

L'écran **Droits — Rôles / Menus** joint la matrice des droits au niveau rôle à l'arborescence des menus, avec le composant de licence porté sur chaque ligne. Une ligne par triplet `(Application, Rôle, Objet)`, restreinte aux règles `SER_USER_ID = '*ROLE'` et `SER_RUN = 'Y'`. Le fil d'Ariane (racine + jusqu'à 9 niveaux) indique comment un détenteur du rôle atteint l'objet depuis le menu.

C'est la vue la plus parlante pour échanger avec un propriétaire de rôle : *« voici tout ce que votre rôle accorde, organisé comme les utilisateurs le parcourent réellement »*.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rgrm-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#rgrm-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Droits · Rôles / Menus</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE</text>
  <text x="200" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RACINE</text>
  <text x="290" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NIVEAU 1</text>
  <text x="460" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NIVEAU 2</text>
  <text x="620" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="740" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FORM</text>
  <text x="850" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPOSANT</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CPTA_FOUR</text>
  <text x="200" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">G0911</text>
  <text x="290" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Comptes Fournisseurs</text>
  <text x="460" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Traitement quotidien</text>
  <text x="620" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="740" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="850" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CPTA_FOUR</text>
  <text x="200" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">G0911</text>
  <text x="290" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Comptes Fournisseurs</text>
  <text x="460" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Paramétrage</text>
  <text x="620" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0401</text>
  <text x="740" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0401A</text>
  <text x="850" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APPROVER</text>
  <text x="200" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">G43</text>
  <text x="290" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Achats</text>
  <text x="460" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Approbation</text>
  <text x="620" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P43081</text>
  <text x="740" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W43081A</text>
  <text x="850" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CPTA_FOUR</text>
  <text x="200" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">— (sans menu)</text>
  <text x="290" y="245" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">Droit accordé sans chemin de menu</text>
  <text x="620" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P03B11</text>
  <text x="740" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W03B11A</text>
  <text x="850" y="245" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Rôle CPTA_FOUR · 87 entrées · 2 sans navigation</text>
</svg>

---

## Objectif de l'écran

Pour chaque rôle d'une application connectée :

- **L'inventaire complet de ce que le rôle accorde.** Objet, form, version + chemin de menu. À transmettre au propriétaire du rôle lors de la revue des accès.
- **Ventilation par composant.** La colonne *Composant* permet de mesurer combien de chaque licence le rôle consomme — utile avant la validation d'un nouveau rôle.
- **Droits masqués.** Les lignes sans chemin de menu pointent vers des droits sans navigation — la cible la plus simple à nettoyer puisque les utilisateurs ne peuvent pas y accéder par l'IHM standard.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `SER_APPS_ID` — identifiant de l'application. Filtrable. | Application concernée par le droit. |
| **Rôle ID** | `SER_ROLE_ID` — rôle accordant le droit. Filtrable, restreint à l'application. | Rôle auquel la règle appartient. |
| **Composant** | `CPT_ID` — composant de licence. Filtrable. | Cumul de licence dans lequel tombe le droit. |
| **Objet** | `SER_OBJECT` — objet technique. Filtrable, restreint à l'application. | Ce que le rôle débloque. |
| **Form** | `SERL_FORM` — code form au sein de l'objet. | Écran spécifique. |
| **Version** | `SER_VERSION` — version de traitement. | Variante de configuration. |
| **Run / Ajouter / Modifier / Supprimer** | `SER_RUN`, `SER_ADD`, `SER_CHG`, `SER_DEL` — `Y` / `N`. | Indicateurs d'action. |
| **Racine / Menu ID / Niveau 1 — 9** | `MENU_ROOT`, `MENU_ID`, `MENU_LEVEL1` … `MENU_LEVEL9` — texte. | Fil d'Ariane menu. Vide quand aucun chemin de menu ne mène au droit. |
| **Séquence** | `MENU_SEQ_UKID` — séquence stable interne. | Permet de conserver les lignes de menu dans un ordre déterministe. |

---

## Conseils & bonnes pratiques

- **Filtrer sur *Rôle ID* + trier sur *Niveau 1*** pour produire le livrable de revue d'accès par rôle.
- **Filtrer sur *Composant*** pour extraire tous les droits qu'un rôle apporte sur une licence donnée — base de la renégociation de volumétrie.
- **Les lignes à *Racine* vide** correspondent à des droits accordés par le rôle sans menu pour y accéder. Ce sont en général les vestiges d'une entrée de menu supprimée que personne n'a aligné dans la sécurité.
- **Recouper avec *Rôles non utilisés*** — un rôle avec peu de chemins de menu est candidat au retrait.
