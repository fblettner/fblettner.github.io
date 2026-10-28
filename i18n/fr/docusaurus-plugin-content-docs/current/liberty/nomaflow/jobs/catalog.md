---
title: Catalogue — la page des Tâches
description: "La page des Tâches de Nomaflow : recherche et filtres, les tâches groupées par application avec les tâches principales en tête, le contenu d'une ligne de tâche, l'activation d'une tâche, Exécuter et Exécuter avec des paramètres (préréglages, paramètres, plusieurs valeurs, étapes, envoi de fichiers, niveau de journal), Annuler, Cloner, Supprimer et Exporter."
keywords: [Nomaflow, tâches, catalogue, exécuter, run with parameters, préréglages, annuler, cloner, supprimer, export, rétention, planifications manquées, Liberty Next]
---

# Catalogue — la page des Tâches

La page **Tâches** présente chaque tâche de `jobs.toml`, une ligne par tâche, groupées par application, avec sa dernière exécution, sa planification et ses actions. Elle est réservée aux superutilisateurs.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfj-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfj-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfj-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfj-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="330" rx="14" fill="url(#nfj-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tâches</text>
  <rect x="850" y="28" width="110" height="22" rx="5" fill="url(#nfj-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="905.0" y="42.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Nouvelle tâche</text>
  <rect x="240" y="60" width="250" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="74.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Rechercher (id, description, étiquette)…</text>
  <rect x="500" y="60" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="510" y="74.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Toutes les applications ▾</text>
  <rect x="658" y="60" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="668" y="74.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Tout statut ▾</text>
  <rect x="776" y="60" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="786" y="74.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Toute étiquette ▾</text>
  <text x="960" y="75" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">12 sur 31 tâches</text>
  <text x="244" y="116" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">★ Tâches principales  (2)</text>
  <line x1="240" y1="124" x2="960" y2="124" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="146" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">nomasx1-collect-all</text>
  <text x="420" y="146" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Tout collecter pour une application</text>
  <rect x="620" y="134" width="55" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="647.5" y="145.2" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="696" y="146" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">Manuelle</text>
  <rect x="782" y="134" width="56" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="810.0" y="145.2" fill="#4a9eff" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">activée</text>
  <text x="254" y="174" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">nomajde-daily-sync</text>
  <text x="420" y="174" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Synchronisation JD Edwards de nuit</text>
  <rect x="620" y="162" width="43" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="641.5" y="173.2" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">FAILED</text>
  <text x="696" y="174" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">0 2 ∗ ∗ ∗</text>
  <rect x="782" y="162" width="56" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="810.0" y="173.2" fill="#4a9eff" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">activée</text>
  <text x="244" y="204" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾ crm  (2)</text>
  <line x1="240" y1="212" x2="960" y2="212" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="234" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">crm-daily-pipeline</text>
  <text x="420" y="234" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Pipeline du jour</text>
  <rect x="620" y="222" width="55" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="647.5" y="233.2" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="696" y="234" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">0 8 ∗ ∗ mon-fri</text>
  <rect x="782" y="222" width="56" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="810.0" y="233.2" fill="#4a9eff" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">activée</text>
  <text x="254" y="262" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">crm-archive</text>
  <text x="420" y="262" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Archiver les affaires closes</text>
  <rect x="620" y="250" width="51" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="645.5" y="261.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">CANCELED</text>
  <text x="696" y="262" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">Manuelle</text>
  <rect x="782" y="250" width="56" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="810.0" y="261.2" fill="#94a3b8" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">désactivée</text>
  <text x="244" y="292" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸ Framework  (8)</text>
  <line x1="240" y1="300" x2="960" y2="300" stroke="#1f2937" strokeWidth="1"/>
  <rect x="842" y="132" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="853.0" y="145.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <rect x="868" y="132" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="879.0" y="145.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="894" y="132" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.0" y="145.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="920" y="132" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="931.0" y="145.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <rect x="946" y="132" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="957.0" y="145.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="842" y="160" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="853.0" y="173.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <rect x="868" y="160" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="879.0" y="173.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="894" y="160" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.0" y="173.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="920" y="160" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="931.0" y="173.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <rect x="946" y="160" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="957.0" y="173.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="842" y="220" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="853.0" y="233.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <rect x="868" y="220" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="879.0" y="233.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="894" y="220" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.0" y="233.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="920" y="220" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="931.0" y="233.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <rect x="946" y="220" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="957.0" y="233.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="842" y="248" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="853.0" y="261.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <rect x="868" y="248" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="879.0" y="261.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <rect x="894" y="248" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.0" y="261.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <rect x="920" y="248" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="931.0" y="261.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <rect x="946" y="248" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="957.0" y="261.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="10" y="52" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="67" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recherche et filtres</text>
  <text x="20" y="80" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">gardés par le navigateur</text>
  <line x1="210" y1="69.0" x2="240" y2="71" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfj-arrow)"/>
  <rect x="10" y="112" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="127" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tâches principales</text>
  <text x="20" y="140" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les tâches étiquetées main</text>
  <line x1="210" y1="129.0" x2="244" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfj-arrow)"/>
  <rect x="10" y="210" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un groupe par application</text>
  <text x="20" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic replie</text>
  <line x1="210" y1="227.0" x2="244" y2="212" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfj-arrow)"/>
  <rect x="1000" y="100" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dernière exécution</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic l'ouvre</text>
  <line x1="1000" y1="117.0" x2="650" y2="135" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfj-arrow)"/>
  <rect x="1000" y="180" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Activer / désactiver</text>
  <text x="1010" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sans rechargement</text>
  <line x1="1000" y1="197.0" x2="810" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfj-arrow)"/>
  <rect x="1000" y="280" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions</text>
  <text x="1010" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lancer, modifier, cloner…</text>
  <line x1="1000" y1="297.0" x2="950" y2="268" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfj-arrow)"/>
