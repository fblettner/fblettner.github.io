---
title: Onglets imbriqués
description: "Intégrer un formulaire d'enregistrement enfant (nested_form) ou une grille de lignes liées (nested_table) dans un onglet de dialogue — même dialogue, plusieurs sources de données."
keywords: [Liberty Framework, onglets imbriqués, nested_form, nested_table, enregistrement enfant, lignes liées, ParamBind, dialogue]
---

# Onglets imbriqués

Un dialogue avec tous ses champs sur un seul formulaire couvre le cas *mono-ligne*. Quand une ligne a des **données liées** — un client avec plusieurs adresses, un utilisateur avec des paramètres par application, une commande avec des lignes de poste — on intègre ces données liées directement dans le dialogue comme un onglet imbriqué.

Deux variantes :

| Type d'onglet | Ce qu'il affiche | Quand |
|---|---|---|
| **`nested_form`** | Le formulaire d'un autre écran, pour zéro ou une ligne liée, enregistré avec le parent. | Quand la table liée a **au plus une** ligne par parent (un-vers-un ou zéro-vers-un). |
| **`nested_table`** | Une TableView complète des lignes liées, intégrée en ligne — affiche la grille d'un autre écran restreinte à la clé du parent. | Quand la table liée a **plusieurs** lignes par parent (un-vers-plusieurs). |

Les deux s'attachent au dialogue comme n'importe quel autre onglet ; l'utilisateur clique entre eux sans quitter le formulaire.

---

## Quand choisir lequel

| Patron | Choisir |
|---|---|
| Un client → au plus une adresse de facturation. | `nested_form`. |
| Un client → plusieurs commandes. | `nested_table`. |
| Une application → ses paramètres spécifiques JD Edwards (zéro ou une ligne). | `nested_form`. |
| Un projet → ses lignes de poste. | `nested_table`. |
| Un employé → son affectation actuelle (une ligne). | `nested_form`. |
| Un employé → l'historique de ses affectations. | `nested_table`. |

Le validateur `_check` du schéma impose l'unicité des identifiants d'onglet ; sinon les deux types peuvent coexister dans le même dialogue — un dialogue *Client* avec un `nested_form` sur *Facturation* et un `nested_table` sur *Commandes* est une forme naturelle.

---

## nested_form — un formulaire d'enregistrement enfant

Un onglet `nested_form` affiche, dans le dialogue, le **formulaire d'un autre écran existant**. C'est cet écran qui porte les requêtes de lecture, de mise à jour et d'insertion ainsi que les champs ; l'onglet indique seulement l'écran à réutiliser et la façon de lui transmettre les valeurs du parent.

### Champs

| Champ | Rôle |
|---|---|
| **`form_screen`** *(obligatoire)* | L'identifiant de l'écran dont le formulaire est réutilisé. |
| **`connector`** | Le connecteur de cet écran. Vide = le connecteur de l'écran parent. |
| **`param_binds`** | Lie les valeurs du parent aux requêtes de l'écran réutilisé — en général `CUSTOMER_ID ← CUSTOMER_ID`. |
| **`label`**, **`l`**, **`hide_on_add`**, **`hide_on_edit`**, **`actions`** | Comme sur tout onglet — voir [Paramètres de l'onglet](./dialog-builder.md#tab-settings). |

### Comportement

1. **Modification d'une ligne parent** — la requête de lecture de l'écran réutilisé s'exécute avec les valeurs liées. Une ligne trouvée s'affiche en modification ; sinon le formulaire démarre vide.
2. **Ajout d'une ligne parent** — le formulaire démarre vide (le parent n'a pas encore de clé).
3. **Enregistrement** — le formulaire imbriqué est enregistré par le bouton **Enregistrer** du parent : mise à jour si une ligne avait été chargée, insertion sinon — seulement si l'utilisateur a saisi quelque chose. À l'insertion, les liaisons reçoivent la nouvelle clé du parent, y compris une clé attribuée par une séquence.
4. **Duplication du parent** — la ligne imbriquée est insérée à nouveau pour la copie.

Les champs masqués par leurs conditions ne sont pas écrits, et les colonnes clés liées prennent toujours les valeurs du parent.

### Cas d'usage — adresse de facturation

Un dialogue *Client* avec un onglet *Facturation* qui réutilise l'écran `billing_address` (ses requêtes de lecture, de mise à jour et d'insertion portent sur `CUSTOMER_ID`) :

```toml
[[screens.crm.customers.dialog.tabs]]
id          = "billing"
label       = "Facturation"
type        = "nested_form"
form_screen = "billing_address"
param_binds = [{ param = "CUSTOMER_ID", source = "CUSTOMER_ID" }]
```

Pour modifier les champs de facturation, il suffit de modifier l'écran `billing_address` : tous les dialogues qui le réutilisent suivent.

