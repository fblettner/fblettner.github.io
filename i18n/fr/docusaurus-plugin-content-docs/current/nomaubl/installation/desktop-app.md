---
title: Application de bureau
description: "Installer NomaUBL comme application de bureau sous Windows et macOS depuis Chrome, Edge ou Safari : sa propre fenêtre et son icône, sans barres du navigateur, une application par environnement portant son nom, toujours à la version du serveur ; HTTPS requis."
keywords: [NomaUBL, application de bureau, PWA, installation, Chrome, Edge, Safari, Ajouter au Dock, Windows, macOS, HTTPS, environnement, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Application de bureau

NomaUBL s'installe comme **application de bureau** sous Windows et macOS. L'application s'ouvre dans sa propre fenêtre, avec sa propre icône, sans la barre d'adresse ni les onglets du navigateur, et figure dans le menu Démarrer, le Dock ou le lanceur d'applications comme tout autre logiciel. C'est l'application web du serveur : elle affiche toujours la version en service, rien n'est installé sur le poste en dehors du raccourci, et une mise à jour du serveur atteint aussitôt tous les utilisateurs.

---

## Installation

| Navigateur | Procédure |
|---|---|
| **Chrome** ou **Edge** (Windows, macOS) | Ouvrir NomaUBL, puis cliquer sur le bouton **Installer** de la barre d'adresse. |
| **Safari** (macOS) | Ouvrir NomaUBL, puis **Fichier › Ajouter au Dock**. |

Chaque environnement s'installe comme **une application distincte**, au nom de l'*Environment* des paramètres [Global](../configuration/system/global.md) : `NomaUBL · TEST`, `NomaUBL · PD`… ce qui évite de confondre une instance de recette et une instance de production. La fenêtre garde la barre de titre sombre et le logo complet de NomaUBL comme icône.

:::info[HTTPS requis]
Les navigateurs ne proposent l'installation que si le serveur est joint en **HTTPS** (ou sur `localhost`). Derrière un proxy inverse, publier NomaUBL avec un certificat — voir [Service et systemd](./service-and-systemd.md).
:::

---

## Ce que l'application ne change pas

- **Même connexion, mêmes droits.** L'application se connecte comme le navigateur et suit le rôle de l'utilisateur.
- **Pas de mode hors ligne.** Chaque écran est servi par le serveur ; sans connexion avec lui, l'application n'affiche rien.
- **Rien à mettre à jour sur le poste.** Elle se désinstalle comme toute autre application installée.
