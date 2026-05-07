---
title: Versions de fichiers
description: "Naviguer dans l'arborescence de fichiers d'un environnement NomaUBL, consulter et restaurer les versions antérieures, éditer les fichiers texte dans l'application, visualiser les PDF, et exporter / importer des packages multi-fichiers entre environnements."
keywords: [NomaUBL, versions de fichiers, historique des versions, restauration, package, export, import, Monaco editor, visualiseur PDF, fichiers d'environnement, JD Edwards, SAP, NetSuite]
---

# Versions de fichiers

La page **File Versions** permet de parcourir tous les fichiers gérés par un environnement NomaUBL (XSL, RTF, XML, configuration, scripts…), de consulter l'**historique des versions** de chaque fichier, d'**éditer les fichiers texte**, de **visualiser les PDF**, de **restaurer une version antérieure** ou de **packager des fichiers** pour les transférer d'un environnement à un autre.

Le référentiel de fichiers est commun à tous les déploiements NomaUBL — la page s'applique que le système source soit JD Edwards, SAP, NetSuite ou tout autre ERP. Les artéfacts extraits depuis JDE coexistent avec les fichiers édités à la main ; leur origine est tracée dans l'historique (voir le badge *Source* ci-dessous).

---

## Disposition

La page est divisée en deux colonnes :

| Colonne | Contenu |
|---|---|
| **Barre latérale gauche** | Champ de recherche + arborescence de tous les fichiers versionnés de l'environnement. Les dossiers sont repliables et affichent le nombre de fichiers qu'ils contiennent. |
| **Panneau principal** | Barre d'outils + zone de contenu dont l'affichage dépend de la sélection courante (fichier courant + historique, sélection multiple, éditeur ou visualiseur PDF). |

---

## Barre latérale — arborescence des fichiers

| Élément | Description |
|---|---|
| **Champ de recherche** | Filtre en direct sur le chemin du fichier (correspondance partielle, insensible à la casse). |
| **Lignes dossier** | Une par répertoire. Cliquer pour développer ou replier. Le badge à droite indique le nombre total de fichiers contenus, en cumulant les sous-dossiers. |
| **Lignes fichier** | Une par fichier avec son nom court et sa taille (B / Ko / Mo). Cliquer pour sélectionner. |
| **Ligne « tout sélectionner »** *(mode package uniquement)* | Bascule la sélection de l'ensemble des fichiers filtrés. |

Quand le *mode Package* est actif, chaque ligne affiche aussi une case à cocher ; les cases des dossiers prennent un **état indéterminé** quand seuls certains enfants sont sélectionnés.

---

## Mode fichier unique (par défaut)

Sélectionner un fichier dans la barre latérale affiche son **historique de versions** dans le panneau principal.

La barre d'outils indique le chemin du fichier et propose le bouton **Téléverser une nouvelle version** (sélecteur de fichier — l'envoi remplace le fichier courant et archive automatiquement la version précédente dans l'historique).

### Tableau d'historique des versions

| Colonne | Description |
|---|---|
| **Version** | `live` pour le fichier courant, `v1`, `v2`… pour les versions historiques. |
| **Date** | Date de création de la version. |
| **Source** | Origine de la version — voir les [badges Source](#badges-source) ci-dessous. |
| **Comment** | Commentaire libre saisi lors de l'envoi (par ex. `Edited in browser`). |
| **Size** | Taille stockée de la version. |
| **Actions** | Boutons par ligne — voir les [actions par ligne](#actions-par-ligne) ci-dessous. |

### Badges Source

| Badge | Signification |
|---|---|
| `upload` *(bleu)* | Téléversement manuel depuis la barre d'outils, ou enregistrement depuis l'éditeur intégré. |
| `restore` *(orange)* | Version générée par restauration d'une version antérieure (le fichier courant précédent est alors archivé sous cette source). |
| `jde_bip` *(violet)* | Extrait depuis JD Edwards BIP — source spécifique à JDE. |
| *(autre)* | Toute autre origine reconnue par l'API. |

### Actions par ligne

| Icône | Disponible sur | Description |
|---|---|---|
| 👁 **Voir** | Ligne live, fichiers **PDF** | Ouvre le PDF en ligne dans le panneau principal via un `<iframe>`. |
| ✏️ **Modifier** | Ligne live, fichiers **texte** | Ouvre le fichier dans l'éditeur Monaco intégré. |
| ⬇ **Télécharger** | Toutes les lignes | Télécharge le fichier (live ou historique). Les versions historiques sont nommées `<fichier>.v<n>`. |
| 🔄 **Restaurer** | Lignes historiques uniquement | Restaure la version historique comme fichier courant. Une confirmation s'affiche au préalable ; le fichier courant précédent est archivé en nouvelle version `restore`. |

---

## Mode édition (fichiers texte)

Cliquer sur l'icône **Modifier** de la ligne live d'un fichier texte ouvre l'**éditeur Monaco** (le moteur utilisé par VS Code) directement dans le panneau principal.

| Aspect | Comportement |
|---|---|
| **Langages détectés** | `.xml` / `.xsl` / `.xslt` → XML ; `.json` → JSON ; `.css` → CSS ; `.js` → JavaScript ; `.html` / `.htm` → HTML ; tout le reste → texte brut. |
| **Extensions reconnues comme texte** | `xml`, `xsl`, `xslt`, `json`, `txt`, `cfg`, `csv`, `html`, `htm`, `css`, `js`, `properties`, `md`, `log`. |
| **Enregistrer** | Téléverse le contenu en nouvelle version avec le commentaire `Edited in browser`. Le fichier courant précédent est archivé automatiquement. |
| **Annuler** | Ferme l'éditeur sans enregistrer. |
| **Options éditeur** | Police monospace, minimap activée, `wordWrap: off`, tabulation 2, formatage au collage activé, thème sombre. |

---

## Visualiseur PDF

Cliquer sur l'icône **Voir** de la ligne live d'un PDF ouvre le fichier en ligne dans le panneau principal via un `<iframe>` sécurisé (le jeton d'authentification est transmis en paramètre de requête s'il est présent). Cliquer sur **Fermer** dans la barre d'outils pour revenir à l'historique des versions.

---

## Mode Package

Activer le bouton **Mode Package** dans la barre d'outils bascule la page d'actions par fichier vers une **sélection multi-fichiers** pour les transferts entre environnements.

| Action | Description |
|---|---|
| **Exporter** | Exporte tous les fichiers sélectionnés sous forme de package téléchargeable. La barre d'outils affiche le nombre de fichiers sélectionnés et la taille totale. |
| **Importer** | Importe un package préalablement exporté (`.zip`). Le message de statut indique le nombre de fichiers importés. |

Aides à la sélection :

- **Cases à cocher par fichier** dans l'arborescence
- **Case à cocher par dossier** — bascule l'ensemble des fichiers descendants ; affiche un état *indéterminé* en cas de sélection partielle.
- **Ligne « tout sélectionner »** en haut — bascule l'ensemble des fichiers du filtre courant.

Quitter le mode Package (en désactivant le bouton) vide la sélection.

---

## Messages de statut

Des messages en ligne s'affichent en haut du panneau principal et disparaissent automatiquement après 4 secondes :

- `Upload success — version N créée`
- `Restore success — version N restaurée`
- `Export success — N fichiers`
- `Import success — N fichiers`
- Le message d'erreur de l'API en cas d'échec.

---

## Conseils & bonnes pratiques

- **Utiliser l'éditeur pour les ajustements ponctuels**, le téléversement pour les remplacements en masse. L'éditeur enregistre une nouvelle version avec un commentaire `Edited in browser` clairement repérable dans l'historique.
- **Restaurer n'est pas destructif.** L'opération archive le fichier courant avant de restaurer la version historique, ce qui permet de revenir en arrière en cas d'erreur de manipulation.
- **Le mode Package est la méthode recommandée pour propager des modèles XSL / RTF de dev → recette → production.** Éviter les copies manuelles entre environnements — le packaging préserve les métadonnées de version.
- **Exclure les fichiers d'origine `jde_bip` pendant un packaging**, sauf si l'environnement cible pointe sur le même JDE — il s'agit en général de sorties spécifiques à un environnement, non transférables.
- **Surveiller le compteur de fichiers par dossier** en cas de travail sur de grandes arborescences XSL — c'est le moyen le plus rapide de repérer un sous-ensemble mal packagé.
- **Télécharger une version historique avant de la restaurer** pour garder une copie locale du fichier courant et de la version restaurée hors de NomaUBL.
