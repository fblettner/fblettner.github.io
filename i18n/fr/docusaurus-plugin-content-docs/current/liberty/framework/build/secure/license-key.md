---
title: Clé de licence
description: "Ce que la licence conditionne (les produits éditeur packagés — Nomasx-1, Nomajde, NomaUBL …), où la renseigner (Paramètres → Application est le chemin canonique ; la variable d'environnement LIBERTY_LICENSE_KEY reste disponible en repli) et ce qui se passe quand elle est absente ou expirée."
keywords: [Liberty Framework, clé de licence, connecteur sous licence, RS256, JWT de licence, Nomasx-1, Nomajde, NomaUBL, Paramètres Application, AppBuilder, chiffré au repos]
---

# Clé de licence

Le framework ouvert de Liberty — connecteurs, écrans, menus, assistant IA, Nomaflow — est pleinement utilisable sans licence. Les **connecteurs sous licence** forment un volet distinct : des produits éditeur packagés tels que Nomasx-1, Nomajde et NomaUBL chargés uniquement quand une licence valide est présente.

Cette page couvre ce que la licence conditionne, où la placer et ce qui reste visible quand elle est absente.

---

## Ce qui est conditionné

Un connecteur est **sous licence** quand l'éditeur du framework (Nomana-IT) le classe ainsi au moment de la compilation. Les connecteurs sous licence actuels sont **Nomasx-1**, **Nomajde** et **NomaUBL** — et la liste s'étend à mesure que de nouveaux produits packagés arrivent. Les primitives ouvertes de Liberty Next (vos propres connecteurs SQL, écrans, menus, tableaux de bord, tâches Nomaflow, l'assistant IA) ne sont **jamais** sous licence et ne demandent aucune clé.

Au démarrage du framework :

| État | Comportement |
|---|---|
| **Licence valide présente** | Les connecteurs sous licence se chargent normalement ; leurs requêtes, écrans, menus et tableaux de bord fonctionnent comme prévu. |
| **Aucune licence** (ou expirée / incorrecte) | Les connecteurs sous licence **ne se chargent pas**. Les routes qui les référencent renvoient 404 ; les menus qui pointent vers eux sont retirés. Le reste du framework continue de fonctionner. |

L'infrastructure propre au framework — authentification, pools, l'outillage open-source des connecteurs, Nomaflow — n'est **jamais conditionnée**. Seuls les produits éditeur packagés le sont.

---

## Où réside la licence

Trois chemins — l'interface est le chemin canonique :

| Chemin | Quand | Comment |
|---|---|---|
| **Paramètres → Application → Licence** *(canonique)* | Par défaut pour toute nouvelle installation. L'opérateur colle le JWT une fois ; le framework le chiffre au repos avec la clé maître d'installation. À chaud — les connecteurs sont reconstruits à l'enregistrement, sans redémarrage. | Ouvrir le SPA → *Paramètres → Application* → déplier *Licence* → cliquer sur *Définir* / *Remplacer* → coller le JWT → enregistrer. Voir [Paramètres Application](../settings-app.md). |
| **Variable d'environnement `LIBERTY_LICENSE_KEY`** *(historique / utilisateur avancé)* | Installations existantes qui ont déjà câblé la variable d'environnement ; déploiements où l'opérateur souhaite que la clé se trouve dans un gestionnaire de secrets (Kubernetes Secrets, Docker Secrets, Vault…). Lue au démarrage. | Définir dans l'environnement ; référencer depuis `app.toml` par `key = "${LIBERTY_LICENSE_KEY}"`. Le champ *Licence* de l'interface affiche alors la valeur résolue comme configurée mais en lecture seule — supprimer d'abord la référence `${VAR}` pour pouvoir éditer depuis l'interface. |
| **Texte brut dans `app.toml`** *(déconseillé)* | Démo / brouillon — mêmes risques que pour tout secret inliné dans un fichier committé. | `[license] key = "eyJhbGciOiJSUzI1NiI…"`. |

Sur disque après un enregistrement depuis l'interface :

```toml title="config/app.toml"
[license]
key = "ENC:eYWBcD…7q=="          # AES-256-GCM avec la clé maître d'installation
```

Le préfixe `ENC:` est la sentinelle du framework — le loader le reconnaît, déchiffre avec `LIBERTY_MASTER_KEY`, puis transmet le clair au vérificateur. Les valeurs en clair sont lues telles quelles ; les références à des variables d'environnement sont résolues au démarrage comme auparavant.

`install.sh` (dossier release/) n'écrit plus `LIBERTY_LICENSE_KEY` dans `.env` — le chemin canonique est l'interface. Pour le chemin par variable d'environnement sur une installation Docker, éditer `.env` à la main et ajouter une entrée `environment:` pour `liberty-next` dans le fichier compose (ou utiliser Docker Secrets en Swarm).

---

## Le format de la licence

La licence elle-même est un **JWT signé en RS256** par l'éditeur (Nomana-IT). Ses claims comprennent :

| Claim | Ce qu'il transporte |
|---|---|
| `iss` (issuer) | L'identité de l'éditeur. |
| `sub` (subject) | Le client sous licence ou l'instance. |
| `exp` (expiry) | Horodatage Unix après lequel la licence est rejetée. |
| `aud` (audience) | La famille de produit / version couverte par la licence. |
| `connectors` (custom) | La liste des clés de connecteurs sous licence que cette licence débloque. |

La vérification utilise une **clé publique RSA embarquée dans le build du framework** (`liberty/licensing/public.pem`). Le framework vérifie la signature, l'expiration et l'audience au démarrage. Aucun appel réseau vers l'éditeur — la vérification est hors-ligne.

---

## Ce qu'un opérateur voit

| Surface | Avec licence | Sans licence |
|---|---|---|
| **Sélecteur d'applications** | Les applications sous licence apparaissent (si elles ont des menus et `show_in_switcher`). | Les applications sous licence n'apparaissent pas. |
| **Page Connecteurs** | Les connecteurs sous licence sont listés sous *Applications* ou *Sources de données*. | Les connecteurs sont sautés au chargement ; ils n'apparaissent pas non plus dans l'interface Paramètres. |
| **URL directe** (par exemple `/screen/nomasx1/security_users`) | Ouvre. | Renvoie 404. |
| **Journal du framework au démarrage** | Une ligne par connecteur sous licence : `Loaded licensed connector nomasx1`. | Une ligne par connecteur sauté : `Skipping licensed connector nomasx1 — no valid license`. |

Pour une vérification rapide depuis l'interface, le framework propose un endpoint de statut de licence :

```
GET /api/license
→ { "valid": true, "subject": "ACME Corp", "expires_at": "2026-12-31T00:00:00Z", "connectors": ["nomasx1", "nomajde", "nomaubl"] }
```

Une réponse `valid: false` accompagnée d'un `reason` indique pourquoi le framework a rejeté la licence — expirée, mauvaise audience, signature invalide.

---

## Quand la licence expire

L'expiration est appliquée **au démarrage** et lors d'un **rechargement**. Implications pratiques :

| Événement | Ce qui se passe |
|---|---|
| Le framework tourne au-delà de `exp` sans rechargement. | Les connecteurs sous licence **continuent à fonctionner** — la vérification se fait au moment du chargement, pas à chaque requête. |
| Rechargement ou redémarrage après `exp`. | Les connecteurs sous licence **cessent de se charger**. Le redémarrage opérateur suivant les voit disparaître. |
| L'opérateur installe une nouvelle licence avant `exp` moins une marge. | La nouvelle licence prend effet au prochain redémarrage / rechargement. |

Le motif opérationnel pragmatique : **renouveler la licence bien avant l'expiration** — au moins une semaine. Mettre un rappel calendaire un mois à l'avance évite de découvrir l'expiration par le biais d'une erreur de démarrage.

---

## Installer une licence

Le flux standard à la réception d'un nouveau JWT de licence depuis l'éditeur :

### Option A — Paramètres → Application (recommandée)

1. Se connecter au SPA en tant que superutilisateur.
2. Ouvrir *Paramètres → Application* → déplier la section *Licence*.
3. Cliquer sur *Définir* (première installation) ou *Remplacer* (rotation) — le champ devient éditable.
4. Coller le JWT complet, cliquer sur *Enregistrer*.
5. Le registre des connecteurs est reconstruit sur place — **aucun redémarrage**. Les connecteurs sous licence filtrés au démarrage réapparaissent immédiatement.
6. Ouvrir `/api/license` pour vérifier (`valid: true`, `subject` attendu, `expires_at` attendu), ou consulter le badge d'en-tête de la section *Licence* — il indique *configuré*.

Le JWT est chiffré au repos avec la clé maître d'installation (préfixe `ENC:` dans `app.toml`). Le motif de révélation à l'édition des secrets masqués garantit que la valeur existante n'est jamais exposée dans l'interface — cliquer sur *Définir* / *Remplacer* ouvre un champ vide ; le texte chiffré stocké n'est déchiffré par le framework qu'au démarrage. Voir [Paramètres Application](../settings-app.md) pour la procédure complète de l'éditeur.

### Option B — variable d'environnement

Pour les installations qui préfèrent que le secret se trouve dans un gestionnaire de secrets / la configuration de l'orchestrateur (Kubernetes Secrets, Docker Secrets, Vault) :

1. Placer le JWT dans le gestionnaire de secrets.
2. Définir `LIBERTY_LICENSE_KEY` dans l'environnement du framework (bloc `environment:` du conteneur `liberty-next` ou `EnvironmentFile` de l'unité systemd).
3. Référencer depuis `config/app.toml` : `[license] key = "${LIBERTY_LICENSE_KEY}"`.
4. Redémarrer le framework.
5. Ouvrir `/api/license` pour vérifier.

