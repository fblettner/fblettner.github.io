---
title: Documents
description: "Configurer la façon dont chaque type de document est extrait d'un spool XML source (JD Edwards, SAP, NetSuite, ERP personnalisé…) ou lu directement depuis une facture UBL, transformé pour traitement et rendu au format PDF."
keywords: [NomaUBL, documents, XPath, éclatement, bursting, source, idPattern, cbc:ID, UHTMPL, UBL, XSL, modèle PDF, ERP, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Documents

L'éditeur **Documents** définit comment NomaUBL transforme un **spool XML source** — ou une **facture UBL déjà formée** — en l'enregistrement sur lequel le reste de la plateforme s'appuie. NomaUBL **fonctionne quel que soit la source** : le même modèle de configuration fonctionne que le spool vienne de **JD Edwards**, SAP, NetSuite, d'un ERP personnalisé ou de tout autre système capable de produire du XML ou du UBL. (Seules les fonctions *Extract* et *synchronisation BIP* sont spécifiques à JD Edwards.)

Pour chaque type de document, trois éléments sont à renseigner :

1. **Origine de la donnée** — le sélecteur `source` choisit entre un spool XML qui demande une transformation XSL et une facture UBL 2.1 déjà structurée (onglet *Document*).
2. **Chaîne de transformation** de chaque document en UBL et PDF (onglet *Traitement*).
3. **Capacité de calcul** allouée à la transformation (onglet *Avancé*).

Un quatrième onglet — **PDF Template** — est dédié à la mise en page PDF par document (sections affichées, ordre, colonnes et bascules).

:::info[Page déplacée en 2026.05.0]
Les modèles de document figuraient auparavant sous *Configuration → Documents*. Ils sont désormais accessibles via **Gestion → Documents**, afin que le nouvel éditeur à quatre onglets — et tout particulièrement l'onglet visuel *PDF Template* — dispose d'une page à part entière. Le schéma et les routes restent inchangés : tout modèle existant continue de fonctionner sans étape de migration.
:::

## Charger un échantillon XML (optionnel, recommandé)

En haut de l'éditeur, cliquer sur **Charger un échantillon XML** et sélectionner un fichier de spool représentatif issu du système source. Une fois l'échantillon chargé, chaque champ XPath affiche un bouton **⌘** : il ouvre un panneau latéral qui liste tous les chemins de balises détectés dans l'échantillon, pour sélectionner la balise sans saisie manuelle. Le panneau permet de filtrer et affiche la valeur de chaque chemin pour faciliter le choix.

La configuration se fait aussi sans échantillon, mais le sélecteur réduit les risques d'erreur de saisie.

---

## Onglet 1 — 📄 Document

Cet onglet indique à NomaUBL **où trouver chaque information** sur les documents entrants.

### Source

| Champ | Valeurs | Description |
|---|---|---|
| **Source** | `XML` (défaut) / `UBL` | Sélectionne le pipeline d'entrée. **`XML`** conserve le comportement initial — un spool XML provenant de tout système source, transformé en UBL 2.1 par la chaîne XSL. **`UBL`** s'adresse aux fichiers déjà au format UBL 2.1 (l'ERP émet du UBL nativement, ou le fichier vient d'un système amont en UBL) ; aucune transformation XSL ne s'exécute. |

Ce choix bascule la suite de l'onglet entre deux ensembles de champs distincts. Les autres sections de la page — *Traitement*, *Avancé*, *PDF Template* — s'appliquent à l'identique aux deux sources.

### Extraction de clé depuis `cbc:ID` *(lorsque Source = UBL)*

Pour les factures UBL, la clé primaire `(doc, dct, kco)` — le triplet qui identifie le document partout ailleurs dans NomaUBL — est extraite du `cbc:ID` de la facture via une regex à **groupes nommés**. Aucune convention de nommage de fichier n'est exigée ; le fichier peut avoir n'importe quel nom.

| Champ | Description |
|---|---|
| **ID Pattern** | Regex appliquée à `cbc:ID`. Groupes autorisés : `doc`, `dct`, `kco`. Tout sous-ensemble est admis ; les groupes manquants sont remplis par les valeurs par défaut ci-dessous. |
| **doc default** | Utilisé quand la regex ne correspond pas ou que le groupe `doc` est absent. |
| **dct default** | Utilisé quand le groupe `dct` est absent. |
| **kco default** | Utilisé quand le groupe `kco` est absent — courant quand le `cbc:ID` n'inclut pas de code société. |

#### Assistant Sample cbc:ID + Suggérer + Tester

Pour éviter d'écrire la regex à la main, la section inclut un assistant en ligne :

| Action | Effet |
|---|---|
| **Sample cbc:ID** | Coller un ID réel issu d'une facture (par ex. `38706889RI00001` ou `F202600025`). |
| **Suggérer** | Génère un `idPattern` en segmentant l'échantillon sur les transitions lettres / chiffres, alimente les valeurs par défaut correspondantes et lance *Tester* sur le résultat. |
| **Tester** | Applique l'`idPattern` et les valeurs par défaut à l'échantillon et affiche en direct le `(doc, dct, kco)` extrait — vert en cas de correspondance, rouge sur erreur de regex. |

Exemples concrets :

| Échantillon | `idPattern` suggéré | Valeurs par défaut | Extraction |
|---|---|---|---|
| `F202600025` | `^(?<dct>[A-Z]+)(?<doc>\d+)$` | `kcoDefault = 00001` | `doc=202600025`, `dct=F`, `kco=00001` |
| `38706889RI00001` | `^(?<doc>\d+)(?<dct>[A-Z]+)(?<kco>\d+)$` | (aucune) | `doc=38706889`, `dct=RI`, `kco=00001` |

### Éclatement (Document Root) *(lorsque Source = XML)*

| Champ | Description |
|---|---|
| **Burst Key** | Nom de balise XML utilisé pour découper le spool en documents individuels. Cet élément marque la **racine d'un document** — chaque occurrence dans le spool produit un document de sortie. |

### Identification du document *(lorsque Source = XML)*

NomaUBL utilise ces cinq champs pour savoir **de quel document il s'agit**, à qui il appartient et à quel type métier il correspond. Chaque champ accepte une valeur par défaut si la balise est absente.

| Champ | Concept système source associé |
|---|---|
| **Activity** (activité) | Activité métier / module auquel appartient le document. |
| **Type** | Code de type de document tel que connu dans NomaUBL. |
| **Document ID** | Numéro de facture / numéro de document. |
| **Document Type (JDE)** | Type de document tel que défini dans le système source (nommé d'après les codes JD Edwards RI/RM, mais accepte n'importe quelle valeur source). |
| **Company (JDE)** | Société / unité métier propriétaire du document dans le système source (nom de champ historique, s'applique à tout ERP). |

### Données du document (XPath) *(lorsque Source = XML)*

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

> 💡 Chaque champ « Données du document » dispose de sa propre **valeur par défaut**. Les valeurs par défaut sont utilisées quand la balise XML est absente ou vide — pratique quand une valeur est constante pour un modèle donné.

---

## Onglet 2 — 🔧 Traitement

Cet onglet contrôle **ce que NomaUBL fait** des données extraites à l'onglet 1. Il s'applique aux deux sources `XML` et `UBL`, même si plusieurs champs (XSL, RTF) ne s'utilisent que sur le pipeline XML.

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
| **No-Data Key** | Nom d'un élément XML qui **doit exister** dans le spool. Si absent, NomaUBL considère le document comme vide et l'ignore. Utile pour écarter les sections de spool qui ne correspondent pas à des factures réelles. |
| **Set Locale** | Locale utilisée pour rendre le PDF (par ex. `en_US`, `fr_FR`). Affecte uniquement le formatage des dates et nombres dans le PDF. |

---

## Onglet 3 — ⚙️ Avancé

| Champ | Description |
|---|---|
| **Number of CPUs** | Nombre de threads parallèles utilisés par la chaîne de traitement pour ce type de document. Augmenter pour accélérer le traitement des spools volumineux, diminuer si l'hôte est à court de mémoire. Valeur par défaut : `4`. |

---

## Onglet 4 — 🖼 PDF Template

Le quatrième onglet désigne la **mise en page PDF** appliquée au rendu de ce document. Depuis la version 2026.05.1, les mises en page sont des ressources partageables à part entière, stockées dans `config-pdf.json` et éditées sur la page dédiée [Modèles PDF](./pdf-templates.md). Cet onglet en référence une simplement **par son nom**, via la propriété `pdfTemplate` du modèle.

| Champ | Description |
|---|---|
| **PDF Template** | Liste déroulante qui regroupe toute mise en page enregistrée (les ressources `pdf-template` issues de *Modèles PDF*) et la `built-in` livrée. Laisser vide pour basculer sur le défaut global (`global.defaultPdfTemplate`). Champ vide et défaut global vide ramènent à `built-in`. |

La chaîne de résolution au moment du rendu se lit donc : ce champ → `global.defaultPdfTemplate` → `built-in`. Chaque facture enregistrée contient le nom du modèle de document dans `F564231.UHTMPL`, ce qui permet au générateur PDF de regénérer à la demande avec la mise en page active pour ce document.

:::tip[Édition de la mise en page]
L'éditeur visuel — liste de sections, tiroir par section, aperçu en direct, sections block — se trouve sur la page [Gestion → Modèles PDF](./pdf-templates.md). Y rédiger ou affiner une mise en page une seule fois, puis revenir ici pour y rattacher le document. Une même mise en page peut servir plusieurs documents.
:::

---

## Conseils & bonnes pratiques

- **Toujours définir des valeurs par défaut** sur les champs « Identification du document » — elles couvrent les variations de spool où une balise peut être ponctuellement absente.
- **Pour les sources UBL, utiliser *Suggérer*** pour amorcer la regex — l'assistant gère les cas courants (chiffres seuls, lettres + chiffres, chiffres + lettres + chiffres). Ajustement manuel uniquement quand le format est inhabituel.
- **Laisser Processing Type vide** sauf besoin de surcharger la valeur par défaut du type de document ; cela évite la duplication de la configuration.
- Pour un nouveau type de document, **commencer par charger un échantillon XML**, configurer l'onglet 1 à l'aide du sélecteur, puis tester sur quelques documents avant d'affiner la chaîne XSL de l'onglet 2.
- Le **Burst Key est le champ XML le plus critique** — une valeur erronée produit soit un document géant unique, soit aucun document.
- **Éditer la mise en page PDF sur sa page dédiée.** [Modèles PDF](./pdf-templates.md) accueille l'éditeur visuel et l'aperçu en direct ; cet onglet permet uniquement de la sélectionner. Partager une même mise en page entre plusieurs documents évite d'éditer N copies dès qu'une mention légale ou un jeu de colonnes évolue.
