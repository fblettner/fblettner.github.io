---
title: Global
description: "Paramètres globaux de NomaUBL en neuf onglets : répertoires et environnement, traitement, journal serveur, rendu PDF, e-mail, assistant IA, réglages communs des tâches (fenêtre silencieuse, envoi groupé, rétention, repères BIP), licence et authentification."
keywords: [NomaUBL, paramètres globaux, répertoires, SMTP, Ghostscript, XSL, Anthropic, licence, journal serveur, rétention, tâches planifiées, assistant IA, JD Edwards, SAP, NetSuite]
---

# Global

Les paramètres **Global** rassemblent ce qui s'applique à **l'ensemble de l'application NomaUBL** : arborescence de fichiers et environnement, options de traitement, journal serveur, rendu PDF, serveur d'e-mails, assistant IA, réglages communs aux tâches planifiées, licence et authentification. Ils valent quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé ; les quelques réglages propres à BIP sont signalés là où ils apparaissent.

L'éditeur comporte **neuf onglets** : Directories, Processing, Logs, PDF, Email, AI, Job defaults, License, Authentication. Dans la [navigation des paramètres](../settings-overview.md), chaque onglet est une entrée à part — *Directories & environment*, *Processing*, *Server log*, *PDF rendering*, *Email*, *AI assistant* et *License* dans **Platform**, *Authentication* dans **Security**, *Job defaults* dans **Jobs & inbound** — qui n'ouvre que cette partie, sans la rangée d'onglets. La zone de recherche des paramètres retrouve n'importe quel champ de ces onglets par son libellé, son aide ou sa clé.

Les tâches elles-mêmes — interrogations de la PA, lots de documents, rapports quotidiens, reprises automatiques, contrôles du cycle de vie, purge de rétention — ne se règlent pas ici : elles se trouvent sur la page [Tâches planifiées](../../sync/scheduled-jobs/overview.md).

---

