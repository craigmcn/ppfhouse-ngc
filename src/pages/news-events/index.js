import React from 'react';
import SharedHead from '../../components/shared/Head';
import Layout from '../../components/Layout';
import NewsList from '../../components/News/GeneralNewsList';
import EventList from '../../components/Events/EventList';

const NewsEventsPage = () => {
  return (
    <Layout className="news-events has-columns" hasBackground={true}>
      <div className="columns-2">
        <div className="column">
          <div className="wrapper">
            <h2>news</h2>
            <NewsList />
          </div>
        </div>

        <div className="column">
          <div className="wrapper">
            <h2>events</h2>
            <EventList />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsEventsPage;

export const Head = () => (
  <SharedHead title="News and Events" description="News and events" />
);
