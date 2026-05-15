---
title: Utilisateurs sans rôles
description: "Utilisateurs actifs sans aucune affectation de rôle sur une application connectée — les comptes orphelins à analyser."
keywords: [Nomasx-1, sécurité, utilisateurs sans rôles, comptes orphelins, comptes dormants, audit]
---

# Utilisateurs sans rôles

L'écran **Utilisateurs sans rôles** liste les comptes utilisateurs actifs qui ne détiennent **aucun** rôle sur une application connectée. Une ligne par couple `(Application, Utilisateur)`. Ces comptes peuvent se connecter à l'application mais ne peuvent rien y faire — ou, plus préoccupant, ils héritent peut-être de permissions par un mécanisme implicite (joker, héritage) qui mérite vérification.

L'écran filtre sur `USR_STATUS = '01'` pour ne faire remonter que les comptes actifs. Les comptes inactifs sans rôles sont simplement dormants et restent visibles sur l'écran *Utilisateurs*.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="uwr-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#uwr-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Sécurité · Utilisateurs sans rôles</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="140" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="340" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUT</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CRÉATION</text>
  <text x="740" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CONNEXION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SVC_BATCH</text>
  <rect x="340" y="136" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="365" y="148" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2017-04-02</text>
  <text x="740" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">NOUV_EMB_05</text>
  <rect x="340" y="168" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="365" y="180" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-02</text>
  <text x="740" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21</text>
  <text x="140" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">EX_UTIL</text>
  <rect x="340" y="200" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="365" y="212" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="500" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2018-06-22</text>
  <text x="740" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2024-09-04</text>

  <rect x="60" y="248" width="880" height="40" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="72" y="266" fill="#fb923c" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONDUITE À TENIR</text>
  <text x="72" y="282" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Soit affecter le ou les rôles manquants, soit désactiver le compte dans le système source s'il n'a plus de raison d'être.</text>
</svg>

---

## Objectif de l'écran

Pour chaque compte **actif** connu d'une application connectée mais sans aucun rôle affecté :

- **Pourquoi le compte existe-t-il ?** Soit une nouvelle arrivée en attente d'affectation, soit un ancien utilisateur dont les rôles ont été révoqués sans que le compte ait été désactivé. Les deux cas sont normaux — aucun ne doit perdurer.
- **Le compte est-il encore utilisé ?** La *Date de connexion* indique si quelqu'un tente toujours de se connecter malgré l'absence de rôle. Un compte longtemps dormant dans cet état est la désactivation la plus simple à valider.
- **Désactivation ou affectation de rôles ?** Trancher entre les deux est précisément la décision que cet écran sert à instruire.

L'écran est un livrable récurrent de la revue trimestrielle des accès et un indicateur clé des trous dans le processus de départ.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `APPS_ID` — identifiant numérique de l'application source. | Application à laquelle appartient le compte orphelin. |
| **Utilisateur ID** | `USR_ID` — identifiant technique de connexion. Liste déroulante liée au catalogue des utilisateurs, restreinte par l'application choisie. | Login orphelin. |
| **Statut** | `USR_STATUS` — règle booléenne, `01` signifie *Actif*. Imposé par la requête, toutes les lignes affichent donc *Actif*. | Confirmation que la ligne correspond bien à un compte actif. |
| **Date de création** | `USR_DT_CREATION` — date. | Date de création du compte — permet de distinguer une nouvelle arrivée d'un reste oublié. |
| **Date de connexion** | `USR_DT_LOGIN` — date. | Dernière authentification. À combiner avec la *Date de création* pour interpréter la ligne. |

Les deux filtres au-dessus de la grille (**Application ID** et **Utilisateur ID**) acceptent les opérateurs standards *contains* / *equals* / *notEquals* / *startsWith* / *endsWith*.

---

## Conseils & bonnes pratiques

- **Un compte créé depuis moins d'un mois sans connexion** correspond presque toujours à une nouvelle arrivée en attente d'affectation — coordonner avec l'administrateur sécurité pour octroyer les rôles ou informer la RH.
- **Un compte ancien avec une connexion récente** est la ligne la plus préoccupante : une authentification a lieu sur une application où l'utilisateur n'a officiellement aucun droit. Investiguer avant désactivation — un mécanisme d'héritage (joker) lui donne peut-être des permissions implicites.
- **Un compte ancien sans connexion depuis six mois** est la désactivation la plus nette.
- **Cliquer sur une ligne** ouvre l'écran *Audit Utilisateurs* qui présente l'inventaire historique des rôles — utile pour comprendre ce que l'utilisateur détenait avant révocation.
