import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PressItem from './PressItem';

const PressList = ({ title, items, preview }) => {
  return (
    <>
      {title && <h3 className={preview ? 'is-size-4' : ''}>{title}</h3>}
      {items.map(({ title, pressClippings }, index) => {
        return (
          <Fragment key={index}>
            {title && <h4 className={preview ? 'is-size-5' : ''}>{title}</h4>}
            {pressClippings.map(({ body, source }, index) => {
              return <PressItem key={index} body={body} source={source} />;
            })}
          </Fragment>
        );
      })}
    </>
  );
};

PressList.defaultProps = {
  title: null,
  items: [],
};

PressList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      pressClippings: PropTypes.arrayOf(
        PropTypes.shape({
          body: PropTypes.string.isRequired,
          source: PropTypes.string.isRequired,
        })
      ),
    })
  ),
  preview: PropTypes.bool,
};

export default PressList;
