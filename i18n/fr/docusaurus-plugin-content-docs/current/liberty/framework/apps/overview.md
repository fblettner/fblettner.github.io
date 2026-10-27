---
title: Applications
description: "Ce qu'est une application dans Liberty Next — un connecteur doté d'un menu, proposé dans le sélecteur d'application — ce qui lui appartient (requêtes, portée du dictionnaire, écrans, menu, graphiques), le passage d'une application à l'autre, et la copie, le transfert entre environnements ou l'installation d'une application prête à l'emploi."
keywords: [Liberty Next, application, sélecteur d'application, connecteur, menu, show_in_switcher, home, cloner, packages, applications sous licence]
---

# Applications

Dans Liberty Next, une **application** est un **connecteur doté d'un menu** : son nom apparaît dans le sélecteur d'application en haut du menu latéral, et le choisir affiche son menu. Il n'existe pas d'objet « application » distinct à créer — le connecteur est l'application.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="app-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="app-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="app-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="app-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="410" rx="14" fill="url(#app-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="30" width="220" height="380" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="56" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Liberty Next</text>
  <rect x="252" y="70" width="196" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="350.0" y="84.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">crm ▾</text>
  <rect x="252" y="96" width="196" height="72" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="116" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">crm</text>
  <text x="264" y="138" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">sales</text>
  <text x="254" y="190" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Pool</text>
  <rect x="252" y="196" width="196" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="210.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Default ▾</text>
  <text x="260" y="250" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">📊 Pipeline</text>
  <text x="260" y="276" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">📁 Ventes</text>
  <text x="260" y="302" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">   👥 Clients</text>
  <text x="260" y="328" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">   📈 Affaires</text>
  <rect x="480" y="30" width="480" height="380" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="496" y="56" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Pipeline</text>
  <rect x="496" y="72" width="144" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="508" y="90" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EN COURS</text>
  <text x="508" y="116" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">173 500</text>
  <rect x="650" y="72" width="144" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="662" y="90" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GAGNÉ</text>
  <text x="662" y="116" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">18 000</text>
  <rect x="804" y="72" width="144" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="816" y="90" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AFFAIRES</text>
  <text x="816" y="116" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">3</text>
  <rect x="496" y="156" width="452" height="236" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="508" y="176" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pipeline par étape</text>
  <rect x="544.0" y="323.3" width="85.3" height="34.7" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="544.0" y="323.3" width="85.3" height="0.0" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="586.6666666666666" y="369" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Qualifiée</text>
  <rect x="677.3" y="271.3" width="85.3" height="86.7" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="677.3" y="271.3" width="85.3" height="0.0" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="720.0" y="369" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Proposition</text>
  <rect x="810.7" y="202.0" width="85.3" height="156.0" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="810.7" y="202.0" width="85.3" height="0.0" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="853.3333333333334" y="369" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Négociation</text>
  <rect x="10" y="66" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sélecteur d'application</text>
  <text x="20" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">applications visibles</text>
  <line x1="210" y1="83.0" x2="252" y2="81" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#app-arrow)"/>
  <rect x="10" y="190" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sélecteur de pool</text>
  <text x="20" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">connecteurs multi-pools</text>
  <line x1="210" y1="207.0" x2="252" y2="207" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#app-arrow)"/>
  <rect x="10" y="290" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le menu de l'app</text>
  <text x="20" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">change avec l'app</text>
  <line x1="210" y1="307.0" x2="260" y2="280" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#app-arrow)"/>
  <rect x="1000" y="200" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">home</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'entrée ouverte d'abord</text>
  <line x1="1000" y1="217.0" x2="960" y2="120" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#app-arrow)"/>
</svg>

---

## Ce qui appartient à une application \{#scope\}

Tout ce qu'affiche une application est rangé sous le nom de son connecteur :

| Élément | Réglage | Rangement |
|---|---|---|
| Requêtes (tables, requêtes, séquences, lookups) | Paramètres → Connecteurs | Dans le connecteur lui-même. |
| Entrées, énumérations, lookups et séquences du dictionnaire | Paramètres → Dictionnaire, **portée** du connecteur | `[connectors.<app>.*]` — en complément des entrées partagées. |
| Écrans | Paramètres → Écrans, pastille de l'application | `[screens.<app>.<id>]` |
| Menu | Paramètres → Menus, pastille de l'application | `[menus.<app>]` |
| Graphiques | Paramètres → Graphiques, portée du connecteur | `[charts.<app>.<id>]` |
| Tableaux de bord | Paramètres → Tableaux de bord, application | `[dashboards.<app>.<id>]` — une entrée de menu l'ouvre avec la cible `<app>.<id>`. |

Les actions partagées ont un espace de noms unique. Les tâches Nomaflow ne sont rattachées à aucune application.

---

## Le sélecteur d'application \{#picker\}

Le sélecteur se trouve en haut du menu latéral :

- il liste les applications dont l'utilisateur voit le menu, et n'apparaît qu'à partir de deux applications ;
- choisir une application bascule le menu latéral et les onglets de travail sur cette application — c'est un changement d'application, pas un filtre ;
- le choix est conservé dans le navigateur ;
- quand le connecteur de l'application a plusieurs pools, un sélecteur **Pool** placé à côté choisit l'instance de base de données sur laquelle s'exécutent tous les écrans — voir [Connecteurs → Connecteurs multi-pools](../connectors.md#multi-pool).

Les réglages **show_in_switcher** (activé par défaut) et **home** du connecteur déterminent s'il est proposé dans le sélecteur et quelle entrée de menu s'ouvre en premier. Voir [Transformer un connecteur en application](../build/menus/make-connector-an-app.md).

---

## Créer une application \{#create\}

1. **Paramètres → Connecteurs** — créer le connecteur SQL et son pool, puis ses requêtes (l'assistant CRUD les écrit à partir d'une table).
2. **Paramètres → Écrans** — construire les écrans sur ces requêtes.
3. **Paramètres → Menus** — **+ Ajouter une portée**, choisir le connecteur, ajouter les entrées qui ouvrent les écrans.
4. De retour sur le connecteur, vérifier **show_in_switcher** et renseigner éventuellement **home**.

L'[Assistant de création d'écran](../build/screen-assistant.md) enchaîne les étapes 1 à 3 pour une table. Le [tutoriel CRM](../tutorial-crm/01-setup.md) construit une application complète.

