---
title: Revue de la séparation des tâches
description: "La revue de la séparation des tâches de Nomasx-1 : pour une application JD Edwards EnterpriseOne, les conflits que la sécurité permet et ceux que les utilisateurs ont réellement exercés — les deux programmes lancés, des écritures par les deux programmes ou dans les tables des deux — avec la preuve, chaque utilisateur, chaque règle, ce qui a été collecté, et les conflits atteints seulement par une sortie d'écran ou de ligne."
keywords: [Nomasx-1, séparation des tâches, SoD, revue SoD, conflits exercés, conflits avérés, preuve, Object Usage Tracking, journal d'activité, référence croisée, sortie d'écran, sortie de ligne, JD Edwards]
---

# Revue de la séparation des tâches

**Séparation des tâches**, dans le dossier **Revues** du menu Nomasx-1, répond à la question que pose un auditeur une fois la liste des conflits en main : *lesquels les utilisateurs ont-ils réellement exercés ?* Un conflit signifie que la sécurité d'un utilisateur lui **permet** deux activités qui ne devraient pas être réunies sur une même personne. La revue indique, pour chaque utilisateur et chaque règle de la [matrice](./settings/sod/matrix.md), si les données collectées montrent qu'il a **fait les deux** — et sur quelle preuve.

La page porte sur une application à la fois, choisie en haut à droite. La page s'ouvre immédiatement sur la réponse conservée par le serveur, avec l'heure de son calcul à côté de **Relire** (*Calculé le 24 nov. à 06:15*) : la collecte la prépare à chaque exécution, si bien que la première personne qui ouvre la page après la collecte de la nuit n'attend pas. **Relire** recalcule la réponse sur-le-champ, quelle que soit sa durée, et remplace pour tous celle qui était conservée. Rien n'est modifié : la page lit ce que les collectes ont écrit.

