---
title: E-Invoicing
description: "Configurer la connexion de NomaUBL à une Plateforme Agréée (PA), valider les documents UBL, échanger via REST ou SFTP et lier les actions vendeur réglementaires aux endpoints de la PA."
keywords: [NomaUBL, e-invoicing, facturation électronique, Plateforme Agréée, PA, OAUTH2, REST API, SFTP, validation UBL, réforme facturation électronique, actions réglementaires, statuts de cycle de vie, JD Edwards, SAP, NetSuite]
---

# E-Invoicing

L'éditeur **E-Invoicing** définit **comment NomaUBL se connecte à une Plateforme Agréée (PA)** — la plateforme certifiée qui réceptionne, valide et achemine les factures électroniques vers l'infrastructure publique française. Il définit aussi la validation locale des documents UBL avant envoi, et le mappage des actions vendeur réglementaires vers les appels API de la PA.

Cette page s'applique à des documents issus de n'importe quel système source — JD Edwards, SAP, NetSuite, ERP personnalisé — tant que la source est mappée vers UBL.

L'éditeur comporte **cinq onglets** :

1. **UBL Validation** — répertoire des transformations XSL utilisées pour convertir le XML source en UBL.
2. **PA Connection** — transport (API ou SFTP), identifiants, planification.
3. **PA Endpoints** — catalogue d'endpoints REST utilisés pour communiquer avec la PA.
4. **Settings** — contrôles de mock / test.
5. **Actions** — lier les actions vendeur réglementaires à des endpoints API (PA *ou* système source).

---

## Onglet 1 — UBL Validation

Cet onglet ne configure que le **répertoire des fichiers XSL** utilisés pour **transformer le XML source en UBL**. La validation de conformité de l'UBL est faite par les **schématrons standard**, documentés à part (voir *Outils UBL → Validate*).

### UBL XSLT Transforms

| Champ | Description |
|---|---|
| **XSLT Directory** | Répertoire contenant les fichiers `.xsl` utilisés pour convertir le XML source en UBL. Le placeholder `%APP_HOME%` est remplacé par la racine d'installation de NomaUBL. |

---

## Onglet 2 — PA Connection

### Connection (quel que soit le Mode)

| Champ | Valeurs | Description |
|---|---|---|
| **Mode** | `API` / `FTP` / *(aucun)* | Transport utilisé pour l'envoi des factures. `API` = échange REST ; `FTP` = dépôt via SFTP ; *(aucun)* = désactiver entièrement l'étape d'envoi. |
| **Timeout (ms)** | nombre | Délai d'expiration des requêtes HTTP / SFTP en millisecondes. Valeur par défaut `30000` (30 s). |
| **SSL Verify** | `true` / `false` | Active la validation du certificat TLS de la PA. À positionner à `false` uniquement en environnement non-production utilisant des certificats auto-signés. |

Les sections ci-dessous apparaissent en fonction du **Mode** choisi.

### Si Mode = `API`

#### API Server

| Champ | Description |
|---|---|
| **Base URL** | URL racine de l'API REST de la PA (par ex. `https://api.plateformeagree.fr`). |

#### Authentication

| Champ | Description |
|---|---|
| **Auth type** | Fixé à `OAUTH2` pour les API de PA — non modifiable. |
| **Token Endpoint** | Chemin permettant d'obtenir un jeton OAUTH2 (par ex. `/api/login_check`). Combiné à **Base URL**. |
| **Username** | Nom de compte fourni par la PA. |
| **Password** | Mot de passe du compte. |

#### Status Retrieval

| Champ | Description |
|---|---|
| **Page size** | Nombre de statuts récupérés par page lors de l'interrogation de la PA (valeur par défaut `100`). |
| **Last retrieved at** | Date/heure ISO de la dernière récupération de statut réussie (par ex. `2025-01-01T00:00:00Z`). Mis à jour automatiquement à chaque exécution ; une saisie manuelle sert de point de départ. |

#### Background Scheduling (mode serveur)

Ces intervalles ne s'appliquent que lorsque NomaUBL s'exécute en **mode serveur** (processus persistant). Les modifications nécessitent un redémarrage du serveur pour être prises en compte.

| Champ | Description |
|---|---|
| **Import poll interval (min)** | Minutes entre deux interrogations automatiques du statut d'import pour les factures en attente (statut `9906`). `0` = désactivé. |
| **Status retrieval interval (min)** | Minutes entre deux récupérations automatiques des statuts de cycle de vie depuis la PA. `0` = désactivé. |

### Si Mode = `FTP`

