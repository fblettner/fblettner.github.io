---
title: Connecteurs API
description: "Définir les connecteurs REST API génériques utilisés par NomaUBL pour dialoguer avec une Plateforme Agréée, un ERP source (JD Edwards AIS, SAP, NetSuite, ERP personnalisé) ou tout service HTTP : un éditeur en cinq étapes (connexion, authentification, endpoints, webhooks, test), chaque endpoint étant décrit en quatre parties (identité, entrées, appel, réponse)."
keywords: [NomaUBL, connecteurs API, REST, OAuth2, OAUTH2, Bearer, API key, Basic auth, JD Edwards AIS, AIS, SAP, NetSuite, intégration, endpoints, placeholders, Plateforme Agréée]
---

# Connecteurs API

L'éditeur **API Connectors** sert à déclarer les intégrations REST API. Un connecteur regroupe la **configuration nécessaire pour dialoguer avec un système distant** — URL racine, authentification et liste d'endpoints — et se référence ensuite par son nom dans le reste de NomaUBL.

Les connecteurs sont consommés par la page [Liaisons d'actions](../management/actions.md) pour câbler une action vendeur réglementaire à un appel API distant, par les [Règles de notification](../management/notification-rules.md), et par toute fonctionnalité NomaUBL qui appelle un endpoint HTTP. Cibles typiques :

- L'API REST d'une **Plateforme Agréée** (PA).
- Une API d'action de l'**ERP source** — par exemple **JD Edwards AIS** pour enregistrer un paiement, une **BAPI SAP**, un **RESTlet NetSuite**, un webhook d'ERP personnalisé.
- Tout service HTTP tiers impliqué dans la chaîne de facturation électronique.

Cette page s'applique à des documents issus de n'importe quel système source — JD Edwards, SAP, NetSuite, ERP personnalisé — tant que la source est mappée vers UBL.

L'éditeur est organisé en **cinq étapes**, présentées sous forme de cartes en haut de l'écran. Chaque carte résume en quelques mots l'état de son étape ; un clic affiche ses réglages sous les cartes :

| Étape | État affiché | Réglages |
|---|---|---|
| **Connection** | L'URL racine, ou *No base URL* en rouge | URL racine, timeout, limites de requêtes, TLS, trace de debug, en-têtes par défaut. |
| **Authentication** | La méthode (`OAUTH2`, `BASIC`…), ou *None* | None / Basic / Bearer / API Key / OAuth2, avec les champs propres au schéma choisi, et un test d'authentification. |
| **Endpoints** | Le nombre d'endpoints (*8 endpoint(s)*) | Le catalogue des endpoints HTTP du connecteur ; chaque endpoint se règle en quatre parties (identité, entrées, appel, réponse). |
| **Webhooks** | *Signed* quand un secret partagé est renseigné, *Not set* sinon | URL du webhook entrant, secret partagé, chemins JSON et table de statuts pour les mises à jour poussées par la PA. |
| **Test** | *Try an endpoint* | Exécuteur intégré pour appeler un endpoint avec des paramètres choisis et examiner la réponse. |

Comme les autres éditeurs des Paramètres de NomaUBL, l'éditeur de connecteur est en anglais : les libellés sont cités tels quels.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 404" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="apic-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="apic-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="apic-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="apic-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="364" rx="14" fill="url(#apic-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">pa-default</text>
  <text x="312" y="48" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Default Platform Agréée (PA) API connector — referenced by e-invoicing / e-reporting</text>
  <rect x="906" y="32" width="54" height="22" rx="5" fill="url(#apic-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="933.0" y="46.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="220" y="62" width="760" height="64" fill="rgba(255,255,255,0.015)"/>
  <rect x="232" y="72" width="134" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="240" y="79" width="16" height="16" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="248.0" y="90.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">◎</text>
  <text x="262" y="90.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTION</text>
  <text x="241" y="108" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">https://pa.example.com</text>
  <line x1="367" y1="94.0" x2="379" y2="94.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#apic-flow)"/>
  <rect x="382" y="72" width="134" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="390" y="79" width="16" height="16" rx="5" fill="rgba(168,85,247,0.14)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="398.0" y="90.5" fill="#c084fc" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="412" y="90.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AUTHENTICATION</text>
  <text x="391" y="108" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">OAUTH2</text>
  <line x1="517" y1="94.0" x2="529" y2="94.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#apic-flow)"/>
  <rect x="532" y="72" width="134" height="44" rx="8" fill="rgba(50,215,75,0.14)" stroke="#4ade80" strokeWidth="1.3"/>
  <rect x="540" y="79" width="16" height="16" rx="5" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="548.0" y="90.5" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">≡</text>
  <text x="562" y="90.5" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENDPOINTS</text>
  <text x="541" y="108" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">10 endpoint(s)</text>
  <line x1="667" y1="94.0" x2="679" y2="94.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#apic-flow)"/>
  <rect x="682" y="72" width="134" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="690" y="79" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="698.0" y="90.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">◔</text>
  <text x="712" y="90.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WEBHOOKS</text>
  <text x="691" y="108" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Not set</text>
  <line x1="817" y1="94.0" x2="829" y2="94.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#apic-flow)"/>
  <rect x="832" y="72" width="134" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="840" y="79" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="848.0" y="90.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="862" y="90.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEST</text>
  <text x="841" y="108" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Try an endpoint</text>
  <line x1="220" y1="126" x2="980" y2="126" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="148" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ENDPOINTS</text>
  <text x="240" y="164" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Use &#123;&#123;param&#125;&#125; placeholders in URL, headers, and body. Built-in: &#123;&#123;token&#125;&#125;, &#123;&#123;username&#125;&#125;, &#123;&#123;password&#125;&#125;.</text>
  <rect x="240" y="174" width="720" height="30" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="193" fill="#94a3b8" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">▸ ENDPOINTS NOMAUBL USES  (8/10)</text>
  <text x="450" y="193" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">— add any your PA needs; the -selfbilled variants are optional</text>
  <rect x="240" y="214" width="720" height="28" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="220" width="40" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="270.0" y="231.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POST</text>
  <text x="300" y="232" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">import</text>
  <text x="450" y="232" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Send invoice (sales flow)</text>
  <rect x="932" y="218" width="20" height="20" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="942.0" y="231.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="240" y="248" width="720" height="28" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="254" width="40" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="270.0" y="265.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">GET</text>
  <text x="300" y="266" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">import-status</text>
  <text x="450" y="266" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Import status poll (sales)</text>
  <rect x="932" y="252" width="20" height="20" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="942.0" y="265.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="240" y="282" width="720" height="28" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="288" width="40" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="270.0" y="299.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POST</text>
  <text x="300" y="300" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">invoice-statuses</text>
  <text x="450" y="300" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lifecycle events (sales)</text>
  <rect x="932" y="286" width="20" height="20" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="942.0" y="299.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="240" y="316" width="720" height="28" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="322" width="40" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="270.0" y="333.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POST</text>
  <text x="300" y="334" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">report-import</text>
  <text x="450" y="334" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Submit e-reporting flux</text>
  <rect x="932" y="320" width="20" height="20" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="942.0" y="333.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="240" y="352" width="100" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="290.0" y="366.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add endpoint</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étapes et leur état</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic ouvre ses réglages</text>
  <line x1="200" y1="87.0" x2="232" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apic-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">URL de base comme état</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">No base URL en rouge si vide</text>
  <line x1="200" y1="187.0" x2="280" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apic-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Endpoints attendus</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">configurés / connus, ajout en un clic</text>
  <line x1="200" y1="277.0" x2="240" y2="189" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apic-arrow)"/>
  <rect x="1000" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Endpoints · Webhooks · Test</text>
  <text x="1010" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nombre, Signed / Not set, essai</text>
  <line x1="1000" y1="87.0" x2="920" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apic-arrow)"/>
  <rect x="1000" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une carte par endpoint</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic ouvre ses quatre parties</text>
  <line x1="1000" y1="347.0" x2="916" y2="281" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apic-arrow)"/>
