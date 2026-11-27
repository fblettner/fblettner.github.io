---
title: Explorateur de données
description: "L'analyse libre des données de Nomasx-1 dans l'explorateur de données : trois modèles — Sécurité, Séparation des tâches, Conformité des licences — chacun avec ses analyses partagées et son tableau de bord prêts à l'emploi."
keywords: [Nomasx-1, explorateur de données, analyse, tableau croisé, sécurité, utilisateurs, rôles, séparation des tâches, SoD, conflits, conformité des licences, exposition financière, tableau de bord]
---

# Explorateur de données

L'**explorateur de données** permet aux équipes conformité et licences d'analyser elles-mêmes les données de Nomasx-1, sans nouvel écran : lignes, mesures, filtres et période choisis dans une liste de champs, présentés en tableau, en croisé, en graphique ou en KPI, puis enregistrés, partagés, réunis en tableau de bord et exportés en Excel ou en PDF. Il lit les données collectées sur **toutes les applications connectées**, avec les mêmes droits que les écrans.

Le fonctionnement de l'explorateur — champs, étagères, vues, exploration du détail, champs calculés — est décrit dans la [documentation de Liberty Next](../framework/explorer/analysis.md). Cette page présente ce que livre Nomasx-1.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 458" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxexp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxexp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxexp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxexp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="418" rx="14" fill="url(#nxexp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">◎</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Explorateur de données</text>
  <text x="276" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Security — The users of each application, their status and last login…</text>
  <rect x="830" y="38" width="250" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="840" y="53.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">nomasx1 · Security</text>
  <text x="1070" y="53.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="783" y="39" width="37" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="801.5" y="53.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="730" y="39" width="47" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="753.5" y="53.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="647" y="39" width="77" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="685.5" y="53.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <line x1="220" y1="78" x2="1100" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="92" width="213" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="93" width="87" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="284.5" y="107.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Analyses (11)</text>
  <line x1="329" y1="97" x2="329" y2="111" stroke="#334155" strokeWidth="1"/>
  <text x="391.0" y="107.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableaux de bord (1)</text>
  <rect x="463" y="92" width="250" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="473" y="107.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Analyses enregistrées…</text>
  <text x="703" y="107.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="723" y="93" width="82" height="22" rx="5" fill="url(#nxexp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="764.0" y="107.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">☰ Définition</text>
  <rect x="240" y="128" width="200" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="136" width="184" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="149.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">⌕ Rechercher un champ…</text>
  <text x="252" y="174" fill="#4a9eff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ User</text>
  <rect x="400" y="165" width="33" height="13" rx="6.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="416.5" y="174.7" fill="#94a3b8" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="266" y="192" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">Application ID</text>
  <text x="432" y="192" fill="#64748b" fontSize="7" textAnchor="end" fontFamily="ui-monospace, monospace">USR_APPS_ID</text>
  <text x="266" y="209" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">Utilisateur ID</text>
  <text x="432" y="209" fill="#64748b" fontSize="7" textAnchor="end" fontFamily="ui-monospace, monospace">USR_ID</text>
  <text x="266" y="226" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">Utilisateur</text>
  <text x="432" y="226" fill="#64748b" fontSize="7" textAnchor="end" fontFamily="ui-monospace, monospace">USR_NAME</text>
  <text x="266" y="243" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">Statut</text>
  <text x="432" y="243" fill="#64748b" fontSize="7" textAnchor="end" fontFamily="ui-monospace, monospace">USR_STATUS</text>
  <text x="266" y="260" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">Date de connexion</text>
  <text x="432" y="260" fill="#64748b" fontSize="7" textAnchor="end" fontFamily="ui-monospace, monospace">USR_DT_LOGIN</text>
  <text x="266" y="277" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">Dernière utilisation</text>
  <text x="432" y="277" fill="#64748b" fontSize="7" textAnchor="end" fontFamily="ui-monospace, monospace">LAST_USAGE</text>
  <text x="252" y="304" fill="#e2e8f0" fontSize="8.6" fontWeight="700" fontFamily="system-ui, sans-serif">› Profile</text>
  <rect x="400" y="295" width="33" height="13" rx="6.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="416.5" y="304.7" fill="#94a3b8" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="252" y="323" fill="#e2e8f0" fontSize="8.6" fontWeight="700" fontFamily="system-ui, sans-serif">› Application</text>
  <rect x="400" y="314" width="33" height="13" rx="6.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="416.5" y="323.7" fill="#94a3b8" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="252" y="342" fill="#e2e8f0" fontSize="8.6" fontWeight="700" fontFamily="system-ui, sans-serif">› Role assignment</text>
  <rect x="400" y="333" width="33" height="13" rx="6.5" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="416.5" y="342.7" fill="#fb923c" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..n</text>
  <text x="252" y="361" fill="#e2e8f0" fontSize="8.6" fontWeight="700" fontFamily="system-ui, sans-serif">› Role</text>
  <rect x="400" y="352" width="33" height="13" rx="6.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="416.5" y="361.7" fill="#94a3b8" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="252" y="380" fill="#e2e8f0" fontSize="8.6" fontWeight="700" fontFamily="system-ui, sans-serif">› Directory (LDAP)</text>
  <rect x="400" y="371" width="33" height="13" rx="6.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="416.5" y="380.7" fill="#94a3b8" fontSize="7" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="252" y="416" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">+ Nouveau champ calculé</text>
  <rect x="450" y="128" width="630" height="28" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="145.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VUE</text>
  <rect x="540" y="132" width="120" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="550" y="145.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">user  User</text>
  <text x="650" y="145.5" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="670" y="132" width="168" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="671" y="133" width="26" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="684.0" y="145.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <line x1="698" y1="137" x2="698" y2="147" stroke="#334155" strokeWidth="1"/>
  <text x="712.0" y="145.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <line x1="726" y1="137" x2="726" y2="147" stroke="#334155" strokeWidth="1"/>
  <text x="740.0" y="145.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥</text>
  <line x1="754" y1="137" x2="754" y2="147" stroke="#334155" strokeWidth="1"/>
  <text x="768.0" y="145.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">∿</text>
  <line x1="782" y1="137" x2="782" y2="147" stroke="#334155" strokeWidth="1"/>
  <text x="796.0" y="145.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">◔</text>
  <line x1="810" y1="137" x2="810" y2="147" stroke="#334155" strokeWidth="1"/>
  <text x="824.0" y="145.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">◠</text>
  <text x="936" y="145.5" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Top</text>
  <rect x="958" y="132" width="46" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="968" y="145.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">1000</text>
  <rect x="1010" y="132" width="64" height="20" rx="5" fill="url(#nxexp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1042.0" y="145.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="450" y="162" width="630" height="28" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="179.5" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PÉRIODE</text>
  <rect x="540" y="166" width="170" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="550" y="179.5" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">user.USR_DT_LOGIN  Date de co…</text>
  <text x="700" y="179.5" fill="#94a3b8" fontSize="8.3" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="718" y="166" width="100" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="728" y="179.5" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">▣ Toutes les dates</text>
  <text x="808" y="179.5" fill="#94a3b8" fontSize="8.3" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="450" y="196" width="630" height="28" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="213.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LIGNES</text>
  <text x="540" y="213.5" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Cliquez ou déposez un champ pour grouper dessus.</text>
  <rect x="450" y="230" width="630" height="28" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="247.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MESURES</text>
  <text x="540" y="247.5" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Cliquez ou déposez une mesure ; « + » compte les lignes.</text>
  <rect x="450" y="264" width="630" height="28" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="281.5" fill="#fb923c" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FILTRES</text>
  <text x="540" y="281.5" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Utilisez l'entonnoir d'un champ, ou déposez-en un ici.</text>
  <rect x="450" y="298" width="630" height="130" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="316" fill="#cbd5e1" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">TABLEAU</text>
  <rect x="460" y="326" width="610" height="92" rx="6" fill="none" stroke="#334155" strokeDasharray="4 4"/>
  <text x="765.0" y="376" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Ajoutez un champ depuis le volet de gauche pour commencer.</text>
  <rect x="463" y="120" width="300" height="144" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="475" y="136" fill="#4a9eff" fontSize="8.6" fontFamily="system-ui, sans-serif">Nouvelle analyse</text>
  <text x="475" y="156" fill="#e2e8f0" fontSize="8.4" fontFamily="ui-monospace, monospace">users_count</text>
  <text x="540.288" y="156" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">security · Users</text>
  <text x="475" y="176" fill="#e2e8f0" fontSize="8.4" fontFamily="ui-monospace, monospace">users_by_status</text>
  <text x="561.12" y="176" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">security · Users by status</text>
  <text x="475" y="196" fill="#e2e8f0" fontSize="8.4" fontFamily="ui-monospace, monospace">users_by_application</text>
  <text x="587.16" y="196" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">security · Users by application</text>
  <text x="475" y="216" fill="#e2e8f0" fontSize="8.4" fontFamily="ui-monospace, monospace">logins_by_month</text>
  <text x="561.12" y="216" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">security · Last logins by month</text>
  <text x="475" y="236" fill="#e2e8f0" fontSize="8.4" fontFamily="ui-monospace, monospace">technical_generic</text>
  <text x="571.5360000000001" y="236" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">security · Technical and generic…</text>
  <text x="475" y="256" fill="#e2e8f0" fontSize="8.4" fontFamily="ui-monospace, monospace">users_per_role</text>
  <text x="555.912" y="256" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">security · Users per role</text>
  <rect x="1120" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choix du modèle</text>
  <text x="1130" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nomasx1 · Security, SoD, Licences</text>
  <line x1="1120" y1="47.0" x2="1030" y2="62" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxexp-arrow)"/>
  <rect x="20" y="92" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Analyses · Tableaux de bord</text>
  <text x="30" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ceux livrés avec le modèle</text>
  <line x1="200" y1="109.0" x2="240" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxexp-arrow)"/>
  <rect x="1120" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Analyses enregistrées</text>
  <text x="1130" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">en choisir une pour l'ouvrir</text>
  <line x1="1120" y1="147.0" x2="763" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxexp-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Champs du modèle</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateur, profil, rôles, annuaire</text>
  <line x1="200" y1="267.0" x2="240" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxexp-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Zones</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vue, période, lignes, mesures, filtres</text>
  <line x1="1120" y1="317.0" x2="1070" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxexp-arrow)"/>
  <rect x="1120" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Résultat</text>
  <text x="1130" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tableau, croisé, graphique ou KPI</text>
  <line x1="1120" y1="417.0" x2="1070" y2="368" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxexp-arrow)"/>
