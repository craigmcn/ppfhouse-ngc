import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import PageHeader from '../components/MusicPageHeader';

const MusicPageTemplate = ({ groups }) => {
  return (
    <div className="music-items columns-5">
      {groups.map((group, index) => {
        const displayTitle =
          group.title === 'LEO37' ? 'LEO37' : group.title.toLowerCase();
        return (
          <div className="column" key={index}>
            <div className="wrapper">
              <div className="music-item">
                <Link to={`${group.url || '/' + group.slug}`}>
                  <img src={group.thumbnail} alt={group.title} />
                </Link>
                <div className="music-item-title">
                  <Link to={`${group.url || '/' + group.slug}`}>
                    {displayTitle}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

MusicPageTemplate.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      url: PropTypes.string,
    })
  ).isRequired,
};

const MusicPage = ({ data }) => {
  const { markdownRemark } = data;
  const groups =
    markdownRemark &&
    markdownRemark.frontmatter &&
    markdownRemark.frontmatter.groups;

  return (
    <Layout className="music index no-columns" pageHeader={PageHeader}>
      <Helmet>
        <title>Music :: PPF House</title>
        <meta
          name="description"
          content="PPF House: PPF House Music: Tim Shia, LEO37, The Worst Pop Band Ever, Film & TV Scoring, Jazz 4 Juniors"
        />
      </Helmet>

      <MusicPageTemplate groups={groups} />
    </Layout>
  );
};

MusicPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MusicPage;

export const musicPageQuery = graphql`
  query Music($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        groups {
          title
          slug
          thumbnail
          url
        }
      }
    }
  }
`;
