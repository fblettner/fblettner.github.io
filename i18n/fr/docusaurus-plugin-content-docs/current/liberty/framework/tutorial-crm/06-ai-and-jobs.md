---
title: Étape 6 — Assistant IA et jobs planifiés
description: "Câblez l'assistant IA pour qu'il puisse répondre à des questions en langage naturel sur les données du CRM, et ajoutez un job Nomaflow nocturne qui signale les affaires sans activité depuis 14 jours. Illustre la génération d'outils IA, le périmètre des permissions pour l'assistant et le modèle de jobs Nomaflow."
keywords: [Liberty Framework, tutoriel, CRM, IA, assistant, Nomaflow, job planifié, tool use]
---

# Étape 6 — Assistant IA et jobs planifiés

Deux dernières couches achèvent le CRM :

- **Assistant IA** — accès en langage naturel aux données du CRM, cadré sur ce que l'utilisateur appelant peut voir.
- **Un job planifié** — s'exécute chaque nuit, trouve les affaires sans activité depuis 14 jours, envoie un résumé à Slack.

À la fin de cette étape, le CRM est fonctionnellement complet. Temps estimé : **15 minutes**.

---

## Mettre en place l'assistant IA

L'[assistant IA](../ai-assistant.md) du framework est un modèle Anthropic Claude avec **tool use** activé. Chaque requête de connecteur que l'utilisateur appelant peut exécuter devient un outil que l'assistant peut choisir. Vous posez une question ; le modèle exécute les bonnes requêtes ; il répond.

### Configurer le fournisseur

Mettez `ANTHROPIC_API_KEY` dans votre environnement (récupérez-en une sur https://console.anthropic.com → API keys), puis redémarrez le framework. Ouvrez **Paramètres → Framework → IA** pour confirmer que le champ affiche « Provider: Anthropic / API key: ✓ configured ».

Modèle par défaut : `claude-sonnet-4-6`. Laissez-le.

### Confirmer que les connecteurs sont exposés

Nous avons activé *Exposer à l'assistant IA* sur les connecteurs `customers` et `deals` lors de leur création aux étapes 2 et 3 (activé par défaut). Pour confirmer, ouvrez **Paramètres → Connecteurs → customers** — la bascule doit être **activée**.

Ouvrez la même vue pour `deals` et `activities`. Veillez à ce qu'ils soient tous activés.

Puis ouvrez **GET /ai/tools** dans un nouvel onglet (ou `liberty-admin ai-tools` en CLI). Vous devriez voir une liste :

```
customers__list           — Retourne chaque client avec son statut, son secteur et son contact principal.
deals__list               — Affaires commerciales — étape du pipeline, montant, clôture attendue.
deals__pipeline_total     — …
deals__by_stage           — …
activities__list          — …
```

Seules les requêtes de **lecture** apparaissent par défaut. Les requêtes d'écriture sont exclues à moins que l'entrée du connecteur ne l'autorise explicitement (et que l'appelant porte la permission `ai:write`).

### Accorder `ai:chat` au rôle

Ouvrez **Paramètres → Rôles → crm-sales** et **+ Ajouter une permission** : `ai:chat`. Enregistrer.

Idem pour `crm-admin`. Laissez `crm-viewer` sans pour l'instant.

### Essayer

Déconnectez-vous, reconnectez-vous en tant que `sales-alice`. L'icône 💬 **Chat** apparaît dans l'en-tête. Cliquez dessus.

Essayez quelques questions :

> *« Combien d'affaires sont dans le pipeline en ce moment ? »*

L'assistant choisit le bon outil (`deals__pipeline_total`), l'exécute, lit le résultat et répond :

> *« Il y a 173 500 € de valeur de pipeline ouverte sur 3 affaires (hors gagnées/perdues). »*

L'appel d'outil est visible en ligne — dépliez-le pour voir les paramètres et les lignes retournées.

> *« Quels clients n'ont aucune affaire ces 30 derniers jours ? »*

L'assistant enchaîne `customers__list` et `deals__list`, combine les résultats dans son raisonnement, et répond avec les bons clients — en proposant éventuellement un suivi.

> *« Supprime l'affaire Globex. »*

