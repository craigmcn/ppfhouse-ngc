import React from 'react';
import SharedHead from '../../components/shared/Head';
import Layout from '../../components/Layout';
import NewsList from '../../components/News/GeneralNewsList';

const NewsPage = () => {
  return (
    <Layout className="news background has-sidebar">
      <h2>news</h2>

      <NewsList />
    </Layout>
  );
};

export default NewsPage;

export const Head = () => <SharedHead title="News" description="News items" />;
