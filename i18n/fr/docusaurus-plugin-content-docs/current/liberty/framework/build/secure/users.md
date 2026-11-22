---
title: Utilisateurs
description: "L'onglet Liberty Next → Administrer → Accès → Utilisateurs — ajouter des utilisateurs locaux, gérer les utilisateurs OIDC arrivés à la première connexion, attribuer des rôles, activer ou désactiver un compte, accorder le statut de superutilisateur, réinitialiser les mots de passe."
keywords: [Liberty Framework, utilisateurs, AccessBuilder, utilisateur local, utilisateur OIDC, mot de passe, is_active, is_superuser, attribution de rôles]
---

# Utilisateurs

Un **utilisateur** dans Liberty est l'identité qui se connecte et porte des rôles. L'onglet Liberty Next → Administrer → Accès → Utilisateurs est l'endroit où créer les utilisateurs locaux, voir les utilisateurs OIDC qui se sont connectés au moins une fois, attribuer les rôles et cocher les cases Actif et superutilisateur.

La même interface gère les deux backends d'identité (TOML / DB) et les deux sources d'identité (locale / OIDC). Les différences portent sur **les champs modifiables** : les utilisateurs OIDC n'ont pas de mot de passe (il est chez l'IdP) et leur champ `provider` est en lecture seule.

---

## L'onglet Utilisateurs

<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="accu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="accu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="accu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="accu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="360" rx="14" fill="url(#accu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Accès</text>
  <rect x="833" y="28" width="131" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="898.5" y="42.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Recharger la config</text>
  <line x1="220" y1="60" x2="980" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236.0" y="74" width="359.0" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="245.0" y="84" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <circle cx="255.0" cy="94" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="272.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs</text>
  <text x="272.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Les comptes, leurs rôles et attributs</text>
  <rect x="605.0" y="74" width="359.0" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="614.0" y="84" width="20" height="20" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <circle cx="624.0" cy="94" r="4" fill="none" stroke="#c084fc" strokeWidth="1.4"/>
  <text x="641.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles</text>
  <text x="641.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Ce que chaque rôle peut ouvrir et les données qu’il voit</text>
  <rect x="815" y="124" width="149" height="22" rx="5" fill="url(#accu-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="889.5" y="138.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un utilisateur</text>
  <rect x="244" y="164" width="712" height="44" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="262" cy="186" r="6" fill="none" stroke="#94a3b8" strokeWidth="1.2"/>
  <text x="278" y="182" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">admin — Admin</text>
  <rect x="278" y="189" width="89" height="15" rx="7.5" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="322.5" y="199.7" fill="#fb923c" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">superutilisateur</text>
  <rect x="244" y="214" width="712" height="44" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="262" cy="236" r="6" fill="none" stroke="#94a3b8" strokeWidth="1.2"/>
  <text x="278" y="232" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">jdoe — John Doe</text>
  <rect x="278" y="239" width="40" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="298.0" y="249.7" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sales</text>
  <rect x="323" y="239" width="44" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="345.0" y="249.7" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">reader</text>
  <text x="374" y="250" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">company=00001,00050</text>
  <rect x="244" y="264" width="712" height="44" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="262" cy="286" r="6" fill="none" stroke="#94a3b8" strokeWidth="1.2"/>
  <text x="278" y="282" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">asmith — Ann Smith</text>
  <rect x="278" y="289" width="49" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="302.5" y="299.7" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">auditor</text>
  <rect x="244" y="314" width="712" height="44" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="262" cy="336" r="6" fill="none" stroke="#94a3b8" strokeWidth="1.2"/>
  <text x="278" y="332" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">bmartin — Bob Martin</text>
  <rect x="278" y="339" width="49" height="15" rx="7.5" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="302.5" y="349.7" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">inactif</text>
  <rect x="332" y="339" width="44" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="354.0" y="349.7" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">reader</text>
  <rect x="236" y="156" width="728" height="210" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs · Rôles</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">deux cartes en haut</text>
  <line x1="200" y1="87.0" x2="236" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accu-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un clic sur une ligne</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre l'utilisateur</text>
  <line x1="200" y1="217.0" x2="244" y2="236" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accu-arrow)"/>
  <rect x="20" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Inactif</text>
  <text x="30" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ne peut pas se connecter</text>
  <line x1="200" y1="337.0" x2="278" y2="346" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accu-arrow)"/>
  <rect x="1000" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter un utilisateur</text>
  <text x="1010" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un compte local</text>
  <line x1="1000" y1="147.0" x2="964" y2="135" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accu-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles, attributs</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sous le nom</text>
  <line x1="1000" y1="247.0" x2="494" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accu-arrow)"/>
