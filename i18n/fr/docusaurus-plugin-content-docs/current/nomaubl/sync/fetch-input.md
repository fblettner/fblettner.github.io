---
title: Récupération des entrées
description: "Automatisation en lot de Extract and Process — balayage d'un répertoire ou de la file d'impression BIP, sélection des éléments dans une liste à cocher, puis exécution du même pipeline Extract → Process sur chaque élément retenu."
keywords: [NomaUBL, sync, fetch input, lot, batch, BIP, répertoire, last job number, JD Edwards, SAP, NetSuite, ERP personnalisé, balayage, sélection, traitement]
---

# Récupération des entrées

L'écran **Fetch Input** est l'**automatisation en lot** de [*Processing → Extract and Process*](../processing/extract-and-process.md). Il parcourt un répertoire de fichiers ou la file d'impression BIP, identifie les candidats, puis exécute le même pipeline Extract → Process sur chaque élément retenu.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé — sauf pour la source BIP, qui est spécifique à JD Edwards.

La sémantique unitaire (résolution du mode, validation, persistance, dépôt PA, post-génération BIP) est documentée dans [*Extract and Process*](../processing/extract-and-process.md). Cette page ne documente que ce qui relève du fonctionnement en lot : l'enchaînement balayage → sélection → traitement, les sources, la récupération incrémentale via **Last Job Number** et les résultats agrégés.

---

## Vue d'ensemble du pipeline

<svg viewBox="0 0 1000 540" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fi-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <linearGradient id="fi-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="fi-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="fi-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="370" y="20" width="260" height="60" rx="10" fill="url(#fi-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="44" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Configuration</text>
  <text x="500" y="62" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">Process Type + source + paramètres</text>
  <rect x="410" y="110" width="180" height="60" rx="10" fill="url(#fi-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="500" y="146" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🔎 Balayage</text>
  <line x1="500" y1="80" x2="500" y2="110" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fi-arrow)"/>
  <rect x="410" y="200" width="180" height="50" rx="10" fill="url(#fi-g-blue)" stroke="#4a9eff" strokeWidth="1.5" strokeDasharray="6 3"/>
  <text x="500" y="222" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Source</text>
  <text x="500" y="240" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">décision</text>
  <line x1="500" y1="170" x2="500" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fi-arrow)"/>
  <rect x="40" y="290" width="280" height="80" rx="10" fill="url(#fi-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="180" y="316" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 Liste jobs BIP</text>
  <text x="180" y="334" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">jobNumber &gt; Last Job Number</text>
  <text x="180" y="354" fill="currentColor" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">BIP Queue</text>
  <rect x="680" y="290" width="280" height="80" rx="10" fill="url(#fi-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="820" y="316" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📁 Liste fichiers .xml</text>
  <text x="820" y="334" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">dirInput/template/ ou /ubl/</text>
  <text x="820" y="354" fill="currentColor" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">Input Directory</text>
  <path d="M 410 230 L 380 230 L 380 300 L 320 300" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#fi-arrow)"/>
  <path d="M 590 230 L 620 230 L 620 300 L 680 300" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#fi-arrow)"/>
  <rect x="370" y="300" width="260" height="80" rx="10" fill="url(#fi-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="500" y="326" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">☑ Liste des candidats</text>
  <text x="500" y="346" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">cases à cocher</text>
  <text x="500" y="362" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">Select / Deselect All</text>
  <line x1="320" y1="350" x2="370" y2="340" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#fi-arrow)"/>
  <line x1="680" y1="350" x2="630" y2="340" stroke="#4a9eff" strokeWidth="1.4" markerEnd="url(#fi-arrow)"/>
  <rect x="370" y="410" width="260" height="60" rx="10" fill="url(#fi-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="500" y="436" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙ Pour chaque élément retenu</text>
  <text x="500" y="454" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">pipeline Extract and Process</text>
  <line x1="500" y1="380" x2="500" y2="410" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fi-arrow)"/>
  <text x="510" y="395" fontSize="9" fill="#4a9eff" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">Traitement sélection</text>
  <rect x="370" y="490" width="260" height="44" rx="9" fill="url(#fi-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="500" y="510" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📊 Résultats agrégés</text>
  <text x="500" y="525" fill="currentColor" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">Total / Succeeded / Failed</text>
  <line x1="500" y1="470" x2="500" y2="490" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#fi-arrow)"/>
</svg>

L'enchaînement est en **deux étapes** : un appel Scan recense les candidats sans déclencher de traitement ; l'utilisateur coche les éléments à conserver puis clique sur Process. L'étape de traitement parcourt la sélection en appliquant le pipeline Extract and Process par élément.

---

## Processing Options

