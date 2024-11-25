import os
from playwright.sync_api import sync_playwright
from PyPDF2 import PdfReader, PdfWriter, PdfMerger
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from datetime import datetime

BASE_URL = "http://docs.nomana-it.fr"
TEMP_FOLDER = "pdf-temp"
OUTPUT_FOLDER = "../docs/assets/pdf"
COVER_FOLDER = "pdf-cover"
PDF_NAME = "Liberty_User_Guide.pdf"
COVER_FILE = os.path.join(COVER_FOLDER, "liberty_cover.pdf")

# Hardcoded Navigation Structure
NAV = [
    {"title": "Getting Started", "path": "liberty/getting-started.md", "description": "Learn the basics of Liberty Framework."},
    {"title": "Release Notes", "path": "liberty/release-notes.md", "description": "See what's new in the latest release."},
    {
        "title": "Installation",
        "description": "Step-by-step installation guides.",
        "children": [
            {"title": "Architecture", "path": "liberty/technical/architecture.md", "description": "Understand the architecture of Liberty Framework."},
            {"title": "Docker Installation Guide", "path": "liberty/technical/installation.md", "description": "Set up Liberty Framework using Docker."},
            {"title": "Installation Tools Deployment Guide", "path": "liberty/technical/tools-deployment.md", "description": "Learn about tools for deploying Liberty Framework."},
            {"title": "Liberty Deployment Guide", "path": "liberty/technical/liberty-deployment.md", "description": "Guide to deploying Liberty Framework."},
            {"title": "Create Linux Services", "path": "liberty/technical/linux-services.md", "description": "Create Linux services for Liberty Framework."},
            {"title": "Enable SSL with Traefik", "path": "liberty/technical/post-ssl.md", "description": "Enable SSL using Traefik for enhanced security."},
        ]
    },
    {
        "title": "Nomasx-1",
        "description": "Guides and settings for Nomasx-1.",
        "children": [
            {
                "title": "Administrator's Guide",
                "description": "Administrator resources and tools.",
                "children": [
                    {"title": "Global Settings", "path": "liberty/nomasx1/admin/global-settings.md", "description": "Manage global settings for Nomasx-1."},
                ]
            }
        ]
    }
]

# Flatten the nav to extract URLs and titles
def flatten_nav(nav, level=1, parent_number=""):
    pages = []
    for index, item in enumerate(nav, start=1):
        number = f"{parent_number}{index}" if parent_number else str(index)
        full_title = f"{number}. {item['title']}"

        if "path" in item:  # It's a direct page
            page_path = item["path"].replace(".md", "").replace("docs/", "").strip("/")
            pages.append((full_title, page_path, item.get("description", "")))
        if "children" in item:  # It's a nested structure
            # Add parent title as a standalone TOC entry
            pages.append((full_title, None, item.get("description", "")))
            # Add children recursively
            pages.extend(flatten_nav(item["children"], level + 1, f"{number}."))
    return pages

# Generate a title page for a chapter
def generate_title_page(title, description, output_file, logo_path):
    title_html = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>{title}</title>
        <style>
            body {{
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #f9f9f9;
            }}
            .container {{
                text-align: center;
                padding: 20px;
            }}
            h1 {{
                font-size: 2.5rem;
                color: #333;
            }}
            p {{
                font-size: 1.25rem;
                color: #555;
            }}
        </style>
    </head>
    <body>
        <div class="container">
             <img src="file://{logo_path}" alt="Logo" style="max-height: 100px; max-width: 200px;" />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </body>
    </html>
    """
    with open(output_file, "w") as file:
        file.write(title_html)
    print(f"Title page generated: {output_file}")

# Generate Table of Contents
def generate_toc(pages_with_numbers):
    toc_html = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Table of Contents</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 2rem;
        }
        h1 {
            font-size: 2rem;
            color: #333;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            margin: 0.5rem 0;
            padding-left: 1rem; /* Add indentation */
        }
        li.level-1 {
            font-weight: bold;
            padding-left: 0; /* No indentation for top-level items */
        }
        li.level-2 {
            padding-left: 1.5rem; /* Indentation for level 2 items */
        }
        li.level-3 {
            padding-left: 3rem; /* Indentation for level 3 items */
        }
        span.page-number {
            float: right;
            color: #555;
        }
    </style>
</head>
<body>
    <h1>Table of Contents</h1>
    <ul>
"""
    for title, page_number in pages_with_numbers:
        level = title.count(".") - 1
        class_level = f"level-{level + 1}"
        toc_html += f'<li class="{class_level}">{title}<span class="page-number">Page {page_number}</span></li>\n'

    toc_html += """
    </ul>
</body>
</html>
"""
    toc_file = os.path.join(TEMP_FOLDER, "toc.html")
    with open(toc_file, "w") as file:
        file.write(toc_html)
    print(f"TOC generated as {toc_file}")
    return toc_file

