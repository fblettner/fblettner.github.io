---
title: Audit Licences JD Edwards
description: "Un audit de conformité et d'optimisation en un clic pour une application JD Edwards — inventaire des licences, usage réel, risque financier et plan de remédiation, produit sous forme de livrable PDF ou Markdown."
keywords: [Nomasx-1, rapports, audit de licences, JD Edwards, Oracle, conformité, optimisation, Object Usage Tracking, séparation des tâches, risque financier]
---

# Audit Licences JD Edwards

L'**Audit Licences JD Edwards** est un rapport généré, pas une grille. Il s'exécute sur une application connectée et assemble un livrable complet de conformité et d'optimisation : ce qui est souscrit, ce qui est réellement utilisé, où se trouve le risque financier et comment le réduire. La sortie est un PDF soigné — ou un Markdown — prêt à remettre à un comité de pilotage.

Il s'appuie sur les données que Nomasx-1 collecte déjà — Object Usage Tracking, affectations de rôles et de droits, matrice de séparation des tâches et inventaire des licences par application — et les transforme en un document narratif unique.

:::info[Spécifique à JDE]
Ce rapport cible une application **JD Edwards EnterpriseOne** et son socle technologique Oracle. L'application connectée est identifiée par son `apps_id` Nomasx-1.
:::

---

## En un coup d'œil

<svg viewBox="0 0 1320 628" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxrepaud-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxrepaud-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxrepaud-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxrepaud-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="588" rx="14" fill="url(#nxrepaud-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Rapports</text>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="276" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Exécuter un rapport et télécharger le résultat en PDF ou markdown.</text>
  <rect x="1000" y="40" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1040.0" y="54.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Recharger</text>
  <line x1="220" y1="78" x2="1100" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="1004" y="88" width="76" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="1042.0" y="99.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2 rapports</text>
  <rect x="240" y="112" width="840" height="56" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="134" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Audit Licences JD Edwards</text>
  <text x="404.8" y="134" fill="#64748b" fontSize="8.3" fontFamily="ui-monospace, monospace">nomasx1:audit-licences</text>
  <text x="254" y="154" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Compliance + optimisation analysis for one apps_id… Available in French or English.</text>
  <rect x="986" y="122" width="80" height="22" rx="5" fill="url(#nxrepaud-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1026.0" y="136.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="240" y="176" width="840" height="56" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="198" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Security &amp; Segregation of Duties Assessment</text>
  <text x="507.616" y="198" fill="#64748b" fontSize="8.3" fontFamily="ui-monospace, monospace">nomasx1:security-sox</text>
  <text x="254" y="218" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Security &amp; SoD review for one apps_id… Available in English or French.</text>
  <rect x="986" y="186" width="80" height="22" rx="5" fill="url(#nxrepaud-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1026.0" y="200.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="370" y="200" width="580" height="396" rx="12" fill="#111827" stroke="#334155" strokeWidth="1.4"/>
  <text x="388" y="224" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Audit Licences JD Edwards</text>
  <line x1="370" y1="236" x2="950" y2="236" stroke="#1f2937" strokeWidth="1"/>
  <text x="388" y="254" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Compliance + optimisation analysis for one apps_id… Available in French or English.</text>
  <text x="388" y="272" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TARGET CONNECTOR</text>
  <rect x="388" y="278" width="544" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="292.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">nomasx1</text>
  <text x="922" y="292.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="388" y="312" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SCHEMA</text>
  <rect x="388" y="318" width="544" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="332.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">public</text>
  <text x="922" y="332.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="388" y="352" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION &#42;</text>
  <rect x="388" y="358" width="544" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="372.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Sélectionner…</text>
  <text x="922" y="372.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="388" y="392" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LANGUAGE</text>
  <rect x="388" y="398" width="544" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="412.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">fr  Français</text>
  <text x="922" y="412.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="388" y="432" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AUDIT DATE LABEL</text>
  <rect x="388" y="438" width="544" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="452.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="388" y="472" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLIENT NAME</text>
  <rect x="388" y="478" width="544" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="492.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="388" y="512" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FORMAT</text>
  <rect x="388" y="518" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="532.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">PDF</text>
  <text x="488" y="532.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <line x1="370" y1="558" x2="950" y2="558" stroke="#1f2937" strokeWidth="1"/>
  <rect x="782" y="568" width="150" height="24" rx="5" fill="url(#nxrepaud-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="857.0" y="583.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Exécuter et télécharger</text>
  <rect x="712" y="568" width="62" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="743.0" y="583.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="20" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les rapports</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une carte par rapport, ▷ Exécuter</text>
  <line x1="200" y1="147.0" x2="240" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepaud-arrow)"/>
  <rect x="1120" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <text x="1130" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre les paramètres</text>
  <line x1="1120" y1="147.0" x2="1035" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepaud-arrow)"/>
  <rect x="20" y="352" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="367" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application (obligatoire)</text>
  <text x="30" y="380" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">choisie par son nom</text>
  <line x1="200" y1="369.0" x2="388" y2="375" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepaud-arrow)"/>
  <rect x="20" y="272" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="287" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connecteur · schéma</text>
  <text x="30" y="300" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">où sont les tables Nomasx-1</text>
  <line x1="200" y1="289.0" x2="388" y2="295" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepaud-arrow)"/>
  <rect x="1120" y="392" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="407" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Langue</text>
  <text x="1130" y="420" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">français par défaut</text>
  <line x1="1120" y1="409.0" x2="932" y2="415" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepaud-arrow)"/>
  <rect x="1120" y="472" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="487" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Page de garde</text>
  <text x="1130" y="500" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">libellé de date, nom du client</text>
  <line x1="1120" y1="489.0" x2="932" y2="495" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepaud-arrow)"/>
  <rect x="20" y="519" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="534" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Format</text>
  <text x="30" y="547" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">PDF ou markdown</text>
  <line x1="200" y1="536.0" x2="388" y2="535" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepaud-arrow)"/>
  <rect x="1120" y="548" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="563" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécuter et télécharger</text>
  <text x="1130" y="576" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le fichier revient au navigateur</text>
  <line x1="1120" y1="565.0" x2="920" y2="580" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepaud-arrow)"/>