Le chemin par variable d'environnement implique que le champ *Licence* de l'interface affiche la valeur résolue comme configurée mais **en lecture seule** — supprimer d'abord la référence `${VAR}` de `app.toml` pour pouvoir gérer la valeur depuis l'interface.

### Option C — texte brut dans `app.toml` (déconseillé)

Inliner le JWT directement dans le fichier fonctionne (c'est la même chaîne RS256), mais le secret atterrit dans le contrôle de version si le fichier est committé. À réserver aux installations de brouillon / démo.

---

## Licences par environnement

Les licences sont souvent émises **par environnement** (production, recette, sandbox). Voir avec l'éditeur si une licence couvre plusieurs environnements ou si chacun a besoin de la sienne.

Pour les déploiements utilisant le motif de variable d'environnement, le gestionnaire de secrets de chaque environnement contient sa propre licence. Le framework lit ce qui s'y trouve au démarrage ; aucune configuration spécifique à l'environnement dans `app.toml`.

---

## Ce qui N'EST PAS dans le framework

| Fonctionnalité | Statut |
|---|---|
| **API de renouvellement de licence** | Non implémentée au niveau du framework. Rotation = recevoir un nouveau JWT, remplacer la variable d'environnement, redémarrer. |
| **Période de grâce après expiration** | Non implémentée. `exp` est une limite stricte. |
| **Comptage de licences par instance** | La licence est unique par déploiement ; le framework n'applique pas de limites par tenant. Politique côté éditeur. |
| **Révocation de licence** | Non prise en charge. Une fois émise, une licence est valide jusqu'à `exp`. Ne pas exposer le JWT publiquement. |
| **Rechargement à chaud de la licence via l'interface** | Oui — *Paramètres → Application → Licence* reconstruit le registre des connecteurs à l'enregistrement. Aucun redémarrage requis. Le chemin par variable d'environnement nécessite toujours un redémarrage. |

Pour un comportement de période de grâce, mettre en place un flux de rappel calendaire en interne — la plupart des installations ajoutent l'expiration de la licence à leur suivi général des expirations (certificats TLS, clés d'API tierces).