</svg>

---

## Où le trouver \{#menu\}

**Explorateur de données**, dans le menu de Nomasx-1 juste après les trois tableaux de bord, ouvre l'explorateur sur le modèle *nomasx1 · Security*. Le sélecteur de modèle, en haut à droite, liste tous les modèles que l'utilisateur peut ouvrir, regroupés par application : les trois modèles de Nomasx-1 sont *nomasx1 · Security*, *nomasx1 · Segregation of duties* et *nomasx1 · Licence compliance*. Il passe d'un modèle à l'autre à tout moment ; les analyses et tableaux de bord suivent le modèle.

**Analyses** et **Tableaux de bord** indiquent le nombre d'analyses et de tableaux de bord du modèle ; la liste **Analyses enregistrées…** ouvre l'une d'elles, chacune affichée avec son nom et son libellé. **Définition** affiche les zones — vue, période, lignes, mesures, filtres — et le volet de gauche liste les champs du modèle, entité par entité.

---

## Sécurité \{#security\}

Les utilisateurs de chaque application, leur statut et leur dernière connexion, leurs attributions de rôles, leur profil (société, business unit, pays, codes catégorie) et leur fiche d'annuaire (département, fonction, responsable), avec l'application et les rôles autour d'eux.

**Analyses** : *Users* (avec les comptes techniques et génériques), *Users by status*, *Users by application*, *Users by company*, *Users by country*, *Users by department*, *Technical and generic accounts*, *Last logins by month* — plus le mois est ancien, plus les comptes sont dormants —, *Accounts created by month*, *Users with the most roles*, *Users per role*.