:::info[Spécifique à JDE]
La revue porte sur les applications JD Edwards EnterpriseOne : ses preuves viennent d'Object Usage Tracking, du journal d'activité, des transactions, de la piste d'audit et de la référence croisée de JD Edwards. La liste des applications ne propose que les applications JD Edwards.
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1320 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sdrv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sdrv-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sdrv-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sdrv-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="404" rx="14" fill="url(#sdrv-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">◈</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Revue de la séparation des tâches</text>
  <text x="276" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Les conflits que la sécurité permet, et ceux que les utilisateurs ont réellement exercés.</text>
  <text x="1019" y="52.5" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Calculé le 24 nov. à 06:15</text>
  <rect x="1027" y="38" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1053.5" y="52.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Relire</text>
  <rect x="747" y="38" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="757" y="52.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">1 · JDE-PROD ▾</text>
  <text x="739" y="53" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Application</text>
  <line x1="220" y1="78" x2="1100" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="92" width="133.33333333333334" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="114" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">22</text>
  <text x="250.0" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEURS EN CONFLIT</text>
  <text x="250.0" y="138" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">2 privilégiés</text>
  <rect x="381.33333333333337" y="92" width="133.33333333333334" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="391.33333333333337" y="114" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">858</text>
  <text x="391.33333333333337" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONFLITS (UTILISATEUR × RÈGLE)</text>
  <text x="391.33333333333337" y="138" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">39 règles</text>
  <rect x="522.6666666666667" y="92" width="133.33333333333334" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="532.6666666666667" y="114" fill="#f87171" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">4</text>
  <text x="532.6666666666667" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXERCÉS</text>
  <text x="532.6666666666667" y="138" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">lancé 3 · écrit 0</text>
  <text x="532.6666666666667" y="147" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">· tables 1</text>
  <rect x="664.0" y="92" width="133.33333333333334" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="674.0" y="114" fill="#f87171" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="674.0" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEURS EN AYANT EXERCÉ UN</text>
  <text x="674.0" y="138" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">dont 1 a lancé les deux</text>
  <rect x="805.3333333333334" y="92" width="133.33333333333334" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="815.3333333333334" y="114" fill="#c084fc" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">854</text>
  <text x="815.3333333333334" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEULEMENT POSSIBLES</text>
  <text x="815.3333333333334" y="138" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">aucune preuve collectée</text>
  <rect x="946.6666666666667" y="92" width="133.33333333333334" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="956.6666666666667" y="114" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">6</text>
  <text x="956.6666666666667" y="127" fill="#64748b" fontSize="7" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PAR LES SORTIES</text>
  <text x="956.6666666666667" y="138" fill="#94a3b8" fontSize="7" fontFamily="system-ui, sans-serif">3 utilisateurs · 10 397 liens</text>
  <text x="240" y="174" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Collecté : suivi d'utilisation 64 · journal d'activité 9 · transactions 4 381 · piste d'audit 7 · référence croisée (écritures) 41 864.</text>
  <rect x="240.0" y="184" width="161.6" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="248.0" y="193" width="22" height="22" rx="6" fill="none" stroke="#f87171" strokeWidth="1.2"/>
  <text x="278.0" y="202" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Exercés</text>
  <text x="278.0" y="215" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Preuve sur les deux · 4</text>
  <rect x="409.6" y="184" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="417.6" y="193" width="22" height="22" rx="6" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="447.6" y="202" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs</text>
  <text x="447.6" y="215" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Chaque utilisateur · 22</text>
  <rect x="579.2" y="184" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="587.2" y="193" width="22" height="22" rx="6" fill="none" stroke="#c084fc" strokeWidth="1.2"/>
  <text x="617.2" y="202" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Règles</text>
  <text x="617.2" y="215" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Chaque paire · 39</text>
  <rect x="748.8" y="184" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="756.8" y="193" width="22" height="22" rx="6" fill="none" stroke="#4ade80" strokeWidth="1.2"/>
  <text x="786.8" y="202" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Seulement possibles</text>
  <text x="786.8" y="215" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Sans preuve · 854</text>
  <rect x="918.4" y="184" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="926.4" y="193" width="22" height="22" rx="6" fill="none" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="956.4" y="202" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Par les sorties</text>
  <text x="956.4" y="215" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Depuis une appli · 6</text>
  <rect x="240" y="234" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="248.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <rect x="1010" y="234" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.0" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="944" y="234" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="974.0" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="883" y="234" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="910.5" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="822" y="234" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="849.5" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="776" y="234" width="40" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="796.0" y="248.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="240" y="266" width="840" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="283.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR</text>
  <text x="330" y="283.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSUS</text>
  <text x="440" y="283.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITÉ 1</text>
  <text x="590" y="283.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITÉ 2</text>
  <text x="740" y="283.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PREUVE</text>
  <text x="890" y="283.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROGRAMMES (1)</text>
  <text x="980" y="283.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VU LE (1)</text>
  <rect x="240" y="298" width="840" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="313.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="330" y="313.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC001 · Order To Cash</text>
  <text x="440" y="313.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC02 · Process sales orders</text>
  <text x="590" y="313.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC05 · Credit / debit notes</text>
  <rect x="740" y="302.0" width="146" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="813.0" y="313.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">a lancé les deux programmes</text>
  <text x="890" y="313.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="980" y="313.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-18</text>
  <rect x="240" y="326" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="341.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="330" y="341.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC001 · Order To Cash</text>
  <text x="440" y="341.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC02 · Process sales orders</text>
  <text x="590" y="341.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC11 · Change master data</text>
  <rect x="740" y="330.0" width="146" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="813.0" y="341.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">a lancé les deux programmes</text>
  <text x="890" y="341.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="980" y="341.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-18</text>
  <rect x="240" y="354" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="369.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="330" y="369.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC001 · Order To Cash</text>
  <text x="440" y="369.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC05 · Credit / debit notes</text>
  <text x="590" y="369.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC11 · Change master data</text>
  <rect x="740" y="358.0" width="146" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="813.0" y="369.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">a lancé les deux programmes</text>
  <text x="890" y="369.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P42095</text>
  <text x="980" y="369.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-12</text>
  <rect x="240" y="382" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="397.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="330" y="397.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">PTP001 · Procure To Pay</text>
  <text x="440" y="397.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">PTP05 · Approve purchase order</text>
  <text x="590" y="397.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">PTP16 · Change master data</text>
  <rect x="740" y="386.0" width="146" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="813.0" y="397.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">a écrit des tables des deux</text>
  <text x="890" y="397.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P43081</text>
  <text x="980" y="397.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-10-30</text>
  <rect x="20" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application</text>
  <text x="30" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un JD Edwards à la fois</text>
  <line x1="200" y1="47.0" x2="240" y2="50" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrv-arrow)"/>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs en conflit</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dont les comptes privilégiés</text>
  <line x1="200" y1="117.0" x2="266.6666666666667" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrv-arrow)"/>
  <rect x="20" y="164" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="179" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui a été collecté</text>
  <text x="30" y="192" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une source à 0 ne prouve rien</text>
  <line x1="200" y1="181.0" x2="240" y2="174" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrv-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cinq onglets</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une grille chacun : recherche, export</text>
  <line x1="200" y1="267.0" x2="280.8" y2="204" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrv-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Preuve</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">du côté le plus faible des deux</text>
  <line x1="200" y1="347.0" x2="760" y2="310" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrv-arrow)"/>
  <rect x="1120" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Relire</text>
  <text x="1130" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">recalcule pour tous</text>
  <line x1="1120" y1="47.0" x2="1060" y2="49" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrv-arrow)"/>
  <rect x="1120" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exercés</text>
  <text x="1130" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par nature de preuve</text>
  <line x1="1120" y1="117.0" x2="619.3333333333334" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrv-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Seulement possibles</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">permis, rien ne les montre faits</text>
  <line x1="1120" y1="177.0" x2="912.0" y2="120" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrv-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Par les sorties</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">atteint depuis une appli permise</text>
  <line x1="1120" y1="267.0" x2="1039.1999999999998" y2="204" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrv-arrow)"/>
