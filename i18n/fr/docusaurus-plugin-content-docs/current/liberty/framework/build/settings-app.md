---
title: Paramètres de l'application
description: "Liberty Next → Administrer → App : tous les réglages de l'installation, section par section — Application (nom, adresse, sous-chemin, langue, valeurs par défaut de l'interface, onglets, navigation, rechargement à chaud, mode épais d'Oracle), Journal du serveur, Connexion, Nomaflow, Paquets de changements, Licence, Assistant IA, Notifications (e-mail), OpenID Connect (SSO), Charte des PDF, et les valeurs de Déploiement en lecture seule — le rôle de chaque champ, les secrets chiffrés, et ce qui demande un redémarrage."
keywords: [Liberty Next, Paramètres App, licence, assistant IA, notifications, SMTP, OpenID Connect, SSO, habillage PDF, période par défaut, taille de page, Oracle thick]
---

# Paramètres de l'application

**Liberty Next → Administrer → App** regroupe tous les réglages de l'installation : rien n'est à modifier dans un fichier. Les sections forment une liste à gauche, en quatre groupes qui suivent l'ordre de mise en place d'une installation — **L'installation** (Serveur, Affichage, Adresses externes, Charte des PDF, Licence), **La connexion** (Connexion, OpenID Connect), **Ce qui est activé** (Assistant IA, Notifications, nomaflow, Paquets de changements), **L'exploitation** (Journal du serveur, et Déploiement en lecture seule). Une seule section est ouverte à la fois, à côté de la liste, ses champs sur une même grille — chaque libellé au-dessus de son champ, l'explication sur une ligne en dessous — et la page mémorise laquelle. Chaque ligne de la liste affiche l'état de la section (*configurée*, *absente — mode restreint*, *aucune clé API*, *désactivé*, *redémarrer après un changement*…). **Enregistrer** et **Abandonner** se trouvent dans l'en-tête de la page, à côté de **Recharger la config** ; Enregistrer valide et applique toute la page d'un coup.

Les champs secrets — clé de licence, clé d'API Anthropic, mot de passe SMTP, secret client et secret de session OIDC — sont des saisies masquées avec un œil ; ils sont chiffrés avec la clé maître à l'enregistrement ([Chiffrement](../configuration/encryption-secrets.md)).

---

## Vue d'ensemble

