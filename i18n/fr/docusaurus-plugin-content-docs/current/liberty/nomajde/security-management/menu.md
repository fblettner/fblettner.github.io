---
title: Un menu
description: "Gestion de la sécurité → Partir d'un menu dans Nomajde : une vue de tâches de JD Edwards EnterpriseOne dessinée en arbre et, pour la tâche ou le dossier cliqué, les rôles avec l'indication affichée ou masquée — masquer ajoute la ligne de filtrage des menus, afficher de nouveau la retire."
keywords: [Nomajde, JD Edwards, JDE E1, Gestion de la sécurité, filtrage des menus, F9006, vue de tâches, tâche, dossier, "*PUBLIC", rôle]
---

# Un menu

Dans la **Gestion de la sécurité**, le point de départ **un menu** répond à la question *qui voit cette tâche ?* pour un emplacement d'un menu de JD Edwards EnterpriseOne. Une fois la vue de tâches choisie, son menu s'affiche en arbre à gauche ; un clic sur une tâche ou un dossier liste les rôles à côté, **Tout le monde** (`*PUBLIC`) en tête, chacun avec l'indication de la tâche affichée ou non.

Accès : **Gestion de la sécurité**, puis **Partir de → un menu**. Les autres points de départ sont décrits dans la [vue d'ensemble de la Gestion de la sécurité](./overview.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njmn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njmn-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njmn-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njmn-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="425" rx="14" fill="url(#njmn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Gestion de la sécurité</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">La sécurité d'un utilisateur ou d'un rôle, modifiée là où elle se lit.</text>
  <rect x="240" y="72" width="720" height="66" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARTIR DE</text>
  <rect x="320.432" y="79" width="130" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="385.432" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">un utilisateur ou un rôle</text>
  <rect x="455.432" y="79" width="179" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="544.932" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">une application, un écran ou un état</text>
  <rect x="639.432" y="79" width="58" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="668.432" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">une table</text>
  <rect x="702.432" y="79" width="49" height="17" rx="8.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="726.932" y="90.7" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">un menu</text>
  <rect x="756.432" y="79" width="44" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="778.432" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">un UDO</text>
  <rect x="805.432" y="79" width="58" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="834.432" y="90.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">un module</text>
  <rect x="787" y="104" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="824.5" y="118.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Abandonner</text>
  <rect x="868" y="104" width="80" height="22" rx="5" fill="url(#njmn-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="908.0" y="118.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="252" y="106" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">VUE DE TÂCHES</text>
  <rect x="252" y="110" width="220" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="123.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">EnterpriseOne Menus  ▾</text>
  <rect x="240" y="148" width="720" height="34" rx="8" fill="rgba(74,158,255,0.07)" stroke="#4a9eff" strokeWidth="1.1"/>
  <text x="252" y="163" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <text x="252" y="175" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">les tâches affichées et masquées</text>
  <rect x="240" y="192" width="320" height="222" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="200" width="296" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="213.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">Chercher une tâche, un menu, un objet…</text>
  <text x="252" y="243" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">▸</text>
  <text x="264" y="243" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Foundation Systems</text>
  <text x="359.68" y="243" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">G0</text>
  <line x1="241" y1="250" x2="559" y2="250" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="266" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="264" y="266" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Financials</text>
  <text x="321.6" y="266" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">G1</text>
  <line x1="241" y1="273" x2="559" y2="273" stroke="#1f2937" strokeWidth="1"/>
  <rect x="241" y="274" width="318" height="22" fill="rgba(74,158,255,0.14)"/>
  <text x="268" y="289" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="280" y="289" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Accounts Payable</text>
  <text x="366.16" y="289" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">G04</text>
  <line x1="241" y1="296" x2="559" y2="296" stroke="#1f2937" strokeWidth="1"/>
  <text x="284" y="312" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif"></text>
  <text x="296" y="312" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Supplier Master</text>
  <text x="377.4" y="312" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">P04012</text>
  <line x1="241" y1="319" x2="559" y2="319" stroke="#1f2937" strokeWidth="1"/>
  <text x="284" y="335" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif"></text>
  <text x="296" y="335" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Voucher Entry</text>
  <text x="367.88" y="335" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">P0411</text>
  <line x1="241" y1="342" x2="559" y2="342" stroke="#1f2937" strokeWidth="1"/>
  <text x="268" y="358" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">▸</text>
  <text x="280" y="358" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Accounts Receivable</text>
  <text x="380.44" y="358" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">G03B</text>
  <line x1="241" y1="365" x2="559" y2="365" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="381" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">▸</text>
  <text x="264" y="381" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Order Management</text>
  <text x="350.16" y="381" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">G42A</text>
  <line x1="241" y1="388" x2="559" y2="388" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="404" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">▸</text>
  <text x="264" y="404" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Supply Management</text>
  <text x="354.92" y="404" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">G431</text>
  <line x1="241" y1="411" x2="559" y2="411" stroke="#1f2937" strokeWidth="1"/>
  <rect x="568" y="192" width="392" height="222" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="580" y="210" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Qui voit Accounts Payable</text>
  <rect x="569" y="220" width="390" height="34" fill="rgba(255,255,255,0.03)"/>
  <text x="580" y="241" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE</text>
  <text x="823" y="232" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" textAnchor="middle" fontFamily="system-ui, sans-serif">AFFICHÉE</text>
  <g><rect x="816.5" y="237" width="13" height="13" rx="3" fill="rgba(255,159,10,0.18)" stroke="#fb923c" strokeWidth="1.1"/><text x="823.0" y="246.8" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text></g>
  <text x="858" y="241" fill="#64748b" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">POURQUOI</text>
  <text x="580" y="272" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Tout le monde</text>
  <text x="649.88" y="272" fill="#64748b" fontSize="8.0" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <g opacity="0.42"><rect x="816.5" y="262" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="823.0" y="271.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="858" y="272" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">pas de ligne propre</text>
  <line x1="569" y1="281" x2="959" y2="281" stroke="#1f2937" strokeWidth="1"/>
  <text x="580" y="298" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AP_MANAGER</text>
  <text x="638.7" y="298" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Fournisseurs</text>
  <g opacity="0.42"><rect x="816.5" y="288" width="13" height="13" rx="3" fill="rgba(50,215,75,0.22)" stroke="#4ade80" strokeWidth="1.1"/><text x="823.0" y="297.8" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text></g>
  <text x="858" y="298" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">pas de ligne propre</text>
  <line x1="569" y1="307" x2="959" y2="307" stroke="#1f2937" strokeWidth="1"/>
  <text x="580" y="324" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AR_MANAGER</text>
  <text x="638.7" y="324" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Clients</text>
  <g><rect x="816.5" y="314" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="823.0" y="323.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <text x="858" y="324" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sa propre ligne</text>
  <line x1="569" y1="333" x2="959" y2="333" stroke="#1f2937" strokeWidth="1"/>
  <rect x="569" y="334" width="3" height="25" fill="#fb923c"/>
  <text x="580" y="350" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">BUYER</text>
  <text x="612.35" y="350" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Acheteur</text>
  <g><rect x="816.5" y="340" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="823.0" y="349.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <text x="858" y="350" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sa propre ligne</text>
  <line x1="569" y1="359" x2="959" y2="359" stroke="#1f2937" strokeWidth="1"/>
  <text x="580" y="376" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">HR_MANAGER</text>
  <text x="638.7" y="376" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Ressources humaines</text>
  <g><rect x="816.5" y="366" width="13" height="13" rx="3" fill="rgba(255,69,58,0.20)" stroke="#f87171" strokeWidth="1.1"/><text x="823.0" y="375.8" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text></g>
  <text x="858" y="376" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sa propre ligne</text>
  <line x1="569" y1="385" x2="959" y2="385" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="430" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Un rôle voit une tâche sauf si une ligne la masque. Masquer ajoute la ligne ; afficher de nouveau la retire.</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Partir d'un menu</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">puis une vue de tâches</text>
  <line x1="200" y1="87.0" x2="722.432" y2="85" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmn-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le menu en arbre</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cliquer une tâche ou un dossier</text>
  <line x1="200" y1="267.0" x2="290" y2="285" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmn-arrow)"/>
  <rect x="20" y="350" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chercher dans l'arbre</text>
  <text x="30" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tâche, code menu, objet</text>
  <line x1="200" y1="367.0" x2="260" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmn-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les changements l'attendent</text>
  <line x1="1000" y1="117.0" x2="898" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmn-arrow)"/>
  <rect x="1000" y="228" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="243" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Affichée ou masquée</text>
  <text x="1010" y="256" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une case par rôle, Tout le monde d'abord</text>
  <line x1="1000" y1="245.0" x2="830" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmn-arrow)"/>
  <rect x="1000" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Masquer ajoute une ligne</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">réafficher la retire</text>
  <line x1="1000" y1="347.0" x2="830" y2="346" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njmn-arrow)"/>
