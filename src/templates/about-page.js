import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import { AboutPageTemplate } from '../components/AboutPageTemplate';

const AboutPage = ({ data }) => {
  const { markdownRemark: about } = data;

  return (
    <Layout className="about background has-sidebar">
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
  data: PropTypes.object.isRequired,
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
