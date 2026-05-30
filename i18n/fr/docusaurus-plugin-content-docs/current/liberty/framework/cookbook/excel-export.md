---
title: Export Excel
description: "Recette — chaque écran livre un export Excel par défaut. Personnaliser la liste de colonnes, ajouter un export d'agrégation côté serveur, ou planifier un Excel quotidien envoyé par email."
keywords: [Liberty Framework, cookbook, Excel, export, XLSX, écran, rapport planifié]
---

# Export Excel

## Le problème

Les opérateurs veulent un XLSX de la vue filtrée courante (ou d'un agrégat fixe) — pour analyse hors ligne, pour conformité, pour transmission à quelqu'un qui n'a pas accès au système.

## Le modèle

Le framework offre **trois niveaux** d'export Excel, par ordre croissant d'effort :

| Niveau | Ce que vous faites | Ce qui est produit |
|---|---|---|
| **1. Gratuit** | Rien. | Chaque écran a un bouton *⬇ Exporter* qui télécharge la vue filtrée courante en `<screen>.xlsx`. |
| **2. Personnalisé** | Choisir les colonnes qui apparaissent dans l'export. | Même bouton, mais avec les colonnes que vous voulez — y compris les colonnes *masquées par défaut* dans la grille. |
| **3. Planifié / modèle** | Ajouter un job Nomaflow + une étape HTTP qui appelle l'endpoint d'export et envoie le résultat par email. | Un email nocturne avec le XLSX en pièce jointe. |

## Niveau 1 — l'export par défaut

Il est déjà là. Ouvrez n'importe quel écran, cliquez sur **⬇ Exporter** dans la barre d'outils, le XLSX se télécharge.

L'export respecte :

- Chaque filtre actif (le fichier a les mêmes lignes que la grille à l'écran).
- L'ordre de tri courant.
- Les colonnes visibles *et* les colonnes masquées mais disponibles dans le catalogue avec la bascule *Inclure dans l'export* activée.
- La locale de l'utilisateur (formats de date, séparateurs de nombres, langue des libellés).

Rien à configurer sauf si le niveau 2 s'applique.

## Niveau 2 — personnaliser la liste de colonnes

Par défaut, l'export contient chaque colonne visible de la grille. Pour modifier :

1. Ouvrez **Paramètres → Écrans → &lt;votre écran&gt; → onglet Grille**.
2. Pour chaque colonne, l'éditeur a une bascule **Visible** et une bascule **Inclure dans l'export**. Elles sont indépendantes.
3. Activez *Inclure dans l'export* pour les colonnes qui doivent atterrir dans le XLSX même si elles sont masquées dans la grille (cas typique : `id`, `created_by`, `updated_at`).

Enregistrer et recharger. Le prochain clic *⬇ Exporter* reflète le nouvel ensemble de colonnes.

## Niveau 3 — un rapport Excel planifié

Pour un rapport récurrent — par ex. « chaque lundi à 08:00, envoyer les ventes de la semaine précédente en XLSX à l'équipe de direction » — combinez un job Nomaflow + une étape HTTP.

### Construire le job

**Paramètres → Jobs → + Nouveau job** :

| Champ | Valeur |
|---|---|
| **Nom** | `weekly-sales-export` |
| **Planification** | `0 8 * * 1` *(Lundis à 08:00)* |
| **Fuseau horaire** | `Europe/Paris` |

### Étape 1 — rendre le XLSX

Type : `HTTP`. Variante : `Connector endpoint`.

| Champ | Valeur |
|---|---|
| **Connecteur** | `liberty-self` *(la surface REST du framework lui-même)* |
| **Endpoint** | `screens.export` |
| **Paramètres** | `app = crm`, `screen_id = deals`, `from_date = ${week.monday}`, `to_date = ${week.sunday}` |

L'endpoint renvoie un XLSX en `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`. L'étape l'enregistre comme un blob binaire.

### Étape 2 — envoyer le XLSX par email

Type : `HTTP`. Variante : `Raw URL`.

| Champ | Valeur |
|---|---|
| **Méthode** | `POST` |
| **URL** | Votre passerelle HTTP de relais SMTP, ou utilisez la configuration Paramètres → Framework → Notifications → SMTP |
| **Corps** | `{ "to": "ops@example.com", "subject": "Ventes hebdomadaires", "attachment": "${previous_step.body}" }` |

### Enregistrer et tester

Cliquez sur **▶ Exécuter maintenant** dans le constructeur de job pour vérifier sans attendre lundi. L'historique d'exécution montre les deux étapes, le blob attaché, la réponse du serveur d'email.

## Variantes

| Vous voulez… | Faites ceci |
|---|---|
| **Un export agrégé, pas un dump ligne à ligne** | Écrivez une vue SQL (`vw_weekly_sales`) qui fait l'agrégation, construisez un connecteur + un écran au-dessus de la vue, désactivez *Editable* sur l'écran, exportez les lignes de la vue. |
| **Un PDF au lieu d'un XLSX** | Les écrans n'exportent pas nativement en PDF ; la [feuille de style d'impression](../configuration/settings-ui.md) du framework gère du HTML imprimable. Pour un vrai PDF, le tableau de bord `crm-pipeline-overview` a un bouton *⬇ Exporter PDF* par défaut. |
| **Un CSV au lieu d'un XLSX** | L'endpoint accepte `?format=csv` — même job, paramètre différent. |
| **Que le destinataire télécharge depuis un lien plutôt qu'une pièce jointe** | L'étape 1 reste la même. L'étape 2 devient une étape qui téléverse le blob vers S3 / Azure / Google Drive et envoie le lien par email. Étape Python personnalisée. |

## Pour aller plus loin

- [Jobs — Nomaflow → Vue d'ensemble](../../nomaflow/overview.md) pour le modèle de planification.
- [Référence API REST → screens export](../rest-api.md) pour le contrat de l'endpoint.
- [Cookbook → Rapport planifié par email](./scheduled-report-email.md) pour la variante job récurrent.
