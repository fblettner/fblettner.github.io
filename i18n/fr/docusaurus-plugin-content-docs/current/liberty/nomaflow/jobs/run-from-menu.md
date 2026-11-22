---
title: Lancer une tâche depuis le menu d'une application
description: "Une entrée de menu de type job place une tâche Nomaflow dans le menu d'une application : l'utilisateur choisit les fichiers et les paramètres demandés, lance la tâche, suit son journal en direct et retrouve les exécutions précédentes — sans accès à Nomaflow lui-même. La permission de la tâche, les paramètres utilisateur, les fichiers et l'historique."
keywords: [Nomaflow, entrée de menu job, lancer une tâche, page de la tâche, envoi de fichier, paramètres utilisateur, user_params, permission job, journal en direct, Liberty Next]
---

# Lancer une tâche depuis le menu d'une application

Une entrée de menu de type **job** place une tâche Nomaflow dans le menu d'une application, à l'intention des utilisateurs qui n'administrent pas Nomaflow : la personne qui charge le fichier des ventes du mois, le responsable sécurité qui collecte les données de sécurité avant une revue. L'entrée ouvre la page propre à la tâche — les fichiers attendus, ses paramètres, **Lancer**, le journal suivi en direct et les exécutions précédentes. Rien d'autre de Nomaflow n'apparaît.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 520" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfjp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfjp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfjp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfjp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="480" rx="14" fill="url(#nfjp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">▷</text>
  <text x="260" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Fichier des ventes (un mois)</text>
  <text x="260" y="63" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Charge un mois de lignes de facture. Une période close est refusée.</text>
  <line x1="220" y1="76" x2="980" y2="76" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="90" width="720" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="108" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SOCIÉTÉ ∗</text>
  <rect x="254" y="113" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="127.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">(tous)</text>
  <text x="382" y="127.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="410" y="108" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Fichier pour l'étape « load » · feuille « Sales »</text>
  <rect x="410" y="115" width="127" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="473.5" y="129.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▤ Choisir un fichier…</text>
  <text x="545" y="130" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sales_2026-10.xlsx</text>
  <rect x="660" y="113" width="80" height="26" rx="5" fill="url(#nfjp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="700.0" y="129.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Lancer</text>
  <rect x="240" y="166" width="720" height="196" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="186" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">JOURNAL · </text>
  <rect x="309.6" y="175" width="48" height="16" rx="3" fill="#4a9eff" fillOpacity="0.12" stroke="#4a9eff" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="333.6" y="186.5" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">RUNNING</text>
  <rect x="254" y="196" width="692" height="110" rx="6" fill="#0a0e1a" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="214" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10:02:11 INFO  nomaflow.runner started job=sales-load trigger=manual steps=3</text>
  <text x="264" y="232" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10:02:11 INFO  nomaflow.file_load start step='load'</text>
  <text x="264" y="250" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10:02:12 INFO  load: 4812 row(s) read, 4806 inserted, 6 rejected</text>
  <text x="264" y="268" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10:02:13 INFO  nomaflow.sql_query step='customers' connector=sales</text>
  <text x="264" y="286" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10:02:13 INFO  nomaflow.sql_query step='periods' connector=sales</text>
  <text x="254" y="330" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Fichier chargé :</text>
  <rect x="338.16" y="318" width="117" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="396.66" y="331.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ sales_2026-10.xlsx</text>
  <text x="470" y="330" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Fichiers de l'exécution</text>
  <rect x="587.48" y="318" width="107" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="640.98" y="331.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ load-rejects.csv</text>
  <rect x="240" y="374" width="720" height="112" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="394" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">EXÉCUTIONS PRÉCÉDENTES</text>
  <rect x="254" y="402" width="692" height="22" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="416.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉBUT</text>
  <text x="414" y="416.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <text x="564" y="416.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DURÉE</text>
  <text x="684" y="416.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PAR</text>
  <text x="794" y="416.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <rect x="254" y="428" width="692" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="442.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">il y a 2 h</text>
  <rect x="414" y="431.0" width="51" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="439.5" y="442.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Réussie</text>
  <text x="564" y="442.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">18 s</text>
  <text x="684" y="442.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">jdoe</text>
  <text x="794" y="442.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">4 806 ligne(s)</text>
  <rect x="254" y="454" width="692" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">hier</text>
  <rect x="414" y="457.0" width="56" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="442.0" y="468.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">En échec</text>
  <text x="564" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2 s</text>
  <text x="684" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">asmith</text>
  <text x="794" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">period 2026-09 is closed</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres utilisateur</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">déclarés par la tâche</text>
  <line x1="200" y1="117.0" x2="254" y2="125" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjp-arrow)"/>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Journal en direct</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">actualisé toutes les 2 s</text>
  <line x1="200" y1="237.0" x2="254" y2="240" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjp-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécutions précédentes</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic affiche son journal</text>
  <line x1="200" y1="417.0" x2="254" y2="436" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjp-arrow)"/>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un fichier par étape</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">étapes sans chemin seulement</text>
  <line x1="1000" y1="77.0" x2="470" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjp-arrow)"/>
  <rect x="1000" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lancer</text>
  <text x="1010" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une exécution à la fois</text>
  <line x1="1000" y1="147.0" x2="740" y2="126" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjp-arrow)"/>
  <rect x="1000" y="310" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="325" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fichiers de l'exécution</text>
  <text x="1010" y="338" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le fichier chargé, les rejets</text>
  <line x1="1000" y1="327.0" x2="694.48" y2="328" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfjp-arrow)"/>
