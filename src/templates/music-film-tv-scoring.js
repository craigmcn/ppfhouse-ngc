import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import { FilmTvScoringPageTemplate } from '../components/FilmTvScoringPageTemplate'
import PageHeader from '../components/FilmTvScoring/PageHeader'
import Sidebar from '../components/FilmTvScoring/Sidebar'

const FilmTvScoringPage = ({ data }) => {
  const { markdownRemark: video } = data

  return (
    <Layout className="music film-tv-scoring has-sidebar no-columns" pageHeader={ PageHeader } sidebar={ Sidebar }>
      <Helmet>
        <title>Film & TV Scoring :: Music :: PPF House</title>
        <meta name="description" content="PPF House: PPF House Music: Film & TV Scoring" />
      </Helmet>
      <FilmTvScoringPageTemplate
        content={ video.frontmatter.content }
      />
    </Layout>
  )
}

FilmTvScoringPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FilmTvScoringPage

export const musicFilmTvScoringPageQuery = graphql`
  query FilmTvScoringPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        content {
          video
          id
          url
          thumbnail
          body
        }
      }
    }
  }
`
