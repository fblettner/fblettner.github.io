---
title: Audit de la base de données
description: "Supervision → Audit de la base de données dans Nomajde : la base de JD Edwards EnterpriseOne lue en direct dans son propre dictionnaire — Oracle, SQL Server, Db2 pour Linux / UNIX / Windows ou Db2 for i (IBM i) — comme la lit un audit — l'instance et ses paramètres, ce que disent les chiffres, puis la taille, les tablespaces, les plus grosses tables, l'activité, les instructions les plus coûteuses, les sessions, les journaux redo, les objets et les statistiques — sans aucune vue des packs Diagnostics ou Tuning."
keywords: [Nomajde, JD Edwards, JDE E1, audit de la base, Oracle, tablespace, NOARCHIVELOG, journaux redo, cache, analyse complète, sessions, objets invalides, index inutilisables, statistiques, control_management_pack_access, AWR, ASH, SQL Server, journal de transactions, fichiers de données, Db2, Db2 for i, IBM i, AS/400, pools de disques, ASP, journaux]
---

# Audit de la base de données

**Supervision → Audit de la base de données** lit la base de JD Edwards en direct dans son propre dictionnaire, comme la lit un audit : ce qu'est l'instance, ce que disent les chiffres, puis neuf sections réparties en quatre onglets. La page ne fait que lire. Quatre bases sont lues — **Oracle**, **SQL Server**, **Db2 pour Linux / UNIX / Windows** et **Db2 for i** (IBM i, AS/400) — avec les mêmes sections et les mêmes règles, chacune dans ses propres termes : voir [Selon la base](#databases). Sur une autre base, la page indique la base du pool JD Edwards et ne lit rien.

Sur Oracle, aucune vue AWR, ASH, ADDM ou SQL Monitor n'est lue : elles appartiennent à des packs licenciés à part, et les lire compterait déjà comme une utilisation. Les chiffres d'activité comptent donc depuis le démarrage de l'instance.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 356" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ndb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ndb-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ndb-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ndb-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="312" rx="14" fill="url(#ndb-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Audit de la base de données</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">La base JD Edwards lue en direct dans son propre dictionnaire : taille, activité, ce qui coûte le plus, ce qui est cassé.</text>
  <rect x="907" y="34" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="933.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Relire</text>
  <text x="897" y="48.5" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Lu à 14:02</text>
  <line x1="232" y1="74" x2="968" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="84" width="174.0" height="34" rx="7" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="248.0" y="92" width="18" height="18" rx="4" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="272.0" y="99" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Vue d'ensemble</text>
  <text x="272.0" y="111" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">L'instance et ce que disent les chiffres</text>
  <rect x="422.0" y="84" width="174.0" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="430.0" y="92" width="18" height="18" rx="4" fill="#4ade80" fillOpacity="0.18"/>
  <text x="454.0" y="99" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Stockage</text>
  <text x="454.0" y="111" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">Taille, tablespaces, plus grosses tables</text>
  <rect x="604.0" y="84" width="174.0" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="612.0" y="92" width="18" height="18" rx="4" fill="#c084fc" fillOpacity="0.18"/>
  <text x="636.0" y="99" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Activité</text>
  <text x="636.0" y="111" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">Cache, attentes, instructions, redo</text>
  <rect x="786.0" y="84" width="174.0" height="34" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="794.0" y="92" width="18" height="18" rx="4" fill="#fb923c" fillOpacity="0.18"/>
  <text x="818.0" y="99" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Objets</text>
  <text x="818.0" y="111" fill="#94a3b8" fontSize="7.1" fontFamily="system-ui, sans-serif">Objets invalides, index, statistiques</text>
  <rect x="240" y="128" width="720" height="66" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="143" fill="#e2e8f0" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">L'INSTANCE</text>
  <text x="332" y="143" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Les chiffres d'activité comptent depuis le démarrage de l'instance. Aucune vue AWR, ASH ou des conseillers n'est lue.</text>
  <line x1="241" y1="151" x2="959" y2="151" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="168" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">Oracle 19c · instance ORCL · mode ARCHIVELOG · control_management_pack_access NONE · cursor_sharing EXACT</text>
  <text x="252" y="184" fill="#cbd5e1" fontSize="8.2" fontFamily="system-ui, sans-serif">db_block_size 8192 · open_cursors 300 · processes 600 · sga_target 0 · undo_retention 900</text>
  <rect x="240" y="204" width="720" height="112" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="220" fill="#e2e8f0" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CE QUE DISENT LES CHIFFRES</text>
  <line x1="241" y1="228" x2="959" y2="228" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="256" cy="243" r="3.5" fill="#fb923c"/>
  <text x="266" y="246" fill="#64748b" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TABLESPACES</text>
  <text x="392" y="246" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Le tablespace PRODDTAT est plein à 91 % de ce qu'il peut atteindre.</text>
  <circle cx="256" cy="262" r="3.5" fill="#4a9eff"/>
  <text x="266" y="265" fill="#64748b" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">JOURNAUX REDO</text>
  <text x="392" y="265" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">3 groupe(s) de journaux redo à un seul membre : un fichier perdu est un journal perdu.</text>
  <circle cx="256" cy="281" r="3.5" fill="#4a9eff"/>
  <text x="266" y="284" fill="#64748b" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJETS ET STATISTIQUES</text>
  <text x="392" y="284" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">12 table(s) JDE aux statistiques périmées.</text>
  <circle cx="256" cy="300" r="3.5" fill="#4ade80"/>
  <text x="266" y="303" fill="#64748b" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">L'INSTANCE</text>
  <text x="392" y="303" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">control_management_pack_access vaut NONE : les packs ne peuvent pas être utilisés par erreur.</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre onglets</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chacun dit combien à revoir</text>
  <line x1="200" y1="97.0" x2="244" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ndb-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">L'instance</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">version, mode, paramètres</text>
  <line x1="200" y1="177.0" x2="252" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ndb-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce que disent les chiffres</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">orange d'abord, puis bleu, vert</text>
  <line x1="200" y1="277.0" x2="254" y2="247" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ndb-arrow)"/>
  <rect x="1000" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Stockage · Activité · Objets</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">neuf sections en tout</text>
  <line x1="1000" y1="47.0" x2="550" y2="88" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ndb-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Aucune vue de pack</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chiffres depuis le démarrage</text>
  <line x1="1000" y1="167.0" x2="920" y2="143" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ndb-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exposition de licence</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">accès aux packs dit clairement</text>
  <line x1="1000" y1="317.0" x2="860" y2="303" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ndb-arrow)"/>
