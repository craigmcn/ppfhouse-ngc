import React, { Fragment, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../../components/Layout'
import { HowieSidebar as Sidebar } from '../../components/Sidebars'
import ComicsPageHeader from '../../components/ComicsPageHeader'
import Lightbox from '../../components/Lightbox/Lightbox'

const ComicsPageTemplate = ({ comics }) => {

  const validComics = comics.edges.filter(({node}) => node.frontmatter.title && node.frontmatter.cover && node.frontmatter.pages)
  const galleries = validComics.reduce((r, c, i) => {
    r[c.node.id] = c.node.frontmatter.pages.map(page => ({ id: `${page.name}-${i}`, src: page.image }))
    return r
  }, {})
  const [gallery, setGallery] = useState([])
  const [current, setCurrent] = useState({})
  const [open, setOpen] = useState(false)

  const handleClick = useCallback((e) => {
    e.preventDefault()
    const galleryId = e.currentTarget.dataset.id
    setGallery(galleries[galleryId])
    setCurrent(galleries[galleryId][0])
    setOpen(true)
  }, [galleries])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])
  
  return (
    <>
      { validComics.map(({node}) => {
        return (
            <Fragment key={node.id}>
              <h2>{ node.frontmatter.title.toLowerCase() }</h2>
              <p>
                <a
                  data-id={node.id}
                  href={ node.fields.slug }
                  title={ node.frontmatter.title }
                  onClick={ handleClick }
                >
                  <img src={ node.frontmatter.cover } alt={ node.frontmatter.title } />
                </a>
              </p>
            </Fragment>
        )
      })}

      <Lightbox
        gallery={gallery}
        current={current}
        open={open}
        onClose={handleClose}
      />
    </>
  )
}

ComicsPageTemplate.propTypes = {
  comics: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          cover: PropTypes.string,
          pages: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
          }))
        })
      })
    }))
  })
}

const ComicsPage = ({ data }) => {
  const { allMarkdownRemark: comics } = data

  return (
    <Layout className="has-sidebar" pageHeader={ ComicsPageHeader } sidebar={ Sidebar }>
      <Helmet>
        <title>Comics :: PPF House</title>
        <meta name="description" content="Comics by Howie Shia" />
      </Helmet>
      <ComicsPageTemplate
        comics={ comics }
      />
    </Layout>
  )
}

ComicsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ComicsPage

export const comicsQuery = graphql`
  query ComicsPage {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "comics"}}}, sort: {fields: fields___order, order: ASC}) {
      edges {
        node {
          id
          frontmatter {
            cover
            title
            pages {
              name
              image
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
