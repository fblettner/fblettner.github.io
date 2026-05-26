---
title: Catalogue
description: "La page Tâches — chaque tâche listée avec l'état de sa dernière exécution, son prochain déclenchement et les actions par tâche : bascule d'activation, ▶ Lancer maintenant, ✕ Annuler, ✎ Modifier, fenêtre Exécuter avec paramètres."
keywords: [Nomaflow, page tâches, catalogue, lancer maintenant, annuler, exécuter avec paramètres, activer, désactiver, Liberty Framework]
---

# Catalogue — la page Tâches

La **page Tâches** représente l'accueil de Nomaflow. Elle s'ouvre par défaut au clic sur *Nomaflow* dans la barre de navigation supérieure et liste toutes les tâches déclarées — planifiées ou manuelles uniquement, activées ou en pause.

Cette page décrit le rôle de chaque élément, l'effet des actions, et comment la **fenêtre Exécuter avec paramètres** permet aux opérateurs de surcharger un déclenchement sans modifier la définition de la tâche.

---

## Disposition de la page

<svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="ct-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="360" rx="14" fill="url(#ct-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow · Tâches</text>
  <text x="40" y="66" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Toutes les tâches déclarées avec l'état de leur dernière exécution et leur prochain déclenchement.</text>
  <line x1="20" y1="82" x2="980" y2="82" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="100" width="100" height="28" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="90" y="118" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Nouvelle tâche</text>
  <rect x="150" y="100" width="130" height="28" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="215" y="118" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">📅 Vue calendrier</text>
  <rect x="290" y="100" width="100" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="340" y="118" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Recharger</text>

  <rect x="40" y="148" width="920" height="100" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937" strokeWidth="1"/>
  <text x="58" y="172" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">nomajde-daily-sync</text>
  <rect x="240" y="160" width="68" height="18" rx="4" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.40)"/>
  <text x="274" y="173" fill="#22c55e" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <rect x="316" y="160" width="48" height="18" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="340" y="173" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">jde-sync</text>
  <rect x="372" y="160" width="38" height="18" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.40)"/>
  <text x="391" y="173" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">etl</text>
  <text x="58" y="198" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Synchronisation quotidienne des tables de contrôle JDE et du dictionnaire de données vers Nomajde.</text>
  <text x="58" y="218" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">⏱ 30 2 * * *  ·  prochain : demain 02 h 30  ·  dernière : il y a 14 h  ·  7 étapes</text>
  <rect x="780" y="194" width="60" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="810" y="209" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Lancer</text>
  <rect x="846" y="194" width="48" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="870" y="209" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Modifier</text>
  <rect x="900" y="194" width="42" height="22" rx="4" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.40)"/>
  <text x="921" y="209" fill="#22c55e" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">activée</text>

  <rect x="40" y="264" width="920" height="100" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937" strokeWidth="1"/>
  <text x="58" y="288" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">nomasx1-security-1</text>
  <rect x="240" y="276" width="58" height="18" rx="4" fill="rgba(74,158,255,0.15)" stroke="rgba(74,158,255,0.40)"/>
  <text x="269" y="289" fill="#4a9eff" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">RUNNING</text>
  <circle cx="305" cy="285" r="4" fill="#4a9eff">
    <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite"/>
  </circle>
  <text x="58" y="314" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Rafraîchissement des tables SECURITY de nomasx1 pour apps_id 10.</text>
  <text x="58" y="334" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">⏱ manuel uniquement  ·  étape 6 / 17  ·  diffusion du journal en direct</text>
  <rect x="780" y="310" width="60" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeDasharray="2,2"/>
  <text x="810" y="325" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ (occupé)</text>
  <rect x="846" y="310" width="62" height="22" rx="4" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.40)"/>
  <text x="877" y="325" fill="#ef4444" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
</svg>

La page présente une fiche par tâche. Le catalogue est trié par ordre alphabétique d'identifiant ; il n'existe pas d'ordre manuel — l'identifiant et les étiquettes assurent ce rôle.

---

## La barre d'outils

| Action | Effet |
|---|---|
| **＋ Nouvelle tâche** | Ouvre l'[éditeur de tâche](./create.md) sur une tâche vierge (`/nomaflow/jobs/new`). |
| **📅 Vue calendrier** | Ouvre la page [Planifications](./schedules.md) — un calendrier des prochains déclenchements de toutes les tâches. |
| **↻ Recharger** | Récupère à nouveau le catalogue. À utiliser après modification du TOML sur disque si l'installation l'autorise. |

---

## Le contenu d'une fiche de tâche

Chaque fiche regroupe les neuf mêmes éléments :

