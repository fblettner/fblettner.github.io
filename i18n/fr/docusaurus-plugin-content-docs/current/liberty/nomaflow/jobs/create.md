---
title: Créer une tâche
description: "Parcours de l'éditeur de tâche Nomaflow — identité, planification, paramètres, étapes, nouvelles tentatives, alertes — construction pas à pas d'une tâche réelle avec chaque champ détaillé."
keywords: [Nomaflow, éditeur de tâche, créer tâche, identité, planification, étapes, nouvelles tentatives, alertes, paramètres, Liberty Framework]
---

# Créer une tâche

Cette page parcourt l'**éditeur de tâche** — chaque section, chaque champ, chaque enregistrement. À la fin, vous savez construire toute tâche exprimable dans Nomaflow : du simple rafraîchissement SQL en une étape à un pipeline Python de 17 étapes avec paramètres partagés et politique de nouvelles tentatives.

L'éditeur s'ouvre via **＋ Nouvelle tâche** sur le [catalogue des tâches](./catalog.md), ou **✎ Modifier** sur une tâche existante.

---

## Disposition de l'éditeur

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="je-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="420" rx="14" fill="url(#je-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow · Éditeur de tâche · my-first-job</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="920" height="80" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="100" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">① IDENTITÉ</text>
  <text x="58" y="122" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">id · description · étiquettes · activée</text>
  <rect x="500" y="92" width="100" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="550" y="107" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">my-first-job</text>
  <rect x="500" y="120" width="280" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="510" y="135" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">ma première tâche Nomaflow</text>

  <rect x="40" y="172" width="920" height="60" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="194" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">② PLANIFICATION</text>
  <text x="58" y="216" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">cron · fuseau · bascule d'activation</text>
  <rect x="500" y="184" width="120" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="510" y="199" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">0 2 * * *</text>
  <rect x="630" y="184" width="160" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="640" y="199" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Europe/Paris ▾</text>
  <text x="500" y="221" fill="#22c55e" fontSize="10" fontFamily="system-ui, sans-serif">prochains déclenchements : 02 h 00 · 02 h 00 · 02 h 00</text>

  <rect x="40" y="246" width="920" height="68" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="268" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">③ PARAMÈTRES PARTAGÉS</text>
  <text x="58" y="290" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">params fusionnés dans op_kwargs de chaque étape</text>
  <rect x="500" y="258" width="80" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="510" y="273" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">apps_id</text>
  <rect x="586" y="258" width="50" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="596" y="273" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">10</text>
  <rect x="640" y="258" width="22" height="22" rx="4" fill="rgba(239,68,68,0.10)" stroke="rgba(239,68,68,0.40)"/>
  <text x="651" y="273" fill="#ef4444" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>

  <rect x="40" y="328" width="920" height="80" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="350" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">④ ÉTAPES (ORDONNÉES)</text>
  <rect x="58" y="362" width="600" height="32" rx="6" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)"/>
  <text x="74" y="382" fill="#c084fc" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">1 · sql_query · refresh-totals</text>
  <text x="670" y="382" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">↕ réordonner  ·  ✎ modifier  ·  ✕ retirer</text>
  <rect x="58" y="398" width="120" height="22" rx="4" fill="#4a9eff" opacity="0.9"/>
  <text x="118" y="413" fill="#0b1220" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Ajouter une étape</text>

  <rect x="880" y="22" width="60" height="22" rx="4" fill="#4a9eff" opacity="0.9"/>
  <text x="910" y="37" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
</svg>

L'éditeur tient sur une seule page défilante répartie en quatre sections. Le bouton **Enregistrer** en haut à droite écrit toute la tâche d'un seul tenant — il n'existe pas d'enregistrement par section.

---

## ① Identité

Le bloc qui nomme la tâche et la rend opérable.

