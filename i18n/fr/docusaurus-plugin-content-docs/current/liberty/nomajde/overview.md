---
title: Nomajde — Présentation
description: "Nomajde est une application compagnon JD Edwards — écrans live sur les données JDE, atelier de maintenance sécurité, planification et archivage des rapports BIP, supervision live des transactions et des jobs."
keywords: [Nomajde, JD Edwards, JDE, données maîtres, security workbench, BIP, reporting, supervision]
---

# Nomajde — Présentation

**Nomajde** est une application **compagnon JD Edwards**. Elle se place à côté de JDE EnterpriseOne et regroupe en un petit nombre d'écrans simplifiés ce que JDE répartit habituellement sur de nombreux formulaires distincts, avec **édition en grille** pour les mises à jour de masse. Le travail quotidien — qui demanderait cinq écrans JDE et des dizaines de clics — tient sur une seule page Nomajde :

- consulter et modifier les données maîtres (annuaire, clients, fournisseurs, articles, comptes GL),
- maintenir la sécurité JDE — utilisateurs, rôles, relations entre rôles, environnements, security workbench,
- analyser les transactions sur plusieurs sociétés et environnements sans naviguer ligne par ligne,
- planifier des rapports BIP, archiver leurs sorties et les renvoyer,
- surveiller JDE en production — transactions, jobs, performances — en temps réel.

