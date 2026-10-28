---
title: Notifications
description: "Les notifications de Liberty Next : des règles qui réagissent à une écriture dans un écran, à un événement de tâche Nomaflow (échec, succès, annulation, planification manquée, exécution longue, retard) ou à une action d'écran, et qui délivrent dans la cloche de l'application, par e-mail ou par une requête ou un endpoint de connecteur. Compte SMTP, destinataires, variables, alertes de tâche."
keywords: [Liberty Next, Nomaflow, notifications, alertes, cloche, boîte de réception, e-mail, SMTP, notifications.toml, échec de tâche, planification manquée, exécution longue, send_notification, webhook]
---

# Notifications

Une notification prévient quelqu'un qu'un événement s'est produit : une période clôturée, une tâche de nuit en échec, une planification manquée. Les **règles** décident quand ; les **canaux** décident comment — la cloche de l'application, un e-mail, ou un appel à un connecteur.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ntf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ntf-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ntf-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ntf-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="10" width="780" height="520" rx="14" fill="url(#ntf-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="230" y="20" width="210" height="500" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="242" y="32" width="78" height="22" rx="5" fill="url(#ntf-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="281.0" y="46.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add rule</text>
  <rect x="240" y="70" width="190" height="52" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="250" y="88" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">period_closed</text>
  <text x="250" y="102" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">screen · insert, update</text>
  <text x="250" y="115" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">portal email</text>
  <rect x="240" y="132" width="190" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="150" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">job_failed</text>
  <text x="250" y="164" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">job</text>
  <text x="250" y="177" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">email</text>
  <rect x="240" y="194" width="190" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="212" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">ask_review</text>
  <text x="250" y="226" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">fired by a screen action</text>
  <text x="250" y="239" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">portal</text>
  <rect x="450" y="20" width="540" height="500" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="464" y="42" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">[notifications.period_closed]</text>
  <text x="464" y="66" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Rule id</text>
  <rect x="464" y="72" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="86.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">period_closed</text>
  <text x="630" y="66" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Label</text>
  <rect x="630" y="72" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="640" y="86.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Période clôturée</text>
  <rect x="830" y="78" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M832.5,83.5 L834.8,85.8 L838.8,81" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="847" y="87" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Enabled</text>
  <text x="464" y="118" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TRIGGER</text>
  <rect x="464" y="124" width="295" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="465" y="125" width="100" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="515.0" y="139.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">A screen event</text>
  <line x1="566" y1="129" x2="566" y2="143" stroke="#334155" strokeWidth="1"/>
  <text x="608.5" y="139.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">A job event</text>
  <line x1="651" y1="129" x2="651" y2="143" stroke="#334155" strokeWidth="1"/>
  <text x="705.0" y="139.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">A screen action</text>
  <text x="464" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">App</text>
  <rect x="464" y="172" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="186.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">sales ▾</text>
  <text x="600" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Screen</text>
  <rect x="600" y="172" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="186.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">period_status ▾</text>
  <text x="770" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Events</text>
  <rect x="770" y="177" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="787" y="186" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">insert</text>
  <rect x="830" y="177" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M832.5,182.5 L834.8,184.8 L838.8,180" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="847" y="186" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">update</text>
  <rect x="895" y="177" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="912" y="186" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">delete</text>
  <text x="464" y="214" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Only when the written row has (AND)</text>
  <rect x="464" y="220" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="234.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">STATUS</text>
  <rect x="594" y="220" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="604" y="234.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">closed</text>
  <text x="464" y="262" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DELIVERY</text>
  <rect x="464" y="273" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M466.5,278.5 L468.8,280.8 L472.8,276" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="481" y="282" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">portal</text>
  <rect x="530" y="273" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M532.5,278.5 L534.8,280.8 L538.8,276" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="547" y="282" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">email</text>
  <rect x="590" y="273" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="607" y="282" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">action</text>
  <text x="464" y="304" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Recipients</text>
  <rect x="464" y="310" width="103" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="515.5" y="322.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">role: controllers</text>
  <rect x="580" y="310" width="73" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="616.5" y="322.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">user: alice</text>
  <rect x="664" y="310" width="149" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="738.5" y="322.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">email: finance@example.com</text>
  <text x="464" y="350" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MESSAGE</text>
  <text x="464" y="368" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Subject</text>
  <rect x="464" y="374" width="500" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="388.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Période &#123;PERIOD&#125; clôturée par &#123;USER&#125;</text>
  <text x="464" y="412" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Body</text>
  <rect x="464" y="418" width="500" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="432.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Société &#123;COMPANY&#125; : la période passe en lecture seule.</text>
  <text x="464" y="456" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Link (a route the notification opens)</text>
  <rect x="464" y="462" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="474" y="476.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">/screen/sales/period_status</text>
  <rect x="750" y="488" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="791.5" y="502.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Send a test</text>
  <rect x="850" y="488" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="877.5" y="502.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="916" y="488" width="44" height="22" rx="5" fill="url(#ntf-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="938.0" y="502.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="10" y="60" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Règles</text>
  <text x="20" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">déclencheur · canaux</text>
  <line x1="210" y1="77.0" x2="240" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ntf-arrow)"/>
  <rect x="10" y="160" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois déclencheurs</text>
  <text x="20" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écriture, tâche, action</text>
  <line x1="210" y1="177.0" x2="464" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ntf-arrow)"/>
  <rect x="10" y="240" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Condition sur la ligne</text>
  <text x="20" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">champ = valeur, cumulées</text>
  <line x1="210" y1="257.0" x2="464" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ntf-arrow)"/>
  <rect x="1010" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1020" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Canaux</text>
  <text x="1020" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cloche, e-mail, requête</text>
  <line x1="1010" y1="277.0" x2="640" y2="278" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ntf-arrow)"/>
  <rect x="1010" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1020" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Destinataires</text>
  <text x="1020" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">user:, role:, email:</text>
  <line x1="1010" y1="347.0" x2="850" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ntf-arrow)"/>
  <rect x="1010" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1020" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Variables</text>
  <text x="1020" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#123;COLONNE&#125;, &#123;USER&#125;, &#123;JOB&#125;…</text>
  <line x1="1010" y1="417.0" x2="964" y2="386" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ntf-arrow)"/>
  <rect x="520" y="556" width="230" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="530" y="571" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Envoyer un test</text>
  <text x="530" y="584" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">valeurs d'exemple, sans enregistrer</text>
  <line x1="750" y1="573.0" x2="780" y2="512" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ntf-arrow)"/>
