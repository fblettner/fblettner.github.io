---
title: Catalogue — la page des Tâches
description: "La page des Tâches de Nomaflow : la barre d'outils, les panneaux de rétention et de planifications manquées, le contenu d'une carte de tâche, l'activation d'une tâche, Exécuter et Run with parameters (préréglages, étapes, envoi de fichiers, niveau de journal), Annuler, Cloner, Supprimer et Export."
keywords: [Nomaflow, tâches, catalogue, exécuter, run with parameters, préréglages, annuler, cloner, supprimer, export, rétention, planifications manquées, Liberty Next]
---

# Catalogue — la page des Tâches

La page **Tâches** présente chaque tâche de `jobs.toml` sous forme de carte, avec son état, sa planification et sa dernière exécution. Elle est réservée aux superutilisateurs.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 414" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="job-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="job-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="job-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="job-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="386" rx="14" fill="url(#job-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tâches</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">nomaflow — tâches ETL planifiées</text>
  <rect x="680" y="34" width="111" height="22" rx="5" fill="url(#job-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="735.5" y="48.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Nouvelle tâche</text>
  <rect x="799" y="34" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="832.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Planning</text>
  <rect x="873" y="34" width="27" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="886.5" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <text x="240" y="97" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Filtre :</text>
  <rect x="286" y="85" width="33" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="302.5" y="97.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">etl</text>
  <rect x="324" y="85" width="53" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="350.5" y="97.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">nomasx1</text>
  <rect x="390" y="85" width="53" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="416.5" y="97.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">install</text>
  <rect x="240" y="110" width="720" height="26" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="127" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">▸ Run history retention · 30 days · 100 per job</text>
  <rect x="240" y="142" width="720" height="26" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="159" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">▸ Planifications manquées · tolérance 10 min · toutes les 5 min</text>
  <rect x="240" y="182" width="720" height="130" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="256" y="204" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">sales-load</text>
  <text x="256" y="222" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Fichiers de ventes mensuels vers la table de faits</text>
  <rect x="256" y="232" width="33" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="272.5" y="244.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">etl</text>
  <rect x="680" y="192" width="53" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="706.5" y="204.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">activée</text>
  <rect x="760" y="192" width="63" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="791.5" y="204.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">0 2 ∗ ∗ ∗</text>
  <rect x="840" y="192" width="154" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="917.0" y="204.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1 planning(s) de préréglage</text>
  <text x="256" y="272" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">prochaine  demain 02:00   ·   dernière  SUCCEEDED · 4 min   ·   3 étapes</text>
  <rect x="256" y="282" width="78" height="22" rx="5" fill="url(#job-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="295.0" y="296.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Exécuter</text>
  <rect x="342" y="282" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="375.0" y="296.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Modifier</text>
  <rect x="416" y="282" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="443.5" y="296.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cloner</text>
  <rect x="479" y="282" width="72" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="515.0" y="296.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="559" y="282" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="586.5" y="296.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Export</text>
  <rect x="240" y="324" width="720" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="346" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">nomajde-daily-sync</text>
  <rect x="680" y="334" width="68" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="714.0" y="346.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">désactivée</text>
  <rect x="760" y="334" width="58" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="789.0" y="346.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Manuelle</text>
  <text x="256" y="368" fill="#f87171" fontSize="9.5" fontFamily="system-ui, sans-serif">dernière  FAILED · 12 s   ·   5 étapes</text>
  <rect x="10" y="80" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtrer par étiquette</text>
  <text x="20" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les étiquettes utilisées</text>
  <line x1="210" y1="97.0" x2="286" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#job-arrow)"/>
  <rect x="10" y="140" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux politiques</text>
  <text x="20" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rétention · manquées</text>
  <line x1="210" y1="157.0" x2="240" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#job-arrow)"/>
  <rect x="10" y="280" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécuter</text>
  <text x="20" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre la fenêtre si besoin</text>
  <line x1="210" y1="297.0" x2="280" y2="294" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#job-arrow)"/>
  <rect x="1000" y="160" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Switch Activée</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">clic pour suspendre le cron</text>
  <line x1="1000" y1="177.0" x2="710" y2="201" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#job-arrow)"/>
  <rect x="1000" y="240" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dernière exécution</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le clic ouvre le détail</text>
  <line x1="1000" y1="257.0" x2="560" y2="268" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#job-arrow)"/>
  <rect x="1000" y="330" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions de la carte</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">modifier, cloner, supprimer, export ZIP</text>
  <line x1="1000" y1="347.0" x2="592" y2="294" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#job-arrow)"/>
</svg>

---

## La barre d'outils \{#toolbar\}

| Élément | Usage |
|---|---|
| **+ Nouvelle tâche** | Ouvre l'éditeur de tâche — voir [Créer une tâche](./create.md). |
| **Planning** | Toutes les planifications par prochaine exécution — voir [Planifications](./schedules.md#schedule-view). |
| **↻** | Recharge la liste. |
| **Filtre :** | Une pastille par étiquette utilisée ; en choisir pour n'afficher que ces tâches, **Effacer** pour tout afficher. |

En dessous, deux panneaux repliés portent les politiques communes à toutes les tâches : **Run history retention** ([Administration](../administration.md#retention)) et **Planifications manquées** ([Planifications](./schedules.md#missed)).

---

## Une carte de tâche \{#card\}

| Élément | Signification |
|---|---|
| Identifiant, description, étiquettes | Issus des réglages de la tâche. |
| **activée** / **désactivée** | Un clic active ou suspend la planification propre de la tâche. **Exécuter** fonctionne dans les deux cas, et les planifications des préréglages ne sont pas concernées. |
| Pastille de planification | Le cron, ou **Manuelle**. |
| *N planning(s) de préréglage* | Les préréglages qui ont leur propre planification. |
| prochaine · dernière | La prochaine exécution planifiée, ainsi que l'état et la durée de la dernière — un clic ouvre son détail. |
| *N étapes* | Le nombre d'étapes. |

Les boutons de la carte :

| Bouton | Effet |
|---|---|
| **▶ Exécuter** | Lance la tâche. Quand il y a quelque chose à choisir — paramètres partagés, arguments d'étapes, plusieurs étapes, une étape `file_load` — il ouvre d'abord **Run with parameters**. |
| **Annuler** | Affiché pendant l'exécution : annule l'exécution en cours. |
| **Modifier** | Ouvre l'éditeur de tâche. |
| **Cloner** | Demande un nouvel identifiant (`<id>_copy` proposé) et crée une copie désactivée et sans aucune planification : ni celle de la tâche, ni celles de ses préréglages. |
| **Supprimer** | Retire la tâche de `jobs.toml` après confirmation. Son historique d'exécutions est conservé. |
| **Export** | Télécharge un ZIP avec l'entrée `jobs.toml` de la tâche et un `MANIFEST.md`. Les connecteurs et requêtes qu'elle utilise ne sont pas inclus. |

---

## Run with parameters \{#run-with-parameters\}

La fenêtre ne vaut que pour cette exécution — `jobs.toml` n'est pas modifié.

| Partie | Contenu |
|---|---|
| **Preset** | Choisir un préréglage enregistré et l'appliquer (**Apply**) ; **Save as preset…** enregistre l'état de la fenêtre sous un nom, dans `jobs.toml`. |
| **Shared params (apply to every step)** | Les paramètres partagés de la tâche, modifiables pour cette exécution. |
| **Steps** | Une ligne par étape avec une case pour la sauter (**All** / **None**) ; **Edit parameters** ouvre les arguments d'une étape. Une étape `file_load` reçoit un sélecteur de fichier — voir [Étapes](../steps.md#file-load). |
| **Log level** | *WARNING — warnings + errors only*, *INFO — row counts + progress markers*, *DEBUG — full SQL of every query*. |
| **Run** | Envoie les fichiers choisis, puis lance l'exécution. |

Usages courants : relancer seulement l'étape en échec, recharger un mois, exécuter en `DEBUG` pour voir le SQL, lancer un préréglage à la main.

---

## Annuler \{#cancel\}

**Annuler** demande l'arrêt de l'exécution. Les étapes SQL, HTTP, de chargement de fichier et les fonctions Python `async` s'arrêtent aussitôt ; l'exécution se termine **CANCELED**. Une fonction Python synchrone ne peut pas être interrompue : l'exécution est marquée annulée et la fonction se termine d'elle-même — voir [Dépannage](../runs/troubleshoot.md#cancellation-doesnt-stop-my-step).
