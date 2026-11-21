---
title: Services
description: "Logique → Services dans Liberty Next : un service est un enchaînement d'étapes — requêtes, appels de points d'accès, fonctions de plugin, conditions, boucles — dessiné comme un flux et modifié à côté ; Exécuter l'essaie avec des entrées et montre la réponse et les étapes exécutées, Exposer en fait un point d'accès d'API qu'un écran, une tâche, l'assistant ou un appelant extérieur utilise comme un autre."
keywords: [Liberty Next, services, actions partagées, concepteur de flux, low-code, étapes, condition, boucle, exécuter, exposer, point d'accès d'API, service composé, orchestration]
---

# Services

Un **service** compose plusieurs étapes en un seul appel : lire une ligne, la contrôler, appeler un point d'accès, bifurquer selon la réponse, écrire, répondre. Il se construit en le dessinant — sans code — et s'utilise de deux façons : un écran l'appelle depuis un bouton, ou il est **exposé comme point d'accès d'API**, qu'une tâche, l'assistant ou un système extérieur appelle comme un autre.

Accès : **Liberty Next → Logique → Services**, pour les superutilisateurs. Un service est l'action partagée qu'un écran appelle avec `call_action` ; voir [Actions et cycle de vie](./screens/actions-and-lifecycle.md) pour les actions d'un écran.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="svc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="svc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="svc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="svc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="366" rx="14" fill="url(#svc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Services</text>
  <rect x="240" y="60" width="720" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="81" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">check_credit</text>
  <text x="350" y="81" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">4 étape(s) · 2 entrée(s)</text>
  <text x="470" y="81" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">POST /api/http/studio/check_credit</text>
  <rect x="780" y="66" width="66" height="22" rx="5" fill="url(#svc-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="813.0" y="80.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Exécuter</text>
  <rect x="852" y="66" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="882.5" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Exposer</text>
  <rect x="240" y="108" width="520" height="262" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="118" width="93" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="253" y="119" width="42" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="274.0" y="132.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Flux</text>
  <line x1="296" y1="123" x2="296" y2="135" stroke="#334155" strokeWidth="1"/>
  <text x="320.5" y="132.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Liste</text>
  <rect x="660" y="118" width="88" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="704.0" y="132.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">−  100%  +</text>
  <rect x="252" y="216" width="60" height="24" rx="12.0" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="282.0" y="231.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Début</text>
  <line x1="312" y1="228" x2="342" y2="228" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#svc-flow)"/>
  <circle cx="326" cy="228" r="7" fill="#0f172a" stroke="#4a9eff" strokeWidth="1"/>
  <text x="326" y="231.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="344" y="202" width="96" height="52" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="354" y="217" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">REQUÊTE</text>
  <text x="354" y="232" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">customer</text>
  <text x="354" y="245" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">customers_get</text>
  <line x1="440" y1="228" x2="460" y2="228" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#svc-flow)"/>
  <rect x="462" y="202" width="100" height="52" rx="8" fill="rgba(255,255,255,0.03)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="472" y="217" fill="#4a9eff" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CONDITION</text>
  <text x="472" y="232" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">plafond dépassé ?</text>
  <text x="472" y="245" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">amount &gt; limit</text>
  <line x1="562" y1="218" x2="586" y2="178" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#svc-flow)"/>
  <line x1="562" y1="238" x2="586" y2="288" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#svc-flow)"/>
  <text x="558" y="192" fill="#fb923c" fontSize="8" fontFamily="system-ui, sans-serif">Vrai</text>
  <text x="558" y="272" fill="#4ade80" fontSize="8" fontFamily="system-ui, sans-serif">Faux</text>
  <rect x="588" y="152" width="96" height="52" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="598" y="167" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MESSAGE</text>
  <text x="598" y="182" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">refuser</text>
  <text x="598" y="195" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">plafond atteint</text>
  <rect x="588" y="262" width="96" height="52" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="598" y="277" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">POINT D'ACCÈS</text>
  <text x="598" y="292" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">reserve</text>
  <text x="598" y="305" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">erp.reserve_credit</text>
  <line x1="684" y1="178" x2="698" y2="222" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#svc-flow)"/>
  <line x1="684" y1="288" x2="698" y2="234" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#svc-flow)"/>
  <rect x="688" y="216" width="64" height="24" rx="12.0" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="720.0" y="231.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Réponse</text>
  <rect x="772" y="108" width="188" height="262" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="784" y="128" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">L'ÉTAPE</text>
  <text x="784" y="152" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REQUÊTE</text>
  <rect x="784" y="158" width="164" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="794" y="172.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">crm.customers_get ▾</text>
  <text x="784" y="202" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENTRÉES</text>
  <rect x="784" y="208" width="164" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="794" y="222.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">ID = INPUT.customer</text>
  <text x="784" y="258" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Les étapes suivantes lisent</text>
  <text x="784" y="274" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">customer.first_row.LIMIT</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne par service</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">étapes, entrées, points d'accès</text>
  <line x1="200" y1="77.0" x2="240" y2="77" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svc-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le + d'un lien</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ajoute une étape à cet endroit</text>
  <line x1="200" y1="307.0" x2="324" y2="236" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svc-arrow)"/>
  <rect x="20" y="345" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="360" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une condition bifurque</text>
  <text x="30" y="373" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">voies Vrai et Faux</text>
  <line x1="200" y1="362.0" x2="510" y2="254" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svc-arrow)"/>
  <rect x="1000" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécuter</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">réponse + étapes exécutées</text>
  <line x1="1000" y1="47.0" x2="826" y2="66" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svc-arrow)"/>
  <rect x="1000" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exposer</text>
  <text x="1010" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">devient un point d'accès d'API</text>
  <line x1="1000" y1="97.0" x2="913" y2="77" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svc-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">L'étape choisie</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">modifiée à côté du flux</text>
  <line x1="1000" y1="217.0" x2="960" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svc-arrow)"/>
