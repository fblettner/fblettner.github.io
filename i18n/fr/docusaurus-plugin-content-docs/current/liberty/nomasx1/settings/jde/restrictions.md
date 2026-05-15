---
title: Restrictions
description: "Composants mutuellement exclusifs — quand l'achat du composant X exclut le droit d'utiliser le composant Y."
keywords: [Nomasx-1, paramètres, JDE, restrictions, exclusion mutuelle, composants]
---

# Restrictions

L'écran **Restrictions** capte les règles d'exclusion mutuelle entre composants de licence JDE. Une ligne par `(Composant, Restriction)`. Chaque ligne signifie : *si l'entreprise souscrit ce composant, elle ne peut pas utiliser également le composant restreint sans relicencier*.

C'est le pendant symétrique de *Pré-requis* : là où les pré-requis ajoutent des exigences, les restrictions retirent des options. Nomasx-1 fait remonter une violation de restriction comme un écart de conformité au même titre qu'une sur-consommation.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sjrtc-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sjrtc-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Paramètres · JDE · Restrictions</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRODUIT</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPOSANT</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RESTRICTION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE EnterpriseOne</text>
  <text x="280" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Foundation Restricted</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE EnterpriseOne</text>
  <text x="280" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Foundation Restricted</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>
</svg>

---

## Objectif de l'écran

- **Encoder les règles d'exclusion mutuelle** (composants *Restricted* qui excluent un autre composant).
- **Alimenter le calcul de conformité** pour signaler une combinaison interdite comme une sur-consommation.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Produit** | `RTC_PRODUCT` — famille de produits Oracle. | Famille de licence à laquelle la règle appartient. |
| **Composant** | `RTC_COMPONENT` — composant licencié. | Composant qui porte la restriction. |
| **Restriction** | `RTC_RESTRICTION` — composant interdit. | Composant qui ne peut pas coexister avec le composant licencié. |

---

## Conseils & bonnes pratiques

- **Les droits *Restricted* / lecture seule** sont la principale source de restrictions — Oracle vend *Foundation Restricted* avec des exclusions explicites de modules complets.
- **Maintenir la liste au renouvellement.** Un changement de périmètre contractuel invalide souvent une combinaison auparavant valide.
- **Recouper avec *Licences acquises*** — si un CSI déclare les deux côtés d'une restriction, le dossier contractuel mérite d'être réexaminé.
