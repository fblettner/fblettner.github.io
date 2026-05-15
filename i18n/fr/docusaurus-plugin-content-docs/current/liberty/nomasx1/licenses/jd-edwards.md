---
title: JD Edwards
description: "Synthèse licence JD Edwards — utilisateurs actifs, utilisateurs transactionnels, comptes dormants et transactions orphelines par application JDE."
keywords: [Nomasx-1, licences, JD Edwards, licence JDE, utilisateurs actifs, utilisateurs transactionnels, comptes dormants]
---

# JD Edwards

L'écran **JD Edwards** synthétise les chiffres de licence pertinents pour chaque application JDE connectée à Nomasx-1. Une ligne par application JDE (filtre `APPS_TYPE = 'JDE'`).

C'est le tableau de bord que l'équipe licences JDE d'Oracle attend : combien d'utilisateurs humains distincts sont actifs, combien ont réellement transacté sur les 90 derniers jours, et combien de comptes manquent d'un côté ou de l'autre.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 260" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="ljde-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="200" rx="14" fill="url(#ljde-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Licences · JD Edwards</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="320" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL. ACTIFS</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TRANSACTIONNELS (90 J)</text>
  <text x="740" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TRANSACT. SANS UTILISATEUR</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="320" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">218</text>
  <text x="500" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">182</text>
  <text x="740" y="149" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">4</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">13 — JDE Test</text>
  <text x="320" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">62</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">38</text>
  <text x="740" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">0</text>

  <rect x="60" y="196" width="880" height="32" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="72" y="216" fill="#fb923c" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LECTURE DES CHIFFRES</text>
  <text x="72" y="230" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Actifs = comptes de sécurité · Transactionnels = ont touché une table JDE sur 90 j · Transact. sans utilisateur = transactions sans compte de sécurité.</text>
</svg>

---

## Objectif de l'écran

Pour chaque application JDE :

- **Compteur d'actifs.** *Utilisateurs actifs* est le nombre de comptes distincts avec `USR_STATUS = '01'` et au moins une affectation de rôle — la base de calcul côté JDE.
- **Usage réel.** *Transactionnels* compte combien de ces actifs ont effectivement écrit quelque chose sur les 90 derniers jours. C'est le chiffre à présenter lors d'une renégociation de licence.
- **Repérer les transactions orphelines.** *Transact. sans utilisateur* compte les transactions sur la fenêtre dont l'utilisateur JDE a été supprimé de la table de sécurité — fort indice de manque de nettoyage.

La colonne masquée *Sans transaction* est l'inverse — utilisateurs actifs sans transaction sur la fenêtre — visible dans les drilldowns plus fins.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `APPS_ID` — identifiant de l'application. | Application JDE. |
| **Utilisateurs actifs** | `JDE_ACTIVE_USERS` — utilisateurs actifs distincts détenant au moins un rôle. | Effectif effectif pour la licence. |
| **Transactionnels** | `JDE_TRANSACTION_USERS` — utilisateurs actifs ayant transacté sur les 90 derniers jours. | Cohorte « ont vraiment utilisé le système ». |
| **Sans transaction** | `JDE_NOTRANSACTION_USERS` — utilisateurs actifs sans transaction. Masquée. | Comptes inactifs — candidats à la révocation. |
| **Transact. sans utilisateur** | `JDE_TRANSACTION_NOUSERS` — transactions sur la fenêtre sans compte de sécurité correspondant. | Lacune de nettoyage. |

---

## Conseils & bonnes pratiques

- **Le ratio Transactionnels × composant** est le levier de négociation le plus utile — si le nombre de *Transactionnels* est bien inférieur aux *Actifs*, la licence est surdimensionnée.
- **Traiter *Transact. sans utilisateur* en priorité** — chaque transaction sans compte signale soit un compte supprimé tout en conservant ses droits, soit un programme externe à JDE qui écrit via un compte de service à marquer.
- **L'écran est spécifique JDE.** Pour les autres systèmes sources, des écrans équivalents se construisent autour de leurs tables d'usage (voir *Object Usage Tracking* pour le mécanisme sous-jacent).
- **Combiner avec *Licences acquises*** pour comparer le chiffre *Transactionnels* au droit contractuel.