Refusé. L'assistant n'a pas accès aux requêtes d'écriture — `deals__delete` n'est pas dans sa liste d'outils parce que le connecteur n'a pas autorisé cette exposition.

### Ce que l'assistant peut et ne peut pas faire

| Action | Autorisé ? |
|---|---|
| Lire toute requête que l'appelant peut exécuter. | ✓ |
| Combiner plusieurs requêtes pour répondre à une question complexe. | ✓ |
| Rendre la réponse dans la langue de l'utilisateur (utilise `session.lang`). | ✓ |
| Exécuter une requête d'écriture. | Seulement quand le connecteur + le rôle l'autorisent tous deux (`expose_to_ai` + permission `ai:write`). |
| Accéder à des données pour lesquelles l'appelant n'a pas la permission. | ✗ — la liste d'outils est par appelant, les contrôles de permission s'appliquent. |

Les motifs d'accès au niveau ligne du framework (`WHERE owner = :session_user`) se propagent automatiquement à l'assistant : si l'utilisateur humain ne voit que ses propres clients, l'IA aussi pour son compte.

---

## Ajouter le job des affaires stagnantes

Une pratique courante d'hygiène de pipeline : signaler les affaires qui n'ont pas bougé depuis deux semaines. Le moteur [Jobs / Nomaflow](../jobs/overview.md) du framework exécute le travail planifié in-process ; nous ajoutons un job qui se déclenche chaque nuit.

### Ajouter la requête de détection

Ouvrez **Paramètres → Connecteurs → deals → + Ajouter une requête** :

| Champ | Valeur |
|---|---|
| **Nom** | `stale-deals` |
| **Opération** | Lecture |
| **SQL** | La requête ci-dessous |

```sql
SELECT d.id, d.name, c.name AS customer_name, d.stage, d.amount,
       MAX(a.happened_at) AS last_activity
FROM   deals d
JOIN   customers c ON c.id = d.customer_id
LEFT JOIN activities a ON a.deal_id = d.id
WHERE  d.stage NOT IN ('won', 'lost')
GROUP BY d.id, d.name, c.name, d.stage, d.amount
HAVING MAX(a.happened_at) IS NULL
    OR MAX(a.happened_at) < (CURRENT_DATE - INTERVAL '14 days');
```

Testez — vous devriez voir les affaires sans activité récente (probablement toutes vu les données initiales).

### Construire le job

**Paramètres → Jobs → + Nouveau job** :

| Champ | Valeur |
|---|---|
| **Nom** | `crm-flag-stale-deals` |
| **App** | `crm` |
| **Description** | `Trouver les affaires sans activité depuis 14+ jours ; résumé envoyé à Slack.` |
| **Planification** | `0 8 * * 1-5` *(08:00 en semaine)* |
| **Fuseau horaire** | `Europe/Paris` |
| **Activé** | ✓ |
| **Instance unique** | ✓ |
| **Timeout** | 60 secondes |

### Ajouter trois étapes

#### Étape 1 — récupérer les affaires stagnantes

| Champ | Valeur |
|---|---|
| **Nom** | `fetch-stale` |
| **Type** | `SQL Query` |
| **Connecteur / Requête** | `deals` / `stale-deals` |
| **Alias de résultat** | `stale` |

Le résultat de la première étape est référencé par la suivante via `${steps.fetch-stale.rows}`.

#### Étape 2 — garde contre un résultat vide

| Champ | Valeur |
|---|---|
| **Nom** | `check-empty` |
| **Type** | `Python` |
| **Callable** | `crm.alerts:format_stale_message` |
| **Kwargs** | `rows = ${steps.fetch-stale.rows}` |
| **Condition** | `${steps.fetch-stale.row_count} > 0` |

Quand il n'y a pas d'affaire stagnante, la *Condition* est fausse et l'étape est sautée — le job se termine en `succeeded` sans envoyer de message Slack.

Il nous faut un petit module Python. Créez `liberty-apps/plugins/crm/__init__.py` et `liberty-apps/plugins/crm/alerts.py` :

