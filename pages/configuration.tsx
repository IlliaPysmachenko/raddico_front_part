import React from 'react';
import ConfigurationPage from '@/src/screens/configurationPage/ConfigurationPage';
import Head from 'next/head';

const configuration = () => (
  <>
    <Head>
      <title>Raddico App | Configuration</title>
      <meta property="og:title" content="Raddico App | Configuration" key="title" />
    </Head>
    <ConfigurationPage />
  </>
);

export default configuration;
