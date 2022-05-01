import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { md2Html } from '../../utilities'
import { HTMLContent } from '../../components/Content'

const MediaPagePreview = ({ entry }) => {
  const { title, body, items } = entry.get('data').toJSON()

  return (
    <>
      <h2 className="is-size-3">{ title?.toLowerCase() }</h2>
      <div className="content">
        <HTMLContent content={ md2Html(body) } />
      </div>
      { items.map(item => {
        const { id, title, body, url, image, thumbnail } = item
        return (
          <Fragment key={ id }>
            <h3 className="is-size-4">{ title }</h3>
            {url && <p style={{ wordBreak: 'break-word'}}><a href={ url }><code>{ url }</code></a></p>}
            <img src={ thumbnail } alt={ title } width={image ? '200' : '420' } />
            {image && <img className="ml-1" src={ image } alt={ title } width="420" />}
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
