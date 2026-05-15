---
title: Prix public
description: "Prix unitaire de liste et coût de support par composant × métrique — le price book utilisé par le rapport financier pour calculer le coût de la non-conformité."
keywords: [Nomasx-1, paramètres, pricing, prix de liste, support, rapport financier, price book]
---

# Prix public

L'écran **Prix public** est le price book utilisé par Nomasx-1 pour le calcul d'impact financier. Une ligne par `(Composant, Métrique)`. Chaque ligne porte le prix unitaire de liste, la quantité minimum qu'Oracle impose pour la métrique et le coût annuel de support.

C'est la table que le *Rapport financier* multiplie par l'écart de conformité pour produire les euros à côté d'un composant non conforme.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="spprc-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#spprc-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Paramètres · Pricing · Prix public</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LISTE DE PRIX</text>
  <text x="220" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPOSANT</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MÉTRIQUE</text>
  <text x="660" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRIX</text>
  <text x="760" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MINIMUM</text>
  <text x="860" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SUPPORT</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Foundation</text>
  <text x="220" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Application User</text>
  <text x="660" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 200</text>
  <text x="760" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">10</text>
  <text x="860" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">264</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database Tech</text>
  <text x="220" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database EE</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Named User Plus</text>
  <text x="660" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">950</text>
  <text x="760" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">25</text>
  <text x="860" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">209</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database Tech</text>
  <text x="220" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database EE</text>
  <text x="500" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Processor</text>
  <text x="660" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">47 500</text>
  <text x="760" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1</text>
  <text x="860" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">10 450</text>
</svg>

---

## Objectif de l'écran

- **Entrée du price book.** Par (Composant × Métrique), le prix unitaire de liste et le coût unitaire de support.
- **Utilisé par *Rapport financier*.** Multiplier l'écart de conformité par ces valeurs pour produire les euros qui apparaissent à côté d'une ligne non conforme.
- **Traçabilité d'audit.** Toute modification d'une ligne doit être approuvée et estampillée.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **ID** | `PRC_ID` — identifiant interne. | Clé numérique de la ligne. |
| **Liste de prix** | `CPT_LISTS` — catalogue Oracle. | Catalogue auquel la ligne appartient. |
| **Catégorie** | `CPT_CATEGORY` — Applications / Database / … | Catégorie du composant. |
| **Composant** | `CPT_COMPONENT` — nom de composant. | Composant tarifé. |
| **Métrique** | `MET_DESCRIPTION` — métrique. | Unité à laquelle le prix s'applique. |
| **Prix** | `PRC_PRICE` — prix de liste. | Prix unitaire, dans la devise du contrat. |
| **Minimum** | `PRC_MINIMUM` — quantité minimum. | Minimum imposé par Oracle pour la métrique (par ex. minimum NUP par processeur). |
| **Support** | `PRC_SUPPORT` — coût annuel de support. | Coût unitaire de support — multiplié par 3 dans le *Rapport financier*. |

---

## Boîte de dialogue

Double-cliquer une ligne pour modifier la ligne du price book.

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="spprc-dlg-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#spprc-dlg-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier la ligne de pricing</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Composant</text>
  <rect x="60" y="116" width="300" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database EE ▾</text>

  <text x="380" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Métrique</text>
  <rect x="380" y="116" width="200" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="392" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Named User Plus ▾</text>

  <text x="60" y="170" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Prix</text>
  <rect x="60" y="176" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">950</text>

  <text x="260" y="170" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Minimum</text>
  <rect x="260" y="176" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">25</text>

  <text x="440" y="170" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Support</text>
  <rect x="440" y="176" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="452" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">209</text>
</svg>

| Champ | À renseigner |
|---|---|
| **Composant** | Liste déroulante des composants Nomasx-1. |
| **Métrique** | Liste déroulante des métriques déclarées dans *Pricing → Métriques*. |
| **Prix** | Prix unitaire de liste dans la devise du contrat. |
| **Minimum** | Quantité minimum imposée par Oracle pour cette métrique (par exemple 25 NUP par processeur sur Database EE). |
| **Support** | Coût unitaire annuel de support. Multiplié par 3 dans le *Rapport financier*. |

---

## Conseils & bonnes pratiques

- **Mettre à jour le price book au renouvellement** — Oracle publie un nouveau technical price list chaque année. La fraîcheur des valeurs fait la crédibilité de la vue d'impact financier.
- **Penser au *Minimum*** — Oracle impose un minimum (par ex. 25 NUP par processeur sur Database EE). Une conformité négative en deçà du minimum oblige à acheter au minimum, et non seulement la quantité manquante.
- **Recouper avec *Licences acquises*** pour détecter des prix appliqués à une métrique que le contrat n'utilise pas.
