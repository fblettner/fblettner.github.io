---
title: Métriques
description: "Catalogue des métriques de licensing — Application User, Named User Plus, Processor, Employee, etc."
keywords: [Nomasx-1, paramètres, métriques, métrique de licensing, NUP, Application User, Processor]
---

# Métriques

L'écran **Métriques** est la liste courte des métriques de licensing prises en charge par Nomasx-1. Une ligne par métrique. Chaque ligne porte l'identifiant (référencé par *Licences acquises* et *Pricing*) et une description conviviale.

La métrique définit *comment* un composant est compté — par utilisateur nommé, par processeur, par employé, par application user…. Changer la métrique d'un contrat change le calcul de conformité.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="spmet-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#spmet-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Paramètres · Pricing · Métriques</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MÉTRIQUE ID</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APP_USER</text>
  <text x="280" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Application User</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">NUP</text>
  <text x="280" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Named User Plus</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PROC</text>
  <text x="280" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Processor</text>
</svg>

---

## Objectif de l'écran

- **Déclarer les métriques de licensing** utilisées par les contrats. Chaque métrique est référencée par *Licences acquises* et *Pricing*.
- **Court par construction.** La plupart des entreprises se contentent de quatre ou cinq métriques — `APP_USER`, `NUP`, `PROC`, `EMP`, `SE`.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Métrique ID** | `MET_ID` — identifiant. | Référence utilisée par les autres tables. |
| **Description** | `MET_DESCRIPTION` — libellé convivial. | Nom Oracle de la métrique (`Application User`, `Named User Plus`, `Processor`…). |

---

## Conseils & bonnes pratiques

- **Garder le catalogue minimal.** Quelques métriques suffisent — n'en créer davantage que si un contrat le réclame.
- **Décrire la métrique avec le libellé officiel Oracle** pour que l'auditeur puisse l'aligner sur le contrat.
