import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import PageHeader from '../components/shared/PageHeader';
import { AboutPageTemplate } from '../components/AboutPageTemplate';

const AboutPage = ({ data }) => {
  const { markdownRemark: about } = data;

  return (
    <Layout
      className="about has-sidebar"
      pageHeader={<PageHeader name="about" />}
      hasBackground={true}
    >
      <Helmet>
        <title>About :: PPF House</title>
        <meta
          name="description"
          content="PPF House: About PPF House, Tim Shia, Howie Shia and Leo Shia"
        />
      </Helmet>

      <AboutPageTemplate
        content={about.html}
        aboutContent={about.frontmatter.content}
        aboutContentList={about.fields.contentList}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        content: PropTypes.arrayOf(
          PropTypes.shape({
            heading: PropTypes.string.isRequired,
          })
        ),
      }),
      fields: PropTypes.shape({
        contentList: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
  }).isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        content {
          heading
        }
      }
      html
      fields {
        contentList
      }
    }
  }
`;
