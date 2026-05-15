---
title: OUT — Détails
description: "Détail Object Usage Tracking — chaque couple (utilisateur, objet) capté par le système source, avec la date de dernière utilisation et la version."
keywords: [Nomasx-1, applications, Object Usage Tracking, OUT, détails, OUT brut, trace d'usage]
---

# OUT — Détails

L'écran **OUT — Détails** est l'enregistrement brut d'Object Usage Tracking. Une ligne par quintuplet `(Application, Composant, Utilisateur, Objet, Version)` — chaque appel distinct capté par le système source, avec l'horodatage de la dernière invocation.

C'est le jeu de données derrière chaque agrégation produite par Nomasx-1 — *OUT — Composants*, *OUT — Utilisateurs / Rôles*, *OUT — Objets*, *Dernière utilisation* dans l'audit utilisateur.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="outd-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#outd-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · OUT · Détails</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="260" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="640" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VERSION</text>
  <text x="800" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DERN. UTILISATION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="260" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Saisie facture standard</text>
  <text x="640" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="800" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="260" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P03B11</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Consultation Grand Livre client</text>
  <text x="640" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="800" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-13</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MMARTIN</text>
  <text x="260" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P03013</text>
  <text x="380" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Fiche client</text>
  <text x="640" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="800" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-12</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SVC_BATCH</text>
  <text x="260" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R31410</text>
  <text x="380" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Génération MRP</text>
  <text x="640" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">XJDE0001</text>
  <text x="800" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
</svg>

---

## Objectif de l'écran

Pour chaque tuple (utilisateur, objet, version) déjà invoqué sur une application connectée :

- **La preuve brute.** Toutes les autres vues OUT agrègent ce jeu de données — quand quelque chose paraît étrange dans la synthèse, c'est ici qu'on creuse.
- **Chronologie par utilisateur et par objet.** Filtrer sur un utilisateur pour lire l'inventaire complet de ce qu'il a jamais invoqué, trié par date.
- **Traçabilité par composant.** La colonne masquée *Composant* porte le cumul de licence — utilisée en interne pour la navigation par drill-down depuis *OUT — Composants*.

:::info[Spécifique JDE]
Cette vue est construite à partir de `LICENSE_JDE_OUT` — la table JDE d'Object Usage Tracking. La dimension composant est dérivée du mappage System Code. Les autres systèmes sources peuvent produire un jeu équivalent en exposant leur propre journal d'usage / d'audit.
:::

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `LOUT_APPS_ID` — identifiant de l'application. Filtrable. | Application connectée. |
| **Utilisateur ID** | `LOUT_USER` — identifiant utilisateur. Filtrable, restreint à l'application. | Auteur de l'appel. |
| **Objet** | `LOUT_OBJECT` — objet technique. Filtrable. | Objet invoqué. |
| **Description** | `JDEO_DESCRIPTION` — libellé descriptif. | Libellé lisible de l'objet. |
| **Version** | `LOUT_VERSION` — version de traitement. | Variante de configuration utilisée. |
| **Dernière utilisation** | `LAST_USAGE` — date de l'invocation la plus récente. | Quand l'appel a eu lieu. |

Colonne masquée portée par la ligne : `CPT_ID` (utilisée par le drill-down depuis *OUT — Composants*).

---

## Conseils & bonnes pratiques

- **Filtrer sur un *Utilisateur ID*** + trier sur *Dernière utilisation* décroissante — la trace d'usage de l'utilisateur, ordonnée. Tout ce qui dépasse la fenêtre de revue est candidat à la révocation.
- **Filtrer sur un *Objet*** pour lister tous les utilisateurs qui ont invoqué un programme donné, avec les dates. Une longue traîne d'utilisateurs dormants sur un objet sensible est l'argument de révocation le plus net.
- **Comparer avec la matrice des *Droits*** — un utilisateur qui invoque un objet sans droit déclaré évident signale soit une règle héritée (à recouper avec la connexion `*ALL`), soit un contournement de la sécurité.
- **Une ligne avec une *Dernière utilisation* récente sur un objet sensible** est l'une des preuves les plus solides pour un audit — la classer sous le constat SoD correspondant.
