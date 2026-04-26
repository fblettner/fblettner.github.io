---
title: Connecteurs FTP
description: "Configurer l'accès SFTP au serveur d'entreprise JD Edwards pour permettre à NomaUBL de récupérer les spools directement dans le PrintQueue JDE."
keywords: [NomaUBL, FTP, SFTP, JD Edwards, JDE, serveur d'entreprise, Enterprise Server, PrintQueue, spool, extraction]
---

# Connecteurs FTP

Cet écran configure l'**accès SFTP au serveur d'entreprise JD Edwards** afin que NomaUBL puisse récupérer les **spools directement dans le PrintQueue JDE**. Il s'agit du mode d'extraction par fichier, en alternative — ou en complément — à l'extraction depuis la base BIP définie dans *Database Connectors → JD Edwards*.

:::info[Page spécifique à JD Edwards]
Cette page fait partie des composants **spécifiques à JDE** de NomaUBL. Les autres pages de Configuration sont agnostiques de la source (JDE, SAP, NetSuite, ERP personnalisé) ; celle-ci ne s'applique que lorsque la source est JD Edwards et que les spools doivent être récupérés dans le répertoire PrintQueue du serveur d'entreprise.
:::

---

## SFTP Server

| Champ | Description |
|---|---|
| **Host** | Nom d'hôte ou IP du serveur d'entreprise JDE accessible en SFTP (par ex. `sftp.example.com`). |
| **Port** | Port SFTP. Valeur par défaut `22`. |
| **User** | Compte SFTP disposant d'un accès en lecture au répertoire PrintQueue. |
| **Password** | Mot de passe associé au compte SFTP. |
| **Directory** | Chemin absolu du répertoire PrintQueue sur le serveur d'entreprise (par ex. `/u01/jde/PrintQueue/`). NomaUBL liste ce répertoire pour identifier les spools candidats à la récupération. |

---

## Conseils & bonnes pratiques

- **Utiliser un compte SFTP dédié restreint au PrintQueue.** Un compte à privilèges minimaux simplifie l'audit et la révocation, et limite les conséquences en cas de fuite des identifiants.
- **Valider la connexion SFTP depuis un client autonome** (par ex. `sftp user@host`) avant enregistrement, en particulier le chemin **Directory** — une faute de frappe se traduit silencieusement par « aucun spool trouvé ».
- **Combiner ce connecteur avec celui de la base BIP lorsque les deux modes de récupération sont utilisés.** Le SFTP récupère le fichier spool ; le connecteur BIP récupère les BLOB de sortie rendus. Les deux sont indépendants et peuvent cohabiter.
- **Vérifier que le serveur d'entreprise conserve les spools assez longtemps** pour que l'intervalle d'interrogation de NomaUBL puisse les détecter — les jobs de purge JDE peuvent supprimer les spools plus vite que le rythme d'interrogation NomaUBL.
