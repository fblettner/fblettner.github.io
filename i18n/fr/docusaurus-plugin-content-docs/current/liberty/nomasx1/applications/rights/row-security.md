---
title: Droits — Sécurité de ligne
description: "L'écran Sécurité de ligne de Nomasx-1 : la sécurité de ligne d'une application JD Edwards EnterpriseOne telle que collectée — quel utilisateur ou quel rôle peut voir, ajouter, modifier ou supprimer les lignes d'une table dont une donnée tombe dans une plage — avec le nom de la table et de la donnée."
keywords: [Nomasx-1, applications, droits, sécurité de ligne, sécurité des données, F00950, plage, donnée, JD Edwards]
---

# Droits — Sécurité de ligne

L'écran **Sécurité de ligne** (**Applications → Droits → Sécurité de ligne**) présente la sécurité de ligne d'une application telle qu'elle a été collectée : pour un utilisateur ou un rôle, une table et une donnée, la plage de valeurs (**De** … **À**) et les opérations permises sur les lignes qui y tombent — voir, ajouter, modifier, supprimer. Une ligne par utilisateur ou rôle, table, donnée et plage.

La sécurité de ligne ne décide pas de ce qu'un utilisateur peut ouvrir : les droits, les chiffres de licences et la séparation des tâches ne la lisent pas. Elle est collectée pour l'examen de la sécurité elle-même, et lue par [À corriger](../../security-analysis.md).

:::info[Spécifique à JDE]
Les lignes viennent de la sécurité de ligne du Security Workbench (table F00950, type de sécurité 4), lue par la collecte de la sécurité. Une autre application n'a pas de sécurité de ligne dans cet écran.
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1320 332" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rsec-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rsec-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rsec-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rsec-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="296" rx="14" fill="url(#rsec-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Sécurité - Sécurité de ligne collectée</text>
  <line x1="220" y1="76" x2="1100" y2="76" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="88" width="840" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="104" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Filtres avancés</text>
  <text x="250.0" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ID APPLICATION</text>
  <rect x="250.0" y="123" width="197.5" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260.0" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="457.5" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR / RÔLE</text>
  <rect x="457.5" y="123" width="197.5" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="467.5" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="665.0" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <rect x="665.0" y="123" width="197.5" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="675.0" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="872.5" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DONNÉE</text>
  <rect x="872.5" y="123" width="197.5" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="882.5" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="240" y="154" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="168.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <rect x="418" y="154" width="72" height="22" rx="5" fill="url(#rsec-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="454.0" y="168.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="1010" y="154" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.0" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="944" y="154" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="974.0" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="883" y="154" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="910.5" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="837" y="154" width="40" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="857.0" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="240" y="186" width="840" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="330" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR / RÔLE</text>
  <text x="430" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <text x="580" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DONNÉE</text>
  <text x="720" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DE</text>
  <text x="780" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">À</text>
  <text x="840" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VOIR</text>
  <text x="890" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AJOUTER</text>
  <text x="945" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODIFIER</text>
  <text x="1005" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SUPPRIMER</text>
  <rect x="240" y="218" width="840" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE-PROD</text>
  <text x="330" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">APCLERK</text>
  <text x="430" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">F0411 · Grand livre fourn.</text>
  <text x="580" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">KCO · Société du doc.</text>
  <text x="720" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">00001</text>
  <text x="780" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">00050</text>
  <text x="840" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="890" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="945" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="1005" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <rect x="240" y="246" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE-PROD</text>
  <text x="330" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SALES_FR</text>
  <text x="430" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">F4211 · Détail commandes</text>
  <text x="580" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">MCU · Unité de gestion</text>
  <text x="720" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">FR100</text>
  <text x="780" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">FR199</text>
  <text x="840" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="890" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="945" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="1005" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <rect x="240" y="274" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE-PROD</text>
  <text x="330" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">GLUSER</text>
  <text x="430" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">F0911 · Grand livre</text>
  <text x="580" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">CO · Société</text>
  <text x="720" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">00100</text>
  <text x="780" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">00010</text>
  <text x="840" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Y</text>
  <text x="890" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="945" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <text x="1005" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">N</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateur ou rôle, table, donnée</text>
  <line x1="200" y1="117.0" x2="496.25" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsec-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Noms affichés</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">table et donnée</text>
  <line x1="200" y1="267.0" x2="460" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsec-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La plage</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">de … à, telle qu'écrite</text>
  <line x1="1120" y1="177.0" x2="730" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsec-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Plage inversée</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">relevée par À corriger</text>
  <line x1="1120" y1="267.0" x2="740" y2="286" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsec-arrow)"/>
</svg>

---

## Filtres \{#filters\}

Les **Filtres avancés** au-dessus de la grille la restreignent avant **Exécuter** : **ID application**, **Utilisateur / rôle** (les utilisateurs et rôles de l'application choisie), **Table** et **Donnée**.

---

## Colonnes

| Colonne | Contenu |
|---|---|
| **ID application** | L'application, avec son nom. |
| **Utilisateur / rôle** | L'utilisateur ou le rôle visé par la ligne, avec son nom ; `*PUBLIC` pour tout le monde. |
| **Table** | La table sécurisée, avec son nom ; `*ALL` pour toutes les tables. |
| **Donnée** | La donnée dont la valeur est testée, avec son libellé tiré du dictionnaire de données de JD Edwards, lu en direct. |
| **De** / **À** | La plage de valeurs, telle qu'elle est saisie dans JD Edwards. |
| **Voir** · **Ajouter** · **Modifier** · **Supprimer** | `Y` / `N` : les opérations permises sur les lignes dont la valeur tombe dans la plage. |

Les noms viennent des données collectées pour l'application ; le libellé de la donnée est lu dans JD Edwards à l'affichage de la grille — s'il ne peut pas être lu, seul le code apparaît.

---

## Ce que l'analyse contrôle \{#analysis\}

[À corriger](../../security-analysis.md) lit ces lignes :

- **Sécurité de ligne : le début est après la fin** — une plage dont le début dépasse la fin ne contient aucune valeur ;
- **Des lignes de sécurité pour un utilisateur ou un rôle qui n'existe plus** — les lignes de sécurité de ligne comptent avec celles du workbench et des UDO ;
- **Des rôles qui donnent exactement la même chose** — deux rôles ne sont identiques que si leur sécurité de ligne l'est aussi.

---

## Conseils & bonnes pratiques

- **Filtrer sur une table** pour voir toutes les plages qui la concernent, utilisateurs et rôles réunis — les plages qui se chevauchent pour un même détenteur se repèrent ainsi plus facilement.
- **Privilégier les rôles aux utilisateurs** : une sécurité de ligne posée sur un utilisateur est un cas particulier à maintenir pour une seule personne.
- **Collecter à nouveau après une modification dans JD Edwards** : l'écran montre la sécurité de ligne de la dernière collecte de la sécurité.
