"""Final checks before committing a docs refresh. Run from anywhere:

    python3 check_docs.py

1. version tags / history callouts in product pages (must be 0);
2. banned French phrasing in the French lines added since HEAD (diff + new files);
3. customer names anywhere in docs, i18n, static (outside _legacy).
Exit code 1 when something is found.
"""
import os, re, subprocess, sys

SITE = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../.."))
os.chdir(SITE)
bad = 0

VERSION = re.compile(r"\*\(20\d{2}[.\-x]|Fixed in \d{4}|Corrigé en \d{4}|(Since|since|Depuis|depuis|New in|Added( in)?|Introduced in|Nouveau en|Nouveauté|Ajoutée?( en)?|Refreshed in|Refonte en)\s+\*{0,2}20\d\d\.\d")
for root in ("docs", "i18n"):
    for dp, _, fs in os.walk(root):
        if "_legacy" in dp:
            continue
        for f in fs:
            if not f.endswith((".md", ".mdx")) or f == "release-notes.md":
                continue
            p = os.path.join(dp, f)
            for i, line in enumerate(open(p, encoding="utf-8"), 1):
                if VERSION.search(line) and "<code" not in line:
                    print(f"[version] {p}:{i}: {line.strip()[:120]}"); bad += 1

BANNED = r"boucle agentique|voie canonique|filet de sécurité|\bexpose\b|\bexposent\b|restitue|s.avère|relève de|relèvent|agnostique|dès lors que|lorsqu|idempotent|forensique|traquer|persist[ée]|cohabit|nécessitant|il s.agit|réside dans|\bconstitue|gabarit|éligible|la passe\b|le plancher|la borne|\btourn(e|ent|é)\b|\bviv(re|ent)\b|scanner|interrupteur|\bvous\b|\bvotre\b"
diff = subprocess.run(["git", "diff", "-U0", "HEAD", "--", "i18n"], capture_output=True, text=True).stdout.split("\n")
added = [l[1:] for l in diff if l.startswith("+") and not l.startswith("+++")]
for f in subprocess.run(["git", "ls-files", "--others", "--exclude-standard", "i18n"], capture_output=True, text=True).stdout.split():
    added += open(f, encoding="utf-8").read().split("\n")
for line in added:
    if "<text" in line or "<rect" in line or line.lstrip().startswith(("##", "| `")):
        pass
    for m in re.finditer(BANNED, line, re.I):
        print(f"[fr] « {m.group(0)} » … {line[max(0, m.start()-70):m.end()+40].strip()}"); bad += 1

CLIENT = re.compile(r"vrc_pro|vrc_man|isc_facture|cdn_facture|antargaz|\bUGI\b|\bVRAC\b|\bISC\b|RECREACLUB|\bKRYS\b|5542565|SPBTCH30", re.I)
for root in ("docs", "i18n", "static"):
    for dp, _, fs in os.walk(root):
        if "_legacy" in dp:
            continue
        for f in fs:
            if f.endswith((".md", ".mdx", ".json", ".txt")):
                p = os.path.join(dp, f)
                t = open(p, encoding="utf-8", errors="ignore").read()
                for m in CLIENT.finditer(t):
                    print(f"[client] {p}: {t[max(0, m.start()-40):m.end()+40]!r}"); bad += 1; break

print("OK" if not bad else f"{bad} finding(s) — review them (release-notes text is the app's, fix it in the app if needed)")
sys.exit(1 if bad else 0)
