---
title: Explorateur de données
description: "L'analyse libre des données de Nomasx-1 dans l'explorateur de données : trois modèles — Sécurité, Séparation des tâches, Conformité des licences — chacun avec ses analyses partagées et son tableau de bord prêts à l'emploi, accessibles depuis le menu de chaque domaine."
keywords: [Nomasx-1, explorateur de données, analyse, tableau croisé, sécurité, utilisateurs, rôles, séparation des tâches, SoD, conflits, conformité des licences, exposition financière, tableau de bord]
---

# Explorateur de données

L'**explorateur de données** permet aux équipes conformité et licences d'analyser elles-mêmes les données de Nomasx-1, sans nouvel écran : lignes, mesures, filtres et période choisis dans une liste de champs, présentés en tableau, en croisé, en graphique ou en KPI, puis enregistrés, partagés, réunis en tableau de bord et exportés en Excel ou en PDF. Il lit les données collectées sur **toutes les applications connectées**, avec les mêmes droits que les écrans.

Le fonctionnement de l'explorateur — champs, étagères, vues, exploration du détail, champs calculés — est décrit dans la [documentation de Liberty Next](../framework/explorer/analysis.md). Cette page présente ce que livre Nomasx-1.

Les noms des modèles, des analyses et des tableaux de bord livrés sont en anglais dans l'application ; cette page les cite tels quels.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxe-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxe-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxe-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxe-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="392" rx="14" fill="url(#nxe-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="30" width="190" height="360" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="50" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOMASX-1</text>
  <text x="254" y="74" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Vue d'ensemble</text>
  <text x="254" y="98" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Explorateur de données</text>
  <text x="254" y="122" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">▸ Sécurité</text>
  <text x="266" y="146" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Explorateur de données</text>
  <text x="266" y="170" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Utilisateurs</text>
  <text x="254" y="194" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">▸ Applications</text>
  <text x="266" y="218" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Conflits</text>
  <text x="278" y="242" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Explorateur de données</text>
  <text x="254" y="266" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">▸ Licences</text>
  <text x="266" y="290" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Explorateur de données</text>
  <text x="450" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Explorateur de données</text>
  <rect x="750" y="34" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="760" y="48.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Séparation des tâches · nomasx1 · sod ▾</text>
  <rect x="450" y="64" width="223" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="451" y="65" width="91" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="496.5" y="79.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Analyses (11)</text>
  <line x1="543" y1="69" x2="543" y2="83" stroke="#334155" strokeWidth="1"/>
  <text x="608.0" y="79.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableaux de bord (1)</text>
  <rect x="450" y="100" width="530" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ANALYSE</text>
  <text x="860" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AUDIENCE</text>
  <rect x="450" y="132" width="530" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="147.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Utilisateurs en conflit</text>
  <rect x="860" y="136.0" width="56" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="888.0" y="147.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">partagée</text>
  <rect x="450" y="160" width="530" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="175.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Utilisateurs en conflit par processus</text>
  <rect x="860" y="164.0" width="56" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="888.0" y="175.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">partagée</text>
  <rect x="450" y="188" width="530" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="203.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Paires de rôles en conflit</text>
  <rect x="860" y="192.0" width="56" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="888.0" y="203.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">partagée</text>
  <rect x="450" y="216" width="530" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="231.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Conflits par rafraîchissement</text>
  <rect x="860" y="220.0" width="56" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="888.0" y="231.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">partagée</text>
  <rect x="450" y="244" width="530" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="259.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Conflits privilégiés</text>
  <rect x="860" y="248.0" width="56" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="888.0" y="259.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">partagée</text>
  <rect x="450" y="290" width="530" height="98" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="308" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Modèles de l'application</text>
  <text x="462" y="328" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">• Sécurité</text>
  <text x="620" y="328" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">utilisateurs, attributions, rôles, profil, annuaire</text>
  <text x="462" y="348" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">• Séparation des tâches</text>
  <text x="620" y="348" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">conflits, activités, rôles, risques, tendance</text>
  <text x="462" y="368" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">• Conformité des licences</text>
  <text x="620" y="368" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">transactions, composants, usage, exposition</text>
  <rect x="10" y="60" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tous les modèles</text>
  <text x="20" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">entrée de premier niveau</text>
  <line x1="210" y1="77.0" x2="252" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxe-arrow)"/>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un modèle par dossier</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Sécurité, Conflits, Licences</text>
  <line x1="210" y1="167.0" x2="266" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxe-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choix du modèle</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">changer à tout moment</text>
  <line x1="1000" y1="47.0" x2="980" y2="45" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxe-arrow)"/>
  <rect x="1000" y="130" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Analyses livrées</text>
  <text x="1010" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">partagées, prêtes à ouvrir</text>
  <line x1="1000" y1="147.0" x2="980" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxe-arrow)"/>
  <rect x="1000" y="320" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois modèles</text>
  <text x="1010" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un par domaine</text>
  <line x1="1000" y1="337.0" x2="980" y2="340" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxe-arrow)"/>
