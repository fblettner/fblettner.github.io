---
title: Analyse de montée de version
description: "Le menu Montée de version de Nomajde : charger la liste d'objets publiée par Oracle pour une version ou une mise à jour de JD Edwards, construire l'analyse d'un path code et obtenir, pour chaque objet spécifique, copié ou modifié, s'il est à reprendre, sa complexité et le nombre de jours — avec l'utilisation, les dépendances, l'affectation et le suivi, et les synthèses dans l'explorateur de données."
keywords: [Nomajde, JD Edwards, montée de version, upgrade, retrofit, reprise, liste d'objets, UN9, path code, Object Librarian, F9861, objets spécifiques, complexité, jours, références croisées]
---

# Analyse de montée de version

Le menu **Montée de version** répond à la première question d'une montée de version ou d'une mise à jour de JD Edwards : **que faut-il reprendre, et en combien de jours ?** Nomajde lit les objets du client dans un path code, les compare à la liste des objets modifiés par Oracle dans la version cible, et attribue à chaque objet une nature, une décision de reprise, une complexité et un nombre de jours. JD Edwards est seulement lu ; l'analyse est conservée dans la base de Nomajde.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 394" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="upg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="upg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="upg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="upg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="354" rx="14" fill="url(#upg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Montée de version</text>
  <rect x="240" y="64" width="170" height="44" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="325.0" y="83.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Liste d'objets Oracle</text>
  <text x="325.0" y="98.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">fichier Excel · UN9</text>
  <rect x="240" y="118" width="170" height="44" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="325.0" y="137.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">JD Edwards — PD920</text>
  <text x="325.0" y="152.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">objets, utilisation, références</text>
  <line x1="410" y1="86" x2="466" y2="106" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#upg-flow)"/>
  <line x1="410" y1="140" x2="466" y2="120" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#upg-flow)"/>
  <rect x="468" y="88" width="170" height="50" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="553.0" y="110.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Construire l'analyse</text>
  <text x="553.0" y="125.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">JD Edwards est seulement lu</text>
  <line x1="638" y1="113" x2="690" y2="113" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#upg-flow)"/>
  <rect x="692" y="84" width="84" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="702" y="102" fill="#64748b" fontSize="7.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">À REPRENDRE</text>
  <text x="702" y="128" fill="#e2e8f0" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">86</text>
  <rect x="782" y="84" width="84" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="792" y="102" fill="#64748b" fontSize="7.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JOURS</text>
  <text x="792" y="128" fill="#e2e8f0" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">142.5</text>
  <rect x="872" y="84" width="84" height="58" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="882" y="102" fill="#64748b" fontSize="7.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJETS</text>
  <text x="882" y="128" fill="#e2e8f0" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">1 240</text>
  <text x="240" y="180" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">OBJETS À REPRENDRE</text>
  <rect x="240" y="190" width="720" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="206.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="316" y="206.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE D'OBJET</text>
  <text x="394" y="206.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NATURE</text>
  <text x="466" y="206.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REPRISE</text>
  <text x="520" y="206.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPLEXITÉ</text>
  <text x="626" y="206.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JOURS</text>
  <text x="666" y="206.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DERN. UTILISATION</text>
  <text x="766" y="206.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AFFECTÉ À</text>
  <text x="844" y="206.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUT</text>
  <rect x="240" y="220" width="720" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="235.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">P554210</text>
  <text x="316" y="235.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">APPL</text>
  <rect x="394" y="224.0" width="46" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="417.0" y="235.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Copied</text>
  <rect x="466" y="224.0" width="22" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="477.0" y="235.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Y</text>
  <text x="520" y="235.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Hard</text>
  <text x="626" y="235.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">3</text>
  <text x="666" y="235.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">18/11/2026</text>
  <text x="766" y="235.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">M. Dupont</text>
  <text x="844" y="235.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">En cours</text>
  <rect x="240" y="248" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="263.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">R5503B</text>
  <text x="316" y="263.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">UBE</text>
  <rect x="394" y="252.0" width="46" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="417.0" y="263.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Custom</text>
  <rect x="466" y="252.0" width="22" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="477.0" y="263.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">N</text>
  <text x="520" y="263.5" fill="#64748b" fontSize="8.8" fontFamily="system-ui, sans-serif">Retrofit not needed</text>
  <text x="626" y="263.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">0</text>
  <text x="666" y="263.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">02/11/2026</text>
  <text x="766" y="263.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="844" y="263.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="276" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="291.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">B4200310</text>
  <text x="316" y="291.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">BSFN</text>
  <rect x="394" y="280.0" width="56" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="422.0" y="291.2" fill="#c084fc" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Modified</text>
  <rect x="466" y="280.0" width="22" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="477.0" y="291.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Y</text>
  <text x="520" y="291.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Medium</text>
  <text x="626" y="291.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">1</text>
  <text x="666" y="291.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">20/11/2026</text>
  <text x="766" y="291.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">A. Martin</text>
  <text x="844" y="291.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="304" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="319.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">R55042</text>
  <text x="316" y="319.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">UBE</text>
  <rect x="394" y="308.0" width="56" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="422.0" y="319.2" fill="#c084fc" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Modified</text>
  <rect x="466" y="308.0" width="22" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="477.0" y="319.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Y</text>
  <text x="520" y="319.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Hard</text>
  <text x="626" y="319.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">3</text>
  <text x="666" y="319.5" fill="#64748b" fontSize="8.8" fontFamily="system-ui, sans-serif">14/03/2023</text>
  <text x="766" y="319.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="844" y="319.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="332" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="347.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">V5501A</text>
  <text x="316" y="347.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">BSVW</text>
  <rect x="394" y="336.0" width="46" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="417.0" y="347.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Copied</text>
  <rect x="466" y="336.0" width="22" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="477.0" y="347.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">N</text>
  <text x="520" y="347.5" fill="#64748b" fontSize="8.8" fontFamily="system-ui, sans-serif">Not updated</text>
  <text x="626" y="347.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">0</text>
  <text x="666" y="347.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">19/11/2026</text>
  <text x="766" y="347.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="844" y="347.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">1 · Charger la liste</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le fichier publié par Oracle</text>
  <line x1="200" y1="77.0" x2="240" y2="86" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upg-arrow)"/>
  <rect x="20" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">2 · Construire l'analyse</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pour un path code</text>
  <line x1="200" y1="147.0" x2="240" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upg-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nature de l'objet</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">spécifique, copié, modifié</text>
  <line x1="200" y1="277.0" x2="240" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upg-arrow)"/>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le chiffre</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">objets et jours à planifier</text>
  <line x1="1000" y1="77.0" x2="958" y2="113" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upg-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Reprise, complexité, jours</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">calculés, puis ajustables</text>
  <line x1="1000" y1="217.0" x2="620" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upg-arrow)"/>
  <rect x="1000" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le suivi de l'équipe</text>
  <text x="1010" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">conservé à chaque analyse</text>
  <line x1="1000" y1="307.0" x2="950" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upg-arrow)"/>
