---
title: Utilisateurs
description: "Gérer les comptes utilisateurs NomaUBL : création, modification, désactivation ou suppression d'utilisateur, affectation à un rôle et réinitialisation de mot de passe."
keywords: [NomaUBL, utilisateurs, comptes, affectation de rôle, réinitialisation mot de passe, désactivation, RBAC]
---

# Utilisateurs

Cet écran gère les comptes utilisateurs NomaUBL : création de nouveaux utilisateurs, affectation d'un **rôle** (défini dans *Configuration → Security → Roles*), édition du profil, désactivation des comptes et réinitialisation des mots de passe.

Les comptes utilisateurs sont applicatifs et indépendants de la source — ils s'appliquent indifféremment quand NomaUBL est connecté à JD Edwards, SAP, NetSuite ou un ERP personnalisé. Le compte `admin` par défaut (avec les rôles initiaux) est provisionné par l'action **Initialize Database** de *Database Connectors → NomaUBL*.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="usr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="usr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="usr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="420" rx="14" fill="url(#usr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs</text>
  <rect x="664" y="30" width="116" height="22" rx="5" fill="url(#usr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="722" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">+ Nouvel utilisateur</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="540" height="34" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="105" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IDENTIFIANT · NOM · E-MAIL · RÔLE · ACTIF · ACTIONS</text>

  <rect x="240" y="124" width="540" height="32" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="143" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">admin · Marie Dupont · marie.dupont@acme.fr · admin</text>
  <rect x="660" y="132" width="44" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="682" y="143" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Oui</text>
  <text x="724" y="143" fill="#94a3b8" fontSize="11" textAnchor="middle">✏️</text>
  <text x="752" y="143" fill="#f87171" fontSize="11" textAnchor="middle">🗑</text>

  <rect x="240" y="160" width="540" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="179" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">jdoe · John Doe · john.doe@acme.fr · operator</text>
  <rect x="660" y="168" width="44" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="682" y="179" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Oui</text>
  <text x="724" y="179" fill="#94a3b8" fontSize="11" textAnchor="middle">✏️</text>
  <text x="752" y="179" fill="#f87171" fontSize="11" textAnchor="middle">🗑</text>

  <rect x="240" y="196" width="540" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">smartin · Sophie Martin · s.martin@acme.fr · viewer</text>
  <rect x="660" y="204" width="44" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="682" y="215" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Oui</text>
  <text x="724" y="215" fill="#94a3b8" fontSize="11" textAnchor="middle">✏️</text>
  <text x="752" y="215" fill="#f87171" fontSize="11" textAnchor="middle">🗑</text>

  <rect x="240" y="232" width="540" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="251" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">paudit · Paul Auditor · p.auditor@acme.fr · auditor</text>
  <rect x="660" y="240" width="40" height="16" rx="8" fill="rgba(255,69,58,0.10)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="680" y="251" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Non</text>
  <text x="724" y="251" fill="#94a3b8" fontSize="11" textAnchor="middle">✏️</text>
  <text x="752" y="251" fill="#f87171" fontSize="11" textAnchor="middle">🗑</text>

  <rect x="240" y="296" width="540" height="124" rx="10" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="252" y="316" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FORMULAIRE D'ÉDITION</text>

  <text x="252" y="338" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IDENTIFIANT</text>
  <rect x="332" y="328" width="180" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="342" y="344" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">jdoe</text>
  <text x="528" y="338" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÔLE</text>
  <rect x="572" y="328" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="582" y="344" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">operator ▾</text>

  <text x="252" y="370" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM COMPLET</text>
  <rect x="332" y="360" width="220" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="342" y="376" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="568" y="370" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIF</text>
  <rect x="612" y="362" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="619" y="373" fill="white" fontSize="10" textAnchor="middle">✓</text>

  <rect x="252" y="394" width="116" height="22" rx="5" fill="url(#usr-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="310" y="409" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">💾 Enregistrer</text>
  <rect x="378" y="394" width="140" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="448" y="409" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🔑 Réinitialiser mot de passe</text>

  <rect x="20" y="118" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="133" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tableau des utilisateurs</text>
  <text x="30" y="146" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">login · nom · e-mail · rôle · état</text>
  <line x1="200" y1="134" x2="240" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usr-arrow)"/>

  <rect x="820" y="232" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bascule Actif</text>
  <text x="830" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">désactiver sans supprimer</text>
  <line x1="820" y1="248" x2="704" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usr-arrow)"/>

  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Formulaire d'édition</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rôle + actif + réinitialisation</text>
  <line x1="200" y1="356" x2="332" y2="340" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usr-arrow)"/>