---

## nested_table — une grille de lignes liées

Un onglet `nested_table` intègre la TableView d'un autre écran en ligne. Pas de nouveaux champs — la grille complète + le dialogue de l'écran cible s'affichent à l'intérieur de l'onglet, restreints à la clé du parent.

<svg viewBox="0 0 1320 574" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nst-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nst-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nst-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nst-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="538" rx="14" fill="url(#nst-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Concepteur d'écran ·</text>
  <text x="367.648" y="46" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">[screens.crm.customers]</text>
  <rect x="1011" y="32" width="69" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.5" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="981" y="32" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="993.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤡</text>
  <line x1="220" y1="64" x2="1100" y2="64" stroke="#1f2937" strokeWidth="1"/>
  <rect x="238.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="246.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="266.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QU'IL EST</text>
  <text x="246.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Clients</text>
  <line x1="367.0" y1="106.0" x2="380.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#nst-flow)"/>
  <rect x="381.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="389.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="409.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DONNÉES</text>
  <text x="389.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="389.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 requête(s) d'enregistrem…</text>
  <line x1="510.0" y1="106.0" x2="523.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#nst-flow)"/>
  <rect x="524.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="532.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="552.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRILLE</text>
  <text x="532.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">6 colonne(s)</text>
  <text x="532.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 filtre(s) · 1 vue(s)</text>
  <line x1="653.0" y1="106.0" x2="666.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#nst-flow)"/>
  <rect x="667.0" y="78" width="129.0" height="56" rx="8" fill="rgba(50,215,75,0.10)" stroke="#4ade80" strokeWidth="1.2"/>
  <rect x="675.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="695.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FICHE</text>
  <text x="675.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">2 onglet(s)</text>
  <text x="675.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">8 champ(s)</text>
  <line x1="796.0" y1="106.0" x2="809.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#nst-flow)"/>
  <rect x="810.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="818.0" y="86" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="838.0" y="97" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="818.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">1 action(s) de barre d…</text>
  <text x="818.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">2 dans le menu de ligne ·…</text>
  <line x1="939.0" y1="106.0" x2="952.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#nst-flow)"/>
  <rect x="953.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="961.0" y="86" width="14" height="14" rx="3" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="981.0" y="97" fill="#fb923c" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SORTIE</text>
  <text x="961.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">l'export de la grille</text>
  <rect x="238" y="174" width="632" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="192" fill="#94a3b8" fontSize="8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DIALOGUE</text>
  <text x="858" y="192" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">cols: 2 · fields: 0</text>
  <rect x="250" y="202" width="80" height="22" rx="5" fill="transparent" stroke="transparent" strokeWidth="1"/>
  <text x="290.0" y="216.5" fill="#cbd5e1" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">≋ Général · 6</text>
  <rect x="334" y="202" width="66" height="22" rx="5" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="367.0" y="216.5" fill="#4a9eff" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">≋ Affaires</text>
  <rect x="404" y="202" width="109" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="458.5" y="216.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un onglet</text>
  <line x1="250" y1="232" x2="858" y2="232" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="240" width="608" height="228" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="256" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">▾  Paramètres de l'onglet</text>
  <rect x="778" y="244.5" width="68" height="15" rx="4" fill="rgba(255,255,255,0.05)" stroke="#475569" strokeWidth="1"/>
  <text x="812.0" y="255.3" fill="#94a3b8" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">nested_table</text>
  <text x="262" y="278" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LIBELLÉ DE L'ONGLET</text>
  <rect x="262" y="283" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="271" y="297.3" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Affaires</text>
  <text x="414" y="278" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TYPE D'ONGLET</text>
  <rect x="414" y="283" width="432" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="423" y="297.3" fill="#cbd5e1" fontSize="8.4" fontFamily="system-ui, sans-serif">nested_table  Table imbriquée — un TableView de lignes liées</text>
  <text x="834" y="297.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="262" y="322" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ÉCRAN CIBLE ∗</text>
  <rect x="262" y="327" width="286.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="271" y="341.3" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">deals  Affaires</text>
  <text x="536.0" y="341.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="560.0" y="322" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONNECTEUR</text>
  <rect x="560.0" y="327" width="286.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="569.0" y="341.3" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">crm</text>
  <text x="834.0" y="341.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="262" y="366" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LIAISONS DE PARAMÈTRES — COLONNE PARENT → PARAMÈTRE DE LA REQUÊTE IMBRIQUÉE</text>
  <rect x="262" y="372" width="584" height="60" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="270" y="379" width="266.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="279" y="393.3" fill="#cbd5e1" fontSize="8.4" fontFamily="system-ui, sans-serif">CUSTOMER_ID  Client</text>
  <text x="524.0" y="393.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="544.0" y="394" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <rect x="558.0" y="379" width="252.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="567.0" y="393.3" fill="#cbd5e1" fontSize="8.4" fontFamily="system-ui, sans-serif">CUSTOMER_ID</text>
  <text x="798.0" y="393.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="820" y="379" width="20" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="830.0" y="393.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="270" y="406" width="120" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="330.0" y="419.5" fill="#94a3b8" fontSize="8.4" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une liaison</text>
  <text x="262" y="450" fill="#e2e8f0" fontSize="8.6" fontWeight="700" fontFamily="system-ui, sans-serif">Actions de l'onglet</text>
  <rect x="367.504" y="439" width="113" height="19" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="424.004" y="452.0" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une action</text>
  <text x="252" y="490" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Un onglet table imbriquée intègre le TableView d'un autre écran — ses lignes et colonnes viennent de cet écran.</text>
  <rect x="882" y="174" width="200" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="894" y="192" fill="#94a3b8" fontSize="8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">INSPECTEUR</text>
  <text x="894" y="210" fill="#e2e8f0" fontSize="8.4" fontFamily="system-ui, sans-serif">Titre du dialogue</text>
  <line x1="892" y1="218" x2="1072" y2="218" stroke="#1f2937" strokeWidth="1"/>
  <text x="894" y="244" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Sélectionnez un champ sur le canevas</text>
  <text x="894" y="256" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">pour modifier ses propriétés.</text>
  <line x1="220" y1="516" x2="1100" y2="516" stroke="#1f2937" strokeWidth="1"/>
  <rect x="990" y="526" width="92" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1036.0" y="540.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="911" y="526" width="71" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="946.5" y="540.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="20" y="144" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="159" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un onglet par ensemble lié</text>
  <text x="30" y="172" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">+ onglet, puis son type</text>
  <line x1="200" y1="161.0" x2="334" y2="213" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nst-arrow)"/>
  <rect x="20" y="310" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="325" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Écran cible</text>
  <text x="30" y="338" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sa grille, son dialogue, son menu</text>
  <line x1="200" y1="327.0" x2="262" y2="338" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nst-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Liaisons de paramètres</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">colonne parent → :param</text>
  <line x1="200" y1="397.0" x2="270" y2="390" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nst-arrow)"/>
  <rect x="20" y="436" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="451" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions de l'onglet</text>
  <text x="30" y="464" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">boutons dans cet onglet</text>
  <line x1="200" y1="453.0" x2="262" y2="447" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nst-arrow)"/>
  <rect x="1120" y="270" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type d'onglet</text>
  <text x="1130" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">form · nested_form · nested_table</text>
  <line x1="1120" y1="287.0" x2="840" y2="294" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nst-arrow)"/>
  <rect x="1120" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connecteur</text>
  <text x="1130" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vide = celui du parent</text>
  <line x1="1120" y1="377.0" x2="830" y2="338" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nst-arrow)"/>
