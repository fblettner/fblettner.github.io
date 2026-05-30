---
title: Assistant IA
description: "Le framework propose un assistant Anthropic avec usage d'outils sur /chat. Chaque requête SQL et chaque endpoint HTTP des connecteurs accessibles à l'appelant devient un outil que l'assistant peut sélectionner. Configuration via ANTHROPIC_API_KEY, contrat de génération des outils, filtrage par rôle et historique des conversations."
keywords: [Liberty Framework, assistant IA, chat, Anthropic, tool use, claude, connecteurs comme outils, ANTHROPIC_API_KEY, conversation, /chat]
---

# Assistant IA

Le framework embarque un **assistant conversationnel** intégré, accessible sur `/chat`. L'assistant repose sur un modèle Claude d'Anthropic avec **usage d'outils** activé : chaque requête SQL et chaque endpoint HTTP des connecteurs accessibles à l'appelant est présenté au modèle sous forme d'outil. L'utilisateur pose sa question en langage naturel ; le modèle choisit le bon outil, l'exécute, lit le résultat puis répond.

L'intégration est optionnelle (aucun appel à l'IA n'a lieu sans clé API) et respecte le modèle de permissions du framework : l'assistant ne voit et n'exécute que ce que l'utilisateur appelant peut lui-même voir et exécuter.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="ai-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="ai-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#ai-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Le déroulement d'un tour de conversation</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="160" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · QUESTION UTILISATEUR</text>
  <text x="160" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">question en langage naturel</text>

  <rect x="280" y="100" width="200" height="60" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="380" y="124" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · LISTE D'OUTILS</text>
  <text x="380" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">filtrée par permission</text>

  <rect x="500" y="100" width="200" height="60" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="600" y="124" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · LE MODÈLE CHOISIT</text>
  <text x="600" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">connecteur + paramètres</text>

  <rect x="720" y="100" width="220" height="60" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="830" y="124" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · LE FRAMEWORK EXÉCUTE</text>
  <text x="830" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">mêmes permissions qu'un appel direct</text>

  <line x1="260" y1="130" x2="280" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#ai-arrow)"/>
  <line x1="480" y1="130" x2="500" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#ai-arrow)"/>
  <line x1="700" y1="130" x2="720" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#ai-arrow)"/>

  <rect x="60" y="200" width="880" height="80" rx="10" fill="rgba(74,158,255,0.04)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="76" y="222" fill="#4a9eff" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">5 · LE MODÈLE FORMULE LA RÉPONSE</text>
  <text x="76" y="244" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">— lit le résultat de l'outil, peut appeler un autre outil pour affiner —</text>
  <text x="76" y="264" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">— diffuse la réponse en langage naturel vers le panneau de discussion —</text>
</svg>

---

## Configuration

