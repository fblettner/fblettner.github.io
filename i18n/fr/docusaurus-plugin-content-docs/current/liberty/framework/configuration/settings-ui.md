---
title: L'espace Liberty Next
description: "L'espace Liberty Next réservé aux superutilisateurs : les pages du framework dans le sélecteur d'applications, ouvertes sur la Vue d'ensemble et regroupées dans l'ordre de construction d'une application — Construire (Studio, assistant), Données (connecteurs, dictionnaire), Écrans (écrans, menus), Logique (services, tests, notifications, IA), Analyse (tableaux de bord, graphiques, explorateur, modèles de rapport) — puis Administrer, Exploiter, Déployer et Documenter ; un même cadre pour tous les éditeurs, Recharger la config, la validation et l'application d'un enregistrement."
keywords: [Liberty Next, espace, paramètres, Construire, Administrer, Exploiter, Déployer, Documenter, éditeurs, connecteurs, écrans, paramètres de l'application, recharger la config, superutilisateur]
---

# L'espace Liberty Next

Les pages propres au framework — les éditeurs de la configuration, l'administration de l'installation, son exploitation, son déploiement et sa documentation — forment un espace à part entière, **Liberty Next**, proposé aux superutilisateurs dans le sélecteur d'applications, après les applications. Les menus des applications gardent ainsi leur place pour les utilisateurs finaux.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 514" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="lws-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="lws-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="lws-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="lws-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="474" rx="14" fill="url(#lws-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="232" y="32" width="210" height="450" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="246" y="56" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Liberty Next</text>
  <rect x="242" y="68" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="82.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Liberty Next</text>
  <text x="420" y="82.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="246" y="112" fill="#64748b" fontSize="8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LIBERTY NEXT</text>
  <text x="262" y="132" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Vue d'ensemble</text>
  <text x="246" y="156" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="156" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Construire</text>
  <text x="246" y="180" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="180" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Données</text>
  <text x="246" y="204" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="204" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Écrans</text>
  <text x="246" y="228" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="228" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Logique</text>
  <text x="246" y="252" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="252" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Analyse</text>
  <rect x="240" y="261" width="194" height="22" rx="5" fill="rgba(255,255,255,0.05)"/>
  <text x="246" y="276" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="262" y="276" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Administrer</text>
  <rect x="258" y="285" width="174" height="22" rx="5" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="276" y="300" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">App</text>
  <text x="276" y="323" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Pools</text>
  <text x="276" y="346" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Accès</text>
  <text x="276" y="369" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Thème</text>
  <text x="246" y="394" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="394" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Exploiter</text>
  <text x="246" y="418" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="418" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Déployer</text>
  <text x="246" y="442" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="262" y="442" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Documenter</text>
  <line x1="442" y1="220" x2="442" y2="280" stroke="#4a9eff" strokeWidth="2"/>
  <rect x="948" y="32" width="24" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="960.0" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">EN</text>
  <rect x="976" y="32" width="24" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="988.0" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">FR</text>
  <rect x="1004" y="32" width="24" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1016.0" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◐</text>
  <rect x="1032" y="32" width="24" height="24" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1044.0" y="47.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <rect x="1060" y="32" width="24" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1072.0" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⏻</text>
  <rect x="456" y="32" width="70" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="491.0" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">App  ✕</text>
  <rect x="472" y="78" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="494" y="90" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">App</text>
  <rect x="941" y="74" width="131" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1006.5" y="88.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Recharger la config</text>
  <rect x="857" y="74" width="78" height="22" rx="5" fill="url(#lws-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="896.0" y="88.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="768" y="74" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="809.5" y="88.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↶ Abandonner</text>
  <line x1="456" y1="106" x2="1088" y2="106" stroke="#1f2937" strokeWidth="1"/>
  <text x="478" y="140" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">L'installation</text>
  <rect x="474" y="148" width="188" height="24" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="484" y="164" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Serveur</text>
  <rect x="474" y="176" width="188" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="484" y="192" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Affichage</text>
  <rect x="474" y="204" width="188" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="484" y="220" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Licence</text>
  <text x="478" y="242" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">La connexion</text>
  <rect x="474" y="250" width="188" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="484" y="266" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Connexion</text>
  <rect x="474" y="278" width="188" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="484" y="294" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">OpenID Connect (SSO)</text>
  <rect x="468" y="120" width="200" height="192" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="680" y="120" width="396" height="192" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="694" y="140" fill="#e2e8f0" fontSize="9.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SERVEUR</text>
  <line x1="680" y1="150" x2="1076" y2="150" stroke="#1f2937" strokeWidth="1"/>
  <text x="694" y="168" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM DE L'APPLICATION</text>
  <rect x="694" y="174" width="177.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="704" y="188.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME ERP</text>
  <text x="885.0" y="168" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENVIRONNEMENT</text>
  <rect x="885.0" y="174" width="177.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="895.0" y="188.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">production</text>
  <text x="694" y="216" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HÔTE D'ÉCOUTE</text>
  <rect x="694" y="222" width="177.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="704" y="236.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">0.0.0.0</text>
  <text x="885.0" y="216" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PORT</text>
  <rect x="885.0" y="222" width="177.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="895.0" y="236.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">8000</text>
  <rect x="694" y="271" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M696.5,276.5 L698.8,278.8 L702.8,274" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="711" y="280" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Recharger à chaud les fichiers TOML quand ils changent</text>
  <rect x="20" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le sélecteur d'application</text>
  <text x="30" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Liberty Next, après les applications</text>
  <line x1="200" y1="57.0" x2="242" y2="79" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lws-arrow)"/>
  <rect x="20" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vue d'ensemble d'abord</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les applications et le chemin</text>
  <line x1="200" y1="147.0" x2="258" y2="128" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lws-arrow)"/>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Construire → Analyse</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'ordre de construction</text>
  <line x1="200" y1="227.0" x2="258" y2="224" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lws-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Administrer, Exploiter…</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'installation, l'exploitation</text>
  <line x1="200" y1="317.0" x2="258" y2="272" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lws-arrow)"/>
  <rect x="20" y="410" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="425" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Déployer, Documenter</text>
  <text x="30" y="438" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vérifier, livrer, référence</text>
  <line x1="200" y1="427.0" x2="258" y2="438" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lws-arrow)"/>
  <rect x="1120" y="20" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="35" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les pages du framework</text>
  <text x="1130" y="48" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">depuis toute app ; Retour à &lt;app&gt;</text>
  <line x1="1120" y1="37.0" x2="1044" y2="44" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lws-arrow)"/>
  <rect x="1120" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Boutons d'en-tête</text>
  <text x="1130" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Abandonner, Enregistrer, Recharger</text>
  <line x1="1120" y1="127.0" x2="887" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lws-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La liste, puis l'élément choisi</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le même cadre partout</text>
  <line x1="1120" y1="317.0" x2="1076" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lws-arrow)"/>
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
| | **Modèles de rapport** | Les modèles de rapport écrits par les exploitants ; la charte PDF de l'installation se règle dans App. | [Modèles de rapport](../report-templates.md) |
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

