---
title: Extraction BIP
description: "Extraire le contenu d'un job BIP (BI Publisher) depuis la file d'impression JD Edwards — XML d'entrée (F95630), sortie rendue (F95631) ou les deux — vers un répertoire du serveur NomaUBL."
keywords: [NomaUBL, BIP, BI Publisher, JD Edwards, JDE, extraction, F9563110, F95630, F95631, file d'impression, RJJOBNBR, XDJOBNBR, XML, PDF]
---

# Extraction BIP

L'écran **Extraction BIP** extrait le contenu d'un job de la **file d'impression BI Publisher (BIP)** d'une base JD Edwards vers un répertoire du serveur NomaUBL. Le contenu est lu dans les trois tables BIP configurées dans *Database Connectors → JD Edwards* :

- `F9563110` — Report Definition Job Control (l'index des jobs, clé `RJJOBNBR`).
- `F95630` — XMLP Data Output Repository (les BLOB de **XML d'entrée**).
- `F95631` — XMLP Output Repository (les BLOB de **sortie rendue** — typiquement PDF).

:::info[Page spécifique à JD Edwards]
Cette page fait partie des composants **spécifiques à JDE** de NomaUBL. Les autres pages d'extraction sont agnostiques de la source ; celle-ci ne s'applique que lorsque la source est JD Edwards et que la file d'impression BIP est le canal d'extraction.
:::

L'écran se divise en deux sections : **Parameters** et **Output**.

---

## Parameters

| Champ | Description |
|---|---|
| **Template** | Template du document (par ex. `invoices`, `credit_notes`). Sert uniquement à résoudre le placeholder `%TEMPLATE%` du répertoire de sortie par défaut hérité de `global.dirInput`. |
| **Job Number** | Numéro de job BIP JDE (`RJJOBNBR` dans `F9563110` / `XDJOBNBR` dans `F95630`). Obligatoire. |
| **Language** | Filtre optionnel sur la langue BIP (par ex. `FR`). Lorsque renseigné, seules les sorties correspondant à cette langue sont extraites. |
| **Extract Mode** | Détermine ce qui est extrait du job — `Extract Input (XML)`, `Extract Output` ou `Extract Both`. Voir ci-dessous. |

### Modes d'extraction

| Mode | Table source | Contenu |
|---|---|---|
| **Extract Input (XML)** | `F95630` | Le XML de données fourni à BI Publisher pour rendre le rapport. Utile pour rejouer le job BIP localement ou transformer les données via un XSL personnalisé. |
| **Extract Output** | `F95631` | Les BLOB de sortie rendus — typiquement PDF, mais XLS / HTML / RTF / ETEXT sont également pris en charge par BIP et extraits tels quels. |
| **Extract Both** | `F95630` + `F95631` | Les deux à la fois. |

---

## Output

| Champ | Description |
|---|---|
| **Output Directory** | Chemin local côté serveur NomaUBL où les fichiers extraits sont écrits. Pré-rempli depuis `global.dirInput` avec `%TEMPLATE%` remplacé par le template choisi. Modifiable directement ou via le bouton **dossier** qui ouvre un sélecteur de répertoire côté serveur. |
| **Extract** | Déclenche l'extraction. Le bouton s'active une fois le numéro de job et le répertoire de sortie renseignés. |

La convention de nommage des fichiers suit les métadonnées du rapport JDE — typiquement `<report>_<version>_<job>.<ext>` (par ex. `R42565_XJDE0001_123456.xml`). En mode *Extract Both*, le `.xml` et la sortie rendue partagent la même base de nom et sont donc déposés côte à côte dans le répertoire de sortie.

---

## Résultat

Après l'extraction, la section **Result** affiche :

- Un message vert **Extraction successful** — ou l'erreur renvoyée par l'API en cas d'échec.
- Le message renvoyé par le serveur (typiquement le chemin absolu des fichiers écrits).

---

## Conseils & bonnes pratiques

- **Les paramètres de connexion proviennent de *Database Connectors → JD Edwards*.** Le schéma et les trois noms de tables (`F95630` / `F95631` / `F9563110`) y sont configurés ; aucune surcharge n'est possible depuis cet écran.
- **Utiliser *Extract Input (XML)* lors de la mise au point d'un XSL.** Le XML de données BIP est exactement le contenu consommé par le moteur de rendu — l'injecter dans une chaîne BIP locale ou NomaUBL reproduit le rapport à l'identique.
- **Utiliser *Extract Output* lorsque le PDF rendu est le livrable.** C'est le mode courant pour les flux d'archivage ou d'envoi par e-mail qui consomment directement le PDF.
- **Le filtre Language ne porte que sur la sortie rendue.** Lorsque *Extract Mode* vaut *Extract Input (XML)*, la langue n'a pas d'effet — le XML de données est indépendant de la langue.
- **Pour une extraction en lot sur plusieurs jobs**, utiliser *Synchronisation → Fetch Input* avec la source BIP, qui découvre les nouveaux jobs et applique les mêmes modes d'extraction par template.
- **Conserver un répertoire de sortie dédié.** Les fichiers sont écrits sous leur nom dérivé de JDE ; un fichier existant à la même destination est écrasé sans avertissement.