**Tableau de bord** *Security overview* : les utilisateurs par statut, application, société et département ; les dernières connexions ; les rôles qui comptent le plus d'utilisateurs.

---

## Séparation des tâches \{#sod\}

Chaque conflit relevé par la [matrice SoD](./settings/sod/matrix.md) : l'utilisateur, les deux activités, les deux rôles qui les accordent, le processus et le risque — ainsi que la synthèse de chaque rafraîchissement, pour la tendance.

**Analyses** : *Users in conflict*, *Users in conflict by process*, *Users in conflict by risk level*, *Conflicts by risk*, *Privileged conflicts*, *Users with the most conflicts*, *Role pairs in conflict*, *Activity pairs in conflict*, *Users in conflict by company*, *Conflicts per refresh*, *Conflicts per refresh and process* — une colonne par processus.

**Tableau de bord** *SoD overview* : les utilisateurs en conflit par processus, niveau de risque et société ; les paires de rôles ; la tendance d'un rafraîchissement à l'autre.

---

## Conformité des licences \{#licenses\}

Les transactions de chaque utilisateur par table et par jour, la chaîne objet → code système → composant de licence, les utilisateurs par composant, l'exposition financière issue de la [revue des licences](./licensing-review.md), et les salariés par date d'extraction.

**Analyses** : *Financial exposure*, *Financial exposure by component* (prix, support et total de chaque ligne de la revue des licences au-delà de la souscription, avec sa nature), *Users by component* — utilisateurs avec des droits et utilisateurs actifs — et son graphique *Users by component (chart)*, *Transactions by month*, *Transacting users by component* et *by company* — choisir la période pour appliquer une règle des 90 jours —, *Most used tables*, *Employees per extraction*.

