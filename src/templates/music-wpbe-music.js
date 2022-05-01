import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Sidebar from '../components/Wpbe/Sidebar'
import PageHeader from '../components/Wpbe/PageHeader'

const WpbeMusicPage = ({ data }) => {
  const { markdownRemark: music } = data
  const { title, items } = music.frontmatter

  const column1 = items.slice(0, Math.ceil(items.length / 2))
  const column2 = items.slice(Math.ceil(items.length / 2))

  return (
    <Layout className="music wpbe has-sidebar no-columns" pageHeader={ PageHeader } sidebar={ Sidebar }>
      <Helmet>
        <title>The Worst Pop Band Ever :: Music :: PPF House</title>
        <meta name="description" content="PPF House: PPF House Music: The Worst Pop Band Ever" />
      </Helmet>

      <h2>{ title.toLowerCase() }</h2>

      <div className="columns-2">
        <div className="column">
            <div className="wrapper">
              { column1.map((item) => {
                return (
                  <div class="music-item">
                    <a
                      href={ item.url }
                      title={ item.title }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={ item.thumbnail } alt={ `Album cover for ${item.title}` } />
                    </a>
                    <p>{ item.title.toLowerCase() }</p>
                  </div>
                )
              }) }
            </div>
        </div>

        <div className="column">
            <div className="wrapper">
              { column2.map((item) => {
                return (
                  <div class="music-item">
                    <a
                      href={ item.url }
                      title={ item.title }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={ item.thumbnail } alt={ `Album cover for ${item.title}` } />
                    </a>
                    <p>{ item.title.toLowerCase() }</p>
                  </div>
                )
              }) }
            </div>
        </div>
      </div>
      
    </Layout>
  )
}

WpbeMusicPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WpbeMusicPage

export const wpbeMusicPageQuery = graphql`
  query WpbeMusicPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        items {
          title
          url
          thumbnail
        }
      }
    }
  }
`
