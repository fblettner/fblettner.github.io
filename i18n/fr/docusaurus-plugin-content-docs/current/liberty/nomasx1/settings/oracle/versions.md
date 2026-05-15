---
title: Versions Oracle
description: "Catalogue des versions de base Oracle reconnues par Nomasx-1 et leur composant de licence."
keywords: [Nomasx-1, paramètres, Oracle, versions, composant de licence, version base]
---

# Versions Oracle

L'écran **Versions** catalogue les versions de base Oracle reconnues par Nomasx-1, associées au composant de licence dont chaque version dépend. Une ligne par `(Composant, Version)`. Le catalogue sert à classer les lignes des écrans *Base de données → Oracle* et *Licences → Oracle*.

Ajouter une nouvelle version ici est le pré-requis pour scanner une release Oracle fraîchement installée via Nomasx-1.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sover-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sover-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Paramètres · Oracle · Versions</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ID</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPOSANT</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VERSION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database EE</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">19c</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database EE</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21c</text>
</svg>

---

## Objectif de l'écran

- **Référencer les versions Oracle** prises en charge par Nomasx-1 et leur classification de licence.
- **Une ligne par (Composant, Version)** — un même composant peut couvrir plusieurs versions (Enterprise Edition en 19c et 21c, par exemple).

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **ID** | `VER_ID` — identifiant interne. | Clé numérique. |
| **Composant ID** | `VER_CPT_ID` — lié à *Pricing → Composants*. | Composant Nomasx-1 auquel la version est rattachée. |
| **Composant** | `CPT_COMPONENT` — libellé dénormalisé. | Nom de composant affiché. |
| **Version** | `VER_VERSION` — version majeure Oracle. | Chaîne de version (`19c`, `21c`, `23c`…). |

---

## Boîte de dialogue

Double-cliquer une ligne pour modifier le couple (Composant, Version).

<svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sover-dlg-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="140" rx="14" fill="url(#sover-dlg-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier la version Oracle</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Composant</text>
  <rect x="60" y="116" width="500" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database EE ▾</text>

  <text x="580" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Version</text>
  <rect x="580" y="116" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="592" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">19c</text>
</svg>

| Champ | À renseigner |
|---|---|
| **Composant** | Liste déroulante des composants Nomasx-1. La version est rattachée à ce composant. |
| **Version** | Chaîne de version majeure Oracle telle que renvoyée par le dictionnaire base (`19c`, `21c`, `23ai`…). |

---

## Conseils & bonnes pratiques

- **Ajouter les nouvelles versions tôt.** Une montée de base lit une nouvelle valeur dans le dictionnaire Oracle — le scan ne classera pas tant que la version n'est pas déclarée ici.
- **Utiliser le libellé officiel Oracle** (`19c`, `21c`, `23ai`) pour rester aligné avec le price book.
- **Plusieurs versions pour un même composant est normal.** Les conserver toutes pour les parcs mixtes.