---

## Copier et déplacer une application \{#copy\}

| Besoin | Outil |
|---|---|
| Une seconde application construite sur une application existante (autre base, copie de test). | **Cloner** sur le connecteur : copie les requêtes avec la portée du dictionnaire, les écrans, le menu, les graphiques et les tableaux de bord sous le nouveau nom. Voir [Dupliquer une requête ou un connecteur](../build/queries/clone.md). |
| Déplacer tout ou partie d'une application vers un autre environnement (développement → production). | **Packages** : choisir les écrans, menus, tableaux de bord… à livrer, télécharger le ZIP avec tout ce dont ils dépendent, l'importer sur la cible. Voir [Packages](../build/packages.md). |
| Renommer un connecteur, un écran ou une requête. | **Renommer** dans son éditeur — toutes les références sont réécrites. |

---

## Applications prêtes à l'emploi \{#ready-made\}

**Nomasx-1** et **Nomajde** sont livrées comme applications prêtes à l'emploi, avec leurs tâches Nomaflow. Leur installation et leur mise à jour sont décrites dans [Applications sous licence](../../installation/deploy-prebuilt-apps.md). Leurs écrans, menus et dictionnaire sont visibles et modifiables dans les Paramètres comme ceux de toute application ; un élément marqué **override** conserve les modifications locales au fil des mises à jour.

---

## Qui voit une application \{#access\}

Une application apparaît pour un utilisateur dès que son menu contient des entrées que cet utilisateur peut ouvrir. Les rôles déterminent les entrées de menu, les écrans et les requêtes accessibles à chacun — voir [Rôles et permissions](../build/secure/roles-and-permissions.md) et [Menus → Permissions et rôles](../build/menus/permissions-and-roles.md).

---

## Pour aller plus loin

- [Transformer un connecteur en application](../build/menus/make-connector-an-app.md) — les deux réglages qui placent un connecteur dans le sélecteur.
- [Plugins](./plugins.md) — les fonctions Python appelées depuis les tâches et les actions d'écran.
- [Internationalisation](./i18n.md) — les libellés par langue.