| Champ | Validation | Notes |
|---|---|---|
| **Id** | Lettres, chiffres, `-`, `_`. Obligatoire, unique. | Utilisé dans les URL (`/nomaflow/jobs/<id>`) et comme clé étrangère de chaque exécution. Immuable en pratique — pour renommer : exporter, modifier, recréer. |
| **Description** | Texte libre, facultatif. | Apparaît sur la fiche du catalogue. À utiliser pour consigner le *pourquoi* de la tâche. |
| **Étiquettes** | Liste de libellés libres. | Affichés en pastilles. Pratiques pour regrouper (`etl`, `nightly`, `team-data`). |
| **Activée** | Booléen, `true` par défaut. | Lorsqu'elle est désactivée, la planification est ignorée mais ▶ Lancer maintenant fonctionne toujours. |

:::tip[Modèle de nommage]
La plupart des installations adoptent `<domaine>-<objectif>` ou `<domaine>-<objectif>-<portée>` :
`reporting-nightly-refresh`, `nomajde-daily-sync`, `nomasx1-security-1`. L'identifiant apparaît partout — dans l'URL, dans les journaux, dans l'historique d'exécution — donc un préfixe clair passe à l'échelle.
:::

---

## ② Planification

Le bloc qui détermine quand la tâche se déclenche automatiquement.

| Champ | Valeurs acceptées |
|---|---|
| **Cron** | Expression à 5 champs (`m h dom mon dow`) avec un 6ᵉ facultatif pour les secondes. Vide = manuel uniquement. |
| **Fuseau horaire** | Nom IANA. Par défaut, le fuseau de l'hôte. Validé via `zoneinfo` — les noms incorrects sont rejetés à l'enregistrement. |

L'éditeur affiche en dessous du champ un **aperçu en direct des trois prochains déclenchements** — un contrôle rapide de l'expression sans lancer la tâche. Si l'aperçu indique « prochain : dans 3 mois » alors que vous attendiez « chaque jour », vous venez de repérer une faute de frappe.

La référence complète du cron et les modèles figurent sur la page [Planifications](./schedules.md).

### Tâches manuelles uniquement

Laissez le cron vide. La tâche figure toujours au catalogue, toujours lançable via ▶, mais ne se déclenche jamais automatiquement. C'est le profil adapté pour :

- **Reconstructions pilotées par l'opérateur** — un rafraîchissement ponctuel après un import de données.
- **Tâches de bac à sable** — variantes d'une tâche de production, conservées pour des tests ad hoc.
- **Tâches sensibles** — purges destructives, migrations de schéma : à laisser manuelles pour éviter tout déclenchement accidentel.

---

## ③ Paramètres partagés

Facultatif. Mappage plat clé → valeur transmis à `op_kwargs` de **chaque** étape au moment de l'exécution (les valeurs d'étape l'emportent en cas de conflit).

| Champ | Saisie typée |
|---|---|
| Booléen (`true`/`false`) | Case à cocher. |
| Nombre | Champ numérique. |
| Chaîne | Champ texte. |
| Clé `connector` ou `*_connector` | Sélecteur de connecteur (recherche-sélection). |

Trois modèles où les paramètres partagés brillent :

| Modèle | Exemple |
|---|---|
| **Tâche multi-étapes, même identifiant dans chaque étape.** | `apps_id = 10` consommé par 17 étapes Python. |
| **Couples source / cible.** | `source_connector = "jdedwards"` + `target_connector = "nomajde"`. |
| **Cible de surcharge par déclenchement.** | Conserver une valeur par défaut raisonnable ; permettre aux opérateurs de la changer dans la fenêtre Exécuter avec paramètres. |

Si la tâche n'a aucun paramètre partagé, laissez le bloc vide — la section se replie.

---

## ④ Étapes

Liste ordonnée des unités de travail. Cliquez sur **＋ Ajouter une étape** pour ouvrir l'**éditeur d'étape** (référence complète sur la page [Étapes](../steps.md)) ; cliquez sur **✎** dans une ligne pour la modifier ; faites glisser la poignée ↕ pour réordonner.

### Types d'étapes

