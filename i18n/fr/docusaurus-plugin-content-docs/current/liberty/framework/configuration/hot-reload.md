---
title: Rechargement à chaud
description: "Chaque édition de TOML par section faite dans l'UI Paramètres ou poussée via POST /admin/reload est appliquée au framework en cours d'exécution sans redémarrage. Cette page documente ce qui se recharge, ce qui reste en cours et ce qui demande un redémarrage du processus."
keywords: [Liberty Framework, rechargement à chaud, POST /admin/reload, UI Paramètres, registre, connecteurs, dictionnaire, écrans, menus, tableaux de bord, redémarrage requis, app.toml]
---

# Rechargement à chaud

Le framework conserve chaque TOML par section dans un **registre** en mémoire : il y a un registre des connecteurs, un registre du dictionnaire, un registre des écrans, et ainsi de suite. Chacun peut être reconstruit depuis le disque à la demande — cette reconstruction est ce qui alimente le bouton **Enregistrer et recharger** de l'UI Paramètres et l'endpoint `POST /admin/reload`.

Cette page est le contrat : ce qui se recharge, ce qui ne le fait pas, ce qui arrive aux requêtes en cours, et ce qui demande un redémarrage du processus.

---

## Vue d'ensemble

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(50,215,75,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(50,215,75,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4ade80', marginBottom: '8px'}}>✓ Rechargeable à chaud</div>
    <div style={{fontSize: '12px', lineHeight: '1.55'}}>connecteurs · dictionnaire · écrans · menus · tableaux de bord · graphiques · jobs</div>
  </div>
  <div style={{border: '1px solid rgba(255,159,10,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(255,159,10,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#fb923c', marginBottom: '8px'}}>⚠ Rechargement partiel</div>
    <div style={{fontSize: '12px', lineHeight: '1.55'}}>changement d'URL de pool — anciennes connexions drainées à mesure que les requêtes en cours se terminent, les nouvelles utilisent l'URL mise à jour</div>
  </div>
  <div style={{border: '1px solid rgba(255,69,58,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(255,69,58,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#f87171', marginBottom: '8px'}}>✕ Redémarrage requis</div>
    <div style={{fontSize: '12px', lineHeight: '1.55'}}>app.toml · variables d'environnement · backend d'auth · clé de licence · clé maître de chiffrement</div>
  </div>
</div>

---

## Ce que fait un rechargement à chaud

Un rechargement est **étendu à une section**. Enregistrer dans l'onglet *Connecteurs* déclenche `POST /admin/reload?scope=connectors` — seul le registre des connecteurs est reconstruit, tous les autres registres sont intacts. L'endpoint accepte aussi `scope=all` (défaut), qui reconstruit chaque registre par section dans l'ordre des dépendances : pools → connecteurs → dictionnaire → écrans → tableaux de bord → graphiques → menus → jobs.

La reconstruction suit toujours les trois mêmes phases :

1. **Re-parser le TOML** depuis le disque. Une erreur de parsing stoppe le rechargement avant qu'aucun registre ne soit remplacé ; le registre en mémoire reste utilisable et l'appelant est informé de la ligne en faute.
2. **Construire le nouveau registre à côté.** Chaque entrée est validée par rapport à son modèle Pydantic ; une entrée invalide est rapportée avec son nom et son message. Une seconde passe vérifie les références (un écran qui pointe sur un connecteur inexistant, une feuille de menu qui pointe sur un écran inexistant) et refuse le rechargement quand quelque chose est cassé.
3. **Permuter le registre de manière atomique.** Le nouveau registre remplace l'ancien à l'intérieur d'un même verrou. Les requêtes qui ont déjà démarré sur l'ancien registre **se terminent dessus** ; les nouvelles requêtes prennent le nouveau. Il n'y a aucun état intermédiaire où une partie de la requête voit l'ancienne configuration et une autre partie voit la nouvelle.

---

## Ce qui arrive aux requêtes en cours

| Surface | Comportement en cours |
|---|---|
| **Requête SQL** | La requête se termine sur la définition de connecteur qui était courante à son arrivée. Une re-récupération depuis le même onglet du navigateur utilise la nouvelle. |
| **Endpoint HTTP** | Idem — lié à la définition du connecteur à l'entrée de la requête. |
| **Rendu d'écran** | La grille + dialogue est liée à l'entrée d'écran au premier rendu. Un clic sur une ligne après un rechargement peut ouvrir un dialogue avec un jeu de colonnes légèrement plus récent ; le framework re-récupère la définition d'écran à chaque ouverture de dialogue. |
| **Rendu de menu** | Le menu latéral se ré-affiche **immédiatement** — une diffusion Socket.IO notifie chaque client connecté de re-récupérer `/api/menus`. |
| **Widget de tableau de bord** | Identique à un écran — le widget est lié au premier rendu et re-récupéré au prochain tick de rafraîchissement. |
| **Job en cours** | Une exécution Nomaflow en cours utilise la définition de job avec laquelle elle a démarré. Le prochain horaire de déclenchement prend la nouvelle définition. |
| **Assistant IA** | La liste des connecteurs (= liste d'outils) est régénérée à la prochaine invite utilisateur. |

Un rechargement n'**abandonne jamais** une requête en cours et n'**invalide jamais** un token de session.

---

## Chemins de déclenchement

| Chemin | Qui l'appelle | Portée |
|---|---|---|
| **UI Paramètres → Enregistrer et recharger** | Opérateur | La section en cours d'édition. |
| **`POST /admin/reload`** | Opérateur ou script CI avec `settings:reload` | Par défaut `all` ; `?scope=<section>` la restreint. |
| **Veille de fichiers** *(optionnel)* | Le framework lui-même quand `[app] watch_config = true` est défini dans `app.toml` | La section dont le fichier a changé. Utile en dev ; déconseillé en production où les éditions doivent passer par l'UI. |
| **CLI `liberty-admin reload`** | Opérateur via shell | Identique à `POST /admin/reload`. |

Le contrat de l'endpoint :

```text
POST /admin/reload?scope=connectors
Authorization: Bearer <token avec settings:reload>

→ 200 OK
{
  "scope": "connectors",
  "reloaded_at": "2026-05-20T13:42:11Z",
  "entries": {"connectors": 38, "pools": 4}
}
```

Un rechargement échoué retourne le diagnostic sans toucher au registre actif :

```text
→ 422 Unprocessable Entity
{
  "scope": "connectors",
  "error": "connector 'crm-customers': pool 'crm-old' not found",
  "blame_file": "connectors.toml",
  "blame_line": 142
}
```

---

## Ce qui demande un redémarrage

Ces éléments gardent le framework simple au démarrage ; les recharger en plein vol toucherait chaque requête en cours.

| Déclencheur | Raison | Récupération |
|---|---|---|
| **Édition de `app.toml`** | Chargée une seule fois dans l'état du processus — backend d'auth, issuer OIDC, fournisseur IA, clé maître sont câblés dans des singletons au démarrage. | `systemctl restart liberty-next` ou l'équivalent conteneur. |
| **Tout changement de variable `LIBERTY_*`** | Les variables d'env sont interpolées dans `app.toml` au démarrage ; le processus ne les relit jamais. | Redémarrer. |
| **Rotation du secret JWT** | Un nouveau secret invaliderait tous les tokens existants en plein vol. | Redémarrage roulant — définir le nouveau secret sur chaque réplica à tour de rôle pour que les sessions utilisateurs migrent en douceur. |
| **Rotation de la clé maître** | Le matériel déjà déchiffré en mémoire est bon, mais les nouveaux chargements de connecteurs ont besoin de la clé tournée. | Voir [Chiffrement et secrets → rotation](./encryption-secrets.md#key-rotation). |
| **Échange de clé de licence** | Les barrières de fonctionnalité sont évaluées au démarrage par rapport au payload du JWT. | Redémarrer. |
| **Changement de code backend** | Les modules Python sont mis en cache. | Redémarrer. `./start.sh dev` le fait automatiquement via `uvicorn --reload`. |

---

## Modes d'échec

| Symptôme | Cause | Ce que fait le framework |
|---|---|---|
| **Erreur de parsing TOML** | Une virgule finale, un crochet déséquilibré. | Le rechargement avorte en phase 1 ; le registre en mémoire est intact. L'UI Paramètres fait remonter la ligne fautive. |
| **Référence manquante** | Une feuille de menu pointe sur un écran qui vient d'être renommé ou supprimé. | Le rechargement avorte en phase 2 ; le diagnostic nomme la feuille de menu et l'écran manquant. Utiliser *Renommer* dans les éditeurs Connecteurs / Écrans / Dictionnaire plutôt que de modifier les identifiants à la main — la commande propage le changement à travers chaque fichier référent. |
| **Erreur de validation** | Un nouveau champ avec un type invalide (`port = "abc"`). | Le rechargement avorte en phase 2 ; le message Pydantic est affiché tel quel. |
| **Base de données inaccessible** | Une nouvelle URL de pool pointe sur un hôte hors service. | Le pool est créé paresseusement, donc le rechargement lui-même réussit ; le premier appel SQL sur le nouveau pool échoue avec l'erreur de connexion. Le bouton *Tester* de l'UI Paramètres détecte cela plus tôt. |
| **TOML vide** | Un *Enregistrer* a effacé toutes les entrées. | Le rechargement réussit — le registre a zéro entrée. Chaque surface dépendante (catalogue Connecteurs, menu) devient vide. Restaurer depuis le commit git précédent. |

---

## Conseils et bonnes pratiques

- **Éditer dans l'UI Paramètres, pas sur disque.** L'UI exécute le même pipeline de validation avant d'écrire le fichier, donc un enregistrement via éditeur ne peut jamais produire un fichier que le rechargement rejetterait.
- **Utiliser *Renommer* à travers les fichiers.** Renommer un connecteur ou un écran depuis l'éditeur réécrit chaque référence en une seule transaction ; renommer à la main en TOML risque une référence orpheline.
- **Auditer le log de rechargement.** Chaque rechargement réussi écrit une ligne INFO par registre avec le nombre d'entrées ; une chute soudaine du compte est le signal le plus précoce qu'une édition d'opérateur a supprimé plus que prévu.
- **Garder `watch_config` désactivé en production.** Une veille de fichiers qui bat (`rsync`, `git pull` en milieu de journée) peut déclencher un rechargement alors que seulement la moitié des fichiers est à jour.
- **Redémarrer sur les éditions de `app.toml`.** Une rotation JWT qui échoue est plus visible qu'une valeur obsolète chargée silencieusement.