</svg>

---

## Possible ou exercé \{#evidence\}

Un conflit associe un **utilisateur** et une **règle** (une paire d'activités d'un processus). Il est **exercé** quand les données collectées montrent que l'utilisateur a fait les deux activités ; sinon il est **seulement possible**. Trois natures de preuve existent, de la plus forte à la plus faible :

| Preuve | Source | Ce qu'elle montre |
|---|---|---|
| **A lancé les deux programmes** | [Object Usage Tracking](./applications/out/details.md) | L'utilisateur a lancé un programme de chaque activité. |
| **A écrit par les deux programmes** | Le [journal d'activité](./applications/activity-log.md) (écran **Transactions**) : le programme qui a écrit chaque ligne | Des lignes ont été écrites au nom de l'utilisateur par un programme de chaque activité. |
| **A écrit des tables des deux** | Les tables que chaque programme écrit (référence croisée de JD Edwards), rapprochées des transactions, de la [piste d'audit](./database/audit-trail.md) ou du journal d'activité | L'utilisateur a écrit dans une table qu'un programme de chaque activité écrit. Preuve plus faible : un autre programme peut écrire la même table. |

Un conflit est exercé **au niveau de son côté le plus faible** : un programme lancé pour une activité et rien pour l'autre laisse le conflit *seulement possible*. Chaque côté conserve ses programmes avec preuve et la date à laquelle ils ont été vus pour la dernière fois.

La revue compte une ligne par utilisateur et par règle. Le détail par rôle et par objet reste dans [Conflits → Détails](./applications/conflicts/details.md).

### Une même lecture pour tous les écrans \{#same-statement\}

La même requête alimente l'écran [Conflits → Avérés](./applications/conflicts/proven.md), l'indicateur **Exercés** du tableau de bord [Séparation des tâches : évolution](./sod-dashboard.md), l'[outil de conflits](./ai-assistant.md#user-conflicts) de l'assistant et le contrôle *Un utilisateur a exercé un conflit* de [À corriger](./security-analysis.md) : tous donnent la même réponse.

---

## Les indicateurs \{#figures\}

| Carte | Valeur | Ligne de détail |
|---|---|---|
| **Utilisateurs en conflit** | Les utilisateurs qui ont au moins un conflit. | Le nombre de comptes privilégiés parmi eux. |
| **Conflits (utilisateur × règle)** | Tous les conflits. | Les règles concernées. |
| **Exercés** | Les conflits prouvés des deux côtés. | La répartition par nature de preuve : programmes lancés · écritures par les deux · écritures dans leurs tables. |
| **Utilisateurs en ayant exercé un** | Les utilisateurs qui ont au moins un conflit exercé. | Combien d'entre eux ont lancé les deux programmes. |
| **Seulement possibles** | Les conflits qu'aucune donnée collectée ne montre exercés. | — |
| **Par les sorties** | Les conflits qui n'existent que par une sortie (voir [plus bas](#through-exits)). | Les utilisateurs concernés, les liens de la référence croisée lus et le nombre de pas parcourus. |

Sous les cartes, une ligne indique **ce qui a été collecté** pour l'application : le nombre de lignes de suivi d'utilisation, de journal d'activité, de transactions, de piste d'audit, et les écritures de tables connues par la référence croisée. Une source à 0 ne peut rien prouver : un conflit qui reste *seulement possible* peut simplement manquer de la collecte qui le montrerait.

---

## Les onglets \{#tabs\}

Chaque onglet est une grille avec recherche, filtres, regroupement et export. La page garde en mémoire, dans le navigateur, l'onglet et l'application choisis.

| Onglet | Contenu | Colonnes |
|---|---|---|
| **Exercés** | Les conflits prouvés des deux côtés, les plus forts d'abord. | Utilisateur, Nom, Processus, Activité 1, Activité 2, Niveau, Preuve, Programmes (activité 1), Vu le (1), Programmes (activité 2), Vu le (2), Risque. |
| **Utilisateurs** | Chaque utilisateur en conflit, les plus exercés d'abord. | Utilisateur, Nom, Conflits, Risque élevé, Exercés, Preuve (la plus forte), Privilégié, Détail. |
| **Règles** | Chaque paire d'activités. | Processus, Activité 1, Activité 2, Niveau, Utilisateurs, Exercés, Preuve (la plus forte), Risque. |
| **Seulement possibles** | Les conflits permis sans aucune preuve (les 5 000 premiers). | Utilisateur, Nom, Processus, Activité 1, Activité 2, Niveau, Risque. |
| **Par les sorties** | Les conflits atteints seulement depuis une application permise. | Voir [plus bas](#through-exits). |

**Risque élevé** compte les conflits dont le niveau de risque est élevé ou critique. Dans **Utilisateurs**, le lien **lignes de conflit** de la colonne **Détail** ouvre [Conflits → Détails](./applications/conflicts/details.md) filtré sur l'application et l'utilisateur.

---

## Par les sorties \{#through-exits\}

Les droits collectés portent sur les objets des menus. Or une application JD Edwards en ouvre d'autres — par une sortie d'écran ou de ligne, ou en lançant un état depuis un écran — qui ne figurent sur aucun menu : un utilisateur autorisé sur la *saisie des commandes clients* peut atteindre la *fiche client* depuis cet écran. Les conflits calculés sur les droits ne les voient pas.

L'onglet **Par les sorties** lit la référence croisée de JD Edwards — ce qu'ouvrent les règles d'événement de chaque application — en remontant depuis les objets des activités SoD, jusqu'à **trois pas**. Un utilisateur autorisé à lancer une application atteint ce qu'elle ouvre, sauf si la sécurité applicative collectée lui interdit de lancer la cible : sa propre règle décide d'abord, puis ses rôles par séquence décroissante, puis `*PUBLIC` ; à un même niveau, la règle propre à l'objet passe avant `*ALL` ; en l'absence de toute règle, l'accès est permis, comme dans JD Edwards.

<svg viewBox="0 0 1320 244" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sdrx-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sdrx-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sdrx-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sdrx-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="204" rx="14" fill="url(#sdrx-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240.0" y="36" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248.0" y="45" width="22" height="22" rx="6" fill="none" stroke="#f87171" strokeWidth="1.2"/>
  <text x="278.0" y="54" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Exercés</text>
  <text x="278.0" y="67" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Preuve sur les deux · 4</text>
  <rect x="409.6" y="36" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="417.6" y="45" width="22" height="22" rx="6" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="447.6" y="54" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs</text>
  <text x="447.6" y="67" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Chaque utilisateur · 22</text>
  <rect x="579.2" y="36" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="587.2" y="45" width="22" height="22" rx="6" fill="none" stroke="#c084fc" strokeWidth="1.2"/>
  <text x="617.2" y="54" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Règles</text>
  <text x="617.2" y="67" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Chaque paire · 39</text>
  <rect x="748.8" y="36" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="756.8" y="45" width="22" height="22" rx="6" fill="none" stroke="#4ade80" strokeWidth="1.2"/>
  <text x="786.8" y="54" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Seulement possibles</text>
  <text x="786.8" y="67" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Sans preuve · 854</text>
  <rect x="918.4" y="36" width="161.6" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="926.4" y="45" width="22" height="22" rx="6" fill="none" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="956.4" y="54" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Par les sorties</text>
  <text x="956.4" y="67" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Depuis une appli · 6</text>
  <rect x="240" y="92" width="840" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="109.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR</text>
  <text x="322" y="109.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITÉ 1</text>
  <text x="444" y="109.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TENUE (1)</text>
  <text x="536" y="109.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHEMIN (1)</text>
  <text x="648" y="109.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITÉ 2</text>
  <text x="776" y="109.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TENUE (2)</text>
  <text x="868" y="109.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHEMIN (2)</text>
  <text x="1048" y="109.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PAS</text>
  <rect x="240" y="124" width="840" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="140.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">ADOE</text>
  <text x="322" y="140.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC02 · Commandes</text>
  <rect x="444" y="129.0" width="46" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="467.0" y="140.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">permis</text>
  <text x="536" y="140.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="648" y="140.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC11 · Données de base</text>
  <rect x="776" y="129.0" width="84" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="818.0" y="140.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">par une sortie</text>
  <text x="868" y="140.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210 → P03013 → P0030A</text>
  <text x="1048" y="140.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2</text>
  <rect x="240" y="154" width="840" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="170.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">BLEE</text>
  <text x="322" y="170.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">PTP05 · Approuver</text>
  <rect x="444" y="159.0" width="46" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="467.0" y="170.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">permis</text>
  <text x="536" y="170.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="648" y="170.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">PTP16 · Données de base</text>
  <rect x="776" y="159.0" width="84" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="818.0" y="170.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">par une sortie</text>
  <text x="868" y="170.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4310 → P04012</text>
  <text x="1048" y="170.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <rect x="240" y="184" width="840" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">CKING</text>
  <text x="322" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">GL01 · Fournisseurs</text>
  <rect x="444" y="189.0" width="84" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="486.0" y="200.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">par une sortie</text>
  <text x="536" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0411 → P04012</text>
  <text x="648" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">GL04 · Écritures</text>
  <rect x="776" y="189.0" width="46" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="799.0" y="200.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">permis</text>
  <text x="868" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="1048" y="200.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1120" y="28" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="43" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Par les sorties</text>
  <text x="1130" y="56" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">conflits qui passent par une sortie</text>
  <line x1="1120" y1="45.0" x2="1078" y2="60" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrx-arrow)"/>
  <rect x="20" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Comment l'activité est tenue</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">permise, ou par une sortie</text>
  <line x1="200" y1="147.0" x2="444" y2="141" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrx-arrow)"/>
  <rect x="1120" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pas</text>
  <text x="1130" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le plus long des deux chemins</text>
  <line x1="1120" y1="117.0" x2="1066" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrx-arrow)"/>
  <rect x="1120" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le chemin</text>
  <text x="1130" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">depuis l'appli permise, 3 pas max</text>
  <line x1="1120" y1="187.0" x2="920" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sdrx-arrow)"/>
