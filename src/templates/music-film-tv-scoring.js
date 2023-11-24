import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SharedHead from '../components/shared/Head';
import Layout from '../components/Layout';
import { FilmTvScoringPageTemplate } from '../components/FilmTvScoringPageTemplate';
import PageHeader from '../components/FilmTvScoring/PageHeader';
import Sidebar from '../components/FilmTvScoring/Sidebar';

const FilmTvScoringPage = ({ data }) => {
  const { items } = data?.markdownRemark?.frontmatter;

  return (
    <Layout
      className="music film-tv-scoring has-sidebar no-columns"
      pageHeader={PageHeader}
      sidebar={Sidebar}
    >
      <FilmTvScoringPageTemplate items={items} />
    </Layout>
  );
};

FilmTvScoringPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FilmTvScoringPage;

export const musicFilmTvScoringPageQuery = graphql`
  query FilmTvScoringPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        items {
          title
          id
          url
          thumbnail
          body
        }
      }
    }
  }
`;

export const Head = () => {
  return (
    <SharedHead
      title="Film & TV Scoring :: Music"
      description="Music: Film and TV Scoring"
    />
  );
};
