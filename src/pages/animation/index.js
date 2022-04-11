import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import AnimationPageHeader from '../../components/Animation/PageHeader'
import { HowieSidebar as Sidebar } from '../../components/Sidebars'
import { Helmet } from 'react-helmet'
import Lightbox from '../../components/Lightbox/Lightbox'
import AnimationItem from '../../components/Animation/AnimationItem'

const AnimationPageTemplate = ({ pages }) => {
  const validAnimations = pages.edges.filter(({node}) => node.frontmatter.title && node.frontmatter.thumbnail && node.frontmatter.url)

  const demo = validAnimations.filter(({node}) => node.frontmatter.type === "demo")
  const independent = validAnimations.filter(({node}) => node.frontmatter.type === "independent")
  const commercial = validAnimations.filter(({node}) => node.frontmatter.type === "commercial")

  const gallery = validAnimations
    .map(({node}) => ({
      id: node.id,
      title: node.frontmatter.title,
      src: node.frontmatter.url,
      content: node.internal.content?.trim(),
      description: node.html,
      thumbnail: node.frontmatter.thumbnail,
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

  return (
    <>
      <div className="columns-3">

        <div className="column">
          <div className="wrapper">
            <h2 className="centered">demo reel</h2>
            { demo.map(({node}) => {
              return (
                <AnimationItem
                  key={ node.id }
                  id={ node.id }
                  url={ node.frontmatter.url }
                  content={ node.frontmatter.content?.trim() }
                  thumbnail={ node.frontmatter.thumbnail }
                  title={ node.frontmatter.title }
                  onClick={ handleClick }
                />
              )
            })}
          </div>
        </div>

        <div className="column">
          <div className="wrapper">
            <h2 className="centered">shorts &amp; videos</h2>
            { independent.map(({node}) => {
              return (
                <AnimationItem
                  key={ node.id }
                  id={ node.id }
                  url={ node.frontmatter.url }
                  content={ node.frontmatter.content?.trim() }
                  thumbnail={ node.frontmatter.thumbnail }
                  title={ node.frontmatter.title }
                  onClick={ handleClick }
                />
              )
            })}
          </div>
        </div>

        <div className="column">
          <div className="wrapper">
            <h2 className="centered">TV &amp; advertising</h2>
            { commercial.map(({node}) => {
              return (
                <AnimationItem
                  key={ node.id }
                  id={ node.id }
                  url={ node.frontmatter.url }
                  content={ node.frontmatter.content?.trim() }
                  thumbnail={ node.frontmatter.thumbnail }
                  title={ node.frontmatter.title }
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
        type="iframe"
        open={open}
        onClose={handleClose}
      />

      {/* <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen} className="lightbox">
        <div ref={lightboxHeaderRef} className="lightbox__header">
          <h1 className="lightbox__title">{ showAnimation?.frontmatter?.title }</h1>
          { (showAnimation && showAnimation?.html) && (
            <HTMLContent className="lightbox__description" content={ showAnimation?.html } />
          ) }
        </div>
        <div className="lightbox__body">
          <div className="lightbox__content">
            { isLoading && (
              <div className="lightbox__loading">
                <FontAwesomeIcon icon={faCircleNotch} spin />
                <span className="sr-only"> Loading</span>
              </div>
            ) }
            <iframe
              ref={iframeRef}
              title={showAnimation?.frontmatter?.title}
              src={showAnimation?.frontmatter?.url}
              onLoad={handleLoad}
              allow="accelerometer; fullscreen; gyroscope"
            />
          </div>
          <button className='lightbox__controls lightbox__controls--previous' type="button" onClick={handleModalPrevious} aria-label="Previous"><FontAwesomeIcon icon={ faChevronLeft } size="2x" fixedWidth /></button>
          <button className='lightbox__controls lightbox__controls--next' type="button" onClick={handleModalNext} aria-label="Next"><FontAwesomeIcon icon={ faChevronRight } size="2x" fixedWidth /></button>
        </div>
      </Modal> */}
    </>
  )
}

AnimationPageTemplate.propTypes = {
  pages: PropTypes.object.isRequired,
}

const AnimationPage = ({ data }) => {
  const { allMarkdownRemark: pages } = data

  return (
    <Layout className="animation has-sidebar has-columns" pageHeader={ AnimationPageHeader } sidebar={ Sidebar }>
      <Helmet>
        <title>Animation :: PPF House</title>
        <meta name="description" content="PPF House animation portfolio" />
      </Helmet>
      <AnimationPageTemplate
        pages={ pages }
      />
    </Layout>
  )
}

AnimationPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AnimationPage

export const animationPageQuery = graphql`
  query AnimationPage {
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "animation"}}}, sort: {fields: fields___order, order: ASC}) {
    edges {
      node {
        id
        frontmatter {
          id
          type
          title
          url
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