La première section configure **comment chaque élément retenu est traité**. La sémantique correspond à [*Extract and Process — Traitement*](../processing/extract-and-process.md#traitement) ; cette page expose les mêmes options, qui s'appliquent ensuite à chaque élément retenu.

| Champ | Description |
|---|---|
| **Source** *(affichage en lecture seule)* | `XML` ou `UBL`. Inférée depuis la propriété `source` du modèle choisi — réglée sur la page [Documents](../management/documents.md), pas ici. Sélectionne le pipeline. Voir [*Traitement de document*](../processing/document.md) pour la sémantique unitaire. |
| **Mode** *(source XML uniquement)* | `AUTO`, `SINGLE`, `BURST` ou `UBL`. Voir [*Traitement de document — Modes (source XML)*](../processing/document.md#modes-source-xml). |
| **Mode** *(UBL uniquement)* | `Process & Validate` ou `Validate only`. |
| **Replace** | `Skip` laisse intactes les factures existantes ; `Overwrite` les ré-importe. |
| **Send to PA** | `Use settings` (défaut), `Skip sending`, ou `Force send` (UBL uniquement). |

Ces options s'appliquent uniformément à **tous** les éléments de la sélection. Pour traiter un sous-ensemble avec des options différentes, exécuter la page deux fois — une exécution par jeu d'options.

---

## Extract Options

La seconde section choisit la **source** et ses paramètres.

| Champ | Description |
|---|---|
| **Template** | Obligatoire si *Process As = XML*. Sélectionne le pipeline XSL appliqué à chaque élément. Masqué en mode UBL (les fichiers UBL sont repris directement depuis `dirInput/ubl/`). |
| **Source** | `BIP Queue` (spécifique à JD Edwards) ou `Input Directory`. |

### Source = BIP Queue

| Champ | Description |
|---|---|
| **Language** | Filtre optionnel sur la langue BIP (par ex. `FR`). |
| **Extract Mode** | `Extract Input (XML)`, `Extract Output` ou `Extract Both`. Voir [*Extract BIP*](../extract/extract-bip.md) pour la sémantique. |
| **Last Job Number** | Pré-rempli depuis `global.lastBipJobNumber`. L'appel Scan ne retourne que les jobs dont `jobNumber > Last Job Number`. Le champ est modifiable pour rebalayer une autre plage, mais la configuration globale est mise à jour avec le plus grand numéro de job traité après chaque lot — la récupération incrémentale est le mode par défaut. |

### Source = Input Directory

Le balayage retourne tous les fichiers `.xml` présents dans :

- `dirInput/<template>/` quand *Process As = XML* ;
- `dirInput/ubl/` quand *Process As = UBL*.

Aucun paramètre supplémentaire — chaque fichier du répertoire est un candidat.

---

## Balayage et sélection

Cliquer sur **Scan** pour alimenter la **liste des candidats**. La liste affiche une ligne par candidat avec une case à cocher ; les lignes sont sélectionnées par défaut. Au-dessus de la liste :

| Élément | Description |
|---|---|
| **Compteur** | `N file(s) found in <repertoire>` (mode Directory) ou `N new job(s) after #<lastJob>` (mode BIP). |
| **Select All / Deselect All** | Bascules de masse. |

Chaque ligne porte le nom de base du fichier (mode Directory) ou le nom de base du job BIP (mode BIP). Décocher une ligne l'exclut de l'appel Process suivant, sans modifier le répertoire ni la file BIP sous-jacents.

Cliquer sur **Process (N)** pour exécuter la sélection. Le bouton se désactive durant l'exécution et durant le balayage.

---

## Résultats

À l'issue du traitement, la section affiche un récapitulatif agrégé et la liste des résultats par élément.

### Bandeau de résumé

| Métrique | Description |
|---|---|
| **Total** | Nombre d'éléments traités. |
| **Succeeded** | Éléments terminés sans ligne `ERROR` ni `FATAL`. Les lignes `WARNING` ne comptent pas comme un échec. |
| **Failed** | Éléments ayant produit au moins une ligne bloquante. |

### Lignes par élément

Chaque élément apparaît sur une ligne avec un marqueur ✓ vert (succès) ou ✗ rouge (échec). **Cliquer sur une ligne déplie** la table de logs sous-jacente (mêmes colonnes que sur la page [*Traitement de document*](../processing/document.md) : `Severity / Module / Submodule / Message`).

Quand la source est BIP et que le traitement réussit, l'appel **Apply post-generation** s'exécute après chaque élément — exactement comme dans [*Extract and Process*](../processing/extract-and-process.md). Le `lastBipJobNumber` global est aussi mis à jour avec le plus grand numéro de job traité, ainsi le prochain Scan ne retourne que les jobs plus récents.

---

## Conseils & bonnes pratiques

- **Utiliser Fetch Input pour les exécutions automatisées.** Cette page est l'équivalent en lot de *Extract and Process* ; l'étape de sélection manuelle la rend adaptée aux traitements de fin de journée ou aux exécutions planifiées.
- **Garder `Last Job Number` comme repère.** La valeur par défaut correspond au dernier numéro de job traité avec succès — la laisser inchangée est la méthode standard pour la récupération incrémentale. Abaisser la valeur manuellement permet de relancer le traitement de jobs antérieurs.
- **Balayer d'abord, traiter ensuite.** L'enchaînement en deux étapes existe à dessein : une liste de candidats périmée, un mauvais choix de template ou une source erronée se manifeste dès la liste de candidats — avant tout effet de bord.
- **`Select All` et `Deselect All` sont des raccourcis en tête de liste.** Quand la liste comporte des centaines de lignes, basculer en masse puis affiner est plus rapide qu'un cochage individuel.
- **Décocher plutôt que supprimer.** Retirer le fichier sous-jacent ou le job BIP pour l'exclure est destructif ; un décochage sur cette page est réversible — la ligne réapparaît au prochain Scan si la source la conserve.
- **Pour BIP, `Apply post-generation` met à jour le repère.** Un job traité avec succès met automatiquement à jour `global.lastBipJobNumber` — aucune intervention manuelle n'est nécessaire.
