---
title: Paramètres de l'application
description: "Paramètres → App dans Liberty Next : les six sections — Application (nom, adresse, journaux, langue, valeurs par défaut de l'interface, onglets, navigation, rechargement à chaud, mode épais d'Oracle), Licence, Assistant IA, Notifications (e-mail), OpenID Connect (SSO), Charte des PDF — le rôle de chaque champ, les secrets chiffrés, et ce qui demande un redémarrage."
keywords: [Liberty Next, Paramètres App, licence, assistant IA, notifications, SMTP, OpenID Connect, SSO, habillage PDF, période par défaut, taille de page, Oracle thick]
---

# Paramètres de l'application

**Paramètres → App** regroupe les réglages de l'application. Chaque section se replie ; son en-tête affiche un résumé (*configurée*, *absente — mode restreint*, *aucune clé API*, *désactivé*…). **Enregistrer** valide et applique toute la page d'un coup.

Les champs secrets — clé de licence, clé d'API Anthropic, mot de passe SMTP, secret client OIDC — sont des saisies masquées avec un œil ; ils sont chiffrés avec la clé maître à l'enregistrement ([Chiffrement](../configuration/encryption-secrets.md)).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 530" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sap-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sap-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sap-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sap-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="506" rx="14" fill="url(#sap-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres · App</text>
  <rect x="880" y="28" width="80" height="22" rx="5" fill="url(#sap-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="920.0" y="42.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="720" height="26" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="252" y="91" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾  App</text>
  <rect x="840" y="78" width="78" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="879.0" y="90.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Liberty Next</text>
  <text x="260" y="125" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Name</text>
  <rect x="450" y="110" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="124.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Liberty Next</text>
  <text x="260" y="155" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Host · Port</text>
  <rect x="450" y="140" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="154.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">0.0.0.0 · 8000</text>
  <text x="260" y="185" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Log level</text>
  <rect x="450" y="170" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="184.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">info ▾</text>
  <text x="260" y="215" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Default language</text>
  <rect x="450" y="200" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="214.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">fr ▾</text>
  <text x="260" y="245" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Default period (dashboards)</text>
  <rect x="450" y="230" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="244.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Ce mois-ci ▾</text>
  <text x="260" y="275" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Grid page size</text>
  <rect x="450" y="260" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="274.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50</text>
  <text x="260" y="305" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Dashboard cache (seconds)</text>
  <rect x="450" y="290" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="460" y="304.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">60</text>
  <rect x="260" y="323" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M262.5,328.5 L264.8,330.8 L268.8,326" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="277" y="332" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Hot reload</text>
  <rect x="420" y="323" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="437" y="332" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Oracle thick mode</text>
  <rect x="240" y="350" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="366" fill="#cbd5e1" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  License</text>
  <rect x="862" y="353" width="68" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="896.0" y="365.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">configured</text>
  <rect x="240" y="380" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="396" fill="#cbd5e1" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  AI Assistant</text>
  <rect x="862" y="383" width="68" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="896.0" y="395.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">no API key</text>
  <rect x="240" y="410" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="426" fill="#cbd5e1" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  Notifications (email)</text>
  <rect x="832" y="413" width="98" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="881.0" y="425.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">smtp.example.com</text>
  <rect x="240" y="440" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="456" fill="#cbd5e1" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  OpenID Connect (SSO)</text>
  <rect x="872" y="443" width="58" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="901.0" y="455.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">disabled</text>
  <rect x="240" y="470" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="486" fill="#cbd5e1" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▸  PDF branding</text>
  <rect x="10" y="74" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Six sections</text>
  <text x="20" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">repliables, avec un résumé</text>
  <line x1="210" y1="91.0" x2="240" y2="87" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Section App</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nom, adresse, langue…</text>
  <line x1="210" y1="217.0" x2="260" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un seul enregistrement</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">appliqué aussitôt en général</text>
  <line x1="1000" y1="47.0" x2="960" y2="39" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
  <rect x="1000" y="330" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pastilles d'état</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">licence, clé IA, SMTP, SSO</text>
  <line x1="1000" y1="347.0" x2="940" y2="363" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sap-arrow)"/>
</svg>

---

## Application \{#app\}

