import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import useSplashBackground from '../hooks/useSplashBackground';
import usePrevious from '../hooks/usePrevious';
import Layout from '../components/Layout';
import * as styles from '../styles/contact.module.scss';

const ContactPageTemplate = ({ contacts }) => {
  const contact = contacts.filter((contact) => contact.type === 'Contact');
  const community = contacts.filter((contact) => contact.type === 'Community');

  const background = useSplashBackground();
  const prevBackground = usePrevious(background);

  useEffect(() => {
    if (!prevBackground) {
      document.querySelector(
        '#container.background'
      ).style.backgroundImage = `url(${background})`;
    }
  }, [prevBackground, background]);

  return (
    <div className="columns-2">
      <div className="column">
        <div className="wrapper">
          <h2>contact</h2>

          <ul className={styles.list}>
            {contact.map((entry, index) => {
              return (
                <li key={index}>
                  <a href={entry.url}>{entry.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="column">
        <div className="wrapper">
          <h2>community</h2>

          <ul className={styles.list}>
            {community.map((entry, index) => {
              return (
                <li key={index}>
                  <a href={entry.url} target="_blank" rel="noreferrer">
                    {entry.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

ContactPageTemplate.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['Contact', 'Community']).isRequired,
    })
  ).isRequired,
};

const ContactPage = ({ data }) => {
  const { markdownRemark } = data;
  const contacts =
    markdownRemark &&
    markdownRemark.frontmatter &&
    markdownRemark.frontmatter.contacts;

  return (
    <Layout
      className="contact background has-columns"
      style={{ minHeight: '894px' }}
    >
      <Helmet>
        <title>Contact and Community :: PPF House</title>
        <meta
          name="description"
          content="PPF House: Contacts and community links"
        />
      </Helmet>
      <ContactPageTemplate contacts={contacts} />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const contactPageQuery = graphql`
  query Contacts {
    markdownRemark(frontmatter: { templateKey: { eq: "contacts" } }) {
      frontmatter {
        contacts {
          name
          url
          type
        }
      }
    }
  }
`;
