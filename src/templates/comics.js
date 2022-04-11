import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import { HowieSidebar as Sidebar } from '../components/Sidebars'

const PageHeader = (
  <div id="page-header">
    <h2>comics</h2>
  </div>
)

const ComicsTemplate = ({ title, cover, pages }) => {

  return (
    <>
      <h2>{ title.toLowerCase() }</h2>
      <p>
        <img src={ cover } alt={ title } />
      </p>

      { pages.map(({name, image}) => {
      return (
          <Fragment key={name}>
            <h3>{ name.toLowerCase() }</h3>
            <p>
              <img src={ image } alt={ name } />
            </p>
          </Fragment>
      )
    }) }
    </>
  )
}

ComicsTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string,
  pages: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  })
}

const Comics = ({ data }) => {
  const { markdownRemark: comics } = data

  return (
    <Layout className="has-sidebar" pageHeader={ PageHeader } sidebar={ Sidebar }>
      <Helmet>
        <title>{ comics.frontmatter.title } :: Comics :: PPF House</title>
        <meta name="description" content={ `${comics.frontmatter.title}, a comic by Howie Shia` } />
      </Helmet>
      <ComicsTemplate
        title={ comics.frontmatter.title }
        cover={ comics.frontmatter.cover }
        pages={ comics.frontmatter.pages }
      />
    </Layout>
  )
}

Comics.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Comics

export const comicsQuery = graphql`
  query Comics($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        cover
        title
        pages {
          name
          image
        }
      }
    }
  }
`