| Champ | Description |
|---|---|
| **Host** | Hôte SFTP (par ex. `ftp.plateformeagree.fr`). |
| **Port** | Port SFTP. Valeur par défaut `22`. |
| **User** | Utilisateur SFTP. |
| **Password** | Mot de passe SFTP. |
| **Outbound Dir** | Répertoire distant où NomaUBL dépose les fichiers UBL pour la PA (par ex. `/out/invoices/`). |
| **Inbound Dir** | Répertoire distant où la PA écrit les mises à jour de statut que NomaUBL récupère (par ex. `/in/status/`). |

---

## Onglet 3 — PA Endpoints

Catalogue des endpoints REST utilisés par NomaUBL pour interagir avec la PA. Chaque entrée est repliable — cliquez sur la ligne pour développer ou replier.

Des **placeholders `{{param}}`** peuvent être utilisés dans les chemins d'URL, les paramètres de requête, les en-têtes et les corps ; les valeurs sont injectées au moment de l'appel depuis le contexte du document ou depuis les paramètres d'action définis à l'onglet 5.

### Endpoints prédéfinis

NomaUBL est livré avec les endpoints suivants déjà configurés pour une intégration REST PA classique. Les ajuster pour correspondre aux chemins exacts de la PA cible, ou en ajouter des supplémentaires :

