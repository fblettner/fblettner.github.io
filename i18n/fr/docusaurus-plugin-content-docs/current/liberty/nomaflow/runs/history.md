---
title: Historique d'exécution
description: "La page Exécutions et le panneau Détail d'exécution — chaque déclenchement de chaque tâche, avec le minutage par étape, les entrées / sorties, la fin de journal en direct et les actions Annuler / Rejouer."
keywords: [Nomaflow, historique d'exécution, page exécutions, détail d'exécution, journal en direct, annuler, rejouer, Liberty Framework]
---

# Historique d'exécution

Chaque déclenchement de chaque tâche laisse une trace. La **page Exécutions** et le panneau **Détail d'exécution** permettent aux opérateurs d'inspecter cette trace — ce qui s'est déclenché, à quel moment, avec quels paramètres, quelle étape a réussi, laquelle a échoué, ce que dit le journal.

Cette page couvre les deux surfaces et les actions qu'elles proposent.

---

## Où vivent les exécutions

Une exécution est accessible depuis plusieurs endroits :

| Depuis | Ce sur quoi cliquer |
|---|---|
| La **carte du catalogue de tâches**. | Le badge d'état coloré qui suit l'identifiant de tâche (par exemple **SUCCEEDED**) — ouvre l'exécution qui l'a produit. |
| La **vue Planification**. | Une pastille dans le calendrier — ne fonctionne que pour les déclenchements déjà survenus. |
| URL directe. | `/nomaflow/runs/<run-id>` si l'identifiant est connu (issu d'une notification, d'un collègue, d'une ligne de journal). |

Le badge de dernière exécution affiché par le catalogue pointe toujours vers l'exécution **la plus récente**. Pour remonter plus loin, suivez le lien depuis la page Détail d'exécution ou utilisez le modèle d'URL ci-dessus avec l'identifiant plus ancien.

---

## La page Détail d'exécution

La page se découpe en trois zones : en-tête, chronologie des étapes, flux de journal.

<svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rh-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="460" rx="14" fill="url(#rh-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">nomajde-daily-sync · run_a8c4d</text>
  <rect x="320" y="34" width="86" height="20" rx="4" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)"/>
  <text x="363" y="48" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">RUNNING</text>
  <rect x="780" y="32" width="80" height="24" rx="4" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.40)"/>
  <text x="820" y="48" fill="#ef4444" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="870" y="32" width="80" height="24" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="910" y="48" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Rejouer</text>

  <line x1="20" y1="68" x2="980" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="92" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Déclenché par</text>
  <text x="170" y="92" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">user:alice</text>
  <text x="320" y="92" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Démarré</text>
  <text x="410" y="92" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">02:30:00 · il y a 14 min</text>
  <text x="640" y="92" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Niveau de journal</text>
  <text x="740" y="92" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">INFO</text>

  <rect x="40" y="116" width="280" height="340" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉTAPES · 4 / 7</text>

  <rect x="56" y="152" width="248" height="28" rx="6" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <circle cx="72" cy="166" r="5" fill="#22c55e"/>
  <text x="86" y="170" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0004</text>
  <text x="290" y="170" fill="#22c55e" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">✓ 1,2 s</text>

  <rect x="56" y="184" width="248" height="28" rx="6" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <circle cx="72" cy="198" r="5" fill="#22c55e"/>
  <text x="86" y="202" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0005</text>
  <text x="290" y="202" fill="#22c55e" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">✓ 8,4 s</text>

  <rect x="56" y="216" width="248" height="28" rx="6" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <circle cx="72" cy="230" r="5" fill="#22c55e"/>
  <text x="86" y="234" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F9200</text>
  <text x="290" y="234" fill="#22c55e" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">✓ 2,1 s</text>

  <rect x="56" y="248" width="248" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <circle cx="72" cy="262" r="5" fill="#4a9eff">
    <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite"/>
  </circle>
  <text x="86" y="266" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F9202</text>
  <text x="290" y="266" fill="#4a9eff" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▶ 4,0 s</text>

  <rect x="56" y="280" width="248" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeDasharray="2,2"/>
  <circle cx="72" cy="294" r="5" fill="#334155"/>
  <text x="86" y="298" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">F9210</text>
  <text x="290" y="298" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">en attente</text>

  <rect x="56" y="312" width="248" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeDasharray="2,2"/>
  <circle cx="72" cy="326" r="5" fill="#334155"/>
  <text x="86" y="330" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">F9860</text>
  <text x="290" y="330" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">en attente</text>

  <rect x="56" y="344" width="248" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeDasharray="2,2"/>
  <circle cx="72" cy="358" r="5" fill="#334155"/>
  <text x="86" y="362" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">F9865</text>
  <text x="290" y="362" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">en attente</text>

  <rect x="340" y="116" width="620" height="340" rx="10" fill="rgba(0,0,0,0.40)" stroke="#1f2937"/>
  <text x="356" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JOURNAL EN DIRECT · diffusion</text>
  <circle cx="500" cy="135" r="4" fill="#22c55e">
    <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite"/>
  </circle>

  <text x="356" y="164" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:00.083  INFO  run started · trigger=user:alice</text>
  <text x="356" y="180" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:00.085  INFO  step F0004 · type=sql_copy · mode=overwrite</text>
  <text x="356" y="196" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:01.190  INFO  source rows=4128 · target rows=4128</text>
  <text x="356" y="212" fill="#22c55e" fontSize="10" fontFamily="ui-monospace, monospace">02:30:01.295  INFO  step F0004 · SUCCEEDED · 1.2 s</text>
  <text x="356" y="228" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:01.298  INFO  step F0005 · type=sql_copy · mode=overwrite</text>
  <text x="356" y="244" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:03.412  INFO  ▶ batch 1 of 4 · 25 000 rows</text>
  <text x="356" y="260" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:05.840  INFO  ▶ batch 2 of 4 · 50 000 rows</text>
  <text x="356" y="276" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:08.144  INFO  ▶ batch 3 of 4 · 75 000 rows</text>
  <text x="356" y="292" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:09.652  INFO  source rows=99 421 · target rows=99 421</text>
  <text x="356" y="308" fill="#22c55e" fontSize="10" fontFamily="ui-monospace, monospace">02:30:09.701  INFO  step F0005 · SUCCEEDED · 8.4 s</text>
  <text x="356" y="324" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:09.704  INFO  step F9200 · type=sql_copy · mode=overwrite</text>
  <text x="356" y="340" fill="#22c55e" fontSize="10" fontFamily="ui-monospace, monospace">02:30:11.820  INFO  step F9200 · SUCCEEDED · 2.1 s</text>
  <text x="356" y="356" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:11.823  INFO  step F9202 · type=sql_copy · mode=overwrite</text>
  <text x="356" y="372" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:13.901  INFO  ▶ batch 1 of 12 · 25 000 rows</text>
  <text x="356" y="388" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">02:30:15.840  INFO  ▶ batch 2 of 12 · 50 000 rows</text>
</svg>

---

## L'en-tête

| Élément | Signification |
|---|---|
| **Identifiant de tâche · identifiant d'exécution** | En haut à gauche. Cliquer sur l'identifiant de tâche ouvre la carte du catalogue ; cliquer sur l'identifiant d'exécution le copie. |
| **Badge d'état** | `QUEUED` / `RUNNING` / `SUCCEEDED` / `FAILED` / `CANCELED`. En direct pour les exécutions en cours. |
| **Déclenché par** | `cron`, `user:<name>`, `api`, `cli`. La piste d'audit. |
| **Démarré / Terminé** | Horodatages dans le fuseau du navigateur (UTC au survol). Pour les exécutions en cours, seul Démarré apparaît. |
| **Niveau de journal** | `INFO` ou `DEBUG` pour cette exécution. Utile lors d'un diagnostic — une exécution DEBUG se lit autrement qu'une exécution INFO. |
| **Cliché des paramètres** | JSON dépliable montrant les paramètres **fusionnés** + op_kwargs tels que l'exécution les a réellement vus. La réponse d'audit à « qu'a reçu cette exécution ». |

