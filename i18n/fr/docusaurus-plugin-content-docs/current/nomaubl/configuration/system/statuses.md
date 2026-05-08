---
title: Statuts
description: "Définit les statuts de cycle de vie reconnus par NomaUBL : code réglementaire, Tag interne, libellés bilingues, nom d'événement attendu par la Plateforme Agréée, indicateur Collect pour le polling PA, et Groupes qui pilotent les compteurs du tableau de bord et les filtres SQL. Champ de recherche, formulaire dépliable par statut, multi-sélection des groupes avec pastilles colorées."
keywords: [NomaUBL, statuts, cycle de vie facture, e-invoicing, e-reporting, Plateforme Agréée, code statut, groupes de statut, InvoiceStatusCatalog, polling, tableau de bord, JD Edwards, SAP, NetSuite]
---

# Statuts

L'éditeur **Statuts** définit les **statuts de cycle de vie** qu'une facture peut prendre dans NomaUBL — codes tels que `200` *Déposée*, `205` *Paiement reçu*, `9906` *En cours de traitement*. Les mêmes codes apparaissent dans **E-Invoicing → Actions**, dans la **modale de détail facture** et dans tous les widgets du tableau de bord.

Chaque ligne associe un code réglementaire à :

- le **Tag interne** référencé par les fabriques `InvoiceStatusCatalog` du code Java ;
- les **libellés bilingues** affichés dans l'interface ;
- le **PA Code** envoyé à l'API de la Plateforme Agréée ;
- un indicateur **Collect** qui détermine si le statut est interrogé depuis la PA ;
- les **Groupes** qui rattachent le statut aux compteurs du tableau de bord et aux filtres SQL.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé — tant que la source est mappée vers UBL.

:::info[Refonte en 2026.05.5]
Deux évolutions livrées en 2026.05.5 :

- **Champ Groupes** — chaque statut déclare désormais le compteur *de niveau supérieur* auquel il appartient (`inflight`, `errorTech`, `errorBusiness`, `terminal`) et l'*étape funnel* sur laquelle il se positionne (`created`, `sent`, `pending`, `transmission`, `approved`, `rejected`). Les compteurs du tableau de bord et les filtres SQL de `DashboardApi` sont alimentés par cette source unique au lieu de listes `IN ('9904','9905',…)` codées en dur. Ajouter un nouveau statut PA tient en une ligne dans le template.
- **Tag en lecture seule** — les valeurs de `Tag` sont référencées par les fabriques `InvoiceStatusCatalog` en Java ; un renommage casserait silencieusement les appelants, l'éditeur les protège donc.
- **Édition en ligne** — chaque ligne est une carte qui se déplie en un formulaire à 4 colonnes (Code, Tag, PA Code, Polling sur la 1re ligne ; libellés FR + EN sur deux colonnes chacun sur la 2e ; multi-sélection des Groupes sur la 3e). La barre d'outils embarque un champ de recherche qui couvre Code, Tag, libellés, PA Code et libellés de groupes.
:::

---

## Accès à l'éditeur

