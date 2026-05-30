---
title: Packages
description: "Transporter la configuration d'une installation Liberty vers une autre. Settings → Package : sélectionner quelques écrans / entrées de menu / tableaux de bord comme amorces, le résolveur de dépendances parcourt tout ce qu'ils atteignent (requêtes, dictionnaire, graphiques) et le package est exporté sous forme de ZIP. Sur l'installation cible, téléverser le ZIP et choisir une stratégie de fusion (merge / overwrite / replace all). La même interface gère les deux côtés."
keywords: [Liberty Framework, package, export, import, déploiement, ZIP, clôture de dépendances, amorces, merge, overwrite, replace all, override, secrets chiffrés, build-package, import-package]
---

# Packages

L'écran **Packages** (Settings → Package) est le mécanisme de déploiement intégré de Liberty : un opérateur sur l'installation **source** sélectionne quelques écrans / entrées de menu / tableaux de bord comme *amorces*, le framework parcourt chaque référence atteinte (requêtes, connecteurs, entrées de dictionnaire, graphiques) et le résultat est livré sous forme de ZIP. Sur l'installation **cible**, le même écran accepte un ZIP, permet de choisir une stratégie de fusion et l'applique à la configuration active — suivi d'un rechargement automatique.

C'est le parcours standard *préproduction → production*. C'est aussi l'outil adapté à la réutilisation inter-clients : construire un package « starter » d'écrans sélectionnés, le remettre à une nouvelle installation, l'appliquer avec `replace_all`, et c'est terminé.

---

## Quand utiliser quoi

| Situation | À utiliser |
|---|---|
| Promouvoir des écrans / tableaux de bord de la préproduction vers la production. | Construire en préproduction, appliquer en production avec `overwrite`. |
| Livrer un ensemble d'écrans sélectionnés à une installation toute neuve. | Construire, appliquer avec `replace_all`. |
| Ajouter quelques nouveaux écrans à une installation client existante sans toucher à ses modifications. | Construire, appliquer avec `merge`. |
| Livrer une nouvelle version d'une application maintenue par l'éditeur quand le client a des modifications locales sur quelques écrans. | Construire, appliquer avec `overwrite` — les entités marquées `override = true` sur la cible sont préservées automatiquement. |
| Promouvoir un job Nomaflow entre environnements. | Utiliser le bouton dédié *Export job* sur la fiche du job (décrit dans [Nomaflow → Bundled jobs](../../nomaflow/bundled-jobs.md)) ; l'écran Package ne regroupe pas les jobs. |
| Livrer un lot complet sous licence (Nomasx-1 + plugins Nomajde + configuration). | Pas par ce biais. Utiliser l'installeur wheel **`liberty-apps`** — voir [Installation → Deploy prebuilt apps](../../installation/deploy-prebuilt-apps.md). |

L'écran Package livre de la **configuration déclarative** — des fichiers TOML. Il ne livre ni code Python, ni JAR Java, ni packages de plugins, ni contenu de base de données. Pour cela, l'installeur wheel est le canal canonique.

---

## L'onglet Build

Le panneau de gauche liste chaque **candidat amorce** de l'installation — écrans, entrées de menu, tableaux de bord. Le panneau de droite affiche la **clôture de dépendances** de tout ce qui est coché à gauche.

### Choisir les amorces

Trois sections dans le panneau de gauche :

| Section | Source |
|---|---|
| **Screens** | Tous les écrans connus de l'installation — regroupés par application. |
| **Menu items** | Toutes les entrées de menu, par application. |
| **Dashboards** | Tous les tableaux de bord, par portée. |

Un champ de recherche en haut filtre la liste visible par nom / libellé / portée. La case *select all* par section respecte le filtre — réduire d'abord (par exemple en saisissant `audit`), puis cocher *select all* pour ne prendre que les écrans correspondants.

Le sélecteur d'amorces est **adapté aux opérations en masse** : maintenir le filtre sur un nom de client, cocher *select all* et une tranche par client est préparée. Inutile de cliquer chaque écran un par un.

### Ce que fait le résolveur de dépendances

Dès qu'une amorce est cochée, le panneau de droite déclenche le résolveur (`POST /admin/find-dependencies` côté serveur). Pour chaque amorce, le résolveur retrouve :

