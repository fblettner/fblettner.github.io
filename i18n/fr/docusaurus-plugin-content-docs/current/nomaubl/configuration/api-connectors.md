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

- **Nouvel onglet Webhooks** — configure la façon dont la PA pousse les mises à jour de statut vers NomaUBL. Les requêtes sont signées HMAC avec un secret partagé et POSTées sur `/api/webhook/{connector}/status` ; le vérificateur déduplique les ré-essais « at-least-once » sur l'event id du payload et applique le statut résolu à la facture correspondante. L'onglet propose aussi les surcharges de chemins JSON pour les champs invoice id, status et event id, ainsi qu'une table de correspondance qui traduit le vocabulaire de la PA vers l'ensemble logique `success` / `pending` / `failed`.
- **Content-Type par endpoint** — chaque endpoint peut désormais déclarer `application/json` *(défaut)* ou `multipart/form-data`. Le builder multipart transforme le corps en liste de parts (`name=value`, `file=@{{filePath}};filename=…;contentType=…`), ce qui permet aux endpoints api-connecteur de piloter des PA qui attendent un upload `multipart/form-data` (par exemple IOPOLE).

`ImportStatusHandler` a aussi été relaxé — tout statut non `failed` / non `pending` est traité comme un succès, ce qui couvre les vocabulaires comme `EMITTED` / `RECEIVED` de IOPOLE sans configuration par PA.
:::

L'éditeur comporte **cinq onglets** :

1. **Connection** — URL racine, timeout, TLS, en-têtes par défaut.
2. **Authentication** — None / Basic / Bearer / API Key / OAuth2 (champs conditionnels selon le schéma).
3. **Endpoints** — catalogue des endpoints HTTP proposés par le connecteur, avec Content-Type par endpoint.
4. **Webhooks** — URL du webhook entrant, secret partagé, surcharges de chemins JSON et table de statuts pour les mises à jour poussées par la PA.
5. **Test** — exécuteur intégré permettant d'appeler un endpoint avec des paramètres personnalisés et d'inspecter la réponse.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 540" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="api-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="api-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="api-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="500" rx="14" fill="url(#api-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <rect x="220" y="20" width="580" height="40" fill="rgba(255,255,255,0.02)"/>
  <rect x="240" y="28" width="90" height="24" rx="4" fill="transparent"/>
  <text x="285" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Connection</text>
  <rect x="336" y="28" width="110" height="24" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="391" y="44" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Authentication</text>
  <rect x="452" y="28" width="84" height="24" rx="4" fill="transparent"/>
  <text x="494" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Endpoints</text>
  <rect x="542" y="28" width="86" height="24" rx="4" fill="transparent"/>
  <text x="585" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Webhooks</text>
  <rect x="634" y="28" width="50" height="24" rx="4" fill="transparent"/>
  <text x="659" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Test</text>
  <line x1="220" y1="60" x2="800" y2="60" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="86" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Authentification</text>
  <text x="240" y="108" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MÉTHODE</text>
  <rect x="320" y="98" width="220" height="26" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1.2"/>
  <text x="330" y="115" fill="#4a9eff" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">OAUTH2 ▾</text>
  <text x="552" y="115" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">None / Basic / Bearer / API_KEY / OAUTH2</text>

  <text x="240" y="148" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Identifiants</text>
  <text x="240" y="170" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IDENTIFIANT</text>
  <rect x="320" y="160" width="220" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="177" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">acme-tenant</text>

  <text x="240" y="200" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MOT DE PASSE</text>
  <rect x="320" y="190" width="220" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="207" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">••••••••••••</text>

  <line x1="240" y1="234" x2="780" y2="234" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="256" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Endpoint de jeton</text>
  <text x="240" y="276" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENDPOINT PATH</text>
  <rect x="380" y="266" width="400" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="282" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">/oauth2/token</text>

  <text x="240" y="304" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHAMP DU JETON</text>
  <rect x="380" y="294" width="220" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="310" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">access_token (auto)</text>

  <text x="240" y="332" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BODY CONTENT-TYPE</text>
  <rect x="380" y="322" width="300" height="24" rx="5" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="390" y="338" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">application/x-www-form-urlencoded ▾</text>

  <text x="240" y="360" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODÈLE DU CORPS</text>
  <rect x="240" y="368" width="540" height="58" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="386" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">grant_type=client_credentials</text>
  <text x="250" y="402" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">&amp;client_id={'{{username}}'}</text>
  <text x="250" y="418" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">&amp;client_secret={'{{password}}'}</text>

  <text x="240" y="446" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EN-TÊTES DE LA REQUÊTE DE JETON  <text fill="#64748b" fontSize="8" fontStyle="italic">(2026.05.8)</text></text>
  <rect x="240" y="454" width="540" height="40" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="471" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">customer-id:CUST123;X-Tenant:acme</text>
  <text x="250" y="487" fill="#64748b" fontSize="8" fontStyle="italic" fontFamily="system-ui, sans-serif">envoyés uniquement sur la requête de jeton — pour les PA qui exigent un en-tête tenant-id sur l'auth</text>

  <rect x="20" y="98" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="113" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cinq schémas d'auth</text>
  <text x="30" y="126" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">champs conditionnels par méthode</text>
  <line x1="220" y1="114" x2="320" y2="111" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#api-arrow)"/>

  <rect x="820" y="320" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Corps form / JSON</text>
  <text x="830" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">défaut OAuth2 client_credentials</text>
  <line x1="820" y1="336" x2="680" y2="336" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#api-arrow)"/>

  <rect x="20" y="368" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="383" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modèle de corps</text>
  <text x="30" y="396" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vide → défaut appliqué</text>
  <line x1="220" y1="384" x2="240" y2="396" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#api-arrow)"/>

  <rect x="820" y="450" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="465" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">En-têtes auth personnalisés</text>
  <text x="830" y="478" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">envoyés uniquement sur le jeton</text>
  <line x1="820" y1="466" x2="780" y2="466" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#api-arrow)"/>
