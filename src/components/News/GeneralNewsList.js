import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import NewsList from './NewsList';

const StaticQueryRender = () => (
  <StaticQuery
    query={graphql`
      query generalNewsList {
        allMarkdownRemark(
          filter: {
            frontmatter: { templateKey: { eq: "news" }, general: { eq: true } }
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
