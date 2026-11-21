---
title: Créer à partir de… — points d'accès et écrans à partir de JD Edwards
description: "Créer à partir de… sur le connecteur AIS de Nomajde : choisir une application, un formulaire, une table, une version d'état, une fonction métier ou une orchestration de JD Edwards, répondre à quelques questions et obtenir un point d'accès prêt, avec un champ libellé par entrée — ou un écran Liberty complet qui lit un formulaire JDE et y ajoute, modifie et supprime des enregistrements, avec les règles de JD Edwards."
keywords: [Nomajde, JD Edwards, AIS, Créer à partir de, form service, P01012, carnet d'adresses, UDC, écran sur un formulaire JDE, fonction métier, orchestration, version d'état, sans code]
---

# Créer à partir de… — points d'accès et écrans à partir de JD Edwards

**Créer à partir de…** écrit, d'après ce que JD Edwards décrit lui-même, un point d'accès dédié à **un** objet — une version d'état, une table, un formulaire, une fonction métier, une orchestration — ou un **écran complet sur une application JD Edwards**. Personne ne saisit de chemin ni de corps JSON : l'objet se cherche par son nom, quelques questions suffisent, et chaque entrée devient un champ libellé, avec son aide et sa valeur par défaut.

C'est le chemin le plus court pour afficher un formulaire JD Edwards dans une grille de Nomajde, avec des enregistrements qui passent par le formulaire — donc avec les règles, les valeurs par défaut, la sécurité et les messages de JD Edwards.

Accès : **Liberty Next → Données → Connecteurs**, connecteur `ais_connection`, onglet **Points d'accès**, bouton **Créer à partir de…**.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 398" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cfr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cfr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cfr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cfr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="358" rx="14" fill="url(#cfr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Créer un point d'accès à partir du serveur</text>
  <rect x="240" y="60" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="74.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">A JDE application (its list and its record) ▾</text>
  <text x="240" y="104" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RECHERCHER</text>
  <rect x="240" y="110" width="250" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="124.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">address book</text>
  <rect x="496" y="110" width="66" height="22" rx="5" fill="url(#cfr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="529.0" y="124.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Chercher</text>
  <text x="240" y="150" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">3 trouvés — choisissez-en un</text>
  <rect x="240" y="158" width="330" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="250" y="172.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="316" y="172.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Address Book</text>
  <rect x="240" y="184" width="330" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="198.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">P0101</text>
  <text x="316" y="198.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Address Book Revisions</text>
  <rect x="240" y="210" width="330" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="224.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">P01111</text>
  <text x="316" y="224.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Address Book - Who's Who</text>
  <rect x="240" y="244" width="330" height="62" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="252" y="262" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">P01012 — Address Book.</text>
  <text x="252" y="278" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Its list is W01012B (Work With Addresses, 9 columns);</text>
  <text x="252" y="292" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">a record is edited in W01012A (Address Book Revision).</text>
  <rect x="592" y="60" width="368" height="300" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="606" y="82" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT TO CREATE</text>
  <rect x="606" y="88" width="340" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616" y="102.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The endpoints and a screen on them ▾</text>
  <text x="606" y="132" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IDENTIFIES A RECORD</text>
  <rect x="606" y="141" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M608.5,146.5 L610.8,148.8 L614.8,144" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="623" y="150" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AN8</text>
  <rect x="652.12" y="141" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="669.12" y="150" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">ALPH</text>
  <rect x="703.28" y="141" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="720.28" y="150" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AT1</text>
  <text x="606" y="178" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THE FIELDS A RECORD IS EDITED WITH</text>
  <rect x="606" y="187" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M608.5,192.5 L610.8,194.8 L614.8,190" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="623" y="196" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">ALPH</text>
  <rect x="690" y="187" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M692.5,192.5 L694.8,194.8 L698.8,190" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="707" y="196" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AT1</text>
  <rect x="774" y="187" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M776.5,192.5 L778.8,194.8 L782.8,190" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="791" y="196" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">TAX</text>
  <rect x="858" y="187" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="875" y="196" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">MLNM</text>
  <rect x="606" y="207" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M608.5,212.5 L610.8,214.8 L614.8,210" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="623" y="216" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">ADD1</text>
  <rect x="690" y="207" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M692.5,212.5 L694.8,214.8 L698.8,210" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="707" y="216" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">CTY1</text>
  <rect x="774" y="207" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="791" y="216" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">ADDZ</text>
  <rect x="858" y="207" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="875" y="216" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">PH1</text>
  <text x="606" y="248" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VERSION OF THE APPLICATION</text>
  <rect x="606" y="254" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616" y="268.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <rect x="782" y="324" width="59" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="811.5" y="338.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="850" y="324" width="91" height="22" rx="5" fill="url(#cfr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="895.5" y="338.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Créer l'écran</text>
  <text x="240" y="332" fill="#94a3b8" fontSize="8.8" fontFamily="system-ui, sans-serif">Ensuite : application, identifiant de l'écran,</text>
  <text x="240" y="346" fill="#94a3b8" fontSize="8.8" fontFamily="system-ui, sans-serif">titre, ajout au menu — créés en une passe.</text>
  <rect x="20" y="50" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Point de départ</text>
  <text x="30" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application, formulaire, table, état…</text>
  <line x1="200" y1="67.0" x2="240" y2="71" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfr-arrow)"/>
  <rect x="20" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">1 · Rechercher</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par nom ou description</text>
  <line x1="200" y1="147.0" x2="240" y2="169" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfr-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui a été trouvé</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la liste et le formulaire</text>
  <line x1="200" y1="267.0" x2="240" y2="275" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfr-arrow)"/>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">2 · Répondre</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce qu'un opérateur connaît</text>
  <line x1="1000" y1="77.0" x2="946" y2="99" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfr-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La clé</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">retrouvée avant toute modification</text>
  <line x1="1000" y1="177.0" x2="772" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfr-arrow)"/>
  <rect x="1000" y="310" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="325" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">3 · Créer</text>
  <text x="1010" y="338" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">points d'accès et écran ensemble</text>
  <line x1="1000" y1="327.0" x2="941" y2="335" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfr-arrow)"/>
