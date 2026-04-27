---
title: Extraction d'archive
description: "Extraire un document de facture archivé depuis la base NomaUBL vers le disque — XML source (F564230) ou UBL 2.1 généré (F564231) — par clé documentaire (FEDOC / FEDCT / FEKCO)."
keywords: [NomaUBL, extraction, archive, facture, XML, UBL, F564230, F564231, FEDOC, FEDCT, FEKCO, JD Edwards, SAP, NetSuite, XML source, UBL généré]
---

# Extraction d'archive

L'écran **Extraction d'archive** lit une facture archivée depuis la base NomaUBL et écrit le fichier correspondant sur disque. Deux variantes sont prises en charge :

- **XML source** — le XML reçu lors de l'ingestion de la facture, stocké dans la table `F564230`.
- **UBL 2.1 généré** — le document UBL EN 16931 produit par NomaUBL à partir du XML source, stocké dans la table `F564231`.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou un ERP personnalisé — car l'archive est interne à NomaUBL. Les clés (`FEDOC` / `FEDCT` / `FEKCO`) reprennent la nomenclature JDE par convention historique ; ce sont fonctionnellement des identifiants applicables à tout document archivé.

---

## Paramètres de la requête base

Un seul formulaire pilote l'extraction.

| Champ | Description |
|---|---|
| **Template** | Template du document (par ex. `vrc_pro`, `isc_facture`). Sert uniquement à résoudre le placeholder `%TEMPLATE%` du répertoire de sortie par défaut hérité de `global.dirInput`. |
| **Source** | `XML — JDE Source (F564230)` extrait le XML reçu à l'ingestion. `UBL — Generated UBL 2.1 (F564231)` extrait le document UBL produit par NomaUBL à partir de ce XML. |
| **FEDOC** | Numéro du document — clé primaire de l'archive. |
| **FEDCT** | Type de document (par ex. `RI`, `RN`). |
| **FEKCO** | Code société (par ex. `00070`). |
| **Output Directory** | Chemin absolu côté serveur où le fichier est écrit. Pré-rempli depuis `global.dirInput`, avec `%TEMPLATE%` remplacé par le template choisi. Modifiable manuellement ou via le bouton **dossier** qui ouvre un sélecteur de répertoire côté serveur. |
| **Output File** | Aperçu en lecture seule du chemin du fichier de sortie (voir la convention de nommage ci-dessous). |

Cliquer sur **Extract XML** pour lancer l'extraction. Les trois clés (`FEDOC`, `FEDCT`, `FEKCO`) et le répertoire de sortie sont obligatoires pour activer le bouton.

---

## Convention de nommage du fichier de sortie

Le nom du fichier dérive directement des clés et de la source choisie :

| Source | Fichier de sortie |
|---|---|
| `XML` (source) | `<FEDOC>_<FEDCT>_<FEKCO>.xml` |
| `UBL` (généré) | `<FEDOC>_<FEDCT>_<FEKCO>_ubl.xml` |

Le suffixe `_ubl` distingue les deux variantes et permet leur cohabitation dans un même répertoire.

---

## Résultat

Après l'extraction, la section **Extraction Result** affiche :

- Un message vert **Extraction successful** — ou l'erreur renvoyée par l'API en cas d'échec.
- Le message renvoyé par le serveur (typiquement le chemin absolu du fichier écrit).

---

## Conseils & bonnes pratiques

- **Utiliser Source = UBL pour récupérer le document émis par NomaUBL** — utile pour une comparaison directe avec la réponse de la PA, ou pour revalider un UBL déjà archivé sans le régénérer.
- **Utiliser Source = XML pour inspecter le XML d'origine reçu à l'ingestion** sans solliciter le système amont.
- **Le Template ne sert qu'au calcul du chemin de sortie par défaut.** Lorsque le chemin manuel désigne déjà le bon répertoire, le Template peut rester vide.
- **Un fichier existant à la même destination est écrasé sans avertissement.** En cas d'extraction en lot via l'API, prévoir un répertoire de sortie dédié.
- **Le sélecteur de répertoire reconnaît les placeholders `%APP_HOME%` et `%PROCESS_HOME%`.** Un chemin contenant l'un de ces placeholders peut être saisi directement dans le champ ; l'API les résout côté serveur avant écriture.
