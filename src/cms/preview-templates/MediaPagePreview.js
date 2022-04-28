import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { md2Html } from '../../utilities'
import { HTMLContent } from '../../components/Content'

const MediaPagePreview = ({ entry }) => {
  const { title, body, content } = entry.get('data').toJSON()

  return (
    <>
      <h2 className="is-size-3">{ title?.toLowerCase() }</h2>
      <div className="content">
        <HTMLContent content={ md2Html(body) } />
      </div>
      { content.map(item => {
        const { id, video, music, body, url, thumbnail } = item
        const title = video || music
        return (
          <Fragment key={ id }>
            <h3 className="is-size-4">{ title }</h3>
            <p><code>{ url }</code></p>
            <p><img src={ thumbnail } alt={ title } /></p>
            <div className="content">
              <HTMLContent content={ md2Html(body) } />
            </div>
          </Fragment>
        )
      }) }
    </>
  )
}

MediaPagePreview.propTypes = {
  entry: PropTypes.shape({
    get: PropTypes.func,
  }),
}

export default MediaPagePreview
