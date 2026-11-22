---
title: Constructeur de dialogue
description: "La fiche d'un écran Liberty Next, construite dans le Concepteur d'écran — trois panneaux (Ajouter un champ / Dialogue / Inspecteur) pour ajouter des champs aux onglets, régler leurs colonnes, choisir le type des onglets et ajouter des actions par onglet."
keywords: [Liberty Framework, constructeur de dialogue, constructeur visuel, ScreenVisualBuilder, palette, canevas, inspecteur, onglets, champs, glisser-déposer]
---

# Constructeur de dialogue

L'étape **Fiche** du Concepteur d'écran ouvre le **constructeur visuel** — un éditeur WYSIWYG pour le formulaire d'ajout et de modification. Le modèle de données est la même structure `ScreenDialog` stockée dans `screens.toml`, mais au lieu d'éditer du TOML on ajoute des champs aux onglets et on les règle dans un inspecteur latéral.

Un écran sans dialogue fonctionne quand même comme un tableau en lecture seule ou en édition de grille. Construire un dialogue quand l'utilisateur a besoin d'un formulaire complet pour ajouter ou modifier des lignes.

---

## Disposition à trois colonnes

<svg viewBox="0 0 1320 574" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dlb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dlb-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dlb-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dlb-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="538" rx="14" fill="url(#dlb-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
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
  <line x1="367.0" y1="106.0" x2="380.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#dlb-flow)"/>
  <rect x="381.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="389.0" y="86" width="14" height="14" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="409.0" y="97" fill="#4a9eff" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DONNÉES</text>
  <text x="389.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">customers_get</text>
  <text x="389.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 requête(s) d'enregistrem…</text>
  <line x1="510.0" y1="106.0" x2="523.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#dlb-flow)"/>
  <rect x="524.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="532.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="552.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRILLE</text>
  <text x="532.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">6 colonne(s)</text>
  <text x="532.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">3 filtre(s) · 1 vue(s)</text>
  <line x1="653.0" y1="106.0" x2="666.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#dlb-flow)"/>
  <rect x="667.0" y="78" width="129.0" height="56" rx="8" fill="rgba(50,215,75,0.10)" stroke="#4ade80" strokeWidth="1.2"/>
  <rect x="675.0" y="86" width="14" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="695.0" y="97" fill="#4ade80" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FICHE</text>
  <text x="675.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">2 onglet(s)</text>
  <text x="675.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">8 champ(s)</text>
  <line x1="796.0" y1="106.0" x2="809.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#dlb-flow)"/>
  <rect x="810.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="818.0" y="86" width="14" height="14" rx="3" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="838.0" y="97" fill="#c084fc" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIONS</text>
  <text x="818.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">1 action(s) de barre d…</text>
  <text x="818.0" y="125" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">2 dans le menu de ligne ·…</text>
  <line x1="939.0" y1="106.0" x2="952.0" y2="106.0" stroke="#475569" strokeWidth="1.3" markerEnd="url(#dlb-flow)"/>
  <rect x="953.0" y="78" width="129.0" height="56" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="961.0" y="86" width="14" height="14" rx="3" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="981.0" y="97" fill="#fb923c" fontSize="7.6" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SORTIE</text>
  <text x="961.0" y="113" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">l'export de la grille</text>
  <rect x="949" y="144" width="133" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1015.5" y="158.5" fill="#f87171" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer le dialogue</text>
  <rect x="238" y="174" width="190" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="192" fill="#94a3b8" fontSize="8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">AJOUTER UN CHAMP</text>
  <text x="416" y="192" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="248" y="202" width="139" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="249" y="203" width="77" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="287.5" y="215.5" fill="#4a9eff" fontSize="8.2" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Dictionnaire</text>
  <line x1="327" y1="207" x2="327" y2="217" stroke="#334155" strokeWidth="1"/>
  <text x="357.0" y="215.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="248" y="230" width="170" height="18" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="257" y="242.3" fill="#475569" fontSize="8.2" fontFamily="system-ui, sans-serif">⌕ filtrer…</text>
  <text x="254" y="268" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="266" y="268" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">ACTIVE</text>
  <text x="414" y="268" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">Actif</text>
  <text x="254" y="290" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="266" y="290" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">ADDRESS</text>
  <text x="414" y="290" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">Adresse</text>
  <text x="254" y="312" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="266" y="312" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">CITY</text>
  <text x="414" y="312" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">Ville</text>
  <text x="254" y="334" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="266" y="334" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">COUNTRY</text>
  <text x="414" y="334" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">Pays</text>
  <text x="254" y="356" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="266" y="356" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">CREDIT_LIMIT</text>
  <text x="414" y="356" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">Encours</text>
  <text x="254" y="378" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="266" y="378" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <text x="414" y="378" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">Client</text>
  <text x="254" y="400" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="266" y="400" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">EMAIL</text>
  <text x="414" y="400" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">E-mail</text>
  <text x="254" y="422" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="266" y="422" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">NAME</text>
  <text x="414" y="422" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">Nom</text>
  <text x="254" y="444" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="266" y="444" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">STATUS</text>
  <text x="414" y="444" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">Statut</text>
  <text x="248" y="478" fill="#64748b" fontSize="7.6" fontFamily="system-ui, sans-serif">Cliquez sur un élément pour l'ajouter</text>
  <text x="248" y="490" fill="#64748b" fontSize="7.6" fontFamily="system-ui, sans-serif">à l'onglet courant.</text>
  <rect x="440" y="174" width="410" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="452" y="192" fill="#94a3b8" fontSize="8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DIALOGUE</text>
  <text x="838" y="192" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">cols: 2 · fields: 4</text>
  <rect x="452" y="202" width="80" height="22" rx="5" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="492.0" y="216.5" fill="#4a9eff" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">≋ Général · 4</text>
  <rect x="536" y="202" width="80" height="22" rx="5" fill="transparent" stroke="transparent" strokeWidth="1"/>
  <text x="576.0" y="216.5" fill="#cbd5e1" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">≋ Adresse · 4</text>
  <rect x="620" y="202" width="109" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="674.5" y="216.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un onglet</text>
  <line x1="452" y1="232" x2="838" y2="232" stroke="#1f2937" strokeWidth="1"/>
  <rect x="452" y="240" width="386" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="462" y="256" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">›  Paramètres de l'onglet</text>
  <rect x="798" y="244.5" width="30" height="15" rx="4" fill="rgba(255,255,255,0.05)" stroke="#475569" strokeWidth="1"/>
  <text x="813.0" y="255.3" fill="#94a3b8" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">form</text>
  <rect x="452.0" y="274" width="188.0" height="66" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="462.0" y="290" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">#  Client</text>
  <rect x="462.0" y="297" width="168.0" height="18" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="470.0" y="309.5" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">123</text>
  <text x="462.0" y="330" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <rect x="522.56" y="320" width="25" height="15" rx="4" fill="rgba(50,215,75,0.12)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="535.06" y="330.8" fill="#4ade80" fontSize="7.4" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">clé</text>
  <rect x="650.0" y="274" width="188.0" height="66" rx="7" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="660.0" y="290" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">≡  Nom</text>
  <rect x="660.0" y="297" width="168.0" height="18" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="668.0" y="309.5" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">…</text>
  <text x="660.0" y="330" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">NAME</text>
  <rect x="452.0" y="348" width="188.0" height="66" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="462.0" y="364" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">≡  Pays</text>
  <rect x="462.0" y="371" width="168.0" height="18" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="470.0" y="383.5" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">…</text>
  <text x="462.0" y="404" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">COUNTRY</text>
  <rect x="650.0" y="348" width="188.0" height="66" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="660.0" y="364" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">⌕  Statut</text>
  <rect x="660.0" y="371" width="168.0" height="18" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="668.0" y="383.5" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">lookup: get_status</text>
  <text x="660.0" y="404" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">STATUS</text>
  <rect x="452" y="422" width="188.0" height="30" rx="7" fill="transparent" stroke="#475569" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="546.0" y="441" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un champ</text>
  <rect x="862" y="174" width="220" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="874" y="192" fill="#94a3b8" fontSize="8" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">INSPECTEUR</text>
  <text x="1070" y="192" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">›</text>
  <text x="874" y="210" fill="#4a9eff" fontSize="8.4" fontFamily="system-ui, sans-serif">Titre du dialogue</text>
  <text x="955.9680000000001" y="210" fill="#e2e8f0" fontSize="8.4" fontFamily="system-ui, sans-serif">›  NAME</text>
  <line x1="872" y1="218" x2="1072" y2="218" stroke="#1f2937" strokeWidth="1"/>
  <text x="874" y="234" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">▤  NAME</text>
  <text x="874" y="248" fill="#64748b" fontSize="7.6" fontFamily="system-ui, sans-serif">Ce champ affiche sa colonne.</text>
  <line x1="872" y1="258" x2="1072" y2="258" stroke="#1f2937" strokeWidth="1"/>
  <text x="874" y="274" fill="#e2e8f0" fontSize="8.6" fontWeight="700" fontFamily="system-ui, sans-serif">≋  Configuration de la colonne</text>
  <rect x="872" y="282" width="50" height="19" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="897.0" y="294.8" fill="#4a9eff" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <text x="951.0" y="294.8" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Display</text>
  <text x="1003.0" y="294.8" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Filter</text>
  <text x="892.5" y="317.8" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Rules</text>
  <text x="935.5" y="317.8" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Edit</text>
  <text x="985.0" y="317.8" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">Defaults</text>
  <text x="874" y="342" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">NAME ∗</text>
  <rect x="874" y="347" width="196" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="883" y="361.3" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">NAME</text>
  <text x="874" y="386" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DD</text>
  <rect x="874" y="391" width="196" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="883" y="405.3" fill="#cbd5e1" fontSize="8.6" fontFamily="system-ui, sans-serif">(default)</text>
  <text x="1058" y="405.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="874" y="430" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">KEY</text>
  <rect x="874" y="439" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="891" y="448" fill="#cbd5e1" fontSize="8.4" fontFamily="system-ui, sans-serif">disabled</text>
  <line x1="220" y1="516" x2="1100" y2="516" stroke="#1f2937" strokeWidth="1"/>
  <rect x="990" y="526" width="92" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1036.0" y="540.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="911" y="526" width="71" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="946.5" y="540.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="20" y="178" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="193" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglets de la fiche</text>
  <text x="30" y="206" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">+ onglet ; glisser une carte</text>
  <line x1="200" y1="195.0" x2="454" y2="213" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dlb-arrow)"/>
  <rect x="20" y="232" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres de l'onglet</text>
  <text x="30" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">libellé, type, colonnes, actions</text>
  <line x1="200" y1="249.0" x2="454" y2="256" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dlb-arrow)"/>
  <rect x="20" y="304" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="319" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter un champ</text>
  <text x="30" y="332" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">entrées du dictionnaire ou colonnes</text>
  <line x1="200" y1="321.0" x2="250" y2="324" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dlb-arrow)"/>
  <rect x="20" y="404" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="419" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic pour ajouter</text>
  <text x="30" y="432" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à l'onglet courant</text>
  <line x1="200" y1="421.0" x2="254" y2="434" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dlb-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Supprimer le dialogue</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'écran redevient une grille</text>
  <line x1="1120" y1="177.0" x2="1070" y2="174" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dlb-arrow)"/>
  <rect x="1120" y="204" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="219" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Inspecteur</text>
  <text x="1130" y="232" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le champ choisi et sa colonne</text>
  <line x1="1120" y1="221.0" x2="1072" y2="234" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dlb-arrow)"/>
  <rect x="1120" y="284" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="299" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Mêmes réglages que la grille</text>
  <text x="1130" y="312" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Display ▸ Colspan pour la largeur</text>
  <line x1="1120" y1="301.0" x2="1072" y2="292" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dlb-arrow)"/>
  <rect x="1120" y="424" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="439" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Carte sélectionnée</text>
  <text x="1130" y="452" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sa colonne s'ouvre à droite</text>
  <line x1="1120" y1="441.0" x2="858" y2="314" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dlb-arrow)"/>
