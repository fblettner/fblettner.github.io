"""Example SVG spec (Scheduled jobs page). Copy, rename, adapt; keep EN/FR labels from the app i18n.

Usage:
    python3 example_page.py en > /tmp/sj_en.svg   # or import and call from your own script
"""
import sys
from svgkit import Svg, tw


def scheduled_jobs(lang):
    fr = lang == "fr"
    T = (lambda e, f: f if fr else e)
    s = Svg("sj", 1200, 410)
    X, W = 220, 760
    s.title(X + 20, 48, T("Scheduled jobs", "Tâches planifiées"))
    s.muted(X + 20, 66, T("Every job the server runs on a schedule — trigger, state, last and next run.",
                          "Toutes les tâches exécutées par le serveur : déclencheur, état, dernière et prochaine exécution."))
    y = 82
    x = s.button(X + 20, y, T("All kinds ▾", "Tous les types ▾"), "input")
    x = s.check(x + 12, y + 15, T("Auto-refresh", "Actualisation auto"))
    x = s.button(x + 12, y, T("↻ Refresh", "↻ Actualiser"))
    x = s.button(x + 8, y, T("+ New job", "+ Nouvelle tâche"), "primary")
    nx = x - 40
    s.text(X + W - 20, 48, T("9 active of 12 job(s) · quiet window 06:00–07:00", "9 active(s) sur 12 tâche(s) · fenêtre silencieuse 06:00–07:00"),
           fs=9, color="#64748b", anchor="end")
    cols = [(T("Kind", "Type"), 74), (T("Job", "Tâche"), 136), (T("Trigger", "Déclencheur"), 100), (T("State", "État"), 64),
            (T("Last run", "Dernière"), 66), (T("Duration", "Durée"), 50), (T("Result", "Résultat"), 120), (T("Next", "Prochaine"), 60), ("", 40)]
    rows = [
        [T("Poll", "Interrogation"), (T("PA import poll", "Import PA"), "link"), T("every 5 min", "toutes les 5 min"), (T("On", "Actif"), "green"), T("2 min ago", "il y a 2 min"), "3 s", ("total=12 success=12", "mono"), T("in 3 min", "dans 3 min"), "▶ ⏸ ⟲"],
        [T("Poll", "Interrogation"), (T("PA status retrieval", "Statuts PA"), "link"), T("every 15 min", "toutes les 15 min"), (T("Paused", "Suspendu"), "orange"), T("1 h ago", "il y a 1 h"), "12 s", ("OK", "mono"), "—", "▶ ▷ ⟲"],
        [T("Batch", "Lot"), (T("Nightly BIP", "BIP nocturne"), "link"), T("daily 04:00", "chaque jour 04:00"), (T("On", "Actif"), "green"), T("4 h ago", "il y a 4 h"), "6 min", ("420/420, 0 failed", "mono"), T("in 20 h", "dans 20 h"), "▶ ⏸ ⟲"],
        [T("Digest", "Rapport"), (T("ops-digest", "rapport-exploitation"), "link"), T("daily 06:00", "chaque jour 06:00"), (T("On", "Actif"), "green"), T("2 h ago", "il y a 2 h"), "1 s", ("sent to 2", "mono"), T("in 22 h", "dans 22 h"), "▶ ⏸ ⟲"],
        [T("Auto-retry", "Reprise auto"), ("retry-send-failed", "link"), T("daily 03:00", "chaque jour 03:00"), (T("Running", "En cours"), "blue"), T("now", "maintenant"), "—", "—", T("in 24 h", "dans 24 h"), "▶ ⏸ ⟲"],
        [T("System", "Système"), (T("Retention purge", "Purge de rétention"), "link"), T("daily · 90 days", "chaque jour · 90 j"), (T("On", "Actif"), "green"), T("5 h ago", "il y a 5 h"), "450 ms", ("purged 0 row(s)", "mono"), T("in 19 h", "dans 19 h"), "▶ ⏸ ⟲"],
        [(T("Poll", "Interrogation"), "muted"), (T("Received invoices", "Factures reçues"), "muted"), ("—", "muted"), (T("Off", "Inactif"), "grey"), ("—", "muted"), ("—", "muted"), ("—", "muted"), ("—", "muted"), "▶"],
    ]
    end = s.table(X + 20, 118, W - 40, cols, rows)
    s.hline(X + 20, X + W - 20, end + 6)
    s.text(X + 20, end + 24, T("▶ Run now · ⏸ Pause · ▷ Resume · ⟲ Run history — the job name opens its editor",
                               "▶ Lancer maintenant · ⏸ Suspendre · ▷ Reprendre · ⟲ Historique — le nom ouvre l'éditeur"), fs=9, color="#64748b")
    s.card_behind(X, 20, W, end + 44 - 20)
    s.H = end + 84
    # callouts
    s.callout(20, 82, 180, T("Kind filter + refresh", "Filtre par type"), T("auto-refresh every few seconds", "actualisation automatique"), X + 20, 93)
    s.callout(20, 150, 180, T("Job name → editor", "Nom → éditeur"), T("polls, batch, digest, retry…", "interrogations, lots, rapports…"), X + 108, 166)
    s.callout(20, 300, 180, T("State pill", "Pastille d'état"), T("On · Paused · Running · Off", "Actif · Suspendu · En cours · Inactif"), X + 362, 288)
    s.callout(1000, 82, 180, T("New job", "Nouvelle tâche"), T("batch, digest, retry, check", "lot, rapport, reprise, contrôle"), nx + 40, 93)
    s.callout(1000, 160, 180, T("Row actions", "Actions par ligne"), T("run now · pause · history", "lancer · suspendre · historique"), X + W - 40, 166)
    s.callout(1000, 300, 180, T("Last result", "Dernier résultat"), T("as written by the server", "tel qu'écrit par le serveur"), X + 590, 318)
    return s.render()




if __name__ == "__main__":
    print(scheduled_jobs(sys.argv[1] if len(sys.argv) > 1 else "en"))
