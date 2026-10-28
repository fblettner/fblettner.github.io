---
title: Étape 6 — Assistant IA et tâche quotidienne
description: "Finaliser le CRM : l'assistant IA répond aux questions à partir des requêtes du CRM, dans les droits de chaque utilisateur, et une tâche Nomaflow signale chaque matin les affaires en sommeil et prévient l'équipe commerciale."
keywords: [Liberty Next, tutoriel, CRM, assistant IA, ai:chat, connecteurs autorisés, Nomaflow, tâche, planification, notifications]
---

# Étape 6 — Assistant IA et tâche quotidienne

Deux ajouts : l'**assistant IA**, pour que les utilisateurs posent leurs questions en langage courant, et une **tâche Nomaflow** qui repère les affaires laissées sans nouvelles et prévient l'équipe commerciale.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tu6-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tu6-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tu6-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tu6-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="330" rx="14" fill="url(#tu6-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="30" width="360" height="300" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="254" y="54" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">AI Assistant</text>
  <rect x="360" y="66" width="226" height="30" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="370" y="85" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Affaires en négociation ?</text>
  <rect x="254" y="106" width="144" height="18" rx="9.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="326.0" y="118.2" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sql_query · crm.deals_get</text>
  <rect x="254" y="132" width="330" height="70" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="266" y="154" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1 affaire : Plateforme logistique —</text>
  <text x="266" y="172" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL, 120 000.</text>
  <rect x="620" y="30" width="340" height="130" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="634" y="52" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">crm-stalled-deals</text>
  <rect x="634" y="62" width="73" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="670.5" y="74.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">0 8 ∗ ∗ 0-4</text>
  <rect x="720" y="62" width="63" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="751.5" y="74.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="944" y="52" fill="#4ade80" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">● on</text>
  <rect x="634" y="100" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="662.5" y="114.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Run now</text>
  <rect x="620" y="180" width="340" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="634" y="202" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">🔔 Notifications</text>
  <rect x="634" y="214" width="312" height="40" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="644" y="238" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2 affaires sans nouvelles depuis 14 jours</text>
  <rect x="10" y="100" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lecture seule</text>
  <text x="20" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dans le périmètre de l'utilisateur</text>
  <line x1="210" y1="117.0" x2="254" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu6-arrow)"/>
  <rect x="1000" y="40" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tâche quotidienne</text>
  <text x="1010" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">8 h, du lundi au vendredi</text>
  <line x1="1000" y1="57.0" x2="960" y2="60" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu6-arrow)"/>
  <rect x="1000" y="220" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Règle de notification</text>
  <text x="1010" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur succeeded, &#123;ROWS&#125;</text>
  <line x1="1000" y1="237.0" x2="960" y2="234" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu6-arrow)"/>
</svg>

---

## L'assistant IA

### Réglages

**Paramètres → App → Assistant IA** : **Activé**, la **Clé API Anthropic**, le **Modèle**, et **Connecteurs autorisés** `crm`. Enregistrer. Voir [Assistant IA](../ai-assistant.md).

### Accès

Dans le rôle `crm-sales`, **Beyond the menus** : **Allow** — *AI assistant*. Enregistrer. Bob dispose désormais d'un bouton **Assistant** en haut à droite.

### Descriptions

L'assistant choisit ses requêtes d'après leur libellé et leur description. Sur les requêtes de lecture du CRM (onglet Advanced de l'éditeur de requête), écrire deux phrases — ce que contiennent les lignes, à quelles questions la requête répond :

| Requête | Description |
|---|---|
| `customers_get` | `Clients avec secteur, pays, statut et e-mail. Pour les questions sur le portefeuille clients.` |
| `deals_get` | `Affaires avec client, étape, montant et date de clôture prévue. Pour les questions sur le pipeline.` |
| `pipeline_by_stage_get` | `Montant en cours par étape du pipeline. Pour les questions de répartition du pipeline.` |

### Essai

En Bob : *Quelles affaires sont en négociation ?* — *Quel est le montant en cours par étape ?* — *Quels clients n'ont aucune affaire ?*

L'assistant n'exécute que des requêtes de lecture, avec les droits et le périmètre de données de Bob : il ne voit que les clients français, et ne modifie jamais les données. Voir [Donner accès aux données à l'assistant IA](../cookbook/expose-to-ai.md).

---

## Une tâche quotidienne — les affaires en sommeil

Une affaire sans mise à jour depuis 14 jours est signalée, et l'équipe commerciale reçoit une notification.

### La requête

Ajouter une colonne `stalled` aux affaires, puis une requête d'écriture `flag_stalled_deals` :

```sql
ALTER TABLE deals ADD stalled VARCHAR(1) DEFAULT 'N';
```

```sql
UPDATE deals SET STALLED = 'Y'
WHERE STAGE NOT IN ('WON', 'LOST')
  AND COALESCE(UPDATED_AT, CURRENT_TIMESTAMP - INTERVAL '30' DAY) < CURRENT_TIMESTAMP - INTERVAL '14' DAY
  AND STALLED = 'N'
```

Ajouter `STALLED = 'N'` à `deals_put` : toute modification d'une affaire efface le signalement.

### La tâche

**Nomaflow → Jobs → + New job** :

| Champ | Valeur |
|---|---|
| Id | `crm-stalled-deals` |
| Description | `Signale les affaires sans nouvelles depuis 14 jours.` |
| Schedule | `0 8 * * 0-4` — 8 h, du lundi au vendredi (le jour 0 est le lundi) |
| Timezone | `Europe/Paris` |
| Étape | **Add step: `sql_query`**, nom `flag-stalled`, connecteur `crm`, requête `flag_stalled_deals`. |
| Alerts | **Send alerts**, **On failure**, destinataires `user:<identifiant>`. |

Enregistrer, puis **Exécuter avec des paramètres** pour l'exécuter une fois : le détail de l'exécution indique les lignes mises à jour. Voir [Créer une tâche](../../nomaflow/jobs/create.md).

### La notification

**Paramètres → Notifications**, une règle :

| Champ | Valeur |
|---|---|
| Déclencheur | Un événement de tâche — tâche `crm-stalled-deals`, événement `succeeded`. |
| Canaux | `portal` |
| Destinataires | `role:crm-sales` |
| Objet | `{ROWS} affaires sans nouvelles depuis 14 jours` |

L'équipe commerciale la trouve chaque matin dans la cloche. Un filtre sur `STALLED` dans l'écran Affaires les liste. Voir [Notifications](../../nomaflow/notifications.md).

---

## Bilan

Un CRM complet construit depuis les Paramètres :

- **Des écrans** — Clients, Affaires, et les Activités de chaque affaire.
- **Un tableau de bord** — le pipeline avec indicateurs, graphique et dernières activités.
- **Des rôles** — consultation et commercial, avec un périmètre de données par pays, et la connexion d'entreprise.
- **Un assistant IA** sur les requêtes du CRM, dans les droits de chaque utilisateur.
- **Une tâche quotidienne** qui signale les affaires en sommeil, avec une notification.

Le seul code écrit est du SQL.

---

## Pour aller plus loin

| Objectif | À lire |
|---|---|
| Appliquer la démarche à une autre base ou à un ERP | [Cas d'usage](../what-you-can-build.md) |
| Passer le CRM en production | [Liste de contrôle de production](../../installation/production.md) |
| Le transférer vers un autre environnement | [Packages](../build/packages.md) |
| Trouver une recette précise | [Cookbook](../cookbook/crud-existing-table.md) |
