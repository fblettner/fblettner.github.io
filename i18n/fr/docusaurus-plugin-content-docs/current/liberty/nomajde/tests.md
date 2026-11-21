---
title: Tests de non-régression
description: "Le dossier Tests de Nomajde : des tests de non-régression de JD Edwards joués par le serveur AIS — des cas dessinés comme un enchaînement d'appels (un formulaire, une requête de données, une fonction métier), ce que chaque appel doit répondre, une exécution de référence enregistrée avant un changement et comparée après un ESU, une version d'outils ou une montée de version ; les résultats, la tâche qui joue une suite et son rapport Excel."
keywords: [Nomajde, JD Edwards, tests de non-régression, AIS, suite de tests, cas de test, exécution de référence, ESU, tools release, montée de version, smoke test]
---

# Tests de non-régression

Le dossier **Tests** vérifie que JD Edwards **se comporte toujours de la même façon** après un changement — un ESU, une version d'outils, une montée de version, un déploiement de package. Un test appelle JD Edwards comme le fait une intégration, par le serveur AIS : il ouvre un formulaire, lit une table, lance une fonction métier, puis compare la réponse à ce qui est attendu et à une **exécution de référence** enregistrée avant le changement.

Rien n'est installé dans JD Edwards, et aucun script n'est à écrire : un cas se construit en choisissant des appels dans une liste, la réponse de JD Edwards servant à remplir ce qui est attendu.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="384" rx="14" fill="url(#jt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tests</text>
  <rect x="240" y="60" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="281.5" y="74.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="329" y="60" width="89" height="22" rx="5" fill="url(#jt-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="373.5" y="74.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Jouer ce cas</text>
  <rect x="424" y="60" width="100" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="474.0" y="74.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Jouer la suite</text>
  <rect x="530" y="60" width="156" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="608.0" y="74.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer la référence</text>
  <rect x="698" y="66" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="715" y="75" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">aussi les cas qui écrivent</text>
  <rect x="240" y="96" width="168" height="290" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="106" width="148" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="324.0" y="120.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Nouvelle suite</text>
  <text x="252" y="148" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">smoke</text>
  <circle cx="258" cy="173" r="4" fill="#4ade80"/>
  <text x="268" y="176.5" fill="#cbd5e1" fontSize="8.2" fontFamily="ui-monospace, monospace">ais-is-up</text>
  <circle cx="258" cy="199" r="4" fill="#4ade80"/>
  <text x="268" y="202.5" fill="#cbd5e1" fontSize="8.2" fontFamily="ui-monospace, monospace">udc-types-of-system-00</text>
  <rect x="246" y="214" width="156" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <circle cx="258" cy="225" r="4" fill="#fb923c"/>
  <text x="268" y="228.5" fill="#cbd5e1" fontSize="8.2" fontFamily="ui-monospace, monospace">address-book-form</text>
  <circle cx="258" cy="251" r="4" fill="#4ade80"/>
  <text x="268" y="254.5" fill="#cbd5e1" fontSize="8.2" fontFamily="ui-monospace, monospace">unknown-table-is-refused</text>
  <text x="258" y="282" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">+ Nouveau cas</text>
  <rect x="420" y="96" width="330" height="290" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="432" y="154" width="150" height="24" rx="12.0" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="507.0" y="169.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">address-book-form</text>
  <line x1="507" y1="178" x2="507" y2="200" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#jt-flow)"/>
  <rect x="432" y="202" width="150" height="52" rx="8" fill="rgba(255,255,255,0.03)" stroke="#4ade80" strokeWidth="1.2"/>
  <text x="442" y="217" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DATA_QUERY</text>
  <text x="442" y="232" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">read</text>
  <text x="442" y="245" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">≥ 1 ligne(s) · SY = 00</text>
  <line x1="507" y1="254" x2="507" y2="276" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#jt-flow)"/>
  <circle cx="507" cy="264" r="7" fill="#0f172a" stroke="#4a9eff" strokeWidth="1"/>
  <text x="507" y="267.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="432" y="278" width="150" height="52" rx="8" fill="rgba(255,255,255,0.03)" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="442" y="293" fill="#fb923c" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FORM_P01012_W01012B</text>
  <text x="442" y="308" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">describe</text>
  <text x="442" y="321" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">fonctionne · 12 valeur(s)</text>
  <line x1="507" y1="330" x2="507" y2="352" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#jt-flow)"/>
  <rect x="477" y="354" width="60" height="24" rx="12.0" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="507.0" y="369.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Fin</text>
  <text x="600" y="226" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">réussi</text>
  <text x="600" y="302" fill="#fb923c" fontSize="8.5" fontFamily="system-ui, sans-serif">modifié : diffère</text>
  <text x="600" y="315" fill="#fb923c" fontSize="8.5" fontFamily="system-ui, sans-serif">de la référence</text>
  <rect x="762" y="96" width="198" height="290" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="774" y="116" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">L'ÉTAPE</text>
  <text x="774" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POINT D'ACCÈS APPELÉ</text>
  <rect x="774" y="144" width="174" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="784" y="158.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">data_query ▾</text>
  <text x="774" y="186" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMÈTRES</text>
  <rect x="774" y="192" width="174" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="784" y="206.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">TABLE   F0004</text>
  <text x="774" y="234" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QUI EST ATTENDU</text>
  <rect x="774" y="240" width="174" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="861.0" y="254.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Remplir depuis la réponse</text>
  <text x="774" y="282" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">L'appel</text>
  <text x="948" y="282" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">doit fonctionner</text>
  <text x="774" y="300" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes, au moins</text>
  <text x="948" y="300" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <text x="774" y="318" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">La première ligne contient</text>
  <text x="774" y="334" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SY = 00</text>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Suites et cas</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec leur dernier résultat</text>
  <line x1="200" y1="237.0" x2="240" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jt-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un cas est un flux</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une carte par appel</text>
  <line x1="200" y1="157.0" x2="432" y2="162" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jt-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le + ajoute une étape</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à cet endroit</text>
  <line x1="200" y1="317.0" x2="500" y2="264" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jt-arrow)"/>
  <rect x="1000" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer la référence</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avant le changement</text>
  <line x1="1000" y1="47.0" x2="676" y2="60" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jt-arrow)"/>
  <rect x="1000" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Remplir depuis la réponse</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">propose ce qu'il faut attendre</text>
  <line x1="1000" y1="257.0" x2="948" y2="251" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jt-arrow)"/>
