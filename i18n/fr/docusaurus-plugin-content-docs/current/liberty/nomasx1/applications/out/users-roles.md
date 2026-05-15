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

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="outur-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#outur-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · OUT · Utilisateurs / Rôles</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="260" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUT</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CRÉATION</text>
  <text x="490" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CONNEXION</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TECHNIQUE</text>
  <text x="710" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">GÉNÉRIQUE</text>
  <text x="810" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL. LIÉ</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <rect x="260" y="136" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="285" y="148" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2019-03-14</text>
  <text x="490" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="710" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="810" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SVC_BATCH</text>
  <rect x="260" y="168" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="285" y="180" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2017-04-02</text>
  <text x="490" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
  <text x="600" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Y</text>
  <text x="710" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="810" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PARTAGE01</text>
  <rect x="260" y="200" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="285" y="212" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="380" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2015-09-01</text>
  <text x="490" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-13</text>
  <text x="600" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="710" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Y</text>
  <text x="810" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">J.DOE</text>
  <rect x="260" y="232" width="60" height="16" rx="3" fill="rgba(248,113,113,0.18)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="290" y="244" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Inactif</text>
  <text x="380" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2014-02-10</text>
  <text x="490" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2019-03-13</text>
  <text x="600" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="710" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="810" y="245" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Trié par LOUT_USER · 14 techniques, 3 génériques, 1 lié à un compte principal</text>
</svg>

---

## Objectif de l'écran

Pour chaque utilisateur ayant invoqué au moins un objet d'un composant de licence :

- **Séparer le bruit du signal.** Les comptes techniques et génériques sont marqués pour pouvoir être exclus de l'audit au besoin.
- **Lire l'activité dans son contexte d'identité.** *Création* + *Dernière connexion* + *Statut* donnent le contexte d'hygiène du compte à côté de l'usage.
- **Repérer les identités consolidées.** *Utilisateur lié* signale un compte déjà déclaré comme doublon d'un autre login. Le compter deux fois dans le reporting de licence sur-évaluerait le périmètre.

:::info[Spécifique JDE]
Le marquage technique / générique / lié est stocké dans `SECURITY_USERS_PROP`. Les valeurs des drapeaux se maintiennent depuis l'écran *Paramètres → Propriétés utilisateurs*. Les autres systèmes sources peuvent utiliser le même mécanisme via une requête équivalente.
:::

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `LOUT_APPS_ID` — identifiant de l'application. Filtrable. | Application connectée. |
| **Composant** | `CPT_ID` — composant de licence. Filtrable, masqué par défaut. | Utilisé par le drill-down depuis *OUT — Composants*. |
| **Utilisateur ID** | `LOUT_USER` — identifiant utilisateur. Liste déroulante vers le catalogue. | Auteur de l'usage du composant. |
| **Statut** | `USR_STATUS` — `01` signifie *Actif*. | État du compte côté source. |
| **Date de création** | `USR_DT_CREATION` — date (chaîne). | Date de création du compte. |
| **Date de connexion** | `USR_DT_LOGIN` — date (chaîne). | Dernière authentification. |
| **Technique** | `USRP_TECHNICAL` — `Y` / `N`. | Compte marqué comme technique / batch — généralement exclu du calcul de licence à l'effectif. |
| **Générique** | `USRP_GENERIC` — `Y` / `N`. | Compte marqué comme login partagé / générique — utilisé par plusieurs personnes, pas une unité d'effectif. |
| **Utilisateur lié** | `USRP_ID_LINKED` — texte. | Si le compte est déclaré comme doublon, login principal vers lequel il pointe. |

---

## Conseils & bonnes pratiques

- **Filtrer sur `Technique = N` et `Générique = N`** pour obtenir l'usage *humain réel* — le chiffre à discuter avec le métier pour le calibrage de la licence.
- **Un utilisateur inactif avec un usage récent** ne devrait pas exister — si la ligne apparaît, l'activité a eu lieu avant la désactivation, mais l'écran continue à remonter le dernier appel. Vérifier que la date de désactivation est postérieure à la date d'usage.
- **Une ligne avec un *Utilisateur lié*** signifie que la consommation de licence doit suivre le compte principal et non le compte lié. Filtrer avant comptage.
- **Combiner avec *OUT — Objets*** pour voir quels programmes spécifiques du composant chaque utilisateur a invoqué.