| Élément | Emplacement sur la fiche | Signification |
|---|---|---|
| **Identifiant** | En haut à gauche, en chasse fixe. | L'identifiant de la tâche. Un clic sur le titre de la ligne ouvre le détail. |
| **Badge de dernière exécution** | Après l'identifiant. | Pastille colorée (`SUCCEEDED`, `FAILED`, `RUNNING`, `CANCELED`). Un clic ouvre le [détail de l'exécution](../runs/history.md) correspondante. |
| **Étiquettes** | Après le badge. | Libellés libres issus de la définition — `etl`, `nightly`, `legal`. |
| **Bascule d'activation** | En haut à droite. | Verte quand active. Le clic bascule l'indicateur `enabled` de la tâche et recharge le planificateur. Un indicateur d'activité tourne pendant l'enregistrement — il s'agit d'un véritable enregistrement, pas d'un affichage optimiste. |
| **Description** | Sous la ligne de titre. | Texte libre issu de la définition. |
| **Pastille de planification** | Ligne de méta, icône ⏱. | Expression cron en chasse fixe, ou *manuel uniquement* si aucune planification. |
| **Indication de prochaine exécution** | Ligne de méta, icône 📅. | Délai relatif jusqu'au prochain déclenchement (`dans 14 m`). Le survol affiche l'horodatage absolu. |
| **Indication de dernière exécution** | Ligne de méta. | Délai relatif depuis la dernière fin d'exécution. |
| **Nombre d'étapes** | Ligne de méta. | Nombre d'étapes que comporte la tâche. |

La rangée d'actions, en dessous, regroupe **▶ Lancer maintenant**, **✕ Annuler** (uniquement pendant une exécution en cours) et **✎ Modifier**.

---

## Activer / désactiver

La **bascule d'activation** en haut à droite de chaque fiche contrôle la prise en compte du cron par le planificateur. Comportements :

| État | Le cron déclenche ? | Le ▶ Lancer manuel fonctionne ? |
|---|---|---|
| **Activée** | Oui — chaque correspondance cron crée une exécution. | Oui. |
| **Désactivée** | Non — le planificateur ignore la tâche. | Oui — les opérateurs gardent la main pour déclencher manuellement. |

La bascule n'est **pas** un changement optimiste : son clic réécrit la configuration de tâche enregistrée avec la nouvelle valeur et déclenche un rechargement du planificateur. Le bouton affiche un indicateur d'activité le temps de l'aller-retour — généralement moins d'une seconde, mais l'indicateur reflète fidèlement ce qui se passe.

Modèle courant : **figer une tâche pendant une fenêtre de maintenance** en la désactivant, puis la réactiver une fois le système rétabli. L'historique de la tâche reste conservé ; seuls les déclenchements automatiques s'arrêtent.

---

## ▶ Lancer maintenant

Le clic sur **Lancer maintenant** déclenche une exécution de la tâche, en plus de toute planification. La suite dépend du contenu de la tâche :

| Situation | Conséquence |
|---|---|
| Tâche à une seule étape, sans paramètres ni op_kwargs. | La tâche se déclenche **immédiatement**. La fiche passe à `RUNNING`. |
| La tâche comporte des paramètres partagés **ou** une étape Python avec op_kwargs **ou** plus d'une étape. | La fenêtre **Exécuter avec paramètres** s'ouvre. |
| Une exécution est déjà en cours pour cette tâche. | Le bouton est désactivé — une seule exécution à la fois par tâche. |

La source de déclenchement de l'exécution produite est `user:<votre-compte>` — visible sur la page de détail et utilisée pour la piste d'audit.

---

## Annuler une exécution

Quand l'état de la dernière exécution est `RUNNING`, un bouton **✕ Annuler** apparaît dans la rangée d'actions. Son clic envoie un signal d'annulation à l'exécuteur :

- L'étape en cours reçoit une demande d'annulation — la suite dépend du type d'étape :
  - Étapes SQL : la connexion sous-jacente est fermée ; la transaction de base de données est annulée.
  - Étapes Python : la tâche asyncio est annulée ; les appels `await` en cours lèvent `CancelledError`.
  - Étapes HTTP / LDAP : l'appel réseau est interrompu.
- Les étapes restantes **ne s'exécutent pas**.
- L'état de l'exécution passe à `CANCELED`.

L'annulation se fait au mieux — une étape Python bloquée sur un appel non asynchrone (un `sleep` de thread, un pilote BDD bloquant) ne s'arrête qu'à son prochain point de contrôle. Concevez les longues étapes Python pour **vérifier l'annulation** périodiquement ; le guide Python personnalisé décrit le modèle.

---

## Mises à jour en direct

Le catalogue **interroge le serveur toutes les 2 secondes** dès qu'une exécution est en cours, ce qui signifie :

- Une tâche en `RUNNING` passe à son état final sans rechargement manuel.
- Une nouvelle exécution déclenchée par un cron apparaît sur la fiche avec son badge `RUNNING` en ~2 secondes.
- Quand rien n'est en cours, l'interrogation s'arrête pour garder la page silencieuse.

Si la page semble obsolète, cliquez sur **↻ Recharger** dans la barre d'outils — un rafraîchissement immédiat est forcé.

---

## Exécuter avec paramètres \{#run-with-parameters\}

Quand vous cliquez sur **▶ Lancer maintenant** pour une tâche qui contient des `params`, des `op_kwargs` sur une étape Python ou plus d'une étape, la **fenêtre Exécuter avec paramètres** s'ouvre.

