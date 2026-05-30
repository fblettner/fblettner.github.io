---
title: Plugins
description: "Comment écrire du code Python personnalisé que le framework appelle — appels d'étape de job Nomaflow, validateurs de mot de passe, hooks de dispatch. Déposer un module Python sous liberty-apps/plugins/, le référencer par son chemin d'import depuis le TOML, le framework câble sys.path et l'appelle avec le contexte d'exécution."
keywords: [Liberty Framework, plugins, custom Python, callable, jobs, hooks, password validator, sys.path, liberty-apps, plugins folder]
---

# Plugins

Le moteur d'étape de job, le validateur de mot de passe et quelques autres points d'extension du framework acceptent des **références d'appel** de la forme `"module.path:function"`. La fonction est du Python ordinaire ; le framework l'importe paresseusement à la première utilisation et l'appelle avec le contexte d'exécution sous forme d'arguments nommés.

C'est le **seul** endroit où une installation client exécute du code personnalisé — le reste de la configuration est purement déclaratif. Utiliser les plugins pour ce que le TOML ne peut pas exprimer : transformations sur mesure, particularités spécifiques à un ERP, intégrations avec des systèmes externes.

---

## Vue d'ensemble

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>OÙ ILS SE TROUVENT</div>
    <div style={{fontSize: '12px'}}><code>liberty-apps/plugins/&lt;package&gt;/</code> — ajouté à <code>sys.path</code> au démarrage.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>RÉFÉRENCÉS DEPUIS</div>
    <div style={{fontSize: '12px'}}>TOML — <code>callable = "billing.invoicing:run"</code></div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>SIGNATURE</div>
    <div style={{fontSize: '12px'}}><code>def run(**ctx) -&gt; dict \| None</code> — synchrone ou <code>async def</code>.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>POINTS D'EXTENSION</div>
    <div style={{fontSize: '12px'}}>Étape <code>python</code> · validateur de mot de passe · hooks de dispatch</div>
  </div>
</div>

---

## Arborescence

Un plugin est un package Python ordinaire sous `liberty-apps/plugins/` :

```text
liberty-apps/
└── plugins/
    └── billing/
        ├── __init__.py        ← marqueur de package
        ├── invoicing.py       ← appels d'étape
        ├── adjustments.py
        └── README.md
```

Le framework ajoute `liberty-apps/plugins/` à `sys.path` au démarrage (quand `LIBERTY_APPS_DIR` est défini ; sans `LIBERTY_APPS_DIR`, c'est `liberty-next/plugins/`). Le package est alors importable sous le nom `billing.invoicing`, comme un module Python normal.

### Package ou fichier unique

```text
plugins/
├── billing/                    ← package — multi-module, recommandé
│   ├── __init__.py
│   ├── invoicing.py
│   └── adjustments.py
└── ad_sync.py                  ← module unique — pratique pour un utilitaire ponctuel
```

Les deux fonctionnent. Les packages passent mieux à l'échelle au fur et à mesure que les fonctionnalités s'ajoutent ; les modules uniques sont pratiques quand une fonction tient dans un fichier.

---

## Écrire un appel

La forme de référence est :

```python
# plugins/billing/invoicing.py
from __future__ import annotations

import logging
from typing import Any

log = logging.getLogger(__name__)


def run(*, period: str, dry_run: bool = False, **ctx: Any) -> dict:
    """Re-issue every draft invoice for the given period.

    Args:
        period:   YYYY-MM the job is running for.
        dry_run:  if True, count but don't write.
        ctx:      every other key the framework injects (see below).

    Returns:
        Step result dict — surfaced in the run history.
    """
    connectors = ctx["connectors"]                     # type: ConnectorRegistry
    billing    = connectors.sql("billing")

    drafts = billing.run("drafts-for-period", period=period)
    log.info("billing.invoicing.run period=%s drafts=%d dry_run=%s", period, len(drafts), dry_run)

    if dry_run:
        return {"rows_affected": 0, "matched": len(drafts)}

    inserted = 0
    for draft in drafts:
        billing.run("issue-invoice:write", id=draft["id"])
        inserted += 1

    return {"rows_affected": inserted}
```

| Élément | Notes |
|---|---|
| **`*` puis `**ctx`** | Le framework passe toujours le contexte sous forme d'arguments nommés. Le `*` initial force les paramètres explicites (`period`, `dry_run`) à être passés par nom — l'appel depuis le TOML utilise des arguments nommés. |
| **Type de retour** | Un `dict` avec au moins `rows_affected` (int) est la convention. Le dict est enregistré sur l'enregistrement de l'exécution. `None` est autorisé et signifie « aucun compteur ». |
| **Logging** | Utiliser `logging.getLogger(__name__)` — le gestionnaire de log du framework route les messages vers le flux de log d'exécution visible dans l'interface. |
| **Exceptions** | Les lever normalement. Le runner de job intercepte, enregistre l'exception dans l'historique d'exécution et applique la politique de relance / backoff configurée. |

### Appels asynchrones

`async def` est pris en charge et automatiquement attendu par le framework — utile quand le travail se diffuse vers des appels réseau :

```python
import httpx

async def push_to_crm(*, deal_id: int, **ctx) -> dict:
    async with httpx.AsyncClient() as client:
        r = await client.post(f"https://crm.example.com/api/deals/{deal_id}/sync")
        r.raise_for_status()
    return {"rows_affected": 1}
```

Le framework détecte la coroutine via `inspect.iscoroutinefunction` et l'attend sur la boucle d'événements.

---

## Le contexte d'exécution

Chaque appel reçoit un contexte de base composé de clés que le framework fournit. L'ensemble exact dépend du point d'extension :

### Étape `python` de job

| Clé | Type | Description |
|---|---|---|
| `connectors` | `ConnectorRegistry` | Accès à chaque connecteur par son nom — `connectors.sql("billing").run("query-name", **params)`. |
| `pools` | `PoolRegistry` | Accès plus bas niveau aux pools bruts quand une transaction sur plusieurs connecteurs est nécessaire. |
| `job_id` | `str` | L'identifiant du job courant. |
| `run_id` | `str` | L'identifiant d'exécution — utile pour les recoupements avec les lignes de log. |
| `step_name` | `str` | Le nom de l'étape dans le job. |
| `params` | `dict` | Le bloc `params` du job (depuis `jobs.toml`). |
| `step_kwargs` | `dict` | Le bloc `kwargs` propre à l'étape. |
| `previous_step` | `dict \| None` | Le résultat de l'étape précédente (en chaîne). |
| `logger` | `logging.Logger` | Logger préconfiguré qui route vers le flux de log d'exécution. |
| `session_user` | `str` | `"system"` quand le job a été planifié, ou l'identifiant de l'utilisateur en cas de déclenchement manuel. |

Plus chaque clé déclarée dans le bloc `kwargs` de l'étape (TOML — voir [Types d'étape](../../nomaflow/steps.md)).

