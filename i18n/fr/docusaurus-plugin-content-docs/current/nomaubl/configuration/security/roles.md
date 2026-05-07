---
title: Rôles
description: "Gérer les rôles NomaUBL : permissions par page, accès à la Configuration, mode lecture seule, restriction par société et liste des membres assignés."
keywords: [NomaUBL, rôles, permissions, RBAC, contrôle d'accès, permissions par page, lecture seule, accès paramètres, sociétés, JD Edwards, SAP, NetSuite]
---

# Rôles

Cet écran gère le **contrôle d'accès basé sur les rôles** de NomaUBL. Chaque rôle regroupe un ensemble de permissions : les **pages** visibles dans la navigation, l'accès aux menus de **Configuration**, le mode **lecture seule**, et les **sociétés** sur lesquelles le rôle peut intervenir.

Les rôles sont applicatifs et indépendants de la source — ils s'appliquent indifféremment quand NomaUBL est connecté à JD Edwards, SAP, NetSuite ou un ERP personnalisé. Les rôles par défaut (`admin`, `user`, …) sont provisionnés par l'action **Initialize Database** de *Database Connectors → NomaUBL*.

---

## Liste des rôles

Le haut de la page affiche chaque rôle existant sous forme de carte :

| Élément | Description |
|---|---|
| **Name** | Identifiant interne du rôle (par ex. `admin`, `operator`, `auditor`). Utilisé pour rattacher les utilisateurs au rôle. |
| **Description** | Résumé lisible en texte libre. |
| **Member count** | Nombre d'utilisateurs actuellement rattachés au rôle. |
| **Badge** | `Admin` lorsque *Settings Access* vaut `Yes` ; `User` sinon. Lecture rapide de la portée du rôle. |
| Bouton **🗑** | Supprime le rôle (une boîte de dialogue de confirmation rappelle que les membres perdront leurs permissions). |

Cliquer sur une carte ouvre le **panneau d'édition** sous la liste. Le bouton **+ Nouveau rôle** en haut à droite de la section ouvre le même panneau pour la création — le champ **Name** y est alors éditable.

---

## Panneau d'édition — Onglet Permissions

| Champ | Description |
|---|---|
| **Name** | *(visible uniquement à la création)* Identifiant interne du rôle. Doit être unique. |
| **Description** | Résumé lisible affiché dans la liste des rôles. |
| **Settings Access** | `Yes` / `No` — à `Yes`, les membres accèdent aux menus **Configuration** et peuvent modifier les paramètres applicatifs. Le rôle a alors le badge `Admin`. |
| **Readonly** | `Yes` / `No` — à `Yes`, les membres consultent l'application mais toute action d'écriture est désactivée. Pertinent pour les auditeurs / observateurs. |
| **Companies** | Codes société séparés par des virgules qui délimitent la portée du rôle. **Laisser vide pour autoriser toutes les sociétés** (valeur par défaut typique). |

### Allowed Pages

Liste à cocher groupée qui reflète la navigation gauche de l'application. Cocher les pages que les membres du rôle doivent pouvoir consulter.

| Groupe | Pages |
|---|---|
| **Navigation** | `dashboard`, `invoices`, `ereporting`, `edirectory`, `integrationerrors` |
| **Processing** | `fetchinput`, `import`, `retrievestatuses` |
| **Operations** | `xml`, `ubl`, `extractandprocess`, `processapi` |
| **UBL** | `validate`, `xsleditor`, `xmlviewer`, `ubldefaults` |
| **Extract** | `extractbip` *(spécifique à JD Edwards)*, `extract`, `extractftp` |
| **Documentation** | `statusreference`, `reasoncodes`, `ublreference` |
| **Management** | `fileversions` |

Aides :

- Boutons **Tout** / **Aucun** en haut de la liste à cocher — accordent ou révoquent toutes les pages en un clic.
- Case par groupe + bouton **tout cocher / tout décocher** — bascule tout un groupe en un clic.
- La case d'un groupe affiche un **état indéterminé** quand seules certaines pages du groupe sont sélectionnées.

### Enregistrer / Annuler

- **Créer** / **Enregistrer** enregistre le rôle et met à jour la liste.
- **Annuler** annule les modifications et ferme le panneau.
- Des messages de statut s'affichent sous le panneau (`Role created`, `Role updated`, `Role deleted`, messages d'erreur).

---

## Panneau d'édition — Onglet Members

Disponible uniquement en édition d'un rôle existant (masqué à la création).

Liste tous les utilisateurs actuellement rattachés au rôle :

| Colonne | Description |
|---|---|
| **Username** | Login de l'utilisateur. |
| **Full name** | Nom complet de l'utilisateur (ou `–` si non renseigné). |
| **Status** | `Active` (vert) ou `Inactive` (rouge). |

Cette vue est en **lecture seule** — pour ajouter ou retirer un utilisateur d'un rôle, l'éditer depuis *Configuration → Security → Users*.

---

## Suppression d'un rôle

Cliquer sur l'icône **🗑** d'une carte de rôle ouvre une confirmation :

> *Delete role "X"? Users assigned to this role will lose their permissions.*

La confirmation déclenche la suppression. Les utilisateurs précédemment rattachés au rôle conservent leur compte mais perdent toute permission jusqu'à leur réassignation à un autre rôle.

---

## Conseils & bonnes pratiques

- **Créer un rôle par profil métier, pas par utilisateur.** Des rôles tels que `operator`, `auditor` ou `admin` se maintiennent bien plus facilement que des rôles individuels.
- **Accorder *Settings Access* avec parcimonie.** L'option ouvre tout le menu Configuration — la réserver à un petit groupe d'administrateurs.
- ***Readonly* convient parfaitement aux comptes d'audit ou de conformité.** Combiné à *Settings Access = No*, il donne un parcours en lecture seule de l'application.
- **Utiliser Companies pour cloisonner par société.** Laisser le champ vide annule tout filtrage par société pour le rôle.
- **Relancer *Initialize Database*** *(Database Connectors → NomaUBL)* si les rôles par défaut sont absents — l'opération les recrée sans toucher aux rôles personnalisés.
- **Ne supprimer un rôle qu'après réaffectation de ses membres.** Après suppression, les membres perdent tout accès jusqu'à leur réassignation.
