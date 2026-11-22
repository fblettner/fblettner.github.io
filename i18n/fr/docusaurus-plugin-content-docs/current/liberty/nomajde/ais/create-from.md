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

<svg viewBox="0 0 1200 610" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cfa-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cfa-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cfa-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cfa-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="260" y="20" width="680" height="570" rx="14" fill="url(#cfa-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="280" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Créer un point d’accès à partir du serveur</text>
  <line x1="272" y1="58" x2="928" y2="58" stroke="#1f2937" strokeWidth="1"/>
  <rect x="280" y="70" width="640" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="85.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">A JDE application (its list and its record)  ▾</text>
  <text x="280" y="110" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">The easy way: pick an application (P01012). Its list and the form a record is edited in are found, and the endpoints</text>
  <text x="280" y="122" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">that read, add, change and delete a record are built together — with a screen on them if you want.</text>
  <text x="280" y="146" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RECHERCHER</text>
  <rect x="280" y="152" width="560" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="166.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">P01012</text>
  <rect x="848" y="152" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="884.0" y="166.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌕ Chercher</text>
  <text x="280" y="192" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 TROUVÉS — CHOISISSEZ-EN UN</text>
  <rect x="280" y="198" width="640" height="19" fill="rgba(74,158,255,0.16)" stroke="#1f2937" strokeWidth="1"/>
  <text x="290" y="211" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="360" y="211" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Address Book</text>
  <rect x="280" y="217" width="640" height="19" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="290" y="230" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">P01012BR</text>
  <text x="360" y="230" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Address Book Additional Information - Brazil</text>
  <rect x="280" y="236" width="640" height="19" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="290" y="249" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">P01012D</text>
  <text x="360" y="249" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Address Book Translations</text>
  <rect x="280" y="255" width="640" height="19" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="290" y="268" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">P01012SS</text>
  <text x="360" y="268" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Self Service - Update Address Book Record</text>
  <text x="280" y="290" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">P01012 — Address Book. Its list is W01012B (Work With Addresses, 6 columns); a record is edited in W01012A (Address Book</text>
  <text x="280" y="302" fill="#cbd5e1" fontSize="8" fontFamily="system-ui, sans-serif">Revision). Without any filter this list shows nothing on your JDE: the screen will ask for one (a search type, a number…).</text>
  <text x="280" y="322" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT TO CREATE</text>
  <rect x="280" y="327" width="640" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="340.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">The endpoints and a screen on them  ▾</text>
  <text x="280" y="360" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IDENTIFIES A RECORD</text>
  <rect x="280" y="365" width="640" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="378.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="286" y="368" width="110" height="14" rx="7.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="341.0" y="378.2" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Address Number (AN8) ×</text>
  <text x="280" y="398" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THE FIELDS A RECORD IS EDITED WITH (IN W01012A)</text>
  <rect x="280" y="403" width="640" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="416.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="286" y="406" width="110" height="14" rx="7.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="341.0" y="416.2" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Address Number (AN8) ×</text>
  <rect x="400" y="406" width="106" height="14" rx="7.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="453.0" y="416.2" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Name - Alpha (ALPH) ×</text>
  <rect x="510" y="406" width="97" height="14" rx="7.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="558.5" y="416.2" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Search Type (AT1) ×</text>
  <rect x="611" y="406" width="76" height="14" rx="7.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="649.0" y="416.2" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tax ID (TAX) ×</text>
  <text x="280" y="436" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THE LIST</text>
  <rect x="280" y="441" width="640" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="454.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">W01012B · Work With Addresses · find / browse  ▾</text>
  <text x="280" y="474" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THE FORM A RECORD IS EDITED IN</text>
  <rect x="280" y="479" width="640" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="492.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">W01012A · Address Book Revision · fix / inspect  ▾</text>
  <text x="280" y="512" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VERSION OF THE APPLICATION</text>
  <rect x="280" y="517" width="640" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="530.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">ZJDE0001</text>
  <line x1="272" y1="550" x2="928" y2="550" stroke="#1f2937" strokeWidth="1"/>
  <rect x="778" y="560" width="142" height="22" rx="5" fill="url(#cfa-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="849.0" y="574.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✦ Créer le point d’accès</text>
  <rect x="715" y="560" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="743.5" y="574.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="20" y="70" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Créer à partir de</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application, écran, table, état…</text>
  <line x1="240" y1="87.0" x2="280" y2="82" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfa-arrow)"/>
  <rect x="20" y="150" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">1 · Rechercher</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par nom ou partie de description</text>
  <line x1="240" y1="167.0" x2="280" y2="163" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfa-arrow)"/>
  <rect x="20" y="230" width="220" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui a été trouvé</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la liste, l'écran qui modifie</text>
  <line x1="240" y1="247.0" x2="280" y2="287" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfa-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">2 · Répondre</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce qu'un opérateur sait</text>
  <line x1="1000" y1="317.0" x2="920" y2="337" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfa-arrow)"/>
  <rect x="1000" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La clé</text>
  <text x="1010" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">trouvée avant tout changement</text>
  <line x1="1000" y1="377.0" x2="920" y2="375" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfa-arrow)"/>
  <rect x="1000" y="420" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="435" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Champs à remplir</text>
  <text x="1010" y="448" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chacun devient une variable</text>
  <line x1="1000" y1="437.0" x2="920" y2="413" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfa-arrow)"/>
  <rect x="1000" y="550" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="565" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">3 · Créer</text>
  <text x="1010" y="578" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">puis la boîte de l'écran</text>
  <line x1="1000" y1="567.0" x2="880" y2="572" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfa-arrow)"/>
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
