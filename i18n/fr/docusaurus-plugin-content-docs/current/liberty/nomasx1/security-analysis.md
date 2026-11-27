---
title: À corriger
description: "L'analyse de la sécurité de Nomasx-1 (À corriger) : dix-neuf contrôles sur la sécurité collectée d'une application JD Edwards EnterpriseOne, en trois groupes — séparation des tâches, licences, cohérence — chaque constat avec sa gravité et l'action à mener ; un contrôle qui ne peut pas s'exécuter est signalé, et rien n'est modifié."
keywords: [Nomasx-1, analyse de la sécurité, à corriger, remédiation, séparation des tâches, SoD, licences, comptes inactifs, rôles identiques, sécurité de ligne, sécurité des UDO, cohérence, JD Edwards]
---

# À corriger

**À corriger**, dans le dossier **Revues** du menu Nomasx-1, est l'analyse de la sécurité d'une application : dix-neuf contrôles exécutés sur les données collectées, chaque constat accompagné de l'action à mener. La [Revue de sécurité](./security-review.md) désigne les comptes à examiner, la [Revue de la séparation des tâches](./sod-review.md) les conflits ; cette page indique **où une modification en supprime le plus** et **ce qui ne colle pas** dans la sécurité elle-même.

La page porte sur une application à la fois, choisie en haut à droite. La page s'ouvre immédiatement sur la réponse conservée par le serveur, avec l'heure de son calcul à côté de **Relire** (*Calculé le 24 nov. à 06:15*) : la collecte la prépare à chaque exécution, si bien que la première personne qui ouvre la page après la collecte de la nuit n'attend pas. **Relire** relance les contrôles sur-le-champ, quelle que soit sa durée, et remplace pour tous celle qui était conservée. **La page ne modifie rien** : la sécurité se corrige dans JD Edwards — ou avec la [Maintenance de la sécurité](../nomajde/security-maintenance/security-workbench.md) de Nomajde — puis se collecte à nouveau.

