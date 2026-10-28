---
title: Créer une tâche
description: "L'éditeur de tâche de Nomaflow : la section Tâche (identifiant, planification, fuseau, étiquettes, activation), les préréglages et leurs planifications, la politique de réessai, les alertes, les paramètres partagés et la suite d'étapes — et ce qui ne se règle que dans jobs.toml."
keywords: [Nomaflow, créer une tâche, éditeur de tâche, planification, fuseau horaire, préréglages, politique de réessai, alertes, paramètres partagés, étapes, jobs.toml, Liberty Next]
---

# Créer une tâche

**+ Nouvelle tâche** dans la page des Tâches, ou **Modifier** sur une carte, ouvre l'éditeur de tâche. Un seul **Enregistrer**, en haut, écrit la tâche entière dans `jobs.toml`, recharge le planificateur et revient à la page des Tâches ; **Annuler** quitte sans enregistrer. Une tâche invalide est refusée avec un message en haut de l'éditeur.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jcr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jcr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jcr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jcr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="410" rx="14" fill="url(#jcr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Éditeur de tâche · crm-stalled-deals</text>
  <rect x="800" y="28" width="76" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="838.0" y="42.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="884" y="28" width="80" height="22" rx="5" fill="url(#jcr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="924.0" y="42.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="84" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">JOB</text>
  <text x="240" y="107" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Id</text>
  <rect x="350" y="92" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="360" y="106.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">crm-stalled-deals</text>
  <text x="600" y="107" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Timezone</text>
  <rect x="680" y="92" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="690" y="106.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Europe/Paris ▾</text>
  <text x="240" y="137" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Schedule (cron)</text>
  <rect x="350" y="122" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="360" y="136.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">0 8 ∗ ∗ 0-4</text>
  <text x="600" y="137" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Prochaines : lun. 08:00 · mar. 08:00 …</text>
  <rect x="350" y="159" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M352.5,164.5 L354.8,166.8 L358.8,162" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="367" y="168" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Enabled</text>
  <rect x="240" y="184" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="200" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Presets &amp; schedules</text>
  <text x="948" y="200" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">1 préréglage</text>
  <rect x="240" y="214" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="230" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Retry policy</text>
  <text x="948" y="230" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">attempts 2 · exponential</text>
  <rect x="240" y="244" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="260" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Alerts</text>
  <text x="948" y="260" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">On failure → user:admin</text>
  <rect x="240" y="274" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="290" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Shared params</text>
  <text x="948" y="290" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">—</text>
  <text x="240" y="320" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">STEPS</text>
  <text x="300" y="320" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Add step:</text>
  <rect x="360" y="306" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="396.0" y="320.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">sql_query</text>
  <rect x="437" y="306" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="470.0" y="320.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">sql_copy</text>
  <rect x="508" y="306" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="544.0" y="320.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">file_load</text>
  <rect x="585" y="306" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="612.5" y="320.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">python</text>
  <rect x="645" y="306" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="667.0" y="320.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">http</text>
  <rect x="694" y="306" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="730.0" y="320.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">ldap_sync</text>
  <rect x="771" y="306" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="804.0" y="320.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">call_job</text>
  <rect x="240" y="338" width="720" height="70" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="252" y="348" width="63" height="18" rx="9.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="283.5" y="360.2" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sql_query</text>
  <text x="340" y="361" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">flag-stalled</text>
  <text x="252" y="392" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">connector crm · query flag_stalled_deals</text>
  <text x="940" y="361" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">↑ ↓ ⧉ 🗑</text>
  <rect x="10" y="92" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tâche</text>
  <text x="20" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">id, planification, fuseau</text>
  <line x1="210" y1="109.0" x2="240" y2="107" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jcr-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Politiques</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">préréglages, reprises, alertes</text>
  <line x1="210" y1="217.0" x2="240" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jcr-arrow)"/>
  <rect x="10" y="330" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étapes</text>
  <text x="20" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un bouton par type</text>
  <line x1="210" y1="347.0" x2="240" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jcr-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un seul enregistrement</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écrit la tâche, recharge</text>
  <line x1="1000" y1="47.0" x2="960" y2="39" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jcr-arrow)"/>
  <rect x="1000" y="130" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Prochaines exécutions</text>
  <text x="1010" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">aperçu de 5 horaires</text>
  <line x1="1000" y1="147.0" x2="950" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jcr-arrow)"/>
  <rect x="1000" y="360" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une carte d'étape</text>
  <text x="1010" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">déplacer, cloner, supprimer</text>
  <line x1="1000" y1="377.0" x2="960" y2="373" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jcr-arrow)"/>
</svg>

---

## Les sections \{#sections\}

### Tâche