</svg>

---

## Étape Connection \{#connection\}

### Connection

| Champ | Description |
|---|---|
| **Base URL** | URL racine de l'API cible (par ex. `https://api.example.com:9300`). Tous les chemins d'endpoint y sont ajoutés. |
| **Timeout (ms)** | Délai d'expiration des requêtes HTTP en millisecondes. Valeur par défaut `30000` (30 s). |
| **Min. interval between requests (ms)** | Écart minimal entre deux requêtes vers l'**hôte** du connecteur. Vide ou `0` = inactif. Voir [Limites de requêtes](#request-limits). |
| **Error limit (per 120 s)** | Retient les requêtes vers l'hôte tant que ce nombre de réponses en erreur figure dans les 120 dernières secondes. Vide ou `0` = inactif. Voir [Limites de requêtes](#request-limits). |
| **SSL Verify** | `true` / `false` — active la validation du certificat TLS du serveur. À positionner à `false` uniquement en environnement non-production utilisant des certificats auto-signés. |
| **Debug** | `Y` / `N` (défaut `N`). Quand `Y`, chaque appel passant par ce connecteur est tracé dans le journal du service — l'URL et le code HTTP, les **en-têtes** de requête et de réponse (l'autorisation et les autres en-têtes sensibles étant masqués), et les **corps** complets de requête et de réponse, chacun tronqué à la **Debug body limit** pour qu'un gros contenu ne noie pas le journal. À activer pendant le câblage d'une nouvelle plateforme pour vérifier la substitution d'URL, les paramètres de requête, les en-têtes et les corps exacts échangés ; à désactiver une fois le connecteur stable. |
| **Debug body limit** | Nombre de caractères conservés pour chaque corps dans la trace de debug (défaut `100000`). À réduire pour une plateforme qui renvoie de très gros contenus. |