| Type | Champs à renseigner |
|---|---|
| **`sql_query`** | Connecteur + instruction SQL + dictionnaire de paramètres facultatif + délai d'expiration. |
| **`sql_copy`** | Point source (connecteur + schéma + table) + point cible + mode (`overwrite` / `append` / `upsert`) + coercition de types facultative + taille de lot. |
| **`python`** | Appelable `module.path:function_name` + map op_kwargs. |
| **`http`** | URL + méthode + en-têtes + corps. |
| **`ldap_sync`** | Serveur LDAP + identifiants de bind + base de recherche + filtre + attributs + connecteur cible + requête cible + mapping attribut → colonne. |

### Désactivation par étape

Chaque ligne d'étape comporte une bascule **activée**. Lorsqu'elle est désactivée, l'exécuteur enregistre l'étape comme `CANCELED` avec la raison `skipped: disabled` et passe à la suivante. Utile pour :

- Les étapes qui ne doivent s'exécuter **que certains jours** — désactiver dans la configuration enregistrée, activer par déclenchement dans la fenêtre.
- Les étapes **temporairement cassées** — désactiver le temps de corriger l'amont, garder le reste opérationnel.
- Les étapes **à désactivation d'urgence** — laisser la bascule dans l'éditeur comme « interrupteur d'arrêt ».

### Délai d'expiration par étape

Le `timeout_seconds` d'une étape (3600 par défaut = 1 heure) borne sa durée d'exécution. En cas de dépassement, l'étape est annulée et l'exécution échoue (sous réserve de la politique de nouvelles tentatives). À augmenter pour les longs ETL, à baisser pour de rapides sondes HTTP.

### Réordonnancement

Les étapes s'exécutent **strictement dans l'ordre** — l'étape 2 ne démarre qu'après le succès de l'étape 1. Faites glisser la poignée ↕ d'une ligne pour réordonner ; la modification s'applique à l'enregistrement.

---

## ⑤ Politique de nouvelles tentatives (facultatif)

Une politique de nouvelles tentatives s'applique à l'échec d'une **étape**, pas à l'échec global de la tâche. Une étape qui échoue puis réussit après réessai permet à la tâche de continuer ; une étape qui épuise ses tentatives fait échouer l'ensemble de l'exécution.

| Champ | Défaut | Notes |
|---|---|---|
| **Tentatives** | `1` (pas de réessai) | Total d'essais — `2` = essai initial + une nouvelle tentative. |
| **Temporisation** | `fixed` | Ou `exponential` (double à chaque nouvelle tentative). |
| **Secondes de base** | `60` | Attente avant la première nouvelle tentative. Avec `exponential`, la deuxième attente double. |

Quand régler quoi :

| Type d'étape | Nouvelle tentative typique |
|---|---|
| `sql_query` sur le pool du framework | Aucune — les échecs internes sont généralement déterministes. |
| `sql_copy` depuis une BDD externe | `attempts = 2`, `backoff = fixed`. Couvre les coupures réseau passagères. |
| `http` vers une API tierce | `attempts = 3`, `backoff = exponential`, `base_seconds = 30`. Couvre la limitation de débit et les indisponibilités passagères. |
| `python` appelant un service externe | Identique à `http`. |
| `ldap_sync` contre AD | `attempts = 2`. Les délais d'AD sont fréquents en heures ouvrées. |

N'ajoutez pas de nouvelles tentatives à une étape qui **risque d'échouer de la même manière à chaque essai** — vous ne ferez que retarder la notification d'échec de `attempts × base_seconds`.

---

## ⑥ Alertes (facultatif)

Là où Nomaflow route les signaux d'échec (et d'exécution longue).

| Champ | Signification |
|---|---|
| **`on_failure`** | Quand `true`, une exécution `FAILED` émet un événement d'alerte. `true` par défaut dès lors que le bloc d'alertes existe. |
| **`on_long_run_minutes`** | Émet une alerte si l'exécution est toujours en cours après N minutes. L'exécution continue — il s'agit d'un signal préventif. |
| **`recipients`** | Identifiants spécifiques au canal (salon Slack, adresse e-mail, identifiant de webhook). Vide = utiliser les valeurs par défaut du framework. |