</svg>

| Région | Rôle |
|---|---|
| **Ajouter un champ** *(à gauche)* | La source des nouveaux champs. Deux sous-onglets : **Dictionnaire** (chaque entrée disponible dans la portée du connecteur courant) et **Colonnes** (chaque colonne que renvoie la requête de lecture). Un filtre réduit la liste ; un clic sur une entrée ajoute une carte de champ à l'onglet courant. Le panneau se replie par sa flèche. |
| **Dialogue** *(au centre)* | La barre d'onglets en haut — chaque onglet avec son nombre de champs, **＋ Ajouter un onglet** au bout —, puis **Paramètres de l'onglet** (replié : libellé, type d'onglet, colonnes, actions de l'onglet) et les cartes de champ. Chaque carte affiche le libellé, un aperçu de la saisie (un nombre, une date, un lookup et sa requête…), le nom de la colonne et sa marque *clé* ; la carte choisie a une bordure bleue. L'en-tête compte les colonnes de la grille et les champs de l'onglet. Un groupe **Champs masqués** en bas rassemble les champs avec `hidden = true`. |
| **Inspecteur** *(à droite)* | Le champ choisi et sa **Configuration de la colonne** — voir l'étape 3 —, ou, sans champ choisi, le titre du dialogue et ses événements. Il se replie par sa flèche. |

