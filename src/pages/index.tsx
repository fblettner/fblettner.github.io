import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.eyebrow}>
          {translate({id: 'homepage.hero.eyebrow', message: 'Documentation'})}
        </span>
        <Heading as="h1" className={styles.heroTitle}>
          {translate({id: 'homepage.hero.title', message: 'Nomana-IT documentation'})}
        </Heading>
        <p className={styles.heroSubtitle}>
          {translate({
            id: 'homepage.hero.subtitle',
            message:
              'Guides, references and examples for the software Nomana-IT publishes: the Liberty Next low-code platform, the applications built on it, and NomaUBL for French e-invoicing.',
          })}
        </p>
      </div>
    </header>
  );
}

type Product = {
  key: string;
  label: string;
  title: string;
  tagline?: string;
  description: string;
  tags: string[];
  to: string;
};

function products(): Product[] {
  const builtOn = translate({id: 'homepage.products.builtOn', message: 'Built on Liberty Next'});
  return [
    {
      key: 'liberty',
      label: translate({id: 'homepage.products.liberty.label', message: 'Open-source low-code platform'}),
      title: 'Liberty Next',
      tagline: translate({id: 'homepage.products.liberty.tagline', message: 'Screens, dashboards, jobs and AI'}),
      description: translate({
        id: 'homepage.products.liberty.description',
        message:
          'Connect SQL or API sources, then build screens, dashboards and data explorations from the Settings, without code. Scheduled jobs, roles, row-level security and a Claude assistant over your data come built in.',
      }),
      tags: [
        translate({id: 'homepage.products.liberty.tag1', message: 'Low-code'}),
        translate({id: 'homepage.products.liberty.tag2', message: 'SQL + API connectors'}),
        translate({id: 'homepage.products.liberty.tag3', message: 'AI assistant'}),
      ],
      to: '/liberty/getting-started/',
    },
    {
      key: 'nomasx1',
      label: builtOn,
      title: 'Nomasx-1',
      tagline: translate({id: 'homepage.products.nomasx1.tagline', message: 'Licences, security & SoD'}),
      description: translate({
        id: 'homepage.products.nomasx1.description',
        message:
          'Security, Object Usage Tracking, Oracle and JD Edwards licence compliance and segregation of duties for every connected application, with an audit synthesis and ready-made analyses.',
      }),
      tags: [
        translate({id: 'homepage.products.nomasx1.tag1', message: 'Licence compliance'}),
        translate({id: 'homepage.products.nomasx1.tag2', message: 'JD Edwards & Oracle'}),
        'SoD',
      ],
      to: '/liberty/nomasx1/overview/',
    },
    {
      key: 'nomajde',
      label: builtOn,
      title: 'Nomajde',
      tagline: translate({id: 'homepage.products.nomajde.tagline', message: 'The JD Edwards companion'}),
      description: translate({
        id: 'homepage.products.nomajde.description',
        message:
          'Users, roles, Security Workbench and UDC codes on searchable grids with inline editing and Excel upload, written straight to JD Edwards EnterpriseOne.',
      }),
      tags: [
        'JD Edwards',
        translate({id: 'homepage.products.nomajde.tag2', message: 'Security'}),
        translate({id: 'homepage.products.nomajde.tag3', message: 'Master data'}),
      ],
      to: '/liberty/nomajde/overview/',
    },
    {
      key: 'nomaflow',
      label: builtOn,
      title: 'Nomaflow',
      tagline: translate({id: 'homepage.products.nomaflow.tagline', message: 'Scheduler & orchestration'}),
      description: translate({
        id: 'homepage.products.nomaflow.description',
        message:
          'Scheduled jobs, file loads, ETL steps, LDAP sync and e-mailed reports, with run history, a live log and alerts — reusing the Liberty connectors and permissions.',
      }),
      tags: [
        translate({id: 'homepage.products.nomaflow.tag1', message: 'Jobs'}),
        'ETL',
        'Cron',
      ],
      to: '/liberty/nomaflow/overview/',
    },
    {
      key: 'nomaubl',
      label: translate({id: 'homepage.products.nomaubl.label', message: 'French B2B e-invoicing'}),
      title: 'NomaUBL',
      tagline: translate({id: 'homepage.products.nomaubl.tagline', message: 'E-invoicing & e-reporting'}),
      description: translate({
        id: 'homepage.products.nomaubl.description',
        message:
          'Generates UBL 2.1 invoices, validates them against XSD, Schematron and CTC rules, and tracks e-reporting and lifecycle between your ERP and a Plateforme Agréée.',
      }),
      tags: [
        'UBL 2.1',
        translate({id: 'homepage.products.nomaubl.tag2', message: '2026 reform'}),
        translate({id: 'homepage.products.nomaubl.tag3', message: 'Any ERP'}),
      ],
      to: '/nomaubl/getting-started/',
    },
  ];
}

