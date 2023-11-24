import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SharedHead from '../components/shared/Head';
import Layout from '../components/Layout';
import { HTMLContent } from '../components/shared/Content';

const NewsTemplate = ({ title, content, postedBy, date }) => {
  return (
    <>
      <h2>{title}</h2>

      <HTMLContent content={content} className="news-item-content" />

      <div className="news-item-foot">
        posted by {postedBy}, {date}
      </div>
    </>
  );
};

NewsTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  postedBy: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

const News = ({ data }) => {
  const { markdownRemark: news } = data;

  return (
    <Layout className="news has-sidebar">
      <NewsTemplate
        title={news.frontmatter.title}
        postedBy={news.frontmatter.postedBy}
        date={news.frontmatter.date}
        content={news.html}
      />
    </Layout>
  );
};

News.propTypes = {
  data: PropTypes.object.isRequired,
};

export default News;

export const newsQuery = graphql`
  query News($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        postedBy
        date(formatString: "MMMM D, YYYY")
      }
      html
      excerpt
    }
  }
`;

export const Head = (props) => {
  const { markdownRemark: news } = props.data || {}; // eslint-disable-line react/prop-types
  return (
    <SharedHead
      title={`${news.frontmatter.title} :: News`}
      description={`News: ${news.excerpt}`}
    />
  );
};