## Vue d'ensemble

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '13px'}}>
  <div style={{display: 'flex', flexWrap: 'wrap', border: '1px solid rgba(148,163,184,0.25)', borderRadius: '8px', overflow: 'hidden', marginBottom: '14px'}}>
    <span style={{padding: '6px 12px', borderRight: '1px solid rgba(148,163,184,0.25)'}}>Directories</span>
    <span style={{padding: '6px 12px', borderRight: '1px solid rgba(148,163,184,0.25)'}}>Processing</span>
    <span style={{padding: '6px 12px', borderRight: '1px solid rgba(148,163,184,0.25)', background: 'rgba(74,158,255,0.12)', color: '#4a9eff', fontWeight: 600}}>Logs</span>
    <span style={{padding: '6px 12px', borderRight: '1px solid rgba(148,163,184,0.25)'}}>PDF</span>
    <span style={{padding: '6px 12px', borderRight: '1px solid rgba(148,163,184,0.25)'}}>Email</span>
    <span style={{padding: '6px 12px', borderRight: '1px solid rgba(148,163,184,0.25)'}}>AI</span>
    <span style={{padding: '6px 12px', borderRight: '1px solid rgba(148,163,184,0.25)'}}>Job defaults</span>
    <span style={{padding: '6px 12px', borderRight: '1px solid rgba(148,163,184,0.25)'}}>License</span>
    <span style={{padding: '6px 12px', borderRight: '1px solid rgba(148,163,184,0.25)'}}>Authentication</span>
  </div>
  <div style={{fontWeight: 700, marginBottom: '8px'}}>Server log</div>
  <div style={{display: 'grid', gridTemplateColumns: '200px 1fr', gap: '8px 12px', alignItems: 'center'}}>
    <span>Server log file</span><span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.6}}>auto (stdout of the server)</span>
    <span>Log size cap (MB)</span><span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', width: '80px'}}>100</span>
    <span>Log files kept</span><span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', width: '80px'}}>5</span>
    <span>Log repeat window (s)</span><span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', width: '80px'}}>600</span>
    <span>Log levels</span><span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.6}}>STATUS=WARN, API=INFO, *=INFO</span>
  </div>
  <div style={{display: 'flex', gap: '8px', marginTop: '14px'}}><span style={{padding: '6px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontWeight: 600}}>Enregistrer</span></div>
</div>

Les libellés de cet éditeur restent en anglais, comme dans l'application.

---

## Onglet 1 — Directories

### Home Directories

| Champ | Description |
|---|---|
| **Application Home** | Répertoire racine d'installation de NomaUBL (par ex. `/app/nomaubl`). Résolu par le placeholder `%APP_HOME%` utilisé dans les chemins de documents. |
| **Environment** | Nom court d'environnement (par ex. `demo`, `PD`). Résout le placeholder `%ENV%` dans les chemins des documents (`rtf`, `xsl`, `ublXslt`), permettant à un même modèle de cibler plusieurs environnements. Le nom s'affiche aussi en **badge à droite du titre de l'application** et dans l'onglet du navigateur. |
| **Theme colour** | Sélecteur de couleur, à côté de l'environnement. Remplace le bleu d'accent de toute l'interface — titre, badge d'environnement, boutons principaux, liens, contours de focus — pour distinguer chaque environnement d'un coup d'œil. Badge et couleur sont servis par un endpoint public : la page de connexion les affiche déjà. Vide = bleu par défaut. |
| **Process Home** | Répertoire de travail utilisé par NomaUBL pendant le traitement (par ex. `/app/nomaubl/process`). |

### File Paths

| Champ | Description |
|---|---|
| **Input Directory** | Répertoire de dépôt des nouveaux documents à traiter (spools XML, pièces jointes…). |
| **Process Directory** | Répertoire contenant les fichiers en cours de traitement. |
| **Temp Directory** | Répertoire temporaire utilisé pour les artéfacts intermédiaires. |
| **Single Output Dir** | Répertoire de sortie des documents traités en mode *single*. |
| **Bursting Directory** | Répertoire de sortie des documents produits en mode *bursting* (un fichier par facture). |
| **Errors Directory** | Répertoire où un fichier en échec de traitement est déplacé. Lors d'un traitement de dossier, mettre le fichier fautif de côté empêche un balayage répété de réessayer indéfiniment le même fichier. Laissé vide, le fichier reste en place (comportement précédent). |

---

## Onglet 2 — Processing

### XSL Paths

| Champ | Description |
|---|---|
| **XDO Config** | Chemin vers le fichier de configuration `xdo.cfg` de BI Publisher utilisé pour la génération PDF. |

### Options

| Champ | Valeurs | Description |
|---|---|---|
| **Update DB** | `Y` / `N` | À `Y`, les exécutions de traitement enregistrent leurs résultats en base de données. À positionner à `N` uniquement pour des exécutions à blanc (dry-run) ou des phases de débogage. |
| **Max threads** | *(vide = tous les cœurs)* | Limite le nombre de factures traitées simultanément. Un modèle à source XML peut traiter tout son dossier d'entrée en une seule exécution **parallèle** — bien plus rapide sur un dossier de milliers de fichiers mono-facture, et de la même façon pour un balayage planifié, une exécution à la demande et le traitement par lot en ligne de commande. Chaque fichier reste une unité à part entière (nom, archive source et traçabilité conservés) et l'échec d'un fichier n'arrête pas les autres. Renseignez une valeur pour garder des ressources aux autres services d'un serveur partagé ; laissez vide pour utiliser tous les cœurs disponibles. Les modèles UBL et le traitement par travail (BIP) ne sont pas concernés. Il limite aussi le retraitement groupé, qui lance un lot par modèle. |
| **`debugProfile`** | `Y` / `N` | À `Y`, chaque exécution écrit des **lignes de chronométrage par étape** dans `F564237` pour chaque phase du pipeline : analyse d'en-tête, analyse des lignes, validation, émission UBL, envoi PA. Les lignes apparaissent sur le [Tableau de bord IT](../../application/tech-dashboard.md) — le flux *Traitements en cours · direct* les marque avec le nom de l'étape, et le widget *Temps par modèle* décompose la moyenne par étape. À laisser à `N` en production ; à passer à `Y` le temps d'un lot pour analyser un pipeline lent. À désactiver dès que l'étape lente est identifiée — les lignes additionnelles gonflent rapidement `F564237` sous charge. |

:::info[Avancé]
Le groupe **Ghostscript** est replié sous *Advanced* en bas de l'onglet.
:::

### Ghostscript

| Champ | Description |
|---|---|
| **GS Command** | Ligne de commande complète Ghostscript utilisée pour le post-traitement PDF (par ex. `gs -dBATCH ...`). Les valeurs multi-lignes sont acceptées. |

---

## Onglet 3 — Logs

### Server log

| Champ | Défaut | Description |
|---|---|---|
| **Server log file** | *(vide = automatique)* | Fichier lu par la vue [Journal serveur](../../application/diagnostics/server-log.md). Vide = le fichier vers lequel le lanceur redirige la sortie du serveur (`nomaubl-<env>.log`) ; à renseigner quand le serveur est démarré par un autre lanceur. |
| **Log size cap (MB)** | `100` | Au-delà de cette taille, le journal courant est copié en `.1` puis vidé sur place, les copies plus anciennes étant décalées. Le lanceur continue d'écrire dans le même fichier. `0` = jamais de rotation. |
| **Log files kept** | `5` | Nombre de copies conservées à côté du journal. |
| **Log repeat window (s)** | `600` | Une ligne WARN ou ERROR identique à une ligne écrite dans cette fenêtre est comptée et non réécrite ; une ligne de synthèse suit avec le nombre de répétitions. `0` = désactivé. |
| **Log levels** | *(vide = tout)* | Niveau minimal par module — `DEBUG`, `INFO`, `WARN`, `ERROR` — sous forme de paires `MODULE=NIVEAU` séparées par des virgules ; `*` désigne tous les autres modules (par ex. `STATUS=WARN, API=INFO, *=INFO`). |

La rotation, la suppression des répétitions et les niveaux ne s'appliquent qu'en mode serveur ; un traitement en ligne de commande écrit sur sa propre sortie. Pour un code PA absent du catalogue des statuts ou une facture inconnue de NomaUBL, la récupération des statuts n'écrit pas d'avertissement par événement : l'exécution se termine par une ligne par code, avec son nombre et une facture en exemple, et les codes non reconnus sont listés par le contrôle de configuration du [Tableau de bord IT](../../application/tech-dashboard.md).

---

## Onglet 4 — PDF

### PDF

| Champ | Description |
|---|---|
| **Logo path** | Chemin du logo de la société, dessiné en haut du bloc fournisseur quand un modèle PDF a *Afficher le logo* activé (voir [Modèles PDF](../../management/pdf-templates.md)). Accepte les variables de chemin `%APP_HOME%`, `%ENV%`, `%PROCESS_HOME%`, `%KCO%`, `%DOC%`, `%DCT%` et tout jeton `{{…}}` du catalogue de facture — par ex. `%APP_HOME%/logos/{{kco}}.png`, pour que chaque société pointe vers son propre logo. Un bouton `{ }` ouvre une liste de jetons filtrable. PNG, JPG et GIF sont pris en charge. |
| **Logo offset X (pt)** | Décalage horizontal du logo, en points, pour absorber une marge interne au fichier source. Défaut `0`. |
| **Logo width (pt)** / **Logo height (pt)** | Cadre dans lequel le logo est mis à l'échelle, en points : proportions conservées, agrandissement si l'image est plus petite ; une seule dimension laisse l'autre suivre l'image. Vide = l'ancien plafond de 200 × 80 points, sans agrandissement. L'aperçu du constructeur visuel utilise la même taille que le PDF produit. |

---

## Onglet 5 — Email

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

## Onglet 6 — AI

Réglages de l'[assistant IA](../../application/ai-capabilities.md) intégré.

### Anthropic AI

| Champ | Description |
|---|---|
| **API Key** | Clé d'API Anthropic. Sans clé valide, le panneau de l'assistant est désactivé. |
| **Model** | Modèle utilisé sauf choix contraire dans le panneau. Par défaut *Sonnet 5.5* ; Opus, Fable et Haiku sont aussi proposés. |
| **Max output tokens** | Longueur maximale d'une réponse, de `1024` à `32000` (défaut `8192`). |

### Documentation

| Champ | Description |
|---|---|
| **Source** | `llms` *(défaut)* : le fichier de documentation est téléchargé et interrogé sur ce serveur. `sitemap` : le modèle consulte lui-même les pages (fonctionnement précédent). |
| **llms-full.txt URL** | Pages en anglais (défaut `https://docs.nomana-it.fr/llms-full.txt`). Rafraîchi toutes les 6 heures ; une URL, un chemin local ou une URL `file:`. S'il est injoignable au démarrage, la copie fournie avec l'application est utilisée. |
| **llms-full.fr.txt URL** | Pages en français, utilisées quand l'interface est en français. Vide = pages anglaises pour toutes les langues. |
| **Section** | Partie du fichier à indexer (son en-tête `# === … ===`, par ex. `NomaUBL`). Vide = tout le fichier. |

### Playbooks

| Champ | Description |
|---|---|
| **Custom playbooks** | Procédures de diagnostic que l'assistant charge à la demande, une par titre `## nom`. Un nom intégré — `refused-invoice`, `missing-invoice`, `ereporting-error`, `status-not-updated` — remplace la procédure fournie. |

### Assistant Behaviour

| Champ | Description |
|---|---|
| **System Prompt** | Consigne facultative ajoutée en tête de chaque conversation. Vide = la consigne NomaUBL intégrée. |
| **Allowed Doc Domains** / **Docs Sitemap URL** / **Docs Path Prefix** | Mode *sitemap* uniquement : domaines que le modèle peut consulter, adresse du plan du site (mise en cache 6 heures), préfixe des entrées retenues. |
| **Custom Tools** | Outils en lecture seule sur les données de l'instance proposés au modèle (factures, erreurs, historique, tableaux de bord, journal serveur, réglages avec secrets masqués). |

Le groupe **TLS / Corporate Proxy** (chemin et mot de passe d'un magasin de certificats, *Disable TLS validation* réservé à un diagnostic bref) est replié sous *Advanced*.

---

## Onglet 7 — Job defaults

Réglages communs aux tâches d'arrière-plan. Les tâches elles-mêmes — intervalles, heures quotidiennes, lots de documents, rapports, reprises automatiques et contrôles du cycle de vie — se gèrent dans **Synchronisation → [Tâches planifiées](../../sync/scheduled-jobs/overview.md)** ; un enregistrement depuis cette page recharge immédiatement la planification.

### Quiet window

| Champ | Description |
|---|---|
| **Quiet window from / to (HH:mm)** | Fenêtre quotidienne pendant laquelle les deux interrogations PA (import et récupération des statuts) sont automatiquement suspendues — à placer sur une campagne d'envoi pour que les interrogations d'import par facture ne s'accumulent pas pendant que la PA intègre le lot. Peut franchir minuit ; laisser les deux vides pour désactiver. S'applique sans redémarrage et s'affiche sur la carte *Planificateur* du Tableau de bord IT, en surbrillance quand elle est active. |

### Bulk Send

Valeurs par défaut de tout envoi groupé vers la PA — *Tout envoyer* (factures en attente) et *Tout renvoyer* du [Tableau de bord IT](../../application/tech-dashboard.md), le [renvoi groupé de la liste des factures](../../application/invoices.md#bulk-resend) et la commande `-send-waiting`. Chaque routine de reprise nocturne [Auto-Retry](../../sync/scheduled-jobs/auto-retry.md) peut les surcharger sur sa propre ligne.

| Champ | Description |
|---|---|
| **Parallel workers** | *(défaut `4`)* Nombre de factures envoyées à la PA en même temps. Mettre `1` pour un envoi séquentiel. |
| **Delay per worker (ms)** | *(défaut `100`)* Pause qu'observe chaque travailleur entre deux appels, pour rester dans l'enveloppe de débit de la PA. |

### Retention \{#retention\}

Lignes de base conservées par table par la tâche quotidienne **Purge de rétention**. Désactivée par défaut : rien n'est supprimé tant qu'un nombre de jours n'est pas saisi, sauf les notifications, qui gardent leurs 90 jours ; une mise à jour ne supprime donc rien d'elle-même. Le fichier journal du serveur est borné à part (onglet 3).

| Champ | Défaut | Description |
|---|---|---|
| **Processing log (days)** | `0` | Lignes START / END / erreur par fichier du journal d'exécution (`F564237`). Vide ou `0` = conservation illimitée ; valeur conseillée `180`. |
| **Step timings (days)** | `0` | Lignes de chronométrage par étape écrites par `debugProfile` (`F564237`). Valeur conseillée `30`. |
| **Job runs (days)** | `0` | Lignes d'exécution des tâches planifiées (`F564237`). Valeur conseillée `90`. |
| **Validation errors of finished invoices (days)** | `0` | Erreurs (`F564236`) des factures en statut terminal (complétée, déposée, refusée…). Valeur conseillée `365`. |
| **Notifications (days)** | `90` | Notifications de la boîte de réception (`F564253`). Vide = 90 jours ; `0` = conservation illimitée. |

Avant de saisir une valeur, le bouton **Compter seulement** de la tâche Purge de rétention (ou `java -jar nomaubl.jar -purge <configFile> --dry-run`) indique ce que chaque table perdrait avec les valeurs enregistrées.

### BIP print queue

| Champ | Description |
|---|---|
| **Hôtes des jobs BIP** | Un repère haut **par hôte d'exécution JDE** (`RJRPDEXHST`). Le repère suit chaque hôte par **date de fin du job**, et non par numéro — un numéro est attribué à la soumission, si bien qu'un job long qui se termine après un job plus récent au numéro supérieur pourrait sinon passer sous le repère et n'être jamais récupéré. La date de fin s'affiche à côté du numéro de job pour chaque hôte, et reste **modifiable**. Ajoutez chaque hôte avec son numéro de départ (le premier lot après mise à niveau renseigne la date automatiquement), ou cliquez *Retrieve last job # per host* pour les amorcer tous depuis le maximum courant ; ils avancent ensuite après chaque job, un lot interrompu reprenant exactement où il s'était arrêté. **Seuls les hôtes listés sont scannés.** *(BIP / spécifique JDE.)* |
| **Fenêtre BIP (jours)** | Limite l'analyse BIP dans le temps. À `0`, aucune limite : tous les jobs postérieurs au dernier numéro traité sont repris. À `N > 0`, seuls ceux modifiés au cours des N derniers jours le sont. Pratique à la première installation ou après une longue interruption : on évite ainsi de parcourir des années d'historique. L'analyse lancée à la main, le lot planifié et la commande `nomaubl -fetch-all` en tiennent compte. *(Spécifique BIP / JDE.)* |

---

## Onglet 8 — License

### License

| Champ | Description |
|---|---|
| **License Key** | Clé de licence NomaUBL complète. **Sans clé valide, les menus *Navigation*, *Synchronisation* et *UBL* sont désactivés** — seule la Configuration reste accessible. |

---

## Onglet 9 — Authentication

### Authentication

| Champ | Description |
|---|---|
| **Enable Authentication** | `Y` / `N` — active la connexion utilisateur par mot de passe. À `N`, NomaUBL s'exécute sans contrôle d'authentification préalable (typiquement en environnement de développement ou en installation interne derrière un VPN d'entreprise). |
| **Auth Mode** | `internal` / `oidc` / `both` — pilote l'écran de connexion. `internal` *(défaut)* conserve le formulaire local nom d'utilisateur + mot de passe. `oidc` bascule sur un bouton de connexion unique (SSO). `both` affiche le bouton SSO au-dessus du formulaire local, ce qui laisse une porte de secours pour un administrateur disposant d'un compte en base si le fournisseur d'identité est indisponible. À coupler avec le [template OIDC](./oidc.md) pour configurer le SSO côté NomaUBL. |
| **Session Timeout (minutes)** | Durée de validité d'une session utilisateur authentifiée, exprimée en minutes. Valeur par défaut `480` (8 heures). |

:::info[Réinitialisation de mot de passe en self-service]
Quand **Auth Mode = `internal`** (ou `both`), l'écran de connexion affiche un lien *Mot de passe oublié ?*. L'utilisateur saisit son identifiant et son e-mail ; en cas de correspondance avec un compte actif, un lien à usage unique valable 60 minutes est envoyé à l'e-mail enregistré. Le lien ouvre une page dédiée pour choisir un nouveau mot de passe.

Requiert un **SMTP** configuré dans *Onglet 5 — Email*. Les jetons sont enregistrés dans `F564255` (voir [Tables de base de données](../../references/database-tables.md#f564255--tokens-de-réinitialisation-de-mot-de-passe)) et sont invalidés dès qu'ils ont été utilisés.
:::

---

## Conseils & bonnes pratiques

- **Renseigner Environment et Theme colour.** Le placeholder `%ENV%` permet de propager une même configuration de `demo` à `PD` sans modifier chaque chemin, et une couleur propre à chaque environnement évite de travailler par erreur sur la production.
- **Borner le journal serveur avant la mise en production.** Les valeurs par défaut (100 Mo, 5 copies) conviennent à la plupart des serveurs ; ajouter `STATUS=WARN` aux niveaux quand la récupération des statuts est trop bavarde.
- **Activer la rétention une fois les volumes connus.** Partir des valeurs conseillées, lancer *Compter seulement*, puis activer la tâche de purge.
- **La licence conditionne l'exécution.** Si les menus *Navigation*, *Synchronisation* et *UBL* disparaissent, vérifier d'abord la clé de licence.
- **Pointer l'assistant vers les pages françaises** pour des utilisateurs francophones : renseigner *llms-full.fr.txt URL*.
