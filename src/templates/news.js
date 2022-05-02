import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { HTMLContent } from '../components/shared/Content';
import { Helmet } from 'react-helmet';

const NewsTemplate = ({ title, content, postedBy, date }) => {
  return (
    <Fragment>
      <h2>{title}</h2>

      <HTMLContent content={content} className="news-item-content" />

      <div className="news-item-foot">
        posted by {postedBy}, {date}
      </div>
    </Fragment>
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
      <Helmet>
        <title>{news.frontmatter.title} :: News :: PPF House</title>
        <meta name="description" content={`PPF House News: ${news.excerpt}`} />
      </Helmet>
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
