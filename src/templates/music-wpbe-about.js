import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SharedHead from '../components/shared/Head';
import Layout from '../components/Layout';
import { HTMLContent } from '../components/shared/Content';
import Sidebar from '../components/Wpbe/Sidebar';
import PageHeader from '../components/Wpbe/PageHeader';
import PressList from '../components/Press/PressList';

const MusicPageTemplate = ({ title, content, press, pressSections }) => {
  return (
    <>
      <h2>{title.toLowerCase()}</h2>
      <HTMLContent content={content} />
      {press && <PressList title={press} items={pressSections} />}
    </>
  );
};

MusicPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  press: PropTypes.string,
  pressSections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      pressClippings: PropTypes.arrayOf(
        PropTypes.shape({
          body: PropTypes.string.isRequired,
          source: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
};

const MusicPage = ({ data }) => {
  const { markdownRemark } = data;
  const { title, press, pressSections } = markdownRemark?.frontmatter;
  const content = markdownRemark?.html;

  return (
    <Layout
      className="music wpbe has-sidebar no-columns"
      pageHeader={PageHeader}
      sidebar={Sidebar}
    >
      <MusicPageTemplate
        title={title}
        content={content}
        press={press}
        pressSections={pressSections}
      />
    </Layout>
  );
};

MusicPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MusicPage;

export const musicPageQuery = graphql`
  query WpbeAboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        press
        pressSections {
          title
          pressClippings {
            body
            source
          }
        }
      }
      html
    }
  }
`;

export const Head = () => (
  <SharedHead
    title="About :: The Worst Pop Band Ever"
    description="Music: The Worst Pop Band Ever: With influences ranging from Wayne Shorter to the Carpenters to J Dilla, The Worst Pop Band Ever is a Toronto based quintet that tries to combine a love of improvisational jazz and modern popular music."
  />
);
