---
title: Analyser les données
description: "L'explorateur de données de Liberty Next au quotidien : le volet des champs, les étagères Lignes, Mesures et Filtres, la période, le Top N, les vues tableau, croisé, barres, courbes, secteurs et KPI, la vue détail, la descente vers les lignes d'un chiffre et le dialogue de l'enregistrement."
keywords: [Liberty Next, explorateur de données, analyse, volet des champs, étagères, lignes, mesures, filtres, période, tableau croisé, graphique, KPI, détail, descente]
---

# Analyser les données

L'explorateur s'ouvre depuis la **boussole** de l'en-tête. Le sélecteur en haut à droite passe d'un modèle accessible à l'autre ; choisir une application dans la navigation de gauche ouvre le modèle de cette application.

L'analyse se relance d'elle-même un instant après chaque modification ; **Exécuter** la relance à la demande.

---

## Volet des champs \{#fields\}

Le volet de gauche liste les entités du modèle — l'entité analysée dépliée, les autres repliées — avec leur badge **1..1** ou **1..n**. Dans chaque entité, les dimensions viennent d'abord, puis les **Σ Mesures**. La zone de recherche filtre les champs de toutes les entités.

| Action | Résultat |
|---|---|
| Clic sur un champ | Une dimension rejoint **Lignes**, une mesure **Mesures**. |
| Entonnoir d'un champ | Le champ rejoint **Filtres**. |
| Glisser un champ | Le dépose sur l'étagère voulue. |
| Double-clic sur une entité | En fait l'**entité analysée** — le point de départ de l'analyse (le pivot par défaut). Le sélecteur à gauche de la barre d'outils fait de même. |

Les champs déjà utilisés sont mis en évidence. **Nouveau champ calculé**, en bas du volet, ouvre l'[éditeur de champ calculé](./calculated-fields.md).

---

## Étagères \{#shelves\}

| Étagère | Contenu |
|---|---|
| **Lignes** | Les dimensions de regroupement. Une date reçoit une granularité : *Valeur exacte*, *Jour*, *Semaine*, *Mois* (par défaut), *Trimestre*, *Année*. En vue détail, cette étagère liste les colonnes affichées. |
| **Mesures** | Un agrégat par pastille : *Somme*, *Moyenne*, *Min*, *Max*, *Nombre*, *Nombre distinct* pour un nombre ; *Nombre* ou *Nombre distinct* sinon. **+** ajoute un nombre de lignes. Une dimension déposée ici compte ses valeurs distinctes. |
| **Filtres** | Un champ, un opérateur, une valeur. Texte : *contient*, `=`, `≠`, *commence par*, *finit par*, *parmi*, *est vide*, *n'est pas vide*. Nombres et dates : `=`, `≠`, *entre*, `<`, `≤`, `>`, `≥`, *parmi*, *est vide*, *n'est pas vide*. Un champ doté d'une liste de valeurs propose ses valeurs ; *parmi* accepte une liste séparée par des virgules. Sur un champ date ou date-heure, un jour vaut pour la journée entière : `≤` et la fin d'*entre* conservent les lignes de ce jour quelle que soit leur heure, `=` et `≠` signifient dans ce jour ou en dehors ; la date se choisit avec le sélecteur de date de l'application. |

Les pastilles se réordonnent par glisser-déposer dans une même étagère ; la croix en retire une. Une valeur de filtre s'applique avec **Entrée** ou en quittant le champ.

---

## Période et Top N \{#period\}

La barre **Période** apparaît dès que l'entité analysée a un champ date : choisir le champ (la date par défaut de l'entité en premier), puis un préréglage — *Aujourd'hui*, *Hier*, *7 derniers jours*, *30 derniers jours*, *Ce mois-ci*, *Mois dernier*, *Ce trimestre*, *Cette année*, *Année dernière*, *12 derniers mois* — ou une *Période libre* choisie sur le calendrier. *Toutes les dates* retire la période.

**Top** conserve les N premiers groupes (jusqu'à 10 000). La mention de la barre d'outils indique *N groupe(s) sur M ligne(s)*, et précise si la liste a été coupée ou si les chiffres sont partiels.

---

## Vues \{#views\}

Les boutons de la barre d'outils changent de vue sans relancer la requête.

| Vue | Contenu |
|---|---|
| **Tableau** | Une ligne par groupe, triable par en-tête. Un clic sur une ligne descend vers ses lignes. |
| **Croisé** | Les lignes en hiérarchie repliable avec sous-totaux, une dimension étalée en **Colonnes** (*Automatique* : la dernière), un total général et une **Part** — *du parent* ou *du total* — à côté de chaque valeur. Les sous-totaux n'apparaissent que pour une somme ou un nombre : une somme de moyennes n'a pas de sens. Outils : tout déplier, tout replier, export Excel. Un clic sur une valeur descend vers ses lignes. |
| **Barres**, **Courbes** | La première dimension en abscisse, la deuxième (ou les mesures) en **Séries** ; les 10 premières séries, le reste regroupé dans *Autres* ; les dates dans l'ordre, les autres catégories par valeur ; option **Empilé**. |
| **Secteurs** | La première dimension en secteurs, les 10 premiers plus *Autres*. |
| **KPI** | Une carte par mesure, avec son total. |
| **Détail** | Les lignes elles-mêmes, 50 par page, avec l'étagère **Lignes** pour colonnes (à défaut, les champs de l'entité analysée). |

