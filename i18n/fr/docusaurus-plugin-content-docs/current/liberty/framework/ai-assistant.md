---
title: Assistant IA
description: "L'assistant IA de Liberty Next : le panneau ouvert par le bouton Assistant, le contexte de page qu'il reçoit, les fichiers joints à une question, les conversations conservées et les notes, les questions de départ et les relances, le choix du modèle, ce qu'il sait faire (lire les requêtes des connecteurs, chercher dans le catalogue, décrire l'installation, suivre des procédures, appeler les outils des applications, lire les tâches et le journal du serveur, appeler des endpoints d'API, proposer de la configuration), comment il est limité (ai:chat, les permissions de chaque outil, connecteurs autorisés, requêtes en lecture seule, périmètre de données), et ses réglages."
keywords: [Liberty Next, assistant IA, Anthropic, Claude, ai:chat, contexte de page, questions de départ, procédures, outils d'exploitation, choix du modèle, outils, list_connectors, sql_query, search_catalog, screen_write, screen_write_many, screen_action, job_run, ai:write, données sensibles, api_call, scaffold, périmètre de données, fichier joint, conversations, notes, outils des applications, MCP]
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
  <rect x="590" y="32" width="92" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="690" y="32" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="701.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↺</text>
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
  <rect x="736" y="452" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <path d="M743,466 l6,-6 a2.6,2.6 0 0 1 3.7,3.7 l-6.6,6.6 a1.5,1.5 0 0 1 -2.1,-2.1 l5.6,-5.6" fill="none" stroke="#94a3b8" strokeWidth="1.2"/>
  <rect x="1000" y="12" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="27" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choix du modèle</text>
  <text x="1010" y="40" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">quand plusieurs sont permis</text>
  <line x1="1000" y1="29.0" x2="686" y2="38" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aid-arrow)"/>
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
  <rect x="1000" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Conversations et notes</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">reprendre, supprimer</text>
  <line x1="1000" y1="137.0" x2="706" y2="55" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aid-arrow)"/>
  <rect x="1000" y="446" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="461" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Joindre un fichier</text>
  <text x="1010" y="474" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">image, PDF, tableur, texte</text>
  <line x1="1000" y1="463.0" x2="762" y2="463" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aid-arrow)"/>
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
| `list_connectors` | Liste les connecteurs avec les requêtes **de lecture** et les endpoints que l'utilisateur peut lancer (descriptions, sans SQL ni identifiants). Sur une grande installation, il répond par une vue d'ensemble, puis se limite à un connecteur ou à des mots-clés. | **Outils connecteurs** (activé par défaut). |
| `sql_query` | Lance une requête **de lecture** d'un connecteur SQL comme le fait son écran : libellés et formats des colonnes, filtres de l'écran, environnement de la page. Il filtre par colonne — une valeur ou un intervalle — et un filtre qui ne correspond à aucune colonne est refusé. Les requêtes d'écriture sont toujours refusées. | **Outils connecteurs** ; **Lignes par requête, au plus** (200). |
| `explorer_models`, `explorer_fields`, `explorer_query` | Listent les modèles de l'[explorateur de données](./explorer/overview.md) et leurs champs, puis calculent un total, un classement, une tendance ou une comparaison sur un modèle — lignes, mesures, filtres, période, tri, N premiers (100 lignes par défaut, 10 000 au plus) — dans le périmètre de données de l'utilisateur. | Activés par défaut. |
| `explorer_saved`, `explorer_save_analysis`, `explorer_save_dashboard` | Listent les analyses et tableaux de bord enregistrés de l'utilisateur, et enregistrent ce qu'il demande : une analyse est exécutée une fois avant d'être stockée, ce qui écarte un champ erroné ; un tableau de bord réunit des analyses enregistrées sous forme de tuiles. Les deux restent **privés**, sauf demande de partage. | Activés par défaut. |
| `describe_instance` | Résume le contenu de l'installation, ou d'une seule application : menus, écrans avec leur requête de lecture, tableaux de bord, modèles de l'explorateur de données, tâches, procédures. *Où trouver…* reçoit une réponse tirée de la configuration réelle. | Toujours. |
| `search_catalog` | Retrouve par mot-clé un écran, une entrée de menu, un tableau de bord, un modèle de l'explorateur de données, une tâche ou une procédure, sans lire toute la configuration. | Toujours. |
| Outils des applications | Des fonctions livrées par une application pour son propre domaine, nommées `<app>_<id>`. En lecture seule. Voir [Liberty Next → Construire → IA](#settings-ai). | **Les outils des applications** (activé par défaut). |
| `remember_note` | Propose une note pour les conversations suivantes — voir [Conversations et notes](#history). | Toujours. |
| `screen_form`, `screen_write`, `screen_write_many`, `screen_action`, `job_form`, `job_run` | Lisent ce qu'un écran permet à son utilisateur, puis ajoutent, modifient ou suppriment un enregistrement — ou jusqu'à 50 enregistrements sur une seule carte —, ou lancent une action de l'écran, par les requêtes et les règles de l'écran lui-même ; lisent une tâche telle que sa page la présente, puis l'exécutent — voir [Écrire par un écran](#write). | **Outils d'écriture** (désactivé par défaut), avec la permission `ai:write`. |
| Procédures | Liste les procédures des applications et charge celle qui convient — voir [Procédures](#playbooks). | Toujours. |
| `jobs_status`, `server_log`, `integrity_checks` | Les tâches Nomaflow avec leur planification, leur dernière exécution et leur prochain démarrage, et les exécutions récentes d'une tâche avec l'étape en échec ; les dernières lignes du journal du serveur, par niveau et par texte ; les contrôles croisés de la configuration. | **Outils d'exploitation** (désactivé par défaut) ; superutilisateurs uniquement. |
| `api_call` | Appelle un endpoint d'un connecteur d'API. | **Outil API** (désactivé par défaut — un endpoint peut modifier des données). |
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

**Ce qui est conservé.** Chaque carte appliquée et chaque outil d'écriture appelé en MCP figure dans l'enregistrement d'usage — l'auteur, l'écran, l'opération ou l'action, la clé de l'enregistrement, la tâche, et le motif d'un refus ; jamais les valeurs. [Surveillance → Usage de l'IA](../monitoring/ai-usage.md#changes) les liste, et sur un écran soumis au suivi des modifications, le paquet désigne ces entrées par *AI assistant*.

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

- Donner aux requêtes un libellé et une description clairs (Liberty Next → Construire → Connecteurs) : l'assistant choisit ses requêtes d'après eux.
- Écrire des requêtes de lecture dédiées aux questions fréquentes (totaux par société, par mois), plutôt que d'attendre de l'assistant qu'il agrège des milliers de lignes.
- Écrire une procédure pour chaque démarche demandée plus d'une fois : la réponse suit alors la procédure de l'application, sans approximation.
- Laisser l'**Outil API** et les **Outils d'exploitation** désactivés, sauf endpoints en lecture seule et utilisateurs du chat administrateurs.