# The rest of the script remains unchanged...
# Include the `generate_title_page` function where necessary to add title pages before content pages.

def handle_cookie_consent(page):
    """Automatically accept cookie consent if the dialog is present."""
    try:
        consent_button_selector = "button:has-text('Accept')"
        if page.locator(consent_button_selector).is_visible():
            page.click(consent_button_selector)
            print("Cookie consent accepted.")
    except Exception as e:
        print("No cookie consent dialog found or an error occurred:", e)

def add_page_numbers(input_file, output_file):
    reader = PdfReader(input_file)
    writer = PdfWriter()

    temp_page_numbers = "temp_page_numbers.pdf"
    with open(temp_page_numbers, "wb") as temp_pdf:
        c = canvas.Canvas(temp_pdf, pagesize=A4)
        width, height = A4

        font_name = "Helvetica"
        font_size = 8

        for i in range(len(reader.pages)):
            c.setFont(font_name, font_size)
            c.drawRightString(width - 5, height - 22, f"Page {i + 1} of {len(reader.pages)}")
            c.showPage()
        c.save()

    temp_reader = PdfReader(temp_page_numbers)
    for page_num, page in enumerate(reader.pages):
        overlay = temp_reader.pages[page_num]
        page.merge_page(overlay)
        writer.add_page(page)

    with open(output_file, "wb") as final_pdf:
        writer.write(final_pdf)
    os.remove(temp_page_numbers)
    print(f"PDF with page numbers saved to {output_file}")

