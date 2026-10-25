---
title: Rapport d'audit
description: "Auditer la facturation électronique d'une période à partir des tables NomaUBL — synthèse comparée à la période précédente, volumes, situation par statut, reste à traiter, cycle de vie et délais, erreurs et leur traitement, exploitation et contrôles de cohérence — en PDF ou en Markdown, en français ou en anglais."
keywords: [NomaUBL, rapport d'audit, audit facturation électronique, rapport de période, indicateurs, taux de dépôt, validation du premier coup, rejets, refus, reste à traiter, délais, contrôles de cohérence, contrôles d'intégrité, PDF, Markdown, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Rapport d'audit

L'onglet **Rapport d'audit** de la page [Rapports](./overview.md) mesure le déroulement de la facturation électronique sur une période : combien de factures ont été traitées, déposées, approuvées, rejetées ou refusées, ce qui attend encore une action, la durée de chaque étape, les erreurs rencontrées et leur traitement. Les chiffres viennent **uniquement des tables NomaUBL** au moment de la génération ; la plateforme n'est pas interrogée.

Le rapport reste court quel que soit le volume — il ne liste aucune facture — et peut donc être transmis tel quel à une direction financière, à un auditeur ou à un comité de pilotage. Il s'applique à tout système source (JD Edwards, SAP, NetSuite ou ERP personnalisé).

Accès : **Rapports → Rapport d'audit**.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 389" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ar-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ar-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ar-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ar-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="345" rx="14" fill="url(#ar-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="32" width="122" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="301.0" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Statistiques statuts</text>
  <rect x="367" y="32" width="67" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="400.5" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Intégrité</text>
  <rect x="439" y="32" width="97" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="487.5" y="46.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Rapport d'audit</text>
  <rect x="541" y="32" width="142" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="612.0" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Rapport d'implémentation</text>
  <rect x="688" y="32" width="107" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="741.5" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Rapport technique</text>
  <line x1="220" y1="66" x2="980" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="88" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Audit d'une période à partir des tables NomaUBL : chiffres clés, volumes, situation, erreurs et traitement.</text>
  <text x="240" y="117" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période</text>
  <rect x="390" y="103" width="89" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="117.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Mois civil ▾</text>
  <rect x="485" y="103" width="65" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="495" y="117.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">2026-09</text>
  <text x="560" y="117" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">comparé au mois précédent</text>
  <text x="240" y="149" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Date de référence</text>
  <rect x="390" y="135" width="156" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="149.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Date d'émission (BT-2) ▾</text>
  <text x="640" y="149" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sociétés</text>
  <rect x="720" y="135" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="730" y="149.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">vide : toutes visibles</text>
  <text x="240" y="181" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Direction</text>
  <rect x="390" y="167" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="181.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Émises et reçues ▾</text>
  <text x="640" y="181" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Langue</text>
  <rect x="720" y="167" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="730" y="181.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Français ▾</text>
  <text x="240" y="213" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections</text>
  <rect x="390" y="204" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M392.5,209.5 L394.8,211.8 L398.8,207" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="407" y="213" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Synthèse</text>
  <rect x="650" y="204" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M652.5,209.5 L654.8,211.8 L658.8,207" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="667" y="213" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Volumes</text>
  <rect x="390" y="225" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M392.5,230.5 L394.8,232.8 L398.8,228" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="407" y="234" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Situation par statut</text>
  <rect x="650" y="225" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M652.5,230.5 L654.8,232.8 L658.8,228" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="667" y="234" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Reste à traiter, toutes périodes</text>
  <rect x="390" y="246" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M392.5,251.5 L394.8,253.8 L398.8,249" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="407" y="255" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Cycle de vie et délais</text>
  <rect x="650" y="246" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M652.5,251.5 L654.8,253.8 L658.8,249" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="667" y="255" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Erreurs et traitement</text>
  <rect x="390" y="267" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M392.5,272.5 L394.8,274.8 L398.8,270" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="407" y="276" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Exploitation sur la période</text>
  <rect x="650" y="267" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M652.5,272.5 L654.8,274.8 L658.8,270" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="667" y="276" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Contrôles de cohérence</text>
  <rect x="390" y="292" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="407" y="301" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Exécuter aussi les contrôles d'intégrité SQL avec JDE (plus long)</text>
  <rect x="240" y="319" width="134" height="26" rx="5" fill="url(#ar-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="307.0" y="335.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇ Télécharger le PDF</text>
  <rect x="382" y="319" width="162" height="26" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="463.0" y="335.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇ Télécharger le Markdown</text>
  <text x="560" y="329" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">En cours — Cycle de vie et délais · 5 / 9</text>
  <rect x="560" y="335" width="400" height="6" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="560" y="335" width="222" height="6" rx="3" fill="#4a9eff"/>
  <rect x="20" y="26" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">3e onglet des Rapports</text>
  <text x="30" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Rapports → Rapport d'audit</text>
  <line x1="200" y1="43.0" x2="240" y2="43" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mois ou dates libres, comparés</text>
  <line x1="200" y1="117.0" x2="390" y2="114" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">toutes cochées par défaut</text>
  <line x1="200" y1="227.0" x2="390" y2="222" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="1000" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Périmètre</text>
  <text x="1010" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sociétés · direction · langue</text>
  <line x1="1000" y1="147.0" x2="870" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="1000" y="279" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="294" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Contrôles d'intégrité</text>
  <text x="1010" y="307" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">facultatifs, sur la source</text>
  <line x1="1000" y1="296.0" x2="720" y2="297" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="1000" y="349" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="364" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécution en arrière-plan</text>
  <text x="1010" y="377" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la barre nomme l'étape</text>
  <line x1="1000" y1="366.0" x2="950" y2="338" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
</svg>

| Contrôle | Description |
|---|---|
| **Période** | Liste déroulante : **Mois civil** (le mois précédent par défaut), comparé au mois d'avant ; ou **Dates libres**, comparées au même nombre de jours avant. Une plage qui couvre des mois entiers, un trimestre ou une année se compare aux mois précédents de même durée. |
| **Date de référence** | **Date d'émission (BT-2)** — une facture appartient à la période par sa date d'émission — ou **Dernière mise à jour**. Statuts et montants sont toujours ceux du jour de génération. |
| **Sociétés** | Codes société séparés par des virgules ; vide = toutes les sociétés visibles par l'utilisateur connecté. La visibilité par société du rôle s'applique dans tous les cas. |
| **Direction** | Émises et reçues, émises seulement, reçues seulement. |
| **Langue** | Français ou anglais ; par défaut, la langue de l'interface. |
| **Sections** | Cocher les parties à inclure ; toutes sont cochées par défaut. |
| **Exécuter aussi les contrôles d'intégrité SQL avec JDE** | Visible quand *Contrôles de cohérence* est cochée. Exécute sur la période les contrôles configurés dans [Rapports d'intégrité](../../configuration/system/integrity-reports.md) et ajoute leur nombre d'écarts. Plus long : chaque contrôle interroge le système source. |
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
| **Hors envoi plateforme** | Factures dont le type de flux est réglé pour ne pas être envoyé (B2C, international… selon les [types de document](../../configuration/system/document-types.md)). |
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