</svg>

---

## Recherche et filtres \{#toolbar\}

| Élément | Usage |
|---|---|
| **Rechercher** | Trouve une tâche par son identifiant, sa description ou une étiquette. |
| **Toutes les applications**, **Tout statut**, **Toute étiquette** | Restreignent la liste. Statut : *Activées*, *Désactivées*, *Planifiées (activées avec une prochaine exécution)*, *En cours*, *Dernière exécution en échec*. |
| **Effacer** | Remet à zéro la recherche et les filtres. |
| *N sur M tâches* | Le nombre de tâches retenues par les filtres. |
| **+ Nouvelle tâche** | Ouvre l'éditeur de tâche — voir [Créer une tâche](./create.md). |

La recherche et les filtres sont conservés par le navigateur d'une visite à l'autre. Deux panneaux repliés regroupent les règles communes à toutes les tâches : **Rétention de l'historique** ([Administration](../administration.md#retention)) et **Planifications manquées** ([Planifications](./schedules.md#missed)).

---

## Groupes \{#groups\}

- **Tâches principales** vient en tête : les tâches portant l'étiquette `main`, celles que les exploitants lancent le plus souvent — la collecte d'une application, une synchronisation de nuit.
- Viennent ensuite un groupe par **application**, par ordre alphabétique : une tâche appartient à l'application que nomment ses étiquettes ou son identifiant (`nomasx1-collect-all` → Nomasx-1) ; les autres vont dans **Framework**, en dernier.

Un clic sur le titre d'un groupe le replie ou le déplie.

---

## Une ligne de tâche \{#card\}

| Élément | Signification |
|---|---|
| Identifiant, description | Un clic sur l'identifiant ouvre l'éditeur de la tâche. |
| Dernière exécution | L'état de la dernière exécution ; un clic en ouvre le détail. |
| Planification | Le cron, ou **Manuelle**, avec la prochaine exécution. |
| **activée** / **désactivée** | Un clic active ou désactive aussitôt la planification propre de la tâche, sans recharger la configuration. **Exécuter** fonctionne dans les deux cas, et les planifications des préréglages ne sont pas concernées. |

Les icônes en fin de ligne :

| Icône | Effet |
|---|---|
| **Exécuter** | Lance la tâche. Quand il y a quelque chose à choisir — paramètres, arguments d'étape, plusieurs étapes, une étape `file_load` —, la fenêtre **Exécuter avec des paramètres** s'ouvre d'abord. Pendant l'exécution, l'icône devient **Annuler**. |
| **Modifier** | Ouvre l'éditeur de la tâche. |
| **Cloner** | Demande un nouvel identifiant et crée une copie désactivée, sans aucune planification : ni la sienne, ni celles des préréglages. |
| **Exporter** | Télécharge un ZIP contenant l'entrée `jobs.toml` de la tâche et un `MANIFEST.md`. Les connecteurs et requêtes utilisés ne sont pas inclus. |
| **Supprimer** | Retire la tâche de `jobs.toml` après confirmation. Son historique d'exécutions est conservé. |

---

## Exécuter avec des paramètres \{#run-with-parameters\}

La fenêtre ne vaut que pour cette exécution — `jobs.toml` n'est pas modifié.

| Partie | Contenu |
|---|---|
| **Préréglage** | Choisir un préréglage enregistré puis **Appliquer** : la fenêtre revient d'abord aux valeurs enregistrées de la tâche, puis applique le préréglage — comme le fait l'ordonnanceur. *(choisir un préréglage…)* ramène aux valeurs enregistrées. **Enregistrer comme préréglage…** enregistre l'état courant de la fenêtre sous un nom, dans `jobs.toml`. |
| **Paramètres partagés (toutes les étapes)** | Les paramètres partagés de la tâche, modifiables pour cette exécution. Un paramètre proposé aux utilisateurs s'affiche en liste déroulante — ses choix peuvent venir d'une requête, comme les applications de Nomasx-1 —, ou en cases à cocher précédées de **Tout** quand plusieurs valeurs sont permises. |
| **Étapes** | Une ligne par étape avec une case pour la sauter (**Toutes** / **Aucune**) ; **Modifier les paramètres** ouvre les arguments d'une étape. Une étape `file_load` reçoit un sélecteur de fichier — voir [Étapes](../steps.md#file-load). |
| **Niveau de journal** | *WARNING — avertissements et erreurs seulement*, *INFO — nombres de lignes et jalons*, *DEBUG — le SQL complet de chaque requête*. |
| **Exécuter** | Envoie les fichiers choisis, puis démarre l'exécution. |

**Plusieurs valeurs, plusieurs exécutions.** Une tâche prévue pour s'exécuter *par valeur* — par application, par société — s'exécute une fois pour chaque valeur cochée, l'une après l'autre, chacune avec une seule valeur ; une valeur en échec n'empêche pas les suivantes. **Tout** reprend toutes les valeurs proposées. Dans les [exécutions](../runs/history.md), chaque exécution indique la valeur traitée.

Usages courants : relancer seulement l'étape en échec, recharger un mois, exécuter en `DEBUG` pour voir le SQL, lancer un préréglage à la main, collecter trois applications d'un coup.

---

## Annuler \{#cancel\}

**Annuler** demande l'arrêt de l'exécution. Les étapes SQL, HTTP, de chargement de fichier et les fonctions Python `async` s'arrêtent aussitôt ; l'exécution se termine **CANCELED**. Une fonction Python synchrone ne peut pas être interrompue : l'exécution est marquée annulée et la fonction se termine d'elle-même — voir [Dépannage](../runs/troubleshoot.md#cancellation-doesnt-stop-my-step).
