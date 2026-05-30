---
title: UI des Paramètres
description: "La page Paramètres in-app est l'éditeur piloté par schéma pour chaque fichier TOML par section : pools, connecteurs, dictionnaire, écrans, menus, tableaux de bord, graphiques et jobs. Un éditeur par concept, un éditeur Monaco brut comme échappatoire, et un bouton Recharger qui pousse chaque changement à chaud."
keywords: [Liberty Framework, UI Paramètres, builders, pools, connecteurs, dictionnaire, écrans, menus, tableaux de bord, graphiques, jobs, éditeur Monaco, rechargement à chaud, piloté par schéma, low-code]
---

# UI des Paramètres

La page **Paramètres** (icône engrenage dans l'en-tête, visible des utilisateurs disposant de la permission `settings:read`) est l'éditeur in-app pour chaque fichier TOML par section. Chaque type de configuration dispose d'un **éditeur dédié** — un formulaire piloté par schéma généré à partir des modèles Pydantic que le backend utilise pour charger le fichier. Un éditeur Monaco brut figure sur chaque onglet comme échappatoire quand le formulaire d'un éditeur ne présente pas le champ qui manque.

Chaque enregistrement écrit le TOML sur disque, puis déclenche un rechargement côté serveur — le changement est actif dans le même onglet du navigateur sans redémarrage.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="su-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="su-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="20" width="920" height="340" rx="14" fill="url(#su-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres — un éditeur par type de configuration</text>
  <line x1="40" y1="68" x2="960" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="86" width="160" height="252" rx="10" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="70" y="106" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ONGLETS</text>
  <rect x="68" y="118" width="144" height="26" rx="6" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="78" y="135" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Pools</text>
  <text x="78" y="158" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Connecteurs</text>
  <text x="78" y="178" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Dictionnaire</text>
  <text x="78" y="198" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Écrans</text>
  <text x="78" y="218" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Menus</text>
  <text x="78" y="238" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Tableaux de bord</text>
  <text x="78" y="258" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Graphiques</text>
  <text x="78" y="278" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Jobs</text>
  <text x="78" y="306" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">+ Technique</text>
  <text x="78" y="322" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">+ TOML brut</text>

  <rect x="240" y="86" width="700" height="252" rx="10" fill="rgba(0,0,0,0.20)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="106" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉDITEUR POOLS</text>

  <rect x="252" y="118" width="676" height="42" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="135" fill="#e2e8f0" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">default</text>
  <text x="264" y="151" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">sqlite+aiosqlite:///liberty.db</text>
  <rect x="848" y="128" width="68" height="22" rx="11" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="882" y="143" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">connecté</text>

  <rect x="252" y="168" width="676" height="42" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="185" fill="#e2e8f0" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">crm</text>
  <text x="264" y="201" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">postgresql+asyncpg://crm@db/crm</text>
  <rect x="848" y="178" width="68" height="22" rx="11" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="882" y="193" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">connecté</text>

  <rect x="252" y="218" width="676" height="42" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="235" fill="#e2e8f0" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">jdedwards</text>
  <text x="264" y="251" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">oracle+oracledb://jde@orcl:1521/PDB1</text>
  <rect x="848" y="228" width="68" height="22" rx="11" fill="rgba(255,69,58,0.10)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="882" y="243" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">hors ligne</text>

  <rect x="252" y="280" width="160" height="32" rx="8" fill="rgba(74,158,255,0.15)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="332" y="300" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Nouveau pool</text>
  <rect x="424" y="280" width="160" height="32" rx="8" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="504" y="300" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Tester la connexion</text>
  <rect x="780" y="280" width="148" height="32" rx="8" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="854" y="300" fill="#22c55e" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Enregistrer et recharger</text>
</svg>

La colonne des éditeurs à gauche est affichée repliée ; chaque entrée ouvre un panneau de détail à droite (la capture montre l'éditeur Pools).

---

## Les éditeurs

La page Paramètres présente **neuf éditeurs** plus le tableau de bord technique et l'échappatoire TOML brute :

| Onglet | Édite | Permission |
|---|---|---|
| **Pools** | `connectors.toml` → blocs `[pools.*]` — URLs JDBC, dialectes, tailles de pool, identifiants. | `settings:pools` |
| **Connecteurs** | `connectors.toml` → blocs `[connectors.*]` — requêtes SQL, endpoints HTTP, auth API. | `settings:connectors` |
| **Dictionnaire** | `dictionary.toml` — métadonnées de colonne : libellés, formats, énumérations, recherches, validation. | `settings:dictionary` |
| **Menus** | `menus.toml` — arborescences du menu latéral par application, dossiers, feuilles et gardes de permission. | `settings:menus` |
| **Écrans** | `screens.toml` — grilles, dialogues, onglets, conditions par champ, colonnes d'audit. | `settings:screens` |
| **Tableaux de bord** | `dashboards.toml` — mises en page stat / bar / line / pie / grid. | `settings:dashboards` |
| **Graphiques** | `charts.toml` — config wrapper Recharts référencée par les tableaux de bord. | `settings:charts` |
| **Jobs** | `plugins/*/jobs.toml` — catalogue de jobs Nomaflow par application. | `settings:jobs` |
| **Technique** | Lecture seule — stats de pool en direct, verrous d'enregistrement, exécutions de jobs en cours, événements socket récents. | `settings:technical` |
| **TOML brut** | Un éditeur Monaco par fichier. Charge le fichier tel quel, l'enregistre tel quel. Chemin de dernier recours quand un éditeur manque d'un champ. | `settings:raw` |

Les codes de permission sont les chaînes utilisées par le moteur de rôles — voir [Authentification → Rôles et permissions](../build/secure/roles-and-permissions.md) pour la procédure d'attribution.

---

## Comment fonctionne un éditeur

Chaque éditeur suit la même forme :

1. **Vue liste** — chaque entrée de la section TOML sous-jacente en tant que ligne.
2. **Panneau de détail** — l'entrée sous forme de formulaire piloté par schéma (un champ par attribut Pydantic) plus des onglets secondaires quand le modèle contient des objets imbriqués.
3. **Validation** — chaque entrée est contrôlée par rapport au modèle Pydantic ; une valeur invalide met le champ en rouge et désactive le bouton *Enregistrer*.
4. **Tester** *(SQL / HTTP / API uniquement)* — exécute la requête ou l'endpoint sur le pool actif et affiche les 50 premières lignes.
5. **Enregistrer et recharger** — écrit le TOML sur disque et déclenche un rechargement côté serveur. Le toast de succès porte le chemin du fichier affecté.

### Aperçu en direct des champs imbriqués

Pour les configurations à lignes imbriquées (les colonnes d'un écran, les feuilles d'un menu, les étapes d'un job), le panneau de détail utilise une **liste glisser-déposer** avec des éditeurs en ligne. L'ordre du TOML est préservé exactement tel que l'opérateur l'arrange — le framework ne re-trie pas les entrées à l'enregistrement.

### Références inline

Le champ *Pool* d'un connecteur est une liste déroulante des pools actuellement définis. Le champ *Connecteur* d'un écran liste chaque connecteur. Le champ *Écran* d'une feuille de menu liste chaque écran de l'application sélectionnée. La suppression d'une entrée référencée est **refusée** — l'éditeur indique quelles configurations pointent toujours dessus, avec un lien vers chacune.

---

## Éditeur TOML brut

L'onglet **TOML brut** ouvre un éditeur Monaco sur le fichier sous-jacent. Les erreurs de syntaxe sont surlignées à la volée ; le bouton *Enregistrer* reste désactivé tant que le fichier ne parse pas. L'éditeur est volontairement minimal — pas d'aide au renommage, pas de validation par rapport aux modèles Pydantic — car son rôle est de **débloquer un opérateur** quand un éditeur manque d'un champ précis.

Une boîte de dialogue de confirmation apparaît à l'enregistrement de TOML brut si une édition via éditeur a été faite dans la même session : l'enregistrement brut écraserait le diff de l'éditeur. Choisir *Garder les modifications de l'éditeur* pour annuler l'enregistrement brut, ou *Utiliser le contenu brut* pour rejeter les éditions de l'éditeur et enregistrer le texte brut.

---

## Sémantique d'enregistrement

| Étape | Effet |
|---|---|
| Cliquer sur **Enregistrer et recharger** dans un éditeur | Le modèle Pydantic est re-validé. En cas de succès, le TOML est ré-écrit sur disque via `tomlkit` (les commentaires sont préservés sur les entrées qui en avaient déjà). |
| Rechargement côté serveur | `POST /admin/reload` est invoqué avec la portée du fichier — seul le registre affecté est reconstruit. Les requêtes HTTP en cours conservent leur état courant ; les nouvelles requêtes utilisent la configuration rechargée. |
| Rafraîchissement de l'UI | La page Paramètres re-récupère la configuration parsée ; tout autre onglet ouvert sur le même modèle (par exemple la page catalogue des Connecteurs) se rafraîchit via une diffusion Socket.IO. |

Pour le contrat de rechargement exact — ce qui recharge, ce qui reste en cours, ce qui retombe sur un redémarrage — voir [Rechargement à chaud](./hot-reload.md).

---

## Tableau de bord technique

L'onglet **Technique** est en lecture seule et fait remonter ce que fait le framework en ce moment :

| Panneau | Contenu |
|---|---|
| **Stats de pool** | Par pool : connexions ouvertes, inactives, en cours d'utilisation, max, temps de checkout moyen. Se rafraîchit toutes les 2 s via Socket.IO. |
| **Verrous d'enregistrement** | Verrous actifs pris par le moteur d'écran (une ligne par paire `(connector, key)` verrouillée). |
| **Exécutions de jobs** | Les 50 dernières exécutions Nomaflow avec leur état et leur durée écoulée. |
| **Événements socket** | Fin de file des événements récents poussés par le serveur (verrou acquis/libéré, configuration rechargée, étape de job transitionnée). |

La page est restreinte aux utilisateurs portant `settings:technical` et est destinée au diagnostic — aucune action n'est proposée.

---

## Adossé à une surface REST

Chaque éditeur dialogue avec un petit ensemble d'endpoints `/admin/config/*`. Ils sont documentés dans [Référence API REST → Admin config](../rest-api.md#admin-config) et sont utilisables depuis `curl` pour le scripting :

| Endpoint | Objectif |
|---|---|
| `GET  /admin/config/<section>/parsed` | Retourne le TOML parsé en JSON. |
| `PUT  /admin/config/<section>/parsed` | Remplace le TOML parsé — le serveur re-sérialise en préservant les commentaires. |
| `POST /admin/config/<section>/raw` | Remplace le texte TOML brut. |
| `POST /admin/config/connectors/{name}/test-sql` | Exécute une requête SQL unique et retourne ses premières lignes. |
| `POST /admin/config/api/test` | Exécute un endpoint HTTP et retourne la réponse. |
| `POST /admin/config/rename` | Renomme une entité à travers chaque fichier TOML qui la référence. |
| `POST /admin/reload` | Force un rechargement global (sans changement de fichier). |

---

## Conseils et bonnes pratiques

- **Éditer une section à la fois.** Un *Enregistrer et recharger* ne remplace que le registre affecté — un changement multi-sections peut laisser le système dans un état transitoire où une configuration est à jour et une autre non.
- **Utiliser l'échappatoire TOML brut avec parcimonie.** En cas de recours fréquent, ouvrir un ticket — un manque dans un éditeur mérite d'être corrigé côté framework.
- **Lancer *Tester* avant *Enregistrer* sur un connecteur SQL ou HTTP.** Le framework rejette l'*Enregistrer* si le parseur de chaîne de connexion échoue, mais il laisse passer une requête que la base refuse à l'exécution. Le bouton *Tester* détecte cela plus tôt.
- **Restreindre étroitement la permission *TOML brut*.** Les opérateurs qui n'ont besoin que de modifier un connecteur n'ont pas besoin de pouvoir écraser tout le fichier.
- **Garder `git status` propre.** Chaque enregistrement dans Paramètres atterrit comme un diff dans `liberty-apps` ; committer avec un message clair pour que le chemin de retour arrière reste évident.
