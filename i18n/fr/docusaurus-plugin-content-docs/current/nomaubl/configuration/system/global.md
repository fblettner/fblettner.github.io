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
