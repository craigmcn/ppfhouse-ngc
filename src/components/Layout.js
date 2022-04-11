import React, { Fragment, useEffect } from 'react'
import { withPrefix } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import useSiteMetadata from './SiteMetadata'

import "../styles/base.css"
import "../styles/layout.css"
import "../styles/utilities.css"

const TemplateWrapper = ({ children, pageHeader, sidebar, ...props }) => {
  const { title, description } = useSiteMetadata()

  useEffect(() => {
    document.documentElement.className = "js";
  }, []);

  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}safari-pinned-tab.svg`}
          color="#ff0000"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>

      <a className="sr-only" href="#content">Skip to main content</a>

      <Header />   

      <div id="container" { ...props } >
        { pageHeader }
        { sidebar }

        <div id="content">
          <div className="wrapper">
            { children }
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default TemplateWrapper
