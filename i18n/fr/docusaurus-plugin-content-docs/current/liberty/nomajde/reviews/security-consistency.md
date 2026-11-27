---
title: Cohérence de la sécurité
description: "Revues → Cohérence de la sécurité dans Nomajde : douze contrôles sur le Security Workbench, les rôles et les affectations de rôles de JD Edwards EnterpriseOne — sécurité ouverte par défaut, lignes sans destinataire ou sans objet, lignes qui ne disent rien de nouveau, sécurité de ligne inopérante, rôles de même séquence, affectations sans effet — lus à l'ouverture de la page, chaque constat avec ce qu'il faut faire. Rien n'est modifié."
keywords: [Nomajde, JD Edwards, JDE E1, cohérence de la sécurité, Security Workbench, F00950, F0092, F00926, F95921, sécurité de ligne, audit de la sécurité, "*PUBLIC", "*ALL", séquence des rôles]
---

# Cohérence de la sécurité

**Revues → Cohérence de la sécurité** relit la sécurité de JD Edwards EnterpriseOne pour repérer ce qui ne colle pas. Une sécurité construite sur plusieurs années accumule des lignes que personne n'écrirait plus : lignes pour des utilisateurs partis, lignes qui répètent ce qu'une autre dit déjà, sécurité de ligne qui ne restreint rien. Douze contrôles lisent le Security Workbench (`F00950`), les profils (`F0092`), les rôles et leur séquence (`F00926`) et les affectations de rôles (`F95921`), puis présentent chaque ligne à revoir **avec ce qu'il faut faire**.

