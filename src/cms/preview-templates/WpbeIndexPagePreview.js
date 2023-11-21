import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconMap } from '../../utilities';
import './WpbeIndexPagePreview.scss';

const WpbeIndexPagePreview = ({ entry }) => {
  const { title, subtitle, links, image, backgroundColor, color } = entry
    .get('data')
    .toJSON();

  return (
    <div style={{ backgroundColor, color }}>
      <h1 className="is-size-3 has-text-centered">{title}</h1>
      <h2 className="is-size-4 has-text-centered">{subtitle}</h2>

      <img src={image} alt={title} />

      <ul
        className="is-flex is-justify-content-space-between is-size-3"
        // style={{ color }}
      >
        {links.map((link) => {
          return (
            <li key={link.name}>
              <a
                href={link.url}
                title={link.name}
                className={link.icon}
                style={{ color }}
              >
                {link.icon ? (
                  <>
                    <span className="is-sr-only">{link.name}</span>
                    <FontAwesomeIcon
                      icon={iconMap[link.icon]}
                      style={{ width: '1em' }}
                    />
                  </>
                ) : (
                  link.name
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

WpbeIndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    get: PropTypes.func,
  }),
};

export default WpbeIndexPagePreview;