| Type | Ce qui est rapatrié |
|---|---|
| **`screen`** | La requête principale de l'écran, toutes les sous-requêtes référencées (depuis les actions d'écran, les onglets imbriqués, les champs conditionnels), chaque entrée de dictionnaire qui adosse une colonne, chaque lookup utilisé par la boîte de dialogue, chaque séquence et énumération, le connecteur auquel chaque requête appartient (et son pool). |
| **`menu_item`** | L'écran / tableau de bord / endpoint visé par l'entrée de menu, puis la clôture de *celui-ci*. |
| **`dashboard`** | Chaque graphique du tableau de bord, chaque requête lue par chaque graphique, les connecteurs. |

La clôture est **récursive mais bornée** (profondeur par défaut = 50). Les cycles sont détectés et court-circuités.

### Les types exclus par défaut

Le panneau Dependencies pré-coche chaque dépendance **sauf** trois types :

| Type | Pourquoi exclu par défaut |
|---|---|
| **Connectors** | L'installation cible possède presque toujours déjà son propre connecteur avec le bon pool et les bonnes informations d'identification. Livrer le connecteur de la source écraserait les secrets de la cible. |
| **Pools** | Idem — les pools portent les informations d'identification de la base. C'est le pool de la cible qu'il faut conserver. |
| **API endpoints** | Idem — les endpoints portent des en-têtes d'authentification / jetons Bearer propres au câblage de l'installation source. |

Cela rend sûr d'emblée le scénario typique « promouvoir des écrans entre environnements » : rien qui porte des secrets n'est livré sans accord explicite. Cocher manuellement le groupe *Connectors* uniquement quand la cible n'en a réellement aucun — typiquement une installation toute neuve ou une préproduction par client à monter de zéro.

L'interface mémorise les cases cochées par dépendance ; les bascules *select all* / *deselect all* au niveau du groupe rendent peu coûteux le fait d'activer ou de désactiver tous les connecteurs d'un coup.

### Construire le ZIP

Cliquer sur **Download ZIP** : le framework exécute `POST /admin/build-package` et renvoie un ZIP contenant jusqu'à six TOML :

| Fichier | Quand il est présent |
|---|---|
| `connectors.toml` | Quand au moins un connecteur / pool / requête / endpoint API est inclus. Les définitions de connecteurs sont **élaguées** — seuls les requêtes / endpoints de la clôture sont conservés, le reste est supprimé. |
| `dictionary.toml` | Quand la clôture rapatrie une entrée de dictionnaire, un lookup, une séquence ou une énumération. Les blocs dictionnaire par connecteur sont imbriqués sous `[connectors.<name>]`. |
| `screens.toml` | Quand au moins un écran fait partie de la clôture. Regroupés par application sous `[screens.<app>]`. |
| `menus.toml` | Quand au moins une entrée de menu fait partie de la clôture. Regroupées par application sous `[menus.<app>.items]`. |
| `charts.toml` | Quand au moins un graphique fait partie de la clôture. |
| `dashboards.toml` | Quand au moins un tableau de bord fait partie de la clôture. |

Plus un fichier toujours présent :

| Fichier | Ce qu'il contient |
|---|---|
| **`MANIFEST.md`** | Résumé lisible — ce que contient le ZIP, les amorces, les compteurs par type, les variables d'environnement `${VAR}` référencées par le package (et que l'opérateur doit définir sur la cible), les références manquantes (clôture non résolue — généralement une coquille ou un renommage obsolète sur la source) et les consignes destinées à l'opérateur. |