| Champ | Remarques |
|---|---|
| **Identifiant** | Lettres, chiffres, `-` et `_`. Figé une fois la tâche créée — il indexe l'historique des exécutions. Pour renommer : **Cloner** sous le nouvel identifiant, puis supprimer l'ancienne tâche. |
| **Description** | Affichée sur la ligne de la tâche et sur sa page. |
| **Planification (cron)** | Des choix tout faits (Manuelle, Horaire, Quotidienne, Hebdomadaire, Mensuelle) ou un cron à cinq zones ; **Prochaines exécutions** en affiche les cinq suivantes. Vide : tâche manuelle. Voir [Planifications](./schedules.md). |
| **Fuseau horaire** | Le nom IANA dans lequel la planification est évaluée. |
| **Étiquettes** | Libellés libres, utilisés par le filtre de la page des Tâches. |
| **Activée** | Active ou suspend la planification propre de la tâche. |

### Préréglages & plannings

Les préréglages s'enregistrent depuis **Exécuter avec des paramètres → Enregistrer comme préréglage…**. Ici, chacun peut recevoir sa propre **Planification (cron)**, son **Fuseau horaire** et une case **Planning activé** — voir [Préréglages planifiables](./schedules.md#schedulable-presets).

### Politique de réessai

**Réessayer les étapes en échec**, puis **Tentatives** (au total), **Délai** (`fixed` ou `exponential`) et **Secondes de base** entre deux tentatives. La politique s'applique à chaque étape.

### Alertes

**Envoyer des alertes** avec **En cas d'échec** prévient les **Destinataires** quand une exécution échoue, dans la cloche et par e-mail. Écrire les destinataires sous la forme `user:alice`, `role:ops` ou `email:ops@example.com` — une entrée sans préfixe est prise pour une adresse e-mail. **Avertir si une exécution dépasse (minutes)** leur envoie en outre une notification dès qu'une exécution dure au moins ce temps, quelle que soit son issue. **Doit avoir réussi avant** fixe une échéance (`07:00`, dans le fuseau horaire de la tâche) : un jour où la tâche est planifiée, si aucune exécution n'a réussi à cette heure, les destinataires reçoivent *Job &lt;id&gt; is late* — encore en cours, en échec ou jamais démarrée. Pour plusieurs tâches à la fois ou d'autres événements, passer par une règle de notification : voir [Notifications](../notifications.md#job-alerts).

### Paramètres partagés

Des paires nom / valeur fusionnées dans les arguments de chaque étape `python` (la valeur propre d'une étape l'emporte). Elles apparaissent aussi, modifiables, dans **Exécuter avec des paramètres**. La section s'intitule *Shared params* dans l'éditeur.

### Étapes

La barre **Ajouter une étape :** propose un bouton par type — `sql_query`, `sql_copy`, `file_load`, `python`, `http`, `ldap_sync`, `call_job`. Chaque étape est une carte : un clic ouvre ou replie son formulaire ; les flèches la montent ou la descendent ; l'icône de copie la clone ; la corbeille la supprime. Les champs de chaque type sont décrits dans [Étapes](../steps.md).

---

## Uniquement dans jobs.toml \{#toml-only\}

Quelques réglages n'ont pas de champ dans l'éditeur ; ils se définissent dans `jobs.toml` :

| Clé | Défaut | Signification |
|---|---|---|
| `log_level` (tâche) | `INFO` | Le niveau des exécutions planifiées : `WARNING`, `INFO` ou `DEBUG`. Une exécution manuelle choisit le sien dans **Exécuter avec des paramètres**. |
| `timeout_seconds` (tâche) | `14400` | L'exécution entière s'arrête après ce délai. |
| `enabled` (étape) | `true` | `false` saute toujours l'étape. |
| `timeout_seconds` (étape) | `3600` | L'étape s'arrête après ce délai. |
| `pool` (`sql_query`, blocs de `sql_copy`) | — | Un autre pool du connecteur — voir [Étapes](../steps.md#sql-query). |

```toml title="jobs.toml"
[[jobs]]
id = "sales-load"
description = "Fichiers de ventes mensuels vers la table de faits"
schedule = "0 2 * * *"
timezone = "Europe/Paris"
tags = ["etl"]
log_level = "INFO"

[jobs.params]
period = "2026-10"

[jobs.retry]
attempts = 3
backoff = "exponential"
base_seconds = 60

[[jobs.steps]]
type = "file_load"
name = "load-sales"
# … voir Étapes → Chargement de fichier
```

---

## Conseils \{#tips\}

- Donner à chaque étape un nom court verbe-objet (`load-sales`, `refresh-totals`) : c'est ce qu'affiche le détail de l'exécution.
- Garder une tâche par flux métier ; enchaîner les tâches par une étape `call_job` plutôt que de copier des étapes.
- Enregistrer, puis lancer une fois à la main avec **Exécuter avec des paramètres** en `DEBUG` avant d'activer la planification.
