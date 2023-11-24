import React from 'react';
import { graphql } from 'gatsby';
import SharedHead from '../components/shared/Head';
import Layout from '../components/Layout';
import NewsList from '../components/Wpbe/NewsList';
import EventList from '../components/Events/EventList';
import PageHeader from '../components/Wpbe/PageHeader';
import Sidebar from '../components/Wpbe/Sidebar';

const NewsPage = () => {
  return (
    <Layout
      className="music wpbe has-sidebar no-columns"
      pageHeader={PageHeader}
      sidebar={Sidebar}
    >
      <h2>news + shows</h2>

      <div className="columns-2">
        <div className="column">
          <div className="wrapper">
            <h3>news</h3>
            <NewsList />
          </div>
        </div>

        <div className="column">
          <div className="wrapper">
            <h3>events</h3>
            <EventList />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;

export const newsQuery = graphql`
  query NewsShows($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        postedBy
        date(formatString: "MMMM D, YYYY")
      }
      html
      excerpt
    }
  }
`;

export const Head = () => (
  <SharedHead
    title="News and Shows :: The Worst Pop Band Ever"
    description="The Worst Pop Band Ever: News and events"
  />
);
