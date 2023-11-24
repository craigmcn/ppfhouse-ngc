import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SharedHead from '../components/shared/Head';
import Layout from '../components/Layout';
import ContactPageTemplate from '../components/ContactPageTemplate';

const ContactPage = ({ data }) => {
  const { markdownRemark } = data;
  const contacts = markdownRemark?.frontmatter?.contacts;

  return (
    <Layout className="contact has-columns" hasBackground={true}>
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
          }),
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

export const Head = () => {
  return (
    <SharedHead
      title="Contact and Community"
      description="Contacts and community links"
    />
  );
};
