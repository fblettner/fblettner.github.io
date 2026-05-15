---
title: Rôles non utilisés
description: "Rôles définis dans le système source mais non affectés à aucun utilisateur — les candidats au nettoyage."
keywords: [Nomasx-1, sécurité, rôles non utilisés, rôles dormants, nettoyage des rôles, audit]
---

# Rôles non utilisés

L'écran **Rôles non utilisés** liste les rôles qui existent dans le système source sans aucune ligne dans la table des affectations. Une ligne par couple `(Application, Rôle)`. Ces rôles forment la file d'attente du nettoyage : ils alourdissent le catalogue sans contribuer à un accès actif.

Supprimer les rôles inutilisés est ce qui maintient le modèle de sécurité lisible et réduit la surface d'attaque : un rôle que personne ne détient aujourd'hui peut être affecté à un compte de service demain sans que personne ne s'en aperçoive.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rnu-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#rnu-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Sécurité · Rôles non utilisés</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE ID</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CPTA_FOUR_OLD</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN_HISTO</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21 — SAP Production</text>
  <text x="500" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Z_TEMP_2023</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21 — SAP Production</text>
  <text x="500" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Z_FORMATION</text>

  <text x="60" y="276" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">17 rôles non utilisés sur 2 applications</text>
</svg>

---

## Objectif de l'écran

Pour chaque rôle connu d'**une application connectée**, faire ressortir ceux qui n'ont **aucune** affectation active :

- **Que retirer ?** Les rôles sans détenteur sont la cible évidente du nettoyage. Le calcul s'appuie sur un `LEFT JOIN` vers `SECURITY_ASSIGNMENTS` filtré sur `NULL` — aucun double comptage, aucun faux positif.
- **À quoi servait ce rôle ?** Consulter l'écran *Rôles* pour retrouver l'intention initiale avant de supprimer — un rôle sans détenteur courant peut être un rôle *de secours* gardé prêt en cas d'incident.
- **Le même rôle est-il décliné sous plusieurs noms ?** La liste des rôles inutilisés met souvent en évidence des dérives de nommage (par exemple `CPTA_FOUR_OLD` à côté de `CPTA_FOUR` en service).

L'écran est l'un des livrables que les auditeurs attendent à chaque revue trimestrielle des accès.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `APPS_ID` — identifiant numérique de l'application source. Jointe à `SETTINGS_APPLICATIONS` pour afficher également le nom de l'application. | Application à laquelle appartient le rôle inutilisé. |
| **Rôle ID** | `ROL_ID` — identifiant technique du rôle. Restreint par l'application choisie. | Rôle sans aucune affectation. |

Les deux filtres au-dessus de la grille (**Application ID** et **Rôle ID**) acceptent les opérateurs standards *contains* / *equals* / *notEquals* / *startsWith* / *endsWith*. La liste déroulante *Rôle ID* est restreinte à l'application choisie au-dessus.

---

## Conseils & bonnes pratiques

- **Trier par *Application ID*** pour traiter une source à la fois — la décision de nettoyage relève en général de l'administrateur sécurité de cette application.
- **Recouper avec l'écran *Rôles*** pour relire la description d'origine avant suppression — certains rôles inutilisés sont des réserves intentionnelles.
- **Confirmer côté système source** avant de retirer : la ligne disparaîtra du catalogue *Rôles* au prochain scan, mais la définition du rôle elle-même doit être supprimée dans la source.
- **Repasser sur l'écran après le scan suivant** pour valider que le nettoyage a bien été pris en compte — la ligne doit sortir automatiquement.