**Tableau de bord** *Licence overview* : l'exposition financière de la revue des licences, les utilisateurs par composant, la tendance des transactions et les utilisateurs actifs.

Les deux entités du modèle répondent à deux questions distinctes. *Users per component* compte, par application et par composant, les utilisateurs avec des droits et les utilisateurs actifs, sans les comparer à la souscription. *Financial exposure* reprend ce que la revue des licences trouve au-delà de la souscription — postes manquants, modules couverts par aucune ligne de contrat, Named User Plus, Data Integrator et Analytics Server — valorisé au prix catalogue avec trois ans de support ; les montants gardent leur signe (négatif = au-delà de la souscription). Elle contient le dernier calcul de la revue, celui de la collecte ou du dernier *Relire* de la revue, et reste vide tant qu'aucun des deux n'a eu lieu.

:::info[Spécifique à JDE]
Les transactions et la chaîne objet → code système → composant de licence proviennent de la collecte d'usage de JD Edwards EnterpriseOne. Pour une autre source, le modèle *Licence compliance* contient ce que fournit la collecte de cette source.
:::

---

## Analyses livrées \{#bundled\}

Les analyses et tableaux de bord ci-dessus sont **partagés** : tout utilisateur autorisé à ouvrir le modèle les voit. Ils suivent les nouvelles versions de Nomasx-1, jusqu'à ce qu'un utilisateur y enregistre une modification — la version locale est alors conservée. Pour en adapter un sans le modifier, l'ouvrir puis utiliser **Enregistrer sous**.

---

## Qui voit quoi \{#access\}

- Un modèle est proposé aux titulaires d'un rôle qui l'accorde (**Data Explorer** dans les règles *Au-delà des menus* du rôle) — voir [Rôles et permissions](../framework/build/secure/roles-and-permissions.md#access).
- Le périmètre de données des rôles de l'utilisateur s'applique à chaque analyse : un utilisateur limité à une application ou à une société n'en voit que les lignes, totaux compris.

---

## Voir aussi

- [Vue d'ensemble — Synthèse d'audit](./audit-synthesis.md) — la page de synthèse.
- [Analyses enregistrées et tableaux de bord](../framework/explorer/saved-and-dashboards.md) — enregistrer, partager, exporter.