</svg>

Dans le Concepteur d'écran, étape **Fiche** : **＋ Ajouter un onglet**, puis ouvrir **Paramètres de l'onglet** et choisir **Type d'onglet** = *Table imbriquée*. Le panneau demande alors l'**Écran cible**, son **Connecteur** et les **Liaisons de paramètres — colonne parent → paramètre de la requête imbriquée** (**Ajouter une liaison** pour chacune) ; **Actions de l'onglet** ajoute des boutons dans l'onglet.

### Champs

| Champ | Notes |
|---|---|
| **`connector`** | Connecteur qui héberge l'écran cible. Vide = connecteur du parent. |
| **`screen`** *(obligatoire)* | L'identifiant de l'écran cible. Le sélecteur s'alimente depuis la liste d'écrans du même connecteur. |
| **`param_binds`** | Lie les colonnes du parent aux paramètres `:placeholder` de la `read_query` de l'écran cible. |

### Comportement

L'onglet affiche l'écran cible — sa grille, ses filtres, son dialogue d'ajout / modification, son menu contextuel ligne — exactement comme il le ferait sur sa propre page, mais **restreint** par les paramètres liés. L'utilisateur peut :

- Parcourir les lignes liées dans la grille intégrée.
- Ouvrir le bouton *＋ Ajouter* pour créer une nouvelle ligne liée — les colonnes parent liées pré-remplissent les colonnes correspondantes du dialogue d'ajout.
- Faire un clic droit pour le menu contextuel ligne de l'écran cible.
- Cliquer sur le bouton d'édition en ligne pour ouvrir le dialogue de l'écran cible et modifier une ligne liée.

### Cas d'usage — client + affaires

Un dialogue *Client* avec un onglet *Affaires* affichant chaque affaire pour ce client :

