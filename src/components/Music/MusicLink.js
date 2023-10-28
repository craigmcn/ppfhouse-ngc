import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { ChildrenPropType } from '../../utilities/propTypes';

const MusicLink = ({ url, slug, children }) => {
  return (
    <>
      {url ? (
        <a href={url}>{children}</a>
      ) : (
        <Link to={`/${slug}`}>{children}</Link>
      )}
    </>
  );
};

MusicLink.propTypes = {
  url: PropTypes.string,
  slug: PropTypes.string.isRequired,
  children: ChildrenPropType.isRequired,
};

export default MusicLink;