Le MANIFEST est le premier élément à ouvrir sur la cible avant d'appliquer — il indique ce à quoi s'attendre et ce qui reste à câbler manuellement (variables d'environnement, secrets, clé maître).

### Ce qui n'est PAS dans le package

À connaître pour ne pas tenter de livrer par ce canal :

| Non inclus | Où cela se trouve à la place |
|---|---|
| `app.toml` | Propre à chaque installation — porte les identifiants des pools, le backend d'authentification, la racine frontend. Jamais regroupé. |
| `auth.toml` / utilisateurs stockés en base | Propre à chaque installation — porte les empreintes de mot de passe Argon2. Jamais regroupé. |
| Plugins Python | Livrés avec le [wheel liberty-apps](../../installation/deploy-prebuilt-apps.md) ou le canal de release propre au plugin. |
| Jobs Nomaflow | Le bouton *Export job* sur la fiche de chaque job produit un ZIP mono-job. L'export en masse de jobs n'est pas encore automatisé. Voir [Nomaflow → Bundled jobs](../../nomaflow/bundled-jobs.md). |
| Contenu de base de données | Utiliser un dump de base (ou un [job de préchargement intégré](../../nomaflow/bundled-jobs.md)). |

---

## L'onglet Import

Basculer l'onglet du haut sur **Import package**. Le panneau propose trois stratégies, un sélecteur de fichier et un bouton *Apply package*.

### Les trois stratégies

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="pkg-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#pkg-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Stratégies d'import — ce qui se passe par entité du package</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="84" width="290" height="240" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <text x="185" y="112" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FUSIONNER</text>
  <text x="185" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">N'ajoute que les nouveautés.</text>
  <text x="185" y="150" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Les entités existantes sont préservées.</text>
  <line x1="60" y1="170" x2="310" y2="170" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1"/>
  <text x="185" y="194" fill="#22c55e" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">ajoutées</text>
  <text x="185" y="212" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">entités absentes de la cible</text>
  <text x="185" y="240" fill="#94a3b8" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">ignorées</text>
  <text x="185" y="258" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">déjà présentes (conservées en l'état)</text>
  <text x="185" y="296" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">À utiliser pour ajouter des nouveautés</text>
  <text x="185" y="310" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">sans toucher aux modifications du client</text>

  <rect x="350" y="84" width="290" height="240" rx="10" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="495" y="112" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉCRASER — RECOMMANDÉ</text>
  <text x="495" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Le package devient la référence.</text>
  <text x="495" y="150" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Les autres entités cibles restent intactes.</text>
  <line x1="370" y1="170" x2="620" y2="170" stroke="#4a9eff" strokeOpacity="0.3" strokeWidth="1"/>
  <text x="495" y="194" fill="#22c55e" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">ajoutées</text>
  <text x="495" y="212" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">les nouvelles entités s'installent</text>
  <text x="495" y="232" fill="#4a9eff" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">remplacées</text>
  <text x="495" y="250" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">les entités existantes prennent la version du package</text>
  <text x="495" y="270" fill="#c084fc" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">préservées (override = true)</text>
  <text x="495" y="288" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">fork client — laissé tel quel</text>
  <text x="495" y="316" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Parcours de mise à niveau par défaut</text>

  <rect x="660" y="84" width="290" height="240" rx="10" fill="rgba(251,146,60,0.10)" stroke="rgba(251,146,60,0.40)"/>
  <text x="805" y="112" fill="#fb923c" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOUT REMPLACER</text>
  <text x="805" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Chaque TOML du ZIP remplace</text>
  <text x="805" y="150" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">l'INTÉGRALITÉ du fichier cible.</text>
  <line x1="680" y1="170" x2="930" y2="170" stroke="#fb923c" strokeOpacity="0.3" strokeWidth="1"/>
  <text x="805" y="194" fill="#4a9eff" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">toutes les entités du package</text>
  <text x="805" y="212" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">installées sur la cible</text>
  <text x="805" y="232" fill="#fb923c" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">SUPPRIMÉES sur la cible</text>
  <text x="805" y="250" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">toute entité ABSENTE du package</text>
  <text x="805" y="280" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Radical — réservé au déploiement initial.</text>
  <text x="805" y="294" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Les fichiers que le package ne touche PAS</text>
  <text x="805" y="308" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">restent intacts.</text>

  <rect x="40" y="332" width="920" height="20" rx="4" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="500" y="346" fill="#94a3b8" fontSize="10" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">La stratégie s'applique INDÉPENDAMMENT à chaque TOML du ZIP. Un package qui ne contient que screens.toml ne touche que le screens.toml de la cible.</text>
</svg>

Les trois colonnes correspondent une à une aux cartes radio de l'interface :

| Stratégie | Comportement par entité | À utiliser quand |
|---|---|---|
| **`merge`** | Les NOUVELLES entités s'installent. Les entités EXISTANTES sur la cible sont **conservées en l'état**. | Ajout de nouveautés sans perturber les modifications du client. Le package ajoute ; il n'écrase jamais. |
| **`overwrite`** | Les NOUVELLES entités s'installent. Les entités EXISTANTES sont **remplacées** par la version du package — SAUF quand l'entité cible est marquée `override = true` (elle est alors préservée et signalée séparément). | Le parcours de mise à niveau standard. Le package devient la nouvelle référence pour les entités qu'il contient. Les entités situées ailleurs sur la cible (celles qui ne sont pas dans le package) restent intactes. |
| **`replace_all`** | Pour chaque TOML du ZIP, le **fichier cible entier** est remplacé par la version du package. CHAQUE entité absente du package est supprimée de ce fichier. Les fichiers que le package ne touche pas restent intacts. | Déploiement initial / réinitialisation éditeur / mise en place d'une base de référence sélectionnée. |

### L'échappatoire `override = true`

Une installation client doit parfois forker une entité de l'éditeur — modifier les colonnes d'un écran, remplacer une requête — et conserver ce fork au fil des mises à niveau. Il suffit d'ajouter `override = true` au bloc TOML de l'entité :

```toml title="screens.toml sur l'installation client"
[screens.crm.customers]
label = "Customers (customer fork)"
override = true   # les imports `overwrite` de l'éditeur ignoreront cette entité
query = "customers_v2_custom"
# ... reste de la modification client
```

Au prochain import `overwrite`, le framework voit le drapeau et laisse l'entité intacte. Le rapport d'import la fait figurer sous *preserved overrides* afin que l'opérateur voie exactement quelles entités ont survécu à la livraison éditeur.

Deux limites à connaître :

- `merge` ignore déjà les entités existantes — le drapeau y est redondant.
- `replace_all` supprime le fichier entier — les overrides NE sont PAS préservés. À utiliser en connaissance de cause.

### Application

| Étape | Action |
|---|---|
| **Choisir le ZIP** | Cliquer dans la zone de dépôt (ou y glisser un `.zip`). Le nom de fichier et la taille s'affichent une fois la sélection faite. |
| **Choisir une stratégie** | Par défaut `overwrite`. Ne basculer que si l'autre comportement est nécessaire en connaissance de cause. |
| **Cliquer sur *Apply package*** | Le framework exécute `POST /admin/import-package?strategy=<value>`, applique le diff puis exécute `POST /admin/reload` automatiquement. |
| **Lire le rapport** | Une ligne par fichier indiquant `+N added`, `~N replaced`, `⊘N skipped`, `✗N errors` ainsi qu'un échantillon des noms d'entités concernés. |
| **Un badge vert *Applied + reloaded*** | Confirme la réussite du rechargement — la nouvelle configuration est active pour la prochaine requête. |

Si le rechargement échoue après une application réussie, le panneau d'avertissement d'import indique la raison mais les modifications de fichiers sont conservées sur le disque. Il convient alors de lancer manuellement *Settings → Reload* après avoir corrigé la cause sous-jacente.

---

## Secrets et variables d'environnement

Le package est du **TOML en clair**. Deux schémas permettent aux secrets de la source de voyager sans laisser fuir la matière secrète :

| Schéma | Ce qui se passe à la construction / application |
|---|---|
| **Secrets chiffrés** — `password = "ENC:base64=="` | Le texte chiffré se retrouve verbatim dans le package. La **cible doit porter la même `[crypto] master_key`** (ou variable d'environnement `LIBERTY_MASTER_KEY`) que la source — faute de quoi le déchiffrement échouera à la première utilisation. |
| **Références à des variables d'environnement** — `password = "${DB_PASSWORD}"` | La chaîne littérale `${DB_PASSWORD}` est dans le package. L'opérateur doit définir la variable **sur la cible** avant de recharger. `MANIFEST.md` liste chaque `${VAR}` référencée par le package. |

Il convient de choisir un schéma par installation — mélanger les deux dans une même configuration prête à confusion. Les secrets chiffrés voyagent mieux entre déploiements conteneurisés ; les variables d'environnement voyagent mieux entre orchestrateurs (Kubernetes Secrets, Docker `--env-file`, `EnvironmentFile` systemd).

### Ce qu'il ne faut PAS livrer

| À éviter | Pourquoi |
|---|---|
| Déplacer `auth.toml` entre installations via l'écran Package. | L'écran ignore `auth.toml`. Déplacer les utilisateurs via l'administration dédiée *Users* (ou les inviter sur chaque installation). |
| Déplacer `app.toml` via l'écran Package. | L'écran l'ignore — écraserait les identifiants des pools connecteurs, les chemins frontend, la licence. |
| Livrer un package en `replace_all` à un client qui a des modifications locales sans prévenir. | Les écrans / requêtes / entrées de dictionnaire du client sont supprimés. Il n'existe aucune annulation automatique — conserver d'abord une sauvegarde de l'arborescence de configuration de la cible. |

---

## Inspection sans export

Le panneau de droite de l'onglet Build est aussi un **inspecteur de dépendances autonome**. Cocher un seul écran, examiner la clôture — c'est exactement ce que cet écran emporterait dans un package, et exactement ce qui se casserait en cas de renommage / suppression. Inutile de cliquer sur *Download ZIP* — l'inspection est en soi la valeur.

Liberty propose également une fenêtre modale dédiée **Find dependencies** depuis n'importe quelle liste d'écrans / d'entrées de menu / de tableaux de bord (l'icône à côté du bouton de renommage). Même service côté serveur (`POST /admin/find-dependencies`), forme plus simple — uniquement l'arbre de clôture pour l'entité unique sur laquelle on l'a ouverte.

---

## Pièges courants

| Erreur | Symptôme | Remède |
|---|---|---|
| Oubli de définir une `${VAR}` listée dans MANIFEST.md avant de recharger la cible. | Un connecteur / une requête échoue à la première utilisation avec une erreur de substitution manquante. | Lire MANIFEST.md avant d'appliquer. Définir les variables d'environnement dans le fichier d'environnement / unit systemd / env Docker de la cible. |
| La source et la cible portent des `master_key` différentes. | Les valeurs chiffrées `ENC:...` ne se déchiffrent pas ; le connecteur concerné échoue à la première utilisation. | Synchroniser la clé maître (ou faire tourner les valeurs chiffrées sur la cible — voir [Build → Secure → Encrypted secrets](./secure/encrypted-secrets.md)). |
| Usage de `replace_all` pour appliquer une petite tranche — écrans spécifiques au client effacés. | Les écrans client manquent sur la cible après l'import. | Restaurer le TOML précédent depuis la sauvegarde. Appliquer la fois suivante avec `overwrite`. |
| Inclusion de `connectors.toml` (exclu par défaut) sans vérifier que les noms de pool correspondent à la cible. | Les pools de la cible changent à l'improviste ; les requêtes préexistantes échouent au prochain rechargement. | Laisser les connecteurs / pools exclus par défaut tant que la cible n'est pas toute neuve. Ou renommer les pools sur la source avant le regroupement. |
| Construction depuis une source aux références non résolues (renommage cassé / requête supprimée). | MANIFEST.md liste des éléments sous *Missing references*. | Corriger sur la source (renommer / supprimer / restaurer) et reconstruire. La cible ne recevra pas les références cassées — mais elle ne recevra pas non plus les écrans / requêtes qui les référençaient. |
| L'import a réussi mais `Applied + reloaded` est absent — un avertissement *reload failed* est apparu. | Le disque porte la nouvelle configuration ; l'état en mémoire est obsolète. | Recharger manuellement via *Settings → Reload* une fois la cause sous-jacente corrigée (souvent une erreur de syntaxe dans un TOML sans rapport, détectée par le rechargement). |

---

## Accès programmatique

Les deux endpoints situés derrière l'interface sont utilisables sans interface — utile pour la CI / la promotion scriptée :

```bash title="Construire un package"
curl -X POST \
  -H "Authorization: Bearer <superuser-token>" \
  -H "Content-Type: application/json" \
  -d '{"seeds":[{"kind":"screen","name":"customers","scope":"crm"}]}' \
  https://<source>/admin/build-package \
  --output liberty-package.zip
```

```bash title="Appliquer un package"
curl -X POST \
  -H "Authorization: Bearer <superuser-token>" \
  -F "package=@liberty-package.zip" \
  "https://<target>/admin/import-package?strategy=overwrite"
```

`build-package` accepte un tableau optionnel `include` pour filtrer la clôture (même forme que l'état des cases à cocher par dépendance de l'interface). `import-package` accepte `strategy` en paramètre de requête (`merge` | `overwrite` | `replace_all`). Les deux endpoints exigent une authentification superuser.

---

## Pour aller plus loin

- [Deploy prebuilt apps](../../installation/deploy-prebuilt-apps.md) — quand le canal package ne suffit pas (lot complet = configuration + plugins Python), utiliser l'installeur wheel `liberty-apps`.
- [Nomaflow → Bundled jobs](../../nomaflow/bundled-jobs.md) — les jobs prêts à l'emploi livrés avec `liberty-apps`, dont le job `nomasx1-import-reference` qui charge un lot de référence sélectionné.
- [Encrypted secrets](./secure/encrypted-secrets.md) — ce que sont les valeurs `ENC:`, comment les faire tourner lors d'une promotion entre installations aux clés maîtres différentes.