Chaque écran lit les données JDE en temps réel. Pas d'extraction nocturne, pas de copie intermédiaire — ce que l'écran affiche est ce que JDE affiche au même moment.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="nje-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nje-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="920" height="380" rx="14" fill="url(#nje-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">🟧 NOMAJDE · Barre latérale</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="300" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="76" y="120" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📊 Tableau de bord</text>

  <text x="76" y="144" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Données maîtres</text>
  <text x="86" y="162" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Annuaire</text>
  <text x="86" y="176" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Clients · Fournisseurs</text>
  <text x="86" y="190" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Articles · Comptes GL</text>

  <text x="76" y="214" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Maintenance sécurité</text>
  <rect x="84" y="222" width="172" height="20" rx="4" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="92" y="236" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">Gestion utilisateurs</text>
  <text x="86" y="256" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Gestion des rôles</text>
  <text x="86" y="270" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Relations entre rôles</text>
  <text x="86" y="284" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Environnements</text>
  <text x="86" y="298" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Security Workbench</text>

  <text x="76" y="322" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Transactions</text>
  <text x="86" y="340" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">AP · AR · GL</text>

  <text x="76" y="362" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Reporting</text>
  <text x="76" y="386" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Supervision</text>

  <rect x="280" y="100" width="320" height="300" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="300" y="124" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">👥 GESTION UTILISATEURS</text>

  <text x="300" y="154" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Rechercher un utilisateur,</text>
  <text x="300" y="170" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">voir chacun de ses rôles,</text>
  <text x="300" y="186" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">environnements et droits.</text>

  <text x="300" y="218" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Ajouter / modifier / désactiver</text>
  <text x="300" y="234" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">sans quitter la page.</text>

  <text x="300" y="266" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Les modifications sont</text>
  <text x="300" y="282" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">poussées immédiatement à JDE,</text>
  <text x="300" y="298" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">y compris en édition grille.</text>

  <text x="300" y="330" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Piste d'audit : qui a modifié</text>
  <text x="300" y="346" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">quoi, quand, depuis quel écran.</text>

  <text x="300" y="378" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">Même forme sur Gestion des rôles,</text>
  <text x="300" y="394" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">Environnements, Security Workbench.</text>

  <rect x="620" y="100" width="320" height="140" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="640" y="124" fill="#fb923c" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">📊 REPORTING</text>
  <text x="640" y="150" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Planifier un job JDE depuis un</text>
  <text x="640" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">formulaire. La sortie est archivée</text>
  <text x="640" y="182" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">à côté de l'exécution — télécharger,</text>
  <text x="640" y="198" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">renvoyer, envoyer par e-mail en</text>
  <text x="640" y="214" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">un clic. Journal de chaque run.</text>

  <rect x="620" y="260" width="320" height="140" rx="10" fill="rgba(50,215,75,0.08)" stroke="rgba(50,215,75,0.30)" strokeWidth="1"/>
  <text x="640" y="284" fill="#4ade80" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">📈 SUPERVISION</text>
  <text x="640" y="310" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Compteurs live des transactions</text>
  <text x="640" y="326" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">AP / AR / GL. La file job-control</text>
  <text x="640" y="342" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">sous forme de grille. Indicateurs</text>
  <text x="640" y="358" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">de performance (latence base,</text>
  <text x="640" y="374" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">temps de réponse AIS, débit de</text>
  <text x="640" y="390" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">transactions).</text>
</svg>

---

## Ce que couvre l'application

### Données maîtres

Le travail quotidien sur les données maîtres, sous une forme unifiée par objet métier.

- **Annuaire** — recherche d'une adresse, vue qui / quoi / où sur une seule ligne. Modifier un nom, un téléphone, une adresse postale sans ouvrir trois écrans.
- **Clients et fournisseurs** — fiche complète, par société. Modifier les conditions de paiement, le compte bancaire, les instructions de règlement.
- **Articles** — fiche article, avec article par site et par dépôt sur la même page.
- **Comptes GL** — plan comptable par unité d'activité et par société.

Chaque grille permet de filtrer sur n'importe quelle colonne, de trier, d'exporter en Excel, et de cliquer sur une ligne pour ouvrir le formulaire d'édition.

### Maintenance sécurité

Le même travail de sécurité JDE, condensé sur cinq écrans qui regroupent chacun ce que JDE répartit sur de nombreux formulaires. Chaque grille supporte l'édition en ligne — modifier une valeur sur une ligne, la mise à jour est écrite sans quitter la page.

| Écran | Ce qu'on y fait |
|---|---|
| **Gestion utilisateurs** | Rechercher un utilisateur ; voir sur une seule page chacun de ses rôles, environnements et droits. Ajouter, modifier ou désactiver un utilisateur ; affecter ou retirer un rôle directement dans la grille. La modification est poussée à JDE immédiatement. |
| **Gestion des rôles** | Catalogue des rôles, avec les applications attachées à chacun. Ajouter un rôle, attacher une application, paramétrer la sécurité d'options de traitement — sans naviguer entre plusieurs formulaires JDE distincts. |
| **Relations entre rôles** | Héritage des rôles et fenêtres de validité dans une seule grille. Promouvoir un rôle junior pour qu'il hérite d'un rôle senior, avec une date de début et de fin, en une seule édition. |
| **Environnements** | Liste des environnements (`PD`, `PY`, `DV`, `CRP`, …) et affectation des rôles par environnement, côte à côte. |
| **Security Workbench** | Le catalogue complet de sécurité — sécurité application, d'action, de ligne, de colonne, d'options de traitement — sur une seule grille recherchable avec édition en ligne, au lieu d'un écran JDE distinct par type de sécurité. |

Les modifications sont écrites directement dans JDE — pas d'extraction, pas de rejeu. La piste d'audit enregistre chaque changement avec son auteur, son horodatage et la page d'origine.

### Transactions

Grilles sur les transactions AP, AR et GL. Filtrer sur n'importe quelle colonne — société, unité d'activité, fournisseur, numéro de document, fourchette de montant, fourchette de dates — et cliquer sur une ligne pour ouvrir le détail. Pratique pour repérer une facture ouverte, un lot non comptabilisé ou un journal qui ne s'équilibre pas.

### Reporting

Planifier et archiver les rapports BIP JDE.

- Choisir le programme et la version, remplir la sélection de données, planifier l'exécution. Le job part dans JDE depuis un seul formulaire — pas de chaîne d'écrans de planification séparés.
- La sortie générée (PDF ou XML) est archivée à côté de l'exécution. Téléchargement ultérieur, envoi par e-mail à une liste de destinataires, renvoi via le même connecteur.
- Chaque exécution est journalisée — qui a planifié, à quelle heure, quelle sortie a été produite.

### Supervision

Vue live de JDE en production.

- Compteurs des transactions AP / AR / GL avec drill-through vers l'écran sous-jacent.
- File job-control JDE sous forme de grille — statut, propriétaire, durée d'exécution, sortie.
- Indicateurs de performance : latence base, temps de réponse AIS, débit de transactions.

Adapté pour un ingénieur d'exploitation qui surveille la charge du jour.

---

## La carte de l'application

| Section | Contenu |
|---|---|
| **Tableau de bord** | Synthèse de l'activité du jour : transactions ouvertes, jobs en cours, utilisateurs récents, dernières alertes. |
| **Données maîtres** | Annuaire, clients, fournisseurs, articles, comptes GL. |
| **Maintenance sécurité** | Gestion utilisateurs, Gestion des rôles, Relations entre rôles, Environnements, Security Workbench. |
| **Transactions** | Grilles AP, AR, GL avec filtres et formulaires d'édition. |
| **Reporting** | Planification d'un job BIP, archive des exécutions passées, distribution. |
| **Supervision** | Compteurs live des transactions, file job-control, indicateurs de performance. |
| **Paramètres** | Définitions d'environnement, serveur e-mail, rétention de l'archive. |

---

## Qui utilise l'application

| Profil | Pourquoi il ouvre Nomajde |
|---|---|
| **Opérateur AP / AR** | La grille des transactions — toutes les factures ouvertes, sociétés et environnements confondus, sur une seule page, avec filtres en masse et édition en ligne. |
| **Gestionnaire de données maîtres** | Maintenance annuaire, clients et fournisseurs, avec validation des champs obligatoires dans le formulaire et édition en grille pour les mises à jour de masse. |
| **Administrateur sécurité JDE** | Les cinq écrans de maintenance sécurité — cinq écrans qui regroupent ce que JDE répartit sur de nombreux formulaires distincts, tous avec édition en ligne. |
| **Analyste reporting** | La section Reporting — un seul formulaire pour planifier, archiver et distribuer un job BIP, là où JDE enchaîne plusieurs écrans séparés. |
| **Ingénieur d'exploitation** | La section Supervision — compteurs live des transactions, file des jobs, performances, sur un seul tableau de bord. |

---

## Rôles dans Nomajde

L'application livre quatre rôles.

| Rôle | Droits |
|---|---|
| **Consultation** | Lire tous les écrans, lancer les rapports, aucune modification. |
| **Opérateur** | Tout ce qui précède, plus : édition AP / AR / données maîtres et planification de rapports. |
| **Sécurité** | La section Maintenance sécurité — Gestion utilisateurs, Rôles, Relations, Environnements, Security Workbench. |
| **Administrateur** | Tout ce qui précède, plus : configuration des environnements et rétention de l'archive. |

Un déploiement type sépare **Opérateur** de **Sécurité** — la personne qui traite les transactions n'est pas la même que celle qui gère les droits d'accès.
