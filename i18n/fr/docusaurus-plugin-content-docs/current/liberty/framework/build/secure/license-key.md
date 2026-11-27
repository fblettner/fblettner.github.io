---
title: Clé de licence
description: "La clé de licence de Liberty Next : ce qu'elle active (Nomasx-1, Nomajde — une application, une autre ou toutes), les connecteurs et tâches rattachés à une application, où la coller (Liberty Next → Administrer → App → Licence), comment la vérifier (liberty-license, /api/license), ce qui se passe sans elle, et comment la remplacer avant son expiration."
keywords: [Liberty Next, licence, clé de licence, Nomasx-1, Nomajde, Paramètres App, liberty-license, api license, expiration, mode restreint]
---

# Clé de licence

Les applications sous licence — **Nomasx-1** et **Nomajde** — sont activées par une clé de licence fournie par Nomana-IT.

Liberty Next est lui-même publié sous **Business Source License 1.1** : code source disponible, libre de lecture, de modification et de fork, et d'exploitation en production pour sa propre organisation et les applications construites dessus — ces applications, leur configuration et leurs plugins restent à leur auteur. Vendre Liberty Next lui-même, ou une version modifiée, ou le proposer en service hébergé payant demande l'accord écrit de Nomana-IT. Chaque version passe sous licence GNU AGPL v3 ou ultérieure quatre ans après sa sortie. Les applications de Nomana-IT sont des produits distincts, sous leurs propres conditions.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 584" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="slic-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="slic-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="slic-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="slic-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="544" rx="14" fill="url(#slic-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">App</text>
  <rect x="953" y="28" width="131" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1018.5" y="42.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Recharger la config</text>
  <rect x="869" y="28" width="78" height="22" rx="5" fill="url(#slic-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="908.0" y="42.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="780" y="28" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="821.5" y="42.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↶ Abandonner</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="236" y="78" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Les réglages de l'installation (app.toml). Les secrets sont chiffrés dans le fichier ; un redémarrage est demandé quand il en faut un.</text>
  <text x="246" y="104" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">L'installation</text>
  <rect x="242" y="112" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="125" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="123" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Serveur</text>
  <text x="268" y="133" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">ACME ERP · :8000 · info</text>
  <rect x="242" y="142" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="155" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="153" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Affichage</text>
  <text x="268" y="163" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">fr · Ce mois-ci · 50</text>
  <rect x="242" y="172" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="185" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="183" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Adresses externes</text>
  <text x="268" y="193" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">JDE_WEB</text>
  <rect x="242" y="202" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="215" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="213" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Charte des PDF</text>
  <text x="268" y="223" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">valeurs du framework</text>
  <rect x="242" y="232" width="238" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <circle cx="256" cy="245" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="243" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Licence</text>
  <text x="268" y="253" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">configurée</text>
  <text x="246" y="278" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">La connexion</text>
  <rect x="242" y="286" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="299" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="297" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Connexion</text>
  <text x="268" y="307" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Fichier (auth.toml) · redémarrer après un c…</text>
  <rect x="242" y="316" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="329" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="327" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">OpenID Connect (SSO)</text>
  <text x="268" y="337" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">désactivé</text>
  <text x="246" y="362" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui est activé</text>
  <rect x="242" y="370" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="383" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="381" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Assistant IA</text>
  <text x="268" y="391" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">claude-sonnet-4-5</text>
  <rect x="242" y="400" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="413" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="411" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Notifications (e-mail)</text>
  <text x="268" y="421" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">pas de SMTP — portail seulement</text>
  <rect x="242" y="430" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="443" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="441" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">nomaflow</text>
  <text x="268" y="451" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">default · redémarrer après un changement</text>
  <rect x="242" y="460" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="473" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="471" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Paquets de changements</text>
  <text x="268" y="481" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">default · redémarrer après un changement</text>
  <text x="246" y="506" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">L'exploitation</text>
  <rect x="242" y="514" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="527" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="525" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Journal du serveur</text>
  <text x="268" y="535" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">text · 10 MB × 5 · redémarrer après un chan…</text>
  <rect x="236" y="86" width="250" height="464" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="512" y="106" fill="#e2e8f0" fontSize="9.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LICENCE</text>
  <text x="1070" y="106" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">configurée</text>
  <line x1="498" y1="118" x2="1084" y2="118" stroke="#1f2937" strokeWidth="1"/>
  <text x="512" y="136" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">JWT signé par l'éditeur qui déverrouille les applications sous licence. Vide → mode « restreint ».</text>
  <text x="512" y="148" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Chiffré au repos avec la clé maîtresse de l'installation.</text>
  <text x="512" y="166" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLÉ DE LICENCE</text>
  <rect x="512" y="172" width="558" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="187.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••</text>
  <text x="1056" y="188" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <text x="512" y="214" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Une installation sous licence signale une fois par jour le nom de cet environnement, sa version</text>
  <text x="512" y="226" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">et son nombre de comptes actifs — rien d'autre (tâche liberty-usage-report).</text>
  <text x="512" y="242" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ADRESSE DU RAPPORT D’USAGE</text>
  <rect x="512" y="248" width="558" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="263.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">https://lms.example.com/api/usage</text>
  <text x="512" y="286" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">vide = rien n’est envoyé</text>
  <rect x="498" y="86" width="586" height="214" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Section Licence</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">son état sur la ligne</text>
  <line x1="200" y1="247.0" x2="242" y2="245" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#slic-arrow)"/>
  <rect x="1120" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="1130" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">appliqué aussitôt, sans redémarrage</text>
  <line x1="1120" y1="47.0" x2="899" y2="50" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#slic-arrow)"/>
  <rect x="1120" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Coller la clé</text>
  <text x="1130" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">masquée, œil pour l'afficher</text>
  <line x1="1120" y1="167.0" x2="1070" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#slic-arrow)"/>
  <rect x="1120" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rapport d'usage</text>
  <text x="1130" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vide = rien n'est envoyé</text>
  <line x1="1120" y1="277.0" x2="1070" y2="260" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#slic-arrow)"/>
</svg>

---

## Installer la clé \{#install\}

Se connecter avec un superutilisateur, ouvrir **Liberty Next → Administrer → App → Licence**, coller la clé dans **Clé de licence** et enregistrer. La clé est chiffrée avec la clé maître de l'installation, et les applications sous licence se chargent aussitôt — sans redémarrage.

Avant de la coller, la clé peut être vérifiée sur le serveur : `liberty-license verify <clé>` (avec Docker : `docker exec -u liberty liberty-next liberty-license verify <clé>`).

---

## Vérifier la licence \{#check\}

| Où | Affiche |
|---|---|
| La ligne **Licence** de la page App, et l'en-tête de sa section | *configurée*, ou *absente — mode restreint*. |
| `liberty-license status` | Validité, produits couverts, date d'expiration de la clé configurée. |
| `GET /api/license` | `{mode, customer, plan, apps, expires_at, error}`. |
| `GET /info` | `license.mode` : `full` ou `restricted`. |
| **Surveillance**, bloc *Exécution* | La ligne **Licence** : *complète* avec le client, l'offre et les applications couvertes — voir [Surveillance](../../../monitoring/dashboard.md#runtime). |

---

## Ce que couvre une clé \{#coverage\}

Une clé couvre une application sous licence, une autre, ou toutes — selon l'offre souscrite. Une clé qui ne nomme aucune application les couvre toutes. `liberty-license status`, `GET /api/license` et la ligne **Licence** de la page Surveillance indiquent les applications couvertes.

Une application que la clé ne couvre pas n'est proposée nulle part — elle n'est pas seulement absente du menu :

| Élément | Pour une application non couverte par la clé |
|---|---|
| **Menu et sélecteur** | Son menu n'apparaît pas et l'application ne figure pas dans le sélecteur. Une entrée du menu d'une autre application qui ouvre l'une de ses pages est retirée aussi. |
| **Pages** | Ses pages ne sont ni proposées ni ouvertes. |
| **Fonctions** | Une fonction appelée par son nom — depuis une action d'écran, une page, `POST /api/plugins/run` — est refusée avec le message *The licence of this installation does not cover the application …*. |
| **Tâches** | Ses tâches ne sont ni affichées, ni planifiées, ni exécutées — voir [Tâches rattachées à une application](#jobs). |
| **Data Explorer** | Ses modèles ne sont pas proposés. |
| **Rôles** | Ses rôles prédéfinis n'apparaissent pas dans **Ajouter un rôle prédéfini…**. |
| **Assistant IA** | Ses outils ne sont pas transmis à l'assistant. |

Un changement de licence s'applique aussitôt : les applications, leurs menus et leurs tâches suivent la nouvelle clé sans redémarrage.

### Connecteur au service d'une application \{#connector-applications\}

Une application peut reposer sur plusieurs connecteurs — le sien, une seconde base, un connecteur qui porte ses services. Le réglage d'un connecteur qui désigne les applications sous licence dont il fait partie s'appelle **Serves the applications** sur un connecteur SQL (carte **Réglages**) et **Sert les applications** sur un connecteur API (étape **Connexion**) — voir [Connecteurs](../../connectors.md#connection-fields) :

- le connecteur est chargé si la clé couvre l'une de ces applications, et écarté sinon ;
- une application sous licence dont les données sont lues par une autre application désigne cette dernière : son connecteur reste chargé pour elle, sans que son menu, ses pages, ses fonctions ni ses tâches soient proposés ;
- vide : le connecteur est indépendant et ne suit aucune application.

### Tâches rattachées à une application \{#jobs\}

Une tâche Nomaflow porte le réglage **Applications** (éditeur de tâche, section *Tâche* — voir [Créer une tâche](../../../nomaflow/jobs/create.md#sections)) : elle est affichée, planifiée et exécutée si la clé couvre l'une des applications indiquées. Une tâche qui n'en indique aucune est toujours proposée. Quand la clé change, les tâches suivent aussitôt : celles d'une application qui n'est plus couverte quittent la liste et leur planification s'arrête ; celles d'une application nouvellement couverte apparaissent avec leur planification.

---

## Rapport d'usage \{#usage-report\}

Une installation sous licence envoie une fois par jour un rapport à l'outil de gestion des licences :

| Envoyé | Contenu |
|---|---|
| Environnement | L'**Environnement** de Liberty Next → Administrer → App → Serveur (`production`, `test`…). |
| Version | Celle du framework et, quand les applications sont installées, la leur — un rapport pour chacune. |
| Comptes actifs | Leur nombre. |
| Empreinte de l'installation | Un condensat court qui distingue deux installations ; il ne contient ni adresse ni nom. |

Quand les comptes sont tenus dans un fichier (le réglage par défaut), l'installation conserve sa propre identité dans un fichier `.installation`, placé à côté du fichier des comptes (`auth.toml`, dans le dossier `config/` — le volume `liberty-config` sous Docker). L'empreinte en est tirée : une mise à jour, un conteneur recréé ou un nouveau nom d'hôte ne font donc pas apparaître une nouvelle installation dans l'outil de gestion des licences. Supprimer ce fichier donne une nouvelle identité à l'installation.

Aucun chiffre des applications, aucun nom d'utilisateur, aucune donnée.

Le rapport est envoyé par une tâche Nomaflow, `liberty-usage-report`, listée sous **Nomaflow → Tâches** et planifiée chaque jour à 04:17. Chaque exécution montre ce qui a été envoyé et la réponse de l'outil ; un envoi refusé ou sans réponse est l'erreur de l'exécution. La tâche se lance, se suspend et se replanifie comme les autres.

La tâche existe tant qu'une clé de licence est installée et que l'**Adresse du rapport d'usage** (Liberty Next → Administrer → App → Licence) est renseignée ; une adresse vide, et rien n'est envoyé.

---

## Sans clé valide \{#restricted\}

Sans clé, ou avec une clé expirée ou invalide, le serveur fonctionne en **mode restreint** : le framework et les applications construites avec lui fonctionnent, les applications sous licence ne se chargent pas. Une clé valide qui ne couvre pas une application écarte celle-ci de la même façon — voir [Ce que couvre une clé](#coverage). Le journal du serveur en donne la raison par une ligne commençant par `license: not loading licensed connector(s)`.

---

## Remplacer la clé \{#replace\}

Noter la date d'expiration à l'installation de la clé. Avant l'échéance, coller la nouvelle clé dans **Liberty Next → Administrer → App → Licence** et enregistrer : elle s'applique aussitôt.

La clé peut aussi venir de la variable d'environnement `LIBERTY_LICENSE_KEY`, pour les installations qui gardent leurs secrets dans un orchestrateur ; la page App affiche alors la référence telle quelle.
