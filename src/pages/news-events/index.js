import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';
import useSplashBackground from '../../hooks/useSplashBackground';
import usePrevious from '../../hooks/usePrevious';
import NewsList from '../../components/News/GeneralNewsList';
import EventList from '../../components/Events/EventList';

const NewsEventsPage = () => {
  const background = useSplashBackground();
  const prevBackground = usePrevious(background);

  useEffect(() => {
    if (!prevBackground) {
      document.querySelector(
        '.container.background'
      ).style.backgroundImage = `url(${background})`;
    }
  }, [prevBackground, background]);

  return (
    <Layout className="news-events background has-columns">
      <Helmet>
        <title>News and Events :: PPF House</title>
        <meta name="description" content="PPF House news and events" />
      </Helmet>

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
