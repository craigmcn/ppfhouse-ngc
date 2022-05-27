import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import ContactPageTemplate from '../components/ContactPageTemplate';

const ContactPage = ({ data }) => {
  const { markdownRemark } = data;
  const contacts = markdownRemark?.frontmatter?.contacts;

  return (
    <Layout className="contact has-columns" hasBackground={true}>
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
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        contacts: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            type: PropTypes.oneOf(['Contact', 'Community']).isRequired,
          })
        ),
      }),
    }),
  }).isRequired,
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
