import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { HTMLContent } from '../Content'

const NewsItem = ({ data }) => {
  const {
    fields: { slug },
    frontmatter: {
      title,
      postedBy,
      date,
    },
    html,
  } = data

  return (
    <article className="news-item">
      <div className="news-item-date">
        <Link to={ slug }>{ title }</Link>
      </div>

      <HTMLContent content={ html } className="news-item-content" />
      <div className="news-item-foot">posted by { postedBy }, { date }</div>
    </article>
  )
}

NewsItem.propTypes = {
  data: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      postedBy: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
    html: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
  }),
}

export default NewsItem