</svg>

---

## Onglet 1 — Connection

### Connection

| Champ | Description |
|---|---|
| **Base URL** | URL racine de l'API cible (par ex. `https://api.example.com:9300`). Tous les chemins d'endpoint y sont ajoutés. |
| **Timeout (ms)** | Délai d'expiration des requêtes HTTP en millisecondes. Valeur par défaut `30000` (30 s). |
| **SSL Verify** | `true` / `false` — active la validation du certificat TLS du serveur. À positionner à `false` uniquement en environnement non-production utilisant des certificats auto-signés. |
| **Debug** *(2026.06.14)* | `Y` / `N` (défaut `N`). Quand `Y`, chaque appel passant par ce connecteur écrit une trace requête + réponse sur une ligne — URL, code HTTP et aperçu du corps — dans le journal du service. À activer pendant le câblage d'une nouvelle plateforme pour vérifier la substitution d'URL, les paramètres de requête et la forme de la réponse ; à désactiver une fois le connecteur stable. Une trace uniforme remplace l'ancien log ponctuel de *import-status* et *invoice-statuses*. |

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

Cas d'usage typique : une PA qui prend la facture UBL en upload `multipart/form-data` avec le XML dans une part `file` (l'endpoint d'import facture IOPOLE suit ce schéma). Le nom de la part (`file` ci-dessus) est libre — alignez-le sur ce qu'attend la plateforme.

Trois placeholders portent le document dans la part :

- `{{filePath}}` — le chemin du fichier UBL sur disque. À l'**envoi initial**, c'est le fichier d'entrée ; au **renvoi** *(2026.06.13)*, NomaUBL écrit d'abord le blob UBL stocké dans un fichier temporaire, donc `{{filePath}}` fonctionne de la même façon et une seule configuration de connecteur sert les deux (le fichier temporaire est nettoyé automatiquement).
- `{{content}}` — le base64 de l'UBL, pour les plateformes qui prennent les octets en ligne dans un corps JSON plutôt qu'en part fichier.
- `{{docName}}` — un nom `<doc>_<dct>_<kco>` sanitisé, pratique pour l'en-tête `filename`.

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

### Chaînage d'endpoints (`then`) \{#endpoint-chaining\}

*(2026.06.13)* Un endpoint peut transmettre son résultat à un appel de suivi dans la même étape. Renseignez **`then`** avec le nom de l'endpoint suivant, et **`then.itemsField`** / **`then.idField`** pour choisir l'id à transmettre depuis la première réponse. Cet id arrive dans l'appel de suivi sous `{{prevId}}` (aussi aliasé `{{uuid}}`). Cela pilote les flux de plateforme en deux temps — *déposer puis traiter*, ou *lister puis récupérer chaque détail* — sans aller-retour par NomaUBL entre les deux appels.

### Exemple complet — Esker (dépôt, puis traitement) \{#esker\}

Esker prend la facture en deux appels, câblés comme un connecteur API `pa-default` :

| Étape | Endpoint | Ce qu'il fait |
|---|---|---|
| **Envoi** | `POST /api/v1/fileContent` | Un corps JSON porte l'UBL en base64 (`{{content}}`) ; la directive `decode=b64` placée dans ce corps indique à *Esker* que le contenu est en base64, donc aucun fichier temporaire n'est nécessaire. La réponse renvoie un id de fichier, mappé sur `uuid` dans *Response Mappings*. |
| **Import status** | `POST /api/v1/process/{{processName}}` | Mappé sur le slot **import-status** — fetch-import l'appelle au prochain cycle. Il déclenche le traitement effectif en utilisant l'id de fichier de l'envoi. |

L'authentification est `OAUTH2` avec un **Body Content-Type** form-urlencoded ; laisser le **Body template** vide laisse NomaUBL émettre seul `grant_type=client_credentials&client_id={{username}}&client_secret={{password}}`.

Le slot import-status est repointé vers le second endpoint depuis le champ **Import status** dans [E-Invoicing → Actions](./system/einvoicing.md) — le nom du slot remplace l'endpoint par défaut du connecteur, de sorte que le même connecteur sert l'envoi et l'interrogation du statut.

:::tip
Les PA qui ne renvoient pas le vocabulaire standard `success/pending/failed` (Esker, IOPOLE, …) sont maintenant lues correctement par import-status : un vrai échec HTTP compte en erreur, tandis qu'un `2xx` sans champ `status` flue la branche optimiste de succès. Activez **Debug** sur l'onglet Connexion pendant le câblage des deux endpoints pour suivre les traces.
:::

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
