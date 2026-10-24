---
title: Tâches planifiées
description: "Une seule page NomaUBL pour toutes les tâches exécutées par le serveur selon un calendrier — suivi des imports et récupération des statuts PA, cycle e-reporting, factures reçues, lots de documents, rapports quotidiens, reprises automatiques, contrôles du cycle de vie et purge de rétention — avec déclencheur, état, dernière et prochaine exécution, lancement immédiat, suspension, historique et éditeur intégré."
keywords: [NomaUBL, tâches planifiées, planificateur, lots, interrogation PA, suivi des imports, récupération des statuts, rapport quotidien, reprise automatique, contrôle du cycle de vie, purge de rétention, lancer maintenant, suspendre, historique des exécutions, BIP, dossiers surveillés, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Tâches planifiées

La page **Tâches planifiées** liste **toutes les tâches que le serveur exécute selon un calendrier**, dans un seul tableau : les interrogations de la PA, le cycle e-reporting, la récupération des factures reçues, les lots de documents, les rapports quotidiens, les reprises automatiques, les contrôles du cycle de vie et la purge de rétention. Pour chacune, elle affiche le déclencheur, l'état, la dernière exécution avec sa durée et son résultat, et la prochaine exécution ; depuis la même ligne, une tâche se lance immédiatement, se suspend ou s'ouvre dans son éditeur.

Accès : **Synchronisation → Tâches planifiées**. La carte *Planificateur* du [Tableau de bord IT](../../application/tech-dashboard.md) renvoie vers cette page.

---

## Vue d'ensemble

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '12.5px', overflowX: 'auto'}}>
  <div style={{fontWeight: 700, fontSize: '15px'}}>Tâches planifiées</div>
  <div style={{opacity: 0.7, margin: '4px 0 12px'}}>Toutes les tâches exécutées par le serveur selon un calendrier : déclencheur, état, dernière et prochaine exécution. Lancer maintenant, suspendre les interrogations de la PA ou ouvrir le paramétrage.</div>
  <div style={{display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '12px'}}>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>Tous les types ▾</span>
    <span>☑ Actualisation auto</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>Actualiser</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontWeight: 600}}>Nouvelle tâche</span>
    <span style={{opacity: 0.7, marginLeft: 'auto'}}>9 active(s) sur 12 tâche(s) · fenêtre silencieuse 06:00–07:00</span>
  </div>
  <table style={{width: '100%', borderCollapse: 'collapse'}}>
    <thead><tr style={{textAlign: 'left', opacity: 0.7}}><th>Type</th><th>Tâche</th><th>Déclencheur</th><th>État</th><th>Dernière exécution</th><th>Durée</th><th>Résultat</th><th>Prochaine exécution</th><th>Actions</th></tr></thead>
    <tbody>
      <tr><td>Interrogation</td><td style={{color: '#4a9eff'}}>Import PA (suivi des dépôts)</td><td>toutes les 5 min</td><td>Actif</td><td>il y a 2 min</td><td>3 s</td><td>total=12 success=12</td><td>dans 3 min</td><td>▶ ⏸ ⟲</td></tr>
      <tr><td>Interrogation</td><td style={{color: '#4a9eff'}}>Récupération des statuts PA</td><td>toutes les 15 min</td><td>Suspendu</td><td>il y a 1 h</td><td>12 s</td><td>OK</td><td>—</td><td>▶ ▷ ⟲</td></tr>
      <tr><td>Lot</td><td style={{color: '#4a9eff'}}>BIP nocturne</td><td>chaque jour à 04:00</td><td>Actif</td><td>il y a 4 h</td><td>6 min</td><td>Processed 420/420, 0 failed</td><td>dans 20 h</td><td>▶ ⏸ ⟲</td></tr>
      <tr><td>Rapport</td><td style={{color: '#4a9eff'}}>rapport-exploitation</td><td>chaque jour à 06:00</td><td>Actif</td><td>il y a 2 h</td><td>1 s</td><td>sent to 2 recipients</td><td>dans 22 h</td><td>▶ ⏸ ⟲</td></tr>
      <tr><td>Reprise auto</td><td style={{color: '#4a9eff'}}>retry-send-failed</td><td>chaque jour à 03:00</td><td>En cours</td><td>maintenant</td><td>—</td><td>—</td><td>dans 24 h</td><td>▶ ⏸ ⟲</td></tr>
      <tr><td>Système</td><td style={{color: '#4a9eff'}}>Purge de rétention</td><td>chaque jour · conserve 90 jours</td><td>Actif</td><td>il y a 5 h</td><td>450 ms</td><td>purged 0 row(s)</td><td>dans 19 h</td><td>▶ ⏸ ⟲</td></tr>
      <tr style={{opacity: 0.6}}><td>Interrogation</td><td>Factures reçues</td><td>—</td><td>Inactif</td><td>—</td><td>—</td><td>—</td><td>—</td><td>▶</td></tr>
    </tbody>
  </table>
  <div style={{opacity: 0.6, marginTop: '8px'}}>▶ Lancer maintenant · ⏸ Suspendre · ▷ Reprendre · ⟲ Historique des exécutions — le nom de la tâche ouvre son éditeur</div>
