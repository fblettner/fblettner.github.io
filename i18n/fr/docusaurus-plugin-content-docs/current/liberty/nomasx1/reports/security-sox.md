---
title: Évaluation Sécurité & SoD
description: "Une revue de posture de sécurité et de séparation des tâches en un clic pour une application connectée — cycle de vie des comptes, accès à privilèges, hygiène des rôles et des objets, conflits SoD et plan de remédiation, produit en PDF ou Markdown."
keywords: [Nomasx-1, rapports, évaluation de sécurité, séparation des tâches, SoD, SOX, JD Edwards, Security Workbench, comptes dormants, accès à privilèges, ITGC, conformité]
---

# Évaluation Sécurité & SoD

L'**Évaluation Sécurité & Séparation des tâches** est un rapport généré, pas une grille. Il s'exécute sur une application connectée et assemble un livrable complet de posture de sécurité : qui peut se connecter, quels comptes sont dormants ou à privilèges, à quel point la configuration des rôles et des objets est saine, où se trouvent les conflits de séparation des tâches (SoD) et comment les réduire. La sortie est un PDF soigné — ou un Markdown — prêt à remettre à un comité de pilotage ou à un auditeur.

Il s'appuie sur les données que Nomasx-1 collecte déjà — le référentiel des utilisateurs, les rôles et leurs affectations, les droits sur les objets (Security Workbench) et la matrice de séparation des tâches — et les transforme en un document narratif unique, guidé par les attentes de contrôle informatique **Sarbanes-Oxley (SOX)**. C'est une revue générale de posture de sécurité, pas une attestation formelle de contrôle.

:::info[Spécifique à JDE]
Les sections de **séparation des tâches** s'appuient sur le rafraîchissement des conflits SoD (la collecte *Security and SoD*, `nomasx1-collect-all`), qui analyse aujourd'hui les lignes `SECURITY_RIGHTS` de **JD Edwards EnterpriseOne**. Les sections d'hygiène des utilisateurs, des rôles et des objets lisent directement les tables `security_*` et valent pour toute application connectée ; la matrice SoD et le vocabulaire `*PUBLIC` / Security Workbench restent propres à JDE.
:::

---

## En un coup d'œil