La lecture se fait à l'ouverture de la page : il n'y a rien à choisir. Rien n'est modifié : les corrections se font dans le [Security Workbench](../security-maintenance/security-workbench.md), les écrans de Maintenance de la sécurité ou la [Gestion de la sécurité](../security-management/overview.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njcons-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njcons-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njcons-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njcons-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="322" rx="14" fill="url(#njcons-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Cohérence de la sécurité</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Les lignes de sécurité inutiles ou qui se contredisent.</text>
  <rect x="240.0" y="76" width="137.6" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="250.0" y="100" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">57</text>
  <text x="250.0" y="114" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">À REVOIR</text>
  <text x="250.0" y="126" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">2 élevé · 9 moyen · 46 faible</text>
  <rect x="385.6" y="76" width="137.6" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="395.6" y="100" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">4 812</text>
  <text x="395.6" y="114" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNES LUES</text>
  <rect x="531.2" y="76" width="137.6" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="541.2" y="100" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">38</text>
  <text x="541.2" y="114" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DANS LE WORKBENCH</text>
  <rect x="676.8" y="76" width="137.6" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="686.8" y="100" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">4</text>
  <text x="686.8" y="114" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DANS LA SÉCURITÉ DE LIGNE</text>
  <rect x="822.4" y="76" width="137.6" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="832.4" y="100" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">15</text>
  <text x="832.4" y="114" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÔLES ET AFFECTATIONS</text>
  <rect x="904" y="144" width="56" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="932.0" y="157.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter</text>
  <rect x="842" y="144" width="56" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="870.0" y="157.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="785" y="144" width="51" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="810.5" y="157.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="728" y="144" width="51" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="753.5" y="157.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="685" y="144" width="37" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="703.5" y="157.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="240" y="172" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="187.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONSTAT</text>
  <text x="406" y="187.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRAVITÉ</text>
  <text x="460" y="187.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR / RÔLE</text>
  <text x="570" y="187.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="644" y="187.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉTAIL</text>
  <text x="804" y="187.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUOI FAIRE</text>
  <rect x="240" y="200" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="214.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">La sécurité est ouverte par défaut</text>
  <text x="406" y="214.5" fill="#f87171" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">élevé</text>
  <text x="460" y="214.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <text x="570" y="214.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;ALL</text>
  <text x="644" y="214.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">aucune ligne ne ferme…</text>
  <text x="804" y="214.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Fermez &#42;ALL pour &#42;PUBLIC…</text>
  <rect x="240" y="226" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="240.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Une ligne pour un utilisateur…</text>
  <text x="406" y="240.5" fill="#f87171" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">élevé</text>
  <text x="460" y="240.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="570" y="240.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="644" y="240.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JSMITH n'est pas dans F0092</text>
  <text x="804" y="240.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Supprimez-la : elle ne s'applique…</text>
  <rect x="240" y="252" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="266.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Une sécurité de ligne qui ne…</text>
  <text x="406" y="266.5" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">moyen</text>
  <text x="460" y="266.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <text x="570" y="266.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">F0101 / AC01</text>
  <text x="644" y="266.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1 plage(s) permise(s), et…</text>
  <text x="804" y="266.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Ajoutez la ligne qui interdit…</text>
  <rect x="240" y="278" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="292.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Des rôles de même séquence</text>
  <text x="406" y="292.5" fill="#fb923c" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">moyen</text>
  <text x="460" y="292.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_CLERK</text>
  <text x="570" y="292.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">—</text>
  <text x="644" y="292.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">séquence 20, comme AR_CLERK</text>
  <text x="804" y="292.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Donnez à chaque rôle son…</text>
  <rect x="240" y="304" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="318.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Un rôle sans ligne</text>
  <text x="406" y="318.5" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">faible</text>
  <text x="460" y="318.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">FIN_CLOSE</text>
  <text x="570" y="318.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">—</text>
  <text x="644" y="318.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">aucune ligne dans le…</text>
  <text x="804" y="318.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Donnez-lui sa sécurité ou…</text>
  <rect x="20" y="82" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lue à l'ouverture</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rien à choisir, aucun bouton</text>
  <line x1="200" y1="99.0" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njcons-arrow)"/>
  <rect x="20" y="206" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="221" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne par constat</text>
  <text x="30" y="234" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">douze contrôles</text>
  <line x1="200" y1="223.0" x2="250" y2="213" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njcons-arrow)"/>
  <rect x="20" y="296" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="311" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Gravité</text>
  <text x="30" y="324" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">élevé · moyen · faible</text>
  <line x1="200" y1="313.0" x2="420" y2="291" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njcons-arrow)"/>
  <rect x="1000" y="82" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Où sont les constats</text>
  <text x="1010" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">workbench, lignes, rôles</text>
  <line x1="1000" y1="99.0" x2="700" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njcons-arrow)"/>
  <rect x="1000" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1010" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pour partager la revue</text>
  <line x1="1000" y1="157.0" x2="940" y2="166" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njcons-arrow)"/>
  <rect x="1000" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quoi faire</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pour chaque constat</text>
  <line x1="1000" y1="257.0" x2="840" y2="239" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njcons-arrow)"/>
</svg>

---

## Lire la page \{#read\}

Les douze contrôles s'exécutent à l'ouverture de la page ; *lecture…* s'affiche jusqu'à la fin. Les chiffres :

| Chiffre | Contenu |
|---|---|
| **à revoir** | Le nombre de constats, répartis entre gravité élevée, moyenne et faible. |
| **lignes lues** | Le nombre de lignes du Security Workbench lues. |
| **dans le workbench** | Les constats sur les lignes du workbench (les six premiers contrôles). |
| **dans la sécurité de ligne** | Les constats sur la sécurité de ligne. |
| **rôles et affectations** | Les constats sur les rôles et leurs affectations. |

La liste compte une ligne par constat : **Constat**, **Gravité**, **Utilisateur / rôle**, **Objet**, **Détail** (la ligne en clair) et **Quoi faire**. Elle est triée par gravité ; chaque contrôle affiche au plus 2 000 constats, les chiffres les comptent tous. Quand tous les contrôles reviennent vides, un bandeau indique *Rien à revoir*. Si l'Object Librarian ne peut pas être lu, un bandeau précise que les objets inexistants n'ont pas été contrôlés ; les autres contrôles s'exécutent normalement.

---

## Les douze contrôles \{#checks\}

### Lignes du Security Workbench \{#checks-workbench\}