</svg>

Chaque ligne affiche l'identifiant et le nom complet, puis les pastilles — inactif, superutilisateur, les rôles attribués — et les attributs de périmètre de données (`company=00001,00050`). Un clic sur la ligne ouvre l'utilisateur.

| Pastille | Signification |
|---|---|
| **superutilisateur** (orange) | `is_superuser = true` — passe outre chaque vérification de permission. |
| **inactif** (rouge) | `is_active = false` — l'utilisateur ne peut pas se connecter. Ses sessions existantes s'arrêtent au prochain rafraîchissement de jeton. |
| **Aucun rôle** (atténué) | Aucun rôle attribué et pas de superutilisateur — l'utilisateur se connecte mais ne voit rien. |
| **Noms de rôles** (bleu) | Chaque rôle attribué, une pastille par rôle. |

---

## Ajouter un utilisateur local

Cliquer sur **＋ Ajouter un utilisateur**. La fenêtre **Ajouter un utilisateur** s'ouvre, tous les champs vides : Identifiant, puis Nom complet et E-mail côte à côte, Rôles, Attributs de périmètre de données, les cases **Actif** et **superutilisateur**, le Mot de passe et **Demander un nouveau mot de passe à la prochaine connexion**.

<svg viewBox="0 0 1200 442" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="accd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="accd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="accd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="accd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="280" y="20" width="640" height="402" rx="14" fill="url(#accd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="300" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter un utilisateur</text>
  <line x1="280" y1="66" x2="920" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="300" y="86" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">IDENTIFIANT</text>
  <rect x="300" y="92" width="600" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="310" y="106.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">jdoe</text>
  <text x="300" y="132" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM COMPLET</text>
  <rect x="300" y="138" width="294.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="310" y="152.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">John Doe</text>
  <text x="606.0" y="132" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">E-MAIL</text>
  <rect x="606.0" y="138" width="294.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616.0" y="152.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">jdoe@example.com</text>
  <text x="300" y="178" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÔLES</text>
  <rect x="300" y="187" width="56" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="328.0" y="199.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sales  ×</text>
  <rect x="362" y="184" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="372" y="198.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Ajouter un rôle</text>
  <text x="530" y="198.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="300" y="224" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ATTRIBUTS DE PÉRIMÈTRE DE DONNÉES</text>
  <rect x="300" y="230" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="310" y="244.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">company</text>
  <rect x="416" y="230" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="426" y="244.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">00001</text>
  <rect x="562" y="230" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="574.0" y="244.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="300" y="258" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="310" y="272.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Ajouter un attribut…</text>
  <text x="508" y="272.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="300" y="289" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M302.5,294.5 L304.8,296.8 L308.8,292" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="317" y="298" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Actif</text>
  <rect x="361.6" y="289" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="378.6" y="298" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">superutilisateur</text>
  <text x="300" y="316" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MOT DE PASSE</text>
  <rect x="300" y="322" width="600" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="310" y="336.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">••••••••••</text>
  <text x="886" y="337" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="300" y="351" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M302.5,356.5 L304.8,358.8 L308.8,354" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="317" y="360" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Demander un nouveau mot de passe à la prochaine connexion (celui saisi ici est temporaire)</text>
  <line x1="280" y1="376" x2="920" y2="376" stroke="#1f2937" strokeWidth="1"/>
  <rect x="770" y="388" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="802.0" y="402.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="840" y="388" width="64" height="22" rx="5" fill="url(#accd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="872.0" y="402.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="40" y="110" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="50" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Identité</text>
  <text x="50" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">identifiant, nom complet, e-mail</text>
  <line x1="240" y1="127.0" x2="300" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accd-arrow)"/>
  <rect x="40" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="50" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles</text>
  <text x="50" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">choisis dans la liste</text>
  <line x1="240" y1="217.0" x2="300" y2="195" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accd-arrow)"/>
  <rect x="40" y="290" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="50" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Attributs de périmètre</text>
  <text x="50" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">alimentent les règles de lignes</text>
  <line x1="240" y1="307.0" x2="300" y2="245" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accd-arrow)"/>
  <rect x="960" y="300" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="970" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actif, superutilisateur</text>
  <text x="970" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">connexion ; toutes les permissions</text>
  <line x1="960" y1="317.0" x2="443.6" y2="294" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accd-arrow)"/>
  <rect x="960" y="380" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="970" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Mot de passe temporaire</text>
  <text x="970" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">changé à la prochaine connexion</text>
  <line x1="960" y1="397.0" x2="900" y2="356" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#accd-arrow)"/>
