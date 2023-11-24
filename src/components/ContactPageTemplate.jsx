import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../styles/contact.module.scss';

const ContactPageTemplate = ({ contacts }) => {
  const contact = contacts.filter((contact) => contact.type === 'Contact');
  const community = contacts.filter((contact) => contact.type === 'Community');

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
    }),
  ).isRequired,
};

export default ContactPageTemplate;
