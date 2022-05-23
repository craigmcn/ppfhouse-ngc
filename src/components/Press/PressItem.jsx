import React from 'react';
import PropTypes from 'prop-types';
import { md2Html } from '../../utilities';
import { HTMLContent } from '../shared/Content';

const PressItem = ({ body, source }) => {
  return (
    <blockquote>
      <HTMLContent content={md2Html(body)} />
      <cite>{source}</cite>
    </blockquote>
  );
};

PressItem.propTypes = {
  body: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default PressItem;