Le transport (espace Slack, serveur SMTP, URL de webhook) se configure **une seule fois** au niveau du framework — la tâche se contente de désigner les destinataires. Voir [Notifications](../notifications.md) pour le câblage complet.

---

## ⑦ Niveau de journal

Verbosité par déclenchement. La liste déroulante propose deux options :

| Valeur | Contenu émis |
|---|---|
| **`INFO`** (par défaut) | Décomptes de lignes, jalons d'avancement métier, frontières d'étapes. Adapté à l'opérateur. |
| **`DEBUG`** | Tout `INFO` plus le **SQL complet** de chaque requête et l'état interne détaillé. Utile en diagnostic. |

La valeur définie ici sert de **valeur par défaut** pour chaque déclenchement. La fenêtre Exécuter avec paramètres peut la surcharger par déclenchement sans modifier la tâche.

Évitez de laisser une tâche en `DEBUG` à l'état stable — les journaux de débogage sont verbeux et Nomaflow les conserve 90 jours, comme le reste.

---

## Enregistrer → recharger

Le clic sur **Enregistrer** :

1. Valide le formulaire (format d'identifiant, syntaxe cron, fuseau IANA, champs requis selon le type d'étape).
2. Réécrit la tâche dans le catalogue enregistré.
3. Appelle `POST /admin/reload` pour que le planificateur prenne en compte la nouvelle planification **sans redémarrage de processus**.
4. Vous ramène à l'éditeur avec une bannière verte « Enregistré ».

Si la validation échoue, l'éditeur défile jusqu'au champ fautif, marqué d'une bordure rouge et d'une indication. Échecs courants :

| Erreur | Cause |
|---|---|
| `job id contains invalid characters` | Présence d'un espace, point ou barre oblique. Limitez-vous aux lettres, chiffres, `-`, `_`. |
| `unknown timezone` | Faute de frappe dans le nom IANA. Le sélecteur l'évite ; seule la saisie manuelle peut introduire cette erreur. |
| `step X is missing required field(s): …` | Les champs obligatoires d'un type d'étape ne sont pas remplis (par ex. requête SQL sans connecteur). |
| `duplicate job id` | Un autre identifiant utilise déjà cet id. Choisissez-en un autre. |

---

## Modifier une tâche existante

Le clic sur **✎ Modifier** d'une fiche ouvre le même éditeur avec la configuration existante chargée. Le champ Id est verrouillé — pour renommer une tâche, la voie sûre est **exporter → enregistrer une copie → recréer → supprimer l'ancienne**.

Enregistrer par-dessus une tâche existante :

- Les exécutions présentes dans l'historique sont **préservées** (les lignes d'exécution référencent l'id de tâche, qui n'a pas changé).
- Le prochain déclenchement cron utilise la nouvelle planification / les nouvelles étapes.
- Une exécution déjà en cours au moment de l'enregistrement **se termine avec l'ancienne configuration** — Nomaflow ne bascule pas la configuration à chaud dans un pipeline en cours d'exécution.

---

## Supprimer une tâche

Une action **🗑 Supprimer** est disponible dans l'éditeur (au bas de la page). La suppression :

- Retire la tâche du catalogue.
- **Conserve** l'historique d'exécution (les lignes restent interrogeables par leur `job_id`, mais ne pointent plus vers une tâche vivante).
- Arrête toute planification future.

Pour **mettre en pause** une tâche tout en gardant sa définition, utilisez la **bascule d'activation** sur la fiche du catalogue — même effet, totalement réversible.

---

## Pour aller plus loin

- [Étapes](../steps.md) — référence complète des types d'étape (chaque champ de chaque type).
- [Planifications](./schedules.md) — modèles cron, pièges de fuseau horaire, vue calendrier.
- [Recettes de workflow](../workflows/scheduled-sync.md) — trois modèles concrets de bout en bout à étudier.
- [Catalogue](./catalog.md) — la page Tâches, une fois quelques tâches en place à piloter.
