import React from 'react';

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
