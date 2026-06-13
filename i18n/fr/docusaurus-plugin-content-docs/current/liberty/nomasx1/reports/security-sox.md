---
title: Évaluation Sécurité & SoD
description: "Une revue de posture de sécurité et de séparation des tâches en un clic pour une application connectée — cycle de vie des comptes, accès à privilèges, hygiène des rôles et des objets, conflits SoD et plan de remédiation, produit en PDF ou Markdown."
keywords: [Nomasx-1, rapports, évaluation de sécurité, séparation des tâches, SoD, SOX, JD Edwards, Security Workbench, comptes dormants, accès à privilèges, ITGC, conformité]
---

# Évaluation Sécurité & SoD

L'**Évaluation Sécurité & Séparation des tâches** est un rapport généré, pas une grille. Il s'exécute sur une application connectée et assemble un livrable complet de posture de sécurité : qui peut se connecter, quels comptes sont dormants ou à privilèges, à quel point la configuration des rôles et des objets est saine, où se trouvent les conflits de séparation des tâches (SoD) et comment les réduire. La sortie est un PDF soigné — ou un Markdown — prêt à remettre à un comité de pilotage ou à un auditeur.

Il s'appuie sur les données que Nomasx-1 collecte déjà — le référentiel des utilisateurs, les rôles et leurs affectations, les droits sur les objets (Security Workbench) et la matrice de séparation des tâches — et les transforme en un document narratif unique, guidé par les attentes de contrôle informatique **Sarbanes-Oxley (SOX)**. C'est une revue générale de posture de sécurité, pas une attestation formelle de contrôle.

:::info[Spécifique à JDE]
Les sections de **séparation des tâches** s'appuient sur le rafraîchissement des conflits SoD (`nomasx1-sod-1`), qui analyse aujourd'hui les lignes `SECURITY_RIGHTS` de **JD Edwards EnterpriseOne**. Les sections d'hygiène des utilisateurs, des rôles et des objets lisent directement les tables `security_*` et valent pour toute application connectée ; la matrice SoD et le vocabulaire `*PUBLIC` / Security Workbench restent propres à JDE.
:::

---

## En un coup d'œil

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sox-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="32" width="920" height="256" rx="14" fill="url(#sox-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="60" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Rapports</text>
  <line x1="40" y1="76" x2="960" y2="76" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="92" width="300" height="176" rx="10" fill="rgba(192,132,252,0.06)" stroke="rgba(192,132,252,0.30)" strokeWidth="1.2"/>
  <text x="78" y="120" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Évaluation Sécurité &amp; SoD</text>
  <text x="78" y="142" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Revue de sécurité guidée par SOX</text>
  <text x="78" y="156" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">pour une application.</text>
  <rect x="78" y="174" width="60" height="20" rx="10" fill="rgba(148,163,184,0.12)" stroke="#334155" strokeWidth="1"/>
  <text x="108" y="188" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">PDF</text>
  <rect x="146" y="174" width="84" height="20" rx="10" fill="rgba(148,163,184,0.12)" stroke="#334155" strokeWidth="1"/>
  <text x="188" y="188" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">markdown</text>

  <text x="392" y="116" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PARAMÈTRES</text>
  <rect x="392" y="126" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="404" y="141" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="924" y="141" fill="#f87171" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">requis</text>
  <rect x="392" y="152" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="404" y="167" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Connecteur cible · Schéma</text>
  <text x="924" y="167" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">nomasx1 · public</text>
  <rect x="392" y="178" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="404" y="193" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Langue · Fenêtre de dormance (jours)</text>
  <text x="924" y="193" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">en · 90</text>
  <rect x="392" y="204" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="404" y="219" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Libellé de date · Nom du client</text>
  <text x="924" y="219" fill="#64748b" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">optionnel</text>

  <rect x="392" y="236" width="92" height="26" rx="6" fill="rgba(192,132,252,0.16)" stroke="rgba(192,132,252,0.45)" strokeWidth="1.2"/>
  <text x="438" y="253" fill="#d8b4fe" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Exécuter</text>
  <rect x="492" y="236" width="70" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="527" y="253" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Format</text>
</svg>

---

## Le livrable

