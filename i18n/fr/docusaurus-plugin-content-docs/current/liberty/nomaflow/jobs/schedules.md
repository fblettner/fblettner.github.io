---
title: Planifications
description: "Syntaxe cron de Nomaflow, règle de fuseau horaire, vue calendrier qui prévisualise les prochains déclenchements de toutes les tâches, et modèles adoptés par la plupart des installations."
keywords: [Nomaflow, cron, planification, fuseau horaire, calendrier, aperçu déclenchement, récurrence, Liberty Framework]
---

# Planifications

Une **planification** détermine quand une tâche se déclenche automatiquement. Tout le framework parle **cron** — une expression à cinq champs qui sert de vocabulaire de planification par défaut depuis quarante ans. Cette page parcourt la syntaxe, la règle de fuseau horaire, l'aperçu en direct affiché par l'éditeur, et la **vue calendrier** qui présente les prochains déclenchements de toutes les tâches.

Pour le modèle mental global (tâche → planification → exécution), voir [Concepts](../concepts.md).

---

## Le cron en un coup d'œil

Une expression cron comporte **cinq champs obligatoires** et un sixième facultatif pour les secondes :

```
┌──── minute (0-59)
│ ┌── heure (0-23)
│ │ ┌── jour du mois (1-31)
│ │ │ ┌── mois (1-12)
│ │ │ │ ┌── jour de semaine (0=dimanche, 6=samedi)
│ │ │ │ │ ┌── seconde (facultatif, 0-59)
0 2 * * *
```

Les modèles les plus courants :