function ProductCard({p}: {p: Product}) {
  const {i18n} = useDocusaurusContext();
  const lang = i18n.currentLocale === 'fr' ? 'fr' : 'en';
  const img = useBaseUrl(`/img/products/${p.key}-${lang}.svg`);
  return (
    <Link to={p.to} className={styles.productCard}>
      <div className={styles.productMedia}>
        <img className={styles.productImage} src={img} alt="" loading="lazy" />
      </div>
      <div className={styles.productBody}>
        <span className={styles.productLabel}>{p.label}</span>
        <h3 className={styles.productTitle}>{p.title}</h3>
        {p.tagline && <p className={styles.productTagline}>{p.tagline}</p>}
        <p className={styles.productDescription}>{p.description}</p>
        <ul className={styles.productTags}>
          {p.tags.map(t => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <span className={styles.productLink}>
          {translate({id: 'homepage.products.read', message: 'Read the documentation'})} →
        </span>
      </div>
    </Link>
  );
}

function Products() {
  const all = products();
  const platforms = ['liberty', 'nomaflow'].map(k => all.find(p => p.key === k)!);
  const apps = ['nomasx1', 'nomajde', 'nomaubl'].map(k => all.find(p => p.key === k)!);
  return (
    <section className={styles.section}>
      <span className={styles.sectionEyebrow}>
        {translate({id: 'homepage.products.eyebrow', message: 'Software publisher'})}
      </span>
      <Heading as="h2" className={styles.sectionTitle}>
        {translate({id: 'homepage.products.title', message: 'Our products'})}
      </Heading>
      <p className={styles.sectionIntro}>
        {translate({
          id: 'homepage.products.intro',
          message:
            'Five products, built for ERP teams. Liberty Next is the open-source platform; Nomasx-1, Nomajde and Nomaflow are built with and for it; NomaUBL is our standalone e-invoicing platform.',
        })}
      </p>
      <div className={styles.platformGrid}>
        {platforms.map(p => (
          <ProductCard key={p.key} p={p} />
        ))}
      </div>
      <div className={styles.productGrid}>
        {apps.map(p => (
          <ProductCard key={p.key} p={p} />
        ))}
      </div>
    </section>
  );
}

function Resources() {
  const items = [
    {
      title: translate({id: 'homepage.resources.api.title', message: 'JD Edwards & BI Publisher APIs'}),
      text: translate({
        id: 'homepage.resources.api.text',
        message: 'Java APIs and integration recipes: barcodes, BLOB exports, AIS tuning.',
      }),
      to: '/api/getting-started/',
    },
    {
      title: translate({id: 'homepage.resources.blog.title', message: 'Blog'}),
      text: translate({
        id: 'homepage.resources.blog.text',
        message: 'Articles on JD Edwards, Oracle, e-invoicing and AI.',
      }),
      to: 'https://nomana-it.fr/insights/',
    },
    {
      title: translate({id: 'homepage.resources.github.title', message: 'Open source'}),
      text: translate({
        id: 'homepage.resources.github.text',
        message: 'The public repositories of Nomana-IT on GitHub.',
      }),
      to: 'https://github.com/fblettner?tab=repositories',
    },
  ];
  return (
    <section className={styles.section}>
      <Heading as="h2" className={styles.sectionTitleSmall}>
        {translate({id: 'homepage.resources.title', message: 'Resources'})}
      </Heading>
      <div className={styles.resourceGrid}>
        {items.map(r => (
          <Link key={r.title} to={r.to} className={styles.resourceCard}>
            <span className={styles.resourceTitle}>{r.title} →</span>
            <span className={styles.resourceText}>{r.text}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Demos() {
  const open = translate({id: 'homepage.demo.open', message: 'Open the demo'});
  return (
    <section className={styles.section} id="demos">
      <Heading as="h2" className={styles.sectionTitleSmall}>
        {translate({id: 'homepage.demo.title', message: 'Try it online'})}
      </Heading>
      <div className={styles.demoGrid}>
        <div className={styles.demoCard}>
          <h3 className={styles.demoTitle}>Liberty Next</h3>
          <p className={styles.demoText}>
            {translate({
              id: 'homepage.demo.liberty.text',
              message: 'The Liberty Next platform with the Nomasx-1 and Nomajde applications.',
            })}
          </p>
          <p className={styles.demoMeta}>
            {translate({id: 'homepage.demo.login', message: 'Login'})} <code>demo</code>
            {' · '}
            {translate({id: 'homepage.demo.password', message: 'Password'})} <code>demo2026</code>
          </p>
          <Link className={`button button--primary ${styles.demoButton}`} to="https://liberty.nomana-it.fr/">
            {open}
          </Link>
        </div>
        <div className={styles.demoCard}>
          <h3 className={styles.demoTitle}>NomaUBL</h3>
          <p className={styles.demoText}>
            {translate({
              id: 'homepage.demo.nomaubl.text',
              message: 'E-invoicing on fictitious data: invoices, lifecycles, e-reporting and reports.',
            })}
          </p>
          <p className={styles.demoMeta}>
            {translate({id: 'homepage.demo.nomaubl.noLogin', message: 'No login required'})}
          </p>
          <Link className={`button button--primary ${styles.demoButton}`} to="https://nomaubl.nomana-it.fr/">
            {open}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({id: 'homepage.meta.title', message: 'Documentation, Blog and Resources', description: 'Title of the home page'})}
      description={translate({
        id: 'homepage.meta.description',
        message: 'Documentation of the software published by Nomana-IT: Liberty Next low-code platform, Nomaflow, Nomasx-1, Nomajde for JD Edwards EnterpriseOne, NomaUBL French e-invoicing and JD Edwards / BI Publisher APIs — with built-in AI assistants powered by Claude.',
        description: 'Meta description of the home page',
      })}>
      <Hero />
      <main className={styles.main}>
        <Products />
        <Resources />
        <Demos />
      </main>
    </Layout>
  );
}
