import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SharedHead from '../components/shared/Head';
import Layout from '../components/Layout';

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

export const Head = (props) => {
  const { markdownRemark: splash } = props.data || {}; // eslint-disable-line react/prop-types
  return (
    <SharedHead
      title={`${splash.frontmatter.title} :: Splash Images`}
      description={`Splash images: ${splash.frontmatter.title}`}
    />
  );
};
