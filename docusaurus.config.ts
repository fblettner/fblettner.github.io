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
  },

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
        {
          type: 'dropdown',
          label: 'Liberty',
          position: 'left',
          items: [
            {label: 'Getting Started', to: '/liberty/getting-started/'},
            {label: 'Installation',    to: '/liberty/installation/'},
            {label: 'Nomasx-1',        to: '/liberty/nomasx-1/'},
            {label: 'React Components', to: '/liberty/react-components/'},
            {label: 'Reference',       to: '/liberty/reference/'},
          ],
        },
        {
          type: 'dropdown',
          label: 'NomaUBL',
          position: 'left',
          items: [
            {label: 'Getting Started', to: '/nomaubl/getting-started/'},
            {label: 'Application',     to: '/nomaubl/application/'},
            {label: 'Documentation',   to: '/nomaubl/documentation/'},
            {label: 'Sync',            to: '/nomaubl/sync/'},
            {label: 'Processing',      to: '/nomaubl/processing/'},
            {label: 'UBL Tools',       to: '/nomaubl/ubl-tools/'},
            {label: 'JD Edwards',      to: '/nomaubl/jdedwards/'},
            {label: 'Management',      to: '/nomaubl/management/'},
            {label: 'Configuration',   to: '/nomaubl/configuration/'},
          ],
        },
        {
          type: 'dropdown',
          label: 'API',
          position: 'left',
          items: [
            {label: 'Getting Started',    to: '/api/getting-started/'},
            {label: 'JD Edwards API',     to: '/api/jd-edwards-api/'},
            {label: 'BI Publisher API',   to: '/api/bi-publisher-api/'},
          ],
        },
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

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [],
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
