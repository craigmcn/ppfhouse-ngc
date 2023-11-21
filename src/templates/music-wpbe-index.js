import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import * as styles from '../styles/wpbe-splash.module.css';

const WpbeStaticIndexPage = ({ data }) => {
  return (
    <>
      <style>
        {`:root {
          --wpbe-splash-image: url('${data.markdownRemark.frontmatter.image}');
          --wpbe-splash-bg-color: ${data.markdownRemark.frontmatter.backgroundColor};
          --wpbe-splash-text-color: ${data.markdownRemark.frontmatter.color};
          }`}
      </style>
      <div className={styles.wpbeSplash}>
        <Link to="/wpbe/news-shows" className={styles.wpbeBody}>
          <h1 className="sr-only">{data.markdownRemark.frontmatter.title}</h1>
          <h2 className="sr-only">
            {data.markdownRemark.frontmatter.subtitle}
          </h2>
        </Link>

        <nav className={styles.wpbeNav}>
          <ul className={styles.wpbeNavList}>
            {data.markdownRemark.frontmatter.links.map((link) => {
              return (
                <li key={link.name}>
                  {link.url.includes('https://www.ppfhouse.com/') ? (
                    <Link to={link.url.replace('https://www.ppfhouse.com', '')}>
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.url}>{link.name}</a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

WpbeStaticIndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        image: PropTypes.string,
        backgroundColor: PropTypes.string,
        color: PropTypes.string,
        links: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
          })
        ),
      }),
    }),
  }).isRequired,
};

export default WpbeStaticIndexPage;

export const wpbeStaticIndexPageQuery = graphql`
  query WpbeStaticIndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        image
        backgroundColor
        color
        links {
          name
          url
        }
      }
    }
  }
`;
