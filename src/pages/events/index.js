import React from 'react';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';
import EventList from '../../components/Events/EventList';

const EventsPage = () => {
  return (
    <Layout className="events background has-sidebar">
      <Helmet>
        <title>Events :: PPF House</title>
        <meta name="description" content="PPF House events" />
      </Helmet>

      <EventList />
    </Layout>
  );
};

export default EventsPage;
