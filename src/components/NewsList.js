import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import NewsItem from './NewsItem'

const NewsList = ({ data }) => {

  const { edges } = data.allMarkdownRemark

  return (
    <>
      <h2 id="news">news</h2>
      { edges.map(({ node }, index) => <NewsItem key={ index } data={ node } />)
      }
    </>
  )
}

NewsList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query newsList {
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
