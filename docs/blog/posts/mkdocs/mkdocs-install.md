---
date: 2024-11-26
authors:
  - fblettner
categories:
  - MkDocs Materials
hide:
  - footer 
---

# Installing and Deploying MkDocs Material with GitHub Pages

This guide explains how to install and deploy MkDocs Material for creating beautiful documentation sites. It also includes steps to automate deployment to GitHub Pages.

### What's Included in the Site

The provided MkDocs Material configuration is designed to support a comprehensive documentation site with the following features:

- **Navigation**:
    * Multi-level navigation with tabs and collapsible sections.
    * Support for documentation, guides, blog posts, API references, and release notes.

- **Customization**:
    * Custom logo and favicon.
    * Light and dark themes with a toggle switch.
    * Customizable color palettes to match your branding.

- **Enhanced User Experience**:
    - Instant navigation with prefetching for fast transitions.
    - Sticky top navigation for ease of access.
    - Copy button for code snippets to improve developer productivity.

- **Plugins**:
    - `awesome-pages`: Automatically organizes navigation based on folder structure.
    - `minify`: Optimizes site assets for faster loading.
    - `blog`: Supports structured and visually appealing blog posts.
    - `search`: Integrated full-text search for quick access to content.

- **Content Types**:
    - Documentation sections for getting started, installation guides, and tutorials.
    - Blog posts with structured navigation and metadata.

- **Technical Enhancements**:
    - Cookie consent settings to comply with privacy policies.
    - CSP (Content Security Policy) meta tag for enhanced security.
    - Custom CSS and JavaScript to further tailor the site's appearance and functionality.

### Repository Features

The repository includes:

1. A complete `mkdocs.yml` configuration with navigation, theme, and plugin settings.
2. A `docs/` directory with pre-structured files and folders for easy customization.
3. Workflow configuration (`.github/workflows/deploy.yml`) to automate deployment to GitHub Pages.
4. Sample blog posts, API documentation, and guides to demonstrate how to structure content.
5. Custom assets for branding, including a logo and favicon.

By cloning this repository, you can start with a fully functional MkDocs Material site and focus on adding your content instead of setting up the structure.

## Step 1: Prerequisites

Before starting, ensure you have the following:
- **Python 3.x** installed (verify with `python --version`).
  
- **pip** installed (verify with `pip --version`).
  
- A **GitHub repository** to host your documentation.
  
- Git configured locally with a GitHub personal access token if needed.


## Step 2: Install MkDocs Material

1. **Create a Virtual Environment** (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate # On Windows, use venv\Scripts\activate
   ```

2. **Install MkDocs Material**:
   ```bash
   pip install mkdocs-material
   ```

3. **Verify Installation**:
   ```bash
   mkdocs --version
   ```

---

## Step 3: Create the MkDocs Project

1. **Create a New MkDocs Project**:
   ```bash
   mkdocs new my-project
   cd my-project
   ```

2. **Edit the `mkdocs.yml` File**:
   Replace the default configuration with the following:

   ```yaml
   site_name: Your Site Name
   site_url: Your Site URL

   theme:
     name: material
     logo: assets/your_logo.png
     favicon: assets/your_logo.png
     custom_dir: overrides
     palette:
       - media: "(prefers-color-scheme: light)"
         primary: blue grey
         accent: amber
         scheme: default
         toggle:
           icon: material/weather-night
           name: Switch to dark mode
       - media: "(prefers-color-scheme: dark)"
         primary: blue grey
         accent: amber
         scheme: slate
         toggle:
           icon: material/weather-sunny
           name: Switch to light mode   
     features:
       - content.code.copy     
       - navigation.instant
       - navigation.tabs
       - navigation.path
       - navigation.top
       - navigation.footer
       - header.autohide

   # example of navigation
   nav:
     - Home: index.md
     - Liberty:
         - Getting Started: liberty/getting-started.md
         - Installation:
           - Architecture: liberty/technical/architecture.md
           - Docker Installation Guide: liberty/technical/installation.md
           - Installation Tools Deployment Guide: liberty/technical/tools-deployment.md
           - Liberty Deployment Guide: liberty/technical/liberty-deployment.md
           - Create Linux Services: liberty/technical/linux-services.md
           - Enable SSL with Traefik: liberty/technical/post-ssl.md    
     - Blog:
       - blog/index.md

   plugins:
     - search
     - awesome-pages
     - minify
     - blog

   extra:
     social:
       - icon: fontawesome/brands/github
         link: your social link for github
       - icon: fontawesome/brands/linkedin
         link: your social link for linkedin          
     meta:
         - name: Content-Security-Policy
           value: frame-ancestors 'self' https://giscus.app;      
     consent:
       title: Cookie consent
       actions:
         - accept
         - manage
         - reject
       description: >- 
         We use cookies to recognize your repeated visits and preferences,
         as well as to measure the effectiveness of our documentation.
     markdown_extensions:
       - attr_list
       - pymdownx.highlight:
           anchor_linenums: true
           linenums: true
           line_spans: __span
           pygments_lang_class: true
       - pymdownx.inlinehilite
       - pymdownx.snippets
       - pymdownx.superfences
   extra_css:
     - css/custom.css
   extra_javascript:
     - js/extra.js  
   copyright: >
     Copyright &copy; 2024 Nomana-IT –
     <a href="#__consent">Change cookie settings</a>
   ```

3. **Add Your Documentation Files**:
   Organize your files under the `docs/` folder as per the navigation structure defined in the `mkdocs.yml`.

---

## Step 4: Deploy to GitHub Pages

1. **Set Up GitHub Actions**:
   Add the following configuration in `.github/workflows/deploy.yml`:

   ```yaml
   name: ci 
   on:
     push:
       branches:
         - master 
         - main
   permissions:
     contents: write
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - name: Configure Git Credentials
           run: |
             git config user.name github-actions[bot]
             git config user.email 41898282+github-actions[bot]@users.noreply.github.com
         - uses: actions/setup-python@v5
           with:
             python-version: 3.x
         - run: echo "cache_id=$(date --utc '+%V')" >> $GITHUB_ENV 
         - uses: actions/cache@v4
           with:
             key: mkdocs-material-${{ env.cache_id }}
             path: .cache
             restore-keys: |
               mkdocs-material-
         - run: pip install mkdocs-material mkdocs-awesome-pages-plugin mkdocs-minify-plugin
         - run: mkdocs gh-deploy --force
   ```

2. **Push Your Changes**:
   Commit and push your project to the `main` branch of your GitHub repository:
   ```bash
   git add .
   git commit -m "Initial documentation setup"
   git push origin main
   ```

3. **Access Your Site**:
   After GitHub Actions finish deploying, your site will be live at:
   ```
   https://<your-github-username>.github.io/<repository-name>/
   ```

---

## Conclusion

Your MkDocs Material documentation is now installed and deployed with GitHub Pages! This workflow ensures automated deployment and a professional look for your documentation site.