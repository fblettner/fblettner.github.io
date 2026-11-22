---
title: Planifications
description: "Quand s'exécutent les tâches Nomaflow : la planification exprimée en clair dans l'éditeur, la syntaxe cron à cinq zones et la numérotation des jours de la semaine, les fuseaux horaires, l'aperçu des prochaines exécutions, la vue Planning, les préréglages planifiables, et les planifications manquées enregistrées comme exécutions MISSED."
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

Le champ **Planification (cron)** de l'éditeur exprime la planification en clair : d'abord la fréquence, puis les seuls champs que ce choix demande. L'éditeur enregistre l'expression cron correspondante.

| Fréquence | Puis | Enregistrée sous la forme |
|---|---|---|
| *Seulement quand on la lance* | Rien : *Aucune planification — cette tâche ne s'exécute que sur déclenchement manuel.* | aucune planification |
| *Toutes les quelques minutes* | Toutes les **N** `minutes` (de 1 à 59). | `*/15 * * * *` |
| *Toutes les heures, ou toutes les quelques heures* | Toutes les **N** `heure(s), à` **M** `minutes après l'heure`. | `0 */2 * * *` |
| *Certains jours, à heure fixe* | `à` une heure, puis les jours de la semaine sous forme de boutons, du lundi au dimanche — *Aucun jour choisi : tous les jours.* | `0 2 * * *` |
| *Une fois par mois* | `le jour` **N** `à` une heure. | `0 7 1 * *` |
| *Autre chose (saisi)* | L'expression cron elle-même — listes d'heures, intervalles, mois : voir [plus haut](#cron). | telle que saisie |

Une planification enregistrée auparavant s'ouvre sur le choix qui l'exprime (`30 2 * * *` s'ouvre en *Certains jours, à heure fixe*, 02:30, aucun jour choisi) ; celle qu'aucun choix n'exprime s'ouvre en *Autre chose (saisi)*. Sous les champs, la planification est relue en clair — *chaque jour à 02:00*, *toutes les 15 minutes* — et **Prochaines exécutions** liste les cinq prochaines exécutions dans le fuseau de la tâche ; la liste est recalculée peu après chaque modification, et une expression invalide y est signalée.

**Fuseau horaire** se choisit dans la liste des fuseaux (`Europe/Paris`, `America/New_York`). La planification est évaluée dans ce fuseau, heure d'été comprise : `0 2 * * *` en `Europe/Paris` s'exécute à 02:00 heure de Paris toute l'année.

---

## La vue Planning \{#schedule-view\}

**Exploitation → Planning**, dans le menu de Nomaflow, montre ce qui s'exécute et quand, jour par jour.

<svg viewBox="0 0 1320 504" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfsc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfsc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfsc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfsc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="464" rx="14" fill="url(#nfsc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">▦</text>
  <text x="262" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Planning</text>
  <text x="262" y="60" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Ce qui s'exécute et quand, jour par jour</text>
  <line x1="220" y1="74" x2="1100" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="86" width="101" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="103" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">6</text>
  <text x="262.16" y="103" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">dans les 24 h</text>
  <rect x="349" y="86" width="147" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="359" y="103" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="371.16" y="103" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">planifications actives</text>
  <rect x="504" y="86" width="91" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="514" y="103" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="526.16" y="103" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">désactivées</text>
  <rect x="603" y="86" width="143" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="613" y="103" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">14</text>
  <text x="631.32" y="103" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">à la main uniquement</text>
  <rect x="1004" y="87" width="76" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.0" y="102.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Recharger</text>
  <text x="240" y="134" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">À VENIR (5)</text>
  <rect x="240" y="144" width="840" height="22" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="159" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Aujourd'hui</text>
  <rect x="240" y="166" width="840" height="36" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="188" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">14:00</text>
  <text x="340" y="188" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-hourly-refresh</text>
  <text x="650" y="182" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">chaque heure à :00</text>
  <text x="650" y="195" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">0 ∗ ∗ ∗ ∗</text>
  <text x="860" y="188" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">dans 1 h</text>
  <rect x="960" y="176" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="989.0" y="187.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <rect x="240" y="208" width="840" height="22" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="223" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Demain</text>
  <rect x="240" y="230" width="840" height="36" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="252" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">02:00</text>
  <text x="340" y="252" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-daily-sync</text>
  <text x="650" y="246" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">chaque jour à 02:00</text>
  <text x="650" y="259" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">0 2 ∗ ∗ ∗</text>
  <text x="860" y="252" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">dans 13 h</text>
  <rect x="960" y="240" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="989.0" y="251.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <rect x="240" y="266" width="840" height="36" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="288" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">06:00</text>
  <text x="340" y="288" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">sales-load</text>
  <rect x="403.8" y="276" width="54" height="16" rx="8" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.4)" strokeWidth="1"/>
  <text x="430.8" y="287.5" fill="#c084fc" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Magasins</text>
  <text x="650" y="282" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">chaque jour à 06:00</text>
  <text x="650" y="295" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">0 6 ∗ ∗ ∗</text>
  <text x="860" y="288" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">dans 17 h</text>
  <rect x="960" y="276" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="989.0" y="287.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <rect x="240" y="302" width="840" height="36" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="324" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">08:00</text>
  <text x="340" y="324" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-stalled-deals</text>
  <text x="650" y="318" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">du lundi au vendredi à 08:00</text>
  <text x="650" y="331" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">0 8 ∗ ∗ mon-fri</text>
  <text x="860" y="324" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">dans 19 h</text>
  <rect x="960" y="312" width="43" height="16" rx="3" fill="#f87171" fillOpacity="0.12" stroke="#f87171" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="981.5" y="323.5" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">FAILED</text>
  <text x="240" y="360" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PLANIFIÉES MAIS DÉSACTIVÉES (2)</text>
  <rect x="240" y="370" width="840" height="36" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="392" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">—</text>
  <text x="340" y="392" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">crm-archive</text>
  <text x="650" y="386" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">le 1 de chaque mois à 06:00</text>
  <text x="650" y="399" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">0 6 1 ∗ ∗</text>
  <rect x="860" y="380" width="70" height="16" rx="3" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="895" y="391.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">désactivée</text>
  <text x="962" y="392" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <rect x="240" y="406" width="840" height="36" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="428" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">—</text>
  <text x="340" y="428" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">ldap-import</text>
  <text x="650" y="422" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">toutes les 15 minutes</text>
  <text x="650" y="435" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">∗/15 ∗ ∗ ∗ ∗</text>
  <rect x="860" y="416" width="70" height="16" rx="3" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="895" y="427.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">désactivée</text>
  <rect x="960" y="416" width="53" height="16" rx="3" fill="#fb923c" fillOpacity="0.12" stroke="#fb923c" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="986.5" y="427.5" fill="#fb923c" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">CANCELED</text>
  <text x="242" y="464" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">›  LANCÉES À LA MAIN UNIQUEMENT (14)</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">En un coup d'œil</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">24 h, actives, désactivées, à la main</text>
  <line x1="200" y1="87.0" x2="240" y2="99" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfsc-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Jour par jour</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque planning à sa prochaine exécution</text>
  <line x1="200" y1="177.0" x2="250" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfsc-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Plannings de préréglage</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le nom du préréglage à côté</text>
  <line x1="200" y1="307.0" x2="403.8" y2="284" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfsc-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Désactivées</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">posées mais désactivées</text>
  <line x1="200" y1="417.0" x2="250" y2="388" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfsc-arrow)"/>
  <rect x="20" y="450" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="465" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">À la main uniquement</text>
  <text x="30" y="478" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">replié ; une tâche ouvre l'éditeur</text>
  <line x1="200" y1="467.0" x2="242" y2="460" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfsc-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">En clair</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le cron en dessous</text>
  <line x1="1120" y1="177.0" x2="780" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfsc-arrow)"/>
  <rect x="1120" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quand, et la dernière exécution</text>
  <text x="1130" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic ouvre la tâche</text>
  <line x1="1120" y1="277.0" x2="1010" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfsc-arrow)"/>
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