```toml
[[screens.crm.customers.dialog.tabs]]
id = "deals"
label = "Affaires"
type = "nested_table"
screen = "deals"

[[screens.crm.customers.dialog.tabs.param_binds]]
param = "CUSTOMER_ID"
source = "CUSTOMER_ID"
```

L'onglet *Affaires* intègre la TableView de l'écran `deals`, filtrée sur le client courant. Quand l'utilisateur clique sur *＋ Ajouter une affaire* dans la grille intégrée, le `CUSTOMER_ID` de la nouvelle affaire est pré-rempli avec la valeur du parent.

### Ce qui s'affiche à l'intérieur

La TableView intégrée porte tout ce que l'écran cible possède :

| Élément | Hérité |
|---|---|
| Colonnes + leurs indications | ✓ |
| Filtres | ✓ — l'utilisateur peut restreindre davantage dans la portée du parent. |
| Dialogue (ajout / modification) | ✓ |
| Actions (barre d'outils / menu ligne / hooks) | ✓ |
| Configuration d'export | ✓ |

L'écran cible existe indépendamment — on peut y naviguer comme page autonome ET l'intégrer comme onglet imbriqué. La même configuration pilote les deux surfaces.

---

## Quand imbriquer vs. quand naviguer

Une décision courante : les données liées doivent-elles être **intégrées** dans le dialogue du parent, ou s'ouvrir comme un **écran séparé** au clic sur la ligne ?

| Choisir l'intégration | Choisir la navigation au clic |
|---|---|
| L'utilisateur veut toujours voir les données liées aux côtés du parent (flux mono-écran). | Les données liées ne sont qu'occasionnellement pertinentes ; les ouvrir à la demande maintient le dialogue parent focalisé. |
| La table liée est petite (quelques colonnes, peu de lignes). | La table liée est grande ; l'intégration encombre le dialogue. |
| Les utilisateurs modifient les deux en même temps. | Les utilisateurs modifient typiquement l'un puis l'autre en étapes séparées. |
| | Plusieurs écrans voisins descendent vers la même cible — la définir une fois comme écran autonome est plus propre. |

L'intégration est le choix à forte affinité pour les **relations obligatoires** (un client avec au moins une adresse) ; le clic est le bon choix pour les **données larges** (un client avec des centaines de commandes historiques).

---

## Permissions sur les données imbriquées

Les onglets imbriqués honorent le **même modèle de permissions** que les écrans autonomes — la permission `sql:<connector>:<query>` de la requête sous-jacente est vérifiée. Un utilisateur qui peut voir le dialogue parent mais qui n'a pas la permission sur la requête de lecture imbriquée voit l'onglet imbriqué vide / en lecture seule / masqué selon la permission manquante :

| Permission manquante | Effet sur l'onglet imbriqué |
|---|---|
| `sql:<connector>:<nested_read>` | L'onglet est entièrement masqué. |
| `sql:<connector>:<nested_update>` | Le formulaire est en lecture seule. |
| `sql:<connector>:<nested_insert>` | Le bouton *＋ Ajouter* est masqué. |
| `sql:<connector>:<nested_delete>` | La suppression de ligne est désactivée. |

Cela permet de construire des dialogues qui révèlent progressivement les données selon le rôle de l'utilisateur — même définition d'écran, surfaces différentes par utilisateur.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| La lecture de l'écran réutilisé renvoie plus d'une ligne. | Le formulaire n'affiche que la première. | Resserrer les liaisons pour que la lecture renvoie 0 ou 1 ligne ; utiliser `nested_table` pour une relation un-vers-plusieurs. |
| `nested_table` sans `param_binds`. | La grille intégrée affiche **toutes** les lignes de la cible — y compris les lignes non liées. | Toujours lier au moins les colonnes clé étrangère du parent. |
| L'écran réutilisé n'a pas de requête d'insertion et aucune ligne n'existe. | Rien n'est créé à l'enregistrement. | Renseigner la requête d'insertion de l'écran réutilisé. |
| `nested_table` pointant sur un écran d'un autre connecteur + surcharge `connector` manquante. | Le runtime tente de résoudre l'écran cible sur le connecteur du parent et échoue. | Renseigner `connector` explicitement sur le connecteur de l'écran cible. |
| Deux onglets imbriqués avec le même id. | La validation à l'enregistrement échoue (« identifiant d'onglet de dialogue en double »). | Choisir des identifiants uniques par dialogue. |

---

## Étapes suivantes

- [Concepts → Écrans](./overview.md) — la référence approfondie (schéma complet, cycle de vie, validateurs).
- [Actions et cycle de vie](./actions-and-lifecycle.md) — câbler le `on_save` du parent pour déclencher des écritures sur les données imbriquées.
- [Liaison de paramètres](../queries/parameter-binding.md) — la référence complète des ParamBind, dont `#LOGIN_USER#` / `#SYSDATE#`.
