import React from 'react';
import SharedHead from '../components/shared/Head';
import Layout from '../components/Layout';
import BamSplashTemplate from '../components/BamSplashTemplate';

const BamSplash = () => {
  return (
    <Layout className="no-columns" isBamSplash={true}>
      <BamSplashTemplate />
    </Layout>
  );
};

export default BamSplash;

export const Head = () => <SharedHead />;
