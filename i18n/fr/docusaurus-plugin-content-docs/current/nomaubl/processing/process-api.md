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

## Vue d'ensemble

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="paui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="paui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="paui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="420" rx="14" fill="url(#paui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">API de traitement</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTEUR</text>
  <rect x="340" y="82" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="98" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">ppf-directory ▾</text>
  <text x="556" y="98" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENDPOINT</text>
  <rect x="618" y="82" width="160" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="628" y="98" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">lookupAddress ▾</text>

  <line x1="240" y1="120" x2="780" y2="120" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="144" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres</text>

  <rect x="240" y="158" width="540" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="173" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLÉ · VALEUR</text>

  <rect x="240" y="184" width="540" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="201" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">siret</text>
  <rect x="350" y="190" width="380" height="14" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="360" y="201" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">39239053100023</text>
  <text x="752" y="201" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="214" width="540" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="231" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">code_routage</text>
  <rect x="350" y="220" width="380" height="14" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="360" y="231" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">{`{{ recipient.routingCode }}`}</text>
  <text x="752" y="231" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="248" width="140" height="24" rx="5" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="310" y="264" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Ajouter un param</text>

  <rect x="640" y="248" width="140" height="28" rx="6" fill="url(#paui-g-blue)" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="710" y="266" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">▶ Exécuter</text>

  <line x1="240" y1="288" x2="780" y2="288" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="312" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Résultat</text>

  <rect x="240" y="326" width="120" height="22" rx="5" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="300" y="341" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">✓ HTTP 200</text>
  <text x="368" y="341" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VALEUR EXTRAITE</text>
  <rect x="460" y="326" width="320" height="22" rx="5" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="470" y="341" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">SIRET valide · PA : chorus-pro</text>

  <text x="240" y="368" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">URL</text>
  <rect x="280" y="358" width="500" height="20" rx="4" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="290" y="372" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">GET /ppf/v1/lookup?siret=39239053100023&amp;code=…</text>

  <text x="240" y="394" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CORPS</text>
  <rect x="240" y="402" width="540" height="32" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="417" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">{'{ "siret": "39239053100023", "status": "ACTIVE",'}</text>
  <text x="252" y="429" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">{'  "reachable": true, "plateforme": "chorus-pro" }'}</text>

  <rect x="20" y="82" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connecteur + endpoint</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">choisit l'appel</text>
  <line x1="220" y1="98" x2="340" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#paui-arrow)"/>

  <rect x="820" y="184" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="199" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Valeurs à l'exécution</text>
  <text x="830" y="212" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">alimente les placeholders</text>
  <line x1="820" y1="200" x2="780" y2="198" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#paui-arrow)"/>

  <rect x="820" y="326" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="341" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Statut + extraction</text>
  <text x="830" y="354" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">selon la règle du connecteur</text>
  <line x1="820" y1="342" x2="780" y2="338" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#paui-arrow)"/>

  <rect x="20" y="402" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="417" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Corps de réponse</text>
  <text x="30" y="430" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">JSON formaté</text>
  <line x1="220" y1="418" x2="240" y2="418" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#paui-arrow)"/>
</svg>

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
