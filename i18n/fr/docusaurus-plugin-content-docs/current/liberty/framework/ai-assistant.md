---
title: Assistant IA
description: "L'assistant IA de Liberty Next : le panneau ouvert par le bouton Assistant, le contexte de page qu'il reçoit, les questions de départ et les relances, le choix du modèle, ce qu'il sait faire (lire les requêtes des connecteurs, décrire l'installation, suivre des procédures, lire les tâches et le journal du serveur, appeler des endpoints d'API, proposer de la configuration), comment il est limité (ai:chat, connecteurs autorisés, requêtes en lecture seule, périmètre de données), et ses réglages."
keywords: [Liberty Next, assistant IA, Anthropic, Claude, ai:chat, contexte de page, questions de départ, procédures, outils d'exploitation, choix du modèle, outils, list_connectors, sql_query, api_call, scaffold, périmètre de données]
---

# Assistant IA

**Assistant**, à droite de la barre du haut (et en bas du menu latéral), ouvre un panneau où les utilisateurs interrogent leurs données en langage courant. L'assistant répond en lançant les requêtes des connecteurs, avec les droits de l'utilisateur.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 520" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="aid-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="aid-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="aid-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="aid-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="492" rx="14" fill="url(#aid-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#64748b" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Lignes de vente</text>
  <rect x="240" y="60" width="164" height="420" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="68" width="152" height="20" rx="4" fill="none"/>
  <text x="252" y="82" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">ACME</text>
  <rect x="246" y="94" width="152" height="20" rx="4" fill="none"/>
  <text x="252" y="108" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <rect x="246" y="120" width="152" height="20" rx="4" fill="none"/>
  <text x="252" y="134" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <rect x="246" y="146" width="152" height="20" rx="4" fill="rgba(74,158,255,0.18)"/>
  <text x="252" y="160" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">ACME</text>
  <rect x="246" y="172" width="152" height="20" rx="4" fill="none"/>
  <text x="252" y="186" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Delta Ltd</text>
  <rect x="246" y="198" width="152" height="20" rx="4" fill="none"/>
  <text x="252" y="212" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <rect x="246" y="224" width="152" height="20" rx="4" fill="none"/>
  <text x="252" y="238" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">ACME</text>
  <rect x="246" y="250" width="152" height="20" rx="4" fill="none"/>
  <text x="252" y="264" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <rect x="246" y="276" width="152" height="20" rx="4" fill="none"/>
  <text x="252" y="290" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Delta Ltd</text>
  <rect x="420" y="24" width="360" height="470" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="434" y="46" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">✦ Assistant IA</text>
  <rect x="590" y="32" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="600" y="46.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Sonnet 5.5 ▾</text>
  <rect x="718" y="32" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="729.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="746" y="32" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="757.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <line x1="420" y1="62" x2="780" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="434" y="80" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Page :</text>
  <rect x="470" y="69" width="246" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="593.0" y="80.2" fill="#4a9eff" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Lignes de vente · filtres : 2 · la ligne cliquée  ×</text>
  <rect x="434" y="96" width="300" height="58" rx="8" fill="#1e293b"/>
  <text x="444" y="114" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Bonjour ! Je réponds à partir de la</text>
  <text x="444" y="127" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">configuration de cette installation et de</text>
  <text x="444" y="140" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">ses données. Choisissez une suggestion.</text>
  <rect x="500" y="166" width="266" height="24" rx="8" fill="rgba(74,158,255,0.18)"/>
  <text x="510" y="182" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Somme des quantités de ces lignes par unité</text>
  <rect x="434" y="200" width="320" height="96" rx="8" fill="#1e293b"/>
  <text x="444" y="218" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">▸ 2 appels d'outil</text>
  <rect x="444" y="226" width="300" height="18" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="238.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UNITÉ</text>
  <text x="594" y="238.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUANTITÉ</text>
  <rect x="444" y="248" width="300" height="18" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="260.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">North</text>
  <text x="594" y="260.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">12 400</text>
  <rect x="444" y="270" width="300" height="18" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="454" y="282.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">South</text>
  <text x="594" y="282.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">8 150</text>
  <rect x="434" y="308" width="170" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="519.0" y="320.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Quelle société a le plus vendu ?</text>
  <rect x="434" y="332" width="132" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="500.0" y="344.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Comparer au mois dernier</text>
  <line x1="420" y1="368" x2="780" y2="368" stroke="#1f2937" strokeWidth="1"/>
  <rect x="434" y="378" width="46" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="457.0" y="390.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Ventes</text>
  <rect x="500" y="378" width="56" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="528.0" y="390.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Périodes</text>
  <rect x="434" y="402" width="222" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="545.0" y="414.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Quelle BU a le plus vendu le mois dernier ?</text>
  <rect x="434" y="432" width="332" height="48" rx="8" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="444" y="452" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Tapez un message…</text>
  <rect x="1000" y="12" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="27" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choix du modèle</text>
  <text x="1010" y="40" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">quand plusieurs sont permis</text>
  <line x1="1000" y1="29.0" x2="650" y2="32" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aid-arrow)"/>
  <rect x="1000" y="66" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Contexte de page</text>
  <text x="1010" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">× arrête l'envoi</text>
  <line x1="1000" y1="83.0" x2="750" y2="77" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aid-arrow)"/>
  <rect x="1000" y="196" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Appels d'outil</text>
  <text x="1010" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">repliés sur une ligne</text>
  <line x1="1000" y1="213.0" x2="520" y2="215" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aid-arrow)"/>
  <rect x="1000" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Relances</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic envoie la question</text>
  <line x1="1000" y1="317.0" x2="650" y2="317" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aid-arrow)"/>
  <rect x="1000" y="384" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="399" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Questions de départ</text>
  <text x="1010" y="412" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par rubrique, app ou écran</text>
  <line x1="1000" y1="401.0" x2="550" y2="387" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aid-arrow)"/>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La ligne cliquée</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">part avec la question</text>
  <line x1="210" y1="167.0" x2="246" y2="158" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aid-arrow)"/>
