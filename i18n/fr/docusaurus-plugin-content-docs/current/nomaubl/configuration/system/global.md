---
title: Global
description: "Paramètres globaux de NomaUBL : répertoires, utilitaires de traitement (XSL, Ghostscript), SMTP, assistant IA, licence & authentification, et planification (polling et jobs batch)."
keywords: [NomaUBL, paramètres globaux, répertoires, SMTP, Ghostscript, XSL, Anthropic, licence, scheduler, jobs batch, JD Edwards, SAP, NetSuite]
---

# Global

L'éditeur **Global** rassemble les paramètres qui s'appliquent à **l'ensemble de l'application NomaUBL** — arborescence de fichiers, utilitaires de traitement, serveur SMTP, assistant IA, licence / authentification, ainsi que l'ordonnanceur en arrière-plan qui pilote le polling et les jobs batch.

Ces paramètres sont en grande majorité **indépendants de la source** et s'appliquent quels que soient les documents : JD Edwards, SAP, NetSuite ou ERP personnalisé. Quelques options spécifiques à BIP sont signalées explicitement.

L'éditeur comporte **six onglets** :

1. **Directories** — racine d'application, chemins de fichiers, état batch.
2. **Processing** — chemin de configuration XSL, commande Ghostscript, options de traitement.
3. **Email / SMTP** — serveur d'e-mails sortants.
4. **AI** — clé d'API Anthropic pour l'Assistant IA intégré.
5. **Authentication** — clé de licence + authentification utilisateur / délai de session.
6. **Scheduling** — intervalles de polling automatique de la PA et jobs batch récurrents.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 540" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="glb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="glb-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="glb-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="500" rx="14" fill="url(#glb-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <rect x="220" y="20" width="580" height="40" fill="rgba(255,255,255,0.02)"/>
  <rect x="240" y="28" width="82" height="24" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="281" y="44" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Directories</text>
  <rect x="328" y="28" width="80" height="24" rx="4" fill="transparent"/>
  <text x="368" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Processing</text>
  <rect x="414" y="28" width="80" height="24" rx="4" fill="transparent"/>
  <text x="454" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Email</text>
  <rect x="500" y="28" width="44" height="24" rx="4" fill="transparent"/>
  <text x="522" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">AI</text>
  <rect x="550" y="28" width="96" height="24" rx="4" fill="transparent"/>
  <text x="598" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Authentication</text>
  <rect x="652" y="28" width="80" height="24" rx="4" fill="transparent"/>
  <text x="692" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Scheduling</text>
  <line x1="220" y1="60" x2="800" y2="60" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="86" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Répertoires de base</text>
  <text x="240" y="108" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APP HOME</text>
  <rect x="340" y="98" width="440" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="114" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">/opt/nomaubl</text>
  <text x="240" y="136" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESS HOME</text>
  <rect x="340" y="126" width="440" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="142" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">%APP_HOME%/process</text>

  <line x1="240" y1="166" x2="780" y2="166" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="188" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Chemins fichiers</text>
  <text x="240" y="210" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DIR INPUT / DIR OUTPUT / DIR ARCHIVE / DIR ERROR</text>
  <rect x="240" y="218" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="233" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">%PROCESS_HOME%/in/%TEMPLATE%</text>
  <rect x="240" y="244" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="259" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">%PROCESS_HOME%/out/%TEMPLATE%</text>
  <rect x="240" y="270" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="285" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">%PROCESS_HOME%/archive</text>
  <rect x="240" y="296" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="311" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">%PROCESS_HOME%/error</text>

  <line x1="240" y1="338" x2="780" y2="338" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="360" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet Processing — aperçu</text>

  <text x="240" y="382" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UPDATE DB</text>
  <rect x="340" y="372" width="120" height="22" rx="5" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="400" y="387" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Y ▾</text>

  <text x="240" y="410" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">debugProfile <text fill="#64748b" fontSize="8" fontStyle="italic">(2026.05.9)</text></text>
  <rect x="340" y="400" width="120" height="22" rx="5" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="400" y="415" fill="#fb923c" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">N ▾</text>
  <text x="468" y="415" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">écrit le chrono par étape dans F564237</text>

  <line x1="240" y1="438" x2="780" y2="438" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="460" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet Scheduling — aperçu</text>
  <text x="240" y="482" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FETCH IMPORT INTERVAL (min)</text>
  <rect x="450" y="472" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="487" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">15</text>
  <text x="540" y="487" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FETCH STATUS INTERVAL (min)</text>
  <rect x="730" y="472" width="50" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="755" y="487" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">5</text>
  <text x="240" y="510" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">lu par BackgroundScheduler — réglé ici, utilisé partout</text>

  <rect x="20" y="96" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Éditeur à six onglets</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">paramètres globaux à la plateforme</text>
  <line x1="220" y1="112" x2="240" y2="108" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#glb-arrow)"/>

  <rect x="20" y="218" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="233" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chemins avec %PLACEHOLDER%</text>
  <text x="30" y="246" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">%APP_HOME% / %TEMPLATE% / etc.</text>
  <line x1="220" y1="234" x2="240" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#glb-arrow)"/>

  <rect x="820" y="394" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="409" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">debugProfile · 2026.05.9</text>
  <text x="830" y="422" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chrono par étape dans F564237</text>
  <line x1="820" y1="410" x2="700" y2="410" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#glb-arrow)"/>

  <rect x="20" y="470" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="485" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Intervalles de planification</text>
  <text x="30" y="498" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le scheduler les lit ici</text>
  <line x1="220" y1="486" x2="240" y2="484" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#glb-arrow)"/>
