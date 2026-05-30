---
title: Jobs — Présentation de Nomaflow
description: "Nomaflow est l'ordonnanceur de jobs in-process embarqué dans Liberty Framework : jobs déclaratifs en TOML, déclencheurs cron et manuels, un petit ensemble de types d'étape (sql_query, sql_copy, python, http, ldap_sync), relance / backoff, historique d'exécution et flux de log en direct via Socket.IO."
keywords: [Liberty Framework, Nomaflow, jobs, ETL, scheduler, cron, in-process, sql_query, sql_copy, python, http, ldap_sync, retry, run history]
---

# Jobs — Nomaflow

**Nomaflow** est l'**ordonnanceur de tâches in-process** du framework. Les tâches sont déclarées en TOML, se déclenchent sur planification cron ou à la demande, s'exécutent comme une séquence linéaire d'étapes typées et enregistrent leur historique d'exécution dans le pool `default`. Tout le moteur se trouve dans le processus FastAPI — aucun worker séparé, aucun broker, aucun démon compagnon — si bien que le même `./start.sh` qui sert la SPA planifie et exécute aussi chaque tâche.

Nomaflow vise la glu opérationnelle dont la plupart des installations ont besoin : ETL nocturnes, synchronisations horaires, imports LDAP, envois de rapports planifiés, reconstructions ponctuelles manuelles. Pour des charges qui demandent une exécution distribuée, du parallélisme à l'échelle de l'heure ou de la sémantique DAG, un orchestrateur externe reste l'outil approprié.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="nf-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="nf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="40" width="920" height="300" rx="14" fill="url(#nf-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow — comment un job s'exécute</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="180" height="60" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="150" y="124" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉCLENCHEUR</text>
  <text x="150" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">cron · manuel · API</text>

  <rect x="280" y="100" width="180" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="370" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MOTEUR D'EXÉCUTION</text>
  <text x="370" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">séquence linéaire d'étapes</text>

  <rect x="500" y="100" width="180" height="60" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="590" y="124" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPES D'ÉTAPE</text>
  <text x="590" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">sql_query · sql_copy · python · http · ldap_sync</text>

  <rect x="720" y="100" width="220" height="60" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="830" y="124" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENREGISTRER + DIFFUSER</text>
  <text x="830" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">historique · queue de log · Socket.IO</text>

  <line x1="240" y1="130" x2="280" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#nf-arrow)"/>
  <line x1="460" y1="130" x2="500" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#nf-arrow)"/>
  <line x1="680" y1="130" x2="720" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#nf-arrow)"/>

  <rect x="60" y="200" width="880" height="120" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937" strokeWidth="1"/>
  <text x="76" y="222" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ORDONNANCEUR — APScheduler dans le processus FastAPI</text>
  <text x="76" y="246" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">cron triggers fire at the configured time</text>
  <text x="76" y="266" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">manual / API triggers go through the same dispatch</text>
  <text x="76" y="286" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">retry / backoff policy applies on step failure (per job config)</text>
  <text x="76" y="306" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">run rows persisted in ly2_job_runs + ly2_step_runs</text>
</svg>

---

## Où il se situe

Nomaflow fait **partie du binaire du framework** — aucun processus séparé à installer, configurer ou superviser. Le même worker FastAPI qui sert l'API REST porte l'ordonnanceur et l'exécuteur d'étape. Conséquences :

- **La concurrence** est bornée par le pool de threads du worker + la boucle d'événements asyncio. Une étape SQL attend sur la base, une étape HTTP attend sur le réseau ; les deux sont asynchrones et ne bloquent pas le reste du travail.
- **Le redémarrage interrompt les tâches en cours.** Un déclenchement cron planifié en milieu d'étape est annulé via la politique de nouvelle tentative. Les tâches longues (à l'échelle de l'heure) doivent être conçues pour enregistrer un état intermédiaire ou pour être relançables sans risque.
- **Un ordonnanceur par processus.** Démarrer deux répliques du framework sur la même base déclencherait deux fois chaque cron ; l'ordonnanceur fourni pose un verrou consultatif sur la ligne `ly2_jobs_lock` pour l'empêcher, mais les ops devraient quand même épingler la fonction d'ordonnancement à une seule réplique via `[jobs] scheduler_enabled = true/false`.

