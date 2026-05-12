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

:::info[Refonte en 2026.05.9]
Deux ajouts sur cette page :

- **Nouvel onglet Webhooks** — configure la façon dont la PA pousse les mises à jour de statut vers NomaUBL. Les requêtes sont signées HMAC avec un secret partagé et POSTées sur `/api/webhook/{connector}/status` ; le vérificateur déduplique les ré-essais « at-least-once » sur l'event id du payload et applique le statut résolu à la facture correspondante. L'onglet expose aussi les surcharges de chemins JSON pour les champs invoice id, status et event id, ainsi qu'une table de correspondance qui traduit le vocabulaire de la PA vers l'ensemble logique `success` / `pending` / `failed`.
- **Content-Type par endpoint** — chaque endpoint peut désormais déclarer `application/json` *(défaut)* ou `multipart/form-data`. Le builder multipart transforme le corps en liste de parts (`name=value`, `file=@{{filePath}};filename=…;contentType=…`), ce qui permet aux endpoints api-connecteur de piloter des PA qui attendent un upload `multipart/form-data` (par exemple IOPOLE).

`ImportStatusHandler` a aussi été relaxé — tout statut non `failed` / non `pending` est traité comme un succès, ce qui couvre les vocabulaires comme `EMITTED` / `RECEIVED` de IOPOLE sans configuration par PA.
:::

L'éditeur comporte **cinq onglets** :

1. **Connection** — URL racine, timeout, TLS, en-têtes par défaut.
2. **Authentication** — None / Basic / Bearer / API Key / OAuth2 (champs conditionnels selon le schéma).
3. **Endpoints** — catalogue des endpoints HTTP exposés par le connecteur, avec Content-Type par endpoint.
4. **Webhooks** — URL du webhook entrant, secret partagé, surcharges de chemins JSON et table de statuts pour les mises à jour poussées par la PA.
5. **Test** — exécuteur intégré permettant d'appeler un endpoint avec des paramètres personnalisés et d'inspecter la réponse.

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
| **Endpoint path** | Chemin de l'endpoint d'obtention du jeton (par ex. `/v7.3/tokenrequest` pour JD Edwards AIS, `/oauth2/token` pour un flux OAuth2 client_credentials). Combiné à **Base URL**. |
| **Token field** | Chemin JSON en notation pointée pour extraire le jeton de la réponse (par ex. `userInfo.token` pour JD Edwards AIS). **Laisser vide** pour la détection auto — le runtime tente `access_token` puis `token`, ce qui couvre la réponse standard d'un flux OAuth2 client_credentials sans configuration. |
| **Token TTL (minutes)** | Durée de mise en cache du jeton avant nouvelle demande. Valeur par défaut `55` minutes. |
| **Body Content-Type** *(2026.05.8)* | `application/json` *(défaut)* ou `application/x-www-form-urlencoded`. La variante formulaire émet le corps de la requête de jeton sous forme de paires URL-encodées, ce qu'attend le flux OAuth2 `client_credentials` standard. |
| **Body template** | Corps personnalisé pour la requête de jeton, avec placeholders `{{username}}` / `{{password}}`. **Laisser vide** pour utiliser des valeurs par défaut adaptées : le mode JSON émet le payload JD Edwards AIS (`{ username, password, deviceName }`) ; le mode formulaire émet `grant_type=client_credentials&client_id={{username}}&client_secret={{password}}`. |
| **Token request headers** *(2026.05.8)* | Optionnel. Paires `Key:Value` séparées par point-virgule envoyées **uniquement sur la requête de jeton** — pour les PA qui exigent un en-tête tenant-id sur l'appel d'auth lui-même. Exemple : `customer-id:CUST123;X-Tenant:acme`. |

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
| **Content-Type** *(2026.05.9)* | `application/json` *(défaut)* ou `multipart/form-data`. La variante multipart transforme le corps en liste de parts — voir *Corps multipart* ci-dessous. |
| **Extra headers** | Paires `Key:Value` séparées par des points-virgules, ajoutées aux en-têtes par défaut du connecteur (ou les surchargeant) (par ex. `X-Custom:value;Authorization:Bearer {{token}}`). |
| **Body** | Corps de requête — modèle JSON avec placeholders `{{param}}`. Le bouton **Format JSON** met en forme la valeur. Pour `multipart/form-data`, le corps est lu comme une part par ligne (`name=value` ou `file=@{{filePath}};filename=…;contentType=…`). |
| **Query params** | Modèle de chaîne de requête avec placeholders `{{param}}` (par ex. `pageSize={{pageSize}}&page={{page}}`). |
| **Response field** | Chemin optionnel en notation pointée (par ex. `data.items`) qui extrait un sous-arbre de la réponse — utile pour ne récupérer qu'un fragment du payload. |
| **Description** | Description en texte libre affichée dans les listes déroulantes et dans l'en-tête de l'éditeur. |

#### Corps multipart

