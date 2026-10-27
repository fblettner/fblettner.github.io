import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NOMANA-IT',
  tagline: 'Documentation, Blog and Resources',
  favicon: 'assets/nomana-hires.svg',

  future: {
    v4: true,
  },

  url: 'https://docs.nomana-it.fr',
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'fblettner',
  projectName: 'fblettner.github.io',

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  clientModules: [require.resolve('./src/clientModules/externalSidebarLinks')],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {label: 'English'},
      fr: {label: 'Français'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/fblettner/fblettner.github.io/edit/main/',
          showLastUpdateTime: true,
        },
        // The blog moved to https://nomana-it.fr/insights/ — the old URLs are
        // served by the redirect pages in static/blog/.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'assets/nomana-banner.png',
    algolia: {
      appId: '38HKOO4IUZ',
      // Search-only API key — public by design, safe to commit.
      apiKey: 'a31b51a7cc6767e51ad606c3d17b4bd0',
      indexName: 'docs.nomana-it.fr',
      // Filters results to the visitor's current language (en / fr) and version.
      contextualSearch: true,
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
      disableSwitch: false,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Nomana-IT',
      logo: {
        alt: 'Nomana-IT',
        src: 'assets/nomana-badge.svg',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'libertySidebar', position: 'left', label: 'Liberty'},
        {type: 'docSidebar', sidebarId: 'nomaflowSidebar', position: 'left', label: 'Nomaflow'},
        {type: 'docSidebar', sidebarId: 'nomasx1Sidebar', position: 'left', label: 'Nomasx-1'},
        {type: 'docSidebar', sidebarId: 'nomajdeSidebar', position: 'left', label: 'Nomajde'},
        {type: 'docSidebar', sidebarId: 'nomaublSidebar', position: 'left', label: 'NomaUBL'},
        {type: 'docSidebar', sidebarId: 'apiSidebar', position: 'left', label: 'API'},
        {href: 'https://nomana-it.fr/insights/', label: 'Blog', position: 'left'},
        {type: 'localeDropdown', position: 'right'},
        {
          href: 'https://github.com/fblettner',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {label: 'NOMANA-IT', href: 'https://nomana-it.fr'},
        {label: 'GitHub', href: 'https://github.com/fblettner'},
        {label: 'LinkedIn', href: 'https://www.linkedin.com/in/franck-blettner-72509510/'},
        {label: 'Sponsor', href: 'https://github.com/sponsors/fblettner'},
        {label: 'Cookies', to: '/cookies'},
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nomana-IT. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['ini', 'bash', 'json', 'yaml', 'sql', 'java', 'tsx', 'jsx'],
    },
    metadata: [
      {name: 'description', content: 'Documentation of the software published by Nomana-IT: Liberty Next low-code platform, Nomaflow scheduling, Nomasx-1 security and licence compliance, Nomajde for JD Edwards EnterpriseOne, NomaUBL French e-invoicing and JD Edwards / BI Publisher APIs — with built-in AI assistants powered by Claude.'},
      {name: 'keywords', content: 'Nomana-IT, Liberty Next, Liberty Framework, Nomaflow, Nomasx-1, Nomajde, NomaUBL, AI assistant, Claude, Anthropic, llms.txt, JD Edwards, EnterpriseOne, BI Publisher, e-invoicing, UBL, Factur-X, Plateforme Agréée, no-code, React, FastAPI, PostgreSQL, AIS, Oracle, documentation'},
      {name: 'author', content: 'Franck Blettner — NOMANA-IT'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@fblettner'},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'Nomana-IT Documentation'},
    ],
  } satisfies Preset.ThemeConfig,

  // Google Analytics 4 (G-9JB6CXWE4K) is loaded by src/components/CookieConsent
  // ONLY after the user grants explicit consent — required by CNIL. The
  // canonical @docusaurus/plugin-google-gtag plugin is intentionally NOT used
  // because it injects gtag.js unconditionally on every page load.
  customFields: {
    gaTrackingId: 'G-9JB6CXWE4K',
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Legacy Liberty v1 technical pages, replaced by the Installation section.
          {from: '/liberty/technical/architecture', to: '/liberty/installation/architecture'},
          {from: '/liberty/technical/installation', to: '/liberty/installation/docker'},
          {from: '/liberty/technical/liberty-deployment', to: '/liberty/installation/docker'},
          {from: '/liberty/technical/tools-deployment', to: '/liberty/installation/portainer'},
          {from: '/liberty/technical/linux-services', to: '/liberty/installation/python-server'},
          {from: '/liberty/technical/post-ssl', to: '/liberty/installation/traefik'},
          {from: '/liberty/framework/configuration/app-toml', to: '/liberty/framework/build/settings-app'},
          {from: '/liberty/framework', to: '/liberty/framework/overview'},
          {from: '/liberty/framework/build', to: '/liberty/framework/build/queries'},
          {from: '/liberty/framework/concepts', to: '/liberty/framework/connectors'},
          {from: '/liberty/framework/apps', to: '/liberty/framework/apps/overview'},
          {from: '/liberty/framework/getting-started', to: '/liberty/getting-started'},
          {from: '/nomaubl/application/technical-report', to: '/nomaubl/application/reports/technical-report'},
          {from: '/nomaubl/application/implementation-report', to: '/nomaubl/application/reports/implementation-report'},
          {from: '/nomaubl/application/audit-report', to: '/nomaubl/application/reports/audit-report'},
          {from: '/nomaubl/application/reports', to: '/nomaubl/application/reports/overview'},
          // 2026.10.24 — Diagnostics page hosts the error and log views; Scheduled jobs page hosts digests,
          // auto-retries and lifecycle checks; Watched folders back under Management.
          {from: '/nomaubl/management/lifecycle-checks', to: '/nomaubl/sync/scheduled-jobs/lifecycle-checks'},
          {from: '/nomaubl/configuration/system/auto-retry', to: '/nomaubl/sync/scheduled-jobs/auto-retry'},
          {from: '/nomaubl/configuration/system/daily-digest', to: '/nomaubl/sync/scheduled-jobs/daily-digest'},
          {from: '/nomaubl/management/server-log', to: '/nomaubl/application/diagnostics/server-log'},
          {from: '/nomaubl/management/processing-log', to: '/nomaubl/application/diagnostics/processing-log'},
          {from: '/nomaubl/application/integration-errors', to: '/nomaubl/application/diagnostics/integration-errors'},
          {from: '/nomaubl/sync/watched-folders', to: '/nomaubl/management/watched-folders'},
          // 2026.05.0 — Processing pages consolidated into a single Process Document page.
          {from: '/nomaubl/processing/xml', to: '/nomaubl/processing/document'},
          {from: '/nomaubl/processing/ubl', to: '/nomaubl/processing/document'},
          // 2026.05.0 — Documents editor moved from Configuration to Management.
          {from: '/nomaubl/configuration/documents', to: '/nomaubl/management/documents'},
          // 2026.05.4 — Notifications inbox promoted from Management to Application (primary nav).
          {from: '/nomaubl/management/notifications', to: '/nomaubl/application/notifications'},
          // 2026.10.23 — Watched folders left Configuration → System (now under Management).
          {from: '/nomaubl/configuration/system/watched-folders', to: '/nomaubl/management/watched-folders'},
        ],
      },
    ],
    // Suppress the harmless webpack warning emitted by `vscode-languageserver-types`,
    // pulled in transitively by `@docusaurus/theme-mermaid` → mermaid → langium.
    // The module uses a UMD pattern that webpack cannot statically analyse;
    // the runtime is unaffected.
    () => ({
      name: 'webpack-ignore-warnings',
      configureWebpack: () => ({
        ignoreWarnings: [{module: /vscode-languageserver-types/}],
      }),
    }),
  ],

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'Content-Security-Policy',
        content: "frame-ancestors 'self' https://giscus.app;",
      },
    },
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://giscus.app'},
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://nomana-it.fr/#organization',
        name: 'Nomana-IT',
        url: 'https://nomana-it.fr/',
        description: 'Software publisher (Liberty Next, Nomaflow, Nomasx-1, Nomajde, NomaUBL) and JD Edwards / Oracle / AI consultancy.',
        logo: 'https://docs.nomana-it.fr/assets/nomana-icon-512.png',
        sameAs: [
          'https://docs.nomana-it.fr/',
          'https://github.com/fblettner',
          'https://www.linkedin.com/in/franck-blettner-72509510/',
        ],
        founder: {'@type': 'Person', name: 'Franck Blettner'},
      }),
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://docs.nomana-it.fr/#website',
        name: 'Nomana-IT Documentation',
        url: 'https://docs.nomana-it.fr/',
        inLanguage: ['en', 'fr'],
        publisher: {'@id': 'https://nomana-it.fr/#organization'},
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://docs.nomana-it.fr/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }),
    },
  ],
};

export default config;
