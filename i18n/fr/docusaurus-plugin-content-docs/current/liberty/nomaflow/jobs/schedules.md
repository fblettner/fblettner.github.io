---
title: Planifications
description: "Quand s'exécutent les tâches Nomaflow : la syntaxe cron à cinq zones et la numérotation des jours de la semaine, les fuseaux horaires, l'aperçu des prochaines exécutions, la vue Planning, les préréglages planifiables, et les planifications manquées enregistrées comme exécutions MISSED."
keywords: [Nomaflow, cron, planification, fuseau horaire, vue Planning, préréglages, planifications manquées, MISSED, tolérance, Liberty Next]
---

# Planifications

Une tâche s'exécute selon sa propre **planification** — une expression cron et un fuseau horaire — et selon celles de ses **préréglages**. Une tâche sans planification ne s'exécute que par un clic sur **Exécuter**.

---

## Le cron dans Nomaflow \{#cron\}

Une planification comporte **cinq zones** :

```
┌──── minute (0-59)
│ ┌── heure (0-23)
│ │ ┌── jour du mois (1-31)
│ │ │ ┌── mois (1-12)
│ │ │ │ ┌── jour de la semaine (mon-sun)
0 2 * * *
```

| Opérateur | Signification | Exemple |
|---|---|---|
| `*` | toutes les valeurs | `* * * * *` — chaque minute |
| `,` | une liste | `0 6,12,18 * * *` — à 06:00, 12:00 et 18:00 |
| `-` | un intervalle | `0 9 * * mon-fri` — en semaine à 09:00 |
| `/` | un pas | `*/10 * * * *` — toutes les 10 minutes |

:::warning[Écrire les jours de la semaine en toutes lettres]
Le planificateur numérote les jours de **0 = lundi** à **6 = dimanche** — contrairement au cron Unix, où 0 désigne le dimanche. `0 9 * * 1` s'exécute donc le **mardi**. Écrire `mon`, `tue`… `sun` (`mon-fri`, `sat,sun`) : les noms ne laissent aucun doute, et l'aperçu sous le champ confirme les jours.
:::

Quand le jour du mois et le jour de la semaine sont tous deux renseignés, **les deux** doivent correspondre : `0 9 15 * mon` s'exécute un 15 qui tombe un lundi.

| Besoin | Cron |
|---|---|
| Toutes les 5 minutes | `*/5 * * * *` |
| Chaque heure à :15 | `15 * * * *` |
| Chaque jour à 02:00 | `0 2 * * *` |
| En semaine à 09:00 | `0 9 * * mon-fri` |
| Chaque lundi à 06:00 | `0 6 * * mon` |
| Le 1er de chaque mois à 07:00 | `0 7 1 * *` |
| Chaque trimestre (1er janvier, avril, juillet, octobre) à 03:00 | `0 3 1 1,4,7,10 *` |

---

## Dans l'éditeur de tâche \{#editor\}

Le champ **Planification (cron)** de l'éditeur propose des choix tout faits — **Manuelle**, **Horaire**, **Quotidienne**, **Hebdomadaire**, **Mensuelle** — et un cron libre. Sous le champ, **Prochaines exécutions** liste les cinq prochaines exécutions dans le fuseau de la tâche ; la liste est recalculée peu après chaque modification, et une expression invalide y est signalée.

**Fuseau horaire** est un nom IANA (`Europe/Paris`, `America/New_York`). La planification est évaluée dans ce fuseau, heure d'été comprise : `0 2 * * *` en `Europe/Paris` s'exécute à 02:00 heure de Paris toute l'année.

---

## La vue Planning \{#schedule-view\}

**Exploitation → Planning**, dans le menu de Nomaflow, montre ce qui s'exécute et quand, jour par jour.

