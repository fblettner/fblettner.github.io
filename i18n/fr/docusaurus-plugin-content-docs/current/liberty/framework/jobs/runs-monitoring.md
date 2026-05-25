---
title: Exécutions et supervision
description: "Où observer l'exécution d'un job Nomaflow : la page Paramètres → Jobs, le tableau d'historique d'exécution, le tiroir de détail avec la timeline par étape, la queue de log en direct diffusée via Socket.IO, le parcours d'abandon et la politique de rétention."
keywords: [Liberty Framework, Nomaflow, run history, monitoring, log tail, Socket.IO, abort, ly2_job_runs, ly2_step_runs, retention]
---

# Exécutions et supervision

Chaque exécution Nomaflow laisse une trace : une ligne dans `ly2_job_runs`, une ligne par étape dans `ly2_step_runs`, chaque ligne de log dans `ly2_job_logs`. La page *Paramètres → Jobs* est l'endroit où cette trace est parcourue, filtrée et diffusée en direct.

Cette page décrit le tableau d'historique d'exécution, le tiroir de détail par exécution, la queue de log en direct, le parcours d'abandon et la politique de rétention.

---

## Vue d'ensemble

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Exécutions de jobs · 7 derniers jours</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Job ▾</span>
      <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Statut ▾</span>
      <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>↻ Rafraîchir</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '90px 1fr 100px 110px 100px 80px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div>Id d'exécution</div><div>Job</div><div>Statut</div><div>Démarré</div><div>Durée</div><div>Déclencheur</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '90px 1fr 100px 110px 100px 80px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>r-1842</div>
    <div>billing-nightly-rebuild</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(74,158,255,0.55)', background: 'rgba(74,158,255,0.10)', color: '#60a5fa'}}>running</span></div>
    <div>02:00:03</div>
    <div>2m 14s ⏱</div>
    <div>cron</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '90px 1fr 100px 110px 100px 80px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>r-1841</div>
    <div>crm-hourly-sync</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.10)', color: '#4ade80'}}>succeeded</span></div>
    <div>02:00:00</div>
    <div>0m 38s</div>
    <div>cron</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '90px 1fr 100px 110px 100px 80px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>r-1840</div>
    <div>ad-sync</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(255,69,58,0.55)', background: 'rgba(255,69,58,0.10)', color: '#f87171'}}>failed</span></div>
    <div>01:30:00</div>
    <div>1m 02s</div>
    <div>cron</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '90px 1fr 100px 110px 100px 80px', padding: '10px 14px', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>r-1839</div>
    <div>billing-monthly-close</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(94,94,94,0.55)', background: 'rgba(94,94,94,0.10)', color: '#94a3b8'}}>skipped</span></div>
    <div>00:00:00</div>
    <div>—</div>
    <div>cron</div>
  </div>
</div>

---

## Le tableau des exécutions

| Colonne | Source |
|---|---|
| **Id d'exécution** | Le `run_id` unique (par exemple `r-1842`). Cliquable — ouvre le tiroir de détail. |
| **Job** | Nom du job. La pastille de filtre en haut restreint à un seul job. |
| **Statut** | Pastille colorée — voir [statuts](#statuts) ci-dessous. |
| **Démarré** | Quand l'exécution a commencé (heure locale de l'opérateur). Triable. |
| **Durée** | Démarré → terminé (ou « en cours » avec un compteur en direct pour les exécutions en cours). |
| **Déclencheur** | `cron`, `manual`, `api`, `cli` — et au survol l'identifiant utilisateur quand le déclenchement est manuel. |

Le tableau affiche par défaut les **7 derniers jours**, triés par *Démarré* décroissant. La barre d'outils donne accès à :

- Une liste déroulante **Job** — restreindre à un seul job.
- Une liste déroulante **Statut** — sélection multiple (`running`, `succeeded`, `failed`, `aborted`, `skipped`, `partial-success`).
- Un sélecteur de **plage de dates** — semaine / mois / personnalisée.
- Un bouton **↻ Rafraîchir** — qui rafraîchit aussi automatiquement toutes les 5 s tant qu'au moins une exécution est en `running`.

---

## Statuts

| Statut | Signification | Final ? |
|---|---|---|
| `running` | L'exécution est en cours. | Non |
| `succeeded` | Chaque étape s'est terminée sans erreur. | Oui |
| `failed` | Une étape a épuisé ses relances et a arrêté le job. | Oui |
| `partial-success` | Certaines étapes ont échoué avec `continue_on_error = true` ; le job a poursuivi. | Oui |
| `aborted` | Un opérateur a cliqué sur *Abandonner* ou le `timeout_seconds` au niveau du job s'est déclenché. | Oui |
| `skipped` | Le job devait se déclencher mais une dépendance / un verrou d'instance unique l'en a empêché. | Oui |

