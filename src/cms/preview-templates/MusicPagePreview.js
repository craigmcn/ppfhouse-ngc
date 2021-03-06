import React from 'react';
import PropTypes from 'prop-types';

const MusicPagePreview = ({ entry }) => {
  const { groups } = entry.get('data').toJSON();

  return (
    <div className="columns">
      {groups.map((group) => {
        const displayTitle =
          group.title === 'LEO37' ? 'LEO37' : group.title.toLowerCase();
        return (
          <div key={group.title} className="column">
            <div>
              <p>
                <a href={group.url || '/' + group.slug}>
                  <img src={group.thumbnail} alt={group.title} />
                </a>
              </p>
              <p>
                <a href={group.url || '/' + group.slug}>{displayTitle}</a>
              </p>
              <p>
                <code>{group.url || '/' + group.slug}</code>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

MusicPagePreview.propTypes = {
  entry: PropTypes.shape({
    get: PropTypes.func,
  }),
};

export default MusicPagePreview;
