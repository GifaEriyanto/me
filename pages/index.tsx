import { Layout } from '@components/layout';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gifa Eriyanto</title>
      </Head>

      <Layout>Content</Layout>
    </>
  );
};

export default Index;