<svg viewBox="0 0 1320 668" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxrepsox-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxrepsox-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxrepsox-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxrepsox-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="628" rx="14" fill="url(#nxrepsox-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
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
  <rect x="986" y="122" width="80" height="22" rx="5" fill="url(#nxrepsox-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1026.0" y="136.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="240" y="176" width="840" height="56" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="198" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Security &amp; Segregation of Duties Assessment</text>
  <text x="507.616" y="198" fill="#64748b" fontSize="8.3" fontFamily="ui-monospace, monospace">nomasx1:security-sox</text>
  <text x="254" y="218" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Security &amp; SoD review for one apps_id… Available in English or French.</text>
  <rect x="986" y="186" width="80" height="22" rx="5" fill="url(#nxrepsox-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1026.0" y="200.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="370" y="200" width="580" height="436" rx="12" fill="#111827" stroke="#334155" strokeWidth="1.4"/>
  <text x="388" y="224" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Security &amp; Segregation of Duties Assessment</text>
  <line x1="370" y1="236" x2="950" y2="236" stroke="#1f2937" strokeWidth="1"/>
  <text x="388" y="254" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Security &amp; SoD review for one apps_id… Available in English or French.</text>
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
  <text x="398" y="412.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">en  English</text>
  <text x="922" y="412.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="388" y="432" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DORMANCY WINDOW (DAYS)</text>
  <rect x="388" y="438" width="544" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="452.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">90</text>
  <text x="388" y="472" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REPORT DATE LABEL</text>
  <rect x="388" y="478" width="544" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="492.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="388" y="512" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLIENT NAME</text>
  <rect x="388" y="518" width="544" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="532.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="388" y="552" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FORMAT</text>
  <rect x="388" y="558" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="398" y="572.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">PDF</text>
  <text x="488" y="572.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <line x1="370" y1="598" x2="950" y2="598" stroke="#1f2937" strokeWidth="1"/>
  <rect x="782" y="608" width="150" height="24" rx="5" fill="url(#nxrepsox-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="857.0" y="623.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Exécuter et télécharger</text>
  <rect x="712" y="608" width="62" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="743.0" y="623.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="20" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les rapports</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une carte par rapport, ▷ Exécuter</text>
  <line x1="200" y1="147.0" x2="240" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepsox-arrow)"/>
  <rect x="1120" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <text x="1130" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre les paramètres</text>
  <line x1="1120" y1="147.0" x2="1035" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepsox-arrow)"/>
  <rect x="20" y="352" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="367" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application (obligatoire)</text>
  <text x="30" y="380" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">choisie par son nom</text>
  <line x1="200" y1="369.0" x2="388" y2="375" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepsox-arrow)"/>
  <rect x="20" y="272" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="287" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connecteur · schéma</text>
  <text x="30" y="300" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">où sont les tables Nomasx-1</text>
  <line x1="200" y1="289.0" x2="388" y2="295" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepsox-arrow)"/>
  <rect x="1120" y="392" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="407" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Langue</text>
  <text x="1130" y="420" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">anglais par défaut</text>
  <line x1="1120" y1="409.0" x2="932" y2="415" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepsox-arrow)"/>
  <rect x="1120" y="439" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="454" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fenêtre de dormance</text>
  <text x="1130" y="467" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">90 jours par défaut</text>
  <line x1="1120" y1="456.0" x2="932" y2="455" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepsox-arrow)"/>
  <rect x="1120" y="512" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="527" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Page de garde</text>
  <text x="1130" y="540" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">libellé de date, nom du client</text>
  <line x1="1120" y1="529.0" x2="932" y2="535" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepsox-arrow)"/>
  <rect x="20" y="559" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="574" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Format</text>
  <text x="30" y="587" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">PDF ou markdown</text>
  <line x1="200" y1="576.0" x2="388" y2="575" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepsox-arrow)"/>
  <rect x="1120" y="588" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="603" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécuter et télécharger</text>
  <text x="1130" y="616" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le fichier revient au navigateur</text>
  <line x1="1120" y1="605.0" x2="920" y2="620" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrepsox-arrow)"/>
</svg>

---

## Le livrable

Un document de marque d'une vingtaine à une trentaine de pages — PDF pour le comité de pilotage ou l'auditeur, Markdown pour le retravailler ou l'intégrer. La page de garde porte le titre *Évaluation Sécurité & Séparation des tâches – \{client\}*, un sous-titre de revue de sécurité, et un bloc **Application / Date / Réalisé par : NOMANA-IT**. Le rapport est produit **en anglais par défaut** ; basculer le paramètre **Language** sur `Français` pour un livrable entièrement français.

---

## KPI en tête de synthèse et graphiques inline

La synthèse s'ouvre sur un **bandeau d'indicateurs** et quelques graphiques SVG inline, dimensionnés pour que l'histoire sécurité se lise d'un coup d'œil :

- **Bandeau d'indicateurs** — indicateurs de tête : total utilisateurs, comptes dormants, comptes à privilèges et total des violations SoD.
- **Donut constats par gravité** — répartition des constats du rapport entre `élevée` / `moyenne` / `faible`.
- **Barre rôles les plus conflictuels** — les rôles qui portent le plus de conflits, classés par nombre d'utilisateurs et de règles SoD distinctes.
- **Barre conflits par processus** — les violations SoD groupées par processus métier tel qu'attribué par la matrice (quand la matrice porte une dimension processus).
- **Courbe de tendance SoD** — la courbe du total des violations sur les rafraîchissements récents ; affiche une note *historique insuffisant* quand il n'y a qu'un seul rafraîchissement.

