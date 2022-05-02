import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const ArtDesignItem = (props) => {
  const { id, url, content, thumbnail, title, onClick } = props;

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      onClick(id);
    },
    [id, onClick]
  );

  return (
    <div className="art-design-item">
      <a href={url} title={content} onClick={handleClick}>
        <img src={thumbnail} alt={title} />
      </a>
    </div>
  );
};

ArtDesignItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  content: PropTypes.string,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ArtDesignItem;
