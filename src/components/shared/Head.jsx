import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';
import useSiteMetadata from '../SiteMetadata';

const Head = ({ title, description }) => {
  const { title: siteTitle, description: siteDescription } = useSiteMetadata();

  const displayTitle = title ? `${title} :: ${siteTitle}` : siteTitle;
  const displayDescription = description
    ? `${siteTitle}: ${description}`
    : siteDescription;

  return (
    <>
      <title>{displayTitle}</title>
      <meta name="description" content={displayDescription} />

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
      <meta property="og:title" content={siteTitle} />
      <meta property="og:url" content="/" />
      <meta
        property="og:image"
        content={`${withPrefix('/')}img/og-image.jpg`}
      />
    </>
  );
};

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Head;