</svg>

---

## Utilisation \{#use\}

Saisir une question et appuyer sur Entrée (Maj+Entrée pour un saut de ligne), ou cliquer sur l'une des **questions de départ** proposées sur une conversation vide. La réponse s'affiche au fil de sa rédaction ; le bouton d'arrêt l'interrompt en conservant ce qui a été reçu.

- Les **appels d'outil** sont repliés sur une ligne discrète — *3 appel(s) d'outil* — qui se déplie pour les montrer ; un appel en échec garde son message visible.
- Un tableau dans une réponse défile horizontalement, chaque chiffre sur une seule ligne.
- Chaque réponse se termine par deux ou trois **questions de relance** sous forme de pastilles ; un clic en envoie une.
- La conversation est conservée à la fermeture du panneau et après un rechargement : les 40 derniers messages, sur ce poste. **+** (*nouvelle conversation*) l'efface.
- Quand plusieurs modèles sont autorisés, un sélecteur **Modèle** dans l'en-tête du panneau choisit celui qui répond. Le choix est conservé sur ce poste.

L'assistant connaît la date du jour : *le mois dernier* ou *ce trimestre* se passent d'explication.

Exemples : *Combien de commandes ouvertes par société ce mois-ci ?* — *Quels utilisateurs ne se sont pas connectés depuis juin ?* — *Où clôturer une période ?*

---

## Ce que la page lui transmet \{#context\}

Tant qu'un écran de données est l'onglet actif, chaque message emporte ce que l'utilisateur a sous les yeux : l'application, l'écran et sa requête de lecture, les filtres actifs, le nombre de lignes chargées et leurs colonnes, et la dernière ligne cliquée (ou dont le menu de ligne a été ouvert). *Cet écran*, *ces lignes* ou *la ligne sélectionnée* se comprennent sans autre précision, et l'assistant relance la requête de l'écran lui-même quand il lui faut davantage de données.

