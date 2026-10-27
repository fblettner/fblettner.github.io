---
title: Donner accès aux données à l'assistant IA
description: "Recette — choisir ce que l'assistant IA peut atteindre et l'aider à choisir la bonne requête : la permission ai:chat, les connecteurs autorisés, les seules requêtes de lecture, le périmètre de données de l'utilisateur, et des libellés et descriptions de requêtes rédigés pour le modèle."
keywords: [Liberty Next, cookbook, IA, assistant, ai:chat, connecteurs autorisés, description de requête, périmètre de données, sql_query]
---

# Donner accès aux données à l'assistant IA

## Le besoin

L'[assistant IA](../ai-assistant.md) répond aux questions en exécutant les requêtes nommées des connecteurs. Il doit atteindre les bonnes données — et seulement celles-là — et choisir la bonne requête pour chaque question.

## La démarche

| Niveau | Réglage | Effet |
|---|---|---|
| **Qui** | La permission `ai:chat`, accordée par un rôle. | Sans elle, l'utilisateur n'a pas d'assistant. |
| **Quels connecteurs** | **Allowed connectors**, Paramètres → App → AI Assistant. | Vide : tous les connecteurs ; sinon, seulement ceux de la liste. |
| **Quelles requêtes** | Les requêtes de lecture uniquement. | Les requêtes d'écriture sont toujours refusées ; l'assistant n'écrit jamais de SQL lui-même. |
| **Quelles lignes** | Les droits et le [périmètre de données](../build/secure/roles-and-permissions.md#data-scope) de l'utilisateur. | Une requête lancée par l'assistant est contrôlée comme celle d'un écran : l'utilisateur voit les mêmes lignes. |
| **Quelle requête choisir** | Le **libellé** et la **description** des requêtes. | L'assistant s'en sert pour choisir. |

## La recette

### 1. Ouvrir l'assistant

Dans **Paramètres → Access → Roles**, donner au rôle des utilisateurs la règle *AI assistant* (`ai:chat`), dans le bloc **Beyond the menus**. Voir [Rôles et permissions](../build/secure/roles-and-permissions.md).

### 2. Limiter les connecteurs

Dans **Paramètres → App → AI Assistant**, renseigner **Allowed connectors** avec les connecteurs dont l'assistant peut lire les données — par exemple celui du CRM, sans celui des RH. Laisser **API tool** désactivé, sauf si les endpoints sont en lecture seule.

### 3. Décrire les requêtes

Dans **Paramètres → Connecteurs**, donner à chaque requête utile à l'assistant un **libellé** et une **description** (onglet Advanced). L'assistant liste les connecteurs avec leurs requêtes et leurs descriptions, puis en choisit une :

| Efficace | Insuffisant |
|---|---|
| `Factures d'une période avec client, montant et statut. Pour les questions sur le volume facturé, les factures récentes, la répartition par statut.` | `Récupérer les factures` |
| `Nombre d'affaires par étape du pipeline. Pour les questions de répartition du pipeline.` | `Agréger les affaires` |
| `Activités d'un client (appels, réunions, e-mails), les plus récentes d'abord. Paramètre CUSTOMER_ID.` | `Activités` |

Deux phrases suffisent : **ce que contiennent les lignes**, et **à quelles questions la requête répond**. Mentionner les paramètres et leur format.

### 4. Ajouter des requêtes dédiées

Pour les questions fréquentes — totaux par société, par mois —, écrire une requête de lecture qui les calcule, plutôt que de laisser l'assistant parcourir des milliers de lignes. Nommer clairement ses paramètres (`PERIOD_FROM`, `COMPANY`) et déclarer leurs libellés.

### 5. Vérifier

Se connecter avec un utilisateur du rôle, poser une question à laquelle le rôle doit pouvoir répondre, puis une autre hors de son périmètre : l'assistant affiche les outils utilisés et les requêtes exécutées.

## Erreurs fréquentes

| Erreur | Conséquence |
|---|---|
| Requêtes sans description | L'assistant hésite entre des requêtes proches, ou se trompe. |
| Plusieurs requêtes avec la même description | Idem. Rendre chaque description spécifique. |
| Un connecteur sensible accessible parce que **Allowed connectors** est vide | L'assistant peut le lire pour tout utilisateur qui a des droits sur ses requêtes. Lister explicitement les connecteurs. |
| Attendre de l'assistant qu'il modifie des données | Les requêtes d'écriture sont refusées ; les modifications passent par les écrans et les actions. |

## Pour aller plus loin

- [Assistant IA](../ai-assistant.md) — le panneau, les outils, les réglages.
- [Rôles et permissions](../build/secure/roles-and-permissions.md) — `ai:chat` et le périmètre de données.
- [Paramètres de l'application → AI Assistant](../build/settings-app.md#ai) — tous les réglages.
