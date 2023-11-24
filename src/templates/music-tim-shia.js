import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SharedHead from '../components/shared/Head';
import Layout from '../components/Layout';
import { HTMLContent } from '../components/shared/Content';
import Sidebar from '../components/TimShia/Sidebar';
import PageHeader from '../components/TimShia/PageHeader';

const MusicPageTemplate = ({ title, content }) => {
  return (
    <>
      <h2>{title.toLowerCase()}</h2>
      <HTMLContent content={content} />
    </>
  );
};

MusicPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const MusicPage = ({ data }) => {
  const { markdownRemark } = data;
  const { title } = markdownRemark?.frontmatter;
  const content = markdownRemark?.html;

  return (
    <Layout
      className="music tim-shia has-sidebar no-columns"
      pageHeader={PageHeader}
      sidebar={Sidebar}
    >
      <MusicPageTemplate title={title} content={content} />
    </Layout>
  );
};

MusicPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MusicPage;

export const musicPageQuery = graphql`
  query TimShiaPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

/* eslint-disable react/prop-types */
export const Head = ({ data }) => {
  const { markdownRemark } = data;
  const { title } = markdownRemark?.frontmatter;
  return (
    <SharedHead
      title={`${title} :: Tim Shia :: Music`}
      description={`Music: Tim Shia ${title}`}
    />
  );
};
/* eslint-enable react/prop-types */
