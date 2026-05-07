---
title: Types de documents
description: "Configurer les sept codes de type de document NomaUBL qui structurent la Réforme française de la facturation électronique / e-reporting : description, sélection par défaut, politique d'envoi à la PA, mode de sortie et conservation des fichiers."
keywords: [NomaUBL, types de documents, B2B, B2G, B2C, B2BINT, OUTOFSCOPE, ARCHIVEONLY, e-invoicing, e-reporting, Chorus Pro, réforme facture électronique, JD Edwards, SAP, NetSuite]
---

# Types de documents

L'éditeur **Document Types** définit les sept codes de type de document utilisés dans l'ensemble de NomaUBL pour piloter la **Réforme française de la facturation électronique / e-reporting**.

## Rôle de la page

Lors du traitement d'un spool d'entrée, NomaUBL applique par défaut les **arguments d'exécution** passés au job (`Send to PA`, `Mode`, `Keep UBL`, etc.). Cette page permet de **surcharger ces arguments par défaut en fonction du code de type de document** détecté par NomaUBL dans le spool.

Le mécanisme est utile car **un même spool peut contenir plusieurs types de documents**. Exemple typique : un spool contient une facture **B2B** et une facture **B2C**. Sans surcharge par type, les deux factures héritent des mêmes arguments d'exécution ; avec cette page, il est possible — par exemple — de forcer l'envoi de la facture B2B vers la PA tout en conservant la facture B2C en local pour l'e-reporting uniquement.

Les sept codes sont fixés par la réglementation ; il n'est pas possible d'en ajouter ni d'en renommer. Ce qui est paramétrable ici est la **politique appliquée à chaque code** lorsqu'il apparaît dans un spool.

Cette page s'applique à des documents issus de n'importe quel système source — JD Edwards, SAP, NetSuite, ERP personnalisé — tant que la source est mappée vers UBL.

---

## Les sept codes de type de document

| Code | Portée réglementaire |
|---|---|
| **B2B** | Relève de l'**e-invoicing**. |
| **B2G** | Relève de l'**e-invoicing — secteur public** (Chorus Pro). |
| **B2BINT** | Relève de l'**e-reporting** des ventes B2B internationales. |
| **B2C** | Relève de l'**e-reporting — Ventes B2C**. |
| **OUTOFSCOPE** | Hors périmètre de la Réforme française de la facturation électronique. |
| **ARCHIVEONLY** | Avoir interne (annulation REJETÉE/REFUSÉE) — pas de flux 1, pas de transmission (règle réglementaire **BR-FR-20**). |
| **DOCUMENT** | Document hors facturation. |

---

## Paramètres par ligne

Chaque ligne de l'éditeur correspond à l'un des sept codes. La colonne **Code** est en lecture seule (les codes sont fixés par la réglementation) ; toutes les autres colonnes sont modifiables et constituent une **surcharge de l'argument d'exécution correspondant** pour les documents portant ce code.

| Colonne | Valeurs | Description |
|---|---|---|
| **Code** | figé | L'un des sept codes réglementaires ci-dessus. Lecture seule. Le survol du code affiche l'indication réglementaire associée. |
| **Description** | texte libre | Libellé affiché dans les modèles de documents et l'interface. Initialisé avec la description réglementaire ci-dessus. |
| **Default** | case à cocher | Quand cochée, ce code est **pré-sélectionné** dans les nouveaux modèles de documents créés. **Une seule ligne peut être marquée par défaut à la fois** — cocher une autre ligne décoche automatiquement la précédente. |
| **Send to PA** | `Y` / `N` / `F` | Surcharge par type de l'argument d'exécution *envoi vers Plateforme Agréée* : `Y` = envoi ; `N` = pas d'envoi ; `F` = **envoi forcé**, même quand l'argument d'exécution demande de l'ignorer. Valeur par défaut : `Y` pour B2B, `N` pour tous les autres codes. |
| **GS** | case à cocher | Quand cochée, exécute un post-traitement **Ghostscript** sur le PDF produit pour ce type (par ex. compression / linéarisation), indépendamment de l'argument d'exécution. Désactivé par défaut. |
| **Mode** | *(par défaut)* / `UBL` / `BURST` | Surcharge par type de l'argument d'exécution *Mode* : vide = **aucune surcharge** (le mode passé en argument est conservé) ; `UBL` = forcer une sortie UBL uniquement pour ce type ; `BURST` = forcer une sortie éclatée pour ce type. |
| **UBL** | case à cocher | Quand cochée, conserve le **fichier UBL** généré dans le répertoire de sortie *bursting* après traitement pour ce type. Valeur par défaut : `Y` (conservé). |
| **PDF** | case à cocher | Quand cochée, conserve le **fichier PDF** généré dans le répertoire de sortie *bursting* après traitement pour ce type. Valeur par défaut : `N` (non conservé). |

---

## Conseils & bonnes pratiques

- **Traiter chaque colonne hors Code/Description/Default comme une surcharge d'argument d'exécution.** Quand aucune surcharge n'est nécessaire, laisser la valeur vide ou décochée — l'argument d'exécution s'applique alors par défaut.
- **Définir un code Default aligné sur le flux dominant.** La plupart des installations placent `B2B` par défaut — la pré-sélection sur chaque nouveau modèle de document évite des saisies répétées.
- **Utiliser `F` (Force send) avec parcimonie.** Cette valeur surcharge l'argument d'exécution *Send to PA* et peut provoquer la transmission de factures dans des environnements supposés rester hors-ligne.
- **`ARCHIVEONLY` ne doit jamais atteindre la PA.** Ce code couvre les avoirs internes liés aux annulations (règle BR-FR-20) ; conserver Send to PA à `N`.
- **`OUTOFSCOPE` désigne les documents hors réforme.** Les conserver dans NomaUBL pour la traçabilité, mais ne pas les transmettre à une PA.
- **Conserver Keep PDF désactivé par défaut**, sauf si un outillage aval consomme le PDF éclaté — son activation alourdit le répertoire de bursting et ralentit les opérations de purge.
- **N'activer Ghostscript qu'en cas de besoin.** Cette option ajoute une étape de post-traitement sur chaque document du type concerné, ce qui peut représenter une charge significative sur les spools volumineux.