Sur la page de l'**explorateur de données**, le contexte est le modèle et l'analyse en cours (entité, lignes, mesures, période) ou l'analyse enregistrée ouverte : *Enregistre ceci comme analyse* ou *Fais un tableau de bord de ces analyses* se comprennent sans autre précision.

Une pastille sous l'en-tête du panneau montre ce qui est envoyé — *Page : Lignes de vente · filtres : 2 · la ligne cliquée*. Son **×** suspend l'envoi de la page tant que l'utilisateur y reste. Le contexte est limité à 4 000 caractères.

---

## Questions de départ \{#starters\}

Sur une conversation vide, le panneau propose des questions adaptées à l'endroit où se trouve l'utilisateur : celles de l'écran en cours (ou de la page de l'explorateur de données), à défaut celles de l'application, à défaut celles prévues partout — l'emplacement le plus précis qui a des questions l'emporte. Une application peut les regrouper par rubriques, affichées en pastilles au-dessus des questions ; après une réponse, les relances prennent leur place. Quand une application livre ses questions en plusieurs langues, le panneau les affiche dans la langue de l'utilisateur.

Les questions ont deux origines :

- **Liberty Next → Construire → IA** : les questions livrées par une application, par application et par écran — voir [plus bas](#settings-ai) ;
- **Liberty Next → Administrer → App → Assistant IA → Questions de départ** : celles de l'exploitant, pour partout, pour une application ou pour un couple *application/écran*. Elles l'emportent sur celles de l'application pour le même emplacement.

---

## Ce qu'il sait faire \{#tools\}

| Outil | Rôle | Réglage |
|---|---|---|
| `list_connectors` | Liste les connecteurs, leurs requêtes et leurs endpoints (descriptions, sans SQL ni identifiants). | **Outils connecteurs** (activé par défaut). |
| `sql_query` | Lance une requête **de lecture** d'un connecteur SQL. Les requêtes d'écriture sont toujours refusées. | **Outils connecteurs**. |
| `explorer_models`, `explorer_fields`, `explorer_query` | Listent les modèles de l'[explorateur de données](./explorer/overview.md) et leurs champs, puis calculent un total, un classement, une tendance ou une comparaison sur un modèle — lignes, mesures, filtres, période, tri, N premiers (100 lignes par défaut, 10 000 au plus) — dans le périmètre de données de l'utilisateur. | Activés par défaut. |
| `explorer_saved`, `explorer_save_analysis`, `explorer_save_dashboard` | Listent les analyses et tableaux de bord enregistrés de l'utilisateur, et enregistrent ce qu'il demande : une analyse est exécutée une fois avant d'être stockée, ce qui écarte un champ erroné ; un tableau de bord réunit des analyses enregistrées sous forme de tuiles. Les deux restent **privés**, sauf demande de partage. | Activés par défaut. |
| `describe_instance` | Résume le contenu de l'installation : applications, menus, écrans avec leur requête de lecture, tableaux de bord, modèles de l'explorateur de données, tâches, procédures. *Où trouver…* reçoit une réponse tirée de la configuration réelle. | Toujours. |
| Procédures | Liste les procédures des applications et charge celle qui convient — voir [Procédures](#playbooks). | Toujours. |
| `jobs_status`, `server_log`, `integrity_checks` | Les tâches Nomaflow avec leur planification, leur dernière exécution et leur prochain démarrage, et les exécutions récentes d'une tâche avec l'étape en échec ; les dernières lignes du journal du serveur, par niveau et par texte ; les contrôles croisés de la configuration. | **Outils d'exploitation** (désactivé par défaut). |
| `api_call` | Appelle un endpoint d'un connecteur d'API. | **Outil API** (désactivé par défaut — un endpoint peut modifier des données). |
| Outils de génération | Proposent une requête, une entrée du dictionnaire, un écran ou une entrée de menu ; l'utilisateur relit la proposition puis l'applique. | **Outils de construction** (désactivé par défaut). |
| Lecture web | Lit les pages des domaines autorisés. | **Domaines autorisés** (aucun par défaut). |

L'assistant n'utilise que des requêtes nommées existantes : il n'écrit pas de SQL sur la base. Un résultat d'outil de plus de 60 000 caractères est tronqué, et l'assistant est invité à restreindre son appel.

Les **Outils d'exploitation** permettent à l'assistant de lire l'état du serveur plutôt que de supposer, quand une tâche a échoué, est en retard ou manque. Ils sont destinés aux installations dont les utilisateurs du chat sont des administrateurs : le journal du serveur peut contenir tout ce que le serveur a écrit.

---

## Procédures \{#playbooks\}

Une **procédure** est un mode opératoire pas à pas qu'une application livre pour l'assistant : *Clôturer une période*, *Ajouter un utilisateur à un rôle*. Quand un utilisateur demande comment faire quelque chose dans une application, l'assistant cherche une procédure adaptée, la charge et en suit les étapes dans l'ordre, en indiquant laquelle il applique. Faute de procédure adaptée, il le signale et répond à partir de ce qu'il peut lire.

---

## Liberty Next → Construire → IA \{#settings-ai\}

**Liberty Next → Construire → IA** modifie ce que chaque application livre pour l'assistant. La ligne **Application** liste les applications qui en ont déjà, plus `*` pour partout ; **Ajouter une portée** en choisit une autre. Pour chacune :

| Partie | Contenu |
|---|---|
| **Questions de départ partout dans** *application* | Les questions proposées dans toute l'application. |
| **Questions de départ par écran** | **+ un écran…** ajoute un écran et ses propres questions. |
| **Procédures** | **Ajouter une procédure** : un **Id** (lettres, chiffres, `_` et `-`, unique dans l'application), un **titre** — ce que la procédure permet de faire, l'assistant choisit une procédure d'après lui —, **quand elle s'applique** (une ligne, facultatif) et **la procédure** en Markdown. |

L'enregistrement écrit et recharge aussitôt. Ce contenu accompagne l'application : il s'installe et se met à jour avec elle, et il est historisé comme le reste de la configuration. Les questions définies dans **Liberty Next → Administrer → App → Assistant IA** l'emportent sur celles de l'application, emplacement par emplacement.

---

## Qui peut l'utiliser, et sur quoi \{#access\}

- L'utilisateur a besoin de la permission `ai:chat` (règle *AI assistant* d'un rôle, dans **Au-delà des menus**).
- **Connecteurs autorisés**, dans Liberty Next → Administrer → App, limite les connecteurs accessibles à l'assistant, ainsi que les applications couvertes par `describe_instance` et les procédures ; vide signifie tous.
- Chaque requête qu'il lance passe par les mêmes contrôles serveur qu'un écran : le [périmètre de données](./build/secure/roles-and-permissions.md#data-scope) de l'utilisateur filtre les lignes.
- Le sélecteur **Modèle** du panneau ne propose que les modèles autorisés dans les réglages ; le serveur refuse tout autre modèle.

---

## Réglages \{#settings\}

Dans **Liberty Next → Administrer → App → Assistant IA** : **Activé**, **Clé API Anthropic** (chiffrée), **Modèle**, **Effort**, **Jetons maximum**, **Itérations d'outils maximum** (8), **Délai de la requête (s)**, **Réflexion adaptative**, **Invite système**, les outils ci-dessus, **Connecteurs autorisés**, et pour le volet de chat les **Modèles au choix des utilisateurs** et les **Questions de départ**. Voir [Paramètres de l'application](./build/settings-app.md#ai). Sans clé, le panneau indique que l'assistant n'est pas configuré.

---

## Conseils \{#tips\}

- Donner aux requêtes un libellé et une description clairs (Liberty Next → Construire → Connecteurs) : l'assistant choisit ses requêtes d'après eux.
- Écrire des requêtes de lecture dédiées aux questions fréquentes (totaux par société, par mois), plutôt que d'attendre de l'assistant qu'il agrège des milliers de lignes.
- Écrire une procédure pour chaque démarche demandée plus d'une fois : la réponse suit alors la procédure de l'application, sans approximation.
- Laisser l'**Outil API** et les **Outils d'exploitation** désactivés, sauf endpoints en lecture seule et utilisateurs du chat administrateurs.