</svg>

---

## Les quatre onglets \{#tabs\}

Chaque onglet indique, à côté de sa description, combien de ses points sont à revoir.

| Onglet | Sections |
|---|---|
| **Vue d'ensemble** | **L'instance** — version, instance, base, mode, plateforme et les paramètres qui comptent (`control_management_pack_access`, `cursor_sharing`, `db_block_size`, `open_cursors`, `processes`, `sga_target`, `undo_retention`…) — et **Ce que disent les chiffres**. |
| **Stockage** | **Taille** selon ce que contient chaque propriétaire — données métier, tables de contrôle, objets centraux, système, bibliothèque d'objets, dictionnaire de données, Oracle, autres — ; **Tablespaces**, avec ce qu'ils utilisent et ce qu'ils peuvent atteindre ; **Les plus grosses tables**, index et LOB compris, avec leur description issue de l'Object Librarian — lu par le lien de base de données du pool quand l'Object Librarian se trouve dans une autre base. Si le compte ne peut pas le lire, les tailles s'affichent sans les descriptions, et *Ce que disent les chiffres* indique la table sur laquelle accorder le droit. |
| **Activité** | **Activité** — cinq chiffres sur une même bande : taux de succès du cache, analyses complètes, exécutions, validations, tris sur disque — ; **Où le temps a été attendu** à côté des **Sessions** par programme — noyaux JDE, traitements JDE, serveurs web / AIS, outils ; **Journaux redo** et leurs bascules heure par heure, sur toute la largeur ; **Les instructions les plus coûteuses** et qui les envoie, en dernier. |
| **Objets** | **Objets et statistiques** — objets invalides, index inutilisables, tables JDE jamais analysées ou aux statistiques périmées. |

---

## Ce que disent les chiffres \{#findings\}

| Signalé | Signification |
|---|---|
| Un tablespace au-delà de 85 % | De ce qu'il peut atteindre. |
| NOARCHIVELOG | Pas de restauration à un instant donné. |
| Journaux redo à un seul membre, ou qui basculent trop souvent | Un fichier perdu est un journal perdu ; les journaux sont petits pour l'activité. |
| Cache trop court, analyses complètes | Le cache est court pour ce qui est lu ; les instructions ne sont pas partagées. |
| Outils connectés à la base | Des sessions d'autres programmes que JD Edwards. |
| Objets invalides, index inutilisables, statistiques jamais calculées ou périmées | Sur les propriétaires JD Edwards. |
| `control_management_pack_access` | Si les fonctions des packs Diagnostics / Tuning peuvent être utilisées — une exposition de licence s'ils ne sont pas détenus. |
| Tables sans description | Le compte ne peut pas lire la table de l'Object Librarian : les plus grosses tables s'affichent sans leur description, et la ligne donne le `GRANT SELECT` à exécuter. |

