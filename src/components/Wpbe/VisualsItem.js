import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faExpand } from '@fortawesome/free-solid-svg-icons';
import * as styles from '../../styles/wpbe.module.css';

const VisualsItem = (props) => {
  const { id, url, thumbnail, title, onClick, type } = props;

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      onClick(id);
    },
    [id, onClick]
  );

  return (
    <div className={styles.wpbeVisualsItem}>
      <a
        href={url}
        title={`Click to expand${type !== 'image' ? ' and play' : ''}${
          title ? '\n' + title : ''
        }`}
        onClick={handleClick}
      >
        <img src={thumbnail} alt={title} />
        <FontAwesomeIcon
          className={styles.icon}
          icon={type === 'image' ? faExpand : faCirclePlay}
          size="2x"
          fixedWidth
        />
      </a>
    </div>
  );
};

VisualsItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['image', 'video']).isRequired,
};

export default VisualsItem;