<svg viewBox="0 0 1200 430" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfs-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfs-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfs-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="420" rx="14" fill="url(#nfs-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Planning</text>
  <text x="240" y="60" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Ce qui s'exécute et quand, jour par jour</text>
  <text x="240" y="90" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">6</text>
  <text x="262" y="90" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">dans les 24 h</text>
  <text x="400" y="90" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="422" y="90" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">planifications actives</text>
  <text x="560" y="90" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="582" y="90" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">désactivées</text>
  <text x="720" y="90" fill="#e2e8f0" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">14</text>
  <text x="742" y="90" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">à la main uniquement</text>
  <text x="240" y="120" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">À VENIR (9)</text>
  <text x="240" y="146" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Aujourd'hui</text>
  <rect x="240" y="154" width="720" height="34" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="175" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">14:00</text>
  <text x="310" y="175" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">crm-hourly-refresh</text>
  <text x="580" y="170" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">chaque heure à :00</text>
  <text x="580" y="182" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">0 ∗ ∗ ∗ ∗</text>
  <rect x="870" y="163" width="53" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="896.5" y="174.2" fill="#4ade80" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="240" y="212" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Demain</text>
  <rect x="240" y="220" width="720" height="34" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="241" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">02:00</text>
  <text x="310" y="241" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">nomajde-daily-sync</text>
  <text x="580" y="236" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">chaque jour à 02:00</text>
  <text x="580" y="248" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">0 2 ∗ ∗ ∗</text>
  <rect x="870" y="229" width="53" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="896.5" y="240.2" fill="#4ade80" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <rect x="240" y="258" width="720" height="34" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="279" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">06:00</text>
  <text x="310" y="279" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">nomasx1-collect-all</text>
  <rect x="465" y="267" width="85" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="507.5" y="278.2" fill="#c084fc" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Security and SoD</text>
  <text x="580" y="274" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">chaque jour à 06:00</text>
  <text x="580" y="286" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">0 6 ∗ ∗ ∗</text>
  <rect x="870" y="267" width="53" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="896.5" y="278.2" fill="#4ade80" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <rect x="240" y="296" width="720" height="34" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="317" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">08:00</text>
  <text x="310" y="317" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">crm-daily-pipeline</text>
  <text x="580" y="312" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">du lundi au vendredi à 08:00</text>
  <text x="580" y="324" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">0 8 ∗ ∗ mon-fri</text>
  <rect x="870" y="305" width="53" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="896.5" y="316.2" fill="#4ade80" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="240" y="356" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PLANIFIÉES MAIS DÉSACTIVÉES (2)</text>
  <text x="240" y="378" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">▸ LANCÉES À LA MAIN UNIQUEMENT (14)</text>
  <rect x="10" y="74" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">En un coup d'œil</text>
  <text x="20" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">24 h, actives, désactivées, manuelles</text>
  <line x1="210" y1="91.0" x2="240" y2="86" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfs-arrow)"/>
  <rect x="10" y="170" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Jour par jour</text>
  <text x="20" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque planning à sa prochaine exécution</text>
  <line x1="210" y1="187.0" x2="240" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfs-arrow)"/>
  <rect x="1000" y="180" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">En clair</text>
  <text x="1010" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le cron en dessous</text>
  <line x1="1000" y1="197.0" x2="690" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfs-arrow)"/>
  <rect x="10" y="267" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="282" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Planning des préréglages</text>
  <text x="20" y="295" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le nom du préréglage</text>
  <line x1="210" y1="284.0" x2="510" y2="284" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfs-arrow)"/>
  <rect x="10" y="380" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">À la main</text>
  <text x="20" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">repliées</text>
  <line x1="210" y1="397.0" x2="240" y2="374" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfs-arrow)"/>
</svg>

| Partie | Contenu |
|---|---|
| Compteurs | Les exécutions prévues dans les 24 h, les planifications actives, les planifications désactivées, les tâches lancées à la main uniquement. |
| **À venir** | Chaque planification active à sa prochaine exécution — celle de la tâche, et une par préréglage planifié (le nom du préréglage à côté de la tâche) —, groupées par jour : *Aujourd'hui*, *Demain*, puis la date. Chaque ligne présente l'heure, la tâche, la planification en clair (*chaque jour à 03:00*, *chaque lundi à 07:00*) avec le cron en dessous, l'échéance et l'état de la dernière exécution. |
| **Planifiées mais désactivées** | Les planifications définies mais désactivées. |
| **Lancées à la main uniquement** | Les tâches sans aucune planification, repliées ; un clic sur l'une ouvre son éditeur. |

