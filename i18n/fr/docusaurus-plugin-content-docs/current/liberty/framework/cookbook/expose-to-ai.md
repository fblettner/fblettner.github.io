---
title: Donner accès aux données à l'assistant IA
description: "Recette — choisir les connecteurs que l'assistant IA peut lire, restreindre les écritures, rédiger une bonne description d'outil pour que le modèle choisisse la bonne requête. La différence entre un assistant utile et un assistant qui hallucine."
keywords: [Liberty Framework, cookbook, AI, assistant, IA, accès, tool description, scoping, périmètre]
---

# Donner accès aux données à l'assistant IA

## Le problème

L'assistant IA du framework exécute les mêmes requêtes de connecteur que l'interface — mais il ne peut choisir le bon outil que si vous lui indiquez ce que fait chacun d'eux. Un connecteur rendu visible à l'assistant avec une description floue (« get data ») sera choisi au hasard ; un connecteur avec une description claire de deux phrases sera choisi correctement.

Cette recette couvre le **cadrage** — quels connecteurs l'assistant voit, quels chemins d'écriture il peut emprunter, comment rédiger les descriptions que le modèle utilise.

## Le modèle

Trois couches de cadrage, chacune indépendante :

| Couche | Emplacement | Effet |
|---|---|---|
| **Par connecteur — Expose to AI** | Paramètres → Connecteurs → \<connecteur\> → sous-formulaire Connection. | Désactivé → aucune des requêtes du connecteur n'apparaît dans la liste d'outils. |
| **Par requête — Operation type** | Paramètres → Connecteurs → \<connecteur\> → \<requête\> → Operation. | Les requêtes `Read` sont visibles par défaut (quand le switch du connecteur est activé) ; les requêtes `Write` demandent une activation supplémentaire. |
| **Par rôle — `ai:chat` + `ai:tool:<name>`** | Paramètres → Rôles. | Même une requête visible est masquée à un appelant sans `ai:chat`. La permission fine `ai:tool:<name>` permet d'autoriser les outils rôle par rôle. |

Combinées, ces couches font que l'assistant voit exactement ce que chaque utilisateur est censé voir — ni plus, ni moins.

## La recette

### 1. Régler le switch Expose to AI du connecteur

Ouvrez le connecteur. Le sous-formulaire *Connection* contient un switch **Expose to AI assistant** vers le bas. Activé par défaut quand vous créez un nouveau connecteur.

Désactivez-le pour les connecteurs qui contiennent :

- Des données sensibles que l'assistant ne doit pas faire remonter (données personnelles, montants financiers au-delà d'un seuil, tout ce que l'équipe juridique a signalé).
- Des connecteurs internes du framework ou de débogage (`liberty-self`, technical-dashboard).
- Des connecteurs opérationnels qui n'ont de sens que dans un parcours d'interface (la resoumission BIP du tutoriel JDE).

### 2. Rédiger de bonnes descriptions de requête

Chaque requête de lecture a un champ **Description**. Ce texte est transmis au modèle comme description de l'outil. Le modèle choisit les outils à partir de cette chaîne.

| Bon | Mauvais |
|---|---|
| `Returns every invoice in a period with customer, amount, status. Use to answer questions about invoicing volume, recent invoices, status distribution.` | `Get invoices` |
| `Counts deals per stage of the sales pipeline. Use for pipeline-distribution questions.` | `Aggregate deals` |
| `Lists customer activities (calls, meetings, emails) ordered most-recent-first. Filter by customer or by date.` | `Activities` |

Deux schémas qui fonctionnent :

1. **Ce qu'elle renvoie** — une phrase qui décrit les lignes.
2. **Quand l'utiliser** — une phrase qui oriente le modèle vers la forme de question à laquelle elle répond.

Les deux dans la langue de l'utilisateur (l'assistant s'aligne sur la langue de la question).

### 3. Activer explicitement les requêtes d'écriture

Les requêtes d'écriture sont **exclues par défaut** même quand le connecteur est visible par l'assistant — le framework ne veut pas que l'assistant déclenche des écritures non voulues.

