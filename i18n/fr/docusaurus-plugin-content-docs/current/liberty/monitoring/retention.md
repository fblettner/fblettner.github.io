---
title: Rétention
description: "Surveillance → Rétention dans Liberty Next : chaque stockage qui grossit sur le serveur — exécutions des tâches, fichiers des tâches, notifications, versions de configuration, paquets de modifications, vues enregistrées, journal du serveur — avec sa règle, sa taille, un aperçu à blanc et une purge immédiate."
keywords: [Liberty Next, surveillance, rétention, purge, exécutions, fichiers des tâches, notifications, versions de configuration, paquets de modifications, vues enregistrées, journal du serveur, espace disque]
---

# Rétention

**Surveillance → Rétention** réunit au même endroit tout ce que le serveur conserve et laisse grossir : ce qui est gardé, où cela se règle, la place occupée, et le moyen de nettoyer tout de suite. Seuls les superutilisateurs la voient.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 552" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="monret-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="monret-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="monret-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="monret-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="512" rx="14" fill="url(#monret-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Surveillance</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236.0" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="245.0" y="84" width="20" height="20" rx="5" fill="#4ade80" fillOpacity="0.18"/>
  <circle cx="255.0" cy="94" r="4" fill="none" stroke="#4ade80" strokeWidth="1.4"/>
  <text x="272.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">En direct</text>
  <text x="272.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Utilisateurs connectés, verrous, p…</text>
  <rect x="450.5" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="459.5" y="84" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <circle cx="469.5" cy="94" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="486.5" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Journal du serveur</text>
  <text x="486.5" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Le fichier journal : recherche, ex…</text>
  <rect x="665.0" y="74" width="204.5" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="674.0" y="84" width="20" height="20" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <circle cx="684.0" cy="94" r="4" fill="none" stroke="#c084fc" strokeWidth="1.4"/>
  <text x="701.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Usage de l’IA</text>
  <text x="701.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Qui utilise l’assistant, les jeton…</text>
  <rect x="879.5" y="74" width="204.5" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#fb923c" strokeWidth="1.2"/>
  <rect x="888.5" y="84" width="20" height="20" rx="5" fill="#fb923c" fillOpacity="0.18"/>
  <circle cx="898.5" cy="94" r="4" fill="none" stroke="#fb923c" strokeWidth="1.4"/>
  <text x="915.5" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rétention</text>
  <text x="915.5" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Ce que garde chaque stockage, sa t…</text>
  <rect x="1014" y="126" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1049.0" y="140.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Recharger</text>
  <text x="248" y="175" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Exécutions des tâches</text>
  <text x="248" y="188" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Les exécutions terminées avec leurs étapes</text>
  <text x="520" y="175" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Plus de 30 jours, ou au-delà de 100 par tâche</text>
  <text x="520" y="188" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">jobs.toml [meta.retention]</text>
  <text x="800" y="181" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">12 480 exécutions</text>
  <rect x="932" y="167" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="968.0" y="181.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">◉ Aperçu</text>
  <rect x="1010" y="167" width="64" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1042.0" y="181.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Purger</text>
  <line x1="236" y1="198" x2="1084" y2="198" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="215" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Fichiers des tâches</text>
  <text x="248" y="228" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Fichiers téléversés, rejets, rapports…</text>
  <text x="520" y="215" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Plus de 30 jours</text>
  <text x="520" y="228" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">jobs.toml [meta.retention] files_days</text>
  <text x="800" y="221" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">312 fichiers · 1,2 Go</text>
  <rect x="932" y="207" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="968.0" y="221.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">◉ Aperçu</text>
  <rect x="1010" y="207" width="64" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1042.0" y="221.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Purger</text>
  <line x1="236" y1="238" x2="1084" y2="238" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="255" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Notifications</text>
  <text x="248" y="268" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Les notifications lues</text>
  <text x="520" y="255" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Lues, plus de 90 jours</text>
  <text x="520" y="268" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">app.toml [notify] retention_days</text>
  <text x="800" y="261" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2 104 (1 980 lues)</text>
  <rect x="932" y="247" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="968.0" y="261.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">◉ Aperçu</text>
  <rect x="1010" y="247" width="64" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1042.0" y="261.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Purger</text>
  <line x1="236" y1="278" x2="1084" y2="278" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="295" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Versions de configuration</text>
  <text x="248" y="308" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Instantanés (le plus récent de chaque fichier est gardé)</text>
  <text x="520" y="295" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Au-delà de 20 par fichier, ou plus de 90 jours</text>
  <text x="520" y="308" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">job config-versions-purge</text>
  <text x="800" y="301" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">640 versions · 13 Mo</text>
  <rect x="932" y="287" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="968.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">◉ Aperçu</text>
  <rect x="1010" y="287" width="64" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1042.0" y="301.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Purger</text>
  <line x1="236" y1="318" x2="1084" y2="318" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="335" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Paquets de modifications</text>
  <text x="248" y="348" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Paquets exportés / promus et journaux d'import</text>
  <text x="520" y="335" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Conservé (aucune durée)</text>
  <text x="520" y="348" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">app.toml [changesets] retention_days</text>
  <text x="800" y="341" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">38 paquets, 12 journaux d'import</text>
  <line x1="236" y1="358" x2="1084" y2="358" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="375" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Usage de l’IA</text>
  <text x="248" y="388" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">L’enregistrement d’usage de l’assistant</text>
  <text x="520" y="375" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Plus de 90 jours</text>
  <text x="520" y="388" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">app.toml [ai] usage_retention_days</text>
  <text x="800" y="381" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">412 questions</text>
  <rect x="932" y="367" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="968.0" y="381.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">◉ Aperçu</text>
  <rect x="1010" y="367" width="64" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1042.0" y="381.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Purger</text>
  <line x1="236" y1="398" x2="1084" y2="398" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="415" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Vues enregistrées</text>
  <text x="248" y="428" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Les vues et analyses des utilisateurs — jamais purgées</text>
  <text x="520" y="415" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Conservées</text>
  <text x="520" y="428" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace"></text>
  <text x="800" y="421" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">214 vues</text>
  <line x1="236" y1="438" x2="1084" y2="438" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="455" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Rapports de documentation</text>
  <text x="248" y="468" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Les rapports générés, conservés tels quels</text>
  <text x="520" y="455" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Conservés jusqu’à suppression</text>
  <text x="520" y="468" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">.reports</text>
  <text x="800" y="461" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3 fichiers · 2 Mo</text>
  <line x1="236" y1="478" x2="1084" y2="478" stroke="#1f2937" strokeWidth="1"/>
  <text x="248" y="495" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Journal du serveur</text>
  <text x="248" y="508" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Rotation par taille</text>
  <text x="520" y="495" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">10 Mo par fichier, 5 fichiers précédents</text>
  <text x="520" y="508" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">app.toml [app] log_file_max_mb / log_file_backups</text>
  <text x="800" y="501" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">6 fichiers · 41 Mo</text>
  <rect x="236" y="158" width="848" height="360" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vue Rétention</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la quatrième carte</text>
  <line x1="200" y1="77.0" x2="236" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monret-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chaque stockage</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce qui grossit, au même endroit</text>
  <line x1="200" y1="187.0" x2="248" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monret-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La politique</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">et le réglage qui la fixe</text>
  <line x1="200" y1="317.0" x2="520" y2="298" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monret-arrow)"/>
  <rect x="20" y="470" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="485" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Jamais purgé</text>
  <text x="30" y="498" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les vues des utilisateurs</text>
  <line x1="200" y1="487.0" x2="248" y2="418" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monret-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Aperçu</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un essai, rien n'est supprimé</text>
  <line x1="1120" y1="137.0" x2="968" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monret-arrow)"/>
  <rect x="1120" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Purger</text>
  <text x="1130" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">après confirmation</text>
  <line x1="1120" y1="237.0" x2="1042" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monret-arrow)"/>
  <rect x="1120" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Taille</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lignes, fichiers, mégaoctets</text>
  <line x1="1120" y1="347.0" x2="1010" y2="338" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#monret-arrow)"/>
