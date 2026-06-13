---
title: Notifications
description: "Acheminer les événements des tâches Nomaflow — succès, échec, exécution longue — vers Slack, e-mail ou webhooks génériques. Configurer les canaux une fois au niveau du framework ; les tâches choisissent les destinataires."
keywords: [Nomaflow, notifications, Slack, e-mail, webhook, sur échec, exécution longue, alertes, Liberty Framework]
---

# Notifications

Une tâche qui échoue sans que personne le sache est un problème plus grave qu'une simple tâche en échec. La couche de notifications de Nomaflow achemine les événements des tâches — échecs, détections d'exécution longue, succès optionnels — vers **Slack**, **e-mail** ou **webhooks génériques**.

La configuration s'organise en couches :

1. Les **transports** (espace de travail Slack, serveur SMTP, URL de webhook) sont configurés **une seule fois au niveau du framework** — ils sont une propriété de l'installation, pas de la tâche.
2. Les **blocs d'alertes de tâche** décident *quels événements* émettre et *à qui* s'adresser.
3. Le **routage** sélectionne un transport pour chaque couple (étiquette de tâche, destinataire).

Cette page couvre le câblage de bout en bout.

---

## Transports — configuration au niveau du framework

Ouvrir *Paramètres → Notifications*. La page liste chaque canal configuré.

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="nt-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="280" rx="14" fill="url(#nt-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres · Notifications</text>
  <text x="40" y="66" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Canaux sortants pour les événements des tâches.</text>
  <line x1="20" y1="82" x2="980" y2="82" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="100" width="300" height="180" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="124" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SLACK</text>
  <text x="56" y="148" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">URL du webhook · 🔒 chiffré</text>
  <rect x="56" y="158" width="260" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="66" y="173" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">https://hooks.slack.com/services/T0…/B0…/x…</text>
  <text x="56" y="200" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Canal par défaut</text>
  <rect x="56" y="210" width="140" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="66" y="225" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">#nomaflow-alerts</text>
  <rect x="56" y="244" width="110" height="22" rx="4" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.40)"/>
  <text x="111" y="259" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Tester l'envoi</text>

  <rect x="350" y="100" width="300" height="180" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="366" y="124" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">E-MAIL</text>
  <text x="366" y="148" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Hôte SMTP · port · 🔒 mot de passe</text>
  <rect x="366" y="158" width="260" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="376" y="173" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">smtp.corp.local · 587 · …</text>
  <text x="366" y="200" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Expéditeur par défaut</text>
  <rect x="366" y="210" width="180" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="376" y="225" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">nomaflow@corp.local</text>
  <rect x="366" y="244" width="110" height="22" rx="4" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.40)"/>
  <text x="421" y="259" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Tester l'envoi</text>

  <rect x="660" y="100" width="300" height="180" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="676" y="124" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WEBHOOK</text>
  <text x="676" y="148" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">URL · en-têtes · 🔒 secret</text>
  <rect x="676" y="158" width="260" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="686" y="173" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">https://opsgenie.corp.local/webhook</text>
  <text x="676" y="200" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">En-tête d'authentification</text>
  <rect x="676" y="210" width="180" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="686" y="225" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Authorization: …</text>
  <rect x="676" y="244" width="110" height="22" rx="4" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.40)"/>
  <text x="731" y="259" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Tester l'envoi</text>
</svg>

Chaque transport porte :

