---
title: Pré-requis
description: "Pré-requis entre composants — quand l'achat du composant X exige aussi de posséder le composant Y."
keywords: [Nomasx-1, paramètres, JDE, pré-requis, composants, dépendance Oracle]
---

# Pré-requis

L'écran **Pré-requis** capte les pré-requis contractuels entre composants de licence JDE. Une ligne par `(Composant, Pré-requis)`. Chaque ligne signifie : *pour utiliser le composant, il faut aussi licencier le pré-requis*.

C'est le catalogue de dépendances appliqué par Nomasx-1 lors du calcul de la conformité : si vous avez les droits sur un composant mais pas sur son pré-requis, la matrice fait remonter le pré-requis manquant comme un écart de conformité distinct.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sjprq-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sjprq-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Paramètres · JDE · Pré-requis</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRODUIT</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPOSANT</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRÉ-REQUIS</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE EnterpriseOne</text>
  <text x="280" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE EnterpriseOne</text>
  <text x="280" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Manufacturing</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>
</svg>

---

## Objectif de l'écran

- **Encoder le graphe de dépendance des licences.** Oracle livre des règles de pré-requis entre composants — les codifier ici pour que Nomasx-1 les recoupe automatiquement.
- **Alimenter les alertes de pré-requis manquants.** Les pré-requis absents apparaissent comme une ligne de conformité distincte dans les rapports.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Produit** | `PRQ_PRODUCT` — famille de produits Oracle. | Famille de licence à laquelle la règle appartient. |
| **Composant** | `PRQ_COMPONENT` — composant qui requiert le pré-requis. | Composant dépendant. |
| **Pré-requis** | `PRQ_PREREQ` — composant requis. | Composant à licencier également. |

---

## Conseils & bonnes pratiques

- **Garder les règles alignées avec le price book Oracle et les conditions complémentaires** — les deux peuvent introduire de nouveaux pré-requis au renouvellement.
- **Un pré-requis circulaire** est une erreur de configuration — Nomasx-1 ne bouclera pas, mais le calcul de conformité sera faux.
- **Documenter chaque règle d'une brève justification** dans les notes de version, surtout pour des dépendances non évidentes entre modules non financiers.