Ce sont les règles d'Oracle ; les autres bases appliquent les mêmes dans leurs propres termes, avec quelques règles qui leur sont propres — voir [Selon la base](#databases).

---

## Ce que la page conserve \{#kept\}

La page s'ouvre aussitôt sur les lectures que conserve le serveur, section par section — les dernières, faites par la [tâche de lecture de la plateforme](../jobs.md#platform-reading) ou par le dernier **Relire**, quel qu'en soit l'auteur — et l'en-tête indique l'heure de la plus ancienne — *Lu à 14:02*, avec le jour quand la lecture date d'avant aujourd'hui : un chiffre ancien n'est jamais pris pour l'état présent. **Relire** relit toutes les sections en direct, quelle que soit la durée, et remplace les lectures conservées pour tous les utilisateurs. Tant qu'aucune lecture n'est conservée, la première ouverture lit en direct.

Les pages de la supervision partagent leurs lectures : une fois la [synthèse de la plateforme](../synthesis.md) lue, cette page ne lit plus que les deux sections que la synthèse n'affiche pas, et ce qu'une page relit est à jour dans les autres.

---

## Selon la base \{#databases\}

La base lue est celle vers laquelle pointe le pool JD Edwards ; son type détermine la lecture. Les onglets et les règles restent les mêmes ; les sections et les colonnes prennent les termes de la base, dans les deux langues, sur la page comme dans le [rapport de la plateforme](../synthesis.md#report). Une section dont la base n'a pas l'équivalent l'indique (*SQL Server n'a rien de ce genre.*) ; une section en échec affiche le message de la base elle-même, et les autres sont lues malgré tout.

Le pool doit être du type de la base, et Liberty Next doit disposer du pilote de cette base — voir l'[étape Base de données](../../framework/connectors.md#pool-stages) du pool.

### Oracle \{#oracle\}

Les sections décrites plus haut, lues dans les vues `v$` et `dba_`. Le compte doit pouvoir les lire.

### SQL Server \{#sql-server\}

Un JD Edwards sur SQL Server occupe plusieurs bases — les données métier et les tables de contrôle dans l'une, les tables système, la carte des serveurs, l'Object Librarian et le dictionnaire de données dans une autre, les objets centraux de chaque code chemin dans la leur. Un propriétaire est donc une base **et** un schéma : les schémas du pool désignent une table d'une autre base que celle du pool sous la forme `BASE.SCHÉMA` (`JDE_PRODUCTION.PRODDTA`) ; un nom seul est un schéma de la base du pool.

| Section | Contenu |
|---|---|
| **L'instance** | Version, édition, collation, les paramètres qui comptent (`max server memory (MB)`…), et les bases JD Edwards avec leur mode de **Récupération**, leur **Compatibilité**, **Read committed snapshot**, les statistiques automatiques, **Auto shrink**, **Auto close** et la **Vérification des pages**. |
| **Taille** | Par **Base.schéma**. |
| **Fichiers de données** | À la place des tablespaces : le remplissage de chaque fichier par rapport à ce qu'il peut atteindre — sa propre limite, ou la place restante sur son volume. |
| **Les plus grosses tables** | Avec la date de leurs **Statistiques**. |
| **Journaux de transactions** | Un par base : **Récupération**, taille, **Utilisé %**, ce qu'il **Attend**, **Dernière sauvegarde du journal**, **Fichiers virtuels**. |
| **Activité** | Le cache, les **Lots compilés** à la place des analyses complètes, la durée de vie d'une page, les attentes. |
| **Les instructions les plus coûteuses** | Celles encore présentes dans le cache des plans. |
| **Objets et statistiques** | **Index désactivés**, statistiques **Jamais calculées** ou **Périmées** — SQL Server n'a pas d'objet invalide. |

Ses règles propres signalent un `max server memory` non fixé, une base JD Edwards en auto shrink, en auto close, sans mise à jour automatique des statistiques ou avec une vérification des pages autre que `CHECKSUM`, un journal de transactions plein à 80 %, un journal en récupération complète jamais sauvegardé ou pas depuis plus de 24 heures, une base en récupération SIMPLE, et un journal découpé en plus de 1 000 fichiers virtuels.

Le compte doit détenir `VIEW SERVER STATE` et être utilisateur des bases JD Edwards.

### Db2 pour Linux, UNIX et Windows \{#db2\}

Les mêmes sections, lues dans les fonctions de surveillance et le catalogue : les tablespaces, le **Journal de transactions** et les fichiers journaux archivés par heure, les pools de mémoire tampon et le cache de packages (**Hors du cache de packages** à la place des analyses complètes, **Débordements de tri** pour les tris sur disque), le temps attendu par cause, les attentes de verrou, les **Index à reconstruire**, les tables **Utilisées, jamais analysées**. Ses règles propres signalent la journalisation circulaire, les statistiques automatiques désactivées, la mémoire auto-réglée désactivée, un journal presque plein, et les interblocages ou dépassements de délai de verrou depuis l'activation de la base.

Le compte doit pouvoir exécuter les fonctions de surveillance (`SQLADM` ou `DBADM`) et lire le catalogue.

### Db2 for i (IBM i) \{#db2-for-i\}

Sur un IBM i, la base est le système : il n'y a ni instance, ni tablespace, ni journal redo, ni cache à dimensionner. Les sections gardent leur place et présentent ce que le système a à la place :

| Section | Contenu |
|---|---|
| **Le système** | Sa version et ses niveaux de PTF, les processeurs, la mémoire, le dernier IPL, les valeurs système qui comptent. |
| **Bibliothèques** | La taille par bibliothèque — les schémas du pool les désignent. |
| **Pools de disques (ASP)** | Le taux de remplissage de chaque pool de disques. |
| **Les plus gros fichiers** | Avec leurs **Lignes supprimées** et leur date de **Dernière utilisation**. |
| **Journaux** | Leurs **Récepteurs**, qui les gère, s'ils suppriment leurs récepteurs, les fichiers journalisés, et les récepteurs attachés par heure. |
| **Activité** | **Processeur utilisé**, **Travaux actifs**, **Travaux dans le système**, stockage temporaire ; les **Pools de mémoire** et leurs défauts de page à la place des attentes. |
| **Ce que les travaux exécutent maintenant** | Les instructions que les travaux actifs exécutent à cet instant. Le cache des plans ne se lit que par une procédure qui écrit un fichier, ce que cette lecture ne fait jamais. |
| **Travaux** | Les travaux actifs, par nom, adresse du client et utilisateur. |
| **Index et lignes supprimées** | **Index non valides**, fichiers **À réorganiser**, **Index conseillés par le système**. |

Ses règles propres signalent un journal qui n'est pas actif, un journal qui garde ses récepteurs en ligne, des fichiers chargés de lignes supprimées, et les index conseillés par le système. Les chiffres comptent depuis le dernier IPL.

Le compte doit pouvoir lire les services de `QSYS2` ; l'instruction exécutée par un travail et les verrous d'un autre travail demandent davantage (`*JOBCTL`, ou l'usage de fonction `QIBM_DB_SQLADM`).
---

## Accès \{#access\}

La page s'affiche pour les rôles qui détiennent son entrée de menu et la permission `plugin:nomajde.dbaudit:j_db_audit`. Elle lit la base par la connexion à la base de JD Edwards ; les droits nécessaires au compte sont indiqués pour chaque base sous [Selon la base](#databases).

---

## Conseils & bonnes pratiques \{#tips\}

- Lire d'abord l'onglet **Vue d'ensemble** : les lignes orange sont les points qu'un auditeur relèverait.
- Sur Oracle, vérifier `control_management_pack_access` sur chaque base de la plateforme : `NONE` met les fonctions des packs hors de portée.
- Sur SQL Server, inscrire dans les schémas du pool le `BASE.SCHÉMA` de chaque bibliothèque qui n'est pas dans la base du pool : les plus grosses tables, les index désactivés et les statistiques ne sont lus que pour les bases que le pool désigne.
- Les chiffres d'activité comptent depuis le démarrage de la base (depuis le dernier IPL sur un IBM i) : comparer deux lectures à quelques jours d'intervalle plutôt qu'une lecture juste après un redémarrage.

---

## Voir aussi

- [Performance](./performance.md) — les sessions bloquées, les requêtes lentes et les attentes de la base, à côté de celles des serveurs.
- [Analyse de la plateforme](./platform-analysis.md) — les serveurs.
