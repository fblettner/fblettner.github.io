---
title: Explorateur de données
description: "L'analyse libre des données de sécurité et de développement de JD Edwards EnterpriseOne dans l'explorateur de données de Nomajde : les modèles Sécurité et Développement, leurs analyses et leur tableau de bord livrés, les modèles fournis par les préréglages JDE, et les libellés du dictionnaire de données."
keywords: [Nomajde, explorateur de données, JD Edwards, JDE, sécurité, utilisateurs, rôles, enregistrements de sécurité, sécurité UDO, environnements, Object Librarian, préréglages, dictionnaire de données]
---

# Explorateur de données

**Explorateur de données**, juste sous **Vue d'ensemble** dans le menu de Nomajde, ouvre l'explorateur sur les données de JD Edwards EnterpriseOne : lignes, mesures, filtres et période choisis dans une liste de champs, présentés en tableau, en croisé, en graphique ou en KPI, puis enregistrés, partagés, réunis en tableau de bord et exportés. Les chiffres sont lus en direct dans JD Edwards, avec les droits de l'utilisateur.

Le fonctionnement de l'explorateur est décrit dans la [documentation de Liberty Next](../framework/explorer/analysis.md). Cette page présente ce que livre Nomajde.

---

## Sécurité \{#security\}

Les utilisateurs (F0092) avec leur nom du carnet d'adresses, leurs relations de rôles (F95921) et leurs rôles (F00926), leurs enregistrements de sécurité (F00950) et leur sécurité UDO (F00950W), leurs environnements (F0093).

**Analyses** : *Users*, *Users by type*, *Users by language*, *Users with the most roles*, *Users per role*, *Security records by type*, *Secured objects per user or role*, *Environments per user*.

**Tableau de bord** *Security overview* : les utilisateurs par type, les rôles qui comptent le plus de membres, les utilisateurs qui cumulent le plus de rôles, les enregistrements de sécurité par type.

---

## Développement \{#development\}

L'Object Librarian (F9860) : les objets par type et par code produit.

**Analyses** : *Objects by type*, *Objects by product code*.

---

## Modèles fournis par les préréglages JDE \{#presets\}

Les préréglages JD Edwards de l'[assistant de création d'écran](../framework/build/screen-assistant.md) fournissent aussi à l'explorateur des modèles prêts à l'emploi, construits d'après les modèles de données Oracle E1 : la table pivot et les tables qui s'y rattachent.

| Domaine | Modèles |
|---|---|
| Carnet d'adresses | Address Book — fiche complète (fiche principale, contacts, client, fournisseur). |
| Comptabilité générale | Account Ledger (F0911), Account Balances (F0902). |
| Comptabilité fournisseurs | A/P Ledger (F0411), Payments (F0413). |
| Comptabilité clients | Customer Ledger (F03B11), Receipts (F03B13). |
| Stocks | Item (F4101). |
| Ventes | Sales Order (F4201), Sales History (F42019 + F42119). |
| Production | Work Order (F4801), Production Cost (F3102). |
| Données techniques | Bill of Material (F3002), Routing (F3003). |
| Calcul des coûts | Item Cost Components (F30026). |

Ils figurent dans le sélecteur de modèle avec les autres ; l'en-tête de la page indique *fourni par le préréglage « … »*. Ils sont construits à la première utilisation. Pour en adapter un, un superutilisateur ajoute un modèle dans **Paramètres → Explorateur** à partir du même préréglage, puis le modifie.

Les montants JD Edwards s'affichent en unités réelles : les décimales du dictionnaire de données s'appliquent aux tableaux, aux totaux et aux filtres.

---

## Libellés issus du dictionnaire de données \{#dictionary\}

Une colonne sans entrée de dictionnaire affiche son nom de colonne brut. Un superutilisateur voit sur la page de l'explorateur combien de colonnes sont dans ce cas, et **Créer les entrées depuis le dictionnaire de données** les complète en un clic à partir du dictionnaire de données JD Edwards (description, type, décimales, liste UDC). La [tâche de rafraîchissement du dictionnaire](./jobs.md#dictionary) fait de même pour tous les modèles, ou pour un seul.

---

## L'assistant sur cette page \{#ai\}

Sur la page de l'explorateur, l'assistant propose de créer ce que l'utilisateur décrit : *Crée une analyse des utilisateurs par rôle*, *Crée un tableau de bord avec les analyses de ce modèle*. Il construit l'analyse sur le modèle, la vérifie en l'exécutant, puis l'enregistre — en privé, sauf demande de partage. Voir [Assistant IA](../framework/ai-assistant.md#tools).

---

## Qui voit quoi \{#access\}

Un modèle est proposé aux titulaires d'un rôle qui l'accorde (**Data Explorer** dans les règles *Beyond the menus* du rôle). Le périmètre de données des rôles de l'utilisateur s'applique à chaque analyse.