L'en-tête propose deux actions : **✕ Annuler** (visible uniquement quand l'exécution est `RUNNING`) et **↻ Rejouer** (visible uniquement sur une exécution terminée).

---

## La chronologie des étapes

La colonne de gauche liste chaque étape dans l'ordre. Chaque ligne affiche :

| Élément | Signification |
|---|---|
| Pastille d'état (●) | Vert = SUCCEEDED, bleu (pulsant) = RUNNING, rouge = FAILED, gris = en attente ou CANCELED. |
| **Nom** | Nom d'étape en monospace. |
| **Type** | Survol de la ligne pour voir le type (`sql_query`, `python`, …). |
| **Durée** | Secondes ou millisecondes, renseignées à la fin de l'étape. |

Cliquer sur une ligne d'étape **filtre le journal** pour n'afficher que les émissions de cette étape — précieux dans les exécutions longues où le journal global devient bruyant.

La pastille évolue en direct au fur et à mesure que l'exécuteur progresse à travers les étapes. Aucun rafraîchissement manuel n'est nécessaire — la page s'abonne à la *room* Socket.IO de l'exécution.

### États d'étape

| État | Quand |
|---|---|
| **`pending`** | L'exécuteur n'a pas encore atteint cette étape. |
| **`RUNNING`** | L'exécuteur est dans cette étape. |
| **`SUCCEEDED`** | L'étape s'est terminée sans lever d'exception. |
| **`FAILED`** | L'étape a levé une exception (après les nouvelles tentatives, le cas échéant). |
| **`CANCELED`** | L'opérateur a cliqué sur ✕ Annuler, **ou** l'étape a été désactivée (raison `skipped: disabled`), **ou** une défaillance amont a stoppé l'exécution avant cette étape. |

Cliquer sur une étape `FAILED` déplie la ligne pour afficher le message d'exception et la trace.

---

## Le journal en direct

La colonne de droite est le flux de journal de l'exécution. Chaque ligne porte :

| Élément | Format |
|---|---|
| Horodatage | `HH:MM:SS.mmm` dans le fuseau du navigateur. |
| Niveau | `INFO` / `WARNING` / `ERROR`. Codé par couleur. |
| Message | Le texte transmis à `ctx.log.info(…)` ou émis par le framework. |

Les frontières d'étape sont émises comme des lignes INFO :

```
02:30:01.295  INFO  step F0004 · SUCCEEDED · 1.2 s
02:30:01.298  INFO  step F0005 · type=sql_copy · mode=overwrite
```

Le journal devient ainsi auto-explicatif — il se lit de haut en bas et raconte le déroulé de l'exécution sans qu'il soit nécessaire de consulter la chronologie.

### Diffusion en direct

Pendant qu'une exécution est en cours :

- Une pulsation verte à côté de « JOURNAL EN DIRECT · diffusion » indique que le WebSocket est connecté.
- Les lignes s'ajoutent en temps réel au fur et à mesure de leur émission.
- La vue défile automatiquement vers le bas — un défilement vers le haut suspend ce défilement automatique jusqu'au retour en bas.

### Après la fin de l'exécution

Le journal est **enregistré** dans l'historique d'exécution et reconstruit depuis la base lors d'un rechargement de page. La diffusion en direct s'arrête ; le même contenu reste lisible. La rétention est de **90 jours** par défaut (paramétrable dans [Administration](../administration.md)).

### Filtrage et recherche

| Action | Comment |
|---|---|
| Filtrer sur une étape | Cliquer sur la ligne de l'étape dans la colonne de gauche. |
| N'afficher que WARNING / ERROR | Basculer la pastille de niveau au-dessus du journal. |
| Trouver une expression précise | Ctrl/Cmd+F dans le navigateur (le journal est du texte brut). |
| Passer en DEBUG | Relancer la tâche avec `log_level = DEBUG` dans la fenêtre Exécuter avec paramètres. |

