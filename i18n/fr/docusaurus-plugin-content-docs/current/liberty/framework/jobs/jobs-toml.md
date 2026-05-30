---
title: Éditeur de tâches
description: "Construire une tâche Nomaflow depuis Paramètres → Tâches — nom, planification, fuseau horaire, paramètres, politique de nouvelle tentative et pipeline d'étapes. La page liste chaque champ, son effet et la validation appliquée avant l'enregistrement."
keywords: [Liberty Framework, Nomaflow, jobs builder, schedule, cron, retry, backoff, params, step pipeline, single instance, dependencies, settings]
---

# Éditeur de tâches

Une tâche Nomaflow se crée et se modifie depuis **Paramètres → Tâches**. La page liste chaque tâche du catalogue ; cliquer sur une ligne ouvre l'**éditeur de tâches** — un formulaire avec la planification, la grille de paramètres, la politique de nouvelle tentative et le pipeline d'étapes (glisser-déposer). L'enregistrement recharge la tâche dans l'ordonnanceur en cours d'exécution.

Cette page documente chaque champ de l'éditeur.

---

## Vue d'ensemble

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Paramètres → Tâches → invoices-nightly-rebuild</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Lancer maintenant</span>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Annuler</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>Enregistrer et recharger</span>
    </div>
  </div>
  <div style={{padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Général</div>
    <div style={{display: 'grid', gridTemplateColumns: '180px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
      <div style={{opacity: 0.75}}>Nom</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>invoices-nightly-rebuild</span></div>
      <div style={{opacity: 0.75}}>Application</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>invoices ▾</span></div>
      <div style={{opacity: 0.75}}>Activé</div><div><span style={{padding: '4px 12px', borderRadius: '999px', background: 'rgba(50,215,75,0.12)', border: '1px solid rgba(50,215,75,0.4)', color: '#4ade80', fontSize: '11px', fontWeight: 600}}>● On</span></div>
    </div>
  </div>
  <div style={{padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Planification</div>
    <div style={{display: 'grid', gridTemplateColumns: '180px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
      <div style={{opacity: 0.75}}>Cron</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>0 2 * * *</span> <span style={{marginLeft: '8px', fontSize: '10px', opacity: 0.6, fontStyle: 'italic'}}>02:00 tous les jours</span></div>
      <div style={{opacity: 0.75}}>Fuseau horaire</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Europe/Paris ▾</span></div>
      <div style={{opacity: 0.75}}>5 prochains déclenchements</div><div style={{fontSize: '10px', opacity: 0.7, fontFamily: 'ui-monospace, monospace', lineHeight: '1.5'}}>2026-05-21 02:00<br/>2026-05-22 02:00<br/>2026-05-23 02:00<br/>2026-05-24 02:00<br/>2026-05-25 02:00</div>
    </div>
  </div>
  <div style={{padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff'}}>Étapes</div>
      <span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.40)', color: '#4a9eff', fontSize: '11px', fontWeight: 700}}>+ Ajouter une étape</span>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '24px 1fr 100px 60px', rowGap: '6px', alignItems: 'center', fontSize: '11px'}}>
      <div style={{opacity: 0.5}}>⋮⋮</div><div>refresh-totals</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600}}>sql_query</span></div><div style={{textAlign: 'right', opacity: 0.55}}>✏️ ✕</div>
      <div style={{opacity: 0.5}}>⋮⋮</div><div>rebuild-vat</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.40)', color: '#c084fc', fontSize: '10px', fontWeight: 600}}>python</span></div><div style={{textAlign: 'right', opacity: 0.55}}>✏️ ✕</div>
    </div>
  </div>
</div>

La maquette montre les sections *Général*, *Planification* et *Étapes*. En dessous, l'éditeur propose aussi *Paramètres*, *Politique de nouvelle tentative*, *Dépendances* et *Notifications* — chacune est documentée plus bas.

---

## Général

| Champ | Effet |
|---|---|
| **Nom** | Identifiant unique de la tâche. Apparaît dans l'historique d'exécution, la CLI (`liberty-admin job run <name>`) et le code de permission (`job:<name>`). Convention : minuscules + tirets. Le renommage est pris en charge — l'opération *Renommer* réécrit chaque référence en une seule transaction. |
| **Application** | Liste déroulante des applications enregistrées sur l'installation. La tâche est regroupée sous cette application dans le catalogue et la clé de permission `job:<app>:*`. Défaut `_default` (transverse au framework). |
| **Description** | Texte libre affiché dans la liste du catalogue. Aide l'opérateur suivant. |
| **Activé** | Interrupteur. Les tâches désactivées restent dans le catalogue mais ne se déclenchent jamais depuis cron. Les déclencheurs manuels (le bouton *Lancer maintenant*, l'endpoint REST) continuent de fonctionner. |

---

## Planification

| Champ | Effet |
|---|---|
| **Cron** | Expression cron standard à 5 champs. L'éditeur l'analyse en direct ; l'affichage *5 prochains déclenchements* en dessous confirme ce que l'opérateur a saisi (et rattrape une lecture erronée `0 2 * * *` « 02:00 tous les jours » par rapport à `2 0 * * *` « 00:02 tous les jours »). Alias reconnus : `@daily`, `@hourly`, `@weekly`, `@monthly`, `@yearly`. |
| **Fuseau horaire** | Fuseau IANA (`Europe/Paris`, `UTC`, `America/New_York`). Les heures cron sont interprétées dans ce fuseau. Les transitions d'heure d'été sont gérées automatiquement. |
| **5 prochains déclenchements** | Aperçu en lecture seule des cinq prochains horaires de déclenchement, dans le fuseau de l'opérateur. |
| **Instance unique** | Interrupteur. Quand **activé** (défaut), un horaire de déclenchement qui chevauche une exécution encore en cours est **ignoré** (consigné avec `reason = "single-instance"`). Quand désactivé, la nouvelle exécution démarre et les deux s'exécutent en parallèle. |
| **Délai maximum** | Plafond optionnel sur la durée totale d'une exécution. Une exécution qui le dépasse est **abandonnée**. Les délais par étape se règlent dans l'éditeur d'étape. |

Les tâches qui ne doivent se déclencher qu'à la main ou par API laissent *Cron* vide.

### Sélecteur cron

Pour les opérateurs moins à l'aise avec la syntaxe cron, un bouton **Sélecteur cron** à côté du champ d'expression ouvre une boîte de dialogue avec des modèles préétablis — *Toutes les X minutes*, *Tous les jours à HH:MM*, *Chaque semaine le(s) jour(s) à HH:MM*, *Chaque mois le jour N à HH:MM*. Le sélecteur écrit l'expression résultante dans le champ ; les opérateurs avancés peuvent toujours saisir l'expression directement.

---

## Paramètres

Une table de **paramètres au niveau de la tâche** disponibles pour chaque étape sous l'espace de noms `params`. Utile pour partager une valeur entre étapes — typiquement la période traitée par une tâche nocturne.

| Champ | Effet |
|---|---|
| **Nom** | Nom du paramètre (par exemple `period`, `dry_run`). |
| **Type** | `string` / `int` / `float` / `bool` / `date` / `datetime`. Pilote le widget de la boîte de dialogue *Lancer maintenant*. |
| **Défaut** | Valeur utilisée quand aucun remplacement n'est fourni. Prend en charge les jetons spéciaux `${today}`, `${yesterday}`, `${week.monday}`, `${month.first}`, `${month.previous}`, etc. |
| **Description** | Apparaît comme info-bulle du champ dans la boîte de dialogue *Lancer maintenant*. |

Cliquer sur *Ajouter un paramètre* pour étendre la liste. Le bouton *Lancer maintenant* (en haut de la page) ouvre une boîte de dialogue avec une saisie par paramètre déclaré — les déclenchements manuels peuvent remplacer les valeurs par défaut pour une seule exécution.

---

## Politique de nouvelle tentative \{#retry-policy\}

| Champ | Effet |
|---|---|
| **Tentatives max** | Total de tentatives, première incluse. `1` désactive les nouvelles tentatives. Défaut 3. |
| **Backoff** | `None` / `Constant` / `Exponential`. Pilote le délai entre les tentatives. |
| **Délai initial** | Premier délai entre tentatives. `Constant` l'utilise pour chaque nouvelle tentative ; `Exponential` le double à chaque fois. |
| **Délai maximum** | Plafond du backoff exponentiel. Défaut 600 secondes. |
| **Relancer sur** | Multi-sélection des catégories d'échec — *Erreur* (toute exception), *Délai dépassé*, *Connexion*. Liste vide = aucune nouvelle tentative (synonyme de `Tentatives max = 1`). |
| **Ajouter du jitter** | Interrupteur. Ajoute jusqu'à 25 % de jitter aléatoire à chaque délai — évite les rafales de nouvelles tentatives simultanées. Activé par défaut. |

La politique de nouvelle tentative par étape remplace celle au niveau de la tâche ; l'éditeur d'étape propose les mêmes champs.

---

## Étapes

Le **pipeline d'étapes** est une liste en glisser-déposer — une ligne par étape, exécutée de haut en bas. La poignée `⋮⋮` à gauche réordonne ; l'icône crayon ouvre l'éditeur d'étape ; la croix supprime.

| Champ de l'éditeur d'étape | Effet |
|---|---|
| **Nom** | Unique au sein de la tâche. Apparaît sur la page de détail d'exécution. |
| **Type** | Un des `sql_query`, `sql_copy`, `python`, `http`, `ldap_sync`. Chaque type déploie un formulaire spécifique — voir [Types d'étape](./step-types.md). |
| **Condition** | Expression optionnelle — l'étape ne s'exécute que quand elle est vraie. Référence `${params.*}` et `${previous_step.*}`. Faux → étape `skipped`, la tâche continue. |
| **Continuer en cas d'erreur** | Quand activé, une étape en échec marque l'exécution comme `partial-success` et les étapes suivantes s'exécutent. Désactivé par défaut. |
| **Politique de nouvelle tentative** | Remplacement par étape de la politique au niveau de la tâche. Même structure que ci-dessus. |
| **Délai maximum** | Plafond par étape. |

Le corps de l'éditeur d'étape change avec le sélecteur *Type* — voir [Types d'étape](./step-types.md) pour chaque variante.

---

## Dépendances

Une multi-sélection d'autres tâches qui doivent avoir **réussi le plus récemment** pour que cette tâche s'exécute.

| Statut le plus récent de chaque dépendance | Effet sur la tâche courante |
|---|---|
| `succeeded` | L'exécution se déroule normalement. |
| `failed` / `aborted` | L'exécution est `skipped` avec `reason = "dependency-failed: <name>"`. |
| N'a jamais été exécutée | L'exécution est `skipped` avec `reason = "dependency-never-ran: <name>"`. |
| `running` | L'exécution est `skipped` avec `reason = "dependency-still-running: <name>"`. |

Les cycles sont refusés à l'enregistrement — l'éditeur rejette « la tâche A dépend de B, B dépend de A ».

À utiliser avec parcimonie ; les longues chaînes s'expriment généralement mieux comme une seule tâche à plusieurs étapes.

---

## Notifications

Routage léger du résultat d'exécution.

| Champ | Effet |
|---|---|
| **En cas de succès** | Multi-sélection de canaux notifiés quand la tâche se termine `succeeded`. |
| **En cas d'échec** | Multi-sélection de canaux notifiés quand la tâche se termine `failed` / `aborted`. |
| **En cas d'ignorement** | Multi-sélection de canaux notifiés quand la tâche est `skipped`. |

Canaux disponibles :

| Canal | Configuré dans |
|---|---|
| **Slack `#channel`** | *Paramètres → Framework → Notifications → Slack* — coller l'URL du webhook une fois, chaque tâche choisit dans la liste des canaux. |
| **Email `addr@…`** | *Paramètres → Framework → Notifications → Email* — informations de connexion du relais SMTP. |
| **Webhook `<url>`** | URL personnalisée par tâche. POST un corps JSON avec l'id d'exécution, le nom, le statut et la durée. |
| **Interne `<role>`** | Dépose une notification dans le centre de notifications intégré pour chaque utilisateur qui porte le rôle. |

Pour des payloads plus riches (la fin du log d'échec dans un message Slack), ajouter une étape `http` explicite à la fin de la tâche plutôt que de s'appuyer sur le bloc de notifications.

---

## Lancer maintenant

Le bouton **Lancer maintenant** en haut de l'éditeur déclenche une exécution manuelle ponctuelle. Quand la tâche déclare des paramètres, une boîte de dialogue demande les valeurs (avec les valeurs par défaut déclarées pré-remplies). La confirmation envoie l'exécution dans le même ordonnanceur qu'un déclenchement cron — même moteur d'étapes, même politique de nouvelle tentative, même persistance.

Le bouton est filtré par la permission `job:<name>` ; révoquer `job:*:run` pour un rôle d'audit qui doit voir les tâches sans pouvoir les déclencher.

---

## Enregistrer

L'enregistrement valide le formulaire :

- La syntaxe cron s'analyse.
- Les références connecteur / requête / endpoint de chaque étape se résolvent sur le catalogue chargé.
- Les références `callable` Python s'importent proprement — une fonction manquante fait échouer l'enregistrement.
- Les dépendances existent.
- Aucun cycle dans `Dépendances`.

Un enregistrement en échec affiche le diagnostic en ligne ; le catalogue reste sur la version précédente. Un enregistrement réussi recharge la tâche dans l'ordonnanceur en cours d'exécution — le prochain tick cron récupère la nouvelle définition.

---

## Permissions

L'onglet *Tâches* est filtré par `settings:jobs`. Les actions par tâche héritent de `job:<name>`. Les opérateurs qui ont seulement besoin de **voir les exécutions** sans modifier les tâches obtiennent `jobs:read` + `job:<name>` sans `settings:jobs`.

---

## Sous le capot

Les définitions de tâches sont enregistrées sous `liberty-apps/plugins/<app>/jobs.toml`. Les opérateurs **n'éditent pas ce fichier à la main** en fonctionnement normal ; l'éditeur de tâches est l'interface principale. Le fichier est analysé au démarrage et à chaque *Enregistrer et recharger* ; les opérateurs avancés utilisent l'onglet *Raw TOML* quand une limite de l'éditeur les bloque.

Pour les scripts CI et les orchestrateurs externes, la même surface est accessible via les endpoints REST sous `/admin/jobs/*` — voir [API REST → Tâches](../rest-api.md#jobs).

---

## Pour aller plus loin

- [Types d'étape](./step-types.md) — ce que fait chaque étape et les champs que son éditeur propose.
- [Exécutions et supervision](./runs-monitoring.md) — la page d'historique d'exécution, la fin de log en direct, le flux d'abandon.
- [Applications et Plugins → Plugins](../apps/plugins.md) — écrire les callables Python derrière les étapes `python`.