| Champ | Notes |
|---|---|
| **URL / hôte** | URL du webhook Slack · SMTP hôte:port · URL du webhook générique. |
| **Identifiants** | 🔒 chiffrés au repos (l'URL Slack vaut secret ; mot de passe SMTP ; bearer / secret de signature du webhook). |
| **Destinataire par défaut** | Le canal / l'adresse / l'endpoint utilisé quand le bloc d'alertes d'une tâche ne précise pas de destinataires. |
| **Bouton de test** | Envoie un message d'une ligne « test depuis Nomaflow » — confirme que le câblage fonctionne **avant** qu'un véritable échec ne le mette à l'épreuve. |

### Slack

Mappage par défaut : Slack reçoit un message d'une ligne stylé avec la couleur d'état de la tâche (rouge pour l'échec, jaune pour l'exécution longue, vert pour le succès).

| Paramètre | Obligatoire | Notes |
|---|---|---|
| **URL du webhook** | Oui | À obtenir depuis *Slack admin → Apps → Incoming Webhooks*. Un seul webhook peut se diffuser vers plusieurs canaux via le routage interne de Slack. |
| **Canal par défaut** | Non | Surclasse le canal embarqué dans le webhook. Utiliser `#nomaflow-alerts` si vous en disposez. |
| **Nom d'utilisateur** | Non | Le nom du bot. Par défaut « Nomaflow ». |
| **Emoji d'icône** | Non | Par défaut `:gear:`. |

### E-mail

SMTP standard. Le framework envoie un petit message HTML avec un lien de retour vers la page de détail de l'exécution.

| Paramètre | Obligatoire | Notes |
|---|---|---|
| **Hôte** | Oui | Nom d'hôte du serveur SMTP. |
| **Port** | Oui | 587 pour STARTTLS, 465 pour TLS. |
| **Nom d'utilisateur / Mot de passe** | Si le serveur exige une authentification. | Mot de passe 🔒 chiffré. |
| **Expéditeur par défaut** | Oui | Adresse depuis laquelle l'e-mail est envoyé. |
| **Mode TLS** | Par défaut STARTTLS. | Choisir TLS pour les serveurs hérités qui l'exigent. |

### Webhook générique

Pour OpsGenie, PagerDuty, Mattermost, votre propre répartiteur — tout ce qui accepte un POST JSON.

| Paramètre | Obligatoire | Notes |
|---|---|---|
| **URL** | Oui | L'endpoint. |
| **En-têtes** | Non | En-têtes d'authentification, surcharge du type de contenu. Les valeurs d'en-tête peuvent être 🔒 chiffrées. |
| **Modèle de corps** | Non | Surclasse la forme par défaut du corps. Variables : `${job_id}`, `${run_id}`, `${state}`, `${error}`, `${started_at}`. |

La forme du corps par défaut :

```json
{
  "job_id": "reporting-nightly-sync",
  "run_id": "run_a8c4d",
  "state": "FAILED",
  "triggered_by": "cron",
  "started_at": "2026-05-26T02:00:00Z",
  "finished_at": "2026-05-26T02:14:22Z",
  "error": "OperationalError: …",
  "url": "https://liberty.corp.local/nomaflow/runs/run_a8c4d/"
}
```

L'`url` représente le lien sur lequel les opérateurs cliquent pour accéder directement à la page de détail de l'exécution.

---

## Bloc d'alertes de tâche

À l'intérieur de la section **Alertes** de l'éditeur de tâche :

| Champ | Valeur par défaut | Notes |
|---|---|---|
| **`on_failure`** | `true` (quand le bloc existe) | Émet sur une exécution `FAILED`. Le réglage le plus courant — à laisser activé. |
| **`on_long_run_minutes`** | aucun | Émet un avertissement si l'exécution est toujours `RUNNING` après N minutes. L'exécution se poursuit — il s'agit d'une alerte préventive, pas d'un arrêt. |
| **`recipients`** | `[]` | Identifiants propres au canal. Vide = utiliser le destinataire par défaut du transport. |

### Destinataires par transport

Le champ `recipients` est **conscient du type** — une même chaîne peut correspondre à plusieurs transports.

| Transport | Format du destinataire | Exemple |
|---|---|---|
| Slack | `#channel` ou `@user` | `["#data-oncall", "@alice"]` |
| E-mail | Adresse RFC 5322 | `["data-team@corp.local"]` |
| Webhook | Identifiant d'endpoint (enregistré au niveau du framework) | `["opsgenie-data"]` |

Quand une tâche est déclenchée et qu'une alerte est due, le framework parcourt la liste des destinataires. Chaque destinataire correspond à un transport (par format / par enregistrement) ; chaque transport correspondant reçoit l'alerte.

### Quand `recipients` est vide

Le destinataire par défaut du transport est utilisé (`#nomaflow-alerts` pour Slack, l'expéditeur SMTP par défaut pour le courrier, l'URL principale du webhook). C'est la bonne valeur par défaut pour la plupart des installations — *un* seul endroit au niveau de la tâche fixe la politique, les transports décident.

### Routage par étiquette et par transport

Certaines installations veulent que des équipes différentes reçoivent des tâches différentes. Le routage de notifications du framework prend en charge des règles par étiquette :

| Étiquette de tâche | Achemine vers | Configuré dans |
|---|---|---|
| `team-data` | Slack `#data-team` | *Paramètres → Notifications → Règles de routage*. |
| `team-security` | E-mail `security@corp.local` | Idem. |
| `team-platform` | Webhook PagerDuty | Idem. |

Une tâche étiquetée `team-data, etl` traverse à la fois la règle `team-data` et tout défaut sans étiquette. Le moteur de règles déduplique afin qu'un même destinataire ne reçoive pas deux fois le même message.

---

## Quels événements émettent quoi

| Événement | Déclenché par | Niveau par défaut |
|---|---|---|
| **Exécution en échec** | `on_failure = true` (par défaut). | Élevé — alerte d'astreinte. |
| **Exécution longue** | `on_long_run_minutes = N` défini, exécution toujours en cours au-delà de N. | Moyen — avertissement. |
| **Exécution réussie** | Définir `on_success = true` (désactivé par défaut — la plupart des installations n'en veulent pas). | Faible. |
| **Tâche réactivée / désactivée** | L'opérateur a basculé la carte du catalogue. | Faible — informationnel, désactivé par défaut. |
| **Exécution annulée par l'utilisateur** | L'opérateur a cliqué sur ✕ Annuler. | Faible — visible dans l'historique d'exécution ; l'alerte est en opt-in. |

`on_success` est volontairement désactivé par défaut. Une tâche qui s'exécute avec succès toutes les heures dix mille fois par an ne doit pas générer dix mille messages « OK ! ». À activer pour les **tâches à forte valeur** où le succès lui-même fait l'événement (« le rapport mensuel a été livré »).

---

## Anatomie d'une alerte d'échec

Quand une exécution échoue :

1. L'exécuteur écrit l'état `FAILED` sur la ligne d'exécution.
2. La couche de notifications lit le bloc d'alertes de la tâche.
3. Pour chaque destinataire correspondant, elle construit un message propre au transport :

| Transport | Message |
|---|---|
| **Slack** | Message d'une ligne en rouge : ❌ *reporting-nightly-sync run failed at step copy-orders · OperationalError: connection refused* avec un lien « Voir l'exécution ». |
| **E-mail** | Sujet : `[Nomaflow] FAILED reporting-nightly-sync`. Corps : même message d'une ligne plus la trace complète en bloc de code, plus un lien. |
| **Webhook** | POST JSON tel que décrit ci-dessus. |

4. L'appel HTTP / SMTP se fait en **envoi sans suivi**. Si l'amont est inaccessible, la notification échoue — mais l'échec de l'exécution est déjà enregistré. Nomaflow ne réessaie pas la livraison de notification (un chemin de notification instable ne doit pas faire échouer une tâche).

Le journal du framework consigne chaque tentative de notification avec son issue — chercher ici quand un destinataire signale « je n'ai pas reçu l'alerte ».

---

## Émettre des alertes de succès sous condition

Motif courant : alerter en cas de succès **uniquement** pour les tâches où le succès lui-même importe. Deux manières d'y parvenir :

| Motif | Comment |
|---|---|
| **Drapeau par tâche**. | Définir `on_success = true` dans le bloc d'alertes de la tâche. Émet à chaque exécution réussie. |
| **Envoi depuis une étape**. | Ajouter une étape HTTP en fin de tâche qui poste vers le webhook. Émet uniquement quand les étapes précédentes ont réussi (car les étapes s'enchaînent). Donne le contrôle complet sur le corps du message. |

Le second motif est celui qu'utilise la [recette Synchronisation BD planifiée](./workflows/scheduled-sync.md#step-4--add-the-success-notification) — la notification de succès n'est qu'une étape de plus.

---

## Heures de silence

Certaines installations ne veulent pas d'alerte à 03 h 00 pour des tâches *à faible priorité*. Deux approches :

| Motif | Comportement |
|---|---|
| **Routage par étiquette**. | Une étiquette `low-priority` route vers l'e-mail (pas d'alerte d'astreinte) ; une étiquette `high-priority` route vers PagerDuty (alerte d'astreinte). Le réglage est propre à chaque tâche. |
| **Règles côté destinataire**. | Le canal destinataire (les politiques de service propres à PagerDuty, les préférences de notification de Slack) gère les heures de silence. Nomaflow envoie toujours ; le récepteur met en sourdine. |

La seconde approche passe mieux à l'échelle — Nomaflow possède une seule politique de notification (alerter sur chaque échec), les destinataires décident quoi en faire. Ajouter un mode « heures de silence » à Nomaflow lui-même multiplierait les pièces mobiles.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| URL de webhook stockée en clair dans `jobs.toml`. | L'URL fuite dans le contrôle de version. | Toujours stocker au niveau du framework (🔒 chiffrée), référencer par nom de transport. |
| Bouton de test au vert, alerte réelle qui n'arrive jamais. | Le réseau bloque en production un trafic que le test autorisait. | Vérifier les règles de pare-feu ; le test utilise le même transport mais au moment de l'enregistrement de la configuration. |
| `on_success = true` sur chaque tâche. | Le canal est saturé de coches vertes ; les échecs se perdent dans le bruit. | Désactiver `on_success` sauf là où cela importe. |
| `on_long_run_minutes = 1` sur un ETL qui prend toujours 5. | Avertissements parasites chaque nuit. | Calibrer sur la durée habituelle de la tâche + une marge. |
| Plusieurs destinataires sur un même canal. | Même message livré deux fois. | Le moteur de déduplication devrait l'éviter ; sinon, restreindre la liste des destinataires. |

---

## Inspecter l'historique des notifications

Le journal du framework consigne chaque dispatch de notification avec son issue (`SENT`, `FAILED_TRANSPORT`, `FAILED_DELIVERY`). Rechercher `notification` dans le journal pour trouver les problèmes de livraison.

Pour un audit à long terme (six mois en arrière : qui a été alerté et pour quoi ?), certaines installations ajoutent une petite **table d'audit des notifications** alimentée par un helper Python. Le framework ne la fournit pas par défaut — la plupart des équipes trouvent le journal du framework suffisant.

---

## Pour aller plus loin

- [Administration](./administration.md) — comportement au redémarrage et notifications multi-réplique.
- [Recette — Synchronisation BD planifiée](./workflows/scheduled-sync.md) — utilise le chemin d'alerte d'échec de bout en bout.
- [Étapes Python personnalisées](./custom-python.md) — pousser des notifications depuis une étape.
