---
title: La page Supervision
description: "Présentation carte par carte de la page Supervision — bandeau de KPI, Pools, Utilisateurs connectés, Verrous détenus et fil de journaux en direct. Sens de chaque colonne et quand intervenir."
keywords: [Liberty Framework, supervision, tableau de bord technique, pools, connexions, sessions, verrous de lignes, fil de journaux, filtre de journaux]
---

# La page Supervision

La page Supervision est une vue défilante unique avec cinq cartes. Cette page décrit chacune d'elles — le sens de chaque colonne, les valeurs saines, le moment où agir.

Accéder à la page depuis l'entrée **📊 Supervision** dans la barre latérale gauche (visible aux superutilisateurs et aux rôles munis de `monitoring:view`).

---

## En un coup d'œil

<svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="md-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="360" rx="14" fill="url(#md-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">📊 Supervision</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="220" height="64" rx="8" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)"/>
  <text x="56" y="98" fill="#94a3b8" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEMPS D'ACTIVITÉ</text>
  <text x="56" y="124" fill="#e2e8f0" fontSize="20" fontFamily="ui-monospace, monospace">14 j 03 h</text>

  <rect x="270" y="78" width="220" height="64" rx="8" fill="rgba(34,197,94,0.06)" stroke="rgba(34,197,94,0.30)"/>
  <text x="286" y="98" fill="#94a3b8" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEURS CONNECTÉS</text>
  <text x="286" y="124" fill="#e2e8f0" fontSize="20" fontFamily="ui-monospace, monospace">12</text>

  <rect x="500" y="78" width="220" height="64" rx="8" fill="rgba(192,132,252,0.06)" stroke="rgba(192,132,252,0.30)"/>
  <text x="516" y="98" fill="#94a3b8" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VERROUS DÉTENUS</text>
  <text x="516" y="124" fill="#e2e8f0" fontSize="20" fontFamily="ui-monospace, monospace">3</text>

  <rect x="730" y="78" width="230" height="64" rx="8" fill="rgba(251,146,60,0.06)" stroke="rgba(251,146,60,0.30)"/>
  <text x="746" y="98" fill="#94a3b8" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNEXIONS DU POOL</text>
  <text x="746" y="124" fill="#e2e8f0" fontSize="20" fontFamily="ui-monospace, monospace">7 / 20</text>

  <rect x="40" y="160" width="450" height="100" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="182" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POOLS</text>
  <text x="56" y="204" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">default · postgresql · 5/20 · 15 idle · 0 overflow</text>
  <text x="56" y="222" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">reporting · postgresql · 2/10 · 8 idle · 0 overflow</text>
  <text x="56" y="240" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">jdedwards · oracle · 0/5 · not opened (lazy)</text>

  <rect x="500" y="160" width="460" height="100" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="516" y="182" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEURS CONNECTÉS</text>
  <text x="516" y="204" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">alice · sid=a8c4d1f2…  · client=b7e3…</text>
  <text x="516" y="222" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">bob · super · sid=c0f3a2b7…  · client=—</text>
  <text x="516" y="240" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">carol · sid=e2a7c5d9…  · client=8a1f…</text>

  <rect x="40" y="278" width="450" height="92" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="56" y="300" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VERROUS DÉTENUS</text>
  <text x="56" y="322" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">bob · crm.customers · CUSTOMER_ID=14 · il y a 2 min</text>
  <text x="56" y="340" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">alice · crm.deals · DEAL_ID=88 · il y a 5 min</text>
  <text x="56" y="358" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">carol · crm.activities · ACTIVITY_ID=341 · il y a 12 s</text>

  <rect x="500" y="278" width="460" height="92" rx="8" fill="rgba(0,0,0,0.40)" stroke="#1f2937"/>
  <text x="516" y="300" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JOURNAUX (en direct)</text>
  <text x="516" y="320" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">14:02:01.083  INFO  liberty.connectors · default pool: 5/20</text>
  <text x="516" y="334" fill="#fde68a" fontSize="9" fontFamily="ui-monospace, monospace">14:02:11.408  WARN  liberty.jobs · run_a8c4 retried (1/3)</text>
  <text x="516" y="348" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">14:02:12.812  INFO  liberty.web.screens · user alice opened crm.customers</text>
  <text x="516" y="362" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">14:02:13.045  INFO  liberty.connectors · query customers_get · 42 rows</text>
</svg>

---

## Bandeau de KPI

Quatre chiffres en haut de page. Chacun est une lecture rapide sur une dimension :

| KPI | Ce qu'il compte | Quand s'inquiéter |
|---|---|---|
| **Temps d'activité** | Depuis combien de temps le processus du framework tourne. | S'il se réinitialise à l'improviste, le framework a planté puis redémarré (ou systemd / Docker a récupéré une nouvelle image). Examiner les journaux autour de l'horodatage du redémarrage. |
| **Utilisateurs connectés** | Sessions actuellement connectées (qui disposent d'un jeton d'accès frais). | Installation classique : quelques unités. Un bond (une centaine d'un coup) peut indiquer un test de charge ou un script avec un jeton qui a fuité. |
| **Verrous détenus** | Verrous au niveau ligne détenus par le framework — un par boîte de dialogue d'édition ouverte. | Si un verrou est détenu depuis des heures et que l'utilisateur est parti, la boîte de dialogue est obsolète. Soit l'utilisateur la rouvre et l'enregistre ou la ferme, soit le verrou peut être libéré manuellement (voir [Verrous détenus](#held-locks)). |
| **Connexions du pool** | Total des connexions en cours d'utilisation, tous pools confondus. | Doit rester nettement sous la somme des tailles de pools. Si la limite est atteinte régulièrement, augmenter la taille des pools ou enquêter sur les requêtes lentes. |

Les KPI se rafraîchissent toutes les quelques secondes via le canal Socket.IO du framework — aucun rechargement de page nécessaire.

---

## Pools

Une ligne par pool SQL connu du framework. La configuration du pool vient de *Paramètres → Pools* ; cette carte est la **vue en direct** de chacun.

| Colonne | Notes |
|---|---|
| **Pool** | Le nom du pool (la clé sous `[pools.*]` dans le fichier des connecteurs). |
| **Dialecte** | `postgresql`, `oracle`, `mysql`, `mssql`, `sqlite`, `db2` — ce que SQLAlchemy rapporte pour ce moteur. |
| **En cours d'utilisation** | Connexions actuellement empruntées au pool par une requête en cours. |
| **Inactives** | Connexions ouvertes mais libres pour servir la prochaine requête. |
| **Débordement** | `n/max` — connexions supplémentaires au-delà de la taille du pool, ouvertes temporairement quand l'utilisation atteint la limite. Un débordement non nul persistant signifie que le pool est sous-dimensionné. |

Un pool affiché comme `not opened` (lazy) n'a pas encore été utilisé — le moteur n'est pas matérialisé tant qu'aucune requête ne l'a sollicité. C'est normal et économise des ressources ; ce n'est pas un défaut de configuration.

### Que faire face à un pool saturé

| Symptôme | Action |
|---|---|
| `en cours` = taille du pool, `débordement` qui grandit. | Soit augmenter la taille du pool (*Paramètres → Pools → \<pool> → Taille du pool*), soit enquêter sur les requêtes lentes — une requête bloquée garde une connexion. |
| Beaucoup de connexions inactives. | Le pool est surdimensionné ; on peut le réduire pour économiser de la mémoire côté BDD. Pas urgent. |
| `not opened` sur un pool censé être actif. | Le connecteur n'a pas encore été sollicité. Ouvrir un écran ou un tableau de bord qui l'utilise ; le pool se matérialise. |

---

## Utilisateurs connectés

Une ligne par utilisateur actuellement connecté.

| Colonne | Notes |
|---|---|
| **Utilisateur** | Le nom d'utilisateur. Les superutilisateurs portent une pastille `super`. |
| **Session** | L'identifiant de session Socket.IO (8 premiers caractères, le reste masqué — abrégé pour la lisibilité). |
| **Client** | L'identifiant client tiré du JWT (également abrégé). Identifie l'onglet navigateur — un même utilisateur peut avoir plusieurs sessions sur plusieurs onglets. |

La carte est la réponse en direct à « qui est connecté en ce moment ? » — le magasin d'utilisateurs du framework conserve des horodatages de dernière connexion, mais cette carte montre **l'instant présent**.

### Quand enquêter

| Schéma | Ce que cela signifie d'habitude |
|---|---|
| Un même utilisateur avec plusieurs sessions. | L'utilisateur a plusieurs onglets ouverts. Le plus souvent sans conséquence. |
| Un utilisateur connecté il y a plusieurs jours, toujours listé. | Son jeton d'accès est encore valide (la TTL par défaut est de 1 heure pour le jeton d'accès, de 14 jours pour le refresh) — il a renouvelé silencieusement. Désactiver l'utilisateur dans *Paramètres → Accès* prend effet à son prochain refresh. |
| La liste est vide. | Personne n'est connecté. (Ou il y a un problème — vérifier en se connectant soi-même.) |

---

## Verrous détenus \{#held-locks\}

Une ligne par verrou de niveau ligne détenu par le framework. Un verrou est **logique** — il ne bloque pas la base ; il bloque l'*UI*. Quand l'utilisateur A ouvre la ligne 14 pour modification, l'utilisateur B voit la ligne marquée comme verrouillée et ne peut pas ouvrir la même boîte d'édition. Le verrou est libéré à la fermeture de la boîte de dialogue (enregistrement ou annulation) ou à l'expiration d'une TTL.

| Colonne | Notes |
|---|---|
| **Utilisateur** | Qui détient le verrou. |
| **Enregistrement** | `<app>.<screen> · <key>=<value>` — quelle ligne, sur quel écran de quelle application. |
| **Depuis** | Depuis combien de temps le verrou est détenu. Format : `il y a 12 s`, `il y a 3 min`. |

### Libération automatique

Un verrou est libéré par :

- Le clic de l'utilisateur sur *Enregistrer* ou *Annuler* dans la boîte de dialogue.
- La fermeture de l'onglet du navigateur (le framework détecte la perte de la connexion Socket.IO).
- L'expiration de la TTL du verrou (1 heure par défaut) — le framework abandonne les verrous orphelins.

### Libération manuelle

Pour les verrous réellement bloqués (l'utilisateur est parti, la TTL n'a pas encore expiré) :

```bash
liberty-admin lock release --app crm --screen customers --key CUSTOMER_ID=14
```

Le verrou est abandonné immédiatement. L'utilisateur suivant peut ouvrir la boîte de dialogue. À utiliser avec parcimonie — libérer un verrou pendant que l'utilisateur original est en pleine édition écrase silencieusement son travail.

---

## Journaux (en direct)

La carte du bas diffuse les dernières centaines de lignes de journal du framework, depuis le tampon circulaire en mémoire.

| Élément | Rôle |
|---|---|
| **Horodatage** | Horodatage côté serveur (`HH:MM:SS.mmm`). |
| **Niveau** | `INFO` / `WARNING` / `ERROR` / `CRITICAL` — coloré (vert / jaune / rouge / rouge foncé). |
| **Nom** | Le nom du logger Python (`liberty.connectors`, `liberty.jobs`, `nomaflow.python`, le logger de votre plugin). |
| **Message** | Le message de journal. |

### Contrôles

| Contrôle | Effet |
|---|---|
| **Pause** | Arrête le défilement automatique. Le flux continue ; le défilement vers le haut n'est pas perturbé. *Reprendre* réactive le défilement automatique. |
| **Filtre de niveau** (Tous / Info / Warn / Err) | Masque les lignes en deçà du niveau choisi. *Err* n'affiche que `ERROR` + `CRITICAL`. |
| **Filtre texte** | Correspondance partielle sur le nom du logger et le message. Insensible à la casse. |
| **Effacer le filtre** | Réinitialise les deux filtres. |
| **Icône corbeille** | Vide le tampon **côté client** (le tampon serveur reste intact — un rafraîchissement et les lignes reviennent). |

Le flux est **borné côté client** à ~1000 lignes. Les anciennes lignes tombent à mesure que les nouvelles arrivent. Pour les journaux historiques au-delà du tampon, consulter le fichier de journaux sur disque (`/var/log/liberty/app.log` par défaut, ou là où pointe votre configuration de journalisation).

### Permissions

La visualisation des journaux est **réservée aux superutilisateurs** — le framework affiche un bandeau `Log viewer requires superuser access` si un non-superutilisateur ouvre la page. Les journaux contiennent souvent des détails internes (fragments SQL, arguments de fonction, e-mails utilisateurs) qu'il n'est pas prudent d'exposer à des exploitants ordinaires.

---

## Intervalle de rafraîchissement

La page rafraîchit ses données via Socket.IO aux cadences suivantes :

| Carte | Déclencheur de rafraîchissement |
|---|---|
| KPI, Pools, Utilisateurs connectés, Verrous détenus | Toutes les ~5 secondes sur un tick serveur, **et** immédiatement lors des événements connexion/déconnexion utilisateur, ouverture/fermeture de boîte de dialogue. |
| Journaux | Par poussée — chaque ligne de journal émise par le framework est diffusée vers la page en temps réel (dans la limite du tampon client de 1000 lignes). |

Pas de bouton de rechargement manuel — la page est conçue pour rester ouverte dans un onglet d'exploitation.

---

## Ce que cette page N'est PAS

- Pas une vue **historique**. Un redémarrage du processus efface les Verrous, les Utilisateurs connectés et le tampon de Journaux. Pour une rétention longue, router les journaux vers un système externe et utiliser les tables d'audit du framework.
- Pas une vue de **performance par requête**. Pour enquêter sur les requêtes lentes, activer `pg_stat_statements` de Postgres ou câbler un APM.
- Pas une vue d'**utilisation des ressources**. Le CPU / la RAM du conteneur se trouvent dans `docker stats` / Portainer / Kubernetes ; les métriques OS dans votre agent de supervision.

La page Supervision répond à *« que fait le framework en ce moment ? »*. Pour *« qu'a-t-il fait hier ? »*, il faut les couches situées en dessous.

---

## La suite

- [Vue d'ensemble](./overview.md) — quand consulter la Supervision plutôt que les systèmes externes.
- [Endpoints de santé](./health-endpoints.md) — la face lisible par les machines.
