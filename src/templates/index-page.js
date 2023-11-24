import React from 'react';
import SharedHead from '../components/shared/Head';
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

export const Head = () => <SharedHead />;
