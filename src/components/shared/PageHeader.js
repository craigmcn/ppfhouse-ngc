import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ name }) => (
  <div className="page-header">
    <h2>{name}</h2>
  </div>
);

PageHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PageHeader;
