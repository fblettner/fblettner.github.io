---
title: Récupération des factures
description: "Configurer les jobs JD Edwards BI Publisher (BIP) que NomaUBL récupère pour traitement par lot, et le modèle de document à utiliser pour chacun."
keywords: [NomaUBL, récupération factures, fetch invoices, BIP, BI Publisher, JD Edwards, JDE, traitement par lot, scheduler, modèle de document, filtre report]
---

# Récupération des factures

L'éditeur **Fetch Invoices** détermine quels **jobs JD Edwards BI Publisher (BIP)** NomaUBL récupère pour traitement. Il est utilisé par l'import batch et par l'ordonnanceur en arrière-plan pour identifier *les sorties BIP éligibles* et *le modèle de document à appliquer à chacune*.

:::info[Page spécifique à JD Edwards]
Cette page est l'une des parties **spécifiques à JDE** de NomaUBL — elle s'appuie sur un serveur BIP JD Edwards. Les autres pages de configuration sont, elles, agnostiques de la source.
:::

---

## BIP Report Filters

Liste des reports BIP que NomaUBL est autorisé à récupérer. Chaque ligne constitue un filtre : NomaUBL ne met en file d'attente que les jobs BIP dont le nom de **Report** (et éventuellement la **Version**) correspond à une ligne. Lorsque la table est **vide**, NomaUBL récupère **l'ensemble des jobs** — utile en phase de test, à éviter en production.

### Champs par ligne

| Colonne | Description |
|---|---|
| **Report** | Nom du report BIP (par ex. `R42565`). |
| **Version** | Version précise du report à autoriser (par ex. `FBL00001`). Désactivée lorsque **All Versions** est coché. |
| **All Versions** | Lorsque coché, toutes les versions du report sont acceptées et le champ **Version** est vidé / désactivé. |
| **Template** | **Modèle de document** NomaUBL utilisé pour **produire la pièce jointe PDF** lors de la génération de l'UBL à partir de cette sortie BIP. **Obligatoire** lorsque le type de document produit un UBL avec pièce jointe PDF (la liste déroulante affiche les modèles de type `document` définis dans votre environnement — voir *Configuration → Documents*). |

Utilisez le bouton **+ Add Report** pour ajouter une ligne, et le bouton **×** d'une ligne pour la supprimer.

### Utilisation

- **Traitement par lot** — lors d'un import manuel, seuls les jobs dont le Report (et la Version, sauf si All Versions est coché) correspond à une ligne sont mis en file d'attente.
- **Ordonnanceur** — en mode serveur, le même filtre s'applique à chaque cycle d'interrogation.
- **Template** — dès qu'un job correspond, NomaUBL utilise le **modèle de document** configuré pour produire le PDF qui sera joint à l'UBL lors de la génération. Le modèle fournit la chaîne RTF / XSL définie dans *Configuration → Documents*. Il est **obligatoire** dès lors que le type de document produit un UBL avec pièce jointe PDF.

---

## Conseils & bonnes pratiques

- **Toujours configurer au moins un filtre en production.** Une liste vide entraîne la récupération de l'ensemble des jobs BIP de l'environnement JDE connecté, ce qui est généralement trop large.
- **Utiliser All Versions avec parcimonie.** Pertinent lorsqu'il existe de nombreuses versions ad hoc d'un même report ; sinon, préférer fixer une Version précise par ligne afin de maîtriser le périmètre traité.
- **Une ligne par tuple (Report, Version, Template).** Si un même report nécessite des modèles distincts selon la version, ajouter plusieurs lignes.
- **Ne pas omettre d'affecter un Template.** Une ligne sans modèle filtrera correctement les jobs, mais la génération UBL échouera à produire la pièce jointe PDF lorsqu'elle est attendue.