</svg>

---

## La page de la tâche \{#page\}

| Partie | Contenu |
|---|---|
| Titre et description | Le libellé de l'entrée de menu, puis la description de la tâche. |
| Paramètres | Les [paramètres utilisateur](#user-params) déclarés par la tâche : une liste déroulante quand les valeurs sont fixées, une zone de saisie sinon, chacun prérempli de sa valeur par défaut. Un paramètre obligatoire porte `*` ; une liste facultative propose *(tous)*. Un paramètre qui accepte plusieurs valeurs s'affiche en cases à cocher précédées de **Tout**. |
| Fichiers | Un sélecteur par étape `file_load` qui attend un fichier — **Fichier pour l'étape « load »**, avec la feuille quand l'étape en nomme une. Formats acceptés : `.xlsx`, `.xlsm`, `.csv`, `.txt`, `.tsv`. Une étape dotée de son propre chemin ou d'un dossier surveillé ne demande rien : elle lit son fichier. |
| **Lancer** | Envoie les fichiers et démarre l'exécution. *Choisissez d'abord le ou les fichiers.* ou *« Société » est obligatoire.* quand un élément manque. Une seule exécution à la fois : tant qu'une exécution est en cours, le bouton reste en attente. |
| **Journal** | L'état de l'exécution et son journal, rafraîchi toutes les 2 secondes tant que l'exécution est en attente ou en cours, l'erreur en rouge. **Fichiers de l'exécution** propose les fichiers produits — les lignes rejetées d'un chargement. |
| **Fichier chargé** | Sous le journal, le fichier envoyé pour l'exécution sélectionnée, à télécharger à nouveau. |
| **Exécutions précédentes** | Les 20 dernières exécutions : début, état, durée, auteur (ou déclencheur, pour une exécution planifiée), lignes traitées et début de l'erreur. Un clic sur une exécution affiche son journal. |

L'exécution est une exécution Nomaflow ordinaire : les exploitants la retrouvent dans l'[historique des exécutions](../runs/history.md), et ses notifications et alertes s'appliquent.

---

## Placer une tâche dans un menu \{#menu\}

Dans **Liberty Next → Écrans → Menus**, ajouter une entrée de type **Job (run it, follow its log)** et choisir la tâche dans **Target** : la liste présente chaque tâche avec la première ligne de sa description. Aucun connecteur n'est renseigné. Voir [Types d'entrées de menu](../../framework/build/menus/item-types.md#job).

---

### Un préréglage dans le menu \{#preset\}

Une entrée peut fixer l'un des [préréglages](./schedules.md#schedulable-presets) de la tâche avec `params = { preset = "Licences" }` : la page lance alors la tâche avec les paramètres et les étapes actives de ce préréglage. Une même tâche donne ainsi plusieurs entrées de menu — *Collecter la sécurité et la SoD*, *Collecter les licences* —, chacune sur un préréglage. Le libellé de l'entrée de menu donne son titre à la page.

### Un lien avec des valeurs \{#link\}

`/job/<id>?<paramètre>=<valeur>` ouvre la page de la tâche avec ces [paramètres utilisateur](#user-params) déjà renseignés — `/job/sales-load?period=2026-10`. Un lien d'écran, de notification ou de page mène ainsi à la tâche prête à lancer ; une valeur que la tâche ne déclare pas est ignorée, et la permission `job:<id>` s'applique toujours.

---

## Qui peut la lancer \{#access\}

L'entrée et sa page sont réservées à qui peut lancer la tâche — dans **Liberty Next → Administrer → Accès → Rôles**, l'entrée ou son dossier en **Lecture et modification** (la **Lecture** seule ne l'affiche pas), ou la permission `job:<id>` dans le bloc **Au-delà des menus**, type de règle **Tâche**, puis la tâche. Un refus (`!job:<id>`) masque l'entrée même quand le menu l'afficherait. Les superutilisateurs voient toutes les tâches.

Chaque titulaire de la permission voit **toutes** les exécutions de la tâche — la liste des exécutions précédentes, leurs journaux et leurs fichiers —, pas seulement les siennes.

---

## Paramètres utilisateur \{#user-params\}

Ce qu'un utilisateur peut régler en lançant la tâche depuis sa page se déclare dans l'éditeur de tâche, section [Ce que l'utilisateur peut régler au lancement](./create.md#user-params). Toute autre valeur est refusée ; les autres réglages de l'exploitant restent hors de portée.

| Champ (éditeur de tâche) | Dans `jobs.toml` | Rôle |
|---|---|---|
| **Nom** | `name` | L'argument de l'étape qui reçoit la valeur. |
| **Libellé**, **Dans les autres langues** | `label`, `l` | Le libellé affiché, par langue. Par défaut : le nom. |
| **Destinataire** | `step` | L'étape qui reçoit la valeur. **Toutes les étapes** par défaut. |
| **Valeur par défaut** | `default` | La valeur préremplie. |
| **Obligatoire** | `required` | La tâche ne démarre pas sans valeur. |
| **Choix** — *Une liste fixe* | `choices` | La page affiche une liste déroulante et refuse toute autre valeur. |
| **Choix** — *Les lignes d'une requête*, *Les modèles Explorer d'une application*, *Les suites de tests* | `choices_from` | Les lignes d'une requête de lecture, comme les applications de Nomasx-1 ; les modèles de l'explorateur de données d'une application ; les suites des [Tests](../../framework/build/tests.md), d'un connecteur API ou de tous. |
| **Plusieurs valeurs** | `multiple` | Plusieurs valeurs peuvent être cochées, avec **Tout**. |
| **Une exécution par valeur de** | `for_each` | Voir ci-dessous. |

```toml title="jobs.toml — tel que l'éditeur l'enregistre"
[[jobs.user_params]]
name = "models"
label = "Explorer model (blank = every model)"
l = { fr = "Modèle Explorateur (vide = tous les modèles)" }
step = "refresh"
choices_from = "explorer_models:nomajde"
```

Une valeur vide signifie *non renseigné* : la valeur par défaut de l'étape s'applique. Les mêmes paramètres apparaissent dans la fenêtre **Exécuter avec des paramètres** des exploitants.

**Une exécution par valeur.** Une tâche dont le champ **Une exécution par valeur de** nomme un paramètre s'exécute une fois pour chaque valeur cochée — l'une après l'autre, chacune avec une seule valeur — ; **Tout** reprend toutes les valeurs que propose le paramètre. Une tâche planifiée avec la valeur `all` traite toutes les valeurs à chaque déclenchement : toutes les applications de Nomasx-1, par exemple.

---

## Ce que livrent les applications \{#shipped\}

| Application | Dossier | Tâches |
|---|---|---|
| Nomasx-1 | **Tâches** | Collecter la sécurité et la SoD, Collecter les licences, Rapport d'audit des licences, Rapport sécurité et SoD — voir [Tâches de Nomasx-1](../../nomasx1/jobs.md). |
| Nomajde | **Tâches** | Refusionner la sécurité (paquet de changements), Refusionner la sécurité (tous les rôles), Rafraîchir le dictionnaire (modèles Explorateur) — voir [Tâches de Nomajde](../../nomajde/jobs.md). |
| Démo des ventes | **Import** | Fichier articles, Fichier sociétés, Fichier ventes (un mois), Recalculer les périodes, Charger les fichiers d'exemple — voir [La démo des ventes](../../framework/demo-app.md#loads). |
