---
title: Lancer une tâche depuis le menu d'une application
description: "Une entrée de menu de type job place une tâche Nomaflow dans le menu d'une application : l'utilisateur choisit les fichiers et les paramètres demandés, lance la tâche, suit son journal en direct et retrouve les exécutions précédentes — sans accès à Nomaflow lui-même. La permission de la tâche, les paramètres utilisateur, les fichiers et l'historique."
keywords: [Nomaflow, entrée de menu job, lancer une tâche, page de la tâche, envoi de fichier, paramètres utilisateur, user_params, permission job, journal en direct, Liberty Next]
---

# Lancer une tâche depuis le menu d'une application

Une entrée de menu de type **job** place une tâche Nomaflow dans le menu d'une application, à l'intention des utilisateurs qui n'administrent pas Nomaflow : la personne qui charge le fichier des ventes du mois, le responsable sécurité qui collecte les données de sécurité avant une revue. L'entrée ouvre la page propre à la tâche — les fichiers attendus, ses paramètres, **Lancer**, le journal suivi en direct et les exécutions précédentes. Rien d'autre de Nomaflow n'apparaît.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jbp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jbp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jbp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jbp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="472" rx="14" fill="url(#jbp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">▶ Charger un mois de ventes</text>
  <text x="240" y="60" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Charge un mois de lignes de facture ; une période clôturée est refusée.</text>
  <rect x="240" y="74" width="720" height="62" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="94" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Société ∗</text>
  <rect x="254" y="100" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="114.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">(tous) ▾</text>
  <text x="420" y="94" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Fichier pour l'étape « load » · feuille « Sales »</text>
  <rect x="420" y="100" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="114.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">sales_2026-03.xlsx</text>
  <rect x="696" y="100" width="80" height="22" rx="5" fill="url(#jbp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="736.0" y="114.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Lancer</text>
  <rect x="240" y="146" width="720" height="168" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="166" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Journal</text>
  <rect x="312" y="154" width="56" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="340.0" y="165.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">En cours</text>
  <rect x="254" y="176" width="692" height="92" rx="6" fill="#0a0e1a" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="194" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">10:02:11  load: 4 812 read · 4 806 inserted · 6 rejected</text>
  <text x="264" y="212" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">10:02:12  load: partitions replaced 2026-03 / 00001, 00002</text>
  <text x="264" y="230" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">10:02:13  customers: 3 rows</text>
  <text x="264" y="248" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">10:02:13  periods: 14 rows</text>
  <text x="254" y="290" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Fichiers de l'exécution</text>
  <rect x="254" y="294" width="107" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="307.5" y="306.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ load-rejects.csv</text>
  <rect x="240" y="324" width="720" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="344" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Exécutions précédentes</text>
  <rect x="254" y="354" width="692" height="22" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="368.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉBUT</text>
  <text x="414" y="368.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <text x="524" y="368.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DURÉE</text>
  <text x="634" y="368.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PAR</text>
  <text x="774" y="368.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <rect x="254" y="380" width="692" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="395.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">il y a 2 h</text>
  <rect x="414" y="384.0" width="51" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="439.5" y="395.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Réussie</text>
  <text x="524" y="395.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">18 s</text>
  <text x="634" y="395.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">j.martin</text>
  <text x="774" y="395.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">4 806 ligne(s)</text>
  <rect x="254" y="408" width="692" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="423.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">hier</text>
  <rect x="414" y="412.0" width="56" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="442.0" y="423.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">En échec</text>
  <text x="524" y="423.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2 s</text>
  <text x="634" y="423.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">a.dupont</text>
  <text x="774" y="423.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">période 2026-02 clôturée</text>
  <rect x="10" y="86" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="101" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres utilisateur</text>
  <text x="20" y="114" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">déclarés par la tâche</text>
  <line x1="210" y1="103.0" x2="254" y2="108" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jbp-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un fichier par étape</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">étapes sans chemin seulement</text>
  <line x1="1000" y1="47.0" x2="620" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jbp-arrow)"/>
  <rect x="1000" y="150" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lancer</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une exécution à la fois</text>
  <line x1="1000" y1="167.0" x2="776" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jbp-arrow)"/>
  <rect x="10" y="210" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Journal en direct</text>
  <text x="20" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rafraîchi toutes les 2 s</text>
  <line x1="210" y1="227.0" x2="254" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jbp-arrow)"/>
  <rect x="1000" y="280" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fichiers de l'exécution</text>
  <text x="1010" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lignes rejetées à télécharger</text>
  <line x1="1000" y1="297.0" x2="380" y2="303" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jbp-arrow)"/>
  <rect x="1000" y="400" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Historique</text>
  <text x="1010" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic affiche son journal</text>
  <line x1="1000" y1="417.0" x2="946" y2="410" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jbp-arrow)"/>
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