</div>

Les résultats d'exécution s'affichent tels que le serveur les écrit, en anglais.

---

## Les tâches

| Type | Tâches | Déclencheur réglé dans |
|---|---|---|
| **Interrogation** | *Import PA (suivi des dépôts)* (factures en attente, statut `9906`), *Récupération des statuts PA* (événements du cycle de vie), *Cycle e-reporting* (production et dépôt des flux échus), *Factures reçues* (factures fournisseur reçues sur la plateforme). | L'éditeur de la tâche : intervalle en minutes, plus la fenêtre silencieuse pour les deux interrogations de la PA. |
| **Lot** | Lots de documents : depuis la file d'impression JDE (BIP), depuis le répertoire d'entrée ou depuis les [dossiers surveillés](../../management/watched-folders.md). | L'éditeur de la tâche : intervalle ou heure quotidienne, et les paramètres de lot ci-dessous. |
| **Rapport** | [Rapports quotidiens](./daily-digest.md) — e-mail des erreurs ou des factures archivées. | Le formulaire du rapport. |
| **Reprise auto** | [Reprises automatiques](./auto-retry.md) — renvoi quotidien des factures en statut d'erreur. | Le formulaire de reprise. |
| **Contrôle cycle de vie** | [Contrôles du cycle de vie](./lifecycle-checks.md) — contrôle quotidien d'intégrité et d'ordre des statuts. | Le formulaire du contrôle. |
| **Système** | *Purge de rétention* — le nettoyage quotidien des tables (voir [Purge de rétention](#retention)). | L'éditeur de la tâche ; durée de conservation par table. |

Les tâches désactivées figurent aussi dans la liste, à l'état **Inactif**, pour être activées depuis la page.

---

## Colonnes

| Colonne | Description |
|---|---|
| **Type** | Interrogation, Lot, Rapport, Reprise auto, Contrôle cycle de vie, Système. |
| **Tâche** | Nom de la tâche ; un clic ouvre son éditeur. |
| **Déclencheur** | *toutes les 5 min*, *chaque jour à 04:00*, *chaque jour · conserve 90 jours*. |
| **État** | **Actif**, **Inactif**, **Suspendu**, **En cours**. |
| **Dernière exécution** | Début de la dernière exécution, avec *Durée* et *Résultat* (le résumé d'une ligne de l'exécution). Conservée d'un redémarrage du serveur à l'autre. |
| **Prochaine exécution** | Moment du prochain déclenchement planifié. |
| **Actions** | Lancer maintenant, Suspendre / Reprendre, Historique des exécutions. |

La barre d'outils filtre par **type**, rafraîchit le tableau (**Actualiser**, **Actualisation auto**), crée une tâche (**Nouvelle tâche**) et exporte la grille. Sa ligne de synthèse compte les tâches actives et rappelle la fenêtre silencieuse, mise en évidence quand elle est en cours.

---

## Actions

- **Lancer maintenant** — exécute la tâche immédiatement, hors calendrier, après confirmation. La suspension et la fenêtre silencieuse sont ignorées pour cette exécution ; une tâche déjà en cours n'est pas relancée. L'exécution est enregistrée comme une exécution planifiée.
- **Suspendre / Reprendre** — disponible sur toutes les tâches. Une tâche suspendue garde son calendrier mais ses déclenchements sont ignorés jusqu'à la reprise ou au redémarrage du serveur : une suspension ne peut donc pas être oubliée indéfiniment. *Lancer maintenant* ne tient pas compte de la suspension.
- **Historique des exécutions** — ouvre les dernières exécutions de la tâche : quand, événement (début, fin, erreur), durée, résultat et identifiant d'exécution. Chaque exécution d'une tâche planifiée — déclenchée par le calendrier, par *Lancer maintenant* ou par la commande correspondante en ligne de commande — écrit une ligne de début et une ligne de fin ou d'erreur dans le journal des traitements. L'identifiant d'exécution figure aussi dans les lignes du journal serveur de cette exécution, ce qui permet de rapprocher les deux dans le [Journal serveur](../../application/diagnostics/server-log.md). Les exécutions en échec apparaissent dans [Diagnostic → Anomalies](../../application/diagnostics/failures.md).

---

## L'éditeur

Un clic sur le nom de la tâche ouvre son éditeur dans une fenêtre. **Enregistrer et appliquer** enregistre les réglages et **recharge immédiatement la planification** — une heure ou un intervalle modifié n'attend plus le redémarrage du serveur ; les suspensions survivent au rechargement. Les éditeurs des rapports, des reprises et des contrôles proposent aussi l'envoi d'un test et la suppression.

### Interrogations

| Tâche | Champs |
|---|---|
| **Import PA (suivi des dépôts)** | **Import poll interval (min)** — minutes entre deux interrogations du statut d'import des factures en attente (statut `9906`) ; `0` = désactivé. **Quiet window from / to (HH:mm)** — voir ci-dessous. |
| **Récupération des statuts PA** | **Status retrieval interval (min)** — minutes entre deux récupérations des statuts du cycle de vie auprès de la PA ; `0` = désactivé. **Quiet window from / to (HH:mm)**. |
| **Cycle e-reporting** | **E-reporting cycle interval (min)** — minutes entre deux cycles e-reporting (production et dépôt des flux échus) ; `0` = désactivé. |
| **Factures reçues** | **Received invoices interval (min)** — minutes entre deux récupérations des factures fournisseur reçues sur la plateforme ; `0` = désactivé. |

La **fenêtre silencieuse** est une plage horaire quotidienne pendant laquelle le suivi des imports et la récupération des statuts sautent leurs exécutions — à placer sur une campagne d'envoi pour que les interrogations par facture ne s'accumulent pas pendant que la PA intègre le lot. Elle peut franchir minuit ; laisser les deux bornes vides pour la désactiver. Les deux mêmes champs figurent dans [Job defaults](../../configuration/system/global.md#onglet-7--job-defaults).

### Lots de documents

| Champ | Description |
|---|---|
| **Label** | Nom affiché dans la liste (par ex. `BIP invoices`). |
| **Interval (min)** | Minutes entre deux exécutions. `0` = désactivé, sauf si une heure quotidienne est renseignée. |
| **Daily at (HH:mm)** | Déclenche une fois par jour à cette heure locale au lieu de l'intervalle. Vide = l'intervalle s'applique. |

| Champ | Valeurs | Description |
|---|---|---|
| **Process type** | `xml` / `ubl` | `xml` = chaîne complète (transformation + traitement) ; `ubl` = traitement UBL direct (l'entrée est déjà UBL). |
| **Template** *(si Process type = `xml`)* | depuis liste | Document à appliquer. Liste des modèles de type `document`. |
| **Mode** *(si Process type = `xml`)* | `AUTO` / `SINGLE` / `BURST` / `UBL` | Mode de traitement — `AUTO` laisse NomaUBL décider ; `SINGLE` et `BURST` forcent la stratégie de sortie correspondante ; `UBL` produit uniquement de l'UBL. |
| **Source** | `bip` / `directory` / `watch-folders` | Où récupérer les documents : `bip` = file d'impression JDE *(spécifique JDE)* ; `directory` = parcourt l'**Input Directory** des [paramètres globaux](../../configuration/system/global.md) ; `watch-folders` = lance la récupération des [dossiers surveillés](../../management/watched-folders.md) — la tâche cible alors un répertoire configuré (choisi dans une liste) ou tous. |
| **Extract mode** *(si Source = `bip`)* | `input` / `output` / `both` | Quels artéfacts BIP récupérer : `input` = XML source uniquement ; `output` = fichiers de sortie générés uniquement ; `both` = les deux. |
| **Language filter** *(si Source = `bip`)* | texte | Filtre BIP optionnel par langue (par ex. `FR`). Vide = toutes les langues. |
| **Replace existing** | `Y` / `N` | À `Y`, ré-importe les documents déjà présents dans NomaUBL (écrase) ; à `N`, ignore les doublons. |
| **Skip PA send** *(si Process type = `xml`)* | `Y` / `N` | À `Y`, la tâche n'envoie jamais à la Plateforme Agréée — il produit uniquement UBL/PDF en local. |
| **Validate only** *(si Process type = `ubl`)* | `Y` / `N` | À `Y`, valide l'UBL sans l'envoyer à la PA. |
| **Send to PA** *(si Process type = `ubl`)* | *(use settings)* / `Y` / `N` | Surcharge la décision « envoi à la PA » du type de document : vide = défaut ; `Y` = force l'envoi ; `N` = force l'omission. |

Les libellés de l'éditeur restent en anglais, comme dans l'application.

### Rapports, reprises, contrôles

L'éditeur présente le formulaire complet de chaque type, inchangé : voir [Rapport quotidien](./daily-digest.md), [Reprise automatique](./auto-retry.md) et [Contrôles du cycle de vie](./lifecycle-checks.md).

### Purge de rétention \{#retention\}

La purge de rétention quotidienne borne les tables que rien d'autre ne limite. Elle s'exécute toutes les 24 heures, la première fois cinq minutes après le démarrage du serveur.

| Champ | Défaut | Table |
|---|---|---|
| **Processing log (days)** | `0` | Lignes START / END / erreur par fichier du journal d'exécution (`F564237`). Valeur conseillée `180`. |
| **Step timings (days)** | `0` | Lignes de chronométrage par étape écrites par `debugProfile` (`F564237`). Valeur conseillée `30`. |
| **Job runs (days)** | `0` | Lignes d'exécution des tâches planifiées (`F564237`). Valeur conseillée `90`. |
| **Validation errors of finished invoices (days)** | `0` | Erreurs (`F564236`) des factures en statut terminal. Valeur conseillée `365`. |
| **Notifications (days)** | `90` | Notifications de la boîte de réception (`F564253`). Vide = 90 jours ; `0` = conservation illimitée. |

Vide ou `0` conserve une table sans limite. La purge est donc **désactivée par défaut, sauf pour les notifications**, qui gardent leurs 90 jours : une mise à jour ne supprime rien d'elle-même. **Compter seulement** indique ce que chaque table perdrait avec les durées **enregistrées sur le serveur** — enregistrer d'abord, puis compter. Les mêmes valeurs figurent dans [Job defaults → Retention](../../configuration/system/global.md#retention) ; la ligne de commande propose `java -jar nomaubl.jar -purge <configFile> [--dry-run]`.

---

## Nouvelle tâche

**Nouvelle tâche** ouvre une fenêtre pour choisir le **type** et le **nom** :

| Type | Crée |
|---|---|
| **Lot** | Un traitement de documents depuis BIP, un répertoire ou les dossiers surveillés. La tâche reste inactive tant que son déclencheur n'est pas défini. |
| **Rapport** | Un e-mail quotidien des erreurs ou des factures archivées. |
| **Reprise auto** | Un renvoi quotidien des factures en statut d'erreur. |
| **Contrôle cycle de vie** | Un contrôle quotidien d'intégrité et d'ordre des statuts. |

Le nom d'un rapport, d'une reprise ou d'un contrôle se compose de lettres, de chiffres, de tirets et de soulignés : c'est le nom de son fichier de configuration. **Créer** ouvre la nouvelle tâche dans son éditeur.

---

## Accès

Accorder **Tâches planifiées** dans le groupe Synchronisation de la page [Rôles](../../configuration/security/roles.md). *Lancer maintenant*, *Suspendre* et *Enregistrer et appliquer* demandent l'action **integration-run**. Les anciens droits des pages Rapport quotidien, Reprise auto et Contrôles du cycle de vie sont ignorés.

---

## Conseils & bonnes pratiques

- **Lire la colonne État avant une campagne.** Suspendre la récupération des statuts ou poser une fenêtre silencieuse, envoyer, puis reprendre.
- **Tester un nouveau lot avec Lancer maintenant** avant de lui donner un déclencheur.
- **Ouvrir l'historique d'une tâche en échec** avant son éditeur : le résultat de chaque exécution nomme souvent la cause.
- **Activer la rétention progressivement** — partir des durées conseillées, *Compter seulement*, puis enregistrer.