Ce qui attend encore une action **quelle que soit sa date** : factures en erreur ou refusées non vues par le service client, en attente de la plateforme, déposées sans être transmises. Par statut avec le nombre de plus de 30 jours, le nombre déjà vu et le montant HT ; par société ; par ancienneté (30 jours ou moins, 31 à 90, 91 à 180, plus de 180) avec un graphique. La **Min invoice date** des [réglages e-invoicing](../../configuration/system/einvoicing.md) borne ces chiffres : les factures antérieures en sont exclues.

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

Avec l'option d'intégrité, suivent les **contrôles d'intégrité SQL avec JDE** et leur nombre d'écarts ; le détail se trouve dans l'onglet [Intégrité](./overview.md#integrite). L'ordre du cycle de vie et les événements de plateforme manquants localement sont couverts par le [contrôle quotidien du cycle de vie](../../sync/scheduled-jobs/lifecycle-checks.md).

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

Par défaut : le mois précédent, toutes les sections, en Markdown, en français. Voir [Ligne de commande](../../management/command-line.md#audit).

L'API produit le même rapport en arrière-plan : `POST /api/reports/audit/start` renvoie un identifiant de tâche, `GET /api/jobs/{id}` donne l'étape en cours, `GET /api/reports/audit/result/{jobId}` renvoie le fichier une seule fois.

---

## Accès

L'onglet fait partie de la page *Rapports* : accorder **Rapports** sur la page [Rôles](../../configuration/security/roles.md). Les chiffres suivent la visibilité par société de l'utilisateur connecté.

---

## Conseils & bonnes pratiques

- **Le produire le premier jour ouvré du mois** pour le mois précédent : c'est exactement la période par défaut.
- **Lire le reste à traiter avec les constats.** La synthèse porte sur les factures de la période ; le reste à traiter montre ce que les périodes antérieures laissent encore ouvert.
- **Marquer vues les factures traitées hors NomaUBL.** Un avoir émis directement dans l'ERP ne change pas le statut de la facture d'origine ; la marquer vue garde un reste à traiter significatif.
- **Renseigner la Min invoice date après une mise en production.** Les factures de test ou de reprise antérieures sortent alors des chiffres toutes périodes.
- **La durée de chaque étape est écrite dans le journal serveur.** Sur une instance volumineuse, le [journal serveur](../diagnostics/server-log.md) montre la section qui prend du temps.