<svg viewBox="0 0 1000 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rw-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="400" rx="14" fill="url(#rw-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Exécuter avec paramètres · nomasx1-security-1</text>
  <text x="40" y="66" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Valeurs appliquées à ce déclenchement uniquement — la configuration enregistrée reste inchangée.</text>
  <line x1="20" y1="82" x2="980" y2="82" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="100" width="920" height="58" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="120" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NIVEAU DE JOURNAL</text>
  <text x="58" y="142" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">log_level</text>
  <rect x="260" y="128" width="220" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="270" y="143" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">INFO — décomptes de lignes + jalons d'avancement ▾</text>

  <rect x="40" y="172" width="920" height="92" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="192" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMÈTRES PARTAGÉS (APPLIQUÉS À CHAQUE ÉTAPE)</text>
  <text x="58" y="214" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">apps_id</text>
  <rect x="260" y="200" width="100" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="270" y="215" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">10</text>
  <text x="58" y="240" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">target_connector</text>
  <rect x="260" y="226" width="220" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="270" y="241" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">nomasx1 ▾</text>

  <rect x="40" y="278" width="920" height="68" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="298" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉTAPE · SECURITY_USERS · python · nomasx1.security:j_security_users</text>
  <text x="58" y="320" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">activée (exécuter cette étape)</text>
  <rect x="260" y="310" width="20" height="14" rx="3" fill="rgba(34,197,94,0.40)" stroke="rgba(34,197,94,0.60)"/>
  <text x="270" y="321" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>

  <line x1="20" y1="362" x2="980" y2="362" stroke="#1f2937" strokeWidth="1"/>
  <rect x="780" y="378" width="80" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="820" y="396" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="870" y="378" width="80" height="28" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="910" y="396" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Lancer</text>
</svg>

### Contenu de la fenêtre

| Section | Contenu |
|---|---|
| **Niveau de journal** | Liste déroulante : `INFO` ou `DEBUG`. Pré-rempli avec la valeur enregistrée. |
| **Paramètres partagés** | Une ligne par clé du bloc `params` de la tâche. Saisies typées (nombre / booléen / texte / sélecteur de connecteur). Masqué si la tâche n'a aucun paramètre. |
| **Section par étape** | Une par étape de la tâche. Chacune comporte le nom de l'étape, une case **activée** et (pour les étapes Python) une ligne par op_kwarg. |

### Calcul du différentiel

La fenêtre n'envoie que le **différentiel** — les valeurs réellement modifiées. Les champs intacts reprennent la valeur enregistrée. Cliquer sur **▶ Lancer** sans rien changer déclenche donc la tâche exactement comme un ▶ Lancer maintenant rapide.

### Sélecteurs de connecteurs

Toute clé `connector` ou se terminant par `_connector` (par ex. `source_connector`, `target_connector`) s'affiche comme un **sélecteur de recherche** alimenté par les connecteurs du framework. Cela évite les fautes de frappe — et permet de découvrir des noms de connecteurs insoupçonnés.

### Bascule d'activation par étape

Chaque étape dispose d'une case à cocher. La décocher indique à l'exécuteur de **sauter cette étape** pour ce déclenchement uniquement :

- L'étape figure dans l'historique avec l'état `CANCELED` et la raison `skipped: disabled`.
- Les étapes restantes s'exécutent normalement.

C'est la porte de sortie de l'opérateur pour les tâches enchaînées — relancer une tâche après correction de la donnée à l'étape 6, sans rejouer les étapes 1 à 5.

### Cas d'usage

| Modèle | Apport de la fenêtre |
|---|---|
| **Tester sur un bac à sable** | Forcer `target_connector` à `nomasx1-sandbox` pour un déclenchement. |
| **Réinjecter un tenant précis** | Forcer `apps_id` depuis la valeur de production vers le tenant cible. |
| **Rejouer uniquement la phase en échec** | Désactiver les étapes 1 à 5 (déjà jouées), garder l'étape 6 active. |
| **Diagnostiquer une étape instable** | Basculer `log_level` sur `DEBUG` pour un déclenchement et voir le SQL complet. |

---

## Recherche et filtrage

Le catalogue affiche l'**identifiant**, la **description** et les **étiquettes** de la tâche sur la fiche ; un Ctrl/Cmd+F du navigateur retrouve n'importe quoi rapidement. Aucune barre de recherche n'est intégrée à l'application aujourd'hui — la plupart des installations comptent moins de 50 tâches et la recherche navigateur suffit.

Pour les installations avec des centaines de tâches, plusieurs pistes :

- Adopter une convention de **préfixe** d'identifiant (`nomajde-…`, `nomasx1-…`, `reporting-…`).
- Étiqueter par **fréquence** (`hourly`, `daily`, `monthly`) et par **propriétaire** (`team-data`, `team-security`).

---

## Pour aller plus loin

- [Créer une tâche](./create.md) — l'éditeur de tâche complet.
- [Planifications](./schedules.md) — la syntaxe cron, la vue calendrier, l'aperçu agenda.
- [Exécutions → Historique](../runs/history.md) — destination du clic sur un badge de dernière exécution.
- [Notifications](../notifications.md) — Slack / e-mail / webhook en cas de succès ou d'échec.