### Limites de requêtes \{#request-limits\}

Certaines plateformes plafonnent le débit et refusent l'excédent par `429 Too Many Requests`, ou bloquent un client après trop d'erreurs. Les deux limites ci-dessus protègent l'**hôte** de la plateforme (le nom d'hôte de l'URL appelée) :

- **Min. interval between requests** espace chaque requête vers l'hôte d'au moins ce nombre de millisecondes.
- **Error limit (per 120 s)** compte les réponses `400`, `403`, `404`, `405`, `429` et `444` des 120 dernières secondes ; une fois la limite atteinte, les requêtes attendent que les erreurs les plus anciennes sortent de la fenêtre.
- **Après un `429`**, l'hôte est mis en pause pendant la durée indiquée par l'en-tête `Retry-After` de la plateforme (300 s au plus, 30 s en son absence), puis la requête refusée repart une fois — un envoi retenu par la limite n'est pas compté en échec.

Les requêtes patientent ; aucune n'est refusée. Les limites sont communes à tout ce qui appelle l'hôte depuis la machine du serveur : envois, relevés de statuts, tâches planifiées et traitements lancés en ligne de commande sont comptés ensemble. Renseigner les mêmes valeurs **sur chaque connecteur qui appelle la plateforme** (envoi, statut d'import, cycle de vie…). Quand des requêtes sont retenues, le journal du service affiche `** WARN ** API ** LIMIT : <host> — requests held for N s (…)`.

:::tip[Valeurs conseillées pour TX2]
`300` ms et `20`, sur chaque connecteur qui l'appelle.
:::

### Default Headers

| Champ | Description |
|---|---|
| **Headers** | Paires `Key:Value` séparées par des points-virgules, appliquées à **tous** les endpoints du connecteur (par ex. `Content-Type:application/json;Accept:application/json`). Une valeur peut référencer `{{kco}}` (la société de la facture) — pour les plateformes qui cadrent les requêtes par organisation, comme un en-tête `Organization-Id`. Les *Extra headers* d'un endpoint peuvent surcharger ces valeurs au cas par cas. |

---

## Étape Authentication \{#authentication\}

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
| **Body Content-Type** | `application/json` *(défaut)* ou `application/x-www-form-urlencoded`. La variante formulaire émet le corps de la requête de jeton sous forme de paires URL-encodées, ce qu'attend le flux OAuth2 `client_credentials` standard. |
| **Body template** | Corps personnalisé pour la requête de jeton, avec placeholders `{{username}}` / `{{password}}`. **Laisser vide** pour utiliser des valeurs par défaut adaptées : le mode JSON émet le payload JD Edwards AIS (`{ username, password, deviceName }`) ; le mode formulaire émet `grant_type=client_credentials&client_id={{username}}&client_secret={{password}}`, ou `grant_type=refresh_token` quand un **Refresh token** est renseigné. |
| **Refresh token** | Un jeton OAuth2 hors ligne de longue durée pour le grant `refresh_token` — pour les plateformes (comme Yooz Rising) qui en délivrent un. Masqué, et gardé hors du corps de la requête ; un corps personnalisé peut le référencer par `{{refreshToken}}`. |
| **Token request headers** | Optionnel. Paires `Key:Value` séparées par point-virgule envoyées **uniquement sur la requête de jeton** — pour les PA qui exigent un en-tête tenant-id sur l'appel d'auth lui-même. Exemple : `customer-id:CUST123;X-Tenant:acme`. |

**Test authentication** — le bloc *Test*, en bas de l'étape et quelle que soit la méthode, s'authentifie avec les identifiants configurés (en OAUTH2, demande un jeton) et signale le succès ou l'erreur exacte : la connexion est ainsi vérifiée avant l'envoi d'une facture.

---

## Étape Endpoints \{#endpoints\}

Catalogue des endpoints HTTP accessibles via ce connecteur. Chaque endpoint est une carte qui affiche sa méthode, son nom et sa description ; un clic sur l'en-tête l'ouvre ou la referme. **+ Add endpoint** ajoute un endpoint, la **×** rouge d'une carte le supprime.

:::tip[Endpoints attendus]
Un bloc replié **Endpoints NomaUBL uses**, avec le nombre de ceux déjà configurés (par exemple `5/7`), liste les endpoints plateforme que NomaUBL connaît — *send* (`import`), *import status*, *invoice statuses*, leurs variantes `-selfbilled` (qui routent les documents d'auto-facturation / flux achats et retombent sur le flux standard), *resolve invoice*, *post status*, le dépôt d'e-reporting (`report-import`) et la vérification d'annuaire — en signalant ceux déjà configurés et en proposant un **ajout** en un clic pour ceux manquants : un endpoint requis passe plus difficilement inaperçu. Un clic sur le titre le déplie. Une mise à jour ajoute aussi à un connecteur livré les endpoints qui lui manquent et conserve ceux déjà présents (voir [Mise à jour](../installation/upgrade.md)).
:::

Des **placeholders `{{param}}`** peuvent être utilisés dans les URLs, les en-têtes, les paramètres de requête et les corps. Trois placeholders sont disponibles d'emblée :

- `{{token}}` — le jeton OAUTH2 (quand l'authentification `OAUTH2` est configurée)
- `{{username}}` — l'identifiant configuré
- `{{password}}` — le mot de passe configuré

Tous les autres placeholders doivent être **déclarés dans la partie *Inputs* de l'endpoint** (voir ci-dessous).

Un placeholder intégré supplémentaire, `{{passThrough}}`, se résout en un drapeau **archivage seul** déduit du type de routage de la facture. Les factures en e-reporting plutôt qu'en routage (B2C, B2BInt, Archivage seul, Hors périmètre) le résolvent en archivage seul, tandis que les B2B / B2G le résolvent en transmission — le tout déterminé automatiquement au premier envoi comme à tout renvoi. Placez `{{passThrough}}` dans le corps de l'endpoint d'envoi quand la plateforme cible (par ex. Yooz) sait archiver un document sans le transmettre à un destinataire : ces factures sont alors archivées sur la plateforme au lieu d'être transmises.

### Un endpoint en quatre parties \{#endpoint-parts\}

Une fois ouverte, la carte d'un endpoint présente ses réglages en quatre cartes d'étape, chacune avec son état ; un clic sur une carte affiche ses champs.

<svg viewBox="0 0 1200 362" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="apie-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="apie-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="apie-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="apie-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="322" rx="14" fill="url(#apie-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="720" height="30" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="43" width="40" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="270.0" y="54.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POST</text>
  <text x="300" y="55" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">report-import</text>
  <text x="420" y="55" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Submit e-reporting flux</text>
  <rect x="240" y="70" width="720" height="64" fill="rgba(255,255,255,0.015)"/>
  <rect x="252" y="80" width="162" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="260" y="87" width="16" height="16" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="268.0" y="98.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="282" y="98.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT IS</text>
  <text x="261" y="116" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Submit e-reporting flux</text>
  <line x1="415" y1="102.0" x2="427" y2="102.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#apie-flow)"/>
  <rect x="430" y="80" width="162" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="438" y="87" width="16" height="16" rx="5" fill="rgba(168,85,247,0.14)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="446.0" y="98.5" fill="#c084fc" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">→</text>
  <text x="460" y="98.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INPUTS</text>
  <text x="439" y="116" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">0 parameter(s)</text>
  <line x1="593" y1="102.0" x2="605" y2="102.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#apie-flow)"/>
  <rect x="608" y="80" width="162" height="44" rx="8" fill="rgba(255,159,10,0.14)" stroke="#fb923c" strokeWidth="1.3"/>
  <rect x="616" y="87" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="624.0" y="98.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">➤</text>
  <text x="638" y="98.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THE CALL</text>
  <text x="617" y="116" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">POST /v1/flows</text>
  <line x1="771" y1="102.0" x2="783" y2="102.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#apie-flow)"/>
  <rect x="786" y="80" width="162" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="794" y="87" width="16" height="16" rx="5" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="802.0" y="98.5" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">←</text>
  <text x="816" y="98.5" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THE ANSWER</text>
  <text x="795" y="116" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">the whole answer · 1 mappin…</text>
  <line x1="240" y1="134" x2="960" y2="134" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="165" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Method</text>
  <rect x="370" y="150" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="164.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">POST ▾</text>
  <text x="466" y="165" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">URL path</text>
  <rect x="520" y="150" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="530" y="164.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">/v1/flows</text>
  <text x="260" y="197" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Extra headers</text>
  <rect x="370" y="182" width="480" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="196.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace"></text>
  <text x="260" y="229" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Content-Type</text>
  <rect x="370" y="214" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="228.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">multipart/form-data ▾</text>
  <text x="260" y="261" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Body</text>
  <rect x="370" y="246" width="480" height="48" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="264" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">file=@&#123;&#123;filePath&#125;&#125;;filename=&#123;&#123;reportName&#125;&#125;.xml;contentType=application/xml</text>
  <text x="380" y="282" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">flowInfo=&#123;"name":"&#123;&#123;reportName&#125;&#125;","flowSyntax":"FRR"&#125;</text>
  <text x="260" y="317" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Query params</text>
  <rect x="370" y="302" width="480" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="316.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace"></text>
  <rect x="20" y="36" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="51" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">En-tête de l'endpoint</text>
  <text x="30" y="64" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">méthode, nom, description</text>
  <line x1="200" y1="53.0" x2="250" y2="51" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apie-arrow)"/>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre parties</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">identité · entrées · appel · réponse</text>
  <line x1="200" y1="117.0" x2="252" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apie-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Corps multipart</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une partie par ligne</text>
  <line x1="200" y1="317.0" x2="370" y2="272" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apie-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">État de chaque partie</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">URL absente en rouge</text>
  <line x1="1000" y1="117.0" x2="900" y2="116" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apie-arrow)"/>
  <rect x="1000" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">L'appel</text>
  <text x="1010" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">méthode, chemin, en-têtes, type</text>
  <line x1="1000" y1="227.0" x2="850" y2="162" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apie-arrow)"/>
  <rect x="1000" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">&#123;&#123;filePath&#125;&#125; · &#123;&#123;reportName&#125;&#125;</text>
  <text x="1010" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fichier d'e-reporting en flux</text>
  <line x1="1000" y1="307.0" x2="850" y2="272" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apie-arrow)"/>
