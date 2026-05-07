---
title: Visualiseur XML
description: "Ouvrir n'importe quel fichier XML — local ou serveur — dans un éditeur Monaco avec coloration syntaxique, mise en forme automatique, numéros de ligne et enregistrement serveur. Le complément léger du validateur et de l'Éditeur XSL."
keywords: [NomaUBL, XML, visualiseur, éditeur, Monaco, mise en forme, pretty-print, JD Edwards, SAP, NetSuite, ERP personnalisé, UBL, spool source, BIP]
---

# Visualiseur XML

Le **Visualiseur XML** ouvre n'importe quel fichier `.xml` — choisi sur l'ordinateur local ou à un chemin du serveur NomaUBL — dans un éditeur **Monaco** complet avec coloration syntaxique XML, numéros de ligne, minimap et mise en forme automatique. Le tampon est éditable directement et peut être réécrit vers un chemin serveur.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. C'est un éditeur générique pour tout XML manipulé par la plateforme : documents UBL, spools sources bruts, XML de données BIP, rapports de validation, extraits de configuration.

Le visualiseur n'effectue aucune validation, aucune transformation et aucun dépôt — c'est un outil volontairement léger, complémentaire des écrans spécialisés :

- Pour **transformer** un XML source en UBL : *Outils UBL → Éditeur XSL*.
- Pour **valider** un UBL ou un XML source : *Outils UBL → Valider*.
- Pour **inspecter une facture archivée** par clé documentaire : *Extract → Extraction d'archive*.

---

## Barre d'outils

| Élément | Description |
|---|---|
| **Load from computer** | Ouvre le sélecteur de fichiers du système d'exploitation. Le `.xml` choisi est lu côté navigateur, mis en forme et chargé dans l'éditeur. Le champ de chemin serveur est pré-rempli avec le nom local du fichier — un **Save to server** ultérieur écrira le fichier sous ce nom. |
| **Load from server** | Ouvre un navigateur de fichiers côté serveur. Le fichier sélectionné est lu via l'API et chargé dans l'éditeur ; le champ de chemin serveur reçoit le chemin absolu, ainsi **Save to server** réécrit le fichier en place. |
| **Server path** | Chemin absolu modifiable utilisé par **Save to server**. Pré-rempli par les deux actions de chargement ; modifiable librement avant l'enregistrement — pratique pour un effet *Save As*. |
| **Format** | Met en forme le tampon courant (ré-indentation, retours à la ligne). Actif une fois un fichier chargé. |
| **Save to server** | Écrit le tampon courant à l'emplacement **Server path** via l'API. Actif une fois un fichier chargé et le chemin renseigné. |

---

## Zone d'édition

Une fois un fichier chargé, l'éditeur occupe le reste de la page. Il s'appuie sur le même moteur Monaco et le même thème que l'*Éditeur XSL* :

- Coloration syntaxique XML et appariement des balises
- Numéros de ligne, minimap, thème sombre
- `tabSize: 2`, `wordWrap: 'off'`, mise en forme automatique au collage

Tant qu'aucun fichier n'est chargé, un **état vide** est affiché à la place — un clic dessus déclenche le sélecteur de fichiers local (équivalent de **Load from computer**).

---

## Messages de statut

Un message en ligne s'affiche en haut de la zone d'édition après chaque action :

- `Loaded: <nom>` (info, bleu) au chargement d'un fichier.
- `Saved to: <chemin>` (succès, vert) à la suite d'un enregistrement réussi.
- Le message d'erreur renvoyé par l'API en cas d'échec de chargement ou d'enregistrement (rouge).

---

## Conseils & bonnes pratiques

- **Utiliser Format après un collage.** La mise en forme automatique au collage gère les ajouts ponctuels ; pour un XML reçu sur une seule ligne, le bouton **Format** restitue la lisibilité.
- **Modifier le champ Server path avant d'enregistrer** permet d'écrire le fichier à un autre emplacement — un *Save As* intégré.
- **Le visualiseur n'écrase rien automatiquement, sauf via Save.** Charger un autre fichier remplace le tampon sans toucher au disque ; seul **Save to server** enregistre.
- **Pour des transformations répétables, préférer l'Éditeur XSL.** L'édition à la main produit un résultat ponctuel ; l'Éditeur XSL applique le même mapping à chaque facture suivante.
- **Pour la validation, préférer l'écran Validate.** Le visualiseur n'exécute ni XSD ni Schematron — il affiche simplement le XML brut.
