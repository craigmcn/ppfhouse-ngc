import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import { HowieSidebar as Sidebar } from '../components/shared/Sidebars'
import AnimationPageHeader from '../components/Animation/PageHeader'
import Lightbox from '../components/Lightbox/Lightbox'
import AnimationItem from '../components/Animation/AnimationItem'
import { getLightboxType } from '../utilities'

const AnimationPageTemplate = ({ pages }) => {
  console.log(pages)
  const validAnimations = pages.filter((page) => page.title && page.thumbnail && page.url)

  const demo = validAnimations.filter((page) => page.type === "demo")
  const independent = validAnimations.filter((page) => page.type === "independent")
  const commercial = validAnimations.filter((page) => page.type === "commercial")

  const gallery = validAnimations
    .map((page) => ({
      id: page.id,
      title: page.title,
      src: page.url,
      // content: node.internal.content?.trim(),
      // description: node.html,
      thumbnail: page.thumbnail,
      type: getLightboxType(page.url),
    }))

  const [current, setCurrent] = useState({})
  const [open, setOpen] = useState(false)

  const handleClick = useCallback((id) => {
    setCurrent(gallery.find(item => item.id === id))
    setOpen(true)
  }, [gallery])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  useEffect(() => {
    const el = document.querySelector('a[data-title=BAM]')
    if (window.location.hash === '#bam' && !!el && !open) {
      setCurrent(gallery.find(item => item.id === el.dataset.id))
      setOpen(true)
    }
  }, [open, gallery])

  return (
    <>
      <div className="columns-3">

        <div className="column">
          <div className="wrapper">
            <h2 className="centered">demo reel</h2>
            { demo.map((page) => {
              return (
                <AnimationItem
                  key={ page.id }
                  id={ page.id }
                  url={ page.url }
                  content={ page.content?.trim() }
                  thumbnail={ page.thumbnail }
                  title={ page.title }
                  onClick={ handleClick }
                />
              )
            })}
          </div>
        </div>

        <div className="column">
          <div className="wrapper">
            <h2 className="centered">shorts &amp; videos</h2>
            { independent.map((page) => {
              return (
                <AnimationItem
                  key={ page.id }
                  id={ page.id }
                  url={ page.url }
                  content={ page.content?.trim() }
                  thumbnail={ page.thumbnail }
                  title={ page.title }
                  onClick={ handleClick }
                />
              )
            })}
          </div>
        </div>

        <div className="column">
          <div className="wrapper">
            <h2 className="centered">TV &amp; advertising</h2>
            { commercial.map((page) => {
              return (
                <AnimationItem
                  key={ page.id }
                  id={ page.id }
                  url={ page.url }
                  content={ page.content?.trim() }
                  thumbnail={ page.thumbnail }
                  title={ page.title }
                  onClick={ handleClick }
                />
              )
            })}
          </div>
        </div>
      </div>

      <Lightbox
        gallery={gallery}
        current={current}
        open={open}
        onClose={handleClose}
      />
    </>
  )
}

AnimationPageTemplate.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  thumbnail: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
}

const Animation = ({ data }) => {
  const { animation } = data?.allMarkdownRemark?.edges[0]?.node?.frontmatter
  console.log(animation)

  return (
    <Layout className="has-sidebar has-columns" pageHeader={ AnimationPageHeader } sidebar={ Sidebar }>
      <Helmet>
        <title>Animation :: PPF House</title>
        <meta name="description" content="PPF House animation portfolio" />
      </Helmet>
      <AnimationPageTemplate pages={ animation } />
    </Layout>
  )
}

Animation.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Animation

export const animationQuery = graphql`
  query Animation {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "animation"}}}) {
      edges {
        node {
          frontmatter {
            animation {
              id
              title
              body
              thumbnail
              type
              url
            }
          }
        }
      }
    }
  }
`