| Constat | Gravité | Quoi faire |
|---|---|---|
| **La sécurité est ouverte par défaut** — aucune ligne `*PUBLIC` ne ferme `*ALL` | élevée | Fermer `*ALL` pour `*PUBLIC` (type 3, exécution `N`), puis ouvrir ce dont chaque rôle a besoin : d'ici là, toute application que personne n'a nommée est permise. |
| **Une ligne pour un utilisateur ou un rôle qui n'existe plus** | élevée | La supprimer : elle ne s'applique à personne. |
| **Une ligne sur un objet qui n'existe pas** | moyenne | La supprimer ou corriger le nom de l'objet : elle ne sécurise rien. |
| **Une ligne qui ne dit rien de nouveau** — le même rôle le dit déjà sur `*ALL`, ou `*PUBLIC` le dit | faible | La supprimer : moins de lignes, même sécurité. |
| **Des actions données sur ce qui ne peut pas être exécuté** — ajout, modification ou suppression sur une application que le même utilisateur ou rôle ne peut pas exécuter | faible | Supprimer la ligne d'action, ou ouvrir l'application. |
| **De la sécurité écrite sur un utilisateur** — sécurité application, action ou de ligne portée par un utilisateur plutôt que par un rôle | moyenne | Déplacer ces lignes sur un rôle et attribuer le rôle : les lignes d'un utilisateur sont oubliées quand la personne change de poste. |

### Sécurité de ligne \{#checks-rows\}

| Constat | Gravité | Quoi faire |
|---|---|---|
| **Sécurité de ligne : le début est après la fin** | élevée | Corriger la plage : telle quelle, elle ne contient aucune valeur. |
| **Sécurité de ligne : des plages qui se chevauchent et se contredisent** — deux plages d'une même table et d'un même item de données, pour le même utilisateur ou rôle, qui se recouvrent et disent des choses différentes | moyenne | Rendre les plages distinctes. |
| **Une sécurité de ligne qui ne restreint rien** — des plages qui autorisent alors que rien n'est interdit sur cet item, pour personne | moyenne | Ajouter la ligne qui interdit (en général `*PUBLIC` sur toute la plage), ou supprimer celles-ci : JD Edwards permet ce qu'aucune règle n'interdit. |

### Rôles et affectations \{#checks-roles\}

| Constat | Gravité | Quoi faire |
|---|---|---|
| **Des rôles de même séquence** | moyenne | Donner à chaque rôle son propre numéro de séquence : entre deux numéros égaux, l'ordre de lecture n'est pas défini. |
| **Un rôle sans ligne** | faible | Lui donner sa sécurité ou le supprimer : il n'apporte rien à qui le détient. |
| **Une affectation sans effet** — expirée, ou pas encore en vigueur | faible | Supprimer celles qui ont expiré ; vérifier les dates de celles qui ne sont pas encore en vigueur. |

---

## Accès \{#access\}

La page se trouve dans le dossier **Revues** du menu Nomajde. Les rôles prédéfinis **Administrateur de la sécurité**, **Exploitant de la plateforme** et **Administrateur** y ont accès (voir [Rôles prédéfinis](../overview.md#roles)). La connexion utilisée pour lire JD Edwards doit pouvoir lire `F00950`, `F0092`, `F00926`, `F95921` et l'Object Librarian (`F9860`).

---

## Conseils & bonnes pratiques \{#tips\}

- **Commencer par les constats de gravité élevée** : une sécurité ouverte par défaut change le sens de toutes les autres lignes.
- **Nettoyer avant de simuler** : les lignes sans destinataire ou qui ne disent rien de nouveau allongent la lecture d'une [simulation](./simulate-security.md) sans en changer la réponse.
- **Exporter la liste** (**Exporter**, au-dessus de la liste) pour partager la revue avec les responsables des rôles.
- **Jouer les [cas de test de la sécurité](../security-maintenance/security-test-cases.md)** après un nettoyage : supprimer une ligne en apparence inutile ne doit rien changer à ce que chaque rôle est autorisé à faire.
- **Essayer d'abord une correction** dans [Simuler la sécurité](./simulate-security.md) quand son effet n'est pas évident : fermer `*ALL` pour `*PUBLIC` change ce que reçoit chaque rôle.