# Generate PDF with Playwright
def generate_pdf_with_cover_and_toc(base_url, pages_with_titles):
    os.makedirs(TEMP_FOLDER, exist_ok=True)
    os.makedirs(OUTPUT_FOLDER, exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context()

        page_numbers = []
        current_page = 1
        pdf_paths = []
        edited_date = datetime.now().strftime("%Y-%m-%d")

        # Generate individual pages and track page numbers
        for title, page_path, description in pages_with_titles:
            if description:  # Generate a title page
                title_page_path = os.path.join(TEMP_FOLDER, f"{title.replace(' ', '_')}_title.html")
                title_pdf_path = os.path.join(TEMP_FOLDER, f"{title.replace(' ', '_')}_title.pdf")
                logo_path = os.path.abspath(os.path.join(COVER_FOLDER, "logo_ly.png"))
                generate_title_page(title, description, title_page_path, logo_path)

                title_page = context.new_page()
                title_page.goto(f"file://{os.path.abspath(title_page_path)}")
                title_page.pdf(
                    path=title_pdf_path,
                    format="A4",
                    print_background=True,
                    display_header_footer=True,
                    header_template=f'''
                        <div style="
                                font-size: 12px; 
                                padding-left: 20px; 
                                padding-bottom: 5px; 
                                width: 100%; 
                                text-align: left; 
                                font-weight: bold;
                                border-bottom: 0.5px solid #7393B3; 
                                font-variant-caps: small-caps;
                                ">
                            {title}
                        </div>
                    ''',
                    footer_template=f'''
                        <div style="
                            font-size: 12px; 
                            padding: 5px 20px; /* Reduced padding for footer */
                            width: 100%; 
                            display: flex; 
                            justify-content: space-between; 
                            align-items: center; 
                            font-style: italic;
                            box-sizing: border-box; /* Ensure proper sizing */
                            border-top: 0.5px solid #7393B3; /* Optional separator line */
                            background-color: #f9f9f9; /* Optional background for clarity */
                            ">
                            <div style="text-align: right;">
                                © Nomana-IT | Edited: {edited_date}
                            </div>
                        </div>
                    '''                    
                )
                pdf_paths.append(title_pdf_path)
                page_numbers.append((title, current_page))  # Add only title pages to TOC
                current_page += 1  # Increment page number for the title page
            
            if page_path:  # Generate content pages but do not add them to TOC
                url = f"{base_url}/{page_path}"

                output_path = os.path.join(TEMP_FOLDER, f"{page_path.replace('/', '_')}.pdf")
                page = context.new_page()
                page.goto(url, wait_until="networkidle")
                handle_cookie_consent(page)

                # Inject CSS to hide the title
                page.add_style_tag(content="""
                    h1, .page-title {
                        display: none !important;
                        height: 0 !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    h2 {
                        margin-top: 10px !important;
                    }
                    @page {
                        margin: 0.7in 0.2in 1.5in 0.2in; /* Increased bottom margin for all pages */
                    }
                    @page:first {
                        margin: 0 0.2in 2in 0.2in; /* Adjusted bottom margin for the first page */
                        padding: 0 !important;
                    }   
                """)

                page.pdf(
                    path=output_path,
                    format="A4",
                    print_background=True,
                    margin={"top": "1in", "bottom": "1.2in"},  # Adjust bottom margin
                    display_header_footer=True,
                    header_template=f'''
                        <div style="
                                font-size: 12px; 
                                padding-left: 20px; 
                                padding-bottom: 5px; 
                                width: 100%; 
                                text-align: left; 
                                font-weight: bold;
                                border-bottom: 0.5px solid #7393B3; 
                                font-variant-caps: small-caps;
                                box-sizing: border-box; /* Prevent overflow issues */
                                ">
                            {title}
                        </div>
                    ''',
                    footer_template=f'''
                        <div style="
                            font-size: 12px; 
                            padding: 5px 20px; /* Reduced padding for footer */
                            width: 100%; 
                            display: flex; 
                            justify-content: space-between; 
                            align-items: center; 
                            font-style: italic;
                            box-sizing: border-box; /* Ensure proper sizing */
                            border-top: 0.5px solid #7393B3; /* Optional separator line */
                            background-color: #f9f9f9; /* Optional background for clarity */
                            ">
                            <div style="text-align: left;">
                                © Nomana-IT | Edited: {edited_date}
                            </div>
                            <div style="text-align: right;">
                                {url}
                            </div>
                        </div>
                    '''
                )
                pdf_paths.append(output_path)
                reader = PdfReader(output_path)
                num_pages = len(reader.pages)
                current_page += num_pages  # Only update page numbers for content pages

        # Generate the TOC PDF
        toc_file = os.path.join(TEMP_FOLDER, "toc.pdf")
        generate_toc(page_numbers)

        toc_page = context.new_page()
        toc_page.goto(f"file://{os.path.abspath(generate_toc(page_numbers))}")
        toc_page.pdf(
            path=toc_file,
            format="A4",
            print_background=True,
        )

        # Merge PDFs: content, TOC, and cover page
        merged_output = os.path.join(TEMP_FOLDER, PDF_NAME)
        merge_pdfs(pdf_paths, merged_output)
        add_page_numbers(merged_output, merged_output)

        final_pdf_paths = [COVER_FILE, toc_file, merged_output]
        final_output_path = os.path.join(OUTPUT_FOLDER, PDF_NAME)
        merge_pdfs(final_pdf_paths, final_output_path)

        browser.close()

# Merge PDFs into one
def merge_pdfs(input_files, output_file):
    merger = PdfMerger()
    for pdf in input_files:
        merger.append(pdf)
    merger.write(output_file)
    merger.close()
    print(f"Merged PDF saved to {output_file}")

if __name__ == "__main__":
    pages_with_titles = flatten_nav(NAV)
    generate_pdf_with_cover_and_toc(BASE_URL, pages_with_titles)