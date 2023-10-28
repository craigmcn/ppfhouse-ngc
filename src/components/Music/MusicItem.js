import React from 'react';
import PropTypes from 'prop-types';
import MusicLink from './MusicLink';

const MusicItem = ({ group }) => {
  const displayTitle =
    group.title === 'LEO37' ? 'LEO37' : group.title.toLowerCase();

  return (
    <div className="column">
      <div className="wrapper">
        <div className="music-item">
          <MusicLink url={group.url} slug={group.slug}>
            <img src={group.thumbnail} alt={group.title} />
          </MusicLink>
          <div className="music-item-title">
            <MusicLink url={group.url} slug={group.slug}>
              {displayTitle}
            </MusicLink>
          </div>
        </div>
      </div>
    </div>
  );
};

MusicItem.propTypes = {
  group: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    url: PropTypes.string,
  }).isRequired,
};

export default MusicItem;