**Supprimer le dialogue**, au-dessus des panneaux, retire toute la fiche : l'écran redevient un tableau en lecture seule ou en édition de grille.

---

## Construire de zéro

### Étape 1 — Ouvrir l'étape Fiche

La première fois, le canevas est vide avec un bouton *Créer le dialogue*. Cliquer dessus pour amorcer `dialog.tabs = [{id: 'general', label: 'Général', fields: []}]` et révéler la disposition à trois colonnes.

### Étape 2 — Ajouter les champs du premier onglet

Deux moyens :

| Méthode | Quand |
|---|---|
| **Cliquer sur une entrée du Dictionnaire ou une colonne dans Ajouter un champ** | Ajoute une carte de champ à la fin de l'onglet courant. Une entrée du dictionnaire renseigne `dd`, le champ reprend donc la règle de l'entrée ; une colonne ajoute un champ simple lié à la requête de lecture. |
| **Cliquer sur + Ajouter un champ en fin d'onglet** | Demande le nom du champ (une colonne de la requête de lecture) et l'ajoute. |

Le champ ajouté devient la carte sélectionnée ; l'Inspecteur bascule dessus. Une carte se fait glisser pour changer de place dans la grille. Mettre `colspan` pour l'élargir (la grille fait par défaut 2 colonnes ; un champ `colspan = 2` remplit la ligne).

