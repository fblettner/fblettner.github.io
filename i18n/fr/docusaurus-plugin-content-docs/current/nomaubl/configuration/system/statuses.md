---
title: Statuts
description: "Définir les statuts de cycle de vie de facture reconnus par NomaUBL : code réglementaire, Tag interne, libellés bilingues, code événement attendu par la Plateforme Agréée et indicateur d'interrogation depuis la PA."
keywords: [NomaUBL, statuts, cycle de vie facture, e-invoicing, e-reporting, Plateforme Agréée, code statut, InvoiceStatusCatalog, polling, JD Edwards, SAP, NetSuite]
---

# Statuts

L'éditeur **Statuses** définit les **statuts de cycle de vie** qu'une facture peut prendre dans NomaUBL. Ces statuts sont issus de la réglementation française de la facturation électronique (par ex. `200` = *Déposée*, `205` = *Paiement reçu*, `9906` = *En cours de traitement*…) et correspondent aux codes référencés dans l'onglet **E-Invoicing → Actions** ainsi que dans le **modal de détail facture**.

Chaque ligne associe un code réglementaire à :

- le **Tag interne** utilisé par le code Java de NomaUBL (constante `InvoiceStatusCatalog`),
- les **libellés bilingues** affichés dans l'interface,
- le **PA Code** (nom d'événement attendu par l'API de la Plateforme Agréée),
- un indicateur **Collect** qui détermine l'interrogation du statut depuis la PA.

Cette page s'applique à des documents issus de n'importe quel système source — JD Edwards, SAP, NetSuite, ERP personnalisé — tant que la source est mappée vers UBL.

---

## Champs par ligne

| Colonne | Exemple | Description |
|---|---|---|
| **Code** | `200` | Code de statut réglementaire stocké en base de données (`tableHeader`). Identifiant canonique du statut dans l'ensemble de NomaUBL. |
| **Tag** | `STATUS_DEPOSITED` | Nom interne utilisé par le code Java de NomaUBL (constante définie dans `InvoiceStatusCatalog`). Permet à la logique applicative de référencer un statut sans dépendre du Code numérique. |
| **Label FR** | `Déposée` | Libellé français affiché dans l'interface quand la locale active est le français. |
| **Label EN** | `Deposited` | Libellé anglais affiché dans l'interface quand la locale active est l'anglais. |
| **PA Code** | `fr_e_invoicing_200` | Nom d'événement transmis à l'API de la Plateforme Agréée — inséré dans le tableau `names[]` des appels de statut. Doit correspondre exactement à ce qu'attend la PA. |
| **Collect** | case à cocher | Quand cochée, NomaUBL **interroge ce statut depuis l'API de la PA** (pendant le cycle de récupération des statuts de cycle de vie configuré sous *E-Invoicing → PA Connection → Status Retrieval*). À décocher pour exclure un statut du polling. |

Utiliser le bouton **+ Ajouter un statut** pour ajouter une ligne et le bouton **×** pour en supprimer une.

---

## Articulation des champs entre eux

- Le **Code** est la source de vérité en base de données.
- Le **Tag** est ce que consomme le code applicatif ; sa modification implique la mise à jour de la constante `InvoiceStatusCatalog` correspondante dans le code Java.
- **Label FR / Label EN** remplissent les textes de l'interface — ajouter une nouvelle locale demande une extension du schéma, pas un simple ajout textuel ici.
- Le **PA Code** définit le contrat avec la Plateforme Agréée. Si la PA renomme un événement, seul `paCode` doit être mis à jour ici — le code applicatif continue d'utiliser le Tag stable.
- **Collect** détermine quels statuts remontent dans NomaUBL via la boucle de polling. Les statuts uniquement positionnés localement (par ex. résultats de validation interne) ont en général Collect désactivé.

---

## Conseils & bonnes pratiques

- **Aligner les Codes sur la réglementation.** Ils sont le langage commun entre NomaUBL, la PA et tout outillage aval — ne pas inventer de Codes personnalisés.
- **Traiter les Tags comme un contrat interne stable.** Tout renommage d'un Tag implique aussi la mise à jour de la constante `InvoiceStatusCatalog` correspondante dans le code Java, sous peine d'échecs de résolution à l'exécution.
- **Faire correspondre les PA Codes exactement au catalogue de la PA.** Une faute de frappe dans `fr_e_invoicing_xxx` entraîne des échecs d'intégration silencieux (la PA rejette les noms d'événements inconnus).
- **Cocher Collect uniquement sur les statuts effectivement émis par la PA.** Interroger des statuts non supportés gaspille des appels API et peut polluer les journaux par des résultats vides.
- **Les libellés bilingues ne sont pas optionnels.** Renseigner systématiquement Label FR et Label EN — quand le libellé de la locale active est vide, l'interface se replie sur le Code, ce qui rend la lecture difficile.
