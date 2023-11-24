import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import NewsItem from '../News/NewsItem';

const NewsList = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <>
      {edges.map(({ node }, index) => (
        <NewsItem key={index} data={node} />
      ))}
    </>
  );
};

NewsList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

const StaticQueryRender = () => (
  <StaticQuery
    query={graphql`
      query wpbeNewsList {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "news" }
              group: { eq: "The Worst Pop Band Ever" }
            }
          }
          sort: { frontmatter: { date: DESC } }
          limit: 12
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                postedBy
                date(formatString: "MMMM D, YYYY")
              }
              html
            }
          }
        }
      }
    `}
    render={(data) => <NewsList data={data} />}
  />
);

export default StaticQueryRender;