| Objectif | Cron |
|---|---|
| Chaque minute (réservé au test rapide, pas à l'état stable). | `* * * * *` |
| Toutes les 5 minutes. | `*/5 * * * *` |
| Chaque heure, à l'heure pile. | `0 * * * *` |
| Chaque heure à la minute :15. | `15 * * * *` |
| Chaque jour à 02 h 00. | `0 2 * * *` |
| Chaque jour à 02 h 30. | `30 2 * * *` |
| Chaque jour ouvré (lun-ven) à 09 h 00. | `0 9 * * 1-5` |
| Chaque lundi à 09 h 30. | `30 9 * * 1` |
| Le 1ᵉʳ de chaque mois à minuit. | `0 0 1 * *` |
| Chaque trimestre (1ᵉʳ de janv./avril/juil./oct.) à 03 h 00. | `0 3 1 1,4,7,10 *` |
| Deux fois par jour (08 h 00 et 20 h 00). | `0 8,20 * * *` |

---

## Les quatre opérateurs

| Opérateur | Signification | Exemple |
|---|---|---|
| **`*`** | « toute valeur dans la plage ». | `* * * * *` = chaque minute. |
| **`,`** | Liste de valeurs précises. | `0 6,12,18 * * *` = à 06 h 00, 12 h 00, 18 h 00. |
| **`-`** | Plage. | `0 9 * * 1-5` = jours ouvrés à 09 h 00. |
| **`/`** | Pas. | `*/10 * * * *` = toutes les 10 minutes ; `0 */2 * * *` = toutes les deux heures à l'heure pile. |

Ils se combinent : `5,15,25,35,45,55 9-17 * * 1-5` = toutes les 10 minutes entre 09 h 00 et 17 h 00, jours ouvrés uniquement. (Équivalent plus propre : `*/10 9-17 * * 1-5`.)

---

## Jour du mois et jour de semaine

Si **les deux** champs jour-du-mois et jour-de-semaine sont contraints, le cron se déclenche dès qu'**un** des deux correspond — *pas* les deux à la fois. C'est le comportement traditionnel du cron Unix, et la seule subtilité à mémoriser.

| Cron | Quand il se déclenche |
|---|---|
| `0 9 15 * *` | Le 15 de chaque mois à 09 h 00. |
| `0 9 * * 1` | Chaque lundi à 09 h 00. |
| `0 9 15 * 1` | Le 15 de chaque mois **OU** tout lundi — à 09 h 00. |

Pour « uniquement le lundi 15 », impossible avec le cron seul — déclenchez la tâche les lundis et filtrez dans une première étape :

```python
# étape python : ne continuer que le 15
from datetime import date
def main(**kwargs):
    if date.today().day != 15:
        return {"skipped": "not the 15th"}
    # ... vrai traitement
```

---

## Fuseaux horaires

Le cron est évalué dans le **fuseau choisi sur la tâche**, et non dans le fuseau de l'hôte du framework. Ce point importe quand l'hôte tourne en UTC mais que l'activité métier se déroule à Paris (ou Sydney, ou Mumbai).

| Réglage | Quand la tâche se déclenche |
|---|---|
| `0 2 * * *`, fuseau `UTC` | 02 h 00 UTC chaque jour — soit 03 h 00 / 04 h 00 à Paris selon l'heure d'été. |
| `0 2 * * *`, fuseau `Europe/Paris` | 02 h 00 à Paris chaque jour — soit 00 h 00 / 01 h 00 UTC selon l'heure d'été. |

Le **passage à l'heure d'été** est géré correctement quand un nom IANA est utilisé : le planificateur saute ou duplique le déclenchement cron au moment du saut d'horloge murale. Avec un décalage fixe (`Etc/GMT+1`), l'heure d'été est ignorée — la tâche se déclenche au même instant UTC toute l'année.

:::tip[Choisir un fuseau horaire]
Utilisez le nom IANA de la zone d'exploitation (`Europe/Paris`, `America/New_York`, `Asia/Tokyo`). Réservez `UTC` aux tâches où l'heure d'horloge murale n'a réellement pas d'importance (un nettoyage horaire, un test rapide).
:::

---

## L'aperçu en direct

L'éditeur de tâche affiche les **trois prochains horaires de déclenchement** sous le champ cron au fur et à mesure de la saisie. Il se rafraîchit à chaque frappe, donc une expression mal formée se signale immédiatement (« invalid cron »).

| Cron | Aperçu |
|---|---|
| `0 2 * * *` (fuseau Paris, aujourd'hui mercredi 17 h 00 à Paris) | jeu 02 h 00 · ven 02 h 00 · sam 02 h 00 |
| `30 9 * * 1` | lun prochain 09 h 30 · le lundi suivant 09 h 30 · etc. |
| `*/5 * * * *` | dans 4 minutes · dans 9 minutes · dans 14 minutes |
| `0 25 * * *` | *(invalide — heure 25)* |

Quand l'aperçu indique autre chose que ce qui était attendu, vous avez détecté un bogue **avant** d'enregistrer la tâche.

---

## La vue calendrier

La page **Tâches** comporte un bouton **📅 Vue calendrier** dans la barre d'outils. Il ouvre un calendrier de tous les prochains déclenchements de toutes les tâches activées — utile quand vous avez dix tâches cron et souhaitez repérer les collisions.

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sv-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="320" rx="14" fill="url(#sv-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow · Planification</text>
  <text x="40" y="66" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Prochains déclenchements sur 7 jours pour toutes les tâches activées.</text>
  <line x1="20" y1="82" x2="980" y2="82" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="108" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LUN 27</text>
  <rect x="60" y="118" width="180" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="68" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">02:30 · nomajde-daily-sync</text>
  <rect x="60" y="144" width="180" height="22" rx="4" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.40)"/>
  <text x="68" y="159" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">06:00 · reporting-refresh</text>
  <rect x="60" y="170" width="180" height="22" rx="4" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <text x="68" y="185" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">09:00 · activity-log-1</text>

  <text x="260" y="108" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MAR 28</text>
  <rect x="260" y="118" width="180" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="268" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">02:30 · nomajde-daily-sync</text>
  <rect x="260" y="144" width="180" height="22" rx="4" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.40)"/>
  <text x="268" y="159" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">06:00 · reporting-refresh</text>
  <rect x="260" y="170" width="180" height="22" rx="4" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <text x="268" y="185" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">09:00 · activity-log-1</text>

  <text x="460" y="108" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MER 29</text>
  <rect x="460" y="118" width="180" height="22" rx="4" fill="rgba(245,158,11,0.12)" stroke="rgba(245,158,11,0.40)"/>
  <text x="468" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">02:30 · nomajde-daily-sync</text>
  <rect x="460" y="144" width="180" height="22" rx="4" fill="rgba(245,158,11,0.12)" stroke="rgba(245,158,11,0.40)"/>
  <text x="468" y="159" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">02:45 · nomasx1-security-1</text>
  <rect x="460" y="170" width="180" height="22" rx="4" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.40)"/>
  <text x="468" y="185" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">06:00 · reporting-refresh</text>
  <text x="468" y="218" fill="#f59e0b" fontSize="10" fontFamily="system-ui, sans-serif">⚠ deux tâches lourdes à 02 h 30 / 02 h 45 — risque de collision</text>

  <text x="660" y="108" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JEU 30</text>
  <rect x="660" y="118" width="180" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="668" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">02:30 · nomajde-daily-sync</text>
  <rect x="660" y="144" width="180" height="22" rx="4" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.40)"/>
  <text x="668" y="159" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">06:00 · reporting-refresh</text>
  <rect x="660" y="170" width="180" height="22" rx="4" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <text x="668" y="185" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">09:00 · activity-log-1</text>

  <rect x="40" y="252" width="920" height="72" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="276" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LÉGENDE</text>
  <rect x="58" y="288" width="12" height="12" rx="2" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="76" y="299" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">ETL</text>
  <rect x="120" y="288" width="12" height="12" rx="2" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.40)"/>
  <text x="138" y="299" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Reporting</text>
  <rect x="206" y="288" width="12" height="12" rx="2" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <text x="224" y="299" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Audit</text>
  <rect x="276" y="288" width="12" height="12" rx="2" fill="rgba(245,158,11,0.12)" stroke="rgba(245,158,11,0.40)"/>
  <text x="294" y="299" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Collision signalée</text>