```python
# liberty-apps/plugins/crm/alerts.py
def format_stale_message(*, rows, **ctx):
    """Format the list of stale deals as a Slack-friendly message."""
    lines = ["🟡 *Affaires sans activité depuis 14+ jours*", ""]
    for r in rows:
        last = r.get("last_activity") or "jamais"
        lines.append(f"• *{r['name']}* — {r['customer_name']} · €{r['amount']:,.0f} · dernière activité : {last}")
    return {"text": "\n".join(lines), "rows_affected": len(rows)}
```

#### Étape 3 — poster sur Slack

| Champ | Valeur |
|---|---|
| **Nom** | `slack-notify` |
| **Type** | `HTTP` |
| **Variante** | `Raw URL` |
| **Méthode** | `POST` |
| **URL** | `https://hooks.slack.com/services/T0/B0/XXXXX` *(votre webhook)* |
| **Corps** | `{ "text": "${steps.check-empty.text}" }` |
| **Condition** | `${steps.fetch-stale.row_count} > 0` |

### Notifications en cas d'échec

Dans la section *Notifications* du job, réglez :

| Champ | Valeur |
|---|---|
| **En cas d'échec** | `slack:#ops-alerts` |

Ainsi, si le job lui-même est en erreur (base de données indisponible, Slack 500), le canal ops est notifié — pas perdu dans le log d'exécution.

### Enregistrer et déclencher manuellement

**Enregistrer et recharger**. Cliquez sur le bouton **▶ Exécuter maintenant** en haut de l'éditeur de job pour tester sans attendre 08:00. L'historique d'exécution s'ouvre ; les trois étapes apparaissent dans l'ordre ; vous regardez le log défiler en direct.

---

## Vérifier

| Vérification | Comment |
|---|---|
| **L'assistant IA fonctionne pour `sales-alice`** | Connectez-vous comme Alice, ouvrez `/chat`, demandez « combien d'affaires sont dans le pipeline ? ». Obtenez une réponse chiffrée avec l'appel d'outil visible. |
| **`crm-viewer` ne voit pas l'assistant** | Connectez-vous comme Bob, l'icône 💬 est cachée. |
| **Le job des affaires stagnantes s'exécute avec succès** | *Paramètres → Jobs → crm-flag-stale-deals* → l'historique d'exécution affiche le déclenchement manuel avec le statut `succeeded`. |
| **Le canal Slack a reçu le message** | (Ou le log d'exécution affiche le message formaté dans la sortie de l'étape `check-empty`.) |
| **Le job se déclenchera demain à 08:00** | L'aperçu *5 prochaines exécutions* du job montre les exécutions à venir. |

---

## Ce que vous avez maintenant

Une application CRM complète construite de bout en bout sur Liberty Framework :

- **Trois écrans** — Clients, Affaires, Activités (sous-grille).
- **Un tableau de bord** — Vue d'ensemble du pipeline avec quatre KPI, un graphique et un fil d'activité récente.
- **Trois rôles** — viewer, sales, admin — avec connexion OIDC mappée depuis la claim groupes de l'IdP.
- **Un assistant IA** qui répond à des questions en langage naturel sur les données, cadré par rôle.
- **Un job planifié** qui signale les affaires stagnantes et poste sur Slack chaque matin de semaine.

Temps total sur les six étapes : environ **90 minutes** pour un premier passage, ~30 pour quelqu'un qui l'a déjà fait. Lignes de code écrites : **les requêtes SQL**, **un court fichier Python** (`alerts.py`) et un mince 🔒 client secret dans l'environnement. Le reste est de la configuration.

---

## Pour aller plus loin

| Vous voulez… | Lisez |
|---|---|
| **Appliquer le même motif à SAP / NetSuite / autre ERP** | Même recette, pointez le pool sur la base ERP. Pour JD Edwards spécifiquement, l'app packagée [Nomajde](https://docs.nomana-it.fr/nomajde/) livre déjà tous les écrans. |
| **Déployer ce CRM en production** | [Déploiement → Mise en production](../deployment/running-production.md). |
| **Chercher une recette précise** | [Cookbook](../cookbook/crud-existing-table.md). |
| **Comprendre un concept plus en profondeur** | Les pages [Concepts](../connectors.md) ont désormais une intro « Quoi / Pourquoi / Quand ». |
| **Voir d'autres cas d'usage** | [Ce que vous pouvez construire](../what-you-can-build.md). |