</svg>

---

## Onglet 1 — Directories

### Home Directories

| Champ | Description |
|---|---|
| **Application Home** | Répertoire racine d'installation de NomaUBL (par ex. `/app/nomaubl`). Résolu par le placeholder `%APP_HOME%` utilisé dans les chemins de modèles de documents. |
| **Environment** | Nom court d'environnement (par ex. `demo`, `PD`). Résout le placeholder `%ENV%` dans les chemins des modèles de documents (`rtf`, `xsl`, `ublXslt`), permettant à un même modèle de cibler plusieurs environnements. |
| **Process Home** | Répertoire de travail utilisé par NomaUBL pendant le traitement (par ex. `/app/nomaubl/process`). |

### File Paths

| Champ | Description |
|---|---|
| **Input Directory** | Répertoire de dépôt des nouveaux documents à traiter (spools XML, pièces jointes…). |
| **Process Directory** | Répertoire contenant les fichiers en cours de traitement. |
| **Temp Directory** | Répertoire temporaire utilisé pour les artéfacts intermédiaires. |
| **Single Output Dir** | Répertoire de sortie des documents traités en mode *single*. |
| **Bursting Directory** | Répertoire de sortie des documents produits en mode *bursting* (un fichier par facture). |

### Batch Processing

| Champ | Description |
|---|---|
| **Last BIP Job Number** | Borne supérieure du dernier job BIP JDE consommé. Utilisée par la source BIP pour ignorer les jobs déjà traités. *(BIP / spécifique JDE.)* |
| **Fenêtre BIP (jours)** | Limite l'analyse BIP dans le temps. À `0`, aucune limite : tous les jobs postérieurs au dernier numéro traité sont repris. À `N > 0`, seuls ceux modifiés au cours des N derniers jours le sont. Pratique à la première installation ou après une longue interruption : on évite ainsi de parcourir des années d'historique. L'analyse lancée à la main, le lot planifié et la commande `nomaubl -fetch-all` en tiennent compte. *(Spécifique BIP / JDE.)* |

---

## Onglet 2 — Processing

### XSL Paths

| Champ | Description |
|---|---|
| **XDO Config** | Chemin vers le fichier de configuration `xdo.cfg` de BI Publisher utilisé pour la génération PDF. |

### Ghostscript

| Champ | Description |
|---|---|
| **GS Command** | Ligne de commande complète Ghostscript utilisée pour le post-traitement PDF (par ex. `gs -dBATCH ...`). Les valeurs multi-lignes sont acceptées. |

### Options

