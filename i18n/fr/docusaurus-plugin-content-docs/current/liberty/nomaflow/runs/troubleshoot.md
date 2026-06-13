---
title: Diagnostic
description: "Une exécution a échoué, une étape se fige, le planificateur ne déclenche pas, l'annulation ne fonctionne pas — listes de vérification et solutions concrètes pour chaque incident Nomaflow courant."
keywords: [Nomaflow, diagnostic, exécution en échec, blocage, planification, annulation, niveau de journal, debug, Liberty Framework]
---

# Diagnostic

Cette page rassemble la liste de vérification à suivre quand une exécution Nomaflow se comporte mal. Chaque section suit le schéma symptôme → diagnostic → correctif, dans l'ordre où un opérateur les rencontre naturellement.

---

## Une exécution affiche FAILED

Ouvrez la page Détail d'exécution (clic sur le badge rouge de la carte du catalogue). Trois zones livrent beaucoup d'informations :

| Où regarder | Ce qui s'y trouve |
|---|---|
| **L'étape rouge** | L'étape qui a levé l'exception. |
| **La ligne d'étape dépliée** | Le type d'exception + le message + la trace. |
| **Le journal juste avant la frontière d'étape** | Souvent la véritable cause (une connexion expirée, une ligne qui viole une contrainte, un service amont qui répond 500). |

Le type d'exception donne en général l'indice rapide :

| Exception | Sens habituel | Où regarder |
|---|---|---|
| `OperationalError` / `InterfaceError` | La connexion à la base est rompue — hôte erroné, expiration, pool épuisé. | La configuration du pool du connecteur. |
| `IntegrityError` / `UniqueViolation` | Une contrainte a été violée côté cible. | Les données écrites par l'étape — clé primaire en doublon, violation de NOT NULL. |
| `TimeoutError` (asyncio) | L'étape a dépassé son `timeout_seconds`. | Le réglage de timeout de l'étape, ou la réactivité du service amont. |
| `HTTPStatusError` 4xx | L'appel HTTP a été rejeté. | Authentification, URL, forme de la charge utile. |
| `HTTPStatusError` 5xx | Le service amont a rencontré un problème. | Une politique de nouvelle tentative peut aider ; sinon, attendre et rejouer. |
| `ImportError` / `ModuleNotFoundError` | Le *callable* d'une étape Python n'est pas importable. | Plugin installé ? Chemin du module correct ? |
| `KeyError` / `AttributeError` | Une étape Python lit un champ absent. | Le cliché des paramètres fusionnés dans l'en-tête. |

---

## Une étape réussie produit le mauvais résultat

Symptôme : l'étape est verte mais les données produites sont erronées. L'exécution semble correcte ; le résultat ne correspond pas.

Étapes de diagnostic :