### Validateur de mot de passe

| Clé | Type | Description |
|---|---|---|
| `username` | `str` | L'utilisateur pour lequel le mot de passe est défini. |
| `password` | `str` | Le mot de passe candidat (en clair). |
| `existing_user` | `dict \| None` | Enregistrement utilisateur s'il existe déjà. `None` sur `create-user`. |

Retourner `None` pour accepter ; lever `ValueError("reason")` pour rejeter.

### Hooks de dispatch (rares)

Une poignée d'événements internes (`screen.before_save`, `screen.after_save`, `connector.before_query`) acceptent des hooks optionnels via le bloc `[hooks]` dans `app.toml`. La signature reflète la charge utile de l'événement ; voir les sources sous `liberty/hooks/` pour la liste complète.

---

## Référencer un appel depuis le TOML

Le format de référence est `"<module.path>:<function>"` :

```toml
# plugins/billing/jobs.toml
[[jobs]]
name     = "reissue-monthly-drafts"
schedule = "0 2 1 * *"        # 02:00 le 1er de chaque mois

  [[jobs.steps]]
  name     = "reissue-drafts"
  type     = "python"
  callable = "billing.invoicing:run"
  kwargs   = { period = "${month.previous}", dry_run = false }
```

Le framework importe `billing.invoicing` paresseusement à la première utilisation, recherche `run`, valide la signature contre le contexte d'exécution plus les kwargs de l'étape, et met en cache l'appel résolu pour les exécutions suivantes.

Un module ou une fonction inexistante fait échouer le **chargement** du job (erreur au moment du rechargement), pas la première exécution — les plugins cassés sont détectés quand *Enregistrer et recharger* est déclenché.

---

## Appeler des connecteurs depuis un plugin

La clé `connectors` du contexte donne accès au registre que le framework utilise en interne. Trois formes d'appel :

```python
# Connecteur SQL
rows = ctx["connectors"].sql("billing").run("monthly-totals", month="2026-05")

# Connecteur HTTP / API
resp = await ctx["connectors"].api("crm").call("get-customer", id=42)

# Pool brut — pour des transactions sur plusieurs requêtes
async with ctx["pools"].get("billing").begin() as conn:
    await conn.execute(text("UPDATE invoices SET status = 'issued' WHERE batch_id = :b"), {"b": batch})
    await conn.execute(text("INSERT INTO audit (...) VALUES (...)"), {...})
```