</svg>

---

## La liste \{#list\}

Chaque ligne donne le service, son nombre d'étapes et d'entrées, et les points d'accès qu'il sert déjà (`POST /api/http/<connecteur>/<point d'accès>`). **Nouveau service** en ajoute un. Sur une ligne : **Exécuter**, **Exposer**, **Rechercher les usages**, **Rechercher les dépendances**, **Renommer**, **Cloner**, **Supprimer**. Un clic ouvre son concepteur.

---

## Le flux \{#flow\}

Le concepteur s'ouvre sur la vue **Flux** ; **Liste** présente les étapes sous forme de liste.

Le flux se lit de gauche à droite : **Début**, qui montre les entrées ; une carte par étape ; **Réponse**, qui montre ce que le service retourne. Une **condition** se divise en deux voies, **Vrai** et **Faux** ; une **boucle** ou un **groupe** encadre ses propres étapes. La disposition découle de la structure du service : rien n'est placé à la main. Un flux long continue sur la ligne suivante, et le zoom (− / % / +) est mémorisé sur le poste.

- **Un clic sur une carte** ouvre l'étape dans le panneau latéral : sa cible, la correspondance de ses entrées.
- **Le + d'un lien** ajoute une étape à cet endroit.
- **Sans sélection**, le panneau modifie *Le service* : **Libellé**, **Description**, **Entrées** (**Ajouter une entrée**).

| Étape | Rôle |
|---|---|
| **Requête** | Exécute une requête d'un connecteur. |
| **Point d'accès** | Appelle un point d'accès d'API. Si le point d'accès indique où se trouvent ses lignes, les étapes suivantes les lisent par nom de colonne : `<étape>.first_row.<COLONNE>`, `<étape>.rows`. |
| **Fonction** | Appelle une fonction du plugin d'une application. |
| **Service** | Appelle un autre service. |
| **Condition** | Bifurque selon un test. |
| **Pour chaque** | Répète ses étapes pour chaque ligne. |
| **Message**, **Notification** | Informe l'utilisateur, ou envoie une notification. |
| **Réponse** | Indique ce que le service retourne. |

Une étape lit les entrées du service par `INPUT.<nom>` et le résultat d'une étape précédente par le nom de cette étape.

---

## Exécuter \{#run\}

**Exécuter** essaie le service tel qu'il est enregistré : un champ par entrée (sa valeur par défaut en indication), puis le résultat — *Terminé en N ms*, la **Réponse** qu'il donnerait comme point d'accès, et les **Étapes exécutées**.

:::warning[Les étapes s'exécutent réellement]
Une étape qui écrit, écrit. Un service qui modifie des données s'essaie sur un environnement de test, ou avec des entrées prévues pour cela.
:::

---

## Exposer comme point d'accès \{#expose\}

**Exposer** crée un point d'accès d'API servi par le service. Un écran, une action, une tâche, l'assistant ou un appelant extérieur l'appelle ensuite comme n'importe quel point d'accès.

| Champ | Signification |
|---|---|
| **Sur le connecteur** | Un connecteur d'API de l'installation, ou celui du Studio — `studio`, créé à la première utilisation. |
| **Nom du point d'accès** | L'identifiant du service par défaut. |
| **Il modifie des données** | À cocher si une étape écrit : l'assistant demande alors avant de l'appeler. |

Les entrées du service deviennent les paramètres du point d'accès. La fenêtre répond avec l'adresse et la permission : *Exposé : POST … — permission `api:<connecteur>:<point d'accès>`*.

**Le service s'exécute avec la permission du point d'accès** : qui peut appeler le point d'accès exécute toutes ses étapes, sans nouveau contrôle étape par étape — un service composé s'accorde en bloc. Le périmètre de données de l'appelant s'applique toujours à chaque requête. Ce que le service retourne est la réponse ; ses messages l'accompagnent ; une étape en échec est l'erreur du point d'accès.

---

## Où un service est utilisé \{#usage\}

**Rechercher les usages** liste les écrans qui appellent le service et les points d'accès qu'il sert ; un renommage les suit. Dans le [Studio](../studio.md), un service sélectionné éclaire les écrans qui l'appellent. Un service voyage dans un [paquet](./packages.md) avec les écrans et les points d'accès qui en ont besoin.

---

## Conseils & bonnes pratiques \{#tips\}

- Donner à chaque étape un nom qui dit ce qu'elle contient (`client`, `commandes_ouvertes`) : les étapes suivantes la lisent par ce nom.
- Placer les contrôles en premier et les écritures en dernier : une condition qui arrête tôt ne laisse rien à moitié fait.
- Exposer un service quand le même enchaînement sert à un écran **et** à une tâche ou à un système extérieur : une définition, une permission.
- Couvrir un service exposé par un cas de [test](./tests.md).

---

## Voir aussi

- [Vue d'ensemble et Studio](../studio.md) · [Points d'accès d'API](./api-endpoints.md) · [Tests](./tests.md)
- [Actions et cycle de vie](./screens/actions-and-lifecycle.md) — les actions d'un écran.