Deux variables d'environnement et un bloc de configuration :

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
```

```toml
# app.toml
[ai]
provider = "anthropic"
api_key  = "${ANTHROPIC_API_KEY}"
model    = "claude-sonnet-4-6"
max_tokens = 4096
tool_concurrency = 4
```

| Champ | Description |
|---|---|
| `provider` | `anthropic`. Seul fournisseur pris en charge aujourd'hui. |
| `api_key` | Clé d'API. Toujours référencer une variable d'environnement. |
| `model` | Identifiant du modèle Anthropic. Valeur par défaut `claude-sonnet-4-6`. Passer à `claude-opus-4-7` pour un raisonnement plus poussé, à `claude-haiku-4-5` pour des tours plus rapides et moins coûteux. |
| `max_tokens` | Plafond par réponse de l'assistant. Valeur par défaut 4096. |
| `tool_concurrency` | Nombre maximal d'appels d'outils en parallèle par tour. Valeur par défaut 4. |

Quand `api_key` est vide ou absent, la page `/chat` affiche un message « configurer une clé d'API pour activer l'assistant ». Toutes les autres fonctions du framework continuent de fonctionner.

---

## Le contrat de génération des outils

Le framework construit la liste d'outils transmise au modèle à partir du catalogue des connecteurs. Chaque candidat devient une définition d'outil composée de :

| Champ | Source |
|---|---|
| `name` | Identifiant nettoyé du connecteur et de la requête / endpoint (`invoices__invoices_for_period`, `crm__get_customer`). Snake_case minuscule, pour respecter les règles de nommage d'outils Anthropic. |
| `description` | La `description` du connecteur, complétée par la `description` de la requête / endpoint dans `connectors.toml`. Les libellés localisés du dictionnaire y sont intégrés. |
| `input_schema` | Un schéma JSON dérivé de la déclaration `params` de la requête : nom, type, description (depuis `label`), drapeau requis, énumération (depuis `lookup`). |

Chaque appel d'outil est **restreint au périmètre de l'utilisateur appelant** : le framework vérifie sa permission sur le connecteur sous-jacent avant l'exécution, exactement comme pour un appel REST direct. Un utilisateur sans `sql:invoices:invoices-for-period` ne voit jamais l'outil correspondant dans sa session de discussion.

### Ce qui est mis à disposition

Par défaut, chaque requête en lecture seule accessible à l'utilisateur devient un outil. Les requêtes en écriture sont **exclues**, sauf si l'entrée de connecteur définit `expose_to_ai = true`. Deux raisons :

- **Prévisibilité** : l'assistant invente parfois des paramètres ; une écriture non voulue est plus difficile à corriger qu'une lecture non voulue.
- **Clarté de l'audit** : une écriture déclenchée par la discussion doit suivre le même circuit de revue qu'une écriture déclenchée par l'interface.

Pour les installations qui souhaitent autoriser l'assistant à écrire, définir `expose_to_ai = true` sur les connecteurs / requêtes concernés, puis ajouter la permission explicite `ai:tool:<name>` au rôle voulu.

---

## La page `/chat`

Une mise en page sur deux colonnes :

| Colonne | Contenu |
|---|---|
| **Gauche — conversation** | Fil des messages. Les messages utilisateur à droite (bleu), ceux de l'assistant à gauche (gris). Les appels d'outils sont repliés sous des accordéons indiquant le nom de l'outil, les paramètres d'entrée et le nombre de résultats. |
| **Droite — contexte** | Les métadonnées de la conversation active : nombre de tours, total de tokens consommés, liste des outils que le modèle peut choisir (restreinte par permission). Une bascule pour effacer la conversation. |

La zone de saisie en bas accepte le texte brut, `↵` pour envoyer et `⇧↵` pour un saut de ligne.

### Historique des conversations

Les conversations sont enregistrées dans `ly2_ai_conversations` et `ly2_ai_messages` au nom de l'utilisateur appelant. Rouvrir la page `/chat` reprend la conversation la plus récente ; la bascule de la colonne droite en démarre une nouvelle.

La rétention se configure via `[ai] history_days` dans `app.toml` (valeur par défaut 30 jours). La suppression d'une conversation est en cascade : les messages, les entrées d'outils et les sorties d'outils partent ensemble.

### Partager une conversation

Une action *Partager* sur une conversation terminée produit un lien en lecture seule, accessible aux porteurs de la permission `ai:read-shared`. La vue partagée est **statique** : elle affiche la conversation en l'état, aucun tour supplémentaire ne peut y être ajouté. Pratique pour transmettre une investigation à un collègue.

---

## Limites d'usage des outils

Le modèle peut appeler plusieurs outils par tour, en séquence ou en parallèle jusqu'à `tool_concurrency`. Le framework impose trois limites strictes pour garder les coûts prévisibles :

| Limite | Valeur par défaut | Signification |
|---|---|---|
| `max_tools_per_turn` | 10 | Au-delà, le framework refuse tout appel d'outil supplémentaire dans le tour en cours et demande au modèle de finaliser sa réponse. |
| `max_tokens_per_conversation` | 100 000 | Au-delà, la conversation est **clôturée** : l'utilisateur peut la lire mais ne peut plus envoyer de nouveau tour. Une nouvelle conversation doit être démarrée. |
| `[ai.daily_limits].messages` | Dépend de la licence | Nombre total de tours d'assistant par utilisateur et par jour. Affiche un avertissement à 80 %, refuse de nouveaux tours à 100 %. |

Les limites sont affichées dans la colonne droite de la page de discussion : une jauge de tokens et un compteur quotidien.

---

## Permissions

| Code | Effet |
|---|---|
| `ai:chat` | Utiliser la page `/chat`. Requis pour chaque tour interactif. |
| `ai:tool:<name>` | Utiliser un outil spécifique. Caractères génériques : `ai:tool:invoices__*` autorise tous les outils de facturation. Par défaut, **la permission de l'outil suit celle du connecteur sous-jacent** : un `ai:tool:*` explicite n'est nécessaire que quand le connecteur est ouvert à l'IA mais qu'un sous-ensemble doit être restreint. |
| `ai:share` | Utiliser l'action *Partager* pour produire un lien en lecture seule. |
| `ai:read-shared` | Ouvrir une conversation partagée. |
| `ai:write` | Utiliser les outils que le framework considère en écriture (`expose_to_ai = true` sur une requête en écriture). |

Voir [Rôles et permissions](./build/secure/roles-and-permissions.md) pour le processus d'affectation des rôles.

---

## Surface REST

Pour l'automatisation, l'assistant est joignable directement via REST — même modèle, même liste d'outils, mêmes permissions :

```http
POST /ai/chat
Authorization: Bearer <token>
Content-Type: application/json