Utiliser le haut niveau `connectors.sql(...)` / `connectors.api(...)` quand l'opération correspond à une requête / un endpoint nommé — ils respectent les contrôles de permission et le journal d'audit. Descendre à `pools.get(...)` uniquement quand une transaction qui traverse plusieurs connecteurs est nécessaire.

---

## Distribuer un plugin entre environnements

Deux schémas fonctionnent :

### Schéma 1 — versionné dans `liberty-apps`

Le code source du plugin se trouve dans `liberty-apps/plugins/<package>/` et est livré avec le reste de la configuration. Le versionnement, le déploiement et le retour arrière suivent le dépôt `liberty-apps`.

| Avantage | Inconvénient |
|---|---|
| Historique git unique pour la configuration + le code personnalisé. | Mélange du code Python et de la configuration TOML. |
| La revue de code passe par la même PR que le changement de configuration. | Un plus gros plugin (plusieurs milliers de lignes) alourdit le dépôt de configuration. |

### Schéma 2 — publié sous forme de package Python

Construire le plugin comme un package Python ordinaire, le publier sur un PyPI privé (ou simplement l'installer depuis git), l'installer via pip dans l'environnement virtuel de `liberty-next` :

```bash
cd liberty-next
.venv/bin/pip install git+https://github.com/acme/liberty-billing-plugin@v1.4.2
```

La référence TOML est la même — `callable = "liberty_billing.invoicing:run"` — parce que le package est désormais importable via les site-packages de l'environnement virtuel, pas via `liberty-apps/plugins/`.

| Avantage | Inconvénient |
|---|---|
| Le code du plugin est isolé dans son propre dépôt avec ses propres tests / CI. | Deux pipelines de livraison à gérer. |
| Plusieurs installations peuvent partager une version unique du plugin. | Le rechargement à chaud ne capte pas une mise à jour pip — un redémarrage est nécessaire. |

Choisir le schéma 1 pour les petits plugins (quelques centaines de lignes, spécifiques à une installation) ; choisir le schéma 2 pour les plugins partagés entre de nombreuses installations ou maintenus par une équipe distincte.

---

## Tester un plugin

Écrire les tests dans le dossier du plugin :

```text
plugins/billing/
├── invoicing.py
└── tests/
    └── test_invoicing.py
```

Un test compatible pytest qui simule le contexte :

```python
# plugins/billing/tests/test_invoicing.py
from unittest.mock import MagicMock
from billing.invoicing import run


def test_dry_run_returns_count_only(monkeypatch):
    billing = MagicMock()
    billing.run.return_value = [{"id": 1}, {"id": 2}, {"id": 3}]
    ctx = {"connectors": MagicMock(sql=MagicMock(return_value=billing))}

    result = run(period="2026-05", dry_run=True, **ctx)

    assert result == {"rows_affected": 0, "matched": 3}
    billing.run.assert_called_once_with("drafts-for-period", period="2026-05")
```

Exécuter avec `cd liberty-next && PYTHONPATH=../liberty-apps/plugins .venv/bin/pytest ../liberty-apps/plugins/billing`.

---

## Conseils et bonnes pratiques

- **Garder les appels courts.** Une fonction de plugin est difficile à déboguer à distance ; une fonction par étape est plus facile à raisonner qu'une classe d'orchestration de 500 lignes.
- **Toujours typer les kwargs explicites.** `def run(*, period: str, ...)` détecte une coquille TOML (`peroid = "2026-05"`) au moment de l'import et non au moment de l'exécution.
- **Logger avec `__name__`.** La queue de log Nomaflow filtre par logger — utiliser le chemin du module rend les lignes faciles à rechercher.
- **Ne pas attraper d'exceptions larges dans une étape.** Laisser le runner enregistrer la trace ; un `try / except: pass` produit une exécution verte qui n'a rien fait en silence.
- **Ne jamais aller chercher dans les internes du framework au-delà du contexte.** Les clés `ctx["connectors"]` / `ctx["pools"]` sont le contrat stable ; tout le reste peut changer entre versions du framework.
- **Traiter les plugins comme du code.** Ils sont commités, relus, testés. La configuration TOML est de la donnée ; les plugins sont du code.

---

## Pour aller plus loin

- [Applications](./overview.md) — où le dossier plugin s'inscrit dans la structure d'une application.
- [i18n](./i18n.md) — ajout de packs de langue (également placés sous `plugins/`).
- [Jobs → Types d'étape](../../nomaflow/steps.md) — l'étape `python` qui appelle les plugins.