</svg>

| Partie | État affiché | Champs |
|---|---|---|
| **What it is** (identité) | Le libellé, à défaut la description, à défaut le nom | Name, Label, Description. |
| **Inputs** (entrées) | *N parameter(s)* | Les paramètres déclarés pour les variables `{{placeholder}}`. |
| **The call** (appel) | Méthode et chemin d'URL, en rouge quand le chemin est vide | Method, URL path, Extra headers, Content-Type, Body, Query params. |
| **The answer** (réponse) | Champ de réponse (*the whole answer* s'il est vide), nombre de mappages, endpoint chaîné | Response type, Response field, Status map, Then endpoint, Response mappings. |

### Identité (What it is) \{#endpoint-general\}

| Champ | Description |
|---|---|
| **Name** | Identifiant logique référencé depuis les autres parties de NomaUBL (par ex. `getOrderLines`, `reportExecute_R0010P`). |
| **Label** | Libellé lisible affiché dans l'éditeur et dans les listes déroulantes pendant le choix d'un endpoint (par ex. `Get Order Lines`). |
| **Description** | Description en texte libre affichée dans les listes déroulantes et dans l'en-tête de la carte. |

### Entrées (Inputs) \{#endpoint-inputs\}

La partie *Inputs* (**Parameters**) déclare les **variables `{{placeholder}}`** attendues par l'endpoint — celles de son URL, de ses en-têtes et de son corps. Les consommateurs (par ex. l'onglet *Actions* de *E-Invoicing*) obtiennent alors un formulaire guidé pour lier cet endpoint.

