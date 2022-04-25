import React from 'react'
import PropTypes from 'prop-types'
import { md2Html } from '../../utilities'
import { HTMLContent } from '../../components/Content'
import Video from '../../components/Video'

const VideoPagePreview = ({ entry }) => {
  const { title, body, video } = entry.get('data').toJSON()

  return (
    <>
      <h2 className="is-size-3">{ title?.toLowerCase() }</h2>
      <div className="content">
        <HTMLContent content={ md2Html(body) } />
      </div>
      { video && <Video video={video} /> }
    </>
  )
}

VideoPagePreview.propTypes = {
  entry: PropTypes.shape({
    get: PropTypes.func,
  }),
}

export default VideoPagePreview