| Champ | Remarques |
|---|---|
| **Nom de l'application** | Le nom de l'application. |
| **Hôte d'écoute**, **Port** | Adresse et port d'écoute. **Redémarrage nécessaire.** |
| **Niveau de journal** | `debug`, `info`, `warning`, `error`, `critical`. **Redémarrage nécessaire.** |
| **Langue par défaut** | Langue des libellés quand une requête n'en indique pas. |
| **Période par défaut (tableaux de bord)** | Le préréglage d'ouverture d'un tableau de bord qui n'en indique pas — voir [Tableaux de bord](../dashboards.md#period). |
| **Taille de page des grilles** | La taille de page initiale des grilles (10 à 10 000, 50 par défaut). La taille propre d'une vue enregistrée l'emporte. |
| **Cache des tableaux de bord (secondes, 0 = aucun)** | Durée de réutilisation des résultats des widgets à la réouverture d'un tableau de bord (60 par défaut). |
| **Plusieurs onglets à la fois (sinon : une page à la fois)** | Activé par défaut. Désactivé : ouvrir une page remplace la page courante. |
| **Fermer les onglets au changement d'application** | Désactivé par défaut. Activé : choisir une autre application dans le sélecteur ferme les onglets des autres applications ; les onglets Paramètres, Surveillance et d'exécution restent ouverts. |
| **Onglets au maximum** | 5 par défaut (de 1 à 50). Une fois la limite atteinte, ouvrir une page ferme l'onglet le plus ancien. |
| **Les navigations s'ouvrent dans l'onglet courant (…)** | Désactivé par défaut. Activé : la navigation depuis une ligne s'ouvre en panneau dans l'onglet courant, avec un fil d'Ariane et **Retour**, sauf si l'action en décide autrement — voir [Actions](./screens/actions-and-lifecycle.md#drill). |
| **Recharger à chaud les fichiers TOML de configuration quand ils changent** | Appliquer les fichiers de configuration dès qu'ils changent — voir [Rechargement à chaud](../configuration/hot-reload.md). |
| **Mode épais Oracle (…)** | L'Oracle Instant Client pour tous les pools Oracle — nécessaire pour le chiffrement réseau natif et les LOB au travers d'un DB link. Pris en compte après un redémarrage. Voir [Connecteurs](../connectors.md#oracle-thick). |

Quand un changement enregistré demande un redémarrage, la page l'indique : *Enregistré. Redémarrez le serveur pour appliquer les nouveaux réglages.*

---

## Licence \{#license\}

**Clé de licence** : coller la clé fournie par Nomana-IT. Les connecteurs sous licence se chargent aussitôt, sans redémarrage. Voir [Clé de licence](./secure/license-key.md).

---

## Assistant IA \{#ai\}

| Champ | Remarques |
|---|---|
| **Activé** | L'assistant répond ; les utilisateurs ont besoin de la permission `ai:chat`. |
| **Clé API Anthropic** | Sans elle, l'assistant indique qu'il n'est pas configuré. |
| **Modèle**, **Effort**, **Jetons maximum**, **Réflexion adaptative** | Le modèle, la profondeur de raisonnement et la longueur des réponses. |
| **Itérations d'outils maximum** | Nombre maximal d'appels d'outils par réponse (8 par défaut). |
| **Délai de la requête (s)** | 120 par défaut. |
| **Invite système** | Vide : les consignes intégrées. |
| **Outils connecteurs** | L'assistant peut lister les connecteurs et lancer leurs requêtes **de lecture**. |
| **Outil API** | L'assistant peut appeler des endpoints d'API — désactivé par défaut, un endpoint pouvant modifier des données. |
| **Outils de construction** | L'assistant peut proposer requêtes, entrées du dictionnaire, écrans et entrées de menu ; l'utilisateur applique la proposition. |
| **Connecteurs autorisés** | Les connecteurs utilisables par l'assistant ; vide signifie tous. |
| **Domaines autorisés**, **Lectures maximum par tour** | Les pages web que l'assistant peut lire ; sans domaine, aucun accès au web. |
| **Outils d'exploitation** | L'assistant peut lire l'état des tâches, la fin du journal du serveur et les contrôles d'intégrité — désactivé par défaut, réservé aux installations dont les utilisateurs du chat sont des administrateurs. |
| **Modèles au choix des utilisateurs** | Les modèles proposés par le sélecteur **Modèle** du panneau en plus du modèle ci-dessus ; vide : le modèle ci-dessus seul, sans sélecteur. |
| **Questions de départ** | Les questions affichées sur une conversation vide : partout (`*`), par application, ou par couple *application/écran* — l'ensemble le plus précis l'emporte. Elles priment sur les questions livrées par une application ([Paramètres → IA](../ai-assistant.md#settings-ai)). |

Voir [Assistant IA](../ai-assistant.md).

---

## Notifications (e-mail) \{#notifications\}

**Notifications activées**, puis le **Serveur** (Hôte SMTP, Port, Chiffrement — STARTTLS, SSL / TLS implicite ou aucun —, Délai), le **Compte** (Utilisateur, Mot de passe) et l'**Envoi** (Adresse d'expédition, Conserver les notifications lues — en jours, `0` = toujours). Voir [Notifications](../../nomaflow/notifications.md#smtp).

---

## OpenID Connect (SSO) \{#section-4--openid-connect-sso\}

| Champ | Remarques |
|---|---|
| **Activé** | Affiche le bouton OIDC sur la page de connexion. |
| **URL de découverte** | Le `.well-known/openid-configuration` du fournisseur. |
| **ID client**, **Secret client**, **Scopes** | Tels qu'enregistrés chez le fournisseur (`openid email profile` par défaut). |
| **Revendication identifiant**, **Revendication e-mail**, **Revendication nom** | Les revendications du jeton d'identité qui renseignent l'utilisateur (`preferred_username`, `email`, `name`). |
| **URL de redirection (proxy)**, **Redirection frontend** | Seulement derrière un proxy qui réécrit l'hôte, ou pour un front qui gère lui-même les jetons. |

Déclarer `https://<hôte>/auth/oidc/callback` comme URI de redirection chez le fournisseur. Voir [Se connecter](./secure/sign-in.md#oidc).

---

## Charte des PDF \{#branding\}

Les réglages de couverture et de page des rapports PDF : auteur, couleurs principales, textes de couverture, pied de page. Les champs vides gardent les valeurs par défaut du framework.

---

## Ailleurs que sur cette page \{#elsewhere\}

| Réglage | Où |
|---|---|
| Pools et leurs mots de passe | Paramètres → Pools. |
| Utilisateurs et rôles | Paramètres → Access. |
| La clé maître et le secret JWT | L'environnement — voir [Variables d'environnement](../configuration/environment-variables.md). |
