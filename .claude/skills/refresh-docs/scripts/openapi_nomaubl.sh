#!/bin/zsh
# Regenerate static/openapi/nomaubl.json from the NomaUBL jar, then sanitise customer names.
# Prints the path count, the paths lost (must be empty) and the new paths.
set -e
HERE=${0:A:h}
SITE=${HERE:h:h:h:h}
JAR=/Users/franckblettner/Documents/Tools/JavaProjects/nomaubl/nomaubl.jar
TMP=$(mktemp -d)
cp $HERE/Gen.java $TMP/
(cd $TMP && javac -cp $JAR Gen.java 2>/dev/null && java -cp $JAR:. Gen > spec.json)
python3 - "$TMP/spec.json" "$SITE/static/openapi/nomaubl.json" <<'E'
import json, re, sys
src, dst = sys.argv[1], sys.argv[2]
s = open(src).read(); new = json.loads(s); old = json.load(open(dst))
print(len(old["paths"]), "->", len(new["paths"]), "| lost:", sorted(set(old["paths"]) - set(new["paths"])),
      "| new:", sorted(set(new["paths"]) - set(old["paths"])))
for a, b in [(r"template/ugi/vrc_facture_pro\.rtf", "template/acme/invoices.rtf"), (r"\bvrc_facture_pro\b", "invoices"), (r"\bvrc_facture\b", "invoices"),
             (r"\bvrc_pro\b", "invoices"), (r"\bvrc_man\b", "invoices"), (r"\bisc_facture\b", "credit_notes"), (r"\bcdn_facture\b", "credit_notes"),
             (r"\bVTE\b", "SALES"), (r"\bvrac\b", "central"), (r"\bKRYS\b", "ACME"), (r"\bkrys\b", "acme"), (r"\bRECREACLUB\b", "ACME"),
             (r"/ugi/", "/acme/"), (r"R5542565P", "R42565"), (r"r5542565p", "r42565"), (r"SPBTCH30_ARCH", "ARCHIVE")]:
    s = re.sub(a, b, s)
json.loads(s)
left = re.findall(r"(?i)vrc_|isc_fact|antargaz|\bugi\b|krys|5542565", s)
print("customer names left:", left[:5] or "none")
open(dst, "w").write(s)
E
rm -rf $TMP
