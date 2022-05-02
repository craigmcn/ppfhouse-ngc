import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

const NewsList = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <>
      {edges.map(({ node }, index) => (
        <NewsItem key={index} data={node} />
      ))}
    </>
  );
};

NewsList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default NewsList;