| Champ | Valeurs | Description |
|---|---|---|
| **Update DB** | `Y` / `N` | À `Y`, les exécutions de traitement enregistrent leurs résultats en base de données. À positionner à `N` uniquement pour des exécutions à blanc (dry-run) ou des phases de débogage. |
| **`debugProfile`** *(2026.05.9)* | `Y` / `N` | À `Y`, chaque exécution écrit des **lignes de chronométrage par étape** dans `F564237` pour chaque phase du pipeline : parsing d'en-tête, parsing des lignes, validation, émission UBL, envoi PA. Les lignes apparaissent sur le [Tableau de bord IT](../../application/tech-dashboard.md) — le flux *Traitements en cours · direct* les marque avec le nom de l'étape, et le widget *Temps par modèle* décompose la moyenne par étape. À laisser à `N` en production ; à passer à `Y` le temps d'un lot pour analyser un pipeline lent. À désactiver dès que l'étape lente est identifiée — les lignes additionnelles gonflent rapidement `F564237` sous charge. |

### PDF

| Champ | Description |
|---|---|
| **Logo path** | Chemin du logo de la société, dessiné en haut du bloc fournisseur quand un modèle PDF a *Afficher le logo* activé (voir [Modèles PDF](../../management/pdf-templates.md)). Accepte les variables de chemin `%APP_HOME%`, `%ENV%`, `%PROCESS_HOME%`, `%KCO%`, `%DOC%`, `%DCT%` et tout jeton `{{…}}` du catalogue de facture — par ex. `%APP_HOME%/logos/{{kco}}.png`, pour que chaque société pointe vers son propre logo. Un bouton `{ }` ouvre une liste de jetons filtrable. PNG, JPG et GIF sont pris en charge. |
| **Logo offset X (pt)** | Décalage horizontal du logo, en points, pour absorber une marge interne au fichier source. Défaut `0`. |

---

## Onglet 3 — Email / SMTP

Configure le serveur SMTP sortant utilisé par NomaUBL pour l'envoi des notifications et des documents par e-mail.

### SMTP Server

| Champ | Description |
|---|---|
| **Host** | Hôte SMTP (par ex. `smtp.example.com`). |
| **Port** | Port SMTP (typiquement `587` pour STARTTLS, `465` pour SSL implicite, `25` en clair). |
| **TLS (STARTTLS)** | `Y` / `N` — négocie l'élévation de la connexion en TLS via la commande `STARTTLS`. |
| **SSL** | `Y` / `N` — établit la connexion en SSL implicite (rare en SMTP moderne, incompatible avec STARTTLS). |

### SMTP Credentials

| Champ | Description |
|---|---|
| **Username** | Identifiant d'authentification SMTP. |
| **Password** | Mot de passe associé à l'identifiant SMTP. |

### Sender

| Champ | Description |
|---|---|
| **From address** | Adresse `From:` par défaut appliquée aux e-mails sortants (par ex. `facturation@example.com`). |

---

## Onglet 4 — AI

### Anthropic AI

| Champ | Description |
|---|---|
| **API Key** | Clé d'API Anthropic utilisée par l'**Assistant IA** intégré à NomaUBL. Sans clé valide, l'Assistant IA est désactivé. |

---

## Onglet 5 — Authentication

### License

| Champ | Description |
|---|---|
| **License Key** | Clé de licence NomaUBL complète. **Sans clé valide, les menus *Navigation*, *Synchronisation* et *UBL* sont désactivés** — seule la Configuration reste accessible. |

### Authentication

