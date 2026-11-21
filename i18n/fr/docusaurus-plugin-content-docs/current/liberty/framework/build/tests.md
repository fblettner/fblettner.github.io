---
title: Tests
description: "Logique → Tests dans Liberty Next : les tests de non-régression des points d'accès d'API d'une application — suites et cas, un cas dessiné comme un enchaînement d'appels et modifié à côté, ce que chaque appel doit répondre (fonctionne ou refusé, lignes, valeurs de la première ligne), Remplir depuis la réponse, Jouer ce cas, Jouer la suite, Enregistrer la référence, et les permissions qui les ouvrent à une équipe fonctionnelle."
keywords: [Liberty Next, tests, non-régression, suite de tests, cas de test, point d'accès d'API, exécution de référence, comparaison, tests:view, tests:run, tests:edit]
---

# Tests

**Tests** vérifie que ce qu'une application appelle **répond toujours de la même façon** : après une modification de configuration, une mise à jour du système placé derrière une API, une nouvelle version. Un test s'écrit sans code — un cas est un **enchaînement d'appels** aux points d'accès d'un connecteur d'API, chacun avec ce qui est attendu de sa réponse — et se compare d'une exécution à l'autre à une **référence**.

Accès : **Liberty Next → Logique → Tests**. Les résultats dans le temps se trouvent dans [Exploiter → Résultats des tests](../../monitoring/test-results.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tst-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tst-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tst-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tst-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="384" rx="14" fill="url(#tst-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tests</text>
  <rect x="240" y="60" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="281.5" y="74.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="329" y="60" width="89" height="22" rx="5" fill="url(#tst-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
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
  <text x="252" y="148" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">orders</text>
  <circle cx="258" cy="173" r="4" fill="#4ade80"/>
  <text x="268" y="176.5" fill="#cbd5e1" fontSize="8.2" fontFamily="ui-monospace, monospace">list-has-columns</text>
  <rect x="246" y="188" width="156" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <circle cx="258" cy="199" r="4" fill="#fb923c"/>
  <text x="268" y="202.5" fill="#cbd5e1" fontSize="8.2" fontFamily="ui-monospace, monospace">create-then-cancel</text>
  <circle cx="258" cy="225" r="4" fill="#4ade80"/>
  <text x="268" y="228.5" fill="#cbd5e1" fontSize="8.2" fontFamily="ui-monospace, monospace">unknown-id-refused</text>
  <circle cx="258" cy="251" r="4" fill="#f87171"/>
  <text x="268" y="254.5" fill="#cbd5e1" fontSize="8.2" fontFamily="ui-monospace, monospace">price-is-computed</text>
  <text x="258" y="282" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">+ Nouveau cas</text>
  <rect x="420" y="96" width="330" height="290" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="432" y="154" width="150" height="24" rx="12.0" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="507.0" y="169.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">create-then-cancel</text>
  <line x1="507" y1="178" x2="507" y2="200" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#tst-flow)"/>
  <rect x="432" y="202" width="150" height="52" rx="8" fill="rgba(255,255,255,0.03)" stroke="#4ade80" strokeWidth="1.2"/>
  <text x="442" y="217" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ORDER_CREATE</text>
  <text x="442" y="232" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">create</text>
  <text x="442" y="245" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">fonctionne · 1 ligne(s)</text>
  <line x1="507" y1="254" x2="507" y2="276" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#tst-flow)"/>
  <circle cx="507" cy="264" r="7" fill="#0f172a" stroke="#4a9eff" strokeWidth="1"/>
  <text x="507" y="267.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="432" y="278" width="150" height="52" rx="8" fill="rgba(255,255,255,0.03)" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="442" y="293" fill="#fb923c" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ORDER_CANCEL</text>
  <text x="442" y="308" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">cleanup</text>
  <text x="442" y="321" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">fonctionne</text>
  <line x1="507" y1="330" x2="507" y2="352" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#tst-flow)"/>
  <rect x="477" y="354" width="60" height="24" rx="12.0" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="507.0" y="369.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Fin</text>
  <text x="600" y="226" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">réussi</text>
  <text x="600" y="302" fill="#fb923c" fontSize="8.5" fontFamily="system-ui, sans-serif">modifié : diffère</text>
  <text x="600" y="315" fill="#fb923c" fontSize="8.5" fontFamily="system-ui, sans-serif">de la référence</text>
  <rect x="762" y="96" width="198" height="290" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="774" y="116" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">L'ÉTAPE</text>
  <text x="774" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POINT D'ACCÈS APPELÉ</text>
  <rect x="774" y="144" width="174" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="784" y="158.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">order_create ▾</text>
  <text x="774" y="186" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMÈTRES</text>
  <rect x="774" y="192" width="174" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="784" y="206.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">CUSTOMER   1001</text>
  <text x="774" y="234" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QUI EST ATTENDU</text>
  <rect x="774" y="240" width="174" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="861.0" y="254.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Remplir depuis la réponse</text>
  <text x="774" y="282" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">L'appel</text>
  <text x="948" y="282" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">doit fonctionner</text>
  <text x="774" y="300" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes, au moins</text>
  <text x="948" y="300" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <text x="774" y="318" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">La première ligne contient</text>
  <text x="774" y="334" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">STATUS = OPEN</text>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Suites et cas</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec leur dernier résultat</text>
  <line x1="200" y1="237.0" x2="240" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un cas est un flux</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une carte par appel</text>
  <line x1="200" y1="157.0" x2="432" y2="162" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le + ajoute une étape</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à cet endroit</text>
  <line x1="200" y1="317.0" x2="500" y2="264" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="1000" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer la référence</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avant le changement</text>
  <line x1="1000" y1="47.0" x2="676" y2="60" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="1000" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Remplir depuis la réponse</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">propose ce qu'il faut attendre</text>
  <line x1="1000" y1="257.0" x2="948" y2="251" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
</svg>

---

## Suites, cas, étapes \{#model\}

| | |
|---|---|
| **Suite** | Désigne un connecteur d'API et contient des cas. **Nouvelle suite** demande son nom. |
| **Cas** | Une vérification — *La liste des clients a toujours ses colonnes*. **Nouveau cas**, sous la suite. |
| **Étape** | Un appel à un point d'accès du connecteur de la suite, avec ce qui est attendu. |

La colonne de gauche liste les suites et leurs cas, chacun avec l'icône de son dernier résultat. Le centre dessine le cas choisi : un début, une carte par étape — son point d'accès, son nom, un résumé de ce qu'elle attend, **colorée selon son dernier résultat** — et une fin. Le panneau de droite modifie l'élément choisi.

### Le cas \{#case\}

| Champ | Signification |
|---|---|
| **Identifiant** | L'identifiant du cas dans sa suite. |
| **Ce qu'il vérifie** | La phrase affichée dans les listes et les résultats. |
| **Ce cas modifie des données : joué seulement quand l'exécution l'autorise** | À cocher si une étape écrit. |
| **Dernières exécutions** | Les huit dernières exécutions du cas ; une exécution enregistrée porte la mention *référence*. |

### Une étape \{#step\}

Le **+** d'un lien ajoute une étape à cet endroit ; un clic sur une carte l'ouvre.

| Champ | Signification |
|---|---|
| **Nom** | Unique dans le cas : les résultats et la référence sont conservés par étape. |
| **Point d'accès appelé** | Choisi dans la liste du connecteur. |
| **Paramètres** | Le formulaire du point d'accès : un champ libellé par paramètre, son aide en dessous, une liste déroulante quand il a une liste de valeurs. |
| **L'appel** | *doit fonctionner* ou *doit être refusé* — avec **Le refus dit** pour contrôler le message. |
| **Lignes, au moins** / **exactement** / **au plus** | Le nombre de lignes, comptées là où le point d'accès indique ses lignes. |
| **La première ligne contient** | Des valeurs de la première ligne, par nom de colonne du point d'accès. |
| **Jouée même après un échec (un nettoyage)** | L'étape s'exécute même si une précédente a échoué : c'est ainsi qu'un cas qui écrit retire ce qu'il a créé. |

**Remplir depuis la réponse** joue l'appel immédiatement et propose ce qu'il faut attendre — le nombre de lignes et les valeurs de la première : garder les lignes qui doivent rester vraies, supprimer les autres. Un point d'accès qui modifie des données n'est pas joué depuis ce bouton : enregistrer l'étape et jouer le cas.

**Avancé — valeurs gardées, chemins dans la réponse brute** contient ce que les champs précédents ne couvrent pas : une valeur **gardée pour les étapes suivantes** (reprise par `{{nom}}` dans un paramètre), une valeur de la réponse brute égale à un texte ou qui le contient, des chemins qui doivent contenir quelque chose ou rien, un avertissement, et les chemins **comparés à l'exécution de référence**. Cette section est nécessaire pour un point d'accès qui n'indique pas où se trouvent ses lignes.

---

## Jouer et comparer \{#run\}

| Bouton | Action |
|---|---|
| **Jouer ce cas** | Joue le cas choisi. |
| **Jouer la suite** | Joue tous les cas, l'un après l'autre. |
| **Enregistrer la référence** | Joue la suite et garde, pour les cas réussis, ce que leurs étapes gardent : la référence à laquelle les prochaines exécutions sont comparées. |
| **aussi les cas qui écrivent** | Autorise, pour cette exécution, les cas marqués comme modifiant des données. |

Une exécution enregistre d'abord les modifications en cours, puis donne son bilan : *N réussi(s) · N en échec · N modifié(s) · N ignoré(s)*.

| Résultat | Couleur | Signification |
|---|---|---|
| **Réussi** | Vert | Tous les contrôles sont vérifiés, et rien ne diffère de la référence. |
| **En échec** | Rouge | Un contrôle n'est pas vérifié, l'appel a échoué, ou une valeur attendue d'une étape précédente n'a jamais été gardée. |
| **Modifié** | Orange | Les contrôles sont vérifiés, mais un élément gardé diffère de la référence — disparu, nouveau, autre nombre, autre valeur. |
| **Ignoré** | Gris | Le cas écrit et l'exécution ne l'a pas autorisé, une étape précédente a échoué, ou le cas n'a aucune étape. |

Un cas prend le plus mauvais résultat de ses étapes. Les vingt dernières exécutions de chaque cas sont conservées.

---

## Où sont conservés les tests \{#files\}

Une suite est un fichier de la configuration (`tests/<suite>.toml`) : elle est empaquetée, versionnée et livrée avec l'application, et chaque enregistrement garde la version précédente dans **Déployer → Historique**. Les exécutions et la référence sont conservées à côté et restent sur l'instance : une référence enregistrée sur l'environnement de test n'est pas celle de la production.

---

## Depuis une tâche, depuis un menu \{#use\}

- Le formulaire de lancement d'une tâche peut proposer la liste des suites : une application livre ainsi une tâche qui joue une suite selon une planification et échoue dès qu'un cas échoue.
- Le menu d'une application peut porter les deux pages — **Tests** et **Résultats des tests** — pour ses propres utilisateurs : voir [Types d'éléments](./menus/item-types.md).

---

## Accès \{#access\}

Les tests ont leurs propres permissions, dans les règles *Au-delà des menus* d'un rôle, type **Tests** — chacune inclut la précédente, et un superutilisateur les détient toutes :

| Permission | Libellé dans l'éditeur de rôle | Autorise |
|---|---|---|
| `tests:view` | **Voir les suites de tests et leurs résultats** | Lire les suites, les cas et les résultats. |
| `tests:run` | **Jouer les tests (et les voir)** | Jouer un cas ou une suite, enregistrer la référence, remplir depuis la réponse. |
| `tests:edit` | **Écrire les tests : suites, cas, étapes (et les jouer)** | Créer, modifier et supprimer des suites, des cas et des étapes. |

Une équipe fonctionnelle peut donc être propriétaire de ses tests sans être administratrice.

---

## Conseils & bonnes pratiques \{#tips\}

- Un cas, une vérification : un échec désigne alors ce qui est cassé.
- Attendre un **refus** là où il est dû — identifiant inconnu, valeur obligatoire absente : un système qui se met à tout accepter est aussi une régression.
- Enregistrer la référence juste avant un changement, jouer la suite juste après.
- Tenir à part les cas qui écrivent, chacun terminé par son étape de nettoyage.

---

## Voir aussi

- [Résultats des tests](../../monitoring/test-results.md) · [Points d'accès d'API](./api-endpoints.md) · [Services](./services.md)
- [Rôles et permissions](./secure/roles-and-permissions.md)
