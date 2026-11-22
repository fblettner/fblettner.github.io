---
title: OUT — Utilisateurs / Rôles
description: "Object Usage Tracking avec le statut, le type et le lien utilisateur — vue par utilisateur des composants de licence effectivement consommés."
keywords: [Nomasx-1, applications, Object Usage Tracking, OUT, utilisateurs, comptes techniques, comptes génériques, comptes liés]
---

# OUT — Utilisateurs / Rôles

L'écran **OUT — Utilisateurs / Rôles** pivote les données OUT par utilisateur. Une ligne par triplet `(Application, Composant, Utilisateur)`. Chaque ligne porte le statut du compte (actif / inactif), les indicateurs technique et générique, la référence utilisateur lié et les dates de création / dernière connexion — tout ce qu'il faut pour interpréter l'usage dans le contexte de *qui* est l'utilisateur.

Une ligne avec un fort usage sur un composant sensible n'a pas le même poids selon que l'utilisateur est une personne réelle, un compte batch technique ou un login générique partagé.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 398" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ouu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ouu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ouu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ouu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="318" rx="14" fill="url(#ouu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Licences - Traçabilité des objets - Utilisateurs</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⏷  Filtres avancés</text>
  <text x="233" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">82 lignes · 12 ms</text>
  <rect x="959" y="118" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="119" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="131.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="123" x2="1018" y2="133" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="131.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="146" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="389" y="146" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="428.0" y="160.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="569" y="146" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="697" y="146" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="724.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="758" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="836" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="872.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="914" y="146" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="146" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="178" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="337" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="351" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="437" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID…</text>
  <text x="529" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID</text>
  <text x="639" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">STATUT</text>
  <text x="689" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE DE CRÉATI…</text>
  <text x="781" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE DE CONNEX…</text>
  <text x="873" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TECHNIQUE (Y…</text>
  <text x="953" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">GÉNÉRIQUE (Y…</text>
  <text x="1033" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR LIÉ</text>
  <rect x="233" y="204" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="529" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">John Doe</text>
  <circle cx="656.0" cy="215.0" r="3.2" fill="#4ade80"/>
  <text x="689" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2021-03-02</text>
  <text x="781" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <circle cx="905.0" cy="215.0" r="3.2" fill="#f87171"/>
  <circle cx="985.0" cy="215.0" r="3.2" fill="#f87171"/>
  <text x="1033" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="226" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ASMITH</text>
  <text x="529" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <circle cx="656.0" cy="237.0" r="3.2" fill="#4ade80"/>
  <text x="689" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2019-09-14</text>
  <text x="781" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-20</text>
  <circle cx="905.0" cy="237.0" r="3.2" fill="#f87171"/>
  <circle cx="985.0" cy="237.0" r="3.2" fill="#f87171"/>
  <text x="1033" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="248" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">BATCHUSR</text>
  <text x="529" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Batch account</text>
  <circle cx="656.0" cy="259.0" r="3.2" fill="#4ade80"/>
  <text x="689" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2018-01-05</text>
  <text x="781" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <circle cx="905.0" cy="259.0" r="3.2" fill="#4ade80"/>
  <circle cx="985.0" cy="259.0" r="3.2" fill="#f87171"/>
  <text x="1033" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="270" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDOE2</text>
  <text x="529" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">John Doe</text>
  <circle cx="656.0" cy="281.0" r="3.2" fill="#4ade80"/>
  <text x="689" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2024-04-12</text>
  <text x="781" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-09-30</text>
  <circle cx="905.0" cy="281.0" r="3.2" fill="#f87171"/>
  <circle cx="985.0" cy="281.0" r="3.2" fill="#f87171"/>
  <text x="1033" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="233" y="316" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="304" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="317.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="317" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–50 sur 82</text>
  <text x="1087" y="317" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="215.0" y="354" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="369" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateur</text>
  <text x="225.0" y="382" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vu dans la traçabilité</text>
  <line x1="360.0" y1="354" x2="537" y2="293.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouu-arrow)"/>
  <rect x="515.0" y="354" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="369" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Technique · Générique</text>
  <text x="525.0" y="382" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">issus des propriétés utilisateurs</text>
  <line x1="660.0" y1="354" x2="881" y2="293.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouu-arrow)"/>
  <rect x="815.0" y="354" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="369" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateur lié</text>
  <text x="825.0" y="382" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">second compte d'une personne</text>
  <line x1="960.0" y1="354" x2="1041" y2="293.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouu-arrow)"/>
  <rect x="12" y="79" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="94" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres avancés</text>
  <text x="22" y="107" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application, composant</text>
  <line x1="197" y1="96.0" x2="233" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouu-arrow)"/>
  <rect x="1119" y="151" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="166" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1129" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vers Excel</text>
  <line x1="1119" y1="168.0" x2="1042.5" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ouu-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque utilisateur ayant invoqué au moins un objet d'un composant de licence :

- **Séparer le bruit du signal.** Les comptes techniques et génériques sont marqués pour pouvoir être exclus de l'audit au besoin.
- **Lire l'activité dans son contexte d'identité.** *Création* + *Dernière connexion* + *Statut* donnent le contexte d'hygiène du compte à côté de l'usage.
- **Repérer les identités consolidées.** *Utilisateur lié* signale un compte déjà déclaré comme doublon d'un autre login. Le compter deux fois dans le reporting de licence sur-évaluerait le périmètre.

:::info[Spécifique à JDE]
Le marquage technique / générique / lié est stocké dans `SECURITY_USERS_PROP`. Les valeurs des drapeaux se maintiennent depuis l'écran *Paramètres → Propriétés utilisateurs*. Les autres systèmes sources peuvent utiliser le même mécanisme via une requête équivalente.
:::

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `LOUT_APPS_ID` — identifiant de l'application. Filtrable. | Application connectée. |
| **Composant ID** | `CPT_ID` — composant de licence. Filtrable, masqué par défaut. | Utilisé par le drill-down depuis *OUT — Composants*. |
| **Utilisateur ID** | `LOUT_USER` — identifiant utilisateur. Liste déroulante vers le catalogue. | Auteur de l'usage du composant. |
| **Statut** | `USR_STATUS` — `01` signifie *Actif*. | État du compte côté source. |
| **Date de création** | `USR_DT_CREATION` — date (chaîne). | Date de création du compte. |
| **Date de connexion** | `USR_DT_LOGIN` — date (chaîne). | Dernière authentification. |
| **Technique (Y/N)** | `USRP_TECHNICAL` — `Y` / `N`. | Compte marqué comme technique / batch — généralement exclu du calcul de licence à l'effectif. |
| **Générique (Y/N)** | `USRP_GENERIC` — `Y` / `N`. | Compte marqué comme login partagé / générique — utilisé par plusieurs personnes, pas une unité d'effectif. |
| **Utilisateur lié** | `USRP_ID_LINKED` — texte. | Si le compte est déclaré comme doublon, login principal vers lequel il pointe. |

---

## Conseils & bonnes pratiques

- **Filtrer sur `Technique = N` et `Générique = N`** pour obtenir l'usage *humain réel* — le chiffre à discuter avec le métier pour le calibrage de la licence.
- **Un utilisateur inactif avec un usage récent** ne devrait pas exister — si la ligne apparaît, l'activité a eu lieu avant la désactivation, mais l'écran continue à remonter le dernier appel. Vérifier que la date de désactivation est postérieure à la date d'usage.
- **Une ligne avec un *Utilisateur lié*** signifie que la consommation de licence doit suivre le compte principal et non le compte lié. Filtrer avant comptage.
- **Combiner avec *OUT — Objets*** pour voir quels programmes spécifiques du composant chaque utilisateur a invoqué.