---

## ✕ Annuler

Visible tant que l'exécution est `RUNNING`. Le clic envoie un signal d'annulation :

| Type d'étape | Comportement à l'annulation |
|---|---|
| `sql_query` / `sql_copy` | Connexion base de données fermée ; la transaction est annulée. |
| `python` | Tâche asyncio annulée ; les appels `await` en cours lèvent `CancelledError`. Une étape qui ne rend pas la main ne s'arrête qu'à son prochain point de contrôle. |
| `http` | Requête réseau interrompue. |
| `ldap_sync` | Connexion LDAP fermée. |

Les étapes restantes **ne s'exécutent pas**. L'état de l'exécution passe à `CANCELED`. Le journal enregistre `run cancelled by user:<name>` comme dernière ligne.

L'annulation est **au mieux** pour les étapes Python qui bouclent sans rendre la main à la boucle d'événements — voir [Diagnostic](./troubleshoot.md#cancellation-doesnt-stop-my-step) pour le motif coopératif.

---

## ↻ Rejouer

Visible sur les exécutions terminées. Le clic ouvre une **fenêtre Rejouer** pré-remplie avec le cliché des paramètres de l'exécution d'origine — même forme que la fenêtre Exécuter avec paramètres :

| Champ | Pré-rempli avec |
|---|---|
| `log_level` | Le niveau de l'exécution d'origine. |
| Paramètres partagés | Les paramètres fusionnés de l'exécution d'origine. |
| `op_kwargs` par étape | Les kwargs par étape de l'exécution d'origine. |
| `enabled` par étape | L'état d'activation de l'exécution d'origine. |

L'opérateur peut tout ajuster (cas typiques : changer `target_connector` de production vers un bac à sable, ou désactiver les étapes 1 à 5 pour rejouer uniquement la fin). La validation déclenche une **nouvelle exécution** — l'originale reste intacte.

Cas d'usage :

| Motif | Ajustement Rejouer |
|---|---|
| « Relancer la même tâche avec les mêmes paramètres » | Valider sans modification. |
| « Rejouer uniquement l'étape qui a échoué » | Désactiver les étapes en amont ; laisser celle-ci active. |
| « Tester sur la pré-production » | Modifier `target_connector`. |
| « Investiguer avec le SQL complet » | Passer le niveau de journal en DEBUG. |

---

## Filtrer les exécutions (la vue catalogue Exécutions)

Une page « liste de toutes les exécutions » est accessible depuis le catalogue de tâches en cliquant sur le nom d'une tâche — elle ouvre la **liste des exécutions** de la tâche, triée du plus récent au plus ancien. Chaque ligne affiche :

| Colonne | Quoi |
|---|---|
| **Identifiant d'exécution** | Cliquer pour ouvrir le Détail d'exécution. |
| **État** | Badge coloré. |
| **Déclenché par** | `cron`, `user:…`, `api`. |
| **Démarré / Durée** | Horodatage local + temps total de l'exécution. |
| **Résumé des étapes** | « 7 / 7 ✓ » ou « 4 / 7 — échec à F9202 ». |

Elle sert à :

- Comparer les durées d'une exécution à l'autre (un ralentissement progressif dans un ETL).
- Retrouver la dernière exécution réussie avant une régression.
- Auditer les déclenchements manuels de la semaine écoulée.

Le catalogue Exécutions est **par tâche** — il n'existe pas aujourd'hui de vue globale « toutes les exécutions de toutes les tâches » ; le regroupement par tâche correspond à l'usage réel des opérateurs.

---

## Pour la suite

- [Diagnostic](./troubleshoot.md) — quand une exécution échoue ou se fige, comment en trouver la cause.
- [Notifications](../notifications.md) — recevoir une alerte en cas d'échec plutôt que d'actualiser la page.
- [Administration](../administration.md) — rétention, verrou du planificateur, comportement au redémarrage.