1. **Ouvrir le cliché des paramètres** dans l'en-tête du Détail d'exécution. Les paramètres fusionnés correspondent-ils à ce qui était attendu ? (Piège fréquent : un `target_connector` au niveau tâche oublié, qui écrase la valeur locale d'une étape.)
2. **Examiner la sortie de l'étape**. `sql_copy` indique les nombres de lignes source / cible — une divergence trahit une clause `WHERE` qui filtre plus qu'attendu.
3. **Relancer avec `log_level = DEBUG`**. Le SQL complet de chaque requête est émis — lisez l'instruction réellement exécutée, pas celle que vous pensez avoir écrite.
4. **Comparer à la précédente exécution réussie**. Si le cliché d'hier paraît correct et celui d'aujourd'hui non, ce sont les données qui ont changé — pas le code.

Le correctif se trouve presque toujours dans **la configuration de l'étape**, pas dans l'exécuteur. L'exécuteur est fidèle ; la configuration dérive.

---

## Une exécution reste figée en RUNNING

Symptôme : le badge demeure bleu, la chronologie n'avance pas, le journal cesse d'émettre.

Diagnostic :

| Ce que vous voyez | Cause probable |
|---|---|
| Dernière ligne « fetching from source » ; aucune progression pendant des minutes. | Une requête SQL est bloquée — exécution longue, table verrouillée, latence réseau. |
| Dernière ligne « HTTP request started » ; plus rien ensuite. | Le service amont est lent / figé. Le `timeout_seconds` de l'étape finira par se déclencher. |
| Aucune ligne de journal, la pastille d'étape ne bouge plus. | Une étape Python qui boucle sans rendre la main à la boucle d'événements. |

Correctifs :

- **Pour un SQL bloqué** : annulez l'exécution, examinez la base (`SHOW PROCESSLIST` / `pg_stat_activity`). Si le bloqueur est identifié, terminez-le ; rejouez ensuite la tâche.
- **Pour un service amont lent** : attendez le timeout de l'étape. L'exécution échouera ; rejouez avec la politique de nouvelle tentative renforcée.
- **Pour un Python non coopératif** : l'annulation n'aide pas (l'étape n'atteint aucun point de contrôle). Le correctif se trouve dans le code Python — faites-le rendre la main (`await asyncio.sleep(0)` périodique, ou appel à `ctx.is_cancelled()` dans la boucle). En dernier ressort, redémarrez le processus du framework.

---

## ✕ Annuler n'arrête pas mon étape \{#cancellation-doesnt-stop-my-step\}

Symptôme : vous avez cliqué sur Annuler ; l'étape continue.

Cause : l'annulation est une **demande**, pas un kill. L'étape la reçoit à son prochain point de contrôle :

| Type d'étape | Point de contrôle d'annulation |
|---|---|
| `sql_query` / `sql_copy` | Entre les lots (`sql_copy`) ou quand le pilote sous-jacent vérifie. Généralement en quelques secondes. |
| `http` | À la prochaine lecture réseau. Les connexions figées honorent la demande via le timeout. |
| `python` | À chaque `await`. Une boucle sans `await` ne rend jamais la main. |

### Correctif pour les étapes Python

Rendez l'étape **coopérative** :

```python
async def long_loop(ctx, **kwargs):
    for i, item in enumerate(items):
        # Yield to the event loop so the cancellation request gets handled.
        if i % 100 == 0:
            await asyncio.sleep(0)
            if ctx.is_cancelled():
                ctx.log.info(f"cancelled at item {i}/{len(items)}")
                raise asyncio.CancelledError()
        process(item)
```

Pour un travail réellement CPU-bound qui ne peut pas rendre la main, déléguez à un thread avec `await asyncio.to_thread(…)` — le framework exécute le thread, la boucle d'événements reste libre, l'annulation se propage par le wrapper de tâche asyncio.

---

## Le planificateur ne déclenche pas

Symptôme : le cron est défini, l'heure est passée, aucune nouvelle exécution.

Liste de vérification :

| Vérifier | Comment |
|---|---|
| **La tâche est-elle activée ?** | Le switch de la carte du catalogue doit être vert. |
| **Le cron est-il valide ?** | L'aperçu en direct de l'éditeur de tâche doit afficher trois déclenchements à venir. |
| **Le fuseau horaire est-il bien celui attendu ?** | Un cron en `UTC` se déclenche à 02 h 00 UTC, pas à 02 h 00 heure de Paris. |
| **Le framework a-t-il redémarré pile pendant le moment de déclenchement ?** | Un déclenchement planifié qui aurait dû avoir lieu pendant l'arrêt n'est **pas** rattrapé — il est perdu. Le prochain déclenchement intervient à la prochaine correspondance du cron. |
| **`[jobs] scheduler_enabled` est-il actif sur ce réplica ?** | Les installations multi-réplicas attribuent les tâches du planificateur à un seul réplica. Les autres ont `scheduler_enabled = false` et ne déclenchent aucun cron. |

Pour un test rapide, réglez le cron sur `* * * * *` (toutes les minutes) et observez le catalogue. Si des exécutions apparaissent, le câblage fonctionne ; rétablissez ensuite votre planification réelle.

---

## La tâche n'apparaît pas dans le catalogue

Symptôme : la tâche est enregistrée, mais elle ne s'affiche pas.

Cause la plus courante : le **rechargement du planificateur** n'a pas atteint cette page. La page interroge toutes les 2 secondes pendant qu'une exécution est en cours ; sinon, elle dépend d'un rafraîchissement manuel. Cliquez sur **↻ Recharger** dans la barre d'outils.

Si la tâche reste invisible :

- Inspectez les journaux du framework à la recherche d'une erreur de analyse au moment de l'enregistrement — une étape malformée ou un type d'étape inconnu empêche le catalogue entier de se charger.
- Vérifiez que votre rôle possède la permission `job:*` — l'API filtre les tâches que votre rôle n'a pas le droit de voir.

---

## « Permission denied » ou 403 sur la page Tâches

La page Tâches exige la permission `job:*` (ou `superuser`). Si la page refuse de s'ouvrir :

- Déconnectez-vous puis reconnectez-vous. Les permissions sont mises en cache dans le JWT ; une nouvelle connexion les rafraîchit.
- Vérifiez vos attributions de rôle dans *Paramètres → Rôles*.
- Le rôle `superuser` contourne le contrôle et représente le bon outil pour un administrateur qui a besoin d'un accès complet ; les permissions granulaires `job:<name>` sont destinées aux opérateurs qui ne doivent voir que certaines tâches.

---

## Une étape réessaie indéfiniment

Symptôme : une étape enchaîne les nouvelles tentatives ; l'exécution est en cours mais ne s'achève jamais.

Cause : une politique de nouvelle tentative mal configurée combinée à un échec déterministe. Avec `attempts = 5` et `backoff = exponential`, une étape qui échoue immédiatement est relancée après 60 s, 120 s, 240 s, 480 s — près de 15 minutes au total.

Correctifs :

- Annulez l'exécution.
- Abaissez `attempts` à une valeur réaliste (2 ou 3).
- Cherchez la cause racine ; les nouvelles tentatives ne réparent pas une violation de contrainte SQL.

---

## Multi-réplica : tâches qui se déclenchent deux fois

Symptôme : chaque cron planifié produit deux exécutions au même instant.

Cause : deux réplicas du framework font tourner leur planificateur contre la même base. Le verrou applicatif intégré devrait l'empêcher, mais la configuration explicite reste plus sûre.

Correctif :

- Sur chaque réplica sauf un, positionnez `[jobs] scheduler_enabled = false` dans `app.toml`.
- Redémarrez le processus du framework sur ces réplicas.
- Le réplica restant devient le **planificateur principal** — chaque déclenchement cron passe par lui.

Les autres réplicas **servent toujours l'interface** et acceptent les déclenchements manuels / API. Ils n'auto-déclenchent simplement plus.

Voir [Administration](../administration.md) pour le câblage multi-réplica complet.

---

## Le journal DEBUG est trop bruyant

Symptôme : vous êtes passé en `DEBUG` pour investiguer ; le journal devient illisible.

`DEBUG` émet le SQL complet de chaque requête ainsi que les événements internes du framework. Il est destiné à une investigation ponctuelle, pas à un régime permanent.

- Après l'exécution de diagnostic, remettez la tâche en `INFO` (ou retirez le forçage par déclenchement).
- Si DEBUG ne sert qu'à une étape précise, restreignez la portée : scindez la tâche, isolez la logique à diagnostiquer dans une étape exécutée séparément.

---

## L'authentification du connecteur échoue en boucle

Symptôme : l'étape échoue avec `authentication failed` ou `permission denied`.

Liste de vérification :

| Vérifier | Comment |
|---|---|
| Le mot de passe chiffré du connecteur est-il toujours valide ? | *Paramètres → Connecteurs → \<nom>* → ressaisir le mot de passe, enregistrer. |
| Le système amont a-t-il fait tourner ses identifiants ? | Voir avec le responsable du service amont. Mettre à jour le mot de passe dans le connecteur. |
| La clé de chiffrement du framework est-elle toujours la même ? | Si `LIBERTY_ENCRYPTION_KEY` a été régénérée, les valeurs chiffrées sous l'ancienne clé ne peuvent plus être déchiffrées. Ressaisissez le connecteur. |
| Le réseau est-il réellement joignable ? | Une petite étape `python` qui ouvre le connecteur et exécute `SELECT 1` reste le diagnostic le plus rapide. |

---

## Le journal d'une exécution est vide

Symptôme : la page Détail d'exécution affiche zéro ligne de journal.

Causes :

- **L'exécution a échoué avant que l'exécuteur n'émette sa première ligne** — généralement une erreur de validation de configuration. Le journal du framework côté hôte contient le détail.
- **La fenêtre de rétention du journal est dépassée** — les exécutions de plus de 90 jours sont purgées ; leurs lignes d'étape subsistent, leur journal non.
- **La connexion à la *room* Socket.IO s'est coupée pendant une exécution en direct** — rafraîchissez la page ; le journal est reconstitué depuis la base.

---

## « Step has no output » dans l'historique

Certaines étapes Python renvoient `None`. La page Détail d'exécution affiche `{}` ou « no output » pour ces étapes. L'étape reste SUCCEEDED.

Ce n'est pas un bug — c'est une occasion manquée. Une étape qui renvoie toujours un dictionnaire structuré (`{"rows_affected": N, "details": ...}`) rend l'historique d'exécution lisible trois semaines plus tard. Une étape qui ne renvoie rien reste une boîte noire.

Convention : chaque étape Python devrait renvoyer au minimum `{"rows_affected": …}` ou `{"status": "ok"}`.

---

## Pour la suite

- [Historique d'exécution](./history.md) — la surface depuis laquelle le diagnostic démarre.
- [Notifications](../notifications.md) — recevoir une alerte en cas d'échec pour entamer l'investigation plus tôt.
- [Administration](../administration.md) — multi-réplica, rétention, comportement au redémarrage.
- [Étapes Python personnalisées](../custom-python.md) — écrire du Python compatible avec l'annulation.
