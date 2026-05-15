---
title: Conflits — Rôles
description: "Paires de rôles distinctes produisant un conflit SoD — les couples de rôles à redessiner."
keywords: [Nomasx-1, applications, conflits, séparation des tâches, SoD, rôles, paire de rôles, dessin des rôles]
---

# Conflits — Rôles

L'écran **Conflits — Rôles** liste les **paires de rôles** distinctes produisant un conflit SoD sur une application connectée. Une ligne par triplet `(Application, Rôle 1, Rôle 2)`, dérivé du jeu de *Détails*.

Là où *Conflits — Utilisateurs* pilote la remédiation à court terme (révoquer ou désactiver), *Conflits — Rôles* pilote la **correction structurelle** : redessiner la paire de rôles de manière à ce que la combinaison ne puisse plus survenir.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodr-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#sodr-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Conflits · Rôles</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="320" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE 1</text>
  <text x="640" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE 2</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="320" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND_ADMIN</text>
  <text x="640" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AP_APPROVER</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="320" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PO_OWNER</text>
  <text x="640" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PO_RECEIVER</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="320" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SALES_ADMIN</text>
  <text x="640" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AR_ADJUSTER</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21 — SAP Production</text>
  <text x="320" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Z_PAY_RATE</text>
  <text x="640" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Z_PAYROLL_APV</text>
</svg>

---

## Objectif de l'écran

Pour chaque application connectée :

- **Repérer les rôles structurellement incompatibles.** Une paire qui figure ici signifie que *tout* utilisateur portant les deux rôles sera en conflit. Resserrer le dessin une seule fois ferme le problème pour tous les détenteurs actuels et futurs.
- **Prioriser le redesign.** Les paires qui produisent de nombreuses lignes *Détails* sont les corrections à plus fort impact. Les classer à partir des compteurs de la *Synthèse* ou des *Détails*.
- **Planifier la communication.** La paire de rôles est l'unité d'échange avec l'administrateur sécurité et les propriétaires de rôles — bien plus actionnable qu'un débat utilisateur par utilisateur.

La requête se contente d'extraire les tuples `(CFD_APPS_ID, CFD_ROLE1_ID, CFD_ROLE2_ID)` distincts depuis `SOD_CONFLICT_DETAILS`, triés par *Rôle 1*.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `CFD_APPS_ID` — identifiant de l'application. | Application connectée. |
| **Rôle 1** | `CFD_ROLE1_ID` — rôle accordant l'Activité 1. Liste déroulante vers le catalogue des rôles. | Première moitié de la paire incompatible. |
| **Rôle 2** | `CFD_ROLE2_ID` — rôle accordant l'Activité 2. Liste déroulante vers le catalogue des rôles. | Seconde moitié de la paire incompatible. |

---

## Conseils & bonnes pratiques

- **Comparer chaque paire avec *Combinaison de rôles*** — si la même paire apparaît dans une combinaison à fort effectif, le conflit est largement distribué et mérite une correction structurelle.
- **La paire est symétrique.** `(A, B)` et `(B, A)` portent la même discussion. Les traiter comme une seule décision.
- **Trois corrections structurelles courantes** : scinder un rôle en deux, restreindre la portée d'un rôle, ou sortir un objet d'un rôle et passer par une attribution explicite au niveau utilisateur (avec justification documentée).
- **Relancer le scan SoD** après le redesign — les compteurs *théoriques* et *avérés* doivent tous deux baisser. Une baisse uniquement sur *Détails* mais pas sur *Avérés* pointe des contrôles compensatoires éventuellement encore nécessaires.