---

## Enregistrer \{#save\}

1. **Enregistrer** envoie la configuration modifiée ; le serveur la valide d'après son modèle et refuse une configuration invalide en donnant la raison.
2. Le fichier est écrit. Une version du contenu précédent est conservée dans **Déployer → Historique**.
3. Le changement s'applique : aussitôt quand le serveur surveille ses fichiers (**Recharger à chaud les fichiers TOML de configuration quand ils changent** dans Administrer → App → Serveur, coché par défaut), sinon avec **Recharger la config**.

**Recharger la config**, en haut de chaque page d'édition, relit tous les fichiers de configuration dans le serveur en service — *Rechargé — 12 connecteurs, 340 entrées de dictionnaire, 4 applications.* Un rechargement reconstruit les connecteurs à partir des nouveaux fichiers ; s'il échoue, la configuration précédente reste active. Les pools ne sont pas rechargés par la surveillance des fichiers, pour qu'une requête en cours ne perde jamais sa connexion : après la modification d'un pool, utiliser **Recharger la config**.

Les fichiers sont réécrits à partir du modèle enregistré : les commentaires écrits à la main dans un fichier ne sont pas conservés.

---

## Conseils \{#tips\}

- Enregistrer un éditeur à la fois et vérifier le résultat avant de passer au suivant.
- Garder la configuration sous gestion de versions sur le serveur ; l'**Historique** conserve les versions récentes, pas toute l'histoire.
- Préférer les éditeurs aux modifications à la main : ils refusent ce que le serveur refuserait. La [Référence développeur](./developer-reference.md) indique, pour chaque réglage, la page qui le modifie.