</svg>

---

## Les stockages \{#stores\}

Une ligne par stockage : son nom et ce qui part, la politique en vigueur avec le réglage qui la fixe, la taille, puis les boutons. **Recharger**, en haut, relit les chiffres.

| Stockage | Ce qui part | Réglage |
|---|---|---|
| **Exécutions des tâches** | Les exécutions terminées avec leurs étapes et journaux, au-delà des jours conservés ou du plafond par tâche. | Nomaflow — [Rétention de l'historique](../nomaflow/administration.md#retention). |
| **Fichiers des tâches** | Fichiers envoyés, rapports de rejets, rapports, exports, archives des dossiers surveillés. | Nomaflow — **Fichiers conservés (jours)** dans le même panneau. |
| **Notifications** | Les notifications lues, au-delà des jours fixés. | Liberty Next → Administrer → App → Notifications — [Conserver les notifications lues](../nomaflow/notifications.md#smtp). |
| **Usage de l'IA** | L'enregistrement d'usage de l'assistant — qui, modèle, jetons, outils — au-delà des jours fixés. | Liberty Next → Administrer → App → Assistant IA — [Enregistrement d'usage conservé](./ai-usage.md#retention), 90 jours par défaut. |
| **Versions de configuration** | Les instantanés de configuration au-delà du nombre gardé par fichier, ou trop anciens ; le plus récent de chaque fichier reste toujours. | La [tâche `config-versions-purge`](../nomaflow/bundled-jobs.md), sinon 20 par fichier et 90 jours. |
| **Paquets de modifications** | Les paquets exportés ou promus et les journaux d'import plus anciens que les jours fixés. Les brouillons ne sont jamais touchés. | Conservés par défaut. |
| **Vues enregistrées** | Les vues et analyses des utilisateurs. | Jamais purgées — affichées pour leur taille. |
| **Rapports de documentation** | Les rapports d'implémentation et techniques produits, conservés tels que téléchargés. | Conservés jusqu'à leur suppression depuis la page [Rapports de documentation](../framework/configuration/documentation-reports.md#copies). |
| **Journal du serveur** | Rotation par taille : 10 Mo par fichier, cinq fichiers précédents. | Liberty Next → Administrer → App → [Journal du serveur](../framework/build/settings-app.md#server-log). |

Les exécutions et fichiers des tâches figurent quand Nomaflow fonctionne sur le serveur.

---

## Aperçu et purge \{#actions\}

| Bouton | Effet |
|---|---|
| **Aperçu** | Un essai à blanc : *Supprimerait N élément(s)*, avec la taille. Rien n'est supprimé. |
| **Purger** | Après confirmation, applique aussitôt la règle : *N élément(s) supprimé(s)*. |

Les boutons ne s'affichent que là où il y a quelque chose à purger : ni pour les vues enregistrées et le journal du serveur, ni pour les notifications et les paquets de modifications tant qu'ils sont conservés sans limite. Les nettoyages automatiques continuent selon leur propre rythme.

---

## Voir aussi

- [Journal du serveur](./server-log.md) — chercher dans ce que le serveur a écrit.
- [Administration de Nomaflow](../nomaflow/administration.md) — la règle de rétention des tâches.
