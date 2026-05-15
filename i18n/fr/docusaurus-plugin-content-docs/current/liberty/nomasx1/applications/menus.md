---
title: Menus
description: "Arborescence des menus de l'application, niveau par niveau, avec les objets JDE lancés par chaque feuille et le composant de licence correspondant."
keywords: [Nomasx-1, applications, menus, arborescence des menus, menus JDE, composant de licence]
---

# Menus

L'écran **Menus** liste l'ensemble des entrées de menu connues de Nomasx-1 pour une application. Une ligne par feuille — autrement dit l'action qu'un utilisateur peut effectivement lancer depuis le menu du système source. Chaque ligne porte la hiérarchie complète des menus parents, l'objet technique invoqué par la feuille et le composant de licence dont relève l'objet.

L'écran sert à *comprendre la navigation* d'une application connectée sous l'angle sécurité : ce qui est atteignable depuis quoi, et avec quel poids de licence.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="mnu-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#mnu-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Menus</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RACINE</text>
  <text x="260" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NIVEAU 1</text>
  <text x="430" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NIVEAU 2</text>
  <text x="610" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="730" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FORM</text>
  <text x="810" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPOSANT</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">G0911</text>
  <text x="260" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Comptes Fournisseurs</text>
  <text x="430" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Traitement quotidien</text>
  <text x="610" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="730" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="810" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">G0911</text>
  <text x="260" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Comptes Fournisseurs</text>
  <text x="430" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Paramétrage</text>
  <text x="610" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0401</text>
  <text x="730" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W0401A</text>
  <text x="810" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">G42</text>
  <text x="260" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Gestion des ventes</text>
  <text x="430" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Consultations ventes</text>
  <text x="610" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="730" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">W4210E</text>
  <text x="810" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>

  <text x="60" y="252" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 sur 4 280 feuilles de menu · 7 composants de licence</text>
</svg>

---

## Objectif de l'écran

Pour chaque feuille de menu d'une application connectée, répondre à trois questions :

- **Que lance la feuille ?** Objet, form et version — le triplet dont le système source a besoin pour ouvrir l'écran.
- **Où se situe-t-elle ?** Racine + jusqu'à 9 niveaux imbriqués — le fil d'Ariane qui explique *comment* un utilisateur y accède.
- **Quel composant de licence consomme-t-elle ?** Le composant regroupe l'objet sous-jacent dans un cumul facturable — voir *Licences → JD Edwards* pour les règles de volumétrie.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `MENU_APPS_ID` — identifiant numérique de l'application source. Filtrable. | Application à laquelle le menu appartient. |
| **Racine** | `MENU_ROOT` — identifiant du menu de tête (par exemple `G0911`). Filtrable. | Point d'entrée au niveau du rôle. |
| **Objet** | `MENU_OBJECT` — objet technique lancé (programme, application, batch). Filtrable. | Ce que la feuille appelle réellement. |
| **Form** | `MENU_FORM` — code form au sein de l'objet. | Écran interactif spécifique au sein du programme. |
| **Version** | `MENU_VERSION` — version de traitement. | Variante de configuration utilisée à l'exécution. |
| **Composant** | `CPT_ID` — composant de licence auquel l'objet est rattaché. Filtrable. | Cumul facturable — alimente le reporting de licence. |
| **Menu ID** | `MENU_ID` — identifiant de tâche sur la feuille. Filtrable. | Code de tâche du système source (par exemple un ID de tâche menu JDE). |
| **Niveau 1 … Niveau 3** | `MENU_LEVEL1`, `MENU_LEVEL2`, `MENU_LEVEL3` — libellés imbriqués. Le niveau 1 est filtrable. | Les trois premières profondeurs du fil d'Ariane. |
| **Niveau 4 … Niveau 10** | `MENU_LEVEL4` … `MENU_LEVEL10`. | Niveaux plus profonds — masqués par défaut mais stockés sur la ligne pour les écrans en aval. |

Colonnes masquées portées par la ligne : `MENU_SEQ_UKID` (séquence stable), `MENU_REFRESH` (dernier sync), `MENU_UKID` (identifiant technique).

:::info[Spécifique JDE]
Sur JD Edwards EnterpriseOne, l'arborescence est lue directement dans les tables Solution Explorer. *Objet*, *Form* et *Version* constituent le triplet canonique pour lancer une application interactive ou un UBE batch. Le composant de licence est dérivé du mappage System Code → Composant de licence (`SETTINGS_JDE_SY → SETTINGS_LIC_COMPONENTS`).
:::

---

## Conseils & bonnes pratiques

- **Filtrer par *Niveau 1*** pour se concentrer sur un domaine métier (Comptes Fournisseurs, Gestion des ventes, etc.) avant d'attaquer sa revue de sécurité.
- **Filtrer par *Composant*** pour faire remonter chaque entrée de menu qui consomme une licence donnée — utile avant une renégociation de volumétrie.
- **Filtrer par *Objet*** pour retrouver tous les points où un programme donné est exposé dans l'arborescence. Un programme atteignable depuis plusieurs racines peut nécessiter des règles de sécurité différentes selon le point d'entrée.
- **Recouper avec *Droits / Rôles*** pour confirmer quels rôles donnent accès à chaque feuille de menu.
