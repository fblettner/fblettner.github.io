---
title: L'espace Liberty Next
description: "L'espace Liberty Next réservé aux superutilisateurs : les pages du framework dans le sélecteur d'applications, ouvertes sur la Vue d'ensemble et regroupées dans l'ordre de construction d'une application — Construire (Studio, assistant), Données (connecteurs, dictionnaire), Écrans (écrans, menus), Logique (services, tests, notifications, IA), Analyse (tableaux de bord, graphiques, explorateur, modèles de rapport) — puis Administrer, Exploiter, Déployer et Documenter ; un même cadre pour tous les éditeurs, Recharger la config, la validation et l'application d'un enregistrement."
keywords: [Liberty Next, espace, paramètres, Construire, Administrer, Exploiter, Déployer, Documenter, éditeurs, connecteurs, écrans, paramètres de l'application, recharger la config, superutilisateur]
---

# L'espace Liberty Next

Les pages propres au framework — les éditeurs de la configuration, l'administration de l'installation, son exploitation, son déploiement et sa documentation — forment un espace à part entière, **Liberty Next**, proposé aux superutilisateurs dans le sélecteur d'applications, après les applications. Les menus des applications gardent ainsi leur place pour les utilisateurs finaux.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="wks-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="wks-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="wks-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="wks-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="432" rx="14" fill="url(#wks-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="36" width="330" height="406" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="46" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="60.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Liberty Next ▾</text>
  <text x="250" y="90" fill="#4a9eff" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Vue d'ensemble</text>
  <text x="250" y="110" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Construire</text>
  <text x="262" y="126" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Studio</text>
  <text x="262" y="141" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Assistant</text>
  <text x="250" y="168" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Données</text>
  <text x="262" y="184" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Connecteurs</text>
  <text x="262" y="199" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Dictionnaire</text>
  <text x="250" y="226" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Écrans</text>
  <text x="262" y="242" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Écrans</text>
  <text x="262" y="257" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Menus</text>
  <text x="250" y="284" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Logique</text>
  <text x="262" y="300" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Services</text>
  <text x="262" y="315" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Tests</text>
  <text x="262" y="330" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Notifications</text>
  <text x="262" y="345" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">IA</text>
  <text x="250" y="372" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Analyse</text>
  <text x="262" y="388" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Tableaux de bord</text>
  <text x="262" y="403" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Graphiques</text>
  <text x="262" y="418" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Explorateur</text>
  <text x="262" y="433" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Modèles de rapport</text>
  <text x="412" y="110" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Administrer</text>
  <text x="424" y="126" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">App</text>
  <text x="424" y="141" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Pools</text>
  <text x="424" y="156" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Accès</text>
  <text x="424" y="171" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Thème</text>
  <text x="412" y="198" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Exploiter</text>
  <text x="424" y="214" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Résultats des tests</text>
  <text x="424" y="229" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Surveillance</text>
  <text x="424" y="244" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Tâches</text>
  <text x="412" y="271" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Déployer</text>
  <text x="424" y="287" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Intégrité</text>
  <text x="424" y="302" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Paquet</text>
  <text x="424" y="317" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Modifications</text>
  <text x="424" y="332" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Historique</text>
  <text x="412" y="359" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Documenter</text>
  <text x="424" y="375" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Référence développeur</text>
  <text x="424" y="390" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Rapports de documentation</text>
  <text x="424" y="405" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">Notes de version</text>
  <rect x="580" y="36" width="384" height="400" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="596" y="62" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Écrans</text>
  <rect x="684" y="48" width="69" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="718.5" y="62.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Abandonner</text>
  <rect x="759" y="48" width="74" height="22" rx="5" fill="url(#wks-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="796.0" y="62.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="839" y="48" width="121" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="899.5" y="62.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Recharger la config</text>
  <rect x="596" y="186" width="352" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="608" y="203" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">crm · customers</text>
  <rect x="596" y="218" width="352" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="608" y="235" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">crm · deals</text>
  <rect x="20" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le sélecteur d'applications</text>
  <text x="30" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Liberty Next, après les applications</text>
  <line x1="200" y1="57.0" x2="248" y2="57" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Construire → Analyse</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'ordre de construction</text>
  <line x1="200" y1="127.0" x2="250" y2="107" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">D'abord la vue d'ensemble</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les applications et le chemin</text>
  <line x1="200" y1="347.0" x2="250" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="1000" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Boutons d'en-tête</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">au même endroit sur chaque page</text>
  <line x1="1000" y1="47.0" x2="960" y2="59" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Administrer, Exploiter</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'installation et ses exécutions</text>
  <line x1="1000" y1="167.0" x2="562" y2="107" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Déployer, Documenter</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vérifier, livrer, référencer</text>
  <line x1="1000" y1="317.0" x2="562" y2="268" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#wks-arrow)"/>
</svg>

---

## L'ouvrir \{#open\}

- Dans le **sélecteur d'applications** du menu latéral, **Liberty Next** vient après les applications.
- Le bouton à droite de la barre du haut — *Liberty Next — les pages du framework* — l'ouvre depuis n'importe quelle application ; dans l'espace, le même bouton devient *Retour à &lt;application&gt;* et ramène à la dernière application utilisée.

Les utilisateurs qui ne sont pas superutilisateurs ne voient ni l'entrée ni le bouton.

---

## Le menu \{#menu\}

Le menu s'ouvre sur **Vue d'ensemble**, puis suit l'ordre dans lequel une application se construit.

| Groupe | Page | Édite | Voir |
|---|---|---|---|
| — | **Vue d'ensemble** | Les applications de l'installation et les huit étapes de construction d'une application. | [Vue d'ensemble et Studio](../studio.md#overview) |
| **Construire** | **Studio** | La carte d'une application — menu, écrans, données, services —, modifiée sur place. | [Vue d'ensemble et Studio](../studio.md#studio) |
| | **Assistant** | Ouvre l'Assistant de création d'écran. | [Assistant de création d'écran](../build/screen-assistant.md) |
| **Données** | **Connecteurs** | Requêtes, tables, séquences et lookups des connecteurs SQL ; points d'accès des connecteurs API ; réglages des connecteurs. | [Connecteurs](../connectors.md), [Requêtes](../build/queries/overview.md), [Points d'accès d'API](../build/api-endpoints.md) |
| | **Dictionnaire** | Entrées, énumérations, lookups, séquences. | [Dictionnaire](../dictionary.md) |
| **Écrans** | **Écrans** | Grilles, fiches, actions — le Concepteur d'écran. | [Écrans](../build/screens/overview.md) |
| | **Menus** | L'arborescence du menu latéral de chaque application. | [Menus](../build/menus/overview.md) |
| **Logique** | **Services** | Des enchaînements d'étapes dessinés en flux, exécutés et exposés comme points d'accès. | [Services](../build/services.md) |
| | **Tests** | Les tests de non-régression des points d'accès d'API. | [Tests](../build/tests.md) |
| | **Notifications** | Les règles de notification. | [Notifications](../../nomaflow/notifications.md) |
| | **IA** | Ce que chaque application livre pour l'assistant IA : questions de départ et procédures. | [Assistant IA](../ai-assistant.md#settings-ai) |
| **Analyse** | **Tableaux de bord**, **Graphiques** | Les tableaux de bord et leurs cartes ; les graphiques enregistrés. | [Tableaux de bord](../dashboards.md), [Graphiques](../charts.md) |
| | **Explorateur** | Les modèles de l'explorateur de données. | [Construire un modèle](../explorer/model.md) |
| | **Modèles de rapport** | Les modèles de rapport écrits par les exploitants ; la charte PDF de l'installation se règle dans App. | — |
| **Administrer** | **App** | Tous les réglages de l'installation, en quatre groupes : l'installation, la connexion, ce qui est activé, l'exploitation. | [Paramètres de l'application](../build/settings-app.md) |
| | **Pools** | Les connexions aux bases : adresse, compte, schémas, liens de base, réglages fins — avec **Tester la connexion**. | [Connecteurs](../connectors.md) |
| | **Accès** | Utilisateurs et rôles. | [Utilisateurs](../build/secure/users.md), [Rôles et permissions](../build/secure/roles-and-permissions.md) |
| | **Thème** | Palette, police et taille du texte, avec un aperçu en sombre et en clair. | — |
| **Exploiter** | **Résultats des tests** | Le bilan des tests, exécution après exécution. | [Résultats des tests](../../monitoring/test-results.md) |
| | **Surveillance** | La vue en direct de l'instance. | [La page Surveillance](../../monitoring/dashboard.md) |
| | **Tâches** | Les tâches Nomaflow. | [Tâches](../../nomaflow/jobs/catalog.md) |
| **Déployer** | **Intégrité** | Les contrôles croisés de toute la configuration : vérifier, puis livrer. | — |
| | **Paquet**, **Modifications**, **Historique** | Les paquets, les paquets de modifications, l'historique de la configuration. | [Paquets](../build/packages.md), [Paquets de modifications](../../nomaflow/change-packages.md), [Historique de la configuration](./config-history.md) |
| **Documenter** | **Référence développeur**, **Rapports de documentation** | La référence de chaque réglage ; les rapports générés. | [Référence développeur](./developer-reference.md), [Rapports de documentation](./documentation-reports.md) |
| | **Notes de version** | Les notes de la version en service, une version à la fois, avec une recherche dans toutes les versions. | — |

Chaque page a sa propre adresse — `/liberty/screens`, `/liberty/app`… —, ce qui permet de la mettre en favori ou de l'envoyer en lien.

### Un même cadre pour tous les éditeurs \{#frame\}

Les éditeurs partagent le même cadre : à gauche, la liste, où chaque ligne dit ce qu'est l'élément ; à côté, l'élément choisi ; et dans l'en-tête de la page, toujours au même endroit, ses boutons — **Abandonner**, **Enregistrer**, l'*Ajouter* de la page, **Recharger la config**. Ce qui se dessine se dessine partout de la même façon : un écran en six étapes, une table avec ses requêtes de lecture et d'écriture, un pool, un point d'accès, une tâche et un service en flux de cartes, la carte choisie se modifiant à côté du flux. Dans le menu latéral, le bord droit du menu se fait glisser pour le redimensionner.

---|---|---|
| **Assistant** | Ouvre l'assistant IA. | [Assistant IA](../ai-assistant.md) |
| **Connecteurs** | Requêtes, tables, séquences et lookups des connecteurs SQL ; points d'accès des connecteurs API ; réglages des connecteurs. | [Connecteurs](../connectors.md), [Requêtes](../build/queries/overview.md) |
| **Dictionnaire** | Entrées, énumérations, lookups, séquences. | [Dictionnaire](../dictionary.md) |
| **Écrans** | Grilles, dialogues, onglets, actions — le concepteur d'écran. | [Écrans](../build/screens/overview.md) |
| **Menus** | L'arborescence du menu latéral de chaque application. | [Menus](../build/menus/overview.md) |
| **Actions** | Les actions partagées entre écrans. | [Actions et cycle de vie](../build/screens/actions-and-lifecycle.md) |
| **Graphiques** | Les graphiques enregistrés. | [Graphiques](../charts.md) |
| **Tableaux de bord** | Les tableaux de bord et leurs widgets. | [Tableaux de bord](../dashboards.md) |
| **Explorateur** | Les modèles de l'explorateur de données. | [Construire un modèle](../explorer/model.md) |
| **Modèles de rapport** | Les modèles de rapport écrits par les exploitants ; la charte PDF de l'installation se règle dans App. | — |
| **Notifications** | Les règles de notification. | [Notifications](../../nomaflow/notifications.md) |
| **IA** | Ce que chaque application livre pour l'assistant IA : questions de départ et procédures. | [Assistant IA](../ai-assistant.md#settings-ai) |
| **Intégrité** | Les contrôles croisés de toute la configuration. | — |

**Administrer** — l'installation :

| Page | Édite | Voir |
|---|---|---|
| **App** | Tous les réglages de l'installation : application, journal du serveur, connexion, Nomaflow, paquets de changements, licence, assistant IA, notifications, OpenID Connect, charte des PDF. | [Paramètres de l'application](../build/settings-app.md) |
| **Pools** | Les connexions aux bases : adresse, identifiants, taille, schéma et correspondances de DB-links. | [Connecteurs](../connectors.md) |
| **Accès** | Utilisateurs et rôles. | [Utilisateurs](../build/secure/users.md), [Rôles et permissions](../build/secure/roles-and-permissions.md) |
| **Thème** | Couleurs et habillage. | — |

