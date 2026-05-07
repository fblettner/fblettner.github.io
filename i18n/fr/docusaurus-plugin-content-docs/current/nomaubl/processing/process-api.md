---
title: API de traitement
description: "Exécuter un endpoint de connecteur API défini dans Configuration → API Connectors — choix d'un connecteur et d'un endpoint, surcharge des paramètres à l'exécution, lecture de la réponse HTTP et de toute valeur extraite."
keywords: [NomaUBL, traitement, API, connecteur, endpoint, REST, HTTP, paramètres, placeholder, valeur extraite, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# API de traitement

L'écran **Process API** exécute un appel HTTP sortant sur un **endpoint de connecteur API** défini dans *Configuration → API Connectors*. C'est un outil d'exécution et de test : choisir un connecteur, sélectionner l'un de ses endpoints, renseigner ou surcharger les valeurs des paramètres, et examiner la réponse.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé — les connecteurs API étant des appels sortants génériques. À utiliser pour déclencher manuellement une étape d'intégration, diagnostiquer la configuration d'un connecteur avant son utilisation dans un flux en lot, ou rejouer un endpoint avec d'autres valeurs de paramètres.

La définition du connecteur (modèle d'URL, méthode HTTP, en-têtes, paramètres par défaut, règle d'extraction de la réponse) se trouve dans *Configuration → API Connectors*. Cette page ne modifie aucune de ces données ; elle ne fait que les exécuter.

---

## API Connector

| Champ | Description |
|---|---|
| **Connector** | Liste déroulante de tous les templates de type `api-connector` (voir *Configuration → API Connectors*). Le choix d'un connecteur charge ses endpoints. |
| **Endpoint** | Liste déroulante des endpoints déclarés sur le connecteur sélectionné. Chaque option affiche le nom de l'endpoint et, si défini, un libellé lisible. Désactivé tant qu'aucun connecteur n'est choisi. |

Le choix d'un endpoint pré-remplit aussi la section **Paramètres** avec les paramètres déclarés et leurs valeurs par défaut.

---

## Paramètres

Le tableau des paramètres permet de définir ou de surcharger les valeurs qui alimentent les placeholders (les jetons `{{placeholder}}` définis dans le modèle d'URL / de corps / d'en-tête de l'endpoint).

| Colonne | Description |
|---|---|
| **Clé** | Nom du paramètre. Doit correspondre à un `{{placeholder}}` défini dans l'URL ou le corps de l'endpoint. |
| **Valeur** | Valeur d'exécution. Substituée au placeholder avant l'envoi de l'appel. |

Chaque ligne dispose d'un bouton corbeille pour la supprimer. Le bouton **Ajouter un paramètre** ajoute une ligne vide. Les lignes dont la clé est vide sont ignorées à l'exécution.

Quand un endpoint est sélectionné, le tableau est pré-rempli à partir de la définition de paramètres de l'endpoint (paires `nom|Libellé|valeur_par_défaut;...` déclarées dans le connecteur). Modifier les valeurs, ajouter des lignes pour des placeholders ponctuels ou supprimer celles qui ne doivent pas être envoyées.

---

## Résultat

Cliquer sur **Exécuter** pour lancer l'appel. Le bouton reste désactivé tant qu'un connecteur et un endpoint ne sont pas tous les deux sélectionnés.

La section de résultat affiche :

| Élément | Description |
|---|---|
| **Statut HTTP** | Code de statut HTTP renvoyé par l'endpoint, avec `✓` (vert) en cas de succès ou `✗` (rouge) en cas d'échec. |
| **Valeur extraite** | Quand le connecteur définit une règle d'extraction (par ex. JSONPath / XPath), la valeur extraite apparaît à côté du statut. Pratique pour chaîner des connecteurs — la valeur extraite peut être référencée par un appel suivant. |
| **URL** | URL de requête entièrement résolue (placeholders substitués, query string incluse). En lecture seule. |
| **Corps** | Corps de la réponse. Les réponses JSON sont mises en forme automatiquement ; les corps non-JSON sont affichés tels quels. |

---

## Conseils & bonnes pratiques

- **Utiliser cette page pour diagnostiquer un connecteur avant son utilisation.** Vérifier la substitution dans l'URL, la forme de la réponse et la règle d'extraction avant de raccorder le connecteur à un flux en lot.
- **La syntaxe des placeholders est `{{name}}`.** Les doubles accolades dans les modèles d'URL et de corps de l'endpoint marquent les points de substitution. Les clés du tableau Paramètres doivent correspondre exactement — sensibles à la casse, sans espace.
- **Une valeur vide est envoyée comme une chaîne vide, pas comme un paramètre absent.** Pour ignorer entièrement un paramètre, supprimer la ligne.
- **La valeur extraite dépend de la règle d'extraction du connecteur.** Pas de règle d'extraction → pas de valeur extraite, quelle que soit la réponse. La règle se configure sur le connecteur lui-même (*Configuration → API Connectors*).
- **Les identifiants côté serveur viennent du template de connecteur.** Cette page ne contient aucun identifiant ; le template les garde et l'exécution serveur ajoute les bons en-têtes.
