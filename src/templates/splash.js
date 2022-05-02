import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';

const SplashTemplate = ({ title, large, small, background }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>
        Large
        <br />
        <img src={large} alt={`Large size ${title}`} width="960" />
      </p>

      <p>
        Small
        <br />
        <img src={small} alt={`Small size ${title}`} width="480" />
      </p>

      <p>
        Background
        <br />
        <img src={background} alt={`Background size ${title}`} width="960" />
      </p>
    </>
  );
};

SplashTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  large: PropTypes.string.isRequired,
  small: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

const Splash = ({ data }) => {
  const { markdownRemark: splash } = data;

  return (
    <Layout className="has-sidebar">
      <Helmet>
        <title>{splash.frontmatter.title} :: Splash Images :: PPF House</title>
        <meta
          name="description"
          content={`PPF House: Splash images: ${splash.title}`}
        />
      </Helmet>
      <SplashTemplate
        title={splash.frontmatter.title}
        large={splash.frontmatter.large}
        small={splash.frontmatter.small}
        background={splash.frontmatter.background}
      />
    </Layout>
  );
};

Splash.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Splash;

export const splashQuery = graphql`
  query Splash($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        large
        small
        background
      }
    }
  }
`;