**Exploiter** — **Surveillance** ([La page Surveillance](../../monitoring/dashboard.md)) et **Tâches**, les tâches Nomaflow ([Tâches](../../nomaflow/jobs/catalog.md)).

**Déployer** — **Paquet** ([Paquets](../build/packages.md)), **Modifications** ([Paquets de modifications](../../nomaflow/change-packages.md)), **Historique** ([Historique de la configuration](./config-history.md)).

**Documenter** — la [Référence développeur](./developer-reference.md), les [Rapports de documentation](./documentation-reports.md) et les **Notes de version** de la version en service.

Chaque page a sa propre adresse — `/liberty/screens`, `/liberty/app`… —, ce qui permet de la mettre en favori ou de l'envoyer en lien. Les anciennes adresses de la page Paramètres et des pages Paquet, Modifications et Intégrité de Nomaflow mènent aux nouvelles pages.

---

## Enregistrer \{#save\}

1. **Enregistrer** envoie la configuration modifiée ; le serveur la valide d'après son modèle et refuse une configuration invalide en donnant la raison.
2. Le fichier est écrit. Une version du contenu précédent est conservée dans **Déployer → Historique**.
3. Le changement s'applique : aussitôt quand le serveur surveille ses fichiers (**Hot reload** dans Administrer → App, activé par défaut), sinon avec **Recharger la config**.

**Recharger la config**, en haut de chaque page d'édition, relit tous les fichiers de configuration dans le serveur en service — *Rechargé — 12 connecteurs, 340 entrées de dictionnaire, 4 applications.* Un rechargement reconstruit les connecteurs à partir des nouveaux fichiers ; s'il échoue, la configuration précédente reste active. Les pools ne sont pas rechargés par la surveillance des fichiers, pour qu'une requête en cours ne perde jamais sa connexion : après la modification d'un pool, utiliser **Recharger la config**.

Les fichiers sont réécrits à partir du modèle enregistré : les commentaires écrits à la main dans un fichier ne sont pas conservés.

---

## Conseils \{#tips\}

- Enregistrer un éditeur à la fois et vérifier le résultat avant de passer au suivant.
- Garder la configuration sous gestion de versions sur le serveur ; l'**Historique** conserve les versions récentes, pas toute l'histoire.
- Préférer les éditeurs aux modifications à la main : ils refusent ce que le serveur refuserait. La [Référence développeur](./developer-reference.md) indique, pour chaque réglage, la page qui le modifie.
