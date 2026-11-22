---
title: Affectations
description: "Affectations de rôles actives — quel utilisateur détient quel rôle, sur quelle application, avec les dates d'effet et d'expiration."
keywords: [Nomasx-1, sécurité, affectations, affectations de rôles, utilisateur-rôle, date effective, expiration]
---

# Affectations

L'écran **Affectations** liste l'ensemble des liens actifs entre un utilisateur et un rôle, sur chaque application connectée. Une ligne par triplet `(Application, Utilisateur, Rôle)`. C'est la table sur laquelle tout le monde revient pour répondre à la question d'audit la plus courante : *« qui détient quoi ? »*

La requête ne renvoie que les affectations des utilisateurs dont `USR_STATUS = '01'` — autrement dit les comptes actifs. Les comptes inactifs peuvent encore détenir des lignes dans la table sous-jacente, mais sont exclus de la vue pour garder la piste d'audit lisible.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxasg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxasg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxasg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxasg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="380" rx="14" fill="url(#nxasg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Sécurité - Affectations</text>
  <rect x="412.72" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="434.72" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.security_assignments_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="100" width="840" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="116" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾  ⛉  Filtres avancés</text>
  <text x="252" y="136" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="252" y="142" width="170" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="155.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="412" y="155.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="434" y="136" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR ID</text>
  <rect x="434" y="142" width="170" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="444" y="155.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="594" y="155.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="616" y="136" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE ID</text>
  <rect x="616" y="142" width="170" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="626" y="155.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="776" y="155.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="240" y="192" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">1 804 lignes · 7,9 ms</text>
  <rect x="952" y="180" width="142" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="953" y="181" width="64" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="985.0" y="193.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Tableau</text>
  <line x1="1018" y1="185" x2="1018" y2="195" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="193.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Graphique</text>
  <rect x="240" y="208" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="222.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="418" y="208" width="80" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="458.0" y="222.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="648" y="208" width="112" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="658" y="222.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="766" y="208" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="787.0" y="222.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="814" y="208" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="842.5" y="222.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="877" y="208" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.5" y="222.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="940" y="208" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="971.0" y="222.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="1008" y="208" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1044.0" y="222.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="240" y="240" width="840" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="255.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID (ID)</text>
  <text x="357" y="255.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="440" y="255.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID (ID)</text>
  <text x="547" y="255.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID</text>
  <text x="630" y="255.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ROLE ID (ID)</text>
  <text x="704" y="255.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ROLE ID</text>
  <text x="790" y="255.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE EFFECTIVE</text>
  <text x="873" y="255.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE EXPIRATION</text>
  <rect x="240" y="266" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="280.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ASMITH</text>
  <text x="547" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <text x="630" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP_MGR</text>
  <text x="704" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP Manager</text>
  <text x="790" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2024-02-01</text>
  <text x="873" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <rect x="240" y="289" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="341" y="303.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">BMARTIN</text>
  <text x="547" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Bruno Martin</text>
  <text x="630" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AR_MGR</text>
  <text x="704" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AR Manager</text>
  <text x="790" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2023-05-15</text>
  <text x="873" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-12-31</text>
  <rect x="240" y="312" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="326.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="547" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="630" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP_CLERK</text>
  <text x="704" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP Clerk</text>
  <text x="790" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2025-09-01</text>
  <text x="873" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <rect x="240" y="335" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="341" y="349.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="547" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="630" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">GL_ACCT</text>
  <text x="704" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">GL Accountant</text>
  <text x="790" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2025-09-01</text>
  <text x="873" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-03-31</text>
  <text x="240" y="380" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="321.4" y="368" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="331.4" y="381.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="385.4" y="380" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Affichage 1–50 sur 1 804</text>
  <rect x="992" y="368" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="381.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="368" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="381.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="368" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="381.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="368" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="381.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres avancés</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application, utilisateur, rôle</text>
  <line x1="200" y1="127.0" x2="252" y2="152" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxasg-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Qui détient quoi</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne par utilisateur × rôle</text>
  <line x1="200" y1="307.0" x2="250" y2="288" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxasg-arrow)"/>
  <rect x="1120" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Outils de la grille</text>
  <text x="1130" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tri, groupes, export</text>
  <line x1="1120" y1="217.0" x2="905.5" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxasg-arrow)"/>
  <rect x="1120" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Validité</text>
  <text x="1130" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">effet · expiration (vide = aucune)</text>
  <line x1="1120" y1="337.0" x2="980" y2="288" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxasg-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque affectation de rôle active sur **une application connectée** :