Dans **Liberty Next → Construire → Menus**, ajouter une entrée de type **Job (run it, follow its log)** et choisir la tâche dans **Target** : la liste présente chaque tâche avec la première ligne de sa description. Aucun connecteur n'est renseigné. Voir [Types d'entrées de menu](../../framework/build/menus/item-types.md#job).

---

### Un préréglage dans le menu \{#preset\}

Une entrée peut fixer l'un des [préréglages](./schedules.md#schedulable-presets) de la tâche avec `params = { preset = "Licences" }` : la page lance alors la tâche avec les paramètres et les étapes actives de ce préréglage. Une même tâche donne ainsi plusieurs entrées de menu — *Collecter la sécurité et la SoD*, *Collecter les licences* —, chacune sur un préréglage. Le libellé de l'entrée de menu donne son titre à la page.

---

## Qui peut la lancer \{#access\}

L'entrée et sa page demandent la permission `job:<id>` — dans **Liberty Next → Administrer → Accès → Roles**, bloc **Au-delà des menus**, type de règle **Tâche**, puis la tâche. Un refus (`!job:<id>`) masque l'entrée même quand le menu l'afficherait. Les superutilisateurs voient toutes les tâches.

Chaque titulaire de la permission voit **toutes** les exécutions de la tâche — la liste des exécutions précédentes, leurs journaux et leurs fichiers —, pas seulement les siennes.

---

## Paramètres utilisateur \{#user-params\}

Une tâche déclare dans `jobs.toml` ce qu'un utilisateur peut régler en la lançant depuis sa page. Toute autre valeur est refusée ; les autres réglages de l'exploitant restent hors de portée.

```toml title="jobs.toml"
[[jobs.user_params]]
name = "models"
label = "Explorer model (blank = every model)"
l = { fr = "Modèle Explorateur (vide = tous les modèles)" }
step = "refresh"
choices_from = "explorer_models:nomajde"
```

| Clé | Rôle |
|---|---|
| `name` | L'argument de l'étape qui reçoit la valeur. |
| `label`, `l` | Le libellé affiché, par langue. Par défaut : le nom. |
| `step` | L'étape qui reçoit la valeur. Sans elle, la valeur va à toutes les étapes de la tâche. |
| `default` | La valeur préremplie. |
| `required` | `true` : la tâche ne démarre pas sans valeur. |
| `choices` | Une liste fixe de valeurs : la page affiche une liste déroulante et refuse toute autre valeur. |
| `choices_from` | `explorer_models:<app>` — les modèles de l'explorateur de données d'une application ; ou `query:<connecteur>/<requête>:<colonne valeur>:<colonne libellé>` — les lignes d'une requête de lecture, comme les applications de Nomasx-1. |
| `multiple` | `true` : plusieurs valeurs peuvent être cochées, avec **Tout**. |

Une valeur vide signifie *non renseigné* : la valeur par défaut de l'étape s'applique. Les mêmes paramètres apparaissent dans la fenêtre **Exécuter avec des paramètres** des exploitants.

**Une exécution par valeur.** Une tâche qui déclare `for_each = "<paramètre>"` s'exécute une fois pour chaque valeur cochée — l'une après l'autre, chacune avec une seule valeur — ; **Tout** reprend toutes les valeurs que propose le paramètre. Une tâche planifiée avec la valeur `all` traite toutes les valeurs à chaque déclenchement : toutes les applications de Nomasx-1, par exemple.

---

## Ce que livrent les applications \{#shipped\}

| Application | Dossier | Tâches |
|---|---|---|
| Nomasx-1 | **Tâches** | Collecter la sécurité et la SoD, Collecter les licences, Rapport d'audit des licences, Rapport sécurité et SoD — voir [Tâches de Nomasx-1](../../nomasx1/jobs.md). |
| Nomajde | **Tâches** | Refusionner la sécurité (paquet de changements), Refusionner la sécurité (tous les rôles), Rafraîchir le dictionnaire (modèles Explorateur) — voir [Tâches de Nomajde](../../nomajde/jobs.md). |
| Démo des ventes | **Import** | Fichier articles, Fichier sociétés, Fichier ventes (un mois), Recalculer les périodes, Charger les fichiers d'exemple — voir [La démo des ventes](../../framework/demo-app.md#loads). |
