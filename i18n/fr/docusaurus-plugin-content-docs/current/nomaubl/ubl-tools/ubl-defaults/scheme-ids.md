---
title: Identifiants de schéma
description: "UBL Defaults — onglet Scheme IDs. Identifiants de schéma ISO 6523 / UNTDID 1153 / EAS rattachés au SIREN, SIRET, GLN, à l'adresse électronique et au lieu de livraison."
keywords: [NomaUBL, UBL, defaults, schéma, schemeID, SIREN, SIRET, GLN, endpoint, EAS, ISO 6523, BT-29, BT-30, BT-34, BT-49, BT-71, 0002, 0009, 0088, 0225]
---

# Identifiants de schéma

Tout identifiant de partie dans un document UBL porte un attribut `schemeID` qui nomme le **référentiel** auquel la valeur appartient (identifiants d'organisation ISO 6523, schéma d'adresse électronique EAS, etc.). L'onglet **Scheme IDs** fixe le code de schéma écrit par NomaUBL pour chaque type d'identifiant.

Le mécanisme de surcharge est décrit dans la [Vue d'ensemble](./overview.md).

---

## Identifiants de schéma

| Champ | UBL | Valeur typique | Référentiel |
|---|---|---|---|
| **SIREN** | BT-29 / BT-30 | `0002` | Référentiel SIREN (INSEE). |
| **SIRET** | BT-29 | `0009` | Référentiel SIRET (INSEE). |
| **GLN** | BT-29 | `0088` | Global Location Number GS1. |
| **Endpoint** | BT-34 / BT-49 | `0225` | EAS — schéma d'adresse électronique utilisé par le PPF. |
| **Delivery location** | BT-71 | (variable) | Référentiel du lieu de livraison. |

Chaque champ est alimenté par la liste de référence *scheme-ids* (voir *Configuration → Reference Lists*). Sélectionner la valeur correspondant au référentiel auquel l'identifiant appartient.

---

## Conseils & bonnes pratiques

- **Utiliser `0225` pour l'endpoint BT-49 en France.** La Plateforme Agréée reconnaît `0225` comme code EAS de l'annuaire d'adresses électroniques français. Toute autre valeur est rejetée par le contrôle d'adressage (REJ_ADR).
- **`0002` (SIREN) et `0009` (SIRET) ne sont pas interchangeables.** Ils renvoient à des référentiels différents (entité juridique vs établissement). Sélectionner celui qui correspond à la longueur et à la source de l'identifiant — un SIRET de 14 chiffres ne s'écrit jamais sous `0002`.
- **Surcharger par template uniquement pour un cas client divergent.** Le fichier de defaults convient à la quasi-totalité des déploiements ; les surcharges document sont réservées aux exceptions véritables (par ex. un template émettant des identifiants à clé GLN).
- **Ajouter les codes manquants dans la liste de référence, pas ici.** Si une valeur cible n'apparaît pas dans une déroulante, modifier la liste *scheme-ids* dans *Configuration → Reference Lists* — la modification se répercute sur toutes les déroulantes de cet onglet.
