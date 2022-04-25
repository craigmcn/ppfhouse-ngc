import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import Sidebar from '../components/TimShia/Sidebar'
import PageHeader from '../components/TimShia/PageHeader'

const MusicPageTemplate = ({ title, content }) => {

  return (
    <>
      <h2>{ title.toLowerCase() }</h2>
      <HTMLContent content={ content } />
    </>
  )
}

MusicPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

const MusicPage = ({ data }) => {
  const { markdownRemark } = data
  const { title } = markdownRemark?.frontmatter
  const content = markdownRemark?.html

  return (
    <Layout className="music tim-shia has-sidebar no-columns" pageHeader={ PageHeader } sidebar={ Sidebar }>
      <Helmet>
        <title>Tim Shia :: Music :: PPF House</title>
        <meta name="description" content="PPF House: PPF House Music: Tim Shia" />
      </Helmet>
      <MusicPageTemplate
        title={ title }
        content={ content }
      />
    </Layout>
  )
}

MusicPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MusicPage

export const musicPageQuery = graphql`
  query TimShiaPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
      }
      html
    }
  }
`
