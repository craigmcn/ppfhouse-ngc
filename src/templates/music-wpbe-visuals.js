import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Sidebar from '../components/Wpbe/Sidebar'
import PageHeader from '../components/Wpbe/PageHeader'
import { WpbeVisualsPageTemplate } from '../components/Wpbe/VisualsPageTemplate'

const WpbeVisualsPage = ({ data }) => {
  const { markdownRemark: visuals } = data
  const { title, content } = visuals.frontmatter

  return (
    <Layout className="music wpbe has-sidebar no-columns" pageHeader={ PageHeader } sidebar={ Sidebar }>
      <Helmet>
        <title>The Worst Pop Band Ever :: Visuals :: PPF House</title>
        <meta name="description" content="PPF House: PPF House Visuals: The Worst Pop Band Ever" />
      </Helmet>

      <h2>{ title.toLowerCase() }</h2>

      <WpbeVisualsPageTemplate
        content={ content }
      />
    </Layout>
  )
}

WpbeVisualsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WpbeVisualsPage

export const wpbeVisualsPageQuery = graphql`
  query WpbeVisualsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        content {
          id
          visuals
          url
          thumbnail
        }
      }
    }
  }
`
