---
title: Assistant IA
description: "L'assistant IA de Liberty Next : le panneau ouvert par le bouton Assistant, le contexte de page qu'il reçoit, les fichiers joints à une question, les conversations conservées et les notes, les questions de départ et les relances, le choix du modèle, ce qu'il sait faire (lire les requêtes des connecteurs, chercher dans le catalogue, décrire l'installation, suivre des procédures, appeler les outils des applications, lire les tâches et le journal du serveur, appeler des endpoints d'API, proposer de la configuration), comment il est limité (ai:chat, les permissions de chaque outil, connecteurs autorisés, requêtes en lecture seule, périmètre de données), et ses réglages."
keywords: [Liberty Next, assistant IA, Anthropic, Claude, ai:chat, contexte de page, questions de départ, procédures, outils d'exploitation, choix du modèle, outils, list_connectors, sql_query, search_catalog, screen_write, screen_write_many, screen_action, job_run, ai:write, données sensibles, api_call, scaffold, périmètre de données, fichier joint, conversations, notes, outils des applications, MCP]
---

# Assistant IA

**Assistant**, à droite de la barre du haut (réduit à son icône sur un écran étroit), ouvre à droite de la page un panneau où les utilisateurs interrogent leurs données en langage courant. L'assistant répond en lançant les requêtes des connecteurs, avec les droits de l'utilisateur.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 520" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="aia-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="aia-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="aia-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="aia-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="480" rx="14" fill="url(#aia-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#64748b" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Commandes</text>
  <text x="240" y="64" fill="#475569" fontSize="8.5" fontFamily="ui-monospace, monospace">sales.orders_get</text>
  <text x="250" y="92" fill="#475569" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">COMMANDE</text>
  <text x="360" y="92" fill="#475569" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">CLIENT</text>
  <text x="470" y="92" fill="#475569" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">STATUT</text>
  <rect x="240" y="104" width="330" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="120" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">00001</text>
  <text x="360" y="120" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="470" y="120" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">CLOSED</text>
  <rect x="240" y="132" width="330" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="148" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">00002</text>
  <text x="360" y="148" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="470" y="148" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">OPEN</text>
  <rect x="240" y="160" width="330" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="176" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">00003</text>
  <text x="360" y="176" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <text x="470" y="176" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">CLOSED</text>
  <rect x="240" y="188" width="330" height="24" rx="4" fill="rgba(74,158,255,0.16)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="250" y="204" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">00004</text>
  <text x="360" y="204" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="470" y="204" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">OPEN</text>
  <rect x="240" y="216" width="330" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="232" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">00005</text>
  <text x="360" y="232" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Delta Ltd</text>
  <text x="470" y="232" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">OPEN</text>
  <rect x="240" y="244" width="330" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="260" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">00006</text>
  <text x="360" y="260" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="470" y="260" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">CLOSED</text>
  <rect x="240" y="272" width="330" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="288" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">00007</text>
  <text x="360" y="288" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="470" y="288" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">OPEN</text>
  <rect x="240" y="300" width="330" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="316" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">00008</text>
  <text x="360" y="316" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <text x="470" y="316" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">CLOSED</text>
  <rect x="600" y="26" width="372" height="468" rx="10" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="616" y="46" fill="#c084fc" fontSize="12" fontFamily="system-ui, sans-serif">✦</text>
  <text x="634" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Assistant</text>
  <rect x="886" y="32" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="897.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⟲</text>
  <rect x="912" y="32" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="923.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="938" y="32" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="949.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <line x1="600" y1="62" x2="972" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="614" y="80" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Page :</text>
  <text x="648.56" y="80" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">orders · filtres : 2 · la ligne cliquée</text>
  <text x="956" y="80" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">✕</text>
  <line x1="600" y1="92" x2="972" y2="92" stroke="#1f2937" strokeWidth="1"/>
  <rect x="727.36" y="104" width="230.64000000000001" height="26" rx="8" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.4)" strokeWidth="1"/>
  <text x="739.36" y="121" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Total des commandes ouvertes de ce client</text>
  <rect x="614" y="140" width="312" height="128" rx="8" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="626" y="158" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">› 2 appel(s) d'outil</text>
  <text x="626" y="178" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">ACME a 3 commandes ouvertes :</text>
  <rect x="626" y="186" width="288" height="20" rx="4" fill="rgba(255,255,255,0.04)"/>
  <text x="634" y="200" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">COMMANDE</text>
  <text x="800" y="200" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">MONTANT</text>
  <text x="634" y="220" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">00004</text>
  <text x="800" y="220" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">12 400,00</text>
  <text x="634" y="238" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">00007</text>
  <text x="800" y="238" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">8 150,00</text>
  <text x="626" y="255" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Total : 20 550,00</text>
  <rect x="614" y="280" width="169.56" height="22" rx="11" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="625" y="294.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Laquelle est la plus ancienne ?</text>
  <rect x="614" y="308" width="136.24" height="22" rx="11" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="625" y="322.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Comparer au mois dernier</text>
  <line x1="600" y1="446" x2="972" y2="446" stroke="#1f2937" strokeWidth="1"/>
  <rect x="614" y="458" width="28" height="30" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="628.0" y="476.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">📎</text>
  <rect x="648" y="458" width="272" height="30" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="658" y="477" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">Tapez un message… (Entrée pour envoyer…)</text>
  <rect x="926" y="458" width="32" height="30" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="942.0" y="476.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">➤</text>
  <rect x="20" y="194" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="209" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La ligne cliquée</text>
  <text x="30" y="222" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">accompagne la question</text>
  <line x1="200" y1="211.0" x2="240" y2="204" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
  <rect x="20" y="456" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="471" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Joindre un fichier</text>
  <text x="30" y="484" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">image, PDF, tableur, texte</text>
  <line x1="200" y1="473.0" x2="614" y2="473" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
  <rect x="1000" y="24" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="39" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Conversations et notes</text>
  <text x="1010" y="52" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">puis nouvelle conversation, fermer</text>
  <line x1="1000" y1="41.0" x2="960" y2="40" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
  <rect x="1000" y="72" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="87" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Contexte de la page</text>
  <text x="1010" y="100" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">× arrête de l'envoyer</text>
  <line x1="1000" y1="89.0" x2="956" y2="78" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
  <rect x="1000" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Appels d'outils</text>
  <text x="1010" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">repliés sur une ligne</text>
  <line x1="1000" y1="157.0" x2="720" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
  <rect x="1000" y="280" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Questions de relance</text>
  <text x="1010" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic envoie la question</text>
  <line x1="1000" y1="297.0" x2="783.56" y2="285" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
</svg>

---

## Utilisation \{#use\}

Saisir une question et appuyer sur Entrée (Maj+Entrée pour un saut de ligne), ou cliquer sur l'une des **questions de départ** proposées sur une conversation vide. La réponse s'affiche au fil de sa rédaction ; le bouton d'arrêt l'interrompt en conservant ce qui a été reçu.

- Les **appels d'outil** sont repliés sur une ligne discrète — *3 appel(s) d'outil* — qui se déplie pour les montrer ; un appel en échec garde son message visible.
- Un tableau dans une réponse défile horizontalement, chaque chiffre sur une seule ligne.
- Chaque réponse se termine par deux ou trois **questions de relance** sous forme de pastilles ; un clic en envoie une.
- La conversation est conservée à la fermeture du panneau et après un rechargement, et elle est enregistrée pour l'utilisateur — voir [Conversations et notes](#history). **+** (*nouvelle conversation*) en ouvre une autre.
- Le **trombone** de la zone de saisie donne un fichier à lire à l'assistant — voir [Joindre un fichier](#attach).
- Quand plusieurs modèles sont autorisés, un sélecteur **Modèle** dans l'en-tête du panneau choisit celui qui répond. Le choix est conservé sur ce poste.

L'assistant connaît la date du jour : *le mois dernier* ou *ce trimestre* se passent d'explication.

Exemples : *Combien de commandes ouvertes par société ce mois-ci ?* — *Quels utilisateurs ne se sont pas connectés depuis juin ?* — *Où clôturer une période ?*

---

## Joindre un fichier \{#attach\}

Le trombone (*joindre un fichier que l'assistant lira*) ajoute un fichier à la question : la capture d'écran d'une erreur, une procédure en PDF, une liste à comparer avec le contenu de l'installation, un journal.

| Fichier | Transmis à l'assistant |
|---|---|
| Image — `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp` | Tel quel ; 5 Mo au plus. |
| PDF | Tel quel. |
| Classeur — `.xlsx`, `.xlsm` | En texte : la première feuille. |
| Fichier délimité — `.csv`, `.tsv` | En texte, le séparateur étant détecté. |
| Texte — `.txt`, `.log`, `.md`, `.json`, `.xml`, `.sql`, `.toml`, `.yaml`, `.ini`, `.html`… | En texte. |

Une feuille ou un texte de plus de 60 000 caractères est coupé : la pastille du fichier se termine alors par `*`, et son infobulle indique ce qui a été joint. L'assistant se contente de lire le fichier : rien n'est chargé dans une table, rien n'est stocké sur le serveur. Le fichier reste attaché à la conversation tant qu'elle est ouverte ; une conversation enregistrée n'en garde que le nom, et l'assistant est prévenu de l'absence du fichier à la reprise de la conversation.

La taille maximale se règle avec **Fichier joint à une question : mégaoctets au plus** dans Liberty Next → Administrer → App → Assistant IA — 10 par défaut, `0` retire le trombone. Un fichier compte en jetons d'entrée à chaque question de sa conversation.

---

## Conversations et notes \{#history\}

Le bouton d'historique de l'en-tête du panneau (*conversations et notes*) ouvre un volet à deux listes.

**Conversations** — chaque conversation est enregistrée sur le serveur pour l'utilisateur et le suit d'un poste à l'autre. Un clic sur une ligne (*Reprendre cette conversation*) la rouvre ; la corbeille la supprime. Est conservé ce que l'utilisateur a vu — les questions et les réponses ; une conversation reprise relit ses données. Les 30 dernières conversations sont gardées.

**Notes — ce que l'assistant retient pour vous** — il suffit de demander à l'assistant de retenir quelque chose pour les conversations suivantes : une convention, une préférence, la définition d'un chiffre. Il propose la note sur une carte : **Appliquer** l'enregistre, **Ignorer** l'abandonne, et rien n'est enregistré sans ce clic. Une note fait 300 caractères au plus ; elle vaut pour l'application de la page ou pour *toutes les applications*, puis accompagne les questions de l'utilisateur. Les notes sont privées ; la corbeille en supprime une.

---

## Ce que la page lui transmet \{#context\}

Tant qu'un écran de données est l'onglet actif, chaque message emporte ce que l'utilisateur a sous les yeux : l'application, l'écran et sa requête de lecture, les filtres actifs, le nombre de lignes chargées et leurs colonnes, et la dernière ligne cliquée (ou dont le menu de ligne a été ouvert). *Cet écran*, *ces lignes* ou *la ligne sélectionnée* se comprennent sans autre précision, et l'assistant relance la requête de l'écran lui-même quand il lui faut davantage de données.

Sur la page de l'**explorateur de données**, le contexte est le modèle et l'analyse en cours (entité, lignes, mesures, période) ou l'analyse enregistrée ouverte : *Enregistre ceci comme analyse* ou *Fais un tableau de bord de ces analyses* se comprennent sans autre précision.

Sur une page livrée par une application (voir [Pages livrées par une application](./apps/plugins.md#pages)), c'est la page elle-même qui décrit ce que l'utilisateur a sous les yeux : un titre et quelques faits — l'objet ouvert, l'onglet, un filtre, jamais de lignes. Une question sur *ceci* se passe alors de nom, là aussi.

Une ligne sous l'en-tête du panneau montre ce qui est envoyé — *Page : orders · filtres : 2 · la ligne cliquée*, avec l'identifiant de l'écran. Son **×** suspend l'envoi de la page tant que l'utilisateur y reste. Le contexte est limité à 4 000 caractères.

---

## Questions de départ \{#starters\}

Sur une conversation vide, le panneau propose des questions adaptées à l'endroit où se trouve l'utilisateur : celles de l'écran en cours (ou de la page de l'explorateur de données, ou de la page livrée par une application), à défaut celles de l'application, à défaut celles prévues partout — l'emplacement le plus précis qui a des questions l'emporte. Une application peut les regrouper par rubriques, affichées en pastilles au-dessus des questions ; après une réponse, les relances prennent leur place. Quand une application livre ses questions en plusieurs langues, le panneau les affiche dans la langue de l'utilisateur.

Les questions ont deux origines :

- **Liberty Next → Logique → IA** : les questions livrées par une application, pour toute l'application, par rubrique et par écran, dans chaque langue — voir [plus bas](#settings-ai) ;
- **Liberty Next → Administrer → App → Assistant IA → Questions de départ** : celles de l'exploitant, pour partout, pour une application ou pour un couple *application/écran*. Elles l'emportent sur celles de l'application pour le même emplacement.

---

## Ce qu'il sait faire \{#tools\}

| Outil | Rôle | Réglage |
|---|---|---|
| `list_connectors` | Liste les connecteurs avec les requêtes **de lecture** et les endpoints que l'utilisateur peut lancer (descriptions, sans SQL ni identifiants). Sur une grande installation, il répond par une vue d'ensemble, puis se limite à un connecteur ou à des mots-clés. | **Outils connecteurs** (activé par défaut). |
| `sql_query` | Lance une requête **de lecture** d'un connecteur SQL comme le fait son écran : libellés et formats des colonnes, filtres de l'écran, environnement de la page. Il filtre par colonne — une valeur ou un intervalle — et un filtre qui ne correspond à aucune colonne est refusé. Les requêtes d'écriture sont toujours refusées. | **Outils connecteurs** ; **Lignes par requête, au plus** (200). |
| `explorer_models`, `explorer_fields`, `explorer_query` | Listent les modèles de l'[explorateur de données](./explorer/overview.md) et leurs champs, puis calculent un total, un classement, une tendance ou une comparaison sur un modèle — lignes, mesures, filtres, période, tri, N premiers (100 lignes par défaut, 10 000 au plus) — dans le périmètre de données de l'utilisateur. | Activés par défaut. |
| `explorer_saved`, `explorer_save_analysis`, `explorer_save_dashboard` | Listent les analyses et tableaux de bord enregistrés de l'utilisateur, et enregistrent ce qu'il demande : une analyse est exécutée une fois avant d'être stockée, ce qui écarte un champ erroné ; un tableau de bord réunit des analyses enregistrées sous forme de tuiles. Les deux restent **privés**, sauf demande de partage. | Activés par défaut. |
| `describe_instance` | Résume le contenu de l'installation, ou d'une seule application : menus, écrans avec leur requête de lecture, tableaux de bord, modèles de l'explorateur de données, tâches, procédures. *Où trouver…* reçoit une réponse tirée de la configuration réelle. | Toujours. |
| `search_catalog` | Retrouve par mot-clé un écran, une entrée de menu, un tableau de bord, un modèle de l'explorateur de données, une tâche ou une procédure, sans lire toute la configuration. | Toujours. |
| Outils des applications | Des fonctions livrées par une application pour son propre domaine, nommées `<app>_<id>`. En lecture seule. Voir [Liberty Next → Logique → IA](#settings-ai). | **Les outils des applications** (activé par défaut). |
| `remember_note` | Propose une note pour les conversations suivantes — voir [Conversations et notes](#history). | Toujours. |
| `screen_form`, `screen_write`, `screen_write_many`, `screen_action`, `job_form`, `job_run` | Lisent ce qu'un écran permet à son utilisateur, puis ajoutent, modifient ou suppriment un enregistrement — ou jusqu'à 50 enregistrements sur une seule carte —, ou lancent une action de l'écran, par les requêtes et les règles de l'écran lui-même ; lisent une tâche telle que sa page la présente, puis l'exécutent — voir [Écrire par un écran](#write). | **Outils d'écriture** (désactivé par défaut), avec la permission `ai:write`. |
| Procédures | Liste les procédures des applications et charge celle qui convient — voir [Procédures](#playbooks). | Toujours. |
| `jobs_status`, `server_log`, `integrity_checks` | Les tâches Nomaflow avec leur planification, leur dernière exécution et leur prochain démarrage, et les exécutions récentes d'une tâche avec l'étape en échec ; les dernières lignes du journal du serveur, par niveau et par texte ; les contrôles croisés de la configuration. | **Outils d'exploitation** (désactivé par défaut) ; superutilisateurs uniquement. |
| `api_call` | Appelle un endpoint d'un connecteur d'API. | **Outil API** (désactivé par défaut — un endpoint peut modifier des données). |
| `api_run` | Appelle un endpoint marqué **Modifie des données** — un état soumis, une orchestration lancée. `api_call` refuse un tel endpoint. Dans la conversation, il propose une carte ; rien n'est envoyé tant que l'utilisateur ne l'applique pas. Voir [Points d'accès d'API](./build/api-endpoints.md#writable). | **Outil API** et **Outils d'écriture**, pour un utilisateur détenant `ai:write` et la permission de l'endpoint ; en MCP, **Autoriser les modifications en MCP** également. |
| Outils de génération | Proposent une requête, une entrée du dictionnaire, un écran ou une entrée de menu ; l'utilisateur relit la proposition puis l'applique. | **Outils de construction** (désactivé par défaut) ; superutilisateurs uniquement. |
| Lecture web | Lit les pages des domaines autorisés. | **Domaines autorisés** (aucun par défaut). |

L'assistant n'utilise que des requêtes nommées existantes : il n'écrit pas de SQL sur la base. Au-delà de **Lignes par requête, au plus**, le résultat est signalé comme tronqué et l'assistant reçoit la consigne de ne ni compter ni additionner les lignes reçues : il resserre ses filtres, ou calcule le chiffre avec les outils de l'explorateur de données. Un résultat d'outil de plus de 60 000 caractères est tronqué, et l'assistant est invité à restreindre son appel. Une question qui épuise ses tours d'outils (**Itérations d'outils maximum**, 15 par défaut) se termine par une réponse de clôture : ce qui a été fait, ce qui a été trouvé, ce qui reste — et l'utilisateur peut demander de poursuivre.

Les **Outils d'exploitation** permettent à l'assistant de lire l'état du serveur plutôt que de supposer, quand une tâche a échoué, est en retard ou manque. Ils sont destinés aux installations dont les utilisateurs du chat sont des administrateurs : le journal du serveur peut contenir tout ce que le serveur a écrit.

---

## Écrire par un écran \{#write\}

**Outils d'écriture** activés, l'assistant peut faire ce qu'un utilisateur fait dans un écran ou sur la page d'une tâche — rien par un autre chemin :

| Outil | Rôle |
|---|---|
| `screen_form` | Lit ce que l'écran permet à cet utilisateur d'ajouter, de modifier, de supprimer et de lancer : la clé, chaque colonne avec son libellé, son caractère obligatoire ou verrouillé, sa valeur par défaut et les valeurs acceptées, les colonnes qu'une valeur choisie renseigne, et les actions de l'écran. |
| `screen_write` | Ajoute, modifie ou supprime **un** enregistrement. |
| `screen_write_many` | Ajoute, modifie ou supprime **plusieurs** enregistrements d'un même écran — la même opération pour tous, 50 au plus — sur une seule carte. |
| `screen_action` | Lance **une** action de l'écran — *Valider* ou *Clôturer* d'un menu de ligne, un bouton de la barre d'outils ou d'un onglet du formulaire. |
| `job_form` | Lit une tâche telle que sa page la présente : son objet, les paramètres qu'un utilisateur peut renseigner avec leurs choix, ses préréglages, son exécution en cours éventuelle, ses dernières exécutions avec leur état et leur erreur. |
| `job_run` | Exécute la tâche — le bouton **Exécuter** de sa page — avec ses seuls paramètres déclarés et ses préréglages. |

L'enregistrement est lu par la requête de lecture de l'écran, et les règles du formulaire s'appliquent : une colonne obligatoire absente, une valeur hors de sa liste, une colonne ou un enregistrement que l'écran tient en lecture seule sont refusés avec le motif. L'enregistrement se fait ensuite comme depuis le formulaire — règles du dictionnaire, séquences, tables liées, audit, périmètre de données, paquet de modifications, règles de notification — de même que les actions d'enregistrement de l'écran et les étapes de ses actions, chacune sous sa propre permission. Une valeur choisie dans une liste renseigne ses colonnes associées, comme dans le formulaire ; une colonne associée fournie dans la demande est conservée.

**Trois verrous, tous nécessaires :** le réglage **Outils d'écriture**, la permission `ai:write` du rôle, et la permission de chaque requête, endpoint ou plugin exécuté, comme dans l'écran — `job:<id>` pour une tâche.

**Qui confirme.** Dans le panneau, les outils se limitent à proposer : l'utilisateur reçoit une carte — *Change sales/orders — … — STATUS: 'OPEN' → 'CLOSED'*, ou l'action avec la confirmation de l'écran et ce qu'elle exécute — et rien ne se passe avant **Appliquer** ; **Ignorer** abandonne l'étape. En [MCP](./mcp.md#changes), ces outils n'existent que si **Autoriser les modifications en MCP** est activé, et le client demande l'accord de son utilisateur avant d'en appeler un.

**Plusieurs enregistrements.** Tous les enregistrements de la liste sont contrôlés avant la première écriture : si l'écran en refuse un, rien n'est écrit et la réponse nomme chaque enregistrement refusé avec son motif. Un seul **Appliquer** les écrit ensuite dans l'ordre, chacun comme `screen_write` en écrit un. Si un enregistrement échoue malgré tout en cours de route, l'écriture s'arrête là : les précédents restent écrits, et la réponse en donne le nombre. Au-delà de 50 enregistrements, l'import Excel de la grille est le bon outil.

**Tâches.** Une exécution est mise en file et se poursuit en arrière-plan ; l'assistant la suit par `job_form`, et l'utilisateur la retrouve dans l'[historique des exécutions](../nomaflow/runs/history.md) de Nomaflow. Une tâche déjà en cours est refusée. Une tâche qui charge un fichier fourni par l'utilisateur le demande **sur la carte** — un sélecteur par étape de fichier, avec les types acceptés par le dépôt de la tâche : **Appliquer** envoie le fichier par le dépôt de la tâche et l'exécute avec lui. Le fichier ne passe jamais par le modèle. Depuis Claude Desktop, il vient du [dossier de l'extension](./mcp.md#files).

| Refusé | Motif indiqué |
|---|---|
| Un enregistrement ouvert dans son formulaire | Le formulaire tient l'enregistrement : il ne peut être ni modifié ni supprimé avant la fermeture du formulaire — celui d'un autre utilisateur, ou celui que l'utilisateur a lui-même ouvert. |
| Un écran qui ne peut pas être écrit | L'écran est en lecture seule, n'a pas de requête pour l'opération, lance des actions à l'ouverture de son formulaire, ou lit ses données sur un connecteur absent des **Connecteurs autorisés**. |
| Une action faite uniquement de ce que fait un navigateur | L'ouverture d'une page ou d'une adresse est signalée, pas exécutée. |

Comme dans l'écran, un enregistrement, ses tables liées et ses actions sont des instructions distinctes : quand une action ou une étape échoue, ce qui s'est exécuté avant reste, et la réponse l'indique.

**Ce qui est conservé.** Chaque carte appliquée et chaque outil d'écriture appelé en MCP figure dans l'enregistrement d'usage — l'auteur, l'écran, l'opération ou l'action, la clé de l'enregistrement, la tâche, et le motif d'un refus ; jamais les valeurs. [Surveillance → Usage de l'IA](../monitoring/ai-usage.md#changes) les liste, et sur un écran soumis au suivi des modifications, le paquet désigne ces entrées par *Assistant IA*.

---

## Procédures \{#playbooks\}

Une **procédure** est un mode opératoire pas à pas qu'une application livre pour l'assistant : *Clôturer une période*, *Ajouter un utilisateur à un rôle*. Quand un utilisateur demande comment faire quelque chose dans une application, l'assistant cherche une procédure adaptée, la charge et en suit les étapes dans l'ordre, en indiquant laquelle il applique. Faute de procédure adaptée, il le signale et répond à partir de ce qu'il peut lire.

---

## Liberty Next → Logique → IA \{#settings-ai\}

<svg viewBox="0 0 1200 614" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="aip-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="aip-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="aip-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="aip-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="574" rx="14" fill="url(#aip-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="12" fontFamily="system-ui, sans-serif">✦</text>
  <text x="258" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">IA</text>
  <rect x="839" y="31" width="121" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="899.5" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Recharger la config</text>
  <rect x="759" y="31" width="74" height="22" rx="5" fill="url(#aip-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="796.0" y="45.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="674" y="31" width="79" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="713.5" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↺ Abandonner</text>
  <line x1="220" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="88" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Application :</text>
  <rect x="313.52" y="76" width="22" height="20" rx="10.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="324.52" y="89.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">∗</text>
  <rect x="341.52" y="76" width="32" height="20" rx="10.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="357.52" y="89.2" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="379.52" y="76" width="41" height="20" rx="10.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="400.02" y="89.2" fill="#4a9eff" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">sales</text>
  <rect x="426.52" y="76" width="126" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="489.52" y="89.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un périmètre</text>
  <text x="240" y="114" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Ce que l'application livre pour l'assistant : des questions de départ pour l'application et pour ses écrans.</text>
  <rect x="240" y="126" width="720" height="50" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="252" y="146" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">文A  Langue</text>
  <rect x="728" y="134" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="738" y="148.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="737" y="148.3" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">fr</text>
  <text x="752.664" y="148.3" fill="#94a3b8" fontSize="8.6" fontFamily="system-ui, sans-serif">français</text>
  <text x="936" y="148.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="252" y="166" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Les questions montrées aux utilisateurs dont la langue est : français. Une liste laissée vide ici montre celle telle qu'écrite.</text>
  <rect x="240" y="188" width="720" height="74" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="206" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">✦  Questions de départ partout dans sales</text>
  <text x="252" y="224" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">Quelles commandes sont en retard ?</text>
  <text x="948" y="224" fill="#94a3b8" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="252" y="232" width="672" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="246.5" fill="#475569" fontSize="8.6" fontFamily="system-ui, sans-serif">Une question que l'utilisateur peut cliquer…</text>
  <rect x="930" y="232" width="20" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="940.0" y="246.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="240" y="274" width="720" height="128" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="292" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">☰  Questions de démarrage par rubrique</text>
  <rect x="822" y="281" width="126" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="885.0" y="295.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une rubrique</text>
  <text x="252" y="310" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Le chat montre les rubriques, puis les questions de la rubrique choisie. Quand des rubriques existent, elles remplacent la liste ci-dessus.</text>
  <rect x="252" y="320" width="696" height="72" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="264" y="328" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="274" y="342.5" fill="#94a3b8" fontSize="8.8" fontFamily="system-ui, sans-serif">Commandes</text>
  <rect x="914" y="328" width="22" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="925.0" y="342.5" fill="#f87171" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="264" y="366" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">Quelles commandes sont en retard ?</text>
  <text x="264" y="382" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">Quel client a le plus commandé ce mois-ci ?</text>
  <rect x="240" y="414" width="720" height="84" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="432" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▤  Questions de départ par écran</text>
  <rect x="728" y="420" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="738" y="434.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="737" y="434.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">+ un écran…</text>
  <text x="936" y="434.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="252" y="444" width="696" height="44" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="461" fill="#e2e8f0" fontSize="8.6" fontFamily="ui-monospace, monospace">orders</text>
  <text x="303.992" y="461" fill="#94a3b8" fontSize="8.2" fontFamily="system-ui, sans-serif">— Orders</text>
  <text x="264" y="478" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">Pourquoi cette commande est-elle bloquée ?</text>
  <rect x="240" y="510" width="720" height="30" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="529" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">📖  Procédures</text>
  <rect x="240" y="548" width="720" height="30" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="567" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">🔧  Outils</text>
  <rect x="1000" y="72" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="87" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter un périmètre</text>
  <text x="1010" y="100" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une autre application</text>
  <line x1="1000" y1="89.0" x2="552.52" y2="86" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aip-arrow)"/>
  <rect x="20" y="135" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="150" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Langue</text>
  <text x="30" y="163" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">telles qu'écrites, ou une langue</text>
  <line x1="200" y1="152.0" x2="240" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aip-arrow)"/>
  <rect x="1000" y="155" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="170" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Liste vide dans une langue</text>
  <text x="1010" y="183" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">= celle telle qu'écrite</text>
  <line x1="1000" y1="172.0" x2="840" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aip-arrow)"/>
  <rect x="20" y="204" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="219" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Partout dans l'application</text>
  <text x="30" y="232" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les questions par défaut</text>
  <line x1="200" y1="221.0" x2="240" y2="216" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aip-arrow)"/>
  <rect x="20" y="329" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="344" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rubriques</text>
  <text x="30" y="357" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">questions groupées, en premier</text>
  <line x1="200" y1="346.0" x2="264" y2="339" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aip-arrow)"/>
  <rect x="1000" y="359" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="374" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">+ Ajouter une rubrique</text>
  <text x="1010" y="387" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un libellé et ses questions</text>
  <line x1="1000" y1="376.0" x2="900" y2="299" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aip-arrow)"/>
  <rect x="20" y="446" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="461" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Par écran</text>
  <text x="30" y="474" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le lieu le plus précis l'emporte</text>
  <line x1="200" y1="463.0" x2="264" y2="462" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aip-arrow)"/>
  <rect x="1000" y="534" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="549" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Procédures, outils</text>
  <text x="1010" y="562" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les mêmes pour toutes les langues</text>
  <line x1="1000" y1="551.0" x2="960" y2="558" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aip-arrow)"/>