| Sous-champ | Description |
|---|---|
| **Name** | Nom du placeholder tel qu'utilisé dans l'URL / les en-têtes / le corps (par ex. `reportName`). |
| **Label** | Libellé lisible affiché à l'utilisateur qui fournit la valeur (par ex. `Report Name`). |
| **Default value** | Valeur pré-renseignée appliquée quand le consommateur ne la surcharge pas (par ex. `R0010P`). |

### Appel (The call) \{#endpoint-call\}

| Champ | Description |
|---|---|
| **Method** | Méthode HTTP (`GET` / `POST` / `PUT` / `DELETE` / `PATCH`). |
| **URL path** | Chemin de l'endpoint ajouté à la **Base URL** du connecteur (par ex. `/v7.3/orchestrator/{{name}}`). |
| **Extra headers** | Paires `Key:Value` séparées par des points-virgules, ajoutées aux en-têtes par défaut du connecteur (ou les surchargeant) (par ex. `X-Custom:value;Authorization:Bearer {{token}}`). |
| **Content-Type** | `application/json` *(défaut)*, `multipart/form-data`, ou un type XML (`text/xml` / `application/soap+xml`). La variante multipart transforme le corps en liste de parts — voir *Corps multipart* ci-dessous. Un type XML envoie le corps tel quel après substitution des `{{placeholder}}`, les valeurs substituées étant échappées XML pour qu'une enveloppe SOAP ou XML reste bien formée — voir *Corps SOAP / XML* ci-dessous. |
| **Body** | Corps de requête — modèle JSON avec placeholders `{{param}}`. Le bouton **Format JSON** met en forme la valeur. Pour `multipart/form-data`, le corps est lu comme une part par ligne (`name=value` ou `file=@{{filePath}};filename=…;contentType=…`). Pour un type XML, le corps est l'enveloppe SOAP / XML elle-même, avec des placeholders `{{param}}` à l'intérieur des éléments. |
| **Query params** | Modèle de chaîne de requête avec placeholders `{{param}}` (par ex. `pageSize={{pageSize}}&page={{page}}`). |

