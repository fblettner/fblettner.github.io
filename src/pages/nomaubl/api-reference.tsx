import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '@site/src/components/reference/ApiReference';

const COPY = {
  en: {
    title: 'NomaUBL API Reference',
    description:
      'Complete HTTP API reference for the NomaUBL platform — authentication, configuration, processing, invoices, batch, JD Edwards integration, connectors, email, file system and AI endpoints.',
    loading: 'Loading API reference…',
  },
  fr: {
    title: 'Référence API NomaUBL',
    description:
      "Référence complète de l'API HTTP de la plateforme NomaUBL — authentification, configuration, traitement, factures, lots, intégration JD Edwards, connecteurs, e-mail, système de fichiers et IA.",
    loading: 'Chargement de la référence API…',
  },
};

export default function NomaUBLApiReferencePage() {
  const {i18n} = useDocusaurusContext();
  const lang = i18n.currentLocale === 'fr' ? 'fr' : 'en';
  const t = COPY[lang];

  return (
    <Layout title={t.title} description={t.description}>
      <main>
        <ApiReference specUrl="/openapi/nomaubl.json" loading={t.loading} />
      </main>
    </Layout>
  );
}