</svg>

**Liberty Next → Logique → IA** modifie ce que chaque application livre pour l'assistant ; **Abandonner** et **Enregistrer** se trouvent dans l'en-tête de la page. La ligne **Application** liste les applications qui en ont déjà, plus `*` pour partout ; **Ajouter un périmètre** en choisit une autre. Pour chacune :

| Partie | Contenu |
|---|---|
| **Langue** | La langue dont les questions sont affichées et modifiées : **Telles qu'écrites** (les questions telles que l'application les livre), ou une autre langue — les listes ci-dessous sont alors les questions montrées aux utilisateurs de cette langue. Une liste laissée vide dans une langue reprend celle telle qu'écrite. Le sélecteur apparaît quand l'interface propose une autre langue que celle de la configuration. |
| **Questions de départ partout dans** *application* | Les questions proposées dans toute l'application. |
| **Questions de démarrage par rubrique** | **Ajouter une rubrique** : une **Rubrique** et ses questions. Le chat montre d'abord les rubriques, puis les questions de la rubrique choisie ; quand des rubriques existent, elles remplacent la liste du dessus. *Aucune rubrique : le chat montre la liste ci-dessus.* |
| **Questions de départ par écran** | **+ un écran…** ajoute un écran — ou une page livrée par l'application, par son nom — et ses propres questions. Retirer un écran le retire de toutes les langues. |
| **Procédures** | **Ajouter une procédure** : un **Id** (lettres, chiffres, `_` et `-`, unique dans l'application), un **titre** — ce que la procédure permet de faire, l'assistant choisit une procédure d'après lui —, **quand elle s'applique** (une ligne, facultatif) et **la procédure** en Markdown. |
| **Outils** | **Ajouter un outil** : un **Identifiant** (minuscules, chiffres et `_`, unique dans l'application — l'assistant voit l'outil sous le nom `<app>_<id>`), la **Fonction (module:fonction)** — un des points d'entrée des [plugins](./build/plugins/overview.md) de l'application, dont les paramètres deviennent les arguments de l'outil —, la **Description** (à quoi il répond et quand l'utiliser : l'assistant choisit un outil d'après elle) et la **Permission requise pour l'utilisateur** (vide : celle de la fonction). Un outil ne doit rien modifier. Les outils appartiennent à une application : aucun sur la portée `*`. |

L'enregistrement écrit et recharge aussitôt. Ce contenu accompagne l'application : il s'installe et se met à jour avec elle, et il est historisé comme le reste de la configuration. Les questions définies dans **Liberty Next → Administrer → App → Assistant IA** l'emportent sur celles de l'application, emplacement par emplacement.

---

## Qui peut l'utiliser, et sur quoi \{#access\}

- L'utilisateur a besoin de la permission `ai:chat` (règle *Assistant IA* d'un rôle, dans **Au-delà des menus**).
- `ai:chat` ouvre le panneau ; chaque outil vérifie ensuite ce que vérifient les écrans, pour l'utilisateur connecté :

  | Outil | Permission de l'utilisateur |
  |---|---|
  | `sql_query` | `sql:<connecteur>:<requête>`. |
  | `api_call` | `api:<connecteur>:<endpoint>`. |
  | Outils de l'explorateur de données | `explorer:<app>:<modèle>`. |
  | `list_connectors`, `describe_instance`, `search_catalog`, procédures | Aucune autre, et ils ne montrent que ce que l'utilisateur peut ouvrir : un écran d'après sa requête de lecture, une entrée de menu d'après la [règle du menu](./build/menus/permissions-and-roles.md#gating), une tâche d'après `job:<id>`. Une application qui n'a rien pour l'utilisateur n'est pas citée. |
  | Outils des applications | La permission de l'outil. |
  | `screen_form`, `screen_write`, `screen_write_many`, `screen_action` | `ai:write`, et la permission de chaque requête, endpoint ou plugin exécuté par l'écran. |
  | `job_form`, `job_run` | `ai:write` et `job:<id>`. |
  | Outils d'exploitation et de construction | Superutilisateur. |

  Un utilisateur qui détient `ai:chat` sans les permissions `sql:` ou `explorer:` d'une application n'en obtient aucun chiffre : les accorder, comme pour les écrans. Le refus est formulé de la même façon pour une requête qui existe et pour une requête qui n'existe pas.
- **Connecteurs autorisés**, dans Liberty Next → Administrer → App, limite les connecteurs accessibles à l'assistant, ainsi que les applications couvertes par `describe_instance` et les procédures ; vide signifie tous. Les outils d'écriture suivent la même limite : un écran dont les données sont sur un autre connecteur n'existe pas pour eux.
- Chaque requête qu'il lance passe par les mêmes contrôles serveur qu'un écran : le [périmètre de données](./build/secure/roles-and-permissions.md#data-scope) de l'utilisateur filtre les lignes.
- Le sélecteur **Modèle** du panneau ne propose que les modèles autorisés dans les réglages ; le serveur refuse tout autre modèle.

---

## Depuis Claude, et ce qui est enregistré \{#beyond\}

- Les mêmes outils répondent à un client externe — Claude Desktop, claude.ai, Claude Code — par le point d'accès MCP du serveur, chaque utilisateur avec un jeton d'accès personnel et ses propres droits. Voir [Connecter Claude (MCP)](./mcp.md).
- Une installation peut marquer ses colonnes sensibles et les tenir à l'écart de l'assistant ; [Données transmises à Anthropic](./ai-data-sent.md) détaille ce qu'une question transmet et ce qu'elle ne transmet jamais.
- Chaque question est enregistrée : qui l'a posée, le modèle, les jetons, les outils appelés — jamais la question, la réponse ni une ligne de données. Les superutilisateurs le consultent dans [Surveillance → Usage de l'IA](../monitoring/ai-usage.md).

---

## Réglages \{#settings\}

Dans **Liberty Next → Administrer → App → Assistant IA** : **Activé**, **Clé API Anthropic** (chiffrée), **Modèle**, **Effort**, **Jetons maximum**, **Itérations d'outils maximum** (15), **Délai de la requête (s)**, **Réflexion adaptative**, **Invite système**, les outils ci-dessus, **Connecteurs autorisés**, **Lignes par requête, au plus**, **Fichier joint à une question**, **Enregistrement d'usage conservé**, **Outils d'écriture**, **Masquer les données sensibles à l'assistant**, le **Point d'accès MCP**, et pour le volet de chat les **Modèles au choix des utilisateurs** et les **Questions de départ**. Voir [Paramètres de l'application](./build/settings-app.md#ai). Sans clé, le panneau indique que l'assistant n'est pas configuré.

---

## Conseils \{#tips\}

- Donner aux requêtes un libellé et une description clairs (Liberty Next → Données → Connecteurs) : l'assistant choisit ses requêtes d'après eux.
- Écrire des requêtes de lecture dédiées aux questions fréquentes (totaux par société, par mois), plutôt que d'attendre de l'assistant qu'il agrège des milliers de lignes.
- Écrire une procédure pour chaque démarche demandée plus d'une fois : la réponse suit alors la procédure de l'application, sans approximation.
- Laisser l'**Outil API** et les **Outils d'exploitation** désactivés, sauf endpoints en lecture seule et utilisateurs du chat administrateurs.
