import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import Sidebar from '../components/Wpbe/Sidebar'
import PageHeader from '../components/Wpbe/PageHeader'
import PressList from '../components/Press/PressList'

const MusicPageTemplate = ({ title, content, press, pressSections }) => {

  return (
    <>
      <h2>{ title.toLowerCase() }</h2>
      <HTMLContent content={ content } />
      { press && <PressList title={ press } items={ pressSections } /> }
    </>
  )
}

MusicPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

const MusicPage = ({ data }) => {
  const { markdownRemark } = data
  const { title, press, pressSections } = markdownRemark?.frontmatter
  const content = markdownRemark?.html

  return (
    <Layout className="music wpbe has-sidebar no-columns" pageHeader={ PageHeader } sidebar={ Sidebar }>
      <Helmet>
        <title>The Worst Pop Band Ever :: Music :: PPF House</title>
        <meta name="description" content="PPF House: PPF House Music: The Worst Pop Band Ever" />
      </Helmet>
      <MusicPageTemplate
        title={ title }
        content={ content }
        press={ press }
        pressSections={ pressSections }
      />
    </Layout>
  )
}

MusicPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MusicPage

export const musicPageQuery = graphql`
  query WpbeAboutPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        press
        pressSections {
          title
          pressClippings {
            body
            source
          }
        }
      }
      html
    }
  }
`