</svg>

---

## Les trois étapes \{#steps\}

1. **Rechercher** — choisir le point de départ, saisir un nom ou une partie de description, puis sélectionner l'objet dans les résultats.
2. **Répondre** — les questions dépendent de l'objet : les colonnes à renvoyer, les champs à remplir, le bouton actionné. AIS décrit l'objet sans l'exécuter sur des données.
3. **Créer** — le point d'accès est ajouté au connecteur, non enregistré et ouvert pour relecture : le renommer, ajuster un libellé, puis enregistrer le connecteur. Pour un écran, une seconde fenêtre demande l'application, l'identifiant de l'écran, son titre et s'il faut l'ajouter au menu ; tout est alors créé et enregistré en une fois.

Chaque point d'accès créé a sa propre permission et se range sous le titre de son application JD Edwards (`P01012 — Address Book`).

---

## Ce qui peut être créé \{#generators\}

| Point de départ | Texte à rechercher | Résultat |
|---|---|---|
| **A JDE application (its list and its record)** | Une application (`P01012`) ou une partie de sa description (*address*). | Les points d'accès qui lisent, ajoutent, modifient et suppriment un enregistrement — et un écran qui les utilise. |
| **A report version** | Le début du nom d'un état (`R0010…`). | Un point d'accès qui soumet cette version. |
| **A table or a business view** | Une partie du nom ou de la description. | Un point d'accès qui la lit. |
| **A JDE form** | Une application, un formulaire (`W01012B`) ou une partie de la description d'un formulaire. | Un point d'accès qui utilise ce formulaire — ou un écran. |
| **A business function** | Un nom de fonction, un objet source (`B0000130`) ou une partie de description. | Un point d'accès qui la lance. |
| **An orchestration** | Une partie du nom, de la description ou de la catégorie. | Un point d'accès qui la lance. |

---

## A JDE application — le chemin simple \{#application\}

C'est par là qu'il faut commencer. Les questions portent sur ce qu'un opérateur connaît ; le reste est trouvé automatiquement : la **liste** de l'application (son formulaire de recherche) et le **formulaire dans lequel un enregistrement se modifie**.