<svg viewBox="0 0 1320 584" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sapp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sapp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sapp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sapp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="544" rx="14" fill="url(#sapp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">App</text>
  <rect x="953" y="28" width="131" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1018.5" y="42.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Recharger la config</text>
  <rect x="869" y="28" width="78" height="22" rx="5" fill="url(#sapp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="908.0" y="42.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="780" y="28" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="821.5" y="42.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↶ Abandonner</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="236" y="78" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Les réglages de l'installation (app.toml). Les secrets sont chiffrés dans le fichier ; un redémarrage est demandé quand il en faut un.</text>
  <text x="246" y="104" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">L'installation</text>
  <rect x="242" y="112" width="238" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
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
  <rect x="242" y="232" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
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
  <text x="512" y="106" fill="#e2e8f0" fontSize="9.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SERVEUR</text>
  <text x="1070" y="106" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">ACME ERP · :8000 · info</text>
  <line x1="498" y1="118" x2="1084" y2="118" stroke="#1f2937" strokeWidth="1"/>
  <text x="512" y="136" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM DE L'APPLICATION</text>
  <rect x="512" y="142" width="272.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="156.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME ERP</text>
  <text x="798.0" y="136" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENVIRONNEMENT</text>
  <rect x="798.0" y="142" width="272.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="808.0" y="156.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">production</text>
  <text x="798.0" y="176" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">production, test… — nommé dans le rapport d’usage de la licence</text>
  <text x="512" y="192" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HÔTE D'ÉCOUTE</text>
  <rect x="512" y="198" width="272.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="212.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">0.0.0.0</text>
  <text x="798.0" y="192" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PORT</text>
  <rect x="798.0" y="198" width="272.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="808.0" y="212.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">8000</text>
  <text x="512" y="238" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NIVEAU DE JOURNAL</text>
  <rect x="512" y="244" width="272.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="258.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">info</text>
  <text x="772.0" y="258.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="512" y="275" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M514.5,280.5 L516.8,282.8 L520.8,278" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="529" y="284" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Recharger à chaud les fichiers TOML de configuration quand ils changent</text>
  <rect x="512" y="295" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="529" y="304" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Mode épais Oracle (OCI python-oracledb — requis pour le chiffrement réseau natif / NNE)</text>
  <text x="512" y="324" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOUS-CHEMIN DERRIÈRE UN PROXY INVERSE</text>
  <rect x="512" y="330" width="272.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="344.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">/liberty</text>
  <text x="512" y="364" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">ex. /liberty ; vide = la racine du site — redémarrage</text>
  <text x="798.0" y="324" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ADRESSE PUBLIQUE</text>
  <rect x="798.0" y="330" width="272.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="808.0" y="344.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">https://erp.example.com</text>
  <text x="798.0" y="364" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">liens de réinitialisation, connexion MCP ; vide = le navigateur</text>
  <rect x="498" y="86" width="586" height="298" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre groupes</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dans l'ordre d'une installation</text>
  <line x1="200" y1="127.0" x2="242" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapp-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne par section</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec son état</text>
  <line x1="200" y1="267.0" x2="242" y2="245" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapp-arrow)"/>
  <rect x="20" y="420" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="435" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Redémarrage requis</text>
  <text x="30" y="448" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">indiqué sur la ligne</text>
  <line x1="200" y1="437.0" x2="242" y2="527" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapp-arrow)"/>
  <rect x="1120" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer, Abandonner</text>
  <text x="1130" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dans l'en-tête de la page</text>
  <line x1="1120" y1="47.0" x2="899" y2="50" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapp-arrow)"/>
  <rect x="1120" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La section choisie</text>
  <text x="1130" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une grille, libellé au-dessus</text>
  <line x1="1120" y1="167.0" x2="1084" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapp-arrow)"/>
  <rect x="1120" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Aide sous le champ</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">en texte simple</text>
  <line x1="1120" y1="347.0" x2="1070.0" y2="366" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sapp-arrow)"/>
</svg>

---

## Serveur \{#app\}

