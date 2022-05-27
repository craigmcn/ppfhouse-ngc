import React from 'react';
import Layout from '../components/Layout';
import { IndexPageTemplate } from '../components/IndexPageTemplate';

const IndexPage = () => {
  return (
    <Layout className="no-columns" isSplash={true}>
      <IndexPageTemplate />
    </Layout>
  );
};

export default IndexPage;