| Champ | Description |
|---|---|
| **Enable Authentication** | `Y` / `N` — active la connexion utilisateur par mot de passe. À `N`, NomaUBL s'exécute sans contrôle d'authentification préalable (typiquement en environnement de développement ou en installation interne derrière un VPN d'entreprise). |
| **Session Timeout (minutes)** | Durée de validité d'une session utilisateur authentifiée, exprimée en minutes. Valeur par défaut `480` (8 heures). |

---

## Onglet 6 — Scheduling

Tâches d'arrière-plan exécutées par NomaUBL en mode serveur. **Les modifications apportées dans cet onglet ne sont prises en compte qu'après redémarrage du serveur.**

### Import & Status Polling

| Champ | Description |
|---|---|
| **Import poll interval (min)** | Minutes entre deux interrogations automatiques du statut d'import pour les factures en attente (statut `9906`). `0` = désactivé. |
| **Status retrieval interval (min)** | Minutes entre deux récupérations automatiques des statuts de cycle de vie depuis la PA. `0` = désactivé. |
| **Received fetch interval (min)** | Minutes entre deux passes *PA entrante* automatiques — même flux que le mode *Sync → Fetch Input → PA entrante (factures fournisseur)* et la commande CLI `-fetch-received`. `0` = désactivé. Le curseur de la date d'émission la plus récente traitée est enregistré dans `lastFetchReceivedAt`, chaque passe ne récupérant ainsi que les factures arrivées depuis la précédente. |

### Batch Document Processing

Liste de **jobs batch** récurrents. Chaque job s'exécute indépendamment selon son propre intervalle et détecte les nouveaux documents à traiter. Utilisez **+ Ajouter un job batch** pour en créer un, et le bouton **×** pour en supprimer un.

#### Champs d'en-tête par job

| Champ | Description |
|---|---|
| **Label** | Nom lisible affiché dans la liste des jobs (par ex. `BIP invoices`). |
| **Interval (min)** | Minutes entre deux exécutions. `0` = désactivé (le job existe mais n'est pas planifié). |

#### Paramètres par job

Les champs suivants définissent la stratégie de récupération et de traitement appliquée par le job :

| Champ | Valeurs | Description |
|---|---|---|
| **Process type** | `xml` / `ubl` | `xml` = chaîne complète (transformation + traitement) ; `ubl` = traitement UBL direct (l'entrée est déjà UBL). |
| **Template** *(si Process type = `xml`)* | depuis liste | Modèle de document à appliquer. Liste des modèles de type `document`. |
| **Mode** *(si Process type = `xml`)* | `AUTO` / `SINGLE` / `BURST` / `UBL` | Mode de traitement — `AUTO` laisse NomaUBL décider ; `SINGLE` et `BURST` forcent la stratégie de sortie correspondante ; `UBL` produit uniquement de l'UBL. |
| **Source** | `bip` / `directory` | Où récupérer les documents : `bip` = file d'impression JDE *(spécifique JDE)* ; `directory` = balaye l'**Input Directory** configuré à l'onglet 1. |
| **Extract mode** *(si Source = `bip`)* | `input` / `output` / `both` | Quels artéfacts BIP récupérer : `input` = XML source uniquement ; `output` = fichiers de sortie générés uniquement ; `both` = les deux. |
| **Language filter** *(si Source = `bip`)* | texte | Filtre BIP optionnel par langue (par ex. `FR`). Vide = toutes les langues. |
| **Replace existing** | `Y` / `N` | À `Y`, ré-importe les documents déjà présents dans NomaUBL (écrase) ; à `N`, ignore les doublons. |
| **Skip PA send** *(si Process type = `xml`)* | `Y` / `N` | À `Y`, le job n'envoie jamais à la Plateforme Agréée — il produit uniquement UBL/PDF en local. |
| **Validate only** *(si Process type = `ubl`)* | `Y` / `N` | À `Y`, valide l'UBL sans l'envoyer à la PA. |
| **Send to PA** *(si Process type = `ubl`)* | *(use settings)* / `Y` / `N` | Surcharge la décision « envoi à la PA » du type de document : vide = défaut ; `Y` = force l'envoi ; `N` = force l'omission. |

---

## Conseils & bonnes pratiques

- **Renseigner Environment.** Le placeholder `%ENV%` dans les modèles de documents permet de propager une même configuration de `demo` à `PD` sans modifier chaque chemin.
- **Redémarrer le serveur après modification du scheduler.** Tous les intervalles de l'onglet 6 (ainsi que les jobs batch) sont lus une seule fois au démarrage ; les modifier dans l'interface ne fait qu'enregistrer la valeur — un redémarrage est requis pour leur prise en compte.
- **La licence conditionne l'exécution.** Si les menus *Navigation* / *Synchronisation* / *UBL* deviennent inaccessibles, vérifier en priorité la validité de la clé de licence.
- **Choisir Source `bip` uniquement quand la source est JD Edwards.** Pour les autres ERP (SAP, NetSuite, personnalisé), utiliser `directory` et déposer les sorties XML correspondantes dans l'Input Directory.
- **Utiliser `validateOnly` pour lancer un dry-run UBL.** À combiner avec `Skip PA send` (ou son équivalent UBL) pendant une migration de modèles, pour valider la chaîne de traitement sans interaction avec la PA.