### Étape 3 — Régler les propriétés du champ

Un champ de dialogue affiche une colonne de l'écran, et c'est la colonne qui porte tous les comportements. L'Inspecteur présente :

| Section | Contenu |
|---|---|
| **Fil d'Ariane** | *Titre du dialogue › CHAMP* — un clic sur *Titre du dialogue* revient aux réglages du dialogue lui-même. |
| **Champ** | Le nom du champ et, s'il y a plusieurs onglets de formulaire, l'**onglet** où il se trouve. |
| **Configuration de la colonne** | L'éditeur complet de la colonne — le même que dans Grille → Colonnes : libellé, format, entrée du dictionnaire (`dd`), règle et liaisons du lookup, indicateurs obligatoire / lecture seule, conditions, valeurs par défaut, et largeur du champ sur la grille du dialogue (**Display ▸ Colspan**). Une modification vaut aussi pour la grille. |
| **Événements** | Les hooks câblés sur l'écran, par événement, pour information — ils se modifient à l'étape **Actions**. |
| **Supprimer le champ** | Retire le champ de l'onglet ; la colonne reste sur l'écran. |


Chaque réglage est décrit dans [Colonnes](./columns.md), les conditions dans [Champs conditionnels](./conditional-fields.md).

### Étape 4 — Ajouter des onglets

Cliquer sur **＋ Ajouter un onglet** au bout de la barre d'onglets ; l'identifiant de l'onglet est demandé. Le nouvel onglet est vide ; y ajouter des champs depuis **Ajouter un champ**. Patrons d'onglets courants :

| Nom d'onglet | Contenu |
|---|---|
| **Général** | Identité + champs les plus utilisés. |
| **Audit** | Créé le, créé par, mis à jour le, mis à jour par — souvent `hide_on_add` pour masquer l'onglet à l'insertion. |
| **Notes** | Champs en texte libre. |
| **Adresse** | Un groupe de champs liés (rue, ville, code postal, pays). |

Deux indicateurs sur chaque onglet (dans `screens.toml`) contrôlent la visibilité par mode :

| Indicateur | Effet |
|---|---|
| **`hide_on_add`** | L'onglet disparaît à l'ajout d'une nouvelle ligne. |
| **`hide_on_edit`** | L'onglet disparaît à la modification d'une ligne existante. |

### Étape 5 — Réorganiser les champs

Glisser une carte de champ dans le même onglet pour la réorganiser. Glisser vers un onglet différent pour la déplacer entre onglets. Le glisser est natif HTML5 — la cible de dépôt se met en évidence au survol. Quand le glisser est malaisé, sélectionnez le champ et utilisez le sélecteur **Onglet** de l'Inspecteur pour le déplacer vers un autre onglet de formulaire — le champ se pose à la fin de l'onglet cible et reste sélectionné.

### Étape 6 — Masquer un champ

Deux moyens :

| Méthode | Effet |
|---|---|
| Cocher **hidden** dans la configuration de la colonne (Display). | La carte passe dans le groupe **Champs masqués** en bas du panneau Dialogue. Le champ reste lié à l'enregistrement. |
| Supprimer le champ de l'onglet. | Le champ est retiré du dialogue entièrement. La colonne reste sur l'écran ; elle ne remonte simplement pas dans le formulaire. |

