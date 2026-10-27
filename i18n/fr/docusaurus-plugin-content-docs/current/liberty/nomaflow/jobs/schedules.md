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

**Planning**, dans la barre d'outils des Tâches, liste toutes les planifications, par prochaine exécution :

<svg viewBox="0 0 1200 390" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sch-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sch-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sch-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sch-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="370" rx="14" fill="url(#sch-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Planning</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Toutes les tâches, par prochaine exécution</text>
  <text x="240" y="92" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">À VENIR (4)</text>
  <rect x="240" y="100" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TÂCHE</text>
  <text x="500" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PLANIFICATION</text>
  <text x="700" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCHAINE EXÉCUTION</text>
  <text x="850" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DERNIÈRE EXÉCUTION</text>
  <rect x="240" y="132" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="148.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">sales-load</text>
  <text x="500" y="148.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">0 2 ∗ ∗ ∗</text>
  <text x="700" y="148.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">demain 02:00</text>
  <rect x="850" y="137.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="880.0" y="148.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <rect x="240" y="162" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="178.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">sales-load · fin de mois</text>
  <text x="500" y="178.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">0 6 1 ∗ ∗</text>
  <text x="700" y="178.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">01/11 06:00</text>
  <text x="850" y="178.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <rect x="240" y="192" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="208.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">nomajde-daily-sync</text>
  <text x="500" y="208.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">30 2 ∗ ∗ ∗</text>
  <text x="700" y="208.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">demain 02:30</text>
  <rect x="850" y="197.0" width="46" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="873.0" y="208.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">MISSED</text>
  <rect x="240" y="222" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="238.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">config-versions-purge</text>
  <text x="500" y="238.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">0 3 ∗ ∗ ∗</text>
  <text x="700" y="238.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">demain 03:00</text>
  <rect x="850" y="227.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="880.0" y="238.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="240" y="274" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MANUELLES / DÉSACTIVÉES (2)</text>
  <rect x="240" y="282" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="299.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TÂCHE</text>
  <text x="500" y="299.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PLANIFICATION</text>
  <text x="700" y="299.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCHAINE EXÉCUTION</text>
  <text x="850" y="299.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DERNIÈRE EXÉCUTION</text>
  <rect x="240" y="314" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="330.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">nomasx1-init-db</text>
  <text x="500" y="330.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="700" y="330.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="850" y="330.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <rect x="240" y="344" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="360.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">reporting-refresh (désactivé)</text>
  <text x="500" y="360.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">0 6 ∗ ∗ ∗</text>
  <text x="700" y="360.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <rect x="850" y="349.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="880.0" y="360.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <rect x="10" y="130" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne par planification</text>
  <text x="20" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le cron de la tâche + chaque préréglage</text>
  <line x1="210" y1="147.0" x2="260" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sch-arrow)"/>
  <rect x="1000" y="190" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Planification manquée</text>
  <text x="1010" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">enregistrée en exécution MISSED</text>
  <line x1="1000" y1="207.0" x2="920" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sch-arrow)"/>
  <rect x="10" y="300" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ne se déclenche pas</text>
  <text x="20" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">manuelle ou désactivée</text>
  <line x1="210" y1="317.0" x2="280" y2="352" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sch-arrow)"/>
</svg>

| Groupe | Contenu |
|---|---|
| **À venir** | Une ligne par planification active — celle de la tâche, et une par préréglage planifié (le nom du préréglage s'affiche à côté de la tâche). Colonnes : Tâche, Planification, Prochaine exécution, Dernière exécution. |
| **Manuelles / désactivées** | Les tâches sans planification, et les planifications définies mais désactivées — marquées *(désactivé)*. |

---

## Préréglages planifiables \{#schedulable-presets\}

Un **préréglage** est un jeu de paramètres d'exécution enregistré (paramètres, arguments des étapes, étapes activées ou non, niveau de journal), créé depuis la fenêtre **Run with parameters** avec **Save as preset…**. Dans l'éditeur de tâche, la section **Préréglages & plannings** donne à chaque préréglage sa propre **Planification (cron)** et son **Fuseau horaire**, ainsi qu'une case **Planning activé**.

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
| Le switch **Activée** de la tâche dans la page des Tâches | La planification propre de la tâche s'arrête. **Exécuter** fonctionne toujours ; les planifications des préréglages continuent, sauf si elles sont désactivées. |
| **Manuelle** dans le champ Planification | La planification propre de la tâche est retirée. |
| **Planning activé** décoché sur un préréglage | La planification de ce préréglage s'arrête. |

---

## Conseils \{#tips\}

- Étaler les tâches lourdes sur la nuit (02:00, 02:30, 03:00) plutôt que de toutes les lancer à minuit.
- Préférer `15 * * * *` à `0 * * * *` pour les tâches horaires : beaucoup d'autres systèmes s'exécutent à l'heure pile.
- Utiliser un nom de fuseau horaire, jamais un décalage fixe, pour suivre l'heure d'été.
- Vérifier l'aperçu **Prochaines exécutions** après chaque modification : c'est le moyen le plus rapide de repérer un mauvais jour.
