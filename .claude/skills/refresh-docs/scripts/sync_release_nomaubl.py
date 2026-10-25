"""Sync the NomaUBL release notes of the docs from the app's RELEASE.md / RELEASE.fr.md.

    python3 sync_release_nomaubl.py

- refreshes the body of every version already in the docs (the app text wins);
- inserts the new versions at the top with their `\\{#vYYYY-MM-DD-N\\}` anchor;
- replaces customer names (see CLIENT_NAMES) and applies the light French fixes.
The version bar (pills) is NOT touched: scripts/gen-release-toc.mjs rebuilds it
on every build (or run `npm run gen:release-toc`). Prints what it changed.
"""
import os, re

SITE = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../.."))
SRC = "/Users/franckblettner/Documents/Tools/JavaProjects/nomaubl/"
CLIENT_NAMES = [("vrc_pro", "invoices"), ("vrc_man", "invoices"), ("isc_facture", "credit_notes"), ("cdn_facture", "credit_notes"),
                ("KRYS", "ACME"), ("RECREACLUB", "ACME")]


def sections(text):
    rx = r"^## (20\d\d\.\d\d\.\d\d\.\d+) — (\S+).*?$([\s\S]*?)(?=^---$|^## 20|\Z)"
    return {m.group(1): (m.group(2), m.group(3).strip(), m) for m in re.finditer(rx, text, re.M)}


def clean(body, fr):
    out = []
    for line in body.split("\n"):
        if out and line.strip() and line == out[-1]:
            continue
        out.append(line)
    body = "\n".join(out)
    for a, b in CLIENT_NAMES:
        body = re.sub(r"\b" + a + r"\b", b, body)
    body = re.sub(r"\bISC\b", "Magasins" if fr else "Stores", body)
    body = re.sub(r"\bVRAC\b", "Centrale" if fr else "Central", body)
    if fr:
        body = re.sub(r"\bLorsqu'(\w)", lambda m: "Quand " + m.group(1), body)
        body = re.sub(r"\blorsqu'(\w)", lambda m: "quand " + m.group(1), body)
        body = re.sub(r"\bLorsque\b", "Quand", body)
        body = re.sub(r"\blorsque\b", "quand", body)
        body = body.replace("réside dans", "se trouve dans").replace("résident dans", "se trouvent dans")

    def esc(line):  # MDX: escape {word} outside code spans
        parts = re.split(r"(`[^`]*`)", line)
        return "".join(x if x.startswith("`") else re.sub(r"(?<!\\)\{(\w+)\}", r"\\{\1\\}", x) for x in parts)

    res, fence = [], False
    for line in body.split("\n"):
        if line.startswith("```"):
            fence = not fence
        res.append(line if fence else esc(line))
    return "\n".join(res)


anchor = lambda v: "v" + v.replace(".", "-")

for src, doc, fr in (("RELEASE.md", "docs/nomaubl/release-notes.md", False),
                     ("RELEASE.fr.md", "i18n/fr/docusaurus-plugin-content-docs/current/nomaubl/release-notes.md", True)):
    s = open(SRC + src).read()
    path = os.path.join(SITE, doc)
    d = open(path).read()
    S, D = sections(s), sections(d)
    for v, (_, body, m) in sorted(D.items(), key=lambda x: -x[1][2].start()):
        nb = clean(S[v][1], fr) if v in S else clean(body, fr)
        if nb != body:
            print(src, "refresh", v)
            d = d[:m.start(3)] + "\n\n" + nb + "\n\n" + d[m.end(3):]
    D = sections(d)
    top = min(D, key=lambda v: D[v][2].start())
    new = sorted([v for v in S if v not in D and v > top], reverse=True)
    if new:
        h = re.search(r"^## " + re.escape(top) + r" — .*$", d, re.M).group(0)
        block = "".join(f"## {v} — {S[v][0]} \\{{#{anchor(v)}\\}}\n\n{clean(S[v][1], fr)}\n\n---\n\n" for v in new)
        d = d.replace(h, block + h, 1)
        print(src, "added", new)
    open(path, "w").write(re.sub(r"\n{3,}", "\n\n", d))
