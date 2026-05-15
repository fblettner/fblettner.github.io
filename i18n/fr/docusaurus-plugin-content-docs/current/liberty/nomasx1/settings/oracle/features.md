---
title: Fonctionnalités Oracle
description: "Catalogue des fonctionnalités Oracle suivies par Nomasx-1, rattachées à un composant de licence."
keywords: [Nomasx-1, paramètres, Oracle, fonctionnalités, composant de licence, DBA_FEATURE_USAGE_STATISTICS]
---

# Fonctionnalités Oracle

L'écran **Fonctionnalités** catalogue les fonctionnalités Oracle suivies par Nomasx-1 via `DBA_FEATURE_USAGE_STATISTICS`. Une ligne par `(Composant, Fonctionnalité)`. Le catalogue rattache chaque fonctionnalité au composant de licence que son usage consommerait — entrée critique de l'audit Oracle LMS, où les fonctionnalités non utilisées ne déclenchent pas la conformité même si elles sont installées.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sofea-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sofea-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Paramètres · Oracle · Fonctionnalités</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ID</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPOSANT</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FONCTIONNALITÉ</text>
  <text x="640" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Diagnostic Pack</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AWR Report</text>
  <text x="640" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Automatic Workload Repository</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Tuning Pack</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SQL Tuning Advisor</text>
  <text x="640" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SQL Tuning Advisor</text>
</svg>

---

## Objectif de l'écran

- **Traduire les libellés de fonctionnalités Oracle** vers le modèle de composants Nomasx-1.
- **Alimenter la détection de fonctionnalités dans *Base de données → Oracle***. Une fonctionnalité repérée comme utilisée dans `DBA_FEATURE_USAGE_STATISTICS` est rattachée à son composant dans les rapports de licence.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **ID** | `FEA_ID` — identifiant interne. | Clé numérique. |
| **Composant ID** | `FEA_CPT_ID` — lié à *Pricing → Composants*. | Composant auquel la fonctionnalité appartient. |
| **Fonctionnalité** | `FEA_FEATURES` — nom Oracle. | Libellé renvoyé par `DBA_FEATURE_USAGE_STATISTICS`. |
| **Description** | `FEA_DESCRIPTION` — texte. | Description lisible pour un public non DBA. |

---

## Conseils & bonnes pratiques

- **Réimporter le dictionnaire de fonctionnalités après chaque release majeure** — de nouvelles fonctionnalités apparaissent à chaque version.
- **Une fonctionnalité utilisée sur un composant non souscrit** est le constat d'audit le plus solide. Viser zéro en production.
- **Utiliser le champ *Description*** pour décrire la fonctionnalité en langage clair — plus simple à discuter avec le métier que le nom Oracle brut.
