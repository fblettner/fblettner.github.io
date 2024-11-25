#!/bin/bash

# Variables
BASE_URL="http://docs.nomana-it.fr"
OUTPUT_FOLDER="output"
FOLDER_PATH="../docs/liberty"
PDF_NAME="Liberty_UserGuide.pdf"

# Create temporary and output directories
mkdir -p $OUTPUT_FOLDER
TEMP_PDF="tmp.pdf"

# Generate table of contents and include all pages in the folder
echo "Generating PDF for documentation in folder: $FOLDER_PATH..."
FILES=$(find $FOLDER_PATH -name "*.md" | sort)
URLS=()
for file in $FILES; do
  # Convert file path to URL path
  RELATIVE_PATH="${file#../docs/}"
  URLS+=("$BASE_URL/${RELATIVE_PATH%.md}")
done

# Generate PDF with wkhtmltopdf
wkhtmltopdf --disable-external-links \
  --user-style-sheet print.css \
  --footer-center "Page [page] of [toPage]" \
  toc "${URLS[@]}" $TEMP_PDF

# Add a cover page using Ghostscript
#gs -dBATCH -dNOPAUSE -q -sDEVICE=pdfwrite \
#  -sOutputFile="$OUTPUT_FOLDER/$PDF_NAME" \
#  NOMASX1_COVER.pdf $TEMP_PDF

# Clean up
#rm $TEMP_PDF

echo "PDF generated at $OUTPUT_FOLDER/$PDF_NAME."
