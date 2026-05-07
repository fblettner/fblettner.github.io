---
title: Extraction FTP
description: "Naviguer sur un serveur SFTP distant et télécharger un fichier vers un répertoire local du serveur NomaUBL — utilise les identifiants SFTP configurés dans Connecteurs FTP."
keywords: [NomaUBL, SFTP, FTP, extraction, navigation, téléchargement, JD Edwards, SAP, NetSuite, ERP personnalisé, navigateur de fichiers, dirInput]
---

# Extraction FTP

L'écran **Extraction FTP** permet de naviguer sur un serveur SFTP distant et de télécharger un fichier sélectionné dans un répertoire du serveur NomaUBL local. Les identifiants de connexion sont lus dans *Connecteurs FTP → SFTP Server* ; cette page ne traite que la navigation et le téléchargement.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé — tant que les fichiers de la source sont accessibles sur un serveur SFTP.

---

## Navigateur FTP

L'écran combine un navigateur de fichiers côté serveur, le répertoire de sortie local et le bouton de téléchargement dans une seule section.

### Barre de chemin

La barre en haut de la liste affiche le chemin SFTP courant. À l'ouverture, le chemin est vide (racine du `Directory` configuré dans *Connecteurs FTP*). Le bouton `..` remonte d'un niveau.

### Liste de fichiers

Une ligne par entrée. Les dossiers s'affichent dans la couleur d'accent avec une icône dossier — un clic ouvre leur contenu. Les fichiers utilisent l'icône XML et affichent leur taille en B / Ko / Mo — un clic les sélectionne. Un répertoire vide affiche une ligne `No files found`.

### Formulaire

| Champ | Description |
|---|---|
| **Selected** | Aperçu en lecture seule du chemin SFTP complet du fichier sélectionné. Visible une fois un fichier sélectionné. |
| **Output Directory** | Chemin local côté serveur NomaUBL où le fichier est écrit. Pré-rempli depuis `global.dirInput`, avec tous les placeholders (`%APP_HOME%`, `%ENV%`, `%PROCESS_HOME%`) résolus et `%TEMPLATE%` retiré. Modifiable. |
| **Download** | Déclenche le téléchargement SFTP. Le bouton s'active une fois un fichier sélectionné et le répertoire de sortie renseigné. |

---

## Résultat

Après le téléchargement, la section **Result** affiche le message de succès ou d'erreur renvoyé par l'API. La section apparaît dès qu'un téléchargement est lancé.

---

## Conseils & bonnes pratiques

- **Le répertoire de départ correspond au `Directory` défini dans *Connecteurs FTP → SFTP Server*.** La navigation au-dessus de cette racine est permise ; les répertoires accessibles dépendent du répertoire personnel de l'utilisateur SFTP côté serveur.
- **Le répertoire de sortie accepte tout chemin absolu** — la valeur par défaut résolue peut être modifiée manuellement avant le téléchargement.
- **La page télécharge un fichier à la fois.** Pour un téléchargement en lot, utiliser *Synchronisation → Fetch Input*, qui parcourt le répertoire SFTP selon les règles configurées.
- **Le fichier conserve son nom d'origine** côté local — il n'y a pas d'option de renommage ici. Renommage local possible ensuite si nécessaire.
