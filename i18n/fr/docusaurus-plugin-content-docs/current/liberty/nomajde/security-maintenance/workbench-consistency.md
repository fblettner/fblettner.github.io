---
title: Cohérence du Security Workbench
description: "Simulation de la sécurité → Cohérence dans Nomajde : douze contrôles sur le Security Workbench, les rôles et les affectations de rôles de JD Edwards EnterpriseOne — sécurité ouverte par défaut, lignes sans destinataire ou sans objet, lignes qui ne disent rien de nouveau, sécurité de ligne inopérante, rôles de même séquence, affectations sans effet — chaque constat avec ce qu'il faut faire. Rien n'est modifié."
keywords: [Nomajde, JD Edwards, JDE E1, Security Workbench, F00950, F0092, F00926, F95921, sécurité de ligne, audit de la sécurité, cohérence, "*PUBLIC", "*ALL", séquence des rôles]
---

# Cohérence du Security Workbench

L'onglet **Cohérence** de la [Simulation de la sécurité](./security-simulation.md) relit le Security Workbench de JD Edwards EnterpriseOne pour repérer ce qui ne colle pas. Une sécurité construite sur plusieurs années accumule des lignes que personne n'écrirait plus : lignes pour des utilisateurs partis, lignes qui répètent ce qu'une autre dit déjà, sécurité de ligne qui ne restreint rien. Douze contrôles lisent le workbench (`F00950`), les profils (`F0092`), les rôles et leur séquence (`F00926`) et les affectations de rôles (`F95921`), puis listent chaque ligne à revoir **avec ce qu'il faut faire**.

