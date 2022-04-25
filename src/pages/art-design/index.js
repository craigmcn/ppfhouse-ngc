import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { Helmet } from 'react-helmet'
import Lightbox from '../../components/Lightbox/Lightbox'
import { HowieSidebar as Sidebar } from '../../components/shared/Sidebars'
import ArtDesignItem from '../../components/ArtDesign/ArtDesignItem'
import ArtDesignPageHeader from '../../components/ArtDesign/PageHeader'
import { getLightboxType } from '../../utilities'

const ArtDesignPageTemplate = ({ pages }) => {
  const validArtItems = pages.edges
    .filter(({node}) => node.frontmatter.title && node.frontmatter.thumbnail && node.frontmatter.filename)
    .map(({node}) => ({
      id: node.id,
      title: node.frontmatter.title,
      src: node.frontmatter.filename,
      content: node.internal.content?.trim(),
      description: node.html,
      thumbnail: node.frontmatter.thumbnail,
      type: getLightboxType(node.frontmatter.filename),
    }))
  const [current, setCurrent] = useState({})
  const [open, setOpen] = useState(false)

  const handleClick = useCallback((id) => {
    setCurrent(validArtItems.find(item => item.id === id))
    setOpen(true)
  }, [validArtItems])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <>
      <div className="columns-6">

        { validArtItems.map(item => {
          return (
            <div key={ item.id } className="column">
              <div className="wrapper">
                <ArtDesignItem
                  id={ item.id }
                  url={ item.filename }
                  content={ item.content }
                  thumbnail={ item.thumbnail }
                  title={ item.title }
                  onClick={ handleClick }
                />
              </div>
            </div>
          )
        })}
      </div>

      <Lightbox
        gallery={validArtItems}
        current={current}
        headerPosition="bottom"
        open={open}
        onClose={handleClose}
      />
    </>
  )
}

ArtDesignPageTemplate.propTypes = {
  pages: PropTypes.object.isRequired,
}

const ArtDesignPage = ({ data }) => {
  const { allMarkdownRemark: pages } = data

  return (
    <Layout className="art-design has-sidebar has-columns" pageHeader={ ArtDesignPageHeader } sidebar={ Sidebar }>
      <Helmet>
        <title>Art & Design :: PPF House</title>
        <meta name="description" content="PPF House art and design portfolio" />
      </Helmet>
      <ArtDesignPageTemplate
        pages={ pages }
      />
    </Layout>
  )
}

ArtDesignPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ArtDesignPage

export const artDesignPageQuery = graphql`
  query ArtDesignPage {
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "art-design"}}}, sort: {fields: fields___order, order: ASC}) {
    edges {
      node {
        id
        frontmatter {
          title
          filename
          thumbnail
        }
        html
        internal {
          content
        }
      }
    }
  }
}
`