Les planifications que la page ne sait pas exprimer en clair — listes d'heures, plusieurs mois — n'affichent que leur cron.

---

## Préréglages planifiables \{#schedulable-presets\}

Un **préréglage** est un jeu de paramètres d'exécution enregistré (paramètres, arguments des étapes, étapes activées ou non, niveau de journal), créé depuis la fenêtre **Exécuter avec des paramètres** avec **Enregistrer comme préréglage…**. Dans l'éditeur de tâche, la section **Préréglages & plannings** donne à chaque préréglage sa propre **Planification (cron)** et son **Fuseau horaire**, ainsi qu'une case **Planning activé**.

Le planificateur exécute alors la tâche selon cette planification avec les paramètres du préréglage : une tâche, plusieurs planifications, des entrées différentes — un chargement complet la nuit et un incrément toutes les heures pour le même ETL, par exemple.

La planification d'un préréglage ne dépend pas du switch **Activée** de la tâche : un préréglage activé s'exécute même quand la planification propre de la tâche est arrêtée.

:::info[Cloner une tâche]
**Cloner** crée une copie désactivée et sans aucune planification : le cron de la tâche et ceux des préréglages sont retirés, si bien que la copie ne se déclenche jamais en même temps que l'original. Ses planifications se définissent une fois la copie prête.
:::

---

## Planifications manquées \{#missed\}

Une exécution peut ne pas avoir lieu : le serveur était arrêté à ce moment-là, ou l'exécution précédente de la même tâche était encore en cours. Nomaflow recherche ces manques et enregistre chacun comme une exécution à l'état **MISSED**, avec l'heure attendue, dans l'historique des exécutions et comme dernière exécution de la tâche. Une règle sur l'événement `missed` peut prévenir quelqu'un — voir [Notifications](../notifications.md).

Le panneau **Planifications manquées** de la page des Tâches (à côté du panneau de rétention) affiche la politique et le dernier contrôle, et **Contrôler maintenant** lance aussitôt un contrôle.

| Réglage | Défaut | Signification |
|---|---|---|
| **Contrôle** | activé | Active ou désactive le contrôle. |
| **Tolérance (min)** | 10 | Une exécution lancée dans ce délai après l'heure attendue — planifiée ou manuelle — compte pour elle. |
| **Intervalle de contrôle (min)** | 5 | La fréquence du contrôle. |
| **Fenêtre arrière (heures)** | 24 | La profondeur maximale d'un contrôle. Une tâche qui ne s'est jamais exécutée n'est contrôlée qu'à partir du démarrage du planificateur. |

La politique s'enregistre dans `jobs.toml`, sous `[meta.missed]`. Une heure manquée n'est enregistrée qu'une fois : un redémarrage ne la signale pas de nouveau.

---

## Suspendre une planification \{#pause\}

| Option | Effet |
|---|---|
| La pastille **activée** / **désactivée** de la tâche dans la page des Tâches, ou **Mettre la planification en pause** sur la carte des tâches d'un tableau de bord | La planification propre de la tâche s'arrête aussitôt, sans rechargement. **Exécuter** fonctionne toujours ; les planifications des préréglages continuent, sauf si elles sont désactivées. |
| **Manuelle** dans le champ Planification | La planification propre de la tâche est retirée. |
| **Planning activé** décoché sur un préréglage | La planification de ce préréglage s'arrête. |

---

## Conseils \{#tips\}

- Étaler les tâches lourdes sur la nuit (02:00, 02:30, 03:00) plutôt que de toutes les lancer à minuit.
- Préférer `15 * * * *` à `0 * * * *` pour les tâches horaires : beaucoup d'autres systèmes s'exécutent à l'heure pile.
- Utiliser un nom de fuseau horaire, jamais un décalage fixe, pour suivre l'heure d'été.
- Vérifier l'aperçu **Prochaines exécutions** après chaque modification : c'est le moyen le plus rapide de repérer un mauvais jour.
