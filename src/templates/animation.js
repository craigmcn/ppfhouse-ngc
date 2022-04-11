import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import { HowieSidebar as Sidebar } from '../components/Sidebars'
import AnimationPageHeader from '../components/Animation/PageHeader'

const AnimationTemplate = ({ content, title, thumbnail, url, description  }) => {

  return (
    <Fragment>
      <h2>{ title }</h2>
      <p>
        <a href={ url } target="_blank" rel="noreferrer">
          <img src={ thumbnail } alt={ description } />
        </a>
      </p>
      <HTMLContent content={ content } />
      <iframe
        title={title}
        src={url}
        allow="accelerometer; fullscreen; gyroscope"
        width="690"
        height="388"
      />
    </Fragment>
  )
}

AnimationTemplate.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  thumbnail: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
}

const Animation = ({ data }) => {
  const { markdownRemark: animation } = data

  return (
    <Layout className="has-sidebar has-columns" pageHeader={ AnimationPageHeader } sidebar={ Sidebar }>
      <Helmet>
        <title>{ animation.frontmatter.title } :: Animation ({ animation.frontmatter.type }) :: PPF House</title>
        <meta name="description" content={ animation.internal.content || animation.frontmatter.title } />
      </Helmet>
      <AnimationTemplate
        content={ animation.html }
        title={ animation.frontmatter.title }
        type={ animation.frontmatter.type }
        thumbnail={ animation.frontmatter.thumbnail }
        url={ animation.frontmatter.url }
        description={ animation.internal.content || animation.frontmatter.title }
      />
    </Layout>
  )
}

Animation.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Animation

export const animationQuery = graphql`
  query Animation($id: String!) {
    markdownRemark(id: { eq: $id }) {
        frontmatter {
          thumbnail
          title
          type
          url
        }
        html
        internal {
					content
        }
    }
  }
`
