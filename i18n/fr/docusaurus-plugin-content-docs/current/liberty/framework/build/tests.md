---
title: Tests
description: "Logique → Tests dans Liberty Next : les tests de non-régression des points d'accès d'API d'une application — suites et cas, un cas dessiné comme un enchaînement d'appels et modifié à côté, ce que chaque appel doit répondre (fonctionne ou refusé, lignes, valeurs de la première ligne), Remplir depuis la réponse, Jouer ce cas, Jouer la suite, Enregistrer la référence, et les permissions qui les ouvrent à une équipe fonctionnelle."
keywords: [Liberty Next, tests, non-régression, suite de tests, cas de test, point d'accès d'API, exécution de référence, comparaison, tests:view, tests:run, tests:edit]
---

# Tests

**Tests** vérifie que ce qu'une application appelle **répond toujours de la même façon** : après une modification de configuration, une mise à jour du système placé derrière une API, une nouvelle version. Un test s'écrit sans code — un cas est un **enchaînement d'appels** aux points d'accès d'un connecteur d'API, chacun avec ce qui est attendu de sa réponse — et se compare d'une exécution à l'autre à une **référence**.

Accès : **Liberty Next → Logique → Tests**. Les résultats dans le temps se trouvent dans [Exploiter → Résultats des tests](../../monitoring/test-results.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1320 500" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tst-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tst-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tst-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tst-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="456" rx="14" fill="url(#tst-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="12" fontFamily="system-ui, sans-serif">⛉</text>
  <text x="258" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tests</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="72" width="180" height="384" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="82" width="160" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="326.0" y="96.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Nouvelle suite</text>
  <text x="248" y="124" fill="#94a3b8" fontSize="7.5" fontWeight="700" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">COMMANDES — À NE PAS CASSER</text>
  <rect x="244" y="134" width="164" height="22" rx="5" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <circle cx="256" cy="145" r="4.5" fill="none" stroke="#4ade80" strokeWidth="1.4"/>
  <text x="267" y="148.5" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">La liste des commandes a…</text>
  <circle cx="256" cy="171" r="4.5" fill="none" stroke="#fb923c" strokeWidth="1.4"/>
  <text x="267" y="174.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Une commande est créée…</text>
  <circle cx="256" cy="197" r="4.5" fill="none" stroke="#4ade80" strokeWidth="1.4"/>
  <text x="267" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Un id inconnu est refusé</text>
  <circle cx="256" cy="223" r="4.5" fill="none" stroke="#f87171" strokeWidth="1.4"/>
  <text x="267" y="226.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Le prix est calculé</text>
  <text x="252" y="252" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">+ Nouveau cas</text>
  <text x="252" y="274" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">✧ Cas depuis un point d'accès</text>
  <rect x="428" y="72" width="74" height="20" rx="5" fill="url(#tst-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="465.0" y="85.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="507" y="72" width="88" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="551.0" y="85.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Jouer ce cas</text>
  <rect x="600" y="72" width="98" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="649.0" y="85.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Jouer la suite</text>
  <rect x="428" y="97" width="145" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="500.5" y="110.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⚑ Enregistrer la référence</text>
  <rect x="585" y="102" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="602" y="111" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">aussi les cas qui écrivent</text>
  <rect x="428" y="122" width="107" height="20" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="481.5" y="135.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer la suite</text>
  <rect x="428" y="150" width="340" height="306" rx="8" fill="#0b1020" stroke="#1f2937" strokeWidth="1"/>
  <rect x="680" y="160" width="78" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="691" y="174" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">−</text>
  <text x="719" y="173.5" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">100%</text>
  <text x="747" y="174" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="446" y="183" width="230" height="26" rx="13.0" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="458" y="199.5" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">✓</text>
  <text x="472" y="199.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">La liste des commandes a ses colonnes</text>
  <line x1="436" y1="260" x2="454" y2="260" stroke="#475569" strokeWidth="1"/>
  <circle cx="444" cy="260" r="6" fill="#0d1220" stroke="#475569" strokeWidth="1"/>
  <text x="444" y="263.3" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="454" y="235" width="140" height="50" rx="8" fill="#111827" stroke="#4a9eff" strokeWidth="1.6"/>
  <circle cx="469" cy="248" r="4.5" fill="none" stroke="#4ade80" strokeWidth="1.3"/>
  <text x="479" y="252" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIST_ORDERS</text>
  <text x="464" y="267" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">liste</text>
  <text x="464" y="278" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">3 valeur(s)</text>
  <line x1="594" y1="260" x2="618" y2="260" stroke="#475569" strokeWidth="1"/>
  <circle cx="606" cy="260" r="6" fill="#0d1220" stroke="#475569" strokeWidth="1"/>
  <text x="606" y="263.3" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="618" y="235" width="130" height="50" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <circle cx="633" cy="248" r="4.5" fill="none" stroke="#4ade80" strokeWidth="1.3"/>
  <text x="643" y="252" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GET_ORDER</text>
  <text x="628" y="267" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">1re commande</text>
  <text x="628" y="278" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">2 valeur(s)</text>
  <line x1="436" y1="330" x2="454" y2="330" stroke="#475569" strokeWidth="1"/>
  <circle cx="444" cy="330" r="6" fill="#0d1220" stroke="#475569" strokeWidth="1"/>
  <text x="444" y="333.3" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="454" y="317" width="64" height="26" rx="13.0" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="466" y="333.5" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">⚑</text>
  <text x="480" y="333.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Fin</text>
  <rect x="780" y="72" width="304" height="384" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="794" y="94" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">L'étape</text>
  <text x="794" y="114" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NOM</text>
  <text x="935.0" y="114" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">POINT D'ACCÈS APPELÉ</text>
  <rect x="794" y="119" width="135.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="804" y="132.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">liste</text>
  <rect x="935.0" y="119" width="135.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="945.0" y="132.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">list_orders ▾</text>
  <text x="794" y="158" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PARAMÈTRES</text>
  <rect x="794" y="163" width="276" height="34" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="802" y="177" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Société</text>
  <rect x="860" y="168" width="70" height="18" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="870" y="180.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">00001</text>
  <text x="1062" y="192" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">En texte</text>
  <text x="794" y="222" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui est attendu</text>
  <rect x="932" y="209" width="142" height="19" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1003.0" y="222.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">✧ Remplir depuis la réponse</text>
  <text x="794" y="246" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">L'APPEL</text>
  <rect x="794" y="251" width="110" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="804" y="264.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">doit fonctionner ▾</text>
  <text x="794.0" y="290" fill="#64748b" fontSize="7" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">LIGNES, AU MOINS</text>
  <rect x="794.0" y="295" width="88.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="804.0" y="308.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="888.0" y="290" fill="#64748b" fontSize="7" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">LIGNES, EXACTEMENT</text>
  <rect x="888.0" y="295" width="88.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="898.0" y="308.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="982.0" y="290" fill="#64748b" fontSize="7" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">LIGNES, AU PLUS</text>
  <rect x="982.0" y="295" width="88.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="992.0" y="308.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="794" y="334" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LA PREMIÈRE LIGNE CONTIENT</text>
  <rect x="794" y="339" width="276" height="34" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="802" y="353" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">STATUS = OPEN</text>
  <text x="802" y="367" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">+ Ajouter une ligne</text>
  <rect x="794" y="385" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="811" y="394" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Jouée même après un échec (un nettoyage)</text>
  <text x="794" y="416" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▸ Avancé — valeurs gardées, chemins dans la réponse brute</text>
  <rect x="794" y="428" width="98" height="19" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="843.0" y="441.0" fill="#f87171" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer l'étape</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Suites et cas</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chacun avec son dernier résultat</text>
  <line x1="200" y1="113.0" x2="250" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce que vérifie le cas</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">son dernier résultat en tête</text>
  <line x1="200" y1="237.0" x2="446" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le + d'un lien</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">insère une étape vide</text>
  <line x1="200" y1="317.0" x2="440" y2="264" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une carte par appel</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">colorée selon son dernier résultat</text>
  <line x1="200" y1="397.0" x2="488" y2="286" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="1120" y="58" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="73" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Jouer · Enregistrer</text>
  <text x="1130" y="86" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">contrôler, ou garder une référence</text>
  <line x1="1120" y1="75.0" x2="640" y2="72" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="1120" y="196" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Remplir depuis la réponse</text>
  <text x="1130" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">joue l'appel et propose</text>
  <line x1="1120" y1="213.0" x2="1070" y2="218" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="1120" y="270" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui est attendu</text>
  <text x="1130" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fonctionne ou refusé, lignes, valeurs</text>
  <line x1="1120" y1="287.0" x2="1070" y2="305" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="1120" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une étape de nettoyage</text>
  <text x="1130" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">jouée même après un échec</text>
  <line x1="1120" y1="397.0" x2="1044" y2="390" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
  <rect x="20" y="440" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="455" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cas depuis un point d'accès</text>
  <text x="30" y="468" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sa réponse actuelle, rien d'enregistré</text>
  <line x1="200" y1="457.0" x2="250" y2="276" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tst-arrow)"/>
</svg>

---

## Suites, cas, étapes \{#model\}

| | |
|---|---|
| **Suite** | Désigne un connecteur d'API et contient des cas. **Nouvelle suite** demande son nom. |
| **Cas** | Une vérification — *La liste des clients a toujours ses colonnes*. **Nouveau cas**, sous la suite, ou **Cas depuis un point d'accès** pour partir de ce qu'un point d'accès répond — voir [plus bas](#from-endpoint). |
| **Étape** | Un appel à un point d'accès du connecteur du cas — celui de la suite par défaut —, avec ce qui est attendu. |

La colonne de gauche liste les suites — **Nouvelle suite** en tête — et sous chacune ses cas, chacun avec l'icône de son dernier résultat, puis **Nouveau cas** et **Cas depuis un point d'accès**. Le centre porte les boutons de la suite (**Enregistrer**, **Jouer ce cas**, **Jouer la suite**, **Enregistrer la référence**, **aussi les cas qui écrivent**, **Supprimer la suite**) au-dessus du cas choisi, dessiné comme un flux : au début, ce que vérifie le cas avec son dernier résultat ; une carte par étape — son point d'accès, son nom, un résumé de ce qu'elle attend, **colorée selon son dernier résultat** — ; **Fin**. Le flux a son zoom et se poursuit sur la ligne suivante quand il est long. Le panneau de droite modifie l'élément choisi : le cas, ou une étape.

### La suite et le cas \{#case\}

Le panneau s'ouvre sur **La suite** — les réglages communs à ses cas — au-dessus du **Cas** :

| Champ | Signification |
|---|---|
| **Nom de la suite** | Le nom affiché en tête de ses cas dans la liste et dans les résultats. Vide : le nom du fichier. |
| **Connecteur de la suite** | Le connecteur d'API dont les étapes appellent les points d'accès. |
| **Identifiant** | L'identifiant du cas dans sa suite. |
| **Connecteur de ce cas** | Un autre connecteur d'API pour les étapes de ce cas ; *celui de la suite* par défaut. |
| **Ce qu'il vérifie** | La phrase affichée dans les listes et les résultats. |
| **Ce cas modifie des données : joué seulement quand l'exécution l'autorise** | À cocher si une étape écrit. |
| **Dernières exécutions** | Les huit dernières exécutions du cas — résultat, date et heure ; une exécution enregistrée porte la mention *référence*. |

**Supprimer le cas** se trouve sous la liste.

### Un cas depuis un point d'accès \{#from-endpoint\}

**Cas depuis un point d'accès**, sous les cas d'une suite, demande *Quel point d'accès ?* parmi ceux du connecteur de la suite et prépare un premier cas : une étape qui l'appelle avec les valeurs d'exemple de ses variables — son exemple, sinon sa valeur par défaut, sinon le premier de ses choix —, en attendant ce qu'il répond à cet instant : au moins une ligne s'il renvoie des lignes, sinon les premières valeurs que contient sa réponse. Le cas reprend le libellé du point d'accès comme ce qu'il vérifie. *Cas préparé d'après ce que le point d'accès répond maintenant : complétez ce qu'il doit vérifier, puis enregistrez.*

- **Un point d'accès qui modifie des données n'est pas appelé** : son cas arrive marqué comme écrivant (*Ce cas modifie des données*), avec l'appel seul — reste à dire ce qu'il doit répondre et à ajouter une étape qui remet les choses en place.
- Un appel qui échoue avec les valeurs d'exemple donne quand même le cas, avec la raison : renseigner les paramètres de l'étape, puis l'essayer.
- **Rien n'est enregistré avant la suite** : le cas s'ajoute à la suite en cours de modification ; **Enregistrer** le conserve.

Le lien est proposé à qui peut modifier et jouer les tests, dès que le connecteur a des points d'accès.

### Une étape \{#step\}

Le **+** d'un lien insère une étape vide à cet endroit — *pas encore de point d'accès* tant qu'aucun n'est choisi ; un clic sur une carte l'ouvre. **Supprimer l'étape** se trouve au bas de son panneau.

| Champ | Signification |
|---|---|
| **Nom** | Unique dans le cas : les résultats et la référence sont conservés par étape. |
| **Point d'accès appelé** | Choisi dans la liste du connecteur. |
| **Paramètres** | Le formulaire du point d'accès : un champ libellé par paramètre, son aide en dessous, une liste déroulante quand il a une liste de valeurs. |
| **L'appel** | *doit fonctionner* ou *doit être refusé* — avec **Le refus dit** pour contrôler le message. |
| **Lignes, au moins** / **exactement** / **au plus** | Le nombre de lignes, comptées là où le point d'accès indique ses lignes. |
| **La première ligne contient** | Des valeurs de la première ligne, par nom de colonne du point d'accès. |
| **Jouée même après un échec (un nettoyage)** | L'étape s'exécute même si une précédente a échoué : c'est ainsi qu'un cas qui écrit retire ce qu'il a créé. |

**Remplir depuis la réponse** joue l'appel immédiatement et propose ce qu'il faut attendre — le nombre de lignes et les valeurs de la première : garder les lignes qui doivent rester vraies, supprimer les autres. Un point d'accès qui modifie des données n'est pas joué depuis ce bouton : enregistrer l'étape et jouer le cas.

**Avancé — valeurs gardées, chemins dans la réponse brute** contient ce que les champs précédents ne couvrent pas : une valeur **gardée pour les étapes suivantes** (reprise par `{{nom}}` dans un paramètre), une valeur de la réponse brute égale à un texte ou qui le contient, des chemins qui doivent contenir quelque chose ou rien, un avertissement, et les chemins **comparés à l'exécution de référence**. Cette section est nécessaire pour un point d'accès qui n'indique pas où se trouvent ses lignes.

---

## Jouer et comparer \{#run\}

| Bouton | Action |
|---|---|
| **Jouer ce cas** | Joue le cas choisi. |
| **Jouer la suite** | Joue tous les cas, l'un après l'autre. |
| **Enregistrer la référence** | Joue la suite et garde, pour les cas réussis, ce que leurs étapes gardent : la référence à laquelle les prochaines exécutions sont comparées. |
| **aussi les cas qui écrivent** | Autorise, pour cette exécution, les cas marqués comme modifiant des données. |

Une exécution enregistre d'abord les modifications en cours, puis donne son bilan : *N réussi(s) · N en échec · N modifié(s) · N ignoré(s)*. Les icônes des cas et les couleurs des cartes suivent aussitôt.

| Résultat | Couleur | Signification |
|---|---|---|
| **Réussi** | Vert | Tous les contrôles sont vérifiés, et rien ne diffère de la référence. |
| **En échec** | Rouge | Un contrôle n'est pas vérifié, l'appel a échoué, ou une valeur attendue d'une étape précédente n'a jamais été gardée. |
| **Modifié** | Orange | Les contrôles sont vérifiés, mais un élément gardé diffère de la référence — disparu, nouveau, autre nombre, autre valeur. |
| **Ignoré** | Gris | Le cas écrit et l'exécution ne l'a pas autorisé, une étape précédente a échoué, ou le cas n'a aucune étape. |

Un cas prend le plus mauvais résultat de ses étapes. Les vingt dernières exécutions de chaque cas sont conservées.

---

## Où sont conservés les tests \{#files\}

Une suite est un fichier de la configuration (`tests/<suite>.toml`) : elle est empaquetée, versionnée et livrée avec l'application, et chaque enregistrement garde la version précédente dans **Déployer → Historique**. Les exécutions et la référence sont conservées à côté et restent sur l'instance : une référence enregistrée sur l'environnement de test n'est pas celle de la production.

---

## Depuis une tâche, depuis un menu \{#use\}

- Le formulaire de lancement d'une tâche peut proposer la liste des suites : une application livre ainsi une tâche qui joue une suite selon une planification et échoue dès qu'un cas échoue.
- Le menu d'une application peut porter les deux pages — **Tests** et **Résultats des tests** — pour ses propres utilisateurs : voir [Types d'éléments](./menus/item-types.md).

