---
title: Rapport planifié par email
description: "Recette — chaque jour ouvré à 08:00, exécuter un agrégat SQL, le rendre en XLSX, l'envoyer par email à une liste de destinataires. Le job Nomaflow + l'étape http + l'endpoint d'export Excel du framework font le travail."
keywords: [Liberty Framework, cookbook, planifié, rapport, email, Nomaflow, XLSX, quotidien, hebdomadaire]
---

# Rapport planifié par email

## Le problème

La direction veut un rapport « chiffres d'hier » à 08:00 chaque jour ouvré dans sa boîte de réception. Ou un « résumé pipeline hebdomadaire » le lundi. Sans écrire un script cron + email personnalisé.

## Le modèle

Un job Nomaflow avec trois étapes :

1. **Rendre le rapport** en XLSX (via l'endpoint d'export d'écran du framework, ou un helper Python).
2. **Attacher + envoyer l'email** via votre relais SMTP ou un service transactionnel.
3. **Journaliser l'envoi** pour audit (optionnel).

Le framework gère la planification, les tentatives en cas d'échec, l'historique d'exécution, les alertes.

## La recette

### Étape 1 — vérifier que les données sont interrogeables

Vous avez besoin d'une requête de connecteur qui produit les lignes à inclure dans le rapport. Si vous avez déjà un écran qui montre les bonnes données, c'est terminé — sa requête de lecture est ce que vous exporterez.

Pour l'exemple, nous réutiliserons la requête `deals.list` du tutoriel CRM.

### Étape 2 — configurer le relais SMTP

**Paramètres → Framework → Notifications → SMTP** :

| Champ | Valeur |
|---|---|
| **Hôte** | `smtp.example.com` |
| **Port** | `587` |
| **Identifiant** | `liberty@example.com` |
| **Mot de passe** | *(chiffré au repos)* |
| **TLS** | `STARTTLS` |
| **Adresse d'expédition** | `Liberty <liberty@example.com>` |

Envoyez un email de test depuis le formulaire pour vérifier.

### Étape 3 — construire le job

**Paramètres → Jobs → + Nouveau job** :

| Champ | Valeur |
|---|---|
| **Nom** | `crm-daily-pipeline-report` |
| **Application** | `crm` |
| **Description** | `Quotidien 08:00 jours ouvrés : export pipeline à la direction.` |
| **Planification** | `0 8 * * 1-5` |
| **Fuseau horaire** | `Europe/Paris` |
| **Instance unique** | ✓ |
| **Délai d'expiration** | 120 secondes |

### Étape 4 — les trois étapes

#### Étape 1 — rendre le XLSX

| Champ | Valeur |
|---|---|
| **Nom** | `render` |
| **Type** | `HTTP` |
| **Variante** | `Connector endpoint` |
| **Connecteur** | `liberty-self` |
| **Endpoint** | `screens.export` |
| **Paramètres** | `app = crm`, `screen_id = deals`, `format = xlsx`, `from_date = ${yesterday}`, `to_date = ${yesterday}` |
| **Alias de résultat** | `xlsx` |

Le connecteur `liberty-self` est intégré au framework — il rend la surface REST du framework appelable depuis les étapes de job.

#### Étape 2 — envoyer l'email

| Champ | Valeur |
|---|---|
| **Nom** | `email` |
| **Type** | `HTTP` |
| **Variante** | `Raw URL` |
| **Méthode** | `POST` |
| **URL** | L'endpoint pont SMTP du framework : `http://127.0.0.1:8000/api/notifications/email` *(authentifié avec le JWT de l'utilisateur système — le framework gère cela pour les jobs déclenchés par le système)*. |
| **Headers** | `Content-Type: application/json` |
| **Corps** | `{ "to": ["management@example.com"], "subject": "Pipeline quotidien — ${yesterday}", "body": "Veuillez trouver ci-joint le pipeline au ${yesterday}.", "attachments": [{ "name": "pipeline-${yesterday}.xlsx", "content": "${steps.render.body}", "encoding": "base64" }] }` |

#### Étape 3 — journaliser l'envoi (optionnel)

| Champ | Valeur |
|---|---|
| **Nom** | `log-send` |
| **Type** | `SQL Query` |
| **Connecteur / Requête** | `audit` / `log-event:write` |
| **Paramètres** | `event = "pipeline-report-sent"`, `payload = ${steps.email.body}` |

Une petite table `audit` qui enregistre chaque email déclenché par le système — utile quand quelqu'un dit « je n'ai pas reçu le rapport ».

### Étape 5 — notifications en cas d'échec

Dans le bloc *Notifications* du job :

| Champ | Valeur |
|---|---|
| **En échec** | `slack:#ops-alerts` |
| **En sauté** | *(laisser vide)* |

Si le job échoue (base en panne, SMTP rejette l'email), le canal ops est notifié.

### Étape 6 — tester et livrer

Cliquez sur **▶ Exécuter maintenant** dans le constructeur de job. La page de détail d'exécution s'ouvre avec les trois étapes ; en cas de succès, l'email arrive dans la boîte de réception des destinataires et la table d'audit reçoit une ligne.

L'aperçu *5 prochaines exécutions* du job confirme qu'il s'exécutera demain à 08:00.

## Variantes

| Vous voulez… | Faites ceci |
|---|---|
| **Un PDF au lieu d'un XLSX** | Remplacez `format = xlsx` par `format = pdf` à l'étape 1. Fonctionne pour les tableaux de bord ; les écrans rendent leur feuille de style d'impression en PDF. |
| **Un rapport hebdomadaire (lundis seulement)** | Changez le cron en `0 8 * * 1`. |
| **Plusieurs destinataires avec des vues différentes** | Bouclez dans une étape Python au lieu d'une seule étape HTTP — passez une liste de tuples `(destinataire, screen_id, filtres)`. |
| **Un corps HTML inline au lieu d'une pièce jointe** | L'endpoint `screens.export` du framework supporte `format = html` — intégrez la réponse directement dans le corps de l'email. |
| **Slack au lieu d'email** | Remplacez l'étape 2 par un HTTP POST sur le webhook Slack, avec le fichier téléversé via `files.upload` au lieu d'attaché. |

## Pour aller plus loin

- [Jobs — Nomaflow → Vue d'ensemble](../jobs/overview.md) pour le modèle de planification.
- [Cookbook → Export Excel](./excel-export.md) pour l'endpoint d'export.
- [Tutoriel CRM → Étape 6](../tutorial-crm/06-ai-and-jobs.md) pour un modèle de job nocturne similaire (deals bloqués).