</svg>

Chaque ligne est un conflit qui n'existe **que** de cette façon : les deux activités sont tenues, et au moins l'une d'elles uniquement par une sortie.

| Colonne | Signification |
|---|---|
| **Utilisateur**, **Processus**, **Activité 1**, **Activité 2**, **Risque** | Le conflit. |
| **Activité 1 tenue** / **Activité 2 tenue** | *permis* — l'utilisateur peut lancer et modifier l'un des objets de l'activité — ou *par une sortie*. |
| **Chemin (1)** / **Chemin (2)** | Pour un côté tenu par une sortie, le chemin le plus court depuis l'application permise jusqu'à l'objet de l'activité, par exemple `P4210 → P03013 → P0030A`. |
| **Pas** | Le plus long des deux chemins. |

Ces conflits sont présentés à part et jamais mélangés aux conflits des droits : les écrans de conflits, le tableau de bord et les décomptes de licences ne les incluent pas. Ils sont à qualifier — une sortie peut être masquée ou désactivée par la sécurité des sorties (hyper-exit) ou des boutons, que la collecte ne lit pas. L'onglet a besoin de la référence croisée, collectée par la tâche [`nomasx1-xref`](../nomaflow/bundled-jobs.md#nomasx1-xref) ; sans elle, l'indicateur reste à 0.

