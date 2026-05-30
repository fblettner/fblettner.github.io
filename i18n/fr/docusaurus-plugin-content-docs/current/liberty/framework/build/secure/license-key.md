---
title: Clé de licence
description: "Ce que la licence conditionne (les produits éditeur packagés — Nomasx-1, Nomajde, NomaUBL …), où la renseigner (app.toml ou variable d'environnement LIBERTY_LICENSE_KEY) et ce qui se passe quand elle est absente ou expirée."
keywords: [Liberty Framework, clé de licence, connecteur sous licence, RS256, JWT de licence, Nomasx-1, Nomajde, NomaUBL]
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

Deux sources, la variable d'environnement l'emporte :

| Source | Priorité | Format |
|---|---|---|
| **Variable d'environnement `LIBERTY_LICENSE_KEY`** | La plus haute | La chaîne JWT RS256 brute. |
| **`[license] key` dans `app.toml`** | Repli | Même format, mais sur disque. |

```toml
[license]
key = "${LIBERTY_LICENSE_KEY}"     # le chemin recommandé — substitution de variable d'environnement
```

Inliner le JWT directement dans `app.toml` est pris en charge mais déconseillé pour la même raison que tout autre secret — il finit dans le contrôle de version si le fichier est committé.

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

Pour une vérification rapide depuis l'interface, le framework expose un endpoint de statut de licence :

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

### Option A — variable d'environnement (recommandée)

1. Placer le JWT dans le gestionnaire de secrets / la configuration de l'orchestrateur.
2. Définir la variable d'environnement `LIBERTY_LICENSE_KEY` dans l'environnement du framework.
3. Redémarrer le framework.
4. Ouvrir `/api/license` pour vérifier (`valid: true`, `subject` attendu, `expires_at` attendu).

### Option B — `app.toml`

1. Ouvrir `config/app.toml`.
2. Mettre à jour le champ `[license] key` — coller la chaîne JWT complète.
3. Enregistrer le fichier.
4. Redémarrer (ou déclencher un rechargement si l'installation prend en charge le rechargement à chaud de la configuration).
5. Ouvrir `/api/license` pour vérifier.

Le chemin par variable d'environnement est préféré parce que :

- Le JWT n'est pas dans le contrôle de version.
- La rotation ne demande pas de modifier le fichier.
- Avoir une licence séparée par environnement est trivial — il suffit de définir une variable différente par déploiement.

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
| **Rechargement à chaud de la licence via l'interface** | Non implémenté. Utiliser la variable d'environnement + redémarrage, ou modifier `app.toml` + redémarrage. |

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