La colonne `reason` d'une ligne (visible dans le tiroir de détail) porte la précision — `dependency-failed: <name>`, `single-instance, previous still running`, `timeout after 1800s`, etc.

---

## Le tiroir de détail d'exécution

Cliquer sur une ligne ouvre un tiroir à droite avec trois sections.

### En-tête

- Id d'exécution, nom du job, pastille de statut, horodatages de démarrage / fin, durée, déclencheur.
- Un bouton **Abandonner** (visible uniquement quand `status = running`, uniquement pour les utilisateurs portant `job:<name>:abort` ou le global `job:*`).
- Un bouton **Relancer** (visible quand le `status` est final) qui déclenche une nouvelle exécution avec le même instantané de `params`.

### Timeline par étape

Une liste verticale, une entrée par étape dans l'ordre déclaré :

| Champ | Source |
|---|---|
| **Nom de l'étape** + **pastille de type** | Depuis `jobs.toml`. |
| **Pastille de statut** | `succeeded` / `failed` / `running` / `skipped`. |
| **Durée** | Démarré → terminé (compteur en direct pendant l'exécution). |
| Instantané d'**entrée** | La table `params` / `kwargs` après toutes les substitutions `${...}`. Utile quand la même étape s'est exécutée différemment d'une relance à l'autre. |
| Instantané de **sortie** | Le résultat de l'étape — `rows_affected`, `row_count`, les 100 premières lignes pour SQL, le corps complet de la réponse pour HTTP (tronqué à 100 Kio). |
| **Erreur** | Quand `status = failed`, la classe d'exception, le message et la trace pertinente. |

Chaque entrée d'étape se déplie en place pour afficher l'entrée / la sortie / l'erreur.

### Queue de log en direct

Un panneau défilant sous la timeline diffuse chaque ligne de log de l'exécution — à la fois les événements structurés du framework (`step started`, `step finished`, `retry triggered`) et les messages émis par les appels d'étape `python` via `logging.getLogger(__name__)`.

Le panneau est **diffusé via Socket.IO** tant que l'exécution est en cours ; une fois l'exécution terminée, il affiche les lignes de log enregistrées depuis `ly2_job_logs`. Chaque ligne porte :

- Un horodatage (précision à la ms dans le fuseau du serveur, rendu dans le fuseau de l'opérateur).
- Un niveau (DEBUG / INFO / WARNING / ERROR), avec code couleur.
- Le nom du logger (par exemple `billing.invoicing`).
- Le message.

La barre d'outils en haut du panneau donne accès à :

- Un **filtre de niveau** — n'afficher que `WARNING` et `ERROR`, par exemple.
- Une zone de **recherche** — filtre par sous-chaîne sur le message.
- Un bouton bascule **↻ Suivre** — défilement automatique en bas à mesure que les nouvelles lignes arrivent.
- Un bouton **Télécharger** — exporte le log complet sous forme de fichier `.log`.

---

## Abandonner une exécution

Cliquer sur **Abandonner** dans le tiroir de détail :

1. Marque l'exécution avec `status = aborting` en base.
2. Envoie un `asyncio.CancelledError` dans la tâche d'étape en cours.
3. L'appel de l'étape (ou l'exécuteur d'étape du framework) réagit :
   - Les requêtes SQL sont annulées au niveau du pilote (`asyncpg` / `oracledb` prennent tous deux en charge l'annulation).
   - Les appels HTTP sont avortés (la connexion sous-jacente est fermée).
   - Les appels d'étape `python` qui utilisent des points d'attente `await` voient le `CancelledError` ; les appels synchrones vont jusqu'au bout de l'itération courante.
4. L'étape est enregistrée avec `status = aborted`.
5. Le job est enregistré avec `status = aborted` et aucune étape suivante ne s'exécute.

Un appel qui attrape silencieusement `CancelledError` peut empêcher l'abandon de prendre effet — à éviter dans le code de plugin. Le comportement par défaut (laisser l'exception se propager) est le bon.

---

## Rejouer / Relancer

Le bouton **Relancer** sur une exécution terminée crée une nouvelle exécution avec :

- Le même instantané de `params`.
- Un nouveau `run_id`.
- `triggered_by = "user:<operator>"` et `replay_of = <original run_id>`.

Le lien `replay_of` est visible dans le tiroir de détail sous la forme « ↻ Rejeu de r-1840 ». Cela est utile pour les jobs nocturnes qui ont échoué à cause d'un incident passager et qui ont besoin d'une nouvelle tentative sans attendre le prochain déclenchement cron.

---

## API REST

| Endpoint | But |
|---|---|
| `GET  /admin/jobs/runs?job=<name>&status=<list>&from=&to=&limit=` | Tableau des exécutions — paginé, filtré. |
| `GET  /admin/jobs/runs/<run_id>` | Une exécution avec la liste complète des étapes et les 1000 dernières lignes de log. |
| `POST /admin/jobs/<name>/run` | Déclencher une exécution manuelle. Le corps accepte des surcharges de `params`. |
| `POST /admin/jobs/runs/<run_id>/abort` | Abandonner une exécution en cours. |
| `POST /admin/jobs/runs/<run_id>/replay` | Relancer avec les mêmes params. |
| `GET  /admin/jobs/runs/<run_id>/logs?level=&follow=` | Diffuser la queue de log. `follow=true` bascule sur Socket.IO. |

Chaque endpoint demande la permission `job:<name>` pour le job ciblé (ou `job:*`). L'endpoint de liste ne retourne que les exécutions des jobs que l'appelant peut voir — filtré automatiquement.

---

## Rétention

Les lignes d'exécution et les lignes de log sont purgées par un job interne (`_default/cleanup-job-history`) qui se déclenche une fois par jour à 03:00. La politique de rétention :

| Réglage | Défaut | Signification |
|---|---|---|
| `[jobs] history_days` | `90` | Les lignes d'exécution plus anciennes que N jours sont supprimées. Les lignes d'étape et de log suivent. |
| `[jobs] history_keep_failed` | `true` | Les exécutions `failed` / `aborted` sont conservées au-delà de la fenêtre de rétention — elles alimentent souvent une revue d'incident. |
| `[jobs] log_truncate_kb` | `100` | Les lignes de log au-delà de N Kio cumulés par exécution sont tronquées (le message de troncature le dit explicitement). |

Pour une piste d'audit à long terme, router le flux de log vers votre agrégateur de logs central (Loki, Splunk, Datadog) via `LIBERTY_LOG_JSON=1` et considérer l'historique interne du framework comme un cache opérationnel.

---

## Le tableau de bord Technique

L'onglet *Paramètres → Technique* (soumis à `settings:technical`) affiche une vue d'ensemble en direct :

| Panneau | Contenu |
|---|---|
| **Exécutions en cours** | Chaque job en `status = running`, avec le temps écoulé et l'étape courante. Cliquer sur une ligne ouvre le tiroir de détail. |
| **Échecs récents** | Les 20 dernières exécutions `failed` / `aborted`. |
| **Pouls de l'ordonnanceur** | Dernier déclenchement, prochain déclenchement, profondeur de la file. Utile pour confirmer que l'ordonnanceur est vivant un jour calme. |
| **Statistiques de pool** | Connexions ouvertes / inactives / utilisées par pool — fait apparaître une saturation de pool qui bloquerait sinon les jobs. |

Ce tableau de bord est le premier endroit où regarder quand « un job ne s'est pas exécuté » — le pouls de l'ordonnanceur indique si le framework a même essayé.

---

## Conseils et bonnes pratiques

- **Surveiller le panneau *Échecs récents*.** Un échec isolé par semaine est normal ; une oscillation (un échec par nuit) mérite enquête.
- **Utiliser `log.warning()` pour « ok mais inhabituel ».** Une ligne qui prend 10× plus de temps que d'habitude mérite un WARNING dans le log, pas du silence. Le filtre de niveau dans la queue de log les rend faciles à trouver.
- **Marquer l'exécution avec un identifiant porteur de sens.** Une étape `python` qui logge `log.info("billing.invoicing.run period=2026-05 drafts=42 dry_run=False")` rend l'historique d'exécution facile à rechercher.
- **Ne pas garder votre unique historique dans le framework.** Transférer le log JSON vers votre agrégateur — les incidents côté installation ne devraient pas emporter avec eux la piste d'audit.
- **Abandonner, ne pas tuer.** Utiliser le bouton *Abandonner* plutôt que `kill -9` sur le processus du framework — le parcours d'abandon enregistre la raison et préserve l'état partiel pour le post-mortem.

---

## Pour aller plus loin

- [`jobs.toml`](./jobs-toml.md) — la déclaration de job qui pilote chaque exécution.
- [Types d'étape](./step-types.md) — ce que chaque étape enregistre dans son résultat.
- [Référence REST API → Jobs](../rest-api.md#jobs) — le contrat complet des endpoints.
