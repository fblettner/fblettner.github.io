---
title: Objets
description: "Catalogue Nomasx-1 des objets JD Edwards EnterpriseOne d'une application connectée — applications, états, fonctions métier, tables, vues — avec leur code système et leur type."
keywords: [Nomasx-1, applications, objets, JD Edwards, object librarian, code système, type d'objet]
---

# Objets

L'écran **Objets** (*JD Edwards Objects* dans son en-tête) est le catalogue des objets d'une application JD Edwards connectée : une ligne par objet, avec sa description, son code système et son type — application interactive (`APPL`), état (`UBE`), fonction métier (`BSFN`), table (`TBLE`), vue métier (`BSVW`)… Accès : **Applications → Objects**.

Les autres écrans de Nomasx-1 désignent les objets par leur code ; celui-ci dit ce que recouvre chaque code, et sous quel code système il est compté pour les licences.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 386" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="obj-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="obj-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="obj-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="obj-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="306" rx="14" fill="url(#obj-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">JD Edwards Objects</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">68775 lignes · 12 ms</text>
  <rect x="959" y="84" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="85" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="89" x2="1018" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="112" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="389" y="112" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="428.0" y="126.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="569" y="112" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="126.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="697" y="112" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="724.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="758" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="836" y="112" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="872.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="914" y="112" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="112" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="126.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="144" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="339" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="353" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OBJET (ID)</text>
  <text x="453" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OBJET</text>
  <text x="663" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DESCRIPTION</text>
  <text x="883" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SYSTEM CODE</text>
  <text x="973" y="159.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TYPE OBJET</text>
  <rect x="233" y="170" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="339" y="184.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="353" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="453" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Address Book</text>
  <text x="663" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Address Book</text>
  <text x="883" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">01</text>
  <text x="973" y="184.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">APPL</text>
  <rect x="233" y="192" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="339" y="206.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="353" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="453" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Invoice Print</text>
  <text x="663" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Invoice Print</text>
  <text x="883" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">42</text>
  <text x="973" y="206.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">UBE</text>
  <rect x="233" y="214" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="339" y="228.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="353" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">B0100016</text>
  <text x="453" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Validate Address Number</text>
  <text x="663" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Validate Address Number</text>
  <text x="883" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">01</text>
  <text x="973" y="228.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">BSFN</text>
  <rect x="233" y="236" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="339" y="250.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="353" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="453" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Address Book Master</text>
  <text x="663" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Address Book Master</text>
  <text x="883" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">01</text>
  <text x="973" y="250.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">TBLE</text>
  <rect x="233" y="258" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="339" y="272.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="353" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">V0101A</text>
  <text x="453" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Address Book View</text>
  <text x="663" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Address Book View</text>
  <text x="883" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">01</text>
  <text x="973" y="272.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">BSVW</text>
  <text x="233" y="304" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="292" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="305.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="305" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–50 sur 68775</text>
  <text x="1087" y="305" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="342" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="357" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Objet</text>
  <text x="225.0" y="370" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">code et nom</text>
  <line x1="360.0" y1="342" x2="361" y2="281.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#obj-arrow)"/>
  <rect x="515.0" y="342" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="357" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">System Code</text>
  <text x="525.0" y="370" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">détermine le composant de licence</text>
  <line x1="660.0" y1="342" x2="891" y2="281.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#obj-arrow)"/>
  <rect x="815.0" y="342" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="357" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type Objet</text>
  <text x="825.0" y="370" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">APPL, UBE, BSFN, TBLE, BSVW…</text>
  <line x1="960.0" y1="342" x2="981" y2="281.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#obj-arrow)"/>
  <rect x="12" y="106" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="121" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rechercher</text>
  <text x="22" y="134" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un objet, un nom, un code</text>
  <line x1="197" y1="123.0" x2="273" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#obj-arrow)"/>
  <rect x="1119" y="117" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="132" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres · Grouper</text>
  <text x="1129" y="145" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ex. grouper par type d'objet</text>
  <line x1="1119" y1="134.0" x2="794.0" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#obj-arrow)"/>
</svg>

---

## Objectif de l'écran

- **Identifier un objet.** Un code rencontré dans *Menus*, *Droits* ou *OUT* — `P0411`, `R42565` — se retrouve ici avec sa description.
- **Voir où il est compté.** Le *System Code* détermine le composant de licence de l'objet (*Paramètres → Licences → JD Edwards → Code système*).
- **Mesurer le catalogue.** Groupée par *Type Objet*, la grille donne le nombre d'applications, d'états et de fonctions de l'installation.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `JDEO_APPS_ID` — identifiant de l'application. | Application connectée. |
| **Objet** | `JDEO_OBJECT` — code de l'objet, avec son libellé. | Objet JD Edwards. |
| **Description** | `JDEO_DESCRIPTION` — texte. | Nature de l'objet. |
| **System Code** | `JDEO_SY` — code à deux caractères. | Code système sous lequel l'objet est compté. |
| **Type Objet** | `JDEO_TYPE` — `APPL`, `UBE`, `BSFN`, `TBLE`, `BSVW`, `DSTR`… | Type d'objet. |

La grille est en lecture seule et n'a pas de menu de ligne : **Rechercher**, **Filtres**, **Grouper** et **Exporter** sont les outils.

:::info[Spécifique à JDE]
Le catalogue est copié depuis l'Object Librarian (F9860) de l'application à chaque collecte de la sécurité (*Tâches → Collecter la sécurité et la SoD*). Le code système d'un objet est ensuite remplacé par celui fixé dans *Paramètres → Licences → JD Edwards → Reclassification* quand l'objet y figure.
:::

---

## Conseils & bonnes pratiques

- **Rechercher avant de filtrer.** La zone de recherche porte sur toutes les colonnes visibles : un mot de la description trouve l'objet aussi bien que son code.
- **Grouper par *System Code*** pour voir quels modules portent le plus d'objets, puis vérifier le composant de licence de chaque code.
- **Reclasser plutôt que modifier.** Un objet compté sous le mauvais code système se déplace dans *Reclassification* ; la collecte suivante l'applique.
