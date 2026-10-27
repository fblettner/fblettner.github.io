---
title: Assistant IA
description: "L'assistant IA de Liberty Next : le panneau ouvert par le bouton AI Assistant, ce qu'il sait faire (lire les requêtes des connecteurs, appeler des endpoints d'API, proposer de la configuration, lire les pages web autorisées), comment il est limité (ai:chat, connecteurs autorisés, requêtes en lecture seule, périmètre de données), et ses réglages."
keywords: [Liberty Next, assistant IA, Anthropic, Claude, ai:chat, outils, list_connectors, sql_query, api_call, scaffold, périmètre de données]
---

# Assistant IA

**AI Assistant**, à droite de la barre du haut, ouvre un panneau où les utilisateurs interrogent leurs données en langage courant. L'assistant répond en lançant les requêtes des connecteurs, avec les droits de l'utilisateur.

---

## Utilisation \{#use\}

Saisir une question et appuyer sur Entrée (Maj+Entrée pour une nouvelle ligne). La réponse s'affiche au fil de l'écriture, avec les outils utilisés ; **Arrêter** l'interrompt et garde ce qui a été reçu ; **nouvelle conversation** repart de zéro. La conversation vit dans le panneau : elle n'est pas conservée après un rechargement de la page.

Exemples : *Combien de commandes ouvertes par société ce mois-ci ?* — *Quels utilisateurs ne se sont pas connectés depuis juin ?* — *Montre les cinq plus grosses factures d'ACME.*

---

## Ce qu'il sait faire \{#tools\}

| Outil | Fait | Réglage |
|---|---|---|
| `list_connectors` | Liste les connecteurs, leurs requêtes et endpoints (descriptions, sans SQL ni identifiants). | **Connector tools** (activé par défaut). |
| `sql_query` | Lance une requête **de lecture** d'un connecteur SQL. Les requêtes d'écriture sont toujours refusées. | **Connector tools**. |
| `api_call` | Appelle un endpoint d'un connecteur API. | **API tool** (désactivé par défaut — un endpoint peut modifier des données). |
| Outils de proposition | Proposent une requête, une entrée du dictionnaire, un écran ou une entrée de menu ; l'utilisateur relit la proposition et l'applique. | **Scaffold tools** (désactivé par défaut). |
| Lecture web | Lit des pages des domaines autorisés. | **Allowed domains** (aucun par défaut). |

L'assistant n'utilise que des requêtes nommées existantes : il n'écrit pas de SQL sur la base.

---

## Qui peut l'utiliser, et sur quoi \{#access\}

- L'utilisateur a besoin de la permission `ai:chat` (la règle *AI assistant* d'un rôle, dans **Beyond the menus**).
- **Allowed connectors**, dans Paramètres → App, limite les connecteurs accessibles à l'assistant ; vide signifie tous.
- Chaque requête qu'il lance passe par les mêmes contrôles serveur qu'un écran : le [périmètre de données](./build/secure/roles-and-permissions.md#data-scope) de l'utilisateur filtre les lignes.

---

## Réglages \{#settings\}

Dans **Paramètres → App → AI Assistant** : **Enabled**, **Anthropic API key** (chiffrée), **Model**, **Effort**, **Max tokens**, **Max tool iterations** (8), **Request timeout (s)**, **Adaptive thinking**, **System prompt**, les outils ci-dessus et **Allowed connectors**. Voir [Paramètres de l'application](./build/settings-app.md#ai). Sans clé, le panneau indique que l'assistant n'est pas configuré.

---

## Conseils \{#tips\}

- Donner aux requêtes un libellé et une description clairs (Paramètres → Connecteurs) : l'assistant choisit ses requêtes à partir d'eux.
- Écrire des requêtes de lecture dédiées aux questions fréquentes (totaux par société, par mois), plutôt que de laisser l'assistant agréger des milliers de lignes.
- Garder **API tool** désactivé tant que les endpoints ne sont pas en lecture seule.