| Question | Signification |
|---|---|
| **What to create** | *The endpoints and a screen on them* (par défaut), ou *The endpoints only (read, add, change, delete)*. |
| **What identifies a record** | La ou les colonnes de la liste qui permettent de retrouver un enregistrement avant de le modifier ou de le supprimer. La première colonne est proposée. |
| **The fields a record is edited with** | Proposés : les champs affichés par la liste. Cocher les autres champs à remplir — chacun devient un champ de l'ajout et de la modification. |
| **The list's own fields when it looks for a record** | Uniquement si la liste ne retrouve pas un enregistrement par sa seule clé : une valeur fixe par champ, par alias (`AT1=*` — tous les types de recherche). Vide le plus souvent. |
| **Version of the application** | `ZJDE0001` par défaut. |

La fenêtre indique ce qu'elle a trouvé — la liste, son nombre de colonnes, le formulaire de modification — et prévient si la liste n'affiche rien sans filtre sur le JD Edwards utilisé : l'écran en demandera alors un.

L'écran créé lit la liste dans une grille et ouvre une ligne dans une **fiche** : les mêmes colonnes, la clé verrouillée une fois l'enregistrement créé, une colonne qu'aucun enregistrement ne transmet affichée mais non saisissable.

---

## A report version \{#report\}

| Question | Signification |
|---|---|
| **Processing options to fill** | Chacune devient un champ, avec la valeur actuelle de la version par défaut. Les autres gardent la valeur de la version. |
| **Columns to select on** | Chacune devient un champ obligatoire, comparé par *égal* et **ajouté** à la sélection enregistrée de la version, qui est conservée. |

Le point d'accès — *Submit R0010P / XJDE0001* — est marqué comme modifiant des données.

---

## A table or a business view \{#data\}

| Question | Signification |
|---|---|
| **Columns to return** | Aucune colonne choisie = toutes les colonnes. |
| **Columns to filter on** | Chacune devient un champ obligatoire : les lignes dont la colonne est égale à la valeur. |
| **Maximum rows** | `100` par défaut. |

Le point d'accès indique où se trouvent ses lignes : un écran peut s'en servir comme source, les colonnes portant leur alias JD Edwards pour que le dictionnaire fournisse leurs libellés.

---

## A JDE form \{#form\}

Le générateur complet, pour un formulaire que le chemin simple ne couvre pas. AIS décrit le formulaire — ses champs, les colonnes de sa grille, ses boutons.

| Question | Signification |
|---|---|
| **What to create** | *One endpoint (as set below)*, ou *A screen on this form: its rows in a Liberty grid, and the endpoints it needs*. |
| **A screen: the columns that identify a row (its key)** | Nécessaire pour que l'écran enregistre. Aucune colonne choisie = un écran en lecture seule. |
| **Values passed by the calling form** | Pour un formulaire ouvert depuis un autre avec des champs grisés : le numéro de ces valeurs et un nom pour chacune — `1=Product_Code, 2=UDC_Type`. Sans elles, un tel formulaire enregistre des données fausses. |
| **Fields and grid filters to fill** | Chacun devient un champ. Un filtre de grille laissé vide ne filtre pas ; il accepte `A*`, `>`… |
| **What is done to a row of the grid** | *Add a row*, *Change the row the grid filters find*, *Delete the row the grid filters find*. |
| **Find the row with a leading \*** | Pour les codes cadrés à droite, comme un code UDC : `002` se retrouve avec `*002`. |
| **A record is edited in** | *This form's grid*, ou un autre formulaire de l'application — Work With Addresses liste, Address Book Revision modifie. |
| **Edited in another form: when JDE warns** | *Save all the same (OK is pressed again) and report the warning*, ou *Save nothing: the warning is the error*. |
| **Button pressed** | *Find* lit. Tout autre bouton fait ce que fait le formulaire — OK enregistre, Delete supprime — et le point d'accès est marqué comme modifiant des données. |
| **Fields and columns to return** | Aucun choix = tous. |

### Les garanties d'un enregistrement \{#guarantees\}

Une modification ou une suppression par un formulaire, ce sont plusieurs actions dans **une seule session JD Edwards** : retrouver la ligne, contrôler ce qui a été trouvé, agir, valider par OK.