</svg>

---

## Le livrable

Un document confidentiel, aux couleurs de la marque, d'environ trente à quarante pages — PDF pour le comité de pilotage, Markdown quand on veut l'éditer ou l'intégrer. La couverture porte le titre *Audit Licences JD Edwards – \{client\}*, le sous-titre *Analyse de conformité et plan d'optimisation des licences Oracle*, et un bloc **Client / Date / Auteur / Version** ; chaque page est marquée *Confidentiel* en pied.

Le rapport est généré **en français par défaut** (langue de travail de l'audit) ; basculer le paramètre **Language** sur `English` pour un livrable entièrement anglais.

C'est un document **interne** de conformité et d'optimisation — la base de vos propres décisions et de la préparation d'un renouvellement de contrat, pas une déclaration à remettre à l'éditeur.

---

## KPI en tête de synthèse et graphiques inline

La synthèse s'ouvre sur un **bandeau d'indicateurs** et quelques graphiques SVG inline, pour que le message se lise en quelques secondes avant l'entrée dans le détail :

- **Bandeau d'indicateurs** — utilisateurs actifs, comptes jamais utilisés, risque financier chiffrable (€) et rôles non affectés.
- **Donut utilisateurs actifs** — utilisés vs jamais utilisés sur la population auditée.
- **Barre composants par usage** — les composants Oracle en usage classés par consommation.
- **Barre risque financier par composant** — l'exposition en euros dimensionnée composant par composant.

Les graphiques s'affichent inline en sortie PDF comme en Markdown — pas d'image externe, pas de dépendance à un moteur de graphique au rendu.

---

## Ce que contient le rapport

Neuf sections, chacune construite à partir des données collectées par Nomasx-1 :

1. **Synthèse** — résumé pour la direction : contexte et objectifs, les constats principaux assortis chacun d'un niveau de risque, le risque financier estimé et les recommandations clés.
2. **Périmètre de l'audit** — composants audités, ce qui est hors périmètre, le tableau des environnements JD Edwards (production vs hors production) et l'**architecture technique** : versions logicielles, inventaire des serveurs et schéma d'architecture sur une page au format paysage (voir [La page d'architecture](#architecture)).
3. **Méthodologie** — les outils et données utilisés, les règles d'analyse (l'usage se mesure à la consommation réelle, pas aux autorisations) et un tableau des **sources de données** qui date chaque entrée.
4. **Licences acquises** — l'inventaire souscrit : Oracle Database Enterprise Edition (NUP), les options et packs, les composants détectés en usage, la *règle des minimas* et le minimum NUP calculé à partir du nombre de processeurs ; puis l'Oracle Technology Foundation de JD Edwards et les modules applicatifs.
5. **Utilisation et conformité** — le cœur du rapport :
   - les modules JD Edwards croisés **OUT × transactions** — consommation réelle face à l'activité d'écriture — avec un détail sur les modules peu utilisés (quel utilisateur a touché quel objet) ;
   - les **autorisations face à l'usage réel** par module (utilisateurs autorisés vs OUT vs transactions vs nombre de rôles), qui met en évidence des accès bien plus larges que l'usage effectif ;
   - l'**analyse d'optimisation** (voir plus bas) ;
   - l'analyse des utilisateurs Oracle Technology Foundation (déclarés / actifs / désactivés, comptes techniques, affectations de rôles) et le décompte des utilisateurs de la base Oracle.
