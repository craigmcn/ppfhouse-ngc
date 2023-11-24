import React from 'react';
import SharedHead from '../../components/shared/Head';
import Layout from '../../components/Layout';
import EventList from '../../components/Events/EventList';

const EventsPage = () => {
  return (
    <Layout className="events background has-sidebar">
      <h2>events</h2>

      <EventList />
    </Layout>
  );
};

export default EventsPage;

export const Head = () => <SharedHead title="Events" description="Events" />;
