---
title: Validation
description: "Valider un document UBL face au schéma XSD et aux règles Schematron — UBL direct ou XML amont transformé en UBL via le pipeline XSL d'un template."
keywords: [NomaUBL, UBL, validation, XSD, Schematron, EN 16931, BR-FR, règles métier, XSL, transformation, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Validation

L'écran **Validation** exécute les contrôles **schéma XSD** et **règles métier Schematron** sur un document UBL. Deux types de source sont pris en charge :

- **XML (transform to UBL)** — le XML amont est d'abord transformé en UBL 2.1 via le pipeline XSL du template sélectionné, puis le résultat est validé.
- **UBL (validate directly)** — le document est déjà au format UBL 2.1 ; la validation s'effectue directement sur le fichier.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou un ERP personnalisé. La validation n'écrit rien en base, ne dépose rien sur la Plateforme Agréée et ne déclenche aucun autre effet de bord — il s'agit d'un contrôle en lecture seule.

---

## Input Configuration

| Champ | Description |
|---|---|
| **Source** | `XML (transform to UBL)` exécute d'abord la transformation XSL du template, puis valide l'UBL produit. `UBL (validate directly)` valide directement le fichier. |
| **Template** | Template du document (par ex. `invoices`, `credit_notes`). Obligatoire lorsque *Source* vaut `XML` ; masqué lorsque *Source* vaut `UBL`. Le template sélectionne le pipeline XSL appliqué et le jeu de règles Schematron actif. |
| **Input File** | Nom de base (sans extension) du fichier à valider (par ex. `invoice_001`). En source `XML`, le fichier est résolu dans le répertoire `dirInput` du template ; en source `UBL`, dans `dirInput/ubl/`. |

Deux boutons accompagnent le champ **Input File** :

| Bouton | Comportement |
|---|---|
| **Browse** (icône dossier) | Ouvre un sélecteur de fichiers côté serveur pour choisir un fichier existant. |
| **Upload** (icône envoi) | Téléverse un fichier `.xml` local dans le répertoire serveur approprié (`dirInput` du template pour `XML`, `dirInput/ubl/` pour `UBL`) et le sélectionne comme entrée. En source `XML`, un template doit être choisi au préalable. |

Cliquer sur **Validate UBL** pour lancer la validation.

---

## Validation Results

Après la validation, la section **Validation Results** affiche :

- Un message vert **Validation completed** — ou l'erreur renvoyée par l'API en cas d'échec.
- Une **table de logs structurée** avec une ligne par contrôle. Chaque ligne contient :

| Colonne | Description |
|---|---|
| **Severity** | `FATAL`, `ERROR`, `WARNING` ou `INFO`. `FATAL` et `ERROR` bloquent le dépôt sur la PA ; `WARNING` et `INFO` sont informatifs. |
| **Module** | Moteur de validation à l'origine de l'entrée — typiquement `XSD` (contrôle schéma) ou `Schematron` (règles métier). |
| **Submodule** | Identifiant de règle ou XPath ayant déclenché l'entrée (par ex. `BR-FR-12`, `cbc:CustomizationID`). |
| **Message** | Description lisible de l'échec ou de l'alerte. |

Les échecs XSD signalent un problème structurel (élément requis manquant, type incorrect). Les entrées Schematron correspondent à des règles métier (règles de base EN 16931, extensions françaises `BR-FR-*`, etc.) ; leur sévérité provient de l'attribut `flag`/`role` de la règle dans le fichier Schematron.

---

## Conseils & bonnes pratiques

- **Utiliser Source = UBL lorsque le document est déjà au format UBL** — typiquement pour revalider un document archivé ou un fichier produit par un autre outil. Aucun template n'est requis dans ce mode.
- **Utiliser Source = XML pour valider en une passe le flux amont et la transformation XSL** — utile lors de la mise au point d'un nouveau template avant mise en production, puisque la sortie XSL et les règles Schematron sont sollicitées simultanément.
- **Le sélecteur de template est aussi le sélecteur de jeu de règles.** Différents templates peuvent figer différentes versions de Schematron (par ex. EN 16931 ou extension française `extended-ctc-fr`). Choisir le template correspondant au profil réglementaire à valider.
- **La validation est en lecture seule.** Pour persister et déposer effectivement, utiliser *Processing → UBL* pour un document unique ou *Synchronisation → Fetch Input* pour un traitement en lot.
- **Le téléversement écrit le fichier dans le répertoire serveur approprié.** Après un téléversement réussi, le champ d'entrée se renseigne automatiquement avec le nom de base résolu, prêt pour la validation ou pour tout traitement ultérieur balayant ce même répertoire.