- Rien n'est fait tant qu'**une seule** ligne n'est pas trouvée — aucune, pour un ajout.
- Un enregistrement modifié dans un autre formulaire suit le parcours de l'utilisateur : retrouvé dans la liste, bouton de la liste actionné (Select, Add, Delete), autre formulaire rempli puis validé par OK.
- Un avertissement arrête le premier OK comme pour un utilisateur ; il est accepté ou refusé selon le choix ci-dessus, et signalé avec l'enregistrement.
- Après une suppression, l'enregistrement est recherché de nouveau : un formulaire qui n'a rien supprimé est une erreur.
- Un champ que l'écran n'envoie pas n'est **pas saisi** dans le formulaire ; un champ vidé par l'utilisateur l'est.
- Quand le formulaire refuse — champ obligatoire vide, valeur non acceptée —, l'enregistrement échoue avec le message du formulaire.
- Les formulaires et la session sont toujours fermés, même en cas d'erreur : aucune session JD Edwards ni aucun verrou d'enregistrement ne subsiste.

---

## A business function, An orchestration \{#bsfn\}

| Point de départ | Questions | Résultat |
|---|---|---|
| **A business function** | **Parameters to pass** (chacun devient un champ ; les autres sont laissés à la fonction) et **Parameters to return**. | *Run &lt;fonction&gt;* — une erreur fait échouer l'appel avec son message, un avertissement est signalé et l'appel reste valide. |
| **An orchestration** | Aucune : la fenêtre liste ses entrées. | *Run &lt;orchestration&gt;* — un champ par entrée, à l'adresse de sa version ; une entrée qui est une liste de lignes reste un seul champ JSON, avec la forme des lignes en exemple. |

---

## Un écran SQL enregistré par les formulaires \{#saves-through\}

Un écran qui lit une table JD Edwards en SQL — rapide, toutes les colonnes, pagination — peut garder sa lecture et **enregistrer par les formulaires** : dans le concepteur d'écran, **Enregistre par** désigne le connecteur AIS, et la mise à jour, l'insertion et la suppression sont les points d'accès d'enregistrement créés ci-dessus. Un champ du point d'accès prend la valeur de la colonne qui porte le même élément de données (`ALPH` à partir de `ABALPH`) : aucune correspondance à écrire. Voir [Un écran sur un point d'accès d'API](../../framework/build/screens/api-screens.md#saves-through).

---

## Garder les points d'accès à jour \{#refresh\}

Un point d'accès garde la trace de son origine. Quand l'état, la table, le formulaire ou l'orchestration change dans JD Edwards — après une mise à jour, par exemple :

- **Actualiser depuis le serveur**, sur le point d'accès, le reconstruit et montre ce qui change avant de l'appliquer ; le nom, le libellé et ce qui a été écrit sur ses champs sont conservés.
- **Vérifier N générés**, au-dessus de la liste, interroge JD Edwards pour chaque point d'accès généré et liste ceux qui ne correspondent plus.

---

## Conseils & bonnes pratiques \{#tips\}

- Commencer par **A JDE application** ; réserver **A JDE form** à un formulaire en-tête et détail, à un formulaire ouvert avec des valeurs grisées ou à un bouton particulier.
- Essayer le point d'accès de lecture dans l'onglet **Test** avant de créer l'écran : une liste vide à cet endroit sera un écran vide.
- Pour un formulaire de type UDC, nommer les **valeurs transmises par le formulaire appelant** : saisies dans les champs à la place, le formulaire enregistre un code vide.
- Accorder les points d'accès qui modifient JD Edwards aux rôles qui peuvent faire la même chose dans JD Edwards — pas davantage.
- Ajouter un [cas de non-régression](../tests.md) sur chaque point d'accès généré dont dépend le métier.
- L'assistant IA connaît la procédure : lui demander de *créer un écran Liberty sur un formulaire JDE*.

---

## Voir aussi

- [Services JD Edwards (AIS)](./services.md) — le catalogue.
- [Points d'accès d'API](../../framework/build/api-endpoints.md) et [Un écran sur un point d'accès d'API](../../framework/build/screens/api-screens.md) — le côté framework.