Quand **Content-Type** est positionné sur `multipart/form-data`, le corps n'est plus un document JSON unique — il est lu comme une **liste de parts**, une par ligne non vide. Chaque part est soit une valeur littérale, soit une référence de fichier :

| Forme | Exemple | Sens |
|---|---|---|
| `name=value` | `comment=facture {{fedoc}}` | Ajoute un champ texte nommé `comment` avec la valeur résolue. |
| `file=@{{filePath}};filename=invoice.xml;contentType=application/xml` | *(idem)* | Attache une part fichier nommée `file`. `{{filePath}}` se résout vers le chemin sur disque ; `filename` et `contentType` sont les en-têtes envoyés sur cette part. |

Cas d'usage typique : une PA qui prend la facture UBL en upload `multipart/form-data` avec le XML dans une part `file` (l'endpoint d'import facture IOPOLE suit ce schéma).

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

## Onglet 4 — Webhooks

Configure la façon dont la PA pousse les **mises à jour de statut entrantes** vers NomaUBL. L'onglet suppose la forme de requête que NomaUBL implémente : `POST` HTTP avec un corps JSON, une signature HMAC-SHA256 sur un canonical `timestamp\nMÉTHODE\nchemin\nchecksumBody`, et un event id qui permet au vérificateur de dédupliquer les ré-essais « at-least-once ».

### Webhook entrant

| Champ | Description |
|---|---|
| **URL** *(lecture seule)* | L'endpoint sur lequel la PA doit poster : `https://<host>/api/webhook/{connector}/status`. À coller tel quel dans les réglages webhook de la PA. La route passe outre l'auth de session — la signature HMAC est la seule authentification. |

### Signature HMAC

| Champ | Description |
|---|---|
| **Shared secret** | Le même secret que celui collé côté PA. Stocké **chiffré au repos** (la propriété `webhook.secret` utilise la convention du suffixe `*Secret`). Utilisé pour vérifier l'en-tête `X-Signature` — `HmacSHA256` sur `timestamp + méthode + chemin + checksum du corps`. |

Une requête dont la signature ne correspond pas est rejetée avec un HTTP `401` (bruyant), pour qu'un secret incorrect d'un côté ou de l'autre remonte immédiatement dans le tableau de livraison webhook de la PA. Un nom de connecteur inconnu renvoie `404`.

### Chemins JSON du payload

Surcharges de chemins JSON qui indiquent au vérificateur où lire l'identifiant facture, la chaîne de statut et l'event id à l'intérieur du payload de la PA. Notation pointée — même syntaxe que les response mappings (`data.0.invoiceId`).

| Champ | Défaut | Description |
|---|---|---|
| **Invoice id field** | `invoiceId` | Chemin vers l'identifiant facture de la PA — le même UUID que nous avons enregistré au moment de l'envoi dans `F564230.FEUKIDSZ`. |
| **Status field** | `status.code` | Chemin vers la chaîne de statut de la PA. |
| **Event id field** | `eventId` | Utilisé pour dédupliquer les ré-essais « at-least-once ». Retombe sur `méthode+timestamp+body-hash` quand le champ est absent ou vide. |

### Table de correspondance des statuts

Liste de paires `paStatus:logical` séparées par point-virgule qui traduit le vocabulaire de la PA vers l'ensemble logique de statuts NomaUBL.

| Logique | Signification |
|---|---|
| `success` | Résout vers le statut cycle de vie *Déposée*. |
| `pending` | Enregistre un événement *En attente PA* sans modifier le statut courant. |
| `failed` | Résout vers un statut *Rejetée* avec le message extrait du payload. |

Exemple : `RECEIVED:pending;DELIVERED:success;REJECTED:failed`. Les statuts non mappés sont enregistrés comme un événement cycle de vie générique *Reçu* sans modifier le statut courant — l'entrée est tracée mais ne change pas l'état de la facture.

### Comportement de la route

| Situation | Réponse HTTP | Effet |
|---|---|---|
| Signature valide, event id connu (replay) | `200 OK` | Le replay est acquitté ; rien d'autre ne se passe — le cache de dédup l'absorbe. |
| Signature valide, event id nouveau | `200 OK` | La transition résolue est appliquée sur la ligne `F564230`. |
| Signature invalide | `401 Unauthorized` | Le monitoring de l'émetteur s'allume. |
| Connecteur inconnu | `404 Not Found` | — |
| Erreur interne (BD coupée, etc.) | `2xx` | NomaUBL renvoie 2xx pour stopper les ré-essais sans fin de l'émetteur ; l'erreur est tracée de ce côté. |

Un redémarrage JVM vide le cache mémoire de dédup (10 000 entrées × TTL 1 h) — rejouer le même événement après redémarrage ré-applique la transition, ce qui est décrit en clair : rejouer la même transition cycle de vie une seconde fois ne produit aucun changement observable. Le cache existe pour réduire le bruit, pas pour la correction.

---

## Onglet 5 — Test

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