</svg>

---

## Où le trouver \{#menu\}

| Entrée de menu | Ouvre |
|---|---|
| **Explorateur de données** (premier niveau) | L'explorateur, avec tous les modèles de Nomasx-1 dans son sélecteur. |
| **Sécurité → Explorateur de données** | Le modèle *Security*. |
| **Applications → Conflits → Explorateur de données** | Le modèle *Segregation of duties*. |
| **Licences → Explorateur de données** | Le modèle *Licence compliance*. |

Le sélecteur de modèle permet d'en changer à tout moment.

---

## Sécurité \{#security\}

Les utilisateurs de chaque application, leur statut et leur dernière connexion, leurs attributions de rôles, leur profil (société, business unit, pays, codes catégorie) et leur fiche d'annuaire (département, fonction, responsable), avec l'application et les rôles autour d'eux.

**Analyses** : *Users* (avec les comptes techniques et génériques), *Users by status*, *Users by application*, *Users by company*, *Users by country*, *Users by department*, *Technical and generic accounts*, *Last logins by month* — plus le mois est ancien, plus les comptes sont dormants —, *Accounts created by month*, *Users with the most roles*, *Users per role*.

**Tableau de bord** *Security overview* : les utilisateurs par statut, application, société et département ; les dernières connexions ; les rôles qui comptent le plus d'utilisateurs.

---

## Séparation des tâches \{#sod\}

Chaque conflit relevé par la [matrice SoD](./settings/sod/matrix.md) : l'utilisateur, les deux activités, les deux rôles qui les accordent, le processus et le risque — ainsi que la synthèse de chaque rafraîchissement, pour la tendance.

**Analyses** : *Users in conflict*, *Users in conflict by process*, *Users in conflict by risk level*, *Conflicts by risk*, *Privileged conflicts*, *Users with the most conflicts*, *Role pairs in conflict*, *Activity pairs in conflict*, *Users in conflict by company*, *Conflicts per refresh*, *Conflicts per refresh and process* — une colonne par processus.

**Tableau de bord** *SoD overview* : les utilisateurs en conflit par processus, niveau de risque et société ; les paires de rôles ; la tendance d'un rafraîchissement à l'autre.

---

## Conformité des licences \{#licenses\}

Les transactions de chaque utilisateur par table et par jour, la chaîne objet → code système → composant de licence, l'usage face aux quantités souscrites, l'exposition financière, et les salariés par date d'extraction.

**Analyses** : *Financial exposure*, *Financial exposure by component* (prix, support et total), *Usage vs subscribed by component*, *Compliance gap by component* — une valeur négative signale plus d'utilisateurs que de licences —, *Transactions by month*, *Transacting users by component* et *by company* — choisir la période pour appliquer une règle des 90 jours —, *Most used tables*, *Employees per extraction*.

**Tableau de bord** *Licence overview* : l'exposition financière, l'usage face à la souscription par composant, la tendance des transactions et les utilisateurs actifs.

:::info[Spécifique à JDE]
Les transactions et la chaîne objet → code système → composant de licence proviennent de la collecte d'usage de JD Edwards EnterpriseOne. Pour une autre source, le modèle *Licence compliance* contient ce que fournit la collecte de cette source.
:::

---

## Analyses livrées \{#bundled\}

Les analyses et tableaux de bord ci-dessus sont **partagés** : tout utilisateur autorisé à ouvrir le modèle les voit. Ils suivent les nouvelles versions de Nomasx-1, jusqu'à ce qu'un utilisateur y enregistre une modification — la version locale est alors conservée. Pour en adapter un sans le modifier, l'ouvrir puis utiliser **Enregistrer sous**.

---

## Qui voit quoi \{#access\}

- Un modèle est proposé aux titulaires d'un rôle qui l'accorde (**Data Explorer** dans les règles *Beyond the menus* du rôle) — voir [Rôles et permissions](../framework/build/secure/roles-and-permissions.md#access).
- Le périmètre de données des rôles de l'utilisateur s'applique à chaque analyse : un utilisateur limité à une application ou à une société n'en voit que les lignes, totaux compris.

---

## Voir aussi

- [Vue d'ensemble — Synthèse d'audit](./audit-synthesis.md) — la page de synthèse.
- [Analyses enregistrées et tableaux de bord](../framework/explorer/saved-and-dashboards.md) — enregistrer, partager, exporter.