:::info[Spécifique à JDE]
Les contrôles lisent la sécurité collectée depuis JD Edwards EnterpriseOne — dont le Security Workbench, la sécurité des UDO et la sécurité de ligne. La liste des applications ne propose que les applications JD Edwards.
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1320 404" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sana-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sana-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sana-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sana-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="368" rx="14" fill="url(#sana-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">◎</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Analyse de la sécurité</text>
  <text x="276" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Ce qu'il faut corriger, et ce qui ne colle pas — chaque constat avec quoi faire.</text>
  <text x="1019" y="52.5" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Calculé le 24 nov. à 06:15</text>
  <rect x="1027" y="38" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1053.5" y="52.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Relire</text>
  <rect x="747" y="38" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="757" y="52.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">1 · JDE-PROD ▾</text>
  <text x="739" y="53" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Application</text>
  <line x1="220" y1="78" x2="1100" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="92" width="161.6" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="114" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">202</text>
  <text x="250.0" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONSTATS</text>
  <text x="250.0" y="138" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">19 contrôles lancés</text>
  <rect x="409.6" y="92" width="161.6" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="419.6" y="114" fill="#f87171" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="419.6" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SÉPARATION DES TÂCHES</text>
  <rect x="579.2" y="92" width="161.6" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="589.2" y="114" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">89</text>
  <text x="589.2" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LICENCES</text>
  <rect x="748.8" y="92" width="161.6" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="758.8" y="114" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">111</text>
  <text x="758.8" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COHÉRENCE</text>
  <rect x="918.4" y="92" width="161.6" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="928.4" y="114" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">10</text>
  <text x="928.4" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONTRÔLES AVEC CONSTATS</text>
  <text x="928.4" y="138" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">3 élevés · 4 moyens · 3 faibles</text>
  <text x="240" y="166" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Lu sur ce qui a été collecté : recollectez après un changement. Rien n'est modifié ici.</text>
  <rect x="240.0" y="176" width="274.6666666666667" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="248.0" y="185" width="22" height="22" rx="6" fill="none" stroke="#f87171" strokeWidth="1.2"/>
  <text x="278.0" y="194" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Séparation des tâches</text>
  <text x="278.0" y="207" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Où peu de changements en retirent le plus · 2</text>
  <rect x="522.6666666666667" y="176" width="274.6666666666667" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="530.6666666666667" y="185" width="22" height="22" rx="6" fill="none" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="560.6666666666667" y="194" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Licences</text>
  <text x="560.6666666666667" y="207" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Comptes et accès qui comptent pour rien · 89</text>
  <rect x="805.3333333333334" y="176" width="274.6666666666667" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="813.3333333333334" y="185" width="22" height="22" rx="6" fill="none" stroke="#c084fc" strokeWidth="1.2"/>
  <text x="843.3333333333334" y="194" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Cohérence</text>
  <text x="843.3333333333334" y="207" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Ce qui ne colle pas · 111</text>
  <rect x="240" y="226" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="240.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <rect x="1010" y="226" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.0" y="240.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="944" y="226" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="974.0" y="240.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="883" y="226" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="910.5" y="240.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="822" y="226" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="849.5" y="240.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="776" y="226" width="40" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="796.0" y="240.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="240" y="258" width="840" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="275.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONSTAT</text>
  <text x="440" y="275.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRAVITÉ</text>
  <text x="504" y="275.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONCERNE</text>
  <text x="614" y="275.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉTAIL</text>
  <text x="704" y="275.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">N</text>
  <text x="738" y="275.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUOI FAIRE</text>
  <rect x="240" y="290" width="840" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="305.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Un utilisateur a exercé un conflit</text>
  <rect x="440" y="294.0" width="41" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="460.5" y="305.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">élevé</text>
  <text x="504" y="305.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="614" y="305.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">a écrit les tables…</text>
  <text x="704" y="305.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">4</text>
  <text x="738" y="305.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Revoyez d'abord ce qui a été fait ; puis retirez…</text>
  <rect x="240" y="318" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="333.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Un rôle en conflit à lui seul</text>
  <rect x="440" y="322.0" width="41" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="460.5" y="333.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">élevé</text>
  <text x="504" y="333.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">FINADMIN</text>
  <text x="614" y="333.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">39 règle(s)</text>
  <text x="704" y="333.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">22</text>
  <text x="738" y="333.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Le rôle donne les deux activités : scindez-le…</text>
  <rect x="240" y="346" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="361.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Deux rôles en conflit ensemble</text>
  <rect x="440" y="350.0" width="41" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="460.5" y="361.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">élevé</text>
  <text x="504" y="361.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">APCLERK + PURCH</text>
  <text x="614" y="361.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3 règle(s)</text>
  <text x="704" y="361.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2</text>
  <text x="738" y="361.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Ne donnez pas les deux à une même personne…</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Constats</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">et le nombre de contrôles lancés</text>
  <line x1="200" y1="113.0" x2="260.8" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sana-arrow)"/>
  <rect x="20" y="156" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="171" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rien n'est modifié</text>
  <text x="30" y="184" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">corriger dans JDE, puis collecter</text>
  <line x1="200" y1="173.0" x2="240" y2="163" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sana-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois familles</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un onglet chacune</text>
  <line x1="200" y1="253.0" x2="297.33333333333337" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sana-arrow)"/>
  <rect x="20" y="316" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="331" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Gravité</text>
  <text x="30" y="344" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">élevé · moyen · faible</text>
  <line x1="200" y1="333.0" x2="450" y2="298" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sana-arrow)"/>
  <rect x="1120" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Contrôles avec constats</text>
  <text x="1130" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par gravité</text>
  <line x1="1120" y1="113.0" x2="1039.1999999999998" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sana-arrow)"/>
  <rect x="1120" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quoi faire</text>
  <text x="1130" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rédigé pour chaque contrôle</text>
  <line x1="1120" y1="253.0" x2="798" y2="274" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sana-arrow)"/>
  <rect x="1120" y="316" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="331" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">n</text>
  <text x="1130" y="344" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">son sens dépend du contrôle</text>
  <line x1="1120" y1="333.0" x2="714" y2="322" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sana-arrow)"/>