Rien n'est modifié : les corrections se font dans le [Security Workbench](./security-workbench.md) et les écrans de Maintenance de la sécurité.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 392" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njwc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njwc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njwc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njwc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="356" rx="14" fill="url(#njwc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Simulation de la sécurité</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Ce qu'un utilisateur aurait le droit de faire, avant de l'écrire — et les cas qui vérifient que cela le reste.</text>
  <rect x="240.0" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Simuler</text>
  <text x="250.0" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Un utilisateur, un module, une hypothèse</text>
  <rect x="421.5" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="431.5" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Sécuriser un module</text>
  <text x="431.5" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Tout un module pour un rôle</text>
  <rect x="603.0" y="78" width="175.5" height="38" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="613.0" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Cohérence</text>
  <text x="613.0" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Des lignes inutiles ou qui se contredisent</text>
  <rect x="784.5" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="794.5" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Cas de test</text>
  <text x="794.5" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Des attentes rejouées sur la sécurité · 7</text>
  <rect x="240" y="126" width="117" height="22" rx="5" fill="url(#njwc-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="298.5" y="140.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Lire le workbench</text>
  <rect x="240.0" y="156" width="139.2" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="174" fill="#fb923c" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">42</text>
  <text x="250.0" y="186" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">À REVOIR</text>
  <text x="250.0" y="195" fill="#94a3b8" fontSize="6.5" fontFamily="system-ui, sans-serif">2 élevé · 6 moyen · 34 faible</text>
  <rect x="385.2" y="156" width="139.2" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="395.2" y="174" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">18 450</text>
  <text x="395.2" y="186" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNES LUES</text>
  <rect x="530.4" y="156" width="139.2" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="540.4" y="174" fill="#c084fc" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">31</text>
  <text x="540.4" y="186" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DANS LE WORKBENCH</text>
  <rect x="675.5999999999999" y="156" width="139.2" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="685.5999999999999" y="174" fill="#c084fc" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="685.5999999999999" y="186" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DANS LA SÉCURITÉ DE LIGNE</text>
  <rect x="820.8" y="156" width="139.2" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="830.8" y="174" fill="#c084fc" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="830.8" y="186" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÔLES ET AFFECTATIONS</text>
  <rect x="240" y="204" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONSTAT</text>
  <text x="486" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRAVITÉ</text>
  <text x="544" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR / RÔLE</text>
  <text x="652" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="708" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUOI FAIRE</text>
  <rect x="240" y="232" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="246.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">La sécurité est ouverte par défaut</text>
  <rect x="486" y="235.0" width="41" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="506.5" y="246.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">élevé</text>
  <text x="544" y="246.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <text x="652" y="246.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">&#42;ALL</text>
  <text x="708" y="246.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Fermez &#42;ALL pour &#42;PUBLIC (type 3, exécution N)…</text>
  <rect x="240" y="258" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="272.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Une ligne sur un objet qui n'existe pas</text>
  <rect x="486" y="261.0" width="41" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="506.5" y="272.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">moyen</text>
  <text x="544" y="272.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">BUYER</text>
  <text x="652" y="272.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">P99ZZZ</text>
  <text x="708" y="272.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Supprimez-la, ou corrigez le nom de l'objet…</text>
  <rect x="240" y="284" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="298.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">De la sécurité écrite sur un utilisateur</text>
  <rect x="486" y="287.0" width="41" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="506.5" y="298.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">moyen</text>
  <text x="544" y="298.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="652" y="298.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="708" y="298.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Déplacez ces lignes sur un rôle…</text>
  <rect x="240" y="310" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="324.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Une ligne qui ne dit rien de nouveau</text>
  <rect x="486" y="313.0" width="46" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="509.0" y="324.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">faible</text>
  <text x="544" y="324.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">BUYER</text>
  <text x="652" y="324.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">P4310</text>
  <text x="708" y="324.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Supprimez-la : déjà dit sur &#42;ALL…</text>
  <rect x="240" y="336" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="350.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Un rôle sans ligne</text>
  <rect x="486" y="339.0" width="46" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="509.0" y="350.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">faible</text>
  <text x="544" y="350.5" fill="#cbd5e1" fontSize="8" fontFamily="ui-monospace, monospace">TEMPROLE</text>
  <text x="652" y="350.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">—</text>
  <text x="708" y="350.5" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Donnez-lui sa sécurité ou supprimez-le…</text>
  <rect x="20" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lire le workbench</text>
  <text x="30" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rien n'est modifié</text>
  <line x1="200" y1="145.0" x2="250" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njwc-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">À revoir</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par gravité</text>
  <line x1="200" y1="217.0" x2="250" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njwc-arrow)"/>
  <rect x="20" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Douze contrôles</text>
  <text x="30" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne par ligne à revoir</text>
  <line x1="200" y1="337.0" x2="250" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njwc-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Par famille</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">workbench · ligne · rôles</text>
  <line x1="1000" y1="217.0" x2="820" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njwc-arrow)"/>
  <rect x="1000" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quoi faire</text>
  <text x="1010" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pour chaque constat</text>
  <line x1="1000" y1="337.0" x2="820" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njwc-arrow)"/>
</svg>

---

## Lire le workbench \{#read\}

**Lire le workbench** lance les douze contrôles. Les chiffres :

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

L'onglet fait partie de la page Simulation de la sécurité, dans le dossier **Maintenance de la sécurité** ; les rôles prédéfinis **Administrateur de la sécurité** et **Administrateur** y ont accès (voir [Rôles prédéfinis](../overview.md#roles)). La connexion utilisée pour lire JD Edwards doit pouvoir lire `F00950`, `F0092`, `F00926`, `F95921` et l'Object Librarian (`F9860`).

---

## Conseils & bonnes pratiques \{#tips\}

- **Commencer par les constats de gravité élevée** : une sécurité ouverte par défaut change le sens de toutes les autres lignes.
- **Nettoyer avant de simuler** : les lignes sans destinataire ou qui ne disent rien de nouveau allongent la lecture d'une [simulation](./security-simulation.md) sans en changer la réponse.
- **Exporter la liste** (**Exporter**, au-dessus de la liste) pour partager la revue avec les responsables des rôles.
- **Rejouer les [cas de test](./security-test-cases.md)** après un nettoyage : supprimer une ligne en apparence inutile ne doit rien changer à ce que chaque rôle est autorisé à faire.