Un document de marque d'une vingtaine à une trentaine de pages — PDF pour le comité de pilotage ou l'auditeur, Markdown pour le retravailler ou l'intégrer. La page de garde porte le titre *Évaluation Sécurité & Séparation des tâches – \{client\}*, un sous-titre de revue de sécurité, et un bloc **Application / Date / Réalisé par : NOMANA-IT**. Le rapport est produit **en anglais par défaut** ; passez le paramètre **Langue** à `Français` pour un livrable entièrement français.

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

La matrice elle-même — processus, activités, objets, risques et paires incompatibles — se gère sous **Paramètres → Ségrégation des tâches**, et alimente les tables de conflits via la tâche `nomasx1-sod-1`. Lancez cette tâche avant le rapport pour que les chiffres soient à jour.

---

## Exécuter le rapport

Le rapport se trouve sous **Rapports** dans la barre latérale de Nomasx-1, sur la page *Exécuter un rapport et télécharger le résultat en PDF ou markdown*. Choisissez **Évaluation Sécurité & SoD** dans la liste, renseignez les paramètres, choisissez un **Format**, puis **Exécuter**.

| Paramètre | Requis | Défaut | Ce qu'il définit |
|---|---|---|---|
| **Application** | Oui | — | L'`apps_id` à évaluer. Choisi par nom dans le registre des applications (*Paramètres → Global → Applications*). |
| **Connecteur cible** | Non | `nomasx1` | Le pool de connecteurs qui porte les tables Nomasx-1. |
| **Schéma** | Non | `public` | Le schéma de base de données sur ce connecteur. |
| **Langue** | Non | `English` | Langue du rapport — `English` ou `Français`. |
| **Fenêtre de dormance (jours)** | Non | `90` | Un compte actif sans connexion depuis ce nombre de jours est compté comme dormant. |
| **Libellé de date** | Non | mois + année courants | Le libellé imprimé en page de garde (ex. *juin 2026*). |
| **Nom du client** | Non | le nom de l'application | Le nom du client en page de garde. |

**Format** — `PDF` pour le livrable du comité de pilotage, `markdown` pour retravailler ou intégrer le contenu. L'exécution renvoie le fichier directement dans le navigateur.

---

## Avant de l'exécuter

L'audit lit les données que Nomasx-1 a déjà collectées pour l'application — il ne collecte rien à la volée. Pour une image juste, lancez d'abord la dernière collecte et le rafraîchissement SoD. Le rapport s'appuie sur :

- **Le référentiel des utilisateurs** — comptes déclarés, statut et dernière connexion, plus les marqueurs entretenus sur chaque utilisateur (privilégié / technique / générique / lié).
- **Les rôles et affectations** — le catalogue des rôles et les affectations utilisateur ⟷ rôle.
- **La sécurité des objets** — les droits du Security Workbench (exécution / ajout / modification / suppression, directs ou via `*ROLE`, et les droits `*PUBLIC`).
- **Les tables de conflits SoD** — rafraîchies par `nomasx1-sod-1`, enrichies par la matrice et ses dimensions processus / activité / objet / risque.
- **Le registre des applications** — pour la garde et le périmètre.

Une exécution sur une application sans données collectées produit quand même le document, mais les sections concernées s'affichent vides plutôt que fausses.

---

## Conseils et bonnes pratiques

- **Rafraîchissez le SoD d'abord.** Lancez `nomasx1-sod-1` juste avant le rapport pour que les comptes de conflits et la tendance collent à la réalité.
- **Commencez par les constats au niveau des rôles.** Les rôles auto-conflictuels et les rôles les plus conflictuels sont les gains les plus rapides — une correction lève les conflits de tous les utilisateurs qui portent le rôle.
- **Renseignez le *Libellé de date* et le *Nom du client*** pour une page de garde prête à diffuser ; laissez-les vides pour un brouillon interne.
- **Markdown pour itérer, PDF pour livrer.** La sortie Markdown est le même contenu sans la mise en forme de garde, pratique pour relire avant l'export final.
- **Lisez-le à côté des écrans sources.** Chaque chiffre remonte à un écran — *Utilisateurs*, *Rôles*, *Security Workbench*, *Ségrégation des tâches* — un relecteur peut donc descendre du rapport vers les données réelles.