Les champs URL path, en-têtes, corps et paramètres de requête disposent chacun d'un sélecteur **Insert `{{token}}`** qui propose les placeholders disponibles pour l'endpoint.

#### Corps multipart

Quand **Content-Type** est positionné sur `multipart/form-data`, le corps n'est plus un document JSON unique — il est lu comme une **liste de parts**, une par ligne non vide. Chaque part est soit une valeur littérale, soit une référence de fichier :

| Forme | Exemple | Sens |
|---|---|---|
| `name=value` | `comment=facture {{fedoc}}` | Ajoute un champ texte nommé `comment` avec la valeur résolue. |
| `file=@{{filePath}};filename=invoice.xml;contentType=application/xml` | *(idem)* | Attache une part fichier nommée `file`. `{{filePath}}` se résout vers le chemin sur disque ; `filename` et `contentType` sont les en-têtes envoyés sur cette part. |

Cas d'usage typique : une PA qui prend la facture UBL en upload `multipart/form-data` avec le XML dans une part `file` (l'endpoint d'import facture IOPOLE suit ce schéma). Le nom de la part (`file` ci-dessus) est libre — alignez-le sur ce qu'attend la plateforme.

Ces placeholders portent le document dans la part :

- `{{filePath}}` — le chemin du fichier UBL sur disque. À l'**envoi initial**, c'est le fichier d'entrée ; au **renvoi**, NomaUBL écrit d'abord le blob UBL stocké dans un fichier temporaire, donc `{{filePath}}` fonctionne de la même façon et une seule configuration de connecteur sert les deux (le fichier temporaire est nettoyé automatiquement).
- `{{content}}` — le base64 de l'UBL, pour les plateformes qui prennent les octets en ligne dans un corps JSON plutôt qu'en part fichier.
- `{{docName}}` — un nom `<doc>_<dct>_<kco>` sanitisé, pratique pour l'en-tête `filename`.
- `{{derivedFilePath}}` / `{{derivedContent}}` — le chemin et le base64 du fichier produit par la [post-transformation](../ubl-tools/post-transform.md) du document (CII…), pour une plateforme qui attend cette syntaxe plutôt que l'UBL ; vides quand le document n'en a pas. `{{filePath}}` et `{{content}}` restent l'UBL, qui porte le routage.
- `{{filePath}}` et `{{reportName}}` sur l'endpoint de dépôt de l'**e-reporting** (`report-import`) — NomaUBL écrit le rapport généré dans un fichier temporaire le temps de l'appel : une plateforme qui reçoit le fichier d'e-reporting en flux multipart l'obtient de la même manière qu'une facture. `{{reportName}}` est le nom du rapport, où tout caractère autre qu'une lettre, un chiffre, `.`, `_` ou `-` est remplacé par `_`. Voir [Plateformes à l'API de flux AFNOR](#afnor-flow-api).

#### Corps SOAP / XML

Quand le **Content-Type** vaut `text/xml` ou `application/soap+xml`, le corps est une enveloppe SOAP ou XML envoyée telle quelle. Les valeurs `{{placeholder}}` sont substituées à leur place et échappées XML (`&`, `<`, `>`, guillemets) : une valeur contenant des caractères réservés ne peut donc pas casser l'enveloppe. Associez ce réglage à **Response type** `XML` pour lire la réponse par XPath — la requête et la réponse sont alors en XML de bout en bout, ce qu'attend un service web SOAP historique.

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inv="urn:pa:invoice">
  <soapenv:Body>
    <inv:SubmitInvoice>
      <inv:Reference>{{fedoc}}</inv:Reference>
      <inv:Payload>{{content}}</inv:Payload>
    </inv:SubmitInvoice>
  </soapenv:Body>
</soapenv:Envelope>
```

### Réponse (The answer) \{#endpoint-answer\}

| Champ | Description |
|---|---|
| **Response type** | `JSON` *(défaut)* ou `XML`. En mode `XML`, *Response field* et *Response mappings* sont lus comme du **XPath** : une plateforme qui répond à import-status par un `ApplicationResponse` UBL — statut dans `//cac:DocumentResponse/cac:Response/cbc:ResponseCode` — s'interroge comme une plateforme JSON. Les préfixes `cac` / `cbc` / `ext` sont reconnus ; utilisez `//*[local-name()='X']` pour le reste. |
| **Response field** | Chemin optionnel en notation pointée (par ex. `data.items`) qui extrait un sous-arbre de la réponse — utile pour ne récupérer qu'un fragment du payload. |
| **Status map** | Traduit les mots de statut propres à la plateforme (par ex. `send_error`, `sent`, `processing`) vers les issues internes *accepted / pending / rejected*, pour qu'import-status marque la facture correctement au lieu de traiter par optimisme un statut inconnu comme accepté. |
| **Then endpoint** · **Items field** · **Id field** · **Item filter** | Enchaîne un endpoint de suivi — voir [Chaînage d'endpoints](#endpoint-chaining). |

#### Response mappings

Liste de paires **nom logique → chemin JSON** qui mappent les champs de la réponse vers des noms stables côté NomaUBL :

- **Logical name** : nom stable stocké ou référencé par NomaUBL (par ex. `uuid`, `status`).
- **JSON path** : chemin en notation pointée à l'intérieur de la réponse (par ex. `data.uuid`).

Si l'API amont renomme un champ, mettre à jour le mappage suffit — le code applicatif continue d'utiliser le nom logique.

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

 Un endpoint peut transmettre son résultat à un appel de suivi dans la même étape. Renseignez **`then`** avec le nom de l'endpoint suivant, et **`then.itemsField`** / **`then.idField`** pour choisir l'id à transmettre depuis la première réponse. Cet id arrive dans l'appel de suivi sous `{{prevId}}` (aussi aliasé `{{uuid}}`). Cela pilote les flux de plateforme en deux temps — *déposer puis traiter*, ou *lister puis récupérer chaque détail* — sans aller-retour par NomaUBL entre les deux appels.

En mode tableau, le champ **Item filter** (`then.filter`) restreint les éléments de liste qui sont chaînés : des conditions sur des champs de l'élément en notation pointée, plusieurs valeurs acceptées séparées par `|`, plusieurs conditions par `;` — par ex. `flowSyntax=CDAR`. Les éléments non concernés sont écartés **avant** l'appel de détail : ils ne coûtent aucune requête et n'atteignent jamais les résultats ; la trace de debug indique combien ont été écartés. Vide = pas de filtre.

#### Statuts de cycle de vie depuis un flux CDAR \{#cdar-lifecycle\}

Certaines PA (type Esker) publient les statuts de cycle de vie sous forme de recherche de flux suivie d'un message **CDAR** par flux — `flows/search`, puis `flows/{id}?docType=Original`. Le câblage se fait par configuration seule : la chaîne transporte chaque détail XML intact, et la récupération du cycle de vie évalue les mappages de réponse `event.*` comme des **XPath** sur ce message. `event.item` désigne le nœud répété (un événement par facture référencée) ; les chemins relatifs se résolvent à l'intérieur, les chemins absolus sur tout le message ; les dates UN/CEFACT (formats `204` / `102`) sont converties automatiquement, et les préfixes CDAR `rsm`, `ram`, `udt`, `qdt` sont préenregistrés. Le bouton **Pre-map CDAR lifecycle** remplit les neuf mappages en un clic (statut = `ProcessConditionCode`, facture = `IssuerAssignedID`, motif, action, note, dates). Les mappages `event.*` sont lus à la fois sur l'endpoint de liste et sur l'endpoint de détail chaîné — la liste l'emporte en cas de conflit — : les chemins d'éléments de liste (`item.<champ>`) restent sur la liste, les XPath CDAR sur le détail, là où l'étape *Test* les évalue.

### Exemple complet — Esker (dépôt, puis traitement) \{#esker\}

Esker prend la facture en deux appels, câblés comme un connecteur API `pa-default` :

| Étape | Endpoint | Ce qu'il fait |
|---|---|---|
| **Envoi** | `POST /api/v1/fileContent` | Un corps JSON porte l'UBL en base64 (`{{content}}`) ; la directive `decode=b64` placée dans ce corps indique à *Esker* que le contenu est en base64, donc aucun fichier temporaire n'est nécessaire. La réponse renvoie un id de fichier, mappé sur `uuid` dans *Response Mappings*. |
| **Import status** | `POST /api/v1/process/{{processName}}` | Mappé sur le slot **import-status** — fetch-import l'appelle au prochain cycle. Il déclenche le traitement effectif en utilisant l'id de fichier de l'envoi. |

L'authentification est `OAUTH2` avec un **Body Content-Type** form-urlencoded ; laisser le **Body template** vide laisse NomaUBL émettre seul `grant_type=client_credentials&client_id={{username}}&client_secret={{password}}`.

Le slot import-status est repointé vers le second endpoint depuis le champ **Import status** dans [E-Invoicing → Actions](./system/einvoicing.md) — le nom du slot remplace l'endpoint par défaut du connecteur, de sorte que le même connecteur sert l'envoi et l'interrogation du statut.

:::tip
Les PA qui ne renvoient pas le vocabulaire standard `success/pending/failed` (Esker, IOPOLE, …) sont lues correctement par import-status : un vrai échec HTTP compte en erreur, tandis qu'un `2xx` sans champ `status` suit la branche optimiste (succès). Activer **Debug** à l'étape Connection pendant le câblage des deux endpoints pour suivre les traces.
:::

---

### Plateformes à l'API de flux AFNOR \{#afnor-flow-api\}

Les plateformes conformes à l'API de flux AFNOR (XP Z12-013) reçoivent chaque document sous forme de **flux** : un `POST` multipart qui porte le fichier et la description du flux, puis une recherche parmi les flux. Le câblage se fait par configuration seule, sur le connecteur `pa-default` :

| Endpoint | Appel | Remarques |
|---|---|---|
| `import` | `POST /v1/flows`, multipart | Part `file=@{{filePath}}` et part `flowInfo` (nom du flux, syntaxe, règle de traitement) ; mappage de réponse `uuid` = `flowId`. |
| `import-status` | `GET /v1/flows/{{uuid}}?docType=Metadata` | Mappage de réponse `status` = `acknowledgement.status`, avec une *Status map* du type `ok:success\|pending:pending\|error:failed`. |
| `invoice-statuses` | `POST /v1/flows/search` | Chaîné (`then`) au détail de chaque flux, lu comme un CDAR — voir [Statuts de cycle de vie depuis un flux CDAR](#cdar-lifecycle). |
| `report-import` | `POST /v1/flows`, multipart | Le fichier d'e-reporting déposé comme un flux : `{{filePath}}` et `{{reportName}}` dans le corps. |
| `fetch-received-list` | Recherche de flux | La liste des factures reçues lit le `flowId` de chaque flux trouvé. |
| `fetch-received` | `GET` d'un flux avec `docType=Ubl` | Télécharge la facture reçue. |

Exemple de corps pour le dépôt de l'e-reporting (les parts et leurs noms suivent la spécification de la plateforme) :

```text
file=@{{filePath}};filename={{reportName}}.xml;contentType=application/xml
flowInfo={"name":"{{reportName}}","flowSyntax":"FRR"}
```

:::note
Transmettre un statut sur une facture **reçue** (`post-status`) suppose de construire un message CDAR et de le déposer comme un flux. NomaUBL ne produit pas ce message : cet endpoint n'est donc pas pris en charge sur ces plateformes.
:::

---

## Étape Webhooks \{#webhooks\}

Configure la façon dont la PA pousse les **mises à jour de statut entrantes** vers NomaUBL. L'étape suppose la forme de requête que NomaUBL implémente : `POST` HTTP avec un corps JSON, une signature HMAC-SHA256 sur un canonical `timestamp\nMÉTHODE\nchemin\nchecksumBody`, et un event id qui permet au vérificateur de dédupliquer les ré-essais « at-least-once ».

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

## Étape Test \{#test\}

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

Suite de l'endpoint JDE AIS défini à l'étape Endpoints — état de l'étape Test après sa sélection sur le connecteur `jde-ais` :

| Section | Valeur |
|---|---|
| **Endpoint** | `reportExecute_R0010P — Execute Report R0010P` |
| **Parameters** *(pré-remplis depuis les valeurs par défaut déclarées)* | `reportName = R0010P`<br/>`reportVersion = ZJDE0001`<br/>`companyCode = 00001` |

La sélection de l'endpoint **pré-remplit les trois lignes de paramètres** avec les valeurs par défaut déclarées — pas besoin de mémoriser les noms de placeholder. Surcharger une valeur si nécessaire (typiquement `companyCode`), puis cliquer sur **Exécuter**. La section Result affiche l'URL résolue, le statut HTTP, le corps de réponse, et la valeur extraite via *Response field* (`data.items` pour cet endpoint) le cas échéant.

Plus les valeurs par défaut déclarées à l'étape Endpoints sont pertinentes, plus l'étape Test (et les autres consommateurs de l'endpoint) sont simples à utiliser.

---

## Conseils & bonnes pratiques

- **Un connecteur par système.** Éviter de regrouper des endpoints de plusieurs systèmes externes dans un même connecteur — l'authentification, les en-têtes et la base URL sont définis au niveau du connecteur.
- **Nommer les endpoints par intention.** `reportExecute_R0010P` est plus parlant que `post1`, car la liste déroulante de l'onglet *Actions* identifie les endpoints par leur nom.
- **Déclarer chaque `{{placeholder}}` référencé.** Les placeholders non déclarés n'apparaissent pas dans le formulaire de l'onglet *Actions* — les consommateurs ne peuvent donc pas les renseigner.
- **Utiliser `Default value` pour figer les paramètres constants.** Pour une exécution de report JDE où `reportName` et `reportVersion` ne changent jamais, fixer leurs valeurs par défaut — les consommateurs n'ont alors qu'à fournir les valeurs réellement variables.
- **Tester avant de lier.** Exécuter l'endpoint depuis l'étape Test avec des valeurs réalistes avant toute liaison à une action réglementaire ; les problèmes d'authentification, d'URL ou de payload sont ainsi détectés en amont.
- **Les mappages sont le contrat avec l'API amont.** Mapper les champs de réponse vers des noms logiques stables isole le code applicatif des changements de chemin JSON côté amont.
