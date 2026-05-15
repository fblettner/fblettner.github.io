---
title: Nomajde — Présentation
description: "Nomajde est une application d'intégration JD Edwards bâtie sur Liberty Next. Connectivité JDE complète, écrans personnalisés sur données temps réel, gestion sécurité & accès, reporting automatisé et supervision live — UI moderne responsive au-dessus de OneWorld."
keywords: [Nomajde, JD Edwards, JDE, intégration, écrans personnalisés, security workbench, AIS, BIP, reporting automatisé, supervision live, UI responsive]
---

# Nomajde — Présentation

**Nomajde** est une application d'**intégration JD Edwards** bâtie sur [Liberty Next](/liberty/framework/overview). Connectivité JDE complète pour interagir avec les données en temps réel, **écrans personnalisés** qui prolongent OneWorld d'une UI moderne responsive, **gestion sécurité & accès** pour utilisateurs / rôles / applications, **reporting automatisé** (planification et archivage des sorties BIP) et **supervision live** des transactions et performances JDE.

Nomajde n'est **pas** un remplaçant du client lourd JDE. C'est un chemin plus rapide, nativement web, pour les opérations qui gagnent à passer par une UI propre — typiquement celles qu'un opérateur exécute des dizaines de fois par jour — et pour les ateliers d'administration qu'une équipe sécurité ou reporting utilise au quotidien.

Nomajde est une **application sous licence** : livrée avec [Nomasx-1](/liberty/nomasx1/overview) sous une seule clé RS256.

:::info[En cours de rédaction]
Cette présentation est le point d'entrée. Les pages par écran (Master Data, Security Maintenance, Environnements, orchestrations AIS, reporting) arriveront dans des itérations suivantes.
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nje-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nje-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nje-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="220" height="420" rx="14" fill="url(#nje-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">🗄 JD EDWARDS</text>

  <rect x="56" y="84" width="188" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="104" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Données maîtres</text>
  <text x="68" y="120" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">annuaire, client, fournisseur</text>

  <rect x="56" y="136" width="188" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="156" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Security workbench</text>
  <text x="68" y="172" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">utilisateurs, rôles, relations</text>

  <rect x="56" y="188" width="188" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="208" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Transactions</text>
  <text x="68" y="224" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">F0411, F03B11, F0911</text>

  <rect x="56" y="240" width="188" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="260" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Environnements</text>
  <text x="68" y="276" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">PD / PY / DV / CRP</text>

  <rect x="56" y="292" width="188" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="68" y="312" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Tables UDC · F0005</text>
  <text x="68" y="328" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">codes + descriptions</text>

  <rect x="56" y="344" width="188" height="44" rx="8" fill="rgba(255,159,10,0.06)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="68" y="364" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Connecteur AIS</text>
  <text x="68" y="380" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">formulaires, orchestrations, batch</text>

  <rect x="56" y="396" width="188" height="44" rx="8" fill="rgba(255,159,10,0.06)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="68" y="416" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">Sorties BIP</text>
  <text x="68" y="432" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">job control, PDF généré</text>

  <line x1="260" y1="240" x2="380" y2="240" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#nje-arrow)"/>

  <rect x="380" y="40" width="260" height="420" rx="14" fill="url(#nje-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="400" y="68" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚙ CAPACITÉS NOMAJDE</text>

  <rect x="396" y="84" width="228" height="56" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="104" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">🔌 Connectivité JDE</text>
  <text x="408" y="120" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">données live · pas d'export</text>
  <text x="408" y="134" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">lecture + écriture via AIS</text>

  <rect x="396" y="148" width="228" height="56" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="168" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">📋 Applications JDE custom</text>
  <text x="408" y="184" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">écrans sur données temps réel</text>
  <text x="408" y="198" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">définis en TOML, sans génération</text>

  <rect x="396" y="212" width="228" height="56" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="232" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">👥 Sécurité & accès</text>
  <text x="408" y="248" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">utilisateurs · rôles · applications</text>
  <text x="408" y="262" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">relations · environnements</text>

  <rect x="396" y="276" width="228" height="56" rx="8" fill="rgba(0,0,0,0.20)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="408" y="296" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">📱 UI moderne responsive</text>
  <text x="408" y="312" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">desktop · tablette · mobile</text>
  <text x="408" y="326" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">automatisation par API</text>

  <rect x="396" y="340" width="228" height="56" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.35)" strokeWidth="1"/>
  <text x="408" y="360" fill="#fb923c" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">📊 Reporting automatisé</text>
  <text x="408" y="376" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">planification + archivage BIP</text>
  <text x="408" y="390" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">renvoi · e-mail · téléchargement</text>

  <rect x="396" y="404" width="228" height="50" rx="8" fill="rgba(50,215,75,0.08)" stroke="rgba(50,215,75,0.35)" strokeWidth="1"/>
  <text x="408" y="424" fill="#4ade80" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">📈 Supervision live</text>
  <text x="408" y="440" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">transactions · jobs · performances</text>

  <line x1="640" y1="240" x2="740" y2="240" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#nje-arrow)"/>

  <rect x="740" y="40" width="220" height="420" rx="14" fill="url(#nje-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="760" y="68" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">⚛️ UI NOMAJDE</text>

  <text x="760" y="92" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">📊 Tableau de bord</text>

  <text x="760" y="116" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Données maîtres</text>
  <text x="772" y="134" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Annuaire</text>
  <text x="772" y="150" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Clients · Fournisseurs</text>
  <text x="772" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Articles · Comptes GL</text>

  <text x="760" y="190" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Maintenance sécurité</text>
  <rect x="768" y="198" width="180" height="20" rx="4" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="776" y="212" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700">Gestion utilisateurs</text>
  <text x="772" y="232" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Gestion des rôles</text>
  <text x="772" y="248" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Relations entre rôles</text>
  <text x="772" y="264" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Environnements</text>
  <text x="772" y="280" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Security Workbench</text>

  <text x="760" y="304" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Transactions</text>
  <text x="772" y="322" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">AP · AR · GL</text>

  <text x="760" y="346" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Reporting</text>
  <text x="772" y="364" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Planifier un rapport</text>
  <text x="772" y="380" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Archive · sorties BIP</text>

  <text x="760" y="404" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">📁 Supervision</text>
  <text x="772" y="422" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Transactions · Jobs</text>
  <text x="772" y="438" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Performances</text>