Pour activer une requête d'écriture :

| Paramètre | Effet |
|---|---|
| Sur la requête → switch **Expose to AI assistant** | Quand il est activé, la requête apparaît dans la liste d'outils avec le suffixe `:write`. |
| Sur les rôles autorisés à déclencher des écritures IA | Ajoutez la permission `ai:write`. |

Réservez cela aux écritures **relançables sans risque, à faible impact** (une relecture d'une API externe, le basculement d'un drapeau, le déclenchement d'une synchronisation). Jamais pour des `DELETE`.

### 4. Filtrage par rôle avec `ai:tool:<name>`

Pour un contrôle plus fin, la permission `ai:tool:&lt;connector&gt;__&lt;query&gt;` filtre chaque outil individuellement. Par défaut, accorder `ai:chat` rend visible chaque outil de lecture que l'utilisateur peut exécuter ; ajouter `ai:tool:billing__*` restreint à la facturation.

Recettes de rôles typiques :

| Rôle | Permissions |
|---|---|
| `crm-viewer` | `ai:chat` + (implicite : tous les outils de lecture qu'il peut exécuter). |
| `crm-power-user` | `ai:chat` + `ai:tool:deals__*` + `ai:write`. Les « outils d'écriture » n'apparaissent qu'à cause du `ai:write` explicite. |
| `data-analyst` | `ai:chat` seul, mais un ensemble de permissions de lecture beaucoup plus large sur les requêtes sous-jacentes — l'assistant en hérite. |

### 5. Vérifier ce que chaque rôle voit

Le point d'accès `GET /ai/tools` renvoie la liste d'outils telle que l'utilisateur appelant la verrait. Utilisez-le pour confirmer le cadrage :

```bash
curl -H "Authorization: Bearer $(get_token alice)" \
     http://127.0.0.1:8000/ai/tools | jq '.[].name'
```

La liste doit correspondre aux permissions de lecture de l'utilisateur. Si un outil attendu manque, vérifiez le switch *Expose to AI* du connecteur et la permission de l'utilisateur sur la requête sous-jacente.

## Erreurs courantes

| Erreur | Symptôme |
|---|---|
| **Connecteur visible mais description vide** | Le modèle choisit des outils au hasard, hallucine des noms de paramètres. |
| **Requête d'écriture visible sans `ai:write` sur aucun rôle** | La requête apparaît dans `GET /ai/tools` mais l'assistant refuse de l'appeler (« you don't have permission to write »). |
| **Plusieurs requêtes avec des descriptions similaires** | Le modèle prend la première par ordre lexicographique et ignore les autres. Différenciez les descriptions. |
| **Description dans une langue, requête dans une autre** | Le modèle se trouble. Alignez la langue de la description du connecteur sur la `session.lang` de l'utilisateur. |

## Variantes

| Vous voulez… | Faites ceci |
|---|---|
| **Limiter l'IA à une seule application** | Ne donnez pas `ai:chat` aux utilisateurs des autres applications. Ou n'accordez que `ai:tool:crm__*`. |
| **Un plafond journalier d'appels IA par utilisateur** | Réglez `[ai] max_messages_per_day` dans les paramètres du framework ; le framework refuse au-delà du plafond. |
| **Que le modèle ne voie jamais de vraies données personnelles** | Marquez la colonne `Rule = PASSWORD` dans l'entrée du dictionnaire — l'IA reçoit `••••` dans le résultat de l'outil, et non la valeur sous-jacente. |
| **Un connecteur précis visible uniquement par les admins** | Réglez la permission de la requête sous-jacente sur `sql:financial:*` et ne l'accordez qu'à `admin` ; `Expose to AI` peut rester activé — le framework filtre. |

## Pour aller plus loin

- [Assistant IA](../ai-assistant.md) pour la surface complète du chat.
- [Rôles et permissions](../build/secure/roles-and-permissions.md) pour la famille de permissions `ai:*`.
- [Tutoriel CRM → Étape 6](../tutorial-crm/06-ai-and-jobs.md) pour un cas de bout en bout.
