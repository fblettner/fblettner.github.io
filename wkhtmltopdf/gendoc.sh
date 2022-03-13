wkhtmltopdf --disable-external-links --user-style-sheet print.css --footer-center "Page [page] of [toPage]" toc http://docs.nomana-it.fr/nomasx1/technical/installation http://docs.nomana-it.fr/nomasx1/administrators/global  tmp.pdf
gs -dBATCH -dNOPAUSE -q -sDEVICE=pdfwrite -sOutputFile=NOMASX1_UserGuide.pdf NOMASX1_COVER.pdf tmp.pdf

#cat ./**/*.md |md-to-pdf > test.pdf

