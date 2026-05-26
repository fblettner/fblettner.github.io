---
title: Concepts
description: "Le modèle mental Nomaflow — tâches, exécutions, étapes, planifications, déclencheurs, nouvelles tentatives, paramètres. Lisez cette page une fois et le reste de la documentation se lira d'un seul trait."
keywords: [Nomaflow, concepts, tâche, exécution, étape, planification, déclencheur, retry, paramètres, niveau de log, Liberty Framework]
---

# Concepts

Nomaflow a un vocabulaire restreint — six concepts sur lesquels repose le reste de la documentation. Lisez cette page une fois et chaque autre page (l'éditeur de tâche, le détail d'exécution, les recettes) se lira d'un seul trait.

---

## Les six briques

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="cn-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="320" rx="14" fill="url(#cn-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Vocabulaire Nomaflow — un seul diagramme</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="86" width="260" height="60" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="170" y="108" fill="#fb923c" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TÂCHE</text>
  <text x="170" y="126" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">id · description · planification</text>
  <text x="170" y="140" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">un workflow défini une seule fois</text>

  <rect x="370" y="86" width="260" height="60" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="500" y="108" fill="#c084fc" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉTAPE</text>
  <text x="500" y="126" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">type · nom · configuration</text>
  <text x="500" y="140" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">une unité de travail dans une tâche</text>

  <rect x="700" y="86" width="260" height="60" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="830" y="108" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PLANIFICATION</text>
  <text x="830" y="126" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">cron + fuseau horaire</text>
  <text x="830" y="140" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">quand la tâche se déclenche</text>

  <rect x="40" y="174" width="260" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="170" y="196" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉCLENCHEUR</text>
  <text x="170" y="214" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">cron · manuel · API</text>
  <text x="170" y="228" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">ce qui a déclenché cette exécution</text>

  <rect x="370" y="174" width="260" height="60" rx="10" fill="rgba(244,114,182,0.08)" stroke="rgba(244,114,182,0.40)" strokeWidth="1"/>
  <text x="500" y="196" fill="#f472b6" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXÉCUTION</text>
  <text x="500" y="214" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">une exécution d'une tâche</text>
  <text x="500" y="228" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">QUEUED → RUNNING → état terminal</text>

  <rect x="700" y="174" width="260" height="60" rx="10" fill="rgba(245,158,11,0.10)" stroke="rgba(245,158,11,0.40)" strokeWidth="1"/>
  <text x="830" y="196" fill="#f59e0b" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMÈTRES</text>
  <text x="830" y="214" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">params partagés + kwargs d'étape</text>
  <text x="830" y="228" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">les données reçues par les étapes</text>

  <rect x="40" y="262" width="920" height="60" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937" strokeWidth="1"/>
  <text x="58" y="282" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMMENT ELLES S'ARTICULENT</text>
  <text x="58" y="302" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Une <tspan fontWeight="600" fill="#cbd5e1">TÂCHE</tspan> contient plusieurs <tspan fontWeight="600" fill="#cbd5e1">ÉTAPES</tspan> et une <tspan fontWeight="600" fill="#cbd5e1">PLANIFICATION</tspan> optionnelle. Chaque <tspan fontWeight="600" fill="#cbd5e1">DÉCLENCHEUR</tspan> crée une <tspan fontWeight="600" fill="#cbd5e1">EXÉCUTION</tspan> ; cette exécution déroule les étapes dans l'ordre, en fusionnant les <tspan fontWeight="600" fill="#cbd5e1">PARAMÈTRES</tspan> de la tâche avec d'éventuelles surcharges par déclenchement.</text>
</svg>

---

## Tâche

Une **tâche** est l'unité que vous définissez et exploitez. Une tâche possède :

| Propriété | Signification |
|---|---|
| **Id** | Identifiant compatible URL (`my-job`, `nomajde-daily-sync`). Utilisé dans les URL d'exécutions et en base comme clé étrangère de chaque exécution. Immuable après création — renommez via export puis recréation. |
| **Description** | Texte libre affiché sur la carte du catalogue. Sert à expliquer *pourquoi* la tâche existe — votre futur vous, à 3 h du matin, vous remerciera. |
| **Planification** | Expression cron optionnelle. Vide = la tâche est **manuelle uniquement**. |
| **Fuseau horaire** | Nom IANA (`Europe/Paris`, `UTC`, `America/New_York`). Le cron est évalué dans ce fuseau — important si le framework tourne en UTC alors que les heures d'activité ne le sont pas. |
| **Tags** | Étiquettes libres — `etl`, `nightly`, `legal`. Affichées sous forme de puces sur la carte du catalogue ; utiles pour grouper dans la barre de recherche. |
| **Activée** | Si `false`, la planification est ignorée. Le ▶ Lancer maintenant manuel reste opérationnel. |
| **Étapes** | Liste ordonnée d'unités de travail (décrites plus bas). Au moins une étape est requise. |
| **Politique de nouvelle tentative** | Optionnelle. S'applique à l'échec d'une **étape**, pas à l'échec de la tâche entière. |
| **Alertes** | Optionnelles. Notifications en cas d'échec ou de détection d'exécution longue. |
| **Paramètres** | Kwargs partagés optionnels (décrits plus bas). |
| **Niveau de log** | `INFO` (par défaut) ou `DEBUG`. Surchargeable par déclenchement dans la fenêtre Exécuter avec paramètres. |

Une tâche est **définie une seule fois** et s'exécute plusieurs fois. Chaque déclenchement constitue une nouvelle **exécution**.

---

## Étape

Une **étape** est une unité de travail dans une tâche. Les étapes s'exécutent **dans l'ordre** — l'étape 2 ne démarre qu'après le succès de l'étape 1. Il n'y a pas de branchement parallèle au sein d'une même tâche (utilisez des tâches enchaînées pour cela, ou une étape Python qui distribue le travail en interne).

Les cinq types d'étape :

| Type | Rôle |
|---|---|
| **`sql_query`** | Exécute une instruction SQL sur un connecteur. Capture le nombre de lignes. |
| **`sql_copy`** | Transfère des lignes d'un connecteur + schéma + table vers un autre. Prend en charge la coercition de types, les insertions par lots, le basculement atomique. |
| **`python`** | Appelle une fonction Python dans vos plugins (`module.path:function`). L'échappatoire — pour tout ce que les étapes déclaratives ne savent pas exprimer. |
| **`http`** | Appelle un endpoint HTTP avec en-têtes / corps optionnels. |
| **`ldap_sync`** | Récupère une sous-arborescence d'annuaire, mappe les attributs via un bloc de configuration, fait un upsert dans un connecteur. |

Chaque étape possède un **nom** (libellé dans l'historique), un **type** et la configuration propre à ce type. Une étape peut être **désactivée individuellement** — utile pour des tâches enchaînées où seules certaines phases doivent être rejouées après l'échec d'un maillon amont.

La référence complète est sur la page [Étapes](./steps.md).

---

## Planification

Une **planification** est une expression cron à 5 ou 6 champs qui indique à Nomaflow quand déclencher automatiquement la tâche.

| Champ | Plage | Exemple |
|---|---|---|
| Minute | `0-59` | `0` = à l'heure pile. |
| Heure | `0-23` | `2` = 02 h 00. |
| Jour du mois | `1-31` | `1` = le 1ᵉʳ. |
| Mois | `1-12` | `*` = tous les mois. |
| Jour de la semaine | `0-6` (dimanche=0) | `1` = lundi. |
| (optionnel) Seconde | `0-59` | rarement utilisé ; à renseigner uniquement si la planification doit se déclencher plus d'une fois par minute. |

Quelques schémas courants :

| Objectif | Cron |
|---|---|
| Tous les jours à 02 h 00. | `0 2 * * *` |
| Tous les lundis à 09 h 30. | `30 9 * * 1` |
| Toutes les heures, à la minute 15. | `15 * * * *` |
| Toutes les 5 minutes. | `*/5 * * * *` |
| Premier jour de chaque mois à minuit. | `0 0 1 * *` |

**Planification vide = manuel uniquement.** La tâche est dans le catalogue, déclenchable via ▶, mais ne se déclenche jamais automatiquement. C'est la forme adaptée aux reconstructions ponctuelles, aux envois pilotés par un opérateur et à tout workflow où « c'est l'humain qui décide du moment ».

La Vue calendrier (un calendrier des prochains déclenchements pour toutes les tâches) et la référence complète de la syntaxe cron sont sur [Tâches → Planifications](./jobs/schedules.md).

---

## Déclencheur

Chaque exécution enregistre **ce qui l'a déclenchée** — le champ `triggered_by` sur la ligne d'exécution.

| Déclencheur | Champ source | Quand |
|---|---|---|
| **`cron`** | Déclenchement automatique selon la planification. | Se produit silencieusement à l'intérieur du framework. |
| **`user:<name>`** | Un opérateur a cliqué sur ▶ Lancer maintenant ou a exécuté avec paramètres. | Le nom de son compte est consigné dans le champ pour la piste d'audit. |
| **`api`** | Un appelant externe a invoqué `POST /admin/jobs/<id>/run`. | Utile quand un planificateur externe (Airflow, Dagster, un pipeline CI) pilote Nomaflow comme exécuteur d'étapes. |
| **`cli`** | Un appel shell. | Chemin d'utilisation avancée / scripting. |

Les quatre passent par la **même chaîne de dispatch** — même moteur d'étapes, même politique de nouvelle tentative, même persistance. Seule la source du déclencheur varie.

---

## Exécution

Une **exécution** est une instance d'exécution d'une tâche. Chaque exécution possède :

| Champ | Ce qu'il porte |
|---|---|
| **Run id** | Un identifiant court (`run_a8c4d`) utilisé dans les URL et les logs. |
| **Job id** | La tâche à laquelle appartient cette exécution. |
| **État** | `QUEUED` → `RUNNING` → `SUCCEEDED` / `FAILED` / `CANCELED`. |
| **Début / Fin** | Horodatages dans le fuseau horaire de l'application. |
| **Déclenchée par** | L'une des valeurs `cron`, `user:<name>`, `api`, `cli`. |
| **Instantané des paramètres** | Les params + op_kwargs fusionnés que l'exécution a réellement utilisés — la réponse d'audit à « quels kwargs cette exécution a-t-elle vus ? » trois semaines plus tard. |
| **Lignes par étape** | Pour chaque étape : nom, type, started_at, finished_at, état, rows_affected, erreur (le cas échéant). |
| **Flux de logs** | Chaque `log.info()` / `log.warning()` / `log.error()` émis par l'étape, en plus des marqueurs de progression du framework. |

L'exécution se termine dans l'un de ces quatre états :

| État | Signification |
|---|---|
| **`SUCCEEDED`** | Toutes les étapes se sont exécutées et ont rendu la main sans lever d'exception. |
| **`FAILED`** | Une étape a levé une exception après épuisement de toutes les nouvelles tentatives. Les étapes restantes ne se sont pas exécutées. |
| **`CANCELED`** | Un opérateur a cliqué sur **✕ Annuler** pendant que l'exécution était en cours. Les étapes en cours effectuent un rollback quand elles le peuvent. |
| **`QUEUED`** | Le dispatcher a accepté l'exécution mais celle-ci n'a pas encore démarré — en pratique, visible au plus quelques millisecondes. |

La page **Détail d'exécution** affiche la chronologie par étape, les entrées et sorties, ainsi que le flux de logs en direct. Voir [Exécutions → Historique](./runs/history.md).

---

## Paramètres

Les paramètres sont les données que les étapes reçoivent à l'exécution. Il existe deux couches :

| Couche | Où elle réside | Rôle |
|---|---|---|
| **`params` au niveau tâche** | Section dans l'éditeur de tâche. | Valeurs **partagées entre toutes les étapes** — typiquement : `apps_id`, `source_connector`, `target_connector`. |
| **`op_kwargs` au niveau étape** | À l'intérieur de chaque étape Python. | Valeurs **propres à une étape** — typiquement : un drapeau spécifique à l'étape, un paramètre de requête. |

Au moment de l'exécution, le runner **fusionne** les deux : les params au niveau tâche sont transmis d'abord, les op_kwargs au niveau étape les surchargent en cas de conflit de clé. Ainsi un `target_connector = "nomasx1"` défini globalement au niveau tâche peut être surchargé dans une étape par `target_connector = "nomasx1-backup"`.

### Surcharges par déclenchement

La **fenêtre Exécuter avec paramètres** (ouverte par ▶ Lancer maintenant quand une tâche a des params, des op_kwargs ou plusieurs étapes) permet à l'opérateur de modifier l'une ou l'autre de ces valeurs pour **un seul déclenchement**, sans toucher à la définition de la tâche. Le formulaire est typé — les booléens s'affichent en cases à cocher, les nombres en champs numériques, et les clés se terminant par `_connector` proposent un sélecteur de connecteur (cela évite les coquilles d'une saisie libre).

```
Ordre des couches à l'exécution (le suivant gagne en cas de conflit) :
  1. job.params              ← enregistré dans l'éditeur de tâche
  2. step.op_kwargs          ← enregistré par étape
  3. surcharge params (fenêtre)   ← un seul déclenchement
  4. surcharge op_kwargs (fenêtre) ← un seul déclenchement
```

Cas d'usage typique : une tâche `nomasx1-security` avec `[params] apps_id = 10` s'exécute toutes les nuits sur la production ; l'opérateur ouvre la fenêtre et surcharge `apps_id = 99` pour exécuter la même tâche sur un tenant bac à sable, sans toucher au TOML.

---

## Politique de nouvelle tentative

Une politique de nouvelle tentative s'applique aux **étapes**, pas à la tâche entière.

| Champ | Signification |
|---|---|
| **`attempts`** | Nombre total d'essais (1 = aucune nouvelle tentative). 2 = essai initial + une nouvelle tentative. |
| **`backoff`** | `fixed` (attente constante) ou `exponential` (attente doublée à chaque fois). |
| **`base_seconds`** | Attente avant la première nouvelle tentative. Avec `exponential`, la deuxième attente est doublée, la troisième quadruplée. |

Si l'étape 1 a attempts = 3 et échoue trois fois, l'**exécution** passe à `FAILED` — les étapes restantes ne s'exécutent pas. Si l'étape 1 réussit et que l'étape 2 échoue trois fois, l'effet de l'étape 1 reste validé (Nomaflow ne propose pas de rollback à l'échelle de l'exécution — concevez des étapes idempotentes).

La valeur par défaut est **aucune nouvelle tentative** (`attempts = 1`). Pour les étapes qui touchent au réseau (HTTP, LDAP), `attempts = 3` avec un backoff `exponential` est le réglage le plus courant.

---

## Niveau de log

Verbosité des logs pour une exécution. `INFO` (par défaut) fournit un signal de niveau opérateur — nombres de lignes, marqueurs de progression métier. `DEBUG` émet en plus le SQL complet de chaque requête — utile pour diagnostiquer une exécution précise.

Deux façons de le régler :

- **Par tâche** dans l'éditeur → s'applique à chaque déclenchement.
- **Par déclenchement** dans la fenêtre Exécuter avec paramètres → uniquement pour cette exécution.

Le réglage `DEBUG` est destiné à l'**investigation**, pas au régime nominal — les logs de debug sont volumineux et le framework les conserve sur les mêmes 90 jours que les logs INFO ; une tâche oubliée en DEBUG peut faire enfler la table de logs de façon perceptible.

---

## Alertes

Le bloc **alertes** d'une tâche route les événements d'échec (et d'exécution longue) vers les canaux de notification du framework.

| Champ | Signification |
|---|---|
| **`on_failure`** | Quand `true`, une exécution FAILED émet une alerte. Par défaut `true` dès qu'un bloc d'alertes est déclaré. |
| **`on_long_run_minutes`** | Si l'exécution est encore en cours après N minutes, une alerte est émise. L'exécution se poursuit — il s'agit d'un signal, pas d'un abandon. |
| **`recipients`** | Identifiants propres à un canal (handles Slack, adresses e-mail, identifiants de webhooks) — ils surchargent les destinataires par défaut du framework. |

Les transports eux-mêmes (espace de travail Slack, serveur SMTP, URL des webhooks) sont configurés **une seule fois au niveau du framework** ; la tâche se contente de choisir les destinataires. Voir [Notifications](./notifications.md) pour le câblage.

---

## Comment elles s'articulent — un exemple concret

Vous définissez une tâche `nightly-reporting-refresh` :

```
JOB nightly-reporting-refresh
├── description : "rafraîchir les vues matérialisées de reporting depuis la base OLTP"
├── schedule : "0 2 * * *"  (fuseau horaire Europe/Paris)
├── tags : [etl, nightly]
├── params : { target_connector: "reporting" }
├── retry : { attempts: 2, backoff: fixed, base_seconds: 60 }
└── steps :
    1. refresh-orders     (sql_query, connecteur "reporting")
    2. refresh-customers  (sql_query, connecteur "reporting")
    3. send-summary       (python,    callable "reports:summary")
```

Chaque nuit à 02 h 00 heure de Paris, le planificateur crée une nouvelle **exécution** de `nightly-reporting-refresh`. L'exécution déroule l'étape 1 — si la requête SQL échoue, le runner attend 60 secondes et réessaie une fois avant de déclarer l'étape FAILED. En cas de succès, l'étape 2 démarre. Puis l'étape 3.

Lorsque l'étape 3 s'exécute, la fonction Python reçoit `target_connector="reporting"` depuis les `params` de la tâche, ainsi que tout ce qui figure dans ses propres `op_kwargs`. La fonction émet `log.info("summary email sent")` — cette ligne arrive dans le flux de logs de l'exécution.

L'opérateur ouvre la page **Exécutions** le lendemain matin, voit l'exécution avec un badge vert SUCCEEDED, clique dessus, voit trois coches vertes et le journal. Tout ce qu'on voudrait savoir sur le rafraîchissement de la nuit précédente tient sur un seul écran.

---

## Pour aller plus loin

- [Tâches → Catalogue](./jobs/catalog.md) — la page Tâches, chaque action.
- [Tâches → Créer une tâche](./jobs/create.md) — le pas à pas de l'éditeur.
- [Étapes](./steps.md) — ce que fait chaque type d'étape, les champs acceptés.
- [Exécutions → Historique](./runs/history.md) — la page Détail d'exécution.