</svg>

---

## Les trois entrées \{#entries\}

| Entrée de menu | Usage |
|---|---|
| **Tests → Résultats** | Le déroulement des dernières exécutions : cas réussis, en échec, modifiés ou jamais joués, les dernières exécutions de chaque suite en barres, chaque cas avec ses derniers résultats. |
| **Tests → Cas** | Les suites et leurs cas, dessinés et modifiés comme des enchaînements d'appels. |
| **Tests → Lancer les tests** | La tâche qui joue une suite — à la demande, ou selon une planification. |

**Résultats** et **Cas** sont les pages de tests de Liberty Next, décrites en détail dans [Tests](../framework/build/tests.md) ; cette page couvre ce qui est propre à JD Edwards.

---

## Un cas, pas à pas \{#case\}

Une **suite** contient des **cas** ; un cas est une suite d'**étapes** ; une étape est un appel à JD Edwards accompagné de ce qui est attendu de sa réponse.

1. Dans **Tests → Cas**, choisir la suite puis **Nouveau cas**. Indiquer ce qu'il vérifie, et cocher *Ce cas modifie des données* si l'une de ses étapes écrit dans JD Edwards.
2. Le **+** du flux ajoute une étape. Choisir le **Point d'accès appelé** dans la liste du connecteur AIS : un [service du catalogue](./ais/services.md) — lecture d'une table, fonction métier — ou un point d'accès créé avec [Créer à partir de…](./ais/create-from.md) pour un formulaire, un état ou une orchestration.
3. Renseigner les **Paramètres** : un champ libellé par paramètre du point d'accès, avec son aide.
4. **Remplir depuis la réponse** joue l'appel immédiatement et propose ce qu'il faut attendre — le nombre de lignes et les valeurs de la première ligne, par alias JD Edwards (`AN8`, `ALPH`). Garder les lignes qui doivent rester vraies, supprimer les autres.
5. **Enregistrer**, puis **Jouer ce cas**.

Ce qu'une étape peut attendre :

| Attente | Signification |
|---|---|
| **L'appel** *doit fonctionner* / *doit être refusé* | Un refus est une attente valable : une table inexistante, une valeur rejetée par le formulaire. **Le refus dit** contrôle le message. |
| **Lignes, au moins / exactement / au plus** | Le nombre de lignes renvoyées. |
| **La première ligne contient** | Des valeurs de la première ligne, par nom de colonne. |
| **Un avertissement dit** | Un avertissement de JD Edwards (*Duplicate Address Book record*) signalé avec la réponse. |

Une valeur lue à une étape — un numéro de tiers tout juste créé — peut être gardée et transmise aux étapes suivantes. Une étape marquée *Jouée même après un échec (un nettoyage)* s'exécute toujours : c'est ainsi qu'un cas qui écrit retire ce qu'il a créé.

---

## Référence et comparaison \{#reference\}

Les attentes disent ce qui doit être vrai. La **référence** révèle ce que personne n'a pensé à écrire : les colonnes d'un formulaire, les libellés d'une grille, les valeurs d'une table de paramétrage.