</svg>

---

## Ce que fait l'application

### Connectivité JD Edwards complète

Nomajde lit et écrit les données JDE **en temps réel** — pas d'extraction nocturne, pas de copie intermédiaire, pas de tables fantômes.

| Capacité | Apport |
|---|---|
| **SQL live** | Connecteurs SQL sur chaque environnement JDE (`PD`, `PY`, `DV`, `CRP`, …). Chaque écran lit ce que JDE lit. |
| **Intégration AIS** | Connecteur API contre le serveur AIS JDE : appels form-service, orchestrations, jobs planifiés. Les chemins d'écriture passent par AIS — la logique métier JDE s'applique. |
| **Multi-environnement** | Bascule de l'environnement via un dropdown — mêmes écrans, mêmes dialogues, pool différent. |

### Applications JDE personnalisées

Un écran Nomajde est une entrée TOML dans [`screens.toml`](/liberty/framework/screens) : la requête qui alimente la grille, le dialogue qui s'ouvre au clic sur une ligne, les conditions par champ, l'onglet d'audit. **Aucune génération de code.** Ajouter un nouvel écran et l'UI React le prend en compte après un `POST /admin/reload`.

Adapté pour :

- exposer un formulaire web propre pour une application OneWorld exécutée des dizaines de fois par jour,
- regrouper plusieurs formulaires JDE en un seul écran (par ex. annuaire + client + fournisseur sur une ligne),
- donner aux utilisateurs non licenciés une vue curatée sans siège JDE complet.

### Sécurité & gestion des accès

Nomajde livre l'atelier de maintenance de sécurité JDE sous forme d'écrans Liberty Next natifs :

| Sous-section | Périmètre |
|---|---|
| **Gestion utilisateurs** | Utilisateurs JDE — création, affectation de rôles, environnements autorisés, état du compte. |
| **Gestion des rôles** | Catalogue de rôles, applications rattachées à un rôle, options de traitement. |
| **Relations entre rôles** | Héritage de rôles et fenêtres de validité. |
| **Environnements** | Définitions `PD` / `PY` / `DV` / `CRP` et affectation des rôles par environnement. |
| **Security Workbench** | Vue `F00950` complète — sécurité application, sécurité d'action, sécurité de ligne, sécurité de colonne, sécurité d'options de traitement — recherchable et filtrable. |

Les données affichées par le workbench sont aussi celles que [Nomasx-1](/liberty/nomasx1/overview) lit pour l'analyse SoD. Les deux applications partagent les mêmes définitions de connecteurs.

### UI moderne responsive

Le même frontend React que Liberty Next — sombre par défaut avec thème clair, DM Sans, icônes lucide, `@tanstack/react-table` pour les grilles, `ScreenDialog` modal pour les formulaires. Responsive : un écran Nomajde s'affiche proprement sur une tablette (auditeur en entrepôt, intervention chez un client). `react-i18next` EN / FR — les libellés viennent du dictionnaire, traductions UDC JDE incluses.

### Reporting automatisé