</svg>

---

## Ce que voient les utilisateurs \{#inbox\}

- **La cloche** de l'en-tête affiche le nombre de notifications non lues, mis à jour en temps réel. Son menu liste les six dernières ; **Tout marquer comme lu** et **Tout voir** sont en bas. Un clic sur une notification la marque comme lue et ouvre son lien.
- **La page Notifications** (depuis **Tout voir**) les liste avec les onglets **Toutes** / **Non lues** et **Tout marquer comme lu**.

Chaque utilisateur ne voit que ses propres notifications.

---

## Le compte e-mail \{#smtp\}

Les e-mails passent par le serveur SMTP défini dans **Liberty Next → Administrer → App → Notifications (email)** :

| Champ | Défaut | Remarques |
|---|---|---|
| Notifications enabled | activé | Désactivé : aucune règle ne se déclenche. |
| SMTP host, Port | —, `587` | Sans hôte, seule la cloche fonctionne. |
| Encryption | STARTTLS | *STARTTLS (usually port 587)*, *SSL / implicit TLS (usually port 465)* ou *None*. Changer d'option règle le port habituel. |
| Timeout (s) | `20` | |
| User, Password | — | Le mot de passe est chiffré avec la clé maître de l'installation. |
| From address | l'utilisateur | Reprend le nom d'utilisateur s'il est vide. |

| Keep read notifications (days, 0 = forever) | `90` | Les notifications lues plus anciennes sont purgées, au démarrage puis toutes les six heures. Les notifications non lues sont conservées. |

Les e-mails sont en texte brut : l'objet, le corps, puis le lien de la règle.

---

## Règles \{#rules\}

Les règles se modifient dans **Liberty Next → Construire → Notifications** et s'enregistrent dans `notifications.toml` — une modification s'applique sans redémarrage. **Send a test** envoie la règle en cours de modification, même non enregistrée, avec des valeurs d'exemple à ses destinataires.

### Déclencheurs

| Déclencheur | Se déclenche quand | Réglages |
|---|---|---|
| **A screen event** | Une ligne est créée, modifiée ou supprimée par un écran. | App, Screen, Events (`insert` / `update` / `delete`) et, au besoin, **Only when the written row has** : des conditions champ = valeur, toutes requises (`STATUS = closed`). |
| **A job event** | Une exécution Nomaflow se termine. | Jobs — plusieurs choisies dans une même liste, vide = toutes les tâches — et Events : `failure`, `succeeded`, `canceled`, `missed` (une planification qui ne s'est pas exécutée — voir [Planifications](./jobs/schedules.md#missed)), `long_run` avec un seuil en minutes, `late` (aucune exécution réussie à l'échéance **Doit avoir réussi avant** de la tâche). |
| **A screen action** | Une action d'écran de type `send_notification` s'exécute (un bouton ou une étape d'une chaîne d'actions). | Rien de plus : l'action d'écran nomme la règle et transmet les valeurs de la ligne. |