6. **Risque financier** — la méthode de calcul (prix public Oracle plus trois ans d'arriérés de support), chaque risque identifié chiffré ligne à ligne, un montant consolidé, les leviers priorisés et l'analyse des devis Oracle éventuellement en cours de négociation.
7. **Plan de remédiation** — un nettoyage concret : désactivation des comptes jamais utilisés, et rationalisation des rôles et des accès (suppression des rôles non affectés, revue des cumuls de rôles excessifs, alignement des accès sur l'usage réel).
8. **Recommandations et plan d'action** — chaque action classée par priorité, effort et impact financier, un planning indicatif en quatre phases, et les indicateurs de suivi à surveiller ensuite.
9. **Annexes** — la liste détaillée des utilisateurs à désactiver (avec dates de création et de dernière modification, et les précautions de validation à appliquer avant désactivation) et un glossaire.

---

## La page d'architecture \{#architecture\}

La section *Périmètre de l'audit* présente l'architecture de l'application sur une page au format paysage. Le rapport retient la première image disponible, dans cet ordre :

1. **Une image déposée pour l'application** — le fichier `data/architecture/<apps_id>.svg` du dossier des applications de l'installation. Elle passe toujours en premier.
2. **La plateforme telle que Nomajde l'a lue** — dans [Nomajde → Supervision → Architecture](../../nomajde/monitoring/architecture.md#download), **Conserver pour le rapport d'audit** enregistre la lecture d'un pool JD Edwards. Le rapport dessine la lecture conservée pour le pool désigné par l'application dans [Applications](../settings/global/applications.md), **dans la langue du rapport** et avec la date de la lecture. La lecture est conservée sur l'installation : le rapport la dessine même quand Server Manager n'est pas joignable depuis la machine qui produit le rapport. Une application sans pool reprend la lecture conservée quand il n'y en a qu'une.
3. **L'image de l'installation** — le fichier `data/architecture/default.svg`, pour une installation qui ne compte qu'une application.

Sans aucune de ces images, le rapport ne comporte pas de page d'architecture.

---

## L'analyse d'optimisation

Au-delà de la seule conformité, le rapport exploite l'**extraction OUT détaillée** — une ligne par utilisateur × module × objet — pour dimensionner les licences au besoin réel plutôt qu'à l'octroi global d'« usage complet » :

- la répartition du nombre de modules par utilisateur (la plupart ne touchent qu'une poignée de modules) ;
- les combinaisons de modules les plus fréquentes, qui se regroupent autour d'un noyau commercial / logistique ;
- deux profils d'usage — **Standard** (le noyau) et **Étendu** (le noyau plus au moins un module spécialisé) ;
- une proposition de répartition en **bundles différenciés** à porter dans un renouvellement de contrat.

C'est ce qui fait passer l'audit d'un instantané de conformité à un levier d'optimisation des coûts — la section sur laquelle se construit la négociation du renouvellement.

---

## Exécuter le rapport

Le rapport se trouve sous **Rapports** dans le menu de Nomasx-1 : une carte par rapport, avec sa description. **Exécuter** sur la carte **Audit Licences JD Edwards** ouvre ses paramètres ; les renseigner, choisir un **Format**, puis **Exécuter et télécharger**.

| Paramètre | Requis | Valeur par défaut | Ce qu'il définit |
|---|---|---|---|
| **Application** | Oui | — | L'application à auditer. Choisie **par son nom** dans le registre des applications (*Paramètres → Global → Applications*) — le formulaire résout le nom en `apps_id` sous-jacent. |
| **Target connector** | Non | `nomasx1` | Liste déroulante des connecteurs SQL de l'installation. |
| **Schema** | Non | `public` | Liste déroulante des schémas du connecteur cible retenu. |
| **Language** | Non | `Français` | Langue du rapport — `Français` ou `English`. |
| **Audit date label** | Non | mois + année en cours | Le libellé imprimé sur la page de couverture (ex. *Mai 2026*). |
| **Client name** | Non | le nom de l'application | Le nom du client sur la page de couverture. |

Chaque liste déroulante se résout côté serveur sur des catalogues vivants — *Application* sur le registre des applications, *Target connector* sur les connecteurs SQL configurés et *Schema* sur les schémas du connecteur retenu. Les cascades font que changer de connecteur ré-affiche ses propres schémas.

**Format** — `PDF` pour le livrable du comité de pilotage, `markdown` quand on veut éditer ou intégrer le contenu. L'exécution renvoie le fichier directement dans le navigateur.

**Chaque mois, par e-mail** — *Tâches → Rapport d'audit des licences* produit le même PDF pour une ou plusieurs applications et l'envoie au rôle des auditeurs ; planifié le 1er du mois une fois activé. Voir [Tâches de Nomasx-1](../jobs.md#reports).

---

## Avant d'exécuter

L'audit lit les données que Nomasx-1 a déjà collectées pour l'application — il ne collecte pas à la volée. Pour un état fidèle, vérifier au préalable que la dernière collecte a bien été réalisée. Le rapport s'appuie sur :

- **Object Usage Tracking** — la synthèse (utilisateurs distincts par module), le détail (utilisateurs / objets / dates) et le détail fin (une ligne par utilisateur × module × objet) qui alimentent les sections *Utilisation et conformité* et optimisation.
- **Les modules avec transactions** — les utilisateurs ayant généré au moins une écriture par module.
- **La liste des utilisateurs JD Edwards** — utilisateurs déclarés, actifs et désactivés, avec dates de création et de dernier usage.
- **Les rôles, les affectations utilisateur-rôle et les droits d'accès par rôle**, plus les **menus JDE** (mapping objet → module) qui relient l'usage aux modules.
- **L'inventaire des options et packs de la base** — composants Oracle en usage face à ceux souscrits.
- **L'inventaire des licences et la tarification** (*Licences* et *Paramètres → Tarification*), faute de quoi les chiffres financiers s'écartent du tarif réel.
- **Les comptes techniques** — l'indicateur *Technique* des [propriétés des utilisateurs](../settings/security/users-properties.md) ; tant que l'application n'a aucune propriété utilisateur, les règles de nommage de son onglet [Comptes techniques](../settings/global/applications.md#technical-accounts). Sans indicateur ni règle, aucun compte n'est compté comme technique.
- **Le pool de l'application** — le serveur et la base cités dans le périmètre du rapport sont lus dans le pool désigné par l'application, dont le nom est imprimé ; une application sans pool garde ce que porte sa ligne.
- **La lecture de l'architecture** — quand Nomajde est installé, **Conserver pour le rapport d'audit** sur sa page Architecture pour le pool JD Edwards de l'application, afin que le rapport dessine la plateforme dans son état actuel (voir [La page d'architecture](#architecture)).

Une exécution sur une application sans usage collecté produit tout de même le document, mais les sections usage et finance apparaîtront vides plutôt que fausses.

---

## Conseils et bonnes pratiques

- **Exécutez-le après une collecte fraîche.** L'audit est un instantané des tables courantes — planifiez-le juste après la collecte nocturne pour que les chiffres collent à la réalité.
- **Renseigner *Audit date label* et *Client name*** pour une page de couverture prête à transmettre à l'extérieur ; les laisser vides pour un brouillon interne.
- **Utilisez *markdown* pour itérer, *PDF* pour livrer.** La sortie Markdown reprend le même contenu sans la mise en forme de couverture, pratique pour relire avant l'export final.
- **Lisez-le à côté des écrans sources.** Chaque chiffre remonte à un écran — *Object Usage Tracking*, *Conflits*, *Licences* — pour qu'un relecteur puisse descendre de l'audit vers les données vivantes.