Un **préréglage** est un jeu de paramètres d'exécution enregistré (paramètres, arguments des étapes, étapes activées ou non, niveau de journal), créé depuis la fenêtre **Exécuter avec des paramètres** avec **Enregistrer comme préréglage…**. Dans l'éditeur de tâche, la section **Préréglages & plannings** donne à chaque préréglage sa propre **Planification (cron)** — exprimée en clair comme celle de la tâche — et son **Fuseau horaire**, ainsi qu'une case **Planning activé** ; la même carte renomme le préréglage, modifie ce qu'il donne (journal, valeurs, étapes) et le supprime — voir [Créer une tâche](./create.md#presets).

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
| *Seulement quand on la lance* dans le champ Planification | La planification propre de la tâche est retirée. |
| **Planning activé** décoché sur un préréglage | La planification de ce préréglage s'arrête. |

---

## Conseils \{#tips\}

- Étaler les tâches lourdes sur la nuit (02:00, 02:30, 03:00) plutôt que de toutes les lancer à minuit.
- Préférer `15 * * * *` à `0 * * * *` pour les tâches horaires : beaucoup d'autres systèmes s'exécutent à l'heure pile.
- Utiliser un nom de fuseau horaire, jamais un décalage fixe, pour suivre l'heure d'été.
- Vérifier l'aperçu **Prochaines exécutions** après chaque modification : c'est le moyen le plus rapide de repérer un mauvais jour.
