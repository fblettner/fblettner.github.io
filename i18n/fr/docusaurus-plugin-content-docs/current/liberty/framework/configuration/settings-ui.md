---
title: Interface des paramètres
description: "La page Paramètres de Liberty Next : un éditeur par fichier de configuration, regroupés par connecteur (connecteurs, dictionnaire, actions, menus, écrans, graphiques, tableaux de bord, rapports, notifications) ou partagés (pools, thème, accès, application, historique, notes de version), la validation et l'application d'un enregistrement, et Recharger la config."
keywords: [Liberty Next, Paramètres, éditeurs, connecteurs, dictionnaire, actions, menus, écrans, graphiques, tableaux de bord, rapports, notifications, pools, thème, accès, application, historique, rechargement]
---

# Interface des paramètres

**Paramètres**, dans le menu latéral, ouvre les éditeurs de la configuration. Chaque éditeur est un formulaire construit à partir du modèle que le serveur utilise pour charger le fichier : ce qu'il accepte est ce que le serveur accepte. La page est réservée aux superutilisateurs.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 390" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sui-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="360" rx="14" fill="url(#sui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres</text>
  <rect x="840" y="28" width="120" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="900.0" y="42.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Recharger la config</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="84" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PAR CONNECTEUR</text>
  <rect x="240" y="92" width="521" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="281.0" y="107.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Connecteurs</text>
  <line x1="322" y1="97" x2="322" y2="111" stroke="#334155" strokeWidth="1"/>
  <text x="365.5" y="107.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Dictionnaire</text>
  <line x1="409" y1="97" x2="409" y2="111" stroke="#334155" strokeWidth="1"/>
  <text x="439.5" y="107.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Actions</text>
  <line x1="470" y1="97" x2="470" y2="111" stroke="#334155" strokeWidth="1"/>
  <text x="495.0" y="107.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Menus</text>
  <rect x="521" y="93" width="53" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="547.5" y="107.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Écrans</text>
  <line x1="575" y1="97" x2="575" y2="111" stroke="#334155" strokeWidth="1"/>
  <text x="613.5" y="107.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphiques</text>
  <line x1="652" y1="97" x2="652" y2="111" stroke="#334155" strokeWidth="1"/>
  <text x="706.5" y="107.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableaux de bord</text>
  <text x="240" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMMUN</text>
  <rect x="240" y="146" width="380" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="265.0" y="161.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Pools</text>
  <line x1="290" y1="151" x2="290" y2="165" stroke="#334155" strokeWidth="1"/>
  <text x="315.0" y="161.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Thème</text>
  <line x1="340" y1="151" x2="340" y2="165" stroke="#334155" strokeWidth="1"/>
  <text x="367.5" y="161.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Access</text>
  <line x1="395" y1="151" x2="395" y2="165" stroke="#334155" strokeWidth="1"/>
  <text x="414.5" y="161.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">App</text>
  <line x1="434" y1="151" x2="434" y2="165" stroke="#334155" strokeWidth="1"/>
  <text x="472.5" y="161.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Historique</text>
  <line x1="511" y1="151" x2="511" y2="165" stroke="#334155" strokeWidth="1"/>
  <text x="565.5" y="161.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Notes de version</text>
  <line x1="240" y1="184" x2="960" y2="184" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="210" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Portée :</text>
  <rect x="290" y="198" width="33" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="306.5" y="210.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="329" y="198" width="43" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="350.5" y="210.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sales</text>
  <rect x="380" y="196" width="134" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="447.0" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une portée</text>
  <rect x="790" y="196" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="830.0" y="210.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Abandonner</text>
  <rect x="880" y="196" width="80" height="22" rx="5" fill="url(#sui-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="920.0" y="210.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="240" y="232" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ID</text>
  <text x="430" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIBELLÉ</text>
  <text x="650" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REQUÊTE DE LECTURE</text>
  <text x="850" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="264" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="280.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">customers</text>
  <text x="430" y="280.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="650" y="280.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">customers_get</text>
  <rect x="850" y="269.0" width="56" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="878.0" y="280.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">override</text>
  <rect x="240" y="294" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="310.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">deals</text>
  <text x="430" y="310.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Affaires</text>
  <text x="650" y="310.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">deals_get</text>
  <text x="850" y="310.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="324" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="340.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">activities</text>
  <text x="430" y="340.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Activités</text>
  <text x="650" y="340.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">activities_get</text>
  <text x="850" y="340.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="10" y="92" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglets par connecteur</text>
  <text x="20" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">choisir une portée, puis éditer</text>
  <line x1="210" y1="109.0" x2="240" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sui-arrow)"/>
  <rect x="10" y="160" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglets communs</text>
  <text x="20" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pour toute l'installation</text>
  <line x1="210" y1="177.0" x2="240" y2="158" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sui-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recharger la config</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">relit tous les fichiers</text>
  <line x1="1000" y1="47.0" x2="960" y2="39" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sui-arrow)"/>
  <rect x="1000" y="190" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Abandonner / Enregistrer</text>
  <text x="1010" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par page, validé</text>
  <line x1="1000" y1="207.0" x2="960" y2="207" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sui-arrow)"/>
  <rect x="1000" y="270" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Badge override</text>
  <text x="1010" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">conservé aux mises à jour</text>
  <line x1="1000" y1="287.0" x2="916" y2="279" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sui-arrow)"/>
