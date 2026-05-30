---
title: Transformer un connecteur en application
description: "Un connecteur devient une « application » visible dans le sélecteur en haut quand un menu lui est attaché et que show_in_switcher est actif. Plus comment le champ optionnel home décide de la page d'accueil."
keywords: [Liberty Framework, application, show_in_switcher, home, connecteur, menu, sélecteur d'applications, sélecteur]
---

# Transformer un connecteur en application

Liberty n'a **aucune configuration Applications séparée**. Ce que les utilisateurs appellent « une application » — ce qui apparaît dans le sélecteur en haut, ce qui porte un menu dans la navigation à gauche — c'est simplement un **connecteur auquel un menu est attaché** avec l'indicateur `show_in_switcher` actif.

Cette page détaille le câblage des deux côtés : l'indicateur sur le connecteur + la clé du menu.

---

## Les trois pièces

| Pièce | Où se trouve-t-elle | Requise pour une application ? |
|---|---|---|
| **`show_in_switcher`** | Sur le connecteur (Paramètres → Connecteurs → onglet Paramètres). | Oui — désactivé, le connecteur existe mais n'apparaît pas dans le sélecteur en haut. |
| **`[menus.<connector>]`** | Le fichier de menus (Paramètres → Menus). | Oui — sans menu, le connecteur est traité comme une *source de données*, pas une application. |
| **`home`** | Sur le connecteur (Paramètres → Connecteurs → onglet Paramètres). | Optionnel — définit l'élément d'accueil quand l'utilisateur choisit cette application dans le sélecteur. |

Quand `show_in_switcher = true` et qu'un menu existent ensemble, la pastille du connecteur passe du groupe *Sources de données* de la page Connecteurs au groupe *Applications*, et une tuile pour ce connecteur apparaît dans le sélecteur en haut.

---

## Où chaque indicateur est défini

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="ma-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#ma-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres · Connecteurs · [connectors.crm] · Paramètres</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="92" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">type</text>
  <rect x="200" y="80" width="200" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="95" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">sql</text>

  <text x="40" y="122" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">pool</text>
  <rect x="200" y="110" width="200" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="125" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">default</text>

  <text x="40" y="152" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">licensed</text>
  <rect x="200" y="142" width="20" height="20" rx="3" fill="rgba(255,255,255,0.04)" stroke="#334155"/>

  <line x1="40" y1="180" x2="960" y2="180" stroke="#1f2937"/>
  <text x="40" y="204" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VISIBILITÉ DANS LE SÉLECTEUR EN HAUT</text>

  <text x="40" y="232" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">show_in_switcher</text>
  <rect x="200" y="222" width="20" height="20" rx="3" fill="rgba(34,197,94,0.30)" stroke="rgba(34,197,94,0.60)"/>
  <text x="210" y="237" fill="#22c55e" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="234" y="236" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">afficher ce connecteur comme application dans le sélecteur en haut</text>

  <text x="40" y="266" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">home</text>
  <rect x="200" y="256" width="300" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="271" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">pipeline.customers ▾</text>
  <text x="510" y="270" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">élément d'accueil quand cette application est choisie</text>

  <text x="40" y="296" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">max_rows</text>
  <rect x="200" y="286" width="100" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="301" fill="#94a3b8" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">(par défaut)</text>

  <text x="40" y="340" fill="#94a3b8" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">Pour une application, créer aussi [menus.crm] depuis Paramètres → Menus → ＋ Ajouter un menu pour un connecteur.</text>
</svg>

---

## Étape 1 — Sur le connecteur

Ouvrir **Paramètres → Connecteurs**, choisir le connecteur, basculer sur l'onglet **Paramètres**. Les champs pertinents pour « ceci est une application » :

| Champ | Notes |
|---|---|
| **`show_in_switcher`** | Par défaut `true`. Activé, le connecteur apparaît dans le sélecteur d'applications en haut (à condition d'avoir un menu). Désactivé, le connecteur n'est accessible que par URL — utile pour les connecteurs cachés ou d'administration. |
| **`home`** | Liste déroulante alimentée par les éléments de menu de ce connecteur. Choisit l'élément d'accueil quand l'utilisateur clique sur l'application dans le sélecteur. Vide → le premier élément visible de premier niveau. |

Enregistrer la page du connecteur — la modification s'applique immédiatement (rechargement à chaud).

---

## Étape 2 — Sur le menu

Ouvrir **Paramètres → Menus**. Si le connecteur n'a pas encore de menu, le bouton *＋ Ajouter un menu pour un connecteur* ouvre une boîte de dialogue qui liste tous les connecteurs **sans** menu — choisir le sien. La boîte de dialogue :

- Crée une nouvelle entrée `[menus.<connector>]` sans éléments.
- Sélectionne la pastille de la nouvelle application.
- Affiche l'arbre vide.

Si le connecteur a déjà un menu, sa pastille est dans la barre de portée — il suffit de cliquer dessus.

