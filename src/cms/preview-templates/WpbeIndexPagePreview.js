import React from 'react';
import PropTypes from 'prop-types';

const WpbeIndexPagePreview = ({ entry }) => {
  const { title, subtitle, links, image, backgroundColor, color } = entry
    .get('data')
    .toJSON();

  return (
    <div style={{ backgroundColor }}>
      <h1 className="is-size-3 has-text-centered">{title}</h1>
      <h2 className="is-size-4 has-text-centered">{subtitle}</h2>

      <img src={image} alt={title} />

      <ul className="is-flex is-flex-wrap-wrap">
        {links.map((link) => {
          return (
            <li
              key={`${link.name}-${link.url}`}
              style={{ flex: '1 1 33.333%', textAlign: 'center' }}
            >
              <a href={link.url} style={{ color }}>
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
    //   <div className="columns">
    //     <div className="column">
    //       <h2 className="is-size-4">Contact</h2>
    //       {contact.map((item, index) => {
    //         return (
    //           <p key={index}>
    //             <a href={item.url}>{item.name}</a> (<code>{item.url}</code>)
    //           </p>
    //         );
    //       })}
    //     </div>

    //     <div className="column">
    //       <h2 className="is-size-4">Community</h2>
    //       {community.map((item, index) => {
    //         return (
    //           <p key={index}>
    //             <a href={item.url} target="_blank" rel="noreferrer">
    //               {item.name}
    //             </a>{' '}
    //             (<code>{item.url}</code>)
    //           </p>
    //         );
    //       })}
    //     </div>
    //   </div>
  );
};

WpbeIndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    get: PropTypes.func,
  }),
};

export default WpbeIndexPagePreview;