Pour les charges qui ne rentrent pas dans ces contraintes, l'API REST du framework permet de déclencher des tâches Nomaflow depuis un orchestrateur externe — Airflow, Dagster, ou même un cron + `curl` ordinaire. Le côté Liberty devient alors un « exécuteur d'étapes structuré avec une UI » plutôt qu'un ordonnanceur.

---

## Une tâche minimale

`plugins/billing/jobs.toml` :

```toml
[[jobs]]
name     = "billing-nightly-rebuild"
app      = "billing"
schedule = "0 2 * * *"          # cron : tous les jours à 02:00
timezone = "Europe/Paris"
enabled  = true

[jobs.retry]
max_attempts = 3
backoff      = "exponential"
initial_delay_seconds = 60

  [[jobs.steps]]
  name      = "refresh-totals"
  type      = "sql_query"
  connector = "billing"
  query     = "refresh-totals:write"

  [[jobs.steps]]
  name      = "rebuild-vat"
  type      = "python"
  callable  = "billing.invoicing:rebuild_vat"
  kwargs    = { period = "${month.previous}" }
```

La tâche se déclenche à 02:00 chaque jour. Les deux étapes s'exécutent dans l'ordre ; un échec sur `refresh-totals` déclenche la politique de nouvelle tentative sur cette étape, pas sur toute la tâche. L'historique d'exécution enregistre l'entrée, la sortie et le minutage de chaque étape.

