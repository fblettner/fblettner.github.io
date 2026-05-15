---
title: Conflits — Synthèse
description: "Vue de synthèse des conflits de séparation des tâches — nombre d'utilisateurs en conflit, ventilé par processus métier et par risque."
keywords: [Nomasx-1, applications, conflits, séparation des tâches, SoD, synthèse, risque]
---

# Conflits — Synthèse

L'écran **Conflits — Synthèse** est la *vue de tête* des conflits de séparation des tâches sur une application connectée. Une ligne par triplet `(Application, Processus, Risque)`. Chaque ligne porte le nombre d'utilisateurs qui détiennent la combinaison de rôles incompatibles définie par la matrice SoD.

C'est l'écran ouvert au début d'une revue trimestrielle et celui que l'on capture pour le comité de pilotage.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sods-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#sods-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Conflits · Synthèse</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROCESSUS</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RISQUE</text>
  <text x="760" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="860" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MAJ</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P — Achats à paiement</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Créer fournisseur + Approuver paiement</text>
  <text x="760" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">14</text>
  <text x="860" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P — Achats à paiement</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Modifier CA + Approuver réception</text>
  <text x="760" y="181" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">7</text>
  <text x="860" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">O2C — Commande à encaissement</text>
  <text x="380" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Créer client + Passer un ajustement</text>
  <text x="760" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">3</text>
  <text x="860" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-13</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RH — Embauche à départ</text>
  <text x="380" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Modifier taux + Approuver paie</text>
  <text x="760" y="245" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">1</text>
  <text x="860" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
</svg>

---

## Objectif de l'écran

Pour chaque application connectée :

- **Où les risques SoD se situent-ils dans le métier ?** La ventilation par *Processus* (P2P, O2C, R2R, RH…) cartographie les conflits sur un schéma compréhensible par tous.
- **Combien d'utilisateurs sont exposés par risque ?** La colonne *Utilisateurs* est le chiffre clé. Suivre son évolution trimestre après trimestre est l'indicateur SoD le plus simple.
- **Quand la donnée a-t-elle été calculée ?** La *Date MAJ* précise la fraîcheur. Une date ancienne décrédibilise tout le reste du tableau.

Le jeu de données est synthétisé — seules les lignes `CFS_COUNT > 0` apparaissent, triées par *Application → Processus → Risque*. L'écran *Détails* est la vue d'analyse fine.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `CFS_APPS_ID` — identifiant de l'application. | Application connectée. |
| **Processus ID** | `CFS_PROCESS_ID` — processus métier. Liste déroulante vers le catalogue *SoD Process*. | Processus fonctionnel auquel le risque appartient (P2P, O2C, R2R, RH…). |
| **Risque ID** | `CFS_RISK_ID` — règle d'incompatibilité. Liste déroulante vers le catalogue *SoD Risks*. | Risque nommé mesuré. |
| **Nb utilisateurs** | `CFS_COUNT` — nombre d'utilisateurs détenant la combinaison incompatible. | Nombre de personnes en conflit sur la ligne. Chiffre clé. |
| **Date MAJ** | `CFS_REFRESH` — date de calcul de la ligne. | Fraîcheur de l'analyse. |

---

## Conseils & bonnes pratiques

- **Trier sur *Nb utilisateurs* décroissant** pour tomber sur le risque à plus fort impact — la ligne à présenter au comité de pilotage.
- **Regrouper par *Processus*** pour voir quel domaine métier porte le plus de SoD — donnée souvent demandée par le directeur financier ou le COO.
- **Surveiller la *Date MAJ*** — une ligne qui n'a pas été rafraîchie depuis plusieurs semaines signifie en général que le job SoD ne tourne plus. Relancer un scan.
- **Cliquer pour rebondir sur *Détails*** afin d'obtenir les lignes sous-jacentes d'une ligne donnée.
