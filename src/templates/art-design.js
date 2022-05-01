import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { getLightboxType, md2Html } from '../utilities'
import Layout from '../components/Layout'
import { HowieSidebar as Sidebar } from '../components/shared/Sidebars'
import Lightbox from '../components/Lightbox/Lightbox'
import ArtDesignItem from '../components/ArtDesign/ArtDesignItem'
import ArtDesignPageHeader from '../components/ArtDesign/PageHeader'

const ArtDesignPageTemplate = ({ items }) => {
  const validArtItems = items
    .filter((item) => item.title && item.thumbnail && item.image)
    .map((item) => ({
      id: item.id,
      title: item.title,
      src: item.image,
      content: item.body,
      description: md2Html(item.body),
      thumbnail: item.thumbnail,
      type: getLightboxType(item.image),
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
                  url={ item.src }
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
  items: PropTypes.object.isRequired,
}

const ArtDesignPage = ({ data }) => {
  const { items } = data?.markdownRemark?.frontmatter

  return (
    <Layout className="art-design has-sidebar has-columns" pageHeader={ ArtDesignPageHeader } sidebar={ Sidebar }>
      <Helmet>
        <title>Art & Design :: PPF House</title>
        <meta name="description" content="PPF House art and design portfolio" />
      </Helmet>
      <ArtDesignPageTemplate items={ items } />
    </Layout>
  )
}

ArtDesignPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ArtDesignPage

export const artDesignPageQuery = graphql`
  query ArtDesignPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
        frontmatter {
          items {
            id
            title
            thumbnail
            image
            body
          }
        }
      }
    }
`