| Champ | Remarques |
|---|---|
| **Nom de l'application** | Le nom de l'application. |
| **Environnement** | La nature de l'installation — `production`, `test`… Il est nommé dans le [rapport d'usage de la licence](./secure/license-key.md#usage-report). |
| **Adresse publique** | L'adresse à laquelle les utilisateurs joignent le serveur : celle du lien d'un mail de réinitialisation, et celle publiée pour la connexion d'un client Claude ([MCP](../mcp.md#connect)). Vide = l'adresse du navigateur. À renseigner derrière un proxy inverse. |
| **Hôte d'écoute**, **Port** | Adresse et port d'écoute. **Redémarrage nécessaire.** |
| **Sous-chemin derrière un proxy inverse** | `/liberty` pour servir l'application sous ce chemin derrière un proxy inverse ; vide = la racine du site. La page, l'API, les téléchargements, la connexion en direct et le retour de l'authentification unique le suivent — voir [Publication sous un sous-chemin](../../installation/traefik.md#sub-path). **Redémarrage nécessaire.** |
| **Niveau de journal** | `debug`, `info`, `warning`, `error`, `critical`. **Redémarrage nécessaire.** |
| **Recharger à chaud les fichiers TOML de configuration quand ils changent** | Appliquer les fichiers de configuration dès qu'ils changent — voir [Rechargement à chaud](../configuration/hot-reload.md). |
| **Mode épais Oracle (…)** | L'Oracle Instant Client pour tous les pools Oracle — nécessaire pour le chiffrement réseau natif et les LOB au travers d'un DB link. Pris en compte après un redémarrage. Voir [Connecteurs](../connectors.md#oracle-thick). |

## Affichage \{#display\}

| Champ | Remarques |
|---|---|
| **Langue par défaut** | Langue des libellés quand une requête n'en indique pas. |
| **Période par défaut (tableaux de bord)** | Le préréglage d'ouverture d'un tableau de bord qui n'en indique pas — voir [Tableaux de bord](../dashboards.md#period). |
| **Taille de page des grilles** | La taille de page initiale des grilles (10 à 10 000, 50 par défaut). La taille propre d'une vue enregistrée l'emporte. |
| **Cache des tableaux de bord (secondes, 0 = aucun)** | Durée de réutilisation des résultats des widgets à la réouverture d'un tableau de bord (60 par défaut). |
| **Plusieurs onglets à la fois (sinon : une page à la fois)** | Activé par défaut. Désactivé : ouvrir une page remplace la page courante — sauf une page qui contient des modifications non enregistrées, qui garde son onglet. |
| **Fermer les onglets au changement d'application** | Désactivé par défaut. Activé : choisir une autre application dans le sélecteur ferme les onglets des autres applications ; les onglets des pages Liberty Next, de la Surveillance et des exécutions restent ouverts, de même qu'un onglet qui contient des modifications non enregistrées. |
| **Onglets au maximum** | 5 par défaut (de 1 à 50). Une fois la limite atteinte, ouvrir une page ferme le plus ancien onglet sans modification en attente. |
| **Les navigations s'ouvrent dans l'onglet courant (…)** | Désactivé par défaut. Activé : la navigation depuis une ligne s'ouvre en panneau dans l'onglet courant, avec un fil d'Ariane et **Retour**, sauf si l'action en décide autrement — voir [Actions](./screens/actions-and-lifecycle.md#drill). |

**Une modification non enregistrée n'est jamais perdue sans avertissement.** Une page qui contient des modifications pas encore enregistrées — un constructeur ou une fenêtre d'édition de Liberty Next, une tâche en cours de modification, une grille en modification groupée, une fiche ouverte — garde son onglet quand l'utilisateur passe sur une autre page, et l'onglet porte un point orange (*Modifications non enregistrées — conservées tant que cet onglet reste ouvert*). La fermeture de cet onglet, **Fermer tous les onglets** et le changement de langue demandent d'abord confirmation (*Modifications non enregistrées* — **Perdre les modifications** ou **Rester**) ; le navigateur demande confirmation avant un rechargement ou la fermeture de la fenêtre. Rien n'est demandé quand rien n'est en attente.

## Adresses externes \{#external-urls\}

Les systèmes vers lesquels l'installation renvoie — le client web de JD Edwards, un intranet. Une ligne par adresse : un **nom** en majuscules (`JDE_WEB`) et son **URL** (`https://jde.example.com:8080/jde`) ; **Ajouter une adresse** en ajoute une. Une action « Ouvrir dans » ou une entrée de menu lien écrit `#URL.JDE_WEB#` au début de son adresse au lieu de l'adresse elle-même : les écrans et menus livrés avec une application ne portent ainsi aucune adresse propre à un client, et chaque installation fixe la sienne. Un changement s'applique aussitôt. Une adresse que l'installation ne fixe pas ne donne aucun lien : l'action n'ouvre rien.

Quand un changement enregistré demande un redémarrage, la page l'indique : *Enregistré. Redémarrez le serveur pour appliquer les nouveaux réglages.*

---

## Journal du serveur \{#server-log\}

| Champ | Remarques |
|---|---|
| **Format du journal console** | `text`, une ligne lisible (par défaut), ou `json`, un objet par ligne pour un collecteur de journaux. |
| **Garder le journal du serveur sur disque** | Activé par défaut : le journal consulté dans [Surveillance → Journal du serveur](../../monitoring/server-log.md). |
| **Fichier journal** | Vide = `.logs/liberty.log` dans le dossier de configuration. |
| **Taille par fichier (Mo)**, **Fichiers gardés** | La rotation : 10 Mo et 5 fichiers précédents par défaut. |

**Redémarrage nécessaire** pour tous les champs de la section.

---

## Connexion \{#sign-in\}

| Champ | Remarques |
|---|---|
| **Stockage des comptes** | *Fichier (auth.toml)* (par défaut) ou *Base de données*, avec son **Pool de base de données**. Changer de stockage ne déplace pas les comptes de l'un à l'autre. |
| **Émetteur des jetons** | Le nom inscrit dans les jetons de session (`liberty-next`). |
| **Durée d'une session (jeton d'accès) (s)** | 3600 par défaut : la durée de validité d'une session avant son renouvellement. |
| **Durée d'une connexion (jeton de rafraîchissement) (s)** | 1 209 600 par défaut — 14 jours : la durée pendant laquelle un utilisateur reste connecté. |
| **Tolérance de réutilisation (s)** | 60 par défaut : un renouvellement déjà utilisé reste accepté pendant ce délai — deux onglets qui se renouvellent ensemble ; `0` = usage unique strict. |
| **Échecs de connexion avant une pause**, **Fenêtre de comptage (s)** | 10 échecs en 300 secondes suspendent les connexions de ce compte — voir [Se connecter](./secure/sign-in.md#throttle). |

**Redémarrage nécessaire** pour tous les champs de la section.

---

## Nomaflow \{#nomaflow\}

| Champ | Remarques |
|---|---|
| **Planificateur et exécution actifs** | Activé par défaut. Désactivé : les tâches sont listées, mais ni planifiées ni exécutées. |
| **Pool de l'historique des exécutions** | La base de l'historique des exécutions (`default`). |
| **Lignes de journal gardées par exécution** | 5 000 par défaut. |
| **Espace de travail** | Vide = `.nomaflow/files` à côté de la configuration : fichiers envoyés, rejets, rapports, exports. |
| **Téléversement maximal (Mo)** | 200 par défaut. |

**Redémarrage nécessaire** pour tous les champs de la section.

---

## Paquets de changements \{#changesets\}

| Champ | Remarques |
|---|---|
| **Capturer les écritures suivies dans des paquets de changements** | Activé par défaut. Désactivé : les écrans marqués pour le suivi ne capturent rien. Voir [Paquets de modifications](../../nomaflow/change-packages.md). |
| **Pool de base de données** | L'emplacement des paquets de changements (`default`). |
| **Garder les paquets exportés / promus (jours, 0 = toujours)** | 0 par défaut ; voir [Surveillance → Rétention](../../monitoring/retention.md). |

**Redémarrage nécessaire** pour tous les champs de la section.

---

## Licence \{#license\}

**Clé de licence** : coller la clé fournie par Nomana-IT. Les connecteurs sous licence se chargent aussitôt, sans redémarrage. Voir [Clé de licence](./secure/license-key.md).

**Adresse du rapport d'usage (vide = rien n'est envoyé)** : la destination du rapport quotidien d'une installation sous licence — son environnement, sa version et son nombre de comptes actifs. Voir [Rapport d'usage](./secure/license-key.md#usage-report).

---

## Assistant IA \{#ai\}

| Champ | Remarques |
|---|---|
| **Activé** | L'assistant répond ; les utilisateurs ont besoin de la permission `ai:chat`. |
| **Clé API Anthropic** | Sans elle, l'assistant indique qu'il n'est pas configuré. |
| **Modèle**, **Effort**, **Jetons maximum**, **Réflexion adaptative** | Le modèle, la profondeur de raisonnement et la longueur des réponses. |
| **Itérations d'outils maximum** | Nombre de tours d'outils qu'une question peut utiliser (15 par défaut). Une procédure qui écrit plusieurs enregistrements par ses écrans demande plus de tours qu'une question. |
| **Délai de la requête (s)** | 120 par défaut. |
| **Invite système** | Vide : les consignes intégrées. |
| **Outils de l'Explorateur de données** | Activé par défaut : l'assistant calcule totaux, classements et tendances sur les modèles de l'[explorateur de données](../explorer/overview.md), et enregistre analyses et tableaux de bord. |
| **Outils connecteurs** | L'assistant peut lister les connecteurs et lancer leurs requêtes **de lecture**. |
| **Lignes par requête, au plus (plafond propre à l'assistant, pas celui du pool)** | 200 par défaut (de 1 à 10 000). Au-delà, le résultat est signalé comme tronqué et l'assistant reçoit la consigne de ne ni compter ni additionner ses lignes. |
| **Outil API** | L'assistant peut appeler des endpoints d'API — désactivé par défaut, un endpoint pouvant modifier des données. |
| **Outils de construction** | L'assistant peut proposer requêtes, entrées du dictionnaire, écrans et entrées de menu ; l'utilisateur applique la proposition. |
| **Outils d'écriture** | Désactivé par défaut. L'assistant ajoute, modifie ou supprime un enregistrement — ou plusieurs sur une seule carte —, lance une action par son écran, ou exécute une tâche — pour les utilisateurs qui ont `ai:write` et les permissions de l'écran ou de la tâche ; appliqué depuis une carte du panneau. En MCP, ils demandent en plus **Autoriser les modifications en MCP**. Voir [Écrire par un écran](../ai-assistant.md#write). |
| **Masquer les données sensibles à l'assistant** | Désactivé par défaut. Les colonnes dont l'élément du dictionnaire ou la colonne d'écran est marqué **Sensitive** ne sont pas transmises à l'assistant, dans le panneau comme en MCP. Le réglage ne couvre ni ce qu'un utilisateur saisit ou joint, ni une colonne de texte libre non marquée, ni ce que renvoie un endpoint d'API ou un outil propre à une application. Voir [Données sensibles](../ai-data-sent.md#sensitive). |
| **Connecteurs autorisés** | Les connecteurs utilisables par l'assistant ; vide signifie tous. |
| **Domaines autorisés**, **Lectures maximum par tour** | Les pages web que l'assistant peut lire ; sans domaine, aucun accès au web. |
| **Outils d'exploitation** | L'assistant peut lire l'état des tâches, la fin du journal du serveur et les contrôles d'intégrité — désactivé par défaut, réservé aux installations dont les utilisateurs du chat sont des administrateurs. |
| **Les outils des applications** | Activé par défaut : les outils livrés par chaque application sous [Liberty Next → Logique → IA](../ai-assistant.md#settings-ai). Désactivé : aucun n'est proposé. |
| **Fichier joint à une question : mégaoctets au plus** | 10 par défaut (de 0 à 30) ; `0` retire le trombone du panneau — voir [Joindre un fichier](../ai-assistant.md#attach). |
| **Enregistrement d'usage conservé (jours ; 0 = sans limite)** | 90 par défaut — voir [Usage de l'IA](../../monitoring/ai-usage.md#retention). |
| **Point d'accès MCP (/mcp)** | Désactivé par défaut : les mêmes outils pour un client externe — Claude Desktop, claude.ai, Claude Code —, chaque utilisateur avec un jeton d'accès personnel. Appliqué sans redémarrage. Voir [Connecter Claude (MCP)](../mcp.md). |
| **Autoriser les modifications en MCP** | Désactivé par défaut : un client externe se limite à la lecture. Activé : un outil qui enregistre — un enregistrement par son écran, une action, une tâche, une analyse ou un tableau de bord sauvegardé — lui est proposé ; dans le panneau l'utilisateur applique une carte, ici le seul garde-fou est l'approbation du client. Voir [Modifications en MCP](../mcp.md#changes). |
| **Jeton d'accès personnel : durée maximale (jours)** | 366 par défaut : la plus longue validité d'un jeton, et la durée d'une connexion depuis un client Claude avant une nouvelle autorisation. |
| **Modèles au choix des utilisateurs** | Les modèles proposés par le sélecteur **Modèle** du panneau en plus du modèle ci-dessus ; vide : le modèle ci-dessus seul, sans sélecteur. |
| **Questions de départ** | Les questions affichées sur une conversation vide : partout (`*`), par application, ou par couple *application/écran* — l'ensemble le plus précis l'emporte. Elles priment sur les questions livrées par une application ([Liberty Next → Logique → IA](../ai-assistant.md#settings-ai)). |

Voir [Assistant IA](../ai-assistant.md), et [Données transmises à Anthropic](../ai-data-sent.md) pour ce que ces réglages laissent sortir de l'installation.

---

## Notifications (e-mail) \{#notifications\}

**Notifications activées**, puis le **Serveur** (Hôte SMTP, Port, Chiffrement — STARTTLS, SSL / TLS implicite ou aucun —, Délai), le **Compte** (Utilisateur, Mot de passe) et l'**Envoi** (Adresse d'expédition, Conserver les notifications lues — en jours, `0` = toujours). **Pool de la boîte de réception** indique où sont conservées les notifications de la cloche (`default`). Voir [Notifications](../../nomaflow/notifications.md#smtp).

---

## OpenID Connect (SSO) \{#section-4--openid-connect-sso\}

| Champ | Remarques |
|---|---|
| **Activé** | Affiche **Se connecter avec OIDC** sur la page de connexion, vers le fournisseur ; désactivé, la page ne propose que le formulaire local. |
| **URL de découverte** | Le `.well-known/openid-configuration` du fournisseur. |
| **ID client**, **Secret client**, **Scopes** | Tels qu'enregistrés chez le fournisseur (`openid email profile` par défaut). |
| **Revendication identifiant**, **Revendication e-mail**, **Revendication nom** | Les revendications du jeton d'identité qui renseignent l'utilisateur (`preferred_username`, `email`, `name`). |
| **Attributs depuis les claims** | Une ligne par attribut : l'attribut utilisateur ← le claim du jeton d'identité (`company` ← `org_id`). Les attributs alimentent le [périmètre de données](./secure/roles-and-permissions.md#data-scope) des rôles et sont actualisés à chaque connexion ; un claim absent du jeton retire l'attribut. |
| **Secret de session** | Signe le cookie de connexion ; vide = le secret JWT. Chiffré. **Redémarrage nécessaire.** |
| **URL de redirection (proxy)**, **Redirection frontend** | Seulement derrière un proxy qui réécrit l'hôte, ou pour un front qui gère lui-même les jetons. |

Déclarer `https://<hôte>/auth/oidc/callback` comme URI de redirection chez le fournisseur. Voir [Se connecter](./secure/sign-in.md#oidc).

---

## Charte des PDF \{#branding\}

Les réglages de couverture et de page des rapports PDF : auteur, couleurs principales, textes de couverture, pied de page. Les champs vides gardent les valeurs par défaut du framework.

---

## Déploiement (lecture seule) \{#deployment\}

La dernière section, présente seulement quand l'installation fixe des valeurs hors de cette page, les liste — la valeur en vigueur et la raison : la clé maître et le secret JWT, indiqués seulement *définis* ou *non définis*, qui viennent de l'environnement ; l'algorithme de signature des jetons ; l'emplacement de chaque fichier de configuration, qui suit l'organisation de l'installation.

---

## Ailleurs que sur cette page \{#elsewhere\}

| Réglage | Où |
|---|---|
| Pools et leurs mots de passe | Liberty Next → Administrer → Pools. |
| Utilisateurs et rôles | Liberty Next → Administrer → Accès. |
| La clé maître et le secret JWT | L'environnement — voir [Variables d'environnement](../configuration/environment-variables.md). |
