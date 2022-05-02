import React from 'react';
import PropTypes from 'prop-types';
import { md2Html } from '../utilities';
import { HTMLContent } from '../components/shared/Content';

const Video = ({ video }) => {
  return (
    <>
      <video
        poster={video?.poster}
        controls="controls"
        width="auto"
        height="auto"
      >
        <source src={`/video/${video?.mp4}`} type="video/mp4" />
        {video?.ogg && <source src={`/video/${video.ogg}`} type="video/ogg" />}
        {video?.webm && (
          <source src={`/video/${video.webm}`} type="video/webm" />
        )}
        <track
          default
          kind="captions"
          srcLang="en"
          src={video?.captions ? `/video/${video.captions}` : null}
        />
        Sorry, your browser doesn&rsquo;t support embedded videos.
      </video>
      {video.text && <HTMLContent content={md2Html(video.text)} />}
    </>
  );
};

Video.defaultProps = {
  video: {},
};

Video.propTypes = {
  video: PropTypes.object,
};

export default Video;
