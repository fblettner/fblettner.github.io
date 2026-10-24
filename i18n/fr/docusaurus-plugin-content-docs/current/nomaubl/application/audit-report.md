---
title: Rapport d'audit
description: "Auditer la facturation électronique d'une période à partir des tables NomaUBL — synthèse comparée à la période précédente, volumes, situation par statut, reste à traiter, cycle de vie et délais, erreurs et leur traitement, exploitation et contrôles de cohérence — en PDF ou en Markdown, en français ou en anglais."
keywords: [NomaUBL, rapport d'audit, audit facturation électronique, rapport de période, indicateurs, taux de dépôt, validation du premier coup, rejets, refus, reste à traiter, délais, contrôles de cohérence, contrôles d'intégrité, PDF, Markdown, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Rapport d'audit

L'onglet **Rapport d'audit** de la page [Rapports](./reports.md) mesure le déroulement de la facturation électronique sur une période : combien de factures ont été traitées, déposées, approuvées, rejetées ou refusées, ce qui attend encore une action, la durée de chaque étape, les erreurs rencontrées et leur traitement. Les chiffres viennent **uniquement des tables NomaUBL** au moment de la génération ; la plateforme n'est pas interrogée.

Le rapport reste court quel que soit le volume — il ne liste aucune facture — et peut donc être transmis tel quel à une direction financière, à un auditeur ou à un comité de pilotage. Il s'applique à tout système source (JD Edwards, SAP, NetSuite ou ERP personnalisé).

Accès : **Rapports → Rapport d'audit**.

---

## Vue d'ensemble

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '13px'}}>
  <div style={{opacity: 0.75, marginBottom: '12px'}}>Audit d'une période à partir des tables NomaUBL : chiffres clés avec la période précédente, volumes, situation par statut, erreurs et leur traitement. La plateforme n'est pas interrogée.</div>
  <div style={{display: 'grid', gridTemplateColumns: '150px 1fr', gap: '8px 12px', alignItems: 'center'}}>
    <b>Période</b><span><span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>Mois civil ▾</span> <span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>2026-09</span> <span style={{opacity: 0.6}}>comparé au mois précédent</span></span>
    <b>Date de référence</b><span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', width: '180px'}}>Date d'émission (BT-2) ▾</span>
    <b>Sociétés</b><span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.6}}>vide : toutes les sociétés visibles</span>
    <b>Direction</b><span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', width: '180px'}}>Émises et reçues ▾</span>
    <b>Langue</b><span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', width: '180px'}}>Français ▾</span>
    <b>Sections</b><span style={{lineHeight: 1.9}}>☑ Synthèse · ☑ Volumes · ☑ Situation par statut · ☑ Reste à traiter, toutes périodes · ☑ Cycle de vie et délais · ☑ Erreurs et traitement · ☑ Exploitation sur la période · ☑ Contrôles de cohérence</span>
    <span></span><span>☐ Exécuter aussi les contrôles d'intégrité SQL avec JDE (plus long)</span>
  </div>
  <div style={{display: 'flex', gap: '8px', marginTop: '14px', alignItems: 'center'}}>
    <span style={{padding: '6px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontWeight: 600}}>Télécharger le PDF</span>
    <span style={{padding: '6px 14px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.35)'}}>Télécharger le Markdown</span>
    <span style={{flex: 1, marginLeft: '12px'}}><span style={{opacity: 0.7}}>En cours — Cycle de vie et délais · 5 / 9</span><span style={{display: 'block', height: '6px', borderRadius: '3px', background: 'rgba(148,163,184,0.2)', marginTop: '4px'}}><span style={{display: 'block', width: '55%', height: '6px', borderRadius: '3px', background: '#4a9eff'}}></span></span></span>
  </div>
</div>

| Contrôle | Description |
|---|---|
| **Période** | Liste déroulante : **Mois civil** (le mois précédent par défaut), comparé au mois d'avant ; ou **Dates libres**, comparées au même nombre de jours avant. Une plage qui couvre des mois entiers, un trimestre ou une année se compare aux mois précédents de même durée. |
| **Date de référence** | **Date d'émission (BT-2)** — une facture appartient à la période par sa date d'émission — ou **Dernière mise à jour**. Statuts et montants sont toujours ceux du jour de génération. |
| **Sociétés** | Codes société séparés par des virgules ; vide = toutes les sociétés visibles par l'utilisateur connecté. La visibilité par société du rôle s'applique dans tous les cas. |
| **Direction** | Émises et reçues, émises seulement, reçues seulement. |
| **Langue** | Français ou anglais ; par défaut, la langue de l'interface. |
| **Sections** | Cocher les parties à inclure ; toutes sont cochées par défaut. |
| **Exécuter aussi les contrôles d'intégrité SQL avec JDE** | Visible quand *Contrôles de cohérence* est cochée. Exécute sur la période les contrôles configurés dans [Rapports d'intégrité](../configuration/system/integrity-reports.md) et ajoute leur nombre d'écarts. Plus long : chaque contrôle interroge le système source. |
| **Télécharger le PDF / Télécharger le Markdown** | Lance la génération **en arrière-plan**. Une barre de progression nomme l'étape en cours ; le fichier se télécharge à la fin et une copie est conservée dans `<appHome>/<env>/reports/nomaubl-audit-<date>-<heure>.pdf` ou `.md`. Le reste de l'application reste utilisable pendant ce temps. |

---

## Sections

### Périmètre

Environnement, période et période de comparaison, date de référence, sociétés, direction, date de génération et auteur, version, et les tables lues : en-tête de facture (statut et montants), archive, ventilation de TVA, cycle de vie, contrôles de validation.

### Synthèse

Les chiffres clés de la période, à côté de la période précédente et de l'écart :

| Indicateur | Signification |
|---|---|
| **Factures traitées** | Factures de la période, quel que soit leur statut. |
| **Hors envoi plateforme** | Factures dont le type de flux est réglé pour ne pas être envoyé (B2C, international… selon les [types de document](../configuration/system/document-types.md)). |
| **Déposées sur la plateforme** | Factures dont le statut courant vient de la plateforme (`200` et suivants). Le **taux de dépôt** se calcule sur les factures **à envoyer**. |
| **Déposées mais non transmises** | `200` avec le motif `NON_TRANSMISE` : le destinataire n'est inscrit auprès d'aucune plateforme ; la facture est à remettre par un autre canal. |
| **Approuvées / complétées / payées**, **Refusées (`210`)**, **Rejetées (`213`)** | Issues de la période. |
| **À corriger et renvoyer** | `213`, `9905`, `9907`. |
| **Réponse à l'acheteur attendue** | `207`, `208`, `210`. |
| **En erreur aujourd'hui**, **En attente de la plateforme (`9906`)**, **Exclues par règle (`9914`)**, **Factures reçues** | États à la date de génération. |
| **Montants HT et TTC déposés** | Totaux BT-109 et BT-112 des factures déposées. |
| **Validées du premier coup** | Part des factures validées sans contrôle bloquant à leur premier traitement, d'après le cycle de vie. |
| **Part en statut terminal** | Parmi les factures à envoyer. |
| **Délais** | Création → dépôt et dépôt → premier statut acheteur, médiane et 90e centile. |
| **Tentatives d'envoi, renvois, taux d'échec d'envoi** | Chaque envoi se termine par un échec (`9904`) ou une prise en compte (`9906`) ; le taux d'échec mesure la disponibilité de la plateforme (HTTP 429, 503…). Les renvois comprennent les relances automatiques. |

Suit une décomposition où chaque niveau tombe juste : hors envoi, à envoyer, déposées (non transmises, en attente du statut suivant, en cours à la plateforme, approuvées, rejetées ou refusées), non déposées (échec de validation, d'envoi ou d'import, pas encore envoyées, autres). Puis les **constats** en clair : factures en erreur non vues, déposées non transmises, à corriger et renvoyer, en attente d'une réponse à l'acheteur, enveloppes de e-reporting en échec, reste à traiter toutes périodes, renvois, retraitements et corrections d'identifiants acheteur de la période.

### Volumes

L'évolution au sein de la période — par jour jusqu'à un mois, par semaine jusqu'à six mois, par mois au-delà — avec les factures, celles à envoyer, déposées et en erreur, et un graphique. Puis par **activité** (nombre, part, période précédente, écart, montants ; taux de dépôt et d'erreur dans un second tableau), par **société**, par **document**, par **type de flux** (avec son indicateur d'envoi) et par **catégorie et taux de TVA** (base et TVA).

### Situation à la date de génération

Le statut courant des factures de la période : code, libellé, groupes du catalogue, nombre, part, montant TTC ; la même lecture par **famille** (terminal, en cours, erreur technique, erreur métier, exclues, autres) avec un graphique en anneau ; puis les points d'attention (en attente de la plateforme depuis plus de 2 jours, déposées non transmises, en erreur et non vues).

### Reste à traiter, toutes périodes

Ce qui attend encore une action **quelle que soit sa date** : factures en erreur ou refusées non vues par le service client, en attente de la plateforme, déposées sans être transmises. Par statut avec le nombre de plus de 30 jours, le nombre déjà vu et le montant HT ; par société ; par ancienneté (30 jours ou moins, 31 à 90, 91 à 180, plus de 180) avec un graphique. La **Min invoice date** des [réglages e-invoicing](../configuration/system/einvoicing.md) borne ces chiffres : les factures antérieures en sont exclues.

:::info[Ce que signifie « vue »]
Une facture est *vue* dès que le service client l'a marquée traitée dans la fenêtre de facture. Elle sort du reste à traiter même si son statut n'a pas changé (avoir émis hors NomaUBL, facture abandonnée, doublon…).
:::

### Cycle de vie et délais

Les factures de la période qui atteignent chaque étape pour la première fois — créées, validées, échec de validation, envoyées, déposées (premier statut de plateforme), reçues, approuvées, refusées, rejetées, payées — par intervalle avec un graphique ; les délais création → premier envoi, premier envoi → dépôt, création → dépôt, dépôt → premier statut acheteur (médiane et 90e centile, en jours calendaires) ; puis les compteurs d'actions : tentatives et échecs d'envoi, renvois, retraitements (`9912`), corrections d'identifiants acheteur.

### Erreurs et leur traitement

- **Contrôles de validation par règle** : source (CIUS-FR, EXT-CTC-FR, CPRO-B2G, XSD, règles NomaUBL…), règle, niveau, nombre de contrôles et de factures, exemple de message ; un graphique des règles les plus fréquentes et un tableau par source des contrôles bloquants et des avertissements. Les contrôles d'une facture retraitée sont ceux de son dernier traitement.
- **Rejets et refus de la plateforme et de l'acheteur** : statut, code et libellé du motif, événements, factures.
- **Échecs d'envoi et d'import** : les 30 messages les plus fréquents avec leur nombre.
- **Traitement** : factures ayant eu une erreur sur la période, résolues (statut sorti des statuts d'erreur), toujours en erreur mais vues, ouvertes depuis 7 jours ou moins, 8 à 30 jours, plus de 30 jours ; événements par statut ; renvois, retraitements et corrections.

### Exploitation sur la période

Ce que le serveur a fait, indépendamment de la date des factures : **exécutions des tâches planifiées** (exécutions, erreurs, durée moyenne et maximale, dernier résultat), **fichiers traités et factures intégrées** par document avec la période précédente, **notifications du portail** par règle, **enveloppes de e-reporting** par statut. Une enveloppe en échec est signalée : ses opérations ne sont pas déclarées tant qu'elle n'est pas corrigée et redéposée.

### Contrôles de cohérence

Chaque contrôle compte les factures qui ne respectent pas une règle, sur la période et toutes périodes confondues ; `0` signifie conforme.

| Contrôle | Ce qu'il détecte |
|---|---|
| Statut de plateforme sans identifiant de plateforme | L'identifiant manque quand le statut a été posé à la main ou par une récupération de statuts sans confirmation d'import. Non bloquant. |
| Facture envoyée sans UBL archivé | Une facture envoyée dont l'UBL n'est pas conservé. |
| En attente de la plateforme depuis plus de 2 jours | `9906` qui s'éternise. |
| Numéro de facture en double dans une société | Deux factures portant le même numéro. |
| Total TVA (BT-110) ≠ somme de la ventilation (BT-117) | En-tête comparé à la ventilation de TVA enregistrée. |
| Total HT (BT-109) ≠ somme des lignes (BT-131) | En-tête comparé aux lignes enregistrées. |
| Ventilation de TVA avec un montant mais sans taux (BT-119) | La facture est déclarée avec une TVA sans taux. |
| À corriger et renvoyer sans suite | `213`, `9905`, `9907` ni traités ni vus. |
| Réponse à l'acheteur attendue sans suite | `207`, `208`, `210` ni traités ni vus ; un avoir interne est obligatoire pour une facture refusée. |

Avec l'option d'intégrité, suivent les **contrôles d'intégrité SQL avec JDE** et leur nombre d'écarts ; le détail se trouve dans l'onglet [Intégrité](./reports.md#integrite). L'ordre du cycle de vie et les événements de plateforme manquants localement sont couverts par le [contrôle quotidien du cycle de vie](../sync/scheduled-jobs/lifecycle-checks.md).

---

## Mise en page du PDF

Même présentation que le [rapport d'implémentation](./implementation-report.md) : page de garde avec l'environnement, la période, la date, l'auteur et la version ; table des matières cliquable ; en-tête et pied de page ; notes de lecture encadrées ; graphiques tracés dans le PDF (barres par intervalle et par activité, anneau des familles de statut, étapes par intervalle, règles les plus fréquentes).

---

## Ligne de commande

```bash
java -jar nomaubl.jar -audit <configFile> [--from <yyyy-MM-dd> --to <yyyy-MM-dd>] \
     [--basis issue|update] [--kco a,b] [--direction I|R] [--lang fr|en] \
     [--format md|pdf] [--out <file>] [--date <label>] [--sections a,b,...] [--integrity]
```

Par défaut : le mois précédent, toutes les sections, en Markdown, en français. Voir [Ligne de commande](../management/command-line.md#audit).

L'API produit le même rapport en arrière-plan : `POST /api/reports/audit/start` renvoie un identifiant de tâche, `GET /api/jobs/{id}` donne l'étape en cours, `GET /api/reports/audit/result/{jobId}` renvoie le fichier une seule fois.

---

## Accès

L'onglet fait partie de la page *Rapports* : accorder **Rapports** sur la page [Rôles](../configuration/security/roles.md). Les chiffres suivent la visibilité par société de l'utilisateur connecté.

---

## Conseils & bonnes pratiques

- **Le produire le premier jour ouvré du mois** pour le mois précédent : c'est exactement la période par défaut.
- **Lire le reste à traiter avec les constats.** La synthèse porte sur les factures de la période ; le reste à traiter montre ce que les périodes antérieures laissent encore ouvert.
- **Marquer vues les factures traitées hors NomaUBL.** Un avoir émis directement dans l'ERP ne change pas le statut de la facture d'origine ; la marquer vue garde un reste à traiter significatif.
- **Renseigner la Min invoice date après une mise en production.** Les factures de test ou de reprise antérieures sortent alors des chiffres toutes périodes.
- **La durée de chaque étape est écrite dans le journal serveur.** Sur une instance volumineuse, le [journal serveur](./diagnostics/server-log.md) montre la section qui prend du temps.
