---
title: Documents
description: "Configurer la façon dont chaque type de document est extrait d'un spool XML source (JD Edwards, SAP, NetSuite, ERP personnalisé…), transformé en UBL et routé pour traitement."
keywords: [NomaUBL, documents, configuration, XPath, éclatement, bursting, UBL, XSL, XML source, ERP, JD Edwards, SAP, NetSuite]
---

# Documents

L'éditeur **Documents** définit la façon dont NomaUBL transforme un **spool XML source** en documents UBL individuels. NomaUBL est **agnostique de la source** — le même modèle de configuration fonctionne que le spool provienne de **JD Edwards**, SAP, NetSuite, d'un ERP personnalisé ou de tout autre système capable de produire du XML. (Seules les fonctions *Extract* et *synchronisation BIP* sont spécifiques à JD Edwards.)

Pour chaque type de document, trois éléments doivent être renseignés :

1. **Stratégie d'éclatement du spool** en un document par facture (onglet *Document*).
2. **Chaîne de transformation** de chaque document en UBL et PDF (onglet *Traitement*).
3. **Capacité de calcul** allouée à la transformation (onglet *Avancé*).

## Charger un échantillon XML (optionnel, recommandé)

En haut de l'éditeur, cliquer sur **Charger un échantillon XML** et sélectionner un fichier de spool représentatif issu du système source. Une fois l'échantillon chargé, chaque champ XPath affiche un bouton **⌘** : il ouvre un panneau latéral listant tous les chemins de balises détectés dans l'échantillon, ce qui permet la sélection de la balise sans saisie manuelle. Le panneau permet le filtrage et affiche la valeur de chaque chemin pour faciliter le choix.

La configuration peut être effectuée sans échantillon, mais le sélecteur réduit les risques d'erreur de saisie.

---

## Onglet 1 — 📄 Document

Cet onglet définit pour NomaUBL **l'emplacement de chaque information** dans le spool XML source. Chaque champ attend le **nom d'une balise XML** (et non un chemin complet). Lorsque la balise est absente du spool, la **valeur par défaut** indiquée à côté est utilisée.

### Éclatement (Document Root)

| Champ | Description |
|---|---|
| **Burst Key** | Nom de balise XML utilisé pour découper le spool en documents individuels. Cet élément marque la **racine d'un document** — chaque occurrence dans le spool produit un document de sortie. |

### Identification du document

NomaUBL utilise ces cinq champs pour savoir **de quel document il s'agit**, à qui il appartient et à quel type métier il correspond. Chaque champ accepte une valeur par défaut si la balise est absente.

| Champ | Concept système source associé |
|---|---|
| **Activity** (activité) | Activité métier / module auquel appartient le document. |
| **Type** | Code de type de document tel que connu dans NomaUBL. |
| **Document ID** | Numéro de facture / numéro de document. |
| **Document Type (JDE)** | Type de document tel que défini dans le système source (nommé d'après les codes JD Edwards RI/RM, mais accepte n'importe quelle valeur source). |
| **Company (JDE)** | Société / unité métier propriétaire du document dans le système source (nom de champ historique, s'applique à tout ERP). |

### Données du document (XPath)

Données fonctionnelles que NomaUBL lit dans le spool pour alimenter la facture UBL et piloter le routage.

| Champ | Description |
|---|---|
| **Customer Number** | Numéro client / numéro d'adresse. |
| **Amount** | Montant brut du document. |
| **Document Date** | Date d'émission du document. |
| **Due Date** | Date d'échéance du paiement. |
| **Routing Code** | Code utilisé pour router le document vers le bon **canal de distribution** : archivage, envoi par e-mail, envoi par courrier, transmission vers une Plateforme Agréée, etc. |
| **Office** | Balise XML du spool contenant le code **bureau / unité opérationnelle**. |
| **Processing Type** | Balise XML portant le code de type de traitement (B2B, B2BINT…). Laisser vide pour utiliser la **valeur par défaut définie dans Types de documents**. |

> 💡 Chaque champ « Données du document » dispose de sa propre **valeur par défaut**. Les valeurs par défaut sont utilisées lorsque la balise XML est absente ou vide — pratique lorsqu'une valeur est constante pour un modèle donné.

---

## Onglet 2 — 🔧 Traitement

Cet onglet contrôle **ce que NomaUBL fait** des données extraites à l'onglet 1.

### Transformation XSL

| Champ | Valeurs | Description |
|---|---|---|
| **Transform** | `Y` / `N` | Active ou non la chaîne de transformation XSL avant la génération UBL. |
| **XSL Pre-processing** | chemin | XSL optionnelle appliquée avant l'indexation, par exemple pour normaliser le XML source brut (JD Edwards, SAP, NetSuite, ERP personnalisé…). |
| **XSL Indexation** | chemin | XSL utilisée pour générer l'indexation / les métadonnées appliquées au document. Produit un fichier XML associé au PDF généré, utilisé pour l'indexation. |
| **RTF Template** | chemin | Modèle RTF utilisé par BI Publisher pour produire le PDF lisible. |

### UBL

| Champ | Valeurs | Description |
|---|---|---|
| **UBL XSLT** | chemin | Transformation XSL du XML source vers l'**UBL 2.1**. Le placeholder `%APP_HOME%` est remplacé par la racine d'installation de NomaUBL. |
| **Attachment** | `— Aucun` / `create` / `attach` | Comment associer le PDF lisible à l'UBL : `create` = générer le PDF et l'incorporer dans le fichier UBL ; `attach` = utiliser un PDF déjà présent dans le répertoire d'entrée ; vide = aucun PDF incorporé. |

### Sortie

| Champ | Description |
|---|---|
| **No-Data Key** | Nom d'un élément XML qui **doit exister** dans le spool. Si absent, NomaUBL considère le document comme vide et l'ignore. Utile pour écarter les sections de spool qui ne correspondent pas à des factures effectives. |
| **Set Locale** | Locale utilisée pour rendre le PDF (par ex. `en_US`, `fr_FR`). Affecte uniquement le formatage des dates et nombres dans le PDF. |

---

## Onglet 3 — ⚙️ Avancé

| Champ | Description |
|---|---|
| **Number of CPUs** | Nombre de threads parallèles utilisés par la chaîne de traitement pour ce type de document. Augmenter pour accélérer le traitement des spools volumineux, diminuer si l'hôte est sous tension mémoire. Valeur par défaut : `4`. |

---

## Conseils & bonnes pratiques

- **Toujours définir des valeurs par défaut** sur les champs « Identification du document » — elles couvrent les variations de spool où une balise peut être ponctuellement absente.
- **Laisser Processing Type vide** sauf nécessité de surcharger la valeur par défaut du type de document ; cela évite la duplication de configuration.
- Pour un nouveau type de document, **commencer par charger un échantillon XML**, configurer l'onglet 1 à l'aide du sélecteur, puis tester sur quelques documents avant d'affiner la chaîne XSL de l'onglet 2.
- Le **Burst Key est le champ le plus critique** — une valeur erronée produit soit un document géant unique, soit aucun document.