</svg>

---

## Les indicateurs \{#figures\}

| Carte | Valeur |
|---|---|
| **Constats** | Tous les constats de tous les contrôles, avec le nombre de contrôles lancés. |
| **Séparation des tâches** · **Licences** · **Cohérence** | Les constats de chaque groupe — un onglet chacun. |
| **Contrôles avec constats** | Les contrôles qui ont trouvé quelque chose, répartis par gravité : élevés · moyens · faibles. |

La ligne sous les cartes rappelle que la page lit les données collectées — il faut collecter à nouveau après une modification — et indique combien de contrôles **n'ont pas pu s'exécuter**. Les contrôles sont indépendants : celui qui échoue (sur une table pas encore collectée, par exemple) est compté à cet endroit, et les autres s'exécutent quand même.

---

## Les onglets \{#tabs\}

Les trois onglets ont les mêmes colonnes, le contrôle le plus grave en premier :

| Colonne | Contenu |
|---|---|
| **Constat** | Le contrôle, en quelques mots. |
| **Gravité** | *élevé*, *moyen* ou *faible* — fixée pour chaque contrôle. |
| **Concerne** | L'utilisateur, le rôle, la paire de rôles, le module ou le paramètre SoD concerné. |
| **Détail** | Ce que le contrôle a relevé. |
| **n** | Un nombre dont le sens dépend du contrôle (voir les tableaux ci-dessous). |
| **Quoi faire** | L'action corrective, rédigée pour chaque contrôle. |

Un contrôle affiche au plus 2 000 constats ; son total dans les indicateurs reste complet.

### Séparation des tâches \{#sod\}

*Là où peu de modifications suppriment le plus de conflits.*

