---
title: Conflits — Utilisateurs
description: "Utilisateurs distincts en conflit sur une application connectée — la liste des comptes à remédier."
keywords: [Nomasx-1, applications, conflits, séparation des tâches, SoD, utilisateurs, liste de remédiation]
---

# Conflits — Utilisateurs

L'écran **Conflits — Utilisateurs** est la liste distincte des utilisateurs présentant au moins un conflit SoD sur une application connectée. Une ligne par couple `(Application, Utilisateur)`. Chaque ligne porte le statut du compte, sa date de création et sa dernière connexion — exactement ce qu'il faut pour décider *comment* remédier.

Si *Synthèse* indique combien de conflits il y a et *Détails* leur apparence, cet écran indique *à qui* ils appartiennent.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodu-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#sodu-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Conflits · Utilisateurs</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL. ID</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUT</text>
  <text x="540" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CRÉATION</text>
  <text x="780" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CONNEXION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <rect x="380" y="136" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="405" y="148" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="540" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2019-03-14</text>
  <text x="780" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MMARTIN</text>
  <rect x="380" y="168" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="405" y="180" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="540" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2020-09-02</text>
  <text x="780" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-13</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">LEGACY01</text>
  <rect x="380" y="200" width="60" height="16" rx="3" fill="rgba(248,113,113,0.18)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="410" y="212" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Inactif</text>
  <text x="540" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2014-06-22</text>
  <text x="780" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2022-08-19</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21</text>
  <text x="160" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PKHAN</text>
  <rect x="380" y="232" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="405" y="244" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="540" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2022-01-15</text>
  <text x="780" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-12</text>
</svg>

---

## Objectif de l'écran

Pour chaque utilisateur en conflit sur une application connectée :

- **Identifier les détenteurs.** Une ligne par utilisateur — plus facile à dispatcher entre propriétaires métiers que la lecture ligne par ligne des *Détails*.
- **Lire le contexte de l'action.** Statut + Création + Dernière connexion indiquent si la remédiation la plus simple est une désactivation (comptes inactifs) ou un nettoyage de rôles (comptes actifs en conflit).
- **Repérer les conflits-zombies.** Un utilisateur *Inactif* qui apparaît encore ici prouve que le conflit sous-jacent est structurel — même après le départ de l'utilisateur, son portefeuille de rôles produit toujours un risque SoD théorique. Resserrer le dessin des rôles plutôt que de s'appuyer sur la désactivation.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `CFD_APPS_ID` — identifiant de l'application. | Application à laquelle le conflit appartient. |
| **Utilisateur ID** | `CFD_USER_ID` — utilisateur en conflit. | Détenteur du conflit. |
| **Statut** | `USR_STATUS` — `01` signifie *Actif*. | État côté source — détermine la remédiation. |
| **Date de création** | `USR_DT_CREATION` — date. | Date de création du compte. |
| **Date de connexion** | `USR_DT_LOGIN` — date. | Dernière authentification. Un compte actif depuis longtemps dormant et en conflit est la cible la plus simple à fermer. |

---

## Conseils & bonnes pratiques

- **Trier sur *Date de connexion* décroissante** — les utilisateurs qui se connectent activement portent le risque opérationnel le plus élevé. Les traiter en premier.
- **Filtrer sur le statut *Inactif*** pour retrouver les conflits sur des comptes déjà désactivés. Ils sont faciles à fermer mais signalent que le dessin des rôles autorise encore la combinaison.
- **Combiner avec *Conflits — Détails* sur le même filtre utilisateur** pour lire l'histoire complète d'un conflit avant de contacter la personne.
- **Cliquer sur une ligne** ouvre l'écran *Audit Utilisateurs* pour cet utilisateur — vue complète rôles + activité au même endroit.
