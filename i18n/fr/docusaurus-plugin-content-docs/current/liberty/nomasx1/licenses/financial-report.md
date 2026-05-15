---
title: Rapport financier
description: "Impact financier des lignes non conformes — coût licence supplémentaire et trois ans de support par application × composant."
keywords: [Nomasx-1, licences, rapport financier, conformité, coût, risque audit, frais supplémentaires]
---

# Rapport financier

L'écran **Rapport financier** convertit les lignes non conformes de *Rapport d'utilisation* en euros. Une ligne par `(Application, Composant)` à conformité négative. Le prix de liste et le coût de support unitaire issus de *Paramètres → Pricing* sont multipliés par l'amplitude de l'écart pour produire le coût supplémentaire — licence plus 3 ans de support.

C'est le graphique à présenter au comité de pilotage avant la signature d'un renouvellement.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="lfin-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#lfin-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Licences · Rapport financier</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPOSANT</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ÉCART</text>
  <text x="450" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRIX UNIT.</text>
  <text x="560" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LICENCE</text>
  <text x="660" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SUPPORT</text>
  <text x="760" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SUPPORT 3 ANS</text>
  <text x="880" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TOTAL</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Prod</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>
  <text x="380" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">-8</text>
  <text x="450" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 500</text>
  <text x="560" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 000</text>
  <text x="660" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">330</text>
  <text x="760" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">7 920</text>
  <text x="880" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">19 920</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Prod</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Ressources humaines</text>
  <text x="380" y="181" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">-2</text>
  <text x="450" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 200</text>
  <text x="560" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2 400</text>
  <text x="660" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">264</text>
  <text x="760" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 584</text>
  <text x="880" y="181" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">3 984</text>

  <rect x="60" y="196" width="880" height="32" rx="8" fill="rgba(248,113,113,0.10)" stroke="rgba(248,113,113,0.30)" strokeWidth="1"/>
  <text x="72" y="216" fill="#f87171" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXPOSITION TOTALE</text>
  <text x="72" y="230" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">23 904 € sur 2 lignes non conformes · licence + 3 ans de support</text>
</svg>

---

## Objectif de l'écran

Pour chaque `(Application, Composant)` non conforme :

- **Quantifier l'exposition.** L'écart de conformité issu de *Rapport d'utilisation* devient un euro, calculé à partir du price book maintenu dans *Paramètres → Pricing*.
- **Deux composantes dans le total.** L'achat **licence** supplémentaire (conformité × prix unitaire) et le **support** correspondant sur 3 ans (conformité × support unitaire × 3). L'horizon de 3 ans correspond au cycle standard Oracle.
- **Aide à la décision.** Connaître le coût de mise en conformité permet d'arbitrer entre *re-souscription* et *remédiation* (révocation d'utilisateurs, refonte des rôles).

L'écran ne remonte que les lignes `COMPLIANCE < 0` — les lignes conformes n'ont pas d'impact financier et sont filtrées au niveau SQL.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `APPS_ID` — identifiant de l'application. | Application connectée. |
| **Composant** | `CPT_ID` — composant de licence. | Cumul de licence. |
| **Conformité** | `COMPLIANCE` — écart signé issu du *Rapport d'utilisation*. Négatif sur cet écran. | Écart à combler. |
| **Prix unitaire** | `PRC_PRICE` — prix unitaire de liste arrondi. | Prix de liste du composant, issu de *Paramètres → Pricing*. |
| **Total licence** | `TOTAL_PRICE` — `COMPLIANCE × PRC_PRICE`. | Coût d'achat des licences manquantes. |
| **Support unitaire** | `PRC_SUPPORT` — coût annuel de support unitaire arrondi. | Tarif annuel unitaire du support. |
| **Total support (3 ans)** | `TOTAL_SUPPORT` — `COMPLIANCE × PRC_SUPPORT × 3`. | Coût de support sur l'horizon standard 3 ans. |
| **Coût total** | `TOTAL_COMPLIANCE` — somme de `TOTAL_PRICE` + `TOTAL_SUPPORT`. | Coût total de remise en conformité de la ligne. |

---

## Conseils & bonnes pratiques

- **Comparer le *Coût total* au coût de remédiation.** Fermer 8 comptes utilisateurs coûte moins cher que 19 920 € ; combler l'écart par re-souscription est un repli, pas un objectif.
- **Présenter le tableau au prochain comité de pilotage** — les lignes rendent l'impact financier du nettoyage d'accès explicite, ce qui débloque généralement les moyens.
- **Les prix unitaires viennent de *Paramètres → Pricing*** — les maintenir alignés avec le price book Oracle en cours ou les chiffres dérivent.
- **Une *Conformité* à forte amplitude sur un composant à faible prix unitaire** peut tout de même produire un total significatif — trier par *Coût total* pour lire le tableau du plus gros écart au plus faible.