**Mesure** choisit la mesure du croisé ou du graphique (la première par défaut).

---

## Descente et enregistrement \{#drill\}

Un clic sur un groupe du tableau ou sur une valeur du croisé liste les **lignes qui composent ce chiffre** : la clé, les dimensions et les champs des mesures de chaque ligne. Les valeurs de la cellule s'affichent au-dessus de la liste (*Pays : France*, *Étape : Négociation*) ; **Retour à l'analyse** ramène aux chiffres.

En vue détail comme après une descente, une ligne d'une entité rattachée à un écran ouvre le **dialogue** de cet écran : l'enregistrement s'affiche comme dans l'écran et se modifie avec les mêmes droits. L'analyse se met à jour après l'enregistrement.

---

## La page \{#page\}

Les éléments d'une analyse se lisent en cartes, chacune avec son icône et sa couleur : **Vue**, **Période**, **Lignes** (**Colonnes** dans la vue Détail), **Mesures**, **Filtres** — et **Options** pour un tableau croisé ou un graphique. Les champs se cliquent ou se glissent toujours sur une étagère, et les pastilles se réordonnent par glissement. Le résultat est un panneau dont l'en-tête indique la vue et ce que l'exécution a répondu — *N groupe(s) sur N ligne(s)*, *N premiers affichés*. **Enregistrer**, **Enregistrer sous**, **Supprimer**, **Ajouter à un menu** (réservé au superutilisateur, voir [Ajouter à un menu](./saved-and-dashboards.md#menu)), **Excel** et **PDF** se trouvent dans l'en-tête de la page, à côté du sélecteur de modèle.