| Fonctionnalité | Apport |
|---|---|
| **Planifier un rapport** | Formulaire de planification d'un job batch JDE (programme R) — choix de la version, de la sélection de données, de la récurrence. |
| **Archivage BIP** | La sortie BIP générée (PDF / XML) est capturée et stockée à côté du job. Recherchable, téléchargeable, réémettable. |
| **Distribution** | Un clic pour envoyer une sortie générée par e-mail à une liste de destinataires définie par l'opérateur. |
| **Historique** | Chaque exécution est journalisée : qui a planifié, à quelle heure, quelle sortie a été stockée. La piste d'audit qu'un auditeur interne attend. |

### Supervision live

| Fonctionnalité | Apport |
|---|---|
| **Supervision des transactions** | Compteurs live des transactions AP / AR / GL par environnement, avec drill-through vers l'écran sous-jacent. |
| **Supervision des jobs** | La file job-control JDE exposée comme une grille Nomajde — statut, propriétaire, durée d'exécution, sortie. |
| **Performances** | Latence base, débit de transactions, temps de réponse AIS. Adapté pour un ingénieur d'exploitation qui surveille la production. |

---

## Structure de l'application

La barre latérale de Nomajde regroupe les capacités en dossiers :

| Section | Sous-sections |
|---|---|
| **Tableau de bord** | Roll-up de KPI, dernière activité, drill-through. |
| **Données maîtres** | Annuaire, fiche client, fiche fournisseur, articles, comptes GL. |
| **Maintenance sécurité** | Gestion utilisateurs, gestion des rôles, relations entre rôles, environnements, Security Workbench. |
| **Transactions** | Grilles AP / AR / GL avec filtres et dialogues modaux. |
| **Reporting** | Planifier un rapport, archive, sorties BIP. |
| **Supervision** | Transactions, jobs, performances. |
| **Paramètres** | Pools source, connecteur AIS, définitions d'environnement, mapping de rôles. |

---

## À qui s'adresse l'application

| Profil | Pourquoi un écran Nomajde bat le client lourd JDE |
|---|---|
| **Opérateur AP / AR** | Un onglet web, grille multi-filtre sur `F0411` / `F03B11` — pas de navigation ligne à ligne. |
| **Gestionnaire de données maîtres** | Annuaire + client + fournisseur dans une forme unifiée, avec conditions par champ et validations obligatoires. |
| **Administrateur sécurité JDE** | Les cinq écrans de maintenance sécurité sont l'atelier quotidien — filtrage instantané utilisateurs / rôles / objets, sans la latence du client lourd. |
| **Analyste reporting** | Planifier un job BIP, archiver la sortie, l'envoyer par e-mail — sans licence OneWorld par analyste. |
| **Ingénieur d'exploitation** | Vue live des jobs + transactions + performances ; alertes via les règles de notification de Liberty Next. |

---

## Utilisateurs, rôles et permissions dans Nomajde

L'authentification de Nomajde (l'application — pas la source JDE qu'elle lit) passe par le [backend d'auth](/liberty/framework/overview) de Liberty Next. Rôles types :

| Rôle Liberty | Ce qu'il autorise |
|---|---|
| `nomajde.viewer` | Lire tous les écrans, lancer les tableaux de bord, aucune édition. |
| `nomajde.operator` | Tout ce qui précède + édition AP / AR / maître + appels d'orchestration AIS + planification de rapports. |
| `nomajde.security` | Maintenance sécurité — Gestion utilisateurs / rôles / relations / environnements / Security Workbench. |
| `nomajde.admin` | Tout ce qui précède + gestion des connecteurs source / pools + configuration AIS. |

Un déploiement type sépare **operator** de **security** — Nomasx-1 elle-même signalerait la combinaison comme conflit SoD.

---

## Comment Nomajde se marie avec Nomasx-1

Nomajde et Nomasx-1 sont vendus ensemble. Ils sont complémentaires :

- **Nomajde** permet aux utilisateurs *de faire les choses* dans JDE — points d'entrée propres pour le travail quotidien, plus l'atelier de maintenance sécurité.
- **Nomasx-1** surveille *ce qu'ils peuvent faire* — les droits, les conflits, l'usage des licences.

La paire tourne sur la même instance Liberty Next, sous la même clé de licence. Une installation type configure Nomajde en premier (les opérateurs en ont besoin tous les jours), Nomasx-1 ensuite (les auditeurs en ont besoin à un rythme régulier).

---

## Pour aller plus loin

| Où aller | Pourquoi |
|---|---|
| [Liberty Next → Présentation](/liberty/framework/overview) | Le framework sur lequel Nomajde s'appuie. |
| Documentation par écran *(à venir)* | Données maîtres · Maintenance sécurité · Transactions · Reporting · Supervision. |
| [Nomasx-1 — Présentation](/liberty/nomasx1/overview) | Application sœur — analyse de séparation des tâches. |