</svg>

---

## Liste des utilisateurs

Le tableau en bas de la page liste l'ensemble des comptes utilisateurs.

| Colonne | Description |
|---|---|
| **Username** | Identifiant de connexion du compte. |
| **Full Name** | Nom complet affiché dans l'interface. |
| **Email** | Adresse e-mail du compte — utilisée pour les notifications et les processus de réinitialisation de mot de passe. |
| **Role** | Rôle actuellement affecté à l'utilisateur (l'un des rôles définis dans *Configuration → Security → Roles*). |
| **Active** | `Yes` (vert) quand le compte peut se connecter ; `No` (rouge) quand il est désactivé mais conservé pour la traçabilité. |
| **Actions** | **✏️** ouvre le formulaire d'édition de l'utilisateur ; **🗑** supprime l'utilisateur après une confirmation navigateur. |

Quand le tableau est vide, un message renvoie vers *Initialize Database* — le compte `admin` initial est créé pendant cette opération.

---

## Création d'un utilisateur

Cliquer sur **+ Nouvel utilisateur** en haut à droite de la section ouvre le formulaire de création. Champs :

| Champ | Description |
|---|---|
| **Username** | Identifiant de connexion. Doit être unique. **Non modifiable après création.** |
| **Password** | Mot de passe initial du compte. |
| **Full Name** | Nom complet affiché dans l'interface. |
| **Email** | Adresse e-mail du compte. |
| **Role** | Rôle affecté à l'utilisateur (liste déroulante des rôles définis dans *Security → Roles*). |

Cliquer sur **Créer** pour enregistrer ou sur **Annuler** pour annuler.

---

## Édition d'un utilisateur

Cliquer sur **✏️** sur une ligne ouvre le formulaire d'édition. Le formulaire est identique à celui de création, avec trois différences :

| Champ | Comportement en édition |
|---|---|
| **Username** | Masqué — les identifiants sont immuables. |
| **Password** | Masqué — utiliser **Reset Password** ci-dessous à la place. |
| **Active** | `Yes` / `No` — autorise ou non la connexion. La désactivation préserve l'historique de l'utilisateur sans lui accorder d'accès. |
| **Reset Password** | Champ optionnel. **Laisser vide pour conserver le mot de passe actuel** ; saisir une nouvelle valeur pour l'écraser. |

Cliquer sur **Enregistrer** pour enregistrer ou sur **Annuler** pour annuler.

---

## Suppression d'un utilisateur

Cliquer sur **🗑** sur une ligne. Une confirmation navigateur s'affiche (`Delete user "X"?`). La confirmation supprime le compte immédiatement — aucune restauration possible (pas de soft delete). Préférer **Active = No** pour révoquer un accès temporairement.

---

## Messages de statut

Des messages en ligne s'affichent sous le tableau :

- `User created` / `User updated` / `User deleted` en cas de succès.
- Le message d'erreur original renvoyé par l'API en cas d'échec (par ex. doublon d'identifiant, champ manquant).

---

## Conseils & bonnes pratiques

- **Aligner Username sur l'identifiant SSO / d'entreprise** dès que possible, même si NomaUBL n'est pas encore fédéré — la migration SSO future en sera grandement simplifiée.
- **Définir un mot de passe initial robuste** à la création, puis demander à l'utilisateur de le changer dès la première connexion.
- **Préférer *Active = No* à la suppression** au départ d'un collaborateur — l'accès est immédiatement révoqué, la piste d'audit est conservée.
- **Utiliser Reset Password avec parcimonie.** Quand les utilisateurs peuvent changer leur mot de passe ailleurs, ce champ sert principalement au déblocage après perte de mot de passe.
- **Relancer *Initialize Database*** *(Database Connectors → NomaUBL)* sur un déploiement neuf si aucun utilisateur n'existe — l'opération provisionne le compte `admin` initial.
- **Affecter un rôle à chaque utilisateur.** Sans rôle valide, l'utilisateur arrive sans permission et voit une navigation vide.