Ajouter des éléments via **＋ Dossier** / **＋ Élément** en haut du panneau de l'arbre. Voir [Construire l'arbre](./build-the-tree.md) pour la visite de l'éditeur.

---

## Ce qui change après le câblage

Avant :

- Le connecteur apparaît sous **Sources de données** sur la page Connecteurs.
- Il n'apparaît pas dans le sélecteur en haut.
- Les écrans qui pointent vers ses requêtes ne sont accessibles que par URL.

Après :

- Le connecteur apparaît sous **Applications** sur la page Connecteurs.
- Il apparaît dans le sélecteur en haut sous forme de tuile.
- Cliquer la tuile amène l'utilisateur à l'élément `home` (ou au premier élément visible de premier niveau).
- La navigation à gauche affiche l'arbre du menu.

La page Connecteurs lit le fichier des menus pour décider du regroupement — il n'y a pas d'indicateur séparé « ceci est une application » au-delà de *« a un menu + est dans le sélecteur »*.

---

## Dupliquer une application

La page Connecteurs propose une action **Dupliquer** (couverte dans [Requêtes → Dupliquer une requête ou un connecteur](../queries/clone.md#clone-app--the-whole-application)) qui copie le connecteur + son recouvrement de dictionnaire + ses écrans + son menu + ses tableaux de bord + ses graphiques sous une nouvelle clé de connecteur. Le connecteur dupliqué hérite de `show_in_switcher` ; son menu est câblé automatiquement — l'application dupliquée apparaît dans le sélecteur en haut dès que la duplication se termine.

C'est le bon choix quand :

- Un déploiement parallèle est nécessaire (`nomasx1` → `nomasx1b` pour des tests de non-régression).
- Une instance par tenant est mise en place.
- L'application est forkée pour un refactor majeur en gardant l'originale en production.

---

## Masquer une application temporairement

Deux façons de retirer une application du sélecteur sans la supprimer :

| Option | Effet |
|---|---|
| Désactiver `show_in_switcher` sur le connecteur. | L'application disparaît du sélecteur. Ses écrans restent accessibles par URL ; les utilisateurs qui ont l'URL continuent de travailler. |
| Supprimer l'entrée `[menus.<connector>]`. | Le connecteur retourne sous *Sources de données*. Les écrans résolvent encore, mais l'utilisateur n'a plus de navigation pour les trouver. |

La première est le bon choix pour les fenêtres de maintenance — entièrement réversible en un clic. La seconde sert à retirer définitivement l'UI de l'application.

---

## Installations multi-applications

Une installation Liberty typique porte plusieurs applications :

| Connecteur | Rôle |
|---|---|
| `crm` | CRM destiné aux clients. |
| `nomasx1` | Revue de sécurité. |
| `nomajde` | Données de référence JD Edwards EnterpriseOne. |
| `nomaflow` | Ordonnanceur de tâches (un produit à part entière). |
| `default` | Le pool du framework lui-même — généralement sans menu, juste une source de données pour les requêtes partagées. |

Chacune obtient son propre bloc `[menus.<name>]`, sa propre pastille sur la page Menus, sa propre tuile dans le sélecteur. Elles partagent le même processus du framework, la même authentification, le même dictionnaire (avec recouvrements par connecteur).

Un utilisateur qui se connecte ne voit que les applications pour lesquelles il a les permissions — `GET /api/menus` renvoie un arbre vide pour une application où l'utilisateur ne peut rien exécuter (et la tuile du sélecteur se masque en conséquence).

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| Connecteur avec `show_in_switcher = true` mais sans menu. | Le connecteur apparaît dans le groupe *Sources de données* de la page Connecteurs ; le sélecteur en haut ne le liste pas. | Ajouter un menu dans *Paramètres → Menus*. |
| Connecteur avec un menu mais `show_in_switcher = false`. | Le menu existe mais le sélecteur masque la tuile. | Soit activer `show_in_switcher`, soit accepter que les utilisateurs n'atteindront l'application que par URL. |
| `home` pointe vers un élément de menu qui n'existe plus. | Cliquer la tuile du sélecteur atterrit sur le premier élément visible de premier niveau, en ignorant le `home` périmé. | Choisir de nouveau un élément valide — la liste déroulante affiche les éléments de menu actifs. |
| Ajouter `[menus.<X>]` où `<X>` n'est pas un connecteur. | La page rejette l'entrée à l'enregistrement — la clé du menu doit correspondre à un connecteur connu. | Créer d'abord le connecteur, puis attacher le menu. |
| Dupliquer une application mais le nouveau pool n'existe pas. | La boîte de dialogue de duplication refuse de soumettre. | Créer le pool dans *Paramètres → Pools* avant de dupliquer. |

---

## La suite

- [Construire l'arbre](./build-the-tree.md) — dossiers, feuilles, glisser-déposer et réorganisation.
- [Types d'éléments](./item-types.md) — choisir entre `query`, `endpoint`, `dashboard`, `page`.
- [Requêtes → Dupliquer une requête ou un connecteur](../queries/clone.md) — le flux de duplication d'application complète.