<svg viewBox="0 0 1320 450" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="410" rx="14" fill="url(#exr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="14" fontFamily="system-ui, sans-serif">◎</text>
  <text x="260" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Explorateur de données</text>
  <text x="260" y="60" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Pipeline CRM — affaires, clients, activités</text>
  <rect x="930" y="31" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="940" y="45.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">crm · Pipeline CRM     ▾</text>
  <rect x="892" y="31" width="30" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="907.0" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="848" y="31" width="39" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="867.5" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="747" y="31" width="96" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="795.0" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Ajouter à un menu</text>
  <rect x="684" y="31" width="58" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="713.0" y="45.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="587" y="31" width="92" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="633.0" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer sous</text>
  <rect x="514" y="31" width="68" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="548.0" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <line x1="221" y1="72" x2="1099" y2="72" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="84" width="228" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="85" width="92" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="287.0" y="99.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚗ Analyses (3)</text>
  <line x1="334" y1="89" x2="334" y2="103" stroke="#334155" strokeWidth="1"/>
  <text x="401.0" y="99.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Tableaux de bord (1)</text>
  <rect x="476" y="84" width="280" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="99.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">won_by_company  sales · Affaires gagnées par société   ▾</text>
  <rect x="764" y="84" width="86" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="807.0" y="99.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">☷ Définition</text>
  <rect x="240" y="118" width="840" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="127" width="20" height="20" rx="6" fill="#4a9eff" fillOpacity="0.15" stroke="#4a9eff" strokeWidth="1"/>
  <text x="260" y="140.5" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="278" y="140.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VUE</text>
  <rect x="350" y="126" width="132" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="351" y="127" width="20" height="20" rx="4" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="361" y="141" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="383" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⊞</text>
  <text x="405" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▥</text>
  <text x="427" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">∿</text>
  <text x="449" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◔</text>
  <text x="471" y="141" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◠</text>
  <rect x="488" y="126" width="58" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="517.0" y="140.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">☰ Détail</text>
  <rect x="552" y="126" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="562" y="140.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">deals.CLOSE_DATE  Date de clôture  ▾</text>
  <rect x="748" y="126" width="96" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="796.0" y="140.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▤ Cette année  ▾</text>
  <text x="852" y="141" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Top</text>
  <rect x="874" y="126" width="44" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="884" y="140.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">100</text>
  <rect x="1006" y="126" width="64" height="22" rx="5" fill="url(#exr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1038.0" y="140.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="240" y="166" width="840" height="250" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="186" fill="#e2e8f0" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TABLEAU</text>
  <text x="307.32" y="186" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">3 groupe(s) sur 120 ligne(s)</text>
  <rect x="1048" y="174" width="24" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1060.0" y="186.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">&lt;/&gt;</text>
  <line x1="241" y1="198" x2="1079" y2="198" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="208" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="222.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="993" y="208" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1030.5" y="222.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Exporter ▾</text>
  <rect x="923" y="208" width="65" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="955.5" y="222.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="858" y="208" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="888.0" y="222.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⊟ Grouper</text>
  <rect x="793" y="208" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="823.0" y="222.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="252" y="240" width="816" height="22" rx="4" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="255" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOCIÉTÉ (ID)  ⇅</text>
  <text x="422" y="255" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOCIÉTÉ  ⇅</text>
  <text x="722" y="255" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOMME MONTANT  ⇅</text>
  <line x1="252" y1="287" x2="1068" y2="287" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="280" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00001</text>
  <text x="422" y="280" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="722" y="280" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">165 000</text>
  <line x1="252" y1="309" x2="1068" y2="309" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="302" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00002</text>
  <text x="422" y="302" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="722" y="302" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">27 000</text>
  <line x1="252" y1="331" x2="1068" y2="331" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="324" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">00003</text>
  <text x="422" y="324" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <text x="722" y="324" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">12 400</text>
  <text x="254" y="404" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="333.4" y="390" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="343.4" y="403.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50   ▾</text>
  <text x="395.4" y="404" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Affichage 1–3 sur 3</text>
  <text x="1060" y="404" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  [1]  ›  »</text>
  <rect x="1140" y="84" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Définition</text>
  <text x="1150" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">réaffiche champs et étagères</text>
  <line x1="1140" y1="101.0" x2="850" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exr-arrow)"/>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Code + libellé</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">deux colonnes distinctes</text>
  <line x1="200" y1="237.0" x2="300" y2="251" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exr-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne descend</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vers les lignes détaillées</text>
  <line x1="200" y1="347.0" x2="262" y2="302" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exr-arrow)"/>
  <rect x="1140" y="30" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer, exporter</text>
  <text x="1150" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dans l'en-tête de la page</text>
  <line x1="1140" y1="47.0" x2="907.0" y2="31" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exr-arrow)"/>
  <rect x="1140" y="140" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une seule ligne</text>
  <text x="1150" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vue, période, Top, Exécuter</text>
  <line x1="1140" y1="157.0" x2="934" y2="130" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exr-arrow)"/>
  <rect x="1140" y="196" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">SQL</text>
  <text x="1150" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">superutilisateurs seulement</text>
  <line x1="1140" y1="213.0" x2="1060" y2="182" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exr-arrow)"/>
  <rect x="1140" y="250" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La grille partagée</text>
  <text x="1150" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">recherche, filtres, export</text>
  <line x1="1140" y1="267.0" x2="928" y2="219" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exr-arrow)"/>
</svg>

- **Définition**, à côté du sélecteur d'analyses, masque les champs et les étagères : **le résultat prend la page**, avec la vue, la période, le Top et **Exécuter** sur une seule ligne. Une analyse enregistrée s'ouvre ainsi, une nouvelle s'ouvre sur sa définition.
- **Le tableau est la grille des écrans de données** : recherche, filtre par colonne, tri sur plusieurs colonnes, regroupement, choix des colonnes et export CSV / Excel de ce qui est affiché. Une ligne permet toujours la descente ; une ligne de détail ouvre toujours sa fiche ; le détail reste paginé par le serveur.
- **Un champ codé affiche son libellé, son code, ou les deux** — la pastille d'un champ lu par une énumération ou un lookup propose **Libellé**, **Code + libellé**, **Code**. Dans le tableau, *Code + libellé* donne deux colonnes — `Société (ID)` puis `Société` —, chacune triée, filtrée et exportée séparément ; un tableau croisé écrit `101 · Alpine Foods SA` dans sa cellule de libellé. Le choix est enregistré avec l'analyse et repris par les tuiles des tableaux de bord.
- Un export limité par le Top de l'analyse le signale : *20 premiers groupes sur 44*.

---

## Points d'attention

| Situation | Effet |
|---|---|
| Une mesure d'une entité 1..n à côté de dimensions du pivot. | Agrégée par ligne du pivot, sans dupliquer les lignes du pivot. |
| Deux entités 1..n dans les lignes. | Refusé, avec un message : une seule entité 1..n à la fois. |
| La mention signale des chiffres partiels. | Plus de 50 000 lignes regroupées ont été lues : resserrer la période ou ajouter un filtre. |
| Un superutilisateur veut voir la requête. | Le bouton `</>`, dans l'en-tête du résultat, affiche l'instruction et ses valeurs. |

## Pour aller plus loin

- [Champs calculés](./calculated-fields.md) — des champs sur mesure.
- [Analyses enregistrées et tableaux de bord](./saved-and-dashboards.md) — conserver, partager, exporter.