Les graphiques s'affichent inline en sortie PDF comme en Markdown — pas d'image externe, pas de dépendance à un moteur de graphique au rendu.

C'est un document **interne** de sécurité et de conformité — la base de vos propres décisions de remédiation et d'une revue des accès, pas une attestation à déposer auprès d'un régulateur.

---

## Ce que contient le rapport

Huit sections plus un glossaire, chacune construite à partir des données que Nomasx-1 a collectées :

1. **Synthèse** — une bande d'indicateurs, les constats principaux avec leur gravité (élevée / moyenne / faible), une répartition par gravité, les indicateurs clés et une tendance SoD en une ligne par rapport au rafraîchissement précédent.
2. **Périmètre et méthodologie** — le périmètre de l'application (nom, id, type, base de données), la méthode (comment un conflit est défini) et un tableau de **fraîcheur des données** qui date chaque source.
3. **Accès et cycle de vie des utilisateurs** — la population déclarée, puis les **comptes dormants et jamais utilisés** (un compte actif sans connexion dans la fenêtre de dormance), les **comptes génériques / partagés** et les **comptes techniques / service**.
4. **Revue des accès à privilèges** — les comptes à privilèges, avec le nombre de comptes à privilèges et de paires SoD à privilèges.
5. **Hygiène de sécurité des rôles et des objets** — les métriques des rôles (distribution du nombre de rôles par utilisateur, utilisateurs les plus dotés, rôles orphelins) et la **sécurité des objets** lue depuis les droits du Security Workbench.
6. **Séparation des tâches** — le cœur du rapport : couverture de la matrice, synthèse des violations, **rôles auto-conflictuels** (corriger le rôle), rôles les plus conflictuels, **combinaisons de rôles en conflit les plus fréquentes** (corriger les affectations) et — quand la matrice les porte — les conflits par risque et par processus.
7. **Tendance SoD** — un tableau et une courbe de tendance sur plusieurs rafraîchissements ; il faut au moins deux rafraîchissements, sinon une note *historique insuffisant* s'affiche.
8. **Constats et recommandations** — chaque constat et un tableau d'**actions recommandées**.

Un **glossaire** final définit les dix termes employés (SoD, matrice de conflits, rôle auto-conflictuel, combinaison de rôles en conflit, compte à privilèges / générique / technique, `*PUBLIC`, compte dormant, ITGC).

---

## Comment se lit un conflit

Un **conflit**, c'est un même utilisateur actif capable d'exécuter les **deux** côtés d'une paire d'activités incompatibles déclarée dans la **matrice** SoD. Le rapport ne liste pas utilisateur par utilisateur ; il regroupe les conflits selon l'unité que vous corrigez réellement :

- **Rôle auto-conflictuel** — un seul rôle accorde les deux côtés d'une paire. C'est un défaut de conception du rôle : **corrigez le rôle**.
- **Combinaison de rôles en conflit** — le conflit n'apparaît que parce qu'un utilisateur cumule *deux* rôles. C'est un problème d'affectation : **corrigez l'affectation**.
- **Rôles les plus conflictuels** — classés par nombre d'utilisateurs et de règles de conflit distinctes, pour savoir quel rôle nettoyer en premier.

La gravité vient des niveaux que l'opérateur porte sur la matrice — le **Risk Level** (tri principal) et, en repli, le **Critical Level** de la dimension risque. Le chiffre de tête *total des violations* compte des **paires utilisateur × entrée de matrice** (combien d'utilisateurs déclenchent chaque règle), pas un nombre brut de règles.

La matrice elle-même — processus, activités, objets, risques et paires incompatibles — se gère sous **Paramètres → Ségrégation des tâches**, et alimente les tables de conflits via la tâche de collecte `nomasx1-collect-all` (*Tâches → Collecter la sécurité et la SoD*). Lancez cette tâche avant le rapport pour que les chiffres soient à jour.

---

## Exécuter le rapport

