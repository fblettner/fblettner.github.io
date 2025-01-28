import os
from playwright.sync_api import sync_playwright
import json

BASE_URL = "http://docs.nomana-it.fr"
OUTPUT_FILE = "liberty_documentation.json"

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

def flatten_nav(nav, parent_title=""):
    """Flatten the navigation into a list of titles and paths."""
    pages = []
    for item in nav:
        title = f"{parent_title} > {item['title']}" if parent_title else item['title']
        if "path" in item:
            pages.append({"title": title, "path": item["path"]})
        if "children" in item:
            pages.extend(flatten_nav(item["children"], title))
    return pages

def extract_page_content(page, url):
    """Extract the main content from a MkDocs Material page."""
    page.goto(url, wait_until="networkidle")
    content = page.locator("main").inner_text()  # Main content selector for MkDocs Material
    return content.strip()

def generate_documentation_json(base_url, nav):
    """Generate a JSON file with all documentation content."""
    pages = flatten_nav(nav)
    documentation = []

    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context()

        for page_info in pages:
            title = page_info["title"]
            path = page_info["path"]
            url = f"{base_url}/{path.replace('.md', '').strip('/')}"

            try:
                page = context.new_page()
                content = extract_page_content(page, url)
                documentation.append({"title": title, "url": url, "content": content})
                print(f"Extracted content for {title}")
            except Exception as e:
                print(f"Failed to extract content for {title}: {e}")
                continue

        browser.close()

    # Save to a JSON file
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(documentation, f, indent=2, ensure_ascii=False)
    print(f"Documentation saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    generate_documentation_json(BASE_URL, NAV)