</svg>

---

## Le menu \{#tree\}

- **Vue de tâches** choisit le menu à dessiner ; la page s'ouvre sur la vue de tâches la plus fournie.
- L'arbre présente chaque tâche avec son code de menu et, pour une tâche qui lance un objet, l'objet et sa version. Un dossier s'ouvre et se ferme par sa flèche ; **Tout replier** les referme tous.
- **Chercher une tâche, un menu, un objet…** cherche dans l'arbre par nom de tâche, code de menu ou objet.
- Un clic sur une tâche ou un dossier choisit cet emplacement du menu : une tâche placée sous deux dossiers compte pour deux emplacements.

JD Edwards ne filtre les menus que par rôle : la liste à côté de l'arbre contient les rôles, pas les utilisateurs. Un utilisateur voit les menus des rôles qu'il détient.

---

## Qui voit une tâche \{#who-sees\}

Le panneau **Qui voit** *tâche* liste les rôles avec une seule case, **Affichée**, et une recherche (*Chercher un rôle…*) :

- Un rôle voit une tâche sauf si une ligne la masque : sans ligne, la case est cochée et **Pourquoi** indique *pas de ligne propre*.
- Un rôle dont la propre ligne masque la tâche a sa case décochée, et **Pourquoi** indique *sa propre ligne*.
- Un dossier masqué masque tout ce qui est dessous.

