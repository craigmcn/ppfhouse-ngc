import React from 'react';
import PropTypes from 'prop-types';
import { md2Html } from '../../utilities';
import { HTMLContent } from '../../components/shared/Content';

const SimplePagePreview = ({ entry }) => {
  const { title, body } = entry.get('data').toJSON();

  return (
    <>
      <h2 className="is-size-3">{title?.toLowerCase()}</h2>
      <div className="content">
        <HTMLContent content={md2Html(body)} />
      </div>
    </>
  );
};

SimplePagePreview.propTypes = {
  entry: PropTypes.shape({
    get: PropTypes.func,
  }),
};

export default SimplePagePreview;