</svg>

---

## Les onglets \{#tabs\}

**Par connecteur** (*Per connector*) — chaque éditeur demande d'abord sur quel connecteur (application ou source de données) il travaille :

| Onglet | Modifie | Voir |
|---|---|---|
| **Connecteurs** | Requêtes, tables, séquences et lookups des connecteurs SQL ; endpoints des connecteurs API ; réglages du connecteur. | [Connecteurs](../connectors.md), [Requêtes](../build/queries/overview.md) |
| **Dictionnaire** | Entrées, énumérations, lookups, séquences. | [Dictionnaire](../dictionary.md) |
| **Actions** | Les actions partagées réutilisées par les écrans. | [Actions et cycle de vie](../build/screens/actions-and-lifecycle.md) |
| **Menus** | L'arborescence du menu latéral de chaque application. | [Menus](../build/menus/overview.md) |
| **Écrans** | Grilles, fenêtres, onglets, actions — le Concepteur d'écran. | [Écrans](../build/screens/overview.md) |
| **Graphiques** | Les graphiques enregistrés. | [Graphiques](../charts.md) |
| **Tableaux de bord** | Les tableaux de bord et leurs widgets. | [Tableaux de bord](../dashboards.md) |
| **Explorateur** | Le modèle de l'explorateur de données. | — |
| **Rapports** | Les rapports personnalisés. | — |
| **Notifications** | Les règles de notification. | [Notifications](../../nomaflow/notifications.md) |

**Partagés** (*Shared*) — à l'échelle de l'installation :

| Onglet | Modifie | Voir |
|---|---|---|
| **Pools** | Les connexions aux bases : adresse, identifiants, taille, correspondances de schémas et de DB links. | [Connecteurs](../connectors.md) |
| **Thème** | Couleurs et habillage. | — |
| **Access** | Utilisateurs et rôles. | [Utilisateurs](../build/secure/users.md), [Rôles et permissions](../build/secure/roles-and-permissions.md) |
| **App** | Réglages de l'application, licence, assistant IA, notifications (e-mail), OpenID Connect, habillage PDF. | [Paramètres de l'application](../build/settings-app.md) |
| **History** | Les versions de chaque fichier de configuration et de chaque écran, l'historique et les rapports de mise à jour. | [Historique de la configuration](./config-history.md) |
| **Release notes** | Les notes de version de la version en service. | — |

**Recharger la config**, à droite des onglets, relit tous les fichiers de configuration dans le serveur en fonctionnement.

---

## Enregistrer \{#save\}

1. **Enregistrer** envoie la configuration modifiée ; le serveur la valide avec son modèle et refuse une configuration invalide en donnant la raison.
2. Le fichier est écrit. Une version du contenu précédent est conservée dans **History**.
3. La modification s'applique : aussitôt quand le serveur surveille ses fichiers (**Hot reload** activé dans Paramètres → App, la valeur par défaut), sinon par **Recharger la config**. Un rechargement reconstruit les connecteurs à partir des nouveaux fichiers ; en cas d'échec, la configuration précédente reste active.

La surveillance des fichiers ne recharge pas les pools, pour qu'une requête en cours ne perde jamais sa connexion : après la modification d'un pool, utiliser **Recharger la config**. Paramètres → **App** applique ses propres changements aussitôt, sauf l'adresse, le port et le niveau de journal, qui demandent un redémarrage.

Les fichiers sont réécrits à partir du modèle enregistré : les commentaires écrits à la main dans un fichier ne sont pas conservés.

---

## En dehors des éditeurs \{#outside\}

- La page **Surveillance**, dans le menu latéral, montre l'état du serveur en direct — voir [La page Surveillance](../../monitoring/dashboard.md).
- Les tâches Nomaflow se modifient dans les pages des Tâches — voir [Créer une tâche](../../nomaflow/jobs/create.md).
- `GET /admin/config/raw` lit un fichier tel qu'il est sur le disque ; il n'existe pas d'éditeur de texte brut. Quand un éditeur ne propose pas un champ, modifier le fichier sur le serveur puis **Recharger la config**.
- Chaque éditeur s'appuie sur `/admin/config/<section>/parsed` — voir [API REST](../../references/rest-api.md#admin-config).

---

## Conseils \{#tips\}

- Enregistrer un éditeur à la fois et vérifier le résultat avant de passer au suivant.
- Garder la configuration sous contrôle de version sur le serveur ; **History** conserve les versions récentes, pas tout l'historique.
- Préférer les éditeurs aux modifications à la main : ils refusent ce que le serveur refuserait.
