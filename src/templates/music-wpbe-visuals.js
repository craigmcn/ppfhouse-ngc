import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SharedHead from '../components/shared/Head';
import Layout from '../components/Layout';
import Sidebar from '../components/Wpbe/Sidebar';
import PageHeader from '../components/Wpbe/PageHeader';
import { WpbeVisualsPageTemplate } from '../components/Wpbe/VisualsPageTemplate';

const WpbeVisualsPage = ({ data }) => {
  const { markdownRemark: visuals } = data;
  const { title, items } = visuals.frontmatter;

  return (
    <Layout
      className="music wpbe has-sidebar no-columns"
      pageHeader={PageHeader}
      sidebar={Sidebar}
    >
      <h2>{title.toLowerCase()}</h2>

      <WpbeVisualsPageTemplate items={items} />
    </Layout>
  );
};

WpbeVisualsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WpbeVisualsPage;

export const wpbeVisualsPageQuery = graphql`
  query WpbeVisualsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        items {
          id
          title
          url
          image
          thumbnail
        }
      }
    }
  }
`;

export const Head = () => {
  return (
    <SharedHead
      title="Visuals :: The Worst Pop Band Ever :: Music"
      description="Music: The Worst Pop Band Ever: Videos and photos"
    />
  );
};