1. **Avant le changement**, enregistrer la référence : **Enregistrer la référence** dans la page Cas, ou la tâche en mode *record*. Chaque étape garde les parties de sa réponse qu'on lui a demandé de garder.
2. **Après le changement**, rejouer la suite. Chaque cas se termine par :

| Résultat | Signification |
|---|---|
| **Réussi** | Toutes les attentes sont vérifiées et rien ne diffère de la référence. |
| **Modifié** | Les attentes sont vérifiées, mais une valeur gardée diffère de la référence — une colonne disparue, une nouvelle, une autre valeur. L'écart est listé valeur par valeur. |
| **En échec** | Une attente n'est pas vérifiée, ou l'appel a échoué. |
| **Ignoré** | Le cas écrit dans JD Edwards et l'exécution ne l'a pas autorisé. |

Un résultat *Modifié* n'est pas toujours un défaut — une mise à jour peut légitimement ajouter une colonne —, mais il mérite toujours d'être lu. Une fois le changement accepté, enregistrer de nouveau la référence.

---

## La tâche \{#job\}

**Tests → Lancer les tests** joue une suite en dehors de la page — à la demande, ou planifiée après chaque déploiement de package.

| Paramètre | Défaut | Rôle |
|---|---|---|
| **Suite** | `smoke` | La suite à jouer, parmi celles du connecteur AIS. |
| **Comparer à la référence, ou l'enregistrer** | compare | *compare* contrôle les cas et signale les écarts ; *record* garde l'exécution comme nouvelle référence. |
| **Seulement ces cas** | vide | Des identifiants de cas séparés par des virgules ; vide = tous. |
| **Cas qui écrivent dans JDE** | no | *yes* joue aussi les cas marqués comme modifiant des données. |

L'exécution est **en échec** dès qu'un cas échoue ou a changé, ce qui déclenche les alertes de la tâche. Ses fichiers contiennent un rapport Excel, une ligne par étape : cas, libellé, statut du cas, étape, point d'accès, statut de l'étape, durée et constat. Les résultats apparaissent aussi dans **Tests → Résultats**.

---

## La suite livrée \{#smoke\}

Nomajde est livré avec une première suite, **smoke** — *JDE — what must keep working* —, composée de cas de lecture auxquels tout JD Edwards répond :

| Cas | Vérifie |
|---|---|
| `ais-is-up` | AIS répond et indique ce qu'il exécute. |
| `udc-types-of-system-00` | Les types d'UDC du système 00 sont lus dans `F0004`. |
| `address-book-form` | Le formulaire de recherche du carnet d'adresses s'ouvre et possède toujours ses colonnes. |
| `unknown-table-is-refused` | Une table inexistante est refusée, et non renvoyée vide. |

Elle sert à valider la connexion ; viennent ensuite les cas qui comptent pour le métier : les formulaires les plus utilisés, les fonctions métier appelées par les interfaces, les tables de paramétrage qu'une mise à jour ne doit pas toucher.

---

## Accès \{#access\}

| Pour | Un rôle doit détenir |
|---|---|
| Voir les suites et les résultats | **Voir les suites de tests et leurs résultats** |
| Jouer un cas ou une suite | **Jouer les tests (et les voir)** |
| Écrire les suites, les cas et les étapes | **Écrire les tests : suites, cas, étapes (et les jouer)** |
| Lancer la tâche depuis le menu | La permission de la tâche |

Les trois permissions de tests se trouvent dans les règles *Au-delà des menus* d'un rôle, type **Tests** : une équipe fonctionnelle peut écrire et jouer les tests sans être administratrice. Chaque appel s'exécute sous le compte JD Edwards du connecteur AIS : la sécurité de JD Edwards s'applique à ce compte.

---

## Conseils & bonnes pratiques \{#tips\}

- Enregistrer la référence sur l'environnement qui va changer, **juste avant** le changement.
- Préférer de nombreux petits cas de lecture à quelques cas longs : un échec désigne alors ce qui est cassé.
- Tenir à part les cas qui écrivent, chacun avec son étape de nettoyage, et les jouer sur un environnement de test.
- Planifier la tâche après le déploiement nocturne des packages : une régression est connue le matin, avec l'écart listé.
- L'assistant IA connaît la procédure : lui demander de *vérifier que JDE se comporte toujours de la même façon après un changement*.

---

## Voir aussi

- [Tests](../framework/build/tests.md) — la page Cas en détail ; [Résultats des tests](../monitoring/test-results.md).
- [Services JD Edwards (AIS)](./ais/services.md) et [Créer à partir de…](./ais/create-from.md) — les appels possibles dans une étape.
- [Analyse de montée de version](./upgrade/analysis.md) — ce qu'il faut reprendre avant de jouer les tests.