- Barre latérale → **Configuration → Système → Statuts** *(ou `/settings/statuses` directement)*.
- La liste s'ouvre sur l'ensemble des statuts déclarés, triés par code. Le champ de recherche filtre la liste ; un clic sur une ligne la déplie.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 660" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="status-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="status-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="status-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="620" rx="14" fill="url(#status-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Définition des statuts de facture</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="240" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="102" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">🔍 Rechercher code, tag, libellé, groupe…</text>
  <text x="640" y="102" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">12 / 12</text>
  <rect x="700" y="84" width="80" height="28" rx="6" fill="url(#status-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="740" y="102" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter</text>

  <rect x="240" y="124" width="540" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="144" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▸</text>
  <text x="280" y="144" fill="#cbd5e1" fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="700">9903</text>
  <text x="320" y="144" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">STATUS_SENT</text>
  <text x="440" y="144" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">Envoyée à la PA</text>
  <text x="540" y="144" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">· Sent to PA</text>
  <rect x="650" y="132" width="58" height="16" rx="8" fill="rgba(0,122,255,0.18)" stroke="rgba(0,122,255,0.40)" strokeWidth="1"/>
  <text x="679" y="143" fill="rgb(0,122,255)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">En cours</text>
  <rect x="712" y="132" width="48" height="16" rx="8" fill="rgba(0,122,255,0.18)" stroke="rgba(0,122,255,0.40)" strokeWidth="1"/>
  <text x="736" y="143" fill="rgb(0,122,255)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Envoi</text>

  <rect x="240" y="170" width="540" height="350" rx="10" fill="rgba(74,158,255,0.04)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="260" y="192" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▾</text>
  <text x="280" y="192" fill="#e2e8f0" fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="700">9904</text>
  <text x="320" y="192" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">STATUS_REJECTED_PA_TECH</text>
  <text x="500" y="192" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Rejet technique PA</text>
  <rect x="652" y="180" width="78" height="16" rx="8" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="691" y="191" fill="rgb(255,69,58)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Err · Tech</text>
  <rect x="734" y="180" width="40" height="16" rx="8" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="754" y="191" fill="rgb(255,69,58)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Rejet</text>

  <line x1="240" y1="208" x2="780" y2="208" stroke="#1f2937" strokeWidth="1"/>

  <text x="262" y="226" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CODE</text>
  <rect x="262" y="232" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="249" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">9904</text>

  <text x="392" y="226" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TAG</text>
  <rect x="392" y="232" width="120" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="402" y="249" fill="#64748b" fontSize="11" fontFamily="ui-monospace, monospace">STATUS_REJECTED_PA_TECH</text>
  <text x="392" y="270" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif" fontStyle="italic">Lecture seule · référencé en Java</text>

  <text x="522" y="226" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PA CODE</text>
  <rect x="522" y="232" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="532" y="249" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">fr_e_invoicing_9904</text>

  <text x="652" y="226" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POLLING</text>
  <rect x="652" y="232" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="659" y="244" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="675" y="245" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Interroger via la PA</text>

  <text x="262" y="298" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIBELLÉ · FRANÇAIS</text>
  <rect x="262" y="304" width="250" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="321" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Rejet technique PA</text>

  <text x="522" y="298" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIBELLÉ · ANGLAIS</text>
  <rect x="522" y="304" width="250" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="532" y="321" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Rejected — Tech</text>

  <text x="262" y="358" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GROUPES</text>
  <text x="262" y="372" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif" fontStyle="italic">Niveau supérieur (compteurs / SQL) + étapes funnel (graphes)</text>

  <rect x="262" y="384" width="160" height="28" rx="6" fill="rgba(0,122,255,0.18)" stroke="rgba(0,122,255,0.40)" strokeWidth="1.2"/>
  <rect x="270" y="392" width="12" height="12" rx="2" fill="rgb(0,122,255)" stroke="rgb(0,122,255)" strokeWidth="1"/>
  <text x="276" y="402" fill="white" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="290" y="402" fill="rgb(0,122,255)" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600">En cours</text>

  <rect x="430" y="384" width="160" height="28" rx="6" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1.2"/>
  <rect x="438" y="392" width="12" height="12" rx="2" fill="rgb(255,69,58)" stroke="rgb(255,69,58)" strokeWidth="1"/>
  <text x="444" y="402" fill="white" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="458" y="402" fill="rgb(255,69,58)" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600">Erreur · Tech</text>

  <rect x="598" y="384" width="174" height="28" rx="6" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <rect x="606" y="392" width="12" height="12" rx="2" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="626" y="402" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Erreur · Métier</text>

  <rect x="262" y="420" width="160" height="28" rx="6" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <rect x="270" y="428" width="12" height="12" rx="2" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="438" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Terminal</text>

  <rect x="430" y="420" width="160" height="28" rx="6" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <rect x="438" y="428" width="12" height="12" rx="2" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="458" y="438" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Étape · Créée</text>

  <rect x="598" y="420" width="174" height="28" rx="6" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1.2"/>
  <rect x="606" y="428" width="12" height="12" rx="2" fill="rgb(255,69,58)" stroke="rgb(255,69,58)" strokeWidth="1"/>
  <text x="612" y="438" fill="white" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="626" y="438" fill="rgb(255,69,58)" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600">Étape · Rejetée</text>

  <rect x="240" y="532" width="540" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="552" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▸</text>
  <text x="280" y="552" fill="#cbd5e1" fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="700">9905</text>
  <text x="320" y="552" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">STATUS_REJECTED_PA_FUNC</text>
  <text x="466" y="552" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">Rejet fonctionnel PA</text>
  <rect x="600" y="540" width="100" height="16" rx="8" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="650" y="551" fill="rgb(255,159,10)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Err · Métier</text>
  <rect x="704" y="540" width="56" height="16" rx="8" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="732" y="551" fill="rgb(255,69,58)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Rejet</text>

  <rect x="240" y="578" width="540" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="598" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▸</text>
  <text x="280" y="598" fill="#cbd5e1" fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="700">200</text>
  <text x="320" y="598" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">STATUS_DEPOSITED</text>
  <text x="440" y="598" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">Déposée · Deposited</text>
  <rect x="600" y="586" width="80" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="640" y="597" fill="rgb(50,215,75)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Terminal</text>
  <rect x="684" y="586" width="76" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="722" y="597" fill="rgb(50,215,75)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Acceptée</text>

  <rect x="20" y="84" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Champ de recherche</text>
  <text x="30" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">code · tag · libellés · PA · groupes</text>
  <line x1="200" y1="100" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#status-arrow)"/>

  <rect x="820" y="170" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pastilles de groupes</text>
  <text x="830" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la couleur reprend le niveau</text>
  <line x1="820" y1="186" x2="780" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#status-arrow)"/>

  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tag · lecture seule</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un renommage casse Java</text>
  <line x1="200" y1="256" x2="240" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#status-arrow)"/>

  <rect x="820" y="240" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Polling</text>
  <text x="830" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">interrogation depuis la PA</text>
  <line x1="820" y1="256" x2="780" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#status-arrow)"/>

  <rect x="820" y="392" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="407" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Multi-sélection</text>
  <text x="830" y="420" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">niveau supérieur + étapes</text>
  <line x1="820" y1="408" x2="780" y2="400" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#status-arrow)"/>
