---
title: Connecteurs API
description: "Définir les connecteurs REST API génériques utilisés par NomaUBL pour dialoguer avec une Plateforme Agréée, un ERP source (JD Edwards AIS, SAP, NetSuite, ERP personnalisé) ou tout service HTTP : connexion, authentification, catalogue d'endpoints et exécuteur de test intégré."
keywords: [NomaUBL, connecteurs API, REST, OAuth2, OAUTH2, Bearer, API key, Basic auth, JD Edwards AIS, AIS, SAP, NetSuite, intégration, endpoints, placeholders, Plateforme Agréée]
---

# Connecteurs API

L'éditeur **API Connectors** sert à déclarer les intégrations REST API. Un connecteur regroupe la **configuration nécessaire pour dialoguer avec un système distant** — URL racine, authentification et liste d'endpoints — et se référence ensuite par son nom dans le reste de NomaUBL.

Les connecteurs sont consommés par la page [Liaisons d'actions](../management/actions.md) pour câbler une action vendeur réglementaire à un appel API distant, par les [Règles de notification](../management/notification-rules.md), et par toute fonctionnalité NomaUBL qui appelle un endpoint HTTP. Cibles typiques :

- L'API REST d'une **Plateforme Agréée** (PA).
- Une API d'action de l'**ERP source** — par exemple **JD Edwards AIS** pour enregistrer un paiement, une **BAPI SAP**, un **RESTlet NetSuite**, un webhook d'ERP personnalisé.
- Tout service HTTP tiers impliqué dans la chaîne de facturation électronique.

Cette page s'applique à des documents issus de n'importe quel système source — JD Edwards, SAP, NetSuite, ERP personnalisé — tant que la source est mappée vers UBL.

L'éditeur comporte **quatre onglets** :

1. **Connection** — URL racine, timeout, TLS, en-têtes par défaut.
2. **Authentication** — None / Basic / Bearer / API Key / OAuth2 (champs conditionnels selon le schéma).
3. **Endpoints** — catalogue des endpoints HTTP exposés par le connecteur.
4. **Test** — exécuteur intégré permettant d'appeler un endpoint avec des paramètres personnalisés et d'inspecter la réponse.

---

## Onglet 1 — Connection

### Connection

| Champ | Description |
|---|---|
| **Base URL** | URL racine de l'API cible (par ex. `https://api.example.com:9300`). Tous les chemins d'endpoint y sont ajoutés. |
| **Timeout (ms)** | Délai d'expiration des requêtes HTTP en millisecondes. Valeur par défaut `30000` (30 s). |
| **SSL Verify** | `true` / `false` — active la validation du certificat TLS du serveur. À positionner à `false` uniquement en environnement non-production utilisant des certificats auto-signés. |

### Default Headers

| Champ | Description |
|---|---|
| **Headers** | Paires `Key:Value` séparées par des points-virgules, appliquées à **tous** les endpoints du connecteur (par ex. `Content-Type:application/json;Accept:application/json`). Les *Extra headers* d'un endpoint peuvent surcharger ces valeurs au cas par cas. |

---

## Onglet 2 — Authentication

### Auth Type

| Champ | Valeurs | Description |
|---|---|---|
| **Method** | `NONE` / `BASIC` / `BEARER` / `API_KEY` / `OAUTH2` | Schéma d'authentification utilisé pour tous les endpoints. Les champs ci-dessous apparaissent conditionnellement selon ce choix. |

### Si Method = `BASIC`

| Champ | Description |
|---|---|
| **Username** | Identifiant d'authentification HTTP Basic. |
| **Password** | Mot de passe d'authentification HTTP Basic. |

### Si Method = `BEARER`

| Champ | Description |
|---|---|
| **Token / Key** | Bearer token statique transmis dans l'en-tête `Authorization: Bearer <token>` sur chaque requête. |

### Si Method = `API_KEY`

| Champ | Description |
|---|---|
| **Header Name** | En-tête HTTP portant la clé d'API (par ex. `X-Api-Key`). |
| **Token / Key** | Valeur de la clé d'API. |

### Si Method = `OAUTH2`

Choix typique pour **JD Edwards AIS** et la plupart des API PA modernes — NomaUBL récupère un jeton sur un endpoint dédié et le réutilise jusqu'à expiration.

#### Credentials

| Champ | Description |
|---|---|
| **Username** | Identifiant transmis pendant la requête de jeton. |
| **Password** | Mot de passe transmis pendant la requête de jeton. |

#### Token Endpoint

| Champ | Description |
|---|---|
| **Endpoint path** | Chemin de l'endpoint d'obtention du jeton (par ex. `/v7.3/tokenrequest` pour JD Edwards AIS). Combiné à **Base URL**. |
| **Token field** | Chemin JSON en notation pointée qui permet d'extraire le jeton de la réponse (par ex. `userInfo.token` pour JD Edwards AIS). |
| **Token TTL (minutes)** | Durée de mise en cache du jeton avant nouvelle demande. Valeur par défaut `55` minutes. |
| **Body template** | Corps JSON personnalisé pour la requête de jeton, avec placeholders `{{username}}` / `{{password}}`. **Laisser vide** pour utiliser le payload par défaut `username` / `password` / `deviceName`. |

---

## Onglet 3 — Endpoints

Catalogue des endpoints HTTP accessibles via ce connecteur. Chaque entrée est une carte repliable ; un clic sur l'en-tête développe ou replie la carte.

Des **placeholders `{{param}}`** peuvent être utilisés dans les URLs, les en-têtes, les paramètres de requête et les corps. Trois placeholders sont disponibles d'emblée :

- `{{token}}` — le jeton OAUTH2 (quand l'authentification `OAUTH2` est configurée)
- `{{username}}` — l'identifiant configuré
- `{{password}}` — le mot de passe configuré

Tous les autres placeholders doivent être **déclarés dans la section Parameters de l'endpoint** (voir ci-dessous).

### Champs par endpoint

| Champ | Description |
|---|---|
| **Name** | Identifiant logique référencé depuis les autres parties de NomaUBL (par ex. `getOrderLines`, `reportExecute_R0010P`). |
| **Label** | Libellé lisible affiché dans l'éditeur et dans les listes déroulantes pendant le choix d'un endpoint (par ex. `Get Order Lines`). |
| **Method** | Méthode HTTP (`GET` / `POST` / `PUT` / `DELETE` / `PATCH`). |
| **URL path** | Chemin de l'endpoint ajouté à la **Base URL** du connecteur (par ex. `/v7.3/orchestrator/{{name}}`). |
| **Extra headers** | Paires `Key:Value` séparées par des points-virgules, ajoutées aux en-têtes par défaut du connecteur (ou les surchargeant) (par ex. `X-Custom:value;Authorization:Bearer {{token}}`). |
| **Body** | Corps de requête — modèle JSON avec placeholders `{{param}}`. Le bouton **Format JSON** met en forme la valeur. |
| **Query params** | Modèle de chaîne de requête avec placeholders `{{param}}` (par ex. `pageSize={{pageSize}}&page={{page}}`). |
| **Response field** | Chemin optionnel en notation pointée (par ex. `data.items`) qui extrait un sous-arbre de la réponse — utile pour ne récupérer qu'un fragment du payload. |
| **Description** | Description en texte libre affichée dans les listes déroulantes et dans l'en-tête de l'éditeur. |

### Response Mappings

Liste de paires **nom logique → chemin JSON** qui mappent les champs de la réponse vers des noms stables côté NomaUBL :

- **Logical name** : nom stable stocké ou référencé par NomaUBL (par ex. `uuid`, `status`).
- **JSON path** : chemin en notation pointée à l'intérieur de la réponse (par ex. `data.uuid`).

Si l'API amont renomme un champ, mettre à jour le mappage suffit — le code applicatif continue d'utiliser le nom logique.

### Parameters

Déclare les **variables `{{placeholder}}`** attendues par l'endpoint. Les consommateurs (par ex. l'onglet *Actions* de *E-Invoicing*) obtiennent alors un formulaire guidé pour lier cet endpoint.

| Sous-champ | Description |
|---|---|
| **Name** | Nom du placeholder tel qu'utilisé dans l'URL / les en-têtes / le corps (par ex. `reportName`). |
| **Label** | Libellé lisible affiché à l'utilisateur qui fournit la valeur (par ex. `Report Name`). |
| **Default value** | Valeur pré-renseignée appliquée quand le consommateur ne la surcharge pas (par ex. `R0010P`). |

### Exemple — exécution d'un report JD Edwards AIS

Définition typique d'un endpoint pour l'exécution d'un report BSSV JDE via le serveur AIS.

#### Endpoint

| Champ | Valeur |
|---|---|
| **Name** | `reportExecute_R0010P` |
| **Label** | `Execute Report R0010P` |
| **Method** | `POST` |
| **URL path** | `/v2/report/execute` |
| **Extra headers** | `X-Custom:value;Authorization:Bearer {{token}}` |
| **Query params** | `pageSize={{pageSize}}&page={{page}}` |
| **Response field** | `data.items` |

#### Body

```json
{
  "reportName": "{{reportName}}",
  "reportVersion": "{{reportVersion}}",
  "dataSelection": {
    "criteria": [
      {
        "subject": {
          "view": "V0010D",
          "table": "F0010",
          "column": "CCCO"
        },
        "comparison": "EQUAL",
        "value": [
          {"content": "{{companyCode}}"}
        ]
      }
    ]
  }
}
```

Le corps est un modèle JSON ; `{{reportName}}`, `{{reportVersion}}` et `{{companyCode}}` sont substitués à l'exécution par les valeurs fournies par le consommateur, ou par les valeurs par défaut déclarées si elles ne sont pas surchargées.

#### Parameters

| Nom | Libellé | Valeur par défaut |
|---|---|---|
| `reportName` | Report Name | `R0010P` |
| `reportVersion` | Report Version | `ZJDE0001` |
| `companyCode` | Company Code | `00001` |

`reportName` et `reportVersion` sont constants pour ce report : leurs valeurs par défaut sont fixées ici. `companyCode` est le seul paramètre généralement fourni à l'exécution — typiquement injecté via `{{fedct}}` quand cet endpoint est lié à une action réglementaire dans *E-Invoicing → Actions*.

---

## Onglet 4 — Test

Exécuteur HTTP intégré : appeler un endpoint du connecteur avec des paramètres personnalisés et inspecter la réponse. Pratique pour valider une intégration avant de la lier à une action réglementaire ou à un job planifié.

### Select Endpoint

| Champ | Description |
|---|---|
| **Endpoint** | Liste déroulante des endpoints définis sur le connecteur. La sélection d'un endpoint **pré-remplit la section Parameters** avec les paramètres déclarés et leurs valeurs par défaut. |

### Parameters

Liste de paires `clé / valeur` qui surchargent ou fournissent les `{{placeholder}}` à l'exécution. Ajouter ou supprimer des lignes au besoin.

### Result

| Élément | Description |
|---|---|
| Bouton **Exécuter** | Déclenche l'appel HTTP. Désactivé pendant qu'une exécution précédente est en cours. |
| **Ligne de statut** | Affiche `HTTP <code> ✓ / ✗`, et la valeur extraite via *Response field* le cas échéant. |
| **Request URL** | URL effectivement émise après résolution (placeholders substitués, chaîne de requête assemblée). |
| **Response body** | Corps de réponse brut, mis en forme JSON automatiquement quand c'est possible. |

### Exemple — test de `reportExecute_R0010P`

Suite de l'endpoint JDE AIS défini à l'onglet 3 — état de l'onglet Test après sa sélection sur le connecteur `jde-ais` :

| Section | Valeur |
|---|---|
| **Endpoint** | `reportExecute_R0010P — Execute Report R0010P` |
| **Parameters** *(pré-remplis depuis les valeurs par défaut déclarées)* | `reportName = R0010P`<br/>`reportVersion = ZJDE0001`<br/>`companyCode = 00001` |

La sélection de l'endpoint **pré-remplit les trois lignes de paramètres** avec les valeurs par défaut déclarées — pas besoin de mémoriser les noms de placeholder. Surcharger une valeur si nécessaire (typiquement `companyCode`), puis cliquer sur **Exécuter**. La section Result affiche l'URL résolue, le statut HTTP, le corps de réponse, et la valeur extraite via *Response field* (`data.items` pour cet endpoint) le cas échéant.

Plus les valeurs par défaut déclarées à l'onglet 3 sont pertinentes, plus l'onglet Test (et les autres consommateurs de l'endpoint) sont simples à utiliser.

---

## Conseils & bonnes pratiques

- **Un connecteur par système.** Éviter de regrouper des endpoints de plusieurs systèmes externes dans un même connecteur — l'authentification, les en-têtes et la base URL sont définis au niveau du connecteur.
- **Nommer les endpoints par intention.** `reportExecute_R0010P` est plus parlant que `post1`, car la liste déroulante de l'onglet *Actions* identifie les endpoints par leur nom.
- **Déclarer chaque `{{placeholder}}` référencé.** Les placeholders non déclarés n'apparaissent pas dans le formulaire de l'onglet *Actions* — les consommateurs ne peuvent donc pas les renseigner.
- **Utiliser `Default value` pour figer les paramètres constants.** Pour une exécution de report JDE où `reportName` et `reportVersion` ne changent jamais, fixer leurs valeurs par défaut — les consommateurs n'ont alors qu'à fournir les valeurs réellement variables.
- **Tester avant de lier.** Exécuter l'endpoint depuis l'onglet 4 avec des valeurs réalistes avant toute liaison à une action réglementaire ; les problèmes d'authentification, d'URL ou de payload sont ainsi détectés en amont.
- **Les mappages sont le contrat avec l'API amont.** Mapper les champs de réponse vers des noms logiques stables isole le code applicatif des changements de chemin JSON côté amont.
