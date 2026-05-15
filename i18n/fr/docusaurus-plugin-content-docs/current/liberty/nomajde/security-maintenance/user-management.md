---
title: Gestion des utilisateurs
description: "Ajouter, modifier et provisionner les utilisateurs JD Edwards depuis une seule grille — le SQL écrit le master utilisateur et les préférences d'affichage, l'API REST AIS provisionne le compte de sécurité et le mot de passe."
keywords: [Nomajde, JD Edwards, sécurité JDE, gestion des utilisateurs, F0092, F00921, F98OWSEC, AIS, réinitialisation mot de passe JDE, provisionnement utilisateur, address book]
---

# Gestion des utilisateurs

L'écran **Gestion des utilisateurs** est le master utilisateur JD Edwards, condensé sur une grille modifiable. Une ligne par compte JDE. Depuis une seule page, l'administrateur sécurité peut créer un nouvel utilisateur, modifier ses attributs JDE (langue, pays, format de date, …), réinitialiser son mot de passe, rattacher des rôles et déclarer des environnements.

C'est le point d'entrée de chaque opération sécurité sur un utilisateur — ce que font le *P0092 Work With User Profiles* JDE, le *P98OWSEC Work With User Security* et une partie du *P95921*, sur un seul écran.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 260" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njum-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="200" rx="14" fill="url(#njum-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomajde · Maintenance sécurité · Gestion des utilisateurs</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTILISATEUR</text>
  <text x="220" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NOM ALPHA</text>
  <text x="460" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LANGUE</text>
  <text x="610" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FORMAT DATE</text>
  <text x="780" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PAYS</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DUPONT.J</text>
  <text x="220" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Dupont, Julien — Finance</text>
  <text x="460" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F — Français</text>
  <text x="610" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JMA · /</text>
  <text x="780" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FR</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MARTIN.S</text>
  <text x="220" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Martin, Sarah — Achats</text>
  <text x="460" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">E — English</text>
  <text x="610" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MJA · /</text>
  <text x="780" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">US</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">GARCIA.L</text>
  <text x="220" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Garcia, Lucia — Finance</text>
  <text x="460" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">S — Español</text>
  <text x="610" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JMA · /</text>
  <text x="780" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ES</text>
</svg>

---

## Objectif de l'écran

Pour chaque utilisateur JDE :

- **Le master utilisateur, modifiable sur la grille.** Créer un nouvel utilisateur, modifier la langue, changer le format de date — tout en ligne. L'écran porte les mêmes données que le formulaire JDE *Work With User Profiles*.
- **Provisionnement complet, de bout en bout.** Un nouvel utilisateur demande une écriture SQL sur le master utilisateur *et* un appel REST AIS pour créer le compte de sécurité JDE et fixer le mot de passe. Nomajde enchaîne les deux dans un enregistrement unique — pas d'étape manuelle dans *Work With User Security*.
- **Réinitialisation du mot de passe en un clic.** Le bouton *Réinitialiser le mot de passe* de la boîte de dialogue appelle directement l'endpoint AIS JDE ; le nouveau mot de passe est actif à la prochaine connexion de l'utilisateur.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Utilisateur** | `ULUSER` — identifiant utilisateur JDE. | Le sign-on user. |
| **Nom alpha** | `ABALPH` — nom alpha Address Book. | Nom clair tiré de la fiche Address Book. |
| **Langue** | `ULLNGP` — code de langue préférée. | Pilote la langue des écrans JDE. |
| **Format de date** | `ULFRMT` — format de date. | Contrôle la saisie et le rendu des dates (JMA, MJA…). |
| **Pays** | `ULCTR` — code pays. | Pays par défaut pour les nouvelles transactions saisies par l'utilisateur. |

Les attributs JDE masqués portés par la ligne (file de sortie, file de jobs, journal des messages, séparateur décimal, devise, fuseau horaire, format d'heure, traçage OMW, droite-à-gauche, indicateur utilisateur intensif, marqueur action / inactif, colonnes d'audit) sont conservés pour que la boîte de dialogue s'ouvre avec la photographie complète.

---

## Boîte de dialogue d'édition

Cliquer **Ajouter** dans la barre d'outils pour créer un nouvel utilisateur JDE, ou double-cliquer une ligne pour la modifier. La boîte de dialogue a trois onglets. Les onglets *Rôles* et *Environnements* sont masqués à l'ajout — ils apparaissent une fois l'utilisateur créé.

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njum-dlg-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="300" rx="14" fill="url(#njum-dlg-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier l'utilisateur — DUPONT.J</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="120" height="28" rx="6" fill="rgba(74,158,255,0.20)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="120" y="118" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">Défaut</text>
  <rect x="190" y="100" width="120" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Rôles</text>
  <rect x="320" y="100" width="120" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Environnements</text>

  <text x="60" y="156" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Utilisateur</text>
  <rect x="60" y="162" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="179" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DUPONT.J</text>

  <text x="260" y="156" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Nom alpha</text>
  <rect x="260" y="162" width="380" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="179" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Dupont, Julien — Finance</text>

  <text x="660" y="156" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Langue</text>
  <rect x="660" y="162" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="672" y="179" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F ▾</text>

  <text x="800" y="156" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Pays</text>
  <rect x="800" y="162" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="812" y="179" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FR ▾</text>

  <text x="60" y="208" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Format de date</text>
  <rect x="60" y="214" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="231" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JMA · /</text>

  <text x="260" y="208" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Séparateur décimal</text>
  <rect x="260" y="214" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="231" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">,</text>

  <text x="400" y="208" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Devise</text>
  <rect x="400" y="214" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="412" y="231" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">EUR</text>

  <text x="540" y="208" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Fuseau horaire</text>
  <rect x="540" y="214" width="160" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="552" y="231" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Europe/Paris</text>

  <rect x="60" y="260" width="280" height="40" rx="8" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="200" y="278" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="200" y="292" fill="#22c55e" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Écritures SQL + provisionnement AIS, en une opération</text>

  <rect x="360" y="260" width="240" height="40" rx="8" fill="rgba(251,146,60,0.10)" stroke="rgba(251,146,60,0.40)" strokeWidth="1"/>
  <text x="480" y="278" fill="#fb923c" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Réinitialiser le mot de passe</text>
  <text x="480" y="292" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">API REST AIS · actif à la connexion suivante</text>

  <rect x="620" y="260" width="200" height="40" rx="8" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="720" y="278" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Upload Excel</text>
  <text x="720" y="292" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Onboarder un lot d'utilisateurs</text>
</svg>

### Onglet 1 — Défaut

L'identification de l'utilisateur et les préférences d'affichage JDE. Chaque champ correspond à une colonne du master utilisateur JDE.

| Champ | À renseigner |
|---|---|
| **Utilisateur** | Sign-on user JDE. Obligatoire. Non modifiable après création. |
| **Nom alpha** | Nom clair tiré de l'Address Book — apparaît sur chaque rapport et écran. |
| **Langue** | Code de langue préférée (F, E, S…). Pilote la langue des écrans JDE. |
| **Pays** | Code pays — pays par défaut pour les nouvelles transactions. |
| **Format de date** | Ordre jour / mois / année et séparateur (`JMA /`, `MJA /`, `AMJ -`…). |
| **Séparateur décimal** | Caractère décimal (`,` ou `.`). |
| **Devise** | Devise par défaut pour les nouvelles transactions. |
| **Fuseau horaire** | Fuseau de l'utilisateur — pilote l'affichage des horodatages côté JDE. |
| **Format d'heure** | 12 h ou 24 h. |
| **Droite-à-gauche**, **Traçage OMW**, **Utilisateur intensif** | Indicateurs JDE de comportement d'affichage. Laisser la valeur par défaut JDE sauf consigne du déploiement. |

Les champs JDE masqués (file de sortie, file de jobs, niveaux par défaut de journalisation des messages) prennent des valeurs standard fournies par Nomajde — typiquement `QPRINT`, `*NOLIST`, sévérité `00`.

### Onglet 2 — Rôles

Table imbriquée listant les rôles rattachés à l'utilisateur — les mêmes données que l'écran *Relations de rôles*, restreintes à cet utilisateur. Chaque ligne porte le rôle, la date d'effet et la date d'expiration.

Ajouter une ligne pour rattacher un rôle ; double-cliquer pour étendre la fenêtre d'effet ; supprimer pour révoquer. Masqué à l'ajout.

### Onglet 3 — Environnements

Table imbriquée listant les environnements auxquels l'utilisateur peut se connecter (`PD910`, `PY910`, `DV910`, `CRP910`…), avec l'ordre d'affichage. Les environnements par défaut sont alimentés automatiquement à la création de l'utilisateur — ajuster ici uniquement si une entrée spécifique doit être ajoutée ou retirée. Masqué à l'ajout.

---

## Ce qui s'exécute à l'enregistrement

Ajouter un utilisateur JDE n'est pas qu'une insertion SQL. Nomajde enchaîne les écritures SQL et les appels REST AIS pour que l'opérateur n'ait jamais à changer d'écran.

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '20px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njum-flow-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#njum-flow-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">À l'enregistrement — les cinq étapes enchaînées</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="160" height="80" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="140" y="120" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1 · SQL</text>
  <text x="140" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Master utilisateur</text>
  <text x="140" y="156" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">JDE F0092</text>
  <text x="140" y="170" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">identification utilisateur</text>

  <text x="226" y="143" fill="#4a9eff" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="240" y="100" width="160" height="80" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="320" y="120" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2 · SQL</text>
  <text x="320" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Préférences affichage</text>
  <text x="320" y="156" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">JDE F00921</text>
  <text x="320" y="170" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">langue · date · devise</text>

  <text x="406" y="143" fill="#4a9eff" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="420" y="100" width="160" height="80" rx="10" fill="rgba(251,146,60,0.08)" stroke="rgba(251,146,60,0.40)" strokeWidth="1"/>
  <text x="500" y="120" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3 · API AIS</text>
  <text x="500" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Obtenir le token</text>
  <text x="500" y="156" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Authentification AIS</text>
  <text x="500" y="170" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">session pour la suite</text>

  <text x="586" y="143" fill="#fb923c" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="600" y="100" width="160" height="80" rx="10" fill="rgba(251,146,60,0.08)" stroke="rgba(251,146,60,0.40)" strokeWidth="1"/>
  <text x="680" y="120" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">4 · API AIS</text>
  <text x="680" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Compte de sécurité</text>
  <text x="680" y="156" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">JDE F98OWSEC</text>
  <text x="680" y="170" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">ligne sign-on JDE</text>

  <text x="766" y="143" fill="#fb923c" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="780" y="100" width="160" height="80" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="860" y="120" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">5 · API AIS</text>
  <text x="860" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Mot de passe initial</text>
  <text x="860" y="156" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">User Security</text>
  <text x="860" y="170" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">actif immédiatement</text>
</svg>

| Étape | Canal | Ce qu'elle fait |
|---|---|---|
| 1 | **SQL** | Écrit la ligne d'identification utilisateur dans le master JDE. |
| 2 | **SQL** | Écrit la ligne des préférences d'affichage (langue, format de date, devise, fuseau, …). |
| 3 | **API REST AIS** | Authentifie le compte de service Nomajde auprès d'AIS pour obtenir un token utilisé par les deux appels suivants. |
| 4 | **API REST AIS** | Vérifie si l'utilisateur a déjà un compte de sécurité JDE, puis le crée le cas échéant — c'est ce qui rend l'utilisateur connu de la couche sign-on JDE. |
| 5 | **API REST AIS** | Fixe le mot de passe initial. Le compte est prêt à la prochaine connexion. |

Si une étape échoue, la chaîne s'arrête et l'opérateur est notifié — aucun utilisateur provisionné à moitié à reprendre derrière.

---

## Réinitialiser le mot de passe

Le bouton **Réinitialiser le mot de passe** de la boîte de dialogue appelle directement l'endpoint AIS JDE *change password*. L'administrateur saisit le nouveau mot de passe une fois, clique sur le bouton, et le changement est actif à la prochaine connexion de l'utilisateur. Le même flux sert à débloquer un compte dont le mot de passe a expiré.

---

## Conseils & bonnes pratiques

- **Créer un utilisateur via *Ajouter*, pas en SQL.** Une insertion directe dans le master utilisateur saute l'étape de provisionnement AIS — l'utilisateur apparaît dans la table mais ne peut pas se connecter. La chaîne en cinq étapes est ce qui rend le compte utilisable.
- **Upload Excel** pour une liste d'utilisateurs livrée par l'intégrateur — l'upload exécute la même chaîne pour chaque ligne, 50 utilisateurs sont provisionnés en un import.
- **Réinitialiser le mot de passe** est l'outil indiqué quand un opérateur signale un mot de passe oublié. C'est aussi ce que le support utilise pour une demande de déblocage — un nouveau mot de passe réinitialise le compteur d'échecs côté JDE.
- **Garder les onglets Rôles et Environnements cohérents.** Un utilisateur sans environnement ne peut pas se connecter ; un utilisateur sans rôle n'a aucun droit. Les environnements par défaut s'alimentent tout seuls, mais le rattachement de rôle reste une opération manuelle sur l'onglet *Rôles*.
