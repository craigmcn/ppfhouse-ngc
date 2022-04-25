import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import NewsList from './NewsList'

export default () => (
  <StaticQuery
    query={graphql`
      query generalNewsList {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "news" }
              general: { eq: true }
            }
          }
          sort: { fields: frontmatter___date, order: DESC }
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
    render={ data => <NewsList data={ data } /> }
  />
)
