import React from 'react'
import PropTypes from 'prop-types'
import { md2Html } from '../utilities'
import { HTMLContent } from '../components/Content'

const Video = ({video}) => {
  return (
    <>
      <video poster={ video?.poster } controls="controls" width="auto" height="auto">
        <source src={ `/video/${video?.mp4}` } type="video/mp4" />
        {video?.ogg && <source src={ `/video/${video.ogg}` } type="video/ogg" />}
        {video?.webm && <source src={ `/video/${video.webm}` } type="video/webm" />}
        {video?.captions && <track default kind="captions" srclang="en" src={ `/video/${video.captions}` } />}
        Sorry, your browser doesn't support embedded videos.
      </video>
      { video.text && <HTMLContent content={ md2Html(video.text) } /> }
    </>
  )
}

Video.defaultProps = {
  video: {},
}

Video.propTypes = {
  video: PropTypes.object,
}

export default Video