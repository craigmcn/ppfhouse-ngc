import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

const ArtDesignTemplate = ({ content, title, filename, description }) => {

  return (
    <Fragment>
      <h2>{ title }</h2>
      <p>
          <img src={ filename } alt={ description } />
      </p>
      <HTMLContent content={ content } />
    </Fragment>
  )
}

ArtDesignTemplate.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string.isRequired,
  filename: PropTypes.string,
  description: PropTypes.string,
}

const ArtDesign = ({ data }) => {
  const { markdownRemark: artDesign } = data

  return (
    <Layout className="has-sidebar">
      <Helmet>
        <title>{ artDesign.frontmatter.title } :: Art & Design :: PPF House</title>
        <meta name="description" content={ artDesign.internal.content || artDesign.frontmatter.title } />
      </Helmet>
      <ArtDesignTemplate
        content={ artDesign.html }
        title={ artDesign.frontmatter.title }
        filename={ artDesign.frontmatter.filename }
        description={ artDesign.internal.content || artDesign.frontmatter.title }
      />
    </Layout>
  )
}

ArtDesign.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ArtDesign

export const artDesignQuery = graphql`
  query ArtDesign($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
          filename
          title
        }
        html
        internal {
					content
        }
    }
  }
`
