import React, { Fragment, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';
import cx from 'classnames';
import { ChildrenPropType } from '../utilities/propTypes';
import useSiteMetadata from './SiteMetadata';
import Header from './shared/Header';
import useSplashBackground from '../hooks/useSplashBackground';
import useBamSplash from '../hooks/useBamSplash';
import usePrevious from '../hooks/usePrevious';

import '../styles/base.css';
import '../styles/layout.css';
import '../styles/utilities.css';
import * as layout from '../styles/layout.module.scss';

const Layout = ({
  children,
  pageHeader,
  sidebar,
  className,
  hasBackground,
  isBamSplash,
}) => {
  const { title, description } = useSiteMetadata();

  const containerRef = useRef(null);
  const background = hasBackground
    ? useSplashBackground()
    : isBamSplash
    ? useBamSplash()
    : null;
  const prevBackground = usePrevious(background);

  useEffect(() => {
    if (prevBackground === undefined && background !== null) {
      containerRef.current.style.backgroundImage = `url(${background})`;
    }
  }, [prevBackground, background]);

  useEffect(() => {
    document.documentElement.className = 'js';
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

      <a className="sr-only" href="#content">
        Skip to main content
      </a>

      <Header />

      <div className={cx(layout.container, className)} ref={containerRef}>
        {pageHeader}
        {sidebar}

        <div id="content" className={cx('content', layout.content)}>
          <div className="wrapper">{children}</div>
        </div>
      </div>
    </Fragment>
  );
};

Layout.propTypes = {
  children: ChildrenPropType,
  pageHeader: ChildrenPropType,
  sidebar: ChildrenPropType,
  className: PropTypes.string,
  hasBackground: PropTypes.bool,
  isBamSplash: PropTypes.bool,
};

export default Layout;