---

## Accès \{#access\}

Les tests ont leurs propres permissions, dans les règles *Au-delà des menus* d'un rôle, type **Tests** — chacune inclut la précédente, et un superutilisateur les détient toutes :

| Permission | Libellé dans l'éditeur de rôle | Autorise |
|---|---|---|
| `tests:view` | **Voir les suites de tests et leurs résultats** | Lire les suites, les cas et les résultats. |
| `tests:run` | **Jouer les tests (et les voir)** | Jouer un cas ou une suite, enregistrer la référence, remplir depuis la réponse. |
| `tests:edit` | **Écrire les tests : suites, cas, étapes (et les jouer)** | Créer, modifier et supprimer des suites, des cas et des étapes. |

Une équipe fonctionnelle peut donc être propriétaire de ses tests sans être administratrice. La page n'affiche que les boutons permis : sans `tests:edit`, ni **Enregistrer**, ni boutons de création ou de suppression, et une ligne l'indique — *Vous pouvez jouer ces tests, pas les modifier* ; sans `tests:run` non plus, ni **Jouer**, ni **Enregistrer la référence**, ni **Remplir depuis la réponse** — *Vous pouvez lire ces tests, pas les jouer ni les modifier*.

---

## Conseils & bonnes pratiques \{#tips\}

- Un cas, une vérification : un échec désigne alors ce qui est cassé.
- Attendre un **refus** là où il est dû — identifiant inconnu, valeur obligatoire absente : un système qui se met à tout accepter est aussi une régression.
- Enregistrer la référence juste avant un changement, jouer la suite juste après.
- Tenir à part les cas qui écrivent, chacun terminé par son étape de nettoyage.

---

## Voir aussi

- [Résultats des tests](../../monitoring/test-results.md) · [Points d'accès d'API](./api-endpoints.md) · [Services](./services.md)
- [Rôles et permissions](./secure/roles-and-permissions.md)