[`jobs.toml`](./jobs-toml.md) décrit chaque champ. [Types d'étape](./step-types.md) décrit ce que fait chaque `type` et les kwargs qu'il accepte.

---

## Déclencher une tâche

| Déclencheur | Surface | Cas d'usage |
|---|---|---|
| **Planification cron** | `schedule = "0 2 * * *"` dans `jobs.toml`. Cron standard à 5 champs avec un 6e optionnel pour les secondes. | Travail de fond récurrent. |
| **Manuel depuis l'UI** | *Paramètres → Tâches → Lancer maintenant* sur n'importe quelle tâche. L'opérateur peut surcharger `params` pour cette unique exécution. | Reconstructions ponctuelles, envois à la demande. |
| **API REST** | `POST /admin/jobs/<name>/run` avec le JWT de l'opérateur. Le corps accepte des surcharges de `params`. | Orchestrateurs externes, pipelines CI / CD. |
| **CLI** | `liberty-admin job run <name>`. | Scripts shell, travail ad-hoc des opérateurs. |

Chaque déclencheur passe par le même dispatch — même moteur d'étape, même politique de nouvelle tentative, même enregistrement. La source du déclenchement est conservée sur la ligne d'exécution (`triggered_by = "cron" | "user:alice" | "api" | "cli:bob"`).

---

## Types d'étape en un paragraphe

- **`sql_query`** — exécute une requête SQL nommée (lecture ou écriture) sur un connecteur. Le nombre de lignes du résultat est enregistré.
- **`sql_copy`** — diffuse des lignes d'un pool vers un autre, avec conversion de types et bascule de table atomique. Utile pour l'ETL d'une base opérationnelle vers un entrepôt de reporting.
- **`python`** — appelle une fonction Python dans `liberty-apps/plugins/`. La porte de sortie pour tout ce qui ne rentre pas dans les étapes déclaratives.
- **`http`** — appelle un endpoint HTTP / API et transmet la réponse à l'étape suivante.
- **`ldap_sync`** — récupère un sous-arbre d'annuaire, mappe les attributs via un bloc de configuration et fait un upsert vers un connecteur. Remplace les scripts LDAP sur mesure que la plupart des installations finissent par écrire.

Chacun est documenté sous [Types d'étape](./step-types.md) avec la référence complète des kwargs.

---

## Historique d'exécution

Chaque exécution de tâche produit :

- Une **ligne d'exécution** dans `ly2_job_runs` — id, nom de la tâche, started_at, finished_at, statut, triggered_by, instantané des params.
- Une **ligne d'exécution d'étape par étape** dans `ly2_step_runs` — id d'exécution, nom de l'étape, type, started_at, finished_at, statut, instantané d'entrée, instantané de sortie, message d'erreur.
- Un **flux de log** dans `ly2_job_logs` — chaque appel `log.info()` / `log.warning()` / `log.error()` depuis un appel d'étape, plus les événements structurés propres au framework.

La page *Paramètres → Tâches → Exécutions* parcourt l'historique ; le tiroir *Détail d'exécution* affiche la chronologie par étape, les entrées et sorties, la fin de log (diffusée en direct via Socket.IO tant que l'exécution est en cours).

| Statut | Signification |
|---|---|
| `running` | L'exécution est en cours. |
| `succeeded` | Chaque étape s'est terminée avec succès. |
| `failed` | Une étape a levé après épuisement de toutes les nouvelles tentatives. |
| `aborted` | Un opérateur a cliqué sur *Abandonner* — chaque étape en cours est annulée. |
| `skipped` | La tâche devait se déclencher mais son exécution précédente n'était pas terminée (une seule à la fois par tâche). |

La rétention se configure sous `[jobs] history_days` dans `app.toml` (90 jours par défaut) ; les exécutions plus anciennes sont purgées par une tâche de nettoyage intégrée qui se déclenche une fois par jour à 03:00.

---

## Supervision en direct

Un opérateur connecté sur la page *Tâches* reçoit :

- Une ligne qui apparaît dans le panneau *En cours* dès qu'une exécution démarre.
- La liste des étapes qui se remplit en temps réel, à mesure que chaque étape passe de `running` à `succeeded` / `failed`.
- La fin de log diffusée ligne par ligne — le même contenu qu'un `tail -f` sur le serveur, simplement routé via Socket.IO.

La diffusion est **passive** — fermer le navigateur n'annule pas l'exécution. Rouvrir la page reprend l'état en direct depuis le suivi en mémoire.

Pour les opérateurs qui préfèrent le shell, `liberty-admin job logs --follow <run-id>` fait la même chose sur le bus d'événements côté serveur.

---

## Quand utiliser Nomaflow plutôt qu'un orchestrateur externe

| Préférer Nomaflow quand… | Préférer un orchestrateur externe quand… |
|---|---|
| Les charges sont portées par l'installation et ne traversent pas plusieurs services. | Les charges traversent de nombreux services et demandent une vue globale. |
| L'ensemble du pipeline se termine en quelques minutes. | Une seule étape prend des heures. |
| Cron + étapes linéaires + nouvelle tentative suffisent. | Une sémantique DAG, une expansion dynamique de tâches ou du calcul distribué est nécessaire. |
| Un seul outil, une seule UI, un seul flux de log est souhaité. | Airflow, Dagster ou Prefect sont déjà en place pour tout le reste. |
| À défaut, il faudrait écrire à la main un script Python + un timer systemd. | À défaut, il faudrait écrire à la main un CronJob Kubernetes avec des sidecars. |

La plupart des installations se trouvent dans la colonne de gauche ; la colonne de droite commence à compter quand une seule charge dépasse les limites d'un seul serveur.

---

## Conseils et bonnes pratiques

- **Épingler la fonction d'ordonnancement à une seule réplique.** Sur une installation multi-réplique, définir `[jobs] scheduler_enabled = false` sur chaque réplique sauf une. Le verrou consultatif empêche le double-déclenchement même en cas d'oubli, mais le réglage explicite rend la topologie évidente dans les logs.
- **Ne pas placer de travail long dans une étape `python`.** Un calcul de 90 minutes in-process bloque le worker ; le déléguer à une file ou à un processus séparé et laisser l'étape le déclencher.
- **Enregistrer ce qui a été fait, pas ce qui aurait dû l'être.** Une étape qui retourne `{"rows_affected": N}` rend l'historique d'exécution exploitable ; une étape qui retourne `None` est une boîte noire à 3 h du matin.
- **Utiliser `dry_run` sur chaque étape destructrice.** Un kwarg booléen qui bascule l'étape en mode comptage seul permet de déboguer une tâche depuis l'UI sans modifier les données.
- **Ne pas se reposer sur le cron seul pour le travail critique.** Si un échec d'exécution doit alerter quelqu'un, router les événements d'échec de Nomaflow vers le système d'alerte (Slack, OpsGenie, …) via une étape `http` qui poste sur le webhook.

---

## Pour aller plus loin

- [`jobs.toml`](./jobs-toml.md) — la référence TOML complète.
- [Types d'étape](./step-types.md) — ce que fait chaque étape.
- [Exécutions et supervision](./runs-monitoring.md) — la page d'historique d'exécution, le flux de log en direct, le parcours d'abandon.
- [Applications et Plugins → Plugins](../apps/plugins.md) — écrire l'appel Python derrière une étape `python`.