</svg>

---

## Les deux étapes \{#steps\}

### 1. Charger une liste d'objets Oracle \{#load\}

**Montée de version → Charger une liste d'objets Oracle** prend le fichier Excel publié par Oracle pour une version ou une mise à jour — colonnes *Object*, *Version*, *Description*, *System Code*, *Date* — et l'enregistre sous le nom saisi dans **Nom de la liste (UN9)**. Recharger une liste sous le même nom la remplace. Les listes chargées se consultent dans **Montée de version → Listes d'objets Oracle**.

Quand la plateforme est déjà sur une mise à jour, charger deux listes : la cible (`UN9`) et celle en place (`UN2`).

### 2. Construire l'analyse \{#build\}

**Montée de version → Construire l'analyse** lit JD Edwards et écrit le résultat.

| Paramètre | Défaut | Rôle |
|---|---|---|
| **Path code de départ de la montée de version** | `PD920` | Le path code dont les objets sont analysés. |
| **Liste d'objets à comparer (son nom ; vide = aucune)** | vide | La liste cible. Sans elle, aucun objet n'est signalé comme modifié par Oracle. |
| **Liste d'objets déjà en place chez le client** | vide | Facultatif. Avec elle, seul compte ce qu'Oracle a modifié **après** cette liste. |
| **Schéma des objets centraux, s'il diffère de celui du pool (PD920)** | vide | Le schéma des objets centraux quand il n'est pas celui de la connexion. |

L'exécution collecte, pour le path code : les objets ajoutés ou modifiés par le client dans l'Object Librarian, l'original de chaque copie, ce qui est réellement utilisé (suivi d'utilisation des objets et historique des travaux soumis), et les références croisées entre les objets du client. Elle peut être relancée à tout moment : les décisions saisies dans la grille sont conservées.

---

## Le classement d'un objet \{#rules\}

| Nature | Cas | Reprise |
|---|---|---|
| **Audit Trail** | Une table d'audit de la base. | Non — complexité `Configuration`, 0 jour. |
| **Custom** | Un objet créé par le client, sans original JD Edwards. | Non — `Retrofit not needed`. |
| **Copied** | Une copie d'un objet standard : son original est retrouvé grâce à l'identifiant d'application conservé par la copie. | Oui si Oracle a modifié **l'original** dans la liste. |
| **Modified** | Un objet standard modifié par le client. | Oui si Oracle l'a modifié dans la liste. |