| Constat | Gravité | n | Action |
|---|---|---|---|
| **Un rôle en conflit à lui seul** | élevé | Utilisateurs qui l'ont | Le rôle donne les deux activités : le scinder en deux rôles. |
| **Deux rôles en conflit ensemble** | élevé | Utilisateurs qui ont les deux | Ne pas attribuer les deux à une même personne, ou sortir l'activité de l'un d'eux. |
| **Un utilisateur a exercé un conflit** | élevé | Conflits exercés | Examiner d'abord ce qui a été fait, puis retirer l'une des deux activités. La preuve est celle de la [Revue de la séparation des tâches](./sod-review.md#evidence). |
| **Un utilisateur privilégié en conflit** | moyen | Règles | Un compte privilégié ne devrait porter aucune activité métier : revoir ses rôles. |

### Licences \{#licences\}

*Les comptes et les accès qui ne servent à rien.* Les deux contrôles de connexion écartent les comptes marqués techniques ou liés dans [Propriétés utilisateurs](./settings/security/users-properties.md).

| Constat | Gravité | n | Action |
|---|---|---|---|
| **Activé, jamais connecté** | moyen | Rôles détenus | Désactiver le compte s'il n'est pas attendu : il est compté comme utilisateur. |
| **Activé, pas connecté depuis longtemps** (180 jours) | moyen | Jours depuis la dernière connexion | Désactiver le compte ou confirmer qu'il est encore utile. |
| **Un module permis à beaucoup, utilisé par peu** | faible | Permis et jamais utilisé | Retirer l'accès à ceux qui ne s'en servent pas : moindre privilège, et moins d'utilisateurs à compter. Contrôle lu seulement quand Object Usage Tracking a été collecté. |
| **Le même nom sur plusieurs comptes** | faible | Comptes | Une personne avec plusieurs comptes : les lier, pour ne la compter qu'une fois, ou désactiver ceux en trop. |

Un module est un composant de licence, avec les codes système qui lui sont rattachés dans *Paramètres → Licences → JD Edwards → Code système*.

### Cohérence \{#consistency\}

*Ce qui ne colle pas.*

| Constat | Gravité | n | Action |
|---|---|---|---|
| **Un utilisateur activé sans rôle** | moyen | — | Attribuer le rôle qui convient, ou désactiver le compte : il n'a que ce que donne `*PUBLIC`. |
| **Un rôle que personne n'a** | faible | — | Le supprimer, ou le garder en connaissance de cause : c'est de la sécurité à maintenir pour personne. |
| **Une affectation vers quelque chose qui n'existe pas** | élevé | — | Supprimer l'affectation dans JD Edwards : le rôle ou l'utilisateur n'existe plus. |
| **Une affectation expirée** | faible | Jours depuis l'expiration | La supprimer : elle ne donne plus rien et encombre la lecture. |
| **Un utilisateur désactivé qui a encore des rôles** | moyen | Rôles | Retirer les rôles : réactiver le compte les rendrait aussitôt. |
| **Des rôles qui donnent exactement la même chose** | moyen | Rôles | En garder un et y déplacer les utilisateurs. Voir [plus bas](#identical-roles). |
| **Des lignes de sécurité pour un utilisateur ou un rôle qui n'existe plus** | moyen | Lignes (workbench, sécurité UDO, sécurité de ligne) | Les supprimer dans JD Edwards : elles ne s'appliquent à personne. |
| **Sécurité de ligne : le début est après la fin** | élevé | — | Corriger la plage : telle qu'elle est écrite, elle ne contient aucune valeur. Voir [Sécurité de ligne](./applications/rights/row-security.md). |
| **Un objet SoD que JD Edwards n'a pas** | moyen | — | Corriger l'objet de l'activité dans [Paramètres → Séparation des tâches → Objets](./settings/sod/objects.md) : il ne peut jamais correspondre. |
| **Une activité SoD sans objet** | moyen | — | Lui donner ses objets, ou la supprimer : ses règles ne trouvent jamais de conflit. |
| **Une règle SoD qui ne peut pas fonctionner** | élevé | — | Corriger la règle dans la [matrice](./settings/sod/matrix.md) : son risque ou l'une de ses activités manque. |

#### Rôles identiques \{#identical-roles\}

Deux rôles ne sont *identiques* que s'ils donnent les mêmes objets avec les mêmes droits **et** portent les mêmes lignes propres : les lignes du Security Workbench (pages, vues de tâches et lignes d'application), la [sécurité des UDO](./applications/rights/udo-security.md) et la [sécurité de ligne](./applications/rights/row-security.md). Deux rôles qui ouvrent les mêmes applications mais des pages différentes, ou qui voient des lignes différentes, ne sont pas signalés.

---

## Accès \{#access\}

La page s'ouvre aux quatre [rôles prédéfinis](./overview.md#roles). Le périmètre de données des rôles de l'utilisateur s'applique. La page transmet ses indicateurs à l'[assistant](./ai-assistant.md) pour l'application affichée.

---

## Conseils & bonnes pratiques

- **Traiter d'abord les gravités élevées de la séparation des tâches.** Un rôle en conflit à lui seul se corrige une fois pour tous ses détenteurs.
- **Relire l'onglet Cohérence après chaque modification de la sécurité dans JD Edwards** — affectations expirées, rôles sans détenteur et lignes pour des utilisateurs partis s'accumulent sans bruit.
- **Examiner en priorité les constats sur les paramètres SoD quand les conflits semblent trop peu nombreux** : un objet absent de JD Edwards ou une activité sans objet donnent des règles qui ne se déclenchent jamais.
- **Collecter à nouveau avant de relire.** La page montre la sécurité de la dernière collecte ; *Dernière collecte* en donne la date.

---

## Voir aussi

- [Revue de la séparation des tâches](./sod-review.md) — les conflits et leurs preuves.
- [Revue de sécurité](./security-review.md) — les comptes à examiner en priorité.
- [Tâches](./jobs.md#steps) — ce que lisent les collectes.