### Masquer ou afficher \{#change\}

- **Décocher une case** masque la tâche pour un rôle : la ligne de filtrage des menus est ajoutée (ou la ligne du rôle passe à masquée).
- **La cocher de nouveau** affiche la tâche : la ligne qui la masquait est retirée — afficher n'ajoute jamais de ligne.
- **La case de l'en-tête** règle tous les rôles listés (après une recherche : ceux trouvés), jamais *Tout le monde*.
- Les changements attendent **Enregistrer** ; **Abandonner** les annule. Changer *Tout le monde* demande confirmation.

Les lignes sont écrites par les requêtes propres à l'écran [Filtrage des menus](../security-maintenance/menu-filtering.md) : elles sont contrôlées, horodatées et capturées dans le paquet de modifications comme un changement fait dans cet écran.

Le code d'un rôle est un lien : il ouvre ce rôle dans le point de départ **un utilisateur ou un rôle**, sur son onglet **Menus**, où tout son menu se coche d'un coup.

---

## Accès \{#access\}

La page est **Gestion de la sécurité** dans le menu de Nomajde ; les rôles prédéfinis **Administrateur de la sécurité** et **Administrateur** y ont accès (voir [Rôles prédéfinis](../overview.md#roles)).

---

## Conseils & bonnes pratiques \{#tips\}

- **Masquer un dossier plutôt que chaque tâche** : une ligne suffit, et les tâches ajoutées plus tard au dossier sont masquées elles aussi.
- **Partir d'un menu** pour une question sur une tâche ; partir d'**un utilisateur ou un rôle** pour reprendre tout le menu d'un rôle.
- **Lire les lignes sous forme de liste** dans le [Filtrage des menus](../security-maintenance/menu-filtering.md) pour les exporter, les modifier en lot ou les charger depuis un fichier.
- **Un menu n'est pas une sécurité** : masquer une tâche n'empêche pas un rôle d'exécuter son objet — c'est le rôle de la [sécurité application](./object.md).