- **Qui détient quoi ?** C'est la table de référence pour la revue des accès — une ligne par couple utilisateur actif × rôle accordé.
- **Depuis quand ?** La date effective répond à la question *« nouveaux accès du trimestre »*. Filtrer la colonne sur la période de revue pour lister chaque nouvelle attribution.
- **Pour combien de temps ?** Les affectations bornées dans le temps (comptes prestataires, accès projet, délégations temporaires) portent une date d'expiration. Trier la colonne par ordre croissant fait remonter ce qui est sur le point d'expirer.

L'écran est le second arrêt après *Utilisateurs* dans chaque revue trimestrielle des accès.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `RLU_APPS_ID` — identifiant numérique de l'application source. Filtrable. | Application concernée par l'affectation. |
| **Utilisateur ID** | `RLU_USER_ID` — lié au catalogue des utilisateurs (`USR_APPS_ID, USR_ID`). Filtrable, restreint par l'application choisie. | Utilisateur détenteur du rôle. |
| **Rôle ID** | `RLU_ROLE_ID` — lié au catalogue des rôles (`ROL_APPS_ID, ROL_ID`). Filtrable, restreint par l'application choisie. | Rôle accordé à l'utilisateur. |
| **Date effective** | `RLU_DT_EFFECTIVE` — date. | Date d'entrée en vigueur de l'affectation dans la source. |
| **Date expiration** | `RLU_DT_EXPIRATION` — date, peut être vide. | Date à laquelle l'affectation est planifiée pour expirer. Vide = permanente. |

Colonnes masquées portées par la ligne : `RLU_DT_REFRESH`, `RLU_UKID`.

**Filtres avancés**, ouvert au-dessus de la grille, filtre sur l'**Application ID**, l'**Utilisateur ID** et le **Role ID** ; les listes d'utilisateurs et de rôles suivent l'application choisie. La zone de recherche filtre les lignes chargées ; **Vues**, **Filtres**, **Grouper**, **Colonnes** et **Exporter** (CSV ou Excel) fonctionnent comme sur toutes les grilles. La grille n'a pas de menu de ligne.

:::info[Spécifique à JDE]
Sur JD Edwards EnterpriseOne, `*ALL` est le **rôle de connexion par défaut** : quand un utilisateur se connecte avec `*ALL`, la sécurité de tous les rôles qui lui sont affectés est combinée et appliquée simultanément. Affecter un rôle à un utilisateur revient donc à *l'inclure* dans le `*ALL` de cet utilisateur. L'alternative consiste à se connecter sous un seul rôle précis, n'appliquant alors que la sécurité de ce rôle.
:::

---

## Conseils & bonnes pratiques

- **Filtrer la *Date effective* sur le trimestre en cours** pour lister chaque nouvelle affectation accordée sur cette fenêtre — base de la rubrique *nouveaux accès* du rapport d'audit.
- **Trier la *Date expiration* par ordre croissant** pour faire remonter les affectations bornées. Confronter avec la liste RH pour confirmer les départs et les fins de projet.
- **Filtrer l'*Utilisateur ID* sur un seul utilisateur** pour obtenir l'inventaire complet de ses rôles — la même information est plus riche sur l'écran *Audit Utilisateurs*.
- **Filtrer le *Rôle ID* sur un seul rôle** pour compter ses détenteurs. Combiné à la séquence vue sur l'écran *Rôles*, c'est ce qui permet de juger si un rôle peut être retiré sans risque.
