---
title: Utilisateurs
description: "Gérer les comptes utilisateurs NomaUBL : création, modification, désactivation ou suppression d'utilisateur, affectation à un rôle et réinitialisation de mot de passe."
keywords: [NomaUBL, utilisateurs, comptes, affectation de rôle, réinitialisation mot de passe, désactivation, RBAC]
---

# Utilisateurs

Cet écran gère les comptes utilisateurs NomaUBL : création de nouveaux utilisateurs, affectation d'un **rôle** (défini dans *Configuration → Security → Roles*), édition du profil, désactivation des comptes et réinitialisation des mots de passe.

Les comptes utilisateurs sont applicatifs et agnostiques de la source — ils s'appliquent indifféremment lorsque NomaUBL est connecté à JD Edwards, SAP, NetSuite ou un ERP personnalisé. Le compte `admin` par défaut (ainsi que les rôles initiaux) est provisionné par l'action **Initialize Database** de *Database Connectors → NomaUBL*.

---

## Liste des utilisateurs

Le tableau en bas de la page liste l'ensemble des comptes utilisateurs.

| Colonne | Description |
|---|---|
| **Username** | Identifiant de connexion du compte. |
| **Full Name** | Nom complet affiché dans l'interface. |
| **Email** | Adresse e-mail du compte — utilisée pour les notifications et les processus de réinitialisation de mot de passe. |
| **Role** | Rôle actuellement affecté à l'utilisateur (l'un des rôles définis dans *Configuration → Security → Roles*). |
| **Active** | `Yes` (vert) lorsque le compte peut se connecter ; `No` (rouge) lorsqu'il est désactivé mais conservé pour la traçabilité. |
| **Actions** | **✏️** ouvre le formulaire d'édition de l'utilisateur ; **🗑** supprime l'utilisateur après une confirmation navigateur. |

Lorsque le tableau est vide, un message renvoie vers *Initialize Database* — le compte `admin` initial est créé lors de cette opération.

---

## Création d'un utilisateur

Cliquer sur **+ New User** en haut à droite de la section ouvre le formulaire de création. Champs :

| Champ | Description |
|---|---|
| **Username** | Identifiant de connexion. Doit être unique. **Non modifiable après création.** |
| **Password** | Mot de passe initial du compte. |
| **Full Name** | Nom complet affiché dans l'interface. |
| **Email** | Adresse e-mail du compte. |
| **Role** | Rôle affecté à l'utilisateur (liste déroulante des rôles définis dans *Security → Roles*). |

Cliquer sur **Create** pour enregistrer ou sur **Cancel** pour annuler.

---

## Édition d'un utilisateur

Cliquer sur **✏️** sur une ligne ouvre le formulaire d'édition. Le formulaire est identique à celui de création, avec trois différences :

| Champ | Comportement en édition |
|---|---|
| **Username** | Masqué — les identifiants sont immuables. |
| **Password** | Masqué — utiliser **Reset Password** ci-dessous à la place. |
| **Active** | `Yes` / `No` — autorise ou non la connexion. La désactivation préserve l'historique de l'utilisateur sans lui accorder d'accès. |
| **Reset Password** | Champ optionnel. **Laisser vide pour conserver le mot de passe actuel** ; saisir une nouvelle valeur pour l'écraser. |

Cliquer sur **Save** pour enregistrer ou sur **Cancel** pour annuler.

---

## Suppression d'un utilisateur

Cliquer sur **🗑** sur une ligne. Une confirmation navigateur s'affiche (`Delete user "X"?`). La confirmation supprime le compte immédiatement — il n'existe pas de récupération via une suppression douce. Préférer **Active = No** pour révoquer un accès de façon temporaire.

---

## Messages de statut

Des retours en ligne s'affichent sous le tableau :

- `User created` / `User updated` / `User deleted` en cas de succès.
- Le message d'erreur original renvoyé par l'API en cas d'échec (par ex. doublon d'identifiant, champ manquant).

---

## Conseils & bonnes pratiques

- **Aligner Username sur l'identifiant SSO / d'entreprise** dès que possible, même si NomaUBL n'est pas encore fédéré — la migration SSO future en sera grandement simplifiée.
- **Définir un mot de passe initial robuste** à la création, puis demander à l'utilisateur de le changer dès la première connexion.
- **Préférer *Active = No* à la suppression** lors du départ d'un collaborateur — l'accès est immédiatement révoqué, la piste d'audit est conservée.
- **Utiliser Reset Password avec parcimonie.** Lorsque les utilisateurs peuvent changer leur mot de passe ailleurs, ce champ sert principalement au déblocage après perte de mot de passe.
- **Relancer *Initialize Database*** *(Database Connectors → NomaUBL)* sur un déploiement neuf si aucun utilisateur n'existe — l'opération provisionne le compte `admin` initial.
- **Affecter un rôle à chaque utilisateur.** Sans rôle valide, l'utilisateur arrive sans permission et voit une navigation vide.