Le patron « masquer mais conserver » est utile pour les colonnes techniques que le dialogue doit soumettre (ex. un horodatage d'audit) mais que l'utilisateur ne doit pas voir.

---

## Les trois types d'onglet

Les onglets ne sont pas tous identiques. Trois types résident sous `dialog.tabs`, discriminés par le champ `type` :

| Type | Finalité |
|---|---|
| **`form`** *(défaut)* | Une grille de champs éditables — le cas décrit ci-dessus. |
| **`nested_form`** | Le formulaire d'un autre écran existant (`form_screen`), affiché dans l'onglet ; les `param_binds` transmettent les valeurs du parent (en général sa clé) aux requêtes de ce formulaire, enregistré avec le bouton **Enregistrer** du parent. Voir [Onglets imbriqués](./nested-tabs.md). |
| **`nested_table`** | Une TableView de lignes liées intégrée dans l'onglet. Affiche la grille d'un autre écran restreinte à la clé primaire du parent. Voir [Onglets imbriqués](./nested-tabs.md). |

Le constructeur visuel affiche la même barre d'onglets pour les trois — un onglet `nested_form` ou `nested_table` présente le choix de l'écran cible et ses `param_binds`.

---

## Actions par onglet

Chaque onglet peut porter sa propre liste d'actions — des boutons affichés dans l'onglet, réglés sous **Paramètres de l'onglet → Actions de l'onglet** (**Ajouter une action**). Patrons courants :

| Patron | Pourquoi par onglet |
|---|---|
| Un bouton *Recalculer* sur un onglet de calculs. | Déclenche une procédure stockée uniquement quand l'utilisateur regarde ces champs. |
| Un bouton *Tester le webhook* sur un onglet de notification. | N'a de sens que dans ce contexte. |
| Un bouton *Rafraîchir depuis la source* sur un onglet de synchronisation. | Récupère à nouveau les données affichées par l'onglet. |

L'éditeur d'action s'ouvre dans l'**Inspecteur** quand on clique sur la ligne d'une action — l'Inspecteur ne montre qu'une chose à la fois (un champ OU une action). Sélectionner un champ efface la sélection d'action et inversement.

Voir [Actions et cycle de vie](./actions-and-lifecycle.md) pour les types d'actions complets.

---

## Titre du dialogue

Le titre du dialogue figure en haut de la modale à son ouverture. Il se règle dans l'Inspecteur quand aucun champ n'est choisi, sous **Titre du dialogue** ; vide, il reprend le `label` de l'écran (*Par défaut, le libellé de l'écran*), puis `id`. Dessous, **Événements** liste les hooks câblés sur l'écran, pour information.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| Champ sur un onglet référençant une colonne absente de la requête de lecture. | Le dialogue affiche le champ mais la valeur est toujours vide, et l'enregistrement n'envoie aucune valeur pour lui. | Ajouter la colonne à la requête de lecture ou retirer le champ de l'onglet. |
| `lookup_param_binds` référence un champ qui n'est pas sur le même onglet. | La liaison se résout à NULL à la soumission. | Déplacer le champ source sur le même onglet ou utiliser une liaison entre onglets (le moteur lit l'état global du formulaire, mais la liste déroulante Param de l'inspecteur ne liste que les champs visibles sur l'onglet courant). |
| `colspan = 3` sur une grille à 2 colonnes. | Le champ déborde ; la mise en page casse. | Plafonner `colspan` à la valeur `cols` de l'onglet. |
| Deux champs avec le même `name` sur le même onglet. | L'enregistrement envoie deux valeurs pour la même colonne ; la seconde gagne. | Le `name` de chaque champ doit être unique au sein du dialogue. |
| `hide_on_add = true` ET `hide_on_edit = true`. | L'onglet n'apparaît jamais. | Désactiver l'un des deux ou supprimer l'onglet. |

---

## Étapes suivantes

- [Champs conditionnels](./conditional-fields.md) — faire apparaître / rendre obligatoire / verrouiller un champ uniquement sous certaines conditions de formulaire.
- [Actions et cycle de vie](./actions-and-lifecycle.md) — câbler on_load / on_save / on_cancel pour étendre le comportement du dialogue.
- [Onglets imbriqués](./nested-tabs.md) — intégrer un formulaire d'enregistrement enfant ou une grille de lignes liées.