---

## Diagnostiquer les problèmes de licence

| Symptôme | Cause probable | Correction |
|---|---|---|
| Les connecteurs sous licence n'apparaissent pas après redémarrage. | Licence absente, expirée ou mauvaise audience. | `GET /api/license` — lire le `reason`. |
| `GET /api/license` renvoie `valid: false`. | Idem ci-dessus — vérifier `reason`. | Recoller le JWT (les espaces gênent), ou contacter l'éditeur pour une nouvelle licence. |
| Le journal du framework affiche `Skipping licensed connector X — no valid license`. | La licence ne couvre pas X. | Vérifier le claim `connectors` de la licence. |
| Le journal du framework affiche `License signature invalid`. | Le JWT a été altéré ou tronqué. | Recoller depuis la livraison originale de l'éditeur. |
| Le journal du framework affiche `License expired`. | Le claim `exp` est dans le passé. | Obtenir un renouvellement auprès de l'éditeur. |

Les lignes de journal du framework sont la **source de vérité** — elles incluent la raison exacte. L'interface affiche simplement ce que renvoie `GET /api/license`.

---

## Ce que la licence NE fait PAS

| Idée reçue | Réalité |
|---|---|
| La licence déverrouille des fonctionnalités. | Elle ne déverrouille que les **connecteurs sous licence**. Les primitives du framework (écrans, menus, tableaux de bord, jobs, IA) ne sont pas conditionnées. |
| La licence active l'assistant IA. | L'IA utilise votre propre clé d'API (Anthropic). La licence est distincte de tout coût lié à l'IA. |
| La licence limite le débit des appels API. | Non — le framework n'applique pas de limitation de débit liée à la licence. |
| La licence demande un appel à distance. | Non — la vérification est hors-ligne, face à la clé publique embarquée. |
| Sans licence, le framework refuse de démarrer. | Non — le framework démarre et fonctionne pleinement ; seuls les connecteurs sous licence sont sautés. |

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| Coller le JWT avec des sauts de ligne. | La vérification de signature échoue. | Retirer chaque espace ; le JWT tient sur une seule ligne. |
| Définir `LIBERTY_LICENSE_KEY` mais laisser `[license] key` vide dans `app.toml`. | Fonctionne — la variable d'environnement l'emporte. | C'est le motif voulu ; rien à corriger. |
| Définir les deux, avec des valeurs différentes. | La variable d'environnement l'emporte, la valeur du fichier est ignorée. | Choisir une seule source. |
| Mettre à jour la variable d'environnement sans redémarrer. | La nouvelle licence n'est pas prise en compte. | Redémarrer le framework. |
| Ne pas avoir mis en place de rappel d'expiration. | La licence expire ; au prochain redémarrage, les connecteurs sous licence disparaissent ; les utilisateurs se plaignent. | Rappel calendaire un mois avant `exp`. |
| Partager le JWT entre clients. | Violation contractuelle côté éditeur ; l'éditeur peut révoquer et refuser le support futur. | Une licence par client. |

---

## Suite

- [Secrets chiffrés](./encrypted-secrets.md) — protéger le JWT lui-même au repos si on doit l'inliner.
- [Concepts → Authentification → Clé de licence](./license-key.md) — la référence détaillée.
- [Vue d'ensemble](./overview.md) — le reste de la section Sécurité.