`long_run` se vérifie à la fin de l'exécution : il signale une exécution qui a duré au moins le seuil, pas une exécution encore en cours.

### Canaux

| Canal | Délivre |
|---|---|
| `portal` | Une notification dans la cloche de chaque utilisateur destinataire. |
| `email` | Un e-mail à chaque destinataire qui a une adresse. |
| `action` | Lance une requête (connecteur SQL) ou appelle un endpoint (connecteur API) avec les valeurs du message — pour publier dans Teams ou sur un webhook, ou écrire dans une table de journal. Ses paramètres sont les valeurs de l'événement, plus `SUBJECT`, `BODY` et `RULE`. |

Un canal en échec est journalisé et n'arrête pas les autres. L'envoi se fait en arrière-plan : un enregistrement ou une tâche n'attend jamais le serveur de messagerie.

### Destinataires

| Forme | Signifie |
|---|---|
| `user:alice` | Cet utilisateur. |
| `role:controllers` | Chaque utilisateur actif titulaire du rôle. |
| `email:finance@example.com` | Une adresse — e-mail uniquement. |

Dans l'éditeur, choisir les utilisateurs et les rôles dans la liste, ou saisir une adresse. Une entrée sans préfixe qui contient `@` est traitée comme une adresse ; toute autre est ignorée et consignée dans le journal.

### Variables

L'objet, le corps et le lien acceptent des variables `{NOM}`, en majuscules ou en minuscules :

| Déclencheur | Variables |
|---|---|
| Événement d'écran | Chaque colonne de la ligne écrite, plus `USER`, `APP`, `SCREEN`, `EVENT`. |
| Événement de tâche | `JOB`, `RUN_ID`, `STATE`, `ERROR`, `DURATION_MINUTES`, `ROWS`, et `EXPECTED_AT` pour une planification manquée ou une échéance. |
| Action d'écran | Les valeurs transmises par l'action, plus `USER`. |

Une variable inconnue est laissée telle quelle. Dans l'éditeur, le bouton **{ }** à côté de l'objet, du corps et du lien liste les variables du déclencheur et insère celle choisie à l'emplacement du curseur ; le même bouton figure à côté de l'objet et du corps d'une [étape `notify`](./steps.md#notify).

### En TOML

```toml title="notifications.toml"
[notifications.period_closed]
label = "Période clôturée"
trigger = { kind = "screen", app = "sales", screen = "period_status", events = ["update"], when = [{ field = "STATUS", value = "closed" }] }
channels = ["portal", "email"]
recipients = ["role:controllers", "email:finance@example.com"]
subject = "Période {PERIOD} clôturée par {USER}"
body = "Société {COMPANY} : la période passe en lecture seule."
link = "/screen/sales/period_status"

[notifications.job_failed]
trigger = { kind = "job", events = ["failure", "missed"] }
channels = ["email"]
recipients = ["role:ops"]
subject = "{JOB} : {STATE}"
body = "{ERROR}"
```

---

## Depuis une étape de tâche \{#notify-step\}

Une tâche peut aussi envoyer elle-même un message, sous forme d'étape, avec en pièces jointes les fichiers qu'elle a produits — une synthèse planifiée. Voir [Étapes → Notification](./steps.md#notify).

---

## Les alertes propres à une tâche \{#job-alerts\}

Une tâche peut aussi prévenir en cas d'échec sans règle, depuis le bloc **Alertes** de l'éditeur de tâche :

```toml title="jobs.toml"
[jobs.alerts]
on_failure = true
recipients = ["role:ops", "user:alice"]
```

En cas d'échec, chaque destinataire reçoit une notification *Job &lt;id&gt; failed* avec l'erreur, dans la cloche et par e-mail. Avec **Avertir si une exécution dépasse (minutes)** (`on_long_run_minutes`), une exécution qui dure au moins ce temps envoie en plus *Job &lt;id&gt; ran N min (threshold T)*, qu'elle ait échoué ou non. Écrire les destinataires sous la forme `user:`, `role:` ou `email:` — une entrée sans préfixe est prise pour une adresse e-mail.

---

## Conseils \{#tips\}

- Commencer par une règle : `failure` et `missed` sur toutes les tâches, vers le rôle d'exploitation.
- Préférer les rôles aux utilisateurs nommés : la règle suit les changements d'équipe.
- Utiliser **Send a test** après avoir modifié le compte SMTP.
- Réserver la cloche à ce qui demande une action ; envoyer le reste par e-mail à une boîte partagée.