</svg>

### Champs

| Champ | Requis | Notes |
|---|---|---|
| **Identifiant** | oui | Lettres, chiffres, soulignés, points et tirets. Sert d'identifiant de connexion, de sujet JWT et d'identité d'audit. **Immuable** après création. |
| **Nom complet** | non | Le nom d'affichage montré dans les en-têtes et les colonnes d'audit. |
| **E-mail** | non | Où un lien *Mot de passe oublié ?* est envoyé (voir [plus bas](#forgot)), et l'adresse des notifications. |
| **Mot de passe** | oui (pour les nouveaux utilisateurs) | Au moins 8 caractères. Enregistré sous forme de hachage Argon2id, jamais relisible. Laisser vide en modification pour conserver le mot de passe actuel. |
| **Demander un nouveau mot de passe à la prochaine connexion** | coché par défaut pour un nouvel utilisateur | Le mot de passe saisi ici est temporaire : l'utilisateur choisit le sien à la première connexion (voir [plus bas](#first-sign-in)). Comptes locaux uniquement. |
| **Rôles** | non | Sélecteur de pastilles — taper ou choisir dans la liste. La liste contient chaque rôle configuré sous l'onglet Rôles. |
| **Actif** | oui (activé par défaut) | Désactivé, l'utilisateur ne peut pas se connecter ; les sessions existantes s'arrêtent au prochain rafraîchissement de jeton. |
| **Superutilisateur** | non | Activé, passe outre chaque vérification de permission et chaque périmètre de données. À utiliser avec parcimonie. |
| **Attributs de périmètre de données** | non | Paires clé / valeur lues par le périmètre de données des rôles — voir [plus bas](#attributes). |

Cliquer sur **Enregistrer** — l'utilisateur est créé et la fenêtre se ferme. Le nouvel utilisateur apparaît en tête de liste.

### Endpoints en coulisses

| Action | Endpoint |
|---|---|
| Création | `POST /admin/access/users` |
| Mise à jour | `PATCH /admin/access/users/{username}` |
| Changement de mot de passe | `POST /admin/access/users/{username}/password` |

Le backend TOML écrit dans `config/auth.toml` de façon atomique ; le backend DB commit dans `ly2_users` / `ly2_user_roles`. Dans les deux cas, le changement prend effet immédiatement — l'utilisateur peut se connecter tout de suite avec le nouveau mot de passe.

---

## Modifier un utilisateur existant

Cliquer sur n'importe quelle ligne d'utilisateur pour ouvrir l'éditeur avec ses valeurs courantes :

| Champ | Modifiable | Notes |
|---|---|---|
| **Identifiant** | non | Fixé à la création. |
| **Nom complet** / **E-mail** | oui | Mise à jour libre. |
| **Mot de passe** | oui (utilisateurs locaux uniquement) | Laisser vide pour conserver le mot de passe actuel. Saisir un nouveau (8 caractères ou +) le définit à l'enregistrement. |
| **Rôles** | oui | Ajouter / retirer des pastilles. |
| **Actif** | oui | Décocher pour désactiver. |
| **Superutilisateur** | oui | Cocher ou décocher pour accorder ou retirer le statut de superutilisateur. |
| **Attributs de périmètre de données** | oui | Voir [plus bas](#attributes). |

Les enregistrements passent par `PATCH /admin/access/users/{username}` pour les mises à jour de propriétés et par `POST /admin/access/users/{username}/password` si un nouveau mot de passe a été saisi.

:::tip[Quand l'utilisateur est connecté]
Les changements n'interrompent pas la session courante. Les nouveaux rôles / le drapeau de désactivation / le mot de passe prennent effet au prochain **rafraîchissement** (dans le TTL du jeton d'accès — par défaut 1 heure) ou à la **déconnexion + reconnexion**.
:::

---

## Un nouveau mot de passe à la première connexion \{#first-sign-in\}

Un compte créé — ou réinitialisé par un administrateur — avec **Demander un nouveau mot de passe à la prochaine connexion** s'ouvre sur *Choisissez votre mot de passe* : le mot de passe temporaire, le nouveau (8 caractères ou plus) et sa confirmation. Tant que ce n'est pas fait, le serveur refuse tout appel sauf le changement lui-même (HTTP 403 *password change required*) : le mot de passe temporaire ne sert à rien d'autre, ni par la page ni par l'API. Le nouveau mot de passe prend effet aussitôt — sans nouvelle connexion. En ligne de commande : `liberty-admin create-user … --must-change`, `liberty-admin set-password … --must-change`. Un compte OIDC n'est jamais concerné (son mot de passe est celui du fournisseur d'identité).

## Mot de passe oublié \{#forgot\}

Quand le SMTP est configuré (*Liberty Next → Administrer → App*, notifications), la page de connexion affiche **Mot de passe oublié ?**. L'utilisateur indique **son identifiant et l'e-mail du compte** ; quand les deux correspondent à un compte local actif, un lien est envoyé à cette adresse. Le lien sert **une seule fois et pendant une heure** — il est lié au mot de passe pour lequel il a été émis : tout changement de mot de passe, la réinitialisation comprise, l'annule. La page répond la même chose que les deux correspondent ou non : elle ne révèle jamais qui a un compte ; les demandes sont limitées par adresse. Le lien pointe vers **Adresse publique** (*App*, `[app] public_url`) — à renseigner quand les utilisateurs passent par un proxy inverse ou un autre nom ; vide, l'adresse du navigateur est utilisée.

## Attributs de périmètre de données \{#attributes\}

Le [périmètre de données](./roles-and-permissions.md#data-scope) d'un rôle peut prendre ses valeurs chez l'utilisateur au lieu de les lister : une règle *Company (CO) = user.company* permet à un seul rôle de servir toutes les filiales, chaque utilisateur voyant ses propres sociétés.

Dans la fiche de l'utilisateur, **Attributs de périmètre de données** contient une ligne par attribut : une clé (`company`) et une valeur (`00001, 00050` — une virgule forme une liste). **Ajouter un attribut…** propose les clés déjà utilisées par les rôles. Un utilisateur qui n'a pas l'attribut qu'une règle demande ne voit aucune ligne au travers de cette règle.
 En ligne de commande : `liberty-admin set-attributes alice company=00001,00050`.
La liste des utilisateurs affiche les attributs sur chaque carte (`company=00001,00050`), et l'utilisateur les retrouve, avec son périmètre de données en clair, dans sa fenêtre **Profil**. Un utilisateur qui détient `mcp:use` y trouve aussi un onglet **Jetons d'accès** — voir [Connecter Claude (MCP)](../../mcp.md#token).

---

## Utilisateurs OIDC — les différences

Les utilisateurs OIDC arrivent dans la liste des Utilisateurs **après leur première connexion** — Liberty les crée automatiquement avec `provider = "oidc"`. L'éditeur pour un utilisateur OIDC a la même apparence, mais :

| Champ | Modifiable pour OIDC ? | Notes |
|---|---|---|
| **Identifiant** | non | Identique au local. |
| **Nom complet** / **E-mail** | techniquement oui, mais… | À chaque connexion OIDC, ces champs sont **rafraîchis depuis les claims de l'IdP**. Les modifications manuelles sont écrasées. Les modifier dans l'IdP. |
| **Mot de passe** | non | L'IdP détient le mot de passe. Le champ est désactivé ou rejeté avec HTTP 400. |
| **Rôles** | oui | C'est la raison principale qui pousse les opérateurs à visiter les utilisateurs OIDC — pour attribuer les rôles. |
| **Actif** | oui | Désactivé, la connexion est refusée même avec des jetons OIDC valides. |
| **Superutilisateur** | oui | Cocher pour accorder le contournement. |

La séquence d'onboarding standard :

1. La nouvelle recrue se connecte via OIDC pour la première fois.
2. Elle arrive avec **aucun rôle** → elle voit une application vide.
3. Elle prévient son administrateur : « je suis entré mais je ne vois rien ».
4. L'administrateur ouvre *Liberty Next → Administrer → Accès → Utilisateurs*, la retrouve, attribue les bons rôles, enregistre.
5. L'utilisatrice rafraîchit la page (ou se déconnecte + reconnecte) et dispose alors de ses accès.

Pour les installations qui veulent pré-créer des utilisateurs OIDC avec leurs rôles déjà attachés, des scripts peuvent appeler `POST /admin/access/users` avec `provider = "oidc"` et le `provider_subject` attendu (le claim `sub`). À la première connexion, le framework retrouve l'utilisateur pré-créé et l'utilise. Les installations standard sautent cette étape et attribuent les rôles après la première connexion.

---

## Désactiver un utilisateur \{#deactivate\}

Les utilisateurs ne se suppriment pas : pour écarter quelqu'un, décocher **Actif** et enregistrer. Il ne peut plus se connecter ; sa session en cours prend fin à l'expiration de son jeton d'accès (une heure au plus), puisque le renouvellement est refusé. Rôles, attributs et historique sont conservés, et cocher de nouveau **Actif** rétablit le compte tel quel.

---

## Ce que l'on fait concrètement — flux types

### Onboarder une recrue locale

1. *Liberty Next → Administrer → Accès → Utilisateurs → ＋ Ajouter un utilisateur*.
2. Identifiant = identifiant d'entreprise, mot de passe = une chaîne provisoire qu'elle changera, e-mail = son adresse.
3. Attribuer les rôles selon son équipe (`analyst`, `reporter`, …).
4. Enregistrer.
5. Lui transmettre les identifiants temporaires par le canal habituel de l'entreprise.
6. Elle se connecte avec et arrive sur *Choisissez votre mot de passe* — avec **Demander un nouveau mot de passe à la prochaine connexion** coché (par défaut), rien d'autre ne s'ouvre tant qu'elle n'a pas défini le sien.

### Onboarder une recrue OIDC

1. Elle se connecte via OIDC la première fois — Liberty crée automatiquement le compte.
2. Elle signale qu'elle n'a aucun accès.
3. *Liberty Next → Administrer → Accès → Utilisateurs*, la retrouver, attribuer les rôles, enregistrer.
4. Elle rafraîchit → elle est dedans.

### Changer le mot de passe d'un utilisateur (en tant qu'administrateur)

1. *Liberty Next → Administrer → Accès → Utilisateurs*, cliquer sur l'utilisateur.
2. Saisir le nouveau mot de passe dans le champ **Mot de passe** (8 caractères ou +) ; cocher **Demander un nouveau mot de passe à la prochaine connexion** pour qu'il soit temporaire.
3. Enregistrer.
4. Le prévenir. Il se connecte avec le nouveau mot de passe (et, s'il est temporaire, choisit le sien) ; sa session existante continue de fonctionner jusqu'à expiration du jeton d'accès.

Avec le SMTP configuré, les utilisateurs peuvent aussi le réinitialiser eux-mêmes — [Mot de passe oublié ?](#forgot).

### Révoquer un compte immédiatement

1. Décocher **Actif** et enregistrer.
2. Si le délai pouvant aller jusqu'à 1 heure avant l'expiration du jeton d'accès courant est inacceptable, faire tourner le secret de signature JWT (`LIBERTY_JWT_SECRET`) et redémarrer. Chaque jeton existant est invalidé — un coup de marteau lourd, mais la seule révocation **immédiate** offerte par Liberty.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| Utilisateur OIDC sans rôles après connexion. | Comportement attendu — l'opérateur n'en a pas encore attribué. | Ouvrir *Liberty Next → Administrer → Accès → Utilisateurs*, attribuer les rôles. |
| Modifier le courriel d'un utilisateur OIDC revient à la connexion suivante. | Le claim de l'IdP l'emporte ; le framework rafraîchit depuis le dernier jeton. | Modifier le courriel au niveau de l'IdP. |
| Tenter de définir un mot de passe pour un utilisateur OIDC. | Le backend rejette avec 400. | Les utilisateurs OIDC n'ont pas de mot de passe local — ils se connectent via le fournisseur. |
| Changer le rôle d'un utilisateur ne prend pas effet immédiatement. | Le JWT de l'utilisateur contient toujours les anciens rôles. | Il rafraîchit (ou se déconnecte + reconnecte) — dans le TTL du jeton d'accès, les nouveaux rôles s'appliquent. |
| Un utilisateur soumis à un périmètre par attribut ne voit rien. | L'utilisateur n'a pas de valeur pour l'attribut lu par la règle. | L'ajouter dans **Data-scope attributes**. |
| Passer un utilisateur en superutilisateur pour corriger un manque de permission. | Cela fonctionne, mais cela passe outre chaque vérification — y compris celles qu'il ne devrait pas contourner. | Ajouter plutôt la permission manquante à l'un de ses rôles. |

---

## Suite

- [Rôles et permissions](./roles-and-permissions.md) — ce qu'il faut attribuer une fois l'utilisateur créé.
- [Se connecter](./sign-in.md) — comment les utilisateurs s'authentifient réellement.
- [Secrets chiffrés](./encrypted-secrets.md) — le switch 🔒 pour les identifiants ailleurs dans le framework.
