import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NOMANA-IT',
  tagline: 'Documentation, Blog and Resources',
  favicon: 'assets/nomana-dark.svg',

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
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          editUrl: 'https://github.com/fblettner/fblettner.github.io/edit/main/',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'assets/nomana-dark.svg',
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
      title: 'NOMANA-IT',
      logo: {
        alt: 'NOMANA-IT',
        src: 'assets/nomana-light.svg',
        srcDark: 'assets/nomana-dark.svg',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'libertySidebar', position: 'left', label: 'Liberty'},
        {type: 'docSidebar', sidebarId: 'nomasx1Sidebar', position: 'left', label: 'Nomasx-1'},
        {type: 'docSidebar', sidebarId: 'nomajdeSidebar', position: 'left', label: 'Nomajde'},
        {type: 'docSidebar', sidebarId: 'nomaublSidebar', position: 'left', label: 'NomaUBL'},
        {type: 'docSidebar', sidebarId: 'apiSidebar', position: 'left', label: 'API'},
        {to: '/blog', label: 'Blog', position: 'left'},
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
      {name: 'description', content: 'NOMANA-IT documentation, blog and resources covering Liberty Framework, NomaUBL, JD Edwards and BI Publisher.'},
      {name: 'keywords', content: 'NOMANA-IT, Liberty Framework, NomaUBL, JD Edwards, EnterpriseOne, BI Publisher, e-invoicing, UBL, Factur-X, Plateforme Agréée, no-code, React, FastAPI, PostgreSQL, AIS, Oracle, documentation'},
      {name: 'author', content: 'Franck Blettner — NOMANA-IT'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@fblettner'},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'NOMANA-IT Documentation'},
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
          // 2026.05.0 — Processing pages consolidated into a single Process Document page.
          {from: '/nomaubl/processing/xml', to: '/nomaubl/processing/document'},
          {from: '/nomaubl/processing/ubl', to: '/nomaubl/processing/document'},
          // 2026.05.0 — Documents editor moved from Configuration to Management.
          {from: '/nomaubl/configuration/documents', to: '/nomaubl/management/documents'},
          // 2026.05.4 — Notifications inbox promoted from Management to Application (primary nav).
          {from: '/nomaubl/management/notifications', to: '/nomaubl/application/notifications'},
        ],
      },
    ],
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: true,
        indexDocs: true,
        indexPages: true,
        language: ['en'],
        docsRouteBasePath: '/',
        blogRouteBasePath: '/blog',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
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
        name: 'NOMANA-IT',
        url: 'https://docs.nomana-it.fr',
        logo: 'https://docs.nomana-it.fr/assets/nomana-dark.svg',
        sameAs: [
          'https://nomana-it.fr',
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
        name: 'NOMANA-IT Documentation',
        url: 'https://docs.nomana-it.fr',
        inLanguage: ['en', 'fr'],
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