Un objet qu'Oracle n'a pas modifié est `Not updated` : rien à reprendre. Pour les autres, la complexité et les jours dépendent du type d'objet :

| Type d'objet | Complexité | Jours |
|---|---|---|
| Applications, états | `Hard` | 3 |
| Fonctions métier | `Medium` | 1 |
| Tout le reste | `Easy` | 0,5 |

---

## Objets à reprendre \{#objects\}

**Montée de version → Objets à reprendre** est la liste de travail : une ligne par objet du client dans le path code.

| Colonnes | Contenu |
|---|---|
| **Path code**, **Objet**, **Description**, **Type d'objet**, **Code système** | L'objet tel que le connaît l'Object Librarian. |
| **Nature**, **Original** | La nature ci-dessus et, pour une copie, l'objet standard d'origine. |
| **Reprise**, **Complexité**, **Jours** | Le résultat de l'analyse. |
| **Modifié par Oracle le** | La date de l'objet — ou de son original — dans la liste cible. |
| **Dernière utilisation**, **Utilisateurs**, **Utilisations** | L'utilisation constatée dans JD Edwards : un objet que personne n'utilise est à abandonner plutôt qu'à reprendre. |
| **Utilisé par**, **En attente de** | Les objets du client qui l'utilisent, et ceux qu'il utilise et qui sont eux-mêmes à reprendre : l'ordre des travaux. |
| **Modifié par**, **Modifié le**, **Version**, **Analysé le** | Le dernier auteur d'une modification, la liste comparée, la date de l'analyse. |

### Les colonnes de l'équipe \{#yours\}

Huit colonnes sont saisies par l'équipe et survivent à chaque nouvelle analyse : **Complexité (votre choix)**, **Jours (votre choix)**, **Module**, **Affecté à**, **Statut**, **Début**, **Fin** et **Note**. Une complexité `Easy`, `Medium` ou `Hard` saisie à cet endroit remplace la complexité calculée ; des jours saisis remplacent les jours calculés d'un objet à reprendre. Ouvrir une ligne pour les modifier, ou passer par la modification en lot de la grille pour affecter une sélection en une fois.

---

## Les autres écrans \{#screens\}

| Écran | Usage |
|---|---|
| **Qui utilise quoi** | Quel objet du client utilise quel autre, avec la reprise et la complexité de chacun : un objet attend ceux qu'il utilise. |
| **Hors du path code de référence** | Les objets du client présents uniquement dans un autre path code — jamais promus, à examiner avant la montée de version. |
| **Listes d'objets Oracle** | Les listes chargées : objet, version de l'objet, description, code système, date. |

---

## Synthèses \{#summaries\}

Le modèle **Upgrade analysis** de l'[explorateur de données](../data-explorer.md) donne les totaux, avec quatre analyses enregistrées : *Retrofit by complexity and object type*, *Days of retrofit by complexity and object type*, *Days of retrofit by assignee and module*, *The customer's objects by kind*. La [page d'accueil](../home.md) de Nomajde affiche le nombre d'objets à reprendre, les jours par type d'objet et les objets par complexité.

---

## Accès \{#access\}

Les écrans sont visibles des rôles qui détiennent leurs entrées de menu ; les deux tâches, des détenteurs de leur permission `job:`. La connexion utilisée pour lire JD Edwards doit pouvoir lire les tables de l'Object Librarian et des objets centraux.

---

## Conseils & bonnes pratiques \{#tips\}

- Charger aussi la liste **déjà en place** : sans elle, tout objet qu'Oracle a touché un jour est compté, et l'estimation est trop haute.
- Filtrer **Reprise** = `Y` et trier sur **En attente de** pour planifier : les objets qui n'attendent rien passent en premier.
- Regarder **Dernière utilisation** avant d'estimer : un état modifié que personne n'a lancé depuis trois ans appelle une décision, pas trois jours de charge.
- Les jours sont une première estimation par type d'objet ; les corriger dans **Jours (votre choix)** pour les objets que l'équipe connaît.
- L'assistant IA connaît la procédure : lui demander de *préparer une montée de version* suffit pour qu'il lance les deux tâches et lise le résultat.

---

## Voir aussi

- [Tâches](../jobs.md) — lancer une tâche depuis le menu de Nomajde.
- [Tests de non-régression](../tests.md) — vérifier que JD Edwards se comporte toujours de la même façon une fois la montée de version faite.