{
  "conversation_id": "c-1234",
  "message": "How many invoices did we issue in April?"
}
```

La réponse est **diffusée en flux** au format `text/event-stream` (SSE) — un événement par bloc de tokens, plus des événements distincts pour les appels d'outils, les résultats d'outils et la réponse finale. Une variante non diffusée est disponible sur `/ai/chat?stream=false`.

`GET /ai/tools` liste les outils que l'utilisateur appelant peut invoquer — la même liste que voit le modèle. Utile pour déboguer le périmètre des permissions.

---

## Conseils et bonnes pratiques

- **Rédiger une bonne `description` sur chaque connecteur et chaque requête.** Le modèle choisit les outils à partir de la description ; des descriptions vagues (« récupérer des données ») le perdent. Deux phrases dans la langue de l'utilisateur, nommant l'entité et le cas d'usage type, donnent les meilleurs résultats.
- **Définir des `enum` explicites sur les paramètres.** Un paramètre `status` avec `lookup = "invoice-statuses"` permet au modèle de choisir dans l'ensemble connu plutôt que d'inventer une valeur.
- **Garder `tool_concurrency` bas en développement.** Les appels d'outils parallèles génèrent une charge concurrente sur la base qui peut masquer des problèmes apparaissant en production en mode séquentiel.
- **Utiliser `claude-haiku-*` pour les installations sensibles au coût.** Haiku est nettement moins cher que Sonnet pour la même surface de discussion ; le compromis se trouve dans la qualité du raisonnement sur les questions à étapes multiples.
- **Ne pas ouvrir les requêtes en écriture par défaut.** Commencer en lecture seule ; activer `expose_to_ai = true` requête par requête, au fur et à mesure que l'équipe prend confiance dans le comportement de l'assistant.
- **Auditer la surface IA.** `GET /ai/tools` pour un rôle arbitraire est la vérification la plus rapide avant d'accorder `ai:chat`.

---

## Pour aller plus loin

- [Référence API REST → `/ai/*`](./rest-api.md#ai) — le contrat de l'endpoint de chat.
- [Concepts → Connecteurs](./connectors.md) — les champs `description` et `expose_to_ai`.
- [Authentification → Rôles et permissions](./build/secure/roles-and-permissions.md) — la famille de permissions `ai:*`.
- [Configuration → `app.toml`](./configuration/app-toml.md) — la référence du bloc `[ai]`.
