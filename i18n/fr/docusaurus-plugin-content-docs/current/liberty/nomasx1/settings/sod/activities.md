---
title: SoD — Activités
description: "Activités nommées au sein de chaque processus métier — unités atomiques que la matrice SoD combine."
keywords: [Nomasx-1, paramètres, SoD, activités, actions atomiques, processus métier]
---

# SoD — Activités

L'écran **Activités** liste les activités nommées au sein de chaque processus métier. Une ligne par `(Application, Process, Activité)`. Une activité est l'*unité atomique* de l'analyse SoD — par exemple *Créer fournisseur*, *Approuver paiement*, *Comptabiliser écriture*.

La *Matrice* combine des paires d'activités pour exprimer les incompatibilités. L'écran *Objets* rattache chaque activité aux programmes source qui l'implémentent.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="soda-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#soda-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Paramètres · SoD · Activités</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="180" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROCESS</text>
  <text x="320" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACTIVITÉ ID</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NOM</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="180" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="320" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND-CR</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Créer fournisseur</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="180" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="320" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PAY-APV</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Approuver paiement</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="180" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">O2C</text>
  <text x="320" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CUST-CR</text>
  <text x="500" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Créer client</text>
</svg>

---

## Objectif de l'écran

- **Définir les actions atomiques** sur lesquelles le modèle SoD raisonne.
- **Identifiants stables d'un cycle d'audit à l'autre** — *Activité ID* alimente la matrice et les rapports de conflits.
- **Une ligne par action granulaire.** Garder les activités précises : *Créer fournisseur* et *Modifier fournisseur* sont deux activités, pas une entrée combinée.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `ACT_APPS_ID` — application. | Application à laquelle l'activité s'applique. |
| **Process ID** | `ACT_PROCESS_ID` — lié à *Process*. | Processus métier auquel l'activité appartient. |
| **Activité ID** | `ACT_ID` — identifiant court. | Référence utilisée par *Matrice*, *Objets* et les vues *Conflits*. |
| **Nom** | `ACT_NAME` — libellé convivial. | Nom lisible. |

---

## Conseils & bonnes pratiques

- **Nommer côté métier.** Utiliser des verbes (*Créer*, *Modifier*, *Approuver*, *Comptabiliser*) — plus simple à discuter avec les responsables métier que des libellés techniques.
- **Garder les noms stables.** Un renommage casse la comparaison entre rapports SoD successifs.
- **Grouper les activités par processus.** Une activité qui s'étend sur deux processus pointe en général une mauvaise classification — du processus ou de l'activité.
