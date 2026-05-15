---
title: Conflits — Détails
description: "Données sous-jacentes ligne par ligne de chaque conflit SoD — utilisateur, activités incompatibles, objets et rôles d'origine."
keywords: [Nomasx-1, applications, conflits, séparation des tâches, SoD, détails, utilisateur, rôle, activité]
---

# Conflits — Détails

L'écran **Conflits — Détails** est la vue d'analyse fine derrière la *Synthèse*. Une ligne par triplet *(Utilisateur, Activité 1, Activité 2)* — c'est-à-dire chaque réalisation concrète d'un risque SoD sur un utilisateur. Chaque ligne porte l'utilisateur, les deux activités incompatibles, les objets sous-jacents et les deux rôles qui ont réuni les droits.

C'est l'écran lu par les auditeurs quand ils veulent *voir le conflit, pas le compteur*.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodd-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#sodd-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Conflits · Détails</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROCESSUS</text>
  <text x="220" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RISQUE</text>
  <text x="340" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="430" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACT 1</text>
  <text x="520" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJ 1</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE 1</text>
  <text x="700" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACT 2</text>
  <text x="790" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJ 2</text>
  <text x="870" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE 2</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="220" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-01</text>
  <text x="340" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="430" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND-CR</text>
  <text x="520" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0401</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND_ADMIN</text>
  <text x="700" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PAY-APV</text>
  <text x="790" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0413M</text>
  <text x="870" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AP_APPROVER</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="220" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-01</text>
  <text x="340" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MMARTIN</text>
  <text x="430" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND-CR</text>
  <text x="520" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0401</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND_ADMIN</text>
  <text x="700" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PAY-APV</text>
  <text x="790" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0413M</text>
  <text x="870" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AP_APPROVER</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="220" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-02</text>
  <text x="340" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="430" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PO-MOD</text>
  <text x="520" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P4310</text>
  <text x="600" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PO_OWNER</text>
  <text x="700" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RCT-APV</text>
  <text x="790" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P4312</text>
  <text x="870" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PO_RECEIVER</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">O2C</text>
  <text x="220" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-O2C-04</text>
  <text x="340" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PKHAN</text>
  <text x="430" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CUST-CR</text>
  <text x="520" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P03013</text>
  <text x="600" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SALES_ADMIN</text>
  <text x="700" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ADJ-POST</text>
  <text x="790" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P03B11</text>
  <text x="870" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AR_ADJUSTER</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 sur 247 lignes brutes de conflit</text>
</svg>

---

## Objectif de l'écran

Pour chaque conflit SoD concret :

- **Identifier l'utilisateur.** *Utilisateur ID* + les deux rôles indiquent qui porte le conflit et par quel chemin.
- **Pointer les activités.** Activité 1 et Activité 2 sont les actions nommées de la matrice SoD en conflit. Les objets associés relient l'activité au programme du système source qui l'implémente.
- **Reconstituer le chemin.** Combinée avec *Droits — Utilisateurs / Rôles*, la ligne dit quelle paire de rôles génère le conflit — le levier à actionner pour le casser.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `CFD_APPS_ID` — identifiant de l'application. Filtrable. | Application connectée. |
| **Processus ID** | `CFD_PROCESS_ID` — processus métier. Filtrable, liste déroulante vers *SoD Process*. | Domaine fonctionnel auquel le risque appartient. |
| **Risque ID** | `CFD_RISK_ID` — règle d'incompatibilité. Filtrable, liste déroulante vers *SoD Risks*. | Risque mesuré. |
| **Utilisateur ID** | `CFD_USER_ID` — utilisateur en conflit. Filtrable, restreint à l'application. | Détenteur du conflit. |
| **Activité 1** | `CFD_ACT1_ID` — activité SoD nommée. Liste déroulante vers *SoD Activities*. | Première action incompatible. |
| **Objet 1** | `CFD_ACT1_OBJECT` — objet technique. Liste déroulante vers *SoD Objects*. | Programme source supportant l'activité 1. |
| **Rôle 1** | `CFD_ROLE1_ID` — rôle accordant l'Activité 1. Liste déroulante vers le catalogue des rôles. | D'où l'utilisateur tient le premier droit. |
| **Activité 2** | `CFD_ACT2_ID` — activité SoD nommée. | Seconde action incompatible. |
| **Objet 2** | `CFD_ACT2_OBJECT` — objet technique. | Programme source supportant l'activité 2. |
| **Rôle 2** | `CFD_ROLE2_ID` — rôle accordant l'Activité 2. | D'où l'utilisateur tient le second droit. |

---

## Conseils & bonnes pratiques

- **Regrouper par *Utilisateur ID*** lors de la remédiation — le même utilisateur peut apparaître sur plusieurs lignes. Le retrait d'un seul rôle ferme souvent plusieurs conflits d'un coup.
- **Filtrer par *Risque ID*** pour obtenir la liste complète des utilisateurs concernés par un risque — le détail par risque de la *Synthèse*.
- **Comparer *Rôle 1* et *Rôle 2***. Quand deux rôles ressortent systématiquement comme cause d'un risque, le couple est un problème structurel — la revue SoD doit challenger le dessin des rôles avant les utilisateurs.
- **Recouper avec *Avérés*** pour savoir lesquelles de ces lignes ont une activité réelle derrière elles (vs des conflits théoriques où l'utilisateur détient les droits sans les avoir exercés).