| Méthode | Nom | Rôle |
|---|---|---|
| `POST` | **import** | Soumettre une facture UBL à la PA. |
| `GET` | **import-status** | Interroger le statut d'import d'une facture précédemment soumise (par ex. attente de l'accusé de réception PA). |
| `GET` | **invoice-statuses** | Récupérer les statuts de cycle de vie d'une ou plusieurs factures déjà présentes sur la PA. |
| `GET` | **resolve-invoice** | Rechercher une facture sur la PA par son identifiant — utile pour la réconciliation. |
| `POST` | **post-status** | Pousser une mise à jour de statut vendeur vers la PA (utilisé par les actions réglementaires de l'onglet 5). |

#### Exemple — `POST import`

Configuration concrète livrée par défaut pour l'endpoint `import` :

| Champ | Valeur |
|---|---|
| **Name** | `import` |
| **Description** | Send invoice to PA |
| **Method** | `POST` |
| **URL path** | `/api/v1/sale/invoices/import` |
| **Query params** | `pageSize={{pageSize}}&page={{page}}` |
| **Headers** | `Content-Type:application/json` |

**Body**

```json
{
  "format": "xml_ubl",
  "content": "{{content}}",
  "postActions": []
}
```

`{{content}}` est remplacé au moment de l'appel par la charge utile du document UBL (en général le XML encodé en base64).

**Response mappings**

| Nom logique | Chemin JSON |
|---|---|
| `uuid` | `uuid` |
| `status` | `status` |

Après une soumission réussie, la PA renvoie un corps JSON contenant `uuid` et `status`. NomaUBL en extrait les deux valeurs et les enregistre sur la fiche facture — les actions ultérieures (interrogation de statut, renvoi, actions réglementaires) peuvent ensuite les référencer.

### Champs par endpoint

| Champ | Description |
|---|---|
| **Name** | Identifiant logique utilisé en interne et référencé depuis l'onglet Actions (par ex. `import`, `getStatus`). |
| **Description** | Libellé lisible affiché dans l'éditeur (par ex. *Send invoice to PA*). |
| **Method** | Méthode HTTP (`GET` / `POST` / `PUT` / `DELETE` / `PATCH`). |
| **URL path** | Chemin de l'endpoint ajouté à la **Base URL** de la connexion (par ex. `/api/v1/sale/invoices/import`). |
| **Query params** | Modèle de chaîne de requête (par ex. `pageSize={{pageSize}}&page={{page}}`). |
| **Headers** | En-têtes HTTP, un par ligne ou séparés par des sauts de ligne (par ex. `Content-Type:application/json`). |
| **Body** | Corps de requête — n'apparaît que pour `POST` / `PUT` / `PATCH`. Les corps JSON peuvent être formatés automatiquement via le bouton **Format JSON**. |
| **Response Mappings** | Lie des **noms logiques** à des **chemins JSON** dans la réponse. Par exemple, mapper `uuid` → `data.uuid` permet à NomaUBL d'extraire l'UUID assigné par la PA et de le stocker sur la facture. |

Utilisez le bouton **Ajouter un endpoint** en bas de la liste pour ajouter une nouvelle entrée ; supprimez un endpoint via l'icône corbeille de sa ligne.

---

## Onglet 4 — Settings

### Mock / Testing

Contrôle un mock de PA intégré, utile pour le développement et les tests CI.

| Champ | Valeurs | Description |
|---|---|---|
| **Use Mock** | `Y` / `N` | À `Y`, les appels sont dirigés vers le mock interne au lieu de la PA configurée. |
| **Mock Behavior** | `ALWAYS_SUCCESS` / `ALWAYS_FAILED` / `ALTERNATING` / `TOKEN_EXPIRED` / `RANDOM` | Comportement à simuler par le mock : succès systématique, échec systématique, alternance succès/échec, simulation d'un jeton OAUTH2 expiré, ou résultats aléatoires. |

---

## Onglet 5 — Actions

Lier les **actions vendeur réglementaires** à des endpoints de connecteur API. Ces actions apparaissent dans le **modal de détail facture** en fonction du statut de cycle de vie du document, conformément à la réglementation française de la facturation électronique. Les actions non liées sont affichées comme désactivées dans l'interface.

L'endpoint cible peut être **soit la PA, soit une API du système source** — par exemple, *Cancel Accounting* appelle généralement l'endpoint d'annulation comptable de l'ERP source, et non la PA. Les connecteurs utilisés ici sont définis sous *Configuration → API Connectors* (documentés séparément).

### Actions disponibles

| Action | Statut déclencheur |
|---|---|
| **Payment Received** | `205` |
| **Credit Note** | `206` / `207` |
| **Corrected Invoice** | `206` / `207` |
| **Send Completed** | `208` |
| **Cancel Accounting** | `210` / `213` |
| **New Invoice** | `213` |
| **Resend to PA** | `9904` / `9907` |

### Configurer une liaison

Pour chaque action à activer, cliquez sur **Ajouter une liaison** et renseignez :

| Champ | Description |
|---|---|
| **Action** | Action réglementaire à lier. Chaque action ne peut être liée qu'une seule fois. |
| **Connector** | Modèle de connecteur API qui fournit l'endpoint — **connecteur PA ou connecteur système source** (défini sous *Configuration → API Connectors*). |
| **Endpoint** | Nom de l'endpoint dans le connecteur sélectionné (la liste déroulante affiche les endpoints qui y sont déclarés). |
| **Parameters** | Valeurs des paramètres propres à l'endpoint. Les valeurs par défaut définies au niveau de l'endpoint sont pré-remplies au moment du choix de l'endpoint. |

Les valeurs de paramètres peuvent être **littérales** (par ex. `JDE`) ou des **placeholders** qui injectent des valeurs de la facture courante. Placeholders disponibles :

```
{{fedoc}}          {{fedct}}        {{kco}}            {{ublNumber}}
{{statusCode}}     {{customerName}} {{totalHT}}        {{totalTTC}}
{{currency}}       {{amountDue}}    {{invoiceType}}    {{orderRef}}
{{contractRef}}
```

Si un endpoint ne déclare aucun paramètre, un unique champ libre **Params** est affiché, dans lequel saisir manuellement des paires `key={{field}};key2={{field2}}`.

### Exemple — Payment Received → comptabilité JDE

Liaison typique quand le système source est JD Edwards : sur `Payment Received` (statut `205`), appeler un report AIS JDE pour enregistrer le paiement dans l'ERP source.

| Champ | Valeur |
|---|---|
| **Action** | `Payment Received (status 205)` |
| **Connector** | `jde-ais` *(connecteur AIS JD Edwards défini sous Configuration → API Connectors)* |
| **Endpoint** | `reportExecute_R0010P — Execute Report R0010P` |

**Parameters**

| Paramètre | Valeur |
|---|---|
| **Report Name** | `R0010P` |
| **Report Version** | `ZJDE0001` |
| **Company Code** | `{{fedct}}` |

Les deux premiers paramètres sont littéraux (l'identifiant et la version du report JDE sont constants), tandis que `Company Code` utilise le placeholder `{{fedct}}` pour injecter la société de la facture courante. Remplacer le connecteur / endpoint par l'API fournie par l'ERP source cible — le même mécanisme s'applique aux BAPI SAP, aux RESTlets NetSuite ou à un webhook d'ERP personnalisé.

---

## Conseils & bonnes pratiques

- **Démarrer avec `paMode=` (aucun)** pendant le paramétrage d'un nouveau type de document — la chaîne UBL peut être construite de bout en bout avant intégration de la PA.
- **Tester contre le mock** (onglet 4) avant de cibler la PA réelle. Utiliser `ALTERNATING` pour tester à la fois les chemins « succès » et « erreur » dans le détail facture.
- **Définir les endpoints une seule fois, les réutiliser depuis Actions.** Ne pas dupliquer les URLs entre actions — lier chaque action au nom d'endpoint correspondant.
- **Intervalles qui nécessitent un redémarrage** : modifier `Import poll interval` ou `Status retrieval interval` ne prend effet qu'après redémarrage du processus serveur NomaUBL.
- **Les Response Mappings sont le contrat avec la PA.** Si la PA modifie un chemin de champ dans sa réponse, mettre à jour le mapping plutôt que d'analyser la réponse dans le code appelant.
