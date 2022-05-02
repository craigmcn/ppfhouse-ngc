import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { HTMLContent } from '../components/shared/Content';
import useSplashBackground from '../hooks/useSplashBackground';
import usePrevious from '../hooks/usePrevious';

export const AboutPageTemplate = ({
  content,
  aboutContent,
  aboutContentList,
}) => {
  const background = useSplashBackground();
  const prevBackground = usePrevious(background);

  useEffect(() => {
    if (!prevBackground) {
      document.querySelector(
        '#container.background'
      ).style.backgroundImage = `url(${background})`;
    }
  }, [prevBackground, background]);

  return (
    <div className="columns-2">
      <div className="column">
        <div className="wrapper">
          <h2>PPF House</h2>
          <HTMLContent content={content} />
        </div>
      </div>

      <div className="column">
        <div className="wrapper">
          {aboutContent.map((content, index) => {
            return (
              <Fragment key={index}>
                <h2>{content.heading}</h2>
                <HTMLContent content={aboutContentList[index]} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  content: PropTypes.string,
  aboutContent: PropTypes.array,
  aboutContentList: PropTypes.array,
};
