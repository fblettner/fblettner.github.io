# French writing rules (mandatory)

Write French as a French technical writer would: rephrase the idea, never translate the English structure word for word. Register: technical but clear, no marketing phrases, no clumsy anglicisms, UI labels consistent with an interface localised in French. Do the French yourself — never delegate raw translation to an agent.

## Banned phrases

boucle agentique · voie canonique · constitue le filet de sécurité · expose (→ présente, propose, affiche) · restitue · s'avère · relève de · agnostique de la source · dès lors que · éligibles · la passe (bip) · le plancher · la borne · contre un pool · vivent sur

## Substitutions

| Instead of | Write |
|---|---|
| lorsque / lorsqu' / dès lors que | quand / qui / tant que (when the meaning holds) |
| il s'agit de | c'est |
| constitue | est |
| réside dans | se trouve dans |
| idempotent | say it plainly (« sans effet si on le relance ») |
| forensique | détaillée |
| traquer | rechercher |
| persisté / persister | enregistré / enregistrer |
| cohabiter | coexister |
| nécessitant | qui demande / qui nécessite |
| template | **modèle** (never « gabarit ») |
| toggle | **switch** (never « interrupteur ») |
| checkbox | **case à cocher** |
| job (in prose) | tâche |

Casual verbs to avoid: vivre, tourner, scanner → s'exécuter, fonctionner, parcourir… Prefer nominalised and impersonal forms over « vous » in tips (« Lancer… », « Vérifier… »).

## UI labels and menu paths

- Translate UI labels in the prose **and** in the SVG/HTML mockups with the app's own FR labels (`fr.json`): Yesterday → Hier, Refresh → Actualiser / Rafraîchir (whichever the app uses), Edit → Modifier, Save → Enregistrer, Submit → Soumettre, Cancel → Annuler, Subject → Objet, Body → Corps, Add → Ajouter, Customer → Client, Status → Statut, Currency → Devise, View → Voir, Download → Télécharger, Restore → Restaurer…
- When a screen is English-only in the app (most NomaUBL Settings editors), quote its labels in English and say once on the page that the editor stays in English.
- Menu paths: Sync → Synchronisation, UBL Tools → Outils UBL, Configuration → System → Configuration → Système, Management → Gestion, Diagnostics → Diagnostic, Settings → Paramètres.
- « Accès : **Gestion → Promotion**. » rather than « Ouvrez-la depuis… ».

## Typography

Non-breaking-style spaces before `: ; ? !` and inside « guillemets » (write them with a normal space as the site does), decimal comma in prose (5,5 %), dates in prose as 22/10/2026 in examples.