Le rapport se trouve sous **Rapports** dans le menu de Nomasx-1 : une carte par rapport, avec sa description. **Exécuter** sur la carte **Security & Segregation of Duties Assessment** ouvre ses paramètres ; les renseigner, choisir un **Format**, puis **Exécuter et télécharger**.

| Paramètre | Requis | Défaut | Ce qu'il définit |
|---|---|---|---|
| **Application** | Oui | — | L'application à évaluer. Choisie **par son nom** dans le registre des applications (*Paramètres → Global → Applications*) — le formulaire résout le nom en `apps_id` sous-jacent. |
| **Target connector** | Non | `nomasx1` | Liste déroulante des connecteurs SQL de l'installation. |
| **Schema** | Non | `public` | Liste déroulante des schémas du connecteur cible retenu. |
| **Language** | Non | `English` | Langue du rapport — `English` ou `Français`. |
| **Dormancy window (days)** | Non | `90` | Un compte actif sans connexion depuis ce nombre de jours est compté comme dormant. |
| **Report date label** | Non | mois + année courants | Le libellé imprimé en page de garde (ex. *juin 2026*). |
| **Client name** | Non | le nom de l'application | Le nom du client en page de garde. |

Chaque liste déroulante se résout côté serveur sur des catalogues vivants — *Application* sur le registre des applications, *Target connector* sur les connecteurs SQL configurés et *Schema* sur les schémas du connecteur retenu. Les cascades font que changer de connecteur ré-affiche ses propres schémas.

**Format** — `PDF` pour le livrable du comité de pilotage, `markdown` pour retravailler ou intégrer le contenu. L'exécution renvoie le fichier directement dans le navigateur.

**Chaque mois, par e-mail** — *Tâches → Rapport sécurité et SoD* produit le même PDF pour une ou plusieurs applications et l'envoie au rôle des auditeurs ; planifié le 1er du mois une fois activé. Voir [Tâches de Nomasx-1](../jobs.md#reports).

---

## Avant de l'exécuter

L'audit lit les données que Nomasx-1 a déjà collectées pour l'application — il ne collecte rien à la volée. Pour une image juste, lancez d'abord la dernière collecte et le rafraîchissement SoD. Le rapport s'appuie sur :

- **Le référentiel des utilisateurs** — comptes déclarés, statut et dernière connexion, plus les marqueurs entretenus sur chaque utilisateur (privilégié / technique / générique / lié).
- **Les rôles et affectations** — le catalogue des rôles et les affectations utilisateur ⟷ rôle.
- **La sécurité des objets** — les droits du Security Workbench (exécution / ajout / modification / suppression, directs ou via `*ROLE`, et les droits `*PUBLIC`).
- **Les tables de conflits SoD** — rafraîchies par `nomasx1-collect-all`, enrichies par la matrice et ses dimensions processus / activité / objet / risque.
- **Le registre des applications** — pour la garde et le périmètre.

Une exécution sur une application sans données collectées produit quand même le document, mais les sections concernées s'affichent vides plutôt que fausses.

---

## Conseils et bonnes pratiques

- **Rafraîchissez le SoD d'abord.** Lancez *Tâches → Collecter la sécurité et la SoD* juste avant le rapport pour que les comptes de conflits et la tendance collent à la réalité.
- **Commencez par les constats au niveau des rôles.** Les rôles auto-conflictuels et les rôles les plus conflictuels sont les gains les plus rapides — une correction lève les conflits de tous les utilisateurs qui portent le rôle.
- **Renseigner *Report date label* et *Client name*** pour une page de garde prête à diffuser ; les laisser vides pour un brouillon interne.
- **Markdown pour itérer, PDF pour livrer.** La sortie Markdown est le même contenu sans la mise en forme de garde, pratique pour relire avant l'export final.
- **Lisez-le à côté des écrans sources.** Chaque chiffre remonte à un écran — *Utilisateurs*, *Rôles*, *Security Workbench*, *Ségrégation des tâches* — un relecteur peut donc descendre du rapport vers les données réelles.