</svg>

Chaque pastille représente un déclenchement — un clic dessus mène à la fiche de la tâche dans le catalogue. La couleur des pastilles vient des étiquettes (le calendrier utilise la première étiquette de la tâche). Les heures où deux tâches lourdes s'exécuteraient en même temps sont signalées par un avertissement — Nomaflow n'impose pas d'exécution sérielle, mais le calendrier aide à éviter les chevauchements.

---

## Modèles adoptés par la plupart des installations

| Charge de travail | Planification | Raison |
|---|---|---|
| **ETL nocturnes** | de `0 2 * * *` à `0 4 * * *` | Hors heures de pointe. Décaler quand on en a plusieurs — par ex. ETL A à 02 h 00, ETL B à 02 h 30, ETL C à 03 h 00. |
| **Synchronisations horaires** | `15 * * * *` | Éviter `0 * * * *` — tous les autres logiciels du bâtiment se déclenchent à l'heure pile. |
| **Audits hebdomadaires** | `0 6 * * 1` | Le lundi matin pour que le rapport soit prêt à l'arrivée des humains. |
| **Rapports mensuels** | `0 7 1 * *` | Tôt le 1ᵉʳ, avant l'affluence matinale. |
| **Sondage continu** | `*/5 * * * *` | 5 minutes est le minimum en régime stable — des cadences plus fines sollicitent excessivement le framework. |
| **Tests rapides** | `* * * * *` | À n'activer que temporairement — laisse beaucoup de lignes d'exécution en 24 heures. |

---

## Anti-modèles

| À éviter | Raison |
|---|---|
| Planifier toutes les tâches à `0 0 * * *` (minuit). | Plusieurs tâches lourdes démarrant au même instant peuvent saturer le framework. Décalez de 15 à 30 minutes. |
| Utiliser `* * * * *` en régime permanent. | Une exécution par minute remplit vite l'historique et correspond rarement à un besoin métier réel. |
| Définir une planification quand la tâche est pilotée par l'opérateur. | Laissez-la en manuel uniquement — le catalogue l'affiche toujours, ▶ Lancer fonctionne toujours, aucun déclenchement surprise à 3 h. |
| Mélanger jour-du-mois et jour-de-semaine. | La sémantique OU du cron réservera des surprises. Choisissez l'un ou l'autre. |
| Coder en dur les décalages d'heure d'été. | Utilisez le nom IANA du fuseau ; l'heure d'été est gérée. |

---

## Désactiver une planification temporairement

Deux façons de mettre en pause les déclenchements automatiques d'une tâche sans perdre la configuration :

| Option | Effet |
|---|---|
| **Bascule d'activation désactivée** sur la fiche du catalogue. | Planification ignorée. ▶ Lancer manuel toujours opérationnel. Réversible d'un clic. |
| **Vider le cron** dans l'éditeur. | Planification supprimée entièrement. ▶ Lancer manuel toujours opérationnel. L'état « manuel uniquement » est permanent tant qu'une planification n'a pas été réajoutée. |

Pour une fenêtre de maintenance ou un gel de mise en production, la **bascule d'activation** est l'outil adapté — peu de remous sur la configuration, totalement réversible.

---

## Pour aller plus loin

- [Créer une tâche](./create.md) — l'éditeur de tâche complet (le champ planification se trouve dans la section ② Planification).
- [Catalogue](./catalog.md) — la page Tâches, où la pastille de planification et l'indication de prochaine exécution apparaissent.
- [Administration](../administration.md) — installation multi-réplicas, verrou du planificateur, comportement au redémarrage.