</svg>

---

## Champs par ligne

| Colonne | Exemple | Description |
|---|---|---|
| **Code** | `200` | Code de statut réglementaire enregistré en base (`tableHeader`). Identifiant canonique du statut dans NomaUBL. |
| **Tag** *(lecture seule)* | `STATUS_DEPOSITED` | Nom interne référencé par les fabriques `InvoiceStatusCatalog` du code Java. L'éditeur l'affiche en lecture seule — un renommage casserait silencieusement les appelants Java. |
| **Libellé · Français** | `Déposée` | Libellé français affiché dans l'interface quand la locale active est le français. |
| **Libellé · Anglais** | `Deposited` | Libellé anglais affiché dans l'interface quand la locale active est l'anglais. |
| **PA Code** | `fr_e_invoicing_200` | Nom d'événement transmis à l'API de la Plateforme Agréée — placé dans le tableau `names[]` des appels de statut. Doit correspondre exactement à ce qu'attend la PA. |
| **Polling — Interroger via la PA** | case à cocher | Quand cochée, NomaUBL interroge ce statut auprès de l'API de la PA à chaque exécution de *Synchronisation → Récupérer les statuts*. Décocher pour exclure un statut du polling. |
| **Groupes** | multi-sélection | Compteur de niveau supérieur et étape funnel auxquels le statut est rattaché — alimente les widgets du tableau de bord et les filtres SQL de `DashboardApi`. Voir [Groupes](#groupes) ci-dessous. |

Le bouton **+ Ajouter** crée une ligne. La nouvelle ligne s'ouvre directement avec des champs vides. Cliquer sur l'en-tête d'une ligne la déplie ou la replie ; cliquer sur l'icône **×** à droite de l'en-tête supprime la ligne.

---

## Groupes

Le champ Groupes remplace les anciennes colonnes CSV et les listes `IN ('9904','9905',…)` codées en dur dans le backend du tableau de bord. Il propose dix valeurs prédéfinies sur deux axes :

### Niveau supérieur — compteurs et filtres SQL

| Valeur | Libellé | Utilisé par |
|---|---|---|
| `inflight` | **En cours** | Carte hero *En cours* du tableau de bord ; filtres SQL qui dénombrent les factures « encore en mouvement ». |
| `errorTech` | **Erreur · Tech** | Carte hero *Rejetée — IT* du tableau de bord ; remonte les échecs techniques / pipeline (XSL, PDF, HTTP PA, base). |
| `errorBusiness` | **Erreur · Métier** | Carte hero *Rejetée — Métier* du tableau de bord ; remonte les échecs de validation / réglementaires émis par l'acheteur ou la PA. |
| `terminal` | **Terminal** | Drill-down *Total* du tableau de bord pour les factures en fin de vie (déposée, payée, archivée, refusée). |

### Étapes funnel — graphes du pipeline

| Valeur | Libellé | Utilisé par |
|---|---|---|
| `created` | **Étape · Créée** | *Funnel pipeline* — créée localement, pas encore envoyée. |
| `sent` | **Étape · Envoi** | *Funnel pipeline* — envoyée à la PA, en attente d'acquittement. |
| `pending` | **Étape · Attente PA** | *Funnel pipeline* — PA a acquitté, en attente du traitement aval. |
| `transmission` | **Étape · Transmission** | *Funnel pipeline* — transmise à la PA de l'acheteur. |
| `approved` | **Étape · Acceptée** | *Funnel pipeline* / *Couverture e-Reporting* — acceptée à chaque étape. |
| `rejected` | **Étape · Rejetée** | *Funnel pipeline* / *Couverture e-Reporting* — rejetée à une étape quelconque. |

Un statut déclare **autant de groupes que nécessaire** — typiquement une valeur de niveau supérieur plus une étape. La palette des pastilles de l'en-tête de ligne reprend celle de la multi-sélection : l'affectation se vérifie d'un coup d'œil.

L'endpoint `/api/status-codes/groups` sert la carte fusionnée, et le store React `statusGroupsStore` la met en cache une fois au démarrage de l'application. Ajouter un nouveau code de statut PA devient une modification d'une ligne dans le template — aucune intervention Java requise.

---

## Articulation des champs entre eux

- **Code** est la source de vérité en base (`tableHeader`).
- **Tag** est consommé par le code applicatif via les fabriques `InvoiceStatusCatalog`. L'éditeur le protège.
- **Libellé · Français / Anglais** alimentent les textes d'interface. Les deux doivent être renseignés — quand un libellé est vide, l'interface se replie sur le Code.
- **PA Code** définit le contrat avec la Plateforme Agréée. Si la PA renomme un événement, seul `paCode` doit changer ici — le Tag reste stable, donc le code Java n'est pas impacté.
- **Collect** pilote la boucle de polling déclenchée par *Synchronisation → Récupérer les statuts*. Les statuts positionnés uniquement en local (résultats de validation interne par exemple) ont en général *Collect* désactivé.
- **Groupes** alimente les compteurs du tableau de bord via `/api/status-codes/groups`. Un statut sans groupe est invisible au tableau de bord.

---

## Conseils & bonnes pratiques

- **Aligner les Codes sur la réglementation.** C'est le langage commun entre NomaUBL, la PA et les outils aval — éviter les codes personnalisés.
- **Traiter le Tag comme un contrat interne stable.** Il est en lecture seule à dessein ; un renommage doit modifier `InvoiceStatusCatalog` *et* ce template dans le même commit.
- **Faire correspondre les PA Codes exactement au catalogue de la PA.** Une faute de frappe dans `fr_e_invoicing_xxx` produit des échecs d'intégration silencieux (la PA rejette les noms d'événements inconnus).
- **Cocher Collect uniquement sur les statuts effectivement émis par la PA.** Interroger des statuts non supportés gaspille des appels API et pollue les journaux par des résultats vides.
- **Affecter au moins un groupe de niveau supérieur à chaque statut actif.** Faute de quoi les cartes hero *En cours / Rejetée — IT / Rejetée — Métier* du tableau de bord sous-comptent.
- **Un statut peut appartenir à deux groupes de niveau supérieur.** Une validation rejetée localement que la PA ne voit jamais peut être à la fois `errorTech` et `terminal` — le tableau de bord la compte une fois par axe.
- **Utiliser le champ de recherche.** Une recherche sur un fragment de libellé ou de PA Code va plus vite que le défilement de la liste, surtout après une mise à jour réglementaire qui ajoute cinq ou six codes.
- **Les libellés bilingues ne sont pas optionnels.** Renseigner *Libellé · Français* et *Libellé · Anglais* — l'interface se replie sur le Code quand le libellé de la locale active est vide, ce qui est peu lisible.