---

## Accès \{#access\}

La page s'ouvre aux quatre [rôles prédéfinis](./overview.md#roles) — Auditeur, Responsable sécurité, Gestionnaire des licences, Administrateur. Le périmètre de données des rôles de l'utilisateur s'applique. La page transmet ses indicateurs à l'[assistant](./ai-assistant.md) pour l'application affichée : une question comme *combien de conflits ont été exercés ?* se passe d'explication.

---

## Conseils & bonnes pratiques

- **Collecter les preuves avant la revue.** Object Usage Tracking et le journal d'activité donnent les preuves les plus fortes ; une source à 0 dans la ligne *Collecté* explique une revue où tout reste *seulement possible*.
- **Commencer par Exercés, puis Utilisateurs.** Un utilisateur qui *a lancé les deux programmes* est le premier cas à documenter ou à corriger ; un conflit vu seulement par *a écrit des tables des deux* demande de vérifier les programmes avant de conclure.
- **Corriger le rôle plutôt que l'utilisateur.** [À corriger](./security-analysis.md) distingue un rôle en conflit à lui seul de deux rôles en conflit ensemble.
- **Qualifier l'onglet Par les sorties avec l'administrateur JD Edwards** — la sécurité des sorties et des boutons peut déjà fermer un chemin que montre la référence croisée.

---

## Voir aussi

- [Conflits → Avérés](./applications/conflicts/proven.md) — les mêmes conflits exercés, sous forme d'écran.
- [Séparation des tâches : évolution](./sod-dashboard.md) — les conflits d'une collecte à l'autre.
- [À corriger](./security-analysis.md) — l'analyse de la sécurité.
- [Tâches](./jobs.md#steps) — ce que lisent les collectes.
