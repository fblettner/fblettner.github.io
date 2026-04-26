---
title: E-Directory
description: "Configurer la connexion à l'annuaire PPF (Portail Public de Facturation) et au service de recherche INSEE utilisés pour valider les codes adressage et retrouver les informations clients avant l'envoi d'une facture électronique."
keywords: [NomaUBL, e-directory, annuaire, PPF, Portail Public de Facturation, INSEE, code adressage, facturation électronique, réforme facture électronique, SIREN, SIRET]
---

# E-Directory

L'éditeur **E-Directory** configure deux services complémentaires que NomaUBL utilise pour valider les informations destinataire avant de produire une facture électronique :

- **Recherche INSEE** — interroger une entreprise par **raison sociale, SIREN ou SIRET** pour récupérer ses données d'identification officielles (raison sociale, adresse, statut d'immatriculation…).
- **Annuaire PPF (Portail Public de Facturation)** — vérifier que le **code adressage électronique** porté par le document existe et est **actif** dans l'annuaire public de la facturation électronique.

Les deux opérations s'enchaînent généralement : une recherche INSEE résout les identifiants du client, puis la vérification dans l'annuaire PPF confirme que le code adressage figurant sur le document est valide pour ce client.

Cette fonctionnalité s'inscrit dans le cadre de la **Réforme française de la facturation électronique**. Elle s'applique à des documents issus de n'importe quel système source — JD Edwards, SAP, NetSuite, ERP personnalisé — dès lors que la source est mappée vers UBL.

---

## Vérification de l'annuaire (Directory Check)

| Champ | Valeurs | Description |
|---|---|---|
| **Enable Check** | `Y` / `N` | Lorsque cette option est activée, NomaUBL interroge l'annuaire PPF **avant l'envoi de chaque facture** afin de vérifier que le **code adressage électronique** présent sur le document existe et est actif dans l'annuaire public. À désactiver pour ignorer la vérification (utile en test). |

---

## Connexion API

Paramètres techniques de connexion à l'API PPF.

| Champ | Description |
|---|---|
| **Base URL** | URL racine de l'API PPF (par exemple l'environnement de production ou de recette fourni par votre PA). |
| **Auth Endpoint** | Chemin permettant d'obtenir un jeton d'authentification (généralement un `POST` qui retourne un bearer token). Combiné à **Base URL**. |
| **Directory Endpoint** | Chemin de la requête routing-lines. Le placeholder `{{identifier}}` est remplacé à l'exécution par le SIREN/SIRET du destinataire. Exemple : `/api/v1/utils/ppf-directory/routing-lines/{{identifier}}`. |
| **Timeout (ms)** | Délai d'expiration des requêtes HTTP en millisecondes. Valeur par défaut `30000` (30 secondes). À augmenter sur des réseaux lents. |
| **SSL Verify** | `true` / `false` | Si `true`, NomaUBL valide le certificat TLS du serveur. À positionner à `false` uniquement en environnement non-production utilisant des certificats auto-signés. |

---

## Identifiants (Credentials)

Identifiants utilisés pour s'authentifier auprès de l'API PPF.

| Champ | Description |
|---|---|
| **Username** | Nom de compte fourni par le PPF ou la PA. |
| **Password** | Mot de passe du compte. |

---

## Recherche INSEE

Paramètres des appels de recherche INSEE utilisés dans NomaUBL pour récupérer les informations officielles d'un client à partir de sa **raison sociale, son SIREN ou son SIRET**.

| Champ | Description |
|---|---|
| **Results per page** | Nombre maximal de résultats renvoyés par requête de recherche INSEE. Valeur par défaut `10`. Augmenter pour élargir chaque page de résultats, diminuer pour limiter la taille des réponses réseau. |

---

## Conseils & bonnes pratiques

- **Maintenir Directory Check activé en production.** L'envoi d'une facture portant un code adressage inactif ou inconnu provoque un rejet en aval par la Plateforme Agréée destinataire.
- **Utiliser la recherche INSEE pour amorcer les fiches clients.** Une requête par SIREN / SIRET évite les erreurs de saisie et aligne les données NomaUBL sur le registre officiel.
- **Définir un Timeout réaliste.** Le PPF peut présenter une latence accrue en heures de pointe ; 30 s constitue une valeur de référence, à augmenter en cas d'erreurs de timeout récurrentes.
- **Ne jamais désactiver SSL Verify en production.** Cette désactivation expose les identifiants et les métadonnées des documents à des attaques de type man-in-the-middle.
